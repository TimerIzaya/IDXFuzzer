## tool

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



## third_party/blink/renderer/modules/indexeddb/



## content/browser/indexed_db/



## components/services/storage



## third_party/chromium_instrumentation/<u>runtime.cc</u>

```c
#include <atomic>
#include <cstdint>
#include <cstdio>
#include <cstring>
#include <fcntl.h>
#include <sys/mman.h>
#include <unistd.h>
#include <cstdlib>
#include <map>
#include <mutex>
#include <string>

// 最大边数量
static constexpr size_t kMaxEdgeID = 1 << 24;
static std::atomic<uint32_t> edge_id_counter(1);
static uint8_t* bitmap = nullptr;
static bool bitmap_initialized = false;

// 模块边统计信息
static std::mutex module_mutex;
static std::map<std::string, size_t> module_edge_count;

// 当前模块名称（编译时定义）
#ifndef MODULE_NAME
#define MODULE_NAME "unknown_module"
#endif

static void initialize_bitmap() {
    if (bitmap_initialized) return;

    const char* output_dir = getenv("SANCOV_OUTPUT_DIR");
    if (!output_dir) output_dir = "/tmp";

    char filename[256];
    snprintf(filename, sizeof(filename), "%s/sancov_bitmap.raw", output_dir);

    int fd = open(filename, O_RDWR | O_CREAT, 0644);
    if (fd < 0) {
        perror("[SanCov] Failed to open bitmap file");
        return;
    }

    if (ftruncate(fd, kMaxEdgeID) != 0) {
        perror("[SanCov] Failed to resize bitmap file");
        close(fd);
        return;
    }

    void* map = mmap(nullptr, kMaxEdgeID, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    if (map == MAP_FAILED) {
        perror("[SanCov] Failed to mmap bitmap");
        close(fd);
        return;
    }

    bitmap = static_cast<uint8_t*>(map);
    bitmap_initialized = true;

    printf("[SanCov] ✔ Bitmap initialized, max edges: %zu\n", kMaxEdgeID);
    close(fd);
}

extern "C" __attribute__((visibility("default")))
void __sanitizer_cov_trace_pc_guard_init(uint32_t* start, uint32_t* stop) {
    if (start == stop || *start) return;

    initialize_bitmap();

    size_t count = 0;
    for (uint32_t* x = start; x < stop; x++) {
        *x = edge_id_counter.fetch_add(1, std::memory_order_relaxed);
        count++;
    }

    std::lock_guard<std::mutex> lock(module_mutex);
    module_edge_count[MODULE_NAME] += count;
}

extern "C" __attribute__((visibility("default")))
void __sanitizer_cov_trace_pc_guard(uint32_t* guard) {
    if (!bitmap || !*guard) return;
    uint32_t id = *guard;
    uint32_t byte_index = id / 8;
    uint8_t bit_mask = 1 << (id % 8);
    bitmap[byte_index] |= bit_mask;
}

__attribute__((constructor))
static void register_exit() {
    atexit([]() {
        fprintf(stderr, "[SanCov] ===== Edge Count by Module =====\n");
        for (const auto& [module, count] : module_edge_count) {
            fprintf(stderr, "[SanCov] [%s] %zu edges\n", module.c_str(), count);
        }
        fprintf(stderr, "[SanCov] =================================\n");
    });
}


```





## args.gn

```
root@timer:/timer/chromium/src# cat out/IndexedDBSanCov/args.gn
is_debug = false
is_component_build = false
symbol_level = 1
use_thin_lto = false
dcheck_always_on = true
enable_rust = true
use_sanitizer_coverage = true
sanitizer_coverage_flags = "trace-pc-guard"
treat_warnings_as_errors = false
root@timer:/timer/chromium/src#
```

