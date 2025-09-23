# -*- coding: utf-8 -*-
# IDBEventExtracter.py
# 从 IDBSchema.json 生成 IDBEventEnum.py（仅读取这一个文件）

import json
import re
from pathlib import Path

SCHEMA_PATH = Path("../origin/IDBSchema.json")   # ← 你的 schema 文件
OUTPUT_PY   = Path("../enum/IDBEventEnum.py")

HEADER = """# -*- coding: utf-8 -*-
# IDBEventEnum.py
# 由 IDBEventExtracter.py 生成：事件已初始化，可直接 import 使用
from schema_.define.IDBEvent import IDBEvent


"""

FOOTER = """
# —— 映射与访问器 ——
EVENT_BY_QNAME = {obj.qname(): obj for obj in globals().values() if isinstance(obj, IDBEvent)}

EVENT_BY_IFACE = {}
for _obj in list(globals().values()):
    if isinstance(_obj, IDBEvent):
        EVENT_BY_IFACE.setdefault(_obj.interface, {})[_obj.name] = _obj

def get_event(interface: str, name: str):
    return EVENT_BY_QNAME.get(f"{interface}.{name}")

def get_events_of(interface: str):
    return list(EVENT_BY_IFACE.get(interface, {}).values())

__all__ = [k for k, v in globals().items() if isinstance(v, IDBEvent)] + [
    'EVENT_BY_QNAME', 'EVENT_BY_IFACE', 'get_event', 'get_events_of'
]
"""

def pascal_case(s: str) -> str:
    parts = re.split(r'[_\s]+', s)
    parts = [p for p in parts if p]
    if not parts:
        return s
    return "_".join(p[:1].upper() + p[1:] for p in parts)

def safe_name(s: str) -> str:
    s = re.sub(r'[^0-9a-zA-Z_]', '_', s)
    if s and s[0].isdigit():
        s = '_' + s
    return pascal_case(s)

def emit_event_var(interface: str, name: str, event_type: str) -> str:
    var = f"{safe_name(interface)}_{safe_name(name)}"  # Interface_Event（首字母大写）
    et  = json.dumps(event_type)
    return f'{var} = IDBEvent("{interface}", "{name}", {et})'

def main():
    data = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    interfaces = data.get("interfaces", {})

    lines = [HEADER, "# ============ 事件 ============\n"]
    count = 0

    if isinstance(interfaces, dict):
        # ✅ 正确：你的 JSON 就是这种结构
        for iface_name, iface_spec in interfaces.items():
            for ev in iface_spec.get("events", []):
                lines.append(emit_event_var(
                    interface=iface_name,
                    name=ev["name"],
                    event_type=ev["eventType"],
                ) + "\n")
                count += 1
    elif isinstance(interfaces, list):
        # 兼容列表结构
        for iface in interfaces:
            iface_name = iface["name"]
            for ev in iface.get("events", []):
                lines.append(emit_event_var(
                    interface=iface_name,
                    name=ev["name"],
                    event_type=ev["eventType"],
                ) + "\n")
                count += 1
    else:
        raise TypeError(f"interfaces 必须是对象或数组，当前是：{type(interfaces).__name__}")

    lines.append(FOOTER)
    OUTPUT_PY.write_text("".join(lines), encoding="utf-8")
    print(f"[OK] Wrote {OUTPUT_PY} with {count} events from {len(interfaces) if isinstance(interfaces, dict) else len(interfaces)} interfaces.")

if __name__ == "__main__":
    main()
