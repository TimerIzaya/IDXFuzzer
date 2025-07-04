import os, time, glob, subprocess, numpy as np, tempfile, shutil
from coverage.bitmap import GlobalEdgeBitmap

def run_and_update_coverage(html_path: str, edge_bitmap: GlobalEdgeBitmap, tmp_dir=None, total_edges=1 << 24):
    def now(): return int(time.time() * 1000)
    html_path = os.path.abspath(html_path)
    crash_dir = "/timer/IDXFuzzer/crashes"
    os.makedirs(crash_dir, exist_ok=True)

    bin_glob = "/tmp/sancov_bitmap_*.bin"

    with tempfile.TemporaryDirectory(prefix="chrome-tmp-") as real_tmp:
        tmp_dir = tmp_dir or real_tmp

        for f in glob.glob(bin_glob):
            try: os.remove(f)
            except: pass

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

        t1 = now()
        try:
            subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except subprocess.CalledProcessError:
            print(f"[!] Crash detected: {html_path}")
            shutil.copy(html_path, crash_dir)
            json_path = html_path.replace(".html", ".json")
            if os.path.exists(json_path): shutil.copy(json_path, crash_dir)
            return -1, 0.0

        t2 = now()
        bin_files = sorted(glob.glob(bin_glob), key=os.path.getmtime, reverse=True)
        if not bin_files:
            print("[!] No coverage file.")
            return 0, total_edges

        new_edges = edge_bitmap.update_from_file(bin_files[0])
        coverage = np.count_nonzero(edge_bitmap.bitmap) / total_edges * 100
        print(f"new_edge: {new_edges:<8} time: {t2 - t1} ms     coverage: {coverage:.4f}%")
        return new_edges, coverage
