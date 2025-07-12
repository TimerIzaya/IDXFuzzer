import random
import string
import json


class BlobTool:

    @staticmethod
    def _random_string(length):
        return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

    @staticmethod
    def generate_random_blob_js_fixed():
        """
        返回一条 JS 表达式字符串：new Blob([...], {type: ...})
        仅用于填充参数，不返回变量声明或多行语句。
        """
        blob_type = random.choices(
            population=["text", "multiline", "json", "binary", "empty"],
            weights=[3, 2, 2, 2, 1],  # 去除 image（因需要多行）
            k=1
        )[0]

        is_large = random.random() < 0.05

        if blob_type == "text":
            content = BlobTool._random_string(random.randint(10, 2000) if is_large else random.randint(5, 30))
            js = f'new Blob(["{content}"], {{ type: "text/plain" }})'

        elif blob_type == "multiline":
            lines = [f"Line {i}: {BlobTool._random_string(20)}" for i in range(200 if is_large else 3)]
            js = f'new Blob({json.dumps(lines)}, {{ type: "text/plain" }})'

        elif blob_type == "json":
            entries = {f"key_{i}": random.randint(0, 1000) for i in range(200 if is_large else 5)}
            js = f'new Blob([JSON.stringify({json.dumps(entries)})], {{ type: "application/json" }})'

        elif blob_type == "binary":
            size = random.randint(100000, 5000000) if is_large else random.randint(4, 16)
            byte_array = [hex(random.randint(0, 255)) for _ in range(min(20, size))]
            hex_str = ', '.join(byte_array)
            if is_large:
                hex_str += " /* ... */"
            js = f'new Blob([new Uint8Array([{hex_str}])], {{ type: "application/octet-stream" }})'

        elif blob_type == "empty":
            js = 'new Blob([], { type: "text/plain" })'

        else:
            js = 'new Blob(["unknown type"], { type: "text/plain" })'

        return js



if __name__ == '__main__':
    # 生成一个 Blob JS 表达式
    jscode = BlobTool.generate_random_blob_js_fixed()
    print(jscode)
