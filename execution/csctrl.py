import glob
import io
import json
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
        self.crash_dir = os.path.join(self.base, "crash")
        self.bin_dir = os.path.join(self.base, "crash/bin")
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
        self.pgid = None
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
        print(f"[*] Launched content_shell pid={self.pid} pgid={self.pgid} port={self.port}")

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
        self.pgid = None
        # log(f"[*] Logs: {self.log_path}")

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
                with open(log_file, "rb+") as src, open(dst_file, "wb") as dst:
                    shutil.copyfileobj(src, dst, length=1024 * 1024)
                    src.seek(0)
                    src.truncate(0)
                
                # 移动IR和html
                ir_path = os.path.join(self.base, os.path.basename(html_path)[:-5] + ".json")
                shutil.move(ir_path, dst_dir)
                shutil.move(html_path, dst_dir)

                # 移动bin信息
                bin_foler = os.path.join(dst_dir, "bins")
                os.makedirs(bin_foler, exist_ok=True)
                for b in glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin")):
                    shutil.move(b, bin_foler)

            except Exception as e:
                log(f"[!] archiveCase failed: {e}") 

        # 不用归档的case
        def clearCase():
            try:
                # 清空log
                log_file = os.path.join(self.logs_dir, "content_shell.log")
                with open(log_file, "rb+") as src:
                    src.seek(0)
                    src.truncate(0)
                # 清空IR和html
                ir_path = os.path.join(self.base, os.path.basename(html_path)[:-5] + ".json")
                os.remove(ir_path)
                os.remove(html_path)

                # 清空bin
                for b in glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin")):
                    os.remove(b)

            except Exception as e:
                log(f"[!] clearCase failed: {e}")
        

        def _iter_pids_in_pgid(pgid: int):
            for name in os.listdir("/proc"):
                if name.isdigit():
                    pid = int(name)
                    try:
                        if os.getpgid(pid) == pgid:
                            yield pid
                    except Exception:
                        pass

        def _cmdline(pid: int) -> str:
            try:
                with open(f"/proc/{pid}/cmdline", "rb") as f:
                    return f.read().replace(b"\x00", b" ").decode("utf-8", "replace")
            except Exception:
                return ""

        def _classify(cmd: str):
            is_cs = "content_shell" in cmd
            if not is_cs: return ("other", False)
            if "--type=" not in cmd: return ("browser", True)
            if "--type=zygote" in cmd: return ("zygote", False)
            if "--type=renderer" in cmd: return ("renderer", True)
            if "--type=utility" in cmd and "storage.mojom.StorageService" in cmd:
                return ("storage", True)
            if "--type=utility" in cmd and "NetworkService" in cmd:
                return ("network", False)
            return ("utility_other", False)

        def _pids_by_role_in_pgid(pgid: int):
            roles = {"browser": [], "renderer": [], "storage": [], "others": []}
            for pid in _iter_pids_in_pgid(pgid):
                cls, interesting = _classify(_cmdline(pid))
                if cls in ("browser", "renderer", "storage"):
                    roles[cls].append(pid)
                else:
                    roles["others"].append(pid)
            return roles

        try:
            # 开新页→等待→dump→收集产物→解析日志增量→更新全局位图与统计→落盘/搬迁。
            html_path_abs = os.path.realpath(html_path)

            case_dir = os.path.dirname(html_path_abs)
            case_id = os.path.basename(html_path_abs)[:-5]
            tmp_dir = os.path.join(case_dir, "chrome-tmp")
            os.makedirs(tmp_dir, exist_ok=True)

            tab_id = _open_new_page(self.port, html_path_abs)
            if not tab_id:
                log("[!] open_new_page failed")
                return CSExitStatus.OTHER, 0

            # log(f"[*] Opened: {html_path_abs}")
            _msleep(self.wait_ms)

            # 发送自定义信号获得覆盖 
            _dump_cov_via_sigusr1(self.port)

            # 等待bin落盘
            ok = wait_min_bins(self.bin_dir, timeout_s=3.0)
            bins = []
            if ok:
                bins = glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin"))
            else:
                print("test")
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
                        # print(f"[*] Collected bin: {b}, new edges: {new_edges}")
                    finally:
                        pass
                        # os.remove(b)
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
                    clearCase()
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
                clearCase()
            updateStatThread()
        except  Exception as e:
            log(f"[!] run_case_once exception: {e}")
        finally:
            try:
                if tab_id:                # 防止未赋值时报错
                    _close_page(self.port, tab_id)
            except Exception:
                pass
                

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


def _open_new_page(port: int, abs_html: str) -> str:
    opener = _opener_no_proxy()
    enc_url = _url_encode_file(abs_html)
    url = f"http://127.0.0.1:{port}/json/new?{enc_url}"
    req = urlreq.Request(url, data=b"", method="PUT")
    try:
        with opener.open(req, timeout=2.0) as r:
            info = json.loads(r.read().decode("utf-8", "replace"))
            return info.get("id")
    except Exception as e:
        log(f"[!] open page failed: {e}")
        return None


def _close_page(port: int, target_id: str) -> None:
    opener = _opener_no_proxy()
    try:
        opener.open(f"http://127.0.0.1:{port}/json/close/{target_id}", timeout=1.0)
    except Exception:
        pass

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




# ------------------------------ kill 局部插桩进程  ------------------------------
def _read_cmdline(pid: int) -> str:
    try:
        with open(f"/proc/{pid}/cmdline", "rb") as f:
            data = f.read().replace(b"\x00", b" ").strip()
        return data.decode(errors="ignore")
    except Exception:
        return ""

def _classify_cmdline(cmd: str) -> str:
    # 返回: "browser" / "renderer" / "utility_storage" / "utility_network" / "utility_other" / "unknown"
    if not cmd:
        return "unknown"
    if "content_shell" not in cmd:
        return "unknown"
    if "--type=" not in cmd:
        return "browser"
    if "--type=renderer" in cmd:
        return "renderer"
    if "--type=utility" in cmd:
        if "storage.mojom.StorageService" in cmd:
            return "utility_storage"
        if "network.mojom.NetworkService" in cmd:
            return "utility_network"
        return "utility_other"
    return "unknown"

def _find_browser_pid_by_port(port: int) -> int | None:
    # 先按端口找 browser（最可靠）
    target = f"--remote-debugging-port={port}"
    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        cmd = _read_cmdline(pid)
        if "content_shell" in cmd and target in cmd and "--type=" not in cmd:
            return pid
    # 兜底：找任意没有 --type= 的 content_shell，当且仅当系统里只有一份 content_shell
    candidates = []
    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        cmd = _read_cmdline(pid)
        if "content_shell" in cmd and "--type=" not in cmd:
            candidates.append(pid)
    if len(candidates) == 1:
        return candidates[0]
    return None

def _collect_cs_group_pids(browser_pid: int) -> dict:
    """按 PGID 收集同一组 content_shell 进程，分类返回。"""
    try:
        pgid = os.getpgid(browser_pid)
    except ProcessLookupError:
        return {}
    group = {"browser": [], "renderer": [], "utility_storage": [], "utility_network": [], "utility_other": []}
    for pid in map(int, filter(str.isdigit, os.listdir("/proc"))):
        try:
            if os.getpgid(pid) != pgid:
                continue
        except ProcessLookupError:
            continue
        cmd = _read_cmdline(pid)
        if "content_shell" not in cmd:
            continue
        cls = _classify_cmdline(cmd)
        if cls == "browser":
            group["browser"].append(pid)
        elif cls == "renderer":
            group["renderer"].append(pid)
        elif cls == "utility_storage":
            group["utility_storage"].append(pid)
        elif cls == "utility_network":
            group["utility_network"].append(pid)
        elif cls == "utility_other":
            group["utility_other"].append(pid)
    return group

def _dump_cov_via_sigusr1(port: int) -> dict:
    """
    给 Browser / Storage utility / Renderer 发 SIGUSR1，触发导出。
    返回发信统计：{"browser": n, "storage": n, "renderer": n}
    """
    stats = {"browser": 0, "storage": 0, "renderer": 0}
    browser = _find_browser_pid_by_port(port)
    if not browser:
        return stats  # 找不到就静默返回，外层走超时等待机制

    group = _collect_cs_group_pids(browser)
    # 1) Browser（最多 1 个）
    for pid in group.get("browser", [])[:1]:
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["browser"] += 1
        except ProcessLookupError:
            pass

    # 2) Storage utility（可能 0~1 个；全部打）
    for pid in group.get("utility_storage", []):
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["storage"] += 1
        except ProcessLookupError:
            pass

    # 3) Renderer（可能有多个；全部打）
    for pid in group.get("renderer", []):
        try:
            os.kill(pid, signal.SIGUSR1)
            stats["renderer"] += 1
        except ProcessLookupError:
            pass

    return stats


def wait_min_bins(bin_dir: str, timeout_s: float = 3.0, poll_s: float = 0.05) -> bool:
    """
    等到 bin_dir 下至少出现以下三类 bin 文件各 >= 1 即返回 True：
      - sancov_bitmap_browser_indexeddb_*.bin
      - sancov_bitmap_storage_indexeddb_*.bin
      - sancov_bitmap_blink_indexeddb_*.bin（数量不限制，>=1 即可）

    否则超时返回 False。
    """
    pat_browser = os.path.join(bin_dir, "sancov_bitmap_browser_indexeddb_*.bin")
    pat_storage = os.path.join(bin_dir, "sancov_bitmap_storage_indexeddb_*.bin")
    pat_blink   = os.path.join(bin_dir, "sancov_bitmap_blink_indexeddb_*.bin")

    deadline = time.time() + timeout_s
    while time.time() < deadline:
        has_browser = len(glob.glob(pat_browser)) >= 1
        has_storage = len(glob.glob(pat_storage)) >= 1
        has_blink   = len(glob.glob(pat_blink))   >= 1

        if has_browser and has_storage and has_blink:
            return True

        time.sleep(poll_s)

    return False

