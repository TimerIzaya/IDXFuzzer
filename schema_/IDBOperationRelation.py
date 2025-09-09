# schema_/IDBOperationRelation.py
# 作用：从你的枚举文件静态加载所有 Operation，并按 4 条规则填充 depOps/incOps：
# 1) 实例依赖（含异步解包）：I.m / I.prop / I.onxxx 需要 I；若只有 IDBRequest<I>，再加 IDBRequest.onsuccess
# 2) return–param pair：a 的返回类型能赋给 b 的任一参数类型，则 b 依赖 a（原始类型忽略）
# 3) 升级期专属门：createObjectStore/deleteObjectStore/createIndex/deleteIndex 依赖 onupgradeneeded
# 4) 事务活跃门：DB.transaction 开启事务；transaction.objectStore 及 OS/Index 数据/游标方法依赖“在事务中”

from __future__ import annotations
import io, os, re, types
from typing import Any, Dict, List, Set, Tuple

# ===== 修改这里为你的实际路径 =====
ENUM_PATH = r"IDBOperationEnum.py"

# ---------- 仅做轻度语法修正（内存里，不改磁盘） ----------
def sanitize_source(src: str) -> str:
    # 相邻 Param(...) 补逗号：")  Param(" -> "), Param("
    src = re.sub(r"\)\s+(?=Param\()", r"), ", src)
    # 定义行末尾逗号删除：X = MethodOperation(...), / EventOperation(...), / PropertyOperation(...)
    pat = re.compile(
        r'^(\s*[A-Za-z_]\w*\s*=\s*(?:MethodOperation|EventOperation|PropertyOperation)\(.*\))\s*,\s*$',
        re.M,
    )
    src = pat.sub(r"\1", src)
    return src

def load_enum_module(path: str) -> types.ModuleType:
    with io.open(path, "r", encoding="utf-8") as f:
        src = f.read()
    fixed = sanitize_source(src)
    mod = types.ModuleType("idb_enum_mod")
    mod.__file__ = os.path.abspath(path)
    exec(compile(fixed, mod.__file__, "exec"), mod.__dict__)
    return mod

# ---------- 类型工具 ----------
PRIMS: Set[str] = {
    "any", "undefined", "null",
    "number", "boolean", "DOMString",
    "unsigned long", "unsigned long long",
    "Key", "KeyPath", "CursorDirection",
    "IDBTransactionMode", "IDBTransactionDurability",
    "IDBRequestReadyState", "DOMException", "DOMStringList",
    "KeyOrRange",
}
SUBT: Dict[str, Set[str]] = {
    "IDBCursor": {"IDBCursorWithValue"},
    "IDBRequest": {"IDBOpenDBRequest"},  # ODR <: IDBRequest
}

def is_subtype(a: str, b: str) -> bool:
    if a == b:
        return True
    return a in SUBT.get(b, ())

def flatten_type(t) -> List[str]:
    """把 schema 的类型（str/dict）展开为可比较的字符串集合。"""
    if t is None:
        return []
    if isinstance(t, str):
        return [t]
    if isinstance(t, dict):
        k = t.get("kind")
        if k == "Union":
            out: List[str] = []
            for tt in t.get("types", []):
                out += flatten_type(tt)
            return out
        if k == "Array":
            elem = t.get("element")
            return [f"Array<{x}>" for x in flatten_type(elem)]
        if k == "Generic":
            base = t.get("base")
            args = t.get("args", [])
            if base == "IDBRequest":
                inner: List[str] = []
                for a in args:
                    inner += [x for x in flatten_type(a) if x not in ("null", "undefined")]
                return [f"IDBRequest<{x}>" for x in inner] or ["IDBRequest<?>"]
            if base == "Promise":
                return ["Promise<?>"]
    return []

def type_candidates_for_need(t: str) -> List[str]:
    """b 需求 t，可接受的 a 产出类型集合（t 及其子类型皆可赋值）。"""
    return [t] + list(SUBT.get(t, []))

def is_primitive(t: str) -> bool:
    return t in PRIMS or t.startswith("Array<")

# ---------- 收集操作 ----------
def collect_ops(ns: Dict[str, Any]) -> List[Any]:
    kinds = {"MethodOperation", "EventOperation", "PropertyOperation"}
    out: List[Any] = []
    for v in ns.values():
        if (hasattr(v, "interfaceName") and hasattr(v, "name")
            and hasattr(v, "depOps") and hasattr(v, "incOps")
            and type(v).__name__ in kinds):
            out.append(v)
    return out

# 帮助：列表按 id 去重追加
def _append_unique(lst: List[Any], items: List[Any]) -> None:
    seen = {id(x) for x in lst}
    for it in items:
        if id(it) not in seen:
            lst.append(it)
            seen.add(id(it))

# ---------- 核心依赖构建 ----------
def build_dep_inc(mod) -> Tuple[List[Any], Dict[str, Any]]:
    ops = collect_ops(mod.__dict__)
    by_if_name: Dict[Tuple[str, str], Any] = {(o.interfaceName, o.name): o for o in ops}

    # 产出索引（使用 List，按 id 去重，避免不可哈希）
    producers: Dict[str, List[Any]] = {}  # 类型名 -> [op...]
    wrappers: Dict[str, List[Any]]  = {}  # T -> [返回 IDBRequest<T> 的 op...]

    def add_prod(typ: str, op: Any):
        lst = producers.setdefault(typ, [])
        if all(id(op) != id(x) for x in lst):
            lst.append(op)

    def add_wrap(T: str, op: Any):
        lst = wrappers.setdefault(T, [])
        if all(id(op) != id(x) for x in lst):
            lst.append(op)

    for o in ops:
        kind = type(o).__name__
        if kind == "MethodOperation":
            rts = flatten_type(o.returns)
            for rt in rts:
                if rt.startswith("IDBRequest<"):
                    T = rt[len("IDBRequest<"):-1]
                    if T and T not in ("?",):
                        add_wrap(T, o)
                    add_prod(rt, o)  # 只计入“Request”
                else:
                    if rt and rt not in ("undefined", "any"):
                        add_prod(rt, o)
        elif kind == "PropertyOperation":
            ts = flatten_type(o.typeRef)
            for t in ts:
                if t and not is_primitive(t):
                    add_prod(t, o)
        # EventOperation 默认不产出类型

    # 取到 IDBRequest.onsuccess，用作“异步解包”
    ONSUCCESS = by_if_name.get(("IDBRequest", "onsuccess"))
    # 如果存在 ODR 的生产者，让 onsuccess 也“产出 DB”以便实例依赖能落地
    if ONSUCCESS:
        has_odr = any(
            rt == "IDBOpenDBRequest"
            for o in ops if type(o).__name__ == "MethodOperation"
            for rt in flatten_type(o.returns)
        )
        if has_odr:
            add_prod("IDBDatabase", ONSUCCESS)

    # 逐 op 计算 depOps
    for b in ops:
        dep: List[Any] = []

        # 1) 实例依赖（含异步解包）
        needs_iface = None
        if type(b).__name__ in ("EventOperation", "PropertyOperation"):
            needs_iface = b.interfaceName
        elif type(b).__name__ == "MethodOperation" and not getattr(b, "isStatic", False):
            needs_iface = b.interfaceName

        if needs_iface:
            cand_types = type_candidates_for_need(needs_iface)
            direct: List[Any] = []
            for t in cand_types:
                direct += producers.get(t, [])
            if direct:
                _append_unique(dep, direct)
            else:
                wrap_ops: List[Any] = []
                for t in cand_types:
                    wrap_ops += wrappers.get(t, [])
                if wrap_ops:
                    _append_unique(dep, wrap_ops)
                    if ONSUCCESS:
                        _append_unique(dep, [ONSUCCESS])

        # 2) return–param pair（含异步解包）
        if type(b).__name__ == "MethodOperation":
            for p in getattr(b, "params", []) or []:
                for need in flatten_type(getattr(p, "typeRef", None)):
                    if not need or is_primitive(need):
                        continue
                    cand_types = type_candidates_for_need(need)
                    prod_ops: List[Any] = []
                    for t in cand_types:
                        prod_ops += producers.get(t, [])
                    if prod_ops:
                        _append_unique(dep, prod_ops)
                    else:
                        wrap_ops: List[Any] = []
                        for t in cand_types:
                            wrap_ops += wrappers.get(t, [])
                        if wrap_ops:
                            _append_unique(dep, wrap_ops)
                            if ONSUCCESS:
                                _append_unique(dep, [ONSUCCESS])

        # 3) 升级期专属门
        if (b.interfaceName, b.name) in {
            ("IDBDatabase", "createObjectStore"),
            ("IDBDatabase", "deleteObjectStore"),
            ("IDBObjectStore", "createIndex"),
            ("IDBObjectStore", "deleteIndex"),
        }:
            up = by_if_name.get(("IDBOpenDBRequest", "onupgradeneeded"))
            if up:
                _append_unique(dep, [up])

        # 4) 事务活跃门
        if type(b).__name__ == "MethodOperation":
            iface, mname = b.interfaceName, b.name
            need_tx = False
            if (iface == "IDBTransaction" and mname in {"objectStore", "commit", "abort"}):
                need_tx = True
            elif iface == "IDBObjectStore" and mname not in {"createIndex", "deleteIndex"}:
                need_tx = True
            elif iface == "IDBIndex":
                need_tx = True
            if need_tx:
                txop = by_if_name.get(("IDBDatabase", "transaction"))
                up = by_if_name.get(("IDBOpenDBRequest", "onupgradeneeded"))
                if txop:
                    _append_unique(dep, [txop])
                if up:
                    _append_unique(dep, [up])

        # 去自身
        b.depOps = [a for a in dep if a is not b]

    # 反向填 incOps（按 id 去重）
    for o in ops:
        o.incOps = []
    for b in ops:
        for a in getattr(b, "depOps", []) or []:
            _append_unique(a.incOps, [b])

    return ops, by_if_name

# ---------- main ----------
if __name__ == "__main__":
    mod = load_enum_module(ENUM_PATH)
    ops, by = build_dep_inc(mod)

    def full_name(o): return f"{o.interfaceName}.{o.name}"
    roots = [o for o in ops if not o.depOps and o.incOps]
    print("# roots:")
    for r in sorted(roots, key=full_name):
        print("  ", full_name(r))

    # 抽查
    pick = [
        ("IDBFactory", "open"),
        ("IDBRequest", "onsuccess"),
        ("IDBDatabase", "transaction"),
        ("IDBObjectStore", "openCursor"),
        ("IDBCursor", "advance"),
        ("IDBDatabase", "createObjectStore"),
    ]
    for k in pick:
        o = by.get(k)
        if not o: continue
        print(f"\n[{full_name(o)}] depOps:")
        for d in o.depOps:
            print("   -", full_name(d))
        print(f"[{full_name(o)}] incOps:")
        for d in o.incOps:
            print("   +", full_name(d))
