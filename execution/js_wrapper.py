# after
import config


def wrap_js_in_html(lines, out_path: str, case_id: str) -> None:
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(
            "<!DOCTYPE html>\n<html><head><meta charset=\"UTF-8\">"
            "<title>IndexedDB</title></head>\n<body><script>\n"
            # 页面一加载就打 BEGIN 哨兵
            f"console.error('FUZZ_BEGIN:{case_id}');\n"
            # 语义超时窗口到期时打 DONE 哨兵并关闭
            f"setTimeout(() => {{ console.error('FUZZ_DONE:{case_id}'); window.close(); }}, {config.TIMEOUT});\n"
        )
        f.writelines(lines)
        f.write("</script></body></html>")
