let db;
const openRequest = window.indexedDB.open('str_9834', 1956147890338606)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_82', {keypath: 'ygnhWWobAtiT', autoIncrement: false});
    var index_79 = objectStore_0.createIndex('index_79', 'test', {unique: true, multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_83');
    var objectStore_2 = db.createObjectStore('objectStore_84', {autoIncrement: false});
    var add_0 = objectStore_1.add({f0_v: '<string>', f1_x: '<null>', f2_o: '<null>', f3_r: '<string>', f4_j: '<boolean>', f5_i: '<boolean>', f6_z: '<null>', f7_s: '<null>'}, 'uSkKF');
    var index_80 = objectStore_2.createIndex('index_80', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('uSkKF', true);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('uSkKF', 'uSkKF', false, true);
        count_0 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_85', {keypath: 'BoIQMoL'});
    var objectStore_4 = db.createObjectStore('objectStore_86');
    var objectStore_5 = db.createObjectStore('objectStore_87');
    var put_0 = objectStore_5.put({f0_j: '<number>', f1_d: '<boolean>', f2_k: '<boolean>', f3_p: '<array>', f4_f: '<object>', f5_d: '<object>', f6_f: '<number>'}, 'nYXVHY');
    var add_1 = objectStore_1.add({f0_b: '<object>', f1_f: '<array>', f2_v: '<string>', f3_l: '<string>'}, 'PEvSFUuG');
    var put_1 = objectStore_0.put({f0_y: '<string>', f1_a: '<number>'}, 'yPnZ');
    var index_81 = objectStore_0.createIndex('index_81', 'test', {multiEntry: true});
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('yPnZ');
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var put_2 = objectStore_0.put({f0_h: '<null>', f1_d: '<object>', f2_h: '<string>', f3_m: '<array>', f4_r: '<null>', f5_e: '<string>', f6_z: '<object>', f7_q: '<null>'}, 'HztC');
    var getAll_0 = objectStore_0.getAll();
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('PEvSFUuG', 'uSkKF', true, true);
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_6, 1872211318);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('PEvSFUuG');
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_7);
    }

    var index_0 = objectStore_2.index('index_80');
    var put_3 = objectStore_1.put({f0_n: '<null>', f1_g: '<null>', f2_k: '<number>', f3_j: '<boolean>', f4_k: '<null>', f5_q: '<number>', f6_x: '<array>', f7_w: '<object>', f8_o: '<array>'}, 'ReczanhE');
    var clear_1 = objectStore_2.clear();
    var put_4 = objectStore_5.put({f0_v: '<array>', f1_n: '<null>', f2_m: '<number>', f3_l: '<boolean>', f4_w: '<number>', f5_m: '<null>', f6_v: '<string>', f7_b: '<null>'}, 'usrSyTuI');
    db.deleteObjectStore('objectStore_85')
    var objectStore_6 = db.createObjectStore('objectStore_88');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.only('ReczanhE');
        get_1 = objectStore_1.get(KeyRange_8);
    }
    catch (e){
    }

    var clear_2 = objectStore_6.clear();
    var index_82 = objectStore_4.createIndex('index_82', 'test');
    var clear_3 = objectStore_6.clear();
    var clear_4 = objectStore_5.clear();
    var index_83 = objectStore_0.createIndex('index_83', 'test', {multiEntry: false});
    var clear_5 = objectStore_4.clear();
    var put_5 = objectStore_1.put({f0_g: '<string>'}, 'nRGQYmTzBPL');
    var add_2 = objectStore_4.add({f0_d: '<object>', f1_f: '<object>', f2_d: '<boolean>', f3_g: '<boolean>', f4_w: '<null>', f5_t: '<number>'}, 'ASvUY');
    var objectStore_7 = db.createObjectStore('objectStore_89');
    var index_84 = objectStore_5.createIndex('index_84', 'test', {unique: false});
    var clear_6 = objectStore_0.clear();
    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('nRGQYmTzBPL', 'PEvSFUuG', true, true);
        delete_1 = objectStore_1.delete(KeyRange_10);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('HztC', 'yPnZ', true, true);
        count_1 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var index_85 = objectStore_1.createIndex('index_85', 'test');
    var index_86 = objectStore_6.createIndex('index_86', 'test');
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('usrSyTuI', false);
        get_2 = objectStore_5.get(KeyRange_14);
    }
    catch (e){
    }

    var getAll_1 = objectStore_0.getAll();
    var add_3 = objectStore_0.add({f0_n: '<null>', f1_h: '<array>', f2_g: '<array>', f3_l: '<string>', f4_z: '<boolean>', f5_z: '<null>', f6_b: '<null>', f7_u: '<null>'}, 'bwpXgEJu');
    var clear_7 = objectStore_0.clear();
    var add_4 = objectStore_1.add({f0_e: '<array>', f1_c: '<string>', f2_y: '<string>', f3_w: '<string>', f4_r: '<boolean>', f5_d: '<string>', f6_f: '<object>', f7_r: '<string>', f8_l: '<boolean>'}, 'qRzMDSSSjO');
    var put_6 = objectStore_2.put({f0_o: '<object>'}, 'MbFYKe');
    var count_2 = objectStore_1.count();
    var put_7 = objectStore_2.put({f0_x: '<string>', f1_f: '<boolean>', f2_j: '<number>', f3_c: '<number>', f4_u: '<null>', f5_n: '<object>', f6_a: '<array>', f7_g: '<array>', f8_r: '<boolean>', f9_s: '<object>'}, 'sMAtQKRALgU');
    var index_1 = objectStore_2.index('index_80');
    var objectStore_8 = db.createObjectStore('objectStore_90', {autoIncrement: true});
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('uSkKF', true);
        get_3 = objectStore_1.get(KeyRange_16);
    }
    catch (e){
    }

    var clear_8 = objectStore_6.clear();
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('nRGQYmTzBPL', false);
        get_4 = objectStore_1.get(KeyRange_18);
    }
    catch (e){
    }

    var clear_9 = objectStore_7.clear();
    var put_8 = objectStore_0.put({f0_s: '<boolean>', f1_b: '<number>', f2_z: '<array>', f3_t: '<boolean>', f4_d: '<array>'}, 'uEyGOGv');
    var put_9 = objectStore_4.put({f0_y: '<null>', f1_y: '<object>', f2_b: '<boolean>', f3_h: '<null>', f4_w: '<string>', f5_x: '<boolean>', f6_u: '<object>', f7_t: '<array>'}, 'WeqnZxgRxzyG');
    var index_87 = objectStore_0.createIndex('index_87', 'test', {multiEntry: true});
    var count_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('yPnZ', 'bwpXgEJu', false, false);
        count_3 = objectStore_0.count(KeyRange_20);
    }
    catch (e){
    }

    var index_88 = objectStore_0.createIndex('index_88', 'test');
    var objectStore_9 = db.createObjectStore('objectStore_91', {keypath: 'YzMnUo', autoIncrement: true});
    var objectStore_10 = db.createObjectStore('objectStore_92', {keypath: 'SNAKOG'});
    var put_10 = objectStore_4.put({f0_k: '<boolean>', f1_g: '<array>', f2_o: '<number>', f3_b: '<boolean>', f4_m: '<null>'}, 'EnMUlN');
    var put_11 = objectStore_4.put({f0_n: '<array>', f1_z: '<null>', f2_e: '<array>', f3_n: '<string>'}, 'fxPhgoYW');
    var add_5 = objectStore_7.add({f0_l: '<number>', f1_p: '<boolean>', f2_a: '<boolean>', f3_t: '<object>', f4_f: '<object>', f5_o: '<number>', f6_h: '<object>', f7_c: '<boolean>', f8_n: '<string>', f9_p: '<object>'}, 'rja');
    objectStore_1.deleteIndex('index_85')
    objectStore_6.deleteIndex('index_86')
    var objectStore_11 = db.createObjectStore('objectStore_93', {keypath: 'WIk'});
    var clear_10 = objectStore_5.clear();
    var add_6 = objectStore_10.add({f0_v: '<array>', f1_m: '<boolean>', f2_k: '<null>', f3_n: '<object>', f4_l: '<null>', f5_d: '<string>', f6_u: '<number>', f7_r: '<object>'}, 'UtYoF');
    var objectStore_12 = db.createObjectStore('objectStore_94', {keypath: 'LJaQqhXsuS'});
    var add_7 = objectStore_10.add({f0_o: '<string>', f1_u: '<object>', f2_o: '<boolean>', f3_h: '<object>'}, 'kguYaA');
    var getAll_2 = objectStore_7.getAll();
    var clear_11 = objectStore_1.clear();
    var add_8 = objectStore_8.add({f0_j: '<null>', f1_f: '<array>', f2_j: '<string>', f3_b: '<boolean>', f4_u: '<array>'}, 'sqD');
    var put_12 = objectStore_0.put({f0_v: '<boolean>', f1_w: '<number>'}, 'TZICRaffg');
    var put_13 = objectStore_7.put({f0_i: '<array>', f1_z: '<string>', f2_d: '<number>', f3_c: '<number>', f4_b: '<number>', f5_x: '<null>', f6_f: '<array>', f7_e: '<boolean>', f8_u: '<string>'}, 'MmdQT');
    var getAllKeys_1 = objectStore_10.getAllKeys();
    var put_14 = objectStore_0.put({f0_x: '<null>', f1_x: '<boolean>'}, 'iaaPz');
    var put_15 = objectStore_2.put({f0_m: '<string>', f1_k: '<number>', f2_r: '<number>', f3_i: '<array>', f4_h: '<string>', f5_t: '<null>', f6_q: '<null>', f7_k: '<string>', f8_c: '<number>'}, 'KySrVBXnQow');
    var count_4 = objectStore_7.count();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_90 = db.transaction(['objectStore_84', 'objectStore_86'], 'readonly', {durability:"default"})
    var objectStore_84;
    txn_90.objectStore('objectStore_84')
    var add_9 = objectStore_84.add({f0_w: '<number>', f1_q: '<object>', f2_w: '<array>', f3_q: '<array>', f4_z: '<number>', f5_y: '<object>', f6_e: '<boolean>', f7_q: '<object>', f8_m: '<object>', f9_f: '<object>'}, 'EEqhUGpAw');
    var count_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('MbFYKe', 'KySrVBXnQow', true, false);
        count_5 = objectStore_84.count(KeyRange_22);
    }
    catch (e){
    }

    var add_10 = objectStore_84.add({f0_f: '<string>', f1_n: '<number>', f2_k: '<object>'}, 'PwFQ');
    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('EEqhUGpAw', false);
        count_6 = objectStore_84.count(KeyRange_24);
    }
    catch (e){
    }

    var put_16 = objectStore_84.put({f0_v: '<object>', f1_n: '<null>', f2_r: '<object>'}, 'sGlZ');
    var put_17 = objectStore_84.put({f0_w: '<string>', f1_d: '<string>', f2_v: '<object>', f3_t: '<string>', f4_s: '<number>', f5_s: '<object>', f6_j: '<object>', f7_y: '<string>', f8_c: '<number>', f9_v: '<string>'}, 'cFsk');
    var clear_12 = objectStore_84.clear();
    var add_11 = objectStore_84.add({f0_a: '<null>', f1_v: '<object>'}, 'dPjoseXpkvVb');
    var delete_2;
    try{
        KeyRange_26 = IDBKeyRange.bound('cFsk', 'cFsk', true, false);
        delete_2 = objectStore_84.delete(KeyRange_26);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('EEqhUGpAw', false);
        count_7 = objectStore_84.count(KeyRange_28);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('dPjoseXpkvVb', 'sGlZ', false, true);
        get_5 = objectStore_84.get(KeyRange_30);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('sGlZ', 'PwFQ', false, true);
        count_8 = objectStore_84.count(KeyRange_32);
    }
    catch (e){
    }

    var index_2 = objectStore_84.index('index_80');
    var clear_13 = objectStore_84.clear();
    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('PwFQ', 'sMAtQKRALgU', false, false);
        get_6 = objectStore_84.get(KeyRange_34);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('PwFQ', true);
        get_7 = objectStore_84.get(KeyRange_36);
    }
    catch (e){
    }

    var index_3 = objectStore_84.index('index_80');
    var add_12 = objectStore_84.add({f0_s: '<array>', f1_e: '<object>', f2_x: '<null>', f3_s: '<boolean>'}, 'PiVsN');
    var add_13 = objectStore_84.add({f0_j: '<boolean>', f1_r: '<string>', f2_s: '<null>', f3_e: '<null>', f4_k: '<object>', f5_g: '<array>', f6_q: '<array>'}, 'jVr');
    var getAllKeys_2 = objectStore_84.getAllKeys();
    var delete_3;
    try{
        KeyRange_38 = IDBKeyRange.only('cFsk');
        delete_3 = objectStore_84.delete(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_84.getAllKeys(3459956274);
    txn_90.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_90.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_90.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_91 = db.transaction(['objectStore_83', 'objectStore_84'], 'readwrite', {durability:"default"})
    var objectStore_84;
    txn_90.objectStore('objectStore_84')
    var add_14 = objectStore_84.add({f0_q: '<number>', f1_z: '<null>', f2_e: '<number>', f3_m: '<number>', f4_t: '<null>', f5_i: '<object>', f6_p: '<boolean>', f7_q: '<string>', f8_w: '<string>'}, 'ymzDZmg');
    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.bound('cFsk', 'cFsk', false, true);
        get_8 = objectStore_84.get(KeyRange_40);
    }
    catch (e){
    }

    var put_18 = objectStore_84.put({f0_h: '<array>'}, 'eqtzP');
    var getAllKeys_4;
    try{
        KeyRange_42 = IDBKeyRange.bound('dPjoseXpkvVb', 'KySrVBXnQow', false, false);
        getAllKeys_4 = objectStore_84.getAllKeys(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('KySrVBXnQow');
        getAllKeys_4 = objectStore_84.getAllKeys(KeyRange_43);
    }

    var put_19 = objectStore_84.put({f0_g: '<array>', f1_h: '<number>', f2_s: '<boolean>'}, 'JIKtRPkyJ');
    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.bound('ymzDZmg', 'MbFYKe', true, true);
        get_9 = objectStore_84.get(KeyRange_44);
    }
    catch (e){
    }

    var put_20 = objectStore_84.put({f0_r: '<number>', f1_j: '<boolean>', f2_o: '<null>', f3_v: '<object>', f4_s: '<object>'}, 'kok');
    var add_15 = objectStore_84.add({f0_t: '<object>', f1_d: '<object>', f2_z: '<string>', f3_h: '<array>', f4_d: '<string>', f5_l: '<string>', f6_r: '<object>', f7_p: '<number>', f8_r: '<string>', f9_s: '<boolean>'}, 'SnNG');
    var add_16 = objectStore_84.add({f0_p: '<string>', f1_u: '<object>'}, 'wpmV');
    var add_17 = objectStore_84.add({f0_o: '<number>', f1_x: '<string>', f2_b: '<null>', f3_g: '<array>', f4_d: '<string>', f5_f: '<boolean>'}, 'ZokEGzNt');
    var add_18 = objectStore_84.add({f0_k: '<object>', f1_t: '<string>'}, 'VAWPexiDHA');
    var put_21 = objectStore_84.put({f0_g: '<null>', f1_l: '<object>', f2_o: '<null>', f3_a: '<string>', f4_p: '<string>', f5_s: '<array>'}, 'dKaMRYX');
    var put_22 = objectStore_84.put({f0_k: '<boolean>', f1_g: '<object>', f2_g: '<number>', f3_d: '<object>', f4_i: '<null>', f5_e: '<number>', f6_m: '<string>', f7_j: '<number>'}, 'ZQW');
    var clear_14 = objectStore_84.clear();
    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.only('EEqhUGpAw');
        get_10 = objectStore_84.get(KeyRange_46);
    }
    catch (e){
    }

    var clear_15 = objectStore_84.clear();
    var count_9 = objectStore_84.count();
    var get_11;
    try{
        KeyRange_48 = IDBKeyRange.only('wpmV');
        get_11 = objectStore_84.get(KeyRange_48);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('ymzDZmg', false);
        count_10 = objectStore_84.count(KeyRange_50);
    }
    catch (e){
    }

    txn_91.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_90.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_90.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_92 = db.transaction(['objectStore_88', 'objectStore_87'], 'readwrite', {durability:"strict"})
    var objectStore_88;
    txn_92.objectStore('objectStore_88')
    var put_23 = objectStore_88.put({f0_e: '<array>', f1_z: '<object>', f2_r: '<array>', f3_c: '<string>', f4_r: '<number>'}, 'cWSVsdawsbp');
    var get_12;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('cWSVsdawsbp', true);
        get_12 = objectStore_88.get(KeyRange_52);
    }
    catch (e){
    }

    var add_19 = objectStore_88.add({f0_p: '<string>', f1_e: '<object>', f2_x: '<array>'}, 'xYkXnM');
    var get_13;
    try{
        KeyRange_54 = IDBKeyRange.bound('xYkXnM', 'cWSVsdawsbp', false, false);
        get_13 = objectStore_88.get(KeyRange_54);
    }
    catch (e){
    }

    var put_24 = objectStore_88.put({f0_z: '<null>'}, 'eCzDLkBWwYSD');
    var put_25 = objectStore_88.put({f0_h: '<string>', f1_z: '<array>', f2_m: '<string>', f3_q: '<array>', f4_t: '<boolean>'}, 'ASAhsgkFn');
    var put_26 = objectStore_88.put({f0_c: '<object>', f1_x: '<boolean>', f2_f: '<string>', f3_a: '<null>', f4_r: '<object>', f5_w: '<null>'}, 'tWEa');
    var count_11 = objectStore_88.count();
    var clear_16 = objectStore_88.clear();
    var count_12;
    try{
        KeyRange_56 = IDBKeyRange.bound('ASAhsgkFn', 'tWEa', true, true);
        count_12 = objectStore_88.count(KeyRange_56);
    }
    catch (e){
    }

    var clear_17 = objectStore_88.clear();
    var count_13;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('ASAhsgkFn', false);
        count_13 = objectStore_88.count(KeyRange_58);
    }
    catch (e){
    }

    var add_20 = objectStore_88.add({f0_y: '<object>', f1_o: '<object>', f2_l: '<object>', f3_d: '<boolean>', f4_y: '<boolean>', f5_n: '<number>', f6_s: '<boolean>', f7_f: '<array>', f8_k: '<null>'}, 'oMyz');
    var put_27 = objectStore_88.put({f0_l: '<boolean>', f1_t: '<array>', f2_r: '<boolean>', f3_w: '<null>', f4_q: '<null>', f5_e: '<string>', f6_f: '<array>'}, 'fVbvlXXP');
    var add_21 = objectStore_88.add({f0_i: '<string>', f1_v: '<object>', f2_p: '<object>', f3_v: '<number>', f4_p: '<null>', f5_x: '<boolean>', f6_z: '<string>', f7_p: '<string>'}, 'kyOuPFA');
    var put_28 = objectStore_88.put({f0_c: '<array>'}, 'XhKurqd');
    var clear_18 = objectStore_88.clear();
    var delete_4;
    try{
        KeyRange_60 = IDBKeyRange.bound('oMyz', 'ASAhsgkFn', false, true);
        delete_4 = objectStore_88.delete(KeyRange_60);
    }
    catch (e){
    }

    txn_90.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_91.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_92.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_93 = db.transaction(['objectStore_84', 'objectStore_90', 'objectStore_87'], 'readwrite', {durability:"relaxed"})
    var objectStore_90;
    txn_92.objectStore('objectStore_90')
    var clear_19 = objectStore_90.clear();
    var count_14 = objectStore_90.count();
    var count_15;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('sqD', false);
        count_15 = objectStore_90.count(KeyRange_62);
    }
    catch (e){
    }

    var clear_20 = objectStore_90.clear();
    var add_22 = objectStore_90.add({f0_n: '<null>', f1_a: '<null>', f2_m: '<number>', f3_q: '<object>', f4_k: '<array>', f5_o: '<null>', f6_d: '<null>', f7_x: '<null>', f8_m: '<array>', f9_r: '<object>'}, 'cMGLdHM');
    var count_16 = objectStore_90.count();
    var count_17;
    try{
        KeyRange_64 = IDBKeyRange.bound('cMGLdHM', 'sqD', true, false);
        count_17 = objectStore_90.count(KeyRange_64);
    }
    catch (e){
    }

    var clear_21 = objectStore_90.clear();
    var count_18;
    try{
        KeyRange_66 = IDBKeyRange.only('cMGLdHM');
        count_18 = objectStore_90.count(KeyRange_66);
    }
    catch (e){
    }

    var add_23 = objectStore_90.add({f0_p: '<array>', f1_j: '<array>', f2_c: '<string>', f3_i: '<boolean>', f4_a: '<array>', f5_t: '<object>', f6_j: '<array>'}, 'DPCC');
    var clear_22 = objectStore_90.clear();
    var clear_23 = objectStore_90.clear();
    var put_29 = objectStore_90.put({f0_e: '<boolean>', f1_x: '<null>', f2_j: '<boolean>', f3_k: '<boolean>', f4_o: '<boolean>', f5_g: '<object>', f6_p: '<boolean>'}, 'ecyTShFFCmhH');
    var put_30 = objectStore_90.put({f0_u: '<number>', f1_o: '<null>', f2_a: '<number>', f3_r: '<number>', f4_y: '<number>', f5_u: '<boolean>', f6_p: '<null>'}, 'yNqkD');
    var add_24 = objectStore_90.add({f0_p: '<number>', f1_c: '<string>', f2_k: '<string>', f3_t: '<null>', f4_s: '<string>', f5_f: '<array>', f6_n: '<string>', f7_t: '<object>', f8_a: '<number>', f9_q: '<null>'}, 'iDcBnGxBPw');
    var clear_24 = objectStore_90.clear();
    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.only('cMGLdHM');
        get_14 = objectStore_90.get(KeyRange_68);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_70 = IDBKeyRange.bound('yNqkD', 'iDcBnGxBPw', true, false);
        getAllKeys_5 = objectStore_90.getAllKeys(KeyRange_70);
    }
    catch (e){
        KeyRange_71 = IDBKeyRange.only('sqD');
        getAllKeys_5 = objectStore_90.getAllKeys(KeyRange_71);
    }

    var get_15;
    try{
        KeyRange_72 = IDBKeyRange.only('DPCC');
        get_15 = objectStore_90.get(KeyRange_72);
    }
    catch (e){
    }

    txn_93.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_91.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_93.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_94 = db.transaction(['objectStore_86'], 'readwrite', {durability:"relaxed"})
    var objectStore_86;
    txn_91.objectStore('objectStore_86')
    var delete_5;
    try{
        KeyRange_74 = IDBKeyRange.bound('fxPhgoYW', 'WeqnZxgRxzyG', false, false);
        delete_5 = objectStore_86.delete(KeyRange_74);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.bound('fxPhgoYW', 'WeqnZxgRxzyG', true, true);
        get_16 = objectStore_86.get(KeyRange_76);
    }
    catch (e){
    }

    var getAll_3 = objectStore_86.getAll();
    var delete_6;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('ASvUY', false);
        delete_6 = objectStore_86.delete(KeyRange_78);
    }
    catch (e){
    }

    var getAll_4 = objectStore_86.getAll(1280350701);
    var get_17;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('ASvUY', false);
        get_17 = objectStore_86.get(KeyRange_80);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_82 = IDBKeyRange.bound('EnMUlN', 'ASvUY', true, true);
        get_18 = objectStore_86.get(KeyRange_82);
    }
    catch (e){
    }

    var clear_25 = objectStore_86.clear();
    var clear_26 = objectStore_86.clear();
    var get_19;
    try{
        KeyRange_84 = IDBKeyRange.only('fxPhgoYW');
        get_19 = objectStore_86.get(KeyRange_84);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_86.getAllKeys(1246044018);
    var clear_27 = objectStore_86.clear();
    var count_19;
    try{
        KeyRange_86 = IDBKeyRange.only('WeqnZxgRxzyG');
        count_19 = objectStore_86.count(KeyRange_86);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_88 = IDBKeyRange.only('fxPhgoYW');
        getAll_5 = objectStore_86.getAll(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('WeqnZxgRxzyG');
        getAll_5 = objectStore_86.getAll(KeyRange_89);
    }

    var clear_28 = objectStore_86.clear();
    var put_31 = objectStore_86.put({f0_g: '<number>'}, 'zTYFSw');
    var count_20;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('fxPhgoYW', false);
        count_20 = objectStore_86.count(KeyRange_90);
    }
    catch (e){
    }

    var clear_29 = objectStore_86.clear();
    var count_21;
    try{
        KeyRange_92 = IDBKeyRange.bound('zTYFSw', 'fxPhgoYW', false, true);
        count_21 = objectStore_86.count(KeyRange_92);
    }
    catch (e){
    }

    var clear_30 = objectStore_86.clear();
    txn_92.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_91.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_93.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_95 = db.transaction(['objectStore_90'], 'readwrite', {durability:"default"})
    var objectStore_90;
    txn_95.objectStore('objectStore_90')
    var clear_31 = objectStore_90.clear();
    var put_32 = objectStore_90.put({f0_i: '<array>', f1_h: '<object>', f2_w: '<boolean>', f3_e: '<object>', f4_o: '<array>', f5_d: '<string>', f6_l: '<boolean>'}, 'KrcziJhvCpxF');
    var count_22;
    try{
        KeyRange_94 = IDBKeyRange.only('KrcziJhvCpxF');
        count_22 = objectStore_90.count(KeyRange_94);
    }
    catch (e){
    }

    var add_25 = objectStore_90.add({f0_a: '<object>', f1_l: '<boolean>'}, 'UAzwzyTRigX');
    var count_23;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('yNqkD', false);
        count_23 = objectStore_90.count(KeyRange_96);
    }
    catch (e){
    }

    var put_33 = objectStore_90.put({f0_s: '<boolean>', f1_z: '<array>', f2_t: '<string>', f3_p: '<array>'}, 'QpNyL');
    var count_24;
    try{
        KeyRange_98 = IDBKeyRange.bound('cMGLdHM', 'ecyTShFFCmhH', false, true);
        count_24 = objectStore_90.count(KeyRange_98);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_100 = IDBKeyRange.bound('cMGLdHM', 'sqD', false, false);
        count_25 = objectStore_90.count(KeyRange_100);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_102 = IDBKeyRange.bound('DPCC', 'yNqkD', true, false);
        count_26 = objectStore_90.count(KeyRange_102);
    }
    catch (e){
    }

    var add_26 = objectStore_90.add({f0_e: '<number>', f1_e: '<object>', f2_v: '<array>', f3_o: '<boolean>', f4_j: '<string>'}, 'kTEkxQPOE');
    var delete_7;
    try{
        KeyRange_104 = IDBKeyRange.only('UAzwzyTRigX');
        delete_7 = objectStore_90.delete(KeyRange_104);
    }
    catch (e){
    }

    var put_34 = objectStore_90.put({f0_s: '<null>', f1_y: '<object>', f2_e: '<boolean>', f3_d: '<number>', f4_a: '<boolean>', f5_b: '<boolean>', f6_u: '<array>', f7_h: '<boolean>'}, 'pARhhH');
    var delete_8;
    try{
        KeyRange_106 = IDBKeyRange.bound('KrcziJhvCpxF', 'yNqkD', false, false);
        delete_8 = objectStore_90.delete(KeyRange_106);
    }
    catch (e){
    }

    var clear_32 = objectStore_90.clear();
    txn_90.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_90.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_92.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_96 = db.transaction(['objectStore_86', 'objectStore_87', 'objectStore_84', 'objectStore_88', 'objectStore_93'], 'readwrite', {durability:"default"})
    var objectStore_93;
    txn_96.objectStore('objectStore_93')
    var add_27 = objectStore_93.add({f0_k: '<null>', f1_n: '<null>', f2_m: '<boolean>', f3_q: '<null>', f4_h: '<number>', f5_v: '<array>', f6_w: '<array>'}, 'RiLNE');
    var delete_9;
    try{
        KeyRange_108 = IDBKeyRange.only('RiLNE');
        delete_9 = objectStore_93.delete(KeyRange_108);
    }
    catch (e){
    }

    var count_27 = objectStore_93.count();
    var count_28 = objectStore_93.count();
    var add_28 = objectStore_93.add({f0_v: '<array>', f1_s: '<string>', f2_z: '<null>', f3_h: '<object>', f4_u: '<object>', f5_n: '<object>', f6_q: '<string>', f7_z: '<string>'}, 'QprNnvu');
    var getAllKeys_7;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('QprNnvu', true);
        getAllKeys_7 = objectStore_93.getAllKeys(KeyRange_110, 3692716302);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('RiLNE');
        getAllKeys_7 = objectStore_93.getAllKeys(KeyRange_111);
    }

    var clear_33 = objectStore_93.clear();
    var put_35 = objectStore_93.put({f0_m: '<string>', f1_l: '<object>', f2_o: '<null>', f3_z: '<object>', f4_x: '<null>'}, 'nOijNrnqxhMP');
    var clear_34 = objectStore_93.clear();
    var add_29 = objectStore_93.add({f0_h: '<null>', f1_c: '<string>', f2_h: '<boolean>', f3_c: '<object>', f4_z: '<null>', f5_n: '<string>', f6_s: '<object>', f7_b: '<array>'}, 'WOgrQ');
    var put_36 = objectStore_93.put({f0_w: '<boolean>', f1_g: '<null>', f2_e: '<null>', f3_r: '<number>'}, 'hIhMi');
    var delete_10;
    try{
        KeyRange_112 = IDBKeyRange.bound('QprNnvu', 'nOijNrnqxhMP', true, false);
        delete_10 = objectStore_93.delete(KeyRange_112);
    }
    catch (e){
    }

    var count_29 = objectStore_93.count();
    var add_30 = objectStore_93.add({f0_s: '<number>'}, 'mjlDaXzOaOf');
    var put_37 = objectStore_93.put({f0_o: '<null>', f1_c: '<string>', f2_g: '<string>', f3_m: '<object>', f4_u: '<number>'}, 'woanfzxLHJ');
    var get_20;
    try{
        KeyRange_114 = IDBKeyRange.bound('nOijNrnqxhMP', 'QprNnvu', true, true);
        get_20 = objectStore_93.get(KeyRange_114);
    }
    catch (e){
    }

    txn_92.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_94.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_95.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_97 = db.transaction(['objectStore_93', 'objectStore_86', 'objectStore_87', 'objectStore_84', 'objectStore_89'], 'readonly', {durability:"relaxed"})
    var objectStore_87;
    txn_93.objectStore('objectStore_87')
    var count_30;
    try{
        KeyRange_116 = IDBKeyRange.only('usrSyTuI');
        count_30 = objectStore_87.count(KeyRange_116);
    }
    catch (e){
    }

    var put_38 = objectStore_87.put({f0_l: '<object>'}, 'eSiOWkh');
    var get_21;
    try{
        KeyRange_118 = IDBKeyRange.bound('eSiOWkh', 'eSiOWkh', true, false);
        get_21 = objectStore_87.get(KeyRange_118);
    }
    catch (e){
    }

    var clear_35 = objectStore_87.clear();
    var delete_11;
    try{
        KeyRange_120 = IDBKeyRange.bound('eSiOWkh', 'usrSyTuI', false, false);
        delete_11 = objectStore_87.delete(KeyRange_120);
    }
    catch (e){
    }

    var put_39 = objectStore_87.put({f0_o: '<string>', f1_n: '<object>', f2_v: '<number>', f3_s: '<boolean>', f4_q: '<number>'}, 'kDbnpvq');
    var getAll_6 = objectStore_87.getAll();
    var put_40 = objectStore_87.put({f0_i: '<string>', f1_j: '<null>', f2_x: '<boolean>', f3_m: '<boolean>'}, 'jgelO');
    var add_31 = objectStore_87.add({f0_b: '<object>', f1_m: '<string>', f2_w: '<null>', f3_m: '<null>', f4_a: '<boolean>', f5_m: '<number>', f6_q: '<object>', f7_q: '<string>', f8_p: '<boolean>'}, 'JviDOgcnR');
    var clear_36 = objectStore_87.clear();
    var count_31;
    try{
        KeyRange_122 = IDBKeyRange.only('usrSyTuI');
        count_31 = objectStore_87.count(KeyRange_122);
    }
    catch (e){
    }

    var add_32 = objectStore_87.add({f0_a: '<number>', f1_o: '<string>', f2_f: '<string>', f3_g: '<boolean>', f4_u: '<object>', f5_y: '<boolean>'}, 'PtSIWAdnZQF');
    var get_22;
    try{
        KeyRange_124 = IDBKeyRange.bound('usrSyTuI', 'PtSIWAdnZQF', true, false);
        get_22 = objectStore_87.get(KeyRange_124);
    }
    catch (e){
    }

    var put_41 = objectStore_87.put({f0_m: '<object>', f1_q: '<array>', f2_s: '<boolean>', f3_f: '<string>', f4_d: '<null>', f5_t: '<array>', f6_c: '<array>', f7_t: '<boolean>', f8_u: '<array>'}, 'MvuR');
    var add_33 = objectStore_87.add({f0_d: '<number>', f1_l: '<array>', f2_n: '<string>', f3_r: '<number>', f4_g: '<array>', f5_p: '<array>'}, 'FSGAXWvfwg');
    var get_23;
    try{
        KeyRange_126 = IDBKeyRange.only('FSGAXWvfwg');
        get_23 = objectStore_87.get(KeyRange_126);
    }
    catch (e){
    }

    var clear_37 = objectStore_87.clear();
    var put_42 = objectStore_87.put({f0_h: '<string>', f1_n: '<object>', f2_q: '<string>', f3_b: '<string>', f4_r: '<array>', f5_e: '<number>', f6_s: '<array>', f7_d: '<string>', f8_l: '<string>', f9_w: '<array>'}, 'xqvzS');
    var clear_38 = objectStore_87.clear();
    txn_90.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_97.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_90.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_98 = db.transaction(['objectStore_82', 'objectStore_93', 'objectStore_88', 'objectStore_92', 'objectStore_84', 'objectStore_91'], 'readonly', {durability:"default"})
    var objectStore_88;
    txn_94.objectStore('objectStore_88')
    var getAllKeys_8;
    try{
        KeyRange_128 = IDBKeyRange.bound('oMyz', 'XhKurqd', false, true);
        getAllKeys_8 = objectStore_88.getAllKeys(KeyRange_128, 1971758340);
    }
    catch (e){
        KeyRange_129 = IDBKeyRange.only('xYkXnM');
        getAllKeys_8 = objectStore_88.getAllKeys(KeyRange_129);
    }

    var put_43 = objectStore_88.put({f0_w: '<boolean>', f1_q: '<object>', f2_p: '<string>', f3_m: '<boolean>', f4_v: '<number>', f5_k: '<number>', f6_u: '<object>'}, 'HJKZDYz');
    var clear_39 = objectStore_88.clear();
    var put_44 = objectStore_88.put({f0_q: '<null>', f1_t: '<array>', f2_d: '<boolean>', f3_g: '<number>', f4_t: '<string>', f5_t: '<string>', f6_f: '<array>'}, 'Dlx');
    var getAllKeys_9 = objectStore_88.getAllKeys(1317638476);
    var clear_40 = objectStore_88.clear();
    var getAllKeys_10 = objectStore_88.getAllKeys(1703513137);
    var put_45 = objectStore_88.put({f0_m: '<number>', f1_w: '<array>', f2_y: '<object>'}, 'Itnute');
    var getAll_7 = objectStore_88.getAll();
    var add_34 = objectStore_88.add({f0_x: '<object>', f1_k: '<array>', f2_m: '<array>', f3_m: '<number>', f4_i: '<number>', f5_z: '<boolean>', f6_z: '<array>'}, 'ejYIGVhfYSGH');
    var add_35 = objectStore_88.add({f0_h: '<number>', f1_y: '<array>', f2_i: '<number>', f3_u: '<boolean>', f4_z: '<null>', f5_f: '<number>', f6_n: '<boolean>', f7_j: '<array>', f8_n: '<array>', f9_k: '<null>'}, 'Jiom');
    var clear_41 = objectStore_88.clear();
    var add_36 = objectStore_88.add({f0_k: '<object>', f1_h: '<string>', f2_s: '<null>'}, 'avU');
    var clear_42 = objectStore_88.clear();
    var put_46 = objectStore_88.put({f0_v: '<object>', f1_k: '<number>', f2_p: '<string>', f3_r: '<array>', f4_x: '<array>', f5_n: '<string>', f6_q: '<object>', f7_y: '<object>', f8_i: '<string>'}, 'jFlr');
    var get_24;
    try{
        KeyRange_130 = IDBKeyRange.bound('oMyz', 'xYkXnM', true, true);
        get_24 = objectStore_88.get(KeyRange_130);
    }
    catch (e){
    }

    var count_32 = objectStore_88.count();
    var clear_43 = objectStore_88.clear();
    var delete_12;
    try{
        KeyRange_132 = IDBKeyRange.bound('ejYIGVhfYSGH', 'fVbvlXXP', false, false);
        delete_12 = objectStore_88.delete(KeyRange_132);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_134 = IDBKeyRange.bound('oMyz', 'eCzDLkBWwYSD', false, true);
        get_25 = objectStore_88.get(KeyRange_134);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_136 = IDBKeyRange.bound('cWSVsdawsbp', 'kyOuPFA', true, false);
        count_33 = objectStore_88.count(KeyRange_136);
    }
    catch (e){
    }

    var add_37 = objectStore_88.add({f0_g: '<boolean>', f1_h: '<string>', f2_o: '<null>', f3_j: '<object>', f4_e: '<null>', f5_x: '<null>', f6_e: '<null>'}, 'wykIgmNlzbr');
    txn_95.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_97.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_93.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_99 = db.transaction(['objectStore_83', 'objectStore_90'], 'readwrite', {durability:"relaxed"})
    var objectStore_83;
    txn_94.objectStore('objectStore_83')
    var getAllKeys_11;
    try{
        KeyRange_138 = IDBKeyRange.lowerBound('qRzMDSSSjO', false);
        getAllKeys_11 = objectStore_83.getAllKeys(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('qRzMDSSSjO');
        getAllKeys_11 = objectStore_83.getAllKeys(KeyRange_139);
    }

    var clear_44 = objectStore_83.clear();
    var put_47 = objectStore_83.put({f0_a: '<null>', f1_p: '<null>', f2_q: '<array>', f3_s: '<boolean>', f4_c: '<object>'}, 'NxUZWDXogYdp');
    var get_26;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('qRzMDSSSjO', true);
        get_26 = objectStore_83.get(KeyRange_140);
    }
    catch (e){
    }

    var getAll_8 = objectStore_83.getAll();
    var getAll_9 = objectStore_83.getAll();
    var count_34;
    try{
        KeyRange_142 = IDBKeyRange.bound('PEvSFUuG', 'qRzMDSSSjO', false, false);
        count_34 = objectStore_83.count(KeyRange_142);
    }
    catch (e){
    }

    var clear_45 = objectStore_83.clear();
    var put_48 = objectStore_83.put({f0_h: '<object>', f1_t: '<array>', f2_y: '<number>', f3_e: '<boolean>', f4_m: '<object>', f5_n: '<array>', f6_s: '<boolean>'}, 'Fyt');
    var getAll_10;
    try{
        KeyRange_144 = IDBKeyRange.bound('uSkKF', 'uSkKF', false, false);
        getAll_10 = objectStore_83.getAll(KeyRange_144);
    }
    catch (e){
        KeyRange_145 = IDBKeyRange.only('uSkKF');
        getAll_10 = objectStore_83.getAll(KeyRange_145);
    }

    var put_49 = objectStore_83.put({f0_t: '<null>', f1_m: '<string>', f2_l: '<array>', f3_n: '<boolean>', f4_s: '<string>', f5_d: '<number>', f6_o: '<number>'}, 'COcQvx');
    var put_50 = objectStore_83.put({f0_i: '<null>', f1_c: '<number>', f2_v: '<number>', f3_h: '<array>', f4_m: '<object>', f5_e: '<number>', f6_y: '<array>'}, 'zSrZMozHPtM');
    var get_27;
    try{
        KeyRange_146 = IDBKeyRange.bound('Fyt', 'qRzMDSSSjO', true, true);
        get_27 = objectStore_83.get(KeyRange_146);
    }
    catch (e){
    }

    var clear_46 = objectStore_83.clear();
    var count_35 = objectStore_83.count();
    var count_36;
    try{
        KeyRange_148 = IDBKeyRange.only('zSrZMozHPtM');
        count_36 = objectStore_83.count(KeyRange_148);
    }
    catch (e){
    }

    var put_51 = objectStore_83.put({f0_y: '<null>', f1_o: '<boolean>', f2_g: '<array>', f3_u: '<number>', f4_r: '<array>', f5_g: '<object>'}, 'FmJpaoj');
    var count_37;
    try{
        KeyRange_150 = IDBKeyRange.bound('PEvSFUuG', 'Fyt', false, false);
        count_37 = objectStore_83.count(KeyRange_150);
    }
    catch (e){
    }

    var put_52 = objectStore_83.put({f0_g: '<boolean>', f1_p: '<array>', f2_z: '<number>', f3_n: '<boolean>', f4_c: '<object>', f5_t: '<null>', f6_b: '<null>', f7_k: '<number>', f8_m: '<object>', f9_g: '<string>'}, 'dPLAEVHVDS');
    var getAll_11 = objectStore_83.getAll();
    var add_38 = objectStore_83.add({f0_y: '<number>', f1_j: '<string>'}, 'fHBLUUlS');
    var add_39 = objectStore_83.add({f0_z: '<array>', f1_e: '<null>', f2_g: '<string>', f3_c: '<number>'}, 'zmOCWkElyvrT');
    txn_99.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_91.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_95.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4987')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};