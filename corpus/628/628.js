let db;
const openRequest = window.indexedDB.open('str_5387', 572394294895169)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3783', {keypath: 'SKJZhtYosuaSItyyXXqzYfpUlBmksucricqfbLZEaANMwdcXBrsGWGHXzIpKuUYAogGAMcgabDsVQjCNCivCWpdzItVQydWgjdmdPoTWgfUbEStISbKjOUlVjOiCdEBSfWxqppkKFLNTCuljtHQtcFdLOTKuEkYwIFIOUjFvlQUMHVWiTpFZHyGiIylnRHmRIzioCBzZgmagtVFeAFsYAofpyZwiKxDZIQaXUhaikPpAkBnumUbogZLDdtfNcBqLLJqqzlkbtrcWKdqFCZBqWUxudrqayJahArvoFllMZrNVZXtyKLOLqurAuqjZSjTzBMKvKKaECRmTQfHfcnYIxKurcDYifQzqkKQiurrWpyaWOzfMHThMUlznziyOoneFHwdHahIEvzfhWIFHWTcCrPkrCwqyLvsFVJnRNhNTrrIXaGKxPdzjTPeTKemfwaRqfjfSykrtVgPEBeVjEzUHUKTdwsTpLOJiHhIKbgnDmDoWoMMeaAVPcMGMkVsjxsjQNlsnCjpCiHoYzTCsuindVNRZPXRcYRIrzYkZjSosTMMXKgwppsdLfdyYjfhCyVrjjzBGxNXSgCmZoBKruFGzMrRZppqfVlfFWOaKnBChpmMzroYyoHkConbaAYLAYQMzbaJmljjIuDCNhHtWQdQzHzOvCmSQdodpbtuoUdisiJgSkcRdNozZRBDsMaMryZhIhdyitfxPbGGqaRyRrqXtAskYTriHuBkLPHPdRYKVMUCASAbyvnjcqwXuVjeYSGkzrkBHUCbjMoGKBQczOUmkNCNrvnSXbJftdEaAiIjeXIsuDFnNypyAvxqkTB'});
    var objectStore_1 = db.createObjectStore('objectStore_3784', {autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_3785');
    var index_2531 = objectStore_2.createIndex('index_2531', 'test', {unique: false, multiEntry: false});
    var clear_0 = objectStore_2.clear();
    var index_2532 = objectStore_2.createIndex('index_2532', 'test');
    var index_2533 = objectStore_1.createIndex('index_2533', 'test', {unique: true});
    db.deleteObjectStore('objectStore_3783')
    var index_2534 = objectStore_2.createIndex('index_2534', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5645 = db.transaction(['objectStore_3785'], 'readonly', {durability:"default"})
    var objectStore_3785 = txn_5645.objectStore('objectStore_3785');
    var index_0 = objectStore_3785.index('index_2532');
    txn_5645.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5645.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5645.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5646 = db.transaction(['objectStore_3784'], 'readonly', {durability:"relaxed"})
    var objectStore_3784 = txn_5646.objectStore('objectStore_3784');
    txn_5646.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5646.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5646.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5647 = db.transaction(['objectStore_3785', 'objectStore_3784'], 'readonly', {durability:"default"})
    var objectStore_3784 = txn_5647.objectStore('objectStore_3784');
    txn_5647.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5647.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5647.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5648 = db.transaction(['objectStore_3785'], 'readonly', {durability:"relaxed"})
    var objectStore_3785 = txn_5648.objectStore('objectStore_3785');
    var index_1 = objectStore_3785.index('index_2531');
    txn_5648.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5648.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5648.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5649 = db.transaction(['objectStore_3785'], 'readwrite', {durability:"strict"})
    var objectStore_3785 = txn_5649.objectStore('objectStore_3785');
    var clear_1 = objectStore_3785.clear();
    var add_0 = objectStore_3785.add({f0_h: '<boolean>', f1_i: '<string>', f2_k: '<null>', f3_t: '<number>', f4_k: '<object>', f5_v: '<object>', f6_x: '<object>', f7_i: '<number>', f8_p: '<array>'}, 'jIeIRJUwgTUCYHWjhXVOqMXIqCPpSrEKAruhycSsDBTOskkHxAzLTkBbFGwLEZdMnqBHKHZqSucCbVWiMmUQbpewZIGnJTzztITaoNqtqqRwiShhqXALrHjufgDClgxUytkXmRSeVvHGMOgBnJawPQoCHOhjejRzaCSrdBKaUQvkyHKpNPZwGOXfBIomsXqgwtQtRmWJeaPCtvyDLjdDDbBWJhvPtERcKkkXerAGmdzIaLrCNCACclXyELQDaRmnVsnyYaPXQMxYMVayZbJFxfyNjMGRFVCDtJxiHSRrRHXGfhUgRFXinGhJCDBpSNrxsrXGFucfpNmdSwjajApUodQLXhnkrvGzqdMjDWmZLVPZmGYksbsRghLPjMvOFFtslcQRgnrJEsbjKPVNHWKbkUjPGnETDgCGaunwSfUYTBUsFTavuycryjmKSPzXyquOemJEMenhisFkNVexFKUklzZuIfJROwYNnLKDyZnEEPdaKfljTPERApakKdsjtSieUIZaEnfmUSOoAJbzUnCNGVvsngmiFGIeqoIBvfsfxraUgKchhySimgddzEbWQeXOOoxCOAImaFdDMBogVscgpWJylPESTqFNhUJJIRgEDsWMDyIYMRZgiMLETmGrXrLVtLKyqEjyXdocQINAgmEAcJvslZRlSjehaypnvsqfSRTWpSoZIvmoZtOofVAaVSsbZBgNSVLhJyYVIYYtZqEbmlIzXXaQjTtMZSlEFmyEPpNqUtLKcAPtYIjBtPJBVhalBTPVGZfDuymEybehISEyBaxXFAquqjVevnhhMCqFDSqWFZJUYfeOoNKDpDdTBKjwRHsaJTyaYAvhEEsuLroFMfBZNiEecfVvhNbhTxwczUaWIPiwLFFnXDMdamqgFSptivbowPtfEIjODuHCPqerVHXskUjIYUiMvUpbGvdMNYRSXRQkXGbuLnjujzQ');
    var add_1 = objectStore_3785.add({f0_k: '<string>', f1_t: '<number>', f2_f: '<object>', f3_s: '<string>', f4_g: '<null>', f5_v: '<string>', f6_b: '<array>', f7_r: '<string>', f8_s: '<number>', f9_r: '<null>'}, 'uwhgYjbXKOlObBtBCvWDcBdtyJZrulufrOPvFLncqHHYssksYoMCaPrwlxqnuhRZQKkzviAixzLonmANRmOpPBfvFziAKEPMlbZLUjRFoaHKQDkaEcWuLAwFlZJjyNMFOaUmjPuALHeyNQsvPbtCKdnHxKMBBwkmoelpUMWjWRTxkhHVElgPUaRqEfLpbNVDjdJqlbIUgWBZJRSAQdpgfSPzNvKBscyFrxVPNYbBvvhtdOjUaqErNvnXHZJRMohTTcFWqmYGEWthdXcfrXsZBFwhVlDfPqNTsiDVwIOuMbEuZRzxCXylohxSskFtMJcjeitwsawRrGwMlilIqXllnEEpxeSRsXbfLODbcNKFPSXZJrOgPhCDMlydqmQruFZiWBhceCYJqZfYLLKgpZXNpidtpKIbPctOWOKBqTGhHezDVDkAUAsmRNnOecgdJVNLnDPyKYolTeBsmYXQygQDQrneIZWYuKzgEbFXyERTDKGZMkWmNgEArnYJzXoMkMSWQjbsTeTWNruJdoPcGDbyGlWEYFDFAtpWYheoDiolWLPrIVtGeLzCRXuGsuCSigMPLMvISqqJkOXpnCbhnqwtKIHODSnECIYTuTqJnrqqBrWpIHzUuClGhCzOeWNlcPwySajgGFckhSSwORArLOBUFUVTjJpOnyNbNbHeulyVQEQbewhBJVhVGzsYhntjtqbsCxmDEtXVIGOrMooHtwIBNBAnJDBYSWXpIXLchQcdDYfxADymuJkyMbnbrOqFQTHwyXAokhrYkwoWCkeuPByaMGcWXTRWePHGPXgGZHKelkjvKJTnmkxWPFaIeUEMSJvNaYwAZNtPGnuHopkSdIXqEWeVVwCfvplhURpwHUIhVqGkXeDxNZactwyBmcAfvMFmxNyptcsJBHYVdwqCWVssmLAnkXYWYnqTYwWdqVnZulScuYQztHzJsjdXSLlWmrfgeREUXMsVqTIJNyHbABHHaDcTDcfVamTaM');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('jIeIRJUwgTUCYHWjhXVOqMXIqCPpSrEKAruhycSsDBTOskkHxAzLTkBbFGwLEZdMnqBHKHZqSucCbVWiMmUQbpewZIGnJTzztITaoNqtqqRwiShhqXALrHjufgDClgxUytkXmRSeVvHGMOgBnJawPQoCHOhjejRzaCSrdBKaUQvkyHKpNPZwGOXfBIomsXqgwtQtRmWJeaPCtvyDLjdDDbBWJhvPtERcKkkXerAGmdzIaLrCNCACclXyELQDaRmnVsnyYaPXQMxYMVayZbJFxfyNjMGRFVCDtJxiHSRrRHXGfhUgRFXinGhJCDBpSNrxsrXGFucfpNmdSwjajApUodQLXhnkrvGzqdMjDWmZLVPZmGYksbsRghLPjMvOFFtslcQRgnrJEsbjKPVNHWKbkUjPGnETDgCGaunwSfUYTBUsFTavuycryjmKSPzXyquOemJEMenhisFkNVexFKUklzZuIfJROwYNnLKDyZnEEPdaKfljTPERApakKdsjtSieUIZaEnfmUSOoAJbzUnCNGVvsngmiFGIeqoIBvfsfxraUgKchhySimgddzEbWQeXOOoxCOAImaFdDMBogVscgpWJylPESTqFNhUJJIRgEDsWMDyIYMRZgiMLETmGrXrLVtLKyqEjyXdocQINAgmEAcJvslZRlSjehaypnvsqfSRTWpSoZIvmoZtOofVAaVSsbZBgNSVLhJyYVIYYtZqEbmlIzXXaQjTtMZSlEFmyEPpNqUtLKcAPtYIjBtPJBVhalBTPVGZfDuymEybehISEyBaxXFAquqjVevnhhMCqFDSqWFZJUYfeOoNKDpDdTBKjwRHsaJTyaYAvhEEsuLroFMfBZNiEecfVvhNbhTxwczUaWIPiwLFFnXDMdamqgFSptivbowPtfEIjODuHCPqerVHXskUjIYUiMvUpbGvdMNYRSXRQkXGbuLnjujzQ');
        count_0 = objectStore_3785.count(KeyRange_0);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('uwhgYjbXKOlObBtBCvWDcBdtyJZrulufrOPvFLncqHHYssksYoMCaPrwlxqnuhRZQKkzviAixzLonmANRmOpPBfvFziAKEPMlbZLUjRFoaHKQDkaEcWuLAwFlZJjyNMFOaUmjPuALHeyNQsvPbtCKdnHxKMBBwkmoelpUMWjWRTxkhHVElgPUaRqEfLpbNVDjdJqlbIUgWBZJRSAQdpgfSPzNvKBscyFrxVPNYbBvvhtdOjUaqErNvnXHZJRMohTTcFWqmYGEWthdXcfrXsZBFwhVlDfPqNTsiDVwIOuMbEuZRzxCXylohxSskFtMJcjeitwsawRrGwMlilIqXllnEEpxeSRsXbfLODbcNKFPSXZJrOgPhCDMlydqmQruFZiWBhceCYJqZfYLLKgpZXNpidtpKIbPctOWOKBqTGhHezDVDkAUAsmRNnOecgdJVNLnDPyKYolTeBsmYXQygQDQrneIZWYuKzgEbFXyERTDKGZMkWmNgEArnYJzXoMkMSWQjbsTeTWNruJdoPcGDbyGlWEYFDFAtpWYheoDiolWLPrIVtGeLzCRXuGsuCSigMPLMvISqqJkOXpnCbhnqwtKIHODSnECIYTuTqJnrqqBrWpIHzUuClGhCzOeWNlcPwySajgGFckhSSwORArLOBUFUVTjJpOnyNbNbHeulyVQEQbewhBJVhVGzsYhntjtqbsCxmDEtXVIGOrMooHtwIBNBAnJDBYSWXpIXLchQcdDYfxADymuJkyMbnbrOqFQTHwyXAokhrYkwoWCkeuPByaMGcWXTRWePHGPXgGZHKelkjvKJTnmkxWPFaIeUEMSJvNaYwAZNtPGnuHopkSdIXqEWeVVwCfvplhURpwHUIhVqGkXeDxNZactwyBmcAfvMFmxNyptcsJBHYVdwqCWVssmLAnkXYWYnqTYwWdqVnZulScuYQztHzJsjdXSLlWmrfgeREUXMsVqTIJNyHbABHHaDcTDcfVamTaM', 'jIeIRJUwgTUCYHWjhXVOqMXIqCPpSrEKAruhycSsDBTOskkHxAzLTkBbFGwLEZdMnqBHKHZqSucCbVWiMmUQbpewZIGnJTzztITaoNqtqqRwiShhqXALrHjufgDClgxUytkXmRSeVvHGMOgBnJawPQoCHOhjejRzaCSrdBKaUQvkyHKpNPZwGOXfBIomsXqgwtQtRmWJeaPCtvyDLjdDDbBWJhvPtERcKkkXerAGmdzIaLrCNCACclXyELQDaRmnVsnyYaPXQMxYMVayZbJFxfyNjMGRFVCDtJxiHSRrRHXGfhUgRFXinGhJCDBpSNrxsrXGFucfpNmdSwjajApUodQLXhnkrvGzqdMjDWmZLVPZmGYksbsRghLPjMvOFFtslcQRgnrJEsbjKPVNHWKbkUjPGnETDgCGaunwSfUYTBUsFTavuycryjmKSPzXyquOemJEMenhisFkNVexFKUklzZuIfJROwYNnLKDyZnEEPdaKfljTPERApakKdsjtSieUIZaEnfmUSOoAJbzUnCNGVvsngmiFGIeqoIBvfsfxraUgKchhySimgddzEbWQeXOOoxCOAImaFdDMBogVscgpWJylPESTqFNhUJJIRgEDsWMDyIYMRZgiMLETmGrXrLVtLKyqEjyXdocQINAgmEAcJvslZRlSjehaypnvsqfSRTWpSoZIvmoZtOofVAaVSsbZBgNSVLhJyYVIYYtZqEbmlIzXXaQjTtMZSlEFmyEPpNqUtLKcAPtYIjBtPJBVhalBTPVGZfDuymEybehISEyBaxXFAquqjVevnhhMCqFDSqWFZJUYfeOoNKDpDdTBKjwRHsaJTyaYAvhEEsuLroFMfBZNiEecfVvhNbhTxwczUaWIPiwLFFnXDMdamqgFSptivbowPtfEIjODuHCPqerVHXskUjIYUiMvUpbGvdMNYRSXRQkXGbuLnjujzQ', false, true);
        count_1 = objectStore_3785.count(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_3785.getAllKeys();
    var getAll_0 = objectStore_3785.getAll();
    txn_5649.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5649.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5649.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7133')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};