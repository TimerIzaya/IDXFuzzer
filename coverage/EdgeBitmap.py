import subprocess

import numpy as np
from pathlib import Path
from typing import Union, List


class EdgeBitmap:
    """
    全局覆盖率 bitmap：
    - 每个字节代表一条边（edge）是否被命中（非零即命中）
    - 默认大小 2^24 = 16 MiB，对应 SanCov 常见上限，可自行调整
    """
    def __init__(self, size: int = 1 << 24) -> None:
        self.size = size
        # 累积 bitmap：0 = 未命中，非 0 = 已命中
        self._global = np.zeros(size, dtype=np.uint8)

    # ---------- 核心接口 ---------- #
    def update(self, data: Union[bytes, bytearray, np.ndarray]) -> int:
        """
        将一次执行得到的 bitmap (bytes/array) 合并到全局，
        返回“新命中”的边数（之前为 0，现在非 0）。
        """
        curr = self._as_np(data)

        # 仅比较到最小长度，超出部分忽略 / 填 0
        n = min(curr.size, self.size)
        slice_global = self._global[:n]
        slice_curr   = curr[:n]

        # 找到本次命中新、而过去没命中的边
        new_mask = (slice_curr != 0) & (slice_global == 0)
        new_edges = int(np.count_nonzero(new_mask))

        # 写回累积 bitmap（可选：只写 new_mask 位置提高速度）
        slice_global[new_mask] = 1

        return new_edges

    def reset(self) -> None:
        """清空全局 bitmap（重新开始统计）。"""
        self._global.fill(0)

    # ---------- 辅助方法 ---------- #
    def _as_np(self, data: Union[bytes, bytearray, np.ndarray]) -> np.ndarray:
        """把各种输入安全地转成 uint8 NumPy 数组（零拷贝）。"""
        if isinstance(data, np.ndarray):
            if data.dtype != np.uint8:
                raise TypeError("np.ndarray 必须是 dtype=np.uint8")
            return data
        if not isinstance(data, (bytes, bytearray, memoryview)):
            raise TypeError("data 必须是 bytes/bytearray/np.ndarray")
        return np.frombuffer(data, dtype=np.uint8)

    # ---------- I/O 便利接口 ---------- #
    def update_from_file(self, path: Union[str, Path]) -> int:
        """直接读取 .bin 文件并 update；返回新增边数。"""
        with open(path, "rb") as f:
            return self.update(f.read())

    def save(self, path: Union[str, Path]) -> None:
        """把当前全局 bitmap 持久化到文件（可选）。"""
        with open(path, "wb") as f:
            f.write(self._global.tobytes())

    def run_and_update_from_html(self, html_path: str, run_cov_script: str = "coverage/run_cov.sh") -> List[int]:
        """
        调用 run_cov.sh 执行 HTML 文件，
        仅当脚本因 timeout 正常退出（exit code 124）时，处理 /tmp 中生成的 bin 文件。
        其他退出码视为异常，返回 [0, 0]。
        """
        tmp_dir = Path("/tmp")
        before = set(tmp_dir.iterdir())

        result = subprocess.run([run_cov_script, html_path], capture_output=True)

        if result.returncode != 0:
            print(f"[!] 脚本未按预期 timeout 退出（code={result.returncode}）")
            print(result.stderr.decode().strip())
            return [0, 0]

        after = set(tmp_dir.iterdir())
        new_bins = [f for f in (after - before) if f.suffix == ".bin"]
        new_bins.sort(key=lambda f: f.stat().st_mtime)

        if len(new_bins) < 2:
            print(f"[!] 脚本生成的 bin 文件不足两个：{new_bins}")
            return [0, 0]

        new_edges = [self.update_from_file(str(f)) for f in new_bins[:2]]
        return new_edges

# ------------------ 用法示例 ------------------ #
if __name__ == "__main__":
    bm = EdgeBitmap()  # 默认 16 MiB，可 EdgeBitmap(size=1<<20) 自定义
    #
    # for i in range(1, 6):
    #     new1 = bm.update_from_file(f"bin/{i}.bin")
    #     print(f"Run-1 新增边: {new1}")

    newEdgeCnt = bm.run_and_update_from_html("/timer/IDXFuzzer/corpus/0/0.html", run_cov_script="/timer/IDXFuzzer/coverage/run_cov.sh")
    print(newEdgeCnt)


    newEdgeCnt = bm.run_and_update_from_html("/timer/IDXFuzzer/corpus/1/1.html", run_cov_script="/timer/IDXFuzzer/coverage/run_cov.sh")
    print(newEdgeCnt)