let db;
const openRequest = window.indexedDB.open('str_726', 74)
openRequest.onupgradeneeded = (event) => {
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'jDNqUydS', autoIncrement: false});
    var index_0 = objectStore_0.createIndex('index_0', 'test');
    var get_0;
    try {
        KeyRange_0 = IDBKeyRange.bound('XUJrADmHnDx', 'XUJrADmHnDx', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    } catch (e) {
        KeyRange_1 = IDBKeyRange.only('XUJrADmHnDx');
        get_0 = objectStore_0.get(KeyRange_1);
    }
    var clear_0 = objectStore_0.clear();
    clear_0.onsuccess = (event) => {
        db.deleteObjectStore('objectStore_0')
        var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'yrOcBVU', autoIncrement: true});
        var index_2 = objectStore_2.createIndex('index_2', 'test');
        get_0.onsuccess = (event) => {
            var index_3;
            index_3 = objectStore_1.createIndex('index_3', 'test', {unique: false, multiEntry: false});
        };
    };
};
