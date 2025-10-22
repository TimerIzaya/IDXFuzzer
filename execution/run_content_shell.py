from enum import Enum, auto
import os
import signal
import subprocess
import time
from datetime import datetime

import config

class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()      # 正常退出
    PROCESS_TIMEOUT = auto()            # 程序崩溃（如 SegFault）
    SEMANTIC_ERROR = auto()   # 语义错误（如 JS 逻辑错误、UnhandledRejection）
    OTHER = auto()

    def __str__(self):
        return self.name




def run_content_shell(html_path: str) -> CSExitStatus:
    def recordTimeInLog(message: str):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
        logw.write((ts + ": " + message + "\n").encode("utf-8"))
        logw.flush()  # 刷到内存
        os.fsync(logw.fileno())  # 刷到磁盘（避免顺序被打乱）

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
    recordTimeInLog("content_shell sub process started")

    proc = subprocess.Popen(
        cmd, stdout=logw, stderr=logw,
        env=env, start_new_session=True
    )

    begin_seen = False
    done_seen = False
    semantic_error_seen = False
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
                if b"FUZZ_JS_ERROR" or b"FUZZ_UNHANDLED_REJECTION" in content:
                    runtime_error_seen = True
        except FileNotFoundError:
            recordTimeInLog("content shell log FileNotFoundError")
            pass

        # 进程已退出但没看到 DONE → 异常/崩溃， 目前没遇到过
        if proc.poll() is not None and not done_seen:
            time.sleep(0.2)  # 等 crash 标记落盘
            recordTimeInLog("process exited but not found done")
            logw.close()
            return CSExitStatus.OTHER
        
        if semantic_error_seen:
            recordTimeInLog("semantic error in js, exit..")
            logw.close()
            return CSExitStatus.SEMANTIC_ERROR

        # BEGIN 5s都没出现, 页面没跑起来，理论上来说不会再见的
        if not begin_seen and time.time() - t0 > 5000:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            recordTimeInLog("waiting begin 5s but not found")
            logw.close()
            return CSExitStatus.OTHER

        # 纯进程超时了，理论上来说不会再见的
        if time.time() - t0 > config.PROCESS_TIMEOUT:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            recordTimeInLog("something blocking, process timeout ")
            logw.close()
            return CSExitStatus.PROCESS_TIMEOUT

        if done_seen:
            # 看到了 DONE：尽量优雅退出
            try:
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                try:
                    os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError:
                    pass
            recordTimeInLog("found done, bye")
            logw.close()
            return CSExitStatus.NORMAL_EXIT
