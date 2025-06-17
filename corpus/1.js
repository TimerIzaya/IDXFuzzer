let db;
const openRequest = window.indexedDB.open('str_4844', 30)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_4250', {'keyPath': 'str_9329', 'autoIncrement': false});
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_1754', ['str_5208']);
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_7460', ['str_6765', 'str_1856', 'str_2144']);
  store_0.name
  store_0.deleteIndex('str_3726')
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_9034', ['str_6878', 'str_3369', 'str_7590', 'str_1189'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_6950')
  var store_0_index_4;
  store_0_index_4 = store_0.createIndex('str_1531', ['str_2634'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_6099')
  var store_1;
  store_1 = db.createObjectStore('str_9975');
  db.deleteObjectStore('str_4806')
  var store_1_index_1;
  store_1_index_1 = store_0.createIndex('str_4498', 'str_2539', {'unique': true, 'multiEntry': true});
  var store_1_index_2;
  store_1_index_2 = store_1.createIndex('str_4615', 'str_1559', {'unique': false, 'multiEntry': true});
  var store_1_index_3;
  store_1_index_3 = store_1.createIndex('str_9664', ['str_2027'], {'unique': false, 'multiEntry': false});
  var store_1_index_4;
  store_1_index_4 = store_0.createIndex('str_8364', ['str_9577', 'str_619'], {'unique': true, 'multiEntry': false});
  var store_1_index_5;
  store_1_index_5 = store_1.createIndex('str_145', ['str_6401', 'str_9293', 'str_3158', 'str_1749', 'str_7911']);
  db.deleteObjectStore('str_8680')
  var store_2;
  store_2 = db.createObjectStore('str_7938', {'keyPath': 'str_8422', 'autoIncrement': false});
  db.deleteObjectStore('str_3937')
  var store_3;
  store_3 = db.createObjectStore('str_4129');
  store_1_index_3.keyPath
  db.deleteObjectStore('str_878')
  var store_4;
  store_4 = db.createObjectStore('str_5091', {'keyPath': ['str_2732', 'str_9241', 'str_2371', 'str_555', 'str_2994'], 'autoIncrement': false});
  store_1_index_4.name
  db.deleteObjectStore('str_1290')
  var store_5;
  store_5 = db.createObjectStore('str_1813', {'keyPath': 'str_7659', 'autoIncrement': true});
  db.deleteObjectStore('str_6980')
  db.deleteObjectStore('str_139')
  db.deleteObjectStore('str_8839')
  var store_6;
  store_6 = db.createObjectStore('str_8128');
  var store_6_index_1;
  store_6_index_1 = store_1.createIndex('str_5416', ['str_7455', 'str_383', 'str_2042', 'str_6157'], {'unique': true, 'multiEntry': false});
  store_3.deleteIndex('str_317')
  var store_6_index_2;
  store_6_index_2 = store_2.createIndex('str_3666', ['str_2606', 'str_367', 'str_9290']);
  store_5.deleteIndex('str_5584')
  var store_6_index_3;
  store_6_index_3 = store_3.createIndex('str_7727', 'str_1856');
  var store_6_index_4;
  store_6_index_4 = store_1.createIndex('str_3871', 'str_3427');
  store_6.deleteIndex('str_9789')
  var store_6_index_5;
  store_6_index_5 = store_1.createIndex('str_9955', ['str_6857', 'str_9014', 'str_6517', 'str_7009', 'str_4575']);
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_5', 'readwrite')
  const store = txn.objectStore('store_5')
  const req_add_0 = store.add(42)
  const req_getKey_1 = store.getKey('fallback')
  const req_getKey_2 = store.getKey('fallback')
  const req_getKey_3 = store.getKey('fallback')
  const req_add_4 = store.add(true)
  const req_openCursor_5 = store.openCursor('prev')
  const req_delete_6 = store.delete(true)
  const req_delete_7 = store.delete(true)
  const req_getKey_8 = store.getKey(true)
  const req_add_9 = store.add('fallback', true)
  const req_openCursor_10 = store.openCursor(None)
  const req_openCursor_11 = store.openCursor('fallback', 'prevunique')
  const req_clear_12 = store.clear()
  const req_getAllKeys_13 = store.getAllKeys(42)
  const req_delete_14 = store.delete(true)
  const req_count_15 = store.count()
  const req_getKey_16 = store.getKey('fallback')
  const req_count_17 = store.count()
  const req_openKeyCursor_18 = store.openKeyCursor(None)
  const req_openKeyCursor_19 = store.openKeyCursor('fallback')
  const req_delete_20 = store.delete(42)
  const req_getAllKeys_21 = store.getAllKeys(true, 31)
  const req_put_22 = store.put('fallback', 42)
  const req_openCursor_23 = store.openCursor()
  const req_add_24 = store.add('fallback')
  const req_delete_25 = store.delete(true)
  const req_delete_26 = store.delete(true)
  const req_getAllKeys_27 = store.getAllKeys(true)
  const req_put_28 = store.put('fallback', 42)
  const req_getAllKeys_29 = store.getAllKeys()
  const req_getAllKeys_30 = store.getAllKeys()
  const req_add_31 = store.add('fallback', true)
  const req_openCursor_32 = store.openCursor(None)
  const req_openKeyCursor_33 = store.openKeyCursor()
  const req_put_34 = store.put(42, 'fallback')
  const req_add_35 = store.add(true)
  const req_get_36 = store.get('fallback')
  const req_count_37 = store.count(42)
  const req_openCursor_38 = store.openCursor('fallback', 'nextunique')
  const req_put_39 = store.put('fallback')
  const req_openKeyCursor_40 = store.openKeyCursor(42)
  const req_get_41 = store.get(42)
  const req_getAll_42 = store.getAll(true, 58)
  const req_getAll_43 = store.getAll(25)
  const req_getAll_44 = store.getAll(89)
  const req_getAll_45 = store.getAll()
  const req_getAll_46 = store.getAll(31)
  const req_openKeyCursor_47 = store.openKeyCursor()
  const req_getKey_48 = store.getKey(42)
  const req_getKey_49 = store.getKey(true)
  const req_add_50 = store.add('fallback')
  const req_delete_51 = store.delete('fallback')
  const req_delete_52 = store.delete(42)
  const req_getAll_53 = store.getAll()
  const req_count_54 = store.count(42)
  const req_add_55 = store.add(42)
  const req_get_56 = store.get(42)
  const req_getKey_57 = store.getKey(42)
  const req_getKey_58 = store.getKey('fallback')
  const req_clear_59 = store.clear()
  const req_clear_60 = store.clear()
  const req_getAll_61 = store.getAll(42, 66)
  const req_getAll_62 = store.getAll('fallback', 57)
  const req_put_63 = store.put(42, 42)
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
const deleteRequest = indexedDB.deleteDatabase('str_4844')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
