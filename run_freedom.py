#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
multiprocess_main_read.py  ← 新文件名（可覆盖旧文件）

读取给定目录中的 HTML 文件，并行执行 content_shell 收集覆盖率。
"""

import os, time, threading, shutil
from multiprocessing import Pool, cpu_count, Value
import numpy as np

from coverage.bitmap import GlobalEdgeBitmap
from coverage.run_cov_testCorpus import run_and_update_coverage_testCorpus

# ====== 路径 ======
INPUT_HTML_DIR = "/mnt/VMShare/output"          # <<< 你的 HTML 文件所在目录
CRASH_ROOT     = "result/crashes"
TIMEOUT_DIR    = os.path.join(CRASH_ROOT, "timeout")

# ====== 共享计数 ======
_total_new_edges = None   # type: Value
_timeout_cnt     = None   # type: Value
_processed_cnt   = None   # type: Value

# --------------------------------------------------------------------
def collect_html_cases(root: str) -> list[str]:
    """递归收集所有 .html 文件路径"""
    cases = []
    for dp, _, fns in os.walk(root):
        cases.extend(os.path.join(dp, fn) for fn in fns if fn.endswith(".html"))
    cases.sort()
    return cases

# --------------------------------------------------------------------
def init_worker(edge_counter: Value, timeout_counter: Value,
                processed_counter: Value) -> None:
    global _total_new_edges, _timeout_cnt, _processed_cnt
    _total_new_edges = edge_counter
    _timeout_cnt     = timeout_counter
    _processed_cnt   = processed_counter

# --------------------------------------------------------------------
def run_one_case(html_path: str, bitmap_name: str) -> bool:
    """在子进程中执行单个 html，返回是否产生新边"""
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, _ = run_and_update_coverage_testCorpus(html_path, bitmap)
    bitmap.close()

    # 更新计数
    with _processed_cnt.get_lock():
        _processed_cnt.value += 1

    if new_edges == -1:   # timeout / crash
        with _timeout_cnt.get_lock():
            _timeout_cnt.value += 1
    elif new_edges > 0:
        with _total_new_edges.get_lock():
            _total_new_edges.value += new_edges
    return new_edges > 0

# --------------------------------------------------------------------
def stat_worker(bitmap: GlobalEdgeBitmap,
                total_edge_counter: Value, timeout_counter: Value,
                processed_counter: Value, start_ts: float,
                total_cases: int) -> None:
    while True:
        time.sleep(5)
        elapsed = int(time.time() - start_ts)
        h, rem  = divmod(elapsed, 3600)
        m, s    = divmod(rem, 60)

        coverage_pct = np.count_nonzero(bitmap.bitmap) / bitmap.size * 100
        done = processed_counter.value
        print("\n========== IDX Fuzzer Stats ==========")
        print(f"{'Elapsed Time':<18}: {h:02d}h {m:02d}m {s:02d}s")
        print(f"{'Processed/Total':<18}: {done}/{total_cases}")
        print(f"{'Total New Edges':<18}: {total_edge_counter.value}")
        print(f"{'Timeout Cases':<18}: {timeout_counter.value}")
        print(f"{'Coverage':<18}: {coverage_pct:.4f}%")
        print("======================================\n")

# --------------------------------------------------------------------
if __name__ == "__main__":
    # 收集全部待测 HTML
    html_cases = collect_html_cases(INPUT_HTML_DIR)
    if not html_cases:
        raise RuntimeError(f"No .html found in {INPUT_HTML_DIR}")

    # 全局位图
    bitmap      = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()

    # 共享计数器
    total_edge_counter = Value('i', 0)
    timeout_counter    = Value('i', 0)
    processed_counter  = Value('i', 0)
    processed_counter  = Value('i', 0)
    start_time         = time.time()

    # 统计线程
    threading.Thread(
        target=stat_worker,
        args=(bitmap, total_edge_counter, timeout_counter,
              processed_counter, start_time, len(html_cases)),
        daemon=True
    ).start()

    # 进程池
    PROCESS_COUNT = max(cpu_count() - 2, 1)
    pool = Pool(
        PROCESS_COUNT,
        initializer=init_worker,
        initargs=(total_edge_counter, timeout_counter, processed_counter)
    )

    try:
        # —— 把所有 html 分批提交到进程池
        BATCH = PROCESS_COUNT * 2
        for i in range(0, len(html_cases), BATCH):
            batch = html_cases[i:i+BATCH]
            pool.starmap(run_one_case, [(p, bitmap_name) for p in batch])
    except KeyboardInterrupt:
        print("Interrupted by user.")
    finally:
        pool.terminate()
        pool.join()
        bitmap.close()
        bitmap.unlink()
        print("[*] IDX Fuzzer exited gracefully.")
