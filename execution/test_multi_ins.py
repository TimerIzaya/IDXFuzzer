#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
affinity_multi_instance_demo.py
起 4 个“实例”（独立进程），分别绑定到 CPU 0/1/2/3。
每个实例会周期性打印：
  - 亲和性允许的 CPU 集（os.sched_getaffinity & taskset -cp）
  - 当前正在运行的 CPU 编号（ps -o psr）
方便确认已绑定成功。
"""

import os
import time
import signal
import subprocess
from multiprocessing import Process, current_process, set_start_method

def set_cpu_affinity(core_id: int):
    """将当前进程绑定到指定 CPU 核（Linux）。"""
    os.sched_setaffinity(0, {int(core_id)})

def get_affinity_set_via_os():
    """通过 Python 获取当前进程允许的 CPU 集。"""
    return sorted(os.sched_getaffinity(0))

def get_affinity_set_via_taskset(pid: int) -> str:
    """通过 taskset -cp 查看绑定信息（人类可读）。"""
    try:
        out = subprocess.check_output(["taskset", "-cp", str(pid)], text=True).strip()
    except Exception as e:
        out = f"[taskset failed: {e}]"
    return out

def get_current_cpu_via_ps(pid: int) -> str:
    """通过 ps -o psr 查询当前进程正在哪个 CPU 上运行。"""
    try:
        # ps -o psr= 仅输出 processor 字段数值
        out = subprocess.check_output(["ps", "-o", "psr=", "-p", str(pid)], text=True).strip()
        return out
    except Exception as e:
        return f"[ps failed: {e}]"

def busy_worker(core_id: int):
    """单实例入口：绑核后做一点计算，每 2s 打印一次亲和性和当前 CPU。"""
    pid = os.getpid()
    proc_name = current_process().name

    try:
        set_cpu_affinity(core_id)
        print(f"[{proc_name} PID={pid}] ✅ 已绑定到 CPU {core_id}")

        last_print = 0.0
        while True:
            # 做点小计算，避免被调度器长期休眠
            _ = sum(i * i for i in range(20000))

            now = time.time()
            if now - last_print >= 2.0:
                aff_os = get_affinity_set_via_os()
                aff_taskset = get_affinity_set_via_taskset(pid)
                cur_cpu = get_current_cpu_via_ps(pid)
                print(
                    f"[{proc_name} PID={pid}] aff(os)={aff_os} | {aff_taskset} | current_cpu(psr)={cur_cpu}"
                )
                last_print = now

            # 小睡一会儿，降低风扇噪音…
            time.sleep(0.05)

    except KeyboardInterrupt:
        pass
    finally:
        print(f"[{proc_name} PID={pid}] 退出")

def main():
    # 确保 spawn/forkserver 在某些环境更稳（Linux 下默认 fork 也可工作）
    try:
        set_start_method("fork")
    except RuntimeError:
        pass

    cpu_count = os.cpu_count() or 1
    # 目标 4 个核：0/1/2/3；若机器核少于 4，按实际裁剪
    target_cores = [0, 1, 2, 3]
    cores = [c for c in target_cores if c < cpu_count]
    if not cores:
        cores = [0]
    print(f"[*] 本机逻辑核数: {cpu_count}, 启动实例绑定核: {cores}")

    procs = []
    for c in cores:
        p = Process(target=busy_worker, args=(c,), daemon=False, name=f"inst-cpu{c}")
        p.start()
        procs.append(p)

    def _stop(_sig, _frm):
        print("[*] 收到停止信号，终止所有实例…")
        for p in procs:
            if p.is_alive():
                p.terminate()

    signal.signal(signal.SIGINT, _stop)
    signal.signal(signal.SIGTERM, _stop)

    try:
        for p in procs:
            p.join()
    finally:
        print("[*] 全部实例已退出")

if __name__ == "__main__":
    main()
