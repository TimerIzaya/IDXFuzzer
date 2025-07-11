let db;
const openRequest = window.indexedDB.open('str_8661', 2643391067132337)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'jjqiNynntR', autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_1', {autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'ReHTX.oImgVOe.KRNmLLCo.XhjSmzCRIGH.Imvh', autoIncrement: true});
    var put_0 = objectStore_2.put({f0_h: '<null>', f1_s: '<string>', f2_w: '<object>', f3_i: '<number>', f4_s: '<null>'}, 'UhOOcMG');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('UhOOcMG');
        count_0 = objectStore_2.count(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_3', {autoIncrement: false});
    var put_1 = objectStore_2.put({f0_z: '<null>', f1_d: '<string>', f2_y: '<array>', f3_l: '<null>', f4_z: '<number>', f5_c: '<null>'}, 'ozruEmRdFOAn');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('UhOOcMG', false);
        get_0 = objectStore_2.get(KeyRange_2);
    }
    catch (e){
    }

    var add_0 = objectStore_1.add({f0_y: '<number>', f1_z: '<object>', f2_l: '<boolean>'}, 'gRaWOhcVndaU');
    var count_1 = objectStore_1.count();
    var clear_0 = objectStore_0.clear();
    var put_2 = objectStore_0.put({f0_o: '<null>', f1_w: '<null>', f2_u: '<object>', f3_f: '<boolean>', f4_i: '<string>', f5_l: '<object>'}, 'GdffMjvK');
    var objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'UhXHWhgCijh'});
    var count_2 = objectStore_1.count();
    var objectStore_5 = db.createObjectStore('objectStore_5', {autoIncrement: true});
    var add_1 = objectStore_3.add({f0_s: '<null>', f1_j: '<null>'}, 'iSQY');
    var put_3 = objectStore_1.put({f0_u: '<boolean>', f1_a: '<array>'}, 'IUbhNn');
    var add_2 = objectStore_4.add({f0_s: '<null>', f1_o: '<object>', f2_z: '<boolean>', f3_e: '<object>', f4_u: '<null>', f5_h: '<string>', f6_z: '<array>', f7_c: '<object>'}, 'wyEFSfEWRjZD');
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('UhOOcMG', true);
        delete_0 = objectStore_2.delete(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'ZedlpP', autoIncrement: true});
    var getAll_0 = objectStore_3.getAll();
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('iSQY', 'iSQY', false, true);
        count_3 = objectStore_3.count(KeyRange_6);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_5')
    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('GdffMjvK', true);
        delete_1 = objectStore_0.delete(KeyRange_8);
    }
    catch (e){
    }

    var getAll_1 = objectStore_4.getAll(3990812056);
    var add_3 = objectStore_3.add({f0_x: '<string>', f1_x: '<object>', f2_o: '<boolean>', f3_y: '<object>', f4_q: '<array>', f5_t: '<number>', f6_w: '<boolean>', f7_a: '<null>', f8_v: '<null>'}, 'UxplONnwZNMj');
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.only('wyEFSfEWRjZD');
        get_1 = objectStore_4.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_1 = objectStore_6.clear();
    var objectStore_7 = db.createObjectStore('objectStore_7', {keypath: 'fMrtBELHz'});
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('gRaWOhcVndaU', false);
        get_2 = objectStore_1.get(KeyRange_12);
    }
    catch (e){
    }

    var index_0 = objectStore_7.createIndex('index_0', 'test', {unique: false});
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('gRaWOhcVndaU', true);
        get_3 = objectStore_1.get(KeyRange_14);
    }
    catch (e){
    }

    var clear_2 = objectStore_3.clear();
    var clear_3 = objectStore_3.clear();
    var clear_4 = objectStore_2.clear();
    var count_4 = objectStore_4.count();
    var count_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('iSQY', 'UxplONnwZNMj', false, true);
        count_5 = objectStore_3.count(KeyRange_16);
    }
    catch (e){
    }

    var add_4 = objectStore_2.add({f0_t: '<object>', f1_i: '<string>', f2_h: '<object>', f3_z: '<null>', f4_p: '<array>', f5_o: '<boolean>', f6_o: '<number>', f7_w: '<boolean>', f8_p: '<boolean>', f9_p: '<object>'}, 'EZoNmS');
    var index_1 = objectStore_3.createIndex('index_1', 'test', {multiEntry: false});
    var add_5 = objectStore_4.add({f0_g: '<number>', f1_w: '<number>', f2_z: '<boolean>', f3_c: '<array>', f4_z: '<number>', f5_x: '<object>', f6_f: '<number>', f7_p: '<object>'}, 'xJddlomg');
    var objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'xeR', autoIncrement: true});
    var delete_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('GdffMjvK', 'GdffMjvK', true, false);
        delete_2 = objectStore_0.delete(KeyRange_18);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('IUbhNn', 'IUbhNn', false, true);
        get_4 = objectStore_1.get(KeyRange_20);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.only('iSQY');
        get_5 = objectStore_3.get(KeyRange_22);
    }
    catch (e){
    }

    var put_4 = objectStore_1.put({f0_z: '<array>'}, 'hIi');
    var index_2 = objectStore_6.createIndex('index_2', 'test', {unique: false, multiEntry: true});
    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.only('xJddlomg');
        count_6 = objectStore_4.count(KeyRange_24);
    }
    catch (e){
    }

    var put_5 = objectStore_1.put({f0_x: '<string>'}, 'slSlxH');
    var index_3 = objectStore_1.createIndex('index_3', 'test');
    var objectStore_9 = db.createObjectStore('objectStore_9', {autoIncrement: true});
    var clear_5 = objectStore_4.clear();
    var index_4 = objectStore_3.createIndex('index_4', 'test', {multiEntry: true});
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.only('GdffMjvK');
        get_6 = objectStore_0.get(KeyRange_26);
    }
    catch (e){
    }

    var put_6 = objectStore_7.put({f0_b: '<boolean>'}, 'dxuqltOXcUor');
    var delete_3;
    try{
        KeyRange_28 = IDBKeyRange.only('GdffMjvK');
        delete_3 = objectStore_0.delete(KeyRange_28);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('wyEFSfEWRjZD', true);
        get_7 = objectStore_4.get(KeyRange_30);
    }
    catch (e){
    }

    var count_7 = objectStore_0.count();
    var count_8 = objectStore_4.count();
    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('hIi', true);
        get_8 = objectStore_1.get(KeyRange_32);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_34 = IDBKeyRange.only('dxuqltOXcUor');
        getAll_2 = objectStore_7.getAll(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('dxuqltOXcUor');
        getAll_2 = objectStore_7.getAll(KeyRange_35);
    }

    var add_6 = objectStore_0.add({f0_s: '<string>', f1_y: '<null>', f2_j: '<number>'}, 'TmfkPr');
    var objectStore_10 = db.createObjectStore('objectStore_10', {autoIncrement: true});
    db.deleteObjectStore('objectStore_9')
    var clear_6 = objectStore_8.clear();
    var clear_7 = objectStore_3.clear();
    var clear_8 = objectStore_8.clear();
    var put_7 = objectStore_3.put({f0_h: '<array>'}, 'utFSumiVe');
    var getAll_3;
    try{
        KeyRange_36 = IDBKeyRange.bound('dxuqltOXcUor', 'dxuqltOXcUor', false, true);
        getAll_3 = objectStore_7.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('dxuqltOXcUor');
        getAll_3 = objectStore_7.getAll(KeyRange_37);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_3', 'objectStore_6', 'objectStore_4'], 'readwrite', {durability:"default"})
    var objectStore_3;
    txn_0.objectStore('objectStore_3')
    var getAll_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('UxplONnwZNMj', 'iSQY', false, true);
        getAll_4 = objectStore_3.getAll(KeyRange_38, 872275693);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('iSQY');
        getAll_4 = objectStore_3.getAll(KeyRange_39);
    }

    var count_9 = objectStore_3.count();
    var count_10 = objectStore_3.count();
    var index_0 = objectStore_3.index('index_1');
    var getAllKeys_0 = objectStore_3.getAllKeys();
    var get_9;
    try{
        KeyRange_40 = IDBKeyRange.bound('utFSumiVe', 'UxplONnwZNMj', true, false);
        get_9 = objectStore_3.get(KeyRange_40);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_42 = IDBKeyRange.bound('iSQY', 'utFSumiVe', false, false);
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_42, 74311571);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('UxplONnwZNMj');
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_43);
    }

    var getAll_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('utFSumiVe', 'utFSumiVe', true, true);
        getAll_5 = objectStore_3.getAll(KeyRange_44);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('iSQY');
        getAll_5 = objectStore_3.getAll(KeyRange_45);
    }

    var clear_9 = objectStore_3.clear();
    var count_11 = objectStore_3.count();
    var clear_10 = objectStore_3.clear();
    var add_7 = objectStore_3.add({f0_m: '<null>', f1_s: '<object>', f2_i: '<boolean>'}, 'JICBDf');
    var put_8 = objectStore_3.put({f0_v: '<object>', f1_w: '<boolean>', f2_n: '<string>', f3_r: '<null>', f4_c: '<number>', f5_a: '<object>', f6_x: '<array>', f7_s: '<object>', f8_r: '<number>', f9_j: '<number>'}, 'FKDDLdf');
    var count_12 = objectStore_3.count();
    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('UxplONnwZNMj', true);
        get_10 = objectStore_3.get(KeyRange_46);
    }
    catch (e){
    }

    var add_8 = objectStore_3.add({f0_y: '<boolean>'}, 'DucazIgX');
    var count_13;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('iSQY', true);
        count_13 = objectStore_3.count(KeyRange_48);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('UxplONnwZNMj', true);
        get_11 = objectStore_3.get(KeyRange_50);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('FKDDLdf', true);
        get_12 = objectStore_3.get(KeyRange_52);
    }
    catch (e){
    }

    var clear_11 = objectStore_3.clear();
    var get_13;
    try{
        KeyRange_54 = IDBKeyRange.bound('iSQY', 'DucazIgX', true, false);
        get_13 = objectStore_3.get(KeyRange_54);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_56 = IDBKeyRange.bound('DucazIgX', 'FKDDLdf', true, false);
        get_14 = objectStore_3.get(KeyRange_56);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_58 = IDBKeyRange.bound('FKDDLdf', 'utFSumiVe', false, true);
        get_15 = objectStore_3.get(KeyRange_58);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_3.getAllKeys(1839847397);
    var getAll_6;
    try{
        KeyRange_60 = IDBKeyRange.only('UxplONnwZNMj');
        getAll_6 = objectStore_3.getAll(KeyRange_60);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('DucazIgX');
        getAll_6 = objectStore_3.getAll(KeyRange_61);
    }

    var put_9 = objectStore_3.put({f0_t: '<boolean>'}, 'TbkWfOFvik');
    var add_9 = objectStore_3.add({f0_o: '<boolean>', f1_f: '<array>', f2_p: '<null>', f3_h: '<string>', f4_v: '<null>', f5_f: '<boolean>', f6_p: '<number>', f7_o: '<array>'}, 'XvVXaIGmDK');
    var count_14;
    try{
        KeyRange_62 = IDBKeyRange.only('FKDDLdf');
        count_14 = objectStore_3.count(KeyRange_62);
    }
    catch (e){
    }

    var clear_12 = objectStore_3.clear();
    var get_16;
    try{
        KeyRange_64 = IDBKeyRange.only('XvVXaIGmDK');
        get_16 = objectStore_3.get(KeyRange_64);
    }
    catch (e){
    }

    var clear_13 = objectStore_3.clear();
    var clear_14 = objectStore_3.clear();
    var get_17;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('UxplONnwZNMj', true);
        get_17 = objectStore_3.get(KeyRange_66);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_68 = IDBKeyRange.only('iSQY');
        getAll_7 = objectStore_3.getAll(KeyRange_68, 2669933790);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('DucazIgX');
        getAll_7 = objectStore_3.getAll(KeyRange_69);
    }

    var index_1 = objectStore_3.index('index_1');
    var add_10 = objectStore_3.add({f0_w: '<boolean>', f1_x: '<number>', f2_e: '<boolean>', f3_y: '<array>', f4_o: '<null>', f5_q: '<array>'}, 'SWMJtZZObl');
    var add_11 = objectStore_3.add({f0_d: '<boolean>', f1_i: '<null>', f2_q: '<array>', f3_x: '<null>', f4_n: '<object>'}, 'cZaoTghL');
    var getAll_8;
    try{
        KeyRange_70 = IDBKeyRange.only('SWMJtZZObl');
        getAll_8 = objectStore_3.getAll(KeyRange_70);
    }
    catch (e){
        KeyRange_71 = IDBKeyRange.only('FKDDLdf');
        getAll_8 = objectStore_3.getAll(KeyRange_71);
    }

    var clear_15 = objectStore_3.clear();
    var get_18;
    try{
        KeyRange_72 = IDBKeyRange.bound('iSQY', 'utFSumiVe', false, false);
        get_18 = objectStore_3.get(KeyRange_72);
    }
    catch (e){
    }

    var getAll_9 = objectStore_3.getAll();
    var put_10 = objectStore_3.put({f0_m: '<object>', f1_d: '<boolean>', f2_c: '<boolean>', f3_o: '<number>', f4_e: '<object>', f5_b: '<null>'}, 'rGF');
    var put_11 = objectStore_3.put({f0_r: '<object>', f1_z: '<boolean>', f2_j: '<number>', f3_k: '<null>', f4_o: '<string>', f5_r: '<number>', f6_k: '<string>', f7_v: '<null>'}, 'QmljzjKd');
    var get_19;
    try{
        KeyRange_74 = IDBKeyRange.only('rGF');
        get_19 = objectStore_3.get(KeyRange_74);
    }
    catch (e){
    }

    var add_12 = objectStore_3.add({f0_r: '<object>', f1_l: '<number>'}, 'lIqaMmWlCe');
    var add_13 = objectStore_3.add({f0_f: '<boolean>', f1_j: '<number>', f2_z: '<boolean>', f3_g: '<array>', f4_s: '<null>', f5_b: '<object>', f6_w: '<string>'}, 'Ksuj');
    var get_20;
    try{
        KeyRange_76 = IDBKeyRange.bound('XvVXaIGmDK', 'QmljzjKd', false, true);
        get_20 = objectStore_3.get(KeyRange_76);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_78 = IDBKeyRange.bound('Ksuj', 'FKDDLdf', true, true);
        count_15 = objectStore_3.count(KeyRange_78);
    }
    catch (e){
    }

    var add_14 = objectStore_3.add({f0_d: '<array>', f1_a: '<string>', f2_t: '<string>', f3_y: '<null>', f4_x: '<array>', f5_r: '<boolean>', f6_v: '<null>', f7_w: '<null>'}, 'oMPXJTiLRsMR');
    var count_16;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('oMPXJTiLRsMR', false);
        count_16 = objectStore_3.count(KeyRange_80);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_82 = IDBKeyRange.bound('SWMJtZZObl', 'rGF', true, false);
        get_21 = objectStore_3.get(KeyRange_82);
    }
    catch (e){
    }

    var put_12 = objectStore_3.put({f0_d: '<object>', f1_f: '<null>', f2_k: '<object>', f3_m: '<null>', f4_f: '<object>'}, 'pjbcGtCw');
    var add_15 = objectStore_3.add({f0_w: '<boolean>', f1_r: '<array>', f2_x: '<number>', f3_k: '<object>', f4_o: '<object>', f5_j: '<object>', f6_a: '<string>'}, 'RaDBiiNRmuK');
    var clear_16 = objectStore_3.clear();
    var clear_17 = objectStore_3.clear();
    var add_16 = objectStore_3.add({f0_r: '<boolean>', f1_l: '<array>', f2_c: '<number>', f3_r: '<array>', f4_s: '<object>', f5_g: '<object>'}, 'DqcXzKLT');
    var get_22;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('cZaoTghL', true);
        get_22 = objectStore_3.get(KeyRange_84);
    }
    catch (e){
    }

    var clear_18 = objectStore_3.clear();
    var count_17 = objectStore_3.count();
    var getAllKeys_3 = objectStore_3.getAllKeys(3430848681);
    var add_17 = objectStore_3.add({f0_a: '<null>', f1_o: '<string>', f2_a: '<object>'}, 'SYO');
    var count_18 = objectStore_3.count();
    var index_2 = objectStore_3.index('index_1');
    var clear_19 = objectStore_3.clear();
    var clear_20 = objectStore_3.clear();
    var put_13 = objectStore_3.put({f0_e: '<boolean>', f1_m: '<number>', f2_g: '<boolean>', f3_f: '<string>', f4_a: '<object>', f5_g: '<object>'}, 'WJnRrwhqQy');
    var get_23;
    try{
        KeyRange_86 = IDBKeyRange.only('QmljzjKd');
        get_23 = objectStore_3.get(KeyRange_86);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_88 = IDBKeyRange.bound('UxplONnwZNMj', 'Ksuj', false, false);
        delete_4 = objectStore_3.delete(KeyRange_88);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('pjbcGtCw', false);
        getAll_10 = objectStore_3.getAll(KeyRange_90);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('XvVXaIGmDK');
        getAll_10 = objectStore_3.getAll(KeyRange_91);
    }

    var count_19;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('utFSumiVe', false);
        count_19 = objectStore_3.count(KeyRange_92);
    }
    catch (e){
    }

    var add_18 = objectStore_3.add({f0_s: '<number>', f1_q: '<object>'}, 'kyVVXuFD');
    var delete_5;
    try{
        KeyRange_94 = IDBKeyRange.bound('pjbcGtCw', 'oMPXJTiLRsMR', true, false);
        delete_5 = objectStore_3.delete(KeyRange_94);
    }
    catch (e){
    }

    var add_19 = objectStore_3.add({f0_k: '<number>', f1_g: '<array>', f2_e: '<boolean>', f3_b: '<boolean>', f4_v: '<boolean>', f5_g: '<number>', f6_h: '<object>'}, 'cLAkCKxzaa');
    var count_20 = objectStore_3.count();
    var add_20 = objectStore_3.add({f0_t: '<string>', f1_n: '<null>', f2_y: '<null>', f3_f: '<null>', f4_i: '<number>', f5_k: '<number>'}, 'zDGK');
    var count_21;
    try{
        KeyRange_96 = IDBKeyRange.bound('Ksuj', 'UxplONnwZNMj', true, true);
        count_21 = objectStore_3.count(KeyRange_96);
    }
    catch (e){
    }

    var add_21 = objectStore_3.add({f0_l: '<null>', f1_o: '<string>', f2_l: '<object>', f3_z: '<null>'}, 'XcqjbSbGEGm');
    var clear_21 = objectStore_3.clear();
    var put_14 = objectStore_3.put({f0_u: '<object>', f1_g: '<array>', f2_j: '<object>', f3_w: '<array>', f4_o: '<object>', f5_m: '<object>', f6_g: '<string>', f7_u: '<string>', f8_h: '<number>'}, 'qKPZvm');
    var put_15 = objectStore_3.put({f0_l: '<array>', f1_a: '<array>', f2_z: '<string>', f3_g: '<boolean>', f4_p: '<boolean>', f5_w: '<null>', f6_z: '<null>', f7_i: '<number>', f8_j: '<array>'}, 'ngruI');
    var count_22 = objectStore_3.count();
    var add_22 = objectStore_3.add({f0_q: '<string>', f1_l: '<boolean>', f2_r: '<string>', f3_k: '<number>', f4_z: '<null>', f5_s: '<number>', f6_a: '<number>', f7_y: '<boolean>'}, 'FQw');
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8661')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};