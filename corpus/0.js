let db;
const openRequest = window.indexedDB.open('str_1974', 26)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_6016');
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_9616', 'str_4164');
  db.deleteObjectStore('str_3133')
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_4908', 'str_369', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_8214')
  db.deleteObjectStore('str_6283')
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_5105', ['str_3892', 'str_9529']);
  var store_1;
  store_1 = db.createObjectStore('str_9122', {'keyPath': 'str_2224', 'autoIncrement': false});
  store_1.deleteIndex('str_7947')
  var store_1_index_1;
  store_1_index_1 = store_1.createIndex('str_961', ['str_8957', 'str_7456'], {'unique': false, 'multiEntry': false});
  var store_1_index_2;
  store_1_index_2 = store_0.createIndex('str_8635', 'str_3910', {'unique': true, 'multiEntry': false});
  var store_1_index_3;
  store_1_index_3 = store_0.createIndex('str_5283', 'str_2983', {'unique': true, 'multiEntry': false});
  var store_1_index_4;
  store_1_index_4 = store_1.createIndex('str_5360', ['str_8397', 'str_1744', 'str_9355', 'str_1358'], {'unique': false, 'multiEntry': false});
  var store_1_index_5;
  store_1_index_5 = store_1.createIndex('str_3431', ['str_7047', 'str_5391', 'str_938', 'str_3212']);
  store_0.deleteIndex('str_9078')
  var store_1_index_6;
  store_1_index_6 = store_0.createIndex('str_6875', ['str_692', 'str_8060', 'str_2766', 'str_8013'], {'unique': true, 'multiEntry': false});
  var store_1_index_7;
  store_1_index_7 = store_1.createIndex('str_9097', ['str_5558'], {'unique': false, 'multiEntry': false});
  var store_1_index_8;
  store_1_index_8 = store_0.createIndex('str_5460', 'str_869', {'unique': true, 'multiEntry': false});
  var store_1_index_9;
  store_1_index_9 = store_0.createIndex('str_2990', ['str_6813', 'str_7738', 'str_9194', 'str_2949', 'str_5634'], {'unique': true, 'multiEntry': false});
  var store_1_index_10;
  store_1_index_10 = store_1.createIndex('str_6088', 'str_6028', {'unique': false, 'multiEntry': true});
  var store_1_index_11;
  store_1_index_11 = store_0.createIndex('str_8662', 'str_9341', {'unique': true, 'multiEntry': true});
  store_0.deleteIndex('str_9741')
  var store_1_index_12;
  store_1_index_12 = store_0.createIndex('str_7182', 'str_4227');
  var store_1_index_13;
  store_1_index_13 = store_1.createIndex('str_5431', ['str_4509']);
  var store_1_index_14;
  store_1_index_14 = store_0.createIndex('str_5151', 'str_6990');
  store_1_index_10.multiEntry
  store_0.deleteIndex('str_8779')
  var store_1_index_15;
  store_1_index_15 = store_0.createIndex('str_8464', ['str_1957', 'str_9095', 'str_9582']);
  db.deleteObjectStore('str_9922')
  store_1.deleteIndex('str_8069')
  var store_1_index_16;
  store_1_index_16 = store_0.createIndex('str_2599', 'str_9999');
  db.deleteObjectStore('str_4258')
  var store_2;
  store_2 = db.createObjectStore('str_7551', {'keyPath': 'str_5515', 'autoIncrement': true});
  store_1.deleteIndex('str_2569')
  var store_2_index_1;
  store_2_index_1 = store_2.createIndex('str_7036', 'str_2332');
  var store_3;
  store_3 = db.createObjectStore('str_9610', {'keyPath': 'str_7242', 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  const req_getAll_0 = store.getAll(true, 33)
  const req_delete_1 = store.delete('fallback')
  const req_clear_2 = store.clear()
  const req_clear_3 = store.clear()
  const req_openKeyCursor_4 = store.openKeyCursor('next')
  const req_openKeyCursor_5 = store.openKeyCursor()
  const req_put_6 = store.put(42)
  const req_delete_7 = store.delete(42)
  const req_delete_8 = store.delete('fallback')
  const req_clear_9 = store.clear()
  const req_put_10 = store.put(true)
  const req_clear_11 = store.clear()
  const req_put_12 = store.put(true, true)
  const req_get_13 = store.get(true)
  const req_count_14 = store.count()
  const req_clear_15 = store.clear()
  const req_add_16 = store.add(true, 42)
  const req_clear_17 = store.clear()
  const req_getAllKeys_18 = store.getAllKeys(1)
  const req_put_19 = store.put(42, 'fallback')
  const req_delete_20 = store.delete(42)
  const req_delete_21 = store.delete('fallback')
  const req_delete_22 = store.delete('fallback')
  const req_clear_23 = store.clear()
  const req_delete_24 = store.delete(true)
  const req_add_25 = store.add('fallback', 42)
  const req_get_26 = store.get('fallback')
  const req_openKeyCursor_27 = store.openKeyCursor()
  const req_delete_28 = store.delete('fallback')
  const req_count_29 = store.count(true)
  const req_clear_30 = store.clear()
  const req_put_31 = store.put('fallback')
  const req_put_32 = store.put('fallback', true)
  const req_put_33 = store.put(true)
  const req_getAll_34 = store.getAll(true)
  const req_count_35 = store.count('fallback')
  const req_clear_36 = store.clear()
  const req_add_37 = store.add('fallback')
  const req_delete_38 = store.delete(true)
  const req_delete_39 = store.delete(true)
  const req_delete_40 = store.delete(true)
  const req_add_41 = store.add('fallback', 'fallback')
  const req_add_42 = store.add(42)
  const req_getKey_43 = store.getKey(true)
  const req_count_44 = store.count('fallback')
  const req_getAllKeys_45 = store.getAllKeys()
  const req_clear_46 = store.clear()
  const req_clear_47 = store.clear()
  const req_put_48 = store.put('fallback', 42)
  const req_put_49 = store.put(42, 42)
  const req_getAll_50 = store.getAll()
  const req_count_51 = store.count()
  const req_delete_52 = store.delete('fallback')
  const req_count_53 = store.count(true)
  const req_getKey_54 = store.getKey('fallback')
  const req_openCursor_55 = store.openCursor(true)
  const req_delete_56 = store.delete('fallback')
  const req_count_57 = store.count(true)
  const req_put_58 = store.put('fallback')
  const req_getAll_59 = store.getAll(66)
  const req_count_60 = store.count()
  const req_getKey_61 = store.getKey('fallback')
  const req_getKey_62 = store.getKey('fallback')
  const req_add_63 = store.add('fallback', 42)
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
const deleteRequest = indexedDB.deleteDatabase('str_1974')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
