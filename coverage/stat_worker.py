import os
import threading
import time

import numpy as np

from coverage.share_stat import Stats
import config
from config import CORPUS_ROOT
from coverage.bitmap import GlobalEdgeBitmap
import json
from pathlib import Path

# ---------- 统计 ----------
def stat_worker(bitmap: GlobalEdgeBitmap,
                start_ts: float,
                stop_event: threading.Event | None = None, ) -> None:
    last_exec = 0
    last_time = start_ts
    while True:
        if stop_event is not None and stop_event.is_set():
            break

        time.sleep(config.STAT_SHOW_INTERVAL)  # 每 60 秒打印一次
        now = time.time()
        elapsed = int(now - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)

        snapshot = Stats.get()
        timeout_cnt = snapshot["timeout_cnt"]
        total_exec_cnt = snapshot["total_exec_cnt"]
        last_interesting_exec = snapshot["last_interesting_exec"]
        pending_cnt = snapshot["pending_cnt"]
        new_cnt = snapshot["new_cnt"]
        completed_cnt = snapshot["completed_cnt"]
        attachments_cnt = snapshot["attachments_cnt"]
        stat_other_error = snapshot["stat_other_error"]
        stat_semantic_error = snapshot["stat_semantic_error"]
        stat_lack_bin = snapshot["stat_lack_bin"]

        exec_diff = total_exec_cnt - last_exec
        throughput = exec_diff / max((now - last_time) / 60.0, 1e-6)
        last_exec = total_exec_cnt
        last_time = now

        try:
            corpus_cnt = sum(1 for f in os.listdir(CORPUS_ROOT)
                             if os.path.isdir(os.path.join(CORPUS_ROOT, f)))
        except FileNotFoundError:
            corpus_cnt = 0

        coverage_pct = (np.count_nonzero(bitmap.bitmap) / max(1, config.EDGE_TOTAL_COUNT)) * 100.0

        # 收集各端口健康状态
        health_list = _collect_cs_health()

        log_msg = (
            "\n========== IDX Fuzzer Stats ==========\n"
            + f"========== {config.MODE_CUR} \n"
              f"{'Elapsed Time':<25}: {h:02d}h {m:02d}m {s:02d}s\n"
              f"{'Total Executions':<25}: {total_exec_cnt}\n"
              f"{'Throughput (seeds/min)':<25}: {throughput:.2f}\n"
              f"{'Corpus Count':<25}: {corpus_cnt}\n"
              f"{'Last Interesting Seed @':<25}: {last_interesting_exec}\n"
              f"{'Coverage':<25}: {coverage_pct:.4f}%\n"
              f"{'Timeout Cases':<25}: {timeout_cnt}\n"
              f"{'Lack Bin':<25}: {stat_lack_bin}\n"
              f"{'Unknown':<25}: {stat_other_error}\n"
              f"{'SemanticError':<25}: {stat_semantic_error}\n"
              f"{'Crash (pending)':<25}: {pending_cnt}\n"
              f"{'Crash (new)':<25}: {new_cnt}\n"
              f"{'Crash (completed)':<25}: {completed_cnt}\n"
              f"{'Crash (attachments)':<25}: {attachments_cnt}\n"
        )

        # 追加 content_shell 健康状态
        log_msg += "\n----- content_shell health -----\n"
        if not health_list:
            log_msg += "(no health info)\n"
        else:
            for hinfo in health_list:
                port = hinfo.get("port", -1)
                status = hinfo.get("status", "unknown")
                pid = hinfo.get("pid", -1)
                last_ok_ts = hinfo.get("last_ok_ts", 0.0)
                last_err_ts = hinfo.get("last_error_ts", 0.0)
                consec_fail = hinfo.get("consecutive_failures", 0)
                reason = hinfo.get("last_error_reason", "")

                # 转成相对时间，方便看
                def _fmt_ts(ts: float) -> str:
                    if not ts:
                        return "-"
                    dt = int(now - ts)
                    mm, ss = divmod(dt, 60)
                    hh, mm = divmod(mm, 60)
                    return f"{hh:02d}:{mm:02d}:{ss:02d} ago"

                log_msg += (
                    f"port {port:<5} pid {pid:<7} "
                    f"status={status:<8} "
                    f"last_ok={_fmt_ts(last_ok_ts):<12} "
                    f"last_err={_fmt_ts(last_err_ts):<12} "
                    f"fails={consec_fail:<3} "
                    f"reason={reason}\n"
                )

        print(log_msg, end="")
        with open(config.LOG_FILE, "a", encoding="utf-8") as logf:
            logf.write(log_msg)




def _collect_cs_health() -> list[dict]:
    """扫描 config.CS_TMP 下所有实例的 health.json，收集健康状态。"""
    root = Path(config.CS_TMP)
    res: list[dict] = []

    if not root.exists():
        return res

    for inst_dir in root.iterdir():
        if not inst_dir.is_dir():
            continue
        health_file = inst_dir / "health.json"
        if not health_file.is_file():
            continue
        try:
            with health_file.open("r", encoding="utf-8") as f:
                data = json.load(f)
            # 略做检查，避免乱文件污染
            if "port" not in data:
                continue
            res.append(data)
        except Exception:
            # 某一个文件坏掉直接忽略
            continue

    # 按端口排序一下，看着舒服
    res.sort(key=lambda d: d.get("port", 0))
    return res
