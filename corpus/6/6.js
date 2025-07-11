let db;
const openRequest = window.indexedDB.open('str_5982', 7527703843107490)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_65', {keypath: 'yPtW.lBmVsM.MwSfxtMPg.jsskYua.WJyhcRHgNe.iFfJWTu.WadJC', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_g: '<boolean>', f1_o: '<boolean>', f2_v: '<array>', f3_p: '<string>', f4_x: '<boolean>', f5_f: '<string>', f6_d: '<null>'}, 'vfIkLC');
    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var count_2 = objectStore_0.count();
    var add_1 = objectStore_0.add({f0_p: '<null>', f1_i: '<boolean>', f2_h: '<string>', f3_s: '<boolean>', f4_k: '<boolean>'}, 'AUZnrOe');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('vfIkLC', 'vfIkLC', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var add_2 = objectStore_0.add({f0_w: '<array>', f1_w: '<object>', f2_f: '<object>', f3_r: '<number>', f4_i: '<object>', f5_d: '<number>', f6_a: '<null>', f7_n: '<number>', f8_p: '<boolean>', f9_z: '<boolean>'}, 'zRzDsaj');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('AUZnrOe');
        getAll_0 = objectStore_0.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('vfIkLC');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var objectStore_1 = db.createObjectStore('objectStore_66', {autoIncrement: true});
    var index_61 = objectStore_0.createIndex('index_61', 'test');
    var getAll_1;
    try{
        KeyRange_4 = IDBKeyRange.only('AUZnrOe');
        getAll_1 = objectStore_0.getAll(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('AUZnrOe');
        getAll_1 = objectStore_0.getAll(KeyRange_5);
    }

    var index_62 = objectStore_0.createIndex('index_62', 'test', {multiEntry: false});
    var add_3 = objectStore_0.add({f0_s: '<boolean>', f1_j: '<object>', f2_a: '<array>', f3_g: '<string>', f4_y: '<array>', f5_x: '<array>', f6_a: '<null>', f7_a: '<array>', f8_u: '<string>', f9_p: '<number>'}, 'RUoTwaTMKwxt');
    var count_3 = objectStore_0.count();
    var clear_2 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_67', {autoIncrement: false});
    var index_63 = objectStore_0.createIndex('index_63', 'test', {unique: true});
    var count_4;
    try{
        KeyRange_6 = IDBKeyRange.bound('zRzDsaj', 'AUZnrOe', false, true);
        count_4 = objectStore_0.count(KeyRange_6);
    }
    catch (e){
    }

    var put_0 = objectStore_1.put({f0_r: '<array>', f1_r: '<object>', f2_n: '<string>', f3_p: '<array>', f4_m: '<number>', f5_g: '<boolean>', f6_s: '<null>', f7_u: '<string>', f8_z: '<null>', f9_b: '<boolean>'}, 'jXRPVIKDe');
    var objectStore_3 = db.createObjectStore('objectStore_68', {autoIncrement: false});
    var count_5;
    try{
        KeyRange_8 = IDBKeyRange.bound('RUoTwaTMKwxt', 'vfIkLC', true, false);
        count_5 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var add_4 = objectStore_3.add({f0_x: '<number>', f1_c: '<object>'}, 'xxQvcKd');
    var put_1 = objectStore_1.put({f0_o: '<string>', f1_r: '<number>', f2_b: '<boolean>'}, 'MFKqmDf');
    var count_6;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('xxQvcKd', true);
        count_6 = objectStore_3.count(KeyRange_10);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_69', {autoIncrement: false});
    var put_2 = objectStore_4.put({f0_q: '<string>', f1_g: '<null>', f2_a: '<boolean>', f3_z: '<array>', f4_h: '<string>', f5_w: '<number>', f6_c: '<boolean>'}, 'qxzuDPVtG');
    var objectStore_5 = db.createObjectStore('objectStore_70', {autoIncrement: true});
    var clear_3 = objectStore_1.clear();
    var count_7;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('xxQvcKd', true);
        count_7 = objectStore_3.count(KeyRange_12);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('jXRPVIKDe', 'MFKqmDf', true, true);
        get_1 = objectStore_1.get(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.only('xxQvcKd');
        get_2 = objectStore_3.get(KeyRange_16);
    }
    catch (e){
    }

    var index_64 = objectStore_0.createIndex('index_64', 'test', {unique: true});
    var put_3 = objectStore_4.put({f0_p: '<boolean>'}, 'eaHKcJJuL');
    var getAll_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('jXRPVIKDe', 'jXRPVIKDe', false, true);
        getAll_2 = objectStore_1.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('jXRPVIKDe');
        getAll_2 = objectStore_1.getAll(KeyRange_19);
    }

    var add_5 = objectStore_1.add({f0_t: '<boolean>', f1_m: '<boolean>', f2_y: '<array>'}, 'nOU');
    var count_8 = objectStore_4.count();
    var add_6 = objectStore_3.add({f0_f: '<object>', f1_h: '<string>', f2_p: '<string>', f3_u: '<string>', f4_f: '<boolean>', f5_h: '<array>'}, 'nzr');
    var add_7 = objectStore_5.add({f0_h: '<object>', f1_l: '<object>', f2_g: '<number>', f3_w: '<boolean>', f4_f: '<null>', f5_n: '<string>'}, 'wtVEq');
    var index_65 = objectStore_0.createIndex('index_65', 'test', {unique: true});
    var put_4 = objectStore_0.put({f0_x: '<string>', f1_i: '<null>', f2_z: '<array>', f3_v: '<string>', f4_i: '<object>'}, 'bYXuMVnGIX');
    var put_5 = objectStore_3.put({f0_e: '<string>', f1_p: '<number>', f2_p: '<array>', f3_d: '<number>', f4_h: '<string>'}, 'KEpvhNmc');
    var count_9;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('RUoTwaTMKwxt', true);
        count_9 = objectStore_0.count(KeyRange_20);
    }
    catch (e){
    }

    var index_66 = objectStore_3.createIndex('index_66', 'test', {unique: true, multiEntry: false});
    var count_10 = objectStore_0.count();
    var put_6 = objectStore_3.put({f0_r: '<boolean>'}, 'tHuNuKqGSg');
    var index_67 = objectStore_4.createIndex('index_67', 'test', {multiEntry: false});
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('xxQvcKd', 'KEpvhNmc', true, true);
        get_3 = objectStore_3.get(KeyRange_22);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.only('AUZnrOe');
        get_4 = objectStore_0.get(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_71');
    var objectStore_7 = db.createObjectStore('objectStore_72', {autoIncrement: false});
    var objectStore_8 = db.createObjectStore('objectStore_73', {keypath: 'dGvMGeUTgIxU.XHnarYcj.feuNTKfo.TninBOLE.dYOdRhar.UMw.VJIWCIzOf'});
    var add_8 = objectStore_1.add({f0_j: '<null>', f1_i: '<object>', f2_l: '<number>', f3_e: '<null>', f4_w: '<object>', f5_r: '<number>', f6_m: '<object>'}, 'IWV');
    var index_68 = objectStore_2.createIndex('index_68', 'test', {multiEntry: false});
    var clear_4 = objectStore_7.clear();
    var count_11 = objectStore_4.count();
    var add_9 = objectStore_1.add({f0_c: '<null>', f1_e: '<array>', f2_h: '<string>', f3_s: '<object>', f4_s: '<object>', f5_k: '<array>', f6_r: '<object>', f7_v: '<string>'}, 'fElHeiTW');
    var index_69 = objectStore_4.createIndex('index_69', 'test', {unique: true});
    db.deleteObjectStore('objectStore_66')
    var put_7 = objectStore_6.put({f0_y: '<array>', f1_a: '<number>', f2_v: '<number>', f3_a: '<boolean>', f4_k: '<null>', f5_z: '<string>', f6_l: '<boolean>', f7_b: '<string>'}, 'Jtk');
    var put_8 = objectStore_4.put({f0_k: '<null>', f1_h: '<null>', f2_l: '<number>', f3_b: '<null>', f4_t: '<array>', f5_n: '<string>', f6_c: '<array>', f7_i: '<object>', f8_p: '<boolean>', f9_m: '<object>'}, 'yoafYGDnG');
    var put_9 = objectStore_6.put({f0_x: '<string>', f1_p: '<object>', f2_q: '<object>', f3_a: '<string>', f4_u: '<number>', f5_s: '<boolean>', f6_m: '<number>', f7_k: '<number>', f8_f: '<number>', f9_g: '<string>'}, 'hhDVKXQAk');
    var index_70 = objectStore_6.createIndex('index_70', 'test', {unique: false, multiEntry: false});
    var index_71 = objectStore_5.createIndex('index_71', 'test');
    var index_72 = objectStore_2.createIndex('index_72', 'test');
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('wtVEq', 'wtVEq', false, false);
        get_5 = objectStore_5.get(KeyRange_26);
    }
    catch (e){
    }

    var put_10 = objectStore_0.put({f0_j: '<boolean>', f1_i: '<object>', f2_e: '<array>', f3_x: '<object>', f4_t: '<object>', f5_y: '<object>', f6_f: '<null>'}, 'fQtWs');
    var index_73 = objectStore_0.createIndex('index_73', 'test');
    var clear_5 = objectStore_3.clear();
    var delete_0;
    try{
        KeyRange_28 = IDBKeyRange.only('tHuNuKqGSg');
        delete_0 = objectStore_3.delete(KeyRange_28);
    }
    catch (e){
    }

    var put_11 = objectStore_0.put({f0_r: '<boolean>', f1_z: '<array>'}, 'hijbFBNSOY');
    var count_12 = objectStore_5.count();
    var add_10 = objectStore_8.add({f0_j: '<string>', f1_u: '<array>', f2_j: '<array>', f3_e: '<null>', f4_u: '<string>', f5_e: '<boolean>'}, 'BneKOwsQn');
    var index_74 = objectStore_8.createIndex('index_74', 'test', {unique: false});
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('BneKOwsQn', false);
        get_6 = objectStore_8.get(KeyRange_30);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_74', {keypath: 'DbJSJQ', autoIncrement: false});
    var getAllKeys_0;
    try{
        KeyRange_32 = IDBKeyRange.only('BneKOwsQn');
        getAllKeys_0 = objectStore_8.getAllKeys(KeyRange_32, 3146270993);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('BneKOwsQn');
        getAllKeys_0 = objectStore_8.getAllKeys(KeyRange_33);
    }

    var index_75 = objectStore_9.createIndex('index_75', 'test', {multiEntry: true});
    var add_11 = objectStore_9.add({f0_a: '<number>', f1_r: '<null>', f2_g: '<number>', f3_f: '<boolean>'}, 'kSKrhSMLQYV');
    var objectStore_10 = db.createObjectStore('objectStore_75', {autoIncrement: true});
    var getAllKeys_1;
    try{
        KeyRange_34 = IDBKeyRange.only('yoafYGDnG');
        getAllKeys_1 = objectStore_4.getAllKeys(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('yoafYGDnG');
        getAllKeys_1 = objectStore_4.getAllKeys(KeyRange_35);
    }

    var put_12 = objectStore_8.put({f0_x: '<boolean>', f1_y: '<number>', f2_m: '<array>', f3_g: '<null>', f4_r: '<string>'}, 'uBznVo');
    var index_76 = objectStore_2.createIndex('index_76', 'test', {unique: false});
    var clear_6 = objectStore_5.clear();
    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('zRzDsaj', 'hijbFBNSOY', true, true);
        get_7 = objectStore_0.get(KeyRange_36);
    }
    catch (e){
    }

    var put_13 = objectStore_6.put({f0_g: '<string>', f1_a: '<object>'}, 'EQHb');
    var put_14 = objectStore_9.put({f0_i: '<null>', f1_j: '<array>'}, 'UDDxpS');
    var objectStore_11 = db.createObjectStore('objectStore_76', {autoIncrement: true});
    var add_12 = objectStore_6.add({f0_c: '<array>', f1_e: '<object>', f2_r: '<object>', f3_r: '<boolean>', f4_a: '<boolean>', f5_n: '<null>', f6_j: '<number>', f7_o: '<boolean>', f8_j: '<boolean>'}, 'fwjkkX');
    var put_15 = objectStore_9.put({f0_i: '<number>', f1_f: '<array>', f2_k: '<number>', f3_w: '<array>', f4_n: '<boolean>', f5_t: '<number>', f6_k: '<array>', f7_y: '<boolean>'}, 'TOHkqdBvKety');
    var get_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('vfIkLC', 'RUoTwaTMKwxt', false, false);
        get_8 = objectStore_0.get(KeyRange_38);
    }
    catch (e){
    }

    var objectStore_12 = db.createObjectStore('objectStore_77', {autoIncrement: true});
    var delete_1;
    try{
        KeyRange_40 = IDBKeyRange.only('eaHKcJJuL');
        delete_1 = objectStore_4.delete(KeyRange_40);
    }
    catch (e){
    }

    var index_0 = objectStore_4.index('index_69');
    var index_77 = objectStore_6.createIndex('index_77', 'test');
    var getAll_3 = objectStore_3.getAll(3224535038);
    var objectStore_13 = db.createObjectStore('objectStore_78', {keypath: 'EFbRusyMD.GsaTDdPe.GiEVSDWlFf'});
    var getAll_4;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('tHuNuKqGSg', false);
        getAll_4 = objectStore_3.getAll(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('xxQvcKd');
        getAll_4 = objectStore_3.getAll(KeyRange_43);
    }

    var objectStore_14 = db.createObjectStore('objectStore_79');
    var add_13 = objectStore_0.add({f0_f: '<number>', f1_e: '<object>'}, 'kWnbQU');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_60 = db.transaction(['objectStore_74'], 'readwrite', {durability:"relaxed"})
    var objectStore_74 = txn_60.objectStore('objectStore_74');
    var index_1 = objectStore_74.index('index_75');
    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.only('kSKrhSMLQYV');
        get_9 = objectStore_74.get(KeyRange_44);
    }
    catch (e){
    }

    var count_13 = objectStore_74.count();
    var add_14 = objectStore_74.add({f0_g: '<string>', f1_d: '<array>', f2_o: '<boolean>', f3_b: '<string>', f4_e: '<boolean>', f5_p: '<array>', f6_s: '<array>'}, 'muXcZRUJ');
    var index_2 = objectStore_74.index('index_75');
    var clear_7 = objectStore_74.clear();
    var getAll_5;
    try{
        KeyRange_46 = IDBKeyRange.bound('muXcZRUJ', 'kSKrhSMLQYV', false, true);
        getAll_5 = objectStore_74.getAll(KeyRange_46, 1757267663);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('TOHkqdBvKety');
        getAll_5 = objectStore_74.getAll(KeyRange_47);
    }

    var put_16 = objectStore_74.put({f0_r: '<boolean>', f1_i: '<object>', f2_h: '<array>', f3_s: '<object>', f4_d: '<string>'}, 'WzE');
    var add_15 = objectStore_74.add({f0_j: '<number>', f1_q: '<object>', f2_n: '<object>', f3_b: '<null>', f4_w: '<array>'}, 'yrwTUI');
    var clear_8 = objectStore_74.clear();
    var add_16 = objectStore_74.add({f0_z: '<array>', f1_b: '<array>', f2_p: '<object>', f3_c: '<array>', f4_w: '<object>', f5_p: '<null>'}, 'eRp');
    var delete_2;
    try{
        KeyRange_48 = IDBKeyRange.only('yrwTUI');
        delete_2 = objectStore_74.delete(KeyRange_48);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_50 = IDBKeyRange.only('TOHkqdBvKety');
        delete_3 = objectStore_74.delete(KeyRange_50);
    }
    catch (e){
    }

    var put_17 = objectStore_74.put({f0_k: '<array>'}, 'fljXqOdSYX');
    var add_17 = objectStore_74.add({f0_u: '<array>'}, 'oKoFjYi');
    var getAll_6;
    try{
        KeyRange_52 = IDBKeyRange.only('UDDxpS');
        getAll_6 = objectStore_74.getAll(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('yrwTUI');
        getAll_6 = objectStore_74.getAll(KeyRange_53);
    }

    var clear_9 = objectStore_74.clear();
    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_60.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_61 = db.transaction(['objectStore_70'], 'readwrite', {durability:"relaxed"})
    var objectStore_70 = txn_61.objectStore('objectStore_70');
    var clear_10 = objectStore_70.clear();
    var clear_11 = objectStore_70.clear();
    var put_18 = objectStore_70.put({f0_j: '<boolean>', f1_u: '<object>'}, 'RYfdIBFkfZz');
    var put_19 = objectStore_70.put({f0_w: '<boolean>', f1_g: '<boolean>', f2_q: '<null>', f3_b: '<string>', f4_n: '<array>', f5_f: '<string>', f6_y: '<number>', f7_r: '<string>'}, 'CIxB');
    var get_10;
    try{
        KeyRange_54 = IDBKeyRange.only('wtVEq');
        get_10 = objectStore_70.get(KeyRange_54);
    }
    catch (e){
    }

    var clear_12 = objectStore_70.clear();
    var clear_13 = objectStore_70.clear();
    var delete_4;
    try{
        KeyRange_56 = IDBKeyRange.only('CIxB');
        delete_4 = objectStore_70.delete(KeyRange_56);
    }
    catch (e){
    }

    var count_14;
    try{
        KeyRange_58 = IDBKeyRange.bound('CIxB', 'RYfdIBFkfZz', true, false);
        count_14 = objectStore_70.count(KeyRange_58);
    }
    catch (e){
    }

    var clear_14 = objectStore_70.clear();
    var add_18 = objectStore_70.add({f0_o: '<boolean>', f1_q: '<number>', f2_a: '<object>', f3_t: '<object>', f4_j: '<string>', f5_b: '<array>', f6_p: '<string>', f7_k: '<boolean>', f8_k: '<number>'}, 'sYSVZXW');
    var count_15;
    try{
        KeyRange_60 = IDBKeyRange.bound('RYfdIBFkfZz', 'wtVEq', true, false);
        count_15 = objectStore_70.count(KeyRange_60);
    }
    catch (e){
    }

    var put_20 = objectStore_70.put({f0_v: '<string>', f1_r: '<object>', f2_f: '<array>', f3_j: '<null>', f4_l: '<null>', f5_o: '<string>', f6_k: '<boolean>', f7_f: '<boolean>', f8_i: '<number>'}, 'cGkydhgJQcJ');
    var put_21 = objectStore_70.put({f0_t: '<number>', f1_m: '<number>'}, 'KnyqgYbn');
    var count_16 = objectStore_70.count();
    txn_61.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_61.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_62 = db.transaction(['objectStore_70'], 'readwrite', {durability:"relaxed"})
    var objectStore_70 = txn_62.objectStore('objectStore_70');
    var clear_15 = objectStore_70.clear();
    var put_22 = objectStore_70.put({f0_p: '<object>', f1_t: '<object>', f2_l: '<null>', f3_r: '<object>', f4_d: '<object>', f5_i: '<object>'}, 'EeP');
    var clear_16 = objectStore_70.clear();
    var get_11;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('wtVEq', false);
        get_11 = objectStore_70.get(KeyRange_62);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('RYfdIBFkfZz', true);
        get_12 = objectStore_70.get(KeyRange_64);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_66 = IDBKeyRange.only('cGkydhgJQcJ');
        get_13 = objectStore_70.get(KeyRange_66);
    }
    catch (e){
    }

    var put_23 = objectStore_70.put({f0_r: '<string>', f1_o: '<string>', f2_v: '<object>', f3_s: '<array>', f4_m: '<object>'}, 'MaTudfkWdM');
    var add_19 = objectStore_70.add({f0_o: '<object>'}, 'auX');
    var put_24 = objectStore_70.put({f0_h: '<array>', f1_u: '<object>', f2_z: '<object>'}, 'PAToxjBeeTZQ');
    var getAllKeys_2 = objectStore_70.getAllKeys();
    var count_17 = objectStore_70.count();
    var delete_5;
    try{
        KeyRange_68 = IDBKeyRange.bound('MaTudfkWdM', 'KnyqgYbn', false, false);
        delete_5 = objectStore_70.delete(KeyRange_68);
    }
    catch (e){
    }

    var put_25 = objectStore_70.put({f0_r: '<number>', f1_v: '<object>', f2_p: '<object>', f3_y: '<null>', f4_e: '<object>'}, 'FhrVfVvd');
    var get_14;
    try{
        KeyRange_70 = IDBKeyRange.only('RYfdIBFkfZz');
        get_14 = objectStore_70.get(KeyRange_70);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_72 = IDBKeyRange.bound('RYfdIBFkfZz', 'FhrVfVvd', true, false);
        get_15 = objectStore_70.get(KeyRange_72);
    }
    catch (e){
    }

    txn_62.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_62.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_62.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_63 = db.transaction(['objectStore_76', 'objectStore_70', 'objectStore_71', 'objectStore_67', 'objectStore_65'], 'readwrite', {durability:"strict"})
    var objectStore_70 = txn_63.objectStore('objectStore_70');
    var clear_17 = objectStore_70.clear();
    var getAllKeys_3 = objectStore_70.getAllKeys();
    var put_26 = objectStore_70.put({f0_o: '<array>', f1_l: '<number>', f2_j: '<array>', f3_l: '<string>'}, 'nzRIwzoygejV');
    var getAll_7;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('PAToxjBeeTZQ', true);
        getAll_7 = objectStore_70.getAll(KeyRange_74, 2827669268);
    }
    catch (e){
        KeyRange_75 = IDBKeyRange.only('nzRIwzoygejV');
        getAll_7 = objectStore_70.getAll(KeyRange_75);
    }

    var add_20 = objectStore_70.add({f0_l: '<string>', f1_i: '<boolean>'}, 'OTkdoGvsD');
    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.bound('RYfdIBFkfZz', 'CIxB', false, true);
        get_16 = objectStore_70.get(KeyRange_76);
    }
    catch (e){
    }

    var put_27 = objectStore_70.put({f0_k: '<string>', f1_v: '<object>', f2_x: '<array>', f3_s: '<array>', f4_n: '<string>', f5_l: '<null>', f6_a: '<string>', f7_j: '<number>', f8_l: '<null>'}, 'KbJdMLK');
    var clear_18 = objectStore_70.clear();
    var get_17;
    try{
        KeyRange_78 = IDBKeyRange.bound('sYSVZXW', 'wtVEq', true, false);
        get_17 = objectStore_70.get(KeyRange_78);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('EeP', true);
        get_18 = objectStore_70.get(KeyRange_80);
    }
    catch (e){
    }

    var add_21 = objectStore_70.add({f0_i: '<number>', f1_o: '<string>', f2_e: '<number>'}, 'yetBzKYc');
    var getAllKeys_4;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('MaTudfkWdM', false);
        getAllKeys_4 = objectStore_70.getAllKeys(KeyRange_82, 2095045807);
    }
    catch (e){
        KeyRange_83 = IDBKeyRange.only('KnyqgYbn');
        getAllKeys_4 = objectStore_70.getAllKeys(KeyRange_83);
    }

    var get_19;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('EeP', false);
        get_19 = objectStore_70.get(KeyRange_84);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_86 = IDBKeyRange.bound('auX', 'yetBzKYc', true, true);
        getAll_8 = objectStore_70.getAll(KeyRange_86);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('nzRIwzoygejV');
        getAll_8 = objectStore_70.getAll(KeyRange_87);
    }

    var count_18;
    try{
        KeyRange_88 = IDBKeyRange.only('PAToxjBeeTZQ');
        count_18 = objectStore_70.count(KeyRange_88);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('PAToxjBeeTZQ', true);
        get_20 = objectStore_70.get(KeyRange_90);
    }
    catch (e){
    }

    txn_63.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_63.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_64 = db.transaction(['objectStore_76'], 'readonly', {durability:"relaxed"})
    var objectStore_76 = txn_64.objectStore('objectStore_76');
    txn_64.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_64.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_64.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_65 = db.transaction(['objectStore_70', 'objectStore_76'], 'readwrite', {durability:"relaxed"})
    var objectStore_76 = txn_65.objectStore('objectStore_76');
    var add_22 = objectStore_76.add({f0_z: '<boolean>', f1_g: '<null>', f2_q: '<number>', f3_f: '<object>', f4_r: '<array>', f5_s: '<object>', f6_j: '<boolean>'}, 'sKJ');
    var clear_19 = objectStore_76.clear();
    var getAll_9;
    try{
        KeyRange_92 = IDBKeyRange.bound('sKJ', 'sKJ', true, true);
        getAll_9 = objectStore_76.getAll(KeyRange_92, 2787533943);
    }
    catch (e){
        KeyRange_93 = IDBKeyRange.only('sKJ');
        getAll_9 = objectStore_76.getAll(KeyRange_93);
    }

    var get_21;
    try{
        KeyRange_94 = IDBKeyRange.bound('sKJ', 'sKJ', false, true);
        get_21 = objectStore_76.get(KeyRange_94);
    }
    catch (e){
    }

    var clear_20 = objectStore_76.clear();
    var clear_21 = objectStore_76.clear();
    var count_19;
    try{
        KeyRange_96 = IDBKeyRange.only('sKJ');
        count_19 = objectStore_76.count(KeyRange_96);
    }
    catch (e){
    }

    var put_28 = objectStore_76.put({f0_k: '<null>'}, 'PLhb');
    var delete_6;
    try{
        KeyRange_98 = IDBKeyRange.bound('PLhb', 'PLhb', true, true);
        delete_6 = objectStore_76.delete(KeyRange_98);
    }
    catch (e){
    }

    var getAll_10 = objectStore_76.getAll();
    var clear_22 = objectStore_76.clear();
    var clear_23 = objectStore_76.clear();
    var add_23 = objectStore_76.add({f0_j: '<object>', f1_b: '<object>', f2_j: '<number>', f3_b: '<string>', f4_g: '<null>', f5_r: '<number>', f6_y: '<boolean>', f7_m: '<string>'}, 'ikmW');
    var delete_7;
    try{
        KeyRange_100 = IDBKeyRange.only('sKJ');
        delete_7 = objectStore_76.delete(KeyRange_100);
    }
    catch (e){
    }

    var add_24 = objectStore_76.add({f0_w: '<boolean>', f1_t: '<object>', f2_o: '<object>', f3_i: '<string>', f4_n: '<object>', f5_l: '<null>', f6_p: '<number>', f7_d: '<object>', f8_o: '<null>'}, 'wTnwTZX');
    var getAll_11 = objectStore_76.getAll();
    var clear_24 = objectStore_76.clear();
    var put_29 = objectStore_76.put({f0_z: '<array>', f1_x: '<string>', f2_t: '<string>', f3_m: '<null>', f4_t: '<number>', f5_d: '<null>', f6_i: '<boolean>'}, 'qtSQE');
    var count_20 = objectStore_76.count();
    var put_30 = objectStore_76.put({f0_q: '<object>', f1_z: '<boolean>', f2_j: '<array>', f3_k: '<null>', f4_a: '<object>', f5_l: '<object>', f6_v: '<string>', f7_g: '<number>', f8_b: '<array>'}, 'VAqKVYjdogbm');
    txn_65.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_65.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_65.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_66 = db.transaction(['objectStore_67', 'objectStore_73'], 'readonly', {durability:"strict"})
    var objectStore_67 = txn_66.objectStore('objectStore_67');
    var index_3 = objectStore_67.index('index_72');
    txn_66.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_66.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_66.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_67 = db.transaction(['objectStore_70'], 'readonly', {durability:"strict"})
    var objectStore_70 = txn_67.objectStore('objectStore_70');
    var getAll_12;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('MaTudfkWdM', true);
        getAll_12 = objectStore_70.getAll(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('RYfdIBFkfZz');
        getAll_12 = objectStore_70.getAll(KeyRange_103);
    }

    var index_4 = objectStore_70.index('index_71');
    var get_22;
    try{
        KeyRange_104 = IDBKeyRange.bound('wtVEq', 'KbJdMLK', true, false);
        get_22 = objectStore_70.get(KeyRange_104);
    }
    catch (e){
    }

    var count_21 = objectStore_70.count();
    var getAllKeys_5 = objectStore_70.getAllKeys(1690369560);
    var count_22 = objectStore_70.count();
    var get_23;
    try{
        KeyRange_106 = IDBKeyRange.bound('KnyqgYbn', 'OTkdoGvsD', false, false);
        get_23 = objectStore_70.get(KeyRange_106);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_108 = IDBKeyRange.bound('EeP', 'cGkydhgJQcJ', true, true);
        get_24 = objectStore_70.get(KeyRange_108);
    }
    catch (e){
    }

    var count_23 = objectStore_70.count();
    var get_25;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('PAToxjBeeTZQ', false);
        get_25 = objectStore_70.get(KeyRange_110);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_112 = IDBKeyRange.bound('PAToxjBeeTZQ', 'MaTudfkWdM', false, false);
        count_24 = objectStore_70.count(KeyRange_112);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_114 = IDBKeyRange.bound('wtVEq', 'PAToxjBeeTZQ', true, true);
        getAllKeys_6 = objectStore_70.getAllKeys(KeyRange_114);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('yetBzKYc');
        getAllKeys_6 = objectStore_70.getAllKeys(KeyRange_115);
    }

    var get_26;
    try{
        KeyRange_116 = IDBKeyRange.only('KbJdMLK');
        get_26 = objectStore_70.get(KeyRange_116);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_118 = IDBKeyRange.only('CIxB');
        get_27 = objectStore_70.get(KeyRange_118);
    }
    catch (e){
    }

    txn_67.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_67.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_67.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_68 = db.transaction(['objectStore_68'], 'readwrite', {durability:"strict"})
    var objectStore_68 = txn_68.objectStore('objectStore_68');
    var getAll_13 = objectStore_68.getAll(3021842970);
    var add_25 = objectStore_68.add({f0_i: '<object>', f1_z: '<string>', f2_z: '<string>', f3_v: '<string>', f4_r: '<array>'}, 'UKMOUI');
    var count_25;
    try{
        KeyRange_120 = IDBKeyRange.bound('KEpvhNmc', 'UKMOUI', false, true);
        count_25 = objectStore_68.count(KeyRange_120);
    }
    catch (e){
    }

    var put_31 = objectStore_68.put({f0_y: '<null>'}, 'lCuQuRxnl');
    var get_28;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('UKMOUI', false);
        get_28 = objectStore_68.get(KeyRange_122);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_124 = IDBKeyRange.bound('nzr', 'tHuNuKqGSg', false, false);
        get_29 = objectStore_68.get(KeyRange_124);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_126 = IDBKeyRange.only('lCuQuRxnl');
        delete_8 = objectStore_68.delete(KeyRange_126);
    }
    catch (e){
    }

    var put_32 = objectStore_68.put({f0_x: '<array>', f1_m: '<number>'}, 'xrYvbtdM');
    var delete_9;
    try{
        KeyRange_128 = IDBKeyRange.only('KEpvhNmc');
        delete_9 = objectStore_68.delete(KeyRange_128);
    }
    catch (e){
    }

    var add_26 = objectStore_68.add({f0_b: '<object>', f1_g: '<boolean>'}, 'GHoirG');
    var delete_10;
    try{
        KeyRange_130 = IDBKeyRange.bound('KEpvhNmc', 'xxQvcKd', false, false);
        delete_10 = objectStore_68.delete(KeyRange_130);
    }
    catch (e){
    }

    var clear_25 = objectStore_68.clear();
    var put_33 = objectStore_68.put({f0_u: '<boolean>', f1_h: '<number>', f2_n: '<boolean>', f3_p: '<number>', f4_c: '<object>', f5_q: '<array>', f6_q: '<object>', f7_j: '<boolean>', f8_i: '<array>'}, 'ipQXoe');
    var count_26;
    try{
        KeyRange_132 = IDBKeyRange.only('lCuQuRxnl');
        count_26 = objectStore_68.count(KeyRange_132);
    }
    catch (e){
    }

    var count_27 = objectStore_68.count();
    var clear_26 = objectStore_68.clear();
    var add_27 = objectStore_68.add({f0_o: '<null>', f1_p: '<boolean>', f2_g: '<boolean>', f3_q: '<boolean>'}, 'TXaqvU');
    var count_28 = objectStore_68.count();
    var delete_11;
    try{
        KeyRange_134 = IDBKeyRange.bound('ipQXoe', 'tHuNuKqGSg', true, false);
        delete_11 = objectStore_68.delete(KeyRange_134);
    }
    catch (e){
    }

    var clear_27 = objectStore_68.clear();
    var clear_28 = objectStore_68.clear();
    txn_68.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_68.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_68.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_69 = db.transaction(['objectStore_69', 'objectStore_73', 'objectStore_75'], 'readonly', {durability:"strict"})
    var objectStore_73 = txn_69.objectStore('objectStore_73');
    var get_30;
    try{
        KeyRange_136 = IDBKeyRange.only('BneKOwsQn');
        get_30 = objectStore_73.get(KeyRange_136);
    }
    catch (e){
    }

    var count_29 = objectStore_73.count();
    var getAllKeys_7 = objectStore_73.getAllKeys(2768193343);
    var getAllKeys_8;
    try{
        KeyRange_138 = IDBKeyRange.only('BneKOwsQn');
        getAllKeys_8 = objectStore_73.getAllKeys(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('uBznVo');
        getAllKeys_8 = objectStore_73.getAllKeys(KeyRange_139);
    }

    var count_30 = objectStore_73.count();
    var count_31;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('BneKOwsQn', false);
        count_31 = objectStore_73.count(KeyRange_140);
    }
    catch (e){
    }

    var count_32 = objectStore_73.count();
    var count_33 = objectStore_73.count();
    var count_34 = objectStore_73.count();
    var get_31;
    try{
        KeyRange_142 = IDBKeyRange.bound('BneKOwsQn', 'BneKOwsQn', false, true);
        get_31 = objectStore_73.get(KeyRange_142);
    }
    catch (e){
    }

    var index_5 = objectStore_73.index('index_74');
    var get_32;
    try{
        KeyRange_144 = IDBKeyRange.bound('uBznVo', 'uBznVo', true, true);
        get_32 = objectStore_73.get(KeyRange_144);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_146 = IDBKeyRange.bound('BneKOwsQn', 'BneKOwsQn', true, false);
        get_33 = objectStore_73.get(KeyRange_146);
    }
    catch (e){
    }

    var getAll_14 = objectStore_73.getAll(1251915902);
    var index_6 = objectStore_73.index('index_74');
    var get_34;
    try{
        KeyRange_148 = IDBKeyRange.lowerBound('uBznVo', true);
        get_34 = objectStore_73.get(KeyRange_148);
    }
    catch (e){
    }

    var index_7 = objectStore_73.index('index_74');
    var count_35;
    try{
        KeyRange_150 = IDBKeyRange.bound('BneKOwsQn', 'BneKOwsQn', false, true);
        count_35 = objectStore_73.count(KeyRange_150);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_152 = IDBKeyRange.only('BneKOwsQn');
        get_35 = objectStore_73.get(KeyRange_152);
    }
    catch (e){
    }

    txn_69.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_69.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_69.onerror = (event) => {
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