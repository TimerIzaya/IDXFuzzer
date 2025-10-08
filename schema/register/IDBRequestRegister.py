from __future__ import annotations

from typing import List

from schema.IDBEnum import OperationEnum, RequestEnum, EventEnum, InterfaceEnum, BasicTypeEnum
from schema.IDBType import (
    BasicType, InterfaceType
)
from schema.core.IDBRequest import Request

OP = OperationEnum
IF = InterfaceEnum

# ----- Request instances (explicit events) -----
REQ_OPEN = Request(
    id=RequestEnum.IDB_OPEN_DB_REQUEST,
    expected_result=InterfaceType(InterfaceEnum.IDB_DATABASE),
    has_transaction=False,
    # 明确写出：open()/deleteDatabase() 专属的 4 个事件
    events=[
        EventEnum.UPGRADE_NEEDED,
        EventEnum.BLOCKED,
        EventEnum.SUCCESS,
        EventEnum.ERROR,
    ],
)

REQ_GENERIC = Request(
    id=RequestEnum.IDB_REQUEST,
    expected_result=BasicType(BasicTypeEnum.ANY),
    has_transaction=True,
    # 普通请求：success / error
    events=[
        EventEnum.SUCCESS,
        EventEnum.ERROR,
    ],
)

REQUEST_LIST: List[Request] = [
    REQ_OPEN,
    REQ_GENERIC,
]
