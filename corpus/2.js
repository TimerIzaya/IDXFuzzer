let db;
const openRequest = window.indexedDB.open('str_9366')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_4721', {'keyPath': ['str_1449', 'str_834', 'str_0', 'str_2454', 'str_8526'], 'autoIncrement': false});
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_6627', 'str_8906');
  store_0.deleteIndex('str_3506')
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_5301', 'str_7243', {'unique': false, 'multiEntry': true});
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_2128', 'str_196');
  var store_0_index_4;
  store_0_index_4 = store_0.createIndex('str_9286', ['str_7050']);
  store_0.deleteIndex('str_3668')
  var store_0_index_5;
  store_0_index_5 = store_0.createIndex('str_9602', 'str_2563', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_9011')
  var store_0_index_6;
  store_0_index_6 = store_0.createIndex('str_8730', 'str_2781', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_8645')
  var store_0_index_7;
  store_0_index_7 = store_0.createIndex('str_4605', ['str_1636', 'str_3699'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_2317')
  var store_1;
  store_1 = db.createObjectStore('str_4483', {'keyPath': 'str_4131', 'autoIncrement': true});
  store_1.keyPath
  var store_2;
  store_2 = db.createObjectStore('str_5479', {'keyPath': ['str_6631', 'str_9053', 'str_6877', 'str_822'], 'autoIncrement': true});
  var store_2_index_1;
  store_2_index_1 = store_0.createIndex('str_3520', ['str_988', 'str_8180', 'str_5725', 'str_6861']);
  var store_2_index_2;
  store_2_index_2 = store_0.createIndex('str_1316', 'str_6397');
  var store_2_index_3;
  store_2_index_3 = store_2.createIndex('str_5030', ['str_4692', 'str_8201'], {'unique': false, 'multiEntry': false});
  var store_2_index_4;
  store_2_index_4 = store_2.createIndex('str_9665', 'str_8197');
  db.deleteObjectStore('str_6572')
  var store_3;
  store_3 = db.createObjectStore('str_6353');
  store_2_index_1.unique
  store_3.deleteIndex('str_7933')
  var store_3_index_1;
  store_3_index_1 = store_1.createIndex('str_5480', 'str_8538', {'unique': true, 'multiEntry': false});
  store_0.name
  store_0.deleteIndex('str_9493')
  var store_3_index_2;
  store_3_index_2 = store_2.createIndex('str_4150', ['str_8565', 'str_8144', 'str_9410', 'str_4454', 'str_9852']);
  var store_3_index_3;
  store_3_index_3 = store_1.createIndex('str_6782', 'str_6021');
  db.deleteObjectStore('str_9771')
  var store_4;
  store_4 = db.createObjectStore('str_3722', {'keyPath': ['str_2329'], 'autoIncrement': true});
  store_1.deleteIndex('str_1516')
  var store_4_index_1;
  store_4_index_1 = store_3.createIndex('str_8032', 'str_2329');
  db.deleteObjectStore('str_9110')
  var store_5;
  store_5 = db.createObjectStore('str_4092', {'keyPath': ['str_6523', 'str_367', 'str_5687'], 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_3', 'readwrite')
  const store = txn.objectStore('store_3')
  const req_getKey_0 = store.getKey(true)
  const req_getAll_1 = store.getAll()
  const req_add_2 = store.add(42, 'fallback')
  const req_getKey_3 = store.getKey('fallback')
  const req_clear_4 = store.clear()
  const req_getAllKeys_5 = store.getAllKeys(true)
  const req_getAllKeys_6 = store.getAllKeys(91)
  const req_count_7 = store.count('fallback')
  const req_put_8 = store.put(42)
  const req_delete_9 = store.delete(42)
  const req_count_10 = store.count()
  const req_clear_11 = store.clear()
  const req_put_12 = store.put(42, 42)
  const req_put_13 = store.put(42, 'fallback')
  const req_get_14 = store.get(true)
  const req_count_15 = store.count(true)
  const req_getAllKeys_16 = store.getAllKeys(8)
  const req_clear_17 = store.clear()
  const req_clear_18 = store.clear()
  const req_clear_19 = store.clear()
  const req_add_20 = store.add(42, 'fallback')
  const req_openKeyCursor_21 = store.openKeyCursor('prevunique')
  const req_delete_22 = store.delete('fallback')
  const req_count_23 = store.count(42)
  const req_openKeyCursor_24 = store.openKeyCursor(None, 'next')
  const req_get_25 = store.get(true)
  const req_getAll_26 = store.getAll(49)
  const req_openCursor_27 = store.openCursor()
  const req_put_28 = store.put(true, 42)
  const req_delete_29 = store.delete(true)
  const req_count_30 = store.count(42)
  const req_put_31 = store.put(42, true)
  const req_clear_32 = store.clear()
  const req_clear_33 = store.clear()
  const req_put_34 = store.put(42)
  const req_get_35 = store.get('fallback')
  const req_add_36 = store.add(42)
  const req_get_37 = store.get(42)
  const req_getAll_38 = store.getAll('fallback')
  const req_openCursor_39 = store.openCursor(None, 'prevunique')
  const req_getAllKeys_40 = store.getAllKeys(42)
  const req_getAllKeys_41 = store.getAllKeys(42)
  const req_openCursor_42 = store.openCursor(None, 'prevunique')
  const req_delete_43 = store.delete(true)
  const req_openCursor_44 = store.openCursor(42, 'nextunique')
  const req_put_45 = store.put(42, 'fallback')
  const req_delete_46 = store.delete(42)
  const req_count_47 = store.count('fallback')
  const req_getKey_48 = store.getKey(42)
  const req_add_49 = store.add(true)
  const req_getAll_50 = store.getAll(42, 39)
  const req_put_51 = store.put(true)
  const req_add_52 = store.add('fallback')
  const req_get_53 = store.get(true)
  const req_count_54 = store.count(42)
  const req_add_55 = store.add(42)
  const req_getAllKeys_56 = store.getAllKeys()
  const req_count_57 = store.count()
  const req_count_58 = store.count()
  const req_clear_59 = store.clear()
  const req_openCursor_60 = store.openCursor('prevunique')
  const req_count_61 = store.count('fallback')
  const req_getAllKeys_62 = store.getAllKeys('fallback')
  const req_openKeyCursor_63 = store.openKeyCursor(None)
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
const deleteRequest = indexedDB.deleteDatabase('str_9366')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
