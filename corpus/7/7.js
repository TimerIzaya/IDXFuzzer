let db;
const openRequest = window.indexedDB.open('str_1891', 891020008272349)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_80', {keypath: 'VJnayGJivdmB', autoIncrement: false});
    var put_0 = objectStore_0.put({f0_b: '<null>', f1_l: '<string>', f2_n: '<null>', f3_b: '<number>', f4_j: '<string>', f5_p: '<null>', f6_t: '<string>', f7_v: '<number>', f8_e: '<null>'}, 'bZeXR');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_1 = objectStore_0.put({f0_m: '<boolean>', f1_w: '<object>', f2_w: '<number>', f3_t: '<array>', f4_x: '<number>', f5_b: '<array>', f6_g: '<string>'}, 'ItrMpD');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('bZeXR', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_81', {autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_82', {keypath: 'XZnKdDVqAX', autoIncrement: false});
    var clear_2 = objectStore_1.clear();
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('ItrMpD', 'ItrMpD', true, false);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var index_78 = objectStore_1.createIndex('index_78', 'test', {unique: true, multiEntry: false});
    var put_2 = objectStore_2.put({f0_w: '<array>', f1_g: '<null>', f2_a: '<object>', f3_s: '<object>', f4_q: '<string>'}, 'rTdZD');
    var index_79 = objectStore_2.createIndex('index_79', 'test', {unique: true});
    db.deleteObjectStore('objectStore_81')
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('rTdZD', true);
        count_1 = objectStore_2.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_0.getAll(29546760);
    var add_0 = objectStore_0.add({f0_g: '<array>', f1_w: '<array>'}, 'VHKk');
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('VHKk', 'ItrMpD', false, true);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2.getAllKeys();
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.only('rTdZD');
        get_2 = objectStore_2.get(KeyRange_8);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_83', {autoIncrement: false});
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('VHKk', 'VHKk', false, true);
        get_3 = objectStore_0.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_3 = objectStore_0.clear();
    var clear_4 = objectStore_2.clear();
    var index_80 = objectStore_3.createIndex('index_80', 'test', {unique: true});
    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('bZeXR', false);
        count_2 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_d: '<array>', f1_v: '<boolean>', f2_c: '<object>', f3_o: '<array>'}, 'JgTZSXgMgt');
    var index_81 = objectStore_3.createIndex('index_81', 'test');
    var objectStore_4 = db.createObjectStore('objectStore_84', {keypath: 'KJBfasIcxR', autoIncrement: true});
    var objectStore_5 = db.createObjectStore('objectStore_85', {keypath: 'TrYHWSD.qfrlLj.MMWGxfDOEEGG.AscAtMH.YYBpXTF'});
    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('VHKk', 'JgTZSXgMgt', false, false);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('ItrMpD');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_15);
    }

    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.only('ItrMpD');
        count_3 = objectStore_0.count(KeyRange_16);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_86');
    var put_3 = objectStore_6.put({f0_l: '<string>', f1_k: '<string>', f2_i: '<null>', f3_a: '<boolean>', f4_t: '<string>', f5_x: '<string>', f6_e: '<object>'}, 'GuVbJhenrBdp');
    var index_82 = objectStore_5.createIndex('index_82', 'test', {multiEntry: true});
    var index_83 = objectStore_2.createIndex('index_83', 'test');
    var add_2 = objectStore_4.add({f0_x: '<array>', f1_a: '<array>', f2_r: '<array>', f3_a: '<null>', f4_o: '<null>', f5_s: '<string>', f6_d: '<boolean>'}, 'Abj');
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.only('Abj');
        delete_0 = objectStore_4.delete(KeyRange_18);
    }
    catch (e){
    }

    var index_0 = objectStore_5.index('index_82');
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('Abj', 'Abj', false, true);
        get_4 = objectStore_4.get(KeyRange_20);
    }
    catch (e){
    }

    var put_4 = objectStore_5.put({f0_h: '<number>', f1_i: '<string>', f2_s: '<number>'}, 'XEHCWXVDb');
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('GuVbJhenrBdp', 'GuVbJhenrBdp', true, true);
        get_5 = objectStore_6.get(KeyRange_22);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('GuVbJhenrBdp', 'GuVbJhenrBdp', true, false);
        get_6 = objectStore_6.get(KeyRange_24);
    }
    catch (e){
    }

    var index_84 = objectStore_2.createIndex('index_84', 'test', {multiEntry: false});
    var getAll_1 = objectStore_2.getAll();
    var objectStore_7 = db.createObjectStore('objectStore_87', {keypath: 'Aci'});
    var count_4 = objectStore_6.count();
    var add_3 = objectStore_5.add({f0_p: '<array>', f1_b: '<array>', f2_b: '<object>', f3_e: '<boolean>', f4_w: '<array>', f5_b: '<array>', f6_c: '<array>', f7_j: '<boolean>'}, 'LBXOBtlO');
    var add_4 = objectStore_0.add({f0_n: '<boolean>', f1_b: '<string>', f2_t: '<null>', f3_p: '<string>', f4_j: '<null>', f5_z: '<number>', f6_f: '<boolean>', f7_l: '<string>', f8_s: '<array>'}, 'BBdSU');
    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('GuVbJhenrBdp', 'GuVbJhenrBdp', true, true);
        count_5 = objectStore_6.count(KeyRange_26);
    }
    catch (e){
    }

    var add_5 = objectStore_0.add({f0_m: '<null>', f1_r: '<object>', f2_a: '<number>', f3_e: '<number>', f4_l: '<array>', f5_r: '<boolean>', f6_g: '<string>', f7_s: '<array>'}, 'qlgPfvSiBMls');
    db.deleteObjectStore('objectStore_86')
    var objectStore_8 = db.createObjectStore('objectStore_88', {keypath: 'gpVnKrp'});
    var put_5 = objectStore_5.put({f0_e: '<null>', f1_m: '<string>', f2_s: '<boolean>', f3_q: '<null>'}, 'YfFx');
    var objectStore_9 = db.createObjectStore('objectStore_89', {keypath: 'Ovmscn', autoIncrement: false});
    var index_85 = objectStore_0.createIndex('index_85', 'test');
    var count_6 = objectStore_4.count();
    var clear_5 = objectStore_0.clear();
    var objectStore_10 = db.createObjectStore('objectStore_90', {keypath: 'fjkpxyxq', autoIncrement: true});
    var put_6 = objectStore_9.put({f0_d: '<null>', f1_n: '<boolean>', f2_z: '<object>', f3_t: '<null>'}, 'gcKGQzr');
    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.only('gcKGQzr');
        get_7 = objectStore_9.get(KeyRange_28);
    }
    catch (e){
    }

    var put_7 = objectStore_8.put({f0_m: '<object>', f1_f: '<array>', f2_a: '<boolean>', f3_l: '<object>', f4_c: '<object>'}, 'EMaZrlnlVvoG');
    var clear_6 = objectStore_4.clear();
    var getAll_2;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('VHKk', true);
        getAll_2 = objectStore_0.getAll(KeyRange_30, 3427118821);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('qlgPfvSiBMls');
        getAll_2 = objectStore_0.getAll(KeyRange_31);
    }

    var add_6 = objectStore_8.add({f0_i: '<array>', f1_i: '<object>', f2_p: '<string>', f3_j: '<number>', f4_f: '<array>', f5_x: '<number>', f6_g: '<boolean>', f7_f: '<object>', f8_p: '<string>', f9_h: '<array>'}, 'xBrdrvgXIi');
    var objectStore_11 = db.createObjectStore('objectStore_91', {autoIncrement: true});
    var index_86 = objectStore_4.createIndex('index_86', 'test', {unique: true});
    var getAllKeys_2 = objectStore_0.getAllKeys(1839409950);
    var put_8 = objectStore_7.put({f0_g: '<array>', f1_o: '<array>', f2_s: '<null>', f3_k: '<null>', f4_y: '<object>', f5_l: '<array>', f6_t: '<number>', f7_y: '<boolean>', f8_i: '<null>'}, 'bpcZM');
    var count_7 = objectStore_9.count();
    var add_7 = objectStore_2.add({f0_i: '<null>', f1_b: '<array>'}, 'MFgJTZpU');
    var add_8 = objectStore_9.add({f0_l: '<boolean>', f1_h: '<string>', f2_v: '<boolean>', f3_y: '<boolean>', f4_t: '<array>', f5_w: '<object>'}, 'OYRbCbosJxNV');
    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('Abj', 'Abj', true, true);
        get_8 = objectStore_4.get(KeyRange_32);
    }
    catch (e){
    }

    var objectStore_12 = db.createObjectStore('objectStore_92', {keypath: 'iiYnGjrHZVV'});
    var count_8 = objectStore_9.count();
    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('bpcZM', 'bpcZM', false, true);
        get_9 = objectStore_7.get(KeyRange_34);
    }
    catch (e){
    }

    var objectStore_13 = db.createObjectStore('objectStore_93');
    var index_87 = objectStore_10.createIndex('index_87', 'test', {unique: true, multiEntry: true});
    var getAllKeys_3;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('Abj', false);
        getAllKeys_3 = objectStore_4.getAllKeys(KeyRange_36, 2355594724);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('Abj');
        getAllKeys_3 = objectStore_4.getAllKeys(KeyRange_37);
    }

    var get_10;
    try{
        KeyRange_38 = IDBKeyRange.only('Abj');
        get_10 = objectStore_4.get(KeyRange_38);
    }
    catch (e){
    }

    var objectStore_14 = db.createObjectStore('objectStore_94');
    var add_9 = objectStore_5.add({f0_o: '<object>', f1_x: '<null>', f2_z: '<string>', f3_a: '<array>'}, 'ugWetJew');
    var clear_7 = objectStore_7.clear();
    var clear_8 = objectStore_3.clear();
    var index_88 = objectStore_7.createIndex('index_88', 'test', {unique: true});
    var clear_9 = objectStore_9.clear();
    var clear_10 = objectStore_9.clear();
    var index_89 = objectStore_7.createIndex('index_89', 'test', {unique: false});
    var put_9 = objectStore_4.put({f0_z: '<null>', f1_v: '<object>', f2_q: '<number>', f3_d: '<number>', f4_a: '<number>'}, 'BWWnBmczCe');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_70 = db.transaction(['objectStore_90', 'objectStore_83'], 'readonly', {durability:"relaxed"})
    var objectStore_90 = txn_70.objectStore('objectStore_90');
    var index_1 = objectStore_90.index('index_87');
    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_71 = db.transaction(['objectStore_93'], 'readonly', {durability:"relaxed"})
    var objectStore_93 = txn_71.objectStore('objectStore_93');
    txn_71.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_71.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_72 = db.transaction(['objectStore_93', 'objectStore_92', 'objectStore_85', 'objectStore_82'], 'readonly', {durability:"default"})
    var objectStore_93 = txn_72.objectStore('objectStore_93');
    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_72.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_73 = db.transaction(['objectStore_84', 'objectStore_89', 'objectStore_87', 'objectStore_94', 'objectStore_93', 'objectStore_88', 'objectStore_92', 'objectStore_91'], 'readwrite', {durability:"strict"})
    var objectStore_93 = txn_73.objectStore('objectStore_93');
    var put_10 = objectStore_93.put({f0_n: '<null>', f1_i: '<boolean>', f2_o: '<object>', f3_h: '<array>'}, 'DJvfrgJ');
    var getAllKeys_4 = objectStore_93.getAllKeys();
    var add_10 = objectStore_93.add({f0_o: '<object>', f1_a: '<number>', f2_h: '<array>', f3_y: '<number>'}, 'qHmHqhEciEMN');
    var put_11 = objectStore_93.put({f0_y: '<object>', f1_a: '<string>'}, 'HTR');
    var put_12 = objectStore_93.put({f0_m: '<number>'}, 'LtCz');
    var count_9 = objectStore_93.count();
    var put_13 = objectStore_93.put({f0_g: '<array>', f1_u: '<boolean>', f2_x: '<object>', f3_g: '<null>', f4_s: '<string>', f5_g: '<number>'}, 'HRwtDblDv');
    var clear_11 = objectStore_93.clear();
    var count_10 = objectStore_93.count();
    var clear_12 = objectStore_93.clear();
    var put_14 = objectStore_93.put({f0_p: '<number>', f1_d: '<null>', f2_z: '<number>', f3_j: '<number>', f4_m: '<null>', f5_y: '<string>', f6_u: '<string>', f7_d: '<null>', f8_h: '<null>'}, 'znjjmAdNfvO');
    var get_11;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('HTR', true);
        get_11 = objectStore_93.get(KeyRange_40);
    }
    catch (e){
    }

    txn_73.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_73.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_73.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_74 = db.transaction(['objectStore_80'], 'readonly', {durability:"relaxed"})
    var objectStore_80 = txn_74.objectStore('objectStore_80');
    var count_11;
    try{
        KeyRange_42 = IDBKeyRange.only('BBdSU');
        count_11 = objectStore_80.count(KeyRange_42);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('bZeXR', 'VHKk', false, true);
        get_12 = objectStore_80.get(KeyRange_44);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_46 = IDBKeyRange.bound('VHKk', 'BBdSU', false, true);
        get_13 = objectStore_80.get(KeyRange_46);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('bZeXR', 'qlgPfvSiBMls', true, true);
        count_12 = objectStore_80.count(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_80.getAllKeys();
    var get_14;
    try{
        KeyRange_50 = IDBKeyRange.bound('ItrMpD', 'VHKk', true, true);
        get_14 = objectStore_80.get(KeyRange_50);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_52 = IDBKeyRange.bound('BBdSU', 'bZeXR', false, true);
        get_15 = objectStore_80.get(KeyRange_52);
    }
    catch (e){
    }

    var count_13 = objectStore_80.count();
    var getAllKeys_6 = objectStore_80.getAllKeys(1974568364);
    var getAll_3 = objectStore_80.getAll();
    var count_14;
    try{
        KeyRange_54 = IDBKeyRange.bound('VHKk', 'BBdSU', true, false);
        count_14 = objectStore_80.count(KeyRange_54);
    }
    catch (e){
    }

    var index_2 = objectStore_80.index('index_85');
    var getAllKeys_7 = objectStore_80.getAllKeys(4087858950);
    var getAll_4 = objectStore_80.getAll(2339732709);
    var get_16;
    try{
        KeyRange_56 = IDBKeyRange.bound('BBdSU', 'JgTZSXgMgt', false, false);
        get_16 = objectStore_80.get(KeyRange_56);
    }
    catch (e){
    }

    txn_74.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_74.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_74.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_75 = db.transaction(['objectStore_93', 'objectStore_88'], 'readonly', {durability:"default"})
    var objectStore_88 = txn_75.objectStore('objectStore_88');
    var count_15 = objectStore_88.count();
    var get_17;
    try{
        KeyRange_58 = IDBKeyRange.bound('xBrdrvgXIi', 'EMaZrlnlVvoG', true, false);
        get_17 = objectStore_88.get(KeyRange_58);
    }
    catch (e){
    }

    var getAll_5 = objectStore_88.getAll();
    var getAllKeys_8;
    try{
        KeyRange_60 = IDBKeyRange.bound('xBrdrvgXIi', 'EMaZrlnlVvoG', false, false);
        getAllKeys_8 = objectStore_88.getAllKeys(KeyRange_60, 3607158760);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('EMaZrlnlVvoG');
        getAllKeys_8 = objectStore_88.getAllKeys(KeyRange_61);
    }

    var count_16;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('EMaZrlnlVvoG', false);
        count_16 = objectStore_88.count(KeyRange_62);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_64 = IDBKeyRange.only('EMaZrlnlVvoG');
        count_17 = objectStore_88.count(KeyRange_64);
    }
    catch (e){
    }

    var count_18 = objectStore_88.count();
    var get_18;
    try{
        KeyRange_66 = IDBKeyRange.only('EMaZrlnlVvoG');
        get_18 = objectStore_88.get(KeyRange_66);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('EMaZrlnlVvoG', false);
        get_19 = objectStore_88.get(KeyRange_68);
    }
    catch (e){
    }

    var count_19 = objectStore_88.count();
    var count_20 = objectStore_88.count();
    var get_20;
    try{
        KeyRange_70 = IDBKeyRange.bound('EMaZrlnlVvoG', 'xBrdrvgXIi', true, false);
        get_20 = objectStore_88.get(KeyRange_70);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('xBrdrvgXIi', false);
        get_21 = objectStore_88.get(KeyRange_72);
    }
    catch (e){
    }

    var getAll_6 = objectStore_88.getAll(1345531531);
    txn_75.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_75.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_75.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_76 = db.transaction(['objectStore_89', 'objectStore_90'], 'readwrite', {durability:"default"})
    var objectStore_89 = txn_76.objectStore('objectStore_89');
    var getAll_7 = objectStore_89.getAll(4081533120);
    var getAllKeys_9 = objectStore_89.getAllKeys();
    var count_21;
    try{
        KeyRange_74 = IDBKeyRange.only('OYRbCbosJxNV');
        count_21 = objectStore_89.count(KeyRange_74);
    }
    catch (e){
    }

    var clear_13 = objectStore_89.clear();
    var put_15 = objectStore_89.put({f0_m: '<object>', f1_c: '<boolean>', f2_t: '<null>', f3_a: '<array>', f4_c: '<boolean>', f5_l: '<object>', f6_l: '<boolean>', f7_t: '<null>', f8_y: '<boolean>'}, 'yuAk');
    var get_22;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('OYRbCbosJxNV', false);
        get_22 = objectStore_89.get(KeyRange_76);
    }
    catch (e){
    }

    var count_22;
    try{
        KeyRange_78 = IDBKeyRange.only('gcKGQzr');
        count_22 = objectStore_89.count(KeyRange_78);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_80 = IDBKeyRange.bound('OYRbCbosJxNV', 'OYRbCbosJxNV', false, false);
        get_23 = objectStore_89.get(KeyRange_80);
    }
    catch (e){
    }

    var put_16 = objectStore_89.put({f0_k: '<string>', f1_s: '<array>', f2_j: '<boolean>', f3_s: '<boolean>'}, 'PgKfSeYgj');
    var add_11 = objectStore_89.add({f0_i: '<boolean>'}, 'XYIupLs');
    var put_17 = objectStore_89.put({f0_n: '<string>', f1_i: '<number>', f2_m: '<string>', f3_q: '<string>'}, 'UOOZkPCFhn');
    var put_18 = objectStore_89.put({f0_y: '<object>', f1_d: '<array>', f2_k: '<boolean>', f3_x: '<boolean>', f4_n: '<boolean>', f5_c: '<string>'}, 'vWwLRydu');
    var getAllKeys_10 = objectStore_89.getAllKeys();
    var add_12 = objectStore_89.add({f0_a: '<array>', f1_c: '<string>', f2_p: '<array>'}, 'tFdIyClEBj');
    var delete_1;
    try{
        KeyRange_82 = IDBKeyRange.only('vWwLRydu');
        delete_1 = objectStore_89.delete(KeyRange_82);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_84 = IDBKeyRange.bound('XYIupLs', 'OYRbCbosJxNV', true, false);
        delete_2 = objectStore_89.delete(KeyRange_84);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_86 = IDBKeyRange.only('XYIupLs');
        delete_3 = objectStore_89.delete(KeyRange_86);
    }
    catch (e){
    }

    var count_23 = objectStore_89.count();
    var put_19 = objectStore_89.put({f0_f: '<array>', f1_z: '<object>', f2_f: '<array>', f3_j: '<array>'}, 'dPggGsnO');
    var count_24 = objectStore_89.count();
    var put_20 = objectStore_89.put({f0_p: '<object>', f1_u: '<array>', f2_p: '<number>', f3_s: '<boolean>', f4_x: '<array>', f5_s: '<null>', f6_g: '<number>'}, 'rUV');
    var get_24;
    try{
        KeyRange_88 = IDBKeyRange.bound('rUV', 'dPggGsnO', true, true);
        get_24 = objectStore_89.get(KeyRange_88);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_90 = IDBKeyRange.only('tFdIyClEBj');
        get_25 = objectStore_89.get(KeyRange_90);
    }
    catch (e){
    }

    txn_76.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_76.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_76.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_77 = db.transaction(['objectStore_80'], 'readonly', {durability:"strict"})
    var objectStore_80 = txn_77.objectStore('objectStore_80');
    var count_25;
    try{
        KeyRange_92 = IDBKeyRange.bound('VHKk', 'bZeXR', true, true);
        count_25 = objectStore_80.count(KeyRange_92);
    }
    catch (e){
    }

    var count_26 = objectStore_80.count();
    var getAllKeys_11;
    try{
        KeyRange_94 = IDBKeyRange.bound('JgTZSXgMgt', 'JgTZSXgMgt', false, false);
        getAllKeys_11 = objectStore_80.getAllKeys(KeyRange_94);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('qlgPfvSiBMls');
        getAllKeys_11 = objectStore_80.getAllKeys(KeyRange_95);
    }

    var count_27 = objectStore_80.count();
    var count_28 = objectStore_80.count();
    var get_26;
    try{
        KeyRange_96 = IDBKeyRange.only('qlgPfvSiBMls');
        get_26 = objectStore_80.get(KeyRange_96);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_98 = IDBKeyRange.only('ItrMpD');
        get_27 = objectStore_80.get(KeyRange_98);
    }
    catch (e){
    }

    var getAll_8 = objectStore_80.getAll(5776356);
    var count_29 = objectStore_80.count();
    var getAllKeys_12 = objectStore_80.getAllKeys(353748164);
    var getAll_9 = objectStore_80.getAll();
    var get_28;
    try{
        KeyRange_100 = IDBKeyRange.lowerBound('BBdSU', true);
        get_28 = objectStore_80.get(KeyRange_100);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_80.getAllKeys();
    var getAll_10;
    try{
        KeyRange_102 = IDBKeyRange.bound('BBdSU', 'VHKk', false, true);
        getAll_10 = objectStore_80.getAll(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('VHKk');
        getAll_10 = objectStore_80.getAll(KeyRange_103);
    }

    var get_29;
    try{
        KeyRange_104 = IDBKeyRange.bound('BBdSU', 'bZeXR', true, false);
        get_29 = objectStore_80.get(KeyRange_104);
    }
    catch (e){
    }

    var getAllKeys_14;
    try{
        KeyRange_106 = IDBKeyRange.bound('qlgPfvSiBMls', 'ItrMpD', false, true);
        getAllKeys_14 = objectStore_80.getAllKeys(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('qlgPfvSiBMls');
        getAllKeys_14 = objectStore_80.getAllKeys(KeyRange_107);
    }

    txn_77.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_77.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_77.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_78 = db.transaction(['objectStore_94'], 'readwrite', {durability:"relaxed"})
    var objectStore_94 = txn_78.objectStore('objectStore_94');
    var add_13 = objectStore_94.add({f0_x: '<array>'}, 'YpEuuY');
    var getAll_11;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('YpEuuY', false);
        getAll_11 = objectStore_94.getAll(KeyRange_108);
    }
    catch (e){
        KeyRange_109 = IDBKeyRange.only('YpEuuY');
        getAll_11 = objectStore_94.getAll(KeyRange_109);
    }

    var add_14 = objectStore_94.add({f0_w: '<object>', f1_h: '<null>', f2_n: '<number>', f3_n: '<string>'}, 'pYdruwI');
    var clear_14 = objectStore_94.clear();
    var add_15 = objectStore_94.add({f0_w: '<object>', f1_i: '<null>', f2_e: '<number>', f3_w: '<number>', f4_x: '<number>'}, 'FNguuvEAk');
    var get_30;
    try{
        KeyRange_110 = IDBKeyRange.only('FNguuvEAk');
        get_30 = objectStore_94.get(KeyRange_110);
    }
    catch (e){
    }

    var clear_15 = objectStore_94.clear();
    var add_16 = objectStore_94.add({f0_e: '<number>', f1_q: '<string>', f2_u: '<boolean>', f3_o: '<null>', f4_m: '<number>', f5_n: '<string>', f6_j: '<null>', f7_w: '<array>', f8_y: '<boolean>'}, 'VDDrTZXthtw');
    var getAllKeys_15 = objectStore_94.getAllKeys();
    var clear_16 = objectStore_94.clear();
    var get_31;
    try{
        KeyRange_112 = IDBKeyRange.bound('VDDrTZXthtw', 'pYdruwI', true, false);
        get_31 = objectStore_94.get(KeyRange_112);
    }
    catch (e){
    }

    var count_30 = objectStore_94.count();
    var clear_17 = objectStore_94.clear();
    var clear_18 = objectStore_94.clear();
    var count_31 = objectStore_94.count();
    var count_32 = objectStore_94.count();
    txn_78.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_78.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_78.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_79 = db.transaction(['objectStore_88'], 'readonly', {durability:"relaxed"})
    var objectStore_88 = txn_79.objectStore('objectStore_88');
    var get_32;
    try{
        KeyRange_114 = IDBKeyRange.bound('EMaZrlnlVvoG', 'EMaZrlnlVvoG', true, false);
        get_32 = objectStore_88.get(KeyRange_114);
    }
    catch (e){
    }

    var count_33 = objectStore_88.count();
    var count_34;
    try{
        KeyRange_116 = IDBKeyRange.only('EMaZrlnlVvoG');
        count_34 = objectStore_88.count(KeyRange_116);
    }
    catch (e){
    }

    var getAll_12 = objectStore_88.getAll(2475359658);
    var count_35;
    try{
        KeyRange_118 = IDBKeyRange.bound('EMaZrlnlVvoG', 'EMaZrlnlVvoG', true, false);
        count_35 = objectStore_88.count(KeyRange_118);
    }
    catch (e){
    }

    var count_36;
    try{
        KeyRange_120 = IDBKeyRange.bound('xBrdrvgXIi', 'EMaZrlnlVvoG', true, true);
        count_36 = objectStore_88.count(KeyRange_120);
    }
    catch (e){
    }

    var getAllKeys_16;
    try{
        KeyRange_122 = IDBKeyRange.bound('xBrdrvgXIi', 'EMaZrlnlVvoG', false, false);
        getAllKeys_16 = objectStore_88.getAllKeys(KeyRange_122);
    }
    catch (e){
        KeyRange_123 = IDBKeyRange.only('EMaZrlnlVvoG');
        getAllKeys_16 = objectStore_88.getAllKeys(KeyRange_123);
    }

    var get_33;
    try{
        KeyRange_124 = IDBKeyRange.lowerBound('EMaZrlnlVvoG', true);
        get_33 = objectStore_88.get(KeyRange_124);
    }
    catch (e){
    }

    var getAll_13;
    try{
        KeyRange_126 = IDBKeyRange.bound('EMaZrlnlVvoG', 'EMaZrlnlVvoG', true, true);
        getAll_13 = objectStore_88.getAll(KeyRange_126);
    }
    catch (e){
        KeyRange_127 = IDBKeyRange.only('xBrdrvgXIi');
        getAll_13 = objectStore_88.getAll(KeyRange_127);
    }

    var get_34;
    try{
        KeyRange_128 = IDBKeyRange.bound('xBrdrvgXIi', 'xBrdrvgXIi', true, false);
        get_34 = objectStore_88.get(KeyRange_128);
    }
    catch (e){
    }

    var count_37 = objectStore_88.count();
    var get_35;
    try{
        KeyRange_130 = IDBKeyRange.lowerBound('xBrdrvgXIi', false);
        get_35 = objectStore_88.get(KeyRange_130);
    }
    catch (e){
    }

    var count_38;
    try{
        KeyRange_132 = IDBKeyRange.lowerBound('EMaZrlnlVvoG', true);
        count_38 = objectStore_88.count(KeyRange_132);
    }
    catch (e){
    }

    var count_39;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('EMaZrlnlVvoG', true);
        count_39 = objectStore_88.count(KeyRange_134);
    }
    catch (e){
    }

    var getAll_14;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('xBrdrvgXIi', false);
        getAll_14 = objectStore_88.getAll(KeyRange_136, 3170658717);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('EMaZrlnlVvoG');
        getAll_14 = objectStore_88.getAll(KeyRange_137);
    }

    var getAllKeys_17 = objectStore_88.getAllKeys(851475189);
    var getAll_15 = objectStore_88.getAll();
    var getAll_16 = objectStore_88.getAll();
    var count_40;
    try{
        KeyRange_138 = IDBKeyRange.only('EMaZrlnlVvoG');
        count_40 = objectStore_88.count(KeyRange_138);
    }
    catch (e){
    }

    txn_79.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_79.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_79.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5982')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};