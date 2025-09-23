# generate_idb_ops_module_nocli.py
# 生成器作用：
#   将 IndexedDB 的 schema.json 解析为 Python 模块，
#   在该模块中为所有方法(Method)、事件(Event)、属性(Property)生成
#   全局可直接调用的实例，格式化为多行缩进，便于阅读。
#
# 使用方法：
#   1. 把 schema.json 放在 origin/IDBSchema.json
#   2. 运行本脚本，即可在当前目录生成 IDBOperationEnum.py 文件

from __future__ import annotations
import json
import re
from pathlib import Path
from typing import Any, Dict, List

# ====== 用户需要修改的常量 ======
SCHEMA_PATH = Path("../origin/IDBSchema.json")          # schema.json 路径
OUTPUT_PY   = Path("../enum/IDBOperationEnum.py")            # 输出文件固定叫 IDBOperationEnum.py
IMPORT_LINE = "from schema_.IDBOpeartion import MethodOperation, PropertyOperation, EventOperation, Param"

INDENT = " " * 4

# ====== 辅助函数 ======
def _var_name_for(interface: str, member: str) -> str:
    iface = re.sub(r"[^A-Za-z0-9]", "_", interface).strip("_")
    memb  = re.sub(r"[^A-Za-z0-9]", "_", member).strip("_")
    if not iface:
        iface = "UnknownInterface"
    if not memb:
        memb = "unknown"
    return f"{iface}__{memb}"

def _dump_param_list(params: List[Dict[str, Any]]) -> str:
    if not params:
        return "[]"
    out = ["["]
    for p in params:
        name = json.dumps(p.get("name", ""))
        type_ref = json.dumps(p.get("type"))
        optional = "True" if p.get("optional") else "False"
        default  = "None" if p.get("default") is None and "default" not in p else json.dumps(p.get("default"))
        out.append(f"{INDENT*2}Param(name={name}, typeRef={type_ref}, optional={optional}, default={default}),")
    out.append(INDENT + "]")
    return "\n".join(out)

def _py_obj(obj: Any) -> str:
    return json.dumps(obj, ensure_ascii=False)

def _format_call(var: str, cls: str, kwargs: Dict[str, str]) -> str:
    lines = [f"{var} = {cls}("]
    for k, v in kwargs.items():
        lines.append(f"{INDENT}{k}={v},")
    lines.append(")")
    return "\n".join(lines)

# ====== 主逻辑 ======
def main() -> None:
    if not SCHEMA_PATH.exists():
        raise SystemExit(f"[ERROR] Schema file not found: {SCHEMA_PATH}")
    try:
        schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    except Exception as e:
        raise SystemExit(f"[ERROR] Failed to parse schema JSON: {e}")

    interfaces = schema.get("interfaces")
    if not isinstance(interfaces, dict):
        raise SystemExit("schema['interfaces'] 必须是 {接口名: {...}}")

    lines: List[str] = [IMPORT_LINE, ""]

    methods_sec: List[str] = []
    events_sec:  List[str] = []
    props_sec:   List[str] = []

    # ---- 方法 ----
    for iface_name, iface in interfaces.items():
        for m in (iface.get("staticMethods") or []):
            var = _var_name_for(iface_name, m.get("name", ""))
            params_code = _dump_param_list(m.get("params") or m.get("parameters") or [])
            ret_code    = "None" if m.get("returns") is None else _py_obj(m.get("returns"))
            methods_sec.append(_format_call(var, "MethodOperation", {
                "interfaceName": json.dumps(iface_name),
                "name": json.dumps(m.get("name","")),
                "isStatic": "True",
                "params": params_code,
                "returns": ret_code,
                "depOps": "[]",
                "incOps": "[]",
            }))
        for m in (iface.get("instanceMethods") or []):
            var = _var_name_for(iface_name, m.get("name", ""))
            params_code = _dump_param_list(m.get("params") or m.get("parameters") or [])
            ret_code    = "None" if m.get("returns") is None else _py_obj(m.get("returns"))
            methods_sec.append(_format_call(var, "MethodOperation", {
                "interfaceName": json.dumps(iface_name),
                "name": json.dumps(m.get("name","")),
                "isStatic": "False",
                "params": params_code,
                "returns": ret_code,
                "depOps": "[]",
                "incOps": "[]",
            }))

    # ---- 事件 ----
    for iface_name, iface in interfaces.items():
        for e in (iface.get("events") or []):
            raw = e.get("name") or e.get("event") or ""
            if raw.startswith("on"):
                prop_name, evt_name = raw, raw[2:]
            else:
                prop_name, evt_name = (f"on{raw}" if raw else ""), raw
            var = _var_name_for(iface_name, prop_name or evt_name or "event")
            events_sec.append(_format_call(var, "EventOperation", {
                "interfaceName": json.dumps(iface_name),
                "name": json.dumps(prop_name),
                "eventName": json.dumps(evt_name),
                "depOps": "[]",
                "incOps": "[]",
            }))

    # ---- 属性 ----
    for iface_name, iface in interfaces.items():
        for p in (iface.get("properties") or []):
            var = _var_name_for(iface_name, p.get("name",""))
            readonly = p.get("readonly") if "readonly" in p else p.get("readOnly")
            type_ref = _py_obj(p.get("type"))
            props_sec.append(_format_call(var, "PropertyOperation", {
                "interfaceName": json.dumps(iface_name),
                "name": json.dumps(p.get("name","")),
                "readonly": repr(readonly),
                "typeRef": type_ref,
                "depOps": "[]",
                "incOps": "[]",
            }))

    # ---- 拼接输出 ----
    if methods_sec:
        lines.append("# ===== MethodOperation =====")
        lines.extend(methods_sec)
        lines.append("")
    if events_sec:
        lines.append("# ===== EventOperation =====")
        lines.extend(events_sec)
        lines.append("")
    if props_sec:
        lines.append("# ===== PropertyOperation =====")
        lines.extend(props_sec)
        lines.append("")

    # 索引
    lines.append("ALL_METHODS = [")
    lines.extend([f"{INDENT}{ln.split('=')[0].strip()}," for ln in methods_sec])
    lines.append("]")
    lines.append("ALL_EVENTS = [")
    lines.extend([f"{INDENT}{ln.split('=')[0].strip()}," for ln in events_sec])
    lines.append("]")
    lines.append("ALL_PROPERTIES = [")
    lines.extend([f"{INDENT}{ln.split('=')[0].strip()}," for ln in props_sec])
    lines.append("]")
    lines.append("ALL_OPS = ALL_METHODS + ALL_EVENTS + ALL_PROPERTIES")
    lines.append("OP_BY_FULLNAME = {op.fullName: op for op in ALL_OPS}")
    lines.append("")

    OUTPUT_PY.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"[OK] Wrote {OUTPUT_PY} with {len(methods_sec)} methods, {len(events_sec)} events, {len(props_sec)} properties.")

if __name__ == "__main__":
    main()
