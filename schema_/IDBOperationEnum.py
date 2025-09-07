from typing import List
from schema_.IDBOpearationExtracter import MethodOperation, PropertyOperation, EventOperation, Param

# ===== MethodOperation (42) =====
IDBCursor__advance             = MethodOperation(interfaceName='IDBCursor', name='advance', isStatic=False, params=[Param(name='count', typeRef='unsigned long', optional=False, default=None)], returns='undefined', depOps=[], incOps=[]),
IDBCursor__continue            = MethodOperation(interfaceName='IDBCursor', name='continue', isStatic=False, params=[Param(name='key', typeRef='Key', optional=True, default=None)], returns='undefined', depOps=[], incOps=[]),
IDBCursor__continuePrimaryKey  = MethodOperation(interfaceName='IDBCursor', name='continuePrimaryKey', isStatic=False, params=[Param(name='key', typeRef='Key', optional=False, default=None), Param(name='primaryKey', typeRef='Key', optional=False, default=None)], returns='undefined', depOps=[], incOps=[]),
IDBCursor__delete              = MethodOperation(interfaceName='IDBCursor', name='delete', isStatic=False, params=[], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['undefined']}, depOps=[], incOps=[]),
IDBCursor__update              = MethodOperation(interfaceName='IDBCursor', name='update', isStatic=False, params=[Param(name='value', typeRef='any', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['Key']}, depOps=[], incOps=[]),
IDBDatabase__close             = MethodOperation(interfaceName='IDBDatabase', name='close', isStatic=False, params=[], returns='undefined', depOps=[], incOps=[]),
IDBDatabase__createObjectStore = MethodOperation(interfaceName='IDBDatabase', name='createObjectStore', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None), Param(name='options', typeRef='IDBObjectStoreParameters', optional=True, default=None)], returns='IDBObjectStore', depOps=[], incOps=[]),
IDBDatabase__deleteObjectStore = MethodOperation(interfaceName='IDBDatabase', name='deleteObjectStore', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None)], returns='undefined', depOps=[], incOps=[]),
IDBDatabase__transaction       = MethodOperation(interfaceName='IDBDatabase', name='transaction', isStatic=False, params=[Param(name='storeNames', typeRef={'kind': 'Union', 'types': ['DOMString', {'kind': 'Array', 'element': 'DOMString'}]}, optional=False, default=None), Param(name='mode', typeRef='IDBTransactionMode', optional=True, default=None), Param(name='options', typeRef='IDBTransactionOptions', optional=True, default=None)], returns='IDBTransaction', depOps=[], incOps=[]),
IDBFactory__cmp                = MethodOperation(interfaceName='IDBFactory', name='cmp', isStatic=False, params=[Param(name='first', typeRef='Key', optional=False, default=None), Param(name='second', typeRef='Key', optional=False, default=None)], returns='number', depOps=[], incOps=[]),
IDBFactory__databases          = MethodOperation(interfaceName='IDBFactory', name='databases', isStatic=False, params=[], returns={'kind': 'Generic', 'base': 'Promise', 'args': [{'kind': 'Array', 'element': 'IDBDatabaseInfo'}]}, depOps=[], incOps=[]),
IDBFactory__deleteDatabase     = MethodOperation(interfaceName='IDBFactory', name='deleteDatabase', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None)], returns='IDBOpenDBRequest', depOps=[], incOps=[]),
IDBFactory__open               = MethodOperation(interfaceName='IDBFactory', name='open', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None), Param(name='version', typeRef='unsigned long long', optional=True, default=None)], returns='IDBOpenDBRequest', depOps=[], incOps=[]),
IDBIndex__count                = MethodOperation(interfaceName='IDBIndex', name='count', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['unsigned long long']}, depOps=[], incOps=[]),
IDBIndex__get                  = MethodOperation(interfaceName='IDBIndex', name='get', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['any']}, depOps=[], incOps=[]),
IDBIndex__getAll               = MethodOperation(interfaceName='IDBIndex', name='getAll', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='count', typeRef='unsigned long', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Array', 'element': 'any'}]}, depOps=[], incOps=[]),
IDBIndex__getAllKeys           = MethodOperation(interfaceName='IDBIndex', name='getAllKeys', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='count', typeRef='unsigned long', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Array', 'element': 'Key'}]}, depOps=[], incOps=[]),
IDBIndex__getKey               = MethodOperation(interfaceName='IDBIndex', name='getKey', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['Key', 'undefined']}]}, depOps=[], incOps=[]),
IDBIndex__openCursor           = MethodOperation(interfaceName='IDBIndex', name='openCursor', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='direction', typeRef='CursorDirection', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['IDBCursorWithValue', 'null']}]}, depOps=[], incOps=[]),
IDBIndex__openKeyCursor        = MethodOperation(interfaceName='IDBIndex', name='openKeyCursor', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='direction', typeRef='CursorDirection', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['IDBCursor', 'null']}]}, depOps=[], incOps=[]),
IDBKeyRange__bound             = MethodOperation(interfaceName='IDBKeyRange', name='bound', isStatic=True, params=[Param(name='lower', typeRef='Key', optional=False, default=None), Param(name='upper', typeRef='Key', optional=False, default=None), Param(name='lowerOpen', typeRef='boolean', optional=True, default=None), Param(name='upperOpen', typeRef='boolean', optional=True, default=None)], returns='IDBKeyRange', depOps=[], incOps=[]),
IDBKeyRange__includes          = MethodOperation(interfaceName='IDBKeyRange', name='includes', isStatic=False, params=[Param(name='key', typeRef='Key', optional=False, default=None)], returns='boolean', depOps=[], incOps=[]),
IDBKeyRange__lowerBound        = MethodOperation(interfaceName='IDBKeyRange', name='lowerBound', isStatic=True, params=[Param(name='lower', typeRef='Key', optional=False, default=None), Param(name='open', typeRef='boolean', optional=True, default=None)], returns='IDBKeyRange', depOps=[], incOps=[]),
IDBKeyRange__only              = MethodOperation(interfaceName='IDBKeyRange', name='only', isStatic=True, params=[Param(name='value', typeRef='Key', optional=False, default=None)], returns='IDBKeyRange', depOps=[], incOps=[]),
IDBKeyRange__upperBound        = MethodOperation(interfaceName='IDBKeyRange', name='upperBound', isStatic=True, params=[Param(name='upper', typeRef='Key', optional=False, default=None), Param(name='open', typeRef='boolean', optional=True, default=None)], returns='IDBKeyRange', depOps=[], incOps=[]),
IDBObjectStore__add            = MethodOperation(interfaceName='IDBObjectStore', name='add', isStatic=False, params=[Param(name='value', typeRef='any', optional=False, default=None), Param(name='key', typeRef='Key', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['Key']}, depOps=[], incOps=[]),
IDBObjectStore__clear          = MethodOperation(interfaceName='IDBObjectStore', name='clear', isStatic=False, params=[], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['undefined']}, depOps=[], incOps=[]),
IDBObjectStore__count          = MethodOperation(interfaceName='IDBObjectStore', name='count', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['unsigned long long']}, depOps=[], incOps=[]),
IDBObjectStore__createIndex    = MethodOperation(interfaceName='IDBObjectStore', name='createIndex', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None), Param(name='keyPath', typeRef='KeyPath', optional=False, default=None), Param(name='options', typeRef='IDBIndexParameters', optional=True, default=None)], returns='IDBIndex', depOps=[], incOps=[]),
IDBObjectStore__delete         = MethodOperation(interfaceName='IDBObjectStore', name='delete', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['undefined']}, depOps=[], incOps=[]),
IDBObjectStore__deleteIndex    = MethodOperation(interfaceName='IDBObjectStore', name='deleteIndex', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None)], returns='undefined', depOps=[], incOps=[]),
IDBObjectStore__get            = MethodOperation(interfaceName='IDBObjectStore', name='get', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['any']}, depOps=[], incOps=[]),
IDBObjectStore__getAll         = MethodOperation(interfaceName='IDBObjectStore', name='getAll', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='count', typeRef='unsigned long', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Array', 'element': 'any'}]}, depOps=[], incOps=[]),
IDBObjectStore__getAllKeys     = MethodOperation(interfaceName='IDBObjectStore', name='getAllKeys', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='count', typeRef='unsigned long', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Array', 'element': 'Key'}]}, depOps=[], incOps=[]),
IDBObjectStore__getKey         = MethodOperation(interfaceName='IDBObjectStore', name='getKey', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=False, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['Key', 'undefined']}]}, depOps=[], incOps=[]),
IDBObjectStore__index          = MethodOperation(interfaceName='IDBObjectStore', name='index', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None)], returns='IDBIndex', depOps=[], incOps=[]),
IDBObjectStore__openCursor     = MethodOperation(interfaceName='IDBObjectStore', name='openCursor', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='direction', typeRef='CursorDirection', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['IDBCursorWithValue', 'null']}]}, depOps=[], incOps=[]),
IDBObjectStore__openKeyCursor  = MethodOperation(interfaceName='IDBObjectStore', name='openKeyCursor', isStatic=False, params=[Param(name='query', typeRef='KeyOrRange', optional=True, default=None), Param(name='direction', typeRef='CursorDirection', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': [{'kind': 'Union', 'types': ['IDBCursor', 'null']}]}, depOps=[], incOps=[]),
IDBObjectStore__put            = MethodOperation(interfaceName='IDBObjectStore', name='put', isStatic=False, params=[Param(name='value', typeRef='any', optional=False, default=None), Param(name='key', typeRef='Key', optional=True, default=None)], returns={'kind': 'Generic', 'base': 'IDBRequest', 'args': ['Key']}, depOps=[], incOps=[]),
IDBTransaction__abort          = MethodOperation(interfaceName='IDBTransaction', name='abort', isStatic=False, params=[], returns='undefined', depOps=[], incOps=[]),
IDBTransaction__commit         = MethodOperation(interfaceName='IDBTransaction', name='commit', isStatic=False, params=[], returns='undefined', depOps=[], incOps=[]),
IDBTransaction__objectStore    = MethodOperation(interfaceName='IDBTransaction', name='objectStore', isStatic=False, params=[Param(name='name', typeRef='DOMString', optional=False, default=None)], returns='IDBObjectStore', depOps=[], incOps=[]),

# ===== EventOperation (9) =====
IDBDatabase__onclose              = EventOperation(interfaceName='IDBDatabase', name='onclose', eventName='close', depOps=[], incOps=[]),
IDBDatabase__onversionchange      = EventOperation(interfaceName='IDBDatabase', name='onversionchange', eventName='versionchange', depOps=[], incOps=[]),
IDBOpenDBRequest__onblocked       = EventOperation(interfaceName='IDBOpenDBRequest', name='onblocked', eventName='blocked', depOps=[], incOps=[]),
IDBOpenDBRequest__onupgradeneeded = EventOperation(interfaceName='IDBOpenDBRequest', name='onupgradeneeded', eventName='upgradeneeded', depOps=[], incOps=[]),
IDBRequest__onerror               = EventOperation(interfaceName='IDBRequest', name='onerror', eventName='error', depOps=[], incOps=[]),
IDBRequest__onsuccess             = EventOperation(interfaceName='IDBRequest', name='onsuccess', eventName='success', depOps=[], incOps=[]),
IDBTransaction__onabort           = EventOperation(interfaceName='IDBTransaction', name='onabort', eventName='abort', depOps=[], incOps=[]),
IDBTransaction__oncomplete        = EventOperation(interfaceName='IDBTransaction', name='oncomplete', eventName='complete', depOps=[], incOps=[]),
IDBTransaction__onerror           = EventOperation(interfaceName='IDBTransaction', name='onerror', eventName='error', depOps=[], incOps=[]),

# ===== PropertyOperation (36) =====
IDBCursor__direction              = PropertyOperation(interfaceName='IDBCursor', name='direction', readonly=True, typeRef='CursorDirection', depOps=[], incOps=[]),
IDBCursor__key                    = PropertyOperation(interfaceName='IDBCursor', name='key', readonly=True, typeRef='Key', depOps=[], incOps=[]),
IDBCursor__primaryKey             = PropertyOperation(interfaceName='IDBCursor', name='primaryKey', readonly=True, typeRef='Key', depOps=[], incOps=[]),
IDBCursor__source                 = PropertyOperation(interfaceName='IDBCursor', name='source', readonly=True, typeRef={'kind': 'Union', 'types': ['IDBObjectStore', 'IDBIndex']}, depOps=[], incOps=[]),
IDBCursorWithValue__value         = PropertyOperation(interfaceName='IDBCursorWithValue', name='value', readonly=True, typeRef='any', depOps=[], incOps=[]),
IDBDatabase__name                 = PropertyOperation(interfaceName='IDBDatabase', name='name', readonly=True, typeRef='DOMString', depOps=[], incOps=[]),
IDBDatabase__objectStoreNames     = PropertyOperation(interfaceName='IDBDatabase', name='objectStoreNames', readonly=True, typeRef='DOMStringList', depOps=[], incOps=[]),
IDBDatabase__version              = PropertyOperation(interfaceName='IDBDatabase', name='version', readonly=True, typeRef='unsigned long long', depOps=[], incOps=[]),
IDBDatabaseInfo__name             = PropertyOperation(interfaceName='IDBDatabaseInfo', name='name', readonly=True, typeRef={'kind': 'Union', 'types': ['DOMString', 'null']}, depOps=[], incOps=[]),
IDBDatabaseInfo__version          = PropertyOperation(interfaceName='IDBDatabaseInfo', name='version', readonly=True, typeRef={'kind': 'Union', 'types': ['unsigned long long', 'null']}, depOps=[], incOps=[]),
IDBIndex__keyPath                 = PropertyOperation(interfaceName='IDBIndex', name='keyPath', readonly=True, typeRef={'kind': 'Union', 'types': ['KeyPath', 'null']}, depOps=[], incOps=[]),
IDBIndex__multiEntry              = PropertyOperation(interfaceName='IDBIndex', name='multiEntry', readonly=True, typeRef='boolean', depOps=[], incOps=[]),
IDBIndex__name                    = PropertyOperation(interfaceName='IDBIndex', name='name', readonly=True, typeRef='DOMString', depOps=[], incOps=[]),
IDBIndex__objectStore             = PropertyOperation(interfaceName='IDBIndex', name='objectStore', readonly=True, typeRef='IDBObjectStore', depOps=[], incOps=[]),
IDBIndex__unique                  = PropertyOperation(interfaceName='IDBIndex', name='unique', readonly=True, typeRef='boolean', depOps=[], incOps=[]),
IDBKeyRange__lower                = PropertyOperation(interfaceName='IDBKeyRange', name='lower', readonly=True, typeRef={'kind': 'Union', 'types': ['Key', 'undefined']}, depOps=[], incOps=[]),
IDBKeyRange__lowerOpen            = PropertyOperation(interfaceName='IDBKeyRange', name='lowerOpen', readonly=True, typeRef='boolean', depOps=[], incOps=[]),
IDBKeyRange__upper                = PropertyOperation(interfaceName='IDBKeyRange', name='upper', readonly=True, typeRef={'kind': 'Union', 'types': ['Key', 'undefined']}, depOps=[], incOps=[]),
IDBKeyRange__upperOpen            = PropertyOperation(interfaceName='IDBKeyRange', name='upperOpen', readonly=True, typeRef='boolean', depOps=[], incOps=[]),
IDBObjectStore__autoIncrement     = PropertyOperation(interfaceName='IDBObjectStore', name='autoIncrement', readonly=True, typeRef='boolean', depOps=[], incOps=[]),
IDBObjectStore__indexNames        = PropertyOperation(interfaceName='IDBObjectStore', name='indexNames', readonly=True, typeRef='DOMStringList', depOps=[], incOps=[]),
IDBObjectStore__keyPath           = PropertyOperation(interfaceName='IDBObjectStore', name='keyPath', readonly=True, typeRef={'kind': 'Union', 'types': ['KeyPath', 'null']}, depOps=[], incOps=[]),
IDBObjectStore__name              = PropertyOperation(interfaceName='IDBObjectStore', name='name', readonly=False, typeRef='DOMString', depOps=[], incOps=[]),
IDBObjectStore__transaction       = PropertyOperation(interfaceName='IDBObjectStore', name='transaction', readonly=True, typeRef='IDBTransaction', depOps=[], incOps=[]),
IDBRequest__error                 = PropertyOperation(interfaceName='IDBRequest', name='error', readonly=True, typeRef={'kind': 'Union', 'types': ['DOMException', 'null']}, depOps=[], incOps=[]),
IDBRequest__readyState            = PropertyOperation(interfaceName='IDBRequest', name='readyState', readonly=True, typeRef='IDBRequestReadyState', depOps=[], incOps=[]),
IDBRequest__result                = PropertyOperation(interfaceName='IDBRequest', name='result', readonly=True, typeRef='any', depOps=[], incOps=[]),
IDBRequest__source                = PropertyOperation(interfaceName='IDBRequest', name='source', readonly=True, typeRef={'kind': 'Union', 'types': ['IDBObjectStore', 'IDBIndex', 'IDBCursor', 'null']}, depOps=[], incOps=[]),
IDBRequest__transaction           = PropertyOperation(interfaceName='IDBRequest', name='transaction', readonly=True, typeRef={'kind': 'Union', 'types': ['IDBTransaction', 'null']}, depOps=[], incOps=[]),
IDBTransaction__db                = PropertyOperation(interfaceName='IDBTransaction', name='db', readonly=True, typeRef='IDBDatabase', depOps=[], incOps=[]),
IDBTransaction__durability        = PropertyOperation(interfaceName='IDBTransaction', name='durability', readonly=True, typeRef='IDBTransactionDurability', depOps=[], incOps=[]),
IDBTransaction__error             = PropertyOperation(interfaceName='IDBTransaction', name='error', readonly=True, typeRef={'kind': 'Union', 'types': ['DOMException', 'null']}, depOps=[], incOps=[]),
IDBTransaction__mode              = PropertyOperation(interfaceName='IDBTransaction', name='mode', readonly=True, typeRef='IDBTransactionMode', depOps=[], incOps=[]),
IDBTransaction__objectStoreNames  = PropertyOperation(interfaceName='IDBTransaction', name='objectStoreNames', readonly=True, typeRef='DOMStringList', depOps=[], incOps=[]),
IDBVersionChangeEvent__newVersion = PropertyOperation(interfaceName='IDBVersionChangeEvent', name='newVersion', readonly=True, typeRef={'kind': 'Union', 'types': ['unsigned long long', 'null']}, depOps=[], incOps=[]),
IDBVersionChangeEvent__oldVersion = PropertyOperation(interfaceName='IDBVersionChangeEvent', name='oldVersion', readonly=True, typeRef='unsigned long long', depOps=[], incOps=[]),

# ===== wiring (depOps/incOps use variable names) =====

# ----- wiring: methods -----
IDBCursor__advance.depOps = [IDBRequest__onsuccess]
IDBCursor__continue.depOps = [IDBRequest__onsuccess]
IDBCursor__continuePrimaryKey.depOps = [IDBRequest__onsuccess]
IDBCursor__delete.depOps = [IDBRequest__onsuccess]
IDBCursor__delete.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBCursor__update.depOps = [IDBRequest__onsuccess]
IDBCursor__update.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBDatabase__close.depOps = [IDBRequest__onsuccess]
IDBDatabase__createObjectStore.depOps = [IDBOpenDBRequest__onupgradeneeded]
IDBDatabase__deleteObjectStore.depOps = [IDBOpenDBRequest__onupgradeneeded]
IDBDatabase__transaction.depOps = [IDBRequest__onsuccess]
IDBDatabase__transaction.incOps = [IDBTransaction__oncomplete, IDBTransaction__onabort, IDBTransaction__onerror, IDBTransaction__objectStore]
IDBFactory__cmp.depOps = [IDBFactory__open]
IDBFactory__databases.incOps = [IDBDatabaseInfo__name, IDBDatabaseInfo__version]
IDBFactory__deleteDatabase.incOps = [IDBOpenDBRequest__onblocked, IDBRequest__onsuccess, IDBRequest__onerror]
IDBFactory__open.incOps = [IDBOpenDBRequest__onblocked, IDBOpenDBRequest__onupgradeneeded, IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__count.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__count.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__get.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__get.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__getAll.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__getAll.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__getAllKeys.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__getAllKeys.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__getKey.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__getKey.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__openCursor.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__openCursor.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBIndex__openKeyCursor.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__openKeyCursor.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBKeyRange__bound.incOps = [IDBKeyRange__lower, IDBKeyRange__upper, IDBKeyRange__lowerOpen, IDBKeyRange__upperOpen, IDBKeyRange__includes]
IDBKeyRange__includes.depOps = [IDBKeyRange__bound, IDBKeyRange__lowerBound, IDBKeyRange__upperBound, IDBKeyRange__only]
IDBKeyRange__lowerBound.incOps = [IDBKeyRange__lower, IDBKeyRange__upper, IDBKeyRange__lowerOpen, IDBKeyRange__upperOpen, IDBKeyRange__includes]
IDBKeyRange__only.incOps = [IDBKeyRange__lower, IDBKeyRange__upper, IDBKeyRange__lowerOpen, IDBKeyRange__upperOpen, IDBKeyRange__includes]
IDBKeyRange__upperBound.incOps = [IDBKeyRange__lower, IDBKeyRange__upper, IDBKeyRange__lowerOpen, IDBKeyRange__upperOpen, IDBKeyRange__includes]
IDBObjectStore__add.depOps = [IDBTransaction__objectStore]
IDBObjectStore__add.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__clear.depOps = [IDBTransaction__objectStore]
IDBObjectStore__clear.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__count.depOps = [IDBTransaction__objectStore]
IDBObjectStore__count.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__createIndex.depOps = [IDBOpenDBRequest__onupgradeneeded, IDBTransaction__objectStore]
IDBObjectStore__delete.depOps = [IDBTransaction__objectStore]
IDBObjectStore__delete.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__deleteIndex.depOps = [IDBOpenDBRequest__onupgradeneeded, IDBTransaction__objectStore]
IDBObjectStore__get.depOps = [IDBTransaction__objectStore]
IDBObjectStore__get.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__getAll.depOps = [IDBTransaction__objectStore]
IDBObjectStore__getAll.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__getAllKeys.depOps = [IDBTransaction__objectStore]
IDBObjectStore__getAllKeys.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__getKey.depOps = [IDBTransaction__objectStore]
IDBObjectStore__getKey.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__index.depOps = [IDBTransaction__objectStore]
IDBObjectStore__openCursor.depOps = [IDBTransaction__objectStore]
IDBObjectStore__openCursor.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__openKeyCursor.depOps = [IDBTransaction__objectStore]
IDBObjectStore__openKeyCursor.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBObjectStore__put.depOps = [IDBTransaction__objectStore]
IDBObjectStore__put.incOps = [IDBRequest__onsuccess, IDBRequest__onerror]
IDBTransaction__abort.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]
IDBTransaction__commit.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]
IDBTransaction__objectStore.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]

# ----- wiring: events -----
IDBDatabase__onclose.depOps = [IDBRequest__onsuccess]
IDBDatabase__onversionchange.depOps = [IDBRequest__onsuccess]
IDBOpenDBRequest__onblocked.depOps = [IDBFactory__open]
IDBOpenDBRequest__onupgradeneeded.incOps = [IDBRequest__result, IDBRequest__transaction, IDBDatabase__createObjectStore, IDBDatabase__deleteObjectStore, IDBTransaction__objectStore, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__index, IDBObjectStore__createIndex, IDBObjectStore__deleteIndex]
IDBRequest__onerror.depOps = [IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBIndex__count, IDBIndex__get, IDBIndex__getKey, IDBIndex__getAll, IDBIndex__getAllKeys, IDBIndex__openCursor, IDBIndex__openKeyCursor, IDBCursor__delete, IDBCursor__update, IDBFactory__open, IDBFactory__deleteDatabase]
IDBRequest__onsuccess.depOps = [IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBIndex__count, IDBIndex__get, IDBIndex__getKey, IDBIndex__getAll, IDBIndex__getAllKeys, IDBIndex__openCursor, IDBIndex__openKeyCursor, IDBCursor__delete, IDBCursor__update, IDBFactory__open, IDBFactory__deleteDatabase]
IDBRequest__onsuccess.incOps = [IDBDatabase__onversionchange, IDBDatabase__onclose, IDBDatabase__transaction, IDBDatabase__close, IDBCursor__advance, IDBCursor__continue, IDBCursor__continuePrimaryKey, IDBCursor__delete, IDBCursor__update]
IDBTransaction__onabort.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]
IDBTransaction__oncomplete.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]
IDBTransaction__onerror.depOps = [IDBDatabase__transaction, IDBOpenDBRequest__onupgradeneeded]

# ----- wiring: properties -----
IDBCursor__direction.depOps = [IDBRequest__onsuccess]
IDBCursor__key.depOps = [IDBRequest__onsuccess]
IDBCursor__primaryKey.depOps = [IDBRequest__onsuccess]
IDBCursor__source.depOps = [IDBRequest__onsuccess]
IDBCursorWithValue__value.depOps = [IDBRequest__onsuccess]
IDBDatabase__name.depOps = [IDBRequest__onsuccess]
IDBDatabase__objectStoreNames.depOps = [IDBRequest__onsuccess]
IDBDatabase__version.depOps = [IDBRequest__onsuccess]
IDBDatabaseInfo__name.depOps = [IDBFactory__open]
IDBDatabaseInfo__version.depOps = [IDBFactory__open]
IDBIndex__keyPath.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__multiEntry.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__name.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__objectStore.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBIndex__unique.depOps = [IDBObjectStore__index, IDBObjectStore__createIndex]
IDBKeyRange__lower.depOps = [IDBKeyRange__bound, IDBKeyRange__lowerBound, IDBKeyRange__upperBound, IDBKeyRange__only]
IDBKeyRange__lowerOpen.depOps = [IDBKeyRange__bound, IDBKeyRange__lowerBound, IDBKeyRange__upperBound, IDBKeyRange__only]
IDBKeyRange__upper.depOps = [IDBKeyRange__bound, IDBKeyRange__lowerBound, IDBKeyRange__upperBound, IDBKeyRange__only]
IDBKeyRange__upperOpen.depOps = [IDBKeyRange__bound, IDBKeyRange__lowerBound, IDBKeyRange__upperBound, IDBKeyRange__only]
IDBObjectStore__autoIncrement.depOps = [IDBTransaction__objectStore]
IDBObjectStore__indexNames.depOps = [IDBTransaction__objectStore]
IDBObjectStore__keyPath.depOps = [IDBTransaction__objectStore]
IDBObjectStore__name.depOps = [IDBTransaction__objectStore]
IDBObjectStore__transaction.depOps = [IDBTransaction__objectStore]
IDBRequest__error.depOps = [IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBIndex__count, IDBIndex__get, IDBIndex__getKey, IDBIndex__getAll, IDBIndex__getAllKeys, IDBIndex__openCursor, IDBIndex__openKeyCursor, IDBCursor__delete, IDBCursor__update]
IDBRequest__readyState.depOps = [IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBIndex__count, IDBIndex__get, IDBIndex__getKey, IDBIndex__getAll, IDBIndex__getAllKeys, IDBIndex__openCursor, IDBIndex__openKeyCursor, IDBCursor__delete, IDBCursor__update]
IDBRequest__result.depOps = [IDBRequest__onsuccess]
IDBRequest__source.depOps = [IDBObjectStore__add, IDBObjectStore__put, IDBObjectStore__get, IDBObjectStore__getKey, IDBObjectStore__getAll, IDBObjectStore__getAllKeys, IDBObjectStore__delete, IDBObjectStore__clear, IDBObjectStore__count, IDBObjectStore__openCursor, IDBObjectStore__openKeyCursor, IDBIndex__count, IDBIndex__get, IDBIndex__getKey, IDBIndex__getAll, IDBIndex__getAllKeys, IDBIndex__openCursor, IDBIndex__openKeyCursor, IDBCursor__delete, IDBCursor__update]
IDBRequest__transaction.depOps = [IDBOpenDBRequest__onupgradeneeded]
IDBTransaction__db.depOps = [IDBFactory__open]
IDBTransaction__durability.depOps = [IDBFactory__open]
IDBTransaction__error.depOps = [IDBFactory__open]
IDBTransaction__mode.depOps = [IDBFactory__open]
IDBTransaction__objectStoreNames.depOps = [IDBFactory__open]
IDBVersionChangeEvent__newVersion.depOps = [IDBFactory__open]
IDBVersionChangeEvent__oldVersion.depOps = [IDBFactory__open]

