#!/usr/bin/env python3
import argparse
from pathlib import Path
import shutil

def contains_fail(path: Path) -> bool:
    with path.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            if "fail" in line.lower():
                return True
    return False

def unique_dest(dest_dir: Path, src: Path) -> Path:
    # 避免同名覆盖：a.txt, a_1.txt, a_2.txt...
    base = src.name
    stem = src.stem
    suffix = src.suffix
    candidate = dest_dir / base
    i = 1
    while candidate.exists():
        candidate = dest_dir / f"{stem}_{i}{suffix}"
        i += 1
    return candidate

def main():
    ap = argparse.ArgumentParser(description="Collect TXT files containing 'fail' into one folder.")
    ap.add_argument("--dest", default="stat_failed", help="输出目标文件夹（默认：stat_failed）")
    ap.add_argument("--move", action="store_true", help="将文件移动而非复制")
    ap.add_argument("--recursive", action="store_true", help="递归扫描 stat 子目录")
    args = ap.parse_args()

    stat_dir = Path("stat")
    if not stat_dir.is_dir():
        print("stat 目录不存在")
        return

    txt_iter = stat_dir.rglob("*.txt") if args.recursive else stat_dir.glob("*.txt")
    dest_dir = Path(args.dest)
    dest_dir.mkdir(parents=True, exist_ok=True)

    matched, copied = 0, 0
    for txt in sorted(txt_iter):
        if not txt.is_file():
            continue
        if contains_fail(txt):
            matched += 1
            target = unique_dest(dest_dir, txt)
            if args.move:
                shutil.move(str(txt), str(target))
            else:
                shutil.copy2(str(txt), str(target))
            copied += 1
            print(f"{'Moved' if args.move else 'Copied'}: {txt} -> {target}")

    print(f"\n共匹配到 {matched} 个包含 'fail' 的文件，已{'移动' if args.move else '复制'}到：{dest_dir.resolve()}")
    if matched == 0:
        print("提示：可尝试 --recursive 递归扫描子目录。")

if __name__ == "__main__":
    main()
