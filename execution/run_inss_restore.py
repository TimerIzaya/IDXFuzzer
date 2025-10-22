# import shutil
# from datetime import datetime
# from pathlib import Path
# from typing import Iterator
#
# from config import *
#
# def iter_restore_cases(corpus_dir: str) -> Iterator[str]:
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
#
#
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
#
#
#
# def cov_worker_main(worker_id: int, cpu_id: int, stop_event: Event, q: Queue):
#     print(f"[cov-worker {worker_id}] pid={os.getpid()} pin -> cpu {cpu_id}")
#     ok = set_affinity_for_current_process(cpu_id)
#     if not ok:
#         print(f"[cov-worker {worker_id}] WARN: cpu affinity failed (continue)")
#
#     try:
#         Stats.init(create=False)
#     except Exception:
#         pass
#
#     while not stop_event.is_set():
#         try:
#             item = q.get(timeout=0.5)
#         except Exception:
#             continue
#         if item is None:
#             q.task_done()
#             break
#         try:
#             # 关键：仍然用 run_one_case；恢复模式由 config.MODE_RESTORE 控制，不改这里
#             run_one_case(item)
#         except Exception as e:
#             print(f"[cov-worker {worker_id}] error: {e}")
#         finally:
#             q.task_done()
#
#     print(f"[cov-worker {worker_id}] exit.")
#
#
# def start_cov_batch(num_tasks: int,
#                     num_workers: int,
#                     start_cpu: int) -> None:
#     """
#     执行 run_one_case 共 num_tasks 次，平摊到 num_workers 个绑定 CPU 的 worker。
#     - 若 config.MODE_RESTORE=True：从 CORPUS_ROOT 枚举现有 {cid}/{cid}.html（不改 corpus）
#     - 若 config.MODE_RESTORE=False：先 gen_case N 个，再跑（会触发正常入库/清理）
#     """
#     if num_tasks <= 0 or num_workers <= 0:
#         print("[cov] nothing to do.")
#         return
#
#     cpus = choose_cpus(num_workers, start_cpu)
#     stop_event = Event()
#     q: Queue = Queue(maxsize=max(64, num_workers * 4))
#
#     if config.MODE_RESTORE:
#         print(f"[cov] RESTORE mode: enqueue up to {num_tasks} cases from CORPUS_ROOT={CORPUS_ROOT}")
#         for html_path in iter_restore_cases(CORPUS_ROOT, limit=num_tasks):
#             q.put(html_path)
#     else:
#         print(f"[cov] GENERATE mode: enqueue {num_tasks} fresh cases")
#         for _ in range(num_tasks):
#             cid = make_uid()
#             html_path = gen_case(cid)
#             q.put(html_path)
#
#     procs: List[Process] = []
#     for i in range(num_workers):
#         p = Process(
#             target=cov_worker_main,
#             args=(i, cpus[i], stop_event, q),
#             name=f"idxf-cov-worker-{i}",
#         )
#         p.start()
#         procs.append(p)
#         print(f"[cov] started worker {i} pid={p.pid} cpu={cpus[i]}")
#
#     for _ in range(num_workers):
#         q.put(None)
#
#     try:
#         q.join()
#     except KeyboardInterrupt:
#         print("[cov] KeyboardInterrupt -> stopping workers")
#     finally:
#         stop_event.set()
#         for p in procs:
#             p.join(timeout=5.0)
#             if p.is_alive():
#                 p.terminate()
#                 p.join(2.0)
#         print("[cov] batch done.")
#
#
