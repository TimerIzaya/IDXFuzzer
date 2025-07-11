let db;
const openRequest = window.indexedDB.open('str_8411', 2727390324178818)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_51', {autoIncrement: true});
    db.deleteObjectStore('objectStore_51')
    var objectStore_1 = db.createObjectStore('objectStore_52', {keypath: 'iuNHZQTEMUQa'});
    db.deleteObjectStore('objectStore_52')
    var objectStore_2 = db.createObjectStore('objectStore_53', {keypath: 'aHiTXUvmJy'});
    var index_41 = objectStore_2.createIndex('index_41', 'test', {unique: false});
    var clear_0 = objectStore_2.clear();
    objectStore_2.deleteIndex('index_41')
    var add_0 = objectStore_2.add({f0_p: '<null>', f1_k: '<string>', f2_h: '<null>', f3_v: '<null>', f4_y: '<number>', f5_o: '<boolean>', f6_j: '<array>', f7_y: '<string>'}, 'EUI');
    var clear_1 = objectStore_2.clear();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('EUI', false);
        get_0 = objectStore_2.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_54', {keypath: 'fqQAkHcdyKXw', autoIncrement: true});
    var index_42 = objectStore_2.createIndex('index_42', 'test');
    var objectStore_4 = db.createObjectStore('objectStore_55', {keypath: 'fDlJvwp.FPExGGpITcP'});
    var add_1 = objectStore_2.add({f0_t: '<boolean>'}, 'DfrTbBpEY');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('DfrTbBpEY');
        getAll_0 = objectStore_2.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('DfrTbBpEY');
        getAll_0 = objectStore_2.getAll(KeyRange_3);
    }

    var index_43 = objectStore_4.createIndex('index_43', 'test', {unique: false});
    var objectStore_5 = db.createObjectStore('objectStore_56', {autoIncrement: true});
    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.only('EUI');
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('DfrTbBpEY');
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_5);
    }

    var objectStore_6 = db.createObjectStore('objectStore_57', {autoIncrement: true});
    var clear_2 = objectStore_2.clear();
    var objectStore_7 = db.createObjectStore('objectStore_58', {keypath: 'DBM.VFMytbNB.SYbDJEVF.xjlnS.EjFt.bpTM.okOAnluRRe.kUWkQNF'});
    var index_44 = objectStore_5.createIndex('index_44', 'test', {unique: false, multiEntry: false});
    var clear_3 = objectStore_6.clear();
    var clear_4 = objectStore_6.clear();
    var objectStore_8 = db.createObjectStore('objectStore_59');
    var put_0 = objectStore_7.put({f0_s: '<null>', f1_i: '<boolean>'}, 'jlHwc');
    var objectStore_9 = db.createObjectStore('objectStore_60', {keypath: 'GlcXKIWqz'});
    var clear_5 = objectStore_5.clear();
    var add_2 = objectStore_8.add({f0_i: '<object>', f1_j: '<null>', f2_y: '<number>', f3_m: '<object>', f4_o: '<object>', f5_l: '<string>', f6_h: '<string>', f7_c: '<boolean>', f8_s: '<object>'}, 'cRm');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('EUI', false);
        delete_0 = objectStore_2.delete(KeyRange_6);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('EUI', 'DfrTbBpEY', true, false);
        count_0 = objectStore_2.count(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('jlHwc', 'jlHwc', true, true);
        get_1 = objectStore_7.get(KeyRange_10);
    }
    catch (e){
    }

    var index_45 = objectStore_8.createIndex('index_45', 'test', {unique: true});
    var index_46 = objectStore_2.createIndex('index_46', 'test', {unique: false});
    var clear_6 = objectStore_9.clear();
    var clear_7 = objectStore_4.clear();
    var objectStore_10 = db.createObjectStore('objectStore_61');
    var index_47 = objectStore_7.createIndex('index_47', 'test');
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('cRm', true);
        get_2 = objectStore_8.get(KeyRange_12);
    }
    catch (e){
    }

    var clear_8 = objectStore_5.clear();
    var clear_9 = objectStore_3.clear();
    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('cRm', 'cRm', true, false);
        getAllKeys_1 = objectStore_8.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('cRm');
        getAllKeys_1 = objectStore_8.getAllKeys(KeyRange_15);
    }

    var delete_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('EUI', 'DfrTbBpEY', false, false);
        delete_1 = objectStore_2.delete(KeyRange_16);
    }
    catch (e){
    }

    var index_48 = objectStore_9.createIndex('index_48', 'test', {unique: false, multiEntry: false});
    var clear_10 = objectStore_7.clear();
    var index_49 = objectStore_3.createIndex('index_49', 'test', {unique: false, multiEntry: true});
    var clear_11 = objectStore_5.clear();
    var objectStore_11 = db.createObjectStore('objectStore_62', {keypath: 'WrjTDn', autoIncrement: true});
    var add_3 = objectStore_8.add({f0_b: '<boolean>', f1_p: '<array>', f2_m: '<string>', f3_a: '<null>', f4_a: '<array>', f5_f: '<object>', f6_f: '<number>'}, 'bEWUl');
    var clear_12 = objectStore_5.clear();
    var count_1;
    try{
        KeyRange_18 = IDBKeyRange.only('EUI');
        count_1 = objectStore_2.count(KeyRange_18);
    }
    catch (e){
    }

    var index_50 = objectStore_10.createIndex('index_50', 'test', {multiEntry: false});
    db.deleteObjectStore('objectStore_62')
    var clear_13 = objectStore_8.clear();
    var objectStore_12 = db.createObjectStore('objectStore_63', {keypath: 'erTVWKzNl'});
    var add_4 = objectStore_3.add({f0_b: '<boolean>', f1_u: '<number>', f2_g: '<object>', f3_n: '<string>', f4_j: '<boolean>', f5_y: '<null>'}, 'EfaI');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5 = db.transaction(['objectStore_56', 'objectStore_61'], 'readonly', {durability:"strict"})
    var objectStore_56;
    txn_5.objectStore('objectStore_56')
    var clear_14 = objectStore_56.clear();
    var put_1 = objectStore_56.put({f0_r: '<number>', f1_p: '<object>', f2_k: '<null>', f3_e: '<array>', f4_x: '<number>', f5_u: '<boolean>', f6_h: '<boolean>'}, 'WMMq');
    var getAllKeys_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('WMMq', 'WMMq', false, true);
        getAllKeys_2 = objectStore_56.getAllKeys(KeyRange_20, 1079188749);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('WMMq');
        getAllKeys_2 = objectStore_56.getAllKeys(KeyRange_21);
    }

    var count_2;
    try{
        KeyRange_22 = IDBKeyRange.bound('WMMq', 'WMMq', false, false);
        count_2 = objectStore_56.count(KeyRange_22);
    }
    catch (e){
    }

    var put_2 = objectStore_56.put({f0_n: '<object>', f1_h: '<object>', f2_f: '<object>', f3_r: '<null>', f4_v: '<object>'}, 'nojdEMMt');
    var clear_15 = objectStore_56.clear();
    var count_3 = objectStore_56.count();
    var put_3 = objectStore_56.put({f0_y: '<boolean>', f1_v: '<number>', f2_q: '<null>'}, 'pfpqP');
    var add_5 = objectStore_56.add({f0_l: '<object>'}, 'okHolKbsZEo');
    var clear_16 = objectStore_56.clear();
    var index_0 = objectStore_56.index('index_44');
    var count_4 = objectStore_56.count();
    var delete_2;
    try{
        KeyRange_24 = IDBKeyRange.only('okHolKbsZEo');
        delete_2 = objectStore_56.delete(KeyRange_24);
    }
    catch (e){
    }

    var add_6 = objectStore_56.add({f0_x: '<string>'}, 'PMmmXuVpLTny');
    var delete_3;
    try{
        KeyRange_26 = IDBKeyRange.bound('nojdEMMt', 'WMMq', true, true);
        delete_3 = objectStore_56.delete(KeyRange_26);
    }
    catch (e){
    }

    var index_1 = objectStore_56.index('index_44');
    var clear_17 = objectStore_56.clear();
    var index_2 = objectStore_56.index('index_44');
    var put_4 = objectStore_56.put({f0_q: '<object>', f1_d: '<null>', f2_f: '<object>', f3_l: '<object>', f4_l: '<boolean>', f5_v: '<number>'}, 'AIl');
    var put_5 = objectStore_56.put({f0_z: '<null>', f1_m: '<array>', f2_a: '<array>', f3_y: '<array>', f4_v: '<boolean>', f5_x: '<object>', f6_n: '<boolean>', f7_p: '<number>'}, 'ZCjS');
    var count_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('okHolKbsZEo', true);
        count_5 = objectStore_56.count(KeyRange_28);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_30 = IDBKeyRange.only('nojdEMMt');
        delete_4 = objectStore_56.delete(KeyRange_30);
    }
    catch (e){
    }

    var put_6 = objectStore_56.put({f0_c: '<null>', f1_u: '<boolean>', f2_a: '<null>', f3_l: '<array>', f4_b: '<object>', f5_x: '<number>'}, 'ZwNeaybN');
    var clear_18 = objectStore_56.clear();
    var delete_5;
    try{
        KeyRange_32 = IDBKeyRange.bound('nojdEMMt', 'nojdEMMt', false, true);
        delete_5 = objectStore_56.delete(KeyRange_32);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('ZwNeaybN', true);
        count_6 = objectStore_56.count(KeyRange_34);
    }
    catch (e){
    }

    var add_7 = objectStore_56.add({f0_h: '<number>', f1_u: '<number>'}, 'XiUTG');
    var count_7 = objectStore_56.count();
    var getAll_1 = objectStore_56.getAll();
    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('XiUTG', 'AIl', false, true);
        getAll_2 = objectStore_56.getAll(KeyRange_36, 3448583023);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('PMmmXuVpLTny');
        getAll_2 = objectStore_56.getAll(KeyRange_37);
    }

    var add_8 = objectStore_56.add({f0_d: '<number>', f1_v: '<number>', f2_e: '<object>', f3_i: '<string>', f4_i: '<object>', f5_u: '<boolean>', f6_g: '<number>', f7_s: '<boolean>', f8_d: '<string>'}, 'jywACwuxzZ');
    var add_9 = objectStore_56.add({f0_b: '<array>', f1_g: '<object>', f2_c: '<null>', f3_r: '<boolean>', f4_w: '<string>', f5_n: '<number>', f6_c: '<boolean>', f7_h: '<array>'}, 'QLwXTlfKwycF');
    var add_10 = objectStore_56.add({f0_a: '<array>', f1_n: '<boolean>', f2_l: '<string>', f3_d: '<boolean>', f4_p: '<string>', f5_m: '<boolean>', f6_e: '<null>', f7_d: '<null>', f8_w: '<object>', f9_q: '<object>'}, 'BpqedG');
    var clear_19 = objectStore_56.clear();
    var put_7 = objectStore_56.put({f0_f: '<string>', f1_s: '<number>', f2_a: '<boolean>', f3_d: '<boolean>', f4_o: '<number>', f5_n: '<number>', f6_c: '<array>', f7_r: '<number>', f8_i: '<array>'}, 'QAMPjlADsA');
    var put_8 = objectStore_56.put({f0_v: '<boolean>', f1_r: '<array>', f2_y: '<null>', f3_x: '<number>', f4_b: '<string>', f5_s: '<array>', f6_f: '<null>', f7_o: '<object>'}, 'anffDao');
    var put_9 = objectStore_56.put({f0_p: '<string>', f1_v: '<object>', f2_a: '<boolean>', f3_t: '<array>', f4_f: '<number>', f5_k: '<array>', f6_u: '<string>', f7_g: '<null>'}, 'yAeYkiKQ');
    var count_8 = objectStore_56.count();
    var add_11 = objectStore_56.add({f0_x: '<boolean>', f1_n: '<null>', f2_j: '<null>', f3_k: '<number>', f4_v: '<number>', f5_v: '<array>', f6_q: '<number>', f7_x: '<boolean>', f8_g: '<null>'}, 'UUrAbJksVEMr');
    var add_12 = objectStore_56.add({f0_o: '<object>', f1_q: '<number>', f2_l: '<object>', f3_r: '<string>', f4_m: '<array>', f5_p: '<object>', f6_l: '<string>', f7_d: '<boolean>'}, 'VxLyBPmUU');
    var count_9;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('pfpqP', false);
        count_9 = objectStore_56.count(KeyRange_38);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_40 = IDBKeyRange.only('UUrAbJksVEMr');
        delete_6 = objectStore_56.delete(KeyRange_40);
    }
    catch (e){
    }

    var count_10 = objectStore_56.count();
    var put_10 = objectStore_56.put({f0_x: '<number>', f1_v: '<string>', f2_w: '<array>', f3_y: '<array>', f4_v: '<array>', f5_n: '<string>'}, 'SwTwvcgLHOw');
    var clear_20 = objectStore_56.clear();
    var get_3;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('VxLyBPmUU', false);
        get_3 = objectStore_56.get(KeyRange_42);
    }
    catch (e){
    }

    var add_13 = objectStore_56.add({f0_j: '<null>', f1_j: '<string>', f2_b: '<null>', f3_i: '<null>', f4_u: '<object>'}, 'UUYVa');
    var clear_21 = objectStore_56.clear();
    var count_11;
    try{
        KeyRange_44 = IDBKeyRange.only('jywACwuxzZ');
        count_11 = objectStore_56.count(KeyRange_44);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_46 = IDBKeyRange.only('ZCjS');
        delete_7 = objectStore_56.delete(KeyRange_46);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_48 = IDBKeyRange.bound('WMMq', 'AIl', true, false);
        get_4 = objectStore_56.get(KeyRange_48);
    }
    catch (e){
    }

    var add_14 = objectStore_56.add({f0_f: '<array>'}, 'ZgeErLcrTkV');
    var get_5;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('ZCjS', true);
        get_5 = objectStore_56.get(KeyRange_50);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_52 = IDBKeyRange.bound('pfpqP', 'QAMPjlADsA', true, true);
        delete_8 = objectStore_56.delete(KeyRange_52);
    }
    catch (e){
    }

    var delete_9;
    try{
        KeyRange_54 = IDBKeyRange.only('pfpqP');
        delete_9 = objectStore_56.delete(KeyRange_54);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_56 = IDBKeyRange.only('VxLyBPmUU');
        getAllKeys_3 = objectStore_56.getAllKeys(KeyRange_56, 821685252);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('WMMq');
        getAllKeys_3 = objectStore_56.getAllKeys(KeyRange_57);
    }

    var delete_10;
    try{
        KeyRange_58 = IDBKeyRange.bound('AIl', 'anffDao', true, true);
        delete_10 = objectStore_56.delete(KeyRange_58);
    }
    catch (e){
    }

    var clear_22 = objectStore_56.clear();
    var put_11 = objectStore_56.put({f0_a: '<null>', f1_g: '<boolean>', f2_w: '<boolean>', f3_f: '<array>'}, 'Nzm');
    var getAll_3;
    try{
        KeyRange_60 = IDBKeyRange.only('BpqedG');
        getAll_3 = objectStore_56.getAll(KeyRange_60, 3724822048);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('yAeYkiKQ');
        getAll_3 = objectStore_56.getAll(KeyRange_61);
    }

    var put_12 = objectStore_56.put({f0_n: '<null>'}, 'oAXBGGQS');
    var getAll_4 = objectStore_56.getAll();
    var get_6;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('nojdEMMt', false);
        get_6 = objectStore_56.get(KeyRange_62);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_64 = IDBKeyRange.bound('jywACwuxzZ', 'PMmmXuVpLTny', false, false);
        get_7 = objectStore_56.get(KeyRange_64);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_66 = IDBKeyRange.bound('UUYVa', 'SwTwvcgLHOw', false, false);
        count_12 = objectStore_56.count(KeyRange_66);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_68 = IDBKeyRange.only('oAXBGGQS');
        get_8 = objectStore_56.get(KeyRange_68);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_70 = IDBKeyRange.bound('SwTwvcgLHOw', 'AIl', false, false);
        get_9 = objectStore_56.get(KeyRange_70);
    }
    catch (e){
    }

    var add_15 = objectStore_56.add({f0_o: '<boolean>', f1_f: '<array>', f2_x: '<boolean>', f3_y: '<number>', f4_d: '<number>', f5_q: '<array>'}, 'GTpqH');
    var put_13 = objectStore_56.put({f0_h: '<number>', f1_c: '<array>', f2_r: '<array>', f3_m: '<number>', f4_r: '<string>'}, 'SQLkaoeyH');
    var put_14 = objectStore_56.put({f0_r: '<boolean>', f1_n: '<array>', f2_t: '<number>', f3_d: '<null>', f4_b: '<array>', f5_b: '<boolean>', f6_p: '<number>'}, 'dPazMrUpX');
    var count_13;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('GTpqH', true);
        count_13 = objectStore_56.count(KeyRange_72);
    }
    catch (e){
    }

    var count_14 = objectStore_56.count();
    var clear_23 = objectStore_56.clear();
    var get_10;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('anffDao', true);
        get_10 = objectStore_56.get(KeyRange_74);
    }
    catch (e){
    }

    var add_16 = objectStore_56.add({f0_x: '<null>', f1_d: '<object>', f2_m: '<string>', f3_z: '<string>'}, 'zgeTyKyLsE');
    var getAllKeys_4;
    try{
        KeyRange_76 = IDBKeyRange.bound('PMmmXuVpLTny', 'AIl', false, true);
        getAllKeys_4 = objectStore_56.getAllKeys(KeyRange_76, 423064466);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('Nzm');
        getAllKeys_4 = objectStore_56.getAllKeys(KeyRange_77);
    }

    var get_11;
    try{
        KeyRange_78 = IDBKeyRange.bound('XiUTG', 'VxLyBPmUU', false, false);
        get_11 = objectStore_56.get(KeyRange_78);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_80 = IDBKeyRange.only('jywACwuxzZ');
        get_12 = objectStore_56.get(KeyRange_80);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('SwTwvcgLHOw', false);
        getAll_5 = objectStore_56.getAll(KeyRange_82, 4190013972);
    }
    catch (e){
        KeyRange_83 = IDBKeyRange.only('dPazMrUpX');
        getAll_5 = objectStore_56.getAll(KeyRange_83);
    }

    var clear_24 = objectStore_56.clear();
    var count_15;
    try{
        KeyRange_84 = IDBKeyRange.bound('nojdEMMt', 'AIl', false, true);
        count_15 = objectStore_56.count(KeyRange_84);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_86 = IDBKeyRange.bound('yAeYkiKQ', 'oAXBGGQS', true, true);
        get_13 = objectStore_56.get(KeyRange_86);
    }
    catch (e){
    }

    var clear_25 = objectStore_56.clear();
    var put_15 = objectStore_56.put({f0_p: '<null>', f1_h: '<boolean>', f2_v: '<boolean>', f3_o: '<array>'}, 'CEaCmZBrP');
    var put_16 = objectStore_56.put({f0_o: '<array>', f1_q: '<object>', f2_e: '<array>', f3_a: '<null>', f4_u: '<array>', f5_m: '<object>', f6_b: '<null>', f7_j: '<null>'}, 'QYKgY');
    var getAll_6 = objectStore_56.getAll(508085352);
    var count_16;
    try{
        KeyRange_88 = IDBKeyRange.only('anffDao');
        count_16 = objectStore_56.count(KeyRange_88);
    }
    catch (e){
    }

    var add_17 = objectStore_56.add({f0_g: '<boolean>', f1_k: '<array>', f2_z: '<null>'}, 'dgZ');
    var add_18 = objectStore_56.add({f0_z: '<array>', f1_l: '<null>', f2_q: '<boolean>', f3_g: '<boolean>'}, 'QmgVj');
    var add_19 = objectStore_56.add({f0_r: '<boolean>', f1_n: '<null>', f2_v: '<array>', f3_p: '<boolean>'}, 'MlOiMnrGFU');
    txn_5.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8572')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};