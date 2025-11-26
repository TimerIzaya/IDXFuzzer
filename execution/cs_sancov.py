# execution/cs_sancov.py
import glob
import os
import signal
import time

from tool.log import log
from execution.cs_devtools import _msleep  # 只复用睡眠小工具


def _kill_process_tree(pid: int, grace_s: float = 0.3) -> None:
    """给一个 pid 先 TERM 再 KILL，带一点宽限时间。"""
    try:
        os.kill(pid, signal.SIGTERM)
    except ProcessLookupError:
        return
    except Exception:
        pass

    t0 = time.time()
    while time.time() - t0 < grace_s:
        try:
            os.kill(pid, 0)
        except ProcessLookupError:
            return
        _msleep(20)

    try:
        os.kill(pid, signal.SIGKILL)
    except Exception:
        pass


def _read_cmdline(pid: int) -> str:
    """读取 /proc/<pid>/cmdline 并转成普通字符串。"""
    try:
        with open(f"/proc/{pid}/cmdline", "rb") as f:
            data = f.read().replace(b"\x00", b" ").strip()
        return data.decode(errors="ignore")
    except Exception:
        return ""


def _classify_cmdline(cmd: str) -> str:
    """
    简单基于 cmdline 分类 content_shell 进程类型：
    返回: browser / renderer / utility_storage / utility_network / utility_other / unknown
    """
    if not cmd:
        return "unknown"
    if "content_shell" not in cmd:
        return "unknown"
    if "--type=" not in cmd:
        return "browser"
    if "--type=renderer" in cmd:
        return "renderer"
    if "--type=utility" in cmd:
        if "storage.mojom.StorageService" in cmd:
            return "utility_storage"
        if "network.mojom.NetworkService" in cmd:
            return "utility_network"
        return "utility_other"
    return "unknown"


def _find_browser_pid_by_port(port: int) -> int | None:
    """
    通过 --remote-debugging-port 定位 browser 进程。
    """
    target = f"--remote-debugging-port={port}"

    # 先按端口找 browser（最可靠）
    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        cmd = _read_cmdline(pid)
        if "content_shell" in cmd and target in cmd and "--type=" not in cmd:
            return pid

    # 兜底：找任意没有 --type= 的 content_shell，当且仅当系统里只有一份 content_shell
    candidates: list[int] = []
    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        cmd = _read_cmdline(pid)
        if "content_shell" in cmd and "--type=" not in cmd:
            candidates.append(pid)
    if len(candidates) == 1:
        return candidates[0]
    return None


def _collect_cs_group_pids(browser_pid: int) -> dict:
    """按 PGID 收集同一组 content_shell 进程，分类返回。"""
    try:
        pgid = os.getpgid(browser_pid)
    except ProcessLookupError:
        return {}

    group = {
        "browser": [],
        "renderer": [],
        "utility_storage": [],
        "utility_network": [],
        "utility_other": [],
    }

    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        try:
            if os.getpgid(pid) != pgid:
                continue
        except ProcessLookupError:
            continue

        cmd = _read_cmdline(pid)
        if "content_shell" not in cmd:
            continue

        cls = _classify_cmdline(cmd)
        if cls == "browser":
            group["browser"].append(pid)
        elif cls == "renderer":
            group["renderer"].append(pid)
        elif cls == "utility_storage":
            group["utility_storage"].append(pid)
        elif cls == "utility_network":
            group["utility_network"].append(pid)
        elif cls == "utility_other":
            group["utility_other"].append(pid)

    return group


def _dump_cov_via_sigusr1(port: int) -> dict:
    """
    给 Browser / Storage utility / Renderer 发 SIGUSR1，触发 SanCov 导出。
    返回发信统计：{"browser": n, "storage": n, "renderer": n}
    """
    stats = {"browser": 0, "storage": 0, "renderer": 0}
    browser = _find_browser_pid_by_port(port)
    if not browser:
        return stats  # 找不到就静默返回，外层走超时等待机制

    group = _collect_cs_group_pids(browser)

    # 1) Browser（最多 1 个）
    for pid in group.get("browser", [])[:1]:
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["browser"] += 1
        except ProcessLookupError:
            pass

    # 2) Storage utility（可能 0~1 个；全部打）
    for pid in group.get("utility_storage", []):
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["storage"] += 1
        except ProcessLookupError:
            pass

    # 3) Renderer（可能有多个；全部打）
    for pid in group.get("renderer", []):
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["renderer"] += 1
        except ProcessLookupError:
            pass

    return stats


def wait_min_bins(bin_dir: str, timeout_s: float = 3.0, poll_s: float = 0.05) -> bool:
    """
    等到 bin_dir 下至少出现以下三类 bin 文件各 >= 1 即返回 True：
      - sancov_bitmap_browser_indexeddb_*.bin
      - sancov_bitmap_storage_indexeddb_*.bin
      - sancov_bitmap_blink_indexeddb_*.bin（数量不限制，>=1 即可）

    否则超时返回 False。
    """
    pat_browser = os.path.join(bin_dir, "sancov_bitmap_browser_indexeddb_*.bin")
    pat_storage = os.path.join(bin_dir, "sancov_bitmap_storage_indexeddb_*.bin")
    pat_blink = os.path.join(bin_dir, "sancov_bitmap_blink_indexeddb_*.bin")

    deadline = time.time() + timeout_s
    while time.time() < deadline:
        has_browser = len(glob.glob(pat_browser)) >= 1
        has_storage = len(glob.glob(pat_storage)) >= 1
        has_blink = len(glob.glob(pat_blink)) >= 1

        if has_browser or has_storage or has_blink:
            return True

        time.sleep(poll_s)

    return False
