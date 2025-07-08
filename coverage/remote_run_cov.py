import os
from coverage.bitmap import GlobalEdgeBitmap
from coverage.RemoteExecutor import RemoteExecutor


def run_html_and_get_coverage(case_no: str,
                               edge_bitmap: GlobalEdgeBitmap,
                               remote: RemoteExecutor,
                               total_edges: int = 1 << 24):
    """
    - 远程执行 content_shell；
    - Bin 结果移动到共享目录 /mnt/vmshare；
    - 本地分析 bin 文件；
    - 删除 bin 文件。
    """
    remote_out_dir = "/mnt/vmshare/testCorpus"
    remote_html_path = f"/mnt/vmshare/testCorpus/{case_no}/{case_no}.html"

    # 设置远程环境变量
    env = f"SANCOV_OUTPUT_DIR={remote_out_dir}/{case_no}"

    tmp_dir = "$(mktemp -d -p /tmp chrome-tmp-XXXXXX)"
    crash_dir = "/timer/IDXFuzzer/crashes"
    cmd = f"{env} timeout -s KILL 5s /timer/chromium/src/out/IndexedDBSanCov/content_shell " \
          f"--no-sandbox --headless=new --ozone-platform=headless " \
          f"--disable-gpu --disable-plugins --disable-extensions " \
          f"--disable-breakpad --disable-default-apps --disable-sync " \
          f"--disable-background-networking --disable-popup-blocking " \
          f"--no-default-browser-check --password-store=basic " \
          f"--use-mock-keychain --disable-hang-monitor " \
          f"--run-all-compositor-stages-before-draw " \
          f"--virtual-time-budget=2000 --user-data-dir={tmp_dir} " \
          f"--enable-crash-reporter --crash-dumps-dir={crash_dir} " \
          f"file://{remote_html_path}"

    print("[+] SSH: Running content_shell remotely")
    out, err = remote.exec(cmd)
    if out:
        print(out)
    if err:
        print(err)

    # 本地处理 coverage
    local_bin_path = os.path.join(r"C:\TimerIzaya\VMShare\testCorpus", str(case_no), "sancov_bitmap_*.bin")
    # bin_glob = os.path.join(os.path.dirname(local_bin_path), "sancov_bitmap_*.bin")

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

    coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
    return total_new_edges, coverage


if __name__ == "__main__":
    remote = RemoteExecutor(
        hostname="192.168.31.174",
        username="root",
        key_path=r"C:\\Users\\TimerIzaya\\.ssh\\id_ed25519"
    )

    bitmap = GlobalEdgeBitmap()
    html_name = "testCorpus/0/0.html"
    new_edges, coverage = run_html_and_get_coverage(0, bitmap, remote)

    print(f"[+] New edges: {new_edges}, coverage: {coverage:.4f}%")