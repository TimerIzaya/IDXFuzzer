import json
import os

import config
from IR.IRFuzzer import generate_ir_program
from lifter.IRToJSLifter import IRToJSLifter


def wrap_js_in_html(lines, out_path: str, case_id: str) -> None:
    prelude = (
    "(function(){\n"
    "  function p(m){ try{ console.error(m); } catch(_){} }\n"
    "  window.addEventListener('error', function(e){\n"
    "    var stack = (e.error && e.error.stack) ? ('\\n' + e.error.stack) : '';\n"
    "    p('FUZZ_JS_ERROR: ' + (e.message || 'unknown') + ' @ ' + (e.filename || 'inline') + ':' + (e.lineno||0) + ':' + (e.colno||0) + stack);\n"
    "  });\n"
    "  window.addEventListener('unhandledrejection', function(e){\n"
    "    var r = e.reason; var msg = (r && (r.stack||r.message)) ? (r.stack||r.message) : String(r);\n"
    "    p('FUZZ_UNHANDLED_REJECTION: ' + msg);\n"
    "  }, true);\n"
    "})();\n"
)

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(
            "<!DOCTYPE html>\n"
            "<html><head><meta charset=\"UTF-8\"><title>IndexedDB</title></head>\n"
            "<body><script>\n"
        )
        f.write(prelude)  # <<< 注入错误钩子（最前面）
        f.write(
            f"console.error('FUZZ_BEGIN');\n"
            f"setTimeout(() => {{ console.error('FUZZ_DONE:{case_id}'); window.close(); }}, {config.TIMEOUT});\n"
        )
        f.writelines(lines)  # 你的 fuzz 脚本主体
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