# schema/IDBEvent.py  —— 修改点：allowed_ops -> List[OperationEnum]
from __future__ import annotations
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union, Iterable
from enum import Enum
from schema.IDBEnum import EventEnum, RequestEnum, InterfaceEnum, OperationEnum

@dataclass
class Event:
    id: EventEnum
    target: Union[RequestEnum, InterfaceEnum]
    detail: Dict[str, Any] = field(default_factory=dict)
    bubbles: Optional[bool] = None
    cancelable: Optional[bool] = None

    # 现在只保留“操作种类”，不带 target；target 在解析时由作用域补足
    allowed_ops: List[OperationEnum] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        tgt = self.target.value if isinstance(self.target, Enum) else str(self.target)
        return {
            "id": self.id.value,
            "target": tgt,
            "detail": dict(self.detail),
            "bubbles": self.bubbles,
            "cancelable": self.cancelable,
            "allowed_ops": [op.value for op in self.allowed_ops],   # <— 改这里
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Event":
        tgt = d["target"]
        if tgt in RequestEnum._value2member_map_:
            target = RequestEnum(tgt)
        elif tgt in InterfaceEnum._value2member_map_:
            target = InterfaceEnum(tgt)
        else:
            target = InterfaceEnum.IDB_REQUEST

        return Event(
            id=EventEnum(d["id"]),
            target=target,
            detail=d.get("detail", {}),
            bubbles=d.get("bubbles"),
            cancelable=d.get("cancelable"),
            allowed_ops=[OperationEnum(x) for x in d.get("allowed_ops", [])],  # <— 改这里
        )

    # 解析为具体 Operation 实例：
    #   - op_by_key: 你已有的 {"op@Interface": Operation} 索引
    #   - targets:   当前上下文允许的接口列表（例如 versionchange 事务下的可见接口集合）
    def resolve_ops(self, op_by_key: Dict[str, "Operation"], targets: Iterable[InterfaceEnum]) -> List["Operation"]:
        keys = [f"{op.value}@{iface.value}" for iface in targets for op in self.allowed_ops]
        return [op_by_key[k] for k in keys if k in op_by_key]
