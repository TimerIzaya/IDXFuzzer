from coverage.bitmap import GlobalEdgeBitmap
from coverage.run_cov_linux import run_and_update_coverage_linux


if __name__ == "__main__":  
    bitmap = GlobalEdgeBitmap(create=True)
    total_new_edges, coverage = run_and_update_coverage_linux("test.html", bitmap)
    print(total_new_edges)
    print(coverage)