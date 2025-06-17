let db;
const openRequest = window.indexedDB.open('str_3111', 56)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_6844', {'keyPath': ['str_3717'], 'autoIncrement': false});
  var store_0_index_1 = store_0.createIndex('str_1339', 'str_4993');
  var store_0_index_2 = store_0.createIndex('str_8447', 'str_1235', {'unique': true, 'multiEntry': true});
  var store_0_index_3 = store_0.createIndex('str_6962', ['str_1755', 'str_6058', 'str_4146'], {'unique': true, 'multiEntry': false});
  var store_0_index_4 = store_0.createIndex('str_924', ['str_3866', 'str_7897', 'str_6381'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_981')
  var store_1 = db.createObjectStore('str_5880');
  store_1.keyPath
  var store_1_index_1 = store_0.createIndex('str_5120', 'str_7044');
  var store_1_index_2 = store_0.createIndex('str_7275', ['str_121', 'str_8691', 'str_9551', 'str_8087', 'str_9641'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_7420')
  var store_1_index_3 = store_1.createIndex('str_8264', ['str_7133', 'str_9387']);
  db.deleteObjectStore('str_3122')
  var store_2 = db.createObjectStore('str_9206');
  store_0.deleteIndex('str_8300')
  var store_2_index_1 = store_1.createIndex('str_1687', 'str_8920', {'unique': false, 'multiEntry': true});
  var store_2_index_2 = store_2.createIndex('str_9555', ['str_3488', 'str_4870', 'str_2005', 'str_2906', 'str_9336']);
  store_2.deleteIndex('str_6894')
  var store_2_index_3 = store_0.createIndex('str_7665', ['str_5979', 'str_580', 'str_8393', 'str_4513', 'str_6210'], {'unique': true, 'multiEntry': false});
  store_0_index_3.keyPath
  store_2.deleteIndex('str_5699')
  var store_2_index_4 = store_2.createIndex('str_1366', 'str_9507', {'unique': false, 'multiEntry': true});
  store_1.deleteIndex('str_2220')
  var store_2_index_5 = store_0.createIndex('str_898', ['str_461', 'str_5593', 'str_7433', 'str_4447'], {'unique': false, 'multiEntry': false});
  var store_2_index_6 = store_2.createIndex('str_3012', 'str_519', {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_3741')
  store_1.deleteIndex('str_4569')
  store_1.deleteIndex('str_5147')
  store_1.deleteIndex('str_1292')
  store_1.deleteIndex('str_1406')
  store_2.deleteIndex('str_5657')
  db.deleteObjectStore('str_3114')
  var store_3 = db.createObjectStore('str_7963');
  store_0_index_1.keyPath
  store_3.deleteIndex('str_8708')
  store_0.deleteIndex('str_9358')
  var store_3_index_1 = store_1.createIndex('str_2784', ['str_8531', 'str_8635', 'str_8793'], {'unique': true, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_3', 'readwrite')
  const store = txn.objectStore('store_3')
  var ret_openCursor_0 = store.openCursor();
  var ret_openCursor_1 = store.openCursor('next');
  var ret_openCursor_2 = store.openCursor(None);
  var ret_delete_3 = store.delete(42);
  var ret_openCursor_4 = store.openCursor();
  var ret_getKey_5 = store.getKey('fallback');
  var ret_getAll_6 = store.getAll('fallback', 11);
  var ret_clear_7 = store.clear();
  var ret_getAllKeys_8 = store.getAllKeys(27);
  var ret_openCursor_9 = store.openCursor();
  var ret_delete_10 = store.delete(true);
  var ret_openKeyCursor_11 = store.openKeyCursor();
  var ret_openKeyCursor_12 = store.openKeyCursor(None);
  var ret_get_13 = store.get('fallback');
  var ret_count_14 = store.count();
  var ret_put_15 = store.put(true);
  var ret_delete_16 = store.delete(42);
  var ret_getAll_17 = store.getAll(true);
  var ret_add_18 = store.add(42, 'fallback');
  var ret_get_19 = store.get(42);
  var ret_getAll_20 = store.getAll(71);
  var ret_openKeyCursor_21 = store.openKeyCursor(None);
  var ret_get_22 = store.get(42);
  var ret_clear_23 = store.clear();
  var ret_add_24 = store.add(true);
  var ret_clear_25 = store.clear();
  var ret_add_26 = store.add(true);
  var ret_openCursor_27 = store.openCursor(None);
  var ret_getKey_28 = store.getKey(42);
  var ret_clear_29 = store.clear();
  var ret_put_30 = store.put(true);
  var ret_delete_31 = store.delete('fallback');
  var ret_clear_32 = store.clear();
  var ret_put_33 = store.put('fallback', 'fallback');
  var ret_count_34 = store.count(true);
  var ret_add_35 = store.add(true);
  var ret_get_36 = store.get('fallback');
  var ret_getAllKeys_37 = store.getAllKeys('fallback');
  var ret_clear_38 = store.clear();
  var ret_add_39 = store.add(42, 42);
  var ret_getAllKeys_40 = store.getAllKeys(42, 43);
  var ret_getAllKeys_41 = store.getAllKeys(true, 48);
  var ret_put_42 = store.put(true, 'fallback');
  var ret_delete_43 = store.delete('fallback');
  var ret_delete_44 = store.delete('fallback');
  var ret_put_45 = store.put(42);
  var ret_delete_46 = store.delete('fallback');
  var ret_getAllKeys_47 = store.getAllKeys(47);
  var ret_openKeyCursor_48 = store.openKeyCursor(true, 'prev');
  var ret_put_49 = store.put(true, true);
  var ret_count_50 = store.count();
  var ret_getAllKeys_51 = store.getAllKeys(true);
  var ret_clear_52 = store.clear();
  var ret_getAll_53 = store.getAll(37);
  var ret_openKeyCursor_54 = store.openKeyCursor('nextunique');
  var ret_delete_55 = store.delete('fallback');
  var ret_openKeyCursor_56 = store.openKeyCursor(true);
  var ret_getKey_57 = store.getKey(true);
  var ret_count_58 = store.count('fallback');
  var ret_add_59 = store.add(true);
  var ret_add_60 = store.add(true, 'fallback');
  var ret_get_61 = store.get('fallback');
  var ret_count_62 = store.count();
  var ret_getAll_63 = store.getAll(34);
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
const deleteRequest = indexedDB.deleteDatabase('str_3111')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
