import numpy as np
import multiprocessing.shared_memory as shm

from config import EDGE_TOTAL_COUNT


class GlobalEdgeBitmap:
    def __init__(self, name=None, size= EDGE_TOTAL_COUNT, create=True):
        self.size = size
        if create:
            self.shm = shm.SharedMemory(create=True, size=self.size)
        else:
            self.shm = shm.SharedMemory(name=name)
        self.bitmap = np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)

    # def update_from_file(self, path: str) -> int:
    #     with open(path, "rb") as f:
    #         raw = f.read()
    #         if len(raw) > self.size:
    #             raise ValueError(f"bin too large: {len(raw)} > {self.size}")
    #         data = np.frombuffer(raw, dtype=np.uint8)
    #     before = np.count_nonzero(self.bitmap)
    #     np.maximum(self.bitmap[:len(data)], data, out=self.bitmap[:len(data)])
    #     return np.count_nonzero(self.bitmap) - before


    # 高位截取，只要idb的边数量
    def update_from_file(self, path: str) -> int:
        with open(path, "rb") as f:
            raw = f.read()
        usable = min(len(raw), self.size)  # ← 只取前 self.size 字节
        data = np.frombuffer(raw, dtype=np.uint8, count=usable)
        before = np.count_nonzero(self.bitmap)
        np.maximum(self.bitmap[:usable], data, out=self.bitmap[:usable])
        return np.count_nonzero(self.bitmap) - before

    def close(self): self.shm.close()
    def unlink(self): self.shm.unlink()
    def name(self): return self.shm.name
    def get_array(self): return self.bitmap.copy()
