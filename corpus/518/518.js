let db;
const openRequest = window.indexedDB.open('str_5877', 8249049182300178)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3014', {keypath: 'WooeAZlhhSKunPIBbTWHEaQGjNeILVMMJRrBssouLYIqfLuFDrWRLYAKymBwMzjjaglEcMNlbBwtZsrJsBYenUvCYsRjaOCEfxHMGIqNwQMkZlVhPKFvPeizOksHOkWjwPXiovnlhtCDGndmLxpIrUBbUrlyoJaiYGivZpfBhVMqzndYWVYwkkoMPDKLeFoBYkVHCzXjnyvFmiwbALByEeveBpmkrNdCYQyCGuqixdKSZmLbSbXBzHBynzeSaJVwRzA', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3015', {keypath: 'BPNXwuQcWkUPbRIQEJIWWYNODMdGwMlGLIlIfTqocAmbFUbcifsalFZmLQCUgVFPsMBanziqaoWPsLRgCjBqOjNEFLHjegmvTUhksLHiCizWXDwmOLTcgWxvYycYWmErVOsTeCealBxNmVLchmqVJOtaZGBxfJOwNXFHrSRNuoaTXwvslkGpUglBZARCNaKdkYHFhcEXGZWhVwWmPmnzQNOBuMUWXCXLVULkEBYZgrpssqOuVuDSpExnpUVdIEGUleyNiLjGUTyJRvoETwDVNWkmgbXeTCteYykyvpMcnkkkLUwlqHmuIVDECXhPTZJfhFEtDQJzqRwTFMBMyhGypYvnlmHSEOmcrewvzbkafrdGsbCYAPHoEKVvFbhnLhelcQkvwFZohDAqtlrlHOouqNZwRUfYepBScPicuYvolbaIoZllSrsctOMOumPubZZRqyvwSDUeqhJOhEhYyTtJztvqGYEozgICpLmGHaJKUPEWKlMUwLSbOUDDrRWuwFtHFmyrdWsWVCGLnjKSYkmkcGZLTjvvJuosCGpEfSOaCViKtnJrDzrWCYnMecsOyNTFWkWbBGIxlhDxFxqFStGXRiWYrYkjqaFCsmOeDpgFBZYELSkMdKHiGUGXMqDCwFYqatTMtPNxTQYeaiBYpYKLQOElMdFQWpcYDSGikwZMJBkzIVNJwlbNBVnSFSTkcqsrESqYBFswxHqjQvCkBwRULVSjaoLmdqCVhoURiQKbPGKoEMVkDYsrWCQiQdPtdHHjMoLHHztiXUenevcpJTYdxOxDDTcwuZNhVfYMWTxoIUlGGqwdbXaTVXtVGNkWnBvOdUwnJbZnKMemlsHkguTkZXSvGvFkDepvCuEhTLZraXuRUeJtyWKaREmT', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_3016', {keypath: 'TAedSDEwiKwqmxxtGmTgifNvwsSEVfaRpQxiSDXPHrIeWIUaLsHQAQuqCmudKJvfcgLzHOABdXlUzVphmaUOIadJuUuLXNOuAmUiEJHYfXmyofEVkoMkxPYAbCIQQlbTQttaXlAPEMaRIGmCFEvNCiUSVdamNIRpQWlGrhRXoEsRgpDwUlajkUNnCtinvnNIyFZijcAEtNoGBPMdropQGVskfcFeqOiLmFsCyufnayPdoxtTkMCLlveLkWITQPnFWopyNTLSQZvudGHynAuFpoAbWFaGkooOpppYRjBZPlGNgagyJGqCnYCnEBcutOnJdeWjXTOFaqGnWwqPPTIUSHfSbDzzGAVKGOnxNwdWiHNoFkKkZLIdVlZcYRjOznQnQkslPfCRZmktUcfUQVIXrHRNGpigtHoADvVdypIeuKqtjVgCBvuPbKNtxoHLOmYVsEjGQfdVJMYVTS', autoIncrement: false});
    var clear_1 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_3016')
    var index_2037 = objectStore_1.createIndex('index_2037', 'test');
    var index_0 = objectStore_1.index('index_2037');
    var objectStore_3 = db.createObjectStore('objectStore_3017', {keypath: 'hqTFOxAXGPSAYOLGiBNCiElKAffvDqZWYDsxjxSZFXZQALJAdNktvwyifzFFBeygXjnCxdnLFCzrlDHjVyFTGpQcemFWhUABTOAMqFKcXFLDjtjguEmPJxGlSSACDfbXuFHuQGcNmtaxNPiNxeMmqLqLsQTnFohdvuhJboyfKsOozOHLAIPOZndIqGnKKLNsQkYjFbpuxiEivgsWRphOWeWfETRJfSmrzYlXCkCzhJZnNBFgHVnKMnBrEUkxPHqmsTSMAcayrYwmKohzUyeRZigVEYCyELyVBYoittdcFFJyARoXRvssYrUixPPoeOQCfsakzcjlJWmlvZjZBZDUbaOTrMqtQlPweKuZlhmlQHbXsyRCaFQwOynDmBOKCAbjvPEpuGvKygGrCqjrafFVGtBhQpxNBIZXfZQzrLNoJzmIfnnkdgaqcncyDZUspsnpyZOCyu'});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4510 = db.transaction(['objectStore_3014'], 'readonly', {durability:"default"})
    var objectStore_3014 = txn_4510.objectStore('objectStore_3014');
    txn_4510.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4510.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4510.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4511 = db.transaction(['objectStore_3017', 'objectStore_3014'], 'readwrite', {durability:"relaxed"})
    var objectStore_3014 = txn_4511.objectStore('objectStore_3014');
    var put_0 = objectStore_3014.put({f0_c: '<array>', f1_n: '<object>', f2_x: '<null>', f3_c: '<object>'}, 'GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq');
    var clear_2 = objectStore_3014.clear();
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', 'GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', false, true);
        count_0 = objectStore_3014.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', true);
        delete_0 = objectStore_3014.delete(KeyRange_2);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', 'GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', true, true);
        count_1 = objectStore_3014.count(KeyRange_4);
    }
    catch (e){
    }

    var add_0 = objectStore_3014.add({f0_z: '<string>', f1_g: '<string>', f2_c: '<number>'}, 'yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH');
    txn_4511.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4511.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4511.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4512 = db.transaction(['objectStore_3017', 'objectStore_3015'], 'readonly', {durability:"default"})
    var objectStore_3017 = txn_4512.objectStore('objectStore_3017');
    txn_4512.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4512.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4512.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4513 = db.transaction(['objectStore_3015'], 'readwrite', {durability:"strict"})
    var objectStore_3015 = txn_4513.objectStore('objectStore_3015');
    var add_1 = objectStore_3015.add({f0_n: '<number>', f1_t: '<boolean>', f2_x: '<object>', f3_y: '<boolean>', f4_o: '<object>', f5_g: '<boolean>', f6_b: '<boolean>'}, 'JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh');
    var clear_3 = objectStore_3015.clear();
    var clear_4 = objectStore_3015.clear();
    var add_2 = objectStore_3015.add({f0_f: '<string>', f1_t: '<null>', f2_k: '<string>', f3_o: '<boolean>', f4_p: '<array>', f5_y: '<object>', f6_e: '<object>'}, 'FUojEwRqlrrvtEnzHyTrmrlyfqyvEiUkchcOcAmXjdnviRWKidgybFWKIqrRqxyOjKfBOAEPWXwNkzBBjltWsXhBnOCgHpCnNvYkmmPoRuNXBaqkiGkgvrLzORZZPmorjiCfaxYFnarSxKrFlfUwycyoPxjSNjBrVMKOFhasQbOCOPbchTUJVFEccfKcThAcOvSgPORPIMmgB');
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.only('FUojEwRqlrrvtEnzHyTrmrlyfqyvEiUkchcOcAmXjdnviRWKidgybFWKIqrRqxyOjKfBOAEPWXwNkzBBjltWsXhBnOCgHpCnNvYkmmPoRuNXBaqkiGkgvrLzORZZPmorjiCfaxYFnarSxKrFlfUwycyoPxjSNjBrVMKOFhasQbOCOPbchTUJVFEccfKcThAcOvSgPORPIMmgB');
        get_0 = objectStore_3015.get(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh', true);
        getAllKeys_0 = objectStore_3015.getAllKeys(KeyRange_8, 2877113116);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('FUojEwRqlrrvtEnzHyTrmrlyfqyvEiUkchcOcAmXjdnviRWKidgybFWKIqrRqxyOjKfBOAEPWXwNkzBBjltWsXhBnOCgHpCnNvYkmmPoRuNXBaqkiGkgvrLzORZZPmorjiCfaxYFnarSxKrFlfUwycyoPxjSNjBrVMKOFhasQbOCOPbchTUJVFEccfKcThAcOvSgPORPIMmgB');
        getAllKeys_0 = objectStore_3015.getAllKeys(KeyRange_9);
    }

    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.only('JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh');
        count_2 = objectStore_3015.count(KeyRange_10);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh', 'FUojEwRqlrrvtEnzHyTrmrlyfqyvEiUkchcOcAmXjdnviRWKidgybFWKIqrRqxyOjKfBOAEPWXwNkzBBjltWsXhBnOCgHpCnNvYkmmPoRuNXBaqkiGkgvrLzORZZPmorjiCfaxYFnarSxKrFlfUwycyoPxjSNjBrVMKOFhasQbOCOPbchTUJVFEccfKcThAcOvSgPORPIMmgB', true, false);
        get_1 = objectStore_3015.get(KeyRange_12);
    }
    catch (e){
    }

    var clear_5 = objectStore_3015.clear();
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh', 'JqyxyywWMGBZMukKmhaspifGBnyJplaVoSYCBBfzzTwsstLWVqEKESDZFxyrRbQzQzxuOHEQoOJbdZTbxaBpseNWqASRNjnowPtrOwUlbBcPfJEAQYukTVpOmNkDvFHiXzCpTuKLFmynYaFLfxzZTarqhzwsrKyBbQIHmMPaxnXRAXhSXHreExBIkFhFFUGnwZyqshGMtKgquxYXmAHMNVwmyslIjvOZTKwdWuDgqkRXkIfJyFweNmEBmfVknUqLeoMqMCruTyWTiUUzCJdEXmzsXszCtPHakdhEvhyYrHJxgwOcUjyXyiZlGaUtLnJqCnKZxdUeeUsvNxdDXkomzcmlbsfzMStvXPSbOQwTfUHoanKBIKNjpXJfHIsqWfpRipIhCnCoYezRMMEMELkUUZqvoEJvYNrgVRGVmfJsJOochwNUultTQqBObuJKplIamwpjCLBLBWbbFkVAbnszAoKezcDfZuhpBTsprcAQiBhbRfyRDuEzczRXejbbDkBZvVIFZskfRhfusOnAbpnCiJwIxFspNISfQfGnFPtqfEhHdWhhzZmJXZGSgRTwxVKittbHoEuPBmrKksGwioXbjgJVkcsFaYSOUoACkuIihTOZboWfpIQKOchVhVh', false, false);
        get_2 = objectStore_3015.get(KeyRange_14);
    }
    catch (e){
    }

    var count_3 = objectStore_3015.count();
    txn_4513.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4513.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4513.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4514 = db.transaction(['objectStore_3014', 'objectStore_3015', 'objectStore_3017'], 'readonly', {durability:"relaxed"})
    var objectStore_3014 = txn_4514.objectStore('objectStore_3014');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH', true);
        get_3 = objectStore_3014.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_0 = objectStore_3014.getAll(3572054634);
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH', 'yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH', false, true);
        get_4 = objectStore_3014.get(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH', 'yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH', true, false);
        getAllKeys_1 = objectStore_3014.getAllKeys(KeyRange_20, 3533242431);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('yRKtZuLoaMOWXltgsbwgFpuUgyYEytrpafrLHCuPInLWJpGPfmIhJmJakTWTylClYtftpnABYmooZeaBWSLMeEcNpTMyBMTUWxOmyTbecTWPZPDRKIsRoLNDbIxtlDRdJcOhFZhCZgeDPHVbxgxaIUVCRvRkfcSUznXPlveVGWRUAELZWhqgjNwBlaQAighUDFTFoHjJekZbjbaypvMtZxPWFfGxnOssKFUpeKxVXgIRzlBaMyXZIMnWdPPUjvXVRHxyrLqSkLYFtDOnZnPLTzvPJduCgSZyFoNpOHSmPspDdGGmaGKwqTHBqCDqgIvldTeEHOPNAlVzPteYPEtyXZYazyzXpyMzejImYdxbMAzBJjjUMFKrNoOQJZOtgUHbptorYVxJvNERaTzpHLWiWvzFrixiAAYISKKkzKkjhIZSIJehSUTrXdamEshDpSqaSlNOCtgvzRbeavAFTdZIZZkxwZqNFoSCRWsLIjXMIAmSHJheqPGhBDrZRZtlHYdyIIKSsWEPpfESoFmQgKTLgeifYSqLphtDlbmkayeSiiilPvorUNtjnNDUgaXkUQquQqeaVuSdcFdrDXHuwH');
        getAllKeys_1 = objectStore_3014.getAllKeys(KeyRange_21);
    }

    var getAllKeys_2 = objectStore_3014.getAllKeys();
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', 'GNoqZzDJPcSrnBftvCPLebBkMispgNafxRUGsMeNFDtyYTkctUXLweAVXLmclknSJHzrIQZIztRppOOrYbqzsWoFllTPlpTqZpJjkyrXujhZuieuhWdNJUtNCfPbaRZUhNpejGcUpDKjcXnyOiwQqbqFYHxzjdCmcBwDmKWfzPqEITXZnIcrzxRclVCerLzazrQqWCCmRgTtOEjXciHInLmslzqQVeUFpwTlnPpjfUrTLQggaTwBiulWGvAfNmiKKNZnLMTQhfvHeidqxxhcMGXalhaLIEPNAPoikWRYhSsoECZtzftgozDhgmqYWuhfHygIzAwVthHpGTGlCcovbYBGtKBykfzZZKqq', false, false);
        get_5 = objectStore_3014.get(KeyRange_22);
    }
    catch (e){
    }

    txn_4514.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4514.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4514.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5750')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};