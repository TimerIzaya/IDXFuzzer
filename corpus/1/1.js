let db;
const openRequest = window.indexedDB.open('str_1700', 8338752938739313)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_40', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_41', {keypath: 'NiTnZ'});
    var objectStore_2 = db.createObjectStore('objectStore_42', {keypath: 'QNzvviUE'});
    var objectStore_3 = db.createObjectStore('objectStore_43', {autoIncrement: false});
    var index_39 = objectStore_1.createIndex('index_39', 'test', {unique: true, multiEntry: false});
    var index_40 = objectStore_1.createIndex('index_40', 'test', {unique: true, multiEntry: false});
    var index_41 = objectStore_3.createIndex('index_41', 'test', {multiEntry: false});
    var objectStore_4 = db.createObjectStore('objectStore_44', {keypath: 'lNGWbUvOJabS'});
    var objectStore_5 = db.createObjectStore('objectStore_45', {keypath: 'xSRCih'});
    var index_42 = objectStore_0.createIndex('index_42', 'test', {unique: false, multiEntry: false});
    var objectStore_6 = db.createObjectStore('objectStore_46');
    var index_43 = objectStore_2.createIndex('index_43', 'test', {multiEntry: false});
    var objectStore_7 = db.createObjectStore('objectStore_47', {keypath: 'NMzdoPZRr'});
    var objectStore_8 = db.createObjectStore('objectStore_48', {keypath: 'dMHFqSfK', autoIncrement: true});
    var index_44 = objectStore_5.createIndex('index_44', 'test', {unique: true});
    var index_45 = objectStore_5.createIndex('index_45', 'test', {multiEntry: true});
    var index_46 = objectStore_1.createIndex('index_46', 'test', {multiEntry: false});
    var objectStore_9 = db.createObjectStore('objectStore_49', {keypath: 'hAUUQd'});
    var index_47 = objectStore_7.createIndex('index_47', 'test', {multiEntry: true});
    var objectStore_10 = db.createObjectStore('objectStore_50', {keypath: 'uuoytmYDKZLX', autoIncrement: true});
    var objectStore_11 = db.createObjectStore('objectStore_51', {autoIncrement: true});
    var index_48 = objectStore_11.createIndex('index_48', 'test', {multiEntry: true});
    var index_49 = objectStore_3.createIndex('index_49', 'test', {unique: true, multiEntry: false});
    var objectStore_12 = db.createObjectStore('objectStore_52', {keypath: 'EhsmulGcWlq', autoIncrement: false});
    var objectStore_13 = db.createObjectStore('objectStore_53', {keypath: 'gQsq'});
    var objectStore_14 = db.createObjectStore('objectStore_54', {autoIncrement: false});
    var objectStore_15 = db.createObjectStore('objectStore_55', {keypath: 'EbnXn', autoIncrement: true});
    var index_50 = objectStore_2.createIndex('index_50', 'test', {multiEntry: false});
    var objectStore_16 = db.createObjectStore('objectStore_56');
    var objectStore_17 = db.createObjectStore('objectStore_57');
    var index_51 = objectStore_13.createIndex('index_51', 'test');
    var index_52 = objectStore_11.createIndex('index_52', 'test', {multiEntry: true});
    var index_53 = objectStore_15.createIndex('index_53', 'test', {unique: false});
    var objectStore_18 = db.createObjectStore('objectStore_58', {keypath: 'dcAEqEKPMf.DuqvcWiy', autoIncrement: false});
    var index_54 = objectStore_6.createIndex('index_54', 'test', {multiEntry: true});
    var objectStore_19 = db.createObjectStore('objectStore_59', {keypath: 'QdXarPiW', autoIncrement: true});
    var index_55 = objectStore_16.createIndex('index_55', 'test', {unique: true});
    var index_56 = objectStore_0.createIndex('index_56', 'test', {unique: false, multiEntry: true});
    var index_57 = objectStore_17.createIndex('index_57', 'test', {multiEntry: true});
    var objectStore_20 = db.createObjectStore('objectStore_60');
    var index_58 = objectStore_1.createIndex('index_58', 'test');
    var index_59 = objectStore_2.createIndex('index_59', 'test', {multiEntry: true});
    var index_60 = objectStore_1.createIndex('index_60', 'test', {multiEntry: true});
    var objectStore_21 = db.createObjectStore('objectStore_61', {keypath: 'APl', autoIncrement: true});
    var objectStore_22 = db.createObjectStore('objectStore_62', {autoIncrement: true});
    var objectStore_23 = db.createObjectStore('objectStore_63', {autoIncrement: false});
    var index_61 = objectStore_21.createIndex('index_61', 'test', {unique: false});
    var index_62 = objectStore_20.createIndex('index_62', 'test', {multiEntry: false});
    var index_63 = objectStore_12.createIndex('index_63', 'test', {multiEntry: true});
    var objectStore_24 = db.createObjectStore('objectStore_64');
    var objectStore_25 = db.createObjectStore('objectStore_65', {keypath: 'VJrqFiDwGhE', autoIncrement: false});
    var objectStore_26 = db.createObjectStore('objectStore_66', {keypath: 'YQghUUDTV', autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_67');
    var objectStore_28 = db.createObjectStore('objectStore_68', {keypath: 'xCUrv', autoIncrement: true});
    var objectStore_29 = db.createObjectStore('objectStore_69');
    var objectStore_30 = db.createObjectStore('objectStore_70', {autoIncrement: false});
    var objectStore_31 = db.createObjectStore('objectStore_71', {autoIncrement: true});
    var index_64 = objectStore_5.createIndex('index_64', 'test');
    var objectStore_32 = db.createObjectStore('objectStore_72', {autoIncrement: true});
    var index_65 = objectStore_31.createIndex('index_65', 'test', {unique: false});
    var index_66 = objectStore_3.createIndex('index_66', 'test', {unique: true, multiEntry: true});
    var objectStore_33 = db.createObjectStore('objectStore_73');
    var index_67 = objectStore_26.createIndex('index_67', 'test', {unique: true});
    var objectStore_34 = db.createObjectStore('objectStore_74', {keypath: 'NiTqGNmZB'});
    var index_68 = objectStore_23.createIndex('index_68', 'test', {unique: true, multiEntry: false});
    var index_69 = objectStore_15.createIndex('index_69', 'test', {unique: true});
    var index_70 = objectStore_22.createIndex('index_70', 'test', {unique: true, multiEntry: false});
    var objectStore_35 = db.createObjectStore('objectStore_75');
    var index_71 = objectStore_7.createIndex('index_71', 'test');
    var index_72 = objectStore_7.createIndex('index_72', 'test', {unique: true, multiEntry: false});
    var objectStore_36 = db.createObjectStore('objectStore_76', {keypath: 'nrJtfbyZcoN'});
    var index_73 = objectStore_33.createIndex('index_73', 'test', {unique: true});
    var objectStore_37 = db.createObjectStore('objectStore_77', {keypath: 'MjSsLdhyqYD', autoIncrement: true});
    var objectStore_38 = db.createObjectStore('objectStore_78', {keypath: 'VmfMgBBs.lDVSpXQk.vCNknKHrxA.YgzyDqriuv.rNtGI.gniNscb.GfHyTPMEhL.VvUlmZJYEpR', autoIncrement: true});
    var objectStore_39 = db.createObjectStore('objectStore_79', {keypath: 'owOabcyyrJEK'});
    var objectStore_40 = db.createObjectStore('objectStore_80');
    var index_74 = objectStore_22.createIndex('index_74', 'test');
    var index_75 = objectStore_15.createIndex('index_75', 'test');
    var objectStore_41 = db.createObjectStore('objectStore_81', {autoIncrement: true});
    var index_76 = objectStore_19.createIndex('index_76', 'test', {unique: true, multiEntry: false});
    var objectStore_42 = db.createObjectStore('objectStore_82', {keypath: 'HqnXdV'});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_10 = db.transaction(['objectStore_63', 'objectStore_44', 'objectStore_46'], 'readwrite', {durability:"strict"})
    var objectStore_63 = txn_10.objectStore('objectStore_63');
    var index_0 = objectStore_63.index('index_68');
    var put_0 = objectStore_63.put({f0_m: '<null>', f1_x: '<array>', f2_k: '<object>', f3_h: '<boolean>', f4_j: '<object>', f5_g: '<null>', f6_v: '<object>', f7_r: '<array>', f8_z: '<object>'}, 'npbsiXq');
    var add_0 = objectStore_63.add({f0_w: '<number>', f1_p: '<boolean>', f2_g: '<number>', f3_f: '<null>'}, 'JheKPXqQjYO');
    var count_0 = objectStore_63.count();
    var add_1 = objectStore_63.add({f0_x: '<boolean>', f1_d: '<array>', f2_i: '<number>', f3_r: '<null>', f4_q: '<array>'}, 'mocq');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('mocq', 'mocq', true, false);
        get_0 = objectStore_63.get(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_63.getAllKeys(439403536);
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('npbsiXq', 'npbsiXq', false, true);
        get_1 = objectStore_63.get(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_63.getAllKeys();
    var index_1 = objectStore_63.index('index_68');
    var add_2 = objectStore_63.add({f0_p: '<array>', f1_a: '<number>', f2_k: '<array>', f3_o: '<string>'}, 'uZhDjIxf');
    var getAll_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('npbsiXq', false);
        getAll_0 = objectStore_63.getAll(KeyRange_4, 1738737643);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('mocq');
        getAll_0 = objectStore_63.getAll(KeyRange_5);
    }

    var add_3 = objectStore_63.add({f0_t: '<boolean>', f1_j: '<boolean>', f2_i: '<string>', f3_t: '<object>', f4_e: '<string>', f5_u: '<number>', f6_p: '<string>'}, 'bYsayiqN');
    var put_1 = objectStore_63.put({f0_y: '<string>', f1_q: '<null>', f2_v: '<null>', f3_s: '<boolean>', f4_e: '<object>', f5_c: '<string>', f6_x: '<string>', f7_o: '<string>', f8_p: '<null>', f9_h: '<number>'}, 'iYQHalYd');
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('iYQHalYd', 'npbsiXq', false, true);
        get_2 = objectStore_63.get(KeyRange_6);
    }
    catch (e){
    }

    var put_2 = objectStore_63.put({f0_s: '<number>', f1_m: '<string>', f2_n: '<array>', f3_k: '<null>', f4_s: '<null>', f5_o: '<string>', f6_h: '<boolean>', f7_w: '<object>'}, 'qitbtUDf');
    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('bYsayiqN', 'JheKPXqQjYO', false, false);
        count_1 = objectStore_63.count(KeyRange_8);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.only('uZhDjIxf');
        count_2 = objectStore_63.count(KeyRange_10);
    }
    catch (e){
    }

    var index_2 = objectStore_63.index('index_68');
    var put_3 = objectStore_63.put({f0_t: '<number>', f1_z: '<number>', f2_y: '<null>', f3_y: '<boolean>', f4_x: '<string>', f5_z: '<null>'}, 'kbLHeXlMeS');
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_11 = db.transaction(['objectStore_70', 'objectStore_52'], 'readwrite', {durability:"default"})
    var objectStore_52 = txn_11.objectStore('objectStore_52');
    var clear_0 = objectStore_52.clear();
    var add_4 = objectStore_52.add({f0_r: '<null>', f1_k: '<boolean>', f2_w: '<object>', f3_y: '<null>', f4_f: '<number>'}, 'TQwjd');
    var clear_1 = objectStore_52.clear();
    var add_5 = objectStore_52.add({f0_r: '<array>', f1_z: '<number>', f2_k: '<number>', f3_w: '<object>', f4_g: '<null>', f5_h: '<number>', f6_k: '<object>'}, 'IZPQUNtOJj');
    var put_4 = objectStore_52.put({f0_u: '<boolean>', f1_y: '<object>', f2_l: '<array>', f3_i: '<array>'}, 'nGAiHwqYYK');
    var put_5 = objectStore_52.put({f0_i: '<null>', f1_m: '<array>', f2_b: '<array>', f3_a: '<null>'}, 'JBBhESxUou');
    var add_6 = objectStore_52.add({f0_j: '<null>', f1_z: '<boolean>', f2_o: '<null>', f3_r: '<object>', f4_k: '<object>', f5_h: '<string>', f6_m: '<array>'}, 'AMsCqDv');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('IZPQUNtOJj', 'JBBhESxUou', true, true);
        get_3 = objectStore_52.get(KeyRange_12);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.only('nGAiHwqYYK');
        count_3 = objectStore_52.count(KeyRange_14);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_16 = IDBKeyRange.only('AMsCqDv');
        delete_0 = objectStore_52.delete(KeyRange_16);
    }
    catch (e){
    }

    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_11.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_11.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_12 = db.transaction(['objectStore_51'], 'readonly', {durability:"relaxed"})
    var objectStore_51 = txn_12.objectStore('objectStore_51');
    var index_3 = objectStore_51.index('index_48');
    var index_4 = objectStore_51.index('index_48');
    txn_12.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_12.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_13 = db.transaction(['objectStore_82'], 'readonly', {durability:"strict"})
    var objectStore_82 = txn_13.objectStore('objectStore_82');
    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_13.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_13.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_14 = db.transaction(['objectStore_40'], 'readwrite', {durability:"strict"})
    var objectStore_40 = txn_14.objectStore('objectStore_40');
    var add_7 = objectStore_40.add({f0_d: '<array>'}, 'CediOIuq');
    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('CediOIuq', 'CediOIuq', true, false);
        count_4 = objectStore_40.count(KeyRange_18);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('CediOIuq', 'CediOIuq', false, false);
        get_4 = objectStore_40.get(KeyRange_20);
    }
    catch (e){
    }

    var clear_2 = objectStore_40.clear();
    var put_6 = objectStore_40.put({f0_k: '<null>', f1_y: '<boolean>', f2_r: '<boolean>', f3_e: '<object>'}, 'ENOfq');
    var add_8 = objectStore_40.add({f0_e: '<boolean>', f1_w: '<array>', f2_r: '<string>', f3_s: '<object>', f4_f: '<number>', f5_m: '<null>'}, 'iOctqiuQ');
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('iOctqiuQ', 'iOctqiuQ', true, true);
        get_5 = objectStore_40.get(KeyRange_22);
    }
    catch (e){
    }

    var put_7 = objectStore_40.put({f0_r: '<number>', f1_a: '<array>', f2_s: '<number>', f3_l: '<number>'}, 'oNEMWm');
    var getAll_1 = objectStore_40.getAll(2208400483);
    var getAll_2 = objectStore_40.getAll(1747638307);
    var clear_3 = objectStore_40.clear();
    var getAll_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('CediOIuq', 'oNEMWm', false, false);
        getAll_3 = objectStore_40.getAll(KeyRange_24, 2585745889);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('ENOfq');
        getAll_3 = objectStore_40.getAll(KeyRange_25);
    }

    var getAll_4;
    try{
        KeyRange_26 = IDBKeyRange.only('CediOIuq');
        getAll_4 = objectStore_40.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('oNEMWm');
        getAll_4 = objectStore_40.getAll(KeyRange_27);
    }

    var clear_4 = objectStore_40.clear();
    var put_8 = objectStore_40.put({f0_e: '<object>', f1_a: '<object>', f2_d: '<number>', f3_c: '<number>', f4_s: '<object>', f5_k: '<null>', f6_x: '<array>', f7_s: '<number>'}, 'ZCaByWXdXV');
    var delete_1;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('iOctqiuQ', false);
        delete_1 = objectStore_40.delete(KeyRange_28);
    }
    catch (e){
    }

    var getAll_5 = objectStore_40.getAll(1953094589);
    var count_5;
    try{
        KeyRange_30 = IDBKeyRange.only('iOctqiuQ');
        count_5 = objectStore_40.count(KeyRange_30);
    }
    catch (e){
    }

    var clear_5 = objectStore_40.clear();
    var count_6;
    try{
        KeyRange_32 = IDBKeyRange.only('iOctqiuQ');
        count_6 = objectStore_40.count(KeyRange_32);
    }
    catch (e){
    }

    var add_9 = objectStore_40.add({f0_n: '<boolean>', f1_p: '<string>', f2_r: '<object>', f3_m: '<array>', f4_f: '<array>', f5_g: '<string>', f6_i: '<number>', f7_x: '<object>', f8_z: '<number>'}, 'eyiTKFTP');
    var put_9 = objectStore_40.put({f0_u: '<string>', f1_p: '<object>', f2_y: '<null>', f3_v: '<object>', f4_d: '<string>'}, 'IpviubvNaHXA');
    var put_10 = objectStore_40.put({f0_n: '<array>', f1_s: '<boolean>', f2_g: '<array>', f3_m: '<object>', f4_t: '<string>'}, 'jaBvTh');
    txn_14.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_14.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_15 = db.transaction(['objectStore_46'], 'readwrite', {durability:"relaxed"})
    var objectStore_46 = txn_15.objectStore('objectStore_46');
    var put_11 = objectStore_46.put({f0_j: '<number>', f1_c: '<object>', f2_y: '<null>', f3_t: '<boolean>', f4_m: '<object>', f5_n: '<array>'}, 'Pwz');
    var add_10 = objectStore_46.add({f0_b: '<array>', f1_z: '<string>', f2_x: '<boolean>', f3_r: '<array>'}, 'ouVc');
    var put_12 = objectStore_46.put({f0_l: '<string>', f1_m: '<object>', f2_y: '<number>', f3_r: '<boolean>', f4_r: '<array>', f5_u: '<array>', f6_x: '<number>', f7_h: '<boolean>'}, 'PGIv');
    var put_13 = objectStore_46.put({f0_w: '<object>', f1_v: '<number>', f2_b: '<null>', f3_w: '<null>'}, 'DdDTXT');
    var put_14 = objectStore_46.put({f0_f: '<null>', f1_k: '<array>', f2_d: '<array>', f3_i: '<null>', f4_d: '<boolean>', f5_p: '<string>'}, 'ELVxuHKCc');
    var count_7 = objectStore_46.count();
    var index_5 = objectStore_46.index('index_54');
    var put_15 = objectStore_46.put({f0_j: '<string>', f1_m: '<boolean>', f2_u: '<number>', f3_o: '<boolean>', f4_c: '<string>', f5_t: '<object>', f6_p: '<string>', f7_c: '<number>', f8_y: '<object>'}, 'gdgCOAeDxRUR');
    var clear_6 = objectStore_46.clear();
    var add_11 = objectStore_46.add({f0_w: '<null>', f1_y: '<object>', f2_i: '<number>', f3_m: '<array>'}, 'dFbeWpbLml');
    var count_8 = objectStore_46.count();
    var add_12 = objectStore_46.add({f0_o: '<object>', f1_k: '<object>', f2_h: '<number>', f3_m: '<number>'}, 'rvelBachhHDw');
    var index_6 = objectStore_46.index('index_54');
    var add_13 = objectStore_46.add({f0_o: '<array>', f1_u: '<boolean>', f2_g: '<object>', f3_t: '<number>', f4_k: '<string>'}, 'kolOlEPsk');
    var put_16 = objectStore_46.put({f0_w: '<array>', f1_e: '<boolean>', f2_i: '<null>', f3_r: '<string>', f4_p: '<null>', f5_v: '<string>'}, 'PUjDkaXlRP');
    var clear_7 = objectStore_46.clear();
    var count_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('dFbeWpbLml', 'Pwz', false, true);
        count_9 = objectStore_46.count(KeyRange_34);
    }
    catch (e){
    }

    var put_17 = objectStore_46.put({f0_r: '<array>', f1_u: '<object>', f2_f: '<boolean>', f3_b: '<null>', f4_v: '<array>'}, 'JrOizp');
    txn_15.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_15.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_15.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_16 = db.transaction(['objectStore_75'], 'readwrite', {durability:"default"})
    var objectStore_75 = txn_16.objectStore('objectStore_75');
    var put_18 = objectStore_75.put({f0_k: '<array>', f1_u: '<object>', f2_a: '<boolean>', f3_d: '<string>', f4_o: '<null>', f5_n: '<string>', f6_s: '<string>', f7_d: '<array>', f8_q: '<null>'}, 'afvueufcQMH');
    var clear_8 = objectStore_75.clear();
    var add_14 = objectStore_75.add({f0_a: '<array>', f1_l: '<null>', f2_e: '<object>', f3_p: '<boolean>', f4_b: '<null>', f5_y: '<string>', f6_p: '<string>', f7_d: '<object>', f8_w: '<string>', f9_b: '<null>'}, 'WsVfpYwqbh');
    var clear_9 = objectStore_75.clear();
    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.bound('WsVfpYwqbh', 'WsVfpYwqbh', true, false);
        get_6 = objectStore_75.get(KeyRange_36);
    }
    catch (e){
    }

    var add_15 = objectStore_75.add({f0_v: '<string>', f1_k: '<number>', f2_m: '<number>', f3_v: '<array>', f4_m: '<string>', f5_d: '<null>', f6_v: '<string>'}, 'fqnaC');
    var count_10;
    try{
        KeyRange_38 = IDBKeyRange.bound('fqnaC', 'WsVfpYwqbh', true, false);
        count_10 = objectStore_75.count(KeyRange_38);
    }
    catch (e){
    }

    var put_19 = objectStore_75.put({f0_i: '<array>'}, 'IHbHVQwuwcjw');
    var clear_10 = objectStore_75.clear();
    var getAllKeys_2;
    try{
        KeyRange_40 = IDBKeyRange.bound('afvueufcQMH', 'WsVfpYwqbh', false, false);
        getAllKeys_2 = objectStore_75.getAllKeys(KeyRange_40, 175294352);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('afvueufcQMH');
        getAllKeys_2 = objectStore_75.getAllKeys(KeyRange_41);
    }

    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.bound('WsVfpYwqbh', 'IHbHVQwuwcjw', false, false);
        get_7 = objectStore_75.get(KeyRange_42);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('IHbHVQwuwcjw', false);
        get_8 = objectStore_75.get(KeyRange_44);
    }
    catch (e){
    }

    var count_11 = objectStore_75.count();
    var count_12 = objectStore_75.count();
    txn_16.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_16.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_16.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_17 = db.transaction(['objectStore_63', 'objectStore_82'], 'readwrite', {durability:"relaxed"})
    var objectStore_63 = txn_17.objectStore('objectStore_63');
    var getAll_6 = objectStore_63.getAll(2268936852);
    var put_20 = objectStore_63.put({f0_m: '<number>'}, 'vJGVHM');
    var get_9;
    try{
        KeyRange_46 = IDBKeyRange.bound('kbLHeXlMeS', 'iYQHalYd', false, true);
        get_9 = objectStore_63.get(KeyRange_46);
    }
    catch (e){
    }

    var add_16 = objectStore_63.add({f0_x: '<number>', f1_z: '<string>', f2_f: '<number>', f3_k: '<array>', f4_i: '<object>'}, 'IMaPCfGONlrm');
    var clear_11 = objectStore_63.clear();
    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.only('qitbtUDf');
        get_10 = objectStore_63.get(KeyRange_48);
    }
    catch (e){
    }

    var put_21 = objectStore_63.put({f0_r: '<number>', f1_a: '<string>', f2_d: '<boolean>', f3_k: '<number>', f4_k: '<string>'}, 'FIRyU');
    var put_22 = objectStore_63.put({f0_x: '<object>', f1_v: '<array>', f2_v: '<number>', f3_u: '<number>'}, 'WibCfk');
    var clear_12 = objectStore_63.clear();
    var put_23 = objectStore_63.put({f0_n: '<number>', f1_e: '<number>', f2_u: '<string>', f3_x: '<null>', f4_t: '<array>'}, 'VnwyckZDnzrp');
    var delete_2;
    try{
        KeyRange_50 = IDBKeyRange.bound('VnwyckZDnzrp', 'uZhDjIxf', true, false);
        delete_2 = objectStore_63.delete(KeyRange_50);
    }
    catch (e){
    }

    var clear_13 = objectStore_63.clear();
    var clear_14 = objectStore_63.clear();
    var count_13;
    try{
        KeyRange_52 = IDBKeyRange.bound('qitbtUDf', 'JheKPXqQjYO', true, false);
        count_13 = objectStore_63.count(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_54 = IDBKeyRange.bound('kbLHeXlMeS', 'IMaPCfGONlrm', false, false);
        getAllKeys_3 = objectStore_63.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('uZhDjIxf');
        getAllKeys_3 = objectStore_63.getAllKeys(KeyRange_55);
    }

    var index_7 = objectStore_63.index('index_68');
    txn_17.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_17.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_17.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_18 = db.transaction(['objectStore_76', 'objectStore_67', 'objectStore_47'], 'readwrite', {durability:"relaxed"})
    var objectStore_47 = txn_18.objectStore('objectStore_47');
    var put_24 = objectStore_47.put({f0_j: '<number>', f1_f: '<array>', f2_w: '<array>', f3_w: '<null>', f4_y: '<object>', f5_l: '<boolean>'}, 'Mxb');
    var clear_15 = objectStore_47.clear();
    var count_14 = objectStore_47.count();
    var clear_16 = objectStore_47.clear();
    var get_11;
    try{
        KeyRange_56 = IDBKeyRange.only('Mxb');
        get_11 = objectStore_47.get(KeyRange_56);
    }
    catch (e){
    }

    var clear_17 = objectStore_47.clear();
    var getAll_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('Mxb', 'Mxb', false, false);
        getAll_7 = objectStore_47.getAll(KeyRange_58);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('Mxb');
        getAll_7 = objectStore_47.getAll(KeyRange_59);
    }

    var count_15 = objectStore_47.count();
    var add_17 = objectStore_47.add({f0_n: '<string>', f1_a: '<number>', f2_m: '<object>', f3_t: '<boolean>', f4_e: '<object>', f5_o: '<null>', f6_f: '<number>'}, 'OMgfn');
    var getAllKeys_4;
    try{
        KeyRange_60 = IDBKeyRange.bound('Mxb', 'Mxb', false, true);
        getAllKeys_4 = objectStore_47.getAllKeys(KeyRange_60);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('Mxb');
        getAllKeys_4 = objectStore_47.getAllKeys(KeyRange_61);
    }

    var put_25 = objectStore_47.put({f0_e: '<number>', f1_x: '<null>', f2_d: '<boolean>', f3_d: '<object>', f4_p: '<null>', f5_h: '<number>'}, 'zZVxK');
    var count_16 = objectStore_47.count();
    var get_12;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('Mxb', false);
        get_12 = objectStore_47.get(KeyRange_62);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_64 = IDBKeyRange.only('Mxb');
        getAllKeys_5 = objectStore_47.getAllKeys(KeyRange_64, 1846633122);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('zZVxK');
        getAllKeys_5 = objectStore_47.getAllKeys(KeyRange_65);
    }

    var count_17 = objectStore_47.count();
    var get_13;
    try{
        KeyRange_66 = IDBKeyRange.bound('Mxb', 'OMgfn', false, false);
        get_13 = objectStore_47.get(KeyRange_66);
    }
    catch (e){
    }

    var clear_18 = objectStore_47.clear();
    var get_14;
    try{
        KeyRange_68 = IDBKeyRange.only('zZVxK');
        get_14 = objectStore_47.get(KeyRange_68);
    }
    catch (e){
    }

    var put_26 = objectStore_47.put({f0_j: '<null>'}, 'gon');
    var add_18 = objectStore_47.add({f0_q: '<null>', f1_x: '<array>', f2_n: '<null>', f3_o: '<number>', f4_v: '<string>', f5_w: '<number>'}, 'mLrDZcQ');
    var put_27 = objectStore_47.put({f0_w: '<number>', f1_b: '<null>', f2_v: '<array>', f3_d: '<object>', f4_i: '<string>', f5_d: '<object>', f6_t: '<null>', f7_n: '<object>', f8_i: '<array>'}, 'VUCCyXsoxn');
    txn_18.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_18.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_18.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_19 = db.transaction(['objectStore_71'], 'readwrite', {durability:"relaxed"})
    var objectStore_71 = txn_19.objectStore('objectStore_71');
    var clear_19 = objectStore_71.clear();
    var clear_20 = objectStore_71.clear();
    var clear_21 = objectStore_71.clear();
    var clear_22 = objectStore_71.clear();
    var put_28 = objectStore_71.put({f0_d: '<null>', f1_b: '<number>', f2_n: '<number>', f3_o: '<string>', f4_c: '<null>', f5_u: '<number>', f6_h: '<object>', f7_l: '<number>', f8_x: '<boolean>'}, 'SZkoof');
    var clear_23 = objectStore_71.clear();
    var getAllKeys_6 = objectStore_71.getAllKeys(3164066949);
    var delete_3;
    try{
        KeyRange_70 = IDBKeyRange.bound('SZkoof', 'SZkoof', false, true);
        delete_3 = objectStore_71.delete(KeyRange_70);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_72 = IDBKeyRange.only('SZkoof');
        getAll_8 = objectStore_71.getAll(KeyRange_72, 3904677106);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('SZkoof');
        getAll_8 = objectStore_71.getAll(KeyRange_73);
    }

    var get_15;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('SZkoof', false);
        get_15 = objectStore_71.get(KeyRange_74);
    }
    catch (e){
    }

    var count_18 = objectStore_71.count();
    var add_19 = objectStore_71.add({f0_h: '<number>', f1_h: '<number>'}, 'vnHP');
    var delete_4;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('vnHP', false);
        delete_4 = objectStore_71.delete(KeyRange_76);
    }
    catch (e){
    }

    var clear_24 = objectStore_71.clear();
    var get_16;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('vnHP', true);
        get_16 = objectStore_71.get(KeyRange_78);
    }
    catch (e){
    }

    var index_8 = objectStore_71.index('index_65');
    var getAll_9 = objectStore_71.getAll(3247780858);
    var add_20 = objectStore_71.add({f0_d: '<object>', f1_v: '<string>', f2_i: '<object>', f3_x: '<array>', f4_l: '<null>'}, 'yMOfVT');
    var count_19 = objectStore_71.count();
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