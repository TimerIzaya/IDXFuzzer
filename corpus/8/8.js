let db;
const openRequest = window.indexedDB.open('str_343', 5843126527335220)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_95');
    var index_90 = objectStore_0.createIndex('index_90', 'test');
    objectStore_0.deleteIndex('index_90')
    var index_91 = objectStore_0.createIndex('index_91', 'test', {multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var index_92 = objectStore_0.createIndex('index_92', 'test', {multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_96', {keypath: 'DOoUiVDwj.LjBvBXk'});
    var clear_1 = objectStore_1.clear();
    var index_93 = objectStore_1.createIndex('index_93', 'test', {multiEntry: true});
    var clear_2 = objectStore_0.clear();
    objectStore_0.deleteIndex('index_92')
    var add_0 = objectStore_0.add({f0_y: '<null>', f1_f: '<boolean>', f2_c: '<null>', f3_o: '<null>', f4_s: '<boolean>', f5_z: '<object>', f6_q: '<boolean>'}, 'aZeBROqd');
    var clear_3 = objectStore_0.clear();
    var count_0 = objectStore_0.count();
    var add_1 = objectStore_1.add({f0_t: '<number>', f1_x: '<null>', f2_j: '<string>', f3_e: '<object>', f4_p: '<number>'}, 'PzgVLsec');
    var clear_4 = objectStore_1.clear();
    var index_94 = objectStore_1.createIndex('index_94', 'test', {multiEntry: true});
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('PzgVLsec', 'PzgVLsec', true, true);
        getAll_0 = objectStore_1.getAll(KeyRange_0, 3543449659);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('PzgVLsec');
        getAll_0 = objectStore_1.getAll(KeyRange_1);
    }

    var clear_5 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_97', {autoIncrement: false});
    var put_0 = objectStore_2.put({f0_s: '<array>', f1_o: '<boolean>', f2_u: '<string>', f3_s: '<object>', f4_e: '<object>', f5_h: '<null>', f6_o: '<number>', f7_y: '<null>', f8_q: '<boolean>'}, 'DgqIKzllhX');
    var objectStore_3 = db.createObjectStore('objectStore_98');
    var index_95 = objectStore_1.createIndex('index_95', 'test', {unique: true, multiEntry: true});
    var put_1 = objectStore_1.put({f0_y: '<array>'}, 'BeBgZO');
    var getAllKeys_0 = objectStore_2.getAllKeys(1769074260);
    var index_96 = objectStore_3.createIndex('index_96', 'test', {multiEntry: false});
    var add_2 = objectStore_2.add({f0_y: '<null>', f1_w: '<string>', f2_n: '<array>'}, 'NaiWLw');
    var objectStore_4 = db.createObjectStore('objectStore_99', {keypath: 'OPgVyPN'});
    var clear_6 = objectStore_2.clear();
    var objectStore_5 = db.createObjectStore('objectStore_100', {keypath: 'TLbpnt.rRB.QkuSmdKrUd.pIGcHaex.ggHO.gELOjxs.BHykEcDM.cLb', autoIncrement: false});
    db.deleteObjectStore('objectStore_98')
    var add_3 = objectStore_0.add({f0_r: '<string>', f1_g: '<null>', f2_c: '<array>', f3_p: '<object>', f4_q: '<array>', f5_u: '<boolean>', f6_w: '<null>', f7_x: '<boolean>', f8_e: '<array>'}, 'JsWVNYX');
    var put_2 = objectStore_5.put({f0_s: '<number>', f1_a: '<boolean>', f2_d: '<null>'}, 'xDBpvP');
    var put_3 = objectStore_5.put({f0_r: '<number>', f1_y: '<boolean>', f2_v: '<number>', f3_y: '<object>'}, 'ytuHH');
    var count_1 = objectStore_1.count();
    var put_4 = objectStore_4.put({f0_s: '<boolean>', f1_j: '<boolean>', f2_w: '<null>', f3_s: '<number>', f4_g: '<boolean>', f5_v: '<boolean>'}, 'jPaEz');
    var index_97 = objectStore_4.createIndex('index_97', 'test', {unique: true});
    var put_5 = objectStore_2.put({f0_x: '<array>', f1_m: '<object>', f2_o: '<array>', f3_c: '<null>', f4_o: '<object>', f5_m: '<string>'}, 'TMCfuIDsb');
    var count_2;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('BeBgZO', true);
        count_2 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var add_4 = objectStore_2.add({f0_u: '<string>', f1_j: '<string>', f2_i: '<string>'}, 'YlwVaonP');
    var getAllKeys_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('PzgVLsec', 'BeBgZO', true, false);
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('BeBgZO');
        getAllKeys_1 = objectStore_1.getAllKeys(KeyRange_5);
    }

    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.only('YlwVaonP');
        get_0 = objectStore_2.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_1 = objectStore_2.getAll();
    var count_3 = objectStore_5.count();
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('jPaEz', 'jPaEz', true, true);
        delete_0 = objectStore_4.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('BeBgZO', 'PzgVLsec', true, true);
        get_1 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('BeBgZO', 'BeBgZO', false, true);
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('BeBgZO');
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_13);
    }

    var add_5 = objectStore_4.add({f0_p: '<null>', f1_m: '<number>', f2_x: '<object>', f3_o: '<object>', f4_m: '<null>', f5_v: '<array>', f6_c: '<string>'}, 'zoUSUuclbm');
    var count_4 = objectStore_1.count();
    var clear_7 = objectStore_4.clear();
    var put_6 = objectStore_4.put({f0_d: '<string>', f1_u: '<null>', f2_b: '<null>', f3_g: '<number>', f4_p: '<array>', f5_j: '<null>', f6_q: '<array>', f7_q: '<object>'}, 'PVoVqZZVjq');
    var objectStore_6 = db.createObjectStore('objectStore_101', {keypath: 'ZvIZwajbfKxt'});
    var delete_1;
    try{
        KeyRange_14 = IDBKeyRange.only('xDBpvP');
        delete_1 = objectStore_5.delete(KeyRange_14);
    }
    catch (e){
    }

    var put_7 = objectStore_6.put({f0_y: '<object>', f1_g: '<boolean>', f2_n: '<array>', f3_d: '<array>', f4_c: '<boolean>'}, 'JcCkpH');
    var index_98 = objectStore_1.createIndex('index_98', 'test', {multiEntry: false});
    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('xDBpvP', 'ytuHH', true, false);
        get_2 = objectStore_5.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_18 = IDBKeyRange.only('PVoVqZZVjq');
        getAll_2 = objectStore_4.getAll(KeyRange_18, 2575199801);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('PVoVqZZVjq');
        getAll_2 = objectStore_4.getAll(KeyRange_19);
    }

    var clear_8 = objectStore_2.clear();
    var clear_9 = objectStore_4.clear();
    var clear_10 = objectStore_1.clear();
    var objectStore_7 = db.createObjectStore('objectStore_102', {keypath: 'XWZoedBdBhQW.rcePoUGmmSqy.mxyNtjbCJg.qiFFs.EVA.OWOy'});
    var getAllKeys_3 = objectStore_4.getAllKeys(220451734);
    var clear_11 = objectStore_4.clear();
    var objectStore_8 = db.createObjectStore('objectStore_103', {autoIncrement: false});
    var getAllKeys_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('JcCkpH', 'JcCkpH', true, false);
        getAllKeys_4 = objectStore_6.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('JcCkpH');
        getAllKeys_4 = objectStore_6.getAllKeys(KeyRange_21);
    }

    var add_6 = objectStore_2.add({f0_l: '<object>', f1_x: '<null>', f2_l: '<boolean>', f3_e: '<null>'}, 'evwYiBO');
    var objectStore_9 = db.createObjectStore('objectStore_104', {autoIncrement: false});
    var add_7 = objectStore_5.add({f0_u: '<string>', f1_t: '<string>', f2_n: '<number>'}, 'uLU');
    var clear_12 = objectStore_1.clear();
    var put_8 = objectStore_5.put({f0_f: '<boolean>', f1_f: '<null>', f2_t: '<string>', f3_k: '<array>', f4_r: '<string>', f5_i: '<string>', f6_t: '<object>', f7_v: '<number>', f8_i: '<array>'}, 'ICTEOSiPmx');
    var getAll_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('JcCkpH', 'JcCkpH', false, false);
        getAll_3 = objectStore_6.getAll(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('JcCkpH');
        getAll_3 = objectStore_6.getAll(KeyRange_23);
    }

    var index_99 = objectStore_8.createIndex('index_99', 'test', {unique: false});
    var delete_2;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('jPaEz', true);
        delete_2 = objectStore_4.delete(KeyRange_24);
    }
    catch (e){
    }

    var add_8 = objectStore_6.add({f0_w: '<string>', f1_z: '<number>', f2_p: '<number>', f3_b: '<boolean>', f4_c: '<boolean>', f5_f: '<boolean>', f6_y: '<string>', f7_c: '<object>', f8_h: '<string>'}, 'lhV');
    var index_100 = objectStore_6.createIndex('index_100', 'test', {multiEntry: false});
    var getAll_4 = objectStore_0.getAll(3460373015);
    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('ICTEOSiPmx', false);
        count_5 = objectStore_5.count(KeyRange_26);
    }
    catch (e){
    }

    var index_101 = objectStore_2.createIndex('index_101', 'test', {unique: true, multiEntry: false});
    var put_9 = objectStore_1.put({f0_y: '<array>', f1_p: '<number>', f2_o: '<object>', f3_p: '<number>', f4_l: '<array>', f5_d: '<string>', f6_c: '<object>', f7_l: '<array>', f8_r: '<array>'}, 'ctS');
    var count_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('ICTEOSiPmx', 'ytuHH', false, true);
        count_6 = objectStore_5.count(KeyRange_28);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('JcCkpH', true);
        count_7 = objectStore_6.count(KeyRange_30);
    }
    catch (e){
    }

    var add_9 = objectStore_9.add({f0_s: '<object>', f1_e: '<object>'}, 'IDtTqna');
    var objectStore_10 = db.createObjectStore('objectStore_105', {keypath: 'soozCA.xtCqPBxbhb.GMMDT.kLiQhhTdiw.Pnamd.dhi.dMsGcYjN'});
    var add_10 = objectStore_1.add({f0_u: '<object>', f1_l: '<string>', f2_s: '<null>', f3_v: '<object>', f4_f: '<array>', f5_t: '<object>'}, 'bVHkfXZ');
    var put_10 = objectStore_9.put({f0_k: '<null>', f1_a: '<null>'}, 'ZmnkfJwquM');
    var objectStore_11 = db.createObjectStore('objectStore_106', {keypath: 'vnHqGAEwK'});
    var add_11 = objectStore_1.add({f0_m: '<boolean>', f1_a: '<boolean>', f2_v: '<number>', f3_k: '<array>', f4_r: '<object>', f5_c: '<string>', f6_e: '<number>', f7_a: '<boolean>'}, 'WSIQUN');
    var add_12 = objectStore_0.add({f0_a: '<object>', f1_k: '<boolean>', f2_a: '<array>'}, 'sapzt');
    var index_0 = objectStore_0.index('index_91');
    var getAllKeys_5 = objectStore_1.getAllKeys();
    var get_3;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('PzgVLsec', false);
        get_3 = objectStore_1.get(KeyRange_32);
    }
    catch (e){
    }

    var clear_13 = objectStore_4.clear();
    var objectStore_12 = db.createObjectStore('objectStore_107', {keypath: 'fimmMeafcae'});
    db.deleteObjectStore('objectStore_97')
    var count_8;
    try{
        KeyRange_34 = IDBKeyRange.bound('PzgVLsec', 'ctS', true, true);
        count_8 = objectStore_1.count(KeyRange_34);
    }
    catch (e){
    }

    var add_13 = objectStore_1.add({f0_q: '<object>', f1_k: '<array>', f2_y: '<object>', f3_m: '<null>', f4_n: '<array>', f5_j: '<boolean>'}, 'iGZmgWTKBQZo');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_80 = db.transaction(['objectStore_105'], 'readonly', {durability:"strict"})
    var objectStore_105 = txn_80.objectStore('objectStore_105');
    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_81 = db.transaction(['objectStore_102', 'objectStore_100'], 'readwrite', {durability:"strict"})
    var objectStore_100 = txn_81.objectStore('objectStore_100');
    var put_11 = objectStore_100.put({f0_l: '<string>', f1_j: '<string>', f2_w: '<number>', f3_b: '<object>', f4_t: '<object>', f5_q: '<string>', f6_z: '<boolean>', f7_q: '<string>', f8_e: '<number>', f9_i: '<string>'}, 'BZKa');
    var put_12 = objectStore_100.put({f0_e: '<object>', f1_j: '<boolean>', f2_i: '<string>', f3_y: '<array>', f4_t: '<object>'}, 'GNhye');
    var count_9 = objectStore_100.count();
    var count_10;
    try{
        KeyRange_36 = IDBKeyRange.only('ytuHH');
        count_10 = objectStore_100.count(KeyRange_36);
    }
    catch (e){
    }

    var add_14 = objectStore_100.add({f0_m: '<object>', f1_o: '<boolean>', f2_y: '<boolean>', f3_u: '<number>', f4_f: '<string>'}, 'xMSVjTOEa');
    var get_4;
    try{
        KeyRange_38 = IDBKeyRange.only('GNhye');
        get_4 = objectStore_100.get(KeyRange_38);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_40 = IDBKeyRange.only('BZKa');
        delete_3 = objectStore_100.delete(KeyRange_40);
    }
    catch (e){
    }

    var count_11 = objectStore_100.count();
    var clear_14 = objectStore_100.clear();
    var put_13 = objectStore_100.put({f0_l: '<boolean>', f1_k: '<null>', f2_r: '<boolean>'}, 'GlWHJgkCqM');
    var get_5;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('GNhye', true);
        get_5 = objectStore_100.get(KeyRange_42);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('GlWHJgkCqM', true);
        getAllKeys_6 = objectStore_100.getAllKeys(KeyRange_44, 2899724458);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('xDBpvP');
        getAllKeys_6 = objectStore_100.getAllKeys(KeyRange_45);
    }

    var put_14 = objectStore_100.put({f0_n: '<string>', f1_c: '<string>', f2_f: '<array>', f3_c: '<boolean>', f4_d: '<null>', f5_w: '<array>', f6_i: '<object>', f7_z: '<array>', f8_q: '<string>'}, 'BWOiodDxOXw');
    var put_15 = objectStore_100.put({f0_n: '<null>', f1_b: '<null>', f2_j: '<number>', f3_z: '<null>', f4_m: '<string>', f5_p: '<array>'}, 'VmlJU');
    var getAllKeys_7;
    try{
        KeyRange_46 = IDBKeyRange.bound('ytuHH', 'xDBpvP', true, false);
        getAllKeys_7 = objectStore_100.getAllKeys(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('BZKa');
        getAllKeys_7 = objectStore_100.getAllKeys(KeyRange_47);
    }

    var count_12;
    try{
        KeyRange_48 = IDBKeyRange.only('VmlJU');
        count_12 = objectStore_100.count(KeyRange_48);
    }
    catch (e){
    }

    var put_16 = objectStore_100.put({f0_e: '<boolean>'}, 'poNiEckr');
    var clear_15 = objectStore_100.clear();
    var delete_4;
    try{
        KeyRange_50 = IDBKeyRange.bound('VmlJU', 'GNhye', true, false);
        delete_4 = objectStore_100.delete(KeyRange_50);
    }
    catch (e){
    }

    var delete_5;
    try{
        KeyRange_52 = IDBKeyRange.bound('xMSVjTOEa', 'GNhye', true, true);
        delete_5 = objectStore_100.delete(KeyRange_52);
    }
    catch (e){
    }

    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_81.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_82 = db.transaction(['objectStore_99'], 'readwrite', {durability:"default"})
    var objectStore_99 = txn_82.objectStore('objectStore_99');
    var add_15 = objectStore_99.add({f0_r: '<array>', f1_q: '<string>', f2_i: '<boolean>', f3_p: '<string>', f4_i: '<object>', f5_f: '<number>', f6_f: '<array>', f7_i: '<object>', f8_h: '<object>'}, 'iiftydmITBYU');
    var add_16 = objectStore_99.add({f0_q: '<array>', f1_t: '<null>'}, 'rVNKtUIv');
    var clear_16 = objectStore_99.clear();
    var get_6;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('rVNKtUIv', true);
        get_6 = objectStore_99.get(KeyRange_54);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_56 = IDBKeyRange.bound('iiftydmITBYU', 'rVNKtUIv', true, false);
        getAllKeys_8 = objectStore_99.getAllKeys(KeyRange_56, 321788385);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('PVoVqZZVjq');
        getAllKeys_8 = objectStore_99.getAllKeys(KeyRange_57);
    }

    var add_17 = objectStore_99.add({f0_m: '<array>', f1_h: '<number>', f2_r: '<null>', f3_a: '<array>', f4_s: '<boolean>', f5_c: '<number>', f6_h: '<array>', f7_p: '<number>', f8_i: '<number>', f9_k: '<array>'}, 'VyHXrvGRtm');
    var add_18 = objectStore_99.add({f0_z: '<number>', f1_u: '<number>', f2_m: '<object>', f3_t: '<array>', f4_i: '<object>', f5_e: '<object>', f6_m: '<string>', f7_e: '<boolean>', f8_m: '<null>', f9_d: '<null>'}, 'HPrzYKEpqBZ');
    var get_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('zoUSUuclbm', 'rVNKtUIv', false, true);
        get_7 = objectStore_99.get(KeyRange_58);
    }
    catch (e){
    }

    var add_19 = objectStore_99.add({f0_r: '<number>', f1_c: '<boolean>'}, 'uRTEkhJoZPSQ');
    var getAll_5 = objectStore_99.getAll(256780494);
    var add_20 = objectStore_99.add({f0_g: '<object>', f1_n: '<number>', f2_q: '<array>', f3_m: '<object>', f4_s: '<null>', f5_k: '<object>', f6_o: '<number>', f7_t: '<object>'}, 'KrzrGZUJh');
    var count_13;
    try{
        KeyRange_60 = IDBKeyRange.only('KrzrGZUJh');
        count_13 = objectStore_99.count(KeyRange_60);
    }
    catch (e){
    }

    var add_21 = objectStore_99.add({f0_h: '<array>', f1_m: '<number>', f2_q: '<array>', f3_n: '<string>', f4_a: '<string>', f5_d: '<boolean>', f6_x: '<number>'}, 'yUmLMtwgu');
    var index_1 = objectStore_99.index('index_97');
    var put_17 = objectStore_99.put({f0_k: '<array>', f1_p: '<boolean>', f2_f: '<array>', f3_f: '<string>', f4_g: '<array>', f5_p: '<string>', f6_m: '<null>', f7_d: '<array>', f8_t: '<null>'}, 'jOOBeqd');
    var count_14;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('jOOBeqd', false);
        count_14 = objectStore_99.count(KeyRange_62);
    }
    catch (e){
    }

    var add_22 = objectStore_99.add({f0_q: '<string>', f1_r: '<object>'}, 'bFi');
    var put_18 = objectStore_99.put({f0_c: '<string>', f1_b: '<array>', f2_w: '<array>', f3_l: '<boolean>', f4_k: '<boolean>', f5_w: '<object>', f6_b: '<boolean>', f7_y: '<null>'}, 'rvAosNBpmNBV');
    txn_82.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_82.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_82.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_83 = db.transaction(['objectStore_101', 'objectStore_104', 'objectStore_100'], 'readwrite', {durability:"strict"})
    var objectStore_101 = txn_83.objectStore('objectStore_101');
    var count_15;
    try{
        KeyRange_64 = IDBKeyRange.bound('lhV', 'lhV', false, false);
        count_15 = objectStore_101.count(KeyRange_64);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_66 = IDBKeyRange.bound('lhV', 'lhV', true, false);
        get_8 = objectStore_101.get(KeyRange_66);
    }
    catch (e){
    }

    var put_19 = objectStore_101.put({f0_t: '<boolean>', f1_k: '<array>', f2_w: '<string>', f3_u: '<array>', f4_y: '<boolean>', f5_k: '<number>', f6_b: '<array>', f7_u: '<null>'}, 'mpJp');
    var count_16;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('lhV', false);
        count_16 = objectStore_101.count(KeyRange_68);
    }
    catch (e){
    }

    var add_23 = objectStore_101.add({f0_n: '<string>', f1_f: '<number>', f2_b: '<null>'}, 'TxhSxCaVoI');
    var add_24 = objectStore_101.add({f0_b: '<null>', f1_b: '<string>', f2_o: '<boolean>', f3_w: '<object>', f4_z: '<object>', f5_v: '<string>', f6_z: '<number>', f7_k: '<array>'}, 'fJqzqjvnnwN');
    var put_20 = objectStore_101.put({f0_z: '<boolean>', f1_q: '<string>', f2_r: '<array>', f3_i: '<array>', f4_m: '<boolean>', f5_q: '<array>', f6_v: '<array>', f7_u: '<boolean>', f8_n: '<null>'}, 'FgWuyKK');
    var delete_6;
    try{
        KeyRange_70 = IDBKeyRange.bound('mpJp', 'lhV', true, false);
        delete_6 = objectStore_101.delete(KeyRange_70);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('FgWuyKK', false);
        count_17 = objectStore_101.count(KeyRange_72);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('mpJp', true);
        get_9 = objectStore_101.get(KeyRange_74);
    }
    catch (e){
    }

    var add_25 = objectStore_101.add({f0_b: '<object>', f1_z: '<array>', f2_o: '<boolean>', f3_x: '<string>', f4_w: '<string>', f5_i: '<string>'}, 'dtcyiRcl');
    var count_18;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('TxhSxCaVoI', true);
        count_18 = objectStore_101.count(KeyRange_76);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_78 = IDBKeyRange.only('fJqzqjvnnwN');
        count_19 = objectStore_101.count(KeyRange_78);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('FgWuyKK', false);
        count_20 = objectStore_101.count(KeyRange_80);
    }
    catch (e){
    }

    var add_26 = objectStore_101.add({f0_g: '<object>', f1_o: '<string>'}, 'XbwdKiRRGBJS');
    var count_21;
    try{
        KeyRange_82 = IDBKeyRange.bound('FgWuyKK', 'TxhSxCaVoI', true, false);
        count_21 = objectStore_101.count(KeyRange_82);
    }
    catch (e){
    }

    var add_27 = objectStore_101.add({f0_f: '<object>', f1_h: '<string>', f2_q: '<number>', f3_k: '<number>', f4_a: '<number>', f5_v: '<null>', f6_f: '<boolean>', f7_e: '<array>'}, 'uIc');
    var add_28 = objectStore_101.add({f0_o: '<string>', f1_z: '<array>', f2_o: '<boolean>', f3_w: '<object>'}, 'vBzHqGEW');
    var get_10;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('uIc', true);
        get_10 = objectStore_101.get(KeyRange_84);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_86 = IDBKeyRange.bound('dtcyiRcl', 'FgWuyKK', false, false);
        get_11 = objectStore_101.get(KeyRange_86);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('fJqzqjvnnwN', true);
        getAllKeys_9 = objectStore_101.getAllKeys(KeyRange_88);
    }
    catch (e){
        KeyRange_89 = IDBKeyRange.only('TxhSxCaVoI');
        getAllKeys_9 = objectStore_101.getAllKeys(KeyRange_89);
    }

    var getAllKeys_10 = objectStore_101.getAllKeys(80249541);
    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_83.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_83.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_84 = db.transaction(['objectStore_106'], 'readwrite', {durability:"default"})
    var objectStore_106 = txn_84.objectStore('objectStore_106');
    var add_29 = objectStore_106.add({f0_d: '<string>', f1_r: '<number>'}, 'YvgRRs');
    var count_22 = objectStore_106.count();
    var count_23 = objectStore_106.count();
    var getAll_6 = objectStore_106.getAll(3326506365);
    var getAllKeys_11 = objectStore_106.getAllKeys();
    var count_24;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('YvgRRs', true);
        count_24 = objectStore_106.count(KeyRange_90);
    }
    catch (e){
    }

    var put_21 = objectStore_106.put({f0_d: '<object>', f1_a: '<null>', f2_v: '<number>', f3_p: '<number>', f4_y: '<object>'}, 'ICkqMkBDkY');
    var add_30 = objectStore_106.add({f0_w: '<boolean>', f1_e: '<string>', f2_x: '<string>', f3_b: '<number>', f4_o: '<boolean>', f5_g: '<array>', f6_m: '<array>', f7_l: '<null>'}, 'Efpm');
    var clear_17 = objectStore_106.clear();
    var put_22 = objectStore_106.put({f0_i: '<null>', f1_s: '<string>', f2_w: '<boolean>', f3_t: '<string>', f4_k: '<number>', f5_n: '<array>', f6_a: '<string>', f7_r: '<object>'}, 'JEVlPO');
    var add_31 = objectStore_106.add({f0_w: '<string>'}, 'jnlqgmK');
    var put_23 = objectStore_106.put({f0_s: '<number>', f1_m: '<null>', f2_e: '<boolean>', f3_p: '<array>', f4_w: '<string>', f5_q: '<null>', f6_m: '<boolean>', f7_p: '<array>'}, 'ChwHxNW');
    var clear_18 = objectStore_106.clear();
    var put_24 = objectStore_106.put({f0_t: '<boolean>', f1_y: '<null>', f2_p: '<object>', f3_b: '<string>', f4_r: '<boolean>'}, 'NGaehTUVMN');
    var add_32 = objectStore_106.add({f0_w: '<object>', f1_u: '<number>', f2_v: '<boolean>', f3_k: '<string>'}, 'CHs');
    var count_25 = objectStore_106.count();
    var getAll_7;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('CHs', false);
        getAll_7 = objectStore_106.getAll(KeyRange_92, 3781732611);
    }
    catch (e){
        KeyRange_93 = IDBKeyRange.only('NGaehTUVMN');
        getAll_7 = objectStore_106.getAll(KeyRange_93);
    }

    txn_84.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_84.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_85 = db.transaction(['objectStore_105', 'objectStore_96', 'objectStore_100', 'objectStore_106', 'objectStore_104', 'objectStore_99'], 'readonly', {durability:"relaxed"})
    var objectStore_96 = txn_85.objectStore('objectStore_96');
    var count_26;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('WSIQUN', false);
        count_26 = objectStore_96.count(KeyRange_94);
    }
    catch (e){
    }

    var count_27 = objectStore_96.count();
    var getAll_8;
    try{
        KeyRange_96 = IDBKeyRange.bound('BeBgZO', 'iGZmgWTKBQZo', false, false);
        getAll_8 = objectStore_96.getAll(KeyRange_96, 73168263);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('ctS');
        getAll_8 = objectStore_96.getAll(KeyRange_97);
    }

    var index_2 = objectStore_96.index('index_95');
    var count_28 = objectStore_96.count();
    var count_29 = objectStore_96.count();
    var count_30 = objectStore_96.count();
    var get_12;
    try{
        KeyRange_98 = IDBKeyRange.bound('PzgVLsec', 'bVHkfXZ', false, true);
        get_12 = objectStore_96.get(KeyRange_98);
    }
    catch (e){
    }

    var count_31 = objectStore_96.count();
    var count_32 = objectStore_96.count();
    var get_13;
    try{
        KeyRange_100 = IDBKeyRange.bound('WSIQUN', 'bVHkfXZ', true, false);
        get_13 = objectStore_96.get(KeyRange_100);
    }
    catch (e){
    }

    var index_3 = objectStore_96.index('index_94');
    var getAllKeys_12 = objectStore_96.getAllKeys();
    txn_85.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_85.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_85.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_86 = db.transaction(['objectStore_107', 'objectStore_100', 'objectStore_104', 'objectStore_105', 'objectStore_96'], 'readonly', {durability:"strict"})
    var objectStore_107 = txn_86.objectStore('objectStore_107');
    txn_86.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_86.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_86.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_87 = db.transaction(['objectStore_104', 'objectStore_106'], 'readonly', {durability:"relaxed"})
    var objectStore_104 = txn_87.objectStore('objectStore_104');
    var get_14;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('IDtTqna', true);
        get_14 = objectStore_104.get(KeyRange_102);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_104 = IDBKeyRange.bound('ZmnkfJwquM', 'ZmnkfJwquM', true, true);
        count_33 = objectStore_104.count(KeyRange_104);
    }
    catch (e){
    }

    var count_34 = objectStore_104.count();
    var get_15;
    try{
        KeyRange_106 = IDBKeyRange.bound('ZmnkfJwquM', 'IDtTqna', true, false);
        get_15 = objectStore_104.get(KeyRange_106);
    }
    catch (e){
    }

    var count_35;
    try{
        KeyRange_108 = IDBKeyRange.bound('ZmnkfJwquM', 'IDtTqna', true, true);
        count_35 = objectStore_104.count(KeyRange_108);
    }
    catch (e){
    }

    var count_36 = objectStore_104.count();
    var get_16;
    try{
        KeyRange_110 = IDBKeyRange.bound('IDtTqna', 'ZmnkfJwquM', false, true);
        get_16 = objectStore_104.get(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_104.getAllKeys();
    var get_17;
    try{
        KeyRange_112 = IDBKeyRange.only('ZmnkfJwquM');
        get_17 = objectStore_104.get(KeyRange_112);
    }
    catch (e){
    }

    var count_37;
    try{
        KeyRange_114 = IDBKeyRange.lowerBound('ZmnkfJwquM', true);
        count_37 = objectStore_104.count(KeyRange_114);
    }
    catch (e){
    }

    var count_38;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('ZmnkfJwquM', true);
        count_38 = objectStore_104.count(KeyRange_116);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_118 = IDBKeyRange.bound('IDtTqna', 'ZmnkfJwquM', true, false);
        get_18 = objectStore_104.get(KeyRange_118);
    }
    catch (e){
    }

    var count_39;
    try{
        KeyRange_120 = IDBKeyRange.bound('ZmnkfJwquM', 'IDtTqna', false, true);
        count_39 = objectStore_104.count(KeyRange_120);
    }
    catch (e){
    }

    var count_40;
    try{
        KeyRange_122 = IDBKeyRange.only('ZmnkfJwquM');
        count_40 = objectStore_104.count(KeyRange_122);
    }
    catch (e){
    }

    var count_41;
    try{
        KeyRange_124 = IDBKeyRange.only('IDtTqna');
        count_41 = objectStore_104.count(KeyRange_124);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_126 = IDBKeyRange.only('ZmnkfJwquM');
        getAll_9 = objectStore_104.getAll(KeyRange_126, 1320390654);
    }
    catch (e){
        KeyRange_127 = IDBKeyRange.only('IDtTqna');
        getAll_9 = objectStore_104.getAll(KeyRange_127);
    }

    var getAll_10;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('ZmnkfJwquM', true);
        getAll_10 = objectStore_104.getAll(KeyRange_128);
    }
    catch (e){
        KeyRange_129 = IDBKeyRange.only('IDtTqna');
        getAll_10 = objectStore_104.getAll(KeyRange_129);
    }

    txn_87.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_87.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_87.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_88 = db.transaction(['objectStore_104'], 'readwrite', {durability:"relaxed"})
    var objectStore_104 = txn_88.objectStore('objectStore_104');
    var getAllKeys_14;
    try{
        KeyRange_130 = IDBKeyRange.lowerBound('ZmnkfJwquM', true);
        getAllKeys_14 = objectStore_104.getAllKeys(KeyRange_130, 2473290776);
    }
    catch (e){
        KeyRange_131 = IDBKeyRange.only('IDtTqna');
        getAllKeys_14 = objectStore_104.getAllKeys(KeyRange_131);
    }

    var put_25 = objectStore_104.put({f0_h: '<array>', f1_n: '<string>', f2_i: '<number>', f3_j: '<object>', f4_r: '<string>', f5_v: '<string>', f6_u: '<string>', f7_y: '<number>', f8_f: '<number>', f9_f: '<string>'}, 'IVVS');
    var put_26 = objectStore_104.put({f0_f: '<boolean>', f1_x: '<boolean>', f2_h: '<string>', f3_j: '<array>', f4_b: '<array>', f5_h: '<string>', f6_a: '<number>'}, 'wYzEXzHIOhmt');
    var count_42;
    try{
        KeyRange_132 = IDBKeyRange.only('ZmnkfJwquM');
        count_42 = objectStore_104.count(KeyRange_132);
    }
    catch (e){
    }

    var clear_19 = objectStore_104.clear();
    var count_43 = objectStore_104.count();
    var getAll_11 = objectStore_104.getAll(2702961608);
    var getAll_12 = objectStore_104.getAll();
    var put_27 = objectStore_104.put({f0_q: '<string>', f1_v: '<number>', f2_l: '<boolean>', f3_l: '<string>', f4_o: '<string>'}, 'vgFgPKioLR');
    var put_28 = objectStore_104.put({f0_q: '<string>', f1_x: '<boolean>', f2_y: '<string>', f3_u: '<number>', f4_l: '<boolean>', f5_y: '<object>', f6_r: '<string>', f7_o: '<array>', f8_l: '<boolean>'}, 'HWl');
    var put_29 = objectStore_104.put({f0_e: '<string>'}, 'VAC');
    var clear_20 = objectStore_104.clear();
    var add_33 = objectStore_104.add({f0_c: '<null>', f1_o: '<array>', f2_l: '<null>', f3_n: '<boolean>', f4_b: '<number>', f5_h: '<array>', f6_r: '<number>', f7_y: '<object>', f8_a: '<number>', f9_o: '<boolean>'}, 'pOgHRPoV');
    var add_34 = objectStore_104.add({f0_r: '<object>', f1_f: '<number>', f2_q: '<null>', f3_x: '<array>', f4_m: '<array>', f5_h: '<string>', f6_g: '<object>', f7_o: '<boolean>'}, 'ZxAsm');
    var count_44 = objectStore_104.count();
    var put_30 = objectStore_104.put({f0_o: '<number>', f1_r: '<null>', f2_b: '<array>', f3_n: '<array>', f4_o: '<string>', f5_m: '<null>', f6_k: '<number>', f7_o: '<number>', f8_t: '<number>'}, 'idHzThwIw');
    txn_88.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_88.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_88.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_89 = db.transaction(['objectStore_95'], 'readwrite', {durability:"relaxed"})
    var objectStore_95 = txn_89.objectStore('objectStore_95');
    var get_19;
    try{
        KeyRange_134 = IDBKeyRange.only('JsWVNYX');
        get_19 = objectStore_95.get(KeyRange_134);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_136 = IDBKeyRange.bound('aZeBROqd', 'sapzt', false, false);
        get_20 = objectStore_95.get(KeyRange_136);
    }
    catch (e){
    }

    var count_45 = objectStore_95.count();
    var add_35 = objectStore_95.add({f0_g: '<null>', f1_b: '<string>'}, 'iMiseRWASdo');
    var add_36 = objectStore_95.add({f0_w: '<boolean>', f1_d: '<boolean>', f2_x: '<string>', f3_p: '<number>', f4_i: '<null>', f5_v: '<array>'}, 'jTNG');
    var delete_7;
    try{
        KeyRange_138 = IDBKeyRange.only('JsWVNYX');
        delete_7 = objectStore_95.delete(KeyRange_138);
    }
    catch (e){
    }

    var count_46 = objectStore_95.count();
    var get_21;
    try{
        KeyRange_140 = IDBKeyRange.bound('sapzt', 'jTNG', false, true);
        get_21 = objectStore_95.get(KeyRange_140);
    }
    catch (e){
    }

    var clear_21 = objectStore_95.clear();
    var put_31 = objectStore_95.put({f0_h: '<null>', f1_p: '<boolean>', f2_d: '<boolean>', f3_a: '<number>', f4_x: '<boolean>'}, 'JFPszg');
    var put_32 = objectStore_95.put({f0_d: '<object>', f1_r: '<object>', f2_z: '<object>'}, 'sYlCKRVTrrt');
    var getAllKeys_15 = objectStore_95.getAllKeys();
    var get_22;
    try{
        KeyRange_142 = IDBKeyRange.lowerBound('sapzt', false);
        get_22 = objectStore_95.get(KeyRange_142);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_144 = IDBKeyRange.bound('JsWVNYX', 'iMiseRWASdo', false, true);
        delete_8 = objectStore_95.delete(KeyRange_144);
    }
    catch (e){
    }

    var add_37 = objectStore_95.add({f0_x: '<string>', f1_b: '<number>', f2_a: '<null>', f3_h: '<boolean>', f4_a: '<null>', f5_f: '<object>'}, 'XYLFxI');
    var getAll_13 = objectStore_95.getAll(549260932);
    var getAllKeys_16;
    try{
        KeyRange_146 = IDBKeyRange.only('iMiseRWASdo');
        getAllKeys_16 = objectStore_95.getAllKeys(KeyRange_146, 2764751162);
    }
    catch (e){
        KeyRange_147 = IDBKeyRange.only('JsWVNYX');
        getAllKeys_16 = objectStore_95.getAllKeys(KeyRange_147);
    }

    var delete_9;
    try{
        KeyRange_148 = IDBKeyRange.lowerBound('iMiseRWASdo', false);
        delete_9 = objectStore_95.delete(KeyRange_148);
    }
    catch (e){
    }

    var clear_22 = objectStore_95.clear();
    var count_47 = objectStore_95.count();
    var put_33 = objectStore_95.put({f0_v: '<array>', f1_g: '<number>', f2_b: '<null>', f3_z: '<null>', f4_t: '<object>', f5_u: '<object>', f6_w: '<boolean>', f7_v: '<string>', f8_n: '<array>'}, 'IxEB');
    var getAll_14;
    try{
        KeyRange_150 = IDBKeyRange.bound('iMiseRWASdo', 'jTNG', true, true);
        getAll_14 = objectStore_95.getAll(KeyRange_150, 204474842);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('JsWVNYX');
        getAll_14 = objectStore_95.getAll(KeyRange_151);
    }

    var clear_23 = objectStore_95.clear();
    var add_38 = objectStore_95.add({f0_i: '<boolean>', f1_u: '<number>', f2_j: '<number>', f3_o: '<string>', f4_g: '<boolean>', f5_w: '<object>', f6_e: '<number>', f7_p: '<string>'}, 'rNs');
    var clear_24 = objectStore_95.clear();
    txn_89.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_89.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_89.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1891')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};