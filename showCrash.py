import os
import glob
import subprocess

# === 配置 ===
OUT_DIR = "/timer/chromium/src/out/IndexedDBSanCov"  # 你新编译的 content_shell 输出目录
DUMP_SYMS_BIN = "/timer/chromium/src/third_party/breakpad/out/breakpad/dump_syms"
STACKWALK_BIN = "minidump_stackwalk"  # 假设已放到环境变量
CRASH_PENDING_DIR = "result/crashes/pending"

def prepare_symbols():
    """生成 Breakpad 符号文件并放入正确的目录结构"""
    sym_dir = os.path.join(OUT_DIR, "symbols")
    os.makedirs(sym_dir, exist_ok=True)

    content_shell_path = os.path.join(OUT_DIR, "content_shell")
    print(f"[*] Generating symbols for {content_shell_path} ...")

    result = subprocess.run([DUMP_SYMS_BIN, content_shell_path],
                            capture_output=True, text=True, check=True)
    lines = result.stdout.splitlines()
    module_line = lines[0]
    # MODULE Linux x86_64 ABCDEF1234567890 content_shell
    parts = module_line.split()
    build_id = parts[3]
    binary_name = parts[4]

    target_dir = os.path.join(sym_dir, binary_name, build_id)
    os.makedirs(target_dir, exist_ok=True)

    sym_file = os.path.join(target_dir, f"{binary_name}.sym")
    with open(sym_file, "w") as f:
        f.write(result.stdout)

    print(f"[+] Symbols generated: {sym_file}")
    return sym_dir

def parse_dmp_files(sym_dir):
    """批量解析 pending 下所有 dmp"""
    dmp_files = glob.glob(os.path.join(CRASH_PENDING_DIR, "*.dmp"))
    if not dmp_files:
        print("[!] No .dmp files found.")
        return

    print(f"[*] Found {len(dmp_files)} dmp files, start analyzing...\n")

    for dmp_file in dmp_files:
        out_file = dmp_file.replace(".dmp", ".stack.txt")
        cmd = [STACKWALK_BIN, dmp_file, sym_dir]

        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            with open(out_file, "w") as f:
                f.write(result.stdout)

            # 简单提取 Crash reason 和 Top Frame
            lines = result.stdout.splitlines()
            crash_reason = next((l for l in lines if "Crash reason" in l), "Unknown")
            top_frame = next((l for l in lines if l.strip().startswith("0 ")), "No top frame")
            print(f"[+] {os.path.basename(dmp_file)}")
            print(f"    {crash_reason}")
            print(f"    Top: {top_frame}\n")

        except subprocess.CalledProcessError as e:
            print(f"[!] Failed to parse {dmp_file}: {e}")

if __name__ == "__main__":
    sym_dir = prepare_symbols()
    parse_dmp_files(sym_dir)
