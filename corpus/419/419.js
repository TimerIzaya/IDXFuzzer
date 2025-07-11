let db;
const openRequest = window.indexedDB.open('str_7561', 8559827397056089)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2439');
    var objectStore_1 = db.createObjectStore('objectStore_2440', {keypath: 'UZFAnzinsreeaaDkhCJednkVEgvnVjDAGtxyFBicRFgvPYNAMXZXTcthCpsseJSpOWNxLgTQtoHznOGeZmTMTlyeZcsZTHNnBUoBDXALFqTZvjNUcQAyqcfazkARaDgucedwwqcgZTVlqEFBgSljxfSBQETcgXehaZVWIZpbWmwjWQOkVOiGzWOWGhoVSNZEnodUlwsHpKQNiLjZoEMdNbxhooWchNVYxabGBJxWSRyGjtnkZwbwlWWGzVJCVprKgLriLAaEyvCsKAnCLdiPzIWdHdySOvQFBLdVTxHKiSAHcggodMioJlGfdoLtecJimbmVHAXSaANvzJnfItlHXQcmdBanUkSpqemfWPwNGvhVEMKRPrQrgAaVWaFSHNxETczIZmEXdxXlealfTKamoMbgNtOyzCcIncVqTvslMPmOkwfKgOHXmofDrjqkPRUqtWfyQSBpRfquKsHgGnpGVvwjLBNzSCxbfbsPLbFdEhPTeHDSRwTdDDaazwyaxNblRlNTKmByKXJlpoFCuwDwsRWuskpbYIDKrpZZFcIuhXOpAcKOVOomVHSgZCKitFltOCaudWYJwjdDzAzbPfNVhisrp', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_x: '<boolean>'}, 'ldOXAtVdkmJMfRgJIkbYDBNknIZuWJMbdHASedsRKYBpqnOmoPPLeKZIWnXpcQvuZKjzSgqIkSABzhMkpSowJHoHSMiLlDxZJOaClvtBDHHGAmbDeICLyuCFWUDkxqBxioFNbsKjSQmsOoNEUuqfUxlmpNpbiANdmvuhhzaCuFpRArvKAQvErxXbglJYVCfRVyCBSytlIAJAULhtOcxJouacfNFxYvgQAVtgGcVwgGuQdnBSNWDpDAkXcCdEpXtCDyOXVMwyHGDMbmRTrT');
    var objectStore_2 = db.createObjectStore('objectStore_2441', {keypath: 'mkuQLaThzwGqtoDGNjyecArTTQaJnvxKCKEYuQQQriLvOzEazHgIoWKDyFSBCnNXOdHtGFVxrNKAcBrLevSBJpiHMaUYgbjfrtuSYwwdMtbMWfYmdmDJfFQUXZcRBRTOlkHkDvJpUtzWpQFZIxbqGYWpVgduhaTQpjXiTvyPXbGJNPNTWeHMemGLSGdrhDvPJfwBnrtlBdDpjYQsHhNezbHJwATvsQFDOkcfrAWtnBIAMiOhohJsyINCmLjBenYekjzTgQrJ'});
    var add_1 = objectStore_2.add({f0_v: '<array>'}, 'IkFta');
    var put_0 = objectStore_2.put({f0_m: '<boolean>', f1_y: '<array>', f2_d: '<boolean>', f3_d: '<null>', f4_e: '<object>'}, 'cckGygmGuJGfmfjNCMUIyUaxGclOSYeQJnqExHedOhTIhcWuzvNy');
    var put_1 = objectStore_1.put({f0_b: '<array>', f1_r: '<number>', f2_c: '<string>', f3_a: '<null>', f4_e: '<number>', f5_t: '<number>', f6_u: '<null>', f7_q: '<number>', f8_d: '<null>', f9_y: '<array>', f10_g: '<object>', f11_p: '<null>', f12_v: '<null>', f13_x: '<object>', f14_r: '<object>', f15_y: '<string>', f16_m: '<string>', f17_b: '<object>', f18_x: '<string>', f19_k: '<null>', f20_i: '<number>', f21_c: '<null>', f22_u: '<object>', f23_y: '<null>', f24_m: '<object>', f25_r: '<boolean>', f26_e: '<object>', f27_n: '<string>', f28_j: '<object>', f29_r: '<null>', f30_b: '<array>', f31_r: '<number>', f32_g: '<string>', f33_b: '<number>', f34_y: '<null>', f35_j: '<number>', f36_n: '<object>', f37_y: '<object>', f38_w: '<boolean>', f39_e: '<boolean>', f40_g: '<boolean>', f41_f: '<string>', f42_u: '<number>', f43_f: '<string>', f44_w: '<object>', f45_h: '<array>', f46_c: '<null>', f47_x: '<number>', f48_y: '<boolean>', f49_k: '<number>', f50_e: '<null>', f51_a: '<number>', f52_x: '<object>', f53_s: '<null>', f54_l: '<object>', f55_w: '<object>', f56_h: '<string>', f57_n: '<boolean>', f58_s: '<array>', f59_v: '<number>', f60_o: '<object>', f61_g: '<string>', f62_v: '<object>', f63_w: '<number>', f64_u: '<object>', f65_l: '<boolean>', f66_r: '<array>', f67_j: '<number>', f68_d: '<boolean>', f69_g: '<boolean>', f70_f: '<object>', f71_t: '<null>', f72_j: '<number>', f73_v: '<number>', f74_j: '<number>', f75_a: '<boolean>', f76_g: '<number>', f77_l: '<array>', f78_t: '<null>', f79_n: '<null>', f80_l: '<null>', f81_q: '<null>', f82_k: '<boolean>', f83_g: '<array>', f84_w: '<string>', f85_o: '<null>', f86_g: '<object>', f87_u: '<string>', f88_a: '<array>', f89_v: '<array>', f90_c: '<boolean>', f91_g: '<object>', f92_s: '<string>', f93_c: '<null>', f94_l: '<number>', f95_q: '<array>', f96_m: '<number>', f97_w: '<array>', f98_v: '<array>', f99_i: '<array>', f100_e: '<object>', f101_p: '<number>', f102_q: '<boolean>', f103_r: '<boolean>', f104_z: '<array>', f105_m: '<number>', f106_j: '<boolean>', f107_v: '<number>', f108_g: '<array>'}, 'SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY');
    var put_2 = objectStore_0.put({f0_a: '<object>', f1_h: '<boolean>', f2_r: '<object>', f3_z: '<string>', f4_m: '<string>', f5_t: '<string>'}, 'ilfYbvHomoEsFkJXRdNZAmFecXwYbWtIwQRAuslSETqSBDopctISWKyStaDwWmQOBUJZIMZbaljvtgPydKPKhRlUMlpjZMISVdLkMgWIpZMogLUFeyXCQDQyxUJzRlCbFTpWlVtQAjdFKMqanaSyMGEIivAGEWVbzuxgqTstavZcDAKXiwoRqdIIzKoMMZJjVrNLRlrejHwjsZYlghZTIDhgVhkKKEpcTyXsKLmvdPNYgNsAyOaCjqDvCQgqYynBXvYIeKQROFCtnStatLZmIECHWPZZMpeMgdUWbvHJQBxmEHFouMOAKAeKRIEEjwSeBoMuUyneNbvsybItqKNFeKdyrcjuXTOLmunDwSAiDdgJTrSwlgMPNhoTBrVJQSUoUsSlmySAWEjlEttjuiMWHLMPrWDUGwoHqwybqQZyFVKGpffxZdUCuSXHmvUPYCQoxrMfWcMzKdRoSDiXePdNCKlValwPBfkUaqDgeCIcOkjFFpLSVLrNIoyLpNJFhrvjdhWChcKPGFMjsrFCiKbmqppGBgTWvkETGcetDlzTgpHExNOtMbhGfifncaeGchGjgxgJpAQVihPJWNxUSfFKhTuPZuoLNWnHrLiVtsprmOjDEKBUClZepYMpdXrzwTacqUZrqoCyLAaqSLoVznrmupiewJPouzvKubUCjkXJzKkTmwvvJKWIFVdktQwQDqHVDIHrxuiscobHfTuyjGmqiQPpdKnOkKfmuEvbhaIRfyFRpqyegOiTtBloEzKSDhIxIKGLoIzALXrkNRcwRlnMCIBrqCNvyrRvioHvVynVmHcaCRklfqzqPuKxVpaBmDzNcvGWsPsPpskpwzFipPerCTiYGiYUyTsdgfefiuqGmgceLafIpBwUXfFdyGXzldifqoevPRxcoBoGyrhRaZhaydnegZbPQCrENqv');
    var count_0 = objectStore_1.count();
    var clear_1 = objectStore_2.clear();
    var clear_2 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_2442');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY');
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('ilfYbvHomoEsFkJXRdNZAmFecXwYbWtIwQRAuslSETqSBDopctISWKyStaDwWmQOBUJZIMZbaljvtgPydKPKhRlUMlpjZMISVdLkMgWIpZMogLUFeyXCQDQyxUJzRlCbFTpWlVtQAjdFKMqanaSyMGEIivAGEWVbzuxgqTstavZcDAKXiwoRqdIIzKoMMZJjVrNLRlrejHwjsZYlghZTIDhgVhkKKEpcTyXsKLmvdPNYgNsAyOaCjqDvCQgqYynBXvYIeKQROFCtnStatLZmIECHWPZZMpeMgdUWbvHJQBxmEHFouMOAKAeKRIEEjwSeBoMuUyneNbvsybItqKNFeKdyrcjuXTOLmunDwSAiDdgJTrSwlgMPNhoTBrVJQSUoUsSlmySAWEjlEttjuiMWHLMPrWDUGwoHqwybqQZyFVKGpffxZdUCuSXHmvUPYCQoxrMfWcMzKdRoSDiXePdNCKlValwPBfkUaqDgeCIcOkjFFpLSVLrNIoyLpNJFhrvjdhWChcKPGFMjsrFCiKbmqppGBgTWvkETGcetDlzTgpHExNOtMbhGfifncaeGchGjgxgJpAQVihPJWNxUSfFKhTuPZuoLNWnHrLiVtsprmOjDEKBUClZepYMpdXrzwTacqUZrqoCyLAaqSLoVznrmupiewJPouzvKubUCjkXJzKkTmwvvJKWIFVdktQwQDqHVDIHrxuiscobHfTuyjGmqiQPpdKnOkKfmuEvbhaIRfyFRpqyegOiTtBloEzKSDhIxIKGLoIzALXrkNRcwRlnMCIBrqCNvyrRvioHvVynVmHcaCRklfqzqPuKxVpaBmDzNcvGWsPsPpskpwzFipPerCTiYGiYUyTsdgfefiuqGmgceLafIpBwUXfFdyGXzldifqoevPRxcoBoGyrhRaZhaydnegZbPQCrENqv', true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var objectStore_4 = db.createObjectStore('objectStore_2443');
    var index_1610 = objectStore_0.createIndex('index_1610', 'test', {unique: true});
    var add_2 = objectStore_4.add({f0_b: '<boolean>', f1_w: '<boolean>'}, 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
    var count_2 = objectStore_0.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('ldOXAtVdkmJMfRgJIkbYDBNknIZuWJMbdHASedsRKYBpqnOmoPPLeKZIWnXpcQvuZKjzSgqIkSABzhMkpSowJHoHSMiLlDxZJOaClvtBDHHGAmbDeICLyuCFWUDkxqBxioFNbsKjSQmsOoNEUuqfUxlmpNpbiANdmvuhhzaCuFpRArvKAQvErxXbglJYVCfRVyCBSytlIAJAULhtOcxJouacfNFxYvgQAVtgGcVwgGuQdnBSNWDpDAkXcCdEpXtCDyOXVMwyHGDMbmRTrT', 'ilfYbvHomoEsFkJXRdNZAmFecXwYbWtIwQRAuslSETqSBDopctISWKyStaDwWmQOBUJZIMZbaljvtgPydKPKhRlUMlpjZMISVdLkMgWIpZMogLUFeyXCQDQyxUJzRlCbFTpWlVtQAjdFKMqanaSyMGEIivAGEWVbzuxgqTstavZcDAKXiwoRqdIIzKoMMZJjVrNLRlrejHwjsZYlghZTIDhgVhkKKEpcTyXsKLmvdPNYgNsAyOaCjqDvCQgqYynBXvYIeKQROFCtnStatLZmIECHWPZZMpeMgdUWbvHJQBxmEHFouMOAKAeKRIEEjwSeBoMuUyneNbvsybItqKNFeKdyrcjuXTOLmunDwSAiDdgJTrSwlgMPNhoTBrVJQSUoUsSlmySAWEjlEttjuiMWHLMPrWDUGwoHqwybqQZyFVKGpffxZdUCuSXHmvUPYCQoxrMfWcMzKdRoSDiXePdNCKlValwPBfkUaqDgeCIcOkjFFpLSVLrNIoyLpNJFhrvjdhWChcKPGFMjsrFCiKbmqppGBgTWvkETGcetDlzTgpHExNOtMbhGfifncaeGchGjgxgJpAQVihPJWNxUSfFKhTuPZuoLNWnHrLiVtsprmOjDEKBUClZepYMpdXrzwTacqUZrqoCyLAaqSLoVznrmupiewJPouzvKubUCjkXJzKkTmwvvJKWIFVdktQwQDqHVDIHrxuiscobHfTuyjGmqiQPpdKnOkKfmuEvbhaIRfyFRpqyegOiTtBloEzKSDhIxIKGLoIzALXrkNRcwRlnMCIBrqCNvyrRvioHvVynVmHcaCRklfqzqPuKxVpaBmDzNcvGWsPsPpskpwzFipPerCTiYGiYUyTsdgfefiuqGmgceLafIpBwUXfFdyGXzldifqoevPRxcoBoGyrhRaZhaydnegZbPQCrENqv', true, false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var index_1611 = objectStore_2.createIndex('index_1611', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3655 = db.transaction(['objectStore_2443'], 'readonly', {durability:"relaxed"})
    var objectStore_2443 = txn_3655.objectStore('objectStore_2443');
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        count_3 = objectStore_2443.count(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', true, true);
        get_2 = objectStore_2443.get(KeyRange_8);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, false);
        getAll_0 = objectStore_2443.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAll_0 = objectStore_2443.getAll(KeyRange_11);
    }

    var getAllKeys_0 = objectStore_2443.getAllKeys(4161816488);
    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        count_4 = objectStore_2443.count(KeyRange_12);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', true);
        count_5 = objectStore_2443.count(KeyRange_14);
    }
    catch (e){
    }

    var count_6 = objectStore_2443.count();
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, true);
        get_3 = objectStore_2443.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, false);
        get_4 = objectStore_2443.get(KeyRange_18);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        get_5 = objectStore_2443.get(KeyRange_20);
    }
    catch (e){
    }

    var count_7 = objectStore_2443.count();
    txn_3655.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3655.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3655.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3656 = db.transaction(['objectStore_2442', 'objectStore_2440'], 'readwrite', {durability:"relaxed"})
    var objectStore_2440 = txn_3656.objectStore('objectStore_2440');
    var add_3 = objectStore_2440.add({f0_k: '<object>'}, 'tvRUzaPxeKahuwxPTAUPGApzADAMBKTgLqCYKHokCtqlNOKndCJjuSBrkjkzYputpKUYtgIBxUYhiFrLqevSHsrJWWcMwpWJlAzoKIUPzELnIQbuznBlKYQSJqQYTIxjUSEJcDGbuBOjyPOpGddkUxNQClshUxxjtElCjuWUPVdWPWYnODTLgNrirAjrqDHjvmjdBlrnDtNhjsvPYMMhDryJvrXgnzTeRKwfxXmzPNTluBEijFDjLPkHfNcBFNIlXhgxPYdYkolqgwWsbAdXyYfgZzMPsURduSyutlPXAhsumoMPCFGlmMXjSTxcdWkatpbsOXBkeXhObvTXfFyuKFLKwarEOJWdLpRfSZRQRgzAfIGRSqXVVWDHmlqDflaeIdTniLvEKNRfGuGjmRUtDikXZUfzMlUewccLbDvwqNPOYmoDObFEjLlhuli');
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.only('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY');
        get_6 = objectStore_2440.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('tvRUzaPxeKahuwxPTAUPGApzADAMBKTgLqCYKHokCtqlNOKndCJjuSBrkjkzYputpKUYtgIBxUYhiFrLqevSHsrJWWcMwpWJlAzoKIUPzELnIQbuznBlKYQSJqQYTIxjUSEJcDGbuBOjyPOpGddkUxNQClshUxxjtElCjuWUPVdWPWYnODTLgNrirAjrqDHjvmjdBlrnDtNhjsvPYMMhDryJvrXgnzTeRKwfxXmzPNTluBEijFDjLPkHfNcBFNIlXhgxPYdYkolqgwWsbAdXyYfgZzMPsURduSyutlPXAhsumoMPCFGlmMXjSTxcdWkatpbsOXBkeXhObvTXfFyuKFLKwarEOJWdLpRfSZRQRgzAfIGRSqXVVWDHmlqDflaeIdTniLvEKNRfGuGjmRUtDikXZUfzMlUewccLbDvwqNPOYmoDObFEjLlhuli', true);
        getAll_1 = objectStore_2440.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY');
        getAll_1 = objectStore_2440.getAll(KeyRange_25);
    }

    var count_8;
    try{
        KeyRange_26 = IDBKeyRange.bound('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY', 'tvRUzaPxeKahuwxPTAUPGApzADAMBKTgLqCYKHokCtqlNOKndCJjuSBrkjkzYputpKUYtgIBxUYhiFrLqevSHsrJWWcMwpWJlAzoKIUPzELnIQbuznBlKYQSJqQYTIxjUSEJcDGbuBOjyPOpGddkUxNQClshUxxjtElCjuWUPVdWPWYnODTLgNrirAjrqDHjvmjdBlrnDtNhjsvPYMMhDryJvrXgnzTeRKwfxXmzPNTluBEijFDjLPkHfNcBFNIlXhgxPYdYkolqgwWsbAdXyYfgZzMPsURduSyutlPXAhsumoMPCFGlmMXjSTxcdWkatpbsOXBkeXhObvTXfFyuKFLKwarEOJWdLpRfSZRQRgzAfIGRSqXVVWDHmlqDflaeIdTniLvEKNRfGuGjmRUtDikXZUfzMlUewccLbDvwqNPOYmoDObFEjLlhuli', false, false);
        count_8 = objectStore_2440.count(KeyRange_26);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY', true);
        get_7 = objectStore_2440.get(KeyRange_28);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY', 'tvRUzaPxeKahuwxPTAUPGApzADAMBKTgLqCYKHokCtqlNOKndCJjuSBrkjkzYputpKUYtgIBxUYhiFrLqevSHsrJWWcMwpWJlAzoKIUPzELnIQbuznBlKYQSJqQYTIxjUSEJcDGbuBOjyPOpGddkUxNQClshUxxjtElCjuWUPVdWPWYnODTLgNrirAjrqDHjvmjdBlrnDtNhjsvPYMMhDryJvrXgnzTeRKwfxXmzPNTluBEijFDjLPkHfNcBFNIlXhgxPYdYkolqgwWsbAdXyYfgZzMPsURduSyutlPXAhsumoMPCFGlmMXjSTxcdWkatpbsOXBkeXhObvTXfFyuKFLKwarEOJWdLpRfSZRQRgzAfIGRSqXVVWDHmlqDflaeIdTniLvEKNRfGuGjmRUtDikXZUfzMlUewccLbDvwqNPOYmoDObFEjLlhuli', true, true);
        get_8 = objectStore_2440.get(KeyRange_30);
    }
    catch (e){
    }

    var getAll_2 = objectStore_2440.getAll(2660412535);
    var count_9 = objectStore_2440.count();
    var get_9;
    try{
        KeyRange_32 = IDBKeyRange.bound('SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY', 'SATnohDpAPeHxwNnJeLmXBIzkNYxgGipnbeJmzoeRCxyuhlwkniiatNEGeMOdTZOaSbWKOKNAwQjoHFUpdMjelobmhqrMekugeHAbTSqGzuoYRMojEFQerSEOcshFPzNcKbOzYlEDPkHWGXankHHMRClTmKqpUXgdkGgwROowFlQKTHGdFmAKgNvoQysacMY', true, true);
        get_9 = objectStore_2440.get(KeyRange_32);
    }
    catch (e){
    }

    var add_4 = objectStore_2440.add({f0_g: '<object>', f1_p: '<number>', f2_h: '<number>', f3_g: '<object>', f4_e: '<boolean>', f5_k: '<object>', f6_y: '<string>', f7_c: '<array>', f8_w: '<array>'}, 'iNscAEsVMkgDKBcahBpVTDFrFueWTOVFeGtjLHsUbmWZAPQhCMfhIiRpoWaWpslNMQlKHVLEjTHvXpDGTJuMiOuKrmcSoulVIMVyCtevAZvBOPvWCAguyernLudAKAZrHokLXFeGYMwTrlIqcbanhOkXElOJjsbrHUEByiggUyimxtKiFproCZpZTBIHnKufQWGgkQKohtAHRHMdxeMuCMmKibDcqtFwZvcZCsJZTNGmjwRYtkGdeCHPeLhtzufbboAmHjgoyynoYIOmzuRWVSUJhWZDcYXliWTuczBeKnzhANWuSeUjQbLmoXRdtqujkNlGXPOvyHGQIP');
    var add_5 = objectStore_2440.add({f0_r: '<null>', f1_d: '<string>', f2_w: '<array>', f3_t: '<null>', f4_i: '<string>', f5_z: '<boolean>', f6_j: '<null>', f7_d: '<string>', f8_o: '<null>', f9_c: '<string>'}, 'uUQHwPfJsDsGrcZbbKwpldKJNIocCSuRiiITiFdRFtHgUayuLlEoFispCTzDQhCXMybXXZtFWmJlmUyKLiCvfFtVvETOHtbyKyPuEyFmJJaUJnTQTTfNaqdcFAqOzZFbrvBQrSHuAQhlmERwKVkGHJaGkbEUcfAoWCwWlIHtlYLSpLgOgxumffilwlVYlKWpOfLKpREWZznOxJwurBDhgRmpmTKKYQJsgVSrlPRCMVhMATBvaSzTuzMcVdrSDZuQPAQSLeRYngGTiAhNoonkDBEOkiIvbeOJKxcRHoWqPBmAtcewYUXfriNKaOBjhlGpJhTZrZTtEEqqxzsIRqEfkcNoQyTfEyyLALWPmKxSqFarhpLmwyNTaVReQeuVrGOeSrJTqKuOdePQBUkACoKdobBxbVtMwHfVbgAKIHNWWgevxcGvSJWxrmLWAUKshrRNLbtiFFRHaXPlRisresmKqUscXyjZSzGBphhGSCijytrsilUqUasPSQTsHcrIPPoqDWJDqiMdwTWaVsmPXfoSOEFXBSyXOZTShQZgvRnpSJRMJVCpNYQSEtFYnloxPWaDcZWUnmkvTIWiGAzqCnHgBsxgzYHLmDMoqgfIzSyskgzdQNPSXUhplmVpkVQlZphfjmLnEgSFgmJFjkjAOOQFnORRPPspwmOcZrrOdGccNBtwdakCLqBrLoFoWELRrHhHKbVyLhYQyeKZlbpEgTyWOAVLOXVDQiWxCfqEFoEUHmjRIKZQmuHKCSSwRnPWKsdvmSvgMLdXuIgnkITtYXmzBxlfiWFGUhLndtNOJYRbTyGBAKDaYZbVJVKPYjJAXClQxIPqerOpSDYyVMpoVjopJVuhXLsZRXzEDDkPyKHjdweEMLVVyykggAdgTaxMfNklXrVTmsSO');
    var add_6 = objectStore_2440.add({f0_w: '<number>', f1_h: '<boolean>', f2_j: '<object>'}, 'LIthRMhYaqeKJrDwoZoZpnVypZAxlYvvgECvYHtbSQwRVAiFAuhGNZyRrZRlLSxlMxSyMzvthkFnSeTjYigrdZvFrLdbAmdJpDWl');
    var add_7 = objectStore_2440.add({f0_s: '<number>', f1_z: '<null>', f2_n: '<boolean>', f3_q: '<array>', f4_a: '<number>', f5_s: '<number>', f6_d: '<null>', f7_y: '<boolean>', f8_p: '<object>', f9_p: '<boolean>', f10_n: '<number>', f11_y: '<number>', f12_i: '<boolean>', f13_e: '<string>', f14_a: '<string>', f15_g: '<null>', f16_s: '<array>', f17_n: '<string>', f18_h: '<boolean>', f19_u: '<boolean>', f20_l: '<number>', f21_q: '<array>', f22_m: '<null>', f23_o: '<array>', f24_s: '<string>', f25_k: '<object>', f26_z: '<object>', f27_y: '<array>', f28_c: '<object>', f29_r: '<null>', f30_m: '<boolean>', f31_u: '<object>', f32_s: '<number>', f33_f: '<string>', f34_a: '<object>', f35_k: '<array>', f36_d: '<array>', f37_m: '<string>', f38_i: '<number>', f39_v: '<array>', f40_j: '<null>', f41_u: '<object>', f42_t: '<object>', f43_x: '<object>', f44_i: '<object>', f45_w: '<null>', f46_i: '<number>', f47_v: '<object>', f48_e: '<number>', f49_p: '<array>', f50_j: '<number>', f51_r: '<number>', f52_p: '<number>', f53_a: '<array>', f54_o: '<object>', f55_m: '<string>', f56_w: '<number>', f57_n: '<object>', f58_k: '<object>', f59_v: '<object>', f60_n: '<null>', f61_q: '<object>', f62_n: '<array>', f63_t: '<object>', f64_j: '<boolean>', f65_c: '<number>', f66_l: '<array>', f67_a: '<object>', f68_y: '<string>', f69_l: '<array>', f70_c: '<boolean>', f71_n: '<object>', f72_o: '<boolean>', f73_s: '<string>', f74_b: '<object>', f75_y: '<boolean>', f76_g: '<object>', f77_v: '<object>', f78_v: '<number>', f79_r: '<string>', f80_z: '<number>', f81_n: '<boolean>', f82_u: '<array>', f83_v: '<array>', f84_e: '<number>', f85_b: '<number>', f86_d: '<number>', f87_h: '<number>', f88_s: '<null>', f89_l: '<string>', f90_p: '<boolean>', f91_k: '<object>', f92_w: '<string>', f93_v: '<null>', f94_z: '<object>', f95_d: '<boolean>', f96_f: '<array>', f97_v: '<number>', f98_p: '<array>', f99_s: '<boolean>', f100_a: '<number>', f101_i: '<number>', f102_s: '<object>', f103_p: '<object>', f104_o: '<number>', f105_i: '<string>', f106_g: '<boolean>', f107_v: '<object>', f108_d: '<boolean>', f109_q: '<null>', f110_o: '<string>', f111_l: '<object>', f112_k: '<array>', f113_y: '<array>', f114_g: '<array>', f115_r: '<array>', f116_y: '<boolean>', f117_v: '<string>', f118_f: '<number>', f119_k: '<string>', f120_a: '<object>', f121_c: '<object>', f122_n: '<string>', f123_w: '<object>', f124_m: '<array>', f125_f: '<boolean>', f126_y: '<array>', f127_a: '<null>', f128_q: '<object>', f129_g: '<null>', f130_h: '<array>', f131_m: '<object>', f132_f: '<string>', f133_v: '<object>', f134_p: '<array>', f135_s: '<object>', f136_b: '<boolean>', f137_p: '<null>', f138_d: '<string>', f139_q: '<boolean>', f140_i: '<null>', f141_y: '<boolean>', f142_v: '<number>', f143_i: '<number>', f144_h: '<array>', f145_y: '<number>', f146_n: '<boolean>', f147_s: '<object>', f148_d: '<object>', f149_v: '<boolean>', f150_j: '<array>', f151_m: '<array>', f152_u: '<object>', f153_v: '<object>', f154_g: '<string>', f155_a: '<boolean>', f156_x: '<null>', f157_o: '<number>', f158_h: '<array>', f159_p: '<number>', f160_e: '<object>', f161_t: '<array>', f162_h: '<string>', f163_g: '<number>', f164_b: '<object>', f165_l: '<number>', f166_g: '<string>', f167_y: '<string>', f168_n: '<boolean>', f169_y: '<boolean>', f170_l: '<null>', f171_t: '<array>', f172_x: '<number>', f173_f: '<string>', f174_l: '<object>', f175_u: '<object>', f176_p: '<string>', f177_x: '<null>', f178_z: '<array>', f179_l: '<null>', f180_c: '<boolean>', f181_k: '<string>', f182_r: '<boolean>', f183_w: '<array>', f184_s: '<object>', f185_z: '<array>', f186_m: '<object>', f187_h: '<array>', f188_d: '<number>', f189_i: '<boolean>', f190_r: '<boolean>', f191_y: '<number>', f192_y: '<object>', f193_t: '<object>', f194_j: '<string>', f195_c: '<number>', f196_o: '<string>', f197_c: '<array>', f198_j: '<string>', f199_v: '<object>', f200_v: '<array>', f201_h: '<null>', f202_f: '<number>', f203_h: '<array>', f204_d: '<string>', f205_w: '<array>', f206_j: '<null>', f207_a: '<boolean>', f208_b: '<boolean>', f209_s: '<array>', f210_t: '<number>', f211_w: '<null>', f212_d: '<array>', f213_w: '<null>', f214_b: '<object>', f215_y: '<null>', f216_p: '<null>', f217_q: '<object>', f218_z: '<boolean>', f219_y: '<boolean>', f220_f: '<boolean>', f221_w: '<array>', f222_t: '<null>', f223_p: '<array>', f224_q: '<number>', f225_i: '<boolean>', f226_s: '<string>', f227_t: '<string>', f228_r: '<null>', f229_g: '<string>', f230_j: '<null>', f231_q: '<number>', f232_g: '<array>', f233_q: '<array>', f234_n: '<null>', f235_b: '<string>', f236_b: '<null>', f237_k: '<object>', f238_q: '<string>', f239_k: '<number>', f240_q: '<null>', f241_w: '<array>', f242_a: '<string>', f243_l: '<array>', f244_g: '<null>', f245_b: '<number>', f246_e: '<number>', f247_u: '<object>', f248_h: '<null>', f249_a: '<object>', f250_k: '<string>', f251_f: '<object>', f252_f: '<boolean>', f253_f: '<null>', f254_w: '<null>', f255_b: '<array>', f256_g: '<object>', f257_i: '<array>', f258_w: '<boolean>', f259_u: '<string>', f260_c: '<null>', f261_z: '<string>', f262_y: '<boolean>', f263_d: '<number>', f264_d: '<string>', f265_j: '<boolean>', f266_w: '<object>', f267_w: '<number>', f268_m: '<object>', f269_w: '<number>', f270_o: '<number>', f271_l: '<string>', f272_p: '<boolean>', f273_b: '<object>', f274_l: '<number>', f275_f: '<array>', f276_b: '<number>', f277_n: '<object>', f278_s: '<number>', f279_e: '<null>', f280_y: '<boolean>', f281_o: '<boolean>', f282_u: '<array>', f283_r: '<boolean>', f284_n: '<object>', f285_c: '<boolean>', f286_g: '<object>', f287_c: '<string>', f288_v: '<null>', f289_x: '<boolean>', f290_i: '<object>', f291_u: '<number>', f292_s: '<null>', f293_p: '<string>', f294_w: '<null>', f295_v: '<object>', f296_a: '<string>', f297_s: '<null>', f298_h: '<string>', f299_e: '<object>', f300_h: '<null>', f301_e: '<null>', f302_q: '<string>', f303_q: '<boolean>', f304_m: '<string>', f305_t: '<null>', f306_f: '<object>', f307_b: '<object>', f308_b: '<object>', f309_b: '<null>', f310_u: '<null>', f311_t: '<boolean>', f312_z: '<string>', f313_n: '<array>', f314_d: '<null>', f315_f: '<number>', f316_i: '<number>', f317_t: '<string>', f318_b: '<array>', f319_f: '<string>', f320_c: '<object>', f321_e: '<null>', f322_a: '<boolean>', f323_i: '<null>', f324_k: '<number>', f325_n: '<object>', f326_d: '<boolean>', f327_u: '<null>', f328_r: '<boolean>', f329_f: '<null>', f330_i: '<number>', f331_k: '<number>', f332_m: '<string>', f333_c: '<array>', f334_b: '<object>', f335_f: '<array>', f336_r: '<array>', f337_j: '<object>', f338_p: '<string>', f339_o: '<object>', f340_y: '<number>', f341_o: '<object>', f342_v: '<number>', f343_d: '<number>', f344_s: '<number>', f345_a: '<boolean>', f346_z: '<number>', f347_a: '<string>', f348_j: '<number>', f349_n: '<array>', f350_f: '<boolean>', f351_j: '<null>', f352_m: '<boolean>', f353_b: '<array>', f354_c: '<number>', f355_v: '<null>', f356_t: '<null>', f357_v: '<string>', f358_q: '<object>', f359_a: '<number>', f360_a: '<string>', f361_p: '<string>', f362_j: '<object>', f363_r: '<array>', f364_w: '<object>', f365_r: '<object>', f366_x: '<object>'}, 'HKjBzuonquFqLIhSbVNjKBaoOTSIhDioRPQAyJLqrVPphkMxeIkUWaGXvRVvvSbjfWdKxIrnbqUYMTIWDSFATchgBneemsBSKbLeDYZPJPcLZeXpzuNcvoVEyHjaghxxjnlArQWpHgMlNLiMUSZyQmIyMSmZPGTFbnPPpaqJgiqELocLmTaZPFCVBfGZPuTHUGLTAcFXAgWgidnsmLvykKAaegHebQNVLlXdzPmDHWakBFIwqhlXLHjIosrpXZSxbzyzUMBjPtrAdFKEolCtiwJJQLwXuiTIIiPccGDWlkKoQzosLSffpQheYInYBZOPsNoyYejczjSFjZevdyCZtqYwDvSToTJhiholRQLhJNSPLyjMLGtFDnIlKftMgruwVPFLJSqiLLDabUzuZssdwUDTkJMATQOSofiaNiEsYJaTtqFtVtNAnIcTOHwDkilUMWHKkRCoSmApnGUkTHnNtQinXFGHXecipOBXkpjhijLswSDHKPlqnJsiAEIoQjURtBqjMHvYRQfTeulYmLzbZQTTkMTouacrgssAWirYLlYquvhcRBEAsYNgLCaxWromcfNcwAVlmlYogiaaXYExZmMRWgLHQouBjrSfAAejTogAteeipqfoXESyDQfFPkyhifotcwHBEKLUEjFoCMAcKuXnbQXNDnGJDXiOHagshiqKgcljMrWkCdvGawojkekXfpCWIBIkyRGRSdrqVleigBxjvgLeleVpGHtCIPUWctsIVNqBLgPgTsfblNiTZNAgmipWYhdeqvjwIkptmWVZTorPJTITItwbTWzhOxzgXhZACvDOzrANdRQ');
    txn_3656.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3656.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3656.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3657 = db.transaction(['objectStore_2442'], 'readonly', {durability:"strict"})
    var objectStore_2442 = txn_3657.objectStore('objectStore_2442');
    txn_3657.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3657.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3657.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3658 = db.transaction(['objectStore_2440', 'objectStore_2443'], 'readonly', {durability:"strict"})
    var objectStore_2443 = txn_3658.objectStore('objectStore_2443');
    var getAllKeys_1;
    try{
        KeyRange_34 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, true);
        getAllKeys_1 = objectStore_2443.getAllKeys(KeyRange_34, 221720673);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAllKeys_1 = objectStore_2443.getAllKeys(KeyRange_35);
    }

    var getAll_3 = objectStore_2443.getAll(3400999978);
    var getAll_4 = objectStore_2443.getAll(1333946506);
    var count_10 = objectStore_2443.count();
    var getAll_5;
    try{
        KeyRange_36 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', true, false);
        getAll_5 = objectStore_2443.getAll(KeyRange_36, 447448625);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAll_5 = objectStore_2443.getAll(KeyRange_37);
    }

    var count_11;
    try{
        KeyRange_38 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, false);
        count_11 = objectStore_2443.count(KeyRange_38);
    }
    catch (e){
    }

    var count_12 = objectStore_2443.count();
    var getAllKeys_2;
    try{
        KeyRange_40 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, false);
        getAllKeys_2 = objectStore_2443.getAllKeys(KeyRange_40, 1873288195);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAllKeys_2 = objectStore_2443.getAllKeys(KeyRange_41);
    }

    var get_10;
    try{
        KeyRange_42 = IDBKeyRange.bound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', true, true);
        get_10 = objectStore_2443.get(KeyRange_42);
    }
    catch (e){
    }

    var count_13 = objectStore_2443.count();
    var getAll_6;
    try{
        KeyRange_44 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAll_6 = objectStore_2443.getAll(KeyRange_44, 2737183072);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj');
        getAll_6 = objectStore_2443.getAll(KeyRange_45);
    }

    txn_3658.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3658.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3658.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3659 = db.transaction(['objectStore_2443'], 'readwrite', {durability:"strict"})
    var objectStore_2443 = txn_3659.objectStore('objectStore_2443');
    var count_14;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false);
        count_14 = objectStore_2443.count(KeyRange_46);
    }
    catch (e){
    }

    var count_15 = objectStore_2443.count();
    var put_3 = objectStore_2443.put({f0_b: '<string>', f1_i: '<string>', f2_r: '<number>', f3_j: '<number>', f4_a: '<array>', f5_x: '<null>', f6_x: '<boolean>'}, 'lleumQubCOqxIr');
    var clear_3 = objectStore_2443.clear();
    var count_16;
    try{
        KeyRange_48 = IDBKeyRange.bound('lleumQubCOqxIr', 'wOlkfqfMDWCQZUtACfzKmbMIKfBlDxOTKyJrxAgzauOxBCfCcdMyxpNntMBnCeGwTcJTkFCidjAOBWWlhZDtOQSSQMIscmqgyLcltjuTChTirQNRwKJNnfeCdMeuilikqHzVSPwlkHNtClTBkWqsGnEzoynWOhzCBKsSJaKuKKxXttqYENFMsWofvmuzkSmapHWnIXlbTxQLmKCVaRMbzulCFNjqfTrZrCtQHEoGMVbzQxYvviSHZEKhrCVBHQrriBcLHUbaTcesekHlCZZvRbApiiYmLlpCdSDYeeFxqbMjpgBZUzdqmEVYZIEMQkxmmmLJBbImXvXteBQCBWRlFCRcbWzTsSaKuYNmdhlOtLMGRZOZsEZRXWCGOZdIqbWdCCnsj', false, false);
        count_16 = objectStore_2443.count(KeyRange_48);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('lleumQubCOqxIr', false);
        count_17 = objectStore_2443.count(KeyRange_50);
    }
    catch (e){
    }

    var put_4 = objectStore_2443.put({f0_u: '<number>', f1_l: '<null>', f2_q: '<number>', f3_p: '<array>', f4_n: '<string>', f5_y: '<array>', f6_h: '<boolean>', f7_f: '<array>', f8_w: '<number>'}, 'wrAsFkLYTZUOHwRXicqvBAKDtnvObCvVgrCqHuZUxZkKNhYuDAOwPYnZUXASTpAVPHptsknIEuyIiftdqojFmKdKZNQMVzvDnhvzILhSEBNzJUCgSelXlclDNbJsqZgtdqLkSupJunvqTLHsVqlqTrHmHzqLqQQhwgcGTLVDbWrLQUDBiZKkNJypiIrGPnTEnxpvACnueDitHxsjBvyyEjKGiyhJXBUNQiRNXNgTYWcSRhtGFdWTNNyCrYHhkRFHcPRvdcdaWCLJAxyCiyRQcCUPzJYIhximMvdQFjgKqfIycBjUCKSPEzUELJJsKvEGEZHdjpUuMHTBAcbXsJTXYOHWuXfSXMayuGsTwBiUkfMSdmeuKxmyTDMvJAqFNvcvdLJBgBCrkwrEOBUCohbdXlThVUtgHhIBkWAILHLaFjJFFqAlTVZmDkvpfWPHUivzqZUcpAjMqTwBrqKNPoMOrNBCvYHOotADIDcZRUgmxwKUogKxgAmYrWdxEqRoIjcWttJGUgQjcxYmByVuCrKPkFAIvSUiGR');
    txn_3659.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3659.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3659.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1615')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};