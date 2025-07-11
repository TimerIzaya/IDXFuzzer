let db;
const openRequest = window.indexedDB.open('str_6004', 945655275596618)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1981', {keypath: 'aHjjVPoxuHbubyxKRPZAOhUKjsZgszuQtEdkQoEKjclvZVbgPegOGUYStFejhJpvxeQAgYgrplfslrvGOgbeqQgUHxtrxVtXiBUwFVFPkuyePXZBlZUoAdxfUVZYIHZAIUeGTxcaABRiLbzzdljowPjfYwCCYMmAMtTmuIOLDBeQFJCKxTdaNidLGRxvPmtHIxzafdARIrucMNSGvORWfDGWLgipYpTGBhuoROXYOVSdqfXJeOBSJYIIVJxvmyRqJiIFMaFFikwzmhCwsNcAmxRlrkzaKoQJTaHCDzxfADhMlDNHubBCDJcggMOVieeouHBVaSajqEBQALSlPqKMljNsUjwBVJYYElOhArYWxwmYEmMFrLQylydHjjlMkfYWxgnLLftBaocubrKqraJzloAGmvknkPpWFsxHkeWIRQNPIWvepJXEBtFVCQWKRqOczQWJtCyYDJfvsSJLHxVAiEWhclWuetgHUApnexJEzjHoKoHEzLltvPb'});
    var index_1323 = objectStore_0.createIndex('index_1323', 'test', {unique: true, multiEntry: true});
    var objectStore_1 = db.createObjectStore('objectStore_1982', {keypath: 'dwehfRSQKedyTIaGoDfkvlRAjRxNYbGMeBrFhuqgNAtWuuAZAkdtxzPWQZSnKaiiFUnVaRKFURsjziNBnLXc.FTuwHIulyKxvrEpbDYjzaEHmwysUHBahdxCZCfVDpJmfMIHlnlHPrNgqaklEAbAFZUPYjyaECkBQtLDPjPAXbIiWRkDSQgZMKArIgPiqyhXBWOhbagTVPwUDlFtomJsWTbnntVFBwCNEgCTViKTPBODEnlNjUUPbopGyqWHelxRTrtVGfsvovvBcFgFhwCdyyySdCqLOpPTmYcoxcgWwAAwBIrZMbNvjCObZfmcXxsLCbDnQWGmyvLHSeggXwYTLLCAWAqJBIdcpiKRbeOFoJbGEwlTWkPwjoUKVnPAWoNoUopIVhFsOxFmyfiCOSscaPNDNfOnoptZPpwMXnjoggYWioRuoKCzTXoYpPCEtZcATZEnNHIfrTSrDtLKRqWEwZkJrEiseUnpAqDwWPqtbMKGGbDBVcEAmwqmlKFZQGbxOSWrrCPAblQfxaeKfXSAPyXfIEmjjQBwieVylTNlDHWoUGLuteLSwpMQNQZfjcGjoAnvbXUdKOOSAzUQqArUvuDEAMeAfzysRnQeeldLqbkUhJyhZQLWLKlmOEkGqFEqNlJdVnCetRfFpsnmMGCCVPqroAOkEVwrENizJWDUjAJtBiKzQbGrPwZFwuKewrsgzrJuvyTIKbuFoLEuiALzuOuYESSPRLyYIMPhLFJAJiSsDlwShaWKfvVaWXMFjtUZpfGbPoxNidEyIoQBHGoNeZPYjWVcxTtYGPEFRLHppHnWUZXATsfpWvzDwoPMSPSptsMlNoHivJeXbxafSwhzHHfFZPdpfINCZRhXTYUrasXYykoCUScxbUosFQcZSbbWlrqxYdsJSPhHYkBSGDpckgNeVncqeZtQuhbqKizENhnmiYOjzTfjlOPZvgUFJosTwwiQUqzuECdcwuMYyqJUNMApSKkxrgrIFuLTZCjGfeFvKTHsJfyCRAVlVtfyohnFpUWUCRAKZSipmcrCZezsiAGMjmymJmbhKKidvBnQDQgnpXcDCDRefYeUcaMP.sbMAzrgUqGmCajMbLfJFHhPqEIwPbZoyKxNWbRqtbBASKPwxFOuwKxJFqdDlRYBUfLQaRzTHKIfMlSCiDDtQLsDjaAHsTEUyrIscKTFeaTkdJBuXIkTvdiZalFveqpwnkZJsuMbtyavyNzwsYhPMuTKEdyxwInHEivQQqFUmgfWRuvuUodlxERIASveOEhiHmasFxsjwqjGMzPqWXavMZgMEgqkZEeSYOkGnEdUktNnAwJflXaeNisUUULirLSvdnvvlsjpDdEKXMKuECYzTvjNecGtWYJHZftmuFMzjQIMhisVLaHuMdlfTLnuWYRWgBhSeYaLZOxDGtrAhDUkWZpLTlfBzLuqtWjOdrVZdUpsskaFVXgSEwcWxgSqzSvsjAOHcXOQpNdkkYFZPmIIHIrQIRRzeeavSOPZRBCuTPnAzgvVXvlHCATpOwgHzPGRYgGESWkNaKAUwYcVnohJUKSMmPVFHsxriLoGACcxxPUQvJfrKyIDUvoIcWuRQhEXuAKzQucrMGceMiWUQVpUZbNdUNQVNdzNhrkvpmhTWqpkBPYGFTpAVFlGwXxVhaXdoGEvn.fFMoaCNkpuUjxXbLiaxOpzpMKOIophsfdTBEtDXGnQcnpqqragwOHnpgvyXtfCdwYMcCqoCmkqbdRLuZJPCzLFKkUDIubWTrLjcSrqujpnDrudQTyXueIFjSjtRfMpeStYVvrwLIUgUyrjhzproovOgYcutrIBRjeIiJtEMdoPOzndnidleTTkFfKYJmYrXDlYBegbCXmfPpeNKuapQnqwxCLrbKpgeIUiHyNXqrsCfEETPPTmsiEXkDsDJmzMlyxuxumJFTmWpLJAQoNImX.gZoLCiAPvtkfgEKseHEDHjhLOAkIIdINNcxOKKnSIAuruWLQtLuAiVxeQDXsrpYXwmCWeaXFoodrwieTOREKHbZgtkeSwWMHszFSLiIdpBTZfGVRtxMWJzwLulbtkFuftUWPMDnDbazrbhbMBoWuOYqRSYCbhAqRzPvCStraeOvDXcBLrzemCAeLJlnBvueYItAuodgSdSIiULQSZgQIUeVLpYZfWBgXKvMixtnKKUShpjlTFFXVfnIyJpPvVAtOUBXJlldGHpXTMfwXIFaGSgixVfTIffgHORLqbGHfPYZPmXxYhuzWTjxGeWNQOtkYrkOuNSgwGZtKymKQBymuysbVBWagmDKhjCWqVZwUGYZoizpfYJwPLbBHWlgPpyAMDRXbrDXjXhVoqxFGlzAbETIEkylCycAMeaFwUtWwtJSDiYXtIkEFtbXYQtQezNqAEPSoeNqySKcGxzhRihusKXCuLsuusgQxUnniyGNWgZevZKWqLdHbtBTQsej.JqfdvKIHoemKvZzLzvlqXJPbHCfUeLvdOFeJiIpmigrfqsYaSHPcKQuQYcQPrurqMSbipNqQWplxPuvnZPyfXUFUHtZebykrAdvtxVmIwYGdLUlyofShbVoXucxmulTWOGlmlDGryXzoBdQBPIJlNxbfBkIuiXaFUNAYauqMFgJeClcSaJvUOuVZMdjlHAcbIeWZRzVrmEiPbCnHwORpRMcHPKORYzvKikcytRLVrKJCUjewhnGIcJTvvqUavJKGwQFzYtPGKAoqBZKlrBdWCIuKzzmRYMjPYqWshyaHLRzFeoGMwysmdQxsAqEtOhfVSBVPkHYkdbiwzaKtLnJIYlLhjSFnoyQlfADWSOssFwWnyjliEjhakOasrEpfhALNohyiavEwzCklMNfvkvSGOtuvRwOKNRPuOKaLuYwxpLdeHzdfKPCrulRXKYoiGgXnxkCieNoWiFQMmWeTusstaYTzVdWhzoGYPCWtktdLcQlxmUANKcffZYBIdKRUQXKTbWwLdGTYZuYlSFsubnpjRHQfFTZHOnBaxroOLoRQodjSPYfMFEnfcJTJMVTpvBbyAJujDcPZaNkKDBMPTJsLqRnYUnfEBukwhFbbjHiNcEDkwkkGEulFYrmjuNSDXBmLBmPAGqonDmGsqbvkKXjKCbuhtbBbEkcaQWpfGoudNiHULvPfxDNogYTTIREcQNkdqRPUClgwRlbziQuriDUwLBKlv.RQJzpKfLtBgZExSjDrgYOWKLviaZzZbWmJeGbIgbxLRMtxioPenYZNUSUVPqSvABuzShOeTqcuxutZeFYvXxXRxnnTixveXNtMqQVeMOKuPNTGFrNvMTVPHiJUvNPZLYbNxGEMxXgqXRIYWGNwKvXNNnOdFWWLpByyKkGywNAcasCIUBbkqGbynshkAhYiLClgYGXTjTGPOemITZjbqZSyAcDTEuHDoGYCtFhJqQNZKjfRtnRawYHUbRkAWtTeJMewwmJlpTAjQmTVaIhjUyhWpzcwqzTHNYdwryBPDqKvrzvVbuxPnOsbGCbPFQAemTJCAHFsEiTrQBQROaAtyNedffTBmLBARcEGBShLsHZrNCbdFMgtUZZpmlnWJcXJYVXlJUDaKEPHKTIGMjthsFrQFrdiaCKmIENWCEqdpeYrCUBtuoZHACNzIXZeJfvQMFAFRXFVcYIHxFBpFSRcUXNrynAMshoTfbpjqqjJmbFQFmDUUMivuBVkNTWZsHIilpXuPpXAUMTrUOCBxMzGyIPWNnGYqCBMQeKBwLrLlTVprURupy'});
    var objectStore_2 = db.createObjectStore('objectStore_1983', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_2.clear();
    objectStore_0.deleteIndex('index_1323')
    var put_0 = objectStore_0.put({f0_a: '<number>'}, 'EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar');
    var getAll_0 = objectStore_0.getAll(2334420458);
    var add_0 = objectStore_0.add({f0_e: '<array>', f1_l: '<array>', f2_x: '<array>', f3_u: '<string>', f4_q: '<array>', f5_r: '<number>', f6_c: '<object>', f7_n: '<number>'}, 'BPRtWkEUjZR');
    var index_1324 = objectStore_2.createIndex('index_1324', 'test', {unique: true, multiEntry: false});
    var index_1325 = objectStore_1.createIndex('index_1325', 'test', {unique: false, multiEntry: true});
    var index_1326 = objectStore_2.createIndex('index_1326', 'test');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('BPRtWkEUjZR', 'EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', true, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2955 = db.transaction(['objectStore_1982'], 'readwrite', {durability:"relaxed"})
    var objectStore_1982 = txn_2955.objectStore('objectStore_1982');
    var clear_2 = objectStore_1982.clear();
    var clear_3 = objectStore_1982.clear();
    var clear_4 = objectStore_1982.clear();
    var put_1 = objectStore_1982.put({f0_k: '<object>', f1_r: '<string>', f2_n: '<null>', f3_l: '<number>', f4_x: '<string>', f5_x: '<number>'}, 'pHgjrVIyGLFjXFtcOjyTtCRUMsnhBbzxtffYlSWbTpSNujYXrFhQhauWdYoihXaYUAqTpBBDqLoMAOeXetGwJnwibvJVolNFJxtoQXjIxmTwXgAtBiaYsIBnFvXaABFkYRktkfNhfNUJneBFBVGJdQRBGGbcmHHNZJeetQUIgSxPomwOgSaLnasgSDvNOIdpBjHFBsoGmfDmMvBZiHgnAIIepcvcWcKGuBZRpIonVxaCBpLjawKvByYkUwPMQCfUsVHWmVZZihbPAXoiYDojIZCtGoGlRVIMRGDOHlEfdEYKQsStGzxvSUxcDoZoHizrxTLZBhjUryHweCFUmNWEmlYXFBLEQsHwNPkKCXtkFSIIyEbihpumioTFpMHxtzWzYFuSFFDjBMkJWRGlbTDWMbWNxCxlWvhrmKlQNDjimpaOJopWfWNfxIWbsZZbnFoiLTLSZVRKgaaEukreeYucgYOkMeZZBwOcZwTZpAooxcJSAtNhictEIKAdYcyUkOstbpVzquMBFjzQFxwTRKVgnFLGYzTRGVGEmVbvoFiJRCVbqpxRlNsmdWVyDCxwzYMKwlypZxeJQbOXFsELdGeFOyKNiSzGCYWnRvAbSqOyZXPzbcXZtDksCYiwCMeFsVTpxmNSNiKnkYHjlcxKPeTLPuMFsGnZHnFLaunZJrCMtvyfBaaNiaFMhnRwlcUijLECfYaJKpwWLbtqgzezXPKoFWPUpewWRXhdx');
    var getAll_1 = objectStore_1982.getAll();
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('pHgjrVIyGLFjXFtcOjyTtCRUMsnhBbzxtffYlSWbTpSNujYXrFhQhauWdYoihXaYUAqTpBBDqLoMAOeXetGwJnwibvJVolNFJxtoQXjIxmTwXgAtBiaYsIBnFvXaABFkYRktkfNhfNUJneBFBVGJdQRBGGbcmHHNZJeetQUIgSxPomwOgSaLnasgSDvNOIdpBjHFBsoGmfDmMvBZiHgnAIIepcvcWcKGuBZRpIonVxaCBpLjawKvByYkUwPMQCfUsVHWmVZZihbPAXoiYDojIZCtGoGlRVIMRGDOHlEfdEYKQsStGzxvSUxcDoZoHizrxTLZBhjUryHweCFUmNWEmlYXFBLEQsHwNPkKCXtkFSIIyEbihpumioTFpMHxtzWzYFuSFFDjBMkJWRGlbTDWMbWNxCxlWvhrmKlQNDjimpaOJopWfWNfxIWbsZZbnFoiLTLSZVRKgaaEukreeYucgYOkMeZZBwOcZwTZpAooxcJSAtNhictEIKAdYcyUkOstbpVzquMBFjzQFxwTRKVgnFLGYzTRGVGEmVbvoFiJRCVbqpxRlNsmdWVyDCxwzYMKwlypZxeJQbOXFsELdGeFOyKNiSzGCYWnRvAbSqOyZXPzbcXZtDksCYiwCMeFsVTpxmNSNiKnkYHjlcxKPeTLPuMFsGnZHnFLaunZJrCMtvyfBaaNiaFMhnRwlcUijLECfYaJKpwWLbtqgzezXPKoFWPUpewWRXhdx', 'pHgjrVIyGLFjXFtcOjyTtCRUMsnhBbzxtffYlSWbTpSNujYXrFhQhauWdYoihXaYUAqTpBBDqLoMAOeXetGwJnwibvJVolNFJxtoQXjIxmTwXgAtBiaYsIBnFvXaABFkYRktkfNhfNUJneBFBVGJdQRBGGbcmHHNZJeetQUIgSxPomwOgSaLnasgSDvNOIdpBjHFBsoGmfDmMvBZiHgnAIIepcvcWcKGuBZRpIonVxaCBpLjawKvByYkUwPMQCfUsVHWmVZZihbPAXoiYDojIZCtGoGlRVIMRGDOHlEfdEYKQsStGzxvSUxcDoZoHizrxTLZBhjUryHweCFUmNWEmlYXFBLEQsHwNPkKCXtkFSIIyEbihpumioTFpMHxtzWzYFuSFFDjBMkJWRGlbTDWMbWNxCxlWvhrmKlQNDjimpaOJopWfWNfxIWbsZZbnFoiLTLSZVRKgaaEukreeYucgYOkMeZZBwOcZwTZpAooxcJSAtNhictEIKAdYcyUkOstbpVzquMBFjzQFxwTRKVgnFLGYzTRGVGEmVbvoFiJRCVbqpxRlNsmdWVyDCxwzYMKwlypZxeJQbOXFsELdGeFOyKNiSzGCYWnRvAbSqOyZXPzbcXZtDksCYiwCMeFsVTpxmNSNiKnkYHjlcxKPeTLPuMFsGnZHnFLaunZJrCMtvyfBaaNiaFMhnRwlcUijLECfYaJKpwWLbtqgzezXPKoFWPUpewWRXhdx', false, true);
        get_0 = objectStore_1982.get(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('pHgjrVIyGLFjXFtcOjyTtCRUMsnhBbzxtffYlSWbTpSNujYXrFhQhauWdYoihXaYUAqTpBBDqLoMAOeXetGwJnwibvJVolNFJxtoQXjIxmTwXgAtBiaYsIBnFvXaABFkYRktkfNhfNUJneBFBVGJdQRBGGbcmHHNZJeetQUIgSxPomwOgSaLnasgSDvNOIdpBjHFBsoGmfDmMvBZiHgnAIIepcvcWcKGuBZRpIonVxaCBpLjawKvByYkUwPMQCfUsVHWmVZZihbPAXoiYDojIZCtGoGlRVIMRGDOHlEfdEYKQsStGzxvSUxcDoZoHizrxTLZBhjUryHweCFUmNWEmlYXFBLEQsHwNPkKCXtkFSIIyEbihpumioTFpMHxtzWzYFuSFFDjBMkJWRGlbTDWMbWNxCxlWvhrmKlQNDjimpaOJopWfWNfxIWbsZZbnFoiLTLSZVRKgaaEukreeYucgYOkMeZZBwOcZwTZpAooxcJSAtNhictEIKAdYcyUkOstbpVzquMBFjzQFxwTRKVgnFLGYzTRGVGEmVbvoFiJRCVbqpxRlNsmdWVyDCxwzYMKwlypZxeJQbOXFsELdGeFOyKNiSzGCYWnRvAbSqOyZXPzbcXZtDksCYiwCMeFsVTpxmNSNiKnkYHjlcxKPeTLPuMFsGnZHnFLaunZJrCMtvyfBaaNiaFMhnRwlcUijLECfYaJKpwWLbtqgzezXPKoFWPUpewWRXhdx', true);
        delete_0 = objectStore_1982.delete(KeyRange_4);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.only('pHgjrVIyGLFjXFtcOjyTtCRUMsnhBbzxtffYlSWbTpSNujYXrFhQhauWdYoihXaYUAqTpBBDqLoMAOeXetGwJnwibvJVolNFJxtoQXjIxmTwXgAtBiaYsIBnFvXaABFkYRktkfNhfNUJneBFBVGJdQRBGGbcmHHNZJeetQUIgSxPomwOgSaLnasgSDvNOIdpBjHFBsoGmfDmMvBZiHgnAIIepcvcWcKGuBZRpIonVxaCBpLjawKvByYkUwPMQCfUsVHWmVZZihbPAXoiYDojIZCtGoGlRVIMRGDOHlEfdEYKQsStGzxvSUxcDoZoHizrxTLZBhjUryHweCFUmNWEmlYXFBLEQsHwNPkKCXtkFSIIyEbihpumioTFpMHxtzWzYFuSFFDjBMkJWRGlbTDWMbWNxCxlWvhrmKlQNDjimpaOJopWfWNfxIWbsZZbnFoiLTLSZVRKgaaEukreeYucgYOkMeZZBwOcZwTZpAooxcJSAtNhictEIKAdYcyUkOstbpVzquMBFjzQFxwTRKVgnFLGYzTRGVGEmVbvoFiJRCVbqpxRlNsmdWVyDCxwzYMKwlypZxeJQbOXFsELdGeFOyKNiSzGCYWnRvAbSqOyZXPzbcXZtDksCYiwCMeFsVTpxmNSNiKnkYHjlcxKPeTLPuMFsGnZHnFLaunZJrCMtvyfBaaNiaFMhnRwlcUijLECfYaJKpwWLbtqgzezXPKoFWPUpewWRXhdx');
        delete_1 = objectStore_1982.delete(KeyRange_6);
    }
    catch (e){
    }

    txn_2955.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2955.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2955.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2956 = db.transaction(['objectStore_1981'], 'readonly', {durability:"relaxed"})
    var objectStore_1981 = txn_2956.objectStore('objectStore_1981');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.only('BPRtWkEUjZR');
        get_1 = objectStore_1981.get(KeyRange_8);
    }
    catch (e){
    }

    var count_1 = objectStore_1981.count();
    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.only('EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar');
        getAllKeys_0 = objectStore_1981.getAllKeys(KeyRange_10, 3824249813);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('BPRtWkEUjZR');
        getAllKeys_0 = objectStore_1981.getAllKeys(KeyRange_11);
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', 'EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', false, true);
        get_2 = objectStore_1981.get(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', 'EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', true, false);
        get_3 = objectStore_1981.get(KeyRange_14);
    }
    catch (e){
    }

    var count_2 = objectStore_1981.count();
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('BPRtWkEUjZR', true);
        get_4 = objectStore_1981.get(KeyRange_16);
    }
    catch (e){
    }

    var count_3 = objectStore_1981.count();
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('BPRtWkEUjZR', false);
        get_5 = objectStore_1981.get(KeyRange_18);
    }
    catch (e){
    }

    txn_2956.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2956.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2956.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2957 = db.transaction(['objectStore_1981', 'objectStore_1983', 'objectStore_1982'], 'readonly', {durability:"relaxed"})
    var objectStore_1982 = txn_2957.objectStore('objectStore_1982');
    var count_4 = objectStore_1982.count();
    var index_0 = objectStore_1982.index('index_1325');
    var count_5 = objectStore_1982.count();
    var index_1 = objectStore_1982.index('index_1325');
    var count_6 = objectStore_1982.count();
    var index_2 = objectStore_1982.index('index_1325');
    txn_2957.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2957.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2957.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2958 = db.transaction(['objectStore_1983', 'objectStore_1982'], 'readwrite', {durability:"strict"})
    var objectStore_1983 = txn_2958.objectStore('objectStore_1983');
    var add_1 = objectStore_1983.add({f0_b: '<array>', f1_j: '<null>', f2_y: '<string>', f3_s: '<array>', f4_i: '<object>', f5_t: '<null>', f6_j: '<boolean>', f7_f: '<array>', f8_r: '<null>', f9_c: '<null>', f10_a: '<number>', f11_f: '<number>', f12_j: '<null>', f13_s: '<object>', f14_p: '<object>', f15_t: '<array>', f16_v: '<string>', f17_d: '<null>', f18_q: '<string>', f19_o: '<object>', f20_m: '<null>', f21_j: '<string>', f22_c: '<number>', f23_d: '<object>', f24_r: '<string>', f25_n: '<null>', f26_v: '<object>', f27_n: '<null>', f28_f: '<array>', f29_t: '<array>', f30_b: '<array>', f31_j: '<object>', f32_z: '<null>', f33_n: '<object>', f34_q: '<string>', f35_r: '<null>', f36_t: '<array>', f37_a: '<string>', f38_s: '<number>', f39_z: '<array>', f40_q: '<null>', f41_v: '<number>', f42_a: '<array>', f43_a: '<string>', f44_i: '<boolean>', f45_j: '<array>', f46_k: '<boolean>', f47_e: '<boolean>', f48_a: '<array>', f49_t: '<boolean>', f50_e: '<boolean>', f51_h: '<number>', f52_p: '<string>', f53_z: '<boolean>', f54_r: '<string>', f55_s: '<number>', f56_y: '<boolean>', f57_d: '<boolean>', f58_v: '<null>', f59_g: '<string>', f60_f: '<string>', f61_u: '<null>', f62_a: '<string>', f63_c: '<boolean>', f64_g: '<null>', f65_f: '<string>', f66_j: '<object>', f67_k: '<object>', f68_o: '<number>', f69_c: '<string>', f70_e: '<boolean>', f71_z: '<null>', f72_w: '<boolean>', f73_g: '<object>', f74_n: '<null>', f75_j: '<boolean>', f76_h: '<array>', f77_x: '<object>', f78_k: '<string>', f79_r: '<number>', f80_n: '<string>', f81_l: '<object>', f82_x: '<boolean>', f83_w: '<array>', f84_u: '<null>', f85_p: '<number>', f86_a: '<null>', f87_m: '<number>', f88_w: '<string>', f89_o: '<object>', f90_v: '<boolean>', f91_p: '<string>', f92_n: '<number>', f93_r: '<number>', f94_a: '<object>', f95_l: '<string>', f96_g: '<null>', f97_b: '<null>', f98_f: '<boolean>', f99_o: '<boolean>', f100_m: '<null>', f101_z: '<boolean>', f102_v: '<boolean>', f103_r: '<object>', f104_a: '<number>', f105_r: '<array>', f106_x: '<object>', f107_u: '<array>', f108_s: '<array>', f109_d: '<boolean>', f110_j: '<boolean>', f111_m: '<boolean>', f112_a: '<boolean>', f113_f: '<object>', f114_w: '<number>', f115_j: '<boolean>', f116_f: '<string>', f117_b: '<object>', f118_m: '<string>', f119_v: '<object>', f120_d: '<object>', f121_i: '<number>', f122_c: '<number>', f123_z: '<boolean>', f124_b: '<number>', f125_f: '<array>', f126_g: '<boolean>', f127_q: '<number>', f128_r: '<array>', f129_w: '<array>', f130_m: '<boolean>', f131_b: '<null>', f132_y: '<boolean>', f133_d: '<null>', f134_l: '<number>', f135_d: '<array>', f136_p: '<object>', f137_a: '<array>', f138_o: '<string>', f139_h: '<string>', f140_m: '<array>', f141_w: '<boolean>', f142_h: '<object>', f143_t: '<array>', f144_j: '<number>', f145_i: '<number>', f146_h: '<null>', f147_e: '<number>', f148_y: '<number>', f149_z: '<object>', f150_f: '<number>', f151_t: '<boolean>', f152_p: '<object>', f153_m: '<null>', f154_x: '<number>', f155_f: '<string>', f156_g: '<boolean>', f157_x: '<number>', f158_l: '<array>', f159_e: '<null>', f160_z: '<boolean>', f161_v: '<array>', f162_v: '<object>', f163_s: '<null>', f164_s: '<object>', f165_n: '<array>', f166_u: '<number>', f167_x: '<number>', f168_j: '<null>', f169_a: '<array>', f170_u: '<boolean>', f171_l: '<boolean>', f172_c: '<boolean>', f173_y: '<null>', f174_i: '<null>', f175_b: '<null>', f176_w: '<string>', f177_t: '<boolean>', f178_c: '<string>', f179_i: '<array>', f180_p: '<null>', f181_y: '<null>', f182_b: '<object>', f183_q: '<string>', f184_k: '<object>', f185_n: '<array>', f186_w: '<null>', f187_o: '<array>', f188_n: '<boolean>', f189_w: '<boolean>', f190_c: '<boolean>', f191_e: '<number>', f192_v: '<string>', f193_d: '<array>', f194_c: '<string>', f195_x: '<boolean>', f196_h: '<array>', f197_a: '<boolean>', f198_v: '<array>', f199_s: '<array>', f200_z: '<array>', f201_q: '<object>', f202_a: '<string>', f203_e: '<boolean>', f204_n: '<object>', f205_f: '<boolean>', f206_i: '<number>', f207_z: '<array>', f208_v: '<number>', f209_y: '<array>', f210_b: '<object>', f211_m: '<boolean>', f212_m: '<number>', f213_m: '<object>', f214_f: '<null>', f215_m: '<array>', f216_t: '<number>', f217_u: '<array>', f218_w: '<boolean>', f219_j: '<object>', f220_w: '<number>', f221_v: '<number>', f222_v: '<null>', f223_t: '<number>', f224_u: '<object>', f225_u: '<null>', f226_b: '<string>', f227_s: '<object>', f228_m: '<array>', f229_z: '<number>', f230_n: '<boolean>', f231_q: '<null>', f232_y: '<boolean>', f233_z: '<object>', f234_s: '<null>', f235_s: '<object>', f236_l: '<array>', f237_o: '<string>', f238_s: '<null>', f239_d: '<string>', f240_q: '<boolean>', f241_s: '<string>', f242_s: '<object>', f243_n: '<boolean>', f244_s: '<number>', f245_p: '<array>', f246_c: '<string>', f247_v: '<boolean>', f248_p: '<null>', f249_o: '<null>', f250_z: '<number>', f251_r: '<null>', f252_e: '<string>', f253_g: '<array>', f254_a: '<number>', f255_o: '<array>', f256_b: '<array>', f257_p: '<null>', f258_w: '<number>', f259_e: '<boolean>', f260_q: '<number>', f261_y: '<boolean>', f262_b: '<null>', f263_m: '<boolean>', f264_n: '<object>', f265_p: '<string>', f266_l: '<array>', f267_c: '<null>', f268_m: '<string>', f269_a: '<object>', f270_q: '<number>', f271_s: '<object>', f272_b: '<boolean>', f273_r: '<number>', f274_f: '<null>', f275_f: '<array>', f276_n: '<null>', f277_w: '<number>', f278_b: '<string>', f279_w: '<null>', f280_g: '<number>', f281_j: '<array>', f282_f: '<object>', f283_m: '<object>', f284_c: '<boolean>', f285_i: '<array>', f286_j: '<array>', f287_g: '<string>', f288_g: '<object>', f289_g: '<array>', f290_v: '<array>', f291_x: '<array>', f292_j: '<boolean>', f293_z: '<object>', f294_t: '<string>', f295_t: '<boolean>', f296_k: '<array>', f297_w: '<array>', f298_y: '<number>', f299_o: '<array>', f300_j: '<array>', f301_f: '<string>', f302_c: '<string>', f303_n: '<number>', f304_b: '<boolean>', f305_y: '<object>', f306_h: '<boolean>', f307_m: '<array>', f308_n: '<string>', f309_t: '<null>', f310_a: '<null>', f311_x: '<string>', f312_l: '<null>', f313_b: '<number>', f314_w: '<null>', f315_f: '<string>', f316_j: '<string>', f317_g: '<boolean>', f318_j: '<array>', f319_h: '<null>', f320_h: '<object>', f321_a: '<null>', f322_n: '<object>', f323_z: '<array>', f324_u: '<number>', f325_a: '<object>', f326_f: '<number>', f327_x: '<string>', f328_e: '<array>', f329_m: '<object>', f330_c: '<array>', f331_g: '<number>', f332_p: '<null>', f333_a: '<boolean>', f334_x: '<object>', f335_m: '<null>', f336_q: '<null>', f337_e: '<array>', f338_o: '<array>', f339_k: '<object>', f340_f: '<object>', f341_o: '<boolean>', f342_n: '<boolean>', f343_u: '<null>', f344_o: '<object>', f345_c: '<string>', f346_t: '<string>', f347_m: '<string>', f348_z: '<array>', f349_u: '<null>', f350_p: '<string>', f351_f: '<array>', f352_x: '<string>', f353_c: '<number>', f354_z: '<number>', f355_r: '<number>', f356_t: '<string>', f357_g: '<number>', f358_e: '<object>', f359_y: '<string>', f360_m: '<string>', f361_h: '<object>', f362_x: '<object>', f363_i: '<null>', f364_a: '<null>', f365_z: '<null>', f366_n: '<boolean>', f367_e: '<array>', f368_o: '<string>', f369_d: '<string>', f370_y: '<null>', f371_u: '<object>', f372_n: '<object>', f373_n: '<array>', f374_k: '<boolean>', f375_c: '<number>', f376_e: '<object>'}, 'mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc');
    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', 'mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', true, true);
        delete_2 = objectStore_1983.delete(KeyRange_20);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.only('mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc');
        get_6 = objectStore_1983.get(KeyRange_22);
    }
    catch (e){
    }

    var clear_5 = objectStore_1983.clear();
    var clear_6 = objectStore_1983.clear();
    var count_7;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', false);
        count_7 = objectStore_1983.count(KeyRange_24);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', true);
        delete_3 = objectStore_1983.delete(KeyRange_26);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', 'mYtEKUuqHQgSiKQRJvpTwVNpBpVGdSgSQmZVHkpXivbedVgAKCqaRcvhofvHDOsjbiLScafbkIBqvbwGIaxOPfPJcAjGMJIpeQIgUQDUSPxLoxKHveDSFfYJtxFDXyVkYsBlwaplryFXhIhkfeGKdnEiRndcAWfMLCMSvnpSIkaHMvtVrePdoNxVFoWFoIBpJlirnCvocRsrzHIKxTc', true, false);
        get_7 = objectStore_1983.get(KeyRange_28);
    }
    catch (e){
    }

    txn_2958.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2958.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2958.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2959 = db.transaction(['objectStore_1981'], 'readwrite', {durability:"default"})
    var objectStore_1981 = txn_2959.objectStore('objectStore_1981');
    var count_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('EZHLjOvZWmspmAPjytsvZKrAjVEuwxNJICJUVqardOaDmeqzXlRlKaKLKVDdszsJhRzWBglUlWbtJLQipnoJWOZoKeCCOrIqmSwsLTJdWHRQar', 'BPRtWkEUjZR', false, false);
        count_8 = objectStore_1981.count(KeyRange_30);
    }
    catch (e){
    }

    var clear_7 = objectStore_1981.clear();
    var count_9 = objectStore_1981.count();
    var clear_8 = objectStore_1981.clear();
    var put_2 = objectStore_1981.put({f0_c: '<number>', f1_q: '<string>', f2_i: '<boolean>', f3_i: '<object>', f4_m: '<array>', f5_j: '<boolean>', f6_v: '<string>'}, 'vgyjZTuDURGbckrMssJuwOXwmHYTwdkURQipLaGSbSFMEoIMqTvIEWnNvLdrvESQSNlvNYCBcQJqgDqjMWvEJSjXqqQNNTggGAEUjCznkNMzVtzJJlXPVomroVAOnGttQenyVvQohGepcZAArDdnAlXGTCfqmjPoqbVLbcbtleanTgltxsYDUAYVLukIRJLkhIlrCXBXHpxkOgNAfQXqeFEyIRtubLzARtXSKmyedWCwrSmXCGXlkyuZcUwpJBrrESBxHfXAJvWjkwJRNVDWREXTUouzrPfHCfHFOFuloWNheXmoaXfJmGfvUMndyiLCBeapNWORscjgzqDnXgUbjYzHCbkjaUxyPJVuQwjsHsySDiDlQHRuYMEyIxXNwRYaRHAhHywLuVAuOEJZAJkdPbaqsdOYHtfEiIwcTcdLhXJOzUNllCvsTPxaEcDpiFCYfjgCmLblOHzKoybsGyrzQgcgzRvXEaJGJoMUZvXnSXanmnmqOFcsBMJPJgPGzYtiBlDRfiyPQbpNMZOZnCFqwZpTLNvIVctCLvwvzhpoMIxPpowgEOKcoFSesDPmjHigTnjmluclskzlezvVfEkavmfFSnTOHPixAcDjEVYrETqfqTPudwJxMaLWlsqTahUFiGKpLAtJtEEVRGPBLPGWbVHlDPejzTLIEDArLLDCgfIBcARlduTTRxMzouMBWxGnTRdfWnTRwpEzAaRxjuFrnxQJPNEgEHwiyDBhwuanAMQrkbBhfLDHTACxIUgZWjewaboPCJmOuOHsBeRwdriOqTOFbHsUhdVKDFgzinuwmjPSkBfnARbQWgALahhPRzjMQPuQHABmdqYldxRvNzn');
    var delete_4;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('BPRtWkEUjZR', false);
        delete_4 = objectStore_1981.delete(KeyRange_32);
    }
    catch (e){
    }

    var add_2 = objectStore_1981.add({f0_c: '<array>', f1_s: '<boolean>', f2_m: '<null>'}, 'JSSpTiHqblMnUzefHlXxvuTMiMkxLuGzjRhooporgRpUhJiZcnsantBsTGTPLvWLcvYYOxKuSazsMNHqdmQSJxLEYsmeJLLCZRCzXSykekMsEmxxrxZxlvyfuHCqswnZGSMMtjVeVmotTOKuyFftIcFCIZayYXBTUbvwaORJhdjYYkANNtJxhbQNIFDugCahbrHdSHiNQcBoKxcJVxldZrjygQFicdBQosDaFyoOaprxGOnEzdjpOrWTouLTDhEdJDdsnTwWvwTUjMTKAimfKYSFyppHngTJIkFONyKiCZGViJxFiFTtltqIIyeenTiJdPEhcvojVJKMXazrKPXGClWuoVMKHfhlMTl');
    var clear_9 = objectStore_1981.clear();
    txn_2959.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2959.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2959.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9797')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};