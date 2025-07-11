let db;
const openRequest = window.indexedDB.open('str_2700', 1934672457958139)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_17', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_18', {keypath: 'vzVKDb.CsRMTfmYTqG.OrId.KcWOawwlVL.xxbJbZhu.CsPaGeYEY', autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    var put_0 = objectStore_0.put({f0_q: '<boolean>', f1_r: '<object>', f2_o: '<boolean>', f3_o: '<object>', f4_o: '<array>', f5_p: '<object>', f6_a: '<null>', f7_d: '<null>'}, 'QCfVaLPaCt');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('QCfVaLPaCt');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_19', {keypath: 'jhFcAKcd', autoIncrement: true});
    var put_1 = objectStore_2.put({f0_t: '<null>'}, 'eYEhvN');
    var getAllKeys_0 = objectStore_2.getAllKeys();
    var count_0 = objectStore_0.count();
    var objectStore_3 = db.createObjectStore('objectStore_20', {autoIncrement: false});
    var objectStore_4 = db.createObjectStore('objectStore_21', {keypath: 'jPXPqaqfTuRC'});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('QCfVaLPaCt', 'QCfVaLPaCt', true, false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_22');
    var add_0 = objectStore_4.add({f0_b: '<null>', f1_t: '<string>', f2_w: '<number>', f3_u: '<boolean>', f4_y: '<array>', f5_g: '<boolean>', f6_t: '<number>', f7_q: '<string>'}, 'PeMd');
    var objectStore_6 = db.createObjectStore('objectStore_23', {autoIncrement: false});
    var add_1 = objectStore_3.add({f0_y: '<string>', f1_z: '<array>', f2_v: '<null>', f3_h: '<array>', f4_x: '<array>'}, 'YSbCEuJag');
    var objectStore_7 = db.createObjectStore('objectStore_24', {keypath: 'eMmsvJe'});
    var add_2 = objectStore_7.add({f0_w: '<null>', f1_i: '<array>', f2_b: '<array>', f3_x: '<object>', f4_f: '<boolean>', f5_x: '<null>'}, 'WMcGRZ');
    var objectStore_8 = db.createObjectStore('objectStore_25');
    var add_3 = objectStore_5.add({f0_h: '<boolean>', f1_r: '<null>', f2_z: '<boolean>', f3_q: '<number>'}, 'OFVaC');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', true, true);
        get_2 = objectStore_3.get(KeyRange_4);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('OFVaC', false);
        count_1 = objectStore_5.count(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('QCfVaLPaCt', 'QCfVaLPaCt', true, true);
        getAll_0 = objectStore_0.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('QCfVaLPaCt');
        getAll_0 = objectStore_0.getAll(KeyRange_9);
    }

    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        count_2 = objectStore_3.count(KeyRange_10);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('OFVaC', 'OFVaC', false, true);
        count_3 = objectStore_5.count(KeyRange_12);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('QCfVaLPaCt', 'QCfVaLPaCt', false, false);
        count_4 = objectStore_0.count(KeyRange_14);
    }
    catch (e){
    }

    var index_18 = objectStore_6.createIndex('index_18', 'test', {unique: true});
    var clear_1 = objectStore_7.clear();
    var clear_2 = objectStore_5.clear();
    var clear_3 = objectStore_0.clear();
    var index_19 = objectStore_0.createIndex('index_19', 'test', {multiEntry: false});
    var count_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('eYEhvN', 'eYEhvN', true, false);
        count_5 = objectStore_2.count(KeyRange_16);
    }
    catch (e){
    }

    var put_2 = objectStore_6.put({f0_s: '<object>', f1_k: '<object>', f2_b: '<string>'}, 'UbyJlGMl');
    var clear_4 = objectStore_1.clear();
    var clear_5 = objectStore_4.clear();
    var objectStore_9 = db.createObjectStore('objectStore_26');
    var getAllKeys_1;
    try{
        KeyRange_18 = IDBKeyRange.bound('UbyJlGMl', 'UbyJlGMl', false, false);
        getAllKeys_1 = objectStore_6.getAllKeys(KeyRange_18, 2983979648);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('UbyJlGMl');
        getAllKeys_1 = objectStore_6.getAllKeys(KeyRange_19);
    }

    var clear_6 = objectStore_4.clear();
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.only('UbyJlGMl');
        get_3 = objectStore_6.get(KeyRange_20);
    }
    catch (e){
    }

    var put_3 = objectStore_5.put({f0_u: '<number>', f1_e: '<number>', f2_o: '<array>'}, 'dQwwXuBW');
    var put_4 = objectStore_4.put({f0_t: '<boolean>', f1_k: '<object>', f2_d: '<boolean>', f3_v: '<string>', f4_q: '<boolean>', f5_h: '<number>'}, 'gao');
    var index_20 = objectStore_4.createIndex('index_20', 'test', {multiEntry: false});
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', true, true);
        get_4 = objectStore_3.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_2.getAllKeys();
    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('UbyJlGMl', 'UbyJlGMl', true, false);
        count_6 = objectStore_6.count(KeyRange_24);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('PeMd', true);
        count_7 = objectStore_4.count(KeyRange_26);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_27', {autoIncrement: true});
    var index_21 = objectStore_4.createIndex('index_21', 'test', {unique: true, multiEntry: true});
    var index_22 = objectStore_9.createIndex('index_22', 'test', {unique: false});
    var getAll_1;
    try{
        KeyRange_28 = IDBKeyRange.bound('eYEhvN', 'eYEhvN', false, true);
        getAll_1 = objectStore_2.getAll(KeyRange_28, 443129468);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('eYEhvN');
        getAll_1 = objectStore_2.getAll(KeyRange_29);
    }

    var index_23 = objectStore_9.createIndex('index_23', 'test', {unique: false, multiEntry: true});
    db.deleteObjectStore('objectStore_17')
    var add_4 = objectStore_1.add({f0_y: '<number>', f1_d: '<null>', f2_q: '<null>', f3_z: '<array>'}, 'TgvBNuQuA');
    var objectStore_11 = db.createObjectStore('objectStore_28', {autoIncrement: false});
    var add_5 = objectStore_6.add({f0_b: '<number>', f1_u: '<object>', f2_y: '<null>', f3_o: '<boolean>', f4_o: '<object>'}, 'YydNxeEr');
    var objectStore_12 = db.createObjectStore('objectStore_29', {keypath: 'eyiEVZIYW'});
    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('PeMd', 'gao', true, true);
        get_5 = objectStore_4.get(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_6.getAllKeys(1238350575);
    var objectStore_13 = db.createObjectStore('objectStore_30', {autoIncrement: true});
    var clear_7 = objectStore_12.clear();
    var index_24 = objectStore_11.createIndex('index_24', 'test', {unique: false});
    var index_25 = objectStore_13.createIndex('index_25', 'test', {unique: true, multiEntry: true});
    db.deleteObjectStore('objectStore_24')
    var get_6;
    try{
        KeyRange_32 = IDBKeyRange.bound('UbyJlGMl', 'UbyJlGMl', false, false);
        get_6 = objectStore_6.get(KeyRange_32);
    }
    catch (e){
    }

    var add_6 = objectStore_2.add({f0_x: '<object>', f1_c: '<string>', f2_g: '<null>', f3_k: '<string>', f4_a: '<object>', f5_r: '<string>', f6_g: '<string>', f7_l: '<string>', f8_s: '<object>'}, 'YNNr');
    var add_7 = objectStore_6.add({f0_m: '<boolean>', f1_s: '<string>', f2_w: '<object>', f3_h: '<string>', f4_m: '<string>', f5_p: '<boolean>', f6_e: '<number>', f7_j: '<object>', f8_d: '<object>', f9_z: '<array>'}, 'HpljCV');
    var put_5 = objectStore_1.put({f0_d: '<object>', f1_n: '<string>', f2_k: '<array>', f3_k: '<string>', f4_w: '<boolean>', f5_y: '<boolean>', f6_t: '<null>'}, 'wnCR');
    var objectStore_14 = db.createObjectStore('objectStore_31', {keypath: 'AcKcKOkovd', autoIncrement: true});
    var add_8 = objectStore_2.add({f0_f: '<array>', f1_u: '<number>', f2_p: '<string>', f3_f: '<number>', f4_s: '<array>', f5_a: '<object>', f6_g: '<number>', f7_m: '<number>', f8_w: '<number>'}, 'ToxLqDoI');
    var getAllKeys_4;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('eYEhvN', true);
        getAllKeys_4 = objectStore_2.getAllKeys(KeyRange_34, 1167660061);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('eYEhvN');
        getAllKeys_4 = objectStore_2.getAllKeys(KeyRange_35);
    }

    var put_6 = objectStore_14.put({f0_c: '<number>', f1_j: '<boolean>', f2_z: '<number>', f3_q: '<boolean>', f4_j: '<boolean>', f5_t: '<array>', f6_f: '<null>', f7_m: '<null>', f8_k: '<array>', f9_i: '<boolean>'}, 'vtLJ');
    var add_9 = objectStore_6.add({f0_d: '<string>', f1_t: '<string>', f2_c: '<boolean>', f3_v: '<boolean>'}, 'ojXYRmw');
    var count_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('HpljCV', 'YydNxeEr', false, true);
        count_8 = objectStore_6.count(KeyRange_36);
    }
    catch (e){
    }

    var clear_8 = objectStore_3.clear();
    var put_7 = objectStore_12.put({f0_a: '<object>', f1_n: '<null>', f2_j: '<boolean>'}, 'nHyWJcTpFXq');
    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.bound('dQwwXuBW', 'OFVaC', true, true);
        get_7 = objectStore_5.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('vtLJ', false);
        getAllKeys_5 = objectStore_14.getAllKeys(KeyRange_40);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('vtLJ');
        getAllKeys_5 = objectStore_14.getAllKeys(KeyRange_41);
    }

    var objectStore_15 = db.createObjectStore('objectStore_32', {keypath: 'BEweUVYRp', autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_20 = db.transaction(['objectStore_30'], 'readonly', {durability:"default"})
    var objectStore_30 = txn_20.objectStore('objectStore_30');
    var index_0 = objectStore_30.index('index_25');
    var index_1 = objectStore_30.index('index_25');
    var index_2 = objectStore_30.index('index_25');
    var index_3 = objectStore_30.index('index_25');
    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_21 = db.transaction(['objectStore_28'], 'readwrite', {durability:"relaxed"})
    var objectStore_28 = txn_21.objectStore('objectStore_28');
    var add_10 = objectStore_28.add({f0_t: '<null>', f1_y: '<null>', f2_p: '<null>', f3_c: '<number>', f4_b: '<array>', f5_o: '<string>', f6_l: '<number>', f7_e: '<array>', f8_c: '<null>', f9_c: '<null>'}, 'tlDIwVrbDG');
    var add_11 = objectStore_28.add({f0_y: '<object>'}, 'yPIgrZJIZMty');
    var put_8 = objectStore_28.put({f0_z: '<array>', f1_r: '<boolean>', f2_a: '<object>', f3_d: '<boolean>', f4_f: '<array>'}, 'xIfjg');
    var count_9 = objectStore_28.count();
    var clear_9 = objectStore_28.clear();
    var count_10 = objectStore_28.count();
    var getAllKeys_6 = objectStore_28.getAllKeys(87048795);
    var getAll_2;
    try{
        KeyRange_42 = IDBKeyRange.bound('xIfjg', 'tlDIwVrbDG', false, true);
        getAll_2 = objectStore_28.getAll(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('yPIgrZJIZMty');
        getAll_2 = objectStore_28.getAll(KeyRange_43);
    }

    var count_11 = objectStore_28.count();
    var clear_10 = objectStore_28.clear();
    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.bound('yPIgrZJIZMty', 'tlDIwVrbDG', false, true);
        get_8 = objectStore_28.get(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_7;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('tlDIwVrbDG', true);
        getAllKeys_7 = objectStore_28.getAllKeys(KeyRange_46, 984053256);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('xIfjg');
        getAllKeys_7 = objectStore_28.getAllKeys(KeyRange_47);
    }

    var clear_11 = objectStore_28.clear();
    var clear_12 = objectStore_28.clear();
    var delete_0;
    try{
        KeyRange_48 = IDBKeyRange.bound('tlDIwVrbDG', 'tlDIwVrbDG', false, true);
        delete_0 = objectStore_28.delete(KeyRange_48);
    }
    catch (e){
    }

    var add_12 = objectStore_28.add({f0_p: '<number>', f1_f: '<null>', f2_b: '<string>', f3_y: '<array>', f4_c: '<string>', f5_j: '<number>', f6_a: '<string>', f7_w: '<number>'}, 'WgX');
    var count_12 = objectStore_28.count();
    var clear_13 = objectStore_28.clear();
    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_21.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_22 = db.transaction(['objectStore_23'], 'readonly', {durability:"relaxed"})
    var objectStore_23 = txn_22.objectStore('objectStore_23');
    var count_13 = objectStore_23.count();
    var index_4 = objectStore_23.index('index_18');
    var count_14 = objectStore_23.count();
    var getAll_3;
    try{
        KeyRange_50 = IDBKeyRange.bound('ojXYRmw', 'UbyJlGMl', true, false);
        getAll_3 = objectStore_23.getAll(KeyRange_50, 529157019);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('YydNxeEr');
        getAll_3 = objectStore_23.getAll(KeyRange_51);
    }

    var get_9;
    try{
        KeyRange_52 = IDBKeyRange.only('HpljCV');
        get_9 = objectStore_23.get(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_54 = IDBKeyRange.bound('HpljCV', 'UbyJlGMl', true, false);
        getAllKeys_8 = objectStore_23.getAllKeys(KeyRange_54, 2113960675);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('HpljCV');
        getAllKeys_8 = objectStore_23.getAllKeys(KeyRange_55);
    }

    var get_10;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('HpljCV', true);
        get_10 = objectStore_23.get(KeyRange_56);
    }
    catch (e){
    }

    var count_15 = objectStore_23.count();
    var get_11;
    try{
        KeyRange_58 = IDBKeyRange.bound('HpljCV', 'HpljCV', false, false);
        get_11 = objectStore_23.get(KeyRange_58);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_60 = IDBKeyRange.only('HpljCV');
        get_12 = objectStore_23.get(KeyRange_60);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.only('YydNxeEr');
        get_13 = objectStore_23.get(KeyRange_62);
    }
    catch (e){
    }

    var getAll_4 = objectStore_23.getAll();
    var index_5 = objectStore_23.index('index_18');
    var index_6 = objectStore_23.index('index_18');
    var count_16 = objectStore_23.count();
    var count_17 = objectStore_23.count();
    var getAll_5;
    try{
        KeyRange_64 = IDBKeyRange.bound('UbyJlGMl', 'ojXYRmw', true, true);
        getAll_5 = objectStore_23.getAll(KeyRange_64, 15141471);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('HpljCV');
        getAll_5 = objectStore_23.getAll(KeyRange_65);
    }

    var get_14;
    try{
        KeyRange_66 = IDBKeyRange.bound('UbyJlGMl', 'YydNxeEr', true, true);
        get_14 = objectStore_23.get(KeyRange_66);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_23.getAllKeys(2302141690);
    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_22.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_23 = db.transaction(['objectStore_23'], 'readwrite', {durability:"relaxed"})
    var objectStore_23 = txn_23.objectStore('objectStore_23');
    var put_9 = objectStore_23.put({f0_t: '<string>', f1_b: '<string>', f2_b: '<string>', f3_r: '<array>', f4_z: '<object>', f5_m: '<string>', f6_x: '<string>', f7_b: '<null>', f8_j: '<array>'}, 'GxswCtdXXJ');
    var add_13 = objectStore_23.add({f0_t: '<null>', f1_k: '<string>', f2_g: '<boolean>', f3_a: '<object>', f4_i: '<null>'}, 'xpnytWV');
    var put_10 = objectStore_23.put({f0_y: '<object>', f1_o: '<number>', f2_x: '<array>', f3_q: '<number>', f4_b: '<array>', f5_r: '<number>'}, 'xQWzPisKybbU');
    var add_14 = objectStore_23.add({f0_u: '<object>', f1_d: '<number>', f2_i: '<null>', f3_b: '<object>', f4_k: '<null>', f5_j: '<boolean>', f6_s: '<boolean>'}, 'nrPsGxJjouZE');
    var delete_1;
    try{
        KeyRange_68 = IDBKeyRange.bound('UbyJlGMl', 'xpnytWV', true, true);
        delete_1 = objectStore_23.delete(KeyRange_68);
    }
    catch (e){
    }

    var put_11 = objectStore_23.put({f0_n: '<boolean>'}, 'NIqLkeVIC');
    var count_18 = objectStore_23.count();
    var add_15 = objectStore_23.add({f0_t: '<string>', f1_y: '<number>'}, 'QfRTSosskzFI');
    var add_16 = objectStore_23.add({f0_c: '<object>', f1_d: '<null>', f2_z: '<object>'}, 'uPgB');
    var add_17 = objectStore_23.add({f0_x: '<boolean>', f1_j: '<boolean>', f2_f: '<array>', f3_p: '<number>', f4_i: '<array>', f5_z: '<number>', f6_j: '<null>', f7_f: '<boolean>', f8_j: '<object>'}, 'kxsNWPlvgbc');
    var getAll_6 = objectStore_23.getAll(2948585888);
    var put_12 = objectStore_23.put({f0_q: '<null>', f1_b: '<array>', f2_c: '<array>', f3_k: '<string>', f4_v: '<null>', f5_y: '<boolean>', f6_p: '<object>', f7_y: '<number>', f8_u: '<number>'}, 'SrAuJaeLU');
    var clear_14 = objectStore_23.clear();
    var put_13 = objectStore_23.put({f0_c: '<boolean>'}, 'NSwudKbgD');
    var count_19 = objectStore_23.count();
    var add_18 = objectStore_23.add({f0_b: '<object>', f1_m: '<boolean>', f2_i: '<null>', f3_u: '<array>', f4_w: '<object>', f5_c: '<null>', f6_t: '<object>', f7_w: '<object>', f8_v: '<null>'}, 'TOMUY');
    var add_19 = objectStore_23.add({f0_n: '<boolean>', f1_m: '<null>', f2_a: '<boolean>', f3_m: '<boolean>'}, 'SaBiVH');
    var put_14 = objectStore_23.put({f0_z: '<boolean>', f1_t: '<null>', f2_c: '<number>'}, 'IVvK');
    var clear_15 = objectStore_23.clear();
    var put_15 = objectStore_23.put({f0_z: '<null>', f1_n: '<boolean>', f2_u: '<null>', f3_e: '<boolean>', f4_l: '<null>', f5_z: '<boolean>'}, 'oHhX');
    var put_16 = objectStore_23.put({f0_z: '<array>', f1_j: '<object>', f2_b: '<string>', f3_n: '<array>', f4_m: '<boolean>', f5_d: '<number>', f6_g: '<string>', f7_c: '<object>', f8_l: '<boolean>'}, 'MBMGCVgGOMiv');
    var get_15;
    try{
        KeyRange_70 = IDBKeyRange.bound('SaBiVH', 'kxsNWPlvgbc', true, true);
        get_15 = objectStore_23.get(KeyRange_70);
    }
    catch (e){
    }

    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_23.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_23.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_24 = db.transaction(['objectStore_29', 'objectStore_21'], 'readonly', {durability:"default"})
    var objectStore_21 = txn_24.objectStore('objectStore_21');
    var get_16;
    try{
        KeyRange_72 = IDBKeyRange.bound('gao', 'gao', true, false);
        get_16 = objectStore_21.get(KeyRange_72);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_74 = IDBKeyRange.bound('gao', 'PeMd', false, false);
        count_20 = objectStore_21.count(KeyRange_74);
    }
    catch (e){
    }

    var count_21 = objectStore_21.count();
    var count_22;
    try{
        KeyRange_76 = IDBKeyRange.bound('PeMd', 'PeMd', false, false);
        count_22 = objectStore_21.count(KeyRange_76);
    }
    catch (e){
    }

    var count_23;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('PeMd', true);
        count_23 = objectStore_21.count(KeyRange_78);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_80 = IDBKeyRange.bound('gao', 'PeMd', false, true);
        get_17 = objectStore_21.get(KeyRange_80);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_82 = IDBKeyRange.bound('gao', 'gao', false, true);
        get_18 = objectStore_21.get(KeyRange_82);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('PeMd', true);
        get_19 = objectStore_21.get(KeyRange_84);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_86 = IDBKeyRange.bound('PeMd', 'gao', true, false);
        get_20 = objectStore_21.get(KeyRange_86);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_88 = IDBKeyRange.bound('PeMd', 'gao', false, false);
        get_21 = objectStore_21.get(KeyRange_88);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_90 = IDBKeyRange.bound('PeMd', 'PeMd', false, true);
        get_22 = objectStore_21.get(KeyRange_90);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_92 = IDBKeyRange.bound('PeMd', 'PeMd', true, true);
        get_23 = objectStore_21.get(KeyRange_92);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_94 = IDBKeyRange.only('PeMd');
        get_24 = objectStore_21.get(KeyRange_94);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_96 = IDBKeyRange.bound('gao', 'PeMd', true, true);
        getAllKeys_10 = objectStore_21.getAllKeys(KeyRange_96);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('PeMd');
        getAllKeys_10 = objectStore_21.getAllKeys(KeyRange_97);
    }

    var count_24 = objectStore_21.count();
    var index_7 = objectStore_21.index('index_21');
    var get_25;
    try{
        KeyRange_98 = IDBKeyRange.bound('PeMd', 'gao', false, true);
        get_25 = objectStore_21.get(KeyRange_98);
    }
    catch (e){
    }

    var count_25 = objectStore_21.count();
    var getAllKeys_11;
    try{
        KeyRange_100 = IDBKeyRange.bound('PeMd', 'gao', true, false);
        getAllKeys_11 = objectStore_21.getAllKeys(KeyRange_100);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('gao');
        getAllKeys_11 = objectStore_21.getAllKeys(KeyRange_101);
    }

    var count_26 = objectStore_21.count();
    txn_24.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_24.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_25 = db.transaction(['objectStore_21', 'objectStore_19', 'objectStore_31', 'objectStore_32', 'objectStore_25', 'objectStore_26', 'objectStore_22', 'objectStore_27', 'objectStore_23', 'objectStore_28'], 'readwrite', {durability:"default"})
    var objectStore_31 = txn_25.objectStore('objectStore_31');
    var count_27;
    try{
        KeyRange_102 = IDBKeyRange.only('vtLJ');
        count_27 = objectStore_31.count(KeyRange_102);
    }
    catch (e){
    }

    var clear_16 = objectStore_31.clear();
    var count_28;
    try{
        KeyRange_104 = IDBKeyRange.only('vtLJ');
        count_28 = objectStore_31.count(KeyRange_104);
    }
    catch (e){
    }

    var add_20 = objectStore_31.add({f0_b: '<null>'}, 'xeJJ');
    var count_29;
    try{
        KeyRange_106 = IDBKeyRange.bound('xeJJ', 'vtLJ', false, true);
        count_29 = objectStore_31.count(KeyRange_106);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_108 = IDBKeyRange.only('vtLJ');
        count_30 = objectStore_31.count(KeyRange_108);
    }
    catch (e){
    }

    var getAll_7 = objectStore_31.getAll(3702715996);
    var count_31 = objectStore_31.count();
    var put_17 = objectStore_31.put({f0_e: '<array>', f1_j: '<null>', f2_b: '<array>', f3_f: '<string>', f4_t: '<string>'}, 'LviGpnLj');
    var put_18 = objectStore_31.put({f0_j: '<null>', f1_o: '<string>', f2_m: '<number>', f3_t: '<null>', f4_a: '<null>', f5_f: '<number>', f6_h: '<number>', f7_m: '<array>', f8_v: '<string>'}, 'bZwoqubYzh');
    var count_32 = objectStore_31.count();
    var add_21 = objectStore_31.add({f0_e: '<number>', f1_b: '<number>', f2_m: '<null>', f3_h: '<object>', f4_e: '<null>', f5_g: '<boolean>', f6_i: '<null>'}, 'pZjPyEVnGul');
    var add_22 = objectStore_31.add({f0_l: '<number>', f1_o: '<number>'}, 'tWIZxbcHHyFx');
    var count_33 = objectStore_31.count();
    txn_25.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_25.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_25.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_26 = db.transaction(['objectStore_25'], 'readonly', {durability:"strict"})
    var objectStore_25 = txn_26.objectStore('objectStore_25');
    txn_26.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_26.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_26.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_27 = db.transaction(['objectStore_25'], 'readonly', {durability:"default"})
    var objectStore_25 = txn_27.objectStore('objectStore_25');
    txn_27.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_27.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_27.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_28 = db.transaction(['objectStore_20'], 'readonly', {durability:"relaxed"})
    var objectStore_20 = txn_28.objectStore('objectStore_20');
    var getAllKeys_12;
    try{
        KeyRange_110 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', true, false);
        getAllKeys_12 = objectStore_20.getAllKeys(KeyRange_110, 2858222828);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('YSbCEuJag');
        getAllKeys_12 = objectStore_20.getAllKeys(KeyRange_111);
    }

    var get_26;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        get_26 = objectStore_20.get(KeyRange_112);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        get_27 = objectStore_20.get(KeyRange_114);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_20.getAllKeys();
    var count_34;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        count_34 = objectStore_20.count(KeyRange_116);
    }
    catch (e){
    }

    var get_28;
    try{
        KeyRange_118 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        get_28 = objectStore_20.get(KeyRange_118);
    }
    catch (e){
    }

    var count_35;
    try{
        KeyRange_120 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', true, false);
        count_35 = objectStore_20.count(KeyRange_120);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('YSbCEuJag', false);
        get_29 = objectStore_20.get(KeyRange_122);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_124 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', false, false);
        get_30 = objectStore_20.get(KeyRange_124);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_126 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', false, false);
        get_31 = objectStore_20.get(KeyRange_126);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_128 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', false, false);
        get_32 = objectStore_20.get(KeyRange_128);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_130 = IDBKeyRange.only('YSbCEuJag');
        get_33 = objectStore_20.get(KeyRange_130);
    }
    catch (e){
    }

    var count_36 = objectStore_20.count();
    var getAll_8 = objectStore_20.getAll(1870279724);
    var getAll_9 = objectStore_20.getAll(188093172);
    var get_34;
    try{
        KeyRange_132 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', false, false);
        get_34 = objectStore_20.get(KeyRange_132);
    }
    catch (e){
    }

    var getAll_10 = objectStore_20.getAll(3117650444);
    var count_37 = objectStore_20.count();
    var count_38 = objectStore_20.count();
    var count_39;
    try{
        KeyRange_134 = IDBKeyRange.only('YSbCEuJag');
        count_39 = objectStore_20.count(KeyRange_134);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_136 = IDBKeyRange.bound('YSbCEuJag', 'YSbCEuJag', true, false);
        get_35 = objectStore_20.get(KeyRange_136);
    }
    catch (e){
    }

    txn_28.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_28.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_28.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_29 = db.transaction(['objectStore_23'], 'readonly', {durability:"relaxed"})
    var objectStore_23 = txn_29.objectStore('objectStore_23');
    var getAll_11;
    try{
        KeyRange_138 = IDBKeyRange.bound('NSwudKbgD', 'MBMGCVgGOMiv', false, false);
        getAll_11 = objectStore_23.getAll(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('ojXYRmw');
        getAll_11 = objectStore_23.getAll(KeyRange_139);
    }

    var get_36;
    try{
        KeyRange_140 = IDBKeyRange.bound('NSwudKbgD', 'UbyJlGMl', true, true);
        get_36 = objectStore_23.get(KeyRange_140);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_142 = IDBKeyRange.lowerBound('ojXYRmw', true);
        get_37 = objectStore_23.get(KeyRange_142);
    }
    catch (e){
    }

    var get_38;
    try{
        KeyRange_144 = IDBKeyRange.bound('xQWzPisKybbU', 'nrPsGxJjouZE', true, false);
        get_38 = objectStore_23.get(KeyRange_144);
    }
    catch (e){
    }

    var count_40;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('oHhX', false);
        count_40 = objectStore_23.count(KeyRange_146);
    }
    catch (e){
    }

    var get_39;
    try{
        KeyRange_148 = IDBKeyRange.bound('ojXYRmw', 'xpnytWV', true, true);
        get_39 = objectStore_23.get(KeyRange_148);
    }
    catch (e){
    }

    var getAllKeys_14;
    try{
        KeyRange_150 = IDBKeyRange.bound('NIqLkeVIC', 'xQWzPisKybbU', false, true);
        getAllKeys_14 = objectStore_23.getAllKeys(KeyRange_150, 71679778);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('NSwudKbgD');
        getAllKeys_14 = objectStore_23.getAllKeys(KeyRange_151);
    }

    var get_40;
    try{
        KeyRange_152 = IDBKeyRange.bound('NIqLkeVIC', 'xpnytWV', false, false);
        get_40 = objectStore_23.get(KeyRange_152);
    }
    catch (e){
    }

    var getAll_12;
    try{
        KeyRange_154 = IDBKeyRange.bound('ojXYRmw', 'QfRTSosskzFI', false, true);
        getAll_12 = objectStore_23.getAll(KeyRange_154, 1880148497);
    }
    catch (e){
        KeyRange_155 = IDBKeyRange.only('oHhX');
        getAll_12 = objectStore_23.getAll(KeyRange_155);
    }

    var count_41;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('UbyJlGMl', true);
        count_41 = objectStore_23.count(KeyRange_156);
    }
    catch (e){
    }

    var getAllKeys_15 = objectStore_23.getAllKeys(1038419428);
    var getAll_13;
    try{
        KeyRange_158 = IDBKeyRange.only('oHhX');
        getAll_13 = objectStore_23.getAll(KeyRange_158);
    }
    catch (e){
        KeyRange_159 = IDBKeyRange.only('GxswCtdXXJ');
        getAll_13 = objectStore_23.getAll(KeyRange_159);
    }

    var get_41;
    try{
        KeyRange_160 = IDBKeyRange.bound('IVvK', 'SaBiVH', true, true);
        get_41 = objectStore_23.get(KeyRange_160);
    }
    catch (e){
    }

    var index_8 = objectStore_23.index('index_18');
    var get_42;
    try{
        KeyRange_162 = IDBKeyRange.bound('YydNxeEr', 'oHhX', true, false);
        get_42 = objectStore_23.get(KeyRange_162);
    }
    catch (e){
    }

    var getAll_14;
    try{
        KeyRange_164 = IDBKeyRange.lowerBound('MBMGCVgGOMiv', false);
        getAll_14 = objectStore_23.getAll(KeyRange_164, 3194095079);
    }
    catch (e){
        KeyRange_165 = IDBKeyRange.only('NSwudKbgD');
        getAll_14 = objectStore_23.getAll(KeyRange_165);
    }

    var count_42;
    try{
        KeyRange_166 = IDBKeyRange.bound('SrAuJaeLU', 'oHhX', true, true);
        count_42 = objectStore_23.count(KeyRange_166);
    }
    catch (e){
    }

    var getAll_15;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('HpljCV', false);
        getAll_15 = objectStore_23.getAll(KeyRange_168, 1533371347);
    }
    catch (e){
        KeyRange_169 = IDBKeyRange.only('ojXYRmw');
        getAll_15 = objectStore_23.getAll(KeyRange_169);
    }

    var index_9 = objectStore_23.index('index_18');
    var count_43 = objectStore_23.count();
    var count_44;
    try{
        KeyRange_170 = IDBKeyRange.lowerBound('uPgB', true);
        count_44 = objectStore_23.count(KeyRange_170);
    }
    catch (e){
    }

    var get_43;
    try{
        KeyRange_172 = IDBKeyRange.only('TOMUY');
        get_43 = objectStore_23.get(KeyRange_172);
    }
    catch (e){
    }

    txn_29.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_29.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_29.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6238')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};