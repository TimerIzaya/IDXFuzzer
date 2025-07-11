let db;
const openRequest = window.indexedDB.open('str_1528', 3443767593221017)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_25');
    var put_0 = objectStore_0.put({f0_z: '<number>', f1_j: '<string>', f2_i: '<boolean>', f3_y: '<object>', f4_l: '<boolean>', f5_b: '<boolean>', f6_c: '<array>', f7_c: '<number>', f8_o: '<boolean>'}, 'HyilCJSdc');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('HyilCJSdc', 'HyilCJSdc', false, false);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('HyilCJSdc', 'HyilCJSdc', true, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('HyilCJSdc');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_3);
    }

    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.only('HyilCJSdc');
        count_0 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var put_1 = objectStore_0.put({f0_l: '<string>', f1_z: '<null>', f2_p: '<object>', f3_l: '<object>', f4_g: '<array>'}, 'xVDYIAD');
    var getAll_0 = objectStore_0.getAll(747455886);
    var getAllKeys_1 = objectStore_0.getAllKeys(1556163815);
    var add_0 = objectStore_0.add({f0_x: '<null>', f1_n: '<object>', f2_n: '<array>', f3_v: '<null>', f4_a: '<boolean>', f5_f: '<string>', f6_k: '<number>', f7_n: '<boolean>', f8_h: '<null>', f9_k: '<string>'}, 'CZLoebvFd');
    var index_19 = objectStore_0.createIndex('index_19', 'test', {multiEntry: false});
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('xVDYIAD', 'xVDYIAD', true, false);
        get_0 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('HyilCJSdc', 'xVDYIAD', true, true);
        delete_1 = objectStore_0.delete(KeyRange_8);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('HyilCJSdc', 'CZLoebvFd', false, true);
        get_1 = objectStore_0.get(KeyRange_10);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_26', {autoIncrement: false});
    var put_2 = objectStore_1.put({f0_b: '<string>'}, 'uBeCiSUMjz');
    var getAll_1 = objectStore_0.getAll();
    var index_0 = objectStore_0.index('index_19');
    var index_1 = objectStore_0.index('index_19');
    var add_1 = objectStore_1.add({f0_w: '<null>', f1_e: '<object>', f2_o: '<boolean>', f3_e: '<null>', f4_f: '<string>', f5_j: '<array>', f6_x: '<object>', f7_p: '<boolean>', f8_d: '<array>'}, 'FePFquTvE');
    var index_20 = objectStore_0.createIndex('index_20', 'test', {unique: false, multiEntry: false});
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('FePFquTvE', 'FePFquTvE', false, true);
        get_2 = objectStore_1.get(KeyRange_12);
    }
    catch (e){
    }

    objectStore_0.deleteIndex('index_19')
    var objectStore_2 = db.createObjectStore('objectStore_27', {autoIncrement: false});
    var add_2 = objectStore_0.add({f0_c: '<object>', f1_r: '<array>'}, 'kQURmnmlq');
    var getAll_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('kQURmnmlq', 'CZLoebvFd', true, false);
        getAll_2 = objectStore_0.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('kQURmnmlq');
        getAll_2 = objectStore_0.getAll(KeyRange_15);
    }

    var index_21 = objectStore_2.createIndex('index_21', 'test', {unique: false});
    var put_3 = objectStore_1.put({f0_r: '<null>', f1_s: '<string>', f2_y: '<number>', f3_t: '<number>', f4_m: '<object>'}, 'FxzonuMZ');
    var put_4 = objectStore_0.put({f0_u: '<object>', f1_m: '<string>', f2_w: '<null>', f3_f: '<number>', f4_e: '<null>', f5_l: '<array>', f6_f: '<object>', f7_w: '<boolean>', f8_z: '<object>', f9_c: '<array>'}, 'mVTTsACtlcdo');
    var getAllKeys_2 = objectStore_1.getAllKeys(4132005109);
    objectStore_0.deleteIndex('index_20')
    var getAll_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('FePFquTvE', false);
        getAll_3 = objectStore_1.getAll(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('uBeCiSUMjz');
        getAll_3 = objectStore_1.getAll(KeyRange_17);
    }

    var put_5 = objectStore_1.put({f0_u: '<object>', f1_j: '<object>', f2_f: '<array>'}, 'irxjUGGwual');
    var getAllKeys_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('FePFquTvE', 'uBeCiSUMjz', false, false);
        getAllKeys_3 = objectStore_1.getAllKeys(KeyRange_18, 2206466260);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('uBeCiSUMjz');
        getAllKeys_3 = objectStore_1.getAllKeys(KeyRange_19);
    }

    var add_3 = objectStore_1.add({f0_r: '<null>', f1_m: '<array>', f2_c: '<array>', f3_z: '<array>'}, 'JDq');
    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('xVDYIAD', 'HyilCJSdc', true, true);
        delete_2 = objectStore_0.delete(KeyRange_20);
    }
    catch (e){
    }

    var index_22 = objectStore_0.createIndex('index_22', 'test', {multiEntry: true});
    var clear_2 = objectStore_2.clear();
    var put_6 = objectStore_2.put({f0_g: '<number>', f1_y: '<null>', f2_v: '<number>', f3_b: '<boolean>', f4_o: '<string>'}, 'aPBOCtmLxBn');
    var count_2;
    try{
        KeyRange_22 = IDBKeyRange.bound('kQURmnmlq', 'CZLoebvFd', false, false);
        count_2 = objectStore_0.count(KeyRange_22);
    }
    catch (e){
    }

    var count_3 = objectStore_0.count();
    var getAll_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('aPBOCtmLxBn', 'aPBOCtmLxBn', false, false);
        getAll_4 = objectStore_2.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('aPBOCtmLxBn');
        getAll_4 = objectStore_2.getAll(KeyRange_25);
    }

    var add_4 = objectStore_0.add({f0_v: '<null>', f1_y: '<object>', f2_j: '<string>', f3_g: '<string>'}, 'HORAir');
    var clear_3 = objectStore_2.clear();
    var add_5 = objectStore_0.add({f0_i: '<boolean>', f1_l: '<array>', f2_r: '<number>', f3_g: '<number>'}, 'VSidDZimo');
    var get_3;
    try{
        KeyRange_26 = IDBKeyRange.bound('xVDYIAD', 'mVTTsACtlcdo', false, true);
        get_3 = objectStore_0.get(KeyRange_26);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('aPBOCtmLxBn', false);
        delete_3 = objectStore_2.delete(KeyRange_28);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_28', {autoIncrement: true});
    var clear_4 = objectStore_1.clear();
    var put_7 = objectStore_1.put({f0_t: '<null>', f1_b: '<number>', f2_n: '<array>', f3_k: '<null>', f4_l: '<object>'}, 'WCpPSYb');
    var index_23 = objectStore_0.createIndex('index_23', 'test', {unique: false, multiEntry: false});
    var clear_5 = objectStore_1.clear();
    var add_6 = objectStore_1.add({f0_b: '<boolean>', f1_g: '<array>', f2_k: '<object>', f3_h: '<object>'}, 'AWAvauozGOO');
    var put_8 = objectStore_3.put({f0_d: '<boolean>'}, 'QyW');
    var count_4;
    try{
        KeyRange_30 = IDBKeyRange.bound('mVTTsACtlcdo', 'mVTTsACtlcdo', true, false);
        count_4 = objectStore_0.count(KeyRange_30);
    }
    catch (e){
    }

    var index_24 = objectStore_1.createIndex('index_24', 'test', {unique: false});
    var put_9 = objectStore_0.put({f0_b: '<boolean>', f1_d: '<array>', f2_r: '<object>', f3_e: '<array>', f4_g: '<array>', f5_n: '<boolean>', f6_b: '<number>'}, 'mffFlbW');
    var put_10 = objectStore_3.put({f0_r: '<boolean>', f1_p: '<number>', f2_u: '<boolean>', f3_a: '<object>', f4_e: '<number>', f5_y: '<array>', f6_n: '<string>', f7_e: '<array>'}, 'KEbkbI');
    var index_25 = objectStore_1.createIndex('index_25', 'test');
    var index_26 = objectStore_3.createIndex('index_26', 'test', {multiEntry: false});
    var objectStore_4 = db.createObjectStore('objectStore_29', {keypath: 'MHZqGVC'});
    var get_4;
    try{
        KeyRange_32 = IDBKeyRange.only('mVTTsACtlcdo');
        get_4 = objectStore_0.get(KeyRange_32);
    }
    catch (e){
    }

    var index_27 = objectStore_2.createIndex('index_27', 'test', {unique: false, multiEntry: true});
    var getAll_5 = objectStore_3.getAll();
    var getAllKeys_4;
    try{
        KeyRange_34 = IDBKeyRange.bound('aPBOCtmLxBn', 'aPBOCtmLxBn', true, true);
        getAllKeys_4 = objectStore_2.getAllKeys(KeyRange_34, 880409147);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('aPBOCtmLxBn');
        getAllKeys_4 = objectStore_2.getAllKeys(KeyRange_35);
    }

    var objectStore_5 = db.createObjectStore('objectStore_30', {keypath: 'GrRkI'});
    var add_7 = objectStore_4.add({f0_m: '<null>', f1_y: '<number>', f2_h: '<string>', f3_l: '<null>', f4_r: '<boolean>', f5_r: '<string>', f6_r: '<boolean>', f7_n: '<string>'}, 'ogVZIZiOqZH');
    var index_28 = objectStore_4.createIndex('index_28', 'test', {multiEntry: true});
    var delete_4;
    try{
        KeyRange_36 = IDBKeyRange.only('ogVZIZiOqZH');
        delete_4 = objectStore_4.delete(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('mVTTsACtlcdo', 'xVDYIAD', false, true);
        getAllKeys_5 = objectStore_0.getAllKeys(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('mffFlbW');
        getAllKeys_5 = objectStore_0.getAllKeys(KeyRange_39);
    }

    var count_5;
    try{
        KeyRange_40 = IDBKeyRange.bound('ogVZIZiOqZH', 'ogVZIZiOqZH', false, true);
        count_5 = objectStore_4.count(KeyRange_40);
    }
    catch (e){
    }

    var clear_6 = objectStore_4.clear();
    var add_8 = objectStore_0.add({f0_m: '<number>', f1_b: '<array>', f2_m: '<number>'}, 'CssuzZZ');
    var put_11 = objectStore_2.put({f0_m: '<boolean>', f1_t: '<null>', f2_s: '<boolean>', f3_h: '<number>', f4_u: '<object>', f5_s: '<array>', f6_s: '<null>', f7_n: '<object>', f8_a: '<array>', f9_j: '<null>'}, 'TRiDI');
    var index_2 = objectStore_1.index('index_24');
    var add_9 = objectStore_0.add({f0_n: '<boolean>'}, 'uxjCbKtETX');
    var add_10 = objectStore_3.add({f0_o: '<object>'}, 'gIRFWGs');
    var put_12 = objectStore_5.put({f0_e: '<null>'}, 'HhctQLRZzsw');
    var clear_7 = objectStore_4.clear();
    var put_13 = objectStore_0.put({f0_o: '<string>', f1_y: '<string>'}, 'hpeqSWzzPsCn');
    var objectStore_6 = db.createObjectStore('objectStore_31', {keypath: 'RzEnLcPoMJNK'});
    var add_11 = objectStore_3.add({f0_x: '<boolean>', f1_n: '<boolean>', f2_l: '<number>'}, 'tWvpfgLU');
    var get_5;
    try{
        KeyRange_42 = IDBKeyRange.bound('aPBOCtmLxBn', 'TRiDI', false, true);
        get_5 = objectStore_2.get(KeyRange_42);
    }
    catch (e){
    }

    var put_14 = objectStore_5.put({f0_q: '<number>', f1_v: '<string>', f2_f: '<number>', f3_d: '<array>', f4_c: '<object>', f5_b: '<null>', f6_f: '<null>', f7_e: '<object>', f8_u: '<object>', f9_f: '<number>'}, 'NloUqlmgJd');
    var clear_8 = objectStore_2.clear();
    var clear_9 = objectStore_3.clear();
    var getAll_6;
    try{
        KeyRange_44 = IDBKeyRange.only('uBeCiSUMjz');
        getAll_6 = objectStore_1.getAll(KeyRange_44);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('FxzonuMZ');
        getAll_6 = objectStore_1.getAll(KeyRange_45);
    }

    var clear_10 = objectStore_4.clear();
    var index_29 = objectStore_2.createIndex('index_29', 'test');
    objectStore_2.deleteIndex('index_21')
    var get_6;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('FxzonuMZ', false);
        get_6 = objectStore_1.get(KeyRange_46);
    }
    catch (e){
    }

    var put_15 = objectStore_1.put({f0_m: '<boolean>', f1_v: '<number>', f2_w: '<null>', f3_m: '<boolean>'}, 'iArWL');
    var clear_11 = objectStore_6.clear();
    var add_12 = objectStore_2.add({f0_g: '<boolean>'}, 'LmCzOXlkPYe');
    var add_13 = objectStore_4.add({f0_u: '<string>', f1_e: '<boolean>', f2_q: '<null>'}, 'nBjZadSUeNq');
    var delete_5;
    try{
        KeyRange_48 = IDBKeyRange.bound('aPBOCtmLxBn', 'LmCzOXlkPYe', false, false);
        delete_5 = objectStore_2.delete(KeyRange_48);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_50 = IDBKeyRange.bound('nBjZadSUeNq', 'ogVZIZiOqZH', true, true);
        get_7 = objectStore_4.get(KeyRange_50);
    }
    catch (e){
    }

    var index_30 = objectStore_5.createIndex('index_30', 'test', {unique: true, multiEntry: false});
    var put_16 = objectStore_2.put({f0_g: '<array>', f1_f: '<array>', f2_a: '<null>', f3_e: '<number>', f4_b: '<object>', f5_k: '<object>'}, 'xJRVaTmAdqT');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_20 = db.transaction(['objectStore_26', 'objectStore_28'], 'readonly', {durability:"strict"})
    var objectStore_28 = txn_20.objectStore('objectStore_28');
    var get_8;
    try{
        KeyRange_52 = IDBKeyRange.bound('tWvpfgLU', 'QyW', false, false);
        get_8 = objectStore_28.get(KeyRange_52);
    }
    catch (e){
    }

    var count_6 = objectStore_28.count();
    var getAllKeys_6 = objectStore_28.getAllKeys();
    var count_7;
    try{
        KeyRange_54 = IDBKeyRange.bound('tWvpfgLU', 'gIRFWGs', true, true);
        count_7 = objectStore_28.count(KeyRange_54);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_56 = IDBKeyRange.bound('gIRFWGs', 'gIRFWGs', true, true);
        get_9 = objectStore_28.get(KeyRange_56);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('gIRFWGs', 'KEbkbI', false, true);
        getAll_7 = objectStore_28.getAll(KeyRange_58);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('tWvpfgLU');
        getAll_7 = objectStore_28.getAll(KeyRange_59);
    }

    var get_10;
    try{
        KeyRange_60 = IDBKeyRange.only('QyW');
        get_10 = objectStore_28.get(KeyRange_60);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_62 = IDBKeyRange.bound('QyW', 'KEbkbI', false, false);
        get_11 = objectStore_28.get(KeyRange_62);
    }
    catch (e){
    }

    var count_8 = objectStore_28.count();
    var count_9 = objectStore_28.count();
    var count_10;
    try{
        KeyRange_64 = IDBKeyRange.bound('gIRFWGs', 'QyW', false, true);
        count_10 = objectStore_28.count(KeyRange_64);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('gIRFWGs', true);
        get_12 = objectStore_28.get(KeyRange_66);
    }
    catch (e){
    }

    var count_11 = objectStore_28.count();
    var getAllKeys_7 = objectStore_28.getAllKeys(2162606973);
    var index_3 = objectStore_28.index('index_26');
    var getAllKeys_8;
    try{
        KeyRange_68 = IDBKeyRange.only('KEbkbI');
        getAllKeys_8 = objectStore_28.getAllKeys(KeyRange_68, 3286340848);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('gIRFWGs');
        getAllKeys_8 = objectStore_28.getAllKeys(KeyRange_69);
    }

    var count_12;
    try{
        KeyRange_70 = IDBKeyRange.only('QyW');
        count_12 = objectStore_28.count(KeyRange_70);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_72 = IDBKeyRange.bound('gIRFWGs', 'KEbkbI', false, true);
        count_13 = objectStore_28.count(KeyRange_72);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_74 = IDBKeyRange.bound('gIRFWGs', 'gIRFWGs', true, false);
        get_13 = objectStore_28.get(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_28.getAllKeys();
    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_21 = db.transaction(['objectStore_27'], 'readwrite', {durability:"strict"})
    var objectStore_27 = txn_21.objectStore('objectStore_27');
    var put_17 = objectStore_27.put({f0_c: '<number>', f1_z: '<array>', f2_k: '<object>', f3_y: '<string>', f4_t: '<null>', f5_x: '<number>', f6_x: '<object>', f7_g: '<number>', f8_t: '<boolean>'}, 'OgkKllsh');
    var clear_12 = objectStore_27.clear();
    var put_18 = objectStore_27.put({f0_h: '<object>', f1_z: '<string>', f2_v: '<array>', f3_p: '<array>', f4_x: '<boolean>', f5_l: '<string>', f6_r: '<null>', f7_z: '<string>', f8_n: '<boolean>', f9_s: '<string>'}, 'hvWPFiBIKq');
    var add_14 = objectStore_27.add({f0_c: '<string>', f1_u: '<number>', f2_r: '<number>', f3_x: '<null>'}, 'oqdpUJg');
    var add_15 = objectStore_27.add({f0_w: '<boolean>', f1_i: '<null>', f2_j: '<array>', f3_n: '<string>', f4_d: '<string>', f5_y: '<array>'}, 'RFhgGzMAqq');
    var clear_13 = objectStore_27.clear();
    var getAll_8;
    try{
        KeyRange_76 = IDBKeyRange.bound('xJRVaTmAdqT', 'TRiDI', true, true);
        getAll_8 = objectStore_27.getAll(KeyRange_76, 3180321738);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('xJRVaTmAdqT');
        getAll_8 = objectStore_27.getAll(KeyRange_77);
    }

    var count_14 = objectStore_27.count();
    var clear_14 = objectStore_27.clear();
    var delete_6;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('LmCzOXlkPYe', true);
        delete_6 = objectStore_27.delete(KeyRange_78);
    }
    catch (e){
    }

    var add_16 = objectStore_27.add({f0_n: '<array>', f1_c: '<string>', f2_p: '<boolean>', f3_l: '<object>', f4_p: '<boolean>'}, 'AbsxW');
    var clear_15 = objectStore_27.clear();
    var clear_16 = objectStore_27.clear();
    var get_14;
    try{
        KeyRange_80 = IDBKeyRange.only('AbsxW');
        get_14 = objectStore_27.get(KeyRange_80);
    }
    catch (e){
    }

    var put_19 = objectStore_27.put({f0_f: '<array>', f1_m: '<null>', f2_t: '<boolean>', f3_n: '<boolean>'}, 'bzkHRwESiYFh');
    var clear_17 = objectStore_27.clear();
    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_21.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_22 = db.transaction(['objectStore_27', 'objectStore_26'], 'readwrite', {durability:"relaxed"})
    var objectStore_26 = txn_22.objectStore('objectStore_26');
    var add_17 = objectStore_26.add({f0_x: '<object>', f1_q: '<number>', f2_l: '<boolean>', f3_l: '<string>', f4_r: '<array>', f5_h: '<string>'}, 'ansgaUm');
    var clear_18 = objectStore_26.clear();
    var put_20 = objectStore_26.put({f0_w: '<number>', f1_r: '<array>', f2_p: '<string>', f3_y: '<null>', f4_t: '<string>', f5_a: '<number>', f6_v: '<object>', f7_v: '<array>', f8_f: '<null>', f9_h: '<array>'}, 'gCt');
    var getAllKeys_10 = objectStore_26.getAllKeys();
    var delete_7;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('iArWL', false);
        delete_7 = objectStore_26.delete(KeyRange_82);
    }
    catch (e){
    }

    var put_21 = objectStore_26.put({f0_r: '<null>', f1_d: '<string>', f2_p: '<array>', f3_p: '<object>', f4_z: '<array>', f5_v: '<string>'}, 'tGahoa');
    var add_18 = objectStore_26.add({f0_k: '<object>', f1_a: '<object>', f2_q: '<object>', f3_m: '<null>', f4_s: '<object>', f5_p: '<string>'}, 'flHaz');
    var getAll_9 = objectStore_26.getAll();
    var index_4 = objectStore_26.index('index_24');
    var put_22 = objectStore_26.put({f0_b: '<number>', f1_y: '<array>', f2_v: '<boolean>', f3_t: '<string>', f4_e: '<boolean>', f5_p: '<number>', f6_b: '<null>', f7_s: '<array>'}, 'mmAta');
    var index_5 = objectStore_26.index('index_24');
    var get_15;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('ansgaUm', true);
        get_15 = objectStore_26.get(KeyRange_84);
    }
    catch (e){
    }

    var count_15 = objectStore_26.count();
    var clear_19 = objectStore_26.clear();
    var count_16;
    try{
        KeyRange_86 = IDBKeyRange.only('AWAvauozGOO');
        count_16 = objectStore_26.count(KeyRange_86);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_88 = IDBKeyRange.bound('uBeCiSUMjz', 'flHaz', true, false);
        delete_8 = objectStore_26.delete(KeyRange_88);
    }
    catch (e){
    }

    var clear_20 = objectStore_26.clear();
    var add_19 = objectStore_26.add({f0_v: '<number>'}, 'nCsEUIfJQVfe');
    var delete_9;
    try{
        KeyRange_90 = IDBKeyRange.only('ansgaUm');
        delete_9 = objectStore_26.delete(KeyRange_90);
    }
    catch (e){
    }

    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_22.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_23 = db.transaction(['objectStore_28'], 'readonly', {durability:"default"})
    var objectStore_28 = txn_23.objectStore('objectStore_28');
    var get_16;
    try{
        KeyRange_92 = IDBKeyRange.bound('QyW', 'gIRFWGs', false, false);
        get_16 = objectStore_28.get(KeyRange_92);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_94 = IDBKeyRange.bound('KEbkbI', 'tWvpfgLU', false, false);
        getAll_10 = objectStore_28.getAll(KeyRange_94);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('QyW');
        getAll_10 = objectStore_28.getAll(KeyRange_95);
    }

    var count_17;
    try{
        KeyRange_96 = IDBKeyRange.only('QyW');
        count_17 = objectStore_28.count(KeyRange_96);
    }
    catch (e){
    }

    var count_18 = objectStore_28.count();
    var get_17;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('KEbkbI', true);
        get_17 = objectStore_28.get(KeyRange_98);
    }
    catch (e){
    }

    var index_6 = objectStore_28.index('index_26');
    var getAllKeys_11;
    try{
        KeyRange_100 = IDBKeyRange.bound('QyW', 'KEbkbI', true, true);
        getAllKeys_11 = objectStore_28.getAllKeys(KeyRange_100);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('gIRFWGs');
        getAllKeys_11 = objectStore_28.getAllKeys(KeyRange_101);
    }

    var count_19;
    try{
        KeyRange_102 = IDBKeyRange.bound('KEbkbI', 'tWvpfgLU', true, true);
        count_19 = objectStore_28.count(KeyRange_102);
    }
    catch (e){
    }

    var getAll_11;
    try{
        KeyRange_104 = IDBKeyRange.bound('QyW', 'QyW', true, true);
        getAll_11 = objectStore_28.getAll(KeyRange_104, 2396416381);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('KEbkbI');
        getAll_11 = objectStore_28.getAll(KeyRange_105);
    }

    var count_20;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('KEbkbI', true);
        count_20 = objectStore_28.count(KeyRange_106);
    }
    catch (e){
    }

    var count_21;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('tWvpfgLU', true);
        count_21 = objectStore_28.count(KeyRange_108);
    }
    catch (e){
    }

    var index_7 = objectStore_28.index('index_26');
    var count_22 = objectStore_28.count();
    var get_18;
    try{
        KeyRange_110 = IDBKeyRange.bound('tWvpfgLU', 'QyW', true, true);
        get_18 = objectStore_28.get(KeyRange_110);
    }
    catch (e){
    }

    var count_23 = objectStore_28.count();
    var getAllKeys_12;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('tWvpfgLU', true);
        getAllKeys_12 = objectStore_28.getAllKeys(KeyRange_112, 324171816);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('KEbkbI');
        getAllKeys_12 = objectStore_28.getAllKeys(KeyRange_113);
    }

    var get_19;
    try{
        KeyRange_114 = IDBKeyRange.only('tWvpfgLU');
        get_19 = objectStore_28.get(KeyRange_114);
    }
    catch (e){
    }

    var count_24 = objectStore_28.count();
    var getAll_12;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('gIRFWGs', true);
        getAll_12 = objectStore_28.getAll(KeyRange_116);
    }
    catch (e){
        KeyRange_117 = IDBKeyRange.only('KEbkbI');
        getAll_12 = objectStore_28.getAll(KeyRange_117);
    }

    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_23.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_23.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_24 = db.transaction(['objectStore_25'], 'readwrite', {durability:"default"})
    var objectStore_25 = txn_24.objectStore('objectStore_25');
    var add_20 = objectStore_25.add({f0_q: '<boolean>', f1_a: '<boolean>', f2_g: '<number>', f3_z: '<string>', f4_h: '<array>', f5_c: '<object>', f6_y: '<number>', f7_e: '<string>', f8_y: '<array>', f9_e: '<array>'}, 'FtZJsBPk');
    var count_25 = objectStore_25.count();
    var get_20;
    try{
        KeyRange_118 = IDBKeyRange.bound('mffFlbW', 'kQURmnmlq', true, true);
        get_20 = objectStore_25.get(KeyRange_118);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('mVTTsACtlcdo', false);
        get_21 = objectStore_25.get(KeyRange_120);
    }
    catch (e){
    }

    var put_23 = objectStore_25.put({f0_y: '<null>'}, 'AgDLksk');
    var get_22;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('CssuzZZ', false);
        get_22 = objectStore_25.get(KeyRange_122);
    }
    catch (e){
    }

    var delete_10;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('mVTTsACtlcdo', true);
        delete_10 = objectStore_25.delete(KeyRange_124);
    }
    catch (e){
    }

    var add_21 = objectStore_25.add({f0_e: '<boolean>', f1_g: '<null>', f2_z: '<boolean>', f3_c: '<null>', f4_i: '<number>', f5_u: '<string>', f6_n: '<string>', f7_b: '<array>', f8_z: '<object>'}, 'jhIx');
    var get_23;
    try{
        KeyRange_126 = IDBKeyRange.bound('VSidDZimo', 'mffFlbW', false, false);
        get_23 = objectStore_25.get(KeyRange_126);
    }
    catch (e){
    }

    var add_22 = objectStore_25.add({f0_n: '<null>', f1_w: '<boolean>', f2_x: '<number>', f3_v: '<object>', f4_r: '<array>', f5_m: '<object>', f6_b: '<boolean>'}, 'uGhNHJAEWcAA');
    var put_24 = objectStore_25.put({f0_b: '<number>', f1_v: '<array>', f2_z: '<null>', f3_x: '<number>', f4_t: '<string>', f5_w: '<array>', f6_m: '<number>', f7_p: '<array>'}, 'fcJcUrf');
    var count_26;
    try{
        KeyRange_128 = IDBKeyRange.bound('CZLoebvFd', 'HORAir', false, false);
        count_26 = objectStore_25.count(KeyRange_128);
    }
    catch (e){
    }

    var count_27 = objectStore_25.count();
    var get_24;
    try{
        KeyRange_130 = IDBKeyRange.bound('CssuzZZ', 'xVDYIAD', true, false);
        get_24 = objectStore_25.get(KeyRange_130);
    }
    catch (e){
    }

    var getAllKeys_13;
    try{
        KeyRange_132 = IDBKeyRange.bound('HORAir', 'VSidDZimo', true, true);
        getAllKeys_13 = objectStore_25.getAllKeys(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('HyilCJSdc');
        getAllKeys_13 = objectStore_25.getAllKeys(KeyRange_133);
    }

    var add_23 = objectStore_25.add({f0_s: '<number>', f1_d: '<null>', f2_o: '<array>', f3_d: '<boolean>', f4_h: '<array>'}, 'unfs');
    txn_24.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_24.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_25 = db.transaction(['objectStore_30'], 'readwrite', {durability:"default"})
    var objectStore_30 = txn_25.objectStore('objectStore_30');
    var get_25;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('NloUqlmgJd', false);
        get_25 = objectStore_30.get(KeyRange_134);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_136 = IDBKeyRange.bound('HhctQLRZzsw', 'NloUqlmgJd', true, false);
        get_26 = objectStore_30.get(KeyRange_136);
    }
    catch (e){
    }

    var add_24 = objectStore_30.add({f0_k: '<object>', f1_c: '<object>', f2_e: '<array>', f3_j: '<array>', f4_g: '<object>', f5_c: '<array>', f6_k: '<boolean>'}, 'DbOi');
    var clear_21 = objectStore_30.clear();
    var count_28;
    try{
        KeyRange_138 = IDBKeyRange.only('HhctQLRZzsw');
        count_28 = objectStore_30.count(KeyRange_138);
    }
    catch (e){
    }

    var clear_22 = objectStore_30.clear();
    var getAll_13 = objectStore_30.getAll();
    var put_25 = objectStore_30.put({f0_p: '<null>', f1_r: '<null>'}, 'BKnyJbjNjOtd');
    var delete_11;
    try{
        KeyRange_140 = IDBKeyRange.bound('DbOi', 'HhctQLRZzsw', true, true);
        delete_11 = objectStore_30.delete(KeyRange_140);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_142 = IDBKeyRange.only('DbOi');
        get_27 = objectStore_30.get(KeyRange_142);
    }
    catch (e){
    }

    var add_25 = objectStore_30.add({f0_z: '<string>', f1_f: '<number>', f2_o: '<boolean>', f3_z: '<string>', f4_v: '<array>', f5_k: '<boolean>', f6_i: '<object>', f7_r: '<number>', f8_f: '<object>', f9_c: '<string>'}, 'kBVhr');
    var put_26 = objectStore_30.put({f0_n: '<string>', f1_b: '<null>', f2_i: '<number>'}, 'tgX');
    var getAll_14 = objectStore_30.getAll();
    var put_27 = objectStore_30.put({f0_r: '<boolean>', f1_a: '<number>', f2_c: '<null>', f3_a: '<array>', f4_q: '<number>', f5_y: '<object>', f6_d: '<null>'}, 'fKH');
    var index_8 = objectStore_30.index('index_30');
    var clear_23 = objectStore_30.clear();
    var add_26 = objectStore_30.add({f0_v: '<object>', f1_q: '<number>'}, 'cICpwWrpgt');
    var clear_24 = objectStore_30.clear();
    var get_28;
    try{
        KeyRange_144 = IDBKeyRange.lowerBound('kBVhr', true);
        get_28 = objectStore_30.get(KeyRange_144);
    }
    catch (e){
    }

    var getAll_15 = objectStore_30.getAll(1844923752);
    txn_25.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_25.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_25.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_26 = db.transaction(['objectStore_26', 'objectStore_28'], 'readwrite', {durability:"relaxed"})
    var objectStore_26 = txn_26.objectStore('objectStore_26');
    var index_9 = objectStore_26.index('index_24');
    var get_29;
    try{
        KeyRange_146 = IDBKeyRange.bound('uBeCiSUMjz', 'AWAvauozGOO', false, false);
        get_29 = objectStore_26.get(KeyRange_146);
    }
    catch (e){
    }

    var index_10 = objectStore_26.index('index_25');
    var getAllKeys_14 = objectStore_26.getAllKeys(695286375);
    var put_28 = objectStore_26.put({f0_u: '<boolean>'}, 'fuhYCxFJ');
    var delete_12;
    try{
        KeyRange_148 = IDBKeyRange.bound('flHaz', 'WCpPSYb', true, false);
        delete_12 = objectStore_26.delete(KeyRange_148);
    }
    catch (e){
    }

    var add_27 = objectStore_26.add({f0_u: '<boolean>'}, 'sWE');
    var clear_25 = objectStore_26.clear();
    var count_29;
    try{
        KeyRange_150 = IDBKeyRange.bound('mmAta', 'uBeCiSUMjz', false, false);
        count_29 = objectStore_26.count(KeyRange_150);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_152 = IDBKeyRange.bound('FxzonuMZ', 'tGahoa', true, true);
        count_30 = objectStore_26.count(KeyRange_152);
    }
    catch (e){
    }

    var delete_13;
    try{
        KeyRange_154 = IDBKeyRange.only('JDq');
        delete_13 = objectStore_26.delete(KeyRange_154);
    }
    catch (e){
    }

    var clear_26 = objectStore_26.clear();
    var get_30;
    try{
        KeyRange_156 = IDBKeyRange.bound('gCt', 'ansgaUm', false, false);
        get_30 = objectStore_26.get(KeyRange_156);
    }
    catch (e){
    }

    txn_26.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_26.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_26.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_27 = db.transaction(['objectStore_25'], 'readwrite', {durability:"strict"})
    var objectStore_25 = txn_27.objectStore('objectStore_25');
    var add_28 = objectStore_25.add({f0_j: '<boolean>', f1_v: '<string>', f2_h: '<array>', f3_f: '<number>', f4_e: '<null>', f5_e: '<array>', f6_t: '<number>', f7_f: '<boolean>', f8_e: '<string>', f9_j: '<number>'}, 'trTpjFlsu');
    var add_29 = objectStore_25.add({f0_t: '<object>'}, 'nQctfdw');
    var add_30 = objectStore_25.add({f0_d: '<number>', f1_q: '<object>'}, 'MuoZ');
    var count_31;
    try{
        KeyRange_158 = IDBKeyRange.bound('mVTTsACtlcdo', 'FtZJsBPk', false, true);
        count_31 = objectStore_25.count(KeyRange_158);
    }
    catch (e){
    }

    var count_32 = objectStore_25.count();
    var put_29 = objectStore_25.put({f0_h: '<boolean>', f1_e: '<null>'}, 'HAywPAvX');
    var clear_27 = objectStore_25.clear();
    var add_31 = objectStore_25.add({f0_e: '<number>', f1_m: '<boolean>', f2_d: '<string>', f3_f: '<object>', f4_e: '<string>'}, 'zRPyiirHXPAO');
    var count_33;
    try{
        KeyRange_160 = IDBKeyRange.bound('HAywPAvX', 'CssuzZZ', false, false);
        count_33 = objectStore_25.count(KeyRange_160);
    }
    catch (e){
    }

    var getAll_16 = objectStore_25.getAll(2227810043);
    var add_32 = objectStore_25.add({f0_e: '<string>', f1_m: '<boolean>', f2_s: '<boolean>', f3_f: '<number>', f4_k: '<boolean>', f5_v: '<object>', f6_e: '<array>', f7_f: '<string>'}, 'VJavRVio');
    var put_30 = objectStore_25.put({f0_b: '<object>', f1_d: '<array>', f2_j: '<array>', f3_x: '<object>', f4_j: '<object>', f5_t: '<object>', f6_p: '<string>', f7_x: '<array>'}, 'ofYxLbf');
    var add_33 = objectStore_25.add({f0_c: '<object>', f1_j: '<string>', f2_q: '<object>', f3_f: '<null>', f4_t: '<array>'}, 'RnsorG');
    txn_27.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_27.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_27.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_28 = db.transaction(['objectStore_30'], 'readwrite', {durability:"strict"})
    var objectStore_30 = txn_28.objectStore('objectStore_30');
    var put_31 = objectStore_30.put({f0_m: '<string>'}, 'WRkNNaE');
    var add_34 = objectStore_30.add({f0_b: '<string>', f1_p: '<string>', f2_j: '<number>', f3_y: '<object>', f4_z: '<object>', f5_g: '<array>'}, 'wruDdmgDXwR');
    var getAllKeys_15 = objectStore_30.getAllKeys(477325074);
    var put_32 = objectStore_30.put({f0_g: '<boolean>', f1_k: '<string>', f2_w: '<boolean>', f3_m: '<boolean>', f4_r: '<array>', f5_z: '<string>', f6_c: '<number>', f7_c: '<number>', f8_s: '<object>'}, 'rLEa');
    var add_35 = objectStore_30.add({f0_w: '<null>', f1_t: '<array>', f2_n: '<number>', f3_k: '<null>'}, 'ppHBruGjE');
    var get_31;
    try{
        KeyRange_162 = IDBKeyRange.only('WRkNNaE');
        get_31 = objectStore_30.get(KeyRange_162);
    }
    catch (e){
    }

    var getAllKeys_16;
    try{
        KeyRange_164 = IDBKeyRange.bound('WRkNNaE', 'NloUqlmgJd', false, true);
        getAllKeys_16 = objectStore_30.getAllKeys(KeyRange_164);
    }
    catch (e){
        KeyRange_165 = IDBKeyRange.only('rLEa');
        getAllKeys_16 = objectStore_30.getAllKeys(KeyRange_165);
    }

    var put_33 = objectStore_30.put({f0_m: '<null>'}, 'HVHiyKVcOIQo');
    var clear_28 = objectStore_30.clear();
    var put_34 = objectStore_30.put({f0_f: '<string>', f1_l: '<object>', f2_q: '<object>', f3_a: '<string>', f4_i: '<boolean>', f5_s: '<null>', f6_p: '<string>', f7_v: '<number>', f8_k: '<null>'}, 'LcpD');
    var put_35 = objectStore_30.put({f0_i: '<boolean>', f1_j: '<string>', f2_x: '<string>', f3_y: '<string>', f4_v: '<string>'}, 'SOjI');
    var add_36 = objectStore_30.add({f0_c: '<number>', f1_s: '<string>', f2_l: '<object>', f3_x: '<number>', f4_n: '<boolean>', f5_i: '<object>', f6_m: '<string>', f7_g: '<boolean>', f8_k: '<object>', f9_s: '<number>'}, 'dNpxRUol');
    var put_36 = objectStore_30.put({f0_n: '<array>', f1_z: '<boolean>'}, 'QfCGBnfWSe');
    var clear_29 = objectStore_30.clear();
    var add_37 = objectStore_30.add({f0_v: '<boolean>', f1_q: '<null>', f2_p: '<object>'}, 'oNPulBp');
    var put_37 = objectStore_30.put({f0_s: '<string>'}, 'OqyKPiILm');
    var delete_14;
    try{
        KeyRange_166 = IDBKeyRange.bound('kBVhr', 'HhctQLRZzsw', false, true);
        delete_14 = objectStore_30.delete(KeyRange_166);
    }
    catch (e){
    }

    var getAll_17;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('kBVhr', false);
        getAll_17 = objectStore_30.getAll(KeyRange_168, 2490221648);
    }
    catch (e){
        KeyRange_169 = IDBKeyRange.only('HVHiyKVcOIQo');
        getAll_17 = objectStore_30.getAll(KeyRange_169);
    }

    var clear_30 = objectStore_30.clear();
    txn_28.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_28.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_28.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_29 = db.transaction(['objectStore_30'], 'readwrite', {durability:"relaxed"})
    var objectStore_30 = txn_29.objectStore('objectStore_30');
    var get_32;
    try{
        KeyRange_170 = IDBKeyRange.bound('cICpwWrpgt', 'dNpxRUol', false, false);
        get_32 = objectStore_30.get(KeyRange_170);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_172 = IDBKeyRange.bound('wruDdmgDXwR', 'kBVhr', true, true);
        get_33 = objectStore_30.get(KeyRange_172);
    }
    catch (e){
    }

    var getAll_18;
    try{
        KeyRange_174 = IDBKeyRange.bound('WRkNNaE', 'NloUqlmgJd', false, false);
        getAll_18 = objectStore_30.getAll(KeyRange_174);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('wruDdmgDXwR');
        getAll_18 = objectStore_30.getAll(KeyRange_175);
    }

    var delete_15;
    try{
        KeyRange_176 = IDBKeyRange.bound('dNpxRUol', 'OqyKPiILm', true, true);
        delete_15 = objectStore_30.delete(KeyRange_176);
    }
    catch (e){
    }

    var count_34;
    try{
        KeyRange_178 = IDBKeyRange.lowerBound('tgX', false);
        count_34 = objectStore_30.count(KeyRange_178);
    }
    catch (e){
    }

    var count_35;
    try{
        KeyRange_180 = IDBKeyRange.lowerBound('HVHiyKVcOIQo', false);
        count_35 = objectStore_30.count(KeyRange_180);
    }
    catch (e){
    }

    var clear_31 = objectStore_30.clear();
    var index_11 = objectStore_30.index('index_30');
    var getAll_19;
    try{
        KeyRange_182 = IDBKeyRange.bound('WRkNNaE', 'LcpD', true, false);
        getAll_19 = objectStore_30.getAll(KeyRange_182, 1477377501);
    }
    catch (e){
        KeyRange_183 = IDBKeyRange.only('tgX');
        getAll_19 = objectStore_30.getAll(KeyRange_183);
    }

    var count_36 = objectStore_30.count();
    var getAllKeys_17 = objectStore_30.getAllKeys();
    var get_34;
    try{
        KeyRange_184 = IDBKeyRange.only('ppHBruGjE');
        get_34 = objectStore_30.get(KeyRange_184);
    }
    catch (e){
    }

    var count_37;
    try{
        KeyRange_186 = IDBKeyRange.lowerBound('QfCGBnfWSe', true);
        count_37 = objectStore_30.count(KeyRange_186);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_188 = IDBKeyRange.only('HVHiyKVcOIQo');
        get_35 = objectStore_30.get(KeyRange_188);
    }
    catch (e){
    }

    var delete_16;
    try{
        KeyRange_190 = IDBKeyRange.bound('SOjI', 'rLEa', true, false);
        delete_16 = objectStore_30.delete(KeyRange_190);
    }
    catch (e){
    }

    var count_38 = objectStore_30.count();
    var put_38 = objectStore_30.put({f0_b: '<object>', f1_a: '<null>', f2_m: '<object>', f3_s: '<object>', f4_t: '<null>'}, 'hcSomIBuzI');
    var put_39 = objectStore_30.put({f0_l: '<boolean>', f1_s: '<string>', f2_y: '<number>', f3_v: '<number>', f4_s: '<array>', f5_n: '<boolean>'}, 'wDi');
    var count_39 = objectStore_30.count();
    var count_40 = objectStore_30.count();
    txn_29.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_29.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_29.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1528')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};