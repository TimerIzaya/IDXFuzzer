from coverage.bitmap import GlobalEdgeBitmap
from execution.run_content_shell import run_content_shell
from main import make_uid, gen_case, run, init_worker
from pathlib import Path



def testRun(path):
    def getCases():
        base_dir = Path("/timer/index/result/crashes/timeout")
        html_files = [str(p) for p in base_dir.glob("*/**/*.html")]
        return html_files

    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()


    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    init_worker()
    new_edges, crashStatus = run(path, bitmap)
    print(new_edges, crashStatus)

    # paths = getCases()
    # for p in paths:
    #     print(p)
    #     bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    #     new_edges, crashStatus = run(p, bitmap)
    #     print(new_edges, crashStatus)
    #     print("      ")
    #     print("      ")
    #     print("      ")


def testGen():
    cid = make_uid()
    html_path, out_dir = gen_case(cid)
    print(html_path)
    print(out_dir)
    return html_path

def testRunSingleContentShell():
    run_content_shell("test.html")

if __name__ == '__main__':
     # path = testGen()
     # testRun(path)
     # testRun("test.html")
    #testRunSpec("result/corpus/7844dc39/7844dc39.html")
    testRunSingleContentShell()

