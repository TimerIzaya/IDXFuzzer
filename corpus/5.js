let db;
const openRequest = window.indexedDB.open('str_8707')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_6642', {'keyPath': ['str_4081'], 'autoIncrement': true});
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_5077', ['str_6554', 'str_4252', 'str_7250', 'str_3653']);
  store_0.deleteIndex('str_4054')
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_9901', ['str_9006', 'str_2715']);
  db.deleteObjectStore('str_7776')
  var store_1;
  store_1 = db.createObjectStore('str_7463');
  store_0.keyPath
  store_1.autoIncrement
  store_1.deleteIndex('str_96')
  var store_1_index_1;
  store_1_index_1 = store_0.createIndex('str_5992', ['str_6731', 'str_4346']);
  db.deleteObjectStore('str_9759')
  db.deleteObjectStore('str_9690')
  var store_2;
  store_2 = db.createObjectStore('str_6435', {'keyPath': 'str_2052', 'autoIncrement': false});
  db.deleteObjectStore('str_8285')
  var store_3;
  store_3 = db.createObjectStore('str_5576', {'keyPath': ['str_4368', 'str_5960', 'str_1333', 'str_1916', 'str_1946'], 'autoIncrement': false});
  db.deleteObjectStore('str_7589')
  var store_3_index_1;
  store_3_index_1 = store_3.createIndex('str_5808', ['str_4504', 'str_2604', 'str_6397', 'str_8185'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_3266')
  store_0.autoIncrement
  db.deleteObjectStore('str_5996')
  var store_4;
  store_4 = db.createObjectStore('str_7571', {'keyPath': 'str_9682', 'autoIncrement': false});
  store_1.deleteIndex('str_1947')
  var store_4_index_1;
  store_4_index_1 = store_1.createIndex('str_2197', 'str_4520');
  var store_4_index_2;
  store_4_index_2 = store_1.createIndex('str_3070', 'str_4534', {'unique': false, 'multiEntry': true});
  var store_4_index_3;
  store_4_index_3 = store_4.createIndex('str_2388', ['str_337', 'str_2625', 'str_970', 'str_9460', 'str_6689']);
  var store_4_index_4;
  store_4_index_4 = store_2.createIndex('str_1000', ['str_2935', 'str_8878']);
  var store_4_index_5;
  store_4_index_5 = store_1.createIndex('str_3213', 'str_4362', {'unique': false, 'multiEntry': true});
  var store_4_index_6;
  store_4_index_6 = store_0.createIndex('str_1850', ['str_6089', 'str_2830', 'str_2827']);
  store_4.deleteIndex('str_1683')
  var store_4_index_7;
  store_4_index_7 = store_4.createIndex('str_3549', ['str_6552'], {'unique': true, 'multiEntry': false});
  store_1.deleteIndex('str_3037')
  var store_4_index_8;
  store_4_index_8 = store_0.createIndex('str_7205', ['str_827', 'str_940', 'str_3422']);
  store_1.keyPath
  var store_5;
  store_5 = db.createObjectStore('str_8204', {'keyPath': ['str_2733', 'str_424'], 'autoIncrement': false});
  db.deleteObjectStore('str_6553')
  var store_6;
  store_6 = db.createObjectStore('str_479', {'keyPath': ['str_8067'], 'autoIncrement': true});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_0', 'readwrite')
  const store = txn.objectStore('store_0')
  const req_delete_0 = store.delete(true)
  const req_count_1 = store.count()
  const req_count_2 = store.count()
  const req_clear_3 = store.clear()
  const req_getAll_4 = store.getAll('fallback')
  const req_getAll_5 = store.getAll(true, 100)
  const req_count_6 = store.count(true)
  const req_count_7 = store.count('fallback')
  const req_getAll_8 = store.getAll()
  const req_count_9 = store.count(true)
  const req_openCursor_10 = store.openCursor('fallback', 'prev')
  const req_count_11 = store.count('fallback')
  const req_count_12 = store.count()
  const req_getKey_13 = store.getKey('fallback')
  const req_add_14 = store.add(true, true)
  const req_get_15 = store.get(true)
  const req_put_16 = store.put('fallback')
  const req_get_17 = store.get(42)
  const req_add_18 = store.add(true, 'fallback')
  const req_add_19 = store.add(true)
  const req_get_20 = store.get('fallback')
  const req_getAll_21 = store.getAll()
  const req_put_22 = store.put(true, 42)
  const req_openCursor_23 = store.openCursor('prevunique')
  const req_put_24 = store.put('fallback', 42)
  const req_delete_25 = store.delete(true)
  const req_delete_26 = store.delete('fallback')
  const req_count_27 = store.count()
  const req_getKey_28 = store.getKey(42)
  const req_add_29 = store.add('fallback', true)
  const req_clear_30 = store.clear()
  const req_put_31 = store.put('fallback', 42)
  const req_count_32 = store.count(true)
  const req_add_33 = store.add(42)
  const req_getAll_34 = store.getAll(95)
  const req_count_35 = store.count(42)
  const req_put_36 = store.put('fallback', true)
  const req_put_37 = store.put(42)
  const req_get_38 = store.get(42)
  const req_getAll_39 = store.getAll('fallback', 25)
  const req_count_40 = store.count()
  const req_getKey_41 = store.getKey('fallback')
  const req_getKey_42 = store.getKey('fallback')
  const req_getKey_43 = store.getKey(true)
  const req_getAllKeys_44 = store.getAllKeys(66)
  const req_delete_45 = store.delete('fallback')
  const req_openKeyCursor_46 = store.openKeyCursor(None)
  const req_delete_47 = store.delete(42)
  const req_add_48 = store.add('fallback', true)
  const req_delete_49 = store.delete(42)
  const req_getKey_50 = store.getKey('fallback')
  const req_getKey_51 = store.getKey('fallback')
  const req_getAllKeys_52 = store.getAllKeys()
  const req_getAllKeys_53 = store.getAllKeys('fallback', 20)
  const req_getAllKeys_54 = store.getAllKeys()
  const req_delete_55 = store.delete(true)
  const req_get_56 = store.get(true)
  const req_openKeyCursor_57 = store.openKeyCursor(true)
  const req_getKey_58 = store.getKey(true)
  const req_openCursor_59 = store.openCursor('fallback')
  const req_openCursor_60 = store.openCursor()
  const req_getAll_61 = store.getAll(true, 39)
  const req_put_62 = store.put(true)
  const req_getAllKeys_63 = store.getAllKeys(true, 8)
  txn.oncomplete = (event) => {
  console.log('Transaction completed successfully');
};
  txn.onabort = (event) => {
  console.log('Transaction was aborted');
};
  txn.onerror = (event) => {
  console.log('Transaction error occurred');
};
  db.onversionchange = (event) => {
  console.log('The version of this database has changed, release this connection');
  db.close()
};
  db.onclose = (event) => {
  console.log('The database connection is unexpectedly closed');
};
};
openRequest.onblocked = (event) => {
  console.log('open db blocked triggered')
};
openRequest.onerror = (event) => {
  console.log('open db onerror triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_8707')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
