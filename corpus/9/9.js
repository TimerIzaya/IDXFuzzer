let db_23;
const openRequest_23 = window.indexedDB.open('str_5631', 8234853940771777)
openRequest_23.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db_23 = event.target.result;
    var objectStore_0 = db_23.createObjectStore('objectStore_71');
    db_23.deleteObjectStore('objectStore_71')
};
openRequest_23.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db_23 = openRequest_23.result;
    db_23.onversionchange = (event) => {
        console.log('The version of this database has changed, release this connection');
        db_23.close()
    };
    db_23.onclose = (event) => {
        console.log('The database connection is unexpectedly closed');
    };
};
openRequest_23.onerror = (event) => {
    console.log('open db onerror triggered')
    var errorResult;
    errorResult = event.target.error;
    console.log(errorResult.message)
    console.log(errorResult.name)
};
openRequest_23.onblocked = (event) => {
    console.log('open db blocked triggered')
};
const deleteRequest_23 = indexedDB.deleteDatabase('str_1887')