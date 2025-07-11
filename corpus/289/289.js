let db;
const openRequest = window.indexedDB.open('str_1619', 8684604116143661)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1759', {keypath: 'occuTHReNnjcfBKJlmtNQjeJqYufnDcNFpLEwFaMvNoXGfTdUtAOmckRyNfXVyu'});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_d: '<array>', f1_x: '<array>', f2_k: '<number>', f3_e: '<null>', f4_d: '<null>', f5_f: '<null>', f6_f: '<array>'}, 'hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn', 'hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var clear_2 = objectStore_0.clear();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn', 'hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn', false, true);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('hnBHJVySkVQJLUPvqhWWebGkxmJwzHSHiiCjpOhyBPDghdDbZMlGwvmEjnPhZBhJSDZGXXDosvMsjbgwGAlaDOESLCZvVauxTSmKSgZpIOJeBnYUnpGytoluyXOYoFKfUAyIwuxEHcrnFkZImKmDVHjuuIIjddbVbYZlrtpmRbcZxrhAuBWvbYgmCEBOSWJgrfPxgNqeWIDjFVGcjNFLDEheebCrtXZnGdogdxCbbRIBZOdVCRfRgNcvaEMMOzOLcTZrLKqGPzXamwtkOWunQQvUnEebyvvpDkldgltObLzrzBLXJEPuSEREKYONoxgZXSZLvmMklIJkrTycYCsqTJQugQdHUvkBXKbvBERJbmvpYQjMGisqOmoCwJlNvyJaiWUxCJWVeVlQiGpHDBTeLyvUOJUYElswuBHYjpecGmbgipKzfsuVkdEgMvktmpNEFZiLTEcbKFVcnhCOlUfoGcNWotVyXMaGoiuxnFblWEGQTvpQDociVHJQTUFjrOyIczJNCNzlvJOiwnVznfBjkBfUcBInRSNNOpKrlrmvrwbSRvoWKhEfUszPCkiqxUZOSWPmRAyruAUXPlDZGSeDQFpmTUyoWSAiJfhGIlWmfuzKuJSmqcLFfSQiRXAqstn', true);
        get_2 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_1759')
    var objectStore_1 = db.createObjectStore('objectStore_1760', {autoIncrement: false});
    var clear_3 = objectStore_1.clear();
    var index_1138 = objectStore_1.createIndex('index_1138', 'test');
    var clear_4 = objectStore_1.clear();
    var clear_5 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_1761', {autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_1762', {keypath: 'wWsYLUwjnPuapImseQYLysGtMmircBzBGwWWAwMeRousWwCrLCZWidGZorQaVbyqvBLFinwJHfnSeclJhtMVuLUBgPDKnzmAKPVwqVOerqZlNvCJbyJUJWbiQeZvmjkIqBLGHpUuYCgwVSnhrNnNjNGoaFrSNJZfxqQVQNOYMUvQFFyhefmHJnoCFsCdKHHPjudOosXettTynBeffflFPKUnqbmhlIVWZoERdQwdTuNKFTEahsZUtwzQXKMbItPiDHyHavgndOVlUhHcladwaKXiLGxLAEoSBDkGAtDqzCDhruXcjawfQAHMzpeulLQgkvKQqtkgGQgMuraOxSEfjoRxVWmSgNwaGuDMeYyDnihCmpIImpqyzLibyFIWSbojQwXmDMTQsAsqjDjnqBGxivqovIdFRYokXpXNtTXGozqWCVEQsbdaroXaDOSougcJZdDNwRIFvwIZnZkDlSTqudomjxHHfTMfbDcirpQyMXMShLOUcpmUCunpAxlfCalAYVvsvzLrofaRGmeCiMFbKqQHonqforFsMymzmDIZPoWahlmJmDBWoXMsCMSzBEZxmoeAobAMveMpPkGqSYalXutOmpNbXDkCBVCTGFRKxBSlMUMjZYkDAppCPUzLSRGdmfJhwRiMNIBeZGAxhHKqCfpSzJRLkaWQgcSuIfvDfgVxQvtiqcfCMIBTdSDljZcONBLjxfLJQPmXyueQuhEOcsUtGOVBKCcaucYXIOMMqhCnKWxmSNlkAYOJvmCocOJiqcsXGQlCISkwuMrBHrDQpYaSjwReASpBIBVLWjtoqfccwPLIDhEzyPslYCSFcxocVPHkHtgmDFACuynvVfnjATgFVDKMmPeKabqwIZVrwUNNCRNCohuQULJpfVnUbMACrJyZtjteOFG', autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2595 = db.transaction(['objectStore_1762', 'objectStore_1761'], 'readonly', {durability:"default"})
    var objectStore_1762 = txn_2595.objectStore('objectStore_1762');
    txn_2595.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2595.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2595.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2596 = db.transaction(['objectStore_1761'], 'readonly', {durability:"default"})
    var objectStore_1761 = txn_2596.objectStore('objectStore_1761');
    txn_2596.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2596.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2596.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2597 = db.transaction(['objectStore_1760'], 'readonly', {durability:"strict"})
    var objectStore_1760 = txn_2597.objectStore('objectStore_1760');
    var index_0 = objectStore_1760.index('index_1138');
    txn_2597.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2597.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2597.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2598 = db.transaction(['objectStore_1760', 'objectStore_1762'], 'readwrite', {durability:"strict"})
    var objectStore_1760 = txn_2598.objectStore('objectStore_1760');
    var put_1 = objectStore_1760.put({f0_f: '<boolean>', f1_s: '<boolean>'}, 'nVkxdvbhSKdhDVHYMcqlfTTxKERNZlTnAEzSBZCrVmKTGDMgycVNFsJLHXhvfJgfWQeatAlcagxgjQZvddavcUhvnykNNpLAgUPSepXtDVpLOJJEbhBJpQhaweijgcuRAgFgiWkhOxXksGztTbMkyvNeygNtSusfdZiYKnaTlejwvKfyxZWyBfEMyEFOKiueHMgNiVuKzmLVtTNBeqBoFuhrTuULsWkiRNMzxnODSURstUTfQmEXJXvawdGDYfDTRVXTqOyqpGUqUqGAvsLFOPROouSXlHIuZCSKeUooLVCSKhzxMCinuTITatILdfSLvRohmtxpdDazZHYtFxjvveGYuPsrDoWxEHMNjnFdvEmscZtUnaSaBmqZKIPdfcrfPsmEaGQsahqahBfuqsrEYTVtCDCkptzKHkrrASYvxTAdXpnWbFaokDGTpgvGFLvltFZQVvklPjKKSMmNILdrZOIgofyodeOshMXDgNcFwosMBEpqkJWRdZkAGbdUARMGmfyGsTPEzuzLwFiNxdefeznrpbvMMOkXIwJpHSIobbNammJUvEvbVDhYsGrUySJOLJcZIdMviyAHcPomguTIRgChCDcYTkWKuJdXxXryRHEZxQMFNSKwEGVTXhPACnMgljGVwQUCXTNyrZrmPQDiYeTbKLbjTsjFkAmqamhwsMhdDLLhU');
    var getAllKeys_0 = objectStore_1760.getAllKeys();
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('nVkxdvbhSKdhDVHYMcqlfTTxKERNZlTnAEzSBZCrVmKTGDMgycVNFsJLHXhvfJgfWQeatAlcagxgjQZvddavcUhvnykNNpLAgUPSepXtDVpLOJJEbhBJpQhaweijgcuRAgFgiWkhOxXksGztTbMkyvNeygNtSusfdZiYKnaTlejwvKfyxZWyBfEMyEFOKiueHMgNiVuKzmLVtTNBeqBoFuhrTuULsWkiRNMzxnODSURstUTfQmEXJXvawdGDYfDTRVXTqOyqpGUqUqGAvsLFOPROouSXlHIuZCSKeUooLVCSKhzxMCinuTITatILdfSLvRohmtxpdDazZHYtFxjvveGYuPsrDoWxEHMNjnFdvEmscZtUnaSaBmqZKIPdfcrfPsmEaGQsahqahBfuqsrEYTVtCDCkptzKHkrrASYvxTAdXpnWbFaokDGTpgvGFLvltFZQVvklPjKKSMmNILdrZOIgofyodeOshMXDgNcFwosMBEpqkJWRdZkAGbdUARMGmfyGsTPEzuzLwFiNxdefeznrpbvMMOkXIwJpHSIobbNammJUvEvbVDhYsGrUySJOLJcZIdMviyAHcPomguTIRgChCDcYTkWKuJdXxXryRHEZxQMFNSKwEGVTXhPACnMgljGVwQUCXTNyrZrmPQDiYeTbKLbjTsjFkAmqamhwsMhdDLLhU', false);
        get_3 = objectStore_1760.get(KeyRange_6);
    }
    catch (e){
    }

    var add_0 = objectStore_1760.add({f0_n: '<boolean>', f1_d: '<boolean>', f2_g: '<array>'}, 'MEijBhzDrSUxataoJGGYKUnvNncpqqCAFAgQBIPTkzHyHOkkHjKrpdWMIndkYSFkppXEFUhCwDNcaqhpcwLXbbQWfbCpxnEctKuUNjnRrnQpSzHnSPRTNAJfXGtThTGEORhaSuHqExunpznBTRLCYQMHztbgIrlvzjnOZSSctuZveRCMNlnMXmdEYAqREqYeqvnEGdJaIVyTbcGCqirGJdXwxGJSBGZbzFNUWumFKxzUDjdGcIPtOVWfgHPweCRWbXOlGGCHyylNbYmtvUobEKbXgZBDObgYcEfwaaxffAISOikPyzqCVpNXEFumPmIEHmQdgwBHHISWFHkzwRDaoyIlLbxIffANOJppKwqBWlePEwKSWWSWKBbumLvMZZfdCaUCzoHyFoeWIFpnEdkcPzLceMJFaHYUnOMzcuNXQEyfkWdGBZQWnvHtHgeXlhgVGorXcwKpxrpVkiRMzFtJJTYtGNiNkKPrTegHpSgwdugejwQWJbnbJqwUomJNVSZOYGKcwGTJtpZesWCYlTVMhKGIFkxYjcbUMRyJiFuniHAcaTvMELjQZHbVIO');
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.only('nVkxdvbhSKdhDVHYMcqlfTTxKERNZlTnAEzSBZCrVmKTGDMgycVNFsJLHXhvfJgfWQeatAlcagxgjQZvddavcUhvnykNNpLAgUPSepXtDVpLOJJEbhBJpQhaweijgcuRAgFgiWkhOxXksGztTbMkyvNeygNtSusfdZiYKnaTlejwvKfyxZWyBfEMyEFOKiueHMgNiVuKzmLVtTNBeqBoFuhrTuULsWkiRNMzxnODSURstUTfQmEXJXvawdGDYfDTRVXTqOyqpGUqUqGAvsLFOPROouSXlHIuZCSKeUooLVCSKhzxMCinuTITatILdfSLvRohmtxpdDazZHYtFxjvveGYuPsrDoWxEHMNjnFdvEmscZtUnaSaBmqZKIPdfcrfPsmEaGQsahqahBfuqsrEYTVtCDCkptzKHkrrASYvxTAdXpnWbFaokDGTpgvGFLvltFZQVvklPjKKSMmNILdrZOIgofyodeOshMXDgNcFwosMBEpqkJWRdZkAGbdUARMGmfyGsTPEzuzLwFiNxdefeznrpbvMMOkXIwJpHSIobbNammJUvEvbVDhYsGrUySJOLJcZIdMviyAHcPomguTIRgChCDcYTkWKuJdXxXryRHEZxQMFNSKwEGVTXhPACnMgljGVwQUCXTNyrZrmPQDiYeTbKLbjTsjFkAmqamhwsMhdDLLhU');
        delete_0 = objectStore_1760.delete(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_1760.put({f0_q: '<null>', f1_f: '<boolean>', f2_h: '<boolean>'}, 'oWstVbLmUiGbxyIxWEuFXnZCgbWetFygAOWCPtkYVjtiXrqqlVFOsOtTkSdgDdiVUlNWbQaPSQLaTkXlSQIDUTzMMAserlONVkUpQLOafJBMMCAIWhBPsofqyRtNSjxGdXcqPGQwZaPwiTlsBuMiZfhBoWrKDYzoLsBeagixeGQdASTGzfXhagbeRkUOSVLZJdtDxkQkmNzAZslZGTgiXisiOWuliDhZFvXXJgVTUQwAGZMjlxJHniKEnnIYixJGsSrPXhlaQfzmIECferdzJHQdufruoakmPgRtKUuGmdpuHGIludAmfLiJLCZGqXOErmqduaHeNORMmNWUbHlDlaiTtumKLsnxbsAlqJOcyQArXzCUDDVMxkMGevpyqukHmtTDEVsAdDExjmkcUyehDWpTzGMTmwduKbYoyVxkaNMzwarVwrSbJBFxTRECWFEwcczRJOthykCTfToZIfPvjOjJmkAzYezaGdNLXiJCTeBWKdSCYtdtsmRShXlKoLkwoIEgsgFKcDFJfvOYcSBWZzZPRyynipfZEpjvZQqHYzsJgNyNTXeiLBDPGfNOKZuBsTjrLZczXiGnctpwrDRROnqKWzQLNFQmTGvfJdSwxgKnRYJHFVRNgEIsJIWNstfOcXEVxEcOmtfNDGOmCFZArVmmrgIfBAlLjfIXyVixWGTksyvNdbjMjUOxzvNyRCVmFmHmkfhQsbCSzKcTWdxDPDjmYwZkhmXkkoQSWDtagilSkAYmoaQOLGhOwqkBijpMrTscMhKQYbauoLZVpvJvVJBVjLXwZRGGYKesdeuNTKmKEJjhMkLRrEijXuYUtCZfeXaAFQwZ');
    var getAllKeys_1 = objectStore_1760.getAllKeys();
    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.only('MEijBhzDrSUxataoJGGYKUnvNncpqqCAFAgQBIPTkzHyHOkkHjKrpdWMIndkYSFkppXEFUhCwDNcaqhpcwLXbbQWfbCpxnEctKuUNjnRrnQpSzHnSPRTNAJfXGtThTGEORhaSuHqExunpznBTRLCYQMHztbgIrlvzjnOZSSctuZveRCMNlnMXmdEYAqREqYeqvnEGdJaIVyTbcGCqirGJdXwxGJSBGZbzFNUWumFKxzUDjdGcIPtOVWfgHPweCRWbXOlGGCHyylNbYmtvUobEKbXgZBDObgYcEfwaaxffAISOikPyzqCVpNXEFumPmIEHmQdgwBHHISWFHkzwRDaoyIlLbxIffANOJppKwqBWlePEwKSWWSWKBbumLvMZZfdCaUCzoHyFoeWIFpnEdkcPzLceMJFaHYUnOMzcuNXQEyfkWdGBZQWnvHtHgeXlhgVGorXcwKpxrpVkiRMzFtJJTYtGNiNkKPrTegHpSgwdugejwQWJbnbJqwUomJNVSZOYGKcwGTJtpZesWCYlTVMhKGIFkxYjcbUMRyJiFuniHAcaTvMELjQZHbVIO');
        get_4 = objectStore_1760.get(KeyRange_10);
    }
    catch (e){
    }

    txn_2598.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2598.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2598.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2599 = db.transaction(['objectStore_1761', 'objectStore_1762'], 'readwrite', {durability:"strict"})
    var objectStore_1762 = txn_2599.objectStore('objectStore_1762');
    var add_1 = objectStore_1762.add({f0_k: '<null>', f1_a: '<string>'}, 'yavclxjakpEAZtsukDKEgvZxvtzVgCyJOfkFFqFJixAKeujBrNwQaDWCoolFTxVJJHAYwYCFBCfhukVanfBFIfZVwVacGNTYxxMtcESVyrGCzmcSFkLojRzRuOJJbjSFcHeIiKYCbYDIbYGxYrUOhxtyhdHqdzNNpkwDrUgsJJHYKDYuSvJIgHNRpbcoasVhRegoXPviPrPGwFcNyVaIZCHGhnWkejsCIkWXiwnDbsdxGstIIqGolSbCUffpusemnzPnUrVtPRXKFbUAiJbVnzQNzIDD');
    var put_3 = objectStore_1762.put({f0_z: '<null>', f1_y: '<number>', f2_m: '<boolean>', f3_n: '<null>', f4_g: '<string>', f5_r: '<array>', f6_j: '<null>', f7_q: '<string>', f8_l: '<array>', f9_h: '<string>'}, 'wTLysVHoZyZQcQmqyziNEWXHJOwuJskDCCbhwPYPkdgKaTUnkMPnfXdNFVvpvqlyCRENMvHlaTvRjiZFLEOmMSNCoMVhfmtjCdBvpRwsYdnMrXPLvhkXcszUfTiqWAHuCtwtCHYoQfKKHSmHkJrZaKgduIKkOhyacMJIBJKWuJQcisFMvMsGQbKBlEgJyDBgtMknHVfptCzgJhwZIFZFslboTznXMVCXcVYTNhWzIEzyfadpqdphQUCtKtUGhODFUyleFBCfwNKOIENTownHzRncEwfHctVAAvdyCJRqkTrGMMgGERuRUlwOphTjqlIpOctwIgMJqUpQUIPlQhfsTsTJVDLMPhwzotCIsYqaIcqmIvbGfwyRHhkGlkWQwjRHxPXChlCMVdxoHleCTRgGgopemYMjImpEjr');
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('wTLysVHoZyZQcQmqyziNEWXHJOwuJskDCCbhwPYPkdgKaTUnkMPnfXdNFVvpvqlyCRENMvHlaTvRjiZFLEOmMSNCoMVhfmtjCdBvpRwsYdnMrXPLvhkXcszUfTiqWAHuCtwtCHYoQfKKHSmHkJrZaKgduIKkOhyacMJIBJKWuJQcisFMvMsGQbKBlEgJyDBgtMknHVfptCzgJhwZIFZFslboTznXMVCXcVYTNhWzIEzyfadpqdphQUCtKtUGhODFUyleFBCfwNKOIENTownHzRncEwfHctVAAvdyCJRqkTrGMMgGERuRUlwOphTjqlIpOctwIgMJqUpQUIPlQhfsTsTJVDLMPhwzotCIsYqaIcqmIvbGfwyRHhkGlkWQwjRHxPXChlCMVdxoHleCTRgGgopemYMjImpEjr', 'wTLysVHoZyZQcQmqyziNEWXHJOwuJskDCCbhwPYPkdgKaTUnkMPnfXdNFVvpvqlyCRENMvHlaTvRjiZFLEOmMSNCoMVhfmtjCdBvpRwsYdnMrXPLvhkXcszUfTiqWAHuCtwtCHYoQfKKHSmHkJrZaKgduIKkOhyacMJIBJKWuJQcisFMvMsGQbKBlEgJyDBgtMknHVfptCzgJhwZIFZFslboTznXMVCXcVYTNhWzIEzyfadpqdphQUCtKtUGhODFUyleFBCfwNKOIENTownHzRncEwfHctVAAvdyCJRqkTrGMMgGERuRUlwOphTjqlIpOctwIgMJqUpQUIPlQhfsTsTJVDLMPhwzotCIsYqaIcqmIvbGfwyRHhkGlkWQwjRHxPXChlCMVdxoHleCTRgGgopemYMjImpEjr', true, true);
        delete_1 = objectStore_1762.delete(KeyRange_12);
    }
    catch (e){
    }

    var add_2 = objectStore_1762.add({f0_k: '<null>'}, 'RWbYvWohfLSrmKhzlhRaHwPZUEvsBxNUzFAfFBBdDcdVnsuZuSkdrYZwLQGSYsdwcquLOnBDvGKSCENkUxPCpesTzoxkUihUfVqKLNinJUtIyfSLpBHGVbMODfScchNYCjLNCvvwGAtJJTzIocdijqaaeMlShOppkLFMAshmHxJNfEKEPSvEGGoALRGQismQHEdOlfmSDGWqhAVznqNyWQOLLNfhtgWDxnwJnGmdqgAvINUsOKItFzbkjqMqNVDdtjYX');
    var put_4 = objectStore_1762.put({f0_z: '<array>', f1_c: '<string>', f2_f: '<array>', f3_x: '<object>', f4_s: '<array>', f5_k: '<string>', f6_e: '<null>', f7_b: '<array>', f8_x: '<number>', f9_v: '<string>', f10_x: '<array>', f11_o: '<array>', f12_s: '<boolean>', f13_t: '<number>', f14_o: '<object>', f15_f: '<number>', f16_a: '<array>', f17_l: '<object>', f18_e: '<null>', f19_f: '<object>', f20_x: '<array>', f21_x: '<array>', f22_y: '<boolean>', f23_k: '<string>', f24_n: '<array>', f25_w: '<null>', f26_v: '<array>', f27_e: '<string>', f28_w: '<object>', f29_l: '<object>', f30_h: '<array>', f31_r: '<object>', f32_h: '<string>', f33_s: '<boolean>', f34_x: '<number>', f35_y: '<object>', f36_o: '<null>', f37_e: '<string>', f38_a: '<string>', f39_h: '<object>', f40_p: '<null>', f41_x: '<array>', f42_m: '<null>', f43_a: '<number>', f44_m: '<array>', f45_x: '<object>', f46_b: '<string>', f47_j: '<boolean>', f48_r: '<null>', f49_c: '<boolean>', f50_w: '<array>', f51_w: '<null>', f52_d: '<null>', f53_b: '<string>', f54_e: '<null>', f55_f: '<boolean>', f56_p: '<null>', f57_t: '<array>', f58_t: '<null>', f59_g: '<string>', f60_v: '<boolean>', f61_f: '<boolean>', f62_f: '<string>', f63_r: '<number>', f64_w: '<number>', f65_h: '<array>', f66_h: '<number>', f67_r: '<null>'}, 'mHBzWrdxBKsTCKBDVKcKZjvNdKOdAYjcQxITavukDUbmdWjGYzuBySKXZmHUIdfFJGPNTggxYryEbSrigGKawGbNDKbLJNIkBpvbDuCogYAzRVvrVvRJHmoPvnUYVQiMyONjHFJrucJkThgAfolAFZJNOWCEdkpVMyLbIsvwkgCEXlMNrYFaGiGVhXrMbhPMbzYtALUVqhEannJykXPcrxIRAdujbsmgrOOjSaLqpOOknofAONZGObSKThCnxJudaTpvcrdyLWMLdspzOFwsDHIMrfkezrygVDhifeOpzdEKMBnJYujVHIsdZQFtipbGxqReGjswpbYyKLKgnrVHmgPCoVJsavnRFqJnqSOWFwpQUwpKneZBNtXmufJcsjWzsRbOnvjnzjcZvDJgjcrxnaquJFiWMsutFYuVuEBiuWReavEEbfDRNZLRFvWSTnZeizHNskFmFpqKsHmpLmsjGHuyXsIsoxqlyGeWWKeGWiNvpnhSdjIhMKYyTQsgSFfmPOJKzwQuubMlWtCsrxgyxJrLPoFNTOQSSoqTxjkjZBfxoWVFFbLcQLeOAxHfDutLIJtPXQvxdmzHerfHyCYXsqrrclRqHScWGjotlXKkqDZoFBWhxGIfMizScGgquvcMXiZvqvaYZlevnAOQEKwDBVDCzFhrRjDLzKsLlxJnzITVFuyOVkYrDBXhdaJyoZodjhOLESSsozaeSwrvWqHqpzpDfZxKAxxtNPQuGjgEjuimA');
    var getAllKeys_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('mHBzWrdxBKsTCKBDVKcKZjvNdKOdAYjcQxITavukDUbmdWjGYzuBySKXZmHUIdfFJGPNTggxYryEbSrigGKawGbNDKbLJNIkBpvbDuCogYAzRVvrVvRJHmoPvnUYVQiMyONjHFJrucJkThgAfolAFZJNOWCEdkpVMyLbIsvwkgCEXlMNrYFaGiGVhXrMbhPMbzYtALUVqhEannJykXPcrxIRAdujbsmgrOOjSaLqpOOknofAONZGObSKThCnxJudaTpvcrdyLWMLdspzOFwsDHIMrfkezrygVDhifeOpzdEKMBnJYujVHIsdZQFtipbGxqReGjswpbYyKLKgnrVHmgPCoVJsavnRFqJnqSOWFwpQUwpKneZBNtXmufJcsjWzsRbOnvjnzjcZvDJgjcrxnaquJFiWMsutFYuVuEBiuWReavEEbfDRNZLRFvWSTnZeizHNskFmFpqKsHmpLmsjGHuyXsIsoxqlyGeWWKeGWiNvpnhSdjIhMKYyTQsgSFfmPOJKzwQuubMlWtCsrxgyxJrLPoFNTOQSSoqTxjkjZBfxoWVFFbLcQLeOAxHfDutLIJtPXQvxdmzHerfHyCYXsqrrclRqHScWGjotlXKkqDZoFBWhxGIfMizScGgquvcMXiZvqvaYZlevnAOQEKwDBVDCzFhrRjDLzKsLlxJnzITVFuyOVkYrDBXhdaJyoZodjhOLESSsozaeSwrvWqHqpzpDfZxKAxxtNPQuGjgEjuimA', 'yavclxjakpEAZtsukDKEgvZxvtzVgCyJOfkFFqFJixAKeujBrNwQaDWCoolFTxVJJHAYwYCFBCfhukVanfBFIfZVwVacGNTYxxMtcESVyrGCzmcSFkLojRzRuOJJbjSFcHeIiKYCbYDIbYGxYrUOhxtyhdHqdzNNpkwDrUgsJJHYKDYuSvJIgHNRpbcoasVhRegoXPviPrPGwFcNyVaIZCHGhnWkejsCIkWXiwnDbsdxGstIIqGolSbCUffpusemnzPnUrVtPRXKFbUAiJbVnzQNzIDD', true, false);
        getAllKeys_2 = objectStore_1762.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('mHBzWrdxBKsTCKBDVKcKZjvNdKOdAYjcQxITavukDUbmdWjGYzuBySKXZmHUIdfFJGPNTggxYryEbSrigGKawGbNDKbLJNIkBpvbDuCogYAzRVvrVvRJHmoPvnUYVQiMyONjHFJrucJkThgAfolAFZJNOWCEdkpVMyLbIsvwkgCEXlMNrYFaGiGVhXrMbhPMbzYtALUVqhEannJykXPcrxIRAdujbsmgrOOjSaLqpOOknofAONZGObSKThCnxJudaTpvcrdyLWMLdspzOFwsDHIMrfkezrygVDhifeOpzdEKMBnJYujVHIsdZQFtipbGxqReGjswpbYyKLKgnrVHmgPCoVJsavnRFqJnqSOWFwpQUwpKneZBNtXmufJcsjWzsRbOnvjnzjcZvDJgjcrxnaquJFiWMsutFYuVuEBiuWReavEEbfDRNZLRFvWSTnZeizHNskFmFpqKsHmpLmsjGHuyXsIsoxqlyGeWWKeGWiNvpnhSdjIhMKYyTQsgSFfmPOJKzwQuubMlWtCsrxgyxJrLPoFNTOQSSoqTxjkjZBfxoWVFFbLcQLeOAxHfDutLIJtPXQvxdmzHerfHyCYXsqrrclRqHScWGjotlXKkqDZoFBWhxGIfMizScGgquvcMXiZvqvaYZlevnAOQEKwDBVDCzFhrRjDLzKsLlxJnzITVFuyOVkYrDBXhdaJyoZodjhOLESSsozaeSwrvWqHqpzpDfZxKAxxtNPQuGjgEjuimA');
        getAllKeys_2 = objectStore_1762.getAllKeys(KeyRange_15);
    }

    var getAll_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('wTLysVHoZyZQcQmqyziNEWXHJOwuJskDCCbhwPYPkdgKaTUnkMPnfXdNFVvpvqlyCRENMvHlaTvRjiZFLEOmMSNCoMVhfmtjCdBvpRwsYdnMrXPLvhkXcszUfTiqWAHuCtwtCHYoQfKKHSmHkJrZaKgduIKkOhyacMJIBJKWuJQcisFMvMsGQbKBlEgJyDBgtMknHVfptCzgJhwZIFZFslboTznXMVCXcVYTNhWzIEzyfadpqdphQUCtKtUGhODFUyleFBCfwNKOIENTownHzRncEwfHctVAAvdyCJRqkTrGMMgGERuRUlwOphTjqlIpOctwIgMJqUpQUIPlQhfsTsTJVDLMPhwzotCIsYqaIcqmIvbGfwyRHhkGlkWQwjRHxPXChlCMVdxoHleCTRgGgopemYMjImpEjr', 'yavclxjakpEAZtsukDKEgvZxvtzVgCyJOfkFFqFJixAKeujBrNwQaDWCoolFTxVJJHAYwYCFBCfhukVanfBFIfZVwVacGNTYxxMtcESVyrGCzmcSFkLojRzRuOJJbjSFcHeIiKYCbYDIbYGxYrUOhxtyhdHqdzNNpkwDrUgsJJHYKDYuSvJIgHNRpbcoasVhRegoXPviPrPGwFcNyVaIZCHGhnWkejsCIkWXiwnDbsdxGstIIqGolSbCUffpusemnzPnUrVtPRXKFbUAiJbVnzQNzIDD', false, false);
        getAll_0 = objectStore_1762.getAll(KeyRange_16, 3881015526);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('RWbYvWohfLSrmKhzlhRaHwPZUEvsBxNUzFAfFBBdDcdVnsuZuSkdrYZwLQGSYsdwcquLOnBDvGKSCENkUxPCpesTzoxkUihUfVqKLNinJUtIyfSLpBHGVbMODfScchNYCjLNCvvwGAtJJTzIocdijqaaeMlShOppkLFMAshmHxJNfEKEPSvEGGoALRGQismQHEdOlfmSDGWqhAVznqNyWQOLLNfhtgWDxnwJnGmdqgAvINUsOKItFzbkjqMqNVDdtjYX');
        getAll_0 = objectStore_1762.getAll(KeyRange_17);
    }

    var clear_6 = objectStore_1762.clear();
    var add_3 = objectStore_1762.add({f0_r: '<object>', f1_b: '<string>', f2_w: '<number>', f3_b: '<boolean>', f4_k: '<array>', f5_p: '<string>', f6_b: '<null>', f7_s: '<object>', f8_u: '<boolean>', f9_e: '<number>'}, 'rYtolkJtZLTYnRZlERiyUrrDOIbkoyWzMYYidCVUkmuHSknmeozDHpLKPOwYUzRyWShtgUSPOOhEYMfNhUbRoRvyjZAcnAETWHuGkyNSofOcFKzlrcDYhDuHClMYEkIdHrGswEmjseWbgYKyNZzLgviDUpEbcXwWcxDnCiZXBiFNLRSzbKxeAahSHKpOWbMlUdvJNJWmhEcihZdFuFZbnyAdXBalrzJgXaUZtQINqxxNYUwPOWVKxrsqHrndKSzThpwvOgENqnXoXPyjMApBmHgrvaFMdKQiNCExJNXifrTcVkuKMlHhubDLWUEsLGEFTOdWVyoFqIaAXuUDxinkqFGMZjmhvxUzEBLgnivqrpxUPvefXlGjkEBLgmkdXSMJsgcFHLLTJwThErevXAEZsAaYVUXeDlTMYqUdnYCLgIpyVacKrMrksNjBzMOtLMHmMjfMNgzBOOCTqTgndOdpAAOxWfdpGzeRaqSwoiMfvwBrNtYPpnFinDgVNgYfhxhhHKhmFWAsVUwAztFftkOCPgAHQDu');
    txn_2599.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2599.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2599.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8401')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};