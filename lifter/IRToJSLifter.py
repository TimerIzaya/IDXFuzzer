from IR.layers.Layer import Layer, LayerType
from IR.IRNodes import *


class IRToJSLifter:
    _current_layer = None
    _visited_layers = set()

    @staticmethod
    def lift(root_layer: Layer) -> str:
        IRToJSLifter._visited_layers = set()
        return "\n".join(IRToJSLifter.convertLayer(root_layer))

    @staticmethod
    def convertLayer(layer: Layer, indent_level: int = 0):
        IRToJSLifter._current_layer = layer
        lines = []
        nodes = layer.ir_nodes
        i = 0

        while i < len(nodes):
            node = nodes[i]
            # 合并声明 + 赋值
            if i + 1 < len(nodes) and isinstance(node, VariableDeclaration) and isinstance(nodes[i + 1],
                                                                                           AssignmentExpression):
                rhs = IRToJSLifter._convert_node(nodes[i + 1].right, 0)
                if rhs.endswith(";"):
                    rhs = rhs[:-1]
                line = f"{'    ' * indent_level}{node.kind} {node.name['raw']} = {rhs};"
                lines.append(line)
                i += 2
                continue

            lines.append(IRToJSLifter._convert_node(node, indent_level))
            i += 1

        for child in layer.children:
            if child.name not in IRToJSLifter._visited_layers:
                lines.extend(IRToJSLifter.convertLayer(child, indent_level))

        return lines

    @staticmethod
    def _convert_node(node: IRNode, indent_level: int = 0):
        indent = "    " * indent_level

        if isinstance(node, VariableDeclaration):
            return f"{indent}{node.kind} {node.name['raw']};"

        elif isinstance(node, Identifier):
            return node.raw

        elif isinstance(node, Variable):
            return IRToJSLifter._convert_node(node.name, 0)

        elif isinstance(node, Literal):
            val = node.value
            if val is None:
                return "null"
            if isinstance(val, str):
                return f"'{val}'"
            if isinstance(val, bool):
                return "true" if val else "false"
            if isinstance(val, dict):
                js_items = [
                    f"{k}: {IRToJSLifter._convert_node(Literal(v), 0)}"
                    for k, v in val.items()
                ]
                return "{" + ", ".join(js_items) + "}"
            if isinstance(val, list):
                js_items = [IRToJSLifter._convert_node(Literal(v), 0) for v in val]
                return "[" + ", ".join(js_items) + "]"
            return str(val)

        elif isinstance(node, AssignmentExpression):
            left = IRToJSLifter._convert_node(node.left, indent_level)
            right = IRToJSLifter._convert_node(node.right, indent_level).lstrip()
            if right.endswith(";"):
                right = right.rstrip(";")
            return f"{indent}{left} = {right};"

        elif isinstance(node, MemberExpression):
            obj = IRToJSLifter._convert_node(node.objectExpr, indent_level)
            return f"{obj}.{node.property_name}"

        elif isinstance(node, FunctionExpression):
            body_lines = [
                IRToJSLifter._convert_node(stmt, indent_level + 1)
                for stmt in node.body
            ]

            if (
                    isinstance(IRToJSLifter._current_layer, Layer)
                    and IRToJSLifter._current_layer.layer_type == LayerType.REGISTER
            ):
                for child in IRToJSLifter._current_layer.children:
                    IRToJSLifter._visited_layers.add(child.name)
                    body_lines.extend(
                        IRToJSLifter.convertLayer(child, indent_level + 1)
                    )

            indented_body = "\n".join("    " * (indent_level + 1) + line.lstrip() for line in body_lines)
            r = f"{indent}(event) => {{\n{indented_body}\n{indent}}}"
            return f"{indent}(event) => {{\n{indented_body}\n{indent}}}"

        elif isinstance(node, CallExpression):
            callee_obj = IRToJSLifter._convert_node(node.callee_object, indent_level)
            args = ", ".join(IRToJSLifter._convert_node(arg, indent_level) for arg in node.args)
            call_expr = f"{callee_obj}.{node.callee_method}({args})"
            if node.result_name:
                return f"{indent}const {node.result_name} = {call_expr}"
            return f"{indent}{call_expr}"

        elif isinstance(node, ConsoleLog):
            msg = IRToJSLifter._convert_node(node.value, indent_level)
            return f"{indent}console.log({msg});"
        elif isinstance(node, TryCatchStatement):
            content = f"{indent}try{{\n"
            for stmt in node.tryBody:
                content += f"{IRToJSLifter._convert_node(stmt, indent_level + 1)}\n"
            content += f"{indent}}}\n"

            content += f"{indent}catch (e){{\n"
            for stmt in node.catchBody:
                content += f"{IRToJSLifter._convert_node(stmt, indent_level + 1)}\n"
            content += f"{indent}}}\n"
            return content
        else:
            raise ValueError(f"Unsupported node type: {type(node).__name__}")


if __name__ == '__main__':
    tryBody = [
        CallExpression(Identifier("x"), "f", []),
        CallExpression(Identifier("x"), "f", [])
    ]

    catchBody = [
        CallExpression(Identifier("y"), "f", []),
        CallExpression(Identifier("y"), "f", [])
    ]
    t = TryCatchStatement(tryBody, catchBody)
    ret = IRToJSLifter._convert_node(t, 0)
    print(ret)



























