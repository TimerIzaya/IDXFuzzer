from __future__ import annotations

from token import OP
from typing import List
from schema.IDBEnum import OperationEnum, RequestEnum, EventEnum, InterfaceEnum, BasicTypeEnum
from schema.IDBType import (
    Type, BasicType, InterfaceType, AliasType, UnionType, SequenceType,
    IDBKeyPathType, IDBValidKeyType, IDBObjectStoreParametersType, IDBIndexParametersType
)
from schema.core.IDBEvent import Event
from schema.core.IDBOperation import Operation, Param
from schema.core.IDBRequest import Request

OP = OperationEnum
IF = InterfaceEnum



# ----- Operation instances -----
OPEN = Operation(
    id=OperationEnum.OPEN,
    target=InterfaceEnum.IDB_FACTORY,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING)),
          Param("version", BasicType(BasicTypeEnum.UNSIGNED_LONG_LONG), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_OPEN_DB_REQUEST),
)
DELETE_DATABASE = Operation(
    id=OperationEnum.DELETE_DATABASE,
    target=InterfaceEnum.IDB_FACTORY,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING))],
    ret_type=InterfaceType(InterfaceEnum.IDB_OPEN_DB_REQUEST),
)
TRANSACTION = Operation(
    id=OperationEnum.TRANSACTION,
    target=InterfaceEnum.IDB_DATABASE,
    args=[Param("storeNames", UnionType([
              SequenceType(BasicType(BasicTypeEnum.DOM_STRING)),
              BasicType(BasicTypeEnum.DOM_STRING),
            ])),
          Param("mode", AliasType("TransactionMode"), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_TRANSACTION),
)
CLOSE = Operation(
    id=OperationEnum.CLOSE,
    target=InterfaceEnum.IDB_DATABASE,
    args=[],
    ret_type=AliasType("void"),
)
CREATE_OBJECT_STORE = Operation(
    id=OperationEnum.CREATE_OBJECT_STORE,
    target=InterfaceEnum.IDB_DATABASE,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING)),
          Param("options", IDBObjectStoreParametersType, optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_OBJECT_STORE),
)
DELETE_OBJECT_STORE = Operation(
    id=OperationEnum.DELETE_OBJECT_STORE,
    target=InterfaceEnum.IDB_DATABASE,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING))],
    ret_type=AliasType("void"),
)
OBJECT_STORE = Operation(
    id=OperationEnum.OBJECT_STORE,
    target=InterfaceEnum.IDB_TRANSACTION,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING))],
    ret_type=InterfaceType(InterfaceEnum.IDB_OBJECT_STORE),
)
ADD = Operation(
    id=OperationEnum.ADD,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("value", BasicType(BasicTypeEnum.ANY)),
          Param("key", IDBValidKeyType, optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
PUT = Operation(
    id=OperationEnum.PUT,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("value", BasicType(BasicTypeEnum.ANY)),
          Param("key", IDBValidKeyType, optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
GET = Operation(
    id=OperationEnum.GET,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("key", IDBValidKeyType)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
GET_ALL = Operation(
    id=OperationEnum.GET_ALL,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("count", BasicType(BasicTypeEnum.UNSIGNED_LONG), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
GET_KEY = Operation(
    id=OperationEnum.GET_KEY,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("key", IDBValidKeyType)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
GET_ALL_KEYS = Operation(
    id=OperationEnum.GET_ALL_KEYS,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("count", BasicType(BasicTypeEnum.UNSIGNED_LONG), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
DELETE = Operation(
    id=OperationEnum.DELETE,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("key", IDBValidKeyType)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
CLEAR = Operation(
    id=OperationEnum.CLEAR,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
COUNT = Operation(
    id=OperationEnum.COUNT,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
OPEN_CURSOR = Operation(
    id=OperationEnum.OPEN_CURSOR,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("direction", AliasType("CursorDirection"), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
OPEN_KEY_CURSOR = Operation(
    id=OperationEnum.OPEN_KEY_CURSOR,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("direction", AliasType("CursorDirection"), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX = Operation(
    id=OperationEnum.INDEX,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING))],
    ret_type=InterfaceType(InterfaceEnum.IDB_INDEX),
)
CREATE_INDEX = Operation(
    id=OperationEnum.CREATE_INDEX,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING)),
          Param("keyPath", IDBKeyPathType),
          Param("options", IDBIndexParametersType, optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_INDEX),
)
DELETE_INDEX = Operation(
    id=OperationEnum.DELETE_INDEX,
    target=InterfaceEnum.IDB_OBJECT_STORE,
    args=[Param("id", BasicType(BasicTypeEnum.DOM_STRING))],
    ret_type=AliasType("void"),
)
INDEX_GET = Operation(
    id=OperationEnum.GET,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("key", IDBValidKeyType)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_GET_KEY = Operation(
    id=OperationEnum.GET_KEY,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("key", IDBValidKeyType)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_GET_ALL = Operation(
    id=OperationEnum.GET_ALL,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("count", BasicType(BasicTypeEnum.UNSIGNED_LONG), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_GET_ALL_KEYS = Operation(
    id=OperationEnum.GET_ALL_KEYS,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("count", BasicType(BasicTypeEnum.UNSIGNED_LONG), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_COUNT = Operation(
    id=OperationEnum.COUNT,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_OPEN_CURSOR = Operation(
    id=OperationEnum.OPEN_CURSOR,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("direction", AliasType("CursorDirection"), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
INDEX_OPEN_KEY_CURSOR = Operation(
    id=OperationEnum.OPEN_KEY_CURSOR,
    target=InterfaceEnum.IDB_INDEX,
    args=[Param("query", UnionType([InterfaceType(InterfaceEnum.IDB_KEY_RANGE),
                                    AliasType("IDBValidKey"),
                                    BasicType(BasicTypeEnum.NULL)]), optional=True),
          Param("direction", AliasType("CursorDirection"), optional=True)],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
CURSOR_CONTINUE = Operation(
    id=OperationEnum.CURSOR_CONTINUE,
    target=InterfaceEnum.IDB_CURSOR,
    args=[Param("key", IDBValidKeyType, optional=True)],
    ret_type=AliasType("void"),
)
CURSOR_ADVANCE = Operation(
    id=OperationEnum.CURSOR_ADVANCE,
    target=InterfaceEnum.IDB_CURSOR,
    args=[Param("count", BasicType(BasicTypeEnum.UNSIGNED_LONG))],
    ret_type=AliasType("void"),
)
CURSOR_CONTINUE_PRIMARY_KEY = Operation(
    id=OperationEnum.CURSOR_CONTINUE_PRIMARY_KEY,
    target=InterfaceEnum.IDB_CURSOR,
    args=[Param("key", IDBValidKeyType), Param("primaryKey", IDBValidKeyType)],
    ret_type=AliasType("void"),
)
CURSOR_UPDATE = Operation(
    id=OperationEnum.CURSOR_UPDATE,
    target=InterfaceEnum.IDB_CURSOR_WITH_VALUE,
    args=[Param("value", BasicType(BasicTypeEnum.ANY))],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)
CURSOR_DELETE = Operation(
    id=OperationEnum.CURSOR_DELETE,
    target=InterfaceEnum.IDB_CURSOR,
    args=[],
    ret_type=InterfaceType(InterfaceEnum.IDB_REQUEST),
)

OPERATION_LIST: List[Operation] = [
    OPEN, DELETE_DATABASE,
    TRANSACTION, CLOSE, CREATE_OBJECT_STORE, DELETE_OBJECT_STORE,
    OBJECT_STORE,
    ADD, PUT, GET, GET_ALL, GET_KEY, GET_ALL_KEYS, DELETE, CLEAR, COUNT,
    OPEN_CURSOR, OPEN_KEY_CURSOR, INDEX, CREATE_INDEX, DELETE_INDEX,
    INDEX_GET, INDEX_GET_KEY, INDEX_GET_ALL, INDEX_GET_ALL_KEYS, INDEX_COUNT,
    INDEX_OPEN_CURSOR, INDEX_OPEN_KEY_CURSOR,
    CURSOR_CONTINUE, CURSOR_ADVANCE, CURSOR_CONTINUE_PRIMARY_KEY, CURSOR_UPDATE, CURSOR_DELETE,
]

