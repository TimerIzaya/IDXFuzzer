let db;
const openRequest = window.indexedDB.open('str_4336', 1255283013682187)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_44');
    var put_0 = objectStore_0.put({f0_h: '<object>', f1_j: '<boolean>'}, 'aiQM');
    var put_1 = objectStore_0.put({f0_z: '<null>', f1_r: '<string>'}, 'OHo');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('OHo', 'OHo', true, true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('aiQM', true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_2 = objectStore_0.put({f0_d: '<array>', f1_j: '<string>', f2_l: '<object>', f3_e: '<boolean>', f4_n: '<boolean>', f5_j: '<object>', f6_y: '<object>', f7_o: '<object>'}, 'LpLEoFmZvb');
    var getAll_0 = objectStore_0.getAll(1679045096);
    db.deleteObjectStore('objectStore_44')
    var objectStore_1 = db.createObjectStore('objectStore_45', {autoIncrement: false});
    var index_41 = objectStore_1.createIndex('index_41', 'test', {unique: false, multiEntry: true});
    var clear_2 = objectStore_1.clear();
    var index_42 = objectStore_1.createIndex('index_42', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_46');
    var put_3 = objectStore_1.put({f0_f: '<string>', f1_n: '<null>', f2_p: '<boolean>', f3_p: '<array>', f4_k: '<array>', f5_k: '<number>'}, 'ANcsm');
    var add_0 = objectStore_1.add({f0_t: '<boolean>', f1_k: '<number>', f2_p: '<boolean>', f3_o: '<number>', f4_z: '<number>', f5_l: '<boolean>'}, 'zYdpFQfMA');
    var clear_3 = objectStore_1.clear();
    var delete_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('zYdpFQfMA', 'zYdpFQfMA', false, true);
        delete_1 = objectStore_1.delete(KeyRange_4);
    }
    catch (e){
    }

    var clear_4 = objectStore_1.clear();
    var index_43 = objectStore_2.createIndex('index_43', 'test', {unique: true, multiEntry: true});
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('ANcsm', 'ANcsm', true, true);
        get_1 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var put_4 = objectStore_2.put({f0_d: '<number>', f1_l: '<boolean>', f2_y: '<string>', f3_v: '<boolean>', f4_y: '<object>', f5_a: '<number>', f6_e: '<string>'}, 'rsGIalU');
    var count_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('ANcsm', 'zYdpFQfMA', true, false);
        count_0 = objectStore_1.count(KeyRange_8);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_46')
    var add_1 = objectStore_1.add({f0_b: '<null>', f1_z: '<array>', f2_o: '<array>'}, 'ICLYvk');
    var add_2 = objectStore_1.add({f0_y: '<boolean>'}, 'tLta');
    var index_44 = objectStore_1.createIndex('index_44', 'test', {unique: false});
    var getAll_1 = objectStore_1.getAll();
    var add_3 = objectStore_1.add({f0_h: '<array>'}, 'RdQsURrzEfko');
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.only('ICLYvk');
        get_2 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_12 = IDBKeyRange.only('ANcsm');
        delete_2 = objectStore_1.delete(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_47', {keypath: 'dhN.YixvVSo.lKWqgedUYEHx.auffuOx.WkBZuANKtKbL.mShcAKGA.ekwVV.MWHpnFqIYjTh'});
    var clear_5 = objectStore_1.clear();
    var index_45 = objectStore_1.createIndex('index_45', 'test', {unique: false});
    var add_4 = objectStore_1.add({f0_w: '<number>', f1_x: '<array>', f2_a: '<string>', f3_d: '<object>', f4_l: '<boolean>', f5_o: '<null>', f6_p: '<number>', f7_s: '<null>', f8_f: '<string>'}, 'pJvwvh');
    var add_5 = objectStore_1.add({f0_o: '<null>', f1_b: '<string>', f2_p: '<boolean>', f3_j: '<boolean>', f4_p: '<boolean>'}, 'pMQhCcBUGJ');
    var getAll_2 = objectStore_1.getAll(993516106);
    var put_5 = objectStore_3.put({f0_r: '<null>', f1_w: '<boolean>', f2_n: '<null>', f3_r: '<boolean>', f4_d: '<null>', f5_w: '<string>', f6_j: '<boolean>', f7_c: '<object>', f8_t: '<object>'}, 'hbEZadww');
    var clear_6 = objectStore_1.clear();
    var count_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('pJvwvh', 'RdQsURrzEfko', true, false);
        count_1 = objectStore_1.count(KeyRange_14);
    }
    catch (e){
    }

    var clear_7 = objectStore_3.clear();
    var put_6 = objectStore_3.put({f0_f: '<number>', f1_t: '<string>', f2_f: '<string>', f3_l: '<object>', f4_r: '<string>', f5_b: '<array>', f6_q: '<boolean>', f7_v: '<object>'}, 'JyKqDjFlF');
    var add_6 = objectStore_3.add({f0_b: '<boolean>', f1_m: '<array>', f2_i: '<string>', f3_r: '<object>', f4_x: '<string>', f5_m: '<string>'}, 'sla');
    var clear_8 = objectStore_3.clear();
    var objectStore_4 = db.createObjectStore('objectStore_48', {autoIncrement: false});
    var objectStore_5 = db.createObjectStore('objectStore_49', {autoIncrement: true});
    var put_7 = objectStore_3.put({f0_y: '<array>', f1_e: '<null>', f2_g: '<boolean>', f3_q: '<number>', f4_y: '<boolean>', f5_s: '<number>', f6_u: '<string>'}, 'COBJehQYh');
    var clear_9 = objectStore_5.clear();
    var add_7 = objectStore_5.add({f0_a: '<array>', f1_m: '<object>', f2_k: '<number>', f3_w: '<object>'}, 'UZLkP');
    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.only('UZLkP');
        count_2 = objectStore_5.count(KeyRange_16);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_50', {autoIncrement: false});
    var count_3 = objectStore_1.count();
    var count_4 = objectStore_3.count();
    var index_46 = objectStore_6.createIndex('index_46', 'test');
    var getAllKeys_0 = objectStore_1.getAllKeys();
    var add_8 = objectStore_6.add({f0_t: '<array>', f1_n: '<null>', f2_y: '<string>', f3_y: '<array>', f4_h: '<object>'}, 'SYfUhH');
    db.deleteObjectStore('objectStore_49')
    var index_47 = objectStore_1.createIndex('index_47', 'test');
    var getAllKeys_1;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('hbEZadww', false);
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_18, 1299742353);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('hbEZadww');
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_19);
    }

    var index_48 = objectStore_3.createIndex('index_48', 'test');
    var objectStore_7 = db.createObjectStore('objectStore_51', {keypath: 'DfNFAJkI', autoIncrement: false});
    var objectStore_8 = db.createObjectStore('objectStore_52', {keypath: 'AalfnSkMnyUz'});
    var put_8 = objectStore_8.put({f0_f: '<boolean>'}, 'iSFlXevdWW');
    var getAll_3 = objectStore_1.getAll(614601639);
    var objectStore_9 = db.createObjectStore('objectStore_53');
    var clear_10 = objectStore_7.clear();
    var delete_3;
    try{
        KeyRange_20 = IDBKeyRange.only('SYfUhH');
        delete_3 = objectStore_6.delete(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_54', {keypath: 'DNiIoVjMgW', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_40 = db.transaction(['objectStore_51'], 'readwrite', {durability:"strict"})
    var objectStore_51 = txn_40.objectStore('objectStore_51');
    var put_9 = objectStore_51.put({f0_j: '<object>', f1_i: '<string>', f2_l: '<null>', f3_k: '<array>', f4_y: '<string>', f5_b: '<boolean>', f6_t: '<number>', f7_o: '<object>', f8_e: '<object>'}, 'ecHOoltCxtOs');
    var add_9 = objectStore_51.add({f0_h: '<null>'}, 'ItGefiVSqD');
    var add_10 = objectStore_51.add({f0_s: '<number>', f1_r: '<boolean>', f2_x: '<null>', f3_o: '<null>'}, 'hxBbkK');
    var put_10 = objectStore_51.put({f0_n: '<array>', f1_g: '<number>', f2_d: '<string>', f3_q: '<boolean>', f4_g: '<null>', f5_y: '<array>', f6_s: '<object>', f7_d: '<number>', f8_v: '<number>'}, 'LMLUFlXl');
    var getAllKeys_2 = objectStore_51.getAllKeys();
    var count_5 = objectStore_51.count();
    var put_11 = objectStore_51.put({f0_f: '<object>', f1_t: '<object>'}, 'eVEE');
    var getAllKeys_3;
    try{
        KeyRange_22 = IDBKeyRange.only('ItGefiVSqD');
        getAllKeys_3 = objectStore_51.getAllKeys(KeyRange_22, 841934359);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('ItGefiVSqD');
        getAllKeys_3 = objectStore_51.getAllKeys(KeyRange_23);
    }

    var getAll_4 = objectStore_51.getAll();
    var getAllKeys_4 = objectStore_51.getAllKeys();
    var count_6 = objectStore_51.count();
    var getAllKeys_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('hxBbkK', 'eVEE', true, false);
        getAllKeys_5 = objectStore_51.getAllKeys(KeyRange_24, 1346302990);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('ecHOoltCxtOs');
        getAllKeys_5 = objectStore_51.getAllKeys(KeyRange_25);
    }

    var getAllKeys_6;
    try{
        KeyRange_26 = IDBKeyRange.only('eVEE');
        getAllKeys_6 = objectStore_51.getAllKeys(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('eVEE');
        getAllKeys_6 = objectStore_51.getAllKeys(KeyRange_27);
    }

    txn_40.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_40.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_41 = db.transaction(['objectStore_54', 'objectStore_50'], 'readonly', {durability:"default"})
    var objectStore_54 = txn_41.objectStore('objectStore_54');
    txn_41.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_41.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_41.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_42 = db.transaction(['objectStore_51', 'objectStore_48'], 'readonly', {durability:"strict"})
    var objectStore_48 = txn_42.objectStore('objectStore_48');
    txn_42.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_42.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_43 = db.transaction(['objectStore_52'], 'readwrite', {durability:"strict"})
    var objectStore_52 = txn_43.objectStore('objectStore_52');
    var count_7 = objectStore_52.count();
    var count_8 = objectStore_52.count();
    var get_3;
    try{
        KeyRange_28 = IDBKeyRange.bound('iSFlXevdWW', 'iSFlXevdWW', true, false);
        get_3 = objectStore_52.get(KeyRange_28);
    }
    catch (e){
    }

    var add_11 = objectStore_52.add({f0_s: '<string>', f1_t: '<boolean>'}, 'rRAXBs');
    var get_4;
    try{
        KeyRange_30 = IDBKeyRange.bound('iSFlXevdWW', 'iSFlXevdWW', false, false);
        get_4 = objectStore_52.get(KeyRange_30);
    }
    catch (e){
    }

    var count_9 = objectStore_52.count();
    var clear_11 = objectStore_52.clear();
    var clear_12 = objectStore_52.clear();
    var add_12 = objectStore_52.add({f0_c: '<null>'}, 'tMI');
    var getAll_5 = objectStore_52.getAll(667309701);
    var put_12 = objectStore_52.put({f0_b: '<number>', f1_y: '<number>'}, 'MqkHZf');
    var count_10 = objectStore_52.count();
    var count_11;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('iSFlXevdWW', true);
        count_11 = objectStore_52.count(KeyRange_32);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('rRAXBs', true);
        delete_4 = objectStore_52.delete(KeyRange_34);
    }
    catch (e){
    }

    var put_13 = objectStore_52.put({f0_x: '<null>', f1_s: '<number>', f2_t: '<null>', f3_u: '<null>', f4_v: '<array>', f5_o: '<number>', f6_n: '<object>', f7_d: '<boolean>', f8_f: '<object>'}, 'ADsxQWiiDsKm');
    var clear_13 = objectStore_52.clear();
    var count_12 = objectStore_52.count();
    var count_13;
    try{
        KeyRange_36 = IDBKeyRange.only('tMI');
        count_13 = objectStore_52.count(KeyRange_36);
    }
    catch (e){
    }

    var count_14 = objectStore_52.count();
    var get_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('iSFlXevdWW', 'tMI', true, false);
        get_5 = objectStore_52.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_7 = objectStore_52.getAllKeys();
    txn_43.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_43.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_43.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_44 = db.transaction(['objectStore_52', 'objectStore_54'], 'readonly', {durability:"relaxed"})
    var objectStore_52 = txn_44.objectStore('objectStore_52');
    var count_15;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('rRAXBs', true);
        count_15 = objectStore_52.count(KeyRange_40);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('ADsxQWiiDsKm', true);
        get_6 = objectStore_52.get(KeyRange_42);
    }
    catch (e){
    }

    var count_16 = objectStore_52.count();
    var get_7;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('rRAXBs', false);
        get_7 = objectStore_52.get(KeyRange_44);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_46 = IDBKeyRange.bound('MqkHZf', 'tMI', true, true);
        count_17 = objectStore_52.count(KeyRange_46);
    }
    catch (e){
    }

    var getAll_6 = objectStore_52.getAll();
    var get_8;
    try{
        KeyRange_48 = IDBKeyRange.only('rRAXBs');
        get_8 = objectStore_52.get(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_8 = objectStore_52.getAllKeys();
    var getAllKeys_9 = objectStore_52.getAllKeys();
    var count_18;
    try{
        KeyRange_50 = IDBKeyRange.bound('tMI', 'ADsxQWiiDsKm', true, true);
        count_18 = objectStore_52.count(KeyRange_50);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_52 = IDBKeyRange.bound('ADsxQWiiDsKm', 'tMI', false, true);
        count_19 = objectStore_52.count(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('rRAXBs', true);
        getAllKeys_10 = objectStore_52.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('MqkHZf');
        getAllKeys_10 = objectStore_52.getAllKeys(KeyRange_55);
    }

    var get_9;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('ADsxQWiiDsKm', true);
        get_9 = objectStore_52.get(KeyRange_56);
    }
    catch (e){
    }

    var getAllKeys_11;
    try{
        KeyRange_58 = IDBKeyRange.bound('rRAXBs', 'MqkHZf', false, false);
        getAllKeys_11 = objectStore_52.getAllKeys(KeyRange_58, 605438300);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('iSFlXevdWW');
        getAllKeys_11 = objectStore_52.getAllKeys(KeyRange_59);
    }

    var getAll_7;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('MqkHZf', false);
        getAll_7 = objectStore_52.getAll(KeyRange_60, 3953398155);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('MqkHZf');
        getAll_7 = objectStore_52.getAll(KeyRange_61);
    }

    var count_20 = objectStore_52.count();
    var getAll_8 = objectStore_52.getAll(3704531166);
    var count_21 = objectStore_52.count();
    txn_44.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_44.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_44.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_45 = db.transaction(['objectStore_47'], 'readonly', {durability:"strict"})
    var objectStore_47 = txn_45.objectStore('objectStore_47');
    var count_22;
    try{
        KeyRange_62 = IDBKeyRange.only('sla');
        count_22 = objectStore_47.count(KeyRange_62);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_64 = IDBKeyRange.bound('COBJehQYh', 'hbEZadww', false, true);
        get_10 = objectStore_47.get(KeyRange_64);
    }
    catch (e){
    }

    var index_0 = objectStore_47.index('index_48');
    var count_23;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('sla', false);
        count_23 = objectStore_47.count(KeyRange_66);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_68 = IDBKeyRange.bound('sla', 'sla', true, false);
        get_11 = objectStore_47.get(KeyRange_68);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_70 = IDBKeyRange.only('sla');
        get_12 = objectStore_47.get(KeyRange_70);
    }
    catch (e){
    }

    var count_24 = objectStore_47.count();
    var get_13;
    try{
        KeyRange_72 = IDBKeyRange.bound('JyKqDjFlF', 'sla', false, false);
        get_13 = objectStore_47.get(KeyRange_72);
    }
    catch (e){
    }

    var count_25 = objectStore_47.count();
    var count_26;
    try{
        KeyRange_74 = IDBKeyRange.bound('sla', 'COBJehQYh', true, true);
        count_26 = objectStore_47.count(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_12;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('COBJehQYh', true);
        getAllKeys_12 = objectStore_47.getAllKeys(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('COBJehQYh');
        getAllKeys_12 = objectStore_47.getAllKeys(KeyRange_77);
    }

    var get_14;
    try{
        KeyRange_78 = IDBKeyRange.bound('hbEZadww', 'JyKqDjFlF', true, false);
        get_14 = objectStore_47.get(KeyRange_78);
    }
    catch (e){
    }

    var getAll_9 = objectStore_47.getAll();
    var get_15;
    try{
        KeyRange_80 = IDBKeyRange.bound('hbEZadww', 'COBJehQYh', false, false);
        get_15 = objectStore_47.get(KeyRange_80);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('sla', true);
        get_16 = objectStore_47.get(KeyRange_82);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_47.getAllKeys();
    var count_27 = objectStore_47.count();
    var get_17;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('JyKqDjFlF', false);
        get_17 = objectStore_47.get(KeyRange_84);
    }
    catch (e){
    }

    var getAllKeys_14 = objectStore_47.getAllKeys();
    var get_18;
    try{
        KeyRange_86 = IDBKeyRange.bound('sla', 'JyKqDjFlF', false, false);
        get_18 = objectStore_47.get(KeyRange_86);
    }
    catch (e){
    }

    var count_28 = objectStore_47.count();
    var count_29 = objectStore_47.count();
    txn_45.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_45.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_45.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_46 = db.transaction(['objectStore_45', 'objectStore_48', 'objectStore_47'], 'readwrite', {durability:"strict"})
    var objectStore_48 = txn_46.objectStore('objectStore_48');
    var clear_14 = objectStore_48.clear();
    var add_13 = objectStore_48.add({f0_d: '<number>', f1_d: '<number>'}, 'PcW');
    var put_14 = objectStore_48.put({f0_q: '<number>', f1_h: '<null>', f2_d: '<object>', f3_i: '<boolean>', f4_y: '<number>', f5_w: '<null>'}, 'Gbbgxa');
    var put_15 = objectStore_48.put({f0_a: '<null>'}, 'kVNdEgTxeU');
    var getAll_10;
    try{
        KeyRange_88 = IDBKeyRange.bound('kVNdEgTxeU', 'kVNdEgTxeU', false, false);
        getAll_10 = objectStore_48.getAll(KeyRange_88, 2537506053);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('Gbbgxa');
        getAll_10 = objectStore_48.getAll(KeyRange_89);
    }

    var add_14 = objectStore_48.add({f0_e: '<null>', f1_q: '<null>', f2_i: '<object>', f3_y: '<array>', f4_j: '<object>', f5_l: '<boolean>', f6_x: '<object>'}, 'WklcYtOqJn');
    var put_16 = objectStore_48.put({f0_n: '<string>', f1_t: '<boolean>', f2_z: '<boolean>', f3_o: '<number>', f4_g: '<string>', f5_g: '<array>'}, 'YjDNkEChmQk');
    var getAll_11;
    try{
        KeyRange_90 = IDBKeyRange.only('PcW');
        getAll_11 = objectStore_48.getAll(KeyRange_90, 3857779940);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('Gbbgxa');
        getAll_11 = objectStore_48.getAll(KeyRange_91);
    }

    var put_17 = objectStore_48.put({f0_w: '<object>', f1_f: '<array>', f2_w: '<array>', f3_g: '<null>', f4_w: '<null>', f5_a: '<null>', f6_f: '<boolean>', f7_o: '<array>', f8_r: '<number>'}, 'dFhJhzfJEpWr');
    var count_30 = objectStore_48.count();
    var add_15 = objectStore_48.add({f0_b: '<array>', f1_j: '<boolean>', f2_e: '<array>', f3_l: '<array>', f4_f: '<object>', f5_z: '<string>', f6_g: '<string>', f7_v: '<number>', f8_e: '<boolean>', f9_u: '<null>'}, 'fROkO');
    var count_31 = objectStore_48.count();
    var count_32;
    try{
        KeyRange_92 = IDBKeyRange.bound('kVNdEgTxeU', 'fROkO', false, false);
        count_32 = objectStore_48.count(KeyRange_92);
    }
    catch (e){
    }

    var getAll_12;
    try{
        KeyRange_94 = IDBKeyRange.bound('fROkO', 'PcW', false, false);
        getAll_12 = objectStore_48.getAll(KeyRange_94);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('Gbbgxa');
        getAll_12 = objectStore_48.getAll(KeyRange_95);
    }

    var getAllKeys_15 = objectStore_48.getAllKeys(2681768226);
    var add_16 = objectStore_48.add({f0_l: '<null>', f1_p: '<object>', f2_n: '<string>', f3_m: '<object>', f4_f: '<number>', f5_e: '<string>', f6_q: '<object>'}, 'twegKVWXhcy');
    var clear_15 = objectStore_48.clear();
    var add_17 = objectStore_48.add({f0_q: '<number>', f1_j: '<string>', f2_t: '<null>'}, 'wrtO');
    var delete_5;
    try{
        KeyRange_96 = IDBKeyRange.bound('wrtO', 'Gbbgxa', true, false);
        delete_5 = objectStore_48.delete(KeyRange_96);
    }
    catch (e){
    }

    var getAll_13;
    try{
        KeyRange_98 = IDBKeyRange.only('wrtO');
        getAll_13 = objectStore_48.getAll(KeyRange_98);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('Gbbgxa');
        getAll_13 = objectStore_48.getAll(KeyRange_99);
    }

    var clear_16 = objectStore_48.clear();
    var clear_17 = objectStore_48.clear();
    var count_33 = objectStore_48.count();
    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_46.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_47 = db.transaction(['objectStore_45', 'objectStore_54'], 'readwrite', {durability:"default"})
    var objectStore_54 = txn_47.objectStore('objectStore_54');
    var put_18 = objectStore_54.put({f0_j: '<number>', f1_n: '<null>', f2_s: '<number>', f3_t: '<number>', f4_n: '<number>', f5_n: '<string>', f6_b: '<boolean>', f7_p: '<string>', f8_p: '<object>', f9_q: '<array>'}, 'OHeG');
    var get_19;
    try{
        KeyRange_100 = IDBKeyRange.lowerBound('OHeG', true);
        get_19 = objectStore_54.get(KeyRange_100);
    }
    catch (e){
    }

    var clear_18 = objectStore_54.clear();
    var delete_6;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('OHeG', true);
        delete_6 = objectStore_54.delete(KeyRange_102);
    }
    catch (e){
    }

    var add_18 = objectStore_54.add({f0_o: '<object>', f1_g: '<null>'}, 'FOhuHZbBF');
    var count_34 = objectStore_54.count();
    var getAllKeys_16 = objectStore_54.getAllKeys();
    var put_19 = objectStore_54.put({f0_r: '<null>', f1_z: '<null>', f2_u: '<array>', f3_v: '<string>', f4_a: '<string>', f5_h: '<boolean>', f6_y: '<array>'}, 'SaywAwTbnAv');
    var put_20 = objectStore_54.put({f0_k: '<array>', f1_u: '<number>', f2_t: '<boolean>', f3_m: '<object>', f4_v: '<number>', f5_v: '<boolean>', f6_u: '<null>', f7_q: '<string>'}, 'udpfgcZCPW');
    var add_19 = objectStore_54.add({f0_o: '<array>', f1_p: '<object>', f2_v: '<null>', f3_w: '<number>', f4_a: '<object>', f5_k: '<object>', f6_j: '<null>', f7_n: '<null>', f8_f: '<number>', f9_r: '<object>'}, 'ZLMp');
    var add_20 = objectStore_54.add({f0_i: '<array>', f1_w: '<boolean>'}, 'xKZ');
    var getAll_14;
    try{
        KeyRange_104 = IDBKeyRange.only('xKZ');
        getAll_14 = objectStore_54.getAll(KeyRange_104);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('xKZ');
        getAll_14 = objectStore_54.getAll(KeyRange_105);
    }

    var getAllKeys_17;
    try{
        KeyRange_106 = IDBKeyRange.only('xKZ');
        getAllKeys_17 = objectStore_54.getAllKeys(KeyRange_106, 2492132861);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('OHeG');
        getAllKeys_17 = objectStore_54.getAllKeys(KeyRange_107);
    }

    var get_20;
    try{
        KeyRange_108 = IDBKeyRange.only('FOhuHZbBF');
        get_20 = objectStore_54.get(KeyRange_108);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('ZLMp', true);
        delete_7 = objectStore_54.delete(KeyRange_110);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_112 = IDBKeyRange.bound('SaywAwTbnAv', 'ZLMp', true, false);
        get_21 = objectStore_54.get(KeyRange_112);
    }
    catch (e){
    }

    var add_21 = objectStore_54.add({f0_y: '<array>', f1_e: '<number>', f2_f: '<array>', f3_i: '<number>', f4_h: '<object>', f5_t: '<string>', f6_i: '<boolean>', f7_d: '<null>', f8_k: '<number>'}, 'TbbEeeYuUaJ');
    var count_35;
    try{
        KeyRange_114 = IDBKeyRange.only('SaywAwTbnAv');
        count_35 = objectStore_54.count(KeyRange_114);
    }
    catch (e){
    }

    txn_47.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_47.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_47.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_48 = db.transaction(['objectStore_50'], 'readwrite', {durability:"relaxed"})
    var objectStore_50 = txn_48.objectStore('objectStore_50');
    var get_22;
    try{
        KeyRange_116 = IDBKeyRange.only('SYfUhH');
        get_22 = objectStore_50.get(KeyRange_116);
    }
    catch (e){
    }

    var getAll_15 = objectStore_50.getAll(1497190848);
    var get_23;
    try{
        KeyRange_118 = IDBKeyRange.only('SYfUhH');
        get_23 = objectStore_50.get(KeyRange_118);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('SYfUhH', true);
        get_24 = objectStore_50.get(KeyRange_120);
    }
    catch (e){
    }

    var count_36 = objectStore_50.count();
    var get_25;
    try{
        KeyRange_122 = IDBKeyRange.bound('SYfUhH', 'SYfUhH', true, true);
        get_25 = objectStore_50.get(KeyRange_122);
    }
    catch (e){
    }

    var put_21 = objectStore_50.put({f0_m: '<object>', f1_g: '<number>', f2_a: '<array>'}, 'EiBPBzI');
    var count_37 = objectStore_50.count();
    var clear_19 = objectStore_50.clear();
    var get_26;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('EiBPBzI', true);
        get_26 = objectStore_50.get(KeyRange_124);
    }
    catch (e){
    }

    var count_38;
    try{
        KeyRange_126 = IDBKeyRange.bound('SYfUhH', 'EiBPBzI', false, false);
        count_38 = objectStore_50.count(KeyRange_126);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('SYfUhH', true);
        delete_8 = objectStore_50.delete(KeyRange_128);
    }
    catch (e){
    }

    var clear_20 = objectStore_50.clear();
    var delete_9;
    try{
        KeyRange_130 = IDBKeyRange.only('SYfUhH');
        delete_9 = objectStore_50.delete(KeyRange_130);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_132 = IDBKeyRange.only('SYfUhH');
        get_27 = objectStore_50.get(KeyRange_132);
    }
    catch (e){
    }

    txn_48.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_48.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_48.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_49 = db.transaction(['objectStore_48', 'objectStore_45', 'objectStore_50', 'objectStore_54'], 'readonly', {durability:"strict"})
    var objectStore_54 = txn_49.objectStore('objectStore_54');
    var getAllKeys_18;
    try{
        KeyRange_134 = IDBKeyRange.only('FOhuHZbBF');
        getAllKeys_18 = objectStore_54.getAllKeys(KeyRange_134);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('udpfgcZCPW');
        getAllKeys_18 = objectStore_54.getAllKeys(KeyRange_135);
    }

    var get_28;
    try{
        KeyRange_136 = IDBKeyRange.only('udpfgcZCPW');
        get_28 = objectStore_54.get(KeyRange_136);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_138 = IDBKeyRange.bound('xKZ', 'xKZ', false, true);
        get_29 = objectStore_54.get(KeyRange_138);
    }
    catch (e){
    }

    var getAll_16;
    try{
        KeyRange_140 = IDBKeyRange.only('OHeG');
        getAll_16 = objectStore_54.getAll(KeyRange_140, 1069926292);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('FOhuHZbBF');
        getAll_16 = objectStore_54.getAll(KeyRange_141);
    }

    var count_39 = objectStore_54.count();
    var getAll_17 = objectStore_54.getAll();
    var count_40;
    try{
        KeyRange_142 = IDBKeyRange.bound('TbbEeeYuUaJ', 'SaywAwTbnAv', false, false);
        count_40 = objectStore_54.count(KeyRange_142);
    }
    catch (e){
    }

    var getAllKeys_19;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('xKZ', true);
        getAllKeys_19 = objectStore_54.getAllKeys(KeyRange_144);
    }
    catch (e){
        KeyRange_145 = IDBKeyRange.only('TbbEeeYuUaJ');
        getAllKeys_19 = objectStore_54.getAllKeys(KeyRange_145);
    }

    var getAllKeys_20 = objectStore_54.getAllKeys(1584956979);
    var get_30;
    try{
        KeyRange_146 = IDBKeyRange.only('FOhuHZbBF');
        get_30 = objectStore_54.get(KeyRange_146);
    }
    catch (e){
    }

    var getAll_18;
    try{
        KeyRange_148 = IDBKeyRange.bound('udpfgcZCPW', 'SaywAwTbnAv', false, false);
        getAll_18 = objectStore_54.getAll(KeyRange_148);
    }
    catch (e){
        KeyRange_149 = IDBKeyRange.only('FOhuHZbBF');
        getAll_18 = objectStore_54.getAll(KeyRange_149);
    }

    var count_41;
    try{
        KeyRange_150 = IDBKeyRange.bound('xKZ', 'OHeG', false, true);
        count_41 = objectStore_54.count(KeyRange_150);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_152 = IDBKeyRange.lowerBound('FOhuHZbBF', true);
        get_31 = objectStore_54.get(KeyRange_152);
    }
    catch (e){
    }

    var count_42 = objectStore_54.count();
    var get_32;
    try{
        KeyRange_154 = IDBKeyRange.only('SaywAwTbnAv');
        get_32 = objectStore_54.get(KeyRange_154);
    }
    catch (e){
    }

    txn_49.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_49.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_49.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7124')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};