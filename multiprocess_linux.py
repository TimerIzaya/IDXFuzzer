#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
multiprocess_main.py

并行执行 IDX Fuzzer：
- 主进程生成 IR → JS → HTML
- Pool 中的工作进程调用 content_shell 收集覆盖率
- 使用全局共享计数器统计新边、超时、总执行次数
- 每 60 秒打印一次运行统计信息并写入日志文件
- 所有种子保存：有趣 → corpus，无效 → uselessCorpus
"""
import os
import json
import uuid
import threading
from itertools import repeat
from multiprocessing import Pool, cpu_count, Value
from IR.IRFuzzer import generate_ir_program
from lifter.IRToJSLifter import IRToJSLifter
import os, time, glob, subprocess, numpy as np, tempfile, shutil
import config
from coverage.bitmap import GlobalEdgeBitmap

# ---------- 常量路径 ----------
CORPUS_ROOT = "result/corpus"
USELESS_CORPUS_ROOT = "result/uselessCorpus"
CRASH_ROOT = "result/crashes"
TIMEOUT_DIR = os.path.join(CRASH_ROOT, "timeout")
LOG_FILE = "result/fuzz_stats.log"


# ---------- 工具函数 ----------
def make_uid() -> str:
    """生成 8 位短 UID 作为用例目录 / 文件名前缀"""
    return uuid.uuid4().hex[:8]


def wrap_js_in_html(lines, out_path: str) -> None:
    """将 JS 代码包裹为可执行的 HTML 页面"""
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(
            "<!DOCTYPE html>\n<html><head><meta charset=\"UTF-8\">"
            "<title>IndexedDB</title></head>\n<body><script>\n"
            f"setTimeout(() => {{ window.close(); }}, {config.TIMEOUT});\n"
        )
        f.writelines(lines)
        f.write(f"</script></body></html>")


def gen_case(case_id: str, root_dir: str):
    """生成一条测试用例：IR → JS → HTML，返回 (html_path, case_root)"""
    case_root = f"{root_dir}/{case_id}"
    os.makedirs(case_root, exist_ok=True)

    ir = generate_ir_program()
    with open(f"{case_root}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.lift(ir)

    html_path = f"{case_root}/{case_id}.html"
    wrap_js_in_html(js_code, html_path)
    return html_path, case_root


# ---------- 全局共享计数器（Worker 进程可见） ----------
_shared_total_edges = None  # type: Value
_shared_timeout_cnt = None  # type: Value
_shared_total_exec_cnt = None  # type: Value
_shared_last_interesting_exec = None  # type: Value


def init_worker(edge_counter: Value, timeout_counter: Value,
                exec_counter: Value, last_interesting_counter: Value) -> None:
    """
    Pool initializer：在每个子进程中把共享 Value 绑定到全局变量。
    必须使用此方式，避免 Value 对象被 pickle 造成 RuntimeError。
    """
    global _shared_total_edges, _shared_timeout_cnt, _shared_total_exec_cnt, _shared_last_interesting_exec
    _shared_total_edges = edge_counter
    _shared_timeout_cnt = timeout_counter
    _shared_total_exec_cnt = exec_counter
    _shared_last_interesting_exec = last_interesting_counter


def run(html_path: str, edge_bitmap: GlobalEdgeBitmap):
    def now_ms() -> int:
        return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)

    out_dir = os.path.dirname(html_path)
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # todo 每个html目录单独分配一个chrome模拟环境 后期是否可以优化？
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    cmd = [
        "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
        "--no-sandbox", "--headless=new", "--ozone-platform=headless",
        "--disable-gpu", "--disable-plugins", "--disable-extensions",
        "--disable-breakpad", "--disable-default-apps", "--disable-sync",
        "--disable-background-networking", "--disable-popup-blocking",
        "--no-default-browser-check", "--password-store=basic",
        "--use-mock-keychain", "--disable-hang-monitor",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=20000", f"--user-data-dir={tmp_dir}",
        "--enable-crash-reporter",
        f"--crash-dumps-dir={out_dir}",  #直接把crash放在html目录下
        f"file://{html_path}"
    ]

    env = os.environ.copy()
    env["SANCOV_OUTPUT_DIR"] = out_dir

    t1 = now_ms()
    try:
        subprocess.run(cmd,
                       stdout=subprocess.DEVNULL,
                       stderr=subprocess.DEVNULL,
                       env=env,
                       timeout=config.PROCESS_TIMEOUT)
    except subprocess.TimeoutExpired:
        shutil.copy(html_path, TIMEOUT_DIR)
        # 把ir也copy过去
        json_path = html_path.replace(".html", ".json")
        if os.path.exists(json_path):
            shutil.copy(json_path, TIMEOUT_DIR)
        return -1, 0.0
    except subprocess.CalledProcessError:
        # 不再当作 crash，只忽略
        pass

    t2 = now_ms()

    bin_files = glob.glob(bin_glob)
    if not bin_files:
        raise Exception("覆盖率文件缺失")
        # return 0, EDGE_TOTAL_COUNT

    total_new_edges = 0
    # 把临时bitmap拿去和总的比较
    for cov_file in bin_files:
        total_new_edges += edge_bitmap.update_from_file(cov_file)

    coverage = np.count_nonzero(edge_bitmap.bitmap) / config.EDGE_TOTAL_COUNT * 100
    return total_new_edges, coverage


def run_one_case(bitmap_name: str) -> bool:
    cid = make_uid()

    # 增加总执行次数 & 更新距离上次有趣种子执行的计数
    with _shared_total_exec_cnt.get_lock():
        _shared_total_exec_cnt.value += 1

    with _shared_last_interesting_exec.get_lock():
        _shared_last_interesting_exec.value += 1

    # 生成测试用例，初始放到 uselessCorpus
    html_path, case_root = gen_case(cid, USELESS_CORPUS_ROOT)

    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, _ = run(html_path, bitmap)
    bitmap.close()

    if new_edges == -1:  # timeout
        with _shared_timeout_cnt.get_lock():
            _shared_timeout_cnt.value += 1
        dst_dir = f"{TIMEOUT_DIR}/{cid}"
        shutil.move(case_root, dst_dir)

    elif new_edges > 0:  # interesting
        with _shared_total_edges.get_lock():
            _shared_total_edges.value += new_edges
        with _shared_last_interesting_exec.get_lock():
            _shared_last_interesting_exec.value = 0  # ✅重置
        dst_dir = f"{CORPUS_ROOT}/{cid}"
        shutil.move(case_root, dst_dir)

    # else: uselessCorpus 不动
    return new_edges > 0


def count_files_in_dir(path: str) -> int:
    """统计目录下所有文件数量（不包括子目录）"""
    if not os.path.exists(path):
        return 0
    return sum(
        1 for f in os.listdir(path)
        if os.path.isfile(os.path.join(path, f))
    )


def stat_worker(bitmap: GlobalEdgeBitmap,
                total_edge_counter: Value,
                timeout_counter: Value,
                total_exec_counter: Value,
                last_interesting_counter: Value,
                start_ts: float) -> None:
    """每 60 秒打印一次运行统计信息并写入日志文件"""
    while True:
        time.sleep(5)
        elapsed = int(time.time() - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)

        corpus_cnt = sum(
            1 for f in os.listdir(CORPUS_ROOT)
            if os.path.isdir(os.path.join(CORPUS_ROOT, f))
        )
        coverage_pct = np.count_nonzero(bitmap.bitmap) / config.EDGE_TOTAL_COUNT * 100

        # ✅ 新增 crash 文件统计
        pending_cnt = count_files_in_dir(os.path.join(CRASH_ROOT, "pending"))
        new_cnt = count_files_in_dir(os.path.join(CRASH_ROOT, "new"))
        completed_cnt = count_files_in_dir(os.path.join(CRASH_ROOT, "completed"))
        attachments_cnt = count_files_in_dir(os.path.join(CRASH_ROOT, "attachments"))

        log_msg = (
            "\n========== IDX Fuzzer Stats ==========\n"
            f"{'Elapsed Time':<25}: {h:02d}h {m:02d}m {s:02d}s\n"
            f"{'Total Executions':<25}: {total_exec_counter.value}\n"
            f"{'Total New Edges':<25}: {total_edge_counter.value}\n"
            f"{'Corpus Count':<25}: {corpus_cnt}\n"
            f"{'Last Interesting Seed @':<25}: {last_interesting_counter.value}\n"
            f"{'Coverage':<25}: {coverage_pct:.4f}%\n"
            f"{'Timeout Cases':<25}: {timeout_counter.value}\n"
            f"{'Crash (pending)':<25}: {pending_cnt}\n"
            f"{'Crash (new)':<25}: {new_cnt}\n"
            f"{'Crash (completed)':<25}: {completed_cnt}\n"
            f"{'Crash (attachments)':<25}: {attachments_cnt}\n"
            "======================================\n"
        )
        print(log_msg, end="")

        with open(LOG_FILE, "a", encoding="utf-8") as logf:
            logf.write(log_msg)


def init_output_dirs() -> None:
    for path in [CORPUS_ROOT, USELESS_CORPUS_ROOT, TIMEOUT_DIR, CRASH_ROOT]:
        if os.path.exists(path):
            shutil.rmtree(path)
        os.makedirs(path, exist_ok=True)
    print("[*] Initialized output directories.")


if __name__ == "__main__":
    init_output_dirs()

    PROCESS_COUNT = cpu_count()

    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()

    total_edge_counter = Value('i', 0)
    timeout_counter = Value('i', 0)
    total_exec_counter = Value('i', 0)
    last_interesting_counter = Value('i', 0)
    start_time = time.time()

    threading.Thread(
        target=stat_worker,
        args=(bitmap, total_edge_counter, timeout_counter,
              total_exec_counter, last_interesting_counter, start_time),
        daemon=True
    ).start()

    pool = Pool(
        PROCESS_COUNT,
        initializer=init_worker,
        initargs=(total_edge_counter, timeout_counter,
                  total_exec_counter, last_interesting_counter)
    )

    try:
        while True:
            args = repeat(bitmap_name, PROCESS_COUNT * 2)
            for _ in pool.imap_unordered(run_one_case, args, chunksize=1):
                break
    except KeyboardInterrupt:
        print("Interrupted by user.")
    finally:
        pool.terminate()
        pool.join()
        bitmap.close()
        bitmap.unlink()
        print("[*] IDX Fuzzer exited gracefully.")
