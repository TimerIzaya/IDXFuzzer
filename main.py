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
from datetime import datetime
from pathlib import Path
import signal
import threading
from itertools import repeat
from multiprocessing import Event, Pool, Process, Value, current_process
import time, glob, numpy as np, shutil

import config
from config import *
from coverage.bitmap import GlobalEdgeBitmap
from execution.cpu_utils import choose_cpus, get_available_cpus, set_affinity_for_current_process
from execution import SharedStat
from execution.SharedStat import Stats
from execution.run_content_shell import CSExitStatus, run_content_shell
from fuzzer.stat_worker import stat_worker
from generator import gen_case
from tool.tool import count_files_in_dir, make_uid
from typing import Iterator, List, Optional

def run_one_case(case_path: str):
    global_bitmap_to_update = GlobalEdgeBitmap(create=False)

    html_path_abs = os.path.abspath(case_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 执行content_shell
    cs_exit_status = run_content_shell(html_path_abs)

    # 执行完去更新chromium自己的crash状态
    stat_pending_cnt = count_files_in_dir(os.path.join(out_dir, "pending"))
    stat_new_cnt = count_files_in_dir(os.path.join(out_dir, "new"))
    stat_completed_cnt = count_files_in_dir(os.path.join(out_dir, "completed"))
    stat_attachments_cnt = count_files_in_dir(os.path.join(out_dir, "attachments"))

    # 删除浏览器运行临时数据，处理覆盖率 
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)

    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        cs_exit_status = CSExitStatus.OTHER

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap_to_update.update_from_file(cov_file)
        os.remove(cov_file)

    global_bitmap_to_update.close()

    # 新边入库 否则扔掉
    stat_mark_interesting = False
    if new_edges > 0:
        stat_mark_interesting = True
        cid = os.path.splitext(os.path.basename(case_path))[0]
        dst_dir = f"{CORPUS_ROOT}/{cid}"
        shutil.move(out_dir, dst_dir)
    else:
        shutil.rmtree(out_dir, ignore_errors=True)

    # report检测到的bug
    if stat_pending_cnt > 0 or stat_new_cnt > 0 or stat_completed_cnt > 0 or stat_attachments_cnt > 0:
        shutil.move(out_dir, CRASH_ROOT)

    # 语义错误 回来受罚
    if cs_exit_status is CSExitStatus.SEMANTIC_ERROR:
        shutil.move(out_dir, SEMANTIC_ROOT)

    # 不明愿意 回来研究
    if cs_exit_status is CSExitStatus.OTHER:
        shutil.move(out_dir, OTHER_ROOT)
    
    # 进程超时 闻所未闻
    stat_timeout = 0
    if cs_exit_status is CSExitStatus.PROCESS_TIMEOUT:
        stat_timeout = 1
        shutil.move(out_dir, TIMEOUT_ROOT)
        return
    
    # 同步统计线程
    Stats.update(
        timeout=stat_timeout,
        pending=stat_pending_cnt,
        is_new=stat_new_cnt,
        completed=stat_completed_cnt,
        attachments=stat_attachments_cnt,
        mark_interesting=stat_mark_interesting,
    )


def run_one_case_for_cov(case_path: str):
    global_bitmap_to_update = GlobalEdgeBitmap(create=False)

    html_path_abs = os.path.abspath(case_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 执行content_shell
    cs_exit_status = run_content_shell(html_path_abs)

    # 删除浏览器运行临时数据，处理覆盖率 
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)

    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        cs_exit_status = CSExitStatus.OTHER

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap_to_update.update_from_file(cov_file)
        os.remove(cov_file)

    global_bitmap_to_update.close()

    # 新边入库 否则扔掉
    stat_mark_interesting = False
    if new_edges > 0:
        stat_mark_interesting = True
        cid = os.path.splitext(os.path.basename(case_path))[0]
        dst_dir = f"{CORPUS_ROOT}/{cid}"
        shutil.move(out_dir, dst_dir)
    else:
        shutil.rmtree(out_dir, ignore_errors=True)

    # report检测到的bug
    if stat_pending_cnt > 0 or stat_new_cnt > 0 or stat_completed_cnt > 0 or stat_attachments_cnt > 0:
        shutil.move(out_dir, CRASH_ROOT)

    # 语义错误 回来受罚
    if cs_exit_status is CSExitStatus.SEMANTIC_ERROR:
        shutil.move(out_dir, SEMANTIC_ROOT)

    # 不明愿意 回来研究
    if cs_exit_status is CSExitStatus.OTHER:
        shutil.move(out_dir, OTHER_ROOT)
    
    # 进程超时 闻所未闻
    stat_timeout = 0
    if cs_exit_status is CSExitStatus.PROCESS_TIMEOUT:
        stat_timeout = 1
        shutil.move(out_dir, TIMEOUT_ROOT)
        return
    
    # 同步统计线程
    Stats.update(
        timeout=stat_timeout,
        pending=stat_pending_cnt,
        is_new=stat_new_cnt,
        completed=stat_completed_cnt,
        attachments=stat_attachments_cnt,
        mark_interesting=stat_mark_interesting,
    )




# def iter_restore_cases(corpus_dir: str) -> Iterator[str]:
#     """
#     corpus_dir/
#       ├── 0000eb8a/
#       │   └── 0000eb8a.html
#       ├── 0000f12c/
#       │   └── 0000f12c.html
#       └── ...
#
#     产出每个 case 的 html 路径；若精确命名不存在，则回退到该目录下找到的第一个 *.html。
#     """
#     for entry in os.scandir(corpus_dir):
#         if not entry.is_dir():
#             continue
#
#         case_id = entry.name
#         exact = os.path.join(entry.path, f"{case_id}.html")
#
#         if os.path.exists(exact):
#             yield exact
#             continue
#
#         # 若没有 .html 就跳过该 case，可按需打印日志
#         else:
#             print(f"[restore] skip: no html in {entry.path}")


# # restore之前拷贝一份
# def archive_result_copy():
#     src = Path("result").resolve()
#     dst_root = src.parent / "history"
#     dst_root.mkdir(parents=True, exist_ok=True)
#
#     ts = datetime.now().strftime("%Y%m%d%H%M%S")
#     dst = dst_root / f"result_{ts}"
#     i = 1
#     while dst.exists():
#         dst = dst_root / f"result_{ts}_{i}"
#         i += 1
#
#     shutil.copytree(src, dst)
#     print(f"copied to: {dst}")

def gen_run_one_case():
    cid = make_uid()
    case_path = gen_case(cid)
    run_one_case(case_path)


# ---------- 初始化各种文件夹 ----------
def init_output_dirs() -> None:
    folder_list = [CORPUS_ROOT, CRASH_ROOT, TIMEOUT_ROOT, OTHER_ROOT, SEMANTIC_ROOT]
    for path in folder_list:
        # restore模式确保corpus存在，不要动它
        if config.MODE_RESTORE and path is CORPUS_ROOT:
            os.makedirs(path, exist_ok=True)
            # 确保这个目录里的格式都是对的 corpus/cid/cid.html 有些case因为中断可能并没有生成完毕
            path = Path(path)  # 改成你的目录
            for d in path.iterdir():
                case = d / f"{d.name}.html"
                if not case.is_file():
                    shutil.rmtree(d)
            continue

        # 其余模式，先删除后创建
        if os.path.exists(path):
            shutil.rmtree(path, ignore_errors=True)
        os.makedirs(path, exist_ok=True)
        print(f"recreate path: {path}")
    print("[*] Initialized output directories.]")



# === Worker process main ===
def worker_main(instance_id: int, cpu_id: int, stop_event: Event, global_bitmap_name: Optional[str]=None):
    """
    每个实例在子进程里执行：先绑定 CPU，再初始化所需的共享对象（Stats），然后无限循环生成 case。
    检测 stop_event.is_set() 并退出。
    """
    proc = current_process()
    print(f"[worker {instance_id}] pid={os.getpid()} start, attempting to pin to cpu {cpu_id}...")
    ok = set_affinity_for_current_process(cpu_id)
    if ok:
        print(f"[worker {instance_id}] pinned to CPU {cpu_id}")
    else:
        print(f"[worker {instance_id}] WARNING: failed to pin to CPU {cpu_id} (continuing without affinity)")

    # 如果你的 Stats 需要在子进程 attach，请在这里调用 Stats.init(create=False) 或类似; 我这里尝试通用调用（若不存在则忽略）
    try:
        Stats.init(create=False)
    except Exception:
        pass

    # 子进程主循环
    try:
        while not stop_event.is_set():
            # 生成并执行一个 case
            try:
                gen_run_one_case()
            except Exception as e:
                # 子进程内部不应退出，记录并继续
                print(f"[worker {instance_id}] exception in gen_run_one_case: {e}", flush=True)
    finally:
        print(f"[worker {instance_id}] pid={os.getpid()} exiting...")

# === Supervisor / main ===
def start_workers(num_instances: int = 10, start_cpu: int = 0) -> List[Process]:
    """
    启动 num_instances 个进程，每个绑定到一个 CPU（从 start_cpu 开始选取）。
    返回启动的 Process 列表和 stop_event（主程序保存 stop_event 以便在退出时 set）。
    """
    available = get_available_cpus()
    if not available:
        raise RuntimeError("no cpus detected")

    cpus = choose_cpus(num_instances, start_cpu)
    stop_event = Event()
    procs: List[Process] = []
    # 取全局 bitmap 名（如果 GlobalEdgeBitmap 提供 name()）
    try:
        gb = GlobalEdgeBitmap(create=False)
        # 如果 create=False 且没有现有 shm，这可能 Fail，但我们不依赖 name 强制传递（run_one_case 里也 new GlobalEdgeBitmap(create=False)）
        try:
            gb_name = gb.name()
        except Exception:
            gb_name = getattr(gb, "shm", None) and getattr(gb.shm, "name", None)
        try:
            gb.close()
        except Exception:
            pass
    except Exception:
        gb_name = None

    for i in range(num_instances):
        cpu_id = cpus[i]
        p = Process(target=worker_main, args=(i, cpu_id, stop_event, gb_name), name=f"idxf-worker-{i}")
        p.start()
        procs.append(p)
        print(f"[main] started worker {i} pid={p.pid} cpu={cpu_id}")
    return procs, stop_event

def stop_workers(procs: List[Process], stop_event: Event, timeout: float = 10.0): # type: ignore
    """
    通知停止并等待退出，若超时则强制 terminate。
    """
    stop_event.set()
    t0 = time.time()
    for p in procs:
        remaining = max(0.0, timeout - (time.time() - t0))
        p.join(remaining)
        if p.is_alive():
            print(f"[main] worker pid={p.pid} did not exit in time, terminating...")
            p.terminate()
            p.join(2.0)

def install_signal_handlers(stop_event_holder: dict, procs_holder: dict):
    """
    在主进程安装 SIGINT / SIGTERM 处理器，优雅退出所有子进程。
    stop_event_holder, procs_holder 是字典包装以便在 handler 内修改（闭包）。
    """
    def _handler(signum, frame):
        print(f"[main] caught signal {signum}, shutting down...")
        try:
            stop_event = stop_event_holder.get("stop_event")
            procs = procs_holder.get("procs", [])
            if stop_event:
                stop_event.set()
            if procs:
                stop_workers(procs, stop_event or Event(), timeout=10.0)
        finally:
            # 之后退出主进程
            os._exit(0)

    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)
        

if __name__ == "__main__":

     # 初始化文件夹、shared bitmap、Stats、统计线程
    init_output_dirs()

    # 创建 / 绑定 全局 bitmap（主进程负责创建 shared object）
    global_bitmap = GlobalEdgeBitmap(create=True)
    # 如果 GlobalEdgeBitmap 支持 name()，保留名字
    try:
        gb_name = global_bitmap.name()
    except Exception:
        gb_name = getattr(global_bitmap, "shm", None) and getattr(global_bitmap.shm, "name", None)

    Stats.init(create=True)

    # 启动 stat_worker 线程
    stat_thread = threading.Thread(target=stat_worker, args=(global_bitmap, time.time()), daemon=True)
    stat_thread.start()

    # 启动 worker 实例（10 个，绑定 cpu 从 0 开始）
    NUM_INSTANCES = 1
    START_CPU = 0  # 可根据需要改成 e.g. 2 或从配置读取

    procs, stop_event = start_workers(NUM_INSTANCES, START_CPU)

    # 安装信号处理器，便于按 Ctrl-C 优雅退出
    stop_event_holder = {"stop_event": stop_event}
    procs_holder = {"procs": procs}
    install_signal_handlers(stop_event_holder, procs_holder)

    print("[main] all workers started. Press Ctrl-C to stop.")

    try:
        # 主线程循环：仅用于保持进程存活并可处理其他周期性任务
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("[main] KeyboardInterrupt, shutting down...")
    finally:
        stop_workers(procs, stop_event, timeout=10.0)
        try:
            global_bitmap.close()
            global_bitmap.unlink()
        except Exception:
            pass
        print("[main] exited.")



    # init_output_dirs()

    # global_bitmap = GlobalEdgeBitmap(create=True)
    # Stats.init(create=True)

    # # 统计线程启动
    # threading.Thread(
    #     target=stat_worker,
    #     args=(global_bitmap, time.time()),
    #     daemon=True
    # ).start()

    # while True:
    #     gen_run_one_case()



    # if MODE_RESTORE:
    #     # 先归档上一轮跑的结果
    #     archive_result_copy()
    #     config.MODE_CUR = "restore"
    #     restore_pool = Pool(
    #         config.PROCESS_COUNT,
    #         initializer=init_exec_worker,
    #         initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
    #                 pending_cnt_counter, new_cnt_counter, completed_cnt_counter, attachment_cnt_counter),
    #         maxtasksperchild=100, 
    #     )
    #     config.MODE_PROGRESS = 0
    #     try:        
    #         fn = partial(run_one_case_for_cov, global_bitmap.name())
    #         iter = iter_restore_cases(config.CORPUS_ROOT)
    #         for _ in restore_pool.imap_unordered(fn, iter, chunksize=1):
    #             config.MODE_PROGRESS += 1
    #     except KeyboardInterrupt:
    #         print("Interrupted by user.")
    #     finally:
    #         restore_pool.terminate()
    #         restore_pool.join()
    #         config.MODE_RESTORE = False
    #         print(f"[*] Restore pool exited gracefully, restore corpus size: {config.MODE_PROGRESS}]")


    # # 生成阶段进程池
    # config.MODE_CUR = "generation"
    # gen_pool = Pool(
    #     config.PROCESS_COUNT,
    #     initializer=init_exec_worker,
    #     initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
    #               pending_cnt_counter, new_cnt_counter, completed_cnt_counter, attachment_cnt_counter),
    #     maxtasksperchild=100,  # 防止长期运行内存/句柄膨胀
    # )
    # try:        
    #     # 无限投喂生成任务
    #     for _ in gen_pool.imap_unordered(gen_run_one_case, repeat(global_bitmap.name()), chunksize=1):
    #         pass
    # except KeyboardInterrupt:
    #     print("Interrupted by user.")
    # finally:
    #     gen_pool.terminate()
    #     gen_pool.join()
    #     global_bitmap.close()
    #     global_bitmap.unlink()
    #     print("[*] IDX Fuzzer exited gracefully.]")
