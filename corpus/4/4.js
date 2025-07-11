let db;
const openRequest = window.indexedDB.open('str_2140', 1717803091269358)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_172', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_173', {keypath: 'kHZCDVrB', autoIncrement: false});
    var index_163 = objectStore_0.createIndex('index_163', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_174', {autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_175');
    var objectStore_4 = db.createObjectStore('objectStore_176', {keypath: 'LpL', autoIncrement: false});
    var objectStore_5 = db.createObjectStore('objectStore_177', {autoIncrement: false});
    var index_164 = objectStore_0.createIndex('index_164', 'test');
    var index_165 = objectStore_0.createIndex('index_165', 'test', {unique: true});
    var objectStore_6 = db.createObjectStore('objectStore_178', {autoIncrement: true});
    var index_166 = objectStore_5.createIndex('index_166', 'test', {unique: true, multiEntry: true});
    var index_167 = objectStore_4.createIndex('index_167', 'test', {unique: true});
    var objectStore_7 = db.createObjectStore('objectStore_179', {keypath: 'lmUbB'});
    var index_168 = objectStore_7.createIndex('index_168', 'test');
    var objectStore_8 = db.createObjectStore('objectStore_180', {keypath: 'jfUIK'});
    var index_169 = objectStore_3.createIndex('index_169', 'test', {unique: true});
    var objectStore_9 = db.createObjectStore('objectStore_181', {autoIncrement: true});
    var objectStore_10 = db.createObjectStore('objectStore_182', {keypath: 'rIDrDDzTH.uiUsbvkAykV.fENm.RFoAGtSl.ZbbNYllv.rFvYUYAmvLR.bwSLTNfu', autoIncrement: true});
    var objectStore_11 = db.createObjectStore('objectStore_183', {keypath: 'UgRdsQBt'});
    var index_170 = objectStore_9.createIndex('index_170', 'test', {unique: true});
    var objectStore_12 = db.createObjectStore('objectStore_184', {autoIncrement: false});
    var objectStore_13 = db.createObjectStore('objectStore_185');
    var index_171 = objectStore_6.createIndex('index_171', 'test', {unique: true, multiEntry: true});
    var index_172 = objectStore_13.createIndex('index_172', 'test', {multiEntry: true});
    var objectStore_14 = db.createObjectStore('objectStore_186');
    var objectStore_15 = db.createObjectStore('objectStore_187', {autoIncrement: true});
    var index_173 = objectStore_9.createIndex('index_173', 'test', {multiEntry: true});
    var objectStore_16 = db.createObjectStore('objectStore_188', {keypath: 'dhfzAJKgP', autoIncrement: false});
    var objectStore_17 = db.createObjectStore('objectStore_189');
    var objectStore_18 = db.createObjectStore('objectStore_190', {autoIncrement: false});
    var index_174 = objectStore_16.createIndex('index_174', 'test', {unique: false});
    var objectStore_19 = db.createObjectStore('objectStore_191', {keypath: 'cORSz'});
    var objectStore_20 = db.createObjectStore('objectStore_192', {keypath: 'LYpFZP'});
    var index_175 = objectStore_13.createIndex('index_175', 'test', {multiEntry: true});
    var index_176 = objectStore_10.createIndex('index_176', 'test', {multiEntry: false});
    var index_177 = objectStore_9.createIndex('index_177', 'test', {unique: false, multiEntry: true});
    var index_178 = objectStore_4.createIndex('index_178', 'test', {multiEntry: true});
    var objectStore_21 = db.createObjectStore('objectStore_193');
    var objectStore_22 = db.createObjectStore('objectStore_194');
    var index_179 = objectStore_8.createIndex('index_179', 'test');
    var objectStore_23 = db.createObjectStore('objectStore_195', {autoIncrement: true});
    var objectStore_24 = db.createObjectStore('objectStore_196', {keypath: 'FEBpRt.csDrrTi.diQxAEB.FPgFbOPmX.WLxYmLThYX.Uke.YscMYxSUv.fBTMPs', autoIncrement: false});
    var index_180 = objectStore_14.createIndex('index_180', 'test');
    var objectStore_25 = db.createObjectStore('objectStore_197', {keypath: 'dLbp', autoIncrement: true});
    var objectStore_26 = db.createObjectStore('objectStore_198', {autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_199', {autoIncrement: true});
    var index_181 = objectStore_12.createIndex('index_181', 'test', {unique: false});
    var objectStore_28 = db.createObjectStore('objectStore_200', {keypath: 'gIkUpNhOf'});
    var index_182 = objectStore_7.createIndex('index_182', 'test', {unique: true});
    var objectStore_29 = db.createObjectStore('objectStore_201', {keypath: 'uqN.lApz.ASuPBt.cyZQKoIThTmL.ZKvp.tOhBYnUVmo.xfnyw.HTqbUuKDfAd.cSYggGivgGzU'});
    var index_183 = objectStore_15.createIndex('index_183', 'test', {unique: false, multiEntry: false});
    var index_184 = objectStore_21.createIndex('index_184', 'test', {unique: true, multiEntry: true});
    var index_185 = objectStore_12.createIndex('index_185', 'test', {unique: true});
    var objectStore_30 = db.createObjectStore('objectStore_202');
    var objectStore_31 = db.createObjectStore('objectStore_203');
    var objectStore_32 = db.createObjectStore('objectStore_204', {keypath: 'fMRqH'});
    var objectStore_33 = db.createObjectStore('objectStore_205', {autoIncrement: true});
    var objectStore_34 = db.createObjectStore('objectStore_206', {autoIncrement: true});
    var index_186 = objectStore_13.createIndex('index_186', 'test', {unique: false});
    var objectStore_35 = db.createObjectStore('objectStore_207');
    var objectStore_36 = db.createObjectStore('objectStore_208');
    var objectStore_37 = db.createObjectStore('objectStore_209', {keypath: 'PRPhPPu', autoIncrement: true});
    var objectStore_38 = db.createObjectStore('objectStore_210', {keypath: 'DkSeNAoRsKWV', autoIncrement: true});
    var objectStore_39 = db.createObjectStore('objectStore_211');
    var objectStore_40 = db.createObjectStore('objectStore_212');
    var objectStore_41 = db.createObjectStore('objectStore_213');
    var index_187 = objectStore_24.createIndex('index_187', 'test', {multiEntry: true});
    var index_188 = objectStore_12.createIndex('index_188', 'test');
    var objectStore_42 = db.createObjectStore('objectStore_214', {keypath: 'USX'});
    var index_189 = objectStore_38.createIndex('index_189', 'test');
    var index_190 = objectStore_17.createIndex('index_190', 'test');
    var objectStore_43 = db.createObjectStore('objectStore_215');
    var objectStore_44 = db.createObjectStore('objectStore_216', {keypath: 'AXxblgy', autoIncrement: true});
    var index_191 = objectStore_5.createIndex('index_191', 'test', {multiEntry: true});
    var objectStore_45 = db.createObjectStore('objectStore_217');
    var objectStore_46 = db.createObjectStore('objectStore_218', {autoIncrement: true});
    var index_192 = objectStore_40.createIndex('index_192', 'test');
    var objectStore_47 = db.createObjectStore('objectStore_219', {keypath: 'apJLgNiytF'});
    var objectStore_48 = db.createObjectStore('objectStore_220', {keypath: 'UtMSgodsnam', autoIncrement: false});
    var index_193 = objectStore_47.createIndex('index_193', 'test', {unique: false});
    var index_194 = objectStore_45.createIndex('index_194', 'test');
    var objectStore_49 = db.createObjectStore('objectStore_221', {keypath: 'VunEDV'});
    var index_195 = objectStore_27.createIndex('index_195', 'test');
    var objectStore_50 = db.createObjectStore('objectStore_222');
    var objectStore_51 = db.createObjectStore('objectStore_223', {keypath: 'CxAtBNbhIH.jrcWYpfQVr.kIrmBslK.uHDfl.UBizxf.NEknMoh.VQipZOFurtZ'});
    var objectStore_52 = db.createObjectStore('objectStore_224', {keypath: 'SXk'});
    var objectStore_53 = db.createObjectStore('objectStore_225');
    var index_196 = objectStore_4.createIndex('index_196', 'test', {unique: true});
    var objectStore_54 = db.createObjectStore('objectStore_226', {autoIncrement: false});
    var objectStore_55 = db.createObjectStore('objectStore_227', {keypath: 'pYSZrkw'});
    var index_197 = objectStore_44.createIndex('index_197', 'test', {unique: true});
    var objectStore_56 = db.createObjectStore('objectStore_228', {autoIncrement: true});
    var index_198 = objectStore_13.createIndex('index_198', 'test', {unique: true});
    var index_199 = objectStore_42.createIndex('index_199', 'test', {unique: true});
    var objectStore_57 = db.createObjectStore('objectStore_229');
    var objectStore_58 = db.createObjectStore('objectStore_230');
    var index_200 = objectStore_31.createIndex('index_200', 'test', {multiEntry: false});
    var objectStore_59 = db.createObjectStore('objectStore_231', {keypath: 'vaqGzrpEPjN'});
    var index_201 = objectStore_27.createIndex('index_201', 'test', {unique: false, multiEntry: false});
    var index_202 = objectStore_46.createIndex('index_202', 'test');
    var index_203 = objectStore_14.createIndex('index_203', 'test', {multiEntry: false});
    var objectStore_60 = db.createObjectStore('objectStore_232', {keypath: 'vENDgFSmfj.frttAufu.YApVYkbNuRk.abkPAHQzAMQt.VaHSgLV.CtynyNJviU.NLeBaAykYR.HIOkWAPm.nhTRP.qWukkaduRcN', autoIncrement: true});
    var objectStore_61 = db.createObjectStore('objectStore_233', {keypath: 'VaElPpxxVY', autoIncrement: true});
    var index_204 = objectStore_25.createIndex('index_204', 'test');
    var objectStore_62 = db.createObjectStore('objectStore_234', {keypath: 'KgIzOoVeYJ'});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_40 = db.transaction(['objectStore_174', 'objectStore_183'], 'readonly', {durability:"relaxed"})
    var objectStore_174 = txn_40.objectStore('objectStore_174');
    txn_40.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_40.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_40.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_41 = db.transaction(['objectStore_178'], 'readwrite', {durability:"relaxed"})
    var objectStore_178 = txn_41.objectStore('objectStore_178');
    var clear_0 = objectStore_178.clear();
    var clear_1 = objectStore_178.clear();
    var put_0 = objectStore_178.put({f0_t: '<array>', f1_x: '<number>', f2_n: '<array>', f3_e: '<string>', f4_g: '<number>', f5_n: '<object>', f6_u: '<boolean>'}, 'yvmqoEzBh');
    var add_0 = objectStore_178.add({f0_x: '<number>', f1_c: '<number>', f2_h: '<null>', f3_k: '<boolean>', f4_i: '<boolean>'}, 'xRFz');
    var put_1 = objectStore_178.put({f0_l: '<array>', f1_v: '<string>', f2_n: '<null>'}, 'vcPbKvJTwlCX');
    var add_1 = objectStore_178.add({f0_j: '<null>', f1_w: '<object>', f2_l: '<string>', f3_y: '<object>', f4_a: '<number>', f5_f: '<string>', f6_h: '<number>', f7_s: '<null>', f8_a: '<boolean>', f9_m: '<string>'}, 'HBqBY');
    var put_2 = objectStore_178.put({f0_x: '<null>', f1_y: '<string>'}, 'HsbghRCeRsI');
    var put_3 = objectStore_178.put({f0_j: '<string>', f1_b: '<array>', f2_h: '<null>', f3_o: '<boolean>'}, 'tMvNGUtjHQX');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('yvmqoEzBh', false);
        get_0 = objectStore_178.get(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('HsbghRCeRsI', 'HsbghRCeRsI', false, false);
        getAllKeys_0 = objectStore_178.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('xRFz');
        getAllKeys_0 = objectStore_178.getAllKeys(KeyRange_3);
    }

    var index_0 = objectStore_178.index('index_171');
    var getAllKeys_1 = objectStore_178.getAllKeys(1870846119);
    var put_4 = objectStore_178.put({f0_v: '<array>', f1_t: '<array>', f2_o: '<number>', f3_t: '<string>', f4_e: '<null>', f5_c: '<object>'}, 'HAjHzLn');
    var put_5 = objectStore_178.put({f0_j: '<null>', f1_k: '<number>', f2_s: '<number>', f3_f: '<null>', f4_h: '<number>', f5_v: '<array>', f6_y: '<null>', f7_k: '<string>', f8_k: '<null>', f9_o: '<object>'}, 'URPQe');
    var index_1 = objectStore_178.index('index_171');
    var clear_2 = objectStore_178.clear();
    var add_2 = objectStore_178.add({f0_u: '<number>', f1_c: '<null>', f2_c: '<string>', f3_r: '<object>', f4_x: '<object>', f5_v: '<object>', f6_x: '<array>', f7_u: '<null>', f8_f: '<array>', f9_g: '<boolean>'}, 'iENxbp');
    var clear_3 = objectStore_178.clear();
    var count_0 = objectStore_178.count();
    txn_41.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_41.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_41.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_42 = db.transaction(['objectStore_198', 'objectStore_218', 'objectStore_212', 'objectStore_209'], 'readwrite', {durability:"relaxed"})
    var objectStore_218 = txn_42.objectStore('objectStore_218');
    var put_6 = objectStore_218.put({f0_d: '<null>', f1_r: '<null>', f2_j: '<null>', f3_v: '<null>', f4_r: '<string>'}, 'uNvOVY');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('uNvOVY', false);
        get_1 = objectStore_218.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_4 = objectStore_218.clear();
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('uNvOVY', 'uNvOVY', true, true);
        get_2 = objectStore_218.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_5 = objectStore_218.clear();
    var getAll_0 = objectStore_218.getAll(779127229);
    var add_3 = objectStore_218.add({f0_r: '<array>', f1_t: '<null>', f2_y: '<string>', f3_s: '<number>'}, 'alwN');
    var add_4 = objectStore_218.add({f0_u: '<boolean>', f1_n: '<null>', f2_d: '<null>', f3_z: '<null>'}, 'EFpfGj');
    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.only('alwN');
        get_3 = objectStore_218.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_218.getAllKeys();
    var clear_6 = objectStore_218.clear();
    var getAll_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('EFpfGj', false);
        getAll_1 = objectStore_218.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('uNvOVY');
        getAll_1 = objectStore_218.getAll(KeyRange_11);
    }

    var add_5 = objectStore_218.add({f0_o: '<number>', f1_u: '<object>', f2_a: '<object>', f3_c: '<null>', f4_z: '<array>', f5_w: '<string>', f6_s: '<null>', f7_x: '<object>', f8_m: '<number>'}, 'XqMwUTyu');
    txn_42.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_42.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_42.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_43 = db.transaction(['objectStore_211', 'objectStore_212', 'objectStore_223', 'objectStore_185', 'objectStore_220'], 'readonly', {durability:"strict"})
    var objectStore_223 = txn_43.objectStore('objectStore_223');
    txn_43.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_43.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_43.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_44 = db.transaction(['objectStore_182'], 'readonly', {durability:"relaxed"})
    var objectStore_182 = txn_44.objectStore('objectStore_182');
    var index_2 = objectStore_182.index('index_176');
    var index_3 = objectStore_182.index('index_176');
    var index_4 = objectStore_182.index('index_176');
    txn_44.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_44.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_44.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_45 = db.transaction(['objectStore_177'], 'readonly', {durability:"relaxed"})
    var objectStore_177 = txn_45.objectStore('objectStore_177');
    var index_5 = objectStore_177.index('index_191');
    txn_45.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_45.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_45.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_46 = db.transaction(['objectStore_185'], 'readonly', {durability:"default"})
    var objectStore_185 = txn_46.objectStore('objectStore_185');
    var index_6 = objectStore_185.index('index_175');
    var index_7 = objectStore_185.index('index_175');
    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_46.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_47 = db.transaction(['objectStore_186', 'objectStore_221'], 'readonly', {durability:"strict"})
    var objectStore_186 = txn_47.objectStore('objectStore_186');
    var index_8 = objectStore_186.index('index_180');
    var index_9 = objectStore_186.index('index_180');
    var index_10 = objectStore_186.index('index_203');
    txn_47.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_47.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_47.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_48 = db.transaction(['objectStore_211'], 'readonly', {durability:"default"})
    var objectStore_211 = txn_48.objectStore('objectStore_211');
    txn_48.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_48.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_48.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_49 = db.transaction(['objectStore_189'], 'readonly', {durability:"strict"})
    var objectStore_189 = txn_49.objectStore('objectStore_189');
    var index_11 = objectStore_189.index('index_190');
    txn_49.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_49.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_49.onerror = (event) => {
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