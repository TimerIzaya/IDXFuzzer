let db;
const openRequest = window.indexedDB.open('str_7996', 4545175481175231)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_20');
    var put_0 = objectStore_0.put({f0_u: '<null>', f1_i: '<string>', f2_d: '<object>', f3_f: '<array>', f4_h: '<array>', f5_y: '<boolean>', f6_n: '<array>'}, 'ncQq');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ncQq', true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('ncQq', 'ncQq', true, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('ncQq');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_3);
    }

    var clear_0 = objectStore_0.clear();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('ncQq', 'ncQq', false, true);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_20')
    var objectStore_1 = db.createObjectStore('objectStore_21', {autoIncrement: true});
    var add_0 = objectStore_1.add({f0_j: '<string>', f1_e: '<object>', f2_e: '<string>', f3_h: '<boolean>'}, 'gEKk');
    var objectStore_2 = db.createObjectStore('objectStore_22', {autoIncrement: true});
    var getAllKeys_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('gEKk', 'gEKk', false, true);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_6, 2723671789);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('gEKk');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_7);
    }

    var index_18 = objectStore_1.createIndex('index_18', 'test');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('gEKk', false);
        count_2 = objectStore_1.count(KeyRange_8);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_23');
    var delete_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('gEKk', false);
        delete_0 = objectStore_1.delete(KeyRange_10);
    }
    catch (e){
    }

    var add_1 = objectStore_1.add({f0_e: '<object>', f1_h: '<number>', f2_d: '<array>'}, 'fqYnucVMdsXy');
    var clear_1 = objectStore_3.clear();
    var add_2 = objectStore_1.add({f0_x: '<string>', f1_o: '<number>', f2_u: '<array>', f3_p: '<array>', f4_b: '<string>'}, 'YkuBf');
    var add_3 = objectStore_3.add({f0_v: '<object>', f1_n: '<object>', f2_p: '<boolean>'}, 'huBGAcM');
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('fqYnucVMdsXy', 'gEKk', true, false);
        get_2 = objectStore_1.get(KeyRange_12);
    }
    catch (e){
    }

    var index_19 = objectStore_1.createIndex('index_19', 'test', {unique: false, multiEntry: false});
    var clear_2 = objectStore_3.clear();
    var add_4 = objectStore_3.add({f0_b: '<string>', f1_e: '<boolean>', f2_u: '<number>', f3_j: '<array>', f4_p: '<null>', f5_p: '<array>', f6_k: '<array>', f7_z: '<boolean>', f8_z: '<boolean>'}, 'kPQzOmbYoYG');
    var put_1 = objectStore_2.put({f0_o: '<array>', f1_u: '<array>', f2_s: '<array>'}, 'cATAWfz');
    var add_5 = objectStore_2.add({f0_h: '<object>', f1_e: '<boolean>', f2_d: '<string>', f3_b: '<boolean>', f4_l: '<string>', f5_s: '<string>', f6_j: '<string>'}, 'xjOnQ');
    var add_6 = objectStore_2.add({f0_v: '<number>', f1_q: '<string>', f2_t: '<null>', f3_x: '<array>', f4_m: '<object>', f5_h: '<string>', f6_j: '<boolean>', f7_w: '<array>'}, 'vtlp');
    var count_3 = objectStore_3.count();
    var clear_3 = objectStore_1.clear();
    var objectStore_4 = db.createObjectStore('objectStore_24', {keypath: 'IYxnBHrgI', autoIncrement: true});
    var put_2 = objectStore_2.put({f0_i: '<number>', f1_c: '<object>'}, 'IZvWXNlwvQK');
    var objectStore_5 = db.createObjectStore('objectStore_25', {keypath: 'fcN'});
    var clear_4 = objectStore_2.clear();
    var clear_5 = objectStore_2.clear();
    var clear_6 = objectStore_3.clear();
    var index_20 = objectStore_5.createIndex('index_20', 'test', {unique: true, multiEntry: false});
    var put_3 = objectStore_4.put({f0_l: '<string>'}, 'vKTruLJDk');
    var clear_7 = objectStore_5.clear();
    var index_21 = objectStore_4.createIndex('index_21', 'test', {unique: false});
    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('IZvWXNlwvQK', 'vtlp', true, true);
        count_4 = objectStore_2.count(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('huBGAcM', 'kPQzOmbYoYG', true, true);
        get_3 = objectStore_3.get(KeyRange_16);
    }
    catch (e){
    }

    var clear_8 = objectStore_1.clear();
    var count_5 = objectStore_2.count();
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('vKTruLJDk', 'vKTruLJDk', true, false);
        get_4 = objectStore_4.get(KeyRange_18);
    }
    catch (e){
    }

    var add_7 = objectStore_2.add({f0_v: '<string>', f1_g: '<array>', f2_v: '<number>', f3_y: '<string>', f4_f: '<boolean>'}, 'YZNCP');
    var add_8 = objectStore_4.add({f0_o: '<number>', f1_f: '<array>', f2_y: '<object>', f3_w: '<array>', f4_n: '<string>'}, 'LJbTNshD');
    var delete_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('kPQzOmbYoYG', 'huBGAcM', false, false);
        delete_1 = objectStore_3.delete(KeyRange_20);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('huBGAcM', false);
        delete_2 = objectStore_3.delete(KeyRange_22);
    }
    catch (e){
    }

    var index_22 = objectStore_3.createIndex('index_22', 'test');
    objectStore_3.deleteIndex('index_22')
    var count_6 = objectStore_1.count();
    var put_4 = objectStore_4.put({f0_g: '<array>', f1_q: '<number>', f2_k: '<boolean>', f3_g: '<object>', f4_z: '<string>', f5_m: '<number>'}, 'zGlyNvHgc');
    var put_5 = objectStore_1.put({f0_b: '<string>', f1_r: '<object>', f2_t: '<null>', f3_w: '<string>', f4_o: '<object>', f5_u: '<string>', f6_r: '<array>', f7_f: '<number>', f8_t: '<boolean>'}, 'hqPy');
    var add_9 = objectStore_4.add({f0_a: '<array>', f1_r: '<boolean>'}, 'igovI');
    var delete_3;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('igovI', false);
        delete_3 = objectStore_4.delete(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_26', {keypath: 'ZpIST'});
    var getAllKeys_2 = objectStore_2.getAllKeys(3295197535);
    var add_10 = objectStore_5.add({f0_o: '<number>', f1_l: '<number>', f2_k: '<number>', f3_m: '<number>', f4_n: '<boolean>', f5_o: '<boolean>', f6_x: '<null>', f7_g: '<array>', f8_j: '<number>'}, 'bOwkPxNbIi');
    var add_11 = objectStore_6.add({f0_c: '<number>', f1_s: '<number>', f2_c: '<object>'}, 'hCAv');
    var put_6 = objectStore_1.put({f0_x: '<number>', f1_j: '<null>', f2_f: '<string>', f3_w: '<null>', f4_o: '<string>', f5_h: '<boolean>', f6_m: '<null>'}, 'CaDAe');
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.only('xjOnQ');
        get_5 = objectStore_2.get(KeyRange_26);
    }
    catch (e){
    }

    var index_23 = objectStore_5.createIndex('index_23', 'test');
    var add_12 = objectStore_3.add({f0_u: '<string>'}, 'VVzVvcvmL');
    var put_7 = objectStore_3.put({f0_k: '<object>', f1_t: '<array>'}, 'nXAGvCka');
    var add_13 = objectStore_3.add({f0_b: '<object>', f1_r: '<boolean>', f2_d: '<null>', f3_q: '<boolean>', f4_f: '<string>', f5_n: '<array>', f6_s: '<string>', f7_d: '<string>'}, 'PHWcXCGqnq');
    var add_14 = objectStore_2.add({f0_o: '<boolean>', f1_t: '<array>'}, 'gdeefDJ');
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('IZvWXNlwvQK', 'YZNCP', false, true);
        get_6 = objectStore_2.get(KeyRange_28);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_21')
    var index_24 = objectStore_3.createIndex('index_24', 'test', {unique: false, multiEntry: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_20 = db.transaction(['objectStore_26', 'objectStore_24', 'objectStore_22', 'objectStore_23', 'objectStore_25'], 'readonly', {durability:"default"})
    var objectStore_25;
    txn_20.objectStore('objectStore_25')
    var add_15 = objectStore_25.add({f0_c: '<null>', f1_v: '<string>', f2_s: '<null>', f3_n: '<boolean>', f4_v: '<boolean>', f5_r: '<number>', f6_w: '<object>', f7_f: '<null>'}, 'qyrdfUQcwpo');
    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('qyrdfUQcwpo', 'qyrdfUQcwpo', true, false);
        get_7 = objectStore_25.get(KeyRange_30);
    }
    catch (e){
    }

    var put_8 = objectStore_25.put({f0_w: '<object>', f1_r: '<object>'}, 'cdsJOy');
    var getAll_0;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('cdsJOy', true);
        getAll_0 = objectStore_25.getAll(KeyRange_32, 2021933045);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('bOwkPxNbIi');
        getAll_0 = objectStore_25.getAll(KeyRange_33);
    }

    var index_0 = objectStore_25.index('index_20');
    var add_16 = objectStore_25.add({f0_t: '<object>'}, 'PpILQFWKkZnN');
    var get_8;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('PpILQFWKkZnN', false);
        get_8 = objectStore_25.get(KeyRange_34);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_36 = IDBKeyRange.only('bOwkPxNbIi');
        getAll_1 = objectStore_25.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('bOwkPxNbIi');
        getAll_1 = objectStore_25.getAll(KeyRange_37);
    }

    var getAll_2 = objectStore_25.getAll();
    var count_7 = objectStore_25.count();
    var add_17 = objectStore_25.add({f0_p: '<object>', f1_w: '<array>', f2_h: '<number>', f3_f: '<number>', f4_n: '<object>', f5_c: '<number>', f6_r: '<boolean>'}, 'FLC');
    var delete_4;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('PpILQFWKkZnN', false);
        delete_4 = objectStore_25.delete(KeyRange_38);
    }
    catch (e){
    }

    var add_18 = objectStore_25.add({f0_f: '<boolean>', f1_p: '<string>', f2_g: '<array>', f3_l: '<boolean>', f4_z: '<number>', f5_m: '<null>', f6_v: '<object>', f7_f: '<boolean>', f8_j: '<boolean>'}, 'pDQJ');
    var count_8;
    try{
        KeyRange_40 = IDBKeyRange.only('FLC');
        count_8 = objectStore_25.count(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('qyrdfUQcwpo', true);
        get_9 = objectStore_25.get(KeyRange_42);
    }
    catch (e){
    }

    var count_9 = objectStore_25.count();
    var delete_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('pDQJ', 'cdsJOy', false, false);
        delete_5 = objectStore_25.delete(KeyRange_44);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.bound('cdsJOy', 'FLC', true, true);
        get_10 = objectStore_25.get(KeyRange_46);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_48 = IDBKeyRange.bound('FLC', 'qyrdfUQcwpo', true, false);
        get_11 = objectStore_25.get(KeyRange_48);
    }
    catch (e){
    }

    var put_9 = objectStore_25.put({f0_i: '<string>', f1_j: '<array>'}, 'ePXJXDmXoxsF');
    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_21 = db.transaction(['objectStore_26'], 'readwrite', {durability:"default"})
    var objectStore_26;
    txn_21.objectStore('objectStore_26')
    var count_10 = objectStore_26.count();
    var put_10 = objectStore_26.put({f0_i: '<boolean>'}, 'zBXPIFDp');
    var put_11 = objectStore_26.put({f0_f: '<string>', f1_v: '<array>', f2_c: '<string>', f3_q: '<number>'}, 'VWyIM');
    var getAll_3 = objectStore_26.getAll(3528472659);
    var put_12 = objectStore_26.put({f0_f: '<string>', f1_v: '<string>', f2_o: '<array>', f3_q: '<object>', f4_d: '<number>'}, 'KfYXZZhiy');
    var count_11 = objectStore_26.count();
    var add_19 = objectStore_26.add({f0_b: '<number>', f1_e: '<boolean>', f2_w: '<number>', f3_f: '<object>', f4_s: '<array>', f5_g: '<array>'}, 'KXXHP');
    var delete_6;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('KfYXZZhiy', false);
        delete_6 = objectStore_26.delete(KeyRange_50);
    }
    catch (e){
    }

    var count_12 = objectStore_26.count();
    var add_20 = objectStore_26.add({f0_a: '<null>', f1_o: '<boolean>', f2_g: '<array>', f3_d: '<array>', f4_p: '<boolean>', f5_m: '<boolean>', f6_i: '<null>', f7_j: '<null>', f8_r: '<number>', f9_b: '<null>'}, 'rNOpcOXEwlnw');
    var clear_9 = objectStore_26.clear();
    var count_13;
    try{
        KeyRange_52 = IDBKeyRange.bound('VWyIM', 'KfYXZZhiy', true, false);
        count_13 = objectStore_26.count(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_26.getAllKeys();
    var count_14 = objectStore_26.count();
    var clear_10 = objectStore_26.clear();
    var delete_7;
    try{
        KeyRange_54 = IDBKeyRange.bound('KfYXZZhiy', 'VWyIM', true, false);
        delete_7 = objectStore_26.delete(KeyRange_54);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_56 = IDBKeyRange.bound('KXXHP', 'VWyIM', false, true);
        getAllKeys_4 = objectStore_26.getAllKeys(KeyRange_56, 4082035345);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('KfYXZZhiy');
        getAllKeys_4 = objectStore_26.getAllKeys(KeyRange_57);
    }

    var delete_8;
    try{
        KeyRange_58 = IDBKeyRange.bound('rNOpcOXEwlnw', 'hCAv', false, true);
        delete_8 = objectStore_26.delete(KeyRange_58);
    }
    catch (e){
    }

    var add_21 = objectStore_26.add({f0_z: '<boolean>', f1_s: '<boolean>'}, 'jIhjWJftHE');
    var getAllKeys_5 = objectStore_26.getAllKeys(2533241328);
    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_22 = db.transaction(['objectStore_22', 'objectStore_23', 'objectStore_25', 'objectStore_24'], 'readonly', {durability:"strict"})
    var objectStore_23;
    txn_20.objectStore('objectStore_23')
    var clear_11 = objectStore_23.clear();
    var getAll_4 = objectStore_23.getAll(843810521);
    var count_15;
    try{
        KeyRange_60 = IDBKeyRange.bound('nXAGvCka', 'VVzVvcvmL', true, true);
        count_15 = objectStore_23.count(KeyRange_60);
    }
    catch (e){
    }

    var put_13 = objectStore_23.put({f0_c: '<string>', f1_j: '<number>', f2_f: '<boolean>'}, 'MRGSh');
    var clear_12 = objectStore_23.clear();
    var put_14 = objectStore_23.put({f0_l: '<number>', f1_b: '<object>', f2_n: '<number>', f3_o: '<number>', f4_d: '<boolean>', f5_o: '<array>'}, 'rxVdCIkQJYqI');
    var get_12;
    try{
        KeyRange_62 = IDBKeyRange.only('huBGAcM');
        get_12 = objectStore_23.get(KeyRange_62);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_64 = IDBKeyRange.bound('kPQzOmbYoYG', 'PHWcXCGqnq', true, true);
        get_13 = objectStore_23.get(KeyRange_64);
    }
    catch (e){
    }

    var clear_13 = objectStore_23.clear();
    var get_14;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('MRGSh', false);
        get_14 = objectStore_23.get(KeyRange_66);
    }
    catch (e){
    }

    var add_22 = objectStore_23.add({f0_n: '<boolean>', f1_o: '<boolean>', f2_s: '<number>', f3_k: '<number>', f4_k: '<string>', f5_o: '<object>', f6_a: '<boolean>', f7_k: '<null>', f8_u: '<boolean>'}, 'OPsvbxdtRX');
    var count_16 = objectStore_23.count();
    var add_23 = objectStore_23.add({f0_t: '<object>', f1_m: '<null>', f2_d: '<object>', f3_e: '<array>', f4_e: '<number>', f5_d: '<object>', f6_e: '<boolean>', f7_w: '<array>'}, 'mbschsnxwYSB');
    var getAllKeys_6;
    try{
        KeyRange_68 = IDBKeyRange.bound('mbschsnxwYSB', 'PHWcXCGqnq', true, true);
        getAllKeys_6 = objectStore_23.getAllKeys(KeyRange_68);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('rxVdCIkQJYqI');
        getAllKeys_6 = objectStore_23.getAllKeys(KeyRange_69);
    }

    var clear_14 = objectStore_23.clear();
    var count_17;
    try{
        KeyRange_70 = IDBKeyRange.bound('OPsvbxdtRX', 'kPQzOmbYoYG', true, true);
        count_17 = objectStore_23.count(KeyRange_70);
    }
    catch (e){
    }

    var add_24 = objectStore_23.add({f0_h: '<boolean>', f1_a: '<string>', f2_c: '<object>'}, 'Zjetq');
    var clear_15 = objectStore_23.clear();
    var get_15;
    try{
        KeyRange_72 = IDBKeyRange.bound('huBGAcM', 'MRGSh', true, false);
        get_15 = objectStore_23.get(KeyRange_72);
    }
    catch (e){
    }

    var clear_16 = objectStore_23.clear();
    var count_18 = objectStore_23.count();
    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_22.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_23 = db.transaction(['objectStore_26'], 'readwrite', {durability:"default"})
    var objectStore_26;
    txn_20.objectStore('objectStore_26')
    var getAllKeys_7 = objectStore_26.getAllKeys(2460491104);
    var clear_17 = objectStore_26.clear();
    var count_19 = objectStore_26.count();
    var count_20;
    try{
        KeyRange_74 = IDBKeyRange.bound('zBXPIFDp', 'hCAv', false, true);
        count_20 = objectStore_26.count(KeyRange_74);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.only('hCAv');
        get_16 = objectStore_26.get(KeyRange_76);
    }
    catch (e){
    }

    var put_15 = objectStore_26.put({f0_u: '<boolean>', f1_s: '<null>', f2_q: '<number>', f3_y: '<string>', f4_j: '<null>', f5_c: '<null>', f6_x: '<boolean>', f7_j: '<boolean>', f8_j: '<boolean>'}, 'bTye');
    var put_16 = objectStore_26.put({f0_u: '<string>', f1_y: '<null>', f2_j: '<boolean>', f3_z: '<number>', f4_n: '<string>', f5_t: '<boolean>'}, 'ykbU');
    var get_17;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('ykbU', false);
        get_17 = objectStore_26.get(KeyRange_78);
    }
    catch (e){
    }

    var clear_18 = objectStore_26.clear();
    var count_21 = objectStore_26.count();
    var put_17 = objectStore_26.put({f0_h: '<number>', f1_z: '<object>', f2_s: '<object>', f3_k: '<null>', f4_u: '<object>', f5_a: '<number>', f6_b: '<array>'}, 'OhKuevPawm');
    var get_18;
    try{
        KeyRange_80 = IDBKeyRange.bound('VWyIM', 'jIhjWJftHE', true, true);
        get_18 = objectStore_26.get(KeyRange_80);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_82 = IDBKeyRange.bound('zBXPIFDp', 'rNOpcOXEwlnw', true, true);
        get_19 = objectStore_26.get(KeyRange_82);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_84 = IDBKeyRange.bound('VWyIM', 'VWyIM', true, false);
        get_20 = objectStore_26.get(KeyRange_84);
    }
    catch (e){
    }

    var clear_19 = objectStore_26.clear();
    var clear_20 = objectStore_26.clear();
    var clear_21 = objectStore_26.clear();
    var count_22 = objectStore_26.count();
    var count_23 = objectStore_26.count();
    var add_25 = objectStore_26.add({f0_n: '<object>', f1_w: '<null>', f2_t: '<object>', f3_v: '<object>', f4_u: '<number>', f5_d: '<boolean>', f6_f: '<string>'}, 'yYWA');
    var count_24;
    try{
        KeyRange_86 = IDBKeyRange.only('ykbU');
        count_24 = objectStore_26.count(KeyRange_86);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_88 = IDBKeyRange.bound('yYWA', 'yYWA', false, false);
        get_21 = objectStore_26.get(KeyRange_88);
    }
    catch (e){
    }

    var add_26 = objectStore_26.add({f0_u: '<string>', f1_y: '<object>', f2_o: '<number>', f3_h: '<boolean>', f4_b: '<array>', f5_t: '<object>', f6_q: '<null>', f7_u: '<number>', f8_g: '<null>'}, 'IMnLVo');
    var add_27 = objectStore_26.add({f0_e: '<object>', f1_h: '<boolean>', f2_k: '<boolean>', f3_c: '<string>', f4_n: '<object>', f5_k: '<string>', f6_o: '<number>'}, 'KpuOwTBV');
    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_21.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_24 = db.transaction(['objectStore_25'], 'readwrite', {durability:"strict"})
    var objectStore_25;
    txn_24.objectStore('objectStore_25')
    var count_25;
    try{
        KeyRange_90 = IDBKeyRange.bound('ePXJXDmXoxsF', 'cdsJOy', false, false);
        count_25 = objectStore_25.count(KeyRange_90);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_92 = IDBKeyRange.bound('FLC', 'pDQJ', false, false);
        get_22 = objectStore_25.get(KeyRange_92);
    }
    catch (e){
    }

    var add_28 = objectStore_25.add({f0_u: '<null>', f1_a: '<string>', f2_v: '<array>', f3_d: '<null>', f4_s: '<number>', f5_t: '<null>', f6_q: '<object>', f7_h: '<string>', f8_i: '<object>', f9_m: '<array>'}, 'stfKb');
    var index_1 = objectStore_25.index('index_23');
    var count_26;
    try{
        KeyRange_94 = IDBKeyRange.only('cdsJOy');
        count_26 = objectStore_25.count(KeyRange_94);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('ePXJXDmXoxsF', true);
        get_23 = objectStore_25.get(KeyRange_96);
    }
    catch (e){
    }

    var count_27 = objectStore_25.count();
    var get_24;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('stfKb', true);
        get_24 = objectStore_25.get(KeyRange_98);
    }
    catch (e){
    }

    var put_18 = objectStore_25.put({f0_x: '<number>', f1_o: '<null>', f2_o: '<object>', f3_g: '<object>', f4_l: '<array>', f5_c: '<string>'}, 'GmtpUXlF');
    var getAllKeys_8;
    try{
        KeyRange_100 = IDBKeyRange.bound('PpILQFWKkZnN', 'FLC', false, true);
        getAllKeys_8 = objectStore_25.getAllKeys(KeyRange_100);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('qyrdfUQcwpo');
        getAllKeys_8 = objectStore_25.getAllKeys(KeyRange_101);
    }

    var delete_9;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('ePXJXDmXoxsF', false);
        delete_9 = objectStore_25.delete(KeyRange_102);
    }
    catch (e){
    }

    var put_19 = objectStore_25.put({f0_c: '<null>', f1_t: '<array>', f2_c: '<object>', f3_k: '<null>', f4_h: '<array>', f5_e: '<number>', f6_s: '<array>', f7_z: '<object>'}, 'QDJfqJPZRqJ');
    var getAll_5 = objectStore_25.getAll(2031343771);
    var get_25;
    try{
        KeyRange_104 = IDBKeyRange.only('stfKb');
        get_25 = objectStore_25.get(KeyRange_104);
    }
    catch (e){
    }

    var clear_22 = objectStore_25.clear();
    var count_28 = objectStore_25.count();
    var add_29 = objectStore_25.add({f0_q: '<number>', f1_h: '<number>', f2_v: '<array>'}, 'auCSrbTp');
    var put_20 = objectStore_25.put({f0_j: '<boolean>', f1_w: '<array>', f2_t: '<boolean>', f3_s: '<string>', f4_b: '<boolean>', f5_e: '<boolean>', f6_g: '<string>', f7_z: '<string>', f8_a: '<object>', f9_b: '<array>'}, 'oBUcFcFYfUrp');
    var getAllKeys_9 = objectStore_25.getAllKeys();
    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_25 = db.transaction(['objectStore_26', 'objectStore_24'], 'readwrite', {durability:"default"})
    var objectStore_24;
    txn_22.objectStore('objectStore_24')
    var delete_10;
    try{
        KeyRange_106 = IDBKeyRange.bound('igovI', 'zGlyNvHgc', true, true);
        delete_10 = objectStore_24.delete(KeyRange_106);
    }
    catch (e){
    }

    var put_21 = objectStore_24.put({f0_g: '<array>', f1_j: '<boolean>', f2_i: '<object>', f3_n: '<string>', f4_q: '<null>', f5_w: '<array>', f6_e: '<boolean>', f7_h: '<number>', f8_l: '<boolean>'}, 'DRlsSfVr');
    var add_30 = objectStore_24.add({f0_a: '<object>', f1_j: '<boolean>', f2_e: '<number>'}, 'WGfho');
    var put_22 = objectStore_24.put({f0_l: '<null>', f1_u: '<string>', f2_q: '<boolean>', f3_e: '<object>', f4_v: '<boolean>', f5_e: '<string>', f6_b: '<number>'}, 'pOvJRwAMH');
    var put_23 = objectStore_24.put({f0_n: '<null>', f1_r: '<number>'}, 'dUJ');
    var getAll_6;
    try{
        KeyRange_108 = IDBKeyRange.bound('WGfho', 'pOvJRwAMH', false, true);
        getAll_6 = objectStore_24.getAll(KeyRange_108, 479206097);
    }
    catch (e){
        KeyRange_109 = IDBKeyRange.only('dUJ');
        getAll_6 = objectStore_24.getAll(KeyRange_109);
    }

    var getAll_7 = objectStore_24.getAll(934506215);
    var getAllKeys_10;
    try{
        KeyRange_110 = IDBKeyRange.only('vKTruLJDk');
        getAllKeys_10 = objectStore_24.getAllKeys(KeyRange_110, 1528406892);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('DRlsSfVr');
        getAllKeys_10 = objectStore_24.getAllKeys(KeyRange_111);
    }

    var add_31 = objectStore_24.add({f0_r: '<object>', f1_i: '<string>', f2_z: '<object>', f3_x: '<number>', f4_d: '<array>', f5_n: '<string>', f6_p: '<number>'}, 'loDXBYMqAe');
    var add_32 = objectStore_24.add({f0_g: '<array>', f1_w: '<string>', f2_u: '<number>', f3_t: '<string>', f4_x: '<boolean>', f5_q: '<object>', f6_a: '<number>', f7_t: '<number>', f8_s: '<boolean>', f9_v: '<string>'}, 'hSdhsdF');
    var put_24 = objectStore_24.put({f0_z: '<string>', f1_i: '<null>', f2_p: '<string>', f3_d: '<number>', f4_s: '<object>'}, 'WmA');
    var getAllKeys_11 = objectStore_24.getAllKeys(3673042387);
    var count_29;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('dUJ', true);
        count_29 = objectStore_24.count(KeyRange_112);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('zGlyNvHgc', true);
        count_30 = objectStore_24.count(KeyRange_114);
    }
    catch (e){
    }

    var clear_23 = objectStore_24.clear();
    var count_31 = objectStore_24.count();
    var clear_24 = objectStore_24.clear();
    var delete_11;
    try{
        KeyRange_116 = IDBKeyRange.bound('LJbTNshD', 'DRlsSfVr', false, false);
        delete_11 = objectStore_24.delete(KeyRange_116);
    }
    catch (e){
    }

    var delete_12;
    try{
        KeyRange_118 = IDBKeyRange.bound('WmA', 'pOvJRwAMH', false, false);
        delete_12 = objectStore_24.delete(KeyRange_118);
    }
    catch (e){
    }

    var clear_25 = objectStore_24.clear();
    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_26 = db.transaction(['objectStore_26', 'objectStore_22', 'objectStore_24', 'objectStore_25'], 'readwrite', {durability:"default"})
    var objectStore_22;
    txn_25.objectStore('objectStore_22')
    var getAll_8 = objectStore_22.getAll();
    var count_32 = objectStore_22.count();
    var add_33 = objectStore_22.add({f0_a: '<boolean>', f1_y: '<number>', f2_f: '<number>', f3_e: '<null>', f4_y: '<number>', f5_v: '<boolean>', f6_r: '<string>', f7_h: '<object>'}, 'IPnmiHa');
    var add_34 = objectStore_22.add({f0_i: '<null>', f1_e: '<number>', f2_v: '<null>', f3_u: '<null>', f4_z: '<array>', f5_r: '<number>', f6_e: '<boolean>', f7_r: '<string>', f8_m: '<boolean>'}, 'OUdUCfZIC');
    var add_35 = objectStore_22.add({f0_h: '<object>', f1_b: '<null>'}, 'ykpMuT');
    var getAllKeys_12;
    try{
        KeyRange_120 = IDBKeyRange.only('IPnmiHa');
        getAllKeys_12 = objectStore_22.getAllKeys(KeyRange_120);
    }
    catch (e){
        KeyRange_121 = IDBKeyRange.only('ykpMuT');
        getAllKeys_12 = objectStore_22.getAllKeys(KeyRange_121);
    }

    var put_25 = objectStore_22.put({f0_b: '<array>', f1_c: '<object>', f2_x: '<null>'}, 'GBqy');
    var getAllKeys_13;
    try{
        KeyRange_122 = IDBKeyRange.only('GBqy');
        getAllKeys_13 = objectStore_22.getAllKeys(KeyRange_122);
    }
    catch (e){
        KeyRange_123 = IDBKeyRange.only('IZvWXNlwvQK');
        getAllKeys_13 = objectStore_22.getAllKeys(KeyRange_123);
    }

    var put_26 = objectStore_22.put({f0_c: '<string>', f1_d: '<number>', f2_j: '<number>'}, 'QytS');
    var getAllKeys_14 = objectStore_22.getAllKeys(1219622615);
    var add_36 = objectStore_22.add({f0_d: '<object>', f1_x: '<string>', f2_d: '<null>', f3_p: '<number>'}, 'fhzRpMlKXPG');
    var get_26;
    try{
        KeyRange_124 = IDBKeyRange.only('vtlp');
        get_26 = objectStore_22.get(KeyRange_124);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_126 = IDBKeyRange.bound('IPnmiHa', 'vtlp', false, true);
        get_27 = objectStore_22.get(KeyRange_126);
    }
    catch (e){
    }

    var delete_13;
    try{
        KeyRange_128 = IDBKeyRange.bound('QytS', 'OUdUCfZIC', true, true);
        delete_13 = objectStore_22.delete(KeyRange_128);
    }
    catch (e){
    }

    var add_37 = objectStore_22.add({f0_c: '<boolean>', f1_w: '<object>', f2_b: '<boolean>', f3_q: '<number>'}, 'mwooNhkhIFY');
    var count_33;
    try{
        KeyRange_130 = IDBKeyRange.lowerBound('vtlp', false);
        count_33 = objectStore_22.count(KeyRange_130);
    }
    catch (e){
    }

    var clear_26 = objectStore_22.clear();
    var get_28;
    try{
        KeyRange_132 = IDBKeyRange.lowerBound('cATAWfz', true);
        get_28 = objectStore_22.get(KeyRange_132);
    }
    catch (e){
    }

    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_26.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_27 = db.transaction(['objectStore_22'], 'readwrite', {durability:"relaxed"})
    var objectStore_22;
    txn_22.objectStore('objectStore_22')
    var add_38 = objectStore_22.add({f0_b: '<null>', f1_l: '<boolean>', f2_j: '<string>', f3_k: '<array>'}, 'gnbDJyMuO');
    var add_39 = objectStore_22.add({f0_z: '<object>', f1_w: '<null>'}, 'dxUHCiz');
    var count_34;
    try{
        KeyRange_134 = IDBKeyRange.bound('mwooNhkhIFY', 'QytS', true, false);
        count_34 = objectStore_22.count(KeyRange_134);
    }
    catch (e){
    }

    var count_35 = objectStore_22.count();
    var clear_27 = objectStore_22.clear();
    var getAllKeys_15 = objectStore_22.getAllKeys();
    var count_36 = objectStore_22.count();
    var count_37 = objectStore_22.count();
    var clear_28 = objectStore_22.clear();
    var getAllKeys_16;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('OUdUCfZIC', false);
        getAllKeys_16 = objectStore_22.getAllKeys(KeyRange_136);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('gnbDJyMuO');
        getAllKeys_16 = objectStore_22.getAllKeys(KeyRange_137);
    }

    var clear_29 = objectStore_22.clear();
    var get_29;
    try{
        KeyRange_138 = IDBKeyRange.bound('mwooNhkhIFY', 'QytS', true, true);
        get_29 = objectStore_22.get(KeyRange_138);
    }
    catch (e){
    }

    var add_40 = objectStore_22.add({f0_b: '<array>', f1_e: '<boolean>', f2_c: '<null>', f3_c: '<number>', f4_y: '<string>', f5_g: '<object>', f6_c: '<object>', f7_a: '<string>'}, 'DFFs');
    var get_30;
    try{
        KeyRange_140 = IDBKeyRange.bound('vtlp', 'OUdUCfZIC', true, false);
        get_30 = objectStore_22.get(KeyRange_140);
    }
    catch (e){
    }

    var put_27 = objectStore_22.put({f0_l: '<boolean>', f1_q: '<string>'}, 'AUeBycKXTCQ');
    var count_38;
    try{
        KeyRange_142 = IDBKeyRange.bound('GBqy', 'xjOnQ', false, true);
        count_38 = objectStore_22.count(KeyRange_142);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_144 = IDBKeyRange.bound('GBqy', 'OUdUCfZIC', false, true);
        getAll_9 = objectStore_22.getAll(KeyRange_144, 1590149066);
    }
    catch (e){
        KeyRange_145 = IDBKeyRange.only('dxUHCiz');
        getAll_9 = objectStore_22.getAll(KeyRange_145);
    }

    var getAll_10 = objectStore_22.getAll(3754618189);
    var put_28 = objectStore_22.put({f0_e: '<object>', f1_c: '<string>', f2_s: '<object>', f3_g: '<object>'}, 'vElEKGhF');
    var get_31;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('DFFs', false);
        get_31 = objectStore_22.get(KeyRange_146);
    }
    catch (e){
    }

    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_28 = db.transaction(['objectStore_26', 'objectStore_25'], 'readonly', {durability:"default"})
    var objectStore_26;
    txn_25.objectStore('objectStore_26')
    var count_39;
    try{
        KeyRange_148 = IDBKeyRange.only('zBXPIFDp');
        count_39 = objectStore_26.count(KeyRange_148);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_150 = IDBKeyRange.bound('ykbU', 'KpuOwTBV', false, true);
        get_32 = objectStore_26.get(KeyRange_150);
    }
    catch (e){
    }

    var add_41 = objectStore_26.add({f0_z: '<string>', f1_v: '<boolean>', f2_q: '<string>', f3_f: '<number>', f4_c: '<boolean>'}, 'AQWXF');
    var delete_14;
    try{
        KeyRange_152 = IDBKeyRange.bound('KXXHP', 'KpuOwTBV', true, true);
        delete_14 = objectStore_26.delete(KeyRange_152);
    }
    catch (e){
    }

    var count_40 = objectStore_26.count();
    var put_29 = objectStore_26.put({f0_t: '<number>', f1_f: '<boolean>', f2_x: '<array>', f3_u: '<boolean>', f4_i: '<null>', f5_r: '<object>', f6_t: '<array>', f7_c: '<boolean>'}, 'PzizQNIiZQO');
    var add_42 = objectStore_26.add({f0_r: '<boolean>', f1_h: '<object>', f2_v: '<array>', f3_u: '<string>', f4_o: '<boolean>', f5_f: '<boolean>', f6_i: '<number>'}, 'YifdrAtGH');
    var clear_30 = objectStore_26.clear();
    var put_30 = objectStore_26.put({f0_n: '<boolean>', f1_j: '<object>', f2_w: '<number>', f3_t: '<object>'}, 'ZSlgpSwOePc');
    var add_43 = objectStore_26.add({f0_w: '<array>', f1_f: '<array>', f2_l: '<string>', f3_x: '<string>', f4_m: '<object>', f5_j: '<null>', f6_s: '<boolean>', f7_f: '<string>'}, 'wiORN');
    var clear_31 = objectStore_26.clear();
    var count_41 = objectStore_26.count();
    var get_33;
    try{
        KeyRange_154 = IDBKeyRange.bound('yYWA', 'VWyIM', false, false);
        get_33 = objectStore_26.get(KeyRange_154);
    }
    catch (e){
    }

    var add_44 = objectStore_26.add({f0_f: '<number>', f1_f: '<string>', f2_y: '<string>', f3_c: '<null>'}, 'oNTfD');
    var get_34;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('jIhjWJftHE', false);
        get_34 = objectStore_26.get(KeyRange_156);
    }
    catch (e){
    }

    var count_42 = objectStore_26.count();
    var add_45 = objectStore_26.add({f0_o: '<string>', f1_y: '<number>'}, 'JwlRVkOks');
    txn_25.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_27.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_29 = db.transaction(['objectStore_26'], 'readwrite', {durability:"relaxed"})
    var objectStore_26;
    txn_24.objectStore('objectStore_26')
    var add_46 = objectStore_26.add({f0_q: '<null>', f1_j: '<number>', f2_c: '<array>', f3_w: '<null>'}, 'RCXNOBwZAli');
    var add_47 = objectStore_26.add({f0_m: '<object>', f1_v: '<number>', f2_w: '<string>', f3_h: '<array>'}, 'qVsyaHF');
    var add_48 = objectStore_26.add({f0_u: '<boolean>', f1_e: '<null>', f2_e: '<object>', f3_r: '<array>'}, 'hvrnmUJIMUhd');
    var get_35;
    try{
        KeyRange_158 = IDBKeyRange.only('ykbU');
        get_35 = objectStore_26.get(KeyRange_158);
    }
    catch (e){
    }

    var add_49 = objectStore_26.add({f0_z: '<object>', f1_t: '<array>', f2_s: '<object>', f3_s: '<null>', f4_h: '<string>', f5_x: '<boolean>', f6_p: '<string>', f7_v: '<null>', f8_n: '<boolean>'}, 'ZziUPasxj');
    var put_31 = objectStore_26.put({f0_e: '<object>', f1_r: '<string>', f2_g: '<boolean>'}, 'BOdRrmOv');
    var clear_32 = objectStore_26.clear();
    var put_32 = objectStore_26.put({f0_t: '<number>', f1_a: '<null>', f2_i: '<number>', f3_w: '<number>', f4_s: '<number>', f5_z: '<object>'}, 'edqbTgErMez');
    var put_33 = objectStore_26.put({f0_x: '<string>', f1_n: '<array>', f2_r: '<number>', f3_u: '<string>', f4_u: '<array>', f5_k: '<array>'}, 'DveouR');
    var put_34 = objectStore_26.put({f0_v: '<null>', f1_r: '<boolean>', f2_i: '<string>', f3_q: '<array>', f4_r: '<null>', f5_e: '<object>', f6_x: '<null>', f7_v: '<null>'}, 'qmvMseoxkQ');
    var getAllKeys_17;
    try{
        KeyRange_160 = IDBKeyRange.bound('ZSlgpSwOePc', 'zBXPIFDp', false, false);
        getAllKeys_17 = objectStore_26.getAllKeys(KeyRange_160);
    }
    catch (e){
        KeyRange_161 = IDBKeyRange.only('yYWA');
        getAllKeys_17 = objectStore_26.getAllKeys(KeyRange_161);
    }

    var add_50 = objectStore_26.add({f0_j: '<string>', f1_g: '<object>', f2_t: '<string>', f3_n: '<object>', f4_h: '<string>', f5_z: '<string>', f6_i: '<number>', f7_q: '<null>', f8_n: '<null>', f9_p: '<object>'}, 'jKWFrFnmZgV');
    var getAllKeys_18 = objectStore_26.getAllKeys(1357147094);
    var put_35 = objectStore_26.put({f0_g: '<number>', f1_f: '<array>', f2_x: '<null>', f3_j: '<object>', f4_z: '<number>', f5_f: '<array>', f6_h: '<string>', f7_k: '<number>', f8_f: '<number>', f9_r: '<object>'}, 'YpNPKItTb');
    var getAllKeys_19 = objectStore_26.getAllKeys();
    var get_36;
    try{
        KeyRange_162 = IDBKeyRange.lowerBound('oNTfD', true);
        get_36 = objectStore_26.get(KeyRange_162);
    }
    catch (e){
    }

    var delete_15;
    try{
        KeyRange_164 = IDBKeyRange.bound('IMnLVo', 'wiORN', true, true);
        delete_15 = objectStore_26.delete(KeyRange_164);
    }
    catch (e){
    }

    var put_36 = objectStore_26.put({f0_x: '<boolean>', f1_d: '<array>', f2_p: '<number>', f3_s: '<boolean>', f4_o: '<string>', f5_y: '<boolean>'}, 'YtiJtzqSetTY');
    var add_51 = objectStore_26.add({f0_n: '<array>', f1_c: '<boolean>', f2_y: '<string>', f3_s: '<boolean>', f4_q: '<number>', f5_a: '<null>'}, 'Jdc');
    var clear_33 = objectStore_26.clear();
    var add_52 = objectStore_26.add({f0_c: '<null>', f1_m: '<boolean>', f2_v: '<boolean>', f3_o: '<boolean>', f4_s: '<array>', f5_e: '<string>', f6_t: '<array>', f7_j: '<boolean>', f8_a: '<object>', f9_p: '<boolean>'}, 'WeNYje');
    var getAll_11;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('qVsyaHF', false);
        getAll_11 = objectStore_26.getAll(KeyRange_166, 1929074815);
    }
    catch (e){
        KeyRange_167 = IDBKeyRange.only('zBXPIFDp');
        getAll_11 = objectStore_26.getAll(KeyRange_167);
    }

    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_27.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2298')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};