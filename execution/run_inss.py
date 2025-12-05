import atexit
import glob
import multiprocessing as mp
import os
import signal
import threading
import time
import traceback
from typing import Any, Dict, List, Optional, Union
import config
from IR.generator import gen_case
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

def _worker_main(
    worker_idx: int,
    cpu_ids: List[int],
    stop_event: mp.Event,
    max_rss_bytes: Optional[int] = None,   # <<< 新增参数：本 worker 的 RSS 上限
) -> None:  # type: ignore
    """单个 worker 进程的主循环：负责生成用例并驱动 CSController。"""
    _pin_to_cpus(cpu_ids)

    pid = os.getpid()
    cpu_desc = ",".join(str(c) for c in cpu_ids) if cpu_ids else "none"
    log(f"[worker#{worker_idx} pid={pid}] start on cpu(s) {cpu_desc}")

    # 日志提示一下当前 worker 的内存上限（方便检查配置是否合理）
    if max_rss_bytes is not None:
        limit_gib = max_rss_bytes / (1024**3)
        log(f"[worker#{worker_idx}] RSS hard limit ~= {limit_gib:.2f} GiB")

    # 为了兼容现有 CSController 接口，这里仍然传第一个 CPU
    cpu_for_ctrl = cpu_ids[0] if cpu_ids else 0

    # 初始化cs
    ctrl = None

    # 用于统计本 worker 已经执行了多少个 case（仅用于日志 / 调试，可选）
    total_cases = 0

    # 无限执行
    try:
        while not stop_event.is_set():
            try:
                # 创建 controller 的同时就会启动一条 content_shell
                ctrl = CSController(worker_idx, cpu_for_ctrl)
            except Exception as e:
                log(f"[worker#{worker_idx}] init CSController / launch content_shell failed: {e}")
                return

            out_dir = os.path.join(config.CS_TMP, str(os.getpid()))
            config.LOCAL_PROCESS[os.getpid()]["status"] = "normal"

            for exec_no in range(config.MAX_CASES_PER_CS):
                # 找到wired case，这轮就别跑了
                if config.LOCAL_PROCESS.get(os.getpid(), {}).get("status") == "wired":
                    log(f"[worker#{worker_idx}] found wired case, stopping this round")
                    break

                html_path = gen_case(out_dir)
                total_cases += 1

                # -------------------- 新增：每隔 N 个 case 检查一次 RSS -------------------- #
                if max_rss_bytes is not None and (total_cases % 100 == 0):
                    rss = _get_self_rss_bytes()
                    if rss > max_rss_bytes:
                        rss_gib = rss / (1024**3)
                        limit_gib = max_rss_bytes / (1024**3)
                        log(
                            f"[worker#{worker_idx}] RSS {rss_gib:.2f} GiB "
                            f"> limit {limit_gib:.2f} GiB, "
                            f"total_cases={total_cases}, exiting worker..."
                        )
                        # 尽量优雅地停掉当前 content_shell，然后结束整个 worker 进程
                        try:
                            ctrl.stop()
                        except Exception as e:
                            log(f"[worker#{worker_idx}] ctrl.stop() in RSS-limit exit failed: {e!r}")
                        return
                # -------------------------------------------------------------------------- #

                try:
                    ctrl.run_case_once(html_path, exec_no)
                except Exception as e:
                    log(f"[worker#{worker_idx}] run_case_once failed: {traceback.format_exc()}")
                    continue

            log(
                f"[worker#{worker_idx}] reached {config.MAX_CASES_PER_CS} cases, "
                f"restart content_shell"
            )
            ctrl.stop()
    finally:
        try:
            ctrl.stop()
        except Exception as e:
            log(f"[worker#{worker_idx}] ctrl.stop() failed: {e}")

def _supervisor_loop(
    stop_event: mp.Event,
    worker_specs: List[tuple[int, List[int]]],
    procs: List[mp.Process],
    max_rss_bytes: Optional[int],
) -> None:
    """
    后台监督线程：如果发现某个 worker 退出了（例如因为 RSS 超限自己 return 掉了），
    且 stop_event 还没被置位，则在同样的 CPU 组上重启一个新的 worker。
    """
    while not stop_event.is_set():
        for i, (worker_idx, cpu_ids) in enumerate(worker_specs):
            if i >= len(procs):
                continue
            p = procs[i]
            if p.is_alive():
                continue

            # 走到这里说明该 worker 已经挂了（可能是正常退出，也可能是 RSS 超限）
            exitcode = p.exitcode
            log(f"[supervisor] worker#{worker_idx} died (exitcode={exitcode}), restarting...")

            # 重启同一个 worker_idx，同一组 CPU
            new_p = mp.Process(
                target=_worker_main,
                args=(worker_idx, cpu_ids, stop_event, max_rss_bytes),
                name=f"idx-worker-{worker_idx}",
                daemon=False,
            )
            new_p.start()
            procs[i] = new_p

        time.sleep(1.0)

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

    # -------------------- 新增：计算每个 worker 的 RSS 上限 -------------------- #
    total_mem_bytes = _get_total_mem_bytes()
    if total_mem_bytes is not None:
        denom = max(num_instances + 5, 1)   # 给系统和别的进程留点余量
        max_rss_bytes = total_mem_bytes // denom
        log(
            f"[workers] total_mem ~= {total_mem_bytes / (1024**3):.2f} GiB, "
            f"num_instances={num_instances}, "
            f"per-worker RSS limit ~= {max_rss_bytes / (1024**3):.2f} GiB"
        )
    else:
        max_rss_bytes = None
        log("[workers] warn: failed to get total mem, per-worker RSS limit disabled")
    # ------------------------------------------------------------------ #

    procs: List[mp.Process] = []
    cpu_pos = 0
    worker_specs: List[tuple[int, List[int]]] = []   # <<< 新增：记录每个 worker 的 (idx, cpu_ids)

    for i in range(num_instances):
        if cpu_pos >= len(all_cpus):
            break  # 没 CPU 可分了

        # 正常情况下拿 _INS_CPUS 个，不够就拿剩下的全部
        group = all_cpus[cpu_pos: cpu_pos + _INS_CPUS]
        cpu_pos += len(group)

        worker_specs.append((i, group))  # <<< 记录这个 worker 的 CPU 组

        p = mp.Process(
            target=_worker_main,
            args=(i, group, stop_event, max_rss_bytes),  # <<< 把 limit 传进去
            name=f"idx-worker-{i}",
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

    # -------------------- 新增：启动监督线程，负责“重启”死掉的 worker -------------------- #
    if worker_specs and procs:
        supervisor = threading.Thread(
            target=_supervisor_loop,
            args=(stop_event, worker_specs, procs, max_rss_bytes),
            name="idx-supervisor",
            daemon=True,
        )
        supervisor.start()
        log("[workers] supervisor thread started")
    # ------------------------------------------------------------------ #

    # 兜底：万一主进程异常退出，也尽可能收拾一下子进程
    atexit.register(stop_workers)

    return procs


def start_workers_repeat_batch():
    def _worker_main_repeat_batch() -> None:  # type: ignore
        # 用一个cpu就够了
        _pin_to_cpus([0, 1])

        pid = os.getpid()
        log(f"[worker#{0} pid={pid}] start on cpu 0 1")

        ctrl = CSController(0, 0)

        if config.BATCH_DIR_TEST is None:
            raise ValueError("BATCH_DIR_TEST is not set in config")
        
        base_folder = config.BATCH_DIR_TEST
        batch_folder = os.path.join(base_folder, "batch")
        # 遍历batchFoler里所有html文件，每个文件都是number_xxx.html.html，number从0开始，最多到100，如果不到100则break
        for i in range(100):
            pattern = os.path.join(batch_folder, f"{i}_*.html.html")
            html_files = sorted(glob.glob(pattern))
            if len(html_files) == 0:
                break
            html_path = html_files[0]
            try:
                log(f"[worker#{0}] running case {html_path}")
                ctrl.run_case_once(html_path, i)
            except Exception as e:
                log(f"[worker#{0}] run_case_once failed: {traceback.format_exc()}")
                continue
        ctrl.stop()

    p = mp.Process(
        target=_worker_main_repeat_batch,
        args=(),
        name=f"idx-repeat-batch",
        daemon=False,
    )
    p.start()

    return [p]



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





# -------------------- 新增：内存相关工具函数 -------------------- #

def _get_total_mem_bytes() -> Optional[int]:
    """
    从 /proc/meminfo 读取 MemTotal（总物理内存，单位 bytes）。
    失败时返回 None。
    """
    try:
        with open("/proc/meminfo", "r") as f:
            for line in f:
                if line.startswith("MemTotal:"):
                    parts = line.split()
                    # 一般格式: MemTotal:  114700640 kB
                    kb = int(parts[1])
                    return kb * 1024
    except Exception as e:
        log(f"[mem] warn: failed to read /proc/meminfo: {e!r}")
    return None


_PAGE_SIZE = os.sysconf("SC_PAGE_SIZE")


def _get_self_rss_bytes() -> int:
    """
    从 /proc/self/statm 读取当前进程 RSS（驻留集大小，单位 bytes）。
    """
    try:
        with open("/proc/self/statm", "r") as f:
            parts = f.read().split()
        # statm[1] 是 RSS 的页数
        rss_pages = int(parts[1])
        return rss_pages * _PAGE_SIZE
    except Exception:
        # 出错就返回 0，防止影响主流程
        return 0
