#!/usr/bin/env bash
set -euo pipefail

# ========== 可配参数 ==========
: "${RUNS:=3}"                                  # 轮数（也可在命令行用 RUNS=5 覆盖）
: "${HTML:=test/t0/t0.html}"                    # 要加载的页面
CS="/timer/chromium/src/out/IndexedDBSanCov/content_shell"
WAIT_MS=300                                     # 打开页面后，导出前的固定等待（毫秒）
PORT_START=9300                                 # 端口起点（每轮自增，避免冲突）

# ========== 小工具 ==========
url_encode_file() {
  python3 - "$1" <<'PY'
import os,sys,urllib.parse
p=os.path.realpath(sys.argv[1])
print(urllib.parse.quote(f"file://{p}", safe=":/"))
PY
}

wait_for_devtools() {
  # 等 DevTools 起好（最多 5s；起来即返回 0），静默失败，避免刷屏
  local port="$1"
  for _ in {1..100}; do
    if curl --proxy "" -fsS "http://127.0.0.1:${port}/json/version" >/dev/null 2>&1; then
      echo "[*] DevTools :$port ready"
      return 0
    fi
    sleep 0.05
  done
  echo "[!] DevTools :$port not ready after 5s"
  return 1
}

msleep() { python3 - "$1" <<< 'import sys,time; time.sleep(int(sys.argv[1])/1000)'; }

report_bin() {
  local bin="$1"
  python3 - "$bin" <<'PY'
import sys
p=sys.argv[1]
d=open(p,'rb').read()
total=len(d)                 # 8-bit 计数：1字节=1条静态边
fired=sum(1 for b in d if b) # 非零=命中
print(f"[report] file={p}\n  total_edges={total}\n  edges_fired={fired}\n  hit_rate={fired/total*100:.2f}%")
PY
}

# ========== 主流程 ==========
ABS_HTML="$(realpath "${HTML}")"
[ -f "$ABS_HTML" ] || { echo "[!] HTML not found: $ABS_HTML"; exit 1; }

for (( i=1; i<=RUNS; i++ )); do
  RUN_ID="$(date +'%Y%m%d_%H%M%S')_r${i}"
  BASE="test/env/${RUN_ID}"
  PORT=$((PORT_START + i - 1))

  echo
  echo "========== [Round ${i}/${RUNS}] BASE=${BASE} PORT=${PORT} =========="

  # 准备目录 & 环境
  mkdir -p "$BASE"/{bin,crash,profile,logs}
  export SANCOV_OUTPUT_DIR="$(realpath "$BASE/bin")"
  export SANCOV_CLEAR=1
  export ASAN_OPTIONS="allow_user_segv_handler=1:fast_unwind_on_fatal=0"

  # 启动 content_shell（前台挂起，方便看日志）
  echo "[*] Launch content_shell ..."
  "$CS" \
    --no-sandbox \
    --headless=new --ozone-platform=headless \
    --disable-gpu --disable-plugins --disable-extensions \
    --disable-default-apps --disable-sync \
    --disable-background-networking --disable-popup-blocking \
    --disable-backgrounding-occluded-windows \
    --disable-renderer-backgrounding \
    --no-proxy-server \
    --no-default-browser-check --password-store=basic \
    --disable-hang-monitor \
    --enable-logging=stderr \
    --enable-crash-reporter --crash-dumps-dir="$BASE/crash" \
    --remote-debugging-port="$PORT" \
    --user-data-dir="$BASE/profile/ud_1" \
    about:blank >"$BASE/logs/content_shell.log" 2>&1 &

  CS_PID=$!
  disown "$CS_PID"
  # 等端口就绪
  if ! wait_for_devtools "$PORT"; then
    echo "[!] DevTools :$PORT not ready after 5s; see $BASE/logs/content_shell.log"
    kill -9 "$CS_PID" || true
    continue
  fi

  # 开新页
  ENC_URL="$(url_encode_file "$ABS_HTML")"
  DEVTOOLS="http://127.0.0.1:${PORT}"
  curl --proxy "" -fsS -X PUT "$DEVTOOLS/json/new?${ENC_URL}" >/dev/null || {
    echo "[!] open page failed"; kill -9 "$CS_PID" || true; continue;
  }
  echo "[*] Opened: $ABS_HTML"

  # 固定等待（或换成等待页内标志）
  msleep "$WAIT_MS"

  # 导出（给 runtime.cc）
  echo "[*] Export bitmap: kill -USR1 $CS_PID"
  kill -USR1 "$CS_PID" || true


  # 固定等 3 秒（写死）
  sleep 3

  # 等导出文件出现（最多 3s）
  BIN=""
  for _ in {1..60}; do
    BIN="$(ls -t "$SANCOV_OUTPUT_DIR"/sancov_bitmap_*_"$CS_PID"_*.bin 2>/dev/null | head -n1 || true)"
    [ -n "$BIN" ] && break
    msleep 50
  done

  if [ -z "$BIN" ]; then
    echo "[!] No sancov bin found in $SANCOV_OUTPUT_DIR (pid=$CS_PID). Check runtime.cc or logs."
  else
    report_bin "$BIN"
  fi

  # 关掉本轮 content_shell
  echo "[*] Kill content_shell pid=$CS_PID"
  kill -TERM "$CS_PID" 2>/dev/null || true
  sleep 0.2
  kill -KILL "$CS_PID" 2>/dev/null || true

  echo "[*] Logs: $BASE/logs/content_shell.log"
done
