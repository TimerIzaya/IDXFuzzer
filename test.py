from coverage.bitmap import GlobalEdgeBitmap
from main import run

if __name__ == '__main__':
    bitmap = GlobalEdgeBitmap(create=True)
    bitmap_name = bitmap.name()
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, crashStatus = run("test/test.html", bitmap)
    print(new_edges, crashStatus)