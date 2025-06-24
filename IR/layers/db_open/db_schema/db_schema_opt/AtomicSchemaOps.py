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
    recVarName = Global.smctx.newObjectStoreName()
    recVar = Variable(recVarName, IDBType.IDBObjectStore)
    Global.smctx.registerObjectStore(recVarName)
    Global.irctx.registerVariable(recVar)
    Global.irctx.registerVariableLiteral(recVar, osName)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(dbIdt, "createObjectStore", args=args)))
    return nodes


def deleteObjectStore():
    METHOD_NAME = "deleteObjectStore"
    # 找一个os name
    osName = Global.smctx.pickRandomObjectStore()
    if osName is None:
        raise RuntimeError("No OS name available for deleteIndex")

    Global.smctx.unregisterObjectStore(osName)

    dbIdt = Global.irctx.getIdentifierByType(IDBType.IDBDatabase)
    return [CallExpression(dbIdt, METHOD_NAME, args=[Literal(osName)])]


def createIndex():
    METHOD_NAME = "createIndex"
    # 找到store的标识符
    osIdent = Global.irctx.getIdentifierByType(IDBType.IDBObjectStore)
    if osIdent is None:
        raise RuntimeError("No IDBObjectStore identifier available for create_object_store")

    args = []
    # arg0 name
    indexName = Global.smctx.newIndexName()
    args.append(Literal(indexName))
    # 注册一个初始IDBSchemaIndexInfo，后面补全
    Global.smctx.registerIndex(osIdent.raw, indexName)
    curIdx = Global.smctx.currentDB.oss[osIdent.raw].indexes[indexName]

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
    Global.irctx.registerVariable(recVar)
    Global.irctx.registerVariableLiteral(recVar, indexName)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osIdent, METHOD_NAME, args=args)))

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
    return [CallExpression(osVar, METHOD_NAME, args=[Literal(idxName)])]


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
    return [CallExpression(osVar, METHOD_NAME, args=args)]

def clear():
    METHOD_NAME = "clear"

    # 先找os变量以及它的literal
    osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
    if osVar is None or osVar.varLiteral is None:
        raise RuntimeError("No OS var available for deleteIndex")
    osName = osVar.varLiteral
    if osName not in Global.smctx.currentDB.oss:
        raise RuntimeError("No active object store context")

    return [CallExpression(osVar, METHOD_NAME, args=[])]

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

    return [CallExpression(osVar, METHOD_NAME, args=args)]



# 每个操作函数的独立权重配置
AtomicSchemaWeights = {
    # get_store_name: 1,
    # get_store_keypath: 1,
    # get_store_autoincrement: 1,
    # get_store_index_names: 1,
    # get_index_name: 1,
    # get_index_keypath: 1,
    # get_index_unique: 1,
    # get_index_multiEntry: 1,
    createObjectStore: 5,
    deleteObjectStore: 5,
    createIndex: 10,
    deleteIndex: 2,
    add: 5,
    clear: 5,
    count: 5
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