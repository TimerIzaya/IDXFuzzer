import os, time, glob, subprocess, numpy as np, tempfile, shutil

import config
from config import EDGE_TOTAL_COUNT
from coverage.bitmap import GlobalEdgeBitmap

CORPUS_ROOT = "result/corpus"
CRASH_ROOT = "result/crashes"
TIMEOUT_DIR = os.path.join(CRASH_ROOT, "timeout")

def run_and_update_coverage_linux(html_path: str,
                            edge_bitmap: GlobalEdgeBitmap,
                            tmp_dir: str | None = None):
    """
    运行 content_shell 执行 html_path，对全局 edge_bitmap 做增量更新，
    返回 (new_edges, coverage_percent)。
    只记录超时，不处理 crash。
    """
    def now_ms() -> int:
        return int(time.time() * 1000)

    html_path = os.path.abspath(html_path)
    timeout_dir = TIMEOUT_DIR
    os.makedirs(timeout_dir, exist_ok=True)

    out_dir = os.path.dirname(html_path)
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 解析html的id，同时作为crash id
    file_name = os.path.basename(html_path)  # "0a9cab04.html"
    crash_id = os.path.splitext(file_name)[0]  # "0a9cab04"
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
            "--virtual-time-budget=20000", f"--user-data-dir={tmp_dir}",
            "--crash-reporter-pid={crash_id}",
            "--enable-crash-reporter", "--crash-dumps-dir=result/crashes",
            f"file://{html_path}"
        ]

        env = os.environ.copy()
        env["SANCOV_OUTPUT_DIR"] = out_dir

        t1 = now_ms()
        try:
            subprocess.run(cmd,
                           stdout=subprocess.DEVNULL,
                           stderr=subprocess.DEVNULL,
                           env=env,
                           timeout=config.PROCESS_TIMEOUT)
        except subprocess.TimeoutExpired:
            # 只处理超时
            shutil.copy(html_path, timeout_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path):
                shutil.copy(json_path, timeout_dir)
            return -1, 0.0
        except subprocess.CalledProcessError:
            # 不再当作 crash，只忽略
            pass

        t2 = now_ms()

        bin_files = glob.glob(bin_glob)
        if not bin_files:
            # 覆盖率文件缺失，直接返回0
            return 0, EDGE_TOTAL_COUNT

        total_new_edges = 0
        for cov_file in bin_files:
            total_new_edges += edge_bitmap.update_from_file(cov_file)

        coverage = np.count_nonzero(edge_bitmap.bitmap) / EDGE_TOTAL_COUNT * 100
        return total_new_edges, coverage

