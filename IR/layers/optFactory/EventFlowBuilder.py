from IR.IRNodes import *
from IR.layers.Global import Global
from IR.layers.optFactory.AtomicTxnOpsDispatcher import TxnOptDispatcher
from IR.layers.optFactory.CoreApis import CoreApis, EventBuilderMode
from IR.layers.optFactory.SchemaOptDispatcher import SchemaOptDispatcher
import random


class EventFlowBuilder:

    EXPECT_OPS_CNT = 0

    ACTUAL_OPS_CNT = 0

    MODE = None

    OS_INFO = None

    @staticmethod
    def build(EXPECT_OPS: int, body: list, mode: int):
        EventFlowBuilder.EXPECT_OPS_CNT = EXPECT_OPS
        EventFlowBuilder.ACTUAL_OPS_CNT = 0
        EventFlowBuilder.MODE = mode

        # 生成opt + 处理opt event
        # 这组操作跑随机跑N轮
        roundCnt = random.randint(2, 10)
        for i in range(roundCnt):
            minOptCnt = int(EXPECT_OPS / roundCnt / 8)
            maxOptCnt = int(EXPECT_OPS / roundCnt / 4 + 1)
            EventFlowBuilder.genOsApi(body, random.randint(minOptCnt, maxOptCnt))

            # 正常执行完一定会有一堆IDBRequest事件等着取结果，随机取结果
            # if random.random() > 0.5:
            #     IDBRequestHandler = EventFlowBuilder.buildNestedOnsuccess(10)
            #     if IDBRequestHandler is not None:
            #         body.append(IDBRequestHandler)

    '''
    a = x.y()
    a.onsuccess{
        x.y1()
    }
    delete x
    '''
    @staticmethod
    def buildNestedOnsuccess(depth: int) -> AssignmentExpression | None:
        if depth <= 0 or EventFlowBuilder.ACTUAL_OPS_CNT > EventFlowBuilder.EXPECT_OPS_CNT:
            return None

        # 如果还有更深层，递归构建内层的 handler
        idbRequestVar = Global.irctx.getVariableByType(IDBType.IDBRequest)
        if idbRequestVar is None:
            return None

        Global.irctx.enterLayer(f"buildOSApiNestedOnsuccess_{depth}")
        # 随机生成处
        # 填充body里的api
        body = []
        EventFlowBuilder.genOsApi(body=body, cnt=random.randint(2, 5))

        nestedHandler = EventFlowBuilder.buildNestedOnsuccess(depth - 1)
        if nestedHandler:
            body.append(nestedHandler)

        # 填充body里的api
        EventFlowBuilder.genOsApi(body=body, cnt=random.randint(0, 3))

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
            if EventFlowBuilder.MODE is EventBuilderMode.SCHEME:
                CoreApis.MODE = EventFlowBuilder.MODE
                op = SchemaOptDispatcher.chooseOp()
            else:
                CoreApis.MODE = EventFlowBuilder.MODE
                op = TxnOptDispatcher.chooseOp()
            try:
                op = op()
                if isinstance(op, list):
                    body.extend(op)
                else:
                    body.append(op)
                EventFlowBuilder.ACTUAL_OPS_CNT += 1
            except RuntimeError:
                pass




