from schema_.define.IDBOpeartion import MethodOperation, PropertyOperation, EventOperation, Param

# ===== MethodOperation =====
IDBFactory__open = MethodOperation(
    interfaceName="IDBFactory",
    name="open",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
        Param(name="version", typeRef="unsigned long long", optional=True, default=None),
    ],
    returns="IDBOpenDBRequest",
    depOps=[],
    incOps=[],
)
IDBFactory__deleteDatabase = MethodOperation(
    interfaceName="IDBFactory",
    name="deleteDatabase",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
    ],
    returns="IDBOpenDBRequest",
    depOps=[],
    incOps=[],
)
IDBFactory__cmp = MethodOperation(
    interfaceName="IDBFactory",
    name="cmp",
    isStatic=False,
    params=[
        Param(name="first", typeRef="Key", optional=False, default=None),
        Param(name="second", typeRef="Key", optional=False, default=None),
    ],
    returns="number",
    depOps=[],
    incOps=[],
)
IDBFactory__databases = MethodOperation(
    interfaceName="IDBFactory",
    name="databases",
    isStatic=False,
    params=[],
    returns={"kind": "Generic", "base": "Promise", "args": [{"kind": "Array", "element": "IDBDatabaseInfo"}]},
    depOps=[],
    incOps=[],
)
IDBDatabase__close = MethodOperation(
    interfaceName="IDBDatabase",
    name="close",
    isStatic=False,
    params=[],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBDatabase__createObjectStore = MethodOperation(
    interfaceName="IDBDatabase",
    name="createObjectStore",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
        Param(name="options", typeRef="IDBObjectStoreParameters", optional=True, default=None),
    ],
    returns="IDBObjectStore",
    depOps=[],
    incOps=[],
)
IDBDatabase__deleteObjectStore = MethodOperation(
    interfaceName="IDBDatabase",
    name="deleteObjectStore",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
    ],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBDatabase__transaction = MethodOperation(
    interfaceName="IDBDatabase",
    name="transaction",
    isStatic=False,
    params=[
        Param(name="storeNames", typeRef={"kind": "Union", "types": ["DOMString", {"kind": "Array", "element": "DOMString"}]}, optional=False, default=None),
        Param(name="mode", typeRef="IDBTransactionMode", optional=True, default=None),
        Param(name="options", typeRef="IDBTransactionOptions", optional=True, default=None),
    ],
    returns="IDBTransaction",
    depOps=[],
    incOps=[],
)
IDBTransaction__abort = MethodOperation(
    interfaceName="IDBTransaction",
    name="abort",
    isStatic=False,
    params=[],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBTransaction__objectStore = MethodOperation(
    interfaceName="IDBTransaction",
    name="objectStore",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
    ],
    returns="IDBObjectStore",
    depOps=[],
    incOps=[],
)
IDBTransaction__commit = MethodOperation(
    interfaceName="IDBTransaction",
    name="commit",
    isStatic=False,
    params=[],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBObjectStore__add = MethodOperation(
    interfaceName="IDBObjectStore",
    name="add",
    isStatic=False,
    params=[
        Param(name="value", typeRef="any", optional=False, default=None),
        Param(name="key", typeRef="Key", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["Key"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__put = MethodOperation(
    interfaceName="IDBObjectStore",
    name="put",
    isStatic=False,
    params=[
        Param(name="value", typeRef="any", optional=False, default=None),
        Param(name="key", typeRef="Key", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["Key"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__get = MethodOperation(
    interfaceName="IDBObjectStore",
    name="get",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["any"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__getKey = MethodOperation(
    interfaceName="IDBObjectStore",
    name="getKey",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["Key", "undefined"]}]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__getAll = MethodOperation(
    interfaceName="IDBObjectStore",
    name="getAll",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="count", typeRef="unsigned long", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Array", "element": "any"}]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__getAllKeys = MethodOperation(
    interfaceName="IDBObjectStore",
    name="getAllKeys",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="count", typeRef="unsigned long", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Array", "element": "Key"}]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__delete = MethodOperation(
    interfaceName="IDBObjectStore",
    name="delete",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["undefined"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__clear = MethodOperation(
    interfaceName="IDBObjectStore",
    name="clear",
    isStatic=False,
    params=[],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["undefined"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__count = MethodOperation(
    interfaceName="IDBObjectStore",
    name="count",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["unsigned long long"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__openCursor = MethodOperation(
    interfaceName="IDBObjectStore",
    name="openCursor",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="direction", typeRef="CursorDirection", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["IDBCursorWithValue", "null"]}]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__openKeyCursor = MethodOperation(
    interfaceName="IDBObjectStore",
    name="openKeyCursor",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="direction", typeRef="CursorDirection", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["IDBCursor", "null"]}]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__createIndex = MethodOperation(
    interfaceName="IDBObjectStore",
    name="createIndex",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
        Param(name="keyPath", typeRef="KeyPath", optional=False, default=None),
        Param(name="options", typeRef="IDBIndexParameters", optional=True, default=None),
    ],
    returns="IDBIndex",
    depOps=[],
    incOps=[],
)
IDBObjectStore__index = MethodOperation(
    interfaceName="IDBObjectStore",
    name="index",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
    ],
    returns="IDBIndex",
    depOps=[],
    incOps=[],
)
IDBObjectStore__deleteIndex = MethodOperation(
    interfaceName="IDBObjectStore",
    name="deleteIndex",
    isStatic=False,
    params=[
        Param(name="name", typeRef="DOMString", optional=False, default=None),
    ],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBIndex__count = MethodOperation(
    interfaceName="IDBIndex",
    name="count",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["unsigned long long"]},
    depOps=[],
    incOps=[],
)
IDBIndex__get = MethodOperation(
    interfaceName="IDBIndex",
    name="get",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["any"]},
    depOps=[],
    incOps=[],
)
IDBIndex__getKey = MethodOperation(
    interfaceName="IDBIndex",
    name="getKey",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["Key", "undefined"]}]},
    depOps=[],
    incOps=[],
)
IDBIndex__getAll = MethodOperation(
    interfaceName="IDBIndex",
    name="getAll",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="count", typeRef="unsigned long", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Array", "element": "any"}]},
    depOps=[],
    incOps=[],
)
IDBIndex__getAllKeys = MethodOperation(
    interfaceName="IDBIndex",
    name="getAllKeys",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="count", typeRef="unsigned long", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Array", "element": "Key"}]},
    depOps=[],
    incOps=[],
)
IDBIndex__openCursor = MethodOperation(
    interfaceName="IDBIndex",
    name="openCursor",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="direction", typeRef="CursorDirection", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["IDBCursorWithValue", "null"]}]},
    depOps=[],
    incOps=[],
)
IDBIndex__openKeyCursor = MethodOperation(
    interfaceName="IDBIndex",
    name="openKeyCursor",
    isStatic=False,
    params=[
        Param(name="query", typeRef="KeyOrRange", optional=True, default=None),
        Param(name="direction", typeRef="CursorDirection", optional=True, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": [{"kind": "Union", "types": ["IDBCursor", "null"]}]},
    depOps=[],
    incOps=[],
)
IDBCursor__advance = MethodOperation(
    interfaceName="IDBCursor",
    name="advance",
    isStatic=False,
    params=[
        Param(name="count", typeRef="unsigned long", optional=False, default=None),
    ],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBCursor__continue = MethodOperation(
    interfaceName="IDBCursor",
    name="continue",
    isStatic=False,
    params=[
        Param(name="key", typeRef="Key", optional=True, default=None),
    ],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBCursor__continuePrimaryKey = MethodOperation(
    interfaceName="IDBCursor",
    name="continuePrimaryKey",
    isStatic=False,
    params=[
        Param(name="key", typeRef="Key", optional=False, default=None),
        Param(name="primaryKey", typeRef="Key", optional=False, default=None),
    ],
    returns="undefined",
    depOps=[],
    incOps=[],
)
IDBCursor__delete = MethodOperation(
    interfaceName="IDBCursor",
    name="delete",
    isStatic=False,
    params=[],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["undefined"]},
    depOps=[],
    incOps=[],
)
IDBCursor__update = MethodOperation(
    interfaceName="IDBCursor",
    name="update",
    isStatic=False,
    params=[
        Param(name="value", typeRef="any", optional=False, default=None),
    ],
    returns={"kind": "Generic", "base": "IDBRequest", "args": ["Key"]},
    depOps=[],
    incOps=[],
)
IDBKeyRange__bound = MethodOperation(
    interfaceName="IDBKeyRange",
    name="bound",
    isStatic=True,
    params=[
        Param(name="lower", typeRef="Key", optional=False, default=None),
        Param(name="upper", typeRef="Key", optional=False, default=None),
        Param(name="lowerOpen", typeRef="boolean", optional=True, default=None),
        Param(name="upperOpen", typeRef="boolean", optional=True, default=None),
    ],
    returns="IDBKeyRange",
    depOps=[],
    incOps=[],
)
IDBKeyRange__lowerBound = MethodOperation(
    interfaceName="IDBKeyRange",
    name="lowerBound",
    isStatic=True,
    params=[
        Param(name="lower", typeRef="Key", optional=False, default=None),
        Param(name="open", typeRef="boolean", optional=True, default=None),
    ],
    returns="IDBKeyRange",
    depOps=[],
    incOps=[],
)
IDBKeyRange__upperBound = MethodOperation(
    interfaceName="IDBKeyRange",
    name="upperBound",
    isStatic=True,
    params=[
        Param(name="upper", typeRef="Key", optional=False, default=None),
        Param(name="open", typeRef="boolean", optional=True, default=None),
    ],
    returns="IDBKeyRange",
    depOps=[],
    incOps=[],
)
IDBKeyRange__only = MethodOperation(
    interfaceName="IDBKeyRange",
    name="only",
    isStatic=True,
    params=[
        Param(name="value", typeRef="Key", optional=False, default=None),
    ],
    returns="IDBKeyRange",
    depOps=[],
    incOps=[],
)
IDBKeyRange__includes = MethodOperation(
    interfaceName="IDBKeyRange",
    name="includes",
    isStatic=False,
    params=[
        Param(name="key", typeRef="Key", optional=False, default=None),
    ],
    returns="boolean",
    depOps=[],
    incOps=[],
)

# ===== EventOperation =====
IDBDatabase__onclose = EventOperation(
    interfaceName="IDBDatabase",
    name="onclose",
    eventName="close",
    depOps=[],
    incOps=[],
)
IDBDatabase__onversionchange = EventOperation(
    interfaceName="IDBDatabase",
    name="onversionchange",
    eventName="versionchange",
    depOps=[],
    incOps=[],
)
IDBTransaction__onabort = EventOperation(
    interfaceName="IDBTransaction",
    name="onabort",
    eventName="abort",
    depOps=[],
    incOps=[],
)
IDBTransaction__oncomplete = EventOperation(
    interfaceName="IDBTransaction",
    name="oncomplete",
    eventName="complete",
    depOps=[],
    incOps=[],
)
IDBTransaction__onerror = EventOperation(
    interfaceName="IDBTransaction",
    name="onerror",
    eventName="error",
    depOps=[],
    incOps=[],
)
IDBRequest__onsuccess = EventOperation(
    interfaceName="IDBRequest",
    name="onsuccess",
    eventName="success",
    depOps=[],
    incOps=[],
)
IDBRequest__onerror = EventOperation(
    interfaceName="IDBRequest",
    name="onerror",
    eventName="error",
    depOps=[],
    incOps=[],
)
IDBOpenDBRequest__onblocked = EventOperation(
    interfaceName="IDBOpenDBRequest",
    name="onblocked",
    eventName="blocked",
    depOps=[],
    incOps=[],
)
IDBOpenDBRequest__onupgradeneeded = EventOperation(
    interfaceName="IDBOpenDBRequest",
    name="onupgradeneeded",
    eventName="upgradeneeded",
    depOps=[],
    incOps=[],
)

# ===== PropertyOperation =====
IDBDatabase__name = PropertyOperation(
    interfaceName="IDBDatabase",
    name="name",
    readonly=True,
    typeRef="DOMString",
    depOps=[],
    incOps=[],
)
IDBDatabase__version = PropertyOperation(
    interfaceName="IDBDatabase",
    name="version",
    readonly=True,
    typeRef="unsigned long long",
    depOps=[],
    incOps=[],
)
IDBDatabase__objectStoreNames = PropertyOperation(
    interfaceName="IDBDatabase",
    name="objectStoreNames",
    readonly=True,
    typeRef="DOMStringList",
    depOps=[],
    incOps=[],
)
IDBTransaction__db = PropertyOperation(
    interfaceName="IDBTransaction",
    name="db",
    readonly=True,
    typeRef="IDBDatabase",
    depOps=[],
    incOps=[],
)
IDBTransaction__durability = PropertyOperation(
    interfaceName="IDBTransaction",
    name="durability",
    readonly=True,
    typeRef="IDBTransactionDurability",
    depOps=[],
    incOps=[],
)
IDBTransaction__error = PropertyOperation(
    interfaceName="IDBTransaction",
    name="error",
    readonly=True,
    typeRef={"kind": "Union", "types": ["DOMException", "null"]},
    depOps=[],
    incOps=[],
)
IDBTransaction__mode = PropertyOperation(
    interfaceName="IDBTransaction",
    name="mode",
    readonly=True,
    typeRef="IDBTransactionMode",
    depOps=[],
    incOps=[],
)
IDBTransaction__objectStoreNames = PropertyOperation(
    interfaceName="IDBTransaction",
    name="objectStoreNames",
    readonly=True,
    typeRef="DOMStringList",
    depOps=[],
    incOps=[],
)
IDBObjectStore__name = PropertyOperation(
    interfaceName="IDBObjectStore",
    name="name",
    readonly=False,
    typeRef="DOMString",
    depOps=[],
    incOps=[],
)
IDBObjectStore__keyPath = PropertyOperation(
    interfaceName="IDBObjectStore",
    name="keyPath",
    readonly=True,
    typeRef={"kind": "Union", "types": ["KeyPath", "null"]},
    depOps=[],
    incOps=[],
)
IDBObjectStore__indexNames = PropertyOperation(
    interfaceName="IDBObjectStore",
    name="indexNames",
    readonly=True,
    typeRef="DOMStringList",
    depOps=[],
    incOps=[],
)
IDBObjectStore__transaction = PropertyOperation(
    interfaceName="IDBObjectStore",
    name="transaction",
    readonly=True,
    typeRef="IDBTransaction",
    depOps=[],
    incOps=[],
)
IDBObjectStore__autoIncrement = PropertyOperation(
    interfaceName="IDBObjectStore",
    name="autoIncrement",
    readonly=True,
    typeRef="boolean",
    depOps=[],
    incOps=[],
)
IDBIndex__name = PropertyOperation(
    interfaceName="IDBIndex",
    name="name",
    readonly=True,
    typeRef="DOMString",
    depOps=[],
    incOps=[],
)
IDBIndex__objectStore = PropertyOperation(
    interfaceName="IDBIndex",
    name="objectStore",
    readonly=True,
    typeRef="IDBObjectStore",
    depOps=[],
    incOps=[],
)
IDBIndex__keyPath = PropertyOperation(
    interfaceName="IDBIndex",
    name="keyPath",
    readonly=True,
    typeRef={"kind": "Union", "types": ["KeyPath", "null"]},
    depOps=[],
    incOps=[],
)
IDBIndex__multiEntry = PropertyOperation(
    interfaceName="IDBIndex",
    name="multiEntry",
    readonly=True,
    typeRef="boolean",
    depOps=[],
    incOps=[],
)
IDBIndex__unique = PropertyOperation(
    interfaceName="IDBIndex",
    name="unique",
    readonly=True,
    typeRef="boolean",
    depOps=[],
    incOps=[],
)
IDBCursor__direction = PropertyOperation(
    interfaceName="IDBCursor",
    name="direction",
    readonly=True,
    typeRef="CursorDirection",
    depOps=[],
    incOps=[],
)
IDBCursor__key = PropertyOperation(
    interfaceName="IDBCursor",
    name="key",
    readonly=True,
    typeRef="Key",
    depOps=[],
    incOps=[],
)
IDBCursor__primaryKey = PropertyOperation(
    interfaceName="IDBCursor",
    name="primaryKey",
    readonly=True,
    typeRef="Key",
    depOps=[],
    incOps=[],
)
IDBCursor__source = PropertyOperation(
    interfaceName="IDBCursor",
    name="source",
    readonly=True,
    typeRef={"kind": "Union", "types": ["IDBObjectStore", "IDBIndex"]},
    depOps=[],
    incOps=[],
)
IDBCursorWithValue__value = PropertyOperation(
    interfaceName="IDBCursorWithValue",
    name="value",
    readonly=True,
    typeRef="any",
    depOps=[],
    incOps=[],
)
IDBRequest__error = PropertyOperation(
    interfaceName="IDBRequest",
    name="error",
    readonly=True,
    typeRef={"kind": "Union", "types": ["DOMException", "null"]},
    depOps=[],
    incOps=[],
)
IDBRequest__result = PropertyOperation(
    interfaceName="IDBRequest",
    name="result",
    readonly=True,
    typeRef="any",
    depOps=[],
    incOps=[],
)
IDBRequest__source = PropertyOperation(
    interfaceName="IDBRequest",
    name="source",
    readonly=True,
    typeRef={"kind": "Union", "types": ["IDBObjectStore", "IDBIndex", "IDBCursor", "null"]},
    depOps=[],
    incOps=[],
)
IDBRequest__readyState = PropertyOperation(
    interfaceName="IDBRequest",
    name="readyState",
    readonly=True,
    typeRef="IDBRequestReadyState",
    depOps=[],
    incOps=[],
)
IDBRequest__transaction = PropertyOperation(
    interfaceName="IDBRequest",
    name="transaction",
    readonly=True,
    typeRef={"kind": "Union", "types": ["IDBTransaction", "null"]},
    depOps=[],
    incOps=[],
)
IDBKeyRange__lower = PropertyOperation(
    interfaceName="IDBKeyRange",
    name="lower",
    readonly=True,
    typeRef={"kind": "Union", "types": ["Key", "undefined"]},
    depOps=[],
    incOps=[],
)
IDBKeyRange__upper = PropertyOperation(
    interfaceName="IDBKeyRange",
    name="upper",
    readonly=True,
    typeRef={"kind": "Union", "types": ["Key", "undefined"]},
    depOps=[],
    incOps=[],
)
IDBKeyRange__lowerOpen = PropertyOperation(
    interfaceName="IDBKeyRange",
    name="lowerOpen",
    readonly=True,
    typeRef="boolean",
    depOps=[],
    incOps=[],
)
IDBKeyRange__upperOpen = PropertyOperation(
    interfaceName="IDBKeyRange",
    name="upperOpen",
    readonly=True,
    typeRef="boolean",
    depOps=[],
    incOps=[],
)
IDBVersionChangeEvent__oldVersion = PropertyOperation(
    interfaceName="IDBVersionChangeEvent",
    name="oldVersion",
    readonly=True,
    typeRef="unsigned long long",
    depOps=[],
    incOps=[],
)
IDBVersionChangeEvent__newVersion = PropertyOperation(
    interfaceName="IDBVersionChangeEvent",
    name="newVersion",
    readonly=True,
    typeRef={"kind": "Union", "types": ["unsigned long long", "null"]},
    depOps=[],
    incOps=[],
)
IDBDatabaseInfo__name = PropertyOperation(
    interfaceName="IDBDatabaseInfo",
    name="name",
    readonly=True,
    typeRef={"kind": "Union", "types": ["DOMString", "null"]},
    depOps=[],
    incOps=[],
)
IDBDatabaseInfo__version = PropertyOperation(
    interfaceName="IDBDatabaseInfo",
    name="version",
    readonly=True,
    typeRef={"kind": "Union", "types": ["unsigned long long", "null"]},
    depOps=[],
    incOps=[],
)

ALL_METHODS = [
    IDBFactory__open,
    IDBFactory__deleteDatabase,
    IDBFactory__cmp,
    IDBFactory__databases,
    IDBDatabase__close,
    IDBDatabase__createObjectStore,
    IDBDatabase__deleteObjectStore,
    IDBDatabase__transaction,
    IDBTransaction__abort,
    IDBTransaction__objectStore,
    IDBTransaction__commit,
    IDBObjectStore__add,
    IDBObjectStore__put,
    IDBObjectStore__get,
    IDBObjectStore__getKey,
    IDBObjectStore__getAll,
    IDBObjectStore__getAllKeys,
    IDBObjectStore__delete,
    IDBObjectStore__clear,
    IDBObjectStore__count,
    IDBObjectStore__openCursor,
    IDBObjectStore__openKeyCursor,
    IDBObjectStore__createIndex,
    IDBObjectStore__index,
    IDBObjectStore__deleteIndex,
    IDBIndex__count,
    IDBIndex__get,
    IDBIndex__getKey,
    IDBIndex__getAll,
    IDBIndex__getAllKeys,
    IDBIndex__openCursor,
    IDBIndex__openKeyCursor,
    IDBCursor__advance,
    IDBCursor__continue,
    IDBCursor__continuePrimaryKey,
    IDBCursor__delete,
    IDBCursor__update,
    IDBKeyRange__bound,
    IDBKeyRange__lowerBound,
    IDBKeyRange__upperBound,
    IDBKeyRange__only,
    IDBKeyRange__includes,
]
ALL_EVENTS = [
    IDBDatabase__onclose,
    IDBDatabase__onversionchange,
    IDBTransaction__onabort,
    IDBTransaction__oncomplete,
    IDBTransaction__onerror,
    IDBRequest__onsuccess,
    IDBRequest__onerror,
    IDBOpenDBRequest__onblocked,
    IDBOpenDBRequest__onupgradeneeded,
]
ALL_PROPERTIES = [
    IDBDatabase__name,
    IDBDatabase__version,
    IDBDatabase__objectStoreNames,
    IDBTransaction__db,
    IDBTransaction__durability,
    IDBTransaction__error,
    IDBTransaction__mode,
    IDBTransaction__objectStoreNames,
    IDBObjectStore__name,
    IDBObjectStore__keyPath,
    IDBObjectStore__indexNames,
    IDBObjectStore__transaction,
    IDBObjectStore__autoIncrement,
    IDBIndex__name,
    IDBIndex__objectStore,
    IDBIndex__keyPath,
    IDBIndex__multiEntry,
    IDBIndex__unique,
    IDBCursor__direction,
    IDBCursor__key,
    IDBCursor__primaryKey,
    IDBCursor__source,
    IDBCursorWithValue__value,
    IDBRequest__error,
    IDBRequest__result,
    IDBRequest__source,
    IDBRequest__readyState,
    IDBRequest__transaction,
    IDBKeyRange__lower,
    IDBKeyRange__upper,
    IDBKeyRange__lowerOpen,
    IDBKeyRange__upperOpen,
    IDBVersionChangeEvent__oldVersion,
    IDBVersionChangeEvent__newVersion,
    IDBDatabaseInfo__name,
    IDBDatabaseInfo__version,
]
ALL_OPS = ALL_METHODS + ALL_EVENTS + ALL_PROPERTIES
OP_BY_FULLNAME = {op.fullName: op for op in ALL_OPS}

