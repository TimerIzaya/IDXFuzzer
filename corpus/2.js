let db;
const openRequest = window.indexedDB.open('str_5757')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_4687');
  var store_0_index_1 = store_0.createIndex('str_972', 'str_268');
  store_0.deleteIndex('str_9681')
  var store_0_index_2 = store_0.createIndex('str_7994', 'str_5119', {'unique': false, 'multiEntry': true});
  store_0.deleteIndex('str_2816')
  var store_0_index_3 = store_0.createIndex('str_145', ['str_2663']);
  store_0_index_1.multiEntry
  db.deleteObjectStore('str_2441')
  var store_1 = db.createObjectStore('str_1943', {'keyPath': 'str_3777', 'autoIncrement': true});
  store_0.name
  var store_1_index_1 = store_1.createIndex('str_7740', ['str_6921', 'str_2308', 'str_7683', 'str_3940'], {'unique': true, 'multiEntry': false});
  var store_1_index_2 = store_1.createIndex('str_6334', 'str_7054');
  store_0_index_3.name
  store_1.deleteIndex('str_4935')
  var store_1_index_3 = store_1.createIndex('str_9518', 'str_2725', {'unique': true, 'multiEntry': true});
  store_0.indexNames
  store_1_index_2.unique
  var store_1_index_4 = store_1.createIndex('str_9654', ['str_3198', 'str_6898', 'str_9849', 'str_1090'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_228')
  db.deleteObjectStore('str_5628')
  var store_1_index_5 = store_1.createIndex('str_6638', ['str_3485', 'str_9821', 'str_3185', 'str_8991', 'str_8760']);
  db.deleteObjectStore('str_1423')
  var store_2 = db.createObjectStore('str_1342');
  db.deleteObjectStore('str_9147')
  var store_3 = db.createObjectStore('str_4597', {'keyPath': 'str_7638', 'autoIncrement': false});
  db.deleteObjectStore('str_5141')
  var store_4 = db.createObjectStore('str_8167');
  var store_4_index_1 = store_2.createIndex('str_8965', ['str_669']);
  var store_4_index_2 = store_2.createIndex('str_488', ['str_2141', 'str_5331', 'str_7073', 'str_1205', 'str_952'], {'unique': false, 'multiEntry': false});
  var store_4_index_3 = store_2.createIndex('str_175', 'str_3267', {'unique': true, 'multiEntry': false});
  var store_4_index_4 = store_1.createIndex('str_1240', 'str_1195');
  var store_4_index_5 = store_3.createIndex('str_1204', ['str_6437']);
  var store_4_index_6 = store_2.createIndex('str_7550', 'str_4599', {'unique': true, 'multiEntry': false});
  var store_4_index_7 = store_4.createIndex('str_8727', 'str_5278', {'unique': true, 'multiEntry': true});
  var store_4_index_8 = store_1.createIndex('str_1261', 'str_2554', {'unique': false, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_clear_0 = store.clear();
  var ret_clear_1 = store.clear();
  var ret_getAll_2 = store.getAll();
  var ret_openKeyCursor_3 = store.openKeyCursor();
  var ret_put_4 = store.put(42, 'fallback');
  var ret_get_5 = store.get(42);
  var ret_count_6 = store.count(42);
  var ret_clear_7 = store.clear();
  var ret_getAllKeys_8 = store.getAllKeys(true);
  var ret_openCursor_9 = store.openCursor(None);
  var ret_get_10 = store.get(42);
  var ret_delete_11 = store.delete(true);
  var ret_count_12 = store.count();
  var ret_getAll_13 = store.getAll(true, 1);
  var ret_getAll_14 = store.getAll(54);
  var ret_add_15 = store.add(42);
  var ret_getKey_16 = store.getKey(42);
  var ret_getAllKeys_17 = store.getAllKeys(42, 98);
  var ret_getAllKeys_18 = store.getAllKeys(97);
  var ret_openCursor_19 = store.openCursor();
  var ret_openCursor_20 = store.openCursor(None);
  var ret_delete_21 = store.delete(42);
  var ret_delete_22 = store.delete(42);
  var ret_count_23 = store.count('fallback');
  var ret_getAll_24 = store.getAll();
  var ret_openKeyCursor_25 = store.openKeyCursor();
  var ret_put_26 = store.put(true);
  var ret_get_27 = store.get(42);
  var ret_put_28 = store.put(42, 42);
  var ret_add_29 = store.add(true);
  var ret_delete_30 = store.delete('fallback');
  var ret_count_31 = store.count(true);
  var ret_add_32 = store.add('fallback');
  var ret_clear_33 = store.clear();
  var ret_add_34 = store.add(42);
  var ret_get_35 = store.get(42);
  var ret_openCursor_36 = store.openCursor('prev');
  var ret_delete_37 = store.delete('fallback');
  var ret_openKeyCursor_38 = store.openKeyCursor();
  var ret_delete_39 = store.delete(42);
  var ret_get_40 = store.get('fallback');
  var ret_openKeyCursor_41 = store.openKeyCursor(true, 'next');
  var ret_openCursor_42 = store.openCursor('prevunique');
  var ret_clear_43 = store.clear();
  var ret_clear_44 = store.clear();
  var ret_getAllKeys_45 = store.getAllKeys(42);
  var ret_getAllKeys_46 = store.getAllKeys(true);
  var ret_delete_47 = store.delete(42);
  var ret_delete_48 = store.delete(42);
  var ret_openCursor_49 = store.openCursor(None, 'nextunique');
  var ret_getAll_50 = store.getAll('fallback', 12);
  var ret_add_51 = store.add(42, 42);
  var ret_getAllKeys_52 = store.getAllKeys('fallback', 11);
  var ret_delete_53 = store.delete('fallback');
  var ret_add_54 = store.add(42);
  var ret_count_55 = store.count('fallback');
  var ret_getAllKeys_56 = store.getAllKeys(42);
  var ret_openCursor_57 = store.openCursor();
  var ret_put_58 = store.put('fallback', 42);
  var ret_add_59 = store.add(true);
  var ret_add_60 = store.add('fallback', 'fallback');
  var ret_getKey_61 = store.getKey(42);
  var ret_getKey_62 = store.getKey(42);
  var ret_getKey_63 = store.getKey(true);
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
const deleteRequest = indexedDB.deleteDatabase('str_5757')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
