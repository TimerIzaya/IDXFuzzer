let db;
const openRequest = window.indexedDB.open('str_181', 2748918098652741)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4128', {keypath: 'XXkvOZTcGhWaniORdNfCierPVPFRRstvhQNhsfqaqgFfUpbsbjQzicMHjTRZTLFrftRslyflJHUBZJIkhiIIlXTUBjPpUPqhQXQTVLAtxNAQDXITAmFitHRSTfpOPvwIuHzHfXqVJUNIfZypRTYyfaKGVSOVNJEBTzfXhoHMnxosZKkTJIinObncoYhDvrqiKHIETINxwfnZFScfDHJPyEBbupXUFzOjjQreepSSLpwDQhrcYZeRfuVVmgWZXlsWLyOylCHMfBkrXNSBTcXHImfoogyKyoDZmDYuQpyyNFUHzrFGxDversarhSDIJeGLTNYlRASnmsfFMRMe'});
    var index_2782 = objectStore_0.createIndex('index_2782', 'test', {multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_4129', {autoIncrement: true});
    var index_2783 = objectStore_1.createIndex('index_2783', 'test', {unique: false});
    var index_2784 = objectStore_1.createIndex('index_2784', 'test');
    var index_0 = objectStore_1.index('index_2784');
    var put_0 = objectStore_0.put({f0_a: '<boolean>'}, 'QLGsCNbBVPPajkDeXQQBTbtzhNoeVwHaojIJkJrZaNafxRWFCZJviTxQJNvrJElUUGkJbdHcLhePaAvJvmLmUVMnvXtZuBsMRFKsxXJmwrkGxHkOifjVjSNUrsRpHEsOARaBCQtIZySXHDYQGeoNNbXnUYXYXuGaJfuvQiNLiEXPVCmSaSlAhreAmMMSqarZUawCjvmvYYihYXwCufZFzFbQlzwXVFpEdkxUQjtkzQENHPiwiRxqSFPuotWbMBLiImphUlGYYanYiWBQVhPyGQpHHRwAMsDRErwkSCyXrzFLDFsWeALqrCwHPwSchpZLEDxeHMLfiizElfDVdAYZIecqyNZOaMSFoPUhTWIwnJxFWjcFiiFTwBsTKjfEpsayHzJvotWCuqKLiBVYKqGMbKwZOtzdkXDvgpAwfDfoeuCSlUoIoawTuANucvykDVpqlNyZCxdRZhVhMLiXQuagUAJkxzlvDBHkawAcllBIMETFgXCWwApkkhLaciCNejadjJjbRSvPGmnWOlKRkCPSWLKPdyvUxAuDFytnLiBjtAciVjKXAmbTKafpAQkJUhqtYdgQuEIPwqbhLMDmIvSRFyoLmpVlenGzYtCFhZptFzPixhKSOUhuNhfffCweTeqHdTuVImuarRFJOkDeSnfnOgZmNEqxRkWfMtNcXYBXyVEgKnpZpNEwZLGakMgJPRSAynZRmgLXADRyUoCcnNociFOEAIWNwDXstMdbiqAMJnCecDDQjcRDzaYXDzFqIbITvdxzudUihYbaosEGBcWBMGcqKnfqdSZEUgeCJIuayoGQiXaHUvEBbaYKHHylyecLgKhmetjnrfDAvQzWXToJSlwHccCksjQLvjPPgxENBCjXQfwvouzuolkEIHldFOTrVRVmYYoLcEkQOLzTvLdyUEvOuRylxCiRcgbpm');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('QLGsCNbBVPPajkDeXQQBTbtzhNoeVwHaojIJkJrZaNafxRWFCZJviTxQJNvrJElUUGkJbdHcLhePaAvJvmLmUVMnvXtZuBsMRFKsxXJmwrkGxHkOifjVjSNUrsRpHEsOARaBCQtIZySXHDYQGeoNNbXnUYXYXuGaJfuvQiNLiEXPVCmSaSlAhreAmMMSqarZUawCjvmvYYihYXwCufZFzFbQlzwXVFpEdkxUQjtkzQENHPiwiRxqSFPuotWbMBLiImphUlGYYanYiWBQVhPyGQpHHRwAMsDRErwkSCyXrzFLDFsWeALqrCwHPwSchpZLEDxeHMLfiizElfDVdAYZIecqyNZOaMSFoPUhTWIwnJxFWjcFiiFTwBsTKjfEpsayHzJvotWCuqKLiBVYKqGMbKwZOtzdkXDvgpAwfDfoeuCSlUoIoawTuANucvykDVpqlNyZCxdRZhVhMLiXQuagUAJkxzlvDBHkawAcllBIMETFgXCWwApkkhLaciCNejadjJjbRSvPGmnWOlKRkCPSWLKPdyvUxAuDFytnLiBjtAciVjKXAmbTKafpAQkJUhqtYdgQuEIPwqbhLMDmIvSRFyoLmpVlenGzYtCFhZptFzPixhKSOUhuNhfffCweTeqHdTuVImuarRFJOkDeSnfnOgZmNEqxRkWfMtNcXYBXyVEgKnpZpNEwZLGakMgJPRSAynZRmgLXADRyUoCcnNociFOEAIWNwDXstMdbiqAMJnCecDDQjcRDzaYXDzFqIbITvdxzudUihYbaosEGBcWBMGcqKnfqdSZEUgeCJIuayoGQiXaHUvEBbaYKHHylyecLgKhmetjnrfDAvQzWXToJSlwHccCksjQLvjPPgxENBCjXQfwvouzuolkEIHldFOTrVRVmYYoLcEkQOLzTvLdyUEvOuRylxCiRcgbpm', 'QLGsCNbBVPPajkDeXQQBTbtzhNoeVwHaojIJkJrZaNafxRWFCZJviTxQJNvrJElUUGkJbdHcLhePaAvJvmLmUVMnvXtZuBsMRFKsxXJmwrkGxHkOifjVjSNUrsRpHEsOARaBCQtIZySXHDYQGeoNNbXnUYXYXuGaJfuvQiNLiEXPVCmSaSlAhreAmMMSqarZUawCjvmvYYihYXwCufZFzFbQlzwXVFpEdkxUQjtkzQENHPiwiRxqSFPuotWbMBLiImphUlGYYanYiWBQVhPyGQpHHRwAMsDRErwkSCyXrzFLDFsWeALqrCwHPwSchpZLEDxeHMLfiizElfDVdAYZIecqyNZOaMSFoPUhTWIwnJxFWjcFiiFTwBsTKjfEpsayHzJvotWCuqKLiBVYKqGMbKwZOtzdkXDvgpAwfDfoeuCSlUoIoawTuANucvykDVpqlNyZCxdRZhVhMLiXQuagUAJkxzlvDBHkawAcllBIMETFgXCWwApkkhLaciCNejadjJjbRSvPGmnWOlKRkCPSWLKPdyvUxAuDFytnLiBjtAciVjKXAmbTKafpAQkJUhqtYdgQuEIPwqbhLMDmIvSRFyoLmpVlenGzYtCFhZptFzPixhKSOUhuNhfffCweTeqHdTuVImuarRFJOkDeSnfnOgZmNEqxRkWfMtNcXYBXyVEgKnpZpNEwZLGakMgJPRSAynZRmgLXADRyUoCcnNociFOEAIWNwDXstMdbiqAMJnCecDDQjcRDzaYXDzFqIbITvdxzudUihYbaosEGBcWBMGcqKnfqdSZEUgeCJIuayoGQiXaHUvEBbaYKHHylyecLgKhmetjnrfDAvQzWXToJSlwHccCksjQLvjPPgxENBCjXQfwvouzuolkEIHldFOTrVRVmYYoLcEkQOLzTvLdyUEvOuRylxCiRcgbpm', true, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_4130');
    var put_1 = objectStore_2.put({f0_w: '<number>', f1_q: '<boolean>', f2_e: '<array>', f3_e: '<array>', f4_r: '<array>', f5_f: '<array>', f6_k: '<array>', f7_l: '<array>', f8_t: '<string>', f9_s: '<null>', f10_m: '<string>', f11_e: '<number>', f12_l: '<boolean>', f13_o: '<null>', f14_f: '<string>', f15_m: '<number>', f16_w: '<boolean>', f17_p: '<string>', f18_z: '<number>', f19_t: '<string>', f20_u: '<number>', f21_v: '<number>', f22_s: '<boolean>', f23_g: '<null>', f24_x: '<boolean>', f25_r: '<number>', f26_p: '<number>', f27_d: '<string>', f28_z: '<string>', f29_z: '<null>', f30_v: '<object>', f31_v: '<null>', f32_f: '<array>', f33_s: '<array>', f34_i: '<string>', f35_n: '<string>', f36_a: '<null>', f37_x: '<object>', f38_l: '<boolean>', f39_b: '<object>', f40_l: '<number>', f41_r: '<object>', f42_a: '<number>', f43_q: '<string>', f44_p: '<boolean>', f45_q: '<object>', f46_w: '<null>', f47_n: '<array>', f48_p: '<number>', f49_v: '<array>', f50_u: '<array>', f51_w: '<boolean>', f52_a: '<string>', f53_h: '<boolean>', f54_u: '<object>', f55_b: '<string>', f56_k: '<null>', f57_q: '<number>', f58_j: '<number>', f59_h: '<object>', f60_v: '<object>', f61_r: '<number>', f62_r: '<number>', f63_f: '<number>', f64_o: '<object>', f65_b: '<number>', f66_v: '<array>', f67_l: '<string>', f68_f: '<null>', f69_e: '<null>', f70_u: '<number>', f71_w: '<boolean>', f72_g: '<string>', f73_u: '<number>', f74_p: '<object>', f75_g: '<string>', f76_j: '<null>', f77_q: '<object>', f78_w: '<array>', f79_b: '<object>', f80_h: '<array>', f81_b: '<boolean>', f82_c: '<null>', f83_h: '<number>', f84_j: '<boolean>', f85_m: '<object>', f86_z: '<object>', f87_h: '<null>', f88_s: '<array>', f89_s: '<null>', f90_a: '<number>', f91_o: '<boolean>', f92_t: '<object>', f93_d: '<number>', f94_l: '<null>', f95_p: '<boolean>', f96_k: '<null>', f97_h: '<number>', f98_u: '<array>', f99_e: '<boolean>', f100_y: '<boolean>', f101_m: '<array>', f102_k: '<string>', f103_a: '<string>', f104_l: '<array>', f105_h: '<array>', f106_m: '<boolean>', f107_o: '<null>', f108_g: '<string>', f109_s: '<object>', f110_v: '<number>', f111_g: '<string>', f112_n: '<null>', f113_o: '<string>', f114_n: '<null>', f115_z: '<null>', f116_d: '<boolean>', f117_b: '<number>', f118_w: '<null>', f119_q: '<string>', f120_u: '<boolean>', f121_s: '<null>', f122_t: '<boolean>', f123_b: '<null>', f124_s: '<boolean>', f125_w: '<null>', f126_m: '<null>', f127_g: '<string>', f128_x: '<boolean>', f129_o: '<boolean>', f130_d: '<string>', f131_u: '<object>', f132_n: '<null>', f133_b: '<array>', f134_n: '<boolean>', f135_w: '<array>', f136_r: '<null>', f137_t: '<object>', f138_c: '<string>', f139_u: '<object>', f140_v: '<array>', f141_u: '<object>', f142_h: '<null>', f143_r: '<object>', f144_t: '<null>', f145_b: '<number>', f146_o: '<string>', f147_n: '<object>', f148_w: '<number>', f149_m: '<object>', f150_x: '<number>', f151_c: '<number>', f152_x: '<object>', f153_r: '<array>', f154_s: '<object>', f155_n: '<number>', f156_q: '<string>', f157_q: '<string>', f158_n: '<string>', f159_v: '<number>', f160_i: '<object>', f161_d: '<null>', f162_z: '<array>', f163_j: '<object>', f164_y: '<boolean>', f165_c: '<boolean>', f166_k: '<string>', f167_j: '<string>', f168_v: '<object>', f169_y: '<array>', f170_p: '<string>', f171_r: '<string>', f172_r: '<boolean>', f173_g: '<boolean>', f174_n: '<number>', f175_y: '<array>', f176_i: '<boolean>', f177_k: '<object>', f178_a: '<array>', f179_h: '<null>', f180_j: '<object>', f181_v: '<object>', f182_j: '<string>', f183_r: '<number>', f184_c: '<array>', f185_a: '<number>', f186_u: '<array>', f187_a: '<array>', f188_o: '<string>', f189_n: '<number>', f190_d: '<boolean>', f191_v: '<array>', f192_e: '<object>', f193_r: '<boolean>', f194_z: '<boolean>', f195_w: '<array>'}, 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE');
    var objectStore_3 = db.createObjectStore('objectStore_4131');
    var index_2785 = objectStore_0.createIndex('index_2785', 'test', {multiEntry: true});
    var clear_1 = objectStore_1.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6190 = db.transaction(['objectStore_4130'], 'readonly', {durability:"relaxed"})
    var objectStore_4130 = txn_6190.objectStore('objectStore_4130');
    var count_1 = objectStore_4130.count();
    var count_2;
    try{
        KeyRange_2 = IDBKeyRange.only('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE');
        count_2 = objectStore_4130.count(KeyRange_2);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', true, false);
        get_0 = objectStore_4130.get(KeyRange_4);
    }
    catch (e){
    }

    var count_3 = objectStore_4130.count();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', false, false);
        get_1 = objectStore_4130.get(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_4130.getAllKeys();
    var getAllKeys_1 = objectStore_4130.getAllKeys();
    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', false, true);
        getAll_0 = objectStore_4130.getAll(KeyRange_8, 3930441675);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE');
        getAll_0 = objectStore_4130.getAll(KeyRange_9);
    }

    txn_6190.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6190.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6190.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6191 = db.transaction(['objectStore_4130'], 'readonly', {durability:"relaxed"})
    var objectStore_4130 = txn_6191.objectStore('objectStore_4130');
    var count_4;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', true);
        count_4 = objectStore_4130.count(KeyRange_10);
    }
    catch (e){
    }

    var getAll_1 = objectStore_4130.getAll();
    var count_5;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', false);
        count_5 = objectStore_4130.count(KeyRange_12);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', false, true);
        get_2 = objectStore_4130.get(KeyRange_14);
    }
    catch (e){
    }

    var getAll_2 = objectStore_4130.getAll();
    var getAll_3 = objectStore_4130.getAll(220261335);
    var count_6;
    try{
        KeyRange_16 = IDBKeyRange.bound('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', 'QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE', false, true);
        count_6 = objectStore_4130.count(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_4130.getAllKeys();
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.only('QQuhQEJXchXovdpxrqrEWoPmhUeqUTSJODndRbifNasKPeNvkLHErSaOhnjpAFJaLrJgfTioraeGbsLtktaLphgiOFUpFcJxqtuoJMbfZREulWwjBXkMfZjQIqgoXqvRwTVnrmekQArukKrAXyMprrubliCRHXzrPtHQyujwjPFHyuNRkCCfJyFEpGRRcwqQyZgOyDcaexeaAYzAMaexjJuUkPeZXRUmAVbnxwFpqQHMEjWIxuVaKFBUbONwnsKSxvvggQhjORsgDTenotPJZeJoDOTKzoMenDHnviXvSVlpsZeGHAiQDavoVKaMuGmMcTFBZVudKgDBdmQumpWAORcnYaeAUgZvqQYTgmEmqafCBZqjaCGPvHGnGDzlrWyIufFiXQqEkpNnunGviycaRAprIwURUXqRLJnNSaYOSoyhRRtADVRUrQdDmKnRKZWtabgSggbbWdPEDaVOismqHOQpQeUuxsMvLGxeXEMVsWUFGXXlFXFqnBUwwPRjIdGGjNoKSHNCknYvKMQTcLfzmsYvToLDVObIEkmYxDLdPgszTnUuKMDEAhFZLpDoWmJabXtIWWcCdCiaRTaStBRJPSRVUWOhOCwjHKiQVdvXIzFIEmQzaTCwatLVqGCFIBtfzpapdDqanTurqebAqGONhxfMfHCLwJyTKHnxVhCcAzDGpWQiTDuSExhyQhUTiQDrisDlOVlXHFbgPqmMFEVipdGfydXkmjRvGnZfCfqzaVUOJdLNKyYQtinGsOanscYFPWxZlomaRnoqzjqRtEohsaHDfkQlmomnWPLeDivKxsnSspOxIXnzMoHiAWJOLHUJTwXVvACBBKzRNMddgNZkCtiTuoliSCdRRQFopXzPfEqRnUxBWxqxgHLRWOoFwzrdDiseXHsAiQOLQnzCvPHMzOOzlLHLrcbhMAsxjnBzDZCvWqvNzqUejoFaaFpkUIxEDMBsozthhCvTkzhEesxHrBEbBgsPboACssIZE');
        get_3 = objectStore_4130.get(KeyRange_18);
    }
    catch (e){
    }

    var count_7 = objectStore_4130.count();
    txn_6191.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6191.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6191.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6192 = db.transaction(['objectStore_4130', 'objectStore_4128', 'objectStore_4129'], 'readwrite', {durability:"relaxed"})
    var objectStore_4130 = txn_6192.objectStore('objectStore_4130');
    var add_0 = objectStore_4130.add({f0_t: '<boolean>', f1_t: '<string>', f2_y: '<null>', f3_p: '<number>', f4_g: '<number>', f5_q: '<object>'}, 'vZIusTYPgcNfQJbGLyliTCrrcpGKijKmbLPnMeJWsxUAxWLVcxkSJAsRtzwizXYxGXDGlXaUcjzbNdFNoFFmBdcVgAwCfUPXUBghduiEflizsisZxFHYDjzGgHUPOpEGTZtJSYCSNCxfsCMZtEWmBQvjEyFFbjeFbUDRyVLyReSYfDRJsxuklwphpaatijsCutxNJTmjWjtsSeWgGoadGmSltFUmpnLZKQETpjgYkshekJJBHqPXcvYxrwlrpCINBdazHAxZAhIJgABmQUlUJkkYKrOJgPypBbPdMuZXXpSyXhIsTMFvJgIubcuFdRhqUrVWLfEXihRaJpaXrUYoCTtFHAqXszFZuiHSyUcJNfNJbFHzNGwTNJPNGYvnpMUwaIvMXGUzKoWqSibslSPukWpfxwlhLBfDqVHhsqlyOZjIfLAJNwzDuCZQXlXWXhUvMziJBkmRLpoIrBPleTjAfHKaeFRWsfRUZHrjfZeFnrjdoioMYdQIferoATAkSzziScSejnXKXjtsEAspEzGcHaNtNsIaFdZdJPSEDTWAOXPlhnHcePdyQZvFQTxmpJmiCIrvaCacXksdTGNHwWoKuLdSliERDEuSUgvxYfKfOwfbmFrpkGlmQBRjakF');
    var getAll_4 = objectStore_4130.getAll();
    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('vZIusTYPgcNfQJbGLyliTCrrcpGKijKmbLPnMeJWsxUAxWLVcxkSJAsRtzwizXYxGXDGlXaUcjzbNdFNoFFmBdcVgAwCfUPXUBghduiEflizsisZxFHYDjzGgHUPOpEGTZtJSYCSNCxfsCMZtEWmBQvjEyFFbjeFbUDRyVLyReSYfDRJsxuklwphpaatijsCutxNJTmjWjtsSeWgGoadGmSltFUmpnLZKQETpjgYkshekJJBHqPXcvYxrwlrpCINBdazHAxZAhIJgABmQUlUJkkYKrOJgPypBbPdMuZXXpSyXhIsTMFvJgIubcuFdRhqUrVWLfEXihRaJpaXrUYoCTtFHAqXszFZuiHSyUcJNfNJbFHzNGwTNJPNGYvnpMUwaIvMXGUzKoWqSibslSPukWpfxwlhLBfDqVHhsqlyOZjIfLAJNwzDuCZQXlXWXhUvMziJBkmRLpoIrBPleTjAfHKaeFRWsfRUZHrjfZeFnrjdoioMYdQIferoATAkSzziScSejnXKXjtsEAspEzGcHaNtNsIaFdZdJPSEDTWAOXPlhnHcePdyQZvFQTxmpJmiCIrvaCacXksdTGNHwWoKuLdSliERDEuSUgvxYfKfOwfbmFrpkGlmQBRjakF', false);
        count_8 = objectStore_4130.count(KeyRange_20);
    }
    catch (e){
    }

    var clear_2 = objectStore_4130.clear();
    var clear_3 = objectStore_4130.clear();
    var count_9 = objectStore_4130.count();
    var clear_4 = objectStore_4130.clear();
    var clear_5 = objectStore_4130.clear();
    txn_6192.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6192.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6192.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6193 = db.transaction(['objectStore_4129', 'objectStore_4130', 'objectStore_4128'], 'readonly', {durability:"strict"})
    var objectStore_4129 = txn_6193.objectStore('objectStore_4129');
    txn_6193.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6193.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6193.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6194 = db.transaction(['objectStore_4129'], 'readonly', {durability:"relaxed"})
    var objectStore_4129 = txn_6194.objectStore('objectStore_4129');
    txn_6194.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6194.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6194.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2842')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};