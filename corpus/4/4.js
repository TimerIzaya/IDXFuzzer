let db;
const openRequest = window.indexedDB.open('str_853', 4778947721677858)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_47', {keypath: 'MwItegbelt', autoIncrement: false});
    var add_0 = objectStore_0.add({f0_p: '<null>', f1_q: '<null>', f2_c: '<string>', f3_y: '<boolean>', f4_l: '<boolean>', f5_n: '<number>', f6_p: '<boolean>', f7_z: '<number>'}, 'QGaxpFKXHULJ');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('QGaxpFKXHULJ', false);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.only('QGaxpFKXHULJ');
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('QGaxpFKXHULJ', false);
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_b: '<null>'}, 'KUWATfD');
    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('KUWATfD', 'QGaxpFKXHULJ', true, true);
        delete_1 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_48', {autoIncrement: true});
    var count_2 = objectStore_0.count();
    var index_39 = objectStore_1.createIndex('index_39', 'test', {multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_49', {autoIncrement: true});
    var add_1 = objectStore_1.add({f0_k: '<null>', f1_q: '<null>', f2_d: '<array>', f3_q: '<null>', f4_n: '<string>', f5_m: '<array>', f6_o: '<string>'}, 'pzDjK');
    var add_2 = objectStore_2.add({f0_d: '<null>', f1_w: '<null>', f2_d: '<string>'}, 'iYnAeSJAR');
    var objectStore_3 = db.createObjectStore('objectStore_50', {keypath: 'sFlqUkPSBB.bmoRvxyw'});
    var clear_2 = objectStore_3.clear();
    var add_3 = objectStore_0.add({f0_y: '<array>'}, 'PQarSTk');
    var add_4 = objectStore_3.add({f0_v: '<boolean>', f1_s: '<object>', f2_f: '<boolean>', f3_n: '<array>', f4_u: '<number>', f5_c: '<object>', f6_i: '<number>', f7_i: '<array>', f8_m: '<boolean>', f9_z: '<number>'}, 'TVbIPROqZk');
    var add_5 = objectStore_3.add({f0_t: '<null>', f1_u: '<number>', f2_f: '<number>'}, 'hQEJBCZhW');
    var index_40 = objectStore_2.createIndex('index_40', 'test', {multiEntry: false});
    var count_3 = objectStore_2.count();
    var get_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('hQEJBCZhW', false);
        get_0 = objectStore_3.get(KeyRange_8);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_10 = IDBKeyRange.only('pzDjK');
        delete_2 = objectStore_1.delete(KeyRange_10);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2.getAll(1929175259);
    objectStore_1.deleteIndex('index_39')
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.only('pzDjK');
        get_1 = objectStore_1.get(KeyRange_12);
    }
    catch (e){
    }

    var put_1 = objectStore_3.put({f0_o: '<object>', f1_j: '<null>'}, 'KblYzZYSKIAF');
    var add_6 = objectStore_0.add({f0_h: '<object>', f1_a: '<string>'}, 'Oni');
    var getAll_1 = objectStore_0.getAll();
    var count_4 = objectStore_3.count();
    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.only('pzDjK');
        count_5 = objectStore_1.count(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_51');
    var index_41 = objectStore_3.createIndex('index_41', 'test', {unique: false});
    var count_6 = objectStore_2.count();
    var add_7 = objectStore_0.add({f0_c: '<null>', f1_n: '<string>', f2_t: '<string>'}, 'CGjR');
    var count_7;
    try{
        KeyRange_16 = IDBKeyRange.only('pzDjK');
        count_7 = objectStore_1.count(KeyRange_16);
    }
    catch (e){
    }

    var add_8 = objectStore_4.add({f0_e: '<string>', f1_u: '<null>'}, 'pZH');
    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('CGjR', 'PQarSTk', false, true);
        get_2 = objectStore_0.get(KeyRange_18);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.only('pZH');
        count_8 = objectStore_4.count(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_52', {keypath: 'YOTiCfvBS.UIsbKh.BQSlryxvfT', autoIncrement: false});
    var index_42 = objectStore_4.createIndex('index_42', 'test');
    var add_9 = objectStore_1.add({f0_k: '<string>', f1_w: '<array>', f2_i: '<object>', f3_t: '<object>', f4_u: '<array>', f5_u: '<string>', f6_n: '<boolean>', f7_j: '<object>'}, 'zYeTgedg');
    var put_2 = objectStore_0.put({f0_i: '<boolean>', f1_w: '<string>', f2_i: '<number>', f3_u: '<array>', f4_y: '<array>', f5_e: '<null>', f6_c: '<string>', f7_l: '<null>', f8_b: '<null>'}, 'ZymXxm');
    var count_9 = objectStore_1.count();
    var put_3 = objectStore_0.put({f0_k: '<boolean>', f1_u: '<boolean>', f2_q: '<null>', f3_x: '<array>', f4_q: '<boolean>', f5_d: '<string>', f6_c: '<boolean>', f7_w: '<number>', f8_h: '<array>'}, 'wWRbu');
    var index_43 = objectStore_1.createIndex('index_43', 'test');
    objectStore_3.deleteIndex('index_41')
    var put_4 = objectStore_2.put({f0_e: '<object>', f1_u: '<boolean>', f2_a: '<object>', f3_r: '<null>', f4_m: '<number>', f5_w: '<number>', f6_m: '<array>', f7_p: '<boolean>', f8_l: '<object>'}, 'JMbLP');
    var delete_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('pZH', 'pZH', true, false);
        delete_3 = objectStore_4.delete(KeyRange_22);
    }
    catch (e){
    }

    var add_10 = objectStore_5.add({f0_o: '<number>'}, 'HOYGOpob');
    var clear_3 = objectStore_2.clear();
    var clear_4 = objectStore_0.clear();
    var getAll_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('TVbIPROqZk', 'TVbIPROqZk', false, true);
        getAll_2 = objectStore_3.getAll(KeyRange_24, 2689266952);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('KblYzZYSKIAF');
        getAll_2 = objectStore_3.getAll(KeyRange_25);
    }

    var objectStore_6 = db.createObjectStore('objectStore_53', {autoIncrement: false});
    var count_10;
    try{
        KeyRange_26 = IDBKeyRange.bound('iYnAeSJAR', 'iYnAeSJAR', true, true);
        count_10 = objectStore_2.count(KeyRange_26);
    }
    catch (e){
    }

    var index_44 = objectStore_0.createIndex('index_44', 'test');
    var put_5 = objectStore_0.put({f0_c: '<number>'}, 'aIlULRaShP');
    var get_3;
    try{
        KeyRange_28 = IDBKeyRange.only('TVbIPROqZk');
        get_3 = objectStore_3.get(KeyRange_28);
    }
    catch (e){
    }

    var clear_5 = objectStore_0.clear();
    var index_0 = objectStore_4.index('index_42');
    var getAllKeys_0;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('pZH', true);
        getAllKeys_0 = objectStore_4.getAllKeys(KeyRange_30, 2918847131);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('pZH');
        getAllKeys_0 = objectStore_4.getAllKeys(KeyRange_31);
    }

    var index_45 = objectStore_6.createIndex('index_45', 'test', {unique: true, multiEntry: true});
    var count_11 = objectStore_4.count();
    var put_6 = objectStore_1.put({f0_w: '<number>', f1_q: '<number>', f2_k: '<array>', f3_y: '<string>', f4_z: '<array>'}, 'jlHTJjAz');
    var clear_6 = objectStore_2.clear();
    var get_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('Oni', 'ZymXxm', false, false);
        get_4 = objectStore_0.get(KeyRange_32);
    }
    catch (e){
    }

    var getAll_3 = objectStore_0.getAll();
    var add_11 = objectStore_5.add({f0_u: '<null>', f1_d: '<null>', f2_t: '<null>', f3_i: '<null>', f4_x: '<null>', f5_l: '<null>', f6_g: '<object>', f7_y: '<boolean>'}, 'ntzlvdn');
    var add_12 = objectStore_4.add({f0_s: '<null>', f1_j: '<null>', f2_d: '<number>', f3_i: '<boolean>', f4_b: '<null>', f5_j: '<number>', f6_v: '<number>', f7_f: '<array>'}, 'vsFtYDubUe');
    var put_7 = objectStore_1.put({f0_d: '<boolean>', f1_b: '<object>', f2_n: '<array>', f3_r: '<object>'}, 'lhGGNX');
    var getAll_4;
    try{
        KeyRange_34 = IDBKeyRange.only('ntzlvdn');
        getAll_4 = objectStore_5.getAll(KeyRange_34, 4215186136);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('ntzlvdn');
        getAll_4 = objectStore_5.getAll(KeyRange_35);
    }

    var objectStore_7 = db.createObjectStore('objectStore_54', {autoIncrement: true});
    var objectStore_8 = db.createObjectStore('objectStore_55');
    var get_5;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('vsFtYDubUe', false);
        get_5 = objectStore_4.get(KeyRange_36);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_56');
    var get_6;
    try{
        KeyRange_38 = IDBKeyRange.bound('ZymXxm', 'QGaxpFKXHULJ', false, false);
        get_6 = objectStore_0.get(KeyRange_38);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.bound('Oni', 'PQarSTk', true, true);
        get_7 = objectStore_0.get(KeyRange_40);
    }
    catch (e){
    }

    var add_13 = objectStore_2.add({f0_g: '<null>', f1_t: '<null>', f2_s: '<array>', f3_s: '<array>', f4_w: '<string>', f5_b: '<null>', f6_h: '<object>', f7_t: '<number>', f8_r: '<array>', f9_t: '<string>'}, 'FCVQ');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_40 = db.transaction(['objectStore_50'], 'readwrite', {durability:"default"})
    var objectStore_50 = txn_40.objectStore('objectStore_50');
    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.only('KblYzZYSKIAF');
        get_8 = objectStore_50.get(KeyRange_42);
    }
    catch (e){
    }

    var clear_7 = objectStore_50.clear();
    var getAllKeys_1 = objectStore_50.getAllKeys(328719383);
    var add_14 = objectStore_50.add({f0_o: '<boolean>', f1_f: '<string>', f2_k: '<number>', f3_s: '<array>', f4_k: '<object>', f5_f: '<boolean>'}, 'KhMlTbXTLRk');
    var add_15 = objectStore_50.add({f0_v: '<array>', f1_d: '<null>', f2_y: '<string>', f3_e: '<number>', f4_u: '<object>', f5_z: '<array>', f6_s: '<null>', f7_j: '<string>', f8_q: '<null>', f9_d: '<object>'}, 'LVnMyDVBLeY');
    var delete_4;
    try{
        KeyRange_44 = IDBKeyRange.bound('LVnMyDVBLeY', 'hQEJBCZhW', false, false);
        delete_4 = objectStore_50.delete(KeyRange_44);
    }
    catch (e){
    }

    var getAll_5 = objectStore_50.getAll(125119823);
    var count_12 = objectStore_50.count();
    var get_9;
    try{
        KeyRange_46 = IDBKeyRange.only('LVnMyDVBLeY');
        get_9 = objectStore_50.get(KeyRange_46);
    }
    catch (e){
    }

    var clear_8 = objectStore_50.clear();
    var count_13 = objectStore_50.count();
    var delete_5;
    try{
        KeyRange_48 = IDBKeyRange.bound('KhMlTbXTLRk', 'KhMlTbXTLRk', true, true);
        delete_5 = objectStore_50.delete(KeyRange_48);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('hQEJBCZhW', true);
        delete_6 = objectStore_50.delete(KeyRange_50);
    }
    catch (e){
    }

    var add_16 = objectStore_50.add({f0_k: '<object>', f1_x: '<string>', f2_m: '<boolean>'}, 'jMRbSvmrrBP');
    var getAllKeys_2;
    try{
        KeyRange_52 = IDBKeyRange.bound('hQEJBCZhW', 'KblYzZYSKIAF', true, true);
        getAllKeys_2 = objectStore_50.getAllKeys(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('TVbIPROqZk');
        getAllKeys_2 = objectStore_50.getAllKeys(KeyRange_53);
    }

    var get_10;
    try{
        KeyRange_54 = IDBKeyRange.bound('jMRbSvmrrBP', 'jMRbSvmrrBP', false, true);
        get_10 = objectStore_50.get(KeyRange_54);
    }
    catch (e){
    }

    var put_8 = objectStore_50.put({f0_b: '<string>', f1_x: '<null>', f2_x: '<number>', f3_a: '<boolean>', f4_k: '<object>', f5_r: '<string>', f6_e: '<null>', f7_l: '<array>', f8_l: '<string>'}, 'SmtXh');
    var clear_9 = objectStore_50.clear();
    var put_9 = objectStore_50.put({f0_m: '<number>', f1_c: '<object>', f2_v: '<number>', f3_p: '<string>'}, 'vdhmdlnDMif');
    var count_14;
    try{
        KeyRange_56 = IDBKeyRange.bound('KhMlTbXTLRk', 'LVnMyDVBLeY', true, true);
        count_14 = objectStore_50.count(KeyRange_56);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('hQEJBCZhW', 'TVbIPROqZk', false, true);
        delete_7 = objectStore_50.delete(KeyRange_58);
    }
    catch (e){
    }

    var add_17 = objectStore_50.add({f0_w: '<null>', f1_k: '<number>', f2_h: '<string>', f3_v: '<string>', f4_l: '<number>'}, 'tFEnDjC');
    var put_10 = objectStore_50.put({f0_b: '<string>', f1_h: '<array>', f2_d: '<object>', f3_f: '<array>', f4_i: '<null>', f5_x: '<array>', f6_r: '<array>', f7_j: '<object>', f8_u: '<string>', f9_p: '<array>'}, 'plPaivjKvEXZ');
    txn_40.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_40.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_41 = db.transaction(['objectStore_50'], 'readwrite', {durability:"default"})
    var objectStore_50 = txn_41.objectStore('objectStore_50');
    var count_15 = objectStore_50.count();
    var clear_10 = objectStore_50.clear();
    var count_16;
    try{
        KeyRange_60 = IDBKeyRange.bound('KblYzZYSKIAF', 'jMRbSvmrrBP', false, true);
        count_16 = objectStore_50.count(KeyRange_60);
    }
    catch (e){
    }

    var getAll_6 = objectStore_50.getAll();
    var delete_8;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('tFEnDjC', false);
        delete_8 = objectStore_50.delete(KeyRange_62);
    }
    catch (e){
    }

    var count_17 = objectStore_50.count();
    var add_18 = objectStore_50.add({f0_q: '<boolean>', f1_n: '<string>', f2_x: '<string>', f3_t: '<array>', f4_f: '<null>', f5_o: '<boolean>', f6_r: '<object>'}, 'wwsgqwQB');
    var clear_11 = objectStore_50.clear();
    var count_18 = objectStore_50.count();
    var count_19 = objectStore_50.count();
    var add_19 = objectStore_50.add({f0_q: '<string>', f1_v: '<array>', f2_a: '<array>', f3_t: '<string>', f4_e: '<boolean>', f5_q: '<null>'}, 'ytCuM');
    var get_11;
    try{
        KeyRange_64 = IDBKeyRange.bound('wwsgqwQB', 'plPaivjKvEXZ', true, true);
        get_11 = objectStore_50.get(KeyRange_64);
    }
    catch (e){
    }

    var put_11 = objectStore_50.put({f0_h: '<boolean>', f1_v: '<string>', f2_w: '<string>', f3_z: '<object>', f4_n: '<boolean>', f5_t: '<null>', f6_a: '<boolean>', f7_d: '<string>', f8_z: '<number>', f9_j: '<string>'}, 'RcIPTcSLKl');
    var put_12 = objectStore_50.put({f0_p: '<boolean>', f1_u: '<string>', f2_i: '<string>', f3_w: '<null>', f4_n: '<object>'}, 'nEUstKlcUo');
    var getAll_7;
    try{
        KeyRange_66 = IDBKeyRange.only('plPaivjKvEXZ');
        getAll_7 = objectStore_50.getAll(KeyRange_66);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('nEUstKlcUo');
        getAll_7 = objectStore_50.getAll(KeyRange_67);
    }

    var put_13 = objectStore_50.put({f0_d: '<boolean>'}, 'wDwlMDx');
    var getAllKeys_3;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('SmtXh', false);
        getAllKeys_3 = objectStore_50.getAllKeys(KeyRange_68, 3199155371);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('nEUstKlcUo');
        getAllKeys_3 = objectStore_50.getAllKeys(KeyRange_69);
    }

    txn_41.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_41.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_41.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_42 = db.transaction(['objectStore_51', 'objectStore_48', 'objectStore_50', 'objectStore_47'], 'readwrite', {durability:"default"})
    var objectStore_48 = txn_42.objectStore('objectStore_48');
    var count_20;
    try{
        KeyRange_70 = IDBKeyRange.bound('zYeTgedg', 'zYeTgedg', false, true);
        count_20 = objectStore_48.count(KeyRange_70);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_72 = IDBKeyRange.bound('pzDjK', 'zYeTgedg', true, false);
        get_12 = objectStore_48.get(KeyRange_72);
    }
    catch (e){
    }

    var clear_12 = objectStore_48.clear();
    var clear_13 = objectStore_48.clear();
    var get_13;
    try{
        KeyRange_74 = IDBKeyRange.bound('lhGGNX', 'zYeTgedg', false, true);
        get_13 = objectStore_48.get(KeyRange_74);
    }
    catch (e){
    }

    var getAll_8 = objectStore_48.getAll();
    var add_20 = objectStore_48.add({f0_e: '<string>', f1_t: '<object>', f2_n: '<number>', f3_g: '<object>'}, 'zwNQSxSykqQ');
    var getAllKeys_4;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('zwNQSxSykqQ', false);
        getAllKeys_4 = objectStore_48.getAllKeys(KeyRange_76, 1129614680);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('jlHTJjAz');
        getAllKeys_4 = objectStore_48.getAllKeys(KeyRange_77);
    }

    var add_21 = objectStore_48.add({f0_u: '<array>', f1_l: '<null>', f2_r: '<number>', f3_z: '<array>', f4_a: '<array>', f5_h: '<null>'}, 'ZvkoUBE');
    var put_14 = objectStore_48.put({f0_b: '<number>', f1_k: '<object>', f2_p: '<object>', f3_n: '<boolean>', f4_q: '<boolean>', f5_u: '<array>', f6_a: '<object>', f7_n: '<boolean>', f8_y: '<string>'}, 'cTVtAbym');
    var delete_9;
    try{
        KeyRange_78 = IDBKeyRange.bound('zYeTgedg', 'pzDjK', true, false);
        delete_9 = objectStore_48.delete(KeyRange_78);
    }
    catch (e){
    }

    var delete_10;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('zwNQSxSykqQ', true);
        delete_10 = objectStore_48.delete(KeyRange_80);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_82 = IDBKeyRange.bound('zYeTgedg', 'ZvkoUBE', false, false);
        get_14 = objectStore_48.get(KeyRange_82);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('zwNQSxSykqQ', true);
        get_15 = objectStore_48.get(KeyRange_84);
    }
    catch (e){
    }

    var delete_11;
    try{
        KeyRange_86 = IDBKeyRange.only('pzDjK');
        delete_11 = objectStore_48.delete(KeyRange_86);
    }
    catch (e){
    }

    var put_15 = objectStore_48.put({f0_t: '<object>', f1_n: '<null>', f2_e: '<null>', f3_s: '<object>', f4_u: '<null>', f5_o: '<boolean>'}, 'BuZQOXSTEG');
    var delete_12;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('cTVtAbym', false);
        delete_12 = objectStore_48.delete(KeyRange_88);
    }
    catch (e){
    }

    var clear_14 = objectStore_48.clear();
    var getAllKeys_5;
    try{
        KeyRange_90 = IDBKeyRange.bound('zYeTgedg', 'jlHTJjAz', true, false);
        getAllKeys_5 = objectStore_48.getAllKeys(KeyRange_90, 166492023);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('BuZQOXSTEG');
        getAllKeys_5 = objectStore_48.getAllKeys(KeyRange_91);
    }

    var get_16;
    try{
        KeyRange_92 = IDBKeyRange.bound('jlHTJjAz', 'BuZQOXSTEG', false, true);
        get_16 = objectStore_48.get(KeyRange_92);
    }
    catch (e){
    }

    var put_16 = objectStore_48.put({f0_x: '<object>', f1_n: '<array>', f2_b: '<null>', f3_p: '<boolean>', f4_z: '<number>', f5_u: '<string>', f6_u: '<string>', f7_a: '<null>', f8_o: '<array>', f9_b: '<string>'}, 'gkSMkaCtFcu');
    var get_17;
    try{
        KeyRange_94 = IDBKeyRange.bound('pzDjK', 'lhGGNX', false, true);
        get_17 = objectStore_48.get(KeyRange_94);
    }
    catch (e){
    }

    var index_1 = objectStore_48.index('index_43');
    var get_18;
    try{
        KeyRange_96 = IDBKeyRange.only('BuZQOXSTEG');
        get_18 = objectStore_48.get(KeyRange_96);
    }
    catch (e){
    }

    txn_42.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_42.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_43 = db.transaction(['objectStore_47', 'objectStore_48', 'objectStore_52'], 'readwrite', {durability:"relaxed"})
    var objectStore_47 = txn_43.objectStore('objectStore_47');
    var getAllKeys_6 = objectStore_47.getAllKeys(2552259746);
    var put_17 = objectStore_47.put({f0_t: '<object>', f1_y: '<boolean>', f2_o: '<number>', f3_h: '<object>', f4_f: '<object>'}, 'lDjYJCO');
    var count_21;
    try{
        KeyRange_98 = IDBKeyRange.bound('wWRbu', 'wWRbu', true, true);
        count_21 = objectStore_47.count(KeyRange_98);
    }
    catch (e){
    }

    var clear_15 = objectStore_47.clear();
    var get_19;
    try{
        KeyRange_100 = IDBKeyRange.only('CGjR');
        get_19 = objectStore_47.get(KeyRange_100);
    }
    catch (e){
    }

    var put_18 = objectStore_47.put({f0_q: '<null>', f1_v: '<null>', f2_a: '<object>', f3_r: '<number>', f4_e: '<null>', f5_m: '<null>', f6_p: '<object>', f7_q: '<string>', f8_r: '<object>', f9_f: '<string>'}, 'xfhgpssL');
    var add_22 = objectStore_47.add({f0_z: '<object>', f1_f: '<boolean>', f2_t: '<number>', f3_x: '<boolean>', f4_m: '<boolean>', f5_b: '<string>', f6_m: '<object>', f7_z: '<number>'}, 'szb');
    var getAllKeys_7 = objectStore_47.getAllKeys();
    var clear_16 = objectStore_47.clear();
    var count_22 = objectStore_47.count();
    var add_23 = objectStore_47.add({f0_y: '<array>', f1_y: '<array>', f2_b: '<array>', f3_q: '<boolean>', f4_h: '<object>', f5_m: '<object>'}, 'pEM');
    var delete_13;
    try{
        KeyRange_102 = IDBKeyRange.only('ZymXxm');
        delete_13 = objectStore_47.delete(KeyRange_102);
    }
    catch (e){
    }

    var index_2 = objectStore_47.index('index_44');
    var count_23 = objectStore_47.count();
    var put_19 = objectStore_47.put({f0_d: '<boolean>'}, 'VcYmhzjKgoi');
    var count_24;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('xfhgpssL', true);
        count_24 = objectStore_47.count(KeyRange_104);
    }
    catch (e){
    }

    var add_24 = objectStore_47.add({f0_j: '<boolean>', f1_k: '<number>', f2_c: '<string>', f3_z: '<null>'}, 'WWmMBDPO');
    var delete_14;
    try{
        KeyRange_106 = IDBKeyRange.bound('CGjR', 'CGjR', false, true);
        delete_14 = objectStore_47.delete(KeyRange_106);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_108 = IDBKeyRange.only('CGjR');
        count_25 = objectStore_47.count(KeyRange_108);
    }
    catch (e){
    }

    txn_43.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_43.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_43.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_44 = db.transaction(['objectStore_53', 'objectStore_55', 'objectStore_48'], 'readonly', {durability:"strict"})
    var objectStore_55 = txn_44.objectStore('objectStore_55');
    txn_44.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_44.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_44.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_45 = db.transaction(['objectStore_49', 'objectStore_51', 'objectStore_54'], 'readonly', {durability:"default"})
    var objectStore_51 = txn_45.objectStore('objectStore_51');
    var count_26;
    try{
        KeyRange_110 = IDBKeyRange.bound('vsFtYDubUe', 'vsFtYDubUe', false, true);
        count_26 = objectStore_51.count(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_112 = IDBKeyRange.only('vsFtYDubUe');
        getAllKeys_8 = objectStore_51.getAllKeys(KeyRange_112, 832794734);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('pZH');
        getAllKeys_8 = objectStore_51.getAllKeys(KeyRange_113);
    }

    var count_27 = objectStore_51.count();
    var get_20;
    try{
        KeyRange_114 = IDBKeyRange.only('pZH');
        get_20 = objectStore_51.get(KeyRange_114);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_116 = IDBKeyRange.bound('pZH', 'vsFtYDubUe', false, false);
        get_21 = objectStore_51.get(KeyRange_116);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_118 = IDBKeyRange.only('vsFtYDubUe');
        get_22 = objectStore_51.get(KeyRange_118);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_120 = IDBKeyRange.bound('pZH', 'vsFtYDubUe', true, true);
        getAllKeys_9 = objectStore_51.getAllKeys(KeyRange_120);
    }
    catch (e){
        KeyRange_121 = IDBKeyRange.only('vsFtYDubUe');
        getAllKeys_9 = objectStore_51.getAllKeys(KeyRange_121);
    }

    var get_23;
    try{
        KeyRange_122 = IDBKeyRange.bound('vsFtYDubUe', 'pZH', false, false);
        get_23 = objectStore_51.get(KeyRange_122);
    }
    catch (e){
    }

    var count_28 = objectStore_51.count();
    var count_29 = objectStore_51.count();
    var count_30;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('pZH', false);
        count_30 = objectStore_51.count(KeyRange_124);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_126 = IDBKeyRange.bound('vsFtYDubUe', 'vsFtYDubUe', false, false);
        get_24 = objectStore_51.get(KeyRange_126);
    }
    catch (e){
    }

    var getAllKeys_10 = objectStore_51.getAllKeys();
    var get_25;
    try{
        KeyRange_128 = IDBKeyRange.bound('pZH', 'vsFtYDubUe', false, true);
        get_25 = objectStore_51.get(KeyRange_128);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_130 = IDBKeyRange.only('vsFtYDubUe');
        get_26 = objectStore_51.get(KeyRange_130);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_132 = IDBKeyRange.only('pZH');
        get_27 = objectStore_51.get(KeyRange_132);
    }
    catch (e){
    }

    var getAll_9 = objectStore_51.getAll();
    var getAllKeys_11;
    try{
        KeyRange_134 = IDBKeyRange.bound('pZH', 'pZH', false, false);
        getAllKeys_11 = objectStore_51.getAllKeys(KeyRange_134);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('vsFtYDubUe');
        getAllKeys_11 = objectStore_51.getAllKeys(KeyRange_135);
    }

    var get_28;
    try{
        KeyRange_136 = IDBKeyRange.only('vsFtYDubUe');
        get_28 = objectStore_51.get(KeyRange_136);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_138 = IDBKeyRange.lowerBound('pZH', false);
        getAll_10 = objectStore_51.getAll(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('vsFtYDubUe');
        getAll_10 = objectStore_51.getAll(KeyRange_139);
    }

    var getAll_11;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('vsFtYDubUe', true);
        getAll_11 = objectStore_51.getAll(KeyRange_140);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('pZH');
        getAll_11 = objectStore_51.getAll(KeyRange_141);
    }

    var get_29;
    try{
        KeyRange_142 = IDBKeyRange.bound('vsFtYDubUe', 'pZH', true, true);
        get_29 = objectStore_51.get(KeyRange_142);
    }
    catch (e){
    }

    var count_31;
    try{
        KeyRange_144 = IDBKeyRange.only('vsFtYDubUe');
        count_31 = objectStore_51.count(KeyRange_144);
    }
    catch (e){
    }

    var count_32;
    try{
        KeyRange_146 = IDBKeyRange.bound('vsFtYDubUe', 'vsFtYDubUe', false, true);
        count_32 = objectStore_51.count(KeyRange_146);
    }
    catch (e){
    }

    txn_45.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_45.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_45.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_46 = db.transaction(['objectStore_55', 'objectStore_50'], 'readonly', {durability:"default"})
    var objectStore_55 = txn_46.objectStore('objectStore_55');
    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_46.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_47 = db.transaction(['objectStore_50', 'objectStore_54'], 'readonly', {durability:"relaxed"})
    var objectStore_50 = txn_47.objectStore('objectStore_50');
    var getAll_12 = objectStore_50.getAll(3914827760);
    var count_33 = objectStore_50.count();
    var getAllKeys_12 = objectStore_50.getAllKeys();
    var getAll_13;
    try{
        KeyRange_148 = IDBKeyRange.bound('jMRbSvmrrBP', 'SmtXh', false, true);
        getAll_13 = objectStore_50.getAll(KeyRange_148);
    }
    catch (e){
        KeyRange_149 = IDBKeyRange.only('wDwlMDx');
        getAll_13 = objectStore_50.getAll(KeyRange_149);
    }

    var getAllKeys_13;
    try{
        KeyRange_150 = IDBKeyRange.lowerBound('RcIPTcSLKl', false);
        getAllKeys_13 = objectStore_50.getAllKeys(KeyRange_150);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('nEUstKlcUo');
        getAllKeys_13 = objectStore_50.getAllKeys(KeyRange_151);
    }

    var count_34 = objectStore_50.count();
    var get_30;
    try{
        KeyRange_152 = IDBKeyRange.bound('nEUstKlcUo', 'wDwlMDx', true, true);
        get_30 = objectStore_50.get(KeyRange_152);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_154 = IDBKeyRange.bound('wwsgqwQB', 'vdhmdlnDMif', false, false);
        get_31 = objectStore_50.get(KeyRange_154);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_156 = IDBKeyRange.bound('SmtXh', 'RcIPTcSLKl', true, true);
        get_32 = objectStore_50.get(KeyRange_156);
    }
    catch (e){
    }

    var count_35 = objectStore_50.count();
    var getAllKeys_14;
    try{
        KeyRange_158 = IDBKeyRange.bound('jMRbSvmrrBP', 'hQEJBCZhW', false, false);
        getAllKeys_14 = objectStore_50.getAllKeys(KeyRange_158, 895208084);
    }
    catch (e){
        KeyRange_159 = IDBKeyRange.only('RcIPTcSLKl');
        getAllKeys_14 = objectStore_50.getAllKeys(KeyRange_159);
    }

    var count_36 = objectStore_50.count();
    var get_33;
    try{
        KeyRange_160 = IDBKeyRange.only('vdhmdlnDMif');
        get_33 = objectStore_50.get(KeyRange_160);
    }
    catch (e){
    }

    var getAllKeys_15;
    try{
        KeyRange_162 = IDBKeyRange.only('nEUstKlcUo');
        getAllKeys_15 = objectStore_50.getAllKeys(KeyRange_162);
    }
    catch (e){
        KeyRange_163 = IDBKeyRange.only('plPaivjKvEXZ');
        getAllKeys_15 = objectStore_50.getAllKeys(KeyRange_163);
    }

    var getAll_14 = objectStore_50.getAll();
    var count_37 = objectStore_50.count();
    var getAll_15;
    try{
        KeyRange_164 = IDBKeyRange.lowerBound('SmtXh', true);
        getAll_15 = objectStore_50.getAll(KeyRange_164, 473558217);
    }
    catch (e){
        KeyRange_165 = IDBKeyRange.only('wwsgqwQB');
        getAll_15 = objectStore_50.getAll(KeyRange_165);
    }

    var get_34;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('KblYzZYSKIAF', false);
        get_34 = objectStore_50.get(KeyRange_166);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('tFEnDjC', true);
        get_35 = objectStore_50.get(KeyRange_168);
    }
    catch (e){
    }

    var count_38 = objectStore_50.count();
    var getAllKeys_16 = objectStore_50.getAllKeys(1418565188);
    txn_47.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_47.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_47.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_48 = db.transaction(['objectStore_52'], 'readonly', {durability:"relaxed"})
    var objectStore_52 = txn_48.objectStore('objectStore_52');
    var count_39;
    try{
        KeyRange_170 = IDBKeyRange.only('ntzlvdn');
        count_39 = objectStore_52.count(KeyRange_170);
    }
    catch (e){
    }

    var get_36;
    try{
        KeyRange_172 = IDBKeyRange.only('ntzlvdn');
        get_36 = objectStore_52.get(KeyRange_172);
    }
    catch (e){
    }

    var getAll_16 = objectStore_52.getAll(3432739149);
    var getAllKeys_17 = objectStore_52.getAllKeys();
    var get_37;
    try{
        KeyRange_174 = IDBKeyRange.bound('ntzlvdn', 'ntzlvdn', true, true);
        get_37 = objectStore_52.get(KeyRange_174);
    }
    catch (e){
    }

    var getAll_17 = objectStore_52.getAll();
    var count_40;
    try{
        KeyRange_176 = IDBKeyRange.bound('HOYGOpob', 'ntzlvdn', true, false);
        count_40 = objectStore_52.count(KeyRange_176);
    }
    catch (e){
    }

    var get_38;
    try{
        KeyRange_178 = IDBKeyRange.bound('ntzlvdn', 'ntzlvdn', true, true);
        get_38 = objectStore_52.get(KeyRange_178);
    }
    catch (e){
    }

    var getAllKeys_18 = objectStore_52.getAllKeys(388838199);
    var getAllKeys_19;
    try{
        KeyRange_180 = IDBKeyRange.lowerBound('HOYGOpob', true);
        getAllKeys_19 = objectStore_52.getAllKeys(KeyRange_180);
    }
    catch (e){
        KeyRange_181 = IDBKeyRange.only('HOYGOpob');
        getAllKeys_19 = objectStore_52.getAllKeys(KeyRange_181);
    }

    var count_41 = objectStore_52.count();
    var count_42 = objectStore_52.count();
    var get_39;
    try{
        KeyRange_182 = IDBKeyRange.bound('HOYGOpob', 'HOYGOpob', false, true);
        get_39 = objectStore_52.get(KeyRange_182);
    }
    catch (e){
    }

    var count_43;
    try{
        KeyRange_184 = IDBKeyRange.only('HOYGOpob');
        count_43 = objectStore_52.count(KeyRange_184);
    }
    catch (e){
    }

    var count_44 = objectStore_52.count();
    var count_45;
    try{
        KeyRange_186 = IDBKeyRange.bound('HOYGOpob', 'HOYGOpob', true, true);
        count_45 = objectStore_52.count(KeyRange_186);
    }
    catch (e){
    }

    var getAll_18;
    try{
        KeyRange_188 = IDBKeyRange.lowerBound('HOYGOpob', false);
        getAll_18 = objectStore_52.getAll(KeyRange_188, 2232513194);
    }
    catch (e){
        KeyRange_189 = IDBKeyRange.only('HOYGOpob');
        getAll_18 = objectStore_52.getAll(KeyRange_189);
    }

    var get_40;
    try{
        KeyRange_190 = IDBKeyRange.bound('HOYGOpob', 'ntzlvdn', true, true);
        get_40 = objectStore_52.get(KeyRange_190);
    }
    catch (e){
    }

    var get_41;
    try{
        KeyRange_192 = IDBKeyRange.only('HOYGOpob');
        get_41 = objectStore_52.get(KeyRange_192);
    }
    catch (e){
    }

    var count_46 = objectStore_52.count();
    var count_47 = objectStore_52.count();
    var getAllKeys_20 = objectStore_52.getAllKeys();
    var get_42;
    try{
        KeyRange_194 = IDBKeyRange.only('HOYGOpob');
        get_42 = objectStore_52.get(KeyRange_194);
    }
    catch (e){
    }

    txn_48.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_48.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_48.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_49 = db.transaction(['objectStore_55'], 'readwrite', {durability:"default"})
    var objectStore_55 = txn_49.objectStore('objectStore_55');
    var put_20 = objectStore_55.put({f0_k: '<object>', f1_r: '<null>', f2_t: '<null>', f3_d: '<string>', f4_q: '<boolean>'}, 'PHWUBiy');
    var delete_15;
    try{
        KeyRange_196 = IDBKeyRange.bound('PHWUBiy', 'PHWUBiy', false, true);
        delete_15 = objectStore_55.delete(KeyRange_196);
    }
    catch (e){
    }

    var get_43;
    try{
        KeyRange_198 = IDBKeyRange.bound('PHWUBiy', 'PHWUBiy', false, true);
        get_43 = objectStore_55.get(KeyRange_198);
    }
    catch (e){
    }

    var get_44;
    try{
        KeyRange_200 = IDBKeyRange.lowerBound('PHWUBiy', true);
        get_44 = objectStore_55.get(KeyRange_200);
    }
    catch (e){
    }

    var get_45;
    try{
        KeyRange_202 = IDBKeyRange.bound('PHWUBiy', 'PHWUBiy', false, true);
        get_45 = objectStore_55.get(KeyRange_202);
    }
    catch (e){
    }

    var getAll_19 = objectStore_55.getAll(162999117);
    var add_25 = objectStore_55.add({f0_b: '<object>'}, 'XLqG');
    var add_26 = objectStore_55.add({f0_m: '<boolean>', f1_u: '<boolean>', f2_i: '<object>', f3_r: '<array>', f4_z: '<number>', f5_o: '<array>', f6_m: '<array>', f7_i: '<object>', f8_o: '<string>'}, 'MKkItvrfwn');
    var delete_16;
    try{
        KeyRange_204 = IDBKeyRange.bound('MKkItvrfwn', 'XLqG', true, true);
        delete_16 = objectStore_55.delete(KeyRange_204);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_206 = IDBKeyRange.lowerBound('XLqG', false);
        get_46 = objectStore_55.get(KeyRange_206);
    }
    catch (e){
    }

    var add_27 = objectStore_55.add({f0_f: '<object>', f1_m: '<boolean>', f2_h: '<number>', f3_l: '<number>', f4_m: '<number>', f5_s: '<string>', f6_h: '<object>', f7_o: '<object>', f8_d: '<number>'}, 'RpPGGqgFF');
    var add_28 = objectStore_55.add({f0_y: '<number>', f1_x: '<null>', f2_l: '<boolean>', f3_v: '<string>', f4_c: '<string>', f5_q: '<array>', f6_r: '<array>', f7_v: '<string>'}, 'QdbyG');
    var put_21 = objectStore_55.put({f0_w: '<null>', f1_g: '<object>', f2_u: '<array>', f3_n: '<null>', f4_n: '<string>', f5_f: '<object>', f6_o: '<string>', f7_b: '<string>'}, 'wWxfQXJu');
    var add_29 = objectStore_55.add({f0_r: '<null>', f1_z: '<null>', f2_q: '<string>', f3_e: '<null>', f4_l: '<number>'}, 'kjYvklb');
    var add_30 = objectStore_55.add({f0_l: '<array>'}, 'PBktyNmErSpp');
    var add_31 = objectStore_55.add({f0_q: '<null>', f1_v: '<number>', f2_g: '<array>', f3_p: '<object>'}, 'JcdYPuf');
    var add_32 = objectStore_55.add({f0_x: '<string>', f1_i: '<array>', f2_q: '<boolean>', f3_e: '<null>', f4_q: '<number>', f5_n: '<array>', f6_h: '<boolean>'}, 'hhYnfYf');
    var add_33 = objectStore_55.add({f0_m: '<boolean>', f1_j: '<null>', f2_r: '<null>', f3_o: '<boolean>', f4_t: '<object>', f5_q: '<object>', f6_c: '<boolean>', f7_u: '<boolean>', f8_g: '<number>', f9_d: '<boolean>'}, 'QCa');
    txn_49.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_49.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_49.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8903')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};