#!/usr/bin/env python3
import os
import sys
import time
from typing import Dict, List, Tuple, Optional

BASE_TMP = "/dev/shm/tmp"
KB_IN_MB = 1024.0


# ---------- /proc 工具函数 ----------

def read_status(pid: int) -> Optional[Tuple[str, int, int]]:
    """
    从 /proc/<pid>/status 里读取:
      - 进程名 Name
      - 父进程 PPid
      - VmRSS (KB)
    失败返回 None。
    """
    try:
        name = ""
        ppid = 0
        rss_kb = 0
        with open(f"/proc/{pid}/status", "r") as f:
            for line in f:
                if line.startswith("Name:"):
                    name = line.split(":", 1)[1].strip()
                elif line.startswith("PPid:"):
                    parts = line.split()
                    if len(parts) >= 2 and parts[1].isdigit():
                        ppid = int(parts[1])
                elif line.startswith("VmRSS:"):
                    parts = line.split()
                    if len(parts) >= 2 and parts[1].isdigit():
                        rss_kb = int(parts[1])
        return name, ppid, rss_kb
    except FileNotFoundError:
        return None
    except Exception:
        return None


def read_cmdline(pid: int) -> str:
    """
    从 /proc/<pid>/cmdline 读取完整命令行，\0 分隔，转成空格分隔的字符串。
    """
    try:
        with open(f"/proc/{pid}/cmdline", "rb") as f:
            data = f.read().rstrip(b"\x00")
        if not data:
            return ""
        return " ".join(
            part.decode("utf-8", "replace") for part in data.split(b"\x00")
        )
    except FileNotFoundError:
        return ""
    except Exception:
        return ""


def scan_all_procs():
    """
    扫描整个 /proc，返回:
      - proc_info: {pid: (name, ppid, rss_kb, cmdline)}
      - children: {ppid: [child_pid, ...]}
    """
    proc_info: Dict[int, Tuple[str, int, int, str]] = {}
    children: Dict[int, List[int]] = {}

    for entry in os.listdir("/proc"):
        if not entry.isdigit():
            continue
        pid = int(entry)
        st = read_status(pid)
        if st is None:
            continue
        name, ppid, rss_kb = st
        cmdline = read_cmdline(pid)
        proc_info[pid] = (name, ppid, rss_kb, cmdline)
        children.setdefault(ppid, []).append(pid)

    return proc_info, children


def collect_descendants(root_pid: int,
                        proc_info: Dict[int, Tuple[str, int, int, str]],
                        children: Dict[int, List[int]]) -> List[int]:
    """
    从 root_pid 开始，沿 children 表把所有子孙进程收集出来（包含 root 本身）。
    """
    if root_pid not in proc_info:
        return []

    result: List[int] = []
    stack = [root_pid]
    visited = set()

    while stack:
        pid = stack.pop()
        if pid in visited:
            continue
        visited.add(pid)
        if pid in proc_info:
            result.append(pid)
            stack.extend(children.get(pid, []))

    return result


def mb_from_kb(kb: float) -> float:
    return kb / KB_IN_MB


def dir_size_kb(path: str) -> int:
    """
    递归计算目录占用的总字节数，返回 KB。
    """
    total = 0
    for root, dirs, files in os.walk(path, topdown=True):
        for name in files:
            fp = os.path.join(root, name)
            try:
                st = os.stat(fp)
                total += st.st_size
            except (FileNotFoundError, PermissionError):
                continue
    return int(total / 1024)


def classify_cs_process(cmdline: str) -> str:
    """
    根据 cmdline 粗略判断 content_shell 进程类型：
      - browser
      - renderer
      - storage
      - network
      - util_oth
    """
    if "--type=renderer" in cmdline:
        return "renderer"
    if "--type=utility" in cmdline:
        if "utility=network" in cmdline:
            return "network"
        if "utility=storage" in cmdline or "utility=storage_service" in cmdline:
            return "storage"
        return "util_oth"
    # 没有 --type=...，一般就是 browser 主进程
    return "browser"


def summarize_instance(root_pid: int,
                       proc_info: Dict[int, Tuple[str, int, int, str]],
                       children: Dict[int, List[int]]) -> Optional[Dict[str, float]]:
    """
    对单个实例（root_pid）做内存汇总，返回一个 dict：
      inst_id, shm_kb, worker_rss_kb, cs_total_rss_kb,
      browser, renderer, storage, network, util_oth, all_rss_kb
    """
    pids = collect_descendants(root_pid, proc_info, children)
    if not pids:
        return None

    inst_dir = os.path.join(BASE_TMP, str(root_pid))
    shm_kb = dir_size_kb(inst_dir) if os.path.isdir(inst_dir) else 0

    worker_rss_kb = 0
    cs_total_rss_kb = 0
    all_rss_kb = 0

    browser = 0
    renderer = 0
    storage = 0
    network = 0
    util_oth = 0

    for pid in pids:
        name, ppid, rss_kb, cmdline = proc_info[pid]
        all_rss_kb += rss_kb

        if pid == root_pid:
            worker_rss_kb = rss_kb

        if "content_shell" in cmdline:
            cs_total_rss_kb += rss_kb
            cat = classify_cs_process(cmdline)
            if cat == "browser":
                browser += rss_kb
            elif cat == "renderer":
                renderer += rss_kb
            elif cat == "storage":
                storage += rss_kb
            elif cat == "network":
                network += rss_kb
            else:
                util_oth += rss_kb

    return {
        "inst_id": root_pid,
        "shm_kb": shm_kb,
        "worker_rss_kb": worker_rss_kb,
        "cs_total_rss_kb": cs_total_rss_kb,
        "browser_kb": browser,
        "renderer_kb": renderer,
        "storage_kb": storage,
        "network_kb": network,
        "util_oth_kb": util_oth,
        "all_rss_kb": all_rss_kb,
    }


def collect_all_summaries():
    """
    扫描 /dev/shm/tmp 下所有实例，返回 summaries 列表。
    """
    proc_info, children = scan_all_procs()

    inst_ids: List[int] = []
    if os.path.isdir(BASE_TMP):
        for name in os.listdir(BASE_TMP):
            if not name.isdigit():
                continue
            pid = int(name)
            if pid in proc_info:
                inst_ids.append(pid)

    inst_ids.sort()
    summaries = []
    for inst in inst_ids:
        s = summarize_instance(inst, proc_info, children)
        if s is not None:
            summaries.append(s)
    return summaries


def print_once_no_delta():
    """
    单次输出，不带 Δ。
    """
    summaries = collect_all_summaries()
    if not summaries:
        print(f"[!] 在 {BASE_TMP} 下没有找到正在运行的实例目录。")
        return

    print(f"==== 内存快照：{BASE_TMP} 下共 {len(summaries)} 个实例 ====\n")
    header = (
        "inst_id  shm(MB)  worker(MB)  cs_total(MB)  "
        "browser  renderer  storage  network  util_oth  all_rss(MB)"
    )
    print(header)
    print("-" * len(header))

    grand_total_kb = 0
    for s in summaries:
        grand_total_kb += s["all_rss_kb"]
        print(
            f"{s['inst_id']:7d}"
            f" {mb_from_kb(s['shm_kb']):7.1f}"
            f" {mb_from_kb(s['worker_rss_kb']):7.1f}"
            f" {mb_from_kb(s['cs_total_rss_kb']):10.1f}"
            f" {mb_from_kb(s['browser_kb']):7.1f}"
            f" {mb_from_kb(s['renderer_kb']):9.1f}"
            f" {mb_from_kb(s['storage_kb']):8.1f}"
            f" {mb_from_kb(s['network_kb']):8.1f}"
            f" {mb_from_kb(s['util_oth_kb']):9.1f}"
            f" {mb_from_kb(s['all_rss_kb']):11.1f}"
        )

    print("\n==== 汇总 ====")
    print(f"所有实例总 RSS(进程树相加): {mb_from_kb(grand_total_kb):.1f} MB")
    print("注意: 这个数会因为共享页被重复计数，通常会 > free/top 里看到的实际使用。")


def fmt_cell_with_delta(cur_kb: float, base_kb: Optional[float]) -> str:
    """
    把一个数格式化为: " 5536.9(+12.3)" 这样的形式。
    Δ 始终 = 当前值 - 基线值（监控脚本启动时的那一轮）。
    """
    cur_mb = mb_from_kb(cur_kb)
    if base_kb is None:
        # 第一次建立基线时，没有 Δ，就只显示当前值
        return f"{cur_mb:7.1f}{' ' * 8}"
    delta_mb = mb_from_kb(cur_kb - base_kb)
    return f"{cur_mb:7.1f}({delta_mb:+5.1f})"


def print_with_delta(interval: float):
    """
    周期性输出，每次和「启动监控时的基线」对比 Δ。
    对于监控启动之后才出现的新实例，以其首次出现的那一轮作为该实例的基线。
    """
    baseline_by_inst: Dict[int, Dict[str, float]] = {}

    while True:
        os.system("clear")
        summaries = collect_all_summaries()
        if not summaries:
            print(f"[!] 在 {BASE_TMP} 下没有找到正在运行的实例目录。")
            time.sleep(interval)
            continue

        print(f"==== 内存快照：{BASE_TMP} 下共 {len(summaries)} 个实例 (每 {interval:.1f}s 刷新, Δ=相对基线) ====\n")
        header = (
            "inst_id  shm(MB)        worker(MB)      cs_total(MB)    "
            "browser        renderer      storage       network      util_oth      all_rss(MB)"
        )
        print(header)
        print("-" * len(header))

        grand_total_kb = 0

        for s in summaries:
            inst_id = s["inst_id"]
            base = baseline_by_inst.get(inst_id)

            # 如果这个实例第一次出现，就把当前值设为基线
            if base is None:
                baseline_by_inst[inst_id] = s
                base = s

            shm_cell = fmt_cell_with_delta(s["shm_kb"], base.get("shm_kb"))
            worker_cell = fmt_cell_with_delta(s["worker_rss_kb"], base.get("worker_rss_kb"))
            cs_total_cell = fmt_cell_with_delta(s["cs_total_rss_kb"], base.get("cs_total_rss_kb"))
            browser_cell = fmt_cell_with_delta(s["browser_kb"], base.get("browser_kb"))
            renderer_cell = fmt_cell_with_delta(s["renderer_kb"], base.get("renderer_kb"))
            storage_cell = fmt_cell_with_delta(s["storage_kb"], base.get("storage_kb"))
            network_cell = fmt_cell_with_delta(s["network_kb"], base.get("network_kb"))
            util_oth_cell = fmt_cell_with_delta(s["util_oth_kb"], base.get("util_oth_kb"))
            all_rss_cell = fmt_cell_with_delta(s["all_rss_kb"], base.get("all_rss_kb"))

            grand_total_kb += s["all_rss_kb"]

            print(
                f"{inst_id:7d}"
                f" {shm_cell}"
                f" {worker_cell}"
                f" {cs_total_cell}"
                f" {browser_cell}"
                f" {renderer_cell}"
                f" {storage_cell}"
                f" {network_cell}"
                f" {util_oth_cell}"
                f" {all_rss_cell}"
            )

        print("\n==== 汇总 ====")
        print(f"所有实例总 RSS(进程树相加): {mb_from_kb(grand_total_kb):.1f} MB")
        print("注意: 每个格子的 Δ 是相对于脚本启动时该实例的基线快照 (MB)。")

        try:
            time.sleep(interval)
        except KeyboardInterrupt:
            print("\n[+] 退出监控。")
            break


def main():
    # 用法：
    #   python3 memory_monitor.py        -> 单次快照（无 Δ）
    #   python3 memory_monitor.py 5      -> 每 5 秒刷新一次，Δ = 相对基线
    interval = 0.0
    if len(sys.argv) >= 2:
        try:
            interval = float(sys.argv[1])
        except ValueError:
            print("[!] INTERVAL 必须是数字秒数，比如: python3 memory_monitor.py 5")
            interval = 0.0

    if interval <= 0:
        print_once_no_delta()
    else:
        print_with_delta(interval)


if __name__ == "__main__":
    main()
