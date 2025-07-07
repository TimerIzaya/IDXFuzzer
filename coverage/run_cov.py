import os, time, glob, subprocess, numpy as np, tempfile, shutil
from coverage.bitmap import GlobalEdgeBitmap

def run_and_update_coverage(html_path: str,
                            edge_bitmap: GlobalEdgeBitmap,
                            tmp_dir: str | None = None,
                            total_edges: int = 1 << 24):
    """
    运行 content_shell 执行 html_path，对全局 edge_bitmap 做增量更新，
    返回 (new_edges, coverage_percent)。

    - 每个进程只读取自己目录下的 sancov_bitmap；
    - 读取完 .bin 后立即删除；
    """
    def now_ms() -> int:
        return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)
    crash_dir = "/timer/IDXFuzzer/crashes"
    os.makedirs(crash_dir, exist_ok=True)

    out_dir = os.path.dirname(html_path)
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    with tempfile.TemporaryDirectory(prefix="chrome-tmp-") as real_tmp:
        tmp_dir = tmp_dir or real_tmp

        cmd = [
            "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
            "--no-sandbox", "--headless=new", "--ozone-platform=headless",
            "--disable-gpu", "--disable-plugins", "--disable-extensions",
            "--disable-breakpad", "--disable-default-apps", "--disable-sync",
            "--disable-background-networking", "--disable-popup-blocking",
            "--no-default-browser-check", "--password-store=basic",
            "--use-mock-keychain", "--disable-hang-monitor",
            "--run-all-compositor-stages-before-draw",
            "--virtual-time-budget=2000", f"--user-data-dir={tmp_dir}",
            "--enable-crash-reporter", f"--crash-dumps-dir={crash_dir}",
            f"file://{html_path}"
        ]

        env = os.environ.copy()
        env["SANCOV_OUTPUT_DIR"] = out_dir

        t1 = now_ms()
        try:
            subprocess.run(cmd, check=True,
                           stdout=subprocess.DEVNULL,
                           stderr=subprocess.DEVNULL,
                           env=env)
        except subprocess.CalledProcessError:
            print(f"[!] Crash detected: {html_path}")
            shutil.copy(html_path, crash_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, crash_dir)
            return -1, 0.0
        t2 = now_ms()

        raw_bin_files = glob.glob(bin_glob)
        bin_files: list[str] = []
        for f in raw_bin_files:
            try:
                mtime = os.path.getmtime(f)
                bin_files.append((f, mtime))
            except FileNotFoundError:
                continue

        bin_files.sort(key=lambda x: x[1], reverse=True)
        bin_files = [f for f, _ in bin_files]

        if not bin_files:
            print("[!] No coverage file found.")
            return 0, total_edges

        cov_file = bin_files[0]
        new_edges = edge_bitmap.update_from_file(cov_file)
        coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
        print(f"new_edge: {new_edges:<8} time: {t2 - t1} ms     coverage: {coverage:.4f}%")

        try:
            os.remove(cov_file)
        except FileNotFoundError:
            pass

        return new_edges, coverage
