# idb_operations_from_schema.py

from __future__ import annotations
from dataclasses import dataclass, field, asdict
from enum import Enum
from typing import Any, List, Optional, Dict, Tuple
import json
import sys
from pathlib import Path


# ---------- Core types ----------

class OperationKind(str, Enum):
    METHOD = "method"
    EVENT = "event"
    PROPERTY = "property"


# 引用另一个操作时，用 "Interface.member" 的全名字符串
OperationRef = str


@dataclass
class OperationBase:
    kind: OperationKind                  # method | event | property
    interfaceName: str                   # 定义该成员的接口（如 "IDBDatabase"）
    name: str                            # 成员名（如 "open" / "onupgradeneeded" / "version"）
    depOps: List[OperationRef] = field(default_factory=list)  # 依赖的操作（可先留空）
    incOps: List[OperationRef] = field(default_factory=list)  # 内部可包含的操作（可先留空）

    @property
    def fullName(self) -> str:
        return f"{self.interfaceName}.{self.name}"

    def to_dict(self) -> Dict[str, Any]:
        return {
            "kind": self.kind.value,
            "interfaceName": self.interfaceName,
            "name": self.name,
            "fullName": self.fullName,
            "depOps": list(self.depOps),
            "incOps": list(self.incOps),
        }


@dataclass
class Param:
    name: str
    typeRef: Any = None
    optional: bool = False
    default: Any = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "name": self.name,
            "typeRef": self.typeRef,
            "optional": self.optional,
            "default": self.default,
        }


@dataclass
class MethodOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.METHOD, init=False)
    isStatic: Optional[bool] = None
    params: List[Param] = field(default_factory=list)
    returns: Any = None

    def to_dict(self) -> Dict[str, Any]:
        d = super().to_dict()
        d.update({
            "isStatic": self.isStatic,
            "params": [p.to_dict() for p in self.params],
            "returns": self.returns,
        })
        return d


@dataclass
class EventOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.EVENT, init=False)
    eventName: Optional[str] = None   # 例如 "upgradeneeded"

    def __post_init__(self):
        # 规范化属性式事件名：确保以 "on" 开头；同时派生裸事件名
        if self.name and not self.name.startswith("on"):
            self.name = f"on{self.name}"
        if not self.eventName:
            self.eventName = self.name[2:] if self.name.startswith("on") else self.name

    def to_dict(self) -> Dict[str, Any]:
        d = super().to_dict()
        d.update({"eventName": self.eventName})
        return d


@dataclass
class PropertyOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.PROPERTY, init=False)
    readonly: Optional[bool] = None
    typeRef: Any = None

    def to_dict(self) -> Dict[str, Any]:
        d = super().to_dict()
        d.update({
            "readonly": self.readonly,
            "typeRef": self.typeRef,
        })
        return d


# ---------- Schema parsers ----------

def _make_method_ops(interface: str, methods: List[Dict], is_static: bool) -> List[MethodOperation]:
    out: List[MethodOperation] = []
    for m in methods or []:
        params: List[Param] = []
        for p in m.get("params", []) or []:
            params.append(Param(
                name=p.get("name", ""),
                typeRef=p.get("type"),
                optional=bool(p.get("optional", False)),
                default=p.get("default"),
            ))
        out.append(MethodOperation(
            interfaceName=interface,
            name=m.get("name", ""),
            isStatic=is_static,
            params=params,
            returns=m.get("returns"),
        ))
    return out


def _make_event_ops(interface: str, events: List[Dict]) -> List[EventOperation]:
    out: List[EventOperation] = []
    for e in events or []:
        en = e.get("name", "") or e.get("event", "")
        # 允许 "onsuccess" 或 "success"；构造器里会统一成 onXxx，并派生 eventName
        out.append(EventOperation(interfaceName=interface, name=en))
    return out


def _make_property_ops(interface: str, props: List[Dict]) -> List[PropertyOperation]:
    out: List[PropertyOperation] = []
    for p in props or []:
        out.append(PropertyOperation(
            interfaceName=interface,
            name=p.get("name", ""),
            readonly=p.get("readonly") if "readonly" in p else p.get("readOnly"),
            typeRef=p.get("type"),
        ))
    return out


def load_operations_from_schema(schema_obj: Dict[str, Any]) -> Tuple[
    List[OperationBase], List[MethodOperation], List[EventOperation], List[PropertyOperation]
]:
    """
    解析 schema['interfaces']（dict: interfaceName -> { staticMethods, instanceMethods, events, properties }）
    返回：
      ALL_OPS, METHODS, EVENTS, PROPERTIES
    """
    interfaces = schema_obj.get("interfaces")
    if not isinstance(interfaces, dict):
        raise ValueError("schema['interfaces'] 应为 dict")

    all_ops: List[OperationBase] = []
    methods: List[MethodOperation] = []
    events:  List[EventOperation] = []
    props:   List[PropertyOperation] = []

    for iface_name, iface in interfaces.items():
        m_static = _make_method_ops(iface_name, iface.get("staticMethods", []), is_static=True)
        m_inst   = _make_method_ops(iface_name, iface.get("instanceMethods", []), is_static=False)
        evs      = _make_event_ops(iface_name, iface.get("events", []))
        prps     = _make_property_ops(iface_name, iface.get("properties", []))

        methods.extend(m_static)
        methods.extend(m_inst)
        events.extend(evs)
        props .extend(prps)

    all_ops.extend(methods)
    all_ops.extend(events)
    all_ops.extend(props)

    # 去重（如果 schema 不会重复，可以删掉这段）
    seen = set()
    unique_ops: List[OperationBase] = []
    for op in all_ops:
        key = (op.kind, op.fullName)
        if key in seen:
            continue
        seen.add(key)
        unique_ops.append(op)

    return unique_ops, methods, events, props


# ---------- CLI / quick test ----------

def main(argv: List[str]) -> None:
    if len(argv) < 2:
        print("Usage: python idb_operations_from_schema.py <schema.json> [out.json]")
        print("Example: python idb_operations_from_schema.py /mnt/data/9727...555c5.json ops.json")
        sys.exit(1)

    schema_path = Path(argv[1])
    schema = json.loads(schema_path.read_text(encoding="utf-8"))

    all_ops, method_ops, event_ops, prop_ops = load_operations_from_schema(schema)

    print(f"Total ops: {len(all_ops)}  (methods={len(method_ops)}, events={len(event_ops)}, properties={len(prop_ops)})")

    # 可选：输出为 JSON（全部字段）
    if len(argv) >= 3:
        out_path = Path(argv[2])
        out_data = [op.to_dict() for op in all_ops]
        out_path.write_text(json.dumps(out_data, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Wrote: {out_path}")

    # 简单预览前 10 个
    for op in all_ops[:10]:
        print(op.kind.value, op.fullName)

if __name__ == "__main__":
    main(sys.argv)
