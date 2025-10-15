import os
import signal
import subprocess
import time

import config


def run_content_shell(html_path: str):
    html_path_abs = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    log_path = os.path.join(out_dir, "content_shell.log")

    cmd = [
        "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
        "--no-sandbox", "--headless=new", "--ozone-platform=headless",
        "--disable-gpu", "--disable-plugins", "--disable-extensions",
        "--disable-breakpad", "--disable-default-apps", "--disable-sync",
        "--disable-background-networking", "--disable-popup-blocking",
        "--no-default-browser-check", "--password-store=basic",
        "--use-mock-keychain", "--disable-hang-monitor",
        "--no-zygote", "--remote-debugging-port=0",
        "--run-all-compositor-stages-before-draw",
        f"--user-data-dir={tmp_dir}",
        "--enable-crash-reporter",
        "--enable-logging=stderr",  # 把 console/error 打到 stderr
        f"--crash-dumps-dir={out_dir}",
        f"file://{html_path_abs}",
    ]

    env = os.environ.copy()
    env["SANCOV_OUTPUT_DIR"] = out_dir

    # 启动 content_shell；日志写文件，避免 PIPE 阻塞
    logw = open(log_path, "wb")
    print("子进程启动")
    proc = subprocess.Popen(
        cmd, stdout=logw, stderr=logw,
        env=env, start_new_session=True
    )


    begin_seen = False
    done_seen = False
    t0 = time.time()

    while True:
        # 每间隔0.1s读一次全部文件
        time.sleep(0.1)
        try:
            with open(log_path, "rb") as r:
                content = r.read()
                if b"FUZZ_BEGIN:" in content:
                    begin_seen = True
                if b"FUZZ_DONE:" in content:
                    done_seen = True
        except FileNotFoundError:
            pass

        # 进程已退出但没看到 DONE → 异常/崩溃， 目前没遇到过
        if proc.poll() is not None and not done_seen:
            time.sleep(0.2)  # 等 crash 标记落盘
            logw.close()
            return -1

        # BEGIN 5s都没出现 → 页面没跑起来，当异常
        if not begin_seen and time.time() - t0 > 5000:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            logw.close()
            return -1

        # BEGIN 出现但超过语义窗口仍未
        if time.time()  - t0 > config.PROCESS_TIMEOUT:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            logw.close()
            return -1

        if done_seen:
            # 看到了 DONE：尽量优雅退出
            try:
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                try:
                    os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError:
                    pass
            logw.close()
            return 0
