from __future__ import annotations
from typing import List
from schema.IDBEnum import OperationEnum, RequestEnum, EventEnum, InterfaceEnum
from schema.core.IDBEvent import Event

OP = OperationEnum  # alias

# NOTE:
# - allowed_ops is now List[OperationEnum] (no interface pairing).
# - Mapping to concrete Operation instances should be done at runtime
#   using your scope/targets (e.g., OP_BY_KEY with "op@Interface").

EVENT_LIST: List[Event] = [
    # --- IDBOpenDBRequest: upgradeneeded / blocked / success / error ---
    Event(
        id=EventEnum.UPGRADE_NEEDED,
        target=RequestEnum.IDB_OPEN_DB_REQUEST,
        bubbles=False, cancelable=False,
        allowed_ops=[
            # Schema changes (versionchange only)
            OP.CREATE_OBJECT_STORE, OP.DELETE_OBJECT_STORE,
            OP.CREATE_INDEX, OP.DELETE_INDEX,
            # Data migration (within versionchange transaction)
            OP.INDEX,
            OP.ADD, OP.PUT, OP.DELETE, OP.CLEAR, OP.COUNT,
            OP.GET, OP.GET_ALL, OP.GET_KEY, OP.GET_ALL_KEYS,
            OP.OPEN_CURSOR, OP.OPEN_KEY_CURSOR,
            # Cursor movement/update
            OP.CURSOR_CONTINUE, OP.CURSOR_ADVANCE,
            OP.CURSOR_CONTINUE_PRIMARY_KEY,
            OP.CURSOR_DELETE, OP.CURSOR_UPDATE,
        ],
    ),
    Event(
        id=EventEnum.BLOCKED,
        target=RequestEnum.IDB_OPEN_DB_REQUEST,
        bubbles=False, cancelable=False,
        allowed_ops=[],
    ),
    Event(
        id=EventEnum.SUCCESS,
        target=RequestEnum.IDB_OPEN_DB_REQUEST,
        bubbles=False, cancelable=False,
        allowed_ops=[
            OP.TRANSACTION, OP.CLOSE,
        ],
    ),
    Event(
        id=EventEnum.ERROR,
        target=RequestEnum.IDB_OPEN_DB_REQUEST,
        bubbles=True, cancelable=True,
        allowed_ops=[],
    ),

    # --- IDBRequest: success / error （普通请求）---
    Event(
        id=EventEnum.SUCCESS,
        target=RequestEnum.IDB_REQUEST,
        bubbles=False, cancelable=False,
        allowed_ops=[
            # via the active transaction
            OP.OBJECT_STORE,
            # ObjectStore ops
            OP.ADD, OP.PUT, OP.DELETE, OP.CLEAR, OP.COUNT,
            OP.GET, OP.GET_ALL, OP.GET_KEY, OP.GET_ALL_KEYS,
            OP.OPEN_CURSOR, OP.OPEN_KEY_CURSOR, OP.INDEX,
            # Cursors
            OP.CURSOR_CONTINUE, OP.CURSOR_ADVANCE,
            OP.CURSOR_CONTINUE_PRIMARY_KEY,
            OP.CURSOR_DELETE, OP.CURSOR_UPDATE,
        ],
    ),
    Event(
        id=EventEnum.ERROR,
        target=RequestEnum.IDB_REQUEST,
        bubbles=True, cancelable=True,
        allowed_ops=[
            OP.OBJECT_STORE,
            OP.ADD, OP.PUT, OP.DELETE, OP.CLEAR, OP.COUNT,
            OP.GET, OP.GET_ALL, OP.GET_KEY, OP.GET_ALL_KEYS,
            OP.OPEN_CURSOR, OP.OPEN_KEY_CURSOR, OP.INDEX,
            OP.CURSOR_CONTINUE, OP.CURSOR_ADVANCE,
            OP.CURSOR_CONTINUE_PRIMARY_KEY,
            OP.CURSOR_DELETE, OP.CURSOR_UPDATE,
        ],
    ),

    # --- IDBTransaction: complete / abort / error ---
    Event(
        id=EventEnum.COMPLETE,
        target=InterfaceEnum.IDB_TRANSACTION,
        bubbles=False, cancelable=False,
        allowed_ops=[],
    ),
    Event(
        id=EventEnum.ABORT,
        target=InterfaceEnum.IDB_TRANSACTION,
        bubbles=True, cancelable=False,
        allowed_ops=[],
    ),
    Event(
        id=EventEnum.ERROR,
        target=InterfaceEnum.IDB_TRANSACTION,
        bubbles=True, cancelable=False,
        allowed_ops=[],
    ),

    # --- IDBDatabase: versionchange / close ---
    Event(
        id=EventEnum.VERSION_CHANGE,
        target=InterfaceEnum.IDB_DATABASE,
        bubbles=False, cancelable=False,
        allowed_ops=[OP.CLOSE],
    ),
    Event(
        id=EventEnum.CLOSE,
        target=InterfaceEnum.IDB_DATABASE,
        bubbles=False, cancelable=False,
        allowed_ops=[],
    ),
]
