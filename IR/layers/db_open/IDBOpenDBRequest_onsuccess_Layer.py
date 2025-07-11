import config
from IR.context.IRContext import IRContext, Variable
from IR.IRNodes import (
    AssignmentExpression, FunctionExpression, Identifier,
    MemberExpression, Literal, CallExpression
)
from IR.layers.Global import Global
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_transaction.IDBDatabase_Transaction_Layer import IDBDatabase_Transaction_Layer
from IR.layers.db_open.IDBDatabase_onversionchange_Layer import IDBDatabase_onversionchange_Layer
from IR.layers.db_open.IDBDatabase_onclose_Layer import IDBDatabase_onclose_Layer
from IR.type.IDBType import IDBType


class IDBOpenDBRequest_onsuccess_Layer(LayerBuilder):

    name = "IDBOpenDBRequest_onsuccess_Layer"
    layer_type = LayerType.REGISTER

    @staticmethod
    def build() -> Layer:
        Global.irctx.enterLayer(IDBOpenDBRequest_onsuccess_Layer)

        body = [
            CallExpression(Identifier("console"), "log", [Literal("db onsuccess triggered")])
        ]

        children = []

        openRequestIdent = Global.irctx.getIdentifierByType(IDBType.IDBOpenDBRequest)
        dbIdent = Global.irctx.getIdentifierByType(IDBType.IDBDatabase)

        # db = request.result
        assignDb = AssignmentExpression(
            left=dbIdent,
            right=MemberExpression(openRequestIdent, "result")
        )
        body.append(assignDb)

        for _ in range(config.TXN_CNT):
            txn_layer = IDBDatabase_Transaction_Layer.build()
            children.append(txn_layer)

        version_layer = IDBDatabase_onversionchange_Layer.build()
        children.append(version_layer)

        close_layer = IDBDatabase_onclose_Layer.build()
        children.append(close_layer)

        handler = AssignmentExpression(
            left=MemberExpression(openRequestIdent, "onsuccess"),
            right=FunctionExpression([Identifier("event")], body)
        )

        children = [i for i in children if i is not None]

        Global.irctx.exitLayer()
        return Layer(
            name=IDBOpenDBRequest_onsuccess_Layer.name,
            ir_nodes=[handler],
            children=children,
            layer_type=IDBOpenDBRequest_onsuccess_Layer.layer_type
        )
