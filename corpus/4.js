let db;
const openRequest = window.indexedDB.open('str_5428', 11)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_8172', {'keyPath': 'str_4488', 'autoIncrement': true});
  var store_0_index_1 = store_0.createIndex('str_9582', 'str_9455');
  store_0.deleteIndex('str_8970')
  var store_0_index_2 = store_0.createIndex('str_2927', ['str_6090', 'str_9054', 'str_2199']);
  var store_0_index_3 = store_0.createIndex('str_1367', ['str_2239']);
  db.deleteObjectStore('str_8872')
  var store_1 = db.createObjectStore('str_699');
  store_0.deleteIndex('str_4116')
  var store_1_index_1 = store_0.createIndex('str_8146', 'str_9952', {'unique': false, 'multiEntry': true});
  store_0.deleteIndex('str_4518')
  var store_1_index_2 = store_0.createIndex('str_3520', 'str_7055');
  store_0.deleteIndex('str_6740')
  var store_1_index_3 = store_1.createIndex('str_2769', ['str_1223', 'str_2567', 'str_2123', 'str_4016'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_4635')
  var store_1_index_4 = store_0.createIndex('str_7342', ['str_1117', 'str_4260', 'str_1471', 'str_3424', 'str_4947']);
  db.deleteObjectStore('str_7818')
  store_0.deleteIndex('str_895')
  var store_1_index_5 = store_0.createIndex('str_8961', 'str_96');
  store_0_index_2.unique
  var store_2 = db.createObjectStore('str_3144', {'keyPath': ['str_920', 'str_9774', 'str_8717', 'str_5180', 'str_1998'], 'autoIncrement': true});
  db.deleteObjectStore('str_1728')
  var store_3 = db.createObjectStore('str_2021', {'keyPath': ['str_6258', 'str_9203', 'str_3218', 'str_2165'], 'autoIncrement': false});
  db.deleteObjectStore('str_7451')
  var store_4 = db.createObjectStore('str_1174', {'keyPath': 'str_927', 'autoIncrement': true});
  db.deleteObjectStore('str_9057')
  db.deleteObjectStore('str_7109')
  store_0.deleteIndex('str_1944')
  store_1_index_5.unique
  store_1.deleteIndex('str_48')
  var store_4_index_1 = store_4.createIndex('str_8280', ['str_8411', 'str_2419', 'str_8280']);
  store_2.deleteIndex('str_5167')
  var store_4_index_2 = store_0.createIndex('str_3546', 'str_231', {'unique': false, 'multiEntry': false});
  store_3.deleteIndex('str_7948')
  var store_4_index_3 = store_0.createIndex('str_3607', 'str_5055');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_3', 'readwrite')
  const store = txn.objectStore('store_3')
  var ret_getKey_0 = store.getKey(42);
  var ret_getKey_1 = store.getKey('fallback');
  var ret_openCursor_2 = store.openCursor('prev');
  var ret_get_3 = store.get(true);
  var ret_count_4 = store.count('fallback');
  var ret_getAll_5 = store.getAll();
  var ret_put_6 = store.put('fallback');
  var ret_delete_7 = store.delete(42);
  var ret_get_8 = store.get('fallback');
  var ret_getAllKeys_9 = store.getAllKeys();
  var ret_openCursor_10 = store.openCursor(None, 'nextunique');
  var ret_openCursor_11 = store.openCursor(true);
  var ret_put_12 = store.put(42, 'fallback');
  var ret_get_13 = store.get(true);
  var ret_openKeyCursor_14 = store.openKeyCursor('nextunique');
  var ret_delete_15 = store.delete('fallback');
  var ret_add_16 = store.add(true);
  var ret_add_17 = store.add('fallback', 'fallback');
  var ret_add_18 = store.add('fallback');
  var ret_openKeyCursor_19 = store.openKeyCursor();
  var ret_delete_20 = store.delete(true);
  var ret_delete_21 = store.delete(42);
  var ret_count_22 = store.count();
  var ret_getKey_23 = store.getKey(true);
  var ret_getAll_24 = store.getAll(39);
  var ret_getAll_25 = store.getAll();
  var ret_getAll_26 = store.getAll(9);
  var ret_clear_27 = store.clear();
  var ret_put_28 = store.put(42, 42);
  var ret_openKeyCursor_29 = store.openKeyCursor('next');
  var ret_openKeyCursor_30 = store.openKeyCursor('prevunique');
  var ret_openKeyCursor_31 = store.openKeyCursor();
  var ret_get_32 = store.get(true);
  var ret_count_33 = store.count(42);
  var ret_getKey_34 = store.getKey(42);
  var ret_getKey_35 = store.getKey('fallback');
  var ret_delete_36 = store.delete(42);
  var ret_openCursor_37 = store.openCursor(None, 'prevunique');
  var ret_count_38 = store.count(42);
  var ret_count_39 = store.count();
  var ret_get_40 = store.get(true);
  var ret_count_41 = store.count(true);
  var ret_getAll_42 = store.getAll(true, 13);
  var ret_clear_43 = store.clear();
  var ret_put_44 = store.put(true);
  var ret_openKeyCursor_45 = store.openKeyCursor('next');
  var ret_openKeyCursor_46 = store.openKeyCursor(None);
  var ret_openCursor_47 = store.openCursor('nextunique');
  var ret_clear_48 = store.clear();
  var ret_add_49 = store.add('fallback', 42);
  var ret_getKey_50 = store.getKey(42);
  var ret_count_51 = store.count();
  var ret_clear_52 = store.clear();
  var ret_getAllKeys_53 = store.getAllKeys(39);
  var ret_count_54 = store.count(42);
  var ret_add_55 = store.add(42, 42);
  var ret_count_56 = store.count();
  var ret_getAllKeys_57 = store.getAllKeys('fallback');
  var ret_getAllKeys_58 = store.getAllKeys(42, 71);
  var ret_openKeyCursor_59 = store.openKeyCursor('fallback');
  var ret_put_60 = store.put('fallback');
  var ret_delete_61 = store.delete(42);
  var ret_count_62 = store.count();
  var ret_openCursor_63 = store.openCursor();
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
const deleteRequest = indexedDB.deleteDatabase('str_5428')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
