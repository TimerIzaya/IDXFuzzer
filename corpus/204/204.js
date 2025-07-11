let db;
const openRequest = window.indexedDB.open('str_7814', 8896311606074234)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1198');
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_t: '<null>', f1_r: '<number>'}, 'qMhlvEOfqvPYHEluRlbnCyxlnNVNWPCabsMEYHxDinPVOHseHlHzIrsbgMLrNXLwsiWWMKFBugxENSZmsaPsJgcBozLTcjDWDazgQULcfHAOAyVhRmOZGcCHzdTteTrWvZLbfmxxxcjJqzZRtZmpYdzLAFkcRvVMSQdgfaSxGsvsUlojHjGOTNlYYOAFThPIYqcGESEhbzoGjIdYkGWmfPnYpuBvMlSTgirpRKayFxA');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('qMhlvEOfqvPYHEluRlbnCyxlnNVNWPCabsMEYHxDinPVOHseHlHzIrsbgMLrNXLwsiWWMKFBugxENSZmsaPsJgcBozLTcjDWDazgQULcfHAOAyVhRmOZGcCHzdTteTrWvZLbfmxxxcjJqzZRtZmpYdzLAFkcRvVMSQdgfaSxGsvsUlojHjGOTNlYYOAFThPIYqcGESEhbzoGjIdYkGWmfPnYpuBvMlSTgirpRKayFxA', 'qMhlvEOfqvPYHEluRlbnCyxlnNVNWPCabsMEYHxDinPVOHseHlHzIrsbgMLrNXLwsiWWMKFBugxENSZmsaPsJgcBozLTcjDWDazgQULcfHAOAyVhRmOZGcCHzdTteTrWvZLbfmxxxcjJqzZRtZmpYdzLAFkcRvVMSQdgfaSxGsvsUlojHjGOTNlYYOAFThPIYqcGESEhbzoGjIdYkGWmfPnYpuBvMlSTgirpRKayFxA', true, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('qMhlvEOfqvPYHEluRlbnCyxlnNVNWPCabsMEYHxDinPVOHseHlHzIrsbgMLrNXLwsiWWMKFBugxENSZmsaPsJgcBozLTcjDWDazgQULcfHAOAyVhRmOZGcCHzdTteTrWvZLbfmxxxcjJqzZRtZmpYdzLAFkcRvVMSQdgfaSxGsvsUlojHjGOTNlYYOAFThPIYqcGESEhbzoGjIdYkGWmfPnYpuBvMlSTgirpRKayFxA');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var count_0 = objectStore_0.count();
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('qMhlvEOfqvPYHEluRlbnCyxlnNVNWPCabsMEYHxDinPVOHseHlHzIrsbgMLrNXLwsiWWMKFBugxENSZmsaPsJgcBozLTcjDWDazgQULcfHAOAyVhRmOZGcCHzdTteTrWvZLbfmxxxcjJqzZRtZmpYdzLAFkcRvVMSQdgfaSxGsvsUlojHjGOTNlYYOAFThPIYqcGESEhbzoGjIdYkGWmfPnYpuBvMlSTgirpRKayFxA', false);
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var index_799 = objectStore_0.createIndex('index_799', 'test');
    db.deleteObjectStore('objectStore_1198')
    var objectStore_1 = db.createObjectStore('objectStore_1199', {keypath: 'DUMVvtjhBhFyhplXymBwWRIfFIamhaeeJfjszaUklzNCDeUSukSnVyvCIhKE'});
    db.deleteObjectStore('objectStore_1199')
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
const deleteRequest = indexedDB.deleteDatabase('str_5043')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};