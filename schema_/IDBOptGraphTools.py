# schema_/IDBOptGraphTools.py
from __future__ import annotations
from typing import Any, List, Sequence, Set

class IDBOptGraphTools:
    """
    只依赖一个 Operation 列表（比如你的 ALL_OPERATIONS）。
    提供：
      - start_nodes():  depOps == [] 且 incOps != [] 的起点
      - paths_from(op, max_depth): 沿 incOps 的所有简单路径（去环），长度 ≤ max_depth（含起点）

    额外提供一个不改源文件的加载器：
      - from_file_sanitized(path): 读取 .py 文本，内存里去掉“定义行的结尾逗号”，
        再 exec 成模块，取其中的 ALL_OPERATIONS 构建图。
    """

    # ======== 构造 ========
    def __init__(self, ops: Sequence[Any]):
        def _as_op(x):  # 如果有人写成了单元素 tuple，这里解包
            return x[0] if isinstance(x, tuple) and len(x) == 1 else x

        self.ops: List[Any] = [ _as_op(o) for o in ops ]
        for o in self.ops:  # 兜底
            if not hasattr(o, "depOps") or o.depOps is None: o.depOps = []
            if not hasattr(o, "incOps") or o.incOps is None: o.incOps = []

    @classmethod
    def from_all(cls, all_operations: Sequence[Any]) -> "IDBOptGraphTools":
        return cls(all_operations)

    @classmethod
    def from_file_sanitized(cls, py_path: str) -> "IDBOptGraphTools":
        """
        不改磁盘文件。读取源码文本，在内存里修正“定义行末尾逗号导致的 tuple”问题，
        然后 exec 到一个临时模块里，取 ALL_OPERATIONS。
        """
        import io, os, types, re, sys

        with io.open(py_path, "r", encoding="utf-8") as f:
            src = f.read()

        # 只修正单行定义（你现在的平铺就是单行）：... = MethodOperation(...), / EventOperation(...), / PropertyOperation(...),
        fixed_lines = []
        pat = re.compile(r"""
            ^(\s*              # 前导空白
               [A-Za-z_]\w*    # 变量名（例如 IDBDatabase__transaction）
               \s*=\s*
               (?:MethodOperation|EventOperation|PropertyOperation)\(.*\)  # 构造调用（单行）
              )\s*,\s*$        # 行尾多余逗号
        """, re.VERBOSE)

        for line in src.splitlines():
            m = pat.match(line)
            if m:
                fixed_lines.append(m.group(1))  # 去掉最后这个逗号
            else:
                fixed_lines.append(line)
        fixed_src = "\n".join(fixed_lines)

        # 额外保险：在 wiring 前插入一个“tuple 解包”保护（不会改你磁盘文件）
        fixed_src = fixed_src.replace(
            "# ===== wiring",
            "# ===== wiring\n"
            "# --- safety: unwrap singleton tuples if any definitions accidentally ended with a trailing comma ---\n"
            "for _n, _v in list(globals()).copy().items():\n"
            "    if isinstance(_v, tuple) and len(_v) == 1:\n"
            "        _inner = _v[0]\n"
            "        if hasattr(_inner, 'interfaceName') and hasattr(_inner, 'depOps') and hasattr(_inner, 'incOps'):\n"
            "            globals()[_n] = _inner\n"
            "\n"
            "# ===== wiring"
        )

        # 在一个临时模块里执行
        mod = types.ModuleType("idbops_sanitized")
        mod.__file__ = os.path.abspath(py_path)
        # 注意：你的文件内部会 `from schema_.IDBOpearationExtracter import ...`，
        # 需要保证 schema_ 在 sys.path 可见（你现在就是能 import 自己的包的）。
        exec(compile(fixed_src, mod.__file__, "exec"), mod.__dict__)

        if not hasattr(mod, "ALL_OPERATIONS"):
            raise RuntimeError("目标文件里没有导出 ALL_OPERATIONS。")

        return cls(getattr(mod, "ALL_OPERATIONS"))

    # ======== 名称助手 ========
    @staticmethod
    def full_name(op: Any) -> str:
        return f"{op.interfaceName}.{op.name}"

    # ======== 起点与路径 ========
    def start_nodes(self) -> List[Any]:
        """起点：depOps 为空 且 incOps 非空。"""
        return [op for op in self.ops if not op.depOps and bool(op.incOps)]

    def paths_from(self, start: Any, max_depth: int) -> List[List[Any]]:
        """
        沿 incOps 做 DFS，返回所有“简单路径”（不重复节点），
        路径长度 ≤ max_depth（包含起点算 1）。
        """
        results: List[List[Any]] = []
        path: List[Any] = []
        seen: Set[Any] = set()

        def dfs(node: Any, depth: int):
            path.append(node); seen.add(node)
            results.append(list(path))
            if depth < max_depth:
                for nxt in (node.incOps or []):
                    if nxt not in seen:
                        dfs(nxt, depth + 1)
            path.pop(); seen.remove(node)

        dfs(start, 1)
        return results


if __name__ == '__main__':
    from schema_.IDBOperationEnum import ALL_OPERATIONS

    g = IDBOptGraphTools.from_all(ALL_OPERATIONS)
    starts = g.start_nodes()
    paths = g.paths_from(starts[0], max_depth=4)
