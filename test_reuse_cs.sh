#!/usr/bin/env bash
set -euo pipefail

# ===== 路径配置 =====
CS_BIN="/timer/chromium/src/out/IndexedDBSanCov/content_shell"
SANCOV_DIR="/dev/shm/idxf_sancov"
USER_DATA_DIR="/tmp/idxf-shell-0"
PORT=9300   # 你日志里出现过的端口，说明这端口你这机器上能用

HTML_DIR="/timer/index/test"
HTMLS=(
  "file://${HTML_DIR}/t0/t0.html"
  "file://${HTML_DIR}/t1/t1.html"
)

mkdir -p "$SANCOV_DIR"

# （可选）ASan 有时候没配好会崩，先给它关掉 leak，和你平时跑 content_shell 一样
export ASAN_OPTIONS=detect_leaks=0:handle_segv=0:allocator_may_return_null=1

echo "[*] start new content_shell with full flags..."

# 注意：这里一定要带 SANCOV_OUTPUT_DIR
SANCOV_OUTPUT_DIR="$SANCOV_DIR" \
"$CS_BIN" \
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
  --no-zygote \
  --remote-debugging-port=${PORT} \
  --run-all-compositor-stages-before-draw \
  --user-data-dir="${USER_DATA_DIR}" \
  about:blank \
  > /dev/shm/idxf_cs.log 2>&1 &
CS_PID=$!
echo "[*] content_shell pid = $CS_PID"

# 启动后等它起来
sleep 1

# 如果还是崩了，直接把 log 打出来给你看
if ! kill -0 "$CS_PID" 2>/dev/null; then
  echo "[!] content_shell crashed at start, log:"
  tail -200 /dev/shm/idxf_cs.log || true
  exit 1
fi

# ===== 打开 html 的函数（用 DevTools json/new） =====
open_html() {
  local url="$1"
  curl --silent "http://127.0.0.1:${PORT}/json/new?file=${url}" >/dev/null
}

# ===== 主循环：来回喂 t0 / t1，之后发 SIGUSR1 dump 覆盖率 =====
i=0
while true; do
  html="${HTMLS[$(( i % ${#HTMLS[@]} ))]}"
  echo "[*] round $i → load: $html"
  open_html "$html"

  # 给页面一点时间跑 JS
  sleep 0.3

  # 再确认进程还活着
  if ! kill -0 "$CS_PID" 2>/dev/null; then
    echo "[!] content_shell died during loop, log:"
    tail -200 /dev/shm/idxf_cs.log || true
    exit 1
  fi

  echo "[*] round $i → send SIGUSR1 to $CS_PID"
  kill -USR1 "$CS_PID"

  # 看有没有写出 sancov 文件
  ls -lt "$SANCOV_DIR" | head -n 5 || true

  i=$((i+1))
  sleep 0.5
done

