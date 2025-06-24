let db;
const openRequest = window.indexedDB.open('str_5080', '1')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('store_0', {keypath: 'AeNhFr'});
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true});
  store_1.getAllKeys()
  var index_0 = store_1.index('index_0');
  var index_1 = store_1.createIndex('index_1', 'test', {multiEntry: true});
  store_1.count()
  var index_1 = store_1.index('index_1');
  var index_2 = store_1.createIndex('index_2', 'test', {multiEntry: false});
  var index_3 = store_1.createIndex('index_3', 'test', {unique: true});
  store_0.put({f0_l: '<string>', f1_o: '<array>', f2_s: '<null>', f3_f: '<array>', f4_x: '<object>', f5_k: '<string>', f6_c: '<string>', f7_o: '<boolean>', f8_p: '<null>', f9_w: '<null>'}, 'FtsepJyB')
  var index_2 = store_1.index('index_1');
  var index_4 = store_1.createIndex('index_4', 'test');
  var index_3 = store_1.index('index_1');
  store_0.getAllKeys()
  var store_2 = db.createObjectStore('store_2', {keypath: 'EeaKiIYpKFmR'});
  store_2.put({f0_x: '<array>', f1_j: '<number>', f2_m: '<number>', f3_k: '<boolean>', f4_a: '<string>', f5_a: '<null>', f6_d: '<boolean>', f7_x: '<boolean>'}, 'iJg')
  var index_5 = store_1.createIndex('index_5', 'test', {unique: false, multiEntry: true});
  store_1.count()
  var index_6 = store_0.createIndex('index_6', 'test', {multiEntry: false});
  store_0.add({f0_i: '<boolean>', f1_g: '<null>', f2_p: '<object>', f3_k: '<array>', f4_w: '<array>'}, 'ikqz')
  db.deleteObjectStore('store_1')
  store_2.count('IDBKeyRange.bound(iJg,iJg,False,True)')
  db.deleteObjectStore('store_2')
  var index_0 = store_0.createIndex('index_0', 'test');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'FLC', autoIncrement: true});
  store_0.add({f0_w: '<array>', f1_x: '<string>'}, 'HZAdtcVFeB')
  store_0.add({f0_y: '<number>', f1_u: '<array>', f2_x: '<array>', f3_d: '<object>'}, 'uIUJjvJCGzM')
  store_0.add({f0_j: '<array>', f1_c: '<string>', f2_g: '<string>', f3_r: '<string>', f4_a: '<object>'}, 'qlexJGhE')
  store_0.getAllKeys()
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'VuxBm', autoIncrement: false});
  store_0.getAllKeys()
  store_0.put({f0_o: '<boolean>', f1_h: '<null>', f2_j: '<object>', f3_s: '<object>', f4_i: '<boolean>', f5_x: '<object>', f6_b: '<null>', f7_c: '<boolean>', f8_a: '<boolean>'}, 'jbOeYzmM')
  store_0.getAll('jbOeYzmM', 2996161818)
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false, multiEntry: true});
  store_0.count()
  var index_1 = store_0.createIndex('index_1', 'test');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'vNnGFASXv', autoIncrement: false});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true});
  var store_1 = db.createObjectStore('store_1', {keypath: 'vOb', autoIncrement: false});
  store_0.deleteIndex('index_0')
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0', {keypath: 'zptw', autoIncrement: true});
  store_0.put({f0_y: '<number>', f1_m: '<array>', f2_g: '<number>', f3_s: '<array>', f4_i: '<null>', f5_t: '<boolean>', f6_p: '<object>', f7_h: '<array>', f8_x: '<string>', f9_o: '<null>'}, 'XWEaQwjCnWn')
  store_0.count('IDBKeyRange.bound(XWEaQwjCnWn,XWEaQwjCnWn,True,True)')
  store_0.delete('IDBKeyRange.bound(XWEaQwjCnWn,XWEaQwjCnWn,False,False)')
  store_0.getAll()
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  store_0.getAllKeys()
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
};
openRequest.onblocked = (event) => {
  console.log('open db blocked triggered')
};
openRequest.onerror = (event) => {
  console.log('open db onerror triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_5080')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
