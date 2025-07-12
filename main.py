import os
import re

from IR.IRFuzzer import generate_ir_program
from lifter.IRToJSLifter import IRToJSLifter
from multiprocess_linux import wrap_js_in_html

from pathlib import Path



def modify_js_in_place(js_path_str: str) -> list:
    js_path = Path(js_path_str)

    with js_path.open("r", encoding="utf-8") as f:
        original_lines = f.readlines()

    modified_lines = []
    modified_lines.append("globalThis.apis = [];\n")
    api_counter = 0  # 插桩编号从0开始

    # 控制语句前缀，避免在其前插桩破坏语法
    skip_prefixes = ("try", "catch", "finally", "else", "if", "for", "while", "do", "switch")

    # 匹配真实API调用：形如 xxx = yyy.zzz(...) 或 yyy.zzz(...)
    api_call_regex = re.compile(r"[\w\s]*=?\s*[\w\d_$]+\.[\w\d_$]+\s*\(")

    for line in original_lines:
        stripped = line.strip()
        indent = line[:len(line) - len(line.lstrip())]

        # 非空非注释行，非结构控制语句，并且是 API 调用形式
        if (stripped and not stripped.startswith("//")
            and not any(stripped.startswith(p) for p in skip_prefixes)
            and api_call_regex.match(stripped)):
            modified_lines.append(f"{indent}apis.push({api_counter}); // API-{api_counter}\n")
            api_counter += 1

        modified_lines.append(line)

    # 尾部追加统计输出
    modified_lines.append('''
setTimeout(() => {
  const sortedApis = [...apis].sort((a, b) => a - b);
  const uniqueApis = [...new Set(sortedApis)];
  const total = api_counter = Math.max(...sortedApis) + 1;
  const covered = uniqueApis.length;
  const coverage = ((covered / total) * 100).toFixed(2);

  const missed = [];
  for (let i = 0; i < total; i++) {
    if (!uniqueApis.includes(i)) missed.push(i);
  }

  console.log("API_EXEC_RESULT", JSON.stringify(sortedApis));
  console.log("===== IDX Fuzzer Stats =====");
  console.log(`🌐  API 总数     : ${total}`);
  console.log(`✅  实际执行数   : ${covered}`);
  console.log(`❌  未执行数     : ${missed.length}`);
  console.log(`📊  覆盖率       : ${covered}/${total} = ${coverage}%`);
  if (missed.length > 0) {
    console.log(`🕳️  未执行编号列表: [${missed.join(", ")}]`);
  }
  console.log("============================");
}, 300);
''')

    return modified_lines

    # with js_path.open("w", encoding="utf-8") as f:
    #     f.writelines(modified_lines)

CORPUS_ROOT = "corpus"

def genCase(number) -> str:
    IR = generate_ir_program()
    rootDir = f"{CORPUS_ROOT}/{number}"
    os.makedirs(rootDir, exist_ok=True)

    lines = IRToJSLifter.lift(IR)
    FILE = f"{rootDir}/{number}.js"
    with open(FILE, "w", encoding="utf-8") as f:
        f.writelines(lines)


    # lines = modify_js_in_place(FILE)
    # wrap_js_in_html(lines, "testCorpus/0/0.html")



if __name__ == "__main__":
    for i in range(100):
        genCase(i)




