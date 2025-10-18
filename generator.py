import json
import os

import config
from IR.IRFuzzer import generate_ir_program
from lifter.IRToJSLifter import IRToJSLifter


def wrap_js_in_html(lines, out_path: str, case_id: str) -> None:
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(
            "<!DOCTYPE html>\n<html><head><meta charset=\"UTF-8\">"
            "<title>IndexedDB</title></head>\n<body><script>\n"
            f"console.error('FUZZ_BEGIN');\n"
            # 语义超时窗口到期时打 DONE 哨兵并关闭
            f"setTimeout(() => {{ console.error('FUZZ_DONE:{case_id}'); window.close(); }}, {config.TIMEOUT});\n"
        )
        f.writelines(lines)
        f.write("</script></body></html>")



def gen_case(case_id: str):
    out_dir = f"{config.CORPUS_ROOT}/{case_id}"
    os.makedirs(out_dir, exist_ok=True)
    ir = generate_ir_program()
    with open(f"{out_dir}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.lift(ir)
    html_path = f"{out_dir}/{case_id}.html"
    wrap_js_in_html(js_code, html_path, case_id=case_id)
    return html_path