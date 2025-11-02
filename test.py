from multiprocessing import Process
import os
from pathlib import Path
import shutil
import signal

import numpy as np
import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.exec_case import get_one_content_shell_pid, run_content_shell, run_one_case
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


def test_run_content_shell(path):
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    run_content_shell(path)
    global_bitmap.close()
    global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
    Stats.close()
    Stats.unlink()


def test_run_one_case():
    run_one_case("test/t1/t1.html")
    os.kill(get_one_content_shell_pid(), signal.SIGUSR1)

    run_one_case("test/t1/t1.html")
    os.kill(get_one_content_shell_pid(), signal.SIGUSR1)

    run_one_case("test/t1/t1.html")
    os.kill(get_one_content_shell_pid(), signal.SIGUSR1)

    run_one_case("test/t1/t1.html")
    os.kill(get_one_content_shell_pid(), signal.SIGUSR1)



def initTestEnv():
    cleanTestFile()
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    return global_bitmap

def clearTestEnv(global_bitmap):
    global_bitmap.close()
    global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
    Stats.close()
    Stats.unlink()

if __name__ == '__main__':

    global_bitmap = initTestEnv()

    p = Process(target=test_run_one_case)
    p.start()      # 启动子进程
    p.join()       # 等子进程结束（可省略）


    clearTestEnv(global_bitmap)

    






    


