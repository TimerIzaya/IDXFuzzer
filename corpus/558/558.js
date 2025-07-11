let db;
const openRequest = window.indexedDB.open('str_800', 1559247227419261)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3287', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_i: '<null>', f1_a: '<number>', f2_i: '<boolean>', f3_h: '<array>', f4_v: '<string>', f5_m: '<object>', f6_m: '<array>', f7_g: '<object>', f8_b: '<object>'}, 'wFPfmkhlYlHhKnxssDzPGDdJPdTLMoVJSdclaHESxLbbToWTJXQezmsWnmXzKgiixQJTwmWsFtVagbbXgeaTvDeOseyLUeOckBThEiHHAFolWbnJBGIWcxGBcZkbNuwcTzyombxQjCDXQwUJiLkREMYsnSKAANRrjyzGaUsCukNkYGZIPgIoqBpCWKkkKqNMMfoHrUwBGvjyKJcgONyPjLmtICiiWLXaGEzORllJiEqYYdpIFRZWPDmKTXLKgVbLOkySFmoYbUiscxmzwVoAOoMJHCasAdNVlePkTAJWVJNmslTxpNVCjyAIndsiCnBMZaff');
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3288');
    var getAllKeys_0 = objectStore_0.getAllKeys();
    db.deleteObjectStore('objectStore_3287')
    var index_2224 = objectStore_1.createIndex('index_2224', 'test', {multiEntry: false});
    var clear_4 = objectStore_1.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4930 = db.transaction(['objectStore_3288'], 'readonly', {durability:"relaxed"})
    var objectStore_3288 = txn_4930.objectStore('objectStore_3288');
    var index_0 = objectStore_3288.index('index_2224');
    txn_4930.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4930.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4930.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4931 = db.transaction(['objectStore_3288'], 'readonly', {durability:"relaxed"})
    var objectStore_3288 = txn_4931.objectStore('objectStore_3288');
    txn_4931.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4931.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4931.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4932 = db.transaction(['objectStore_3288'], 'readonly', {durability:"default"})
    var objectStore_3288 = txn_4932.objectStore('objectStore_3288');
    txn_4932.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4932.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4932.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4933 = db.transaction(['objectStore_3288'], 'readonly', {durability:"relaxed"})
    var objectStore_3288 = txn_4933.objectStore('objectStore_3288');
    txn_4933.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4933.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4933.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4934 = db.transaction(['objectStore_3288'], 'readonly', {durability:"strict"})
    var objectStore_3288 = txn_4934.objectStore('objectStore_3288');
    txn_4934.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4934.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4934.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9464')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};