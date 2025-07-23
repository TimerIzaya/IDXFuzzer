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
import os, time, glob, subprocess, numpy as np, shutil
import config
from coverage.bitmap import GlobalEdgeBitmap

# ---------- 常量路径 ----------
CORPUS_ROOT = "result/corpus"
CRASH_ROOT = "result/crashes"
TIMEOUT_DIR = os.path.join(CRASH_ROOT, "timeout")
LOG_FILE = "result/fuzz_stats.log"


# ---------- 工具函数 ----------
def make_uid() -> str:
    """生成 8 位短 UID 作为用例目录 / 文件名前缀"""
    return uuid.uuid4().hex[:8]

def update_counter(counter: Value, delta: int = 1, reset: bool = False, value: int = 0):
    """
    通用更新共享计数器的函数
    - delta: 增加多少（默认+1）
    - reset=True: 直接重置为 value
    """
    with counter.get_lock():
        if reset:
            counter.value = value
        else:
            counter.value += delta

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

def gen_case(case_id: str):
    """生成一条测试用例：IR → JS → HTML，返回 (html_path, case_root)"""
    case_root = f"{CORPUS_ROOT}/{case_id}"
    os.makedirs(case_root, exist_ok=True)

    ir = generate_ir_program()
    with open(f"{case_root}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.lift(ir)

    html_path = f"{case_root}/{case_id}.html"
    wrap_js_in_html(js_code, html_path)
    return html_path, case_root

# ---------- 全局共享计数器（Worker 进程可见） ----------
_shared_total_edges = None
_shared_timeout_cnt = None
_shared_total_exec_cnt = None
_shared_last_interesting_exec = None
_shared_pending_cnt = None
_shared_new_cnt = None
_shared_completed_cnt = None
_shared_attachments_cnt = None

def init_worker(edge_counter: Value, timeout_counter: Value,
                exec_counter: Value, last_interesting_counter: Value,
                pending_counter: Value, new_counter: Value,
                completed_counter: Value, attachment_counter: Value) -> None:
    """
    Pool initializer：在每个子进程中把共享 Value 绑定到全局变量。
    必须使用此方式，避免 Value 对象被 pickle 造成 RuntimeError。
    """
    global _shared_total_edges, _shared_timeout_cnt, _shared_total_exec_cnt, _shared_last_interesting_exec
    global _shared_pending_cnt, _shared_new_cnt, _shared_completed_cnt, _shared_attachments_cnt
    _shared_total_edges = edge_counter
    _shared_timeout_cnt = timeout_counter
    _shared_total_exec_cnt = exec_counter
    _shared_last_interesting_exec = last_interesting_counter
    _shared_pending_cnt = pending_counter
    _shared_new_cnt = new_counter
    _shared_completed_cnt = completed_counter
    _shared_attachments_cnt = attachment_counter

def run(html_path: str, edge_bitmap: GlobalEdgeBitmap):

    def checkCrashCnt():
        pending_cnt = count_files_in_dir(os.path.join(out_dir, "pending"))
        new_cnt = count_files_in_dir(os.path.join(out_dir, "new"))
        completed_cnt = count_files_in_dir(os.path.join(out_dir, "completed"))
        attachments_cnt = count_files_in_dir(os.path.join(out_dir, "attachments"))

        if pending_cnt > 0:
            update_counter(_shared_pending_cnt, pending_cnt)
        if new_cnt > 0:
            update_counter(_shared_new_cnt, pending_cnt)
        if completed_cnt > 0:
            update_counter(_shared_completed_cnt, pending_cnt)
        if attachments_cnt > 0:
            update_counter(_shared_attachments_cnt, pending_cnt)

        crashStatus = pending_cnt + new_cnt + completed_cnt + attachments_cnt
        return crashStatus

    def now_ms() -> int:
        return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path)
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")
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
        f"--crash-dumps-dir={out_dir}",
        f"file://{html_path}"
    ]

    env = os.environ.copy()
    env["SANCOV_OUTPUT_DIR"] = out_dir

    try:
        subprocess.run(cmd,
                       stdout=subprocess.DEVNULL,
                       stderr=subprocess.DEVNULL,
                       env=env,
                       timeout=config.PROCESS_TIMEOUT)
    except subprocess.TimeoutExpired:
        update_counter(timeout_counter)
        # 先看超时是否触发crash
        crashCnt = checkCrashCnt()
        return -1, crashCnt
    except subprocess.CalledProcessError:
        pass


    # 先把chromium tmp环境给删了
    shutil.rmtree(tmp_dir)

    # 找bin
    bin_files = glob.glob(bin_glob)
    if not bin_files:
        raise Exception("覆盖率文件缺失")

    total_new_edges = 0
    for cov_file in bin_files:
        total_new_edges += edge_bitmap.update_from_file(cov_file)
        os.remove(cov_file)

    return total_new_edges, checkCrashCnt()

def run_one_case(bitmap_name: str) -> bool:
    cid = make_uid()
    update_counter(_shared_total_exec_cnt)
    update_counter(_shared_last_interesting_exec)

    html_path, case_root = gen_case(cid)
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, crashStatus = run(html_path, bitmap)
    bitmap.close()

    out_dir = os.path.dirname(html_path)
    if crashStatus > 0:
        shutil.move(out_dir, CRASH_ROOT)
    else:
        if new_edges == -1:  # timeout
            update_counter(_shared_timeout_cnt)
            shutil.move(case_root, TIMEOUT_DIR)
        elif new_edges > 0:  # interesting
            update_counter(_shared_total_edges, delta=new_edges)
            update_counter(_shared_last_interesting_exec, reset=True, value=0)
            dst_dir = f"{CORPUS_ROOT}/{cid}"
            shutil.move(case_root, dst_dir)
        elif new_edges == 0:  # useless
            shutil.rmtree(out_dir)

def count_files_in_dir(path: str) -> int:
    if not os.path.exists(path):
        return 0
    return sum(1 for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)))

def stat_worker(bitmap: GlobalEdgeBitmap,
                total_edge_counter: Value,
                timeout_counter: Value,
                total_exec_counter: Value,
                last_interesting_counter: Value,
                pending_cnt_counter: Value,
                new_cnt_counter: Value,
                completed_cnt_counter: Value,
                attachment_cnt_counter: Value,
                start_ts: float) -> None:
    last_exec = 0  # 上次统计时的总执行次数
    last_time = start_ts
    while True:
        time.sleep(5)  # ✅ 每60秒统计一次
        now = time.time()
        elapsed = int(now - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)

        # ✅ 吞吐量 = （当前执行总数 - 上次执行总数） / （时间差分钟）
        exec_diff = total_exec_counter.value - last_exec
        throughput = exec_diff / max((now - last_time) / 60.0, 1e-6)

        last_exec = total_exec_counter.value
        last_time = now

        corpus_cnt = sum(1 for f in os.listdir(CORPUS_ROOT)
                         if os.path.isdir(os.path.join(CORPUS_ROOT, f)))
        coverage_pct = np.count_nonzero(bitmap.bitmap) / config.EDGE_TOTAL_COUNT * 100

        log_msg = (
            "\n========== IDX Fuzzer Stats ==========\n"
            f"{'Elapsed Time':<25}: {h:02d}h {m:02d}m {s:02d}s\n"
            f"{'Total Executions':<25}: {total_exec_counter.value}\n"
            f"{'Throughput (seeds/min)':<25}: {throughput:.2f}\n"
            f"{'Total New Edges':<25}: {total_edge_counter.value}\n"
            f"{'Corpus Count':<25}: {corpus_cnt}\n"
            f"{'Last Interesting Seed @':<25}: {last_interesting_counter.value}\n"
            f"{'Coverage':<25}: {coverage_pct:.4f}%\n"
            f"{'Timeout Cases':<25}: {timeout_counter.value}\n"
            f"{'Crash (pending)':<25}: {pending_cnt_counter.value}\n"
            f"{'Crash (new)':<25}: {new_cnt_counter.value}\n"
            f"{'Crash (completed)':<25}: {completed_cnt_counter.value}\n"
            f"{'Crash (attachments)':<25}: {attachment_cnt_counter.value}\n"
            "======================================\n"
        )
        print(log_msg, end="")
        with open(LOG_FILE, "a", encoding="utf-8") as logf:
            logf.write(log_msg)

def init_output_dirs() -> None:
    for path in [CORPUS_ROOT, CRASH_ROOT, TIMEOUT_DIR]:
        if os.path.exists(path):
            shutil.rmtree(path)

        print(f"create path: {path}")
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
    pending_cnt_counter = Value('i', 0)
    new_cnt_counter = Value('i', 0)
    completed_cnt_counter = Value('i', 0)
    attachment_cnt_counter = Value('i', 0)

    start_time = time.time()
    threading.Thread(
        target=stat_worker,
        args=(bitmap, total_edge_counter, timeout_counter, total_exec_counter,
              last_interesting_counter, pending_cnt_counter, new_cnt_counter,
              completed_cnt_counter, attachment_cnt_counter, start_time),
        daemon=True
    ).start()

    pool = Pool(
        PROCESS_COUNT,
        initializer=init_worker,
        initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
                  pending_cnt_counter, new_cnt_counter,completed_cnt_counter, attachment_cnt_counter)
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
