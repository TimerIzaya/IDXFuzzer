import os
import time
from datetime import datetime


def log(content):
    ts = time.time()
    formatted_time = datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
    pid = os.getpid()
    print(f"[{pid}] {formatted_time} {content}")
