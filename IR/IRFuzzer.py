import copy
import random

from IR.IRNodes import CallExpression, Identifier
from IR.layers import IRLayerEnum
from IR.layers.Global import Global
from IR.layers.IDBRootLayer import IDBRootLayer


def generate_ir_program():
    Global.reset()
    root_layer = IDBRootLayer.build()
    Global.reset()
    recur_layer(root_layer)

    return root_layer


'''
模拟一下变异，在随机的层次里再加入层次
'''
def recur_layer(layer):
    if layer is None or layer.children.__len__() == 0:
        return

    childrenForRecur = copy.deepcopy(layer.children)

    if random.random() < 0.05:
        childrenForRecur.insert(random.randint(0, len(childrenForRecur)), IDBRootLayer.build())

    if random.random() < 0.01:
        layer.ir_nodes.insert(random.randint(0, len(layer.ir_nodes)), dbClose())
    else:
        for child in childrenForRecur:
            recur_layer(child)


def dbClose():
    return CallExpression(
        callee_object=Identifier("db"),
        callee_method="close",
        args=[]
    )

