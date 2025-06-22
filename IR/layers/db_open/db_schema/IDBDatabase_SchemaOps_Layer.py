from IR.context.IRContext import IRContext
from IR.IRNodes import *
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Layer import LayerType, Layer
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_open.db_schema.db_schema_opt.AtomicSchemaOps import createObjectStore, createIndex, \
    deleteObjectStore, deleteIndex
from IR.layers.db_open.db_schema.db_schema_opt.SchemaOptDispatcher import SchemaOptDispatcher
import random


class IDBDatabase_SchemaOps_Layer(LayerBuilder):
    name = "IDBDatabase_SchemaOps_Layer"
    layer_type = LayerType.EXECUTION

    # 配置项
    total_ops = 200

    @staticmethod
    def build() -> Layer:
        body = []

        dispatcher = SchemaOptDispatcher()
        for _ in range(IDBDatabase_SchemaOps_Layer.total_ops):
            op = dispatcher.choose_op()
            try:
                result = op()
                body.extend(result)
            except RuntimeError as e:
                print(f"[SchemaOpt] skipped {op.__name__}: {e}")


        return Layer(
            IDBDatabase_SchemaOps_Layer.name,
            body,
            layer_type=IDBDatabase_SchemaOps_Layer.layer_type
        )
