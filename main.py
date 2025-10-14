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
import os
import json
import uuid
import threading
from itertools import repeat
from multiprocessing import Pool, Value
import time, glob, subprocess, numpy as np, shutil, signal

import config
from IR.IRFuzzer import generate_ir_program
from lifter.IRToJSLifter import IRToJSLifter
from coverage.bitmap import GlobalEdgeBitmap

# ---------- 常量路径 ----------
CORPUS_ROOT = "result/corpus"
CRASH_ROOT = "result/crashes"
TIMEOUT_DIR = os.path.join(CRASH_ROOT, "timeout")
LOG_FILE = "result/fuzz_stats.log"

# ---------- 工具函数 ----------
def make_uid() -> str:
    return uuid.uuid4().hex[:8]

def update_counter(counter: Value, delta: int = 1, reset: bool = False, value: int = 0):
    with counter.get_lock():
        if reset:
            counter.value = value
        else:
            counter.value += delta

# after
def wrap_js_in_html(lines, out_path: str, case_id: str) -> None:
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(
            "<!DOCTYPE html>\n<html><head><meta charset=\"UTF-8\">"
            "<title>IndexedDB</title></head>\n<body><script>\n"
            # 页面一加载就打 BEGIN 哨兵
            f"console.error('FUZZ_BEGIN:{case_id}');\n"
            # 语义超时窗口到期时打 DONE 哨兵并关闭
            f"setTimeout(() => {{ console.error('FUZZ_DONE:{case_id}'); window.close(); }}, {config.TIMEOUT});\n"
        )
        f.writelines(lines)
        f.write("</script></body></html>")

def gen_case(case_id: str):
    out_dir = f"{CORPUS_ROOT}/{case_id}"
    os.makedirs(out_dir, exist_ok=True)
    ir = generate_ir_program()
    with open(f"{out_dir}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.lift(ir)
    html_path = f"{out_dir}/{case_id}.html"
    wrap_js_in_html(js_code, html_path, case_id=case_id)
    return html_path, out_dir


def count_files_in_dir(path: str) -> int:
    if not os.path.exists(path):
        return 0
    return sum(1 for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)))

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

# ---------- 核心执行 ----------
def run_one_case(bitmap_name: str) -> bool:
    def run(html_path: str, edge_bitmap: GlobalEdgeBitmap):
        def checkCrashCnt():
            pending_cnt = count_files_in_dir(os.path.join(out_dir, "pending"))
            new_cnt = count_files_in_dir(os.path.join(out_dir, "new"))
            completed_cnt = count_files_in_dir(os.path.join(out_dir, "completed"))
            attachments_cnt = count_files_in_dir(os.path.join(out_dir, "attachments"))
            if pending_cnt > 0:       update_counter(_shared_pending_cnt)
            if new_cnt > 0:           update_counter(_shared_new_cnt)
            if completed_cnt > 0:     update_counter(_shared_completed_cnt)
            if attachments_cnt > 0:   update_counter(_shared_attachments_cnt)
            return pending_cnt + new_cnt + completed_cnt + attachments_cnt

        html_path_abs = os.path.abspath(html_path)
        out_dir = os.path.dirname(html_path_abs)
        bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")
        tmp_dir = os.path.join(out_dir, "chrome-tmp")
        log_path = os.path.join(out_dir, "content_shell.log")

        cmd = [
            "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
            "--no-sandbox", "--headless=new", "--ozone-platform=headless",
            "--disable-gpu", "--disable-plugins", "--disable-extensions",
            "--disable-breakpad", "--disable-default-apps", "--disable-sync",
            "--disable-background-networking", "--disable-popup-blocking",
            "--no-default-browser-check", "--password-store=basic",
            "--use-mock-keychain", "--disable-hang-monitor",
            "--no-zygote", "--remote-debugging-port=0",
            "--run-all-compositor-stages-before-draw",
            f"--user-data-dir={tmp_dir}",
            "--enable-crash-reporter",
            "--enable-logging=stderr",          # 把 console/error 打到 stderr
            f"--crash-dumps-dir={out_dir}",
            f"file://{html_path_abs}",
        ]

        env = os.environ.copy()
        env["SANCOV_OUTPUT_DIR"] = out_dir

        # 启动 content_shell；日志写文件，避免 PIPE 阻塞
        logw = open(log_path, "wb")
        proc = subprocess.Popen(
            cmd, stdout=logw, stderr=logw,
            env=env, start_new_session=True
        )

        # 语义窗口：从看到 BEGIN 开始计 TIMEOUT(+裕量)
        sem_margin_s = getattr(config, "SEM_MARGIN_MS", 200) / 1000.0
        hard_timeout_s = getattr(config, "PROCESS_TIMEOUT", 30)

        pos = 0
        begin_seen = False
        done_seen = False
        begin_deadline = time.monotonic() + 10.0  # 最多等 10s 看到 BEGIN
        t0 = time.monotonic()

        while True:
            # 增量读取日志（tail 文件，不阻塞）
            try:
                with open(log_path, "rb") as r:
                    r.seek(pos)
                    chunk = r.read()
                    if chunk:
                        pos += len(chunk)
                        if not begin_seen and b"FUZZ_BEGIN:" in chunk:
                            begin_seen = True
                            sem_deadline = time.monotonic() + (getattr(config, "TIMEOUT", 500) / 1000.0) + sem_margin_s
                        if b"FUZZ_DONE:" in chunk:
                            done_seen = True
                            break
            except FileNotFoundError:
                pass

            # 进程已退出但没看到 DONE → 异常/崩溃
            if proc.poll() is not None and not done_seen:
                time.sleep(0.2)  # 等 crash 标记落盘
                logw.close()
                return -2, checkCrashCnt()

            # BEGIN 太久没出现 → 页面没跑起来，当异常
            if not begin_seen and time.monotonic() > begin_deadline:
                try: os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError: pass
                logw.close()
                return -2, checkCrashCnt()

            # BEGIN 出现但超过语义窗口仍未 DONE → 语义超时
            if begin_seen and time.monotonic() > sem_deadline:
                try: os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError: pass
                with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
                    mf.write(f"SEM_TIMEOUT({getattr(config,'TIMEOUT',500)}ms) after {time.monotonic()-t0:.3f}s\n")
                logw.close()
                return -1, 0

            # 硬兜底，防僵尸
            if time.monotonic() - t0 > hard_timeout_s:
                try: os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError: pass
                logw.close()
                return -1, 0

            time.sleep(0.01)

        # 看到了 DONE：尽量优雅退出
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            try: os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError: pass
        logw.close()

        # 覆盖率处理
        shutil.rmtree(tmp_dir, ignore_errors=True)
        bin_files = glob.glob(bin_glob)
        if not bin_files:
            # 无覆盖率文件：按 0 新边处理（或改成 -2 归档 crash）
            with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
                mf.write(f"ok in {time.monotonic() - t0:.3f}s (no sancov)\n")
            return 0, checkCrashCnt()

        total_new_edges = 0
        for cov_file in bin_files:
            total_new_edges += edge_bitmap.update_from_file(cov_file)
            os.remove(cov_file)

        with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
            mf.write(f"ok in {time.monotonic() - t0:.3f}s\n")
        return total_new_edges, checkCrashCnt()

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
        shutil.move(out_dir, CRASH_ROOT)                 # 异常/崩溃
    else:
        if new_edges == -1:                              # 语义超时
            update_counter(_shared_timeout_cnt)
            shutil.move(out_dir, TIMEOUT_DIR)
        elif new_edges > 0:                              # interesting
            update_counter(_shared_total_edges, delta=new_edges)
            update_counter(_shared_last_interesting_exec, reset=True, value=0)
            dst_dir = f"{CORPUS_ROOT}/{cid}"
            if out_dir != dst_dir:
                shutil.move(out_dir, dst_dir)
        else:                                            # 0 新边 → 丢弃
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

