let db;
const openRequest = window.indexedDB.open('str_1697', 219018101045680)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_93', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_v: '<null>', f1_u: '<boolean>'}, 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_59 = objectStore_0.createIndex('index_59', 'test', {unique: false, multiEntry: true});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_59');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        get_2 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_94');
    var add_0 = objectStore_1.add({f0_p: '<boolean>', f1_u: '<object>', f2_g: '<object>'}, 'bplQhxeOSXtyTykvHXzkhgcjyScsOLIZp');
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.only('bplQhxeOSXtyTykvHXzkhgcjyScsOLIZp');
        count_0 = objectStore_1.count(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        getAll_0 = objectStore_0.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_0 = objectStore_0.getAll(KeyRange_9);
    }

    var index_1 = objectStore_0.index('index_59');
    var index_60 = objectStore_0.createIndex('index_60', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_94')
    var clear_1 = objectStore_0.clear();
    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_10, 2515171308);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_11);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_125 = db.transaction(['objectStore_93'], 'readonly', {durability:"strict"})
    var objectStore_93 = txn_125.objectStore('objectStore_93');
    var count_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, false);
        count_1 = objectStore_93.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, false);
        getAllKeys_1 = objectStore_93.getAllKeys(KeyRange_14, 4069252140);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_1 = objectStore_93.getAllKeys(KeyRange_15);
    }

    var count_2 = objectStore_93.count();
    var getAllKeys_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        getAllKeys_2 = objectStore_93.getAllKeys(KeyRange_16, 3771002981);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_2 = objectStore_93.getAllKeys(KeyRange_17);
    }

    var getAllKeys_3 = objectStore_93.getAllKeys(1133592342);
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        get_3 = objectStore_93.get(KeyRange_18);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        get_4 = objectStore_93.get(KeyRange_20);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, false);
        getAll_1 = objectStore_93.getAll(KeyRange_22, 1171912139);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_1 = objectStore_93.getAll(KeyRange_23);
    }

    var getAllKeys_4;
    try{
        KeyRange_24 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_4 = objectStore_93.getAllKeys(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_4 = objectStore_93.getAllKeys(KeyRange_25);
    }

    txn_125.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_125.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_125.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_126 = db.transaction(['objectStore_93'], 'readonly', {durability:"default"})
    var objectStore_93 = txn_126.objectStore('objectStore_93');
    var getAllKeys_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false);
        getAllKeys_5 = objectStore_93.getAllKeys(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAllKeys_5 = objectStore_93.getAllKeys(KeyRange_27);
    }

    var count_3 = objectStore_93.count();
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        get_5 = objectStore_93.get(KeyRange_28);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        getAll_2 = objectStore_93.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_2 = objectStore_93.getAll(KeyRange_31);
    }

    var getAll_3;
    try{
        KeyRange_32 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, false);
        getAll_3 = objectStore_93.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_3 = objectStore_93.getAll(KeyRange_33);
    }

    var getAllKeys_6 = objectStore_93.getAllKeys(707946647);
    var getAllKeys_7 = objectStore_93.getAllKeys();
    var index_2 = objectStore_93.index('index_59');
    var getAll_4;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false);
        getAll_4 = objectStore_93.getAll(KeyRange_34, 3074090446);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_4 = objectStore_93.getAll(KeyRange_35);
    }

    var getAll_5;
    try{
        KeyRange_36 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        getAll_5 = objectStore_93.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_5 = objectStore_93.getAll(KeyRange_37);
    }

    var get_6;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false);
        get_6 = objectStore_93.get(KeyRange_38);
    }
    catch (e){
    }

    txn_126.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_126.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_126.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_127 = db.transaction(['objectStore_93'], 'readonly', {durability:"relaxed"})
    var objectStore_93 = txn_127.objectStore('objectStore_93');
    var count_4 = objectStore_93.count();
    var count_5;
    try{
        KeyRange_40 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        count_5 = objectStore_93.count(KeyRange_40);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        get_7 = objectStore_93.get(KeyRange_42);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_44 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false);
        getAll_6 = objectStore_93.getAll(KeyRange_44, 1028532001);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_6 = objectStore_93.getAll(KeyRange_45);
    }

    var getAll_7;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false);
        getAll_7 = objectStore_93.getAll(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        getAll_7 = objectStore_93.getAll(KeyRange_47);
    }

    var getAllKeys_8 = objectStore_93.getAllKeys(254629052);
    var getAll_8 = objectStore_93.getAll();
    var get_8;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true);
        get_8 = objectStore_93.get(KeyRange_48);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_50 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        count_6 = objectStore_93.count(KeyRange_50);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_52 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, false);
        count_7 = objectStore_93.count(KeyRange_52);
    }
    catch (e){
    }

    txn_127.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_127.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_127.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_128 = db.transaction(['objectStore_93'], 'readonly', {durability:"default"})
    var objectStore_93 = txn_128.objectStore('objectStore_93');
    var count_8;
    try{
        KeyRange_54 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        count_8 = objectStore_93.count(KeyRange_54);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_56 = IDBKeyRange.only('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF');
        count_9 = objectStore_93.count(KeyRange_56);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_58 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        get_9 = objectStore_93.get(KeyRange_58);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_60 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, true);
        get_10 = objectStore_93.get(KeyRange_60);
    }
    catch (e){
    }

    var index_3 = objectStore_93.index('index_59');
    var count_10;
    try{
        KeyRange_62 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', false, false);
        count_10 = objectStore_93.count(KeyRange_62);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true);
        count_11 = objectStore_93.count(KeyRange_64);
    }
    catch (e){
    }

    var index_4 = objectStore_93.index('index_59');
    var getAll_9 = objectStore_93.getAll();
    txn_128.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_128.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_128.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_129 = db.transaction(['objectStore_93'], 'readwrite', {durability:"default"})
    var objectStore_93 = txn_129.objectStore('objectStore_93');
    var get_11;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true);
        get_11 = objectStore_93.get(KeyRange_66);
    }
    catch (e){
    }

    var count_12 = objectStore_93.count();
    var clear_2 = objectStore_93.clear();
    var delete_0;
    try{
        KeyRange_68 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        delete_0 = objectStore_93.delete(KeyRange_68);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_70 = IDBKeyRange.bound('KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', 'KddMnbFHpqbwzxvrdDWKomThrlzHWbOwuNBwBHYjwfZHQmDsuuLTpyksF', true, true);
        delete_1 = objectStore_93.delete(KeyRange_70);
    }
    catch (e){
    }

    var clear_3 = objectStore_93.clear();
    var add_1 = objectStore_93.add({f0_u: '<array>', f1_q: '<null>', f2_l: '<null>', f3_a: '<array>'}, 'RHGChZDvDrBKStdQFXaOJWQWSguGBOiApCwhLixdmsAyxnhepFLuZIxnVcWXLUDbuRhLwzliKEGCyJuGtcAogeOoOZx');
    var add_2 = objectStore_93.add({f0_d: '<null>', f1_n: '<null>', f2_g: '<string>', f3_k: '<object>', f4_r: '<object>'}, 'CQpslzqzOpBgaAwmQkGYYGmnPWzzghXqDDBUkrNtcVfKXnEVWtKKxeRLDgEcgBMtKXykNsPfYzTxDONMUyRJkYypnE');
    var put_1 = objectStore_93.put({f0_f: '<object>', f1_c: '<object>', f2_y: '<array>', f3_n: '<number>', f4_a: '<number>', f5_h: '<array>', f6_q: '<null>', f7_x: '<string>'}, 'fufPikSMHpEQaCrPYuv');
    txn_129.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_129.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_129.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6094')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};