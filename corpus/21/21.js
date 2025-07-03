let db;
const openRequest = window.indexedDB.open('str_9215')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_617', {keypath: 'ujfEMINQr', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_f: '<array>', f1_q: '<number>', f2_j: '<null>'}, 'EzPKDru');
    var clear_0 = objectStore_0.clear();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('EzPKDru', 'EzPKDru', true, false);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('EzPKDru');
        delete_0 = objectStore_0.delete(KeyRange_1);
    }

    db.deleteObjectStore('objectStore_617')
    var objectStore_1 = db.createObjectStore('objectStore_618', {autoIncrement: true});
    var clear_1 = objectStore_1.clear();
    var index_592 = objectStore_1.createIndex('index_592', 'test', {unique: true});
    var put_0 = objectStore_1.put({f0_t: '<array>', f1_o: '<string>', f2_o: '<object>', f3_z: '<null>', f4_i: '<array>', f5_s: '<string>', f6_m: '<object>', f7_r: '<boolean>', f8_o: '<array>', f9_v: '<string>'}, 'WIg');
    var delete_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('WIg', 'WIg', false, true);
        delete_1 = objectStore_1.delete(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('WIg');
        delete_1 = objectStore_1.delete(KeyRange_3);
    }

    var add_1 = objectStore_1.add({f0_i: '<array>', f1_g: '<string>', f2_u: '<boolean>', f3_p: '<array>', f4_s: '<object>', f5_p: '<object>', f6_q: '<boolean>', f7_h: '<string>', f8_i: '<number>'}, 'PTMoPt');
    var put_1 = objectStore_1.put({f0_d: '<array>'}, 'yQWgDBOL');
    var delete_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('yQWgDBOL', true);
        delete_2 = objectStore_1.delete(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('yQWgDBOL');
        delete_2 = objectStore_1.delete(KeyRange_5);
    }

    var index_0 = objectStore_1.index('index_592');
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('yQWgDBOL', 'WIg', true, true);
        count_0 = objectStore_1.count(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('yQWgDBOL');
        count_0 = objectStore_1.count(KeyRange_7);
    }

    var put_2 = objectStore_1.put({f0_b: '<boolean>', f1_m: '<string>', f2_v: '<object>', f3_d: '<boolean>', f4_z: '<array>', f5_y: '<object>', f6_n: '<number>', f7_e: '<array>'}, 'aWJuJdMOnE');
    var delete_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('aWJuJdMOnE', 'WIg', true, true);
        delete_3 = objectStore_1.delete(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('yQWgDBOL');
        delete_3 = objectStore_1.delete(KeyRange_9);
    }

    var index_593 = objectStore_1.createIndex('index_593', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_619', {keypath: 'DtEuBdYHgKHm', autoIncrement: true});
    var index_594 = objectStore_1.createIndex('index_594', 'test');
    var put_3 = objectStore_2.put({f0_y: '<array>', f1_y: '<number>', f2_x: '<null>'}, 'wWrrTqsJUH');
    var get_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('wWrrTqsJUH', true);
        get_0 = objectStore_2.get(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('wWrrTqsJUH');
        get_0 = objectStore_2.get(KeyRange_11);
    }

};
const deleteRequest = indexedDB.deleteDatabase('str_5034')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
