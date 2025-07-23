import os

# 项目根目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# IndexedDB schema 文件路径
SCHEMA_FILE = os.path.join(BASE_DIR, "schema", "indexeddb_schema.json")

FATHER = "window.indexedDB"

OPTIONAL_JUMP = "__JUMP__"

randomFuzzing = False

EDGE_TOTAL_COUNT = 7618971

TXN_OPT_CNT = 100

SCHEMA_OPT_CNT = 200

TXN_CNT = 10

TIMEOUT = 500  # ms

PROCESS_TIMEOUT = 1  # s

P_BREAK_TXN = 0.01

P_WIRED_DATA = 0.01

P_INSERT_NEST_IR = 0.02

P_CLOSE_DB = 0.01
