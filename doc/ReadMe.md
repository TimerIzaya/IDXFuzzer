# 思考记录

单次执行
```bash
/timer/chromium/src/out/IndexedDBSanCov/content_shell \
  --no-sandbox \
  --headless=new --ozone-platform=headless \
  --no-first-run --test-type --no-proxy-server \
  --disable-gpu --use-gl=disabled --disable-vulkan \
  --disable-gpu-compositing \
  --disable-accelerated-2d-canvas \
  --disable-gpu-rasterization --disable-software-rasterizer \
  --renderer-process-limit=1 \
  --disable-site-isolation-trials \
  --in-process-gpu \
  --disable-features=VizDisplayCompositor,UseSkiaRenderer,CanvasOopRasterization,AcceleratedVideoDecode,VaapiVideoDecoder,VaapiVideoEncoder,UseSkiaRendererForGL \
  --remote-debugging-port=12349 \
  --enable-logging=stderr \
  --enable-crash-reporter \
  --crash-dumps-dir=/timer/IDXFuzzer/tmp/crash \
  --user-data-dir=/timer/IDXFuzzer/result/other/thVUj8/profile_snapshot \
  file:///timer/IDXFuzzer/result/other/thVUj8/thVUj8.html
```












# Out of semantically well-formed

这里指纯靠静态分析无法解决的地方，必须要加try来兜底

## keyrange

需要保留所有key并且按IDB的跨类型排序，此处排序算法也是源码主要测试对象之一，我们无法生成100% SWF的seed

这里我们的trycatch中发现上下界不对的时候直接用only方法保证100%正确

# TODO

1. schema的原子操作读，schema的所有复合操作
2. dataops层的所有操作



# Onupgrade Layer

超事务层，里面可以使用所有的os，业务层面上来看只是初始化数据库，但是api层面上来看是最大范围的api调用

# Dataopts Layer

本质上是txn和onupgrade的公用层

## 通用的工具子类

### KeyRange

四种用法看文档，这里涉及到一个跨类型排序，不用太在意

keyrange需要这个os里所有key的上下文，然后随机选上下界

### Query

A key or [`IDBKeyRange`](https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange) to be queried. If nothing is passed, this will default to a key range that selects all the records in this object store.

## OS api

### add

```
add(value)
add(value, key)
```

HRule：是否要加key取决于createObjectStore的option是否有keypath

### clear

直接冲

### count

```
count()
count(query)
```

三种用法如下所示：

```js
const request = indexedDB.open("CountDemoDB", 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const store = db.createObjectStore("users", { keyPath: "id" });

  store.add({ id: 1, name: "Alice" });
  store.add({ id: 2, name: "Bob" });
  store.add({ id: 3, name: "Charlie" });
  store.add({ id: 4, name: "David" });
};

request.onsuccess = function(event) {
  const db = event.target.result;
  const tx = db.transaction("users", "readonly");
  const store = tx.objectStore("users");

  // 1. 不传 query，统计所有记录数量
  store.count().onsuccess = function(event) {
    console.log("1️⃣ 所有记录数量：", event.target.result); // → 4
  };

  // 2. 传入主键值，统计该主键是否存在
  store.count(2).onsuccess = function(event) {
    console.log("2️⃣ 主键为2的记录数量：", event.target.result); // → 1
  };

  // 3. 使用 IDBKeyRange 统计范围内的记录数量
  const range = IDBKeyRange.bound(2, 4); // 包含 2, 3, 4
  store.count(range).onsuccess = function(event) {
    console.log("3️⃣ 主键在 [2,4] 范围内的记录数量：", event.target.result); // → 3
  };

  tx.oncomplete = () => db.close();
};

request.onerror = function(event) {
  console.error("数据库打开失败：", event.target.error);
};
```

### createIndex

done

### delete

db.deleteObjectStore只能作用在schema层，这个其实也是要实现一下的

### deleteIndex

done

### get

需要一个key的上下文

### getAll

```
getAll()
getAll(query)
getAll(query, count)
```

和count类似

### getAllKeys

上文同理

### getKey

用来判断这个key还是否存在，或者keyrange内第一个存在的key

### index

直接冲

### opencurosr

todo

### openkeycursor

todo

### put

```
put(item)
put(item, key)
```

todo



## IRSchema设计

# IRLayer设计

# IDBSchema设计

# IRLifter设计

# IDBPipe设计

# Minimizer设计

# Context设计

## IDBSchemaContext

该context贯穿schemaOpt层和dataOpt层

- 由于表结构的定义和实际使用是两个不同的作用域，所以需要全文中定义一个描述表结构的数据结构ctx

- current_db

  可以在open的success的事件开始执行的时候赋值，事件结束注销

- current_txn

  IDB的事务隔离级别是串行化，这点非常友好

  一个事务对应多个os，在case实现中，也没必要交错写，current_txn == current_oss，db.transaction为开头，db.commit为结尾



## IDBIRContext

一个literal 在我们这里 只对应一个var， 每个作用域都有自己的var，所以整体是一个栈结构









