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

import signal
import threading

# 全局集合（线程安全）
_launched_content_shell_pids = set()
_launched_content_shell_lock = threading.Lock()

def register_content_shell_pid(pid: int):
    with _launched_content_shell_lock:
        _launched_content_shell_pids.add(pid)

def unregister_content_shell_pid(pid: int):
    with _launched_content_shell_lock:
        _launched_content_shell_pids.discard(pid)


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
    global proc  # final_status 不需要是 global 了
    proc = None

    def markMessageLine(message):
        ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
        return (ts + ": " + message + "\n").encode("utf-8")

    def cleanup_proc(p):
        if p is None:
            return

        # 1. 杀进程组
        try:
            if p.poll() is None:
                try:
                    os.killpg(p.pid, signal.SIGTERM)
                except ProcessLookupError:
                    pass
        except Exception:
            pass

        # 2. 等待
        try:
            p.wait(timeout=1.0)
        except subprocess.TimeoutExpired:
            try:
                try:
                    os.killpg(p.pid, signal.SIGKILL)
                except ProcessLookupError:
                    pass
                p.wait(timeout=1.0)
            except Exception:
                pass
        except Exception:
            pass

        # 3. 统一关闭所有流，防止父进程继续握着管道端
        for stream in ("stdout", "stderr", "stdin"):
            s = getattr(p, stream, None)
            if s is not None:
                try:
                    if hasattr(s, "closed"):
                        if not s.closed:
                            s.close()
                    else:
                        s.close()
                except Exception as e:
                    log(f"[cleanup_proc close {stream} fail: {e}]")

    html_path_abs = os.path.abspath(html_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(config.CS_TMP, str(os.getpid()))
    log_path = os.path.join(out_dir, "content_shell.log")

    try:
        cmd = [
            "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
            "--no-sandbox", "--headless=new", "--ozone-platform=headless",
            "--disable-gpu", "--disable-plugins", "--disable-extensions",
            "--disable-breakpad", "--disable-default-apps", "--disable-sync",
            "--disable-background-networking", "--disable-popup-blocking",
            "--no-default-browser-check", "--password-store=basic",
            "--disable-hang-monitor",
            # "--no-zygote",
            # "--remote-debugging-port=0",
            # "--run-all-compositor-stages-before-draw",
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
        # log("process ready to begin...")

        with open(log_path, "wb") as lf:
            proc = subprocess.Popen(
                cmd,
                stdout=lf,
                stderr=subprocess.STDOUT,
                env=env,
                start_new_session=True  # 让我们可以 killpg
            )

        register_content_shell_pid(proc.pid)

        begin_seen = False
        done_seen = False
        semantic_error_seen = False

        log_buf = ""   # 就是一条不断变长的字符串

        with open(log_path, "rb") as reader:
            while True:
                chunk = reader.read() 
                if chunk:
                    text = chunk.decode("utf-8", errors="replace")
                    log_buf += text

                    # 在累计的字符串里查
                    if not begin_seen and "FUZZ_BEGIN" in log_buf:
                        log(f"found fuzz begin, 启动耗时 [{format_s_to_ms(time.time() - t_start)}]...")
                        begin_seen = True

                    if "FUZZ_JS_ERROR" in log_buf or "FUZZ_UNHANDLED_REJECTION" in log_buf:
                        semantic_error_seen = True
                        break

                    if "FUZZ_DONE" in log_buf:
                        done_seen = True
                        break
                else:
                    # 这一瞬间读不到新内容
                    if proc.poll() is not None:
                        # 子进程已经退出了，而且这会儿也没新内容 -> 真结束
                        break
                    # 子进程还活着，只是还没写 -> 等一下再读
                    time.sleep(0.05)
                    continue
        

        # === 等待退出 or 判定超时 ===
        try:
            proc.wait(timeout=config.PROCESS_TIMEOUT)
            # log("wait done, ready to close...")
            # 等到了 -> 可以根据标志决定 result_status
            if semantic_error_seen:
                result_status = CSExitStatus.SEMANTIC_ERROR
            elif not begin_seen:
                result_status = CSExitStatus.OTHER
            elif done_seen:
                result_status = CSExitStatus.NORMAL_EXIT
            else:
                result_status = CSExitStatus.OTHER

        except subprocess.TimeoutExpired:
            # 超时：不直接 return，记录状态，让 finally 去杀
            log(f"# proc 读取stdout超时, 目前输出为 \n {out_message}")
            result_status = CSExitStatus.PROCESS_TIMEOUT

        # log("process_end")
        markMessageLine("process end...")

    finally:
        cleanup_proc(proc)

        if proc is not None:
            unregister_content_shell_pid(proc.pid)

    return result_status


def run_one_case(case_path: str):
    def sync_stat():
        Stats.update(
            timeout=stat_timeout,
            pending=stat_pending_cnt,
            is_new=stat_new_cnt,
            completed=stat_completed_cnt,
            attachments=stat_attachments_cnt,
            mark_interesting=stat_mark_interesting,
            stat_lack_bin=stat_lack_bin,
            stat_other_error=stat_other_error,
            stat_semantic_error=stat_semantic_error,
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
    stat_semantic_error = 0
    stat_other_error = 0
    stat_lack_bin = 0

    # 删除浏览器运行临时数据，处理覆盖率
    # shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)

    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        # log("lack bin")
        cs_exit_status = CSExitStatus.LACK_BIN

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap_to_update.update_from_file(cov_file)
        os.remove(cov_file)
    global_bitmap_to_update.close()

    # report检测到的bug
    if stat_pending_cnt > 0 or stat_new_cnt > 0 or stat_completed_cnt > 0 or stat_attachments_cnt > 0:
        shutil.move(out_dir, config.CRASH_ROOT)
        sync_stat()
        return

    # 语义错误 回来受罚
    if cs_exit_status is CSExitStatus.SEMANTIC_ERROR:
        snapshot = Stats.get()
        stat_semantic_error = snapshot["stat_semantic_error"]
        stat_semantic_error = 1
        sync_stat()
        # 当前语义错误太多，只要100就够了
        if stat_semantic_error < 100:
            shutil.move(out_dir, config.SEMANTIC_ROOT)
        else:
            shutil.rmtree(out_dir)
        return

    # 不明愿意 回来研究
    if cs_exit_status is CSExitStatus.OTHER:
        shutil.move(out_dir, config.OTHER_ROOT)
        stat_other_error = 1
        sync_stat()
        return

    # 进程超时 闻所未闻
    if cs_exit_status is CSExitStatus.PROCESS_TIMEOUT:
        stat_timeout = 1
        shutil.move(out_dir, config.TIMEOUT_ROOT)
        sync_stat()
        return
    
    # 没有bin文件 
    if cs_exit_status is CSExitStatus.LACK_BIN:
        shutil.move(out_dir, config.NOBIN_ROOT)
        stat_lack_bin = 1
        sync_stat()
        return

    # 最后开始处理正常场景, 记住生成出来的case默认就是放在corpus里的，没有新边就删了
    if new_edges > 0:
        stat_mark_interesting = True
    else:
        # 可能被上面的场景给移走了
        shutil.rmtree(out_dir, ignore_errors=True)
    sync_stat()



