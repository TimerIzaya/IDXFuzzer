let db;
const openRequest = window.indexedDB.open('str_5189', 4015151410134509)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4301', {keypath: 'XXphZFbzAiouyipcZyOiUfoeiWifrBkNZLhmmIdrKEuZRXRivzMSFTZEnlkSfLPrlMvVNFsrjySLznEsCydgmZtEqSgxUjvCeeVoixKPDBFncWMoYWCSpNOoTYVvvgPgkhfxCoNxLOEMADRBVpBurdemKtNCcoSuGhVUQtrxyNkBOdqeHrvsAVXlhlAPKACPLGGFidxnWHpqCIllCWLVJHpoWTPBHxWjQJcbJxbTpcjuiFFcrLNcuGpOKwGmqutZioYgJAlAqpMpLuctFQMMHW.QrqMxHSvUxhrFDpnNbbWeCurGMeBKrWdKmDgJQcMbvZToLeEYenurpDXSbBhobSTJivHxAhUkWnqYHjYLnSQkYXzXsOjEhZFJRPAgxUInmVCNjzbnHOHnZGgIHZAVfpfnGTrORzMIshwhfxcfYJRNnnRSddwvQyceLaeoYjjwKHwetcmuYwlcemsLvDhOPJubnARJkcMPzbIYivIEIHZzWxtlOLeUFrKVxyleHlqzywufhybGLfnxWkwnLhaByiWJYRVvfkxVcsWFPdgPBqxpQrVaHFBKQkPULfWgAUTHomDWuMnagKHTPzwsmqWOrFMbEzrWxJgkVYCzDTURsaIxqtyXEbozoIcpYcZvYpMGDQXhRUOCjcmzQKyhZJNaUNSXiWpgVBAJOLtyTWmaaLZAhsgjzLJnUgbnFaoesJDYglwCGKeIXNThIzFKIACUaXbEAwwkwWdyUNhgJRyLTKVroYEIKgtOjHtsXDVCokqcTAncotuQEnomWMhDUMhUZEJraJiiPqfcRoTjaLtHXVhffhuRHFZbtwZZhoiYepTEWHmuKzEEEEgTatEETvcyjMrnDvrWkOHKwviieoOaMlREhBNesgFDDULCzfqRCaXOtXzQHSZpzkmbDvIjIstizDqUXrhGtXFbtZnyWniUOjqcMjRpalWCTUWpMmVFnOElJTObYKpjcaurgDcnefqMskSRmKqjkZGMkADsSgwxHSqzvHYaqdVteprcZohsQHaSZqqEVbCdvTgALAtFsrULGhm.IydmxCykQQKJyazQlMvHfHbBakNvMDXhQYotWEGNuvNGiQDibJhkZWxVoKLPzgQPMMwkySqzjkqgNuhmdYoYEWGkfXjawNAHwPNSONEQvmpcrqCzBKfUjYInbBxifVGRKYmsLWZyjlqhlaWsfExyYcjRKhLnDcNQxXWkywudpxgplaKrqwrpLsgPGCbWBfjRHCdesAeIJUGpaEPqwUtOFbsXJqnhXPuScMNTLcEEWONgFaAMMBzKycFgYncjivFDJTPqSIDPHCNzuWAEcLhrJVLoYotMJmTjTiTQrxgJNVWEUyJHzyWvzbzesJERfqVpxjpxLeSFxfveWbYjCpFPjmSkjxFSXyreShumHlXRczUbxTZEqtgmEIEyZSGDXOzmPqBBaeIFpbCdlStOUuGgBLpIfxDmbHrjNzwkdLzYTThsZkQuhHCZFSLGXFWnoTkFB.FDWoHSrrCscCzKBLpXQKHfDCfCqtcJEttTzBnCkChKOTDzFuElJcKdmIglzWEpWMCXkLmRlMofQjxPNJSnfOluOdLfSxefZxHsYmVJTWYjLiJjuBydiTKQNEeghBfkHdzKGnbPCrOjEZSgrgQMcizHBabkBZPfwtQrlZZHHljwTFhfyuaeQxaueWEIefQtofOnMbrDizSYSveGRrndRUZEuNWMqmIcPsjbQazJwQruyeSLlVLxHPolwYARJasFtiNqIZsswgoVLlkZGgwrqlJbotbgHkkAOBFpObSKoIQgneYQAyBuFatVftGtDpfmdktPMbEvfSMyNdRhknWeYYERprnyGtXhtJalvahrDsgFFOURdCZKjtEJwWCrVFMFDWjazZDEUzUDBpYOLTEDovSCKBUuQBabqXfaMDhNWUJRqbLjjWFcsnGddPpPKGEGqHAkkqenqjPSEyWaglQnOAGLGuRhQCZdGAPiaMHSCdtwQQMBGsRthojZnTohFILvDvSWzaXACwhGDFUbbOcwCFJJMCnEFOZCMhDFVwbzbYfNmckuRiVGWJzifohqyshniUFmebRoiwZtshZxpDkcuMZRqbwHbWMcrWWJXqWXZcLsNBxRIcodKRYVUyHDdQrQakiXOOSnSxGxMzjHpQKVflKCONJdHpnaKLHSWWretATUgbTDJnAlopfCdEhTScSlsEVGhKZMQuozWYbCzHvCrwizynqDBcUxYTgLLsUoRnFsLvzlycIuBZeseiYJjjeTngsQTvvNxFKicIRRYpBgDBlhMLTdynmgvwZDIFNYPPVftMjPhbFCLJaZuDEsTgzRjnSOSdCfBjXkbzArKrejIkfVZNGtQYHqyNiIuUDwlzQtsMGlBuZPztyXriZlNSOiLQOgwQlWu.FpLUweBtOqdoMGwsEMGotjRjetbcgpzebejdUBGrVIrKGebShTueXUJLUmjSqzhEcYFDEUHcFysUCetJQBGzdPOZNcqFnjLXLMajWTpFpfoZbrHSeVSeCtGYSevUtSNiodhPTgedkwNQSeWkzOwsQBoKlsiQjNRJimItRVTEOsndjstXSvLpohArvNTYMYfrmgLydXufoLOHtqxkDVkYxOLLplIlCnlPcduFZGesrNPSNDewIGxPkAMQePmUO.iYatyZwJKrRviAFTPrWModBHdvyfzqRQnXDRxxbhObEXmUuRIqSOeJwqnCWEEHvDkqhRDsxvaMZisMMbXTrZbKJLleOJAYwbwLhPnlNhtZxkKMgaauJzFGDdnTMPHUYGWLunoADljnnnniEnPIATTNSkXnJKRTRWgpLzMVXRBExpHXKkNvgTRMOkAREpZkhkayNaLBbPNyDkebtyfrwzysBJRUjrdVTBOknoTIZALpZzBvLdgHufkjqJiLvDnUzuTHGQCQvQeXvuylGFJrPlhaNnrydQiTWzqXmaddjxxcKsbkCfFrEhxxXZWmGWxLBOxkLEpzSGVhWUqsNZgkPmSlYVAWEgeWVBqFIzhqOWhCvoiwibWGzUZAlNNjHAUJopupJNTSZqNnuNIAeccQUdMNmQCHdPLRQBamwPgpvYwIzfwYvIaZEsWtxdQVXVZlDWaDHszPdgXmKEurlNUGlgvgQ.mguNyFgXQZJcHhoRiJpsbqRBVKRfdAVPRUowzDlgFzcgcXBIsQyYlwNLzExWuoiHFOwEzVqenbOJpRRKfVBMLOjmzJdVZVMpmFQxZLwxaVDBQvdvuyNgcYyQbWZsDwybQfYBQMPFyqOiPlhsPOptjXNCvddNGyGiWmGiAFZppscAXSbzuNWKCSlmDQTUvCCWhpaGLShWmNrQUUaRCkWtUkIEmcIYpWjMnwIIqvGnEyiYdylehJtLXNZLRxGePCVdGoBpXjDAoodGqQvXDimciJRaKkRhsgDEvjjJmCILhskrXkbrVthaRPuUKTgkMFVZnwrWwlxdVryOrRjoxzInprDbrFElOrFcfwREOnpyBFWdOIOzqAAaWnnRnJzvWKfvCtnbtCtWyAVkpxmTjCnEKdViagusfyUjHumyWtHLxfSSWCzNuPWbQKGUznJFBVAfiy.rjEuUSfxKpeDVHaXpitiSvMFNHAotaZgFjQTsoteKyvVNHvBaNvXKBZptLoAdLKMOImVXBkprbkVswLbMmHhIEtLMqZeITWtNdxUuYjuRObwXQPwGScunPxIMDfcXbgQtUkGTotZpNiVzdsImNTmzoWxEaTuwxKdgQyRzicXgEOzUZVYlYWqwMuIqbuPgRwlYuWGhwGEiWaOrFhlVVIAWxCbhXzhLTUyjKqeIdmhcJDjXCRVhwMOLDAnvpUXifpgtanzzdomBQEYfSTPOcaUimeQFGqBzSmJUgLSQKHxgAbXbayLpYDrJWBbPpHZMMOUIkZKWdHYRoMpToAhwRUHGrqbkLkVvYkKVIwVISxtvWJXcCIldrBmqFecQoABkEibRuVnuPrlJFCMEGRgIsUxMeSdqFYDTovROalcxqfjMxDHGGpWLiwIVFRsSzzKcQWXrSqGXvVKPipOYhuUjlcxjGVdxSwiCQEtPOSHvbVqUYYZAfIIzMvxfkwrNOGVftOgdUzcfWHhFeJYTPBipFOwNqKtEItuoZtLHNYYvWEDKXBwDiTVJUlNdFpAyaQdHSnOoONoNkbNCymjgzipkaanKeluteIjSCXhZcregZsrxeaIVRhiUleKKmX'});
    var index_2896 = objectStore_0.createIndex('index_2896', 'test', {unique: true});
    var index_2897 = objectStore_0.createIndex('index_2897', 'test', {unique: true, multiEntry: true});
    var index_0 = objectStore_0.index('index_2896');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_4302');
    var index_2898 = objectStore_1.createIndex('index_2898', 'test', {unique: false});
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_1.clear();
    objectStore_0.deleteIndex('index_2896')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6485 = db.transaction(['objectStore_4302'], 'readonly', {durability:"relaxed"})
    var objectStore_4302 = txn_6485.objectStore('objectStore_4302');
    txn_6485.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6485.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6485.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6486 = db.transaction(['objectStore_4302', 'objectStore_4301'], 'readwrite', {durability:"strict"})
    var objectStore_4301 = txn_6486.objectStore('objectStore_4301');
    var clear_4 = objectStore_4301.clear();
    var put_0 = objectStore_4301.put({f0_q: '<null>', f1_x: '<object>', f2_p: '<array>', f3_a: '<null>', f4_e: '<string>', f5_o: '<boolean>', f6_o: '<null>', f7_c: '<number>', f8_t: '<array>'}, 'jXHBOEtbCGSRdLfeEBQhPErFqWUy');
    var clear_5 = objectStore_4301.clear();
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', false);
        count_0 = objectStore_4301.count(KeyRange_0);
    }
    catch (e){
    }

    txn_6486.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6486.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6486.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6487 = db.transaction(['objectStore_4301'], 'readonly', {durability:"default"})
    var objectStore_4301 = txn_6487.objectStore('objectStore_4301');
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', 'jXHBOEtbCGSRdLfeEBQhPErFqWUy', true, true);
        count_1 = objectStore_4301.count(KeyRange_2);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('jXHBOEtbCGSRdLfeEBQhPErFqWUy');
        get_0 = objectStore_4301.get(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_4301.getAll(653274229);
    var count_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', 'jXHBOEtbCGSRdLfeEBQhPErFqWUy', false, true);
        count_2 = objectStore_4301.count(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', 'jXHBOEtbCGSRdLfeEBQhPErFqWUy', true, false);
        get_1 = objectStore_4301.get(KeyRange_8);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', 'jXHBOEtbCGSRdLfeEBQhPErFqWUy', false, false);
        count_3 = objectStore_4301.count(KeyRange_10);
    }
    catch (e){
    }

    var count_4 = objectStore_4301.count();
    var getAllKeys_0 = objectStore_4301.getAllKeys(3823983192);
    var getAllKeys_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('jXHBOEtbCGSRdLfeEBQhPErFqWUy', 'jXHBOEtbCGSRdLfeEBQhPErFqWUy', true, true);
        getAllKeys_1 = objectStore_4301.getAllKeys(KeyRange_12, 3627381024);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('jXHBOEtbCGSRdLfeEBQhPErFqWUy');
        getAllKeys_1 = objectStore_4301.getAllKeys(KeyRange_13);
    }

    txn_6487.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6487.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6487.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6488 = db.transaction(['objectStore_4302'], 'readonly', {durability:"default"})
    var objectStore_4302 = txn_6488.objectStore('objectStore_4302');
    txn_6488.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6488.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6488.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6489 = db.transaction(['objectStore_4302'], 'readonly', {durability:"strict"})
    var objectStore_4302 = txn_6489.objectStore('objectStore_4302');
    txn_6489.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6489.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6489.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2471')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};