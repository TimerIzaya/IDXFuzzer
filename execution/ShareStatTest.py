# ===== 演示：模拟多进程并发累加 =====
from multiprocessing import Process
from execution import SharedStat


def worker(proc_id: int, rounds: int = 1000, interesting_every: int = 100):
    stat = SharedStat(SharedStat.SHM_NAME, create=None)
    for i in range(1, rounds + 1):
        timeout   = 1 if (i % 17 == 0) else 0
        pending   = 1 if (i % 23 == 0) else 0
        is_new    = 1 if (i % 29 == 0) else 0
        completed = 1 if (i % 7  == 0) else 0
        attach_n  = 1 if (i % 13 == 0) else 0

        mark_interesting = (i % interesting_every == 0)

        stat.record_exec(
            timeout=timeout,
            pending=pending,
            is_new=is_new,
            completed=completed,
            attachments=attach_n,
            mark_interesting=mark_interesting,
        )
        if i % 200 == 0:
            sleep(0.001)
    stat.close()



def demo():
    # 第一个进程先“明确创建”，清零
    creator = SharedStat(SHM_NAME, create=True)
    print("[creator] zeroed:", creator.snapshot())
    creator.close()

    # 启动多个“实例”并发累加
    procs = []
    for p in range(4):  # 4 个实例
        pr = Process(target=worker, args=(p, 1000, 123))
        pr.start()
        procs.append(pr)

    for pr in procs:
        pr.join()

    # 读最终结果
    reader = SharedStat(SharedStat.SHM_NAME, create=False)
    snap = reader.snapshot()
    print("[final]", snap)
    reader.close()
    # 清理共享段（只有创建者/最后一个进程需要做；demo 就直接 unlink）
    try:
        reader.unlink()
    except Exception:
        pass


if __name__ == "__main__":
    # 直接运行本文件：python3 shared_stat_demo.py
    demo()
