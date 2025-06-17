let db;
const openRequest = window.indexedDB.open('str_7593')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('str_5452', {'keyPath': 'str_8085', 'autoIncrement': false});
  var store_0_index_1 = store_0.createIndex('str_8044', ['str_6480'], {'unique': true, 'multiEntry': false});
  store_0.deleteIndex('str_6288')
  var store_0_index_2 = store_0.createIndex('str_5941', ['str_4259', 'str_5875', 'str_3956', 'str_59']);
  var store_0_index_3 = store_0.createIndex('str_8732', ['str_4580', 'str_4293', 'str_7907']);
  var store_0_index_4 = store_0.createIndex('str_5101', 'str_6338');
  db.deleteObjectStore('str_1564')
  var store_1 = db.createObjectStore('str_9650');
  var store_1_index_1 = store_1.createIndex('str_6586', 'str_8932', {'unique': true, 'multiEntry': true});
  var store_1_index_2 = store_1.createIndex('str_4386', 'str_107');
  var store_1_index_3 = store_1.createIndex('str_3856', 'str_7422');
  var store_1_index_4 = store_0.createIndex('str_393', 'str_2099', {'unique': false, 'multiEntry': true});
  var store_1_index_5 = store_1.createIndex('str_796', 'str_535');
  db.deleteObjectStore('str_8244')
  db.deleteObjectStore('str_4325')
  var store_2 = db.createObjectStore('str_1669');
  var store_2_index_1 = store_2.createIndex('str_4376', 'str_878', {'unique': true, 'multiEntry': true});
  var store_2_index_2 = store_2.createIndex('str_2709', ['str_6547', 'str_2207', 'str_7086', 'str_7114', 'str_3736'], {'unique': false, 'multiEntry': false});
  var store_2_index_3 = store_0.createIndex('str_5932', ['str_1593', 'str_5333', 'str_6296']);
  var store_2_index_4 = store_1.createIndex('str_7694', ['str_1096']);
  var store_2_index_5 = store_1.createIndex('str_9454', ['str_2587', 'str_13', 'str_1438'], {'unique': false, 'multiEntry': false});
  store_2_index_1.unique
  var store_2_index_6 = store_1.createIndex('str_3845', ['str_1257', 'str_9540', 'str_3795', 'str_3190']);
  store_1.deleteIndex('str_1943')
  store_2.deleteIndex('str_1285')
  store_1.deleteIndex('str_2126')
  store_1.deleteIndex('str_5376')
  store_0.deleteIndex('str_5611')
  store_1.deleteIndex('str_8424')
  db.deleteObjectStore('str_652')
  var store_3 = db.createObjectStore('str_5261');
  var store_3_index_1 = store_1.createIndex('str_7882', 'str_4295');
  var store_3_index_2 = store_2.createIndex('str_8053', ['str_2776']);
  store_2.keyPath
  var store_3_index_3 = store_0.createIndex('str_661', ['str_538'], {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_5868')
  store_3.deleteIndex('str_6652')
  var store_3_index_4 = store_0.createIndex('str_4523', 'str_4578');
  db.deleteObjectStore('str_5083')
  var store_4 = db.createObjectStore('str_7563', {'keyPath': 'str_7124', 'autoIncrement': false});
  var store_4_index_1 = store_1.createIndex('str_8554', 'str_4445');
  var store_4_index_2 = store_1.createIndex('str_5225', 'str_2510', {'unique': true, 'multiEntry': false});
  var store_4_index_3 = store_3.createIndex('str_7539', 'str_2319');
  var store_4_index_4 = store_1.createIndex('str_4662', 'str_5242', {'unique': true, 'multiEntry': false});
  var store_4_index_5 = store_0.createIndex('str_8719', ['str_1766', 'str_4798', 'str_5889', 'str_3106']);
  db.deleteObjectStore('str_5194')
  db.deleteObjectStore('str_7079')
  var store_5 = db.createObjectStore('str_7774', {'keyPath': 'str_3610', 'autoIncrement': false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_0', 'readwrite')
  const store = txn.objectStore('store_0')
  var ret_openKeyCursor_0 = store.openKeyCursor('next');
  var ret_openCursor_1 = store.openCursor('prev');
  var ret_delete_2 = store.delete('fallback');
  var ret_count_3 = store.count(true);
  var ret_getKey_4 = store.getKey('fallback');
  var ret_getKey_5 = store.getKey(true);
  var ret_count_6 = store.count(true);
  var ret_openCursor_7 = store.openCursor(None);
  var ret_openCursor_8 = store.openCursor(None);
  var ret_put_9 = store.put('fallback', 'fallback');
  var ret_get_10 = store.get('fallback');
  var ret_getAll_11 = store.getAll(34);
  var ret_count_12 = store.count();
  var ret_openCursor_13 = store.openCursor(None);
  var ret_openCursor_14 = store.openCursor(true);
  var ret_openKeyCursor_15 = store.openKeyCursor(42);
  var ret_count_16 = store.count(true);
  var ret_put_17 = store.put(true);
  var ret_put_18 = store.put(true, 42);
  var ret_put_19 = store.put(42, 42);
  var ret_put_20 = store.put(42);
  var ret_get_21 = store.get('fallback');
  var ret_openCursor_22 = store.openCursor(None, 'nextunique');
  var ret_getAll_23 = store.getAll(10);
  var ret_openCursor_24 = store.openCursor(true, 'nextunique');
  var ret_openCursor_25 = store.openCursor('next');
  var ret_delete_26 = store.delete('fallback');
  var ret_count_27 = store.count(42);
  var ret_getAllKeys_28 = store.getAllKeys(42, 36);
  var ret_openKeyCursor_29 = store.openKeyCursor();
  var ret_delete_30 = store.delete(42);
  var ret_getKey_31 = store.getKey(42);
  var ret_getKey_32 = store.getKey(42);
  var ret_getKey_33 = store.getKey(true);
  var ret_count_34 = store.count();
  var ret_getAllKeys_35 = store.getAllKeys('fallback');
  var ret_getAllKeys_36 = store.getAllKeys();
  var ret_getAllKeys_37 = store.getAllKeys();
  var ret_add_38 = store.add(true, true);
  var ret_delete_39 = store.delete(42);
  var ret_getAll_40 = store.getAll(42);
  var ret_clear_41 = store.clear();
  var ret_add_42 = store.add('fallback');
  var ret_get_43 = store.get('fallback');
  var ret_openCursor_44 = store.openCursor();
  var ret_openCursor_45 = store.openCursor('fallback', 'prev');
  var ret_delete_46 = store.delete(true);
  var ret_count_47 = store.count('fallback');
  var ret_getAll_48 = store.getAll();
  var ret_count_49 = store.count();
  var ret_count_50 = store.count();
  var ret_getAllKeys_51 = store.getAllKeys('fallback');
  var ret_openKeyCursor_52 = store.openKeyCursor();
  var ret_getAll_53 = store.getAll();
  var ret_clear_54 = store.clear();
  var ret_add_55 = store.add(42, 42);
  var ret_getKey_56 = store.getKey('fallback');
  var ret_getAllKeys_57 = store.getAllKeys(48);
  var ret_clear_58 = store.clear();
  var ret_put_59 = store.put(true, 42);
  var ret_get_60 = store.get('fallback');
  var ret_put_61 = store.put(42, true);
  var ret_get_62 = store.get('fallback');
  var ret_clear_63 = store.clear();
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
const deleteRequest = indexedDB.deleteDatabase('str_7593')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
