import glob
import shutil
from enum import Enum, auto
import os
import signal
import subprocess
import time
from datetime import datetime

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from tool.tool import count_files_in_dir


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
    def cleanup_kill(status: CSExitStatus, note: str):
        # 先尝试温和退出，再强杀，最后务必 wait() 回收，避免僵尸
        try:
            os.killpg(proc.pid, signal.SIGTERM)
        except Exception:
            pass
        try:
            proc.wait(timeout=1.5)
        except Exception:
            try:
                os.killpg(proc.pid, signal.SIGKILL)
            except Exception:
                pass
            try:
                proc.wait(timeout=1.5)
            except Exception:
                pass
        recordTimeInLog(note)
        logw.close()
        return status

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
        if time.time() - t0 > config.TIMEOUT:
            break
        # 每间隔0.1s读一次全部文件
        time.sleep(0.1)
        try:
            with open(log_path, "rb") as r:
                content = r.read()
                if b"FUZZ_BEGIN" in content:
                    begin_seen = True
                if b"FUZZ_DONE" in content:
                    done_seen = True
                if (b"FUZZ_JS_ERROR" in content) or (b"FUZZ_UNHANDLED_REJECTION" in content):
                    semantic_error_seen = True
        except FileNotFoundError:
            recordTimeInLog("content shell log FileNotFoundError")
            pass


    if semantic_error_seen:
        return cleanup_kill(CSExitStatus.SEMANTIC_ERROR, "semantic error in js, exit..")

    if not begin_seen:
        return cleanup_kill(CSExitStatus.OTHER, "where begin??")

    if done_seen:
        return cleanup_kill(CSExitStatus.NORMAL_EXIT, "found done, bye")

    return CSExitStatus.OTHER


def run_one_case(case_path: str):
    def sync_stat():
        Stats.update(
            timeout=stat_timeout,
            pending=stat_pending_cnt,
            is_new=stat_new_cnt,
            completed=stat_completed_cnt,
            attachments=stat_attachments_cnt,
            mark_interesting=stat_mark_interesting,
        )
    global_bitmap_to_update = GlobalEdgeBitmap(create=False)


    html_path_abs = os.path.abspath(case_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 执行content_shell
    cs_exit_status = run_content_shell(html_path_abs)

    # 执行完去更新chromium自己的crash状态
    stat_pending_cnt = count_files_in_dir(os.path.join(out_dir, "pending"))
    stat_new_cnt = count_files_in_dir(os.path.join(out_dir, "new"))
    stat_completed_cnt = count_files_in_dir(os.path.join(out_dir, "completed"))
    stat_attachments_cnt = count_files_in_dir(os.path.join(out_dir, "attachments"))
    stat_timeout = 0
    stat_mark_interesting = False

    # 删除浏览器运行临时数据，处理覆盖率
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)

    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        cs_exit_status = CSExitStatus.OTHER

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap_to_update.update_from_file(cov_file)
        os.remove(cov_file)

    global_bitmap_to_update.close()

    # report检测到的bug
    if stat_pending_cnt > 0 or stat_new_cnt > 0 or stat_completed_cnt > 0 or stat_attachments_cnt > 0:
        shutil.move(out_dir, config.CRASH_ROOT)

    # 语义错误 回来受罚
    if cs_exit_status is CSExitStatus.SEMANTIC_ERROR:
        shutil.move(out_dir, config.SEMANTIC_ROOT)

    # 不明愿意 回来研究
    if cs_exit_status is CSExitStatus.OTHER:
        shutil.move(out_dir, config.OTHER_ROOT)

    # 进程超时 闻所未闻
    if cs_exit_status is CSExitStatus.PROCESS_TIMEOUT:
        stat_timeout = 1
        shutil.move(out_dir, config.TIMEOUT_ROOT)

    # 最后开始处理正常场景, 记住生成出来的case默认就是放在corpus里的，没有新边就删了
    if new_edges > 0:
        stat_mark_interesting = True
    else:
        # 可能被上面的场景给移走了
        shutil.rmtree(out_dir, ignore_errors=True)

    sync_stat()



