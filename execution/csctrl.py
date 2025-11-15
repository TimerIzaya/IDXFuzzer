import glob
import io
import json
import os
import shutil
import signal  # 这个是模块
import subprocess
import time
import traceback
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


        # 实例健康状态文件
        self.health_file = os.path.join(self.base, "health.json")
        self.port = DEFAULT_PORT_BASE + worker_idx  # 如果你在别处算 port，就改成实际的
        self.last_ok_ts = 0.0
        self.last_error_ts = 0.0
        self.consecutive_failures = 0
        self.last_error_reason = ""
        self._flush_health(status="init")  # 启动时写一条初始状态


        # 初始化时就启动一条 content_shell
        self.launch()

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

    def _is_cs_alive(self) -> bool:
        if self.proc is None or self.pid is None:
            return False

        # 先看 Popen 的 returncode
        rc = self.proc.poll()
        if rc is not None:
            # 已有退出码 -> 进程已经退出
            return False

        # 再用 kill(pid, 0) 双重确认
        try:
            os.kill(self.pid, 0)
            return True
        except ProcessLookupError:
            # 进程确实不存在了
            return False
        except Exception as e:
            # 其他异常（比如权限），保守认为“还活着”，避免误杀
            log(f"[CS] _is_cs_alive kill(0) probe error: {e!r}")
            return True

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
                # 只挑关键几行打
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
        try:
            if os.path.isfile(self.log_path):
                with open(self.log_path, "rb") as f:
                    f.seek(0, io.SEEK_END)
                    size = f.tell()
                    back = 32 * 1024  # 往回最多 32KB
                    f.seek(max(0, size - back), io.SEEK_SET)
                    tail = f.read().decode("utf-8", "replace")
                log("[CS] ---- content_shell.log tail (last ~100 lines) ----")
                for line in tail.splitlines()[-100:]:
                    log("[CS] " + line)
                log("[CS] -------- end of content_shell.log tail ---------")
            else:
                log(f"[CS] log 文件不存在: {self.log_path}")
        except Exception as e:
            log(f"[CS] dump content_shell.log tail 失败: {e!r}")

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

        # 30s起不来再说，实例太多很正常慢
        if not _wait_for_devtools(self.port, timeout_s=30.0):
            raise RuntimeError(f"DevTools not ready on :{self.port}, see {self.log_path}")

    def stop(self) -> None:
        # 正常情况下由 stop_workers 统一收尾，这里提供“优雅关闭本 worker 的 CS”
        if self.proc and self.proc.poll() is None:
            log(f"[*] Kill content_shell pid={self.pid}")
            _kill_process_tree(self.proc.pid)
        self.proc = None
        self.pid = None
        self.pgid = None

    def restart_cs(self) -> None:
        """重启当前 controller 绑定的 content_shell 进程。"""
        log(f"[*] Restart content_shell on :{self.port}")
        try:
            # 先尽量停掉当前这条 content_shell
            self.stop()
        except Exception as e:
            log(f"[!] CSController.stop() failed during restart: {e!r}")

        # 再拉起一条新的 content_shell
        try:
            self.launch()
        except Exception as e:
            # 这里抛出去，让上层感知到这条 worker 的 CS 崩坏
            log(f"[!] CSController.launch() failed during restart: {e!r}")
            raise

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
        
    def _clear_specific_profile_data(self) -> None:
        """清理 IndexedDB 和缓存目录，但保留 profile 目录本身。"""
        paths_to_clear = [
            os.path.join(self.profile_dir, "Default", "Local Storage"),
            os.path.join(self.profile_dir, "Default", "Shared Dictionary"),
            os.path.join(self.profile_dir, "Default", "blob_storage"),
            os.path.join(self.profile_dir, "Default", "Code Cache"),
            os.path.join(self.profile_dir, "Default", "GPUCache"),
            os.path.join(self.profile_dir, "Default", "DawnGraphiteCache"),
            os.path.join(self.profile_dir, "Default", "DawnWebGPUCache"),
            os.path.join(self.profile_dir, "Default", "PersistentOriginTrials"),
            os.path.join(self.profile_dir, "Default", "shared_proto_db"),
            os.path.join(self.profile_dir, "Default", "DevToolsActivePort"),
            os.path.join(self.profile_dir, "Default", "DIPS"),
            os.path.join(self.profile_dir, "Default", "DIPS-wal"),
        ]
        
        for path in paths_to_clear:
            try:
                if os.path.isdir(path):
                    shutil.rmtree(path, ignore_errors=True)
                elif os.path.isfile(path):
                    os.remove(path)
            except Exception as e:
                log(f"[!] Failed to clear {path}: {e}")

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
        

        tab_id = None 
        try:
            html_path_abs = os.path.realpath(html_path)

            case_dir = os.path.dirname(html_path_abs)
            case_id = os.path.basename(html_path_abs)[:-5]
            crash_dir = os.path.join(self.crash_dir, case_id)
            tmp_dir = os.path.join(case_dir, "chrome-tmp")
            os.makedirs(tmp_dir, exist_ok=True)

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
                return CSExitStatus.OTHER, 0
            
            _msleep(self.wait_ms)

            _dump_cov_via_sigusr1(self.port)

            ok = wait_min_bins(self.bin_dir, timeout_s=3.0)
            bins = []
            # 没有bin可能是crash哦
            if ok:
                bins = glob.glob(os.path.join(self.bin_dir, "sancov_bitmap_*.bin"))
            log_chunk = self._read_log_increment()
            semantic_error_seen = ("FUZZ_JS_ERROR" in log_chunk) or ("FUZZ_UNHANDLED_REJECTION" in log_chunk)

            pending = count_files_in_dir(os.path.join(crash_dir, "pending"))
            new = count_files_in_dir(os.path.join(crash_dir, "new"))
            completed = count_files_in_dir(os.path.join(crash_dir, "completed"))
            attachments = count_files_in_dir(os.path.join(crash_dir, "attachments"))

            new_edges = 0
            global_bitmap = GlobalEdgeBitmap(create=False)
            for b in bins:
                try:
                    new_edges += global_bitmap.update_from_file(b)
                except Exception as e:
                    log(f"[!] update_from_file failed for {b}: {e}")
                finally:
                    os.remove(b)

            stat_timeout = 0
            stat_mark_interesting = new_edges > 0
            stat_semantic_error = semantic_error_seen
            stat_other_error = 0
            stat_lack_bin = len(bins) == 0
            stat_process_timeout = 0

            if pending > 0 or new > 0 or completed > 0 or attachments > 0:
                archiveCase(os.path.join(config.CRASH_ROOT, case_id))
            elif stat_semantic_error:
                snap = Stats.get()
                if snap.get("stat_semantic_error", 0) < 100:
                    archiveCase(os.path.join(config.SEMANTIC_ROOT, case_id))
                else:
                    clearCase()
            elif stat_other_error:
                archiveCase(os.path.join(config.OTHER_ROOT, case_id))
            elif stat_process_timeout:
                archiveCase(os.path.join(config.TIMEOUT_ROOT, case_id))
            elif stat_lack_bin:
                # 这里是真的没有触发crash的nobin，理论上不可能出现
                archiveCase(os.path.join(config.NOBIN_ROOT, case_id))
            elif new_edges > 0:
                archiveCase(os.path.join(config.CORPUS_ROOT, case_id))
            else:
                clearCase()
            updateStatThread()

            # 假设到这里都没抛异常，就算成功
            self.last_ok_ts = time.time()
            self.consecutive_failures = 0
            self.last_error_reason = ""
            # 最近有成功 + 没连续失败，就是 healthy
            self._flush_health(status="healthy")
        except TimeoutError as e:
            print("[!] run_case_once exception".join(traceback.format_exception(e)))
            clearCase()
            # 打开 / 关闭 / 执行过程中超时
            self.last_error_ts = time.time()
            self.consecutive_failures += 1
            self.last_error_reason = f"Timeout: {e}"
            status = "warning" if self.consecutive_failures < 3 else "dead"
            self._flush_health(status=status)
        except Exception as e:
            print("[!] run_case_once exception".join(traceback.format_exception(e)))
            clearCase()
            # 其它错误
            self.last_error_ts = time.time()
            self.consecutive_failures += 1
            self.last_error_reason = f"Error: {e}"
            status = "warning" if self.consecutive_failures < 3 else "dead"
            self._flush_health(status=status)
        finally:
            if tab_id:
                _close_page(self.port, tab_id)

class CSExitStatus(Enum):
    """枚举表示 content_shell 的执行状态。"""
    NORMAL_EXIT = auto()  # 正常退出
    PROCESS_TIMEOUT = auto()  # 程序崩溃（如 SegFault）
    SEMANTIC_ERROR = auto()  # 语义错误（如 JS 逻辑错误、UnhandledRejection）
    LACK_BIN = auto()  # 没有覆盖率文件
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


def _wait_for_devtools(port: int, timeout_s: float = 10.0) -> bool:
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
    import traceback
    import socket
    import urllib.error as urlerr

    opener = _opener_no_proxy()
    enc_url = _url_encode_file(abs_html)
    url = f"http://127.0.0.1:{port}/json/new?{enc_url}"
    req = urlreq.Request(url, data=b"", method="PUT")
    try:
        # 10s 没法打开tab再说！
        with opener.open(req, timeout=10.0) as r:
            info = json.loads(r.read().decode("utf-8", "replace"))
            return info.get("id")
    except Exception as e:
        # 先打出最基本的信息
        log("[!] open page failed:")
        log(f"    url      = {url}")
        log(f"    port     = {port}")
        log(f"    html     = {abs_html}")
        log(f"    exc_type = {type(e).__name__}")
        log(f"    exc_repr = {repr(e)}")

        # 针对不同类型再细化一下
        if isinstance(e, urlerr.HTTPError):
            # HTTPError 是 URLError 的子类
            log(f"    HTTPError.code   = {e.code}")
            log(f"    HTTPError.reason = {e.reason!r}")
            try:
                body = e.read().decode("utf-8", "replace")
                log(f"    HTTPError.body (first 512B) = {body[:512]!r}")
            except Exception:
                pass
        elif isinstance(e, urlerr.URLError):
            log(f"    URLError.reason  = {e.reason!r}")
            if isinstance(e.reason, socket.timeout):
                log("    -> socket.timeout: DevTools /json/new 响应超时")
        else:
            # 其他乱七八糟的异常，直接把 traceback 打出来
            tb = traceback.format_exc()
            log("    traceback:")
            log(tb)

        # 顺带探测一下 /json/version 状态，看 DevTools 是否还活着
        try:
            ver_url = f"http://127.0.0.1:{port}/json/version"
            with opener.open(ver_url, timeout=1.0) as vr:
                ver_body = vr.read().decode("utf-8", "replace")
            log(f"    devtools /json/version OK, body(first 512B)={ver_body[:512]!r}")
        except Exception as e2:
            log("    devtools /json/version probe failed:")
            log(f"        type  = {type(e2).__name__}")
            log(f"        repr  = {repr(e2)}")

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
