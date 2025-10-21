import os
import threading
import time
from multiprocessing import Value

import numpy as np

from execution.SharedStat import Stats
import config
from config import CORPUS_ROOT
from coverage.bitmap import GlobalEdgeBitmap


# ---------- 统计 ----------
def stat_worker(bitmap: GlobalEdgeBitmap,
                start_ts: float) -> None:
    last_exec = 0
    last_time = start_ts
    while True:
        time.sleep(5)  # 每 60 秒打印一次
        now = time.time()
        elapsed = int(now - start_ts)
        h, rem = divmod(elapsed, 3600)
        m, s = divmod(rem, 60)


        # 拿ShareStat快照
        snapshot = Stats.get()
        timeout_cnt           = snapshot["timeout_cnt"]
        total_exec_cnt        = snapshot["total_exec_cnt"]
        last_interesting_exec = snapshot["last_interesting_exec"]
        pending_cnt           = snapshot["pending_cnt"]
        new_cnt               = snapshot["new_cnt"]
        completed_cnt         = snapshot["completed_cnt"]
        attachments_cnt       = snapshot["attachments_cnt"]

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

        log_msg = (
            "\n========== IDX Fuzzer Stats ==========\n"
            +  f"========== {config.MODE_CUR} \n"
            + (f" (restore progess {config.MODE_PROGRESS})" if config.MODE_RESTORE else "")+ "\n"
            f"{'Elapsed Time':<25}: {h:02d}h {m:02d}m {s:02d}s\n"
            f"{'Total Executions':<25}: {total_exec_cnt}\n"
            f"{'Throughput (seeds/min)':<25}: {throughput:.2f}\n"
            f"{'Corpus Count':<25}: {corpus_cnt}\n"
            f"{'Last Interesting Seed @':<25}: {last_interesting_exec}\n"
            f"{'Coverage':<25}: {coverage_pct:.4f}%\n"
            f"{'Timeout Cases':<25}: {timeout_cnt}\n"
            f"{'Crash (pending)':<25}: {pending_cnt}\n"
            f"{'Crash (new)':<25}: {new_cnt}\n"
            f"{'Crash (completed)':<25}: {completed_cnt}\n"
            f"{'Crash (attachments)':<25}: {attachments_cnt}\n"
        )
        print(log_msg, end="")
        with open(config.LOG_FILE, "a", encoding="utf-8") as logf:
            logf.write(log_msg)

