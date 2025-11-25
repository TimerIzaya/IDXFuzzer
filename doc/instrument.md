# note

```
gn gen out/IndexedDBSanCov
```

```
ninja -C out/IndexedDBSanCov content_shell
autoninja -C out/IndexedDBSanCov content_shell
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



查看cs的进程数量

```
pgrep -f content_shell | wc -l
```



查看cs进程细节

```
ps -o pid,ppid,pgid,cmd -C content_shell | sed '1p;2,$s/ \{1,\}/ /g'
```





查看cs进程树结构

```
ps -o pid=,ppid=,pgid=,args= -C content_shell | awk '
BEGIN { print "  PID    PPID    PGID  CMD" }
{
  pid=$1; ppid=$2; pgid=$3
  prog=$4; gsub(".*/","",prog)              # 取 basename
  rest=""
  for(i=5;i<=NF;i++) rest=rest" "$i

  role="Browser"
  if (rest ~ /--type=zygote/)      role="zygote"
  else if (rest ~ /--type=renderer/) role="renderer"
  else if (rest ~ /--type=utility/) {
    subr=""
    if (rest ~ /--utility-sub-type=storage/) subr="storage"
    else if (rest ~ /--utility-sub-type=network/) subr="network"
    role = (subr=="" ? "utility" : "utility (" subr ")")
  }

  typeflag=""
  if (match(rest,/--type=[^ ]+/)) typeflag=substr(rest,RSTART,RLENGTH)

  short=prog
  if (typeflag!="") short=short" "typeflag

  printf("%6s %7s %7s  %-14s <- %s\n", pid, ppid, pgid, short, role)
}'

```











# 目标插桩模块

| 模块                                          | 代码行数 | sanitizer边数 |
| --------------------------------------------- | -------- | ------------- |
| third_party/blink/renderer/modules/indexeddb/ | 17597    | 16960         |
| content/browser/indexed_db/                   | 42528    | 20410         |
| components/services/storage57837              | 57837    | 18810         |



# 插桩目标

- 8bit模式
- 每次发送kill自定义信号，导出bin，同时clear掉bitmap，保证复用

## runtime.cc

```
root@timer:/timer/chromium/src# cat third_party/chromium_instrumentation/runtime.cc 
// third_party/chromium_instrumentation/runtime.cc
#ifndef currentModule
#define currentModule "unknown"
#endif

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>         // getpid, read, write, close
#include <signal.h>         // sigaction
#include <stdatomic.h>      // atomic_ulong
#include <errno.h>
#include <fcntl.h>          // open
#include <sys/stat.h>
#include <sys/types.h>

// === sancov 8-bit counters (ELF section) ===
// clang/llvm with -fsanitize-coverage=inline-8bit-counters provides these.
extern "C" {
  extern uint8_t __start___sancov_cntrs[];
  extern uint8_t __stop___sancov_cntrs[];
}

// ========== 全局状态 ==========
static uint8_t* __sancov_bitmap = NULL;      // 进程内 0/1 计数/标志数组
static size_t   __sancov_bitmap_size = 0;    // bytes

static atomic_ulong __sancov_epoch = 0;      // 1..N 递增

// ========== 工具函数/日志 ==========
static inline void log_ok_init(pid_t pid, size_t size) {
  // 注意保持一行字符串常量，避免编译器将换行误解为未闭合引号
  fprintf(stderr,
          "[SanCov] OK [%s] Initialized in pid %d, %zu edges (signal=SIGUSR1)\n",
          currentModule, (int)pid, size);
}

static inline void log_export_path(pid_t pid, unsigned long epoch,
                                   size_t bytes, const char* path) {
  fprintf(stderr,
          "[SanCov] EXPORT [%s] pid=%d epoch=%lu wrote=%zu -> %s\n",
          currentModule, (int)pid, epoch, bytes, path);
}

static inline void log_warn(const char* msg) {
  fprintf(stderr, "[SanCov][warn] pid=%d %s\n", (int)getpid(), msg);
}

static bool is_zygote_process() {
  // 读取 /proc/self/cmdline 判断 --type=zygote
  FILE* f = fopen("/proc/self/cmdline", "rb");
  if (!f) return false;
  char buf[4096];
  size_t n = fread(buf, 1, sizeof(buf) - 1, f);
  fclose(f);
  if (n == 0) return false;
  buf[n] = '\0';
  // cmdline 是 '\0' 分隔，改成空格便于 strstr
  for (size_t i = 0; i < n; ++i) {
    if (buf[i] == '\0') buf[i] = ' ';
  }
  const char* needle = "--type=zygote";
  return strstr(buf, needle) != NULL;
}

static void* get_bitmap_base(size_t* out_size) {
  uint8_t* start = __start___sancov_cntrs;
  uint8_t* stop  = __stop___sancov_cntrs;
  if (!start || !stop || stop <= start) {
    *out_size = 0;
    return NULL;
  }
  *out_size = (size_t)(stop - start);
  return (void*)start;
}

static int write_all(int fd, const void* buf, size_t n) {
  const uint8_t* p = (const uint8_t*)buf;
  size_t left = n;
  while (left) {
    ssize_t w = write(fd, p, left);
    if (w < 0) {
      if (errno == EINTR) continue;
      return -1;
    }
    p += (size_t)w;
    left -= (size_t)w;
  }
  return 0;
}

// ========== SIGUSR1 导出处理 ==========
static void sancov_export_now() {
  if (!__sancov_bitmap || __sancov_bitmap_size == 0) {
    log_warn("export requested but bitmap is not ready");
    return;
  }

  const char* out_dir = getenv("SANCOV_OUTPUT_DIR");
  if (!out_dir || !*out_dir) {
    out_dir = ".";
  }

  // 递增 epoch
  unsigned long epoch = atomic_fetch_add_explicit(&__sancov_epoch, 1, memory_order_relaxed) + 1UL;

  // 构造路径
  char path[1024];
  snprintf(path, sizeof(path),
           "%s/sancov_bitmap_%s_%d_%lu.bin",
           out_dir, currentModule, (int)getpid(), epoch);

  // 写出
  int fd = open(path, O_CREAT | O_TRUNC | O_WRONLY, 0644);
  if (fd < 0) {
    log_warn("failed to open export file");
    return;
  }

  if (write_all(fd, __sancov_bitmap, __sancov_bitmap_size) != 0) {
    close(fd);
    log_warn("failed to write export file");
    return;
  }
  close(fd);

  log_export_path(getpid(), epoch, __sancov_bitmap_size, path);

  // 可选清零
  const char* clear = getenv("SANCOV_CLEAR");
  if (clear && (clear[0] == '1' || clear[0] == 'y' || clear[0] == 'Y' || clear[0] == 't' || clear[0] == 'T')) {
    memset(__sancov_bitmap, 0, __sancov_bitmap_size);
  }
}

static void sigusr1_handler(int signo) {
  (void)signo;
  sancov_export_now();
}

// ========== 进程构造器：初始化（跳过 zygote） ==========
__attribute__((constructor))
static void sancov_runtime_init() {
  // zygote 严格要求单线程，这里直接跳过所有初始化（含信号安装）
  if (is_zygote_process()) {
    return;
  }

  size_t sz = 0;
  void* base = get_bitmap_base(&sz);
  __sancov_bitmap = (uint8_t*)base;
  __sancov_bitmap_size = sz;

  if (!__sancov_bitmap || __sancov_bitmap_size == 0) {
    log_warn("no sancov counters found");
    return;
  }

  struct sigaction sa;
  memset(&sa, 0, sizeof(sa));
  sa.sa_handler = sigusr1_handler;
  sigemptyset(&sa.sa_mask);
  sa.sa_flags = SA_RESTART;
  if (sigaction(SIGUSR1, &sa, NULL) != 0) {
    log_warn("sigaction(SIGUSR1) failed");
  }

  log_ok_init(getpid(), __sancov_bitmap_size);
}
```



## 编译对象args

```
root@timer:/timer/chromium/src# cat out/IndexedDBSanCov/args.gn 
is_debug = false
is_dcheck_enabled = true
symbol_level = 2
is_asan = true
blink_unified_build = false
enable_web_test = false
use_sanitizer_coverage = false
```



## 三个模块修改内容

```
root@timer:/timer/chromium/src# git diff 
diff --git a/components/services/storage/BUILD.gn b/components/services/storage/BUILD.gn
index 9d8689f8323bd..7c94b8cd7648c 100644
--- a/components/services/storage/BUILD.gn
+++ b/components/services/storage/BUILD.gn
@@ -4,6 +4,18 @@
 
 import("//third_party/protobuf/proto_library.gni")
 
+
+# 在目标所在 BUILD.gn 顶部放两个 config
+# 在目标所在 BUILD.gn 顶部放两个 config
+config("sancov_8bit_compile") {
+  cflags_cc = [
+    "-fsanitize-coverage=inline-8bit-counters,pc-table",
+    "-Wno-global-constructors",
+    "-Wno-error=global-constructors",
+    "-DcurrentModule=\"storage_indexeddb\"",
+  ]
+}
+
 source_set("storage") {
   sources = [
     "dom_storage/async_dom_storage_database.cc",
@@ -117,6 +129,9 @@ source_set("storage") {
     "//storage/common:database_status",
     "//storage/common:leveldb_status_helper",
   ]
+
+   sources += [ "//third_party/chromium_instrumentation/runtime.cc" ]
+   configs += [ ":sancov_8bit_compile" ]
 }
 
 # This is its own component target because it exposes global state to multiple
diff --git a/content/browser/indexed_db/BUILD.gn b/content/browser/indexed_db/BUILD.gn
index b9df275169f46..8f6483be68e19 100644
--- a/content/browser/indexed_db/BUILD.gn
+++ b/content/browser/indexed_db/BUILD.gn
@@ -4,6 +4,16 @@
 
 import("//mojo/public/tools/bindings/mojom.gni")
 
+config("sancov_8bit_compile") {
+  cflags_cc = [
+    "-fsanitize-coverage=inline-8bit-counters,pc-table",
+    "-Wno-global-constructors",
+    "-Wno-error=global-constructors",
+    "-DcurrentModule=\"browser_indexeddb\"",
+  ]
+}
+
+
 source_set("indexed_db") {
   public = [ "indexed_db_control_wrapper.h" ]
 
@@ -114,6 +124,8 @@ source_set("indexed_db") {
   ]
 
   configs += [ "//content:content_implementation" ]
+  
+  configs += [ ":sancov_8bit_compile" ]
 
   friend = [
     ":unit_tests",
diff --git a/third_party/blink/renderer/modules/indexeddb/BUILD.gn b/third_party/blink/renderer/modules/indexeddb/BUILD.gn
index 66e977069f8d5..14469d928d633 100644
--- a/third_party/blink/renderer/modules/indexeddb/BUILD.gn
+++ b/third_party/blink/renderer/modules/indexeddb/BUILD.gn
@@ -4,6 +4,17 @@
 
 import("//third_party/blink/renderer/modules/modules.gni")
 
+
+config("sancov_8bit_compile") {
+  cflags_cc = [
+    "-fsanitize-coverage=inline-8bit-counters,pc-table",
+    "-Wno-global-constructors",
+    "-Wno-error=global-constructors",
+    "-DcurrentModule=\"blink_indexeddb\"",
+  ]
+}
+
+
 blink_modules_sources("indexeddb") {
   sources = [
     "global_indexed_db.cc",
@@ -68,6 +79,11 @@ blink_modules_sources("indexeddb") {
     "//third_party/blink/public/mojom:mojom_modules_blink",
     "//third_party/snappy",
   ]
+  
+
+  configs += [ ":sancov_8bit_compile" ]
+
+
 }
 
 source_set("unit_tests") {
```



## 查看插桩成功的文件（8bit模式）

```
gn gen out/IndexedDBSanCov --export-compile-commands

jq -r '.[] | select(.command | test("fsanitize-coverage=inline-8bit-counters")) | .file' \
  out/IndexedDBSanCov/compile_commands.json | sort -u
```

