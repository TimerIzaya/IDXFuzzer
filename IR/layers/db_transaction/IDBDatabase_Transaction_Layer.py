import random

from IR.context.IRContext import Variable
from IR.IRNodes import CallExpression, Identifier, Literal
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_transaction.IDBTransaction_oncomplete_Layer import IDBTransaction_oncomplete_Layer
from IR.layers.db_transaction.IDBTransaction_onabort_Layer import IDBTransaction_onabort_Layer
from IR.layers.db_transaction.IDBTransaction_onerror_Layer import IDBTransaction_onerror_Layer
from IR.layers.db_transaction.db_curd.IDBObjectStore_DataOps_Layer import IDBObjectStore_DataOps_Layer
from IR.type.IDBType import IDBType


class IDBDatabase_Transaction_Layer(LayerBuilder):
    name = "IDBDatabase_Transaction_Layer"
    layer_type = LayerType.CALLING

    @staticmethod
    def build() -> Layer | None:
        Global.irctx.enterLayer(IDBDatabase_Transaction_Layer)
        if not Global.smctx.getObjectStores():
            # print("[TransactionLayer] skipped: no object store available")
            return None

        args = []
        # txn需要用到的os str
        txnOSS = Global.smctx.pickRandomTxnObjectStores()
        args.append(Identifier(str(txnOSS)))

        # 包装一层Identifier
        txnOSS = [Identifier(i) for i in txnOSS]
        Global.smctx.registerTxn(txnOSS)

        mode = random.choice(["readwrite", "readonly"])
        durability = "{durability:\"" + random.choice(["strict", "default", "relaxed"]) + "\"}"
        args.append(Literal(str(mode)))
        args.append(Identifier(durability))

        # mode和durability 同步更新到schema上下文
        Global.smctx.currentDB.txn.mode = mode
        Global.smctx.currentDB.txn.durability = durability

        dbIdent = Global.irctx.getIdentifierByType(IDBType.IDBDatabase)
        txnName = Global.smctx.newTxnName()
        # 事务启动
        # 存在需要缓存的上下文信息 不走schema取 手动构造
        callTX = CallExpression(
            callee_object=dbIdent,
            callee_method="transaction",
            args=args,
            result_name=txnName
        )

        Global.irctx.registerVariable(Variable(txnName, IDBType.IDBTransaction))

        children = list(filter(None, [
            IDBObjectStore_DataOps_Layer.build(),
            IDBTransaction_oncomplete_Layer.build(),
            IDBTransaction_onabort_Layer.build(),
            IDBTransaction_onerror_Layer.build(),
        ]))

        Global.smctx.unRegisterTxn()
        Global.irctx.unregisterVariable(txnName)
        Global.irctx.exitLayer()
        return Layer(
            IDBDatabase_Transaction_Layer.name,
            ir_nodes=[callTX],
            children=children,
            layer_type=IDBDatabase_Transaction_Layer.layer_type
        )
