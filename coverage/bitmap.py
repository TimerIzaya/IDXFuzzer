import fcntl, os, numpy as np
from multiprocessing import shared_memory as shm

from config import EDGE_TOTAL_COUNT, BITMAP_SHM_NAME
import config  # 固定名字与大小
# 若你还没定义固定名，在 config 里加一行：BITMAP_SHM_NAME = "IDXF_GLOBAL_BITMAP"


class GlobalEdgeBitmap:
    def __init__(self, create: bool = True):
        """
        create=True  -> 仅尝试新建（已存在会抛 FileExistsError）
        create=False -> 仅附着（不存在会抛 FileNotFoundError）
        """
        self.size = EDGE_TOTAL_COUNT
        self.created = False

        if create:
            try:
                # 尝试新建
                self.shm = shm.SharedMemory(create=True, size=self.size, name=BITMAP_SHM_NAME)
                self.created = True
            except FileExistsError:
                # 说明上一次异常退出遗留；先删后建
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

        self.bitmap = np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)

        # 跨进程文件锁
        os.makedirs(os.path.dirname(config.BITMAP_LOCK_PATH), exist_ok=True)
        self._lock_fd = os.open(config.BITMAP_LOCK_PATH, os.O_CREAT | os.O_RDWR, 0o666)

    def _lock(self):   fcntl.flock(self._lock_fd, fcntl.LOCK_EX)
    def _unlock(self): fcntl.flock(self._lock_fd, fcntl.LOCK_UN)

    # 只把有触发的字节置 1，永不写 0，避免回退
    def update_from_file(self, path: str) -> int:
        with open(path, "rb") as f:
            raw = f.read()
        usable = min(len(raw), self.size)
        data = np.frombuffer(raw, dtype=np.uint8, count=usable)
        pid = os.getpid()
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


    def close(self): self.shm.close()
    def unlink(self): self.shm.unlink()   # 只让“最后清理者”调用
    def name(self):  return BITMAP_SHM_NAME   # 固定名
    def get_array(self): return self.bitmap.copy()
