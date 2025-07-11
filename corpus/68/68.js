let db;
const openRequest = window.indexedDB.open('str_6377', 6016015906385143)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_351');
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_352', {autoIncrement: false});
    var put_0 = objectStore_1.put({f0_g: '<null>', f1_k: '<array>', f2_e: '<null>', f3_z: '<string>', f4_g: '<string>'}, 'XfTcHQMNLHipVibDxWUYcaFkIgoLzligoNvLvaqSJaSaCymgzXJjbcKntqKijcgMIKyGIadePBAMCUWMRzXNKjlYPuJnlKKomgcxtsUuNVDdmtUWVlmWfQjHYFLtCDIfHgtjRPdCHyTTzCMWyTsNFqPuXTtRWeXEleaFEcUSSXWBXifTjNffabpIqDccMnVJaVJRljKUuLwonxMOUDtllkziVstfDypRLnBwFIYJCzJwWEqkWNgSHITiklwVZACBaiESqCeCluisgEtvrmgZgxpyiHkOlWlvOSbWLEoMvqWEOmLCLYznGIZUEPbYNsWvHzYgayLFpOXyRQMBoHgqxRBkEiqIieBmUdcLRGjhtGePvyqmJecbHgGvgNzrWNSwlJZsXvsbziAxSJsvVGugxlReGxSYvEJRVzvVVTKGceDwAFYecdgSQoiiLdZkoOhmAtmesImxNBgBwAmBLGAKWJzuRZqfmYuWvvGspBkYZpfnFfUNCRCvBGfapYSEPakNzlfGMvUSSkzquEWpZlFvjGCgbsMxycBiOgnloeYAemTEkVgJYHAjkmfbvJmIARaaMUrkFcXEkpmLpztKEWrioLEKYeERKLDVOXCSXrMfRr');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('XfTcHQMNLHipVibDxWUYcaFkIgoLzligoNvLvaqSJaSaCymgzXJjbcKntqKijcgMIKyGIadePBAMCUWMRzXNKjlYPuJnlKKomgcxtsUuNVDdmtUWVlmWfQjHYFLtCDIfHgtjRPdCHyTTzCMWyTsNFqPuXTtRWeXEleaFEcUSSXWBXifTjNffabpIqDccMnVJaVJRljKUuLwonxMOUDtllkziVstfDypRLnBwFIYJCzJwWEqkWNgSHITiklwVZACBaiESqCeCluisgEtvrmgZgxpyiHkOlWlvOSbWLEoMvqWEOmLCLYznGIZUEPbYNsWvHzYgayLFpOXyRQMBoHgqxRBkEiqIieBmUdcLRGjhtGePvyqmJecbHgGvgNzrWNSwlJZsXvsbziAxSJsvVGugxlReGxSYvEJRVzvVVTKGceDwAFYecdgSQoiiLdZkoOhmAtmesImxNBgBwAmBLGAKWJzuRZqfmYuWvvGspBkYZpfnFfUNCRCvBGfapYSEPakNzlfGMvUSSkzquEWpZlFvjGCgbsMxycBiOgnloeYAemTEkVgJYHAjkmfbvJmIARaaMUrkFcXEkpmLpztKEWrioLEKYeERKLDVOXCSXrMfRr', true);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var index_230 = objectStore_0.createIndex('index_230', 'test', {multiEntry: false});
    var clear_1 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_353');
    var put_1 = objectStore_1.put({f0_r: '<number>', f1_t: '<null>', f2_t: '<null>', f3_y: '<null>', f4_b: '<object>', f5_l: '<null>', f6_s: '<array>', f7_n: '<array>', f8_k: '<array>'}, 'XzuQhkYSDCXhRmWrbKUlOvgeGVzsYovDKzGxpDGFEhQqHGmEeqCyoQXuMVBMmvNpNEZILlwGzenqQWiBjdFgORFzQxCKqAgJdqrvgrdoRVyqJcSfMoshyIAarzqwoQVNdXMtdZNUfNMksNsENycUoNklHEjZqEsvIlYcKXOvKRVAIMdWdoaeZubBEMXRTeFAZAZkcIbOIagkimZkKSILWKJqgWxgFjSToyVWQxSEoxZUJLAgaNvJkNgnGNyLPVgZKKsbgPugkgnfkFrcAWVcfCASLzGRuYffvGcvOtjtHaWXKZqqVwVFRUiPfbozRdpboHiEGnbAvGLhMqQXGmPTqifuxtNHeDFoRVnySrXBVXKnacrsUqJQHcStJCxxRRGlBlGmvjpWSvOkCATuufuRAKu');
    var index_231 = objectStore_0.createIndex('index_231', 'test', {unique: false, multiEntry: true});
    var index_232 = objectStore_1.createIndex('index_232', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_515 = db.transaction(['objectStore_353', 'objectStore_352'], 'readonly', {durability:"default"})
    var objectStore_353 = txn_515.objectStore('objectStore_353');
    txn_515.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_515.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_515.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_516 = db.transaction(['objectStore_351'], 'readonly', {durability:"strict"})
    var objectStore_351 = txn_516.objectStore('objectStore_351');
    var index_0 = objectStore_351.index('index_230');
    txn_516.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_516.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_516.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_517 = db.transaction(['objectStore_351'], 'readwrite', {durability:"relaxed"})
    var objectStore_351 = txn_517.objectStore('objectStore_351');
    var clear_2 = objectStore_351.clear();
    var put_2 = objectStore_351.put({f0_r: '<number>', f1_b: '<boolean>', f2_d: '<object>', f3_g: '<boolean>', f4_m: '<object>', f5_n: '<array>'}, 'qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT');
    txn_517.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_517.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_517.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_518 = db.transaction(['objectStore_353'], 'readonly', {durability:"default"})
    var objectStore_353 = txn_518.objectStore('objectStore_353');
    txn_518.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_518.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_518.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_519 = db.transaction(['objectStore_352', 'objectStore_351', 'objectStore_353'], 'readonly', {durability:"default"})
    var objectStore_351 = txn_519.objectStore('objectStore_351');
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', false);
        count_0 = objectStore_351.count(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_351.getAllKeys();
    var index_1 = objectStore_351.index('index_230');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', false);
        count_1 = objectStore_351.count(KeyRange_4);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_6 = IDBKeyRange.only('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT');
        getAllKeys_1 = objectStore_351.getAllKeys(KeyRange_6, 3348563042);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT');
        getAllKeys_1 = objectStore_351.getAllKeys(KeyRange_7);
    }

    var index_2 = objectStore_351.index('index_230');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', false);
        get_1 = objectStore_351.get(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', true);
        get_2 = objectStore_351.get(KeyRange_10);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', true);
        get_3 = objectStore_351.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_351.getAllKeys(3370367532);
    var count_2 = objectStore_351.count();
    var getAllKeys_3;
    try{
        KeyRange_14 = IDBKeyRange.only('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT');
        getAllKeys_3 = objectStore_351.getAllKeys(KeyRange_14, 3879974634);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT');
        getAllKeys_3 = objectStore_351.getAllKeys(KeyRange_15);
    }

    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', 'qcjEvkdGwteYHydRbUbhyYHuxHhWrLdqiyTUpdZLuAKQuICxVJCJhmzhkVLWdRYvAMimRfwGpVMHwEyzxTZmYOyGkuNxQcvSnthvDVsSwjJnzTFtkwmgLTmNKImvIJBlWYTsHwWJHFaoqazzNSvzwYpZKwLUuOxnuwGsMvQEHsAQrkidgbQCqxsItOtBFQBDHZxfDKTTDGhRwgzQSKsQcKRaORYSsmUxHdtkAPBzbXYhylLaJozKTvYjGyGdvxIXNgJZwYqhudSJkZchRhnArdbBynhoeyAJcQWbOLJcSQbzIsCUilJuwEZavFPFyQWdusFyrPJrKIhFbdzFBXaEWckZwugGBYXnacygfgHrxQMHsZkoVWqSzmgZCDDcxFUFluhobKdWOyNTJRzTkBAJlzDvbxFGeMouyZqzHBHKjfpnpQdIkhjnVqWWYnfFUkpSkzzmayqQmCJvIqSIbDsPbDdxPJmTfOKICGfvlsMfCVRtwERhFgtBdCOHJuGfAIrYPVbWIlLirnNCnuqogbGWrLT', false, true);
        count_3 = objectStore_351.count(KeyRange_16);
    }
    catch (e){
    }

    var count_4 = objectStore_351.count();
    txn_519.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_519.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_519.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6398')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};