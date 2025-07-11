let db;
const openRequest = window.indexedDB.open('str_5957', 5841411340966759)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_56');
    var add_0 = objectStore_0.add({f0_h: '<number>', f1_p: '<array>', f2_f: '<string>', f3_y: '<object>', f4_n: '<object>', f5_q: '<array>', f6_w: '<array>'}, 'NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', 'NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', true, false);
        getAll_0 = objectStore_0.getAll(KeyRange_0, 2077966214);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', 'NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', false, true);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var index_31 = objectStore_0.createIndex('index_31', 'test', {unique: true, multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_57');
    var add_1 = objectStore_1.add({f0_a: '<array>', f1_a: '<null>', f2_a: '<number>', f3_l: '<number>', f4_a: '<array>', f5_r: '<array>', f6_r: '<null>', f7_g: '<string>', f8_a: '<string>'}, 'AzLjeGYRUOErZxhhXFPCCeP');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', 'NTGJfnfKptpflpQCyhoTAhmJIPZdCyGLyDoDwxEOcQoBcHhsgdduwunIVydgxhGzElbLPror', false, true);
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_e: '<boolean>', f1_p: '<boolean>', f2_p: '<null>'}, 'BXZYvvXdhNSIMgQSJbwxKFHgtpHPZWYuLLgDuZyMvexVrAKkWWNgcyszjnwfvLpkBkXpX');
    var put_1 = objectStore_1.put({f0_b: '<boolean>', f1_z: '<boolean>', f2_p: '<object>', f3_l: '<string>', f4_z: '<object>', f5_u: '<boolean>'}, 'YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg');
    var clear_0 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_56')
    var getAll_1 = objectStore_1.getAll(3186525654);
    var add_2 = objectStore_1.add({f0_z: '<boolean>', f1_a: '<boolean>', f2_m: '<null>', f3_z: '<string>', f4_a: '<string>', f5_b: '<object>', f6_v: '<object>', f7_t: '<number>'}, 'YiqxGZLWHHhzBjPHztvCbgHORqw');
    var clear_1 = objectStore_1.clear();
    var index_32 = objectStore_1.createIndex('index_32', 'test');
    var count_1 = objectStore_1.count();
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', false);
        delete_0 = objectStore_1.delete(KeyRange_6);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_65 = db.transaction(['objectStore_57'], 'readwrite', {durability:"relaxed"})
    var objectStore_57 = txn_65.objectStore('objectStore_57');
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('AzLjeGYRUOErZxhhXFPCCeP', false);
        getAllKeys_0 = objectStore_57.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('AzLjeGYRUOErZxhhXFPCCeP');
        getAllKeys_0 = objectStore_57.getAllKeys(KeyRange_9);
    }

    var clear_2 = objectStore_57.clear();
    var clear_3 = objectStore_57.clear();
    var put_2 = objectStore_57.put({f0_c: '<array>', f1_e: '<array>'}, 'ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf');
    var put_3 = objectStore_57.put({f0_s: '<array>', f1_y: '<null>', f2_q: '<number>', f3_c: '<boolean>', f4_c: '<boolean>', f5_k: '<object>', f6_l: '<null>', f7_z: '<number>', f8_z: '<string>'}, 'PucVmenGKlrjyZZudMIVLgz');
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf', 'ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf', true, true);
        get_1 = objectStore_57.get(KeyRange_10);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.only('PucVmenGKlrjyZZudMIVLgz');
        delete_1 = objectStore_57.delete(KeyRange_12);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf', 'PucVmenGKlrjyZZudMIVLgz', false, true);
        get_2 = objectStore_57.get(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('YiqxGZLWHHhzBjPHztvCbgHORqw', 'PucVmenGKlrjyZZudMIVLgz', false, true);
        get_3 = objectStore_57.get(KeyRange_16);
    }
    catch (e){
    }

    txn_65.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_65.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_65.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_66 = db.transaction(['objectStore_57'], 'readonly', {durability:"relaxed"})
    var objectStore_57 = txn_66.objectStore('objectStore_57');
    var count_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', 'YiqxGZLWHHhzBjPHztvCbgHORqw', true, false);
        count_2 = objectStore_57.count(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_57.getAllKeys(2047636558);
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('PucVmenGKlrjyZZudMIVLgz', 'AzLjeGYRUOErZxhhXFPCCeP', true, true);
        get_4 = objectStore_57.get(KeyRange_20);
    }
    catch (e){
    }

    var count_3 = objectStore_57.count();
    var count_4;
    try{
        KeyRange_22 = IDBKeyRange.only('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg');
        count_4 = objectStore_57.count(KeyRange_22);
    }
    catch (e){
    }

    var count_5 = objectStore_57.count();
    txn_66.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_66.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_66.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_67 = db.transaction(['objectStore_57'], 'readonly', {durability:"strict"})
    var objectStore_57 = txn_67.objectStore('objectStore_57');
    var count_6 = objectStore_57.count();
    var getAll_2;
    try{
        KeyRange_24 = IDBKeyRange.only('AzLjeGYRUOErZxhhXFPCCeP');
        getAll_2 = objectStore_57.getAll(KeyRange_24, 310216099);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('YiqxGZLWHHhzBjPHztvCbgHORqw');
        getAll_2 = objectStore_57.getAll(KeyRange_25);
    }

    var count_7 = objectStore_57.count();
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('YiqxGZLWHHhzBjPHztvCbgHORqw', false);
        get_5 = objectStore_57.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', false);
        getAll_3 = objectStore_57.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('PucVmenGKlrjyZZudMIVLgz');
        getAll_3 = objectStore_57.getAll(KeyRange_29);
    }

    var getAllKeys_2 = objectStore_57.getAllKeys(1984931831);
    var getAllKeys_3 = objectStore_57.getAllKeys(3892119000);
    var count_8;
    try{
        KeyRange_30 = IDBKeyRange.only('AzLjeGYRUOErZxhhXFPCCeP');
        count_8 = objectStore_57.count(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('AzLjeGYRUOErZxhhXFPCCeP', false);
        getAllKeys_4 = objectStore_57.getAllKeys(KeyRange_32, 1213440222);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('YiqxGZLWHHhzBjPHztvCbgHORqw');
        getAllKeys_4 = objectStore_57.getAllKeys(KeyRange_33);
    }

    var count_9 = objectStore_57.count();
    txn_67.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_67.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_67.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_68 = db.transaction(['objectStore_57'], 'readonly', {durability:"relaxed"})
    var objectStore_57 = txn_68.objectStore('objectStore_57');
    var count_10;
    try{
        KeyRange_34 = IDBKeyRange.only('PucVmenGKlrjyZZudMIVLgz');
        count_10 = objectStore_57.count(KeyRange_34);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.only('AzLjeGYRUOErZxhhXFPCCeP');
        get_6 = objectStore_57.get(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_57.getAllKeys();
    var getAll_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', 'ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf', false, false);
        getAll_4 = objectStore_57.getAll(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg');
        getAll_4 = objectStore_57.getAll(KeyRange_39);
    }

    var count_11 = objectStore_57.count();
    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.bound('AzLjeGYRUOErZxhhXFPCCeP', 'YiqxGZLWHHhzBjPHztvCbgHORqw', false, true);
        get_7 = objectStore_57.get(KeyRange_40);
    }
    catch (e){
    }

    var count_12 = objectStore_57.count();
    var getAllKeys_6 = objectStore_57.getAllKeys();
    txn_68.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_68.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_68.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_69 = db.transaction(['objectStore_57'], 'readwrite', {durability:"relaxed"})
    var objectStore_57 = txn_69.objectStore('objectStore_57');
    var add_3 = objectStore_57.add({f0_s: '<number>', f1_j: '<object>'}, 'pMcCDjVqJKNalZinUkoScHjakRloZrQoAcjlComGTgZCXWHAkLthbDMGVkfNpmQVdfDNF');
    var getAll_5;
    try{
        KeyRange_42 = IDBKeyRange.bound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', 'YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', false, true);
        getAll_5 = objectStore_57.getAll(KeyRange_42, 136709188);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg');
        getAll_5 = objectStore_57.getAll(KeyRange_43);
    }

    var clear_4 = objectStore_57.clear();
    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('YWcTjfKydKpGDnVMGHmmBcAZmEYLPdQkvPqfbINISRcDWg', true);
        get_8 = objectStore_57.get(KeyRange_44);
    }
    catch (e){
    }

    var getAll_6 = objectStore_57.getAll(1698691791);
    var add_4 = objectStore_57.add({f0_o: '<boolean>', f1_v: '<null>', f2_t: '<number>', f3_b: '<boolean>', f4_l: '<null>', f5_z: '<number>', f6_z: '<object>'}, 'tSBtfJmvxPWyVUHHfnvOhUUqNvrqRrGFlTevKjwrBzgeDcvFgyMzPSiOtIGnrgeQNuylMBUiHH');
    var clear_5 = objectStore_57.clear();
    var get_9;
    try{
        KeyRange_46 = IDBKeyRange.bound('tSBtfJmvxPWyVUHHfnvOhUUqNvrqRrGFlTevKjwrBzgeDcvFgyMzPSiOtIGnrgeQNuylMBUiHH', 'ubTezTyvDSMVskYaiOsziPMouKKEbKCATEIChKhSCMgAUQMcAvrAGIHzWJdmf', true, true);
        get_9 = objectStore_57.get(KeyRange_46);
    }
    catch (e){
    }

    var add_5 = objectStore_57.add({f0_g: '<array>'}, 'UUSXZcnlfHOUFloeduRSrabkbwzKPMkorrRxuugcvwmuHezb');
    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.only('AzLjeGYRUOErZxhhXFPCCeP');
        get_10 = objectStore_57.get(KeyRange_48);
    }
    catch (e){
    }

    txn_69.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_69.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_69.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1656')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};