from abc import abstractmethod, ABC
from dataclasses import dataclass, field
from typing import Dict, Any, List

from schema.IDBEnum import BasicTypeEnum, InterfaceEnum


class Type(ABC):
    """Abstract base type. Subclasses are the only valid kinds."""
    kind: str

    @abstractmethod
    def to_dict(self) -> Dict[str, Any]:
        ...

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Type":
        kind = d["id"]
        if kind == "basic":
            return BasicType(id=BasicTypeEnum(d["id"]))
        if kind == "interface":
            return InterfaceType(id=InterfaceEnum(d["id"]))
        if kind == "alias":
            return AliasType(id=d["id"])
        if kind == "union":
            return UnionType(members=[Type.from_dict(x) for x in d["members"]])
        if kind == "sequence":
            return SequenceType(item=Type.from_dict(d["item"]))
        if kind == "nullable":
            return NullableType(inner=Type.from_dict(d["inner"]))
        if kind == "dictionary":
            return DictionaryType(props={k: Type.from_dict(v) for k, v in d["props"].items()})
        raise ValueError(f"Unknown type id: {kind}")

@dataclass
class BasicType(Type):
    id: BasicTypeEnum
    kind: str = field(init=False, default="basic")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "id": self.id.value}

@dataclass
class InterfaceType(Type):
    id: InterfaceEnum
    kind: str = field(init=False, default="interface")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "id": self.id.value}

@dataclass
class AliasType(Type):
    id: str
    kind: str = field(init=False, default="alias")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "id": self.id}

@dataclass
class UnionType(Type):
    members: List[Type]
    kind: str = field(init=False, default="union")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "members": [m.to_dict() for m in self.members]}

@dataclass
class SequenceType(Type):
    item: Type
    kind: str = field(init=False, default="sequence")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "item": self.item.to_dict()}

@dataclass
class NullableType(Type):
    inner: Type
    kind: str = field(init=False, default="nullable")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "inner": self.inner.to_dict()}

@dataclass
class DictionaryType(Type):
    props: Dict[str, Type]
    kind: str = field(init=False, default="dictionary")
    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.kind, "props": {k: v.to_dict() for k, v in self.props.items()}}

# ---- Canonical aliases ----
IDBKeyPathType: Type = UnionType([
    BasicType(BasicTypeEnum.DOM_STRING),
    SequenceType(BasicType(BasicTypeEnum.DOM_STRING)),
])

IDBValidKeyType: Type = UnionType([
    BasicType(BasicTypeEnum.DOM_STRING),
    BasicType(BasicTypeEnum.NUMBER),
    BasicType(BasicTypeEnum.DATE),
    SequenceType(AliasType("IDBValidKey")),  # self-recursive via alias
])

IDBObjectStoreParametersType: Type = DictionaryType({
    "keyPath": NullableType(IDBKeyPathType),
    "autoIncrement": BasicType(BasicTypeEnum.BOOLEAN),
})

IDBIndexParametersType: Type = DictionaryType({
    "unique": BasicType(BasicTypeEnum.BOOLEAN),
    "multiEntry": BasicType(BasicTypeEnum.BOOLEAN),
})
