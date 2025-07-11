let db;
const openRequest = window.indexedDB.open('str_2625', 4549732815567013)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_35');
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_36', {autoIncrement: false});
    var index_33 = objectStore_0.createIndex('index_33', 'test', {multiEntry: true});
    var index_0 = objectStore_0.index('index_33');
    var add_0 = objectStore_0.add({f0_g: '<object>', f1_c: '<object>', f2_x: '<boolean>', f3_m: '<boolean>', f4_n: '<object>'}, 'dJkTxYTkzeqg');
    var clear_1 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_37', {keypath: 'rIgBmaFLcRo'});
    var put_0 = objectStore_0.put({f0_v: '<string>', f1_y: '<object>'}, 'hjRFTMMhhg');
    var clear_2 = objectStore_0.clear();
    var index_34 = objectStore_1.createIndex('index_34', 'test', {unique: false});
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('hjRFTMMhhg', false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var index_1 = objectStore_1.index('index_34');
    db.deleteObjectStore('objectStore_37')
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('hjRFTMMhhg', 'dJkTxYTkzeqg', false, true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_t: '<object>', f1_u: '<null>', f2_i: '<null>', f3_a: '<object>', f4_y: '<number>', f5_g: '<null>', f6_y: '<null>'}, 'nLmWMhfWY');
    var clear_3 = objectStore_1.clear();
    var add_1 = objectStore_1.add({f0_p: '<number>'}, 'PifBpucu');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('PifBpucu', 'PifBpucu', false, true);
        get_0 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var index_35 = objectStore_0.createIndex('index_35', 'test', {multiEntry: false});
    var index_36 = objectStore_0.createIndex('index_36', 'test');
    var objectStore_3 = db.createObjectStore('objectStore_38', {autoIncrement: false});
    var objectStore_4 = db.createObjectStore('objectStore_39', {keypath: 'yUvKOIdzKa'});
    db.deleteObjectStore('objectStore_38')
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('PifBpucu', false);
        get_1 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var index_37 = objectStore_0.createIndex('index_37', 'test');
    var put_2 = objectStore_1.put({f0_g: '<string>', f1_c: '<object>', f2_f: '<array>', f3_z: '<boolean>', f4_c: '<object>', f5_u: '<array>'}, 'Lqu');
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('Lqu', true);
        get_2 = objectStore_1.get(KeyRange_8);
    }
    catch (e){
    }

    var index_38 = objectStore_4.createIndex('index_38', 'test', {unique: false});
    var add_2 = objectStore_1.add({f0_f: '<object>', f1_g: '<array>', f2_z: '<null>', f3_r: '<number>', f4_z: '<array>', f5_f: '<string>'}, 'uSMfMNX');
    var clear_4 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_39')
    var put_3 = objectStore_1.put({f0_b: '<array>', f1_u: '<boolean>', f2_j: '<null>', f3_s: '<array>', f4_o: '<null>', f5_d: '<boolean>', f6_n: '<string>', f7_r: '<null>'}, 'KNyAYtne');
    var put_4 = objectStore_0.put({f0_v: '<number>', f1_t: '<number>', f2_o: '<array>', f3_w: '<number>', f4_a: '<string>', f5_f: '<boolean>', f6_x: '<array>', f7_m: '<null>', f8_c: '<object>', f9_l: '<number>'}, 'CxcbBRu');
    var clear_5 = objectStore_0.clear();
    var count_1 = objectStore_1.count();
    var objectStore_5 = db.createObjectStore('objectStore_40', {keypath: 'POmCTyuLJP', autoIncrement: true});
    var add_3 = objectStore_0.add({f0_y: '<string>'}, 'AtyJJwVZ');
    objectStore_1.deleteIndex('index_34')
    var index_39 = objectStore_5.createIndex('index_39', 'test', {unique: false});
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('KNyAYtne', 'uSMfMNX', false, false);
        get_3 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var add_4 = objectStore_0.add({f0_a: '<string>'}, 'LqdGvELWvLcc');
    var add_5 = objectStore_0.add({f0_h: '<object>', f1_k: '<null>', f2_j: '<array>', f3_c: '<object>', f4_r: '<object>', f5_d: '<object>'}, 'SBlbND');
    var clear_6 = objectStore_1.clear();
    var put_5 = objectStore_1.put({f0_g: '<null>', f1_t: '<null>', f2_k: '<object>', f3_y: '<object>', f4_v: '<boolean>'}, 'sOZpXnU');
    var add_6 = objectStore_0.add({f0_t: '<array>', f1_r: '<boolean>'}, 'allCzzNY');
    var objectStore_6 = db.createObjectStore('objectStore_41', {keypath: 'JlfcQtp', autoIncrement: false});
    var add_7 = objectStore_1.add({f0_w: '<string>', f1_m: '<object>', f2_m: '<string>', f3_h: '<array>', f4_x: '<array>', f5_b: '<number>'}, 'BQFjhvSFK');
    var index_40 = objectStore_6.createIndex('index_40', 'test', {multiEntry: true});
    var index_41 = objectStore_0.createIndex('index_41', 'test', {unique: true, multiEntry: true});
    var add_8 = objectStore_1.add({f0_c: '<number>', f1_y: '<boolean>'}, 'yhE');
    var index_42 = objectStore_5.createIndex('index_42', 'test', {unique: false, multiEntry: true});
    var index_43 = objectStore_6.createIndex('index_43', 'test', {unique: false});
    var clear_7 = objectStore_6.clear();
    var add_9 = objectStore_5.add({f0_o: '<array>', f1_x: '<array>', f2_f: '<object>', f3_y: '<array>', f4_h: '<boolean>', f5_k: '<boolean>', f6_a: '<array>', f7_m: '<boolean>', f8_w: '<array>'}, 'JxePYJ');
    var add_10 = objectStore_6.add({f0_w: '<number>', f1_c: '<null>', f2_y: '<array>', f3_k: '<boolean>', f4_j: '<boolean>', f5_r: '<object>', f6_b: '<number>', f7_g: '<object>', f8_t: '<object>', f9_i: '<array>'}, 'kKtvz');
    var index_44 = objectStore_0.createIndex('index_44', 'test', {multiEntry: false});
    var count_2 = objectStore_0.count();
    var index_45 = objectStore_5.createIndex('index_45', 'test', {multiEntry: true});
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('kKtvz', 'kKtvz', false, true);
        delete_1 = objectStore_6.delete(KeyRange_12);
    }
    catch (e){
    }

    var count_3 = objectStore_1.count();
    var index_46 = objectStore_6.createIndex('index_46', 'test', {unique: false, multiEntry: false});
    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('kKtvz', 'kKtvz', true, false);
        count_4 = objectStore_6.count(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_7 = db.createObjectStore('objectStore_42');
    var clear_8 = objectStore_1.clear();
    var getAllKeys_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('kKtvz', 'kKtvz', true, false);
        getAllKeys_0 = objectStore_6.getAllKeys(KeyRange_16, 1739654018);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('kKtvz');
        getAllKeys_0 = objectStore_6.getAllKeys(KeyRange_17);
    }

    objectStore_6.deleteIndex('index_46')
    var index_47 = objectStore_5.createIndex('index_47', 'test', {unique: true});
    var count_5 = objectStore_1.count();
    var add_11 = objectStore_7.add({f0_d: '<array>', f1_c: '<number>', f2_r: '<null>', f3_s: '<null>', f4_a: '<array>'}, 'OjWLeac');
    var put_6 = objectStore_7.put({f0_j: '<object>'}, 'fpODAXLx');
    var add_12 = objectStore_7.add({f0_l: '<boolean>', f1_w: '<boolean>'}, 'VSWtPa');
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('KNyAYtne', 'PifBpucu', true, false);
        get_4 = objectStore_1.get(KeyRange_18);
    }
    catch (e){
    }

    var clear_9 = objectStore_7.clear();
    var clear_10 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_41')
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.only('hjRFTMMhhg');
        get_5 = objectStore_0.get(KeyRange_20);
    }
    catch (e){
    }

    var put_7 = objectStore_5.put({f0_j: '<object>', f1_a: '<null>', f2_e: '<object>', f3_s: '<object>', f4_p: '<object>'}, 'eHLFCJfXnxbw');
    var index_48 = objectStore_0.createIndex('index_48', 'test', {unique: false});
    var objectStore_8 = db.createObjectStore('objectStore_43', {keypath: 'RNEgArsx'});
    var getAll_0 = objectStore_0.getAll(3246259972);
    var put_8 = objectStore_5.put({f0_e: '<null>', f1_p: '<array>'}, 'qZFdhnnqgbX');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_40 = db.transaction(['objectStore_42', 'objectStore_35', 'objectStore_40'], 'readonly', {durability:"default"})
    var objectStore_35;
    txn_40.objectStore('objectStore_35')
    var getAllKeys_1 = objectStore_35.getAllKeys(2488100586);
    var add_13 = objectStore_35.add({f0_x: '<null>'}, 'uExXy');
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.only('AtyJJwVZ');
        get_6 = objectStore_35.get(KeyRange_22);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('allCzzNY', 'CxcbBRu', false, false);
        count_6 = objectStore_35.count(KeyRange_24);
    }
    catch (e){
    }

    var clear_11 = objectStore_35.clear();
    var add_14 = objectStore_35.add({f0_h: '<array>', f1_s: '<null>', f2_v: '<number>', f3_q: '<object>', f4_y: '<object>', f5_i: '<boolean>', f6_k: '<string>', f7_m: '<array>'}, 'brVqwjsKGeFo');
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('uExXy', 'allCzzNY', false, true);
        get_7 = objectStore_35.get(KeyRange_26);
    }
    catch (e){
    }

    var add_15 = objectStore_35.add({f0_t: '<number>', f1_y: '<string>', f2_t: '<number>', f3_j: '<string>', f4_w: '<boolean>', f5_w: '<null>', f6_m: '<null>'}, 'kwRULhg');
    var clear_12 = objectStore_35.clear();
    var getAllKeys_2 = objectStore_35.getAllKeys();
    var add_16 = objectStore_35.add({f0_q: '<object>', f1_v: '<array>', f2_n: '<string>', f3_e: '<string>', f4_l: '<null>', f5_p: '<null>', f6_e: '<null>', f7_o: '<boolean>'}, 'xeDhxQd');
    var delete_2;
    try{
        KeyRange_28 = IDBKeyRange.bound('xeDhxQd', 'SBlbND', true, true);
        delete_2 = objectStore_35.delete(KeyRange_28);
    }
    catch (e){
    }

    var put_9 = objectStore_35.put({f0_d: '<null>', f1_n: '<object>', f2_r: '<array>', f3_z: '<object>', f4_z: '<number>'}, 'AqBQLXZ');
    txn_40.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_40.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_41 = db.transaction(['objectStore_40'], 'readwrite', {durability:"strict"})
    var objectStore_40;
    txn_40.objectStore('objectStore_40')
    var put_10 = objectStore_40.put({f0_q: '<number>', f1_h: '<boolean>', f2_r: '<boolean>', f3_o: '<string>', f4_n: '<number>', f5_x: '<null>', f6_w: '<string>'}, 'OkqEpU');
    var getAll_1;
    try{
        KeyRange_30 = IDBKeyRange.bound('JxePYJ', 'eHLFCJfXnxbw', false, true);
        getAll_1 = objectStore_40.getAll(KeyRange_30, 2017836524);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('qZFdhnnqgbX');
        getAll_1 = objectStore_40.getAll(KeyRange_31);
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('OkqEpU', 'OkqEpU', false, true);
        get_8 = objectStore_40.get(KeyRange_32);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('qZFdhnnqgbX', 'OkqEpU', true, false);
        get_9 = objectStore_40.get(KeyRange_34);
    }
    catch (e){
    }

    var put_11 = objectStore_40.put({f0_z: '<null>', f1_x: '<null>', f2_s: '<null>', f3_o: '<array>', f4_o: '<number>', f5_y: '<null>', f6_d: '<string>', f7_p: '<boolean>', f8_i: '<string>', f9_c: '<object>'}, 'IkFRLIhT');
    var delete_3;
    try{
        KeyRange_36 = IDBKeyRange.bound('OkqEpU', 'qZFdhnnqgbX', false, false);
        delete_3 = objectStore_40.delete(KeyRange_36);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('IkFRLIhT', false);
        get_10 = objectStore_40.get(KeyRange_38);
    }
    catch (e){
    }

    var put_12 = objectStore_40.put({f0_n: '<object>', f1_a: '<boolean>', f2_x: '<null>', f3_p: '<array>', f4_x: '<object>', f5_l: '<object>', f6_q: '<boolean>'}, 'OqyIDeYc');
    var clear_13 = objectStore_40.clear();
    var get_11;
    try{
        KeyRange_40 = IDBKeyRange.bound('IkFRLIhT', 'IkFRLIhT', false, false);
        get_11 = objectStore_40.get(KeyRange_40);
    }
    catch (e){
    }

    var add_17 = objectStore_40.add({f0_s: '<object>'}, 'kDQZ');
    var add_18 = objectStore_40.add({f0_i: '<string>', f1_i: '<number>', f2_a: '<string>', f3_o: '<null>', f4_f: '<number>', f5_e: '<string>', f6_y: '<object>', f7_c: '<string>', f8_g: '<number>', f9_j: '<null>'}, 'BydE');
    var put_13 = objectStore_40.put({f0_d: '<boolean>', f1_g: '<object>', f2_o: '<string>', f3_r: '<boolean>', f4_k: '<boolean>', f5_i: '<boolean>', f6_n: '<number>', f7_a: '<boolean>', f8_z: '<number>', f9_t: '<boolean>'}, 'RnGfWRQSQtkN');
    var count_7;
    try{
        KeyRange_42 = IDBKeyRange.bound('OkqEpU', 'IkFRLIhT', false, true);
        count_7 = objectStore_40.count(KeyRange_42);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_44 = IDBKeyRange.only('qZFdhnnqgbX');
        count_8 = objectStore_40.count(KeyRange_44);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_46 = IDBKeyRange.only('RnGfWRQSQtkN');
        count_9 = objectStore_40.count(KeyRange_46);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('RnGfWRQSQtkN', true);
        count_10 = objectStore_40.count(KeyRange_48);
    }
    catch (e){
    }

    var put_14 = objectStore_40.put({f0_s: '<array>', f1_l: '<number>', f2_a: '<array>', f3_b: '<number>', f4_r: '<array>', f5_m: '<object>', f6_s: '<string>'}, 'WjSl');
    txn_41.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_40.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_41.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_42 = db.transaction(['objectStore_42', 'objectStore_40'], 'readwrite', {durability:"relaxed"})
    var objectStore_40;
    txn_40.objectStore('objectStore_40')
    var getAll_2;
    try{
        KeyRange_50 = IDBKeyRange.bound('WjSl', 'RnGfWRQSQtkN', false, false);
        getAll_2 = objectStore_40.getAll(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('RnGfWRQSQtkN');
        getAll_2 = objectStore_40.getAll(KeyRange_51);
    }

    var getAll_3;
    try{
        KeyRange_52 = IDBKeyRange.only('kDQZ');
        getAll_3 = objectStore_40.getAll(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('RnGfWRQSQtkN');
        getAll_3 = objectStore_40.getAll(KeyRange_53);
    }

    var clear_14 = objectStore_40.clear();
    var getAllKeys_3 = objectStore_40.getAllKeys();
    var clear_15 = objectStore_40.clear();
    var get_12;
    try{
        KeyRange_54 = IDBKeyRange.bound('kDQZ', 'kDQZ', false, true);
        get_12 = objectStore_40.get(KeyRange_54);
    }
    catch (e){
    }

    var put_15 = objectStore_40.put({f0_o: '<array>', f1_s: '<null>', f2_x: '<null>', f3_z: '<null>'}, 'mLaS');
    var count_11 = objectStore_40.count();
    var count_12;
    try{
        KeyRange_56 = IDBKeyRange.bound('WjSl', 'BydE', false, true);
        count_12 = objectStore_40.count(KeyRange_56);
    }
    catch (e){
    }

    var add_19 = objectStore_40.add({f0_y: '<string>', f1_y: '<string>', f2_b: '<number>', f3_h: '<string>', f4_j: '<string>'}, 'DFJUpvMYBi');
    var add_20 = objectStore_40.add({f0_p: '<null>', f1_c: '<boolean>', f2_s: '<object>', f3_d: '<string>', f4_h: '<object>', f5_l: '<boolean>', f6_h: '<array>'}, 'rJoJu');
    var add_21 = objectStore_40.add({f0_r: '<array>', f1_m: '<array>', f2_y: '<array>', f3_x: '<object>', f4_c: '<string>', f5_p: '<boolean>', f6_w: '<number>', f7_k: '<object>', f8_m: '<number>', f9_n: '<object>'}, 'mVuT');
    var getAllKeys_4;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('eHLFCJfXnxbw', true);
        getAllKeys_4 = objectStore_40.getAllKeys(KeyRange_58, 852697640);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('mVuT');
        getAllKeys_4 = objectStore_40.getAllKeys(KeyRange_59);
    }

    var delete_4;
    try{
        KeyRange_60 = IDBKeyRange.bound('OqyIDeYc', 'JxePYJ', true, true);
        delete_4 = objectStore_40.delete(KeyRange_60);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.only('WjSl');
        get_13 = objectStore_40.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_16 = objectStore_40.clear();
    var count_13 = objectStore_40.count();
    txn_42.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_43 = db.transaction(['objectStore_40'], 'readonly', {durability:"strict"})
    var objectStore_40;
    txn_40.objectStore('objectStore_40')
    var add_22 = objectStore_40.add({f0_h: '<null>', f1_q: '<string>', f2_f: '<string>', f3_k: '<number>', f4_e: '<null>', f5_y: '<null>', f6_p: '<boolean>'}, 'pLKRYnJ');
    var getAllKeys_5;
    try{
        KeyRange_64 = IDBKeyRange.bound('OkqEpU', 'OqyIDeYc', true, false);
        getAllKeys_5 = objectStore_40.getAllKeys(KeyRange_64, 3570899148);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('rJoJu');
        getAllKeys_5 = objectStore_40.getAllKeys(KeyRange_65);
    }

    var getAllKeys_6;
    try{
        KeyRange_66 = IDBKeyRange.only('BydE');
        getAllKeys_6 = objectStore_40.getAllKeys(KeyRange_66);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('pLKRYnJ');
        getAllKeys_6 = objectStore_40.getAllKeys(KeyRange_67);
    }

    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.only('mLaS');
        get_14 = objectStore_40.get(KeyRange_68);
    }
    catch (e){
    }

    var add_23 = objectStore_40.add({f0_m: '<null>', f1_f: '<object>', f2_y: '<number>'}, 'eBIaTboNeSDJ');
    var add_24 = objectStore_40.add({f0_i: '<number>', f1_p: '<string>', f2_r: '<array>'}, 'PsIUhzjXy');
    var get_15;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('eBIaTboNeSDJ', false);
        get_15 = objectStore_40.get(KeyRange_70);
    }
    catch (e){
    }

    var clear_17 = objectStore_40.clear();
    var add_25 = objectStore_40.add({f0_b: '<number>', f1_o: '<number>', f2_e: '<boolean>', f3_f: '<array>', f4_g: '<number>', f5_j: '<array>'}, 'Htn');
    var add_26 = objectStore_40.add({f0_j: '<array>', f1_f: '<object>'}, 'NiJmdHfWr');
    var count_14 = objectStore_40.count();
    var get_16;
    try{
        KeyRange_72 = IDBKeyRange.bound('DFJUpvMYBi', 'mVuT', false, false);
        get_16 = objectStore_40.get(KeyRange_72);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('OkqEpU', true);
        get_17 = objectStore_40.get(KeyRange_74);
    }
    catch (e){
    }

    var add_27 = objectStore_40.add({f0_a: '<object>', f1_q: '<number>', f2_t: '<object>', f3_j: '<object>', f4_u: '<boolean>'}, 'VUdVPSv');
    var get_18;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('WjSl', true);
        get_18 = objectStore_40.get(KeyRange_76);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_78 = IDBKeyRange.bound('OkqEpU', 'mVuT', false, false);
        count_15 = objectStore_40.count(KeyRange_78);
    }
    catch (e){
    }

    var count_16 = objectStore_40.count();
    var getAllKeys_7;
    try{
        KeyRange_80 = IDBKeyRange.bound('qZFdhnnqgbX', 'JxePYJ', false, false);
        getAllKeys_7 = objectStore_40.getAllKeys(KeyRange_80, 4191860308);
    }
    catch (e){
        KeyRange_81 = IDBKeyRange.only('WjSl');
        getAllKeys_7 = objectStore_40.getAllKeys(KeyRange_81);
    }

    var clear_18 = objectStore_40.clear();
    var add_28 = objectStore_40.add({f0_d: '<null>', f1_o: '<array>', f2_n: '<object>', f3_m: '<number>', f4_e: '<null>', f5_b: '<object>', f6_y: '<string>', f7_i: '<array>', f8_f: '<string>'}, 'ANpvQ');
    var clear_19 = objectStore_40.clear();
    var clear_20 = objectStore_40.clear();
    var add_29 = objectStore_40.add({f0_o: '<number>', f1_i: '<array>', f2_t: '<boolean>'}, 'DiWYAV');
    var count_17 = objectStore_40.count();
    txn_43.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_41.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_42.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_44 = db.transaction(['objectStore_42'], 'readonly', {durability:"relaxed"})
    var objectStore_42;
    txn_43.objectStore('objectStore_42')
    var get_19;
    try{
        KeyRange_82 = IDBKeyRange.only('OjWLeac');
        get_19 = objectStore_42.get(KeyRange_82);
    }
    catch (e){
    }

    var add_30 = objectStore_42.add({f0_k: '<boolean>', f1_x: '<number>', f2_k: '<boolean>', f3_v: '<string>', f4_k: '<string>', f5_f: '<object>', f6_w: '<number>', f7_h: '<number>'}, 'SQfxOfYGQS');
    var put_16 = objectStore_42.put({f0_m: '<string>', f1_c: '<array>', f2_b: '<array>', f3_z: '<boolean>', f4_v: '<object>'}, 'xkWq');
    var add_31 = objectStore_42.add({f0_c: '<string>', f1_v: '<object>', f2_r: '<string>', f3_c: '<null>', f4_j: '<number>', f5_s: '<array>', f6_a: '<array>'}, 'zAjuZwrW');
    var put_17 = objectStore_42.put({f0_h: '<number>', f1_s: '<boolean>', f2_u: '<object>'}, 'cSnyTrxpxqlm');
    var count_18;
    try{
        KeyRange_84 = IDBKeyRange.only('OjWLeac');
        count_18 = objectStore_42.count(KeyRange_84);
    }
    catch (e){
    }

    var put_18 = objectStore_42.put({f0_r: '<string>', f1_w: '<array>'}, 'QZetwnfUNx');
    var get_20;
    try{
        KeyRange_86 = IDBKeyRange.only('zAjuZwrW');
        get_20 = objectStore_42.get(KeyRange_86);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_88 = IDBKeyRange.bound('fpODAXLx', 'cSnyTrxpxqlm', false, false);
        count_19 = objectStore_42.count(KeyRange_88);
    }
    catch (e){
    }

    var clear_21 = objectStore_42.clear();
    var get_21;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('xkWq', false);
        get_21 = objectStore_42.get(KeyRange_90);
    }
    catch (e){
    }

    var add_32 = objectStore_42.add({f0_i: '<object>', f1_k: '<null>', f2_s: '<object>', f3_t: '<object>', f4_k: '<boolean>', f5_c: '<object>', f6_o: '<null>', f7_f: '<null>', f8_r: '<string>'}, 'RSRPrfZm');
    var add_33 = objectStore_42.add({f0_b: '<array>', f1_n: '<array>', f2_p: '<array>', f3_s: '<string>', f4_w: '<object>', f5_e: '<null>'}, 'zwTbdp');
    var put_19 = objectStore_42.put({f0_e: '<boolean>', f1_u: '<object>', f2_i: '<null>', f3_w: '<number>', f4_v: '<object>', f5_t: '<object>', f6_b: '<boolean>', f7_o: '<boolean>'}, 'INxSsgZwLLh');
    var add_34 = objectStore_42.add({f0_h: '<null>'}, 'sqqltIh');
    var count_20;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('SQfxOfYGQS', true);
        count_20 = objectStore_42.count(KeyRange_92);
    }
    catch (e){
    }

    var put_20 = objectStore_42.put({f0_n: '<number>', f1_b: '<boolean>'}, 'KDGIOqurSAN');
    var put_21 = objectStore_42.put({f0_t: '<object>', f1_z: '<boolean>', f2_s: '<boolean>'}, 'pqRI');
    var clear_22 = objectStore_42.clear();
    var count_21;
    try{
        KeyRange_94 = IDBKeyRange.only('INxSsgZwLLh');
        count_21 = objectStore_42.count(KeyRange_94);
    }
    catch (e){
    }

    var add_35 = objectStore_42.add({f0_e: '<object>'}, 'XFG');
    var get_22;
    try{
        KeyRange_96 = IDBKeyRange.bound('cSnyTrxpxqlm', 'XFG', true, false);
        get_22 = objectStore_42.get(KeyRange_96);
    }
    catch (e){
    }

    var clear_23 = objectStore_42.clear();
    txn_44.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_43.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_45 = db.transaction(['objectStore_42', 'objectStore_43', 'objectStore_36'], 'readonly', {durability:"relaxed"})
    var objectStore_36;
    txn_43.objectStore('objectStore_36')
    var count_22 = objectStore_36.count();
    var put_22 = objectStore_36.put({f0_j: '<boolean>', f1_w: '<null>', f2_s: '<array>', f3_q: '<object>'}, 'MVZOrNFxRe');
    var count_23;
    try{
        KeyRange_98 = IDBKeyRange.bound('PifBpucu', 'BQFjhvSFK', true, true);
        count_23 = objectStore_36.count(KeyRange_98);
    }
    catch (e){
    }

    var count_24 = objectStore_36.count();
    var put_23 = objectStore_36.put({f0_g: '<null>', f1_d: '<boolean>', f2_b: '<null>', f3_g: '<boolean>', f4_k: '<null>', f5_f: '<string>'}, 'lZcyKNGlyJe');
    var put_24 = objectStore_36.put({f0_q: '<null>', f1_r: '<boolean>', f2_m: '<boolean>', f3_q: '<object>', f4_u: '<string>', f5_i: '<boolean>'}, 'JgODtNIQmQl');
    var put_25 = objectStore_36.put({f0_y: '<object>'}, 'LmnwIddAwLmf');
    var put_26 = objectStore_36.put({f0_v: '<object>', f1_d: '<boolean>', f2_a: '<object>', f3_o: '<object>', f4_y: '<boolean>', f5_p: '<boolean>', f6_u: '<boolean>', f7_c: '<null>'}, 'kjfMWn');
    var delete_5;
    try{
        KeyRange_100 = IDBKeyRange.bound('Lqu', 'sOZpXnU', false, false);
        delete_5 = objectStore_36.delete(KeyRange_100);
    }
    catch (e){
    }

    var count_25 = objectStore_36.count();
    var getAllKeys_8;
    try{
        KeyRange_102 = IDBKeyRange.only('KNyAYtne');
        getAllKeys_8 = objectStore_36.getAllKeys(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('LmnwIddAwLmf');
        getAllKeys_8 = objectStore_36.getAllKeys(KeyRange_103);
    }

    var count_26 = objectStore_36.count();
    var delete_6;
    try{
        KeyRange_104 = IDBKeyRange.bound('JgODtNIQmQl', 'KNyAYtne', true, false);
        delete_6 = objectStore_36.delete(KeyRange_104);
    }
    catch (e){
    }

    var clear_24 = objectStore_36.clear();
    var put_27 = objectStore_36.put({f0_k: '<array>', f1_e: '<null>', f2_k: '<string>', f3_k: '<number>', f4_v: '<boolean>'}, 'DkSko');
    var clear_25 = objectStore_36.clear();
    var add_36 = objectStore_36.add({f0_c: '<string>', f1_b: '<string>', f2_s: '<object>', f3_y: '<number>', f4_z: '<null>', f5_z: '<number>', f6_h: '<array>'}, 'ayPlPfUhGwcU');
    var clear_26 = objectStore_36.clear();
    var clear_27 = objectStore_36.clear();
    txn_43.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_45.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_46 = db.transaction(['objectStore_36'], 'readonly', {durability:"relaxed"})
    var objectStore_36;
    txn_42.objectStore('objectStore_36')
    var getAll_4;
    try{
        KeyRange_106 = IDBKeyRange.bound('uSMfMNX', 'ayPlPfUhGwcU', true, true);
        getAll_4 = objectStore_36.getAll(KeyRange_106, 3748671157);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('Lqu');
        getAll_4 = objectStore_36.getAll(KeyRange_107);
    }

    var count_27;
    try{
        KeyRange_108 = IDBKeyRange.bound('DkSko', 'MVZOrNFxRe', false, true);
        count_27 = objectStore_36.count(KeyRange_108);
    }
    catch (e){
    }

    var clear_28 = objectStore_36.clear();
    var get_23;
    try{
        KeyRange_110 = IDBKeyRange.bound('LmnwIddAwLmf', 'ayPlPfUhGwcU', false, true);
        get_23 = objectStore_36.get(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('Lqu', true);
        getAllKeys_9 = objectStore_36.getAllKeys(KeyRange_112, 2375875043);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('PifBpucu');
        getAllKeys_9 = objectStore_36.getAllKeys(KeyRange_113);
    }

    var get_24;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('PifBpucu', false);
        get_24 = objectStore_36.get(KeyRange_114);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_116 = IDBKeyRange.only('PifBpucu');
        getAllKeys_10 = objectStore_36.getAllKeys(KeyRange_116, 292227828);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('DkSko');
        getAllKeys_10 = objectStore_36.getAllKeys(KeyRange_117);
    }

    var count_28 = objectStore_36.count();
    var delete_7;
    try{
        KeyRange_118 = IDBKeyRange.only('PifBpucu');
        delete_7 = objectStore_36.delete(KeyRange_118);
    }
    catch (e){
    }

    var put_28 = objectStore_36.put({f0_i: '<object>', f1_z: '<array>', f2_x: '<object>', f3_f: '<array>'}, 'aUOWMNtgYT');
    var get_25;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('MVZOrNFxRe', false);
        get_25 = objectStore_36.get(KeyRange_120);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_122 = IDBKeyRange.bound('PifBpucu', 'uSMfMNX', false, true);
        delete_8 = objectStore_36.delete(KeyRange_122);
    }
    catch (e){
    }

    txn_41.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_47 = db.transaction(['objectStore_35', 'objectStore_36', 'objectStore_43'], 'readonly', {durability:"relaxed"})
    var objectStore_36;
    txn_45.objectStore('objectStore_36')
    var get_26;
    try{
        KeyRange_124 = IDBKeyRange.bound('uSMfMNX', 'lZcyKNGlyJe', true, true);
        get_26 = objectStore_36.get(KeyRange_124);
    }
    catch (e){
    }

    var put_29 = objectStore_36.put({f0_b: '<null>', f1_z: '<boolean>', f2_p: '<null>'}, 'myIAG');
    var put_30 = objectStore_36.put({f0_q: '<object>', f1_q: '<null>', f2_v: '<null>', f3_u: '<string>', f4_r: '<object>', f5_c: '<number>'}, 'gCstVDz');
    var get_27;
    try{
        KeyRange_126 = IDBKeyRange.bound('JgODtNIQmQl', 'myIAG', false, true);
        get_27 = objectStore_36.get(KeyRange_126);
    }
    catch (e){
    }

    var clear_29 = objectStore_36.clear();
    var clear_30 = objectStore_36.clear();
    var get_28;
    try{
        KeyRange_128 = IDBKeyRange.bound('MVZOrNFxRe', 'BQFjhvSFK', false, true);
        get_28 = objectStore_36.get(KeyRange_128);
    }
    catch (e){
    }

    var put_31 = objectStore_36.put({f0_v: '<number>'}, 'GJgtCALZWKKt');
    var getAllKeys_11;
    try{
        KeyRange_130 = IDBKeyRange.bound('Lqu', 'LmnwIddAwLmf', false, false);
        getAllKeys_11 = objectStore_36.getAllKeys(KeyRange_130);
    }
    catch (e){
        KeyRange_131 = IDBKeyRange.only('lZcyKNGlyJe');
        getAllKeys_11 = objectStore_36.getAllKeys(KeyRange_131);
    }

    var count_29 = objectStore_36.count();
    var count_30;
    try{
        KeyRange_132 = IDBKeyRange.bound('myIAG', 'sOZpXnU', true, false);
        count_30 = objectStore_36.count(KeyRange_132);
    }
    catch (e){
    }

    var add_37 = objectStore_36.add({f0_a: '<string>', f1_z: '<array>', f2_e: '<number>', f3_c: '<string>', f4_p: '<string>', f5_k: '<array>', f6_t: '<string>', f7_s: '<string>', f8_j: '<string>'}, 'LTjLFvkmwC');
    var getAllKeys_12;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('JgODtNIQmQl', false);
        getAllKeys_12 = objectStore_36.getAllKeys(KeyRange_134, 2099039268);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('uSMfMNX');
        getAllKeys_12 = objectStore_36.getAllKeys(KeyRange_135);
    }

    var getAll_5 = objectStore_36.getAll();
    var count_31 = objectStore_36.count();
    var add_38 = objectStore_36.add({f0_n: '<array>', f1_j: '<object>', f2_n: '<null>', f3_r: '<object>', f4_p: '<string>', f5_e: '<null>', f6_z: '<number>', f7_u: '<number>', f8_q: '<number>', f9_p: '<null>'}, 'QGznDPAr');
    var get_29;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('BQFjhvSFK', false);
        get_29 = objectStore_36.get(KeyRange_136);
    }
    catch (e){
    }

    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_45.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_44.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_48 = db.transaction(['objectStore_40', 'objectStore_42', 'objectStore_36', 'objectStore_35', 'objectStore_43'], 'readonly', {durability:"strict"})
    var objectStore_40;
    txn_45.objectStore('objectStore_40')
    var put_32 = objectStore_40.put({f0_p: '<string>', f1_i: '<number>'}, 'SXENTJjO');
    var getAll_6 = objectStore_40.getAll(3786134826);
    var count_32;
    try{
        KeyRange_138 = IDBKeyRange.only('DFJUpvMYBi');
        count_32 = objectStore_40.count(KeyRange_138);
    }
    catch (e){
    }

    var add_39 = objectStore_40.add({f0_j: '<boolean>', f1_e: '<null>'}, 'jyMqyUGO');
    var add_40 = objectStore_40.add({f0_l: '<number>', f1_f: '<object>', f2_s: '<null>', f3_w: '<null>', f4_g: '<boolean>', f5_k: '<string>', f6_z: '<null>', f7_u: '<object>'}, 'jNpMz');
    var add_41 = objectStore_40.add({f0_t: '<array>', f1_x: '<boolean>', f2_d: '<string>', f3_d: '<object>'}, 'WNKUc');
    var get_30;
    try{
        KeyRange_140 = IDBKeyRange.bound('WNKUc', 'IkFRLIhT', false, false);
        get_30 = objectStore_40.get(KeyRange_140);
    }
    catch (e){
    }

    var getAll_7 = objectStore_40.getAll(2335371104);
    var clear_31 = objectStore_40.clear();
    var count_33;
    try{
        KeyRange_142 = IDBKeyRange.only('OkqEpU');
        count_33 = objectStore_40.count(KeyRange_142);
    }
    catch (e){
    }

    var add_42 = objectStore_40.add({f0_n: '<null>', f1_y: '<null>', f2_v: '<boolean>', f3_y: '<array>', f4_l: '<null>', f5_k: '<object>', f6_o: '<array>', f7_o: '<boolean>', f8_g: '<string>', f9_s: '<null>'}, 'xglZ');
    var add_43 = objectStore_40.add({f0_p: '<boolean>', f1_r: '<boolean>', f2_q: '<string>', f3_u: '<array>', f4_l: '<array>', f5_w: '<object>', f6_d: '<null>', f7_n: '<number>', f8_b: '<array>'}, 'DxJIKJFiQC');
    var put_33 = objectStore_40.put({f0_e: '<number>', f1_a: '<boolean>', f2_a: '<number>', f3_i: '<array>'}, 'MmxuyG');
    var delete_9;
    try{
        KeyRange_144 = IDBKeyRange.bound('WNKUc', 'JxePYJ', true, true);
        delete_9 = objectStore_40.delete(KeyRange_144);
    }
    catch (e){
    }

    var clear_32 = objectStore_40.clear();
    var count_34 = objectStore_40.count();
    txn_40.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_43.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_49 = db.transaction(['objectStore_42'], 'readonly', {durability:"relaxed"})
    var objectStore_42;
    txn_45.objectStore('objectStore_42')
    var put_34 = objectStore_42.put({f0_z: '<boolean>', f1_s: '<string>', f2_j: '<null>', f3_b: '<number>'}, 'vODqLAgtoA');
    var getAllKeys_13;
    try{
        KeyRange_146 = IDBKeyRange.bound('RSRPrfZm', 'xkWq', true, true);
        getAllKeys_13 = objectStore_42.getAllKeys(KeyRange_146);
    }
    catch (e){
        KeyRange_147 = IDBKeyRange.only('fpODAXLx');
        getAllKeys_13 = objectStore_42.getAllKeys(KeyRange_147);
    }

    var clear_33 = objectStore_42.clear();
    var getAllKeys_14 = objectStore_42.getAllKeys(3298999395);
    var get_31;
    try{
        KeyRange_148 = IDBKeyRange.bound('KDGIOqurSAN', 'sqqltIh', false, true);
        get_31 = objectStore_42.get(KeyRange_148);
    }
    catch (e){
    }

    var clear_34 = objectStore_42.clear();
    var clear_35 = objectStore_42.clear();
    var delete_10;
    try{
        KeyRange_150 = IDBKeyRange.bound('sqqltIh', 'KDGIOqurSAN', true, false);
        delete_10 = objectStore_42.delete(KeyRange_150);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_152 = IDBKeyRange.only('vODqLAgtoA');
        get_32 = objectStore_42.get(KeyRange_152);
    }
    catch (e){
    }

    var put_35 = objectStore_42.put({f0_o: '<boolean>', f1_m: '<null>', f2_d: '<null>'}, 'ZrrBXNgZQN');
    var add_44 = objectStore_42.add({f0_a: '<boolean>'}, 'EoTsGBUkzHCd');
    var get_33;
    try{
        KeyRange_154 = IDBKeyRange.bound('xkWq', 'zwTbdp', false, false);
        get_33 = objectStore_42.get(KeyRange_154);
    }
    catch (e){
    }

    var clear_36 = objectStore_42.clear();
    var clear_37 = objectStore_42.clear();
    var add_45 = objectStore_42.add({f0_u: '<object>', f1_k: '<boolean>', f2_g: '<string>', f3_d: '<null>', f4_w: '<null>', f5_a: '<boolean>', f6_f: '<string>', f7_f: '<string>', f8_u: '<number>', f9_k: '<object>'}, 'zlDP');
    var get_34;
    try{
        KeyRange_156 = IDBKeyRange.bound('ZrrBXNgZQN', 'RSRPrfZm', false, false);
        get_34 = objectStore_42.get(KeyRange_156);
    }
    catch (e){
    }

    var put_36 = objectStore_42.put({f0_q: '<null>', f1_l: '<boolean>'}, 'erKTylVDxcI');
    var add_46 = objectStore_42.add({f0_t: '<boolean>', f1_f: '<array>', f2_o: '<null>', f3_z: '<object>'}, 'oLyFKeJEfZL');
    var put_37 = objectStore_42.put({f0_c: '<object>', f1_c: '<null>'}, 'ibvYUgHzRMuS');
    var count_35;
    try{
        KeyRange_158 = IDBKeyRange.bound('vODqLAgtoA', 'vODqLAgtoA', false, false);
        count_35 = objectStore_42.count(KeyRange_158);
    }
    catch (e){
    }

    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_49.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2349')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};