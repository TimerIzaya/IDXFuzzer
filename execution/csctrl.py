
# ---------------- 每个 worker 独享的 content_shell 控制器 ----------------
# --- 在 run_inss.py 顶部 imports 里需要多的依赖 ---
from cmath import log
from enum import Enum, auto
import io
import os
import shutil
from signal import signal
from time import time

import urllib
import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from tool.tool import count_files_in_dir

DEFAULT_CS = "/timer/chromium/src/out/IndexedDBSanCov/content_shell"
DEFAULT_WAIT_MS = 300
DEFAULT_PORT_BASE = 9300

class CSController:
    def __init__(self, worker_idx: int, cpu_id: int):
        # 目录
        ts = time.strftime("%Y%m%d_%H%M%S")
        # self.base = os.path.join("test", "env", f"{ts}_w{worker_idx}")
        # self.bin_dir = os.path.join(self.base, "bin")
        # self.crash_dir = os.path.join(self.base, "crash")
        # self.profile_dir = os.path.join(self.base, "profile", "ud_1")
        # self.logs_dir = os.path.join(self.base, "logs")
        for d in (self.bin_dir, self.crash_dir, self.profile_dir, self.logs_dir):
            os.makedirs(d, exist_ok=True)

        # 配置
        self.port = getattr(config, "PORT_BASE", DEFAULT_PORT_BASE) + worker_idx
        self.wait_ms = getattr(config, "WAIT_MS", DEFAULT_WAIT_MS)
        self.cs_path = getattr(config, "CONTENT_SHELL", DEFAULT_CS)
        self.cpu_id = cpu_id

        # 进程与日志
        self.proc = None
        self.pid = None
        self.log_path = os.path.join(self.logs_dir, "content_shell.log")

        # sancov/asan 环境
        self.env = os.environ.copy()
        self.env["SANCOV_OUTPUT_DIR"] = os.path.realpath(self.bin_dir)
        self.env["SANCOV_CLEAR"] = "1"
        self.env["ASAN_OPTIONS"] = "allow_user_segv_handler=1:fast_unwind_on_fatal=0"

        # 日志增量偏移
        self._log_offset = 0

    def launch(self) -> None:
        if not os.path.isfile(self.cs_path):
            raise FileNotFoundError(f"content_shell not found: {self.cs_path}")

        args = [
            self.cs_path,
            "--no-sandbox",
            "--headless=new", "--ozone-platform=headless",
            "--no-first-run", "--test-type", "--no-proxy-server",
            "--disable-gpu", "--use-gl=disabled", "--disable-vulkan",
            "--disable-gpu-compositing", "--disable-accelerated-2d-canvas",
            "--disable-gpu-rasterization", "--disable-software-rasterizer",
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
            )
        self.pid = self.proc.pid

        # ✅ 等 DevTools 就绪（这里就用上 _wait_for_devtools）
        if not _wait_for_devtools(self.port, timeout_s=5.0):
            raise RuntimeError(f"DevTools not ready on :{self.port}, see {self.log_path}")

    def stop(self) -> None:
        # 新架构：正常情况下**不**主动清理 CS（让上层 stop_workers 统一回收）
        # 但如果你确实要在 worker 结束时关掉本 worker 的 CS，这里保留优雅退出：
        if self.proc and self.proc.poll() is None:
            log(f"[*] Kill content_shell pid={self.pid}")
            _kill_process_tree(self.proc.pid)
        self.proc = None
        self.pid = None
        log(f"[*] Logs: {self.log_path}")

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

    def _collect_bins_since(self, since_ts: float, dst_dir: str) -> list[str]:
        """把 bin_dir 里 mtime >= since_ts 的 sancov bin 移动到 dst_dir，返回目标路径列表。"""
        os.makedirs(dst_dir, exist_ok=True)
        moved = []
        for p in glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin")):
            try:
                st = os.stat(p)
            except FileNotFoundError:
                continue
            if st.st_mtime >= since_ts - 1e-3:   # 给一点浮动
                basename = os.path.basename(p)
                dst = os.path.join(dst_dir, basename)
                try:
                    os.replace(p, dst)  # 原子移动
                except Exception:
                    continue
                moved.append(dst)
        return moved

    def run_case_once(self, html_path: str) -> tuple["CSExitStatus", int]:
        """
        单轮: 开新页→等待→dump→收集产物→解析日志增量→更新全局位图与统计→落盘/搬迁。
        返回：(exit_status, new_edges)
        """
        # === 1) 准备 per-case 目录（与旧 run_one_case 对齐） ===
        html_path_abs = os.path.realpath(html_path)
        if not os.path.isfile(html_path_abs):
            log(f"[!] HTML not found: {html_path_abs}")
            return (CSExitStatus.OTHER, 0)

        case_dir = os.path.dirname(html_path_abs)          # 兼容你现有 generator 的输出目录结构
        tmp_dir  = os.path.join(case_dir, "chrome-tmp")
        os.makedirs(tmp_dir, exist_ok=True)

        # 标记“本轮起点”：时间戳 + 日志偏移
        t_round_begin = time.time()
        log_inc_before = self._log_offset  # 只是检查点；真正读取在后面

        # === 2) 开新页 ===
        if not _open_new_page(self.port, html_path_abs):
            log("[!] open_new_page failed")
            # 认定为 OTHER，保持与旧 run_one_case “没有 FUZZ_BEGIN” 近似
            return (CSExitStatus.OTHER, 0)

        log(f"[*] Opened: {html_path_abs}")
        _msleep(self.wait_ms)

        # === 3) 导出覆盖：对“主 pid”发 SIGUSR1（保持与 runtime.cc 清零语义一致）===
        if self.pid:
            try:
                os.kill(self.pid, signal.SIGUSR1)
            except Exception:
                pass

        # === 4) 等待本轮 bin 落盘，然后只搬“本轮新 bin”到 case_dir ===
        deadline = time.time() + 3.0
        moved_bins: list[str] = []
        while time.time() < deadline:
            moved_bins = self._collect_bins_since(t_round_begin, case_dir)
            if moved_bins:
                break
            _msleep(50)

        # === 5) 解析日志增量，做“语义错误”等判定（兼容你原有标记）===
        log_chunk = self._read_log_increment()
        begin_seen = ("FUZZ_BEGIN" in log_chunk)
        done_seen = ("FUZZ_DONE" in log_chunk)
        semantic_error_seen = ("FUZZ_JS_ERROR" in log_chunk) or ("FUZZ_UNHANDLED_REJECTION" in log_chunk)

        # === 6) 统计 Chromium-side 产物（你原来的四类）===
        pending = count_files_in_dir(os.path.join(case_dir, "pending"))
        new     = count_files_in_dir(os.path.join(case_dir, "new"))
        completed   = count_files_in_dir(os.path.join(case_dir, "completed"))
        attachments = count_files_in_dir(os.path.join(case_dir, "attachments"))

        # === 7) 处理覆盖率：更新全局位图 & 删除 bin ===
        new_edges = 0
        global_bitmap = GlobalEdgeBitmap(create=False)
        try:
            for bf in moved_bins:
                try:
                    new_edges += global_bitmap.update_from_file(bf)
                finally:
                    try:
                        os.remove(bf)
                    except Exception:
                        pass
        finally:
            global_bitmap.close()

        # === 8) 基于“日志增量 + 产物 + 覆盖”综合判定 CSExitStatus ===
        status = CSExitStatus.OTHER
        if semantic_error_seen:
            status = CSExitStatus.SEMANTIC_ERROR
        else:
            if moved_bins:            # 有 bin -> 认为执行正常（或至少 runtime 正常）
                status = CSExitStatus.NORMAL_EXIT if done_seen or begin_seen else CSExitStatus.OTHER
            else:
                status = CSExitStatus.LACK_BIN

        # === 9) 汇总到 Stats 并做“目录迁移/删除” ===
        # 注：为保持与原逻辑一致，先更新 Stats，再搬运/删除
        stat_timeout = 0
        stat_mark_interesting = (new_edges > 0)
        stat_semantic_error = 1 if status is CSExitStatus.SEMANTIC_ERROR else 0
        stat_other_error = 1 if status is CSExitStatus.OTHER else 0
        stat_lack_bin = 1 if status is CSExitStatus.LACK_BIN else 0

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

        # 目录搬运策略基本复刻你原版：
        if pending > 0 or new > 0 or completed > 0 or attachments > 0:
            # 认为命中过“crash 相关四类”之一
            shutil.move(case_dir, config.CRASH_ROOT)
            return (status, new_edges)

        if status is CSExitStatus.SEMANTIC_ERROR:
            # “只收 100 个”的逻辑保持：超过就删
            snap = Stats.get()
            if snap.get("stat_semantic_error", 0) < 100:
                shutil.move(case_dir, config.SEMANTIC_ROOT)
            else:
                shutil.rmtree(case_dir, ignore_errors=True)
            return (status, new_edges)

        if status is CSExitStatus.OTHER:
            shutil.move(case_dir, config.OTHER_ROOT)
            return (status, new_edges)

        if status is CSExitStatus.PROCESS_TIMEOUT:
            shutil.move(case_dir, config.TIMEOUT_ROOT)
            return (status, new_edges)

        if status is CSExitStatus.LACK_BIN:
            shutil.move(case_dir, config.NOBIN_ROOT)
            return (status, new_edges)

        # NORMAL_EXIT：
        if new_edges > 0:
            # 保留在 corpus（你原注释：默认生成出来的 case 就在 corpus）
            return (status, new_edges)
        else:
            # 没有新边：删除 case_dir
            shutil.rmtree(case_dir, ignore_errors=True)
            return (status, new_edges)
        


class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()      # 正常退出
    PROCESS_TIMEOUT = auto()            # 程序崩溃（如 SegFault）
    SEMANTIC_ERROR = auto()   # 语义错误（如 JS 逻辑错误、UnhandledRejection）
    LACK_BIN = auto # 没有覆盖率文件
    OTHER = auto()

    def __str__(self):
        return self.name
    
def _msleep(ms: int) -> None:
    time.sleep(ms / 1000.0)


def _url_encode_file(path: str) -> str:
    p = os.path.realpath(path)
    return urllib.parse.quote(f"file://{p}", safe=":/")


def _opener_no_proxy():
    handler = urllib.request.ProxyHandler({})
    opener = urllib.request.build_opener(handler)
    opener.addheaders = [("User-Agent", "idxf-run/1.0")]
    return opener


def _wait_for_devtools(port: int, timeout_s: float = 5.0) -> bool:
    opener = _opener_no_proxy()
    url = f"http://127.0.0.1:{port}/json/version"
    deadline = time.time() + timeout_s
    while time.time() < deadline:
        try:
            with opener.open(url, timeout=0.5):
                log(f"[*] DevTools :{port} ready")
                return True
        except Exception:
            _msleep(50)
    log(f"[!] DevTools :{port} not ready after {int(timeout_s)}s")
    return False


def _open_new_page(port: int, abs_html: str) -> bool:
    opener = _opener_no_proxy()
    enc_url = _url_encode_file(abs_html)
    url = f"http://127.0.0.1:{port}/json/new?{enc_url}"
    req = urllib.request.Request(url, data=b"", method="PUT")
    try:
        with opener.open(req, timeout=2.0):
            return True
    except Exception as e:
        log(f"[!] open page failed: {e}")
        return False


def _kill_process_tree(pid: int, grace_s: float = 0.3) -> None:
    try:
        os.kill(pid, signal.SIGTERM)
    except ProcessLookupError:
        return
    except Exception:
        pass
    t0 = time.time()
    while time.time() - t0 < grace_s:
        try:
            os.kill(pid, 0)
        except ProcessLookupError:
            return
        _msleep(20)
    try:
        os.kill(pid, signal.SIGKILL)
    except Exception:
        pass

