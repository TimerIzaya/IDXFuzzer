from curses.ascii import ctrl
import glob
import io
import json
import os
import shutil
import subprocess
import time
import traceback
from enum import Enum, auto

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from tool.log import log
from tool.tool import count_files_in_dir
from execution.cs_devtools import (
    _msleep,
    _wait_for_devtools,
    _open_new_page,
    _close_page, safe_copytree,
)
from execution.cs_sancov import (
    _kill_process_tree,
    _dump_cov_via_sigusr1,
    wait_min_bins,
)

DEFAULT_CS = "/timer/chromium/src/out/IndexedDBSanCov/content_shell"
DEFAULT_WAIT_MS = 300
DEFAULT_PORT_BASE = 9300


class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()
    PROCESS_TIMEOUT = auto()
    SEMANTIC_ERROR = auto()
    LACK_BIN = auto()
    OTHER = auto()

    def __str__(self) -> str:
        return self.name


class CSController:
    """
    单个 worker 对应的 content_shell 控制器。

    负责：
      - 启动 / 重启 / 关闭 content_shell
      - 通过 DevTools 打开页面、触发执行
      - 通过 SIGUSR1 导出覆盖率
      - 整理 crash / corpus / 其他分类输出
      - 维护健康状态文件 (health.json)，供 stat_worker 使用
    """

    def __init__(self, worker_idx: int, cpu_id: int):
        # 路径布局
        self.base = os.path.join(config.CS_TMP, str(os.getpid()))
        self.crash_dir = os.path.join(self.base, "crash")
        self.bin_dir = os.path.join(self.base, "crash/bin")
        self.profile_dir = os.path.join(self.base, "profile")
        self.logs_dir = os.path.join(self.base, "logs")
        self.batch_dir = os.path.join(self.base, "batch")

        for d in (self.bin_dir, self.crash_dir, self.profile_dir, self.logs_dir, self.batch_dir):
            os.makedirs(d, exist_ok=True)

        # 端口 / 等待时间 / content_shell 路径
        self.port = getattr(config, "PORT_BASE", DEFAULT_PORT_BASE) + worker_idx
        self.wait_ms = getattr(config, "WAIT_MS", DEFAULT_WAIT_MS)
        self.cs_path = getattr(config, "CONTENT_SHELL", DEFAULT_CS)
        self.cpu_id = cpu_id

        # 进程信息
        self.proc: subprocess.Popen | None = None
        self.pid: int | None = None
        self.pgid: int | None = None
        self.log_path = os.path.join(self.logs_dir, "content_shell.log")

        # 环境变量：SanCov / ASan
        self.env = os.environ.copy()
        self.env["SANCOV_OUTPUT_DIR"] = os.path.realpath(self.bin_dir)
        self.env["SANCOV_CLEAR"] = "1"
        self.env["ASAN_OPTIONS"] = "allow_user_segv_handler=1:fast_unwind_on_fatal=0"

        # 日志增量读取 offset
        self._log_offset = 0

        # 实例健康状态文件
        self.health_file = os.path.join(self.base, "health.json")
        self.last_ok_ts = 0.0
        self.last_error_ts = 0.0
        self.consecutive_failures = 0
        self.last_error_reason = ""
        self._flush_health(status="init")  # 启动时写一条初始状态
        
        # 尝试多次启动
        attempt = 5
        while True:
            try:
                self.launch()
                break  # 成功
            except Exception as e:
                attempt -= 1
                log(f"[!] launch failed, remaining {attempt} attempts: {e!r}")
                if attempt <= 0:
                    raise  # 让外层感知彻底失败
                time.sleep(2)


    def run_case_once(self, html_path: str, exec_no: int) -> None:
        """
        针对单个 HTML 用例完整跑一遍：
          - 打开页面、执行 JS
          - 触发 SanCov 导出
          - 读取并更新全局 bitmap
          - 根据 pending/new/completed/attachments/semantic_error 等情况归档
          - 更新统计信息与健康状态
        """

        def update_stat_thread() -> None:
            Stats.update(
                timeout=stat_timeout,
                pending=pending,
                is_new=new,
                completed=completed,
                attachments=attachments,
                mark_interesting=stat_mark_interesting,
                stat_lack_bin=stat_lack_bin,
                stat_other_error=stat_other_error,
                stat_semantic_error=stat_semantic_error,
            )

        def archive_case(dst_dir: str, wired: bool = False) -> None:
            if wired:
                config.LOCAL_PROCESS[self.pid] = {"status": "wired"}
            try:
                # 复制并清空 content_shell.log
                log_file = os.path.join(self.logs_dir, "content_shell.log")
                dst_file = os.path.join(dst_dir, "content_shell.log")
                os.makedirs(os.path.dirname(dst_file), exist_ok=True)
                open(dst_file, "ab").close()
                with open(log_file, "rb+") as src, open(dst_file, "wb") as dst:
                    shutil.copyfileobj(src, dst, length=1024 * 1024)
                    src.seek(0)
                    src.truncate(0)

                # 移动 IR 和 HTML
                shutil.move(ir_path, dst_dir)
                shutil.move(html_path, dst_dir)

                # 移动 bin 信息
                bin_folder = os.path.join(dst_dir, "bins")
                os.makedirs(bin_folder, exist_ok=True)
                for bf in glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin")):
                    shutil.move(bf, bin_folder)

                # 异常发生 保留完整batch
                if wired:
                    shutil.move(self.batch_dir, dst_dir)

            except Exception as e:
                log(f"[!] archiveCase failed: {e}")

        # 除了profile全给清理了
        def clear_case() -> None:
            try:
                # 清空 log
                log_file = os.path.join(self.logs_dir, "content_shell.log")
                with open(log_file, "rb+") as src:
                    src.seek(0)
                    src.truncate(0)
                # 删除 IR  HTML bins
                os.remove(ir_path)
                os.remove(html_path)
                shutil.rmtree(self.bin_dir)
                os.makedirs(self.bin_dir, exist_ok=True)
            except Exception as e:
                log(f"[!] clearCase failed: {e}")


        # 执行之前 把html复制一份到batch 带上编号用于复现
        shutil.copyfile(html_path, os.path.join(self.batch_dir, f"{exec_no}_{os.path.basename(html_path)}"))

        # 开始扔html给cs
        tab_id: str | None = None
        case_id = -1
        ir_path = os.path.join(self.base, os.path.basename(html_path)[:-5] + ".json")
        try:
            html_path_abs = os.path.realpath(html_path)
            case_dir = os.path.dirname(html_path_abs)
            case_id = os.path.basename(html_path_abs)[:-5]
            crash_dir = self.crash_dir
            tmp_dir = os.path.join(case_dir, "chrome-tmp")
            os.makedirs(tmp_dir, exist_ok=True)

            # 打开新 tab
            tab_id = _open_new_page(self.port, html_path_abs)
            if not tab_id:
                # 这里检查一下 CS 是不是已经死了
                if not self._is_cs_alive():
                    self._log_cs_exit_reason()
                    log(f"[!] open_new_page failed and CS seems dead on port={self.port}, restarting")
                    try:
                        self.restart_cs()
                    except Exception as e:
                        log(f"[!] restart_cs failed after open_new_page error: {e!r}")
                else:
                    log(f"[!] open_new_page failed but CS still alive, treat as transient error")

                # 这个 case 也要归档，防止是真的 big crash
                archive_case(os.path.join(config.CRASH_ROOT, case_id), wired=True)
                return

            _msleep(self.wait_ms)

            # 触发 SanCov 导出
            _dump_cov_via_sigusr1(self.port)

            ok = wait_min_bins(self.bin_dir, timeout_s=10.0)
            if ok:
                # 只要有任何一个 bin 就算有覆盖率；再等一小会儿让 bin 落地
                _msleep(50)
                bins = glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin"))
            else:
                bins = []

            # 检查 log 增量，判断是否出现语义错误
            log_chunk = self._read_log_increment()
            semantic_error_seen = (
                    "FUZZ_JS_ERROR" in log_chunk
                    or "FUZZ_UNHANDLED_REJECTION" in log_chunk
            )

            # 统计 crash 相关目录
            pending = count_files_in_dir(os.path.join(crash_dir, "pending"))
            new = count_files_in_dir(os.path.join(crash_dir, "new"))
            completed = count_files_in_dir(os.path.join(crash_dir, "completed"))
            attachments = count_files_in_dir(os.path.join(crash_dir, "attachments"))

            # 更新全局 bitmap
            new_edges = 0
            global_bitmap = GlobalEdgeBitmap(create=False)
            for b in bins:
                try:
                    new_edges += global_bitmap.update_from_file(b)
                except Exception as e:
                    log(f"[!] update_from_file failed for {b}: {e}")
                finally:
                    if os.path.exists(b):
                        os.remove(b)

            # 填充统计字段
            stat_timeout = 0
            stat_mark_interesting = new_edges > 0
            stat_semantic_error = semantic_error_seen
            stat_other_error = 0
            stat_lack_bin = len(bins) == 0
            stat_process_timeout = 0

            if pending > 0 or new > 0 or completed > 0 or attachments > 0:
                archive_case(os.path.join(config.CRASH_ROOT, case_id), wired=True)
            elif stat_semantic_error:
                # 留100个语义错误case拿来后期研究
                snap = Stats.get()
                if snap.get("stat_semantic_error", 0) < 100:
                    archive_case(os.path.join(config.SEMANTIC_ROOT, case_id))
                else:
                    clear_case()
            elif stat_other_error:
                archive_case(os.path.join(config.OTHER_ROOT, case_id), wired=True)
            elif stat_process_timeout:
                archive_case(os.path.join(config.TIMEOUT_ROOT, case_id), wired=True)
            elif stat_lack_bin:
                # 理论上不该出现：没有 crash 却完全没有 bin
                archive_case(os.path.join(config.NOBIN_ROOT, case_id), wired=True)
            elif new_edges > 0:
                archive_case(os.path.join(config.CORPUS_ROOT, case_id))
            else:
                # 无事发生，清理环境，准备下次执行
                clear_case()

            update_stat_thread()
            self._mark_success()

        except Exception as e:
            err = "[!] run_case_once exception".join(traceback.format_exception(e))
            log(err)
            archive_case(os.path.join(config.OTHER_ROOT, case_id), wired=True)
            self._mark_error(f"Error: {err}")
        finally:
            if tab_id:
                _close_page(self.port, tab_id)

    # ------------------------------------------------------------------ #
    # 健康状态管理
    # ------------------------------------------------------------------ #

    def _flush_health(self, status: str) -> None:
        """把当前健康状态刷到一个 json 文件里，给 stat_worker 读取。"""
        data = {
            "pid": os.getpid(),
            "port": self.port,
            "status": status,  # "healthy" / "warning" / "dead" / "init"
            "last_ok_ts": self.last_ok_ts,
            "last_error_ts": self.last_error_ts,
            "consecutive_failures": self.consecutive_failures,
            "last_error_reason": self.last_error_reason,
        }
        try:
            with open(self.health_file, "w", encoding="utf-8") as f:
                json.dump(data, f)
        except Exception as e:
            # 不要让这种错误影响 fuzz 主流程
            log(f"[health] warn: failed to write {self.health_file}: {e}")

    def _mark_success(self) -> None:
        """一次成功执行后的健康状态更新。"""
        self.last_ok_ts = time.time()
        self.consecutive_failures = 0
        self.last_error_reason = ""
        self._flush_health(status="healthy")

    def _mark_error(self, reason: str) -> None:
        """一次失败执行后的健康状态更新。"""
        self.last_error_ts = time.time()
        self.consecutive_failures += 1
        self.last_error_reason = reason
        status = "warning" if self.consecutive_failures < 3 else "dead"
        self._flush_health(status=status)

    # ------------------------------------------------------------------ #
    # 进程 / 日志诊断
    # ------------------------------------------------------------------ #

    def _is_cs_alive(self) -> bool:
        """检查当前 content_shell 是否仍然存活。"""
        if self.proc is None or self.pid is None:
            return False

        rc = self.proc.poll()
        if rc is not None:
            return False

        try:
            os.kill(self.pid, 0)
            return True
        except ProcessLookupError:
            return False
        except Exception as e:
            log(f"[CS] _is_cs_alive kill(0) probe error: {e!r}")
            return True  # 保守认为活着

    def _dump_log_tail(self, max_bytes: int = 32 * 1024, max_lines: int = 1000) -> None:
        """打印 content_shell.log 文件的尾部，方便诊断。"""
        try:
            if not os.path.isfile(self.log_path):
                log(f"[CS] log 文件不存在: {self.log_path}")
                return
            with open(self.log_path, "rb") as f:
                f.seek(0, io.SEEK_END)
                size = f.tell()
                back = min(max_bytes, size)
                f.seek(size - back, io.SEEK_SET)
                tail = f.read().decode("utf-8", "replace")

            log("[CS] ---- content_shell.log tail (last ~100 lines) ----")
            for line in tail.splitlines()[-max_lines:]:
                log("[CS] " + line)
            log("[CS] -------- end of content_shell.log tail ---------")
        except Exception as e:
            log(f"[CS] dump content_shell.log tail 失败: {e!r}")

    def _log_cs_exit_reason(self) -> None:
        """在怀疑 CS 死了/异常时，把能拿到的信息都打到日志里。"""
        log("[CS] ===== content_shell 状态诊断开始 =====")
        log(f"[CS] port={self.port} pid={self.pid} pgid={self.pgid}")

        # 1) Popen 状态
        if self.proc is None:
            log("[CS] proc 对象为 None（可能尚未 launch 或已被 stop() 清理）")
        else:
            rc = self.proc.poll()
            if rc is None:
                log("[CS] proc.poll(): 进程仍在运行（returncode=None）")
            else:
                log(f"[CS] proc.poll(): 进程已退出，returncode={rc}")

        # 2) /proc/<pid>/status & cmdline
        if self.pid is not None:
            status_path = f"/proc/{int(self.pid)}/status"
            try:
                with open(status_path, "r") as f:
                    lines = f.readlines()
                keys = (
                    "Name:", "State:", "Tgid:", "Pid:", "PPid:",
                    "Threads:", "SigCgt:", "SigPnd:", "SigBlk:", "SigIgn:", "SigQ:"
                )
                for key in keys:
                    for line in lines:
                        if line.startswith(key):
                            log(f"[CS] {line.rstrip()}")
                            break
            except FileNotFoundError:
                log(f"[CS] /proc/{self.pid}/status 不存在，说明进程已经完全消失")
            except Exception as e:
                log(f"[CS] 读取 {status_path} 失败: {e!r}")

            try:
                with open(f"/proc/{int(self.pid)}/cmdline", "rb") as f:
                    cmd = f.read().replace(b"\x00", b" ").decode("utf-8", "replace")
                log(f"[CS] cmdline = {cmd}")
            except FileNotFoundError:
                log(f"[CS] /proc/{self.pid}/cmdline 不存在")
            except Exception as e:
                log(f"[CS] 读取 cmdline 失败: {e!r}")

        # 3) content_shell.log 尾部
        self._dump_log_tail()

        # 4) crash 目录
        try:
            if os.path.isdir(self.crash_dir):
                files = sorted(os.listdir(self.crash_dir))
                log(f"[CS] crash_dir={self.crash_dir}, files={files}")
            else:
                log(f"[CS] crash_dir 不存在: {self.crash_dir}")
        except Exception as e:
            log(f"[CS] 列出 crash_dir 失败: {e!r}")

        log("[CS] ===== content_shell 状态诊断结束 =====")

    def _read_log_increment(self) -> str:
        """从上次偏移开始读取 content_shell.log 新增内容，返回增量文本，并推进偏移。"""
        if not os.path.isfile(self.log_path):
            return ""
        with open(self.log_path, "rb") as f:
            f.seek(self._log_offset, io.SEEK_SET)
            data = f.read()
            self._log_offset = f.tell()
        try:
            return data.decode("utf-8", errors="replace")
        except Exception:
            return ""

    # ------------------------------------------------------------------ #
    # content_shell 启停
    # ------------------------------------------------------------------ #

    def launch(self) -> bool:
        args = [
            self.cs_path,
            "--no-sandbox",
            "--headless=new", "--ozone-platform=headless",
            "--no-first-run", "--test-type", "--no-proxy-server",
            "--disable-gpu", "--use-gl=disabled", "--disable-vulkan",
            "--disable-gpu-compositing", "--disable-accelerated-2d-canvas",
            "--disable-gpu-rasterization", "--disable-software-rasterizer",
            "--renderer-process-limit=1",
            "--disable-site-isolation-trials",
            "--in-process-gpu",
            "--disable-features=VizDisplayCompositor,UseSkiaRenderer,CanvasOopRasterization,"
            "AcceleratedVideoDecode,VaapiVideoDecoder,VaapiVideoEncoder,UseSkiaRendererForGL",
            f"--remote-debugging-port={self.port}",
            f"--remote-allow-origins=http://127.0.0.1:{self.port}",
            "--enable-logging=stderr",
            "--enable-crash-reporter",
            f"--crash-dumps-dir={self.crash_dir}",
            f"--user-data-dir={self.profile_dir}",
            "about:blank",
        ]

        log(f"[*] Launch content_shell on :{self.port} ...")
        with open(self.log_path, "wb") as logf:
            self.proc = subprocess.Popen(
                args,
                stdout=logf,
                stderr=subprocess.STDOUT,
                env=self.env,
                start_new_session=True,
            )
        self.pid = self.proc.pid
        self.pgid = os.getpgid(self.pid)
        log(f"[*] Launched content_shell pid={self.pid} pgid={self.pgid} port={self.port}")

        # DevTools 最多等 30 秒，实例多的时候稍微慢点正常
        if not _wait_for_devtools(self.port, timeout_s=30.0):
            # 这里务必清理半启动进程
            try:
                log(f"[!] DevTools not ready on :{self.port}, killing half-started CS")
                if self.proc and self.proc.poll() is None:
                    _kill_process_tree(self.proc.pid)
            except Exception as e:
                log(f"[!] failed to kill half-started CS: {e!r}")
            finally:
                self.proc = None
                self.pid = None
                self.pgid = None
            raise RuntimeError(f"DevTools not ready on :{self.port}, see {self.log_path}")

    def stop(self) -> None:
        """优雅关闭当前 controller 绑定的 content_shell 进程。"""
        if self.proc and self.proc.poll() is None:
            log(f"[*] Kill content_shell pid={self.pid}")
            _kill_process_tree(self.proc.pid)
        self.proc = None
        self.pid = None
        self.pgid = None

        # 删除整个basefolder
        shutil.rmtree(self.base)

    def restart_cs(self) -> None:
        """重启当前 controller 绑定的 content_shell 进程。"""
        log(f"[*] Restart content_shell on :{self.port}")

        attempts = 3
        while True:
            try:
                try:
                    self.stop()
                except Exception as e:
                    log(f"[!] CSController.stop() failed during restart: {e!r}")
                self.launch()
                break
            except Exception as e:
                attempts -= 1
                log(f"[!] restart launch failed on :{self.port}, remaining {attempts} attempts: {e!r}")
                if attempts <= 0:
                    raise
                time.sleep(2)
