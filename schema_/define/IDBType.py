# -*- coding: utf-8 -*-
# IDBType.py
from __future__ import annotations
from dataclasses import dataclass, field
from typing import List, Any

@dataclass
class IDBType:
    name: str
    kind: str
    def __repr__(self) -> str:
        return f"<{self.kind} {self.name}>"

@dataclass
class BasicType(IDBType):
    def __init__(self, name: str):
        super().__init__(name=name, kind="Basic")

@dataclass
class EnumType(IDBType):
    values: List[str] = field(default_factory=list)
    def __init__(self, name: str, values: List[str]):
        super().__init__(name=name, kind="Enum")
        self.values = list(values)

@dataclass
class DictField:
    name: str
    typeRef: Any           # 生成出来即为对象引用（或 ArrayType），不再是字符串
    optional: bool
    nullable: bool
    def __repr__(self) -> str:
        flags = []
        if self.optional: flags.append("optional")
        if self.nullable: flags.append("nullable")
        suffix = f" ({', '.join(flags)})" if flags else ""
        return f"{self.name}: {self.typeRef}{suffix}"

@dataclass
class DictType(IDBType):
    fields: List[DictField] = field(default_factory=list)
    def __init__(self, name: str, fields: List[DictField]):
        super().__init__(name=name, kind="Dict")
        self.fields = list(fields)

@dataclass
class ArrayType(IDBType):
    element: Any
    def __init__(self, element: Any):
        el_name = element if isinstance(element, str) else getattr(element, "name", "?")
        super().__init__(name=f"Array<{el_name}>", kind="Array")
        self.element = element

@dataclass
class UnionType(IDBType):
    types: List[Any] = field(default_factory=list)
    def __init__(self, name: str, types: List[Any]):
        super().__init__(name=name, kind="Union")
        self.types = list(types)
