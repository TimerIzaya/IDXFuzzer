let db;
const openRequest = window.indexedDB.open('str_2349', 7264995991690492)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0');
    var add_0 = objectStore_0.add({f0_l: '<boolean>', f1_p: '<null>'}, 'oULGgBeict');
    var add_1 = objectStore_0.add({f0_b: '<number>', f1_q: '<number>', f2_o: '<object>', f3_f: '<number>', f4_u: '<object>', f5_l: '<string>', f6_z: '<object>', f7_w: '<array>', f8_c: '<null>'}, 'UztzQtCp');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('oULGgBeict', 'oULGgBeict', false, true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('oULGgBeict', true);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('UztzQtCp');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('oULGgBeict', 'oULGgBeict', false, false);
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'iMjE'});
    var add_2 = objectStore_0.add({f0_w: '<null>', f1_c: '<string>', f2_y: '<array>', f3_u: '<null>', f4_n: '<null>'}, 'jaKHmBUfDZtW');
    var index_0 = objectStore_1.createIndex('index_0', 'test', {unique: false, multiEntry: true});
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_t: '<object>', f1_m: '<null>', f2_z: '<string>'}, 'uek');
    var put_1 = objectStore_1.put({f0_q: '<null>', f1_h: '<null>'}, 'BGFml');
    var clear_3 = objectStore_0.clear();
    var put_2 = objectStore_1.put({f0_b: '<string>', f1_l: '<null>', f2_u: '<number>', f3_m: '<boolean>', f4_m: '<string>', f5_g: '<number>', f6_w: '<null>', f7_j: '<number>', f8_p: '<string>'}, 'kATyoW');
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('oULGgBeict', 'jaKHmBUfDZtW', true, false);
        count_0 = objectStore_0.count(KeyRange_6);
    }
    catch (e){
    }

    var clear_4 = objectStore_1.clear();
    var add_3 = objectStore_0.add({f0_k: '<array>', f1_v: '<boolean>', f2_w: '<string>'}, 'vbAZRceMed');
    var put_3 = objectStore_0.put({f0_u: '<boolean>', f1_u: '<boolean>', f2_v: '<number>', f3_j: '<number>', f4_u: '<number>', f5_x: '<boolean>'}, 'pOxNe');
    var clear_5 = objectStore_0.clear();
    var add_4 = objectStore_1.add({f0_g: '<array>', f1_s: '<null>', f2_d: '<object>', f3_d: '<object>', f4_p: '<null>', f5_s: '<object>', f6_v: '<string>'}, 'YtisdNbnF');
    var clear_6 = objectStore_1.clear();
    var clear_7 = objectStore_0.clear();
    var count_1 = objectStore_0.count();
    var put_4 = objectStore_0.put({f0_x: '<array>', f1_y: '<object>', f2_v: '<null>', f3_x: '<number>'}, 'sTK');
    var clear_8 = objectStore_1.clear();
    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('YtisdNbnF', 'YtisdNbnF', false, false);
        delete_1 = objectStore_1.delete(KeyRange_8);
    }
    catch (e){
    }

    var add_5 = objectStore_1.add({f0_m: '<string>', f1_n: '<boolean>', f2_t: '<boolean>', f3_i: '<array>', f4_h: '<array>', f5_v: '<string>', f6_k: '<null>'}, 'dfNfEMcITmH');
    var index_1 = objectStore_1.createIndex('index_1', 'test', {multiEntry: false});
    var clear_9 = objectStore_0.clear();
    var clear_10 = objectStore_0.clear();
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('UztzQtCp', 'uek', false, false);
        getAll_0 = objectStore_0.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('sTK');
        getAll_0 = objectStore_0.getAll(KeyRange_11);
    }

    var index_2 = objectStore_1.createIndex('index_2', 'test', {unique: true});
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('sTK', 'jaKHmBUfDZtW', true, false);
        get_1 = objectStore_0.get(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_2');
    var clear_11 = objectStore_0.clear();
    var put_5 = objectStore_1.put({f0_y: '<string>', f1_j: '<boolean>', f2_g: '<null>', f3_w: '<null>', f4_m: '<object>', f5_x: '<number>', f6_w: '<string>', f7_e: '<string>', f8_u: '<array>', f9_u: '<null>'}, 'eoXH');
    var put_6 = objectStore_2.put({f0_o: '<array>', f1_d: '<array>', f2_a: '<null>'}, 'fPSqCzXXBShX');
    var add_6 = objectStore_1.add({f0_f: '<array>', f1_e: '<null>', f2_i: '<number>', f3_z: '<object>'}, 'vfe');
    var objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'KMSXdB', autoIncrement: true});
    var index_3 = objectStore_0.createIndex('index_3', 'test', {unique: true});
    var objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'AfDhe', autoIncrement: false});
    var clear_12 = objectStore_2.clear();
    var clear_13 = objectStore_0.clear();
    var getAll_1 = objectStore_0.getAll(1641041385);
    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('fPSqCzXXBShX', false);
        count_2 = objectStore_2.count(KeyRange_14);
    }
    catch (e){
    }

    var count_3 = objectStore_2.count();
    var clear_14 = objectStore_0.clear();
    var clear_15 = objectStore_1.clear();
    var clear_16 = objectStore_4.clear();
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('fPSqCzXXBShX', 'fPSqCzXXBShX', true, false);
        count_4 = objectStore_2.count(KeyRange_16);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_18 = IDBKeyRange.only('fPSqCzXXBShX');
        getAll_2 = objectStore_2.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('fPSqCzXXBShX');
        getAll_2 = objectStore_2.getAll(KeyRange_19);
    }

    var objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'MUBM', autoIncrement: false});
    var clear_17 = objectStore_0.clear();
    var clear_18 = objectStore_0.clear();
    var objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'kYNGTJcJkuQ'});
    var add_7 = objectStore_1.add({f0_t: '<null>', f1_d: '<object>', f2_z: '<string>'}, 'zrXCENhHXmb');
    var index_0 = objectStore_1.index('index_2');
    var index_4 = objectStore_1.createIndex('index_4', 'test', {multiEntry: true});
    var get_2;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('dfNfEMcITmH', false);
        get_2 = objectStore_1.get(KeyRange_20);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('dfNfEMcITmH', 'zrXCENhHXmb', false, true);
        getAll_3 = objectStore_1.getAll(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('kATyoW');
        getAll_3 = objectStore_1.getAll(KeyRange_23);
    }

    var index_5 = objectStore_0.createIndex('index_5', 'test');
    var clear_19 = objectStore_5.clear();
    var index_6 = objectStore_4.createIndex('index_6', 'test', {unique: true, multiEntry: false});
    var getAll_4;
    try{
        KeyRange_24 = IDBKeyRange.only('oULGgBeict');
        getAll_4 = objectStore_0.getAll(KeyRange_24, 875931785);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('oULGgBeict');
        getAll_4 = objectStore_0.getAll(KeyRange_25);
    }

    var clear_20 = objectStore_0.clear();
    var index_7 = objectStore_3.createIndex('index_7', 'test', {unique: true});
    var add_8 = objectStore_3.add({f0_s: '<array>'}, 'zPf');
    var count_5 = objectStore_1.count();
    var add_9 = objectStore_2.add({f0_y: '<null>', f1_d: '<string>'}, 'KAt');
    var index_8 = objectStore_5.createIndex('index_8', 'test', {unique: false, multiEntry: false});
    var clear_21 = objectStore_3.clear();
    var objectStore_7 = db.createObjectStore('objectStore_7', {autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_1'], 'readwrite', {durability:"default"})
    var objectStore_1;
    txn_0.objectStore('objectStore_1')
    var add_10 = objectStore_1.add({f0_k: '<string>'}, 'USmbl');
    var get_3;
    try{
        KeyRange_26 = IDBKeyRange.only('vfe');
        get_3 = objectStore_1.get(KeyRange_26);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.bound('BGFml', 'BGFml', false, false);
        get_4 = objectStore_1.get(KeyRange_28);
    }
    catch (e){
    }

    var count_6 = objectStore_1.count();
    var add_11 = objectStore_1.add({f0_n: '<string>', f1_h: '<string>', f2_x: '<object>', f3_b: '<string>', f4_q: '<null>', f5_i: '<boolean>'}, 'ZCRMsgphxIeh');
    var put_7 = objectStore_1.put({f0_i: '<string>', f1_w: '<array>', f2_w: '<number>', f3_y: '<array>', f4_o: '<object>', f5_d: '<boolean>'}, 'XCKdbC');
    var add_12 = objectStore_1.add({f0_p: '<number>', f1_x: '<boolean>', f2_m: '<object>', f3_s: '<string>', f4_g: '<null>', f5_g: '<string>', f6_p: '<boolean>', f7_r: '<string>', f8_g: '<object>'}, 'LqlUeB');
    var clear_22 = objectStore_1.clear();
    var clear_23 = objectStore_1.clear();
    var add_13 = objectStore_1.add({f0_k: '<number>', f1_r: '<boolean>'}, 'KFbAL');
    var clear_24 = objectStore_1.clear();
    var count_7;
    try{
        KeyRange_30 = IDBKeyRange.only('USmbl');
        count_7 = objectStore_1.count(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('LqlUeB', false);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_32, 3555677930);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('USmbl');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_33);
    }

    var clear_25 = objectStore_1.clear();
    var clear_26 = objectStore_1.clear();
    var getAllKeys_2 = objectStore_1.getAllKeys();
    var count_8 = objectStore_1.count();
    var get_5;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('KFbAL', true);
        get_5 = objectStore_1.get(KeyRange_34);
    }
    catch (e){
    }

    var clear_27 = objectStore_1.clear();
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1 = db.transaction(['objectStore_3', 'objectStore_2', 'objectStore_4', 'objectStore_7'], 'readwrite', {durability:"strict"})
    var objectStore_7;
    txn_0.objectStore('objectStore_7')
    var clear_28 = objectStore_7.clear();
    var clear_29 = objectStore_7.clear();
    var clear_30 = objectStore_7.clear();
    var clear_31 = objectStore_7.clear();
    var put_8 = objectStore_7.put({f0_c: '<number>', f1_e: '<null>', f2_r: '<boolean>', f3_f: '<string>', f4_s: '<object>', f5_p: '<array>'}, 'GQVcZNKMXuDy');
    var count_9;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('GQVcZNKMXuDy', true);
        count_9 = objectStore_7.count(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_7.getAllKeys(4126696828);
    var put_9 = objectStore_7.put({f0_r: '<object>', f1_q: '<array>', f2_s: '<null>', f3_d: '<number>', f4_r: '<boolean>', f5_t: '<boolean>', f6_d: '<boolean>', f7_u: '<number>'}, 'vYdnacHL');
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2 = db.transaction(['objectStore_1'], 'readonly', {durability:"default"})
    var objectStore_1;
    txn_2.objectStore('objectStore_1')
    var get_6;
    try{
        KeyRange_38 = IDBKeyRange.bound('USmbl', 'dfNfEMcITmH', true, false);
        get_6 = objectStore_1.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_40 = IDBKeyRange.only('vfe');
        getAllKeys_4 = objectStore_1.getAllKeys(KeyRange_40, 122166595);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('vfe');
        getAllKeys_4 = objectStore_1.getAllKeys(KeyRange_41);
    }

    var getAll_5;
    try{
        KeyRange_42 = IDBKeyRange.only('eoXH');
        getAll_5 = objectStore_1.getAll(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('KFbAL');
        getAll_5 = objectStore_1.getAll(KeyRange_43);
    }

    var put_10 = objectStore_1.put({f0_z: '<object>', f1_p: '<string>', f2_j: '<null>'}, 'NcyuqXBPG');
    var add_14 = objectStore_1.add({f0_n: '<string>', f1_j: '<array>', f2_u: '<boolean>', f3_l: '<null>', f4_m: '<string>', f5_u: '<null>'}, 'oWyg');
    var put_11 = objectStore_1.put({f0_k: '<null>', f1_s: '<string>'}, 'VYAYRORuqq');
    var add_15 = objectStore_1.add({f0_c: '<array>', f1_x: '<array>', f2_m: '<boolean>'}, 'QcYquDG');
    var getAll_6;
    try{
        KeyRange_44 = IDBKeyRange.bound('USmbl', 'oWyg', true, false);
        getAll_6 = objectStore_1.getAll(KeyRange_44, 2912518686);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('KFbAL');
        getAll_6 = objectStore_1.getAll(KeyRange_45);
    }

    var add_16 = objectStore_1.add({f0_k: '<string>', f1_d: '<array>', f2_a: '<number>'}, 'LcmXhiGF');
    var count_10 = objectStore_1.count();
    var add_17 = objectStore_1.add({f0_r: '<string>', f1_k: '<null>', f2_h: '<array>', f3_v: '<boolean>', f4_j: '<boolean>', f5_a: '<array>', f6_w: '<object>', f7_y: '<array>', f8_y: '<number>'}, 'UznCKuyKQKTt');
    var put_12 = objectStore_1.put({f0_g: '<boolean>', f1_d: '<number>', f2_o: '<null>', f3_q: '<array>', f4_s: '<array>', f5_u: '<null>', f6_v: '<object>', f7_o: '<object>', f8_m: '<boolean>', f9_n: '<number>'}, 'mUQ');
    var getAll_7;
    try{
        KeyRange_46 = IDBKeyRange.only('mUQ');
        getAll_7 = objectStore_1.getAll(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('BGFml');
        getAll_7 = objectStore_1.getAll(KeyRange_47);
    }

    var getAllKeys_5;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('kATyoW', true);
        getAllKeys_5 = objectStore_1.getAllKeys(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('LcmXhiGF');
        getAllKeys_5 = objectStore_1.getAllKeys(KeyRange_49);
    }

    var clear_32 = objectStore_1.clear();
    var count_11 = objectStore_1.count();
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3 = db.transaction(['objectStore_6'], 'readonly', {durability:"default"})
    var objectStore_6;
    txn_2.objectStore('objectStore_6')
    var put_13 = objectStore_6.put({f0_q: '<number>', f1_q: '<number>', f2_c: '<string>', f3_a: '<null>'}, 'VnGnhIppf');
    var count_12 = objectStore_6.count();
    var add_18 = objectStore_6.add({f0_s: '<object>', f1_o: '<null>', f2_w: '<null>', f3_w: '<null>'}, 'pgIEa');
    var clear_33 = objectStore_6.clear();
    var clear_34 = objectStore_6.clear();
    var getAllKeys_6;
    try{
        KeyRange_50 = IDBKeyRange.only('pgIEa');
        getAllKeys_6 = objectStore_6.getAllKeys(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('VnGnhIppf');
        getAllKeys_6 = objectStore_6.getAllKeys(KeyRange_51);
    }

    var count_13;
    try{
        KeyRange_52 = IDBKeyRange.only('pgIEa');
        count_13 = objectStore_6.count(KeyRange_52);
    }
    catch (e){
    }

    var add_19 = objectStore_6.add({f0_m: '<null>', f1_v: '<string>'}, 'SaFGw');
    var clear_35 = objectStore_6.clear();
    var getAllKeys_7 = objectStore_6.getAllKeys();
    var get_7;
    try{
        KeyRange_54 = IDBKeyRange.only('SaFGw');
        get_7 = objectStore_6.get(KeyRange_54);
    }
    catch (e){
    }

    var put_14 = objectStore_6.put({f0_l: '<string>', f1_o: '<string>', f2_i: '<number>'}, 'kwfmo');
    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4 = db.transaction(['objectStore_3'], 'readonly', {durability:"default"})
    var objectStore_3;
    txn_1.objectStore('objectStore_3')
    var clear_36 = objectStore_3.clear();
    var put_15 = objectStore_3.put({f0_q: '<boolean>'}, 'oToLtROFXU');
    var delete_2;
    try{
        KeyRange_56 = IDBKeyRange.bound('zPf', 'oToLtROFXU', true, false);
        delete_2 = objectStore_3.delete(KeyRange_56);
    }
    catch (e){
    }

    var put_16 = objectStore_3.put({f0_b: '<boolean>', f1_x: '<object>', f2_s: '<array>', f3_d: '<boolean>', f4_t: '<string>', f5_w: '<null>'}, 'kvxhQcSOkfv');
    var put_17 = objectStore_3.put({f0_a: '<boolean>', f1_v: '<number>', f2_c: '<string>', f3_r: '<object>', f4_m: '<object>', f5_g: '<object>', f6_c: '<boolean>'}, 'bbVGFePQwCc');
    var delete_3;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('bbVGFePQwCc', false);
        delete_3 = objectStore_3.delete(KeyRange_58);
    }
    catch (e){
    }

    var put_18 = objectStore_3.put({f0_z: '<null>', f1_j: '<object>', f2_h: '<object>', f3_z: '<number>', f4_f: '<null>'}, 'fdmX');
    var put_19 = objectStore_3.put({f0_r: '<object>', f1_c: '<array>'}, 'rcFG');
    var count_14 = objectStore_3.count();
    var put_20 = objectStore_3.put({f0_l: '<null>', f1_z: '<null>', f2_i: '<object>', f3_f: '<number>', f4_a: '<null>', f5_l: '<number>', f6_a: '<object>'}, 'GtYLRuIHBMx');
    var delete_4;
    try{
        KeyRange_60 = IDBKeyRange.bound('zPf', 'GtYLRuIHBMx', true, false);
        delete_4 = objectStore_3.delete(KeyRange_60);
    }
    catch (e){
    }

    var add_20 = objectStore_3.add({f0_p: '<array>', f1_a: '<object>', f2_d: '<number>'}, 'pZpnXjHCcq');
    var clear_37 = objectStore_3.clear();
    var get_8;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('pZpnXjHCcq', true);
        get_8 = objectStore_3.get(KeyRange_62);
    }
    catch (e){
    }

    var count_15 = objectStore_3.count();
    var getAllKeys_8 = objectStore_3.getAllKeys();
    var delete_5;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('pZpnXjHCcq', false);
        delete_5 = objectStore_3.delete(KeyRange_64);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_66 = IDBKeyRange.bound('pZpnXjHCcq', 'oToLtROFXU', true, true);
        count_16 = objectStore_3.count(KeyRange_66);
    }
    catch (e){
    }

    var count_17 = objectStore_3.count();
    var get_9;
    try{
        KeyRange_68 = IDBKeyRange.only('rcFG');
        get_9 = objectStore_3.get(KeyRange_68);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('kvxhQcSOkfv', true);
        count_18 = objectStore_3.count(KeyRange_70);
    }
    catch (e){
    }

    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5 = db.transaction(['objectStore_1', 'objectStore_0'], 'readwrite', {durability:"relaxed"})
    var objectStore_1;
    txn_2.objectStore('objectStore_1')
    var add_21 = objectStore_1.add({f0_p: '<string>', f1_q: '<boolean>', f2_t: '<string>', f3_q: '<object>', f4_b: '<null>', f5_n: '<object>', f6_o: '<string>', f7_p: '<null>', f8_j: '<number>', f9_y: '<array>'}, 'pkMw');
    var getAllKeys_9 = objectStore_1.getAllKeys(20494952);
    var get_10;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('VYAYRORuqq', true);
        get_10 = objectStore_1.get(KeyRange_72);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_74 = IDBKeyRange.only('LcmXhiGF');
        getAll_8 = objectStore_1.getAll(KeyRange_74, 4263886156);
    }
    catch (e){
        KeyRange_75 = IDBKeyRange.only('oWyg');
        getAll_8 = objectStore_1.getAll(KeyRange_75);
    }

    var getAll_9 = objectStore_1.getAll();
    var get_11;
    try{
        KeyRange_76 = IDBKeyRange.bound('NcyuqXBPG', 'NcyuqXBPG', true, true);
        get_11 = objectStore_1.get(KeyRange_76);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_78 = IDBKeyRange.bound('oWyg', 'oWyg', true, true);
        get_12 = objectStore_1.get(KeyRange_78);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_80 = IDBKeyRange.only('zrXCENhHXmb');
        get_13 = objectStore_1.get(KeyRange_80);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('mUQ', true);
        getAllKeys_10 = objectStore_1.getAllKeys(KeyRange_82);
    }
    catch (e){
        KeyRange_83 = IDBKeyRange.only('BGFml');
        getAllKeys_10 = objectStore_1.getAllKeys(KeyRange_83);
    }

    var add_22 = objectStore_1.add({f0_r: '<array>'}, 'rANfyFjxxBe');
    var getAllKeys_11;
    try{
        KeyRange_84 = IDBKeyRange.bound('NcyuqXBPG', 'NcyuqXBPG', true, false);
        getAllKeys_11 = objectStore_1.getAllKeys(KeyRange_84, 3727316356);
    }
    catch (e){
        KeyRange_85 = IDBKeyRange.only('YtisdNbnF');
        getAllKeys_11 = objectStore_1.getAllKeys(KeyRange_85);
    }

    var getAllKeys_12;
    try{
        KeyRange_86 = IDBKeyRange.only('QcYquDG');
        getAllKeys_12 = objectStore_1.getAllKeys(KeyRange_86);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('zrXCENhHXmb');
        getAllKeys_12 = objectStore_1.getAllKeys(KeyRange_87);
    }

    var put_21 = objectStore_1.put({f0_o: '<array>', f1_p: '<object>', f2_m: '<array>', f3_r: '<null>', f4_e: '<number>', f5_m: '<boolean>', f6_t: '<string>'}, 'LRkCJ');
    var clear_38 = objectStore_1.clear();
    var count_19 = objectStore_1.count();
    var get_14;
    try{
        KeyRange_88 = IDBKeyRange.bound('vfe', 'rANfyFjxxBe', false, false);
        get_14 = objectStore_1.get(KeyRange_88);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_90 = IDBKeyRange.bound('zrXCENhHXmb', 'BGFml', true, false);
        get_15 = objectStore_1.get(KeyRange_90);
    }
    catch (e){
    }

    var put_22 = objectStore_1.put({f0_x: '<array>', f1_y: '<string>', f2_u: '<boolean>', f3_x: '<object>', f4_b: '<number>'}, 'CHR');
    var get_16;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('dfNfEMcITmH', true);
        get_16 = objectStore_1.get(KeyRange_92);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_94 = IDBKeyRange.bound('oWyg', 'CHR', true, true);
        delete_6 = objectStore_1.delete(KeyRange_94);
    }
    catch (e){
    }

    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6 = db.transaction(['objectStore_6'], 'readwrite', {durability:"relaxed"})
    var objectStore_6;
    txn_1.objectStore('objectStore_6')
    var getAllKeys_13 = objectStore_6.getAllKeys();
    var put_23 = objectStore_6.put({f0_d: '<null>', f1_l: '<boolean>', f2_j: '<number>', f3_s: '<object>'}, 'vlrFd');
    var add_23 = objectStore_6.add({f0_x: '<string>', f1_y: '<object>', f2_j: '<object>', f3_x: '<string>', f4_u: '<null>', f5_x: '<null>', f6_u: '<array>', f7_j: '<boolean>', f8_t: '<array>', f9_g: '<boolean>'}, 'TFPNGqXjS');
    var delete_7;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('vlrFd', true);
        delete_7 = objectStore_6.delete(KeyRange_96);
    }
    catch (e){
    }

    var clear_39 = objectStore_6.clear();
    var count_20;
    try{
        KeyRange_98 = IDBKeyRange.only('vlrFd');
        count_20 = objectStore_6.count(KeyRange_98);
    }
    catch (e){
    }

    var count_21 = objectStore_6.count();
    var clear_40 = objectStore_6.clear();
    var clear_41 = objectStore_6.clear();
    var put_24 = objectStore_6.put({f0_q: '<null>', f1_z: '<boolean>', f2_e: '<null>', f3_k: '<object>', f4_i: '<object>'}, 'VgxYyYtjyFAo');
    var add_24 = objectStore_6.add({f0_h: '<boolean>', f1_i: '<boolean>'}, 'bxR');
    var get_17;
    try{
        KeyRange_100 = IDBKeyRange.only('VnGnhIppf');
        get_17 = objectStore_6.get(KeyRange_100);
    }
    catch (e){
    }

    var clear_42 = objectStore_6.clear();
    var clear_43 = objectStore_6.clear();
    var getAllKeys_14;
    try{
        KeyRange_102 = IDBKeyRange.bound('kwfmo', 'TFPNGqXjS', false, false);
        getAllKeys_14 = objectStore_6.getAllKeys(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('VnGnhIppf');
        getAllKeys_14 = objectStore_6.getAllKeys(KeyRange_103);
    }

    var add_25 = objectStore_6.add({f0_h: '<object>', f1_r: '<boolean>', f2_u: '<boolean>', f3_o: '<boolean>', f4_f: '<string>', f5_d: '<boolean>', f6_a: '<string>', f7_b: '<number>'}, 'JLVK');
    var clear_44 = objectStore_6.clear();
    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7 = db.transaction(['objectStore_2', 'objectStore_0', 'objectStore_1'], 'readonly', {durability:"strict"})
    var objectStore_1;
    txn_2.objectStore('objectStore_1')
    var delete_8;
    try{
        KeyRange_104 = IDBKeyRange.only('oWyg');
        delete_8 = objectStore_1.delete(KeyRange_104);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_106 = IDBKeyRange.only('LcmXhiGF');
        getAll_10 = objectStore_1.getAll(KeyRange_106, 1525033913);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('VYAYRORuqq');
        getAll_10 = objectStore_1.getAll(KeyRange_107);
    }

    var count_22 = objectStore_1.count();
    var get_18;
    try{
        KeyRange_108 = IDBKeyRange.only('LcmXhiGF');
        get_18 = objectStore_1.get(KeyRange_108);
    }
    catch (e){
    }

    var getAll_11;
    try{
        KeyRange_110 = IDBKeyRange.bound('XCKdbC', 'YtisdNbnF', false, false);
        getAll_11 = objectStore_1.getAll(KeyRange_110);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('XCKdbC');
        getAll_11 = objectStore_1.getAll(KeyRange_111);
    }

    var add_26 = objectStore_1.add({f0_v: '<array>', f1_j: '<object>', f2_k: '<object>', f3_w: '<string>', f4_e: '<array>'}, 'BguQ');
    var count_23;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('QcYquDG', false);
        count_23 = objectStore_1.count(KeyRange_112);
    }
    catch (e){
    }

    var delete_9;
    try{
        KeyRange_114 = IDBKeyRange.bound('eoXH', 'dfNfEMcITmH', true, false);
        delete_9 = objectStore_1.delete(KeyRange_114);
    }
    catch (e){
    }

    var put_25 = objectStore_1.put({f0_t: '<array>', f1_v: '<boolean>'}, 'aQeCMSuKdKa');
    var clear_45 = objectStore_1.clear();
    var getAll_12;
    try{
        KeyRange_116 = IDBKeyRange.bound('LRkCJ', 'VYAYRORuqq', true, true);
        getAll_12 = objectStore_1.getAll(KeyRange_116, 2606504405);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('eoXH');
        getAll_12 = objectStore_1.getAll(KeyRange_117);
    }

    var count_24;
    try{
        KeyRange_118 = IDBKeyRange.lowerBound('vfe', true);
        count_24 = objectStore_1.count(KeyRange_118);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('BguQ', false);
        count_25 = objectStore_1.count(KeyRange_120);
    }
    catch (e){
    }

    var put_26 = objectStore_1.put({f0_m: '<object>', f1_c: '<null>', f2_j: '<boolean>', f3_i: '<string>'}, 'nAnm');
    var delete_10;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('aQeCMSuKdKa', false);
        delete_10 = objectStore_1.delete(KeyRange_122);
    }
    catch (e){
    }

    var getAllKeys_15;
    try{
        KeyRange_124 = IDBKeyRange.only('vfe');
        getAllKeys_15 = objectStore_1.getAllKeys(KeyRange_124, 1394184254);
    }
    catch (e){
        KeyRange_125 = IDBKeyRange.only('zrXCENhHXmb');
        getAllKeys_15 = objectStore_1.getAllKeys(KeyRange_125);
    }

    var getAll_13 = objectStore_1.getAll(2451748184);
    var count_26;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('kATyoW', false);
        count_26 = objectStore_1.count(KeyRange_126);
    }
    catch (e){
    }

    var getAll_14 = objectStore_1.getAll(3944964927);
    var getAll_15 = objectStore_1.getAll();
    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8 = db.transaction(['objectStore_5', 'objectStore_2', 'objectStore_3'], 'readonly', {durability:"default"})
    var objectStore_2;
    txn_0.objectStore('objectStore_2')
    var add_27 = objectStore_2.add({f0_y: '<null>', f1_e: '<number>', f2_x: '<string>', f3_u: '<boolean>', f4_a: '<string>', f5_v: '<null>', f6_b: '<string>', f7_x: '<array>', f8_a: '<null>'}, 'miGOKPMWxgn');
    var get_19;
    try{
        KeyRange_128 = IDBKeyRange.bound('miGOKPMWxgn', 'KAt', false, true);
        get_19 = objectStore_2.get(KeyRange_128);
    }
    catch (e){
    }

    var clear_46 = objectStore_2.clear();
    var add_28 = objectStore_2.add({f0_n: '<boolean>', f1_q: '<string>'}, 'GmnU');
    var get_20;
    try{
        KeyRange_130 = IDBKeyRange.bound('fPSqCzXXBShX', 'KAt', true, false);
        get_20 = objectStore_2.get(KeyRange_130);
    }
    catch (e){
    }

    var getAll_16;
    try{
        KeyRange_132 = IDBKeyRange.lowerBound('miGOKPMWxgn', true);
        getAll_16 = objectStore_2.getAll(KeyRange_132, 3164241737);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('KAt');
        getAll_16 = objectStore_2.getAll(KeyRange_133);
    }

    var clear_47 = objectStore_2.clear();
    var put_27 = objectStore_2.put({f0_x: '<array>', f1_v: '<string>', f2_x: '<boolean>', f3_v: '<string>', f4_i: '<object>', f5_b: '<null>'}, 'UDBnrwEMijOH');
    var get_21;
    try{
        KeyRange_134 = IDBKeyRange.bound('GmnU', 'miGOKPMWxgn', true, true);
        get_21 = objectStore_2.get(KeyRange_134);
    }
    catch (e){
    }

    var clear_48 = objectStore_2.clear();
    var put_28 = objectStore_2.put({f0_i: '<string>', f1_u: '<array>', f2_i: '<array>', f3_g: '<string>', f4_w: '<array>', f5_u: '<boolean>', f6_a: '<number>'}, 'XKUwXuNKEAhq');
    var add_29 = objectStore_2.add({f0_q: '<number>', f1_u: '<boolean>'}, 'oBltmbeVLLRU');
    var count_27;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('KAt', false);
        count_27 = objectStore_2.count(KeyRange_136);
    }
    catch (e){
    }

    var getAllKeys_16 = objectStore_2.getAllKeys(1456513585);
    var getAllKeys_17 = objectStore_2.getAllKeys();
    var clear_49 = objectStore_2.clear();
    txn_7.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_9 = db.transaction(['objectStore_6'], 'readwrite', {durability:"default"})
    var objectStore_6;
    txn_6.objectStore('objectStore_6')
    var add_30 = objectStore_6.add({f0_g: '<object>', f1_f: '<number>', f2_g: '<boolean>'}, 'tpsbKP');
    var count_28 = objectStore_6.count();
    var get_22;
    try{
        KeyRange_138 = IDBKeyRange.bound('pgIEa', 'TFPNGqXjS', false, true);
        get_22 = objectStore_6.get(KeyRange_138);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_140 = IDBKeyRange.bound('kwfmo', 'vlrFd', true, false);
        get_23 = objectStore_6.get(KeyRange_140);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_142 = IDBKeyRange.bound('SaFGw', 'bxR', false, false);
        count_29 = objectStore_6.count(KeyRange_142);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_144 = IDBKeyRange.only('vlrFd');
        count_30 = objectStore_6.count(KeyRange_144);
    }
    catch (e){
    }

    var add_31 = objectStore_6.add({f0_l: '<array>'}, 'SMX');
    var add_32 = objectStore_6.add({f0_c: '<number>', f1_v: '<object>', f2_v: '<array>', f3_u: '<object>', f4_q: '<null>', f5_b: '<number>', f6_d: '<string>', f7_l: '<null>', f8_l: '<null>', f9_a: '<number>'}, 'UDGGCN');
    var count_31;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('VnGnhIppf', false);
        count_31 = objectStore_6.count(KeyRange_146);
    }
    catch (e){
    }

    var put_29 = objectStore_6.put({f0_a: '<array>'}, 'hSSmZw');
    var get_24;
    try{
        KeyRange_148 = IDBKeyRange.bound('kwfmo', 'hSSmZw', false, false);
        get_24 = objectStore_6.get(KeyRange_148);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_150 = IDBKeyRange.only('pgIEa');
        get_25 = objectStore_6.get(KeyRange_150);
    }
    catch (e){
    }

    var clear_50 = objectStore_6.clear();
    var count_32;
    try{
        KeyRange_152 = IDBKeyRange.only('TFPNGqXjS');
        count_32 = objectStore_6.count(KeyRange_152);
    }
    catch (e){
    }

    var clear_51 = objectStore_6.clear();
    var getAllKeys_18 = objectStore_6.getAllKeys();
    txn_9.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2349')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};