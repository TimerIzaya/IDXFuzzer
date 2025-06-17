let db;
const openRequest = window.indexedDB.open('str_7127', 9)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_4874');
  var store_0_index_1 = store_0.createIndex('str_8099', 'str_4114', {'unique': true, 'multiEntry': true});
  store_0.deleteIndex('str_3227')
  var store_0_index_2 = store_0.createIndex('str_8418', ['str_3250', 'str_3384', 'str_8092']);
  var store_0_index_3 = store_0.createIndex('str_5177', 'str_70');
  var store_0_index_4 = store_0.createIndex('str_3647', ['str_926'], {'unique': true, 'multiEntry': false});
  var store_0_index_5 = store_0.createIndex('str_650', 'str_1021', {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_6509')
  var store_1 = db.createObjectStore('str_7652');
  db.deleteObjectStore('str_7464')
  store_1.deleteIndex('str_3119')
  var store_1_index_1 = store_0.createIndex('str_4918', 'str_3334', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_7730')
  var store_2 = db.createObjectStore('str_499');
  db.deleteObjectStore('str_7755')
  store_2.deleteIndex('str_6774')
  var store_2_index_1 = store_1.createIndex('str_7737', 'str_9012');
  store_0.deleteIndex('str_7810')
  var store_2_index_2 = store_0.createIndex('str_8733', 'str_7021');
  var store_2_index_3 = store_2.createIndex('str_6286', 'str_3358');
  store_2.deleteIndex('str_3389')
  var store_2_index_4 = store_1.createIndex('str_3015', 'str_658');
  var store_2_index_5 = store_0.createIndex('str_5944', ['str_476', 'str_2530', 'str_8729', 'str_3848', 'str_7301']);
  var store_2_index_6 = store_1.createIndex('str_1494', 'str_9740', {'unique': true, 'multiEntry': false});
  var store_2_index_7 = store_1.createIndex('str_2434', 'str_3720');
  var store_2_index_8 = store_2.createIndex('str_2534', 'str_4547', {'unique': true, 'multiEntry': false});
  var store_2_index_9 = store_2.createIndex('str_4207', ['str_931'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_9795')
  var store_3 = db.createObjectStore('str_9875');
  db.deleteObjectStore('str_6521')
  var store_4 = db.createObjectStore('str_4757');
  store_0_index_3.unique
  var store_4_index_1 = store_2.createIndex('str_6571', 'str_8505', {'unique': true, 'multiEntry': false});
  store_3.deleteIndex('str_2004')
  var store_4_index_2 = store_1.createIndex('str_398', 'str_3640');
  store_2_index_3.keyPath
  store_4.autoIncrement
  store_0.deleteIndex('str_1722')
  var store_4_index_3 = store_3.createIndex('str_6812', ['str_4521']);
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_openKeyCursor_0 = store.openKeyCursor();
  var ret_put_1 = store.put('fallback');
  var ret_openCursor_2 = store.openCursor('nextunique');
  var ret_delete_3 = store.delete(42);
  var ret_delete_4 = store.delete(42);
  var ret_put_5 = store.put('fallback');
  var ret_get_6 = store.get(true);
  var ret_count_7 = store.count();
  var ret_getAllKeys_8 = store.getAllKeys(true, 72);
  var ret_put_9 = store.put('fallback', 'fallback');
  var ret_getKey_10 = store.getKey(42);
  var ret_delete_11 = store.delete('fallback');
  var ret_getAll_12 = store.getAll();
  var ret_add_13 = store.add(42);
  var ret_getKey_14 = store.getKey(true);
  var ret_openKeyCursor_15 = store.openKeyCursor(None, 'nextunique');
  var ret_delete_16 = store.delete(true);
  var ret_count_17 = store.count();
  var ret_count_18 = store.count();
  var ret_clear_19 = store.clear();
  var ret_put_20 = store.put('fallback');
  var ret_delete_21 = store.delete(true);
  var ret_openCursor_22 = store.openCursor();
  var ret_clear_23 = store.clear();
  var ret_getAllKeys_24 = store.getAllKeys('fallback');
  var ret_getAllKeys_25 = store.getAllKeys('fallback', 51);
  var ret_openKeyCursor_26 = store.openKeyCursor('prev');
  var ret_count_27 = store.count();
  var ret_add_28 = store.add(true, 42);
  var ret_delete_29 = store.delete(true);
  var ret_delete_30 = store.delete('fallback');
  var ret_count_31 = store.count();
  var ret_openCursor_32 = store.openCursor('fallback', 'nextunique');
  var ret_delete_33 = store.delete('fallback');
  var ret_openCursor_34 = store.openCursor();
  var ret_delete_35 = store.delete(42);
  var ret_count_36 = store.count();
  var ret_count_37 = store.count(42);
  var ret_delete_38 = store.delete(true);
  var ret_put_39 = store.put(42);
  var ret_delete_40 = store.delete(42);
  var ret_count_41 = store.count();
  var ret_getAll_42 = store.getAll(true);
  var ret_getAll_43 = store.getAll('fallback');
  var ret_getAll_44 = store.getAll('fallback');
  var ret_clear_45 = store.clear();
  var ret_add_46 = store.add('fallback');
  var ret_get_47 = store.get('fallback');
  var ret_clear_48 = store.clear();
  var ret_add_49 = store.add(true);
  var ret_getAll_50 = store.getAll(2);
  var ret_clear_51 = store.clear();
  var ret_add_52 = store.add(true);
  var ret_delete_53 = store.delete(42);
  var ret_count_54 = store.count();
  var ret_add_55 = store.add(42);
  var ret_get_56 = store.get('fallback');
  var ret_get_57 = store.get('fallback');
  var ret_openCursor_58 = store.openCursor('next');
  var ret_delete_59 = store.delete(true);
  var ret_openKeyCursor_60 = store.openKeyCursor('prev');
  var ret_openCursor_61 = store.openCursor(42, 'prevunique');
  var ret_openCursor_62 = store.openCursor('fallback', 'prev');
  var ret_get_63 = store.get(42);
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
const deleteRequest = indexedDB.deleteDatabase('str_7127')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
