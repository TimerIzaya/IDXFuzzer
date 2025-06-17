let db;
const openRequest = window.indexedDB.open('str_5005', 23)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_1716', {'keyPath': 'str_7775', 'autoIncrement': true});
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_8722', 'str_5716', {'unique': true, 'multiEntry': true});
  store_0.indexNames
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_5276', 'str_8030');
  db.deleteObjectStore('str_5737')
  var store_1;
  store_1 = db.createObjectStore('str_3647');
  store_0.deleteIndex('str_7749')
  var store_1_index_1;
  store_1_index_1 = store_0.createIndex('str_319', 'str_8895');
  var store_2;
  store_2 = db.createObjectStore('str_5637', {'keyPath': ['str_1541', 'str_243', 'str_8767', 'str_28', 'str_3348'], 'autoIncrement': true});
  db.deleteObjectStore('str_5047')
  store_0.deleteIndex('str_4172')
  var store_2_index_1;
  store_2_index_1 = store_2.createIndex('str_1019', ['str_2186', 'str_9605'], {'unique': false, 'multiEntry': false});
  store_2.deleteIndex('str_1413')
  store_2.keyPath
  store_0.deleteIndex('str_5506')
  var store_2_index_2;
  store_2_index_2 = store_1.createIndex('str_4920', ['str_884', 'str_2716', 'str_7216', 'str_5618', 'str_5413'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_2681')
  var store_2_index_3;
  store_2_index_3 = store_2.createIndex('str_5886', 'str_2279', {'unique': true, 'multiEntry': false});
  var store_2_index_4;
  store_2_index_4 = store_2.createIndex('str_4455', 'str_9757');
  var store_2_index_5;
  store_2_index_5 = store_0.createIndex('str_4446', 'str_606', {'unique': false, 'multiEntry': false});
  var store_2_index_6;
  store_2_index_6 = store_1.createIndex('str_1154', 'str_3593');
  var store_2_index_7;
  store_2_index_7 = store_0.createIndex('str_6405', ['str_9886', 'str_9769', 'str_6269', 'str_3964', 'str_3585'], {'unique': true, 'multiEntry': false});
  store_2_index_2.name
  store_2.deleteIndex('str_8616')
  var store_2_index_8;
  store_2_index_8 = store_0.createIndex('str_7913', ['str_8803', 'str_3265', 'str_9702', 'str_4902']);
  db.deleteObjectStore('str_6947')
  db.deleteObjectStore('str_8935')
  store_2.deleteIndex('str_443')
  store_1_index_1.multiEntry
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_0', 'readwrite')
  const store = txn.objectStore('store_0')
  const req_clear_0 = store.clear()
  const req_get_1 = store.get(true)
  const req_openCursor_2 = store.openCursor(None, 'prevunique')
  const req_get_3 = store.get(42)
  const req_get_4 = store.get(true)
  const req_put_5 = store.put('fallback', true)
  const req_get_6 = store.get(true)
  const req_delete_7 = store.delete(true)
  const req_count_8 = store.count()
  const req_getAllKeys_9 = store.getAllKeys()
  const req_openKeyCursor_10 = store.openKeyCursor('nextunique')
  const req_put_11 = store.put('fallback')
  const req_getKey_12 = store.getKey(true)
  const req_getKey_13 = store.getKey('fallback')
  const req_delete_14 = store.delete('fallback')
  const req_count_15 = store.count('fallback')
  const req_clear_16 = store.clear()
  const req_getKey_17 = store.getKey(42)
  const req_getKey_18 = store.getKey(true)
  const req_openCursor_19 = store.openCursor()
  const req_count_20 = store.count('fallback')
  const req_getAll_21 = store.getAll(45)
  const req_clear_22 = store.clear()
  const req_count_23 = store.count('fallback')
  const req_count_24 = store.count()
  const req_clear_25 = store.clear()
  const req_put_26 = store.put('fallback', 42)
  const req_openKeyCursor_27 = store.openKeyCursor(None)
  const req_getAll_28 = store.getAll()
  const req_openKeyCursor_29 = store.openKeyCursor(None, 'prev')
  const req_getKey_30 = store.getKey(42)
  const req_openCursor_31 = store.openCursor(None)
  const req_add_32 = store.add(true)
  const req_openKeyCursor_33 = store.openKeyCursor('prevunique')
  const req_getAll_34 = store.getAll(true, 32)
  const req_getAll_35 = store.getAll(42, 42)
  const req_openKeyCursor_36 = store.openKeyCursor('next')
  const req_delete_37 = store.delete('fallback')
  const req_getAll_38 = store.getAll('fallback', 60)
  const req_put_39 = store.put(42)
  const req_add_40 = store.add('fallback')
  const req_clear_41 = store.clear()
  const req_clear_42 = store.clear()
  const req_get_43 = store.get(true)
  const req_count_44 = store.count()
  const req_getKey_45 = store.getKey(true)
  const req_add_46 = store.add('fallback', 42)
  const req_clear_47 = store.clear()
  const req_openCursor_48 = store.openCursor()
  const req_openCursor_49 = store.openCursor(None, 'prevunique')
  const req_delete_50 = store.delete(42)
  const req_delete_51 = store.delete('fallback')
  const req_count_52 = store.count()
  const req_count_53 = store.count()
  const req_add_54 = store.add(true, 'fallback')
  const req_openCursor_55 = store.openCursor()
  const req_get_56 = store.get('fallback')
  const req_put_57 = store.put(42)
  const req_put_58 = store.put(true, 'fallback')
  const req_getAll_59 = store.getAll(42)
  const req_count_60 = store.count(true)
  const req_clear_61 = store.clear()
  const req_clear_62 = store.clear()
  const req_put_63 = store.put(42, true)
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
const deleteRequest = indexedDB.deleteDatabase('str_5005')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
