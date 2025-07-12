import random

import config
from IR.IRNodes import Identifier, CallExpression, AssignmentExpression, MemberExpression, FunctionExpression, \
    VariableDeclaration, Literal, Variable
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_transaction.db_curd.PipeGraph import PipeGraph
from IR.layers.optFactory.AtomicTxnOpsDispatcher import TxnOptDispatcher
from IR.layers.optFactory.EventFlowBuilder import EventFlowBuilder
from IR.layers.optFactory.CoreApis import CoreApis, EventBuilderMode
from IR.type.IDBType import IDBType

'''
针对某一个事务
'''


class IDBObjectStore_DataOps_Layer(LayerBuilder):
    name = "IDBObjectStore_DataOps_Layer"

    layer_type = LayerType.EXECUTION

    EXPECT_OPS = config.TXN_OPT_CNT

    @staticmethod
    def build() -> Layer | None:
        body = []

        txnVar = Global.irctx.getVariableByType(IDBType.IDBTransaction)

        # 事务预设的os中选择k个os进行curd
        oss = Global.smctx.pickRandomObjectStoresFromTxn()
        osNames = [o.raw for o in oss]

        targetOSName = random.choice(osNames)

        # 注意 到非schema层了 IRContext之前的os相关的全都不可以用了 想要变量 自己注册吧
        # 临时OS变量
        tmpOSVar = Variable(targetOSName, IDBType.IDBObjectStore, targetOSName)
        Global.irctx.registerVariable(tmpOSVar)
        CoreApis.TARGET_OS_VAR = tmpOSVar

        # const objectStore = transaction.objectStore("toDoList");
        # 开始取临时OS
        body.append(VariableDeclaration(Identifier(CoreApis.TARGET_OS_VAR.varLiteral)))
        body.append(AssignmentExpression(
            tmpOSVar,
            CallExpression(txnVar, "objectStore", [Literal(targetOSName)])
        ))

        EventFlowBuilder.build(EXPECT_OPS=IDBObjectStore_DataOps_Layer.EXPECT_OPS, body=body,
                               mode=EventBuilderMode.TXN)

        IDBObjectStore_DataOps_Layer.TARGET_OS_VAR = None

        # 在正常操作中小概率插入abort和commit
        abort = CallExpression(txnVar, "abort", [])
        commit = CallExpression(txnVar, "commit", [])
        if random.random() < config.BREAK_TXN:
            body.insert(random.randrange(len(body)) + 1, commit)
        if random.random() < config.BREAK_TXN:
            body.insert(random.randrange(len(body)) + 1, abort)
        return Layer(IDBObjectStore_DataOps_Layer.name, body, layer_type=IDBObjectStore_DataOps_Layer.layer_type)
