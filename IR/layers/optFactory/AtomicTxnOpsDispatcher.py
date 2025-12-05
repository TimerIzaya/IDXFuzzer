from IR.layers.optFactory.CoreApis import *

AtomicTxnOptWeights = {
    CoreApis.add: 15,
    CoreApis.clear: 5,
    CoreApis.count: 5,
    CoreApis.delete: 2,
    CoreApis.get: 5,
    CoreApis.getAll: 2,
    CoreApis.getAllKeys: 2,
    CoreApis.index: 1,
    CoreApis.put: 15,
}

AtomicTxnReadOptWeights = {
    CoreApis.index: 1,
    CoreApis.get: 5,
    CoreApis.getAll: 2,
    CoreApis.getAllKeys: 2,
    CoreApis.count: 5,
}

AtomicTxnWriteOptWeights = {
    CoreApis.add: 5,
    CoreApis.clear: 5,
    CoreApis.delete: 2,
    CoreApis.put: 5,
}

class TxnOptDispatcher:
    all_ops = [
        f for f in AtomicTxnOptWeights if AtomicTxnOptWeights[f] > 0
    ]

    all_read_ops = [
        f for f in AtomicTxnReadOptWeights if AtomicTxnReadOptWeights[f] > 0
    ]

    @staticmethod
    def chooseOp():

        if Global.smctx.currentDB.txn.mode == "readonly":
            ops = TxnOptDispatcher.all_read_ops
            weights = [i for i in AtomicTxnReadOptWeights.values()]
            return random.choices(ops, weights=weights, k=1)[0]

        else:
            ops = TxnOptDispatcher.all_ops
            weights = [i for i in AtomicTxnOptWeights.values()]
            return random.choices(ops, weights=weights, k=1)[0]



