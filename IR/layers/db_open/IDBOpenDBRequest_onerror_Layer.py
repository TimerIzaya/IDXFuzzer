from IR.IRNodes import AssignmentExpression, FunctionExpression, Identifier, MemberExpression, CallExpression, Literal, \
    VariableDeclaration
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.type.IDBType import IDBType


class IDBOpenDBRequest_onerror_Layer(LayerBuilder):
    name = "IDBOpenDBRequest_onerror_Layer"
    layer_type = LayerType.REGISTER

    @staticmethod
    def build():
        retNode = Identifier("errorResult")
        body = [
            CallExpression(Identifier("console"), "log", [Literal("open db onerror triggered")]),
            VariableDeclaration(retNode),
            AssignmentExpression(retNode,
                                 MemberExpression(Identifier("event.target"), "error")
                                 ),
            CallExpression(Identifier("console"), "log", [MemberExpression(retNode, "message")]),
            CallExpression(Identifier("console"), "log", [MemberExpression(retNode, "id")]),
        ]

        open_request_id = Global.irctx.getIdentifierByType(IDBType.IDBOpenDBRequest)
        handler = AssignmentExpression(
            left=MemberExpression(open_request_id, "onerror"),
            right=FunctionExpression([Identifier("event")], body)
        )

        return Layer(
            IDBOpenDBRequest_onerror_Layer.name,
            ir_nodes=[handler],
            layer_type=IDBOpenDBRequest_onerror_Layer.layer_type
        )
