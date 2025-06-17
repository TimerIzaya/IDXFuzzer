let db;
const openRequest = window.indexedDB.open('str_9515', 76)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_6178', {'keyPath': ['str_4401', 'str_4911', 'str_5273', 'str_2336'], 'autoIncrement': false});
  var store_0_index_1 = store_0.createIndex('str_8210', ['str_9083', 'str_884', 'str_2199'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_8583')
  var store_0_index_2 = store_0.createIndex('str_613', ['str_361', 'str_632', 'str_5745', 'str_6137'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_6878')
  var store_1 = db.createObjectStore('str_6842', {'keyPath': ['str_8312', 'str_8262'], 'autoIncrement': true});
  var store_2 = db.createObjectStore('str_7161', {'keyPath': 'str_113', 'autoIncrement': true});
  var store_2_index_1 = store_0.createIndex('str_5586', 'str_6657', {'unique': true, 'multiEntry': false});
  var store_2_index_2 = store_2.createIndex('str_7404', ['str_988', 'str_6375', 'str_7582']);
  var store_2_index_3 = store_0.createIndex('str_5955', ['str_5309', 'str_5458']);
  var store_2_index_4 = store_1.createIndex('str_4641', ['str_9291', 'str_4566', 'str_946', 'str_2883'], {'unique': true, 'multiEntry': false});
  var store_2_index_5 = store_2.createIndex('str_88', 'str_4132', {'unique': false, 'multiEntry': false});
  store_1.deleteIndex('str_5106')
  var store_2_index_6 = store_2.createIndex('str_8569', 'str_9118');
  store_2.deleteIndex('str_2704')
  var store_2_index_7 = store_0.createIndex('str_7267', 'str_8849', {'unique': true, 'multiEntry': true});
  store_2.deleteIndex('str_6369')
  var store_2_index_8 = store_0.createIndex('str_7032', ['str_2309', 'str_4082'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_2846')
  db.deleteObjectStore('str_1795')
  var store_3 = db.createObjectStore('str_6385');
  var store_3_index_1 = store_0.createIndex('str_8078', ['str_1684', 'str_6394', 'str_1359', 'str_514']);
  var store_3_index_2 = store_3.createIndex('str_4618', 'str_3596');
  store_3_index_2.keyPath
  store_0.deleteIndex('str_9096')
  var store_3_index_3 = store_2.createIndex('str_626', 'str_5243');
  store_2.deleteIndex('str_2796')
  var store_3_index_4 = store_0.createIndex('str_9484', ['str_8565', 'str_5514', 'str_5691', 'str_5292', 'str_7712'], {'unique': false, 'multiEntry': false});
  var store_3_index_5 = store_0.createIndex('str_9300', 'str_5550');
  var store_3_index_6 = store_3.createIndex('str_35', ['str_9619', 'str_338', 'str_5606', 'str_2699'], {'unique': false, 'multiEntry': false});
  var store_3_index_7 = store_0.createIndex('str_1632', 'str_4463');
  var store_3_index_8 = store_0.createIndex('str_5993', ['str_6843', 'str_1706', 'str_7454', 'str_9473', 'str_7792'], {'unique': false, 'multiEntry': false});
  var store_3_index_9 = store_2.createIndex('str_5526', ['str_3675', 'str_5452', 'str_4144'], {'unique': false, 'multiEntry': false});
  store_3_index_7.unique
  store_3.deleteIndex('str_5200')
  var store_3_index_10 = store_1.createIndex('str_7478', 'str_4040', {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_8483')
  var store_4 = db.createObjectStore('str_5414');
  db.deleteObjectStore('str_1624')
  var store_5 = db.createObjectStore('str_5537');
  store_2.deleteIndex('str_1713')
  var store_5_index_1 = store_1.createIndex('str_1553', 'str_3197', {'unique': true, 'multiEntry': false});
  store_4.deleteIndex('str_4854')
  store_2.keyPath
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_count_0 = store.count('fallback');
  var ret_getKey_1 = store.getKey(42);
  var ret_openKeyCursor_2 = store.openKeyCursor();
  var ret_clear_3 = store.clear();
  var ret_put_4 = store.put('fallback');
  var ret_delete_5 = store.delete('fallback');
  var ret_count_6 = store.count();
  var ret_count_7 = store.count(42);
  var ret_getAll_8 = store.getAll(60);
  var ret_openCursor_9 = store.openCursor(42, 'prevunique');
  var ret_openCursor_10 = store.openCursor('prevunique');
  var ret_openCursor_11 = store.openCursor();
  var ret_openCursor_12 = store.openCursor();
  var ret_put_13 = store.put(42);
  var ret_put_14 = store.put(true, 'fallback');
  var ret_count_15 = store.count();
  var ret_getAll_16 = store.getAll('fallback');
  var ret_delete_17 = store.delete(42);
  var ret_count_18 = store.count('fallback');
  var ret_count_19 = store.count(42);
  var ret_count_20 = store.count();
  var ret_clear_21 = store.clear();
  var ret_add_22 = store.add('fallback');
  var ret_get_23 = store.get(42);
  var ret_openCursor_24 = store.openCursor(None, 'next');
  var ret_delete_25 = store.delete(true);
  var ret_delete_26 = store.delete(42);
  var ret_count_27 = store.count(42);
  var ret_put_28 = store.put('fallback', 42);
  var ret_get_29 = store.get('fallback');
  var ret_clear_30 = store.clear();
  var ret_put_31 = store.put('fallback');
  var ret_getAllKeys_32 = store.getAllKeys();
  var ret_add_33 = store.add(42, true);
  var ret_add_34 = store.add(42);
  var ret_delete_35 = store.delete(42);
  var ret_delete_36 = store.delete('fallback');
  var ret_count_37 = store.count();
  var ret_openKeyCursor_38 = store.openKeyCursor(None, 'nextunique');
  var ret_count_39 = store.count(true);
  var ret_openKeyCursor_40 = store.openKeyCursor(None);
  var ret_delete_41 = store.delete('fallback');
  var ret_openCursor_42 = store.openCursor();
  var ret_delete_43 = store.delete(true);
  var ret_count_44 = store.count();
  var ret_count_45 = store.count();
  var ret_add_46 = store.add('fallback', true);
  var ret_getAll_47 = store.getAll('fallback');
  var ret_getAll_48 = store.getAll('fallback', 55);
  var ret_openCursor_49 = store.openCursor('next');
  var ret_get_50 = store.get(true);
  var ret_getKey_51 = store.getKey(42);
  var ret_count_52 = store.count('fallback');
  var ret_delete_53 = store.delete(true);
  var ret_delete_54 = store.delete(true);
  var ret_getKey_55 = store.getKey(true);
  var ret_add_56 = store.add(42);
  var ret_delete_57 = store.delete('fallback');
  var ret_delete_58 = store.delete(42);
  var ret_getKey_59 = store.getKey(true);
  var ret_openKeyCursor_60 = store.openKeyCursor(None);
  var ret_get_61 = store.get(true);
  var ret_delete_62 = store.delete(true);
  var ret_delete_63 = store.delete(true);
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
const deleteRequest = indexedDB.deleteDatabase('str_9515')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
