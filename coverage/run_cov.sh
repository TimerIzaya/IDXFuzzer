#!/bin/bash

set -e

get_ms() {
    python3 -c 'import time; print(int(time.time() * 1000))'
}

log_duration() {
    local label="$1"
    local start_ms="$2"
    local end_ms="$3"
    local duration=$((end_ms - start_ms))
    echo "[$label] 耗时: ${duration} ms"
    echo
}

if [ $# -ne 1 ]; then
    echo "Usage: $0 <path-to-html>"
    exit 1
fi

HTML_PATH="$1"
TMP_DIR="/tmp/chrome-tmp"
BIN_GLOB="/tmp/sancov_bitmap_*.bin"

echo "[0] 开始运行，HTML路径: $HTML_PATH"
t0=$(get_ms)

# 清理旧数据
echo "[1] 清理旧数据..."
rm -rf "$TMP_DIR"
rm -f $BIN_GLOB
t1=$(get_ms)
log_duration "清理阶段" "$t0" "$t1"

# 执行 content_shell
echo "[2] 启动 content_shell..."
/timer/chromium/src/out/IndexedDBSanCov/content_shell \
  --no-sandbox \
  --disable-gpu \
  --disable-software-rasterizer \
  --headless=new \
  --ozone-platform=headless \
  --no-startup-window \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=10000 \
  --user-data-dir="$TMP_DIR" \
  "file://$HTML_PATH" 2>/dev/null
t2=$(get_ms)
log_duration "执行 content_shell" "$t1" "$t2"

# 获取 bin 文件
echo "[3] 查找 bin 文件..."
BIN_FILE=$(ls -t $BIN_GLOB 2>/dev/null | head -n 1)
if [ ! -f "$BIN_FILE" ]; then
    echo "Error: No coverage bin file generated."
    exit 1
fi
echo "[3] 找到 bin 文件: $BIN_FILE"
t3=$(get_ms)
log_duration "查找 bin 文件" "$t2" "$t3"

# 解析 bitmap
echo "[4] 解析 bitmap 文件..."
COVERED=$(od -An -v -t u1 "$BIN_FILE" | tr -s ' ' '\n' | grep -v '^$' | awk '$1 > 0' | wc -l)
TOTAL=7618971
COVERAGE=$(awk "BEGIN { printf \"%.4f\", ($COVERED/$TOTAL)*100 }")
echo "Coverage: $COVERED/$TOTAL edges  →  $COVERAGE%"
t4=$(get_ms)
log_duration "解析 bitmap" "$t3" "$t4"
