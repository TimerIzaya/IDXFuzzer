from IR.IRNodes import AssignmentExpression, FunctionExpression, Identifier, MemberExpression, Literal, ConsoleLog
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_open.IDBDatabase_SchemaOps_Layer import IDBDatabase_SchemaOps_Layer
from IR.type.IDBType import IDBType


class IDBOpenDBRequest_onupgradeneeded_Layer(LayerBuilder):

    name = "IDBOpenDBRequest_onupgradeneeded_Layer"

    layer_type = LayerType.REGISTER

    @staticmethod
    def build() -> Layer:
        Global.irctx.enterLayer(IDBOpenDBRequest_onupgradeneeded_Layer)

        # 找一个db literal，目前全局只有一个
        dbName = Global.smctx.pickRandomDBName()
        body = [
            ConsoleLog(Literal("db onupgraded trigered"))
        ]

        # 找一个db类型的变量用来赋值，目前全局只有一个
        # 这个var里的literal需要更新一下
        dbVar = Global.irctx.getVariableByType(IDBType.IDBDatabase)
        # 去更新之前的IDBDatabase变量 它还没有设置literal 此时db变量才正式诞生
        dbVar.varLiteral = dbName
        assignDB = AssignmentExpression(
            left=dbVar.id,
            right=MemberExpression(
                objectExpr=MemberExpression(Identifier("event"), "target"),
                property_name="result"
            )
        )
        body.append(assignDB)

        # 构造事件处理器
        open_request_id = Global.irctx.getIdentifierByType(IDBType.IDBOpenDBRequest)
        handler = AssignmentExpression(
            left=MemberExpression(open_request_id, "onupgradeneeded"),
            right=FunctionExpression([Identifier("event")], body)
        )

        Global.irctx.exitLayer()

        children = list(filter(None, [
            IDBDatabase_SchemaOps_Layer.build(),
        ]))

        return Layer(
            IDBOpenDBRequest_onupgradeneeded_Layer.name,
            ir_nodes=[handler],
            children=children,  # ✅ 只将 schema 操作封装为子层
            layer_type=IDBOpenDBRequest_onupgradeneeded_Layer.layer_type
        )
