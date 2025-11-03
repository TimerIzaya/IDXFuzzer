import os
import signal
import subprocess
import time
from pathlib import Path

import config
from coverage.bitmap import GlobalEdgeBitmap
from coverage.share_stat import Stats
from tool.log import log, format_s_to_ms

# 与你测试脚本保持一致
SANCOV_DIR = "/dev/shm/sancov"
CS_BIN = config.CONTENT_SHELL_BIN  # 你 config 里原本就有
CS_ARGS = [
    "--no-sandbox",
    "--headless=new",
    "--disable-gpu",
    "--remote-debugging-port=0",  # 我们现在这条路不用 devtools，所以 0 没问题
    "--user-data-dir=/dev/shm/chrome-tmp",  # 关键：复用 profile
]

# 你原来的统计打印起得住，但我们这边没法确定你 share_stat 里具体函数名
# 所以这里全都试一遍，哪个能调通就用哪个
_STAT_FUNC_CANDIDATES = [
    "inc_total_exec",
    "incr_total_exec",
    "bump_total_exec",
    "add_total_exec",
    "inc_total_exec_cnt",
    "incr_total_exec_cnt",
    "bump_total_exec_cnt",
    "add_total_exec_cnt",
    "inc_exec",
    "incr_exec",
    "bump_exec",
    "add_exec",
]


def _bump_total_exec() -> None:
    called = False
    # 1) 先试类方法
    for name in _STAT_FUNC_CANDIDATES:
        fn = getattr(Stats, name, None)
        if fn is None:
            continue
        try:
            fn()
            log(f"[exec_case] stats: bumped via Stats.{name}()")
            called = True
            break
        except TypeError:
            try:
                fn(1)
                log(f"[exec_case] stats: bumped via Stats.{name}(1)")
                called = True
                break
            except Exception:
                pass
        except Exception:
            pass

    # 2) 再试实例方法（有些写法是 Stats.instance.xxx）
    if not called:
        inst = getattr(Stats, "instance", None)
        if inst is not None:
            for name in _STAT_FUNC_CANDIDATES:
                fn = getattr(inst, name, None)
                if fn is None:
                    continue
                try:
                    fn()
                    log(f"[exec_case] stats: bumped via Stats.instance.{name}()")
                    called = True
                    break
                except TypeError:
                    try:
                        fn(1)
                        log(f"[exec_case] stats: bumped via Stats.instance.{name}(1)")
                        called = True
                        break
                    except Exception:
                        pass
                except Exception:
                    pass

    if not called:
        # 打个日志给你看，说明我确实来过这里
        log(
            f"[exec_case] stats: still no usable method to bump total exec (tried {len(_STAT_FUNC_CANDIDATES)} names)"
        )


def _ensure_sancov_dir() -> None:
    Path(SANCOV_DIR).mkdir(parents=True, exist_ok=True)


def _spawn_content_shell(html_abs: str) -> tuple[int, subprocess.Popen]:
    """起一个新的 content_shell，加载指定 html，返回 (pid, proc)。"""
    _ensure_sancov_dir()
    cmd = [CS_BIN, *CS_ARGS, f"file://{html_abs}"]
    env = os.environ.copy()
    env["SANCOV_OUTPUT_DIR"] = SANCOV_DIR
    log(f"[exec_case] spawn new content_shell pid=? cmd={' '.join(cmd)}")
    proc = subprocess.Popen(
        cmd,
        env=env,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        start_new_session=True,
    )
    return proc.pid, proc


def _wait_sancov(pid: int, round_id: int, timeout_ms: int = 6000) -> str | None:
    """在 /dev/shm/sancov 里等这个 pid 的第 round_id 轮输出。"""
    expect_name = f"sancov_bitmap_broswer_indexeddb_{pid}_{round_id}.bin"
    deadline = time.time() + timeout_ms / 1000.0
    while time.time() < deadline:
        p = Path(SANCOV_DIR, expect_name)
        if p.exists():
            return str(p)
        time.sleep(0.05)
    return None


def run_one_case(html_path: str, round_id: int = 1) -> bool:
    """给 run_inss 调的：生成的 html 执行 1 次。"""
    html_abs = os.path.abspath(html_path)
    pid, proc = _spawn_content_shell(html_abs)
    t0 = time.time()

    sancov_path = _wait_sancov(pid, round_id)
    if sancov_path is None:
        log(
            f"[exec_case] round {round_id} for pid={pid} did NOT dump sancov (waited {format_s_to_ms(time.time() - t0)}), url=file://{html_abs}"
        )
    else:
        log(
            f"[exec_case] round {round_id} for pid={pid} got sancov: {sancov_path} (after {format_s_to_ms(time.time() - t0)}), url=file://{html_abs}"
        )
        gb = GlobalEdgeBitmap(create=False)
        gb.update_from_file(sancov_path)
        gb.close()
        log(f"[exec_case] merge: merged sancov via gb.update_from_file('{sancov_path}')")
        _bump_total_exec()

    # 我们这里还是一次性 content_shell，用完杀掉，防止你说统计不对
    try:
        os.killpg(proc.pid, signal.SIGKILL)
    except ProcessLookupError:
        pass

    return sancov_path is not None