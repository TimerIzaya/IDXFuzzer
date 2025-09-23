# -*- coding: utf-8 -*-
# schema_\IDBTypeExtractor.py
# 读取原始 JSON，生成“已初始化好”的 IDBTypeEnum.py（不使用注册器、不做二次解析）

import json
from pathlib import Path
import re

# 固定 JSON 文件路径（你项目里的类型定义 JSON）
PREFERRED_SCHEMA_PATH = Path("../origin/IDBType.json")   # ← 改成你的实际路径
OUTPUT_PY = Path("../enum/IDBTypeEnum.py")

def load_schema(path: Path):
    if not path.is_file():
        raise FileNotFoundError(f"类型 JSON 文件不存在: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data.get("basic_types"), list) or not isinstance(data.get("aliases"), list):
        raise ValueError(f"文件不是合法的 schema（缺少 basic_types/aliases）: {path}")
    return data

def safe_var_name(name: str) -> str:
    s = name.strip()
    s = s.replace(" ", "_").replace("<", "_").replace(">", "_").replace(",", "_")
    s = s.replace("[", "_").replace("]", "_")
    s = re.sub(r"[^0-9a-zA-Z_]", "_", s)
    if re.match(r"^[0-9]", s):
        s = "_" + s
    if s:
        s = s[0].upper() + s[1:]
    return s

HEADER = """# -*- coding: utf-8 -*-
# IDBTypeEnum.py
# 由 IDBTypeExtractor.py 生成（无注册器、无二次解析）：全部类型已初始化为对象
from IDBType import (IDBType, BasicType, EnumType, DictType, DictField, UnionType, ArrayType)

"""

def emit_basic_types(basic_types) -> str:
    out = ["# ============ 基本类型 ============"]
    for bt in basic_types:
        out.append(f'{safe_var_name(bt)} = BasicType("{bt}")')
    out.append("")  # 空行
    return "\n".join(out) + "\n"

def collect_refs_for_placeholders(aliases) -> set:
    refs = set()
    def visit(t):
        if isinstance(t, str):
            refs.add(t)
        elif isinstance(t, dict) and t.get("kind") == "Array":
            visit(t.get("element"))
    for a in aliases:
        tgt = a["target"]
        k = tgt["kind"]
        if k == "Dict":
            for f in tgt.get("fields", []):
                visit(f["type"])
        elif k == "Union":
            for t in tgt.get("types", []):
                visit(t)
    return refs

def emit_placeholders(missing_names) -> str:
    if not missing_names:
        return ""
    out = ["# ============ 占位接口（在JSON未声明但被引用） ============"]
    for name in sorted(missing_names):
        out.append(f'{safe_var_name(name)} = BasicType("{name}")')
    out.append("")
    return "\n".join(out) + "\n"

def emit_enums_shells(aliases) -> str:
    out = ["# ============ 枚举类型（一次性完成） ============"]
    for a in aliases:
        tgt = a["target"]
        if tgt["kind"] == "Enum":
            name = a["name"]
            var  = safe_var_name(name)
            vals = ", ".join(f'"{v}"' for v in tgt["values"])
            out.append(f'{var} = EnumType("{name}", [{vals}])')
    out.append("")
    return "\n".join(out) + "\n"

def emit_dicts_unions_shells(aliases) -> str:
    out = ["# ============ 字典/联合：先建空壳 ============"]
    for a in aliases:
        tgt = a["target"]
        name = a["name"]
        var  = safe_var_name(name)
        if tgt["kind"] == "Dict":
            out.append(f'{var} = DictType("{name}", [])')
        elif tgt["kind"] == "Union":
            out.append(f'{var} = UnionType("{name}", [])')
    out.append("")
    return "\n".join(out) + "\n"

def expr_for_type_py(t) -> str:
    """返回字段/联合成员的 Python 表达式（变量名或 ArrayType(...)）。"""
    if isinstance(t, str):
        return safe_var_name(t)
    if isinstance(t, dict) and t.get("kind") == "Array":
        el = t.get("element")
        return f"ArrayType({expr_for_type_py(el)})"
    raise TypeError(f"未知类型描述: {t!r}")

def emit_wiring(aliases) -> str:
    """把空壳 Dict/Union 填充为对象引用（不使用解析器，不留字符串）。"""
    out = ["# ============ 填充：把空壳变成完整对象（对象引用/ArrayType） ============"]
    # 先填 Dict 的 fields
    for a in aliases:
        tgt = a["target"]
        if tgt["kind"] == "Dict":
            var = safe_var_name(a["name"])
            fs = []
            for f in tgt.get("fields", []):
                typ_expr = expr_for_type_py(f["type"])
                opt = "True" if f.get("optional", False) else "False"
                nul = "True" if f.get("nullable", False) else "False"
                fs.append(f'DictField("{f["name"]}", {typ_expr}, {opt}, {nul})')
            fields_expr = ", ".join(fs)
            out.append(f"{var}.fields = [{fields_expr}]")
    # 再填 Union 的 types（支持自递归，因为壳已存在）
    for a in aliases:
        tgt = a["target"]
        if tgt["kind"] == "Union":
            var = safe_var_name(a["name"])
            items = ", ".join(expr_for_type_py(t) for t in tgt.get("types", []))
            out.append(f"{var}.types = [{items}]")
    out.append("")
    return "\n".join(out) + "\n"

FOOTER = """
# ============ 映射：名称 -> 对象 ============
TYPE_BY_NAME = { obj.name: obj for obj in globals().values() if isinstance(obj, IDBType) }

def get_type(name: str):
    return TYPE_BY_NAME.get(name)

def all_types():
    return list(TYPE_BY_NAME.values())

__all__ = [name for name in globals().keys()
           if not name.startswith('_')
           and name not in ('IDBType','BasicType','EnumType','DictType','DictField','UnionType','ArrayType')]
"""

def main():
    data = load_schema(PREFERRED_SCHEMA_PATH)
    basic = data["basic_types"]
    aliases = data["aliases"]

    # 找出 JSON 未声明但被 Dict/Union 引用的名字（例如 IDBKeyRange）
    refs = collect_refs_for_placeholders(aliases)
    declared = set(basic) | {a["name"] for a in aliases}
    missing = sorted([r for r in refs if r not in declared])

    parts = []
    parts.append(HEADER)
    parts.append(emit_basic_types(basic))
    parts.append(emit_placeholders(missing))          # 占位也定义为 BasicType 变量
    parts.append(emit_enums_shells(aliases))          # 枚举一次性完成
    parts.append(emit_dicts_unions_shells(aliases))   # 壳：Dict/Union 空
    parts.append(emit_wiring(aliases))                # 填充：对象引用/ArrayType
    parts.append(FOOTER)

    OUTPUT_PY.write_text("".join(parts), encoding="utf-8")
    print(f"[OK] Wrote {OUTPUT_PY} with {len(basic)} basic types, "
          f"{sum(1 for a in aliases if a['target']['kind']=='Enum')} enums, "
          f"{sum(1 for a in aliases if a['target']['kind']=='Dict')} dicts, "
          f"{sum(1 for a in aliases if a['target']['kind']=='Union')} unions, "
          f"{len(missing)} placeholders emitted as BasicType.")

if __name__ == "__main__":
    main()
