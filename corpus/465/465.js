let db;
const openRequest = window.indexedDB.open('str_3409', 2426781923106409)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2747');
    var objectStore_1 = db.createObjectStore('objectStore_2748', {keypath: 'CCOLFFvBTpSnDwQYGmtrARgatjVPeOgOaZUIfzZfSRhNvMHVEfnYLgomnHQItsTsvTWZOPJMJkaqlYjkVNJeMdJZnGJRhvpWPWxVltjbnFzWzkvJQGGFxDWFpkZroKxYbqvYWvogWBSLwtnIQapeyQMEwCZVDQVayvUokrXkzrrGjpBBxLrXwLulojFxTMCBgyGRCYOSaDewxoPdhBZuSpOfLZZuanDjUrKCaMxtsdYlrRxuILrPinKQNANmozFFwUFgGJZOODisWIUaizfCrvQMviqmqIfjZQaprtusvpyZaRvqdJXSkPokVRDtJQsmeCQhQNBiIzDlwNZWWpXtBajcKZkEkjQTxLwyOSxQboiuMSQttfAgWhXQLVGKTzLXJFoDBWsGNNJqvOqvyhJUFxZnKZniOQpSoBGnSePBMmlOYIGcfSeapVcFnUMNcBDWLykuMeVUGxSnvoCtosAqxoesOQhcaQHILzBfODzEVHTwdLirhQTjrtPnhVrNxfshditkqDvILgRaaDiepFyduoyIqWqoBRYSTWaNngYmYYblaIPDzWVDdUxuqUvIRwHpJoDXXVFRcQUTNJAfYEzgwMPAbFtjCUQoHtEJgSUGtgydTpAXbOBtUNWYVIAOwmYnPQNyLNMBpljXdLAIvRGKfiIakPnxrvQXQNLiGEI'});
    var add_0 = objectStore_1.add({f0_w: '<number>', f1_e: '<number>', f2_z: '<string>', f3_h: '<string>', f4_f: '<object>'}, 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
    var count_0 = objectStore_1.count();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, true);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var index_1814 = objectStore_0.createIndex('index_1814', 'test', {multiEntry: true});
    var index_1815 = objectStore_1.createIndex('index_1815', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_2749', {keypath: 'QaFgmFuARSZQvPYZiewvPLyXzNAWkexsqMzhkXuZKWinpCKKnfSHVMqhpEslrFwgVDTpHmqDlCnVuOdjkYCNDfnJoKnvDTLmDCwgjIkVhhFDJGyqLptPcJSPJWsKABtSvamegvrBWCNSREzafCYxAwBoxiAjwjgahJullXTmKmntBdPEgGzJaJHmPxQvtVCQrQfmZXLuqfxXGxypHfqUXxbzVVtFiBAnCBAIyEcTQHubpkGMwnEjEqAPkzjqXOGPjNPOrCDbflKZvJevjOYiBqevZmlJXNgywuMYxZLwdIVXlLovyYGbmnkuKadjIjljGEUqBqPUwsVYGLrJsWqSrhAMRQVNECLTEAAhsjYAGfCrFJcUUszIZHQkYCfvGaAQKHWtZrAQfelVUzpISjweIkkApPAEkvNXFgCVIqLEgMAfbmiBOTpYIMRwzeHcPCwuxAgcFRYFeALGqKpXqvelXXNhDaqZoHeYLEAPVZETbXETxGFpycaxYNQICKFdYLZpMJcejGxLSDEQsISrXdjiDErOShDWaBBtfbMLGJcYIXbEOjQVKDAfGHegjaEUqOvBqsQhvwMyhVxXbxIPDFjTrDBmHNpiTEFigiseIEBBlFYUReaqKjviaQuCngoiLsKuNCIGWVkOoGcXGBAkFsaLnGwRkdydFQByKKVvBTptJSlqEwQgRBXfhWIJYCnDcYhudVuESpBuUJKSpYrwPieVSrhKFOZNwoqGaZFyVDceQdOOnQYloKvjajcWYAYlrgLZelpbfEXTbOfcRlMKQeULIWlmxsxGmwevTBgzGbqkGvjaIkVbVGxMbBvGBcKQCThvEDGBVlRFGUxXYexXiHDlGuYSxsRPawfruzyNjyssuseRjHfcevGXNTBNeDAKqvqUTzxlAJtukZvayFlLYEERQIiQIUDeVoYJUCcGCVDIidDLTYziSxUKnptvMsPjGKzacAeU'});
    var objectStore_3 = db.createObjectStore('objectStore_2750', {keypath: 'KCwjqfzGRBgthmfPFdLLEZjPTDfqqxYiYgXRwKUkZUXvsEOfgjMCDaUEczPyBzlDQfmghbUQjkhnAslsSiPSPwsySFylaNXZGRTKxIyaFocoIcVSHAgNocBzZxNbVAlwGLaLRNAvPiIMkARMkRiyXMAjZdgvvggxOWrZjyTflyJMhMDDOwMobhfEioRDJHfNgQJFmPOGShDCbkrGmtKJtiaUSVHnhCBXDWaOzcOlUFdgYaiEChinDcrnQiNjTnoSHPRoHLcFjTkvQaBUAKXmnBMtVuNabhLLiIPdiwYXPCqtDEXrJpCvhxwJxJSRqyOFjmchFuKSJfZxfdLvbuTmUuXkFhFxbXTcpPfPKuINnWRSijSIeVDVkMtTgtezBTCwlpSSrqwMWdWaYWjANBSUnhZgYwpALtRMTnwRakHXjcoTVceuPyScBgRDfOBFqnzMPkdfPbtwJECdofyHvBuupBCalMvPwMKyhgzpGnykSBXoZbUNTrWNmmXXrYQm', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4095 = db.transaction(['objectStore_2747'], 'readonly', {durability:"relaxed"})
    var objectStore_2747 = txn_4095.objectStore('objectStore_2747');
    var index_0 = objectStore_2747.index('index_1814');
    txn_4095.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4095.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4095.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4096 = db.transaction(['objectStore_2748'], 'readonly', {durability:"relaxed"})
    var objectStore_2748 = txn_4096.objectStore('objectStore_2748');
    var getAllKeys_0 = objectStore_2748.getAllKeys();
    var getAllKeys_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, false);
        getAllKeys_1 = objectStore_2748.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_1 = objectStore_2748.getAllKeys(KeyRange_3);
    }

    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        get_1 = objectStore_2748.get(KeyRange_4);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        get_2 = objectStore_2748.get(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_8 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_2 = objectStore_2748.getAllKeys(KeyRange_8, 587056471);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_2 = objectStore_2748.getAllKeys(KeyRange_9);
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        get_3 = objectStore_2748.get(KeyRange_10);
    }
    catch (e){
    }

    var count_1 = objectStore_2748.count();
    var getAllKeys_3;
    try{
        KeyRange_12 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_3 = objectStore_2748.getAllKeys(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_3 = objectStore_2748.getAllKeys(KeyRange_13);
    }

    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, false);
        get_4 = objectStore_2748.get(KeyRange_14);
    }
    catch (e){
    }

    var count_2 = objectStore_2748.count();
    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', false);
        count_3 = objectStore_2748.count(KeyRange_16);
    }
    catch (e){
    }

    txn_4096.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4096.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4096.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4097 = db.transaction(['objectStore_2748'], 'readonly', {durability:"relaxed"})
    var objectStore_2748 = txn_4097.objectStore('objectStore_2748');
    var getAllKeys_4 = objectStore_2748.getAllKeys();
    var count_4 = objectStore_2748.count();
    var getAllKeys_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, false);
        getAllKeys_5 = objectStore_2748.getAllKeys(KeyRange_18, 3580472270);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_5 = objectStore_2748.getAllKeys(KeyRange_19);
    }

    var count_5 = objectStore_2748.count();
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', false, false);
        get_5 = objectStore_2748.get(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, true);
        getAllKeys_6 = objectStore_2748.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD');
        getAllKeys_6 = objectStore_2748.getAllKeys(KeyRange_23);
    }

    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', false, true);
        get_6 = objectStore_2748.get(KeyRange_24);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', true, true);
        count_6 = objectStore_2748.count(KeyRange_26);
    }
    catch (e){
    }

    var index_1 = objectStore_2748.index('index_1815');
    var count_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', 'IDRQeDjRAoYsuyoudcuWGeeUNJDcilnFCasoNuVJirQEuyUvObTTkJYmYajwyYiCxodTWkDjzESvHgaTygHlpvfdIrmFSQlPfUqSwCHjGjcofQOBHUdiCvcHDeGcuSdOlkiMevDWxTUuFuoHalHozcaoHLhHhaqaPcnSuHmUfSvmVcGpjZfSZKGzickBTAWbhCBanQvtxUkhfxbyMzJINFkiActDhrAMIiCrxyaMHdcgAejUhzpyHejrNYzqcnLxbwgUMAUxmRFvpQeXZIOIVXnfTdEYXSRZPLogJgQfIvexwqoDLBDlAMeLvmxrisrhwdixJqaSTvvTkAlVCcjVnulvZenGpahqpvtSGOITnMeSNGbzUiTgnFMbiZtyICQlSMFoikfQdSzumCeyhSwulwiFNRvnkVbgcMGbWwXDJOxIQKoiVotxFvPWHwKiuPWdcaEBBqFkmngtlUtcWDYfFmjRDOFTTxVBphUmaDNoFDYsLxGTdDXgljigCoZhweD', false, true);
        count_7 = objectStore_2748.count(KeyRange_28);
    }
    catch (e){
    }

    txn_4097.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4097.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4097.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4098 = db.transaction(['objectStore_2749'], 'readonly', {durability:"relaxed"})
    var objectStore_2749 = txn_4098.objectStore('objectStore_2749');
    txn_4098.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4098.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4098.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4099 = db.transaction(['objectStore_2747'], 'readwrite', {durability:"default"})
    var objectStore_2747 = txn_4099.objectStore('objectStore_2747');
    var clear_0 = objectStore_2747.clear();
    var add_1 = objectStore_2747.add({f0_i: '<array>', f1_i: '<object>', f2_m: '<object>', f3_w: '<boolean>', f4_e: '<string>', f5_a: '<boolean>', f6_x: '<number>', f7_j: '<array>', f8_y: '<array>'}, 'GaMqRLwDLhTgyecOoAaJtAoLSdqKgIYKlebvLZUtGOooZTPsaaYHTIYEicMrbEwzFfAWkyzwSPCQgnuFYlBBCOwQrujKobhWlWNqaSPrvLlMzkrEusyBjCgESZBPzrWbSodzCmpGzrxZIBVznamnsNiLbJsQFXNFUSXEVVnUOfTdZTDdvYXDDVOERLVjsupsuVAmIZzlqcFLUQyJWwSUrIsYInkcNTMfxyAaOemkjPjrjEoWYZYHVOZBVxRXWqCvDzumyJrTcXWjtgHlWwXCIkETiHmkJEroPDDKRyLVVEqttNkLvdPhJiFgyRWAkdmwqlZpkRZASWmTsPdOSolWaTiseSIBGpXvwumytqpFbLwwvvIRAxPoDppSFMHWOxWPkkCjJxTiexXGDHmYAkiiEKoOkDsZUHzxFDTJSeJSzqQqWAcOQWaPDFsZHGmokdGaDXPHyTkihndPYHomCZQQbXYpNygMEKNmZpLghFBtfdCWloalisAzrQMCQPHVDkWiafNcYbqstArGtbdmQRAdymIxhNHbvIlEBJytzXqxkAFhbwwPRoqokVK');
    var put_0 = objectStore_2747.put({f0_y: '<string>', f1_a: '<object>', f2_z: '<array>', f3_r: '<string>', f4_b: '<array>'}, 'jdZBDApFbZhmkXXcUuDuAroqvQECMEovExBnsVxnofycInsRDtuEbaghOCJLPsehlWEOzmTykxseKIFSKdAZpRGEaIsVkGETRwRrkAJrDnNiVqKYRivPAjjwbncngRCnOmvlHGeRIzLDkZMlvRvyEfdJOhOJmECTjVrhqAXBFpMOnCMKCVgjctHIeaapVkiEDEcEYQsNlobcScLPPANhZkpXFEdMZnJGeoHktBQDVTJtiwYkJABdEviywZMKQQwTOLDMKhBqUFjPIGYbeFZVfxQwkFtHWwIEMhJdDXfIvPgGrEkhRSsPpdCQdnDCGPVZDwMYcFZqthMgPDfecBWCvbGLTmuQSFVkpKwHydCXvfkDHCTAZZkfYRZswxaexcqMhYsUKDzzcwqSNfnRkFxWLmqHQHLOYhZohiqDfSrOpwkFkJTgAVIjNYVjhajGSmiziEjihZwzOPGGKzkNlmVYBRcQxAAPscyxOlnQcJXcGyzEnhSbarSfSqeijXFmffUHNIGYlDAyeLwIbJhnQZeWdPFwovGIMIRSOVrxuDaaFkMZjlxvZtyqoyUnLGzxPypLXDeQRhxTPnzoSSyyCnHgVmMOzqMCSnZUVdrdTJpEYzcrZRTIJEFJiPNLhbqrBJrKPQTIDZfQJPuTXUGjHenVjtwhBOoHzWJqOAkNacUmgJyKqYsIVOzBZbkCNYmwealWFYBPXBEclsEyVXFQMnavSrfzmaQw');
    var getAll_0;
    try{
        KeyRange_30 = IDBKeyRange.bound('jdZBDApFbZhmkXXcUuDuAroqvQECMEovExBnsVxnofycInsRDtuEbaghOCJLPsehlWEOzmTykxseKIFSKdAZpRGEaIsVkGETRwRrkAJrDnNiVqKYRivPAjjwbncngRCnOmvlHGeRIzLDkZMlvRvyEfdJOhOJmECTjVrhqAXBFpMOnCMKCVgjctHIeaapVkiEDEcEYQsNlobcScLPPANhZkpXFEdMZnJGeoHktBQDVTJtiwYkJABdEviywZMKQQwTOLDMKhBqUFjPIGYbeFZVfxQwkFtHWwIEMhJdDXfIvPgGrEkhRSsPpdCQdnDCGPVZDwMYcFZqthMgPDfecBWCvbGLTmuQSFVkpKwHydCXvfkDHCTAZZkfYRZswxaexcqMhYsUKDzzcwqSNfnRkFxWLmqHQHLOYhZohiqDfSrOpwkFkJTgAVIjNYVjhajGSmiziEjihZwzOPGGKzkNlmVYBRcQxAAPscyxOlnQcJXcGyzEnhSbarSfSqeijXFmffUHNIGYlDAyeLwIbJhnQZeWdPFwovGIMIRSOVrxuDaaFkMZjlxvZtyqoyUnLGzxPypLXDeQRhxTPnzoSSyyCnHgVmMOzqMCSnZUVdrdTJpEYzcrZRTIJEFJiPNLhbqrBJrKPQTIDZfQJPuTXUGjHenVjtwhBOoHzWJqOAkNacUmgJyKqYsIVOzBZbkCNYmwealWFYBPXBEclsEyVXFQMnavSrfzmaQw', 'jdZBDApFbZhmkXXcUuDuAroqvQECMEovExBnsVxnofycInsRDtuEbaghOCJLPsehlWEOzmTykxseKIFSKdAZpRGEaIsVkGETRwRrkAJrDnNiVqKYRivPAjjwbncngRCnOmvlHGeRIzLDkZMlvRvyEfdJOhOJmECTjVrhqAXBFpMOnCMKCVgjctHIeaapVkiEDEcEYQsNlobcScLPPANhZkpXFEdMZnJGeoHktBQDVTJtiwYkJABdEviywZMKQQwTOLDMKhBqUFjPIGYbeFZVfxQwkFtHWwIEMhJdDXfIvPgGrEkhRSsPpdCQdnDCGPVZDwMYcFZqthMgPDfecBWCvbGLTmuQSFVkpKwHydCXvfkDHCTAZZkfYRZswxaexcqMhYsUKDzzcwqSNfnRkFxWLmqHQHLOYhZohiqDfSrOpwkFkJTgAVIjNYVjhajGSmiziEjihZwzOPGGKzkNlmVYBRcQxAAPscyxOlnQcJXcGyzEnhSbarSfSqeijXFmffUHNIGYlDAyeLwIbJhnQZeWdPFwovGIMIRSOVrxuDaaFkMZjlxvZtyqoyUnLGzxPypLXDeQRhxTPnzoSSyyCnHgVmMOzqMCSnZUVdrdTJpEYzcrZRTIJEFJiPNLhbqrBJrKPQTIDZfQJPuTXUGjHenVjtwhBOoHzWJqOAkNacUmgJyKqYsIVOzBZbkCNYmwealWFYBPXBEclsEyVXFQMnavSrfzmaQw', true, true);
        getAll_0 = objectStore_2747.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('GaMqRLwDLhTgyecOoAaJtAoLSdqKgIYKlebvLZUtGOooZTPsaaYHTIYEicMrbEwzFfAWkyzwSPCQgnuFYlBBCOwQrujKobhWlWNqaSPrvLlMzkrEusyBjCgESZBPzrWbSodzCmpGzrxZIBVznamnsNiLbJsQFXNFUSXEVVnUOfTdZTDdvYXDDVOERLVjsupsuVAmIZzlqcFLUQyJWwSUrIsYInkcNTMfxyAaOemkjPjrjEoWYZYHVOZBVxRXWqCvDzumyJrTcXWjtgHlWwXCIkETiHmkJEroPDDKRyLVVEqttNkLvdPhJiFgyRWAkdmwqlZpkRZASWmTsPdOSolWaTiseSIBGpXvwumytqpFbLwwvvIRAxPoDppSFMHWOxWPkkCjJxTiexXGDHmYAkiiEKoOkDsZUHzxFDTJSeJSzqQqWAcOQWaPDFsZHGmokdGaDXPHyTkihndPYHomCZQQbXYpNygMEKNmZpLghFBtfdCWloalisAzrQMCQPHVDkWiafNcYbqstArGtbdmQRAdymIxhNHbvIlEBJytzXqxkAFhbwwPRoqokVK');
        getAll_0 = objectStore_2747.getAll(KeyRange_31);
    }

    var delete_0;
    try{
        KeyRange_32 = IDBKeyRange.bound('jdZBDApFbZhmkXXcUuDuAroqvQECMEovExBnsVxnofycInsRDtuEbaghOCJLPsehlWEOzmTykxseKIFSKdAZpRGEaIsVkGETRwRrkAJrDnNiVqKYRivPAjjwbncngRCnOmvlHGeRIzLDkZMlvRvyEfdJOhOJmECTjVrhqAXBFpMOnCMKCVgjctHIeaapVkiEDEcEYQsNlobcScLPPANhZkpXFEdMZnJGeoHktBQDVTJtiwYkJABdEviywZMKQQwTOLDMKhBqUFjPIGYbeFZVfxQwkFtHWwIEMhJdDXfIvPgGrEkhRSsPpdCQdnDCGPVZDwMYcFZqthMgPDfecBWCvbGLTmuQSFVkpKwHydCXvfkDHCTAZZkfYRZswxaexcqMhYsUKDzzcwqSNfnRkFxWLmqHQHLOYhZohiqDfSrOpwkFkJTgAVIjNYVjhajGSmiziEjihZwzOPGGKzkNlmVYBRcQxAAPscyxOlnQcJXcGyzEnhSbarSfSqeijXFmffUHNIGYlDAyeLwIbJhnQZeWdPFwovGIMIRSOVrxuDaaFkMZjlxvZtyqoyUnLGzxPypLXDeQRhxTPnzoSSyyCnHgVmMOzqMCSnZUVdrdTJpEYzcrZRTIJEFJiPNLhbqrBJrKPQTIDZfQJPuTXUGjHenVjtwhBOoHzWJqOAkNacUmgJyKqYsIVOzBZbkCNYmwealWFYBPXBEclsEyVXFQMnavSrfzmaQw', 'GaMqRLwDLhTgyecOoAaJtAoLSdqKgIYKlebvLZUtGOooZTPsaaYHTIYEicMrbEwzFfAWkyzwSPCQgnuFYlBBCOwQrujKobhWlWNqaSPrvLlMzkrEusyBjCgESZBPzrWbSodzCmpGzrxZIBVznamnsNiLbJsQFXNFUSXEVVnUOfTdZTDdvYXDDVOERLVjsupsuVAmIZzlqcFLUQyJWwSUrIsYInkcNTMfxyAaOemkjPjrjEoWYZYHVOZBVxRXWqCvDzumyJrTcXWjtgHlWwXCIkETiHmkJEroPDDKRyLVVEqttNkLvdPhJiFgyRWAkdmwqlZpkRZASWmTsPdOSolWaTiseSIBGpXvwumytqpFbLwwvvIRAxPoDppSFMHWOxWPkkCjJxTiexXGDHmYAkiiEKoOkDsZUHzxFDTJSeJSzqQqWAcOQWaPDFsZHGmokdGaDXPHyTkihndPYHomCZQQbXYpNygMEKNmZpLghFBtfdCWloalisAzrQMCQPHVDkWiafNcYbqstArGtbdmQRAdymIxhNHbvIlEBJytzXqxkAFhbwwPRoqokVK', false, true);
        delete_0 = objectStore_2747.delete(KeyRange_32);
    }
    catch (e){
    }

    var count_8 = objectStore_2747.count();
    var add_2 = objectStore_2747.add({f0_p: '<string>', f1_e: '<boolean>', f2_t: '<array>', f3_e: '<null>', f4_m: '<number>', f5_b: '<object>', f6_y: '<string>', f7_z: '<array>', f8_x: '<string>', f9_h: '<array>'}, 'pYOdXqJEhSpGPPWswQcQwswtEPaiZLfjulNZEiVZARlSIBqKdEuzsjyXjxQInUCdGUsLrinOJxzVqByiNXotXPTznTHIrhkpaaOGewiYwoKMehLdRBslXSUWnPAylrwTyzXwRuLyVkHDxEgfVAxQzhSIKOMbmNKTXQKIjoxePxcBpNErOaRuwuUlKifcJawgAAbKRdNwTmXUUVCidQDhjYNxlykbqxqcQOVvOyfUROuFjmokMzsgtcnSSvgiGAvPaMsBLMjouByjIkSGiPtjhIDwSnAmlGeiUbVNbXoogKEJrvNmYNWjHJElunQHAynYvNwEkwOuozDGKHEmxEpJhlfVTogYvjuklHYNBrIqPQqbNRqfAREeEvLLAzqDYhBGSeHRNqkdUnUwdcfHOApenQbooxmcxUVfPvQxqtBAskpzRxPuYdWpTkVyluSXuXjFeGtmmxThBMVAoJjWpGDLhISJrPTMywrBiYJVFTWYTtJcdzRjLuCZrveYWeStAvncYedJnwSvpWfozrVEdWRpyAutuRNVIEJICuBeBQnPUiQbcajDstBOvudxGmDSbMiSegsaukyDirSmXgrRxsXrgbCTQjkIFOGtoVtdPozaesWeCYXmfzbfCinTwBPUhGzlDgnXqjLwQtMxiLsPnrpnDNQgq');
    var getAll_1 = objectStore_2747.getAll();
    var count_9;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('jdZBDApFbZhmkXXcUuDuAroqvQECMEovExBnsVxnofycInsRDtuEbaghOCJLPsehlWEOzmTykxseKIFSKdAZpRGEaIsVkGETRwRrkAJrDnNiVqKYRivPAjjwbncngRCnOmvlHGeRIzLDkZMlvRvyEfdJOhOJmECTjVrhqAXBFpMOnCMKCVgjctHIeaapVkiEDEcEYQsNlobcScLPPANhZkpXFEdMZnJGeoHktBQDVTJtiwYkJABdEviywZMKQQwTOLDMKhBqUFjPIGYbeFZVfxQwkFtHWwIEMhJdDXfIvPgGrEkhRSsPpdCQdnDCGPVZDwMYcFZqthMgPDfecBWCvbGLTmuQSFVkpKwHydCXvfkDHCTAZZkfYRZswxaexcqMhYsUKDzzcwqSNfnRkFxWLmqHQHLOYhZohiqDfSrOpwkFkJTgAVIjNYVjhajGSmiziEjihZwzOPGGKzkNlmVYBRcQxAAPscyxOlnQcJXcGyzEnhSbarSfSqeijXFmffUHNIGYlDAyeLwIbJhnQZeWdPFwovGIMIRSOVrxuDaaFkMZjlxvZtyqoyUnLGzxPypLXDeQRhxTPnzoSSyyCnHgVmMOzqMCSnZUVdrdTJpEYzcrZRTIJEFJiPNLhbqrBJrKPQTIDZfQJPuTXUGjHenVjtwhBOoHzWJqOAkNacUmgJyKqYsIVOzBZbkCNYmwealWFYBPXBEclsEyVXFQMnavSrfzmaQw', false);
        count_9 = objectStore_2747.count(KeyRange_34);
    }
    catch (e){
    }

    txn_4099.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4099.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4099.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2471')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};