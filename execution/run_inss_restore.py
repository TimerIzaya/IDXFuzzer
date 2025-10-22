import shutil
import time
from asyncio import Event, Queue
from datetime import datetime
from multiprocessing import Process
from pathlib import Path
from typing import Iterator, Sequence, List, Tuple

import config
from config import *
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.exec_case import run_one_case
from execution.run_inss import install_signal_handlers, stop_workers
from tool.cpu_utils import set_affinity_for_current_process, choose_cpus, get_available_cpus


def iter_restore_cases(corpus_dir: str) -> Iterator[str]:
    for entry in os.scandir(corpus_dir):
        if not entry.is_dir():
            continue

        case_id = entry.name
        exact = os.path.join(entry.path, f"{case_id}.html")

        if os.path.exists(exact):
            yield exact
            continue

        # 若没有 .html 就跳过该 case，可按需打印日志
        else:
            print(f"[restore] skip: no html in {entry.path}")


# restore之前拷贝一份
def archive_result_copy():
    src = Path("result").resolve()
    dst_root = src.parent / "history"
    dst_root.mkdir(parents=True, exist_ok=True)

    ts = datetime.now().strftime("%Y%m%d%H%M%S")
    dst = dst_root / f"result_{ts}"
    i = 1
    while dst.exists():
        dst = dst_root / f"result_{ts}_{i}"
        i += 1

    shutil.copytree(src, dst)
    print(f"copied to: {dst}")

def split(items, n: int):
    n = max(1, n)
    L = len(items)
    base, extra = divmod(L, n)
    out = []
    start = 0
    for i in range(n):
        size = base + (1 if i < extra else 0)
        out.append(list(items[start:start + size]))
        start += size
    return out



def worker_main_restore(cpu_id: int, stop_event: Event, cases: List[str]):
    set_affinity_for_current_process(cpu_id)

    for path in cases:
        if stop_event.is_set():
            break
        run_one_case(path)  # 你的 run_one_case 接收字符串路径

def resolve_restore_mode():
    # ===== 如果需要，先跑一轮 RESTORE 模式 =====
    if getattr(config, "MODE_RESTORE", False):
        print("[main] MODE_RESTORE=True → replay corpus first...")


        restore_cases = list(iter_restore_cases(config.CORPUS_ROOT))
        print(f"[restore] total cases: {len(restore_cases)}")

        if restore_cases:
            archive_result_copy()
            # --- 按实例数均分 ---
            slices = split(restore_cases, config.NUM_INSTANCES)
            total = len(restore_cases)
            sizes = [len(s) for s in slices]
            print(f"[restore] split -> {sizes}  (sum={sum(sizes)}, total={total})")
            # 严格验证：没有遗漏、没有重复
            assert sum(sizes) == total, "[restore] split sum mismatch!"

            # --- 启动 restore worker（每个 worker 顺序跑自己的一片后退出） ---
            from multiprocessing import Process, Event
            from tool.cpu_utils import choose_cpus, get_available_cpus, set_affinity_for_current_process
            from execution.exec_case import run_one_case


            available = get_available_cpus()
            if not available:
                raise RuntimeError("no cpus detected")
            cpus = choose_cpus(config.NUM_INSTANCES, 0)

            r_stop = Event()
            r_procs: list[Process] = []
            for i in range(config.NUM_INSTANCES):
                p = Process(target=worker_main_restore,
                            args=(cpus[i], r_stop, slices[i]),
                            name=f"idxf-restore-{i}")
                p.start()
                r_procs.append(p)
                # print(f"[restore] started worker {i} pid={p.pid} cpu={cpus[i]} cases={len(slices[i])}")

            # 安装信号处理器（复用你的现有函数），支持 Ctrl-C
            install_signal_handlers({"stop_event": r_stop}, {"procs": r_procs})

            # 阻塞，直到都跑完或收到停止信号
            try:
                while any(p.is_alive() for p in r_procs) and not r_stop.is_set():
                    time.sleep(0.2)
            finally:
                # 统一收尾
                r_stop.set()
                stop_workers(r_procs, r_stop, timeout=10.0)

        # 关闭一次性 restore 模式开关
        config.MODE_RESTORE = False
        print("[main] restore finished → switch to gen mode.")



