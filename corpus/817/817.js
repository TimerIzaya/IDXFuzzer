let db;
const openRequest = window.indexedDB.open('str_5471', 6529309766435430)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4859', {keypath: 'uqxpnRnadXWvnHXzgVeSMjKuKHcaxnhOlfhKlpGLGPmRoFzcBeEKKWuiJhUMzRcwcjZmcHOWoowQUIBTTfsHTjfIMEmlZAjAwDRcTYzxNFltZebuVQozSVltQOIYStOKuEveIxSvUPTPbSxmzkKBUKfrHiOCaGVZSOQLbdENuPVmFdZrCVjapxgxIHZZeGMVlrDdaJnDebALkvYlGTgpNeGFufaKolesuNJWBHyAXSJzbqTNxXlNQHNxjgWetGoChJrtOjRhOQXuxGhWYRfVpQVMHFIFLybIfOaTsEXDOxmxwFdBHVcQUKMWgRzmDnlmGwpITKChVnZRuvkcusFEpUYELZLWskjlIWqTGZKmDjHMdDEdyJMuYvTVSWRTYFbYfnbuRqTDxGISWWOMPskGjxrsdoTxmdphgNCUyogovunXrFziSgtwlMWNZjUyLORDDqkgbILENXUiIAikqGXzInylaYQKFnZSvXyBt', autoIncrement: false});
    var index_3252 = objectStore_0.createIndex('index_3252', 'test', {unique: true, multiEntry: false});
    db.deleteObjectStore('objectStore_4859')
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
openRequest.onerror = (event) => {
    console.log('open db onerror triggered')
    var errorResult;
    errorResult = event.target.error;
    console.log(errorResult.message)
    console.log(errorResult.name)
};
openRequest.onblocked = (event) => {
    console.log('open db blocked triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_5501')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};