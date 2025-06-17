let db;
const openRequest = window.indexedDB.open('str_2485')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_8079');
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_2939', ['str_1341', 'str_9968'], {'unique': false, 'multiEntry': false});
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_3508', 'str_5670', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_3495')
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_5884', 'str_4461');
  var store_0_index_4;
  store_0_index_4 = store_0.createIndex('str_8367', 'str_3410');
  var store_0_index_5;
  store_0_index_5 = store_0.createIndex('str_8731', ['str_6913', 'str_8892', 'str_6069', 'str_6034', 'str_8172'], {'unique': false, 'multiEntry': false});
  var store_0_index_6;
  store_0_index_6 = store_0.createIndex('str_4338', ['str_3465']);
  var store_0_index_7;
  store_0_index_7 = store_0.createIndex('str_7545', 'str_2440');
  var store_0_index_8;
  store_0_index_8 = store_0.createIndex('str_5186', 'str_5419');
  store_0_index_8.unique
  db.deleteObjectStore('str_924')
  var store_1;
  store_1 = db.createObjectStore('str_3240');
  var store_1_index_1;
  store_1_index_1 = store_0.createIndex('str_3409', ['str_1635', 'str_2808', 'str_8107', 'str_1470', 'str_4051']);
  store_0_index_7.keyPath
  var store_1_index_2;
  store_1_index_2 = store_1.createIndex('str_1978', ['str_141', 'str_2252', 'str_9364', 'str_8622'], {'unique': true, 'multiEntry': false});
  store_1.deleteIndex('str_5821')
  var store_1_index_3;
  store_1_index_3 = store_1.createIndex('str_1548', ['str_1652', 'str_1901'], {'unique': false, 'multiEntry': false});
  var store_1_index_4;
  store_1_index_4 = store_1.createIndex('str_6809', ['str_4656', 'str_3101', 'str_3', 'str_193', 'str_3983']);
  store_0_index_5.keyPath
  db.deleteObjectStore('str_4557')
  db.deleteObjectStore('str_9996')
  var store_2;
  store_2 = db.createObjectStore('str_2926', {'keyPath': ['str_3081', 'str_4184', 'str_2594', 'str_2268', 'str_8159'], 'autoIncrement': true});
  db.deleteObjectStore('str_6654')
  var store_3;
  store_3 = db.createObjectStore('str_7224');
  store_3.autoIncrement
  store_2.keyPath
  var store_3_index_1;
  store_3_index_1 = store_2.createIndex('str_4970', ['str_1818']);
  db.deleteObjectStore('str_4966')
  var store_3_index_2;
  store_3_index_2 = store_3.createIndex('str_4620', 'str_7792', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_2443')
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_1', 'readwrite')
  const store = txn.objectStore('store_1')
  const req_put_0 = store.put('fallback')
  const req_clear_1 = store.clear()
  const req_clear_2 = store.clear()
  const req_getAll_3 = store.getAll('fallback', 9)
  const req_count_4 = store.count()
  const req_openKeyCursor_5 = store.openKeyCursor(None)
  const req_delete_6 = store.delete(true)
  const req_count_7 = store.count()
  const req_get_8 = store.get(true)
  const req_get_9 = store.get(true)
  const req_get_10 = store.get(true)
  const req_delete_11 = store.delete('fallback')
  const req_getKey_12 = store.getKey(42)
  const req_getKey_13 = store.getKey(true)
  const req_getKey_14 = store.getKey(42)
  const req_add_15 = store.add(true, 'fallback')
  const req_openKeyCursor_16 = store.openKeyCursor(42)
  const req_delete_17 = store.delete(true)
  const req_openCursor_18 = store.openCursor(None, 'nextunique')
  const req_get_19 = store.get(true)
  const req_count_20 = store.count(42)
  const req_getAllKeys_21 = store.getAllKeys()
  const req_add_22 = store.add('fallback')
  const req_add_23 = store.add('fallback')
  const req_delete_24 = store.delete('fallback')
  const req_count_25 = store.count('fallback')
  const req_getAllKeys_26 = store.getAllKeys()
  const req_openKeyCursor_27 = store.openKeyCursor(None, 'nextunique')
  const req_openKeyCursor_28 = store.openKeyCursor('fallback', 'prevunique')
  const req_openCursor_29 = store.openCursor('nextunique')
  const req_openKeyCursor_30 = store.openKeyCursor()
  const req_clear_31 = store.clear()
  const req_openKeyCursor_32 = store.openKeyCursor()
  const req_openKeyCursor_33 = store.openKeyCursor(None)
  const req_count_34 = store.count()
  const req_delete_35 = store.delete('fallback')
  const req_getAllKeys_36 = store.getAllKeys()
  const req_add_37 = store.add(true, 42)
  const req_add_38 = store.add(42)
  const req_add_39 = store.add(true, 'fallback')
  const req_getAllKeys_40 = store.getAllKeys(true, 61)
  const req_put_41 = store.put('fallback', 42)
  const req_delete_42 = store.delete(42)
  const req_openCursor_43 = store.openCursor()
  const req_put_44 = store.put(true, 42)
  const req_put_45 = store.put('fallback', true)
  const req_add_46 = store.add(42, true)
  const req_getKey_47 = store.getKey('fallback')
  const req_count_48 = store.count()
  const req_openKeyCursor_49 = store.openKeyCursor()
  const req_getKey_50 = store.getKey('fallback')
  const req_openCursor_51 = store.openCursor()
  const req_count_52 = store.count()
  const req_add_53 = store.add('fallback')
  const req_openKeyCursor_54 = store.openKeyCursor()
  const req_put_55 = store.put(true, 'fallback')
  const req_clear_56 = store.clear()
  const req_clear_57 = store.clear()
  const req_put_58 = store.put(42, true)
  const req_delete_59 = store.delete(42)
  const req_count_60 = store.count()
  const req_getAllKeys_61 = store.getAllKeys(42)
  const req_getAllKeys_62 = store.getAllKeys(77)
  const req_openCursor_63 = store.openCursor(None)
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
const deleteRequest = indexedDB.deleteDatabase('str_2485')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
