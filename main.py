import json
import os
import shutil
from IR.IRFuzzer import generate_ir_program
from IR.layers.Layer import Layer
from coverage.run_cov import GlobalEdgeBitmap, run_and_update_coverage
from lifter.IRToJSLifter import IRToJSLifter

CORPUS_ROOT = "/timer/IDXFuzzer/corpus"

def wrap_js_in_html(lines, html_output_path: str):
    html_template = \
    f"""<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>IndexedDB Test</title>
        </head>
        <body>
          <script>
            {lines}
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
    IRJson = json.dumps(IR.to_dict(), indent=2)
    rootDir = f"{CORPUS_ROOT}/{number}"
    os.makedirs(rootDir, exist_ok=True)
    IRPath = f"{rootDir}/{number}.json"

    with open(IRPath, "w", encoding="utf-8") as f:
        f.write(IRJson)

    # 这里绕一圈是为了测试lifter相互转化的能力
    with open(IRPath, "r") as f:
        ir_data = json.load(f)

    # lines = IRToJSLifter.convertLayer(IR, 0)
    root_layer = Layer.from_dict(ir_data)
    lines = IRToJSLifter.convertLayer(IR, 0)

    s = f"{rootDir}/{number}.html"
    wrap_js_in_html(lines, s)

if __name__ == "__main__":
    initCorpus()
    bm = GlobalEdgeBitmap()

    no = 0
    while True:
        genCase(no)
        HTML_PATH = f'corpus/{no}/{no}.html'
        new_edges, coverage = run_and_update_coverage(HTML_PATH, bm)
        if new_edges == 0:
            shutil.rmtree(f"{CORPUS_ROOT}/{no}")
        else:
            no = no + 1



