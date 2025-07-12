from IR.context.IRContext import IRContext, Variable
from IR.IRNodes import VariableDeclaration, Identifier, Literal
from IR.layers.Global import Global
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder
from IR.layers.db_open.IDBFactory_OpenDatabase_Layer import IDBFactory_OpenDatabase_Layer
from IR.layers.db_delete.IDBFactory_DeleteDatabase_Layer import IDBFactory_DeleteDatabase_Layer
from IR.type.IDBType import IDBType


class IDBRootLayer(LayerBuilder):
    name = "IDBRootLayer"
    layer_type = LayerType.CALLING

    @staticmethod
    def build() -> Layer:
        body = []
        Global.irctx.enterLayer(IDBRootLayer)
        # 全局声明 db 变量

        dbLiteral = Global.smctx.newDBName()
        # 这里还没赋值 不注册 只注册一个
        Global.irctx.registerVariable(Variable(dbLiteral, IDBType.IDBDatabase))
        dbDec = VariableDeclaration(name=Identifier(dbLiteral), kind="let")
        body.append(dbDec)

        # 构建子层：open / delete
        open_layer = IDBFactory_OpenDatabase_Layer.build()
        delete_layer = IDBFactory_DeleteDatabase_Layer.build()

        Global.irctx.exitLayer()
        return Layer(
            name=IDBRootLayer.name,
            ir_nodes=body,
            children=[open_layer, delete_layer],
            layer_type=IDBRootLayer.layer_type
        )
