from __future__ import annotations
from typing import Any, Dict, List, Optional, Union, Iterable
import json
from pathlib import Path
import re

TypeNode = Union[str, Dict[str, Any]]  # str or {"kind": ...}

# -------------------- I/O --------------------
def _load_json(maybe_path_or_obj: Union[str, Path, Dict[str, Any]]) -> Dict[str, Any]:
    if isinstance(maybe_path_or_obj, (str, Path)):
        p = Path(maybe_path_or_obj)
        return json.loads(p.read_text(encoding="utf-8"))
    assert isinstance(maybe_path_or_obj, dict), "Expected dict or JSON file path"
    return maybe_path_or_obj

# -------------------- type helpers --------------------
def type_to_string(t: TypeNode) -> str:
    """Pretty-print a TypeNode into a compact string (for display/log only)."""
    if isinstance(t, str):
        return t
    k = t.get("kind")
    if k == "Union":
        return " | ".join(type_to_string(x) for x in t.get("types", []))
    if k == "Array":
        return f"{type_to_string(t.get('element'))}[]"
    if k == "Generic":
        base = t.get("base")
        args = ", ".join(type_to_string(a) for a in t.get("args", []))
        return f"{base}<{args}>"
    if k == "Dict":
        fields = t.get("fields", [])
        parts = []
        for f in fields:
            name = f.get("name")
            tt = type_to_string(f.get("type"))
            opt = "?" if f.get("optional") else ""
            parts.append(f"{name}{opt}: {tt}")
        return "{ " + "; ".join(parts) + " }"
    return str(t)

def walk_types(t: TypeNode) -> Iterable[str]:
    """Yield all named type references used by this node (strings only)."""
    if isinstance(t, str):
        yield t
        return
    k = t.get("kind")
    if k == "Union":
        for x in t.get("types", []): yield from walk_types(x)
    elif k == "Array":
        yield from walk_types(t.get("element"))
    elif k == "Generic":
        base = t.get("base")
        if isinstance(base, str):
            yield base
        for a in t.get("args", []):
            yield from walk_types(a)
    elif k == "Dict":
        for f in t.get("fields", []):
            yield from walk_types(f.get("type"))

# -------------------- Parser (JSONPath-only API) --------------------
class IDBSchemaParser:
    """
    Only JSONPath-style accessors + type utilities.

    JSONPath subset:
      - dot path from '$'
      - list filter:   [key=value]   value can be quoted or bare
      - numeric index: [0]

    Examples:
      $.interfaces.IDBFactory.instanceMethods[name='open']
      $.interfaces.IDBObjectStore.instanceMethods[name='openCursor'].params[name='direction']
      $.interfaces.IDBRequest.properties[name='source'].type
    """
    _filter_re = re.compile(r"^\[(?P<key>[A-Za-z0-9_]+)=(?P<val>[^\]]+)\]$")

    def __init__(self, schema: Union[str, Path, Dict[str, Any]], type_enum: Union[str, Path, Dict[str, Any]]):
        self.schema: Dict[str, Any] = _load_json(schema)
        self.type_enum: Dict[str, Any] = _load_json(type_enum)
        # allowed type names = basic_types ∪ aliases ∪ interface names
        basics = [b for b in self.type_enum.get("basic_types", []) if isinstance(b, str)]
        aliases = [a["name"] for a in self.type_enum.get("aliases", []) if isinstance(a, dict) and "name" in a]
        ifaces = list(self.schema.get("interfaces", {}).keys())
        self.allowed_names = set(basics + aliases + ifaces)
        self._alias_map: Dict[str, Any] = {a["name"]: a["target"] for a in self.type_enum.get("aliases", []) if isinstance(a, dict) and "name" in a and "target" in a}

    # ---- JSONPath ----
    def query(self, path: str) -> Any:
        assert path.startswith("$.")
        cur: Any = self.schema
        # split on dots not inside brackets
        parts: List[str] = []
        buf = []
        bracket = 0
        for ch in path[2:]:
            if ch == '.' and bracket == 0:
                parts.append(''.join(buf)); buf = []; continue
            if ch == '[': bracket += 1
            if ch == ']': bracket -= 1
            buf.append(ch)
        if buf: parts.append(''.join(buf))

        for part in parts:
            # filter or index?
            if part.endswith(']') and '[' in part:
                name, filt = part.split('[', 1)
                filt = '[' + filt
            else:
                name, filt = part, None

            if name:
                if isinstance(cur, dict):
                    cur = cur.get(name)
                else:
                    return None

            if filt:
                m = self._filter_re.match(filt)
                if m and isinstance(cur, list):
                    key = m.group("key"); val = m.group("val")
                    # strip quotes if present
                    if (val.startswith("'") and val.endswith("'")) or (val.startswith('"') and val.endswith('"')):
                        val = val[1:-1]
                    cur = [x for x in cur if isinstance(x, dict) and str(x.get(key)) == val]
                    # if single match, unwrap
                    if len(cur) == 1:
                        cur = cur[0]
                elif filt.startswith('[') and filt.endswith(']') and isinstance(cur, list):
                    idx = int(filt[1:-1])
                    cur = cur[idx] if 0 <= idx < len(cur) else None
                else:
                    return None
        return cur

    # ---- Type API ----
    def getType(self, name: str) -> Optional[Dict[str, Any]]:
        """Return descriptor: {'kind':'Basic'|'Alias'|'Interface', ...} or None."""
        if name in self.allowed_names:
            if name in self._alias_map:
                return {"kind":"Alias","name":name,"target":self._alias_map[name]}
            # Discover if it's a basic or interface by presence
            if name in self.type_enum.get("basic_types", []):
                return {"kind":"Basic","name":name}
            return {"kind":"Interface","name":name}
        return None

    def resolveType(self, t: TypeNode, expand_alias: bool = True, _seen: Optional[set] = None) -> TypeNode:
        """安全展开别名；带循环保护并扁平化 Union。接口名不展开。"""
        if _seen is None:
            _seen = set()

        # Named type (possible alias)
        if isinstance(t, str):
            if expand_alias and t in self._alias_map:
                if t in _seen:
                    return t  # cycle guard: keep alias name
                _s = set(_seen); _s.add(t)
                return self.resolveType(self._alias_map[t], expand_alias, _s)
            return t

        k = t.get("kind")

        if k == "Union":
            flat: list = []
            for x in t.get("types", []):
                rx = self.resolveType(x, expand_alias, set(_seen))
                if isinstance(rx, dict) and rx.get("kind") == "Union":
                    flat.extend(rx.get("types", []))  # flatten nested unions
                else:
                    flat.append(rx)
            # de-duplicate (stable)
            def _keyify(node):
                return json.dumps(node, sort_keys=True) if isinstance(node, dict) else ("@" + node)
            seen = set(); dedup = []
            for item in flat:
                kkey = _keyify(item)
                if kkey not in seen:
                    seen.add(kkey); dedup.append(item)
            return {"kind": "Union", "types": dedup}

        if k == "Array":
            return {"kind":"Array","element": self.resolveType(t.get("element"), expand_alias, set(_seen))}

        if k == "Generic":
            b = t.get("base")
            if isinstance(b, str) and b in self._alias_map and expand_alias:
                if b in _seen:
                    base_resolved = b
                else:
                    _s2 = set(_seen); _s2.add(b)
                    base_resolved = self.resolveType(self._alias_map[b], expand_alias, _s2)
            else:
                base_resolved = b
            return {"kind":"Generic","base": base_resolved, "args":[self.resolveType(a, expand_alias, set(_seen)) for a in t.get("args",[])]}

        if k == "Dict":
            fields = []
            for f in t.get("fields", []):
                fields.append({
                    "name": f.get("name"),
                    "type": self.resolveType(f.get("type"), expand_alias, set(_seen)),
                    "optional": bool(f.get("optional", False)),
                    "nullable": bool(f.get("nullable", False)),
                })
            return {"kind":"Dict","fields": fields}

        return t

    def findUnknownTypes(self) -> List[str]:
        """All named types referenced in schema that are NOT in type enum nor interface names."""
        unknown = set()
        def visit(node: Any):
            if isinstance(node, dict):
                for k, v in node.items():
                    if k == "type" or k == "returns" or k == "eventType":
                        for n in walk_types(v):
                            if n not in self.allowed_names:
                                unknown.add(n)
                    visit(v)
            elif isinstance(node, list):
                for x in node: visit(x)
        visit(self.schema.get("interfaces", {}))
        return sorted(unknown)

# -------------------- tests in __main__ --------------------
def _p(obj: Any) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2)

def _ok(label: str):
    print("[OK]", label)

def _assert(cond: bool, label: str):
    if cond: _ok(label)
    else: raise AssertionError(label)

def _test(parser: IDBSchemaParser):
    # 1) open()
    node = parser.query("$.interfaces.IDBFactory.instanceMethods[name='open']")
    _assert(isinstance(node, dict) and node.get("name") == "open", "IDBFactory.open exists")

    # 2) open.params
    params = parser.query("$.interfaces.IDBFactory.instanceMethods[name='open'].params")
    _assert(isinstance(params, list) and params[0]["name"] == "name", "open.params includes 'name'")

    # 3) open.version optional & type
    ver = parser.query("$.interfaces.IDBFactory.instanceMethods[name='open'].params[name='version']")
    _assert(ver and ver["optional"] and ver["type"] == "unsigned long long", "open.version is optional u64")

    # 4) open.returns is IDBOpenDBRequest
    ret = parser.query("$.interfaces.IDBFactory.instanceMethods[name='open'].returns")
    _assert(ret == "IDBOpenDBRequest", "open.returns IDBOpenDBRequest")

    # 5) transaction.storeNames union of DOMString | DOMString[]
    store_names_t = parser.query("$.interfaces.IDBDatabase.instanceMethods[name='transaction'].params[name='storeNames'].type")
    _assert(isinstance(store_names_t, dict) and store_names_t.get('kind') == 'Union', "transaction.storeNames is Union")
    _assert("DOMString" in store_names_t["types"], "transaction.storeNames includes DOMString")
    _assert(any(isinstance(t, dict) and t.get('kind')=='Array' and t.get('element')=='DOMString' for t in store_names_t["types"]), "transaction.storeNames includes DOMString[]")

    # 6) openCursor returns IDBRequest<IDBCursorWithValue | null>
    oc_ret = parser.query("$.interfaces.IDBObjectStore.instanceMethods[name='openCursor'].returns")
    _assert(isinstance(oc_ret, dict) and oc_ret.get("kind")=="Generic" and oc_ret.get("base")=="IDBRequest", "openCursor returns Generic IDBRequest")
    arg = oc_ret["args"][0]
    _assert(isinstance(arg, dict) and arg.get("kind")=="Union" and set(arg["types"])>=set(["IDBCursorWithValue","null"]), "openCursor returns IDBCursorWithValue|null")

    # 7) getAllKeys count param optional
    gk_count = parser.query("$.interfaces.IDBObjectStore.instanceMethods[name='getAllKeys'].params[name='count']")
    _assert(gk_count and gk_count["optional"] and gk_count["type"]=="unsigned long", "getAllKeys.count optional u32")

    # 8) IDBRequest.source union includes null
    src_t = parser.query("$.interfaces.IDBRequest.properties[name='source'].type")
    _assert(isinstance(src_t, dict) and src_t["kind"]=="Union" and "null" in src_t["types"], "IDBRequest.source includes null")

    # 9) IDBKeyRange.lowerBound params
    lb_params = parser.query("$.interfaces.IDBKeyRange.staticMethods[name='lowerBound'].params")
    _assert(isinstance(lb_params, list) and lb_params[0]["name"]=="lower" and lb_params[0]["type"]=="Key", "IDBKeyRange.lowerBound first param Key")

    # 10) IDBVersionChangeEvent.newVersion union with null
    nv_t = parser.query("$.interfaces.IDBVersionChangeEvent.properties[name='newVersion'].type")
    _assert(isinstance(nv_t, dict) and nv_t["kind"]=="Union" and "null" in nv_t["types"], "VersionChangeEvent.newVersion can be null")

    # 11) createIndex options is alias
    opt_t = parser.query("$.interfaces.IDBObjectStore.instanceMethods[name='createIndex'].params[name='options'].type")
    _assert(opt_t == "IDBIndexParameters", "createIndex.options is alias IDBIndexParameters")

    # 12) type alias resolve: KeyOrRange -> Union(...)
    type_desc = parser.getType("KeyOrRange")
    _assert(type_desc and type_desc["kind"]=="Alias", "KeyOrRange alias exists")
    resolved = parser.resolveType("KeyOrRange")
    _assert(isinstance(resolved, dict) and resolved.get("kind")=="Union", "resolve KeyOrRange -> Union")
    types = resolved["types"]
    _assert("IDBKeyRange" in types, "resolved union includes IDBKeyRange")
    _assert(any((isinstance(x, str) and x == "Key") or (isinstance(x, dict) and x.get("kind")=="Array" and x.get("element")=="Key") for x in types),
            "resolved union contains Key or Array<Key> members (from recursive alias)")

    # 13) global type check
    unknown = parser.findUnknownTypes()
    _assert(unknown == [], "no unknown types")

def main():
    # Direct run without CLI args; expect files in current working directory
    schema_path = Path("origin/IDBSchema.json")
    types_path = Path("origin/IDBTypeEnum.json")
    parser = IDBSchemaParser(schema_path, types_path)
    _test(parser)
    print("\nAll tests passed.")

if __name__ == "__main__":
    main()
