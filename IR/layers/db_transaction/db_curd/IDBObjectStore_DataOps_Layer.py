from IR.IRNodes import Identifier, CallExpression
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_transaction.db_curd.PipeFlow import PipeFlow
from IR.layers.db_transaction.db_curd.PipeGraph import PipeGraph
from IR.type.IDBType import IDBType


'''
针对某一个事务
'''
class IDBObjectStore_DataOps_Layer(LayerBuilder):
    name = "IDBObjectStore_DataOps_Layer"

    layer_type = LayerType.EXECUTION

    pipeGraph = PipeGraph()

    # 可配置项：pipeflow 个数 和 每个长度
    pipeflow_count = 8

    pipeflow_length = 8

    @staticmethod
    def build() -> Layer | None:
        body = []

        # 事务预设的os中选择k个os进行curd
        oss = Global.smctx.pickRandomObjectStoresFromTxn()
        txnIdent = Global.irctx.getIdentifierByType(IDBType.IDBTransaction)
        tmpOSName = Global.smctx.newTxnTmpOSName(txnName=txnIdent.raw)
        for osName in oss:
            # call一个tmp os
            txnGetTmpOsCall = CallExpression(
                callee_object=txnIdent,
                callee_method="objectStore",
                args=[Identifier(osName)],
                result_name=tmpOSName
            )
            body.append(txnGetTmpOsCall)

            # 针对这个tmpos 生成pipeflow
            for _ in range(IDBObjectStore_DataOps_Layer.pipeflow_count):
                pipeEnds = IDBObjectStore_DataOps_Layer.pipeGraph.generate_weighted_path(
                    max_length=IDBObjectStore_DataOps_Layer.pipeflow_length,
                    transaction_mode=Global.smctx.currentDB.txn.mode
                )
                pipeflow = PipeFlow(store_id=Identifier(tmpOSName),  pipe_ends=pipeEnds)
                flow_il = pipeflow.generate_il_sequence()
                body.extend(flow_il)

        return Layer(IDBObjectStore_DataOps_Layer.name, body, layer_type=IDBObjectStore_DataOps_Layer.layer_type)
