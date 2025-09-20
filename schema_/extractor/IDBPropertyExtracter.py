# -*- coding: utf-8 -*-
# IDBPropertyExtracter.py
# 从 IDBSchema.json 生成 IDBPropertyEnum.py（仅读取这一个文件）

import json
import re
from pathlib import Path

SCHEMA_PATH = Path("../origin/IDBSchema.json")   # ← 就是你上传的这份
OUTPUT_PY   = Path("../IDBPropertyEnum.py")

HEADER = """# -*- coding: utf-8 -*-
# IDBPropertyEnum.py
# 由 IDBPropertyExtracter.py 生成：属性已初始化，可直接 import 使用
from define.IDBProperty import IDBProperty

"""

FOOTER = """
# —— 映射与访问器 ——
PROPERTY_BY_QNAME = {obj.qname(): obj for obj in globals().values() if isinstance(obj, IDBProperty)}

PROPERTY_BY_IFACE = {}
for _obj in list(globals().values()):
    if isinstance(_obj, IDBProperty):
        PROPERTY_BY_IFACE.setdefault(_obj.interface, {})[_obj.name] = _obj

def get_property(interface: str, name: str):
    return PROPERTY_BY_QNAME.get(f"{interface}.{name}")

def get_properties_of(interface: str):
    return list(PROPERTY_BY_IFACE.get(interface, {}).values())

__all__ = [k for k, v in globals().items() if isinstance(v, IDBProperty)] + [
    'PROPERTY_BY_QNAME', 'PROPERTY_BY_IFACE', 'get_property', 'get_properties_of'
]
"""

def pascal_case(s: str) -> str:
    parts = re.split(r'[_\s]+', s)
    parts = [p for p in parts if p]
    if not parts:
        return s
    return "_".join(p[:1].upper() + p[1:] for p in parts)

def safe_name(s: str) -> str:
    # 首字母大写；非字母数字替换为下划线；数字开头前置下划线
    s = re.sub(r'[^0-9a-zA-Z_]', '_', s)
    if s and s[0].isdigit():
        s = '_' + s
    return pascal_case(s)

def emit_property_var(interface: str, name: str, type_ref: str, readonly: bool, nullable: bool) -> str:
    var = f"{safe_name(interface)}_{safe_name(name)}"  # Interface_Property（首字母大写）
    type_lit = json.dumps(type_ref)
    ro = "True" if readonly else "False"
    nu = "True" if nullable else "False"
    return f'{var} = IDBProperty("{interface}", "{name}", {type_lit}, {ro}, {nu})'

def main():
    data = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    interfaces = data.get("interfaces", {})
    if not isinstance(interfaces, dict):
        raise TypeError("IDBSchema.json: interfaces 应该是对象（字典）")

    lines = [HEADER, "# ============ 属性 ============\n"]
    count = 0
    for iface_name, iface_spec in interfaces.items():
        for prop in iface_spec.get("properties", []):
            line = emit_property_var(
                interface=iface_name,
                name=prop["name"],
                type_ref=prop["type"],
                readonly=bool(prop.get("readonly", False)),
                nullable=bool(prop.get("nullable", False)),
            )
            lines.append(line + "\n")
            count += 1

    lines.append(FOOTER)
    OUTPUT_PY.write_text("".join(lines), encoding="utf-8")
    print(f"[OK] Wrote {OUTPUT_PY} with {count} properties from {len(interfaces)} interfaces.")

if __name__ == "__main__":
    main()
