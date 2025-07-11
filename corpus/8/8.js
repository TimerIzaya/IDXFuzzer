let db;
const openRequest = window.indexedDB.open('str_2971', 6712778561919675)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_380');
    var index_352 = objectStore_0.createIndex('index_352', 'test', {multiEntry: true});
    var index_353 = objectStore_0.createIndex('index_353', 'test');
    var index_354 = objectStore_0.createIndex('index_354', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_381', {keypath: 'oOZuXGPskjew'});
    var objectStore_2 = db.createObjectStore('objectStore_382', {keypath: 'LxdkQxyJu.ivp', autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_383', {keypath: 'CscmWU'});
    var objectStore_4 = db.createObjectStore('objectStore_384', {keypath: 'JncDq.HnIfFFPvWO.uSK'});
    var index_355 = objectStore_1.createIndex('index_355', 'test');
    var index_356 = objectStore_0.createIndex('index_356', 'test', {unique: true});
    var objectStore_5 = db.createObjectStore('objectStore_385', {keypath: 'ArgFzRUAE', autoIncrement: false});
    var index_357 = objectStore_5.createIndex('index_357', 'test', {multiEntry: true});
    var objectStore_6 = db.createObjectStore('objectStore_386', {keypath: 'vCqNErj'});
    var index_358 = objectStore_4.createIndex('index_358', 'test', {multiEntry: false});
    var objectStore_7 = db.createObjectStore('objectStore_387', {keypath: 'WRd'});
    var objectStore_8 = db.createObjectStore('objectStore_388', {keypath: 'UorVaA'});
    var index_359 = objectStore_8.createIndex('index_359', 'test', {unique: false, multiEntry: true});
    var index_360 = objectStore_6.createIndex('index_360', 'test', {unique: true});
    var objectStore_9 = db.createObjectStore('objectStore_389', {autoIncrement: true});
    var index_361 = objectStore_0.createIndex('index_361', 'test', {multiEntry: false});
    var objectStore_10 = db.createObjectStore('objectStore_390', {keypath: 'vBleKCegft.IlUDkVPRaHOm.wFPFM.Lynsuss.ULkmGXC.bIo.esbmRwehR.mpcJjsDgXups', autoIncrement: false});
    var index_362 = objectStore_2.createIndex('index_362', 'test', {multiEntry: true});
    var index_363 = objectStore_10.createIndex('index_363', 'test', {unique: true});
    var objectStore_11 = db.createObjectStore('objectStore_391', {keypath: 'XVxQvlQmA.SUTw'});
    var index_364 = objectStore_6.createIndex('index_364', 'test', {unique: true});
    var objectStore_12 = db.createObjectStore('objectStore_392', {keypath: 'xMUUrvJauT'});
    var objectStore_13 = db.createObjectStore('objectStore_393', {keypath: 'rsSuCJJVc', autoIncrement: true});
    var index_365 = objectStore_6.createIndex('index_365', 'test');
    var index_366 = objectStore_6.createIndex('index_366', 'test', {multiEntry: false});
    var objectStore_14 = db.createObjectStore('objectStore_394', {autoIncrement: false});
    var index_367 = objectStore_13.createIndex('index_367', 'test', {multiEntry: true});
    var objectStore_15 = db.createObjectStore('objectStore_395', {keypath: 'GwgioiHAuS'});
    var objectStore_16 = db.createObjectStore('objectStore_396');
    var index_368 = objectStore_8.createIndex('index_368', 'test', {unique: true});
    var index_369 = objectStore_4.createIndex('index_369', 'test');
    var index_370 = objectStore_15.createIndex('index_370', 'test', {unique: false, multiEntry: true});
    var index_371 = objectStore_6.createIndex('index_371', 'test', {unique: true, multiEntry: true});
    var objectStore_17 = db.createObjectStore('objectStore_397', {keypath: 'Nha', autoIncrement: false});
    var objectStore_18 = db.createObjectStore('objectStore_398');
    var index_372 = objectStore_6.createIndex('index_372', 'test', {unique: true, multiEntry: true});
    var objectStore_19 = db.createObjectStore('objectStore_399', {keypath: 'oFeq'});
    var objectStore_20 = db.createObjectStore('objectStore_400', {autoIncrement: false});
    var index_373 = objectStore_0.createIndex('index_373', 'test', {multiEntry: true});
    var index_374 = objectStore_18.createIndex('index_374', 'test', {unique: true});
    var index_375 = objectStore_19.createIndex('index_375', 'test');
    var objectStore_21 = db.createObjectStore('objectStore_401');
    var index_376 = objectStore_18.createIndex('index_376', 'test', {unique: true, multiEntry: true});
    var index_377 = objectStore_20.createIndex('index_377', 'test', {multiEntry: false});
    var index_378 = objectStore_18.createIndex('index_378', 'test', {multiEntry: true});
    var index_379 = objectStore_20.createIndex('index_379', 'test', {unique: true, multiEntry: true});
    var objectStore_22 = db.createObjectStore('objectStore_402', {keypath: 'LWpEvbfWwfg'});
    var objectStore_23 = db.createObjectStore('objectStore_403');
    var index_380 = objectStore_16.createIndex('index_380', 'test', {multiEntry: true});
    var objectStore_24 = db.createObjectStore('objectStore_404', {autoIncrement: false});
    var index_381 = objectStore_15.createIndex('index_381', 'test', {unique: true, multiEntry: false});
    var objectStore_25 = db.createObjectStore('objectStore_405', {keypath: 'yWGrQ'});
    var index_382 = objectStore_15.createIndex('index_382', 'test', {unique: false, multiEntry: false});
    var index_383 = objectStore_22.createIndex('index_383', 'test');
    var objectStore_26 = db.createObjectStore('objectStore_406', {keypath: 'uENeaSuswq.xpolLPBMac.DZzKLRd.rUnHE.sPDQPZaywhAk', autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_407');
    var index_384 = objectStore_19.createIndex('index_384', 'test', {unique: true, multiEntry: false});
    var objectStore_28 = db.createObjectStore('objectStore_408');
    var index_385 = objectStore_23.createIndex('index_385', 'test', {unique: true});
    var index_386 = objectStore_4.createIndex('index_386', 'test');
    var objectStore_29 = db.createObjectStore('objectStore_409', {autoIncrement: true});
    var index_387 = objectStore_20.createIndex('index_387', 'test', {unique: false});
    var objectStore_30 = db.createObjectStore('objectStore_410', {keypath: 'ALd', autoIncrement: false});
    var objectStore_31 = db.createObjectStore('objectStore_411', {keypath: 'upQjNaId', autoIncrement: true});
    var objectStore_32 = db.createObjectStore('objectStore_412', {keypath: 'lzhvtwhwCFdE'});
    var objectStore_33 = db.createObjectStore('objectStore_413', {autoIncrement: true});
    var objectStore_34 = db.createObjectStore('objectStore_414', {autoIncrement: false});
    var index_388 = objectStore_12.createIndex('index_388', 'test', {unique: false, multiEntry: true});
    var index_389 = objectStore_5.createIndex('index_389', 'test', {unique: true, multiEntry: false});
    var objectStore_35 = db.createObjectStore('objectStore_415', {autoIncrement: true});
    var index_390 = objectStore_3.createIndex('index_390', 'test', {unique: true, multiEntry: true});
    var index_391 = objectStore_12.createIndex('index_391', 'test', {unique: true, multiEntry: true});
    var index_392 = objectStore_5.createIndex('index_392', 'test', {unique: false, multiEntry: false});
    var index_393 = objectStore_17.createIndex('index_393', 'test', {unique: true});
    var objectStore_36 = db.createObjectStore('objectStore_416');
    var objectStore_37 = db.createObjectStore('objectStore_417', {keypath: 'OCMgALe', autoIncrement: true});
    var objectStore_38 = db.createObjectStore('objectStore_418', {keypath: 'LQxuhJqt'});
    var index_394 = objectStore_12.createIndex('index_394', 'test', {unique: true, multiEntry: false});
    var index_395 = objectStore_8.createIndex('index_395', 'test', {multiEntry: true});
    var objectStore_39 = db.createObjectStore('objectStore_419');
    var index_396 = objectStore_10.createIndex('index_396', 'test', {unique: true});
    var objectStore_40 = db.createObjectStore('objectStore_420', {keypath: 'jci', autoIncrement: true});
    var objectStore_41 = db.createObjectStore('objectStore_421', {keypath: 'TBLsAoBPvw', autoIncrement: false});
    var index_397 = objectStore_2.createIndex('index_397', 'test');
    var index_398 = objectStore_37.createIndex('index_398', 'test');
    var objectStore_42 = db.createObjectStore('objectStore_422', {keypath: 'oyKlUZr.VIm.trdqJzLCc.ZeqCpaDTb'});
    var index_399 = objectStore_4.createIndex('index_399', 'test');
    var objectStore_43 = db.createObjectStore('objectStore_423', {keypath: 'brZaTV'});
    var index_400 = objectStore_37.createIndex('index_400', 'test', {multiEntry: true});
    var index_401 = objectStore_22.createIndex('index_401', 'test', {multiEntry: true});
    var index_402 = objectStore_43.createIndex('index_402', 'test', {unique: true, multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_80 = db.transaction(['objectStore_410', 'objectStore_420'], 'readwrite', {durability:"default"})
    var objectStore_420 = txn_80.objectStore('objectStore_420');
    var put_0 = objectStore_420.put({f0_b: '<number>', f1_f: '<null>', f2_e: '<string>'}, 'LhHksQRgyo');
    var clear_0 = objectStore_420.clear();
    var add_0 = objectStore_420.add({f0_s: '<boolean>', f1_h: '<boolean>', f2_m: '<null>', f3_m: '<boolean>', f4_p: '<number>', f5_h: '<null>', f6_q: '<object>', f7_b: '<object>', f8_l: '<number>', f9_t: '<array>'}, 'DJLRS');
    var add_1 = objectStore_420.add({f0_o: '<null>', f1_q: '<boolean>', f2_r: '<array>', f3_n: '<object>', f4_r: '<array>', f5_m: '<array>'}, 'UnTZDi');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('UnTZDi', 'LhHksQRgyo', true, true);
        get_0 = objectStore_420.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.only('DJLRS');
        count_0 = objectStore_420.count(KeyRange_2);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('UnTZDi', true);
        get_1 = objectStore_420.get(KeyRange_4);
    }
    catch (e){
    }

    var put_1 = objectStore_420.put({f0_s: '<string>', f1_o: '<null>', f2_d: '<string>', f3_u: '<boolean>', f4_u: '<null>', f5_j: '<boolean>', f6_m: '<number>', f7_i: '<number>'}, 'uqzSFeSTYL');
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.only('DJLRS');
        count_1 = objectStore_420.count(KeyRange_6);
    }
    catch (e){
    }

    var put_2 = objectStore_420.put({f0_b: '<number>', f1_a: '<array>', f2_q: '<number>', f3_j: '<object>', f4_s: '<boolean>', f5_x: '<number>', f6_h: '<object>'}, 'EOPfOtRGm');
    var getAllKeys_0 = objectStore_420.getAllKeys();
    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.only('uqzSFeSTYL');
        getAllKeys_1 = objectStore_420.getAllKeys(KeyRange_8, 59510381);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('UnTZDi');
        getAllKeys_1 = objectStore_420.getAllKeys(KeyRange_9);
    }

    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_81 = db.transaction(['objectStore_380', 'objectStore_418', 'objectStore_396', 'objectStore_404', 'objectStore_386'], 'readonly', {durability:"default"})
    var objectStore_396 = txn_81.objectStore('objectStore_396');
    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_81.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_82 = db.transaction(['objectStore_386', 'objectStore_385', 'objectStore_416'], 'readwrite', {durability:"relaxed"})
    var objectStore_385 = txn_82.objectStore('objectStore_385');
    var add_2 = objectStore_385.add({f0_h: '<null>', f1_k: '<object>', f2_l: '<string>', f3_o: '<string>'}, 'LHhVQEpFF');
    var getAllKeys_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('LHhVQEpFF', 'LHhVQEpFF', false, false);
        getAllKeys_2 = objectStore_385.getAllKeys(KeyRange_10, 426388636);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('LHhVQEpFF');
        getAllKeys_2 = objectStore_385.getAllKeys(KeyRange_11);
    }

    var count_2 = objectStore_385.count();
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('LHhVQEpFF', 'LHhVQEpFF', false, false);
        count_3 = objectStore_385.count(KeyRange_12);
    }
    catch (e){
    }

    var put_3 = objectStore_385.put({f0_g: '<string>', f1_g: '<null>', f2_h: '<string>', f3_k: '<object>', f4_q: '<null>', f5_v: '<array>', f6_q: '<null>', f7_m: '<string>', f8_f: '<string>', f9_p: '<boolean>'}, 'eawTcao');
    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('eawTcao', 'eawTcao', false, false);
        count_4 = objectStore_385.count(KeyRange_14);
    }
    catch (e){
    }

    var put_4 = objectStore_385.put({f0_b: '<string>', f1_h: '<null>', f2_t: '<object>', f3_m: '<array>', f4_l: '<number>', f5_e: '<string>', f6_u: '<number>', f7_x: '<object>'}, 'IwSKXiYt');
    var add_3 = objectStore_385.add({f0_g: '<array>', f1_i: '<object>', f2_r: '<number>', f3_h: '<array>', f4_k: '<string>', f5_h: '<null>', f6_k: '<string>', f7_d: '<object>'}, 'pcFmLncJs');
    var add_4 = objectStore_385.add({f0_h: '<boolean>', f1_m: '<string>', f2_z: '<boolean>', f3_x: '<string>', f4_h: '<null>', f5_o: '<boolean>', f6_q: '<number>'}, 'dGUUrPjPtsj');
    var put_5 = objectStore_385.put({f0_a: '<array>', f1_t: '<object>', f2_g: '<boolean>', f3_b: '<array>', f4_b: '<boolean>', f5_f: '<array>', f6_b: '<boolean>'}, 'GHExBNY');
    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('pcFmLncJs', 'IwSKXiYt', true, true);
        get_2 = objectStore_385.get(KeyRange_16);
    }
    catch (e){
    }

    var put_6 = objectStore_385.put({f0_b: '<array>', f1_a: '<null>', f2_g: '<null>', f3_o: '<object>', f4_h: '<object>', f5_y: '<array>', f6_n: '<number>', f7_f: '<boolean>', f8_x: '<array>', f9_v: '<string>'}, 'PUVe');
    var getAll_0 = objectStore_385.getAll(2641881193);
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.only('LHhVQEpFF');
        delete_0 = objectStore_385.delete(KeyRange_18);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('LHhVQEpFF', false);
        delete_1 = objectStore_385.delete(KeyRange_20);
    }
    catch (e){
    }

    var clear_1 = objectStore_385.clear();
    var getAllKeys_3 = objectStore_385.getAllKeys();
    var add_5 = objectStore_385.add({f0_c: '<null>', f1_u: '<string>', f2_g: '<string>', f3_t: '<object>', f4_q: '<null>', f5_l: '<string>'}, 'wlWcbr');
    var count_5 = objectStore_385.count();
    var put_7 = objectStore_385.put({f0_w: '<null>', f1_o: '<number>', f2_v: '<boolean>'}, 'jFYbZ');
    txn_82.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_82.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_82.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_83 = db.transaction(['objectStore_396'], 'readwrite', {durability:"default"})
    var objectStore_396 = txn_83.objectStore('objectStore_396');
    var clear_2 = objectStore_396.clear();
    var index_0 = objectStore_396.index('index_380');
    var add_6 = objectStore_396.add({f0_d: '<array>', f1_n: '<null>', f2_r: '<string>', f3_d: '<number>', f4_f: '<boolean>'}, 'eOzLbdETzBx');
    var put_8 = objectStore_396.put({f0_b: '<boolean>', f1_f: '<number>', f2_j: '<array>', f3_h: '<string>', f4_m: '<string>', f5_w: '<boolean>'}, 'BKrzjEEBQliD');
    var count_6 = objectStore_396.count();
    var add_7 = objectStore_396.add({f0_g: '<object>', f1_t: '<array>', f2_f: '<null>', f3_h: '<boolean>'}, 'BjZpNGpZGN');
    var add_8 = objectStore_396.add({f0_g: '<null>'}, 'IxnplbnvIf');
    var clear_3 = objectStore_396.clear();
    var clear_4 = objectStore_396.clear();
    var put_9 = objectStore_396.put({f0_m: '<string>', f1_u: '<boolean>', f2_v: '<number>', f3_l: '<array>', f4_b: '<boolean>', f5_n: '<boolean>', f6_o: '<string>', f7_l: '<string>', f8_y: '<boolean>'}, 'wtBvQhjSj');
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('IxnplbnvIf', true);
        get_3 = objectStore_396.get(KeyRange_22);
    }
    catch (e){
    }

    var clear_5 = objectStore_396.clear();
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('eOzLbdETzBx', false);
        get_4 = objectStore_396.get(KeyRange_24);
    }
    catch (e){
    }

    var count_7 = objectStore_396.count();
    var count_8;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('BjZpNGpZGN', false);
        count_8 = objectStore_396.count(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('BjZpNGpZGN', true);
        get_5 = objectStore_396.get(KeyRange_28);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_30 = IDBKeyRange.only('eOzLbdETzBx');
        count_9 = objectStore_396.count(KeyRange_30);
    }
    catch (e){
    }

    var add_9 = objectStore_396.add({f0_f: '<null>', f1_b: '<array>'}, 'oAv');
    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_83.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_83.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_84 = db.transaction(['objectStore_411', 'objectStore_415'], 'readwrite', {durability:"default"})
    var objectStore_415 = txn_84.objectStore('objectStore_415');
    var add_10 = objectStore_415.add({f0_u: '<object>', f1_v: '<null>', f2_n: '<string>', f3_w: '<boolean>', f4_b: '<string>', f5_o: '<number>', f6_b: '<array>'}, 'NKFNN');
    var put_10 = objectStore_415.put({f0_r: '<boolean>', f1_x: '<boolean>', f2_o: '<object>', f3_b: '<string>', f4_m: '<number>', f5_q: '<boolean>', f6_i: '<number>'}, 'ELBDHOXKMahk');
    var add_11 = objectStore_415.add({f0_e: '<number>'}, 'ajf');
    var getAllKeys_4 = objectStore_415.getAllKeys();
    var clear_6 = objectStore_415.clear();
    var clear_7 = objectStore_415.clear();
    var put_11 = objectStore_415.put({f0_q: '<number>', f1_d: '<string>', f2_h: '<null>', f3_n: '<boolean>', f4_h: '<number>', f5_t: '<number>', f6_x: '<string>'}, 'PTE');
    var getAll_1 = objectStore_415.getAll();
    var clear_8 = objectStore_415.clear();
    var clear_9 = objectStore_415.clear();
    var count_10;
    try{
        KeyRange_32 = IDBKeyRange.only('ELBDHOXKMahk');
        count_10 = objectStore_415.count(KeyRange_32);
    }
    catch (e){
    }

    var count_11 = objectStore_415.count();
    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('PTE', 'ELBDHOXKMahk', false, false);
        get_6 = objectStore_415.get(KeyRange_34);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.only('PTE');
        get_7 = objectStore_415.get(KeyRange_36);
    }
    catch (e){
    }

    var put_12 = objectStore_415.put({f0_g: '<number>', f1_e: '<string>', f2_e: '<array>', f3_o: '<string>', f4_w: '<null>', f5_e: '<object>', f6_f: '<string>', f7_g: '<array>', f8_r: '<object>'}, 'QckUkreDK');
    var get_8;
    try{
        KeyRange_38 = IDBKeyRange.only('ajf');
        get_8 = objectStore_415.get(KeyRange_38);
    }
    catch (e){
    }

    var clear_10 = objectStore_415.clear();
    var clear_11 = objectStore_415.clear();
    var count_12;
    try{
        KeyRange_40 = IDBKeyRange.only('NKFNN');
        count_12 = objectStore_415.count(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('ajf', false);
        get_9 = objectStore_415.get(KeyRange_42);
    }
    catch (e){
    }

    var put_13 = objectStore_415.put({f0_k: '<string>', f1_m: '<null>', f2_l: '<object>', f3_i: '<boolean>', f4_d: '<object>'}, 'wEEgjYDwSFG');
    txn_84.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_84.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_85 = db.transaction(['objectStore_419'], 'readwrite', {durability:"relaxed"})
    var objectStore_419 = txn_85.objectStore('objectStore_419');
    var put_14 = objectStore_419.put({f0_e: '<number>', f1_f: '<array>', f2_w: '<null>', f3_v: '<string>', f4_i: '<object>', f5_z: '<array>', f6_y: '<string>', f7_t: '<object>', f8_i: '<null>', f9_k: '<array>'}, 'rMc');
    var put_15 = objectStore_419.put({f0_u: '<null>', f1_e: '<string>', f2_s: '<number>', f3_b: '<object>', f4_f: '<array>', f5_a: '<number>', f6_u: '<object>', f7_w: '<number>', f8_e: '<number>'}, 'JFHgRLVrZrd');
    var clear_12 = objectStore_419.clear();
    var count_13;
    try{
        KeyRange_44 = IDBKeyRange.bound('JFHgRLVrZrd', 'JFHgRLVrZrd', true, true);
        count_13 = objectStore_419.count(KeyRange_44);
    }
    catch (e){
    }

    var add_12 = objectStore_419.add({f0_m: '<string>'}, 'Qmvec');
    var clear_13 = objectStore_419.clear();
    var put_16 = objectStore_419.put({f0_f: '<string>', f1_z: '<string>', f2_u: '<array>', f3_i: '<array>', f4_s: '<boolean>'}, 'TuQTyHJVIJsk');
    var count_14 = objectStore_419.count();
    var getAll_2;
    try{
        KeyRange_46 = IDBKeyRange.only('rMc');
        getAll_2 = objectStore_419.getAll(KeyRange_46, 120328246);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('JFHgRLVrZrd');
        getAll_2 = objectStore_419.getAll(KeyRange_47);
    }

    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.bound('JFHgRLVrZrd', 'TuQTyHJVIJsk', false, true);
        get_10 = objectStore_419.get(KeyRange_48);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_50 = IDBKeyRange.only('Qmvec');
        count_15 = objectStore_419.count(KeyRange_50);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_52 = IDBKeyRange.only('rMc');
        get_11 = objectStore_419.get(KeyRange_52);
    }
    catch (e){
    }

    var put_17 = objectStore_419.put({f0_s: '<array>', f1_u: '<object>', f2_f: '<boolean>', f3_f: '<boolean>', f4_y: '<array>', f5_q: '<array>', f6_e: '<null>'}, 'mVav');
    var get_12;
    try{
        KeyRange_54 = IDBKeyRange.only('rMc');
        get_12 = objectStore_419.get(KeyRange_54);
    }
    catch (e){
    }

    var count_16 = objectStore_419.count();
    var add_13 = objectStore_419.add({f0_k: '<null>', f1_q: '<boolean>', f2_x: '<boolean>', f3_e: '<string>'}, 'WqOw');
    txn_85.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_85.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_85.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_86 = db.transaction(['objectStore_392'], 'readonly', {durability:"relaxed"})
    var objectStore_392 = txn_86.objectStore('objectStore_392');
    txn_86.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_86.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_86.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_87 = db.transaction(['objectStore_397', 'objectStore_410', 'objectStore_408', 'objectStore_416', 'objectStore_405'], 'readonly', {durability:"default"})
    var objectStore_416 = txn_87.objectStore('objectStore_416');
    txn_87.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_87.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_87.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_88 = db.transaction(['objectStore_419', 'objectStore_390', 'objectStore_388', 'objectStore_409'], 'readonly', {durability:"relaxed"})
    var objectStore_419 = txn_88.objectStore('objectStore_419');
    var get_13;
    try{
        KeyRange_56 = IDBKeyRange.bound('Qmvec', 'mVav', true, true);
        get_13 = objectStore_419.get(KeyRange_56);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_58 = IDBKeyRange.only('WqOw');
        count_17 = objectStore_419.count(KeyRange_58);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_60 = IDBKeyRange.bound('JFHgRLVrZrd', 'Qmvec', false, true);
        count_18 = objectStore_419.count(KeyRange_60);
    }
    catch (e){
    }

    var count_19 = objectStore_419.count();
    var count_20 = objectStore_419.count();
    var count_21 = objectStore_419.count();
    var count_22 = objectStore_419.count();
    var getAllKeys_5;
    try{
        KeyRange_62 = IDBKeyRange.only('TuQTyHJVIJsk');
        getAllKeys_5 = objectStore_419.getAllKeys(KeyRange_62);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('TuQTyHJVIJsk');
        getAllKeys_5 = objectStore_419.getAllKeys(KeyRange_63);
    }

    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.bound('TuQTyHJVIJsk', 'JFHgRLVrZrd', false, true);
        get_14 = objectStore_419.get(KeyRange_64);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('rMc', true);
        get_15 = objectStore_419.get(KeyRange_66);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_68 = IDBKeyRange.only('Qmvec');
        getAll_3 = objectStore_419.getAll(KeyRange_68);
    }
    catch (e){
        KeyRange_69 = IDBKeyRange.only('rMc');
        getAll_3 = objectStore_419.getAll(KeyRange_69);
    }

    var getAll_4;
    try{
        KeyRange_70 = IDBKeyRange.bound('rMc', 'WqOw', true, true);
        getAll_4 = objectStore_419.getAll(KeyRange_70, 2667502046);
    }
    catch (e){
        KeyRange_71 = IDBKeyRange.only('rMc');
        getAll_4 = objectStore_419.getAll(KeyRange_71);
    }

    var count_23 = objectStore_419.count();
    var getAllKeys_6;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('TuQTyHJVIJsk', false);
        getAllKeys_6 = objectStore_419.getAllKeys(KeyRange_72, 3962827912);
    }
    catch (e){
        KeyRange_73 = IDBKeyRange.only('mVav');
        getAllKeys_6 = objectStore_419.getAllKeys(KeyRange_73);
    }

    var count_24 = objectStore_419.count();
    txn_88.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_88.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_88.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_89 = db.transaction(['objectStore_418'], 'readwrite', {durability:"default"})
    var objectStore_418 = txn_89.objectStore('objectStore_418');
    var add_14 = objectStore_418.add({f0_o: '<boolean>', f1_i: '<string>', f2_f: '<null>', f3_z: '<array>', f4_f: '<boolean>', f5_d: '<number>', f6_w: '<boolean>', f7_p: '<array>', f8_v: '<array>', f9_s: '<object>'}, 'ixrOfFkJ');
    var delete_2;
    try{
        KeyRange_74 = IDBKeyRange.bound('ixrOfFkJ', 'ixrOfFkJ', false, false);
        delete_2 = objectStore_418.delete(KeyRange_74);
    }
    catch (e){
    }

    var put_18 = objectStore_418.put({f0_m: '<number>', f1_w: '<array>'}, 'tNmDi');
    var put_19 = objectStore_418.put({f0_h: '<number>', f1_u: '<array>', f2_u: '<boolean>'}, 'frcQ');
    var put_20 = objectStore_418.put({f0_q: '<boolean>', f1_t: '<object>'}, 'kFHe');
    var clear_14 = objectStore_418.clear();
    var delete_3;
    try{
        KeyRange_76 = IDBKeyRange.bound('ixrOfFkJ', 'kFHe', true, false);
        delete_3 = objectStore_418.delete(KeyRange_76);
    }
    catch (e){
    }

    var add_15 = objectStore_418.add({f0_u: '<null>', f1_d: '<null>', f2_o: '<array>', f3_k: '<object>'}, 'qIbdUcTJNEyp');
    var get_16;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('ixrOfFkJ', true);
        get_16 = objectStore_418.get(KeyRange_78);
    }
    catch (e){
    }

    var add_16 = objectStore_418.add({f0_p: '<string>', f1_p: '<null>', f2_y: '<object>'}, 'xclg');
    var count_25 = objectStore_418.count();
    var get_17;
    try{
        KeyRange_80 = IDBKeyRange.lowerBound('ixrOfFkJ', false);
        get_17 = objectStore_418.get(KeyRange_80);
    }
    catch (e){
    }

    var add_17 = objectStore_418.add({f0_o: '<string>', f1_j: '<string>', f2_s: '<object>'}, 'JgBtTGTGn');
    var add_18 = objectStore_418.add({f0_a: '<number>', f1_i: '<array>', f2_q: '<object>', f3_m: '<object>', f4_h: '<array>', f5_k: '<number>', f6_t: '<boolean>'}, 'MsEdn');
    var add_19 = objectStore_418.add({f0_s: '<array>', f1_i: '<null>', f2_i: '<boolean>', f3_x: '<object>', f4_r: '<array>', f5_i: '<array>', f6_v: '<null>', f7_b: '<object>'}, 'SQwVOXBTsk');
    var delete_4;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('MsEdn', false);
        delete_4 = objectStore_418.delete(KeyRange_82);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_84 = IDBKeyRange.only('MsEdn');
        count_26 = objectStore_418.count(KeyRange_84);
    }
    catch (e){
    }

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