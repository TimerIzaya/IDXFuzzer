let db;
const openRequest = window.indexedDB.open('str_6769', 3478569299604927)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_74', {keypath: 'sWUgcyBLrzD', autoIncrement: true});
    var index_72 = objectStore_0.createIndex('index_72', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var index_73 = objectStore_0.createIndex('index_73', 'test', {multiEntry: false});
    var put_0 = objectStore_0.put({f0_j: '<boolean>', f1_g: '<array>', f2_h: '<array>', f3_y: '<string>', f4_n: '<object>', f5_l: '<string>'}, 'ZVRwvMxa');
    var put_1 = objectStore_0.put({f0_h: '<string>', f1_s: '<boolean>', f2_a: '<object>', f3_s: '<object>', f4_z: '<array>', f5_r: '<array>', f6_u: '<array>', f7_b: '<number>', f8_q: '<string>'}, 'dXQJVuBqogD');
    var objectStore_1 = db.createObjectStore('objectStore_75', {keypath: 'ljia', autoIncrement: false});
    var index_0 = objectStore_0.index('index_72');
    var add_0 = objectStore_0.add({f0_t: '<string>', f1_q: '<object>', f2_c: '<null>', f3_r: '<object>', f4_y: '<null>', f5_r: '<null>'}, 'FqfJINkQO');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('dXQJVuBqogD', 'dXQJVuBqogD', false, false);
        getAll_0 = objectStore_0.getAll(KeyRange_0, 3659134390);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('dXQJVuBqogD');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var add_1 = objectStore_0.add({f0_d: '<object>', f1_f: '<number>', f2_s: '<boolean>', f3_f: '<number>', f4_n: '<boolean>', f5_r: '<array>', f6_c: '<string>', f7_g: '<array>', f8_k: '<boolean>'}, 'Jadzf');
    var count_0 = objectStore_0.count();
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('FqfJINkQO', true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_76', {autoIncrement: true});
    var add_2 = objectStore_1.add({f0_g: '<array>'}, 'WyhNXTX');
    var add_3 = objectStore_0.add({f0_k: '<array>', f1_t: '<array>', f2_l: '<object>'}, 'tRRHfgZnZRd');
    var clear_1 = objectStore_2.clear();
    var index_74 = objectStore_0.createIndex('index_74', 'test', {multiEntry: false});
    db.deleteObjectStore('objectStore_76')
    var index_75 = objectStore_1.createIndex('index_75', 'test', {unique: false, multiEntry: false});
    var objectStore_3 = db.createObjectStore('objectStore_77', {keypath: 'mmIil'});
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('WyhNXTX', true);
        delete_0 = objectStore_1.delete(KeyRange_4);
    }
    catch (e){
    }

    var clear_2 = objectStore_0.clear();
    var index_76 = objectStore_3.createIndex('index_76', 'test', {unique: false, multiEntry: true});
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('WyhNXTX', 'WyhNXTX', false, true);
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_6, 859880558);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('WyhNXTX');
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_7);
    }

    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('tRRHfgZnZRd', false);
        count_1 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var clear_3 = objectStore_0.clear();
    var index_77 = objectStore_1.createIndex('index_77', 'test');
    var objectStore_4 = db.createObjectStore('objectStore_78', {keypath: 'Qtn.vINeElSB', autoIncrement: false});
    var clear_4 = objectStore_3.clear();
    var add_4 = objectStore_0.add({f0_j: '<null>', f1_s: '<array>', f2_q: '<object>', f3_w: '<boolean>', f4_w: '<null>', f5_y: '<number>', f6_q: '<string>', f7_x: '<string>'}, 'RGjnFZwKE');
    var put_2 = objectStore_0.put({f0_j: '<object>', f1_f: '<number>', f2_i: '<string>', f3_d: '<object>'}, 'UMADMTMS');
    var add_5 = objectStore_0.add({f0_r: '<array>', f1_o: '<object>', f2_t: '<boolean>', f3_a: '<null>', f4_s: '<array>'}, 'yZLvbkPfdWWC');
    var getAllKeys_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('WyhNXTX', true);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_10, 575084008);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('WyhNXTX');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_11);
    }

    var clear_5 = objectStore_4.clear();
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('tRRHfgZnZRd', 'UMADMTMS', true, false);
        get_1 = objectStore_0.get(KeyRange_12);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_78')
    var put_3 = objectStore_1.put({f0_h: '<string>', f1_x: '<object>', f2_i: '<null>', f3_e: '<array>', f4_f: '<null>'}, 'GDUEDAUau');
    var put_4 = objectStore_0.put({f0_c: '<object>', f1_y: '<boolean>'}, 'wgWhtDpmuQ');
    db.deleteObjectStore('objectStore_77')
    var count_2 = objectStore_0.count();
    var count_3 = objectStore_0.count();
    var clear_6 = objectStore_1.clear();
    var clear_7 = objectStore_1.clear();
    var clear_8 = objectStore_0.clear();
    var objectStore_5 = db.createObjectStore('objectStore_79');
    var delete_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('WyhNXTX', true);
        delete_1 = objectStore_1.delete(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_80', {keypath: 'FWYnf', autoIncrement: true});
    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('GDUEDAUau', 'WyhNXTX', false, true);
        get_2 = objectStore_1.get(KeyRange_16);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.only('GDUEDAUau');
        count_4 = objectStore_1.count(KeyRange_18);
    }
    catch (e){
    }

    var put_5 = objectStore_5.put({f0_s: '<array>', f1_g: '<object>', f2_j: '<null>', f3_z: '<object>', f4_x: '<string>', f5_w: '<string>', f6_a: '<null>'}, 'UPH');
    var clear_9 = objectStore_5.clear();
    var put_6 = objectStore_6.put({f0_q: '<boolean>'}, 'DbAoSnxzACCT');
    var add_6 = objectStore_1.add({f0_s: '<array>', f1_a: '<object>', f2_p: '<string>', f3_b: '<string>', f4_s: '<number>'}, 'WSVcqcDV');
    var put_7 = objectStore_6.put({f0_e: '<array>', f1_q: '<null>', f2_n: '<null>', f3_b: '<null>', f4_t: '<boolean>', f5_y: '<object>', f6_a: '<number>', f7_g: '<string>', f8_s: '<boolean>', f9_c: '<boolean>'}, 'xfDEZcAIGq');
    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('DbAoSnxzACCT', 'DbAoSnxzACCT', false, true);
        delete_2 = objectStore_6.delete(KeyRange_20);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('ZVRwvMxa', 'ZVRwvMxa', false, true);
        get_3 = objectStore_0.get(KeyRange_22);
    }
    catch (e){
    }

    var objectStore_7 = db.createObjectStore('objectStore_81', {keypath: 'zioByzbPrYG'});
    var add_7 = objectStore_0.add({f0_p: '<string>', f1_x: '<null>', f2_t: '<string>', f3_d: '<string>', f4_s: '<array>', f5_v: '<object>', f6_b: '<boolean>', f7_h: '<string>', f8_n: '<number>'}, 'odqhGCnSOiRv');
    var clear_10 = objectStore_5.clear();
    var clear_11 = objectStore_5.clear();
    var add_8 = objectStore_7.add({f0_j: '<null>', f1_c: '<boolean>', f2_e: '<null>', f3_z: '<string>', f4_t: '<string>', f5_n: '<string>', f6_c: '<number>', f7_g: '<object>', f8_d: '<string>'}, 'FCSMCFgGX');
    var getAll_1 = objectStore_5.getAll(3983900363);
    objectStore_1.deleteIndex('index_75')
    var clear_12 = objectStore_6.clear();
    var add_9 = objectStore_7.add({f0_b: '<string>', f1_t: '<string>', f2_c: '<array>', f3_v: '<null>', f4_d: '<string>', f5_w: '<boolean>', f6_y: '<boolean>'}, 'ZbEc');
    var put_8 = objectStore_1.put({f0_k: '<object>', f1_s: '<object>'}, 'WbArGuTPXe');
    var index_1 = objectStore_0.index('index_72');
    var add_10 = objectStore_1.add({f0_i: '<boolean>', f1_z: '<array>', f2_l: '<boolean>'}, 'KlSzMy');
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.only('FCSMCFgGX');
        get_4 = objectStore_7.get(KeyRange_24);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('UPH', false);
        get_5 = objectStore_5.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_2 = objectStore_6.getAll(1879192677);
    var clear_13 = objectStore_7.clear();
    var add_11 = objectStore_7.add({f0_v: '<null>', f1_p: '<number>', f2_i: '<null>', f3_g: '<string>', f4_f: '<number>', f5_g: '<number>', f6_n: '<object>', f7_c: '<null>', f8_y: '<number>', f9_c: '<number>'}, 'APwX');
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('UPH', false);
        get_6 = objectStore_5.get(KeyRange_28);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.only('DbAoSnxzACCT');
        get_7 = objectStore_6.get(KeyRange_30);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.only('xfDEZcAIGq');
        get_8 = objectStore_6.get(KeyRange_32);
    }
    catch (e){
    }

    var index_78 = objectStore_0.createIndex('index_78', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_80 = db.transaction(['objectStore_79'], 'readonly', {durability:"strict"})
    var objectStore_79;
    txn_80.objectStore('objectStore_79')
    var put_9 = objectStore_79.put({f0_g: '<string>', f1_h: '<object>', f2_o: '<object>', f3_j: '<array>', f4_n: '<string>', f5_k: '<array>', f6_o: '<array>'}, 'ItcVSThKc');
    var clear_14 = objectStore_79.clear();
    var put_10 = objectStore_79.put({f0_d: '<null>', f1_g: '<null>', f2_a: '<null>', f3_k: '<array>'}, 'EzQfpyg');
    var getAll_3;
    try{
        KeyRange_34 = IDBKeyRange.only('ItcVSThKc');
        getAll_3 = objectStore_79.getAll(KeyRange_34, 4219040059);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('ItcVSThKc');
        getAll_3 = objectStore_79.getAll(KeyRange_35);
    }

    var add_12 = objectStore_79.add({f0_p: '<number>', f1_w: '<string>', f2_q: '<number>', f3_w: '<null>', f4_n: '<boolean>', f5_r: '<object>', f6_g: '<string>'}, 'lmpmDrRs');
    var clear_15 = objectStore_79.clear();
    var count_5 = objectStore_79.count();
    var get_9;
    try{
        KeyRange_36 = IDBKeyRange.bound('UPH', 'lmpmDrRs', true, true);
        get_9 = objectStore_79.get(KeyRange_36);
    }
    catch (e){
    }

    var put_11 = objectStore_79.put({f0_h: '<object>', f1_y: '<array>', f2_q: '<number>', f3_b: '<array>', f4_n: '<boolean>', f5_x: '<number>', f6_i: '<string>', f7_b: '<number>', f8_u: '<object>', f9_v: '<boolean>'}, 'bcJRBiyHIWu');
    var delete_3;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('bcJRBiyHIWu', true);
        delete_3 = objectStore_79.delete(KeyRange_38);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('UPH', true);
        get_10 = objectStore_79.get(KeyRange_40);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_42 = IDBKeyRange.bound('lmpmDrRs', 'ItcVSThKc', false, true);
        get_11 = objectStore_79.get(KeyRange_42);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('lmpmDrRs', 'UPH', false, true);
        get_12 = objectStore_79.get(KeyRange_44);
    }
    catch (e){
    }

    var put_12 = objectStore_79.put({f0_e: '<boolean>', f1_k: '<object>', f2_q: '<null>', f3_y: '<array>', f4_c: '<number>', f5_g: '<number>', f6_c: '<string>', f7_j: '<number>', f8_x: '<string>', f9_x: '<string>'}, 'dpDAubeFa');
    var put_13 = objectStore_79.put({f0_m: '<number>', f1_b: '<object>', f2_z: '<boolean>', f3_s: '<string>', f4_z: '<null>', f5_a: '<array>', f6_u: '<number>', f7_m: '<number>', f8_e: '<array>', f9_a: '<array>'}, 'QzgqmiWzR');
    var getAll_4 = objectStore_79.getAll();
    var count_6;
    try{
        KeyRange_46 = IDBKeyRange.bound('QzgqmiWzR', 'dpDAubeFa', true, false);
        count_6 = objectStore_79.count(KeyRange_46);
    }
    catch (e){
    }

    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_81 = db.transaction(['objectStore_79'], 'readonly', {durability:"default"})
    var objectStore_79;
    txn_81.objectStore('objectStore_79')
    var put_14 = objectStore_79.put({f0_t: '<null>'}, 'lFu');
    var count_7 = objectStore_79.count();
    var clear_16 = objectStore_79.clear();
    var count_8 = objectStore_79.count();
    var put_15 = objectStore_79.put({f0_k: '<boolean>', f1_q: '<array>', f2_l: '<object>'}, 'UWll');
    var add_13 = objectStore_79.add({f0_j: '<string>', f1_d: '<number>', f2_w: '<string>'}, 'yyx');
    var getAllKeys_2 = objectStore_79.getAllKeys(2529765126);
    var add_14 = objectStore_79.add({f0_p: '<object>', f1_n: '<array>', f2_f: '<object>', f3_p: '<null>', f4_o: '<null>', f5_s: '<string>', f6_u: '<object>', f7_s: '<object>'}, 'Xome');
    var delete_4;
    try{
        KeyRange_48 = IDBKeyRange.only('lmpmDrRs');
        delete_4 = objectStore_79.delete(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_79.getAllKeys();
    var clear_17 = objectStore_79.clear();
    var delete_5;
    try{
        KeyRange_50 = IDBKeyRange.bound('bcJRBiyHIWu', 'UPH', true, false);
        delete_5 = objectStore_79.delete(KeyRange_50);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('dpDAubeFa', false);
        get_13 = objectStore_79.get(KeyRange_52);
    }
    catch (e){
    }

    var clear_18 = objectStore_79.clear();
    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_82 = db.transaction(['objectStore_81'], 'readonly', {durability:"default"})
    var objectStore_81;
    txn_80.objectStore('objectStore_81')
    var get_14;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('ZbEc', true);
        get_14 = objectStore_81.get(KeyRange_54);
    }
    catch (e){
    }

    var clear_19 = objectStore_81.clear();
    var getAll_5;
    try{
        KeyRange_56 = IDBKeyRange.only('APwX');
        getAll_5 = objectStore_81.getAll(KeyRange_56, 1955576676);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('ZbEc');
        getAll_5 = objectStore_81.getAll(KeyRange_57);
    }

    var put_16 = objectStore_81.put({f0_z: '<null>', f1_i: '<object>', f2_z: '<null>', f3_c: '<object>', f4_j: '<object>', f5_i: '<string>', f6_v: '<number>', f7_t: '<object>', f8_k: '<number>', f9_d: '<null>'}, 'JnxpeHSnLWfQ');
    var put_17 = objectStore_81.put({f0_t: '<number>', f1_i: '<null>', f2_k: '<array>', f3_d: '<string>', f4_w: '<array>', f5_b: '<string>'}, 'XiWX');
    var get_15;
    try{
        KeyRange_58 = IDBKeyRange.only('FCSMCFgGX');
        get_15 = objectStore_81.get(KeyRange_58);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_60 = IDBKeyRange.bound('ZbEc', 'FCSMCFgGX', false, false);
        get_16 = objectStore_81.get(KeyRange_60);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_62 = IDBKeyRange.bound('FCSMCFgGX', 'FCSMCFgGX', true, true);
        getAll_6 = objectStore_81.getAll(KeyRange_62, 2323417258);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('APwX');
        getAll_6 = objectStore_81.getAll(KeyRange_63);
    }

    var get_17;
    try{
        KeyRange_64 = IDBKeyRange.only('JnxpeHSnLWfQ');
        get_17 = objectStore_81.get(KeyRange_64);
    }
    catch (e){
    }

    var put_18 = objectStore_81.put({f0_w: '<null>'}, 'WoIBBx');
    var add_15 = objectStore_81.add({f0_o: '<string>', f1_p: '<number>', f2_i: '<string>', f3_t: '<object>', f4_u: '<boolean>', f5_x: '<number>', f6_f: '<string>', f7_q: '<number>', f8_z: '<array>', f9_r: '<string>'}, 'ozysL');
    var count_9 = objectStore_81.count();
    var put_19 = objectStore_81.put({f0_q: '<string>', f1_d: '<boolean>', f2_n: '<string>', f3_f: '<null>'}, 'PVD');
    var get_18;
    try{
        KeyRange_66 = IDBKeyRange.bound('JnxpeHSnLWfQ', 'WoIBBx', false, false);
        get_18 = objectStore_81.get(KeyRange_66);
    }
    catch (e){
    }

    var add_16 = objectStore_81.add({f0_j: '<null>', f1_w: '<array>', f2_r: '<boolean>', f3_v: '<string>', f4_t: '<number>', f5_r: '<null>', f6_q: '<string>', f7_j: '<object>', f8_x: '<string>'}, 'jSJsh');
    var put_20 = objectStore_81.put({f0_c: '<null>'}, 'mhmgyFcix');
    var count_10 = objectStore_81.count();
    var clear_20 = objectStore_81.clear();
    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_82.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_83 = db.transaction(['objectStore_80'], 'readonly', {durability:"default"})
    var objectStore_80;
    txn_80.objectStore('objectStore_80')
    var clear_21 = objectStore_80.clear();
    var clear_22 = objectStore_80.clear();
    var get_19;
    try{
        KeyRange_68 = IDBKeyRange.bound('xfDEZcAIGq', 'DbAoSnxzACCT', false, true);
        get_19 = objectStore_80.get(KeyRange_68);
    }
    catch (e){
    }

    var put_21 = objectStore_80.put({f0_f: '<object>', f1_s: '<object>', f2_g: '<string>', f3_i: '<string>', f4_r: '<null>', f5_c: '<number>', f6_y: '<null>'}, 'kULVngUIBTRE');
    var count_11;
    try{
        KeyRange_70 = IDBKeyRange.only('xfDEZcAIGq');
        count_11 = objectStore_80.count(KeyRange_70);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_72 = IDBKeyRange.bound('kULVngUIBTRE', 'kULVngUIBTRE', false, false);
        count_12 = objectStore_80.count(KeyRange_72);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('DbAoSnxzACCT', true);
        count_13 = objectStore_80.count(KeyRange_74);
    }
    catch (e){
    }

    var clear_23 = objectStore_80.clear();
    var count_14 = objectStore_80.count();
    var getAll_7;
    try{
        KeyRange_76 = IDBKeyRange.only('kULVngUIBTRE');
        getAll_7 = objectStore_80.getAll(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('xfDEZcAIGq');
        getAll_7 = objectStore_80.getAll(KeyRange_77);
    }

    var clear_24 = objectStore_80.clear();
    var put_22 = objectStore_80.put({f0_k: '<array>', f1_s: '<null>', f2_t: '<null>', f3_z: '<boolean>', f4_n: '<string>'}, 'DmrkhbsdcPw');
    var add_17 = objectStore_80.add({f0_v: '<number>', f1_z: '<boolean>', f2_b: '<number>', f3_r: '<null>', f4_i: '<number>', f5_s: '<number>', f6_o: '<object>'}, 'IBkfKSLEgeM');
    var count_15;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('xfDEZcAIGq', true);
        count_15 = objectStore_80.count(KeyRange_78);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_80 = IDBKeyRange.bound('IBkfKSLEgeM', 'IBkfKSLEgeM', true, false);
        get_20 = objectStore_80.get(KeyRange_80);
    }
    catch (e){
    }

    var add_18 = objectStore_80.add({f0_v: '<object>', f1_a: '<array>', f2_f: '<object>', f3_h: '<boolean>', f4_i: '<array>', f5_w: '<boolean>'}, 'oiMKne');
    var clear_25 = objectStore_80.clear();
    var add_19 = objectStore_80.add({f0_s: '<number>', f1_i: '<boolean>', f2_z: '<boolean>', f3_l: '<string>', f4_n: '<string>', f5_w: '<boolean>', f6_c: '<object>', f7_g: '<string>'}, 'fSUqPBP');
    var put_23 = objectStore_80.put({f0_t: '<array>', f1_d: '<null>', f2_b: '<string>', f3_x: '<array>'}, 'qgJmgqzr');
    var clear_26 = objectStore_80.clear();
    var get_21;
    try{
        KeyRange_82 = IDBKeyRange.only('DbAoSnxzACCT');
        get_21 = objectStore_80.get(KeyRange_82);
    }
    catch (e){
    }

    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_84 = db.transaction(['objectStore_75'], 'readwrite', {durability:"strict"})
    var objectStore_75;
    txn_82.objectStore('objectStore_75')
    var clear_27 = objectStore_75.clear();
    var clear_28 = objectStore_75.clear();
    var index_2 = objectStore_75.index('index_77');
    var count_16;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('KlSzMy', true);
        count_16 = objectStore_75.count(KeyRange_84);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_86 = IDBKeyRange.lowerBound('GDUEDAUau', false);
        get_22 = objectStore_75.get(KeyRange_86);
    }
    catch (e){
    }

    var clear_29 = objectStore_75.clear();
    var put_24 = objectStore_75.put({f0_g: '<number>', f1_r: '<array>'}, 'Jttk');
    var clear_30 = objectStore_75.clear();
    var add_20 = objectStore_75.add({f0_w: '<object>', f1_k: '<object>', f2_f: '<null>', f3_r: '<object>', f4_i: '<string>', f5_g: '<string>', f6_m: '<number>', f7_w: '<boolean>', f8_x: '<object>', f9_p: '<null>'}, 'fWmfUDzuZuhJ');
    var clear_31 = objectStore_75.clear();
    var put_25 = objectStore_75.put({f0_u: '<object>', f1_m: '<object>', f2_q: '<boolean>', f3_c: '<null>', f4_h: '<boolean>', f5_s: '<boolean>', f6_s: '<boolean>', f7_c: '<boolean>'}, 'NpsCMwrSCeiQ');
    var delete_6;
    try{
        KeyRange_88 = IDBKeyRange.bound('NpsCMwrSCeiQ', 'WbArGuTPXe', true, false);
        delete_6 = objectStore_75.delete(KeyRange_88);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('GDUEDAUau', false);
        getAllKeys_4 = objectStore_75.getAllKeys(KeyRange_90);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('fWmfUDzuZuhJ');
        getAllKeys_4 = objectStore_75.getAllKeys(KeyRange_91);
    }

    var clear_32 = objectStore_75.clear();
    var add_21 = objectStore_75.add({f0_g: '<null>', f1_d: '<array>', f2_p: '<number>', f3_r: '<object>', f4_h: '<string>', f5_j: '<array>', f6_m: '<number>', f7_j: '<array>', f8_l: '<null>', f9_u: '<null>'}, 'JEcrDIbFC');
    var delete_7;
    try{
        KeyRange_92 = IDBKeyRange.bound('WSVcqcDV', 'GDUEDAUau', false, true);
        delete_7 = objectStore_75.delete(KeyRange_92);
    }
    catch (e){
    }

    var clear_33 = objectStore_75.clear();
    var put_26 = objectStore_75.put({f0_d: '<null>', f1_j: '<number>', f2_w: '<array>', f3_t: '<object>', f4_v: '<boolean>', f5_q: '<boolean>', f6_i: '<array>', f7_a: '<number>', f8_d: '<object>'}, 'nquUjg');
    var getAll_8;
    try{
        KeyRange_94 = IDBKeyRange.bound('nquUjg', 'WyhNXTX', false, true);
        getAll_8 = objectStore_75.getAll(KeyRange_94);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('fWmfUDzuZuhJ');
        getAll_8 = objectStore_75.getAll(KeyRange_95);
    }

    var add_22 = objectStore_75.add({f0_l: '<null>', f1_n: '<array>', f2_f: '<array>', f3_p: '<array>', f4_j: '<string>', f5_k: '<array>', f6_b: '<null>', f7_g: '<null>'}, 'kNAqNgIwqPIm');
    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_82.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_85 = db.transaction(['objectStore_75', 'objectStore_79'], 'readonly', {durability:"default"})
    var objectStore_79;
    txn_80.objectStore('objectStore_79')
    var getAll_9;
    try{
        KeyRange_96 = IDBKeyRange.bound('ItcVSThKc', 'yyx', true, false);
        getAll_9 = objectStore_79.getAll(KeyRange_96);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('lFu');
        getAll_9 = objectStore_79.getAll(KeyRange_97);
    }

    var getAll_10;
    try{
        KeyRange_98 = IDBKeyRange.bound('bcJRBiyHIWu', 'yyx', false, true);
        getAll_10 = objectStore_79.getAll(KeyRange_98);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('QzgqmiWzR');
        getAll_10 = objectStore_79.getAll(KeyRange_99);
    }

    var add_23 = objectStore_79.add({f0_c: '<number>', f1_y: '<object>', f2_k: '<array>', f3_g: '<boolean>', f4_y: '<number>', f5_e: '<boolean>', f6_y: '<boolean>'}, 'TIwWytzzma');
    var getAllKeys_5;
    try{
        KeyRange_100 = IDBKeyRange.bound('ItcVSThKc', 'UPH', false, false);
        getAllKeys_5 = objectStore_79.getAllKeys(KeyRange_100, 4232380743);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('UWll');
        getAllKeys_5 = objectStore_79.getAllKeys(KeyRange_101);
    }

    var delete_8;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('ItcVSThKc', true);
        delete_8 = objectStore_79.delete(KeyRange_102);
    }
    catch (e){
    }

    var delete_9;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('yyx', false);
        delete_9 = objectStore_79.delete(KeyRange_104);
    }
    catch (e){
    }

    var clear_34 = objectStore_79.clear();
    var getAllKeys_6 = objectStore_79.getAllKeys(518485330);
    var clear_35 = objectStore_79.clear();
    var count_17;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('lmpmDrRs', true);
        count_17 = objectStore_79.count(KeyRange_106);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_108 = IDBKeyRange.only('QzgqmiWzR');
        count_18 = objectStore_79.count(KeyRange_108);
    }
    catch (e){
    }

    var add_24 = objectStore_79.add({f0_o: '<string>', f1_h: '<object>', f2_p: '<array>', f3_d: '<boolean>', f4_e: '<array>', f5_z: '<array>', f6_g: '<string>', f7_d: '<null>', f8_q: '<array>'}, 'VXysssTdd');
    var put_27 = objectStore_79.put({f0_n: '<string>', f1_m: '<string>'}, 'PCdEo');
    var count_19;
    try{
        KeyRange_110 = IDBKeyRange.bound('VXysssTdd', 'lFu', true, false);
        count_19 = objectStore_79.count(KeyRange_110);
    }
    catch (e){
    }

    var put_28 = objectStore_79.put({f0_f: '<array>'}, 'ktWorGn');
    var get_23;
    try{
        KeyRange_112 = IDBKeyRange.bound('lmpmDrRs', 'EzQfpyg', true, false);
        get_23 = objectStore_79.get(KeyRange_112);
    }
    catch (e){
    }

    var add_25 = objectStore_79.add({f0_f: '<array>', f1_j: '<boolean>', f2_o: '<array>', f3_e: '<null>', f4_s: '<number>', f5_m: '<string>', f6_c: '<number>', f7_n: '<string>', f8_r: '<string>', f9_x: '<array>'}, 'rFWUP');
    var get_24;
    try{
        KeyRange_114 = IDBKeyRange.bound('Xome', 'VXysssTdd', true, false);
        get_24 = objectStore_79.get(KeyRange_114);
    }
    catch (e){
    }

    var put_29 = objectStore_79.put({f0_z: '<string>', f1_d: '<number>', f2_y: '<boolean>', f3_q: '<boolean>'}, 'uYAlGidlR');
    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_86 = db.transaction(['objectStore_75'], 'readwrite', {durability:"relaxed"})
    var objectStore_75;
    txn_80.objectStore('objectStore_75')
    var add_26 = objectStore_75.add({f0_j: '<array>', f1_l: '<string>', f2_h: '<string>', f3_c: '<boolean>', f4_v: '<boolean>', f5_i: '<object>', f6_x: '<boolean>', f7_t: '<null>', f8_s: '<array>', f9_f: '<object>'}, 'FLSSDfPLI');
    var count_20 = objectStore_75.count();
    var getAll_11;
    try{
        KeyRange_116 = IDBKeyRange.bound('FLSSDfPLI', 'Jttk', true, false);
        getAll_11 = objectStore_75.getAll(KeyRange_116);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('nquUjg');
        getAll_11 = objectStore_75.getAll(KeyRange_117);
    }

    var put_30 = objectStore_75.put({f0_r: '<string>', f1_k: '<object>', f2_y: '<number>', f3_b: '<string>', f4_m: '<string>', f5_h: '<null>'}, 'XXYOV');
    var add_27 = objectStore_75.add({f0_v: '<array>'}, 'WGneeONAOnd');
    var get_25;
    try{
        KeyRange_118 = IDBKeyRange.only('FLSSDfPLI');
        get_25 = objectStore_75.get(KeyRange_118);
    }
    catch (e){
    }

    var clear_36 = objectStore_75.clear();
    var count_21;
    try{
        KeyRange_120 = IDBKeyRange.bound('WyhNXTX', 'nquUjg', true, false);
        count_21 = objectStore_75.count(KeyRange_120);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_122 = IDBKeyRange.only('WyhNXTX');
        get_26 = objectStore_75.get(KeyRange_122);
    }
    catch (e){
    }

    var clear_37 = objectStore_75.clear();
    var add_28 = objectStore_75.add({f0_m: '<number>', f1_j: '<number>', f2_d: '<boolean>', f3_f: '<null>'}, 'WJQjiZ');
    var put_31 = objectStore_75.put({f0_x: '<object>', f1_r: '<boolean>', f2_w: '<array>', f3_s: '<number>', f4_s: '<object>', f5_g: '<string>', f6_v: '<array>', f7_k: '<object>', f8_v: '<boolean>', f9_t: '<object>'}, 'lyLJB');
    var count_22;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('fWmfUDzuZuhJ', true);
        count_22 = objectStore_75.count(KeyRange_124);
    }
    catch (e){
    }

    var delete_10;
    try{
        KeyRange_126 = IDBKeyRange.bound('kNAqNgIwqPIm', 'NpsCMwrSCeiQ', true, false);
        delete_10 = objectStore_75.delete(KeyRange_126);
    }
    catch (e){
    }

    var count_23;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('WyhNXTX', true);
        count_23 = objectStore_75.count(KeyRange_128);
    }
    catch (e){
    }

    txn_86.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_87 = db.transaction(['objectStore_74'], 'readwrite', {durability:"relaxed"})
    var objectStore_74;
    txn_85.objectStore('objectStore_74')
    var get_27;
    try{
        KeyRange_130 = IDBKeyRange.only('ZVRwvMxa');
        get_27 = objectStore_74.get(KeyRange_130);
    }
    catch (e){
    }

    var put_32 = objectStore_74.put({f0_j: '<number>', f1_v: '<boolean>', f2_l: '<boolean>', f3_b: '<string>', f4_d: '<array>', f5_f: '<string>', f6_x: '<null>', f7_g: '<null>', f8_a: '<array>'}, 'cdXrhQODiBwg');
    var put_33 = objectStore_74.put({f0_c: '<boolean>', f1_v: '<object>', f2_t: '<null>', f3_j: '<object>', f4_y: '<array>', f5_b: '<null>', f6_v: '<boolean>', f7_g: '<boolean>', f8_q: '<number>'}, 'RTGii');
    var count_24 = objectStore_74.count();
    var put_34 = objectStore_74.put({f0_g: '<string>', f1_u: '<object>', f2_c: '<array>', f3_k: '<boolean>', f4_a: '<number>', f5_n: '<array>', f6_x: '<number>', f7_e: '<boolean>', f8_s: '<string>'}, 'jKoP');
    var getAllKeys_7;
    try{
        KeyRange_132 = IDBKeyRange.lowerBound('yZLvbkPfdWWC', false);
        getAllKeys_7 = objectStore_74.getAllKeys(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('odqhGCnSOiRv');
        getAllKeys_7 = objectStore_74.getAllKeys(KeyRange_133);
    }

    var add_29 = objectStore_74.add({f0_f: '<null>', f1_q: '<boolean>', f2_t: '<boolean>', f3_y: '<string>', f4_l: '<array>', f5_f: '<string>', f6_l: '<number>', f7_p: '<number>'}, 'ROphLeIoau');
    var get_28;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('dXQJVuBqogD', false);
        get_28 = objectStore_74.get(KeyRange_134);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_136 = IDBKeyRange.bound('RTGii', 'wgWhtDpmuQ', true, true);
        getAllKeys_8 = objectStore_74.getAllKeys(KeyRange_136);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('RTGii');
        getAllKeys_8 = objectStore_74.getAllKeys(KeyRange_137);
    }

    var count_25 = objectStore_74.count();
    var clear_38 = objectStore_74.clear();
    var getAll_12 = objectStore_74.getAll(327448592);
    var add_30 = objectStore_74.add({f0_x: '<object>', f1_j: '<null>', f2_s: '<null>', f3_g: '<string>', f4_t: '<boolean>', f5_g: '<string>', f6_h: '<number>', f7_c: '<number>'}, 'wGaA');
    var put_35 = objectStore_74.put({f0_q: '<array>', f1_e: '<object>', f2_t: '<array>', f3_t: '<object>'}, 'yggxWnkaFI');
    var count_26;
    try{
        KeyRange_138 = IDBKeyRange.lowerBound('ROphLeIoau', true);
        count_26 = objectStore_74.count(KeyRange_138);
    }
    catch (e){
    }

    var put_36 = objectStore_74.put({f0_k: '<string>', f1_b: '<boolean>', f2_k: '<number>', f3_j: '<string>', f4_a: '<string>', f5_w: '<boolean>', f6_i: '<number>', f7_a: '<null>', f8_n: '<object>'}, 'jKMnMNFmnCA');
    var count_27 = objectStore_74.count();
    var get_29;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('Jadzf', true);
        get_29 = objectStore_74.get(KeyRange_140);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_142 = IDBKeyRange.lowerBound('ZVRwvMxa', false);
        getAllKeys_9 = objectStore_74.getAllKeys(KeyRange_142, 1263541580);
    }
    catch (e){
        KeyRange_143 = IDBKeyRange.only('wgWhtDpmuQ');
        getAllKeys_9 = objectStore_74.getAllKeys(KeyRange_143);
    }

    var add_31 = objectStore_74.add({f0_q: '<number>', f1_h: '<object>', f2_e: '<string>', f3_y: '<null>', f4_a: '<number>', f5_m: '<string>', f6_p: '<array>'}, 'BmJXkWVVWmU');
    var clear_39 = objectStore_74.clear();
    var clear_40 = objectStore_74.clear();
    var count_28;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('tRRHfgZnZRd', false);
        count_28 = objectStore_74.count(KeyRange_144);
    }
    catch (e){
    }

    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_83.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_85.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_88 = db.transaction(['objectStore_81'], 'readonly', {durability:"relaxed"})
    var objectStore_81;
    txn_88.objectStore('objectStore_81')
    var add_32 = objectStore_81.add({f0_d: '<null>', f1_v: '<array>', f2_p: '<null>', f3_n: '<string>'}, 'XsmIiPEwI');
    var add_33 = objectStore_81.add({f0_o: '<array>', f1_b: '<boolean>', f2_d: '<number>', f3_h: '<null>', f4_d: '<null>', f5_a: '<boolean>', f6_f: '<number>', f7_z: '<object>', f8_m: '<number>'}, 'xCJOji');
    var delete_11;
    try{
        KeyRange_146 = IDBKeyRange.only('XsmIiPEwI');
        delete_11 = objectStore_81.delete(KeyRange_146);
    }
    catch (e){
    }

    var clear_41 = objectStore_81.clear();
    var put_37 = objectStore_81.put({f0_f: '<boolean>', f1_b: '<string>', f2_t: '<string>', f3_x: '<null>'}, 'wmqahRmJQnb');
    var get_30;
    try{
        KeyRange_148 = IDBKeyRange.only('ozysL');
        get_30 = objectStore_81.get(KeyRange_148);
    }
    catch (e){
    }

    var put_38 = objectStore_81.put({f0_b: '<string>', f1_e: '<number>', f2_l: '<array>', f3_y: '<boolean>'}, 'ocwiCu');
    var clear_42 = objectStore_81.clear();
    var put_39 = objectStore_81.put({f0_j: '<boolean>', f1_b: '<object>', f2_a: '<number>', f3_w: '<string>', f4_z: '<boolean>', f5_t: '<null>', f6_j: '<object>', f7_w: '<string>', f8_y: '<string>', f9_m: '<boolean>'}, 'YuSmDCGOD');
    var getAll_13 = objectStore_81.getAll();
    var clear_43 = objectStore_81.clear();
    var clear_44 = objectStore_81.clear();
    var getAllKeys_10;
    try{
        KeyRange_150 = IDBKeyRange.bound('ZbEc', 'ozysL', false, false);
        getAllKeys_10 = objectStore_81.getAllKeys(KeyRange_150);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('JnxpeHSnLWfQ');
        getAllKeys_10 = objectStore_81.getAllKeys(KeyRange_151);
    }

    var delete_12;
    try{
        KeyRange_152 = IDBKeyRange.bound('mhmgyFcix', 'XiWX', false, true);
        delete_12 = objectStore_81.delete(KeyRange_152);
    }
    catch (e){
    }

    var delete_13;
    try{
        KeyRange_154 = IDBKeyRange.lowerBound('JnxpeHSnLWfQ', true);
        delete_13 = objectStore_81.delete(KeyRange_154);
    }
    catch (e){
    }

    var getAllKeys_11 = objectStore_81.getAllKeys();
    var add_34 = objectStore_81.add({f0_r: '<null>', f1_g: '<object>', f2_h: '<number>', f3_f: '<boolean>', f4_l: '<null>', f5_j: '<object>'}, 'wCXCd');
    txn_87.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_87.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_89 = db.transaction(['objectStore_81'], 'readwrite', {durability:"relaxed"})
    var objectStore_81;
    txn_82.objectStore('objectStore_81')
    var delete_14;
    try{
        KeyRange_156 = IDBKeyRange.bound('APwX', 'XiWX', false, true);
        delete_14 = objectStore_81.delete(KeyRange_156);
    }
    catch (e){
    }

    var add_35 = objectStore_81.add({f0_q: '<object>', f1_y: '<boolean>', f2_p: '<boolean>', f3_s: '<number>', f4_t: '<boolean>', f5_f: '<null>', f6_n: '<array>', f7_h: '<array>', f8_e: '<null>', f9_y: '<null>'}, 'QpYnrNcXaub');
    var put_40 = objectStore_81.put({f0_x: '<number>', f1_q: '<boolean>', f2_z: '<array>', f3_p: '<object>', f4_i: '<string>', f5_u: '<null>'}, 'VcvFxQS');
    var clear_45 = objectStore_81.clear();
    var count_29;
    try{
        KeyRange_158 = IDBKeyRange.bound('wCXCd', 'JnxpeHSnLWfQ', true, true);
        count_29 = objectStore_81.count(KeyRange_158);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_160 = IDBKeyRange.bound('XsmIiPEwI', 'mhmgyFcix', true, false);
        get_31 = objectStore_81.get(KeyRange_160);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_162 = IDBKeyRange.bound('APwX', 'xCJOji', false, true);
        get_32 = objectStore_81.get(KeyRange_162);
    }
    catch (e){
    }

    var put_41 = objectStore_81.put({f0_v: '<null>', f1_x: '<array>', f2_g: '<number>', f3_o: '<string>', f4_u: '<array>', f5_r: '<object>', f6_n: '<number>', f7_a: '<string>', f8_g: '<string>', f9_u: '<object>'}, 'CkUc');
    var count_30;
    try{
        KeyRange_164 = IDBKeyRange.bound('XiWX', 'jSJsh', true, false);
        count_30 = objectStore_81.count(KeyRange_164);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_166 = IDBKeyRange.only('XsmIiPEwI');
        get_33 = objectStore_81.get(KeyRange_166);
    }
    catch (e){
    }

    var put_42 = objectStore_81.put({f0_p: '<string>', f1_u: '<array>', f2_w: '<null>'}, 'KNcOatD');
    var count_31 = objectStore_81.count();
    var count_32 = objectStore_81.count();
    var get_34;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('jSJsh', false);
        get_34 = objectStore_81.get(KeyRange_168);
    }
    catch (e){
    }

    var add_36 = objectStore_81.add({f0_a: '<object>', f1_b: '<null>', f2_d: '<array>', f3_q: '<null>', f4_x: '<null>', f5_j: '<string>', f6_v: '<number>'}, 'DWNBI');
    var put_43 = objectStore_81.put({f0_q: '<number>', f1_z: '<boolean>', f2_j: '<number>', f3_n: '<boolean>', f4_s: '<null>', f5_q: '<number>', f6_i: '<number>', f7_o: '<null>'}, 'glYAUKu');
    var put_44 = objectStore_81.put({f0_n: '<boolean>', f1_k: '<boolean>', f2_s: '<array>', f3_m: '<boolean>', f4_z: '<null>', f5_t: '<array>', f6_c: '<number>', f7_n: '<string>', f8_y: '<boolean>', f9_n: '<number>'}, 'FNkEh');
    txn_84.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_88.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_89.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6769')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};