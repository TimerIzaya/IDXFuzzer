let db;
const openRequest = window.indexedDB.open('str_8057')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_7380');
  var store_0_index_1 = store_0.createIndex('str_4654', 'str_8688', {'unique': false, 'multiEntry': true});
  store_0.keyPath
  db.deleteObjectStore('str_6228')
  var store_1 = db.createObjectStore('str_6302', {'keyPath': ['str_4213', 'str_8354', 'str_9491', 'str_9435', 'str_9839'], 'autoIncrement': true});
  store_1.keyPath
  db.deleteObjectStore('str_2547')
  var store_2 = db.createObjectStore('str_6111', {'keyPath': 'str_9805', 'autoIncrement': false});
  store_2.deleteIndex('str_7337')
  var store_2_index_1 = store_0.createIndex('str_8362', ['str_7416', 'str_6569', 'str_1668', 'str_193', 'str_5837'], {'unique': false, 'multiEntry': false});
  var store_3 = db.createObjectStore('str_2330');
  store_3.deleteIndex('str_9669')
  var store_3_index_1 = store_2.createIndex('str_6899', 'str_1931');
  store_2.deleteIndex('str_8693')
  var store_3_index_2 = store_3.createIndex('str_31', 'str_4182');
  store_0.autoIncrement
  store_2.autoIncrement
  store_2.keyPath
  var store_3_index_3 = store_3.createIndex('str_4707', 'str_346');
  store_2.name
  var store_3_index_4 = store_2.createIndex('str_1994', 'str_3920');
  var store_3_index_5 = store_0.createIndex('str_3518', 'str_3297', {'unique': false, 'multiEntry': true});
  var store_3_index_6 = store_0.createIndex('str_236', ['str_7792', 'str_5200', 'str_6212', 'str_9432']);
  db.deleteObjectStore('str_392')
  store_3.deleteIndex('str_5542')
  var store_3_index_7 = store_3.createIndex('str_9005', 'str_7283');
  var store_3_index_8 = store_3.createIndex('str_6935', ['str_8099', 'str_4316', 'str_5287', 'str_1066', 'str_938']);
  var store_3_index_9 = store_1.createIndex('str_1430', 'str_9362');
  var store_3_index_10 = store_3.createIndex('str_6416', ['str_1637', 'str_8767', 'str_7167', 'str_4941'], {'unique': true, 'multiEntry': false});
  var store_3_index_11 = store_3.createIndex('str_2620', ['str_6369', 'str_3303', 'str_1568'], {'unique': false, 'multiEntry': false});
  var store_3_index_12 = store_2.createIndex('str_3663', ['str_8620', 'str_5941', 'str_269', 'str_9965', 'str_42'], {'unique': true, 'multiEntry': false});
  store_0.keyPath
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_1', 'readwrite')
  const store = txn.objectStore('store_1')
  var ret_put_0 = store.put(true, 'fallback');
  var ret_delete_1 = store.delete('fallback');
  var ret_count_2 = store.count();
  var ret_getKey_3 = store.getKey('fallback');
  var ret_add_4 = store.add(42, 42);
  var ret_clear_5 = store.clear();
  var ret_put_6 = store.put(42);
  var ret_get_7 = store.get(true);
  var ret_openKeyCursor_8 = store.openKeyCursor();
  var ret_getAll_9 = store.getAll(32);
  var ret_getAll_10 = store.getAll(true);
  var ret_getAll_11 = store.getAll(42);
  var ret_openKeyCursor_12 = store.openKeyCursor(None);
  var ret_put_13 = store.put(42, true);
  var ret_get_14 = store.get(true);
  var ret_openCursor_15 = store.openCursor('fallback');
  var ret_openKeyCursor_16 = store.openKeyCursor();
  var ret_put_17 = store.put(42);
  var ret_get_18 = store.get(42);
  var ret_add_19 = store.add(true, true);
  var ret_openCursor_20 = store.openCursor();
  var ret_delete_21 = store.delete(42);
  var ret_add_22 = store.add('fallback');
  var ret_openCursor_23 = store.openCursor(None, 'prevunique');
  var ret_put_24 = store.put(true);
  var ret_getKey_25 = store.getKey(42);
  var ret_put_26 = store.put(42);
  var ret_clear_27 = store.clear();
  var ret_put_28 = store.put(42, 'fallback');
  var ret_get_29 = store.get('fallback');
  var ret_get_30 = store.get(true);
  var ret_add_31 = store.add(42, 'fallback');
  var ret_getAll_32 = store.getAll('fallback', 12);
  var ret_put_33 = store.put('fallback');
  var ret_count_34 = store.count();
  var ret_delete_35 = store.delete(true);
  var ret_delete_36 = store.delete(true);
  var ret_count_37 = store.count('fallback');
  var ret_openCursor_38 = store.openCursor(None, 'next');
  var ret_put_39 = store.put(42, true);
  var ret_count_40 = store.count(42);
  var ret_openCursor_41 = store.openCursor(None);
  var ret_delete_42 = store.delete(true);
  var ret_getAllKeys_43 = store.getAllKeys(11);
  var ret_getAllKeys_44 = store.getAllKeys(3);
  var ret_openKeyCursor_45 = store.openKeyCursor();
  var ret_clear_46 = store.clear();
  var ret_add_47 = store.add('fallback');
  var ret_getKey_48 = store.getKey(42);
  var ret_openCursor_49 = store.openCursor(42, 'prevunique');
  var ret_getAll_50 = store.getAll('fallback', 87);
  var ret_getAll_51 = store.getAll('fallback', 6);
  var ret_count_52 = store.count(true);
  var ret_delete_53 = store.delete(42);
  var ret_count_54 = store.count();
  var ret_openCursor_55 = store.openCursor(None);
  var ret_openCursor_56 = store.openCursor('next');
  var ret_openCursor_57 = store.openCursor('prevunique');
  var ret_count_58 = store.count();
  var ret_count_59 = store.count();
  var ret_count_60 = store.count('fallback');
  var ret_getKey_61 = store.getKey(true);
  var ret_openKeyCursor_62 = store.openKeyCursor(true);
  var ret_put_63 = store.put(true);
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
const deleteRequest = indexedDB.deleteDatabase('str_8057')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
