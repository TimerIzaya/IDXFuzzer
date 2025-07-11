from IR.layers.optFactory.CoreApis import *

AtomicTxnOptWeights = {
    CoreApis.add: 5,
    CoreApis.clear: 5,
    CoreApis.count: 5,
    CoreApis.delete: 2,
    CoreApis.get: 5,
    CoreApis.getAll: 2,
    CoreApis.getAllKeys: 2,
    CoreApis.index: 1,
    CoreApis.put: 5,
}


class TxnOptDispatcher:
    all_ops = [
        f for f in AtomicTxnOptWeights if AtomicTxnOptWeights[f] > 0
    ]

    @staticmethod
    def chooseOp():
        ops = TxnOptDispatcher.all_ops

        weights = [i for i in AtomicTxnOptWeights.values()]
        return random.choices(ops, weights=weights, k=1)[0]
