#!/bin/sh

while :; do
  rm -rf /timer/index/test/tmp_cov/* && rm -rf /timer/index/test/chrome-tmp

  SANCOV_OUTPUT_DIR=/timer/index/test/tmp_cov \
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
    /timer/index/result/crashes/timeout/4cb258dc/4cb258dc.html

  sleep 1
done

