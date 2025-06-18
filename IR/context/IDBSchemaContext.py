import random
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Union, Literal

'''
描述完整的db数据结构供给给下文的dataOpts层使用
db 1->n os
os n->n txn
os 1->n index
'''


@dataclass
class IDBIndexInfo:
    name: str
    '''
    该keypath是次级索引
        如果是唯一的 -> put重复key报错
        如果不是唯一 -> put重复key就把value拼成一个数组
    '''
    unique: bool = None
    '''
    用于展开数组把里面每一个元素都作为索引
    store.createIndex("tags_index", "tags", { multiEntry: true });
    store.put({ id: 1, tags: ["a", "b"] });
    store.put({ id: 2, tags: ["b", "c"] });
    此时索引变为abc

    multiEntry如果false，那么随便keypath是不是数组，如果是true，那keypath必须是数组
    '''
    multiEntry: bool = None
    '''
    createIndex 用于创建次级索引，必须提供 keyPath
    '''
    keypath: Union[str, list[str]] = None


@dataclass
class IDBTransactionInfo:
    '''
    几种持久化选项，重点测试
    '''
    durability: Literal["strict", "relaxed", "default"] = "default"

    mode: Literal["readonly", "readwrite", "versionchange"] = "readonly"


@dataclass
class IDBObjectStoreInfo:
    name: str
    '''
    该keypath是主键
    createObjectStore是创建主键索引的唯一方式，主键索引也同时是隐式的，无法获取
    1. 有keyPath就指定了主键
    2. 无keyPath就进入key-less 模式，在put add传入任意合法值作为主键,无论哪种方式，主键索引都会被隐式建立。
    '''
    keypath: Union[str, list[str]] = None

    autoIncrement: bool = False

    index: dict[str, IDBIndexInfo] = field(default_factory=dict)

    txn: dict[str, IDBTransactionInfo] = field(default_factory=dict)


@dataclass
class IDBDataBaseInfo:
    name: str

    version: int

    os: [str, IDBObjectStoreInfo] = field(default_factory=dict)


@dataclass
class IDBSchemaContext:
    ctx: Dict[str, IDBDataBaseInfo] = field(default_factory=dict)

    def registerDatabase(self, db_name: str, db_version: int):
        if db_name not in self.ctx:
            self.ctx[db_name] = IDBDataBaseInfo(db_name, db_version)

    def pickRandomDBName(self) -> str:
        if not self.current_db:
            raise RuntimeError("No active database")
        return self.current_db.name

    def newObjectStoreName(self) -> str:
        """生成一个唯一的 object store 名称，并不注册，仅返回"""
        if self.current_db is None:
            raise RuntimeError("No active database context")

        i = 0
        while True:
            name = f"{self.current_db.name}_store_{i}"
            if name not in self.ctx:
                return name
            i += 1

    def registerObjectStore(self, store_name: str):
        if self.current_db is None:
            raise RuntimeError("No active database context")
        idbObjectStore = IDBObjectStoreInfo(store_name)
        self.current_db.os[store_name] = idbObjectStore
        self.current_store = idbObjectStore

    def newIndexName(self) -> str:
        base = self.current_store.name + "_index"
        if self.current_db is None or self.current_store is None:
            raise RuntimeError("No active DB or object store for generating index name")

        indexCnt = len(self.current_store.index)
        base += "_" + str(indexCnt + 1)
        return base

    def registerIndex(self, index_name: str):
        if self.current_db is None:
            raise RuntimeError("No active database context")
        indexInfo = IDBIndexInfo(index_name)
        self.current_store
        # self.ctx[self.current_db][self.current_store].append(index_name)

    def get_object_stores(self) -> List[str]:
        if self.current_db and self.current_db in self.ctx:
            return list(self.ctx[self.current_db].keys())
        return []

    def get_indexes(self, store_name: str) -> List[str]:
        if self.current_db and store_name in self.ctx.get(self.current_db, {}):
            return self.ctx[self.current_db][store_name]
        return []

    def pick_random_object_store(self) -> str:
        stores = self.get_object_stores()
        if not stores:
            raise RuntimeError("No object stores available in current database context")
        return random.choice(stores)

    def pick_random_index(self) -> Optional[str]:
        """从当前 object store 中随机挑选一个 index 名称"""
        if self.current_db is None or self.current_store is None:
            return None
        indexes = self.ctx.get(self.current_db, {}).get(self.current_store, [])
        if not indexes:
            return None
        return random.choice(indexes)

    def has_object_store(self, store_name: str) -> bool:
        """检查当前数据库中是否存在指定 object store"""
        return self.current_db is not None and store_name in self.ctx.get(self.current_db, {})

    def has_index(self, store_name: str, index_name: str) -> bool:
        """检查某个 object store 中是否存在指定 index"""
        if self.current_db is None:
            return False
        return index_name in self.ctx.get(self.current_db, {}).get(store_name, [])

    def get_current_store(self) -> Optional[str]:
        """返回当前上下文中的 object store 名称"""
        return self.current_store

    def get_all_indexes(self) -> List[str]:
        """获取当前 store 下的所有 index 名称"""
        if self.current_db is None or self.current_store is None:
            return []
        return self.ctx[self.current_db][self.current_store]

    def unregister_object_store(self, store_name: str):
        """从当前数据库中注销 object store（连同其所有 index）"""
        if self.current_db and store_name in self.ctx.get(self.current_db, {}):
            del self.ctx[self.current_db][store_name]
            if self.current_store == store_name:
                self.current_store = None

    def unregister_index(self, store_name: str, index_name: str):
        """从指定 object store 中注销 index"""
        if self.current_db is None:
            return
        store = self.ctx.get(self.current_db, {}).get(store_name, [])
        if index_name in store:
            store.remove(index_name)
