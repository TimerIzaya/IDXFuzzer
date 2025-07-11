let db;
const openRequest = window.indexedDB.open('str_689', 3870320435802382)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1797', {keypath: 'qZNBzXUbDKksJYCPEeRvpwMSLEWGbfaoLrgSwTPckOkVsajnlsdxWuXrDlOyBZGpVFjAAuwIPpGgmqVNwmTMNwVoiONHHJBJCHfKHlavagukWPATROSCGfhFfhYyqDSIVUBMjuLrDynElLmyNZDCTleiddymMZbIsQMGDtbrDBBTmpISpfBtBFUHPaEqfMTcYSWqOljDzeIQvNFhenSZflmeZncYkXgzfgsyWAEHtMdvKGFaWNJQBUWiPfoeKeYqBXKhIsuULQGXAOnFuCBKUDpeHnZIAeUoqmKVuxfqzSrzUGRIqPMhHPaNAflTVvrcdCyyKRbuZGuQdHEPkRTxWoXTuSBSQEVmEpShHNryhaPVwMzkiKSDiukjiJyVoNfROpABZOlhFMgxWnJyGcXyqUAWHpSrpGoZeacItgxYpnJqdyVMBQkAogAcZkkhcYfchgRjFissRyWswcZZHNOBePEloxHjBJcVySfNZmIjVCLIDKVKQuFHoBaAOdjSaTEErtPRWaiUCBmkCIKXOqWbVJHYGKPcwyCUpYAHSfPBVNsKSmsXobrmihCZspRHGtdlNkhkwrjbcYzRUqsCfBHKexFkrRzeJLMONGIcuwdPeVJnpvNrzsEZstvqekfzlZbBVMAVjNmOcqWXQbfZZsJiGHEsiaAVIyzXDjcwnBkuUJHHtzpycoQqXGzqtYKqMImxLsRkTzFaYFCQPdyxbNRsKQAwstDAllAuiCjuaaBJSByznbCYbSsHzgEqpIUHAoUFRGrtbJryuWPBhKRfLwKEOYzwYGSlqGlRuvWbZiQzQqgJxhbUmGMFaQxNWfedDF', autoIncrement: false});
    var put_0 = objectStore_0.put({f0_k: '<array>'}, 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM');
    var objectStore_1 = db.createObjectStore('objectStore_1798', {keypath: 'BKuRBevDADuyjNqTYkONwkgDIRvlaQSoaiajyjhOKcAppqGWLfpeJnoOqsHRDTAoWHhXEEZTTiFvzHObnBTZllSFctduOxDMlaSvPAAlSIYYUkghDXScXqBfuGKUEqiostBWnjxaXQQKdLRxOLiCKjBRoxLDAfbJLTWjUXHgTljPDiRXdHPrrNoUWjnpWVZCOkekmSHPIKZyWldigCQRCOehuwGCtoFrJRdCCkSntQMERifoRAEsmEpgOMRnZPnAadubKicKSAVCMRWzxRgtdtGazefEMWaeHbMdvueNVAqOsGbTBFsuyrhBCGyVtOCDLIKTpsOcRfPJFTwUCEGjOmlEqYzygmUmZmOtdHUZDCzhHSWRimhhd'});
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_0.add({f0_e: '<boolean>'}, 'biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf');
    var objectStore_2 = db.createObjectStore('objectStore_1799');
    var clear_0 = objectStore_1.clear();
    var put_1 = objectStore_2.put({f0_w: '<boolean>', f1_x: '<null>', f2_e: '<array>', f3_o: '<number>'}, 'hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', 'hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', true, false);
        get_0 = objectStore_2.get(KeyRange_2);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2650 = db.transaction(['objectStore_1797'], 'readonly', {durability:"default"})
    var objectStore_1797 = txn_2650.objectStore('objectStore_1797');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', true);
        count_1 = objectStore_1797.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_1797.getAll(3213156499);
    var getAll_1 = objectStore_1797.getAll(839265860);
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', true);
        get_1 = objectStore_1797.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false, true);
        count_2 = objectStore_1797.count(KeyRange_8);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', true, true);
        count_3 = objectStore_1797.count(KeyRange_10);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', true, true);
        getAll_2 = objectStore_1797.getAll(KeyRange_12, 2271923474);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf');
        getAll_2 = objectStore_1797.getAll(KeyRange_13);
    }

    var count_4 = objectStore_1797.count();
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false, false);
        get_2 = objectStore_1797.get(KeyRange_14);
    }
    catch (e){
    }

    var count_5 = objectStore_1797.count();
    var count_6;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', true);
        count_6 = objectStore_1797.count(KeyRange_16);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false, false);
        get_3 = objectStore_1797.get(KeyRange_18);
    }
    catch (e){
    }

    var count_7 = objectStore_1797.count();
    txn_2650.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2650.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2650.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2651 = db.transaction(['objectStore_1799'], 'readonly', {durability:"default"})
    var objectStore_1799 = txn_2651.objectStore('objectStore_1799');
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', true);
        get_4 = objectStore_1799.get(KeyRange_20);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', false);
        count_8 = objectStore_1799.count(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_1799.getAllKeys();
    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', 'hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', false, false);
        count_9 = objectStore_1799.count(KeyRange_24);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.only('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd');
        get_5 = objectStore_1799.get(KeyRange_26);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', false);
        get_6 = objectStore_1799.get(KeyRange_28);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', false);
        count_10 = objectStore_1799.count(KeyRange_30);
    }
    catch (e){
    }

    var count_11 = objectStore_1799.count();
    var count_12 = objectStore_1799.count();
    var get_7;
    try{
        KeyRange_32 = IDBKeyRange.bound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', 'hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', true, true);
        get_7 = objectStore_1799.get(KeyRange_32);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', false);
        count_13 = objectStore_1799.count(KeyRange_34);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', 'hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', true, true);
        get_8 = objectStore_1799.get(KeyRange_36);
    }
    catch (e){
    }

    txn_2651.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2651.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2651.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2652 = db.transaction(['objectStore_1797', 'objectStore_1799'], 'readonly', {durability:"relaxed"})
    var objectStore_1797 = txn_2652.objectStore('objectStore_1797');
    var get_9;
    try{
        KeyRange_38 = IDBKeyRange.only('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf');
        get_9 = objectStore_1797.get(KeyRange_38);
    }
    catch (e){
    }

    var count_14 = objectStore_1797.count();
    var count_15 = objectStore_1797.count();
    var count_16 = objectStore_1797.count();
    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.only('baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM');
        get_10 = objectStore_1797.get(KeyRange_40);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_42 = IDBKeyRange.only('baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM');
        get_11 = objectStore_1797.get(KeyRange_42);
    }
    catch (e){
    }

    var getAll_3 = objectStore_1797.getAll(2232435278);
    var get_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false, false);
        get_12 = objectStore_1797.get(KeyRange_44);
    }
    catch (e){
    }

    var getAll_4 = objectStore_1797.getAll(4216474680);
    var get_13;
    try{
        KeyRange_46 = IDBKeyRange.bound('biGHIBUuMxBmtcKwCYYOtxdAQKMSZVsLXrjfVgwGMocfBjIlWzOGPLQNvUYwyPoUTMusfKGdpXkKVWFAcFrJHgMQEzjwcMctFIlGrUjwUGmkUWVYGmMbVLuGGrbaZKgpNJKqtaFHokTdKAIygyrmgYPhNKvbiMmOuegSuKrtyqkpTdDGiIViBoLfhDrXAXXaUCzACMePDiDweebccbTEnKedwSORqxkRYf', 'baogQZxevoCWxzoPiimkrJYEkmrxFobcnWzTgWNvJRExenmXFqHVxPkHQJQaBDpleOlaGVEoRxBuvvPKKSTMEcZoudZfpsZdtSkjYlKtJAmyYGRYKkEzMjdFjlKQFhZjDvRrxQiejhOZlnlpnqZxNgIHEwQufJeeVSXCGaWKJKoPhmDADUHgcbmMjOqKwRihLIMrWmWXLVLogGEiGMVtZvwHeFRpEGLBLEDULCYZmwddCAbxgSPXPQrJSYAiRxggiHIHUlJwwbsEYepPYVxGJVekCvqJFaFZaUfruRRlGTMLoOCLsgnaDkhaxMTbHWcrSgaIzJTAhCgkOHsgBQkIxWgSBArYpgcPCbDeHxXtCGxulfNckiXScoKGtMxnnUAzUPwenwLzuNbCjfdRSOmYIJPLBmUhRhYaJAAicjmQDhrpaoaTbiMLEdkLkqDrKETDDBvGIJhrbweiHzSOvjsEcfUlExuBaMSPANDHukdixUsDspCtwyitwoVBpzLGejAzYeCMckhqDDoEwITkqfLduPUzGHJsEWlqEbdiPuGYznUzTMjfkhzxdzBJjRfdJemZLGSPnFPabhtUWtnWkdCSxdXUohwqQirKUlwHOVLfoNOZyKcWhMFiltabQWnPwfKZsDamhPkNsMwjjTnpIXylkcmAaXqmBZjlM', false, false);
        get_13 = objectStore_1797.get(KeyRange_46);
    }
    catch (e){
    }

    txn_2652.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2652.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2652.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2653 = db.transaction(['objectStore_1798'], 'readonly', {durability:"default"})
    var objectStore_1798 = txn_2653.objectStore('objectStore_1798');
    txn_2653.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2653.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2653.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2654 = db.transaction(['objectStore_1798', 'objectStore_1799', 'objectStore_1797'], 'readwrite', {durability:"default"})
    var objectStore_1799 = txn_2654.objectStore('objectStore_1799');
    var put_2 = objectStore_1799.put({f0_s: '<object>', f1_f: '<boolean>', f2_n: '<boolean>', f3_d: '<null>', f4_r: '<string>', f5_d: '<object>', f6_t: '<boolean>', f7_m: '<array>', f8_d: '<boolean>', f9_n: '<string>'}, 'uOBsJsyRCIiexksHVPxjVdrVgfCzYIlmCpBsUCvqXfDkwRNTxxbAOqJpvFYuIoQZvbqDFWoHCIUARvYaqFfunwSQfQoJPfbdHmiIdfAJFHjYrEXVIRUjLcDNHuHeqWawbVpgJcWXkcQGsAEJMtJYoxoiBMjKuYWTLHkVEeaSynSIQV');
    var get_14;
    try{
        KeyRange_48 = IDBKeyRange.only('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd');
        get_14 = objectStore_1799.get(KeyRange_48);
    }
    catch (e){
    }

    var put_3 = objectStore_1799.put({f0_i: '<string>', f1_w: '<null>', f2_o: '<array>', f3_r: '<null>', f4_q: '<object>', f5_r: '<null>', f6_k: '<boolean>', f7_c: '<null>', f8_v: '<object>', f9_r: '<string>'}, 'FlPfEWUnYoItMmwZyKHKrZVduZxbBCbXMLGElmypmvQrNsierHWQhgBnhzlVkblyhUDBpjpAmm');
    var add_1 = objectStore_1799.add({f0_m: '<array>', f1_h: '<object>', f2_v: '<number>', f3_t: '<string>', f4_v: '<array>', f5_i: '<number>', f6_s: '<object>', f7_j: '<array>', f8_o: '<string>', f9_g: '<string>', f10_w: '<array>', f11_j: '<array>', f12_j: '<number>', f13_j: '<null>', f14_l: '<null>', f15_i: '<object>', f16_x: '<object>', f17_w: '<null>', f18_w: '<array>', f19_c: '<boolean>', f20_b: '<object>', f21_t: '<array>', f22_f: '<string>', f23_o: '<string>', f24_t: '<object>', f25_m: '<array>', f26_w: '<array>', f27_s: '<string>', f28_i: '<array>', f29_y: '<null>', f30_j: '<string>', f31_j: '<string>', f32_f: '<null>', f33_k: '<array>', f34_x: '<object>', f35_d: '<boolean>', f36_v: '<array>', f37_w: '<string>', f38_p: '<object>', f39_u: '<array>', f40_f: '<string>', f41_j: '<number>', f42_o: '<string>', f43_b: '<null>', f44_x: '<boolean>', f45_e: '<boolean>', f46_l: '<null>', f47_c: '<number>', f48_t: '<number>', f49_o: '<string>', f50_a: '<array>', f51_i: '<null>', f52_h: '<boolean>', f53_r: '<array>', f54_p: '<boolean>', f55_o: '<null>', f56_i: '<number>', f57_m: '<number>', f58_y: '<string>', f59_z: '<string>', f60_j: '<number>', f61_q: '<number>', f62_y: '<boolean>', f63_u: '<string>', f64_e: '<null>', f65_p: '<object>', f66_t: '<array>', f67_i: '<number>', f68_c: '<array>', f69_n: '<string>', f70_o: '<boolean>', f71_g: '<string>', f72_i: '<boolean>', f73_b: '<string>', f74_k: '<object>', f75_f: '<number>', f76_t: '<string>', f77_l: '<boolean>', f78_w: '<string>', f79_c: '<number>', f80_v: '<null>', f81_o: '<object>', f82_x: '<boolean>', f83_r: '<number>', f84_r: '<number>', f85_y: '<string>', f86_v: '<number>', f87_w: '<array>', f88_s: '<boolean>', f89_p: '<number>', f90_t: '<array>', f91_e: '<null>', f92_o: '<null>', f93_c: '<boolean>', f94_h: '<boolean>', f95_r: '<object>', f96_n: '<null>', f97_z: '<null>', f98_x: '<boolean>', f99_k: '<boolean>', f100_n: '<number>', f101_f: '<object>', f102_l: '<array>', f103_y: '<object>', f104_s: '<array>', f105_o: '<string>', f106_q: '<array>', f107_f: '<boolean>', f108_m: '<string>', f109_x: '<null>', f110_a: '<array>', f111_l: '<string>', f112_w: '<object>', f113_z: '<number>', f114_v: '<array>', f115_t: '<array>', f116_o: '<boolean>', f117_p: '<boolean>', f118_h: '<boolean>', f119_x: '<number>', f120_x: '<string>', f121_d: '<array>', f122_o: '<string>', f123_q: '<object>', f124_g: '<string>', f125_b: '<string>', f126_m: '<string>', f127_x: '<boolean>', f128_c: '<object>', f129_g: '<array>', f130_r: '<boolean>', f131_s: '<object>', f132_a: '<number>', f133_o: '<boolean>', f134_d: '<object>', f135_e: '<number>', f136_d: '<object>', f137_d: '<number>', f138_p: '<string>', f139_k: '<number>', f140_f: '<boolean>', f141_u: '<boolean>', f142_z: '<array>', f143_s: '<number>', f144_e: '<boolean>', f145_e: '<object>', f146_f: '<string>', f147_q: '<boolean>', f148_y: '<boolean>', f149_n: '<boolean>', f150_k: '<boolean>', f151_m: '<null>', f152_m: '<string>', f153_q: '<boolean>', f154_n: '<object>', f155_v: '<number>', f156_u: '<array>', f157_q: '<string>', f158_o: '<object>', f159_v: '<object>', f160_m: '<string>', f161_i: '<number>', f162_n: '<array>', f163_o: '<number>', f164_n: '<number>', f165_i: '<null>', f166_n: '<null>', f167_a: '<boolean>', f168_h: '<array>', f169_z: '<string>', f170_c: '<string>', f171_n: '<string>', f172_g: '<number>', f173_s: '<array>', f174_r: '<object>', f175_z: '<string>', f176_t: '<string>', f177_a: '<object>', f178_n: '<string>', f179_b: '<null>', f180_j: '<number>', f181_d: '<number>', f182_b: '<object>', f183_b: '<array>', f184_t: '<object>', f185_g: '<null>', f186_b: '<array>', f187_c: '<boolean>', f188_s: '<number>', f189_f: '<number>', f190_j: '<number>', f191_s: '<object>', f192_j: '<object>', f193_q: '<null>', f194_s: '<array>', f195_d: '<array>', f196_t: '<boolean>', f197_z: '<array>', f198_d: '<string>', f199_r: '<null>', f200_r: '<boolean>', f201_v: '<array>', f202_w: '<array>', f203_q: '<string>', f204_o: '<null>', f205_m: '<array>', f206_i: '<array>', f207_a: '<object>', f208_g: '<null>', f209_n: '<number>', f210_g: '<array>', f211_v: '<null>', f212_l: '<number>', f213_h: '<object>', f214_a: '<object>', f215_c: '<array>', f216_r: '<boolean>', f217_a: '<string>', f218_r: '<string>', f219_o: '<null>', f220_t: '<boolean>', f221_w: '<null>', f222_b: '<string>', f223_t: '<array>', f224_g: '<number>', f225_f: '<array>', f226_q: '<boolean>', f227_f: '<null>', f228_y: '<number>', f229_w: '<object>', f230_c: '<string>', f231_l: '<string>', f232_f: '<number>', f233_e: '<object>', f234_p: '<null>', f235_t: '<number>', f236_j: '<object>', f237_t: '<null>', f238_d: '<array>', f239_x: '<object>', f240_r: '<array>', f241_n: '<array>', f242_a: '<null>', f243_z: '<null>', f244_q: '<number>', f245_g: '<string>', f246_u: '<string>', f247_s: '<number>', f248_l: '<array>', f249_o: '<null>', f250_m: '<null>', f251_f: '<number>', f252_o: '<null>', f253_g: '<boolean>', f254_v: '<boolean>', f255_l: '<array>', f256_j: '<string>', f257_l: '<array>', f258_j: '<boolean>', f259_r: '<null>', f260_u: '<object>', f261_d: '<object>', f262_t: '<array>', f263_a: '<boolean>', f264_l: '<boolean>', f265_k: '<string>', f266_i: '<null>', f267_w: '<array>', f268_q: '<boolean>', f269_g: '<boolean>', f270_y: '<number>', f271_t: '<number>', f272_l: '<object>', f273_o: '<null>', f274_y: '<number>', f275_y: '<array>', f276_n: '<number>', f277_l: '<object>', f278_m: '<boolean>', f279_l: '<object>', f280_w: '<string>', f281_l: '<null>', f282_d: '<null>', f283_b: '<boolean>', f284_f: '<number>', f285_s: '<array>', f286_z: '<null>', f287_o: '<number>', f288_t: '<string>', f289_y: '<object>', f290_c: '<null>', f291_u: '<string>', f292_e: '<number>', f293_i: '<array>', f294_x: '<object>', f295_s: '<object>', f296_i: '<boolean>', f297_h: '<array>', f298_o: '<array>', f299_b: '<object>', f300_y: '<object>', f301_j: '<string>', f302_b: '<null>', f303_d: '<array>', f304_p: '<null>', f305_h: '<number>', f306_u: '<string>', f307_p: '<array>', f308_l: '<number>', f309_p: '<object>', f310_p: '<number>', f311_s: '<string>', f312_a: '<array>', f313_l: '<array>', f314_y: '<string>', f315_t: '<array>', f316_k: '<object>', f317_e: '<string>', f318_u: '<boolean>', f319_y: '<object>', f320_e: '<array>', f321_u: '<object>', f322_v: '<number>', f323_p: '<boolean>', f324_c: '<array>', f325_a: '<number>', f326_e: '<boolean>', f327_n: '<boolean>', f328_v: '<object>', f329_a: '<string>', f330_l: '<null>', f331_k: '<object>', f332_k: '<boolean>', f333_d: '<null>', f334_o: '<object>', f335_m: '<number>', f336_u: '<number>', f337_v: '<string>', f338_h: '<boolean>', f339_t: '<string>', f340_q: '<array>', f341_c: '<number>', f342_z: '<string>', f343_x: '<object>', f344_p: '<array>', f345_j: '<number>', f346_d: '<array>', f347_g: '<string>', f348_k: '<array>', f349_d: '<null>', f350_t: '<null>', f351_e: '<null>', f352_a: '<array>'}, 'PTnuzHKUxapLHjkxTjETZtleKuiFQeBAugoxudmplkCtrfTrSdiRgwiyDYgkpYyNIZHBCEXFAqdbXbEaHZJUrojvlmVyUnbIZinuMVPwuREanQLSrQEcSyInIPFfwdXPXLaNkvJgypXdlMgOTtMXeEupZGBjdOLzzZlDGSWucjEGzMjOJgZNDkvpLKAEwbRpFsrjDJMImpYvCBSEOquecTCToDekNZXECNvCRNeaWlojAuLSEXHVkMffMxcYdKPrfnXoHftTMsYDGpMZpuEGiYshEwMcUgkPWARljPJuewpEWKqEULY');
    var add_2 = objectStore_1799.add({f0_f: '<boolean>', f1_j: '<number>', f2_o: '<null>', f3_x: '<number>', f4_y: '<number>'}, 'VBTWlAiblSIRfkHoNgwyIrUJRMCVcVEKhSmQIRcWinPIEwWBiNSptXxRgizHMhKiwlwBuTYnsBlhSjsuAWitxVAHlGmWRdizXTOCpfumByFNXtRbgYkpDmzOrvUwhJWLGLApZpAMxNNdyAPLbidKNJNXStwMVNRPxLOaNVsxmBgqjZLXqphaoFkDQLWKHFMIDjHjUFvBJmACpmotiVhSNqJhvuPVRZSjFjesbuADUaGscTJIePAVYOuIHRN');
    var put_4 = objectStore_1799.put({f0_q: '<null>', f1_d: '<string>'}, 'jddmEYJZBvjRvFXeMhDNaQgDVSTGzNmgSRdTraCnrukTechonBhyirNVTMfdNSphocJGIAiMbBjdNXddOnULGwzWwvUblpHudCuJnSBFEROSNUseQuwKuDKLQIoOKsXBliIfMbbGQbNgGvYpLnmzoelSdlbBXCDIHtAffHeZEaEszbaykgdAOHrtVUaTTLrPdGDZcJhanTEIcrurNKiZCTEuKiWpuxbvKfjiNOgGxpirQtltyioytpRgZIiuxxTzxeyJElQxKhWslxsQFaiOwyXNUAxiRZKlZWNTICnqZloWhJCTovJzmjkOKPqAnOAcNpaeTwqWlYRXrtvutEcvbGORMXeqPIekrcwbWnmQxtEKlRzHdcnMgtbPEbaxQsEGaUyQXdyZuNysTfzMYnseZGSoOuqTsxHDkhCiNCmsalfabLbIJyAoEPoKLHRpypTXslMTHDKIOGtyThmNkiOItZBupGmTHRYODUFMnWWelOoEwoWMwHZZSEnVuMnPQnjqPootKqDsKxUELjRROhLBZajVdYwmvBsXnYdXUmBqhQqpHsIUUtDtmBbTSRHancSTFkIWQteZKiWRaWhRjlGoTkUzEYMRLubovQuMxULczHiFhSaXkclaNmGEwWLyJPOLPZjpDqtNdrJfubuKmwXXQXxUQxZATweMZQqGqhMebCjVfGUBhftiploGyPVzxcskskPJMUUSuTPmOXxRcTFPYLDpWCwGfvoIruWvxJnOcYotNprpqANuizAswkKlFSBwNqKPLvkaPhLhQHHShPuVgukGjxpnOlkWYEjyuVrzRnSNWrBEEwexZrSDdCfSaacizjgtSXvsNSeYUHyAzNOvLeMBFIbAfofAsgDFAeJuKUMlaxBYRDpbyXSFXGvPVroKDGLnJBktQSmFDtxCCqJY');
    var getAll_5 = objectStore_1799.getAll();
    var get_15;
    try{
        KeyRange_50 = IDBKeyRange.bound('hyAOoyLSYgsoEspdudfTyGkdMiSCepsufQljCPkFKSYpConoAphLKiQDzCNTIGxCFlpAgAzoMJoaJARziWmXVamokWGlryfPllNBtJScAlhNnQYAtEHCzlDqmFfjjKYOLtceRltqTuoweuXFmOGEWnJWTDeEXWmHjQHWUTDUpaGKpvhUKPIKcMDnDZenYOEqAzmBpQSJBMFVpQriWjFWdqObwjzHHFrWpsvXeyAghPziBYEdwgwEwDrmcSkOeCqeoFEmfunEhJOhWbEYrUDkeUOKaabFdyJrwAVuOnOotTdbdsNOfyaOtjPhKAlzBqaCLkzXLHlFJgSpwMILfMUzVwkEcRxTBRggqFajLSEyWEeUPzkiddPSoPdwILtxCoNkJSUdjuATjjnieWlTndDecmLJSzFYdEnNvrRttUsQLGfpSfYFgcaZMOnsttEwNUkCFEOVnUCeKOOPGvWToTfURxsgtLfduvzcgiZtqbRpQcaGRbOhBTDnPucidmTRYUKBdYjonGEewEJzIeFWURzmqxBBMzBtXKkfNuOpQLELsDYgcvKDvFMSagfcCOLYogtVgtlvSEAWxnYoIcwhEnhDfMkOrdYASIFhbztNGJOIFiwWupdvd', 'FlPfEWUnYoItMmwZyKHKrZVduZxbBCbXMLGElmypmvQrNsierHWQhgBnhzlVkblyhUDBpjpAmm', true, false);
        get_15 = objectStore_1799.get(KeyRange_50);
    }
    catch (e){
    }

    txn_2654.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2654.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2654.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3422')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};