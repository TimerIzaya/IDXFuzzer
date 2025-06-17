let db;
const openRequest = window.indexedDB.open('str_9691', 2)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_6235');
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_839', ['str_5224', 'str_5883', 'str_5876'], {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_5114')
  var store_0_index_2;
  store_0_index_2 = store_0.createIndex('str_5589', ['str_4837', 'str_6838', 'str_4927', 'str_2571', 'str_5229']);
  store_0_index_2.multiEntry
  db.deleteObjectStore('str_1079')
  db.deleteObjectStore('str_2053')
  store_0_index_1.keyPath
  var store_0_index_3;
  store_0_index_3 = store_0.createIndex('str_1554', ['str_4834', 'str_4639', 'str_9410', 'str_1362'], {'unique': true, 'multiEntry': false});
  var store_1;
  store_1 = db.createObjectStore('str_2107');
  var store_1_index_1;
  store_1_index_1 = store_1.createIndex('str_5680', ['str_2918', 'str_2668'], {'unique': false, 'multiEntry': false});
  var store_1_index_2;
  store_1_index_2 = store_0.createIndex('str_484', ['str_418', 'str_4610']);
  store_1_index_1.unique
  var store_2;
  store_2 = db.createObjectStore('str_6473', {'keyPath': 'str_9801', 'autoIncrement': false});
  store_0.deleteIndex('str_2947')
  var store_2_index_1;
  store_2_index_1 = store_0.createIndex('str_9850', ['str_5261', 'str_2484', 'str_5740', 'str_4881', 'str_6355']);
  db.deleteObjectStore('str_289')
  var store_2_index_2;
  store_2_index_2 = store_1.createIndex('str_1082', ['str_6442'], {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_658')
  store_2.indexNames
  var store_3;
  store_3 = db.createObjectStore('str_4436', {'keyPath': 'str_2743', 'autoIncrement': false});
  var store_3_index_1;
  store_3_index_1 = store_0.createIndex('str_9261', 'str_8215');
  var store_3_index_2;
  store_3_index_2 = store_3.createIndex('str_2801', ['str_3209', 'str_5989', 'str_7887', 'str_4207'], {'unique': false, 'multiEntry': false});
  var store_3_index_3;
  store_3_index_3 = store_3.createIndex('str_7215', ['str_1062', 'str_2715', 'str_5650'], {'unique': false, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_1', 'readwrite')
  const store = txn.objectStore('store_1')
  const req_get_0 = store.get('fallback')
  const req_count_1 = store.count(true)
  const req_delete_2 = store.delete(42)
  const req_delete_3 = store.delete(42)
  const req_getKey_4 = store.getKey(42)
  const req_count_5 = store.count(42)
  const req_openKeyCursor_6 = store.openKeyCursor('prev')
  const req_delete_7 = store.delete(true)
  const req_get_8 = store.get('fallback')
  const req_getAllKeys_9 = store.getAllKeys(true)
  const req_getAllKeys_10 = store.getAllKeys('fallback')
  const req_openKeyCursor_11 = store.openKeyCursor(None, 'prevunique')
  const req_put_12 = store.put(true)
  const req_getAll_13 = store.getAll(true, 0)
  const req_openKeyCursor_14 = store.openKeyCursor('fallback')
  const req_delete_15 = store.delete(true)
  const req_count_16 = store.count()
  const req_openCursor_17 = store.openCursor(42)
  const req_delete_18 = store.delete(true)
  const req_count_19 = store.count('fallback')
  const req_getKey_20 = store.getKey(42)
  const req_getKey_21 = store.getKey('fallback')
  const req_getKey_22 = store.getKey(42)
  const req_getKey_23 = store.getKey(42)
  const req_count_24 = store.count()
  const req_getAll_25 = store.getAll(16)
  const req_count_26 = store.count('fallback')
  const req_openKeyCursor_27 = store.openKeyCursor(None)
  const req_get_28 = store.get(42)
  const req_count_29 = store.count()
  const req_openKeyCursor_30 = store.openKeyCursor(true)
  const req_openKeyCursor_31 = store.openKeyCursor()
  const req_put_32 = store.put(true)
  const req_clear_33 = store.clear()
  const req_clear_34 = store.clear()
  const req_get_35 = store.get(true)
  const req_count_36 = store.count(42)
  const req_openCursor_37 = store.openCursor(None)
  const req_openCursor_38 = store.openCursor('fallback', 'nextunique')
  const req_delete_39 = store.delete('fallback')
  const req_openCursor_40 = store.openCursor(None, 'next')
  const req_getAll_41 = store.getAll('fallback', 14)
  const req_clear_42 = store.clear()
  const req_add_43 = store.add(true)
  const req_delete_44 = store.delete(true)
  const req_count_45 = store.count(true)
  const req_openKeyCursor_46 = store.openKeyCursor('nextunique')
  const req_get_47 = store.get('fallback')
  const req_openCursor_48 = store.openCursor('fallback')
  const req_get_49 = store.get(true)
  const req_get_50 = store.get(true)
  const req_openKeyCursor_51 = store.openKeyCursor('prevunique')
  const req_put_52 = store.put(42, true)
  const req_add_53 = store.add(true, true)
  const req_delete_54 = store.delete(42)
  const req_openCursor_55 = store.openCursor()
  const req_put_56 = store.put(true)
  const req_delete_57 = store.delete(true)
  const req_delete_58 = store.delete(true)
  const req_put_59 = store.put(42)
  const req_put_60 = store.put(true)
  const req_getAll_61 = store.getAll(true)
  const req_getAll_62 = store.getAll()
  const req_add_63 = store.add('fallback')
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
const deleteRequest = indexedDB.deleteDatabase('str_9691')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
