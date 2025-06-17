let db;
const openRequest = window.indexedDB.open('str_9005', 94)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_5691');
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_6706', 'str_9444');
  store_0.deleteIndex('str_3439')
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_913', 'str_4399', {'unique': true, 'multiEntry': true});
  store_0.deleteIndex('str_3983')
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_2533', ['str_4006', 'str_5093']);
  var store_0_index_4;
  store_0_index_4 = store_0.createIndex('str_4558', 'str_9958');
  var store_0_index_5;
  store_0_index_5 = store_0.createIndex('str_3937', 'str_1518');
  var store_0_index_6;
  store_0_index_6 = store_0.createIndex('str_4370', ['str_4490', 'str_7347', 'str_5508', 'str_5238', 'str_4523']);
  var store_0_index_7;
  store_0_index_7 = store_0.createIndex('str_626', ['str_2652']);
  var store_0_index_8;
  store_0_index_8 = store_0.createIndex('str_7557', ['str_5798', 'str_1819'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_5639')
  store_0.deleteIndex('str_1706')
  var store_0_index_9;
  store_0_index_9 = store_0.createIndex('str_7460', 'str_2821');
  store_0.deleteIndex('str_816')
  var store_0_index_10;
  store_0_index_10 = store_0.createIndex('str_7754', 'str_5494', {'unique': true, 'multiEntry': true});
  store_0.deleteIndex('str_1012')
  var store_0_index_11;
  store_0_index_11 = store_0.createIndex('str_8507', ['str_5158', 'str_8962', 'str_3602', 'str_7139'], {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_7278')
  var store_0_index_12;
  store_0_index_12 = store_0.createIndex('str_6861', ['str_755', 'str_8448']);
  var store_0_index_13;
  store_0_index_13 = store_0.createIndex('str_4558', ['str_9396', 'str_422', 'str_4202']);
  store_0.autoIncrement
  var store_0_index_14;
  store_0_index_14 = store_0.createIndex('str_157', ['str_6654', 'str_9929', 'str_1788', 'str_7950'], {'unique': false, 'multiEntry': false});
  var store_1;
  store_1 = db.createObjectStore('str_5003');
  var store_1_index_1;
  store_1_index_1 = store_0.createIndex('str_8221', 'str_8924', {'unique': true, 'multiEntry': false});
  var store_1_index_2;
  store_1_index_2 = store_0.createIndex('str_5332', 'str_5900');
  var store_1_index_3;
  store_1_index_3 = store_1.createIndex('str_4134', ['str_3720', 'str_8202', 'str_6605']);
  db.deleteObjectStore('str_2560')
  store_0.deleteIndex('str_2436')
  store_0.deleteIndex('str_5674')
  store_0.deleteIndex('str_3663')
  db.deleteObjectStore('str_3143')
  db.deleteObjectStore('str_4380')
  var store_2;
  store_2 = db.createObjectStore('str_9316', {'keyPath': 'str_3915', 'autoIncrement': false});
  var store_2_index_1;
  store_2_index_1 = store_0.createIndex('str_1749', 'str_8362', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_4416')
  var store_3;
  store_3 = db.createObjectStore('str_1905');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  const req_get_0 = store.get('fallback')
  const req_clear_1 = store.clear()
  const req_get_2 = store.get(42)
  const req_getKey_3 = store.getKey('fallback')
  const req_getKey_4 = store.getKey(true)
  const req_getKey_5 = store.getKey(42)
  const req_getAllKeys_6 = store.getAllKeys('fallback', 75)
  const req_openCursor_7 = store.openCursor(None)
  const req_getAllKeys_8 = store.getAllKeys(74)
  const req_put_9 = store.put(true)
  const req_delete_10 = store.delete(true)
  const req_delete_11 = store.delete(true)
  const req_getAll_12 = store.getAll(42)
  const req_getAll_13 = store.getAll()
  const req_put_14 = store.put(42, 'fallback')
  const req_openKeyCursor_15 = store.openKeyCursor(None, 'prev')
  const req_get_16 = store.get(true)
  const req_count_17 = store.count(true)
  const req_count_18 = store.count(42)
  const req_getAllKeys_19 = store.getAllKeys(42, 82)
  const req_put_20 = store.put(42)
  const req_getAllKeys_21 = store.getAllKeys('fallback', 3)
  const req_getAllKeys_22 = store.getAllKeys()
  const req_getAllKeys_23 = store.getAllKeys(42)
  const req_openKeyCursor_24 = store.openKeyCursor(None)
  const req_getAllKeys_25 = store.getAllKeys('fallback', 33)
  const req_delete_26 = store.delete(42)
  const req_delete_27 = store.delete(true)
  const req_count_28 = store.count()
  const req_getAllKeys_29 = store.getAllKeys(16)
  const req_openKeyCursor_30 = store.openKeyCursor('next')
  const req_put_31 = store.put('fallback')
  const req_getKey_32 = store.getKey(42)
  const req_getKey_33 = store.getKey('fallback')
  const req_getKey_34 = store.getKey('fallback')
  const req_getKey_35 = store.getKey('fallback')
  const req_getAll_36 = store.getAll(true)
  const req_count_37 = store.count(true)
  const req_openCursor_38 = store.openCursor()
  const req_delete_39 = store.delete('fallback')
  const req_getAll_40 = store.getAll('fallback')
  const req_getAll_41 = store.getAll(74)
  const req_openCursor_42 = store.openCursor(None, 'prev')
  const req_count_43 = store.count(true)
  const req_openKeyCursor_44 = store.openKeyCursor(None, 'next')
  const req_put_45 = store.put('fallback', 'fallback')
  const req_put_46 = store.put('fallback', 'fallback')
  const req_clear_47 = store.clear()
  const req_getAllKeys_48 = store.getAllKeys(true, 22)
  const req_count_49 = store.count()
  const req_count_50 = store.count()
  const req_getAllKeys_51 = store.getAllKeys(true, 44)
  const req_getAllKeys_52 = store.getAllKeys()
  const req_getAllKeys_53 = store.getAllKeys(1)
  const req_delete_54 = store.delete(true)
  const req_openKeyCursor_55 = store.openKeyCursor('prevunique')
  const req_getKey_56 = store.getKey(42)
  const req_add_57 = store.add(true, true)
  const req_add_58 = store.add('fallback', 42)
  const req_clear_59 = store.clear()
  const req_add_60 = store.add(true, 42)
  const req_openKeyCursor_61 = store.openKeyCursor()
  const req_getAllKeys_62 = store.getAllKeys(52)
  const req_openCursor_63 = store.openCursor()
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
const deleteRequest = indexedDB.deleteDatabase('str_9005')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
