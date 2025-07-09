import os

from config import EDGE_TOTAL_COUNT
from coverage.bitmap import GlobalEdgeBitmap
from coverage.RemoteExecutor import RemoteExecutor


SHARE_ROOT_CORPUS = "/mnt/vmshare/corpus"
SHARE_ROOT_CRASHES = "/mnt/vmshare/crashes"
SHARE_ROOT_TIMEOUT = "/mnt/vmshare/timeout"

def run_html_and_get_coverage_remote(case_no: str,
                               edge_bitmap: GlobalEdgeBitmap,
                               remote: RemoteExecutor):
    """
    - 远程执行 content_shell；
    - Bin 结果移动到共享目录 /mnt/vmshare；
    - 本地分析 bin 文件；
    - 删除 bin 文件。
    """
    remote_html_path = f"/{SHARE_ROOT_CORPUS}/{case_no}/{case_no}.html"

    # 设置远程环境变量
    env = f"SANCOV_OUTPUT_DIR={SHARE_ROOT_CORPUS}/{case_no}"

    tmp_dir = "$(mktemp -d -p /tmp chrome-tmp-XXXXXX)"
    cmd = f"{env} timeout -s KILL 5s /timer/chromium/src/out/IndexedDBSanCov/content_shell " \
          f"--no-sandbox --headless=new --ozone-platform=headless " \
          f"--disable-gpu --disable-plugins --disable-extensions " \
          f"--disable-breakpad --disable-default-apps --disable-sync " \
          f"--disable-background-networking --disable-popup-blocking " \
          f"--no-default-browser-check --password-store=basic " \
          f"--use-mock-keychain --disable-hang-monitor " \
          f"--run-all-compositor-stages-before-draw " \
          f"--disable-logging --log-level=3" \
          f"--virtual-time-budget=2000 --user-data-dir={tmp_dir} " \
          f"--enable-crash-reporter --crash-dumps-dir={SHARE_ROOT_CRASHES} " \
          f"file://{remote_html_path} > /dev/null 2>&1"

    # print("[+] SSH: Running content_shell remotely")
    out, err = remote.exec(cmd)
    if out:
        pass
        # print(out)
    if err:
        pass
        # print(err)

    # 本地处理 coverage
    local_bin_path = os.path.join(r"C:\TimerIzaya\VMShare\corpus", str(case_no), "sancov_bitmap_*.bin")

    import glob
    import numpy as np

    bin_files = glob.glob(local_bin_path)
    if not bin_files:
        print(f"[!] No coverage file found in vmshare")
        return 0, 0.0

    total_new_edges = 0
    for cov_file in bin_files:
        total_new_edges += edge_bitmap.update_from_file(cov_file)
        os.remove(cov_file)

    coverage = np.count_nonzero(edge_bitmap.bitmap) / EDGE_TOTAL_COUNT * 100
    return total_new_edges, coverage


if __name__ == "__main__":
    remote = RemoteExecutor(
        hostname="192.168.31.174",
        username="root",
        key_path=r"C:\\Users\\TimerIzaya\\.ssh\\id_ed25519"
    )

    bitmap = GlobalEdgeBitmap()
    html_name = "corpus/0/0.html"
    new_edges, coverage = run_html_and_get_coverage_remote(0, bitmap, remote)

    print(f"[+] New edges: {new_edges}, coverage: {coverage:.4f}%")