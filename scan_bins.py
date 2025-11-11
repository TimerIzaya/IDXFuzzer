#!/usr/bin/env python3
# scan_bins.py
import os, sys, argparse

def count_nonzero_bytes_stream(path: str, chunk_size: int = 1 << 20) -> int:
    """逐块读取，统计非零字节数；避免 mmap/memoryview 造成的 close 异常。"""
    nz = 0
    with open(path, "rb", buffering=chunk_size) as f:
        while True:
            b = f.read(chunk_size)
            if not b:
                break
            # 非零 = 总长 - 0 的个数
            nz += len(b) - b.count(0)
    return nz

def main():
    ap = argparse.ArgumentParser(description="Scan sancov .bin files")
    ap.add_argument("bin_dir", help="directory containing *.bin")
    ap.add_argument("-v", "--verbose", action="store_true",
                    help="show fired bytes and coverage")
    args = ap.parse_args()

    bin_dir = args.bin_dir
    if not os.path.isdir(bin_dir):
        print(f"Not a directory: {bin_dir}", file=sys.stderr)
        sys.exit(2)

    names = sorted(n for n in os.listdir(bin_dir) if n.endswith(".bin"))
    if not names:
        print("(no .bin files)")
        return

    if args.verbose:
        w = max(len(n) for n in names)
        print(f"{'name'.ljust(w)}  edges(bytes)  fired(bytes)  coverage")
    for name in names:
        path = os.path.join(bin_dir, name)
        try:
            size = os.path.getsize(path)  # sancov 静态计数区大小（边数=字节数）
            if args.verbose:
                fired = count_nonzero_bytes_stream(path)
                cov = (fired / size * 100.0) if size else 0.0
                if 'w' not in locals():
                    w = max(len(n) for n in names)
                    print(f"{'name'.ljust(w)}  edges(bytes)  fired(bytes)  coverage")
                print(f"{name.ljust(w)}  {size:12d}  {fired:12d}  {cov:7.3f}%")
            else:
                print(f"{name} {size}")
        except Exception as e:
            print(f"[WARN] skip {name}: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
