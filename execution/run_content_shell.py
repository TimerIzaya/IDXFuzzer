import os
import signal
import subprocess
import time
from multiprocessing import Value

import config
from tool.tool import count_files_in_dir

def update_counter(counter: Value, delta: int = 1, reset: bool = False, value: int = 0):
    with counter.get_lock():
        if reset:
            counter.value = value
        else:
            counter.value += delta


# ---------- 共享计数器（worker 可见） ----------
_shared_total_edges = None
_shared_timeout_cnt = None
_shared_total_exec_cnt = None
_shared_last_interesting_exec = None
_shared_pending_cnt = None
_shared_new_cnt = None
_shared_completed_cnt = None
_shared_attachments_cnt = None


def init_worker(edge_counter: Value, timeout_counter: Value,
                exec_counter: Value, last_interesting_counter: Value,
                pending_counter: Value, new_counter: Value,
                completed_counter: Value, attachment_counter: Value) -> None:
    global _shared_total_edges, _shared_timeout_cnt, _shared_total_exec_cnt, _shared_last_interesting_exec
    global _shared_pending_cnt, _shared_new_cnt, _shared_completed_cnt, _shared_attachments_cnt
    _shared_total_edges = edge_counter
    _shared_timeout_cnt = timeout_counter
    _shared_total_exec_cnt = exec_counter
    _shared_last_interesting_exec = last_interesting_counter
    _shared_pending_cnt = pending_counter
    _shared_new_cnt = new_counter
    _shared_completed_cnt = completed_counter
    _shared_attachments_cnt = attachment_counter


def updateCrashCnt(html_out_dir: str):
    pending_cnt = count_files_in_dir(os.path.join(html_out_dir, "pending"))
    new_cnt = count_files_in_dir(os.path.join(html_out_dir, "new"))
    completed_cnt = count_files_in_dir(os.path.join(html_out_dir, "completed"))
    attachments_cnt = count_files_in_dir(os.path.join(html_out_dir, "attachments"))
    if pending_cnt > 0:       update_counter(_shared_pending_cnt)
    if new_cnt > 0:           update_counter(_shared_new_cnt)
    if completed_cnt > 0:     update_counter(_shared_completed_cnt)
    if attachments_cnt > 0:   update_counter(_shared_attachments_cnt)
    return pending_cnt + new_cnt + completed_cnt + attachments_cnt


def run_content_shell(html_path: str):

    html_path_abs = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path_abs)
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")
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
    proc = subprocess.Popen(
        cmd, stdout=logw, stderr=logw,
        env=env, start_new_session=True
    )

    # 语义窗口：从看到 BEGIN 开始计 TIMEOUT(+裕量)
    sem_margin_s = getattr(config, "SEM_MARGIN_MS", 200) / 1000.0
    hard_timeout_s = getattr(config, "PROCESS_TIMEOUT", 30)

    pos = 0
    begin_seen = False
    done_seen = False
    begin_deadline = time.monotonic() + 10.0  # 最多等 10s 看到 BEGIN
    t0 = time.monotonic()

    while True:
        # 增量读取日志（tail 文件，不阻塞）
        try:
            with open(log_path, "rb") as r:
                r.seek(pos)
                chunk = r.read()
                if chunk:
                    pos += len(chunk)
                    if not begin_seen and b"FUZZ_BEGIN:" in chunk:
                        begin_seen = True
                        sem_deadline = time.monotonic() + (getattr(config, "TIMEOUT", 500) / 1000.0) + sem_margin_s
                    if b"FUZZ_DONE:" in chunk:
                        done_seen = True
                        break
        except FileNotFoundError:
            pass

        # 进程已退出但没看到 DONE → 异常/崩溃
        if proc.poll() is not None and not done_seen:
            time.sleep(0.2)  # 等 crash 标记落盘
            logw.close()
            return -2, updateCrashCnt()

        # BEGIN 太久没出现 → 页面没跑起来，当异常
        if not begin_seen and time.monotonic() > begin_deadline:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            logw.close()
            return -2, updateCrashCnt()

        # BEGIN 出现但超过语义窗口仍未 DONE → 语义超时
        if begin_seen and time.monotonic() > sem_deadline:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            with open(os.path.join(out_dir, "metrics.txt"), "a", encoding="utf-8") as mf:
                mf.write(f"SEM_TIMEOUT({getattr(config, 'TIMEOUT', 500)}ms) after {time.monotonic() - t0:.3f}s\n")
            logw.close()
            return -1, 0

        # 硬兜底，防僵尸
        if time.monotonic() - t0 > hard_timeout_s:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            logw.close()
            return -1, 0

        time.sleep(0.01)

    # 看到了 DONE：尽量优雅退出
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        try:
            os.killpg(proc.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
    logw.close()