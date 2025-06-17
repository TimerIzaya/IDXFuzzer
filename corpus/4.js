let db;
const openRequest = window.indexedDB.open('str_715', 5)
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0;
  store_0 = db.createObjectStore('str_3069', {'keyPath': 'str_5184', 'autoIncrement': true});
  var store_0_index_1;
  store_0_index_1 = store_0.createIndex('str_3504', 'str_7868', {'unique': true, 'multiEntry': false});
  db.deleteObjectStore('str_5072')
  db.deleteObjectStore('str_6982')
  db.deleteObjectStore('str_9007')
  var store_1;
  store_1 = db.createObjectStore('str_7932');
  var store_2;
  store_2 = db.createObjectStore('str_3573', {'keyPath': ['str_4174', 'str_4161', 'str_8548', 'str_5083', 'str_60'], 'autoIncrement': false});
  store_1.deleteIndex('str_5033')
  var store_2_index_1;
  store_2_index_1 = store_0.createIndex('str_7169', 'str_3427', {'unique': true, 'multiEntry': true});
  var store_2_index_2;
  store_2_index_2 = store_1.createIndex('str_8806', ['str_9978', 'str_3780', 'str_1485'], {'unique': false, 'multiEntry': false});
  var store_2_index_3;
  store_2_index_3 = store_1.createIndex('str_2710', ['str_3972', 'str_2011', 'str_3700']);
  var store_3;
  store_3 = db.createObjectStore('str_7156', {'keyPath': 'str_1295', 'autoIncrement': true});
  db.deleteObjectStore('str_8720')
  var store_4;
  store_4 = db.createObjectStore('str_4429', {'keyPath': ['str_2896', 'str_1385', 'str_7678', 'str_4503', 'str_1045'], 'autoIncrement': false});
  var store_5;
  store_5 = db.createObjectStore('str_2296');
  db.deleteObjectStore('str_3927')
  var store_6;
  store_6 = db.createObjectStore('str_9950', {'keyPath': 'str_7485', 'autoIncrement': false});
  db.deleteObjectStore('str_276')
  var store_6_index_1;
  store_6_index_1 = store_6.createIndex('str_651', ['str_3851', 'str_5861', 'str_1350', 'str_4007', 'str_1399']);
  var store_6_index_2;
  store_6_index_2 = store_2.createIndex('str_7957', ['str_8345'], {'unique': false, 'multiEntry': false});
  db.deleteObjectStore('str_3635')
  var store_7;
  store_7 = db.createObjectStore('str_6922');
  store_6.deleteIndex('str_395')
  var store_7_index_1;
  store_7_index_1 = store_3.createIndex('str_6770', 'str_7465', {'unique': true, 'multiEntry': true});
  store_2.keyPath
  store_6.indexNames
  db.deleteObjectStore('str_5452')
  var store_8;
  store_8 = db.createObjectStore('str_6991');
  store_6_index_1.unique
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
  const txn = db.transaction('store_8', 'readwrite')
  const store = txn.objectStore('store_8')
  const req_getAllKeys_0 = store.getAllKeys(true, 85)
  const req_clear_1 = store.clear()
  const req_clear_2 = store.clear()
  const req_getAllKeys_3 = store.getAllKeys(42)
  const req_add_4 = store.add(true)
  const req_count_5 = store.count(42)
  const req_count_6 = store.count()
  const req_delete_7 = store.delete(42)
  const req_get_8 = store.get(42)
  const req_get_9 = store.get('fallback')
  const req_count_10 = store.count()
  const req_getAll_11 = store.getAll()
  const req_delete_12 = store.delete(true)
  const req_count_13 = store.count(42)
  const req_openCursor_14 = store.openCursor(None, 'prev')
  const req_delete_15 = store.delete(42)
  const req_getAllKeys_16 = store.getAllKeys(16)
  const req_clear_17 = store.clear()
  const req_add_18 = store.add(42)
  const req_openKeyCursor_19 = store.openKeyCursor('fallback')
  const req_delete_20 = store.delete(42)
  const req_openCursor_21 = store.openCursor(true, 'prev')
  const req_count_22 = store.count('fallback')
  const req_clear_23 = store.clear()
  const req_openKeyCursor_24 = store.openKeyCursor(None, 'next')
  const req_put_25 = store.put(42)
  const req_delete_26 = store.delete('fallback')
  const req_clear_27 = store.clear()
  const req_put_28 = store.put('fallback')
  const req_get_29 = store.get(true)
  const req_clear_30 = store.clear()
  const req_get_31 = store.get('fallback')
  const req_openKeyCursor_32 = store.openKeyCursor(true)
  const req_delete_33 = store.delete('fallback')
  const req_delete_34 = store.delete('fallback')
  const req_delete_35 = store.delete(true)
  const req_count_36 = store.count(42)
  const req_count_37 = store.count(true)
  const req_add_38 = store.add(true, 42)
  const req_add_39 = store.add('fallback')
  const req_delete_40 = store.delete('fallback')
  const req_getAllKeys_41 = store.getAllKeys()
  const req_openCursor_42 = store.openCursor(None, 'prev')
  const req_delete_43 = store.delete(42)
  const req_openKeyCursor_44 = store.openKeyCursor(true)
  const req_put_45 = store.put('fallback', true)
  const req_put_46 = store.put('fallback')
  const req_delete_47 = store.delete(42)
  const req_get_48 = store.get('fallback')
  const req_count_49 = store.count(true)
  const req_add_50 = store.add(true)
  const req_count_51 = store.count(42)
  const req_put_52 = store.put(42, true)
  const req_delete_53 = store.delete(42)
  const req_put_54 = store.put(42, true)
  const req_put_55 = store.put(42, true)
  const req_openKeyCursor_56 = store.openKeyCursor()
  const req_count_57 = store.count(42)
  const req_openCursor_58 = store.openCursor(None)
  const req_delete_59 = store.delete('fallback')
  const req_count_60 = store.count(true)
  const req_openCursor_61 = store.openCursor('next')
  const req_openKeyCursor_62 = store.openKeyCursor('prev')
  const req_clear_63 = store.clear()
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
const deleteRequest = indexedDB.deleteDatabase('str_715')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
