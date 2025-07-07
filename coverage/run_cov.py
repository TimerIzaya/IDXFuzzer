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
    timeout_dir = os.path.join(crash_dir, "timeout")
    os.makedirs(crash_dir, exist_ok=True)
    os.makedirs(timeout_dir, exist_ok=True)

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
                           env=env,
                           timeout=5)  # ← 加了 timeout
        except subprocess.TimeoutExpired:
            print(f"[!] Timeout: {html_path}")
            shutil.copy(html_path, timeout_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, timeout_dir)
            return -1, 0.0
        except subprocess.CalledProcessError:
            print(f"[!] Crash detected: {html_path}")
            shutil.copy(html_path, crash_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, crash_dir)
            return -1, 0.0
        t2 = now_ms()

        bin_files = glob.glob(bin_glob)
        if not bin_files:
            print(f"[!] No coverage file found in {out_dir}")
            return 0, total_edges

        total_new_edges = 0
        for cov_file in bin_files:
            total_new_edges += edge_bitmap.update_from_file(cov_file)
            try:
                os.remove(cov_file)
            except FileNotFoundError:
                pass

        coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
        pid = os.getpid()
        # print(f"[PID {pid}] new_edge: {total_new_edges:<8} time: {t2 - t1} ms     coverage: {coverage:.4f}%")
        return total_new_edges, coverage


# if __name__ == "__main__":  
#     bitmap = GlobalEdgeBitmap(create=True)
#     name = bitmap.name()
#     run_and_update_coverage("crashes/timeout/8903bd1a.html", name)