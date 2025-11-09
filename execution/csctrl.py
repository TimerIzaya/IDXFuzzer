import glob
import io
import os
import shutil
import signal  # 这个是模块
import subprocess
import time
import urllib.request as urlreq
import urllib.parse as urlparse
from enum import Enum, auto

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from tool.log import log
from tool.tool import count_files_in_dir

DEFAULT_CS = "/timer/chromium/src/out/IndexedDBSanCov/content_shell"
DEFAULT_WAIT_MS = 300
DEFAULT_PORT_BASE = 9300


class CSController:
    def __init__(self, worker_idx: int, cpu_id: int):
        self.base = os.path.join(config.CS_TMP, str(os.getpid()))
        self.bin_dir = os.path.join(self.base, "bin")
        self.crash_dir = os.path.join(self.base, "crash")
        self.profile_dir = os.path.join(self.base, "profile", "ud_1")
        self.logs_dir = os.path.join(self.base, "logs")
        for d in (self.bin_dir, self.crash_dir, self.profile_dir, self.logs_dir):
            os.makedirs(d, exist_ok=True)

        self.port = getattr(config, "PORT_BASE", DEFAULT_PORT_BASE) + worker_idx
        self.wait_ms = getattr(config, "WAIT_MS", DEFAULT_WAIT_MS)
        self.cs_path = getattr(config, "CONTENT_SHELL", DEFAULT_CS)
        self.cpu_id = cpu_id

        self.proc = None
        self.pid = None
        self.log_path = os.path.join(self.logs_dir, "content_shell.log")

        self.env = os.environ.copy()
        self.env["SANCOV_OUTPUT_DIR"] = os.path.realpath(self.bin_dir)
        self.env["SANCOV_CLEAR"] = "1"
        self.env["ASAN_OPTIONS"] = "allow_user_segv_handler=1:fast_unwind_on_fatal=0"

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
            if st.st_mtime >= since_ts - 1e-3:  # 给一点浮动
                basename = os.path.basename(p)
                dst = os.path.join(dst_dir, basename)
                try:
                    os.replace(p, dst)  # 原子移动
                except Exception:
                    continue
                moved.append(dst)
        return moved

    def run_case_once(self, html_path: str):
        def updateStatThread():
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

        def archiveCase(dst_dir: str):
            try:
                # 先处理log
                log_file = os.path.join(self.logs_dir, "content_shell.log")
                dst_file = os.path.join(dst_dir, "content_shell.log")
                os.makedirs(os.path.dirname(dst_file), exist_ok=True)
                open(dst_file, "ab").close()
                if not os.path.exists(log_file):
                    print(1)
                with open(log_file, "rb+") as src, open(dst_file, "wb") as dst:
                    shutil.copyfileobj(src, dst, length=1024 * 1024)
                    src.seek(0)
                    src.truncate(0)
                
                # 移动IR和html
                ir_path = os.path.join(self.base, os.path.basename(html_path)[:-5] + ".json")
                shutil.move(ir_path, dst_dir)
                shutil.move(html_path, dst_dir)

                # 清空profile
                for name in os.listdir(self.profile_dir):
                    path = os.path.join(self.profile_dir, name)
                    if os.path.isfile(path) or os.path.islink(path):
                        os.remove(path)
                    else:
                        shutil.rmtree(path)

                # 移动bin信息
                bin_foler = os.path.join(dst_dir, "bins")
                os.makedirs(bin_foler, exist_ok=True)
                for b in glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin")):
                    shutil.move(b, bin_foler)
            except Exception as e:
                log(f"[!] archiveCase failed: {e}") 


        
        # 开新页→等待→dump→收集产物→解析日志增量→更新全局位图与统计→落盘/搬迁。
        html_path_abs = os.path.realpath(html_path)

        case_dir = os.path.dirname(html_path_abs)
        case_id = os.path.basename(html_path_abs)[:-5]
        tmp_dir = os.path.join(case_dir, "chrome-tmp")
        os.makedirs(tmp_dir, exist_ok=True)

        if not _open_new_page(self.port, html_path_abs):
            log("[!] open_new_page failed")
            return CSExitStatus.OTHER, 0

        log(f"[*] Opened: {html_path_abs}")
        _msleep(self.wait_ms)

        # 发送自定义信号获得覆盖 
        if self.pid:
            try:
                os.kill(self.pid, signal.SIGUSR1)
            except Exception:
                pass

        # 等待bin落盘
        deadline = time.time() + 3.0
        bins = []
        while time.time() < deadline:
            bins = glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin"))
            if len(bins) >= 1:
                break
            _msleep(50)

        log_chunk = self._read_log_increment()
        semantic_error_seen = ("FUZZ_JS_ERROR" in log_chunk) or ("FUZZ_UNHANDLED_REJECTION" in log_chunk)

        pending = count_files_in_dir(os.path.join(case_dir, "pending"))
        new = count_files_in_dir(os.path.join(case_dir, "new"))
        completed = count_files_in_dir(os.path.join(case_dir, "completed"))
        attachments = count_files_in_dir(os.path.join(case_dir, "attachments"))

        new_edges = 0
        global_bitmap = GlobalEdgeBitmap(create=False)
        try:
            for b in bins:
                try:
                    new_edges += global_bitmap.update_from_file(b)
                finally:
                    os.remove(b)
        finally:
            global_bitmap.close()

        stat_timeout = 0
        stat_mark_interesting = new_edges > 0
        stat_semantic_error = semantic_error_seen
        stat_other_error = 0
        stat_lack_bin = len(bins) == 0
        stat_process_timeout = 0

        if pending > 0 or new > 0 or completed > 0 or attachments > 0:
            archiveCase(os.path.join(config.CRASH_ROOT, case_id))
            updateStatThread()
            return

        if stat_semantic_error:
            # “只收 100 个”的逻辑保持：超过就删
            snap = Stats.get()
            if snap.get("stat_semantic_error", 0) < 100:
                archiveCase(os.path.join(config.SEMANTIC_ROOT, case_id))
            else:
                shutil.rmtree(case_dir, ignore_errors=True)
            updateStatThread()
            return

        if stat_other_error:
            archiveCase(os.path.join(config.OTHER_ROOT, case_id))
            updateStatThread()
            return

        if stat_process_timeout:
            archiveCase(os.path.join(config.TIMEOUT_ROOT, case_id))
            updateStatThread()
            return

        if stat_lack_bin:
            archiveCase(os.path.join(config.NOBIN_ROOT, case_id))
            updateStatThread()
            return

        if new_edges > 0:
            archiveCase(os.path.join(config.CORPUS_ROOT, case_id))
        else:
            shutil.rmtree(case_dir, ignore_errors=True)
        updateStatThread()


class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()  # 正常退出
    PROCESS_TIMEOUT = auto()  # 程序崩溃（如 SegFault）
    SEMANTIC_ERROR = auto()  # 语义错误（如 JS 逻辑错误、UnhandledRejection）
    LACK_BIN = auto  # 没有覆盖率文件
    OTHER = auto()

    def __str__(self):
        return self.name


def _msleep(ms: int) -> None:
    time.sleep(ms / 1000.0)


def _url_encode_file(path: str) -> str:
    p = os.path.realpath(path)
    return urlparse.quote(f"file://{p}", safe=":/")


def _opener_no_proxy():
    handler = urlreq.ProxyHandler({})
    opener = urlreq.build_opener(handler)
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
    req = urlreq.Request(url, data=b"", method="PUT")
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
