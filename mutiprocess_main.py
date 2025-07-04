import json, os, shutil, uuid
from multiprocessing import Pool, cpu_count
import numpy as np
import multiprocessing.shared_memory as shm
from IR.IRFuzzer import generate_ir_program
from coverage.run_cov import run_and_update_coverage
from lifter.IRToJSLifter import IRToJSLifter

CORPUS_ROOT = "/timer/IDXFuzzer/corpus"
BITMAP_SIZE = 1 << 24

# ---------- 共享内存 Bitmap 类 ----------
class SharedGlobalEdgeBitmap:
    def __init__(self, name=None, size=BITMAP_SIZE, create=True):
        self.size = size
        if create:
            self.shm = shm.SharedMemory(create=True, size=self.size)
        else:
            self.shm = shm.SharedMemory(name=name)
        self.bitmap = np.ndarray((self.size,), dtype=np.uint8, buffer=self.shm.buf)

    def update_from_array(self, data: np.ndarray) -> int:
        old = self.bitmap.copy()
        np.maximum(self.bitmap[:len(data)], data, out=self.bitmap[:len(data)])
        return np.count_nonzero(self.bitmap) - np.count_nonzero(old)

    def close(self):
        self.shm.close()

    def unlink(self):
        self.shm.unlink()

    def get_array(self):
        return self.bitmap.copy()

    def name(self):
        return self.shm.name

# ---------- 工具函数 ----------
def make_uid() -> str:
    return uuid.uuid4().hex[:8]

def wrap_js_in_html(lines: str, html_path: str):
    tpl = f"""<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>IndexedDB Test</title></head>
<body><script>
{lines}
setTimeout(() => {{ window.close(); }}, 200);
</script></body></html>"""
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(tpl)

def init_corpus():
    if os.path.exists(CORPUS_ROOT):
        shutil.rmtree(CORPUS_ROOT)
    os.makedirs(CORPUS_ROOT)

def gen_case(case_id: str) -> tuple:
    ir = generate_ir_program()
    root = f"{CORPUS_ROOT}/{case_id}"
    os.makedirs(root, exist_ok=True)

    with open(f"{root}/{case_id}.json", "w", encoding="utf-8") as f:
        json.dump(ir.to_dict(), f, indent=2)

    js_code = IRToJSLifter.convertLayer(ir, 0)
    html_path = f"{root}/{case_id}.html"
    wrap_js_in_html(js_code, html_path)
    return html_path, root

# ---------- 子进程执行 ----------
def run_one_case(bitmap_name):
    case_id = make_uid()
    html_path, root_dir = gen_case(case_id)

    # 创建本地临时 bitmap，避免直接写共享内存（有锁开销）
    local_bitmap = np.zeros(BITMAP_SIZE, dtype=np.uint8)

    class TmpBitmap:
        def __init__(self, arr): self.bitmap = arr
        def update_from_file(self, path):
            with open(path, "rb") as f:
                raw = f.read()
                data = np.frombuffer(raw, dtype=np.uint8)
                before = np.count_nonzero(self.bitmap)
                self.bitmap[:len(data)] = np.maximum(self.bitmap[:len(data)], data)
                return np.count_nonzero(self.bitmap) - before

    tmp = TmpBitmap(local_bitmap)
    new_edges,coverage, total_time = run_and_update_coverage(html_path, tmp)
    print(f"new_edge: {new_edges:<8} time: {total_time} ms     coverage: {coverage:.4f}%")

    if new_edges:
        shared = SharedGlobalEdgeBitmap(name=bitmap_name, create=False)
        shared.update_from_array(local_bitmap)
        shared.close()
        return True
    else:
        shutil.rmtree(root_dir, ignore_errors=True)
        return False

# ---------- 主入口 ----------
if __name__ == "__main__":
    init_corpus()

    shared_bitmap = SharedGlobalEdgeBitmap(create=True)
    bitmap_name = shared_bitmap.name()

    pool = Pool(cpu_count())

    try:
        BATCH = 8
        while True:
            pool.starmap(run_one_case, [(bitmap_name,)] * BATCH)
    except KeyboardInterrupt:
        print("Stopped by user.")
    finally:
        pool.terminate()
        pool.join()
        shared_bitmap.close()
        shared_bitmap.unlink()
