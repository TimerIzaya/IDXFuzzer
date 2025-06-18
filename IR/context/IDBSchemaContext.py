import random
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Union, Literal

'''
描述完整的db数据结构供给给下文的dataOpts层使用
db 1->n oss
oss n->n txns
oss 1->n indexes
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

    mode: Literal["readonly", "readwrite"] = "readonly"


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

    indexes: dict[str, IDBIndexInfo] = field(default_factory=dict)

    txns: dict[str, IDBTransactionInfo] = field(default_factory=dict)


@dataclass
class IDBDataBaseInfo:
    name: str

    version: int

    oss: dict[str, IDBObjectStoreInfo] = field(default_factory=dict)


@dataclass
class IDBSchemaContext:
    current_db: Union[str, None] = None

    # db -> IDBDataBaseInfo instance
    ctx: Dict[str, IDBDataBaseInfo] = field(default_factory=dict)


    def registerDatabase(self, db_name: str, db_version: int):
        if db_name not in self.ctx:
            self.ctx[db_name] = IDBDataBaseInfo(db_name, db_version)


    # 进入该db的onversionchange作用域
    def markCurrentDB(self, db_name: str):
        if db_name not in self.ctx:
            raise RuntimeError(f"db_name {db_name} not registered")
        self.current_db = self.ctx[db_name].name


    # 退出该db的onversionchange作用域
    def unMarkCurrentDB(self, db_name: str):
        if db_name not in self.ctx:
            raise RuntimeError(f"db_name {db_name} not registered")
        self.current_db = None


    def pickRandomDBName(self) -> str:
        dbs = list(self.ctx.keys())
        if len(dbs) == 0:
            raise RuntimeError("No active database")
        return random.choice(dbs)


    def newObjectStoreName(self) -> str:
        """生成一个全局唯一的 object store 名称，并不注册，仅返回"""
        osnames = []
        for db in self.ctx.keys():
            for os in self.ctx[db].oss.keys():
                osnames.append(os)

        i = 0
        while True:
            name = f"store_{i}"
            if name not in osnames:
                return name
            i += 1


    def registerObjectStore(self, store_name: str):
        if self.current_db is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.current_db].oss) is None:
            raise RuntimeError("No active object store context")
        self.ctx[self.current_db].oss[store_name] = IDBObjectStoreInfo(store_name)


    def newIndexName(self) -> str:
        """生成一个全局唯一的 indexes 名称，并不注册，仅返回"""
        indexNames = []
        for dbName, db in self.ctx.items():
            for osName, os in db.oss.items():
                for indexName, index in os.indexes.items():
                    indexNames.append(indexName)

        i = 0
        while True:
            name = f"index_{i}"
            if name not in indexNames:
                return name
            i += 1

    def registerIndex(self, storeName:str, indexName: str):
        if self.current_db is None:
            raise RuntimeError("No active database context")
        self.ctx[self.current_db].oss[storeName].indexes[indexName] = IDBIndexInfo(indexName)

    def getObjectStores(self) -> List[str]:
        if self.current_db is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.current_db].oss) is None:
            raise RuntimeError("No active object store context")

        ret = []
        for osName, os in self.ctx[self.current_db].oss.items():
            ret.append(osName)
        return ret

    def getIndexes(self, store_name: str) -> List[str]:
        if self.current_db is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.current_db].oss) is None:
            raise RuntimeError("No active object store context")

        indexNames = []

        for osName, os in self.ctx[self.current_db].oss[store_name].indexes.items():
            indexNames.append(os)
        return indexNames

    def pickRandomObjectStore(self) -> str:
        stores = self.getObjectStores()
        if not stores:
            raise RuntimeError("No object stores available in current database context")
        return random.choice(stores)

    def pickRandomGlobalIndex(self) -> str:
        """从当前 object store 中随机挑选一个 indexes 名称"""
        if self.current_db is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.current_db].oss) is None:
            raise RuntimeError("No active object store context")

        indexes = self.getIndexes(self.current_db)
        if not indexes:
            raise RuntimeError("No index available in current database context")
        return random.choice(indexes)

    def get_current_store(self) -> Optional[str]:
        """返回当前上下文中的 object store 名称"""
        return self.current_store

    def get_all_indexes(self) -> List[str]:
        """获取当前 store 下的所有 indexes 名称"""
        if self.current_db is None or self.current_store is None:
            return []
        return self.ctx[self.current_db][self.current_store]

    def unregister_object_store(self, store_name: str):
        """从当前数据库中注销 object store（连同其所有 indexes）"""
        if self.current_db and store_name in self.ctx.get(self.current_db, {}):
            del self.ctx[self.current_db][store_name]
            if self.current_store == store_name:
                self.current_store = None

    def unregister_index(self, store_name: str, index_name: str):
        """从指定 object store 中注销 indexes"""
        if self.current_db is None:
            return
        store = self.ctx.get(self.current_db, {}).get(store_name, [])
        if index_name in store:
            store.remove(index_name)
