let db;
const openRequest = window.indexedDB.open('str_596', 26)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_1710', {'keyPath': ['str_9531'], 'autoIncrement': false});
  var store_0_index_1 = store_0.createIndex('str_6107', 'str_2723', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_5208')
  var store_1 = db.createObjectStore('str_521', {'keyPath': ['str_6215', 'str_8438', 'str_6723', 'str_9515', 'str_3586'], 'autoIncrement': true});
  db.deleteObjectStore('str_603')
  var store_2 = db.createObjectStore('str_3801');
  store_2.keyPath
  db.deleteObjectStore('str_1092')
  store_2.keyPath
  db.deleteObjectStore('str_8094')
  db.deleteObjectStore('str_962')
  var store_3 = db.createObjectStore('str_7603');
  var store_3_index_1 = store_2.createIndex('str_6344', ['str_9947', 'str_6169', 'str_5780', 'str_2024', 'str_2405']);
  store_2.deleteIndex('str_8752')
  var store_3_index_2 = store_2.createIndex('str_4252', ['str_8421', 'str_6796']);
  store_3.keyPath
  store_2.indexNames
  var store_3_index_3 = store_3.createIndex('str_4057', 'str_4069');
  var store_3_index_4 = store_3.createIndex('str_434', ['str_1095']);
  store_3.deleteIndex('str_4649')
  var store_3_index_5 = store_3.createIndex('str_6761', 'str_8359');
  var store_3_index_6 = store_2.createIndex('str_8660', ['str_4971', 'str_90', 'str_9940', 'str_3814', 'str_1607'], {'unique': false, 'multiEntry': false});
  var store_4 = db.createObjectStore('str_840');
  var store_4_index_1 = store_0.createIndex('str_5418', ['str_5379', 'str_9861', 'str_5022', 'str_7931']);
  var store_5 = db.createObjectStore('str_5520', {'keyPath': 'str_1888', 'autoIncrement': true});
  var store_5_index_1 = store_3.createIndex('str_1792', 'str_5658', {'unique': false, 'multiEntry': true});
  db.deleteObjectStore('str_6454')
  var store_6 = db.createObjectStore('str_4177', {'keyPath': ['str_8959', 'str_8352', 'str_8750', 'str_2459', 'str_4972'], 'autoIncrement': true});
  db.deleteObjectStore('str_5456')
  var store_7 = db.createObjectStore('str_6875', {'keyPath': 'str_6885', 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  var ret_add_0 = store.add(true, 42);
  var ret_delete_1 = store.delete(42);
  var ret_count_2 = store.count('fallback');
  var ret_openCursor_3 = store.openCursor(42, 'nextunique');
  var ret_openKeyCursor_4 = store.openKeyCursor(42);
  var ret_put_5 = store.put(true, 42);
  var ret_put_6 = store.put('fallback');
  var ret_get_7 = store.get('fallback');
  var ret_count_8 = store.count();
  var ret_getAllKeys_9 = store.getAllKeys();
  var ret_getAllKeys_10 = store.getAllKeys(10);
  var ret_openKeyCursor_11 = store.openKeyCursor('nextunique');
  var ret_put_12 = store.put(42);
  var ret_put_13 = store.put(true);
  var ret_openKeyCursor_14 = store.openKeyCursor(None);
  var ret_delete_15 = store.delete(42);
  var ret_getAll_16 = store.getAll(42);
  var ret_getAll_17 = store.getAll();
  var ret_count_18 = store.count(42);
  var ret_getAll_19 = store.getAll(true, 47);
  var ret_getAll_20 = store.getAll(47);
  var ret_clear_21 = store.clear();
  var ret_add_22 = store.add(42, 42);
  var ret_getAllKeys_23 = store.getAllKeys();
  var ret_getAll_24 = store.getAll();
  var ret_count_25 = store.count();
  var ret_getAllKeys_26 = store.getAllKeys(66);
  var ret_openKeyCursor_27 = store.openKeyCursor(None, 'prev');
  var ret_getAllKeys_28 = store.getAllKeys(true, 70);
  var ret_openKeyCursor_29 = store.openKeyCursor(true);
  var ret_openKeyCursor_30 = store.openKeyCursor('next');
  var ret_delete_31 = store.delete('fallback');
  var ret_getAll_32 = store.getAll('fallback', 26);
  var ret_openCursor_33 = store.openCursor('prevunique');
  var ret_put_34 = store.put('fallback', 42);
  var ret_getKey_35 = store.getKey(true);
  var ret_delete_36 = store.delete('fallback');
  var ret_getKey_37 = store.getKey(42);
  var ret_getAll_38 = store.getAll(42);
  var ret_put_39 = store.put('fallback', true);
  var ret_getAllKeys_40 = store.getAllKeys(42);
  var ret_clear_41 = store.clear();
  var ret_add_42 = store.add(42, true);
  var ret_getKey_43 = store.getKey('fallback');
  var ret_getAllKeys_44 = store.getAllKeys('fallback');
  var ret_add_45 = store.add(true, true);
  var ret_clear_46 = store.clear();
  var ret_openCursor_47 = store.openCursor(true, 'nextunique');
  var ret_openKeyCursor_48 = store.openKeyCursor(None, 'prevunique');
  var ret_getKey_49 = store.getKey(true);
  var ret_count_50 = store.count();
  var ret_clear_51 = store.clear();
  var ret_openKeyCursor_52 = store.openKeyCursor();
  var ret_delete_53 = store.delete('fallback');
  var ret_openKeyCursor_54 = store.openKeyCursor(None);
  var ret_delete_55 = store.delete(42);
  var ret_get_56 = store.get('fallback');
  var ret_get_57 = store.get(true);
  var ret_getKey_58 = store.getKey(true);
  var ret_getAll_59 = store.getAll();
  var ret_put_60 = store.put('fallback');
  var ret_getAllKeys_61 = store.getAllKeys('fallback', 45);
  var ret_getAllKeys_62 = store.getAllKeys(69);
  var ret_getAllKeys_63 = store.getAllKeys(42);
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
const deleteRequest = indexedDB.deleteDatabase('str_596')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
