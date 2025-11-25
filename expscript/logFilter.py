#!/usr/bin/env python3
import re

def extract_pid_lines(input_path: str, output_path: str, pid: str) -> None:
    """从日志文件中提取指定 pid 的所有行"""
    pattern = re.compile(rf"\[{re.escape(pid)}\]")  # 精确匹配 [pid]

    with open(input_path, "r", encoding="utf-8", errors="ignore") as f_in, \
         open(output_path, "w", encoding="utf-8") as f_out:
        for line in f_in:
            if pattern.search(line):
                f_out.write(line)


def main():
    # 在这里改配置就行
    pid = "253709"
    input_file = "fuzz_log.txt"
    output_file = f"fuzz_log_{pid}.txt"

    extract_pid_lines(input_file, output_file, pid)
    print(f"Done. Extracted logs for pid {pid} to: {output_file}")


if __name__ == "__main__":
    main()
