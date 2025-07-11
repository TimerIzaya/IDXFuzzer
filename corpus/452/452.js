let db;
const openRequest = window.indexedDB.open('str_4229', 1785832141533621)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2667');
    var objectStore_1 = db.createObjectStore('objectStore_2668', {keypath: 'dsxzwmxcFgxaloYfuOagfIpsPNMWHVCJpFRQdGrdJJsOLHDbPrUhcQuOcJWbHeitZYBxmSHFCMUUKNDyQXNJiRwIWUGSfetKExUkNhoogReuIAwnCSiPdtheXFIPmKpJzMeAViTDzSckEkFDiLiHGglCKRkhpMzaaXHBpjsFDpEaPddcZAuRTGliMRHtvCPAZlDJyhAOyugGhhHTsIzYgHGfOlavvlyaymigqkEcQYzMxaLTrcEXlfqbESkmLoGRsXATtQnhcYStZUlzlWtwvSLtAibKMOIxCkFLAooUlBUEjTfJlSjVfddEtObuFuOpdnQFvVeCjhmhCJBUOlZfVvIHoGUqLnenIECujzAutYpsLPAUQrGnLvtAWHZIVHikhHlqsSnlZynDOWNBkQswlavpqFJSYKotFfQpFBdZQDyZkbamZawZlsVoJGwHoGlXerYyXHIEzczuQmmSnMjXOWpOiURvQgqCceEMWAtssxEhbBZnGxYcqDwLldBAtICwSSaqXFfEyAtUXiRNTpNkNPvnpyntoaKhVwPDKSyccTrdHrbjNZUWPvtwJLJsVkMeLGZjttDKCMlIDBzziPjhjLYnnGdDrNcBCkClWNSgQzgINAdmkCEcEIKAeAiulkZaesilQDesZIDTfJRroMHPcVSKjYTVGjoCXoCXjwtUNBEChsgxjZZtDSzLdVYuxzfauGniEPVzmDfzIHUNBtfSBJyEOFFOLfEJwwQtnhMQbuiQljSeftqbMJWBxrHprOkuIFAqpWrkqSrlSSJdeHpWWWLETsNQigGfCGBQzPucJLNvHJWGHIIqMTDAynUONDntvMsQFhAJtoGgztjRgebrBLRlsswMHRpiF', autoIncrement: true});
    var index_1751 = objectStore_1.createIndex('index_1751', 'test', {multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_2669', {autoIncrement: true});
    var index_1752 = objectStore_1.createIndex('index_1752', 'test', {multiEntry: false});
    var put_0 = objectStore_1.put({f0_g: '<object>', f1_k: '<boolean>'}, 'AEWRoeQFklEgRPOCPdFtyyIpquKbAQssGEHaxcDnDhTTxyKStjdHpzzNvQJIpOnjyGUnUjrtFtdyJwYFCDHkmcLpBWLpBTLXZiNnfxHXkaVornWiOvNbfuHwPJDYgkVkgyeItIKLCjLzaEcdkvHZoEVOgcNArUuRfMGpXtRNacjPRFTwqLfReLfXzuQRxBSKoKrBoTlpxGyItgTxhFcFsBWaoCWTAbSKIbTUCpspPoYVFHUWrqYHCyYreQeZPkULbitVpmgrDwdQKYQHiZjdUUGMhRCrVUmVvdELrxgtzennjDmQMWuCfxocOqlmuwcmlPdvqcDMKzUUqHIsYgfbqodoseiESLlCyNLIMEGRPhyqJhnoaghwWzwKHJWAObBTlzTybfplwaJaHzBXPsgAlBonQQzAAkSEIUFquKILLxVKhLlxHJZTWgWiTokMMaDGCQAUnZwCOoinXZyQgqaJcRokDcAjAFFIGZsdjqEHlUdBKXaxKThYgVTGFxLrXQFOREvyBUKqYGeCxCXmMOGTzzowUniWCiXSKTucAAXxvjuWTHytaGFwyXXjahHEHuGrjFFpJFerIYvgbHsRlUxSMlRqLVgPnAOfOIs');
    var objectStore_3 = db.createObjectStore('objectStore_2670', {autoIncrement: false});
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('AEWRoeQFklEgRPOCPdFtyyIpquKbAQssGEHaxcDnDhTTxyKStjdHpzzNvQJIpOnjyGUnUjrtFtdyJwYFCDHkmcLpBWLpBTLXZiNnfxHXkaVornWiOvNbfuHwPJDYgkVkgyeItIKLCjLzaEcdkvHZoEVOgcNArUuRfMGpXtRNacjPRFTwqLfReLfXzuQRxBSKoKrBoTlpxGyItgTxhFcFsBWaoCWTAbSKIbTUCpspPoYVFHUWrqYHCyYreQeZPkULbitVpmgrDwdQKYQHiZjdUUGMhRCrVUmVvdELrxgtzennjDmQMWuCfxocOqlmuwcmlPdvqcDMKzUUqHIsYgfbqodoseiESLlCyNLIMEGRPhyqJhnoaghwWzwKHJWAObBTlzTybfplwaJaHzBXPsgAlBonQQzAAkSEIUFquKILLxVKhLlxHJZTWgWiTokMMaDGCQAUnZwCOoinXZyQgqaJcRokDcAjAFFIGZsdjqEHlUdBKXaxKThYgVTGFxLrXQFOREvyBUKqYGeCxCXmMOGTzzowUniWCiXSKTucAAXxvjuWTHytaGFwyXXjahHEHuGrjFFpJFerIYvgbHsRlUxSMlRqLVgPnAOfOIs', 'AEWRoeQFklEgRPOCPdFtyyIpquKbAQssGEHaxcDnDhTTxyKStjdHpzzNvQJIpOnjyGUnUjrtFtdyJwYFCDHkmcLpBWLpBTLXZiNnfxHXkaVornWiOvNbfuHwPJDYgkVkgyeItIKLCjLzaEcdkvHZoEVOgcNArUuRfMGpXtRNacjPRFTwqLfReLfXzuQRxBSKoKrBoTlpxGyItgTxhFcFsBWaoCWTAbSKIbTUCpspPoYVFHUWrqYHCyYreQeZPkULbitVpmgrDwdQKYQHiZjdUUGMhRCrVUmVvdELrxgtzennjDmQMWuCfxocOqlmuwcmlPdvqcDMKzUUqHIsYgfbqodoseiESLlCyNLIMEGRPhyqJhnoaghwWzwKHJWAObBTlzTybfplwaJaHzBXPsgAlBonQQzAAkSEIUFquKILLxVKhLlxHJZTWgWiTokMMaDGCQAUnZwCOoinXZyQgqaJcRokDcAjAFFIGZsdjqEHlUdBKXaxKThYgVTGFxLrXQFOREvyBUKqYGeCxCXmMOGTzzowUniWCiXSKTucAAXxvjuWTHytaGFwyXXjahHEHuGrjFFpJFerIYvgbHsRlUxSMlRqLVgPnAOfOIs', false, false);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('AEWRoeQFklEgRPOCPdFtyyIpquKbAQssGEHaxcDnDhTTxyKStjdHpzzNvQJIpOnjyGUnUjrtFtdyJwYFCDHkmcLpBWLpBTLXZiNnfxHXkaVornWiOvNbfuHwPJDYgkVkgyeItIKLCjLzaEcdkvHZoEVOgcNArUuRfMGpXtRNacjPRFTwqLfReLfXzuQRxBSKoKrBoTlpxGyItgTxhFcFsBWaoCWTAbSKIbTUCpspPoYVFHUWrqYHCyYreQeZPkULbitVpmgrDwdQKYQHiZjdUUGMhRCrVUmVvdELrxgtzennjDmQMWuCfxocOqlmuwcmlPdvqcDMKzUUqHIsYgfbqodoseiESLlCyNLIMEGRPhyqJhnoaghwWzwKHJWAObBTlzTybfplwaJaHzBXPsgAlBonQQzAAkSEIUFquKILLxVKhLlxHJZTWgWiTokMMaDGCQAUnZwCOoinXZyQgqaJcRokDcAjAFFIGZsdjqEHlUdBKXaxKThYgVTGFxLrXQFOREvyBUKqYGeCxCXmMOGTzzowUniWCiXSKTucAAXxvjuWTHytaGFwyXXjahHEHuGrjFFpJFerIYvgbHsRlUxSMlRqLVgPnAOfOIs', true);
        getAll_0 = objectStore_1.getAll(KeyRange_2, 1849303527);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('AEWRoeQFklEgRPOCPdFtyyIpquKbAQssGEHaxcDnDhTTxyKStjdHpzzNvQJIpOnjyGUnUjrtFtdyJwYFCDHkmcLpBWLpBTLXZiNnfxHXkaVornWiOvNbfuHwPJDYgkVkgyeItIKLCjLzaEcdkvHZoEVOgcNArUuRfMGpXtRNacjPRFTwqLfReLfXzuQRxBSKoKrBoTlpxGyItgTxhFcFsBWaoCWTAbSKIbTUCpspPoYVFHUWrqYHCyYreQeZPkULbitVpmgrDwdQKYQHiZjdUUGMhRCrVUmVvdELrxgtzennjDmQMWuCfxocOqlmuwcmlPdvqcDMKzUUqHIsYgfbqodoseiESLlCyNLIMEGRPhyqJhnoaghwWzwKHJWAObBTlzTybfplwaJaHzBXPsgAlBonQQzAAkSEIUFquKILLxVKhLlxHJZTWgWiTokMMaDGCQAUnZwCOoinXZyQgqaJcRokDcAjAFFIGZsdjqEHlUdBKXaxKThYgVTGFxLrXQFOREvyBUKqYGeCxCXmMOGTzzowUniWCiXSKTucAAXxvjuWTHytaGFwyXXjahHEHuGrjFFpJFerIYvgbHsRlUxSMlRqLVgPnAOfOIs');
        getAll_0 = objectStore_1.getAll(KeyRange_3);
    }

    var put_1 = objectStore_0.put({f0_r: '<array>', f1_w: '<boolean>', f2_n: '<string>', f3_h: '<object>', f4_e: '<object>', f5_n: '<boolean>', f6_m: '<boolean>', f7_k: '<string>', f8_o: '<array>'}, 'TXZHZIhOpLsTFryyfLYMIhPYjbsYYjECEPhAFqFnkAWTTXZUckwFAsKIPBiGaRyAmcsSNLhxgPkxmUKaIynKaemIfkQmGwsrnjSFeIyFRuRLTKNrxvNAkSnUesxsJnCGFMwcfqtYEZRTwndAogVEWiHVWZPQVIiawbhRjiYktPDXMxZYDqrStVABkuEQZtCkdcChCrGLJVenjMHTOoMnQharmKrlHmxiqEsNUWTQXbRsIKDArShSSiCUQIMmHWJcXIvOkwfMmHSpOIbevUYGvzyPoIJAyCAGreeIXpzubymHBVEJOQDYCSRPuGTqPNYjVQYNyWXnVOwoMqQNfTlyblFiYuREdKistPafsysjhblWTipPvDQsKQiLLZWbqWrEEnBmfsWzJtklgSmvLXnlwVBcwKaWExvDqwobfTnSKypMoaVNLbKqkndAqSQMyGURphWTzuvFwHADBgGHKIfTeCRzoULUJIOzeWfcybHdxVTboGwrxiEHyOGqUHianEpDdZVzumGDxDJHQWcqPgvAhqiGiSUjSkVZJKhGKDTSHGOIjseBAXEZeYfILCZKwtVrxkEzFoFybpDgsoeOeEhbnjjnYTSpIUVMhOqNtkzcNbxKxcaSOapKPKUgylCPWcTozFRYyoPxzuACgwKiWRWQwNIgifHAiaVDpJMGUVtWltpsoxjHLGpvhJjQYVCAWdlxhPPPJIEzmLsiFRhavaTQrQIaIFvdnULZi');
    var add_0 = objectStore_1.add({f0_e: '<null>', f1_a: '<string>', f2_d: '<string>', f3_n: '<string>', f4_c: '<null>', f5_l: '<string>', f6_r: '<null>', f7_j: '<number>', f8_i: '<object>', f9_h: '<number>'}, 'KLNYUIyWEpRiIccaUbPtmJCiipwerDNeVNNjOIbuHnDrxkJALNASVTISvGCuGwkFkpHDabxuVVWIfNXzZzAZMvcgcJHhlCnZURMvtHWjEHjEedFqbjFFyPpybrvZxGuaBvPODqTSFYohDGObpDScrGkhjJWyeyFlQRwrpvptOlXYdlVusayZLXXVWSghBZRciCKowIAMEdWtgdkLVbPtxZkHlKRmrblhWyNtXIQiPhjTBMlffPwkNkDVIXGuLZnygLFDRAOSTEvhjozeZZuLVnHBAnWKUanpjbAiMAIlXKPZApiLqaRQJAwkOvEeIjtNaCcTLVIJBcxXoUYmmVoiWzPAwysaGjCSsAmqOsheRThXsUkvPiyAOtLhNySwKehyLZBqCDwsjAfGjKVgBfWHplnvngSOrfkegTwBGRcHCPsozpDhXMblDQaHozKFxDAYyvhhMWwZkldQcqiRNxJmJzRmFqYcYicPQWBmWfRFepgKdOQTYoIwEQJsuTbnmwSinTVkraguvzxkpPdDZWTsRWjUuPXaxfOaxNaMajIUzBxMaBTLaldqaUXwVIUrgsCTRWoruuCJTTFGHmvuzInoocxbDJZVbgwucLlySXAwxOUjWStlOQXACEjmOYvmuLpAaFosnCIstBNzqeaGbwEynjBjAHGfaoRuyeOSOiMSgMFWqECvHdqvEqJhOQNPgcCDbKDfMSRZNwhwxIkAAweTDWOBXRiLhLNrESrNZCGkyoudupRAFbGFL');
    var objectStore_4 = db.createObjectStore('objectStore_2671');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3980 = db.transaction(['objectStore_2671'], 'readonly', {durability:"strict"})
    var objectStore_2671 = txn_3980.objectStore('objectStore_2671');
    txn_3980.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3980.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3980.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3981 = db.transaction(['objectStore_2670'], 'readwrite', {durability:"default"})
    var objectStore_2670 = txn_3981.objectStore('objectStore_2670');
    var put_2 = objectStore_2670.put({f0_x: '<boolean>', f1_m: '<null>', f2_f: '<number>', f3_k: '<string>', f4_z: '<string>'}, 'qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', false);
        get_0 = objectStore_2670.get(KeyRange_4);
    }
    catch (e){
    }

    var count_0 = objectStore_2670.count();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', true);
        get_1 = objectStore_2670.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', 'qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', false, true);
        get_2 = objectStore_2670.get(KeyRange_8);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', 'qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', true, false);
        delete_1 = objectStore_2670.delete(KeyRange_10);
    }
    catch (e){
    }

    var clear_2 = objectStore_2670.clear();
    txn_3981.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3981.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3981.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3982 = db.transaction(['objectStore_2669'], 'readwrite', {durability:"relaxed"})
    var objectStore_2669 = txn_3982.objectStore('objectStore_2669');
    var add_1 = objectStore_2669.add({f0_c: '<object>', f1_g: '<array>', f2_s: '<object>', f3_p: '<null>'}, 'diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', 'diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', true, false);
        get_3 = objectStore_2669.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', false);
        getAllKeys_0 = objectStore_2669.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw');
        getAllKeys_0 = objectStore_2669.getAllKeys(KeyRange_15);
    }

    var delete_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', true);
        delete_2 = objectStore_2669.delete(KeyRange_16);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_18 = IDBKeyRange.only('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw');
        count_1 = objectStore_2669.count(KeyRange_18);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', false);
        getAll_1 = objectStore_2669.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw');
        getAll_1 = objectStore_2669.getAll(KeyRange_21);
    }

    var getAll_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw', false);
        getAll_2 = objectStore_2669.getAll(KeyRange_22, 243994824);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('diqRVyMSBLspSClCHTjGxiKslotBzYjuxcKbDHGJrBHPeguAwbtZgUbpzBTdisxTiipCEArxvSWxqCwgTdnTHHtftcQCekyVZGXPzEQdSoyPkNCUlUVxjHkCpWEzyXkWQzTyXCAFJDbohwOAQbWSmbdlahKcGnuxVPixVzwCPneTVIpiNdkYPcgVeDsYoLViDmpWGlDTDgWWUJBTYGmSwHnrWUBSucofUOEtVOJaEdlftCbKzBFYGFmaHicGXcytdsDcQYwtjwEyuhYEhCnxZeSCZpzpdXNSYjbGZUzdyShcOgLAqMxbpkFCVFgBKuHEEtwSYjQUkdhhvUJhxCwicInaZQiVHjwEFFXhfGKVHqHSkaluwhTlnwNKwWqcBSzDXqYUYzIjyylcVRqoNdAJagXzLqcqdxhFGoGuOMLTicxHRQzdtslRKtxgMcOXSfbTqSUVbtXoaQnTpQGcjzyjVEcrNyVQKyLZfZoXjaIajnipzhqHBtzqvaQHIsriGWeRSAxCCFUYMdioaEgtAhVVjDAUezROwcbMPrXjBcboTGOGnSSoMPoWMOJHCMgkrwCGQxuxtHYVtseCcliyGXqJzKfhLmSfDnagDtrwgjmGXsmXWCGsVknHIGHPctILkRVDRmRdsDdHcRPFeYw');
        getAll_2 = objectStore_2669.getAll(KeyRange_23);
    }

    txn_3982.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3982.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3982.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3983 = db.transaction(['objectStore_2667', 'objectStore_2671'], 'readwrite', {durability:"relaxed"})
    var objectStore_2671 = txn_3983.objectStore('objectStore_2671');
    var clear_3 = objectStore_2671.clear();
    var add_2 = objectStore_2671.add({f0_t: '<number>', f1_l: '<null>', f2_t: '<null>', f3_d: '<boolean>', f4_d: '<null>', f5_s: '<null>', f6_l: '<null>', f7_f: '<string>', f8_v: '<null>'}, 'gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB');
    var getAllKeys_1;
    try{
        KeyRange_24 = IDBKeyRange.bound('gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB', 'gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB', false, false);
        getAllKeys_1 = objectStore_2671.getAllKeys(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB');
        getAllKeys_1 = objectStore_2671.getAllKeys(KeyRange_25);
    }

    var clear_4 = objectStore_2671.clear();
    var clear_5 = objectStore_2671.clear();
    var clear_6 = objectStore_2671.clear();
    var put_3 = objectStore_2671.put({f0_f: '<object>', f1_x: '<number>', f2_h: '<number>', f3_q: '<object>'}, 'TlsofSwYSevwjxWdsqfEjogmEyvfXXAJKfsvzEXSowxOTckqjoDPKbPbJtJLGzuiuQoUfNGWfCKFjSYDHRGAqpHTYiyMTbJLYjqvtsbTDuMLUTTFMjJUfBMqsieNcOkDkJRPAdRemUXXHRxMwsYlQbRrloWqVdZeoMiHQrPgTQaIwAhlrZaMlVDSuuhCdEQznReqFMBOYnTpvQjKbuAmPptdJrVavBOUNSoZLehOQhxnOGCKCzX');
    var getAllKeys_2;
    try{
        KeyRange_26 = IDBKeyRange.bound('TlsofSwYSevwjxWdsqfEjogmEyvfXXAJKfsvzEXSowxOTckqjoDPKbPbJtJLGzuiuQoUfNGWfCKFjSYDHRGAqpHTYiyMTbJLYjqvtsbTDuMLUTTFMjJUfBMqsieNcOkDkJRPAdRemUXXHRxMwsYlQbRrloWqVdZeoMiHQrPgTQaIwAhlrZaMlVDSuuhCdEQznReqFMBOYnTpvQjKbuAmPptdJrVavBOUNSoZLehOQhxnOGCKCzX', 'gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB', false, false);
        getAllKeys_2 = objectStore_2671.getAllKeys(KeyRange_26, 1553246617);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB');
        getAllKeys_2 = objectStore_2671.getAllKeys(KeyRange_27);
    }

    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('gVKAKHspQbWHqCrRDHfaLVrhZomWDLOvOZqmVUnXqOAWWGiXaMhsntaizlKxIuaiPfKWfoNYqzHPpFOzCXLExbtXidEoUNICPkLatMlzKhtujHYaRYLPpfIhPoASSzjkcsmGvpVyqCNMGMKaczZodOnpNeAcKZRDMPrfmwgjtPojeMKKbQJKkMjHaRCqhANDbiZpKjNOllGJjkDhuHPkdqUEBGlSCykQQmCVOINLdKJSUxUSOjqZfPWpeSoBCZiEplooxVbegONvKwYfIamYaBTcTUSdpdXYgCmEBHuosQKDpNZavpWiZyHAHLhhcrioMkWSmIjTyXkmWFBIGusRyeNBScXMOEVRpVLVZYBYZfyQugqUTtnsWRohWCFoFAtYtLipyfsfoJvpuNSbiVeQVaFEEoeOhxqhSKdlCEmDojIoKuQhAuUKrNihTCRTSCBOQAkTbZtaFSdQTvXNRWtehbOwcHBApqckHMTBTiavbsceBmOhwBWLEKMDyjFQBdIAFxQrPaUHnyBJEprSSPuzBEZBlhuBTRnwenIgAliKoICRmuIgQZtSjKHNDcNIRHkzjKqzmELiMXFqwnKPdVyNFaIHcBAyTngIBuabANgnkjshjUtOCeIlwCadAVgosnSKmNsfAfKCkllEWVXwOtJEsiVfwPTvSuPTildutyhaGoDqFJMipKJPgYmFNkMFhHrHaKYdDmPtUqmLvwuyELCZxZTJMtBnNAdtIowRaOjDaESrHrsFlWTaCubDbhhwGFseTELJfPGZpbyKiStEoMkLDqfXOTaCsPpZKHQXOmRPWzwlsLpqvwTlhItMEVdwBWIXIRzgemDuGiRWEornLmOmAHwFHDiYuqedB', false);
        get_4 = objectStore_2671.get(KeyRange_28);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('TlsofSwYSevwjxWdsqfEjogmEyvfXXAJKfsvzEXSowxOTckqjoDPKbPbJtJLGzuiuQoUfNGWfCKFjSYDHRGAqpHTYiyMTbJLYjqvtsbTDuMLUTTFMjJUfBMqsieNcOkDkJRPAdRemUXXHRxMwsYlQbRrloWqVdZeoMiHQrPgTQaIwAhlrZaMlVDSuuhCdEQznReqFMBOYnTpvQjKbuAmPptdJrVavBOUNSoZLehOQhxnOGCKCzX', 'TlsofSwYSevwjxWdsqfEjogmEyvfXXAJKfsvzEXSowxOTckqjoDPKbPbJtJLGzuiuQoUfNGWfCKFjSYDHRGAqpHTYiyMTbJLYjqvtsbTDuMLUTTFMjJUfBMqsieNcOkDkJRPAdRemUXXHRxMwsYlQbRrloWqVdZeoMiHQrPgTQaIwAhlrZaMlVDSuuhCdEQznReqFMBOYnTpvQjKbuAmPptdJrVavBOUNSoZLehOQhxnOGCKCzX', false, true);
        count_2 = objectStore_2671.count(KeyRange_30);
    }
    catch (e){
    }

    txn_3983.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3983.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3983.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3984 = db.transaction(['objectStore_2670'], 'readwrite', {durability:"strict"})
    var objectStore_2670 = txn_3984.objectStore('objectStore_2670');
    var get_5;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', false);
        get_5 = objectStore_2670.get(KeyRange_32);
    }
    catch (e){
    }

    var clear_7 = objectStore_2670.clear();
    var add_3 = objectStore_2670.add({f0_v: '<array>', f1_d: '<number>', f2_l: '<string>', f3_i: '<object>'}, 'WlLzfpnFSNLaIaDAPdKTGSKUUEWpjlNiAaPXHyZCYruXmTeBaTRwioSVZQFMuFOIpAfmETMompTkbIeCevbSkJNsNeWSgngLGKClqGDnOagXJymYciNOqsjHDVWoKHkzegVavxOwAteEtxBvvtnhdBuoeDsLfaXszVwDceCrVyEDDfgGyqjjHpSMQNpAeDqDwlpnSprFxUJCZsgMGaWzfxLpSQUuTEjMLBASNNWkGcHmYIULMTSCBBoAlAQEhrzrZdzteVedmwqIFXNoeOMOOBotQfTMCDBpHiYIgkCtimMEjJEkRyigTPhtJHGpfHUxBPiKRehvqdWebXvVmpXIetBTrdHVpjoPCzWBnuHwqmUZApyQcnCbWlWoqNcxFTJauYWaeNydNYDAuvtaEBpCLCfovjMLecklxbXZBzLoOtuPAqvjjgOJfAxMomlMfEIufvKsrouNISptsTfJIAqyFZvCcBHjXtbQtUuEcvuhVqbhWXwcazciAiCkxqKYjJfqXHAuwDsWNiZExhTpKaLUUhXUTWITjKYQTGNXFHCDhGCrgsfkbXNReTbKBaAqbQmRYdgJnYqldvAyjyjSpuAqxCVxSsTWEIrtuWJrgUVRgaPKWZyUBzNHBQZMJhfTgCuVZWzIbKjGliQahNVPpjyEVHOIDocwDDkMgZUAurWKibREAXvpdNIKBNDMFrGauAwokQrAypcqDXKRvERGypTrbKbvpBYULjjHpNLZstjsNQFrHxyQNFzfaPMvVtZQANydziTsCUmKtBtkjxdczYKupkGqYAxLXqlmKuASIfNDqa');
    var put_4 = objectStore_2670.put({f0_b: '<string>', f1_t: '<number>', f2_w: '<null>', f3_a: '<string>', f4_p: '<array>', f5_f: '<boolean>'}, 'jJwayhsQddQKiukFxaCBxuTOGfZyWUlslcqssLIDdspyEkYzqoTqQDKewUBWudPgYrsgKWFPbJSwvlVUYSeryVNgLPpthkFtAxZlxUmMotHkbXTMxXQgzSaFuGZfcllObcRZfRqVcMvSciBKyMlMebjZlvsDRVpCbNsoGsJtIqFAogZAZteJBCSOqLmuptJFddslsFBkVNqZHJludTGWHRfexFOgQCuCRWKiPeVJCYO');
    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('WlLzfpnFSNLaIaDAPdKTGSKUUEWpjlNiAaPXHyZCYruXmTeBaTRwioSVZQFMuFOIpAfmETMompTkbIeCevbSkJNsNeWSgngLGKClqGDnOagXJymYciNOqsjHDVWoKHkzegVavxOwAteEtxBvvtnhdBuoeDsLfaXszVwDceCrVyEDDfgGyqjjHpSMQNpAeDqDwlpnSprFxUJCZsgMGaWzfxLpSQUuTEjMLBASNNWkGcHmYIULMTSCBBoAlAQEhrzrZdzteVedmwqIFXNoeOMOOBotQfTMCDBpHiYIgkCtimMEjJEkRyigTPhtJHGpfHUxBPiKRehvqdWebXvVmpXIetBTrdHVpjoPCzWBnuHwqmUZApyQcnCbWlWoqNcxFTJauYWaeNydNYDAuvtaEBpCLCfovjMLecklxbXZBzLoOtuPAqvjjgOJfAxMomlMfEIufvKsrouNISptsTfJIAqyFZvCcBHjXtbQtUuEcvuhVqbhWXwcazciAiCkxqKYjJfqXHAuwDsWNiZExhTpKaLUUhXUTWITjKYQTGNXFHCDhGCrgsfkbXNReTbKBaAqbQmRYdgJnYqldvAyjyjSpuAqxCVxSsTWEIrtuWJrgUVRgaPKWZyUBzNHBQZMJhfTgCuVZWzIbKjGliQahNVPpjyEVHOIDocwDDkMgZUAurWKibREAXvpdNIKBNDMFrGauAwokQrAypcqDXKRvERGypTrbKbvpBYULjjHpNLZstjsNQFrHxyQNFzfaPMvVtZQANydziTsCUmKtBtkjxdczYKupkGqYAxLXqlmKuASIfNDqa', 'qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', true, true);
        get_6 = objectStore_2670.get(KeyRange_34);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('qEFXheXZwbvXOhJYouQShxusfQPzFaHaogZOyjDFiNLXnYNfLkEPshJodNadrteHMVvTmoTAYYwAIKmEltCJdJxgIGXsrfXnVVzjwxeykvIbZnjxliCUkriHGyOIonNoNKYnPxKDvrXOIPgYJjYWhcacqIFJBeZfTYfhOCLPWDLGCpVMwoSzbYWNwaljcYhfzCbtwgESBELtPGUITKfeBwadMsCXkLvQOTevNvITlQzhQtWWHvmBYllYPzVWAuqwjwMJEpfOQUdNEMQEljoIEdhLFNGcSsrBnfYrAACEoJBRBfFjjpdCGzPRwpUPTWyyPSuNIgKkyHnyVDlCHdpYeBnB', 'jJwayhsQddQKiukFxaCBxuTOGfZyWUlslcqssLIDdspyEkYzqoTqQDKewUBWudPgYrsgKWFPbJSwvlVUYSeryVNgLPpthkFtAxZlxUmMotHkbXTMxXQgzSaFuGZfcllObcRZfRqVcMvSciBKyMlMebjZlvsDRVpCbNsoGsJtIqFAogZAZteJBCSOqLmuptJFddslsFBkVNqZHJludTGWHRfexFOgQCuCRWKiPeVJCYO', true, true);
        get_7 = objectStore_2670.get(KeyRange_36);
    }
    catch (e){
    }

    var clear_8 = objectStore_2670.clear();
    txn_3984.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3984.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3984.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1580')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};