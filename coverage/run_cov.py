import os
import time
import glob
import subprocess
import numpy as np
import tempfile
import shutil


# ✅ 自动判断 content_shell 是否 crash
# ✅ 崩溃时将 .html（可选：.json）移动到 /timer/IDXFuzzer/crashes/
# ✅ 启用 --enable-crash-reporter 并写入 .dmp 到该目录
# ✅ 控制台输出 crash 信息

class GlobalEdgeBitmap:
    def __init__(self, size: int = 1 << 24):
        self.size = size
        self.bitmap = np.zeros(size, dtype=np.uint8)

    def update_from_file(self, path: str) -> int:
        with open(path, "rb") as f:
            raw = f.read()
            if len(raw) > self.size:
                raise ValueError(f"Coverage bin too large: {len(raw)} > {self.size}")
            data = np.frombuffer(raw, dtype=np.uint8)

        old_bitmap = self.bitmap.copy()
        self.bitmap[:len(data)] = np.maximum(self.bitmap[:len(data)], data)
        return np.count_nonzero(self.bitmap) - np.count_nonzero(old_bitmap)


def run_and_update_coverage(html_path: str, edge_bitmap, tmp_dir: str = None, total_edges: int = 7618971):
    def now_ms(): return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)
    bin_glob = "/tmp/sancov_bitmap_*.bin"

    # 生成 crash 保存目录
    crash_dir = "/timer/IDXFuzzer/crashes"
    os.makedirs(crash_dir, exist_ok=True)

    # 每次执行使用唯一 user-data-dir
    with tempfile.TemporaryDirectory(prefix="chrome-tmp-") as real_tmp_dir:
        if tmp_dir is None:
            tmp_dir = real_tmp_dir

        # 清理旧的 .bin 文件
        for f in glob.glob(bin_glob):
            try:
                os.remove(f)
            except:
                pass

        t1 = now_ms()
        cmd = [
            "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
            "--no-sandbox",
            "--disable-gpu",
            "--disable-plugins",
            "--disable-extensions",
            "--disable-software-rasterizer",
            "--disable-background-networking",
            "--disable-breakpad",
            "--disable-client-side-phishing-detection",
            "--disable-default-apps",
            "--disable-dev-shm-usage",
            "--disable-hang-monitor",
            "--disable-popup-blocking",
            "--disable-sync",
            "--metrics-recording-only",
            "--no-first-run",
            "--no-default-browser-check",
            "--password-store=basic",
            "--use-mock-keychain",
            "--headless=new",
            "--ozone-platform=headless",
            "--no-startup-window",
            "--run-all-compositor-stages-before-draw",
            "--virtual-time-budget=2000",
            f"--user-data-dir={tmp_dir}",
            "--enable-crash-reporter",
            f"--crash-dumps-dir={crash_dir}",
            f"file://{html_path}"
        ]

        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except subprocess.CalledProcessError:
            print(f"[!] Crash detected when executing: {html_path}")
            # 保存 HTML 和 JSON
            shutil.copy(html_path, crash_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, crash_dir)
            return -1, 0.0

        t2 = now_ms()
        exec_time = t2 - t1

        # 查找 bin 文件
        bin_files = sorted(glob.glob(bin_glob), key=os.path.getmtime, reverse=True)
        if not bin_files:
            print("[!] No coverage file generated.")
            return 0, total_edges

        bin_file = bin_files[0]
        t3 = now_ms()
        new_edges = edge_bitmap.update_from_file(bin_file)
        coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
        t4 = now_ms()
        total_time = (t2 - t1) + (t4 - t3)

        return new_edges, coverage, total_time


if __name__ == "__main__":
    bm = GlobalEdgeBitmap()
    for i in range(2):
        html_file = f"/timer/IDXFuzzer/corpus/{i}/{i}.html"
        new_edges, total = run_and_update_coverage(html_file, bm)
        print(f"[Run {i}] 新增边: {new_edges}/{total}")
