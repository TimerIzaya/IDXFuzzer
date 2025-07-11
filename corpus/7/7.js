let db;
const openRequest = window.indexedDB.open('str_5632', 5444632209606975)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_80', {keypath: 'HYrj.tTQDhjotT.TSMtifGgE.fRTKTrg.XQviVCiELF.WKrmcTgxd'});
    var add_0 = objectStore_0.add({f0_h: '<string>', f1_h: '<number>', f2_c: '<boolean>', f3_k: '<string>', f4_u: '<string>', f5_s: '<boolean>', f6_e: '<null>', f7_o: '<boolean>', f8_k: '<array>'}, 'huknZVH');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('huknZVH');
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var index_57 = objectStore_0.createIndex('index_57', 'test', {unique: true});
    var index_58 = objectStore_0.createIndex('index_58', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_81', {autoIncrement: true});
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('huknZVH', 'huknZVH', true, true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_81')
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_82', {keypath: 'CBYENCvY'});
    var objectStore_3 = db.createObjectStore('objectStore_83', {keypath: 'OhxVzdQD', autoIncrement: true});
    var index_59 = objectStore_2.createIndex('index_59', 'test');
    var getAll_0 = objectStore_0.getAll();
    var index_60 = objectStore_3.createIndex('index_60', 'test', {unique: false});
    objectStore_3.deleteIndex('index_60')
    var objectStore_4 = db.createObjectStore('objectStore_84', {keypath: 'WkeaD.kzoMqG.byplaFd'});
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.only('huknZVH');
        delete_0 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var put_0 = objectStore_3.put({f0_p: '<number>', f1_k: '<null>', f2_z: '<number>'}, 'pScniuLzc');
    var objectStore_5 = db.createObjectStore('objectStore_85');
    var objectStore_6 = db.createObjectStore('objectStore_86');
    var count_2 = objectStore_0.count();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('pScniuLzc');
        get_1 = objectStore_3.get(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_7 = db.createObjectStore('objectStore_87', {autoIncrement: false});
    var index_61 = objectStore_4.createIndex('index_61', 'test', {unique: true});
    var count_3;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('huknZVH', true);
        count_3 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var clear_2 = objectStore_6.clear();
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('pScniuLzc', 'pScniuLzc', true, false);
        get_2 = objectStore_3.get(KeyRange_10);
    }
    catch (e){
    }

    var objectStore_8 = db.createObjectStore('objectStore_88', {keypath: 'XWsiuvEjFgR'});
    var count_4 = objectStore_0.count();
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('huknZVH', false);
        delete_1 = objectStore_0.delete(KeyRange_12);
    }
    catch (e){
    }

    var index_62 = objectStore_4.createIndex('index_62', 'test', {unique: true});
    var index_63 = objectStore_0.createIndex('index_63', 'test', {unique: true});
    var objectStore_9 = db.createObjectStore('objectStore_89', {autoIncrement: false});
    var add_1 = objectStore_6.add({f0_i: '<number>', f1_v: '<string>', f2_j: '<boolean>', f3_l: '<array>'}, 'Ywazc');
    var clear_3 = objectStore_2.clear();
    var put_1 = objectStore_6.put({f0_p: '<null>', f1_n: '<object>', f2_k: '<string>', f3_i: '<boolean>', f4_n: '<string>', f5_f: '<boolean>', f6_t: '<boolean>', f7_n: '<number>', f8_h: '<number>'}, 'XMbzEfIT');
    var put_2 = objectStore_8.put({f0_w: '<null>', f1_q: '<number>', f2_d: '<null>', f3_t: '<null>'}, 'gfynZHIQbafv');
    var delete_2;
    try{
        KeyRange_14 = IDBKeyRange.only('pScniuLzc');
        delete_2 = objectStore_3.delete(KeyRange_14);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('Ywazc', 'XMbzEfIT', false, true);
        delete_3 = objectStore_6.delete(KeyRange_16);
    }
    catch (e){
    }

    var clear_4 = objectStore_0.clear();
    var clear_5 = objectStore_6.clear();
    var index_64 = objectStore_2.createIndex('index_64', 'test', {unique: true});
    var index_65 = objectStore_8.createIndex('index_65', 'test');
    var put_3 = objectStore_9.put({f0_t: '<boolean>', f1_d: '<array>', f2_r: '<array>', f3_v: '<boolean>', f4_a: '<boolean>', f5_c: '<null>', f6_b: '<object>'}, 'swyUoRU');
    var index_66 = objectStore_8.createIndex('index_66', 'test', {unique: true});
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('pScniuLzc', true);
        count_5 = objectStore_3.count(KeyRange_18);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('gfynZHIQbafv', 'gfynZHIQbafv', true, true);
        count_6 = objectStore_8.count(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_90', {keypath: 'oPTaE'});
    var clear_6 = objectStore_3.clear();
    var objectStore_11 = db.createObjectStore('objectStore_91', {keypath: 'byjR'});
    var count_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('swyUoRU', 'swyUoRU', false, true);
        count_7 = objectStore_9.count(KeyRange_22);
    }
    catch (e){
    }

    var index_67 = objectStore_8.createIndex('index_67', 'test');
    var count_8 = objectStore_8.count();
    var objectStore_12 = db.createObjectStore('objectStore_92', {autoIncrement: true});
    var add_2 = objectStore_5.add({f0_w: '<object>', f1_v: '<null>', f2_r: '<number>', f3_c: '<array>', f4_g: '<number>', f5_t: '<null>', f6_p: '<string>'}, 'isYvo');
    var add_3 = objectStore_5.add({f0_o: '<number>', f1_o: '<object>', f2_b: '<null>', f3_l: '<array>', f4_e: '<null>'}, 'zVMunnozM');
    var clear_7 = objectStore_11.clear();
    var clear_8 = objectStore_6.clear();
    var count_9 = objectStore_0.count();
    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('swyUoRU', 'swyUoRU', false, true);
        get_3 = objectStore_9.get(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_13 = db.createObjectStore('objectStore_93', {autoIncrement: true});
    var index_68 = objectStore_12.createIndex('index_68', 'test');
    var count_10;
    try{
        KeyRange_26 = IDBKeyRange.bound('zVMunnozM', 'zVMunnozM', true, true);
        count_10 = objectStore_5.count(KeyRange_26);
    }
    catch (e){
    }

    var getAll_1 = objectStore_3.getAll(3873705884);
    var count_11;
    try{
        KeyRange_28 = IDBKeyRange.bound('huknZVH', 'huknZVH', true, true);
        count_11 = objectStore_0.count(KeyRange_28);
    }
    catch (e){
    }

    var put_4 = objectStore_9.put({f0_w: '<number>'}, 'vuCKj');
    var clear_9 = objectStore_12.clear();
    var put_5 = objectStore_7.put({f0_m: '<string>'}, 'JlEaQldDtS');
    var put_6 = objectStore_10.put({f0_d: '<boolean>', f1_b: '<null>', f2_k: '<boolean>', f3_r: '<null>', f4_f: '<number>', f5_c: '<array>', f6_d: '<boolean>'}, 'bghzI');
    var add_4 = objectStore_5.add({f0_y: '<object>', f1_g: '<object>', f2_y: '<object>', f3_a: '<array>', f4_m: '<array>', f5_r: '<array>'}, 'LQGgMzFTy');
    db.deleteObjectStore('objectStore_89')
    var objectStore_14 = db.createObjectStore('objectStore_94', {autoIncrement: true});
    var count_12 = objectStore_7.count();
    var add_5 = objectStore_0.add({f0_j: '<array>', f1_g: '<array>', f2_j: '<array>', f3_p: '<array>', f4_m: '<null>', f5_f: '<object>', f6_s: '<number>', f7_a: '<array>', f8_k: '<string>', f9_f: '<object>'}, 'KKbRtlWe');
    var get_4;
    try{
        KeyRange_30 = IDBKeyRange.only('JlEaQldDtS');
        get_4 = objectStore_7.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_10 = objectStore_12.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7 = db.transaction(['objectStore_82'], 'readwrite', {durability:"default"})
    var objectStore_82;
    txn_7.objectStore('objectStore_82')
    var clear_11 = objectStore_82.clear();
    var put_7 = objectStore_82.put({f0_w: '<number>', f1_f: '<number>', f2_t: '<boolean>', f3_r: '<array>', f4_a: '<null>', f5_a: '<boolean>'}, 'UtHUDJlQ');
    var count_13;
    try{
        KeyRange_32 = IDBKeyRange.only('UtHUDJlQ');
        count_13 = objectStore_82.count(KeyRange_32);
    }
    catch (e){
    }

    var getAll_2 = objectStore_82.getAll();
    var count_14 = objectStore_82.count();
    var get_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('UtHUDJlQ', 'UtHUDJlQ', false, true);
        get_5 = objectStore_82.get(KeyRange_34);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_36 = IDBKeyRange.only('UtHUDJlQ');
        getAll_3 = objectStore_82.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('UtHUDJlQ');
        getAll_3 = objectStore_82.getAll(KeyRange_37);
    }

    var count_15 = objectStore_82.count();
    var add_6 = objectStore_82.add({f0_s: '<boolean>', f1_l: '<string>', f2_y: '<array>', f3_t: '<string>', f4_n: '<object>'}, 'FjCHFYjboB');
    var clear_12 = objectStore_82.clear();
    var count_16 = objectStore_82.count();
    var clear_13 = objectStore_82.clear();
    var add_7 = objectStore_82.add({f0_a: '<null>', f1_k: '<number>', f2_j: '<string>', f3_i: '<boolean>', f4_n: '<array>', f5_s: '<null>', f6_t: '<null>'}, 'rRXezVt');
    var add_8 = objectStore_82.add({f0_l: '<string>', f1_s: '<array>', f2_m: '<boolean>', f3_i: '<null>', f4_q: '<object>', f5_b: '<boolean>', f6_a: '<array>'}, 'CMKHkLvItrOJ');
    var getAll_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('CMKHkLvItrOJ', 'rRXezVt', false, false);
        getAll_4 = objectStore_82.getAll(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('CMKHkLvItrOJ');
        getAll_4 = objectStore_82.getAll(KeyRange_39);
    }

    var get_6;
    try{
        KeyRange_40 = IDBKeyRange.bound('CMKHkLvItrOJ', 'FjCHFYjboB', true, false);
        get_6 = objectStore_82.get(KeyRange_40);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('UtHUDJlQ', false);
        get_7 = objectStore_82.get(KeyRange_42);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('FjCHFYjboB', false);
        get_8 = objectStore_82.get(KeyRange_44);
    }
    catch (e){
    }

    var clear_14 = objectStore_82.clear();
    var put_8 = objectStore_82.put({f0_a: '<boolean>', f1_o: '<string>', f2_k: '<null>', f3_q: '<boolean>'}, 'EHLS');
    var index_0 = objectStore_82.index('index_64');
    var getAll_5 = objectStore_82.getAll();
    var add_9 = objectStore_82.add({f0_m: '<number>', f1_h: '<boolean>', f2_o: '<null>', f3_r: '<string>', f4_g: '<number>', f5_g: '<null>', f6_c: '<number>', f7_n: '<number>'}, 'WHP');
    var add_10 = objectStore_82.add({f0_h: '<number>', f1_z: '<null>', f2_v: '<array>', f3_r: '<boolean>', f4_o: '<boolean>'}, 'vtv');
    var clear_15 = objectStore_82.clear();
    var put_9 = objectStore_82.put({f0_k: '<null>', f1_c: '<array>', f2_i: '<array>', f3_t: '<null>', f4_n: '<string>', f5_g: '<boolean>', f6_r: '<number>'}, 'NgLTuGgMZApr');
    var put_10 = objectStore_82.put({f0_u: '<array>', f1_v: '<null>', f2_g: '<boolean>', f3_b: '<object>'}, 'tToWRn');
    var add_11 = objectStore_82.add({f0_x: '<string>', f1_r: '<null>'}, 'UccFdLXNEP');
    var put_11 = objectStore_82.put({f0_j: '<number>', f1_i: '<number>', f2_x: '<array>', f3_z: '<number>'}, 'krBwipjUU');
    var get_9;
    try{
        KeyRange_46 = IDBKeyRange.bound('FjCHFYjboB', 'vtv', true, true);
        get_9 = objectStore_82.get(KeyRange_46);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_48 = IDBKeyRange.only('EHLS');
        count_17 = objectStore_82.count(KeyRange_48);
    }
    catch (e){
    }

    var count_18 = objectStore_82.count();
    var delete_4;
    try{
        KeyRange_50 = IDBKeyRange.only('WHP');
        delete_4 = objectStore_82.delete(KeyRange_50);
    }
    catch (e){
    }

    var add_12 = objectStore_82.add({f0_j: '<array>', f1_y: '<string>'}, 'ifpxsfyiE');
    var clear_16 = objectStore_82.clear();
    var count_19 = objectStore_82.count();
    var count_20 = objectStore_82.count();
    var add_13 = objectStore_82.add({f0_d: '<number>'}, 'ZSRLDpjz');
    var count_21 = objectStore_82.count();
    var add_14 = objectStore_82.add({f0_n: '<boolean>', f1_p: '<string>', f2_p: '<null>', f3_e: '<null>', f4_u: '<object>'}, 'kTNzpQJF');
    var add_15 = objectStore_82.add({f0_o: '<array>'}, 'HLqZqAgjQzj');
    var add_16 = objectStore_82.add({f0_i: '<boolean>', f1_s: '<array>', f2_c: '<number>', f3_k: '<null>', f4_t: '<object>', f5_x: '<array>', f6_d: '<string>', f7_p: '<null>', f8_a: '<boolean>', f9_q: '<null>'}, 'RTlrjPuYCAq');
    var getAll_6;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('krBwipjUU', true);
        getAll_6 = objectStore_82.getAll(KeyRange_52, 4008248116);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('krBwipjUU');
        getAll_6 = objectStore_82.getAll(KeyRange_53);
    }

    var add_17 = objectStore_82.add({f0_h: '<boolean>', f1_t: '<object>'}, 'VUoluRoLJ');
    var clear_17 = objectStore_82.clear();
    var get_10;
    try{
        KeyRange_54 = IDBKeyRange.bound('UtHUDJlQ', 'ZSRLDpjz', false, true);
        get_10 = objectStore_82.get(KeyRange_54);
    }
    catch (e){
    }

    var count_22 = objectStore_82.count();
    var count_23;
    try{
        KeyRange_56 = IDBKeyRange.only('krBwipjUU');
        count_23 = objectStore_82.count(KeyRange_56);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('VUoluRoLJ', 'RTlrjPuYCAq', true, false);
        getAll_7 = objectStore_82.getAll(KeyRange_58, 609099747);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('WHP');
        getAll_7 = objectStore_82.getAll(KeyRange_59);
    }

    var put_12 = objectStore_82.put({f0_d: '<array>', f1_y: '<string>', f2_z: '<string>', f3_z: '<object>', f4_m: '<array>', f5_g: '<null>', f6_x: '<object>', f7_x: '<object>', f8_o: '<array>'}, 'iJqHq');
    var add_18 = objectStore_82.add({f0_e: '<array>', f1_t: '<number>', f2_c: '<object>', f3_t: '<number>', f4_u: '<array>', f5_p: '<boolean>'}, 'AdfHiyW');
    var get_11;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('AdfHiyW', true);
        get_11 = objectStore_82.get(KeyRange_60);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('VUoluRoLJ', false);
        get_12 = objectStore_82.get(KeyRange_62);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_64 = IDBKeyRange.bound('krBwipjUU', 'HLqZqAgjQzj', true, true);
        getAll_8 = objectStore_82.getAll(KeyRange_64);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('krBwipjUU');
        getAll_8 = objectStore_82.getAll(KeyRange_65);
    }

    var get_13;
    try{
        KeyRange_66 = IDBKeyRange.bound('VUoluRoLJ', 'tToWRn', false, false);
        get_13 = objectStore_82.get(KeyRange_66);
    }
    catch (e){
    }

    var add_19 = objectStore_82.add({f0_u: '<string>', f1_f: '<object>', f2_y: '<boolean>', f3_m: '<string>', f4_e: '<boolean>', f5_g: '<string>', f6_k: '<number>', f7_o: '<boolean>', f8_i: '<object>', f9_m: '<number>'}, 'UWYlz');
    var put_13 = objectStore_82.put({f0_p: '<string>', f1_b: '<string>', f2_x: '<string>', f3_p: '<number>', f4_w: '<object>', f5_u: '<null>', f6_q: '<array>', f7_q: '<boolean>', f8_e: '<array>'}, 'cnHK');
    var put_14 = objectStore_82.put({f0_j: '<string>', f1_n: '<number>', f2_z: '<object>', f3_k: '<boolean>', f4_e: '<number>', f5_z: '<object>', f6_g: '<object>'}, 'CXIF');
    var put_15 = objectStore_82.put({f0_n: '<object>', f1_o: '<number>', f2_w: '<string>'}, 'DDsjgbvKJeZ');
    var put_16 = objectStore_82.put({f0_s: '<string>', f1_b: '<array>', f2_e: '<string>', f3_l: '<array>', f4_x: '<string>', f5_u: '<object>'}, 'ARGlZxApKAuP');
    var put_17 = objectStore_82.put({f0_b: '<array>', f1_n: '<null>', f2_h: '<null>', f3_o: '<array>'}, 'wuyGOTt');
    var clear_18 = objectStore_82.clear();
    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.bound('ZSRLDpjz', 'ZSRLDpjz', true, false);
        get_14 = objectStore_82.get(KeyRange_68);
    }
    catch (e){
    }

    var clear_19 = objectStore_82.clear();
    var clear_20 = objectStore_82.clear();
    var count_24;
    try{
        KeyRange_70 = IDBKeyRange.bound('HLqZqAgjQzj', 'tToWRn', false, true);
        count_24 = objectStore_82.count(KeyRange_70);
    }
    catch (e){
    }

    var put_18 = objectStore_82.put({f0_d: '<string>', f1_m: '<array>', f2_o: '<null>', f3_c: '<object>', f4_r: '<object>', f5_z: '<string>', f6_o: '<array>', f7_f: '<string>', f8_d: '<string>', f9_k: '<array>'}, 'IviRO');
    var delete_5;
    try{
        KeyRange_72 = IDBKeyRange.bound('CMKHkLvItrOJ', 'vtv', false, true);
        delete_5 = objectStore_82.delete(KeyRange_72);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_74 = IDBKeyRange.only('cnHK');
        getAllKeys_0 = objectStore_82.getAllKeys(KeyRange_74, 405342798);
    }
    catch (e){
        KeyRange_75 = IDBKeyRange.only('VUoluRoLJ');
        getAllKeys_0 = objectStore_82.getAllKeys(KeyRange_75);
    }

    var delete_6;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('HLqZqAgjQzj', true);
        delete_6 = objectStore_82.delete(KeyRange_76);
    }
    catch (e){
    }

    var put_19 = objectStore_82.put({f0_e: '<null>', f1_t: '<number>', f2_u: '<number>', f3_p: '<null>'}, 'BvHPx');
    var count_25 = objectStore_82.count();
    var getAllKeys_1 = objectStore_82.getAllKeys();
    var getAll_9 = objectStore_82.getAll(242217298);
    var get_15;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('UWYlz', false);
        get_15 = objectStore_82.get(KeyRange_78);
    }
    catch (e){
    }

    var getAll_10 = objectStore_82.getAll();
    var add_20 = objectStore_82.add({f0_m: '<object>', f1_a: '<null>', f2_j: '<string>', f3_t: '<string>', f4_o: '<string>', f5_u: '<boolean>', f6_d: '<string>', f7_h: '<boolean>'}, 'nuD');
    var put_20 = objectStore_82.put({f0_o: '<array>', f1_y: '<array>', f2_g: '<boolean>', f3_y: '<string>', f4_e: '<number>', f5_v: '<null>'}, 'FnHqiwxKJ');
    var put_21 = objectStore_82.put({f0_z: '<string>'}, 'MsJoxmitsihW');
    var clear_21 = objectStore_82.clear();
    var add_21 = objectStore_82.add({f0_a: '<string>', f1_y: '<boolean>'}, 'oTTDzaNGMqH');
    var clear_22 = objectStore_82.clear();
    var put_22 = objectStore_82.put({f0_z: '<string>', f1_n: '<array>', f2_c: '<null>', f3_r: '<boolean>', f4_l: '<string>', f5_n: '<boolean>', f6_i: '<array>', f7_y: '<boolean>', f8_o: '<null>'}, 'BoLUbZnRUXl');
    var add_22 = objectStore_82.add({f0_h: '<null>', f1_b: '<array>', f2_n: '<number>', f3_c: '<array>', f4_z: '<array>', f5_f: '<array>', f6_l: '<null>', f7_c: '<null>', f8_k: '<boolean>'}, 'lzgxoWfamwwT');
    var clear_23 = objectStore_82.clear();
    var put_23 = objectStore_82.put({f0_n: '<object>', f1_n: '<number>', f2_h: '<number>', f3_j: '<string>', f4_r: '<null>', f5_l: '<array>', f6_t: '<object>', f7_b: '<object>'}, 'cANhz');
    var count_26 = objectStore_82.count();
    var add_23 = objectStore_82.add({f0_r: '<array>', f1_j: '<string>', f2_x: '<number>', f3_s: '<array>'}, 'QpeWIpEsVD');
    var put_24 = objectStore_82.put({f0_p: '<array>', f1_w: '<number>', f2_c: '<number>', f3_p: '<string>', f4_g: '<object>', f5_m: '<string>', f6_a: '<number>', f7_q: '<string>'}, 'eVOYChqqjKve');
    var get_16;
    try{
        KeyRange_80 = IDBKeyRange.bound('lzgxoWfamwwT', 'HLqZqAgjQzj', true, true);
        get_16 = objectStore_82.get(KeyRange_80);
    }
    catch (e){
    }

    txn_7.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8411')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};