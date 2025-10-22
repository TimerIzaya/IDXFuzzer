import threading
import time

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.run_inss import start_workers, install_signal_handlers, stop_workers
from coverage.stat_worker import stat_worker
from tool.tool import init_output_dirs

if __name__ == '__main__':
     # 初始化文件夹、shared bitmap、Stats、统计线程
    init_output_dirs()

    # 创建 / 绑定 全局 bitmap（主进程负责创建 shared object）
    global_bitmap = GlobalEdgeBitmap(create=True)
    # 如果 GlobalEdgeBitmap 支持 name()，保留名字
    try:
        gb_name = global_bitmap.name()
    except Exception:
        gb_name = getattr(global_bitmap, "shm", None) and getattr(global_bitmap.shm, "name", None)

    # 初始化统计共享内存
    Stats.init(create=True)

    # 启动 stat_worker 线程
    stat_thread = threading.Thread(target=stat_worker, args=(global_bitmap, time.time()), daemon=True)
    stat_thread.start()

    # 启动 worker 实例
    START_CPU = 0  # 可根据需要改成 e.g. 2 或从配置读取
    procs, stop_event = start_workers(config.NUM_INSTANCES, START_CPU)
    # 安装信号处理器，便于按 Ctrl-C 优雅退出
    stop_event_holder = {"stop_event": stop_event}
    procs_holder = {"procs": procs}
    install_signal_handlers(stop_event_holder, procs_holder)
    print("[main] all workers started. Press Ctrl-C to stop.")

    try:
        # 主线程循环：仅用于保持进程存活并可处理其他周期性任务
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("[main] KeyboardInterrupt, shutting down...")
    finally:
        stop_workers(procs, stop_event, timeout=10.0)
        try:
            global_bitmap.close()
            global_bitmap.unlink()
        except Exception:
            pass
        print("[main] exited.")