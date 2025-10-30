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
    folder = "test"
    keep_file = "test.html"

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
    # cleanTestEnv()
    exit  = run_content_shell(path)
    print(exit)

def test_run_one_case(path):
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    run_one_case(path)

#
# def testGen():
#     cid = make_uid()
#     html_path = gen_case(cid)
#     print(html_path)
#     return html_path

if __name__ == '__main__':
     # path = testGen()
    #  test_run_content_shell("test/case_0_env/test.html")   

    init_output_dirs()
    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)
    test_run_one_case("test/case_1_env/test.html")   
    # init_output_dirs()


    # global_bitmap = GlobalEdgeBitmap(create=True)
    # Stats.init(create=True)

    # path = Path("result/corpus")  # 改成你的目录
    # for d in path.iterdir():
    #     case = d / f"{d.name}.html"
    #     case_str = case.as_posix()
    #     run_one_case(case_str)

    # bitmap = GlobalEdgeBitmap(create=False)
    # coverage_pct = (np.count_nonzero(bitmap.bitmap) / max(1, config.EDGE_TOTAL_COUNT)) * 100.0
    # print(coverage_pct)


    


