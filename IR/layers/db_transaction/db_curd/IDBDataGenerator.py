from IR.IRNodes import AssignmentExpression, Variable, CallExpression, Identifier, Literal
from IR.layers.Global import Global
import random
import string
import json
from time import perf_counter

from IR.type.IDBType import IDBType


class BaseGenerator:
    # ---- 以“小数据”为主的默认参数 ----
    defaultMaxDepth = 2  # 浅层为主
    defaultMaxFieldsSmall = 6
    defaultMaxFields = 10  # 备用上限（小概率会用到更大的分布）
    defaultStringMinLen = 3
    defaultStringMaxLen = 32
    defaultArrayMaxLenSmall = 8
    defaultArrayMaxLen = 64

    @classmethod
    def generate(cls, typeName: str, key=None):
        # 注意：本方法仅做对外入口。内部不要用它来构造原始对象，避免二次序列化。
        method = getattr(cls, f"generate{typeName.capitalize()}", None)
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
            random.randint(0, 99),
            True, False, None
        ])

    @staticmethod
    def _to_js_literal(obj):
        # 统一出口：转 JS 可用字面量（字符串带引号，数字无引号，布尔 true/false，None->null）
        return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))

    # ---- 分布选择：以小为主、偶尔大 ----
    @classmethod
    def _pick_field_count(cls):
        r = random.random()
        if r < 0.94:
            return random.randint(1, cls.defaultMaxFieldsSmall)         # 小
        elif r < 0.99:
            return random.randint(20, 60)                                # 中
        else:
            return random.randint(200, 1000)                             # 大（偶尔）

    @classmethod
    def _pick_array_len(cls, currentDepth=0):
        r = random.random()
        if r < 0.94 or currentDepth >= cls.defaultMaxDepth:
            return random.randint(1, cls.defaultArrayMaxLenSmall)        # 小（或触顶时强制小）
        elif r < 0.99:
            return random.randint(20, 60)                                # 中
        else:
            return random.randint(200, 1000)                             # 大（偶尔）

    @classmethod
    def _choose_type(cls, currentDepth):
        """
        深度越深，生成 object 的概率越低；触顶后不再生成 object。
        """
        if currentDepth >= cls.defaultMaxDepth:
            return random.choice(["string", "number", "boolean", "null", "array"])
        # 深度0很少量给object，深度1更少
        p = random.random()
        if currentDepth == 0:
            return "object" if p < 0.10 else random.choice(["string", "number", "boolean", "null", "array"])
        else:
            return "object" if p < 0.03 else random.choice(["string", "number", "boolean", "null", "array"])

    @classmethod
    def _generateObject(cls, currentDepth=0):
        fieldCount = cls._pick_field_count()
        obj = {}
        for i in range(fieldCount):
            key = cls._randomFieldName(i)
            obj[key] = cls._generateValue(currentDepth + 1)
        return obj

    @classmethod
    def _generateObjectWithKeyPathAndValue(cls, parts: list[str], keyValue, currentDepth=0):
        """
        为了减少无谓的深度与体量，这里不再用随机大对象作为 base；
        仅构建最小必需路径对象，顶层可小概率混入少量兄弟字段。
        """
        base = {}
        current = base
        for i, part in enumerate(parts):
            if i == len(parts) - 1:
                current[part] = keyValue
            else:
                nxt = {}
                current[part] = nxt
                current = nxt
        # 顶层少量“点缀”字段，避免太“干净”
        for i in range(random.randint(0, 2)):
            k = cls._randomFieldName(i)
            if k not in base:
                base[k] = cls._generatePrimitive()
        return base

    @classmethod
    def _generateValue(cls, currentDepth):
        """
        内部构造统一返回 Python 原生值；出口统一转 JS 字面量字符串。
        """
        t = cls._choose_type(currentDepth)
        if t == "object":
            return cls._generateObject(currentDepth)
        elif t == "array":
            n = cls._pick_array_len(currentDepth)
            return [cls._generatePrimitive() for _ in range(n)]
        elif t == "string":
            return cls._randomString()
        elif t == "number":
            return random.randint(0, 9999999999)
        elif t == "boolean":
            return random.choice([True, False])
        elif t == "null":
            return None
        else:
            return cls._generatePrimitive()


class IDBDataGenerator(BaseGenerator):
    anyTypeDistribution = (["object"] * 3 + ["string", "number", "boolean", "null", "array"])
    keyTypeDistribution = (["string", "number"])

    # ===== 辅助：仅供内部调用，返回“原值”（不序列化），用于先构造 dict/list，最后统一序列化 =====
    @staticmethod
    def generateAnyOfKeyRaw(key=None):
        if key is not None:
            return key
        if random.choice([True, False]):
            return IDBDataGenerator._randomString()
        else:
            return random.randint(0, 9999999999)

    # ===== 对外：所有静态生成器都返回 JS 字面量字符串 =====
    @staticmethod
    def generateString(key=None):
        return IDBDataGenerator._to_js_literal(IDBDataGenerator._randomString())

    @staticmethod
    def generateNumber(key=None):
        n = key if key is not None else random.randint(0, 9999999999)
        return IDBDataGenerator._to_js_literal(n)

    @staticmethod
    def generateBoolean(key=None):
        return IDBDataGenerator._to_js_literal(random.choice([True, False]))

    @staticmethod
    def generateNull(key=None):
        return IDBDataGenerator._to_js_literal(None)  # -> "null"

    @staticmethod
    def generateArray(key=None):
        # 顶层数组也遵循“小为主，偶尔大”
        n = IDBDataGenerator._pick_array_len(currentDepth=0)
        arr = [IDBDataGenerator._generatePrimitive() for _ in range(n)]
        return IDBDataGenerator._to_js_literal(arr)

    @staticmethod
    def generateObject(key=None):
        obj = IDBDataGenerator._generateObject(currentDepth=0)
        if key is not None:
            obj["id"] = key
        return IDBDataGenerator._to_js_literal(obj)

    @staticmethod
    def generateObjectAsJS(key=None):
        if key is None:
            key = IDBDataGenerator._generatePrimitive()
        obj = IDBDataGenerator._generateObject(currentDepth=0)
        obj["id"] = key
        js_code = IDBDataGenerator._to_js_literal(obj)
        return js_code, key

    @staticmethod
    def generateObjectWithKeyPath(keyPath: str):
        parts = keyPath.split(".")
        keyValue = IDBDataGenerator.generateAnyOfKeyRaw()
        obj = IDBDataGenerator._generateObjectWithKeyPathAndValue(parts, keyValue, currentDepth=0)
        return IDBDataGenerator._to_js_literal(obj), keyValue

    @staticmethod
    def generateObjectWithKeyPathAsJS(keyPath: str):
        return IDBDataGenerator.generateObjectWithKeyPath(keyPath)

    @staticmethod
    def generateKeyPath():
        # 返回 JS 字面量字符串（带引号）
        if random.random() < 0.15:
            s = '.'.join(IDBDataGenerator._randomString() for _ in range(random.randint(1, 4)))
        else:
            s = IDBDataGenerator._randomString()
        return s

    @staticmethod
    def generateKeyRange(os, stable: bool = False) -> AssignmentExpression:
        """
        IR 版本，保留原行为。
        """
        KEY_RANGE = "KeyRange"
        lower, upper = random.choices(os.keys, k=2)
        var_type = getattr(IDBType, "IDBKeyRange", getattr(IDBType, "IDBRequest", None))

        if stable:
            key = lower
            return AssignmentExpression(
                Variable(Global.irctx.newMeName(KEY_RANGE), var_type),
                CallExpression(Identifier("IDBKeyRange"), "only", [Literal(key)])
            )

        b = IDBDataGenerator.generateBoolean
        r = random.random()
        if r < 0.25:
            meth, args = "bound", [Literal(lower), Literal(upper), Literal(json.loads(b())), Literal(json.loads(b()))]
        elif r < 0.5:
            meth, args = "lowerBound", [Literal(lower), Literal(json.loads(b()))]
        elif r < 0.75:
            meth, args = "only", [Literal(random.choice([lower, upper]))]
        else:
            meth, args = "upperBound", [Literal(upper), Literal(json.loads(b()))]

        return AssignmentExpression(
            Variable(Global.irctx.newMeName(KEY_RANGE), var_type),
            CallExpression(Identifier("IDBKeyRange"), meth, args)
        )

    @staticmethod
    def generateKeyRangeExprJS(os, stable: bool = False) -> str:
        """
        JS 片段版本，可直接放到 JS 代码中作为表达式使用。
        """
        lower, upper = random.choices(os.keys, k=2)
        if stable:
            return f"IDBKeyRange.only({IDBDataGenerator._to_js_literal(lower)})"
        b = lambda: IDBDataGenerator._to_js_literal(random.choice([True, False]))
        r = random.random()
        if r < 0.25:
            return f"IDBKeyRange.bound({IDBDataGenerator._to_js_literal(lower)},{IDBDataGenerator._to_js_literal(upper)},{b()},{b()})"
        elif r < 0.5:
            return f"IDBKeyRange.lowerBound({IDBDataGenerator._to_js_literal(lower)},{b()})"
        elif r < 0.75:
            pick = random.choice([lower, upper])
            return f"IDBKeyRange.only({IDBDataGenerator._to_js_literal(pick)})"
        else:
            return f"IDBKeyRange.upperBound({IDBDataGenerator._to_js_literal(upper)},{b()})"

    @staticmethod
    def generateAny(key=None):
        type_name = random.choice(IDBDataGenerator.anyTypeDistribution)
        method = getattr(IDBDataGenerator, f"generate{type_name.capitalize()}", None)
        return method(key) if method else f"<{type_name}>"

    @staticmethod
    def generateAnyOfKey(key=None):
        type_name = random.choice(IDBDataGenerator.keyTypeDistribution)
        method = getattr(IDBDataGenerator, f"generate{type_name.capitalize()}", None)
        return method(key) if method else f"<{type_name}>"


if __name__ == "__main__":
    # 计时工具
    def timed_call(label, fn, *args, **kwargs):
        t0 = perf_counter()
        out = fn(*args, **kwargs)
        dt_ms = (perf_counter() - t0) * 1000.0
        return out, dt_ms

    class _MockOS:
        def __init__(self):
            self.keys = [1, 2, 3, 42, 100, "a", "b", "user123", "z9"]

    os_mock = _MockOS()

    print("== Demo: run each public static generator once (with timings) ==")

    s, t = timed_call("generateString", IDBDataGenerator.generateString)
    print(f"generateString (JS) -> {s[:40]}... [len={len(s)}] [{t:.2f} ms]")

    n, t = timed_call("generateNumber", IDBDataGenerator.generateNumber)
    print(f"generateNumber (JS) -> {n} [len={len(n)}] [{t:.2f} ms]")

    b, t = timed_call("generateBoolean", IDBDataGenerator.generateBoolean)
    print(f"generateBoolean (JS) -> {b} [{t:.2f} ms]")

    nl, t = timed_call("generateNull", IDBDataGenerator.generateNull)
    print(f"generateNull (JS) -> {nl} [{t:.2f} ms]")

    arr, t = timed_call("generateArray", IDBDataGenerator.generateArray)
    print(f"generateArray (JS) len -> {len(arr)} [{t:.2f} ms]")

    obj, t = timed_call("generateObject", IDBDataGenerator.generateObject)
    print(f"generateObject (JS) obj -> {obj} [{t:.2f} ms]")

    (js_obj, js_key), t = timed_call("generateObjectAsJS", IDBDataGenerator.generateObjectAsJS)
    print(f"generateObjectAsJS.len -> {len(js_obj)}  key(py) -> {js_key} [{t:.2f} ms]")

    kp, t = timed_call("generateKeyPath", IDBDataGenerator.generateKeyPath)
    print(f"generateKeyPath (JS) -> {kp} [{t:.2f} ms]")

    (js_kp_obj, key_val), t = timed_call("generateObjectWithKeyPath", IDBDataGenerator.generateObjectWithKeyPath, "space.user.id")
    print(f"generateObjectWithKeyPath.len -> {len(js_kp_obj)}  key(py) -> {key_val} [{t:.2f} ms]")

    (js_kp2, key_val2), t = timed_call("generateObjectWithKeyPathAsJS", IDBDataGenerator.generateObjectWithKeyPathAsJS, "a.b.c")
    print(f"generateObjectWithKeyPathAsJS.len -> {len(js_kp2)}  key(py) -> {key_val2} [{t:.2f} ms]")

    any_val, t = timed_call("generateAny", IDBDataGenerator.generateAny)
    print(f"generateAny (JS) -> {str(any_val)[:40]}... [len={len(any_val)}] [{t:.2f} ms]")

    key_any, t = timed_call("generateAnyOfKey", IDBDataGenerator.generateAnyOfKey)
    print(f"generateAnyOfKey (JS) -> {key_any} [{t:.2f} ms]")

    kr1, t = timed_call("generateKeyRange(stable=True)", IDBDataGenerator.generateKeyRange, os_mock, True)
    print(f"generateKeyRange(stable=True)  -> {kr1} [{t:.2f} ms]")

    kr2, t = timed_call("generateKeyRange(stable=False)", IDBDataGenerator.generateKeyRange, os_mock, False)
    print(f"generateKeyRange(stable=False) -> {kr2} [{t:.2f} ms]")

    kr_js, t = timed_call("generateKeyRangeExprJS", IDBDataGenerator.generateKeyRangeExprJS, os_mock, False)
    print(f"generateKeyRangeExprJS -> {kr_js} [{t:.2f} ms]")

    o, t = timed_call("final object sample", IDBDataGenerator.generateObject)
    print(f"final object sample (JS.len={len(o)}) [{t:.2f} ms]")
