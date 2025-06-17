let db;
const openRequest = window.indexedDB.open('str_5163', 11)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_8019');
  var store_0_index_1 = store_0.createIndex('str_3011', ['str_2654', 'str_3280', 'str_7134', 'str_1048']);
  var store_1 = db.createObjectStore('str_3651', {'keyPath': 'str_9630', 'autoIncrement': true});
  db.deleteObjectStore('str_7629')
  var store_2 = db.createObjectStore('str_8928');
  store_1.deleteIndex('str_241')
  var store_2_index_1 = store_0.createIndex('str_5124', ['str_8907', 'str_2684', 'str_4331'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_8004')
  var store_3 = db.createObjectStore('str_7115', {'keyPath': ['str_3942', 'str_2', 'str_2074', 'str_3382'], 'autoIncrement': true});
  store_1.deleteIndex('str_6069')
  var store_3_index_1 = store_2.createIndex('str_1038', 'str_5295', {'unique': true, 'multiEntry': true});
  db.deleteObjectStore('str_6496')
  store_3.deleteIndex('str_2845')
  var store_3_index_2 = store_0.createIndex('str_9586', ['str_4951', 'str_253', 'str_231'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_2238')
  var store_4 = db.createObjectStore('str_9859');
  var store_4_index_1 = store_0.createIndex('str_6757', ['str_2816']);
  db.deleteObjectStore('str_336')
  var store_5 = db.createObjectStore('str_4825');
  var store_5_index_1 = store_0.createIndex('str_3104', 'str_5820');
  var store_5_index_2 = store_1.createIndex('str_254', ['str_9834', 'str_3065'], {'unique': true, 'multiEntry': false});
  var store_5_index_3 = store_4.createIndex('str_7969', ['str_2971', 'str_9364', 'str_8489', 'str_3110'], {'unique': false, 'multiEntry': false});
  var store_5_index_4 = store_4.createIndex('str_7429', 'str_6095', {'unique': false, 'multiEntry': false});
  store_0.indexNames
  store_4.deleteIndex('str_7971')
  var store_5_index_5 = store_2.createIndex('str_7243', 'str_3098', {'unique': true, 'multiEntry': false});
  var store_5_index_6 = store_0.createIndex('str_9538', ['str_9237', 'str_8946', 'str_1017', 'str_3578', 'str_2735'], {'unique': false, 'multiEntry': false});
  var store_6 = db.createObjectStore('str_5022');
  db.deleteObjectStore('str_780')
  store_4.autoIncrement
  db.deleteObjectStore('str_2496')
  var store_7 = db.createObjectStore('str_3917', {'keyPath': ['str_7054'], 'autoIncrement': false});
  store_0.deleteIndex('str_3570')
  var store_7_index_1 = store_3.createIndex('str_3546', ['str_4720', 'str_4133', 'str_273', 'str_195', 'str_936']);
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_4', 'readwrite')
  const store = txn.objectStore('store_4')
  var ret_delete_0 = store.delete('fallback');
  var ret_count_1 = store.count();
  var ret_clear_2 = store.clear();
  var ret_get_3 = store.get(42);
  var ret_openKeyCursor_4 = store.openKeyCursor(None, 'prevunique');
  var ret_clear_5 = store.clear();
  var ret_put_6 = store.put('fallback', true);
  var ret_delete_7 = store.delete(42);
  var ret_get_8 = store.get(42);
  var ret_clear_9 = store.clear();
  var ret_getAllKeys_10 = store.getAllKeys(2);
  var ret_clear_11 = store.clear();
  var ret_add_12 = store.add(true, 42);
  var ret_count_13 = store.count('fallback');
  var ret_openKeyCursor_14 = store.openKeyCursor('fallback', 'prevunique');
  var ret_openKeyCursor_15 = store.openKeyCursor();
  var ret_put_16 = store.put('fallback', true);
  var ret_delete_17 = store.delete(true);
  var ret_clear_18 = store.clear();
  var ret_clear_19 = store.clear();
  var ret_put_20 = store.put('fallback', 'fallback');
  var ret_put_21 = store.put('fallback', 'fallback');
  var ret_add_22 = store.add(true);
  var ret_openKeyCursor_23 = store.openKeyCursor();
  var ret_get_24 = store.get(42);
  var ret_getAll_25 = store.getAll();
  var ret_add_26 = store.add(42);
  var ret_getAll_27 = store.getAll();
  var ret_put_28 = store.put(true);
  var ret_put_29 = store.put('fallback', true);
  var ret_getAll_30 = store.getAll();
  var ret_clear_31 = store.clear();
  var ret_count_32 = store.count();
  var ret_openCursor_33 = store.openCursor(None);
  var ret_getAll_34 = store.getAll(76);
  var ret_getAll_35 = store.getAll('fallback', 52);
  var ret_count_36 = store.count(true);
  var ret_getKey_37 = store.getKey(42);
  var ret_getKey_38 = store.getKey(true);
  var ret_getKey_39 = store.getKey(42);
  var ret_delete_40 = store.delete(42);
  var ret_getAll_41 = store.getAll();
  var ret_getAll_42 = store.getAll(true);
  var ret_put_43 = store.put('fallback', true);
  var ret_getAll_44 = store.getAll('fallback');
  var ret_getAll_45 = store.getAll(87);
  var ret_openKeyCursor_46 = store.openKeyCursor(42);
  var ret_delete_47 = store.delete('fallback');
  var ret_getAllKeys_48 = store.getAllKeys('fallback');
  var ret_count_49 = store.count(true);
  var ret_openCursor_50 = store.openCursor(None);
  var ret_delete_51 = store.delete(true);
  var ret_delete_52 = store.delete(42);
  var ret_count_53 = store.count(true);
  var ret_getAllKeys_54 = store.getAllKeys();
  var ret_getAllKeys_55 = store.getAllKeys('fallback', 8);
  var ret_put_56 = store.put('fallback');
  var ret_openCursor_57 = store.openCursor('prev');
  var ret_getAll_58 = store.getAll(42, 40);
  var ret_openCursor_59 = store.openCursor('nextunique');
  var ret_delete_60 = store.delete(true);
  var ret_getAll_61 = store.getAll(100);
  var ret_delete_62 = store.delete(true);
  var ret_getAllKeys_63 = store.getAllKeys();
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
const deleteRequest = indexedDB.deleteDatabase('str_5163')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
