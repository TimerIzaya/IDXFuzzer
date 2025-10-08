# schema/IDBInterface.py
from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Dict
from schema.IDBEnum import InterfaceEnum

@dataclass(frozen=True)
class Interface:
    """
    极简 Interface 抽象：
    - kind: 接口枚举（如 IDB_DATABASE / IDB_TRANSACTION / ...）
    - isEventTarget: 是否会派发事件（仅标识 Interface 这一类；Request 另行处理）
    """
    kind: InterfaceEnum
    isEventTarget: bool = False

    def to_dict(self) -> Dict[str, Any]:
        return {"kind": self.kind.value, "isEventTarget": self.isEventTarget}

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Interface":
        return Interface(kind=InterfaceEnum(d["kind"]), isEventTarget=bool(d.get("isEventTarget", False)))
