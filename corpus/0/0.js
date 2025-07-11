let db;
const openRequest = window.indexedDB.open('str_8903', 2603525103402064)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: true});
    db.deleteObjectStore('objectStore_0')
    var objectStore_1 = db.createObjectStore('objectStore_1', {autoIncrement: true});
    var add_0 = objectStore_1.add({f0_n: '<string>', f1_e: '<boolean>', f2_b: '<object>', f3_v: '<null>', f4_d: '<null>', f5_j: '<string>', f6_z: '<object>', f7_u: '<array>', f8_z: '<array>', f9_i: '<null>'}, 'pghTLPkOXzQg');
    var put_0 = objectStore_1.put({f0_a: '<object>', f1_p: '<null>', f2_l: '<null>', f3_k: '<object>', f4_n: '<null>', f5_f: '<null>', f6_h: '<null>', f7_w: '<number>', f8_j: '<string>', f9_w: '<array>'}, 'FpRziSRLArPu');
    var add_1 = objectStore_1.add({f0_h: '<object>', f1_n: '<string>', f2_v: '<object>', f3_a: '<array>', f4_h: '<string>', f5_p: '<array>', f6_t: '<object>', f7_y: '<number>'}, 'uGcpjnnmw');
    var clear_0 = objectStore_1.clear();
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('FpRziSRLArPu');
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_1.put({f0_y: '<object>', f1_d: '<object>', f2_e: '<array>', f3_q: '<number>'}, 'YLGKhHJXRk');
    var put_2 = objectStore_1.put({f0_a: '<array>', f1_a: '<number>', f2_o: '<boolean>', f3_r: '<boolean>'}, 'aMF');
    var objectStore_2 = db.createObjectStore('objectStore_2');
    var index_0 = objectStore_2.createIndex('index_0', 'test', {multiEntry: true});
    var put_3 = objectStore_2.put({f0_b: '<number>', f1_r: '<boolean>'}, 'JzcCFyk');
    db.deleteObjectStore('objectStore_1')
    db.deleteObjectStore('objectStore_2')
    var objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'ztch'});
    var add_2 = objectStore_3.add({f0_e: '<array>', f1_l: '<null>', f2_k: '<array>'}, 'UYZddsZdH');
    var index_1 = objectStore_3.createIndex('index_1', 'test', {multiEntry: true});
    var index_2 = objectStore_3.createIndex('index_2', 'test', {unique: false});
    var put_4 = objectStore_3.put({f0_d: '<number>', f1_g: '<null>', f2_z: '<string>', f3_u: '<object>', f4_b: '<array>', f5_u: '<array>'}, 'lpfAxDdHpK');
    var objectStore_4 = db.createObjectStore('objectStore_4', {autoIncrement: false});
    var objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'KXWm', autoIncrement: true});
    var index_3 = objectStore_3.createIndex('index_3', 'test', {unique: false, multiEntry: true});
    var objectStore_6 = db.createObjectStore('objectStore_6', {autoIncrement: true});
    var clear_1 = objectStore_3.clear();
    db.deleteObjectStore('objectStore_3')
    var index_4 = objectStore_4.createIndex('index_4', 'test');
    var add_3 = objectStore_5.add({f0_o: '<array>', f1_z: '<boolean>', f2_y: '<null>', f3_t: '<string>', f4_m: '<number>', f5_j: '<number>'}, 'RQGr');
    var put_5 = objectStore_6.put({f0_o: '<null>', f1_j: '<string>', f2_p: '<number>', f3_g: '<boolean>', f4_k: '<array>', f5_m: '<null>', f6_q: '<boolean>', f7_l: '<object>', f8_t: '<string>', f9_k: '<object>'}, 'sHIR');
    var objectStore_7 = db.createObjectStore('objectStore_7', {autoIncrement: true});
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('sHIR', 'sHIR', true, true);
        get_0 = objectStore_6.get(KeyRange_2);
    }
    catch (e){
    }

    var index_5 = objectStore_7.createIndex('index_5', 'test', {unique: false});
    db.deleteObjectStore('objectStore_6')
    var objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'fdlwAkZq.AJiTX.eNnCVTsWNf.ZxgHnZpzy.TnB.uYl.MUW.UPAP.WPH'});
    var put_6 = objectStore_5.put({f0_r: '<string>', f1_i: '<string>', f2_j: '<null>', f3_g: '<null>', f4_u: '<number>', f5_b: '<boolean>', f6_a: '<boolean>', f7_x: '<boolean>', f8_c: '<array>'}, 'GTf');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('RQGr', false);
        get_1 = objectStore_5.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_2 = objectStore_8.clear();
    var clear_3 = objectStore_4.clear();
    var index_6 = objectStore_5.createIndex('index_6', 'test', {multiEntry: false});
    db.deleteObjectStore('objectStore_4')
    var index_7 = objectStore_7.createIndex('index_7', 'test');
    var clear_4 = objectStore_8.clear();
    var add_4 = objectStore_5.add({f0_b: '<number>', f1_p: '<boolean>', f2_d: '<boolean>', f3_p: '<number>', f4_o: '<number>', f5_n: '<object>', f6_t: '<boolean>', f7_v: '<boolean>'}, 'fxdwm');
    var clear_5 = objectStore_7.clear();
    var index_0 = objectStore_5.index('index_6');
    var clear_6 = objectStore_8.clear();
    var objectStore_9 = db.createObjectStore('objectStore_9', {autoIncrement: false});
    var clear_7 = objectStore_7.clear();
    var clear_8 = objectStore_7.clear();
    var put_7 = objectStore_7.put({f0_m: '<string>', f1_z: '<null>', f2_k: '<object>', f3_z: '<object>', f4_j: '<boolean>'}, 'XNnMZgeIxqAh');
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('XNnMZgeIxqAh', 'XNnMZgeIxqAh', false, false);
        get_2 = objectStore_7.get(KeyRange_6);
    }
    catch (e){
    }

    var put_8 = objectStore_7.put({f0_s: '<null>', f1_o: '<string>', f2_h: '<number>', f3_x: '<null>', f4_p: '<string>', f5_a: '<boolean>', f6_i: '<object>', f7_i: '<number>', f8_u: '<object>', f9_j: '<string>'}, 'XzYeeAYmgQw');
    var clear_9 = objectStore_8.clear();
    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('XzYeeAYmgQw', 'XzYeeAYmgQw', false, false);
        get_3 = objectStore_7.get(KeyRange_8);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.only('XzYeeAYmgQw');
        get_4 = objectStore_7.get(KeyRange_10);
    }
    catch (e){
    }

    var index_8 = objectStore_5.createIndex('index_8', 'test', {multiEntry: false});
    var put_9 = objectStore_5.put({f0_o: '<boolean>', f1_h: '<array>', f2_b: '<object>', f3_d: '<boolean>', f4_u: '<object>', f5_b: '<string>', f6_d: '<object>', f7_i: '<object>', f8_g: '<object>'}, 'HtbJA');
    var put_10 = objectStore_7.put({f0_x: '<number>', f1_q: '<object>', f2_j: '<array>', f3_v: '<object>', f4_j: '<object>', f5_l: '<string>', f6_a: '<null>', f7_e: '<boolean>', f8_j: '<object>'}, 'riTukS');
    var objectStore_10 = db.createObjectStore('objectStore_10', {autoIncrement: true});
    var objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'NBcYPWILFUbP'});
    db.deleteObjectStore('objectStore_7')
    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('GTf', false);
        delete_0 = objectStore_5.delete(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_12 = db.createObjectStore('objectStore_12', {autoIncrement: false});
    var clear_10 = objectStore_9.clear();
    var add_5 = objectStore_11.add({f0_n: '<number>', f1_l: '<boolean>', f2_d: '<string>', f3_n: '<boolean>', f4_p: '<boolean>', f5_p: '<boolean>', f6_e: '<object>', f7_l: '<array>', f8_g: '<string>'}, 'eMNMQK');
    var objectStore_13 = db.createObjectStore('objectStore_13', {autoIncrement: false});
    var add_6 = objectStore_8.add({f0_w: '<number>', f1_r: '<string>', f2_d: '<array>', f3_f: '<array>', f4_e: '<boolean>', f5_w: '<number>', f6_b: '<object>', f7_b: '<object>', f8_b: '<boolean>'}, 'cHmYIj');
    var count_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('eMNMQK', true);
        count_1 = objectStore_11.count(KeyRange_14);
    }
    catch (e){
    }

    var index_9 = objectStore_9.createIndex('index_9', 'test', {unique: true, multiEntry: false});
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('eMNMQK', 'eMNMQK', false, true);
        get_5 = objectStore_11.get(KeyRange_16);
    }
    catch (e){
    }

    var objectStore_14 = db.createObjectStore('objectStore_14', {keypath: 'cZdYH.pWVg.ykasvPNs.ybHTmfob.HUhWm.bTuPNHMCvfT'});
    var index_10 = objectStore_11.createIndex('index_10', 'test');
    var put_11 = objectStore_12.put({f0_y: '<null>', f1_s: '<boolean>', f2_t: '<number>', f3_r: '<boolean>'}, 'NPCXBZtCWKl');
    var index_11 = objectStore_9.createIndex('index_11', 'test', {unique: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_13'], 'readwrite', {durability:"relaxed"})
    var objectStore_13 = txn_0.objectStore('objectStore_13');
    var clear_11 = objectStore_13.clear();
    var add_7 = objectStore_13.add({f0_p: '<boolean>', f1_t: '<number>', f2_a: '<null>', f3_b: '<boolean>', f4_a: '<boolean>', f5_t: '<number>', f6_p: '<boolean>', f7_y: '<null>'}, 'RNhoRfhnRMIC');
    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.bound('RNhoRfhnRMIC', 'RNhoRfhnRMIC', true, true);
        get_6 = objectStore_13.get(KeyRange_18);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('RNhoRfhnRMIC', 'RNhoRfhnRMIC', true, true);
        count_2 = objectStore_13.count(KeyRange_20);
    }
    catch (e){
    }

    var count_3 = objectStore_13.count();
    var count_4 = objectStore_13.count();
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1 = db.transaction(['objectStore_14', 'objectStore_13'], 'readwrite', {durability:"default"})
    var objectStore_14 = txn_1.objectStore('objectStore_14');
    var add_8 = objectStore_14.add({f0_q: '<number>'}, 'fwHnvKZxA');
    var clear_12 = objectStore_14.clear();
    var getAllKeys_0;
    try{
        KeyRange_22 = IDBKeyRange.bound('fwHnvKZxA', 'fwHnvKZxA', true, true);
        getAllKeys_0 = objectStore_14.getAllKeys(KeyRange_22, 73705395);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('fwHnvKZxA');
        getAllKeys_0 = objectStore_14.getAllKeys(KeyRange_23);
    }

    var put_12 = objectStore_14.put({f0_m: '<boolean>', f1_z: '<object>', f2_x: '<string>', f3_v: '<null>'}, 'ybNMrtnyqo');
    var add_9 = objectStore_14.add({f0_m: '<number>', f1_t: '<number>', f2_p: '<null>', f3_e: '<null>', f4_u: '<object>', f5_u: '<boolean>', f6_t: '<string>', f7_r: '<object>'}, 'fudUJZk');
    var getAll_0;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('fwHnvKZxA', true);
        getAll_0 = objectStore_14.getAll(KeyRange_24, 705728789);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('fudUJZk');
        getAll_0 = objectStore_14.getAll(KeyRange_25);
    }

    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('ybNMrtnyqo', 'ybNMrtnyqo', false, false);
        get_7 = objectStore_14.get(KeyRange_26);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.only('ybNMrtnyqo');
        get_8 = objectStore_14.get(KeyRange_28);
    }
    catch (e){
    }

    var put_13 = objectStore_14.put({f0_k: '<array>', f1_n: '<string>', f2_i: '<boolean>', f3_k: '<boolean>', f4_x: '<boolean>'}, 'euAtN');
    var getAllKeys_1;
    try{
        KeyRange_30 = IDBKeyRange.bound('euAtN', 'fudUJZk', true, true);
        getAllKeys_1 = objectStore_14.getAllKeys(KeyRange_30, 2606859754);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('ybNMrtnyqo');
        getAllKeys_1 = objectStore_14.getAllKeys(KeyRange_31);
    }

    var get_9;
    try{
        KeyRange_32 = IDBKeyRange.bound('euAtN', 'ybNMrtnyqo', false, true);
        get_9 = objectStore_14.get(KeyRange_32);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('fudUJZk', 'fwHnvKZxA', false, false);
        count_5 = objectStore_14.count(KeyRange_34);
    }
    catch (e){
    }

    var put_14 = objectStore_14.put({f0_y: '<object>'}, 'cFh');
    var put_15 = objectStore_14.put({f0_w: '<null>', f1_y: '<null>', f2_n: '<boolean>', f3_g: '<object>', f4_o: '<object>', f5_r: '<boolean>'}, 'rWcvUko');
    var count_6;
    try{
        KeyRange_36 = IDBKeyRange.bound('fudUJZk', 'fudUJZk', true, true);
        count_6 = objectStore_14.count(KeyRange_36);
    }
    catch (e){
    }

    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2 = db.transaction(['objectStore_11', 'objectStore_12', 'objectStore_10'], 'readwrite', {durability:"strict"})
    var objectStore_10 = txn_2.objectStore('objectStore_10');
    var put_16 = objectStore_10.put({f0_q: '<string>', f1_x: '<number>'}, 'zYMYIziriy');
    var get_10;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('zYMYIziriy', false);
        get_10 = objectStore_10.get(KeyRange_38);
    }
    catch (e){
    }

    var put_17 = objectStore_10.put({f0_u: '<number>'}, 'jPRXhXdh');
    var put_18 = objectStore_10.put({f0_f: '<array>', f1_v: '<number>', f2_w: '<null>', f3_g: '<string>', f4_f: '<number>', f5_b: '<number>', f6_f: '<null>', f7_p: '<number>', f8_b: '<array>'}, 'ezbXPBooiYH');
    var clear_13 = objectStore_10.clear();
    var getAllKeys_2;
    try{
        KeyRange_40 = IDBKeyRange.only('ezbXPBooiYH');
        getAllKeys_2 = objectStore_10.getAllKeys(KeyRange_40);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('ezbXPBooiYH');
        getAllKeys_2 = objectStore_10.getAllKeys(KeyRange_41);
    }

    var clear_14 = objectStore_10.clear();
    var get_11;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('zYMYIziriy', false);
        get_11 = objectStore_10.get(KeyRange_42);
    }
    catch (e){
    }

    var add_10 = objectStore_10.add({f0_u: '<array>', f1_n: '<object>', f2_k: '<array>', f3_l: '<boolean>', f4_p: '<string>', f5_h: '<number>'}, 'ujFEREUPp');
    var get_12;
    try{
        KeyRange_44 = IDBKeyRange.only('ujFEREUPp');
        get_12 = objectStore_10.get(KeyRange_44);
    }
    catch (e){
    }

    var put_19 = objectStore_10.put({f0_a: '<boolean>', f1_k: '<boolean>', f2_i: '<array>', f3_t: '<array>', f4_f: '<object>', f5_l: '<number>', f6_q: '<array>'}, 'barks');
    var put_20 = objectStore_10.put({f0_z: '<string>', f1_g: '<number>'}, 'kAMiHhnt');
    var clear_15 = objectStore_10.clear();
    var clear_16 = objectStore_10.clear();
    var put_21 = objectStore_10.put({f0_b: '<array>', f1_z: '<array>', f2_r: '<object>', f3_u: '<object>', f4_b: '<string>', f5_y: '<array>', f6_j: '<boolean>', f7_v: '<string>'}, 'WAGAxDKwt');
    var getAllKeys_3 = objectStore_10.getAllKeys();
    var count_7 = objectStore_10.count();
    txn_2.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3 = db.transaction(['objectStore_8'], 'readwrite', {durability:"strict"})
    var objectStore_8 = txn_3.objectStore('objectStore_8');
    var add_11 = objectStore_8.add({f0_n: '<string>', f1_r: '<number>', f2_z: '<boolean>', f3_h: '<null>', f4_s: '<null>', f5_f: '<number>', f6_w: '<number>', f7_l: '<string>', f8_c: '<string>', f9_b: '<string>'}, 'GJHLXL');
    var clear_17 = objectStore_8.clear();
    var add_12 = objectStore_8.add({f0_i: '<boolean>', f1_k: '<object>', f2_o: '<string>', f3_y: '<object>', f4_b: '<array>', f5_f: '<object>', f6_r: '<boolean>', f7_a: '<string>', f8_y: '<boolean>', f9_a: '<null>'}, 'EAYSMnpjRm');
    var get_13;
    try{
        KeyRange_46 = IDBKeyRange.only('EAYSMnpjRm');
        get_13 = objectStore_8.get(KeyRange_46);
    }
    catch (e){
    }

    var getAll_1 = objectStore_8.getAll(1031931428);
    var add_13 = objectStore_8.add({f0_x: '<null>', f1_f: '<number>', f2_y: '<string>', f3_n: '<string>', f4_t: '<number>'}, 'JqDldCNdgqv');
    var put_22 = objectStore_8.put({f0_v: '<boolean>', f1_f: '<string>', f2_c: '<boolean>', f3_j: '<array>', f4_g: '<null>'}, 'ieCpoa');
    var clear_18 = objectStore_8.clear();
    var clear_19 = objectStore_8.clear();
    var clear_20 = objectStore_8.clear();
    var put_23 = objectStore_8.put({f0_y: '<null>', f1_i: '<null>', f2_q: '<object>', f3_r: '<object>', f4_e: '<array>', f5_h: '<number>', f6_u: '<string>', f7_y: '<string>', f8_x: '<null>'}, 'FyYUd');
    var count_8 = objectStore_8.count();
    var getAllKeys_4;
    try{
        KeyRange_48 = IDBKeyRange.bound('GJHLXL', 'JqDldCNdgqv', true, true);
        getAllKeys_4 = objectStore_8.getAllKeys(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('ieCpoa');
        getAllKeys_4 = objectStore_8.getAllKeys(KeyRange_49);
    }

    var get_14;
    try{
        KeyRange_50 = IDBKeyRange.bound('GJHLXL', 'FyYUd', true, true);
        get_14 = objectStore_8.get(KeyRange_50);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_52 = IDBKeyRange.only('EAYSMnpjRm');
        get_15 = objectStore_8.get(KeyRange_52);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_54 = IDBKeyRange.bound('FyYUd', 'EAYSMnpjRm', false, false);
        count_9 = objectStore_8.count(KeyRange_54);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_56 = IDBKeyRange.bound('cHmYIj', 'GJHLXL', false, true);
        count_10 = objectStore_8.count(KeyRange_56);
    }
    catch (e){
    }

    txn_3.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4 = db.transaction(['objectStore_9', 'objectStore_8'], 'readonly', {durability:"relaxed"})
    var objectStore_8 = txn_4.objectStore('objectStore_8');
    var get_16;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('EAYSMnpjRm', false);
        get_16 = objectStore_8.get(KeyRange_58);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_60 = IDBKeyRange.bound('cHmYIj', 'GJHLXL', true, true);
        count_11 = objectStore_8.count(KeyRange_60);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_62 = IDBKeyRange.bound('cHmYIj', 'EAYSMnpjRm', true, true);
        getAll_2 = objectStore_8.getAll(KeyRange_62);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('FyYUd');
        getAll_2 = objectStore_8.getAll(KeyRange_63);
    }

    var count_12;
    try{
        KeyRange_64 = IDBKeyRange.only('JqDldCNdgqv');
        count_12 = objectStore_8.count(KeyRange_64);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('JqDldCNdgqv', false);
        getAll_3 = objectStore_8.getAll(KeyRange_66, 2847867744);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('FyYUd');
        getAll_3 = objectStore_8.getAll(KeyRange_67);
    }

    var get_17;
    try{
        KeyRange_68 = IDBKeyRange.bound('FyYUd', 'cHmYIj', true, false);
        get_17 = objectStore_8.get(KeyRange_68);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_70 = IDBKeyRange.only('FyYUd');
        get_18 = objectStore_8.get(KeyRange_70);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_72 = IDBKeyRange.bound('EAYSMnpjRm', 'cHmYIj', true, false);
        get_19 = objectStore_8.get(KeyRange_72);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_74 = IDBKeyRange.bound('ieCpoa', 'cHmYIj', true, true);
        get_20 = objectStore_8.get(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_8.getAllKeys();
    var get_21;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('GJHLXL', true);
        get_21 = objectStore_8.get(KeyRange_76);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_8.getAllKeys();
    var count_13 = objectStore_8.count();
    var getAllKeys_7;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('JqDldCNdgqv', false);
        getAllKeys_7 = objectStore_8.getAllKeys(KeyRange_78, 3824631411);
    }
    catch (e){
        KeyRange_79 = IDBKeyRange.only('FyYUd');
        getAllKeys_7 = objectStore_8.getAllKeys(KeyRange_79);
    }

    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5 = db.transaction(['objectStore_8', 'objectStore_9'], 'readonly', {durability:"default"})
    var objectStore_9 = txn_5.objectStore('objectStore_9');
    var index_1 = objectStore_9.index('index_11');
    var index_2 = objectStore_9.index('index_11');
    txn_5.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6 = db.transaction(['objectStore_11', 'objectStore_10'], 'readonly', {durability:"default"})
    var objectStore_10 = txn_6.objectStore('objectStore_10');
    var get_22;
    try{
        KeyRange_80 = IDBKeyRange.bound('WAGAxDKwt', 'jPRXhXdh', true, false);
        get_22 = objectStore_10.get(KeyRange_80);
    }
    catch (e){
    }

    var count_14;
    try{
        KeyRange_82 = IDBKeyRange.bound('kAMiHhnt', 'barks', false, true);
        count_14 = objectStore_10.count(KeyRange_82);
    }
    catch (e){
    }

    var count_15 = objectStore_10.count();
    var count_16 = objectStore_10.count();
    var getAllKeys_8 = objectStore_10.getAllKeys(2755308224);
    var get_23;
    try{
        KeyRange_84 = IDBKeyRange.bound('kAMiHhnt', 'kAMiHhnt', false, true);
        get_23 = objectStore_10.get(KeyRange_84);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_86 = IDBKeyRange.bound('WAGAxDKwt', 'kAMiHhnt', true, true);
        get_24 = objectStore_10.get(KeyRange_86);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_88 = IDBKeyRange.bound('jPRXhXdh', 'WAGAxDKwt', true, false);
        getAllKeys_9 = objectStore_10.getAllKeys(KeyRange_88, 3986905709);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('zYMYIziriy');
        getAllKeys_9 = objectStore_10.getAllKeys(KeyRange_89);
    }

    var get_25;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('jPRXhXdh', false);
        get_25 = objectStore_10.get(KeyRange_90);
    }
    catch (e){
    }

    var count_17 = objectStore_10.count();
    var getAllKeys_10 = objectStore_10.getAllKeys(1233951026);
    var get_26;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('WAGAxDKwt', false);
        get_26 = objectStore_10.get(KeyRange_92);
    }
    catch (e){
    }

    var count_18 = objectStore_10.count();
    var get_27;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('barks', true);
        get_27 = objectStore_10.get(KeyRange_94);
    }
    catch (e){
    }

    var get_28;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('zYMYIziriy', false);
        get_28 = objectStore_10.get(KeyRange_96);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_98 = IDBKeyRange.bound('WAGAxDKwt', 'jPRXhXdh', false, false);
        get_29 = objectStore_10.get(KeyRange_98);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_100 = IDBKeyRange.bound('ujFEREUPp', 'kAMiHhnt', false, false);
        getAll_4 = objectStore_10.getAll(KeyRange_100, 2085860511);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('WAGAxDKwt');
        getAll_4 = objectStore_10.getAll(KeyRange_101);
    }

    var count_19;
    try{
        KeyRange_102 = IDBKeyRange.bound('kAMiHhnt', 'ujFEREUPp', true, false);
        count_19 = objectStore_10.count(KeyRange_102);
    }
    catch (e){
    }

    txn_6.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7 = db.transaction(['objectStore_12', 'objectStore_14', 'objectStore_5'], 'readonly', {durability:"relaxed"})
    var objectStore_12 = txn_7.objectStore('objectStore_12');
    var getAllKeys_11;
    try{
        KeyRange_104 = IDBKeyRange.only('NPCXBZtCWKl');
        getAllKeys_11 = objectStore_12.getAllKeys(KeyRange_104, 961878388);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('NPCXBZtCWKl');
        getAllKeys_11 = objectStore_12.getAllKeys(KeyRange_105);
    }

    var count_20;
    try{
        KeyRange_106 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, true);
        count_20 = objectStore_12.count(KeyRange_106);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_108 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, false);
        get_30 = objectStore_12.get(KeyRange_108);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_12.getAllKeys();
    var count_21 = objectStore_12.count();
    var getAll_5;
    try{
        KeyRange_110 = IDBKeyRange.only('NPCXBZtCWKl');
        getAll_5 = objectStore_12.getAll(KeyRange_110);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('NPCXBZtCWKl');
        getAll_5 = objectStore_12.getAll(KeyRange_111);
    }

    var get_31;
    try{
        KeyRange_112 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, false);
        get_31 = objectStore_12.get(KeyRange_112);
    }
    catch (e){
    }

    var count_22 = objectStore_12.count();
    var count_23;
    try{
        KeyRange_114 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, true);
        count_23 = objectStore_12.count(KeyRange_114);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_12.getAllKeys();
    var getAllKeys_14 = objectStore_12.getAllKeys();
    var get_32;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('NPCXBZtCWKl', false);
        get_32 = objectStore_12.get(KeyRange_116);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_118 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, true);
        get_33 = objectStore_12.get(KeyRange_118);
    }
    catch (e){
    }

    var count_24 = objectStore_12.count();
    var get_34;
    try{
        KeyRange_120 = IDBKeyRange.only('NPCXBZtCWKl');
        get_34 = objectStore_12.get(KeyRange_120);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('NPCXBZtCWKl', true);
        get_35 = objectStore_12.get(KeyRange_122);
    }
    catch (e){
    }

    var get_36;
    try{
        KeyRange_124 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, true);
        get_36 = objectStore_12.get(KeyRange_124);
    }
    catch (e){
    }

    var getAll_6 = objectStore_12.getAll(3352342202);
    var getAllKeys_15 = objectStore_12.getAllKeys();
    var count_25;
    try{
        KeyRange_126 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, false);
        count_25 = objectStore_12.count(KeyRange_126);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_128 = IDBKeyRange.bound('NPCXBZtCWKl', 'NPCXBZtCWKl', true, true);
        get_37 = objectStore_12.get(KeyRange_128);
    }
    catch (e){
    }

    var get_38;
    try{
        KeyRange_130 = IDBKeyRange.lowerBound('NPCXBZtCWKl', false);
        get_38 = objectStore_12.get(KeyRange_130);
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
    const txn_8 = db.transaction(['objectStore_14'], 'readwrite', {durability:"default"})
    var objectStore_14 = txn_8.objectStore('objectStore_14');
    var getAll_7;
    try{
        KeyRange_132 = IDBKeyRange.only('euAtN');
        getAll_7 = objectStore_14.getAll(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('fudUJZk');
        getAll_7 = objectStore_14.getAll(KeyRange_133);
    }

    var count_26 = objectStore_14.count();
    var getAll_8 = objectStore_14.getAll(597851429);
    var get_39;
    try{
        KeyRange_134 = IDBKeyRange.bound('fudUJZk', 'cFh', true, true);
        get_39 = objectStore_14.get(KeyRange_134);
    }
    catch (e){
    }

    var getAllKeys_16;
    try{
        KeyRange_136 = IDBKeyRange.bound('euAtN', 'fudUJZk', false, true);
        getAllKeys_16 = objectStore_14.getAllKeys(KeyRange_136);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('fudUJZk');
        getAllKeys_16 = objectStore_14.getAllKeys(KeyRange_137);
    }

    var get_40;
    try{
        KeyRange_138 = IDBKeyRange.bound('fudUJZk', 'ybNMrtnyqo', false, true);
        get_40 = objectStore_14.get(KeyRange_138);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_140 = IDBKeyRange.bound('ybNMrtnyqo', 'cFh', false, false);
        delete_1 = objectStore_14.delete(KeyRange_140);
    }
    catch (e){
    }

    var clear_21 = objectStore_14.clear();
    var add_14 = objectStore_14.add({f0_t: '<number>', f1_j: '<array>', f2_n: '<number>', f3_z: '<null>', f4_i: '<object>', f5_p: '<object>'}, 'DPkOvFVg');
    var count_27 = objectStore_14.count();
    var add_15 = objectStore_14.add({f0_s: '<object>', f1_j: '<null>', f2_q: '<boolean>', f3_c: '<object>', f4_q: '<string>', f5_o: '<string>', f6_k: '<number>', f7_a: '<boolean>', f8_l: '<null>', f9_p: '<object>'}, 'wfQ');
    var put_24 = objectStore_14.put({f0_t: '<boolean>', f1_e: '<boolean>', f2_w: '<number>', f3_b: '<string>'}, 'lpL');
    var getAll_9 = objectStore_14.getAll(901781278);
    var getAll_10;
    try{
        KeyRange_142 = IDBKeyRange.bound('wfQ', 'ybNMrtnyqo', false, false);
        getAll_10 = objectStore_14.getAll(KeyRange_142);
    }
    catch (e){
        KeyRange_143 = IDBKeyRange.only('wfQ');
        getAll_10 = objectStore_14.getAll(KeyRange_143);
    }

    var count_28 = objectStore_14.count();
    var get_41;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('rWcvUko', false);
        get_41 = objectStore_14.get(KeyRange_144);
    }
    catch (e){
    }

    var put_25 = objectStore_14.put({f0_w: '<array>'}, 'IYOEsms');
    var get_42;
    try{
        KeyRange_146 = IDBKeyRange.only('lpL');
        get_42 = objectStore_14.get(KeyRange_146);
    }
    catch (e){
    }

    var add_16 = objectStore_14.add({f0_l: '<boolean>', f1_m: '<number>', f2_h: '<string>', f3_e: '<boolean>', f4_q: '<array>', f5_f: '<string>', f6_y: '<string>', f7_i: '<number>'}, 'PuCjDPzHcOWF');
    var getAllKeys_17;
    try{
        KeyRange_148 = IDBKeyRange.lowerBound('PuCjDPzHcOWF', false);
        getAllKeys_17 = objectStore_14.getAllKeys(KeyRange_148, 748489744);
    }
    catch (e){
        KeyRange_149 = IDBKeyRange.only('ybNMrtnyqo');
        getAllKeys_17 = objectStore_14.getAllKeys(KeyRange_149);
    }

    var get_43;
    try{
        KeyRange_150 = IDBKeyRange.only('fudUJZk');
        get_43 = objectStore_14.get(KeyRange_150);
    }
    catch (e){
    }

    var put_26 = objectStore_14.put({f0_z: '<object>', f1_g: '<object>', f2_g: '<array>', f3_c: '<object>', f4_z: '<object>', f5_q: '<array>'}, 'XfLFjvcJgBiU');
    var get_44;
    try{
        KeyRange_152 = IDBKeyRange.bound('fwHnvKZxA', 'lpL', true, false);
        get_44 = objectStore_14.get(KeyRange_152);
    }
    catch (e){
    }

    txn_8.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_9 = db.transaction(['objectStore_11'], 'readwrite', {durability:"default"})
    var objectStore_11 = txn_9.objectStore('objectStore_11');
    var delete_2;
    try{
        KeyRange_154 = IDBKeyRange.only('eMNMQK');
        delete_2 = objectStore_11.delete(KeyRange_154);
    }
    catch (e){
    }

    var index_3 = objectStore_11.index('index_10');
    var getAll_11;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('eMNMQK', true);
        getAll_11 = objectStore_11.getAll(KeyRange_156);
    }
    catch (e){
        KeyRange_157 = IDBKeyRange.only('eMNMQK');
        getAll_11 = objectStore_11.getAll(KeyRange_157);
    }

    var getAllKeys_18;
    try{
        KeyRange_158 = IDBKeyRange.bound('eMNMQK', 'eMNMQK', true, true);
        getAllKeys_18 = objectStore_11.getAllKeys(KeyRange_158, 3412772199);
    }
    catch (e){
        KeyRange_159 = IDBKeyRange.only('eMNMQK');
        getAllKeys_18 = objectStore_11.getAllKeys(KeyRange_159);
    }

    var count_29;
    try{
        KeyRange_160 = IDBKeyRange.lowerBound('eMNMQK', false);
        count_29 = objectStore_11.count(KeyRange_160);
    }
    catch (e){
    }

    var getAllKeys_19 = objectStore_11.getAllKeys();
    var index_4 = objectStore_11.index('index_10');
    var clear_22 = objectStore_11.clear();
    var get_45;
    try{
        KeyRange_162 = IDBKeyRange.bound('eMNMQK', 'eMNMQK', false, true);
        get_45 = objectStore_11.get(KeyRange_162);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_164 = IDBKeyRange.only('eMNMQK');
        delete_3 = objectStore_11.delete(KeyRange_164);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_166 = IDBKeyRange.bound('eMNMQK', 'eMNMQK', false, false);
        delete_4 = objectStore_11.delete(KeyRange_166);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_168 = IDBKeyRange.only('eMNMQK');
        count_30 = objectStore_11.count(KeyRange_168);
    }
    catch (e){
    }

    var getAll_12;
    try{
        KeyRange_170 = IDBKeyRange.bound('eMNMQK', 'eMNMQK', true, false);
        getAll_12 = objectStore_11.getAll(KeyRange_170, 596561756);
    }
    catch (e){
        KeyRange_171 = IDBKeyRange.only('eMNMQK');
        getAll_12 = objectStore_11.getAll(KeyRange_171);
    }

    var put_27 = objectStore_11.put({f0_w: '<boolean>', f1_y: '<null>', f2_t: '<number>', f3_t: '<number>', f4_d: '<object>'}, 'likgSzT');
    var clear_23 = objectStore_11.clear();
    var count_31 = objectStore_11.count();
    var clear_24 = objectStore_11.clear();
    var put_28 = objectStore_11.put({f0_s: '<array>', f1_j: '<string>', f2_k: '<null>', f3_p: '<number>', f4_m: '<object>'}, 'bOsygVruML');
    var add_17 = objectStore_11.add({f0_m: '<number>', f1_i: '<boolean>', f2_p: '<object>', f3_p: '<string>', f4_e: '<number>', f5_z: '<array>', f6_c: '<string>', f7_o: '<number>', f8_o: '<string>'}, 'oZb');
    var getAllKeys_20 = objectStore_11.getAllKeys(2313033049);
    var count_32;
    try{
        KeyRange_172 = IDBKeyRange.lowerBound('likgSzT', false);
        count_32 = objectStore_11.count(KeyRange_172);
    }
    catch (e){
    }

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
const deleteRequest = indexedDB.deleteDatabase('str_8903')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};