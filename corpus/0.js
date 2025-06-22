let db;
const openRequest = window.indexedDB.open('str_3526', '1')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: true});
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: false});
  store_0.deleteIndex('index_0')
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false, multiEntry: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'test', autoIncrement: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false});
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: false});
  var store_1 = db.createObjectStore('store_1', {autoIncrement: true});
  var store_2 = db.createObjectStore('store_2', {autoIncrement: false});
  var store_3 = db.createObjectStore('store_3');
  var index_2 = store_2.createIndex('index_2', 'test', {unique: true});
  var store_4 = db.createObjectStore('store_4', {keypath: 'test', autoIncrement: false});
  var index_3 = store_2.createIndex('index_3', 'test', {unique: true, multiEntry: false});
  var index_4 = store_0.createIndex('index_4', 'test', {multiEntry: true});
  var index_5 = store_0.createIndex('index_5', 'test', {unique: true});
  var index_6 = store_2.createIndex('index_6', 'test');
  var store_5 = db.createObjectStore('store_5', {keypath: 'test', autoIncrement: false});
  store_0.deleteIndex('index_4')
  db.deleteObjectStore('store_3')
  db.deleteObjectStore('store_5')
  db.deleteObjectStore('store_4')
  var store_3 = db.createObjectStore('store_3', {keypath: 'test'});
  db.deleteObjectStore('store_3')
  var index_4 = store_2.createIndex('index_4', 'test');
  var index_7 = store_0.createIndex('index_7', 'test', {multiEntry: true});
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_2')
  var store_1 = db.createObjectStore('store_1', {keypath: 'test', autoIncrement: false});
  var store_2 = db.createObjectStore('store_2', {keypath: 'test', autoIncrement: false});
  var store_3 = db.createObjectStore('store_3', {keypath: 'test'});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  var index_0 = store_2.createIndex('index_0', 'test', {multiEntry: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  var index_1 = store_1.createIndex('index_1', 'test');
  var index_2 = store_3.createIndex('index_2', 'test', {unique: false});
  store_1.deleteIndex('index_1')
  var store_4 = db.createObjectStore('store_4', {autoIncrement: false});
  var index_1 = store_0.createIndex('index_1', 'test', {unique: true});
  var index_3 = store_3.createIndex('index_3', 'test', {unique: true});
  var index_4 = store_0.createIndex('index_4', 'test');
  var index_5 = store_3.createIndex('index_5', 'test', {multiEntry: false});
  var store_5 = db.createObjectStore('store_5');
  var index_6 = store_0.createIndex('index_6', 'test', {unique: false});
  var index_7 = store_0.createIndex('index_7', 'test');
  var index_8 = store_2.createIndex('index_8', 'test', {unique: true, multiEntry: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_3')
  var store_2 = db.createObjectStore('store_2', {keypath: 'test'});
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: false});
  var index_1 = store_0.createIndex('index_1', 'test', {unique: true, multiEntry: false});
  var index_2 = store_1.createIndex('index_2', 'test', {unique: true, multiEntry: true});
  var store_3 = db.createObjectStore('store_3', {autoIncrement: false});
  db.deleteObjectStore('store_0')
  var index_0 = store_3.createIndex('index_0', 'test', {unique: false, multiEntry: true});
  var index_1 = store_3.createIndex('index_1', 'test', {multiEntry: true});
  var index_3 = store_3.createIndex('index_3', 'test');
  var store_0 = db.createObjectStore('store_0', {keypath: 'test', autoIncrement: false});
  var index_4 = store_1.createIndex('index_4', 'test', {unique: false});
  var index_5 = store_0.createIndex('index_5', 'test', {unique: false});
  var index_6 = store_3.createIndex('index_6', 'test');
  var store_6 = db.createObjectStore('store_6');
  var index_7 = store_2.createIndex('index_7', 'test', {unique: true});
  var store_7 = db.createObjectStore('store_7', {autoIncrement: false});
  var index_8 = store_0.createIndex('index_8', 'test', {unique: true});
  var index_9 = store_2.createIndex('index_9', 'test', {unique: true});
  var store_8 = db.createObjectStore('store_8', {keypath: 'test'});
  var store_9 = db.createObjectStore('store_9');
  var store_10 = db.createObjectStore('store_10', {autoIncrement: false});
  var index_10 = store_1.createIndex('index_10', 'test', {multiEntry: false});
  var index_11 = store_0.createIndex('index_11', 'test');
  var index_12 = store_4.createIndex('index_12', 'test', {unique: true, multiEntry: true});
  var index_13 = store_10.createIndex('index_13', 'test', {unique: false});
  store_2.deleteIndex('index_9')
  var store_11 = db.createObjectStore('store_11');
  var store_12 = db.createObjectStore('store_12', {keypath: 'test'});
  var index_9 = store_9.createIndex('index_9', 'test', {unique: false, multiEntry: true});
  var index_14 = store_4.createIndex('index_14', 'test');
  var index_15 = store_5.createIndex('index_15', 'test', {multiEntry: false});
  var store_13 = db.createObjectStore('store_13', {keypath: 'test'});
  var index_16 = store_5.createIndex('index_16', 'test', {unique: true});
  var index_17 = store_5.createIndex('index_17', 'test');
  var index_18 = store_6.createIndex('index_18', 'test', {unique: true, multiEntry: false});
  var store_14 = db.createObjectStore('store_14', {autoIncrement: false});
  var index_19 = store_3.createIndex('index_19', 'test', {unique: false, multiEntry: false});
  var index_20 = store_3.createIndex('index_20', 'test');
  var index_21 = store_0.createIndex('index_21', 'test', {unique: true});
  var index_22 = store_0.createIndex('index_22', 'test', {unique: true});
  store_6.deleteIndex('index_18')
  db.deleteObjectStore('store_11')
  db.deleteObjectStore('store_1')
  var index_2 = store_5.createIndex('index_2', 'test', {multiEntry: true});
  var index_4 = store_2.createIndex('index_4', 'test', {multiEntry: false});
  var store_1 = db.createObjectStore('store_1');
  var index_10 = store_1.createIndex('index_10', 'test');
  var index_18 = store_4.createIndex('index_18', 'test', {unique: true, multiEntry: false});
  var index_23 = store_0.createIndex('index_23', 'test');
  var index_24 = store_1.createIndex('index_24', 'test');
  var index_25 = store_1.createIndex('index_25', 'test', {multiEntry: true});
  var store_11 = db.createObjectStore('store_11', {autoIncrement: true});
  var store_15 = db.createObjectStore('store_15', {keypath: 'test'});
  var store_16 = db.createObjectStore('store_16', {autoIncrement: true});
  var index_26 = store_0.createIndex('index_26', 'test', {multiEntry: true});
  var index_27 = store_1.createIndex('index_27', 'test', {unique: true});
  db.deleteObjectStore('store_10')
  var store_10 = db.createObjectStore('store_10', {keypath: 'test'});
  var index_13 = store_1.createIndex('index_13', 'test', {multiEntry: true});
  var index_28 = store_0.createIndex('index_28', 'test', {multiEntry: false});
  var index_29 = store_4.createIndex('index_29', 'test', {unique: true});
  var index_30 = store_8.createIndex('index_30', 'test', {multiEntry: true});
  var index_31 = store_10.createIndex('index_31', 'test', {multiEntry: false});
  db.deleteObjectStore('store_8')
  var store_8 = db.createObjectStore('store_8', {keypath: 'test'});
  var index_30 = store_14.createIndex('index_30', 'test');
  var index_32 = store_11.createIndex('index_32', 'test', {multiEntry: true});
  var store_17 = db.createObjectStore('store_17', {keypath: 'test', autoIncrement: false});
  var index_33 = store_1.createIndex('index_33', 'test', {unique: false});
  var store_18 = db.createObjectStore('store_18', {keypath: 'test'});
  var store_19 = db.createObjectStore('store_19', {keypath: 'test'});
  db.deleteObjectStore('store_4')
  var index_12 = store_0.createIndex('index_12', 'test', {multiEntry: false});
  db.deleteObjectStore('store_5')
  var store_4 = db.createObjectStore('store_4', {keypath: 'test'});
  db.deleteObjectStore('store_8')
  var index_2 = store_6.createIndex('index_2', 'test', {multiEntry: false});
  db.deleteObjectStore('store_9')
  var index_9 = store_4.createIndex('index_9', 'test', {unique: false});
  var index_14 = store_0.createIndex('index_14', 'test', {multiEntry: true});
  db.deleteObjectStore('store_14')
  var index_15 = store_0.createIndex('index_15', 'test', {unique: true, multiEntry: false});
  var index_16 = store_16.createIndex('index_16', 'test', {unique: false});
  var index_17 = store_19.createIndex('index_17', 'test', {unique: true, multiEntry: false});
  var index_18 = store_10.createIndex('index_18', 'test', {unique: false});
  var store_5 = db.createObjectStore('store_5', {autoIncrement: true});
  store_4.deleteIndex('index_9')
  store_10.deleteIndex('index_31')
  var index_9 = store_2.createIndex('index_9', 'test', {unique: false});
  db.deleteObjectStore('store_16')
  var index_16 = store_13.createIndex('index_16', 'test', {multiEntry: false});
  db.deleteObjectStore('store_5')
  var store_5 = db.createObjectStore('store_5', {keypath: 'test', autoIncrement: false});
  db.deleteObjectStore('store_13')
  var index_16 = store_4.createIndex('index_16', 'test');
  var index_29 = store_5.createIndex('index_29', 'test', {unique: false, multiEntry: true});
  var store_8 = db.createObjectStore('store_8', {keypath: 'test'});
  db.deleteObjectStore('store_8')
  var store_8 = db.createObjectStore('store_8', {keypath: 'test'});
  var index_30 = store_7.createIndex('index_30', 'test', {multiEntry: false});
  db.deleteObjectStore('store_19')
  var store_9 = db.createObjectStore('store_9', {keypath: 'test'});
  db.deleteObjectStore('store_17')
  var index_17 = store_1.createIndex('index_17', 'test', {multiEntry: false});
  var index_31 = store_0.createIndex('index_31', 'test', {unique: false, multiEntry: false});
  db.deleteObjectStore('store_5')
  var store_5 = db.createObjectStore('store_5', {keypath: 'test', autoIncrement: true});
  var store_13 = db.createObjectStore('store_13', {keypath: 'test'});
  db.deleteObjectStore('store_12')
  db.deleteObjectStore('store_0')
  var index_5 = store_5.createIndex('index_5', 'test', {multiEntry: true});
  var index_8 = store_18.createIndex('index_8', 'test', {multiEntry: true});
  db.deleteObjectStore('store_7')
  var store_0 = db.createObjectStore('store_0', {keypath: 'test'});
  var index_11 = store_3.createIndex('index_11', 'test', {multiEntry: true});
  var store_7 = db.createObjectStore('store_7', {keypath: 'test'});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_3526')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
