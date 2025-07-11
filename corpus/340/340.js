let db;
const openRequest = window.indexedDB.open('str_3173', 3672068143379778)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2033');
    db.deleteObjectStore('objectStore_2033')
    var objectStore_1 = db.createObjectStore('objectStore_2034', {autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_2035', {keypath: 'UZXFLszWoLqvQfIuCqlMRPqHRzrnwArrKaYZcLGjBoOkEdtfUMvCsDLrvZpMjAzVWYbhKfODoJTCuQvUTgDAfJAUzDXKKbpAQxDdFpNVMPooPCgRCnjQRzqcGqSMqdQvaTYaGVmdhXZCKHNCojZQhVdIPvJERLIHypMEwEchfSYVOOskCjsICIJesuLXevCrTIXBFbsllbNEOLAPBwqQJEHTUVYdgKMOXdRXeQnykpZChMmHXBNyFVTkOPoGmHHUrSXICYNTersUDJHtPXIrYWXnOHhrINajXnRLHSTTiJhbXEFzuJJKHBiUFTdXXmibyOgDEsGkWsVWHyenZNYGWtOjQodZuCyBRmNBstJybKMTbtsqVdYLFQLzKwqhjiBLQxvqPsYJcJFrERHfiWAAPLbFZaqDwAoxvYsNgYI', autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_2036', {keypath: 'jylnefzlvpHKWSPaDNXRTgsfQKwGvqaxXSEJiImFoDmkQkYnAFrLiBCywnaCpdOtXbRGwuLYqmIdbWPopyoaeGNvcWREYgktlRSkgTuQMJhnMQQQRBbABNYHdsLuWVXYWwAsgRUetVgGiSwKEyMKVkaDLlBhcaVPOhcsXrrdMpPjXkZlYLHnPSNGIDGQjTuCTVpcAQAiQsQaIYGYHkveInAiDeowIWeNmTpNgpBFKdjhkSESgXUUTGGNdHjjeVxbbLREyFIcukhSRMzlOgcOjK'});
    var objectStore_4 = db.createObjectStore('objectStore_2037', {keypath: 'qhCbgrUUjFBeWhzDeLOBXNmcbO'});
    var clear_0 = objectStore_3.clear();
    var clear_1 = objectStore_1.clear();
    var add_0 = objectStore_3.add({f0_g: '<array>', f1_x: '<array>', f2_z: '<boolean>', f3_l: '<object>', f4_m: '<null>', f5_z: '<string>', f6_y: '<number>'}, 'rPtOozPyuNSaJgOpfDdMBywKmYdXcBCfipTcUTukuwUCLReZzCYeHyWbUoZrAOLWlQrKDUFgBKwgFqMZLXaBhPfEsZhKaVLBnZKMkdUTRKZjTDmkzRrkXTDhYbFaJpECJdeffKagsrhbcIMKfvFCtDWhSeofQHGJjrkZbiPfGmqFrzCvnSXYOZmwqQMtmCifsuIRfWLCfpdnegOzjagtPjesUSDPmZhqWoDoEPEPqVxOPXWmEnoucqSGxhDCqrqeMIspYeNFxVMECTcBVGykNbStULJeGWZJtecGSJOdUGZPCUQJFVhgsvEtyPqmnODbCJqKsnvLROwtHMErhrBdKtyvuDJqkZwnuoPqRXRGDyGfdVodbDFPqdvMuAepOheloGTlFPMAEQuaRKPkJystuQfjMJSwUwVjFcTfpUgoDpuBUCYrDAMAQYPVdbwJwSyCAf');
    var put_0 = objectStore_1.put({f0_m: '<null>'}, 'CTdYOkxJVlwTrlnERtdZmqxLphkLOksYvfKcbssyUslycFqeRfATBEpECJQfJARrAIfuFbPPzQMVAWRpdZMtPWuCtTggOfYPYvzxAlxIYHMzcPRddLTrIcQKKTPBcXFAFBTrkFnJhLWxdLInWdVEPRaXiXCifmeRdRDrzhZsiBzrDbfiPpQjxMMLgGPaNkioDtXlnFHnhxiyTyLqizBDTFioDjQWzzmywtkzlstOlJEzIUsaozoOCmNLryzMxwUlXSrVAVLMVaXbnsLAaLDdflRpqkSGopRKJozbxioJFsCXrXTfemvTFhiPiRNMLKpFnpZyPRswboHZFHMHcEFyiCSSsvjSMYIeysSdcOGqctQBvLmfWUPrLaBcXwcQSQErpddHhkBXkGbbYDHxBvWNXzWHfNJGFnhvsKZLoHQCMCbORGVJBjJgHIZTrsTubeylDSfisjKATkmbuorhbgXuSCIUeCSsWKCMfiXoRHPmlhVzeSlGwrSJsigAChpZLRDxcgIOluXkWlXmyFVqCSarCdaLsPxRdhGtImxpqueMFNfYXEFxFimZfycIXXDHLwpDoNccfCMFYsPEhtHclBAIifewQVqbcWVIApYgJXvjMHXpMBEozcWeaZWONzRNvuhxfmKIxZlnRQxUlBdilNfkiLsNSEcsQaMJvmozqQvFtYRQoujfbipwqdzEGRFJGOKqrGXakVqtAdvOvdFpNreHoNOjAKeZUXDajdcAJrMAQkJriUFVPDTphTlOHbsRFEFRyFZcTzvcVYSwxWTlHpLTFmhsUkgfLChqTWrzJaD');
    var objectStore_5 = db.createObjectStore('objectStore_2038');
    var objectStore_6 = db.createObjectStore('objectStore_2039', {autoIncrement: true});
    var put_1 = objectStore_1.put({f0_i: '<number>', f1_g: '<null>', f2_r: '<array>', f3_z: '<array>', f4_t: '<number>', f5_o: '<null>'}, 'BirYQHPvdmrGYPNUxssDccWcPSIxgfBwjhYYHxaBnQyBXZcPKzJZBWoorntKDsuFPNXwousYeLxLBjKXrwTYwsIdIiWVebQKqoTZykqbYWnkoMkZqFRhjYcxpkgyfhggPbqPExlvrmtwyfNHeSBWFybfaKuxZZikzxImMRsxZhYWVyYHqejEfDIePULipPoFdkAohwaxcNmfzJFugPFCFDWHQXgNhCicQdrNzpbLMLxMZTkYFiSmSOKGUktheSbBLnScYHBFyqBHoFgpCYNqxDankZjJfcVqjMNcTalOGFvqYwqCPDBGGhCZypiaBafiVFbTGMHiscwrNROSvAbapbnWzZFcxqcZmAVnjKSethsBejHbcxYUEOUnCHEwIBxzAqUWTiSkiceWgrCjUyBcbaYf');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3030 = db.transaction(['objectStore_2034'], 'readwrite', {durability:"default"})
    var objectStore_2034 = txn_3030.objectStore('objectStore_2034');
    var count_0 = objectStore_2034.count();
    var add_1 = objectStore_2034.add({f0_k: '<null>'}, 'cMwpiDIvoNAOLxqVRejRplemfLJbneEwHtrhKxvYiumoOMjhQuAixdourFwUaHnUKvyKAxhDkkVDvBGctSgkLSCfqkONDhxldbOtvLUDshOBbUGNJtmiaZHmgqWmhksrxbOYYUfHvZoGigMLSZsubfiGYJzpmPNsgGCybXSQmYGizdknWkyPVBQPJigEIyCXDmIIoMuCQThZfjNzGBtIqsUDqSZGxFTCCFyVPEeGxlTFfVYpyuyiDinYfPdcMNoPUQclPcDiQnnOXvBAEsgcSauUhBKlgktKViWstFZwYjwTglOnMvCknwbdzLrYhMvucMPeTxhuor');
    var put_2 = objectStore_2034.put({f0_s: '<array>', f1_d: '<null>', f2_g: '<object>', f3_r: '<object>'}, 'VcuJsb');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.only('VcuJsb');
        delete_0 = objectStore_2034.delete(KeyRange_0);
    }
    catch (e){
    }

    txn_3030.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3030.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3030.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3031 = db.transaction(['objectStore_2037', 'objectStore_2036'], 'readonly', {durability:"relaxed"})
    var objectStore_2037 = txn_3031.objectStore('objectStore_2037');
    txn_3031.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3031.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3031.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3032 = db.transaction(['objectStore_2038', 'objectStore_2035'], 'readonly', {durability:"default"})
    var objectStore_2038 = txn_3032.objectStore('objectStore_2038');
    txn_3032.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3032.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3032.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3033 = db.transaction(['objectStore_2034'], 'readwrite', {durability:"relaxed"})
    var objectStore_2034 = txn_3033.objectStore('objectStore_2034');
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('cMwpiDIvoNAOLxqVRejRplemfLJbneEwHtrhKxvYiumoOMjhQuAixdourFwUaHnUKvyKAxhDkkVDvBGctSgkLSCfqkONDhxldbOtvLUDshOBbUGNJtmiaZHmgqWmhksrxbOYYUfHvZoGigMLSZsubfiGYJzpmPNsgGCybXSQmYGizdknWkyPVBQPJigEIyCXDmIIoMuCQThZfjNzGBtIqsUDqSZGxFTCCFyVPEeGxlTFfVYpyuyiDinYfPdcMNoPUQclPcDiQnnOXvBAEsgcSauUhBKlgktKViWstFZwYjwTglOnMvCknwbdzLrYhMvucMPeTxhuor', 'VcuJsb', true, false);
        count_1 = objectStore_2034.count(KeyRange_2);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('VcuJsb', false);
        count_2 = objectStore_2034.count(KeyRange_4);
    }
    catch (e){
    }

    var put_3 = objectStore_2034.put({f0_i: '<number>', f1_b: '<number>', f2_j: '<string>', f3_y: '<array>'}, 'uNsHNyNcBXUjpAOiNclyVwpWllkechGbiHpRWNaBgGUAgXOzdjYWrooGOwumyydHryZKbPmWMDtBLWRQMESmqmVvxLEmHAPetvYXrpFlGOfBttZCOZhqdkaVImgkKKgAdgqIxEPvoMbeahNJuhsoHOxhfqMLCrMzSehFaHWKYsxPfvWnZAFfDJdqtyTEWtGEoKMAHjjlcxlGfpMEysXkwhNQasLTDuMwTAZuvdoLTJjXPhiXAiwqniFRlajLpTGqcUVpsfNhMRtLGTOjtwxFRvVveFDDXZQeQePBmMpVoFDrYeILzWhCHUllmUCxYfwdKzIprYHIWFuwdZGvnPYMUrJBtkHnTsASBKeLpxFziWRnlzoGZznxMfMKtYKfWfnnyAAQvBxhwCdwehBrRTBXXiRAHngncQMWoPrXuNMEuZmKzXhNEUTLvvDzFFWYQTBIdPfgYNbHLPDxKRvMfLzpUaxvzvzGQhMJEvFgyyRYDvObaMcxExMRZkqjXWWQQcqLsfobuXONYgmtaYZeNLNWobINrQWwvTffUcyFqTaZNYWUkDceYNVfFJgEAUJEVISIQIqOsmwwuTYIHZDjioDdJEfKbqLAKXXdMYqDPCtlIWEXAiAPVzkzIPCnbWiuNGgfHoYkBTMtgYdugwWVJozWZZZklrpkQlNdQSqzPqDocvCLkYAFeCEqmpfdnJjwCWKEfoquwsQokGzjbTodQogjINvFQbILyWabqXjHVdQexdBuiyupgiOdYcuBejvjItLpeqlJEeiDmWdRyxmWNxbNuhdruyMdloAaYDrrjyKSLVXLNtCDZSqzpXiJbbnFXnrZrYzZBzuRXgPvdCpUSnEJWHdhtJtCCqaVWIwwBkAFWwBGZmzEkkqinWRtGduIdGqvxUiSgIDHwARCGuTqLloqGUVziteIuEcnFRpwEgsRUcfALwGUfxtVpNJCMWYvhSmcweXdYTMkGNErjNYnvHZ');
    var add_2 = objectStore_2034.add({f0_u: '<object>', f1_j: '<array>', f2_j: '<null>', f3_z: '<array>', f4_e: '<object>', f5_b: '<array>', f6_z: '<array>', f7_p: '<number>', f8_j: '<string>'}, 'nMzbjOioNwfxPkTEvshBOwiLJCBSrQrWtocDnVOHGMyhzbFewDVllCqfiRPXjzMeDEszHbvehudLUXqMYsAFHflyYlGVLXSPUBReMVMOxTkkIAMQoaLOAGGsqXtPvtKsZDYUBUBgZbEjYgRndQpdKqIqXJotbkPlKWDMONZYMutmaQBbYcrpSFrgVmOdcgrDmEhwuyGIWoTnWNesmFbddNbBLYLalUKerJbLxgWDUOmxUNRpYuOZLJAWlcTEORLfEtvoKsinSmCSrcpRlUBvSnhuklQOTcRXvQZCjBuctuurAUBVPqaxVHfbKQdJNLYWeelBcvfXPWflaToMcRPdouQUENbIwDKtVFwvMgYcRqWiOERLXYLjWJMPeBTLQgXVNIUWTQeheCNXpMorjONBRAucvzEufarTJQiUPlcfuyBVTbmtlEYSPGXODnTHNYDaSOlsMlwXMgjqulCHZZdKaafuHqOWJeThkaeuszKecpZeolIiutujojgbVPPHBSCbWYSusXfutihRrtVhrgJwgFzQpKvXyPPPsAyYQzGxgOtazznoyXGADrkzSvUoVMqGaUWqSSBaAjXXgDcELrAItJREgAboAHFXjxxBFxPSkKLAyjrXBKUixJhQgzfynvTybFcWVSwFCfFVNsNpyJmQNmhixBZMXwABoZELRVITFjVulsxnAIASimhuLWINqCPqdLqmReZCVmttuZcWsGUObULDJtKNEOeAjX');
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('nMzbjOioNwfxPkTEvshBOwiLJCBSrQrWtocDnVOHGMyhzbFewDVllCqfiRPXjzMeDEszHbvehudLUXqMYsAFHflyYlGVLXSPUBReMVMOxTkkIAMQoaLOAGGsqXtPvtKsZDYUBUBgZbEjYgRndQpdKqIqXJotbkPlKWDMONZYMutmaQBbYcrpSFrgVmOdcgrDmEhwuyGIWoTnWNesmFbddNbBLYLalUKerJbLxgWDUOmxUNRpYuOZLJAWlcTEORLfEtvoKsinSmCSrcpRlUBvSnhuklQOTcRXvQZCjBuctuurAUBVPqaxVHfbKQdJNLYWeelBcvfXPWflaToMcRPdouQUENbIwDKtVFwvMgYcRqWiOERLXYLjWJMPeBTLQgXVNIUWTQeheCNXpMorjONBRAucvzEufarTJQiUPlcfuyBVTbmtlEYSPGXODnTHNYDaSOlsMlwXMgjqulCHZZdKaafuHqOWJeThkaeuszKecpZeolIiutujojgbVPPHBSCbWYSusXfutihRrtVhrgJwgFzQpKvXyPPPsAyYQzGxgOtazznoyXGADrkzSvUoVMqGaUWqSSBaAjXXgDcELrAItJREgAboAHFXjxxBFxPSkKLAyjrXBKUixJhQgzfynvTybFcWVSwFCfFVNsNpyJmQNmhixBZMXwABoZELRVITFjVulsxnAIASimhuLWINqCPqdLqmReZCVmttuZcWsGUObULDJtKNEOeAjX', 'cMwpiDIvoNAOLxqVRejRplemfLJbneEwHtrhKxvYiumoOMjhQuAixdourFwUaHnUKvyKAxhDkkVDvBGctSgkLSCfqkONDhxldbOtvLUDshOBbUGNJtmiaZHmgqWmhksrxbOYYUfHvZoGigMLSZsubfiGYJzpmPNsgGCybXSQmYGizdknWkyPVBQPJigEIyCXDmIIoMuCQThZfjNzGBtIqsUDqSZGxFTCCFyVPEeGxlTFfVYpyuyiDinYfPdcMNoPUQclPcDiQnnOXvBAEsgcSauUhBKlgktKViWstFZwYjwTglOnMvCknwbdzLrYhMvucMPeTxhuor', false, false);
        get_0 = objectStore_2034.get(KeyRange_6);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('uNsHNyNcBXUjpAOiNclyVwpWllkechGbiHpRWNaBgGUAgXOzdjYWrooGOwumyydHryZKbPmWMDtBLWRQMESmqmVvxLEmHAPetvYXrpFlGOfBttZCOZhqdkaVImgkKKgAdgqIxEPvoMbeahNJuhsoHOxhfqMLCrMzSehFaHWKYsxPfvWnZAFfDJdqtyTEWtGEoKMAHjjlcxlGfpMEysXkwhNQasLTDuMwTAZuvdoLTJjXPhiXAiwqniFRlajLpTGqcUVpsfNhMRtLGTOjtwxFRvVveFDDXZQeQePBmMpVoFDrYeILzWhCHUllmUCxYfwdKzIprYHIWFuwdZGvnPYMUrJBtkHnTsASBKeLpxFziWRnlzoGZznxMfMKtYKfWfnnyAAQvBxhwCdwehBrRTBXXiRAHngncQMWoPrXuNMEuZmKzXhNEUTLvvDzFFWYQTBIdPfgYNbHLPDxKRvMfLzpUaxvzvzGQhMJEvFgyyRYDvObaMcxExMRZkqjXWWQQcqLsfobuXONYgmtaYZeNLNWobINrQWwvTffUcyFqTaZNYWUkDceYNVfFJgEAUJEVISIQIqOsmwwuTYIHZDjioDdJEfKbqLAKXXdMYqDPCtlIWEXAiAPVzkzIPCnbWiuNGgfHoYkBTMtgYdugwWVJozWZZZklrpkQlNdQSqzPqDocvCLkYAFeCEqmpfdnJjwCWKEfoquwsQokGzjbTodQogjINvFQbILyWabqXjHVdQexdBuiyupgiOdYcuBejvjItLpeqlJEeiDmWdRyxmWNxbNuhdruyMdloAaYDrrjyKSLVXLNtCDZSqzpXiJbbnFXnrZrYzZBzuRXgPvdCpUSnEJWHdhtJtCCqaVWIwwBkAFWwBGZmzEkkqinWRtGduIdGqvxUiSgIDHwARCGuTqLloqGUVziteIuEcnFRpwEgsRUcfALwGUfxtVpNJCMWYvhSmcweXdYTMkGNErjNYnvHZ', 'nMzbjOioNwfxPkTEvshBOwiLJCBSrQrWtocDnVOHGMyhzbFewDVllCqfiRPXjzMeDEszHbvehudLUXqMYsAFHflyYlGVLXSPUBReMVMOxTkkIAMQoaLOAGGsqXtPvtKsZDYUBUBgZbEjYgRndQpdKqIqXJotbkPlKWDMONZYMutmaQBbYcrpSFrgVmOdcgrDmEhwuyGIWoTnWNesmFbddNbBLYLalUKerJbLxgWDUOmxUNRpYuOZLJAWlcTEORLfEtvoKsinSmCSrcpRlUBvSnhuklQOTcRXvQZCjBuctuurAUBVPqaxVHfbKQdJNLYWeelBcvfXPWflaToMcRPdouQUENbIwDKtVFwvMgYcRqWiOERLXYLjWJMPeBTLQgXVNIUWTQeheCNXpMorjONBRAucvzEufarTJQiUPlcfuyBVTbmtlEYSPGXODnTHNYDaSOlsMlwXMgjqulCHZZdKaafuHqOWJeThkaeuszKecpZeolIiutujojgbVPPHBSCbWYSusXfutihRrtVhrgJwgFzQpKvXyPPPsAyYQzGxgOtazznoyXGADrkzSvUoVMqGaUWqSSBaAjXXgDcELrAItJREgAboAHFXjxxBFxPSkKLAyjrXBKUixJhQgzfynvTybFcWVSwFCfFVNsNpyJmQNmhixBZMXwABoZELRVITFjVulsxnAIASimhuLWINqCPqdLqmReZCVmttuZcWsGUObULDJtKNEOeAjX', true, true);
        delete_1 = objectStore_2034.delete(KeyRange_8);
    }
    catch (e){
    }

    var clear_2 = objectStore_2034.clear();
    var delete_2;
    try{
        KeyRange_10 = IDBKeyRange.only('CTdYOkxJVlwTrlnERtdZmqxLphkLOksYvfKcbssyUslycFqeRfATBEpECJQfJARrAIfuFbPPzQMVAWRpdZMtPWuCtTggOfYPYvzxAlxIYHMzcPRddLTrIcQKKTPBcXFAFBTrkFnJhLWxdLInWdVEPRaXiXCifmeRdRDrzhZsiBzrDbfiPpQjxMMLgGPaNkioDtXlnFHnhxiyTyLqizBDTFioDjQWzzmywtkzlstOlJEzIUsaozoOCmNLryzMxwUlXSrVAVLMVaXbnsLAaLDdflRpqkSGopRKJozbxioJFsCXrXTfemvTFhiPiRNMLKpFnpZyPRswboHZFHMHcEFyiCSSsvjSMYIeysSdcOGqctQBvLmfWUPrLaBcXwcQSQErpddHhkBXkGbbYDHxBvWNXzWHfNJGFnhvsKZLoHQCMCbORGVJBjJgHIZTrsTubeylDSfisjKATkmbuorhbgXuSCIUeCSsWKCMfiXoRHPmlhVzeSlGwrSJsigAChpZLRDxcgIOluXkWlXmyFVqCSarCdaLsPxRdhGtImxpqueMFNfYXEFxFimZfycIXXDHLwpDoNccfCMFYsPEhtHclBAIifewQVqbcWVIApYgJXvjMHXpMBEozcWeaZWONzRNvuhxfmKIxZlnRQxUlBdilNfkiLsNSEcsQaMJvmozqQvFtYRQoujfbipwqdzEGRFJGOKqrGXakVqtAdvOvdFpNreHoNOjAKeZUXDajdcAJrMAQkJriUFVPDTphTlOHbsRFEFRyFZcTzvcVYSwxWTlHpLTFmhsUkgfLChqTWrzJaD');
        delete_2 = objectStore_2034.delete(KeyRange_10);
    }
    catch (e){
    }

    var clear_3 = objectStore_2034.clear();
    var clear_4 = objectStore_2034.clear();
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('CTdYOkxJVlwTrlnERtdZmqxLphkLOksYvfKcbssyUslycFqeRfATBEpECJQfJARrAIfuFbPPzQMVAWRpdZMtPWuCtTggOfYPYvzxAlxIYHMzcPRddLTrIcQKKTPBcXFAFBTrkFnJhLWxdLInWdVEPRaXiXCifmeRdRDrzhZsiBzrDbfiPpQjxMMLgGPaNkioDtXlnFHnhxiyTyLqizBDTFioDjQWzzmywtkzlstOlJEzIUsaozoOCmNLryzMxwUlXSrVAVLMVaXbnsLAaLDdflRpqkSGopRKJozbxioJFsCXrXTfemvTFhiPiRNMLKpFnpZyPRswboHZFHMHcEFyiCSSsvjSMYIeysSdcOGqctQBvLmfWUPrLaBcXwcQSQErpddHhkBXkGbbYDHxBvWNXzWHfNJGFnhvsKZLoHQCMCbORGVJBjJgHIZTrsTubeylDSfisjKATkmbuorhbgXuSCIUeCSsWKCMfiXoRHPmlhVzeSlGwrSJsigAChpZLRDxcgIOluXkWlXmyFVqCSarCdaLsPxRdhGtImxpqueMFNfYXEFxFimZfycIXXDHLwpDoNccfCMFYsPEhtHclBAIifewQVqbcWVIApYgJXvjMHXpMBEozcWeaZWONzRNvuhxfmKIxZlnRQxUlBdilNfkiLsNSEcsQaMJvmozqQvFtYRQoujfbipwqdzEGRFJGOKqrGXakVqtAdvOvdFpNreHoNOjAKeZUXDajdcAJrMAQkJriUFVPDTphTlOHbsRFEFRyFZcTzvcVYSwxWTlHpLTFmhsUkgfLChqTWrzJaD', 'BirYQHPvdmrGYPNUxssDccWcPSIxgfBwjhYYHxaBnQyBXZcPKzJZBWoorntKDsuFPNXwousYeLxLBjKXrwTYwsIdIiWVebQKqoTZykqbYWnkoMkZqFRhjYcxpkgyfhggPbqPExlvrmtwyfNHeSBWFybfaKuxZZikzxImMRsxZhYWVyYHqejEfDIePULipPoFdkAohwaxcNmfzJFugPFCFDWHQXgNhCicQdrNzpbLMLxMZTkYFiSmSOKGUktheSbBLnScYHBFyqBHoFgpCYNqxDankZjJfcVqjMNcTalOGFvqYwqCPDBGGhCZypiaBafiVFbTGMHiscwrNROSvAbapbnWzZFcxqcZmAVnjKSethsBejHbcxYUEOUnCHEwIBxzAqUWTiSkiceWgrCjUyBcbaYf', true, true);
        get_1 = objectStore_2034.get(KeyRange_12);
    }
    catch (e){
    }

    txn_3033.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3033.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3033.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3034 = db.transaction(['objectStore_2039'], 'readonly', {durability:"strict"})
    var objectStore_2039 = txn_3034.objectStore('objectStore_2039');
    txn_3034.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3034.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3034.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2966')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};