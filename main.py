#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
multiprocess_main.py

并行执行 IDX Fuzzer：
- 主进程生成 IR → JS → HTML
- Pool 工作进程调用 content_shell 收集覆盖率
- 共享计数器统计新边、超时、总执行次数
- 每 60 秒打印一次运行统计信息并写入日志
- 种子保存：有趣 → corpus，超时 → crashes/timeout，异常/崩溃 → crashes
"""
import uuid
import threading
from itertools import repeat
from multiprocessing import Pool, Value
import time, glob, subprocess, numpy as np, shutil, signal

import config
from config import *
from coverage.bitmap import GlobalEdgeBitmap
from generator import gen_case
from tool.tool import count_files_in_dir, make_uid



#准备执行之前的


def run(html_path: str, edge_bitmap: GlobalEdgeBitmap):



    # 覆盖率处理
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)
    if not bin_files:
        # 无覆盖率文件：按 0 新边处理（或改成 -2 归档 crash）
        with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
            mf.write(f"ok in {time.monotonic() - t0:.3f}s (no sancov)\n")
        return 0, updateCrashCnt()

    total_new_edges = 0
    for cov_file in bin_files:
        total_new_edges += edge_bitmap.update_from_file(cov_file)
        os.remove(cov_file)

    with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
        mf.write(f"ok in {time.monotonic() - t0:.3f}s\n")
    return total_new_edges, updateCrashCnt()


# ---------- 核心执行 ----------
def run_one_case(bitmap_name: str) -> bool:
    # 计数：总执行 + 距上次有趣
    update_counter(_shared_total_exec_cnt)
    update_counter(_shared_last_interesting_exec)

    cid = make_uid()
    html_path, out_dir = gen_case(cid)
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, crashStatus = run(html_path, bitmap)
    bitmap.close()

    # 结果归档
    if crashStatus > 0 or new_edges == -2:
        shutil.move(out_dir, CRASH_ROOT)  # 异常/崩溃
    else:
        if new_edges == -1:  # 语义超时
            update_counter(_shared_timeout_cnt)
            shutil.move(out_dir, TIMEOUT_DIR)
        elif new_edges > 0:  # interesting
            update_counter(_shared_total_edges, delta=new_edges)
            update_counter(_shared_last_interesting_exec, reset=True, value=0)
            dst_dir = f"{CORPUS_ROOT}/{cid}"
            if out_dir != dst_dir:
                shutil.move(out_dir, dst_dir)
        else:  # 0 新边 → 丢弃
            shutil.rmtree(out_dir, ignore_errors=True)


# ---------- 统计 ----------
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
    last_exec = 0
    last_time = start_ts
    while True:
        time.sleep(5)  # 每 60 秒打印一次
        now = time.time()
        elapsed = int(now - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)
        exec_diff = total_exec_counter.value - last_exec
        throughput = exec_diff / max((now - last_time) / 60.0, 1e-6)
        last_exec = total_exec_counter.value
        last_time = now

        try:
            corpus_cnt = sum(1 for f in os.listdir(CORPUS_ROOT)
                             if os.path.isdir(os.path.join(CORPUS_ROOT, f)))
        except FileNotFoundError:
            corpus_cnt = 0

        coverage_pct = (np.count_nonzero(bitmap.bitmap) / max(1, config.EDGE_TOTAL_COUNT)) * 100.0

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


# ---------- 初始化 ----------
def init_output_dirs() -> None:
    for path in [CORPUS_ROOT, CRASH_ROOT, TIMEOUT_DIR]:
        if os.path.exists(path):
            shutil.rmtree(path, ignore_errors=True)
        print(f"create path: {path}")
        os.makedirs(path, exist_ok=True)
    print("[*] Initialized output directories.]")


# ---------- 主程序 ----------
if __name__ == "__main__":
    init_output_dirs()

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
        config.PROCESS_COUNT,
        initializer=init_worker,
        initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
                  pending_cnt_counter, new_cnt_counter, completed_cnt_counter, attachment_cnt_counter),
        maxtasksperchild=100,  # 防止长期运行内存/句柄膨胀
    )

    try:
        # 无限流：持续投喂同一个 bitmap_name；结果全部消费，避免堆积
        for _ in pool.imap_unordered(run_one_case, repeat(bitmap_name), chunksize=1):
            pass
    except KeyboardInterrupt:
        print("Interrupted by user.")
    finally:
        pool.terminate()
        pool.join()
        bitmap.close()
        bitmap.unlink()
        print("[*] IDX Fuzzer exited gracefully.]")
