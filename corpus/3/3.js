let db;
const openRequest = window.indexedDB.open('str_4987', 8057433781045301)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_27');
    var put_0 = objectStore_0.put({f0_q: '<number>'}, 'sApSHvOZj');
    var add_0 = objectStore_0.add({f0_z: '<boolean>', f1_h: '<array>'}, 'pMjj');
    var put_1 = objectStore_0.put({f0_l: '<null>'}, 'ChLb');
    var add_1 = objectStore_0.add({f0_h: '<array>'}, 'UGiPhlBlO');
    db.deleteObjectStore('objectStore_27')
    var objectStore_1 = db.createObjectStore('objectStore_28', {autoIncrement: true});
    var clear_0 = objectStore_1.clear();
    var put_2 = objectStore_1.put({f0_y: '<string>', f1_q: '<boolean>'}, 'BBpesHAPrxoc');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('BBpesHAPrxoc', 'BBpesHAPrxoc', true, true);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('BBpesHAPrxoc', 'BBpesHAPrxoc', true, true);
        get_1 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var index_25 = objectStore_1.createIndex('index_25', 'test', {unique: false, multiEntry: false});
    var clear_1 = objectStore_1.clear();
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('BBpesHAPrxoc', true);
        delete_0 = objectStore_1.delete(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_1.add({f0_p: '<null>', f1_g: '<boolean>', f2_k: '<object>', f3_e: '<string>', f4_k: '<boolean>', f5_i: '<null>', f6_y: '<string>', f7_s: '<string>', f8_e: '<number>', f9_a: '<array>'}, 'huEPka');
    var objectStore_2 = db.createObjectStore('objectStore_29');
    var index_26 = objectStore_1.createIndex('index_26', 'test', {unique: true});
    var index_27 = objectStore_1.createIndex('index_27', 'test');
    var index_28 = objectStore_2.createIndex('index_28', 'test');
    var put_3 = objectStore_2.put({f0_u: '<object>', f1_w: '<boolean>', f2_n: '<array>'}, 'AtDCo');
    var clear_2 = objectStore_2.clear();
    var clear_3 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_30', {autoIncrement: false});
    var clear_4 = objectStore_1.clear();
    var add_3 = objectStore_2.add({f0_g: '<object>'}, 'zEWtZzf');
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('AtDCo', 'zEWtZzf', false, true);
        get_2 = objectStore_2.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_5 = objectStore_3.clear();
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('BBpesHAPrxoc', 'BBpesHAPrxoc', true, true);
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_8, 406340490);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('BBpesHAPrxoc');
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_9);
    }

    var clear_6 = objectStore_3.clear();
    var index_29 = objectStore_3.createIndex('index_29', 'test', {unique: false, multiEntry: true});
    var clear_7 = objectStore_2.clear();
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('zEWtZzf', 'AtDCo', false, false);
        getAll_0 = objectStore_2.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('zEWtZzf');
        getAll_0 = objectStore_2.getAll(KeyRange_11);
    }

    var objectStore_4 = db.createObjectStore('objectStore_31', {autoIncrement: true});
    var put_4 = objectStore_1.put({f0_y: '<number>', f1_p: '<null>', f2_l: '<boolean>', f3_f: '<object>', f4_q: '<null>', f5_h: '<null>', f6_p: '<null>', f7_q: '<null>', f8_s: '<boolean>'}, 'LTwnW');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('AtDCo', true);
        get_3 = objectStore_2.get(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_32', {autoIncrement: false});
    var put_5 = objectStore_3.put({f0_h: '<array>', f1_k: '<null>', f2_a: '<null>', f3_d: '<number>'}, 'auoYWWH');
    var clear_8 = objectStore_4.clear();
    var count_0 = objectStore_3.count();
    var index_30 = objectStore_4.createIndex('index_30', 'test', {multiEntry: true});
    var put_6 = objectStore_1.put({f0_r: '<null>', f1_q: '<string>', f2_w: '<string>'}, 'svPq');
    var add_4 = objectStore_2.add({f0_h: '<array>', f1_e: '<object>', f2_m: '<string>', f3_y: '<object>', f4_u: '<null>', f5_j: '<string>', f6_k: '<number>'}, 'dbwl');
    var objectStore_6 = db.createObjectStore('objectStore_33', {keypath: 'QmPXYzKfxg', autoIncrement: false});
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('auoYWWH', 'auoYWWH', false, false);
        get_4 = objectStore_3.get(KeyRange_14);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('auoYWWH', 'auoYWWH', false, false);
        getAll_1 = objectStore_3.getAll(KeyRange_16, 113875352);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('auoYWWH');
        getAll_1 = objectStore_3.getAll(KeyRange_17);
    }

    var put_7 = objectStore_5.put({f0_h: '<string>', f1_w: '<object>', f2_q: '<number>', f3_u: '<boolean>'}, 'gRomLFHLtOL');
    var count_1;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('auoYWWH', false);
        count_1 = objectStore_3.count(KeyRange_18);
    }
    catch (e){
    }

    var count_2 = objectStore_1.count();
    var index_31 = objectStore_5.createIndex('index_31', 'test', {multiEntry: true});
    var put_8 = objectStore_1.put({f0_z: '<object>', f1_v: '<null>', f2_v: '<number>', f3_t: '<number>', f4_s: '<object>', f5_j: '<string>', f6_g: '<string>', f7_a: '<object>'}, 'ykKm');
    var put_9 = objectStore_2.put({f0_j: '<boolean>', f1_u: '<object>'}, 'jNtLTshNL');
    var clear_9 = objectStore_2.clear();
    var clear_10 = objectStore_6.clear();
    var objectStore_7 = db.createObjectStore('objectStore_34', {autoIncrement: false});
    var add_5 = objectStore_2.add({f0_y: '<null>', f1_c: '<boolean>'}, 'YSTGsWCNPT');
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.only('zEWtZzf');
        get_5 = objectStore_2.get(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('ykKm', 'BBpesHAPrxoc', true, false);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_22, 813128358);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('BBpesHAPrxoc');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_23);
    }

    var count_3 = objectStore_1.count();
    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('auoYWWH', 'auoYWWH', false, false);
        get_6 = objectStore_3.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_2 = objectStore_2.getAll();
    var add_6 = objectStore_7.add({f0_c: '<object>', f1_w: '<boolean>'}, 'NUR');
    var add_7 = objectStore_7.add({f0_h: '<string>', f1_d: '<string>', f2_k: '<number>'}, 'ntXbWuEL');
    var add_8 = objectStore_4.add({f0_k: '<boolean>'}, 'owEoaPuL');
    var index_32 = objectStore_4.createIndex('index_32', 'test', {unique: true});
    var put_10 = objectStore_1.put({f0_t: '<null>', f1_o: '<number>', f2_f: '<object>', f3_x: '<boolean>'}, 'dKNy');
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('gRomLFHLtOL', 'gRomLFHLtOL', true, false);
        get_7 = objectStore_5.get(KeyRange_26);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_30 = db.transaction(['objectStore_32', 'objectStore_31', 'objectStore_33', 'objectStore_30'], 'readonly', {durability:"default"})
    var objectStore_32;
    txn_30.objectStore('objectStore_32')
    var add_9 = objectStore_32.add({f0_q: '<object>', f1_f: '<number>', f2_i: '<string>'}, 'dvSshpbWgGRJ');
    var clear_11 = objectStore_32.clear();
    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.bound('gRomLFHLtOL', 'dvSshpbWgGRJ', false, true);
        get_8 = objectStore_32.get(KeyRange_28);
    }
    catch (e){
    }

    var add_10 = objectStore_32.add({f0_l: '<number>', f1_u: '<boolean>', f2_b: '<boolean>', f3_h: '<string>', f4_x: '<array>'}, 'xtUUNZWnZCSL');
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.bound('gRomLFHLtOL', 'gRomLFHLtOL', false, true);
        get_9 = objectStore_32.get(KeyRange_30);
    }
    catch (e){
    }

    var add_11 = objectStore_32.add({f0_f: '<string>', f1_o: '<object>', f2_s: '<boolean>', f3_y: '<number>', f4_t: '<string>'}, 'wPBEqhleXY');
    var clear_12 = objectStore_32.clear();
    var put_11 = objectStore_32.put({f0_w: '<object>', f1_b: '<array>', f2_s: '<number>', f3_i: '<number>', f4_v: '<object>'}, 'gftTpOyAgwaL');
    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('xtUUNZWnZCSL', false);
        get_10 = objectStore_32.get(KeyRange_32);
    }
    catch (e){
    }

    var put_12 = objectStore_32.put({f0_r: '<array>', f1_b: '<array>', f2_t: '<boolean>', f3_p: '<object>'}, 'uCScF');
    var clear_13 = objectStore_32.clear();
    var get_11;
    try{
        KeyRange_34 = IDBKeyRange.only('uCScF');
        get_11 = objectStore_32.get(KeyRange_34);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('xtUUNZWnZCSL', false);
        delete_1 = objectStore_32.delete(KeyRange_36);
    }
    catch (e){
    }

    var put_13 = objectStore_32.put({f0_f: '<null>', f1_f: '<object>', f2_n: '<null>', f3_k: '<number>', f4_i: '<null>', f5_o: '<null>'}, 'HkcphxLr');
    var add_12 = objectStore_32.add({f0_x: '<boolean>', f1_i: '<string>', f2_x: '<array>', f3_r: '<object>', f4_o: '<boolean>'}, 'JRWYKwlRLZI');
    var get_12;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('gRomLFHLtOL', false);
        get_12 = objectStore_32.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_32.getAllKeys(546469768);
    var add_13 = objectStore_32.add({f0_t: '<object>', f1_b: '<null>', f2_n: '<object>', f3_w: '<array>', f4_m: '<string>', f5_t: '<null>'}, 'SCaCzqT');
    var get_13;
    try{
        KeyRange_40 = IDBKeyRange.bound('SCaCzqT', 'SCaCzqT', false, false);
        get_13 = objectStore_32.get(KeyRange_40);
    }
    catch (e){
    }

    var add_14 = objectStore_32.add({f0_q: '<boolean>', f1_i: '<number>', f2_q: '<array>', f3_t: '<boolean>'}, 'EdrttSXPdqoB');
    var add_15 = objectStore_32.add({f0_w: '<null>', f1_a: '<string>'}, 'pJS');
    var delete_2;
    try{
        KeyRange_42 = IDBKeyRange.bound('SCaCzqT', 'dvSshpbWgGRJ', false, true);
        delete_2 = objectStore_32.delete(KeyRange_42);
    }
    catch (e){
    }

    var count_4 = objectStore_32.count();
    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_31 = db.transaction(['objectStore_30', 'objectStore_32', 'objectStore_28'], 'readwrite', {durability:"default"})
    var objectStore_28;
    txn_30.objectStore('objectStore_28')
    var put_14 = objectStore_28.put({f0_b: '<boolean>', f1_e: '<number>', f2_p: '<string>', f3_d: '<boolean>', f4_g: '<number>'}, 'ewHJlxm');
    var add_16 = objectStore_28.add({f0_z: '<number>', f1_z: '<number>'}, 'bcRTyTu');
    var get_14;
    try{
        KeyRange_44 = IDBKeyRange.bound('bcRTyTu', 'huEPka', false, false);
        get_14 = objectStore_28.get(KeyRange_44);
    }
    catch (e){
    }

    var add_17 = objectStore_28.add({f0_w: '<string>', f1_b: '<number>', f2_h: '<array>', f3_m: '<string>', f4_s: '<null>', f5_q: '<boolean>', f6_g: '<array>', f7_s: '<null>'}, 'NUnf');
    var add_18 = objectStore_28.add({f0_f: '<array>', f1_j: '<boolean>'}, 'wWRAAsvf');
    var count_5;
    try{
        KeyRange_46 = IDBKeyRange.bound('ewHJlxm', 'wWRAAsvf', true, false);
        count_5 = objectStore_28.count(KeyRange_46);
    }
    catch (e){
    }

    var add_19 = objectStore_28.add({f0_u: '<object>'}, 'ZvIGTTDK');
    var get_15;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('wWRAAsvf', false);
        get_15 = objectStore_28.get(KeyRange_48);
    }
    catch (e){
    }

    var put_15 = objectStore_28.put({f0_t: '<null>', f1_i: '<null>', f2_o: '<number>', f3_i: '<object>', f4_e: '<array>', f5_z: '<null>', f6_k: '<object>'}, 'VyBxFbVb');
    var clear_14 = objectStore_28.clear();
    var delete_3;
    try{
        KeyRange_50 = IDBKeyRange.only('huEPka');
        delete_3 = objectStore_28.delete(KeyRange_50);
    }
    catch (e){
    }

    var clear_15 = objectStore_28.clear();
    var count_6 = objectStore_28.count();
    var getAllKeys_3;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('ZvIGTTDK', false);
        getAllKeys_3 = objectStore_28.getAllKeys(KeyRange_52, 901638210);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('NUnf');
        getAllKeys_3 = objectStore_28.getAllKeys(KeyRange_53);
    }

    var get_16;
    try{
        KeyRange_54 = IDBKeyRange.bound('BBpesHAPrxoc', 'BBpesHAPrxoc', true, true);
        get_16 = objectStore_28.get(KeyRange_54);
    }
    catch (e){
    }

    var clear_16 = objectStore_28.clear();
    var put_16 = objectStore_28.put({f0_c: '<null>'}, 'dlDFjHVVCqU');
    var put_17 = objectStore_28.put({f0_e: '<string>', f1_c: '<boolean>', f2_j: '<array>', f3_r: '<string>', f4_g: '<boolean>', f5_s: '<string>', f6_i: '<number>', f7_p: '<array>', f8_q: '<number>'}, 'XLJQVctH');
    var clear_17 = objectStore_28.clear();
    var get_17;
    try{
        KeyRange_56 = IDBKeyRange.bound('bcRTyTu', 'ykKm', true, true);
        get_17 = objectStore_28.get(KeyRange_56);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_58 = IDBKeyRange.bound('bcRTyTu', 'huEPka', false, true);
        getAll_3 = objectStore_28.getAll(KeyRange_58, 2365180754);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('ewHJlxm');
        getAll_3 = objectStore_28.getAll(KeyRange_59);
    }

    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_32 = db.transaction(['objectStore_29', 'objectStore_33', 'objectStore_30'], 'readwrite', {durability:"relaxed"})
    var objectStore_29;
    txn_30.objectStore('objectStore_29')
    var put_18 = objectStore_29.put({f0_t: '<object>', f1_t: '<number>', f2_h: '<number>', f3_i: '<boolean>', f4_l: '<string>', f5_z: '<number>', f6_x: '<object>', f7_j: '<array>'}, 'yfyoUGJE');
    var get_18;
    try{
        KeyRange_60 = IDBKeyRange.bound('zEWtZzf', 'zEWtZzf', false, false);
        get_18 = objectStore_29.get(KeyRange_60);
    }
    catch (e){
    }

    var add_20 = objectStore_29.add({f0_r: '<array>', f1_p: '<number>'}, 'pQxh');
    var clear_18 = objectStore_29.clear();
    var put_19 = objectStore_29.put({f0_p: '<object>', f1_s: '<number>', f2_n: '<array>', f3_v: '<null>', f4_f: '<array>'}, 'jlBayMDsBfn');
    var clear_19 = objectStore_29.clear();
    var get_19;
    try{
        KeyRange_62 = IDBKeyRange.only('jNtLTshNL');
        get_19 = objectStore_29.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_20 = objectStore_29.clear();
    var count_7 = objectStore_29.count();
    var index_0 = objectStore_29.index('index_28');
    var add_21 = objectStore_29.add({f0_s: '<object>'}, 'YLNpJ');
    var clear_21 = objectStore_29.clear();
    var clear_22 = objectStore_29.clear();
    var add_22 = objectStore_29.add({f0_m: '<number>', f1_i: '<number>', f2_h: '<boolean>', f3_a: '<object>', f4_j: '<number>', f5_g: '<null>', f6_o: '<boolean>', f7_c: '<null>', f8_w: '<null>', f9_y: '<string>'}, 'AbWPl');
    var get_20;
    try{
        KeyRange_64 = IDBKeyRange.only('dbwl');
        get_20 = objectStore_29.get(KeyRange_64);
    }
    catch (e){
    }

    var clear_23 = objectStore_29.clear();
    var count_8;
    try{
        KeyRange_66 = IDBKeyRange.bound('jlBayMDsBfn', 'dbwl', false, false);
        count_8 = objectStore_29.count(KeyRange_66);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('pQxh', false);
        get_21 = objectStore_29.get(KeyRange_68);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_70 = IDBKeyRange.bound('AtDCo', 'jNtLTshNL', false, true);
        count_9 = objectStore_29.count(KeyRange_70);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_72 = IDBKeyRange.only('yfyoUGJE');
        get_22 = objectStore_29.get(KeyRange_72);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_29.getAllKeys(970729713);
    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_33 = db.transaction(['objectStore_34'], 'readwrite', {durability:"default"})
    var objectStore_34;
    txn_30.objectStore('objectStore_34')
    var get_23;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('NUR', true);
        get_23 = objectStore_34.get(KeyRange_74);
    }
    catch (e){
    }

    var clear_24 = objectStore_34.clear();
    var getAll_4;
    try{
        KeyRange_76 = IDBKeyRange.bound('NUR', 'NUR', true, false);
        getAll_4 = objectStore_34.getAll(KeyRange_76, 3061184261);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('NUR');
        getAll_4 = objectStore_34.getAll(KeyRange_77);
    }

    var add_23 = objectStore_34.add({f0_v: '<number>', f1_m: '<string>', f2_r: '<number>', f3_u: '<string>', f4_l: '<null>', f5_k: '<object>'}, 'TqjhT');
    var count_10;
    try{
        KeyRange_78 = IDBKeyRange.only('ntXbWuEL');
        count_10 = objectStore_34.count(KeyRange_78);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_80 = IDBKeyRange.bound('TqjhT', 'NUR', false, true);
        get_24 = objectStore_34.get(KeyRange_80);
    }
    catch (e){
    }

    var put_20 = objectStore_34.put({f0_b: '<array>'}, 'TjOTk');
    var put_21 = objectStore_34.put({f0_j: '<boolean>', f1_y: '<null>', f2_h: '<boolean>', f3_b: '<object>', f4_p: '<null>', f5_n: '<boolean>', f6_o: '<null>', f7_q: '<object>'}, 'YXakYMJaFMB');
    var delete_4;
    try{
        KeyRange_82 = IDBKeyRange.only('TjOTk');
        delete_4 = objectStore_34.delete(KeyRange_82);
    }
    catch (e){
    }

    var count_11 = objectStore_34.count();
    var getAll_5 = objectStore_34.getAll(20292416);
    var add_24 = objectStore_34.add({f0_n: '<null>', f1_y: '<string>', f2_i: '<boolean>', f3_m: '<number>', f4_g: '<string>', f5_h: '<object>', f6_m: '<null>'}, 'NDMz');
    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_33.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_34 = db.transaction(['objectStore_32'], 'readwrite', {durability:"strict"})
    var objectStore_32;
    txn_32.objectStore('objectStore_32')
    var add_25 = objectStore_32.add({f0_a: '<null>', f1_j: '<array>', f2_m: '<array>', f3_i: '<object>', f4_l: '<number>', f5_f: '<array>', f6_l: '<null>', f7_m: '<array>'}, 'BJIuhSBoLH');
    var add_26 = objectStore_32.add({f0_g: '<number>', f1_g: '<null>', f2_n: '<array>', f3_i: '<null>', f4_a: '<number>', f5_d: '<boolean>', f6_t: '<string>', f7_m: '<array>'}, 'vEpvuWgaSYh');
    var put_22 = objectStore_32.put({f0_s: '<array>'}, 'doxoD');
    var get_25;
    try{
        KeyRange_84 = IDBKeyRange.bound('doxoD', 'BJIuhSBoLH', true, false);
        get_25 = objectStore_32.get(KeyRange_84);
    }
    catch (e){
    }

    var clear_25 = objectStore_32.clear();
    var index_1 = objectStore_32.index('index_31');
    var clear_26 = objectStore_32.clear();
    var add_27 = objectStore_32.add({f0_w: '<object>', f1_m: '<object>', f2_u: '<boolean>', f3_a: '<string>', f4_e: '<object>', f5_v: '<number>', f6_m: '<object>', f7_v: '<array>', f8_g: '<null>'}, 'HmmuPWj');
    var clear_27 = objectStore_32.clear();
    var getAll_6 = objectStore_32.getAll();
    var clear_28 = objectStore_32.clear();
    txn_33.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_34.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_35 = db.transaction(['objectStore_31', 'objectStore_32', 'objectStore_33'], 'readwrite', {durability:"relaxed"})
    var objectStore_31;
    txn_32.objectStore('objectStore_31')
    var clear_29 = objectStore_31.clear();
    var count_12;
    try{
        KeyRange_86 = IDBKeyRange.bound('owEoaPuL', 'owEoaPuL', false, true);
        count_12 = objectStore_31.count(KeyRange_86);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_88 = IDBKeyRange.bound('owEoaPuL', 'owEoaPuL', false, false);
        getAll_7 = objectStore_31.getAll(KeyRange_88, 2237788214);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('owEoaPuL');
        getAll_7 = objectStore_31.getAll(KeyRange_89);
    }

    var clear_30 = objectStore_31.clear();
    var delete_5;
    try{
        KeyRange_90 = IDBKeyRange.bound('owEoaPuL', 'owEoaPuL', true, true);
        delete_5 = objectStore_31.delete(KeyRange_90);
    }
    catch (e){
    }

    var clear_31 = objectStore_31.clear();
    var count_13 = objectStore_31.count();
    var delete_6;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('owEoaPuL', false);
        delete_6 = objectStore_31.delete(KeyRange_92);
    }
    catch (e){
    }

    var add_28 = objectStore_31.add({f0_k: '<boolean>', f1_l: '<boolean>', f2_y: '<string>', f3_p: '<string>', f4_t: '<object>', f5_p: '<null>'}, 'jWwksb');
    var put_23 = objectStore_31.put({f0_t: '<boolean>', f1_d: '<boolean>', f2_c: '<string>', f3_g: '<null>'}, 'tlwDmEAFkx');
    var clear_32 = objectStore_31.clear();
    var add_29 = objectStore_31.add({f0_a: '<array>', f1_g: '<number>', f2_x: '<null>'}, 'qsa');
    var clear_33 = objectStore_31.clear();
    var count_14 = objectStore_31.count();
    var getAllKeys_5 = objectStore_31.getAllKeys(1791939164);
    var get_26;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('qsa', false);
        get_26 = objectStore_31.get(KeyRange_94);
    }
    catch (e){
    }

    var put_24 = objectStore_31.put({f0_a: '<null>', f1_g: '<number>', f2_e: '<null>', f3_v: '<null>', f4_s: '<null>', f5_e: '<array>'}, 'qoE');
    txn_31.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_36 = db.transaction(['objectStore_34'], 'readonly', {durability:"default"})
    var objectStore_34;
    txn_30.objectStore('objectStore_34')
    var put_25 = objectStore_34.put({f0_w: '<number>', f1_n: '<string>', f2_f: '<array>', f3_t: '<string>', f4_t: '<null>', f5_y: '<object>', f6_m: '<object>', f7_s: '<object>', f8_m: '<array>'}, 'nwZBzTonDCli');
    var get_27;
    try{
        KeyRange_96 = IDBKeyRange.bound('NDMz', 'nwZBzTonDCli', true, true);
        get_27 = objectStore_34.get(KeyRange_96);
    }
    catch (e){
    }

    var put_26 = objectStore_34.put({f0_h: '<string>', f1_a: '<array>', f2_n: '<object>'}, 'qByIlB');
    var delete_7;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('qByIlB', true);
        delete_7 = objectStore_34.delete(KeyRange_98);
    }
    catch (e){
    }

    var add_30 = objectStore_34.add({f0_j: '<number>', f1_s: '<number>', f2_p: '<boolean>', f3_z: '<number>', f4_w: '<array>', f5_u: '<object>'}, 'GNfj');
    var get_28;
    try{
        KeyRange_100 = IDBKeyRange.bound('TqjhT', 'NDMz', true, false);
        get_28 = objectStore_34.get(KeyRange_100);
    }
    catch (e){
    }

    var clear_34 = objectStore_34.clear();
    var getAllKeys_6 = objectStore_34.getAllKeys();
    var put_27 = objectStore_34.put({f0_f: '<boolean>', f1_r: '<array>', f2_q: '<null>', f3_a: '<object>', f4_e: '<null>'}, 'PnaLTtQRU');
    var count_15;
    try{
        KeyRange_102 = IDBKeyRange.only('GNfj');
        count_15 = objectStore_34.count(KeyRange_102);
    }
    catch (e){
    }

    var add_31 = objectStore_34.add({f0_o: '<number>', f1_h: '<null>'}, 'AUJOfcLp');
    var clear_35 = objectStore_34.clear();
    var clear_36 = objectStore_34.clear();
    var get_29;
    try{
        KeyRange_104 = IDBKeyRange.only('TjOTk');
        get_29 = objectStore_34.get(KeyRange_104);
    }
    catch (e){
    }

    var count_16 = objectStore_34.count();
    var add_32 = objectStore_34.add({f0_l: '<null>'}, 'AqT');
    var getAllKeys_7;
    try{
        KeyRange_106 = IDBKeyRange.bound('NUR', 'ntXbWuEL', true, true);
        getAllKeys_7 = objectStore_34.getAllKeys(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('NUR');
        getAllKeys_7 = objectStore_34.getAllKeys(KeyRange_107);
    }

    var clear_37 = objectStore_34.clear();
    var clear_38 = objectStore_34.clear();
    txn_35.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_37 = db.transaction(['objectStore_34'], 'readwrite', {durability:"default"})
    var objectStore_34;
    txn_33.objectStore('objectStore_34')
    var get_30;
    try{
        KeyRange_108 = IDBKeyRange.only('PnaLTtQRU');
        get_30 = objectStore_34.get(KeyRange_108);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_110 = IDBKeyRange.bound('PnaLTtQRU', 'TjOTk', true, true);
        get_31 = objectStore_34.get(KeyRange_110);
    }
    catch (e){
    }

    var clear_39 = objectStore_34.clear();
    var get_32;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('PnaLTtQRU', false);
        get_32 = objectStore_34.get(KeyRange_112);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('NUR', false);
        count_17 = objectStore_34.count(KeyRange_114);
    }
    catch (e){
    }

    var add_33 = objectStore_34.add({f0_n: '<string>'}, 'MKsYsCWaWS');
    var put_28 = objectStore_34.put({f0_t: '<array>', f1_o: '<null>', f2_x: '<number>', f3_c: '<array>', f4_f: '<string>', f5_s: '<boolean>', f6_j: '<string>', f7_w: '<boolean>', f8_a: '<null>'}, 'QeGcbZbhcn');
    var put_29 = objectStore_34.put({f0_m: '<number>'}, 'RLfYXQhx');
    var clear_40 = objectStore_34.clear();
    var getAll_8;
    try{
        KeyRange_116 = IDBKeyRange.bound('qByIlB', 'AqT', true, true);
        getAll_8 = objectStore_34.getAll(KeyRange_116);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('nwZBzTonDCli');
        getAll_8 = objectStore_34.getAll(KeyRange_117);
    }

    var add_34 = objectStore_34.add({f0_j: '<boolean>', f1_z: '<string>', f2_q: '<string>', f3_o: '<number>', f4_g: '<string>'}, 'sflfkI');
    var count_18;
    try{
        KeyRange_118 = IDBKeyRange.only('PnaLTtQRU');
        count_18 = objectStore_34.count(KeyRange_118);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_120 = IDBKeyRange.bound('nwZBzTonDCli', 'AqT', false, true);
        count_19 = objectStore_34.count(KeyRange_120);
    }
    catch (e){
    }

    var clear_41 = objectStore_34.clear();
    var getAll_9 = objectStore_34.getAll(481872607);
    var clear_42 = objectStore_34.clear();
    txn_37.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_38 = db.transaction(['objectStore_34', 'objectStore_28', 'objectStore_31'], 'readwrite', {durability:"relaxed"})
    var objectStore_34;
    txn_31.objectStore('objectStore_34')
    var count_20;
    try{
        KeyRange_122 = IDBKeyRange.bound('ntXbWuEL', 'qByIlB', true, false);
        count_20 = objectStore_34.count(KeyRange_122);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_124 = IDBKeyRange.only('MKsYsCWaWS');
        delete_8 = objectStore_34.delete(KeyRange_124);
    }
    catch (e){
    }

    var put_30 = objectStore_34.put({f0_w: '<number>', f1_n: '<boolean>', f2_f: '<number>', f3_m: '<boolean>', f4_y: '<number>', f5_j: '<number>', f6_r: '<array>', f7_f: '<object>'}, 'NxDRXrUTuXdT');
    var add_35 = objectStore_34.add({f0_n: '<object>', f1_j: '<array>', f2_l: '<array>', f3_t: '<string>', f4_u: '<null>'}, 'HzlbBzslEUg');
    var add_36 = objectStore_34.add({f0_f: '<string>', f1_h: '<object>', f2_w: '<object>', f3_l: '<array>', f4_f: '<boolean>', f5_i: '<string>', f6_v: '<number>', f7_s: '<string>'}, 'bipFG');
    var add_37 = objectStore_34.add({f0_y: '<boolean>', f1_p: '<array>', f2_c: '<number>', f3_j: '<null>', f4_s: '<boolean>', f5_d: '<array>'}, 'ttp');
    var put_31 = objectStore_34.put({f0_e: '<string>', f1_h: '<string>', f2_g: '<string>', f3_x: '<string>'}, 'juVBux');
    var count_21 = objectStore_34.count();
    var put_32 = objectStore_34.put({f0_d: '<object>', f1_r: '<object>', f2_k: '<array>', f3_m: '<string>', f4_s: '<number>', f5_v: '<null>', f6_j: '<null>'}, 'SojQEDPVWO');
    var add_38 = objectStore_34.add({f0_o: '<null>', f1_z: '<null>', f2_b: '<string>', f3_l: '<null>', f4_c: '<string>', f5_s: '<boolean>', f6_z: '<array>', f7_v: '<null>', f8_x: '<boolean>'}, 'yllorVAsd');
    var get_33;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('yllorVAsd', true);
        get_33 = objectStore_34.get(KeyRange_126);
    }
    catch (e){
    }

    var count_22;
    try{
        KeyRange_128 = IDBKeyRange.bound('NxDRXrUTuXdT', 'MKsYsCWaWS', false, true);
        count_22 = objectStore_34.count(KeyRange_128);
    }
    catch (e){
    }

    var clear_43 = objectStore_34.clear();
    var put_33 = objectStore_34.put({f0_c: '<array>', f1_u: '<boolean>', f2_p: '<boolean>', f3_k: '<object>', f4_n: '<number>', f5_f: '<array>', f6_q: '<null>'}, 'sDQgx');
    var count_23 = objectStore_34.count();
    var get_34;
    try{
        KeyRange_130 = IDBKeyRange.only('AqT');
        get_34 = objectStore_34.get(KeyRange_130);
    }
    catch (e){
    }

    var getAll_10 = objectStore_34.getAll(2139596699);
    var getAll_11;
    try{
        KeyRange_132 = IDBKeyRange.bound('TjOTk', 'TqjhT', true, false);
        getAll_11 = objectStore_34.getAll(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('NxDRXrUTuXdT');
        getAll_11 = objectStore_34.getAll(KeyRange_133);
    }

    var put_34 = objectStore_34.put({f0_q: '<null>'}, 'nXBbXsoCKe');
    var clear_44 = objectStore_34.clear();
    var add_39 = objectStore_34.add({f0_c: '<boolean>', f1_v: '<array>', f2_d: '<null>', f3_n: '<null>', f4_z: '<boolean>', f5_x: '<string>', f6_e: '<number>', f7_e: '<null>', f8_f: '<array>', f9_o: '<number>'}, 'JHpOyLR');
    var delete_9;
    try{
        KeyRange_134 = IDBKeyRange.bound('JHpOyLR', 'qByIlB', true, false);
        delete_9 = objectStore_34.delete(KeyRange_134);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_136 = IDBKeyRange.only('ntXbWuEL');
        get_35 = objectStore_34.get(KeyRange_136);
    }
    catch (e){
    }

    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_39 = db.transaction(['objectStore_30', 'objectStore_28', 'objectStore_29'], 'readwrite', {durability:"strict"})
    var objectStore_28;
    txn_37.objectStore('objectStore_28')
    var add_40 = objectStore_28.add({f0_h: '<array>', f1_o: '<string>'}, 'zdnVgp');
    var delete_10;
    try{
        KeyRange_138 = IDBKeyRange.bound('dlDFjHVVCqU', 'LTwnW', true, false);
        delete_10 = objectStore_28.delete(KeyRange_138);
    }
    catch (e){
    }

    var clear_45 = objectStore_28.clear();
    var get_36;
    try{
        KeyRange_140 = IDBKeyRange.bound('XLJQVctH', 'ykKm', true, false);
        get_36 = objectStore_28.get(KeyRange_140);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_142 = IDBKeyRange.bound('ZvIGTTDK', 'zdnVgp', false, true);
        get_37 = objectStore_28.get(KeyRange_142);
    }
    catch (e){
    }

    var index_2 = objectStore_28.index('index_26');
    var getAll_12 = objectStore_28.getAll();
    var get_38;
    try{
        KeyRange_144 = IDBKeyRange.only('zdnVgp');
        get_38 = objectStore_28.get(KeyRange_144);
    }
    catch (e){
    }

    var getAllKeys_8 = objectStore_28.getAllKeys();
    var delete_11;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('zdnVgp', false);
        delete_11 = objectStore_28.delete(KeyRange_146);
    }
    catch (e){
    }

    var add_41 = objectStore_28.add({f0_l: '<object>', f1_p: '<object>', f2_r: '<string>', f3_q: '<string>', f4_g: '<array>', f5_k: '<number>'}, 'nJbN');
    var delete_12;
    try{
        KeyRange_148 = IDBKeyRange.bound('ykKm', 'huEPka', true, false);
        delete_12 = objectStore_28.delete(KeyRange_148);
    }
    catch (e){
    }

    var add_42 = objectStore_28.add({f0_c: '<boolean>', f1_s: '<boolean>', f2_m: '<object>', f3_i: '<array>'}, 'Coqq');
    var delete_13;
    try{
        KeyRange_150 = IDBKeyRange.bound('bcRTyTu', 'XLJQVctH', false, true);
        delete_13 = objectStore_28.delete(KeyRange_150);
    }
    catch (e){
    }

    var getAll_13;
    try{
        KeyRange_152 = IDBKeyRange.only('LTwnW');
        getAll_13 = objectStore_28.getAll(KeyRange_152, 3025448308);
    }
    catch (e){
        KeyRange_153 = IDBKeyRange.only('bcRTyTu');
        getAll_13 = objectStore_28.getAll(KeyRange_153);
    }

    var getAllKeys_9 = objectStore_28.getAllKeys();
    var get_39;
    try{
        KeyRange_154 = IDBKeyRange.bound('XLJQVctH', 'ewHJlxm', true, true);
        get_39 = objectStore_28.get(KeyRange_154);
    }
    catch (e){
    }

    var get_40;
    try{
        KeyRange_156 = IDBKeyRange.bound('huEPka', 'LTwnW', true, true);
        get_40 = objectStore_28.get(KeyRange_156);
    }
    catch (e){
    }

    var add_43 = objectStore_28.add({f0_v: '<string>'}, 'yRVSaPI');
    var getAllKeys_10 = objectStore_28.getAllKeys();
    var getAllKeys_11 = objectStore_28.getAllKeys(1697727975);
    var get_41;
    try{
        KeyRange_158 = IDBKeyRange.lowerBound('dKNy', true);
        get_41 = objectStore_28.get(KeyRange_158);
    }
    catch (e){
    }

    var getAll_14 = objectStore_28.getAll(1102835895);
    var put_35 = objectStore_28.put({f0_a: '<array>', f1_a: '<number>', f2_a: '<boolean>', f3_o: '<array>', f4_l: '<string>', f5_t: '<array>', f6_z: '<string>', f7_v: '<null>'}, 'JepEGTBzZO');
    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_34.onerror = (event) => {
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