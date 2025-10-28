# note

```
gn gen out/IndexedDBSanCov
```

```
ninja -C out/IndexedDBSanCov content_shell
```

```
find . -type f -name "runtime.cc"
```



```
git diff HEAD -- \
third_party/blink/renderer/modules/indexeddb/BUILD.gn \
content/browser/indexed_db/BUILD.gn \
components/services/storage/BUILD.gn
```

```
git restore components/services/storage/BUILD.gn
git restore content/browser/indexed_db/BUILD.gn
git restore third_party/blink/renderer/modules/indexeddb/BUILD.gn
```



```
rm -rf /timer/index/test/case_0_env/tmp_cov/* && \
rm -rf /timer/index/test/case_0_env/chrome-tmp && \
mkdir -p /timer/index/test/case_0_env/tmp_cov && \
SANCOV_OUTPUT_DIR=/timer/index/test/case_0_env/tmp_cov \
/timer/chromium/src/out/IndexedDBSanCov/content_shell \
  --no-sandbox \
  --headless=new \
  --ozone-platform=headless \
  --disable-gpu \
  --disable-plugins \
  --disable-extensions \
  --disable-breakpad \
  --disable-default-apps \
  --disable-sync \
  --disable-background-networking \
  --disable-popup-blocking \
  --no-default-browser-check \
  --password-store=basic \
  --use-mock-keychain \
  --disable-hang-monitor \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=20000 \
  --user-data-dir=/timer/index/test/case_0_env/chrome-tmp \
  --enable-crash-reporter \
  --crash-dumps-dir=/timer/index/test/case_0_env/ \
  --enable-logging=stderr \
  file:///timer/index/test/case_0_env/test.html

```



删除/timer/index/test/case_0_env/目录下除了html的所有文件

```
find /timer/index/test/case_0_env/ -mindepth 1 ! -name "*.html" -exec rm -rf {} +
```

```
find /timer/index/test/case_0_env/ -mindepth 1 ! -name "*.html" -exec rm -rf {} + && time python3 test.py

find /timer/index/test/case_1_env/ -mindepth 1 ! -name "*.html" -exec rm -rf {} + && time python3 test.py
```

corpus数量

```
ls -l /timer/index/result/corpus/ | grep '^d' | wc -l
```



python 后台执行python3 fuzzer.py 命令，并保存输出到fuzzer.log

```
nohup python3 -u fuzzer.py > fuzzer.log 2>&1 &
```

查看所有python3的句柄数量

```

for p in $(pgrep -f python3); do     pipe_cnt=$(ls -l /proc/$p/fd 2>/dev/null \
        | awk '{print $NF}' \
        | grep -E "^pipe:\[" \
        | wc -l);     fd_cnt=$(ls /proc/$p/fd 2>/dev/null | wc -l);     cmdline=$(tr '\0' ' ' < /proc/$p/cmdline 2>/dev/null);     echo "$pipe_cnt pipes | $fd_cnt FDs | PID $p | $cmdline"; done | sort -nr

```


# 目标插桩模块

| 模块                                          | 代码行数 | sanitizer边数 |
| --------------------------------------------- | -------- | ------------- |
| third_party/blink/renderer/modules/indexeddb/ | 17597    | 16960         |
| content/browser/indexed_db/                   | 42528    | 20410         |
| components/services/storage57837              | 57837    | 18810         |





# 单模块总边数统计

## runtime.cc

cat third_party/chromium_instrumentation/runtime.cc

```c
#ifndef currentModule
#define currentModule "unknown"
#endif

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// === 全局状态 ===
static uint8_t* __sancov_bitmap = nullptr;
static size_t __sancov_bitmap_size = 0;

// === linker 提供的符号 ===
extern uint32_t __start___sancov_guards;
extern uint32_t __stop___sancov_guards;

// === 强制链接函数 ===
extern "C" void __force_link_runtime() {}

// === 插桩回调函数，每次触发边时调用 ===
extern "C" void __sanitizer_cov_trace_pc_guard(uint32_t* guard) {
    if (!*guard || !__sancov_bitmap) return;
    if (*guard >= __sancov_bitmap_size) return;
    __sancov_bitmap[*guard] = 1;
}

// === 初始化函数，程序启动时运行 ===
__attribute__((constructor))
static void __sancov_init() {
    size_t num_guards = &__stop___sancov_guards - &__start___sancov_guards;
    __sancov_bitmap_size = num_guards;

    __sancov_bitmap = (uint8_t*)calloc(__sancov_bitmap_size, sizeof(uint8_t));
    if (!__sancov_bitmap) {
        fprintf(stderr, "[SanCov] ✘ Failed to allocate bitmap\n");
        return;
    }

    for (size_t i = 0; i < num_guards; i++) {
        (&__start___sancov_guards)[i] = (uint32_t)i;
    }
    fprintf(stderr, "[SanCov] ✔ [%s] Initialized, %zu edges\n", currentModule, num_guards);
}

// === 析构函数，程序退出时导出 bitmap ===
__attribute__((destructor))
static void __sancov_dump() {
    if (!__sancov_bitmap) return;

    const char* output_dir = getenv("SANCOV_OUTPUT_DIR");
    if (!output_dir) {
        fprintf(stderr, "[SanCov] ✘ SANCOV_OUTPUT_DIR not set\n");
        return;
    }

    char path[4096];
    snprintf(path, sizeof(path), "%s/sancov_bitmap_%s.bin", output_dir, currentModule);

    FILE* fp = fopen(path, "wb");
    if (!fp) {
        fprintf(stderr, "[SanCov] ✘ Failed to open bitmap output: %s\n", path);
        return;
    }

    // 写入 header: magic + size
    uint32_t magic = 0xC0FFEE01;
    fwrite(&magic, sizeof(magic), 1, fp);
    fwrite(&__sancov_bitmap_size, sizeof(__sancov_bitmap_size), 1, fp);

    // 写入 bitmap 数据
    fwrite(__sancov_bitmap, 1, __sancov_bitmap_size, fp);
    fclose(fp);

    fprintf(stderr, "[SanCov] ✔ [%s] Bitmap saved to %s\n", currentModule, path);
}
```

third_party/chromium_instrumentation/BUILD.gn

```c
source_set("sancov_runtime") {
  sources = [ "runtime.cc" ]
  deps = []
}
```



## 任意模块主动链接

third_party/blink/renderer/modules/indexeddb/idb_database.cc

```
extern "C" void __force_link_runtime();
__attribute__((used)) static void (*runtime_link_ptr)() = &__force_link_runtime;
```



## 被插桩模块适配

third_party/blink/renderer/modules/indexeddb/BUILD.gn

顶部配置

```shell
config("indexeddb_sancov_flags") {
  cflags_cc = [
    "-fsanitize-coverage=trace-pc-guard",
    "-Wno-global-constructors",
    "-Wno-error=global-constructors",
    "-DcurrentModule=\"blink_indexeddb\""
]
}
```

引用配置

```
 configs += [ ":indexeddb_sancov_flags" ]
```

引入runtime.cc

```
"//third_party/chromium_instrumentation/runtime.cc"
```



## 编译对象args

```
is_debug = false
is_dcheck_enabled = true
symbol_level = 2
# use_sanitizer_coverage = true  # ❌ Not needed for local instrumentation
is_asan = true  # Required for linking sanitizer runtime
blink_unified_build = false  # Disable unified build to allow per-file instrumentation
```

