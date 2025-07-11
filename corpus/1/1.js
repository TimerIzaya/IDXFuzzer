let db;
const openRequest = window.indexedDB.open('str_6238', 7180070524339981)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_7');
    var add_0 = objectStore_0.add({f0_r: '<number>', f1_u: '<boolean>', f2_h: '<null>', f3_o: '<boolean>', f4_t: '<null>', f5_z: '<number>', f6_y: '<null>', f7_y: '<string>', f8_q: '<boolean>', f9_m: '<object>'}, 'tZJ');
    var getAll_0 = objectStore_0.getAll(4057878696);
    var add_1 = objectStore_0.add({f0_i: '<array>', f1_h: '<boolean>', f2_p: '<boolean>', f3_b: '<boolean>'}, 'LbYqKi');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('tZJ', 'LbYqKi', false, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('LbYqKi');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var objectStore_1 = db.createObjectStore('objectStore_8', {keypath: 'zsqJSwmi', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_9');
    db.deleteObjectStore('objectStore_9')
    var objectStore_3 = db.createObjectStore('objectStore_10', {keypath: 'idRaTNaOfdt'});
    var objectStore_4 = db.createObjectStore('objectStore_11', {keypath: 'nlyE'});
    var objectStore_5 = db.createObjectStore('objectStore_12', {keypath: 'enpBseT', autoIncrement: false});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('LbYqKi', 'LbYqKi', true, true);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_3.clear();
    var put_0 = objectStore_1.put({f0_q: '<string>', f1_a: '<null>', f2_g: '<number>', f3_h: '<number>', f4_d: '<string>', f5_u: '<array>', f6_o: '<number>'}, 'ZQwdMdrP');
    var clear_1 = objectStore_1.clear();
    var index_12 = objectStore_3.createIndex('index_12', 'test');
    var add_2 = objectStore_4.add({f0_l: '<number>', f1_k: '<boolean>', f2_r: '<number>', f3_a: '<string>'}, 'BaJH');
    db.deleteObjectStore('objectStore_11')
    var add_3 = objectStore_5.add({f0_r: '<string>', f1_f: '<number>', f2_v: '<null>', f3_u: '<object>', f4_u: '<null>', f5_o: '<array>', f6_i: '<null>', f7_m: '<object>', f8_c: '<object>'}, 'kccH');
    var index_13 = objectStore_5.createIndex('index_13', 'test', {unique: false, multiEntry: true});
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('LbYqKi', 'tZJ', false, false);
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_1 = objectStore_0.getAll(2335796906);
    var count_2 = objectStore_1.count();
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('kccH', 'kccH', false, false);
        get_0 = objectStore_5.get(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('tZJ', 'tZJ', false, false);
        get_1 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var clear_2 = objectStore_5.clear();
    var add_4 = objectStore_5.add({f0_s: '<object>'}, 'wqLVma');
    var add_5 = objectStore_1.add({f0_h: '<boolean>', f1_u: '<boolean>', f2_s: '<object>', f3_t: '<string>', f4_j: '<null>', f5_n: '<boolean>'}, 'BbcBhhAopvAz');
    var index_14 = objectStore_5.createIndex('index_14', 'test', {multiEntry: true});
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('BbcBhhAopvAz', 'ZQwdMdrP', false, false);
        get_2 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('kccH', 'kccH', false, false);
        delete_0 = objectStore_5.delete(KeyRange_12);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_12')
    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.only('tZJ');
        count_3 = objectStore_0.count(KeyRange_14);
    }
    catch (e){
    }

    var index_15 = objectStore_0.createIndex('index_15', 'test', {multiEntry: true});
    var put_1 = objectStore_0.put({f0_f: '<boolean>', f1_u: '<object>', f2_n: '<null>', f3_x: '<array>', f4_l: '<number>', f5_w: '<array>', f6_q: '<boolean>', f7_m: '<null>', f8_q: '<boolean>'}, 'ZXMwP');
    var objectStore_6 = db.createObjectStore('objectStore_13', {autoIncrement: true});
    var index_0 = objectStore_0.index('index_15');
    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('LbYqKi', 'ZXMwP', true, true);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_16, 3981835949);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('ZXMwP');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_17);
    }

    var clear_3 = objectStore_3.clear();
    var add_6 = objectStore_3.add({f0_a: '<null>', f1_u: '<object>', f2_k: '<boolean>', f3_f: '<array>', f4_t: '<null>', f5_k: '<boolean>', f6_e: '<number>', f7_s: '<array>', f8_j: '<string>', f9_n: '<boolean>'}, 'ebthz');
    var clear_4 = objectStore_3.clear();
    var clear_5 = objectStore_6.clear();
    var count_4 = objectStore_1.count();
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('ebthz', 'ebthz', true, false);
        get_3 = objectStore_3.get(KeyRange_18);
    }
    catch (e){
    }

    var objectStore_7 = db.createObjectStore('objectStore_14', {autoIncrement: false});
    var add_7 = objectStore_3.add({f0_b: '<null>', f1_m: '<null>', f2_y: '<null>', f3_u: '<number>', f4_r: '<boolean>'}, 'npbIs');
    var getAll_2 = objectStore_3.getAll(3496809027);
    var put_2 = objectStore_7.put({f0_x: '<number>', f1_r: '<number>', f2_n: '<object>', f3_w: '<object>', f4_k: '<number>'}, 'bFZUcjTGX');
    var add_8 = objectStore_0.add({f0_d: '<array>', f1_s: '<string>', f2_r: '<null>'}, 'cEeFBHuhHTuc');
    var getAll_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('npbIs', 'ebthz', true, true);
        getAll_3 = objectStore_3.getAll(KeyRange_20, 3326146616);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('npbIs');
        getAll_3 = objectStore_3.getAll(KeyRange_21);
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('tZJ', true);
        get_4 = objectStore_0.get(KeyRange_22);
    }
    catch (e){
    }

    var add_9 = objectStore_7.add({f0_f: '<string>', f1_p: '<array>', f2_d: '<array>', f3_p: '<boolean>', f4_t: '<array>', f5_f: '<boolean>', f6_t: '<object>', f7_d: '<boolean>', f8_x: '<null>', f9_u: '<boolean>'}, 'fNFf');
    var add_10 = objectStore_6.add({f0_w: '<object>', f1_h: '<boolean>', f2_f: '<number>', f3_b: '<string>', f4_g: '<string>', f5_u: '<boolean>', f6_u: '<number>', f7_q: '<array>', f8_w: '<null>'}, 'YbDgS');
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('bFZUcjTGX', 'bFZUcjTGX', false, true);
        get_5 = objectStore_7.get(KeyRange_24);
    }
    catch (e){
    }

    var clear_6 = objectStore_7.clear();
    var put_3 = objectStore_7.put({f0_a: '<null>', f1_b: '<object>', f2_k: '<null>', f3_j: '<null>', f4_a: '<boolean>', f5_g: '<null>'}, 'RhIWNioRyaY');
    var clear_7 = objectStore_0.clear();
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('BbcBhhAopvAz', 'ZQwdMdrP', true, true);
        get_6 = objectStore_1.get(KeyRange_26);
    }
    catch (e){
    }

    var add_11 = objectStore_7.add({f0_s: '<string>', f1_w: '<null>', f2_h: '<string>', f3_j: '<string>', f4_k: '<array>', f5_x: '<object>', f6_o: '<object>', f7_q: '<number>', f8_a: '<array>', f9_l: '<string>'}, 'sEKsf');
    var put_4 = objectStore_7.put({f0_v: '<boolean>', f1_z: '<null>', f2_p: '<number>', f3_x: '<boolean>', f4_x: '<null>', f5_d: '<number>', f6_j: '<object>', f7_c: '<object>'}, 'wMbwKLgzDNuX');
    var clear_8 = objectStore_3.clear();
    var put_5 = objectStore_3.put({f0_k: '<null>', f1_x: '<null>', f2_i: '<object>', f3_s: '<number>', f4_h: '<null>', f5_s: '<number>', f6_s: '<object>', f7_b: '<boolean>'}, 'IZfnFxp');
    var add_12 = objectStore_6.add({f0_i: '<boolean>', f1_n: '<object>', f2_v: '<object>', f3_o: '<object>', f4_k: '<object>', f5_j: '<object>', f6_z: '<object>', f7_u: '<array>'}, 'ZscxZvD');
    var count_5 = objectStore_6.count();
    db.deleteObjectStore('objectStore_14')
    var index_16 = objectStore_3.createIndex('index_16', 'test', {multiEntry: true});
    var put_6 = objectStore_6.put({f0_d: '<boolean>', f1_e: '<string>', f2_j: '<boolean>', f3_s: '<array>', f4_p: '<number>', f5_b: '<string>', f6_u: '<string>', f7_w: '<boolean>', f8_r: '<string>', f9_q: '<null>'}, 'uMWapnlupt');
    var put_7 = objectStore_6.put({f0_r: '<string>', f1_b: '<number>', f2_r: '<boolean>', f3_x: '<string>', f4_w: '<number>', f5_h: '<number>', f6_n: '<null>', f7_l: '<string>'}, 'VvoQAtdv');
    var put_8 = objectStore_1.put({f0_f: '<array>', f1_l: '<array>', f2_f: '<number>', f3_m: '<boolean>', f4_i: '<string>', f5_o: '<object>', f6_d: '<null>', f7_v: '<string>', f8_d: '<number>', f9_y: '<string>'}, 'TwUiJuncbj');
    var put_9 = objectStore_3.put({f0_s: '<object>', f1_v: '<array>', f2_z: '<string>', f3_b: '<number>', f4_k: '<number>', f5_n: '<array>', f6_z: '<object>', f7_l: '<boolean>', f8_t: '<object>'}, 'UKTgyCKUjW');
    var put_10 = objectStore_3.put({f0_g: '<object>', f1_d: '<number>', f2_t: '<string>', f3_z: '<number>'}, 'wLSZQic');
    var index_1 = objectStore_0.index('index_15');
    var objectStore_8 = db.createObjectStore('objectStore_15', {autoIncrement: false});
    var add_13 = objectStore_0.add({f0_x: '<array>', f1_i: '<null>', f2_e: '<object>', f3_i: '<null>', f4_m: '<array>', f5_z: '<array>'}, 'hSvfYpjdpiT');
    var add_14 = objectStore_8.add({f0_b: '<string>', f1_t: '<null>', f2_l: '<null>', f3_u: '<string>', f4_y: '<boolean>', f5_f: '<array>', f6_i: '<boolean>', f7_c: '<string>'}, 'WZwdFdU');
    var add_15 = objectStore_1.add({f0_p: '<number>', f1_p: '<boolean>', f2_t: '<string>', f3_s: '<null>', f4_o: '<null>', f5_d: '<array>', f6_m: '<number>'}, 'ixzmIDDmotWf');
    var index_2 = objectStore_3.index('index_12');
    var objectStore_9 = db.createObjectStore('objectStore_16', {autoIncrement: false});
    var add_16 = objectStore_0.add({f0_n: '<array>', f1_t: '<number>', f2_j: '<number>', f3_j: '<string>', f4_l: '<number>'}, 'uzIDMsEIhcUe');
    var getAll_4 = objectStore_1.getAll();
    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('WZwdFdU', 'WZwdFdU', true, false);
        get_7 = objectStore_8.get(KeyRange_28);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('UKTgyCKUjW', 'npbIs', true, true);
        get_8 = objectStore_3.get(KeyRange_30);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_32 = IDBKeyRange.only('wLSZQic');
        get_9 = objectStore_3.get(KeyRange_32);
    }
    catch (e){
    }

    var add_17 = objectStore_9.add({f0_l: '<boolean>', f1_z: '<object>', f2_l: '<boolean>', f3_i: '<string>', f4_q: '<boolean>', f5_w: '<string>'}, 'vJFZy');
    var clear_9 = objectStore_3.clear();
    var count_6 = objectStore_8.count();
    var add_18 = objectStore_8.add({f0_o: '<number>', f1_q: '<number>', f2_k: '<number>', f3_a: '<boolean>', f4_o: '<number>', f5_l: '<object>', f6_z: '<boolean>', f7_l: '<object>', f8_i: '<number>', f9_b: '<boolean>'}, 'sPYF');
    var getAll_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('WZwdFdU', 'sPYF', false, true);
        getAll_5 = objectStore_8.getAll(KeyRange_34, 684571257);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('WZwdFdU');
        getAll_5 = objectStore_8.getAll(KeyRange_35);
    }

    var add_19 = objectStore_0.add({f0_c: '<array>', f1_a: '<string>', f2_l: '<string>', f3_m: '<boolean>', f4_a: '<array>', f5_f: '<object>', f6_c: '<object>', f7_l: '<null>', f8_h: '<null>', f9_g: '<null>'}, 'sfFF');
    var index_17 = objectStore_0.createIndex('index_17', 'test', {unique: false});
    var add_20 = objectStore_9.add({f0_w: '<string>', f1_s: '<array>', f2_j: '<boolean>', f3_d: '<boolean>', f4_e: '<object>', f5_s: '<number>', f6_j: '<array>', f7_y: '<number>'}, 'BLxoWYainmY');
    var add_21 = objectStore_0.add({f0_d: '<number>', f1_c: '<string>', f2_d: '<null>', f3_q: '<null>', f4_r: '<number>', f5_i: '<array>', f6_j: '<array>', f7_o: '<number>'}, 'ZaWfNtIfi');
    db.deleteObjectStore('objectStore_8')
    var add_22 = objectStore_3.add({f0_n: '<string>', f1_y: '<object>', f2_c: '<string>', f3_b: '<object>', f4_d: '<boolean>', f5_d: '<number>', f6_n: '<null>', f7_n: '<null>', f8_m: '<array>'}, 'MzJb');
    var put_11 = objectStore_6.put({f0_z: '<null>', f1_a: '<boolean>'}, 'jMvhVKDKun');
    var delete_1;
    try{
        KeyRange_36 = IDBKeyRange.bound('ZaWfNtIfi', 'tZJ', false, true);
        delete_1 = objectStore_0.delete(KeyRange_36);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('MzJb', false);
        getAll_6 = objectStore_3.getAll(KeyRange_38, 470205746);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('ebthz');
        getAll_6 = objectStore_3.getAll(KeyRange_39);
    }

    var count_7;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('jMvhVKDKun', false);
        count_7 = objectStore_6.count(KeyRange_40);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_10 = db.transaction(['objectStore_16', 'objectStore_7', 'objectStore_15', 'objectStore_13'], 'readonly', {durability:"relaxed"})
    var objectStore_16 = txn_10.objectStore('objectStore_16');
    var count_8;
    try{
        KeyRange_42 = IDBKeyRange.only('vJFZy');
        count_8 = objectStore_16.count(KeyRange_42);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('BLxoWYainmY', true);
        get_10 = objectStore_16.get(KeyRange_44);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_46 = IDBKeyRange.bound('vJFZy', 'vJFZy', false, true);
        get_11 = objectStore_16.get(KeyRange_46);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_16.getAllKeys(3544003559);
    var get_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('BLxoWYainmY', 'vJFZy', true, true);
        get_12 = objectStore_16.get(KeyRange_48);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_50 = IDBKeyRange.only('vJFZy');
        getAll_7 = objectStore_16.getAll(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('BLxoWYainmY');
        getAll_7 = objectStore_16.getAll(KeyRange_51);
    }

    var getAll_8;
    try{
        KeyRange_52 = IDBKeyRange.bound('vJFZy', 'BLxoWYainmY', true, true);
        getAll_8 = objectStore_16.getAll(KeyRange_52, 2349087760);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('vJFZy');
        getAll_8 = objectStore_16.getAll(KeyRange_53);
    }

    var count_9;
    try{
        KeyRange_54 = IDBKeyRange.only('BLxoWYainmY');
        count_9 = objectStore_16.count(KeyRange_54);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('BLxoWYainmY', true);
        get_13 = objectStore_16.get(KeyRange_56);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_58 = IDBKeyRange.bound('vJFZy', 'BLxoWYainmY', true, true);
        get_14 = objectStore_16.get(KeyRange_58);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_60 = IDBKeyRange.bound('BLxoWYainmY', 'vJFZy', true, false);
        get_15 = objectStore_16.get(KeyRange_60);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_62 = IDBKeyRange.only('BLxoWYainmY');
        count_10 = objectStore_16.count(KeyRange_62);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_64 = IDBKeyRange.bound('vJFZy', 'BLxoWYainmY', true, false);
        get_16 = objectStore_16.get(KeyRange_64);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_66 = IDBKeyRange.bound('vJFZy', 'BLxoWYainmY', true, false);
        getAllKeys_3 = objectStore_16.getAllKeys(KeyRange_66);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('BLxoWYainmY');
        getAllKeys_3 = objectStore_16.getAllKeys(KeyRange_67);
    }

    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_11 = db.transaction(['objectStore_16', 'objectStore_10'], 'readonly', {durability:"default"})
    var objectStore_10 = txn_11.objectStore('objectStore_10');
    var count_11;
    try{
        KeyRange_68 = IDBKeyRange.only('npbIs');
        count_11 = objectStore_10.count(KeyRange_68);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_70 = IDBKeyRange.only('npbIs');
        count_12 = objectStore_10.count(KeyRange_70);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_72 = IDBKeyRange.bound('npbIs', 'npbIs', false, true);
        getAllKeys_4 = objectStore_10.getAllKeys(KeyRange_72);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('ebthz');
        getAllKeys_4 = objectStore_10.getAllKeys(KeyRange_73);
    }

    var get_17;
    try{
        KeyRange_74 = IDBKeyRange.only('wLSZQic');
        get_17 = objectStore_10.get(KeyRange_74);
    }
    catch (e){
    }

    var count_13 = objectStore_10.count();
    var get_18;
    try{
        KeyRange_76 = IDBKeyRange.only('IZfnFxp');
        get_18 = objectStore_10.get(KeyRange_76);
    }
    catch (e){
    }

    var count_14 = objectStore_10.count();
    var get_19;
    try{
        KeyRange_78 = IDBKeyRange.only('MzJb');
        get_19 = objectStore_10.get(KeyRange_78);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_80 = IDBKeyRange.only('ebthz');
        get_20 = objectStore_10.get(KeyRange_80);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_82 = IDBKeyRange.bound('ebthz', 'IZfnFxp', true, false);
        get_21 = objectStore_10.get(KeyRange_82);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_84 = IDBKeyRange.only('ebthz');
        get_22 = objectStore_10.get(KeyRange_84);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_86 = IDBKeyRange.only('ebthz');
        getAll_9 = objectStore_10.getAll(KeyRange_86, 3366748396);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('MzJb');
        getAll_9 = objectStore_10.getAll(KeyRange_87);
    }

    var get_23;
    try{
        KeyRange_88 = IDBKeyRange.bound('UKTgyCKUjW', 'wLSZQic', true, false);
        get_23 = objectStore_10.get(KeyRange_88);
    }
    catch (e){
    }

    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_11.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_11.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_12 = db.transaction(['objectStore_10'], 'readwrite', {durability:"default"})
    var objectStore_10 = txn_12.objectStore('objectStore_10');
    var clear_10 = objectStore_10.clear();
    var put_12 = objectStore_10.put({f0_f: '<boolean>', f1_r: '<string>', f2_v: '<null>', f3_u: '<object>', f4_k: '<object>'}, 'CBYhHnxj');
    var index_3 = objectStore_10.index('index_12');
    var clear_11 = objectStore_10.clear();
    var index_4 = objectStore_10.index('index_12');
    var get_24;
    try{
        KeyRange_90 = IDBKeyRange.bound('UKTgyCKUjW', 'IZfnFxp', true, true);
        get_24 = objectStore_10.get(KeyRange_90);
    }
    catch (e){
    }

    var put_13 = objectStore_10.put({f0_y: '<boolean>'}, 'tEQhKyaJiUY');
    var get_25;
    try{
        KeyRange_92 = IDBKeyRange.bound('MzJb', 'tEQhKyaJiUY', false, true);
        get_25 = objectStore_10.get(KeyRange_92);
    }
    catch (e){
    }

    var put_14 = objectStore_10.put({f0_x: '<object>', f1_u: '<number>', f2_k: '<boolean>', f3_f: '<object>'}, 'HWslN');
    var clear_12 = objectStore_10.clear();
    var getAll_10 = objectStore_10.getAll();
    var get_26;
    try{
        KeyRange_94 = IDBKeyRange.bound('CBYhHnxj', 'CBYhHnxj', false, true);
        get_26 = objectStore_10.get(KeyRange_94);
    }
    catch (e){
    }

    var add_23 = objectStore_10.add({f0_w: '<object>', f1_k: '<boolean>', f2_m: '<object>', f3_z: '<number>', f4_j: '<number>', f5_b: '<object>', f6_z: '<string>', f7_p: '<boolean>'}, 'RfCV');
    var delete_2;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('ebthz', false);
        delete_2 = objectStore_10.delete(KeyRange_96);
    }
    catch (e){
    }

    txn_12.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_12.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_13 = db.transaction(['objectStore_7'], 'readonly', {durability:"strict"})
    var objectStore_7 = txn_13.objectStore('objectStore_7');
    var get_27;
    try{
        KeyRange_98 = IDBKeyRange.only('hSvfYpjdpiT');
        get_27 = objectStore_7.get(KeyRange_98);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_100 = IDBKeyRange.only('tZJ');
        count_15 = objectStore_7.count(KeyRange_100);
    }
    catch (e){
    }

    var count_16 = objectStore_7.count();
    var get_28;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('LbYqKi', false);
        get_28 = objectStore_7.get(KeyRange_102);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_104 = IDBKeyRange.bound('sfFF', 'tZJ', true, true);
        count_17 = objectStore_7.count(KeyRange_104);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('uzIDMsEIhcUe', false);
        get_29 = objectStore_7.get(KeyRange_106);
    }
    catch (e){
    }

    var count_18 = objectStore_7.count();
    var getAllKeys_5;
    try{
        KeyRange_108 = IDBKeyRange.bound('LbYqKi', 'tZJ', true, true);
        getAllKeys_5 = objectStore_7.getAllKeys(KeyRange_108);
    }
    catch (e){
        KeyRange_109 = IDBKeyRange.only('LbYqKi');
        getAllKeys_5 = objectStore_7.getAllKeys(KeyRange_109);
    }

    var getAllKeys_6 = objectStore_7.getAllKeys(1804044668);
    var count_19;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('ZXMwP', false);
        count_19 = objectStore_7.count(KeyRange_110);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_112 = IDBKeyRange.bound('LbYqKi', 'ZaWfNtIfi', true, true);
        get_30 = objectStore_7.get(KeyRange_112);
    }
    catch (e){
    }

    var getAllKeys_7;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('ZaWfNtIfi', false);
        getAllKeys_7 = objectStore_7.getAllKeys(KeyRange_114, 2101952956);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('cEeFBHuhHTuc');
        getAllKeys_7 = objectStore_7.getAllKeys(KeyRange_115);
    }

    var getAll_11 = objectStore_7.getAll();
    var get_31;
    try{
        KeyRange_116 = IDBKeyRange.bound('ZaWfNtIfi', 'tZJ', true, true);
        get_31 = objectStore_7.get(KeyRange_116);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_118 = IDBKeyRange.bound('ZXMwP', 'tZJ', false, true);
        getAllKeys_8 = objectStore_7.getAllKeys(KeyRange_118, 330555044);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('sfFF');
        getAllKeys_8 = objectStore_7.getAllKeys(KeyRange_119);
    }

    var get_32;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('uzIDMsEIhcUe', false);
        get_32 = objectStore_7.get(KeyRange_120);
    }
    catch (e){
    }

    var getAll_12;
    try{
        KeyRange_122 = IDBKeyRange.only('cEeFBHuhHTuc');
        getAll_12 = objectStore_7.getAll(KeyRange_122);
    }
    catch (e){
        KeyRange_123 = IDBKeyRange.only('tZJ');
        getAll_12 = objectStore_7.getAll(KeyRange_123);
    }

    var get_33;
    try{
        KeyRange_124 = IDBKeyRange.bound('cEeFBHuhHTuc', 'sfFF', true, true);
        get_33 = objectStore_7.get(KeyRange_124);
    }
    catch (e){
    }

    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_13.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_13.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_14 = db.transaction(['objectStore_15', 'objectStore_7', 'objectStore_13'], 'readonly', {durability:"default"})
    var objectStore_7 = txn_14.objectStore('objectStore_7');
    var get_34;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('ZaWfNtIfi', false);
        get_34 = objectStore_7.get(KeyRange_126);
    }
    catch (e){
    }

    var index_5 = objectStore_7.index('index_15');
    var count_20;
    try{
        KeyRange_128 = IDBKeyRange.bound('LbYqKi', 'ZaWfNtIfi', false, true);
        count_20 = objectStore_7.count(KeyRange_128);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_7.getAllKeys();
    var count_21 = objectStore_7.count();
    var get_35;
    try{
        KeyRange_130 = IDBKeyRange.only('ZaWfNtIfi');
        get_35 = objectStore_7.get(KeyRange_130);
    }
    catch (e){
    }

    var index_6 = objectStore_7.index('index_15');
    var getAllKeys_10 = objectStore_7.getAllKeys(3205116299);
    var count_22;
    try{
        KeyRange_132 = IDBKeyRange.only('tZJ');
        count_22 = objectStore_7.count(KeyRange_132);
    }
    catch (e){
    }

    var get_36;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('LbYqKi', false);
        get_36 = objectStore_7.get(KeyRange_134);
    }
    catch (e){
    }

    var count_23 = objectStore_7.count();
    var index_7 = objectStore_7.index('index_17');
    var getAllKeys_11;
    try{
        KeyRange_136 = IDBKeyRange.bound('sfFF', 'sfFF', false, false);
        getAllKeys_11 = objectStore_7.getAllKeys(KeyRange_136, 3498147744);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('cEeFBHuhHTuc');
        getAllKeys_11 = objectStore_7.getAllKeys(KeyRange_137);
    }

    var get_37;
    try{
        KeyRange_138 = IDBKeyRange.bound('cEeFBHuhHTuc', 'tZJ', true, true);
        get_37 = objectStore_7.get(KeyRange_138);
    }
    catch (e){
    }

    var index_8 = objectStore_7.index('index_15');
    var getAllKeys_12 = objectStore_7.getAllKeys();
    var count_24 = objectStore_7.count();
    var get_38;
    try{
        KeyRange_140 = IDBKeyRange.bound('sfFF', 'tZJ', true, true);
        get_38 = objectStore_7.get(KeyRange_140);
    }
    catch (e){
    }

    txn_14.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_14.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_15 = db.transaction(['objectStore_10'], 'readwrite', {durability:"relaxed"})
    var objectStore_10 = txn_15.objectStore('objectStore_10');
    var get_39;
    try{
        KeyRange_142 = IDBKeyRange.bound('RfCV', 'IZfnFxp', false, true);
        get_39 = objectStore_10.get(KeyRange_142);
    }
    catch (e){
    }

    var clear_13 = objectStore_10.clear();
    var put_15 = objectStore_10.put({f0_a: '<null>', f1_z: '<array>', f2_r: '<object>', f3_c: '<array>', f4_s: '<array>', f5_c: '<null>', f6_d: '<number>', f7_d: '<object>'}, 'ecxzgy');
    var clear_14 = objectStore_10.clear();
    var get_40;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('wLSZQic', false);
        get_40 = objectStore_10.get(KeyRange_144);
    }
    catch (e){
    }

    var getAllKeys_13;
    try{
        KeyRange_146 = IDBKeyRange.bound('IZfnFxp', 'ebthz', false, false);
        getAllKeys_13 = objectStore_10.getAllKeys(KeyRange_146);
    }
    catch (e){
        KeyRange_147 = IDBKeyRange.only('tEQhKyaJiUY');
        getAllKeys_13 = objectStore_10.getAllKeys(KeyRange_147);
    }

    var clear_15 = objectStore_10.clear();
    var getAll_13;
    try{
        KeyRange_148 = IDBKeyRange.bound('RfCV', 'ecxzgy', false, true);
        getAll_13 = objectStore_10.getAll(KeyRange_148);
    }
    catch (e){
        KeyRange_149 = IDBKeyRange.only('npbIs');
        getAll_13 = objectStore_10.getAll(KeyRange_149);
    }

    var put_16 = objectStore_10.put({f0_p: '<number>', f1_h: '<boolean>', f2_v: '<object>', f3_t: '<array>', f4_d: '<null>', f5_h: '<array>'}, 'MBFpzpOzaF');
    var get_41;
    try{
        KeyRange_150 = IDBKeyRange.bound('UKTgyCKUjW', 'CBYhHnxj', false, true);
        get_41 = objectStore_10.get(KeyRange_150);
    }
    catch (e){
    }

    var clear_16 = objectStore_10.clear();
    var put_17 = objectStore_10.put({f0_a: '<boolean>'}, 'PtmXKPrfa');
    var getAllKeys_14;
    try{
        KeyRange_152 = IDBKeyRange.lowerBound('CBYhHnxj', true);
        getAllKeys_14 = objectStore_10.getAllKeys(KeyRange_152);
    }
    catch (e){
        KeyRange_153 = IDBKeyRange.only('UKTgyCKUjW');
        getAllKeys_14 = objectStore_10.getAllKeys(KeyRange_153);
    }

    var add_24 = objectStore_10.add({f0_f: '<array>', f1_b: '<string>', f2_e: '<boolean>', f3_i: '<object>', f4_b: '<object>', f5_d: '<null>', f6_l: '<object>', f7_a: '<null>', f8_i: '<number>'}, 'cxMZnXjMO');
    var get_42;
    try{
        KeyRange_154 = IDBKeyRange.only('IZfnFxp');
        get_42 = objectStore_10.get(KeyRange_154);
    }
    catch (e){
    }

    txn_15.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_15.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_15.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_16 = db.transaction(['objectStore_10'], 'readwrite', {durability:"strict"})
    var objectStore_10 = txn_16.objectStore('objectStore_10');
    var get_43;
    try{
        KeyRange_156 = IDBKeyRange.bound('MzJb', 'ebthz', true, false);
        get_43 = objectStore_10.get(KeyRange_156);
    }
    catch (e){
    }

    var add_25 = objectStore_10.add({f0_f: '<number>'}, 'hqiImv');
    var count_25;
    try{
        KeyRange_158 = IDBKeyRange.bound('PtmXKPrfa', 'HWslN', true, false);
        count_25 = objectStore_10.count(KeyRange_158);
    }
    catch (e){
    }

    var clear_17 = objectStore_10.clear();
    var count_26 = objectStore_10.count();
    var delete_3;
    try{
        KeyRange_160 = IDBKeyRange.lowerBound('tEQhKyaJiUY', true);
        delete_3 = objectStore_10.delete(KeyRange_160);
    }
    catch (e){
    }

    var clear_18 = objectStore_10.clear();
    var index_9 = objectStore_10.index('index_12');
    var count_27 = objectStore_10.count();
    var delete_4;
    try{
        KeyRange_162 = IDBKeyRange.bound('wLSZQic', 'wLSZQic', false, true);
        delete_4 = objectStore_10.delete(KeyRange_162);
    }
    catch (e){
    }

    var put_18 = objectStore_10.put({f0_f: '<boolean>', f1_x: '<array>', f2_s: '<string>'}, 'HQkpICQ');
    var count_28;
    try{
        KeyRange_164 = IDBKeyRange.only('tEQhKyaJiUY');
        count_28 = objectStore_10.count(KeyRange_164);
    }
    catch (e){
    }

    var clear_19 = objectStore_10.clear();
    var count_29;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('wLSZQic', false);
        count_29 = objectStore_10.count(KeyRange_166);
    }
    catch (e){
    }

    var delete_5;
    try{
        KeyRange_168 = IDBKeyRange.bound('ecxzgy', 'PtmXKPrfa', false, false);
        delete_5 = objectStore_10.delete(KeyRange_168);
    }
    catch (e){
    }

    var count_30 = objectStore_10.count();
    var clear_20 = objectStore_10.clear();
    var count_31;
    try{
        KeyRange_170 = IDBKeyRange.only('tEQhKyaJiUY');
        count_31 = objectStore_10.count(KeyRange_170);
    }
    catch (e){
    }

    var put_19 = objectStore_10.put({f0_i: '<object>', f1_b: '<object>', f2_z: '<null>', f3_l: '<array>', f4_s: '<string>', f5_m: '<string>', f6_o: '<null>'}, 'TQv');
    var add_26 = objectStore_10.add({f0_s: '<number>', f1_b: '<null>', f2_v: '<boolean>', f3_s: '<object>', f4_c: '<number>', f5_s: '<string>', f6_x: '<null>', f7_g: '<array>', f8_h: '<null>'}, 'rbyUguy');
    var getAllKeys_15;
    try{
        KeyRange_172 = IDBKeyRange.bound('MzJb', 'CBYhHnxj', true, true);
        getAllKeys_15 = objectStore_10.getAllKeys(KeyRange_172, 3827657140);
    }
    catch (e){
        KeyRange_173 = IDBKeyRange.only('cxMZnXjMO');
        getAllKeys_15 = objectStore_10.getAllKeys(KeyRange_173);
    }

    var getAll_14;
    try{
        KeyRange_174 = IDBKeyRange.only('ecxzgy');
        getAll_14 = objectStore_10.getAll(KeyRange_174, 1701181115);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('tEQhKyaJiUY');
        getAll_14 = objectStore_10.getAll(KeyRange_175);
    }

    var getAll_15 = objectStore_10.getAll();
    var clear_21 = objectStore_10.clear();
    txn_16.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_16.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_16.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_17 = db.transaction(['objectStore_7', 'objectStore_16', 'objectStore_10'], 'readwrite', {durability:"default"})
    var objectStore_10 = txn_17.objectStore('objectStore_10');
    var get_44;
    try{
        KeyRange_176 = IDBKeyRange.bound('tEQhKyaJiUY', 'wLSZQic', true, false);
        get_44 = objectStore_10.get(KeyRange_176);
    }
    catch (e){
    }

    var put_20 = objectStore_10.put({f0_k: '<null>', f1_m: '<number>', f2_c: '<number>', f3_l: '<array>', f4_g: '<boolean>', f5_k: '<string>', f6_z: '<boolean>', f7_y: '<object>'}, 'tqRXgFXawGi');
    var put_21 = objectStore_10.put({f0_c: '<array>', f1_n: '<string>', f2_u: '<object>', f3_h: '<null>', f4_e: '<array>', f5_v: '<boolean>', f6_i: '<boolean>'}, 'lrUyklrQXa');
    var get_45;
    try{
        KeyRange_178 = IDBKeyRange.only('TQv');
        get_45 = objectStore_10.get(KeyRange_178);
    }
    catch (e){
    }

    var add_27 = objectStore_10.add({f0_f: '<null>', f1_g: '<array>', f2_h: '<boolean>'}, 'BYA');
    var getAll_16;
    try{
        KeyRange_180 = IDBKeyRange.bound('wLSZQic', 'npbIs', true, false);
        getAll_16 = objectStore_10.getAll(KeyRange_180);
    }
    catch (e){
        KeyRange_181 = IDBKeyRange.only('PtmXKPrfa');
        getAll_16 = objectStore_10.getAll(KeyRange_181);
    }

    var get_46;
    try{
        KeyRange_182 = IDBKeyRange.bound('TQv', 'rbyUguy', false, true);
        get_46 = objectStore_10.get(KeyRange_182);
    }
    catch (e){
    }

    var getAll_17 = objectStore_10.getAll(2919811484);
    var clear_22 = objectStore_10.clear();
    var count_32;
    try{
        KeyRange_184 = IDBKeyRange.bound('tEQhKyaJiUY', 'npbIs', false, true);
        count_32 = objectStore_10.count(KeyRange_184);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_186 = IDBKeyRange.only('HWslN');
        delete_6 = objectStore_10.delete(KeyRange_186);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_188 = IDBKeyRange.only('PtmXKPrfa');
        count_33 = objectStore_10.count(KeyRange_188);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_190 = IDBKeyRange.bound('ebthz', 'ecxzgy', false, false);
        get_47 = objectStore_10.get(KeyRange_190);
    }
    catch (e){
    }

    var count_34 = objectStore_10.count();
    var getAllKeys_16;
    try{
        KeyRange_192 = IDBKeyRange.only('ebthz');
        getAllKeys_16 = objectStore_10.getAllKeys(KeyRange_192);
    }
    catch (e){
        KeyRange_193 = IDBKeyRange.only('ecxzgy');
        getAllKeys_16 = objectStore_10.getAllKeys(KeyRange_193);
    }

    var add_28 = objectStore_10.add({f0_h: '<null>', f1_s: '<object>', f2_i: '<array>', f3_d: '<number>', f4_u: '<string>', f5_t: '<string>', f6_i: '<string>', f7_o: '<object>', f8_a: '<number>', f9_z: '<array>'}, 'vboRZkW');
    var count_35 = objectStore_10.count();
    var add_29 = objectStore_10.add({f0_f: '<number>', f1_w: '<boolean>', f2_u: '<null>', f3_o: '<null>', f4_k: '<number>', f5_l: '<boolean>', f6_a: '<object>', f7_q: '<boolean>'}, 'jiaeBKNDNP');
    var add_30 = objectStore_10.add({f0_y: '<string>', f1_a: '<boolean>', f2_d: '<boolean>', f3_w: '<string>', f4_d: '<object>', f5_z: '<string>', f6_y: '<array>', f7_n: '<object>', f8_i: '<null>'}, 'xuYmyiCaF');
    var clear_23 = objectStore_10.clear();
    var count_36 = objectStore_10.count();
    var clear_24 = objectStore_10.clear();
    txn_17.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_17.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_17.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_18 = db.transaction(['objectStore_16'], 'readwrite', {durability:"default"})
    var objectStore_16 = txn_18.objectStore('objectStore_16');
    var count_37;
    try{
        KeyRange_194 = IDBKeyRange.bound('BLxoWYainmY', 'vJFZy', false, false);
        count_37 = objectStore_16.count(KeyRange_194);
    }
    catch (e){
    }

    var add_31 = objectStore_16.add({f0_c: '<number>', f1_e: '<string>'}, 'rESYheDxmJmI');
    var count_38 = objectStore_16.count();
    var add_32 = objectStore_16.add({f0_n: '<object>'}, 'bhESXo');
    var get_48;
    try{
        KeyRange_196 = IDBKeyRange.bound('vJFZy', 'BLxoWYainmY', false, true);
        get_48 = objectStore_16.get(KeyRange_196);
    }
    catch (e){
    }

    var count_39 = objectStore_16.count();
    var add_33 = objectStore_16.add({f0_f: '<object>', f1_f: '<boolean>', f2_m: '<string>', f3_u: '<boolean>', f4_f: '<array>', f5_l: '<object>'}, 'sEZQSxQWs');
    var count_40 = objectStore_16.count();
    var clear_25 = objectStore_16.clear();
    var count_41;
    try{
        KeyRange_198 = IDBKeyRange.bound('BLxoWYainmY', 'BLxoWYainmY', true, false);
        count_41 = objectStore_16.count(KeyRange_198);
    }
    catch (e){
    }

    var count_42;
    try{
        KeyRange_200 = IDBKeyRange.lowerBound('bhESXo', true);
        count_42 = objectStore_16.count(KeyRange_200);
    }
    catch (e){
    }

    var get_49;
    try{
        KeyRange_202 = IDBKeyRange.bound('BLxoWYainmY', 'sEZQSxQWs', false, false);
        get_49 = objectStore_16.get(KeyRange_202);
    }
    catch (e){
    }

    var clear_26 = objectStore_16.clear();
    var clear_27 = objectStore_16.clear();
    var add_34 = objectStore_16.add({f0_g: '<string>', f1_r: '<array>', f2_c: '<boolean>', f3_j: '<string>', f4_l: '<object>', f5_z: '<boolean>', f6_q: '<array>', f7_d: '<null>'}, 'zsfIlBNTSG');
    var getAllKeys_17;
    try{
        KeyRange_204 = IDBKeyRange.lowerBound('zsfIlBNTSG', false);
        getAllKeys_17 = objectStore_16.getAllKeys(KeyRange_204, 2843154922);
    }
    catch (e){
        KeyRange_205 = IDBKeyRange.only('rESYheDxmJmI');
        getAllKeys_17 = objectStore_16.getAllKeys(KeyRange_205);
    }

    var add_35 = objectStore_16.add({f0_f: '<array>'}, 'VNDAKxxwvHR');
    var get_50;
    try{
        KeyRange_206 = IDBKeyRange.only('vJFZy');
        get_50 = objectStore_16.get(KeyRange_206);
    }
    catch (e){
    }

    var add_36 = objectStore_16.add({f0_w: '<array>', f1_d: '<boolean>', f2_e: '<array>', f3_m: '<object>', f4_x: '<null>', f5_k: '<boolean>'}, 'YhXUklij');
    txn_18.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_18.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_18.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_19 = db.transaction(['objectStore_15', 'objectStore_7'], 'readonly', {durability:"default"})
    var objectStore_15 = txn_19.objectStore('objectStore_15');
    var get_51;
    try{
        KeyRange_208 = IDBKeyRange.bound('WZwdFdU', 'WZwdFdU', true, true);
        get_51 = objectStore_15.get(KeyRange_208);
    }
    catch (e){
    }

    var get_52;
    try{
        KeyRange_210 = IDBKeyRange.bound('sPYF', 'WZwdFdU', true, true);
        get_52 = objectStore_15.get(KeyRange_210);
    }
    catch (e){
    }

    var count_43 = objectStore_15.count();
    var get_53;
    try{
        KeyRange_212 = IDBKeyRange.bound('sPYF', 'sPYF', false, true);
        get_53 = objectStore_15.get(KeyRange_212);
    }
    catch (e){
    }

    var get_54;
    try{
        KeyRange_214 = IDBKeyRange.bound('sPYF', 'WZwdFdU', false, true);
        get_54 = objectStore_15.get(KeyRange_214);
    }
    catch (e){
    }

    var get_55;
    try{
        KeyRange_216 = IDBKeyRange.bound('sPYF', 'sPYF', true, false);
        get_55 = objectStore_15.get(KeyRange_216);
    }
    catch (e){
    }

    var count_44;
    try{
        KeyRange_218 = IDBKeyRange.only('sPYF');
        count_44 = objectStore_15.count(KeyRange_218);
    }
    catch (e){
    }

    var count_45 = objectStore_15.count();
    var count_46;
    try{
        KeyRange_220 = IDBKeyRange.only('sPYF');
        count_46 = objectStore_15.count(KeyRange_220);
    }
    catch (e){
    }

    var get_56;
    try{
        KeyRange_222 = IDBKeyRange.bound('sPYF', 'WZwdFdU', true, false);
        get_56 = objectStore_15.get(KeyRange_222);
    }
    catch (e){
    }

    var count_47 = objectStore_15.count();
    var count_48 = objectStore_15.count();
    var getAllKeys_18 = objectStore_15.getAllKeys(639445456);
    var get_57;
    try{
        KeyRange_224 = IDBKeyRange.lowerBound('WZwdFdU', false);
        get_57 = objectStore_15.get(KeyRange_224);
    }
    catch (e){
    }

    var count_49 = objectStore_15.count();
    var count_50 = objectStore_15.count();
    var count_51 = objectStore_15.count();
    var getAllKeys_19;
    try{
        KeyRange_226 = IDBKeyRange.bound('sPYF', 'sPYF', true, false);
        getAllKeys_19 = objectStore_15.getAllKeys(KeyRange_226);
    }
    catch (e){
        KeyRange_227 = IDBKeyRange.only('sPYF');
        getAllKeys_19 = objectStore_15.getAllKeys(KeyRange_227);
    }

    var count_52;
    try{
        KeyRange_228 = IDBKeyRange.only('WZwdFdU');
        count_52 = objectStore_15.count(KeyRange_228);
    }
    catch (e){
    }

    var count_53 = objectStore_15.count();
    txn_19.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_19.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_19.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6358')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};