import copy
import random
from dataclasses import asdict

import config
from IR.IRNodes import CallExpression, Identifier, IRNode, Literal, AssignmentExpression, Variable, VariableDeclaration
from IR.layers import IRLayerEnum
from IR.layers.Global import Global
from IR.layers.IDBRootLayer import IDBRootLayer
from IR.mutation.blobTool import BlobTool


def generate_ir_program():
    Global.reset()
    root_layer = IDBRootLayer.build()
    Global.reset()
    recur_layer(root_layer)

    return root_layer



def fuckWired(node: IRNode, layer):
    if random.random() > config.P_WIRED_DATA:
        return

    if isinstance(node, AssignmentExpression) and isinstance(node.right, CallExpression):
        fuckWired(node.right, layer)

    # 只有put(item, key)这种形式可以修改
    if isinstance(node, CallExpression) and (
            node.callee_method == "put" or node.callee_method == "add") and node.args.__len__() == 2:
        node.args[0] = Literal(BlobTool.generate_random_blob_js_fixed(), needOrigin=True)

'''
模拟一下变异，在随机的层次里再加入变异因子
'''
def recur_layer(layer):
    # 任意地方继续插入完整的IR
    i = 0
    insertIR = False
    if random.random() < config.P_INSERT_NEST_IR:
        i = random.randint(0, len(layer.children))
        insertIR = True

    # 任意地方关闭数据库
    if random.random() < config.P_CLOSE_DB:
        layer.ir_nodes.insert(random.randint(0, len(layer.ir_nodes)), dbClose())

    # 捕捉put或者add方法，替换为wireddata
    for node in layer.ir_nodes:
        fuckWired(node, layer)

    for child in layer.children:
        recur_layer(child)

    if insertIR:
        layer.children.insert(i, IDBRootLayer.build())


'''
任意地方关闭连接，模拟升级降级
'''
def dbClose():
    return CallExpression(
        callee_object=Identifier("db"),
        callee_method="close",
        args=[]
    )



# if __name__ == '__main__':
