from socks import PRINTABLE_PROXY_TYPES

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

    # 预计有多少os api 实际因为有些os不合法 一定小于等于这个数
    EXPECT_OPS = 20000
    # EXPECT_OPS = 50

    expectOpCnt = 0

    actualOpt = 0

    # IDBRequest需要嵌套生成opt
    depth = 5

    @staticmethod
    def build() -> Layer:
        IDBDatabase_SchemaOps_Layer.expectOpCnt = 0
        IDBDatabase_SchemaOps_Layer.actualOpt = 0

        body = []
        # todo 测试用  默认要加一个，不然后续可能一直难生成 后续删掉
        body.extend(createObjectStore())

        # 生成opt + 处理opt event
        # 这组操作跑随机跑N轮
        round = random.randint(2, 10)
        for i in range(round):
            minOptCnt = int(IDBDatabase_SchemaOps_Layer.EXPECT_OPS / round / 8)
            maxOptCnt = int(IDBDatabase_SchemaOps_Layer.EXPECT_OPS / round / 4)
            # IDBDatabase_SchemaOps_Layer.genOsApi(body, random.randint(minOptCnt, maxOptCnt))
            IDBDatabase_SchemaOps_Layer.genOsApi(body, 10)

            # 正常执行完一定会有一堆IDBRequest事件等着取结果，随机取结果
            if random.random() > 0.5:
                IDBRequestHandler = IDBDatabase_SchemaOps_Layer.buildNestedOnsuccess(10)
                if IDBRequestHandler is not None:
                    body.append(IDBRequestHandler)

        print(f"[IDBDatabase_SchemaOps_Layer]: actualOpt / expectOpt = {IDBDatabase_SchemaOps_Layer.actualOpt} / {IDBDatabase_SchemaOps_Layer.expectOpCnt}")
        return Layer(
            IDBDatabase_SchemaOps_Layer.name,
            body,
            layer_type=IDBDatabase_SchemaOps_Layer.layer_type
        )

    @staticmethod
    def buildNestedOnsuccess(depth: int) -> AssignmentExpression | None:
        if depth <= 0 or IDBDatabase_SchemaOps_Layer.expectOpCnt > IDBDatabase_SchemaOps_Layer.EXPECT_OPS:
            return None


        # 如果还有更深层，递归构建内层的 handler
        idbRequestVar = Global.irctx.getVariableByType(IDBType.IDBRequest)
        if idbRequestVar is None:
            return None

        Global.irctx.enterLayer(f"buildOSApiNestedOnsuccess_{depth}")
        # 随机生成处
        # 填充body里的api
        body = []
        IDBDatabase_SchemaOps_Layer.genOsApi(body=body, cnt=random.randint(2, 5))

        nestedHandler = IDBDatabase_SchemaOps_Layer.buildNestedOnsuccess(depth - 1)
        if nestedHandler:
            body.append(nestedHandler)

        # 填充body里的api
        IDBDatabase_SchemaOps_Layer.genOsApi(body=body, cnt=5)
        # IDBDatabase_SchemaOps_Layer.genOsApi(body=body, cnt=random.randint(depth, depth * 3))

        # 退出该层，该扔的全扔了
        discardVars = Global.irctx.exitLayer()
        Global.smctx.unregisterSomething(discardVars)
        #当前这个IDBRequest也可以扔了
        Global.irctx.unregisterVariable(idbRequestVar)

        return AssignmentExpression(
            left=MemberExpression(idbRequestVar, "onsuccess"),
            right=FunctionExpression([Identifier("event")], body)
        )


    @staticmethod
    def genOsApi(body: list, cnt: int):
        # 添加一条 schema op（可替换为更复杂逻辑）
        for _ in range(cnt):
            op = SchemaOptDispatcher().chooseOp()
            IDBDatabase_SchemaOps_Layer.expectOpCnt += 1
            try:
                op = op()
                if isinstance(op, list):
                    body.extend(op)
                else:
                    body.append(op)
                IDBDatabase_SchemaOps_Layer.actualOpt += 1
            except RuntimeError:
                pass

