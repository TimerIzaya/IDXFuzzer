#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
multiprocess_main.py

并行执行 IDX Fuzzer：
- 主进程生成 IR → JS → HTML
- Pool 中的工作进程调用 content_shell 收集覆盖率
- 使用全局共享计数器统计新边、超时
- 每 60 秒打印一次运行统计信息
"""
import os
import json
import uuid
import shutil
import time
import threading
from multiprocessing import Pool, cpu_count, Value

import numpy as np

from IR.IRFuzzer import generate_ir_program
from coverage.run_cov_linux import run_and_update_coverage_linux
from lifter.IRToJSLifter import IRToJSLifter
from coverage.bitmap import GlobalEdgeBitmap

# ---------- 常量路径 ----------
CORPUS_ROOT = "result/corpus"
CRASH_ROOT = "result/crashes"
TIMEOUT_DIR = os.path.join(CRASH_ROOT, "timeout")


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
        )
        f.writelines(lines)
        f.write("setTimeout(() => { window.close(); }, 300);\n</script></body></html>")


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
_shared_total_edges = None   # type: Value
_shared_timeout_cnt = None   # type: Value


def init_worker(edge_counter: Value, timeout_counter: Value) -> None:
    """
    Pool initializer：在每个子进程中把共享 Value 绑定到全局变量。
    必须使用此方式，避免 Value 对象被 pickle 造成 RuntimeError。
    """
    global _shared_total_edges, _shared_timeout_cnt
    _shared_total_edges = edge_counter
    _shared_timeout_cnt = timeout_counter


# ---------- Pool 工作函数 ----------
def run_one_case(bitmap_name: str) -> bool:
    """
    生成并执行单个测试用例
    - 返回 True 表示该用例产生了新边
    """
    cid = make_uid()
    html_path, case_root = gen_case(cid)

    # 打开共享 bitmap（只读写位图，不负责统计）
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, _ = run_and_update_coverage_linux(html_path, bitmap)
    bitmap.close()

    # 更新共享计数器
    if new_edges == -1:  # -1 表示 timeout 或 crash（在 run_cov 中已区分）
        with _shared_timeout_cnt.get_lock():
            _shared_timeout_cnt.value += 1
    elif new_edges > 0:  # 有新增边
        with _shared_total_edges.get_lock():
            _shared_total_edges.value += new_edges
    else:  # new_edges == 0，无增益，删除无用目录
        shutil.rmtree(case_root, ignore_errors=True)

    return new_edges > 0


# ---------- 统计线程 ----------
def stat_worker(bitmap: GlobalEdgeBitmap,
                total_edge_counter: Value,
                timeout_counter: Value,
                start_ts: float) -> None:
    """每 60 秒打印一次运行统计信息"""
    while True:
        time.sleep(5)
        elapsed = int(time.time() - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)

        # corpus 数量 = 子目录数量
        corpus_cnt = sum(
            1 for f in os.listdir(CORPUS_ROOT)
            if os.path.isdir(os.path.join(CORPUS_ROOT, f))
        )
        coverage_pct = np.count_nonzero(bitmap.bitmap) / bitmap.size * 100

        print("\n========== IDX Fuzzer Stats ==========")
        print(f"{'Elapsed Time':<20}: {h:02d}h {m:02d}m {s:02d}s")
        print(f"{'Corpus Count':<20}: {corpus_cnt}")
        print(f"{'Total New Edges':<20}: {total_edge_counter.value}")
        print(f"{'Timeout Cases':<20}: {timeout_counter.value}")
        print(f"{'Coverage':<20}: {coverage_pct:.4f}%")
        print("======================================\n")


# ---------- 输出目录初始化 ----------
def init_output_dirs() -> None:
    """清空 / 创建 corpus、crashes/timeout 目录"""
    if os.path.exists(CORPUS_ROOT):
        shutil.rmtree(CORPUS_ROOT)
    os.makedirs(CORPUS_ROOT, exist_ok=True)

    if os.path.exists(TIMEOUT_DIR):
        shutil.rmtree(TIMEOUT_DIR)
    os.makedirs(TIMEOUT_DIR, exist_ok=True)

    print("[*] Initialized output directories.")


# ---------- 主入口 ----------
if __name__ == "__main__":
    init_output_dirs()

    # PROCESS_COUNT = cpu_count() - 2
    PROCESS_COUNT = 1

    # 创建全局 bitmap（shm 文件），子进程只需通过名称复用
    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()

    # 共享计数器（整型，初始值 0）
    total_edge_counter = Value('i', 0)
    timeout_counter = Value('i', 0)
    start_time = time.time()

    # 启动统计线程（守护）
    threading.Thread(
        target=stat_worker,
        args=(bitmap, total_edge_counter, timeout_counter, start_time),
        daemon=True
    ).start()

    # 进程池：预留 2 核给系统 / Chrome，本机核心数 - 2
    pool = Pool(
        PROCESS_COUNT,
        initializer=init_worker,
        initargs=(total_edge_counter, timeout_counter)
    )

    try:
        # 每批投递 8 个任务，可根据机器性能调整
        while True:
            pool.starmap(run_one_case, [(bitmap_name,)] * (PROCESS_COUNT * 2))
    except KeyboardInterrupt:
        print("Interrupted by user.")
    finally:
        # 释放资源
        pool.terminate()
        pool.join()
        bitmap.close()
        bitmap.unlink()  # 删除共享内存文件
        print("[*] IDX Fuzzer exited gracefully.")
