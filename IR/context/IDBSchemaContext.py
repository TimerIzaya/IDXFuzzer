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

    # 事务和OS多对多，不用特地构造那么复杂，只记录历史上所有事务的name防止重复即可
    historyTxnNames: list[str] = field(default_factory=[])


@dataclass
class IDBDataBaseInfo:
    name: str

    version: int

    oss: dict[str, IDBObjectStoreInfo] = field(default_factory=dict)


@dataclass
class IDBSchemaContext:
    # open onsucess作为七点
    currentDB: Union[str, None] = None

    '''
    start with db.transaction
    end with db.commit
    all the objectstores in txn 
    '''
    currentOS: Union[list[str], None] = None

    # db -> IDBDataBaseInfo instance
    ctx: Dict[str, IDBDataBaseInfo] = field(default_factory=dict)

    def registerDatabase(self, db_name: str, db_version: int):
        if db_name not in self.ctx:
            self.ctx[db_name] = IDBDataBaseInfo(db_name, db_version)

    def registerObjectStore(self, store_name: str):
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB].oss) is None:
            raise RuntimeError("No active object store context")
        self.ctx[self.currentDB].oss[store_name] = IDBObjectStoreInfo(store_name)

    # 进入该db的onversionchange作用域
    def markCurrentDB(self, dbName: str):
        if dbName not in self.ctx:
            raise RuntimeError(f"dbName {dbName} not registered")
        self.currentDB = self.ctx[dbName].name

    def markCurrentOS(self, os: list[str]):
        if self.currentDB is None:
            raise RuntimeError("No active database")
        self.currentOS = os

    # 退出该db的onversionchange作用域
    def unMarkCurrentDB(self, dbName: str):
        if dbName not in self.ctx:
            raise RuntimeError(f"dbName {dbName} not registered")
        self.currentDB = None

    def unMarkCurrentOS(self):
        self.currentOS = None

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

    def newTxnName(self) -> str:
        i = 0
        while True:
            name = f"txn_{i}"
            if name not in self.ctx[self.currentDB].historyTxnNames:
                return name
            i += 1

    def registerIndex(self, storeName: str, indexName: str):
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        self.ctx[self.currentDB].oss[storeName].indexes[indexName] = IDBIndexInfo(indexName)

    def getObjectStores(self) -> List[str]:
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB].oss) is None:
            raise RuntimeError("No active object store context")

        ret = []
        for osName, os in self.ctx[self.currentDB].oss.items():
            ret.append(osName)
        return ret

    def getIndexes(self, store_name: str) -> List[str]:
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB].oss) is None:
            raise RuntimeError("No active object store context")

        indexNames = []

        for osName, os in self.ctx[self.currentDB].oss[store_name].indexes.items():
            indexNames.append(os)
        return indexNames

    def pickRandomObjectStore(self) -> str:
        stores = self.getObjectStores()
        if not stores:
            raise RuntimeError("No object stores available in current database context")
        return random.choice(stores)

    def pickRandomObjectStores(self) -> List[str]:
        stores = self.getObjectStores()
        n = len(stores)
        if n == 0:
            raise RuntimeError("No object stores available in current database context")

            # 权重函数：越往后越小，指数下降，比如 base=2 → [1/2, 1/4, 1/8, ...]
        base = 2.0  # 控制下降速度，越大下降越快
        weights = [1 / (base ** (k - 1)) for k in range(1, n + 1)]

        # 归一化
        total = sum(weights)
        probabilities = [w / total for w in weights]

        # 随机决定选多少个（1 ~ n）
        k = random.choices(range(1, n + 1), weights=probabilities, k=1)[0]

        return random.sample(stores, k)

    def pickRandomGlobalIndex(self) -> str:
        """从当前 object store 中随机挑选一个 indexes 名称"""
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB].oss) is None:
            raise RuntimeError("No active object store context")

        indexes = self.getIndexes(self.currentDB)
        if not indexes:
            raise RuntimeError("No index available in current database context")
        return random.choice(indexes)

    def get_current_store(self) -> Optional[str]:
        """返回当前上下文中的 object store 名称"""
        return self.current_store

    def get_all_indexes(self) -> List[str]:
        """获取当前 store 下的所有 indexes 名称"""
        if self.currentDB is None or self.current_store is None:
            return []
        return self.ctx[self.currentDB][self.current_store]

    def unregister_object_store(self, store_name: str):
        """从当前数据库中注销 object store（连同其所有 indexes）"""
        if self.currentDB and store_name in self.ctx.get(self.currentDB, {}):
            del self.ctx[self.currentDB][store_name]
            if self.current_store == store_name:
                self.current_store = None

    def unregister_index(self, store_name: str, index_name: str):
        """从指定 object store 中注销 indexes"""
        if self.currentDB is None:
            return
        store = self.ctx.get(self.currentDB, {}).get(store_name, [])
        if index_name in store:
            store.remove(index_name)


if __name__ == '__main__':
    def test():
        stores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        n = len(stores)
        if n == 0:
            raise RuntimeError("No object stores available in current database context")

            # 权重函数：越往后越小，指数下降，比如 base=2 → [1/2, 1/4, 1/8, ...]
        base = 2.0  # 控制下降速度，越大下降越快
        weights = [1 / (base ** (k - 1)) for k in range(1, n + 1)]

        # 归一化
        total = sum(weights)
        probabilities = [w / total for w in weights]

        # 随机决定选多少个（1 ~ n）
        k = random.choices(range(1, n + 1), weights=probabilities, k=1)[0]

        ret = random.sample(stores, k)
        print(ret)


    for i in range(100):
        test()
