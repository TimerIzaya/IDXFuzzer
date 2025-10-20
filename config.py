import os

# ---------- 常量路径 ----------
CORPUS_ROOT = "result/corpus"

CRASH_ROOT = "result/crashes"

TIMEOUT_DIR = "result/timeout"

LOG_FILE = "result/fuzz_stats.log"



# 项目根目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# IndexedDB schema 文件路径
SCHEMA_FILE = os.path.join(BASE_DIR, "schema", "indexeddb_schema.json")

FATHER = "window.indexedDB"

OPTIONAL_JUMP = "__JUMP__"

randomFuzzing = False

EDGE_TOTAL_COUNT = 57837

TXN_OPT_CNT = 100

SCHEMA_OPT_CNT = 200

TXN_CNT = 10

TIMEOUT = 500  # ms

PROCESS_TIMEOUT = 8 * 1000  # ms

P_BREAK_TXN = 0.01

P_WIRED_DATA = 0.01

P_INSERT_NEST_IR = 0.02

P_CLOSE_DB = 0.01

PROCESS_COUNT = 1



# 运行模式相关信息
MODE_CUR = None
MODE_RESTORE = True
MODE_GEN  = False
MODE_MUT = False
MODE_PROGRESS = False
