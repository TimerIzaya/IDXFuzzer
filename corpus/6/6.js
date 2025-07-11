let db;
const openRequest = window.indexedDB.open('str_3101', 8076898900164242)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_53', {keypath: 'zIhUsonDw'});
    var index_54 = objectStore_0.createIndex('index_54', 'test', {multiEntry: false});
    var add_0 = objectStore_0.add({f0_f: '<string>', f1_y: '<number>', f2_m: '<boolean>', f3_h: '<array>', f4_d: '<string>', f5_n: '<object>'}, 'oHmLprSn');
    var objectStore_1 = db.createObjectStore('objectStore_54', {autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_55', {autoIncrement: true});
    var put_0 = objectStore_2.put({f0_m: '<boolean>', f1_z: '<string>', f2_r: '<object>'}, 'NHdm');
    var add_1 = objectStore_0.add({f0_r: '<string>', f1_o: '<number>', f2_w: '<array>'}, 'DPCIIzgZRov');
    var add_2 = objectStore_1.add({f0_x: '<string>', f1_r: '<null>', f2_z: '<number>', f3_f: '<array>', f4_t: '<string>', f5_o: '<boolean>', f6_m: '<boolean>', f7_i: '<boolean>', f8_k: '<array>'}, 'ODWVxn');
    var getAll_0 = objectStore_2.getAll(1805905883);
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('ODWVxn');
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_f: '<boolean>', f1_i: '<string>', f2_v: '<object>', f3_z: '<object>'}, 'iGm');
    var objectStore_3 = db.createObjectStore('objectStore_56', {autoIncrement: false});
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('ODWVxn');
        get_0 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_57');
    var put_2 = objectStore_4.put({f0_j: '<string>', f1_q: '<string>', f2_i: '<number>', f3_v: '<string>', f4_s: '<null>', f5_m: '<number>', f6_z: '<boolean>', f7_b: '<object>'}, 'jrNSxFKQr');
    var add_3 = objectStore_2.add({f0_e: '<array>', f1_r: '<boolean>', f2_w: '<null>', f3_w: '<number>'}, 'obrIE');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('jrNSxFKQr', 'jrNSxFKQr', true, false);
        count_1 = objectStore_4.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_6 = IDBKeyRange.only('jrNSxFKQr');
        getAll_1 = objectStore_4.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('jrNSxFKQr');
        getAll_1 = objectStore_4.getAll(KeyRange_7);
    }

    var clear_0 = objectStore_1.clear();
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('NHdm', 'NHdm', true, true);
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('obrIE');
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_9);
    }

    var index_55 = objectStore_4.createIndex('index_55', 'test', {multiEntry: true});
    var put_3 = objectStore_3.put({f0_t: '<string>', f1_u: '<number>', f2_y: '<object>', f3_r: '<object>', f4_c: '<boolean>', f5_m: '<object>', f6_z: '<null>', f7_a: '<null>', f8_g: '<string>'}, 'BxFw');
    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.only('BxFw');
        count_2 = objectStore_3.count(KeyRange_10);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('ODWVxn', 'ODWVxn', false, false);
        delete_0 = objectStore_1.delete(KeyRange_12);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.only('obrIE');
        count_3 = objectStore_2.count(KeyRange_14);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_54');
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('iGm', true);
        count_4 = objectStore_0.count(KeyRange_16);
    }
    catch (e){
    }

    var count_5 = objectStore_2.count();
    var objectStore_5 = db.createObjectStore('objectStore_58', {keypath: 'OyapMRa', autoIncrement: true});
    var index_56 = objectStore_0.createIndex('index_56', 'test', {unique: false, multiEntry: true});
    var put_4 = objectStore_5.put({f0_f: '<null>', f1_v: '<string>'}, 'GmEOAlLAMFez');
    var clear_1 = objectStore_1.clear();
    var get_1;
    try{
        KeyRange_18 = IDBKeyRange.bound('jrNSxFKQr', 'jrNSxFKQr', false, true);
        get_1 = objectStore_4.get(KeyRange_18);
    }
    catch (e){
    }

    var index_57 = objectStore_4.createIndex('index_57', 'test', {unique: true, multiEntry: false});
    var objectStore_6 = db.createObjectStore('objectStore_59', {autoIncrement: true});
    var clear_2 = objectStore_2.clear();
    var get_2;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('GmEOAlLAMFez', true);
        get_2 = objectStore_5.get(KeyRange_20);
    }
    catch (e){
    }

    var put_5 = objectStore_6.put({f0_r: '<object>', f1_m: '<array>', f2_u: '<array>', f3_x: '<object>', f4_i: '<object>', f5_x: '<number>'}, 'JhCj');
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('obrIE', 'obrIE', true, false);
        get_3 = objectStore_2.get(KeyRange_22);
    }
    catch (e){
    }

    var put_6 = objectStore_5.put({f0_a: '<object>', f1_f: '<string>', f2_o: '<array>', f3_s: '<number>'}, 'uMlvARhG');
    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('iGm', true);
        count_6 = objectStore_0.count(KeyRange_24);
    }
    catch (e){
    }

    var put_7 = objectStore_3.put({f0_c: '<null>', f1_c: '<number>', f2_a: '<null>', f3_m: '<array>', f4_t: '<boolean>', f5_v: '<number>', f6_i: '<null>', f7_r: '<object>', f8_i: '<null>', f9_c: '<boolean>'}, 'SERFvrq');
    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.only('JhCj');
        get_4 = objectStore_6.get(KeyRange_26);
    }
    catch (e){
    }

    var add_4 = objectStore_3.add({f0_z: '<null>', f1_l: '<null>', f2_z: '<boolean>', f3_d: '<boolean>'}, 'UoGvSbBa');
    var getAllKeys_1 = objectStore_1.getAllKeys(2032473482);
    var objectStore_7 = db.createObjectStore('objectStore_60');
    var count_7 = objectStore_2.count();
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('ODWVxn', 'ODWVxn', true, false);
        get_5 = objectStore_1.get(KeyRange_28);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_2.getAllKeys(986504572);
    var delete_1;
    try{
        KeyRange_30 = IDBKeyRange.bound('BxFw', 'SERFvrq', true, false);
        delete_1 = objectStore_3.delete(KeyRange_30);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_32 = IDBKeyRange.bound('NHdm', 'NHdm', false, true);
        get_6 = objectStore_2.get(KeyRange_32);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_34 = IDBKeyRange.bound('ODWVxn', 'ODWVxn', false, true);
        count_8 = objectStore_1.count(KeyRange_34);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('ODWVxn', 'ODWVxn', false, false);
        getAll_2 = objectStore_1.getAll(KeyRange_36, 2493438151);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('ODWVxn');
        getAll_2 = objectStore_1.getAll(KeyRange_37);
    }

    var index_58 = objectStore_3.createIndex('index_58', 'test', {unique: true, multiEntry: true});
    var delete_2;
    try{
        KeyRange_38 = IDBKeyRange.bound('obrIE', 'NHdm', true, true);
        delete_2 = objectStore_2.delete(KeyRange_38);
    }
    catch (e){
    }

    var add_5 = objectStore_3.add({f0_d: '<array>', f1_z: '<array>'}, 'JsvjdU');
    var objectStore_8 = db.createObjectStore('objectStore_61', {keypath: 'SZqZ'});
    db.deleteObjectStore('objectStore_57')
    var put_8 = objectStore_6.put({f0_d: '<object>', f1_j: '<number>', f2_x: '<null>', f3_h: '<object>', f4_h: '<array>', f5_q: '<object>', f6_f: '<string>', f7_e: '<boolean>', f8_d: '<number>', f9_t: '<array>'}, 'WIVAgLR');
    var add_6 = objectStore_7.add({f0_u: '<number>', f1_f: '<number>', f2_n: '<number>', f3_q: '<number>', f4_h: '<number>', f5_o: '<number>', f6_z: '<null>', f7_j: '<boolean>', f8_t: '<object>', f9_j: '<object>'}, 'icrHabylO');
    var count_9 = objectStore_0.count();
    var count_10;
    try{
        KeyRange_40 = IDBKeyRange.bound('iGm', 'iGm', false, false);
        count_10 = objectStore_0.count(KeyRange_40);
    }
    catch (e){
    }

    var index_59 = objectStore_1.createIndex('index_59', 'test', {multiEntry: false});
    var objectStore_9 = db.createObjectStore('objectStore_62', {keypath: 'qbuiXlIq', autoIncrement: false});
    var index_60 = objectStore_5.createIndex('index_60', 'test', {multiEntry: false});
    var index_61 = objectStore_8.createIndex('index_61', 'test', {unique: false});
    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.only('icrHabylO');
        get_7 = objectStore_7.get(KeyRange_42);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_63', {autoIncrement: false});
    var index_62 = objectStore_1.createIndex('index_62', 'test', {unique: true});
    var objectStore_11 = db.createObjectStore('objectStore_64', {keypath: 'sAwiJZyX', autoIncrement: false});
    var put_9 = objectStore_10.put({f0_h: '<string>'}, 'mubaFJoW');
    var getAllKeys_3 = objectStore_2.getAllKeys();
    var count_11 = objectStore_10.count();
    var put_10 = objectStore_9.put({f0_l: '<array>'}, 'ewingyaDLQI');
    var clear_3 = objectStore_2.clear();
    var objectStore_12 = db.createObjectStore('objectStore_65');
    objectStore_5.deleteIndex('index_60')
    var getAllKeys_4;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('mubaFJoW', true);
        getAllKeys_4 = objectStore_10.getAllKeys(KeyRange_44);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('mubaFJoW');
        getAllKeys_4 = objectStore_10.getAllKeys(KeyRange_45);
    }

    var get_8;
    try{
        KeyRange_46 = IDBKeyRange.bound('ODWVxn', 'ODWVxn', true, true);
        get_8 = objectStore_1.get(KeyRange_46);
    }
    catch (e){
    }

    var add_7 = objectStore_0.add({f0_t: '<array>', f1_f: '<number>'}, 'XZERzLMwYvu');
    var delete_3;
    try{
        KeyRange_48 = IDBKeyRange.only('BxFw');
        delete_3 = objectStore_3.delete(KeyRange_48);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_60 = db.transaction(['objectStore_59'], 'readonly', {durability:"relaxed"})
    var objectStore_59;
    txn_60.objectStore('objectStore_59')
    var get_9;
    try{
        KeyRange_50 = IDBKeyRange.bound('WIVAgLR', 'WIVAgLR', true, false);
        get_9 = objectStore_59.get(KeyRange_50);
    }
    catch (e){
    }

    var add_8 = objectStore_59.add({f0_p: '<null>', f1_m: '<array>', f2_t: '<string>', f3_e: '<object>', f4_r: '<string>', f5_s: '<string>', f6_u: '<string>', f7_k: '<null>', f8_u: '<string>'}, 'JfvC');
    var get_10;
    try{
        KeyRange_52 = IDBKeyRange.bound('JfvC', 'JfvC', true, false);
        get_10 = objectStore_59.get(KeyRange_52);
    }
    catch (e){
    }

    var add_9 = objectStore_59.add({f0_u: '<object>', f1_r: '<null>', f2_t: '<object>', f3_e: '<array>'}, 'hjEryDWmcKB');
    var add_10 = objectStore_59.add({f0_h: '<boolean>', f1_r: '<object>', f2_u: '<boolean>', f3_b: '<boolean>'}, 'WrwI');
    var get_11;
    try{
        KeyRange_54 = IDBKeyRange.bound('WIVAgLR', 'JfvC', false, false);
        get_11 = objectStore_59.get(KeyRange_54);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('WIVAgLR', false);
        count_12 = objectStore_59.count(KeyRange_56);
    }
    catch (e){
    }

    var clear_4 = objectStore_59.clear();
    var get_12;
    try{
        KeyRange_58 = IDBKeyRange.only('hjEryDWmcKB');
        get_12 = objectStore_59.get(KeyRange_58);
    }
    catch (e){
    }

    var clear_5 = objectStore_59.clear();
    var add_11 = objectStore_59.add({f0_o: '<null>', f1_w: '<array>', f2_t: '<number>', f3_a: '<number>', f4_r: '<number>'}, 'IxjdqGS');
    var clear_6 = objectStore_59.clear();
    var get_13;
    try{
        KeyRange_60 = IDBKeyRange.only('WIVAgLR');
        get_13 = objectStore_59.get(KeyRange_60);
    }
    catch (e){
    }

    var clear_7 = objectStore_59.clear();
    var count_13 = objectStore_59.count();
    var get_14;
    try{
        KeyRange_62 = IDBKeyRange.bound('JfvC', 'IxjdqGS', false, false);
        get_14 = objectStore_59.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_8 = objectStore_59.clear();
    var add_12 = objectStore_59.add({f0_b: '<array>'}, 'dttYlol');
    var get_15;
    try{
        KeyRange_64 = IDBKeyRange.bound('JfvC', 'JhCj', false, false);
        get_15 = objectStore_59.get(KeyRange_64);
    }
    catch (e){
    }

    var count_14 = objectStore_59.count();
    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_60.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_61 = db.transaction(['objectStore_61'], 'readonly', {durability:"strict"})
    var objectStore_61;
    txn_61.objectStore('objectStore_61')
    var clear_9 = objectStore_61.clear();
    var add_13 = objectStore_61.add({f0_k: '<boolean>', f1_z: '<number>'}, 'KyblVa');
    var put_11 = objectStore_61.put({f0_b: '<boolean>', f1_d: '<object>', f2_t: '<object>'}, 'pHwCTnIDu');
    var clear_10 = objectStore_61.clear();
    var add_14 = objectStore_61.add({f0_n: '<number>', f1_d: '<null>', f2_k: '<object>', f3_a: '<number>', f4_a: '<string>', f5_e: '<string>', f6_b: '<null>', f7_s: '<array>'}, 'QQPpxv');
    var get_16;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('pHwCTnIDu', false);
        get_16 = objectStore_61.get(KeyRange_66);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_68 = IDBKeyRange.bound('KyblVa', 'KyblVa', true, true);
        get_17 = objectStore_61.get(KeyRange_68);
    }
    catch (e){
    }

    var count_15 = objectStore_61.count();
    var clear_11 = objectStore_61.clear();
    var put_12 = objectStore_61.put({f0_z: '<array>', f1_e: '<array>', f2_p: '<array>', f3_q: '<array>'}, 'RMMuqA');
    var get_18;
    try{
        KeyRange_70 = IDBKeyRange.only('RMMuqA');
        get_18 = objectStore_61.get(KeyRange_70);
    }
    catch (e){
    }

    var put_13 = objectStore_61.put({f0_c: '<object>', f1_b: '<null>', f2_k: '<boolean>', f3_r: '<boolean>', f4_t: '<null>', f5_l: '<array>', f6_n: '<array>'}, 'yQSEoUUTj');
    var count_16;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('KyblVa', true);
        count_16 = objectStore_61.count(KeyRange_72);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_74 = IDBKeyRange.bound('KyblVa', 'pHwCTnIDu', true, true);
        count_17 = objectStore_61.count(KeyRange_74);
    }
    catch (e){
    }

    var add_15 = objectStore_61.add({f0_s: '<number>', f1_r: '<number>'}, 'agRPUHty');
    var put_14 = objectStore_61.put({f0_l: '<boolean>', f1_g: '<number>', f2_c: '<boolean>', f3_q: '<array>'}, 'SvuMXVny');
    var add_16 = objectStore_61.add({f0_f: '<null>', f1_k: '<null>', f2_r: '<array>', f3_e: '<array>'}, 'rlJvCywM');
    var put_15 = objectStore_61.put({f0_h: '<array>', f1_e: '<number>', f2_t: '<object>', f3_n: '<boolean>', f4_g: '<boolean>'}, 'wBAE');
    var add_17 = objectStore_61.add({f0_p: '<object>', f1_x: '<object>'}, 'jAaNScuIFFSJ');
    var clear_12 = objectStore_61.clear();
    var clear_13 = objectStore_61.clear();
    var getAll_3;
    try{
        KeyRange_76 = IDBKeyRange.bound('rlJvCywM', 'yQSEoUUTj', false, false);
        getAll_3 = objectStore_61.getAll(KeyRange_76, 3854204323);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('RMMuqA');
        getAll_3 = objectStore_61.getAll(KeyRange_77);
    }

    var put_16 = objectStore_61.put({f0_p: '<array>', f1_p: '<null>'}, 'CtQGRfKy');
    var delete_4;
    try{
        KeyRange_78 = IDBKeyRange.bound('KyblVa', 'rlJvCywM', true, true);
        delete_4 = objectStore_61.delete(KeyRange_78);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_80 = IDBKeyRange.only('jAaNScuIFFSJ');
        get_19 = objectStore_61.get(KeyRange_80);
    }
    catch (e){
    }

    var index_1 = objectStore_61.index('index_61');
    txn_61.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_61.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_62 = db.transaction(['objectStore_61', 'objectStore_63', 'objectStore_55', 'objectStore_56'], 'readwrite', {durability:"strict"})
    var objectStore_61;
    txn_60.objectStore('objectStore_61')
    var put_17 = objectStore_61.put({f0_p: '<string>', f1_r: '<string>', f2_v: '<boolean>', f3_c: '<object>', f4_h: '<null>', f5_l: '<array>', f6_m: '<boolean>', f7_t: '<boolean>', f8_f: '<boolean>', f9_j: '<number>'}, 'UehzBh');
    var count_18;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('RMMuqA', true);
        count_18 = objectStore_61.count(KeyRange_82);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_61.getAllKeys(179486919);
    var get_20;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('jAaNScuIFFSJ', true);
        get_20 = objectStore_61.get(KeyRange_84);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_86 = IDBKeyRange.bound('KyblVa', 'UehzBh', false, false);
        count_19 = objectStore_61.count(KeyRange_86);
    }
    catch (e){
    }

    var clear_14 = objectStore_61.clear();
    var add_18 = objectStore_61.add({f0_x: '<number>', f1_o: '<object>', f2_z: '<string>', f3_c: '<null>'}, 'iHNMnM');
    var add_19 = objectStore_61.add({f0_d: '<object>', f1_a: '<number>', f2_h: '<object>', f3_y: '<string>', f4_y: '<null>', f5_l: '<array>', f6_i: '<object>', f7_k: '<null>', f8_s: '<object>', f9_t: '<number>'}, 'bigLtTsxXszZ');
    var getAll_4 = objectStore_61.getAll(3560434451);
    var add_20 = objectStore_61.add({f0_u: '<null>', f1_w: '<string>', f2_o: '<string>', f3_u: '<array>', f4_e: '<array>', f5_j: '<null>', f6_p: '<array>', f7_k: '<null>', f8_p: '<number>', f9_y: '<object>'}, 'oujsdx');
    var get_21;
    try{
        KeyRange_88 = IDBKeyRange.bound('CtQGRfKy', 'oujsdx', true, true);
        get_21 = objectStore_61.get(KeyRange_88);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_90 = IDBKeyRange.bound('SvuMXVny', 'jAaNScuIFFSJ', true, true);
        count_20 = objectStore_61.count(KeyRange_90);
    }
    catch (e){
    }

    var delete_5;
    try{
        KeyRange_92 = IDBKeyRange.bound('oujsdx', 'bigLtTsxXszZ', true, true);
        delete_5 = objectStore_61.delete(KeyRange_92);
    }
    catch (e){
    }

    var add_21 = objectStore_61.add({f0_o: '<boolean>', f1_m: '<string>', f2_t: '<boolean>', f3_t: '<string>'}, 'rVwexJAaHPVD');
    var get_22;
    try{
        KeyRange_94 = IDBKeyRange.bound('rlJvCywM', 'pHwCTnIDu', true, false);
        get_22 = objectStore_61.get(KeyRange_94);
    }
    catch (e){
    }

    var clear_15 = objectStore_61.clear();
    var clear_16 = objectStore_61.clear();
    var get_23;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('bigLtTsxXszZ', true);
        get_23 = objectStore_61.get(KeyRange_96);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_98 = IDBKeyRange.bound('iHNMnM', 'bigLtTsxXszZ', false, true);
        get_24 = objectStore_61.get(KeyRange_98);
    }
    catch (e){
    }

    var count_21;
    try{
        KeyRange_100 = IDBKeyRange.bound('KyblVa', 'UehzBh', true, false);
        count_21 = objectStore_61.count(KeyRange_100);
    }
    catch (e){
    }

    var clear_17 = objectStore_61.clear();
    var put_18 = objectStore_61.put({f0_f: '<null>'}, 'oBKyTDfkzF');
    var delete_6;
    try{
        KeyRange_102 = IDBKeyRange.bound('QQPpxv', 'CtQGRfKy', true, true);
        delete_6 = objectStore_61.delete(KeyRange_102);
    }
    catch (e){
    }

    txn_61.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_62.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_63 = db.transaction(['objectStore_62', 'objectStore_59'], 'readonly', {durability:"default"})
    var objectStore_62;
    txn_62.objectStore('objectStore_62')
    var add_22 = objectStore_62.add({f0_y: '<object>', f1_b: '<boolean>', f2_v: '<number>', f3_z: '<object>', f4_l: '<null>'}, 'PfEdQqr');
    var count_22;
    try{
        KeyRange_104 = IDBKeyRange.only('ewingyaDLQI');
        count_22 = objectStore_62.count(KeyRange_104);
    }
    catch (e){
    }

    var count_23 = objectStore_62.count();
    var delete_7;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('ewingyaDLQI', false);
        delete_7 = objectStore_62.delete(KeyRange_106);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_108 = IDBKeyRange.only('ewingyaDLQI');
        count_24 = objectStore_62.count(KeyRange_108);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('PfEdQqr', true);
        delete_8 = objectStore_62.delete(KeyRange_110);
    }
    catch (e){
    }

    var put_19 = objectStore_62.put({f0_u: '<object>'}, 'GGz');
    var get_25;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('GGz', false);
        get_25 = objectStore_62.get(KeyRange_112);
    }
    catch (e){
    }

    var add_23 = objectStore_62.add({f0_e: '<object>', f1_d: '<object>', f2_a: '<object>', f3_b: '<string>', f4_n: '<null>', f5_q: '<boolean>', f6_e: '<number>'}, 'jfTOS');
    var clear_18 = objectStore_62.clear();
    var getAllKeys_6;
    try{
        KeyRange_114 = IDBKeyRange.bound('PfEdQqr', 'ewingyaDLQI', false, true);
        getAllKeys_6 = objectStore_62.getAllKeys(KeyRange_114);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('ewingyaDLQI');
        getAllKeys_6 = objectStore_62.getAllKeys(KeyRange_115);
    }

    var get_26;
    try{
        KeyRange_116 = IDBKeyRange.bound('ewingyaDLQI', 'ewingyaDLQI', false, false);
        get_26 = objectStore_62.get(KeyRange_116);
    }
    catch (e){
    }

    var put_20 = objectStore_62.put({f0_g: '<number>', f1_l: '<boolean>', f2_s: '<boolean>', f3_g: '<boolean>', f4_z: '<object>'}, 'pJRUkeZPSr');
    var add_24 = objectStore_62.add({f0_s: '<boolean>', f1_v: '<object>', f2_u: '<boolean>', f3_a: '<object>', f4_h: '<null>', f5_z: '<boolean>', f6_v: '<array>', f7_a: '<object>', f8_u: '<boolean>', f9_y: '<boolean>'}, 'WMuZ');
    var getAll_5 = objectStore_62.getAll(3641388861);
    var add_25 = objectStore_62.add({f0_w: '<number>', f1_m: '<array>', f2_n: '<null>', f3_c: '<null>', f4_r: '<null>', f5_x: '<number>'}, 'HYpAzjpr');
    var put_21 = objectStore_62.put({f0_j: '<string>', f1_h: '<null>', f2_n: '<boolean>', f3_l: '<object>', f4_a: '<object>'}, 'ubyMvfLmNOq');
    var get_27;
    try{
        KeyRange_118 = IDBKeyRange.only('pJRUkeZPSr');
        get_27 = objectStore_62.get(KeyRange_118);
    }
    catch (e){
    }

    txn_63.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_64 = db.transaction(['objectStore_61', 'objectStore_58', 'objectStore_56'], 'readonly', {durability:"default"})
    var objectStore_58;
    txn_60.objectStore('objectStore_58')
    var delete_9;
    try{
        KeyRange_120 = IDBKeyRange.only('GmEOAlLAMFez');
        delete_9 = objectStore_58.delete(KeyRange_120);
    }
    catch (e){
    }

    var put_22 = objectStore_58.put({f0_l: '<string>', f1_q: '<number>', f2_p: '<string>', f3_s: '<boolean>', f4_d: '<array>', f5_e: '<boolean>', f6_i: '<number>'}, 'FXE');
    var get_28;
    try{
        KeyRange_122 = IDBKeyRange.bound('FXE', 'GmEOAlLAMFez', false, false);
        get_28 = objectStore_58.get(KeyRange_122);
    }
    catch (e){
    }

    var clear_19 = objectStore_58.clear();
    var add_26 = objectStore_58.add({f0_b: '<array>', f1_l: '<null>', f2_q: '<array>'}, 'OAqcBmUYyhWB');
    var get_29;
    try{
        KeyRange_124 = IDBKeyRange.bound('GmEOAlLAMFez', 'GmEOAlLAMFez', false, false);
        get_29 = objectStore_58.get(KeyRange_124);
    }
    catch (e){
    }

    var add_27 = objectStore_58.add({f0_m: '<array>', f1_a: '<object>'}, 'sSKRjAmRzK');
    var get_30;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('sSKRjAmRzK', false);
        get_30 = objectStore_58.get(KeyRange_126);
    }
    catch (e){
    }

    var add_28 = objectStore_58.add({f0_b: '<number>', f1_d: '<number>', f2_g: '<number>', f3_j: '<null>', f4_w: '<object>', f5_w: '<string>'}, 'DQVkSqy');
    var add_29 = objectStore_58.add({f0_m: '<number>', f1_z: '<string>'}, 'SdZiKUZyMzA');
    var delete_10;
    try{
        KeyRange_128 = IDBKeyRange.bound('sSKRjAmRzK', 'OAqcBmUYyhWB', false, true);
        delete_10 = objectStore_58.delete(KeyRange_128);
    }
    catch (e){
    }

    var getAllKeys_7;
    try{
        KeyRange_130 = IDBKeyRange.bound('SdZiKUZyMzA', 'OAqcBmUYyhWB', false, true);
        getAllKeys_7 = objectStore_58.getAllKeys(KeyRange_130);
    }
    catch (e){
        KeyRange_131 = IDBKeyRange.only('sSKRjAmRzK');
        getAllKeys_7 = objectStore_58.getAllKeys(KeyRange_131);
    }

    var add_30 = objectStore_58.add({f0_e: '<string>', f1_r: '<number>', f2_h: '<number>', f3_q: '<null>', f4_b: '<number>', f5_c: '<null>', f6_r: '<boolean>', f7_d: '<null>'}, 'pDxmrCs');
    var count_25 = objectStore_58.count();
    var count_26;
    try{
        KeyRange_132 = IDBKeyRange.bound('sSKRjAmRzK', 'DQVkSqy', true, false);
        count_26 = objectStore_58.count(KeyRange_132);
    }
    catch (e){
    }

    var delete_11;
    try{
        KeyRange_134 = IDBKeyRange.bound('sSKRjAmRzK', 'GmEOAlLAMFez', true, false);
        delete_11 = objectStore_58.delete(KeyRange_134);
    }
    catch (e){
    }

    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_64.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_65 = db.transaction(['objectStore_65'], 'readonly', {durability:"default"})
    var objectStore_65;
    txn_61.objectStore('objectStore_65')
    var clear_20 = objectStore_65.clear();
    var add_31 = objectStore_65.add({f0_z: '<null>', f1_z: '<string>', f2_k: '<object>', f3_v: '<array>', f4_y: '<number>', f5_t: '<boolean>', f6_w: '<object>'}, 'okcPbAmU');
    var add_32 = objectStore_65.add({f0_e: '<number>', f1_z: '<array>', f2_k: '<object>'}, 'sTlxUzFO');
    var get_31;
    try{
        KeyRange_136 = IDBKeyRange.bound('sTlxUzFO', 'okcPbAmU', false, true);
        get_31 = objectStore_65.get(KeyRange_136);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_138 = IDBKeyRange.bound('okcPbAmU', 'sTlxUzFO', false, false);
        count_27 = objectStore_65.count(KeyRange_138);
    }
    catch (e){
    }

    var clear_21 = objectStore_65.clear();
    var getAll_6;
    try{
        KeyRange_140 = IDBKeyRange.bound('sTlxUzFO', 'okcPbAmU', true, true);
        getAll_6 = objectStore_65.getAll(KeyRange_140, 4155242972);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('okcPbAmU');
        getAll_6 = objectStore_65.getAll(KeyRange_141);
    }

    var add_33 = objectStore_65.add({f0_f: '<string>', f1_k: '<boolean>', f2_v: '<number>'}, 'jrOFBd');
    var delete_12;
    try{
        KeyRange_142 = IDBKeyRange.only('jrOFBd');
        delete_12 = objectStore_65.delete(KeyRange_142);
    }
    catch (e){
    }

    var add_34 = objectStore_65.add({f0_c: '<number>'}, 'OrSzdLJL');
    var count_28;
    try{
        KeyRange_144 = IDBKeyRange.bound('okcPbAmU', 'okcPbAmU', true, true);
        count_28 = objectStore_65.count(KeyRange_144);
    }
    catch (e){
    }

    var getAll_7 = objectStore_65.getAll(2729524015);
    var put_23 = objectStore_65.put({f0_h: '<array>'}, 'qoUzuKYRElzQ');
    var clear_22 = objectStore_65.clear();
    var put_24 = objectStore_65.put({f0_a: '<object>', f1_c: '<null>', f2_f: '<object>', f3_g: '<object>', f4_c: '<null>', f5_c: '<string>'}, 'RWZNcHOg');
    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_66 = db.transaction(['objectStore_64', 'objectStore_58'], 'readwrite', {durability:"default"})
    var objectStore_64;
    txn_62.objectStore('objectStore_64')
    var put_25 = objectStore_64.put({f0_t: '<null>'}, 'vQwitduaxg');
    var put_26 = objectStore_64.put({f0_n: '<string>', f1_v: '<string>', f2_f: '<object>', f3_n: '<number>', f4_w: '<string>', f5_p: '<boolean>', f6_w: '<array>'}, 'jHOdigWfWYa');
    var count_29;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('jHOdigWfWYa', false);
        count_29 = objectStore_64.count(KeyRange_146);
    }
    catch (e){
    }

    var clear_23 = objectStore_64.clear();
    var put_27 = objectStore_64.put({f0_k: '<number>'}, 'KfPZstwBDc');
    var get_32;
    try{
        KeyRange_148 = IDBKeyRange.bound('vQwitduaxg', 'vQwitduaxg', false, true);
        get_32 = objectStore_64.get(KeyRange_148);
    }
    catch (e){
    }

    var put_28 = objectStore_64.put({f0_n: '<array>', f1_l: '<object>', f2_s: '<number>', f3_n: '<object>', f4_b: '<object>', f5_j: '<object>', f6_s: '<boolean>'}, 'hEHy');
    var getAll_8 = objectStore_64.getAll();
    var add_35 = objectStore_64.add({f0_a: '<object>', f1_a: '<object>'}, 'ZYYlcQW');
    var put_29 = objectStore_64.put({f0_p: '<object>', f1_q: '<object>', f2_d: '<null>', f3_y: '<object>', f4_n: '<number>', f5_z: '<string>'}, 'WMUFbcMtab');
    var get_33;
    try{
        KeyRange_150 = IDBKeyRange.bound('KfPZstwBDc', 'vQwitduaxg', true, true);
        get_33 = objectStore_64.get(KeyRange_150);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_152 = IDBKeyRange.lowerBound('hEHy', false);
        get_34 = objectStore_64.get(KeyRange_152);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_154 = IDBKeyRange.lowerBound('WMUFbcMtab', false);
        get_35 = objectStore_64.get(KeyRange_154);
    }
    catch (e){
    }

    var clear_24 = objectStore_64.clear();
    var put_30 = objectStore_64.put({f0_p: '<array>', f1_z: '<number>', f2_g: '<number>', f3_m: '<null>', f4_e: '<string>', f5_u: '<boolean>', f6_e: '<number>'}, 'yPdTOG');
    var clear_25 = objectStore_64.clear();
    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_66.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_67 = db.transaction(['objectStore_54'], 'readonly', {durability:"default"})
    var objectStore_54;
    txn_65.objectStore('objectStore_54')
    var get_36;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('ODWVxn', true);
        get_36 = objectStore_54.get(KeyRange_156);
    }
    catch (e){
    }

    var put_31 = objectStore_54.put({f0_v: '<boolean>', f1_d: '<boolean>', f2_x: '<object>', f3_d: '<object>'}, 'DBARceOjyncr');
    var count_30;
    try{
        KeyRange_158 = IDBKeyRange.lowerBound('DBARceOjyncr', false);
        count_30 = objectStore_54.count(KeyRange_158);
    }
    catch (e){
    }

    var count_31;
    try{
        KeyRange_160 = IDBKeyRange.bound('DBARceOjyncr', 'ODWVxn', true, true);
        count_31 = objectStore_54.count(KeyRange_160);
    }
    catch (e){
    }

    var add_36 = objectStore_54.add({f0_c: '<object>'}, 'NBwRw');
    var clear_26 = objectStore_54.clear();
    var put_32 = objectStore_54.put({f0_h: '<string>', f1_e: '<string>'}, 'wlyMTJof');
    var get_37;
    try{
        KeyRange_162 = IDBKeyRange.bound('NBwRw', 'ODWVxn', true, true);
        get_37 = objectStore_54.get(KeyRange_162);
    }
    catch (e){
    }

    var clear_27 = objectStore_54.clear();
    var add_37 = objectStore_54.add({f0_p: '<number>', f1_w: '<string>', f2_l: '<number>'}, 'KloIBbW');
    var count_32 = objectStore_54.count();
    var get_38;
    try{
        KeyRange_164 = IDBKeyRange.bound('KloIBbW', 'wlyMTJof', true, true);
        get_38 = objectStore_54.get(KeyRange_164);
    }
    catch (e){
    }

    var get_39;
    try{
        KeyRange_166 = IDBKeyRange.lowerBound('KloIBbW', true);
        get_39 = objectStore_54.get(KeyRange_166);
    }
    catch (e){
    }

    var add_38 = objectStore_54.add({f0_q: '<string>', f1_i: '<array>', f2_b: '<array>', f3_w: '<null>', f4_g: '<null>', f5_f: '<object>', f6_b: '<string>', f7_c: '<array>'}, 'bAWsmIFTdWt');
    var getAll_9;
    try{
        KeyRange_168 = IDBKeyRange.only('wlyMTJof');
        getAll_9 = objectStore_54.getAll(KeyRange_168, 4173951032);
    }
    catch (e){
        KeyRange_169 = IDBKeyRange.only('ODWVxn');
        getAll_9 = objectStore_54.getAll(KeyRange_169);
    }

    var count_33;
    try{
        KeyRange_170 = IDBKeyRange.only('NBwRw');
        count_33 = objectStore_54.count(KeyRange_170);
    }
    catch (e){
    }

    var clear_28 = objectStore_54.clear();
    var get_40;
    try{
        KeyRange_172 = IDBKeyRange.bound('DBARceOjyncr', 'NBwRw', false, false);
        get_40 = objectStore_54.get(KeyRange_172);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_174 = IDBKeyRange.lowerBound('wlyMTJof', false);
        getAllKeys_8 = objectStore_54.getAllKeys(KeyRange_174);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('wlyMTJof');
        getAllKeys_8 = objectStore_54.getAllKeys(KeyRange_175);
    }

    var put_33 = objectStore_54.put({f0_j: '<string>'}, 'moV');
    var delete_13;
    try{
        KeyRange_176 = IDBKeyRange.bound('moV', 'moV', true, true);
        delete_13 = objectStore_54.delete(KeyRange_176);
    }
    catch (e){
    }

    var put_34 = objectStore_54.put({f0_t: '<boolean>', f1_x: '<number>', f2_w: '<array>', f3_b: '<null>', f4_q: '<null>', f5_r: '<object>', f6_r: '<number>', f7_b: '<null>'}, 'nMMAbHGekML');
    txn_63.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_61.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_68 = db.transaction(['objectStore_59'], 'readonly', {durability:"strict"})
    var objectStore_59;
    txn_60.objectStore('objectStore_59')
    var get_41;
    try{
        KeyRange_178 = IDBKeyRange.lowerBound('IxjdqGS', true);
        get_41 = objectStore_59.get(KeyRange_178);
    }
    catch (e){
    }

    var put_35 = objectStore_59.put({f0_c: '<boolean>', f1_q: '<number>', f2_v: '<number>', f3_q: '<array>', f4_m: '<number>'}, 'sQubkqq');
    var delete_14;
    try{
        KeyRange_180 = IDBKeyRange.lowerBound('WIVAgLR', false);
        delete_14 = objectStore_59.delete(KeyRange_180);
    }
    catch (e){
    }

    var put_36 = objectStore_59.put({f0_v: '<boolean>', f1_b: '<number>', f2_h: '<null>', f3_h: '<boolean>', f4_y: '<array>'}, 'dhob');
    var delete_15;
    try{
        KeyRange_182 = IDBKeyRange.bound('hjEryDWmcKB', 'dhob', true, false);
        delete_15 = objectStore_59.delete(KeyRange_182);
    }
    catch (e){
    }

    var count_34 = objectStore_59.count();
    var clear_29 = objectStore_59.clear();
    var put_37 = objectStore_59.put({f0_y: '<number>', f1_n: '<object>', f2_q: '<object>', f3_a: '<array>', f4_p: '<null>'}, 'WBuKypRgQPr');
    var get_42;
    try{
        KeyRange_184 = IDBKeyRange.only('JfvC');
        get_42 = objectStore_59.get(KeyRange_184);
    }
    catch (e){
    }

    var get_43;
    try{
        KeyRange_186 = IDBKeyRange.only('JhCj');
        get_43 = objectStore_59.get(KeyRange_186);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_188 = IDBKeyRange.only('IxjdqGS');
        getAllKeys_9 = objectStore_59.getAllKeys(KeyRange_188);
    }
    catch (e){
        KeyRange_189 = IDBKeyRange.only('dhob');
        getAllKeys_9 = objectStore_59.getAllKeys(KeyRange_189);
    }

    var get_44;
    try{
        KeyRange_190 = IDBKeyRange.bound('sQubkqq', 'dhob', false, false);
        get_44 = objectStore_59.get(KeyRange_190);
    }
    catch (e){
    }

    var add_39 = objectStore_59.add({f0_i: '<null>', f1_g: '<object>', f2_o: '<null>', f3_b: '<object>', f4_c: '<null>', f5_j: '<null>', f6_r: '<number>', f7_i: '<null>'}, 'VaKY');
    var put_38 = objectStore_59.put({f0_m: '<null>', f1_b: '<array>', f2_g: '<boolean>', f3_d: '<object>', f4_s: '<object>', f5_k: '<number>'}, 'CZcMIra');
    var delete_16;
    try{
        KeyRange_192 = IDBKeyRange.lowerBound('WBuKypRgQPr', false);
        delete_16 = objectStore_59.delete(KeyRange_192);
    }
    catch (e){
    }

    var add_40 = objectStore_59.add({f0_l: '<null>', f1_n: '<object>', f2_f: '<string>', f3_m: '<boolean>', f4_e: '<object>', f5_k: '<array>'}, 'PzqPY');
    var count_35 = objectStore_59.count();
    txn_68.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_64.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_60.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_69 = db.transaction(['objectStore_61', 'objectStore_54', 'objectStore_63'], 'readonly', {durability:"relaxed"})
    var objectStore_54;
    txn_60.objectStore('objectStore_54')
    var count_36 = objectStore_54.count();
    var add_41 = objectStore_54.add({f0_u: '<boolean>', f1_a: '<boolean>', f2_q: '<string>', f3_c: '<boolean>', f4_p: '<number>'}, 'JVDA');
    var delete_17;
    try{
        KeyRange_194 = IDBKeyRange.lowerBound('moV', true);
        delete_17 = objectStore_54.delete(KeyRange_194);
    }
    catch (e){
    }

    var count_37 = objectStore_54.count();
    var clear_30 = objectStore_54.clear();
    var add_42 = objectStore_54.add({f0_d: '<number>', f1_r: '<object>', f2_e: '<array>', f3_y: '<null>', f4_b: '<string>', f5_r: '<boolean>', f6_y: '<array>'}, 'druLYcOY');
    var count_38 = objectStore_54.count();
    var add_43 = objectStore_54.add({f0_u: '<string>', f1_g: '<object>', f2_g: '<object>', f3_n: '<string>', f4_n: '<null>', f5_n: '<boolean>', f6_z: '<number>', f7_k: '<boolean>', f8_t: '<array>', f9_y: '<boolean>'}, 'txMuAIj');
    var index_2 = objectStore_54.index('index_59');
    var clear_31 = objectStore_54.clear();
    var getAll_10;
    try{
        KeyRange_196 = IDBKeyRange.lowerBound('txMuAIj', false);
        getAll_10 = objectStore_54.getAll(KeyRange_196, 1960939306);
    }
    catch (e){
        KeyRange_197 = IDBKeyRange.only('DBARceOjyncr');
        getAll_10 = objectStore_54.getAll(KeyRange_197);
    }

    var get_45;
    try{
        KeyRange_198 = IDBKeyRange.bound('JVDA', 'bAWsmIFTdWt', false, true);
        get_45 = objectStore_54.get(KeyRange_198);
    }
    catch (e){
    }

    var put_39 = objectStore_54.put({f0_v: '<array>', f1_l: '<number>', f2_h: '<object>', f3_g: '<null>'}, 'clZ');
    var add_44 = objectStore_54.add({f0_c: '<array>', f1_g: '<number>', f2_t: '<array>', f3_s: '<boolean>', f4_q: '<array>', f5_k: '<array>', f6_p: '<boolean>', f7_s: '<object>'}, 'AiGXQd');
    var delete_18;
    try{
        KeyRange_200 = IDBKeyRange.only('KloIBbW');
        delete_18 = objectStore_54.delete(KeyRange_200);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_202 = IDBKeyRange.bound('NBwRw', 'JVDA', true, true);
        get_46 = objectStore_54.get(KeyRange_202);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_204 = IDBKeyRange.lowerBound('druLYcOY', false);
        get_47 = objectStore_54.get(KeyRange_204);
    }
    catch (e){
    }

    var count_39;
    try{
        KeyRange_206 = IDBKeyRange.lowerBound('JVDA', true);
        count_39 = objectStore_54.count(KeyRange_206);
    }
    catch (e){
    }

    var add_45 = objectStore_54.add({f0_m: '<boolean>', f1_o: '<array>', f2_k: '<array>', f3_a: '<array>', f4_q: '<null>', f5_x: '<object>', f6_v: '<null>', f7_h: '<boolean>', f8_d: '<boolean>', f9_b: '<array>'}, 'hAyaK');
    var clear_32 = objectStore_54.clear();
    txn_62.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_65.onerror = (event) => {
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