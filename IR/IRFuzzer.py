import copy
import random

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

    if random.random() < 0.1:
        childrenForRecur = copy.deepcopy(layer.children)
        childrenForRecur.insert(random.randint(0, len(childrenForRecur)), IDBRootLayer.build())
        for child in childrenForRecur:
            recur_layer(child)

