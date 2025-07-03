import os
import time
import glob
import subprocess
import numpy as np

class GlobalEdgeBitmap:
    def __init__(self, size: int = 1 << 24):
        self.size = size
        self.bitmap = np.zeros(size, dtype=np.uint8)

    def update_from_file(self, path: str) -> int:
        """从 bin 文件加载 bitmap，返回新增的边数。"""
        with open(path, "rb") as f:
            data = np.frombuffer(f.read(), dtype=np.uint8, count=self.size)
        old_bitmap = self.bitmap.copy()
        self.bitmap[:len(data)] = np.maximum(self.bitmap[:len(data)], data)
        new_edges = np.count_nonzero(self.bitmap) - np.count_nonzero(old_bitmap)
        return new_edges

def now_ms():
    return int(time.time() * 1000)

def log_duration(label, start_ms, end_ms):
    print(f"[{label}] 耗时: {end_ms - start_ms} ms")

def run_and_update_coverage(html_path: str, edge_bitmap: GlobalEdgeBitmap, tmp_dir: str = "/tmp/chrome-tmp", total_edges: int = 7618971):
    html_path = os.path.abspath(html_path)
    bin_glob = "/tmp/sancov_bitmap_*.bin"

    t0 = now_ms()

    # 清理旧数据（不打印）
    if os.path.exists(tmp_dir):
        subprocess.run(["rm", "-rf", tmp_dir], check=True)
    for f in glob.glob(bin_glob):
        os.remove(f)
    t1 = now_ms()
    # 清理耗时不打印

    # 执行 content_shell
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
        f"file://{html_path}"
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    t2 = now_ms()
    # 执行 content_shell 耗时
    exec_time = t2 - t1

    # 获取 bin 文件
    bin_files = sorted(glob.glob(bin_glob), key=os.path.getmtime, reverse=True)
    if not bin_files:
        print("Error: No coverage bin file generated.")
        return 0, total_edges
    bin_file = bin_files[0]

    # 解析 bitmap 并更新全局
    t3 = now_ms()
    new_edges = edge_bitmap.update_from_file(bin_file)
    coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
    t4 = now_ms()
    parse_time = t4 - t3

    # 打印合计耗时
    total_time = exec_time + parse_time
    # print(f"新增覆盖边数: {new_edges}, 累计覆盖率: {coverage:.4f}%")
    print(f"time: {total_time} ms")

    return new_edges, coverage

if __name__ == "__main__":
    bm = GlobalEdgeBitmap()
    for i in range(2):
        html_file = f"/timer/IDXFuzzer/corpus/{i}/{i}.html"
        new_edges, total = run_and_update_coverage(html_file, bm)
        print(f"[Run {i}] 新增边: {new_edges}/{total}")
