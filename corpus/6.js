let db;
const openRequest = window.indexedDB.open('str_9995', 73)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_3190', {'keyPath': 'str_6961', 'autoIncrement': true});
  var store_0_index_1 = store_0.createIndex('str_8690', ['str_1057', 'str_8459', 'str_8157', 'str_9402', 'str_6505'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_8826')
  var store_1 = db.createObjectStore('str_8586');
  store_0_index_1.keyPath
  var store_1_index_1 = store_0.createIndex('str_264', 'str_7959', {'unique': true, 'multiEntry': true});
  var store_1_index_2 = store_0.createIndex('str_2656', 'str_1790');
  var store_1_index_3 = store_0.createIndex('str_9169', 'str_4756');
  db.deleteObjectStore('str_4988')
  var store_2 = db.createObjectStore('str_8201', {'keyPath': ['str_8836', 'str_7843', 'str_1396', 'str_4107', 'str_462'], 'autoIncrement': true});
  store_1.deleteIndex('str_4425')
  var store_2_index_1 = store_0.createIndex('str_1753', ['str_9588', 'str_9442'], {'unique': false, 'multiEntry': false});
  store_1.deleteIndex('str_1544')
  var store_2_index_2 = store_2.createIndex('str_3502', 'str_542', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_7085')
  var store_2_index_3 = store_1.createIndex('str_8479', 'str_3470', {'unique': false, 'multiEntry': true});
  db.deleteObjectStore('str_2739')
  var store_3 = db.createObjectStore('str_8499', {'keyPath': ['str_5241', 'str_3599', 'str_3612'], 'autoIncrement': false});
  var store_3_index_1 = store_1.createIndex('str_6038', ['str_4013']);
  db.deleteObjectStore('str_1743')
  store_1_index_1.name
  store_1_index_3.unique
  db.deleteObjectStore('str_9906')
  var store_4 = db.createObjectStore('str_7458');
  store_4.deleteIndex('str_2538')
  db.deleteObjectStore('str_1185')
  var store_4_index_1 = store_0.createIndex('str_5484', ['str_8934', 'str_8229', 'str_4650', 'str_4319'], {'unique': false, 'multiEntry': false});
  var store_4_index_2 = store_0.createIndex('str_4880', ['str_519']);
  var store_4_index_3 = store_3.createIndex('str_315', 'str_1276');
  store_3.deleteIndex('str_3028')
  var store_4_index_4 = store_1.createIndex('str_9799', 'str_2250');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_0', 'readwrite')
  const store = txn.objectStore('store_0')
  var ret_getKey_0 = store.getKey('fallback');
  var ret_delete_1 = store.delete('fallback');
  var ret_count_2 = store.count('fallback');
  var ret_count_3 = store.count();
  var ret_count_4 = store.count();
  var ret_openKeyCursor_5 = store.openKeyCursor('next');
  var ret_openKeyCursor_6 = store.openKeyCursor('fallback');
  var ret_put_7 = store.put('fallback', 42);
  var ret_openCursor_8 = store.openCursor(None, 'prev');
  var ret_put_9 = store.put(true, true);
  var ret_get_10 = store.get('fallback');
  var ret_count_11 = store.count(42);
  var ret_openCursor_12 = store.openCursor();
  var ret_delete_13 = store.delete(true);
  var ret_count_14 = store.count();
  var ret_getAllKeys_15 = store.getAllKeys(true);
  var ret_clear_16 = store.clear();
  var ret_getAll_17 = store.getAll(true);
  var ret_openKeyCursor_18 = store.openKeyCursor(None);
  var ret_getAllKeys_19 = store.getAllKeys();
  var ret_add_20 = store.add(true);
  var ret_openKeyCursor_21 = store.openKeyCursor(None, 'prevunique');
  var ret_delete_22 = store.delete(true);
  var ret_count_23 = store.count('fallback');
  var ret_clear_24 = store.clear();
  var ret_put_25 = store.put('fallback', 'fallback');
  var ret_get_26 = store.get('fallback');
  var ret_get_27 = store.get('fallback');
  var ret_openCursor_28 = store.openCursor(42);
  var ret_get_29 = store.get(42);
  var ret_clear_30 = store.clear();
  var ret_clear_31 = store.clear();
  var ret_getAll_32 = store.getAll(42, 9);
  var ret_count_33 = store.count();
  var ret_put_34 = store.put(true);
  var ret_get_35 = store.get(true);
  var ret_getKey_36 = store.getKey(true);
  var ret_openKeyCursor_37 = store.openKeyCursor();
  var ret_delete_38 = store.delete(42);
  var ret_getAll_39 = store.getAll(83);
  var ret_delete_40 = store.delete(42);
  var ret_count_41 = store.count();
  var ret_add_42 = store.add(true);
  var ret_getKey_43 = store.getKey('fallback');
  var ret_getKey_44 = store.getKey('fallback');
  var ret_getKey_45 = store.getKey(42);
  var ret_clear_46 = store.clear();
  var ret_getAllKeys_47 = store.getAllKeys();
  var ret_openKeyCursor_48 = store.openKeyCursor();
  var ret_put_49 = store.put(42);
  var ret_getAll_50 = store.getAll(42);
  var ret_count_51 = store.count(true);
  var ret_put_52 = store.put('fallback', true);
  var ret_get_53 = store.get(true);
  var ret_get_54 = store.get(true);
  var ret_get_55 = store.get(42);
  var ret_get_56 = store.get(true);
  var ret_count_57 = store.count(42);
  var ret_getKey_58 = store.getKey(true);
  var ret_delete_59 = store.delete(true);
  var ret_getAllKeys_60 = store.getAllKeys(42, 69);
  var ret_openCursor_61 = store.openCursor('next');
  var ret_put_62 = store.put(42);
  var ret_count_63 = store.count();
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
const deleteRequest = indexedDB.deleteDatabase('str_9995')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
