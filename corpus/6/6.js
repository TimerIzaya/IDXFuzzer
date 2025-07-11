let db;
const openRequest = window.indexedDB.open('str_8992', 5609608928768871)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_78', {autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_a: '<null>', f1_h: '<array>', f2_o: '<boolean>', f3_f: '<array>', f4_h: '<string>', f5_s: '<null>', f6_b: '<object>', f7_r: '<boolean>'}, 'koBTVbGYJQMe');
    var objectStore_1 = db.createObjectStore('objectStore_79', {keypath: 'MRggEkbXjC', autoIncrement: false});
    var index_61 = objectStore_0.createIndex('index_61', 'test', {unique: true, multiEntry: true});
    var add_0 = objectStore_1.add({f0_u: '<array>', f1_k: '<null>', f2_v: '<number>', f3_u: '<null>', f4_p: '<boolean>', f5_v: '<object>', f6_a: '<object>', f7_n: '<string>', f8_a: '<number>', f9_x: '<object>'}, 'DeiCdwLAjoF');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_1.clear();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('koBTVbGYJQMe');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_62 = objectStore_1.createIndex('index_62', 'test', {unique: true, multiEntry: true});
    var clear_3 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_80', {autoIncrement: true});
    var add_1 = objectStore_0.add({f0_a: '<object>'}, 'GAfWyCor');
    var objectStore_3 = db.createObjectStore('objectStore_81');
    var count_0 = objectStore_0.count();
    var objectStore_4 = db.createObjectStore('objectStore_82', {keypath: 'nyrb', autoIncrement: true});
    var add_2 = objectStore_1.add({f0_a: '<number>', f1_r: '<object>', f2_i: '<object>', f3_s: '<string>', f4_t: '<object>', f5_e: '<number>', f6_y: '<number>', f7_e: '<object>'}, 'JiiUD');
    var index_63 = objectStore_0.createIndex('index_63', 'test', {unique: true, multiEntry: true});
    var add_3 = objectStore_1.add({f0_q: '<number>', f1_k: '<string>', f2_w: '<number>', f3_x: '<array>', f4_s: '<object>'}, 'nYQFxPRw');
    var put_1 = objectStore_0.put({f0_q: '<boolean>', f1_f: '<number>', f2_a: '<object>'}, 'OabTF');
    var objectStore_5 = db.createObjectStore('objectStore_83', {autoIncrement: true});
    var add_4 = objectStore_4.add({f0_t: '<number>', f1_l: '<object>', f2_e: '<null>', f3_v: '<array>', f4_s: '<string>', f5_p: '<number>'}, 'xGpqr');
    var clear_4 = objectStore_3.clear();
    var objectStore_6 = db.createObjectStore('objectStore_84', {keypath: 'YEEfeEuny', autoIncrement: false});
    var clear_5 = objectStore_1.clear();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('koBTVbGYJQMe', false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var put_2 = objectStore_2.put({f0_z: '<number>', f1_e: '<number>', f2_g: '<string>', f3_x: '<array>', f4_e: '<null>', f5_p: '<null>', f6_g: '<null>'}, 'nTPvoV');
    var index_64 = objectStore_6.createIndex('index_64', 'test', {unique: true});
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.only('xGpqr');
        get_2 = objectStore_4.get(KeyRange_4);
    }
    catch (e){
    }

    var put_3 = objectStore_6.put({f0_l: '<object>', f1_p: '<string>', f2_y: '<string>'}, 'xcFHFGPAwhgK');
    var put_4 = objectStore_5.put({f0_d: '<null>', f1_w: '<string>', f2_s: '<string>', f3_f: '<string>'}, 'lsUalgZdq');
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('JiiUD', 'JiiUD', true, true);
        get_3 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('lsUalgZdq', 'lsUalgZdq', true, true);
        getAll_0 = objectStore_5.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('lsUalgZdq');
        getAll_0 = objectStore_5.getAll(KeyRange_9);
    }

    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.only('xGpqr');
        getAllKeys_0 = objectStore_4.getAllKeys(KeyRange_10, 3542243560);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('xGpqr');
        getAllKeys_0 = objectStore_4.getAllKeys(KeyRange_11);
    }

    var count_1 = objectStore_0.count();
    var put_5 = objectStore_4.put({f0_i: '<string>', f1_c: '<string>', f2_e: '<boolean>', f3_s: '<number>', f4_l: '<boolean>', f5_n: '<number>', f6_r: '<boolean>', f7_i: '<string>', f8_u: '<string>'}, 'oZSnPAiXCxF');
    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.only('koBTVbGYJQMe');
        delete_0 = objectStore_0.delete(KeyRange_12);
    }
    catch (e){
    }

    var clear_6 = objectStore_0.clear();
    var clear_7 = objectStore_4.clear();
    var clear_8 = objectStore_6.clear();
    var put_6 = objectStore_6.put({f0_b: '<object>', f1_e: '<string>', f2_r: '<boolean>', f3_m: '<number>', f4_k: '<boolean>', f5_k: '<string>', f6_b: '<array>'}, 'ZdRqqnQ');
    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('xcFHFGPAwhgK', 'ZdRqqnQ', false, true);
        count_2 = objectStore_6.count(KeyRange_14);
    }
    catch (e){
    }

    var put_7 = objectStore_6.put({f0_b: '<string>', f1_n: '<array>', f2_b: '<object>'}, 'jaORypw');
    var objectStore_7 = db.createObjectStore('objectStore_85');
    var index_65 = objectStore_4.createIndex('index_65', 'test', {multiEntry: false});
    var clear_9 = objectStore_3.clear();
    var clear_10 = objectStore_3.clear();
    var index_66 = objectStore_5.createIndex('index_66', 'test', {multiEntry: false});
    db.deleteObjectStore('objectStore_79')
    var delete_1;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('jaORypw', false);
        delete_1 = objectStore_6.delete(KeyRange_16);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('OabTF', false);
        count_3 = objectStore_0.count(KeyRange_18);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('xGpqr', 'xGpqr', false, true);
        delete_2 = objectStore_4.delete(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_0.getAllKeys(3555843330);
    var index_67 = objectStore_6.createIndex('index_67', 'test', {multiEntry: true});
    var clear_11 = objectStore_6.clear();
    var add_5 = objectStore_2.add({f0_x: '<object>', f1_w: '<null>', f2_r: '<null>', f3_b: '<boolean>', f4_l: '<array>', f5_g: '<number>', f6_j: '<string>'}, 'NNJAmggDJ');
    var objectStore_8 = db.createObjectStore('objectStore_86', {autoIncrement: true});
    var count_4 = objectStore_0.count();
    db.deleteObjectStore('objectStore_80')
    var getAllKeys_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('oZSnPAiXCxF', true);
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_22, 1599079391);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('xGpqr');
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_23);
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.only('lsUalgZdq');
        get_4 = objectStore_5.get(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_87', {keypath: 'vFXUcfaS', autoIncrement: true});
    var getAll_1;
    try{
        KeyRange_26 = IDBKeyRange.bound('xcFHFGPAwhgK', 'xcFHFGPAwhgK', false, false);
        getAll_1 = objectStore_6.getAll(KeyRange_26, 2631651160);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('ZdRqqnQ');
        getAll_1 = objectStore_6.getAll(KeyRange_27);
    }

    var index_68 = objectStore_5.createIndex('index_68', 'test', {unique: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_70 = db.transaction(['objectStore_85'], 'readonly', {durability:"strict"})
    var objectStore_85 = txn_70.objectStore('objectStore_85');
    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_71 = db.transaction(['objectStore_81', 'objectStore_84'], 'readwrite', {durability:"default"})
    var objectStore_81 = txn_71.objectStore('objectStore_81');
    var add_6 = objectStore_81.add({f0_w: '<string>', f1_t: '<string>', f2_b: '<boolean>', f3_z: '<null>', f4_b: '<string>', f5_q: '<array>', f6_y: '<object>', f7_g: '<boolean>', f8_b: '<string>', f9_p: '<null>'}, 'VRRDeE');
    var add_7 = objectStore_81.add({f0_y: '<null>', f1_s: '<string>', f2_s: '<number>', f3_e: '<array>', f4_j: '<array>', f5_i: '<null>', f6_f: '<array>'}, 'NXY');
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.only('VRRDeE');
        get_5 = objectStore_81.get(KeyRange_28);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('VRRDeE', 'NXY', true, false);
        count_5 = objectStore_81.count(KeyRange_30);
    }
    catch (e){
    }

    var getAll_2 = objectStore_81.getAll();
    var count_6 = objectStore_81.count();
    var clear_12 = objectStore_81.clear();
    var count_7;
    try{
        KeyRange_32 = IDBKeyRange.bound('NXY', 'NXY', false, true);
        count_7 = objectStore_81.count(KeyRange_32);
    }
    catch (e){
    }

    var clear_13 = objectStore_81.clear();
    var put_8 = objectStore_81.put({f0_e: '<null>', f1_x: '<boolean>'}, 'jUuVqsxzpiCf');
    var put_9 = objectStore_81.put({f0_i: '<object>', f1_y: '<object>', f2_z: '<array>', f3_d: '<boolean>'}, 'QsRIvIfSVvz');
    var count_8;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('QsRIvIfSVvz', true);
        count_8 = objectStore_81.count(KeyRange_34);
    }
    catch (e){
    }

    var clear_14 = objectStore_81.clear();
    var count_9 = objectStore_81.count();
    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('QsRIvIfSVvz', false);
        get_6 = objectStore_81.get(KeyRange_36);
    }
    catch (e){
    }

    var put_10 = objectStore_81.put({f0_u: '<null>', f1_e: '<null>', f2_z: '<null>'}, 'HMJefACMHxWg');
    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.bound('HMJefACMHxWg', 'VRRDeE', true, true);
        get_7 = objectStore_81.get(KeyRange_38);
    }
    catch (e){
    }

    var add_8 = objectStore_81.add({f0_z: '<null>', f1_s: '<null>', f2_n: '<number>', f3_k: '<string>', f4_p: '<boolean>', f5_k: '<number>', f6_h: '<string>', f7_x: '<object>', f8_z: '<number>'}, 'WmFyoSKAe');
    var add_9 = objectStore_81.add({f0_c: '<string>', f1_x: '<object>', f2_g: '<array>', f3_z: '<string>', f4_f: '<null>', f5_a: '<null>', f6_u: '<boolean>'}, 'Bvsdk');
    var put_11 = objectStore_81.put({f0_g: '<number>', f1_v: '<object>', f2_x: '<boolean>', f3_s: '<number>', f4_e: '<number>', f5_d: '<string>', f6_p: '<string>', f7_r: '<null>'}, 'wbMk');
    var clear_15 = objectStore_81.clear();
    var put_12 = objectStore_81.put({f0_z: '<boolean>', f1_u: '<null>', f2_c: '<null>', f3_a: '<number>', f4_s: '<boolean>'}, 'btF');
    txn_71.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_71.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_72 = db.transaction(['objectStore_87', 'objectStore_85', 'objectStore_81'], 'readonly', {durability:"strict"})
    var objectStore_85 = txn_72.objectStore('objectStore_85');
    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_72.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_73 = db.transaction(['objectStore_82', 'objectStore_84', 'objectStore_86', 'objectStore_85', 'objectStore_78'], 'readonly', {durability:"relaxed"})
    var objectStore_78 = txn_73.objectStore('objectStore_78');
    var count_10 = objectStore_78.count();
    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.bound('OabTF', 'OabTF', true, false);
        get_8 = objectStore_78.get(KeyRange_40);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_42 = IDBKeyRange.bound('OabTF', 'OabTF', true, true);
        count_11 = objectStore_78.count(KeyRange_42);
    }
    catch (e){
    }

    var count_12 = objectStore_78.count();
    var getAllKeys_3 = objectStore_78.getAllKeys(2776041071);
    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.bound('OabTF', 'GAfWyCor', false, false);
        get_9 = objectStore_78.get(KeyRange_44);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_46 = IDBKeyRange.bound('OabTF', 'GAfWyCor', true, true);
        count_13 = objectStore_78.count(KeyRange_46);
    }
    catch (e){
    }

    var count_14;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('GAfWyCor', true);
        count_14 = objectStore_78.count(KeyRange_48);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('OabTF', false);
        count_15 = objectStore_78.count(KeyRange_50);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_52 = IDBKeyRange.bound('GAfWyCor', 'koBTVbGYJQMe', true, false);
        count_16 = objectStore_78.count(KeyRange_52);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_54 = IDBKeyRange.bound('koBTVbGYJQMe', 'koBTVbGYJQMe', false, false);
        get_10 = objectStore_78.get(KeyRange_54);
    }
    catch (e){
    }

    var getAll_3 = objectStore_78.getAll();
    var count_17;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('OabTF', true);
        count_17 = objectStore_78.count(KeyRange_56);
    }
    catch (e){
    }

    var count_18 = objectStore_78.count();
    var index_0 = objectStore_78.index('index_63');
    var getAllKeys_4 = objectStore_78.getAllKeys(1400131953);
    var count_19;
    try{
        KeyRange_58 = IDBKeyRange.bound('OabTF', 'koBTVbGYJQMe', false, false);
        count_19 = objectStore_78.count(KeyRange_58);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_78.getAllKeys(1588445928);
    var count_20 = objectStore_78.count();
    var count_21;
    try{
        KeyRange_60 = IDBKeyRange.bound('OabTF', 'GAfWyCor', true, false);
        count_21 = objectStore_78.count(KeyRange_60);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_62 = IDBKeyRange.bound('GAfWyCor', 'OabTF', true, true);
        get_11 = objectStore_78.get(KeyRange_62);
    }
    catch (e){
    }

    txn_73.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_73.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_73.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_74 = db.transaction(['objectStore_85', 'objectStore_86', 'objectStore_83'], 'readwrite', {durability:"strict"})
    var objectStore_83 = txn_74.objectStore('objectStore_83');
    var get_12;
    try{
        KeyRange_64 = IDBKeyRange.bound('lsUalgZdq', 'lsUalgZdq', true, true);
        get_12 = objectStore_83.get(KeyRange_64);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_66 = IDBKeyRange.only('lsUalgZdq');
        get_13 = objectStore_83.get(KeyRange_66);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('lsUalgZdq', false);
        getAll_4 = objectStore_83.getAll(KeyRange_68, 4040597694);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('lsUalgZdq');
        getAll_4 = objectStore_83.getAll(KeyRange_69);
    }

    var count_22 = objectStore_83.count();
    var delete_3;
    try{
        KeyRange_70 = IDBKeyRange.only('lsUalgZdq');
        delete_3 = objectStore_83.delete(KeyRange_70);
    }
    catch (e){
    }

    var add_10 = objectStore_83.add({f0_h: '<object>', f1_n: '<boolean>', f2_r: '<number>', f3_w: '<number>', f4_r: '<string>', f5_t: '<number>', f6_y: '<boolean>'}, 'JvCAdGrbaGr');
    var add_11 = objectStore_83.add({f0_l: '<number>', f1_d: '<string>', f2_p: '<array>', f3_n: '<string>', f4_a: '<null>'}, 'pKMaLoJYYp');
    var get_14;
    try{
        KeyRange_72 = IDBKeyRange.bound('pKMaLoJYYp', 'JvCAdGrbaGr', true, true);
        get_14 = objectStore_83.get(KeyRange_72);
    }
    catch (e){
    }

    var clear_16 = objectStore_83.clear();
    var count_23 = objectStore_83.count();
    var clear_17 = objectStore_83.clear();
    var get_15;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('pKMaLoJYYp', true);
        get_15 = objectStore_83.get(KeyRange_74);
    }
    catch (e){
    }

    var count_24 = objectStore_83.count();
    var add_12 = objectStore_83.add({f0_w: '<number>', f1_d: '<object>', f2_b: '<string>', f3_j: '<boolean>', f4_c: '<null>', f5_e: '<array>', f6_f: '<boolean>', f7_t: '<object>'}, 'RIGWRCBne');
    var delete_4;
    try{
        KeyRange_76 = IDBKeyRange.only('JvCAdGrbaGr');
        delete_4 = objectStore_83.delete(KeyRange_76);
    }
    catch (e){
    }

    var count_25 = objectStore_83.count();
    var clear_18 = objectStore_83.clear();
    var get_16;
    try{
        KeyRange_78 = IDBKeyRange.bound('lsUalgZdq', 'JvCAdGrbaGr', false, true);
        get_16 = objectStore_83.get(KeyRange_78);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('JvCAdGrbaGr', false);
        getAll_5 = objectStore_83.getAll(KeyRange_80, 947532911);
    }
    catch (e){
        KeyRange_81 = IDBKeyRange.only('JvCAdGrbaGr');
        getAll_5 = objectStore_83.getAll(KeyRange_81);
    }

    var index_1 = objectStore_83.index('index_68');
    var index_2 = objectStore_83.index('index_66');
    txn_74.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_74.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_74.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_75 = db.transaction(['objectStore_82'], 'readonly', {durability:"relaxed"})
    var objectStore_82 = txn_75.objectStore('objectStore_82');
    var count_26;
    try{
        KeyRange_82 = IDBKeyRange.bound('xGpqr', 'xGpqr', false, true);
        count_26 = objectStore_82.count(KeyRange_82);
    }
    catch (e){
    }

    var count_27 = objectStore_82.count();
    var getAll_6 = objectStore_82.getAll();
    var get_17;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('xGpqr', false);
        get_17 = objectStore_82.get(KeyRange_84);
    }
    catch (e){
    }

    var index_3 = objectStore_82.index('index_65');
    var count_28;
    try{
        KeyRange_86 = IDBKeyRange.bound('xGpqr', 'xGpqr', false, false);
        count_28 = objectStore_82.count(KeyRange_86);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_88 = IDBKeyRange.bound('xGpqr', 'oZSnPAiXCxF', true, true);
        get_18 = objectStore_82.get(KeyRange_88);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_90 = IDBKeyRange.bound('xGpqr', 'xGpqr', true, false);
        count_29 = objectStore_82.count(KeyRange_90);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_92 = IDBKeyRange.bound('xGpqr', 'xGpqr', true, true);
        get_19 = objectStore_82.get(KeyRange_92);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('xGpqr', false);
        get_20 = objectStore_82.get(KeyRange_94);
    }
    catch (e){
    }

    var index_4 = objectStore_82.index('index_65');
    var count_30 = objectStore_82.count();
    var getAll_7;
    try{
        KeyRange_96 = IDBKeyRange.bound('oZSnPAiXCxF', 'xGpqr', true, true);
        getAll_7 = objectStore_82.getAll(KeyRange_96);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('xGpqr');
        getAll_7 = objectStore_82.getAll(KeyRange_97);
    }

    var getAllKeys_6;
    try{
        KeyRange_98 = IDBKeyRange.bound('xGpqr', 'xGpqr', true, false);
        getAllKeys_6 = objectStore_82.getAllKeys(KeyRange_98, 1789494133);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('xGpqr');
        getAllKeys_6 = objectStore_82.getAllKeys(KeyRange_99);
    }

    var getAllKeys_7 = objectStore_82.getAllKeys();
    var count_31 = objectStore_82.count();
    var getAllKeys_8 = objectStore_82.getAllKeys(441373517);
    var get_21;
    try{
        KeyRange_100 = IDBKeyRange.only('xGpqr');
        get_21 = objectStore_82.get(KeyRange_100);
    }
    catch (e){
    }

    txn_75.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_75.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_75.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_76 = db.transaction(['objectStore_82', 'objectStore_83', 'objectStore_87', 'objectStore_81', 'objectStore_85'], 'readwrite', {durability:"relaxed"})
    var objectStore_83 = txn_76.objectStore('objectStore_83');
    var clear_19 = objectStore_83.clear();
    var getAll_8;
    try{
        KeyRange_102 = IDBKeyRange.bound('RIGWRCBne', 'JvCAdGrbaGr', false, true);
        getAll_8 = objectStore_83.getAll(KeyRange_102, 2169641382);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('lsUalgZdq');
        getAll_8 = objectStore_83.getAll(KeyRange_103);
    }

    var add_13 = objectStore_83.add({f0_o: '<object>', f1_c: '<number>', f2_i: '<string>', f3_g: '<number>', f4_j: '<null>', f5_e: '<number>'}, 'nLgpjZ');
    var add_14 = objectStore_83.add({f0_o: '<object>', f1_i: '<object>', f2_h: '<object>', f3_u: '<number>', f4_p: '<array>', f5_g: '<boolean>'}, 'bDOeQkGQ');
    var clear_20 = objectStore_83.clear();
    var get_22;
    try{
        KeyRange_104 = IDBKeyRange.bound('pKMaLoJYYp', 'pKMaLoJYYp', false, false);
        get_22 = objectStore_83.get(KeyRange_104);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_106 = IDBKeyRange.bound('RIGWRCBne', 'JvCAdGrbaGr', true, true);
        getAll_9 = objectStore_83.getAll(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('pKMaLoJYYp');
        getAll_9 = objectStore_83.getAll(KeyRange_107);
    }

    var get_23;
    try{
        KeyRange_108 = IDBKeyRange.bound('bDOeQkGQ', 'bDOeQkGQ', false, true);
        get_23 = objectStore_83.get(KeyRange_108);
    }
    catch (e){
    }

    var getAll_10 = objectStore_83.getAll();
    var count_32;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('JvCAdGrbaGr', false);
        count_32 = objectStore_83.count(KeyRange_110);
    }
    catch (e){
    }

    var delete_5;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('nLgpjZ', true);
        delete_5 = objectStore_83.delete(KeyRange_112);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_114 = IDBKeyRange.only('pKMaLoJYYp');
        count_33 = objectStore_83.count(KeyRange_114);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('lsUalgZdq', true);
        get_24 = objectStore_83.get(KeyRange_116);
    }
    catch (e){
    }

    var getAll_11;
    try{
        KeyRange_118 = IDBKeyRange.bound('bDOeQkGQ', 'lsUalgZdq', false, true);
        getAll_11 = objectStore_83.getAll(KeyRange_118, 240094220);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('bDOeQkGQ');
        getAll_11 = objectStore_83.getAll(KeyRange_119);
    }

    var count_34;
    try{
        KeyRange_120 = IDBKeyRange.only('pKMaLoJYYp');
        count_34 = objectStore_83.count(KeyRange_120);
    }
    catch (e){
    }

    var clear_21 = objectStore_83.clear();
    var get_25;
    try{
        KeyRange_122 = IDBKeyRange.bound('pKMaLoJYYp', 'bDOeQkGQ', true, false);
        get_25 = objectStore_83.get(KeyRange_122);
    }
    catch (e){
    }

    var add_15 = objectStore_83.add({f0_y: '<object>', f1_t: '<array>', f2_g: '<boolean>', f3_i: '<number>', f4_n: '<boolean>'}, 'EBQsnxzHeWip');
    var count_35 = objectStore_83.count();
    var get_26;
    try{
        KeyRange_124 = IDBKeyRange.bound('RIGWRCBne', 'EBQsnxzHeWip', false, true);
        get_26 = objectStore_83.get(KeyRange_124);
    }
    catch (e){
    }

    txn_76.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_76.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_76.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_77 = db.transaction(['objectStore_87'], 'readonly', {durability:"strict"})
    var objectStore_87 = txn_77.objectStore('objectStore_87');
    txn_77.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_77.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_77.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_78 = db.transaction(['objectStore_86', 'objectStore_85', 'objectStore_84'], 'readonly', {durability:"relaxed"})
    var objectStore_86 = txn_78.objectStore('objectStore_86');
    txn_78.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_78.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_78.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_79 = db.transaction(['objectStore_81', 'objectStore_84'], 'readwrite', {durability:"strict"})
    var objectStore_81 = txn_79.objectStore('objectStore_81');
    var put_13 = objectStore_81.put({f0_e: '<string>', f1_o: '<object>', f2_n: '<boolean>', f3_p: '<number>', f4_q: '<number>', f5_d: '<boolean>', f6_e: '<boolean>', f7_w: '<number>'}, 'TllKvi');
    var getAllKeys_9 = objectStore_81.getAllKeys();
    var count_36;
    try{
        KeyRange_126 = IDBKeyRange.bound('WmFyoSKAe', 'btF', true, false);
        count_36 = objectStore_81.count(KeyRange_126);
    }
    catch (e){
    }

    var count_37;
    try{
        KeyRange_128 = IDBKeyRange.bound('TllKvi', 'NXY', true, true);
        count_37 = objectStore_81.count(KeyRange_128);
    }
    catch (e){
    }

    var put_14 = objectStore_81.put({f0_l: '<null>', f1_q: '<string>'}, 'LfYW');
    var clear_22 = objectStore_81.clear();
    var delete_6;
    try{
        KeyRange_130 = IDBKeyRange.bound('QsRIvIfSVvz', 'LfYW', false, true);
        delete_6 = objectStore_81.delete(KeyRange_130);
    }
    catch (e){
    }

    var clear_23 = objectStore_81.clear();
    var getAll_12;
    try{
        KeyRange_132 = IDBKeyRange.bound('VRRDeE', 'TllKvi', true, false);
        getAll_12 = objectStore_81.getAll(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('btF');
        getAll_12 = objectStore_81.getAll(KeyRange_133);
    }

    var put_15 = objectStore_81.put({f0_e: '<boolean>', f1_s: '<boolean>', f2_h: '<array>', f3_w: '<number>', f4_h: '<string>', f5_v: '<object>', f6_m: '<boolean>', f7_f: '<number>', f8_b: '<number>'}, 'OAJi');
    var clear_24 = objectStore_81.clear();
    var add_16 = objectStore_81.add({f0_k: '<number>', f1_q: '<number>', f2_f: '<null>', f3_p: '<string>', f4_d: '<array>', f5_f: '<array>', f6_k: '<array>', f7_n: '<object>', f8_w: '<boolean>', f9_r: '<string>'}, 'DlHHZJbenm');
    var get_27;
    try{
        KeyRange_134 = IDBKeyRange.bound('HMJefACMHxWg', 'NXY', false, true);
        get_27 = objectStore_81.get(KeyRange_134);
    }
    catch (e){
    }

    var clear_25 = objectStore_81.clear();
    var getAllKeys_10 = objectStore_81.getAllKeys(3187531872);
    var clear_26 = objectStore_81.clear();
    var add_17 = objectStore_81.add({f0_j: '<null>', f1_k: '<array>', f2_l: '<array>', f3_l: '<null>', f4_y: '<object>', f5_q: '<array>', f6_s: '<boolean>', f7_i: '<array>', f8_w: '<array>'}, 'WQfFy');
    txn_79.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_79.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_79.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_853')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};