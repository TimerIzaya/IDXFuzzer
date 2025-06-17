let db;
const openRequest = window.indexedDB.open('str_8689')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_3178');
  var store_0_index_1 = store_0.createIndex('str_6654', ['str_2767', 'str_1330', 'str_9761', 'str_9659']);
  store_0.deleteIndex('str_2059')
  var store_0_index_2 = store_0.createIndex('str_1098', 'str_4854');
  store_0_index_1.name
  store_0.autoIncrement
  store_0.deleteIndex('str_174')
  var store_0_index_3 = store_0.createIndex('str_4075', 'str_1749');
  store_0_index_2.name
  db.deleteObjectStore('str_8947')
  var store_1 = db.createObjectStore('str_2559', {'keyPath': ['str_3813', 'str_4497', 'str_2128', 'str_2683'], 'autoIncrement': false});
  db.deleteObjectStore('str_7423')
  store_0.deleteIndex('str_8249')
  var store_1_index_1 = store_0.createIndex('str_7621', ['str_8590', 'str_9107', 'str_5495', 'str_1501'], {'unique': true, 'multiEntry': false});
  var store_1_index_2 = store_1.createIndex('str_98', 'str_3368', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_9194')
  var store_2 = db.createObjectStore('str_7444', {'keyPath': 'str_229', 'autoIncrement': true});
  store_0_index_1.name
  var store_2_index_1 = store_1.createIndex('str_933', ['str_2081', 'str_4202', 'str_180', 'str_3464']);
  var store_2_index_2 = store_2.createIndex('str_1735', ['str_7215'], {'unique': false, 'multiEntry': false});
  var store_2_index_3 = store_0.createIndex('str_2763', ['str_7670', 'str_4853', 'str_139'], {'unique': false, 'multiEntry': false});
  var store_2_index_4 = store_0.createIndex('str_959', ['str_2383', 'str_7448', 'str_9246', 'str_575']);
  store_0_index_3.name
  store_0.deleteIndex('str_9226')
  var store_2_index_5 = store_2.createIndex('str_4749', 'str_9213');
  store_2.deleteIndex('str_8727')
  var store_2_index_6 = store_0.createIndex('str_3807', ['str_583', 'str_350', 'str_4492']);
  var store_3 = db.createObjectStore('str_1150', {'keyPath': ['str_159', 'str_307', 'str_9556'], 'autoIncrement': false});
  var store_4 = db.createObjectStore('str_4664', {'keyPath': ['str_803', 'str_714', 'str_1024'], 'autoIncrement': false});
  var store_4_index_1 = store_2.createIndex('str_9494', 'str_7043');
  store_2.deleteIndex('str_7114')
  var store_4_index_2 = store_2.createIndex('str_5077', ['str_9372'], {'unique': true, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_3', 'readwrite')
  const store = txn.objectStore('store_3')
  var ret_add_0 = store.add(true, true);
  var ret_openCursor_1 = store.openCursor();
  var ret_openKeyCursor_2 = store.openKeyCursor(42);
  var ret_delete_3 = store.delete('fallback');
  var ret_getKey_4 = store.getKey('fallback');
  var ret_put_5 = store.put('fallback');
  var ret_getAll_6 = store.getAll(4);
  var ret_count_7 = store.count(42);
  var ret_delete_8 = store.delete(true);
  var ret_delete_9 = store.delete(42);
  var ret_getKey_10 = store.getKey(42);
  var ret_getAll_11 = store.getAll();
  var ret_getAll_12 = store.getAll();
  var ret_put_13 = store.put(true);
  var ret_delete_14 = store.delete('fallback');
  var ret_delete_15 = store.delete(42);
  var ret_add_16 = store.add('fallback', true);
  var ret_delete_17 = store.delete(42);
  var ret_openKeyCursor_18 = store.openKeyCursor(None, 'next');
  var ret_delete_19 = store.delete('fallback');
  var ret_count_20 = store.count(true);
  var ret_getAll_21 = store.getAll('fallback', 100);
  var ret_openKeyCursor_22 = store.openKeyCursor(None);
  var ret_openKeyCursor_23 = store.openKeyCursor('next');
  var ret_getAllKeys_24 = store.getAllKeys('fallback', 30);
  var ret_count_25 = store.count('fallback');
  var ret_getAllKeys_26 = store.getAllKeys(66);
  var ret_openCursor_27 = store.openCursor(None, 'next');
  var ret_delete_28 = store.delete(true);
  var ret_count_29 = store.count();
  var ret_openKeyCursor_30 = store.openKeyCursor('nextunique');
  var ret_getKey_31 = store.getKey(42);
  var ret_clear_32 = store.clear();
  var ret_openKeyCursor_33 = store.openKeyCursor(true);
  var ret_openKeyCursor_34 = store.openKeyCursor();
  var ret_put_35 = store.put(true, 42);
  var ret_count_36 = store.count();
  var ret_getAllKeys_37 = store.getAllKeys();
  var ret_count_38 = store.count();
  var ret_getKey_39 = store.getKey(true);
  var ret_get_40 = store.get(42);
  var ret_getAllKeys_41 = store.getAllKeys('fallback');
  var ret_getAllKeys_42 = store.getAllKeys();
  var ret_openCursor_43 = store.openCursor(None, 'prev');
  var ret_openKeyCursor_44 = store.openKeyCursor(None);
  var ret_openKeyCursor_45 = store.openKeyCursor(None);
  var ret_getAll_46 = store.getAll(61);
  var ret_delete_47 = store.delete('fallback');
  var ret_getKey_48 = store.getKey(42);
  var ret_getAllKeys_49 = store.getAllKeys('fallback');
  var ret_put_50 = store.put(true);
  var ret_delete_51 = store.delete('fallback');
  var ret_add_52 = store.add(42);
  var ret_clear_53 = store.clear();
  var ret_add_54 = store.add('fallback', true);
  var ret_add_55 = store.add('fallback', 'fallback');
  var ret_openKeyCursor_56 = store.openKeyCursor(None);
  var ret_openKeyCursor_57 = store.openKeyCursor();
  var ret_put_58 = store.put(true, 42);
  var ret_delete_59 = store.delete(true);
  var ret_count_60 = store.count(true);
  var ret_count_61 = store.count();
  var ret_openKeyCursor_62 = store.openKeyCursor(true, 'prev');
  var ret_put_63 = store.put(true, 42);
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
const deleteRequest = indexedDB.deleteDatabase('str_8689')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
