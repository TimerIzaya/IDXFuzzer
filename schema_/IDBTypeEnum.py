# -*- coding: utf-8 -*-
# IDBTypeEnum.py
# 由 IDBTypeExtractor.py 生成（无注册器、无二次解析）：全部类型已初始化为对象
from schema_.define.IDBType import (IDBType, BasicType, EnumType, DictType, DictField, UnionType, ArrayType)

# ============ 基本类型 ============
DOMString = BasicType("DOMString")
Boolean = BasicType("boolean")
Number = BasicType("number")
Unsigned_long = BasicType("unsigned long")
Unsigned_long_long = BasicType("unsigned long long")
Undefined = BasicType("undefined")
Null = BasicType("null")
Any = BasicType("any")
Date = BasicType("Date")
ArrayBuffer = BasicType("ArrayBuffer")
DOMException = BasicType("DOMException")
Event = BasicType("Event")
DOMStringList = BasicType("DOMStringList")
Promise = BasicType("Promise")

# ============ 占位接口（在JSON未声明但被引用） ============
IDBKeyRange = BasicType("IDBKeyRange")

# ============ 枚举类型（一次性完成） ============
CursorDirection = EnumType("CursorDirection", ["next", "nextunique", "prev", "prevunique"])
IDBTransactionMode = EnumType("IDBTransactionMode", ["readonly", "readwrite", "versionchange"])
IDBRequestReadyState = EnumType("IDBRequestReadyState", ["pending", "done"])
IDBTransactionDurability = EnumType("IDBTransactionDurability", ["default", "relaxed", "strict"])

# ============ 字典/联合：先建空壳 ============
IDBTransactionOptions = DictType("IDBTransactionOptions", [])
IDBObjectStoreParameters = DictType("IDBObjectStoreParameters", [])
IDBIndexParameters = DictType("IDBIndexParameters", [])
KeyPath = UnionType("KeyPath", [])
Key = UnionType("Key", [])
KeyOrRange = UnionType("KeyOrRange", [])

# ============ 填充：把空壳变成完整对象（对象引用/ArrayType） ============
IDBTransactionOptions.fields = [DictField("durability", IDBTransactionDurability, True, False)]
IDBObjectStoreParameters.fields = [DictField("keyPath", KeyPath, True, False), DictField("autoIncrement", Boolean, True, False)]
IDBIndexParameters.fields = [DictField("unique", Boolean, True, False), DictField("multiEntry", Boolean, True, False)]
KeyPath.types = [DOMString, ArrayType(DOMString)]
Key.types = [Number, DOMString, Date, ArrayBuffer, ArrayType(Key)]
KeyOrRange.types = [Key, IDBKeyRange]


# ============ 映射：名称 -> 对象 ============
TYPE_BY_NAME = { obj.name: obj for obj in globals().values() if isinstance(obj, IDBType) }

def get_type(name: str):
    return TYPE_BY_NAME.get(name)

def all_types():
    return list(TYPE_BY_NAME.values())

__all__ = [name for name in globals().keys()
           if not name.startswith('_')
           and name not in ('IDBType','BasicType','EnumType','DictType','DictField','UnionType','ArrayType')]
