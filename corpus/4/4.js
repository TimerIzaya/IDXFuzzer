let db;
const openRequest = window.indexedDB.open('str_4965', 4561727364612620)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_29', {keypath: 'nxIeSUuBcZkpEntUqRVRVQOtfOCdNyVFHCsubJUTGiXvoDyoFUeZfvdIWeChyERYgycXSAbYtPLgWZkmAoyYQINNId.ulWsbrESuEhrNGuDmXDwHCFIXGmNoSKhskdWujnWYybjwwgeFwAZVTbbOWhbERkRVSqaTWFVdFObhmxcjnzWoeiUmaTWYNkSDp'});
    var put_0 = objectStore_0.put({f0_t: '<boolean>', f1_w: '<array>', f2_a: '<array>', f3_g: '<array>'}, 'APtTETRVzKBibDFzopVZOGPISXcdocmGzMWrdQOCHAVzWZHaDAvMejrKmNwyETxOTGwAlveI');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.only('APtTETRVzKBibDFzopVZOGPISXcdocmGzMWrdQOCHAVzWZHaDAvMejrKmNwyETxOTGwAlveI');
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_f: '<boolean>', f1_k: '<string>', f2_l: '<array>', f3_h: '<string>'}, 'MzDTPaetZHIUbiIPwFBfjuia');
    var delete_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('APtTETRVzKBibDFzopVZOGPISXcdocmGzMWrdQOCHAVzWZHaDAvMejrKmNwyETxOTGwAlveI', false);
        delete_1 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var put_2 = objectStore_0.put({f0_s: '<array>', f1_u: '<null>', f2_j: '<array>', f3_l: '<boolean>', f4_c: '<boolean>', f5_c: '<null>', f6_a: '<array>', f7_m: '<null>', f8_o: '<boolean>', f9_t: '<array>'}, 'KWcJSmtvqLTgOjUfsfQwHdUiNVgknpwkt');
    var index_23 = objectStore_0.createIndex('index_23', 'test', {multiEntry: true});
    var clear_0 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_29')
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
const deleteRequest = indexedDB.deleteDatabase('str_9530')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};