from IR.IRNodes import AssignmentExpression, Variable, CallExpression, Identifier, Literal
from IR.layers.Global import Global
import random
import string
import json
import random
import string

from IR.type.IDBType import IDBType


class BaseGenerator:
    defaultMaxDepth = 3
    defaultMaxFields = 10
    defaultStringMinLen = 3
    defaultStringMaxLen = 999

    @staticmethod
    def generate(typeName: str, key=None):
        """
        Generic dispatcher based on typeName.
        This method assumes the subclass implements generate<TypeName>().
        """
        method = getattr(BaseGenerator, f"generate{typeName.capitalize()}", None)
        return method(key) if method else f"<{typeName}>"

    @staticmethod
    def _randomString(minLength=None, maxLength=None):
        minLength = minLength or BaseGenerator.defaultStringMinLen
        maxLength = maxLength or BaseGenerator.defaultStringMaxLen
        length = random.randint(minLength, maxLength)
        return ''.join(random.choice(string.ascii_letters) for _ in range(length))

    @staticmethod
    def _randomFieldName(index):
        return f"f{index}_{random.choice(string.ascii_lowercase)}"

    @staticmethod
    def _generatePrimitive():
        return random.choice([
            BaseGenerator._randomString(),
            random.randint(0,99999),
            True, False, None
        ])

    @staticmethod
    def _to_js_literal(obj):
        if obj is None:
            return 'null'
        elif obj is True:
            return 'true'
        elif obj is False:
            return 'false'
        elif isinstance(obj, str):
            escaped = obj.replace('\\', '\\\\').replace('"', '\\"')
            return f'"{escaped}"'
        elif isinstance(obj, (int, float)):
            return str(obj)
        elif isinstance(obj, list):
            return '[' + ','.join(BaseGenerator._to_js_literal(i) for i in obj) + ']'
        elif isinstance(obj, dict):
            return '{' + ','.join(
                f'{BaseGenerator._to_js_literal(str(k))}:{BaseGenerator._to_js_literal(v)}'
                for k, v in obj.items()) + '}'
        else:
            raise TypeError(f"Unsupported type: {type(obj)}")

    @staticmethod
    def _generateObject(currentDepth=0):
        # 5% 概率生成巨大对象（字段特别多）
        if random.random() < 0.05:
            fieldCount = random.randint(100, 3000)
        # 15% 概率生成大对象（字段较多）
        elif random.random() < 0.15:
            fieldCount = random.randint(20, 500)
        else:
            fieldCount = random.randint(1, BaseGenerator.defaultMaxFields)

        obj = {}
        for i in range(fieldCount):
            key = BaseGenerator._randomFieldName(i)
            obj[key] = BaseGenerator._generateValue(currentDepth + 1)
        return obj

    @staticmethod
    def _generateObjectWithKeyPathAndValue(parts: list[str], keyValue, currentDepth=0):
        if currentDepth >= BaseGenerator.defaultMaxDepth:
            return {}
        base = BaseGenerator._generateObject(currentDepth)
        current = base
        for i, part in enumerate(parts):
            if i == len(parts) - 1:
                current[part] = keyValue
            else:
                if part not in current or not isinstance(current[part], dict):
                    current[part] = {}
                current = current[part]
        return base

    @staticmethod
    def _generateValue(currentDepth):
        typeName = random.choice(["string", "number", "boolean", "null", "array", "object"])
        return BaseGenerator.generate(typeName)  # 默认从自己调，如果要扩展可重写


class IDBDataGenerator(BaseGenerator):
    anyTypeDistribution = (
            ["object"] * 5 + ["string", "number", "boolean", "null", "array"]
    )

    @staticmethod
    def generateString(key=None):
        return IDBDataGenerator._randomString()

    @staticmethod
    def generateNumber(key=None):
        return key if key is not None else random.randint(0, 9999999999)

    @staticmethod
    def generateBoolean(key=None):
        return random.choice([True, False])

    @staticmethod
    def generateNull(key=None):
        return None

    @staticmethod
    def generateArray(key=None):
        return [IDBDataGenerator._generatePrimitive() for _ in range(random.randint(1, 999))]

    @staticmethod
    def generateObject(key=None):
        obj = IDBDataGenerator._generateObject()
        if key is not None:
            obj["id"] = key
        return obj

    @staticmethod
    def generateObjectAsJS(key=None):
        if key is None:
            key = IDBDataGenerator._generatePrimitive()
        obj = IDBDataGenerator.generateObject(key)
        js_code = IDBDataGenerator._to_js_literal(obj)
        return js_code, key

    @staticmethod
    def generateObjectWithKeyPath(keyPath: str):
        parts = keyPath.split(".")
        keyValue = IDBDataGenerator._generatePrimitive()
        obj = IDBDataGenerator._generateObjectWithKeyPathAndValue(parts, keyValue)
        return obj, keyValue

    @staticmethod
    def generateObjectWithKeyPathAsJS(keyPath: str):
        obj, keyValue = IDBDataGenerator.generateObjectWithKeyPath(keyPath)
        js_code = IDBDataGenerator._to_js_literal(obj)
        return js_code, keyValue

    @staticmethod
    def generateKeyPath():
        if random.random() < 0.2:
            return '.'.join(
                IDBDataGenerator.generateString() for _ in range(random.randint(1, 10))
            )
        return IDBDataGenerator.generateString()

    # stable指的是稳定输出only，绝不会错, 等价于getkey
    @staticmethod
    def generateKeyRange(os, stable: bool = False) -> AssignmentExpression:
        KEY_RANGE = "KeyRange"

        [lower, upper] = random.choices(os.keys, k=2)

        if stable:
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), IDBType.IDBRequest),
                CallExpression(
                    Identifier("IDBKeyRange"),
                    "only",
                    [Literal(random.choice([lower, upper]))]
                ))

        b = IDBDataGenerator.generateBoolean
        r = random.random()
        # 以下临时变量不用注册
        if r < 0.25:
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), IDBType.IDBRequest),
                CallExpression(
                    Identifier("IDBKeyRange"),
                    "bound",
                    [Literal(lower), Literal(upper), Literal(b()), Literal(b())]
                ))
        elif r < 0.5:
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), IDBType.IDBRequest),
                CallExpression(
                    Identifier("IDBKeyRange"),
                    "lowerBound",
                    [Literal(lower), Literal(b())]
                ))
        elif r < 0.75:
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), IDBType.IDBRequest),
                CallExpression(
                    Identifier("IDBKeyRange"),
                    "only",
                    [Literal(random.choice([lower, upper]))]
                ))
        else:
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), IDBType.IDBRequest),
                CallExpression(
                    Identifier("IDBKeyRange"),
                    "bound",
                    [Literal(lower), Literal(upper), Literal(b()), Literal(b())]
                ))


if __name__ == "__main__":
    # print("JS object with keyPath 'space.user.id':")
    # js_code, key_val = IDBDataGenerator.generateObjectWithKeyPathAsJS("space.user.id")
    # print("JS Object Code:\n", js_code)
    # print("Key Value:", key_val)

    # print("\nFlat JS object with implicit key:")
    # js_code, key_val = IDBDataGenerator.generateObjectAsJS()
    # print("JS Object Code:\n", js_code)
    # print("Key Value:", key_val)

    IDBDataGenerator.generateKeyRange("Asd")
