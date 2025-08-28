from coverage.bitmap import GlobalEdgeBitmap
from main import run, make_uid, gen_case
from pathlib import Path



def testRun(path):
    def getCases():
        base_dir = Path("/timer/index/result/crashes/timeout")
        html_files = [str(p) for p in base_dir.glob("*/**/*.html")]
        return html_files

    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()


    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
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
    return html_path
    print(html_path)
    print(out_dir)



if __name__ == '__main__':
    path = testGen()
    testRun(path)