let db;
const openRequest = window.indexedDB.open('str_2162', 6944503080180800)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_55');
    var index_49 = objectStore_0.createIndex('index_49', 'test', {unique: false, multiEntry: true});
    var index_0 = objectStore_0.index('index_49');
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_56', {keypath: 'QvsIuPV'});
    var put_0 = objectStore_0.put({f0_l: '<number>', f1_w: '<null>'}, 'vKU');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('vKU', 'vKU', false, false);
        getAll_0 = objectStore_0.getAll(KeyRange_0, 119257060);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('vKU');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var clear_1 = objectStore_0.clear();
    var index_50 = objectStore_1.createIndex('index_50', 'test', {unique: true, multiEntry: true});
    var index_51 = objectStore_1.createIndex('index_51', 'test');
    var put_1 = objectStore_0.put({f0_k: '<object>', f1_e: '<null>', f2_s: '<array>', f3_d: '<boolean>', f4_g: '<number>', f5_g: '<object>', f6_n: '<object>', f7_u: '<number>', f8_j: '<string>'}, 'OoMo');
    var put_2 = objectStore_1.put({f0_r: '<array>', f1_v: '<boolean>'}, 'LCsNmvadn');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('LCsNmvadn');
        get_0 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var getAll_1 = objectStore_0.getAll();
    var objectStore_2 = db.createObjectStore('objectStore_57', {keypath: 'OtL', autoIncrement: false});
    var index_52 = objectStore_2.createIndex('index_52', 'test');
    var index_53 = objectStore_0.createIndex('index_53', 'test', {unique: true, multiEntry: false});
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('LCsNmvadn', false);
        get_1 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_2 = objectStore_2.clear();
    var count_0 = objectStore_1.count();
    var index_1 = objectStore_2.index('index_52');
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.only('LCsNmvadn');
        get_2 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var add_0 = objectStore_2.add({f0_f: '<string>', f1_x: '<null>'}, 'aTAUjoX');
    var objectStore_3 = db.createObjectStore('objectStore_58', {autoIncrement: false});
    var objectStore_4 = db.createObjectStore('objectStore_59', {keypath: 'pLpIAbP', autoIncrement: false});
    var clear_3 = objectStore_1.clear();
    var clear_4 = objectStore_3.clear();
    var add_1 = objectStore_3.add({f0_w: '<number>', f1_w: '<null>', f2_n: '<array>', f3_n: '<object>', f4_x: '<number>', f5_f: '<number>', f6_j: '<array>', f7_z: '<boolean>'}, 'hfhTEPRUek');
    var objectStore_5 = db.createObjectStore('objectStore_60', {keypath: 'qQuOtT'});
    var clear_5 = objectStore_0.clear();
    var clear_6 = objectStore_5.clear();
    var index_54 = objectStore_2.createIndex('index_54', 'test', {unique: false, multiEntry: false});
    var index_55 = objectStore_5.createIndex('index_55', 'test');
    var clear_7 = objectStore_1.clear();
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('aTAUjoX', false);
        delete_0 = objectStore_2.delete(KeyRange_8);
    }
    catch (e){
    }

    var index_56 = objectStore_2.createIndex('index_56', 'test', {unique: false});
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('aTAUjoX', 'aTAUjoX', false, false);
        get_3 = objectStore_2.get(KeyRange_10);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, true);
        delete_1 = objectStore_3.delete(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2.getAllKeys(3062473523);
    var index_57 = objectStore_5.createIndex('index_57', 'test', {unique: true});
    var add_2 = objectStore_1.add({f0_r: '<boolean>', f1_c: '<string>', f2_p: '<array>', f3_r: '<boolean>', f4_q: '<array>', f5_z: '<boolean>', f6_w: '<number>', f7_a: '<string>', f8_j: '<object>'}, 'rEBhLEMif');
    var delete_2;
    try{
        KeyRange_14 = IDBKeyRange.only('hfhTEPRUek');
        delete_2 = objectStore_3.delete(KeyRange_14);
    }
    catch (e){
    }

    var clear_8 = objectStore_0.clear();
    var index_2 = objectStore_2.index('index_56');
    var index_58 = objectStore_5.createIndex('index_58', 'test');
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.only('vKU');
        get_4 = objectStore_0.get(KeyRange_16);
    }
    catch (e){
    }

    var put_3 = objectStore_1.put({f0_e: '<object>', f1_z: '<null>', f2_h: '<array>', f3_j: '<array>', f4_h: '<array>', f5_c: '<null>', f6_d: '<string>'}, 'KvGZf');
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, false);
        get_5 = objectStore_3.get(KeyRange_18);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_60')
    var objectStore_6 = db.createObjectStore('objectStore_61', {keypath: 'VgjuNlPERWP', autoIncrement: false});
    var index_59 = objectStore_0.createIndex('index_59', 'test');
    var put_4 = objectStore_0.put({f0_b: '<null>', f1_a: '<object>', f2_x: '<string>', f3_m: '<array>'}, 'mUZiWMNR');
    var clear_9 = objectStore_0.clear();
    var add_3 = objectStore_4.add({f0_h: '<string>', f1_l: '<number>', f2_f: '<string>', f3_r: '<boolean>', f4_i: '<null>', f5_m: '<boolean>', f6_k: '<null>', f7_a: '<object>'}, 'ASq');
    var put_5 = objectStore_1.put({f0_t: '<array>', f1_g: '<number>', f2_k: '<boolean>'}, 'BqgHxhzXg');
    var put_6 = objectStore_6.put({f0_c: '<null>', f1_g: '<array>', f2_c: '<null>'}, 'jJAFtWoD');
    var put_7 = objectStore_2.put({f0_v: '<string>', f1_z: '<array>', f2_u: '<boolean>', f3_q: '<null>', f4_g: '<object>', f5_p: '<array>'}, 'wPzbGaYN');
    var getAllKeys_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('BqgHxhzXg', 'KvGZf', true, true);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('LCsNmvadn');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_21);
    }

    var getAllKeys_2 = objectStore_2.getAllKeys(2273739395);
    var objectStore_7 = db.createObjectStore('objectStore_62', {keypath: 'ABT'});
    var put_8 = objectStore_2.put({f0_a: '<null>', f1_d: '<boolean>', f2_a: '<string>'}, 'yziBZthIP');
    var add_4 = objectStore_0.add({f0_d: '<boolean>'}, 'GgeCPP');
    var objectStore_8 = db.createObjectStore('objectStore_63');
    var objectStore_9 = db.createObjectStore('objectStore_64');
    objectStore_0.deleteIndex('index_53')
    var add_5 = objectStore_6.add({f0_j: '<array>'}, 'IxJqM');
    var clear_10 = objectStore_3.clear();
    var clear_11 = objectStore_6.clear();
    var add_6 = objectStore_2.add({f0_n: '<array>', f1_j: '<number>', f2_e: '<boolean>', f3_c: '<string>', f4_l: '<array>', f5_p: '<array>', f6_b: '<array>', f7_r: '<null>', f8_w: '<array>'}, 'uWzGWNay');
    var count_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('GgeCPP', 'OoMo', false, false);
        count_1 = objectStore_0.count(KeyRange_22);
    }
    catch (e){
    }

    var getAll_2 = objectStore_0.getAll(318118273);
    var clear_12 = objectStore_2.clear();
    var put_9 = objectStore_9.put({f0_x: '<string>', f1_l: '<array>', f2_d: '<null>', f3_p: '<string>', f4_c: '<string>', f5_e: '<boolean>', f6_s: '<boolean>'}, 'mGA');
    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.only('ASq');
        get_6 = objectStore_4.get(KeyRange_24);
    }
    catch (e){
    }

    var add_7 = objectStore_2.add({f0_s: '<string>', f1_j: '<object>', f2_t: '<array>', f3_l: '<string>', f4_m: '<number>', f5_s: '<number>'}, 'oWsn');
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('jJAFtWoD', 'jJAFtWoD', true, false);
        get_7 = objectStore_6.get(KeyRange_26);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('OoMo', false);
        get_8 = objectStore_0.get(KeyRange_28);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.bound('wPzbGaYN', 'wPzbGaYN', true, true);
        get_9 = objectStore_2.get(KeyRange_30);
    }
    catch (e){
    }

    var add_8 = objectStore_0.add({f0_l: '<number>', f1_j: '<string>', f2_y: '<boolean>', f3_l: '<string>', f4_s: '<null>'}, 'GDiv');
    var clear_13 = objectStore_6.clear();
    var count_2;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('KvGZf', false);
        count_2 = objectStore_1.count(KeyRange_32);
    }
    catch (e){
    }

    objectStore_1.deleteIndex('index_51')
    var count_3;
    try{
        KeyRange_34 = IDBKeyRange.only('hfhTEPRUek');
        count_3 = objectStore_3.count(KeyRange_34);
    }
    catch (e){
    }

    var add_9 = objectStore_8.add({f0_v: '<null>', f1_f: '<null>', f2_t: '<string>', f3_x: '<object>', f4_c: '<boolean>', f5_x: '<array>', f6_j: '<array>', f7_k: '<string>', f8_k: '<boolean>', f9_v: '<string>'}, 'qbUjoZ');
    var clear_14 = objectStore_8.clear();
    var get_10;
    try{
        KeyRange_36 = IDBKeyRange.only('hfhTEPRUek');
        get_10 = objectStore_3.get(KeyRange_36);
    }
    catch (e){
    }

    var put_10 = objectStore_7.put({f0_a: '<boolean>', f1_s: '<boolean>', f2_c: '<boolean>', f3_u: '<array>', f4_z: '<boolean>', f5_f: '<array>', f6_p: '<string>', f7_z: '<array>'}, 'QnI');
    var index_60 = objectStore_4.createIndex('index_60', 'test', {unique: true, multiEntry: true});
    var clear_15 = objectStore_4.clear();
    var getAllKeys_3 = objectStore_2.getAllKeys();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_50 = db.transaction(['objectStore_61'], 'readonly', {durability:"strict"})
    var objectStore_61 = txn_50.objectStore('objectStore_61');
    var getAllKeys_4;
    try{
        KeyRange_38 = IDBKeyRange.only('jJAFtWoD');
        getAllKeys_4 = objectStore_61.getAllKeys(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('jJAFtWoD');
        getAllKeys_4 = objectStore_61.getAllKeys(KeyRange_39);
    }

    var getAll_3 = objectStore_61.getAll();
    var get_11;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('jJAFtWoD', true);
        get_11 = objectStore_61.get(KeyRange_40);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('IxJqM', false);
        getAllKeys_5 = objectStore_61.getAllKeys(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('jJAFtWoD');
        getAllKeys_5 = objectStore_61.getAllKeys(KeyRange_43);
    }

    var count_4;
    try{
        KeyRange_44 = IDBKeyRange.bound('IxJqM', 'IxJqM', false, false);
        count_4 = objectStore_61.count(KeyRange_44);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_46 = IDBKeyRange.bound('IxJqM', 'jJAFtWoD', false, false);
        get_12 = objectStore_61.get(KeyRange_46);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_48 = IDBKeyRange.only('IxJqM');
        count_5 = objectStore_61.count(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('jJAFtWoD', true);
        getAllKeys_6 = objectStore_61.getAllKeys(KeyRange_50, 3552434688);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('jJAFtWoD');
        getAllKeys_6 = objectStore_61.getAllKeys(KeyRange_51);
    }

    var count_6 = objectStore_61.count();
    var get_13;
    try{
        KeyRange_52 = IDBKeyRange.bound('IxJqM', 'IxJqM', true, true);
        get_13 = objectStore_61.get(KeyRange_52);
    }
    catch (e){
    }

    var count_7 = objectStore_61.count();
    var count_8 = objectStore_61.count();
    var getAllKeys_7;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('IxJqM', true);
        getAllKeys_7 = objectStore_61.getAllKeys(KeyRange_54, 1188839520);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('IxJqM');
        getAllKeys_7 = objectStore_61.getAllKeys(KeyRange_55);
    }

    var count_9 = objectStore_61.count();
    var getAllKeys_8 = objectStore_61.getAllKeys();
    var getAll_4 = objectStore_61.getAll();
    var getAllKeys_9 = objectStore_61.getAllKeys();
    var count_10;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('IxJqM', false);
        count_10 = objectStore_61.count(KeyRange_56);
    }
    catch (e){
    }

    var count_11 = objectStore_61.count();
    txn_50.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_50.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_50.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_51 = db.transaction(['objectStore_62'], 'readonly', {durability:"strict"})
    var objectStore_62 = txn_51.objectStore('objectStore_62');
    var count_12;
    try{
        KeyRange_58 = IDBKeyRange.bound('QnI', 'QnI', false, false);
        count_12 = objectStore_62.count(KeyRange_58);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_60 = IDBKeyRange.only('QnI');
        get_14 = objectStore_62.get(KeyRange_60);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_62 = IDBKeyRange.bound('QnI', 'QnI', false, false);
        get_15 = objectStore_62.get(KeyRange_62);
    }
    catch (e){
    }

    var getAll_5 = objectStore_62.getAll();
    var count_13 = objectStore_62.count();
    var getAllKeys_10;
    try{
        KeyRange_64 = IDBKeyRange.bound('QnI', 'QnI', false, true);
        getAllKeys_10 = objectStore_62.getAllKeys(KeyRange_64);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('QnI');
        getAllKeys_10 = objectStore_62.getAllKeys(KeyRange_65);
    }

    var get_16;
    try{
        KeyRange_66 = IDBKeyRange.bound('QnI', 'QnI', false, true);
        get_16 = objectStore_62.get(KeyRange_66);
    }
    catch (e){
    }

    var count_14 = objectStore_62.count();
    var get_17;
    try{
        KeyRange_68 = IDBKeyRange.bound('QnI', 'QnI', false, true);
        get_17 = objectStore_62.get(KeyRange_68);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('QnI', false);
        count_15 = objectStore_62.count(KeyRange_70);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_72 = IDBKeyRange.bound('QnI', 'QnI', true, true);
        count_16 = objectStore_62.count(KeyRange_72);
    }
    catch (e){
    }

    var count_17 = objectStore_62.count();
    var get_18;
    try{
        KeyRange_74 = IDBKeyRange.bound('QnI', 'QnI', false, false);
        get_18 = objectStore_62.get(KeyRange_74);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('QnI', false);
        get_19 = objectStore_62.get(KeyRange_76);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_78 = IDBKeyRange.only('QnI');
        get_20 = objectStore_62.get(KeyRange_78);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_80 = IDBKeyRange.bound('QnI', 'QnI', true, false);
        get_21 = objectStore_62.get(KeyRange_80);
    }
    catch (e){
    }

    txn_51.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_51.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_51.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_52 = db.transaction(['objectStore_57'], 'readwrite', {durability:"strict"})
    var objectStore_57 = txn_52.objectStore('objectStore_57');
    var put_11 = objectStore_57.put({f0_u: '<boolean>'}, 'WQVNr');
    var clear_16 = objectStore_57.clear();
    var count_18 = objectStore_57.count();
    var put_12 = objectStore_57.put({f0_u: '<object>', f1_q: '<array>', f2_i: '<null>', f3_w: '<null>', f4_b: '<array>', f5_s: '<boolean>', f6_q: '<number>', f7_f: '<null>', f8_v: '<object>', f9_f: '<object>'}, 'svwC');
    var getAll_6 = objectStore_57.getAll(3071896345);
    var clear_17 = objectStore_57.clear();
    var get_22;
    try{
        KeyRange_82 = IDBKeyRange.bound('WQVNr', 'wPzbGaYN', false, true);
        get_22 = objectStore_57.get(KeyRange_82);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_84 = IDBKeyRange.bound('wPzbGaYN', 'svwC', true, true);
        get_23 = objectStore_57.get(KeyRange_84);
    }
    catch (e){
    }

    var getAll_7 = objectStore_57.getAll();
    var add_10 = objectStore_57.add({f0_c: '<boolean>', f1_j: '<number>'}, 'msIsqQpdlO');
    var get_24;
    try{
        KeyRange_86 = IDBKeyRange.lowerBound('aTAUjoX', false);
        get_24 = objectStore_57.get(KeyRange_86);
    }
    catch (e){
    }

    var clear_18 = objectStore_57.clear();
    var count_19 = objectStore_57.count();
    var add_11 = objectStore_57.add({f0_m: '<boolean>', f1_t: '<number>', f2_u: '<string>', f3_l: '<null>', f4_u: '<string>', f5_b: '<boolean>', f6_b: '<array>', f7_v: '<number>', f8_n: '<object>', f9_w: '<array>'}, 'xTRJyItzbIMf');
    var put_13 = objectStore_57.put({f0_i: '<string>', f1_c: '<array>', f2_e: '<number>', f3_h: '<number>', f4_g: '<number>', f5_i: '<boolean>', f6_n: '<boolean>', f7_l: '<null>'}, 'BXIaKVZXRSR');
    var put_14 = objectStore_57.put({f0_s: '<array>', f1_l: '<boolean>', f2_y: '<null>', f3_m: '<object>', f4_w: '<null>'}, 'eCBDPdDtzU');
    var add_12 = objectStore_57.add({f0_g: '<number>', f1_f: '<array>', f2_e: '<array>', f3_x: '<boolean>', f4_y: '<string>', f5_q: '<array>', f6_x: '<object>', f7_r: '<null>', f8_q: '<string>', f9_z: '<number>'}, 'LlEhGVYj');
    var getAllKeys_11;
    try{
        KeyRange_88 = IDBKeyRange.only('yziBZthIP');
        getAllKeys_11 = objectStore_57.getAllKeys(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('LlEhGVYj');
        getAllKeys_11 = objectStore_57.getAllKeys(KeyRange_89);
    }

    var delete_3;
    try{
        KeyRange_90 = IDBKeyRange.bound('svwC', 'uWzGWNay', false, true);
        delete_3 = objectStore_57.delete(KeyRange_90);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_92 = IDBKeyRange.bound('msIsqQpdlO', 'WQVNr', false, false);
        get_25 = objectStore_57.get(KeyRange_92);
    }
    catch (e){
    }

    var clear_19 = objectStore_57.clear();
    txn_52.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_52.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_52.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_53 = db.transaction(['objectStore_62'], 'readwrite', {durability:"strict"})
    var objectStore_62 = txn_53.objectStore('objectStore_62');
    var put_15 = objectStore_62.put({f0_g: '<string>', f1_k: '<number>', f2_v: '<boolean>', f3_m: '<array>', f4_d: '<number>', f5_x: '<array>', f6_r: '<boolean>', f7_r: '<null>', f8_u: '<number>', f9_m: '<object>'}, 'bniwqyhODH');
    var count_20 = objectStore_62.count();
    var getAllKeys_12 = objectStore_62.getAllKeys();
    var delete_4;
    try{
        KeyRange_94 = IDBKeyRange.bound('bniwqyhODH', 'bniwqyhODH', false, true);
        delete_4 = objectStore_62.delete(KeyRange_94);
    }
    catch (e){
    }

    var add_13 = objectStore_62.add({f0_t: '<string>', f1_o: '<object>', f2_d: '<array>', f3_w: '<number>', f4_i: '<number>', f5_g: '<null>', f6_l: '<string>', f7_g: '<string>', f8_v: '<null>', f9_y: '<object>'}, 'ajz');
    var getAllKeys_13;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('QnI', false);
        getAllKeys_13 = objectStore_62.getAllKeys(KeyRange_96);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('QnI');
        getAllKeys_13 = objectStore_62.getAllKeys(KeyRange_97);
    }

    var get_26;
    try{
        KeyRange_98 = IDBKeyRange.bound('QnI', 'ajz', false, false);
        get_26 = objectStore_62.get(KeyRange_98);
    }
    catch (e){
    }

    var put_16 = objectStore_62.put({f0_p: '<object>', f1_x: '<number>', f2_o: '<string>', f3_y: '<boolean>', f4_k: '<object>', f5_j: '<number>'}, 'NPzGTcmZ');
    var put_17 = objectStore_62.put({f0_e: '<object>', f1_h: '<boolean>', f2_v: '<string>'}, 'QUpF');
    var getAllKeys_14 = objectStore_62.getAllKeys();
    var getAll_8 = objectStore_62.getAll(426021482);
    var get_27;
    try{
        KeyRange_100 = IDBKeyRange.bound('QUpF', 'bniwqyhODH', false, false);
        get_27 = objectStore_62.get(KeyRange_100);
    }
    catch (e){
    }

    var getAllKeys_15;
    try{
        KeyRange_102 = IDBKeyRange.bound('bniwqyhODH', 'bniwqyhODH', true, false);
        getAllKeys_15 = objectStore_62.getAllKeys(KeyRange_102, 215173918);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('QUpF');
        getAllKeys_15 = objectStore_62.getAllKeys(KeyRange_103);
    }

    var getAll_9 = objectStore_62.getAll();
    var count_21;
    try{
        KeyRange_104 = IDBKeyRange.only('QUpF');
        count_21 = objectStore_62.count(KeyRange_104);
    }
    catch (e){
    }

    var count_22;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('ajz', true);
        count_22 = objectStore_62.count(KeyRange_106);
    }
    catch (e){
    }

    var add_14 = objectStore_62.add({f0_g: '<null>', f1_z: '<string>', f2_k: '<object>', f3_c: '<array>', f4_g: '<number>', f5_k: '<number>', f6_j: '<boolean>', f7_q: '<string>', f8_m: '<null>'}, 'Felc');
    txn_53.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_53.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_53.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_54 = db.transaction(['objectStore_64'], 'readonly', {durability:"strict"})
    var objectStore_64 = txn_54.objectStore('objectStore_64');
    var get_28;
    try{
        KeyRange_108 = IDBKeyRange.bound('mGA', 'mGA', false, true);
        get_28 = objectStore_64.get(KeyRange_108);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('mGA', false);
        getAll_10 = objectStore_64.getAll(KeyRange_110);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('mGA');
        getAll_10 = objectStore_64.getAll(KeyRange_111);
    }

    var get_29;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('mGA', false);
        get_29 = objectStore_64.get(KeyRange_112);
    }
    catch (e){
    }

    var getAllKeys_16;
    try{
        KeyRange_114 = IDBKeyRange.bound('mGA', 'mGA', true, false);
        getAllKeys_16 = objectStore_64.getAllKeys(KeyRange_114);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('mGA');
        getAllKeys_16 = objectStore_64.getAllKeys(KeyRange_115);
    }

    var count_23;
    try{
        KeyRange_116 = IDBKeyRange.only('mGA');
        count_23 = objectStore_64.count(KeyRange_116);
    }
    catch (e){
    }

    var getAllKeys_17;
    try{
        KeyRange_118 = IDBKeyRange.bound('mGA', 'mGA', true, true);
        getAllKeys_17 = objectStore_64.getAllKeys(KeyRange_118);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('mGA');
        getAllKeys_17 = objectStore_64.getAllKeys(KeyRange_119);
    }

    var count_24 = objectStore_64.count();
    var get_30;
    try{
        KeyRange_120 = IDBKeyRange.bound('mGA', 'mGA', true, false);
        get_30 = objectStore_64.get(KeyRange_120);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_122 = IDBKeyRange.bound('mGA', 'mGA', false, false);
        get_31 = objectStore_64.get(KeyRange_122);
    }
    catch (e){
    }

    var getAllKeys_18 = objectStore_64.getAllKeys(2368120098);
    var count_25 = objectStore_64.count();
    var count_26;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('mGA', true);
        count_26 = objectStore_64.count(KeyRange_124);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('mGA', true);
        get_32 = objectStore_64.get(KeyRange_126);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_128 = IDBKeyRange.only('mGA');
        get_33 = objectStore_64.get(KeyRange_128);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_130 = IDBKeyRange.bound('mGA', 'mGA', false, false);
        get_34 = objectStore_64.get(KeyRange_130);
    }
    catch (e){
    }

    var count_27 = objectStore_64.count();
    txn_54.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_54.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_54.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_55 = db.transaction(['objectStore_56'], 'readwrite', {durability:"strict"})
    var objectStore_56 = txn_55.objectStore('objectStore_56');
    var put_18 = objectStore_56.put({f0_f: '<number>'}, 'jGHCIZPvf');
    var put_19 = objectStore_56.put({f0_s: '<number>', f1_c: '<number>', f2_g: '<number>', f3_p: '<object>'}, 'KQoyPg');
    var getAllKeys_19 = objectStore_56.getAllKeys(226372390);
    var getAll_11 = objectStore_56.getAll();
    var count_28;
    try{
        KeyRange_132 = IDBKeyRange.only('KQoyPg');
        count_28 = objectStore_56.count(KeyRange_132);
    }
    catch (e){
    }

    var clear_20 = objectStore_56.clear();
    var delete_5;
    try{
        KeyRange_134 = IDBKeyRange.bound('KQoyPg', 'KQoyPg', false, true);
        delete_5 = objectStore_56.delete(KeyRange_134);
    }
    catch (e){
    }

    var getAll_12 = objectStore_56.getAll();
    var get_35;
    try{
        KeyRange_136 = IDBKeyRange.bound('BqgHxhzXg', 'LCsNmvadn', false, true);
        get_35 = objectStore_56.get(KeyRange_136);
    }
    catch (e){
    }

    var add_15 = objectStore_56.add({f0_l: '<null>', f1_l: '<null>', f2_s: '<object>', f3_k: '<object>', f4_s: '<null>', f5_p: '<number>'}, 'sJMvFlIyPvd');
    var add_16 = objectStore_56.add({f0_k: '<string>', f1_t: '<boolean>', f2_a: '<number>', f3_i: '<array>', f4_b: '<boolean>', f5_r: '<boolean>'}, 'aHeejSUR');
    var clear_21 = objectStore_56.clear();
    var add_17 = objectStore_56.add({f0_f: '<string>', f1_v: '<string>', f2_y: '<boolean>'}, 'sigLZ');
    var put_20 = objectStore_56.put({f0_v: '<boolean>', f1_n: '<number>'}, 'ePUISpNnO');
    var add_18 = objectStore_56.add({f0_n: '<boolean>', f1_o: '<boolean>', f2_i: '<array>', f3_l: '<string>', f4_b: '<object>', f5_a: '<number>', f6_x: '<array>', f7_b: '<null>', f8_m: '<null>', f9_u: '<boolean>'}, 'TLT');
    txn_55.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_55.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_55.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_56 = db.transaction(['objectStore_59'], 'readwrite', {durability:"default"})
    var objectStore_59 = txn_56.objectStore('objectStore_59');
    var clear_22 = objectStore_59.clear();
    var add_19 = objectStore_59.add({f0_a: '<array>', f1_l: '<number>', f2_a: '<object>', f3_t: '<object>', f4_g: '<object>'}, 'Onqs');
    var add_20 = objectStore_59.add({f0_h: '<string>', f1_r: '<null>'}, 'cLqvY');
    var clear_23 = objectStore_59.clear();
    var put_21 = objectStore_59.put({f0_p: '<array>', f1_m: '<number>', f2_v: '<number>', f3_x: '<null>'}, 'WxJsgLtJt');
    var getAll_13;
    try{
        KeyRange_138 = IDBKeyRange.only('ASq');
        getAll_13 = objectStore_59.getAll(KeyRange_138, 2060471461);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('ASq');
        getAll_13 = objectStore_59.getAll(KeyRange_139);
    }

    var count_29;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('ASq', false);
        count_29 = objectStore_59.count(KeyRange_140);
    }
    catch (e){
    }

    var put_22 = objectStore_59.put({f0_k: '<string>', f1_u: '<null>', f2_q: '<null>', f3_q: '<array>', f4_p: '<null>', f5_v: '<string>', f6_q: '<object>', f7_g: '<object>', f8_m: '<boolean>', f9_b: '<string>'}, 'GkCayMPHaC');
    var count_30;
    try{
        KeyRange_142 = IDBKeyRange.lowerBound('ASq', false);
        count_30 = objectStore_59.count(KeyRange_142);
    }
    catch (e){
    }

    var put_23 = objectStore_59.put({f0_y: '<string>', f1_u: '<null>', f2_v: '<string>', f3_h: '<object>', f4_b: '<array>', f5_b: '<array>', f6_z: '<object>', f7_i: '<array>', f8_a: '<null>', f9_h: '<string>'}, 'gTqLPTDLnj');
    var clear_24 = objectStore_59.clear();
    var getAll_14 = objectStore_59.getAll();
    var add_21 = objectStore_59.add({f0_y: '<array>', f1_q: '<number>', f2_b: '<number>'}, 'hQklWJslTaz');
    var put_24 = objectStore_59.put({f0_m: '<boolean>', f1_a: '<null>'}, 'doER');
    var get_36;
    try{
        KeyRange_144 = IDBKeyRange.bound('Onqs', 'ASq', true, false);
        get_36 = objectStore_59.get(KeyRange_144);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('WxJsgLtJt', false);
        delete_6 = objectStore_59.delete(KeyRange_146);
    }
    catch (e){
    }

    var count_31;
    try{
        KeyRange_148 = IDBKeyRange.only('ASq');
        count_31 = objectStore_59.count(KeyRange_148);
    }
    catch (e){
    }

    var getAll_15;
    try{
        KeyRange_150 = IDBKeyRange.bound('cLqvY', 'ASq', false, false);
        getAll_15 = objectStore_59.getAll(KeyRange_150);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('hQklWJslTaz');
        getAll_15 = objectStore_59.getAll(KeyRange_151);
    }

    txn_56.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_56.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_56.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_57 = db.transaction(['objectStore_62', 'objectStore_58', 'objectStore_57'], 'readonly', {durability:"strict"})
    var objectStore_58 = txn_57.objectStore('objectStore_58');
    var count_32 = objectStore_58.count();
    var get_37;
    try{
        KeyRange_152 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, false);
        get_37 = objectStore_58.get(KeyRange_152);
    }
    catch (e){
    }

    var getAll_16 = objectStore_58.getAll(3382384482);
    var get_38;
    try{
        KeyRange_154 = IDBKeyRange.lowerBound('hfhTEPRUek', true);
        get_38 = objectStore_58.get(KeyRange_154);
    }
    catch (e){
    }

    var count_33 = objectStore_58.count();
    var get_39;
    try{
        KeyRange_156 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', true, false);
        get_39 = objectStore_58.get(KeyRange_156);
    }
    catch (e){
    }

    var getAll_17;
    try{
        KeyRange_158 = IDBKeyRange.only('hfhTEPRUek');
        getAll_17 = objectStore_58.getAll(KeyRange_158);
    }
    catch (e){
        KeyRange_159 = IDBKeyRange.only('hfhTEPRUek');
        getAll_17 = objectStore_58.getAll(KeyRange_159);
    }

    var count_34 = objectStore_58.count();
    var get_40;
    try{
        KeyRange_160 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, true);
        get_40 = objectStore_58.get(KeyRange_160);
    }
    catch (e){
    }

    var getAll_18;
    try{
        KeyRange_162 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, true);
        getAll_18 = objectStore_58.getAll(KeyRange_162);
    }
    catch (e){
        KeyRange_163 = IDBKeyRange.only('hfhTEPRUek');
        getAll_18 = objectStore_58.getAll(KeyRange_163);
    }

    var getAll_19;
    try{
        KeyRange_164 = IDBKeyRange.lowerBound('hfhTEPRUek', true);
        getAll_19 = objectStore_58.getAll(KeyRange_164);
    }
    catch (e){
        KeyRange_165 = IDBKeyRange.only('hfhTEPRUek');
        getAll_19 = objectStore_58.getAll(KeyRange_165);
    }

    var get_41;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('hfhTEPRUek', false);
        get_41 = objectStore_58.get(KeyRange_166);
    }
    catch (e){
    }

    var count_35;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('hfhTEPRUek', false);
        count_35 = objectStore_58.count(KeyRange_168);
    }
    catch (e){
    }

    var get_42;
    try{
        KeyRange_170 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', true, true);
        get_42 = objectStore_58.get(KeyRange_170);
    }
    catch (e){
    }

    var get_43;
    try{
        KeyRange_172 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', true, false);
        get_43 = objectStore_58.get(KeyRange_172);
    }
    catch (e){
    }

    var count_36 = objectStore_58.count();
    var get_44;
    try{
        KeyRange_174 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', true, false);
        get_44 = objectStore_58.get(KeyRange_174);
    }
    catch (e){
    }

    var getAllKeys_20;
    try{
        KeyRange_176 = IDBKeyRange.only('hfhTEPRUek');
        getAllKeys_20 = objectStore_58.getAllKeys(KeyRange_176, 2519733806);
    }
    catch (e){
        KeyRange_177 = IDBKeyRange.only('hfhTEPRUek');
        getAllKeys_20 = objectStore_58.getAllKeys(KeyRange_177);
    }

    var get_45;
    try{
        KeyRange_178 = IDBKeyRange.only('hfhTEPRUek');
        get_45 = objectStore_58.get(KeyRange_178);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_180 = IDBKeyRange.bound('hfhTEPRUek', 'hfhTEPRUek', false, false);
        get_46 = objectStore_58.get(KeyRange_180);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_182 = IDBKeyRange.lowerBound('hfhTEPRUek', false);
        get_47 = objectStore_58.get(KeyRange_182);
    }
    catch (e){
    }

    var get_48;
    try{
        KeyRange_184 = IDBKeyRange.lowerBound('hfhTEPRUek', false);
        get_48 = objectStore_58.get(KeyRange_184);
    }
    catch (e){
    }

    var getAll_20 = objectStore_58.getAll(2077337627);
    txn_57.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_57.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_57.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_58 = db.transaction(['objectStore_64', 'objectStore_56'], 'readonly', {durability:"relaxed"})
    var objectStore_64 = txn_58.objectStore('objectStore_64');
    var getAllKeys_21 = objectStore_64.getAllKeys();
    var count_37 = objectStore_64.count();
    var get_49;
    try{
        KeyRange_186 = IDBKeyRange.bound('mGA', 'mGA', true, false);
        get_49 = objectStore_64.get(KeyRange_186);
    }
    catch (e){
    }

    var getAllKeys_22;
    try{
        KeyRange_188 = IDBKeyRange.only('mGA');
        getAllKeys_22 = objectStore_64.getAllKeys(KeyRange_188);
    }
    catch (e){
        KeyRange_189 = IDBKeyRange.only('mGA');
        getAllKeys_22 = objectStore_64.getAllKeys(KeyRange_189);
    }

    var getAllKeys_23;
    try{
        KeyRange_190 = IDBKeyRange.only('mGA');
        getAllKeys_23 = objectStore_64.getAllKeys(KeyRange_190);
    }
    catch (e){
        KeyRange_191 = IDBKeyRange.only('mGA');
        getAllKeys_23 = objectStore_64.getAllKeys(KeyRange_191);
    }

    var count_38 = objectStore_64.count();
    var get_50;
    try{
        KeyRange_192 = IDBKeyRange.bound('mGA', 'mGA', true, true);
        get_50 = objectStore_64.get(KeyRange_192);
    }
    catch (e){
    }

    var getAllKeys_24;
    try{
        KeyRange_194 = IDBKeyRange.only('mGA');
        getAllKeys_24 = objectStore_64.getAllKeys(KeyRange_194);
    }
    catch (e){
        KeyRange_195 = IDBKeyRange.only('mGA');
        getAllKeys_24 = objectStore_64.getAllKeys(KeyRange_195);
    }

    var get_51;
    try{
        KeyRange_196 = IDBKeyRange.only('mGA');
        get_51 = objectStore_64.get(KeyRange_196);
    }
    catch (e){
    }

    var count_39 = objectStore_64.count();
    var getAll_21 = objectStore_64.getAll(2127743259);
    var getAllKeys_25 = objectStore_64.getAllKeys();
    var getAll_22;
    try{
        KeyRange_198 = IDBKeyRange.bound('mGA', 'mGA', true, true);
        getAll_22 = objectStore_64.getAll(KeyRange_198, 362719336);
    }
    catch (e){
        KeyRange_199 = IDBKeyRange.only('mGA');
        getAll_22 = objectStore_64.getAll(KeyRange_199);
    }

    var getAllKeys_26;
    try{
        KeyRange_200 = IDBKeyRange.only('mGA');
        getAllKeys_26 = objectStore_64.getAllKeys(KeyRange_200, 352846292);
    }
    catch (e){
        KeyRange_201 = IDBKeyRange.only('mGA');
        getAllKeys_26 = objectStore_64.getAllKeys(KeyRange_201);
    }

    var count_40 = objectStore_64.count();
    var count_41;
    try{
        KeyRange_202 = IDBKeyRange.lowerBound('mGA', true);
        count_41 = objectStore_64.count(KeyRange_202);
    }
    catch (e){
    }

    var get_52;
    try{
        KeyRange_204 = IDBKeyRange.lowerBound('mGA', false);
        get_52 = objectStore_64.get(KeyRange_204);
    }
    catch (e){
    }

    txn_58.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_58.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_58.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_59 = db.transaction(['objectStore_62'], 'readwrite', {durability:"strict"})
    var objectStore_62 = txn_59.objectStore('objectStore_62');
    var getAll_23 = objectStore_62.getAll();
    var clear_25 = objectStore_62.clear();
    var delete_7;
    try{
        KeyRange_206 = IDBKeyRange.bound('NPzGTcmZ', 'QUpF', true, false);
        delete_7 = objectStore_62.delete(KeyRange_206);
    }
    catch (e){
    }

    var get_53;
    try{
        KeyRange_208 = IDBKeyRange.bound('ajz', 'NPzGTcmZ', true, true);
        get_53 = objectStore_62.get(KeyRange_208);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_210 = IDBKeyRange.bound('ajz', 'Felc', false, true);
        delete_8 = objectStore_62.delete(KeyRange_210);
    }
    catch (e){
    }

    var count_42 = objectStore_62.count();
    var count_43 = objectStore_62.count();
    var add_22 = objectStore_62.add({f0_q: '<string>', f1_u: '<boolean>', f2_f: '<array>', f3_t: '<string>'}, 'ypjYqSnz');
    var get_54;
    try{
        KeyRange_212 = IDBKeyRange.bound('Felc', 'ajz', true, false);
        get_54 = objectStore_62.get(KeyRange_212);
    }
    catch (e){
    }

    var get_55;
    try{
        KeyRange_214 = IDBKeyRange.lowerBound('ajz', false);
        get_55 = objectStore_62.get(KeyRange_214);
    }
    catch (e){
    }

    var clear_26 = objectStore_62.clear();
    var count_44 = objectStore_62.count();
    var getAll_24 = objectStore_62.getAll();
    var add_23 = objectStore_62.add({f0_d: '<null>', f1_d: '<string>', f2_q: '<null>'}, 'DSkcw');
    var clear_27 = objectStore_62.clear();
    var clear_28 = objectStore_62.clear();
    var clear_29 = objectStore_62.clear();
    txn_59.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_59.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_59.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4336')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};