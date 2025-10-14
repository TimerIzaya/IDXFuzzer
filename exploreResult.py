#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import subprocess
import tempfile

# ====== 根路径与输出目录 ======
root_dir = "/timer/IDXFuzzer/result/crashes/timeout"
stat_dir = os.path.join(os.getcwd(), "stat")
os.makedirs(stat_dir, exist_ok=True)


def execCasees():
    # ====== 遍历所有case ======
    for case_name in os.listdir(root_dir):
        case_path = os.path.join(root_dir, case_name)
        if not os.path.isdir(case_path):
            continue

        # 找到html文件
        html_files = [f for f in os.listdir(case_path) if f.endswith(".html")]
        if not html_files:
            continue

        html_path = os.path.join(case_path, html_files[0])
        html_path_abs = os.path.abspath(html_path)

        # 生成临时目录
        tmp_dir = tempfile.mkdtemp(prefix="tmp_chrome_")

        # 输出txt文件路径
        out_txt = os.path.join(stat_dir, f"{case_name}.txt")

        # 命令与环境变量
        cmd = [
            "/timer/chromium/src/out/IndexedDBSanCov/content_shell",
            "--no-sandbox", "--headless=new", "--ozone-platform=headless",
            "--disable-gpu", "--disable-plugins", "--disable-extensions",
            "--disable-breakpad", "--disable-default-apps", "--disable-sync",
            "--disable-background-networking", "--disable-popup-blocking",
            "--no-default-browser-check", "--password-store=basic",
            "--use-mock-keychain", "--disable-hang-monitor",
            "--no-zygote", "--remote-debugging-port=0",
            "--run-all-compositor-stages-before-draw",
            f"--user-data-dir={tmp_dir}",
            "--enable-crash-reporter",
            "--enable-logging=stderr",
            f"--crash-dumps-dir={tmp_dir}",
            f"file://{html_path_abs}",
        ]

        env = os.environ.copy()
        env["SANCOV_OUTPUT_DIR"] = tmp_dir

        print(f"[+] Running case: {case_name}")
        with open(out_txt, "wb") as logf:
            try:
                subprocess.run(cmd, stdout=logf, stderr=logf, env=env, timeout=20)
            except subprocess.TimeoutExpired:
                logf.write(b"[Timeout]\n")
            except Exception as e:
                logf.write(f"[Error] {str(e)}\n".encode())

    print(f"\n✅ 所有case执行完毕，结果保存在：{stat_dir}")


