let db;
const openRequest = window.indexedDB.open('str_6315', 2320441267068281)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_95', {keypath: 'ioggFqh', autoIncrement: false});
    var put_0 = objectStore_0.put({f0_r: '<string>', f1_m: '<array>', f2_l: '<object>', f3_d: '<null>', f4_x: '<object>', f5_z: '<boolean>'}, 'JhMnXH');
    var add_0 = objectStore_0.add({f0_v: '<boolean>', f1_e: '<number>', f2_u: '<number>', f3_e: '<string>', f4_k: '<object>', f5_n: '<object>', f6_z: '<boolean>'}, 'FdVNHB');
    var getAllKeys_0 = objectStore_0.getAllKeys();
    db.deleteObjectStore('objectStore_95')
    var objectStore_1 = db.createObjectStore('objectStore_96', {keypath: 'MECu'});
    var objectStore_2 = db.createObjectStore('objectStore_97', {keypath: 'vDvgENKjt', autoIncrement: true});
    var index_69 = objectStore_2.createIndex('index_69', 'test', {multiEntry: false});
    var objectStore_3 = db.createObjectStore('objectStore_98');
    var clear_0 = objectStore_3.clear();
    var objectStore_4 = db.createObjectStore('objectStore_99', {keypath: 'fBARLHiy', autoIncrement: true});
    var index_70 = objectStore_1.createIndex('index_70', 'test', {unique: true});
    objectStore_1.deleteIndex('index_70')
    var put_1 = objectStore_2.put({f0_r: '<boolean>', f1_l: '<number>', f2_f: '<number>', f3_u: '<array>'}, 'mVcOKzLj');
    var index_71 = objectStore_2.createIndex('index_71', 'test', {unique: true});
    var add_1 = objectStore_4.add({f0_w: '<array>'}, 'vEWuBNppScai');
    var add_2 = objectStore_4.add({f0_x: '<string>', f1_b: '<object>', f2_t: '<number>', f3_o: '<object>', f4_m: '<string>'}, 'lUqLfFRVxhru');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('mVcOKzLj', true);
        get_0 = objectStore_2.get(KeyRange_0);
    }
    catch (e){
    }

    var add_3 = objectStore_4.add({f0_e: '<null>', f1_i: '<string>', f2_g: '<object>', f3_v: '<boolean>', f4_m: '<null>', f5_u: '<boolean>', f6_k: '<string>', f7_b: '<null>'}, 'ujOqvLnsjywG');
    var index_72 = objectStore_1.createIndex('index_72', 'test', {unique: true, multiEntry: false});
    var index_73 = objectStore_3.createIndex('index_73', 'test', {multiEntry: false});
    var add_4 = objectStore_4.add({f0_f: '<number>', f1_z: '<string>', f2_j: '<number>', f3_h: '<null>', f4_e: '<object>', f5_g: '<number>', f6_y: '<array>', f7_p: '<number>', f8_c: '<boolean>', f9_o: '<string>'}, 'OAgcUSOSTiTu');
    var clear_1 = objectStore_4.clear();
    var objectStore_5 = db.createObjectStore('objectStore_100', {autoIncrement: true});
    var clear_2 = objectStore_5.clear();
    var put_2 = objectStore_1.put({f0_r: '<boolean>', f1_o: '<string>', f2_g: '<number>', f3_h: '<string>', f4_a: '<object>', f5_f: '<null>', f6_t: '<string>'}, 'MfCNzBB');
    var add_5 = objectStore_4.add({f0_z: '<object>', f1_s: '<number>'}, 'HaxmuOQRTE');
    objectStore_2.deleteIndex('index_71')
    var put_3 = objectStore_5.put({f0_o: '<string>', f1_e: '<string>', f2_k: '<boolean>', f3_t: '<object>', f4_r: '<array>', f5_a: '<null>', f6_u: '<object>', f7_z: '<object>', f8_z: '<null>'}, 'BbYYZGBlgM');
    var put_4 = objectStore_2.put({f0_f: '<array>', f1_f: '<object>', f2_t: '<object>', f3_u: '<number>', f4_r: '<number>', f5_r: '<string>'}, 'TzvYg');
    var objectStore_6 = db.createObjectStore('objectStore_101');
    var getAllKeys_1 = objectStore_5.getAllKeys();
    var objectStore_7 = db.createObjectStore('objectStore_102', {keypath: 'UgincHbPL.LuIvt.nriRBx.ArFsxTIxbA.MqjD.ejA'});
    var put_5 = objectStore_3.put({f0_x: '<number>'}, 'JCEEiqByKG');
    var count_0 = objectStore_4.count();
    var add_6 = objectStore_2.add({f0_r: '<null>', f1_u: '<object>', f2_q: '<null>', f3_v: '<number>', f4_z: '<boolean>', f5_l: '<null>', f6_k: '<string>', f7_v: '<number>', f8_a: '<boolean>'}, 'AJlVTYHorX');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('JCEEiqByKG');
        get_1 = objectStore_3.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_3 = objectStore_4.clear();
    var add_7 = objectStore_5.add({f0_c: '<number>', f1_o: '<string>', f2_b: '<string>', f3_t: '<string>', f4_t: '<string>', f5_d: '<boolean>', f6_b: '<number>', f7_b: '<array>', f8_u: '<array>', f9_c: '<number>'}, 'aJgVjdAE');
    var add_8 = objectStore_4.add({f0_k: '<array>', f1_f: '<object>', f2_d: '<boolean>', f3_i: '<null>', f4_j: '<string>', f5_l: '<number>'}, 'iBN');
    var index_0 = objectStore_1.index('index_72');
    var clear_4 = objectStore_7.clear();
    var clear_5 = objectStore_7.clear();
    var put_6 = objectStore_7.put({f0_d: '<null>', f1_m: '<object>'}, 'qSunqlDaO');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('MfCNzBB', true);
        get_2 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_8 = db.createObjectStore('objectStore_103', {autoIncrement: true});
    var add_9 = objectStore_4.add({f0_m: '<array>', f1_p: '<number>', f2_h: '<string>', f3_v: '<number>', f4_d: '<number>', f5_q: '<array>'}, 'MEdNt');
    var objectStore_9 = db.createObjectStore('objectStore_104', {keypath: 'Wjm.CpHk.wjVqBbwtjLN.NjGgyl.PwzzReC.vAGWlQnnHqX.wJjEyp.kWDkfkUOSEKA', autoIncrement: true});
    var index_74 = objectStore_6.createIndex('index_74', 'test', {unique: false});
    var clear_6 = objectStore_1.clear();
    var index_75 = objectStore_9.createIndex('index_75', 'test');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('MfCNzBB', 'MfCNzBB', false, true);
        delete_0 = objectStore_1.delete(KeyRange_6);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('BbYYZGBlgM', 'BbYYZGBlgM', true, true);
        get_3 = objectStore_5.get(KeyRange_8);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_105');
    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.only('aJgVjdAE');
        get_4 = objectStore_5.get(KeyRange_10);
    }
    catch (e){
    }

    var objectStore_11 = db.createObjectStore('objectStore_106', {keypath: 'rpgbUE'});
    var objectStore_12 = db.createObjectStore('objectStore_107', {keypath: 'xBSfWoCgoj', autoIncrement: true});
    db.deleteObjectStore('objectStore_107')
    var add_10 = objectStore_9.add({f0_k: '<array>', f1_f: '<string>', f2_u: '<number>', f3_c: '<array>'}, 'gljIvgQQTiM');
    var index_76 = objectStore_2.createIndex('index_76', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_108', {keypath: 'MscVpSTvi'});
    db.deleteObjectStore('objectStore_96')
    var add_11 = objectStore_13.add({f0_c: '<array>', f1_a: '<number>', f2_v: '<number>', f3_s: '<object>', f4_g: '<number>'}, 'MmC');
    var count_1 = objectStore_7.count();
    var add_12 = objectStore_3.add({f0_u: '<object>', f1_h: '<string>', f2_q: '<null>'}, 'sGHyMJgPlJ');
    var clear_7 = objectStore_5.clear();
    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('gljIvgQQTiM', 'gljIvgQQTiM', true, false);
        count_2 = objectStore_9.count(KeyRange_12);
    }
    catch (e){
    }

    var add_13 = objectStore_8.add({f0_h: '<null>', f1_u: '<string>', f2_b: '<null>', f3_a: '<string>', f4_k: '<boolean>', f5_c: '<string>', f6_c: '<null>', f7_w: '<string>', f8_p: '<number>', f9_j: '<null>'}, 'AyaP');
    var clear_8 = objectStore_7.clear();
    var get_5;
    try{
        KeyRange_14 = IDBKeyRange.only('HaxmuOQRTE');
        get_5 = objectStore_4.get(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_14 = db.createObjectStore('objectStore_109', {keypath: 'DzuJhvMeaj', autoIncrement: true});
    var delete_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('aJgVjdAE', 'BbYYZGBlgM', true, true);
        delete_1 = objectStore_5.delete(KeyRange_16);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8 = db.transaction(['objectStore_106', 'objectStore_98'], 'readwrite', {durability:"strict"})
    var objectStore_106;
    txn_8.objectStore('objectStore_106')
    var put_7 = objectStore_106.put({f0_v: '<boolean>', f1_p: '<string>', f2_w: '<boolean>', f3_i: '<array>', f4_o: '<number>', f5_v: '<array>', f6_j: '<object>', f7_a: '<number>', f8_u: '<object>', f9_g: '<null>'}, 'qSZwaxMlvcT');
    var clear_9 = objectStore_106.clear();
    var clear_10 = objectStore_106.clear();
    var put_8 = objectStore_106.put({f0_z: '<array>', f1_a: '<object>', f2_e: '<null>', f3_u: '<array>'}, 'BIo');
    var getAll_0;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('BIo', true);
        getAll_0 = objectStore_106.getAll(KeyRange_18, 324110715);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('BIo');
        getAll_0 = objectStore_106.getAll(KeyRange_19);
    }

    var put_9 = objectStore_106.put({f0_a: '<string>', f1_a: '<array>', f2_t: '<string>', f3_r: '<number>', f4_y: '<array>', f5_i: '<string>', f6_v: '<array>', f7_m: '<number>', f8_a: '<null>'}, 'lftcncQjS');
    var count_3 = objectStore_106.count();
    var clear_11 = objectStore_106.clear();
    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('lftcncQjS', 'lftcncQjS', true, true);
        get_6 = objectStore_106.get(KeyRange_20);
    }
    catch (e){
    }

    var put_10 = objectStore_106.put({f0_h: '<string>', f1_o: '<object>', f2_n: '<null>', f3_g: '<null>', f4_l: '<boolean>', f5_o: '<object>', f6_v: '<null>', f7_z: '<object>', f8_b: '<null>'}, 'hMdAVOEoESHU');
    var getAll_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('lftcncQjS', 'hMdAVOEoESHU', true, true);
        getAll_1 = objectStore_106.getAll(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('hMdAVOEoESHU');
        getAll_1 = objectStore_106.getAll(KeyRange_23);
    }

    var add_14 = objectStore_106.add({f0_l: '<boolean>', f1_v: '<null>', f2_x: '<boolean>'}, 'BPneYsgINL');
    var count_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('BIo', 'BPneYsgINL', true, false);
        count_4 = objectStore_106.count(KeyRange_24);
    }
    catch (e){
    }

    var count_5 = objectStore_106.count();
    var clear_12 = objectStore_106.clear();
    var clear_13 = objectStore_106.clear();
    var put_11 = objectStore_106.put({f0_y: '<array>'}, 'GnPpoD');
    var add_15 = objectStore_106.add({f0_m: '<array>', f1_m: '<object>', f2_f: '<object>', f3_b: '<number>', f4_y: '<boolean>', f5_o: '<boolean>'}, 'BrZztXOCr');
    var count_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('qSZwaxMlvcT', 'BPneYsgINL', true, false);
        count_6 = objectStore_106.count(KeyRange_26);
    }
    catch (e){
    }

    var clear_14 = objectStore_106.clear();
    var getAll_2 = objectStore_106.getAll(2280630236);
    var add_16 = objectStore_106.add({f0_r: '<object>', f1_i: '<string>', f2_j: '<boolean>', f3_y: '<string>', f4_s: '<string>', f5_n: '<array>', f6_u: '<null>', f7_a: '<string>', f8_t: '<object>'}, 'HZZsVfeUjSO');
    var getAllKeys_2 = objectStore_106.getAllKeys(1575175472);
    var put_12 = objectStore_106.put({f0_g: '<string>', f1_y: '<null>', f2_b: '<null>', f3_s: '<boolean>', f4_m: '<object>', f5_r: '<number>', f6_w: '<object>'}, 'hZhEPPwhRAvq');
    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('lftcncQjS', false);
        get_7 = objectStore_106.get(KeyRange_28);
    }
    catch (e){
    }

    var put_13 = objectStore_106.put({f0_b: '<string>', f1_v: '<null>', f2_r: '<number>', f3_u: '<array>'}, 'pkFNePs');
    var clear_15 = objectStore_106.clear();
    var put_14 = objectStore_106.put({f0_i: '<number>'}, 'IdHjMaun');
    var getAll_3 = objectStore_106.getAll();
    var clear_16 = objectStore_106.clear();
    var add_17 = objectStore_106.add({f0_s: '<object>'}, 'NaL');
    var put_15 = objectStore_106.put({f0_g: '<string>', f1_t: '<number>', f2_e: '<object>', f3_u: '<boolean>', f4_s: '<object>', f5_l: '<null>', f6_w: '<array>', f7_q: '<object>', f8_i: '<null>'}, 'Jpx');
    var delete_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('BPneYsgINL', 'pkFNePs', false, true);
        delete_2 = objectStore_106.delete(KeyRange_30);
    }
    catch (e){
    }

    var clear_17 = objectStore_106.clear();
    var add_18 = objectStore_106.add({f0_m: '<number>', f1_f: '<null>', f2_a: '<boolean>', f3_h: '<string>', f4_x: '<object>', f5_e: '<number>', f6_q: '<array>', f7_o: '<array>'}, 'bQyuR');
    var getAllKeys_3;
    try{
        KeyRange_32 = IDBKeyRange.only('qSZwaxMlvcT');
        getAllKeys_3 = objectStore_106.getAllKeys(KeyRange_32, 3020415061);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('bQyuR');
        getAllKeys_3 = objectStore_106.getAllKeys(KeyRange_33);
    }

    var getAll_4;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('BIo', false);
        getAll_4 = objectStore_106.getAll(KeyRange_34, 1650336335);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('lftcncQjS');
        getAll_4 = objectStore_106.getAll(KeyRange_35);
    }

    var put_16 = objectStore_106.put({f0_h: '<boolean>', f1_b: '<array>', f2_v: '<number>', f3_s: '<boolean>', f4_s: '<number>', f5_b: '<boolean>', f6_l: '<object>', f7_c: '<array>', f8_g: '<object>', f9_v: '<array>'}, 'IgROH');
    var count_7 = objectStore_106.count();
    var count_8 = objectStore_106.count();
    var add_19 = objectStore_106.add({f0_h: '<null>', f1_x: '<string>', f2_a: '<null>', f3_k: '<object>', f4_a: '<array>', f5_d: '<boolean>'}, 'hNohWueJYcNG');
    var put_17 = objectStore_106.put({f0_p: '<object>', f1_a: '<null>', f2_u: '<number>', f3_y: '<string>', f4_y: '<null>', f5_u: '<boolean>'}, 'DoDywVTJ');
    var clear_18 = objectStore_106.clear();
    var add_20 = objectStore_106.add({f0_x: '<string>', f1_a: '<array>'}, 'OHRYUZH');
    var put_18 = objectStore_106.put({f0_y: '<boolean>', f1_e: '<number>'}, 'mGfns');
    var add_21 = objectStore_106.add({f0_d: '<number>', f1_j: '<object>', f2_t: '<string>', f3_w: '<null>', f4_i: '<array>'}, 'WaZiA');
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.only('HZZsVfeUjSO');
        get_8 = objectStore_106.get(KeyRange_36);
    }
    catch (e){
    }

    var add_22 = objectStore_106.add({f0_l: '<null>', f1_s: '<array>'}, 'gerrAZy');
    var getAllKeys_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('gerrAZy', 'HZZsVfeUjSO', true, false);
        getAllKeys_4 = objectStore_106.getAllKeys(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('mGfns');
        getAllKeys_4 = objectStore_106.getAllKeys(KeyRange_39);
    }

    var clear_19 = objectStore_106.clear();
    var count_9;
    try{
        KeyRange_40 = IDBKeyRange.bound('Jpx', 'BPneYsgINL', false, false);
        count_9 = objectStore_106.count(KeyRange_40);
    }
    catch (e){
    }

    var clear_20 = objectStore_106.clear();
    var clear_21 = objectStore_106.clear();
    var clear_22 = objectStore_106.clear();
    var put_19 = objectStore_106.put({f0_g: '<object>', f1_u: '<string>', f2_v: '<number>', f3_l: '<object>', f4_i: '<string>', f5_o: '<null>', f6_e: '<boolean>', f7_g: '<string>', f8_u: '<string>', f9_x: '<number>'}, 'GtvUczv');
    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.bound('qSZwaxMlvcT', 'BIo', true, true);
        get_9 = objectStore_106.get(KeyRange_42);
    }
    catch (e){
    }

    var put_20 = objectStore_106.put({f0_c: '<null>', f1_v: '<null>', f2_t: '<object>', f3_a: '<boolean>', f4_e: '<array>', f5_c: '<string>', f6_a: '<null>', f7_x: '<number>', f8_y: '<boolean>'}, 'LTFmExvRIid');
    var count_10 = objectStore_106.count();
    var put_21 = objectStore_106.put({f0_j: '<number>', f1_i: '<null>', f2_g: '<boolean>', f3_t: '<string>'}, 'kRKmAtXFzGzd');
    var clear_23 = objectStore_106.clear();
    var put_22 = objectStore_106.put({f0_x: '<null>', f1_c: '<string>'}, 'TdpzoTG');
    var getAll_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('DoDywVTJ', 'hMdAVOEoESHU', true, true);
        getAll_5 = objectStore_106.getAll(KeyRange_44, 1312067324);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('TdpzoTG');
        getAll_5 = objectStore_106.getAll(KeyRange_45);
    }

    var count_11;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('gerrAZy', true);
        count_11 = objectStore_106.count(KeyRange_46);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_106.getAllKeys();
    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.bound('lftcncQjS', 'mGfns', false, true);
        get_10 = objectStore_106.get(KeyRange_48);
    }
    catch (e){
    }

    var count_12 = objectStore_106.count();
    var count_13;
    try{
        KeyRange_50 = IDBKeyRange.only('GnPpoD');
        count_13 = objectStore_106.count(KeyRange_50);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_52 = IDBKeyRange.bound('BIo', 'hNohWueJYcNG', true, true);
        getAllKeys_6 = objectStore_106.getAllKeys(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('hMdAVOEoESHU');
        getAllKeys_6 = objectStore_106.getAllKeys(KeyRange_53);
    }

    var getAllKeys_7;
    try{
        KeyRange_54 = IDBKeyRange.bound('IdHjMaun', 'kRKmAtXFzGzd', true, false);
        getAllKeys_7 = objectStore_106.getAllKeys(KeyRange_54, 4105121757);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('GtvUczv');
        getAllKeys_7 = objectStore_106.getAllKeys(KeyRange_55);
    }

    var clear_24 = objectStore_106.clear();
    var get_11;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('qSZwaxMlvcT', true);
        get_11 = objectStore_106.get(KeyRange_56);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_58 = IDBKeyRange.only('IdHjMaun');
        getAll_6 = objectStore_106.getAll(KeyRange_58, 804583216);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('OHRYUZH');
        getAll_6 = objectStore_106.getAll(KeyRange_59);
    }

    var put_23 = objectStore_106.put({f0_f: '<null>', f1_g: '<object>', f2_t: '<object>', f3_u: '<array>', f4_h: '<string>'}, 'heosiwcCQO');
    var add_23 = objectStore_106.add({f0_t: '<string>', f1_b: '<string>', f2_t: '<null>', f3_l: '<string>', f4_z: '<array>', f5_m: '<null>', f6_v: '<array>', f7_a: '<array>', f8_a: '<number>'}, 'jNfhSUZ');
    var delete_3;
    try{
        KeyRange_60 = IDBKeyRange.bound('gerrAZy', 'lftcncQjS', true, true);
        delete_3 = objectStore_106.delete(KeyRange_60);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('NaL', false);
        getAllKeys_8 = objectStore_106.getAllKeys(KeyRange_62);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('OHRYUZH');
        getAllKeys_8 = objectStore_106.getAllKeys(KeyRange_63);
    }

    var count_14;
    try{
        KeyRange_64 = IDBKeyRange.only('DoDywVTJ');
        count_14 = objectStore_106.count(KeyRange_64);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_66 = IDBKeyRange.bound('Jpx', 'gerrAZy', false, true);
        get_12 = objectStore_106.get(KeyRange_66);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('hZhEPPwhRAvq', true);
        getAll_7 = objectStore_106.getAll(KeyRange_68);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('hZhEPPwhRAvq');
        getAll_7 = objectStore_106.getAll(KeyRange_69);
    }

    var put_24 = objectStore_106.put({f0_h: '<array>', f1_r: '<object>', f2_s: '<boolean>'}, 'ibVwQRy');
    var get_13;
    try{
        KeyRange_70 = IDBKeyRange.bound('gerrAZy', 'GnPpoD', false, true);
        get_13 = objectStore_106.get(KeyRange_70);
    }
    catch (e){
    }

    var put_25 = objectStore_106.put({f0_g: '<boolean>', f1_y: '<string>', f2_b: '<number>', f3_x: '<boolean>', f4_j: '<number>', f5_d: '<number>', f6_i: '<object>'}, 'KIy');
    var put_26 = objectStore_106.put({f0_y: '<object>', f1_e: '<number>', f2_k: '<null>', f3_n: '<object>', f4_b: '<array>', f5_g: '<string>', f6_a: '<object>', f7_f: '<boolean>', f8_o: '<number>', f9_n: '<boolean>'}, 'WCRsQGlSZxik');
    var getAll_8;
    try{
        KeyRange_72 = IDBKeyRange.only('heosiwcCQO');
        getAll_8 = objectStore_106.getAll(KeyRange_72);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('TdpzoTG');
        getAll_8 = objectStore_106.getAll(KeyRange_73);
    }

    var clear_25 = objectStore_106.clear();
    var get_14;
    try{
        KeyRange_74 = IDBKeyRange.bound('TdpzoTG', 'jNfhSUZ', false, false);
        get_14 = objectStore_106.get(KeyRange_74);
    }
    catch (e){
    }

    var clear_26 = objectStore_106.clear();
    var clear_27 = objectStore_106.clear();
    txn_8.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8.onerror = (event) => {
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