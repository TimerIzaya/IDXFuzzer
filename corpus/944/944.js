let db;
const openRequest = window.indexedDB.open('str_5382', 3414256336678102)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5616', {keypath: 'txdHwmNHLUZkEOjnpxlCtvpxVXIpZhHLNjrStCJpttkUuMbVAlcANKjQCyKbBxeOiIRXylQmuUFCryyHHtGklHCnIXsMAcyMFNEcKoqqLXPidafbQDXMtEPJCBDjLGbSoruWgYNXKSpJMvhIXJJqOhoNUjNdRPcEmodhhjpyQHjEsNrGJrbDwVeuOsFZEplNVlxScpVZTRWBOoWGDJJikfUoGrjqkFpfetoiaoWPvDgoATtaftBYZZaCxZrktJHtqTEpdjNRULKYMvePWqSCHVoZUNiNmuIpqXSFPxUxuntmbfddkQbJhfeGDBvrqLtHXuLDAFWfIgdXUWPjmQLAQovuPBFiDIgAxCkwihfKDcSUuNECfepYpDPcKkkoCKFlBnPkBkrqkFyqXOYklEDqnBxtqUNQkrPaqdXvpyoODOhMRcwRgGTgzawESSjkEWKCMobUieZnPQVFARaLzkQRIGxriQtFPUAamBbNeJEyoFecUCmpAdKoISshZysXCuPfHGSPqjnYIlVrgUlgJZncMoMHMbpOYYKpFBoSrfNQFTylHpuhkLXPAvXQeEPFFSEFJwaLubiHfvRhGYTZpRESDXZEEgwYusfJCXiZJFPXBDcuhVqwPSdRsliKCJqhYDybtJk'});
    var index_3746 = objectStore_0.createIndex('index_3746', 'test');
    var index_3747 = objectStore_0.createIndex('index_3747', 'test', {unique: false, multiEntry: false});
    var index_3748 = objectStore_0.createIndex('index_3748', 'test');
    var index_0 = objectStore_0.index('index_3748');
    objectStore_0.deleteIndex('index_3748')
    var index_3749 = objectStore_0.createIndex('index_3749', 'test');
    var clear_0 = objectStore_0.clear();
    var index_3750 = objectStore_0.createIndex('index_3750', 'test', {unique: false});
    var index_3751 = objectStore_0.createIndex('index_3751', 'test');
    var index_3752 = objectStore_0.createIndex('index_3752', 'test', {unique: false, multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_5617');
    var put_0 = objectStore_1.put({f0_s: '<null>', f1_y: '<string>', f2_k: '<object>', f3_n: '<string>', f4_w: '<object>', f5_l: '<boolean>', f6_c: '<array>', f7_y: '<object>'}, 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
    var put_1 = objectStore_0.put({f0_q: '<number>', f1_i: '<array>', f2_l: '<null>'}, 'WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL');
    var count_0 = objectStore_0.count();
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', true);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0, 4218700579);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
        delete_0 = objectStore_1.delete(KeyRange_2);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8460 = db.transaction(['objectStore_5617'], 'readonly', {durability:"relaxed"})
    var objectStore_5617 = txn_8460.objectStore('objectStore_5617');
    var count_1 = objectStore_5617.count();
    var count_2 = objectStore_5617.count();
    var count_3 = objectStore_5617.count();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', true, true);
        get_0 = objectStore_5617.get(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
        get_1 = objectStore_5617.get(KeyRange_6);
    }
    catch (e){
    }

    var count_4 = objectStore_5617.count();
    var count_5 = objectStore_5617.count();
    var getAllKeys_1 = objectStore_5617.getAllKeys(1071099695);
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', true);
        get_2 = objectStore_5617.get(KeyRange_8);
    }
    catch (e){
    }

    txn_8460.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8460.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8460.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8461 = db.transaction(['objectStore_5616', 'objectStore_5617'], 'readwrite', {durability:"relaxed"})
    var objectStore_5616 = txn_8461.objectStore('objectStore_5616');
    var index_1 = objectStore_5616.index('index_3749');
    var clear_1 = objectStore_5616.clear();
    txn_8461.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8461.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8461.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8462 = db.transaction(['objectStore_5616'], 'readonly', {durability:"strict"})
    var objectStore_5616 = txn_8462.objectStore('objectStore_5616');
    var getAllKeys_2 = objectStore_5616.getAllKeys();
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', 'WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', true, false);
        get_3 = objectStore_5616.get(KeyRange_10);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_12 = IDBKeyRange.only('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL');
        count_6 = objectStore_5616.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_5616.getAllKeys(2736850259);
    var getAll_0;
    try{
        KeyRange_14 = IDBKeyRange.bound('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', 'WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', true, false);
        getAll_0 = objectStore_5616.getAll(KeyRange_14, 956004281);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL');
        getAll_0 = objectStore_5616.getAll(KeyRange_15);
    }

    var count_7;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('WXcogYYJvzmvTVKFkOoIRLaYebawPrxaFShhIfuhTNhxACWPwxcOGPSoFYsOpoLRIQhXXCFUyTWqfMDikRSzDDjeSTKsRCZVpjVgSkVbNVeqjPbLzrmoGhSDBpfCZgroVwxeiwaYaevBkQyynsucIgDMUweEZAUpMBlYWvvnXbchIYrrYhlMsvWWNABRJVxLthlzhMWL', false);
        count_7 = objectStore_5616.count(KeyRange_16);
    }
    catch (e){
    }

    txn_8462.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8462.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8462.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8463 = db.transaction(['objectStore_5616', 'objectStore_5617'], 'readonly', {durability:"default"})
    var objectStore_5617 = txn_8463.objectStore('objectStore_5617');
    var getAllKeys_4 = objectStore_5617.getAllKeys(3623051470);
    var count_8;
    try{
        KeyRange_18 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, false);
        count_8 = objectStore_5617.count(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_5617.getAllKeys();
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', true, false);
        get_4 = objectStore_5617.get(KeyRange_20);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_22 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, false);
        count_9 = objectStore_5617.count(KeyRange_22);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, false);
        get_5 = objectStore_5617.get(KeyRange_24);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.only('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
        get_6 = objectStore_5617.get(KeyRange_26);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_28 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, true);
        count_10 = objectStore_5617.count(KeyRange_28);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', true, true);
        get_7 = objectStore_5617.get(KeyRange_30);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_32 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, false);
        getAll_1 = objectStore_5617.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
        getAll_1 = objectStore_5617.getAll(KeyRange_33);
    }

    var count_11 = objectStore_5617.count();
    var get_8;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false);
        get_8 = objectStore_5617.get(KeyRange_34);
    }
    catch (e){
    }

    txn_8463.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8463.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8463.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8464 = db.transaction(['objectStore_5617'], 'readwrite', {durability:"strict"})
    var objectStore_5617 = txn_8464.objectStore('objectStore_5617');
    var count_12;
    try{
        KeyRange_36 = IDBKeyRange.bound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', 'fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false, true);
        count_12 = objectStore_5617.count(KeyRange_36);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_38 = IDBKeyRange.only('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe');
        count_13 = objectStore_5617.count(KeyRange_38);
    }
    catch (e){
    }

    var count_14 = objectStore_5617.count();
    var delete_1;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('fbqoXahAYUdAnlIBPptpXuBSGKVlwfrBLBoTkLvGcAPQccTPyIDVVZEGGLrCsrdoVAiyoakjcHVQxivgxeizObBmPqgorSXgjtOwWExxkEolDIRUDnKrWFMiinrZqRSAXguAYPxbHotytzQECcBrkHzNyPJITibBqMBKVSoEStNUVoicAAvpofftBTNZGYebQhJUNqe', false);
        delete_1 = objectStore_5617.delete(KeyRange_40);
    }
    catch (e){
    }

    var add_0 = objectStore_5617.add({f0_r: '<string>', f1_c: '<number>', f2_h: '<null>', f3_a: '<object>', f4_n: '<string>', f5_h: '<null>', f6_s: '<number>', f7_q: '<string>'}, 'UCJGnivovreFtxSkYHeZzZokYwTDtHKZsOSyTdgiBcgemlhPfFyqDJjuoNJFwiDKeLhCjpktkaEAHzjQLkgZONsADWeFGyxLSDGheXSqnzIMMIPCDNxEwchmNxXoPoswjLGwWfcvqmHNMsuWkQWMHnzsFuPfqWQOeVjhrcIqmxiJvfyKixCgdAJInAJlVyxqrsMUXZeHQUszTKbEFhIBBYNYxwrgHMKNKbTeZrFLAYqfJChJcAPlqQPmaxAkiEoOdfGEpCtzbhzuzirbxwsVkGjmEJOQtWjUlQlnCCFNpDlVwSDyQjkjOyEzuOEggIgKibioaoFPLvacjlDveBQrdbydrpJklNBPHioKenYwtjIBPOvxzigUTdYxbQFCcsACtfCCrMYbtWEfJsXxsPBzjCXwqHVOnLSqQXSvVOwAfqCWMKlLhXUTwOWZoVvXcdBeLUKWpKgOouMUiHKzDJemtfMVZDkwDoCJsgduYovAiJJsJvzAddqeDmutslGnWJaDylPJCUNnWBrHuLHbfGqDFCUkFuLUbLkaAZIJZMWnJrYsWrXJlECOZEcHdSWtWsuFytcbEmfydahBbKEeKLoaROndNtvXJDnnvZoCnFVGlPbQzFiAvGQRYmHAyMqBnbcqVtxxPdXlGwLiHFOJcvnzyJvIrXFvGAgonltrlQWTvBBCAGFPBbZrShKHuymzyTJdDaUuckNcCNpcaCWcnFjpxRCbsApxgxudhvIezQBeMbrEtCqHgENyGUlJTLMyPheZcmeMnmsYswIeojMyTmuHqyxgPqPccvOmrZTtdMkVHHMMfQAPQUfmRQvwNVgbKBXKOEgPbqTthdoCUoYTx');
    var put_2 = objectStore_5617.put({f0_j: '<null>', f1_s: '<null>', f2_y: '<string>', f3_q: '<number>', f4_d: '<null>', f5_h: '<string>', f6_u: '<boolean>', f7_g: '<boolean>', f8_z: '<string>', f9_v: '<object>'}, 'tudQCjXUdwMCVjCPxBgJIGXCcpKiDLxfbrChZAAOZpNOvqIjZPEZDwchcrqZRrTVrGHqRHwlZvVbhUxGhWKGZVquEvNgzpQGVknxowMsfKaVbXqeGrJMVmtkqSRfuwxRSAMqGjknGAyVhUiHbgsjpjMnQpgWdqKAGFdjMSWkhxTLsOZfZTlfkTlLCIxyhtWnfVrYjOxtVRpGzAHWIkkWhqPnFBEPUkRBgJqeqvvnhfxbMAEulvAmJhkxFGnRSQunqeScuiTRMTLZSIGLjfhvRkFOHGpBUyJMleeHyLQJMpaAoVJQeQmWWvtdcerbKpSdaXoqlcVgybqVYKGbiwaRTfuVmzmilyBHVohhKbdEkUoSAvuKLOquFssBoQPhXXjHzrmbLuBCoDcChoDgnkAKihxQGEPBRwPVjGAjfuEJGAblsgjbfmpxCZHaZSYPMDWBrccAhcxljsBhNgtfuEMUaWmzQWMLfQpAirPkMKqQTXFQIKbbwiwyHmJOmIBVRKqwVyZckDmYDtgbGZWtapVkLXuatDmLddfxbNbtkNFBREIekrmucLynCIkyOaDDwGZgIfOVQBMtPdVLvbLBNMREXddEfezXBrUFpdumfAJPerqgqHZzucdKLkJvyRZNvroHiqjZjNcZyCRDZvBORjtFPYddHkrQIpOaBhazuZNNrrWqznStoDaSzDaSoxssWtIpArcDEFODzwMNrKTVw');
    var add_1 = objectStore_5617.add({f0_b: '<array>', f1_h: '<string>', f2_v: '<number>', f3_s: '<number>', f4_f: '<null>', f5_v: '<array>', f6_q: '<string>'}, 'auDZSmUQdEFVjdZnFRvUeDkANzOtOKTLXSwdGwiCQSuaoiABUhxEkbwsUZvnrasxjBRaeKNDUdstYQnpaAUIAdFKxYZXZWnFwLHKvrBOqsKNNTThIjdlRGVhqRCYkTg');
    txn_8464.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8464.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8464.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3252')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};