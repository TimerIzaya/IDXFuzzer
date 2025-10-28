import glob
from pathlib import Path
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
from tool.log import log, format_s_to_ms
from tool.tool import count_files_in_dir


class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()      # 正常退出
    PROCESS_TIMEOUT = auto()            # 程序崩溃（如 SegFault）
    SEMANTIC_ERROR = auto()   # 语义错误（如 JS 逻辑错误、UnhandledRejection）
    LACK_BIN = auto # 没有覆盖率文件
    OTHER = auto()

    def __str__(self):
        return self.name


def run_content_shell(html_path: str) -> CSExitStatus:

    def markMessageLine(message):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
        return (ts + ": " + message + "\n").encode("utf-8")

    def saveLog():
        with open(log_path, "wb") as logw:
            logw.writelines([line.encode("utf-8") for line in out_message])

    def cleanup_proc(proc, tag: str):
        # 把整个 content_shell 进程组干掉，防止残留 renderer / storage 之类
        if proc is not None:
            # 先试TERM整组
            try:
                if proc.poll() is None:
                    os.killpg(proc.pid, signal.SIGTERM)
            except ProcessLookupError:
                pass

            # 尝试等一下，确保子进程真的退了
            try:
                proc.wait(timeout=1.0)
            except subprocess.TimeoutExpired:
                # 还不死就KILL整组
                try:
                    os.killpg(proc.pid, signal.SIGKILL)
                except ProcessLookupError:
                    pass
                try:
                    proc.wait(timeout=1.0)
                except Exception:
                    pass

            # 关 stdout，防 fd 泄漏
            try:
                if proc.stdout and not proc.stdout.closed:
                    proc.stdout.close()
            except Exception as e:
                log(f"[cleanup_proc {tag}] close stdout fail: {e}")


    html_path_abs = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    log_path = os.path.join(out_dir, "content_shell.log")
    out_message = []


    cmd = [
        "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
        "--no-sandbox", "--headless=new", "--ozone-platform=headless",
        "--disable-gpu", "--disable-plugins", "--disable-extensions",
        "--disable-breakpad", "--disable-default-apps", "--disable-sync",
        "--disable-background-networking", "--disable-popup-blocking",
        "--no-default-browser-check", "--password-store=basic",
        "--use-mock-keychain", "--disable-hang-monitor",
        "--no-zygote",
        "--remote-debugging-port=0",
        "--run-all-compositor-stages-before-draw",
        f"--user-data-dir={tmp_dir}",
        "--enable-crash-reporter",
        "--enable-logging=stderr",  # 把 console/error 打到 stderr
        f"--crash-dumps-dir={out_dir}",
        f"file://{html_path_abs}",
    ]

    env = os.environ.copy()
    env["SANCOV_OUTPUT_DIR"] = out_dir

    markMessageLine("process begin...")
    t_start = time.time()
    log("process ready to begin...")
    proc = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        env=env, start_new_session=True
    )

    begin_seen = False
    done_seen = False
    semantic_error_seen = False

    while True:
        line = proc.stdout.readline()      # 一次读一行，没数据时阻塞
        if not line:                       # EOF -> 子进程退出
            break                                                                                                                                                                           

        decoded = line.decode("utf-8", errors="replace")
        out_message.append(decoded)

        # 匹配 FUZZ 标志
        if b"FUZZ_BEGIN" in line:
            log(f"found fuzz begin, 启动耗时 [{format_s_to_ms(time.time() - t_start)}]...")
            begin_seen = True
        elif b"FUZZ_DONE" in line:
            done_seen = True
            log("found fuzz done, break...")
            break
        elif b"FUZZ_JS_ERROR" in line or b"FUZZ_UNHANDLED_REJECTION" in line:
            semantic_error_seen = True
            break

    try:
        proc.wait(timeout=config.PROCESS_TIMEOUT)
        log("wait done, ready to close...")
    except subprocess.TimeoutExpired:
        log(f"# proc 读取stdout超时，目前输出为 \n {out_message}")
        # 我们不改业务语义：这还是超时
        final_status = CSExitStatus.PROCESS_TIMEOUT
        # 收尸，防止残留进程 & fd 泄漏
        cleanup_proc(proc, final_status.name)
        return final_status


    proc.stdout.close()

    log("process_end")
    markMessageLine("process end...")
    saveLog()

    if semantic_error_seen:
        final_status = CSExitStatus.SEMANTIC_ERROR
    elif not begin_seen:
        final_status = CSExitStatus.OTHER
    elif done_seen:
        final_status = CSExitStatus.NORMAL_EXIT
    else:
        final_status = CSExitStatus.OTHER

    # 统一在这里做清理，防止 Chrome 残留和 fd 泄漏
    cleanup_proc(proc, final_status.name)

    return final_status


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
        log("lack bin")
        cs_exit_status = CSExitStatus.LACK_BIN

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
    
    # 没有bin文件 
    if cs_exit_status is CSExitStatus.LACK_BIN:
        shutil.move(out_dir, config.NOBIN_ROOT)

    # 最后开始处理正常场景, 记住生成出来的case默认就是放在corpus里的，没有新边就删了
    if new_edges > 0:
        stat_mark_interesting = True
    else:
        # 可能被上面的场景给移走了
        shutil.rmtree(out_dir, ignore_errors=True)

    sync_stat()



