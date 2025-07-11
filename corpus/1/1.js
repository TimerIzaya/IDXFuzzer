let db;
const openRequest = window.indexedDB.open('str_8450', 1492222661876529)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_15');
    var index_12 = objectStore_0.createIndex('index_12', 'test', {multiEntry: true});
    var index_13 = objectStore_0.createIndex('index_13', 'test', {unique: false});
    objectStore_0.deleteIndex('index_12')
    var index_0 = objectStore_0.index('index_13');
    var add_0 = objectStore_0.add({f0_z: '<boolean>', f1_c: '<array>', f2_c: '<null>', f3_d: '<object>', f4_a: '<string>', f5_q: '<string>', f6_o: '<boolean>', f7_p: '<boolean>', f8_s: '<string>', f9_u: '<object>'}, 'tiEcBADNTYe');
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('tiEcBADNTYe', 'tiEcBADNTYe', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_k: '<string>', f1_o: '<null>'}, 'yhgfRkC');
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('yhgfRkC', 'tiEcBADNTYe', true, false);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_15')
    var objectStore_1 = db.createObjectStore('objectStore_16', {keypath: 'JGtkoXOVXMy', autoIncrement: false});
    var put_1 = objectStore_1.put({f0_n: '<number>', f1_q: '<array>', f2_q: '<string>'}, 'OiUKLdXs');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('OiUKLdXs');
        get_1 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var index_14 = objectStore_1.createIndex('index_14', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_1.clear();
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('OiUKLdXs', 'OiUKLdXs', false, false);
        count_0 = objectStore_1.count(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_17', {autoIncrement: true});
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('OiUKLdXs', 'OiUKLdXs', false, false);
        get_2 = objectStore_1.get(KeyRange_8);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_17')
    var put_2 = objectStore_1.put({f0_f: '<object>', f1_g: '<array>', f2_x: '<boolean>', f3_m: '<null>', f4_o: '<number>', f5_e: '<null>', f6_w: '<null>', f7_f: '<object>'}, 'IxktykHGq');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_1.clear();
    var add_1 = objectStore_1.add({f0_o: '<null>', f1_d: '<null>', f2_w: '<object>', f3_v: '<object>'}, 'hlZuZ');
    var add_2 = objectStore_1.add({f0_a: '<boolean>', f1_c: '<null>', f2_l: '<number>', f3_v: '<array>'}, 'IEsqHetHfh');
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('IEsqHetHfh', false);
        getAll_0 = objectStore_1.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('IxktykHGq');
        getAll_0 = objectStore_1.getAll(KeyRange_11);
    }

    var clear_3 = objectStore_1.clear();
    var clear_4 = objectStore_1.clear();
    var count_1;
    try{
        KeyRange_12 = IDBKeyRange.only('hlZuZ');
        count_1 = objectStore_1.count(KeyRange_12);
    }
    catch (e){
    }

    var put_3 = objectStore_1.put({f0_g: '<number>', f1_r: '<string>', f2_w: '<number>', f3_j: '<string>', f4_l: '<object>', f5_t: '<number>', f6_y: '<number>', f7_h: '<null>', f8_p: '<number>'}, 'SAYJON');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('IxktykHGq', 'SAYJON', true, false);
        get_3 = objectStore_1.get(KeyRange_14);
    }
    catch (e){
    }

    var clear_5 = objectStore_1.clear();
    var clear_6 = objectStore_1.clear();
    var getAllKeys_1 = objectStore_1.getAllKeys(1279027108);
    var put_4 = objectStore_1.put({f0_e: '<boolean>', f1_r: '<object>', f2_w: '<array>', f3_c: '<null>', f4_c: '<number>', f5_x: '<null>', f6_w: '<number>', f7_a: '<boolean>'}, 'liE');
    var index_15 = objectStore_1.createIndex('index_15', 'test');
    var count_2 = objectStore_1.count();
    var getAll_1;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('IEsqHetHfh', false);
        getAll_1 = objectStore_1.getAll(KeyRange_16, 59185809);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('OiUKLdXs');
        getAll_1 = objectStore_1.getAll(KeyRange_17);
    }

    var clear_7 = objectStore_1.clear();
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.only('SAYJON');
        get_4 = objectStore_1.get(KeyRange_18);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_18', {keypath: 'RNMzY'});
    db.deleteObjectStore('objectStore_18')
    var getAll_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('OiUKLdXs', 'IEsqHetHfh', true, true);
        getAll_2 = objectStore_1.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('OiUKLdXs');
        getAll_2 = objectStore_1.getAll(KeyRange_21);
    }

    var clear_8 = objectStore_1.clear();
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.only('IxktykHGq');
        get_5 = objectStore_1.get(KeyRange_22);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_24 = IDBKeyRange.bound('OiUKLdXs', 'hlZuZ', false, true);
        delete_1 = objectStore_1.delete(KeyRange_24);
    }
    catch (e){
    }

    var clear_9 = objectStore_1.clear();
    var delete_2;
    try{
        KeyRange_26 = IDBKeyRange.bound('OiUKLdXs', 'liE', true, false);
        delete_2 = objectStore_1.delete(KeyRange_26);
    }
    catch (e){
    }

    var index_1 = objectStore_1.index('index_14');
    var objectStore_4 = db.createObjectStore('objectStore_19', {autoIncrement: false});
    var add_3 = objectStore_4.add({f0_s: '<object>', f1_p: '<number>', f2_s: '<array>', f3_j: '<boolean>', f4_e: '<number>', f5_g: '<object>', f6_x: '<null>', f7_j: '<object>'}, 'tBjnktRIhdvl');
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.only('OiUKLdXs');
        get_6 = objectStore_1.get(KeyRange_28);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('IxktykHGq', 'SAYJON', true, true);
        get_7 = objectStore_1.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_10 = objectStore_4.clear();
    var count_3 = objectStore_4.count();
    var index_16 = objectStore_4.createIndex('index_16', 'test', {unique: false, multiEntry: false});
    var count_4 = objectStore_4.count();
    var count_5;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('tBjnktRIhdvl', false);
        count_5 = objectStore_4.count(KeyRange_32);
    }
    catch (e){
    }

    var index_17 = objectStore_1.createIndex('index_17', 'test');
    var getAllKeys_2;
    try{
        KeyRange_34 = IDBKeyRange.only('tBjnktRIhdvl');
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('tBjnktRIhdvl');
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_35);
    }

    var objectStore_5 = db.createObjectStore('objectStore_20');
    var index_18 = objectStore_5.createIndex('index_18', 'test', {unique: true, multiEntry: false});
    var getAllKeys_3 = objectStore_1.getAllKeys(324208884);
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('OiUKLdXs', 'hlZuZ', false, true);
        get_8 = objectStore_1.get(KeyRange_36);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_21', {keypath: 'oloYMwbjQDd.yfyoEuaDnQs.IoamhMrKuIvn'});
    var add_4 = objectStore_1.add({f0_o: '<array>', f1_h: '<null>', f2_j: '<object>', f3_f: '<boolean>', f4_l: '<boolean>', f5_s: '<boolean>', f6_y: '<null>', f7_w: '<null>'}, 'qNGQL');
    var getAllKeys_4 = objectStore_1.getAllKeys(2414204522);
    var clear_11 = objectStore_5.clear();
    var put_5 = objectStore_6.put({f0_o: '<null>'}, 'Miv');
    var clear_12 = objectStore_6.clear();
    var objectStore_7 = db.createObjectStore('objectStore_22', {keypath: 'IplzCkt'});
    db.deleteObjectStore('objectStore_19')
    var get_9;
    try{
        KeyRange_38 = IDBKeyRange.bound('liE', 'IxktykHGq', false, false);
        get_9 = objectStore_1.get(KeyRange_38);
    }
    catch (e){
    }

    objectStore_5.deleteIndex('index_18')
    var objectStore_8 = db.createObjectStore('objectStore_23');
    var objectStore_9 = db.createObjectStore('objectStore_24', {keypath: 'hjpt'});
    var count_6 = objectStore_1.count();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_10 = db.transaction(['objectStore_20'], 'readonly', {durability:"relaxed"})
    var objectStore_20 = txn_10.objectStore('objectStore_20');
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_11 = db.transaction(['objectStore_20'], 'readwrite', {durability:"relaxed"})
    var objectStore_20 = txn_11.objectStore('objectStore_20');
    var add_5 = objectStore_20.add({f0_f: '<array>', f1_n: '<number>', f2_o: '<boolean>', f3_k: '<null>'}, 'ovrOWJK');
    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('ovrOWJK', true);
        get_10 = objectStore_20.get(KeyRange_40);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_42 = IDBKeyRange.bound('ovrOWJK', 'ovrOWJK', true, false);
        count_7 = objectStore_20.count(KeyRange_42);
    }
    catch (e){
    }

    var count_8 = objectStore_20.count();
    var put_6 = objectStore_20.put({f0_c: '<number>', f1_u: '<number>'}, 'XbwEjKrY');
    var clear_13 = objectStore_20.clear();
    var get_11;
    try{
        KeyRange_44 = IDBKeyRange.bound('ovrOWJK', 'XbwEjKrY', true, false);
        get_11 = objectStore_20.get(KeyRange_44);
    }
    catch (e){
    }

    var getAll_3 = objectStore_20.getAll(242975903);
    var count_9 = objectStore_20.count();
    var getAll_4 = objectStore_20.getAll();
    var clear_14 = objectStore_20.clear();
    var count_10 = objectStore_20.count();
    var put_7 = objectStore_20.put({f0_q: '<object>', f1_r: '<string>', f2_n: '<boolean>', f3_r: '<boolean>', f4_j: '<string>', f5_p: '<object>', f6_u: '<string>', f7_c: '<null>'}, 'tcUEjAq');
    var put_8 = objectStore_20.put({f0_a: '<object>', f1_p: '<number>'}, 'TBPgX');
    var put_9 = objectStore_20.put({f0_k: '<boolean>', f1_p: '<number>', f2_a: '<null>', f3_i: '<null>', f4_u: '<boolean>', f5_w: '<boolean>', f6_s: '<null>', f7_f: '<string>', f8_p: '<boolean>'}, 'uEtvUbRSyth');
    var put_10 = objectStore_20.put({f0_x: '<number>', f1_b: '<object>', f2_b: '<array>', f3_f: '<number>', f4_b: '<number>', f5_z: '<array>'}, 'afj');
    var clear_15 = objectStore_20.clear();
    var count_11;
    try{
        KeyRange_46 = IDBKeyRange.bound('afj', 'TBPgX', true, true);
        count_11 = objectStore_20.count(KeyRange_46);
    }
    catch (e){
    }

    var clear_16 = objectStore_20.clear();
    var delete_3;
    try{
        KeyRange_48 = IDBKeyRange.only('uEtvUbRSyth');
        delete_3 = objectStore_20.delete(KeyRange_48);
    }
    catch (e){
    }

    var clear_17 = objectStore_20.clear();
    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_11.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_11.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_12 = db.transaction(['objectStore_24'], 'readwrite', {durability:"strict"})
    var objectStore_24 = txn_12.objectStore('objectStore_24');
    var add_6 = objectStore_24.add({f0_c: '<object>', f1_d: '<array>', f2_a: '<boolean>', f3_c: '<array>', f4_x: '<array>', f5_u: '<null>', f6_v: '<null>'}, 'PZq');
    var delete_4;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('PZq', false);
        delete_4 = objectStore_24.delete(KeyRange_50);
    }
    catch (e){
    }

    var getAll_5 = objectStore_24.getAll();
    var count_12;
    try{
        KeyRange_52 = IDBKeyRange.bound('PZq', 'PZq', true, true);
        count_12 = objectStore_24.count(KeyRange_52);
    }
    catch (e){
    }

    var getAll_6 = objectStore_24.getAll();
    var getAll_7;
    try{
        KeyRange_54 = IDBKeyRange.only('PZq');
        getAll_7 = objectStore_24.getAll(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('PZq');
        getAll_7 = objectStore_24.getAll(KeyRange_55);
    }

    var count_13;
    try{
        KeyRange_56 = IDBKeyRange.bound('PZq', 'PZq', false, true);
        count_13 = objectStore_24.count(KeyRange_56);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_58 = IDBKeyRange.bound('PZq', 'PZq', true, true);
        get_12 = objectStore_24.get(KeyRange_58);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('PZq', true);
        getAll_8 = objectStore_24.getAll(KeyRange_60, 546424507);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('PZq');
        getAll_8 = objectStore_24.getAll(KeyRange_61);
    }

    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.only('PZq');
        get_13 = objectStore_24.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_18 = objectStore_24.clear();
    var getAllKeys_5;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('PZq', false);
        getAllKeys_5 = objectStore_24.getAllKeys(KeyRange_64, 2463135453);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('PZq');
        getAllKeys_5 = objectStore_24.getAllKeys(KeyRange_65);
    }

    var add_7 = objectStore_24.add({f0_g: '<boolean>', f1_r: '<boolean>', f2_j: '<array>', f3_q: '<boolean>', f4_s: '<object>', f5_l: '<number>', f6_v: '<null>', f7_c: '<null>'}, 'TwV');
    var clear_19 = objectStore_24.clear();
    var getAll_9 = objectStore_24.getAll();
    var put_11 = objectStore_24.put({f0_v: '<number>', f1_u: '<null>', f2_z: '<object>', f3_u: '<boolean>', f4_u: '<array>', f5_u: '<null>', f6_s: '<boolean>', f7_u: '<number>', f8_i: '<array>', f9_k: '<null>'}, 'ElduKMSRzHJ');
    var clear_20 = objectStore_24.clear();
    txn_12.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_12.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_13 = db.transaction(['objectStore_23'], 'readonly', {durability:"relaxed"})
    var objectStore_23 = txn_13.objectStore('objectStore_23');
    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_13.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_13.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_14 = db.transaction(['objectStore_24', 'objectStore_23'], 'readonly', {durability:"strict"})
    var objectStore_24 = txn_14.objectStore('objectStore_24');
    var get_14;
    try{
        KeyRange_66 = IDBKeyRange.bound('ElduKMSRzHJ', 'ElduKMSRzHJ', false, false);
        get_14 = objectStore_24.get(KeyRange_66);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_68 = IDBKeyRange.bound('PZq', 'PZq', false, false);
        getAll_10 = objectStore_24.getAll(KeyRange_68, 2033132874);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('PZq');
        getAll_10 = objectStore_24.getAll(KeyRange_69);
    }

    var getAllKeys_6 = objectStore_24.getAllKeys(675109586);
    var count_14 = objectStore_24.count();
    var get_15;
    try{
        KeyRange_70 = IDBKeyRange.bound('PZq', 'PZq', false, true);
        get_15 = objectStore_24.get(KeyRange_70);
    }
    catch (e){
    }

    var getAllKeys_7;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('TwV', false);
        getAllKeys_7 = objectStore_24.getAllKeys(KeyRange_72, 2388080861);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('PZq');
        getAllKeys_7 = objectStore_24.getAllKeys(KeyRange_73);
    }

    var count_15;
    try{
        KeyRange_74 = IDBKeyRange.bound('PZq', 'ElduKMSRzHJ', true, false);
        count_15 = objectStore_24.count(KeyRange_74);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.bound('ElduKMSRzHJ', 'PZq', true, true);
        get_16 = objectStore_24.get(KeyRange_76);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('TwV', true);
        get_17 = objectStore_24.get(KeyRange_78);
    }
    catch (e){
    }

    var getAll_11;
    try{
        KeyRange_80 = IDBKeyRange.bound('TwV', 'TwV', false, false);
        getAll_11 = objectStore_24.getAll(KeyRange_80, 2970529104);
    }
    catch (e){
        KeyRange_81 = IDBKeyRange.only('ElduKMSRzHJ');
        getAll_11 = objectStore_24.getAll(KeyRange_81);
    }

    var get_18;
    try{
        KeyRange_82 = IDBKeyRange.bound('PZq', 'TwV', true, true);
        get_18 = objectStore_24.get(KeyRange_82);
    }
    catch (e){
    }

    var count_16 = objectStore_24.count();
    var get_19;
    try{
        KeyRange_84 = IDBKeyRange.only('PZq');
        get_19 = objectStore_24.get(KeyRange_84);
    }
    catch (e){
    }

    var getAll_12 = objectStore_24.getAll(1338885742);
    var getAll_13 = objectStore_24.getAll(77960075);
    var get_20;
    try{
        KeyRange_86 = IDBKeyRange.only('ElduKMSRzHJ');
        get_20 = objectStore_24.get(KeyRange_86);
    }
    catch (e){
    }

    var count_17 = objectStore_24.count();
    var get_21;
    try{
        KeyRange_88 = IDBKeyRange.bound('ElduKMSRzHJ', 'ElduKMSRzHJ', false, false);
        get_21 = objectStore_24.get(KeyRange_88);
    }
    catch (e){
    }

    txn_14.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_14.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_15 = db.transaction(['objectStore_21'], 'readonly', {durability:"strict"})
    var objectStore_21 = txn_15.objectStore('objectStore_21');
    var count_18 = objectStore_21.count();
    var getAllKeys_8 = objectStore_21.getAllKeys(2931772755);
    var getAll_14 = objectStore_21.getAll();
    var getAll_15 = objectStore_21.getAll();
    var get_22;
    try{
        KeyRange_90 = IDBKeyRange.bound('Miv', 'Miv', false, false);
        get_22 = objectStore_21.get(KeyRange_90);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_21.getAllKeys();
    var count_19;
    try{
        KeyRange_92 = IDBKeyRange.bound('Miv', 'Miv', false, true);
        count_19 = objectStore_21.count(KeyRange_92);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_94 = IDBKeyRange.only('Miv');
        count_20 = objectStore_21.count(KeyRange_94);
    }
    catch (e){
    }

    var getAllKeys_10 = objectStore_21.getAllKeys(4254682098);
    var get_23;
    try{
        KeyRange_96 = IDBKeyRange.bound('Miv', 'Miv', false, false);
        get_23 = objectStore_21.get(KeyRange_96);
    }
    catch (e){
    }

    var count_21 = objectStore_21.count();
    var count_22 = objectStore_21.count();
    var getAll_16 = objectStore_21.getAll();
    var count_23 = objectStore_21.count();
    var count_24 = objectStore_21.count();
    var get_24;
    try{
        KeyRange_98 = IDBKeyRange.bound('Miv', 'Miv', false, true);
        get_24 = objectStore_21.get(KeyRange_98);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_100 = IDBKeyRange.lowerBound('Miv', true);
        get_25 = objectStore_21.get(KeyRange_100);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_102 = IDBKeyRange.only('Miv');
        get_26 = objectStore_21.get(KeyRange_102);
    }
    catch (e){
    }

    txn_15.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_15.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_15.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_16 = db.transaction(['objectStore_24', 'objectStore_23', 'objectStore_21'], 'readonly', {durability:"relaxed"})
    var objectStore_23 = txn_16.objectStore('objectStore_23');
    txn_16.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_16.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_16.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_17 = db.transaction(['objectStore_16'], 'readonly', {durability:"strict"})
    var objectStore_16 = txn_17.objectStore('objectStore_16');
    var index_2 = objectStore_16.index('index_15');
    var getAll_17;
    try{
        KeyRange_104 = IDBKeyRange.bound('SAYJON', 'liE', false, false);
        getAll_17 = objectStore_16.getAll(KeyRange_104, 3827336730);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('hlZuZ');
        getAll_17 = objectStore_16.getAll(KeyRange_105);
    }

    var getAllKeys_11 = objectStore_16.getAllKeys(450372849);
    var count_25;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('IEsqHetHfh', false);
        count_25 = objectStore_16.count(KeyRange_106);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('IEsqHetHfh', true);
        count_26 = objectStore_16.count(KeyRange_108);
    }
    catch (e){
    }

    var getAll_18 = objectStore_16.getAll();
    var getAll_19;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('SAYJON', false);
        getAll_19 = objectStore_16.getAll(KeyRange_110, 3163884946);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('IxktykHGq');
        getAll_19 = objectStore_16.getAll(KeyRange_111);
    }

    var get_27;
    try{
        KeyRange_112 = IDBKeyRange.bound('liE', 'SAYJON', false, false);
        get_27 = objectStore_16.get(KeyRange_112);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_114 = IDBKeyRange.bound('hlZuZ', 'liE', false, true);
        count_27 = objectStore_16.count(KeyRange_114);
    }
    catch (e){
    }

    var count_28 = objectStore_16.count();
    var count_29 = objectStore_16.count();
    var count_30;
    try{
        KeyRange_116 = IDBKeyRange.bound('qNGQL', 'IEsqHetHfh', false, true);
        count_30 = objectStore_16.count(KeyRange_116);
    }
    catch (e){
    }

    var count_31 = objectStore_16.count();
    var count_32;
    try{
        KeyRange_118 = IDBKeyRange.lowerBound('SAYJON', true);
        count_32 = objectStore_16.count(KeyRange_118);
    }
    catch (e){
    }

    var count_33 = objectStore_16.count();
    var get_28;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('SAYJON', false);
        get_28 = objectStore_16.get(KeyRange_120);
    }
    catch (e){
    }

    var count_34 = objectStore_16.count();
    var get_29;
    try{
        KeyRange_122 = IDBKeyRange.bound('liE', 'hlZuZ', true, false);
        get_29 = objectStore_16.get(KeyRange_122);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_124 = IDBKeyRange.only('hlZuZ');
        get_30 = objectStore_16.get(KeyRange_124);
    }
    catch (e){
    }

    var count_35;
    try{
        KeyRange_126 = IDBKeyRange.only('IxktykHGq');
        count_35 = objectStore_16.count(KeyRange_126);
    }
    catch (e){
    }

    var index_3 = objectStore_16.index('index_15');
    txn_17.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_17.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_17.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_18 = db.transaction(['objectStore_23'], 'readwrite', {durability:"relaxed"})
    var objectStore_23 = txn_18.objectStore('objectStore_23');
    var put_12 = objectStore_23.put({f0_s: '<boolean>', f1_r: '<number>', f2_r: '<string>', f3_t: '<array>'}, 'JfykK');
    var count_36 = objectStore_23.count();
    var put_13 = objectStore_23.put({f0_r: '<object>', f1_l: '<string>', f2_d: '<object>', f3_e: '<number>', f4_a: '<object>', f5_t: '<null>', f6_h: '<null>', f7_t: '<string>', f8_f: '<object>', f9_s: '<string>'}, 'vFELJTx');
    var count_37;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('JfykK', true);
        count_37 = objectStore_23.count(KeyRange_128);
    }
    catch (e){
    }

    var getAllKeys_12;
    try{
        KeyRange_130 = IDBKeyRange.lowerBound('vFELJTx', false);
        getAllKeys_12 = objectStore_23.getAllKeys(KeyRange_130);
    }
    catch (e){
        KeyRange_131 = IDBKeyRange.only('vFELJTx');
        getAllKeys_12 = objectStore_23.getAllKeys(KeyRange_131);
    }

    var put_14 = objectStore_23.put({f0_j: '<object>', f1_p: '<string>', f2_j: '<number>', f3_s: '<boolean>', f4_p: '<number>', f5_u: '<string>', f6_r: '<boolean>', f7_s: '<boolean>'}, 'seeD');
    var clear_21 = objectStore_23.clear();
    var count_38;
    try{
        KeyRange_132 = IDBKeyRange.bound('vFELJTx', 'vFELJTx', false, false);
        count_38 = objectStore_23.count(KeyRange_132);
    }
    catch (e){
    }

    var add_8 = objectStore_23.add({f0_a: '<number>'}, 'KZDTBj');
    var delete_5;
    try{
        KeyRange_134 = IDBKeyRange.bound('JfykK', 'seeD', true, true);
        delete_5 = objectStore_23.delete(KeyRange_134);
    }
    catch (e){
    }

    var add_9 = objectStore_23.add({f0_u: '<string>', f1_v: '<boolean>', f2_w: '<null>', f3_x: '<object>', f4_o: '<null>', f5_g: '<string>', f6_r: '<number>', f7_n: '<number>', f8_y: '<array>', f9_i: '<boolean>'}, 'CiILA');
    var clear_22 = objectStore_23.clear();
    var getAllKeys_13 = objectStore_23.getAllKeys();
    txn_18.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_18.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_18.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_19 = db.transaction(['objectStore_24'], 'readwrite', {durability:"strict"})
    var objectStore_24 = txn_19.objectStore('objectStore_24');
    var getAll_20 = objectStore_24.getAll(58256348);
    var put_15 = objectStore_24.put({f0_v: '<boolean>', f1_j: '<null>', f2_s: '<boolean>', f3_u: '<null>', f4_b: '<object>', f5_n: '<object>', f6_q: '<string>', f7_p: '<string>', f8_k: '<boolean>', f9_d: '<boolean>'}, 'XQiSYQDq');
    var clear_23 = objectStore_24.clear();
    var clear_24 = objectStore_24.clear();
    var get_31;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('ElduKMSRzHJ', true);
        get_31 = objectStore_24.get(KeyRange_136);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_138 = IDBKeyRange.lowerBound('TwV', false);
        get_32 = objectStore_24.get(KeyRange_138);
    }
    catch (e){
    }

    var add_10 = objectStore_24.add({f0_a: '<number>', f1_b: '<string>', f2_b: '<number>', f3_v: '<object>', f4_m: '<object>', f5_s: '<object>', f6_o: '<number>', f7_b: '<object>', f8_n: '<string>'}, 'ImflI');
    var getAll_21;
    try{
        KeyRange_140 = IDBKeyRange.bound('TwV', 'ElduKMSRzHJ', false, false);
        getAll_21 = objectStore_24.getAll(KeyRange_140);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('PZq');
        getAll_21 = objectStore_24.getAll(KeyRange_141);
    }

    var getAll_22;
    try{
        KeyRange_142 = IDBKeyRange.bound('ImflI', 'PZq', true, true);
        getAll_22 = objectStore_24.getAll(KeyRange_142);
    }
    catch (e){
        KeyRange_143 = IDBKeyRange.only('ImflI');
        getAll_22 = objectStore_24.getAll(KeyRange_143);
    }

    var get_33;
    try{
        KeyRange_144 = IDBKeyRange.bound('XQiSYQDq', 'ElduKMSRzHJ', true, true);
        get_33 = objectStore_24.get(KeyRange_144);
    }
    catch (e){
    }

    var put_16 = objectStore_24.put({f0_o: '<object>', f1_x: '<string>', f2_k: '<boolean>', f3_w: '<object>'}, 'QrILglVbl');
    var clear_25 = objectStore_24.clear();
    var put_17 = objectStore_24.put({f0_x: '<null>', f1_t: '<null>', f2_m: '<number>', f3_w: '<array>', f4_v: '<number>'}, 'XTfBvAMROJy');
    var count_39;
    try{
        KeyRange_146 = IDBKeyRange.bound('XQiSYQDq', 'ImflI', true, true);
        count_39 = objectStore_24.count(KeyRange_146);
    }
    catch (e){
    }

    var put_18 = objectStore_24.put({f0_l: '<null>', f1_x: '<array>'}, 'uyke');
    var count_40 = objectStore_24.count();
    txn_19.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_19.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_19.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8450')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};