# 完整的IR构建过程中所需要的全局变量
from IR.context.IRContext import IRContext
from IR.context.IDBSchemaContext import IDBSchemaContext


class Global:
    irctx = IRContext()
    smctx = IDBSchemaContext()

    @staticmethod
    def reset():
        """重置所有全局上下文"""
        Global.irctx = IRContext()
        Global.smctx = IDBSchemaContext()
