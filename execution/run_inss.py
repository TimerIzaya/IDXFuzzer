import os
import signal
import time
from multiprocessing import Event, Process, current_process
from typing import List, Tuple

from coverage.bitmap import GlobalEdgeBitmap
from execution.exec_case import run_one_case
from IR.generator import gen_case
from tool.cpu_utils import choose_cpus, get_available_cpus, set_affinity_for_current_process
from tool.log import log, format_s_to_ms
from tool.tool import make_uid


def gen_run_one_case():
    cid = make_uid()
    case_path = gen_case(cid)
    run_one_case(case_path)


def worker_main(cpu_id: int, stop_event: Event):
    set_affinity_for_current_process(cpu_id)

    while not stop_event.is_set():
        t = time.time()
        gen_run_one_case()
        log(f"gen_run consume: {format_s_to_ms(time.time() - t)}] ms")


# === Supervisor / main ===
def start_workers(num_instances: int = 10, start_cpu: int = 0, stop_event: Event = None) -> List[Process]:
    """
    启动 num_instances 个进程，每个绑定到一个 CPU（从 start_cpu 开始选取）。
    返回启动的 Process 列表和 stop_event（主程序保存 stop_event 以便在退出时 set）。
    """
    available = get_available_cpus()
    if not available:
        raise RuntimeError("no cpus detected")

    cpus = choose_cpus(num_instances, start_cpu)
    procs: List[Process] = []
    # 取全局 bitmap 名（如果 GlobalEdgeBitmap 提供 name()）
    gb = GlobalEdgeBitmap(create=False)
    # 如果 create=False 且没有现有 shm，这可能 Fail，但我们不依赖 name 强制传递（run_one_case 里也 new GlobalEdgeBitmap(create=False)）
    gb.close()

    for i in range(num_instances):
        cpu_id = cpus[i]
        p = Process(target=worker_main, args=(cpu_id, stop_event), name=f"idxf-worker-{i}")
        p.start()
        procs.append(p)
        # print(f"[main] started worker {i} pid={p.pid} cpu={cpu_id}")
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
