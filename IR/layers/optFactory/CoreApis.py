import copy
import random

import config
from IR.IRNodes import CallExpression, Literal, VariableDeclaration, AssignmentExpression, TryCatchStatement
from IR.IRParamValueGenerator import IRParamValueGenerator
from IR.context.IRContext import Variable
from IR.layers.Global import Global
from IR.layers.db_transaction.db_curd.IDBDataGenerator import IDBDataGenerator
from IR.type.IDBType import IDBType

class EventBuilderMode:
    SCHEME = 0
    TXN = 1

class CoreApis:

    MODE = None

    @staticmethod
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
            option["keyPath"] = keyPath
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
        if "keyPath" in option:
            Global.smctx.currentDB.oss[osName].keypath = option["keyPath"]
        if "autoIncrement" in option:
            Global.smctx.currentDB.oss[osName].autoIncrement = option["autoIncrement"]
        Global.irctx.registerVariable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(dbIdt, "createObjectStore", args=args)))
        return nodes

    @staticmethod
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

    @staticmethod
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

    @staticmethod
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


    @staticmethod
    def getOSInfo():
        if CoreApis.MODE is EventBuilderMode.SCHEME:
            # 适配schema场景，随机找os
            osVar = Global.irctx.getVariableByType(IDBType.IDBObjectStore)
            if osVar is None or osVar.varLiteral is None:
                raise RuntimeError("No OS var available for deleteIndex")
            osName = osVar.varLiteral
            if osName not in Global.smctx.currentDB.oss:
                raise RuntimeError("No active object store context")
        if CoreApis.MODE is EventBuilderMode.TXN:
            # 适配事务场景 指定OS
            osVar = CoreApis.TARGET_OS_VAR
            osName = osVar.varLiteral

        return osVar, osName


    @staticmethod
    def clear(osVar=None, osName=None):
        METHOD_NAME = "clear"

        osVar, osName = CoreApis.getOSInfo()

        # 返回一个IDBRequest，然后设置success或者error事件
        nodes = []
        meName = Global.irctx.newMeName(METHOD_NAME)
        recVar = Variable(meName, IDBType.IDBRequest)
        Global.irctx.registerVariable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=[])))
        return nodes

    @staticmethod
    def declareVarToWelcome(METHOD_NAME, nodes):
        meName = Global.irctx.newMeName(METHOD_NAME)
        recVar = Variable(meName, IDBType.IDBRequest)
        Global.irctx.registerVariable(recVar)
        nodes.append(VariableDeclaration(recVar.name))
        return recVar

    @staticmethod
    def useKeyRangeOrNot(nodes, recVar, osVar, os, METHOD_NAME, args):
        if random.random() > 0.5:
            # v = os.xxx()
            nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
        else:
            # k = KeyRange.xxx()
            # v = os.xxx(k)
            keyRangeAssign = IDBDataGenerator.generateKeyRange(os)
            args.append(keyRangeAssign.left)
            # used to catch
            stableArgs = copy.deepcopy(args)
            stableKeyRangeAssign = IDBDataGenerator.generateKeyRange(os, stable=True)
            stableArgs[-1] = stableKeyRangeAssign.left
            tryCatch = TryCatchStatement(
                tryBody=[
                    keyRangeAssign,
                    AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args))
                ],
                catchBody=[
                    # stableKeyRangeAssign,
                    # AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=stableArgs))
                ]
            )
            nodes.append(tryCatch)

    @staticmethod
    def useKeyRange(nodes, recVar, osVar, os, METHOD_NAME, args):
        # k = KeyRange.xxx()
        # v = os.xxx(k)
        keyRangeAssign = IDBDataGenerator.generateKeyRange(os)
        args.append(keyRangeAssign.left)
        # used to catch
        stableArgs = copy.deepcopy(args)
        stableKeyRangeAssign = IDBDataGenerator.generateKeyRange(os, stable=True)
        stableArgs[-1] = stableKeyRangeAssign.left
        tryCatch = TryCatchStatement(
            tryBody=[
                keyRangeAssign,
                AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args))
            ],
            catchBody=[
                # stableKeyRangeAssign,
                # AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=stableArgs))
            ]
        )
        nodes.append(tryCatch)

    @staticmethod
    def count():
        METHOD_NAME = "count"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)
        CoreApis.useKeyRangeOrNot(nodes, recVar, osVar, os, METHOD_NAME, args)
        return nodes

    @staticmethod
    def delete():
        METHOD_NAME = "delete"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)
        CoreApis.useKeyRange(nodes, recVar, osVar, os, METHOD_NAME, args)
        return nodes

    @staticmethod
    def get():
        METHOD_NAME = "get"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)
        CoreApis.useKeyRange(nodes, recVar, osVar, os, METHOD_NAME, args)
        return nodes

    @staticmethod
    def getAll():
        METHOD_NAME = "getAll"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)

        if random.random() > 0.5:
            # v = os.xxx()
            if random.random() > 0.5:
                rand_num = random.randint(0, 2 ** 32)
                args.append(Literal(rand_num))
            nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
        else:
            # k = KeyRange.xxx()
            # v = os.xxx(k)
            keyRangeAssign = IDBDataGenerator.generateKeyRange(os)
            args.append(keyRangeAssign.left)
            # used to catch
            stableArgs = copy.deepcopy(args)
            stableKeyRangeAssign = IDBDataGenerator.generateKeyRange(os, stable=True)
            stableArgs[-1] = stableKeyRangeAssign.left
            if random.random() > 0.5:
                rand_num = random.randint(0, 2 ** 32)
                args.append(Literal(rand_num))
            tryCatch = TryCatchStatement(
                tryBody=[
                    keyRangeAssign,
                    AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args))
                ],
                catchBody=[
                    stableKeyRangeAssign,
                    AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=stableArgs))
                ]
            )
            nodes.append(tryCatch)
        return nodes

    @staticmethod
    def getAllKeys():
        METHOD_NAME = "getAllKeys"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)

        if random.random() > 0.5:
            # v = os.xxx()
            if random.random() > 0.5:
                rand_num = random.randint(0, 2 ** 32)
                args.append(Literal(rand_num))
            nodes.append(AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args)))
        else:
            # k = KeyRange.xxx()
            # v = os.xxx(k)
            keyRangeAssign = IDBDataGenerator.generateKeyRange(os)
            args.append(keyRangeAssign.left)
            # used to catch
            stableArgs = copy.deepcopy(args)
            stableKeyRangeAssign = IDBDataGenerator.generateKeyRange(os, stable=True)
            stableArgs[-1] = stableKeyRangeAssign.left
            if random.random() > 0.5:
                rand_num = random.randint(0, 2 ** 32)
                args.append(Literal(rand_num))
            tryCatch = TryCatchStatement(
                tryBody=[
                    keyRangeAssign,
                    AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=args))
                ],
                catchBody=[
                    stableKeyRangeAssign,
                    AssignmentExpression(recVar, CallExpression(osVar, METHOD_NAME, args=stableArgs))
                ]
            )
            nodes.append(tryCatch)
        return nodes

    @staticmethod
    def getKey():
        METHOD_NAME = "getKey"

        osVar, osName = CoreApis.getOSInfo()

        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")

        os = oss[osName]
        nodes = []
        args = []
        recVar = CoreApis.declareVarToWelcome(METHOD_NAME, nodes)
        CoreApis.useKeyRange(nodes, recVar, osVar, os, METHOD_NAME, args)
        return nodes

    @staticmethod
    def index():
        METHOD_NAME = "index"

        osVar, osName = CoreApis.getOSInfo()

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

    @staticmethod
    def add():
        # 随机找一个os，往里add数据
        # 随机找一个os，往里add数据
        METHOD_NAME = "put"

        osVar, osName = CoreApis.getOSInfo()

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


    @staticmethod
    def put():
        # 随机找一个os，往里add数据
        METHOD_NAME = "put"

        osVar, osName = CoreApis.getOSInfo()

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



