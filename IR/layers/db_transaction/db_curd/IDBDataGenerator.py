from IR.layers.Global import Global
import random
import string
import json
import random
import string


class BaseGenerator:
    defaultMaxDepth = 3
    defaultMaxFields = 10
    defaultStringMinLen = 3
    defaultStringMaxLen = 12

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
            random.randint(0, 100),
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
        if currentDepth >= BaseGenerator.defaultMaxDepth:
            return BaseGenerator._generatePrimitive()
        obj = {}
        for i in range(random.randint(1, BaseGenerator.defaultMaxFields)):
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
        return key if key is not None else random.randint(0, 100)

    @staticmethod
    def generateBoolean(key=None):
        return random.choice([True, False])

    @staticmethod
    def generateNull(key=None):
        return None

    @staticmethod
    def generateArray(key=None):
        return [IDBDataGenerator._generatePrimitive() for _ in range(random.randint(1, 3))]

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

    @staticmethod
    def generateKeyRange(osName: str) -> str:
        if osName not in Global.smctx.currentDB.oss:
            raise RuntimeError("No active object store context")
        oss = Global.smctx.currentDB.oss
        if len(oss[osName].keys) == 0:
            raise RuntimeError("No active keys context")
        os = oss[osName]
        [lower, upper] = random.choices(os.keys, k=2)
        b = IDBDataGenerator.generateBoolean
        r = random.random()
        if r < 0.25:
            return f"IDBKeyRange.bound({lower},{upper},{b()},{b()})"
        elif r < 0.5:
            return f"IDBKeyRange.lowerBound({lower},{b()})"
        elif r < 0.75:
            return f"IDBKeyRange.only({random.choice([lower, upper])})"
        else:
            return f"IDBKeyRange.bound({lower},{upper},{b()},{b()})"


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
