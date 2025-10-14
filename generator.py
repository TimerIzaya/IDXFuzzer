import json
import os

import config
from IR.IRFuzzer import generate_ir_program
from execution.js_wrapper import wrap_js_in_html
from lifter.IRToJSLifter import IRToJSLifter


def gen_case(case_id: str):
    out_dir = f"{config.CORPUS_ROOT}/{case_id}"
    os.makedirs(out_dir, exist_ok=True)
    ir = generate_ir_program()
    with open(f"{out_dir}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.lift(ir)
    html_path = f"{out_dir}/{case_id}.html"
    wrap_js_in_html(js_code, html_path, case_id=case_id)
    return html_path, out_dir