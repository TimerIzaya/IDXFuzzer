let db;
const openRequest = window.indexedDB.open('str_2298', 114608985829488)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_8', {keypath: 'iJRwR', autoIncrement: false});
    var put_0 = objectStore_0.put({f0_u: '<number>', f1_p: '<string>'}, 'AVDcVCeGr');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var count_0 = objectStore_0.count();
    var add_0 = objectStore_0.add({f0_g: '<string>'}, 'TbWNvrWMS');
    var index_9 = objectStore_0.createIndex('index_9', 'test', {multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_9');
    var put_1 = objectStore_0.put({f0_z: '<boolean>', f1_u: '<string>', f2_f: '<number>', f3_g: '<array>', f4_s: '<null>', f5_i: '<array>', f6_n: '<number>'}, 'QAEingHReiyX');
    var index_10 = objectStore_0.createIndex('index_10', 'test');
    var put_2 = objectStore_1.put({f0_j: '<null>', f1_x: '<object>', f2_i: '<object>', f3_s: '<string>', f4_q: '<object>', f5_o: '<number>', f6_j: '<number>'}, 'KgyJvtMCW');
    var add_1 = objectStore_0.add({f0_k: '<number>', f1_y: '<array>'}, 'sbma');
    var index_11 = objectStore_0.createIndex('index_11', 'test', {unique: true, multiEntry: true});
    var put_3 = objectStore_0.put({f0_f: '<string>', f1_t: '<number>', f2_q: '<null>', f3_z: '<boolean>'}, 'lGfxG');
    var objectStore_2 = db.createObjectStore('objectStore_10', {keypath: 'JVOAFoUK.bfcOlkGNfcj.ElnbSSVqTNpn.FVfvkOeZmhk.xvvAfu.JaovOXCTYoRP.ffdyKJmZ.vIAAria.LHwAjqUiMqa.dWIJjHwJyzd'});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('QAEingHReiyX', 'AVDcVCeGr', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_8')
    var objectStore_3 = db.createObjectStore('objectStore_11');
    var add_2 = objectStore_1.add({f0_u: '<object>', f1_k: '<number>', f2_o: '<number>', f3_d: '<number>', f4_t: '<boolean>', f5_o: '<string>', f6_x: '<string>', f7_h: '<number>'}, 'bWfDgIFuzGK');
    var put_4 = objectStore_1.put({f0_q: '<number>', f1_u: '<boolean>', f2_b: '<null>', f3_n: '<array>', f4_w: '<number>', f5_l: '<array>', f6_a: '<boolean>', f7_v: '<boolean>', f8_s: '<string>'}, 'BFuUrZHnh');
    var put_5 = objectStore_1.put({f0_d: '<number>', f1_t: '<array>', f2_q: '<array>', f3_u: '<number>', f4_e: '<string>', f5_x: '<array>', f6_y: '<number>'}, 'eNCzWL');
    var put_6 = objectStore_2.put({f0_j: '<null>', f1_d: '<null>', f2_h: '<boolean>', f3_v: '<string>', f4_y: '<number>', f5_b: '<object>', f6_o: '<object>', f7_v: '<object>'}, 'KDJUTZvEmX');
    var add_3 = objectStore_1.add({f0_p: '<string>', f1_h: '<null>', f2_g: '<boolean>'}, 'dNyHsIaHaU');
    var put_7 = objectStore_3.put({f0_e: '<string>', f1_k: '<boolean>', f2_t: '<array>'}, 'FdjZoFiqxZ');
    var index_12 = objectStore_3.createIndex('index_12', 'test');
    var count_1 = objectStore_1.count();
    var getAllKeys_0 = objectStore_3.getAllKeys();
    var index_13 = objectStore_2.createIndex('index_13', 'test', {unique: false});
    var put_8 = objectStore_2.put({f0_c: '<array>', f1_x: '<null>', f2_d: '<number>', f3_j: '<number>', f4_m: '<boolean>', f5_k: '<array>', f6_n: '<array>', f7_l: '<null>'}, 'ZevWms');
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('KDJUTZvEmX');
        delete_0 = objectStore_2.delete(KeyRange_2);
    }
    catch (e){
    }

    var clear_2 = objectStore_2.clear();
    var add_4 = objectStore_3.add({f0_j: '<string>', f1_y: '<boolean>', f2_p: '<boolean>', f3_k: '<null>', f4_a: '<array>', f5_v: '<null>', f6_y: '<null>', f7_x: '<number>', f8_y: '<boolean>'}, 'yMj');
    var getAll_0 = objectStore_1.getAll(3857881377);
    var put_9 = objectStore_1.put({f0_f: '<null>'}, 'OLipy');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('BFuUrZHnh');
        get_1 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('KDJUTZvEmX', true);
        delete_1 = objectStore_2.delete(KeyRange_6);
    }
    catch (e){
    }

    var add_5 = objectStore_2.add({f0_m: '<object>', f1_l: '<string>', f2_w: '<null>', f3_y: '<boolean>', f4_e: '<string>', f5_p: '<number>', f6_m: '<number>'}, 'YNUxgUjly');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('yMj', 'FdjZoFiqxZ', true, false);
        count_2 = objectStore_3.count(KeyRange_8);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_10 = IDBKeyRange.only('yMj');
        delete_2 = objectStore_3.delete(KeyRange_10);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_12', {keypath: 'zzXGsaomg.MvPrWvdur'});
    var index_14 = objectStore_3.createIndex('index_14', 'test', {multiEntry: true});
    var put_10 = objectStore_2.put({f0_k: '<null>', f1_y: '<array>', f2_q: '<null>', f3_u: '<array>', f4_v: '<number>', f5_k: '<boolean>', f6_w: '<string>', f7_w: '<array>', f8_s: '<number>'}, 'PDcpSx');
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('yMj', 'yMj', true, false);
        get_2 = objectStore_3.get(KeyRange_12);
    }
    catch (e){
    }

    objectStore_3.deleteIndex('index_12')
    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('dNyHsIaHaU', 'eNCzWL', false, false);
        count_3 = objectStore_1.count(KeyRange_14);
    }
    catch (e){
    }

    var put_11 = objectStore_4.put({f0_a: '<string>'}, 'WcPXox');
    var put_12 = objectStore_1.put({f0_k: '<string>', f1_h: '<string>', f2_x: '<string>', f3_b: '<array>', f4_z: '<null>', f5_b: '<number>', f6_e: '<number>', f7_e: '<null>', f8_j: '<string>', f9_r: '<null>'}, 'Xohv');
    var put_13 = objectStore_3.put({f0_f: '<boolean>', f1_l: '<boolean>', f2_q: '<string>', f3_e: '<null>', f4_f: '<boolean>', f5_t: '<string>', f6_v: '<string>', f7_o: '<boolean>', f8_q: '<null>'}, 'TTlYkhc');
    var clear_3 = objectStore_3.clear();
    var put_14 = objectStore_1.put({f0_l: '<object>', f1_u: '<array>', f2_w: '<null>', f3_y: '<string>', f4_r: '<string>', f5_j: '<array>', f6_q: '<string>'}, 'KKwIumayn');
    var index_15 = objectStore_1.createIndex('index_15', 'test', {multiEntry: false});
    var add_6 = objectStore_4.add({f0_s: '<null>'}, 'lLuyLJwU');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.only('KgyJvtMCW');
        get_3 = objectStore_1.get(KeyRange_16);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('WcPXox', true);
        delete_3 = objectStore_4.delete(KeyRange_18);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.only('WcPXox');
        get_4 = objectStore_4.get(KeyRange_20);
    }
    catch (e){
    }

    var count_4 = objectStore_1.count();
    var objectStore_5 = db.createObjectStore('objectStore_13');
    var count_5 = objectStore_2.count();
    var count_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('lLuyLJwU', 'lLuyLJwU', true, true);
        count_6 = objectStore_4.count(KeyRange_22);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_14');
    var clear_4 = objectStore_3.clear();
    var clear_5 = objectStore_2.clear();
    var put_15 = objectStore_3.put({f0_n: '<boolean>', f1_z: '<array>', f2_x: '<boolean>', f3_t: '<boolean>', f4_m: '<string>', f5_y: '<object>', f6_w: '<boolean>', f7_i: '<boolean>', f8_m: '<string>', f9_l: '<number>'}, 'QCVBk');
    var add_7 = objectStore_6.add({f0_m: '<string>', f1_w: '<null>', f2_l: '<null>', f3_r: '<boolean>', f4_s: '<array>', f5_g: '<object>', f6_q: '<boolean>', f7_v: '<array>'}, 'nbyhQtmCi');
    var put_16 = objectStore_2.put({f0_n: '<boolean>', f1_n: '<boolean>', f2_a: '<object>', f3_s: '<null>', f4_r: '<object>'}, 'dscGjHYQHeAn');
    var count_7 = objectStore_1.count();
    var put_17 = objectStore_3.put({f0_f: '<boolean>', f1_y: '<string>', f2_j: '<number>', f3_n: '<array>', f4_b: '<string>'}, 'aJzxPgc');
    var objectStore_7 = db.createObjectStore('objectStore_15', {autoIncrement: false});
    var objectStore_8 = db.createObjectStore('objectStore_16');
    var objectStore_9 = db.createObjectStore('objectStore_17');
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('nbyhQtmCi', false);
        get_5 = objectStore_6.get(KeyRange_24);
    }
    catch (e){
    }

    var put_18 = objectStore_6.put({f0_o: '<array>', f1_t: '<boolean>', f2_w: '<string>', f3_x: '<object>', f4_c: '<boolean>', f5_b: '<number>', f6_l: '<number>', f7_l: '<array>', f8_a: '<number>'}, 'SqNjwSn');
    var put_19 = objectStore_9.put({f0_u: '<object>', f1_x: '<object>', f2_t: '<number>', f3_v: '<array>', f4_z: '<number>'}, 'gtFZaZDptj');
    var count_8 = objectStore_3.count();
    var add_8 = objectStore_9.add({f0_u: '<array>', f1_x: '<null>', f2_a: '<array>', f3_h: '<array>', f4_m: '<string>', f5_g: '<boolean>'}, 'voB');
    var count_9;
    try{
        KeyRange_26 = IDBKeyRange.only('lLuyLJwU');
        count_9 = objectStore_4.count(KeyRange_26);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_18');
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('FdjZoFiqxZ', false);
        get_6 = objectStore_3.get(KeyRange_28);
    }
    catch (e){
    }

    var add_9 = objectStore_9.add({f0_m: '<array>', f1_u: '<null>', f2_y: '<null>', f3_x: '<number>'}, 'vCnEtTV');
    var index_16 = objectStore_9.createIndex('index_16', 'test');
    var index_17 = objectStore_9.createIndex('index_17', 'test', {unique: false, multiEntry: true});
    var count_10 = objectStore_6.count();
    var getAllKeys_1;
    try{
        KeyRange_30 = IDBKeyRange.bound('nbyhQtmCi', 'SqNjwSn', false, false);
        getAllKeys_1 = objectStore_6.getAllKeys(KeyRange_30, 775988941);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('SqNjwSn');
        getAllKeys_1 = objectStore_6.getAllKeys(KeyRange_31);
    }

    var put_20 = objectStore_9.put({f0_r: '<number>', f1_s: '<array>', f2_y: '<boolean>', f3_w: '<number>', f4_e: '<null>', f5_s: '<array>', f6_c: '<array>', f7_v: '<array>', f8_a: '<number>'}, 'tLnU');
    var put_21 = objectStore_5.put({f0_i: '<object>', f1_a: '<boolean>'}, 'XHMFEoyeEOH');
    var objectStore_11 = db.createObjectStore('objectStore_19');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_10 = db.transaction(['objectStore_18'], 'readonly', {durability:"default"})
    var objectStore_18;
    txn_10.objectStore('objectStore_18')
    var add_10 = objectStore_18.add({f0_f: '<boolean>', f1_v: '<object>', f2_m: '<number>', f3_f: '<string>', f4_e: '<null>', f5_x: '<boolean>'}, 'QeokrPdVEXP');
    var add_11 = objectStore_18.add({f0_o: '<number>', f1_m: '<array>', f2_o: '<boolean>', f3_c: '<number>', f4_h: '<boolean>', f5_k: '<array>', f6_c: '<null>', f7_s: '<boolean>'}, 'vkGQkVBZvM');
    var count_11;
    try{
        KeyRange_32 = IDBKeyRange.bound('QeokrPdVEXP', 'vkGQkVBZvM', true, false);
        count_11 = objectStore_18.count(KeyRange_32);
    }
    catch (e){
    }

    var clear_6 = objectStore_18.clear();
    var add_12 = objectStore_18.add({f0_k: '<number>', f1_m: '<string>', f2_l: '<number>', f3_o: '<object>', f4_u: '<number>', f5_l: '<array>'}, 'iqWnAGhHVdYd');
    var add_13 = objectStore_18.add({f0_b: '<array>', f1_d: '<string>', f2_g: '<null>'}, 'ifOTPHNSOlg');
    var put_22 = objectStore_18.put({f0_u: '<string>', f1_l: '<boolean>', f2_o: '<null>', f3_m: '<boolean>', f4_n: '<number>', f5_h: '<string>'}, 'acBmmUon');
    var count_12;
    try{
        KeyRange_34 = IDBKeyRange.bound('iqWnAGhHVdYd', 'vkGQkVBZvM', true, false);
        count_12 = objectStore_18.count(KeyRange_34);
    }
    catch (e){
    }

    var put_23 = objectStore_18.put({f0_o: '<string>', f1_e: '<object>', f2_g: '<object>', f3_a: '<string>', f4_t: '<null>', f5_t: '<boolean>', f6_z: '<array>', f7_y: '<array>'}, 'ViTpwdohvO');
    var add_14 = objectStore_18.add({f0_c: '<object>'}, 'FOdotcWdn');
    var count_13 = objectStore_18.count();
    var put_24 = objectStore_18.put({f0_o: '<number>', f1_a: '<string>', f2_l: '<object>', f3_w: '<number>', f4_h: '<number>'}, 'pXh');
    var count_14 = objectStore_18.count();
    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.only('pXh');
        get_7 = objectStore_18.get(KeyRange_36);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('acBmmUon', 'ViTpwdohvO', false, false);
        delete_4 = objectStore_18.delete(KeyRange_38);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_40 = IDBKeyRange.bound('ViTpwdohvO', 'ifOTPHNSOlg', false, true);
        count_15 = objectStore_18.count(KeyRange_40);
    }
    catch (e){
    }

    var add_15 = objectStore_18.add({f0_x: '<null>', f1_m: '<boolean>', f2_j: '<array>', f3_j: '<array>', f4_l: '<null>', f5_i: '<object>'}, 'ByBMtIHzSDQA');
    var put_25 = objectStore_18.put({f0_v: '<array>', f1_m: '<string>'}, 'EEP');
    var add_16 = objectStore_18.add({f0_o: '<number>', f1_z: '<boolean>'}, 'CDDKy');
    var count_16;
    try{
        KeyRange_42 = IDBKeyRange.bound('ByBMtIHzSDQA', 'iqWnAGhHVdYd', false, true);
        count_16 = objectStore_18.count(KeyRange_42);
    }
    catch (e){
    }

    var add_17 = objectStore_18.add({f0_q: '<boolean>', f1_b: '<number>', f2_v: '<number>'}, 'bwfn');
    var count_17 = objectStore_18.count();
    var getAllKeys_2 = objectStore_18.getAllKeys(3502866634);
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_11 = db.transaction(['objectStore_9', 'objectStore_14', 'objectStore_10'], 'readwrite', {durability:"default"})
    var objectStore_14;
    txn_11.objectStore('objectStore_14')
    var add_18 = objectStore_14.add({f0_z: '<string>'}, 'egHmvzD');
    var getAll_1;
    try{
        KeyRange_44 = IDBKeyRange.only('SqNjwSn');
        getAll_1 = objectStore_14.getAll(KeyRange_44);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('nbyhQtmCi');
        getAll_1 = objectStore_14.getAll(KeyRange_45);
    }

    var put_26 = objectStore_14.put({f0_o: '<object>', f1_v: '<array>', f2_u: '<array>', f3_x: '<object>', f4_i: '<number>', f5_m: '<number>', f6_l: '<array>', f7_q: '<number>', f8_y: '<number>', f9_l: '<null>'}, 'JZjRyiXIaX');
    var add_19 = objectStore_14.add({f0_b: '<null>', f1_q: '<object>', f2_f: '<object>', f3_r: '<array>', f4_o: '<array>', f5_q: '<object>', f6_m: '<number>'}, 'xXITRFSicg');
    var add_20 = objectStore_14.add({f0_h: '<array>', f1_y: '<array>', f2_w: '<number>'}, 'nABFWgV');
    var clear_7 = objectStore_14.clear();
    var count_18;
    try{
        KeyRange_46 = IDBKeyRange.bound('SqNjwSn', 'JZjRyiXIaX', true, false);
        count_18 = objectStore_14.count(KeyRange_46);
    }
    catch (e){
    }

    var put_27 = objectStore_14.put({f0_v: '<string>', f1_w: '<object>', f2_m: '<boolean>', f3_v: '<number>', f4_l: '<string>', f5_f: '<number>', f6_q: '<string>'}, 'MuKeNf');
    var get_8;
    try{
        KeyRange_48 = IDBKeyRange.bound('nABFWgV', 'egHmvzD', true, true);
        get_8 = objectStore_14.get(KeyRange_48);
    }
    catch (e){
    }

    var count_19 = objectStore_14.count();
    var clear_8 = objectStore_14.clear();
    var count_20;
    try{
        KeyRange_50 = IDBKeyRange.only('xXITRFSicg');
        count_20 = objectStore_14.count(KeyRange_50);
    }
    catch (e){
    }

    var count_21;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('SqNjwSn', false);
        count_21 = objectStore_14.count(KeyRange_52);
    }
    catch (e){
    }

    var add_21 = objectStore_14.add({f0_j: '<string>', f1_v: '<array>', f2_b: '<number>', f3_g: '<object>', f4_x: '<number>', f5_t: '<array>', f6_i: '<string>', f7_m: '<boolean>', f8_w: '<array>', f9_w: '<object>'}, 'ncMnd');
    var put_28 = objectStore_14.put({f0_l: '<object>', f1_q: '<number>', f2_x: '<string>', f3_e: '<null>', f4_p: '<string>', f5_v: '<string>', f6_e: '<object>'}, 'wCJVApC');
    var clear_9 = objectStore_14.clear();
    var clear_10 = objectStore_14.clear();
    var count_22 = objectStore_14.count();
    var clear_11 = objectStore_14.clear();
    var clear_12 = objectStore_14.clear();
    var getAllKeys_3;
    try{
        KeyRange_54 = IDBKeyRange.bound('nABFWgV', 'nABFWgV', false, true);
        getAllKeys_3 = objectStore_14.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('MuKeNf');
        getAllKeys_3 = objectStore_14.getAllKeys(KeyRange_55);
    }

    var clear_13 = objectStore_14.clear();
    var count_23 = objectStore_14.count();
    var getAll_2 = objectStore_14.getAll();
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_11.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_12 = db.transaction(['objectStore_10', 'objectStore_12'], 'readonly', {durability:"relaxed"})
    var objectStore_12;
    txn_10.objectStore('objectStore_12')
    var get_9;
    try{
        KeyRange_56 = IDBKeyRange.bound('lLuyLJwU', 'WcPXox', true, true);
        get_9 = objectStore_12.get(KeyRange_56);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_58 = IDBKeyRange.bound('WcPXox', 'WcPXox', false, false);
        count_24 = objectStore_12.count(KeyRange_58);
    }
    catch (e){
    }

    var clear_14 = objectStore_12.clear();
    var delete_5;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('lLuyLJwU', false);
        delete_5 = objectStore_12.delete(KeyRange_60);
    }
    catch (e){
    }

    var clear_15 = objectStore_12.clear();
    var add_22 = objectStore_12.add({f0_k: '<number>', f1_h: '<array>', f2_z: '<number>', f3_w: '<string>', f4_w: '<string>', f5_j: '<number>', f6_w: '<object>'}, 'YRGSrxwkl');
    var get_10;
    try{
        KeyRange_62 = IDBKeyRange.bound('WcPXox', 'WcPXox', false, true);
        get_10 = objectStore_12.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_16 = objectStore_12.clear();
    var count_25 = objectStore_12.count();
    var clear_17 = objectStore_12.clear();
    var get_11;
    try{
        KeyRange_64 = IDBKeyRange.bound('WcPXox', 'WcPXox', false, true);
        get_11 = objectStore_12.get(KeyRange_64);
    }
    catch (e){
    }

    var put_29 = objectStore_12.put({f0_e: '<string>', f1_n: '<string>', f2_x: '<array>', f3_m: '<string>', f4_c: '<array>', f5_n: '<object>', f6_o: '<boolean>', f7_s: '<boolean>'}, 'jdK');
    var clear_18 = objectStore_12.clear();
    var clear_19 = objectStore_12.clear();
    var add_23 = objectStore_12.add({f0_o: '<object>'}, 'yGlIqpoc');
    var put_30 = objectStore_12.put({f0_s: '<string>', f1_r: '<number>', f2_g: '<number>', f3_c: '<array>', f4_g: '<object>', f5_o: '<number>', f6_s: '<null>'}, 'oYjq');
    var get_12;
    try{
        KeyRange_66 = IDBKeyRange.only('jdK');
        get_12 = objectStore_12.get(KeyRange_66);
    }
    catch (e){
    }

    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_13 = db.transaction(['objectStore_13'], 'readonly', {durability:"strict"})
    var objectStore_13;
    txn_12.objectStore('objectStore_13')
    var get_13;
    try{
        KeyRange_68 = IDBKeyRange.only('XHMFEoyeEOH');
        get_13 = objectStore_13.get(KeyRange_68);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_70 = IDBKeyRange.bound('XHMFEoyeEOH', 'XHMFEoyeEOH', true, false);
        get_14 = objectStore_13.get(KeyRange_70);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_72 = IDBKeyRange.only('XHMFEoyeEOH');
        get_15 = objectStore_13.get(KeyRange_72);
    }
    catch (e){
    }

    var put_31 = objectStore_13.put({f0_d: '<boolean>', f1_v: '<number>', f2_a: '<number>', f3_d: '<null>', f4_d: '<null>', f5_f: '<array>', f6_v: '<string>', f7_n: '<null>'}, 'RVDQSQr');
    var count_26;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('RVDQSQr', true);
        count_26 = objectStore_13.count(KeyRange_74);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_76 = IDBKeyRange.bound('XHMFEoyeEOH', 'RVDQSQr', true, true);
        get_16 = objectStore_13.get(KeyRange_76);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_78 = IDBKeyRange.only('XHMFEoyeEOH');
        count_27 = objectStore_13.count(KeyRange_78);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_80 = IDBKeyRange.bound('XHMFEoyeEOH', 'RVDQSQr', false, true);
        getAll_3 = objectStore_13.getAll(KeyRange_80);
    }
    catch (e){
        KeyRange_81 = IDBKeyRange.only('XHMFEoyeEOH');
        getAll_3 = objectStore_13.getAll(KeyRange_81);
    }

    var add_24 = objectStore_13.add({f0_b: '<array>', f1_o: '<string>', f2_b: '<null>', f3_t: '<object>', f4_z: '<number>', f5_m: '<object>'}, 'yCW');
    var get_17;
    try{
        KeyRange_82 = IDBKeyRange.bound('RVDQSQr', 'yCW', false, false);
        get_17 = objectStore_13.get(KeyRange_82);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_84 = IDBKeyRange.bound('XHMFEoyeEOH', 'RVDQSQr', false, false);
        delete_6 = objectStore_13.delete(KeyRange_84);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_86 = IDBKeyRange.bound('XHMFEoyeEOH', 'yCW', true, true);
        get_18 = objectStore_13.get(KeyRange_86);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('XHMFEoyeEOH', true);
        delete_7 = objectStore_13.delete(KeyRange_88);
    }
    catch (e){
    }

    var add_25 = objectStore_13.add({f0_g: '<string>', f1_m: '<array>', f2_l: '<array>', f3_m: '<number>', f4_l: '<object>', f5_c: '<boolean>'}, 'nZNrcQWGtck');
    var getAllKeys_4 = objectStore_13.getAllKeys(3094937686);
    var clear_20 = objectStore_13.clear();
    var count_28;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('XHMFEoyeEOH', false);
        count_28 = objectStore_13.count(KeyRange_90);
    }
    catch (e){
    }

    var count_29 = objectStore_13.count();
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_14 = db.transaction(['objectStore_14'], 'readonly', {durability:"strict"})
    var objectStore_14;
    txn_11.objectStore('objectStore_14')
    var get_19;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('nbyhQtmCi', false);
        get_19 = objectStore_14.get(KeyRange_92);
    }
    catch (e){
    }

    var getAll_4 = objectStore_14.getAll();
    var clear_21 = objectStore_14.clear();
    var get_20;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('SqNjwSn', true);
        get_20 = objectStore_14.get(KeyRange_94);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('xXITRFSicg', true);
        getAllKeys_5 = objectStore_14.getAllKeys(KeyRange_96, 703619644);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('wCJVApC');
        getAllKeys_5 = objectStore_14.getAllKeys(KeyRange_97);
    }

    var count_30 = objectStore_14.count();
    var getAllKeys_6;
    try{
        KeyRange_98 = IDBKeyRange.bound('JZjRyiXIaX', 'nABFWgV', false, true);
        getAllKeys_6 = objectStore_14.getAllKeys(KeyRange_98, 3185020473);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('nABFWgV');
        getAllKeys_6 = objectStore_14.getAllKeys(KeyRange_99);
    }

    var clear_22 = objectStore_14.clear();
    var getAll_5 = objectStore_14.getAll();
    var getAll_6 = objectStore_14.getAll();
    var get_21;
    try{
        KeyRange_100 = IDBKeyRange.bound('wCJVApC', 'nbyhQtmCi', false, true);
        get_21 = objectStore_14.get(KeyRange_100);
    }
    catch (e){
    }

    var add_26 = objectStore_14.add({f0_z: '<array>', f1_z: '<object>', f2_q: '<boolean>', f3_v: '<number>', f4_w: '<null>', f5_q: '<array>', f6_m: '<string>', f7_l: '<array>', f8_h: '<array>'}, 'AmLU');
    var clear_23 = objectStore_14.clear();
    var count_31 = objectStore_14.count();
    var count_32 = objectStore_14.count();
    var delete_8;
    try{
        KeyRange_102 = IDBKeyRange.bound('nABFWgV', 'nABFWgV', false, false);
        delete_8 = objectStore_14.delete(KeyRange_102);
    }
    catch (e){
    }

    var put_32 = objectStore_14.put({f0_g: '<boolean>', f1_o: '<boolean>', f2_q: '<string>', f3_n: '<boolean>', f4_p: '<null>', f5_i: '<array>'}, 'fMicd');
    var put_33 = objectStore_14.put({f0_v: '<object>', f1_a: '<string>', f2_k: '<object>', f3_x: '<number>', f4_q: '<number>', f5_s: '<object>', f6_d: '<object>', f7_w: '<array>'}, 'Aph');
    var getAllKeys_7;
    try{
        KeyRange_104 = IDBKeyRange.bound('SqNjwSn', 'nbyhQtmCi', false, false);
        getAllKeys_7 = objectStore_14.getAllKeys(KeyRange_104);
    }
    catch (e){
        KeyRange_105 = IDBKeyRange.only('ncMnd');
        getAllKeys_7 = objectStore_14.getAllKeys(KeyRange_105);
    }

    var getAllKeys_8 = objectStore_14.getAllKeys(3397400133);
    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_13.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_12.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_15 = db.transaction(['objectStore_10'], 'readonly', {durability:"default"})
    var objectStore_10;
    txn_14.objectStore('objectStore_10')
    var add_27 = objectStore_10.add({f0_l: '<null>', f1_v: '<string>', f2_a: '<object>', f3_a: '<number>', f4_i: '<boolean>', f5_w: '<boolean>', f6_t: '<null>'}, 'WZBdMqGL');
    var get_22;
    try{
        KeyRange_106 = IDBKeyRange.only('PDcpSx');
        get_22 = objectStore_10.get(KeyRange_106);
    }
    catch (e){
    }

    var clear_24 = objectStore_10.clear();
    var get_23;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('dscGjHYQHeAn', false);
        get_23 = objectStore_10.get(KeyRange_108);
    }
    catch (e){
    }

    var getAllKeys_9;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('PDcpSx', false);
        getAllKeys_9 = objectStore_10.getAllKeys(KeyRange_110, 3346716906);
    }
    catch (e){
        KeyRange_111 = IDBKeyRange.only('dscGjHYQHeAn');
        getAllKeys_9 = objectStore_10.getAllKeys(KeyRange_111);
    }

    var count_33 = objectStore_10.count();
    var clear_25 = objectStore_10.clear();
    var count_34 = objectStore_10.count();
    var count_35 = objectStore_10.count();
    var get_24;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('KDJUTZvEmX', false);
        get_24 = objectStore_10.get(KeyRange_112);
    }
    catch (e){
    }

    var put_34 = objectStore_10.put({f0_s: '<array>', f1_l: '<array>'}, 'bIPxWVtKlRv');
    var add_28 = objectStore_10.add({f0_w: '<null>', f1_c: '<boolean>', f2_w: '<array>', f3_k: '<string>', f4_o: '<string>'}, 'ySYICTOlb');
    var clear_26 = objectStore_10.clear();
    var clear_27 = objectStore_10.clear();
    var index_0 = objectStore_10.index('index_13');
    var count_36 = objectStore_10.count();
    var add_29 = objectStore_10.add({f0_h: '<null>', f1_h: '<number>', f2_b: '<number>', f3_f: '<array>'}, 'hIOUVfjh');
    var delete_9;
    try{
        KeyRange_114 = IDBKeyRange.only('KDJUTZvEmX');
        delete_9 = objectStore_10.delete(KeyRange_114);
    }
    catch (e){
    }

    var add_30 = objectStore_10.add({f0_c: '<number>', f1_d: '<boolean>', f2_z: '<number>', f3_p: '<object>', f4_d: '<boolean>', f5_q: '<string>', f6_r: '<null>', f7_w: '<null>', f8_k: '<object>', f9_o: '<string>'}, 'pIcfPbvkjqf');
    var delete_10;
    try{
        KeyRange_116 = IDBKeyRange.bound('pIcfPbvkjqf', 'PDcpSx', false, true);
        delete_10 = objectStore_10.delete(KeyRange_116);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_118 = IDBKeyRange.lowerBound('ZevWms', true);
        getAll_7 = objectStore_10.getAll(KeyRange_118, 3956281842);
    }
    catch (e){
        KeyRange_119 = IDBKeyRange.only('YNUxgUjly');
        getAll_7 = objectStore_10.getAll(KeyRange_119);
    }

    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_16 = db.transaction(['objectStore_14'], 'readwrite', {durability:"strict"})
    var objectStore_14;
    txn_10.objectStore('objectStore_14')
    var clear_28 = objectStore_14.clear();
    var count_37 = objectStore_14.count();
    var count_38;
    try{
        KeyRange_120 = IDBKeyRange.bound('ncMnd', 'SqNjwSn', true, true);
        count_38 = objectStore_14.count(KeyRange_120);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('MuKeNf', true);
        get_25 = objectStore_14.get(KeyRange_122);
    }
    catch (e){
    }

    var put_35 = objectStore_14.put({f0_z: '<number>', f1_l: '<object>', f2_k: '<array>', f3_t: '<null>', f4_p: '<null>', f5_v: '<string>', f6_p: '<object>', f7_v: '<null>', f8_h: '<number>', f9_b: '<number>'}, 'YvYERFV');
    var count_39;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('JZjRyiXIaX', false);
        count_39 = objectStore_14.count(KeyRange_124);
    }
    catch (e){
    }

    var clear_29 = objectStore_14.clear();
    var get_26;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('nbyhQtmCi', true);
        get_26 = objectStore_14.get(KeyRange_126);
    }
    catch (e){
    }

    var count_40 = objectStore_14.count();
    var getAll_8;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('wCJVApC', false);
        getAll_8 = objectStore_14.getAll(KeyRange_128, 1083745681);
    }
    catch (e){
        KeyRange_129 = IDBKeyRange.only('nbyhQtmCi');
        getAll_8 = objectStore_14.getAll(KeyRange_129);
    }

    var put_36 = objectStore_14.put({f0_b: '<string>'}, 'UEk');
    var add_31 = objectStore_14.add({f0_y: '<array>', f1_t: '<number>', f2_c: '<array>', f3_c: '<boolean>', f4_c: '<object>', f5_n: '<string>', f6_k: '<boolean>', f7_n: '<number>', f8_q: '<null>', f9_e: '<object>'}, 'mKesi');
    var get_27;
    try{
        KeyRange_130 = IDBKeyRange.bound('JZjRyiXIaX', 'ncMnd', false, true);
        get_27 = objectStore_14.get(KeyRange_130);
    }
    catch (e){
    }

    var clear_30 = objectStore_14.clear();
    var get_28;
    try{
        KeyRange_132 = IDBKeyRange.only('nbyhQtmCi');
        get_28 = objectStore_14.get(KeyRange_132);
    }
    catch (e){
    }

    var add_32 = objectStore_14.add({f0_o: '<null>'}, 'gsxAtIiDqCJ');
    var put_37 = objectStore_14.put({f0_t: '<object>', f1_q: '<array>'}, 'aTsDkZU');
    var clear_31 = objectStore_14.clear();
    var put_38 = objectStore_14.put({f0_v: '<null>', f1_b: '<string>', f2_z: '<object>'}, 'bmYPdEKJ');
    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_17 = db.transaction(['objectStore_9', 'objectStore_18'], 'readwrite', {durability:"strict"})
    var objectStore_9;
    txn_10.objectStore('objectStore_9')
    var add_33 = objectStore_9.add({f0_f: '<number>'}, 'bsmFkyjzBozC');
    var clear_32 = objectStore_9.clear();
    var clear_33 = objectStore_9.clear();
    var add_34 = objectStore_9.add({f0_k: '<null>', f1_k: '<string>', f2_k: '<boolean>', f3_o: '<string>'}, 'aTVY');
    var add_35 = objectStore_9.add({f0_a: '<number>'}, 'pQoCS');
    var add_36 = objectStore_9.add({f0_a: '<string>', f1_f: '<string>', f2_m: '<number>', f3_a: '<null>', f4_m: '<boolean>', f5_s: '<number>', f6_a: '<null>', f7_b: '<object>', f8_e: '<null>', f9_e: '<array>'}, 'OfdnxciKtkC');
    var put_39 = objectStore_9.put({f0_p: '<string>', f1_x: '<array>', f2_c: '<string>', f3_i: '<boolean>', f4_w: '<array>', f5_d: '<number>', f6_i: '<string>', f7_n: '<number>', f8_n: '<string>', f9_e: '<boolean>'}, 'xCbiWvaZNExu');
    var count_41 = objectStore_9.count();
    var getAllKeys_10;
    try{
        KeyRange_134 = IDBKeyRange.bound('dNyHsIaHaU', 'xCbiWvaZNExu', false, true);
        getAllKeys_10 = objectStore_9.getAllKeys(KeyRange_134, 4151638713);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('pQoCS');
        getAllKeys_10 = objectStore_9.getAllKeys(KeyRange_135);
    }

    var add_37 = objectStore_9.add({f0_c: '<object>', f1_q: '<boolean>', f2_g: '<number>'}, 'uAxZOpqBUL');
    var getAll_9 = objectStore_9.getAll();
    var count_42 = objectStore_9.count();
    var get_29;
    try{
        KeyRange_136 = IDBKeyRange.bound('OLipy', 'aTVY', false, true);
        get_29 = objectStore_9.get(KeyRange_136);
    }
    catch (e){
    }

    var count_43;
    try{
        KeyRange_138 = IDBKeyRange.only('aTVY');
        count_43 = objectStore_9.count(KeyRange_138);
    }
    catch (e){
    }

    var getAllKeys_11;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('xCbiWvaZNExu', true);
        getAllKeys_11 = objectStore_9.getAllKeys(KeyRange_140, 3303128880);
    }
    catch (e){
        KeyRange_141 = IDBKeyRange.only('OfdnxciKtkC');
        getAllKeys_11 = objectStore_9.getAllKeys(KeyRange_141);
    }

    var put_40 = objectStore_9.put({f0_g: '<null>', f1_k: '<null>', f2_s: '<string>', f3_s: '<null>', f4_t: '<array>', f5_b: '<boolean>', f6_e: '<number>', f7_c: '<boolean>', f8_q: '<array>'}, 'Hto');
    var index_1 = objectStore_9.index('index_15');
    var put_41 = objectStore_9.put({f0_j: '<number>', f1_o: '<string>', f2_g: '<null>', f3_q: '<object>', f4_l: '<boolean>', f5_o: '<string>'}, 'GhUgNVjzbV');
    var add_38 = objectStore_9.add({f0_w: '<array>', f1_k: '<null>', f2_r: '<null>', f3_h: '<array>', f4_m: '<null>'}, 'mBqEp');
    var get_30;
    try{
        KeyRange_142 = IDBKeyRange.bound('GhUgNVjzbV', 'Xohv', true, true);
        get_30 = objectStore_9.get(KeyRange_142);
    }
    catch (e){
    }

    var clear_34 = objectStore_9.clear();
    var getAll_10;
    try{
        KeyRange_144 = IDBKeyRange.bound('BFuUrZHnh', 'Xohv', false, true);
        getAll_10 = objectStore_9.getAll(KeyRange_144);
    }
    catch (e){
        KeyRange_145 = IDBKeyRange.only('Hto');
        getAll_10 = objectStore_9.getAll(KeyRange_145);
    }

    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_11.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_18 = db.transaction(['objectStore_18'], 'readwrite', {durability:"strict"})
    var objectStore_18;
    txn_14.objectStore('objectStore_18')
    var put_42 = objectStore_18.put({f0_h: '<array>', f1_v: '<array>', f2_z: '<null>', f3_p: '<null>', f4_v: '<number>'}, 'uCaa');
    var add_39 = objectStore_18.add({f0_l: '<null>', f1_e: '<string>'}, 'oIRgIBYxWR');
    var put_43 = objectStore_18.put({f0_x: '<boolean>', f1_m: '<array>', f2_a: '<boolean>', f3_y: '<object>', f4_k: '<object>', f5_e: '<object>'}, 'xfIRqraXT');
    var count_44 = objectStore_18.count();
    var add_40 = objectStore_18.add({f0_z: '<array>', f1_e: '<array>'}, 'xKswpfcw');
    var get_31;
    try{
        KeyRange_146 = IDBKeyRange.lowerBound('CDDKy', false);
        get_31 = objectStore_18.get(KeyRange_146);
    }
    catch (e){
    }

    var put_44 = objectStore_18.put({f0_l: '<boolean>', f1_k: '<string>', f2_z: '<array>', f3_i: '<string>', f4_b: '<string>', f5_b: '<object>', f6_s: '<array>', f7_l: '<string>'}, 'RzrJTyE');
    var delete_11;
    try{
        KeyRange_148 = IDBKeyRange.lowerBound('RzrJTyE', true);
        delete_11 = objectStore_18.delete(KeyRange_148);
    }
    catch (e){
    }

    var clear_35 = objectStore_18.clear();
    var count_45;
    try{
        KeyRange_150 = IDBKeyRange.only('ByBMtIHzSDQA');
        count_45 = objectStore_18.count(KeyRange_150);
    }
    catch (e){
    }

    var put_45 = objectStore_18.put({f0_a: '<number>', f1_q: '<object>', f2_h: '<object>', f3_x: '<string>', f4_o: '<number>', f5_q: '<boolean>'}, 'lSsJTYbOzU');
    var getAll_11;
    try{
        KeyRange_152 = IDBKeyRange.bound('FOdotcWdn', 'acBmmUon', true, true);
        getAll_11 = objectStore_18.getAll(KeyRange_152, 747935764);
    }
    catch (e){
        KeyRange_153 = IDBKeyRange.only('oIRgIBYxWR');
        getAll_11 = objectStore_18.getAll(KeyRange_153);
    }

    var add_41 = objectStore_18.add({f0_g: '<number>', f1_s: '<null>', f2_l: '<object>', f3_c: '<boolean>'}, 'fEvk');
    var getAllKeys_12 = objectStore_18.getAllKeys();
    var add_42 = objectStore_18.add({f0_d: '<null>', f1_r: '<null>', f2_t: '<array>'}, 'gROZ');
    var clear_36 = objectStore_18.clear();
    var add_43 = objectStore_18.add({f0_n: '<null>', f1_w: '<null>', f2_z: '<null>', f3_u: '<null>', f4_p: '<number>', f5_e: '<number>', f6_w: '<array>'}, 'JfZF');
    var put_46 = objectStore_18.put({f0_e: '<string>', f1_r: '<number>', f2_a: '<object>', f3_o: '<null>', f4_e: '<boolean>', f5_m: '<number>'}, 'PkM');
    var add_44 = objectStore_18.add({f0_o: '<number>'}, 'OTvXXThO');
    var clear_37 = objectStore_18.clear();
    txn_18.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_19 = db.transaction(['objectStore_10'], 'readonly', {durability:"relaxed"})
    var objectStore_10;
    txn_12.objectStore('objectStore_10')
    var clear_38 = objectStore_10.clear();
    var put_47 = objectStore_10.put({f0_x: '<boolean>', f1_n: '<string>', f2_y: '<array>', f3_q: '<string>', f4_q: '<number>', f5_n: '<null>', f6_b: '<boolean>', f7_z: '<null>', f8_r: '<string>', f9_h: '<array>'}, 'DDzrPklaLOOL');
    var clear_39 = objectStore_10.clear();
    var count_46 = objectStore_10.count();
    var add_45 = objectStore_10.add({f0_b: '<array>', f1_h: '<null>', f2_z: '<string>', f3_b: '<boolean>', f4_h: '<array>', f5_s: '<array>', f6_j: '<boolean>'}, 'DTuotdbWGU');
    var clear_40 = objectStore_10.clear();
    var getAll_12 = objectStore_10.getAll(2342970917);
    var getAll_13;
    try{
        KeyRange_154 = IDBKeyRange.lowerBound('DTuotdbWGU', true);
        getAll_13 = objectStore_10.getAll(KeyRange_154);
    }
    catch (e){
        KeyRange_155 = IDBKeyRange.only('WZBdMqGL');
        getAll_13 = objectStore_10.getAll(KeyRange_155);
    }

    var clear_41 = objectStore_10.clear();
    var add_46 = objectStore_10.add({f0_l: '<null>', f1_n: '<string>', f2_g: '<array>', f3_l: '<object>', f4_y: '<array>', f5_u: '<boolean>', f6_n: '<object>'}, 'AXzfQNzQK');
    var clear_42 = objectStore_10.clear();
    var get_32;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('ySYICTOlb', false);
        get_32 = objectStore_10.get(KeyRange_156);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_158 = IDBKeyRange.bound('bIPxWVtKlRv', 'pIcfPbvkjqf', true, false);
        get_33 = objectStore_10.get(KeyRange_158);
    }
    catch (e){
    }

    var clear_43 = objectStore_10.clear();
    var get_34;
    try{
        KeyRange_160 = IDBKeyRange.lowerBound('pIcfPbvkjqf', true);
        get_34 = objectStore_10.get(KeyRange_160);
    }
    catch (e){
    }

    var count_47;
    try{
        KeyRange_162 = IDBKeyRange.only('hIOUVfjh');
        count_47 = objectStore_10.count(KeyRange_162);
    }
    catch (e){
    }

    var put_48 = objectStore_10.put({f0_h: '<string>', f1_j: '<null>', f2_e: '<null>'}, 'woHibBfq');
    var get_35;
    try{
        KeyRange_164 = IDBKeyRange.bound('DDzrPklaLOOL', 'dscGjHYQHeAn', true, true);
        get_35 = objectStore_10.get(KeyRange_164);
    }
    catch (e){
    }

    var put_49 = objectStore_10.put({f0_g: '<number>', f1_q: '<string>'}, 'xxXavYW');
    txn_14.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_15.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2349')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};