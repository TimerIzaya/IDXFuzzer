import os
import uuid


def count_files_in_dir(path: str) -> int:
    if not os.path.exists(path):
        return 0
    return sum(1 for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)))

# ---------- 工具函数 ----------
def make_uid() -> str:
    return uuid.uuid4().hex[:8]
