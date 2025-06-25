import random
import re

from IR.layers.Global import Global
from IR.layers.db_transaction.db_curd.IDBDataGenerator import IDBDataGenerator
from IR.type.IDBType import IDBType
from IR.type.IDBTypeTool import IDBTypeTool
from schema.IDBSchemaParser import IDBSchemaParser
from IR.IRNodes import MemberExpression, CallExpression, Literal, VariableDeclaration, AssignmentExpression, Identifier
from IR.context.IRContext import IRContext, Variable
from IR.IRParamValueGenerator import IRParamValueGenerator


# def get_store_name():
#     store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
#     if store is None:
#         raise RuntimeError("No IDBObjectStore identifier available for get_store_name")
#     return MemberExpression(store, "name")
#
#
# def get_store_keypath():
#     store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
#     if store is None:
#         raise RuntimeError("No IDBObjectStore identifier available for get_store_keypath")
#     return MemberExpression(store, "keyPath")
#
#
# def get_store_autoincrement():
#     store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
#     if store is None:
#         raise RuntimeError("No IDBObjectStore identifier available for get_store_autoincrement")
#     return MemberExpression(store, "autoIncrement")
#
#
# def get_store_index_names():
#     store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
#     if store is None:
#         raise RuntimeError("No IDBObjectStore identifier available for get_store_index_names")
#     return MemberExpression(store, "indexNames")
#
#
# def get_index_name():
#     idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
#     if idx is None:
#         raise RuntimeError("No IDBIndex identifier available for get_index_name")
#     return MemberExpression(idx, "name")
#
#
# def get_index_keypath():
#     idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
#     if idx is None:
#         raise RuntimeError("No IDBIndex identifier available for get_index_keypath")
#     return MemberExpression(idx, "keyPath")
#
#
# def get_index_unique():
#     idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
#     if idx is None:
#         raise RuntimeError("No IDBIndex identifier available for get_index_unique")
#     return MemberExpression(idx, "unique")
#
#
# def get_index_multiEntry():
#     idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
#     if idx is None:
#         raise RuntimeError("No IDBIndex identifier available for get_index_multiEntry")
#     return MemberExpression(idx, "multiEntry")


def createObjectStore():
    # 找到db的标识符
    dbIdt = Global.irctx.getIdentifierByType(IDBType.IDBDatabase)
    if dbIdt is None:
        raise RuntimeError("No IDBDatabase identifier available for create_object_store")

    # 参数存在上下文信息，手动构造入参
    args = []
    osName = Global.smctx.newObjectStoreName()
    keyPath = IDBDataGenerator.generateKeyPath()
    autoIncrement = IRParamValueGenerator.generateCreateObjectStoreAutoIncrement()
    option = {}
    if random.random() > 0.5:
        option["keypath"] = keyPath
    if random.random() > 0.5:
        option["autoIncrement"] = autoIncrement
    args.append(Literal(osName))
    if len(option) > 0:
        args.append(Literal(option))

    nodes = []
    # 如果有返回值
    # 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
    recVarName = Global.irctx.newObjectStoreName()
    recVar = Variable(recVarName, IDBType.IDBObjectStore)
    recVar.varLiteral = osName
    Global.smctx.registerObjectStore(osName)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(dbIdt, "createObjectStore", args=args)))
    return nodes


def deleteObjectStore():
    METHOD_NAME = "deleteObjectStore"

    dbVar = Global.irctx.getVariableByType(IDBType.IDBDatabase)
    if dbVar is None:
        raise RuntimeError("No OS var available for delete")

    osName = Global.smctx.pickRandomObjectStore()

    Global.smctx.unregisterObjectStore(osName)
    # 对应的变量也要跟着删除
    Global.irctx.unregisterVariable(osName)

    return CallExpression(dbVar, METHOD_NAME, args=[Literal(osName)])


def createIndex():
    METHOD_NAME = "createIndex"
    # 找到store的标识符
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No IDBObjectStore identifier available for create_object_store")


    args = []
    # arg0 name
    indexName = Global.smctx.newIndexName()
    args.append(Literal(indexName))
    # 注册一个初始IDBSchemaIndexInfo，后面补全
    Global.smctx.registerIndex(osVar.varLiteral, indexName)
    curIdx = Global.smctx.currentDB.oss[osVar.varLiteral].indexes[indexName]

    # arg1 keypath
    keyPath = IRParamValueGenerator.generateKeyPath()
    curIdx.keypath = keyPath
    args.append(Literal(keyPath))

    # arg2 option
    option = {}
    if random.random() > 0.5:
        option["unique"] = IRParamValueGenerator.generateCreateIndexUnique()
        curIdx.unique = option["unique"]
    if random.random() > 0.5:
        option["multiEntry"] = IRParamValueGenerator.generateCreateIndexMultiEntry()
        curIdx.multiEntry = option["multiEntry"]
        # 复合索引multiEntry只能为false
        if isinstance(curIdx.keypath, list):
            option["multiEntry"] = False
        else:
            option["multiEntry"] = option["multiEntry"]
    if len(option) > 0:
        args.append(Literal(option))

    nodes = []
    recVar = Variable(indexName, IDBType.IDBIndex)
    recVar.varLiteral = indexName
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))

    return nodes

def deleteIndex():
    METHOD_NAME = "deleteIndex"

    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral

    idxName = Global.smctx.pickRandomObjectStoreIndex(osName)
    if idxName is None:
        raise RuntimeError("No Index name available for deleteIndex")

    # 同步更新schemaCtx
    Global.smctx.unregisterIndex(osName, idxName)
    Global.irctx.unregisterVariable(idxName)


    return CallExpression(osVar, METHOD_NAME, args=[Literal(idxName)])


def add():
    # 随机找一个os，往里add数据
    METHOD_NAME = "add"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    osKeyPath = Global.smctx.currentDB.oss[osName].keypath
    args = []
    if osKeyPath is None:
        # keyless模式，不用管value是否符合keypath规范
        value = IDBDataGenerator.generateObject()
        args.append(Literal(value))
        # arg1 create的时候没有指定keypath，那需要加key
        key = IDBDataGenerator.generateString()
        args.append(Literal(key))
        Global.smctx.registerKey(osName, key)
    else:
        # 正常模式，需要生成符合keypath的数据
        [value, key] = IDBDataGenerator.generateObjectWithKeyPath(osKeyPath)
        args.append(Literal(value))
        Global.smctx.registerKey(osName, key)

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes

def clear():
    METHOD_NAME = "clear"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=[])))
    return nodes

def count():
    METHOD_NAME = "count"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    if random.random() > 0.5:
        keyRange = IDBDataGenerator.generateKeyRange(osName)
        args.append(Literal(keyRange))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def delete():
    METHOD_NAME = "delete"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    # 要么选一个key，要么选keyRange，可以删
    if random.random() > 0.5:
        keyRange = IDBDataGenerator.generateKeyRange(osName)
        args.append(Literal(keyRange))
    else:
        key = Global.smctx.pickRandomKey(osName)
        args.append(Literal(key))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def get():
    METHOD_NAME = "get"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    # 要么选一个key，要么选keyRange，可以删
    if random.random() > 0.5:
        keyRange = IDBDataGenerator.generateKeyRange(osName)
        args.append(Literal(keyRange))
    else:
        key = Global.smctx.pickRandomKey(osName)
        args.append(Literal(key))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def getAll():
    METHOD_NAME = "getAll"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    r = random.random()
    if r < 0.5:
        # 50%选query
        if random.random() < 0.5:
            keyRange = IDBDataGenerator.generateKeyRange(osName)
            args.append(Literal(keyRange))
        else:
            key = Global.smctx.pickRandomKey(osName)
            args.append(Literal(key))

        # 25%概率加入cnt
        if random.random() < 0.5:
            args.append(Literal(random.randint(0, 4294967295)))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def getAllKeys():
    METHOD_NAME = "getAllKeys"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    r = random.random()
    if r < 0.5:
        # 50%选query
        if random.random() < 0.5:
            keyRange = IDBDataGenerator.generateKeyRange(osName)
            args.append(Literal(keyRange))
        else:
            key = Global.smctx.pickRandomKey(osName)
            args.append(Literal(key))

        # 25%概率加入cnt
        if random.random() < 0.5:
            args.append(Literal(random.randint(0, 4294967295)))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def getKey():
    METHOD_NAME = "getKey"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    args = []
    # 50%选query
    if random.random() < 0.5:
        keyRange = IDBDataGenerator.generateKeyRange(osName)
        args.append(Literal(keyRange))
    else:
        key = Global.smctx.pickRandomKey(osName)
        args.append(Literal(key))

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


def index():
    METHOD_NAME = "index"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    # 随便找index
    indexName = Global.smctx.pickRandomObjectStoreIndex(osName)

    # 和createIndex一样，属于三体变量，需要注册, 后面可能要获取全文中的index类型变量
    nodes = []
    varName = Global.irctx.newIndexName()
    recVar = Variable(varName, IDBType.IDBIndex)
    recVar.varLiteral = indexName
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=[Literal(indexName)])))
    return nodes

def put():
    # 随机找一个os，往里add数据
    METHOD_NAME = "put"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    osKeyPath = Global.smctx.currentDB.oss[osName].keypath
    args = []
    if osKeyPath is None:
        # keyless模式，不用管value是否符合keypath规范
        value = IDBDataGenerator.generateObject()
        args.append(Literal(value))
        # arg1 create的时候没有指定keypath，那需要加key
        key = IDBDataGenerator.generateString()
        args.append(Literal(key))
        Global.smctx.registerKey(osName, key)
    else:
        # 正常模式，需要生成符合keypath的数据
        [value, key] = IDBDataGenerator.generateObjectWithKeyPath(osKeyPath)
        args.append(Literal(value))
        Global.smctx.registerKey(osName, key)

    # 返回一个IDBRequest，然后设置success或者error事件
    nodes = []
    meName = Global.irctx.newMeName(METHOD_NAME)
    recVar = Variable(meName, IDBType.IDBRequest)
    Global.irctx.registerVariable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
    return nodes


# 每个操作函数的独立权重配置
AtomicSchemaWeights = {
    createObjectStore: 5,
    deleteObjectStore: 5,
    createIndex: 10,
    deleteIndex: 2,
    add: 5,
    clear: 5,
    count: 5,
    delete: 5,
    get: 5,
    getAll: 5,
    getAllKeys: 5,
    index: 5,
    put: 5,
}

# 自动构造列表
ReadSchemaOps = [f for f in [
    # get_store_name,
    # get_store_keypath,
    # get_store_autoincrement,
    # get_store_index_names,
    # get_index_name,
    # get_index_keypath,
    # get_index_unique,
    # get_index_multiEntry
] if AtomicSchemaWeights.get(f, 0) > 0]

WriteSchemaOps = [f for f in [
    # createObjectStore,
    # deleteObjectStore,
    # createIndex,
    # deleteIndex
] if AtomicSchemaWeights.get(f, 0) > 0]

AtomicSchemaOps = ReadSchemaOps + WriteSchemaOps

if __name__ == '__main__':
    Global.smctx.registerDatabase("dd",1)
    Global.smctx.markCurrentDB("dd")
    Global.smctx.registerObjectStore("store_0")
    Global.smctx.unregisterObjectStore( "store_0")
    Global.smctx.registerObjectStore("store_0")
    # Global.smctx.registerObjectStore("store_2")
    # Global.smctx.unregisterObjectStore( "store_2")

    print(Global.smctx.newObjectStoreName())
    print(Global.smctx.newObjectStoreName())
    print(Global.smctx.newObjectStoreName())
    print(Global.smctx.newObjectStoreName())