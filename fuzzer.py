import signal
import threading
import time
from multiprocessing import Event

import numpy as np

import config
from coverage import bitmap
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.run_inss import start_workers, install_signal_handlers, stop_workers, _sigint_handler
from coverage.stat_worker import stat_worker
from execution.run_inss_restore import resolve_restore_mode
from tool.tool import init_output_dirs



# 在主入口处注册：




if __name__ == '__main__':
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
    signal.signal(signal.SIGINT, _sigint_handler)
    signal.signal(signal.SIGTERM, _sigint_handler)


    # 先处理restore模式
    resolve_restore_mode()

    # 启动 worker 实例
    config.MODE_CUR = "generation"
    START_CPU = 0  # 可根据需要改成 e.g. 2 或从配置读取
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
        stop_workers(procs, stop_event, timeout=2.0)  # 内部应: set->join(timeout)->terminate遗留->join

        stat_thread.join(timeout=2.0)

        global_bitmap.close()
        global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
        print("[main] exited.")
