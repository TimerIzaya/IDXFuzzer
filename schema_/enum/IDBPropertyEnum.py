# -*- coding: utf-8 -*-
# IDBPropertyEnum.py
# 由 IDBPropertyExtracter.py 生成：属性已初始化，可直接 import 使用
from schema_.define.IDBProperty import IDBProperty

# ============ 属性 ============
IDBDatabase_Name = IDBProperty("IDBDatabase", "name", "DOMString", True, False)
IDBDatabase_Version = IDBProperty("IDBDatabase", "version", "unsigned long long", True, False)
IDBDatabase_ObjectStoreNames = IDBProperty("IDBDatabase", "objectStoreNames", "DOMStringList", True, False)
IDBTransaction_Db = IDBProperty("IDBTransaction", "db", "IDBDatabase", True, False)
IDBTransaction_Durability = IDBProperty("IDBTransaction", "durability", "IDBTransactionDurability", True, False)
IDBTransaction_Error = IDBProperty("IDBTransaction", "error", {"kind": "Union", "types": ["DOMException", "null"]}, True, True)
IDBTransaction_Mode = IDBProperty("IDBTransaction", "mode", "IDBTransactionMode", True, False)
IDBTransaction_ObjectStoreNames = IDBProperty("IDBTransaction", "objectStoreNames", "DOMStringList", True, False)
IDBObjectStore_Name = IDBProperty("IDBObjectStore", "name", "DOMString", False, False)
IDBObjectStore_KeyPath = IDBProperty("IDBObjectStore", "keyPath", {"kind": "Union", "types": ["KeyPath", "null"]}, True, True)
IDBObjectStore_IndexNames = IDBProperty("IDBObjectStore", "indexNames", "DOMStringList", True, False)
IDBObjectStore_Transaction = IDBProperty("IDBObjectStore", "transaction", "IDBTransaction", True, False)
IDBObjectStore_AutoIncrement = IDBProperty("IDBObjectStore", "autoIncrement", "boolean", True, False)
IDBIndex_Name = IDBProperty("IDBIndex", "name", "DOMString", True, False)
IDBIndex_ObjectStore = IDBProperty("IDBIndex", "objectStore", "IDBObjectStore", True, False)
IDBIndex_KeyPath = IDBProperty("IDBIndex", "keyPath", {"kind": "Union", "types": ["KeyPath", "null"]}, True, True)
IDBIndex_MultiEntry = IDBProperty("IDBIndex", "multiEntry", "boolean", True, False)
IDBIndex_Unique = IDBProperty("IDBIndex", "unique", "boolean", True, False)
IDBCursor_Direction = IDBProperty("IDBCursor", "direction", "CursorDirection", True, False)
IDBCursor_Key = IDBProperty("IDBCursor", "key", "Key", True, False)
IDBCursor_PrimaryKey = IDBProperty("IDBCursor", "primaryKey", "Key", True, False)
IDBCursor_Source = IDBProperty("IDBCursor", "source", {"kind": "Union", "types": ["IDBObjectStore", "IDBIndex"]}, True, False)
IDBCursorWithValue_Value = IDBProperty("IDBCursorWithValue", "value", "any", True, False)
IDBRequest_Error = IDBProperty("IDBRequest", "error", {"kind": "Union", "types": ["DOMException", "null"]}, True, True)
IDBRequest_Result = IDBProperty("IDBRequest", "result", "any", True, False)
IDBRequest_Source = IDBProperty("IDBRequest", "source", {"kind": "Union", "types": ["IDBObjectStore", "IDBIndex", "IDBCursor", "null"]}, True, True)
IDBRequest_ReadyState = IDBProperty("IDBRequest", "readyState", "IDBRequestReadyState", True, False)
IDBRequest_Transaction = IDBProperty("IDBRequest", "transaction", {"kind": "Union", "types": ["IDBTransaction", "null"]}, True, True)
IDBKeyRange_Lower = IDBProperty("IDBKeyRange", "lower", {"kind": "Union", "types": ["Key", "undefined"]}, True, False)
IDBKeyRange_Upper = IDBProperty("IDBKeyRange", "upper", {"kind": "Union", "types": ["Key", "undefined"]}, True, False)
IDBKeyRange_LowerOpen = IDBProperty("IDBKeyRange", "lowerOpen", "boolean", True, False)
IDBKeyRange_UpperOpen = IDBProperty("IDBKeyRange", "upperOpen", "boolean", True, False)
IDBVersionChangeEvent_OldVersion = IDBProperty("IDBVersionChangeEvent", "oldVersion", "unsigned long long", True, False)
IDBVersionChangeEvent_NewVersion = IDBProperty("IDBVersionChangeEvent", "newVersion", {"kind": "Union", "types": ["unsigned long long", "null"]}, True, True)
IDBDatabaseInfo_Name = IDBProperty("IDBDatabaseInfo", "name", {"kind": "Union", "types": ["DOMString", "null"]}, True, True)
IDBDatabaseInfo_Version = IDBProperty("IDBDatabaseInfo", "version", {"kind": "Union", "types": ["unsigned long long", "null"]}, True, True)

# —— 映射与访问器 ——
PROPERTY_BY_QNAME = {obj.qname(): obj for obj in globals().values() if isinstance(obj, IDBProperty)}

PROPERTY_BY_IFACE = {}
for _obj in list(globals().values()):
    if isinstance(_obj, IDBProperty):
        PROPERTY_BY_IFACE.setdefault(_obj.interface, {})[_obj.name] = _obj

def get_property(interface: str, name: str):
    return PROPERTY_BY_QNAME.get(f"{interface}.{name}")

def get_properties_of(interface: str):
    return list(PROPERTY_BY_IFACE.get(interface, {}).values())

__all__ = [k for k, v in globals().items() if isinstance(v, IDBProperty)] + [
    'PROPERTY_BY_QNAME', 'PROPERTY_BY_IFACE', 'get_property', 'get_properties_of'
]
