# 一、配置并编译带插桩的 Chromium

```
# 删除旧构建目录，重新生成编译配置
rm -rf /timer/chromium/src/out/IndexedDBCoverage
gn gen /timer/chromium/src/out/IndexedDBCoverage --args="
  is_debug = true
  use_clang_coverage = true
  use_ozone = true
  ozone_platform_headless = true
  use_x11 = false
  is_component_build = false
  symbol_level = 2
  coverage_patterns = [
    \"*/content/browser/indexed_db/*\",
    \"*/third_party/blink/renderer/modules/indexeddb/*\"
  ]
"

# 编译 content_shell
autoninja -C /timer/chromium/src/out/IndexedDBCoverage content_shell

```



## ✅ 二、运行 JS 文件并记录覆盖率

```
LLVM_PROFILE_FILE="/timer/idxfuzzer/coverage_data/indexeddb_%p.profraw" \
/timer/chromium/src/out/IndexedDBCoverage/content_shell \
--no-sandbox \
--headless \
--disable-gpu \
--ozone-platform=headless \
--allow-file-access-from-files \
--run-all-compositor-stages-before-draw \
--run-web-tests \
--user-data-dir=/tmp/fake-profile \
file:///timer/idxfuzzer/corpus/test.html
```



## ✅ 三、合并 raw 文件生成 `merged.profdata`

```
cd /timer/idxfuzzer/coverage_data
llvm-profdata merge -sparse *.profraw -o merged.profdata
```