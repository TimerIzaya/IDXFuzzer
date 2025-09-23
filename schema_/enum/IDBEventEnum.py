# -*- coding: utf-8 -*-
# IDBEventEnum.py
# 由 IDBEventExtracter.py 生成：事件已初始化，可直接 import 使用
from schema_.define.IDBEvent import IDBEvent


# ============ 事件 ============
IDBDatabase_Close = IDBEvent("IDBDatabase", "close", "Event")
IDBDatabase_Versionchange = IDBEvent("IDBDatabase", "versionchange", "IDBVersionChangeEvent")
IDBTransaction_Abort = IDBEvent("IDBTransaction", "abort", "Event")
IDBTransaction_Complete = IDBEvent("IDBTransaction", "complete", "Event")
IDBTransaction_Error = IDBEvent("IDBTransaction", "error", "Event")
IDBRequest_Success = IDBEvent("IDBRequest", "success", "Event")
IDBRequest_Error = IDBEvent("IDBRequest", "error", "Event")
IDBOpenDBRequest_Blocked = IDBEvent("IDBOpenDBRequest", "blocked", "Event")
IDBOpenDBRequest_Upgradeneeded = IDBEvent("IDBOpenDBRequest", "upgradeneeded", "IDBVersionChangeEvent")

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
