import config
from IR.IRNodes import *
from IR.layers.Layer import LayerType, Layer
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.optFactory.EventFlowBuilder import EventFlowBuilder
from IR.layers.optFactory.SchemaOptDispatcher import SchemaOptDispatcher
import random

from IR.layers.optFactory.CoreApis import *


class IDBDatabase_SchemaOps_Layer(LayerBuilder):
    name = "IDBDatabase_SchemaOps_Layer"

    layer_type = LayerType.EXECUTION

    # 预计有多少os api 实际因为有些os不合法 一定小于等于这个数
    EXPECT_OPS = config.SCHEMA_OPT_CNT

    # IDBRequest需要嵌套生成opt
    depth = 5

    @staticmethod
    def build() -> Layer:
        IDBDatabase_SchemaOps_Layer.expectOpCnt = 0
        IDBDatabase_SchemaOps_Layer.actualOpt = 0

        body = []
        # todo 测试用  默认要加一个，不然后续可能一直难生成 后续删掉
        body.extend(CoreApis.createObjectStore())

        EventFlowBuilder.build(EXPECT_OPS=IDBDatabase_SchemaOps_Layer.EXPECT_OPS, body=body,
                               mode=EventBuilderMode.SCHEME)

        return Layer(
            IDBDatabase_SchemaOps_Layer.name,
            body,
            layer_type=IDBDatabase_SchemaOps_Layer.layer_type
        )
