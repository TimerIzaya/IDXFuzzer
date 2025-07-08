globalThis.apis = [];
let db;
const openRequest = window.indexedDB.open('str_4882', 3983854891694580)
openRequest.onupgradeneeded = (event) => {
    apis.push(0); // API-0
    console.log('db onupgraded trigered');
    db = event.target.result;
    apis.push(1); // API-1
    var objectStore_0 = db.createObjectStore('objectStore_0');
    apis.push(2); // API-2
    var put_0 = objectStore_0.put({f0_h: '<null>', f1_q: '<string>', f2_c: '<object>', f3_f: '<object>', f4_q: '<object>', f5_r: '<null>', f6_b: '<null>', f7_k: '<number>', f8_z: '<boolean>'}, 'kUuhzzgcUt');
    apis.push(3); // API-3
    var index_0 = objectStore_0.createIndex('index_0', 'test', {unique: false, multiEntry: true});
    apis.push(4); // API-4
    var put_1 = objectStore_0.put({f0_b: '<string>', f1_q: '<number>', f2_t: '<number>', f3_f: '<array>', f4_v: '<boolean>', f5_z: '<object>', f6_y: '<number>', f7_w: '<array>', f8_e: '<string>'}, 'qJedKE');
    apis.push(5); // API-5
    var index_1 = objectStore_0.createIndex('index_1', 'test', {unique: false});
    apis.push(6); // API-6
    var index_2 = objectStore_0.createIndex('index_2', 'test', {multiEntry: true});
    apis.push(7); // API-7
    objectStore_0.deleteIndex('index_0')
    apis.push(8); // API-8
    var index_3 = objectStore_0.createIndex('index_3', 'test', {unique: true, multiEntry: true});
    apis.push(9); // API-9
    var add_0 = objectStore_0.add({f0_i: '<array>'}, 'YZGxAK');
    apis.push(10); // API-10
    var index_4 = objectStore_0.createIndex('index_4', 'test', {unique: false, multiEntry: true});
    apis.push(11); // API-11
    objectStore_0.deleteIndex('index_3')
    add_0.onsuccess = (event) => {
        var get_0;
        try{
            apis.push(12); // API-12
            KeyRange_0 = IDBKeyRange.bound('YZGxAK', 'qJedKE', false, false);
            apis.push(13); // API-13
            get_0 = objectStore_0.get(KeyRange_0);
        }
        catch (e){
        }

        var add_1;
        apis.push(14); // API-14
        add_1 = objectStore_0.add({f0_z: '<array>', f1_p: '<object>', f2_j: '<object>', f3_y: '<boolean>', f4_q: '<array>', f5_y: '<null>', f6_n: '<string>', f7_s: '<object>', f8_n: '<null>'}, 'WfcNFH');
        var clear_0;
        apis.push(15); // API-15
        clear_0 = objectStore_0.clear();
        apis.push(16); // API-16
        db.deleteObjectStore('objectStore_0')
        put_0.onsuccess = (event) => {
            clear_0.onsuccess = (event) => {
                var objectStore_1;
                apis.push(17); // API-17
                objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'DqUrQSKODCh', autoIncrement: false});
                var add_2;
                apis.push(18); // API-18
                add_2 = objectStore_1.add({f0_v: '<array>', f1_k: '<array>', f2_e: '<boolean>', f3_x: '<string>', f4_p: '<object>'}, 'zuFBfGDca');
            };
        };
    };
    apis.push(19); // API-19
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'INwO'});
    apis.push(20); // API-20
    var put_2 = objectStore_2.put({f0_f: '<null>', f1_u: '<string>', f2_h: '<boolean>', f3_a: '<object>', f4_n: '<object>', f5_k: '<null>', f6_s: '<array>', f7_b: '<boolean>', f8_m: '<array>', f9_u: '<array>'}, 'BaKhPZK');
    apis.push(21); // API-21
    var index_5 = objectStore_2.createIndex('index_5', 'test');
    apis.push(22); // API-22
    var objectStore_3 = db.createObjectStore('objectStore_3', {autoIncrement: true});
    apis.push(23); // API-23
    var clear_1 = objectStore_2.clear();
    apis.push(24); // API-24
    var index_6 = objectStore_2.createIndex('index_6', 'test', {unique: true, multiEntry: false});
    apis.push(25); // API-25
    var index_7 = objectStore_3.createIndex('index_7', 'test', {unique: true, multiEntry: true});
    apis.push(26); // API-26
    var clear_2 = objectStore_3.clear();
    apis.push(27); // API-27
    db.deleteObjectStore('objectStore_2')
    apis.push(28); // API-28
    var add_3 = objectStore_3.add({f0_j: '<string>'}, 'XkGJMIaup');
    apis.push(29); // API-29
    var index_0 = objectStore_3.index('index_7');
    apis.push(30); // API-30
    var index_8 = objectStore_3.createIndex('index_8', 'test', {unique: false, multiEntry: false});
    apis.push(31); // API-31
    db.deleteObjectStore('objectStore_3')
    apis.push(32); // API-32
    var objectStore_4 = db.createObjectStore('objectStore_4');
    apis.push(33); // API-33
    var clear_3 = objectStore_4.clear();
    apis.push(34); // API-34
    var objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'ZYzEySVzlRHA', autoIncrement: true});
    apis.push(35); // API-35
    var index_9 = objectStore_5.createIndex('index_9', 'test', {unique: true});
    apis.push(36); // API-36
    var clear_4 = objectStore_4.clear();
    apis.push(37); // API-37
    var objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'qfVnyZqHDuA', autoIncrement: true});
    apis.push(38); // API-38
    var put_3 = objectStore_4.put({f0_x: '<string>', f1_b: '<object>', f2_j: '<boolean>', f3_f: '<object>', f4_u: '<boolean>'}, 'AawXTjPzABEL');
    apis.push(39); // API-39
    var objectStore_7 = db.createObjectStore('objectStore_7', {keypath: 'DxbnXwQEvs', autoIncrement: false});
    apis.push(40); // API-40
    var put_4 = objectStore_5.put({f0_x: '<number>', f1_m: '<boolean>', f2_q: '<string>', f3_d: '<string>'}, 'ZdaFBaXNsZQ');
    apis.push(41); // API-41
    var add_4 = objectStore_6.add({f0_h: '<array>', f1_g: '<null>', f2_s: '<null>', f3_f: '<array>', f4_k: '<object>', f5_d: '<number>', f6_f: '<string>', f7_l: '<array>', f8_g: '<boolean>'}, 'SxLBPHlREbwk');
    apis.push(42); // API-42
    var objectStore_8 = db.createObjectStore('objectStore_8', {autoIncrement: false});
    apis.push(43); // API-43
    var index_10 = objectStore_4.createIndex('index_10', 'test', {unique: false});
    apis.push(44); // API-44
    var clear_5 = objectStore_4.clear();
    var get_1;
    try{
        apis.push(45); // API-45
        KeyRange_2 = IDBKeyRange.bound('ZdaFBaXNsZQ', 'ZdaFBaXNsZQ', false, true);
        apis.push(46); // API-46
        get_1 = objectStore_5.get(KeyRange_2);
    }
    catch (e){
    }

    apis.push(47); // API-47
    db.deleteObjectStore('objectStore_6')
    apis.push(48); // API-48
    db.deleteObjectStore('objectStore_4')
    apis.push(49); // API-49
    var objectStore_9 = db.createObjectStore('objectStore_9', {keypath: 'dMqADmqv'});
    apis.push(50); // API-50
    var clear_6 = objectStore_7.clear();
    var delete_0;
    try{
        apis.push(51); // API-51
        KeyRange_4 = IDBKeyRange.only('ZdaFBaXNsZQ');
        apis.push(52); // API-52
        delete_0 = objectStore_5.delete(KeyRange_4);
    }
    catch (e){
    }

    apis.push(53); // API-53
    db.deleteObjectStore('objectStore_8')
    apis.push(54); // API-54
    var add_5 = objectStore_7.add({f0_w: '<object>', f1_t: '<object>', f2_m: '<array>', f3_m: '<boolean>', f4_d: '<object>', f5_t: '<string>', f6_j: '<null>', f7_l: '<number>', f8_x: '<string>', f9_a: '<number>'}, 'gVxuU');
    apis.push(55); // API-55
    db.deleteObjectStore('objectStore_7')
    apis.push(56); // API-56
    var index_11 = objectStore_9.createIndex('index_11', 'test', {unique: true, multiEntry: false});
    var get_2;
    try{
        apis.push(57); // API-57
        KeyRange_6 = IDBKeyRange.lowerBound('ZdaFBaXNsZQ', false);
        apis.push(58); // API-58
        get_2 = objectStore_5.get(KeyRange_6);
    }
    catch (e){
    }

    apis.push(59); // API-59
    var objectStore_10 = db.createObjectStore('objectStore_10');
    apis.push(60); // API-60
    var index_12 = objectStore_10.createIndex('index_12', 'test', {unique: true, multiEntry: true});
    apis.push(61); // API-61
    var put_5 = objectStore_5.put({f0_m: '<array>', f1_p: '<array>', f2_i: '<string>', f3_t: '<boolean>', f4_l: '<array>', f5_f: '<boolean>', f6_e: '<null>', f7_k: '<object>', f8_g: '<null>', f9_k: '<array>'}, 'VdghSg');
    apis.push(62); // API-62
    var clear_7 = objectStore_10.clear();
    apis.push(63); // API-63
    var objectStore_11 = db.createObjectStore('objectStore_11', {autoIncrement: true});
    apis.push(64); // API-64
    var put_6 = objectStore_9.put({f0_n: '<number>', f1_d: '<object>', f2_z: '<string>', f3_g: '<object>', f4_o: '<null>', f5_l: '<number>'}, 'jsDFaW');
    apis.push(65); // API-65
    var index_1 = objectStore_5.index('index_9');
};
apis.push(66); // API-66
const deleteRequest = indexedDB.deleteDatabase('str_4882')
deleteRequest.onblocked = (event) => {
    apis.push(67); // API-67
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    apis.push(68); // API-68
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    apis.push(69); // API-69
    console.log('delete db onerror triggered')
};
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
