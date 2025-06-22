from IR.context.IRContext import IRContext, Variable
from IR.IRNodes import AssignmentExpression, FunctionExpression, Identifier, MemberExpression, CallExpression, Literal, ConsoleLog
from IR.layers.Globals import Global
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_open.db_schema.IDBDatabase_SchemaOps_Layer import IDBDatabase_SchemaOps_Layer
from IR.type.IDBType import IDBType


class IDBOpenDBRequest_onupgradeneeded_Layer(LayerBuilder):

    name = "IDBOpenDBRequest_onupgradeneeded_Layer"

    layer_type = LayerType.REGISTER

    @staticmethod
    def build() -> Layer:
        Global.irctx.enter_layer(IDBOpenDBRequest_onupgradeneeded_Layer)

        dbName = Global.smctx.pickRandomDBName()
        body = [
            ConsoleLog(Literal("db onupgraded trigered"))
        ]

        # db = event.target.result
        # 找一个db类型的变量用来赋值
        dbIdent = Global.irctx.get_identifier_by_type(IDBType.IDBDatabase)
        assign_db = AssignmentExpression(
            left=dbIdent,
            right=MemberExpression(
                objectExpr=MemberExpression(Identifier("event"), "target"),
                property_name="result"
            )
        )
        body.append(assign_db)

        # 注册 db 到上下文
        Global.irctx.register_variable(Variable(dbName, IDBType.IDBDatabase))

        # 构造事件处理器
        open_request_id = Global.irctx.get_identifier_by_type(IDBType.IDBOpenDBRequest)
        handler = AssignmentExpression(
            left=MemberExpression(open_request_id, "onupgradeneeded"),
            right=FunctionExpression([Identifier("event")], body)
        )

        Global.irctx.exit_layer()

        children = list(filter(None, [
            IDBDatabase_SchemaOps_Layer.build(),
        ]))

        return Layer(
            IDBOpenDBRequest_onupgradeneeded_Layer.name,
            ir_nodes=[handler],
            children=children,  # ✅ 只将 schema 操作封装为子层
            layer_type=IDBOpenDBRequest_onupgradeneeded_Layer.layer_type
        )
