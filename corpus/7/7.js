let db;
const openRequest = window.indexedDB.open('str_2249', 4005526403653522)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_330');
    var objectStore_1 = db.createObjectStore('objectStore_331', {keypath: 'PSjzZllrA', autoIncrement: true});
    var index_299 = objectStore_0.createIndex('index_299', 'test', {unique: true});
    var objectStore_2 = db.createObjectStore('objectStore_332', {keypath: 'LOdqfThaiZ.tUACh.IngjAimOs.ttu.JtkYS.OqtbJ.bBvyz.uHxAwmo.TPVoxiij.PMSsvmkr'});
    var objectStore_3 = db.createObjectStore('objectStore_333', {keypath: 'Vim'});
    var objectStore_4 = db.createObjectStore('objectStore_334', {keypath: 'EbqAryRC.QUYqbCibWe.RTqnyPqvrXtv'});
    var index_300 = objectStore_3.createIndex('index_300', 'test', {unique: false, multiEntry: true});
    var index_301 = objectStore_3.createIndex('index_301', 'test');
    var index_302 = objectStore_3.createIndex('index_302', 'test', {multiEntry: false});
    var objectStore_5 = db.createObjectStore('objectStore_335', {keypath: 'uCQgEwx', autoIncrement: false});
    var objectStore_6 = db.createObjectStore('objectStore_336', {keypath: 'smp', autoIncrement: true});
    var objectStore_7 = db.createObjectStore('objectStore_337', {keypath: 'GauEvugalt', autoIncrement: false});
    var index_303 = objectStore_4.createIndex('index_303', 'test', {multiEntry: false});
    var objectStore_8 = db.createObjectStore('objectStore_338', {keypath: 'bnT', autoIncrement: false});
    var index_304 = objectStore_6.createIndex('index_304', 'test', {multiEntry: false});
    var index_305 = objectStore_7.createIndex('index_305', 'test', {unique: false});
    var objectStore_9 = db.createObjectStore('objectStore_339', {keypath: 'VNnLXZzalYtO'});
    var objectStore_10 = db.createObjectStore('objectStore_340', {keypath: 'QANuaNVJK'});
    var objectStore_11 = db.createObjectStore('objectStore_341');
    var objectStore_12 = db.createObjectStore('objectStore_342', {keypath: 'llVIFC', autoIncrement: false});
    var objectStore_13 = db.createObjectStore('objectStore_343', {keypath: 'xZnrvR'});
    var index_306 = objectStore_6.createIndex('index_306', 'test');
    var objectStore_14 = db.createObjectStore('objectStore_344', {keypath: 'bYGxQXt'});
    var objectStore_15 = db.createObjectStore('objectStore_345', {autoIncrement: true});
    var index_307 = objectStore_10.createIndex('index_307', 'test', {unique: true, multiEntry: true});
    var index_308 = objectStore_5.createIndex('index_308', 'test');
    var objectStore_16 = db.createObjectStore('objectStore_346', {keypath: 'bwOHnCEhjZl'});
    var objectStore_17 = db.createObjectStore('objectStore_347');
    var objectStore_18 = db.createObjectStore('objectStore_348', {keypath: 'mzvabAknzHa.DNAMVA.fWNDuKhfiAb.XcaadQ.DhlykoRh.jGaDy'});
    var objectStore_19 = db.createObjectStore('objectStore_349', {keypath: 'Cic'});
    var index_309 = objectStore_19.createIndex('index_309', 'test');
    var index_310 = objectStore_1.createIndex('index_310', 'test', {multiEntry: false});
    var objectStore_20 = db.createObjectStore('objectStore_350', {autoIncrement: false});
    var index_311 = objectStore_11.createIndex('index_311', 'test');
    var index_312 = objectStore_18.createIndex('index_312', 'test', {unique: true});
    var index_313 = objectStore_3.createIndex('index_313', 'test', {unique: false});
    var objectStore_21 = db.createObjectStore('objectStore_351');
    var objectStore_22 = db.createObjectStore('objectStore_352', {autoIncrement: true});
    var objectStore_23 = db.createObjectStore('objectStore_353', {keypath: 'SlJJBDtDLovU.Cvy.bkS'});
    var objectStore_24 = db.createObjectStore('objectStore_354', {keypath: 'foVhWB'});
    var index_314 = objectStore_23.createIndex('index_314', 'test', {unique: false, multiEntry: true});
    var objectStore_25 = db.createObjectStore('objectStore_355', {keypath: 'YHm'});
    var objectStore_26 = db.createObjectStore('objectStore_356');
    var index_315 = objectStore_12.createIndex('index_315', 'test', {unique: false});
    var objectStore_27 = db.createObjectStore('objectStore_357', {autoIncrement: false});
    var objectStore_28 = db.createObjectStore('objectStore_358', {keypath: 'MypbG', autoIncrement: true});
    var index_316 = objectStore_10.createIndex('index_316', 'test', {unique: true});
    var objectStore_29 = db.createObjectStore('objectStore_359', {autoIncrement: true});
    var index_317 = objectStore_24.createIndex('index_317', 'test', {unique: false, multiEntry: true});
    var objectStore_30 = db.createObjectStore('objectStore_360');
    var index_318 = objectStore_27.createIndex('index_318', 'test', {unique: false});
    var objectStore_31 = db.createObjectStore('objectStore_361', {autoIncrement: false});
    var index_319 = objectStore_16.createIndex('index_319', 'test', {multiEntry: false});
    var objectStore_32 = db.createObjectStore('objectStore_362', {keypath: 'ELOLkuZibuM'});
    var objectStore_33 = db.createObjectStore('objectStore_363', {keypath: 'XbcSzbPBfIts'});
    var objectStore_34 = db.createObjectStore('objectStore_364', {autoIncrement: false});
    var objectStore_35 = db.createObjectStore('objectStore_365');
    var index_320 = objectStore_14.createIndex('index_320', 'test', {multiEntry: false});
    var objectStore_36 = db.createObjectStore('objectStore_366', {autoIncrement: false});
    var index_321 = objectStore_22.createIndex('index_321', 'test', {unique: false});
    var index_322 = objectStore_3.createIndex('index_322', 'test');
    var objectStore_37 = db.createObjectStore('objectStore_367', {autoIncrement: false});
    var index_323 = objectStore_21.createIndex('index_323', 'test', {unique: false});
    var index_324 = objectStore_18.createIndex('index_324', 'test', {unique: false, multiEntry: false});
    var index_325 = objectStore_14.createIndex('index_325', 'test', {unique: true});
    var index_326 = objectStore_15.createIndex('index_326', 'test', {unique: true});
    var index_327 = objectStore_1.createIndex('index_327', 'test', {unique: true});
    var index_328 = objectStore_1.createIndex('index_328', 'test');
    var index_329 = objectStore_7.createIndex('index_329', 'test', {unique: false});
    var index_330 = objectStore_6.createIndex('index_330', 'test', {unique: false, multiEntry: true});
    var objectStore_38 = db.createObjectStore('objectStore_368', {autoIncrement: false});
    var index_331 = objectStore_22.createIndex('index_331', 'test', {unique: false, multiEntry: false});
    var index_332 = objectStore_29.createIndex('index_332', 'test', {unique: true, multiEntry: true});
    var objectStore_39 = db.createObjectStore('objectStore_369', {keypath: 'SblzaXEBGE'});
    var index_333 = objectStore_34.createIndex('index_333', 'test', {multiEntry: false});
    var index_334 = objectStore_13.createIndex('index_334', 'test');
    var index_335 = objectStore_15.createIndex('index_335', 'test');
    var objectStore_40 = db.createObjectStore('objectStore_370');
    var objectStore_41 = db.createObjectStore('objectStore_371');
    var index_336 = objectStore_36.createIndex('index_336', 'test');
    var objectStore_42 = db.createObjectStore('objectStore_372', {keypath: 'glRurEGThWJ.PAHpxtX.eNcRCdVkLDFc.XRcTr.QOySsddAI.rztjHxssSBb.cdUm'});
    var index_337 = objectStore_11.createIndex('index_337', 'test', {unique: false});
    var objectStore_43 = db.createObjectStore('objectStore_373', {autoIncrement: true});
    var objectStore_44 = db.createObjectStore('objectStore_374');
    var index_338 = objectStore_7.createIndex('index_338', 'test');
    var index_339 = objectStore_6.createIndex('index_339', 'test', {unique: true});
    var index_340 = objectStore_4.createIndex('index_340', 'test', {unique: true});
    var objectStore_45 = db.createObjectStore('objectStore_375', {keypath: 'KHAKom', autoIncrement: false});
    var index_341 = objectStore_21.createIndex('index_341', 'test');
    var index_342 = objectStore_5.createIndex('index_342', 'test', {unique: false});
    var objectStore_46 = db.createObjectStore('objectStore_376', {keypath: 'myPtYPJF'});
    var objectStore_47 = db.createObjectStore('objectStore_377', {autoIncrement: false});
    var index_343 = objectStore_42.createIndex('index_343', 'test', {unique: false});
    var objectStore_48 = db.createObjectStore('objectStore_378', {autoIncrement: true});
    var index_344 = objectStore_16.createIndex('index_344', 'test', {multiEntry: true});
    var index_345 = objectStore_0.createIndex('index_345', 'test', {multiEntry: false});
    var index_346 = objectStore_14.createIndex('index_346', 'test', {unique: true, multiEntry: false});
    var objectStore_49 = db.createObjectStore('objectStore_379', {autoIncrement: false});
    var index_347 = objectStore_24.createIndex('index_347', 'test', {unique: true, multiEntry: false});
    var index_348 = objectStore_23.createIndex('index_348', 'test');
    var index_349 = objectStore_28.createIndex('index_349', 'test', {unique: false, multiEntry: false});
    var index_350 = objectStore_5.createIndex('index_350', 'test', {unique: false, multiEntry: true});
    var index_351 = objectStore_48.createIndex('index_351', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_70 = db.transaction(['objectStore_343', 'objectStore_358'], 'readonly', {durability:"strict"})
    var objectStore_358 = txn_70.objectStore('objectStore_358');
    var index_0 = objectStore_358.index('index_349');
    var index_1 = objectStore_358.index('index_349');
    txn_70.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_70.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_70.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_71 = db.transaction(['objectStore_378', 'objectStore_352', 'objectStore_338', 'objectStore_376'], 'readwrite', {durability:"relaxed"})
    var objectStore_338 = txn_71.objectStore('objectStore_338');
    var add_0 = objectStore_338.add({f0_i: '<object>'}, 'wDgBAfVa');
    var clear_0 = objectStore_338.clear();
    var add_1 = objectStore_338.add({f0_o: '<number>', f1_x: '<array>', f2_s: '<number>', f3_k: '<boolean>', f4_n: '<string>', f5_b: '<number>'}, 'dkzli');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('wDgBAfVa');
        get_0 = objectStore_338.get(KeyRange_0);
    }
    catch (e){
    }

    var add_2 = objectStore_338.add({f0_i: '<string>', f1_l: '<object>', f2_e: '<array>', f3_i: '<null>', f4_i: '<array>', f5_i: '<string>', f6_w: '<string>', f7_k: '<number>'}, 'aOeHmfyvC');
    var clear_1 = objectStore_338.clear();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('wDgBAfVa', 'dkzli', false, false);
        get_1 = objectStore_338.get(KeyRange_2);
    }
    catch (e){
    }

    var put_0 = objectStore_338.put({f0_x: '<string>', f1_d: '<array>', f2_h: '<boolean>', f3_j: '<number>', f4_g: '<null>', f5_z: '<null>', f6_n: '<number>', f7_f: '<object>'}, 'HgnLoPRd');
    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('HgnLoPRd', 'wDgBAfVa', false, false);
        count_0 = objectStore_338.count(KeyRange_4);
    }
    catch (e){
    }

    var put_1 = objectStore_338.put({f0_g: '<number>', f1_c: '<null>', f2_z: '<array>', f3_p: '<string>', f4_s: '<boolean>', f5_w: '<null>', f6_u: '<null>', f7_z: '<number>', f8_g: '<object>'}, 'ZgGHqYJSEP');
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('wDgBAfVa', true);
        getAllKeys_0 = objectStore_338.getAllKeys(KeyRange_6, 1576897639);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('ZgGHqYJSEP');
        getAllKeys_0 = objectStore_338.getAllKeys(KeyRange_7);
    }

    var count_1 = objectStore_338.count();
    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('HgnLoPRd', 'HgnLoPRd', false, false);
        getAllKeys_1 = objectStore_338.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('ZgGHqYJSEP');
        getAllKeys_1 = objectStore_338.getAllKeys(KeyRange_9);
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('HgnLoPRd', false);
        get_2 = objectStore_338.get(KeyRange_10);
    }
    catch (e){
    }

    var add_3 = objectStore_338.add({f0_r: '<object>', f1_v: '<number>', f2_z: '<null>', f3_t: '<boolean>', f4_i: '<array>', f5_t: '<null>', f6_g: '<null>', f7_i: '<boolean>', f8_n: '<object>'}, 'DgBAka');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('aOeHmfyvC', 'dkzli', true, false);
        get_3 = objectStore_338.get(KeyRange_12);
    }
    catch (e){
    }

    var clear_2 = objectStore_338.clear();
    txn_71.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_71.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_71.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_72 = db.transaction(['objectStore_366', 'objectStore_350'], 'readwrite', {durability:"default"})
    var objectStore_366 = txn_72.objectStore('objectStore_366');
    var put_2 = objectStore_366.put({f0_i: '<number>', f1_b: '<null>', f2_i: '<number>', f3_u: '<null>', f4_b: '<string>', f5_b: '<object>'}, 'evFYEXlISq');
    var add_4 = objectStore_366.add({f0_y: '<array>', f1_n: '<object>', f2_z: '<string>', f3_c: '<object>', f4_i: '<object>', f5_d: '<boolean>', f6_y: '<boolean>'}, 'HkvWrCVXyNOC');
    var put_3 = objectStore_366.put({f0_z: '<string>', f1_f: '<number>', f2_f: '<number>'}, 'Vpy');
    var count_2 = objectStore_366.count();
    var clear_3 = objectStore_366.clear();
    var getAllKeys_2 = objectStore_366.getAllKeys();
    var add_5 = objectStore_366.add({f0_f: '<string>', f1_g: '<object>', f2_y: '<number>', f3_g: '<number>', f4_w: '<object>', f5_e: '<number>', f6_i: '<boolean>', f7_m: '<null>', f8_c: '<null>', f9_g: '<string>'}, 'sFGHWtz');
    var count_3 = objectStore_366.count();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.only('HkvWrCVXyNOC');
        get_4 = objectStore_366.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('evFYEXlISq', 'HkvWrCVXyNOC', false, false);
        get_5 = objectStore_366.get(KeyRange_16);
    }
    catch (e){
    }

    var add_6 = objectStore_366.add({f0_o: '<number>'}, 'BuB');
    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.only('BuB');
        get_6 = objectStore_366.get(KeyRange_18);
    }
    catch (e){
    }

    var put_4 = objectStore_366.put({f0_w: '<number>', f1_m: '<object>', f2_u: '<string>', f3_p: '<array>', f4_h: '<null>', f5_m: '<number>', f6_v: '<array>', f7_g: '<string>'}, 'qvb');
    var count_4 = objectStore_366.count();
    var count_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('qvb', 'HkvWrCVXyNOC', true, false);
        count_5 = objectStore_366.count(KeyRange_20);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('evFYEXlISq', false);
        getAll_0 = objectStore_366.getAll(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('qvb');
        getAll_0 = objectStore_366.getAll(KeyRange_23);
    }

    var getAll_1 = objectStore_366.getAll();
    var get_7;
    try{
        KeyRange_24 = IDBKeyRange.bound('Vpy', 'BuB', false, true);
        get_7 = objectStore_366.get(KeyRange_24);
    }
    catch (e){
    }

    var add_7 = objectStore_366.add({f0_b: '<string>', f1_y: '<array>', f2_b: '<string>', f3_o: '<boolean>', f4_b: '<boolean>', f5_x: '<null>', f6_k: '<object>', f7_r: '<object>', f8_w: '<number>', f9_c: '<object>'}, 'qgUTgRjKLktJ');
    var get_8;
    try{
        KeyRange_26 = IDBKeyRange.only('HkvWrCVXyNOC');
        get_8 = objectStore_366.get(KeyRange_26);
    }
    catch (e){
    }

    txn_72.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_72.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_72.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_73 = db.transaction(['objectStore_351', 'objectStore_377'], 'readwrite', {durability:"default"})
    var objectStore_377 = txn_73.objectStore('objectStore_377');
    var put_5 = objectStore_377.put({f0_y: '<array>', f1_b: '<object>', f2_k: '<boolean>', f3_n: '<boolean>', f4_g: '<array>', f5_v: '<string>'}, 'nXXsVahNUAC');
    var put_6 = objectStore_377.put({f0_k: '<boolean>', f1_y: '<boolean>', f2_k: '<boolean>', f3_s: '<null>', f4_l: '<null>', f5_a: '<boolean>', f6_v: '<object>'}, 'lYAxyBzAAu');
    var put_7 = objectStore_377.put({f0_u: '<null>', f1_i: '<number>', f2_n: '<boolean>', f3_k: '<string>', f4_b: '<null>', f5_e: '<string>', f6_l: '<array>'}, 'XgmVTNqslq');
    var put_8 = objectStore_377.put({f0_a: '<array>'}, 'qhWCWHp');
    var get_9;
    try{
        KeyRange_28 = IDBKeyRange.only('lYAxyBzAAu');
        get_9 = objectStore_377.get(KeyRange_28);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_30 = IDBKeyRange.bound('qhWCWHp', 'XgmVTNqslq', true, false);
        count_6 = objectStore_377.count(KeyRange_30);
    }
    catch (e){
    }

    var add_8 = objectStore_377.add({f0_p: '<object>', f1_y: '<array>', f2_r: '<number>'}, 'pCxNEIGxks');
    var count_7;
    try{
        KeyRange_32 = IDBKeyRange.bound('nXXsVahNUAC', 'XgmVTNqslq', false, true);
        count_7 = objectStore_377.count(KeyRange_32);
    }
    catch (e){
    }

    var clear_4 = objectStore_377.clear();
    var put_9 = objectStore_377.put({f0_b: '<string>'}, 'qodOgsxil');
    var add_9 = objectStore_377.add({f0_g: '<null>', f1_z: '<array>', f2_g: '<number>', f3_y: '<boolean>'}, 'yftRrEGky');
    var get_10;
    try{
        KeyRange_34 = IDBKeyRange.only('pCxNEIGxks');
        get_10 = objectStore_377.get(KeyRange_34);
    }
    catch (e){
    }

    var put_10 = objectStore_377.put({f0_n: '<null>', f1_r: '<string>', f2_n: '<object>', f3_m: '<string>', f4_c: '<object>', f5_f: '<boolean>', f6_h: '<array>'}, 'lSHMe');
    var count_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('nXXsVahNUAC', 'lYAxyBzAAu', true, true);
        count_8 = objectStore_377.count(KeyRange_36);
    }
    catch (e){
    }

    var count_9 = objectStore_377.count();
    var put_11 = objectStore_377.put({f0_r: '<boolean>', f1_n: '<array>', f2_q: '<object>', f3_f: '<null>', f4_l: '<null>', f5_i: '<null>', f6_e: '<number>', f7_m: '<string>', f8_i: '<array>', f9_x: '<number>'}, 'TEySWelPDu');
    var clear_5 = objectStore_377.clear();
    var getAllKeys_3;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('lYAxyBzAAu', true);
        getAllKeys_3 = objectStore_377.getAllKeys(KeyRange_38, 3531007762);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('pCxNEIGxks');
        getAllKeys_3 = objectStore_377.getAllKeys(KeyRange_39);
    }

    var count_10;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('lSHMe', false);
        count_10 = objectStore_377.count(KeyRange_40);
    }
    catch (e){
    }

    var add_10 = objectStore_377.add({f0_s: '<array>', f1_s: '<array>', f2_l: '<object>', f3_h: '<boolean>', f4_n: '<null>', f5_k: '<array>', f6_t: '<array>'}, 'XebuFH');
    var count_11;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('qhWCWHp', true);
        count_11 = objectStore_377.count(KeyRange_42);
    }
    catch (e){
    }

    var add_11 = objectStore_377.add({f0_e: '<null>', f1_p: '<string>', f2_w: '<number>', f3_b: '<array>', f4_p: '<string>', f5_e: '<number>', f6_e: '<string>', f7_d: '<null>', f8_p: '<boolean>'}, 'HhhdEbP');
    txn_73.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_73.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_73.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_74 = db.transaction(['objectStore_332', 'objectStore_364', 'objectStore_358', 'objectStore_352'], 'readonly', {durability:"relaxed"})
    var objectStore_364 = txn_74.objectStore('objectStore_364');
    var index_2 = objectStore_364.index('index_333');
    var index_3 = objectStore_364.index('index_333');
    var index_4 = objectStore_364.index('index_333');
    txn_74.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_74.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_74.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_75 = db.transaction(['objectStore_339'], 'readwrite', {durability:"default"})
    var objectStore_339 = txn_75.objectStore('objectStore_339');
    var add_12 = objectStore_339.add({f0_o: '<number>', f1_c: '<boolean>', f2_z: '<null>', f3_y: '<number>', f4_h: '<array>', f5_g: '<number>', f6_s: '<number>', f7_t: '<object>'}, 'sPbLJ');
    var add_13 = objectStore_339.add({f0_d: '<boolean>', f1_k: '<number>', f2_t: '<null>', f3_v: '<boolean>', f4_h: '<boolean>', f5_x: '<boolean>', f6_z: '<string>', f7_z: '<boolean>'}, 'RnLTcFdD');
    var getAllKeys_4 = objectStore_339.getAllKeys();
    var get_11;
    try{
        KeyRange_44 = IDBKeyRange.only('sPbLJ');
        get_11 = objectStore_339.get(KeyRange_44);
    }
    catch (e){
    }

    var count_12 = objectStore_339.count();
    var add_14 = objectStore_339.add({f0_l: '<number>', f1_b: '<null>', f2_z: '<null>', f3_i: '<string>', f4_t: '<string>'}, 'kgUQSZGVOq');
    var add_15 = objectStore_339.add({f0_p: '<number>', f1_e: '<array>', f2_j: '<boolean>', f3_m: '<boolean>', f4_n: '<number>', f5_x: '<null>', f6_s: '<array>', f7_p: '<null>', f8_h: '<object>', f9_h: '<number>'}, 'LOVbEKSd');
    var count_13 = objectStore_339.count();
    var getAllKeys_5 = objectStore_339.getAllKeys(1313860431);
    var count_14 = objectStore_339.count();
    var add_16 = objectStore_339.add({f0_x: '<object>', f1_i: '<array>', f2_y: '<array>', f3_d: '<null>', f4_p: '<null>', f5_s: '<array>', f6_o: '<object>'}, 'uTGw');
    var put_12 = objectStore_339.put({f0_z: '<number>', f1_j: '<boolean>', f2_v: '<object>', f3_l: '<null>', f4_k: '<boolean>', f5_r: '<array>', f6_t: '<object>'}, 'OQS');
    var delete_0;
    try{
        KeyRange_46 = IDBKeyRange.bound('OQS', 'sPbLJ', true, true);
        delete_0 = objectStore_339.delete(KeyRange_46);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('kgUQSZGVOq', 'LOVbEKSd', false, true);
        get_12 = objectStore_339.get(KeyRange_48);
    }
    catch (e){
    }

    var put_13 = objectStore_339.put({f0_g: '<boolean>', f1_l: '<null>', f2_p: '<number>', f3_y: '<null>', f4_r: '<object>', f5_h: '<number>', f6_y: '<object>', f7_e: '<string>'}, 'TzerLqdp');
    var put_14 = objectStore_339.put({f0_f: '<number>', f1_h: '<boolean>'}, 'dPeQKzPs');
    txn_75.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_75.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_75.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_76 = db.transaction(['objectStore_375'], 'readwrite', {durability:"relaxed"})
    var objectStore_375 = txn_76.objectStore('objectStore_375');
    var clear_6 = objectStore_375.clear();
    var add_17 = objectStore_375.add({f0_e: '<boolean>', f1_m: '<string>', f2_k: '<null>', f3_l: '<object>', f4_n: '<string>', f5_i: '<string>', f6_v: '<array>'}, 'AgH');
    var clear_7 = objectStore_375.clear();
    var get_13;
    try{
        KeyRange_50 = IDBKeyRange.bound('AgH', 'AgH', true, true);
        get_13 = objectStore_375.get(KeyRange_50);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_52 = IDBKeyRange.only('AgH');
        get_14 = objectStore_375.get(KeyRange_52);
    }
    catch (e){
    }

    var add_18 = objectStore_375.add({f0_y: '<array>', f1_l: '<array>', f2_c: '<array>', f3_g: '<null>', f4_f: '<string>', f5_l: '<object>'}, 'RzqWOdCvjW');
    var clear_8 = objectStore_375.clear();
    var add_19 = objectStore_375.add({f0_g: '<array>', f1_x: '<number>'}, 'PrSKv');
    var add_20 = objectStore_375.add({f0_k: '<number>'}, 'Afaa');
    var count_15;
    try{
        KeyRange_54 = IDBKeyRange.bound('RzqWOdCvjW', 'Afaa', true, false);
        count_15 = objectStore_375.count(KeyRange_54);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_56 = IDBKeyRange.bound('AgH', 'AgH', true, true);
        count_16 = objectStore_375.count(KeyRange_56);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_58 = IDBKeyRange.only('AgH');
        get_15 = objectStore_375.get(KeyRange_58);
    }
    catch (e){
    }

    var count_17 = objectStore_375.count();
    var put_15 = objectStore_375.put({f0_c: '<array>', f1_n: '<object>', f2_v: '<null>', f3_z: '<object>', f4_s: '<string>', f5_b: '<object>', f6_q: '<number>'}, 'mdMZ');
    var getAll_2;
    try{
        KeyRange_60 = IDBKeyRange.bound('Afaa', 'mdMZ', true, false);
        getAll_2 = objectStore_375.getAll(KeyRange_60);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('mdMZ');
        getAll_2 = objectStore_375.getAll(KeyRange_61);
    }

    var count_18;
    try{
        KeyRange_62 = IDBKeyRange.only('Afaa');
        count_18 = objectStore_375.count(KeyRange_62);
    }
    catch (e){
    }

    var put_16 = objectStore_375.put({f0_b: '<null>', f1_y: '<number>', f2_a: '<array>', f3_e: '<object>', f4_o: '<boolean>', f5_s: '<number>', f6_e: '<object>', f7_j: '<string>', f8_j: '<number>'}, 'eUwh');
    txn_76.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_76.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_76.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_77 = db.transaction(['objectStore_366'], 'readwrite', {durability:"relaxed"})
    var objectStore_366 = txn_77.objectStore('objectStore_366');
    var put_17 = objectStore_366.put({f0_j: '<boolean>', f1_n: '<string>', f2_u: '<null>', f3_g: '<boolean>', f4_q: '<string>', f5_b: '<boolean>'}, 'CwrStgiKcHTK');
    var add_21 = objectStore_366.add({f0_o: '<object>', f1_s: '<string>', f2_e: '<object>', f3_z: '<number>', f4_r: '<null>', f5_m: '<array>'}, 'QOpsoChaSUWr');
    var clear_9 = objectStore_366.clear();
    var count_19;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('BuB', true);
        count_19 = objectStore_366.count(KeyRange_64);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_66 = IDBKeyRange.bound('CwrStgiKcHTK', 'Vpy', false, true);
        count_20 = objectStore_366.count(KeyRange_66);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('evFYEXlISq', true);
        getAll_3 = objectStore_366.getAll(KeyRange_68);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('BuB');
        getAll_3 = objectStore_366.getAll(KeyRange_69);
    }

    var put_18 = objectStore_366.put({f0_g: '<object>', f1_q: '<boolean>', f2_y: '<boolean>', f3_h: '<array>', f4_m: '<null>'}, 'WbXWZ');
    var get_16;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('qvb', false);
        get_16 = objectStore_366.get(KeyRange_70);
    }
    catch (e){
    }

    var clear_10 = objectStore_366.clear();
    var count_21;
    try{
        KeyRange_72 = IDBKeyRange.only('WbXWZ');
        count_21 = objectStore_366.count(KeyRange_72);
    }
    catch (e){
    }

    var add_22 = objectStore_366.add({f0_c: '<null>', f1_g: '<object>', f2_x: '<object>', f3_g: '<object>'}, 'vHVOvv');
    var count_22 = objectStore_366.count();
    var put_19 = objectStore_366.put({f0_m: '<object>', f1_p: '<string>', f2_j: '<string>', f3_p: '<number>', f4_i: '<array>', f5_j: '<array>', f6_w: '<string>', f7_t: '<string>'}, 'fJdqeGfEqtNC');
    var clear_11 = objectStore_366.clear();
    var clear_12 = objectStore_366.clear();
    txn_77.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_77.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_77.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_78 = db.transaction(['objectStore_339', 'objectStore_345'], 'readwrite', {durability:"default"})
    var objectStore_339 = txn_78.objectStore('objectStore_339');
    var get_17;
    try{
        KeyRange_74 = IDBKeyRange.bound('LOVbEKSd', 'TzerLqdp', false, false);
        get_17 = objectStore_339.get(KeyRange_74);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_76 = IDBKeyRange.only('dPeQKzPs');
        delete_1 = objectStore_339.delete(KeyRange_76);
    }
    catch (e){
    }

    var put_20 = objectStore_339.put({f0_m: '<object>'}, 'FnLzydQ');
    var put_21 = objectStore_339.put({f0_f: '<number>', f1_x: '<number>', f2_h: '<null>', f3_j: '<string>', f4_d: '<object>', f5_k: '<number>', f6_i: '<null>', f7_a: '<number>', f8_c: '<number>', f9_g: '<array>'}, 'AfxpNvCpoTpx');
    var clear_13 = objectStore_339.clear();
    var get_18;
    try{
        KeyRange_78 = IDBKeyRange.bound('FnLzydQ', 'AfxpNvCpoTpx', true, false);
        get_18 = objectStore_339.get(KeyRange_78);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_80 = IDBKeyRange.bound('OQS', 'uTGw', true, false);
        getAllKeys_6 = objectStore_339.getAllKeys(KeyRange_80);
    }
    catch (e){
        KeyRange_81 = IDBKeyRange.only('dPeQKzPs');
        getAllKeys_6 = objectStore_339.getAllKeys(KeyRange_81);
    }

    var get_19;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('dPeQKzPs', false);
        get_19 = objectStore_339.get(KeyRange_82);
    }
    catch (e){
    }

    var add_23 = objectStore_339.add({f0_q: '<string>', f1_c: '<object>', f2_w: '<array>', f3_j: '<null>'}, 'CMBWVJnDBNx');
    var add_24 = objectStore_339.add({f0_a: '<string>', f1_g: '<array>', f2_u: '<string>'}, 'dpEfOUH');
    var count_23;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('dPeQKzPs', true);
        count_23 = objectStore_339.count(KeyRange_84);
    }
    catch (e){
    }

    var clear_14 = objectStore_339.clear();
    var add_25 = objectStore_339.add({f0_w: '<object>', f1_k: '<boolean>'}, 'rgi');
    var get_20;
    try{
        KeyRange_86 = IDBKeyRange.bound('dPeQKzPs', 'dpEfOUH', true, false);
        get_20 = objectStore_339.get(KeyRange_86);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_88 = IDBKeyRange.bound('kgUQSZGVOq', 'LOVbEKSd', true, false);
        delete_2 = objectStore_339.delete(KeyRange_88);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_90 = IDBKeyRange.only('dPeQKzPs');
        get_21 = objectStore_339.get(KeyRange_90);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_92 = IDBKeyRange.bound('TzerLqdp', 'kgUQSZGVOq', true, true);
        getAll_4 = objectStore_339.getAll(KeyRange_92);
    }
    catch (e){
        KeyRange_93 = IDBKeyRange.only('kgUQSZGVOq');
        getAll_4 = objectStore_339.getAll(KeyRange_93);
    }

    var clear_15 = objectStore_339.clear();
    var get_22;
    try{
        KeyRange_94 = IDBKeyRange.bound('sPbLJ', 'kgUQSZGVOq', true, true);
        get_22 = objectStore_339.get(KeyRange_94);
    }
    catch (e){
    }

    var clear_16 = objectStore_339.clear();
    var put_22 = objectStore_339.put({f0_s: '<null>', f1_n: '<string>', f2_e: '<number>', f3_g: '<number>', f4_v: '<null>'}, 'XZYeXUrJ');
    var add_26 = objectStore_339.add({f0_r: '<array>', f1_k: '<array>', f2_k: '<number>', f3_i: '<string>', f4_u: '<number>', f5_v: '<null>', f6_h: '<boolean>'}, 'Rhgtwg');
    txn_78.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_78.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_78.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_79 = db.transaction(['objectStore_361', 'objectStore_374'], 'readwrite', {durability:"strict"})
    var objectStore_374 = txn_79.objectStore('objectStore_374');
    var clear_17 = objectStore_374.clear();
    var clear_18 = objectStore_374.clear();
    var put_23 = objectStore_374.put({f0_w: '<number>', f1_o: '<null>', f2_e: '<object>', f3_x: '<object>', f4_l: '<object>', f5_t: '<null>', f6_k: '<array>', f7_j: '<string>', f8_n: '<number>'}, 'SECjrxavYXq');
    var clear_19 = objectStore_374.clear();
    var getAll_5 = objectStore_374.getAll();
    var add_27 = objectStore_374.add({f0_k: '<boolean>', f1_z: '<null>', f2_t: '<null>', f3_n: '<object>', f4_w: '<array>'}, 'oPmDgVVGqWoK');
    var add_28 = objectStore_374.add({f0_v: '<number>', f1_s: '<null>', f2_p: '<array>', f3_r: '<null>', f4_t: '<number>', f5_y: '<null>', f6_y: '<number>', f7_r: '<array>'}, 'mmHLaJ');
    var clear_20 = objectStore_374.clear();
    var getAll_6 = objectStore_374.getAll();
    var count_24 = objectStore_374.count();
    var put_24 = objectStore_374.put({f0_m: '<number>', f1_w: '<boolean>'}, 'MRFIHMcs');
    var clear_21 = objectStore_374.clear();
    var clear_22 = objectStore_374.clear();
    var add_29 = objectStore_374.add({f0_x: '<null>', f1_e: '<number>', f2_z: '<array>', f3_c: '<number>', f4_j: '<object>', f5_z: '<object>', f6_u: '<string>', f7_v: '<string>', f8_d: '<boolean>'}, 'XlMwQYpjCc');
    var getAllKeys_7 = objectStore_374.getAllKeys(3958894713);
    var getAllKeys_8;
    try{
        KeyRange_96 = IDBKeyRange.lowerBound('MRFIHMcs', true);
        getAllKeys_8 = objectStore_374.getAllKeys(KeyRange_96, 4188209172);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('oPmDgVVGqWoK');
        getAllKeys_8 = objectStore_374.getAllKeys(KeyRange_97);
    }

    var count_25;
    try{
        KeyRange_98 = IDBKeyRange.bound('mmHLaJ', 'MRFIHMcs', false, true);
        count_25 = objectStore_374.count(KeyRange_98);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_100 = IDBKeyRange.bound('oPmDgVVGqWoK', 'oPmDgVVGqWoK', false, false);
        get_23 = objectStore_374.get(KeyRange_100);
    }
    catch (e){
    }

    var count_26 = objectStore_374.count();
    var count_27 = objectStore_374.count();
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