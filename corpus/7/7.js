let db;
const openRequest = window.indexedDB.open('str_6898', 5327504272104241)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_66', {keypath: 'ZkqpCRQY.xYdAQIJ.JPNQfn.VSxo.zVF.jqZLNNgrdnw.fYaki', autoIncrement: true});
    var index_63 = objectStore_0.createIndex('index_63', 'test', {multiEntry: true});
    var objectStore_1 = db.createObjectStore('objectStore_67', {keypath: 'VsEW', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_68', {autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_69', {keypath: 'tTIurkUFpd'});
    var clear_0 = objectStore_2.clear();
    var index_64 = objectStore_2.createIndex('index_64', 'test', {multiEntry: true});
    var put_0 = objectStore_1.put({f0_d: '<array>', f1_r: '<boolean>', f2_n: '<object>', f3_a: '<object>', f4_p: '<string>', f5_l: '<null>', f6_e: '<string>'}, 'rnElnzF');
    var put_1 = objectStore_1.put({f0_f: '<object>', f1_p: '<null>'}, 'pshBq');
    var index_65 = objectStore_3.createIndex('index_65', 'test', {unique: true});
    var clear_1 = objectStore_0.clear();
    var clear_2 = objectStore_2.clear();
    var count_0 = objectStore_1.count();
    objectStore_0.deleteIndex('index_63')
    var objectStore_4 = db.createObjectStore('objectStore_70', {keypath: 'AofuYk', autoIncrement: true});
    var add_0 = objectStore_4.add({f0_u: '<array>', f1_y: '<object>', f2_z: '<object>', f3_f: '<string>', f4_b: '<number>', f5_k: '<object>', f6_u: '<array>', f7_y: '<boolean>', f8_o: '<boolean>'}, 'zew');
    var add_1 = objectStore_3.add({f0_t: '<array>', f1_c: '<array>', f2_i: '<object>', f3_j: '<boolean>', f4_z: '<null>'}, 'iwGqOTdu');
    var count_1 = objectStore_4.count();
    var add_2 = objectStore_3.add({f0_y: '<string>'}, 'JnabHpOI');
    objectStore_3.deleteIndex('index_65')
    var objectStore_5 = db.createObjectStore('objectStore_71');
    var clear_3 = objectStore_1.clear();
    var count_2;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('rnElnzF', false);
        count_2 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var index_66 = objectStore_1.createIndex('index_66', 'test');
    var getAll_0 = objectStore_4.getAll(970169345);
    var count_3 = objectStore_3.count();
    db.deleteObjectStore('objectStore_70')
    var put_2 = objectStore_0.put({f0_v: '<object>', f1_w: '<boolean>', f2_v: '<string>', f3_z: '<boolean>', f4_u: '<number>', f5_b: '<string>', f6_t: '<string>', f7_z: '<object>', f8_a: '<array>'}, 'zAeoDCyJ');
    var count_4 = objectStore_1.count();
    var add_3 = objectStore_5.add({f0_w: '<number>'}, 'XhNTfC');
    var getAll_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('rnElnzF', 'rnElnzF', false, true);
        getAll_1 = objectStore_1.getAll(KeyRange_2, 1486074503);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('rnElnzF');
        getAll_1 = objectStore_1.getAll(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('iwGqOTdu', 'JnabHpOI', true, true);
        get_0 = objectStore_3.get(KeyRange_4);
    }
    catch (e){
    }

    var put_3 = objectStore_3.put({f0_w: '<null>', f1_j: '<boolean>', f2_n: '<array>', f3_m: '<array>'}, 'IBP');
    var add_4 = objectStore_0.add({f0_i: '<string>', f1_x: '<string>', f2_y: '<number>', f3_e: '<string>', f4_d: '<number>', f5_t: '<object>', f6_j: '<boolean>', f7_b: '<string>'}, 'NNeKql');
    var put_4 = objectStore_1.put({f0_p: '<number>', f1_x: '<number>', f2_s: '<object>'}, 'dSdchnNw');
    var add_5 = objectStore_2.add({f0_k: '<number>'}, 'zWuhrrXcrhu');
    var count_5;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('zWuhrrXcrhu', false);
        count_5 = objectStore_2.count(KeyRange_6);
    }
    catch (e){
    }

    var index_67 = objectStore_3.createIndex('index_67', 'test', {unique: false});
    var add_6 = objectStore_2.add({f0_l: '<number>', f1_m: '<string>', f2_l: '<array>', f3_e: '<object>'}, 'uvpChMar');
    var clear_4 = objectStore_0.clear();
    var index_68 = objectStore_3.createIndex('index_68', 'test', {unique: false});
    var add_7 = objectStore_1.add({f0_d: '<array>', f1_q: '<string>', f2_q: '<array>', f3_e: '<number>', f4_z: '<array>', f5_p: '<boolean>', f6_n: '<boolean>', f7_v: '<object>'}, 'btg');
    var clear_5 = objectStore_1.clear();
    var count_6;
    try{
        KeyRange_8 = IDBKeyRange.bound('XhNTfC', 'XhNTfC', false, true);
        count_6 = objectStore_5.count(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('XhNTfC', false);
        getAllKeys_0 = objectStore_5.getAllKeys(KeyRange_10, 2509019280);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('XhNTfC');
        getAllKeys_0 = objectStore_5.getAllKeys(KeyRange_11);
    }

    var put_5 = objectStore_2.put({f0_o: '<array>', f1_f: '<string>', f2_y: '<boolean>', f3_x: '<null>', f4_m: '<null>', f5_v: '<null>', f6_h: '<null>', f7_s: '<string>', f8_g: '<object>', f9_x: '<null>'}, 'cqKyHby');
    var clear_6 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_66')
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('uvpChMar', false);
        get_1 = objectStore_2.get(KeyRange_12);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('zWuhrrXcrhu', 'zWuhrrXcrhu', true, true);
        get_2 = objectStore_2.get(KeyRange_14);
    }
    catch (e){
    }

    var index_69 = objectStore_3.createIndex('index_69', 'test');
    var objectStore_6 = db.createObjectStore('objectStore_72', {keypath: 'kOwIBNFYjbrj'});
    var getAllKeys_1 = objectStore_3.getAllKeys(562378576);
    var index_70 = objectStore_5.createIndex('index_70', 'test', {multiEntry: false});
    var count_7;
    try{
        KeyRange_16 = IDBKeyRange.only('XhNTfC');
        count_7 = objectStore_5.count(KeyRange_16);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('zWuhrrXcrhu', true);
        count_8 = objectStore_2.count(KeyRange_18);
    }
    catch (e){
    }

    var put_6 = objectStore_5.put({f0_y: '<array>'}, 'SyntkCjY');
    var put_7 = objectStore_1.put({f0_x: '<boolean>', f1_h: '<boolean>'}, 'eaxU');
    var put_8 = objectStore_5.put({f0_d: '<object>', f1_j: '<string>', f2_a: '<string>', f3_m: '<array>'}, 'TUSlfFLKGMrQ');
    var getAllKeys_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('JnabHpOI', 'IBP', false, true);
        getAllKeys_2 = objectStore_3.getAllKeys(KeyRange_20, 1682823551);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('iwGqOTdu');
        getAllKeys_2 = objectStore_3.getAllKeys(KeyRange_21);
    }

    var clear_7 = objectStore_2.clear();
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('JnabHpOI', 'JnabHpOI', true, true);
        get_3 = objectStore_3.get(KeyRange_22);
    }
    catch (e){
    }

    var count_9 = objectStore_5.count();
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('cqKyHby', true);
        get_4 = objectStore_2.get(KeyRange_24);
    }
    catch (e){
    }

    var objectStore_7 = db.createObjectStore('objectStore_73', {keypath: 'sDBqgBkjih', autoIncrement: true});
    var getAll_2;
    try{
        KeyRange_26 = IDBKeyRange.only('btg');
        getAll_2 = objectStore_1.getAll(KeyRange_26, 3114339020);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('btg');
        getAll_2 = objectStore_1.getAll(KeyRange_27);
    }

    var clear_8 = objectStore_7.clear();
    var clear_9 = objectStore_2.clear();
    var clear_10 = objectStore_6.clear();
    var clear_11 = objectStore_5.clear();
    var add_8 = objectStore_7.add({f0_u: '<null>', f1_o: '<null>', f2_r: '<boolean>', f3_p: '<boolean>', f4_d: '<array>'}, 'MtZKDHqPKZ');
    db.deleteObjectStore('objectStore_69')
    objectStore_1.deleteIndex('index_66')
    var getAllKeys_3 = objectStore_1.getAllKeys();
    var clear_12 = objectStore_6.clear();
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('cqKyHby', false);
        get_5 = objectStore_2.get(KeyRange_28);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.only('dSdchnNw');
        get_6 = objectStore_1.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_13 = objectStore_2.clear();
    var getAll_3;
    try{
        KeyRange_32 = IDBKeyRange.only('MtZKDHqPKZ');
        getAll_3 = objectStore_7.getAll(KeyRange_32, 3155537416);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('MtZKDHqPKZ');
        getAll_3 = objectStore_7.getAll(KeyRange_33);
    }

    var put_9 = objectStore_6.put({f0_y: '<string>'}, 'ibEQCllkbEH');
    var clear_14 = objectStore_2.clear();
    var get_7;
    try{
        KeyRange_34 = IDBKeyRange.only('uvpChMar');
        get_7 = objectStore_2.get(KeyRange_34);
    }
    catch (e){
    }

    var put_10 = objectStore_5.put({f0_u: '<string>', f1_k: '<array>', f2_x: '<boolean>', f3_l: '<object>', f4_z: '<object>', f5_n: '<number>'}, 'RvMNpyxMs');
    var index_71 = objectStore_5.createIndex('index_71', 'test', {multiEntry: false});
    var clear_15 = objectStore_7.clear();
    var count_10 = objectStore_5.count();
    db.deleteObjectStore('objectStore_73')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_70 = db.transaction(['objectStore_72'], 'readonly', {durability:"relaxed"})
    var objectStore_72;
    txn_70.objectStore('objectStore_72')
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('ibEQCllkbEH', false);
        get_8 = objectStore_72.get(KeyRange_36);
    }
    catch (e){
    }

    var clear_16 = objectStore_72.clear();
    var getAllKeys_4 = objectStore_72.getAllKeys(1249039878);
    var clear_17 = objectStore_72.clear();
    var add_9 = objectStore_72.add({f0_v: '<string>', f1_k: '<object>', f2_u: '<number>'}, 'CmD');
    var add_10 = objectStore_72.add({f0_i: '<boolean>', f1_f: '<array>', f2_x: '<object>', f3_e: '<number>', f4_d: '<number>', f5_x: '<string>', f6_b: '<boolean>', f7_p: '<null>', f8_h: '<number>'}, 'ohi');
    var getAll_4 = objectStore_72.getAll(697528247);
    var clear_18 = objectStore_72.clear();
    var count_11 = objectStore_72.count();
    var clear_19 = objectStore_72.clear();
    var add_11 = objectStore_72.add({f0_i: '<number>', f1_g: '<boolean>', f2_y: '<object>', f3_g: '<boolean>', f4_h: '<string>', f5_a: '<array>', f6_p: '<object>'}, 'pLRMBsdY');
    var get_9;
    try{
        KeyRange_38 = IDBKeyRange.bound('pLRMBsdY', 'ibEQCllkbEH', false, false);
        get_9 = objectStore_72.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_72.getAllKeys(229675791);
    var add_12 = objectStore_72.add({f0_c: '<boolean>', f1_y: '<object>', f2_w: '<null>', f3_b: '<boolean>', f4_s: '<array>', f5_b: '<null>', f6_f: '<number>', f7_j: '<string>'}, 'qzNvMBuUiBGa');
    var put_11 = objectStore_72.put({f0_m: '<null>', f1_g: '<array>', f2_p: '<string>', f3_j: '<boolean>', f4_e: '<array>', f5_d: '<string>'}, 'YxNhIIcUfgkC');
    var getAllKeys_6 = objectStore_72.getAllKeys(4204258946);
    var getAllKeys_7;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('CmD', false);
        getAllKeys_7 = objectStore_72.getAllKeys(KeyRange_40);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('YxNhIIcUfgkC');
        getAllKeys_7 = objectStore_72.getAllKeys(KeyRange_41);
    }

    var delete_0;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('ohi', true);
        delete_0 = objectStore_72.delete(KeyRange_42);
    }
    catch (e){
    }

    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_71 = db.transaction(['objectStore_68', 'objectStore_67', 'objectStore_72'], 'readonly', {durability:"relaxed"})
    var objectStore_68;
    txn_70.objectStore('objectStore_68')
    var delete_1;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('uvpChMar', false);
        delete_1 = objectStore_68.delete(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_46 = IDBKeyRange.bound('uvpChMar', 'zWuhrrXcrhu', true, false);
        getAllKeys_8 = objectStore_68.getAllKeys(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('zWuhrrXcrhu');
        getAllKeys_8 = objectStore_68.getAllKeys(KeyRange_47);
    }

    var add_13 = objectStore_68.add({f0_y: '<string>', f1_k: '<number>', f2_k: '<string>', f3_l: '<null>', f4_s: '<object>', f5_m: '<array>', f6_h: '<array>'}, 'XktZGRHcZWpm');
    var count_12 = objectStore_68.count();
    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.bound('cqKyHby', 'uvpChMar', true, true);
        get_10 = objectStore_68.get(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_50 = IDBKeyRange.only('zWuhrrXcrhu');
        getAllKeys_9 = objectStore_68.getAllKeys(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('cqKyHby');
        getAllKeys_9 = objectStore_68.getAllKeys(KeyRange_51);
    }

    var put_12 = objectStore_68.put({f0_z: '<boolean>', f1_w: '<boolean>', f2_e: '<number>', f3_m: '<number>', f4_z: '<null>', f5_k: '<array>'}, 'dRvKioKVS');
    var put_13 = objectStore_68.put({f0_h: '<object>', f1_r: '<number>', f2_d: '<array>', f3_h: '<boolean>', f4_u: '<boolean>', f5_c: '<number>', f6_v: '<string>', f7_x: '<string>', f8_m: '<array>'}, 'AjSuMBMK');
    var clear_20 = objectStore_68.clear();
    var clear_21 = objectStore_68.clear();
    var put_14 = objectStore_68.put({f0_o: '<number>', f1_j: '<array>', f2_k: '<null>', f3_f: '<number>'}, 'EGSmFVBT');
    var clear_22 = objectStore_68.clear();
    var get_11;
    try{
        KeyRange_52 = IDBKeyRange.bound('cqKyHby', 'uvpChMar', true, true);
        get_11 = objectStore_68.get(KeyRange_52);
    }
    catch (e){
    }

    var clear_23 = objectStore_68.clear();
    var clear_24 = objectStore_68.clear();
    var add_14 = objectStore_68.add({f0_b: '<string>', f1_g: '<boolean>', f2_n: '<array>', f3_i: '<string>', f4_k: '<object>', f5_p: '<boolean>', f6_i: '<number>', f7_q: '<array>', f8_r: '<string>', f9_g: '<array>'}, 'ZBTGktlaThT');
    var clear_25 = objectStore_68.clear();
    var delete_2;
    try{
        KeyRange_54 = IDBKeyRange.bound('dRvKioKVS', 'ZBTGktlaThT', false, false);
        delete_2 = objectStore_68.delete(KeyRange_54);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_56 = IDBKeyRange.bound('EGSmFVBT', 'ZBTGktlaThT', true, false);
        get_12 = objectStore_68.get(KeyRange_56);
    }
    catch (e){
    }

    var put_15 = objectStore_68.put({f0_b: '<object>', f1_j: '<null>', f2_o: '<number>', f3_l: '<number>', f4_x: '<number>'}, 'toiakLYB');
    var count_13 = objectStore_68.count();
    var count_14 = objectStore_68.count();
    var get_13;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('dRvKioKVS', false);
        get_13 = objectStore_68.get(KeyRange_58);
    }
    catch (e){
    }

    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_72 = db.transaction(['objectStore_71', 'objectStore_67'], 'readwrite', {durability:"relaxed"})
    var objectStore_71;
    txn_71.objectStore('objectStore_71')
    var get_14;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('TUSlfFLKGMrQ', false);
        get_14 = objectStore_71.get(KeyRange_60);
    }
    catch (e){
    }

    var getAllKeys_10 = objectStore_71.getAllKeys();
    var put_16 = objectStore_71.put({f0_b: '<boolean>', f1_n: '<boolean>', f2_i: '<object>', f3_x: '<null>', f4_t: '<null>', f5_l: '<null>', f6_n: '<null>', f7_v: '<object>'}, 'HetttL');
    var count_15 = objectStore_71.count();
    var clear_26 = objectStore_71.clear();
    var clear_27 = objectStore_71.clear();
    var delete_3;
    try{
        KeyRange_62 = IDBKeyRange.only('HetttL');
        delete_3 = objectStore_71.delete(KeyRange_62);
    }
    catch (e){
    }

    var count_16 = objectStore_71.count();
    var delete_4;
    try{
        KeyRange_64 = IDBKeyRange.only('TUSlfFLKGMrQ');
        delete_4 = objectStore_71.delete(KeyRange_64);
    }
    catch (e){
    }

    var put_17 = objectStore_71.put({f0_s: '<boolean>', f1_i: '<array>', f2_z: '<null>'}, 'qPlLmCxWS');
    var getAll_5;
    try{
        KeyRange_66 = IDBKeyRange.only('qPlLmCxWS');
        getAll_5 = objectStore_71.getAll(KeyRange_66, 2103284045);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('TUSlfFLKGMrQ');
        getAll_5 = objectStore_71.getAll(KeyRange_67);
    }

    var put_18 = objectStore_71.put({f0_q: '<string>', f1_p: '<array>', f2_v: '<string>', f3_q: '<array>', f4_w: '<boolean>', f5_v: '<array>', f6_f: '<array>', f7_h: '<number>', f8_y: '<string>', f9_o: '<object>'}, 'frHxgVE');
    var add_15 = objectStore_71.add({f0_d: '<object>', f1_k: '<array>', f2_g: '<array>', f3_m: '<boolean>', f4_z: '<number>', f5_n: '<string>'}, 'RPSspdrLhv');
    var add_16 = objectStore_71.add({f0_u: '<string>', f1_x: '<object>', f2_r: '<object>', f3_o: '<boolean>', f4_s: '<null>', f5_i: '<number>', f6_u: '<boolean>', f7_p: '<boolean>'}, 'plh');
    var get_15;
    try{
        KeyRange_68 = IDBKeyRange.only('TUSlfFLKGMrQ');
        get_15 = objectStore_71.get(KeyRange_68);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_70 = IDBKeyRange.bound('frHxgVE', 'RPSspdrLhv', false, false);
        get_16 = objectStore_71.get(KeyRange_70);
    }
    catch (e){
    }

    var put_19 = objectStore_71.put({f0_e: '<object>', f1_r: '<object>'}, 'erDelp');
    var get_17;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('TUSlfFLKGMrQ', false);
        get_17 = objectStore_71.get(KeyRange_72);
    }
    catch (e){
    }

    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_73 = db.transaction(['objectStore_72', 'objectStore_68'], 'readwrite', {durability:"default"})
    var objectStore_72;
    txn_71.objectStore('objectStore_72')
    var get_18;
    try{
        KeyRange_74 = IDBKeyRange.bound('ibEQCllkbEH', 'ohi', true, false);
        get_18 = objectStore_72.get(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_11 = objectStore_72.getAllKeys();
    var add_17 = objectStore_72.add({f0_v: '<null>', f1_o: '<array>'}, 'KBZHMoazInCh');
    var clear_28 = objectStore_72.clear();
    var put_20 = objectStore_72.put({f0_a: '<object>', f1_o: '<object>'}, 'IaRmYPN');
    var get_19;
    try{
        KeyRange_76 = IDBKeyRange.only('KBZHMoazInCh');
        get_19 = objectStore_72.get(KeyRange_76);
    }
    catch (e){
    }

    var add_18 = objectStore_72.add({f0_y: '<null>', f1_q: '<object>', f2_c: '<string>', f3_e: '<array>', f4_u: '<number>', f5_y: '<null>', f6_x: '<boolean>', f7_n: '<object>', f8_y: '<string>', f9_i: '<boolean>'}, 'yniPCQE');
    var count_17;
    try{
        KeyRange_78 = IDBKeyRange.bound('pLRMBsdY', 'pLRMBsdY', false, true);
        count_17 = objectStore_72.count(KeyRange_78);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_80 = IDBKeyRange.bound('qzNvMBuUiBGa', 'YxNhIIcUfgkC', true, false);
        count_18 = objectStore_72.count(KeyRange_80);
    }
    catch (e){
    }

    var add_19 = objectStore_72.add({f0_t: '<null>', f1_f: '<object>', f2_t: '<string>', f3_a: '<number>', f4_w: '<null>', f5_x: '<null>', f6_b: '<boolean>', f7_e: '<array>'}, 'kAMzoXkOHlB');
    var put_21 = objectStore_72.put({f0_z: '<null>', f1_m: '<number>'}, 'SaHbrlLGcFhH');
    var add_20 = objectStore_72.add({f0_w: '<boolean>', f1_j: '<boolean>'}, 'SaY');
    var put_22 = objectStore_72.put({f0_l: '<null>', f1_g: '<string>'}, 'vzBPrzHra');
    var getAllKeys_12 = objectStore_72.getAllKeys(3928586330);
    var add_21 = objectStore_72.add({f0_z: '<number>', f1_x: '<boolean>', f2_x: '<number>', f3_k: '<string>', f4_s: '<object>', f5_k: '<null>', f6_y: '<string>', f7_d: '<object>', f8_b: '<boolean>', f9_t: '<array>'}, 'eRMG');
    var put_23 = objectStore_72.put({f0_o: '<boolean>', f1_s: '<object>', f2_r: '<boolean>', f3_f: '<object>', f4_m: '<object>'}, 'XDEzOKZa');
    var getAllKeys_13 = objectStore_72.getAllKeys(1552141648);
    var clear_29 = objectStore_72.clear();
    var clear_30 = objectStore_72.clear();
    var add_22 = objectStore_72.add({f0_x: '<boolean>', f1_b: '<null>', f2_z: '<null>', f3_q: '<boolean>', f4_a: '<number>', f5_i: '<boolean>', f6_x: '<array>'}, 'McgDWj');
    var put_24 = objectStore_72.put({f0_c: '<null>', f1_w: '<null>'}, 'PSziyRKEltp');
    var add_23 = objectStore_72.add({f0_i: '<array>', f1_d: '<object>', f2_p: '<string>', f3_k: '<object>', f4_k: '<array>', f5_x: '<string>', f6_w: '<object>'}, 'rQfQCKAKNm');
    txn_71.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_74 = db.transaction(['objectStore_72', 'objectStore_68'], 'readonly', {durability:"relaxed"})
    var objectStore_68;
    txn_73.objectStore('objectStore_68')
    var add_24 = objectStore_68.add({f0_u: '<null>', f1_u: '<array>', f2_h: '<boolean>', f3_n: '<object>', f4_u: '<number>'}, 'IBDjyOicTBk');
    var add_25 = objectStore_68.add({f0_c: '<array>', f1_a: '<object>', f2_j: '<array>', f3_m: '<boolean>', f4_j: '<number>', f5_q: '<boolean>', f6_a: '<object>', f7_r: '<string>'}, 'XCNRlojDd');
    var index_0 = objectStore_68.index('index_64');
    var count_19 = objectStore_68.count();
    var get_20;
    try{
        KeyRange_82 = IDBKeyRange.bound('XktZGRHcZWpm', 'AjSuMBMK', false, false);
        get_20 = objectStore_68.get(KeyRange_82);
    }
    catch (e){
    }

    var getAllKeys_14;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('XCNRlojDd', true);
        getAllKeys_14 = objectStore_68.getAllKeys(KeyRange_84, 2057852996);
    }
    catch (e){
        KeyRange_85 = IDBKeyRange.only('dRvKioKVS');
        getAllKeys_14 = objectStore_68.getAllKeys(KeyRange_85);
    }

    var clear_31 = objectStore_68.clear();
    var count_20 = objectStore_68.count();
    var put_25 = objectStore_68.put({f0_l: '<object>', f1_r: '<number>', f2_x: '<array>', f3_z: '<array>', f4_z: '<object>'}, 'PouWBPv');
    var getAll_6 = objectStore_68.getAll(2041378299);
    var put_26 = objectStore_68.put({f0_q: '<object>', f1_r: '<null>', f2_a: '<boolean>', f3_c: '<array>', f4_v: '<boolean>', f5_m: '<null>', f6_s: '<number>', f7_y: '<array>', f8_z: '<string>'}, 'BUCpdNFmECNG');
    var delete_5;
    try{
        KeyRange_86 = IDBKeyRange.bound('IBDjyOicTBk', 'XktZGRHcZWpm', false, false);
        delete_5 = objectStore_68.delete(KeyRange_86);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('dRvKioKVS', true);
        get_21 = objectStore_68.get(KeyRange_88);
    }
    catch (e){
    }

    var add_26 = objectStore_68.add({f0_z: '<number>', f1_y: '<string>', f2_h: '<string>', f3_g: '<null>', f4_z: '<boolean>', f5_y: '<boolean>', f6_k: '<number>'}, 'rYOEdzM');
    var put_27 = objectStore_68.put({f0_z: '<boolean>', f1_o: '<object>', f2_b: '<null>', f3_u: '<string>', f4_l: '<null>', f5_p: '<boolean>', f6_x: '<null>'}, 'LUQlMwj');
    var add_27 = objectStore_68.add({f0_n: '<string>', f1_f: '<string>', f2_i: '<string>', f3_q: '<object>', f4_l: '<array>', f5_j: '<boolean>'}, 'uCxC');
    var add_28 = objectStore_68.add({f0_w: '<object>', f1_c: '<number>', f2_n: '<boolean>', f3_u: '<boolean>', f4_r: '<array>'}, 'TmQ');
    var put_28 = objectStore_68.put({f0_g: '<null>', f1_m: '<number>', f2_p: '<boolean>', f3_g: '<null>', f4_d: '<string>', f5_r: '<object>', f6_d: '<null>', f7_t: '<object>', f8_f: '<number>', f9_p: '<string>'}, 'ymdIQSGv');
    var count_21 = objectStore_68.count();
    var add_29 = objectStore_68.add({f0_n: '<string>', f1_z: '<null>', f2_n: '<null>'}, 'seoYhaLoE');
    var index_1 = objectStore_68.index('index_64');
    var clear_32 = objectStore_68.clear();
    var index_2 = objectStore_68.index('index_64');
    var add_30 = objectStore_68.add({f0_l: '<null>', f1_f: '<boolean>', f2_e: '<number>', f3_z: '<null>'}, 'ZhZZbgEy');
    var get_22;
    try{
        KeyRange_90 = IDBKeyRange.bound('dRvKioKVS', 'PouWBPv', false, false);
        get_22 = objectStore_68.get(KeyRange_90);
    }
    catch (e){
    }

    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_73.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_71.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_75 = db.transaction(['objectStore_67', 'objectStore_68', 'objectStore_72'], 'readonly', {durability:"relaxed"})
    var objectStore_68;
    txn_73.objectStore('objectStore_68')
    var get_23;
    try{
        KeyRange_92 = IDBKeyRange.bound('PouWBPv', 'uvpChMar', false, false);
        get_23 = objectStore_68.get(KeyRange_92);
    }
    catch (e){
    }

    var clear_33 = objectStore_68.clear();
    var add_31 = objectStore_68.add({f0_t: '<null>', f1_h: '<object>', f2_t: '<boolean>', f3_l: '<null>', f4_m: '<null>', f5_u: '<string>', f6_c: '<null>', f7_l: '<null>', f8_p: '<object>'}, 'hfMb');
    var getAll_7 = objectStore_68.getAll();
    var count_22;
    try{
        KeyRange_94 = IDBKeyRange.only('uCxC');
        count_22 = objectStore_68.count(KeyRange_94);
    }
    catch (e){
    }

    var clear_34 = objectStore_68.clear();
    var get_24;
    try{
        KeyRange_96 = IDBKeyRange.bound('ZhZZbgEy', 'zWuhrrXcrhu', true, false);
        get_24 = objectStore_68.get(KeyRange_96);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_98 = IDBKeyRange.bound('ZhZZbgEy', 'XCNRlojDd', true, true);
        get_25 = objectStore_68.get(KeyRange_98);
    }
    catch (e){
    }

    var count_23;
    try{
        KeyRange_100 = IDBKeyRange.lowerBound('toiakLYB', true);
        count_23 = objectStore_68.count(KeyRange_100);
    }
    catch (e){
    }

    var count_24 = objectStore_68.count();
    var clear_35 = objectStore_68.clear();
    var add_32 = objectStore_68.add({f0_v: '<boolean>', f1_m: '<array>', f2_y: '<array>'}, 'QTDALZQm');
    var put_29 = objectStore_68.put({f0_y: '<boolean>', f1_m: '<array>'}, 'xhQcNTAp');
    var get_26;
    try{
        KeyRange_102 = IDBKeyRange.only('uCxC');
        get_26 = objectStore_68.get(KeyRange_102);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_104 = IDBKeyRange.bound('PouWBPv', 'EGSmFVBT', true, true);
        get_27 = objectStore_68.get(KeyRange_104);
    }
    catch (e){
    }

    var get_28;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('LUQlMwj', true);
        get_28 = objectStore_68.get(KeyRange_106);
    }
    catch (e){
    }

    var add_33 = objectStore_68.add({f0_e: '<string>', f1_w: '<array>', f2_u: '<object>', f3_j: '<string>', f4_l: '<string>', f5_m: '<array>', f6_y: '<object>', f7_w: '<array>', f8_l: '<null>'}, 'TTbTMJ');
    var delete_6;
    try{
        KeyRange_108 = IDBKeyRange.bound('LUQlMwj', 'TmQ', false, true);
        delete_6 = objectStore_68.delete(KeyRange_108);
    }
    catch (e){
    }

    var put_30 = objectStore_68.put({f0_b: '<array>', f1_z: '<object>', f2_j: '<object>', f3_o: '<number>', f4_p: '<null>'}, 'ZRlV');
    var put_31 = objectStore_68.put({f0_k: '<boolean>', f1_g: '<number>', f2_y: '<string>', f3_w: '<boolean>', f4_g: '<object>', f5_x: '<string>'}, 'dsHOOekusom');
    var getAllKeys_15 = objectStore_68.getAllKeys(2775358966);
    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_73.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_76 = db.transaction(['objectStore_67', 'objectStore_72', 'objectStore_71'], 'readwrite', {durability:"relaxed"})
    var objectStore_72;
    txn_73.objectStore('objectStore_72')
    var count_25;
    try{
        KeyRange_110 = IDBKeyRange.bound('yniPCQE', 'YxNhIIcUfgkC', true, false);
        count_25 = objectStore_72.count(KeyRange_110);
    }
    catch (e){
    }

    var get_29;
    try{
        KeyRange_112 = IDBKeyRange.bound('XDEzOKZa', 'rQfQCKAKNm', false, false);
        get_29 = objectStore_72.get(KeyRange_112);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_114 = IDBKeyRange.only('rQfQCKAKNm');
        count_26 = objectStore_72.count(KeyRange_114);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_116 = IDBKeyRange.bound('rQfQCKAKNm', 'KBZHMoazInCh', false, true);
        count_27 = objectStore_72.count(KeyRange_116);
    }
    catch (e){
    }

    var getAllKeys_16;
    try{
        KeyRange_118 = IDBKeyRange.bound('SaHbrlLGcFhH', 'YxNhIIcUfgkC', false, false);
        getAllKeys_16 = objectStore_72.getAllKeys(KeyRange_118);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('pLRMBsdY');
        getAllKeys_16 = objectStore_72.getAllKeys(KeyRange_119);
    }

    var count_28;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('ohi', false);
        count_28 = objectStore_72.count(KeyRange_120);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_122 = IDBKeyRange.only('rQfQCKAKNm');
        getAll_8 = objectStore_72.getAll(KeyRange_122, 3837591520);
    }
    catch (e){
        KeyRange_123 = IDBKeyRange.only('XDEzOKZa');
        getAll_8 = objectStore_72.getAll(KeyRange_123);
    }

    var get_30;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('McgDWj', false);
        get_30 = objectStore_72.get(KeyRange_124);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_126 = IDBKeyRange.bound('yniPCQE', 'vzBPrzHra', false, false);
        get_31 = objectStore_72.get(KeyRange_126);
    }
    catch (e){
    }

    var clear_36 = objectStore_72.clear();
    var clear_37 = objectStore_72.clear();
    var add_34 = objectStore_72.add({f0_j: '<number>'}, 'RNquxFN');
    var get_32;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('ohi', true);
        get_32 = objectStore_72.get(KeyRange_128);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_130 = IDBKeyRange.only('ohi');
        count_29 = objectStore_72.count(KeyRange_130);
    }
    catch (e){
    }

    var getAllKeys_17;
    try{
        KeyRange_132 = IDBKeyRange.bound('vzBPrzHra', 'ibEQCllkbEH', false, false);
        getAllKeys_17 = objectStore_72.getAllKeys(KeyRange_132);
    }
    catch (e){
        KeyRange_133 = IDBKeyRange.only('vzBPrzHra');
        getAllKeys_17 = objectStore_72.getAllKeys(KeyRange_133);
    }

    var count_30 = objectStore_72.count();
    var clear_38 = objectStore_72.clear();
    var put_32 = objectStore_72.put({f0_h: '<number>', f1_b: '<null>', f2_l: '<boolean>', f3_f: '<boolean>', f4_b: '<null>', f5_f: '<number>'}, 'wFoRQjZZTQy');
    var getAll_9;
    try{
        KeyRange_134 = IDBKeyRange.bound('ibEQCllkbEH', 'IaRmYPN', true, true);
        getAll_9 = objectStore_72.getAll(KeyRange_134, 1055586619);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('XDEzOKZa');
        getAll_9 = objectStore_72.getAll(KeyRange_135);
    }

    txn_73.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_75.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_77 = db.transaction(['objectStore_67'], 'readonly', {durability:"strict"})
    var objectStore_67;
    txn_75.objectStore('objectStore_67')
    var add_35 = objectStore_67.add({f0_y: '<null>', f1_j: '<string>', f2_x: '<boolean>', f3_e: '<object>', f4_o: '<boolean>', f5_e: '<object>', f6_y: '<array>'}, 'FFieneembyIG');
    var clear_39 = objectStore_67.clear();
    var put_33 = objectStore_67.put({f0_x: '<object>', f1_e: '<number>', f2_n: '<array>', f3_g: '<array>', f4_z: '<null>'}, 'GXcSrnxg');
    var put_34 = objectStore_67.put({f0_o: '<array>'}, 'Gie');
    var put_35 = objectStore_67.put({f0_l: '<array>'}, 'jxZgGDr');
    var count_31 = objectStore_67.count();
    var add_36 = objectStore_67.add({f0_y: '<object>', f1_d: '<null>', f2_a: '<array>', f3_h: '<array>', f4_l: '<string>', f5_j: '<object>', f6_h: '<object>', f7_z: '<boolean>', f8_z: '<array>'}, 'YPjm');
    var get_33;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('btg', true);
        get_33 = objectStore_67.get(KeyRange_136);
    }
    catch (e){
    }

    var clear_40 = objectStore_67.clear();
    var clear_41 = objectStore_67.clear();
    var add_37 = objectStore_67.add({f0_m: '<null>'}, 'LnY');
    var add_38 = objectStore_67.add({f0_q: '<null>', f1_u: '<array>', f2_o: '<string>', f3_m: '<object>', f4_j: '<array>', f5_i: '<array>', f6_s: '<array>', f7_u: '<string>', f8_k: '<object>'}, 'YQScBgAXxqM');
    var clear_42 = objectStore_67.clear();
    var count_32 = objectStore_67.count();
    var count_33 = objectStore_67.count();
    var add_39 = objectStore_67.add({f0_s: '<object>', f1_e: '<boolean>'}, 'zpAgAAVNs');
    var getAllKeys_18 = objectStore_67.getAllKeys();
    var count_34;
    try{
        KeyRange_138 = IDBKeyRange.bound('eaxU', 'rnElnzF', false, false);
        count_34 = objectStore_67.count(KeyRange_138);
    }
    catch (e){
    }

    var add_40 = objectStore_67.add({f0_f: '<string>', f1_h: '<string>', f2_k: '<object>', f3_l: '<number>', f4_t: '<boolean>', f5_h: '<boolean>', f6_r: '<null>', f7_i: '<boolean>'}, 'iNhBtz');
    var add_41 = objectStore_67.add({f0_r: '<string>', f1_l: '<number>', f2_n: '<array>', f3_e: '<null>', f4_o: '<string>', f5_e: '<array>', f6_e: '<number>', f7_e: '<string>', f8_i: '<string>', f9_v: '<number>'}, 'wJZcKbaElb');
    var count_35 = objectStore_67.count();
    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_78 = db.transaction(['objectStore_72', 'objectStore_67', 'objectStore_68'], 'readonly', {durability:"default"})
    var objectStore_67;
    txn_73.objectStore('objectStore_67')
    var add_42 = objectStore_67.add({f0_p: '<array>', f1_u: '<number>', f2_h: '<object>', f3_b: '<null>'}, 'AUo');
    var add_43 = objectStore_67.add({f0_a: '<array>', f1_h: '<object>', f2_s: '<object>', f3_z: '<string>'}, 'PcNCBvs');
    var getAllKeys_19;
    try{
        KeyRange_140 = IDBKeyRange.bound('YQScBgAXxqM', 'eaxU', false, false);
        getAllKeys_19 = objectStore_67.getAllKeys(KeyRange_140, 516781447);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('AUo');
        getAllKeys_19 = objectStore_67.getAllKeys(KeyRange_141);
    }

    var put_36 = objectStore_67.put({f0_p: '<array>', f1_g: '<object>', f2_c: '<boolean>', f3_x: '<string>'}, 'xGRfocWHuwf');
    var getAllKeys_20 = objectStore_67.getAllKeys(3632271680);
    var put_37 = objectStore_67.put({f0_r: '<array>', f1_i: '<array>', f2_q: '<boolean>', f3_t: '<null>', f4_u: '<string>'}, 'EExYDmGN');
    var delete_7;
    try{
        KeyRange_142 = IDBKeyRange.only('GXcSrnxg');
        delete_7 = objectStore_67.delete(KeyRange_142);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_144 = IDBKeyRange.bound('AUo', 'zpAgAAVNs', true, false);
        get_34 = objectStore_67.get(KeyRange_144);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_146 = IDBKeyRange.bound('AUo', 'PcNCBvs', false, true);
        get_35 = objectStore_67.get(KeyRange_146);
    }
    catch (e){
    }

    var get_36;
    try{
        KeyRange_148 = IDBKeyRange.bound('YQScBgAXxqM', 'eaxU', false, true);
        get_36 = objectStore_67.get(KeyRange_148);
    }
    catch (e){
    }

    var clear_43 = objectStore_67.clear();
    var get_37;
    try{
        KeyRange_150 = IDBKeyRange.only('dSdchnNw');
        get_37 = objectStore_67.get(KeyRange_150);
    }
    catch (e){
    }

    var add_44 = objectStore_67.add({f0_h: '<null>', f1_v: '<array>', f2_x: '<boolean>', f3_j: '<string>', f4_e: '<array>', f5_l: '<number>', f6_v: '<null>', f7_m: '<null>'}, 'csprWFSTGyg');
    var add_45 = objectStore_67.add({f0_j: '<string>', f1_u: '<null>', f2_d: '<array>'}, 'HfiHCyo');
    var put_38 = objectStore_67.put({f0_y: '<null>', f1_q: '<number>', f2_a: '<number>', f3_y: '<array>', f4_k: '<object>', f5_t: '<boolean>', f6_g: '<boolean>'}, 'bpViOOpDl');
    var getAllKeys_21 = objectStore_67.getAllKeys();
    var get_38;
    try{
        KeyRange_152 = IDBKeyRange.bound('LnY', 'zpAgAAVNs', false, true);
        get_38 = objectStore_67.get(KeyRange_152);
    }
    catch (e){
    }

    txn_77.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_76.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_75.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_79 = db.transaction(['objectStore_67', 'objectStore_72', 'objectStore_68', 'objectStore_71'], 'readwrite', {durability:"default"})
    var objectStore_68;
    txn_71.objectStore('objectStore_68')
    var getAllKeys_22;
    try{
        KeyRange_154 = IDBKeyRange.bound('TTbTMJ', 'XCNRlojDd', false, true);
        getAllKeys_22 = objectStore_68.getAllKeys(KeyRange_154, 3124226760);
    }
    catch (e){
        KeyRange_155 = IDBKeyRange.only('xhQcNTAp');
        getAllKeys_22 = objectStore_68.getAllKeys(KeyRange_155);
    }

    var get_39;
    try{
        KeyRange_156 = IDBKeyRange.bound('AjSuMBMK', 'toiakLYB', false, true);
        get_39 = objectStore_68.get(KeyRange_156);
    }
    catch (e){
    }

    var put_39 = objectStore_68.put({f0_o: '<object>', f1_a: '<number>', f2_i: '<boolean>', f3_m: '<array>', f4_a: '<boolean>'}, 'ePViWAUBtt');
    var get_40;
    try{
        KeyRange_158 = IDBKeyRange.bound('ZBTGktlaThT', 'PouWBPv', false, true);
        get_40 = objectStore_68.get(KeyRange_158);
    }
    catch (e){
    }

    var put_40 = objectStore_68.put({f0_q: '<boolean>', f1_l: '<object>', f2_a: '<object>', f3_m: '<boolean>', f4_m: '<array>', f5_c: '<object>', f6_u: '<number>', f7_p: '<array>', f8_f: '<null>', f9_i: '<array>'}, 'fXfui');
    var get_41;
    try{
        KeyRange_160 = IDBKeyRange.lowerBound('EGSmFVBT', false);
        get_41 = objectStore_68.get(KeyRange_160);
    }
    catch (e){
    }

    var put_41 = objectStore_68.put({f0_l: '<null>'}, 'foCAnlDhZGr');
    var put_42 = objectStore_68.put({f0_k: '<string>', f1_g: '<number>', f2_q: '<boolean>', f3_j: '<object>', f4_n: '<number>', f5_o: '<array>', f6_k: '<string>', f7_m: '<object>', f8_m: '<object>', f9_b: '<array>'}, 'juedyNSPziel');
    var getAll_10;
    try{
        KeyRange_162 = IDBKeyRange.bound('LUQlMwj', 'IBDjyOicTBk', false, true);
        getAll_10 = objectStore_68.getAll(KeyRange_162);
    }
    catch (e){
        KeyRange_163 = IDBKeyRange.only('uvpChMar');
        getAll_10 = objectStore_68.getAll(KeyRange_163);
    }

    var delete_8;
    try{
        KeyRange_164 = IDBKeyRange.bound('hfMb', 'xhQcNTAp', false, false);
        delete_8 = objectStore_68.delete(KeyRange_164);
    }
    catch (e){
    }

    var count_36 = objectStore_68.count();
    var put_43 = objectStore_68.put({f0_b: '<boolean>', f1_v: '<array>', f2_j: '<null>', f3_j: '<boolean>', f4_t: '<object>', f5_y: '<boolean>', f6_h: '<null>', f7_d: '<boolean>'}, 'lHRaxYF');
    var count_37;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('lHRaxYF', true);
        count_37 = objectStore_68.count(KeyRange_166);
    }
    catch (e){
    }

    var get_42;
    try{
        KeyRange_168 = IDBKeyRange.bound('AjSuMBMK', 'toiakLYB', false, true);
        get_42 = objectStore_68.get(KeyRange_168);
    }
    catch (e){
    }

    var getAllKeys_23;
    try{
        KeyRange_170 = IDBKeyRange.only('ymdIQSGv');
        getAllKeys_23 = objectStore_68.getAllKeys(KeyRange_170, 3877320071);
    }
    catch (e){
        KeyRange_171 = IDBKeyRange.only('hfMb');
        getAllKeys_23 = objectStore_68.getAllKeys(KeyRange_171);
    }

    var add_46 = objectStore_68.add({f0_g: '<null>', f1_l: '<number>', f2_o: '<number>', f3_y: '<null>', f4_t: '<object>', f5_b: '<string>', f6_r: '<number>', f7_m: '<array>', f8_x: '<array>', f9_o: '<object>'}, 'RMlqtt');
    var get_43;
    try{
        KeyRange_172 = IDBKeyRange.bound('lHRaxYF', 'cqKyHby', false, false);
        get_43 = objectStore_68.get(KeyRange_172);
    }
    catch (e){
    }

    var get_44;
    try{
        KeyRange_174 = IDBKeyRange.bound('EGSmFVBT', 'foCAnlDhZGr', true, false);
        get_44 = objectStore_68.get(KeyRange_174);
    }
    catch (e){
    }

    var get_45;
    try{
        KeyRange_176 = IDBKeyRange.only('ymdIQSGv');
        get_45 = objectStore_68.get(KeyRange_176);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_178 = IDBKeyRange.only('XCNRlojDd');
        get_46 = objectStore_68.get(KeyRange_178);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_180 = IDBKeyRange.lowerBound('dsHOOekusom', true);
        get_47 = objectStore_68.get(KeyRange_180);
    }
    catch (e){
    }

    txn_78.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_73.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2625')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};