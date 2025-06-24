from IR.IRNodes import AssignmentExpression
from IR.context.IRContext import IRContext
from IR.IRNodes import *
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Global import Global
from IR.layers.Layer import LayerType, Layer
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_open.db_schema.db_schema_opt.AtomicSchemaOps import *
from IR.layers.db_open.db_schema.db_schema_opt.SchemaOptDispatcher import SchemaOptDispatcher
import random


class IDBDatabase_SchemaOps_Layer(LayerBuilder):
    name = "IDBDatabase_SchemaOps_Layer"
    layer_type = LayerType.EXECUTION

    # 预计有多少os api， 实际一定小于等于这个数
    totalOps = 20000

    # IDBRequest需要嵌套生成opt
    depth = 5

    @staticmethod
    def build() -> Layer:
        body = []
        # todo 测试用  默认要加一个，不然后续可能一直难生成 后续删掉
        body.extend(createObjectStore())

        # 先正常生成一些opt
        cnt = random.randint(int(IDBDatabase_SchemaOps_Layer.totalOps / 2), IDBDatabase_SchemaOps_Layer.totalOps)
        IDBDatabase_SchemaOps_Layer.genOsApi(body, cnt)

        # 正常执行完一定会有一堆IDBRequest事件等着取结果
        IDBRequestHandler = IDBDatabase_SchemaOps_Layer.buildNestedOnsuccess(10)
        if IDBRequestHandler is not None:
            body.append(IDBRequestHandler)
        return Layer(
            IDBDatabase_SchemaOps_Layer.name,
            body,
            layer_type=IDBDatabase_SchemaOps_Layer.layer_type
        )

    @staticmethod
    def buildNestedOnsuccess(depth: int) -> AssignmentExpression | None:
        if depth <= 0 or IDBDatabase_SchemaOps_Layer.totalOps < 0:
            return None
        Global.irctx.enterLayer(f"buildOSApiNestedOnsuccess_{depth}")

        body = []
        # 如果还有更深层，递归构建内层的 handler
        idbRequestVar = Global.irctx.getVariableByType(IDBType.IDBRequest)
        if idbRequestVar is None:
            return None

        if depth > 1:
            nestedHandler = IDBDatabase_SchemaOps_Layer.buildNestedOnsuccess(depth - 1)
            if nestedHandler:
                body.append(nestedHandler)

        # 填充body里的api
        IDBDatabase_SchemaOps_Layer.genOsApi(body=body, cnt=random.randint(depth, depth * 3))
        discardVars = Global.irctx.exitLayer()
        Global.smctx.unregisterSomething(discardVars)
        return AssignmentExpression(
            left=MemberExpression(idbRequestVar, "onsuccess"),
            right=FunctionExpression([Identifier("event")], body)
        )

    @staticmethod
    def genOsApi(body: list, cnt: int):
        # 添加一条 schema op（可替换为更复杂逻辑）
        for _ in range(cnt):
            op = SchemaOptDispatcher().chooseOp()
            try:
                body.extend(op())
            except RuntimeError:
                pass
            IDBDatabase_SchemaOps_Layer.totalOps -= 1
