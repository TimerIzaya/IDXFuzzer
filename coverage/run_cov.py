import os, time, glob, subprocess, numpy as np, tempfile, shutil
from coverage.bitmap import GlobalEdgeBitmap

def run_and_update_coverage(html_path: str,
                            edge_bitmap: GlobalEdgeBitmap,
                            tmp_dir: str | None = None,
                            total_edges: int = 1 << 24):
    """
    运行 content_shell 执行 html_path，对全局 edge_bitmap 做增量更新，
    返回 (new_edges, coverage_percent)。

    - 不清理历史 sancov_bitmap 文件；
    - 读取最新 .bin 后立即删除该文件，避免磁盘堆积；
    - 多进程并发安全：抓取 getmtime 时文件若消失则跳过。
    """
    def now_ms() -> int:
        return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)
    crash_dir = "/timer/IDXFuzzer/crashes"
    os.makedirs(crash_dir, exist_ok=True)

    bin_glob = "/tmp/sancov_bitmap_*.bin"

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

        t1 = now_ms()
        try:
            subprocess.run(cmd, check=True,
                           stdout=subprocess.DEVNULL,
                           stderr=subprocess.DEVNULL)
        except subprocess.CalledProcessError:
            # 保存触发崩溃的输入
            print(f"[!] Crash detected: {html_path}")
            shutil.copy(html_path, crash_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, crash_dir)
            return -1, 0.0
        t2 = now_ms()

        # --- 安全收集 .bin 文件 ---
        raw_bin_files = glob.glob(bin_glob)
        bin_files: list[str] = []
        for f in raw_bin_files:
            try:
                mtime = os.path.getmtime(f)         # 如果文件此时被删会抛异常
                bin_files.append((f, mtime))
            except FileNotFoundError:
                continue

        bin_files.sort(key=lambda x: x[1], reverse=True)
        bin_files = [f for f, _ in bin_files]

        if not bin_files:
            print("[!] No coverage file found.")
            return 0, total_edges

        cov_file = bin_files[0]

        # --- 更新位图 ---
        new_edges = edge_bitmap.update_from_file(cov_file)
        coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
        print(f"new_edge: {new_edges:<8} time: {t2 - t1} ms     coverage: {coverage:.4f}%")

        # --- 读取后删除当前 .bin ---
        try:
            os.remove(cov_file)
        except FileNotFoundError:
            # 并发场景下若已被其他进程删掉可忽略
            pass

        return new_edges, coverage
