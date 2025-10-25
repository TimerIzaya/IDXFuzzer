import os
import shutil
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from execution.exec_case import run_content_shell, run_one_case


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
    test_run_one_case("test/case_0_env/test.html")   
