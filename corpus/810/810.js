let db;
const openRequest = window.indexedDB.open('str_8622', 6592252508450943)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4830', {autoIncrement: false});
    var index_3230 = objectStore_0.createIndex('index_3230', 'test');
    var add_0 = objectStore_0.add({f0_x: '<string>'}, 'OjkhqoDEkRbzGxwsBBKgKZRhxwEnYvAMwrqNXFutUeYfGTkBdKYOYPDpComWHtFydAxxyMoORsoCpfzEHAewidcWyOIyrdHFdMQHlQdavCRUYtEhwUEqyqCZBGoqbUZTBilWJmKNJOADvMzmnioZDijlzzqXsjcYwdLmKTeUmbaaXFlasetssfeYsOcJTOVIVMgrzeZNUfhlbgFPfTySTloglLnCkymZOJuDzJIGUpmmFTXMiQWURfkRZBkDrFUbGJbIalDBsaTXyPRpFLkFOsaoqcGXMHBjyFWZYRdxSkaQxBlxSARNhKKVKClmlbesMESgdiYeUJOCRYmpRdSWTsRInKjearzaeAnlxOnBTXetMhbqZczbYMNyASy');
    var index_3231 = objectStore_0.createIndex('index_3231', 'test', {unique: true, multiEntry: false});
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var add_1 = objectStore_0.add({f0_x: '<object>', f1_u: '<object>', f2_j: '<null>', f3_w: '<number>', f4_g: '<string>', f5_o: '<string>'}, 'clgxOcXutqpjdUAKYAZRvUdtKWDCFYzitKqhnPzYkaqWFmtRUYNXOrKsWJeUmUjOJGodfQpGxfjlrfcmLQAFqYfSieSLBOPfxJBNeDrBNjpuRlfiZeEICthvPEmknPaPFzNyQhrkRIpkGlCagUemCjRkXownwCdbbNbDquhqWzdk');
    var put_0 = objectStore_0.put({f0_b: '<array>', f1_w: '<number>', f2_y: '<string>', f3_f: '<string>', f4_e: '<string>', f5_h: '<object>', f6_c: '<array>', f7_c: '<object>', f8_h: '<object>', f9_r: '<boolean>', f10_e: '<boolean>', f11_k: '<boolean>', f12_t: '<number>', f13_b: '<array>', f14_e: '<null>', f15_m: '<number>', f16_p: '<boolean>', f17_w: '<boolean>', f18_i: '<null>', f19_s: '<null>', f20_d: '<null>', f21_c: '<object>', f22_b: '<object>', f23_s: '<boolean>', f24_j: '<null>', f25_f: '<array>', f26_e: '<string>', f27_k: '<boolean>', f28_h: '<object>', f29_t: '<object>', f30_z: '<string>', f31_r: '<array>', f32_c: '<array>', f33_f: '<object>', f34_g: '<null>', f35_k: '<null>', f36_b: '<array>', f37_u: '<null>', f38_y: '<array>', f39_w: '<object>', f40_c: '<object>', f41_h: '<array>', f42_p: '<object>', f43_l: '<null>', f44_b: '<array>', f45_d: '<number>', f46_c: '<object>', f47_d: '<string>', f48_l: '<object>', f49_e: '<null>'}, 'EPredAYpCtkgIqCScnnrNfaHAUKcoggZqJNCdmeWIdPkZvMVBVBMjPJATQqxITNmKQXbPpxSmXBSQOeLOLjCeyRdRaqIGeYfmvvckYoMkEWToFywqUFFToyFYocwZSxmlXjwIzbjsYptjnovhcTAsrMeCiouNCqHdsXPjsgswMdySKkPcCPooxmwCDdHicfLBnWUXQSnzEocskIFEuhsaVllvuCLRGVjQMfsgvBryxnbTuCxRcPQRtPyGFxXTlHlBBwYOyGlVInfRurGwyoVpqdROOEsYmiiZJwFqFDAxEI');
    db.deleteObjectStore('objectStore_4830')
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
const deleteRequest = indexedDB.deleteDatabase('str_248')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};