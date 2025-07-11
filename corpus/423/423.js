let db;
const openRequest = window.indexedDB.open('str_9926', 3522974771073795)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2461', {keypath: 'kcCwyCzVMeMxqbWhCEfkvbrljDHfcKpSuMhQaBlyToPUodYKAGlWuECMSmcoSUGbkKMDjKoMzLtnRNpcEglVeBCKAzurynSHicNrtwsNXRUnEBREREmhmZgtbiXvndQuKMdNiReKBAlAyPtXcsboYgMTvQIOLtmUlDsvParRLZtBfXUUuCTvJqQMGaFwbPKnQdIsEpdZvsxqTUcfRlBjuQnCUxlFhRSSdktBZlQtOQyfoxUjsxVyRAtpqJzQoYXnQRaxjXjCvvdkAKzYPpljQdWAPkeWsKqAkzPAtMTFbwMxvpkyYBhRTjtlzJAVFueyRpclKdvaAijyeMGwNyUwgNE', autoIncrement: true});
    db.deleteObjectStore('objectStore_2461')
    var objectStore_1 = db.createObjectStore('objectStore_2462', {autoIncrement: false});
    var add_0 = objectStore_1.add({f0_r: '<array>', f1_n: '<boolean>', f2_i: '<boolean>', f3_f: '<number>', f4_y: '<object>', f5_z: '<string>', f6_c: '<boolean>', f7_l: '<number>', f8_s: '<number>', f9_k: '<array>'}, 'kmkozKc');
    db.deleteObjectStore('objectStore_2462')
    var objectStore_2 = db.createObjectStore('objectStore_2463', {keypath: 'nOZxFbcjahiTmVXefREhHlSkGSzsTpyrXvYRRWCFwHISSvopRTJxduakEpzTtNxzHcKIKRwyZNydAAyqiWdQgiYPSOrJUpuzggQfbxjmLSgNQVNcYrTqcHuvBLTHllOFOxqfOoRwSVJeIBPunepquHSfhRTnSjbMKluvnnCtsrxZvWFjuBpmPRbppWJEUCkujBvvhvSjPEEPzWjsKQFnwvPTxbCwhZoNENlhmbBGJAkXcEgjUJufSkSdYfiDZlrubxNfayoRSbHYblAzXKMkZXgfvLBTOoOBTqfyOwHCkhjkXvpeZejgwxwpTcdAZlOJEWuDkrtcUJzcJznIAKWmmNGwPshoIDFFSLaFitNBJUCxYGVSEcfvyDAnjnoRIQJRBtBQVloRFzisPikLiEgxQYgQjoDmAhlEeiHaXTOClIbZhxfoCoBhsuDdhyoQFCxuyMSpwrtWuGEHLhpVBXOlomYVTIagwtxODWZXoXBNXCdHSUTiELKsCtCKLeCAHsSvsUYwmwRZifJVgURFUtXzzsRaufumrzuckmKbAyaxMwLSofDJoEwhMvgjSpFtePaQTggfwyBoluTOYIvwTuSlPEIeyjQkUglfktBZFhwMtoJxadLnCcXGAteHaDCXWCnIohvPpkCHJzdUovIjnZagkpfdAbWjlYizFhJMzhVhiPqnWMAxLLrKEpVwzJkZWjhhABeoFantCOsYqMNfLMVgqYqGqaCsvYgwjDjWyQjdDKmbceXHtkQMDwHqoanrDRSMQEzmoazJUzPgxyDmcaWdAhNiBBmqhqDrNvKYdfQwfNPVfZtlHslTthtbcIVoXTGRqasCfbPiaPubBw', autoIncrement: false});
    var clear_0 = objectStore_2.clear();
    var put_0 = objectStore_2.put({f0_d: '<boolean>', f1_i: '<null>', f2_h: '<boolean>'}, 'jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.only('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq');
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_0, 1532372672);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq');
        getAllKeys_0 = objectStore_2.getAllKeys(KeyRange_1);
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq', 'jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq', true, false);
        get_0 = objectStore_2.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_2.clear();
    var index_1620 = objectStore_2.createIndex('index_1620', 'test', {unique: false, multiEntry: true});
    var objectStore_3 = db.createObjectStore('objectStore_2464');
    var index_1621 = objectStore_3.createIndex('index_1621', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3685 = db.transaction(['objectStore_2463'], 'readwrite', {durability:"default"})
    var objectStore_2463 = txn_3685.objectStore('objectStore_2463');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq');
        get_1 = objectStore_2463.get(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_2463.add({f0_r: '<number>', f1_s: '<string>', f2_b: '<boolean>', f3_c: '<array>'}, 'MxqWtpLKUyGcqKIEqpBefRySoHrYMSkrunaBIhXuHdAocSlgfoggUdBGQGWbtZskJMAomblleRTfVyqqfwBObqyLATZWsCysKqVSMRlmtiZnIWjBZBsDBMSBWtBJoYAYKRUSCoGCeTsUkYsNLkWcCAKIBQrNVlWZbMNnTvozyHFyVUGVikVVdgoBgezgORHIRslaHICEelGYwceQdjSsFrV');
    var add_2 = objectStore_2463.add({f0_i: '<null>'}, 'RpbbFalzFEQpeUOXuDkgzcmzHHWYwIXlgp');
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('MxqWtpLKUyGcqKIEqpBefRySoHrYMSkrunaBIhXuHdAocSlgfoggUdBGQGWbtZskJMAomblleRTfVyqqfwBObqyLATZWsCysKqVSMRlmtiZnIWjBZBsDBMSBWtBJoYAYKRUSCoGCeTsUkYsNLkWcCAKIBQrNVlWZbMNnTvozyHFyVUGVikVVdgoBgezgORHIRslaHICEelGYwceQdjSsFrV', true);
        get_2 = objectStore_2463.get(KeyRange_6);
    }
    catch (e){
    }

    var put_1 = objectStore_2463.put({f0_m: '<boolean>', f1_s: '<boolean>', f2_k: '<string>', f3_c: '<object>', f4_r: '<array>'}, 'LRrTqPtismHESOSXTVNuUHeiyoIPDwsoSAxtDDnFHTcKaYtcDjUEfALrTvFPSWXEgos');
    var count_0 = objectStore_2463.count();
    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('RpbbFalzFEQpeUOXuDkgzcmzHHWYwIXlgp', 'LRrTqPtismHESOSXTVNuUHeiyoIPDwsoSAxtDDnFHTcKaYtcDjUEfALrTvFPSWXEgos', true, false);
        count_1 = objectStore_2463.count(KeyRange_8);
    }
    catch (e){
    }

    var count_2 = objectStore_2463.count();
    var clear_2 = objectStore_2463.clear();
    var add_3 = objectStore_2463.add({f0_b: '<number>', f1_n: '<boolean>', f2_q: '<number>', f3_g: '<boolean>', f4_h: '<boolean>', f5_l: '<null>', f6_l: '<array>', f7_w: '<boolean>', f8_w: '<string>'}, 'ZxQHQRZSgAIZkWljarUMFSwxwkqdLpYAgCrNUBnSCuyFSzZSEXOOWbZsaRySGeFIGuWDbFFftRXqCnkKxJUFCnEIIpBORlPQixEbBFMwMUJfauloSFoBxiCqdRLRCgCqDsLcrIKwBfmTORNPTmymEskmqGoXgENORjYIwIErdSCBxjPVuaAdXsRHuEbYSmqLHkhxcGOebYtNNtwHoKmseZKiQUZxOBBnzQMMOTjFrjktWloStboLmXqlHrSIJWbTALWrxfRjFDHLKYHlDUDaslpNkMPCMezitoPDAETvWVOgYULZyDqjDVKoPKLRLBQHbNeWWYCWJPuSKLBVQMqiFCFeHsRXesgUUFVVttZZvkArmoCcIsUFWqxMPIxPJjooSCuURlzealaHzfsItAzxnxMoXQLeVjBjhgUfKTDTpriWQHhssGkwPHLtKvAZAPZFCzmPeSsSEjZEsjcvyuvaDRuCvVIVfounmbLmBcqKJYVhomyHZYnkTrWJAQSbmmwqGjmjAENnjwAkKwrXWaAQQHVTStnolkdoWNeIPMXuSvqNWeedtFKLwDNvSrNALKPjCnmQIcUxVTMjshIoybGaKmbpaLCjrPaqASOfDgSPvzeaapgKAbNmRmAsyvelGJOGkYdEVFRPgrMCHDwWVSwlSuPmIiztHHLsgUpwjXPwVrSMfWSpHjvgMgUAfcvdYFPBOaKCpAFRRTQZwIvcZoJgIhOUocDQhpsHbCokbaYWvcGIeBTnZXzphNPSRQNZQgJfhjGWcFZKHuFGATM');
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('ZxQHQRZSgAIZkWljarUMFSwxwkqdLpYAgCrNUBnSCuyFSzZSEXOOWbZsaRySGeFIGuWDbFFftRXqCnkKxJUFCnEIIpBORlPQixEbBFMwMUJfauloSFoBxiCqdRLRCgCqDsLcrIKwBfmTORNPTmymEskmqGoXgENORjYIwIErdSCBxjPVuaAdXsRHuEbYSmqLHkhxcGOebYtNNtwHoKmseZKiQUZxOBBnzQMMOTjFrjktWloStboLmXqlHrSIJWbTALWrxfRjFDHLKYHlDUDaslpNkMPCMezitoPDAETvWVOgYULZyDqjDVKoPKLRLBQHbNeWWYCWJPuSKLBVQMqiFCFeHsRXesgUUFVVttZZvkArmoCcIsUFWqxMPIxPJjooSCuURlzealaHzfsItAzxnxMoXQLeVjBjhgUfKTDTpriWQHhssGkwPHLtKvAZAPZFCzmPeSsSEjZEsjcvyuvaDRuCvVIVfounmbLmBcqKJYVhomyHZYnkTrWJAQSbmmwqGjmjAENnjwAkKwrXWaAQQHVTStnolkdoWNeIPMXuSvqNWeedtFKLwDNvSrNALKPjCnmQIcUxVTMjshIoybGaKmbpaLCjrPaqASOfDgSPvzeaapgKAbNmRmAsyvelGJOGkYdEVFRPgrMCHDwWVSwlSuPmIiztHHLsgUpwjXPwVrSMfWSpHjvgMgUAfcvdYFPBOaKCpAFRRTQZwIvcZoJgIhOUocDQhpsHbCokbaYWvcGIeBTnZXzphNPSRQNZQgJfhjGWcFZKHuFGATM', false);
        get_3 = objectStore_2463.get(KeyRange_10);
    }
    catch (e){
    }

    var put_2 = objectStore_2463.put({f0_o: '<array>', f1_z: '<array>', f2_r: '<boolean>'}, 'zBtHkwSpzQXOxbnutLCGlkwLueadvDuNxChDKvcEvuSxZEwebwdPMrPfAvxJAzdnLHomHnNdCkCrWgZWlPaPLniIxRCmtxKDFjZnAyNkhtgrbDmfNaXqnllSaBsYXcCOpdwgyDIuOCmzEOAvvnDgtQnfzTidUKxPFLkzQsiTycBqmzjeEOfTkxkkarLOwnbkVlnNYhIJzpNAOPvCnGdhbInDwrIYjDXwbzoPPKVRncmBXXCCxuERGRinLgFicWLFeOnVEUrqYjvpFlTRreYrEAttLAGcRxczVoHIfOerbuEcuzyzgKtuPROjqjgLyUsNnIcJEsraObxfvGvhXvOUpvBOaaEIJuPdNyroaOZeYvngKUfCEtGkCfWIBzXNyJXrMEbspeVkKMDKqevVuxhcPxfWPShvcNzeyyoLgpWflkdcOHWRqmfQdOVNbzwMkCeDfwDvCtYhWyHmYYNniSJskAvpOskofCuYpJwPCXKselvvYRjMVlHwjdKyVSYKXvZXjIsPPDMMbwwwXAKECdRvfGcMejEMarjCYprNZEVwkokmevIOLUozVWYamsssTyNXQctSLSksSqgXayqaxMAlcYbqufTXP');
    txn_3685.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3685.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3685.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3686 = db.transaction(['objectStore_2463', 'objectStore_2464'], 'readonly', {durability:"strict"})
    var objectStore_2464 = txn_3686.objectStore('objectStore_2464');
    var index_0 = objectStore_2464.index('index_1621');
    txn_3686.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3686.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3686.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3687 = db.transaction(['objectStore_2464', 'objectStore_2463'], 'readonly', {durability:"relaxed"})
    var objectStore_2464 = txn_3687.objectStore('objectStore_2464');
    txn_3687.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3687.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3687.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3688 = db.transaction(['objectStore_2464'], 'readwrite', {durability:"default"})
    var objectStore_2464 = txn_3688.objectStore('objectStore_2464');
    var put_3 = objectStore_2464.put({f0_i: '<array>', f1_b: '<boolean>'}, 'iHNYyuVuvwtDjywiZIOuFhggEeiGKEiaFuPOACaWFjKVhyvuojkFBFDBKrjlMaOMKFQXkXrARcKjyhqcDmrqhnyjTwmeXjWtqEUTGqDyhcYQTsgorlYBNTIESskSJTPZsKjdcqkxCoiNGzDFZibjiPIeHpUKVUnVTynMWwzzvDJeqAjSVaDndhOpwumbFLUNcPEKEPOTrZslaADInolQiNAIdsmEgosukyxJKjKxvlQBgVBwkZHZxGipdPvbEgMnkxbmarWEaMMkaoteByZWsURYUkAMKNYfXiEoDYxhJcNftIfgMLHOpWInHTZxGFonrXADiqgmsfnaovGGtHbqDMqBnEtumbcQKmJGexzUAOAkTjjGdYZSUonHlznfhRlZcGJbwMEFLwrbojAcqTIIPYuilPnBiiwGnsBpMNalkJBMIGCaKWfhZZpuVRHsgzKjfFSdnerHjRxADbuyYDjiieQcUWrEmZbMfYBWHCehEiFShjGRBRtSHhBcxQpLWkJaTuvgqhuRuwKZaJWlWtlrFyKQrXPoePkZEIKsSgQYJXvsbUeLaNxfpeTvRdGhROHrSVcDCpydRmssAYYseZaLYHXIJoNsrwyFzLjSwJrlJzIigtsvQvdwNdRyDRrRckcuJILHWfTyTWbykJNgHMOmqXSOXUWNMlAuvLweJbdIQdPCHPjQmTNPsSQwDQtvxitPXeXcyrbyTPGeCPLeMihYoOTmRAwbmdvZxcdvhKOeRNATkiClzuivnRzmxzWaSagsRgImegLRLEIxQmhnUNWUEzIqfFDBXbKrTYhyrCLmLMJdpKcvglXzZbZszhxhsyCNZiueFgusBOgyFSZbhXAGcmBDJ');
    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.bound('iHNYyuVuvwtDjywiZIOuFhggEeiGKEiaFuPOACaWFjKVhyvuojkFBFDBKrjlMaOMKFQXkXrARcKjyhqcDmrqhnyjTwmeXjWtqEUTGqDyhcYQTsgorlYBNTIESskSJTPZsKjdcqkxCoiNGzDFZibjiPIeHpUKVUnVTynMWwzzvDJeqAjSVaDndhOpwumbFLUNcPEKEPOTrZslaADInolQiNAIdsmEgosukyxJKjKxvlQBgVBwkZHZxGipdPvbEgMnkxbmarWEaMMkaoteByZWsURYUkAMKNYfXiEoDYxhJcNftIfgMLHOpWInHTZxGFonrXADiqgmsfnaovGGtHbqDMqBnEtumbcQKmJGexzUAOAkTjjGdYZSUonHlznfhRlZcGJbwMEFLwrbojAcqTIIPYuilPnBiiwGnsBpMNalkJBMIGCaKWfhZZpuVRHsgzKjfFSdnerHjRxADbuyYDjiieQcUWrEmZbMfYBWHCehEiFShjGRBRtSHhBcxQpLWkJaTuvgqhuRuwKZaJWlWtlrFyKQrXPoePkZEIKsSgQYJXvsbUeLaNxfpeTvRdGhROHrSVcDCpydRmssAYYseZaLYHXIJoNsrwyFzLjSwJrlJzIigtsvQvdwNdRyDRrRckcuJILHWfTyTWbykJNgHMOmqXSOXUWNMlAuvLweJbdIQdPCHPjQmTNPsSQwDQtvxitPXeXcyrbyTPGeCPLeMihYoOTmRAwbmdvZxcdvhKOeRNATkiClzuivnRzmxzWaSagsRgImegLRLEIxQmhnUNWUEzIqfFDBXbKrTYhyrCLmLMJdpKcvglXzZbZszhxhsyCNZiueFgusBOgyFSZbhXAGcmBDJ', 'iHNYyuVuvwtDjywiZIOuFhggEeiGKEiaFuPOACaWFjKVhyvuojkFBFDBKrjlMaOMKFQXkXrARcKjyhqcDmrqhnyjTwmeXjWtqEUTGqDyhcYQTsgorlYBNTIESskSJTPZsKjdcqkxCoiNGzDFZibjiPIeHpUKVUnVTynMWwzzvDJeqAjSVaDndhOpwumbFLUNcPEKEPOTrZslaADInolQiNAIdsmEgosukyxJKjKxvlQBgVBwkZHZxGipdPvbEgMnkxbmarWEaMMkaoteByZWsURYUkAMKNYfXiEoDYxhJcNftIfgMLHOpWInHTZxGFonrXADiqgmsfnaovGGtHbqDMqBnEtumbcQKmJGexzUAOAkTjjGdYZSUonHlznfhRlZcGJbwMEFLwrbojAcqTIIPYuilPnBiiwGnsBpMNalkJBMIGCaKWfhZZpuVRHsgzKjfFSdnerHjRxADbuyYDjiieQcUWrEmZbMfYBWHCehEiFShjGRBRtSHhBcxQpLWkJaTuvgqhuRuwKZaJWlWtlrFyKQrXPoePkZEIKsSgQYJXvsbUeLaNxfpeTvRdGhROHrSVcDCpydRmssAYYseZaLYHXIJoNsrwyFzLjSwJrlJzIigtsvQvdwNdRyDRrRckcuJILHWfTyTWbykJNgHMOmqXSOXUWNMlAuvLweJbdIQdPCHPjQmTNPsSQwDQtvxitPXeXcyrbyTPGeCPLeMihYoOTmRAwbmdvZxcdvhKOeRNATkiClzuivnRzmxzWaSagsRgImegLRLEIxQmhnUNWUEzIqfFDBXbKrTYhyrCLmLMJdpKcvglXzZbZszhxhsyCNZiueFgusBOgyFSZbhXAGcmBDJ', false, false);
        get_4 = objectStore_2464.get(KeyRange_12);
    }
    catch (e){
    }

    var put_4 = objectStore_2464.put({f0_x: '<null>', f1_i: '<object>', f2_s: '<string>', f3_g: '<object>'}, 'mCogrKkRUrvMfGGEEwMyMvGKkdhCJrjqYOGPIZrbSaiqmqESjs');
    var add_4 = objectStore_2464.add({f0_l: '<string>', f1_v: '<object>', f2_c: '<null>', f3_z: '<string>', f4_t: '<string>'}, 'xeruhZYJBIdXiWzZkzBTRHhbERfMbJrNWhgPMIDclJuOhPCarZBTfkPqylzlXKWVHPWwPgdkFvWoAtmPKLbknLSQlhnBYWpbRMlCMdpzCGZbjwcfKKMMOAPjYliQdBvlHyvBfPGlcllHeUdrmfbsUApDSOgjpHPyJeCfADEShQWfCRwpnIjOejYccRLAUzSjRhGePgaZAEmrkCXvcvQnjfDXsAmgYmtZfFTeWUYMULAyNKFdsRrLscOdzFyDMaqZbunBaZrdYmmVTBrJyjyBvYZtxBhftybPTMhAwnBpaEPIVCkryqzSBHHHaMASewZNMclXPqCcGZnFNGruBEhaVqvblJqyoYKTzeuGFFvGJIWDzEPGsYtDWToEQYqmSnHfYUMFpOUeRsuXanISBOWlzdkstXwQrXWVOsUEckCdCyNhVxXQTsefKhhUeUkCoOyurjGZuVKxjbCUksRhmgkkfuYfEthWAJZLtOEkGjAz');
    var count_3 = objectStore_2464.count();
    var count_4 = objectStore_2464.count();
    txn_3688.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3688.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3688.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3689 = db.transaction(['objectStore_2463', 'objectStore_2464'], 'readwrite', {durability:"strict"})
    var objectStore_2463 = txn_3689.objectStore('objectStore_2463');
    var clear_3 = objectStore_2463.clear();
    var put_5 = objectStore_2463.put({f0_n: '<boolean>', f1_w: '<number>', f2_a: '<boolean>', f3_d: '<object>', f4_b: '<boolean>', f5_v: '<array>', f6_c: '<object>', f7_u: '<boolean>'}, 'iYQnrAahQlHJbNJQfqPcXzXjSdkbDDavhXdLSUFUrTNdACvxeieoMLfulRXdFFYIWAvdKQugHVMSUejEnBNjTLZfWMBSgNPqkxZzeTxmgJjxECFLwnpyGBugLeuFLhosKImsXCeiZCAihDnEulSaHhuWXvxabhRFbKhIxzUvhnwQZHebIncVLTAgAstYINlhbgePJtewBtLicTTonIyDAwSDfJwqBZpxKzxOgRPsIHaCAYHzRXtuDzQVakcMwTtSJJbNkObqXLHJOgIxIVPuSsJLRbqCUrNNZkYCZ');
    var clear_4 = objectStore_2463.clear();
    var getAllKeys_1 = objectStore_2463.getAllKeys(314965924);
    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.only('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq');
        count_5 = objectStore_2463.count(KeyRange_14);
    }
    catch (e){
    }

    var count_6 = objectStore_2463.count();
    var clear_5 = objectStore_2463.clear();
    var getAllKeys_2 = objectStore_2463.getAllKeys();
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('iYQnrAahQlHJbNJQfqPcXzXjSdkbDDavhXdLSUFUrTNdACvxeieoMLfulRXdFFYIWAvdKQugHVMSUejEnBNjTLZfWMBSgNPqkxZzeTxmgJjxECFLwnpyGBugLeuFLhosKImsXCeiZCAihDnEulSaHhuWXvxabhRFbKhIxzUvhnwQZHebIncVLTAgAstYINlhbgePJtewBtLicTTonIyDAwSDfJwqBZpxKzxOgRPsIHaCAYHzRXtuDzQVakcMwTtSJJbNkObqXLHJOgIxIVPuSsJLRbqCUrNNZkYCZ', 'zBtHkwSpzQXOxbnutLCGlkwLueadvDuNxChDKvcEvuSxZEwebwdPMrPfAvxJAzdnLHomHnNdCkCrWgZWlPaPLniIxRCmtxKDFjZnAyNkhtgrbDmfNaXqnllSaBsYXcCOpdwgyDIuOCmzEOAvvnDgtQnfzTidUKxPFLkzQsiTycBqmzjeEOfTkxkkarLOwnbkVlnNYhIJzpNAOPvCnGdhbInDwrIYjDXwbzoPPKVRncmBXXCCxuERGRinLgFicWLFeOnVEUrqYjvpFlTRreYrEAttLAGcRxczVoHIfOerbuEcuzyzgKtuPROjqjgLyUsNnIcJEsraObxfvGvhXvOUpvBOaaEIJuPdNyroaOZeYvngKUfCEtGkCfWIBzXNyJXrMEbspeVkKMDKqevVuxhcPxfWPShvcNzeyyoLgpWflkdcOHWRqmfQdOVNbzwMkCeDfwDvCtYhWyHmYYNniSJskAvpOskofCuYpJwPCXKselvvYRjMVlHwjdKyVSYKXvZXjIsPPDMMbwwwXAKECdRvfGcMejEMarjCYprNZEVwkokmevIOLUozVWYamsssTyNXQctSLSksSqgXayqaxMAlcYbqufTXP', true, true);
        get_5 = objectStore_2463.get(KeyRange_16);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.bound('MxqWtpLKUyGcqKIEqpBefRySoHrYMSkrunaBIhXuHdAocSlgfoggUdBGQGWbtZskJMAomblleRTfVyqqfwBObqyLATZWsCysKqVSMRlmtiZnIWjBZBsDBMSBWtBJoYAYKRUSCoGCeTsUkYsNLkWcCAKIBQrNVlWZbMNnTvozyHFyVUGVikVVdgoBgezgORHIRslaHICEelGYwceQdjSsFrV', 'RpbbFalzFEQpeUOXuDkgzcmzHHWYwIXlgp', true, true);
        get_6 = objectStore_2463.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2463.getAll();
    var clear_6 = objectStore_2463.clear();
    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.only('ZxQHQRZSgAIZkWljarUMFSwxwkqdLpYAgCrNUBnSCuyFSzZSEXOOWbZsaRySGeFIGuWDbFFftRXqCnkKxJUFCnEIIpBORlPQixEbBFMwMUJfauloSFoBxiCqdRLRCgCqDsLcrIKwBfmTORNPTmymEskmqGoXgENORjYIwIErdSCBxjPVuaAdXsRHuEbYSmqLHkhxcGOebYtNNtwHoKmseZKiQUZxOBBnzQMMOTjFrjktWloStboLmXqlHrSIJWbTALWrxfRjFDHLKYHlDUDaslpNkMPCMezitoPDAETvWVOgYULZyDqjDVKoPKLRLBQHbNeWWYCWJPuSKLBVQMqiFCFeHsRXesgUUFVVttZZvkArmoCcIsUFWqxMPIxPJjooSCuURlzealaHzfsItAzxnxMoXQLeVjBjhgUfKTDTpriWQHhssGkwPHLtKvAZAPZFCzmPeSsSEjZEsjcvyuvaDRuCvVIVfounmbLmBcqKJYVhomyHZYnkTrWJAQSbmmwqGjmjAENnjwAkKwrXWaAQQHVTStnolkdoWNeIPMXuSvqNWeedtFKLwDNvSrNALKPjCnmQIcUxVTMjshIoybGaKmbpaLCjrPaqASOfDgSPvzeaapgKAbNmRmAsyvelGJOGkYdEVFRPgrMCHDwWVSwlSuPmIiztHHLsgUpwjXPwVrSMfWSpHjvgMgUAfcvdYFPBOaKCpAFRRTQZwIvcZoJgIhOUocDQhpsHbCokbaYWvcGIeBTnZXzphNPSRQNZQgJfhjGWcFZKHuFGATM');
        count_7 = objectStore_2463.count(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq', 'jKGeGtYDMuTZPxTjcsvVfxmNYTvxsnHmNzmWJyYQlnusGbxMgingiHyqOtdsnYZlQwPjJNvGcWniprbyyuJUCocmcUVpXSXBBsItmQagJgEVPGkprqeFSEpBMhoXAiNmCugDvWRXrGBaRqHgliEVGsFTuuZKmiJpSmMAFqAnHELkhLEjONCeZhSOOIUdFHSevlIfuJYTsTePEIBJdRjaVxnhWHsVEuqpwjVusrnqFRCISMPiNWWnXfJttaLqkFhiUPPBnXTtPTRmIZpIsbOfmpdOMDgHNrfyPCpkRdUYFOYbUMafCEqdmcONMpdFxjWgGsmZXcKCFUjmBpieJjHHGeyiZrCCRVojaYvxpBvDktrrYStOsXyVUnmGNwSIvTLUTgwbxMMvJvIkCvxhepjBvZfPQsrKUhafbOfEdzBzlHgJipZWztcKzebdTyFDJrXIcfseuKAJSWpOntbuJKIFwozoLEsdeaEyuLNOuaUqByJPsZYbBXLsJEpCMbKeMevhyttEWhFAFsdOqPhMlyifqtFtEfiibjXbXdflhdqJbKRsHQtzypFxNypyJxGxOjwlKSOhpuNBSZHTMmkFaSBjzUnCJOFThDMdTwfoCQingqQkiPwYThBCyfzCjdIseLJCjRoPSWiQwXApkLIKLuwiiJgzGfhTAgbVgoLEprwqxQIcadXmpqxRHeIrsjIWcSoCRrfZbsusOGrNFFojPptTMBrKbfmpgVuqcZNOGBNAbmNmLdBXDczWfqFkgLJwsLAdqeCGiLEibjKbokKwlvzneBKuHZrfzjcLLzOfwXYDTadcFflmFlYhEkonDWmCzWPorVbHwbbhnXLJplnFyJPJjfwPBPVScBkMUusBctBeOyyduTsJlrQqIWIqUzUQCjteq', true, false);
        getAllKeys_3 = objectStore_2463.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('RpbbFalzFEQpeUOXuDkgzcmzHHWYwIXlgp');
        getAllKeys_3 = objectStore_2463.getAllKeys(KeyRange_23);
    }

    txn_3689.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3689.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3689.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8751')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};