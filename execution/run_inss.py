# /timer/index/execution/run_inss.py

from enum import Enum, auto
import os
import signal
import atexit
import multiprocessing as mp
from typing import Optional, List, Dict, Any

import config
from IR.generator import gen_case
from csctrl import CSController
from tool.log import log



_GLOBAL_STOP_EVENT: Optional[mp.Event] = None # type: ignore
_GLOBAL_PROCS: List[mp.Process] = []
_WARNED_AFFINITY = False  # 仅打印一次亲和性失败日志

def _pin_to_cpu(cpu_id: int) -> None:
    """尽力绑定 CPU；失败只告警一次。"""
    global _WARNED_AFFINITY
    try:
        os.sched_setaffinity(0, {cpu_id})
    except Exception as e:
        if not _WARNED_AFFINITY:
            log(f"[affinity] warn: setaffinity to cpu {cpu_id} failed: {e}")
            _WARNED_AFFINITY = True


def _worker_main(worker_idx: int, cpu_id: int, stop_event: mp.Event) -> None: # type: ignore
    _pin_to_cpu(cpu_id)
    pid = os.getpid()
    log(f"[worker#{worker_idx} pid={pid}] start on cpu {cpu_id}")

    ctrl = CSController(worker_idx, cpu_id)
    try:
        ctrl.launch()
    except Exception as e:
        log(f"[worker#{worker_idx}] launch content_shell failed: {e}")
        return

    case_id = 0
    executed = 0
    gen_backoff = 0.05
    run_backoff = 0.05
    MAX_BACKOFF = 1.0

    def _should_stop(timeout: float) -> bool:
        return stop_event.wait(timeout)

    try:
        while not stop_event.is_set():
            # 1) 生成 html（指数退避）
            try:
                html_path = gen_case(case_id)
                gen_backoff = 0.05
            except Exception as e:
                log(f"[worker#{worker_idx}] gen_case failed: {e}")
                if _should_stop(gen_backoff):
                    break
                gen_backoff = min(gen_backoff * 2, MAX_BACKOFF)
                continue

            if stop_event.is_set():
                break

            # 2) 跑一轮：开新页→等待→导出（复用同一个 CS）
            try:
                ctrl.run_case_once(html_path)
                run_backoff = 0.05
            except Exception as e:
                log(f"[worker#{worker_idx}] run_case_once failed: {e}")
                if _should_stop(run_backoff):
                    break
                run_backoff = min(run_backoff * 2, MAX_BACKOFF)
            else:
                executed += 1
                case_id += 1
                if executed % 3 == 0:
                    log(f"[worker#{worker_idx}] executed={executed} cases")

            if _should_stop(0.0):
                break
    finally:
        ctrl.stop()
        log(f"[worker#{worker_idx} pid={pid}] stop: event set or loop exit")


def start_workers(num_instances: int, start_cpu: int, stop_event: mp.Event) -> List[mp.Process]:
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    procs: List[mp.Process] = []
    for i in range(num_instances):
        cpu_id = start_cpu + i
        p = mp.Process(
            target=_worker_main,
            args=(i, cpu_id, stop_event),
            name=f"idxf-worker-{i}",
            daemon=False,
        )
        p.start()
        procs.append(p)

    _GLOBAL_STOP_EVENT = stop_event
    _GLOBAL_PROCS = procs
    atexit.register(stop_workers)  # 兜底
    return procs


def stop_workers(
    stop_event: Optional[mp.Event] = None, # type: ignore
    procs: Optional[List[mp.Process]] = None,
) -> None:
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    if stop_event is None:
        stop_event = _GLOBAL_STOP_EVENT
    if procs is None:
        procs = _GLOBAL_PROCS

    if stop_event is not None:
        stop_event.set()

    if not procs:
        return

    # 1) 等自然退出
    for p in procs:
        p.join(timeout=0.8)

    # 2) 仍在 → SIGTERM
    alive = [p for p in procs if p.is_alive()]
    for p in alive:
        try:
            p.terminate()
        except Exception:
            pass
    for p in alive:
        p.join(timeout=0.8)

    # 3) 仍在 → SIGKILL
    stubborn = [p for p in procs if p.is_alive()]
    for p in stubborn:
        try:
            os.kill(p.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
    for p in stubborn:
        p.join(timeout=0.5)


def install_signal_handlers(
    stop_event_holder: Dict[str, Any],
    procs_holder: Dict[str, Any],
) -> None:
    def _handler(signum, frame):
        try:
            ev = stop_event_holder.get("event")
            ps = procs_holder.get("procs")
            log(f"[signal] caught {signum}, stopping workers...")
            stop_workers(ev, ps)
        except Exception as e:
            log(f"[signal] handler error: {e}")

    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)
    try:
        signal.signal(signal.SIGHUP, _handler)
    except Exception:
        pass


def _sigint_handler(signum, frame):
    """兜底路径：某些老代码 import 这个名字时也能生效。"""
    stop_workers()
