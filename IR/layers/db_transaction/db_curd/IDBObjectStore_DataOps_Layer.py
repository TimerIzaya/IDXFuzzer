import random

from IR.IRNodes import Identifier, CallExpression, AssignmentExpression, MemberExpression, FunctionExpression, \
    VariableDeclaration, Literal
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_transaction.db_curd.PipeGraph import PipeGraph
from IR.layers.optFactory.AtomicTxnOpsDispatcher import TxnOptDispatcher
from IR.layers.optFactory.EventFlowBuilder import EventFlowBuilder
from IR.layers.optFactory.CoreApis import  CoreApis
from IR.type.IDBType import IDBType

'''
针对某一个事务
'''
class IDBObjectStore_DataOps_Layer(LayerBuilder):
    name = "IDBObjectStore_DataOps_Layer"

    layer_type = LayerType.EXECUTION

    EXPECT_OPS = 100

    @staticmethod
    def build() -> Layer | None:
        body = []

        txnVar = Global.irctx.getVariableByType(IDBType.IDBTransaction)

        # 事务预设的os中选择k个os进行curd
        oss = Global.smctx.pickRandomObjectStoresFromTxn()
        osNames = [o.raw for o in oss]

        targetOSName = random.choice(osNames)

        # 先找os变量以及它之前literal
        IDBObjectStore_DataOps_Layer.TARGET_OS_VAR = Global.irctx.getVariableByName(targetOSName)
        if IDBObjectStore_DataOps_Layer.TARGET_OS_VAR is None:
            CoreApis.TARGET_OS_VAR = None
            raise RuntimeError("No OS var available for deleteIndex")
        else:
            CoreApis.TARGET_OS_VAR = IDBObjectStore_DataOps_Layer.TARGET_OS_VAR

        # const objectStore = transaction.objectStore("toDoList");
        # 开始取临时OS


        body.append(VariableDeclaration(Identifier(CoreApis.TARGET_OS_VAR.varLiteral)))
        body.append(CallExpression(txnVar, "objectStore", [Literal(targetOSName)]))

        EventFlowBuilder.build(EXPECT_OPS=IDBObjectStore_DataOps_Layer.EXPECT_OPS, body=body, DISPATCHER=TxnOptDispatcher)


        return Layer(IDBObjectStore_DataOps_Layer.name, body, layer_type=IDBObjectStore_DataOps_Layer.layer_type)



