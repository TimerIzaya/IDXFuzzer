let db;
const openRequest = window.indexedDB.open('str_7235', 6089616401492227)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_1', {autoIncrement: false});
    var add_0 = objectStore_0.add({f0_m: '<boolean>'}, 'DNNBJmurZsD');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.only('DNNBJmurZsD');
        getAll_0 = objectStore_0.getAll(KeyRange_0, 101566100);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('DNNBJmurZsD');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var objectStore_2 = db.createObjectStore('objectStore_2');
    var put_0 = objectStore_1.put({f0_q: '<object>', f1_z: '<null>'}, 'NCwlJzQB');
    var clear_0 = objectStore_0.clear();
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('DNNBJmurZsD', true);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var put_1 = objectStore_1.put({f0_x: '<boolean>', f1_p: '<string>', f2_t: '<string>'}, 'RzSyPSSA');
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.only('DNNBJmurZsD');
        delete_0 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var index_0 = objectStore_1.createIndex('index_0', 'test', {multiEntry: false});
    var objectStore_3 = db.createObjectStore('objectStore_3');
    var index_1 = objectStore_0.createIndex('index_1', 'test', {unique: false});
    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('DNNBJmurZsD', 'DNNBJmurZsD', true, false);
        delete_1 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var put_2 = objectStore_0.put({f0_e: '<null>', f1_n: '<number>', f2_v: '<boolean>'}, 'mNvLqEdG');
    var clear_1 = objectStore_2.clear();
    var clear_2 = objectStore_1.clear();
    var get_0;
    try{
        KeyRange_8 = IDBKeyRange.only('NCwlJzQB');
        get_0 = objectStore_1.get(KeyRange_8);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_1', 'objectStore_2'], 'readwrite', {durability:"default"})
    var objectStore_2;
    txn_0.objectStore('objectStore_2')
    var add_1 = objectStore_2.add({f0_e: '<null>', f1_u: '<object>', f2_z: '<boolean>', f3_f: '<number>', f4_l: '<array>', f5_q: '<null>', f6_g: '<array>', f7_k: '<boolean>', f8_p: '<array>'}, 'iDzhaJ');
    var put_3 = objectStore_2.put({f0_p: '<null>', f1_h: '<null>', f2_u: '<object>', f3_r: '<string>', f4_d: '<string>', f5_f: '<array>'}, 'gwWdwKlSz');
    var clear_3 = objectStore_2.clear();
    var add_2 = objectStore_2.add({f0_n: '<boolean>', f1_b: '<object>', f2_c: '<string>', f3_s: '<number>', f4_a: '<null>', f5_c: '<object>', f6_c: '<array>', f7_c: '<boolean>'}, 'UfWlpjzXcz');
    var put_4 = objectStore_2.put({f0_k: '<null>', f1_v: '<array>', f2_e: '<null>', f3_d: '<null>', f4_h: '<object>', f5_j: '<number>'}, 'HBUJvL');
    var put_5 = objectStore_2.put({f0_t: '<string>', f1_s: '<string>', f2_d: '<number>', f3_c: '<array>', f4_l: '<boolean>', f5_o: '<boolean>', f6_q: '<string>'}, 'tWUb');
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('UfWlpjzXcz', true);
        get_1 = objectStore_2.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_4 = objectStore_2.clear();
    var put_6 = objectStore_2.put({f0_g: '<number>', f1_x: '<object>', f2_p: '<array>', f3_c: '<null>'}, 'dlXffBscFta');
    var count_2 = objectStore_2.count();
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.only('gwWdwKlSz');
        get_2 = objectStore_2.get(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('HBUJvL');
        get_3 = objectStore_2.get(KeyRange_14);
    }
    catch (e){
    }

    var count_3 = objectStore_2.count();
    var getAll_1 = objectStore_2.getAll(1310973475);
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.only('iDzhaJ');
        count_4 = objectStore_2.count(KeyRange_16);
    }
    catch (e){
    }

    var clear_5 = objectStore_2.clear();
    var add_3 = objectStore_2.add({f0_g: '<array>', f1_c: '<boolean>', f2_u: '<object>', f3_d: '<number>', f4_i: '<array>'}, 'dspmOajKQSf');
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7235')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};