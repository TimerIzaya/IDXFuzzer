let db;
const openRequest = window.indexedDB.open('str_1436')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_2724', {'keyPath': ['str_3316'], 'autoIncrement': false});
  var store_0_index_1 = store_0.createIndex('str_4524', 'str_7378');
  db.deleteObjectStore('str_2868')
  var store_1 = db.createObjectStore('str_3927');
  db.deleteObjectStore('str_8380')
  var store_2 = db.createObjectStore('str_8112', {'keyPath': ['str_4006', 'str_3843'], 'autoIncrement': false});
  db.deleteObjectStore('str_5376')
  var store_3 = db.createObjectStore('str_3484', {'keyPath': ['str_1403'], 'autoIncrement': false});
  db.deleteObjectStore('str_8625')
  db.deleteObjectStore('str_1634')
  var store_4 = db.createObjectStore('str_7816', {'keyPath': 'str_6915', 'autoIncrement': true});
  store_0_index_1.name
  var store_5 = db.createObjectStore('str_3745', {'keyPath': ['str_3888', 'str_9184'], 'autoIncrement': true});
  store_3.indexNames
  var store_5_index_1 = store_5.createIndex('str_8164', 'str_7146', {'unique': false, 'multiEntry': false});
  var store_5_index_2 = store_3.createIndex('str_9825', 'str_7316');
  store_4.deleteIndex('str_2667')
  var store_5_index_3 = store_0.createIndex('str_7565', ['str_7520', 'str_804', 'str_2986', 'str_2417', 'str_9815']);
  var store_5_index_4 = store_4.createIndex('str_3713', ['str_8096', 'str_7783'], {'unique': true, 'multiEntry': false});
  var store_5_index_5 = store_2.createIndex('str_3508', 'str_838');
  var store_5_index_6 = store_0.createIndex('str_8151', 'str_5508', {'unique': false, 'multiEntry': true});
  var store_5_index_7 = store_0.createIndex('str_966', 'str_64', {'unique': true, 'multiEntry': false});
  var store_5_index_8 = store_5.createIndex('str_2723', ['str_5277', 'str_3960', 'str_7490', 'str_7441'], {'unique': false, 'multiEntry': false});
  var store_5_index_9 = store_3.createIndex('str_2806', 'str_7924', {'unique': true, 'multiEntry': false});
  var store_5_index_10 = store_4.createIndex('str_5215', 'str_980');
  var store_5_index_11 = store_1.createIndex('str_1010', ['str_112']);
  var store_5_index_12 = store_4.createIndex('str_1284', 'str_8131');
  var store_5_index_13 = store_4.createIndex('str_4287', ['str_5108', 'str_5445', 'str_6906', 'str_3170']);
  var store_5_index_14 = store_0.createIndex('str_1601', ['str_5531', 'str_9022', 'str_7985', 'str_7720']);
  db.deleteObjectStore('str_6418')
  var store_6 = db.createObjectStore('str_332', {'keyPath': 'str_3655', 'autoIncrement': true});
  db.deleteObjectStore('str_7323')
  var store_7 = db.createObjectStore('str_5815');
  store_5_index_14.multiEntry
  store_7.deleteIndex('str_878')
  store_7.deleteIndex('str_8707')
  var store_7_index_1 = store_5.createIndex('str_6254', 'str_6753');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_1', 'readwrite')
  const store = txn.objectStore('store_1')
  var ret_put_0 = store.put(42, 42);
  var ret_delete_1 = store.delete('fallback');
  var ret_count_2 = store.count();
  var ret_openKeyCursor_3 = store.openKeyCursor(None);
  var ret_put_4 = store.put('fallback');
  var ret_get_5 = store.get('fallback');
  var ret_clear_6 = store.clear();
  var ret_get_7 = store.get(42);
  var ret_openKeyCursor_8 = store.openKeyCursor('next');
  var ret_getKey_9 = store.getKey(42);
  var ret_openCursor_10 = store.openCursor(None);
  var ret_put_11 = store.put('fallback');
  var ret_get_12 = store.get(42);
  var ret_get_13 = store.get('fallback');
  var ret_getAllKeys_14 = store.getAllKeys(true);
  var ret_count_15 = store.count();
  var ret_clear_16 = store.clear();
  var ret_put_17 = store.put(true);
  var ret_get_18 = store.get('fallback');
  var ret_getAllKeys_19 = store.getAllKeys(21);
  var ret_put_20 = store.put(true, 42);
  var ret_get_21 = store.get(true);
  var ret_getAllKeys_22 = store.getAllKeys();
  var ret_add_23 = store.add(true, 42);
  var ret_getKey_24 = store.getKey(42);
  var ret_openCursor_25 = store.openCursor(true, 'nextunique');
  var ret_delete_26 = store.delete('fallback');
  var ret_count_27 = store.count(true);
  var ret_getKey_28 = store.getKey('fallback');
  var ret_getKey_29 = store.getKey(42);
  var ret_clear_30 = store.clear();
  var ret_getKey_31 = store.getKey('fallback');
  var ret_count_32 = store.count();
  var ret_openCursor_33 = store.openCursor('prevunique');
  var ret_getKey_34 = store.getKey(42);
  var ret_count_35 = store.count();
  var ret_delete_36 = store.delete(42);
  var ret_add_37 = store.add(42, 42);
  var ret_getAll_38 = store.getAll();
  var ret_count_39 = store.count(42);
  var ret_put_40 = store.put('fallback');
  var ret_delete_41 = store.delete(true);
  var ret_openKeyCursor_42 = store.openKeyCursor('fallback');
  var ret_clear_43 = store.clear();
  var ret_add_44 = store.add(true);
  var ret_delete_45 = store.delete('fallback');
  var ret_openKeyCursor_46 = store.openKeyCursor(true);
  var ret_delete_47 = store.delete(42);
  var ret_put_48 = store.put('fallback', true);
  var ret_getKey_49 = store.getKey(true);
  var ret_add_50 = store.add(true);
  var ret_delete_51 = store.delete(true);
  var ret_count_52 = store.count(42);
  var ret_openKeyCursor_53 = store.openKeyCursor(None, 'prevunique');
  var ret_delete_54 = store.delete(42);
  var ret_getAll_55 = store.getAll(2);
  var ret_getAll_56 = store.getAll(42, 59);
  var ret_clear_57 = store.clear();
  var ret_count_58 = store.count('fallback');
  var ret_put_59 = store.put(true, 42);
  var ret_put_60 = store.put('fallback');
  var ret_getKey_61 = store.getKey('fallback');
  var ret_getAllKeys_62 = store.getAllKeys('fallback');
  var ret_openKeyCursor_63 = store.openKeyCursor();
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
const deleteRequest = indexedDB.deleteDatabase('str_1436')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
