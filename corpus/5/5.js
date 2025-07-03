let db;
const openRequest = window.indexedDB.open('str_6221', '42')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_185', {keypath: 'hMYLa', autoIncrement: true});
    db.deleteObjectStore('objectStore_185')
    var objectStore_1 = db.createObjectStore('objectStore_186');
    var index_153 = objectStore_1.createIndex('index_153', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_1.put({f0_i: '<object>', f1_b: '<array>', f2_a: '<object>', f3_g: '<array>', f4_n: '<null>', f5_c: '<string>', f6_r: '<boolean>'}, 'ZXHMS');
    var index_0 = objectStore_1.index('index_153');
};
const deleteRequest = indexedDB.deleteDatabase('str_9227')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
