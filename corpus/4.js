let db;
const openRequest = window.indexedDB.open('str_8219')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_6924');
  var store_0_index_1 = store_0.createIndex('str_304', ['str_5776', 'str_180'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_4040')
  var store_1 = db.createObjectStore('str_82');
  var store_1_index_1 = store_1.createIndex('str_1368', 'str_1664');
  var store_1_index_2 = store_1.createIndex('str_3371', 'str_6812', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_177')
  var store_2 = db.createObjectStore('str_5629', {'keyPath': ['str_1440', 'str_7147', 'str_3101', 'str_7513'], 'autoIncrement': false});
  db.deleteObjectStore('str_196')
  var store_3 = db.createObjectStore('str_3905');
  var store_4 = db.createObjectStore('str_4355');
  store_2.keyPath
  var store_4_index_1 = store_1.createIndex('str_5271', ['str_7808', 'str_4825', 'str_5641']);
  var store_4_index_2 = store_0.createIndex('str_3176', 'str_4626');
  var store_4_index_3 = store_2.createIndex('str_5852', ['str_3755'], {'unique': false, 'multiEntry': false});
  var store_4_index_4 = store_0.createIndex('str_3425', ['str_8824', 'str_870', 'str_9184', 'str_6491', 'str_3640'], {'unique': false, 'multiEntry': false});
  store_1.deleteIndex('str_2090')
  var store_4_index_5 = store_0.createIndex('str_4484', 'str_9273', {'unique': true, 'multiEntry': true});
  db.deleteObjectStore('str_5459')
  var store_5 = db.createObjectStore('str_7592');
  store_1.deleteIndex('str_4790')
  var store_5_index_1 = store_1.createIndex('str_9358', 'str_1535');
  var store_5_index_2 = store_2.createIndex('str_5331', 'str_2745');
  var store_5_index_3 = store_5.createIndex('str_3133', 'str_9380');
  store_3.deleteIndex('str_4971')
  var store_5_index_4 = store_0.createIndex('str_600', 'str_5456', {'unique': false, 'multiEntry': true});
  store_3.deleteIndex('str_145')
  var store_5_index_5 = store_0.createIndex('str_1001', ['str_1839', 'str_3336'], {'unique': true, 'multiEntry': false});
  var store_6 = db.createObjectStore('str_4206', {'keyPath': 'str_8301', 'autoIncrement': true});
  db.deleteObjectStore('str_4364')
  var store_7 = db.createObjectStore('str_3769', {'keyPath': 'str_4651', 'autoIncrement': false});
  db.deleteObjectStore('str_8126')
  var store_8 = db.createObjectStore('str_6328');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_1', 'readwrite')
  const store = txn.objectStore('store_1')
  var ret_getAll_0 = store.getAll(true);
  var ret_put_1 = store.put(true, true);
  var ret_add_2 = store.add(true, 'fallback');
  var ret_get_3 = store.get(42);
  var ret_count_4 = store.count();
  var ret_openCursor_5 = store.openCursor(None, 'next');
  var ret_count_6 = store.count();
  var ret_put_7 = store.put(true);
  var ret_openCursor_8 = store.openCursor(None, 'prevunique');
  var ret_delete_9 = store.delete(42);
  var ret_count_10 = store.count();
  var ret_openCursor_11 = store.openCursor();
  var ret_getAll_12 = store.getAll('fallback', 19);
  var ret_getAll_13 = store.getAll(71);
  var ret_put_14 = store.put('fallback', true);
  var ret_clear_15 = store.clear();
  var ret_getKey_16 = store.getKey('fallback');
  var ret_delete_17 = store.delete(42);
  var ret_getAllKeys_18 = store.getAllKeys(true, 55);
  var ret_delete_19 = store.delete('fallback');
  var ret_getAllKeys_20 = store.getAllKeys(true);
  var ret_getAllKeys_21 = store.getAllKeys();
  var ret_getAllKeys_22 = store.getAllKeys('fallback', 40);
  var ret_getAllKeys_23 = store.getAllKeys(45);
  var ret_getKey_24 = store.getKey('fallback');
  var ret_getAllKeys_25 = store.getAllKeys(true);
  var ret_getAllKeys_26 = store.getAllKeys(42);
  var ret_getAllKeys_27 = store.getAllKeys(45);
  var ret_openKeyCursor_28 = store.openKeyCursor('fallback');
  var ret_put_29 = store.put(true);
  var ret_put_30 = store.put('fallback');
  var ret_get_31 = store.get('fallback');
  var ret_getAll_32 = store.getAll();
  var ret_openKeyCursor_33 = store.openKeyCursor();
  var ret_put_34 = store.put(true, 'fallback');
  var ret_openCursor_35 = store.openCursor();
  var ret_delete_36 = store.delete(true);
  var ret_count_37 = store.count();
  var ret_count_38 = store.count(42);
  var ret_count_39 = store.count();
  var ret_openCursor_40 = store.openCursor('prev');
  var ret_put_41 = store.put('fallback');
  var ret_get_42 = store.get('fallback');
  var ret_count_43 = store.count();
  var ret_getKey_44 = store.getKey(true);
  var ret_getKey_45 = store.getKey(true);
  var ret_count_46 = store.count(42);
  var ret_count_47 = store.count();
  var ret_clear_48 = store.clear();
  var ret_put_49 = store.put('fallback', 42);
  var ret_openKeyCursor_50 = store.openKeyCursor();
  var ret_count_51 = store.count();
  var ret_count_52 = store.count(true);
  var ret_put_53 = store.put(42, true);
  var ret_delete_54 = store.delete(42);
  var ret_openCursor_55 = store.openCursor();
  var ret_getKey_56 = store.getKey(true);
  var ret_openCursor_57 = store.openCursor();
  var ret_put_58 = store.put(true, true);
  var ret_delete_59 = store.delete('fallback');
  var ret_clear_60 = store.clear();
  var ret_get_61 = store.get(42);
  var ret_getKey_62 = store.getKey(42);
  var ret_add_63 = store.add('fallback', 42);
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
const deleteRequest = indexedDB.deleteDatabase('str_8219')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
