let db;
const openRequest = window.indexedDB.open('str_5528', 4549737090463165)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5050');
    var index_3372 = objectStore_0.createIndex('index_3372', 'test', {unique: true, multiEntry: true});
    var index_3373 = objectStore_0.createIndex('index_3373', 'test', {unique: false});
    var index_3374 = objectStore_0.createIndex('index_3374', 'test', {multiEntry: false});
    var put_0 = objectStore_0.put({f0_z: '<array>', f1_n: '<number>', f2_m: '<boolean>', f3_z: '<null>', f4_v: '<null>', f5_e: '<number>'}, 'PrajOumoSKsscJDDAShQHuCyHladiYsxqJVOjfXqutbFTvKYqXLjzrmkLiAfQnFcSenGhiLZeragUzZ');
    var clear_0 = objectStore_0.clear();
    var getAllKeys_0 = objectStore_0.getAllKeys(4039269301);
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.only('PrajOumoSKsscJDDAShQHuCyHladiYsxqJVOjfXqutbFTvKYqXLjzrmkLiAfQnFcSenGhiLZeragUzZ');
        getAll_0 = objectStore_0.getAll(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('PrajOumoSKsscJDDAShQHuCyHladiYsxqJVOjfXqutbFTvKYqXLjzrmkLiAfQnFcSenGhiLZeragUzZ');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var add_0 = objectStore_0.add({f0_i: '<string>'}, 'DliWEFSWFMoHGhBuLArhQDDfAaeNlKfpuaIthqsBwlmTqQEOtaZZwehLGwcyydcaXWosnUQgedRBArYUYzjVdPKUUgJlrhgAxXxSPTVmSIbDeGXsqekpWLuTKJescVuLoulMyWGYHSvLASLOcGMNXMHXtlWyCFXNmIKkwRlpuuePVLVvhQDNFdXwRtDWvtfoHACbBRYwxtnEGuwGakyrLBeFQmSTNrzNZylkrZRdHGFbpxTMAtqqYyXvkvIAEXugJAVHBpgjAwPikOfPVwHJBZTAMcyvchlgnVbXMdDBDXgaKmLJjBKUwEYHvWXxSXzduJQWAGMMeLjQOvvMnphZKdYggDvgCPLNOyfHhOHwTYyNrXqjSjtcZFDqVnkOjLTkdGEUlLQpxYmHsJwYJkMsykFmVfQagGIdoIXVqhRtEXCMLsZadZWDsxLGTCtFbmnNMIwFqvDixeocXDefGNoRoSdxxtzWZPggdmPNIHoPDKAXGHNrpOFxyjXVjFokJwkzTgDGFMecJRYyPvaRrRhwvBioyexgifTmHpIDLUsTJcDnrGeZMOFaBGUfMrUpPehfsRTwMaPSLBxkmhQJhlUWIXODcRQEWONojloSxanwxhSDsYNvMCJNhxamVibWoFQRxfnzgxATfqppAueZYrhRlcLOOwpHrwZugfODudlGfKLphrXsFqnsPVXCtWiwKnLDbvVwgrGJBBsPeOikoXzquGQLTLqMXuxJwbRjpYwqFAVBNSLShYHZJKBhYnBECWuJlzIgjoFXPqbCqpATKSwCOOAQolmlWuevpnehSlQoVKHHRW');
    var add_1 = objectStore_0.add({f0_x: '<array>'}, 'mTqWgWRlxiYaXoMrrvtrfSewylrYFiVxhczUIDEQJFMxqgHiwFcQOPhDNdDItiQJwCxwFlzyQsSFNGfFlmbdhhIxSIrbNlcfvNrphlwRXPDUNkHUceVnJRkbncbKteNTwlRFkjJzFumLwYsNtqGDgAUeBxjOsdmLSpFhylimQWlUlrNNSQXpWeOLtGUqJwqlYSkjKvBEKqkmLhOELodnZbhkmiHZyFcyaqweUYJjkYNENyegpHSghwfeRpxaitxzxlWoNMEUVWFPDlEYXZghvOhyAcOcNlosNFTIxeNisKrJQhvxHeyvvkmKJZsqIlFimryojQodqaakwQsfqMmqMTwzeYsGfUHTqgAuarMmxuATUASQFtuamxILvHMshjACCnsAUOSXCOSgmvOiVZmXtjSYmikUMnNnnsInTTBxWelWaoOqyrxRLpSRDzfBEEssIiZZyfpsAGTWfDkWYejVlXCAgkzcYmBDWEmNyWhVbFOtgDWSPmaWGcKcCVNyeoxYFjbHZXQfEbNiycfmFvPKtgrXntRbSMZbNnhf');
    var objectStore_1 = db.createObjectStore('objectStore_5051');
    var clear_1 = objectStore_0.clear();
    var index_3375 = objectStore_0.createIndex('index_3375', 'test', {multiEntry: false});
    var put_1 = objectStore_1.put({f0_n: '<boolean>', f1_u: '<string>', f2_y: '<null>', f3_a: '<array>', f4_c: '<number>', f5_l: '<boolean>'}, 'OxRRgfkSORvBHKmDtvVqiXckTyedXMQKvObtNZYURYjyrpGDsBwhZdGqHwyPPfOovDNjyFGguLElrbjzjRvpCchBneEABeIRCCZODSyoxYshaHopoNEYCHHUCZrjMquNfyUOeQBFGjmFgefhNGVNbzUQMftcBNLNUoEQQeRywXiHKxqJFZIMTlUzTTqNmWKYdDsMxawNAQrPgvCGngpYCjcMlANBSdcghYonAhSskJTnFjpwdrypWrumEpjZxNettUJJSIwfnVwlulmzmhRvTWrNIxLCUfaldgoxXOqxhEMoxvZgOKhxnMdaZdoddvIfkffSdxxssFdLBBsUzOJWGlqksmEtKycCUABkRLLvfwAUHXxFGLEJoenGzbLAmJufmTeSoWTsWfCfpDsbDcuuImcHtAYAbAXvPOoyHXps');
    db.deleteObjectStore('objectStore_5050')
    var add_2 = objectStore_1.add({f0_t: '<string>', f1_k: '<array>', f2_h: '<null>', f3_z: '<number>', f4_q: '<string>', f5_b: '<boolean>', f6_m: '<object>', f7_y: '<boolean>', f8_m: '<object>', f9_e: '<string>'}, 'fjMBzuSrIOKhopzLVjYoCC');
    var getAll_1 = objectStore_1.getAll(290687427);
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('OxRRgfkSORvBHKmDtvVqiXckTyedXMQKvObtNZYURYjyrpGDsBwhZdGqHwyPPfOovDNjyFGguLElrbjzjRvpCchBneEABeIRCCZODSyoxYshaHopoNEYCHHUCZrjMquNfyUOeQBFGjmFgefhNGVNbzUQMftcBNLNUoEQQeRywXiHKxqJFZIMTlUzTTqNmWKYdDsMxawNAQrPgvCGngpYCjcMlANBSdcghYonAhSskJTnFjpwdrypWrumEpjZxNettUJJSIwfnVwlulmzmhRvTWrNIxLCUfaldgoxXOqxhEMoxvZgOKhxnMdaZdoddvIfkffSdxxssFdLBBsUzOJWGlqksmEtKycCUABkRLLvfwAUHXxFGLEJoenGzbLAmJufmTeSoWTsWfCfpDsbDcuuImcHtAYAbAXvPOoyHXps', true);
        count_0 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_5052');
    var objectStore_3 = db.createObjectStore('objectStore_5053', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7595 = db.transaction(['objectStore_5051', 'objectStore_5052'], 'readonly', {durability:"relaxed"})
    var objectStore_5051 = txn_7595.objectStore('objectStore_5051');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('fjMBzuSrIOKhopzLVjYoCC', 'fjMBzuSrIOKhopzLVjYoCC', false, true);
        get_0 = objectStore_5051.get(KeyRange_4);
    }
    catch (e){
    }

    var getAll_2 = objectStore_5051.getAll();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('OxRRgfkSORvBHKmDtvVqiXckTyedXMQKvObtNZYURYjyrpGDsBwhZdGqHwyPPfOovDNjyFGguLElrbjzjRvpCchBneEABeIRCCZODSyoxYshaHopoNEYCHHUCZrjMquNfyUOeQBFGjmFgefhNGVNbzUQMftcBNLNUoEQQeRywXiHKxqJFZIMTlUzTTqNmWKYdDsMxawNAQrPgvCGngpYCjcMlANBSdcghYonAhSskJTnFjpwdrypWrumEpjZxNettUJJSIwfnVwlulmzmhRvTWrNIxLCUfaldgoxXOqxhEMoxvZgOKhxnMdaZdoddvIfkffSdxxssFdLBBsUzOJWGlqksmEtKycCUABkRLLvfwAUHXxFGLEJoenGzbLAmJufmTeSoWTsWfCfpDsbDcuuImcHtAYAbAXvPOoyHXps');
        get_1 = objectStore_5051.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('OxRRgfkSORvBHKmDtvVqiXckTyedXMQKvObtNZYURYjyrpGDsBwhZdGqHwyPPfOovDNjyFGguLElrbjzjRvpCchBneEABeIRCCZODSyoxYshaHopoNEYCHHUCZrjMquNfyUOeQBFGjmFgefhNGVNbzUQMftcBNLNUoEQQeRywXiHKxqJFZIMTlUzTTqNmWKYdDsMxawNAQrPgvCGngpYCjcMlANBSdcghYonAhSskJTnFjpwdrypWrumEpjZxNettUJJSIwfnVwlulmzmhRvTWrNIxLCUfaldgoxXOqxhEMoxvZgOKhxnMdaZdoddvIfkffSdxxssFdLBBsUzOJWGlqksmEtKycCUABkRLLvfwAUHXxFGLEJoenGzbLAmJufmTeSoWTsWfCfpDsbDcuuImcHtAYAbAXvPOoyHXps', 'OxRRgfkSORvBHKmDtvVqiXckTyedXMQKvObtNZYURYjyrpGDsBwhZdGqHwyPPfOovDNjyFGguLElrbjzjRvpCchBneEABeIRCCZODSyoxYshaHopoNEYCHHUCZrjMquNfyUOeQBFGjmFgefhNGVNbzUQMftcBNLNUoEQQeRywXiHKxqJFZIMTlUzTTqNmWKYdDsMxawNAQrPgvCGngpYCjcMlANBSdcghYonAhSskJTnFjpwdrypWrumEpjZxNettUJJSIwfnVwlulmzmhRvTWrNIxLCUfaldgoxXOqxhEMoxvZgOKhxnMdaZdoddvIfkffSdxxssFdLBBsUzOJWGlqksmEtKycCUABkRLLvfwAUHXxFGLEJoenGzbLAmJufmTeSoWTsWfCfpDsbDcuuImcHtAYAbAXvPOoyHXps', true, false);
        get_2 = objectStore_5051.get(KeyRange_8);
    }
    catch (e){
    }

    var getAll_3 = objectStore_5051.getAll();
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('fjMBzuSrIOKhopzLVjYoCC', false);
        count_1 = objectStore_5051.count(KeyRange_10);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.only('fjMBzuSrIOKhopzLVjYoCC');
        count_2 = objectStore_5051.count(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('fjMBzuSrIOKhopzLVjYoCC', false);
        get_3 = objectStore_5051.get(KeyRange_14);
    }
    catch (e){
    }

    txn_7595.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7595.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7595.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7596 = db.transaction(['objectStore_5053'], 'readwrite', {durability:"relaxed"})
    var objectStore_5053 = txn_7596.objectStore('objectStore_5053');
    var put_2 = objectStore_5053.put({f0_p: '<number>', f1_j: '<number>', f2_p: '<object>', f3_u: '<object>', f4_a: '<null>', f5_t: '<array>', f6_k: '<object>', f7_n: '<null>'}, 'syCWRsRrzVyYBIytRZiZHftOmGuKpFYHbsKfxkJMxMqvuGtfXmYgAcMFNBSDrfluuGjeZwIBDXNnBWvAPgByQsrNWogcbBSmlTvZMJcJxDPdPTVKDHtrxyzWySuBaLkb');
    var clear_2 = objectStore_5053.clear();
    var put_3 = objectStore_5053.put({f0_l: '<null>', f1_d: '<number>', f2_d: '<null>', f3_e: '<number>', f4_l: '<boolean>', f5_f: '<string>', f6_b: '<object>'}, 'KUrUq');
    txn_7596.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7596.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7596.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7597 = db.transaction(['objectStore_5053'], 'readwrite', {durability:"strict"})
    var objectStore_5053 = txn_7597.objectStore('objectStore_5053');
    var count_3 = objectStore_5053.count();
    var getAll_4 = objectStore_5053.getAll(797007711);
    var add_3 = objectStore_5053.add({f0_z: '<number>', f1_w: '<array>', f2_b: '<array>', f3_p: '<null>', f4_f: '<object>', f5_k: '<null>', f6_j: '<array>', f7_k: '<number>'}, 'hkUsHfddBgnlOutikKPucXhHdtUfzHCxlJPnjEAEYlWCgAbYReHkqPlzDPVUeHJAyBWyedbwNSoCJjpgzVjImVxFrkRfsmUHQBzhaxFHegBYLXNUvEPVrYuDIAnsGwqhALLHNefGiLrVHEDWUBPWjrNFGCDDqswLJZsycmRzfIwczdLHPzrDzuTbNGkyiPxXolrViRKbWiuyMGETMGXqcrCELsWVidOxmhRfgbKukgBUbzFwmsYpsbvcnreFQKSbxdktLWftUoTORuXFbXeEQsPEJvbUTOaFftgpcMVeqQVAOlWbVuiqQmTGVOdbrwxjhVZnSEbtdsbYfyBYkrYVtAdRMbkfQJMAEzOHZeKXCpoLtjdfKnjlPApDLWZSMSDgoWmHTduGWbIciaNgHEktFwZvUtWVAoLeSNEdSRVmVpRfYziqVNdFATRWNikIMtyGihzRpnBStNimTXcAMYhZbQmmRAzmOXcOWQFD');
    var delete_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('KUrUq', 'hkUsHfddBgnlOutikKPucXhHdtUfzHCxlJPnjEAEYlWCgAbYReHkqPlzDPVUeHJAyBWyedbwNSoCJjpgzVjImVxFrkRfsmUHQBzhaxFHegBYLXNUvEPVrYuDIAnsGwqhALLHNefGiLrVHEDWUBPWjrNFGCDDqswLJZsycmRzfIwczdLHPzrDzuTbNGkyiPxXolrViRKbWiuyMGETMGXqcrCELsWVidOxmhRfgbKukgBUbzFwmsYpsbvcnreFQKSbxdktLWftUoTORuXFbXeEQsPEJvbUTOaFftgpcMVeqQVAOlWbVuiqQmTGVOdbrwxjhVZnSEbtdsbYfyBYkrYVtAdRMbkfQJMAEzOHZeKXCpoLtjdfKnjlPApDLWZSMSDgoWmHTduGWbIciaNgHEktFwZvUtWVAoLeSNEdSRVmVpRfYziqVNdFATRWNikIMtyGihzRpnBStNimTXcAMYhZbQmmRAzmOXcOWQFD', false, true);
        delete_0 = objectStore_5053.delete(KeyRange_16);
    }
    catch (e){
    }

    var clear_3 = objectStore_5053.clear();
    var add_4 = objectStore_5053.add({f0_a: '<null>', f1_f: '<object>', f2_u: '<null>', f3_w: '<null>', f4_z: '<boolean>', f5_z: '<string>', f6_x: '<boolean>', f7_i: '<object>', f8_b: '<null>', f9_r: '<boolean>', f10_t: '<number>', f11_a: '<null>', f12_f: '<array>', f13_q: '<object>', f14_s: '<array>', f15_d: '<object>', f16_q: '<array>', f17_w: '<array>', f18_b: '<string>', f19_e: '<array>', f20_f: '<number>', f21_y: '<boolean>', f22_l: '<null>', f23_m: '<object>', f24_z: '<string>', f25_w: '<object>', f26_j: '<string>', f27_q: '<array>', f28_u: '<boolean>', f29_f: '<object>', f30_y: '<boolean>', f31_j: '<null>', f32_t: '<null>', f33_b: '<boolean>', f34_f: '<number>', f35_r: '<object>', f36_h: '<number>', f37_v: '<null>', f38_h: '<number>', f39_n: '<array>', f40_o: '<array>', f41_m: '<object>', f42_o: '<boolean>', f43_g: '<array>', f44_g: '<string>', f45_c: '<boolean>', f46_m: '<number>', f47_u: '<string>', f48_c: '<string>', f49_h: '<boolean>', f50_v: '<number>', f51_f: '<object>', f52_s: '<null>', f53_c: '<string>', f54_q: '<array>', f55_a: '<object>', f56_m: '<number>', f57_j: '<string>', f58_s: '<array>', f59_x: '<array>', f60_t: '<array>', f61_k: '<number>', f62_c: '<object>', f63_m: '<string>', f64_l: '<array>', f65_e: '<null>', f66_b: '<boolean>', f67_m: '<null>', f68_g: '<null>', f69_k: '<null>', f70_n: '<object>', f71_n: '<number>', f72_t: '<object>', f73_t: '<number>', f74_e: '<array>', f75_q: '<null>', f76_z: '<number>', f77_n: '<boolean>', f78_p: '<number>', f79_x: '<boolean>', f80_n: '<array>', f81_v: '<null>', f82_i: '<array>', f83_q: '<boolean>', f84_z: '<array>', f85_h: '<null>', f86_d: '<array>', f87_v: '<number>', f88_b: '<boolean>', f89_j: '<number>', f90_t: '<string>', f91_c: '<null>', f92_h: '<string>', f93_a: '<object>', f94_e: '<array>', f95_t: '<object>', f96_q: '<string>', f97_k: '<object>', f98_a: '<string>', f99_e: '<array>', f100_q: '<boolean>', f101_b: '<number>', f102_c: '<number>', f103_u: '<null>', f104_v: '<null>', f105_o: '<number>', f106_d: '<string>', f107_q: '<boolean>', f108_p: '<string>', f109_u: '<string>', f110_x: '<number>', f111_d: '<number>', f112_a: '<object>', f113_e: '<boolean>', f114_a: '<string>', f115_v: '<object>', f116_r: '<null>', f117_u: '<array>', f118_j: '<array>', f119_q: '<null>', f120_a: '<number>', f121_w: '<string>', f122_k: '<null>', f123_q: '<number>', f124_v: '<array>', f125_e: '<object>', f126_n: '<object>', f127_t: '<boolean>', f128_f: '<array>', f129_q: '<boolean>', f130_n: '<null>', f131_a: '<null>', f132_m: '<string>', f133_w: '<boolean>', f134_t: '<number>', f135_d: '<boolean>', f136_s: '<object>', f137_y: '<null>', f138_y: '<null>', f139_w: '<null>', f140_u: '<number>', f141_s: '<string>', f142_m: '<null>', f143_p: '<string>', f144_b: '<array>', f145_a: '<null>', f146_j: '<boolean>', f147_x: '<number>', f148_q: '<number>', f149_j: '<string>', f150_y: '<number>', f151_v: '<array>', f152_i: '<object>', f153_s: '<number>', f154_z: '<array>', f155_r: '<number>', f156_y: '<string>', f157_r: '<null>', f158_u: '<null>', f159_d: '<null>', f160_o: '<boolean>', f161_t: '<boolean>', f162_s: '<object>', f163_q: '<array>', f164_i: '<boolean>', f165_z: '<boolean>', f166_s: '<string>', f167_s: '<array>', f168_i: '<string>', f169_z: '<string>', f170_j: '<null>', f171_l: '<number>'}, 'rejsOvNyRdLtVnJsPZgVxCgMiSYnhVqGYgHsRLzrUerNUnRiZuinZqGbviZrGXLTwQlwFasvNqXAgPYpgMxTExftKSiWnkaPwHArFmhsUmIJOMcyHNltbXHFGsrTxbPkymnIxUeLGmjAhtoFsZsSiXOwHKVSWzEuoBQIOrKklbzPRiQkdfoEBQortajEBAoIDItPhAxQEaMWoiZINFdPhiGhgYYAGeLhxkUdARjqnIYONTsRUevfukCBstJigKdGMETtXUyDlPLDqZYZVCIbOFtgNEtBZOLmQypTQNnxIEyLCquoKRAeZQFmiDfUBTNDcBJJsUWZhcAjANWRNkIBgQoyoymEDoGzCeQuPVnHwSooatzaTRbcEoKaUQlPmTwIcvZVbIDjsRtSiHAZEPKohcdlMTfFUEdcztxkVrYSkQHjGJQRurRYFwqEEOURKFoXIxwNofkGasyRaZMpSDAPcAcZrPmjtdxUVQHIUcRPxMeQzAPmMBOloMpKptfMULBsxsnJTJznziIKjMOVRCzrlFrLZXgGZRFIcmrdyiqVtzOxJqVSgesBeVZwjZkGqJWXrBvFHKeCFNdMwACGPrRCGiKdoJFFRClYptRRHyYhByIkPRlpJtGdFVbZaKmTYwRTWYKYpVgPVYOKnnPbVPlkDSBbpsUqGkmDV');
    var count_4 = objectStore_5053.count();
    var getAll_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('hkUsHfddBgnlOutikKPucXhHdtUfzHCxlJPnjEAEYlWCgAbYReHkqPlzDPVUeHJAyBWyedbwNSoCJjpgzVjImVxFrkRfsmUHQBzhaxFHegBYLXNUvEPVrYuDIAnsGwqhALLHNefGiLrVHEDWUBPWjrNFGCDDqswLJZsycmRzfIwczdLHPzrDzuTbNGkyiPxXolrViRKbWiuyMGETMGXqcrCELsWVidOxmhRfgbKukgBUbzFwmsYpsbvcnreFQKSbxdktLWftUoTORuXFbXeEQsPEJvbUTOaFftgpcMVeqQVAOlWbVuiqQmTGVOdbrwxjhVZnSEbtdsbYfyBYkrYVtAdRMbkfQJMAEzOHZeKXCpoLtjdfKnjlPApDLWZSMSDgoWmHTduGWbIciaNgHEktFwZvUtWVAoLeSNEdSRVmVpRfYziqVNdFATRWNikIMtyGihzRpnBStNimTXcAMYhZbQmmRAzmOXcOWQFD', true);
        getAll_5 = objectStore_5053.getAll(KeyRange_18, 1437750563);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('rejsOvNyRdLtVnJsPZgVxCgMiSYnhVqGYgHsRLzrUerNUnRiZuinZqGbviZrGXLTwQlwFasvNqXAgPYpgMxTExftKSiWnkaPwHArFmhsUmIJOMcyHNltbXHFGsrTxbPkymnIxUeLGmjAhtoFsZsSiXOwHKVSWzEuoBQIOrKklbzPRiQkdfoEBQortajEBAoIDItPhAxQEaMWoiZINFdPhiGhgYYAGeLhxkUdARjqnIYONTsRUevfukCBstJigKdGMETtXUyDlPLDqZYZVCIbOFtgNEtBZOLmQypTQNnxIEyLCquoKRAeZQFmiDfUBTNDcBJJsUWZhcAjANWRNkIBgQoyoymEDoGzCeQuPVnHwSooatzaTRbcEoKaUQlPmTwIcvZVbIDjsRtSiHAZEPKohcdlMTfFUEdcztxkVrYSkQHjGJQRurRYFwqEEOURKFoXIxwNofkGasyRaZMpSDAPcAcZrPmjtdxUVQHIUcRPxMeQzAPmMBOloMpKptfMULBsxsnJTJznziIKjMOVRCzrlFrLZXgGZRFIcmrdyiqVtzOxJqVSgesBeVZwjZkGqJWXrBvFHKeCFNdMwACGPrRCGiKdoJFFRClYptRRHyYhByIkPRlpJtGdFVbZaKmTYwRTWYKYpVgPVYOKnnPbVPlkDSBbpsUqGkmDV');
        getAll_5 = objectStore_5053.getAll(KeyRange_19);
    }

    var count_5;
    try{
        KeyRange_20 = IDBKeyRange.only('KUrUq');
        count_5 = objectStore_5053.count(KeyRange_20);
    }
    catch (e){
    }

    var put_4 = objectStore_5053.put({f0_k: '<object>', f1_z: '<array>', f2_x: '<null>', f3_i: '<string>', f4_t: '<object>', f5_l: '<array>'}, 'nlgWPgmzGfPKZEiLoKjpZQwQhUMfBaBJbvkhrORzNqLMukkMWNHKpovHLOxnarKXonLXhPNIygufKibrRObMgMFehfSCZqrRcVTsMxcljriQRcuHWFcLMBoBljSbaBwXEgwPeFdiPRTMiWFnRlSYscpYhScCJmPQDxRuxicuMfSMCAUnIPLWAoygboFYtEoxRpTAxLMbNZWGSlvpViHSOJxEMiCKExpZxDIaqWBcWEhgLwJpEfOiTbrSmEZMuCxCkfVbOsGSICWTCJAuvBmZcDagRIEoiYHKgFSoEcuYcMFVIsgmCbJHVoDOvXygnyeHGqzvyOZrXxHtRLHvQVYBFnVIkyedyChZJoZdSJEXteCYGpJxMgqXEntpaxavSrFyGOdlwDbLexfBOvGHsSyzTBUWNTxuEBPYPcfBPWWihWcXxPyFzYQqocjtNGasucbpLwmOmafWeoykepMqQQlhpfMBKAZhrHCvYceGCHdGmICaybPzWehUVUDwEorLGiAEZvHbLyrwmTiiMXMTCTxyRxojBFDhDPkG');
    var put_5 = objectStore_5053.put({f0_p: '<boolean>', f1_s: '<boolean>', f2_g: '<number>', f3_r: '<array>', f4_o: '<null>', f5_u: '<boolean>', f6_d: '<null>', f7_u: '<object>', f8_j: '<null>', f9_f: '<string>'}, 'kzBiMgwyknTYekKSdjJYOovWzZmFdEGaJhhaSunPOPsMaStNQIPCSAPoBCsjEbjIOHbtcAicNhHBXpNhfnDcosEsAPDfPpihNsfiiBtobqjodbJoLIAsBdsaOPtUEnaeXlVPKGyDNIyoryzCJtnNxUVYfONsKWUWPWqekEfMwYxowRjPEjBbevcMApKRoJnqFOxPLTRwHtjeDwpujyNyRYLoyGlSidcOLNBHqTvMBogVpezxjVjfBXvyDqFiOqLbiOaVxHOGGHRYqicwkrLkNkOmaqVbuLPPxMgoFvBJxZtoGkhcUJswlyvJsSqjeYpwRnzJiWNIxnDAgdLGJRjiySCNrWVIzwhIzIUCehahoekEOehPIOQiThuFMUSgocDalm');
    var clear_4 = objectStore_5053.clear();
    txn_7597.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7597.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7597.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7598 = db.transaction(['objectStore_5052', 'objectStore_5051', 'objectStore_5053'], 'readonly', {durability:"relaxed"})
    var objectStore_5053 = txn_7598.objectStore('objectStore_5053');
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('syCWRsRrzVyYBIytRZiZHftOmGuKpFYHbsKfxkJMxMqvuGtfXmYgAcMFNBSDrfluuGjeZwIBDXNnBWvAPgByQsrNWogcbBSmlTvZMJcJxDPdPTVKDHtrxyzWySuBaLkb', 'KUrUq', false, true);
        get_4 = objectStore_5053.get(KeyRange_22);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('rejsOvNyRdLtVnJsPZgVxCgMiSYnhVqGYgHsRLzrUerNUnRiZuinZqGbviZrGXLTwQlwFasvNqXAgPYpgMxTExftKSiWnkaPwHArFmhsUmIJOMcyHNltbXHFGsrTxbPkymnIxUeLGmjAhtoFsZsSiXOwHKVSWzEuoBQIOrKklbzPRiQkdfoEBQortajEBAoIDItPhAxQEaMWoiZINFdPhiGhgYYAGeLhxkUdARjqnIYONTsRUevfukCBstJigKdGMETtXUyDlPLDqZYZVCIbOFtgNEtBZOLmQypTQNnxIEyLCquoKRAeZQFmiDfUBTNDcBJJsUWZhcAjANWRNkIBgQoyoymEDoGzCeQuPVnHwSooatzaTRbcEoKaUQlPmTwIcvZVbIDjsRtSiHAZEPKohcdlMTfFUEdcztxkVrYSkQHjGJQRurRYFwqEEOURKFoXIxwNofkGasyRaZMpSDAPcAcZrPmjtdxUVQHIUcRPxMeQzAPmMBOloMpKptfMULBsxsnJTJznziIKjMOVRCzrlFrLZXgGZRFIcmrdyiqVtzOxJqVSgesBeVZwjZkGqJWXrBvFHKeCFNdMwACGPrRCGiKdoJFFRClYptRRHyYhByIkPRlpJtGdFVbZaKmTYwRTWYKYpVgPVYOKnnPbVPlkDSBbpsUqGkmDV', 'kzBiMgwyknTYekKSdjJYOovWzZmFdEGaJhhaSunPOPsMaStNQIPCSAPoBCsjEbjIOHbtcAicNhHBXpNhfnDcosEsAPDfPpihNsfiiBtobqjodbJoLIAsBdsaOPtUEnaeXlVPKGyDNIyoryzCJtnNxUVYfONsKWUWPWqekEfMwYxowRjPEjBbevcMApKRoJnqFOxPLTRwHtjeDwpujyNyRYLoyGlSidcOLNBHqTvMBogVpezxjVjfBXvyDqFiOqLbiOaVxHOGGHRYqicwkrLkNkOmaqVbuLPPxMgoFvBJxZtoGkhcUJswlyvJsSqjeYpwRnzJiWNIxnDAgdLGJRjiySCNrWVIzwhIzIUCehahoekEOehPIOQiThuFMUSgocDalm', true, true);
        get_5 = objectStore_5053.get(KeyRange_24);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('syCWRsRrzVyYBIytRZiZHftOmGuKpFYHbsKfxkJMxMqvuGtfXmYgAcMFNBSDrfluuGjeZwIBDXNnBWvAPgByQsrNWogcbBSmlTvZMJcJxDPdPTVKDHtrxyzWySuBaLkb', 'kzBiMgwyknTYekKSdjJYOovWzZmFdEGaJhhaSunPOPsMaStNQIPCSAPoBCsjEbjIOHbtcAicNhHBXpNhfnDcosEsAPDfPpihNsfiiBtobqjodbJoLIAsBdsaOPtUEnaeXlVPKGyDNIyoryzCJtnNxUVYfONsKWUWPWqekEfMwYxowRjPEjBbevcMApKRoJnqFOxPLTRwHtjeDwpujyNyRYLoyGlSidcOLNBHqTvMBogVpezxjVjfBXvyDqFiOqLbiOaVxHOGGHRYqicwkrLkNkOmaqVbuLPPxMgoFvBJxZtoGkhcUJswlyvJsSqjeYpwRnzJiWNIxnDAgdLGJRjiySCNrWVIzwhIzIUCehahoekEOehPIOQiThuFMUSgocDalm', false, true);
        get_6 = objectStore_5053.get(KeyRange_26);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_28 = IDBKeyRange.only('kzBiMgwyknTYekKSdjJYOovWzZmFdEGaJhhaSunPOPsMaStNQIPCSAPoBCsjEbjIOHbtcAicNhHBXpNhfnDcosEsAPDfPpihNsfiiBtobqjodbJoLIAsBdsaOPtUEnaeXlVPKGyDNIyoryzCJtnNxUVYfONsKWUWPWqekEfMwYxowRjPEjBbevcMApKRoJnqFOxPLTRwHtjeDwpujyNyRYLoyGlSidcOLNBHqTvMBogVpezxjVjfBXvyDqFiOqLbiOaVxHOGGHRYqicwkrLkNkOmaqVbuLPPxMgoFvBJxZtoGkhcUJswlyvJsSqjeYpwRnzJiWNIxnDAgdLGJRjiySCNrWVIzwhIzIUCehahoekEOehPIOQiThuFMUSgocDalm');
        getAllKeys_1 = objectStore_5053.getAllKeys(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('hkUsHfddBgnlOutikKPucXhHdtUfzHCxlJPnjEAEYlWCgAbYReHkqPlzDPVUeHJAyBWyedbwNSoCJjpgzVjImVxFrkRfsmUHQBzhaxFHegBYLXNUvEPVrYuDIAnsGwqhALLHNefGiLrVHEDWUBPWjrNFGCDDqswLJZsycmRzfIwczdLHPzrDzuTbNGkyiPxXolrViRKbWiuyMGETMGXqcrCELsWVidOxmhRfgbKukgBUbzFwmsYpsbvcnreFQKSbxdktLWftUoTORuXFbXeEQsPEJvbUTOaFftgpcMVeqQVAOlWbVuiqQmTGVOdbrwxjhVZnSEbtdsbYfyBYkrYVtAdRMbkfQJMAEzOHZeKXCpoLtjdfKnjlPApDLWZSMSDgoWmHTduGWbIciaNgHEktFwZvUtWVAoLeSNEdSRVmVpRfYziqVNdFATRWNikIMtyGihzRpnBStNimTXcAMYhZbQmmRAzmOXcOWQFD');
        getAllKeys_1 = objectStore_5053.getAllKeys(KeyRange_29);
    }

    var count_6 = objectStore_5053.count();
    var count_7 = objectStore_5053.count();
    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('rejsOvNyRdLtVnJsPZgVxCgMiSYnhVqGYgHsRLzrUerNUnRiZuinZqGbviZrGXLTwQlwFasvNqXAgPYpgMxTExftKSiWnkaPwHArFmhsUmIJOMcyHNltbXHFGsrTxbPkymnIxUeLGmjAhtoFsZsSiXOwHKVSWzEuoBQIOrKklbzPRiQkdfoEBQortajEBAoIDItPhAxQEaMWoiZINFdPhiGhgYYAGeLhxkUdARjqnIYONTsRUevfukCBstJigKdGMETtXUyDlPLDqZYZVCIbOFtgNEtBZOLmQypTQNnxIEyLCquoKRAeZQFmiDfUBTNDcBJJsUWZhcAjANWRNkIBgQoyoymEDoGzCeQuPVnHwSooatzaTRbcEoKaUQlPmTwIcvZVbIDjsRtSiHAZEPKohcdlMTfFUEdcztxkVrYSkQHjGJQRurRYFwqEEOURKFoXIxwNofkGasyRaZMpSDAPcAcZrPmjtdxUVQHIUcRPxMeQzAPmMBOloMpKptfMULBsxsnJTJznziIKjMOVRCzrlFrLZXgGZRFIcmrdyiqVtzOxJqVSgesBeVZwjZkGqJWXrBvFHKeCFNdMwACGPrRCGiKdoJFFRClYptRRHyYhByIkPRlpJtGdFVbZaKmTYwRTWYKYpVgPVYOKnnPbVPlkDSBbpsUqGkmDV', false);
        get_7 = objectStore_5053.get(KeyRange_30);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('nlgWPgmzGfPKZEiLoKjpZQwQhUMfBaBJbvkhrORzNqLMukkMWNHKpovHLOxnarKXonLXhPNIygufKibrRObMgMFehfSCZqrRcVTsMxcljriQRcuHWFcLMBoBljSbaBwXEgwPeFdiPRTMiWFnRlSYscpYhScCJmPQDxRuxicuMfSMCAUnIPLWAoygboFYtEoxRpTAxLMbNZWGSlvpViHSOJxEMiCKExpZxDIaqWBcWEhgLwJpEfOiTbrSmEZMuCxCkfVbOsGSICWTCJAuvBmZcDagRIEoiYHKgFSoEcuYcMFVIsgmCbJHVoDOvXygnyeHGqzvyOZrXxHtRLHvQVYBFnVIkyedyChZJoZdSJEXteCYGpJxMgqXEntpaxavSrFyGOdlwDbLexfBOvGHsSyzTBUWNTxuEBPYPcfBPWWihWcXxPyFzYQqocjtNGasucbpLwmOmafWeoykepMqQQlhpfMBKAZhrHCvYceGCHdGmICaybPzWehUVUDwEorLGiAEZvHbLyrwmTiiMXMTCTxyRxojBFDhDPkG', 'kzBiMgwyknTYekKSdjJYOovWzZmFdEGaJhhaSunPOPsMaStNQIPCSAPoBCsjEbjIOHbtcAicNhHBXpNhfnDcosEsAPDfPpihNsfiiBtobqjodbJoLIAsBdsaOPtUEnaeXlVPKGyDNIyoryzCJtnNxUVYfONsKWUWPWqekEfMwYxowRjPEjBbevcMApKRoJnqFOxPLTRwHtjeDwpujyNyRYLoyGlSidcOLNBHqTvMBogVpezxjVjfBXvyDqFiOqLbiOaVxHOGGHRYqicwkrLkNkOmaqVbuLPPxMgoFvBJxZtoGkhcUJswlyvJsSqjeYpwRnzJiWNIxnDAgdLGJRjiySCNrWVIzwhIzIUCehahoekEOehPIOQiThuFMUSgocDalm', false, true);
        get_8 = objectStore_5053.get(KeyRange_32);
    }
    catch (e){
    }

    var count_8 = objectStore_5053.count();
    var count_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('rejsOvNyRdLtVnJsPZgVxCgMiSYnhVqGYgHsRLzrUerNUnRiZuinZqGbviZrGXLTwQlwFasvNqXAgPYpgMxTExftKSiWnkaPwHArFmhsUmIJOMcyHNltbXHFGsrTxbPkymnIxUeLGmjAhtoFsZsSiXOwHKVSWzEuoBQIOrKklbzPRiQkdfoEBQortajEBAoIDItPhAxQEaMWoiZINFdPhiGhgYYAGeLhxkUdARjqnIYONTsRUevfukCBstJigKdGMETtXUyDlPLDqZYZVCIbOFtgNEtBZOLmQypTQNnxIEyLCquoKRAeZQFmiDfUBTNDcBJJsUWZhcAjANWRNkIBgQoyoymEDoGzCeQuPVnHwSooatzaTRbcEoKaUQlPmTwIcvZVbIDjsRtSiHAZEPKohcdlMTfFUEdcztxkVrYSkQHjGJQRurRYFwqEEOURKFoXIxwNofkGasyRaZMpSDAPcAcZrPmjtdxUVQHIUcRPxMeQzAPmMBOloMpKptfMULBsxsnJTJznziIKjMOVRCzrlFrLZXgGZRFIcmrdyiqVtzOxJqVSgesBeVZwjZkGqJWXrBvFHKeCFNdMwACGPrRCGiKdoJFFRClYptRRHyYhByIkPRlpJtGdFVbZaKmTYwRTWYKYpVgPVYOKnnPbVPlkDSBbpsUqGkmDV', 'hkUsHfddBgnlOutikKPucXhHdtUfzHCxlJPnjEAEYlWCgAbYReHkqPlzDPVUeHJAyBWyedbwNSoCJjpgzVjImVxFrkRfsmUHQBzhaxFHegBYLXNUvEPVrYuDIAnsGwqhALLHNefGiLrVHEDWUBPWjrNFGCDDqswLJZsycmRzfIwczdLHPzrDzuTbNGkyiPxXolrViRKbWiuyMGETMGXqcrCELsWVidOxmhRfgbKukgBUbzFwmsYpsbvcnreFQKSbxdktLWftUoTORuXFbXeEQsPEJvbUTOaFftgpcMVeqQVAOlWbVuiqQmTGVOdbrwxjhVZnSEbtdsbYfyBYkrYVtAdRMbkfQJMAEzOHZeKXCpoLtjdfKnjlPApDLWZSMSDgoWmHTduGWbIciaNgHEktFwZvUtWVAoLeSNEdSRVmVpRfYziqVNdFATRWNikIMtyGihzRpnBStNimTXcAMYhZbQmmRAzmOXcOWQFD', true, true);
        count_9 = objectStore_5053.count(KeyRange_34);
    }
    catch (e){
    }

    txn_7598.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7598.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7598.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7599 = db.transaction(['objectStore_5052'], 'readwrite', {durability:"strict"})
    var objectStore_5052 = txn_7599.objectStore('objectStore_5052');
    var clear_5 = objectStore_5052.clear();
    var put_6 = objectStore_5052.put({f0_c: '<null>', f1_j: '<array>', f2_m: '<number>', f3_d: '<number>', f4_f: '<object>', f5_q: '<number>', f6_p: '<array>', f7_d: '<boolean>', f8_l: '<boolean>'}, 'ncvZVntItNWWASJkKpLBOHNtRBBtTMDAhwpLvuinFviTrsHtyDIqtVMvvGMHLTgeqldFaITmRklHQFiHFbAVJarEPWjHDjsoPHpdVtODlOWolMqouCXeqkOyQFSSiDBFahrfdARvzHAplsjJadKANAxgftgdHhZTBIeUCBrZmHKEsZifquolaJKMmAPTLGdlbsMnQUkDbkQEYyNUlyMSOHmRIlUWmDooaNMBQRWbKCBjtsZXFZBUhZyGRdnRzHsoIkUWdQlPdxvIeIpwAjwuoObLwNxxGMLVnLjMZskbhHNBNEZxuBrGVhUeosJQsVEDHMiQVaWPijKEzBoSZhGQRluGVJIRyoJlZZVPeTdZUUvGwEnxqVjkxfUbVcUUWvXykjahKDlEcgytpHGIMmpoZvxCzahEwdAcHBFOcUjOlAhKQpYGoMSrdUcXBlPefXTeQcahJIEwoTJnNHqTxqpevFrUVbBrqdUZnZNfDUyzmndXHOBHYOxnQAgIDaZdAtBcYlJzYwHvuLDRYpbtoumUCPDHDWTScrfGSrzoeNLGrTSQcDCekBHNTmUZbTvLQaBJHsjTuRCIprZkYoNFefZvsXmnLlkhnSsDbJWHCauqwBpHUHQWhHHkVspTGNDqUMyrAGRtdcjXmJdzQKFDbyxgCuwIlwOUdTgxIrwXNJjulzGPrkrfeqVurQloRLwsKgidPNfolPBQgbDYSqBQIeobRVdhkKLXUpAbFtWYQIjBzhXTCjYEqNqFcMyKZtvUnRWeWAobdODJiKuRRlLTocFaEVZFGPkrdpxOIErKNaKeLvKJDREuPABYnImDFOtfeQSZyASzqrILLluJmBVLEKvkIodGUKeQIrXfKhdYMkPHYixMJDyZAoounEILKrlKwOBYgwXOtWjBTpnVxMsnGtwlLqdfRAzPuckTYIzVghcqTyfFVtGfCQtGUxNZIDLTXKPHyYMfsESOnaIGXfoaUyePFMATbRBPhWgTQT');
    var clear_6 = objectStore_5052.clear();
    var count_10 = objectStore_5052.count();
    var clear_7 = objectStore_5052.clear();
    var add_5 = objectStore_5052.add({f0_k: '<boolean>', f1_r: '<object>', f2_q: '<boolean>', f3_k: '<string>'}, 'eACnjEgsFLXfBsAlxJDPXsMhLgmwWBuUEuupDvyfesqSXCcQjmGfVCQquTPOMAvSoZhjVYOOgbipYxEatmtkekVOVdOXAFHszkwicozAtfHtzGKkdvZgUVbAFYJSRvAtvQHKBzGgJCQRSsslwdeHtLnwSTVlJOYVbwTlnwgeqGGhEiWvGDqDvJnAvyEdQlYMmJMkYVkwPltAEPvRiUjNdjMIgZExRuNREExCOjKVrJQLFEpQEFpLCcDmENjuGCLXzYwqTQUAxIzGCzHCDWOzoPHUmzdTtsBaZsWeIuoWOaWnboTOcYjWymQUqSPsFMGWQyYoKdUlIaQUUIqHSScVkzzmKEzCUurAfXZLuQJENEIGzjttYYwypLcrcbggnBXgqxUnkzURRxeKLVNdtThMVvlJhyQkKHcBvmcHXVOCxbMlpMaHbABVFdoAWBXhrOfKcExqjzlHaODMCGtVAnIPDfWAbWqHxdvhEwzdRlpkcsYmAuBsSvtsyjdZeDxjObcFuDAPNKyuUsKcZQZdSYELnIfqKQcLboToxBWhcdcxCRHallEqbogoBOkgvxOYyeUckRDcmUteEeIIBLtuiMyMOgWlrArOBhMdIRjjMbJGNkFTC');
    var get_9;
    try{
        KeyRange_36 = IDBKeyRange.only('eACnjEgsFLXfBsAlxJDPXsMhLgmwWBuUEuupDvyfesqSXCcQjmGfVCQquTPOMAvSoZhjVYOOgbipYxEatmtkekVOVdOXAFHszkwicozAtfHtzGKkdvZgUVbAFYJSRvAtvQHKBzGgJCQRSsslwdeHtLnwSTVlJOYVbwTlnwgeqGGhEiWvGDqDvJnAvyEdQlYMmJMkYVkwPltAEPvRiUjNdjMIgZExRuNREExCOjKVrJQLFEpQEFpLCcDmENjuGCLXzYwqTQUAxIzGCzHCDWOzoPHUmzdTtsBaZsWeIuoWOaWnboTOcYjWymQUqSPsFMGWQyYoKdUlIaQUUIqHSScVkzzmKEzCUurAfXZLuQJENEIGzjttYYwypLcrcbggnBXgqxUnkzURRxeKLVNdtThMVvlJhyQkKHcBvmcHXVOCxbMlpMaHbABVFdoAWBXhrOfKcExqjzlHaODMCGtVAnIPDfWAbWqHxdvhEwzdRlpkcsYmAuBsSvtsyjdZeDxjObcFuDAPNKyuUsKcZQZdSYELnIfqKQcLboToxBWhcdcxCRHallEqbogoBOkgvxOYyeUckRDcmUteEeIIBLtuiMyMOgWlrArOBhMdIRjjMbJGNkFTC');
        get_9 = objectStore_5052.get(KeyRange_36);
    }
    catch (e){
    }

    var clear_8 = objectStore_5052.clear();
    txn_7599.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7599.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7599.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4229')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};