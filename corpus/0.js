let db;
const openRequest = window.indexedDB.open('str_1725', 72)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_828');
  var store_0_index_1 = store_0.createIndex('str_468', 'str_1830', {'unique': false, 'multiEntry': true});
  store_0.indexNames
  store_0.deleteIndex('str_4618')
  store_0.deleteIndex('str_1916')
  store_0.deleteIndex('str_8545')
  var store_0_index_2 = store_0.createIndex('str_7474', 'str_7475', {'unique': false, 'multiEntry': true});
  db.deleteObjectStore('str_7982')
  var store_1 = db.createObjectStore('str_261');
  var store_1_index_1 = store_0.createIndex('str_1750', 'str_3858');
  var store_1_index_2 = store_0.createIndex('str_4938', 'str_8182', {'unique': false, 'multiEntry': false});
  var store_1_index_3 = store_0.createIndex('str_262', 'str_3407');
  var store_1_index_4 = store_0.createIndex('str_7223', ['str_4846', 'str_8523', 'str_8351'], {'unique': true, 'multiEntry': false});
  var store_1_index_5 = store_1.createIndex('str_7024', ['str_5340', 'str_6663', 'str_1850', 'str_2612'], {'unique': false, 'multiEntry': false});
  var store_2 = db.createObjectStore('str_6727', {'keyPath': 'str_4220', 'autoIncrement': true});
  var store_2_index_1 = store_1.createIndex('str_4241', 'str_2152');
  store_2.deleteIndex('str_2947')
  var store_2_index_2 = store_0.createIndex('str_2190', 'str_5295');
  store_2.deleteIndex('str_5978')
  var store_2_index_3 = store_0.createIndex('str_5740', 'str_8899', {'unique': false, 'multiEntry': true});
  var store_2_index_4 = store_2.createIndex('str_8834', 'str_9820', {'unique': true, 'multiEntry': true});
  var store_2_index_5 = store_0.createIndex('str_4293', 'str_9560', {'unique': true, 'multiEntry': true});
  db.deleteObjectStore('str_2220')
  var store_3 = db.createObjectStore('str_6920');
  var store_3_index_1 = store_2.createIndex('str_8137', 'str_4621', {'unique': false, 'multiEntry': false});
  store_3.keyPath
  db.deleteObjectStore('str_5526')
  var store_4 = db.createObjectStore('str_8576');
  store_1_index_4.keyPath
  var store_5 = db.createObjectStore('str_1336', {'keyPath': ['str_4889', 'str_6434', 'str_7150'], 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_0', 'readwrite')
  const store = txn.objectStore('store_0')
  var ret_getKey_0 = store.getKey(42);
  var ret_getKey_1 = store.getKey(42);
  var ret_getKey_2 = store.getKey(true);
  var ret_count_3 = store.count(42);
  var ret_openCursor_4 = store.openCursor(true);
  var ret_put_5 = store.put(true, true);
  var ret_openCursor_6 = store.openCursor(42);
  var ret_delete_7 = store.delete('fallback');
  var ret_getAllKeys_8 = store.getAllKeys(30);
  var ret_count_9 = store.count(42);
  var ret_count_10 = store.count(true);
  var ret_put_11 = store.put('fallback', 42);
  var ret_openCursor_12 = store.openCursor(None);
  var ret_openKeyCursor_13 = store.openKeyCursor('fallback');
  var ret_count_14 = store.count();
  var ret_count_15 = store.count();
  var ret_openKeyCursor_16 = store.openKeyCursor('nextunique');
  var ret_delete_17 = store.delete('fallback');
  var ret_openKeyCursor_18 = store.openKeyCursor('next');
  var ret_openKeyCursor_19 = store.openKeyCursor();
  var ret_put_20 = store.put(42, true);
  var ret_put_21 = store.put(true, true);
  var ret_delete_22 = store.delete('fallback');
  var ret_getAllKeys_23 = store.getAllKeys();
  var ret_clear_24 = store.clear();
  var ret_put_25 = store.put('fallback');
  var ret_get_26 = store.get('fallback');
  var ret_get_27 = store.get('fallback');
  var ret_get_28 = store.get(42);
  var ret_openKeyCursor_29 = store.openKeyCursor();
  var ret_clear_30 = store.clear();
  var ret_put_31 = store.put(true);
  var ret_delete_32 = store.delete(true);
  var ret_getAll_33 = store.getAll();
  var ret_getAll_34 = store.getAll(42, 88);
  var ret_delete_35 = store.delete(true);
  var ret_getKey_36 = store.getKey(42);
  var ret_delete_37 = store.delete(true);
  var ret_add_38 = store.add(42);
  var ret_openKeyCursor_39 = store.openKeyCursor('fallback', 'next');
  var ret_delete_40 = store.delete('fallback');
  var ret_delete_41 = store.delete('fallback');
  var ret_count_42 = store.count('fallback');
  var ret_clear_43 = store.clear();
  var ret_put_44 = store.put('fallback');
  var ret_openCursor_45 = store.openCursor('nextunique');
  var ret_clear_46 = store.clear();
  var ret_put_47 = store.put(true);
  var ret_clear_48 = store.clear();
  var ret_openKeyCursor_49 = store.openKeyCursor('next');
  var ret_put_50 = store.put(true);
  var ret_delete_51 = store.delete(true);
  var ret_delete_52 = store.delete('fallback');
  var ret_add_53 = store.add(42, true);
  var ret_getAll_54 = store.getAll();
  var ret_count_55 = store.count('fallback');
  var ret_getAllKeys_56 = store.getAllKeys();
  var ret_openKeyCursor_57 = store.openKeyCursor('prevunique');
  var ret_clear_58 = store.clear();
  var ret_put_59 = store.put(true);
  var ret_getAllKeys_60 = store.getAllKeys();
  var ret_openKeyCursor_61 = store.openKeyCursor('nextunique');
  var ret_get_62 = store.get(42);
  var ret_count_63 = store.count('fallback');
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
const deleteRequest = indexedDB.deleteDatabase('str_1725')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
