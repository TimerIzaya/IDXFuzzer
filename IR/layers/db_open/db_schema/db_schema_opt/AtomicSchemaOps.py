import random
import re

from IR.layers.Globals import Global
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
    dbIdt = Global.irctx.get_identifier_by_type(IDBType.IDBDatabase)
    if dbIdt is None:
        raise RuntimeError("No IDBDatabase identifier available for create_object_store")

    # 参数存在上下文信息，手动构造入参
    args = []
    osName = Global.smctx.newObjectStoreName()
    keyPath = IRParamValueGenerator.generateKeyPath()
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
    Global.irctx.register_variable(recVar)
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

    dbIdt = Global.irctx.get_identifier_by_type(IDBType.IDBDatabase)
    return [CallExpression(dbIdt, METHOD_NAME, args=[Literal(osName)])]


def createIndex():
    METHOD_NAME = "createIndex"
    # 找到store的标识符
    osIdent = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
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
    Global.irctx.register_variable(recVar)
    nodes.append(VariableDeclaration(recVar.name))
    nodes.append(AssignmentExpression(recVar, CallExpression(osIdent, METHOD_NAME, args=args)))

    return nodes


def deleteIndex():
    METHOD_NAME = "deleteIndex"
    # 找一个os name
    osName = Global.smctx.pickRandomObjectStore()
    if osName is None:
        raise RuntimeError("No OS name available for deleteIndex")

    # 获得该os的literal name
    idxName = Global.smctx.pickRandomObjectStoreIndex(osName)
    if idxName is None:
        raise RuntimeError("No Index name available for deleteIndex")
    # 同步更新schemaCtx
    Global.smctx.unregisterIndex(osName, idxName)

    # todo  找到os变量，用于callMethod  正常来说一个literal对应一个var ，但是我的所有var的取名都是根据literal来的，所以可以trick一下，后面记得要改
    return [CallExpression(Variable(osName, IDBType.IDBObjectStore), METHOD_NAME, args=[Literal(idxName)])]


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