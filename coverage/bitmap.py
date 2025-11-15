import fcntl
import os
import time
import numpy as np
from multiprocessing import shared_memory as shm

from config import EDGE_TOTAL_COUNT, BITMAP_SHM_NAME
import config
from tool.log import log, format_s_to_ms


class GlobalEdgeBitmap:
    """
    进程内单例：
      - 第一次调用 GlobalEdgeBitmap(create=...) 时真正初始化
      - 后续调用 GlobalEdgeBitmap(create=...) 都返回同一个实例，忽略新的 create 参数
    """

    _instance = None
    _instance_create_flag = None
    _instance_lock = None  # 延迟创建，避免无必要的 threading 导入

    def __new__(cls, create: bool = True):
        # 延迟导入 threading，避免在某些受限环境里出幺蛾子
        if cls._instance_lock is None:
            import threading
            cls._instance_lock = threading.Lock()

        if cls._instance is None:
            with cls._instance_lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
                    cls._instance_create_flag = create

        return cls._instance

    def __init__(self, create: bool = True):
        # 单例已经初始化过就直接返回
        if getattr(self, "_initialized", False):
            return

        # 之后真正使用的是第一次调用时记录下来的标志
        create = type(self)._instance_create_flag

        self.size = EDGE_TOTAL_COUNT
        self.created = False

        if create:
            try:
                # 尝试新建
                self.shm = shm.SharedMemory(create=True, size=self.size, name=BITMAP_SHM_NAME)
                self.created = True
            except FileExistsError:
                # 上一次异常退出遗留；先删后建
                try:
                    shm.SharedMemory(name=BITMAP_SHM_NAME).unlink()
                except FileNotFoundError:
                    pass
                self.shm = shm.SharedMemory(create=True, size=self.size, name=BITMAP_SHM_NAME)
                self.created = True

            # 新建时清零
            np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)[:] = 0
        else:
            # 严格附着；不存在就报错，让调用方知道要先创建
            self.shm = shm.SharedMemory(name=BITMAP_SHM_NAME, create=False)

        # numpy 视图
        self.bitmap = np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)

        # 跨进程文件锁
        os.makedirs(os.path.dirname(config.BITMAP_LOCK_PATH), exist_ok=True)
        self._lock_fd = os.open(config.BITMAP_LOCK_PATH, os.O_CREAT | os.O_RDWR, 0o666)

        self._initialized = True

    # ---------- 锁封装 ----------

    def _lock(self):
        fcntl.flock(self._lock_fd, fcntl.LOCK_EX)

    def _unlock(self):
        fcntl.flock(self._lock_fd, fcntl.LOCK_UN)

    # ---------- 对外接口 ----------

    # 只把有触发的字节置 1，永不写 0，避免回退
    def update_from_file(self, path: str) -> int:
        with open(path, "rb") as f:
            raw = f.read()
        usable = min(len(raw), self.size)
        data = np.frombuffer(raw, dtype=np.uint8, count=usable)

        self._lock()
        try:
            ones = (data != 0)
            if not np.any(ones):
                return 0

            tgt = self.bitmap[:usable]
            was_zero = (tgt[ones] == 0)
            new_bits = int(was_zero.sum())
            tgt[ones] = 1
            return new_bits
        finally:
            self._unlock()

    def close(self):
        # 先把 numpy view 干掉，不然 SharedMemory.close() 会说还有 exported pointers
        if hasattr(self, "bitmap") and self.bitmap is not None:
            del self.bitmap

        if hasattr(self, "shm") and self.shm is not None:
            self.shm.close()

        # 关锁文件 fd
        if hasattr(self, "_lock_fd") and self._lock_fd is not None:
            try:
                os.close(self._lock_fd)
            except OSError:
                pass
            self._lock_fd = None

    def unlink(self):
        """只让创建者删底层共享内存。删完后可以重新 new 一个新的单例。"""
        if self.created and hasattr(self, "shm") and self.shm is not None:
            self.shm.unlink()
        # 重置单例状态，允许后面重新创建
        type(self)._instance = None
        type(self)._instance_create_flag = None
        self._initialized = False

    def name(self):
        return BITMAP_SHM_NAME

    def get_array(self):
        # 返回一个拷贝，避免外面直接改共享数组
        return self.bitmap.copy()
