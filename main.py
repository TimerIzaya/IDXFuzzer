import json
import os
import shutil
from IR.IRFuzzer import generate_ir_program
from IR.layers.Layer import Layer
from coverage.run_cov import GlobalEdgeBitmap, run_and_update_coverage
from lifter.IRToJSLifter import IRToJSLifter

def wrap_js_in_html(js_path: str, html_output_path: str):
    with open(js_path, 'r', encoding='utf-8') as js_file:
        js_code = js_file.read()

    # 为防止 JS 中出现 `</script>`，需要做简单转义处理
    js_code_safe = js_code.replace('</script>', '</scr"+"ipt>')

    html_template = \
                f"""<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>IndexedDB Test</title>
        </head>
        <body>
          <script>
            // todo
        {js_code_safe}
        
            setTimeout(() => {{window.close();}}, 200);
          </script>
        </body>
        </html>
        """

    with open(html_output_path, 'w', encoding='utf-8') as html_file:
        html_file.write(html_template)

def initCorpus():
    corpus_dir = "./corpus"

    # 删除目录（包括内容）
    if os.path.exists(corpus_dir):
        shutil.rmtree(corpus_dir)
        print("Deleted existing corpus directory.")

    # 重新创建空目录
    os.makedirs(corpus_dir)
    print("Recreated empty corpus directory.")


def genCase(number) -> str:
    IR = generate_ir_program()
    d = IR.to_dict()

    IRJson = json.dumps(d, indent=2)
    rootDir = f"corpus/{number}"
    os.makedirs(rootDir, exist_ok=True)

    IRPath = f"{rootDir}/{number}.json"
    JSPath = f"{rootDir}/{number}.js"

    if os.path.exists(IRPath):
        os.remove(IRPath)

    with open(IRPath, "w", encoding="utf-8") as f:
        f.write(IRJson)

    # 这里绕一圈是为了测试lifter相互转化的能力
    with open(IRPath, "r") as f:
        ir_data = json.load(f)

    root_layer = Layer.from_dict(ir_data)
    lines = IRToJSLifter.convertLayer(root_layer, 0)

    for line in lines:
        with open(JSPath, "a", encoding="utf-8") as f:
            f.write(line + "\n")

    return JSPath


if __name__ == "__main__":
    initCorpus()
    bm = GlobalEdgeBitmap()
    ROOT = "/timer/IDXFuzzer/"

    no = 0
    while True:
        JSPath = genCase(no)
        JS_PATH = f"corpus/{no}/{no}.js"
        HTML_PATH = f'corpus/{no}/{no}.html'
        wrap_js_in_html(JS_PATH, HTML_PATH)
        new_edges, coverage = run_and_update_coverage(HTML_PATH, bm)
        if new_edges == 0:
            shutil.rmtree(f"{ROOT}/corpus/{no}")
        else:
            no = no + 1
        print(f"[Run {no}] edge: {new_edges}/{coverage}")



