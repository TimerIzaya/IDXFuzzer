import random

from IR.layers.optFactory.CoreApis import *

# 每个操作函数的独立权重配置
AtomicSchemaWeights = {
    CoreApis.createObjectStore: 5,
    # CoreApis.deleteObjectStore: 1,
    CoreApis.createIndex: 5,
    # CoreApis.deleteIndex: 1,
    # CoreApis.add: 5,
    # CoreApis.clear: 5,
    # CoreApis.count: 5,
    # CoreApis.delete: 2,
    # CoreApis.get: 5,
    # CoreApis.getAll: 2,
    # CoreApis.getAllKeys: 2,
    # CoreApis.index: 1,
    # CoreApis.put: 5,
}

class SchemaOptDispatcher:

    all_ops = [
        f for f in AtomicSchemaWeights if AtomicSchemaWeights[f] > 0
    ]

    @staticmethod
    def chooseOp():
        ops = SchemaOptDispatcher.all_ops

        weights = [i for i in AtomicSchemaWeights.values()]
        return random.choices(ops, weights=weights, k=1)[0]
