let db;
const openRequest = window.indexedDB.open('str_8713', 1007148068660563)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_110', {keypath: 'Klzq'});
    var add_0 = objectStore_0.add({f0_i: '<string>', f1_u: '<boolean>', f2_q: '<object>', f3_p: '<string>', f4_u: '<null>'}, 'hkZSaNt');
    var count_0 = objectStore_0.count();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('hkZSaNt', 'hkZSaNt', true, true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('hkZSaNt', 'hkZSaNt', false, false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_l: '<boolean>', f1_u: '<null>', f2_n: '<number>'}, 'jbzCIeouuM');
    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('hkZSaNt', 'hkZSaNt', false, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_4, 3153984522);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('jbzCIeouuM');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_5);
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('hkZSaNt');
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var index_77 = objectStore_0.createIndex('index_77', 'test', {multiEntry: false});
    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.only('hkZSaNt');
        count_1 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('hkZSaNt', 'jbzCIeouuM', false, true);
        count_2 = objectStore_0.count(KeyRange_10);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.only('jbzCIeouuM');
        count_3 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_c: '<boolean>'}, 'ytj');
    var getAllKeys_1 = objectStore_0.getAllKeys(2423575808);
    var index_0 = objectStore_0.index('index_77');
    var index_78 = objectStore_0.createIndex('index_78', 'test', {unique: false, multiEntry: false});
    var put_1 = objectStore_0.put({f0_z: '<object>', f1_t: '<array>', f2_j: '<array>', f3_q: '<array>', f4_m: '<object>', f5_e: '<null>', f6_q: '<string>', f7_t: '<boolean>'}, 'kMlbb');
    var objectStore_1 = db.createObjectStore('objectStore_111', {keypath: 'GUGdIj'});
    var delete_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('kMlbb', true);
        delete_1 = objectStore_0.delete(KeyRange_14);
    }
    catch (e){
    }

    var add_2 = objectStore_1.add({f0_v: '<array>', f1_r: '<object>', f2_g: '<number>', f3_i: '<object>', f4_s: '<null>', f5_v: '<object>', f6_w: '<null>', f7_i: '<string>'}, 'JFDiOxm');
    var add_3 = objectStore_1.add({f0_j: '<object>', f1_v: '<object>', f2_z: '<array>', f3_t: '<object>', f4_z: '<number>', f5_j: '<string>', f6_o: '<boolean>'}, 'gpCIHcZOR');
    var add_4 = objectStore_1.add({f0_i: '<object>', f1_j: '<boolean>', f2_m: '<null>', f3_d: '<boolean>', f4_c: '<boolean>', f5_s: '<string>', f6_b: '<string>', f7_v: '<array>', f8_c: '<boolean>'}, 'fSTYByZG');
    var put_2 = objectStore_0.put({f0_i: '<string>', f1_v: '<array>', f2_i: '<number>', f3_v: '<object>'}, 'eBD');
    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('fSTYByZG', false);
        get_2 = objectStore_1.get(KeyRange_16);
    }
    catch (e){
    }

    var clear_0 = objectStore_1.clear();
    var delete_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('jbzCIeouuM', 'ytj', false, false);
        delete_2 = objectStore_0.delete(KeyRange_18);
    }
    catch (e){
    }

    var index_79 = objectStore_0.createIndex('index_79', 'test', {unique: false});
    var getAll_0;
    try{
        KeyRange_20 = IDBKeyRange.only('eBD');
        getAll_0 = objectStore_0.getAll(KeyRange_20, 1213145483);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('eBD');
        getAll_0 = objectStore_0.getAll(KeyRange_21);
    }

    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.only('fSTYByZG');
        get_3 = objectStore_1.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_0.getAllKeys(1593411864);
    var getAllKeys_3 = objectStore_1.getAllKeys();
    var index_80 = objectStore_1.createIndex('index_80', 'test', {unique: false, multiEntry: false});
    var add_5 = objectStore_0.add({f0_v: '<object>', f1_v: '<object>'}, 'MHoKbwei');
    var add_6 = objectStore_1.add({f0_n: '<string>', f1_g: '<number>', f2_g: '<null>', f3_b: '<array>', f4_f: '<string>', f5_u: '<string>', f6_y: '<array>'}, 'yTpAmvAQAs');
    var clear_1 = objectStore_0.clear();
    var getAllKeys_4 = objectStore_1.getAllKeys(1199595476);
    db.deleteObjectStore('objectStore_110')
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('JFDiOxm', 'JFDiOxm', false, true);
        get_4 = objectStore_1.get(KeyRange_24);
    }
    catch (e){
    }

    var count_4 = objectStore_1.count();
    db.deleteObjectStore('objectStore_111')
    var objectStore_2 = db.createObjectStore('objectStore_112', {autoIncrement: false});
    var add_7 = objectStore_2.add({f0_t: '<boolean>', f1_a: '<string>', f2_o: '<number>', f3_d: '<boolean>', f4_x: '<number>', f5_s: '<string>', f6_q: '<array>'}, 'lbOzTvOJGzO');
    var objectStore_3 = db.createObjectStore('objectStore_113', {keypath: 'UtafEtri'});
    var add_8 = objectStore_3.add({f0_f: '<array>', f1_m: '<object>', f2_a: '<string>', f3_q: '<array>', f4_v: '<array>', f5_g: '<boolean>'}, 'MDuPSECet');
    var clear_2 = objectStore_2.clear();
    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('lbOzTvOJGzO', 'lbOzTvOJGzO', true, false);
        count_5 = objectStore_2.count(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('lbOzTvOJGzO', 'lbOzTvOJGzO', true, false);
        get_5 = objectStore_2.get(KeyRange_28);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_114', {keypath: 'YyFuwAMKt'});
    var clear_3 = objectStore_2.clear();
    var objectStore_5 = db.createObjectStore('objectStore_115', {keypath: 'CaS', autoIncrement: true});
    var clear_4 = objectStore_5.clear();
    db.deleteObjectStore('objectStore_115')
    var index_81 = objectStore_2.createIndex('index_81', 'test', {unique: false, multiEntry: true});
    var add_9 = objectStore_2.add({f0_x: '<string>', f1_t: '<string>', f2_y: '<boolean>', f3_h: '<string>', f4_y: '<string>', f5_v: '<string>', f6_l: '<number>', f7_v: '<boolean>', f8_g: '<array>', f9_v: '<boolean>'}, 'jtY');
    var clear_5 = objectStore_4.clear();
    var count_6 = objectStore_3.count();
    var getAll_1;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('lbOzTvOJGzO', false);
        getAll_1 = objectStore_2.getAll(KeyRange_30, 2913475596);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('jtY');
        getAll_1 = objectStore_2.getAll(KeyRange_31);
    }

    var objectStore_6 = db.createObjectStore('objectStore_116', {autoIncrement: false});
    var index_1 = objectStore_2.index('index_81');
    var index_82 = objectStore_3.createIndex('index_82', 'test');
    var objectStore_7 = db.createObjectStore('objectStore_117', {autoIncrement: true});
    var getAllKeys_5;
    try{
        KeyRange_32 = IDBKeyRange.bound('MDuPSECet', 'MDuPSECet', true, false);
        getAllKeys_5 = objectStore_3.getAllKeys(KeyRange_32, 1879963022);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('MDuPSECet');
        getAllKeys_5 = objectStore_3.getAllKeys(KeyRange_33);
    }

    var index_83 = objectStore_2.createIndex('index_83', 'test');
    var put_3 = objectStore_6.put({f0_w: '<boolean>', f1_w: '<object>', f2_c: '<boolean>', f3_l: '<string>', f4_f: '<object>', f5_o: '<array>', f6_e: '<null>', f7_f: '<null>', f8_m: '<null>', f9_b: '<string>'}, 'egw');
    var objectStore_8 = db.createObjectStore('objectStore_118', {keypath: 'ehn'});
    var getAll_2 = objectStore_2.getAll(989127415);
    var objectStore_9 = db.createObjectStore('objectStore_119');
    var index_84 = objectStore_4.createIndex('index_84', 'test', {multiEntry: false});
    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('lbOzTvOJGzO', true);
        get_6 = objectStore_2.get(KeyRange_34);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_120', {keypath: 'eByM', autoIncrement: true});
    var put_4 = objectStore_3.put({f0_b: '<number>', f1_m: '<string>', f2_u: '<null>', f3_a: '<null>', f4_k: '<string>'}, 'qRQYBJrugMqR');
    var put_5 = objectStore_6.put({f0_n: '<string>', f1_i: '<null>', f2_k: '<null>', f3_o: '<boolean>', f4_u: '<boolean>', f5_r: '<null>', f6_d: '<boolean>'}, 'kojy');
    var clear_6 = objectStore_10.clear();
    var delete_3;
    try{
        KeyRange_36 = IDBKeyRange.bound('jtY', 'jtY', false, false);
        delete_3 = objectStore_2.delete(KeyRange_36);
    }
    catch (e){
    }

    var put_6 = objectStore_8.put({f0_t: '<boolean>', f1_k: '<string>', f2_f: '<object>'}, 'hEUeOVO');
    var index_85 = objectStore_4.createIndex('index_85', 'test', {unique: false, multiEntry: true});
    var put_7 = objectStore_3.put({f0_a: '<object>', f1_m: '<number>', f2_v: '<null>', f3_m: '<string>', f4_y: '<null>', f5_c: '<string>', f6_k: '<object>', f7_s: '<boolean>', f8_k: '<boolean>'}, 'SmPHaSa');
    var index_86 = objectStore_4.createIndex('index_86', 'test', {unique: true});
    var add_10 = objectStore_8.add({f0_l: '<string>', f1_t: '<array>', f2_y: '<array>', f3_l: '<array>', f4_y: '<string>', f5_y: '<string>', f6_u: '<boolean>', f7_h: '<number>', f8_l: '<boolean>', f9_m: '<boolean>'}, 'dVQEJFpeCjlA');
    var index_87 = objectStore_9.createIndex('index_87', 'test', {unique: true});
    var put_8 = objectStore_10.put({f0_j: '<array>', f1_g: '<array>', f2_w: '<string>', f3_t: '<array>', f4_i: '<null>'}, 'uaUjdb');
    var add_11 = objectStore_9.add({f0_m: '<null>', f1_e: '<array>', f2_j: '<string>'}, 'mjeY');
    var index_88 = objectStore_2.createIndex('index_88', 'test', {unique: false});
    var objectStore_11 = db.createObjectStore('objectStore_121');
    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('lbOzTvOJGzO', false);
        get_7 = objectStore_2.get(KeyRange_38);
    }
    catch (e){
    }

    var index_89 = objectStore_2.createIndex('index_89', 'test', {multiEntry: false});
    var index_2 = objectStore_3.index('index_82');
    var getAllKeys_6 = objectStore_6.getAllKeys();
    var put_9 = objectStore_4.put({f0_b: '<array>', f1_b: '<string>', f2_u: '<null>', f3_m: '<object>', f4_b: '<null>'}, 'wkulsSlO');
    var put_10 = objectStore_10.put({f0_b: '<object>', f1_a: '<boolean>', f2_i: '<boolean>', f3_s: '<number>', f4_d: '<string>'}, 'PoMMIAK');
    var objectStore_12 = db.createObjectStore('objectStore_122', {autoIncrement: true});
    var getAllKeys_7;
    try{
        KeyRange_40 = IDBKeyRange.only('uaUjdb');
        getAllKeys_7 = objectStore_10.getAllKeys(KeyRange_40, 688202107);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('uaUjdb');
        getAllKeys_7 = objectStore_10.getAllKeys(KeyRange_41);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_9 = db.transaction(['objectStore_120', 'objectStore_116', 'objectStore_119', 'objectStore_113', 'objectStore_118', 'objectStore_117'], 'readonly', {durability:"relaxed"})
    var objectStore_118;
    txn_9.objectStore('objectStore_118')
    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.bound('dVQEJFpeCjlA', 'dVQEJFpeCjlA', true, true);
        get_8 = objectStore_118.get(KeyRange_42);
    }
    catch (e){
    }

    var add_12 = objectStore_118.add({f0_s: '<number>', f1_f: '<null>', f2_n: '<boolean>', f3_a: '<number>', f4_m: '<number>', f5_q: '<number>'}, 'ClDPEPT');
    var count_7 = objectStore_118.count();
    var put_11 = objectStore_118.put({f0_q: '<object>', f1_m: '<string>', f2_l: '<object>', f3_g: '<null>', f4_z: '<boolean>'}, 'reoQvXine');
    var count_8;
    try{
        KeyRange_44 = IDBKeyRange.only('ClDPEPT');
        count_8 = objectStore_118.count(KeyRange_44);
    }
    catch (e){
    }

    var add_13 = objectStore_118.add({f0_y: '<array>', f1_q: '<boolean>', f2_n: '<array>', f3_l: '<string>', f4_a: '<null>', f5_q: '<boolean>'}, 'spJn');
    var count_9 = objectStore_118.count();
    var count_10;
    try{
        KeyRange_46 = IDBKeyRange.bound('ClDPEPT', 'spJn', true, false);
        count_10 = objectStore_118.count(KeyRange_46);
    }
    catch (e){
    }

    var put_12 = objectStore_118.put({f0_b: '<object>', f1_e: '<string>', f2_v: '<number>', f3_l: '<object>', f4_b: '<object>', f5_m: '<object>', f6_r: '<number>', f7_c: '<boolean>'}, 'EQArJyapbK');
    var put_13 = objectStore_118.put({f0_a: '<array>', f1_i: '<boolean>', f2_q: '<boolean>', f3_o: '<null>'}, 'OwDVgqpHVLo');
    var clear_7 = objectStore_118.clear();
    var getAll_3;
    try{
        KeyRange_48 = IDBKeyRange.bound('EQArJyapbK', 'reoQvXine', false, false);
        getAll_3 = objectStore_118.getAll(KeyRange_48, 3556380080);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('reoQvXine');
        getAll_3 = objectStore_118.getAll(KeyRange_49);
    }

    var get_9;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('ClDPEPT', true);
        get_9 = objectStore_118.get(KeyRange_50);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_52 = IDBKeyRange.bound('dVQEJFpeCjlA', 'hEUeOVO', true, true);
        get_10 = objectStore_118.get(KeyRange_52);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('hEUeOVO', true);
        get_11 = objectStore_118.get(KeyRange_54);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_56 = IDBKeyRange.only('OwDVgqpHVLo');
        get_12 = objectStore_118.get(KeyRange_56);
    }
    catch (e){
    }

    var getAll_4 = objectStore_118.getAll(2394390197);
    var count_11 = objectStore_118.count();
    var get_13;
    try{
        KeyRange_58 = IDBKeyRange.only('hEUeOVO');
        get_13 = objectStore_118.get(KeyRange_58);
    }
    catch (e){
    }

    var put_14 = objectStore_118.put({f0_d: '<array>'}, 'eOZTu');
    var count_12 = objectStore_118.count();
    var delete_4;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('reoQvXine', true);
        delete_4 = objectStore_118.delete(KeyRange_60);
    }
    catch (e){
    }

    var clear_8 = objectStore_118.clear();
    var getAll_5;
    try{
        KeyRange_62 = IDBKeyRange.bound('reoQvXine', 'OwDVgqpHVLo', true, false);
        getAll_5 = objectStore_118.getAll(KeyRange_62);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('reoQvXine');
        getAll_5 = objectStore_118.getAll(KeyRange_63);
    }

    var put_15 = objectStore_118.put({f0_o: '<array>', f1_q: '<string>'}, 'UgSBF');
    var clear_9 = objectStore_118.clear();
    var count_13 = objectStore_118.count();
    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.bound('spJn', 'eOZTu', true, false);
        get_14 = objectStore_118.get(KeyRange_64);
    }
    catch (e){
    }

    var getAll_6 = objectStore_118.getAll();
    var get_15;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('EQArJyapbK', true);
        get_15 = objectStore_118.get(KeyRange_66);
    }
    catch (e){
    }

    var put_16 = objectStore_118.put({f0_f: '<object>'}, 'FjNlsu');
    var put_17 = objectStore_118.put({f0_t: '<object>', f1_c: '<string>', f2_w: '<string>', f3_b: '<string>', f4_e: '<object>'}, 'hjLMUlHvmBHw');
    var delete_5;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('FjNlsu', false);
        delete_5 = objectStore_118.delete(KeyRange_68);
    }
    catch (e){
    }

    var put_18 = objectStore_118.put({f0_p: '<number>', f1_z: '<object>', f2_a: '<array>', f3_g: '<object>', f4_e: '<null>', f5_a: '<string>', f6_d: '<number>', f7_c: '<array>'}, 'Szrmg');
    var put_19 = objectStore_118.put({f0_s: '<object>'}, 'gMvJXGRLt');
    var count_14;
    try{
        KeyRange_70 = IDBKeyRange.bound('eOZTu', 'UgSBF', false, false);
        count_14 = objectStore_118.count(KeyRange_70);
    }
    catch (e){
    }

    var put_20 = objectStore_118.put({f0_j: '<object>', f1_u: '<object>', f2_y: '<boolean>', f3_r: '<boolean>', f4_o: '<object>', f5_x: '<string>', f6_x: '<string>', f7_m: '<number>'}, 'CIaVjX');
    var clear_10 = objectStore_118.clear();
    var clear_11 = objectStore_118.clear();
    var put_21 = objectStore_118.put({f0_r: '<object>', f1_h: '<null>'}, 'tyeZ');
    var clear_12 = objectStore_118.clear();
    var delete_6;
    try{
        KeyRange_72 = IDBKeyRange.bound('tyeZ', 'CIaVjX', false, true);
        delete_6 = objectStore_118.delete(KeyRange_72);
    }
    catch (e){
    }

    var clear_13 = objectStore_118.clear();
    var clear_14 = objectStore_118.clear();
    var delete_7;
    try{
        KeyRange_74 = IDBKeyRange.bound('tyeZ', 'FjNlsu', false, false);
        delete_7 = objectStore_118.delete(KeyRange_74);
    }
    catch (e){
    }

    var add_14 = objectStore_118.add({f0_x: '<string>', f1_g: '<array>', f2_i: '<boolean>', f3_e: '<string>', f4_d: '<object>', f5_c: '<number>', f6_a: '<array>', f7_a: '<boolean>', f8_h: '<array>'}, 'UyiHnkFrVwiQ');
    var clear_15 = objectStore_118.clear();
    var clear_16 = objectStore_118.clear();
    var count_15;
    try{
        KeyRange_76 = IDBKeyRange.bound('gMvJXGRLt', 'Szrmg', true, false);
        count_15 = objectStore_118.count(KeyRange_76);
    }
    catch (e){
    }

    var add_15 = objectStore_118.add({f0_x: '<number>', f1_y: '<boolean>', f2_t: '<array>', f3_l: '<object>', f4_r: '<string>', f5_i: '<number>', f6_z: '<string>', f7_l: '<null>'}, 'uwdUmPBQ');
    var clear_17 = objectStore_118.clear();
    var put_22 = objectStore_118.put({f0_t: '<number>', f1_p: '<string>', f2_b: '<object>', f3_y: '<string>', f4_j: '<object>', f5_p: '<string>', f6_c: '<array>', f7_i: '<number>'}, 'OkT');
    var count_16;
    try{
        KeyRange_78 = IDBKeyRange.only('OwDVgqpHVLo');
        count_16 = objectStore_118.count(KeyRange_78);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('Szrmg', true);
        count_17 = objectStore_118.count(KeyRange_80);
    }
    catch (e){
    }

    var clear_18 = objectStore_118.clear();
    var put_23 = objectStore_118.put({f0_s: '<null>', f1_n: '<null>', f2_q: '<array>', f3_m: '<array>', f4_e: '<string>', f5_o: '<number>', f6_j: '<object>', f7_f: '<null>'}, 'uDzWanmuSg');
    var clear_19 = objectStore_118.clear();
    var add_16 = objectStore_118.add({f0_s: '<null>', f1_m: '<null>', f2_d: '<object>', f3_t: '<boolean>', f4_j: '<null>'}, 'jMCvoLBdY');
    var delete_8;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('eOZTu', false);
        delete_8 = objectStore_118.delete(KeyRange_82);
    }
    catch (e){
    }

    var put_24 = objectStore_118.put({f0_w: '<object>'}, 'Aax');
    var count_18;
    try{
        KeyRange_84 = IDBKeyRange.bound('jMCvoLBdY', 'jMCvoLBdY', true, true);
        count_18 = objectStore_118.count(KeyRange_84);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_86 = IDBKeyRange.bound('UyiHnkFrVwiQ', 'Szrmg', true, true);
        getAll_7 = objectStore_118.getAll(KeyRange_86, 3411671909);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('CIaVjX');
        getAll_7 = objectStore_118.getAll(KeyRange_87);
    }

    var put_25 = objectStore_118.put({f0_g: '<array>', f1_i: '<number>', f2_c: '<string>', f3_x: '<number>', f4_w: '<object>', f5_v: '<object>'}, 'aoktEHRRBE');
    var put_26 = objectStore_118.put({f0_a: '<object>', f1_u: '<boolean>', f2_a: '<boolean>', f3_w: '<array>', f4_b: '<null>', f5_c: '<number>'}, 'zdycdib');
    var getAll_8;
    try{
        KeyRange_88 = IDBKeyRange.bound('reoQvXine', 'Aax', false, false);
        getAll_8 = objectStore_118.getAll(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('gMvJXGRLt');
        getAll_8 = objectStore_118.getAll(KeyRange_89);
    }

    var put_27 = objectStore_118.put({f0_f: '<object>', f1_i: '<number>'}, 'fETWaBRP');
    var count_19 = objectStore_118.count();
    var add_17 = objectStore_118.add({f0_y: '<array>', f1_u: '<object>', f2_g: '<number>', f3_d: '<array>', f4_m: '<null>', f5_s: '<number>', f6_b: '<null>', f7_y: '<object>'}, 'iGfce');
    var getAll_9 = objectStore_118.getAll();
    var get_16;
    try{
        KeyRange_90 = IDBKeyRange.bound('aoktEHRRBE', 'ClDPEPT', false, false);
        get_16 = objectStore_118.get(KeyRange_90);
    }
    catch (e){
    }

    var clear_20 = objectStore_118.clear();
    var clear_21 = objectStore_118.clear();
    var getAll_10;
    try{
        KeyRange_92 = IDBKeyRange.bound('UyiHnkFrVwiQ', 'uwdUmPBQ', false, false);
        getAll_10 = objectStore_118.getAll(KeyRange_92, 1076230514);
    }
    catch (e){
        KeyRange_93 = IDBKeyRange.only('eOZTu');
        getAll_10 = objectStore_118.getAll(KeyRange_93);
    }

    var put_28 = objectStore_118.put({f0_h: '<object>'}, 'jJdPKpFNGHw');
    var count_20 = objectStore_118.count();
    var put_29 = objectStore_118.put({f0_n: '<null>', f1_j: '<object>'}, 'sEpTps');
    var get_17;
    try{
        KeyRange_94 = IDBKeyRange.bound('FjNlsu', 'OkT', false, false);
        get_17 = objectStore_118.get(KeyRange_94);
    }
    catch (e){
    }

    var count_21;
    try{
        KeyRange_96 = IDBKeyRange.only('iGfce');
        count_21 = objectStore_118.count(KeyRange_96);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_98 = IDBKeyRange.bound('spJn', 'Szrmg', false, true);
        get_18 = objectStore_118.get(KeyRange_98);
    }
    catch (e){
    }

    var put_30 = objectStore_118.put({f0_d: '<null>', f1_u: '<object>', f2_u: '<boolean>', f3_y: '<array>', f4_w: '<null>', f5_w: '<array>', f6_n: '<string>', f7_h: '<number>', f8_c: '<array>'}, 'aSy');
    var clear_22 = objectStore_118.clear();
    var count_22 = objectStore_118.count();
    var put_31 = objectStore_118.put({f0_b: '<array>', f1_d: '<boolean>', f2_z: '<array>'}, 'qdqpAyKDfM');
    var count_23;
    try{
        KeyRange_100 = IDBKeyRange.bound('uwdUmPBQ', 'iGfce', true, true);
        count_23 = objectStore_118.count(KeyRange_100);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_102 = IDBKeyRange.bound('jMCvoLBdY', 'CIaVjX', false, true);
        getAllKeys_8 = objectStore_118.getAllKeys(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('sEpTps');
        getAllKeys_8 = objectStore_118.getAllKeys(KeyRange_103);
    }

    var add_18 = objectStore_118.add({f0_z: '<string>', f1_c: '<number>', f2_e: '<object>', f3_l: '<array>', f4_l: '<number>', f5_a: '<array>', f6_w: '<string>', f7_t: '<string>', f8_f: '<array>', f9_a: '<array>'}, 'DIiXwgWyIwWO');
    var add_19 = objectStore_118.add({f0_f: '<object>', f1_a: '<number>', f2_n: '<object>', f3_i: '<object>', f4_k: '<boolean>', f5_m: '<object>'}, 'LrUraAEkbtaL');
    var get_19;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('dVQEJFpeCjlA', true);
        get_19 = objectStore_118.get(KeyRange_104);
    }
    catch (e){
    }

    var add_20 = objectStore_118.add({f0_f: '<string>', f1_z: '<object>', f2_c: '<boolean>', f3_q: '<array>'}, 'LmMiQrdFFmc');
    var get_20;
    try{
        KeyRange_106 = IDBKeyRange.bound('DIiXwgWyIwWO', 'hEUeOVO', false, true);
        get_20 = objectStore_118.get(KeyRange_106);
    }
    catch (e){
    }

    var clear_23 = objectStore_118.clear();
    var get_21;
    try{
        KeyRange_108 = IDBKeyRange.bound('hEUeOVO', 'UyiHnkFrVwiQ', true, true);
        get_21 = objectStore_118.get(KeyRange_108);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('tyeZ', false);
        get_22 = objectStore_118.get(KeyRange_110);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('LrUraAEkbtaL', true);
        count_24 = objectStore_118.count(KeyRange_112);
    }
    catch (e){
    }

    txn_9.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_9.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_9.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4552')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};