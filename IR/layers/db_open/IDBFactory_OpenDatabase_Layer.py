import random
from IR.layers.Global import Global
from IR.layers.db_open.IDBOpenDBRequest_onblocked_Layer import IDBOpenDBRequest_onblocked_Layer
from IR.layers.db_open.IDBOpenDBRequest_onerror_Layer import IDBOpenDBRequest_onerror_Layer
from IR.layers.db_open.IDBOpenDBRequest_onsuccess_Layer import IDBOpenDBRequest_onsuccess_Layer
from IR.type.IDBType import IDBType
from schema.IDBSchemaParser import IDBSchemaParser
from IR.IRNodes import CallExpression, Identifier, Literal
from IR.context.IRContext import Variable
from config import FATHER
from IR.IRParamValueGenerator import IRParamValueGenerator
from IR.layers.db_open.IDBOpenDBRequest_onupgradeneeded_Layer import IDBOpenDBRequest_onupgradeneeded_Layer
from IR.layers.Layer import Layer, LayerType
from IR.layers.LayerBuilder import LayerBuilder


class IDBFactory_OpenDatabase_Layer(LayerBuilder):
    name = "IDBFactory_OpenDatabase_Layer"
    layer_type = LayerType.CALLING

    @staticmethod
    def build() -> Layer:
        parser = IDBSchemaParser()
        method = parser.getInterface("IDBFactory").getStaticMethod("open")

        # 单独生成 id/version 参数，便于注册数据库
        open_params = method.getParams().raw()
        dbName = IRParamValueGenerator.generateValueByParamInfo(open_params[0])  # string

        versionNumber = random.randint(1, 2 ** 53 - 1)

        #注意 这里只是尝试open一个叫dbName的db, 具体赋值的变量要放在onsuccess层里去注册
        Global.smctx.registerDatabase(dbName, versionNumber)
        Global.smctx.markCurrentDB(dbName)

        args = [Literal(dbName), Literal(versionNumber)]

        openRequestName = Global.smctx.newOpenRequestName()
        call = CallExpression(
            callee_object=Identifier(FATHER),
            callee_method="open",
            args=args,
            result_name=openRequestName
        )

        # 注册 indexedDB 对象
        Global.irctx.registerVariable(Variable("FATHER", IDBType.IDBFactory))

        Global.irctx.registerVariable(Variable(openRequestName, IDBType.IDBOpenDBRequest))

        return Layer(
            name=IDBFactory_OpenDatabase_Layer.name,
            ir_nodes=[call],
            children=[
                IDBOpenDBRequest_onupgradeneeded_Layer.build(),
                IDBOpenDBRequest_onsuccess_Layer.build(),
                IDBOpenDBRequest_onerror_Layer.build(),
                IDBOpenDBRequest_onblocked_Layer.build()
            ],
            layer_type=IDBFactory_OpenDatabase_Layer.layer_type
        )
