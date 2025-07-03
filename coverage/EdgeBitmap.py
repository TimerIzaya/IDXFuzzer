import os
import time
import glob
import subprocess
from pathlib import Path
from typing import List, Union

import numpy as np

class EdgeBitmap:
    def __init__(self, size: int = 1 << 24) -> None:
        self.size = size
        self._global = np.zeros(size, dtype=np.uint8)

    def update(self, data: Union[bytes, bytearray, np.ndarray]) -> int:
        curr = self._as_np(data)
        n = min(curr.size, self.size)
        slice_global = self._global[:n]
        slice_curr = curr[:n]

        new_mask = (slice_curr != 0) & (slice_global == 0)
        new_edges = int(np.count_nonzero(new_mask))
        slice_global[new_mask] = 1
        return new_edges

    def _as_np(self, data: Union[bytes, bytearray, np.ndarray]) -> np.ndarray:
        if isinstance(data, np.ndarray):
            if data.dtype != np.uint8:
                raise TypeError("np.ndarray 必须是 dtype=np.uint8")
            return data
        if not isinstance(data, (bytes, bytearray, memoryview)):
            raise TypeError("data 必须是 bytes/bytearray/np.ndarray")
        return np.frombuffer(data, dtype=np.uint8)

    def update_from_file(self, path: Union[str, Path]) -> int:
        with open(path, "rb") as f:
            return self.update(f.read())



if __name__ == "__main__":  

    html_path = "../corpus/0.0.html"
    bm = EdgeBitmap()
    print(f"[0] 执行测试页面: {html_path}")
    t0 = time.time()
    new_edges = bm.run_and_update_from_html(html_path)
    t1 = time.time()
    print(f"[1] 新增边数统计: {new_edges}")
    print(f"[2] 耗时: {(t1-t0)*1000:.2f} ms")
