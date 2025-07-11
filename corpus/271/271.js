let db;
const openRequest = window.indexedDB.open('str_4449', 4232120664787364)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1640', {keypath: 'hgTfhlONhpncuYFXXdGRhLCfanMQHjqmELUEoEbDNQrJVFaRVZzJFcLxtfkFqeqUQebOWIiDBblYqSMVQdKwjvePERzQnEpHjJWvXYHnVrOZTllahEzuHQTlLBUrsOmQbgOOSQAXqWwpCRXUFOiXJZXtDjurSItVVBrKaLBJjlhXolsVcMjVJxpLhwgQcJzNlMMcBQTqjSpRaXcyGXrExSFOhzLpGujRctizTJpCaqUUBQYkivHLSqfhBlMFepDSEVOqbFFrxnNOqdLfKBepqxWCtJPZTmJQpNtVdwoIiiTAsTgAOeyEYNFPDaNHTkSrlTSlijByakBSoceloGIIQCwhnWJscmgZauBFgFiRzFedUQCzvZBTCLKulTXiQbROTrBnXasSnIcHLSYsdiqGHBdelbjmwcIkJkxepCTWYhYQjtdOoBpSZhNujbSgtonGZfWNGozzAcFPVxeQYCQBmqskFyGuPauOoKOBVeaPkwbVbCyNwRduJUJvADfQaDGSmwLNDCTlQxhvbvmvOILdgNUZqMNDEieEqhEPLTLXaWmpHgkeSRtZZviWWtwNrWWJJbluvoHJAdtziHpSpFQxPweAuXgLxnQcEcIDoxQxEFkRAAllGtNjXMTQiygjocpacHC', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_j: '<string>', f1_h: '<number>', f2_o: '<null>'}, 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
    var count_0 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_1641', {keypath: 'RJlavIsvLccNPAzSlJRbQZHQTcLCItNBYKWvylAlSydPXTuhBxhyGoDVTFqbWJbXameWnPRWUZOcfjfwAqkKscvqvRnEvvPTkneEuGTRLvchcwxjBKTCTVPGoQZVwffrpeBqeKClHsTpEtGRpxfHZpKuaGjSQjVzsRSqaPVUKLdZRSXzkMCyUbNEKIDBgkhOxbIwRvSirTGghquyTqaVqGbxKkEBsuraoLPTlEPahGSUMwXMmqmbgSARToDEJSLRAmBtCZveFHTMQRUlUEkLeHOJWvNmChqdxpXcARNZPnWzrujAsdElRkwXLLHVAKUdXzEzJArHotIWEzjNaUqrbDyXRkFeffIf'});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_1.put({f0_t: '<number>', f1_r: '<null>', f2_t: '<object>', f3_y: '<object>', f4_l: '<boolean>', f5_l: '<boolean>', f6_y: '<string>'}, 'eIaeFXzEsNNWvxvoYdRUcSoJdXioutPJaWKcunMLZiFdtNWQsrOOQtPKNHtGsDQSCxDgRgDVVzLcMnsbWmhoNchYTujRjJNEagwbDhGgOfZSKOZkuyWMulQSmAZZcCGpkZdgxaWKjAjHYSOPaFAhrDRbfWKtXSYbOKnaDuxNHvjbwjDQvoXWVDdCgjAPXdJiRvkhMmruQlzbcchwfNvAcbaVcHSpqYHiAmnrdbFwUriJecLoMtxDUjtIynUezWMARbItUcxjKDSZYibEZLVbFIIRCcwXcpREmtjrMyNlWwjAJMCwyyJONyzGLBSWIAPIjbjIBXMhJHaHEvavzEXAFYRhJPnKYdRIigbtpDKtyZMOJtaTqysJQGhMTWaNVlkjqKyeplVndsoVlnNOpIWBhzmuMsZfJsvpencUprCeOcXrjivIiwxHuEjh');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('eIaeFXzEsNNWvxvoYdRUcSoJdXioutPJaWKcunMLZiFdtNWQsrOOQtPKNHtGsDQSCxDgRgDVVzLcMnsbWmhoNchYTujRjJNEagwbDhGgOfZSKOZkuyWMulQSmAZZcCGpkZdgxaWKjAjHYSOPaFAhrDRbfWKtXSYbOKnaDuxNHvjbwjDQvoXWVDdCgjAPXdJiRvkhMmruQlzbcchwfNvAcbaVcHSpqYHiAmnrdbFwUriJecLoMtxDUjtIynUezWMARbItUcxjKDSZYibEZLVbFIIRCcwXcpREmtjrMyNlWwjAJMCwyyJONyzGLBSWIAPIjbjIBXMhJHaHEvavzEXAFYRhJPnKYdRIigbtpDKtyZMOJtaTqysJQGhMTWaNVlkjqKyeplVndsoVlnNOpIWBhzmuMsZfJsvpencUprCeOcXrjivIiwxHuEjh', false);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_1.put({f0_j: '<boolean>'}, 'bvopGODXQPXYKnqsInBLFMlwhIfcncvtHJCBWTxUUsLToZsVVTMJcrkxcyvXyuVDZTnTfTSNSgeqGREzWJxgTkiRbDMlWnRTwdWaoLWfFRngYTZfmcHWhzWFHTHHVgNzeykYBstXvtPNCjvYHRCZmvXeFzdfUwztrmAxRuEHTqkgUliiWfQQSwjIlwuofmePUtmNHPpFUostDhNphJdkKzIUIOfctQTFXeAOFGTDSRBCBsXblPytKRZT');
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', true);
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.only('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_5);
    }

    var getAllKeys_1 = objectStore_1.getAllKeys(2941124848);
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('bvopGODXQPXYKnqsInBLFMlwhIfcncvtHJCBWTxUUsLToZsVVTMJcrkxcyvXyuVDZTnTfTSNSgeqGREzWJxgTkiRbDMlWnRTwdWaoLWfFRngYTZfmcHWhzWFHTHHVgNzeykYBstXvtPNCjvYHRCZmvXeFzdfUwztrmAxRuEHTqkgUliiWfQQSwjIlwuofmePUtmNHPpFUostDhNphJdkKzIUIOfctQTFXeAOFGTDSRBCBsXblPytKRZT', 'bvopGODXQPXYKnqsInBLFMlwhIfcncvtHJCBWTxUUsLToZsVVTMJcrkxcyvXyuVDZTnTfTSNSgeqGREzWJxgTkiRbDMlWnRTwdWaoLWfFRngYTZfmcHWhzWFHTHHVgNzeykYBstXvtPNCjvYHRCZmvXeFzdfUwztrmAxRuEHTqkgUliiWfQQSwjIlwuofmePUtmNHPpFUostDhNphJdkKzIUIOfctQTFXeAOFGTDSRBCBsXblPytKRZT', true, false);
        get_0 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var index_1076 = objectStore_0.createIndex('index_1076', 'test', {unique: true, multiEntry: true});
    var add_1 = objectStore_1.add({f0_s: '<array>', f1_p: '<object>', f2_q: '<boolean>', f3_l: '<boolean>', f4_a: '<boolean>'}, 'wVMGucVfRwtJSlqCzIzivZqMJvwbSDesTYEOJwcNXlrBpNAHRlXDbWpZkROcJXeVrXyBYjYhTxhVHWAUnERXxATDDwzUfDasuNjCZQPtEQiqbBxXGIuiYLTMAsxMpEhvjSzUBqhOqsUMgNAxdLjHtYjVzRPHGOfNBnzlPEYRcaycArioFLvyoUGTvChOVwPknqZsCgzKwvTFXFgvSheQNHJyqEMsGlOQPfqwyHBqdRzbbnqpaYAZEiqZhOOcVNbpRaSGkJKWmxggwqjbRDmavUBreynWVazcCLUrXBVXnAAcwMawvLNVmkrlxboEJuVphGnHsfxhGNqfeGiYeTHGsSonRWxiXJqzxvhNonaKnvbRgMjFJwGGjyneznwPgfBiOLJqLjETZHssmGyBSDqFVnSKhMsLAt');
    var index_1077 = objectStore_1.createIndex('index_1077', 'test', {multiEntry: true});
    var put_2 = objectStore_0.put({f0_f: '<string>', f1_l: '<null>', f2_w: '<object>', f3_b: '<null>'}, 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
    var getAllKeys_2 = objectStore_0.getAllKeys(2019053747);
    db.deleteObjectStore('objectStore_1641')
    var index_1078 = objectStore_0.createIndex('index_1078', 'test', {multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2425 = db.transaction(['objectStore_1640'], 'readonly', {durability:"strict"})
    var objectStore_1640 = txn_2425.objectStore('objectStore_1640');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', false, false);
        get_1 = objectStore_1640.get(KeyRange_8);
    }
    catch (e){
    }

    var count_2 = objectStore_1640.count();
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        get_2 = objectStore_1640.get(KeyRange_10);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        count_3 = objectStore_1640.count(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        get_3 = objectStore_1640.get(KeyRange_14);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        count_4 = objectStore_1640.count(KeyRange_16);
    }
    catch (e){
    }

    var count_5 = objectStore_1640.count();
    var count_6 = objectStore_1640.count();
    var count_7;
    try{
        KeyRange_18 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, false);
        count_7 = objectStore_1640.count(KeyRange_18);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', true, false);
        count_8 = objectStore_1640.count(KeyRange_20);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_22 = IDBKeyRange.bound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, true);
        count_9 = objectStore_1640.count(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_1640.getAllKeys();
    var index_0 = objectStore_1640.index('index_1076');
    txn_2425.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2425.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2425.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2426 = db.transaction(['objectStore_1640'], 'readonly', {durability:"strict"})
    var objectStore_1640 = txn_2426.objectStore('objectStore_1640');
    var count_10;
    try{
        KeyRange_24 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, true);
        count_10 = objectStore_1640.count(KeyRange_24);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_26 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', true, true);
        getAllKeys_4 = objectStore_1640.getAllKeys(KeyRange_26, 4046339452);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        getAllKeys_4 = objectStore_1640.getAllKeys(KeyRange_27);
    }

    var count_11 = objectStore_1640.count();
    var getAll_0;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', false);
        getAll_0 = objectStore_1640.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        getAll_0 = objectStore_1640.getAll(KeyRange_29);
    }

    var count_12 = objectStore_1640.count();
    var getAll_1 = objectStore_1640.getAll();
    var count_13;
    try{
        KeyRange_30 = IDBKeyRange.only('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
        count_13 = objectStore_1640.count(KeyRange_30);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', false, true);
        get_4 = objectStore_1640.get(KeyRange_32);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', true);
        getAll_2 = objectStore_1640.getAll(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
        getAll_2 = objectStore_1640.getAll(KeyRange_35);
    }

    var count_14 = objectStore_1640.count();
    txn_2426.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2426.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2426.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2427 = db.transaction(['objectStore_1640'], 'readonly', {durability:"default"})
    var objectStore_1640 = txn_2427.objectStore('objectStore_1640');
    var count_15;
    try{
        KeyRange_36 = IDBKeyRange.bound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', false, false);
        count_15 = objectStore_1640.count(KeyRange_36);
    }
    catch (e){
    }

    var getAll_3 = objectStore_1640.getAll(654406187);
    var count_16 = objectStore_1640.count();
    var getAllKeys_5 = objectStore_1640.getAllKeys(2941668235);
    var count_17;
    try{
        KeyRange_38 = IDBKeyRange.bound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', false, false);
        count_17 = objectStore_1640.count(KeyRange_38);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_40 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, true);
        count_18 = objectStore_1640.count(KeyRange_40);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_1640.getAllKeys(2701277843);
    var count_19;
    try{
        KeyRange_42 = IDBKeyRange.only('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG');
        count_19 = objectStore_1640.count(KeyRange_42);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', true, false);
        get_5 = objectStore_1640.get(KeyRange_44);
    }
    catch (e){
    }

    var count_20 = objectStore_1640.count();
    var count_21;
    try{
        KeyRange_46 = IDBKeyRange.bound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', false, false);
        count_21 = objectStore_1640.count(KeyRange_46);
    }
    catch (e){
    }

    txn_2427.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2427.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2427.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2428 = db.transaction(['objectStore_1640'], 'readwrite', {durability:"relaxed"})
    var objectStore_1640 = txn_2428.objectStore('objectStore_1640');
    var add_2 = objectStore_1640.add({f0_r: '<string>', f1_v: '<null>', f2_a: '<number>', f3_i: '<null>', f4_l: '<string>', f5_i: '<array>'}, 'LbbKSvEjngtMpwNdgkUPPXUIddmhnzAuDrBUALtgbTUEdpvIeMMjTdSaobasuxGdxsxDBVMPdFFVMrzWXsuEhOcNiqZmQIAxsmUkLlERwHBBpdOSmDRVcuPuFvCMlTtrsDTbNfhjbbboEYkSnxEFSwpmkjMeYuSzOTVabjSiURbDBQtAdJHkFfhemypyjsbtzENDtFAsNfGFbkpBOsCHzixjMHXULpVqjEMJgVKLiEvyytfMUilMHenItmzMwKLUVXfVzQkVFRQutGtgYYeYgUbxTFlFewTcIwlZgZSjBnbgSHNpDJhpVRRSkSaAkeGrYBKgTfdfflFafWuWDsVKyTXkymZoasNotJWwcCbWqXqaTlxTfCKsNgbjzeIMzsSJifNqHxXeWOfX');
    var clear_2 = objectStore_1640.clear();
    var count_22 = objectStore_1640.count();
    var clear_3 = objectStore_1640.clear();
    var add_3 = objectStore_1640.add({f0_q: '<string>', f1_n: '<array>', f2_m: '<array>', f3_k: '<object>', f4_s: '<null>', f5_m: '<array>'}, 'zJdvbdqwvpDzeyLGrWLFLcjYpbzYrJWpiSUqSmrETKidclIkFJnKDGKsprUZDRgwRpYsOvlXVEHfZcpOIkYiWBZqOZYBkGvSVXvrmsSCOaYckTeOOwtvKAhIrujPRKVpSHaDWUsoaCxCigVWAwKyVBDUBZvRrtOvndULhavXm');
    var getAllKeys_7 = objectStore_1640.getAllKeys();
    var get_6;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('fCPkjRbifcppGjHrPOnTkbEyAZqtVnOYFZnGWqNGJiZFKryQVYxcIJuWoHUsSYryIqhozIdcPvorrUBCdFcyDqyWbCglrNEnffzgsjfmqZahWGAdjFespdFfGqZFiJXewBnKEARoaEldQzlrmujuSaYoHLqoJRZXskTprqBRIPThiQkTOlbZfBuElfokJCvcSNZAMWKDJUYSryNgZVAVbXiPTbewwfxOQKG', false);
        get_6 = objectStore_1640.get(KeyRange_48);
    }
    catch (e){
    }

    var clear_4 = objectStore_1640.clear();
    var put_3 = objectStore_1640.put({f0_b: '<object>', f1_d: '<number>', f2_o: '<boolean>', f3_t: '<string>', f4_n: '<boolean>'}, 'nStQrNkFxaLadsqUfgKcYejOvmDYsVvXfoRfrevIGygULmhKjKpJAqEcjeZzEtroDBlZYelUjHInvoGXfWExFweICYqFpJfVBVcpSdmexhCHgHHgHwmJgaJgQzRZcqiwtGDJItGhmvIQdwynePZFyWMbiDFxTehOTmGNMqBVlHcKgSOfLwlGCPQoLklqBZmAzCvPBRXjRnTaYpiaQxtYStQSqwqxOKQHdigErkIZwdhfeFwqLijVBTOPphiTKqImqZRNmDucOLWXaMnuRcbChlwcKwdywUc');
    var getAllKeys_8;
    try{
        KeyRange_50 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        getAllKeys_8 = objectStore_1640.getAllKeys(KeyRange_50, 532690982);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('zJdvbdqwvpDzeyLGrWLFLcjYpbzYrJWpiSUqSmrETKidclIkFJnKDGKsprUZDRgwRpYsOvlXVEHfZcpOIkYiWBZqOZYBkGvSVXvrmsSCOaYckTeOOwtvKAhIrujPRKVpSHaDWUsoaCxCigVWAwKyVBDUBZvRrtOvndULhavXm');
        getAllKeys_8 = objectStore_1640.getAllKeys(KeyRange_51);
    }

    var get_7;
    try{
        KeyRange_52 = IDBKeyRange.only('LbbKSvEjngtMpwNdgkUPPXUIddmhnzAuDrBUALtgbTUEdpvIeMMjTdSaobasuxGdxsxDBVMPdFFVMrzWXsuEhOcNiqZmQIAxsmUkLlERwHBBpdOSmDRVcuPuFvCMlTtrsDTbNfhjbbboEYkSnxEFSwpmkjMeYuSzOTVabjSiURbDBQtAdJHkFfhemypyjsbtzENDtFAsNfGFbkpBOsCHzixjMHXULpVqjEMJgVKLiEvyytfMUilMHenItmzMwKLUVXfVzQkVFRQutGtgYYeYgUbxTFlFewTcIwlZgZSjBnbgSHNpDJhpVRRSkSaAkeGrYBKgTfdfflFafWuWDsVKyTXkymZoasNotJWwcCbWqXqaTlxTfCKsNgbjzeIMzsSJifNqHxXeWOfX');
        get_7 = objectStore_1640.get(KeyRange_52);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_54 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        get_8 = objectStore_1640.get(KeyRange_54);
    }
    catch (e){
    }

    txn_2428.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2428.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2428.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2429 = db.transaction(['objectStore_1640'], 'readonly', {durability:"strict"})
    var objectStore_1640 = txn_2429.objectStore('objectStore_1640');
    var getAll_4 = objectStore_1640.getAll();
    var count_23 = objectStore_1640.count();
    var get_9;
    try{
        KeyRange_56 = IDBKeyRange.bound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, true);
        get_9 = objectStore_1640.get(KeyRange_56);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_58 = IDBKeyRange.bound('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', 'EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq', true, false);
        get_10 = objectStore_1640.get(KeyRange_58);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_60 = IDBKeyRange.only('EHoFqbmcTVCKBAvmLjAiOyaVoxoJOoQISYpZwajptSoCqtSxnHqmTMghEmyiJMUQvIloRTwuVJCuGJloqeCEIbGjbVUlVPYEpOUEfGDvZMNbPaiSBWcTzxrXjvuzdLpryHNqXZxrBeqrDilWvgkbKnycZockTOJgRkZhrEqbtAoqmjMLLmSiMqIOmnLScDJhFtvFJXJdaqGJQCoJLnXxFQMHwxYYeWNAwDlHONlgADpygiwAhXrNsjZSjovRxCrqSpZMTGKOczZvqsQetxWWGBHqvsaPamMqwkEpmmzGmjeyZqIeKGzTZBTfkBAHwJOFTQjlZheSOTXlSeNovCiKKLzqYtBUPlEZQVidUXDbWMoAfmiEpQnqjvbmFJoJUDMHdnyCEJgrVhbxNNYHsnaFMobFIuvczjjsLgqEqNeTIxEbXTmyPgGHDAmvTCFytsKPahRbuBONIaZnfskPwJMwDqmxXCltAHGUpCnRzxdGwpOGAwQLSBwceslpUgYmDBZvyAioCQfJq');
        getAll_5 = objectStore_1640.getAll(KeyRange_60);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('LbbKSvEjngtMpwNdgkUPPXUIddmhnzAuDrBUALtgbTUEdpvIeMMjTdSaobasuxGdxsxDBVMPdFFVMrzWXsuEhOcNiqZmQIAxsmUkLlERwHBBpdOSmDRVcuPuFvCMlTtrsDTbNfhjbbboEYkSnxEFSwpmkjMeYuSzOTVabjSiURbDBQtAdJHkFfhemypyjsbtzENDtFAsNfGFbkpBOsCHzixjMHXULpVqjEMJgVKLiEvyytfMUilMHenItmzMwKLUVXfVzQkVFRQutGtgYYeYgUbxTFlFewTcIwlZgZSjBnbgSHNpDJhpVRRSkSaAkeGrYBKgTfdfflFafWuWDsVKyTXkymZoasNotJWwcCbWqXqaTlxTfCKsNgbjzeIMzsSJifNqHxXeWOfX');
        getAll_5 = objectStore_1640.getAll(KeyRange_61);
    }

    var get_11;
    try{
        KeyRange_62 = IDBKeyRange.bound('LbbKSvEjngtMpwNdgkUPPXUIddmhnzAuDrBUALtgbTUEdpvIeMMjTdSaobasuxGdxsxDBVMPdFFVMrzWXsuEhOcNiqZmQIAxsmUkLlERwHBBpdOSmDRVcuPuFvCMlTtrsDTbNfhjbbboEYkSnxEFSwpmkjMeYuSzOTVabjSiURbDBQtAdJHkFfhemypyjsbtzENDtFAsNfGFbkpBOsCHzixjMHXULpVqjEMJgVKLiEvyytfMUilMHenItmzMwKLUVXfVzQkVFRQutGtgYYeYgUbxTFlFewTcIwlZgZSjBnbgSHNpDJhpVRRSkSaAkeGrYBKgTfdfflFafWuWDsVKyTXkymZoasNotJWwcCbWqXqaTlxTfCKsNgbjzeIMzsSJifNqHxXeWOfX', 'zJdvbdqwvpDzeyLGrWLFLcjYpbzYrJWpiSUqSmrETKidclIkFJnKDGKsprUZDRgwRpYsOvlXVEHfZcpOIkYiWBZqOZYBkGvSVXvrmsSCOaYckTeOOwtvKAhIrujPRKVpSHaDWUsoaCxCigVWAwKyVBDUBZvRrtOvndULhavXm', false, false);
        get_11 = objectStore_1640.get(KeyRange_62);
    }
    catch (e){
    }

    var count_24 = objectStore_1640.count();
    var getAll_6;
    try{
        KeyRange_64 = IDBKeyRange.bound('zJdvbdqwvpDzeyLGrWLFLcjYpbzYrJWpiSUqSmrETKidclIkFJnKDGKsprUZDRgwRpYsOvlXVEHfZcpOIkYiWBZqOZYBkGvSVXvrmsSCOaYckTeOOwtvKAhIrujPRKVpSHaDWUsoaCxCigVWAwKyVBDUBZvRrtOvndULhavXm', 'nStQrNkFxaLadsqUfgKcYejOvmDYsVvXfoRfrevIGygULmhKjKpJAqEcjeZzEtroDBlZYelUjHInvoGXfWExFweICYqFpJfVBVcpSdmexhCHgHHgHwmJgaJgQzRZcqiwtGDJItGhmvIQdwynePZFyWMbiDFxTehOTmGNMqBVlHcKgSOfLwlGCPQoLklqBZmAzCvPBRXjRnTaYpiaQxtYStQSqwqxOKQHdigErkIZwdhfeFwqLijVBTOPphiTKqImqZRNmDucOLWXaMnuRcbChlwcKwdywUc', false, false);
        getAll_6 = objectStore_1640.getAll(KeyRange_64, 526125235);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('nStQrNkFxaLadsqUfgKcYejOvmDYsVvXfoRfrevIGygULmhKjKpJAqEcjeZzEtroDBlZYelUjHInvoGXfWExFweICYqFpJfVBVcpSdmexhCHgHHgHwmJgaJgQzRZcqiwtGDJItGhmvIQdwynePZFyWMbiDFxTehOTmGNMqBVlHcKgSOfLwlGCPQoLklqBZmAzCvPBRXjRnTaYpiaQxtYStQSqwqxOKQHdigErkIZwdhfeFwqLijVBTOPphiTKqImqZRNmDucOLWXaMnuRcbChlwcKwdywUc');
        getAll_6 = objectStore_1640.getAll(KeyRange_65);
    }

    var index_1 = objectStore_1640.index('index_1076');
    var count_25 = objectStore_1640.count();
    var count_26 = objectStore_1640.count();
    txn_2429.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2429.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2429.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3705')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};