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
rm -rf /timer/index/test/tmp_cov/* && rm -rf /timer/index/test/chrome-tmp && SANCOV_OUTPUT_DIR=/timer/index/test/tmp_cov \
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
  --user-data-dir=/timer/index/test/chrome-tmp \
  --enable-crash-reporter \
  --crash-dumps-dir=/timer/index/test \
  --enable-logging=stderr \
  file:///timer/index/test/test1.html
```





# 目标插桩模块

| 模块                                          | 代码行数 | sanitizer边数 |
| --------------------------------------------- | -------- | ------------- |
| third_party/blink/renderer/modules/indexeddb/ | 17597    | 16960         |
| content/browser/indexed_db/                   |          |               |
| components/services/storage                   |          |               |





# 单模块总边数统计

## runtime.cc

cat third_party/chromium_instrumentation/runtime.cc

```c
#include <stdint.h>
#include <stdio.h>

// 1. 避免链接器丢弃这个对象文件的强制链接函数
extern "C" void __force_link_runtime() {
    // 空实现，只是为了被显式引用
}

// 2. 必要的 trace hook（SanitizerCoverage 要求存在这个函数）
extern "C" void __sanitizer_cov_trace_pc_guard(uint32_t* guard) {
    (void)guard;
}

// 3. 编译器插入的覆盖率 guard 范围（用于统计边数）
extern uint32_t __start___sancov_guards;
extern uint32_t __stop___sancov_guards;

// 4. constructor 函数，用于运行时验证是否成功链接
__attribute__((constructor))
static void PrintEdgeCount() {
    size_t edge_count = &__stop___sancov_guards - &__start___sancov_guards;
    fprintf(stderr, "[SanCov] ✔ Total instrumented edges: %zu\n", edge_count);
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

```

config("indexeddb_sancov_flags") {
  cflags_cc = [
    "-fsanitize-coverage=trace-pc-guard",
    "-Wno-global-constructors",
    "-Wno-error=global-constructors"
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

