let db;
const openRequest = window.indexedDB.open('str_5021', 3833393322670266)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1968', {autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_m: '<string>', f1_i: '<string>', f2_v: '<null>', f3_y: '<null>', f4_c: '<array>', f5_f: '<boolean>', f6_n: '<boolean>', f7_n: '<boolean>', f8_t: '<object>', f9_l: '<array>'}, 'KFoUAztTuYMlXHiLDkYIsXIDlkHTenJnvIqzQrTzNLpNrJhUHSTCVMcTRnYCZYtkYkzRmrYfLwfirtmDqCJlKujpTsWGzlFEspdXKWFceEDgqRXiXkxnORcvomtbnpewCVCEhgyJGmplDlUrpUahRgV');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('KFoUAztTuYMlXHiLDkYIsXIDlkHTenJnvIqzQrTzNLpNrJhUHSTCVMcTRnYCZYtkYkzRmrYfLwfirtmDqCJlKujpTsWGzlFEspdXKWFceEDgqRXiXkxnORcvomtbnpewCVCEhgyJGmplDlUrpUahRgV', 'KFoUAztTuYMlXHiLDkYIsXIDlkHTenJnvIqzQrTzNLpNrJhUHSTCVMcTRnYCZYtkYkzRmrYfLwfirtmDqCJlKujpTsWGzlFEspdXKWFceEDgqRXiXkxnORcvomtbnpewCVCEhgyJGmplDlUrpUahRgV', false, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_h: '<null>', f1_c: '<string>', f2_u: '<string>', f3_b: '<number>'}, 'DIwvMaHPhAOTSObGcTAzDcqDIJQzgsyLIsdcawHWOiOMXVIvHdDGazhfGqNoBlJefjCdrZFZTbeoDGTXBkZwxRyVvAjkTlTdIjJsHYdnRVfYdQyVIbyPhTKnRSZFuYeuvVoJxyGaXVXDGySzKvImXibqQXszoqJFQshOWMhZtJHHNWYyIJParYvIDtPaswCcmeacyHftPgqZWvsiltlvgbTqYwkHDhrJysaDrkkvVbFvGzbDadlRJnwBYWISLXMChBtgQaLSRiliCkDZQsONCgLjRTuZfhrqCZhcBggNwesjDpkaNvTypGSfVGDiRnysDUGRYEhYkCWHOWvFqZGmNsuhKmGYnBSWCEqCVYKzAnvrTEgGcdWoXSHszzhgnlCmqHSwHAhXLlOIxSHYGOVCzKdynlvYhPdsDWimbYYqiuOCHdwYTqcSioPcmRDmgqDEFxbupMAQkhaEJwyUzTOEvQpWJFngjJjJyuMaZgRTZRAvHoKPEKEtBegQFytCeKWFiBtUbvCENGZFrYzVdJZjMXaAZnoUwSwaVPXHlupRCAecRFAopZCejCSRhoacIrxzrDhTmioRiTzKDPkioKJtwTuJVZdWleGoEBdubrzdZXzTFIFclUpXfyGazBIPVDeQoLeglDFrUkdcRrQcvEoFnrSWYGYtxJqidphKksGbqkTVkNLTTGyyKempMraHCRLfzgiidBgxuQyVbrlLiiKuMdDjMctBWnqXfYFojrIhtEQFFinLoQNNTLRxb');
    var put_1 = objectStore_0.put({f0_o: '<object>', f1_z: '<array>', f2_d: '<string>', f3_d: '<object>', f4_d: '<string>', f5_c: '<object>', f6_s: '<object>', f7_w: '<number>', f8_e: '<null>', f9_e: '<string>', f10_s: '<number>', f11_f: '<array>', f12_s: '<number>', f13_m: '<null>', f14_f: '<string>', f15_h: '<string>', f16_n: '<boolean>', f17_f: '<null>', f18_o: '<boolean>', f19_a: '<array>', f20_r: '<null>', f21_o: '<object>', f22_x: '<boolean>', f23_m: '<object>', f24_u: '<object>', f25_y: '<string>', f26_a: '<boolean>', f27_k: '<array>', f28_s: '<array>', f29_c: '<number>', f30_i: '<string>', f31_z: '<string>', f32_u: '<number>', f33_z: '<object>', f34_t: '<string>', f35_n: '<number>', f36_y: '<boolean>', f37_m: '<string>', f38_a: '<boolean>', f39_n: '<array>', f40_d: '<array>', f41_t: '<boolean>', f42_m: '<boolean>', f43_t: '<number>', f44_x: '<string>', f45_a: '<null>', f46_y: '<object>', f47_t: '<object>', f48_y: '<null>', f49_f: '<string>', f50_v: '<array>', f51_i: '<string>', f52_q: '<null>'}, 'uMioUVaAikGWrzcCcgKletGFdsUybbnckfoaEwnoypPeRIlAtOCYYRntHvwoyHIOuuUngWCswuqkYNUrIzALiAoMJFYLErKpZEjVAhTijivNEZnifHBSBYyPXBrAKGLAVXYYxnslPKYbjGddWwwqJkGABtHKMIIPFFfuEojYuWJkBYmfYdTzGTpOvnmjtZyCimhSoUmlBEirePHLtaLeLnmDkiatXWzmToRKJBQAewiaHzRcJBEnDaIHpRKmkvKIPbBoFoLvsyofqgFoUsLYFjsOAhCgjLvAoiOnZpjHTAiGmWGGczVFgUyebRniULhtzADsLvHWZDSiIzThVgQXbCKYvIkpIzDxvIscjzmXqBnQovdaLEliXdelxqVRkWxqWEegsNmGHVjBEEmYtmvjepSpgyTmDsbtzCbifQVmXeCyCYYLESlCbYinhyjeuNahDNTgYgmwifRnmWgCSPhSUmJybBEIvvzWNESGXGunvHCodPOTtqspsvYvPrvfWPrAEeHhzIQRErfvnNwLpjtEcpzVNQcWcGQTwlcjtNvlubFlrQWIJjNWmdYYHwcYIXBIbrTjfnRGOLjNsFxtgfRUhdxjsAFJUIKLkfNKmhIlYXppbWehLELkiFAjXwEIxbcsgyFzTBIjDvzrzZkeGHIZdRFMTrPtfcNxwmcNkbhQFBsErRuSydpks');
    var clear_2 = objectStore_0.clear();
    var count_0 = objectStore_0.count();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('KFoUAztTuYMlXHiLDkYIsXIDlkHTenJnvIqzQrTzNLpNrJhUHSTCVMcTRnYCZYtkYkzRmrYfLwfirtmDqCJlKujpTsWGzlFEspdXKWFceEDgqRXiXkxnORcvomtbnpewCVCEhgyJGmplDlUrpUahRgV', 'KFoUAztTuYMlXHiLDkYIsXIDlkHTenJnvIqzQrTzNLpNrJhUHSTCVMcTRnYCZYtkYkzRmrYfLwfirtmDqCJlKujpTsWGzlFEspdXKWFceEDgqRXiXkxnORcvomtbnpewCVCEhgyJGmplDlUrpUahRgV', true, false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_1968')
    var objectStore_1 = db.createObjectStore('objectStore_1969', {keypath: 'yhgGvMdZRpTjRVeThv'});
    var index_1311 = objectStore_1.createIndex('index_1311', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_1969')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_2392')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};