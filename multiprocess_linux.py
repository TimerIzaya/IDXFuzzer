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
import shutil
import time
import threading
from itertools import repeat
from multiprocessing import Pool, cpu_count, Value

import numpy as np

import config
from IR.IRFuzzer import generate_ir_program
from coverage.run_cov_linux import run_and_update_coverage_linux
from lifter.IRToJSLifter import IRToJSLifter
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
_shared_total_edges = None        # type: Value
_shared_timeout_cnt = None        # type: Value
_shared_total_exec_cnt = None     # type: Value
_shared_last_interesting_exec = None  # type: Value


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

        log_msg = (
            "\n========== IDX Fuzzer Stats ==========\n"
            f"{'Elapsed Time':<25}: {h:02d}h {m:02d}m {s:02d}s\n"
            f"{'Total Executions':<25}: {total_exec_counter.value}\n"
            f"{'Corpus Count':<25}: {corpus_cnt}\n"
            f"{'Total New Edges':<25}: {total_edge_counter.value}\n"
            f"{'Timeout Cases':<25}: {timeout_counter.value}\n"
            f"{'Last Interesting Seed @':<25}: {last_interesting_counter.value}\n"
            f"{'Coverage':<25}: {coverage_pct:.4f}%\n"
            f"{'Crash (pending)':<25}: {pending_cnt}\n"
            f"{'Crash (new)':<25}: {new_cnt}\n"
            f"{'Crash (completed)':<25}: {completed_cnt}\n"
            "======================================\n"
        )
        print(log_msg, end="")

        with open(LOG_FILE, "a", encoding="utf-8") as logf:
            logf.write(log_msg)



def run_one_case(bitmap_name: str) -> bool:
    cid = make_uid()

    # 增加总执行次数 & 更新距离上次有趣种子执行的计数
    with _shared_total_exec_cnt.get_lock():
        _shared_total_exec_cnt.value += 1
        current_exec = _shared_total_exec_cnt.value
    with _shared_last_interesting_exec.get_lock():
        _shared_last_interesting_exec.value += 1

    # 生成测试用例，初始放到 uselessCorpus
    html_path, case_root = gen_case(cid, USELESS_CORPUS_ROOT)

    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, _ = run_and_update_coverage_linux(html_path, bitmap)
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

# ---------- 输出目录初始化 ----------
def init_output_dirs() -> None:
    """清空 / 创建 corpus、uselessCorpus、crashes/timeout 目录"""
    for path in [CORPUS_ROOT, USELESS_CORPUS_ROOT, TIMEOUT_DIR]:
        if os.path.exists(path):
            shutil.rmtree(path)
        os.makedirs(path, exist_ok=True)
    print("[*] Initialized output directories.")


# ---------- 主入口 ----------
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
