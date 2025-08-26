from coverage.bitmap import GlobalEdgeBitmap
from main import run
from pathlib import Path


def getCases():
    base_dir = Path("/timer/index/result/crashes/timeout")
    html_files = [str(p) for p in base_dir.glob("*/**/*.html")]
    return html_files

if __name__ == '__main__':
    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()


    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, crashStatus = run("/timer/index/result/crashes/timeout/186eeef8/186eeef8.html", bitmap)

    # paths = getCases()
    # for p in paths:
    #     print(p)
    #     bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    #     new_edges, crashStatus = run(p, bitmap)
    #     print(new_edges, crashStatus)
    #     print("      ")
    #     print("      ")
    #     print("      ")

