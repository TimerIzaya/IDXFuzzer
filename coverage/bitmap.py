import numpy as np
import multiprocessing.shared_memory as shm

class GlobalEdgeBitmap:
    def __init__(self, name=None, size=1 << 24, create=True):
        self.size = size
        if create:
            self.shm = shm.SharedMemory(create=True, size=self.size)
        else:
            self.shm = shm.SharedMemory(name=name)
        self.bitmap = np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)

    def update_from_file(self, path: str) -> int:
        with open(path, "rb") as f:
            raw = f.read()
            if len(raw) > self.size:
                raise ValueError(f"bin too large: {len(raw)} > {self.size}")
            data = np.frombuffer(raw, dtype=np.uint8)
        before = np.count_nonzero(self.bitmap)
        np.maximum(self.bitmap[:len(data)], data, out=self.bitmap[:len(data)])
        return np.count_nonzero(self.bitmap) - before

    def close(self): self.shm.close()
    def unlink(self): self.shm.unlink()
    def name(self): return self.shm.name
    def get_array(self): return self.bitmap.copy()
