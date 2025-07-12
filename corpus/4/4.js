let db;
const openRequest = window.indexedDB.open('str_1325', 820800421858156)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_17', {keypath: 'ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu.nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY.GFxOfiBToHLRBswl'});
    var objectStore_1 = db.createObjectStore('objectStore_18', {autoIncrement: true});
    var index_14 = objectStore_1.createIndex('index_14', 'test');
    var clear_0 = objectStore_1.clear();
    var index_0 = objectStore_1.index('index_14');
    var objectStore_2 = db.createObjectStore('objectStore_19', {keypath: 'NxmNMkrihkeBiZROatuHmdtczFtRoqbdSkYGJffobARFinCOoIwpEHtxHDPnXhvYgVlQXITYYhXh', autoIncrement: true});
    var put_0 = objectStore_1.put({f0_t: '<array>', f1_g: '<array>', f2_s: '<number>', f3_v: '<array>'}, 'FQYshiKTP');
    var index_1 = objectStore_1.index('index_14');
    var clear_1 = objectStore_1.clear();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('FQYshiKTP', 'FQYshiKTP', true, true);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_c: '<boolean>', f1_m: '<null>', f2_n: '<boolean>', f3_b: '<array>', f4_c: '<null>', f5_e: '<boolean>', f6_t: '<string>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: 91}}});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_25 = db.transaction(['objectStore_17'], 'readwrite', {durability:"default"})
    var objectStore_17 = txn_25.objectStore('objectStore_17');
    var add_0 = objectStore_17.add({f0_n: '<string>', f1_b: '<boolean>', f2_k: '<boolean>', f3_c: '<object>', f4_g: '<null>', f5_j: '<number>', f6_o: '<array>', f7_h: '<array>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: true}}});
    var add_1 = objectStore_17.add({f0_s: '<number>', f1_l: '<number>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: false}}});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound(false, 91, false, true);
        count_0 = objectStore_17.count(KeyRange_2);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound(true, false);
        count_1 = objectStore_17.count(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_17.add({f0_m: '<number>', f1_p: '<object>', f2_x: '<array>', f3_t: '<string>', f4_f: '<string>', f5_q: '<null>', f6_n: '<string>', f7_b: '<null>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: false}}});
    var getAllKeys_0 = objectStore_17.getAllKeys(1232904088);
    var clear_2 = objectStore_17.clear();
    txn_25.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_25.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_25.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_26 = db.transaction(['objectStore_17', 'objectStore_19'], 'readonly', {durability:"relaxed"})
    var objectStore_17 = txn_26.objectStore('objectStore_17');
    var count_2;
    try{
        KeyRange_6 = IDBKeyRange.bound(false, 91, false, true);
        count_2 = objectStore_17.count(KeyRange_6);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_8 = IDBKeyRange.bound(91, true, true, true);
        get_0 = objectStore_17.get(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound(true, false, true, true);
        get_1 = objectStore_17.get(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound(false, 91, false, false);
        get_2 = objectStore_17.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound(false, 91, true, true);
        getAllKeys_1 = objectStore_17.getAllKeys(KeyRange_14, 1764564117);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only(91);
        getAllKeys_1 = objectStore_17.getAllKeys(KeyRange_15);
    }

    var count_3 = objectStore_17.count();
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound(false, 91, true, false);
        count_4 = objectStore_17.count(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_17.getAllKeys();
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.bound(false, 91, true, false);
        count_5 = objectStore_17.count(KeyRange_18);
    }
    catch (e){
    }

    txn_26.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_26.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_26.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_27 = db.transaction(['objectStore_19'], 'readwrite', {durability:"default"})
    var objectStore_19 = txn_27.objectStore('objectStore_19');
    var add_3 = objectStore_19.add({f0_f: '<null>', f1_n: '<array>', f2_k: '<string>', f3_t: '<array>', f4_h: '<object>', f5_i: '<boolean>', f6_m: '<object>', f7_d: '<array>', NxmNMkrihkeBiZROatuHmdtczFtRoqbdSkYGJffobARFinCOoIwpEHtxHDPnXhvYgVlQXITYYhXh: null});
    txn_27.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_27.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_27.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_28 = db.transaction(['objectStore_19'], 'readwrite', {durability:"default"})
    var objectStore_19 = txn_28.objectStore('objectStore_19');
    var count_6;
    try{
        KeyRange_20 = IDBKeyRange.only(null);
        count_6 = objectStore_19.count(KeyRange_20);
    }
    catch (e){
    }

    var put_2 = objectStore_19.put({f0_p: '<null>', NxmNMkrihkeBiZROatuHmdtczFtRoqbdSkYGJffobARFinCOoIwpEHtxHDPnXhvYgVlQXITYYhXh: null});
    var count_7;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound(null, false);
        count_7 = objectStore_19.count(KeyRange_22);
    }
    catch (e){
    }

    var clear_3 = objectStore_19.clear();
    var getAll_0;
    try{
        KeyRange_24 = IDBKeyRange.only(null);
        getAll_0 = objectStore_19.getAll(KeyRange_24, 834485052);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only(null);
        getAll_0 = objectStore_19.getAll(KeyRange_25);
    }

    var getAllKeys_3 = objectStore_19.getAllKeys(2255592279);
    var count_8 = objectStore_19.count();
    txn_28.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_28.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_28.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_29 = db.transaction(['objectStore_17', 'objectStore_19'], 'readwrite', {durability:"strict"})
    var objectStore_17 = txn_29.objectStore('objectStore_17');
    var get_3;
    try{
        KeyRange_26 = IDBKeyRange.bound(91, false, true, true);
        get_3 = objectStore_17.get(KeyRange_26);
    }
    catch (e){
    }

    var count_9 = objectStore_17.count();
    var add_4 = objectStore_17.add({f0_a: '<null>', f1_m: '<string>', f2_c: '<number>', f3_t: '<number>', f4_z: '<null>', f5_i: '<boolean>', f6_e: '<boolean>', f7_e: '<number>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: true}}});
    var add_5 = objectStore_17.add({f0_h: '<array>', f1_v: '<number>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: 'RefEPzUrOKcTHgKjryOwNUJRLPzMIEyBxHISBVdhBYyamrOIclhwdSCgprFvSsMUhxMHvTkujUartexfn'}}});
    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.bound(91, 91, false, true);
        get_4 = objectStore_17.get(KeyRange_28);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('RefEPzUrOKcTHgKjryOwNUJRLPzMIEyBxHISBVdhBYyamrOIclhwdSCgprFvSsMUhxMHvTkujUartexfn', true);
        delete_1 = objectStore_17.delete(KeyRange_30);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('RefEPzUrOKcTHgKjryOwNUJRLPzMIEyBxHISBVdhBYyamrOIclhwdSCgprFvSsMUhxMHvTkujUartexfn', 91, true, true);
        count_10 = objectStore_17.count(KeyRange_32);
    }
    catch (e){
    }

    var put_3 = objectStore_17.put({f0_e: '<boolean>', f1_f: '<object>', f2_d: '<number>', f3_h: '<boolean>', f4_x: '<object>', f5_b: '<string>', f6_s: '<array>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: 'iGxACxVLuwR'}}});
    var put_4 = objectStore_17.put({f0_l: '<string>', f1_w: '<object>', f2_f: '<boolean>', f3_g: '<string>', f4_m: '<number>', f5_o: '<null>', ZQXUcoBwhbmHiZRlbCFpxNwRjTxIvbdovCGvAoAyKwYQOLCkWChwuWkyiRmIRueu: {nVAYTOKxHfrKdBKTRAKUCmRlUQOZzdMY: {GFxOfiBToHLRBswl: 24}}});
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
const deleteRequest = indexedDB.deleteDatabase('str_7868')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};