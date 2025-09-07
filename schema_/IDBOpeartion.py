from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, List, Optional, Dict


class OperationKind(str, Enum):
    METHOD = "method"
    EVENT = "event"
    PROPERTY = "property"


@dataclass
class OperationBase:
    kind: OperationKind            # method | event | property
    interfaceName: str
    name: str                      # method: "open"; event: "onupgradeneeded"; property: "version"

    @property
    def fullName(self) -> str:
        return f"{self.interfaceName}.{self.name}"


@dataclass
class Param:
    name: str
    typeRef: Any = None
    optional: bool = False
    default: Any = None


@dataclass
class MethodOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.METHOD, init=False)
    isStatic: Optional[bool] = None
    params: List[Param] = field(default_factory=list)
    returns: Any = None

    @classmethod
    def fromSchema(cls, interfaceName: str, m: Dict[str, Any]) -> "MethodOperation":
        ps: List[Param] = []
        for p in (m.get("params") or m.get("parameters") or []):
            ps.append(Param(
                name=p.get("name", ""),
                typeRef=p.get("type"),
                optional=bool(p.get("optional", False)),
                default=p.get("default"),
            ))
        return cls(
            interfaceName=interfaceName,
            name=m.get("name", ""),
            isStatic=bool(m.get("isStatic") or m.get("static") or False),
            params=ps,
            returns=m.get("returns") or m.get("return"),
        )


@dataclass
class EventOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.EVENT, init=False)
    eventName: Optional[str] = None   # e.g., "upgradeneeded"

    def __post_init__(self):
        # ensure property-style name starts with "on"
        if self.name and not self.name.startswith("on"):
            self.name = f"on{self.name}"
        # derive bare event name without "on" prefix
        if not self.eventName:
            self.eventName = self.name[2:] if self.name.startswith("on") else self.name

    @classmethod
    def fromSchema(cls, interfaceName: str, e: Dict[str, Any]) -> "EventOperation":
        raw = e.get("name") or e.get("event") or ""
        if raw.startswith("on"):
            prop_name, evt_name = raw, raw[2:]
        else:
            prop_name, evt_name = (f"on{raw}" if raw else ""), raw
        return cls(interfaceName=interfaceName, name=prop_name, eventName=evt_name)


@dataclass
class PropertyOperation(OperationBase):
    kind: OperationKind = field(default=OperationKind.PROPERTY, init=False)
    readonly: Optional[bool] = None
    typeRef: Any = None

    @classmethod
    def fromSchema(cls, interfaceName: str, p: Dict[str, Any]) -> "PropertyOperation":
        return cls(
            interfaceName=interfaceName,
            name=p.get("name", ""),
            readonly=p.get("readonly") if "readonly" in p else p.get("readOnly"),
            typeRef=p.get("type"),
        )
