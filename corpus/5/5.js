let db;
const openRequest = window.indexedDB.open('str_9979', 7368918993712187)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_235', {keypath: 'FXHHSO'});
    var objectStore_1 = db.createObjectStore('objectStore_236', {autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_237');
    var index_205 = objectStore_2.createIndex('index_205', 'test');
    var index_206 = objectStore_2.createIndex('index_206', 'test', {unique: false});
    var objectStore_3 = db.createObjectStore('objectStore_238', {keypath: 'SvQdkBMdx'});
    var objectStore_4 = db.createObjectStore('objectStore_239', {keypath: 'MUbUdAw'});
    var objectStore_5 = db.createObjectStore('objectStore_240', {autoIncrement: true});
    var index_207 = objectStore_5.createIndex('index_207', 'test', {unique: false});
    var index_208 = objectStore_2.createIndex('index_208', 'test', {unique: true});
    var objectStore_6 = db.createObjectStore('objectStore_241', {autoIncrement: false});
    var index_209 = objectStore_2.createIndex('index_209', 'test');
    var index_210 = objectStore_4.createIndex('index_210', 'test', {unique: false, multiEntry: false});
    var objectStore_7 = db.createObjectStore('objectStore_242', {keypath: 'vBJOX.NzHxJugnMY.qjvKmtMyAqLb.GipGttkhjW.FbAnXZLetzF'});
    var index_211 = objectStore_2.createIndex('index_211', 'test', {unique: false});
    var objectStore_8 = db.createObjectStore('objectStore_243');
    var objectStore_9 = db.createObjectStore('objectStore_244');
    var objectStore_10 = db.createObjectStore('objectStore_245', {autoIncrement: false});
    var index_212 = objectStore_10.createIndex('index_212', 'test');
    var objectStore_11 = db.createObjectStore('objectStore_246');
    var objectStore_12 = db.createObjectStore('objectStore_247', {keypath: 'EqaYIYLvJqeR'});
    var index_213 = objectStore_6.createIndex('index_213', 'test', {multiEntry: false});
    var index_214 = objectStore_8.createIndex('index_214', 'test', {unique: true, multiEntry: false});
    var index_215 = objectStore_3.createIndex('index_215', 'test', {unique: true});
    var index_216 = objectStore_5.createIndex('index_216', 'test');
    var index_217 = objectStore_4.createIndex('index_217', 'test', {unique: true, multiEntry: false});
    var index_218 = objectStore_12.createIndex('index_218', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_248', {autoIncrement: false});
    var index_219 = objectStore_12.createIndex('index_219', 'test', {unique: false});
    var objectStore_14 = db.createObjectStore('objectStore_249', {keypath: 'LUlrXvHi', autoIncrement: false});
    var objectStore_15 = db.createObjectStore('objectStore_250', {keypath: 'qcWV', autoIncrement: true});
    var index_220 = objectStore_9.createIndex('index_220', 'test', {unique: true});
    var index_221 = objectStore_11.createIndex('index_221', 'test');
    var index_222 = objectStore_11.createIndex('index_222', 'test');
    var objectStore_16 = db.createObjectStore('objectStore_251', {keypath: 'SszNPnFgmwSH'});
    var objectStore_17 = db.createObjectStore('objectStore_252', {keypath: 'vVUnc', autoIncrement: false});
    var objectStore_18 = db.createObjectStore('objectStore_253');
    var objectStore_19 = db.createObjectStore('objectStore_254', {keypath: 'HFYMqWss.xaTumoIWeJW.oCrOyouo.uwJWMFekmmuV.MqClocIQ.ikGjkXwyuez.oWYNeXOFYq.gOIDQlrJDj.DTUOspWShcC'});
    var index_223 = objectStore_10.createIndex('index_223', 'test', {unique: false, multiEntry: true});
    var objectStore_20 = db.createObjectStore('objectStore_255', {keypath: 'AvmvZWlndkt.EBbcYt.seZJrmLIMxiF.MBwKUNWlu'});
    var index_224 = objectStore_7.createIndex('index_224', 'test');
    var objectStore_21 = db.createObjectStore('objectStore_256');
    var index_225 = objectStore_18.createIndex('index_225', 'test', {multiEntry: false});
    var index_226 = objectStore_21.createIndex('index_226', 'test', {unique: true});
    var objectStore_22 = db.createObjectStore('objectStore_257');
    var objectStore_23 = db.createObjectStore('objectStore_258');
    var index_227 = objectStore_3.createIndex('index_227', 'test', {unique: true});
    var index_228 = objectStore_5.createIndex('index_228', 'test', {unique: false});
    var objectStore_24 = db.createObjectStore('objectStore_259', {autoIncrement: true});
    var objectStore_25 = db.createObjectStore('objectStore_260', {autoIncrement: false});
    var index_229 = objectStore_24.createIndex('index_229', 'test', {unique: true});
    var objectStore_26 = db.createObjectStore('objectStore_261', {keypath: 'WSX', autoIncrement: false});
    var index_230 = objectStore_4.createIndex('index_230', 'test', {unique: true});
    var objectStore_27 = db.createObjectStore('objectStore_262', {keypath: 'SyCEZuNG.WeBC.UVAuEtIv.vDSRVPpLxeHy.fRQbTSWzp', autoIncrement: true});
    var objectStore_28 = db.createObjectStore('objectStore_263', {keypath: 'YVbt', autoIncrement: false});
    var index_231 = objectStore_6.createIndex('index_231', 'test', {unique: true, multiEntry: true});
    var objectStore_29 = db.createObjectStore('objectStore_264', {keypath: 'Sog', autoIncrement: true});
    var index_232 = objectStore_12.createIndex('index_232', 'test');
    var objectStore_30 = db.createObjectStore('objectStore_265');
    var objectStore_31 = db.createObjectStore('objectStore_266', {autoIncrement: true});
    var index_233 = objectStore_26.createIndex('index_233', 'test', {unique: false});
    var index_234 = objectStore_8.createIndex('index_234', 'test', {multiEntry: false});
    var objectStore_32 = db.createObjectStore('objectStore_267', {keypath: 'VlFL', autoIncrement: false});
    var index_235 = objectStore_13.createIndex('index_235', 'test', {unique: false, multiEntry: true});
    var index_236 = objectStore_27.createIndex('index_236', 'test', {multiEntry: true});
    var index_237 = objectStore_4.createIndex('index_237', 'test', {unique: true, multiEntry: true});
    var index_238 = objectStore_31.createIndex('index_238', 'test', {unique: true});
    var index_239 = objectStore_32.createIndex('index_239', 'test', {unique: false});
    var objectStore_33 = db.createObjectStore('objectStore_268', {keypath: 'iFV', autoIncrement: true});
    var objectStore_34 = db.createObjectStore('objectStore_269');
    var objectStore_35 = db.createObjectStore('objectStore_270');
    var objectStore_36 = db.createObjectStore('objectStore_271');
    var objectStore_37 = db.createObjectStore('objectStore_272');
    var index_240 = objectStore_28.createIndex('index_240', 'test', {unique: true});
    var objectStore_38 = db.createObjectStore('objectStore_273');
    var index_241 = objectStore_35.createIndex('index_241', 'test', {multiEntry: false});
    var index_242 = objectStore_34.createIndex('index_242', 'test', {unique: true});
    var objectStore_39 = db.createObjectStore('objectStore_274', {keypath: 'SiyqxMUIiuwD'});
    var objectStore_40 = db.createObjectStore('objectStore_275', {keypath: 'OePThksb'});
    var index_243 = objectStore_34.createIndex('index_243', 'test');
    var objectStore_41 = db.createObjectStore('objectStore_276', {keypath: 'Sdd', autoIncrement: false});
    var index_244 = objectStore_31.createIndex('index_244', 'test', {unique: false, multiEntry: false});
    var objectStore_42 = db.createObjectStore('objectStore_277', {keypath: 'axsrBpJefAl.MSlJFBncG.sCyGGlI.lhmmy.KiSdb.JUPm.YOgtLa.YEuIUOhIWp', autoIncrement: true});
    var objectStore_43 = db.createObjectStore('objectStore_278', {keypath: 'jBHrAiW', autoIncrement: true});
    var objectStore_44 = db.createObjectStore('objectStore_279', {autoIncrement: false});
    var index_245 = objectStore_29.createIndex('index_245', 'test', {unique: true, multiEntry: true});
    var objectStore_45 = db.createObjectStore('objectStore_280', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_50 = db.transaction(['objectStore_272'], 'readwrite', {durability:"default"})
    var objectStore_272 = txn_50.objectStore('objectStore_272');
    var clear_0 = objectStore_272.clear();
    var clear_1 = objectStore_272.clear();
    var put_0 = objectStore_272.put({f0_l: '<boolean>'}, 'LdORtE');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('LdORtE', 'LdORtE', true, true);
        count_0 = objectStore_272.count(KeyRange_0);
    }
    catch (e){
    }

    var clear_2 = objectStore_272.clear();
    var add_0 = objectStore_272.add({f0_e: '<string>', f1_r: '<object>', f2_n: '<null>', f3_n: '<number>', f4_v: '<null>', f5_e: '<string>', f6_q: '<boolean>', f7_q: '<object>', f8_x: '<string>', f9_j: '<number>'}, 'pkO');
    var count_1 = objectStore_272.count();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('pkO', 'LdORtE', true, true);
        getAllKeys_0 = objectStore_272.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('LdORtE');
        getAllKeys_0 = objectStore_272.getAllKeys(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('pkO');
        get_0 = objectStore_272.get(KeyRange_4);
    }
    catch (e){
    }

    var put_1 = objectStore_272.put({f0_t: '<number>', f1_f: '<object>'}, 'bMH');
    txn_50.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_50.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_50.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_51 = db.transaction(['objectStore_247', 'objectStore_257', 'objectStore_246'], 'readwrite', {durability:"relaxed"})
    var objectStore_257 = txn_51.objectStore('objectStore_257');
    var add_1 = objectStore_257.add({f0_a: '<object>', f1_s: '<array>', f2_f: '<null>'}, 'gMK');
    var getAll_0 = objectStore_257.getAll();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('gMK');
        get_1 = objectStore_257.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_1 = objectStore_257.getAll();
    var put_2 = objectStore_257.put({f0_c: '<null>', f1_s: '<boolean>'}, 'CDgm');
    var clear_3 = objectStore_257.clear();
    var getAll_2 = objectStore_257.getAll(1262761047);
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('CDgm', true);
        get_2 = objectStore_257.get(KeyRange_8);
    }
    catch (e){
    }

    var clear_4 = objectStore_257.clear();
    var count_2 = objectStore_257.count();
    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('gMK', 'gMK', false, true);
        count_3 = objectStore_257.count(KeyRange_10);
    }
    catch (e){
    }

    var clear_5 = objectStore_257.clear();
    var clear_6 = objectStore_257.clear();
    var clear_7 = objectStore_257.clear();
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('gMK', true);
        get_3 = objectStore_257.get(KeyRange_12);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.only('CDgm');
        get_4 = objectStore_257.get(KeyRange_14);
    }
    catch (e){
    }

    var put_3 = objectStore_257.put({f0_g: '<boolean>', f1_k: '<array>', f2_p: '<number>', f3_i: '<null>', f4_m: '<boolean>', f5_v: '<array>', f6_c: '<number>', f7_c: '<null>', f8_r: '<null>'}, 'pEwLORVosX');
    var clear_8 = objectStore_257.clear();
    txn_51.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_51.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_51.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_52 = db.transaction(['objectStore_246', 'objectStore_243', 'objectStore_280'], 'readwrite', {durability:"strict"})
    var objectStore_246 = txn_52.objectStore('objectStore_246');
    var add_2 = objectStore_246.add({f0_f: '<array>', f1_l: '<number>', f2_k: '<string>', f3_r: '<array>', f4_b: '<object>', f5_o: '<number>', f6_f: '<string>', f7_k: '<array>', f8_c: '<object>', f9_u: '<array>'}, 'ESkUK');
    var count_4 = objectStore_246.count();
    var count_5;
    try{
        KeyRange_16 = IDBKeyRange.only('ESkUK');
        count_5 = objectStore_246.count(KeyRange_16);
    }
    catch (e){
    }

    var add_3 = objectStore_246.add({f0_p: '<number>', f1_f: '<object>'}, 'lbToMwG');
    var put_4 = objectStore_246.put({f0_p: '<null>', f1_z: '<array>', f2_o: '<string>', f3_n: '<number>', f4_m: '<number>', f5_d: '<boolean>'}, 'EbQHMhIyPsD');
    var getAll_3 = objectStore_246.getAll(3393694212);
    var getAllKeys_1 = objectStore_246.getAllKeys(1520763528);
    var clear_9 = objectStore_246.clear();
    var count_6 = objectStore_246.count();
    var getAll_4 = objectStore_246.getAll();
    var getAll_5;
    try{
        KeyRange_18 = IDBKeyRange.only('EbQHMhIyPsD');
        getAll_5 = objectStore_246.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('lbToMwG');
        getAll_5 = objectStore_246.getAll(KeyRange_19);
    }

    var add_4 = objectStore_246.add({f0_d: '<boolean>', f1_b: '<object>', f2_f: '<boolean>', f3_y: '<number>', f4_l: '<boolean>'}, 'Aaf');
    var count_7 = objectStore_246.count();
    var put_5 = objectStore_246.put({f0_s: '<object>', f1_o: '<number>', f2_m: '<object>', f3_c: '<number>'}, 'dPZjdIVRPLXj');
    txn_52.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_52.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_52.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_53 = db.transaction(['objectStore_245', 'objectStore_272', 'objectStore_253'], 'readonly', {durability:"relaxed"})
    var objectStore_245 = txn_53.objectStore('objectStore_245');
    var index_0 = objectStore_245.index('index_212');
    var index_1 = objectStore_245.index('index_223');
    txn_53.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_53.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_53.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_54 = db.transaction(['objectStore_266'], 'readonly', {durability:"relaxed"})
    var objectStore_266 = txn_54.objectStore('objectStore_266');
    var index_2 = objectStore_266.index('index_238');
    var index_3 = objectStore_266.index('index_238');
    txn_54.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_54.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_54.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_55 = db.transaction(['objectStore_257', 'objectStore_265', 'objectStore_258'], 'readonly', {durability:"default"})
    var objectStore_257 = txn_55.objectStore('objectStore_257');
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('pEwLORVosX', false);
        get_5 = objectStore_257.get(KeyRange_20);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('CDgm', true);
        count_8 = objectStore_257.count(KeyRange_22);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('gMK', true);
        count_9 = objectStore_257.count(KeyRange_24);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('CDgm', false);
        count_10 = objectStore_257.count(KeyRange_26);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('gMK', true);
        count_11 = objectStore_257.count(KeyRange_28);
    }
    catch (e){
    }

    var count_12 = objectStore_257.count();
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.bound('CDgm', 'CDgm', true, false);
        get_6 = objectStore_257.get(KeyRange_30);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('CDgm', false);
        getAll_6 = objectStore_257.getAll(KeyRange_32, 2519772326);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('pEwLORVosX');
        getAll_6 = objectStore_257.getAll(KeyRange_33);
    }

    var get_7;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('pEwLORVosX', false);
        get_7 = objectStore_257.get(KeyRange_34);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('gMK', 'pEwLORVosX', false, false);
        get_8 = objectStore_257.get(KeyRange_36);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_38 = IDBKeyRange.bound('CDgm', 'CDgm', false, true);
        getAll_7 = objectStore_257.getAll(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('gMK');
        getAll_7 = objectStore_257.getAll(KeyRange_39);
    }

    var get_9;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('pEwLORVosX', false);
        get_9 = objectStore_257.get(KeyRange_40);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_42 = IDBKeyRange.bound('pEwLORVosX', 'gMK', true, false);
        get_10 = objectStore_257.get(KeyRange_42);
    }
    catch (e){
    }

    var getAll_8 = objectStore_257.getAll();
    var get_11;
    try{
        KeyRange_44 = IDBKeyRange.bound('pEwLORVosX', 'gMK', true, false);
        get_11 = objectStore_257.get(KeyRange_44);
    }
    catch (e){
    }

    var getAll_9 = objectStore_257.getAll(3356071642);
    var count_13 = objectStore_257.count();
    var getAll_10 = objectStore_257.getAll(198144613);
    var count_14 = objectStore_257.count();
    var getAllKeys_2;
    try{
        KeyRange_46 = IDBKeyRange.bound('CDgm', 'CDgm', false, true);
        getAllKeys_2 = objectStore_257.getAllKeys(KeyRange_46, 3452687406);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('gMK');
        getAllKeys_2 = objectStore_257.getAllKeys(KeyRange_47);
    }

    txn_55.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_55.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_55.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_56 = db.transaction(['objectStore_237'], 'readwrite', {durability:"strict"})
    var objectStore_237 = txn_56.objectStore('objectStore_237');
    var put_6 = objectStore_237.put({f0_u: '<number>', f1_g: '<string>', f2_h: '<object>', f3_y: '<object>', f4_d: '<boolean>', f5_p: '<number>', f6_y: '<object>'}, 'MuMQannewYt');
    var getAll_11 = objectStore_237.getAll(1485188725);
    var get_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('MuMQannewYt', 'MuMQannewYt', false, false);
        get_12 = objectStore_237.get(KeyRange_48);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_50 = IDBKeyRange.bound('MuMQannewYt', 'MuMQannewYt', false, false);
        get_13 = objectStore_237.get(KeyRange_50);
    }
    catch (e){
    }

    var count_15 = objectStore_237.count();
    var getAll_12 = objectStore_237.getAll(3756760421);
    var getAll_13 = objectStore_237.getAll(2958244827);
    var add_5 = objectStore_237.add({f0_l: '<boolean>', f1_f: '<boolean>', f2_g: '<array>', f3_t: '<object>', f4_z: '<array>', f5_z: '<array>', f6_h: '<number>', f7_x: '<string>', f8_e: '<array>', f9_y: '<null>'}, 'gSt');
    var add_6 = objectStore_237.add({f0_r: '<boolean>'}, 'ansfV');
    var get_14;
    try{
        KeyRange_52 = IDBKeyRange.bound('MuMQannewYt', 'MuMQannewYt', true, false);
        get_14 = objectStore_237.get(KeyRange_52);
    }
    catch (e){
    }

    var index_4 = objectStore_237.index('index_206');
    var add_7 = objectStore_237.add({f0_a: '<number>', f1_l: '<null>', f2_e: '<null>', f3_v: '<null>', f4_j: '<boolean>', f5_l: '<string>', f6_x: '<array>', f7_n: '<string>'}, 'UMQTK');
    var get_15;
    try{
        KeyRange_54 = IDBKeyRange.bound('ansfV', 'MuMQannewYt', false, true);
        get_15 = objectStore_237.get(KeyRange_54);
    }
    catch (e){
    }

    var add_8 = objectStore_237.add({f0_c: '<number>', f1_a: '<array>', f2_j: '<string>', f3_s: '<boolean>', f4_r: '<array>', f5_m: '<boolean>', f6_u: '<null>', f7_d: '<null>', f8_y: '<string>', f9_w: '<object>'}, 'mLGLEl');
    var getAll_14;
    try{
        KeyRange_56 = IDBKeyRange.only('mLGLEl');
        getAll_14 = objectStore_237.getAll(KeyRange_56);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('mLGLEl');
        getAll_14 = objectStore_237.getAll(KeyRange_57);
    }

    var get_16;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('UMQTK', false);
        get_16 = objectStore_237.get(KeyRange_58);
    }
    catch (e){
    }

    var put_7 = objectStore_237.put({f0_p: '<null>'}, 'RyKSmo');
    var count_16;
    try{
        KeyRange_60 = IDBKeyRange.bound('MuMQannewYt', 'UMQTK', true, false);
        count_16 = objectStore_237.count(KeyRange_60);
    }
    catch (e){
    }

    txn_56.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_56.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_56.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_57 = db.transaction(['objectStore_237', 'objectStore_276', 'objectStore_258', 'objectStore_240'], 'readwrite', {durability:"relaxed"})
    var objectStore_258 = txn_57.objectStore('objectStore_258');
    var clear_10 = objectStore_258.clear();
    var add_9 = objectStore_258.add({f0_q: '<string>', f1_c: '<null>', f2_a: '<number>', f3_t: '<null>'}, 'jGrnsCNBXnvv');
    var clear_11 = objectStore_258.clear();
    var get_17;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('jGrnsCNBXnvv', true);
        get_17 = objectStore_258.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_12 = objectStore_258.clear();
    var add_10 = objectStore_258.add({f0_t: '<string>', f1_s: '<number>', f2_n: '<null>', f3_d: '<array>', f4_v: '<array>'}, 'gfpqGwcqbuiX');
    var add_11 = objectStore_258.add({f0_m: '<array>', f1_c: '<null>', f2_b: '<boolean>', f3_u: '<null>', f4_z: '<null>', f5_p: '<object>', f6_y: '<boolean>', f7_f: '<null>', f8_i: '<null>', f9_r: '<null>'}, 'YZlxFRYLlHF');
    var clear_13 = objectStore_258.clear();
    var add_12 = objectStore_258.add({f0_w: '<number>', f1_y: '<null>'}, 'MwtVjTv');
    var get_18;
    try{
        KeyRange_64 = IDBKeyRange.only('gfpqGwcqbuiX');
        get_18 = objectStore_258.get(KeyRange_64);
    }
    catch (e){
    }

    var put_8 = objectStore_258.put({f0_x: '<null>', f1_r: '<boolean>', f2_n: '<string>', f3_k: '<number>', f4_g: '<object>', f5_n: '<string>', f6_u: '<string>', f7_i: '<array>'}, 'MIGPeE');
    var clear_14 = objectStore_258.clear();
    var delete_0;
    try{
        KeyRange_66 = IDBKeyRange.bound('gfpqGwcqbuiX', 'YZlxFRYLlHF', false, false);
        delete_0 = objectStore_258.delete(KeyRange_66);
    }
    catch (e){
    }

    var clear_15 = objectStore_258.clear();
    var clear_16 = objectStore_258.clear();
    var delete_1;
    try{
        KeyRange_68 = IDBKeyRange.bound('gfpqGwcqbuiX', 'YZlxFRYLlHF', false, false);
        delete_1 = objectStore_258.delete(KeyRange_68);
    }
    catch (e){
    }

    var get_19;
    try{
        KeyRange_70 = IDBKeyRange.only('gfpqGwcqbuiX');
        get_19 = objectStore_258.get(KeyRange_70);
    }
    catch (e){
    }

    txn_57.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_57.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_57.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_58 = db.transaction(['objectStore_268'], 'readonly', {durability:"strict"})
    var objectStore_268 = txn_58.objectStore('objectStore_268');
    txn_58.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_58.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_58.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_59 = db.transaction(['objectStore_244'], 'readwrite', {durability:"default"})
    var objectStore_244 = txn_59.objectStore('objectStore_244');
    var put_9 = objectStore_244.put({f0_u: '<number>', f1_l: '<boolean>', f2_r: '<boolean>', f3_t: '<boolean>', f4_b: '<object>', f5_b: '<boolean>', f6_b: '<number>', f7_w: '<boolean>', f8_l: '<object>', f9_y: '<boolean>'}, 'qczbhpAZc');
    var add_13 = objectStore_244.add({f0_p: '<boolean>', f1_w: '<string>', f2_u: '<object>', f3_e: '<string>'}, 'sqR');
    var put_10 = objectStore_244.put({f0_g: '<object>', f1_d: '<object>', f2_d: '<array>'}, 'hZp');
    var put_11 = objectStore_244.put({f0_w: '<number>', f1_f: '<array>', f2_e: '<object>', f3_j: '<array>', f4_b: '<null>'}, 'IOsyKQz');
    var get_20;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('qczbhpAZc', false);
        get_20 = objectStore_244.get(KeyRange_72);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_74 = IDBKeyRange.bound('qczbhpAZc', 'IOsyKQz', false, false);
        get_21 = objectStore_244.get(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_76 = IDBKeyRange.only('hZp');
        getAllKeys_3 = objectStore_244.getAllKeys(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('qczbhpAZc');
        getAllKeys_3 = objectStore_244.getAllKeys(KeyRange_77);
    }

    var put_12 = objectStore_244.put({f0_s: '<boolean>', f1_n: '<null>', f2_j: '<null>'}, 'pXjiZo');
    var clear_17 = objectStore_244.clear();
    var put_13 = objectStore_244.put({f0_z: '<number>', f1_j: '<array>', f2_v: '<object>', f3_y: '<null>', f4_w: '<number>', f5_k: '<number>', f6_l: '<array>', f7_l: '<object>', f8_y: '<object>', f9_w: '<boolean>'}, 'ecXpgC');
    var get_22;
    try{
        KeyRange_78 = IDBKeyRange.bound('pXjiZo', 'ecXpgC', true, true);
        get_22 = objectStore_244.get(KeyRange_78);
    }
    catch (e){
    }

    var add_14 = objectStore_244.add({f0_b: '<boolean>', f1_a: '<array>', f2_i: '<array>'}, 'TDOMi');
    txn_59.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_59.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_59.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9979')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};