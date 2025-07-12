import random
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Union, Literal

from IR.IRNodes import Variable

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
    oss: list[str]

    '''
    几种持久化选项，重点测试
    '''
    durability: Literal["strict", "relaxed", "default"] = "default"

    mode: Literal["readonly", "readwrite"] = "readonly"

    # 一个事务所有预选的os

    # 一个事务有多个os，随机取n个，防止重名
    selectedOss: list[str] = field(default_factory=list)


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

    # todo 我们只存key，value暂时也先放在IR中，后续要把数据生成和IR分离，不然IR要塞多少垃圾
    keys: list[str] = field(default_factory=list)


@dataclass
class IDBDataBaseInfo:
    name: str

    version: int

    oss: dict[str, IDBObjectStoreInfo] = field(default_factory=dict)

    txn: IDBTransactionInfo = None

    # 事务和OS多对多，不用特地构造那么复杂，只记录历史上所有事务的name防止重复即可
    historyTxnNames: list[str] = field(default_factory=list)


'''
registerXXX 是往全局ctx里填充
markXXX 是写入临时变量
newXXX 是生成新变量name
'''


class IDBSchemaContext:
    """
    current系列用于确定当前执行的作用域，ctx仅为注册用，可能先注册，后续再使用db、txn等等
    """
    currentDB: Union[None, IDBDataBaseInfo] = None

    # db -> IDBDataBaseInfo instance
    ctx: Dict[str, IDBDataBaseInfo] = {}

    uniqueCounters: Dict[str, int] = {
        "index": 0,
        "objectStore": 0,
        "txn": 0,
        "txnTmpOs": 0,
    }

    def generateUniqueName(self, base: str) -> str:
        count = self.uniqueCounters.get(base, 0)
        self.uniqueCounters[base] = count + 1
        return f"{base}_{count}"

    def registerDatabase(self, dbName: str, db_version: int):
        if dbName not in self.ctx:
            self.ctx[dbName] = IDBDataBaseInfo(dbName, db_version)

    def registerObjectStore(self, storeName: str):
        if storeName in self.currentDB.oss:
            raise RuntimeError(f"ObjectStore {storeName} is already registered")
        self.ctx[self.currentDB.name].oss[storeName] = IDBObjectStoreInfo(storeName)

    def unregisterObjectStore(self, storeName: str):
        if storeName not in self.ctx[self.currentDB.name].oss:
            raise RuntimeError("No active object store context")
        del self.ctx[self.currentDB.name].oss[storeName]

    def registerIndex(self, storeName: str, indexName: str):
        if storeName not in self.ctx[self.currentDB.name].oss:
            raise RuntimeError("No active object store context")
        self.ctx[self.currentDB.name].oss[storeName].indexes[indexName] = IDBIndexInfo(indexName)

    def unregisterIndex(self, storeName: str, indexName: str):
        if storeName not in self.ctx[self.currentDB.name].oss:
            raise RuntimeError("No active object store context")
        if indexName not in self.ctx[self.currentDB.name].oss[storeName].indexes:
            raise RuntimeError("No active indexName context")
        del self.ctx[self.currentDB.name].oss[storeName].indexes[indexName]

    def registerTxn(self, os: list[str]):
        if self.currentDB is None:
            raise RuntimeError("No active database")
        self.ctx[self.currentDB.name].txn = IDBTransactionInfo(os)

    # 退出该db的onversionchange作用域
    def unRegisterTxn(self):
        if self.currentDB is None:
            raise RuntimeError("No active database")
        self.ctx[self.currentDB.name].txn = None

    def registerKey(self, storeName: str, key: str):
        if storeName not in self.ctx[self.currentDB.name].oss:
            raise RuntimeError("No active object store context")
        self.ctx[self.currentDB.name].oss[storeName].keys.append(key)

    def unregisterKey(self, storeName: str, key: str):
        if storeName not in self.ctx[self.currentDB.name].oss:
            raise RuntimeError("No active object store context")
        self.ctx[self.currentDB.name].oss[storeName].keys.remove(key)

    # 进入该db的onversionchange作用域
    def markCurrentDB(self, dbName: str):
        if dbName not in self.ctx:
            raise RuntimeError(f"dbName {dbName} not registered")
        self.currentDB = self.ctx[dbName]

    def unMarkCurrentDB(self):
        self.currentDB = None

    def newDBName(self) -> str:
        return self.generateUniqueName("db")

    def newObjectStoreName(self) -> str:
        return self.generateUniqueName("objectStore")

    def newIndexName(self) -> str:
        return self.generateUniqueName("index")

    def newTxnName(self) -> str:
        return self.generateUniqueName("txn")

    def newTxnTmpOSName(self, txnName) -> str:
        return self.generateUniqueName("txnTmpOs")


    def getDB(self) -> str:
        return next(iter(self.ctx.keys()))

    def getObjectStores(self) -> List[str]:
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB.name].oss) is None:
            raise RuntimeError("No active object store context")

        ret = []
        for osName, os in self.currentDB.oss.items():
            ret.append(osName)
        return ret

    def getIndexes(self, store_name: str) -> List[str]:
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB.name].oss) is None:
            raise RuntimeError("No active object store context")

        indexNames = []

        for osName, os in self.ctx[self.currentDB.name].oss[store_name].indexes.items():
            indexNames.append(os)
        return indexNames

    def pickRandomObjectStore(self) -> str:
        stores = self.getObjectStores()
        if not stores:
            raise RuntimeError("No object stores available in current database context")
        return random.choice(stores)

    def pickRandomObjectStoreIndex(self, osName) -> str:
        oss = self.ctx[self.currentDB.name].oss
        if osName not in oss or len(oss[osName].indexes) == 0:
            raise RuntimeError("No active object store context")
        return random.choice(list(oss[osName].indexes.keys()))

    def pickRandomDBName(self) -> str:
        dbs = list(self.ctx.keys())
        if len(dbs) == 0:
            raise RuntimeError("No active database")
        return random.choice(dbs)

    '''
    txn需要用到的os，优先选数量少点
    '''

    def pickRandomTxnObjectStores(self) -> List[str]:
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

    def pickRandomObjectStoresFromTxn(self) -> List[str]:
        stores = self.currentDB.txn.oss
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
        if len(self.ctx[self.currentDB.name].oss) is None:
            raise RuntimeError("No active object store context")

        indexes = self.getIndexes(self.currentDB.name)
        if not indexes:
            raise RuntimeError("No index available in current database context")
        return random.choice(indexes)

    def pickRandomKey(self, osName: str) -> str:
        if self.currentDB is None:
            raise RuntimeError("No active database context")
        if len(self.ctx[self.currentDB.name].oss) is None:
            raise RuntimeError("No active object store context")
        keys = self.ctx[self.currentDB.name].oss[osName].keys
        if len(keys) == 0:
            raise RuntimeError("No active keys context")
        return random.choice(keys)

    def getAllIndexes(self) -> List[str]:
        ret = []
        for os in self.ctx[self.currentDB.name].oss.values():
            ret.extend(os.indexes)
        return ret

    def unregisterSomething(self, vars: list[Variable]):
        names = [v.varLiteral for v in vars if v.varLiteral is not None]
        for name in names:
            delTars = []
            for osName in self.currentDB.oss:
                if osName == name:
                    delTars.append(name)
            for d in delTars:
                del self.currentDB.oss[d]
            for osName in self.currentDB.oss:
                delTars.clear()
                for idxName in self.currentDB.oss[osName].indexes:
                    if idxName == name:
                        delTars.append(name)
                for d in delTars:
                    del self.ctx[self.currentDB.name].oss[osName].indexes[d]


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
