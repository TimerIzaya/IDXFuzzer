import os, json, uuid, shutil
from multiprocessing import Pool, cpu_count
from IR.IRFuzzer import generate_ir_program
from coverage.run_cov import run_and_update_coverage
from lifter.IRToJSLifter import IRToJSLifter
from coverage.bitmap import GlobalEdgeBitmap

CORPUS_ROOT = "/timer/IDXFuzzer/corpus"

def make_uid(): return uuid.uuid4().hex[:8]

def wrap_js_in_html(lines, out):
    tpl = f"""<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>IndexedDB</title></head>
<body><script>
{lines}
setTimeout(() => {{ window.close(); }}, 200);
</script></body></html>"""
    with open(out, "w") as f: f.write(tpl)

def gen_case(case_id):
    root = f"{CORPUS_ROOT}/{case_id}"
    os.makedirs(root, exist_ok=True)
    ir = generate_ir_program()
    with open(f"{root}/{case_id}.json", "w") as f:
        json.dump(ir.to_dict(), f, indent=2)
    js_code = IRToJSLifter.convertLayer(ir, 0)
    html_path = f"{root}/{case_id}.html"
    wrap_js_in_html(js_code, html_path)
    return html_path, root

def run_one_case(bitmap_name):
    cid = make_uid()
    html_path, root = gen_case(cid)
    bitmap = GlobalEdgeBitmap(name=bitmap_name, create=False)
    new_edges, _ = run_and_update_coverage(html_path, bitmap)
    if new_edges <= 0: shutil.rmtree(root, ignore_errors=True)
    bitmap.close()
    return new_edges > 0

if __name__ == "__main__":
    if os.path.exists(CORPUS_ROOT): shutil.rmtree(CORPUS_ROOT)
    os.makedirs(CORPUS_ROOT)

    bitmap = GlobalEdgeBitmap(create=True)
    name = bitmap.name()

    pool = Pool(cpu_count())
    try:
        while True:
            pool.starmap(run_one_case, [(name,)] * 8)
    except KeyboardInterrupt:
        print("Interrupted by user.")
    finally:
        pool.terminate()
        pool.join()
        bitmap.close()
        bitmap.unlink()
