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
from execution.run_content_shell import run_content_shell
from generator import gen_case
from tool.tool import count_files_in_dir, make_uid


# 准备执行之前的
def update_counter(counter: Value, delta: int = 1, reset: bool = False, value: int = 0):
    with counter.get_lock():
        if reset:
            counter.value = value
        else:
            counter.value += delta


# ---------- 共享计数器（worker 可见） ----------
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


def updateCrashCnt(html_out_dir: str):
    pending_cnt = count_files_in_dir(os.path.join(html_out_dir, "pending"))
    new_cnt = count_files_in_dir(os.path.join(html_out_dir, "new"))
    completed_cnt = count_files_in_dir(os.path.join(html_out_dir, "completed"))
    attachments_cnt = count_files_in_dir(os.path.join(html_out_dir, "attachments"))
    if pending_cnt > 0:       update_counter(_shared_pending_cnt)
    if new_cnt > 0:           update_counter(_shared_new_cnt)
    if completed_cnt > 0:     update_counter(_shared_completed_cnt)
    if attachments_cnt > 0:   update_counter(_shared_attachments_cnt)
    return pending_cnt + new_cnt + completed_cnt + attachments_cnt > 0


# ---------- 核心执行 ----------
def run_one_case(bitmap_name: str):
    # 初始化基础数据
    update_counter(_shared_total_exec_cnt)
    update_counter(_shared_last_interesting_exec)
    cid = make_uid()
    html_path, out_dir = gen_case(cid)
    global_bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)

    html_path_abs = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 执行content_shell
    is_content_shell_done = run_content_shell(html_path_abs)
    # 执行完去更新chromium自己的crash状态
    is_crash_reporter_work = updateCrashCnt(html_path_abs)

    # 覆盖率处理
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)
    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        is_content_shell_done = False

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap.update_from_file(cov_file)
        os.remove(cov_file)

    global_bitmap.close()

    # report检测到的bug，不一定有用
    if is_crash_reporter_work:
        shutil.move(out_dir, CRASH_ROOT)
        return
    # 超时 == 语义错误 或者 crash
    if not is_content_shell_done:
        update_counter(_shared_timeout_cnt)
        shutil.move(out_dir, TIMEOUT_DIR)
        return

    if new_edges > 0:
        update_counter(_shared_total_edges, delta=new_edges)
        update_counter(_shared_last_interesting_exec, reset=True, value=0)
        dst_dir = f"{CORPUS_ROOT}/{cid}"
        shutil.move(out_dir, dst_dir)
    else:
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
