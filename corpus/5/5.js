let db;
const openRequest = window.indexedDB.open('str_7570', 7786084189267070)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_72', {autoIncrement: true});
    var index_57 = objectStore_0.createIndex('index_57', 'test', {unique: true});
    var put_0 = objectStore_0.put({f0_f: '<object>', f1_a: '<object>', f2_f: '<array>', f3_w: '<array>', f4_e: '<object>'}, 'CSjETQCfROR');
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_w: '<string>', f1_y: '<array>', f2_f: '<boolean>', f3_z: '<array>', f4_j: '<null>'}, 'hOjz');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('hOjz');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_58 = objectStore_0.createIndex('index_58', 'test', {unique: false, multiEntry: false});
    var getAllKeys_0 = objectStore_0.getAllKeys();
    objectStore_0.deleteIndex('index_57')
    var index_0 = objectStore_0.index('index_58');
    var getAll_0 = objectStore_0.getAll(2938834904);
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('hOjz', false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var getAll_1 = objectStore_0.getAll(4208451161);
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.only('CSjETQCfROR');
        get_2 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    db.deleteObjectStore('objectStore_72')
    var objectStore_1 = db.createObjectStore('objectStore_73');
    var objectStore_2 = db.createObjectStore('objectStore_74', {keypath: 'MKlMTSDNckMg', autoIncrement: false});
    var clear_2 = objectStore_1.clear();
    var index_59 = objectStore_1.createIndex('index_59', 'test', {unique: false, multiEntry: true});
    var clear_3 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_73')
    db.deleteObjectStore('objectStore_74')
    var objectStore_3 = db.createObjectStore('objectStore_75', {autoIncrement: false});
    var put_1 = objectStore_3.put({f0_f: '<string>', f1_h: '<boolean>', f2_q: '<boolean>', f3_s: '<array>', f4_e: '<array>'}, 'NYkbGd');
    var objectStore_4 = db.createObjectStore('objectStore_76', {keypath: 'quSAeABfAQCk', autoIncrement: true});
    var put_2 = objectStore_3.put({f0_f: '<object>'}, 'wrVkeJEv');
    var getAllKeys_1 = objectStore_3.getAllKeys();
    var put_3 = objectStore_3.put({f0_k: '<object>', f1_i: '<object>', f2_r: '<boolean>', f3_a: '<array>', f4_q: '<object>', f5_z: '<null>', f6_t: '<string>'}, 'uUwdGWsm');
    var clear_4 = objectStore_3.clear();
    var index_60 = objectStore_4.createIndex('index_60', 'test', {unique: true});
    var put_4 = objectStore_4.put({f0_c: '<object>', f1_t: '<object>', f2_t: '<array>', f3_c: '<boolean>', f4_t: '<object>'}, 'uyZhoW');
    var index_1 = objectStore_4.index('index_60');
    var count_1 = objectStore_4.count();
    var clear_5 = objectStore_4.clear();
    var put_5 = objectStore_3.put({f0_t: '<string>'}, 'noGUBkGJf');
    var put_6 = objectStore_3.put({f0_f: '<string>', f1_p: '<array>', f2_z: '<boolean>', f3_t: '<array>', f4_u: '<string>'}, 'UZnA');
    var getAll_2 = objectStore_4.getAll(3220745268);
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.only('uyZhoW');
        get_3 = objectStore_4.get(KeyRange_6);
    }
    catch (e){
    }

    var put_7 = objectStore_4.put({f0_l: '<null>'}, 'kchINvrtJc');
    var get_4;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('wrVkeJEv', true);
        get_4 = objectStore_3.get(KeyRange_8);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_10 = IDBKeyRange.bound('uyZhoW', 'kchINvrtJc', false, false);
        get_5 = objectStore_4.get(KeyRange_10);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_75')
    var get_6;
    try{
        KeyRange_12 = IDBKeyRange.bound('kchINvrtJc', 'uyZhoW', false, true);
        get_6 = objectStore_4.get(KeyRange_12);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('kchINvrtJc', false);
        get_7 = objectStore_4.get(KeyRange_14);
    }
    catch (e){
    }

    var add_1 = objectStore_4.add({f0_e: '<array>', f1_o: '<boolean>', f2_x: '<array>', f3_k: '<null>', f4_s: '<null>', f5_i: '<string>', f6_l: '<array>', f7_v: '<null>', f8_v: '<array>'}, 'zRmUMnLK');
    var getAll_3 = objectStore_4.getAll(4092772641);
    var put_8 = objectStore_4.put({f0_u: '<boolean>', f1_h: '<null>', f2_h: '<boolean>', f3_j: '<array>', f4_u: '<boolean>', f5_s: '<number>', f6_e: '<array>'}, 'eGqmvJp');
    var put_9 = objectStore_4.put({f0_o: '<boolean>', f1_o: '<string>', f2_f: '<string>', f3_w: '<string>'}, 'AUmhBvIlQS');
    var get_8;
    try{
        KeyRange_16 = IDBKeyRange.only('kchINvrtJc');
        get_8 = objectStore_4.get(KeyRange_16);
    }
    catch (e){
    }

    var add_2 = objectStore_4.add({f0_k: '<null>', f1_y: '<object>', f2_v: '<string>'}, 'mGQOtwen');
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.only('uyZhoW');
        delete_0 = objectStore_4.delete(KeyRange_18);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_77', {keypath: 'RDGf', autoIncrement: true});
    var getAllKeys_2;
    try{
        KeyRange_20 = IDBKeyRange.only('zRmUMnLK');
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_20, 1603809988);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('uyZhoW');
        getAllKeys_2 = objectStore_4.getAllKeys(KeyRange_21);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_60 = db.transaction(['objectStore_76'], 'readwrite', {durability:"relaxed"})
    var objectStore_76 = txn_60.objectStore('objectStore_76');
    var delete_1;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('AUmhBvIlQS', false);
        delete_1 = objectStore_76.delete(KeyRange_22);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('uyZhoW', 'eGqmvJp', false, true);
        delete_2 = objectStore_76.delete(KeyRange_24);
    }
    catch (e){
    }

    var count_2 = objectStore_76.count();
    var get_9;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('kchINvrtJc', false);
        get_9 = objectStore_76.get(KeyRange_26);
    }
    catch (e){
    }

    var count_3 = objectStore_76.count();
    var count_4;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('AUmhBvIlQS', true);
        count_4 = objectStore_76.count(KeyRange_28);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('AUmhBvIlQS', 'kchINvrtJc', false, false);
        count_5 = objectStore_76.count(KeyRange_30);
    }
    catch (e){
    }

    var clear_6 = objectStore_76.clear();
    var clear_7 = objectStore_76.clear();
    var count_6 = objectStore_76.count();
    var clear_8 = objectStore_76.clear();
    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('mGQOtwen', 'AUmhBvIlQS', true, false);
        get_10 = objectStore_76.get(KeyRange_32);
    }
    catch (e){
    }

    var put_10 = objectStore_76.put({f0_w: '<number>', f1_l: '<array>', f2_o: '<null>', f3_o: '<string>', f4_q: '<number>', f5_j: '<number>', f6_t: '<boolean>', f7_v: '<object>'}, 'bMOa');
    var get_11;
    try{
        KeyRange_34 = IDBKeyRange.bound('kchINvrtJc', 'uyZhoW', false, false);
        get_11 = objectStore_76.get(KeyRange_34);
    }
    catch (e){
    }

    var add_3 = objectStore_76.add({f0_b: '<object>', f1_d: '<object>', f2_a: '<null>', f3_u: '<string>', f4_z: '<null>'}, 'HOxQFTaMaV');
    var get_12;
    try{
        KeyRange_36 = IDBKeyRange.only('HOxQFTaMaV');
        get_12 = objectStore_76.get(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('mGQOtwen', true);
        getAllKeys_3 = objectStore_76.getAllKeys(KeyRange_38, 2100037819);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('bMOa');
        getAllKeys_3 = objectStore_76.getAllKeys(KeyRange_39);
    }

    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_60.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_61 = db.transaction(['objectStore_77'], 'readwrite', {durability:"default"})
    var objectStore_77 = txn_61.objectStore('objectStore_77');
    var add_4 = objectStore_77.add({f0_g: '<string>', f1_b: '<array>'}, 'lIbrYGvPn');
    var getAllKeys_4 = objectStore_77.getAllKeys(2047108978);
    var add_5 = objectStore_77.add({f0_m: '<number>', f1_g: '<boolean>', f2_x: '<string>', f3_z: '<string>', f4_t: '<null>', f5_e: '<string>'}, 'UwosxttH');
    var get_13;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('UwosxttH', false);
        get_13 = objectStore_77.get(KeyRange_40);
    }
    catch (e){
    }

    var add_6 = objectStore_77.add({f0_t: '<object>', f1_b: '<boolean>', f2_f: '<array>', f3_b: '<null>', f4_q: '<boolean>', f5_g: '<number>'}, 'PaPqmOoF');
    var clear_9 = objectStore_77.clear();
    var getAllKeys_5 = objectStore_77.getAllKeys(1866911744);
    var put_11 = objectStore_77.put({f0_w: '<object>'}, 'qAWKpAw');
    var get_14;
    try{
        KeyRange_42 = IDBKeyRange.bound('PaPqmOoF', 'PaPqmOoF', true, false);
        get_14 = objectStore_77.get(KeyRange_42);
    }
    catch (e){
    }

    var put_12 = objectStore_77.put({f0_j: '<array>', f1_d: '<number>', f2_x: '<null>', f3_a: '<array>', f4_x: '<null>'}, 'pOzFI');
    var add_7 = objectStore_77.add({f0_g: '<array>', f1_d: '<boolean>', f2_w: '<array>'}, 'Vqfl');
    var add_8 = objectStore_77.add({f0_g: '<string>'}, 'aYDDZDNNg');
    var delete_3;
    try{
        KeyRange_44 = IDBKeyRange.only('pOzFI');
        delete_3 = objectStore_77.delete(KeyRange_44);
    }
    catch (e){
    }

    var put_13 = objectStore_77.put({f0_z: '<null>', f1_m: '<string>', f2_y: '<boolean>', f3_t: '<object>'}, 'GwQLUs');
    var delete_4;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('GwQLUs', false);
        delete_4 = objectStore_77.delete(KeyRange_46);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('pOzFI', true);
        getAll_4 = objectStore_77.getAll(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('GwQLUs');
        getAll_4 = objectStore_77.getAll(KeyRange_49);
    }

    var add_9 = objectStore_77.add({f0_s: '<boolean>', f1_y: '<boolean>', f2_g: '<object>', f3_x: '<string>', f4_w: '<object>', f5_w: '<array>', f6_p: '<null>'}, 'vLX');
    txn_61.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_61.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_62 = db.transaction(['objectStore_76', 'objectStore_77'], 'readwrite', {durability:"relaxed"})
    var objectStore_76 = txn_62.objectStore('objectStore_76');
    var getAll_5;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('eGqmvJp', true);
        getAll_5 = objectStore_76.getAll(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('AUmhBvIlQS');
        getAll_5 = objectStore_76.getAll(KeyRange_51);
    }

    var clear_10 = objectStore_76.clear();
    var index_2 = objectStore_76.index('index_60');
    var clear_11 = objectStore_76.clear();
    var put_14 = objectStore_76.put({f0_i: '<string>', f1_c: '<array>', f2_a: '<null>', f3_s: '<object>', f4_q: '<number>', f5_c: '<array>', f6_c: '<object>', f7_t: '<array>', f8_s: '<boolean>'}, 'slixdHSDv');
    var put_15 = objectStore_76.put({f0_v: '<boolean>', f1_i: '<number>', f2_g: '<number>', f3_x: '<boolean>'}, 'XeMuKLDDsI');
    var clear_12 = objectStore_76.clear();
    var add_10 = objectStore_76.add({f0_o: '<null>', f1_a: '<number>', f2_q: '<object>'}, 'RpFmDvmm');
    var clear_13 = objectStore_76.clear();
    var delete_5;
    try{
        KeyRange_52 = IDBKeyRange.bound('zRmUMnLK', 'mGQOtwen', true, true);
        delete_5 = objectStore_76.delete(KeyRange_52);
    }
    catch (e){
    }

    var put_16 = objectStore_76.put({f0_r: '<number>', f1_u: '<object>', f2_t: '<array>', f3_x: '<boolean>', f4_r: '<object>', f5_i: '<string>', f6_c: '<object>', f7_n: '<number>'}, 'JeajXMMmNk');
    var clear_14 = objectStore_76.clear();
    var clear_15 = objectStore_76.clear();
    var clear_16 = objectStore_76.clear();
    var add_11 = objectStore_76.add({f0_q: '<array>', f1_o: '<null>', f2_q: '<array>', f3_u: '<string>', f4_f: '<boolean>', f5_h: '<object>'}, 'jYoR');
    var clear_17 = objectStore_76.clear();
    var add_12 = objectStore_76.add({f0_u: '<array>', f1_b: '<array>', f2_e: '<object>', f3_x: '<boolean>', f4_d: '<null>', f5_m: '<boolean>', f6_l: '<boolean>', f7_u: '<object>', f8_c: '<number>'}, 'fcmsZi');
    var put_17 = objectStore_76.put({f0_v: '<boolean>'}, 'STjHMr');
    txn_62.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_62.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_62.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_63 = db.transaction(['objectStore_76'], 'readwrite', {durability:"default"})
    var objectStore_76 = txn_63.objectStore('objectStore_76');
    var get_15;
    try{
        KeyRange_54 = IDBKeyRange.bound('AUmhBvIlQS', 'bMOa', false, false);
        get_15 = objectStore_76.get(KeyRange_54);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_56 = IDBKeyRange.only('fcmsZi');
        count_7 = objectStore_76.count(KeyRange_56);
    }
    catch (e){
    }

    var put_18 = objectStore_76.put({f0_u: '<number>', f1_k: '<string>', f2_l: '<object>'}, 'DCmiwPn');
    var clear_18 = objectStore_76.clear();
    var getAllKeys_6 = objectStore_76.getAllKeys(3227750944);
    var put_19 = objectStore_76.put({f0_a: '<object>', f1_v: '<number>', f2_m: '<array>', f3_e: '<number>', f4_u: '<object>', f5_s: '<string>'}, 'GzqVjwo');
    var getAll_6;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('GzqVjwo', true);
        getAll_6 = objectStore_76.getAll(KeyRange_58, 585950121);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('eGqmvJp');
        getAll_6 = objectStore_76.getAll(KeyRange_59);
    }

    var getAll_7;
    try{
        KeyRange_60 = IDBKeyRange.bound('kchINvrtJc', 'jYoR', true, false);
        getAll_7 = objectStore_76.getAll(KeyRange_60, 748875905);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('fcmsZi');
        getAll_7 = objectStore_76.getAll(KeyRange_61);
    }

    var delete_6;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('fcmsZi', true);
        delete_6 = objectStore_76.delete(KeyRange_62);
    }
    catch (e){
    }

    var add_13 = objectStore_76.add({f0_q: '<array>', f1_i: '<object>', f2_z: '<number>'}, 'FSEX');
    var put_20 = objectStore_76.put({f0_b: '<number>', f1_u: '<array>', f2_m: '<boolean>', f3_h: '<array>'}, 'smOxaBJPVaiF');
    var delete_7;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('STjHMr', false);
        delete_7 = objectStore_76.delete(KeyRange_64);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_66 = IDBKeyRange.bound('mGQOtwen', 'uyZhoW', true, true);
        count_8 = objectStore_76.count(KeyRange_66);
    }
    catch (e){
    }

    var getAll_8 = objectStore_76.getAll();
    var put_21 = objectStore_76.put({f0_o: '<null>', f1_k: '<object>', f2_n: '<number>'}, 'gcwGDYNWjxe');
    var get_16;
    try{
        KeyRange_68 = IDBKeyRange.only('zRmUMnLK');
        get_16 = objectStore_76.get(KeyRange_68);
    }
    catch (e){
    }

    txn_63.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_63.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_64 = db.transaction(['objectStore_77'], 'readwrite', {durability:"default"})
    var objectStore_77 = txn_64.objectStore('objectStore_77');
    var put_22 = objectStore_77.put({f0_o: '<number>', f1_k: '<null>', f2_e: '<object>', f3_f: '<null>', f4_v: '<null>'}, 'umHaX');
    var delete_8;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('umHaX', true);
        delete_8 = objectStore_77.delete(KeyRange_70);
    }
    catch (e){
    }

    var add_14 = objectStore_77.add({f0_f: '<string>', f1_e: '<string>', f2_j: '<array>', f3_n: '<array>', f4_y: '<array>', f5_k: '<null>', f6_o: '<string>', f7_r: '<object>', f8_q: '<boolean>', f9_f: '<number>'}, 'OnIyoXRJ');
    var put_23 = objectStore_77.put({f0_h: '<object>'}, 'zZokh');
    var count_9;
    try{
        KeyRange_72 = IDBKeyRange.bound('GwQLUs', 'Vqfl', true, true);
        count_9 = objectStore_77.count(KeyRange_72);
    }
    catch (e){
    }

    var clear_19 = objectStore_77.clear();
    var add_15 = objectStore_77.add({f0_d: '<object>', f1_e: '<null>', f2_t: '<boolean>', f3_f: '<number>', f4_c: '<number>'}, 'GKZdkKqpu');
    var get_17;
    try{
        KeyRange_74 = IDBKeyRange.bound('OnIyoXRJ', 'zZokh', false, false);
        get_17 = objectStore_77.get(KeyRange_74);
    }
    catch (e){
    }

    var clear_20 = objectStore_77.clear();
    var put_24 = objectStore_77.put({f0_j: '<number>', f1_s: '<object>', f2_l: '<number>', f3_i: '<boolean>', f4_e: '<null>', f5_y: '<boolean>', f6_f: '<null>', f7_q: '<string>', f8_v: '<null>', f9_z: '<object>'}, 'CxlT');
    var put_25 = objectStore_77.put({f0_w: '<array>', f1_o: '<null>'}, 'zvtnUshmqB');
    var getAllKeys_7 = objectStore_77.getAllKeys(3999427555);
    var get_18;
    try{
        KeyRange_76 = IDBKeyRange.bound('Vqfl', 'zvtnUshmqB', true, false);
        get_18 = objectStore_77.get(KeyRange_76);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_78 = IDBKeyRange.bound('Vqfl', 'umHaX', false, false);
        get_19 = objectStore_77.get(KeyRange_78);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('zZokh', false);
        get_20 = objectStore_77.get(KeyRange_80);
    }
    catch (e){
    }

    txn_64.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_64.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_64.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_65 = db.transaction(['objectStore_76'], 'readwrite', {durability:"default"})
    var objectStore_76 = txn_65.objectStore('objectStore_76');
    var put_26 = objectStore_76.put({f0_m: '<number>', f1_j: '<null>', f2_p: '<null>', f3_t: '<number>', f4_b: '<object>', f5_j: '<null>', f6_s: '<null>', f7_s: '<array>', f8_g: '<array>'}, 'WfIniz');
    var clear_21 = objectStore_76.clear();
    var count_10;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('smOxaBJPVaiF', false);
        count_10 = objectStore_76.count(KeyRange_82);
    }
    catch (e){
    }

    var add_16 = objectStore_76.add({f0_f: '<string>', f1_v: '<null>', f2_o: '<boolean>', f3_l: '<string>', f4_h: '<object>'}, 'YDEZ');
    var clear_22 = objectStore_76.clear();
    var add_17 = objectStore_76.add({f0_s: '<boolean>', f1_p: '<number>', f2_r: '<null>'}, 'GolvyXnhhI');
    var get_21;
    try{
        KeyRange_84 = IDBKeyRange.bound('GzqVjwo', 'YDEZ', false, true);
        get_21 = objectStore_76.get(KeyRange_84);
    }
    catch (e){
    }

    var put_27 = objectStore_76.put({f0_b: '<object>', f1_l: '<number>', f2_m: '<number>', f3_a: '<object>', f4_d: '<object>', f5_b: '<array>', f6_i: '<object>', f7_y: '<string>'}, 'LggFIWaksX');
    var count_11;
    try{
        KeyRange_86 = IDBKeyRange.only('kchINvrtJc');
        count_11 = objectStore_76.count(KeyRange_86);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('fcmsZi', true);
        getAll_9 = objectStore_76.getAll(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('LggFIWaksX');
        getAll_9 = objectStore_76.getAll(KeyRange_89);
    }

    var getAll_10;
    try{
        KeyRange_90 = IDBKeyRange.bound('smOxaBJPVaiF', 'FSEX', true, true);
        getAll_10 = objectStore_76.getAll(KeyRange_90);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('FSEX');
        getAll_10 = objectStore_76.getAll(KeyRange_91);
    }

    var put_28 = objectStore_76.put({f0_u: '<boolean>', f1_d: '<boolean>'}, 'yye');
    var count_12;
    try{
        KeyRange_92 = IDBKeyRange.bound('FSEX', 'GzqVjwo', false, true);
        count_12 = objectStore_76.count(KeyRange_92);
    }
    catch (e){
    }

    var clear_23 = objectStore_76.clear();
    var get_22;
    try{
        KeyRange_94 = IDBKeyRange.only('AUmhBvIlQS');
        get_22 = objectStore_76.get(KeyRange_94);
    }
    catch (e){
    }

    var put_29 = objectStore_76.put({f0_h: '<array>'}, 'xhrbiYgO');
    var put_30 = objectStore_76.put({f0_x: '<object>', f1_j: '<boolean>', f2_f: '<boolean>', f3_g: '<null>', f4_w: '<object>', f5_a: '<boolean>', f6_r: '<string>', f7_p: '<array>', f8_m: '<boolean>'}, 'mgwEUagDY');
    var add_18 = objectStore_76.add({f0_m: '<number>'}, 'EVSqe');
    var clear_24 = objectStore_76.clear();
    txn_65.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_65.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_65.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_66 = db.transaction(['objectStore_77'], 'readwrite', {durability:"strict"})
    var objectStore_77 = txn_66.objectStore('objectStore_77');
    var get_23;
    try{
        KeyRange_96 = IDBKeyRange.only('zvtnUshmqB');
        get_23 = objectStore_77.get(KeyRange_96);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('pOzFI', false);
        getAllKeys_8 = objectStore_77.getAllKeys(KeyRange_98, 2008644289);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('CxlT');
        getAllKeys_8 = objectStore_77.getAllKeys(KeyRange_99);
    }

    var add_19 = objectStore_77.add({f0_v: '<string>', f1_l: '<boolean>', f2_x: '<object>', f3_c: '<null>', f4_t: '<number>', f5_o: '<null>', f6_e: '<array>'}, 'CRwYGlYWdOOn');
    var put_31 = objectStore_77.put({f0_z: '<number>', f1_u: '<object>', f2_l: '<number>'}, 'IIOO');
    var get_24;
    try{
        KeyRange_100 = IDBKeyRange.only('UwosxttH');
        get_24 = objectStore_77.get(KeyRange_100);
    }
    catch (e){
    }

    var clear_25 = objectStore_77.clear();
    var clear_26 = objectStore_77.clear();
    var put_32 = objectStore_77.put({f0_a: '<null>', f1_p: '<object>', f2_o: '<object>', f3_k: '<object>', f4_n: '<number>', f5_s: '<null>', f6_b: '<array>', f7_q: '<number>', f8_d: '<object>'}, 'hvknBnSX');
    var getAllKeys_9;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('qAWKpAw', true);
        getAllKeys_9 = objectStore_77.getAllKeys(KeyRange_102, 4148059268);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('hvknBnSX');
        getAllKeys_9 = objectStore_77.getAllKeys(KeyRange_103);
    }

    var put_33 = objectStore_77.put({f0_q: '<number>', f1_x: '<boolean>', f2_e: '<number>', f3_c: '<object>'}, 'fjUVhODgWJh');
    var get_25;
    try{
        KeyRange_104 = IDBKeyRange.bound('pOzFI', 'CRwYGlYWdOOn', true, false);
        get_25 = objectStore_77.get(KeyRange_104);
    }
    catch (e){
    }

    var clear_27 = objectStore_77.clear();
    var add_20 = objectStore_77.add({f0_b: '<object>', f1_o: '<number>', f2_h: '<null>', f3_k: '<boolean>', f4_n: '<string>', f5_u: '<boolean>', f6_o: '<object>', f7_j: '<null>', f8_c: '<object>'}, 'NlYCQB');
    var count_13;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('GKZdkKqpu', false);
        count_13 = objectStore_77.count(KeyRange_106);
    }
    catch (e){
    }

    txn_66.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_66.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_66.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_67 = db.transaction(['objectStore_76'], 'readonly', {durability:"strict"})
    var objectStore_76 = txn_67.objectStore('objectStore_76');
    var count_14 = objectStore_76.count();
    var count_15 = objectStore_76.count();
    var count_16 = objectStore_76.count();
    var count_17 = objectStore_76.count();
    var getAll_11 = objectStore_76.getAll(3938230758);
    var getAll_12;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('GzqVjwo', false);
        getAll_12 = objectStore_76.getAll(KeyRange_108, 904884710);
    }
    catch (e){
        KeyRange_109 = IDBKeyRange.only('LggFIWaksX');
        getAll_12 = objectStore_76.getAll(KeyRange_109);
    }

    var get_26;
    try{
        KeyRange_110 = IDBKeyRange.only('fcmsZi');
        get_26 = objectStore_76.get(KeyRange_110);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_112 = IDBKeyRange.bound('RpFmDvmm', 'JeajXMMmNk', true, false);
        get_27 = objectStore_76.get(KeyRange_112);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_114 = IDBKeyRange.only('xhrbiYgO');
        getAllKeys_10 = objectStore_76.getAllKeys(KeyRange_114, 682754486);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('FSEX');
        getAllKeys_10 = objectStore_76.getAllKeys(KeyRange_115);
    }

    var getAllKeys_11;
    try{
        KeyRange_116 = IDBKeyRange.bound('eGqmvJp', 'DCmiwPn', false, true);
        getAllKeys_11 = objectStore_76.getAllKeys(KeyRange_116, 3167538645);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('smOxaBJPVaiF');
        getAllKeys_11 = objectStore_76.getAllKeys(KeyRange_117);
    }

    var getAllKeys_12;
    try{
        KeyRange_118 = IDBKeyRange.bound('kchINvrtJc', 'STjHMr', false, false);
        getAllKeys_12 = objectStore_76.getAllKeys(KeyRange_118, 263148893);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('DCmiwPn');
        getAllKeys_12 = objectStore_76.getAllKeys(KeyRange_119);
    }

    var get_28;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('FSEX', true);
        get_28 = objectStore_76.get(KeyRange_120);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_122 = IDBKeyRange.bound('slixdHSDv', 'jYoR', true, false);
        count_18 = objectStore_76.count(KeyRange_122);
    }
    catch (e){
    }

    var count_19 = objectStore_76.count();
    var get_29;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('yye', true);
        get_29 = objectStore_76.get(KeyRange_124);
    }
    catch (e){
    }

    var count_20 = objectStore_76.count();
    var count_21 = objectStore_76.count();
    var get_30;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('gcwGDYNWjxe', false);
        get_30 = objectStore_76.get(KeyRange_126);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_128 = IDBKeyRange.bound('mgwEUagDY', 'xhrbiYgO', false, true);
        get_31 = objectStore_76.get(KeyRange_128);
    }
    catch (e){
    }

    txn_67.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_67.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_67.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_68 = db.transaction(['objectStore_76'], 'readonly', {durability:"relaxed"})
    var objectStore_76 = txn_68.objectStore('objectStore_76');
    var count_22;
    try{
        KeyRange_130 = IDBKeyRange.only('mgwEUagDY');
        count_22 = objectStore_76.count(KeyRange_130);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_132 = IDBKeyRange.bound('slixdHSDv', 'mGQOtwen', false, true);
        get_32 = objectStore_76.get(KeyRange_132);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_76.getAllKeys(1597368331);
    var count_23 = objectStore_76.count();
    var get_33;
    try{
        KeyRange_134 = IDBKeyRange.only('gcwGDYNWjxe');
        get_33 = objectStore_76.get(KeyRange_134);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_136 = IDBKeyRange.bound('bMOa', 'eGqmvJp', false, true);
        get_34 = objectStore_76.get(KeyRange_136);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_138 = IDBKeyRange.only('kchINvrtJc');
        count_24 = objectStore_76.count(KeyRange_138);
    }
    catch (e){
    }

    var count_25 = objectStore_76.count();
    var getAll_13 = objectStore_76.getAll(4217585118);
    var getAllKeys_14;
    try{
        KeyRange_140 = IDBKeyRange.only('HOxQFTaMaV');
        getAllKeys_14 = objectStore_76.getAllKeys(KeyRange_140);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('JeajXMMmNk');
        getAllKeys_14 = objectStore_76.getAllKeys(KeyRange_141);
    }

    var index_3 = objectStore_76.index('index_60');
    var get_35;
    try{
        KeyRange_142 = IDBKeyRange.bound('mgwEUagDY', 'LggFIWaksX', false, false);
        get_35 = objectStore_76.get(KeyRange_142);
    }
    catch (e){
    }

    var getAllKeys_15 = objectStore_76.getAllKeys();
    var getAllKeys_16;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('FSEX', false);
        getAllKeys_16 = objectStore_76.getAllKeys(KeyRange_144, 1941477265);
    }
    catch (e){
        KeyRange_145 = IDBKeyRange.only('eGqmvJp');
        getAllKeys_16 = objectStore_76.getAllKeys(KeyRange_145);
    }

    var count_26;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('WfIniz', true);
        count_26 = objectStore_76.count(KeyRange_146);
    }
    catch (e){
    }

    var getAllKeys_17;
    try{
        KeyRange_148 = IDBKeyRange.bound('STjHMr', 'fcmsZi', false, true);
        getAllKeys_17 = objectStore_76.getAllKeys(KeyRange_148);
    }
    catch (e){
        KeyRange_149 = IDBKeyRange.only('yye');
        getAllKeys_17 = objectStore_76.getAllKeys(KeyRange_149);
    }

    var get_36;
    try{
        KeyRange_150 = IDBKeyRange.bound('uyZhoW', 'GolvyXnhhI', false, false);
        get_36 = objectStore_76.get(KeyRange_150);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_152 = IDBKeyRange.bound('GzqVjwo', 'JeajXMMmNk', true, true);
        get_37 = objectStore_76.get(KeyRange_152);
    }
    catch (e){
    }

    var get_38;
    try{
        KeyRange_154 = IDBKeyRange.lowerBound('GzqVjwo', true);
        get_38 = objectStore_76.get(KeyRange_154);
    }
    catch (e){
    }

    var get_39;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('uyZhoW', false);
        get_39 = objectStore_76.get(KeyRange_156);
    }
    catch (e){
    }

    var getAll_14 = objectStore_76.getAll(3064065988);
    var getAll_15 = objectStore_76.getAll();
    var get_40;
    try{
        KeyRange_158 = IDBKeyRange.bound('uyZhoW', 'kchINvrtJc', false, false);
        get_40 = objectStore_76.get(KeyRange_158);
    }
    catch (e){
    }

    txn_68.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_68.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_68.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_69 = db.transaction(['objectStore_77', 'objectStore_76'], 'readonly', {durability:"strict"})
    var objectStore_77 = txn_69.objectStore('objectStore_77');
    var count_27 = objectStore_77.count();
    var count_28 = objectStore_77.count();
    var count_29;
    try{
        KeyRange_160 = IDBKeyRange.only('zvtnUshmqB');
        count_29 = objectStore_77.count(KeyRange_160);
    }
    catch (e){
    }

    var get_41;
    try{
        KeyRange_162 = IDBKeyRange.bound('zvtnUshmqB', 'umHaX', false, true);
        get_41 = objectStore_77.get(KeyRange_162);
    }
    catch (e){
    }

    var get_42;
    try{
        KeyRange_164 = IDBKeyRange.bound('aYDDZDNNg', 'vLX', true, false);
        get_42 = objectStore_77.get(KeyRange_164);
    }
    catch (e){
    }

    var get_43;
    try{
        KeyRange_166 = IDBKeyRange.bound('aYDDZDNNg', 'GKZdkKqpu', false, false);
        get_43 = objectStore_77.get(KeyRange_166);
    }
    catch (e){
    }

    var get_44;
    try{
        KeyRange_168 = IDBKeyRange.bound('CxlT', 'CRwYGlYWdOOn', false, true);
        get_44 = objectStore_77.get(KeyRange_168);
    }
    catch (e){
    }

    var getAllKeys_18 = objectStore_77.getAllKeys();
    var count_30;
    try{
        KeyRange_170 = IDBKeyRange.bound('lIbrYGvPn', 'Vqfl', true, true);
        count_30 = objectStore_77.count(KeyRange_170);
    }
    catch (e){
    }

    var count_31;
    try{
        KeyRange_172 = IDBKeyRange.bound('CxlT', 'hvknBnSX', true, true);
        count_31 = objectStore_77.count(KeyRange_172);
    }
    catch (e){
    }

    var get_45;
    try{
        KeyRange_174 = IDBKeyRange.bound('vLX', 'zZokh', true, false);
        get_45 = objectStore_77.get(KeyRange_174);
    }
    catch (e){
    }

    var getAll_16 = objectStore_77.getAll();
    var getAll_17 = objectStore_77.getAll(1213732148);
    var get_46;
    try{
        KeyRange_176 = IDBKeyRange.bound('zZokh', 'aYDDZDNNg', false, true);
        get_46 = objectStore_77.get(KeyRange_176);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_178 = IDBKeyRange.lowerBound('aYDDZDNNg', false);
        get_47 = objectStore_77.get(KeyRange_178);
    }
    catch (e){
    }

    var get_48;
    try{
        KeyRange_180 = IDBKeyRange.lowerBound('lIbrYGvPn', true);
        get_48 = objectStore_77.get(KeyRange_180);
    }
    catch (e){
    }

    var count_32 = objectStore_77.count();
    var count_33 = objectStore_77.count();
    var get_49;
    try{
        KeyRange_182 = IDBKeyRange.bound('CRwYGlYWdOOn', 'CRwYGlYWdOOn', false, false);
        get_49 = objectStore_77.get(KeyRange_182);
    }
    catch (e){
    }

    var count_34 = objectStore_77.count();
    var getAll_18;
    try{
        KeyRange_184 = IDBKeyRange.only('CRwYGlYWdOOn');
        getAll_18 = objectStore_77.getAll(KeyRange_184, 2065399036);
    }
    catch (e){
        KeyRange_185 = IDBKeyRange.only('fjUVhODgWJh');
        getAll_18 = objectStore_77.getAll(KeyRange_185);
    }

    var count_35 = objectStore_77.count();
    txn_69.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_69.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_69.onerror = (event) => {
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