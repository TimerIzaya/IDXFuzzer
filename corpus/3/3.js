let db;
const openRequest = window.indexedDB.open('str_7538', 6315302160234992)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_125', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_126', {keypath: 'NiDzTZC', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_127', {keypath: 'sIj.SMMUfG.thPT.dEHZkCdfSc.oDDHBa.SeGvAtxmP.PkmmEknIND.nkcCoL'});
    var objectStore_3 = db.createObjectStore('objectStore_128', {autoIncrement: true});
    var index_114 = objectStore_0.createIndex('index_114', 'test', {multiEntry: false});
    var index_115 = objectStore_2.createIndex('index_115', 'test', {unique: false});
    var index_116 = objectStore_2.createIndex('index_116', 'test');
    var index_117 = objectStore_3.createIndex('index_117', 'test', {multiEntry: false});
    var objectStore_4 = db.createObjectStore('objectStore_129', {keypath: 'PjgfFvpmqOC'});
    var objectStore_5 = db.createObjectStore('objectStore_130');
    var objectStore_6 = db.createObjectStore('objectStore_131', {keypath: 'oRqzUCByIRB', autoIncrement: true});
    var index_118 = objectStore_4.createIndex('index_118', 'test', {unique: false, multiEntry: true});
    var index_119 = objectStore_2.createIndex('index_119', 'test', {unique: false, multiEntry: false});
    var index_120 = objectStore_0.createIndex('index_120', 'test', {unique: true, multiEntry: false});
    var objectStore_7 = db.createObjectStore('objectStore_132', {keypath: 'aGdwHzWlrOwE'});
    var objectStore_8 = db.createObjectStore('objectStore_133', {keypath: 'hFaMVYb'});
    var index_121 = objectStore_4.createIndex('index_121', 'test', {multiEntry: false});
    var index_122 = objectStore_3.createIndex('index_122', 'test', {unique: true});
    var index_123 = objectStore_7.createIndex('index_123', 'test');
    var index_124 = objectStore_7.createIndex('index_124', 'test', {multiEntry: false});
    var index_125 = objectStore_0.createIndex('index_125', 'test', {multiEntry: false});
    var index_126 = objectStore_1.createIndex('index_126', 'test', {multiEntry: false});
    var index_127 = objectStore_2.createIndex('index_127', 'test');
    var objectStore_9 = db.createObjectStore('objectStore_134', {autoIncrement: true});
    var objectStore_10 = db.createObjectStore('objectStore_135', {autoIncrement: false});
    var objectStore_11 = db.createObjectStore('objectStore_136', {autoIncrement: false});
    var index_128 = objectStore_3.createIndex('index_128', 'test', {multiEntry: false});
    var objectStore_12 = db.createObjectStore('objectStore_137', {keypath: 'rkVmuftEJc'});
    var index_129 = objectStore_5.createIndex('index_129', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_138', {keypath: 'ijbhgwCsVY.DZK.dBzrbXfJdl', autoIncrement: false});
    var index_130 = objectStore_9.createIndex('index_130', 'test', {multiEntry: false});
    var objectStore_14 = db.createObjectStore('objectStore_139', {autoIncrement: false});
    var index_131 = objectStore_13.createIndex('index_131', 'test', {unique: false, multiEntry: false});
    var objectStore_15 = db.createObjectStore('objectStore_140', {autoIncrement: false});
    var index_132 = objectStore_0.createIndex('index_132', 'test', {multiEntry: false});
    var objectStore_16 = db.createObjectStore('objectStore_141');
    var index_133 = objectStore_6.createIndex('index_133', 'test', {unique: false});
    var index_134 = objectStore_2.createIndex('index_134', 'test', {multiEntry: false});
    var index_135 = objectStore_15.createIndex('index_135', 'test', {unique: true, multiEntry: false});
    var index_136 = objectStore_5.createIndex('index_136', 'test');
    var objectStore_17 = db.createObjectStore('objectStore_142');
    var objectStore_18 = db.createObjectStore('objectStore_143');
    var index_137 = objectStore_1.createIndex('index_137', 'test', {multiEntry: false});
    var objectStore_19 = db.createObjectStore('objectStore_144', {autoIncrement: false});
    var index_138 = objectStore_0.createIndex('index_138', 'test');
    var index_139 = objectStore_0.createIndex('index_139', 'test', {multiEntry: false});
    var index_140 = objectStore_16.createIndex('index_140', 'test', {unique: true});
    var objectStore_20 = db.createObjectStore('objectStore_145');
    var objectStore_21 = db.createObjectStore('objectStore_146', {keypath: 'dmDGcmWszc'});
    var index_141 = objectStore_4.createIndex('index_141', 'test', {multiEntry: false});
    var index_142 = objectStore_10.createIndex('index_142', 'test', {multiEntry: true});
    var index_143 = objectStore_4.createIndex('index_143', 'test', {unique: true, multiEntry: false});
    var objectStore_22 = db.createObjectStore('objectStore_147', {keypath: 'lmFJXkbExST'});
    var index_144 = objectStore_13.createIndex('index_144', 'test', {unique: false});
    var index_145 = objectStore_8.createIndex('index_145', 'test', {multiEntry: false});
    var objectStore_23 = db.createObjectStore('objectStore_148', {autoIncrement: true});
    var index_146 = objectStore_4.createIndex('index_146', 'test');
    var objectStore_24 = db.createObjectStore('objectStore_149');
    var objectStore_25 = db.createObjectStore('objectStore_150', {keypath: 'CSyEOn'});
    var objectStore_26 = db.createObjectStore('objectStore_151');
    var index_147 = objectStore_21.createIndex('index_147', 'test');
    var objectStore_27 = db.createObjectStore('objectStore_152', {keypath: 'jbobfTW', autoIncrement: false});
    var index_148 = objectStore_2.createIndex('index_148', 'test', {multiEntry: false});
    var index_149 = objectStore_2.createIndex('index_149', 'test', {unique: false});
    var index_150 = objectStore_5.createIndex('index_150', 'test', {multiEntry: true});
    var objectStore_28 = db.createObjectStore('objectStore_153', {keypath: 'jKALXbBkdq'});
    var index_151 = objectStore_27.createIndex('index_151', 'test', {multiEntry: false});
    var objectStore_29 = db.createObjectStore('objectStore_154', {autoIncrement: true});
    var objectStore_30 = db.createObjectStore('objectStore_155', {keypath: 'BQAvsql'});
    var objectStore_31 = db.createObjectStore('objectStore_156', {keypath: 'TPSDcfYtvUz'});
    var index_152 = objectStore_0.createIndex('index_152', 'test', {multiEntry: false});
    var objectStore_32 = db.createObjectStore('objectStore_157', {keypath: 'JimDRPoSM.jIDOyLTkw'});
    var objectStore_33 = db.createObjectStore('objectStore_158');
    var index_153 = objectStore_15.createIndex('index_153', 'test', {unique: true});
    var index_154 = objectStore_6.createIndex('index_154', 'test', {multiEntry: false});
    var index_155 = objectStore_22.createIndex('index_155', 'test', {unique: true});
    var index_156 = objectStore_3.createIndex('index_156', 'test', {unique: false, multiEntry: true});
    var objectStore_34 = db.createObjectStore('objectStore_159', {autoIncrement: true});
    var objectStore_35 = db.createObjectStore('objectStore_160', {autoIncrement: false});
    var index_157 = objectStore_30.createIndex('index_157', 'test', {unique: false});
    var index_158 = objectStore_18.createIndex('index_158', 'test', {multiEntry: false});
    var objectStore_36 = db.createObjectStore('objectStore_161', {keypath: 'tsDfHRoBI', autoIncrement: false});
    var objectStore_37 = db.createObjectStore('objectStore_162', {keypath: 'WzWEhHwJPo', autoIncrement: true});
    var objectStore_38 = db.createObjectStore('objectStore_163', {keypath: 'RyOSKu'});
    var objectStore_39 = db.createObjectStore('objectStore_164', {keypath: 'bVIYgUzqMZHq'});
    var index_159 = objectStore_30.createIndex('index_159', 'test');
    var objectStore_40 = db.createObjectStore('objectStore_165', {autoIncrement: true});
    var objectStore_41 = db.createObjectStore('objectStore_166');
    var objectStore_42 = db.createObjectStore('objectStore_167', {keypath: 'zdepdZ', autoIncrement: false});
    var index_160 = objectStore_6.createIndex('index_160', 'test', {multiEntry: false});
    var index_161 = objectStore_31.createIndex('index_161', 'test');
    var objectStore_43 = db.createObjectStore('objectStore_168', {autoIncrement: true});
    var index_162 = objectStore_5.createIndex('index_162', 'test', {unique: false});
    var objectStore_44 = db.createObjectStore('objectStore_169', {autoIncrement: true});
    var objectStore_45 = db.createObjectStore('objectStore_170', {keypath: 'izWrJMfaygrc'});
    var objectStore_46 = db.createObjectStore('objectStore_171', {keypath: 'wyGwj'});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_30 = db.transaction(['objectStore_130', 'objectStore_157'], 'readonly', {durability:"strict"})
    var objectStore_157 = txn_30.objectStore('objectStore_157');
    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_31 = db.transaction(['objectStore_150', 'objectStore_157'], 'readonly', {durability:"relaxed"})
    var objectStore_150 = txn_31.objectStore('objectStore_150');
    txn_31.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_32 = db.transaction(['objectStore_159', 'objectStore_131'], 'readonly', {durability:"default"})
    var objectStore_159 = txn_32.objectStore('objectStore_159');
    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_32.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_33 = db.transaction(['objectStore_131'], 'readonly', {durability:"relaxed"})
    var objectStore_131 = txn_33.objectStore('objectStore_131');
    var index_0 = objectStore_131.index('index_154');
    txn_33.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_33.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_34 = db.transaction(['objectStore_156'], 'readonly', {durability:"strict"})
    var objectStore_156 = txn_34.objectStore('objectStore_156');
    var index_1 = objectStore_156.index('index_161');
    txn_34.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_34.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_34.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_35 = db.transaction(['objectStore_141', 'objectStore_145'], 'readwrite', {durability:"relaxed"})
    var objectStore_141 = txn_35.objectStore('objectStore_141');
    var put_0 = objectStore_141.put({f0_x: '<array>', f1_a: '<number>', f2_j: '<array>', f3_l: '<null>'}, 'MlzgpMrjPd');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('MlzgpMrjPd', 'MlzgpMrjPd', true, true);
        get_0 = objectStore_141.get(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_141.add({f0_x: '<string>', f1_a: '<array>', f2_d: '<object>', f3_d: '<object>', f4_i: '<array>', f5_r: '<number>'}, 'dmponyjI');
    var put_1 = objectStore_141.put({f0_c: '<object>', f1_t: '<array>', f2_u: '<boolean>', f3_h: '<array>', f4_y: '<array>', f5_i: '<number>', f6_u: '<null>'}, 'lLuVvvL');
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('lLuVvvL', true);
        getAllKeys_0 = objectStore_141.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('MlzgpMrjPd');
        getAllKeys_0 = objectStore_141.getAllKeys(KeyRange_3);
    }

    var clear_0 = objectStore_141.clear();
    var put_2 = objectStore_141.put({f0_y: '<boolean>', f1_t: '<array>', f2_c: '<null>', f3_j: '<object>', f4_y: '<object>', f5_o: '<number>', f6_w: '<boolean>', f7_n: '<string>'}, 'uMFghB');
    var add_1 = objectStore_141.add({f0_h: '<boolean>', f1_q: '<object>', f2_n: '<number>', f3_v: '<boolean>', f4_i: '<object>', f5_v: '<array>', f6_o: '<string>', f7_d: '<boolean>', f8_b: '<boolean>'}, 'SeI');
    var getAllKeys_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('MlzgpMrjPd', 'uMFghB', true, true);
        getAllKeys_1 = objectStore_141.getAllKeys(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('SeI');
        getAllKeys_1 = objectStore_141.getAllKeys(KeyRange_5);
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('uMFghB', 'MlzgpMrjPd', false, true);
        get_1 = objectStore_141.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_1 = objectStore_141.clear();
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('lLuVvvL', 'lLuVvvL', false, true);
        get_2 = objectStore_141.get(KeyRange_8);
    }
    catch (e){
    }

    var put_3 = objectStore_141.put({f0_e: '<null>', f1_s: '<number>', f2_m: '<number>', f3_d: '<number>', f4_n: '<boolean>', f5_p: '<number>', f6_g: '<null>', f7_k: '<boolean>'}, 'gZqJpovWoQ');
    var add_2 = objectStore_141.add({f0_y: '<null>', f1_x: '<number>', f2_x: '<string>', f3_y: '<object>', f4_b: '<number>', f5_x: '<number>', f6_e: '<array>', f7_v: '<array>'}, 'eqBopaZb');
    var put_4 = objectStore_141.put({f0_x: '<null>', f1_g: '<string>', f2_r: '<object>', f3_x: '<array>', f4_h: '<boolean>', f5_c: '<number>', f6_z: '<null>', f7_k: '<object>'}, 'XEdSSmGptD');
    var put_5 = objectStore_141.put({f0_n: '<null>', f1_j: '<object>', f2_a: '<array>'}, 'ipNcRiX');
    var put_6 = objectStore_141.put({f0_f: '<array>', f1_m: '<boolean>', f2_k: '<null>', f3_m: '<number>', f4_t: '<number>', f5_v: '<object>', f6_m: '<array>', f7_y: '<null>', f8_h: '<array>', f9_q: '<object>'}, 'evhNKaHZgeer');
    txn_35.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_35.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_35.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_36 = db.transaction(['objectStore_132'], 'readwrite', {durability:"strict"})
    var objectStore_132 = txn_36.objectStore('objectStore_132');
    var add_3 = objectStore_132.add({f0_q: '<object>', f1_e: '<null>', f2_h: '<object>', f3_e: '<boolean>', f4_r: '<string>', f5_b: '<null>', f6_v: '<string>', f7_q: '<array>', f8_s: '<boolean>', f9_r: '<object>'}, 'vqICSiy');
    var put_7 = objectStore_132.put({f0_w: '<number>'}, 'KiBqfaTOlV');
    var index_2 = objectStore_132.index('index_124');
    var add_4 = objectStore_132.add({f0_j: '<null>', f1_y: '<boolean>', f2_y: '<string>', f3_p: '<string>', f4_h: '<null>', f5_t: '<boolean>', f6_d: '<null>', f7_j: '<number>', f8_p: '<string>', f9_x: '<string>'}, 'ssbdrLuJ');
    var getAllKeys_2 = objectStore_132.getAllKeys();
    var put_8 = objectStore_132.put({f0_k: '<number>', f1_f: '<null>', f2_z: '<array>'}, 'svNdJSHp');
    var count_0 = objectStore_132.count();
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.only('vqICSiy');
        count_1 = objectStore_132.count(KeyRange_10);
    }
    catch (e){
    }

    var add_5 = objectStore_132.add({f0_q: '<string>', f1_z: '<number>', f2_t: '<object>', f3_i: '<null>', f4_r: '<boolean>', f5_w: '<object>', f6_d: '<boolean>', f7_n: '<array>', f8_w: '<object>'}, 'VaVc');
    var clear_2 = objectStore_132.clear();
    var getAll_0;
    try{
        KeyRange_12 = IDBKeyRange.only('KiBqfaTOlV');
        getAll_0 = objectStore_132.getAll(KeyRange_12, 2467418310);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('VaVc');
        getAll_0 = objectStore_132.getAll(KeyRange_13);
    }

    var add_6 = objectStore_132.add({f0_h: '<array>', f1_o: '<number>', f2_m: '<boolean>', f3_d: '<number>', f4_x: '<number>', f5_w: '<null>', f6_e: '<array>', f7_a: '<boolean>', f8_j: '<number>', f9_z: '<array>'}, 'vUauWaUwabb');
    var add_7 = objectStore_132.add({f0_h: '<boolean>', f1_e: '<number>'}, 'DJiPnVIeJD');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('DJiPnVIeJD');
        get_3 = objectStore_132.get(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_132.getAllKeys(1000951336);
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('vqICSiy', 'svNdJSHp', false, true);
        get_4 = objectStore_132.get(KeyRange_16);
    }
    catch (e){
    }

    var put_9 = objectStore_132.put({f0_z: '<array>'}, 'JApKJ');
    txn_36.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_36.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_37 = db.transaction(['objectStore_149', 'objectStore_125'], 'readonly', {durability:"default"})
    var objectStore_149 = txn_37.objectStore('objectStore_149');
    txn_37.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_37.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_37.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_38 = db.transaction(['objectStore_126'], 'readonly', {durability:"strict"})
    var objectStore_126 = txn_38.objectStore('objectStore_126');
    var index_3 = objectStore_126.index('index_137');
    var index_4 = objectStore_126.index('index_126');
    txn_38.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_38.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_38.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_39 = db.transaction(['objectStore_165', 'objectStore_128'], 'readonly', {durability:"strict"})
    var objectStore_165 = txn_39.objectStore('objectStore_165');
    txn_39.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_39.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_39.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7538')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};