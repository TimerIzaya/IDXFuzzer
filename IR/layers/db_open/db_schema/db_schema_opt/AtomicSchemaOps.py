from IR.layers.Globals import Global
from IR.type.IDBType import IDBType
from IR.type.IDBTypeTool import IDBTypeTool
from schema.IDBSchemaParser import IDBSchemaParser
from IR.IRNodes import MemberExpression, CallExpression, Literal, VariableDeclaration, AssignmentExpression, Identifier
from IR.IRContext import IRContext, Variable
from IR.IRParamValueGenerator import IRParamValueGenerator


def get_store_name():
    store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if store is None:
        raise RuntimeError("No IDBObjectStore identifier available for get_store_name")
    return MemberExpression(store, "name")


def get_store_keypath():
    store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if store is None:
        raise RuntimeError("No IDBObjectStore identifier available for get_store_keypath")
    return MemberExpression(store, "keyPath")


def get_store_autoincrement():
    store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if store is None:
        raise RuntimeError("No IDBObjectStore identifier available for get_store_autoincrement")
    return MemberExpression(store, "autoIncrement")


def get_store_index_names():
    store = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if store is None:
        raise RuntimeError("No IDBObjectStore identifier available for get_store_index_names")
    return MemberExpression(store, "indexNames")


def get_index_name():
    idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
    if idx is None:
        raise RuntimeError("No IDBIndex identifier available for get_index_name")
    return MemberExpression(idx, "name")


def get_index_keypath():
    idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
    if idx is None:
        raise RuntimeError("No IDBIndex identifier available for get_index_keypath")
    return MemberExpression(idx, "keyPath")


def get_index_unique():
    idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
    if idx is None:
        raise RuntimeError("No IDBIndex identifier available for get_index_unique")
    return MemberExpression(idx, "unique")


def get_index_multiEntry():
    idx = Global.irctx.get_identifier_by_type(IDBType.IDBIndex)
    if idx is None:
        raise RuntimeError("No IDBIndex identifier available for get_index_multiEntry")
    return MemberExpression(idx, "multiEntry")


def create_object_store():
    # 找到db的标识符
    dbIdt = Global.irctx.get_identifier_by_type(IDBType.IDBDatabase)
    if dbIdt is None:
        raise RuntimeError("No IDBDatabase identifier available for create_object_store")

    # 从schema中找到该方法的定义，生成参数列表
    m = IDBSchemaParser.getInterface("IDBDatabase").getInstanceMethod("createObjectStore").raw()
    args = IRParamValueGenerator.generateMethodArgs(m)

    nodes = []
    # 如果有返回值
    if not IDBTypeTool.isReturnEmpty(m):
        # 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
        recVarName = Global.itctx.new_object_store_name()
        recVar = Variable(recVarName, IDBTypeTool.extractIDBTypeFromMethodReturns(m))
        Global.itctx.register_object_store(recVarName)
        Global.irctx.register_variable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(dbIdt, "createObjectStore", args=args)))
    else:
        nodes.append(CallExpression(dbIdt, "createObjectStore", args=args))
    return nodes


def delete_object_store():
    INTERFACE_NAME = "IDBDatabase"
    METHOD_NAME = "deleteObjectStore"
    # 找到db的标识符
    dbIdt = Global.irctx.get_identifier_by_type(IDBType.IDBDatabase)
    if dbIdt is None:
        raise RuntimeError("No IDBDatabase identifier available for create_object_store")

    # 从schema中找到该方法的定义，生成参数列表
    m = IDBSchemaParser.getInterface(INTERFACE_NAME).getInstanceMethod(METHOD_NAME).raw()
    args = IRParamValueGenerator.generateMethodArgs(m)

    nodes = []
    # 如果有返回值
    if not IDBTypeTool.isReturnEmpty(m):
        # 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
        recVarName = Global.itctx.new_object_store_name()
        recVar = Variable(recVarName, IDBTypeTool.extractIDBTypeFromMethodReturns(m))
        Global.itctx.register_object_store(recVarName)
        Global.irctx.register_variable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(dbIdt, METHOD_NAME, args=args)))
    else:
        nodes.append(CallExpression(dbIdt, METHOD_NAME, args=args))
    return nodes


def create_index():
    INTERFACE_NAME = "IDBObjectStore"
    METHOD_NAME = "createIndex"
    # 找到store的标识符
    dbstore = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if dbstore is None:
        raise RuntimeError("No IDBObjectStore identifier available for create_object_store")

    # 从schema中找到该方法的定义，生成参数列表
    m = IDBSchemaParser.getInterface(INTERFACE_NAME).getInstanceMethod(METHOD_NAME).raw()
    args = IRParamValueGenerator.generateMethodArgs(m)

    nodes = []
    # 如果有返回值
    if not IDBTypeTool.isReturnEmpty(m):
        # 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
        recVarName = Global.itctx.new_index_name()
        recVar = Variable(recVarName, IDBTypeTool.extractIDBTypeFromMethodReturns(m))
        Global.itctx.register_index(recVarName)
        Global.irctx.register_variable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(dbstore, METHOD_NAME, args=args)))
    else:
        nodes.append(CallExpression(dbstore, METHOD_NAME, args=args))
    return nodes

def delete_index():
    INTERFACE_NAME = "IDBObjectStore"
    METHOD_NAME = "deleteIndex"
    # 找到store的标识符
    dbstore = Global.irctx.get_identifier_by_type(IDBType.IDBObjectStore)
    if dbstore is None:
        raise RuntimeError("No IDBObjectStore identifier available for create_object_store")

    # 从schema中找到该方法的定义，生成参数列表
    m = IDBSchemaParser.getInterface(INTERFACE_NAME).getInstanceMethod(METHOD_NAME).raw()
    args = IRParamValueGenerator.generateMethodArgs(m)

    nodes = []
    # 如果有返回值
    if not IDBTypeTool.isReturnEmpty(m):
        # 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
        recVarName = Global.itctx.new_index_name()
        recVar = Variable(recVarName, IDBTypeTool.extractIDBTypeFromMethodReturns(m))
        Global.itctx.register_index(recVarName)
        Global.irctx.register_variable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(dbstore, METHOD_NAME, args=args)))
    else:
        nodes.append(CallExpression(dbstore, METHOD_NAME, args=args))
    return nodes


# 每个操作函数的独立权重配置
AtomicSchemaWeights = {
    get_store_name: 1,
    get_store_keypath: 1,
    get_store_autoincrement: 1,
    get_store_index_names: 1,
    get_index_name: 1,
    get_index_keypath: 1,
    get_index_unique: 1,
    get_index_multiEntry: 1,
    create_object_store: 5,
    delete_object_store: 5,
    create_index: 10,
    delete_index: 2,
}

# 自动构造列表
ReadSchemaOps = [f for f in [
    get_store_name,
    get_store_keypath,
    get_store_autoincrement,
    get_store_index_names,
    get_index_name,
    get_index_keypath,
    get_index_unique,
    get_index_multiEntry
] if AtomicSchemaWeights.get(f, 0) > 0]

WriteSchemaOps = [f for f in [
    create_object_store,
    delete_object_store,
    create_index,
    delete_index
] if AtomicSchemaWeights.get(f, 0) > 0]

AtomicSchemaOps = ReadSchemaOps + WriteSchemaOps
