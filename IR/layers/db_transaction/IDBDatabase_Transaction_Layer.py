from IR.context.IRContext import Variable
from IR.IRNodes import CallExpression, Identifier, Literal
from IR.layers.Globals import Global
from IR.context.IDBSchemaContext import IDBSchemaContext
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
        if not Global.smctx.getObjectStores():
            print("[TransactionLayer] skipped: no object store available")
            return None

        txnVarName = Global.smctx.newTxnName()

        txnOSS = Global.smctx.pickRandomObjectStores()


        # 这个方法存在需要缓存的上下文信息 不走schema取 手动构造
        callTX = CallExpression(
            callee_object=Identifier("db"),
            callee_method="transaction",
            args=[Literal(store_name), Literal("readwrite")],
            result_name=txnVarName
        )

        osVarName = "store"
        callOS = CallExpression(
            callee_object=Identifier(txnVarName),
            callee_method="objectStore",
            args=[Literal(store_name)],
            result_name=osVarName
        )

        Global.irctx.register_variable(Variable("txns", IDBType.IDBTransaction))
        Global.irctx.register_variable(Variable("store", IDBType.IDBObjectStore))

        children = list(filter(None, [
            IDBObjectStore_DataOps_Layer.build(),
            IDBTransaction_oncomplete_Layer.build(),
            IDBTransaction_onabort_Layer.build(),
            IDBTransaction_onerror_Layer.build(),
        ]))

        return Layer(
            IDBDatabase_Transaction_Layer.name,
            ir_nodes=[callTX, callOS],
            children=children,
            layer_type=IDBDatabase_Transaction_Layer.layer_type
        )
