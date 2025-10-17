from coverage.bitmap import GlobalEdgeBitmap
from execution.run_content_shell import run_content_shell
from main import make_uid, gen_case, init_exec_worker
from pathlib import Path



def testRun(path):
    new_edges, crashStatus = run_content_shell(path)
    print(new_edges, crashStatus)


def testGen():
    cid = make_uid()
    html_path, out_dir = gen_case(cid)
    print(html_path)
    print(out_dir)
    return html_path


if __name__ == '__main__':
     # path = testGen()
     # testRun(path)
     # testRun("test.html")
    #testRunSpec("result/corpus/7844dc39/7844dc39.html")
     testRun("test/test.html")
