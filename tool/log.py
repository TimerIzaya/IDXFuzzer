import os
import time
from datetime import datetime


def log(content):
    ts = time.time()
    formatted_time = datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
    pid = os.getpid()
    print(f"[{pid}] {formatted_time} {content}")

def format_s_to_ms(s):
    consume = s * 1000  # 转为毫秒
    formatted = f"{consume:.3f} ms"  # 保留三位小数
    return formatted

