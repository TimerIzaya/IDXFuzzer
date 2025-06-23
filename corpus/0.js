let db;
const openRequest = window.indexedDB.open('str_9342')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  var store_1 = db.createObjectStore('store_1', {autoIncrement: true});
  var index_0 = store_0.createIndex('index_0', 'test');
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: true});
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0', {keypath: 'test'});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'test'});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  var store_1 = db.createObjectStore('store_1', {autoIncrement: true});
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  var store_1 = db.createObjectStore('store_1');
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true, multiEntry: false});
  var index_1 = store_0.createIndex('index_1', 'test');
  var store_2 = db.createObjectStore('store_2', {keypath: 'test'});
  var index_2 = store_2.createIndex('index_2', 'test', {multiEntry: true});
  var store_3 = db.createObjectStore('store_3', {keypath: 'test'});
  var index_3 = store_0.createIndex('index_3', 'test');
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_3')
  var store_2 = db.createObjectStore('store_2', {keypath: 'test'});
  store_0.deleteIndex('index_1')
  var store_3 = db.createObjectStore('store_3');
  var store_4 = db.createObjectStore('store_4', {keypath: 'test', autoIncrement: true});
  var index_1 = store_2.createIndex('index_1', 'test');
  store_2.deleteIndex('index_1')
  var store_5 = db.createObjectStore('store_5', {keypath: 'test', autoIncrement: false});
  var index_1 = store_0.createIndex('index_1', 'test', {unique: true});
  var index_2 = store_1.createIndex('index_2', 'test', {unique: false});
  var store_6 = db.createObjectStore('store_6', {autoIncrement: false});
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_5')
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  var index_0 = store_6.createIndex('index_0', 'test', {multiEntry: true});
  var store_1 = db.createObjectStore('store_1', {keypath: 'test'});
  db.deleteObjectStore('store_6')
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_4')
  var index_0 = store_1.createIndex('index_0', 'test', {unique: false, multiEntry: true});
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1', {keypath: 'test'});
  var store_2 = db.createObjectStore('store_2', {keypath: 'test', autoIncrement: true});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true});
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: false});
  var store_4 = db.createObjectStore('store_4');
  store_0.deleteIndex('index_1')
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_3')
  var store_0 = db.createObjectStore('store_0');
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true});
  var store_1 = db.createObjectStore('store_1');
  var index_1 = store_1.createIndex('index_1', 'test', {unique: false, multiEntry: true});
  var index_2 = store_2.createIndex('index_2', 'test', {multiEntry: false});
  var index_3 = store_1.createIndex('index_3', 'test', {multiEntry: false});
  var store_3 = db.createObjectStore('store_3', {autoIncrement: false});
  var store_5 = db.createObjectStore('store_5', {autoIncrement: true});
  var index_4 = store_3.createIndex('index_4', 'test', {multiEntry: false});
  db.deleteObjectStore('store_3')
  var index_4 = store_1.createIndex('index_4', 'test', {multiEntry: true});
  var store_3 = db.createObjectStore('store_3', {keypath: 'test', autoIncrement: false});
  var index_5 = store_0.createIndex('index_5', 'test', {unique: false, multiEntry: true});
  var store_6 = db.createObjectStore('store_6', {autoIncrement: true});
  var index_6 = store_1.createIndex('index_6', 'test', {unique: false});
  var index_7 = store_1.createIndex('index_7', 'test');
  var index_8 = store_0.createIndex('index_8', 'test');
  var index_9 = store_0.createIndex('index_9', 'test', {unique: false, multiEntry: true});
  store_0.deleteIndex('index_9')
  var store_7 = db.createObjectStore('store_7', {keypath: 'test'});
  db.deleteObjectStore('store_7')
  db.deleteObjectStore('store_2')
  var index_2 = store_0.createIndex('index_2', 'test', {unique: false});
  var store_2 = db.createObjectStore('store_2', {autoIncrement: false});
  var store_7 = db.createObjectStore('store_7', {keypath: 'test'});
  var index_9 = store_0.createIndex('index_9', 'test', {unique: false});
  var index_10 = store_3.createIndex('index_10', 'test', {unique: true, multiEntry: true});
  db.deleteObjectStore('store_4')
  var index_11 = store_3.createIndex('index_11', 'test', {unique: false, multiEntry: false});
  store_0.deleteIndex('index_5')
  var store_4 = db.createObjectStore('store_4', {keypath: 'test', autoIncrement: true});
  db.deleteObjectStore('store_7')
  var index_5 = store_3.createIndex('index_5', 'test');
  db.deleteObjectStore('store_5')
  var index_12 = store_0.createIndex('index_12', 'test', {multiEntry: false});
  var store_5 = db.createObjectStore('store_5');
  var index_13 = store_0.createIndex('index_13', 'test', {unique: false});
  var store_7 = db.createObjectStore('store_7');
  var store_8 = db.createObjectStore('store_8', {autoIncrement: false});
  db.deleteObjectStore('store_2')
  var store_2 = db.createObjectStore('store_2', {autoIncrement: false});
  db.deleteObjectStore('store_1')
  var index_1 = store_3.createIndex('index_1', 'test', {unique: false});
  db.deleteObjectStore('store_8')
  var index_3 = store_4.createIndex('index_3', 'test', {multiEntry: true});
  var index_4 = store_2.createIndex('index_4', 'test', {multiEntry: false});
  var index_6 = store_0.createIndex('index_6', 'test', {unique: true});
  var store_1 = db.createObjectStore('store_1', {keypath: 'test', autoIncrement: false});
  var index_7 = store_0.createIndex('index_7', 'test', {multiEntry: false});
  var index_14 = store_1.createIndex('index_14', 'test', {unique: true});
  var index_15 = store_6.createIndex('index_15', 'test', {unique: true});
  db.deleteObjectStore('store_1')
  var index_14 = store_0.createIndex('index_14', 'test', {multiEntry: true});
  var index_16 = store_0.createIndex('index_16', 'test', {multiEntry: true});
  store_2.deleteIndex('index_4')
  store_6.deleteIndex('index_15')
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_6')
  store_0.deleteIndex('index_8')
  db.deleteObjectStore('store_7')
  db.deleteObjectStore('store_3')
  var index_1 = store_0.createIndex('index_1', 'test', {unique: false});
  var index_4 = store_0.createIndex('index_4', 'test', {unique: true});
  var store_1 = db.createObjectStore('store_1');
  var store_2 = db.createObjectStore('store_2', {keypath: 'test'});
  var index_5 = store_0.createIndex('index_5', 'test');
  var index_8 = store_5.createIndex('index_8', 'test', {multiEntry: false});
  var store_3 = db.createObjectStore('store_3', {keypath: 'test', autoIncrement: false});
  db.deleteObjectStore('store_3')
  var index_10 = store_0.createIndex('index_10', 'test', {unique: false});
  db.deleteObjectStore('store_2')
  db.deleteObjectStore('store_0')
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true});
  db.deleteObjectStore('store_4')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0', {keypath: 'test', autoIncrement: false});
  db.deleteObjectStore('store_5')
  var store_1 = db.createObjectStore('store_1', {keypath: 'test'});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true});
  var index_1 = store_1.createIndex('index_1', 'test', {unique: true});
  var index_2 = store_0.createIndex('index_2', 'test');
  store_1.deleteIndex('index_1')
  var index_1 = store_1.createIndex('index_1', 'test', {multiEntry: true});
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1');
  var index_1 = store_0.createIndex('index_1', 'test');
  var store_2 = db.createObjectStore('store_2');
  db.deleteObjectStore('store_0')
  var index_0 = store_2.createIndex('index_0', 'test', {unique: true, multiEntry: true});
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  var store_3 = db.createObjectStore('store_3', {keypath: 'test', autoIncrement: false});
  db.deleteObjectStore('store_2')
  var store_2 = db.createObjectStore('store_2');
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true});
  var store_4 = db.createObjectStore('store_4');
  store_1.deleteIndex('index_0')
  var store_5 = db.createObjectStore('store_5', {autoIncrement: true});
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true, multiEntry: false});
  var index_1 = store_2.createIndex('index_1', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
};
openRequest.onblocked = (event) => {
  console.log('open db blocked triggered')
};
openRequest.onerror = (event) => {
  console.log('open db onerror triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_9342')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
