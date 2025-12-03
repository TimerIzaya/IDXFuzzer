# Key

## type

```
// 各项最简定义
Number = (n) => typeof n === "number" && !Number.isNaN(n);
String = (s) => typeof s === "string";
Date   = (d) => d instanceof Date && !Number.isNaN(d.getTime());
Binary = (b) => b instanceof ArrayBuffer || ArrayBuffer.isView(b);
Array  = (a) => Array.isArray(a) && a.every(isIDBValidKey);

// 总入口
function isIDBValidKey(x) {
  return Number(x) || String(x) || Date(x) || Binary(x) || Array(x);
}
```

## sort rule

> number < date < string < binary < array

# KeyRange 

`IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen)`

```
if (lower == null || upper == null) throw "lower/upper empty";
if (!isIDBValidKey(lower) || !isIDBValidKey(upper)) throw "invalid key";
if (lower > upper) throw "lower > upper";
if (lower === upper && (lowerOpen || upperOpen)) throw "open interval not allowed when equal";
```

# IDBKeyPath 

## type

- empty string
- one IdentifierName
- many IdentifierName with `.`

## autoIncrement 

`createObjectStore（）` 

```
if (autoIncrement && (keyPath === "" || Array.isArray(keyPath)))
  throw "InvalidAccessError";
```

`createIndex` 

```
if (Array.isArray(keyPath) && multiEntry)
  throw "InvalidAccessError";
```

# schema

## onupgrade

```
const SCHEMA_OPS = new Set([
  "CREATE_OBJECT_STORE",
  "DELETE_OBJECT_STORE",
  "CREATE_INDEX",
  "DELETE_INDEX"
]);

const isLegalSchemaOp =
  SCHEMA_OPS.has(op) &&
  event === "upgradeneeded" &&
  tx.mode === "versionchange" &&
  tx.active === true;

if (isLegalSchemaOp) {
  // do schema operation...
}

# ps：versionchange就是一个隐形的onupgrade自己创建的事务，不要管
```

## transaction

### 只读和读写模式区分

这里实现方式放在opt的r或者rw字段里解决

### Transaction 必须 active 才能操作的操作

```
IDBTransaction / IDBObjectStore / IDBIndex / IDBCursor
```

### Versionchange 事务期间不能开启新的普通事务

### IDBDatabase.transaction(storeNames)的storeNames 中每个名字都必须是现有 objectStore 名

# ObjectStore & Index 

## ObjectStore 名唯一

## Index 名在各自 ObjectStore 内唯一

## deleteIndex / deleteObjectStore 的存在性检查

# Request & Event 

## 事件触发顺序

很重要，之前是层次结构硬编码，现在理论上可以设置一个大概率执行的顺序，todo

## 同一层级的request的event只要注册一次















































