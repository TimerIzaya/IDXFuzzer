# -*- coding: utf-8 -*-
# IDBProperty.py
from __future__ import annotations
from dataclasses import dataclass
from typing import Any

@dataclass
class IDBProperty:
    interface: str     # 所属接口名，如 "IDBDatabase"
    name: str          # 属性名，如 "name"
    typeRef: Any       # 类型名字符串（来自 JSON；不做跨文件解析）
    readonly: bool
    nullable: bool

    def qname(self) -> str:
        """唯一键：Interface.name"""
        return f"{self.interface}.{self.name}"

    def __repr__(self) -> str:
        ro = "readonly" if self.readonly else "mutable"
        nu = "nullable" if self.nullable else "non-null"
        return f"<Property {self.interface}.{self.name}: {self.typeRef} ({ro}, {nu})>"
