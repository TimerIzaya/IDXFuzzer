import os
from pathlib import Path
import shutil

import numpy as np
import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.exec_case import run_content_shell, run_one_case
from tool.tool import init_output_dirs


def cleanTestEnv():
    folder = "test/t0"
    keep_file = "t0.html"

    for item in os.listdir(folder):
        path = os.path.join(folder, item)
        if item == keep_file:
            continue
        if os.path.isfile(path):
            os.remove(path)
        elif os.path.isdir(path):
            shutil.rmtree(path)
    print("清理完成，仅保留 test.html")


def test_run_content_shell(path):
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    run_content_shell(path)
    global_bitmap.close()
    global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
    Stats.close()
    Stats.unlink()


def test_run_one_case(path):
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    run_one_case(path)
    global_bitmap.close()
    global_bitmap.unlink()  # 只有创建者 unlink（你的实现里已记录 created/creator 就行）
    Stats.close()
    Stats.unlink()


if __name__ == '__main__':
    cleanTestEnv()
    # test_run_one_case("test/t0/t0.html")   





    


