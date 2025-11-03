# execution/cs_reuse_helpers.py
"""
辅助脚本 - 把 html 放到队列目录，供 run_inss worker 读取并处理。
只是一个小工具：fuzzer 或测试流程可以使用它将需要执行的 html 放入队列。
"""

import os
import shutil
from pathlib import Path

QUEUE_DIR = "/dev/shm/idxf_queue"

def enqueue_html(src_html_path: str):
    os.makedirs(QUEUE_DIR, exist_ok=True)
    src = Path(src_html_path)
    if not src.exists():
        raise FileNotFoundError(src_html_path)
    dest = Path(QUEUE_DIR) / src.name
    # copy (not move) so original remains
    shutil.copy2(src, dest)
    return str(dest)

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("usage: cs_reuse_helpers.py <html-file>")
        sys.exit(1)
    print("enqueued:", enqueue_html(sys.argv[1]))
