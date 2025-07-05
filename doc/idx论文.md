# Motivation

近年来，面向浏览器 Web API 的模糊测试研究逐渐兴起，成为前端安全分析与漏洞挖掘中的重要手段。已有工作主要聚焦于不同类型的浏览器组件，通过语义建模与调用序列生成对核心攻击面展开探索。例如，Minerva 作为一项代表性的 whole browser fuzzing 框架，通过动态依赖分析刻画不同 Web API 之间的交互关系，生成高度关联的调用序列，以发现跨组件间潜在的逻辑缺陷。Favocado 则聚焦于 JavaScript 与 Native 层之间的绑定接口，自动解析 WebIDL 描述与类型系统，生成语义完备的调用脚本，并结合对象等价类对输入空间进行约简，着力于揭示类型转换与生命周期管理中的深层次安全隐患。

与此同时，研究社区还提出了大量面向特定 Web API 子域的定向模糊测试工具。例如，Domato 与 FreeDom 专注于 DOM 结构操作与渲染流程测试，Canvas、WebGL、WebAudio、ServiceWorker 及 WebGPU 等接口亦分别催生出针对性测试框架，从而显著扩展了浏览器攻击面在图形、媒体与异步计算方向上的测试深度与广度。

尽管上述研究在多个子系统取得了良好成效，但对于 IndexedDB 这一内建持久化存储组件仍缺乏系统性的测试手段。IndexedDB 拥有独特的语义特性，包括版本迁移机制、事务隔离模型、异步事件链驱动以及底层的磁盘交互，其接口使用过程中存在严格的阶段划分。例如，数据库结构（如 object store 或 index）仅允许在 onupgradeneeded 事件中定义或修改，而事务中的数据操作又高度依赖事件驱动的异步调度逻辑。这类特性要求测试工具具备对阶段性上下文与事件链依赖的精确建模能力，而现有模糊测试器通常采用线性拼接或上下文无关的 API 调度策略，难以构造合法且有语义效力的操作序列。

此外，部分模糊器（如 FreeDom）为保证输入脚本执行成功，往往在所有 API 调用外层统一包裹 try/catch 块以抑制异常传播，这种做法虽然提升了脚本执行率，但也带来了显著的性能损耗，并掩盖了应被暴露的运行时异常。更为关键的是，IndexedDB 的 fuzzing 并非仅依赖接口序列的多样性，更依赖于高质量的结构化数据生成能力。然而现有工作在数据生成方面仍采用随机拼接与字典替换的简单策略，缺乏与 schema 对齐的语义支持，难以触发关键路径。

综上所述，当前 Web API fuzzing 在持久化存储方向仍存在显著空白。IndexedDB 作为浏览器内建的事务型数据库，其多态状态机、异步调度与存储语义的耦合特性，为模糊测试提出了更高挑战，也构成了补齐 Web API 安全测试版图的关键支点。





# IDBFuzz

针对Indexeddb的异步事件驱动和面向对象存储等特性，我们致力于构建IDXFuzzer框架，一个专为浏览器端结构化存储接口设计的模糊测试工具，该框架通过可控语义中间表示语言生成精准的异步操作流，并解耦种子和数据生成，结合覆盖率反馈机制并行探索有趣种子结构和具备路径触发潜力的关键键值对，从而推动结构化模糊测试在浏览器持久化接口上的落地

## WorkFlow

在浏览器端存储领域，我们针对Indexeddb提出了一个语义和数据双驱动的结构化模糊测试工具IDXFuzzer。

首先，基于 MDN 和 WebIDL 规范，我们的schema parser模块全自动的抽象出完整的 IndexedDB 接口 schema， 进一步解析成支持链式调用的schemaTree，确保后续的单api调用以及类型推断的准确性

其次，针对idb，我们设计了一套生成轻量化中间语言用于表示IDB的业务流程，我们将 IR 设计分为两个协同层级：语义层和语法层。IR在语法层面保留了传统ast节点中的必要节点，例如MemberExpression/Assignment/FunctionExpression等等。语义层则是根据IDB的特性，设计了约20个层级，分为四类调用层、注册层、执行层、访问层，调用层作用为生成openDataBase等入口操作，注册层作用为注册success、block等事件，执行层作用为实现库、表结构的初始化和数据的增删改流程，访问层为获取当前实时数据的状态信息，每种Layer存在上下文依赖关系，Layer同时支持递归嵌套和多Layer融合等机制。Layer设计的第一点优势在于我们可以保证语义正确性可控的去实现IR，如果我们想测试chromium对于错误的构造是否稳定，只需变异成错误的层次结构，同时在对应的层次里生成不符合schema错误的节点即可，这样可以同时保证严格使用影响性能的try catch语句，第二点优势在于我们可以对IDB的特定业务进行针对性测试，文献xxx中发现open方法就有N种bug，我们可以针对数据库连接、并发事务、频繁读写、嵌套事件等等场景进行定制化测试

另外，由于IDB是事件驱动，并且生成IR时需要实时保留数据库的快照信息，我们设计了IRContext和IDBContext两种上下文机制，IRContext用于跨作用域存储变量信息，随时获取可见的指定类型的对象，IDBContext则是从数据库初始化阶段开始，实时更新当前所有的数据库信息，包含了表结构、索引信息、key属性、事务信息等等，注意这里我们不维护实际数据信息，也就是kv里的v，在IDB中一般叫item。

最后，由于测试对象是存储工具，我们不会把objectstore的item实际存储在IR中，我们同样持久化了一份高潜力数据表，这里的数据可以根据keyPath和IR中的IDBContext相对应，可以灵活应对keyless和mutiEntry等场景，从而实现数据和种子解耦，在整个fuzzer过程中，我们会对同样的seed填入不同的数据，同样以覆盖率引导，去存储更多具备潜力的数据用于fuzzing



## IR

下面用一段生成阶段的seed片段简单介绍我们的IR设计

```js
let db;
const openRequest = window.indexedDB.open('str_726', 74)
openRequest.onupgradeneeded = (event) => {
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'jDNqUydS', autoIncrement: false});
    var index_0 = objectStore_0.createIndex('index_0', 'test');
    var get_0;
    try {
        KeyRange_0 = IDBKeyRange.bound('XUJrADmHnDx', 'XUJrADmHnDx', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    } catch (e) {
        KeyRange_1 = IDBKeyRange.only('XUJrADmHnDx');
        get_0 = objectStore_0.get(KeyRange_1);
    }
    var clear_0 = objectStore_0.clear();
    clear_0.onsuccess = (event) => {
        db.deleteObjectStore('objectStore_0')
        var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'yrOcBVU', autoIncrement: true});
        var index_2 = objectStore_2.createIndex('index_2', 'test');
        get_0.onsuccess = (event) => {
            var index_3 = objectStore_1.createIndex('index_3', 'test', {unique: false, multiEntry: false});
        };
    };
};
```



## ItemDriver