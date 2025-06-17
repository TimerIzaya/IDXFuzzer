let db;
const openRequest = window.indexedDB.open('str_8130', 51)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_3016');
  var store_0_index_1 = store_0.createIndex('str_8795', 'str_6459');
  store_0_index_1.unique
  db.deleteObjectStore('str_1888')
  var store_1 = db.createObjectStore('str_8151');
  store_1.deleteIndex('str_1014')
  var store_1_index_1 = store_1.createIndex('str_2758', 'str_7308', {'unique': false, 'multiEntry': true});
  db.deleteObjectStore('str_7410')
  var store_2 = db.createObjectStore('str_9329');
  store_1.deleteIndex('str_3132')
  var store_2_index_1 = store_2.createIndex('str_2196', 'str_5686');
  var store_2_index_2 = store_1.createIndex('str_697', 'str_930');
  var store_2_index_3 = store_2.createIndex('str_9699', ['str_2097', 'str_2577', 'str_1625', 'str_7253', 'str_8587']);
  db.deleteObjectStore('str_5407')
  var store_3 = db.createObjectStore('str_7255', {'keyPath': ['str_565', 'str_5423', 'str_5608', 'str_8691'], 'autoIncrement': true});
  store_3.deleteIndex('str_9216')
  var store_3_index_1 = store_0.createIndex('str_542', ['str_2782', 'str_1444', 'str_1854', 'str_8877', 'str_3862']);
  var store_3_index_2 = store_2.createIndex('str_8786', ['str_758'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_2515')
  var store_4 = db.createObjectStore('str_5091', {'keyPath': 'str_8101', 'autoIncrement': true});
  db.deleteObjectStore('str_1079')
  var store_5 = db.createObjectStore('str_1937', {'keyPath': ['str_5592', 'str_7430', 'str_4353', 'str_4798', 'str_4103'], 'autoIncrement': false});
  store_0_index_1.unique
  db.deleteObjectStore('str_1827')
  var store_6 = db.createObjectStore('str_9906');
  db.deleteObjectStore('str_8403')
  db.deleteObjectStore('str_7163')
  var store_7 = db.createObjectStore('str_315');
  var store_7_index_1 = store_6.createIndex('str_6258', 'str_4262', {'unique': false, 'multiEntry': true});
  store_5.deleteIndex('str_2124')
  var store_7_index_2 = store_7.createIndex('str_5228', 'str_7047');
  var store_7_index_3 = store_1.createIndex('str_9486', 'str_5411');
  store_6.keyPath
  store_3.deleteIndex('str_6906')
  var store_7_index_4 = store_1.createIndex('str_3635', ['str_9607', 'str_2061', 'str_936', 'str_9228'], {'unique': false, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_getAllKeys_0 = store.getAllKeys(42, 81);
  var ret_delete_1 = store.delete('fallback');
  var ret_getAllKeys_2 = store.getAllKeys(94);
  var ret_getAllKeys_3 = store.getAllKeys();
  var ret_openCursor_4 = store.openCursor('prevunique');
  var ret_openCursor_5 = store.openCursor();
  var ret_delete_6 = store.delete(42);
  var ret_count_7 = store.count(42);
  var ret_count_8 = store.count(true);
  var ret_count_9 = store.count('fallback');
  var ret_count_10 = store.count('fallback');
  var ret_count_11 = store.count('fallback');
  var ret_getKey_12 = store.getKey('fallback');
  var ret_delete_13 = store.delete(true);
  var ret_getAllKeys_14 = store.getAllKeys('fallback', 98);
  var ret_add_15 = store.add(42);
  var ret_getAllKeys_16 = store.getAllKeys(98);
  var ret_getAllKeys_17 = store.getAllKeys(97);
  var ret_clear_18 = store.clear();
  var ret_getAllKeys_19 = store.getAllKeys();
  var ret_clear_20 = store.clear();
  var ret_put_21 = store.put(true);
  var ret_openKeyCursor_22 = store.openKeyCursor(None);
  var ret_getAllKeys_23 = store.getAllKeys('fallback');
  var ret_clear_24 = store.clear();
  var ret_openKeyCursor_25 = store.openKeyCursor(None, 'prev');
  var ret_delete_26 = store.delete(42);
  var ret_put_27 = store.put('fallback');
  var ret_openCursor_28 = store.openCursor();
  var ret_openCursor_29 = store.openCursor(true);
  var ret_getAll_30 = store.getAll(30);
  var ret_clear_31 = store.clear();
  var ret_openCursor_32 = store.openCursor();
  var ret_put_33 = store.put(true);
  var ret_add_34 = store.add('fallback');
  var ret_get_35 = store.get(true);
  var ret_clear_36 = store.clear();
  var ret_get_37 = store.get(42);
  var ret_getAll_38 = store.getAll();
  var ret_getAll_39 = store.getAll('fallback', 91);
  var ret_count_40 = store.count(42);
  var ret_add_41 = store.add(true, 42);
  var ret_get_42 = store.get(true);
  var ret_get_43 = store.get(42);
  var ret_openKeyCursor_44 = store.openKeyCursor(true);
  var ret_clear_45 = store.clear();
  var ret_openKeyCursor_46 = store.openKeyCursor();
  var ret_delete_47 = store.delete(42);
  var ret_delete_48 = store.delete(true);
  var ret_count_49 = store.count('fallback');
  var ret_getKey_50 = store.getKey(true);
  var ret_getAll_51 = store.getAll(73);
  var ret_getAll_52 = store.getAll('fallback');
  var ret_put_53 = store.put(42, true);
  var ret_add_54 = store.add('fallback', 42);
  var ret_getKey_55 = store.getKey(true);
  var ret_count_56 = store.count();
  var ret_put_57 = store.put('fallback', 42);
  var ret_delete_58 = store.delete('fallback');
  var ret_openKeyCursor_59 = store.openKeyCursor(42, 'prevunique');
  var ret_delete_60 = store.delete('fallback');
  var ret_getKey_61 = store.getKey(42);
  var ret_getAllKeys_62 = store.getAllKeys();
  var ret_put_63 = store.put(true, true);
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
const deleteRequest = indexedDB.deleteDatabase('str_8130')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
