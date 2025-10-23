import os
import shutil
import uuid
from pathlib import Path

import config
from config import CORPUS_ROOT, CRASH_ROOT, TIMEOUT_ROOT, OTHER_ROOT, SEMANTIC_ROOT


def count_files_in_dir(path: str) -> int:
    if not os.path.exists(path):
        return 0
    return sum(1 for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)))

# ---------- 工具函数 ----------
def make_uid() -> str:
    return uuid.uuid4().hex[:12]


# ---------- 初始化各种文件夹 ----------
def init_output_dirs() -> None:
    folder_list = [CORPUS_ROOT, CRASH_ROOT, TIMEOUT_ROOT, OTHER_ROOT, SEMANTIC_ROOT, config.NOBIN_ROOT]
    for path in folder_list:
        # restore模式确保corpus存在，不要动它
        if config.MODE_RESTORE and path is CORPUS_ROOT:
            os.makedirs(path, exist_ok=True)
            # 确保这个目录里的格式都是对的 corpus/cid/cid.html 有些case因为中断可能并没有生成完毕
            path = Path(path)  # 改成你的目录
            for d in path.iterdir():
                case = d / f"{d.name}.html"
                # 不存在cid/cid.html 删除
                if not case.is_file():
                    shutil.rmtree(d, ignore_errors=False)
                    continue
                # 情况2：存在 cid/cid.html → 只保留它，删掉其余一切
                for p in d.iterdir():
                    if p == case:
                        continue
                    if p.is_dir() and not p.is_symlink():
                        shutil.rmtree(p, ignore_errors=True)
                    else:
                        # 文件或符号链接
                        try:
                            p.unlink()
                        except IsADirectoryError:
                            # 极少数系统上目录被当成文件处理时报错，兜底
                            shutil.rmtree(p, ignore_errors=True)
            continue

        # 其余模式，先删除后创建
        if os.path.exists(path):
            shutil.rmtree(path, ignore_errors=True)
        os.makedirs(path, exist_ok=True)
        print(f"recreate path: {path}")
    print("[*] Initialized output directories.]")