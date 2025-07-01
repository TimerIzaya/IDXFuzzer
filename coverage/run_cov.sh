#!/bin/bash

set -e

if [ $# -ne 1 ]; then
    echo "Usage: $0 <path-to-html>"
    exit 1
fi

HTML_PATH="$1"
TMP_DIR="/tmp/chrome-tmp"
BIN_GLOB="/tmp/sancov_bitmap_*.bin"

# 清理旧数据
rm -rf "$TMP_DIR"
rm -f $BIN_GLOB

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


# 获取最新的 bin 文件
BIN_FILE=$(ls -t $BIN_GLOB 2>/dev/null | head -n 1)

if [ ! -f "$BIN_FILE" ]; then
    echo "Error: No coverage bin file generated."
    exit 1
fi

# 解析 bitmap，统计非零字节数量
COVERED=$(od -An -v -t u1 "$BIN_FILE" | tr -s ' ' '\n' | grep -v '^$' | awk '$1 > 0' | wc -l)
TOTAL=7618971

COVERAGE=$(awk "BEGIN { printf \"%.4f\", ($COVERED/$TOTAL)*100 }")
echo "Coverage: $COVERED/$TOTAL edges  →  $COVERAGE%"

# 可选：清理 bin 文件
# rm -f "$BIN_FILE"

