let db;
const openRequest = window.indexedDB.open('str_5681', 8118499747516172)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_11', {keypath: 'fbNpNO', autoIncrement: false});
    var add_0 = objectStore_0.add({f0_l: '<null>', f1_f: '<number>', f2_r: '<array>', f3_y: '<boolean>'}, 'ocXtjK');
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var put_0 = objectStore_0.put({f0_t: '<null>'}, 'PELCFMaq');
    var count_0 = objectStore_0.count();
    var add_1 = objectStore_0.add({f0_e: '<array>', f1_r: '<string>'}, 'RQhFdFdvRDg');
    var count_1 = objectStore_0.count();
    var count_2;
    try{
        KeyRange_0 = IDBKeyRange.bound('RQhFdFdvRDg', 'RQhFdFdvRDg', false, true);
        count_2 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_d: '<object>', f1_q: '<object>', f2_y: '<array>', f3_y: '<string>', f4_r: '<string>', f5_r: '<null>', f6_r: '<object>'}, 'TRFYRlAd');
    var put_1 = objectStore_0.put({f0_w: '<string>', f1_y: '<array>', f2_y: '<number>', f3_u: '<number>'}, 'WOdtdyd');
    var add_3 = objectStore_0.add({f0_b: '<number>', f1_i: '<number>', f2_w: '<null>', f3_u: '<string>', f4_e: '<object>'}, 'mvrnPdWEMs');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('mvrnPdWEMs', false);
        getAll_0 = objectStore_0.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('WOdtdyd');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var add_4 = objectStore_0.add({f0_h: '<number>', f1_e: '<number>', f2_n: '<string>', f3_p: '<number>', f4_d: '<array>', f5_l: '<array>', f6_m: '<null>', f7_p: '<string>', f8_k: '<boolean>'}, 'QMIfWqji');
    var clear_0 = objectStore_0.clear();
    var getAll_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('RQhFdFdvRDg', 'TRFYRlAd', false, true);
        getAll_1 = objectStore_0.getAll(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('QMIfWqji');
        getAll_1 = objectStore_0.getAll(KeyRange_5);
    }

    var add_5 = objectStore_0.add({f0_u: '<string>', f1_i: '<array>', f2_q: '<number>', f3_s: '<boolean>'}, 'vlitlyW');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('vlitlyW', 'WOdtdyd', false, false);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var get_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('RQhFdFdvRDg', 'QMIfWqji', true, true);
        get_0 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('PELCFMaq', 'TRFYRlAd', false, false);
        get_1 = objectStore_0.get(KeyRange_10);
    }
    catch (e){
    }

    var put_2 = objectStore_0.put({f0_y: '<string>', f1_x: '<array>', f2_r: '<boolean>', f3_c: '<null>', f4_n: '<number>', f5_b: '<number>', f6_e: '<null>'}, 'sJCQnylMEJF');
    var add_6 = objectStore_0.add({f0_f: '<object>', f1_b: '<object>', f2_z: '<number>', f3_r: '<object>', f4_m: '<array>', f5_k: '<array>', f6_e: '<object>'}, 'LlPW');
    var clear_2 = objectStore_0.clear();
    var getAll_2 = objectStore_0.getAll();
    var add_7 = objectStore_0.add({f0_t: '<array>', f1_b: '<boolean>', f2_u: '<null>', f3_f: '<array>'}, 'LmgfqbDyxksD');
    var index_5 = objectStore_0.createIndex('index_5', 'test');
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('WOdtdyd', false);
        get_2 = objectStore_0.get(KeyRange_12);
    }
    catch (e){
    }

    var add_8 = objectStore_0.add({f0_t: '<number>', f1_o: '<object>', f2_d: '<array>'}, 'otSqPi');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('LmgfqbDyxksD', 'LmgfqbDyxksD', true, true);
        get_3 = objectStore_0.get(KeyRange_14);
    }
    catch (e){
    }

    var put_3 = objectStore_0.put({f0_x: '<object>', f1_f: '<number>', f2_g: '<boolean>', f3_b: '<array>', f4_p: '<string>', f5_n: '<array>', f6_i: '<string>', f7_h: '<number>', f8_d: '<string>'}, 'uTeVRWLeBNBz');
    var put_4 = objectStore_0.put({f0_q: '<boolean>', f1_i: '<array>', f2_f: '<number>', f3_e: '<null>', f4_c: '<object>', f5_m: '<array>', f6_n: '<object>', f7_k: '<boolean>'}, 'MJrrqSLQVdQs');
    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.only('MJrrqSLQVdQs');
        count_3 = objectStore_0.count(KeyRange_16);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_5');
    var count_4 = objectStore_0.count();
    var clear_3 = objectStore_0.clear();
    var index_1 = objectStore_0.index('index_5');
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('RQhFdFdvRDg', 'otSqPi', false, false);
        count_5 = objectStore_0.count(KeyRange_18);
    }
    catch (e){
    }

    var add_9 = objectStore_0.add({f0_m: '<array>', f1_c: '<null>', f2_y: '<null>', f3_y: '<null>', f4_q: '<string>'}, 'xbYamtFM');
    var count_6 = objectStore_0.count();
    var clear_4 = objectStore_0.clear();
    var clear_5 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_12', {keypath: 'peEfjH'});
    var put_5 = objectStore_1.put({f0_d: '<array>', f1_l: '<number>', f2_p: '<string>', f3_y: '<null>', f4_q: '<null>', f5_j: '<null>', f6_l: '<null>', f7_i: '<boolean>'}, 'heNkdLOFb');
    var count_7 = objectStore_1.count();
    var objectStore_2 = db.createObjectStore('objectStore_13', {keypath: 'sUxwEPtp'});
    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('LlPW', true);
        count_8 = objectStore_0.count(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_14');
    var objectStore_4 = db.createObjectStore('objectStore_15', {keypath: 'bHWdYNThcQ', autoIncrement: false});
    var index_6 = objectStore_3.createIndex('index_6', 'test', {unique: false});
    var delete_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('xbYamtFM', 'otSqPi', true, true);
        delete_1 = objectStore_0.delete(KeyRange_22);
    }
    catch (e){
    }

    var put_6 = objectStore_3.put({f0_r: '<boolean>', f1_u: '<boolean>'}, 'ellSxW');
    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('heNkdLOFb', 'heNkdLOFb', true, false);
        count_9 = objectStore_1.count(KeyRange_24);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('ellSxW', false);
        count_10 = objectStore_3.count(KeyRange_26);
    }
    catch (e){
    }

    var clear_6 = objectStore_0.clear();
    var count_11 = objectStore_0.count();
    var put_7 = objectStore_2.put({f0_j: '<null>', f1_z: '<object>'}, 'HbofAzSG');
    var count_12 = objectStore_2.count();
    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('heNkdLOFb', false);
        get_4 = objectStore_1.get(KeyRange_28);
    }
    catch (e){
    }

    var clear_7 = objectStore_4.clear();
    var clear_8 = objectStore_0.clear();
    var objectStore_5 = db.createObjectStore('objectStore_16');
    var count_13 = objectStore_3.count();
    var objectStore_6 = db.createObjectStore('objectStore_17', {keypath: 'gJiAWvhAB', autoIncrement: false});
    var put_8 = objectStore_0.put({f0_o: '<null>', f1_q: '<number>', f2_b: '<object>', f3_m: '<null>', f4_g: '<object>'}, 'eWYg');
    var index_7 = objectStore_2.createIndex('index_7', 'test', {multiEntry: false});
    objectStore_3.deleteIndex('index_6')
    var objectStore_7 = db.createObjectStore('objectStore_18');
    var add_10 = objectStore_1.add({f0_v: '<array>', f1_i: '<null>', f2_a: '<string>', f3_w: '<number>', f4_r: '<array>', f5_u: '<array>'}, 'snp');
    var index_8 = objectStore_2.createIndex('index_8', 'test');
    var put_9 = objectStore_3.put({f0_c: '<number>', f1_i: '<object>'}, 'zkmpryB');
    var clear_9 = objectStore_2.clear();
    var index_9 = objectStore_1.createIndex('index_9', 'test', {multiEntry: false});
    var put_10 = objectStore_7.put({f0_s: '<number>', f1_a: '<string>', f2_c: '<array>'}, 'KuNIkWG');
    var put_11 = objectStore_4.put({f0_s: '<number>', f1_i: '<array>'}, 'AXIEVL');
    var getAll_3 = objectStore_4.getAll();
    var index_10 = objectStore_5.createIndex('index_10', 'test', {unique: false, multiEntry: true});
    var add_11 = objectStore_1.add({f0_u: '<array>', f1_e: '<boolean>'}, 'uDjmdMqhNu');
    var count_14 = objectStore_4.count();
    var clear_10 = objectStore_4.clear();
    var count_15;
    try{
        KeyRange_30 = IDBKeyRange.only('uDjmdMqhNu');
        count_15 = objectStore_1.count(KeyRange_30);
    }
    catch (e){
    }

    var clear_11 = objectStore_6.clear();
    var getAllKeys_1;
    try{
        KeyRange_32 = IDBKeyRange.only('ellSxW');
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_32, 1985141257);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('zkmpryB');
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_33);
    }

    var objectStore_8 = db.createObjectStore('objectStore_19');
    var clear_12 = objectStore_6.clear();
    var add_12 = objectStore_0.add({f0_l: '<boolean>', f1_m: '<number>', f2_l: '<string>', f3_v: '<object>', f4_v: '<boolean>'}, 'LExETVUD');
    var delete_2;
    try{
        KeyRange_34 = IDBKeyRange.bound('ellSxW', 'zkmpryB', false, true);
        delete_2 = objectStore_3.delete(KeyRange_34);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1 = db.transaction(['objectStore_16', 'objectStore_17', 'objectStore_14', 'objectStore_15'], 'readwrite', {durability:"strict"})
    var objectStore_15;
    txn_1.objectStore('objectStore_15')
    var add_13 = objectStore_15.add({f0_q: '<object>'}, 'jylTAmdJjQhh');
    var count_16;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('jylTAmdJjQhh', false);
        count_16 = objectStore_15.count(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_15.getAllKeys();
    var get_5;
    try{
        KeyRange_38 = IDBKeyRange.only('AXIEVL');
        get_5 = objectStore_15.get(KeyRange_38);
    }
    catch (e){
    }

    var clear_13 = objectStore_15.clear();
    var getAllKeys_3 = objectStore_15.getAllKeys();
    var get_6;
    try{
        KeyRange_40 = IDBKeyRange.only('AXIEVL');
        get_6 = objectStore_15.get(KeyRange_40);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_42 = IDBKeyRange.bound('AXIEVL', 'AXIEVL', true, true);
        delete_3 = objectStore_15.delete(KeyRange_42);
    }
    catch (e){
    }

    var count_17 = objectStore_15.count();
    var put_12 = objectStore_15.put({f0_h: '<number>', f1_f: '<number>', f2_t: '<boolean>', f3_m: '<number>', f4_e: '<number>', f5_g: '<number>', f6_f: '<string>'}, 'JJJB');
    var count_18 = objectStore_15.count();
    var add_14 = objectStore_15.add({f0_t: '<number>', f1_i: '<array>', f2_c: '<boolean>', f3_g: '<number>', f4_q: '<object>', f5_z: '<boolean>', f6_d: '<number>', f7_w: '<object>', f8_a: '<array>', f9_p: '<null>'}, 'ioqBVajXPzT');
    var delete_4;
    try{
        KeyRange_44 = IDBKeyRange.bound('jylTAmdJjQhh', 'jylTAmdJjQhh', false, true);
        delete_4 = objectStore_15.delete(KeyRange_44);
    }
    catch (e){
    }

    var clear_14 = objectStore_15.clear();
    var add_15 = objectStore_15.add({f0_o: '<array>', f1_p: '<null>', f2_i: '<object>', f3_d: '<boolean>', f4_u: '<number>', f5_m: '<null>'}, 'qBDvHREZRO');
    var delete_5;
    try{
        KeyRange_46 = IDBKeyRange.bound('AXIEVL', 'jylTAmdJjQhh', true, true);
        delete_5 = objectStore_15.delete(KeyRange_46);
    }
    catch (e){
    }

    var put_13 = objectStore_15.put({f0_i: '<number>', f1_e: '<array>', f2_o: '<boolean>', f3_b: '<object>', f4_a: '<array>'}, 'btvvlzuAyFv');
    var getAllKeys_4 = objectStore_15.getAllKeys();
    var getAllKeys_5;
    try{
        KeyRange_48 = IDBKeyRange.only('JJJB');
        getAllKeys_5 = objectStore_15.getAllKeys(KeyRange_48, 3521895320);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('btvvlzuAyFv');
        getAllKeys_5 = objectStore_15.getAllKeys(KeyRange_49);
    }

    var get_7;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('jylTAmdJjQhh', false);
        get_7 = objectStore_15.get(KeyRange_50);
    }
    catch (e){
    }

    var put_14 = objectStore_15.put({f0_z: '<string>', f1_f: '<object>', f2_o: '<string>', f3_b: '<array>', f4_u: '<number>', f5_y: '<string>', f6_s: '<array>', f7_c: '<object>', f8_l: '<string>', f9_j: '<array>'}, 'SKs');
    var delete_6;
    try{
        KeyRange_52 = IDBKeyRange.only('jylTAmdJjQhh');
        delete_6 = objectStore_15.delete(KeyRange_52);
    }
    catch (e){
    }

    var clear_15 = objectStore_15.clear();
    var add_16 = objectStore_15.add({f0_z: '<number>'}, 'Oaazqqcc');
    var get_8;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('SKs', false);
        get_8 = objectStore_15.get(KeyRange_54);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('Oaazqqcc', false);
        delete_7 = objectStore_15.delete(KeyRange_56);
    }
    catch (e){
    }

    var put_15 = objectStore_15.put({f0_v: '<null>', f1_a: '<array>', f2_n: '<boolean>', f3_x: '<array>', f4_f: '<boolean>', f5_f: '<string>', f6_t: '<number>', f7_b: '<boolean>'}, 'YmKGdDXzbKy');
    var add_17 = objectStore_15.add({f0_b: '<array>', f1_q: '<null>', f2_x: '<boolean>', f3_a: '<object>', f4_i: '<null>', f5_p: '<array>', f6_o: '<number>', f7_n: '<object>'}, 'EwqpyUEMuxPu');
    var clear_16 = objectStore_15.clear();
    var count_19 = objectStore_15.count();
    var getAllKeys_6;
    try{
        KeyRange_58 = IDBKeyRange.bound('JJJB', 'SKs', true, true);
        getAllKeys_6 = objectStore_15.getAllKeys(KeyRange_58);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('SKs');
        getAllKeys_6 = objectStore_15.getAllKeys(KeyRange_59);
    }

    var count_20 = objectStore_15.count();
    var count_21 = objectStore_15.count();
    var get_9;
    try{
        KeyRange_60 = IDBKeyRange.bound('JJJB', 'Oaazqqcc', true, false);
        get_9 = objectStore_15.get(KeyRange_60);
    }
    catch (e){
    }

    var put_16 = objectStore_15.put({f0_t: '<null>', f1_d: '<boolean>', f2_t: '<array>', f3_t: '<number>', f4_k: '<object>', f5_q: '<object>', f6_l: '<array>', f7_q: '<array>', f8_c: '<boolean>'}, 'dUEp');
    var put_17 = objectStore_15.put({f0_c: '<number>', f1_e: '<object>', f2_d: '<array>', f3_c: '<number>'}, 'ALYv');
    var add_18 = objectStore_15.add({f0_n: '<boolean>', f1_z: '<string>', f2_o: '<number>', f3_r: '<boolean>', f4_w: '<boolean>', f5_y: '<string>'}, 'KOCRanCDeG');
    var add_19 = objectStore_15.add({f0_y: '<number>'}, 'VKLRanPAGQJV');
    var put_18 = objectStore_15.put({f0_f: '<null>', f1_l: '<boolean>'}, 'ZLigr');
    var clear_17 = objectStore_15.clear();
    var get_10;
    try{
        KeyRange_62 = IDBKeyRange.only('KOCRanCDeG');
        get_10 = objectStore_15.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_18 = objectStore_15.clear();
    var add_20 = objectStore_15.add({f0_u: '<string>'}, 'HNmvejOZXLIa');
    var get_11;
    try{
        KeyRange_64 = IDBKeyRange.bound('jylTAmdJjQhh', 'HNmvejOZXLIa', true, true);
        get_11 = objectStore_15.get(KeyRange_64);
    }
    catch (e){
    }

    var count_22 = objectStore_15.count();
    var getAllKeys_7 = objectStore_15.getAllKeys(2863961513);
    var put_19 = objectStore_15.put({f0_y: '<array>'}, 'qFxpobbZiNY');
    var delete_8;
    try{
        KeyRange_66 = IDBKeyRange.only('KOCRanCDeG');
        delete_8 = objectStore_15.delete(KeyRange_66);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_68 = IDBKeyRange.bound('qBDvHREZRO', 'Oaazqqcc', true, false);
        get_12 = objectStore_15.get(KeyRange_68);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_70 = IDBKeyRange.bound('Oaazqqcc', 'JJJB', true, false);
        get_13 = objectStore_15.get(KeyRange_70);
    }
    catch (e){
    }

    var clear_19 = objectStore_15.clear();
    var get_14;
    try{
        KeyRange_72 = IDBKeyRange.bound('dUEp', 'AXIEVL', true, true);
        get_14 = objectStore_15.get(KeyRange_72);
    }
    catch (e){
    }

    var count_23 = objectStore_15.count();
    var put_20 = objectStore_15.put({f0_u: '<null>', f1_h: '<array>', f2_o: '<number>', f3_k: '<object>'}, 'mEQFSR');
    var getAll_4;
    try{
        KeyRange_74 = IDBKeyRange.bound('ALYv', 'ALYv', false, true);
        getAll_4 = objectStore_15.getAll(KeyRange_74);
    }
    catch (e){
        KeyRange_75 = IDBKeyRange.only('HNmvejOZXLIa');
        getAll_4 = objectStore_15.getAll(KeyRange_75);
    }

    var getAll_5 = objectStore_15.getAll();
    var getAllKeys_8;
    try{
        KeyRange_76 = IDBKeyRange.only('ALYv');
        getAllKeys_8 = objectStore_15.getAllKeys(KeyRange_76, 3512829375);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('ZLigr');
        getAllKeys_8 = objectStore_15.getAllKeys(KeyRange_77);
    }

    var add_21 = objectStore_15.add({f0_g: '<object>', f1_x: '<string>', f2_d: '<object>', f3_n: '<object>', f4_v: '<boolean>'}, 'xELYA');
    var add_22 = objectStore_15.add({f0_m: '<number>', f1_m: '<null>', f2_s: '<string>', f3_x: '<array>', f4_y: '<null>'}, 'ywnFEjRDF');
    var get_15;
    try{
        KeyRange_78 = IDBKeyRange.bound('VKLRanPAGQJV', 'ALYv', false, true);
        get_15 = objectStore_15.get(KeyRange_78);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_80 = IDBKeyRange.bound('Oaazqqcc', 'AXIEVL', true, true);
        get_16 = objectStore_15.get(KeyRange_80);
    }
    catch (e){
    }

    var clear_20 = objectStore_15.clear();
    var add_23 = objectStore_15.add({f0_r: '<null>', f1_p: '<object>', f2_y: '<object>', f3_z: '<boolean>', f4_c: '<number>', f5_j: '<number>', f6_b: '<array>', f7_r: '<number>', f8_d: '<string>'}, 'Jipif');
    var count_24 = objectStore_15.count();
    var put_21 = objectStore_15.put({f0_h: '<null>', f1_a: '<object>', f2_x: '<string>', f3_g: '<object>'}, 'ZNlIuo');
    var add_24 = objectStore_15.add({f0_l: '<number>', f1_m: '<null>'}, 'UovvgRQu');
    var add_25 = objectStore_15.add({f0_t: '<string>', f1_s: '<array>', f2_b: '<boolean>', f3_s: '<number>', f4_q: '<object>', f5_b: '<boolean>'}, 'VJEaxZlrReUS');
    var delete_9;
    try{
        KeyRange_82 = IDBKeyRange.bound('HNmvejOZXLIa', 'jylTAmdJjQhh', false, true);
        delete_9 = objectStore_15.delete(KeyRange_82);
    }
    catch (e){
    }

    var put_22 = objectStore_15.put({f0_t: '<number>', f1_i: '<boolean>', f2_q: '<array>', f3_r: '<null>', f4_w: '<number>', f5_y: '<object>'}, 'UDkoWmdFu');
    var put_23 = objectStore_15.put({f0_s: '<object>', f1_e: '<number>', f2_x: '<string>', f3_h: '<object>', f4_g: '<array>', f5_x: '<string>', f6_s: '<number>'}, 'vaLTKxgzFSE');
    var clear_21 = objectStore_15.clear();
    var put_24 = objectStore_15.put({f0_k: '<object>', f1_e: '<array>', f2_r: '<null>', f3_b: '<number>', f4_j: '<array>', f5_c: '<string>', f6_s: '<array>', f7_l: '<null>', f8_j: '<null>', f9_y: '<number>'}, 'gmJfAuIYY');
    var put_25 = objectStore_15.put({f0_v: '<null>', f1_u: '<number>'}, 'APVwzBenyoq');
    var get_17;
    try{
        KeyRange_84 = IDBKeyRange.bound('APVwzBenyoq', 'ioqBVajXPzT', false, false);
        get_17 = objectStore_15.get(KeyRange_84);
    }
    catch (e){
    }

    var delete_10;
    try{
        KeyRange_86 = IDBKeyRange.bound('vaLTKxgzFSE', 'Oaazqqcc', false, true);
        delete_10 = objectStore_15.delete(KeyRange_86);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_88 = IDBKeyRange.bound('Jipif', 'xELYA', false, false);
        get_18 = objectStore_15.get(KeyRange_88);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_15.getAllKeys();
    var getAllKeys_10 = objectStore_15.getAllKeys(2573965723);
    var get_19;
    try{
        KeyRange_90 = IDBKeyRange.only('ZLigr');
        get_19 = objectStore_15.get(KeyRange_90);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_92 = IDBKeyRange.bound('jylTAmdJjQhh', 'APVwzBenyoq', false, true);
        get_20 = objectStore_15.get(KeyRange_92);
    }
    catch (e){
    }

    var add_26 = objectStore_15.add({f0_s: '<array>', f1_a: '<array>', f2_a: '<boolean>', f3_r: '<number>', f4_n: '<string>', f5_z: '<number>'}, 'BedW');
    var getAllKeys_11 = objectStore_15.getAllKeys();
    var clear_22 = objectStore_15.clear();
    var clear_23 = objectStore_15.clear();
    var add_27 = objectStore_15.add({f0_u: '<array>', f1_d: '<string>', f2_z: '<boolean>', f3_t: '<number>', f4_w: '<null>', f5_h: '<null>', f6_q: '<number>', f7_l: '<object>'}, 'IheVTDq');
    var put_26 = objectStore_15.put({f0_b: '<string>', f1_r: '<object>', f2_m: '<string>'}, 'Tox');
    var get_21;
    try{
        KeyRange_94 = IDBKeyRange.only('btvvlzuAyFv');
        get_21 = objectStore_15.get(KeyRange_94);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_15.getAllKeys(2237194891);
    var get_22;
    try{
        KeyRange_96 = IDBKeyRange.only('xELYA');
        get_22 = objectStore_15.get(KeyRange_96);
    }
    catch (e){
    }

    var clear_24 = objectStore_15.clear();
    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8661')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};