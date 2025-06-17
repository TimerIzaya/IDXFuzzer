let db;
const openRequest = window.indexedDB.open('str_2070', 8)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_331');
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_7189', 'str_5930');
  var store_1;
  store_1 = db.createObjectStore('str_1114', {'keyPath': ['str_7727', 'str_5683', 'str_5912', 'str_6895'], 'autoIncrement': false});
  store_0.autoIncrement
  store_0_index_1.multiEntry
  var store_2;
  store_2 = db.createObjectStore('str_2439');
  store_0_index_1.keyPath
  store_0.deleteIndex('str_2683')
  var store_2_index_1;
  store_2_index_1 = store_0.createIndex('str_5362', 'str_9234');
  db.deleteObjectStore('str_9011')
  store_2.deleteIndex('str_3644')
  var store_2_index_2;
  store_2_index_2 = store_0.createIndex('str_8310', ['str_3829', 'str_141'], {'unique': false, 'multiEntry': false});
  var store_2_index_3;
  store_2_index_3 = store_1.createIndex('str_6765', 'str_7792', {'unique': false, 'multiEntry': false});
  var store_2_index_4;
  store_2_index_4 = store_2.createIndex('str_5732', ['str_2500', 'str_1071', 'str_421', 'str_4523']);
  var store_2_index_5;
  store_2_index_5 = store_1.createIndex('str_9782', ['str_3666']);
  store_0.deleteIndex('str_78')
  var store_2_index_6;
  store_2_index_6 = store_2.createIndex('str_8943', 'str_2482');
  db.deleteObjectStore('str_732')
  var store_3;
  store_3 = db.createObjectStore('str_8147', {'keyPath': 'str_7532', 'autoIncrement': true});
  db.deleteObjectStore('str_4121')
  db.deleteObjectStore('str_9554')
  var store_4;
  store_4 = db.createObjectStore('str_5710', {'keyPath': ['str_7752'], 'autoIncrement': false});
  var store_4_index_1;
  store_4_index_1 = store_0.createIndex('str_3453', ['str_9697', 'str_4685'], {'unique': false, 'multiEntry': false});
  store_3.deleteIndex('str_5661')
  var store_4_index_2;
  store_4_index_2 = store_0.createIndex('str_7813', 'str_6510');
  db.deleteObjectStore('str_9573')
  var store_5;
  store_5 = db.createObjectStore('str_7107');
  db.deleteObjectStore('str_3035')
  var store_6;
  store_6 = db.createObjectStore('str_5314', {'keyPath': ['str_6143', 'str_7098', 'str_9156', 'str_2608', 'str_3037'], 'autoIncrement': true});
  var store_6_index_1;
  store_6_index_1 = store_1.createIndex('str_4480', ['str_8767', 'str_823', 'str_8320', 'str_5782', 'str_8190'], {'unique': true, 'multiEntry': false});
  store_2_index_3.unique
  store_0.deleteIndex('str_125')
  var store_6_index_2;
  store_6_index_2 = store_2.createIndex('str_5482', ['str_5896', 'str_5226'], {'unique': true, 'multiEntry': false});
  var store_7;
  store_7 = db.createObjectStore('str_3994');
  store_2.deleteIndex('str_5967')
  var store_7_index_1;
  store_7_index_1 = store_2.createIndex('str_1050', 'str_5933', {'unique': true, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  const req_getKey_0 = store.getKey(true)
  const req_getKey_1 = store.getKey(42)
  const req_getKey_2 = store.getKey(true)
  const req_getAllKeys_3 = store.getAllKeys()
  const req_getAllKeys_4 = store.getAllKeys(42)
  const req_clear_5 = store.clear()
  const req_get_6 = store.get(42)
  const req_get_7 = store.get(42)
  const req_count_8 = store.count(42)
  const req_getAll_9 = store.getAll('fallback', 23)
  const req_openKeyCursor_10 = store.openKeyCursor()
  const req_getAll_11 = store.getAll(true)
  const req_openKeyCursor_12 = store.openKeyCursor('prevunique')
  const req_delete_13 = store.delete(true)
  const req_count_14 = store.count(true)
  const req_put_15 = store.put(true)
  const req_getAll_16 = store.getAll(99)
  const req_getAll_17 = store.getAll()
  const req_put_18 = store.put(true)
  const req_openCursor_19 = store.openCursor(None)
  const req_delete_20 = store.delete(42)
  const req_count_21 = store.count(42)
  const req_delete_22 = store.delete('fallback')
  const req_count_23 = store.count()
  const req_getKey_24 = store.getKey('fallback')
  const req_delete_25 = store.delete(true)
  const req_add_26 = store.add(true, 42)
  const req_add_27 = store.add(42, 'fallback')
  const req_get_28 = store.get('fallback')
  const req_get_29 = store.get('fallback')
  const req_get_30 = store.get(42)
  const req_getAll_31 = store.getAll('fallback', 71)
  const req_openKeyCursor_32 = store.openKeyCursor(None)
  const req_delete_33 = store.delete(true)
  const req_getAllKeys_34 = store.getAllKeys()
  const req_delete_35 = store.delete(42)
  const req_add_36 = store.add('fallback', 'fallback')
  const req_getKey_37 = store.getKey(true)
  const req_delete_38 = store.delete(42)
  const req_delete_39 = store.delete(42)
  const req_getKey_40 = store.getKey(42)
  const req_getAllKeys_41 = store.getAllKeys()
  const req_getAllKeys_42 = store.getAllKeys('fallback', 92)
  const req_getAllKeys_43 = store.getAllKeys()
  const req_delete_44 = store.delete(42)
  const req_getAllKeys_45 = store.getAllKeys(63)
  const req_getAllKeys_46 = store.getAllKeys(42)
  const req_clear_47 = store.clear()
  const req_count_48 = store.count()
  const req_clear_49 = store.clear()
  const req_put_50 = store.put(true)
  const req_getAll_51 = store.getAll()
  const req_put_52 = store.put(42)
  const req_openCursor_53 = store.openCursor('prev')
  const req_getKey_54 = store.getKey(42)
  const req_openKeyCursor_55 = store.openKeyCursor('next')
  const req_getKey_56 = store.getKey(true)
  const req_openCursor_57 = store.openCursor()
  const req_delete_58 = store.delete(true)
  const req_getKey_59 = store.getKey('fallback')
  const req_getKey_60 = store.getKey(true)
  const req_getKey_61 = store.getKey(true)
  const req_getKey_62 = store.getKey(42)
  const req_getKey_63 = store.getKey('fallback')
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
const deleteRequest = indexedDB.deleteDatabase('str_2070')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
