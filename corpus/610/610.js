let db;
const openRequest = window.indexedDB.open('str_4900', 5299980246445912)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3667');
    var put_0 = objectStore_0.put({f0_w: '<string>', f1_r: '<object>', f2_f: '<boolean>', f3_o: '<object>', f4_m: '<object>', f5_b: '<string>'}, 'WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee');
    var add_0 = objectStore_0.add({f0_c: '<boolean>', f1_x: '<array>', f2_p: '<boolean>'}, 'IwVXhOPiHJkfbabFSwrtcGwEooxVFwoJbqDmgDlVSEkzFiuVvFiotpmCTFrBEDWfCxOOeqeMQQijNDiyggLIRYohtVEULwRfBLVRFjMvLYcnxhoDpXEnIpFTWUEIFWqcMrZMwxpGtotgXweAuWUELzWYHgodHFfjDjBIWnjvmUufbERWfdpEOsaRVJnEPpVnLmJAASlpSamNAYflVoUqZGqjezItrLTLGpNAXMUKCwbHUdhTeAPYyEYiJfqdPWTpvoTSzMqITIZPUVTDnFeLYkEascaqqYHxeGxUoNfYjEoTTlPwgEbddnCxxtmWNRNuvqHTwYCcxmhlxTgRNDGnOSLpEvjYRoYGzgiFYXbQHKpvupJxRvrIyXIDbNPStUnZbzHyeFXZEtBLCXwPMQoOTWzHDTiDnZUHqebdHieDRetIeRFyEdDypVsuoTSWHcSDYIJcCcuCKDwVyktJIsGCidjEZWEjekhAjlAILWUKXSBJxZsmpWXGFVRcquzkXoVJQJEcWlBWJrHIfrSrLIhGSIXBbgBOdQaJCKFBordUEdBTkzIyBoEvcZpVKGOnAAcToxVYffzXRBQXGWqAYXbvXTfiLvTGQpfGajheDLmEVhwVJJzVkDJweiodNtdeYnemQuxPeADjDhnIEMFdnNSvvbUioXlQwFcPAfbMRvaeEGQVHSdTjXitBYikPdbDezluEuBvucGvIZiDDnWiXzXKKatCGRrCCzLLklCyEzdnplSzFGHZTuExkgiWdRYVkeQiKhStzadciVadavjRkCnNviPyPuWNwZeHDVfOSmQLSAgHvyAVWXokahaYvMjStyrXzkTqLfARHkrUpzl');
    var add_1 = objectStore_0.add({f0_v: '<object>', f1_e: '<array>', f2_f: '<boolean>', f3_r: '<number>', f4_o: '<null>', f5_m: '<boolean>', f6_z: '<null>', f7_z: '<boolean>', f8_o: '<number>'}, 'JNZbcsOjBVqgUwmIEeMijtTwSSOJnzLbqkZSNBGEfZzhyvKJOUGIfyEmSPDpqNKEHGbkfyFbubdCeoFenFuFvvLdYutsLRsHzLaoMSWIYcQtngGupJBmSiDTZaHPEGkOdzYtYuJjhgghzKRMXqsrxDnBbNWamTfZwFjUlsNOCzQnjhqYggCBIrobRJEmWrDuUqUsRnmjnMqctWPNrQYu');
    var put_1 = objectStore_0.put({f0_u: '<number>', f1_b: '<null>', f2_f: '<object>', f3_f: '<string>', f4_q: '<array>', f5_s: '<string>'}, 'CtWtkuJIilBiXKPizTdPNhZttmotXATgGkLHxyvFpVICAtdaumIzYrTjpviyDXVmADwvHEPoaxkwBgVRYDgqoZgwehGOdbIROSsQdVtFpKvDAZQWoqIRVKetGYlYTHIHJfUbPcCFoZYNShWFysDWrCpWBitbPmWVOpDzFVZhqQLMnkXFQDkcgRzRIVpFJlaYUUkdVFTScfPZKJgRSfeLTIxKksCPiDrDUTaBBssEYFvUNYIFPyRZxxkiOrLAOAyKpWBUUycZpArhjcwTMQbnZtHpGmtGjoKxIIOsCOwDSXkHOVeBUYRbjkobVPTJaxtKeXjjKrsdTdAfzDMzmlPwwBwKnsDwIMFbCbPGnBbTvAIpVTSYOKzhdiofweMUTAfyCCIwiwUpVngSlLmGdpJPsceqyhjdcMnYiJDWHRyBoZGLQegBEytEchwCjFwdaoRANLOScEofdChPUiQMqsFsVVJnXvWkaURabJSbbavMCXedwioRwaLqwuvUYTzJPUqkNjkaZavZceyDpxIgZktQBOtODvtOAftnIQehnmUmghGtuAGDhjVmgnNhDrHwceyoPzEEqeTJJSNaHbQZMssHwtMykSIASctmdcdstafoGuUgVLDDkpLELitxfhimdZU');
    var objectStore_1 = db.createObjectStore('objectStore_3668', {keypath: 'BNDDkBUBKjBKgsGLXbyaZtvqwHqKmSsJEaAtXCGQiILVmwqejRxtOytIqBXJylmDEwoItZnJorkzhaHkGLRhIKvsfyuHcMYYRHVUGyOxQfadtDXSsvSQysZZGoRGENizoBRklQLXWUYMYarDtujGcwqjnTcmvtnqLwJIxJKJmEGgyvzIZfaoOaeOJSDJHzFQniAMTLDjxwBomjhVGfWFmzKECIpUjoEriqDVfFFxMQDPDkEEPUxSASWYupWhRcotUMabOxJoVCuBpbhyHOVaFxiWhkKjFVzzUKgaDNtmwKLWqRKaMZfsWDdbIxvKLvScpRNYwwXfAEJbIWzaJILgixCcOJAcEUhZalksMmjxSlUVNgaRwUDlFnbDkvAxEKFJidynfWtbAjlfshLSBAmWKnyFvaOHcTPeilEoOWJmnMEkLLfXYOREKmsfsicgWxaobkjFwoJyIApoJctZI'});
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('CtWtkuJIilBiXKPizTdPNhZttmotXATgGkLHxyvFpVICAtdaumIzYrTjpviyDXVmADwvHEPoaxkwBgVRYDgqoZgwehGOdbIROSsQdVtFpKvDAZQWoqIRVKetGYlYTHIHJfUbPcCFoZYNShWFysDWrCpWBitbPmWVOpDzFVZhqQLMnkXFQDkcgRzRIVpFJlaYUUkdVFTScfPZKJgRSfeLTIxKksCPiDrDUTaBBssEYFvUNYIFPyRZxxkiOrLAOAyKpWBUUycZpArhjcwTMQbnZtHpGmtGjoKxIIOsCOwDSXkHOVeBUYRbjkobVPTJaxtKeXjjKrsdTdAfzDMzmlPwwBwKnsDwIMFbCbPGnBbTvAIpVTSYOKzhdiofweMUTAfyCCIwiwUpVngSlLmGdpJPsceqyhjdcMnYiJDWHRyBoZGLQegBEytEchwCjFwdaoRANLOScEofdChPUiQMqsFsVVJnXvWkaURabJSbbavMCXedwioRwaLqwuvUYTzJPUqkNjkaZavZceyDpxIgZktQBOtODvtOAftnIQehnmUmghGtuAGDhjVmgnNhDrHwceyoPzEEqeTJJSNaHbQZMssHwtMykSIASctmdcdstafoGuUgVLDDkpLELitxfhimdZU');
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('JNZbcsOjBVqgUwmIEeMijtTwSSOJnzLbqkZSNBGEfZzhyvKJOUGIfyEmSPDpqNKEHGbkfyFbubdCeoFenFuFvvLdYutsLRsHzLaoMSWIYcQtngGupJBmSiDTZaHPEGkOdzYtYuJjhgghzKRMXqsrxDnBbNWamTfZwFjUlsNOCzQnjhqYggCBIrobRJEmWrDuUqUsRnmjnMqctWPNrQYu', true);
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_3669', {autoIncrement: true});
    var clear_0 = objectStore_1.clear();
    var clear_1 = objectStore_2.clear();
    var put_2 = objectStore_1.put({f0_d: '<number>', f1_q: '<number>', f2_j: '<object>', f3_i: '<boolean>', f4_r: '<string>', f5_e: '<null>', f6_d: '<string>'}, 'naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo');
    var clear_2 = objectStore_2.clear();
    var index_2467 = objectStore_2.createIndex('index_2467', 'test', {unique: false});
    var count_2 = objectStore_0.count();
    var count_3 = objectStore_0.count();
    var add_2 = objectStore_1.add({f0_e: '<boolean>', f1_h: '<number>', f2_l: '<boolean>', f3_q: '<string>', f4_r: '<null>', f5_l: '<string>', f6_f: '<boolean>'}, 'xwfZZWAaVdNJAMeuEjCbfWVEPJUVwCaixxarRpfYqiTwiMajZXQPAlWwzGrjFDEYNeSRopxXCGOuzmCqSyraEyVnQKJWJjCZFsAilCGNaljWtQmcHltUvkuIOCwsjQkSehukEclmXACPIuWZiOqhksQCyflmgxYLxjUGvPqmjMYiclwtHKNmzQICyQSBTvnSZwjhRVMMWftjAJWxllyfugPCWDPmoJnSfjZjyMrglKEJimXZYjNyqBFRsDvylieVRjmMOXnPiCwpawstUpArHsEzQGVztVWpTiPWWbXyYjokwRElXyYGyYdiNDvJdvRKO');
    var index_2468 = objectStore_0.createIndex('index_2468', 'test', {multiEntry: true});
    var index_2469 = objectStore_0.createIndex('index_2469', 'test', {unique: false, multiEntry: true});
    var clear_3 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5485 = db.transaction(['objectStore_3667'], 'readonly', {durability:"relaxed"})
    var objectStore_3667 = txn_5485.objectStore('objectStore_3667');
    var count_4;
    try{
        KeyRange_4 = IDBKeyRange.only('WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee');
        count_4 = objectStore_3667.count(KeyRange_4);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee', 'WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee', false, true);
        get_0 = objectStore_3667.get(KeyRange_6);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('IwVXhOPiHJkfbabFSwrtcGwEooxVFwoJbqDmgDlVSEkzFiuVvFiotpmCTFrBEDWfCxOOeqeMQQijNDiyggLIRYohtVEULwRfBLVRFjMvLYcnxhoDpXEnIpFTWUEIFWqcMrZMwxpGtotgXweAuWUELzWYHgodHFfjDjBIWnjvmUufbERWfdpEOsaRVJnEPpVnLmJAASlpSamNAYflVoUqZGqjezItrLTLGpNAXMUKCwbHUdhTeAPYyEYiJfqdPWTpvoTSzMqITIZPUVTDnFeLYkEascaqqYHxeGxUoNfYjEoTTlPwgEbddnCxxtmWNRNuvqHTwYCcxmhlxTgRNDGnOSLpEvjYRoYGzgiFYXbQHKpvupJxRvrIyXIDbNPStUnZbzHyeFXZEtBLCXwPMQoOTWzHDTiDnZUHqebdHieDRetIeRFyEdDypVsuoTSWHcSDYIJcCcuCKDwVyktJIsGCidjEZWEjekhAjlAILWUKXSBJxZsmpWXGFVRcquzkXoVJQJEcWlBWJrHIfrSrLIhGSIXBbgBOdQaJCKFBordUEdBTkzIyBoEvcZpVKGOnAAcToxVYffzXRBQXGWqAYXbvXTfiLvTGQpfGajheDLmEVhwVJJzVkDJweiodNtdeYnemQuxPeADjDhnIEMFdnNSvvbUioXlQwFcPAfbMRvaeEGQVHSdTjXitBYikPdbDezluEuBvucGvIZiDDnWiXzXKKatCGRrCCzLLklCyEzdnplSzFGHZTuExkgiWdRYVkeQiKhStzadciVadavjRkCnNviPyPuWNwZeHDVfOSmQLSAgHvyAVWXokahaYvMjStyrXzkTqLfARHkrUpzl', false);
        count_5 = objectStore_3667.count(KeyRange_8);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.only('JNZbcsOjBVqgUwmIEeMijtTwSSOJnzLbqkZSNBGEfZzhyvKJOUGIfyEmSPDpqNKEHGbkfyFbubdCeoFenFuFvvLdYutsLRsHzLaoMSWIYcQtngGupJBmSiDTZaHPEGkOdzYtYuJjhgghzKRMXqsrxDnBbNWamTfZwFjUlsNOCzQnjhqYggCBIrobRJEmWrDuUqUsRnmjnMqctWPNrQYu');
        getAll_0 = objectStore_3667.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('JNZbcsOjBVqgUwmIEeMijtTwSSOJnzLbqkZSNBGEfZzhyvKJOUGIfyEmSPDpqNKEHGbkfyFbubdCeoFenFuFvvLdYutsLRsHzLaoMSWIYcQtngGupJBmSiDTZaHPEGkOdzYtYuJjhgghzKRMXqsrxDnBbNWamTfZwFjUlsNOCzQnjhqYggCBIrobRJEmWrDuUqUsRnmjnMqctWPNrQYu');
        getAll_0 = objectStore_3667.getAll(KeyRange_11);
    }

    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.only('CtWtkuJIilBiXKPizTdPNhZttmotXATgGkLHxyvFpVICAtdaumIzYrTjpviyDXVmADwvHEPoaxkwBgVRYDgqoZgwehGOdbIROSsQdVtFpKvDAZQWoqIRVKetGYlYTHIHJfUbPcCFoZYNShWFysDWrCpWBitbPmWVOpDzFVZhqQLMnkXFQDkcgRzRIVpFJlaYUUkdVFTScfPZKJgRSfeLTIxKksCPiDrDUTaBBssEYFvUNYIFPyRZxxkiOrLAOAyKpWBUUycZpArhjcwTMQbnZtHpGmtGjoKxIIOsCOwDSXkHOVeBUYRbjkobVPTJaxtKeXjjKrsdTdAfzDMzmlPwwBwKnsDwIMFbCbPGnBbTvAIpVTSYOKzhdiofweMUTAfyCCIwiwUpVngSlLmGdpJPsceqyhjdcMnYiJDWHRyBoZGLQegBEytEchwCjFwdaoRANLOScEofdChPUiQMqsFsVVJnXvWkaURabJSbbavMCXedwioRwaLqwuvUYTzJPUqkNjkaZavZceyDpxIgZktQBOtODvtOAftnIQehnmUmghGtuAGDhjVmgnNhDrHwceyoPzEEqeTJJSNaHbQZMssHwtMykSIASctmdcdstafoGuUgVLDDkpLELitxfhimdZU');
        get_1 = objectStore_3667.get(KeyRange_12);
    }
    catch (e){
    }

    var index_0 = objectStore_3667.index('index_2468');
    var count_6 = objectStore_3667.count();
    var count_7;
    try{
        KeyRange_14 = IDBKeyRange.only('JNZbcsOjBVqgUwmIEeMijtTwSSOJnzLbqkZSNBGEfZzhyvKJOUGIfyEmSPDpqNKEHGbkfyFbubdCeoFenFuFvvLdYutsLRsHzLaoMSWIYcQtngGupJBmSiDTZaHPEGkOdzYtYuJjhgghzKRMXqsrxDnBbNWamTfZwFjUlsNOCzQnjhqYggCBIrobRJEmWrDuUqUsRnmjnMqctWPNrQYu');
        count_7 = objectStore_3667.count(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('IwVXhOPiHJkfbabFSwrtcGwEooxVFwoJbqDmgDlVSEkzFiuVvFiotpmCTFrBEDWfCxOOeqeMQQijNDiyggLIRYohtVEULwRfBLVRFjMvLYcnxhoDpXEnIpFTWUEIFWqcMrZMwxpGtotgXweAuWUELzWYHgodHFfjDjBIWnjvmUufbERWfdpEOsaRVJnEPpVnLmJAASlpSamNAYflVoUqZGqjezItrLTLGpNAXMUKCwbHUdhTeAPYyEYiJfqdPWTpvoTSzMqITIZPUVTDnFeLYkEascaqqYHxeGxUoNfYjEoTTlPwgEbddnCxxtmWNRNuvqHTwYCcxmhlxTgRNDGnOSLpEvjYRoYGzgiFYXbQHKpvupJxRvrIyXIDbNPStUnZbzHyeFXZEtBLCXwPMQoOTWzHDTiDnZUHqebdHieDRetIeRFyEdDypVsuoTSWHcSDYIJcCcuCKDwVyktJIsGCidjEZWEjekhAjlAILWUKXSBJxZsmpWXGFVRcquzkXoVJQJEcWlBWJrHIfrSrLIhGSIXBbgBOdQaJCKFBordUEdBTkzIyBoEvcZpVKGOnAAcToxVYffzXRBQXGWqAYXbvXTfiLvTGQpfGajheDLmEVhwVJJzVkDJweiodNtdeYnemQuxPeADjDhnIEMFdnNSvvbUioXlQwFcPAfbMRvaeEGQVHSdTjXitBYikPdbDezluEuBvucGvIZiDDnWiXzXKKatCGRrCCzLLklCyEzdnplSzFGHZTuExkgiWdRYVkeQiKhStzadciVadavjRkCnNviPyPuWNwZeHDVfOSmQLSAgHvyAVWXokahaYvMjStyrXzkTqLfARHkrUpzl', 'WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee', true, false);
        getAllKeys_0 = objectStore_3667.getAllKeys(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('IwVXhOPiHJkfbabFSwrtcGwEooxVFwoJbqDmgDlVSEkzFiuVvFiotpmCTFrBEDWfCxOOeqeMQQijNDiyggLIRYohtVEULwRfBLVRFjMvLYcnxhoDpXEnIpFTWUEIFWqcMrZMwxpGtotgXweAuWUELzWYHgodHFfjDjBIWnjvmUufbERWfdpEOsaRVJnEPpVnLmJAASlpSamNAYflVoUqZGqjezItrLTLGpNAXMUKCwbHUdhTeAPYyEYiJfqdPWTpvoTSzMqITIZPUVTDnFeLYkEascaqqYHxeGxUoNfYjEoTTlPwgEbddnCxxtmWNRNuvqHTwYCcxmhlxTgRNDGnOSLpEvjYRoYGzgiFYXbQHKpvupJxRvrIyXIDbNPStUnZbzHyeFXZEtBLCXwPMQoOTWzHDTiDnZUHqebdHieDRetIeRFyEdDypVsuoTSWHcSDYIJcCcuCKDwVyktJIsGCidjEZWEjekhAjlAILWUKXSBJxZsmpWXGFVRcquzkXoVJQJEcWlBWJrHIfrSrLIhGSIXBbgBOdQaJCKFBordUEdBTkzIyBoEvcZpVKGOnAAcToxVYffzXRBQXGWqAYXbvXTfiLvTGQpfGajheDLmEVhwVJJzVkDJweiodNtdeYnemQuxPeADjDhnIEMFdnNSvvbUioXlQwFcPAfbMRvaeEGQVHSdTjXitBYikPdbDezluEuBvucGvIZiDDnWiXzXKKatCGRrCCzLLklCyEzdnplSzFGHZTuExkgiWdRYVkeQiKhStzadciVadavjRkCnNviPyPuWNwZeHDVfOSmQLSAgHvyAVWXokahaYvMjStyrXzkTqLfARHkrUpzl');
        getAllKeys_0 = objectStore_3667.getAllKeys(KeyRange_17);
    }

    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('WNQxRnqtHeOcMTxFaUuhlDJUxKeizLLaZshqxCSeKtLVUbnHILqucIiVEmZFyECeIrqsekmtDGLYztGnljacujbrrnMCRZOcqGTFeYsfacoHFTabhDBCGoEyjmedAmYIxmKQEYUPgbbDVRqjSbYnFhlUBaZHqZheitkwee', 'CtWtkuJIilBiXKPizTdPNhZttmotXATgGkLHxyvFpVICAtdaumIzYrTjpviyDXVmADwvHEPoaxkwBgVRYDgqoZgwehGOdbIROSsQdVtFpKvDAZQWoqIRVKetGYlYTHIHJfUbPcCFoZYNShWFysDWrCpWBitbPmWVOpDzFVZhqQLMnkXFQDkcgRzRIVpFJlaYUUkdVFTScfPZKJgRSfeLTIxKksCPiDrDUTaBBssEYFvUNYIFPyRZxxkiOrLAOAyKpWBUUycZpArhjcwTMQbnZtHpGmtGjoKxIIOsCOwDSXkHOVeBUYRbjkobVPTJaxtKeXjjKrsdTdAfzDMzmlPwwBwKnsDwIMFbCbPGnBbTvAIpVTSYOKzhdiofweMUTAfyCCIwiwUpVngSlLmGdpJPsceqyhjdcMnYiJDWHRyBoZGLQegBEytEchwCjFwdaoRANLOScEofdChPUiQMqsFsVVJnXvWkaURabJSbbavMCXedwioRwaLqwuvUYTzJPUqkNjkaZavZceyDpxIgZktQBOtODvtOAftnIQehnmUmghGtuAGDhjVmgnNhDrHwceyoPzEEqeTJJSNaHbQZMssHwtMykSIASctmdcdstafoGuUgVLDDkpLELitxfhimdZU', true, false);
        get_2 = objectStore_3667.get(KeyRange_18);
    }
    catch (e){
    }

    txn_5485.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5485.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5485.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5486 = db.transaction(['objectStore_3668'], 'readonly', {durability:"strict"})
    var objectStore_3668 = txn_5486.objectStore('objectStore_3668');
    var count_8 = objectStore_3668.count();
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('xwfZZWAaVdNJAMeuEjCbfWVEPJUVwCaixxarRpfYqiTwiMajZXQPAlWwzGrjFDEYNeSRopxXCGOuzmCqSyraEyVnQKJWJjCZFsAilCGNaljWtQmcHltUvkuIOCwsjQkSehukEclmXACPIuWZiOqhksQCyflmgxYLxjUGvPqmjMYiclwtHKNmzQICyQSBTvnSZwjhRVMMWftjAJWxllyfugPCWDPmoJnSfjZjyMrglKEJimXZYjNyqBFRsDvylieVRjmMOXnPiCwpawstUpArHsEzQGVztVWpTiPWWbXyYjokwRElXyYGyYdiNDvJdvRKO', 'xwfZZWAaVdNJAMeuEjCbfWVEPJUVwCaixxarRpfYqiTwiMajZXQPAlWwzGrjFDEYNeSRopxXCGOuzmCqSyraEyVnQKJWJjCZFsAilCGNaljWtQmcHltUvkuIOCwsjQkSehukEclmXACPIuWZiOqhksQCyflmgxYLxjUGvPqmjMYiclwtHKNmzQICyQSBTvnSZwjhRVMMWftjAJWxllyfugPCWDPmoJnSfjZjyMrglKEJimXZYjNyqBFRsDvylieVRjmMOXnPiCwpawstUpArHsEzQGVztVWpTiPWWbXyYjokwRElXyYGyYdiNDvJdvRKO', false, true);
        get_3 = objectStore_3668.get(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('xwfZZWAaVdNJAMeuEjCbfWVEPJUVwCaixxarRpfYqiTwiMajZXQPAlWwzGrjFDEYNeSRopxXCGOuzmCqSyraEyVnQKJWJjCZFsAilCGNaljWtQmcHltUvkuIOCwsjQkSehukEclmXACPIuWZiOqhksQCyflmgxYLxjUGvPqmjMYiclwtHKNmzQICyQSBTvnSZwjhRVMMWftjAJWxllyfugPCWDPmoJnSfjZjyMrglKEJimXZYjNyqBFRsDvylieVRjmMOXnPiCwpawstUpArHsEzQGVztVWpTiPWWbXyYjokwRElXyYGyYdiNDvJdvRKO', 'naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo', true, true);
        getAllKeys_1 = objectStore_3668.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('xwfZZWAaVdNJAMeuEjCbfWVEPJUVwCaixxarRpfYqiTwiMajZXQPAlWwzGrjFDEYNeSRopxXCGOuzmCqSyraEyVnQKJWJjCZFsAilCGNaljWtQmcHltUvkuIOCwsjQkSehukEclmXACPIuWZiOqhksQCyflmgxYLxjUGvPqmjMYiclwtHKNmzQICyQSBTvnSZwjhRVMMWftjAJWxllyfugPCWDPmoJnSfjZjyMrglKEJimXZYjNyqBFRsDvylieVRjmMOXnPiCwpawstUpArHsEzQGVztVWpTiPWWbXyYjokwRElXyYGyYdiNDvJdvRKO');
        getAllKeys_1 = objectStore_3668.getAllKeys(KeyRange_23);
    }

    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.only('naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo');
        count_9 = objectStore_3668.count(KeyRange_24);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo', false);
        get_4 = objectStore_3668.get(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.only('naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo');
        get_5 = objectStore_3668.get(KeyRange_28);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.only('naDyVLauphrYWyTRNWLnlQanKjExvFQOBUUYYpMJwDpmJUPmpgElTgbqcwAFXgCaWZlYZcMgZwDDkBWajdpcczkDfEARGAeGTeXCYBxptTERjokNVoLhvkcKmVSpnxsDduinMyvZIguPBYunDamQgwLMucptmlAPSRShLuefaCRMfKGVBUtBDmGyEXSKqOjwbRxTGFiViOMTnXEcOmdYmWrfirjLOaBlFkMrotDCGwCUgUVJZDXJbmAsddWpsHcgNMUEWBBMNpfNxGOAYMtbabUaOpVlDetEVLeXZQwymIswXKHBktNHZAcUQMuZxPNhVvcgtOzLddrBkZeRdjmSLMDcQTZZwqRjgYHJHukDQZWzMtTIQskaCdEybyJJDCeTZRFWeJlSsmwdFlsyxYAeLhDxmohcADMEdvIRAJXSUUcVhGIbjsbyqnnFENtOtOGYenItgaucNPXGbaARXmIivimUSLdaMGuYAVzoRkfbGQTcoEwzeiWSCGZdDBzNvblepYSHjgtMzpPDVdVNgNoCzAIuaiWMkibCxfEsBXiTvFLdVCJolAkhqSxRImjIGgitbUQcsYIWoCrITLdVEPdQxSWAGxLtKLSTLZMpkhQkHFxprahXKxopXkRoZfPSlrcpzLVoQajWSnbTatcInKaJJamyivWgvprNwjYSmMJHAXwJDOllLHXyWEZTpNNodfYAnZlvLHftPCumUsIJtvgsYcHhGAOtPxrCUzRLkjHlbnlywpQReQWGOIyoLLirtDTikxMbAcEgeHhDjsBlWYBGYzOtLimwJsfDxSXTZqdtQVLGFQjQQZxjjnXlqwoWFSZzbWTTOsXeUxDkKUYyuyhccEjqiYwuvLhCQnnWaXenoNlzwVKPhtUo');
        get_6 = objectStore_3668.get(KeyRange_30);
    }
    catch (e){
    }

    txn_5486.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5486.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5486.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5487 = db.transaction(['objectStore_3669'], 'readonly', {durability:"default"})
    var objectStore_3669 = txn_5487.objectStore('objectStore_3669');
    var index_1 = objectStore_3669.index('index_2467');
    txn_5487.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5487.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5487.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5488 = db.transaction(['objectStore_3669'], 'readonly', {durability:"strict"})
    var objectStore_3669 = txn_5488.objectStore('objectStore_3669');
    var index_2 = objectStore_3669.index('index_2467');
    txn_5488.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5488.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5488.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5489 = db.transaction(['objectStore_3669'], 'readonly', {durability:"relaxed"})
    var objectStore_3669 = txn_5489.objectStore('objectStore_3669');
    txn_5489.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5489.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5489.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_686')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};