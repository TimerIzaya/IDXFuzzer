# schema/IDBInterfaceRegistry.py
from typing import Dict, List
from schema.IDBEnum import InterfaceEnum as IF
from schema.core.IDBInterface import Interface

IF_FACTORY      = Interface(kind=IF.IDB_FACTORY,            isEventTarget=False)
IF_DATABASE     = Interface(kind=IF.IDB_DATABASE,           isEventTarget=True)
IF_TRANSACTION  = Interface(kind=IF.IDB_TRANSACTION,        isEventTarget=True)
IF_OBJECT_STORE = Interface(kind=IF.IDB_OBJECT_STORE,       isEventTarget=False)
IF_INDEX        = Interface(kind=IF.IDB_INDEX,              isEventTarget=False)
IF_CURSOR       = Interface(kind=IF.IDB_CURSOR,             isEventTarget=False)
IF_CURSOR_WV    = Interface(kind=IF.IDB_CURSOR_WITH_VALUE,  isEventTarget=False)

INTERFACE_LIST: List[Interface] = [
    IF_FACTORY, IF_DATABASE, IF_TRANSACTION,
    IF_OBJECT_STORE, IF_INDEX, IF_CURSOR, IF_CURSOR_WV,
]

INTERFACE_BY_KIND: Dict[IF, Interface] = {it.kind: it for it in INTERFACE_LIST}
