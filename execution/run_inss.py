from enum import Enum, auto
import os
import signal
import atexit
import multiprocessing as mp
from typing import Optional, List, Dict, Any

import config
from IR.generator import gen_case
from execution.csctrl import CSController
from tool.log import log

# 一个 worker 绑定多少个 CPU（亲和性），默认 2
_INS_CPUS = 2

_GLOBAL_STOP_EVENT: Optional[mp.Event] = None  # type: ignore
_GLOBAL_PROCS: List[mp.Process] = []
_WARNED_AFFINITY = False  # 仅打印一次亲和性失败日志


def _pin_to_cpus(cpu_ids: List[int]) -> None:
    """尽力绑定到一组 CPU；失败只告警一次。"""
    global _WARNED_AFFINITY
    if not cpu_ids:
        return
    try:
        os.sched_setaffinity(0, set(cpu_ids))
    except Exception as e:
        if not _WARNED_AFFINITY:
            log(f"[affinity] warn: setaffinity to cpus {cpu_ids} failed: {e}")
            _WARNED_AFFINITY = True


def _worker_main(worker_idx: int, cpu_ids: List[int], stop_event: mp.Event) -> None:  # type: ignore
    _pin_to_cpus(cpu_ids)
    pid = os.getpid()
    cpu_desc = ",".join(str(c) for c in cpu_ids) if cpu_ids else "none"
    log(f"[worker#{worker_idx} pid={pid}] start on cpu(s) {cpu_desc}")

    # 为了兼容现有 CSController 接口，这里仍然传第一个 CPU
    cpu_for_ctrl = cpu_ids[0] if cpu_ids else 0

    # 创建 controller 的同时就会启动一条 content_shell
    try:
        ctrl = CSController(worker_idx, cpu_for_ctrl)
    except Exception as e:
        log(f"[worker#{worker_idx}] init CSController / launch content_shell failed: {e}")
        return

    cases_since_restart = 0

    try:
        while not stop_event.is_set():
            if stop_event.is_set():
                break

            out_dir = os.path.join(config.CS_TMP, str(os.getpid()))
            html_path = gen_case(out_dir)

            try:
                ctrl.run_case_once(html_path)
            except Exception as e:
                log(f"[worker#{worker_idx}] run_case_once failed: {e}")
            else:
                # 只有 run_case_once 正常返回时才累计
                cases_since_restart += 1

                if cases_since_restart >= config.MAX_CASES_PER_CS:
                    log(
                        f"[worker#{worker_idx}] reached {config.MAX_CASES_PER_CS} cases, "
                        f"restart content_shell"
                    )
                    try:
                        ctrl.restart_cs()
                    except Exception as e2:
                        log(f"[worker#{worker_idx}] restart_cs failed: {e2}")
                        # 重启失败就直接退出该 worker，让上层重启
                        break
                    cases_since_restart = 0
    finally:
        ctrl.stop()
        log(f"[worker#{worker_idx} pid={pid}] stop: event set or loop exit")


def start_workers(num_instances: int, start_cpu: int, stop_event: mp.Event) -> List[mp.Process]:
    """
    根据 _INS_CPUS 把 CPU 划成若干组，每个 worker 绑一组。
    - 优先保证前面的 worker 都拿满 _INS_CPUS 个 CPU
    - 不足的话，最后一个 worker 会拿到“剩多少给多少”
    """
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    total_cpus = os.cpu_count() or 1
    all_cpus: List[int] = list(range(start_cpu, total_cpus))
    if not all_cpus:
        # 没有可用 CPU，就让 OS 自己调度
        all_cpus = list(range(total_cpus))

    procs: List[mp.Process] = []

    cpu_pos = 0
    for i in range(num_instances):
        if cpu_pos >= len(all_cpus):
            break  # 没 CPU 可分了

        # 正常情况下拿 _INS_CPUS 个，不够就拿剩下的全部
        group = all_cpus[cpu_pos: cpu_pos + _INS_CPUS]
        cpu_pos += len(group)

        p = mp.Process(
            target=_worker_main,
            args=(i, group, stop_event),
            name=f"idxf-worker-{i}",
            daemon=False,
        )
        p.start()
        procs.append(p)

    actual = len(procs)
    if actual < num_instances:
        log(
            f"[workers] requested {num_instances} instances, "
            f"but only started {actual} due to limited CPUs (per-worker={_INS_CPUS})"
        )

    _GLOBAL_STOP_EVENT = stop_event
    _GLOBAL_PROCS = procs
    atexit.register(stop_workers)  # 兜底
    return procs


def stop_workers(
    stop_event: Optional[mp.Event] = None,  # type: ignore
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
