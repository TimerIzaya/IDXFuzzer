import atexit
import multiprocessing as mp
import os
import signal
from typing import Any, Dict, List, Optional, Union
import time 
import config
from IR.generator import gen_case, gen_stable_case
from execution.csctrl import CSController
from tool.log import log

# 一个 worker 绑定多少个 CPU（亲和性）
_INS_CPUS = 2

# 全局状态，方便 atexit / 信号处理时兜底清理
_GLOBAL_STOP_EVENT: Optional[mp.Event] = None  # type: ignore
_GLOBAL_PROCS: List[mp.Process] = []
_WARNED_AFFINITY = False  # 仅打印一次亲和性失败日志


def _pin_to_cpus(cpu_ids: List[int]) -> None:
    """尽力把当前进程绑到指定一组 CPU；失败只告警一次，不中断执行。"""
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
    """单个 worker 进程的主循环：负责生成用例并驱动 CSController。"""
    _pin_to_cpus(cpu_ids)

    pid = os.getpid()
    cpu_desc = ",".join(str(c) for c in cpu_ids) if cpu_ids else "none"
    log(f"[worker#{worker_idx} pid={pid}] start on cpu(s) {cpu_desc}")

    # 为了兼容现有 CSController 接口，这里仍然传第一个 CPU
    cpu_for_ctrl = cpu_ids[0] if cpu_ids else 0

    try:
        # 创建 controller 的同时就会启动一条 content_shell
        ctrl = CSController(worker_idx, cpu_for_ctrl)
    except Exception as e:
        log(f"[worker#{worker_idx}] init CSController / launch content_shell failed: {e}")
        return

    cases_since_restart = 0

    try:
        while not stop_event.is_set():
            out_dir = os.path.join(config.CS_TMP, str(os.getpid()))

            html_path = gen_case(out_dir)
            # html_path = gen_stable_case(out_dir)
            try:
                ctrl.run_case_once(html_path)
            except Exception as e:
                log(f"[worker#{worker_idx}] run_case_once failed: {e}")
                # 出错就不累计 cases_since_restart
                continue
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
        try:
            ctrl.stop()
        except Exception as e:
            log(f"[worker#{worker_idx}] ctrl.stop() failed: {e}")
        log(f"[worker#{worker_idx} pid={pid}] stop: event set or loop exit")


def start_workers(num_instances: int, start_cpu: int, stop_event: mp.Event) -> List[mp.Process]:
    """
    按 CPU 列表为每个 worker 分一组 CPU 并启动多个 worker 进程。

    - 每个 worker 尝试绑定 _INS_CPUS 个 CPU
    - CPU 不够时，最后一个 worker 使用“剩下所有 CPU”
    """
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    total_cpus = os.cpu_count() or 1
    # 从 start_cpu 开始分配，避免和系统预留 / 其他服务抢核
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

    # 兜底：万一主进程异常退出，也尽可能收拾一下子进程
    atexit.register(stop_workers)

    return procs


def _normalize_stop_args(
    stop_event_or_procs: Optional[Union[mp.Event, List[mp.Process]]] = None,
    procs: Optional[List[mp.Process]] = None,
) -> tuple[Optional[mp.Event], Optional[List[mp.Process]]]:
    """
    兼容几种不同的调用方式，统一转换为 (stop_event, procs)。

    兼容：
      - stop_workers()                      # 全局变量
      - stop_workers(stop_event, procs)     # 标准调用
      - stop_workers(procs, stop_event)     # 你 main 里的写法
      - stop_workers(signum, frame)         # 作为 signal handler 被调用
    """
    from multiprocessing.synchronize import Event as MpEvent  # type: ignore

    # signal handler 的情况：两个位置参数 (signum, frame)
    # 会被额外吃到 *args，外层已经吸收了，所以这里只管前两个逻辑参数

    # stop_workers(procs, stop_event)
    if isinstance(stop_event_or_procs, list) and procs is not None:
        return _GLOBAL_STOP_EVENT, stop_event_or_procs  # type: ignore[list-item]

    # stop_workers(stop_event, procs)
    if isinstance(stop_event_or_procs, MpEvent):
        return stop_event_or_procs, procs

    # stop_workers() 或 stop_workers(signum, frame) 兜底用全局
    return _GLOBAL_STOP_EVENT, _GLOBAL_PROCS


def stop_workers(
    stop_event_or_procs: Optional[Union[mp.Event, List[mp.Process]]] = None,
    procs: Optional[List[mp.Process]] = None,
    *_,
    **__,
) -> None:
    """
    停止所有 worker 进程，支持多种调用方式。

    注意：为了兼容当前 main 中的用法，这里特意做了参数“纠正”，
    所以你现有的 `stop_workers(procs, stop_event)` 不需要改动。
    """
    global _GLOBAL_STOP_EVENT, _GLOBAL_PROCS

    stop_event, procs = _normalize_stop_args(stop_event_or_procs, procs)

    if stop_event is not None:
        stop_event.set()

    if not procs:
        return

    # 1) 等自然退出
    for p in procs:
        p.join(timeout=0.8)

    # 2) 仍然在 → terminate()
    alive = [p for p in procs if p.is_alive()]
    for p in alive:
        try:
            p.terminate()
        except Exception:
            pass
    for p in alive:
        p.join(timeout=0.8)

    # 3) 仍然在 → SIGKILL
    stubborn = [p for p in procs if p.is_alive()]
    for p in stubborn:
        try:
            os.kill(p.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
        except Exception:
            pass
    for p in stubborn:
        p.join(timeout=0.5)

    # 清理全局记录
    if procs is _GLOBAL_PROCS:
        _GLOBAL_PROCS = []


def install_signal_handlers(
    stop_event_holder: Dict[str, Any],
    procs_holder: Dict[str, Any],
) -> None:
    """
    在主进程中安装信号处理器，收到 Ctrl-C / kill 时优雅收尾。

    stop_event_holder: 期望包含键 "stop_event"
    procs_holder:      期望包含键 "procs"
    """

    def _handler(signum: int, frame) -> None:
        try:
            # 这里按你的 main 中的 key 名来取，避免之前的 "event" 打错。
            ev = stop_event_holder.get("stop_event", _GLOBAL_STOP_EVENT)
            ps = procs_holder.get("procs", _GLOBAL_PROCS)
            log(f"[signal] caught {signum}, stopping workers...")
            stop_workers(ev, ps)
        except Exception as e:
            log(f"[signal] handler error: {e}")

    signal.signal(signal.SIGINT, _handler)
    signal.signal(signal.SIGTERM, _handler)
    try:
        # 某些环境下可能没有 SIGHUP，这里兜底
        signal.signal(signal.SIGHUP, _handler)
    except Exception:
        pass
