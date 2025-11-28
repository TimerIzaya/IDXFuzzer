# execution/cs_devtools.py
import json
import os
import time
import traceback
import socket
import urllib.request as urlreq
import urllib.parse as urlparse
import urllib.error as urlerr

from tool.log import log


def _msleep(ms: int) -> None:
    """毫秒级 sleep，方便统一调用。"""
    time.sleep(ms / 1000.0)


def _url_encode_file(path: str) -> str:
    """把本地文件路径转成 file:// URL，并正确转义。"""
    p = os.path.realpath(path)
    return urlparse.quote(f"file://{p}", safe=":/")


def _opener_no_proxy():
    """禁用系统代理的 opener，避免被环境代理干扰。"""
    handler = urlreq.ProxyHandler({})
    opener = urlreq.build_opener(handler)
    opener.addheaders = [("User-Agent", "idxf-run/1.0")]
    return opener


def _wait_for_devtools(port: int, timeout_s: float = 10.0) -> bool:
    """轮询 /json/version，直到 DevTools 就绪或超时。"""
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


def _open_new_page(port: int, abs_html: str) -> str | None:
    """
    通过 DevTools /json/new 打开一个新的 tab，返回 target id。
    打不开时详细打印错误并返回 None。
    """
    opener = _opener_no_proxy()
    enc_url = _url_encode_file(abs_html)
    url = f"http://127.0.0.1:{port}/json/new?{enc_url}"
    req = urlreq.Request(url, data=b"", method="PUT")

    try:
        # 10s 没法打开 tab 再说！
        with opener.open(req, timeout=30.0) as r:
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
    """关闭一个 DevTools tab，失败不抛异常。"""
    opener = _opener_no_proxy()
    try:
        opener.open(f"http://127.0.0.1:{port}/json/close/{target_id}", timeout=1.0)
    except Exception:
        pass
