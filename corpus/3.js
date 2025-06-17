let db;
const openRequest = window.indexedDB.open('str_9004', 43)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_2425', {'keyPath': 'str_5295', 'autoIncrement': true});
  var store_0_index_1 = store_0.createIndex('str_9476', 'str_810');
  db.deleteObjectStore('str_8246')
  var store_1 = db.createObjectStore('str_5340');
  db.deleteObjectStore('str_1577')
  var store_2 = db.createObjectStore('str_3517');
  db.deleteObjectStore('str_5848')
  var store_3 = db.createObjectStore('str_5225');
  var store_4 = db.createObjectStore('str_2036', {'keyPath': ['str_1407', 'str_134', 'str_8894'], 'autoIncrement': false});
  db.deleteObjectStore('str_4338')
  var store_5 = db.createObjectStore('str_5500', {'keyPath': ['str_6797'], 'autoIncrement': false});
  store_3.deleteIndex('str_2696')
  var store_5_index_1 = store_4.createIndex('str_5446', 'str_1660', {'unique': true, 'multiEntry': true});
  store_2.deleteIndex('str_7550')
  var store_5_index_2 = store_2.createIndex('str_9159', ['str_7227'], {'unique': false, 'multiEntry': false});
  store_0.deleteIndex('str_245')
  var store_5_index_3 = store_1.createIndex('str_111', ['str_9425']);
  store_2.deleteIndex('str_3932')
  var store_5_index_4 = store_4.createIndex('str_5518', 'str_2662');
  store_0.deleteIndex('str_7734')
  var store_5_index_5 = store_5.createIndex('str_4218', 'str_1103');
  var store_5_index_6 = store_5.createIndex('str_9899', ['str_8658', 'str_5250', 'str_3572', 'str_2934', 'str_3382'], {'unique': true, 'multiEntry': false});
  store_3.deleteIndex('str_9138')
  var store_5_index_7 = store_4.createIndex('str_4603', 'str_4427');
  db.deleteObjectStore('str_681')
  db.deleteObjectStore('str_9784')
  db.deleteObjectStore('str_1160')
  var store_6 = db.createObjectStore('str_7309');
  db.deleteObjectStore('str_9377')
  var store_7 = db.createObjectStore('str_6739');
  store_0_index_1.keyPath
  db.deleteObjectStore('str_8459')
  var store_8 = db.createObjectStore('str_6293', {'keyPath': 'str_4122', 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_2', 'readwrite')
  const store = txn.objectStore('store_2')
  var ret_delete_0 = store.delete('fallback');
  var ret_openCursor_1 = store.openCursor(42);
  var ret_openCursor_2 = store.openCursor();
  var ret_put_3 = store.put('fallback');
  var ret_delete_4 = store.delete('fallback');
  var ret_getAllKeys_5 = store.getAllKeys();
  var ret_openCursor_6 = store.openCursor(None, 'prevunique');
  var ret_openCursor_7 = store.openCursor(42);
  var ret_getAll_8 = store.getAll(42);
  var ret_count_9 = store.count('fallback');
  var ret_getKey_10 = store.getKey('fallback');
  var ret_getAllKeys_11 = store.getAllKeys('fallback', 63);
  var ret_getAllKeys_12 = store.getAllKeys(74);
  var ret_clear_13 = store.clear();
  var ret_get_14 = store.get(true);
  var ret_getAll_15 = store.getAll(80);
  var ret_clear_16 = store.clear();
  var ret_getAll_17 = store.getAll(26);
  var ret_getAll_18 = store.getAll();
  var ret_getAll_19 = store.getAll(true);
  var ret_put_20 = store.put(true, 'fallback');
  var ret_openKeyCursor_21 = store.openKeyCursor(None);
  var ret_delete_22 = store.delete(42);
  var ret_count_23 = store.count(42);
  var ret_count_24 = store.count();
  var ret_put_25 = store.put(true, 42);
  var ret_openCursor_26 = store.openCursor(true, 'next');
  var ret_getKey_27 = store.getKey('fallback');
  var ret_getKey_28 = store.getKey('fallback');
  var ret_getKey_29 = store.getKey(42);
  var ret_count_30 = store.count();
  var ret_getAll_31 = store.getAll(42, 47);
  var ret_get_32 = store.get('fallback');
  var ret_get_33 = store.get(true);
  var ret_put_34 = store.put(true, 42);
  var ret_get_35 = store.get(true);
  var ret_add_36 = store.add(42);
  var ret_get_37 = store.get('fallback');
  var ret_get_38 = store.get('fallback');
  var ret_getAllKeys_39 = store.getAllKeys(22);
  var ret_openKeyCursor_40 = store.openKeyCursor(true);
  var ret_put_41 = store.put(true);
  var ret_delete_42 = store.delete('fallback');
  var ret_delete_43 = store.delete(42);
  var ret_openKeyCursor_44 = store.openKeyCursor('fallback');
  var ret_put_45 = store.put(42, true);
  var ret_get_46 = store.get('fallback');
  var ret_getAllKeys_47 = store.getAllKeys(true);
  var ret_put_48 = store.put(42, true);
  var ret_add_49 = store.add(42, true);
  var ret_getAllKeys_50 = store.getAllKeys('fallback', 37);
  var ret_delete_51 = store.delete('fallback');
  var ret_count_52 = store.count(42);
  var ret_count_53 = store.count(42);
  var ret_getKey_54 = store.getKey('fallback');
  var ret_getAll_55 = store.getAll(25);
  var ret_openCursor_56 = store.openCursor('nextunique');
  var ret_getKey_57 = store.getKey('fallback');
  var ret_getKey_58 = store.getKey(42);
  var ret_getKey_59 = store.getKey(42);
  var ret_getKey_60 = store.getKey(42);
  var ret_add_61 = store.add(42);
  var ret_getAll_62 = store.getAll(42);
  var ret_count_63 = store.count();
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
const deleteRequest = indexedDB.deleteDatabase('str_9004')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
