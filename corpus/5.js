let db;
const openRequest = window.indexedDB.open('str_4742', 3)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_9338');
  var store_0_index_1 = store_0.createIndex('str_5168', ['str_1792', 'str_8531']);
  store_0.deleteIndex('str_3496')
  var store_0_index_2 = store_0.createIndex('str_6', 'str_9191', {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_1521')
  db.deleteObjectStore('str_5071')
  var store_1 = db.createObjectStore('str_8705', {'keyPath': 'str_1951', 'autoIncrement': true});
  var store_1_index_1 = store_0.createIndex('str_8152', ['str_2466', 'str_8646']);
  db.deleteObjectStore('str_9857')
  var store_2 = db.createObjectStore('str_5014', {'keyPath': 'str_422', 'autoIncrement': false});
  var store_2_index_1 = store_0.createIndex('str_5271', 'str_398', {'unique': true, 'multiEntry': true});
  var store_2_index_2 = store_2.createIndex('str_8677', 'str_7427', {'unique': false, 'multiEntry': false});
  var store_2_index_3 = store_2.createIndex('str_8433', ['str_9334', 'str_2280', 'str_350', 'str_9304']);
  var store_2_index_4 = store_0.createIndex('str_7177', 'str_9064');
  store_0.deleteIndex('str_6062')
  var store_2_index_5 = store_1.createIndex('str_8272', ['str_7003', 'str_3349', 'str_6824', 'str_1173', 'str_4505'], {'unique': false, 'multiEntry': false});
  var store_3 = db.createObjectStore('str_6505');
  store_0.deleteIndex('str_1223')
  var store_3_index_1 = store_0.createIndex('str_7504', 'str_6728');
  store_0.deleteIndex('str_6241')
  var store_3_index_2 = store_2.createIndex('str_8015', ['str_1833', 'str_2547', 'str_2447'], {'unique': true, 'multiEntry': false});
  store_2.deleteIndex('str_3035')
  var store_3_index_3 = store_0.createIndex('str_7933', ['str_6934']);
  store_1.deleteIndex('str_2397')
  var store_3_index_4 = store_0.createIndex('str_9633', ['str_5001']);
  store_2_index_3.multiEntry
  store_0.deleteIndex('str_5831')
  var store_3_index_5 = store_0.createIndex('str_4709', ['str_5284', 'str_4258', 'str_3813', 'str_9132', 'str_9085'], {'unique': false, 'multiEntry': false});
  var store_3_index_6 = store_0.createIndex('str_4448', 'str_5045', {'unique': true, 'multiEntry': true});
  db.deleteObjectStore('str_3843')
  var store_4 = db.createObjectStore('str_7467');
  db.deleteObjectStore('str_2047')
  var store_5 = db.createObjectStore('str_5352', {'keyPath': ['str_9543', 'str_3763'], 'autoIncrement': true});
  store_5.deleteIndex('str_1648')
  var store_5_index_1 = store_4.createIndex('str_6401', 'str_373', {'unique': false, 'multiEntry': true});
  store_3.deleteIndex('str_4218')
  var store_5_index_2 = store_4.createIndex('str_2408', 'str_7128', {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_6575')
  var store_6 = db.createObjectStore('str_8896', {'keyPath': 'str_1432', 'autoIncrement': false});
  store_2_index_3.multiEntry
  db.deleteObjectStore('str_8719')
  var store_7 = db.createObjectStore('str_6848');
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_6', 'readwrite')
  const store = txn.objectStore('store_6')
  var ret_count_0 = store.count();
  var ret_add_1 = store.add(42);
  var ret_get_2 = store.get('fallback');
  var ret_count_3 = store.count(true);
  var ret_getAll_4 = store.getAll(14);
  var ret_put_5 = store.put('fallback', 'fallback');
  var ret_get_6 = store.get('fallback');
  var ret_getAllKeys_7 = store.getAllKeys(99);
  var ret_getAll_8 = store.getAll(11);
  var ret_getAll_9 = store.getAll(42);
  var ret_getAll_10 = store.getAll(42);
  var ret_openCursor_11 = store.openCursor('prev');
  var ret_delete_12 = store.delete(true);
  var ret_count_13 = store.count(true);
  var ret_clear_14 = store.clear();
  var ret_put_15 = store.put('fallback', true);
  var ret_getKey_16 = store.getKey('fallback');
  var ret_getKey_17 = store.getKey(true);
  var ret_getKey_18 = store.getKey(42);
  var ret_getAll_19 = store.getAll(42);
  var ret_getAll_20 = store.getAll();
  var ret_add_21 = store.add(true);
  var ret_delete_22 = store.delete(true);
  var ret_openKeyCursor_23 = store.openKeyCursor('next');
  var ret_openCursor_24 = store.openCursor('prevunique');
  var ret_openCursor_25 = store.openCursor('next');
  var ret_openCursor_26 = store.openCursor('prevunique');
  var ret_delete_27 = store.delete('fallback');
  var ret_getAll_28 = store.getAll(true, 100);
  var ret_getAll_29 = store.getAll('fallback');
  var ret_getAll_30 = store.getAll(55);
  var ret_getAll_31 = store.getAll('fallback', 61);
  var ret_getKey_32 = store.getKey(true);
  var ret_getKey_33 = store.getKey(true);
  var ret_getAllKeys_34 = store.getAllKeys(true);
  var ret_getAllKeys_35 = store.getAllKeys(49);
  var ret_count_36 = store.count('fallback');
  var ret_getAllKeys_37 = store.getAllKeys('fallback');
  var ret_add_38 = store.add(42);
  var ret_add_39 = store.add(42);
  var ret_put_40 = store.put(true, 42);
  var ret_delete_41 = store.delete(42);
  var ret_getAllKeys_42 = store.getAllKeys(75);
  var ret_add_43 = store.add(42);
  var ret_add_44 = store.add(42);
  var ret_delete_45 = store.delete(42);
  var ret_getAllKeys_46 = store.getAllKeys();
  var ret_openCursor_47 = store.openCursor(None);
  var ret_delete_48 = store.delete(42);
  var ret_getKey_49 = store.getKey('fallback');
  var ret_getAll_50 = store.getAll('fallback', 43);
  var ret_getAll_51 = store.getAll(true);
  var ret_getAll_52 = store.getAll();
  var ret_getAll_53 = store.getAll(72);
  var ret_put_54 = store.put(42);
  var ret_get_55 = store.get(42);
  var ret_get_56 = store.get(true);
  var ret_put_57 = store.put(42);
  var ret_get_58 = store.get(true);
  var ret_get_59 = store.get(42);
  var ret_openKeyCursor_60 = store.openKeyCursor(None, 'nextunique');
  var ret_delete_61 = store.delete(42);
  var ret_openCursor_62 = store.openCursor('next');
  var ret_put_63 = store.put(true);
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
const deleteRequest = indexedDB.deleteDatabase('str_4742')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
