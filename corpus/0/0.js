let db;
const openRequest = window.indexedDB.open('str_1592', 7647500581910690)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'aiqgxumdj.MAWzdso.PLb.KoTOLGFxuFV.StoEbNstIX.DlK.LPMYMaaJetI.frbhxQqT.wrYKXU.XianyDgOI'});
    var index_0 = objectStore_1.createIndex('index_0', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'IqwUeavMIh'});
    var index_1 = objectStore_1.createIndex('index_1', 'test', {unique: false});
    var objectStore_3 = db.createObjectStore('objectStore_3', {autoIncrement: true});
    var index_2 = objectStore_2.createIndex('index_2', 'test', {unique: true});
    var index_3 = objectStore_1.createIndex('index_3', 'test', {unique: false, multiEntry: false});
    var objectStore_4 = db.createObjectStore('objectStore_4', {autoIncrement: false});
    var index_4 = objectStore_3.createIndex('index_4', 'test', {unique: true, multiEntry: true});
    var index_5 = objectStore_4.createIndex('index_5', 'test', {unique: false, multiEntry: true});
    var objectStore_5 = db.createObjectStore('objectStore_5', {autoIncrement: true});
    var index_6 = objectStore_1.createIndex('index_6', 'test', {unique: false, multiEntry: false});
    var index_7 = objectStore_4.createIndex('index_7', 'test', {unique: true});
    var index_8 = objectStore_4.createIndex('index_8', 'test', {unique: true});
    var objectStore_6 = db.createObjectStore('objectStore_6');
    var objectStore_7 = db.createObjectStore('objectStore_7', {keypath: 'CxXMmvQxxKXN', autoIncrement: true});
    var index_9 = objectStore_0.createIndex('index_9', 'test', {unique: false});
    var objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'LfWUNBIJQcW'});
    var objectStore_9 = db.createObjectStore('objectStore_9', {autoIncrement: true});
    var objectStore_10 = db.createObjectStore('objectStore_10', {autoIncrement: false});
    var objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'jKwHRU', autoIncrement: true});
    var index_10 = objectStore_9.createIndex('index_10', 'test', {unique: true});
    var index_11 = objectStore_6.createIndex('index_11', 'test');
    var index_12 = objectStore_1.createIndex('index_12', 'test', {multiEntry: true});
    var objectStore_12 = db.createObjectStore('objectStore_12', {keypath: 'ZzQk', autoIncrement: false});
    var objectStore_13 = db.createObjectStore('objectStore_13', {keypath: 'SgJjyivKQ', autoIncrement: false});
    var index_13 = objectStore_4.createIndex('index_13', 'test', {multiEntry: true});
    var index_14 = objectStore_6.createIndex('index_14', 'test');
    var index_15 = objectStore_11.createIndex('index_15', 'test', {multiEntry: false});
    var objectStore_14 = db.createObjectStore('objectStore_14', {keypath: 'PniKB', autoIncrement: true});
    var objectStore_15 = db.createObjectStore('objectStore_15');
    var index_16 = objectStore_5.createIndex('index_16', 'test', {unique: false});
    var objectStore_16 = db.createObjectStore('objectStore_16');
    var objectStore_17 = db.createObjectStore('objectStore_17');
    var index_17 = objectStore_12.createIndex('index_17', 'test', {multiEntry: false});
    var objectStore_18 = db.createObjectStore('objectStore_18', {keypath: 'jbIxKMeOQpea'});
    var objectStore_19 = db.createObjectStore('objectStore_19');
    var objectStore_20 = db.createObjectStore('objectStore_20', {keypath: 'QugBsjd', autoIncrement: false});
    var index_18 = objectStore_8.createIndex('index_18', 'test');
    var objectStore_21 = db.createObjectStore('objectStore_21');
    var objectStore_22 = db.createObjectStore('objectStore_22');
    var index_19 = objectStore_4.createIndex('index_19', 'test', {multiEntry: false});
    var objectStore_23 = db.createObjectStore('objectStore_23');
    var index_20 = objectStore_4.createIndex('index_20', 'test', {unique: false});
    var index_21 = objectStore_12.createIndex('index_21', 'test');
    var index_22 = objectStore_19.createIndex('index_22', 'test', {unique: true, multiEntry: false});
    var objectStore_24 = db.createObjectStore('objectStore_24', {keypath: 'RVvmRIo', autoIncrement: true});
    var objectStore_25 = db.createObjectStore('objectStore_25');
    var index_23 = objectStore_7.createIndex('index_23', 'test', {unique: false, multiEntry: true});
    var objectStore_26 = db.createObjectStore('objectStore_26', {autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_27', {autoIncrement: true});
    var index_24 = objectStore_18.createIndex('index_24', 'test', {unique: false, multiEntry: false});
    var objectStore_28 = db.createObjectStore('objectStore_28', {keypath: 'JqIOfkXeka'});
    var index_25 = objectStore_1.createIndex('index_25', 'test', {unique: true});
    var index_26 = objectStore_18.createIndex('index_26', 'test', {unique: false, multiEntry: false});
    var index_27 = objectStore_14.createIndex('index_27', 'test');
    var index_28 = objectStore_12.createIndex('index_28', 'test', {unique: true, multiEntry: true});
    var objectStore_29 = db.createObjectStore('objectStore_29', {keypath: 'IXLGdKS', autoIncrement: true});
    var index_29 = objectStore_27.createIndex('index_29', 'test');
    var index_30 = objectStore_2.createIndex('index_30', 'test', {multiEntry: false});
    var index_31 = objectStore_7.createIndex('index_31', 'test', {unique: false, multiEntry: false});
    var objectStore_30 = db.createObjectStore('objectStore_30', {autoIncrement: false});
    var objectStore_31 = db.createObjectStore('objectStore_31', {keypath: 'lLlr', autoIncrement: false});
    var objectStore_32 = db.createObjectStore('objectStore_32');
    var index_32 = objectStore_27.createIndex('index_32', 'test', {unique: false, multiEntry: false});
    var objectStore_33 = db.createObjectStore('objectStore_33', {autoIncrement: false});
    var index_33 = objectStore_4.createIndex('index_33', 'test');
    var objectStore_34 = db.createObjectStore('objectStore_34', {keypath: 'BobXRurYOqCc', autoIncrement: true});
    var objectStore_35 = db.createObjectStore('objectStore_35', {keypath: 'sWLlpz.Piw.cKXntdo'});
    var index_34 = objectStore_4.createIndex('index_34', 'test', {unique: false});
    var index_35 = objectStore_32.createIndex('index_35', 'test', {unique: true});
    var index_36 = objectStore_9.createIndex('index_36', 'test', {unique: true, multiEntry: false});
    var objectStore_36 = db.createObjectStore('objectStore_36', {keypath: 'hpXpKgHi'});
    var objectStore_37 = db.createObjectStore('objectStore_37');
    var objectStore_38 = db.createObjectStore('objectStore_38', {keypath: 'utcnaw', autoIncrement: false});
    var objectStore_39 = db.createObjectStore('objectStore_39', {keypath: 'XcDd.FmSzmU.BQyb.Hcy.GvwuSCWpxEjJ.tDb.tNCDgphus.ipXYLx', autoIncrement: false});
    var index_37 = objectStore_38.createIndex('index_37', 'test', {multiEntry: false});
    var index_38 = objectStore_30.createIndex('index_38', 'test', {unique: false, multiEntry: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_9', 'objectStore_23'], 'readwrite', {durability:"relaxed"})
    var objectStore_9 = txn_0.objectStore('objectStore_9');
    var add_0 = objectStore_9.add({f0_y: '<array>', f1_b: '<number>'}, 'VffRzwcS');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.only('VffRzwcS');
        getAllKeys_0 = objectStore_9.getAllKeys(KeyRange_0, 3388217313);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('VffRzwcS');
        getAllKeys_0 = objectStore_9.getAllKeys(KeyRange_1);
    }

    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('VffRzwcS');
        getAll_0 = objectStore_9.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('VffRzwcS');
        getAll_0 = objectStore_9.getAll(KeyRange_3);
    }

    var add_1 = objectStore_9.add({f0_c: '<null>', f1_d: '<boolean>'}, 'FhbUKf');
    var add_2 = objectStore_9.add({f0_e: '<boolean>', f1_q: '<null>', f2_c: '<boolean>', f3_t: '<number>', f4_l: '<number>', f5_e: '<object>'}, 'YBE');
    var put_0 = objectStore_9.put({f0_a: '<boolean>', f1_t: '<null>', f2_s: '<number>'}, 'FwwuXGILcp');
    var count_0 = objectStore_9.count();
    var clear_0 = objectStore_9.clear();
    var add_3 = objectStore_9.add({f0_s: '<array>', f1_z: '<number>', f2_i: '<null>', f3_s: '<array>', f4_h: '<object>'}, 'aOOPRh');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('FhbUKf', 'VffRzwcS', true, false);
        count_1 = objectStore_9.count(KeyRange_4);
    }
    catch (e){
    }

    var put_1 = objectStore_9.put({f0_a: '<number>', f1_m: '<array>'}, 'vnecJlUOiwTg');
    var put_2 = objectStore_9.put({f0_d: '<array>', f1_m: '<string>'}, 'jnOdlnfF');
    var getAll_1 = objectStore_9.getAll(477382049);
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('VffRzwcS', 'VffRzwcS', false, false);
        get_0 = objectStore_9.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('aOOPRh', 'jnOdlnfF', true, true);
        getAll_2 = objectStore_9.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('YBE');
        getAll_2 = objectStore_9.getAll(KeyRange_9);
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('VffRzwcS', true);
        get_1 = objectStore_9.get(KeyRange_10);
    }
    catch (e){
    }

    var put_3 = objectStore_9.put({f0_i: '<array>', f1_a: '<array>', f2_w: '<null>'}, 'pExwmx');
    var count_2 = objectStore_9.count();
    var add_4 = objectStore_9.add({f0_j: '<number>', f1_h: '<string>', f2_d: '<array>', f3_b: '<array>', f4_n: '<object>'}, 'qPPIvmez');
    var clear_1 = objectStore_9.clear();
    var put_4 = objectStore_9.put({f0_x: '<boolean>'}, 'ZZGsVRJMcJNr');
    var add_5 = objectStore_9.add({f0_m: '<number>', f1_n: '<boolean>', f2_x: '<boolean>', f3_w: '<null>', f4_j: '<object>', f5_e: '<array>', f6_t: '<null>'}, 'UCzL');
    var clear_2 = objectStore_9.clear();
    var clear_3 = objectStore_9.clear();
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1 = db.transaction(['objectStore_36'], 'readonly', {durability:"strict"})
    var objectStore_36 = txn_1.objectStore('objectStore_36');
    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2 = db.transaction(['objectStore_13'], 'readwrite', {durability:"relaxed"})
    var objectStore_13 = txn_2.objectStore('objectStore_13');
    var add_6 = objectStore_13.add({f0_s: '<string>', f1_n: '<array>', f2_g: '<array>', f3_q: '<null>', f4_v: '<object>', f5_r: '<boolean>'}, 'ZMQTFy');
    var getAll_3 = objectStore_13.getAll();
    var getAllKeys_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('ZMQTFy', 'ZMQTFy', false, false);
        getAllKeys_1 = objectStore_13.getAllKeys(KeyRange_12, 723748520);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('ZMQTFy');
        getAllKeys_1 = objectStore_13.getAllKeys(KeyRange_13);
    }

    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('ZMQTFy', 'ZMQTFy', true, true);
        count_3 = objectStore_13.count(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.only('ZMQTFy');
        get_2 = objectStore_13.get(KeyRange_16);
    }
    catch (e){
    }

    var put_5 = objectStore_13.put({f0_c: '<number>'}, 'CVKiwIyEQ');
    var add_7 = objectStore_13.add({f0_m: '<number>', f1_r: '<string>', f2_u: '<object>', f3_p: '<null>', f4_t: '<object>', f5_u: '<number>', f6_a: '<array>'}, 'QbnAoh');
    var put_6 = objectStore_13.put({f0_l: '<array>', f1_v: '<number>', f2_e: '<object>', f3_f: '<string>', f4_l: '<string>', f5_i: '<null>', f6_i: '<object>', f7_h: '<object>'}, 'lLtHD');
    var clear_4 = objectStore_13.clear();
    var count_4 = objectStore_13.count();
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('QbnAoh', 'lLtHD', true, true);
        count_5 = objectStore_13.count(KeyRange_18);
    }
    catch (e){
    }

    var put_7 = objectStore_13.put({f0_a: '<number>', f1_f: '<number>', f2_f: '<array>', f3_i: '<number>', f4_t: '<array>'}, 'qiC');
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('QbnAoh', true);
        get_3 = objectStore_13.get(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('QbnAoh', 'QbnAoh', true, true);
        get_4 = objectStore_13.get(KeyRange_22);
    }
    catch (e){
    }

    var put_8 = objectStore_13.put({f0_s: '<string>', f1_v: '<null>', f2_c: '<boolean>', f3_g: '<string>', f4_z: '<string>', f5_m: '<string>', f6_q: '<object>', f7_s: '<string>', f8_c: '<object>', f9_a: '<null>'}, 'HbplEpPsz');
    txn_2.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3 = db.transaction(['objectStore_0'], 'readwrite', {durability:"default"})
    var objectStore_0 = txn_3.objectStore('objectStore_0');
    var put_9 = objectStore_0.put({f0_v: '<boolean>'}, 'mKmIGu');
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('mKmIGu', true);
        get_5 = objectStore_0.get(KeyRange_24);
    }
    catch (e){
    }

    var clear_5 = objectStore_0.clear();
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('mKmIGu', 'mKmIGu', true, true);
        get_6 = objectStore_0.get(KeyRange_26);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('mKmIGu', true);
        get_7 = objectStore_0.get(KeyRange_28);
    }
    catch (e){
    }

    var count_6 = objectStore_0.count();
    var get_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('mKmIGu', 'mKmIGu', true, true);
        get_8 = objectStore_0.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_6 = objectStore_0.clear();
    var getAll_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('mKmIGu', 'mKmIGu', false, true);
        getAll_4 = objectStore_0.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('mKmIGu');
        getAll_4 = objectStore_0.getAll(KeyRange_33);
    }

    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('mKmIGu', 'mKmIGu', true, false);
        get_9 = objectStore_0.get(KeyRange_34);
    }
    catch (e){
    }

    var count_7 = objectStore_0.count();
    var delete_0;
    try{
        KeyRange_36 = IDBKeyRange.bound('mKmIGu', 'mKmIGu', true, true);
        delete_0 = objectStore_0.delete(KeyRange_36);
    }
    catch (e){
    }

    var add_8 = objectStore_0.add({f0_e: '<boolean>'}, 'tBzX');
    var clear_7 = objectStore_0.clear();
    var put_10 = objectStore_0.put({f0_j: '<boolean>', f1_c: '<string>', f2_k: '<null>', f3_m: '<string>'}, 'uHGCWIAZK');
    txn_3.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4 = db.transaction(['objectStore_18', 'objectStore_17', 'objectStore_39'], 'readonly', {durability:"default"})
    var objectStore_17 = txn_4.objectStore('objectStore_17');
    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5 = db.transaction(['objectStore_20'], 'readwrite', {durability:"default"})
    var objectStore_20 = txn_5.objectStore('objectStore_20');
    var clear_8 = objectStore_20.clear();
    var put_11 = objectStore_20.put({f0_t: '<object>', f1_q: '<object>', f2_z: '<string>', f3_h: '<null>'}, 'oHvn');
    var clear_9 = objectStore_20.clear();
    var count_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('oHvn', 'oHvn', true, false);
        count_8 = objectStore_20.count(KeyRange_38);
    }
    catch (e){
    }

    var add_9 = objectStore_20.add({f0_f: '<number>', f1_b: '<null>', f2_f: '<array>'}, 'WKKAkNLwo');
    var clear_10 = objectStore_20.clear();
    var count_9 = objectStore_20.count();
    var getAll_5 = objectStore_20.getAll(2614897895);
    var clear_11 = objectStore_20.clear();
    var count_10;
    try{
        KeyRange_40 = IDBKeyRange.bound('WKKAkNLwo', 'oHvn', false, false);
        count_10 = objectStore_20.count(KeyRange_40);
    }
    catch (e){
    }

    var put_12 = objectStore_20.put({f0_f: '<object>', f1_v: '<number>', f2_m: '<null>', f3_u: '<number>', f4_j: '<number>', f5_m: '<boolean>', f6_r: '<string>', f7_b: '<string>', f8_t: '<number>'}, 'hFdX');
    var count_11;
    try{
        KeyRange_42 = IDBKeyRange.only('WKKAkNLwo');
        count_11 = objectStore_20.count(KeyRange_42);
    }
    catch (e){
    }

    var clear_12 = objectStore_20.clear();
    var add_10 = objectStore_20.add({f0_x: '<number>', f1_l: '<string>', f2_h: '<number>', f3_m: '<null>'}, 'ACKMZyQlszp');
    var clear_13 = objectStore_20.clear();
    var add_11 = objectStore_20.add({f0_a: '<boolean>', f1_s: '<object>', f2_o: '<string>', f3_y: '<number>', f4_a: '<null>', f5_w: '<array>', f6_v: '<number>', f7_g: '<null>', f8_o: '<string>'}, 'FjBJjiQwkN');
    var get_10;
    try{
        KeyRange_44 = IDBKeyRange.only('hFdX');
        get_10 = objectStore_20.get(KeyRange_44);
    }
    catch (e){
    }

    var count_12 = objectStore_20.count();
    var getAllKeys_2;
    try{
        KeyRange_46 = IDBKeyRange.bound('oHvn', 'hFdX', true, true);
        getAllKeys_2 = objectStore_20.getAllKeys(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('oHvn');
        getAllKeys_2 = objectStore_20.getAllKeys(KeyRange_47);
    }

    txn_5.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6 = db.transaction(['objectStore_26'], 'readwrite', {durability:"relaxed"})
    var objectStore_26 = txn_6.objectStore('objectStore_26');
    var put_13 = objectStore_26.put({f0_q: '<string>', f1_d: '<array>', f2_w: '<boolean>', f3_w: '<array>', f4_w: '<array>'}, 'hjJuDXaLHjaY');
    var add_12 = objectStore_26.add({f0_e: '<null>', f1_l: '<array>', f2_e: '<object>', f3_g: '<string>', f4_h: '<null>', f5_f: '<object>', f6_r: '<array>', f7_u: '<boolean>', f8_w: '<string>'}, 'IkVoyl');
    var put_14 = objectStore_26.put({f0_k: '<string>', f1_m: '<null>', f2_e: '<boolean>', f3_t: '<number>', f4_d: '<null>', f5_h: '<null>', f6_z: '<object>', f7_t: '<null>', f8_z: '<null>'}, 'DcCvkEiR');
    var add_13 = objectStore_26.add({f0_u: '<boolean>', f1_e: '<boolean>', f2_m: '<object>', f3_y: '<string>', f4_r: '<boolean>', f5_r: '<number>', f6_b: '<null>', f7_t: '<object>', f8_i: '<array>'}, 'cVUDNGGRYooJ');
    var getAllKeys_3;
    try{
        KeyRange_48 = IDBKeyRange.only('DcCvkEiR');
        getAllKeys_3 = objectStore_26.getAllKeys(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('cVUDNGGRYooJ');
        getAllKeys_3 = objectStore_26.getAllKeys(KeyRange_49);
    }

    var count_13;
    try{
        KeyRange_50 = IDBKeyRange.only('DcCvkEiR');
        count_13 = objectStore_26.count(KeyRange_50);
    }
    catch (e){
    }

    var clear_14 = objectStore_26.clear();
    var add_14 = objectStore_26.add({f0_u: '<number>', f1_v: '<object>', f2_x: '<array>', f3_k: '<number>', f4_b: '<object>'}, 'hyvvL');
    var put_15 = objectStore_26.put({f0_n: '<string>', f1_u: '<object>', f2_g: '<null>'}, 'nRcFfW');
    var delete_1;
    try{
        KeyRange_52 = IDBKeyRange.bound('hjJuDXaLHjaY', 'hjJuDXaLHjaY', true, true);
        delete_1 = objectStore_26.delete(KeyRange_52);
    }
    catch (e){
    }

    var put_16 = objectStore_26.put({f0_r: '<array>', f1_t: '<object>', f2_a: '<object>', f3_r: '<number>', f4_v: '<null>', f5_u: '<array>', f6_o: '<string>', f7_s: '<object>'}, 'IYagwIcg');
    var clear_15 = objectStore_26.clear();
    var put_17 = objectStore_26.put({f0_z: '<object>', f1_d: '<string>', f2_v: '<null>', f3_f: '<object>', f4_f: '<number>', f5_t: '<string>', f6_m: '<boolean>', f7_w: '<boolean>'}, 'MsZouOlhhUNR');
    var clear_16 = objectStore_26.clear();
    var clear_17 = objectStore_26.clear();
    var count_14;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('hjJuDXaLHjaY', true);
        count_14 = objectStore_26.count(KeyRange_54);
    }
    catch (e){
    }

    var count_15 = objectStore_26.count();
    txn_6.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7 = db.transaction(['objectStore_22', 'objectStore_32', 'objectStore_18'], 'readwrite', {durability:"default"})
    var objectStore_32 = txn_7.objectStore('objectStore_32');
    var clear_18 = objectStore_32.clear();
    var clear_19 = objectStore_32.clear();
    var add_15 = objectStore_32.add({f0_n: '<string>', f1_z: '<null>', f2_f: '<null>', f3_j: '<null>', f4_q: '<null>', f5_j: '<boolean>', f6_e: '<null>', f7_l: '<null>', f8_p: '<string>', f9_s: '<boolean>'}, 'yfHSxe');
    var add_16 = objectStore_32.add({f0_f: '<array>'}, 'vRzCoFscumNg');
    var clear_20 = objectStore_32.clear();
    var clear_21 = objectStore_32.clear();
    var get_11;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('yfHSxe', true);
        get_11 = objectStore_32.get(KeyRange_56);
    }
    catch (e){
    }

    var clear_22 = objectStore_32.clear();
    var delete_2;
    try{
        KeyRange_58 = IDBKeyRange.only('yfHSxe');
        delete_2 = objectStore_32.delete(KeyRange_58);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_32.getAllKeys();
    var put_18 = objectStore_32.put({f0_n: '<object>', f1_t: '<object>', f2_a: '<null>', f3_z: '<null>', f4_f: '<string>', f5_c: '<string>', f6_k: '<string>', f7_t: '<string>', f8_h: '<number>'}, 'HsVMrArAakU');
    var put_19 = objectStore_32.put({f0_i: '<boolean>', f1_l: '<array>', f2_l: '<object>', f3_t: '<object>', f4_b: '<string>', f5_x: '<string>', f6_k: '<string>', f7_e: '<null>', f8_v: '<number>', f9_k: '<number>'}, 'OwXeAxpFzIc');
    var delete_3;
    try{
        KeyRange_60 = IDBKeyRange.bound('HsVMrArAakU', 'vRzCoFscumNg', false, true);
        delete_3 = objectStore_32.delete(KeyRange_60);
    }
    catch (e){
    }

    txn_7.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8 = db.transaction(['objectStore_28'], 'readonly', {durability:"relaxed"})
    var objectStore_28 = txn_8.objectStore('objectStore_28');
    txn_8.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_9 = db.transaction(['objectStore_26', 'objectStore_36', 'objectStore_31'], 'readwrite', {durability:"strict"})
    var objectStore_26 = txn_9.objectStore('objectStore_26');
    var put_20 = objectStore_26.put({f0_i: '<number>', f1_o: '<array>', f2_m: '<number>', f3_l: '<object>'}, 'rZfPuYFJJ');
    var get_12;
    try{
        KeyRange_62 = IDBKeyRange.bound('hjJuDXaLHjaY', 'nRcFfW', true, false);
        get_12 = objectStore_26.get(KeyRange_62);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('IkVoyl', true);
        delete_4 = objectStore_26.delete(KeyRange_64);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_66 = IDBKeyRange.only('nRcFfW');
        get_13 = objectStore_26.get(KeyRange_66);
    }
    catch (e){
    }

    var clear_23 = objectStore_26.clear();
    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('IYagwIcg', false);
        get_14 = objectStore_26.get(KeyRange_68);
    }
    catch (e){
    }

    var put_21 = objectStore_26.put({f0_i: '<number>', f1_t: '<array>', f2_y: '<null>', f3_j: '<array>', f4_o: '<number>'}, 'TkdtZAmtAxoJ');
    var delete_5;
    try{
        KeyRange_70 = IDBKeyRange.bound('IkVoyl', 'hyvvL', false, true);
        delete_5 = objectStore_26.delete(KeyRange_70);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_72 = IDBKeyRange.bound('IYagwIcg', 'DcCvkEiR', false, true);
        getAllKeys_5 = objectStore_26.getAllKeys(KeyRange_72, 581859089);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('IkVoyl');
        getAllKeys_5 = objectStore_26.getAllKeys(KeyRange_73);
    }

    var add_17 = objectStore_26.add({f0_i: '<null>'}, 'ianJEZSv');
    var count_16 = objectStore_26.count();
    var get_15;
    try{
        KeyRange_74 = IDBKeyRange.bound('hjJuDXaLHjaY', 'nRcFfW', true, false);
        get_15 = objectStore_26.get(KeyRange_74);
    }
    catch (e){
    }

    var add_18 = objectStore_26.add({f0_o: '<null>', f1_h: '<object>', f2_o: '<object>', f3_n: '<number>', f4_z: '<object>', f5_o: '<number>'}, 'tGdKEZql');
    var put_22 = objectStore_26.put({f0_i: '<object>', f1_u: '<number>', f2_m: '<array>', f3_e: '<number>'}, 'uOzNqe');
    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.only('ianJEZSv');
        get_16 = objectStore_26.get(KeyRange_76);
    }
    catch (e){
    }

    var clear_24 = objectStore_26.clear();
    var clear_25 = objectStore_26.clear();
    var get_17;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('cVUDNGGRYooJ', true);
        get_17 = objectStore_26.get(KeyRange_78);
    }
    catch (e){
    }

    var clear_26 = objectStore_26.clear();
    txn_9.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_9.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_9.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1592')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};