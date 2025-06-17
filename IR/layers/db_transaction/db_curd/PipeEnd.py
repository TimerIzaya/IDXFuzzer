from typing import List

from IR.IRContext import Variable
from IR.IRNodes import Identifier, IRNode, VariableDeclaration, AssignmentExpression
from IR.IRParamValueGenerator import IRParamValueGenerator
from IR.layers.Globals import Global
from IR.type.IDBTypeTool import IDBTypeTool
from schema.SchemaClass import MethodInfo
from IR.IRNodes import CallExpression, Literal

class PipeEnd:
    def __init__(self, method_info: MethodInfo):
        self.name = method_info.name
        self.method = method_info
        self.is_read = self._infer_is_read()
        self.is_write = self._infer_is_write()

    def _infer_is_read(self):
        return self.name in {"get", "getAll", "getAllKeys", "getKey", "count", "openCursor", "openKeyCursor"}

    def _infer_is_write(self):
        return self.name in {"put", "add", "delete", "clear"}

    def generate_il(self, callee: Identifier) -> List[IRNode]:
        """
        基于 MethodInfo + IDBType + IRContext + LiteralContext 生成 CallExpression。
        自动将结果注册进 irctx（使用 returns 推导类型）。
        """
        METHOD_NAME = self.method.name
        args = IRParamValueGenerator.generateMethodArgs(method=self.method)
        recVarName = Global.irctx.generate_unique_name(f"ret_{self.name}")

        nodes = []

        # 如果没返回值，直接返回
        if IDBTypeTool.isReturnEmpty(self.method):
            call = CallExpression(callee, self.name, args, result_name=None)
            nodes.append(call)
        else:
            #如果有返回值 生成一个用于接收返回结果的变量，注意该对象的类型就是method的返回值
            recVar = Variable(recVarName, IDBTypeTool.extractIDBTypeFromMethodReturns(self.method))
            Global.itctx.register_index(recVarName)
            Global.irctx.register_variable(recVar)
            nodes.append(VariableDeclaration(recVar.name))
            nodes.append(
                AssignmentExpression(recVar, CallExpression(callee, METHOD_NAME, args=args))
            )
        return nodes

    def __repr__(self):
        return f"PipeEnd({self.name})"