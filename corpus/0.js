let db;
const openRequest = window.indexedDB.open('str_9322', '88')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true, multiEntry: false});
  var store_1 = db.createObjectStore('store_1', {keypath: 'zAFnilW.wDFWnBwYCCt.sWbPcdbUX.fFMbemICBs.fQTrKCqWUIP.ebuIK', autoIncrement: false});
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0');
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false});
  var store_1 = db.createObjectStore('store_1');
  db.deleteObjectStore('store_0')
  store_1.add({f0_e: '<string>', f1_b: '<null>', f2_l: '<null>', f3_q: '<null>', f4_d: '<array>', f5_i: '<boolean>', f6_z: '<array>', f7_r: '<string>', f8_n: '<boolean>'}, 'XCDBL')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'QxbE', autoIncrement: true});
  store_0.clear()
  store_0.clear()
  var index_0 = store_0.createIndex('index_0', 'test');
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  store_0.clear()
  var index_1 = store_1.createIndex('index_1', 'test', {unique: false});
  var index_2 = store_1.createIndex('index_2', 'test', {unique: false, multiEntry: false});
  var index_3 = store_0.createIndex('index_3', 'test');
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  var index_1 = store_0.createIndex('index_1', 'test', {unique: false});
  var store_2 = db.createObjectStore('store_2', {keypath: 'fPphGlDtYo.hsSbOCgpKIxu.MZdJRkf.kWPgQUe'});
  var index_2 = store_1.createIndex('index_2', 'test', {multiEntry: true});
  store_0.add({f0_t: '<string>', f1_z: '<array>', f2_a: '<boolean>'}, 'CegHolTJkJ')
  var index_4 = store_1.createIndex('index_4', 'test', {unique: true});
  store_1.clear()
  store_0.count()
  db.deleteObjectStore('store_1')
  var index_2 = store_0.createIndex('index_2', 'test', {unique: false});
  store_0.add({f0_d: '<array>', f1_f: '<boolean>', f2_n: '<string>'}, 'LjS')
  store_0.count('IDBKeyRange.only(CegHolTJkJ)')
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'RmJKfhB', autoIncrement: true});
  store_0.clear()
  var store_1 = db.createObjectStore('store_1');
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false});
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  var store_1 = db.createObjectStore('store_1', {keypath: 'nDgOyIwgYGla'});
  var store_2 = db.createObjectStore('store_2', {keypath: 'YghySgHmTu'});
  store_1.count()
  store_0.clear()
  store_1.add({f0_n: '<string>', f1_r: '<boolean>', f2_e: '<boolean>', f3_j: '<boolean>', f4_b: '<number>', f5_x: '<array>', f6_a: '<number>'}, 'upVOA')
  store_1.add({f0_l: '<array>'}, 'HJRd')
  var index_0 = store_1.createIndex('index_0', 'test');
  store_0.clear()
  var index_1 = store_1.createIndex('index_1', 'test', {unique: true});
  store_0.clear()
  store_0.count()
  store_2.clear()
  store_0.add({f0_b: '<string>'}, 'zMzaoGGpuRND')
  store_0.add({f0_d: '<array>', f1_c: '<boolean>'}, 'HXddMDwhUrL')
  var index_2 = store_1.createIndex('index_2', 'test', {unique: true});
  store_1.add({f0_u: '<null>', f1_z: '<string>'}, 'CFBXlQ')
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_2')
  var store_0 = db.createObjectStore('store_0', {keypath: 'LRE'});
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  store_1.add({f0_j: '<array>', f1_q: '<object>', f2_v: '<number>', f3_c: '<string>'}, 'GJOxvU')
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true, multiEntry: true});
  var index_1 = store_1.createIndex('index_1', 'test', {unique: true, multiEntry: false});
  var store_2 = db.createObjectStore('store_2', {keypath: 'AHEdrvOUQc'});
  store_1.clear()
  store_0.add({f0_e: '<string>'}, 'umCLz')
  store_0.count()
  var index_2 = store_0.createIndex('index_2', 'test', {unique: false});
  db.deleteObjectStore('store_0')
  var index_0 = store_1.createIndex('index_0', 'test', {unique: false});
  store_1.count('IDBKeyRange.only(GJOxvU)')
  db.deleteObjectStore('store_2')
  var store_0 = db.createObjectStore('store_0', {keypath: 'MPE'});
  var index_2 = store_0.createIndex('index_2', 'test');
  var store_2 = db.createObjectStore('store_2', {autoIncrement: true});
  store_0.add({f0_d: '<string>', f1_z: '<string>', f2_v: '<boolean>', f3_d: '<null>', f4_t: '<boolean>'}, 'qjnnnvhmRxtE')
  var store_3 = db.createObjectStore('store_3', {autoIncrement: true});
  var store_4 = db.createObjectStore('store_4');
  var index_3 = store_0.createIndex('index_3', 'test');
  var store_5 = db.createObjectStore('store_5');
  var index_4 = store_3.createIndex('index_4', 'test', {multiEntry: true});
  store_2.clear()
  store_0.clear()
  store_3.add({f0_o: '<object>', f1_m: '<array>', f2_i: '<null>', f3_l: '<number>', f4_v: '<string>', f5_w: '<string>', f6_b: '<boolean>', f7_k: '<string>', f8_f: '<array>', f9_q: '<string>'}, 'NeGJdyIZOqXy')
  var index_5 = store_1.createIndex('index_5', 'test', {unique: false});
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1', {autoIncrement: true});
  store_1.count()
  var store_6 = db.createObjectStore('store_6');
  db.deleteObjectStore('store_4')
  store_2.add({f0_i: '<array>', f1_o: '<string>', f2_a: '<object>'}, 'GOVTD')
  var index_0 = store_6.createIndex('index_0', 'test', {unique: true});
  var store_4 = db.createObjectStore('store_4');
  store_4.clear()
  var store_7 = db.createObjectStore('store_7');
  store_2.count()
  store_1.count()
  var store_8 = db.createObjectStore('store_8', {autoIncrement: false});
  var index_1 = store_6.createIndex('index_1', 'test', {unique: false, multiEntry: false});
  store_7.add({f0_o: '<object>', f1_y: '<array>', f2_d: '<number>', f3_r: '<array>', f4_l: '<number>', f5_t: '<object>'}, 'fyUGlsJWdNR')
  var store_9 = db.createObjectStore('store_9', {keypath: 'kYAUswABI.mPbqu.qXVDwc.FES.WKCdHXzg.XKXgyLIGXQ'});
  db.deleteObjectStore('store_4')
  var index_5 = store_1.createIndex('index_5', 'test', {unique: false});
  db.deleteObjectStore('store_6')
  var index_0 = store_0.createIndex('index_0', 'test');
  var index_1 = store_1.createIndex('index_1', 'test', {unique: false, multiEntry: true});
  var index_6 = store_3.createIndex('index_6', 'test', {multiEntry: false});
  db.deleteObjectStore('store_0')
  store_1.clear()
  db.deleteObjectStore('store_8')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_9')
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
const deleteRequest = indexedDB.deleteDatabase('str_9322')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
