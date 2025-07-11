let db;
const openRequest = window.indexedDB.open('str_7124', 829156308037241)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_33', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var index_26 = objectStore_0.createIndex('index_26', 'test', {multiEntry: false});
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_34', {autoIncrement: false});
    var put_0 = objectStore_0.put({f0_m: '<number>', f1_i: '<null>', f2_b: '<object>', f3_c: '<object>', f4_z: '<number>', f5_w: '<null>', f6_t: '<null>'}, 'TokRlZMG');
    db.deleteObjectStore('objectStore_34')
    objectStore_0.deleteIndex('index_26')
    var index_27 = objectStore_0.createIndex('index_27', 'test', {unique: true, multiEntry: false});
    var objectStore_2 = db.createObjectStore('objectStore_35', {keypath: 'iCFtMsoKf', autoIncrement: true});
    var clear_2 = objectStore_2.clear();
    var index_28 = objectStore_0.createIndex('index_28', 'test');
    var add_0 = objectStore_0.add({f0_f: '<object>', f1_t: '<boolean>', f2_n: '<number>', f3_p: '<string>', f4_t: '<string>', f5_g: '<object>', f6_w: '<array>', f7_b: '<boolean>'}, 'NFJs');
    var put_1 = objectStore_0.put({f0_q: '<object>', f1_p: '<boolean>', f2_n: '<string>', f3_z: '<string>'}, 'tYAefcB');
    var count_0 = objectStore_0.count();
    var index_29 = objectStore_0.createIndex('index_29', 'test', {unique: true, multiEntry: true});
    var objectStore_3 = db.createObjectStore('objectStore_36', {autoIncrement: false});
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.bound('TokRlZMG', 'NFJs', false, false);
        count_1 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var index_30 = objectStore_2.createIndex('index_30', 'test', {unique: true});
    var objectStore_4 = db.createObjectStore('objectStore_37', {keypath: 'ENrtSRTS.Jjzrn.RECTMV.bfYTnO.VYLvIyusw.JxO.TKjBgUSSFtk.OIfRlv'});
    db.deleteObjectStore('objectStore_33')
    var clear_3 = objectStore_2.clear();
    var objectStore_5 = db.createObjectStore('objectStore_38', {keypath: 'BaobnVaNPf'});
    var put_2 = objectStore_4.put({f0_j: '<string>', f1_h: '<number>', f2_d: '<null>'}, 'ASllX');
    var count_2;
    try{
        KeyRange_2 = IDBKeyRange.only('ASllX');
        count_2 = objectStore_4.count(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.only('ASllX');
        delete_0 = objectStore_4.delete(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_3.add({f0_p: '<number>', f1_p: '<boolean>', f2_f: '<boolean>', f3_k: '<boolean>'}, 'nXVQhE');
    var add_2 = objectStore_4.add({f0_c: '<object>'}, 'IPFq');
    var objectStore_6 = db.createObjectStore('objectStore_39');
    var objectStore_7 = db.createObjectStore('objectStore_40');
    var objectStore_8 = db.createObjectStore('objectStore_41', {keypath: 'cQSOIZ', autoIncrement: false});
    var index_31 = objectStore_2.createIndex('index_31', 'test', {unique: true, multiEntry: false});
    var index_32 = objectStore_4.createIndex('index_32', 'test', {unique: true});
    var index_33 = objectStore_4.createIndex('index_33', 'test', {unique: false, multiEntry: true});
    var index_34 = objectStore_4.createIndex('index_34', 'test');
    var clear_4 = objectStore_6.clear();
    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('IPFq', 'IPFq', true, true);
        delete_1 = objectStore_4.delete(KeyRange_6);
    }
    catch (e){
    }

    var index_35 = objectStore_2.createIndex('index_35', 'test');
    var put_3 = objectStore_3.put({f0_p: '<object>', f1_e: '<array>', f2_c: '<array>', f3_o: '<number>', f4_l: '<array>', f5_x: '<array>', f6_p: '<number>', f7_h: '<number>'}, 'mAKXlrpiL');
    var add_3 = objectStore_8.add({f0_s: '<null>', f1_w: '<boolean>', f2_q: '<string>', f3_d: '<number>', f4_g: '<boolean>', f5_c: '<number>', f6_e: '<boolean>', f7_c: '<number>'}, 'pTEFEGR');
    var get_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('ASllX', 'ASllX', false, true);
        get_0 = objectStore_4.get(KeyRange_8);
    }
    catch (e){
    }

    var add_4 = objectStore_6.add({f0_u: '<boolean>', f1_m: '<boolean>', f2_g: '<null>', f3_z: '<object>', f4_j: '<null>'}, 'qkBnijW');
    var add_5 = objectStore_3.add({f0_j: '<array>', f1_z: '<string>', f2_z: '<string>', f3_l: '<object>', f4_p: '<null>', f5_l: '<array>'}, 'HxvIeoD');
    var put_4 = objectStore_3.put({f0_c: '<array>'}, 'YWXRK');
    var objectStore_9 = db.createObjectStore('objectStore_42', {keypath: 'PLgIThu'});
    var clear_5 = objectStore_5.clear();
    var add_6 = objectStore_9.add({f0_p: '<object>', f1_a: '<boolean>', f2_u: '<boolean>'}, 'DamIJfBVsj');
    var index_36 = objectStore_8.createIndex('index_36', 'test');
    var index_37 = objectStore_8.createIndex('index_37', 'test');
    var clear_6 = objectStore_4.clear();
    var objectStore_10 = db.createObjectStore('objectStore_43', {keypath: 'casHqgrJkJrJ'});
    var clear_7 = objectStore_2.clear();
    var getAllKeys_0 = objectStore_3.getAllKeys();
    var clear_8 = objectStore_8.clear();
    var clear_9 = objectStore_10.clear();
    var delete_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('DamIJfBVsj', false);
        delete_2 = objectStore_9.delete(KeyRange_10);
    }
    catch (e){
    }

    var add_7 = objectStore_3.add({f0_z: '<boolean>', f1_u: '<null>', f2_v: '<boolean>', f3_l: '<object>', f4_t: '<number>', f5_v: '<null>', f6_a: '<boolean>', f7_d: '<boolean>'}, 'RdSeOwBZ');
    var index_38 = objectStore_4.createIndex('index_38', 'test', {unique: true});
    var index_39 = objectStore_10.createIndex('index_39', 'test');
    var add_8 = objectStore_10.add({f0_d: '<object>', f1_w: '<null>', f2_v: '<string>', f3_i: '<boolean>', f4_a: '<object>'}, 'xUE');
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', false, true);
        count_3 = objectStore_6.count(KeyRange_12);
    }
    catch (e){
    }

    var index_40 = objectStore_9.createIndex('index_40', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_30 = db.transaction(['objectStore_42'], 'readwrite', {durability:"default"})
    var objectStore_42 = txn_30.objectStore('objectStore_42');
    var get_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('DamIJfBVsj', 'DamIJfBVsj', false, false);
        get_1 = objectStore_42.get(KeyRange_14);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('DamIJfBVsj', 'DamIJfBVsj', false, true);
        getAll_0 = objectStore_42.getAll(KeyRange_16, 1604454316);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('DamIJfBVsj');
        getAll_0 = objectStore_42.getAll(KeyRange_17);
    }

    var count_4 = objectStore_42.count();
    var getAll_1 = objectStore_42.getAll(748533611);
    var add_9 = objectStore_42.add({f0_b: '<null>', f1_f: '<boolean>', f2_t: '<number>', f3_h: '<null>', f4_f: '<number>', f5_w: '<object>', f6_t: '<null>', f7_i: '<string>', f8_e: '<number>'}, 'WuXMAigPbLyQ');
    var count_5 = objectStore_42.count();
    var delete_3;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('DamIJfBVsj', false);
        delete_3 = objectStore_42.delete(KeyRange_18);
    }
    catch (e){
    }

    var add_10 = objectStore_42.add({f0_i: '<string>'}, 'XWxtRoKXD');
    var get_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('XWxtRoKXD', 'DamIJfBVsj', false, true);
        get_2 = objectStore_42.get(KeyRange_20);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('XWxtRoKXD', true);
        delete_4 = objectStore_42.delete(KeyRange_22);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.only('DamIJfBVsj');
        get_3 = objectStore_42.get(KeyRange_24);
    }
    catch (e){
    }

    var clear_10 = objectStore_42.clear();
    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.only('WuXMAigPbLyQ');
        get_4 = objectStore_42.get(KeyRange_26);
    }
    catch (e){
    }

    var add_11 = objectStore_42.add({f0_w: '<object>', f1_s: '<boolean>', f2_f: '<array>', f3_c: '<array>'}, 'cABTwaDUl');
    var getAll_2;
    try{
        KeyRange_28 = IDBKeyRange.only('cABTwaDUl');
        getAll_2 = objectStore_42.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('WuXMAigPbLyQ');
        getAll_2 = objectStore_42.getAll(KeyRange_29);
    }

    var getAll_3 = objectStore_42.getAll(3430196730);
    var clear_11 = objectStore_42.clear();
    var add_12 = objectStore_42.add({f0_c: '<number>', f1_r: '<number>', f2_m: '<object>'}, 'EMyjryRscxY');
    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('DamIJfBVsj', 'EMyjryRscxY', true, true);
        get_5 = objectStore_42.get(KeyRange_30);
    }
    catch (e){
    }

    var add_13 = objectStore_42.add({f0_n: '<number>', f1_i: '<boolean>'}, 'JwuO');
    var delete_5;
    try{
        KeyRange_32 = IDBKeyRange.bound('DamIJfBVsj', 'cABTwaDUl', true, false);
        delete_5 = objectStore_42.delete(KeyRange_32);
    }
    catch (e){
    }

    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_31 = db.transaction(['objectStore_35', 'objectStore_39'], 'readwrite', {durability:"relaxed"})
    var objectStore_35 = txn_31.objectStore('objectStore_35');
    var put_5 = objectStore_35.put({f0_p: '<string>', f1_v: '<string>', f2_t: '<array>', f3_s: '<boolean>', f4_u: '<object>', f5_i: '<number>'}, 'fYK');
    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('fYK', 'fYK', false, true);
        get_6 = objectStore_35.get(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_36 = IDBKeyRange.bound('fYK', 'fYK', false, false);
        getAllKeys_1 = objectStore_35.getAllKeys(KeyRange_36, 2577040178);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('fYK');
        getAllKeys_1 = objectStore_35.getAllKeys(KeyRange_37);
    }

    var clear_12 = objectStore_35.clear();
    var count_6;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('fYK', false);
        count_6 = objectStore_35.count(KeyRange_38);
    }
    catch (e){
    }

    var count_7 = objectStore_35.count();
    var add_14 = objectStore_35.add({f0_g: '<boolean>', f1_p: '<array>', f2_f: '<boolean>', f3_s: '<boolean>', f4_t: '<boolean>', f5_m: '<array>', f6_v: '<array>', f7_y: '<array>'}, 'UwqicQZ');
    var add_15 = objectStore_35.add({f0_s: '<number>', f1_z: '<object>', f2_e: '<null>', f3_g: '<object>', f4_x: '<string>', f5_h: '<array>', f6_f: '<boolean>', f7_v: '<null>'}, 'fQYEf');
    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.bound('fYK', 'fYK', false, false);
        get_7 = objectStore_35.get(KeyRange_40);
    }
    catch (e){
    }

    var add_16 = objectStore_35.add({f0_p: '<object>', f1_e: '<null>', f2_o: '<array>', f3_a: '<string>', f4_u: '<string>', f5_e: '<string>', f6_g: '<array>', f7_t: '<string>', f8_q: '<number>'}, 'zANRe');
    var count_8;
    try{
        KeyRange_42 = IDBKeyRange.bound('zANRe', 'fYK', false, false);
        count_8 = objectStore_35.count(KeyRange_42);
    }
    catch (e){
    }

    var add_17 = objectStore_35.add({f0_k: '<string>'}, 'VhxRkUnvImyC');
    var clear_13 = objectStore_35.clear();
    var put_6 = objectStore_35.put({f0_b: '<array>'}, 'evOdG');
    var delete_6;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('fYK', false);
        delete_6 = objectStore_35.delete(KeyRange_44);
    }
    catch (e){
    }

    var getAll_4 = objectStore_35.getAll(4088344606);
    var put_7 = objectStore_35.put({f0_e: '<null>', f1_j: '<boolean>', f2_z: '<string>', f3_h: '<number>', f4_t: '<number>', f5_w: '<number>', f6_l: '<string>', f7_l: '<number>'}, 'Hjs');
    var index_0 = objectStore_35.index('index_35');
    var get_8;
    try{
        KeyRange_46 = IDBKeyRange.only('fYK');
        get_8 = objectStore_35.get(KeyRange_46);
    }
    catch (e){
    }

    var count_9 = objectStore_35.count();
    var get_9;
    try{
        KeyRange_48 = IDBKeyRange.only('zANRe');
        get_9 = objectStore_35.get(KeyRange_48);
    }
    catch (e){
    }

    txn_31.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_32 = db.transaction(['objectStore_41'], 'readwrite', {durability:"relaxed"})
    var objectStore_41 = txn_32.objectStore('objectStore_41');
    var get_10;
    try{
        KeyRange_50 = IDBKeyRange.bound('pTEFEGR', 'pTEFEGR', false, true);
        get_10 = objectStore_41.get(KeyRange_50);
    }
    catch (e){
    }

    var add_18 = objectStore_41.add({f0_q: '<null>', f1_i: '<object>', f2_j: '<string>', f3_k: '<array>', f4_n: '<string>', f5_c: '<object>', f6_m: '<string>', f7_q: '<object>'}, 'AcAllY');
    var get_11;
    try{
        KeyRange_52 = IDBKeyRange.bound('AcAllY', 'pTEFEGR', false, true);
        get_11 = objectStore_41.get(KeyRange_52);
    }
    catch (e){
    }

    var put_8 = objectStore_41.put({f0_u: '<object>', f1_d: '<array>', f2_m: '<boolean>', f3_v: '<string>', f4_e: '<number>', f5_n: '<string>', f6_u: '<boolean>'}, 'pWWizKGuP');
    var add_19 = objectStore_41.add({f0_c: '<string>', f1_i: '<null>', f2_s: '<string>', f3_s: '<boolean>', f4_s: '<string>', f5_t: '<string>', f6_p: '<null>'}, 'MmLaEkdluYp');
    var add_20 = objectStore_41.add({f0_t: '<string>', f1_a: '<object>', f2_z: '<number>', f3_d: '<number>', f4_b: '<number>', f5_e: '<boolean>', f6_c: '<number>', f7_b: '<boolean>', f8_c: '<number>', f9_m: '<number>'}, 'rdnZODA');
    var count_10;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('MmLaEkdluYp', false);
        count_10 = objectStore_41.count(KeyRange_54);
    }
    catch (e){
    }

    var add_21 = objectStore_41.add({f0_j: '<array>', f1_z: '<number>'}, 'AMGn');
    var put_9 = objectStore_41.put({f0_r: '<array>', f1_g: '<boolean>', f2_u: '<object>', f3_i: '<null>', f4_o: '<string>', f5_k: '<null>', f6_b: '<array>'}, 'EXSy');
    var delete_7;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('rdnZODA', false);
        delete_7 = objectStore_41.delete(KeyRange_56);
    }
    catch (e){
    }

    var put_10 = objectStore_41.put({f0_o: '<boolean>', f1_m: '<null>', f2_r: '<null>', f3_m: '<boolean>', f4_m: '<boolean>', f5_r: '<string>', f6_g: '<number>', f7_t: '<null>', f8_a: '<object>'}, 'mPSIKKjKeLy');
    var clear_14 = objectStore_41.clear();
    var clear_15 = objectStore_41.clear();
    var add_22 = objectStore_41.add({f0_p: '<boolean>', f1_r: '<array>', f2_b: '<string>', f3_z: '<null>', f4_q: '<object>', f5_m: '<boolean>', f6_v: '<null>', f7_h: '<number>', f8_l: '<null>', f9_k: '<array>'}, 'GRchajIbEMKU');
    var add_23 = objectStore_41.add({f0_u: '<array>', f1_s: '<number>', f2_s: '<number>', f3_p: '<array>', f4_q: '<string>', f5_m: '<boolean>', f6_f: '<boolean>'}, 'JKahra');
    var clear_16 = objectStore_41.clear();
    var get_12;
    try{
        KeyRange_58 = IDBKeyRange.bound('GRchajIbEMKU', 'JKahra', true, true);
        get_12 = objectStore_41.get(KeyRange_58);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_41.getAllKeys();
    var add_24 = objectStore_41.add({f0_f: '<number>', f1_q: '<boolean>', f2_n: '<string>'}, 'ftQI');
    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_32.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_33 = db.transaction(['objectStore_37'], 'readwrite', {durability:"relaxed"})
    var objectStore_37 = txn_33.objectStore('objectStore_37');
    var put_11 = objectStore_37.put({f0_u: '<null>', f1_u: '<array>', f2_j: '<string>', f3_w: '<object>', f4_u: '<object>', f5_h: '<array>'}, 'RUIz');
    var getAllKeys_3 = objectStore_37.getAllKeys();
    var delete_8;
    try{
        KeyRange_60 = IDBKeyRange.bound('ASllX', 'RUIz', false, true);
        delete_8 = objectStore_37.delete(KeyRange_60);
    }
    catch (e){
    }

    var clear_17 = objectStore_37.clear();
    var count_11 = objectStore_37.count();
    var count_12 = objectStore_37.count();
    var getAll_5 = objectStore_37.getAll();
    var delete_9;
    try{
        KeyRange_62 = IDBKeyRange.only('ASllX');
        delete_9 = objectStore_37.delete(KeyRange_62);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_64 = IDBKeyRange.only('ASllX');
        get_13 = objectStore_37.get(KeyRange_64);
    }
    catch (e){
    }

    var getAll_6 = objectStore_37.getAll(3653892234);
    var add_25 = objectStore_37.add({f0_k: '<boolean>'}, 'MEEddxNBFGLq');
    var getAllKeys_4 = objectStore_37.getAllKeys();
    var getAll_7;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('MEEddxNBFGLq', false);
        getAll_7 = objectStore_37.getAll(KeyRange_66);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('ASllX');
        getAll_7 = objectStore_37.getAll(KeyRange_67);
    }

    var add_26 = objectStore_37.add({f0_n: '<array>', f1_e: '<string>', f2_g: '<string>', f3_j: '<object>', f4_q: '<string>', f5_m: '<string>'}, 'MiMkhZUirC');
    var clear_18 = objectStore_37.clear();
    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('MiMkhZUirC', false);
        get_14 = objectStore_37.get(KeyRange_68);
    }
    catch (e){
    }

    var add_27 = objectStore_37.add({f0_y: '<array>', f1_z: '<number>', f2_l: '<boolean>', f3_d: '<number>', f4_m: '<array>', f5_a: '<null>', f6_i: '<boolean>'}, 'MbnTeUGSTv');
    var delete_10;
    try{
        KeyRange_70 = IDBKeyRange.bound('MiMkhZUirC', 'MbnTeUGSTv', true, true);
        delete_10 = objectStore_37.delete(KeyRange_70);
    }
    catch (e){
    }

    var add_28 = objectStore_37.add({f0_g: '<boolean>', f1_p: '<null>', f2_x: '<boolean>', f3_r: '<number>', f4_r: '<null>'}, 'SDECR');
    var count_13 = objectStore_37.count();
    txn_33.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_33.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_34 = db.transaction(['objectStore_40', 'objectStore_36', 'objectStore_38', 'objectStore_37'], 'readwrite', {durability:"strict"})
    var objectStore_38 = txn_34.objectStore('objectStore_38');
    var put_12 = objectStore_38.put({f0_y: '<array>', f1_j: '<array>', f2_z: '<string>', f3_w: '<number>', f4_l: '<string>', f5_t: '<object>'}, 'vYFyfe');
    var put_13 = objectStore_38.put({f0_r: '<boolean>', f1_v: '<object>', f2_s: '<number>', f3_k: '<string>', f4_m: '<string>', f5_m: '<null>', f6_w: '<boolean>', f7_s: '<boolean>', f8_s: '<array>'}, 'gatfKoa');
    var delete_11;
    try{
        KeyRange_72 = IDBKeyRange.only('gatfKoa');
        delete_11 = objectStore_38.delete(KeyRange_72);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_74 = IDBKeyRange.bound('gatfKoa', 'gatfKoa', true, false);
        getAll_8 = objectStore_38.getAll(KeyRange_74, 1323593983);
    }
    catch (e){
        KeyRange_75 = IDBKeyRange.only('gatfKoa');
        getAll_8 = objectStore_38.getAll(KeyRange_75);
    }

    var get_15;
    try{
        KeyRange_76 = IDBKeyRange.bound('vYFyfe', 'vYFyfe', true, true);
        get_15 = objectStore_38.get(KeyRange_76);
    }
    catch (e){
    }

    var clear_19 = objectStore_38.clear();
    var put_14 = objectStore_38.put({f0_e: '<array>', f1_j: '<object>', f2_v: '<number>', f3_j: '<object>', f4_z: '<number>', f5_c: '<array>'}, 'bExrceF');
    var delete_12;
    try{
        KeyRange_78 = IDBKeyRange.bound('vYFyfe', 'vYFyfe', true, false);
        delete_12 = objectStore_38.delete(KeyRange_78);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_80 = IDBKeyRange.bound('gatfKoa', 'gatfKoa', true, false);
        get_16 = objectStore_38.get(KeyRange_80);
    }
    catch (e){
    }

    var clear_20 = objectStore_38.clear();
    var clear_21 = objectStore_38.clear();
    var add_29 = objectStore_38.add({f0_y: '<number>', f1_n: '<string>', f2_v: '<boolean>', f3_s: '<boolean>', f4_a: '<null>', f5_n: '<null>', f6_g: '<object>'}, 'GikyOllVXnZ');
    var clear_22 = objectStore_38.clear();
    var add_30 = objectStore_38.add({f0_t: '<boolean>', f1_k: '<null>', f2_z: '<array>', f3_r: '<boolean>', f4_b: '<array>', f5_g: '<null>', f6_f: '<number>', f7_u: '<null>', f8_f: '<string>'}, 'GMnITaVutXgR');
    var clear_23 = objectStore_38.clear();
    var count_14;
    try{
        KeyRange_82 = IDBKeyRange.bound('vYFyfe', 'vYFyfe', false, false);
        count_14 = objectStore_38.count(KeyRange_82);
    }
    catch (e){
    }

    var delete_13;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('GMnITaVutXgR', true);
        delete_13 = objectStore_38.delete(KeyRange_84);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_86 = IDBKeyRange.bound('bExrceF', 'bExrceF', true, true);
        count_15 = objectStore_38.count(KeyRange_86);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('GikyOllVXnZ', true);
        getAll_9 = objectStore_38.getAll(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('vYFyfe');
        getAll_9 = objectStore_38.getAll(KeyRange_89);
    }

    var add_31 = objectStore_38.add({f0_f: '<string>', f1_m: '<number>', f2_t: '<boolean>', f3_s: '<string>', f4_l: '<null>', f5_q: '<boolean>'}, 'PLEzzeT');
    var count_16;
    try{
        KeyRange_90 = IDBKeyRange.bound('GikyOllVXnZ', 'PLEzzeT', true, false);
        count_16 = objectStore_38.count(KeyRange_90);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_92 = IDBKeyRange.bound('vYFyfe', 'GikyOllVXnZ', false, false);
        getAll_10 = objectStore_38.getAll(KeyRange_92);
    }
    catch (e){
        KeyRange_93 = IDBKeyRange.only('GikyOllVXnZ');
        getAll_10 = objectStore_38.getAll(KeyRange_93);
    }

    txn_34.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_34.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_34.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_35 = db.transaction(['objectStore_36', 'objectStore_40', 'objectStore_39', 'objectStore_41'], 'readonly', {durability:"strict"})
    var objectStore_39 = txn_35.objectStore('objectStore_39');
    var count_17;
    try{
        KeyRange_94 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', true, true);
        count_17 = objectStore_39.count(KeyRange_94);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_96 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', true, true);
        count_18 = objectStore_39.count(KeyRange_96);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_98 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', false, true);
        get_17 = objectStore_39.get(KeyRange_98);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_100 = IDBKeyRange.only('qkBnijW');
        get_18 = objectStore_39.get(KeyRange_100);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('qkBnijW', true);
        get_19 = objectStore_39.get(KeyRange_102);
    }
    catch (e){
    }

    var getAll_11;
    try{
        KeyRange_104 = IDBKeyRange.only('qkBnijW');
        getAll_11 = objectStore_39.getAll(KeyRange_104);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('qkBnijW');
        getAll_11 = objectStore_39.getAll(KeyRange_105);
    }

    var getAllKeys_5 = objectStore_39.getAllKeys();
    var getAllKeys_6;
    try{
        KeyRange_106 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', true, false);
        getAllKeys_6 = objectStore_39.getAllKeys(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('qkBnijW');
        getAllKeys_6 = objectStore_39.getAllKeys(KeyRange_107);
    }

    var get_20;
    try{
        KeyRange_108 = IDBKeyRange.only('qkBnijW');
        get_20 = objectStore_39.get(KeyRange_108);
    }
    catch (e){
    }

    var count_19 = objectStore_39.count();
    var count_20;
    try{
        KeyRange_110 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', false, true);
        count_20 = objectStore_39.count(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_7 = objectStore_39.getAllKeys(4095201217);
    var count_21 = objectStore_39.count();
    var getAll_12 = objectStore_39.getAll();
    var getAllKeys_8;
    try{
        KeyRange_112 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', true, false);
        getAllKeys_8 = objectStore_39.getAllKeys(KeyRange_112, 3859032428);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('qkBnijW');
        getAllKeys_8 = objectStore_39.getAllKeys(KeyRange_113);
    }

    var get_21;
    try{
        KeyRange_114 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', true, true);
        get_21 = objectStore_39.get(KeyRange_114);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_116 = IDBKeyRange.bound('qkBnijW', 'qkBnijW', false, true);
        get_22 = objectStore_39.get(KeyRange_116);
    }
    catch (e){
    }

    var count_22 = objectStore_39.count();
    var count_23;
    try{
        KeyRange_118 = IDBKeyRange.only('qkBnijW');
        count_23 = objectStore_39.count(KeyRange_118);
    }
    catch (e){
    }

    txn_35.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_35.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_35.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_36 = db.transaction(['objectStore_37', 'objectStore_42', 'objectStore_35'], 'readwrite', {durability:"relaxed"})
    var objectStore_42 = txn_36.objectStore('objectStore_42');
    var delete_14;
    try{
        KeyRange_120 = IDBKeyRange.bound('EMyjryRscxY', 'JwuO', false, true);
        delete_14 = objectStore_42.delete(KeyRange_120);
    }
    catch (e){
    }

    var put_15 = objectStore_42.put({f0_t: '<array>', f1_y: '<boolean>', f2_s: '<string>', f3_x: '<number>'}, 'KkLpfgH');
    var delete_15;
    try{
        KeyRange_122 = IDBKeyRange.bound('XWxtRoKXD', 'EMyjryRscxY', false, false);
        delete_15 = objectStore_42.delete(KeyRange_122);
    }
    catch (e){
    }

    var index_1 = objectStore_42.index('index_40');
    var get_23;
    try{
        KeyRange_124 = IDBKeyRange.only('EMyjryRscxY');
        get_23 = objectStore_42.get(KeyRange_124);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('EMyjryRscxY', true);
        get_24 = objectStore_42.get(KeyRange_126);
    }
    catch (e){
    }

    var getAll_13;
    try{
        KeyRange_128 = IDBKeyRange.bound('DamIJfBVsj', 'cABTwaDUl', false, false);
        getAll_13 = objectStore_42.getAll(KeyRange_128);
    }
    catch (e){
        KeyRange_129 = IDBKeyRange.only('JwuO');
        getAll_13 = objectStore_42.getAll(KeyRange_129);
    }

    var get_25;
    try{
        KeyRange_130 = IDBKeyRange.bound('XWxtRoKXD', 'JwuO', false, true);
        get_25 = objectStore_42.get(KeyRange_130);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_132 = IDBKeyRange.bound('DamIJfBVsj', 'KkLpfgH', false, false);
        get_26 = objectStore_42.get(KeyRange_132);
    }
    catch (e){
    }

    var delete_16;
    try{
        KeyRange_134 = IDBKeyRange.bound('cABTwaDUl', 'KkLpfgH', false, false);
        delete_16 = objectStore_42.delete(KeyRange_134);
    }
    catch (e){
    }

    var add_32 = objectStore_42.add({f0_w: '<string>', f1_j: '<object>', f2_s: '<object>', f3_p: '<array>', f4_n: '<object>', f5_s: '<string>', f6_b: '<null>'}, 'OqI');
    var get_27;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('cABTwaDUl', true);
        get_27 = objectStore_42.get(KeyRange_136);
    }
    catch (e){
    }

    var add_33 = objectStore_42.add({f0_b: '<boolean>', f1_w: '<null>', f2_p: '<string>', f3_x: '<object>', f4_y: '<string>', f5_p: '<object>'}, 'ruk');
    var getAll_14 = objectStore_42.getAll(1563750010);
    var count_24 = objectStore_42.count();
    var add_34 = objectStore_42.add({f0_z: '<array>', f1_g: '<number>', f2_f: '<null>', f3_b: '<null>', f4_f: '<string>', f5_u: '<number>', f6_f: '<array>', f7_n: '<boolean>', f8_q: '<null>', f9_t: '<boolean>'}, 'Mnf');
    var getAllKeys_9 = objectStore_42.getAllKeys();
    var add_35 = objectStore_42.add({f0_s: '<null>', f1_h: '<boolean>', f2_h: '<null>', f3_x: '<array>'}, 'bfvCPLL');
    var put_16 = objectStore_42.put({f0_g: '<null>'}, 'GXvhPAGB');
    var count_25 = objectStore_42.count();
    var get_28;
    try{
        KeyRange_138 = IDBKeyRange.only('ruk');
        get_28 = objectStore_42.get(KeyRange_138);
    }
    catch (e){
    }

    txn_36.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_36.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_37 = db.transaction(['objectStore_43', 'objectStore_36'], 'readwrite', {durability:"relaxed"})
    var objectStore_43 = txn_37.objectStore('objectStore_43');
    var get_29;
    try{
        KeyRange_140 = IDBKeyRange.only('xUE');
        get_29 = objectStore_43.get(KeyRange_140);
    }
    catch (e){
    }

    var add_36 = objectStore_43.add({f0_i: '<array>', f1_s: '<null>', f2_w: '<string>'}, 'PCbo');
    var clear_24 = objectStore_43.clear();
    var delete_17;
    try{
        KeyRange_142 = IDBKeyRange.bound('PCbo', 'xUE', false, false);
        delete_17 = objectStore_43.delete(KeyRange_142);
    }
    catch (e){
    }

    var put_17 = objectStore_43.put({f0_h: '<boolean>', f1_b: '<object>', f2_a: '<null>', f3_d: '<array>', f4_j: '<boolean>', f5_i: '<object>', f6_v: '<boolean>', f7_y: '<number>'}, 'mHKNpcquLnqB');
    var clear_25 = objectStore_43.clear();
    var count_26;
    try{
        KeyRange_144 = IDBKeyRange.bound('xUE', 'xUE', false, true);
        count_26 = objectStore_43.count(KeyRange_144);
    }
    catch (e){
    }

    var add_37 = objectStore_43.add({f0_p: '<array>', f1_f: '<string>', f2_d: '<number>'}, 'XqRLvn');
    var get_30;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('xUE', true);
        get_30 = objectStore_43.get(KeyRange_146);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_148 = IDBKeyRange.bound('xUE', 'PCbo', true, true);
        count_27 = objectStore_43.count(KeyRange_148);
    }
    catch (e){
    }

    var count_28 = objectStore_43.count();
    var count_29;
    try{
        KeyRange_150 = IDBKeyRange.bound('xUE', 'mHKNpcquLnqB', true, true);
        count_29 = objectStore_43.count(KeyRange_150);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_152 = IDBKeyRange.bound('XqRLvn', 'mHKNpcquLnqB', false, false);
        get_31 = objectStore_43.get(KeyRange_152);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_154 = IDBKeyRange.only('PCbo');
        get_32 = objectStore_43.get(KeyRange_154);
    }
    catch (e){
    }

    var index_2 = objectStore_43.index('index_39');
    var add_38 = objectStore_43.add({f0_x: '<null>', f1_p: '<array>', f2_u: '<null>', f3_b: '<boolean>', f4_z: '<number>', f5_d: '<string>', f6_b: '<boolean>', f7_t: '<object>', f8_a: '<array>'}, 'TsPKOnyp');
    var get_33;
    try{
        KeyRange_156 = IDBKeyRange.bound('xUE', 'TsPKOnyp', true, true);
        get_33 = objectStore_43.get(KeyRange_156);
    }
    catch (e){
    }

    var getAll_15 = objectStore_43.getAll();
    var getAll_16 = objectStore_43.getAll(3178477969);
    var delete_18;
    try{
        KeyRange_158 = IDBKeyRange.only('TsPKOnyp');
        delete_18 = objectStore_43.delete(KeyRange_158);
    }
    catch (e){
    }

    var add_39 = objectStore_43.add({f0_b: '<array>', f1_o: '<object>', f2_t: '<null>'}, 'jomnG');
    var delete_19;
    try{
        KeyRange_160 = IDBKeyRange.bound('XqRLvn', 'XqRLvn', false, false);
        delete_19 = objectStore_43.delete(KeyRange_160);
    }
    catch (e){
    }

    txn_37.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_37.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_37.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_38 = db.transaction(['objectStore_35', 'objectStore_38', 'objectStore_36', 'objectStore_43', 'objectStore_37', 'objectStore_42'], 'readonly', {durability:"relaxed"})
    var objectStore_38 = txn_38.objectStore('objectStore_38');
    var count_30;
    try{
        KeyRange_162 = IDBKeyRange.only('PLEzzeT');
        count_30 = objectStore_38.count(KeyRange_162);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_164 = IDBKeyRange.bound('PLEzzeT', 'PLEzzeT', true, true);
        get_34 = objectStore_38.get(KeyRange_164);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_166 = IDBKeyRange.bound('PLEzzeT', 'gatfKoa', true, true);
        get_35 = objectStore_38.get(KeyRange_166);
    }
    catch (e){
    }

    var count_31 = objectStore_38.count();
    var count_32 = objectStore_38.count();
    var count_33;
    try{
        KeyRange_168 = IDBKeyRange.only('bExrceF');
        count_33 = objectStore_38.count(KeyRange_168);
    }
    catch (e){
    }

    var get_36;
    try{
        KeyRange_170 = IDBKeyRange.bound('GikyOllVXnZ', 'GikyOllVXnZ', true, false);
        get_36 = objectStore_38.get(KeyRange_170);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_172 = IDBKeyRange.lowerBound('vYFyfe', false);
        get_37 = objectStore_38.get(KeyRange_172);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_174 = IDBKeyRange.bound('vYFyfe', 'bExrceF', true, false);
        getAllKeys_10 = objectStore_38.getAllKeys(KeyRange_174, 3454279702);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('GMnITaVutXgR');
        getAllKeys_10 = objectStore_38.getAllKeys(KeyRange_175);
    }

    var get_38;
    try{
        KeyRange_176 = IDBKeyRange.lowerBound('vYFyfe', false);
        get_38 = objectStore_38.get(KeyRange_176);
    }
    catch (e){
    }

    var get_39;
    try{
        KeyRange_178 = IDBKeyRange.bound('gatfKoa', 'PLEzzeT', true, false);
        get_39 = objectStore_38.get(KeyRange_178);
    }
    catch (e){
    }

    var getAllKeys_11 = objectStore_38.getAllKeys();
    var getAll_17 = objectStore_38.getAll(3933364079);
    var count_34 = objectStore_38.count();
    var count_35;
    try{
        KeyRange_180 = IDBKeyRange.bound('GMnITaVutXgR', 'GMnITaVutXgR', true, true);
        count_35 = objectStore_38.count(KeyRange_180);
    }
    catch (e){
    }

    var count_36;
    try{
        KeyRange_182 = IDBKeyRange.only('GikyOllVXnZ');
        count_36 = objectStore_38.count(KeyRange_182);
    }
    catch (e){
    }

    txn_38.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_38.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_38.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_39 = db.transaction(['objectStore_36'], 'readonly', {durability:"default"})
    var objectStore_36 = txn_39.objectStore('objectStore_36');
    var count_37 = objectStore_36.count();
    var count_38 = objectStore_36.count();
    var getAll_18;
    try{
        KeyRange_184 = IDBKeyRange.only('nXVQhE');
        getAll_18 = objectStore_36.getAll(KeyRange_184);
    }
    catch (e){
        KeyRange_185 = IDBKeyRange.only('mAKXlrpiL');
        getAll_18 = objectStore_36.getAll(KeyRange_185);
    }

    var get_40;
    try{
        KeyRange_186 = IDBKeyRange.lowerBound('RdSeOwBZ', false);
        get_40 = objectStore_36.get(KeyRange_186);
    }
    catch (e){
    }

    var get_41;
    try{
        KeyRange_188 = IDBKeyRange.bound('HxvIeoD', 'HxvIeoD', false, false);
        get_41 = objectStore_36.get(KeyRange_188);
    }
    catch (e){
    }

    var getAll_19;
    try{
        KeyRange_190 = IDBKeyRange.only('HxvIeoD');
        getAll_19 = objectStore_36.getAll(KeyRange_190);
    }
    catch (e){
        KeyRange_191 = IDBKeyRange.only('RdSeOwBZ');
        getAll_19 = objectStore_36.getAll(KeyRange_191);
    }

    var get_42;
    try{
        KeyRange_192 = IDBKeyRange.bound('RdSeOwBZ', 'YWXRK', false, true);
        get_42 = objectStore_36.get(KeyRange_192);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_36.getAllKeys();
    var getAll_20 = objectStore_36.getAll(984052737);
    var get_43;
    try{
        KeyRange_194 = IDBKeyRange.lowerBound('mAKXlrpiL', false);
        get_43 = objectStore_36.get(KeyRange_194);
    }
    catch (e){
    }

    var count_39;
    try{
        KeyRange_196 = IDBKeyRange.only('nXVQhE');
        count_39 = objectStore_36.count(KeyRange_196);
    }
    catch (e){
    }

    var get_44;
    try{
        KeyRange_198 = IDBKeyRange.bound('YWXRK', 'nXVQhE', false, true);
        get_44 = objectStore_36.get(KeyRange_198);
    }
    catch (e){
    }

    var count_40;
    try{
        KeyRange_200 = IDBKeyRange.bound('RdSeOwBZ', 'mAKXlrpiL', false, true);
        count_40 = objectStore_36.count(KeyRange_200);
    }
    catch (e){
    }

    var get_45;
    try{
        KeyRange_202 = IDBKeyRange.bound('HxvIeoD', 'HxvIeoD', true, false);
        get_45 = objectStore_36.get(KeyRange_202);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_204 = IDBKeyRange.lowerBound('YWXRK', false);
        get_46 = objectStore_36.get(KeyRange_204);
    }
    catch (e){
    }

    txn_39.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_39.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_39.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7124')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};