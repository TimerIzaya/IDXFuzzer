#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Shared counters demo: 多实例并发安全累加（共享内存 + 文件锁）

全局指标（全部 uint64）：
- timeout_cnt
- total_exec_cnt
- last_interesting_exec    # 语义：最近一次“产生新边”的全局执行序号（seq）
- pending_cnt
- new_cnt
- completed_cnt
- attachments_cnt

注意：
- total_edges 不在此累加；请直接从 GlobalEdgeBitmap 快照数位获取。
- 锁用 /dev/shm 的文件锁；持锁区仅几次 u64 加法/赋值，开销可忽略。
"""

from multiprocessing import shared_memory, Process
from contextlib import contextmanager
from time import sleep, time
import os, sys, fcntl

# ===== 配置 =====
SHM_NAME   = os.environ.get("IDXF_STAT_SHM", "IDXF_STAT_SHM")
LOCK_PATH  = os.environ.get("IDXF_STAT_LOCK", "/dev/shm/idxf-stat.lock")

# 7 个计数；留 1 个位置做版本/保留，凑整 8×8B = 64B，对齐友好
IDX_VERSION              = 0
IDX_TIMEOUT_CNT          = 1
IDX_TOTAL_EXEC_CNT       = 2
IDX_LAST_INTERESTING_SEQ = 3
IDX_PENDING_CNT          = 4
IDX_NEW_CNT              = 5
IDX_COMPLETED_CNT        = 6
IDX_ATTACHMENTS_CNT      = 7

NUM_U64 = 8
BYTES   = NUM_U64 * 8  # 64B

class SharedStat:
    """
    共享统计对象：在共享内存里放 8 个 uint64 字段。
    通过文件锁实现跨独立进程互斥，保证 RMW（读-改-写）原子性。
    """
    def __init__(self, name: str = SHM_NAME, create: bool | None = None):
        """
        create=True  : 尝试创建共享段；已存在会抛 FileExistsError
        create=False : 只附着
        create=None  : 先尝试创建，不行再附着（推荐）
        """
        self.name = name
        self._lock_fd = None

        if create is True:
            self.shm = shared_memory.SharedMemory(name=name, create=True, size=BYTES)
            self._init_memory_zero()
        elif create is False:
            self.shm = shared_memory.SharedMemory(name=name, create=False)
        else:
            try:
                self.shm = shared_memory.SharedMemory(name=name, create=True, size=BYTES)
                self._init_memory_zero()
            except FileExistsError:
                self.shm = shared_memory.SharedMemory(name=name, create=False)

        # 作为 uint64 视图访问
        self._u64 = memoryview(self.shm.buf).cast('Q')

        # 准备全局锁文件
        os.makedirs(os.path.dirname(LOCK_PATH), exist_ok=True)
        self._lock_fd = os.open(LOCK_PATH, os.O_CREAT | os.O_RDWR, 0o666)

    def _init_memory_zero(self):
        mv = memoryview(self.shm.buf)
        mv[:] = b"\x00" * len(mv)
        mv.cast('Q')[IDX_VERSION] = 1
        # 关键：显式释放临时 memoryview
        mv.release()

    @contextmanager
    def _locked(self):
        """跨进程互斥：进入临界区"""
        fcntl.flock(self._lock_fd, fcntl.LOCK_EX)
        try:
            yield
        finally:
            fcntl.flock(self._lock_fd, fcntl.LOCK_UN)

    # ===== 基础操作 =====
    def inc(self, idx: int, delta: int = 1) -> int:
        """对指定字段加 delta，返回新值（在锁内调用）"""
        self._u64[idx] += delta
        return int(self._u64[idx])

    def get(self, idx: int) -> int:
        return int(self._u64[idx])

    def set_value(self, idx: int, value: int):
        self._u64[idx] = value

    # ===== 语义化 APIs（建议用这些） =====
    def record_exec(
        self,
        timeout: int = 0,
        pending: int = 0,
        is_new: int = 0,
        completed: int = 0,
        attachments: int = 0,
        mark_interesting: bool = False,
    ):
        """
        在“一个 case 执行完成”时调用一次。
        - total_exec_cnt += 1（得到全局执行序号 seq）
        - 其它计数按入参累加（非负整数）
        - 若 mark_interesting=True：last_interesting_exec = seq
        """
        # —— 入参校验（防止意外传负数/非整型）——
        for name, val in {
            "timeout": timeout, "pending": pending,
            "is_new": is_new, "completed": completed,
            "attachments": attachments,
        }.items():
            if not isinstance(val, int) or val < 0:
                raise ValueError(f"{name} must be a non-negative int, got {val!r}")

        with self._locked():
            seq = self.inc(IDX_TOTAL_EXEC_CNT, 1)

            if timeout:
                self.inc(IDX_TIMEOUT_CNT, timeout)
            if pending:
                self.inc(IDX_PENDING_CNT, pending)
            if is_new:
                self.inc(IDX_NEW_CNT, is_new)
            if completed:
                self.inc(IDX_COMPLETED_CNT, completed)
            if attachments:
                self.inc(IDX_ATTACHMENTS_CNT, attachments)

            if mark_interesting:
                self.set_value(IDX_LAST_INTERESTING_SEQ, seq)

    # 读取快照（无锁读取，展示用足够）
    def snapshot(self) -> dict:
        arr = [int(v) for v in self._u64]
        return {
            "version":               arr[IDX_VERSION],
            "timeout_cnt":           arr[IDX_TIMEOUT_CNT],
            "total_exec_cnt":        arr[IDX_TOTAL_EXEC_CNT],
            "last_interesting_exec": arr[IDX_LAST_INTERESTING_SEQ],
            "pending_cnt":           arr[IDX_PENDING_CNT],
            "new_cnt":               arr[IDX_NEW_CNT],
            "completed_cnt":         arr[IDX_COMPLETED_CNT],
            "attachments_cnt":       arr[IDX_ATTACHMENTS_CNT],
        }

    def close(self):
        # 先关锁文件（可选顺序），重要的是先释放 memoryview
        if self._lock_fd is not None:
            os.close(self._lock_fd)
            self._lock_fd = None

        # 关键：释放长期持有的 memoryview 视图
        if hasattr(self, "_u64") and self._u64 is not None:
            try:
                self._u64.release()
            except AttributeError:
                # 兼容极少数 Python 版本；没有 release 就 del
                pass
            self._u64 = None

        # 最后再 close 共享内存
        self.shm.close()

    def unlink(self):
        try:
            self.shm.unlink()
        except FileNotFoundError:
            pass




STAT = None

def init_stats(create: bool = True):
    """主进程在程序启动时调用一次。create=True 会清零计数。"""
    global STAT
    if STAT is None:
        STAT = SharedStat(SHM_NAME, create=create)

def get_stats() -> SharedStat:
    """在任何地方拿当前共享统计实例（同一机器上所有进程共享内存）。"""
    global STAT
    if STAT is None:
        # 子进程或外部工具 attach（不清零）
        STAT = SharedStat(SHM_NAME, create=None)
    return STAT

def close_stats():
    global STAT
    if STAT is not None:
        STAT.close()
        STAT = None

def unlink_stats():  # 只有“最后清理者”调用；通常主进程退出前做
    try:
        s = SharedStat(SHM_NAME, create=False)
        s.unlink()
        s.close()
    except FileNotFoundError:
        pass


