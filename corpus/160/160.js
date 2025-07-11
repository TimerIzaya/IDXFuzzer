let db;
const openRequest = window.indexedDB.open('str_4743', 7059483394198445)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_935', {autoIncrement: false});
    var index_634 = objectStore_0.createIndex('index_634', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_0.put({f0_a: '<array>', f1_n: '<array>', f2_w: '<number>', f3_b: '<null>', f4_e: '<string>', f5_x: '<object>', f6_b: '<object>', f7_e: '<object>'}, 'XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH');
    var put_1 = objectStore_0.put({f0_p: '<array>', f1_w: '<number>', f2_l: '<boolean>', f3_u: '<boolean>', f4_b: '<string>', f5_n: '<null>', f6_w: '<string>'}, 'qIlQMZkLulCioKmYVsypcTzIydBlrYjyXhMJOxtEJHLbLTtYVSSrAJcinxYjzIYnPpXUeeASWKiQkRssmTJmbHdHxteiBIUKUZUxauGDFlbaMNSVymykCPYnKxhLYWMEAAohpwZMVnjMWsLSYoELILOKOXEfoCQYMGVxZnJWmLSAEXLHTUOkbMTOSOvfNIiCrzRUkodiFDQsaKRtpSYVDxqhNsWYpezrJHQqGIobVUMjPcqDzbaooyTqi');
    var objectStore_1 = db.createObjectStore('objectStore_936');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.only('qIlQMZkLulCioKmYVsypcTzIydBlrYjyXhMJOxtEJHLbLTtYVSSrAJcinxYjzIYnPpXUeeASWKiQkRssmTJmbHdHxteiBIUKUZUxauGDFlbaMNSVymykCPYnKxhLYWMEAAohpwZMVnjMWsLSYoELILOKOXEfoCQYMGVxZnJWmLSAEXLHTUOkbMTOSOvfNIiCrzRUkodiFDQsaKRtpSYVDxqhNsWYpezrJHQqGIobVUMjPcqDzbaooyTqi');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var clear_0 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_937', {keypath: 'PXpqKmLxXpZTDsuwpxWTeqyXqMGdMgmdVnmpwDZafPoLmMKfsZKOPLjSERIsdjKhYlZjkfxIgCxYsBkLxKmbihYyvKOirBpEMqGqPRJCvygRblDVWLLQqsviWvUwXNXSaUPcpZGwsejsoDaWVdRVcXZMaLVsGPfaPHHcvcGhtZFqzUGCMVopltLJTwLMXiXFJcKULGgjaMsAzSrJoOvlfqkugVBbSgwsCpvdYFRObOaFjNvXAONSDVOilQrwZHlZuHUbQvNHjrgsiiQCDVwIlHFKSjYXMxncdbYafPcjRavxRFeoQKnKHbpehqAlQFpynLFiIyABknSnFkueAVMCyihQbTpGihVvcpkpcfwHBpyIFkApVZdGjcLxuILxaiSAcKBkVuwGEktNAXHWOdVawpMZYbWtCltvOdLgQfIxhpulNYfQiNuLQsRGXXLmcmoQFNmFZXAJqAEeexBxFgXlVFPhiBSJVnLGLompbwemTafoywaVDdkJwDxyfrtsNkmGQjvMXgSrElKWRUCyBmstBIokmkHscjBSnliQPeTXOiZGMAMvoItcQyEjnzVwenCVHuVUWuudPCOtKhgDCybqKZCLDCiUYxQiOJtyPwHOzmPObDnpMIVLyAbWCNMikCyNHpvPWxRTEVuzffjhSxdvthLrwIEWwXmKriDIDHFGrpOLB.QDCRGffzuMcfCMMYlCtAnMtOtnqdlLDAOXtWlEUTobVsKqDjnJTDoXHzTcfSxFefTKSxcQtJDoIFowKoZlHmYtZZlEStfxUuEIquHhuassWdJLvWUwUhRMqevzOYBaeWaQErTHiXTTDsPzqHlnBbahuhSYtOOjWQNRIWANHXsgWgnaaLxXTfETsHWGVfjoJvRekLYjBchKNTKMGsalHHQstZBPoIiWonJJOXDjZjjYhnzZSihJgRsEJEyTgHDIvqDnfJGcakYQxPnHDERAOaqyKFYhdWkKyIkhyWfGUfZIOJcVjCJFOnYQGIhEcOpowEiInhnsWMKUeJtaFpleIftvOMrpdWjMkYYMdrjQhsqPQtnPhNQxUdpBKYJXGQmzMhvjTBIcnAyWeMTVnhPvsuEskPXnkCcchrxwNACYYGFzGwxqBmwlusuzOsedSyRPyjXywCeNHmNVYmEFWJDFaHkvexAiUshMDoBXvgHqRnmpiGePtJpOeEceoWfOEMLCfhJgsHxNGGSZtoIrHnXAsXDGkWmnwUQNHltkODAoqCXHeXAflAbksbRNWGNXOTGCOoXEbtsYLlMFaMcaCLTPvWOJWirCbbDHMUDLoOCEIYNigVqRIXOHmixOzVNxfezDuNodVVEZjFwAAcKFEWmjuksOfkifBvZrgmgWquoVmyKTtLPddSESQumsxlkgoTnNxvICWFTfXcSSKMVXhbVYspmkiNpGKYK.eVBvFsGAFoyocYwJPxTMVjJFtLllckBuNgmgkvuJWNpqIKVNBtsjGTABExphzTgfKKhZQgTahXhgobJjXiayICWXkyDDiVjRQCigwprcoHttslTQEgpVwNruITnDBrPQFYaECdnWIlZsPhVSwcORrJElYiabzNFWCWlIxgMrdwrSragsfUNzPVvLeVaQyknliBdRhWzUkZGaIRXWdxfesswzboUccVsduCaScxhyMADefIxEUjaoGtUWBquoNERSFYjHYJtYaLlaczunPvqRgOfenYTaMTjbCUFIvwOjmjBdtEjsgDIakzoKjuJxKMmrdddtvQKVGzsQPQwYqsIGQBKtQGivXnaqNevcpDIyjNbYMKqTKZYYmFbimkjeBZmbNuFnppwyXrhzTxfKmbuATkrZlfAVItSZKVLIcLFyayJlDIUrMjZoRhbgZloMfJHCIWpgHMwUCsfAPzAWqPUvhCieOklqegkYYDePYSkqkSnkopiXWgCFORQyBCVyMCrgnOnqBZPoJaVPDwzJgGLdzcufITKdEOhxerjvmxOwiHSbdRNquVvhsKnbNvjTnQnTzlVbTIwadXrVfBlVXxBJgNaDghxScXhvbxFkmwyOVrZpLXGdFkXygZcthXyFWVjZlcVXhjghaeIDxMvgxTvWpYAvyvBKCTahjrTeIRrCTMNiQJzmpWiJPCBrrWBVtHTarpKhRpDuVMrFkPbiaweyMfQtrfHWwYAdUvkVdgLExuDnzfITIJbJUjOFdXyXvPAixYRjzWgdSniwMvecdNDueACPYQwINXGbtmUMnaTxoNDIUBqHruWIWuSUQcRDmvsnyHFLISpiECYIkXnEB.NQihHftvSZSGybLxVwOTjZnBEhHBAaRJLzWQuUlXeruKtEBDYsecOOYTMEndaJtuQiajiyrBlLbUVQHxgEqxQLDGetalxibDMLmlAdWCbRmLtgMUNsVaaSxQkPBYOdrDSLmRtgLZixwLZZSTmItTLuOIKjJCwqMsYjudPpZFBfDVpyVGFZeGHBSMRtFQLKddVuxscYzCkiJEzCOqznRBPjrYoUTlDqWSBiQfOZqZmhseowApbDFqNOqJoFysHXLFinPTpnvwdBzAVuNbGuRKfXtXgWVJIOaxshojRcBOtuGKMZbbCpMzSRHzvVKnOJxLgdqDtKuopwQfTzuqmJtpkxjHVeAeUSWRupKdYUMlPpzPDGaUYynekkFOgvjvQfAwLPXqjbRpQNsMxiahozgibfSqDkAVgNpsfWtnTeJjHKywISjsFbofFLVZWrybVaaVdPZXPzEiPAhwHkctqBtkhDotzbptViueKykWkXxephhinHDxgPnXIvCPDaykSCMmzhvgHHuCaSZFEJSZWbddmNWJSrVlHElcChceZZryzTLdsLBHNDPHtorrKfugnTAAgSKaUeSUhxvjvQjsEejGtKtclkizOOAnLDhrCKXAbztLrFIpB.sqqXRCYcJmROMVhIDhEbkfFXtEyHuvgmtDLcHKWQYFPiOpQQLSyaqoAMLtnlhAyWgfrnEKVoTnxnkweyuRfVozurpVBdJUdkqLQVOmSHWnWOUYAKvnwfdFFLGMtFNogjBEEmwckaxdlJHJHtAtgTXhIVngjALmQleWWiuqFdIrUnMfrzfOkjJIyIZlDolNOZygctWZIbPtRTnYzIjGgHqQPMMVCVfrzrYhxeigwudpIbWnjyvkspdSFjbhNAUzyQuCmLwITETXBWnztqbCbIHFZsFJYJDA.OOzhbZbwBQFBswEqZavazpHeALyhVGGsFcymBIUWWLrhwPmMxrJmfYcPgBieXvMjhVvVbKRByWozbHmvzATpSumWovEedjJsNEceYEpORYyGLJfsWckZHPwIHHJYJaRyKsYMdLckyXBXLCveYFGJvdmASUheHBzzIaPchOPhhriAyJKNvzqpOUwwQlBxHfxFBrPaHLCQIKPMixXVANZbsELrANfghFXWqOXlTxXRKvKvdJxIMTRKhcjaxpUqMaMSlDhCIZTNOwtFGElnnLrZwzXICSCVQKkQsMhUEHMiduHWpTAMzHPVujeRmEYpalYhLcKvXrLVIDYZqAMjHWHbLvHcwHhHaAGgrQegncKCSTFUnSReIVKlkEgUrvooqbmNzbWQasJJyxRmclLkkbHKrbGfHPoFTwylFznkPuFdXMFQqmTfdlmvOyROhhVSFlNUudgssHjrfRepiqyhzVjSeLMoAHOBeKkeKzQqwNVWQdEcsPzEFhIepguWQkBnraPUgwHlvSTwcAHoFZvvNvvRzJJxlRAVwTzeviMuLGRieaHazXnJXYLLbWidJlKcrljjkvpEHtKFSxEgTCCxIlvCrWMTjMJZFldnhhTWNMsNtskyhyxLvVjTJziBWnNqnMmxlaBmxkQgVBXJRcdyqvIFBdnWIamdfEXpoecUJmJufxNNLImdhykuAEnZsNBBXCQUJRYgTbZDlgtgCgfdcVMwaQEhikBTIrsYqlKUfJOnRTZfjwGSRbbDpCnRtMZMOAluTqVRRZwLzYKJtj.hjxuEQVwhDeCVWwyAdttSzHvwnjSDLiShItPuIxGjWKchcSWhKqlhtcyzDnyCokBbTtnAkUjjLEFUaGURgzqjcaYfSqzxDtLQVjdHMCXwlFAmnyCgUKHDKtDWASfgGHslbEUtnFWefZRZLYuWzdfGcYCGKgeeySgABEVrkmlupCCmvUFHfBPMiJJeklaDRDRqTUijbpggGudHqspSBVkCQzcQWuVNhhALpEOKtqDEYlqebZonKnSOMvPXfRBmtjQsIRKSeQGmNrJQQkxRdKcspiDARIWVTOeJHWeLoZUdKGpettazMzNTgziGkzlzwLhqrvrujINDRFTNWNOKqcVBSWOnRywymCapizhJFTSMSbhdQKZLxOKxDwUJtrlRBCZCCgaMShQkxOmBhIbdktTbtKvQRhCkAiTwmAELXfPxeRAWmjcZwJJDsbWHtKTHpjqENJVJgDzodZUPlWxbCevsGadOZfbVIjpWHIHBNdSkWjKoOlsjFhSghwcOLCpDpbLmryrlYHZBIJzLawStiEnDQhEehPXfZtwjqmMdPDRCqUynVDjwRIoaucIfNitpNQoMDjUbstalftKrKwMvXSRZsDYKKOcBcAMujxtaAeRGJJsFDjqtbEgFpWPSFWYSbfWQVxUSPIlwANYySSXShHTPrpAxgmwpXwcljvqqkttohPLolUHumvzdO.idqRThWQtMRhQPSmcgktKIlTBtYLnBYJGCnerkcTPCEhngPMkhIyWhidOpImzbKExVBzdqnxlowRYpJrOxYfSZhFkwehVGlcQwMBdbnfCzOcNmgJzNJBihzvpCXeMtgVXfkRYiRdZnFNcqnIjqDsxdyiokRsJeIGhJHZAmmjrWiHeSaBzxqmjctDzezOIQOrhdOZXjmIlkdLZjkiUvLPtUeIJRByJpTqFpdWNtPNLIRJvWlYZkbjbAOaEaiXnYZAHEFiYitqnleHdpSetIlsaSpDSVdQpIAlaNWAYOIDgeOcjKdVEbumTCYviKrBTwYRopnkLcYKXVoAMCXVpxwEsnjkdcHYELKkRQtPhzkMwIgkpPcWAHEobQPiZNsRvFUvyLGnKSxDCYKHkKFTjUDcTutwrGwSabUavWdysBtkWlNREBQgBSbwpIDLnuvizQXwWRqnlaSouqDoGDWNrGiwqlHHWpNFDiqUdXYSsqYELrkcHVOFZwakXvblZrbVFjSsxwWQoWGzHYrERQhphiIIdTzzoQWgsutRnWvyxJovWSROZGtnJNzgYTaPwPxKlkgtXVMtXaLwAQrYdHqRsDBREEdRghvjgiBTBByJdGBakYmgIYMKutBaOKYICndPkkbzWyBLfKDDOmKeKWethNhASXIjulZzMjMVRfLnUiqzOEnLmtNjZHQloZKMICphnwvWesHYXiJlCyXKqcjxMguPSbBuXWdyAPLISnXCHbEzdkXnTtAyAWdkRZnycwZBkqCMAaCzMqdoaDVjKjYBJkqQOVshwrxTuNZphuNiWCybLPxnZZYnGfalIGyJkGObMLvLepymDjLJrPBqGrdcilzlRVMmUSVBCnWjWGUgSVabXThTElMudmFWrHKsAfxixwVJkR', autoIncrement: true});
    var put_2 = objectStore_0.put({f0_k: '<null>'}, 'mPuKxJAPbkzdronHlHLKoapPZLYBqSblqztvYEJrsRCqvBusrrlkadKsyUbfGqflGcvSNIwwjnzyPeReBscpJMLfTlTjFSXPRNzLfzMdoNJIFVlIInRjzllMnmLPQEPIYGPsPOdRxFsXvvtUrbWDPDPAECo');
    var getAllKeys_1 = objectStore_0.getAllKeys();
    var put_3 = objectStore_2.put({f0_i: '<number>', f1_q: '<null>', f2_t: '<array>', f3_j: '<null>'}, 'rdAkAXkrhnph');
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('rdAkAXkrhnph', 'rdAkAXkrhnph', true, false);
        count_0 = objectStore_2.count(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_938', {autoIncrement: true});
    var clear_1 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1425 = db.transaction(['objectStore_938'], 'readonly', {durability:"strict"})
    var objectStore_938 = txn_1425.objectStore('objectStore_938');
    txn_1425.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1425.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1425.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1426 = db.transaction(['objectStore_936'], 'readonly', {durability:"relaxed"})
    var objectStore_936 = txn_1426.objectStore('objectStore_936');
    txn_1426.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1426.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1426.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1427 = db.transaction(['objectStore_937'], 'readonly', {durability:"relaxed"})
    var objectStore_937 = txn_1427.objectStore('objectStore_937');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.only('rdAkAXkrhnph');
        count_1 = objectStore_937.count(KeyRange_4);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('rdAkAXkrhnph', true);
        get_0 = objectStore_937.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.only('rdAkAXkrhnph');
        count_2 = objectStore_937.count(KeyRange_8);
    }
    catch (e){
    }

    var count_3 = objectStore_937.count();
    var getAll_0 = objectStore_937.getAll();
    var count_4 = objectStore_937.count();
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('rdAkAXkrhnph', 'rdAkAXkrhnph', false, true);
        get_1 = objectStore_937.get(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('rdAkAXkrhnph', 'rdAkAXkrhnph', false, false);
        get_2 = objectStore_937.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('rdAkAXkrhnph', 'rdAkAXkrhnph', false, true);
        getAllKeys_2 = objectStore_937.getAllKeys(KeyRange_14, 2622552642);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('rdAkAXkrhnph');
        getAllKeys_2 = objectStore_937.getAllKeys(KeyRange_15);
    }

    txn_1427.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1427.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1427.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1428 = db.transaction(['objectStore_935'], 'readonly', {durability:"default"})
    var objectStore_935 = txn_1428.objectStore('objectStore_935');
    var getAllKeys_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH', 'qIlQMZkLulCioKmYVsypcTzIydBlrYjyXhMJOxtEJHLbLTtYVSSrAJcinxYjzIYnPpXUeeASWKiQkRssmTJmbHdHxteiBIUKUZUxauGDFlbaMNSVymykCPYnKxhLYWMEAAohpwZMVnjMWsLSYoELILOKOXEfoCQYMGVxZnJWmLSAEXLHTUOkbMTOSOvfNIiCrzRUkodiFDQsaKRtpSYVDxqhNsWYpezrJHQqGIobVUMjPcqDzbaooyTqi', true, true);
        getAllKeys_3 = objectStore_935.getAllKeys(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH');
        getAllKeys_3 = objectStore_935.getAllKeys(KeyRange_17);
    }

    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('mPuKxJAPbkzdronHlHLKoapPZLYBqSblqztvYEJrsRCqvBusrrlkadKsyUbfGqflGcvSNIwwjnzyPeReBscpJMLfTlTjFSXPRNzLfzMdoNJIFVlIInRjzllMnmLPQEPIYGPsPOdRxFsXvvtUrbWDPDPAECo', 'mPuKxJAPbkzdronHlHLKoapPZLYBqSblqztvYEJrsRCqvBusrrlkadKsyUbfGqflGcvSNIwwjnzyPeReBscpJMLfTlTjFSXPRNzLfzMdoNJIFVlIInRjzllMnmLPQEPIYGPsPOdRxFsXvvtUrbWDPDPAECo', true, false);
        get_3 = objectStore_935.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.only('XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH');
        getAll_1 = objectStore_935.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('qIlQMZkLulCioKmYVsypcTzIydBlrYjyXhMJOxtEJHLbLTtYVSSrAJcinxYjzIYnPpXUeeASWKiQkRssmTJmbHdHxteiBIUKUZUxauGDFlbaMNSVymykCPYnKxhLYWMEAAohpwZMVnjMWsLSYoELILOKOXEfoCQYMGVxZnJWmLSAEXLHTUOkbMTOSOvfNIiCrzRUkodiFDQsaKRtpSYVDxqhNsWYpezrJHQqGIobVUMjPcqDzbaooyTqi');
        getAll_1 = objectStore_935.getAll(KeyRange_21);
    }

    var index_0 = objectStore_935.index('index_634');
    var count_5 = objectStore_935.count();
    var count_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('XcIkgHdKdmerCWqplJmCDvxQQTFYbRxrWYnODsxrcYytIjRCEsfpAtjLXJDYzLcapInDNTNYbaXjPcvcgDFHtNIqxVluNuGORnHEDeTBEdNqpcfaDPwqoFXmTbSAvryYopSrICYVZfulNMIUTzdrbgCVQAkngzCdXvjgxfjdOyGzxXHRSvEYqleJLCFGXjEsKuCASrYrlGIGngCpEumwAyuGNrxlaOwqkTxMdaIBgiGcuHViyeKLioMlhtpnjRYehbUyOXcpPPxpEQnxREplHlFJxkFKeTDaOEkRtWiuDvFxJhSwauiaOtrGCVUzOwRvmeYcjPJwXXJKnrfdUtLbPgtLBsmcJxepypzNUdUCKvvwCrpEXujocthxSWiQgUnISWctDizctSzezWHVnHLYUktxDJhMdadtsnjPqFjxdffHQVXnVpvGDkSuvmmCeoZcNUOkxkfWSlnVhvThOthBFTRgXxRmXINMILYdFVqyJftHNbYcmuyRUUTiJDGXyeCbrMQDDEHgmWlLmCKZFeQJagksukGUaCPWNmlvlJtCiJvdmxmMhipFmWEnprQuHvoEPKuWcpzpqNaZQAljlsIaYsFvECkvngFLrsAqFIrslDDshSedyVZDMLCxdHqxnrHcpULQgFWeofxGurXjWLozgElAoZhUncViQNxxRiILtzoLCKpeJvsfOugdFFnlWdmcsBcVufyHqujvzfQJXMKvHEPxjHoewhOQzXfvkFH', 'qIlQMZkLulCioKmYVsypcTzIydBlrYjyXhMJOxtEJHLbLTtYVSSrAJcinxYjzIYnPpXUeeASWKiQkRssmTJmbHdHxteiBIUKUZUxauGDFlbaMNSVymykCPYnKxhLYWMEAAohpwZMVnjMWsLSYoELILOKOXEfoCQYMGVxZnJWmLSAEXLHTUOkbMTOSOvfNIiCrzRUkodiFDQsaKRtpSYVDxqhNsWYpezrJHQqGIobVUMjPcqDzbaooyTqi', true, true);
        count_6 = objectStore_935.count(KeyRange_22);
    }
    catch (e){
    }

    var count_7 = objectStore_935.count();
    var count_8 = objectStore_935.count();
    var index_1 = objectStore_935.index('index_634');
    var count_9 = objectStore_935.count();
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.only('mPuKxJAPbkzdronHlHLKoapPZLYBqSblqztvYEJrsRCqvBusrrlkadKsyUbfGqflGcvSNIwwjnzyPeReBscpJMLfTlTjFSXPRNzLfzMdoNJIFVlIInRjzllMnmLPQEPIYGPsPOdRxFsXvvtUrbWDPDPAECo');
        get_4 = objectStore_935.get(KeyRange_24);
    }
    catch (e){
    }

    var count_10 = objectStore_935.count();
    txn_1428.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1428.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1428.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1429 = db.transaction(['objectStore_936', 'objectStore_938', 'objectStore_935'], 'readonly', {durability:"relaxed"})
    var objectStore_936 = txn_1429.objectStore('objectStore_936');
    txn_1429.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1429.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1429.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4412')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};