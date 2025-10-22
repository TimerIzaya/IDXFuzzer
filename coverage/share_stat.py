#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
共享计数（多实例并发安全，SharedMemory + 文件锁）
对外只暴露四个核心操作（单例门面）：
- Stats.init(create=True)         # 初始化（主进程调用一次；create=True 会清零/新建共享段）
- Stats.update(...)               # 更新一条执行统计（安全累加 + 可选标记 interesting）
- Stats.get() -> dict             # 获取快照（无锁读取，展示/监控用）
- Stats.close()                   # 关闭本进程句柄（不删除共享段）

如果你需要“删除共享段”的能力，可额外调用：Stats.unlink() 由最后清理者执行。
"""

from multiprocessing import shared_memory
from contextlib import contextmanager
import os, fcntl

# ===== 环境配置（可用环境变量覆盖）=====
SHM_NAME   = os.environ.get("BITMAP_SHM_NAME", "IDXF_STAT_SHM")
LOCK_PATH  = os.environ.get("BITMAP_LOCK_PATH", "/dev/shm/idxf-stat.lock")

# ===== 字段布局：8 × uint64 = 64B =====
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


# ================= 内部实现类 =================
class _SharedStat:
    """内部实现：真正操作共享内存与文件锁。"""
    def __init__(self, name: str = SHM_NAME, create: bool | None = None):
        self.name = name
        self._lock_fd = None

        if create is True:
            self.shm = shared_memory.SharedMemory(name=name, create=True, size=BYTES)
            self._init_memory_zero()
        elif create is False:
            self.shm = shared_memory.SharedMemory(name=name, create=False)
        else:
            # create=None：先尝试创建，不行则附着
            try:
                self.shm = shared_memory.SharedMemory(name=name, create=True, size=BYTES)
                self._init_memory_zero()
            except FileExistsError:
                self.shm = shared_memory.SharedMemory(name=name, create=False)

        # 作为 uint64 视图访问（'Q' = unsigned long long）
        self._u64 = memoryview(self.shm.buf).cast('Q')

        # 准备全局锁文件
        os.makedirs(os.path.dirname(LOCK_PATH), exist_ok=True)
        self._lock_fd = os.open(LOCK_PATH, os.O_CREAT | os.O_RDWR, 0o666)

    def _init_memory_zero(self):
        mv = memoryview(self.shm.buf)
        mv[:] = b"\x00" * len(mv)
        mv.cast('Q')[IDX_VERSION] = 1  # 版本占位
        mv.release()

    @contextmanager
    def _locked(self):
        fcntl.flock(self._lock_fd, fcntl.LOCK_EX)
        try:
            yield
        finally:
            fcntl.flock(self._lock_fd, fcntl.LOCK_UN)

    # ===== 基础 RMW 操作（需在锁内调用）=====
    def _inc(self, idx: int, delta: int = 1) -> int:
        self._u64[idx] += delta
        return int(self._u64[idx])

    def _set(self, idx: int, value: int) -> None:
        self._u64[idx] = value

    # ===== 语义化更新 =====
    def record_exec(
        self,
        timeout: int = 0,
        pending: int = 0,
        is_new: int = 0,
        completed: int = 0,
        attachments: int = 0,
        mark_interesting: bool = False,
    ):
        # 参数校验（非负整数）
        for name, val in {
            "timeout": timeout, "pending": pending, "is_new": is_new,
            "completed": completed, "attachments": attachments,
        }.items():
            if not isinstance(val, int) or val < 0:
                raise ValueError(f"{name} must be a non-negative int, got {val!r}")

        with self._locked():
            seq = self._inc(IDX_TOTAL_EXEC_CNT, 1)
            if timeout:      self._inc(IDX_TIMEOUT_CNT, timeout)
            if pending:      self._inc(IDX_PENDING_CNT, pending)
            if is_new:       self._inc(IDX_NEW_CNT, is_new)
            if completed:    self._inc(IDX_COMPLETED_CNT, completed)
            if attachments:  self._inc(IDX_ATTACHMENTS_CNT, attachments)
            if mark_interesting:
                self._set(IDX_LAST_INTERESTING_SEQ, seq)

    # ===== 快照读取（无锁，展示足够）=====
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

    # ===== 资源管理 =====
    def close(self):
        if self._lock_fd is not None:
            os.close(self._lock_fd)
            self._lock_fd = None
        if hasattr(self, "_u64") and self._u64 is not None:
            try:
                self._u64.release()
            except AttributeError:
                pass
            self._u64 = None
        self.shm.close()

    def unlink(self):
        try:
            self.shm.unlink()
        except FileNotFoundError:
            pass


# ================== 单例门面 ==================
class Stats:
    """对外门面：四个核心操作 + 可选 unlink。"""
    _inst: _SharedStat | None = None

    @classmethod
    def _ensure(cls):
        if cls._inst is None:
            # 子进程/外部工具首次使用时懒附着；不清零
            cls._inst = _SharedStat(SHM_NAME, create=None)
        return cls._inst

    # ---- 1) 初始化（主进程调用一次）----
    @classmethod
    def init(cls, create: bool = True):
        """
        create=True：新建或清零共享段（主进程启动时调用一次）
        create=False：仅附着（不清零）
        """
        if cls._inst is None:
            cls._inst = _SharedStat(SHM_NAME, create=create)
        return cls

    # ---- 2) 更新（安全累加 / 标记 interesting）----
    @classmethod
    def update(
        cls,
        *,
        timeout: int = 0,
        pending: int = 0,
        is_new: int = 0,
        completed: int = 0,
        attachments: int = 0,
        mark_interesting: bool = False,
    ):
        inst = cls._ensure()
        inst.record_exec(
            timeout=timeout,
            pending=pending,
            is_new=is_new,
            completed=completed,
            attachments=attachments,
            mark_interesting=mark_interesting,
        )

    # ---- 3) 获取（快照字典）----
    @classmethod
    def get(cls) -> dict:
        inst = cls._ensure()
        return inst.snapshot()

    # ---- 4) 关闭（本进程句柄）----
    @classmethod
    def close(cls):
        if cls._inst is not None:
            cls._inst.close()
            cls._inst = None

    # （可选）删除共享段：最后清理者调用
    @classmethod
    def unlink(cls):
        try:
            inst = _SharedStat(SHM_NAME, create=False)
            inst.unlink()
            inst.close()
        except FileNotFoundError:
            pass

if __name__ == "__main__":
    # 仅主进程调用一次；会清零/创建共享段
    Stats.init(create=True)

    # ……在任意进程/子进程里更新（直接调用即可，懒附着）
    Stats.update(is_new=1, mark_interesting=True)
    Stats.update(timeout=1)
    Stats.update(pending=2, attachments=1)

    # 读取监控快照
    print(Stats.get())  # {'version': 1, 'timeout_cnt': ..., ...}

    # 本进程结束时释放句柄
    Stats.close()

    # 如果你是“最后清理者”，需要清理共享段：
    # Stats.unlink()
