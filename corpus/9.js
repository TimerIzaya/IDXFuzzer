let db;
const openRequest = window.indexedDB.open('str_7537')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_5420');
  var store_0_index_1 = store_0.createIndex('str_2653', 'str_4290', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_4196')
  store_0.deleteIndex('str_8598')
  var store_0_index_2 = store_0.createIndex('str_4843', ['str_3098']);
  var store_1 = db.createObjectStore('str_3979');
  db.deleteObjectStore('str_5018')
  var store_2 = db.createObjectStore('str_1421');
  var store_3 = db.createObjectStore('str_8806');
  store_0_index_1.name
  db.deleteObjectStore('str_5790')
  store_0.deleteIndex('str_7862')
  var store_3_index_1 = store_0.createIndex('str_3979', ['str_1881']);
  var store_3_index_2 = store_3.createIndex('str_570', ['str_4967', 'str_7697']);
  var store_3_index_3 = store_2.createIndex('str_5566', ['str_2164', 'str_3599']);
  var store_3_index_4 = store_3.createIndex('str_9627', 'str_2196');
  var store_3_index_5 = store_1.createIndex('str_7980', ['str_8961', 'str_5349', 'str_4472', 'str_6510', 'str_5857']);
  var store_3_index_6 = store_1.createIndex('str_487', 'str_557', {'unique': true, 'multiEntry': false});
  store_3.indexNames
  var store_3_index_7 = store_2.createIndex('str_6431', ['str_7489'], {'unique': true, 'multiEntry': false});
  var store_3_index_8 = store_1.createIndex('str_919', 'str_4651');
  store_2.deleteIndex('str_9490')
  var store_3_index_9 = store_3.createIndex('str_767', ['str_4371', 'str_8588', 'str_4005', 'str_858', 'str_3833']);
  store_3_index_2.multiEntry
  db.deleteObjectStore('str_5587')
  store_1.deleteIndex('str_4744')
  var store_3_index_10 = store_0.createIndex('str_5456', ['str_2718', 'str_3116', 'str_9185', 'str_1994'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_116')
  store_2.indexNames
  store_1.deleteIndex('str_97')
  var store_3_index_11 = store_3.createIndex('str_4592', 'str_5093', {'unique': false, 'multiEntry': true});
  store_3.keyPath
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_3', 'readwrite')
  const store = txn.objectStore('store_3')
  var ret_put_0 = store.put('fallback', 42);
  var ret_delete_1 = store.delete(42);
  var ret_getAllKeys_2 = store.getAllKeys();
  var ret_count_3 = store.count(42);
  var ret_clear_4 = store.clear();
  var ret_count_5 = store.count();
  var ret_count_6 = store.count(42);
  var ret_delete_7 = store.delete(true);
  var ret_getAllKeys_8 = store.getAllKeys(65);
  var ret_getAllKeys_9 = store.getAllKeys(12);
  var ret_put_10 = store.put(true);
  var ret_delete_11 = store.delete(42);
  var ret_delete_12 = store.delete(42);
  var ret_getAllKeys_13 = store.getAllKeys('fallback');
  var ret_clear_14 = store.clear();
  var ret_clear_15 = store.clear();
  var ret_count_16 = store.count();
  var ret_openKeyCursor_17 = store.openKeyCursor();
  var ret_count_18 = store.count();
  var ret_getAllKeys_19 = store.getAllKeys('fallback', 23);
  var ret_getAllKeys_20 = store.getAllKeys('fallback', 61);
  var ret_openKeyCursor_21 = store.openKeyCursor('prevunique');
  var ret_put_22 = store.put('fallback');
  var ret_get_23 = store.get('fallback');
  var ret_openCursor_24 = store.openCursor(None, 'nextunique');
  var ret_get_25 = store.get(42);
  var ret_getAllKeys_26 = store.getAllKeys(42);
  var ret_getAllKeys_27 = store.getAllKeys('fallback', 55);
  var ret_clear_28 = store.clear();
  var ret_clear_29 = store.clear();
  var ret_put_30 = store.put('fallback', 'fallback');
  var ret_clear_31 = store.clear();
  var ret_get_32 = store.get(42);
  var ret_clear_33 = store.clear();
  var ret_clear_34 = store.clear();
  var ret_get_35 = store.get('fallback');
  var ret_put_36 = store.put('fallback', true);
  var ret_getKey_37 = store.getKey(42);
  var ret_openKeyCursor_38 = store.openKeyCursor();
  var ret_put_39 = store.put(42);
  var ret_add_40 = store.add(42);
  var ret_delete_41 = store.delete(42);
  var ret_getAllKeys_42 = store.getAllKeys();
  var ret_clear_43 = store.clear();
  var ret_put_44 = store.put(42);
  var ret_clear_45 = store.clear();
  var ret_add_46 = store.add(42, 'fallback');
  var ret_add_47 = store.add(true);
  var ret_count_48 = store.count('fallback');
  var ret_getAll_49 = store.getAll(42, 56);
  var ret_add_50 = store.add('fallback');
  var ret_delete_51 = store.delete(42);
  var ret_count_52 = store.count();
  var ret_count_53 = store.count('fallback');
  var ret_getKey_54 = store.getKey(42);
  var ret_openKeyCursor_55 = store.openKeyCursor(None, 'next');
  var ret_openKeyCursor_56 = store.openKeyCursor();
  var ret_openKeyCursor_57 = store.openKeyCursor(None, 'prev');
  var ret_put_58 = store.put('fallback');
  var ret_get_59 = store.get(true);
  var ret_delete_60 = store.delete(42);
  var ret_add_61 = store.add(42);
  var ret_count_62 = store.count();
  var ret_delete_63 = store.delete(42);
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
const deleteRequest = indexedDB.deleteDatabase('str_7537')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
