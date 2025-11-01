import os
import signal
import time
from multiprocessing import Event, Process, current_process
from typing import List, Tuple

from coverage.bitmap import GlobalEdgeBitmap
from execution.exec_case import run_one_case, _launched_content_shell_lock, _launched_content_shell_pids
from IR.generator import gen_case
from tool.cpu_utils import choose_cpus, get_available_cpus, set_affinity_for_current_process
from tool.log import log, format_s_to_ms
from tool.tool import make_uid


def gen_run_one_case():
    cid = make_uid()
    case_path = gen_case(cid)
    run_one_case(case_path)

import os
import time
from multiprocessing import Process, Event
from typing import List, Union

# 你原来的这个工具函数可能是这样的：
# def set_affinity_for_current_process(cpu_id: int): ...
# 我这里包一层兼容多核的
def set_affinity_for_current_process_multi(cpus: Union[int, List[int]]):
    if isinstance(cpus, int):
        cpus = [cpus]
    os.sched_setaffinity(0, set(cpus))


def worker_main(cpu_ids: Union[int, List[int]], stop_event: Event):
    # 1) 先绑核（支持单核/多核）
    set_affinity_for_current_process_multi(cpu_ids)

    # 2) 原来的循环逻辑保持不变
    while not stop_event.is_set():
        t = time.time()
        gen_run_one_case()
        log(f"gen_run consume: [{format_s_to_ms(time.time() - t)}] ms")


def start_workers(
    num_instances: int = 10,
    start_cpu: int = 0,
    stop_event: Event = None,
    cpus_per_worker: int = 2,   # ★ 新增：一个 worker 用几个核
) -> List[Process]:
    """
    启动 num_instances 个进程，每个绑定到一组 CPU（默认 1 个）。
    cpus_per_worker=2 就是一进程绑 2 个核。
    """
    available = get_available_cpus()
    if not available:
        raise RuntimeError("no cpus detected")

    # 我们要的总核数 = worker 数 * 每个 worker 占用的核数
    total_needed = num_instances * cpus_per_worker
    all_cpus = choose_cpus(total_needed, start_cpu)  # 比如要 30 个就给你 0..29

    procs: List[Process] = []

    # 取全局 bitmap 名（如果 GlobalEdgeBitmap 提供 name()）
    gb = GlobalEdgeBitmap(create=False)
    gb.close()

    for i in range(num_instances):
        # 给第 i 个 worker 分一段核
        begin = i * cpus_per_worker
        end = begin + cpus_per_worker
        cpu_group = all_cpus[begin:end]   # 可能是 [2] 或 [2, 3]

        p = Process(
            target=worker_main,
            args=(cpu_group, stop_event),
            name=f"idxf-worker-{i}",
        )
        p.start()
        procs.append(p)
        # log(f"[main] started worker {i} pid={p.pid} cpus={cpu_group}")

    return procs


def stop_workers(procs: List[Process], stop_event: Event, timeout: float = 10.0):  # type: ignore
    """
    通知停止并等待退出，若超时则强制 terminate。
    """
    stop_event.set()
    t0 = time.time()
    for p in procs:
        remaining = max(0.0, timeout - (time.time() - t0))
        p.join(remaining)
        if p.is_alive():
            # print(f"[main] worker pid={p.pid} did not exit in time, terminating...")
            p.terminate()
            p.join(2.0)


def install_signal_handlers(stop_event_holder: dict, procs_holder: dict):
    """
    在主进程安装 SIGINT / SIGTERM 处理器，优雅退出所有子进程。
    stop_event_holder, procs_holder 是字典包装以便在 handler 内修改（闭包）。
    """
    def _handler(signum, frame):
        # print(f"[main] caught signal {signum}, shutting down...")
        stop_event = stop_event_holder.get("stop_event")
        procs = procs_holder.get("procs", [])
        if stop_event:
            stop_event.set()
        if procs:
            stop_workers(procs, stop_event or Event(), timeout=10.0)
    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)


def _kill_all_registered_content_shells(reason="SIGINT"):
    with _launched_content_shell_lock:
        pids = list(_launched_content_shell_pids)
    for pid in pids:
        try:
            # kill process group (需要 start_new_session=True 才行)
            os.killpg(pid, signal.SIGTERM)
        except ProcessLookupError:
            pass
    # 等一小会儿再 KILL
    time.sleep(0.5)
    with _launched_content_shell_lock:
        pids = list(_launched_content_shell_pids)
    for pid in pids:
        try:
            os.killpg(pid, signal.SIGKILL)
        except ProcessLookupError:
            pass

def _sigint_handler(signum, frame):
    log(f"main got signal {signum}, cleaning child content_shells...")
    _kill_all_registered_content_shells(reason=f"signal {signum}")
    # 若你想让主程序继续退出（原来 Ctrl+C 行为），再恢复默认处理并 re-raise KeyboardInterrupt
    signal.signal(signal.SIGINT, signal.SIG_DFL)
    # optional: raise KeyboardInterrupt to unwind
    raise KeyboardInterrupt
