let db;
const openRequest = window.indexedDB.open('str_6270', 95)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_6130');
  var store_0_index_1 = store_0.createIndex('str_3560', 'str_944');
  var store_0_index_2 = store_0.createIndex('str_9203', ['str_1365', 'str_4480', 'str_7841', 'str_5385']);
  db.deleteObjectStore('str_9252')
  store_0.deleteIndex('str_7344')
  var store_0_index_3 = store_0.createIndex('str_4475', ['str_6672', 'str_6412', 'str_1325', 'str_4259']);
  db.deleteObjectStore('str_426')
  var store_1 = db.createObjectStore('str_5918');
  store_0.deleteIndex('str_5978')
  var store_1_index_1 = store_0.createIndex('str_1019', ['str_136']);
  db.deleteObjectStore('str_1848')
  var store_2 = db.createObjectStore('str_6827', {'keyPath': ['str_612'], 'autoIncrement': true});
  db.deleteObjectStore('str_2382')
  var store_3 = db.createObjectStore('str_4684');
  var store_3_index_1 = store_1.createIndex('str_4924', ['str_6308', 'str_3414', 'str_8803', 'str_7659']);
  store_0.deleteIndex('str_6362')
  store_0.deleteIndex('str_5006')
  var store_3_index_2 = store_0.createIndex('str_3249', 'str_7018');
  var store_3_index_3 = store_0.createIndex('str_2463', ['str_9793', 'str_2609', 'str_2019', 'str_9087', 'str_3719'], {'unique': false, 'multiEntry': false});
  store_1.autoIncrement
  var store_3_index_4 = store_3.createIndex('str_1289', ['str_5715'], {'unique': true, 'multiEntry': false});
  var store_4 = db.createObjectStore('str_7844');
  store_4.deleteIndex('str_9706')
  var store_4_index_1 = store_1.createIndex('str_6437', 'str_1737');
  db.deleteObjectStore('str_3219')
  var store_5 = db.createObjectStore('str_402');
  var store_5_index_1 = store_2.createIndex('str_4456', 'str_91', {'unique': false, 'multiEntry': true});
  db.deleteObjectStore('str_7025')
  db.deleteObjectStore('str_6014')
  var store_5_index_2 = store_5.createIndex('str_9055', ['str_1522', 'str_6641']);
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_delete_0 = store.delete(true);
  var ret_put_1 = store.put(42, 'fallback');
  var ret_getAll_2 = store.getAll();
  var ret_getAll_3 = store.getAll();
  var ret_getAll_4 = store.getAll();
  var ret_openCursor_5 = store.openCursor(None);
  var ret_openKeyCursor_6 = store.openKeyCursor(None);
  var ret_put_7 = store.put(true);
  var ret_getAll_8 = store.getAll();
  var ret_put_9 = store.put(true);
  var ret_delete_10 = store.delete(true);
  var ret_getAll_11 = store.getAll('fallback', 91);
  var ret_getAll_12 = store.getAll(42);
  var ret_delete_13 = store.delete(42);
  var ret_count_14 = store.count(true);
  var ret_delete_15 = store.delete('fallback');
  var ret_clear_16 = store.clear();
  var ret_count_17 = store.count();
  var ret_count_18 = store.count();
  var ret_count_19 = store.count(42);
  var ret_delete_20 = store.delete(42);
  var ret_count_21 = store.count();
  var ret_getAll_22 = store.getAll();
  var ret_getAll_23 = store.getAll('fallback');
  var ret_getKey_24 = store.getKey('fallback');
  var ret_getKey_25 = store.getKey(42);
  var ret_delete_26 = store.delete(true);
  var ret_count_27 = store.count();
  var ret_openKeyCursor_28 = store.openKeyCursor(None, 'next');
  var ret_clear_29 = store.clear();
  var ret_put_30 = store.put('fallback', 'fallback');
  var ret_delete_31 = store.delete(true);
  var ret_count_32 = store.count();
  var ret_clear_33 = store.clear();
  var ret_put_34 = store.put(42, true);
  var ret_clear_35 = store.clear();
  var ret_put_36 = store.put('fallback', 42);
  var ret_clear_37 = store.clear();
  var ret_getAllKeys_38 = store.getAllKeys(28);
  var ret_put_39 = store.put(42);
  var ret_put_40 = store.put(true, true);
  var ret_count_41 = store.count();
  var ret_openCursor_42 = store.openCursor(None, 'prev');
  var ret_put_43 = store.put('fallback');
  var ret_add_44 = store.add(true, true);
  var ret_get_45 = store.get(true);
  var ret_count_46 = store.count(42);
  var ret_count_47 = store.count(true);
  var ret_count_48 = store.count(42);
  var ret_count_49 = store.count();
  var ret_count_50 = store.count();
  var ret_getAll_51 = store.getAll('fallback');
  var ret_openKeyCursor_52 = store.openKeyCursor('prev');
  var ret_clear_53 = store.clear();
  var ret_clear_54 = store.clear();
  var ret_count_55 = store.count();
  var ret_getAll_56 = store.getAll();
  var ret_getAll_57 = store.getAll('fallback');
  var ret_put_58 = store.put('fallback');
  var ret_get_59 = store.get(42);
  var ret_count_60 = store.count(true);
  var ret_count_61 = store.count(42);
  var ret_add_62 = store.add(42);
  var ret_count_63 = store.count();
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
const deleteRequest = indexedDB.deleteDatabase('str_6270')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
