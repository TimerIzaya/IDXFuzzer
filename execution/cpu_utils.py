#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
cpu_utils.py

提供与 CPU 亲和相关的工具函数：
- get_available_cpus() -> list[int]
- choose_cpus(n, start_cpu=0) -> list[int]
- set_affinity_for_current_process(cpu_id)
- set_affinity_for_pid(pid, cpu_id)  # 回退使用 taskset 子进程（若无法使用 sched_setaffinity）
"""
from typing import List, Optional
import os
import shutil
import subprocess
import sys

def get_available_cpus() -> List[int]:
    """
    返回当前系统的逻辑 CPU id 列表（0..N-1）。
    """
    try:
        # Linux: /proc/cpuinfo 或 os.cpu_count
        n = os.cpu_count() or 1
        return list(range(n))
    except Exception:
        return [0]

def choose_cpus(n: int, start_cpu: int = 0) -> List[int]:
    """
    选取 n 个连续的 CPU id，从 start_cpu 开始（若超界则循环选择）。
    保证返回 n 个 ID（可能重复当系统 cpu 太少时）。
    """
    cpus = get_available_cpus()
    if not cpus:
        return [0] * n
    out = []
    idx = start_cpu % len(cpus)
    for _ in range(n):
        out.append(cpus[idx])
        idx = (idx + 1) % len(cpus)
    return out

def _has_sched_setaffinity() -> bool:
    return hasattr(os, "sched_setaffinity")

def set_affinity_for_current_process(cpu_id: int) -> bool:
    """
    把当前进程绑定到指定 cpu_id，返回 True 表示成功。
    优先使用 os.sched_setaffinity（Linux），否则回退到 taskset（若可用）。
    """
    try:
        if _has_sched_setaffinity():
            os.sched_setaffinity(0, {cpu_id})
            return True
        else:
            # 回退到 taskset 命令（系统需安装 taskset / util-linux）
            taskset = shutil.which("taskset")
            if taskset:
                # 使用 taskset 把当前 pid 绑定 (覆盖当前进程)
                pid = os.getpid()
                mask = 1 << int(cpu_id)
                subprocess.check_call([taskset, "-p", f"0x{mask:x}", str(pid)])
                return True
            else:
                return False
    except Exception:
        return False

def set_affinity_for_pid(pid: int, cpu_id: int) -> bool:
    """
    把指定 pid 绑定到 cpu_id。优先采用 os.sched_setaffinity。
    """
    try:
        if _has_sched_setaffinity():
            os.sched_setaffinity(pid, {cpu_id})
            return True
        else:
            taskset = shutil.which("taskset")
            if taskset:
                mask = 1 << int(cpu_id)
                subprocess.check_call([taskset, "-p", f"0x{mask:x}", str(pid)])
                return True
            else:
                return False
    except Exception:
        return False

if __name__ == "__main__":
    # quick self-test
    print("cpus:", get_available_cpus())
    print("choose 10 from 0:", choose_cpus(10, 0))
    print("set affinity (current) to cpu0 ->", set_affinity_for_current_process(0))
