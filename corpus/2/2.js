let db;
const openRequest = window.indexedDB.open('str_9077', 7771980686474038)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_83', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_84');
    var index_77 = objectStore_0.createIndex('index_77', 'test', {unique: false});
    var objectStore_2 = db.createObjectStore('objectStore_85', {autoIncrement: true});
    var index_78 = objectStore_2.createIndex('index_78', 'test');
    var index_79 = objectStore_0.createIndex('index_79', 'test', {unique: true, multiEntry: false});
    var index_80 = objectStore_0.createIndex('index_80', 'test', {multiEntry: false});
    var index_81 = objectStore_1.createIndex('index_81', 'test', {multiEntry: false});
    var objectStore_3 = db.createObjectStore('objectStore_86');
    var objectStore_4 = db.createObjectStore('objectStore_87', {keypath: 'THEdA'});
    var objectStore_5 = db.createObjectStore('objectStore_88', {keypath: 'gaWLOgRGrX'});
    var index_82 = objectStore_5.createIndex('index_82', 'test', {unique: true, multiEntry: true});
    var index_83 = objectStore_1.createIndex('index_83', 'test', {multiEntry: false});
    var objectStore_6 = db.createObjectStore('objectStore_89', {keypath: 'hnKVJjylmiFi', autoIncrement: true});
    var index_84 = objectStore_6.createIndex('index_84', 'test', {unique: true});
    var index_85 = objectStore_4.createIndex('index_85', 'test', {multiEntry: true});
    var index_86 = objectStore_6.createIndex('index_86', 'test', {multiEntry: true});
    var objectStore_7 = db.createObjectStore('objectStore_90');
    var index_87 = objectStore_2.createIndex('index_87', 'test', {unique: false, multiEntry: false});
    var index_88 = objectStore_0.createIndex('index_88', 'test');
    var index_89 = objectStore_6.createIndex('index_89', 'test');
    var objectStore_8 = db.createObjectStore('objectStore_91', {autoIncrement: false});
    var index_90 = objectStore_4.createIndex('index_90', 'test', {multiEntry: false});
    var index_91 = objectStore_8.createIndex('index_91', 'test', {multiEntry: true});
    var index_92 = objectStore_2.createIndex('index_92', 'test', {multiEntry: false});
    var objectStore_9 = db.createObjectStore('objectStore_92', {autoIncrement: false});
    var objectStore_10 = db.createObjectStore('objectStore_93');
    var objectStore_11 = db.createObjectStore('objectStore_94', {keypath: 'Zsi'});
    var objectStore_12 = db.createObjectStore('objectStore_95');
    var index_93 = objectStore_4.createIndex('index_93', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_96', {autoIncrement: true});
    var index_94 = objectStore_11.createIndex('index_94', 'test');
    var index_95 = objectStore_7.createIndex('index_95', 'test', {unique: false});
    var objectStore_14 = db.createObjectStore('objectStore_97');
    var index_96 = objectStore_5.createIndex('index_96', 'test');
    var objectStore_15 = db.createObjectStore('objectStore_98', {autoIncrement: false});
    var objectStore_16 = db.createObjectStore('objectStore_99', {autoIncrement: true});
    var objectStore_17 = db.createObjectStore('objectStore_100', {autoIncrement: false});
    var index_97 = objectStore_13.createIndex('index_97', 'test', {multiEntry: false});
    var index_98 = objectStore_7.createIndex('index_98', 'test', {unique: false});
    var objectStore_18 = db.createObjectStore('objectStore_101', {keypath: 'UNACCzUe'});
    var objectStore_19 = db.createObjectStore('objectStore_102', {keypath: 'HmS'});
    var objectStore_20 = db.createObjectStore('objectStore_103');
    var objectStore_21 = db.createObjectStore('objectStore_104');
    var index_99 = objectStore_10.createIndex('index_99', 'test', {unique: true, multiEntry: true});
    var index_100 = objectStore_14.createIndex('index_100', 'test', {unique: true, multiEntry: false});
    var objectStore_22 = db.createObjectStore('objectStore_105', {keypath: 'jgMXHaFckB', autoIncrement: false});
    var objectStore_23 = db.createObjectStore('objectStore_106', {autoIncrement: false});
    var objectStore_24 = db.createObjectStore('objectStore_107', {autoIncrement: false});
    var objectStore_25 = db.createObjectStore('objectStore_108');
    var index_101 = objectStore_16.createIndex('index_101', 'test', {unique: false, multiEntry: true});
    var index_102 = objectStore_19.createIndex('index_102', 'test', {unique: false, multiEntry: false});
    var objectStore_26 = db.createObjectStore('objectStore_109', {autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_110', {keypath: 'zrazyYs.NNFW.ZDPVjzBz.wVHtnI.JwOyPjxwQQa.aZTMHtXHxWwI.AMYJLNzyI'});
    var index_103 = objectStore_13.createIndex('index_103', 'test');
    var objectStore_28 = db.createObjectStore('objectStore_111', {keypath: 'UbAYLLkSnNDw', autoIncrement: false});
    var index_104 = objectStore_12.createIndex('index_104', 'test');
    var objectStore_29 = db.createObjectStore('objectStore_112', {keypath: 'eGLtBNQHrdJ'});
    var index_105 = objectStore_2.createIndex('index_105', 'test');
    var index_106 = objectStore_0.createIndex('index_106', 'test', {multiEntry: true});
    var index_107 = objectStore_20.createIndex('index_107', 'test');
    var objectStore_30 = db.createObjectStore('objectStore_113', {keypath: 'mcpu'});
    var index_108 = objectStore_3.createIndex('index_108', 'test', {unique: false, multiEntry: true});
    var objectStore_31 = db.createObjectStore('objectStore_114', {autoIncrement: true});
    var objectStore_32 = db.createObjectStore('objectStore_115', {keypath: 'KUgMukB'});
    var objectStore_33 = db.createObjectStore('objectStore_116', {autoIncrement: false});
    var objectStore_34 = db.createObjectStore('objectStore_117', {autoIncrement: true});
    var index_109 = objectStore_19.createIndex('index_109', 'test', {unique: true, multiEntry: false});
    var objectStore_35 = db.createObjectStore('objectStore_118', {keypath: 'vGg'});
    var objectStore_36 = db.createObjectStore('objectStore_119');
    var objectStore_37 = db.createObjectStore('objectStore_120', {keypath: 'tdcL'});
    var index_110 = objectStore_6.createIndex('index_110', 'test', {unique: true, multiEntry: false});
    var index_111 = objectStore_28.createIndex('index_111', 'test', {unique: true});
    var objectStore_38 = db.createObjectStore('objectStore_121', {keypath: 'pdnSVyhjjdB'});
    var objectStore_39 = db.createObjectStore('objectStore_122', {autoIncrement: true});
    var index_112 = objectStore_22.createIndex('index_112', 'test');
    var objectStore_40 = db.createObjectStore('objectStore_123');
    var objectStore_41 = db.createObjectStore('objectStore_124');
    var index_113 = objectStore_1.createIndex('index_113', 'test', {multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_20 = db.transaction(['objectStore_87'], 'readwrite', {durability:"default"})
    var objectStore_87 = txn_20.objectStore('objectStore_87');
    var clear_0 = objectStore_87.clear();
    var put_0 = objectStore_87.put({f0_b: '<boolean>', f1_z: '<array>', f2_a: '<null>', f3_e: '<array>', f4_h: '<number>'}, 'LZT');
    var clear_1 = objectStore_87.clear();
    var add_0 = objectStore_87.add({f0_o: '<array>', f1_z: '<object>', f2_d: '<array>', f3_b: '<boolean>', f4_i: '<number>', f5_g: '<null>', f6_p: '<number>', f7_b: '<array>'}, 'gWtCxoLHWzeC');
    var add_1 = objectStore_87.add({f0_h: '<null>', f1_k: '<null>'}, 'wEoWaiklS');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('gWtCxoLHWzeC', 'gWtCxoLHWzeC', true, true);
        getAllKeys_0 = objectStore_87.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('LZT');
        getAllKeys_0 = objectStore_87.getAllKeys(KeyRange_1);
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('gWtCxoLHWzeC', 'LZT', true, false);
        count_0 = objectStore_87.count(KeyRange_2);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('gWtCxoLHWzeC', 'gWtCxoLHWzeC', false, false);
        get_0 = objectStore_87.get(KeyRange_4);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('LZT', 'gWtCxoLHWzeC', true, false);
        delete_0 = objectStore_87.delete(KeyRange_6);
    }
    catch (e){
    }

    var put_1 = objectStore_87.put({f0_n: '<array>', f1_b: '<object>', f2_i: '<boolean>'}, 'FlsPxn');
    var put_2 = objectStore_87.put({f0_d: '<object>', f1_q: '<string>', f2_t: '<number>', f3_t: '<boolean>'}, 'wPZW');
    var put_3 = objectStore_87.put({f0_i: '<boolean>', f1_w: '<array>', f2_u: '<number>', f3_s: '<object>', f4_j: '<string>', f5_c: '<null>', f6_p: '<number>', f7_s: '<object>'}, 'EzavaUPE');
    var put_4 = objectStore_87.put({f0_c: '<boolean>'}, 'ybJEmAQK');
    var clear_2 = objectStore_87.clear();
    var count_1 = objectStore_87.count();
    var add_2 = objectStore_87.add({f0_j: '<string>', f1_t: '<boolean>', f2_m: '<object>', f3_i: '<object>', f4_k: '<null>'}, 'eiIrS');
    var put_5 = objectStore_87.put({f0_v: '<array>', f1_d: '<null>'}, 'mZIAYilKyBal');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('eiIrS', 'wEoWaiklS', false, true);
        count_2 = objectStore_87.count(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('FlsPxn', 'FlsPxn', false, false);
        get_1 = objectStore_87.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_3 = objectStore_87.clear();
    var put_6 = objectStore_87.put({f0_w: '<string>', f1_d: '<object>', f2_w: '<null>', f3_v: '<string>', f4_v: '<string>', f5_o: '<null>', f6_j: '<boolean>', f7_n: '<string>'}, 'UleAspcGfluH');
    var clear_4 = objectStore_87.clear();
    var getAllKeys_1 = objectStore_87.getAllKeys(527055681);
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('mZIAYilKyBal', 'FlsPxn', true, true);
        count_3 = objectStore_87.count(KeyRange_12);
    }
    catch (e){
    }

    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_21 = db.transaction(['objectStore_119', 'objectStore_96'], 'readonly', {durability:"relaxed"})
    var objectStore_96 = txn_21.objectStore('objectStore_96');
    var index_0 = objectStore_96.index('index_97');
    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_21.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_22 = db.transaction(['objectStore_97'], 'readonly', {durability:"strict"})
    var objectStore_97 = txn_22.objectStore('objectStore_97');
    var index_1 = objectStore_97.index('index_100');
    var index_2 = objectStore_97.index('index_100');
    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_22.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_23 = db.transaction(['objectStore_93', 'objectStore_119'], 'readonly', {durability:"relaxed"})
    var objectStore_119 = txn_23.objectStore('objectStore_119');
    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_23.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_23.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_24 = db.transaction(['objectStore_85', 'objectStore_123'], 'readwrite', {durability:"strict"})
    var objectStore_123 = txn_24.objectStore('objectStore_123');
    var put_7 = objectStore_123.put({f0_b: '<array>', f1_c: '<boolean>', f2_z: '<null>', f3_f: '<object>', f4_d: '<string>', f5_l: '<null>', f6_u: '<object>', f7_u: '<number>'}, 'nfwn');
    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('nfwn', true);
        count_4 = objectStore_123.count(KeyRange_14);
    }
    catch (e){
    }

    var add_3 = objectStore_123.add({f0_w: '<number>', f1_o: '<object>', f2_o: '<null>', f3_k: '<null>', f4_s: '<number>'}, 'dyYTkFjimWb');
    var add_4 = objectStore_123.add({f0_o: '<number>', f1_u: '<boolean>', f2_x: '<string>', f3_w: '<boolean>', f4_s: '<string>', f5_j: '<boolean>'}, 'EjdGfxSbZ');
    var clear_5 = objectStore_123.clear();
    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('dyYTkFjimWb', false);
        get_2 = objectStore_123.get(KeyRange_16);
    }
    catch (e){
    }

    var count_5 = objectStore_123.count();
    var clear_6 = objectStore_123.clear();
    var clear_7 = objectStore_123.clear();
    var count_6 = objectStore_123.count();
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('nfwn', 'nfwn', false, false);
        get_3 = objectStore_123.get(KeyRange_18);
    }
    catch (e){
    }

    var clear_8 = objectStore_123.clear();
    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('nfwn', 'nfwn', false, false);
        count_7 = objectStore_123.count(KeyRange_20);
    }
    catch (e){
    }

    var clear_9 = objectStore_123.clear();
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.only('nfwn');
        get_4 = objectStore_123.get(KeyRange_22);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('EjdGfxSbZ', 'EjdGfxSbZ', true, false);
        get_5 = objectStore_123.get(KeyRange_24);
    }
    catch (e){
    }

    var clear_10 = objectStore_123.clear();
    var put_8 = objectStore_123.put({f0_d: '<array>', f1_r: '<array>', f2_p: '<object>', f3_c: '<array>', f4_i: '<object>', f5_a: '<boolean>'}, 'EnxiGBs');
    var getAll_0 = objectStore_123.getAll();
    var delete_1;
    try{
        KeyRange_26 = IDBKeyRange.bound('dyYTkFjimWb', 'nfwn', true, false);
        delete_1 = objectStore_123.delete(KeyRange_26);
    }
    catch (e){
    }

    txn_24.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_24.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_25 = db.transaction(['objectStore_90', 'objectStore_98'], 'readwrite', {durability:"strict"})
    var objectStore_98 = txn_25.objectStore('objectStore_98');
    var add_5 = objectStore_98.add({f0_y: '<array>', f1_l: '<string>', f2_f: '<object>', f3_q: '<number>', f4_j: '<object>', f5_n: '<null>', f6_y: '<array>'}, 'XpRIPlQJL');
    var getAllKeys_2;
    try{
        KeyRange_28 = IDBKeyRange.bound('XpRIPlQJL', 'XpRIPlQJL', false, true);
        getAllKeys_2 = objectStore_98.getAllKeys(KeyRange_28, 1610799373);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('XpRIPlQJL');
        getAllKeys_2 = objectStore_98.getAllKeys(KeyRange_29);
    }

    var add_6 = objectStore_98.add({f0_z: '<null>', f1_m: '<string>', f2_x: '<string>', f3_i: '<string>'}, 'jVSCoa');
    var put_9 = objectStore_98.put({f0_c: '<boolean>', f1_k: '<array>', f2_z: '<number>'}, 'VIkDJl');
    var getAll_1;
    try{
        KeyRange_30 = IDBKeyRange.bound('XpRIPlQJL', 'VIkDJl', false, false);
        getAll_1 = objectStore_98.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('VIkDJl');
        getAll_1 = objectStore_98.getAll(KeyRange_31);
    }

    var delete_2;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('VIkDJl', true);
        delete_2 = objectStore_98.delete(KeyRange_32);
    }
    catch (e){
    }

    var clear_11 = objectStore_98.clear();
    var add_7 = objectStore_98.add({f0_a: '<string>', f1_f: '<array>', f2_j: '<boolean>', f3_h: '<null>', f4_a: '<string>', f5_l: '<number>', f6_l: '<string>', f7_j: '<string>', f8_h: '<boolean>'}, 'MiIBmBuKf');
    var clear_12 = objectStore_98.clear();
    var clear_13 = objectStore_98.clear();
    var put_10 = objectStore_98.put({f0_s: '<object>', f1_o: '<object>', f2_v: '<string>', f3_v: '<object>', f4_b: '<string>'}, 'qBzuFY');
    var clear_14 = objectStore_98.clear();
    txn_25.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_25.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_25.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_26 = db.transaction(['objectStore_92', 'objectStore_97', 'objectStore_113', 'objectStore_123', 'objectStore_102', 'objectStore_86'], 'readwrite', {durability:"strict"})
    var objectStore_92 = txn_26.objectStore('objectStore_92');
    var put_11 = objectStore_92.put({f0_m: '<number>', f1_f: '<object>', f2_g: '<boolean>', f3_q: '<number>', f4_p: '<null>', f5_v: '<string>', f6_y: '<string>', f7_y: '<string>', f8_p: '<string>', f9_w: '<array>'}, 'YHtZjrHpmnN');
    var put_12 = objectStore_92.put({f0_t: '<number>', f1_g: '<object>', f2_i: '<array>', f3_k: '<boolean>'}, 'olkyBxj');
    var count_8 = objectStore_92.count();
    var add_8 = objectStore_92.add({f0_e: '<array>', f1_o: '<object>', f2_h: '<number>'}, 'HSPdpRco');
    var getAll_2;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('olkyBxj', false);
        getAll_2 = objectStore_92.getAll(KeyRange_34, 618142223);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('HSPdpRco');
        getAll_2 = objectStore_92.getAll(KeyRange_35);
    }

    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.only('YHtZjrHpmnN');
        get_6 = objectStore_92.get(KeyRange_36);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.only('YHtZjrHpmnN');
        get_7 = objectStore_92.get(KeyRange_38);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_40 = IDBKeyRange.bound('olkyBxj', 'olkyBxj', false, true);
        count_9 = objectStore_92.count(KeyRange_40);
    }
    catch (e){
    }

    var add_9 = objectStore_92.add({f0_t: '<null>', f1_o: '<array>', f2_z: '<boolean>', f3_l: '<array>', f4_x: '<null>', f5_l: '<object>', f6_f: '<array>', f7_o: '<array>', f8_t: '<string>', f9_l: '<null>'}, 'LyFjO');
    var clear_15 = objectStore_92.clear();
    var getAllKeys_3 = objectStore_92.getAllKeys();
    var clear_16 = objectStore_92.clear();
    var put_13 = objectStore_92.put({f0_b: '<boolean>'}, 'OMQCik');
    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('olkyBxj', false);
        get_8 = objectStore_92.get(KeyRange_42);
    }
    catch (e){
    }

    var put_14 = objectStore_92.put({f0_x: '<string>', f1_c: '<number>', f2_v: '<object>', f3_y: '<number>', f4_h: '<null>', f5_t: '<number>', f6_t: '<array>', f7_o: '<null>'}, 'EYhLdiorsJ');
    txn_26.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_26.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_26.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_27 = db.transaction(['objectStore_122', 'objectStore_97'], 'readwrite', {durability:"strict"})
    var objectStore_97 = txn_27.objectStore('objectStore_97');
    var clear_17 = objectStore_97.clear();
    var clear_18 = objectStore_97.clear();
    var add_10 = objectStore_97.add({f0_t: '<null>', f1_t: '<number>', f2_y: '<string>', f3_u: '<array>', f4_h: '<boolean>'}, 'rvqyJmwV');
    var count_10 = objectStore_97.count();
    var clear_19 = objectStore_97.clear();
    var put_15 = objectStore_97.put({f0_q: '<null>'}, 'bhpokUILr');
    var add_11 = objectStore_97.add({f0_c: '<number>', f1_c: '<array>', f2_x: '<null>'}, 'iYrem');
    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.bound('rvqyJmwV', 'rvqyJmwV', false, true);
        get_9 = objectStore_97.get(KeyRange_44);
    }
    catch (e){
    }

    var count_11 = objectStore_97.count();
    var getAll_3 = objectStore_97.getAll(2508431126);
    var count_12;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('rvqyJmwV', true);
        count_12 = objectStore_97.count(KeyRange_46);
    }
    catch (e){
    }

    txn_27.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_27.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_27.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_28 = db.transaction(['objectStore_113', 'objectStore_89'], 'readwrite', {durability:"relaxed"})
    var objectStore_113 = txn_28.objectStore('objectStore_113');
    var clear_20 = objectStore_113.clear();
    var put_16 = objectStore_113.put({f0_b: '<array>', f1_j: '<object>', f2_t: '<object>', f3_w: '<boolean>', f4_d: '<array>', f5_c: '<number>'}, 'gHOaqKSnaceB');
    var getAll_4 = objectStore_113.getAll();
    var getAll_5 = objectStore_113.getAll();
    var put_17 = objectStore_113.put({f0_h: '<number>', f1_h: '<number>'}, 'nPkJq');
    var count_13;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('nPkJq', false);
        count_13 = objectStore_113.count(KeyRange_48);
    }
    catch (e){
    }

    var getAll_6 = objectStore_113.getAll();
    var count_14 = objectStore_113.count();
    var clear_21 = objectStore_113.clear();
    var get_10;
    try{
        KeyRange_50 = IDBKeyRange.bound('gHOaqKSnaceB', 'nPkJq', true, false);
        get_10 = objectStore_113.get(KeyRange_50);
    }
    catch (e){
    }

    var put_18 = objectStore_113.put({f0_e: '<array>', f1_h: '<number>', f2_j: '<string>', f3_q: '<boolean>'}, 'odOMmzKxD');
    var get_11;
    try{
        KeyRange_52 = IDBKeyRange.bound('odOMmzKxD', 'odOMmzKxD', true, false);
        get_11 = objectStore_113.get(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('nPkJq', false);
        getAllKeys_4 = objectStore_113.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('nPkJq');
        getAllKeys_4 = objectStore_113.getAllKeys(KeyRange_55);
    }

    var get_12;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('gHOaqKSnaceB', false);
        get_12 = objectStore_113.get(KeyRange_56);
    }
    catch (e){
    }

    var add_12 = objectStore_113.add({f0_k: '<null>'}, 'gIZgRzum');
    var put_19 = objectStore_113.put({f0_u: '<object>', f1_s: '<array>', f2_u: '<null>', f3_y: '<array>', f4_t: '<array>', f5_a: '<string>', f6_z: '<number>'}, 'Auja');
    txn_28.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_28.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_28.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_29 = db.transaction(['objectStore_108', 'objectStore_107', 'objectStore_112'], 'readonly', {durability:"strict"})
    var objectStore_112 = txn_29.objectStore('objectStore_112');
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
const deleteRequest = indexedDB.deleteDatabase('str_9077')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};