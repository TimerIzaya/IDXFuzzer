import random
import string
import json


class IDBDataGenerator:
    # === Configurable Parameters ===
    defaultMaxDepth = 3
    defaultMaxFields = 10
    defaultStringMinLen = 3
    defaultStringMaxLen = 12
    anyTypeDistribution = (
        ["object"] * 5 +
        ["string", "number", "boolean", "null", "array"]
    )
    # ===============================

    # === Public API ===

    @staticmethod
    def generate(typeName: str, key=None):
        """Generic dispatcher for type-based generation"""
        method = getattr(IDBDataGenerator, f"generate{typeName.capitalize()}", None)
        return method(key) if method else f"<{typeName}>"

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
        """
        Generate a JS-compatible object as a string, optionally using a given key.
        Return (js_string, key_value)
        """
        if key is None:
            key = IDBDataGenerator._generatePrimitive()
        obj = IDBDataGenerator.generateObject(key=key)
        js_code = IDBDataGenerator._to_js_literal(obj)
        return js_code, key

    @staticmethod
    def generateAny(key=None):
        chosen = random.choice(IDBDataGenerator.anyTypeDistribution)
        return IDBDataGenerator.generate(chosen, key=key)

    @staticmethod
    def generateFunction(key=None):
        return "(e) => { console.log(e); }"

    @staticmethod
    def generateKeyPath():
        """Return either flat or nested keyPath string"""
        if random.random() < 0.2:
            return '.'.join(
                str(IDBDataGenerator.generateString()) for _ in range(random.randint(1, 10))
            )
        return IDBDataGenerator.generateString()

    @staticmethod
    def generateObjectWithKeyPath(keyPath: str):
        """
        Generate an object that contains the given keyPath,
        and return (object, keyValue) directly when assigning the value.
        """
        parts = keyPath.split(".")
        keyValue = IDBDataGenerator._generatePrimitive()
        obj = IDBDataGenerator._generateObjectWithKeyPathAndValue(parts, keyValue)
        return obj, keyValue

    @staticmethod
    def generateObjectWithKeyPathAsJS(keyPath: str):
        """
        Same as generateObjectWithKeyPath, but return JS code string and keyValue
        """
        obj, keyValue = IDBDataGenerator.generateObjectWithKeyPath(keyPath)
        js_code = IDBDataGenerator._to_js_literal(obj)
        return js_code, keyValue

    # === Internal Implementation ===

    @staticmethod
    def _generateObject(currentDepth=0):
        if currentDepth >= IDBDataGenerator.defaultMaxDepth:
            return IDBDataGenerator._generatePrimitive()
        obj = {}
        for i in range(random.randint(1, IDBDataGenerator.defaultMaxFields)):
            key = IDBDataGenerator._randomFieldName(i)
            obj[key] = IDBDataGenerator._generateValue(currentDepth + 1)
        return obj

    @staticmethod
    def _generateObjectWithKeyPathAndValue(parts: list[str], keyValue, currentDepth=0):
        if currentDepth >= IDBDataGenerator.defaultMaxDepth:
            return {}

        base = IDBDataGenerator._generateObject(currentDepth)
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
        return IDBDataGenerator.generate(typeName)

    @staticmethod
    def _generatePrimitive():
        return random.choice([
            IDBDataGenerator._randomString(),
            random.randint(0, 100),
            True, False, None
        ])

    @staticmethod
    def _randomString(minLength=None, maxLength=None):
        minLength = minLength or IDBDataGenerator.defaultStringMinLen
        maxLength = maxLength or IDBDataGenerator.defaultStringMaxLen
        length = random.randint(minLength, maxLength)
        return ''.join(random.choice(string.ascii_letters) for _ in range(length))

    @staticmethod
    def _randomFieldName(index):
        return f"f{index}_{random.choice(string.ascii_lowercase)}"

    @staticmethod
    def _to_js_literal(obj):
        if obj is None:
            return 'null'
        elif obj is True:
            return 'true'
        elif obj is False:
            return 'false'
        elif isinstance(obj, str):
            # 转义双引号和反斜杠
            escaped = obj.replace('\\', '\\\\').replace('"', '\\"')
            return f'"{escaped}"'
        elif isinstance(obj, (int, float)):
            return str(obj)
        elif isinstance(obj, list):
            return '[' + ','.join(IDBDataGenerator._to_js_literal(i) for i in obj) + ']'
        elif isinstance(obj, dict):
            parts = []
            for k, v in obj.items():
                # JS 中 key 必须是字符串，带引号
                key_str = IDBDataGenerator._to_js_literal(str(k))
                val_str = IDBDataGenerator._to_js_literal(v)
                parts.append(f'{key_str}:{val_str}')
            return '{' + ','.join(parts) + '}'
        else:
            raise TypeError(f"Unsupported type: {type(obj)}")

# === Test ===

def main():
    # print("JS object with keyPath 'space.user.id':")
    # js_code, key_val = IDBDataGenerator.generateObjectWithKeyPathAsJS("space.user.id")
    # print("JS Object Code:\n", js_code)
    # print("Key Value:", key_val)

    print("\nFlat JS object with implicit key:")
    js_code, key_val = IDBDataGenerator.generateObjectAsJS()
    print("JS Object Code:\n", js_code)
    print("Key Value:", key_val)




if __name__ == "__main__":
    main()
