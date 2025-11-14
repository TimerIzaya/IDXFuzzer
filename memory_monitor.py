#!/usr/bin/env python3
import os
import time
import sys

BASE_TMP = "/dev/shm/tmp"
INTERVAL = 5.0  # 默认 5 秒

# ---------- /proc 工具函数 ----------

def read_cmdline_list(pid: int):
    """以 list 形式读取 /proc/<pid>/cmdline，每个元素是一个参数字符串。"""
    try:
        with open(f"/proc/{pid}/cmdline", "rb") as f:
            data = f.read().rstrip(b"\x00")
        if not data:
            return []
        return [s.decode("utf-8", "replace") for s in data.split(b"\x00")]
    except Exception:
        return []


def get_rss_kb(pid: int) -> int:
    """从 /proc/<pid>/status 里解析 VmRSS，返回 KB，失败返回 0。"""
    try:
        with open(f"/proc/{pid}/status", "r") as f:
            for line in f:
                if line.startswith("VmRSS:"):
                    parts = line.split()
                    if len(parts) >= 2 and parts[1].isdigit():
                        return int(parts[1])  # kB
    except Exception:
        pass
    return 0


def classify_cs_role(args: list[str]) -> str:
    """
    根据 cmdline 参数判断 content_shell 进程角色：
      - browser      : 没有 --type=
      - renderer     : --type=renderer
      - storage      : --type=utility 且包含 storage.mojom.StorageService
      - network      : --type=utility 且包含 network.mojom.NetworkService
      - utility_other: 其他 utility
    """
    has_type = None
    for a in args:
        if a.startswith("--type="):
            has_type = a.split("=", 1)[1]
            break

    if has_type is None:
        return "browser"
    if has_type == "renderer":
        return "renderer"
    if has_type == "utility":
        joined = " ".join(args)
        if "storage.mojom.StorageService" in joined:
            return "storage"
        if "network.mojom.NetworkService" in joined:
            return "network"
        return "utility_other"
    return "other"


# ---------- 目录大小统计 ----------

def dir_size_bytes(root: str) -> int:
    """统计目录下所有文件大小总和（字节数）。"""
    total = 0
    for dirpath, dirnames, filenames in os.walk(root):
        for name in filenames:
            fp = os.path.join(dirpath, name)
            try:
                stat = os.stat(fp)
                total += stat.st_size
            except Exception:
                pass
    return total


# ---------- 主逻辑 ----------

def snapshot_once(base: str):
    """
    做一次快照：
      - 枚举 /dev/shm/tmp 下所有实例目录
      - 收集 profile 路径 -> 实例 id 映射
      - 扫描所有进程，匹配 user-data-dir，统计 RSS
      - 返回 stats 字典
    """
    # 1) 找到所有实例目录 & 对应的 profile 路径
    instances = {}  # inst_id(str) -> {"path": str, "profile": str}
    for name in os.listdir(base):
        inst_path = os.path.join(base, name)
        if not os.path.isdir(inst_path):
            continue
        if not name.isdigit():
            continue  # 只认数字名字的实例
        profile_ud = os.path.join(inst_path, "profile", "ud_1")
        if not os.path.isdir(profile_ud):
            continue
        instances[name] = {
            "path": inst_path,
            "profile": profile_ud,
        }

    # 如果一个实例都没有，也返回空
    if not instances:
        return {}

    # profile 路径 -> inst_id
    profile_to_inst = {info["profile"]: inst_id for inst_id, info in instances.items()}

    # 初始化统计结构
    stats = {}
    for inst_id, info in instances.items():
        stats[inst_id] = {
            "shm_bytes": dir_size_bytes(info["path"]),
            "worker_rss_kb": 0,
            "cs_rss_total_kb": 0,
            "cs_rss_by_role": {
                "browser": 0,
                "renderer": 0,
                "storage": 0,
                "network": 0,
                "utility_other": 0,
                "other": 0,
            },
        }

    # 2) 扫描所有进程
    for pid_str in os.listdir("/proc"):
        if not pid_str.isdigit():
            continue
        pid = int(pid_str)

        # 2.1 如果这个 pid 正好是某个实例目录名，就当它是 worker 进程
        if pid_str in stats:
            rss_kb = get_rss_kb(pid)
            stats[pid_str]["worker_rss_kb"] += rss_kb

        # 2.2 尝试识别 content_shell + user-data-dir 归属
        args = read_cmdline_list(pid)
        if not args:
            continue
        if "content_shell" not in " ".join(args):
            continue

        user_data_dir = None
        for a in args:
            if a.startswith("--user-data-dir="):
                user_data_dir = a.split("=", 1)[1]
                break
        if not user_data_dir:
            continue

        # 看这个 user-data-dir 是否匹配我们某个实例的 profile
        inst_id = profile_to_inst.get(user_data_dir)
        if not inst_id:
            continue

        rss_kb = get_rss_kb(pid)
        role = classify_cs_role(args)
        s = stats[inst_id]
        s["cs_rss_total_kb"] += rss_kb
        if role in s["cs_rss_by_role"]:
            s["cs_rss_by_role"][role] += rss_kb
        else:
            s["cs_rss_by_role"]["other"] += rss_kb

    return stats


def write_stats_to_file(stats: dict, fp):
    """把统计结果写入指定文件对象 fp。"""
    if not stats:
        fp.write("(no active instances under /dev/shm/tmp)\n")
        fp.write("\n")
        fp.flush()
        return

    fp.write(time.strftime("==== %Y-%m-%d %H:%M:%S ====\n"))
    header = (
        "inst_id  "
        "shm(MB)  "
        "worker(MB)  "
        "cs_total(MB)  "
        "browser  renderer  storage  network  util_oth"
    )
    fp.write(header + "\n")
    for inst_id in sorted(stats.keys(), key=lambda x: int(x)):
        s = stats[inst_id]
        shm_mb = s["shm_bytes"] / (1024 * 1024)
        worker_mb = s["worker_rss_kb"] / 1024
        cs_mb = s["cs_rss_total_kb"] / 1024
        br = s["cs_rss_by_role"]["browser"] / 1024
        rd = s["cs_rss_by_role"]["renderer"] / 1024
        st = s["cs_rss_by_role"]["storage"] / 1024
        nw = s["cs_rss_by_role"]["network"] / 1024
        ut = s["cs_rss_by_role"]["utility_other"] / 1024
        fp.write(
            f"{inst_id:>7}  "
            f"{shm_mb:7.1f}  "
            f"{worker_mb:9.1f}  "
            f"{cs_mb:11.1f}  "
            f"{br:7.1f}  {rd:8.1f}  {st:7.1f}  {nw:7.1f}  {ut:8.1f}\n"
        )
    fp.write("\n")
    fp.flush()


def main():
    base = BASE_TMP
    if len(sys.argv) >= 2:
        base = sys.argv[1]
    if len(sys.argv) >= 3:
        global INTERVAL
        INTERVAL = float(sys.argv[2])

    if not os.path.isdir(base):
        print(f"Base dir not found: {base}")
        sys.exit(1)

    out_path = os.path.join(os.getcwd(), "mem_stat.txt")
    print(f"Monitoring instances under {base}, interval={INTERVAL}s ...")
    print(f"Logging to {out_path} (Ctrl-C to stop)")

    try:
        # 追加写入，程序重启时接在已有内容后面
        with open(out_path, "a", encoding="utf-8") as fp:
            while True:
                stats = snapshot_once(base)
                write_stats_to_file(stats, fp)
                time.sleep(INTERVAL)
    except KeyboardInterrupt:
        print("Bye.")


if __name__ == "__main__":
    main()
