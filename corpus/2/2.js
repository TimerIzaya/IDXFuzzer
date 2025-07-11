let db;
const openRequest = window.indexedDB.open('str_8572', 2815743770465027)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_20', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var index_11 = objectStore_0.createIndex('index_11', 'test', {unique: false});
    var index_12 = objectStore_0.createIndex('index_12', 'test', {unique: false, multiEntry: true});
    objectStore_0.deleteIndex('index_12')
    var put_0 = objectStore_0.put({f0_h: '<number>', f1_e: '<array>'}, 'UomCGGBMSSj');
    var objectStore_1 = db.createObjectStore('objectStore_21');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('UomCGGBMSSj', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_1.add({f0_v: '<null>', f1_c: '<null>', f2_d: '<boolean>', f3_k: '<boolean>', f4_t: '<array>', f5_a: '<object>'}, 'zalIbXJjHqa');
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('UomCGGBMSSj', 'UomCGGBMSSj', false, true);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('zalIbXJjHqa', false);
        count_1 = objectStore_1.count(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_0.clear();
    var put_1 = objectStore_0.put({f0_b: '<string>', f1_s: '<null>', f2_z: '<array>', f3_c: '<object>'}, 'gYsE');
    var clear_3 = objectStore_1.clear();
    var index_13 = objectStore_0.createIndex('index_13', 'test');
    var put_2 = objectStore_0.put({f0_s: '<null>', f1_a: '<object>', f2_r: '<object>', f3_u: '<object>'}, 'rpctJdvNfzM');
    var put_3 = objectStore_1.put({f0_i: '<null>', f1_c: '<number>', f2_u: '<array>', f3_z: '<object>', f4_z: '<string>', f5_j: '<array>', f6_o: '<boolean>', f7_e: '<boolean>'}, 'UmT');
    objectStore_0.deleteIndex('index_13')
    var getAll_0 = objectStore_0.getAll(1313888832);
    var add_1 = objectStore_0.add({f0_c: '<boolean>', f1_e: '<boolean>'}, 'NIsunKBREVAi');
    var add_2 = objectStore_0.add({f0_k: '<null>', f1_p: '<null>', f2_o: '<null>'}, 'sJDelCD');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('gYsE', 'NIsunKBREVAi', false, false);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var add_3 = objectStore_0.add({f0_d: '<number>', f1_d: '<null>', f2_p: '<null>', f3_c: '<string>'}, 'ikYwA');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.only('gYsE');
        get_1 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var put_4 = objectStore_0.put({f0_g: '<string>', f1_y: '<null>'}, 'rtJsgVKjRM');
    var objectStore_2 = db.createObjectStore('objectStore_22');
    var clear_4 = objectStore_2.clear();
    var index_14 = objectStore_1.createIndex('index_14', 'test', {unique: true, multiEntry: true});
    db.deleteObjectStore('objectStore_21')
    var put_5 = objectStore_0.put({f0_t: '<string>', f1_r: '<boolean>', f2_b: '<object>', f3_u: '<object>'}, 'FjfGC');
    var add_4 = objectStore_2.add({f0_b: '<object>', f1_d: '<boolean>', f2_z: '<null>', f3_z: '<array>', f4_f: '<string>', f5_d: '<null>', f6_b: '<null>', f7_b: '<array>', f8_q: '<null>', f9_i: '<number>'}, 'SOGPwuao');
    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('SOGPwuao', 'SOGPwuao', false, false);
        delete_1 = objectStore_2.delete(KeyRange_10);
    }
    catch (e){
    }

    var count_2 = objectStore_0.count();
    var count_3 = objectStore_2.count();
    var add_5 = objectStore_0.add({f0_q: '<array>', f1_w: '<string>', f2_r: '<object>', f3_y: '<null>', f4_u: '<number>', f5_p: '<boolean>', f6_r: '<array>'}, 'EaVkAiIjlJV');
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('SOGPwuao', 'SOGPwuao', false, true);
        get_2 = objectStore_2.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2.getAllKeys(4032385180);
    var delete_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('sJDelCD', 'rpctJdvNfzM', true, false);
        delete_2 = objectStore_0.delete(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_23', {keypath: 'SQVGYox'});
    var index_15 = objectStore_2.createIndex('index_15', 'test', {unique: false});
    var add_6 = objectStore_3.add({f0_c: '<object>', f1_f: '<number>', f2_q: '<number>', f3_p: '<array>', f4_g: '<array>', f5_e: '<string>', f6_z: '<object>'}, 'srgmXoJ');
    var index_16 = objectStore_2.createIndex('index_16', 'test', {unique: true, multiEntry: true});
    var clear_5 = objectStore_0.clear();
    var put_6 = objectStore_3.put({f0_a: '<boolean>', f1_z: '<object>', f2_p: '<boolean>'}, 'mbLLICSJ');
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('SOGPwuao', 'SOGPwuao', true, false);
        count_4 = objectStore_2.count(KeyRange_16);
    }
    catch (e){
    }

    var put_7 = objectStore_2.put({f0_n: '<boolean>', f1_h: '<string>', f2_t: '<boolean>', f3_j: '<string>'}, 'kIQRo');
    var getAll_1 = objectStore_0.getAll(2193739162);
    var clear_6 = objectStore_0.clear();
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('UomCGGBMSSj', 'FjfGC', true, false);
        count_5 = objectStore_0.count(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('SOGPwuao', false);
        getAllKeys_1 = objectStore_2.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('kIQRo');
        getAllKeys_1 = objectStore_2.getAllKeys(KeyRange_21);
    }

    var put_8 = objectStore_0.put({f0_m: '<object>', f1_d: '<array>', f2_q: '<number>', f3_u: '<number>', f4_y: '<number>', f5_c: '<string>', f6_k: '<null>', f7_n: '<boolean>', f8_m: '<array>'}, 'AQNUbERtH');
    db.deleteObjectStore('objectStore_22')
    var clear_7 = objectStore_3.clear();
    var delete_3;
    try{
        KeyRange_22 = IDBKeyRange.only('ikYwA');
        delete_3 = objectStore_0.delete(KeyRange_22);
    }
    catch (e){
    }

    var index_17 = objectStore_0.createIndex('index_17', 'test', {unique: false});
    var add_7 = objectStore_0.add({f0_z: '<null>', f1_q: '<number>', f2_a: '<number>'}, 'tKNJZbeQ');
    var add_8 = objectStore_3.add({f0_y: '<number>', f1_v: '<number>', f2_z: '<number>', f3_s: '<number>', f4_f: '<number>', f5_f: '<number>', f6_j: '<null>', f7_q: '<string>', f8_n: '<array>'}, 'BXdpZCxAkAjT');
    var count_6 = objectStore_3.count();
    var clear_8 = objectStore_3.clear();
    var put_9 = objectStore_3.put({f0_t: '<array>', f1_y: '<boolean>', f2_d: '<null>', f3_w: '<object>', f4_d: '<array>', f5_j: '<boolean>', f6_k: '<string>', f7_z: '<string>'}, 'pXUZQWGpyTZ');
    var add_9 = objectStore_0.add({f0_m: '<null>', f1_s: '<number>', f2_o: '<boolean>', f3_q: '<object>', f4_b: '<number>', f5_l: '<array>', f6_p: '<string>'}, 'jrwaXONJCFE');
    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('mbLLICSJ', 'BXdpZCxAkAjT', true, true);
        get_3 = objectStore_3.get(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_24', {autoIncrement: false});
    var getAllKeys_2 = objectStore_3.getAllKeys(1470953048);
    var add_10 = objectStore_3.add({f0_y: '<string>', f1_s: '<array>', f2_t: '<number>', f3_g: '<array>'}, 'dsBt');
    var add_11 = objectStore_0.add({f0_z: '<string>', f1_u: '<array>', f2_d: '<array>', f3_t: '<string>', f4_i: '<object>'}, 'NnNQxWJ');
    var add_12 = objectStore_3.add({f0_l: '<boolean>', f1_y: '<boolean>', f2_j: '<boolean>', f3_m: '<number>'}, 'jihQnZAO');
    var index_18 = objectStore_0.createIndex('index_18', 'test', {multiEntry: true});
    var put_10 = objectStore_0.put({f0_i: '<string>', f1_v: '<null>'}, 'ouTc');
    var getAll_2;
    try{
        KeyRange_26 = IDBKeyRange.only('NnNQxWJ');
        getAll_2 = objectStore_0.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('EaVkAiIjlJV');
        getAll_2 = objectStore_0.getAll(KeyRange_27);
    }

    var index_19 = objectStore_4.createIndex('index_19', 'test', {unique: true});
    var objectStore_5 = db.createObjectStore('objectStore_25');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2 = db.transaction(['objectStore_20'], 'readwrite', {durability:"default"})
    var objectStore_20;
    txn_2.objectStore('objectStore_20')
    var getAll_3;
    try{
        KeyRange_28 = IDBKeyRange.bound('EaVkAiIjlJV', 'EaVkAiIjlJV', true, true);
        getAll_3 = objectStore_20.getAll(KeyRange_28, 1691726179);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('rtJsgVKjRM');
        getAll_3 = objectStore_20.getAll(KeyRange_29);
    }

    var getAll_4 = objectStore_20.getAll();
    var delete_4;
    try{
        KeyRange_30 = IDBKeyRange.only('ikYwA');
        delete_4 = objectStore_20.delete(KeyRange_30);
    }
    catch (e){
    }

    var count_7 = objectStore_20.count();
    var count_8 = objectStore_20.count();
    var clear_9 = objectStore_20.clear();
    var getAllKeys_3;
    try{
        KeyRange_32 = IDBKeyRange.only('AQNUbERtH');
        getAllKeys_3 = objectStore_20.getAllKeys(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('rtJsgVKjRM');
        getAllKeys_3 = objectStore_20.getAllKeys(KeyRange_33);
    }

    var get_4;
    try{
        KeyRange_34 = IDBKeyRange.bound('rtJsgVKjRM', 'NIsunKBREVAi', false, false);
        get_4 = objectStore_20.get(KeyRange_34);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_36 = IDBKeyRange.bound('gYsE', 'tKNJZbeQ', false, false);
        getAll_5 = objectStore_20.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('NIsunKBREVAi');
        getAll_5 = objectStore_20.getAll(KeyRange_37);
    }

    var get_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('FjfGC', 'UomCGGBMSSj', true, false);
        get_5 = objectStore_20.get(KeyRange_38);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('jrwaXONJCFE', true);
        get_6 = objectStore_20.get(KeyRange_40);
    }
    catch (e){
    }

    var add_13 = objectStore_20.add({f0_p: '<number>', f1_g: '<object>', f2_i: '<null>', f3_p: '<null>', f4_c: '<null>', f5_e: '<string>', f6_o: '<object>'}, 'RgHfiKongma');
    var getAllKeys_4;
    try{
        KeyRange_42 = IDBKeyRange.bound('ouTc', 'RgHfiKongma', true, true);
        getAllKeys_4 = objectStore_20.getAllKeys(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('rtJsgVKjRM');
        getAllKeys_4 = objectStore_20.getAllKeys(KeyRange_43);
    }

    var index_0 = objectStore_20.index('index_17');
    var getAll_6 = objectStore_20.getAll();
    var count_9 = objectStore_20.count();
    var count_10 = objectStore_20.count();
    var delete_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('NnNQxWJ', 'ikYwA', false, false);
        delete_5 = objectStore_20.delete(KeyRange_44);
    }
    catch (e){
    }

    var add_14 = objectStore_20.add({f0_i: '<null>', f1_b: '<array>', f2_l: '<boolean>', f3_l: '<array>', f4_b: '<object>', f5_f: '<object>', f6_c: '<number>', f7_j: '<array>'}, 'DiEqlgBur');
    var getAll_7;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('DiEqlgBur', false);
        getAll_7 = objectStore_20.getAll(KeyRange_46, 1367971900);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('rtJsgVKjRM');
        getAll_7 = objectStore_20.getAll(KeyRange_47);
    }

    var get_7;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('DiEqlgBur', false);
        get_7 = objectStore_20.get(KeyRange_48);
    }
    catch (e){
    }

    var put_11 = objectStore_20.put({f0_n: '<object>'}, 'PXLqAsgoohHN');
    var add_15 = objectStore_20.add({f0_o: '<string>', f1_z: '<object>', f2_p: '<string>', f3_e: '<string>', f4_k: '<null>', f5_e: '<number>', f6_n: '<object>', f7_z: '<boolean>', f8_s: '<number>', f9_h: '<null>'}, 'Yol');
    var clear_10 = objectStore_20.clear();
    var count_11;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('ouTc', false);
        count_11 = objectStore_20.count(KeyRange_50);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_52 = IDBKeyRange.bound('rtJsgVKjRM', 'ouTc', true, false);
        delete_6 = objectStore_20.delete(KeyRange_52);
    }
    catch (e){
    }

    var add_16 = objectStore_20.add({f0_m: '<null>', f1_v: '<null>', f2_w: '<number>', f3_w: '<string>', f4_u: '<array>'}, 'CpvXoA');
    var count_12 = objectStore_20.count();
    var get_8;
    try{
        KeyRange_54 = IDBKeyRange.bound('Yol', 'RgHfiKongma', true, true);
        get_8 = objectStore_20.get(KeyRange_54);
    }
    catch (e){
    }

    var add_17 = objectStore_20.add({f0_g: '<number>', f1_p: '<null>', f2_o: '<array>', f3_w: '<array>', f4_i: '<array>', f5_t: '<boolean>'}, 'dbfjXCzpkd');
    var count_13 = objectStore_20.count();
    var delete_7;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('CpvXoA', false);
        delete_7 = objectStore_20.delete(KeyRange_56);
    }
    catch (e){
    }

    var put_12 = objectStore_20.put({f0_h: '<null>', f1_d: '<boolean>', f2_z: '<number>', f3_l: '<array>', f4_u: '<string>', f5_i: '<string>', f6_v: '<boolean>', f7_f: '<number>'}, 'CbiarNyBHTB');
    var delete_8;
    try{
        KeyRange_58 = IDBKeyRange.bound('dbfjXCzpkd', 'Yol', true, false);
        delete_8 = objectStore_20.delete(KeyRange_58);
    }
    catch (e){
    }

    var getAll_8 = objectStore_20.getAll();
    var add_18 = objectStore_20.add({f0_m: '<null>', f1_a: '<array>', f2_w: '<string>', f3_v: '<boolean>', f4_j: '<number>', f5_x: '<number>', f6_r: '<array>', f7_p: '<null>'}, 'KHplhecWZaW');
    var add_19 = objectStore_20.add({f0_r: '<number>', f1_z: '<object>', f2_y: '<boolean>', f3_z: '<null>', f4_o: '<object>'}, 'AwHRhh');
    var clear_11 = objectStore_20.clear();
    var getAllKeys_5 = objectStore_20.getAllKeys();
    var clear_12 = objectStore_20.clear();
    var get_9;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('rtJsgVKjRM', false);
        get_9 = objectStore_20.get(KeyRange_60);
    }
    catch (e){
    }

    var put_13 = objectStore_20.put({f0_h: '<string>', f1_t: '<null>', f2_p: '<object>', f3_q: '<array>', f4_r: '<array>', f5_p: '<string>', f6_s: '<boolean>', f7_r: '<null>', f8_f: '<number>'}, 'MaCrh');
    var count_14;
    try{
        KeyRange_62 = IDBKeyRange.bound('rpctJdvNfzM', 'FjfGC', true, true);
        count_14 = objectStore_20.count(KeyRange_62);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_64 = IDBKeyRange.bound('sJDelCD', 'MaCrh', true, true);
        getAllKeys_6 = objectStore_20.getAllKeys(KeyRange_64, 649192055);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('rpctJdvNfzM');
        getAllKeys_6 = objectStore_20.getAllKeys(KeyRange_65);
    }

    var clear_13 = objectStore_20.clear();
    var getAllKeys_7;
    try{
        KeyRange_66 = IDBKeyRange.bound('gYsE', 'UomCGGBMSSj', false, true);
        getAllKeys_7 = objectStore_20.getAllKeys(KeyRange_66, 3549327308);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('dbfjXCzpkd');
        getAllKeys_7 = objectStore_20.getAllKeys(KeyRange_67);
    }

    var add_20 = objectStore_20.add({f0_e: '<string>', f1_e: '<null>', f2_m: '<boolean>', f3_a: '<number>', f4_m: '<null>', f5_z: '<array>', f6_n: '<null>', f7_a: '<null>', f8_k: '<null>'}, 'GnzSL');
    var count_15 = objectStore_20.count();
    var clear_14 = objectStore_20.clear();
    var add_21 = objectStore_20.add({f0_n: '<boolean>', f1_q: '<string>', f2_d: '<array>', f3_p: '<null>', f4_e: '<array>', f5_a: '<null>', f6_u: '<object>', f7_n: '<null>'}, 'CgvgDIpRm');
    var delete_9;
    try{
        KeyRange_68 = IDBKeyRange.bound('FjfGC', 'Yol', false, true);
        delete_9 = objectStore_20.delete(KeyRange_68);
    }
    catch (e){
    }

    var add_22 = objectStore_20.add({f0_f: '<boolean>', f1_t: '<string>', f2_h: '<number>', f3_b: '<null>', f4_s: '<string>'}, 'KkfxOPdxN');
    var put_14 = objectStore_20.put({f0_b: '<number>', f1_r: '<array>', f2_i: '<boolean>', f3_j: '<object>', f4_f: '<boolean>'}, 'YrMWyoykhx');
    var clear_15 = objectStore_20.clear();
    var count_16;
    try{
        KeyRange_70 = IDBKeyRange.bound('gYsE', 'CbiarNyBHTB', false, false);
        count_16 = objectStore_20.count(KeyRange_70);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_72 = IDBKeyRange.bound('gYsE', 'AwHRhh', false, false);
        count_17 = objectStore_20.count(KeyRange_72);
    }
    catch (e){
    }

    var clear_16 = objectStore_20.clear();
    var clear_17 = objectStore_20.clear();
    var put_15 = objectStore_20.put({f0_a: '<boolean>', f1_w: '<number>', f2_y: '<null>'}, 'VLct');
    var count_18 = objectStore_20.count();
    var put_16 = objectStore_20.put({f0_e: '<array>'}, 'ZOjCIvl');
    var count_19;
    try{
        KeyRange_74 = IDBKeyRange.bound('CbiarNyBHTB', 'gYsE', false, true);
        count_19 = objectStore_20.count(KeyRange_74);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('NIsunKBREVAi', true);
        get_10 = objectStore_20.get(KeyRange_76);
    }
    catch (e){
    }

    var put_17 = objectStore_20.put({f0_d: '<number>', f1_u: '<string>', f2_u: '<number>', f3_g: '<object>', f4_j: '<object>', f5_a: '<null>', f6_h: '<string>', f7_p: '<string>', f8_j: '<array>'}, 'OZSENT');
    var add_23 = objectStore_20.add({f0_o: '<array>'}, 'YTrCpJ');
    var clear_18 = objectStore_20.clear();
    var clear_19 = objectStore_20.clear();
    var put_18 = objectStore_20.put({f0_w: '<object>', f1_m: '<null>'}, 'oYUfKttOAaSW');
    var put_19 = objectStore_20.put({f0_u: '<object>', f1_i: '<boolean>', f2_q: '<string>', f3_q: '<array>', f4_p: '<null>', f5_q: '<number>', f6_d: '<array>'}, 'UGPdM');
    var count_20;
    try{
        KeyRange_78 = IDBKeyRange.bound('KkfxOPdxN', 'CbiarNyBHTB', true, false);
        count_20 = objectStore_20.count(KeyRange_78);
    }
    catch (e){
    }

    var add_24 = objectStore_20.add({f0_i: '<array>', f1_l: '<null>', f2_d: '<null>', f3_o: '<array>', f4_y: '<object>', f5_c: '<boolean>', f6_x: '<array>', f7_e: '<string>', f8_d: '<boolean>'}, 'MVeYYeo');
    var getAll_9 = objectStore_20.getAll();
    var get_11;
    try{
        KeyRange_80 = IDBKeyRange.bound('KkfxOPdxN', 'rpctJdvNfzM', true, false);
        get_11 = objectStore_20.get(KeyRange_80);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_82 = IDBKeyRange.bound('NnNQxWJ', 'AwHRhh', true, true);
        get_12 = objectStore_20.get(KeyRange_82);
    }
    catch (e){
    }

    var count_21;
    try{
        KeyRange_84 = IDBKeyRange.only('YTrCpJ');
        count_21 = objectStore_20.count(KeyRange_84);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_86 = IDBKeyRange.lowerBound('CbiarNyBHTB', true);
        get_13 = objectStore_20.get(KeyRange_86);
    }
    catch (e){
    }

    var add_25 = objectStore_20.add({f0_q: '<boolean>', f1_m: '<string>', f2_j: '<object>', f3_t: '<object>', f4_m: '<number>', f5_m: '<object>', f6_l: '<string>', f7_m: '<number>'}, 'WusQUhrWI');
    var index_1 = objectStore_20.index('index_18');
    var add_26 = objectStore_20.add({f0_q: '<boolean>', f1_w: '<number>'}, 'dLVYBDikR');
    var clear_20 = objectStore_20.clear();
    var count_22;
    try{
        KeyRange_88 = IDBKeyRange.only('EaVkAiIjlJV');
        count_22 = objectStore_20.count(KeyRange_88);
    }
    catch (e){
    }

    var add_27 = objectStore_20.add({f0_z: '<null>', f1_g: '<object>'}, 'OsjVFSYpeIE');
    var clear_21 = objectStore_20.clear();
    var add_28 = objectStore_20.add({f0_j: '<boolean>', f1_x: '<number>'}, 'SaoOrQq');
    var getAll_10;
    try{
        KeyRange_90 = IDBKeyRange.bound('AwHRhh', 'YTrCpJ', false, false);
        getAll_10 = objectStore_20.getAll(KeyRange_90, 4090501045);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('AQNUbERtH');
        getAll_10 = objectStore_20.getAll(KeyRange_91);
    }

    var add_29 = objectStore_20.add({f0_b: '<string>', f1_m: '<null>'}, 'MxIRbFqnbdAb');
    var clear_22 = objectStore_20.clear();
    var count_23;
    try{
        KeyRange_92 = IDBKeyRange.only('oYUfKttOAaSW');
        count_23 = objectStore_20.count(KeyRange_92);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_94 = IDBKeyRange.bound('PXLqAsgoohHN', 'AwHRhh', true, false);
        getAllKeys_8 = objectStore_20.getAllKeys(KeyRange_94);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('OZSENT');
        getAllKeys_8 = objectStore_20.getAllKeys(KeyRange_95);
    }

    var clear_23 = objectStore_20.clear();
    var get_14;
    try{
        KeyRange_96 = IDBKeyRange.only('sJDelCD');
        get_14 = objectStore_20.get(KeyRange_96);
    }
    catch (e){
    }

    var add_30 = objectStore_20.add({f0_b: '<boolean>'}, 'AvTcib');
    var index_2 = objectStore_20.index('index_11');
    var put_20 = objectStore_20.put({f0_u: '<boolean>', f1_k: '<array>', f2_a: '<boolean>', f3_l: '<null>', f4_r: '<array>'}, 'ecdG');
    var count_24;
    try{
        KeyRange_98 = IDBKeyRange.only('WusQUhrWI');
        count_24 = objectStore_20.count(KeyRange_98);
    }
    catch (e){
    }

    var add_31 = objectStore_20.add({f0_z: '<array>', f1_h: '<string>', f2_z: '<boolean>', f3_h: '<object>', f4_u: '<array>'}, 'TdTw');
    var count_25;
    try{
        KeyRange_100 = IDBKeyRange.only('YrMWyoykhx');
        count_25 = objectStore_20.count(KeyRange_100);
    }
    catch (e){
    }

    var clear_24 = objectStore_20.clear();
    var add_32 = objectStore_20.add({f0_b: '<number>', f1_l: '<number>', f2_c: '<array>', f3_k: '<number>', f4_l: '<object>', f5_g: '<null>', f6_d: '<null>', f7_x: '<number>', f8_i: '<string>', f9_g: '<boolean>'}, 'YOvMYh');
    var getAllKeys_9 = objectStore_20.getAllKeys(1314288895);
    var put_21 = objectStore_20.put({f0_d: '<boolean>', f1_v: '<boolean>', f2_o: '<number>', f3_w: '<string>', f4_c: '<array>', f5_b: '<string>', f6_s: '<array>', f7_x: '<boolean>', f8_l: '<null>', f9_i: '<object>'}, 'euobEpU');
    var getAll_11 = objectStore_20.getAll();
    var put_22 = objectStore_20.put({f0_n: '<null>', f1_u: '<array>', f2_w: '<string>', f3_g: '<number>', f4_p: '<boolean>', f5_d: '<null>', f6_b: '<number>', f7_n: '<array>', f8_j: '<string>', f9_r: '<boolean>'}, 'jvuhI');
    var getAll_12 = objectStore_20.getAll(1433649002);
    var clear_25 = objectStore_20.clear();
    var count_26;
    try{
        KeyRange_102 = IDBKeyRange.only('TdTw');
        count_26 = objectStore_20.count(KeyRange_102);
    }
    catch (e){
    }

    var getAll_13;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('ouTc', false);
        getAll_13 = objectStore_20.getAll(KeyRange_104);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('TdTw');
        getAll_13 = objectStore_20.getAll(KeyRange_105);
    }

    var add_33 = objectStore_20.add({f0_x: '<object>', f1_c: '<object>', f2_m: '<string>', f3_s: '<object>', f4_w: '<string>', f5_q: '<null>', f6_x: '<array>', f7_n: '<string>'}, 'LpxaxS');
    var getAllKeys_10;
    try{
        KeyRange_106 = IDBKeyRange.bound('euobEpU', 'KHplhecWZaW', false, false);
        getAllKeys_10 = objectStore_20.getAllKeys(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('OsjVFSYpeIE');
        getAllKeys_10 = objectStore_20.getAllKeys(KeyRange_107);
    }

    var get_15;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('AwHRhh', false);
        get_15 = objectStore_20.get(KeyRange_108);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_110 = IDBKeyRange.bound('SaoOrQq', 'AwHRhh', true, true);
        get_16 = objectStore_20.get(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_11 = objectStore_20.getAllKeys();
    var add_34 = objectStore_20.add({f0_a: '<number>', f1_t: '<object>', f2_o: '<null>', f3_t: '<null>', f4_f: '<boolean>', f5_w: '<string>'}, 'YeVUA');
    var getAllKeys_12;
    try{
        KeyRange_112 = IDBKeyRange.bound('jrwaXONJCFE', 'ecdG', false, false);
        getAllKeys_12 = objectStore_20.getAllKeys(KeyRange_112);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('DiEqlgBur');
        getAllKeys_12 = objectStore_20.getAllKeys(KeyRange_113);
    }

    txn_2.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5681')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};