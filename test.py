import os
import shutil
from execution.exec_case import run_content_shell


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
    # cleanTestEnv()
    is_content_shell_done = run_content_shell(path)
    print("is_content_shell_done:", is_content_shell_done )

#
# def testGen():
#     cid = make_uid()
#     html_path = gen_case(cid)
#     print(html_path)
#     return html_path

if __name__ == '__main__':
     # path = testGen()
     # testRun(path)
     # testRun("test.html")
    #testRunSpec("result/corpus/7844dc39/7844dc39.html")
     testRun("test/case_0_env/test.html")
     print(1)