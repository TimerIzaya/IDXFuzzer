#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
multiprocess_main.py

并行执行 IDX Fuzzer：
- 主进程生成 IR → JS → HTML
- Pool 工作进程调用 content_shell 收集覆盖率
- 共享计数器统计新边、超时、总执行次数
- 每 60 秒打印一次运行统计信息并写入日志
- 种子保存：有趣 → corpus，超时 → crashes/timeout，异常/崩溃 → crashes
"""
from datetime import datetime
from pathlib import Path
import threading
from itertools import repeat
from multiprocessing import Pool, Value
import time, glob, numpy as np, shutil

import config
from config import *
from coverage.bitmap import GlobalEdgeBitmap
from execution import SharedStat
from execution.SharedStat import Stats
from execution.run_content_shell import CSExitStatus, run_content_shell
from fuzzer.stat_worker import stat_worker
from generator import gen_case
from tool.tool import count_files_in_dir, make_uid
from typing import Iterator

def run_one_case(case_path: str):
    global_bitmap_to_update = GlobalEdgeBitmap(create=False)

    html_path_abs = os.path.abspath(case_path)
    out_dir = os.path.dirname(html_path_abs)
    tmp_dir = os.path.join(out_dir, "chrome-tmp")
    bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")

    # 执行content_shell
    cs_exit_status = run_content_shell(html_path_abs)

    # 执行完去更新chromium自己的crash状态
    stat_pending_cnt = count_files_in_dir(os.path.join(out_dir, "pending"))
    stat_new_cnt = count_files_in_dir(os.path.join(out_dir, "new"))
    stat_completed_cnt = count_files_in_dir(os.path.join(out_dir, "completed"))
    stat_attachments_cnt = count_files_in_dir(os.path.join(out_dir, "attachments"))

    # 删除浏览器运行临时数据，处理覆盖率 
    shutil.rmtree(tmp_dir, ignore_errors=True)
    bin_files = glob.glob(bin_glob)

    # 小概率事件，冗余考虑，如果没覆盖率文件，那肯定执行不正常
    if not bin_files:
        cs_exit_status = CSExitStatus.OTHER

    new_edges = 0
    for cov_file in bin_files:
        new_edges += global_bitmap_to_update.update_from_file(cov_file)
        os.remove(cov_file)

    global_bitmap_to_update.close()

    # 新边入库 否则扔掉
    stat_mark_interesting = False
    if new_edges > 0:
        stat_mark_interesting = True
        cid = os.path.splitext(os.path.basename(case_path))[0]
        dst_dir = f"{CORPUS_ROOT}/{cid}"
        shutil.move(out_dir, dst_dir)
    else:
        shutil.rmtree(out_dir, ignore_errors=True)

    # report检测到的bug
    if stat_pending_cnt > 0 or stat_new_cnt > 0 or stat_completed_cnt > 0 or stat_attachments_cnt > 0:
        shutil.move(out_dir, CRASH_ROOT)

    # 语义错误 回来受罚
    if cs_exit_status is CSExitStatus.SEMANTIC_ERROR:
        shutil.move(out_dir, SEMANTIC_ROOT)

    # 不明愿意 回来研究
    if cs_exit_status is CSExitStatus.OTHER:
        shutil.move(out_dir, OTHER_ROOT)
    
    # 进程超时 闻所未闻
    stat_timeout = 0
    if cs_exit_status is CSExitStatus.PROCESS_TIMEOUT:
        stat_timeout = 1
        shutil.move(out_dir, TIMEOUT_ROOT)
        return
    
    # 同步统计线程
    Stats.update(
        timeout=stat_timeout,
        pending=stat_pending_cnt,
        is_new=stat_new_cnt,
        completed=stat_completed_cnt,
        attachments=stat_attachments_cnt,
        mark_interesting=stat_mark_interesting,
    )


# def run_one_case_for_cov(global_bitmap_name: str, case_path: str):
#     global_bitmap_to_update = GlobalEdgeBitmap(name=global_bitmap_name, create=False)
#     html_path_abs = os.path.abspath(case_path)
#     out_dir = os.path.dirname(html_path_abs)
#     tmp_dir = os.path.join(out_dir, "chrome-tmp")
#     bin_glob = os.path.join(out_dir, "sancov_bitmap_*.bin")
#
#     # 执行content_shell
#     run_content_shell(html_path_abs)
#     # 覆盖率处理
#     shutil.rmtree(tmp_dir, ignore_errors=True)
#     bin_files = glob.glob(bin_glob)
#     new_edges = 0
#     for cov_file in bin_files:
#         new_edges += global_bitmap_to_update.update_from_file(cov_file)
#         os.remove(cov_file)
#     global_bitmap_to_update.close()



# def iter_restore_cases(corpus_dir: str) -> Iterator[str]:
#     """
#     corpus_dir/
#       ├── 0000eb8a/
#       │   └── 0000eb8a.html
#       ├── 0000f12c/
#       │   └── 0000f12c.html
#       └── ...
#
#     产出每个 case 的 html 路径；若精确命名不存在，则回退到该目录下找到的第一个 *.html。
#     """
#     for entry in os.scandir(corpus_dir):
#         if not entry.is_dir():
#             continue
#
#         case_id = entry.name
#         exact = os.path.join(entry.path, f"{case_id}.html")
#
#         if os.path.exists(exact):
#             yield exact
#             continue
#
#         # 若没有 .html 就跳过该 case，可按需打印日志
#         else:
#             print(f"[restore] skip: no html in {entry.path}")


# # restore之前拷贝一份
# def archive_result_copy():
#     src = Path("result").resolve()
#     dst_root = src.parent / "history"
#     dst_root.mkdir(parents=True, exist_ok=True)
#
#     ts = datetime.now().strftime("%Y%m%d%H%M%S")
#     dst = dst_root / f"result_{ts}"
#     i = 1
#     while dst.exists():
#         dst = dst_root / f"result_{ts}_{i}"
#         i += 1
#
#     shutil.copytree(src, dst)
#     print(f"copied to: {dst}")

def gen_run_one_case():
    cid = make_uid()
    case_path = gen_case(cid)
    run_one_case(case_path)


# ---------- 初始化各种文件夹 ----------
def init_output_dirs() -> None:
    folder_list = [CORPUS_ROOT, CRASH_ROOT, TIMEOUT_ROOT, OTHER_ROOT, SEMANTIC_ROOT]
    for path in folder_list:
        # restore模式确保corpus存在，不要动它
        if config.MODE_RESTORE and path is CORPUS_ROOT:
            os.makedirs(path, exist_ok=True)
            # 确保这个目录里的格式都是对的 corpus/cid/cid.html 有些case因为中断可能并没有生成完毕
            path = Path(path)  # 改成你的目录
            for d in path.iterdir():
                case = d / f"{d.name}.html"
                if not case.is_file():
                    shutil.rmtree(d)
            continue

        # 其余模式，先删除后创建
        if os.path.exists(path):
            shutil.rmtree(path, ignore_errors=True)
        os.makedirs(path, exist_ok=True)
        print(f"recreate path: {path}")
    print("[*] Initialized output directories.]")





if __name__ == "__main__":
    init_output_dirs()

    global_bitmap = GlobalEdgeBitmap(create=True)
    Stats.init(create=True)

    # 统计线程启动
    threading.Thread(
        target=stat_worker,
        args=(global_bitmap, time.time()),
        daemon=True
    ).start()

    while True:
        gen_run_one_case()



    # if MODE_RESTORE:
    #     # 先归档上一轮跑的结果
    #     archive_result_copy()
    #     config.MODE_CUR = "restore"
    #     restore_pool = Pool(
    #         config.PROCESS_COUNT,
    #         initializer=init_exec_worker,
    #         initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
    #                 pending_cnt_counter, new_cnt_counter, completed_cnt_counter, attachment_cnt_counter),
    #         maxtasksperchild=100, 
    #     )
    #     config.MODE_PROGRESS = 0
    #     try:        
    #         fn = partial(run_one_case_for_cov, global_bitmap.name())
    #         iter = iter_restore_cases(config.CORPUS_ROOT)
    #         for _ in restore_pool.imap_unordered(fn, iter, chunksize=1):
    #             config.MODE_PROGRESS += 1
    #     except KeyboardInterrupt:
    #         print("Interrupted by user.")
    #     finally:
    #         restore_pool.terminate()
    #         restore_pool.join()
    #         config.MODE_RESTORE = False
    #         print(f"[*] Restore pool exited gracefully, restore corpus size: {config.MODE_PROGRESS}]")


    # # 生成阶段进程池
    # config.MODE_CUR = "generation"
    # gen_pool = Pool(
    #     config.PROCESS_COUNT,
    #     initializer=init_exec_worker,
    #     initargs=(total_edge_counter, timeout_counter, total_exec_counter, last_interesting_counter,
    #               pending_cnt_counter, new_cnt_counter, completed_cnt_counter, attachment_cnt_counter),
    #     maxtasksperchild=100,  # 防止长期运行内存/句柄膨胀
    # )
    # try:        
    #     # 无限投喂生成任务
    #     for _ in gen_pool.imap_unordered(gen_run_one_case, repeat(global_bitmap.name()), chunksize=1):
    #         pass
    # except KeyboardInterrupt:
    #     print("Interrupted by user.")
    # finally:
    #     gen_pool.terminate()
    #     gen_pool.join()
    #     global_bitmap.close()
    #     global_bitmap.unlink()
    #     print("[*] IDX Fuzzer exited gracefully.]")
