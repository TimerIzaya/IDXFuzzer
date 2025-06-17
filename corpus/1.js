let db;
const openRequest = window.indexedDB.open('str_353')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_9487');
  var store_0_index_1 = store_0.createIndex('str_7631', ['str_1198']);
  store_0.deleteIndex('str_21')
  var store_0_index_2 = store_0.createIndex('str_1867', ['str_6302', 'str_9012', 'str_3542']);
  store_0.autoIncrement
  store_0.deleteIndex('str_9884')
  var store_0_index_3 = store_0.createIndex('str_1501', ['str_4062', 'str_7248', 'str_8040', 'str_2309']);
  store_0.deleteIndex('str_8254')
  var store_0_index_4 = store_0.createIndex('str_7535', 'str_2118', {'unique': false, 'multiEntry': true});
  var store_0_index_5 = store_0.createIndex('str_2289', ['str_7971', 'str_3077', 'str_4103']);
  var store_0_index_6 = store_0.createIndex('str_3709', 'str_1475', {'unique': false, 'multiEntry': false});
  var store_0_index_7 = store_0.createIndex('str_7162', ['str_2149', 'str_6379', 'str_5706', 'str_2684', 'str_5142']);
  var store_0_index_8 = store_0.createIndex('str_1640', 'str_9773');
  var store_0_index_9 = store_0.createIndex('str_9392', 'str_7866');
  var store_0_index_10 = store_0.createIndex('str_131', ['str_7927', 'str_7900']);
  store_0.deleteIndex('str_86')
  var store_0_index_11 = store_0.createIndex('str_6977', 'str_8223', {'unique': false, 'multiEntry': false});
  var store_0_index_12 = store_0.createIndex('str_5352', ['str_2354', 'str_4732'], {'unique': false, 'multiEntry': false});
  var store_0_index_13 = store_0.createIndex('str_7557', ['str_3654', 'str_2891', 'str_5291', 'str_1283', 'str_7482']);
  var store_0_index_14 = store_0.createIndex('str_4409', ['str_4863', 'str_4938']);
  var store_0_index_15 = store_0.createIndex('str_7541', ['str_212', 'str_8995'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_4851')
  var store_0_index_16 = store_0.createIndex('str_9644', 'str_4156');
  store_0.keyPath
  db.deleteObjectStore('str_8592')
  var store_0_index_17 = store_0.createIndex('str_8518', 'str_2536', {'unique': false, 'multiEntry': true});
  var store_0_index_18 = store_0.createIndex('str_412', ['str_7707']);
  var store_0_index_19 = store_0.createIndex('str_6509', ['str_3929']);
  var store_0_index_20 = store_0.createIndex('str_1851', 'str_1206', {'unique': false, 'multiEntry': true});
  store_0.indexNames
  db.deleteObjectStore('str_9299')
  var store_1 = db.createObjectStore('str_8687', {'keyPath': 'str_8220', 'autoIncrement': true});
  db.deleteObjectStore('str_3722')
  var store_2 = db.createObjectStore('str_5312', {'keyPath': ['str_4349', 'str_4499', 'str_1612'], 'autoIncrement': false});
  var store_3 = db.createObjectStore('str_4347');
  store_2.deleteIndex('str_9034')
  var store_3_index_1 = store_1.createIndex('str_5126', 'str_9317');
  var store_3_index_2 = store_0.createIndex('str_9429', ['str_2163', 'str_803', 'str_548', 'str_3009']);
  var store_3_index_3 = store_1.createIndex('str_1801', ['str_8135', 'str_9435', 'str_290', 'str_3265'], {'unique': true, 'multiEntry': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  var ret_openCursor_0 = store.openCursor(None);
  var ret_getAllKeys_1 = store.getAllKeys(49);
  var ret_put_2 = store.put(true);
  var ret_put_3 = store.put(true);
  var ret_put_4 = store.put(true);
  var ret_get_5 = store.get('fallback');
  var ret_count_6 = store.count();
  var ret_getKey_7 = store.getKey(42);
  var ret_get_8 = store.get('fallback');
  var ret_put_9 = store.put(true, 42);
  var ret_delete_10 = store.delete('fallback');
  var ret_count_11 = store.count('fallback');
  var ret_count_12 = store.count('fallback');
  var ret_delete_13 = store.delete('fallback');
  var ret_add_14 = store.add(42);
  var ret_openCursor_15 = store.openCursor(true, 'prevunique');
  var ret_get_16 = store.get(42);
  var ret_add_17 = store.add('fallback', true);
  var ret_delete_18 = store.delete(true);
  var ret_put_19 = store.put(42);
  var ret_add_20 = store.add(true, true);
  var ret_delete_21 = store.delete('fallback');
  var ret_getKey_22 = store.getKey('fallback');
  var ret_getKey_23 = store.getKey('fallback');
  var ret_getAllKeys_24 = store.getAllKeys('fallback');
  var ret_openKeyCursor_25 = store.openKeyCursor('prev');
  var ret_getAllKeys_26 = store.getAllKeys(42);
  var ret_getAllKeys_27 = store.getAllKeys();
  var ret_openKeyCursor_28 = store.openKeyCursor('prev');
  var ret_delete_29 = store.delete(42);
  var ret_count_30 = store.count(42);
  var ret_openKeyCursor_31 = store.openKeyCursor();
  var ret_add_32 = store.add('fallback');
  var ret_add_33 = store.add('fallback');
  var ret_delete_34 = store.delete(true);
  var ret_put_35 = store.put('fallback', 'fallback');
  var ret_get_36 = store.get(42);
  var ret_count_37 = store.count();
  var ret_delete_38 = store.delete(42);
  var ret_delete_39 = store.delete(true);
  var ret_openKeyCursor_40 = store.openKeyCursor('fallback');
  var ret_openKeyCursor_41 = store.openKeyCursor();
  var ret_put_42 = store.put(42);
  var ret_get_43 = store.get(true);
  var ret_openKeyCursor_44 = store.openKeyCursor('fallback');
  var ret_count_45 = store.count();
  var ret_getKey_46 = store.getKey('fallback');
  var ret_getKey_47 = store.getKey(42);
  var ret_openKeyCursor_48 = store.openKeyCursor(None);
  var ret_delete_49 = store.delete(true);
  var ret_count_50 = store.count(42);
  var ret_add_51 = store.add(42);
  var ret_get_52 = store.get(42);
  var ret_getAllKeys_53 = store.getAllKeys('fallback');
  var ret_getAllKeys_54 = store.getAllKeys('fallback');
  var ret_put_55 = store.put(true, 'fallback');
  var ret_openCursor_56 = store.openCursor(42, 'next');
  var ret_put_57 = store.put(42);
  var ret_delete_58 = store.delete('fallback');
  var ret_count_59 = store.count();
  var ret_add_60 = store.add('fallback');
  var ret_openCursor_61 = store.openCursor('nextunique');
  var ret_put_62 = store.put(42, 'fallback');
  var ret_put_63 = store.put('fallback');
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
const deleteRequest = indexedDB.deleteDatabase('str_353')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
