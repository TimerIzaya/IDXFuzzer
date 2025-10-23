#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os, re, sys, signal, tempfile, subprocess
from pathlib import Path

FINAL_LOG = Path("run.log").resolve()
FINAL_LOG.parent.mkdir(parents=True, exist_ok=True)
PATTERN   = re.compile(r"\btick 12\b")

def make_child_cmd():
    code = r"""
import time
for i in range(10):
    print(f"tick {i}", flush=True)
    time.sleep(0.2)
"""
    return [sys.executable, "-u", "-c", code]

def start_process(cmd):
    kwargs = dict(stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
    if os.name == "posix":
        kwargs["start_new_session"] = True
    else:
        try:
            from subprocess import CREATE_NEW_PROCESS_GROUP
            kwargs["creationflags"] = CREATE_NEW_PROCESS_GROUP
        except Exception:
            pass
    return subprocess.Popen(cmd, **kwargs)

def stop_process(proc):
    try:
        if os.name == "posix":
            os.killpg(proc.pid, signal.SIGTERM)
        else:
            proc.terminate()
    except Exception:
        try: proc.terminate()
        except Exception: pass

def main():
    cmd = make_child_cmd()
    print("Starting:", " ".join(cmd))

    proc = start_process(cmd)
    hit = False

    # 放到 FINAL_LOG 同目录，避免跨盘
    tmp = tempfile.NamedTemporaryFile(
        mode="w", encoding="utf-8", delete=False,
        prefix="run_", suffix=".log", dir=str(FINAL_LOG.parent)
    )
    tmp_path = Path(tmp.name)

    try:
        for line in proc.stdout:
            tmp.write(line)
            if PATTERN.search(line):
                hit = True
                print(">>> found 'tick 6'; keeping log and stopping child")
                stop_process(proc)
                break
        try:
            rest = proc.stdout.read() or ""
            if rest:
                tmp.write(rest)
        except Exception:
            pass
    finally:
        tmp.flush()
        tmp.close()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()

    if hit:
        try:
            FINAL_LOG.unlink(missing_ok=True)
        except TypeError:
            if FINAL_LOG.exists():
                FINAL_LOG.unlink()
        tmp_path.replace(FINAL_LOG)   # 同盘原子替换
        print(f"Saved log to: {FINAL_LOG}")
    else:
        try:
            tmp_path.unlink()
        except FileNotFoundError:
            pass
        print("Pattern not found; log discarded.")

if __name__ == "__main__":
    main()
