# /timer/index/execution/run_inss.py

import os
import signal
import time
import multiprocessing as mp
from typing import Optional, List, Dict, Any

import config
from IR.generator import gen_case
from execution.exec_case import run_one_case
from tool.log import log

# 全局保存，信号里好用
_GLOBAL_STOP_EVENT: Optional[mp.Event] = None
_GLOBAL_PROCS: List[mp.Process] = []


def _pin_to_cpu(cpu_id: int) -> None:
    """绑核，失败就算了"""
    try:
        os.sched_setaffinity(0, {cpu_id})
    except Exception:
        pass


def _worker_main(worker_idx: int, cpu_id: int, stop_event: mp.Event) -> None:
    _pin_to_cpu(cpu_id)
    log(f"[worker {os.getpid()}] started on cpu {cpu_id}")

    case_id = 0
    executed = 0

    while not stop_event.is_set():
        # 1) 生成一个 html
        try:
            # 你仓库里的 gen_case 要一个 case_id
            html_path = gen_case(case_id)
        except Exception as e:
            log(f"[worker {os.getpid()}] gen_case failed: {e}")
            time.sleep(0.1)
            continue

        # 2) 跑一次，用的是你刚刚那版 exec_case，里面有复用逻辑
        try:
            run_one_case(html_path)
        except Exception as e:
            log(f"[worker {os.getpid()}] run_one_case failed: {e}")
            time.sleep(0.05)

        executed += 1
        case_id += 1

        if executed % 3 == 0:
            log(f"[worker {os.getpid()}] executed {executed} cases")

        # 稍微让出一点时间
        time.sleep(0.001)

    log(f"[worker {os.getpid()}] stop because event is set")


def start_workers(num_instances: int, start_cpu: int, stop_event: mp.Event) -> List[mp.Process]:
    """
    和你 fuzzer.py 的调用保持一致：
        procs = start_workers(config.NUM_INSTANCES, START_CPU, stop_event)
    """
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    procs: List[mp.Process] = []

    for i in range(num_instances):
        cpu_id = start_cpu + i
        p = mp.Process(
            target=_worker_main,
            args=(i, cpu_id, stop_event),
            name=f"idxf-worker-{i}",
        )
        p.start()
        procs.append(p)

    _GLOBAL_STOP_EVENT = stop_event
    _GLOBAL_PROCS = procs
    return procs


def stop_workers(
    stop_event: Optional[mp.Event] = None,
    procs: Optional[List[mp.Process]] = None,
) -> None:
    """
    可以被：
      1. fuzzer.py 主线程显式调用
      2. 信号处理函数间接调用
    """
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    if stop_event is None:
        stop_event = _GLOBAL_STOP_EVENT
    if procs is None:
        procs = _GLOBAL_PROCS

    if stop_event is not None:
        stop_event.set()

    if procs is None:
        return

    # 给他们一点时间自己退
    for p in procs:
        p.join(timeout=1.0)

    # 还活着就杀
    for p in procs:
        if p.is_alive():
            try:
                os.kill(p.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass


def install_signal_handlers(
    stop_event_holder: Dict[str, Any],
    procs_holder: Dict[str, Any],
) -> None:
    """
    你原来的 fuzzer.py 应该是这么写的：
        stop_event_holder = {"event": stop_event}
        procs_holder = {"procs": procs}
        install_signal_handlers(stop_event_holder, procs_holder)
    我就按这个接口来。
    """

    def _handler(signum, frame):
        ev = stop_event_holder.get("event")
        ps = procs_holder.get("procs")
        stop_workers(ev, ps)

    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)


def _sigint_handler(signum, frame):
    """有些地方可能直接 import 这个名字，给个兜底"""
    stop_workers()
