# -*- coding: utf-8 -*-
# IDBEvent.py
from __future__ import annotations
from dataclasses import dataclass

@dataclass
class IDBEvent:
    interface: str     # 所属接口名，如 "IDBDatabase"
    name: str          # 事件名，如 "versionchange"
    eventType: str     # 事件类型字符串（来自 JSON），如 "Event" / "IDBVersionChangeEvent"

    def qname(self) -> str:
        """唯一键：Interface.name"""
        return f"{self.interface}.{self.name}"

    def __repr__(self) -> str:
        return f"<Event {self.interface}.{self.name}: {self.eventType}>"
