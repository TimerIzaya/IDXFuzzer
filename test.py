import time
from multiprocessing import Event, Process
import os
from pathlib import Path
import shutil
import signal
import threading

import numpy as np

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from coverage.stat_worker import stat_worker
from execution.run_inss import stop_workers, start_workers, install_signal_handlers
from tool.tool import init_output_dirs


def cleanTestFile():
    base_dir = "test"

    # 遍历 test/ 下的所有项
    for name in os.listdir(base_dir):
        subdir = os.path.join(base_dir, name)
        # 只处理目录
        if not os.path.isdir(subdir):
            continue

        # 要保留的文件名，比如 t0 -> t0.html
        keep_file = f"{name}.html"
        keep_path = os.path.join(subdir, keep_file)

        for item in os.listdir(subdir):
            path = os.path.join(subdir, item)
            # 跳过要保留的那个 html
            if item == keep_file:
                continue
            if os.path.isfile(path):
                os.remove(path)
            elif os.path.isdir(path):
                shutil.rmtree(path)

        # 如果这个目录本来就没有对应的 html，也不报错，只是提示一下
        if not os.path.exists(keep_path):
            print(f"[warn] {subdir} 中没有要保留的 {keep_file}")

    print("清理完成，仅保留各子目录同名的 .html 文件")


'''
复刻crash现场，无限投递
'''
def mock_repeat_one():
    # 初始化文件夹、shared bitmap、Stats、统计线程
    init_output_dirs()

    # 创建 / 绑定 全局 bitmap（主进程负责创建 shared object）
    global_bitmap = GlobalEdgeBitmap(create=True)

    # 初始化统计共享内存
    Stats.init(create=True)

    stop_event = Event()

    # 启动 stat_worker 线程
    stat_thread = threading.Thread(target=stat_worker, args=(global_bitmap, time.time(), stop_event), daemon=True)
    stat_thread.start()
    signal.signal(signal.SIGINT, stop_workers)
    signal.signal(signal.SIGTERM, stop_workers)

    # 先处理restore模式
    # resolve_restore_mode()

    # 启动 worker 实例
    config.MODE_CUR = "generation"
    START_CPU = 0  # 可根据需要改成 e.g. 2 或从配置读取
    config.NUM_INSTANCES = 1
    procs = start_workers(config.NUM_INSTANCES, START_CPU, stop_event)

    # 安装信号处理器，便于按 Ctrl-C 优雅退出
    stop_event_holder = {"stop_event": stop_event}
    procs_holder = {"procs": procs}
    install_signal_handlers(stop_event_holder, procs_holder)

    try:
        # 主线程循环：仅用于保持进程存活并可处理其他周期性任务
        while not stop_event.is_set():
            time.sleep(0.2)
    except KeyboardInterrupt:
        print("[main] KeyboardInterrupt, shutting down...")
    finally:
        stop_event.set()
        stop_workers(procs, stop_event)  # 内部应: set->join(timeout)->terminate遗留->join

        stat_thread.join(timeout=2.0)

        global_bitmap.close()
        global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
        print("[main] exited.")

if __name__ == '__main__':
    mock_repeat_one()


