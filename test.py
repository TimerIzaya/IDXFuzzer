import os
import shutil
import time
from coverage.bitmap import GlobalEdgeBitmap
from execution.run_content_shell import run_content_shell
from main import make_uid, gen_case, init_exec_worker
from pathlib import Path


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


def testRun(path):
    cleanTestEnv()
    is_content_shell_done = run_content_shell(path)
    print("is_content_shell_done:", is_content_shell_done )


def testGen():
    cid = make_uid()
    html_path = gen_case(cid)
    print(html_path)
    return html_path

if __name__ == '__main__':
     # path = testGen()
     # testRun(path)
     # testRun("test.html")
    #testRunSpec("result/corpus/7844dc39/7844dc39.html")
     testRun("test/test.html")