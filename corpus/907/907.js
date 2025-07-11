let db;
const openRequest = window.indexedDB.open('str_7300', 430187152719601)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5375', {autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_j: '<boolean>', f1_i: '<array>', f2_a: '<number>', f3_g: '<number>', f4_r: '<boolean>', f5_w: '<null>'}, 'dfyCXndllRKYbgljYYRSnrpWKBRjMnzySkaLuRhkbTZghRXMGIPVHReRoqMCjvAOyUhDhyyosLKjTIlYCMgTltZPrEFDexDgjGaGbbNXxtDHnPprAPivmtLrIDOURJHuWgtZUmHLahzRjNKQDQwYaMmZzHISJNCIxuRXvADIPISWCSKKTLVAgcqcofJnYkJsUBbYTvEdDfmEzQEaiiTJURoCcWECwezlBTvslocMKWbILsyUcgSPrfnbPPZKBAxcKeibTvgFRyiVTWbPbcEHrMaUzxOXiPsqTPRZucZLSZUKgAIOgmugWOdGKEoFHdKMTaGxHzYJKVbNZDsOKjJhRGirJmSTvGNahCMcnbxKvDywXfcqELHAaiQzVsUEsssidNAQufceDrruinGPUKrjOVxznVmDVxxileanYcehDtGEknUrWJamiuqjBMHSxmFpkpqESawkegKXSPtvtbNkKecgedpRJuqsPixYNfINzhnUCjTJyRSwuGpLvTWCRgCXsfbbXAJcZveEDbVOVMKXslWjPrvOvKzopBfXGFxAtaBCyixpOJcsHsCBnKMQysUbqbZZshFCENdUFmMqcwYdYyFQdVktGTFMDrfVFMvWTMkoWAhbHmVY');
    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_w: '<array>', f1_v: '<number>'}, 'otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu');
    var clear_2 = objectStore_0.clear();
    var index_3603 = objectStore_0.createIndex('index_3603', 'test');
    var index_3604 = objectStore_0.createIndex('index_3604', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_5376', {autoIncrement: true});
    var add_1 = objectStore_0.add({f0_z: '<null>', f1_f: '<array>', f2_p: '<null>', f3_f: '<number>', f4_t: '<null>', f5_m: '<string>', f6_w: '<number>', f7_t: '<null>', f8_g: '<object>', f9_p: '<boolean>', f10_t: '<array>', f11_d: '<number>', f12_h: '<null>', f13_x: '<string>', f14_v: '<string>', f15_j: '<number>', f16_a: '<number>', f17_n: '<boolean>', f18_k: '<object>', f19_r: '<number>', f20_y: '<array>', f21_i: '<string>', f22_q: '<array>', f23_a: '<boolean>', f24_t: '<array>', f25_k: '<number>', f26_u: '<string>', f27_u: '<object>', f28_v: '<array>', f29_q: '<string>', f30_e: '<null>', f31_h: '<string>', f32_f: '<string>', f33_l: '<array>', f34_r: '<string>', f35_a: '<object>', f36_t: '<boolean>', f37_c: '<number>', f38_u: '<number>', f39_a: '<object>', f40_z: '<null>', f41_s: '<boolean>', f42_j: '<boolean>', f43_e: '<null>', f44_x: '<array>', f45_s: '<object>', f46_l: '<boolean>', f47_z: '<null>', f48_p: '<string>', f49_m: '<array>', f50_a: '<string>', f51_s: '<boolean>', f52_e: '<boolean>', f53_n: '<array>', f54_i: '<array>', f55_s: '<number>', f56_c: '<null>', f57_g: '<boolean>', f58_c: '<string>', f59_r: '<boolean>', f60_f: '<null>', f61_u: '<boolean>', f62_k: '<object>', f63_q: '<array>', f64_p: '<number>', f65_a: '<array>', f66_f: '<null>', f67_j: '<string>', f68_h: '<string>', f69_p: '<boolean>', f70_w: '<boolean>', f71_e: '<string>', f72_j: '<boolean>', f73_r: '<string>', f74_w: '<array>', f75_s: '<number>', f76_u: '<null>', f77_l: '<null>', f78_q: '<null>', f79_h: '<array>', f80_g: '<boolean>', f81_i: '<number>', f82_d: '<string>', f83_d: '<null>', f84_w: '<boolean>', f85_x: '<object>', f86_p: '<array>', f87_y: '<null>', f88_q: '<object>', f89_z: '<null>', f90_f: '<boolean>', f91_i: '<array>', f92_m: '<array>', f93_x: '<null>', f94_u: '<string>', f95_j: '<string>', f96_w: '<null>', f97_s: '<boolean>', f98_x: '<array>', f99_p: '<string>', f100_v: '<null>', f101_h: '<null>', f102_w: '<number>', f103_o: '<object>', f104_y: '<boolean>', f105_b: '<null>', f106_b: '<object>', f107_i: '<null>', f108_t: '<string>', f109_p: '<array>', f110_e: '<number>', f111_n: '<object>', f112_n: '<number>', f113_g: '<array>', f114_r: '<null>', f115_h: '<array>', f116_g: '<string>', f117_k: '<boolean>', f118_a: '<object>', f119_n: '<boolean>', f120_m: '<number>', f121_j: '<array>', f122_l: '<null>', f123_k: '<string>', f124_c: '<null>', f125_b: '<number>', f126_w: '<object>', f127_r: '<number>', f128_n: '<array>', f129_l: '<boolean>', f130_p: '<boolean>', f131_n: '<array>', f132_j: '<array>', f133_z: '<number>', f134_n: '<boolean>', f135_n: '<array>', f136_p: '<string>', f137_u: '<null>', f138_y: '<boolean>', f139_o: '<boolean>', f140_g: '<object>', f141_g: '<array>', f142_f: '<string>', f143_s: '<boolean>', f144_x: '<null>', f145_t: '<null>', f146_v: '<object>', f147_s: '<string>', f148_z: '<null>', f149_j: '<string>', f150_n: '<boolean>', f151_i: '<object>', f152_x: '<object>', f153_t: '<string>', f154_s: '<number>', f155_g: '<null>', f156_o: '<string>', f157_m: '<null>', f158_r: '<object>', f159_t: '<boolean>', f160_q: '<boolean>', f161_c: '<null>', f162_y: '<object>', f163_l: '<object>', f164_i: '<null>', f165_s: '<boolean>', f166_w: '<array>', f167_h: '<object>', f168_x: '<object>', f169_y: '<array>', f170_c: '<number>', f171_d: '<boolean>', f172_h: '<array>', f173_e: '<number>', f174_b: '<object>', f175_u: '<number>', f176_m: '<array>', f177_x: '<object>', f178_k: '<null>', f179_n: '<number>', f180_m: '<number>', f181_p: '<null>', f182_j: '<array>', f183_l: '<null>', f184_w: '<null>', f185_p: '<object>', f186_d: '<number>', f187_x: '<array>', f188_x: '<object>', f189_c: '<boolean>', f190_s: '<array>', f191_i: '<array>', f192_j: '<number>', f193_k: '<object>', f194_d: '<string>', f195_z: '<object>', f196_t: '<object>', f197_i: '<null>', f198_f: '<object>', f199_y: '<array>', f200_y: '<number>', f201_o: '<string>', f202_z: '<object>', f203_a: '<null>', f204_y: '<object>', f205_k: '<array>', f206_r: '<object>', f207_k: '<object>', f208_q: '<number>', f209_p: '<boolean>', f210_i: '<object>', f211_s: '<string>', f212_u: '<null>', f213_f: '<array>', f214_p: '<number>', f215_u: '<string>', f216_q: '<null>', f217_j: '<null>', f218_y: '<string>', f219_p: '<null>', f220_v: '<object>', f221_a: '<number>', f222_x: '<array>', f223_i: '<array>', f224_b: '<object>', f225_c: '<number>', f226_x: '<object>', f227_g: '<object>', f228_l: '<number>', f229_h: '<number>', f230_c: '<number>', f231_c: '<boolean>', f232_a: '<array>', f233_l: '<string>', f234_g: '<string>', f235_b: '<string>', f236_v: '<null>', f237_k: '<string>', f238_f: '<object>', f239_q: '<null>', f240_p: '<string>', f241_d: '<array>', f242_g: '<object>', f243_y: '<number>', f244_p: '<boolean>', f245_p: '<number>', f246_c: '<array>', f247_q: '<null>', f248_o: '<string>', f249_l: '<null>', f250_d: '<array>', f251_r: '<string>', f252_n: '<number>', f253_t: '<null>', f254_p: '<array>', f255_e: '<boolean>', f256_o: '<null>', f257_y: '<null>', f258_q: '<null>', f259_m: '<null>', f260_o: '<boolean>', f261_m: '<number>', f262_e: '<string>', f263_c: '<boolean>', f264_w: '<null>', f265_z: '<object>', f266_f: '<number>'}, 'ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj');
    var put_1 = objectStore_0.put({f0_t: '<null>', f1_o: '<null>', f2_f: '<null>', f3_i: '<string>', f4_e: '<array>', f5_i: '<array>', f6_v: '<array>', f7_i: '<array>', f8_v: '<number>'}, 'HkvxNgdLcoYnIwaeCX');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8130 = db.transaction(['objectStore_5375'], 'readonly', {durability:"default"})
    var objectStore_5375 = txn_8130.objectStore('objectStore_5375');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu');
        get_0 = objectStore_5375.get(KeyRange_0);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', true);
        get_1 = objectStore_5375.get(KeyRange_2);
    }
    catch (e){
    }

    var index_0 = objectStore_5375.index('index_3604');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', false);
        get_2 = objectStore_5375.get(KeyRange_4);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.only('HkvxNgdLcoYnIwaeCX');
        get_3 = objectStore_5375.get(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_5375.getAllKeys(175131033);
    var count_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', true);
        count_0 = objectStore_5375.count(KeyRange_8);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', 'otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', false, false);
        get_4 = objectStore_5375.get(KeyRange_10);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', 'ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', true, true);
        get_5 = objectStore_5375.get(KeyRange_12);
    }
    catch (e){
    }

    txn_8130.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8130.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8130.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8131 = db.transaction(['objectStore_5375', 'objectStore_5376'], 'readonly', {durability:"relaxed"})
    var objectStore_5375 = txn_8131.objectStore('objectStore_5375');
    var get_6;
    try{
        KeyRange_14 = IDBKeyRange.bound('HkvxNgdLcoYnIwaeCX', 'otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', false, false);
        get_6 = objectStore_5375.get(KeyRange_14);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_16 = IDBKeyRange.only('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu');
        count_1 = objectStore_5375.count(KeyRange_16);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_18 = IDBKeyRange.bound('dfyCXndllRKYbgljYYRSnrpWKBRjMnzySkaLuRhkbTZghRXMGIPVHReRoqMCjvAOyUhDhyyosLKjTIlYCMgTltZPrEFDexDgjGaGbbNXxtDHnPprAPivmtLrIDOURJHuWgtZUmHLahzRjNKQDQwYaMmZzHISJNCIxuRXvADIPISWCSKKTLVAgcqcofJnYkJsUBbYTvEdDfmEzQEaiiTJURoCcWECwezlBTvslocMKWbILsyUcgSPrfnbPPZKBAxcKeibTvgFRyiVTWbPbcEHrMaUzxOXiPsqTPRZucZLSZUKgAIOgmugWOdGKEoFHdKMTaGxHzYJKVbNZDsOKjJhRGirJmSTvGNahCMcnbxKvDywXfcqELHAaiQzVsUEsssidNAQufceDrruinGPUKrjOVxznVmDVxxileanYcehDtGEknUrWJamiuqjBMHSxmFpkpqESawkegKXSPtvtbNkKecgedpRJuqsPixYNfINzhnUCjTJyRSwuGpLvTWCRgCXsfbbXAJcZveEDbVOVMKXslWjPrvOvKzopBfXGFxAtaBCyixpOJcsHsCBnKMQysUbqbZZshFCENdUFmMqcwYdYyFQdVktGTFMDrfVFMvWTMkoWAhbHmVY', 'HkvxNgdLcoYnIwaeCX', false, true);
        getAll_0 = objectStore_5375.getAll(KeyRange_18, 2061187975);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj');
        getAll_0 = objectStore_5375.getAll(KeyRange_19);
    }

    var get_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', 'ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', false, false);
        get_7 = objectStore_5375.get(KeyRange_20);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('HkvxNgdLcoYnIwaeCX', false);
        get_8 = objectStore_5375.get(KeyRange_22);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('HkvxNgdLcoYnIwaeCX', 'HkvxNgdLcoYnIwaeCX', true, false);
        get_9 = objectStore_5375.get(KeyRange_24);
    }
    catch (e){
    }

    var index_1 = objectStore_5375.index('index_3604');
    var count_2 = objectStore_5375.count();
    var getAllKeys_1;
    try{
        KeyRange_26 = IDBKeyRange.bound('HkvxNgdLcoYnIwaeCX', 'ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', true, true);
        getAllKeys_1 = objectStore_5375.getAllKeys(KeyRange_26, 1948966837);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu');
        getAllKeys_1 = objectStore_5375.getAllKeys(KeyRange_27);
    }

    txn_8131.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8131.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8131.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8132 = db.transaction(['objectStore_5375'], 'readwrite', {durability:"default"})
    var objectStore_5375 = txn_8132.objectStore('objectStore_5375');
    var add_2 = objectStore_5375.add({f0_z: '<string>', f1_b: '<string>', f2_u: '<object>', f3_v: '<array>', f4_o: '<object>', f5_q: '<number>', f6_g: '<object>'}, 'bitHcKpzBIqMHiMAganoLeyDQLiYneSPPeyCLNnnjRaCjySDnjVsMfnraoujnqyHQaIHpDbqkUvvtzncMZDqeRspwKjaiABpbULxzNyetWxIFGvgdiThSAeTPfueYqQFkuwYusYrMyiitpbHZAulyLTfPoAhQzbthJGLjauhIzNRaBmAUZxfePAsmCHagPbUPxdJQcXhxJAlShxqfJBLwZPbqroQelvSpjbyFlxsAKjDWopapEOtYxPseeOSNOTTEdjFETzztngklTjSoSXDGKIDdghtjNRPgIzhEvBDcImRlMMoiszypIiUWicQFYsTViwKXnaiprHxXWkbbAEMZZrgjJCEIAbkpGiGbXMFgvSvNdMjoIVUclEqsNBsRBHdJfXuDHrvenhyotwdGNJcmGfouqouuFPsiDdeUpElGxPOZlSiHboHGqDKmhiYFoDXXXAVPJtqWStyHUCVUtBTSfFXXkkvXeIwvHemyMWUZeFfLzXlwMWIQWQTsDtNuYkTUGXgpQlenzlEJfJpqIgCYpudzNPbhBpUNskSlPghrMPNTYxBsbAUSIuAKSOYWfCNTrerLnfDImKMAdriMqzwAEtDHubIGyQBaRQbKfrSghVZHIBEYScmWUKjJHUyhHVERFxrKaazwpQgIElgwPCPoLPsSrRfqoCNdWJsFWtErjbiCwpSBrVKPyUvAZkqwOqtUkabauDCclCBsusaNqAKmGffqCdcLWFlWMBfuDsDesRgXvaAujSZRhVqanjRBFLGvQqbEfGocrEAnVnAGWwzAGrxpeIwJcKvnVHLLzYlyoHIlzzBBWxMizHXCyKXWIlXPbtOYBdHauWlLIifjfzbtZqcocZnEJiElMEakRmWQEbmLFQkfmaIZGbuEjgWDAVmnSMMeMiCTedVTDORdOIwkZUSqwVmtpClgunSpgRtUAwOmLTwGekreJFGzqNwLbOkzeorYVzvyJpyJVvneie');
    var count_3;
    try{
        KeyRange_28 = IDBKeyRange.only('HkvxNgdLcoYnIwaeCX');
        count_3 = objectStore_5375.count(KeyRange_28);
    }
    catch (e){
    }

    var clear_3 = objectStore_5375.clear();
    var get_10;
    try{
        KeyRange_30 = IDBKeyRange.bound('otCgHRZCvidnTeTyTasEnUaMIOstvahVndKzoQjoyaeoTPesWjezOfCkUfPnODXBRMwzMsQBhurDLubHJHdPhqDlgcbyOxEMqpiqlwkdnXVXtuwrlGOELmFlthADhKrfJzyZBYrESrbiBtTebVBGFwygRxkCzOzBGrAGfIeloBtrxJiLdqOXUkgERPjsboBoELDjjWMNrLfmuiicBywjobgiLiEbTvCXNjPGcKFzBWxWwDCPidNgPkKaPHoHacstmbwYpnXKWwjmgVGIfsDRtRNsetEpEOqwstuzWuKBrayLicbweYPlUkTqNxQaiYbylutFLmJHVjkjPkNpmfCDCuydiboZbXGbYTsDPblpHgmFAaAUDwdhojIzLOvkXMCzLpAsLuRERbQsTEPGcLFoIOlXwoGpYHkvqsRfzGKhnBCrXkpUAFiPsspOTNhpqTBOlbzZXInBhiEcKowSWuiFjmFFatZUeuTwYuMUicjhKkELZBlnRchzPjoCVgWvoobfKLQCZkvaigKuwNKysZXrnHtxbKfHzlBrQcTGaBXirMBMVWAHWAFglrgnMOkjiRTuyrYsbkUmAcvPivzZRgTCsCzoMxkePFyUyVNkUfDPSDwiULzgmtFdcDZLiVzAnFqVEtCjnlthzVJoByknDvoGeJcbu', 'ytblcfZTnQWHDXquSwccIRDRRSnsfccpyfQuesuGumbJjEWggnFnMFWDMmDbziwcILXvaqbIXIwTWukDcwVaQEdIRtPcHVDluvMUykyBTWFOQsorFNtSuRVgLUbxNwwhviuypJroEWsDCsXGcVSGKTRDllQYtPUTVtPyYEOLEtLWGovOcSUractdvCyyYyIkGmiKyytOzpsSwtbxMecsupDnVOunBLFNUJFKTYLtaVDUKHWyKxKcXjuumozrbIzEAAIGQWrsJYeNEsSRnFqdqtUnemdmvQBNJGoAxgzNJKoGmiMYFWXunnvLlAOZzFzlbleASFuqeDIVVITfDCxhxxCUdVQiNrnVKlcBaZqGQiMfMflxepxjIIlVRyGpLCvOvDRfGsnRerRwqzEaqqjVIWybbBhsAOQXGuzeDyEHQnlgARgRkMYYYSWbUqglOlmKGROXGxQjxnzYGkGAjFChZRQVdLYpsJkoWaElWaAuoVLVSgmghSSNtYoBPpCSIMQGIlYegbqqcOsBTrDceThVVOjYJoQPuuVTceuCVgmLrykMTHJCj', true, true);
        get_10 = objectStore_5375.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_4 = objectStore_5375.clear();
    var getAllKeys_2 = objectStore_5375.getAllKeys();
    var add_3 = objectStore_5375.add({f0_b: '<boolean>'}, 'oKfzZRRBGmZyWlocCIQSKDLLVGYFiAqakoRTCsQcwjZmyVunzIiAKlsvmWciEjpXlDXxoVCHJIQyUnEiQEjHTJMsFPaKWQTOJNTZbkJStmjcnoGMJDsZEFsqhgQMyXEafDFtIVFWtmZWMcsjkrpNvYEYkNCPBkmQjzGBltphrLgBxKlxOrFUOxzaCnNeJliBOjhYDIsWrIpwcVMfyCMsErZLitrMkxksICTYOXMEiDnHJoSjOJCcNaJRcHbiAQgVhIIHaiJugxZownonYVVrAIjzFkRluQosNBmmqOpQsuPkyyVQSaFnWfboOaCWCAdcfzXSTHNipOCkThYfNlRGQpAXeiwGiJRfZeHqsfzJSHYFKsuQNkQDYHJXtsPYNIlQaYZyRHHJyzSBqbiMQYQgRQjWkkXDOeKfcFpqiuMYaQppMfBRjqKnZLVWbxEnqMjknulBELfbbvwuECNzNYDgAGUFLmfNhBPCNqhqgGIVzKhsyVCTlAqKeDQeRbexOZmwvlfhAoPxdOFJTwhxeELLhsVWvCNtsQhRkKgMwvXPTxpOanImufDvLJaOFpAWlwdnZtTIIODZzZZOUYqGdyLJBIrAsdccIUWHjFwPBYbjYlJQuQeHmMvBNPlvFQlildPPXMWbSsKFRyqFqjsOKvWQecoeKgKCdcFlDUQOcVaAVqdPpAaZoOpjQzEgwQJJjBlaPlXSJdbeeqRBoDTIXtgdNmMiruVKHzEjwKGWVuNBeuxXuGNenFyeCstviHpagvHOanpvrWDMtnoXXaWsxXdYpYmCmAFnitWTdqfwajNCJRQGRPZlfDEUfyGcOjqWAPAmCfHVIWlwZQmpO');
    var clear_5 = objectStore_5375.clear();
    var get_11;
    try{
        KeyRange_32 = IDBKeyRange.only('dfyCXndllRKYbgljYYRSnrpWKBRjMnzySkaLuRhkbTZghRXMGIPVHReRoqMCjvAOyUhDhyyosLKjTIlYCMgTltZPrEFDexDgjGaGbbNXxtDHnPprAPivmtLrIDOURJHuWgtZUmHLahzRjNKQDQwYaMmZzHISJNCIxuRXvADIPISWCSKKTLVAgcqcofJnYkJsUBbYTvEdDfmEzQEaiiTJURoCcWECwezlBTvslocMKWbILsyUcgSPrfnbPPZKBAxcKeibTvgFRyiVTWbPbcEHrMaUzxOXiPsqTPRZucZLSZUKgAIOgmugWOdGKEoFHdKMTaGxHzYJKVbNZDsOKjJhRGirJmSTvGNahCMcnbxKvDywXfcqELHAaiQzVsUEsssidNAQufceDrruinGPUKrjOVxznVmDVxxileanYcehDtGEknUrWJamiuqjBMHSxmFpkpqESawkegKXSPtvtbNkKecgedpRJuqsPixYNfINzhnUCjTJyRSwuGpLvTWCRgCXsfbbXAJcZveEDbVOVMKXslWjPrvOvKzopBfXGFxAtaBCyixpOJcsHsCBnKMQysUbqbZZshFCENdUFmMqcwYdYyFQdVktGTFMDrfVFMvWTMkoWAhbHmVY');
        get_11 = objectStore_5375.get(KeyRange_32);
    }
    catch (e){
    }

    var put_2 = objectStore_5375.put({f0_n: '<array>', f1_d: '<null>', f2_k: '<number>', f3_m: '<object>', f4_v: '<boolean>', f5_b: '<boolean>', f6_l: '<array>', f7_k: '<boolean>', f8_y: '<array>', f9_e: '<array>', f10_s: '<number>', f11_s: '<array>', f12_k: '<number>', f13_i: '<boolean>', f14_m: '<null>', f15_j: '<number>', f16_e: '<null>', f17_m: '<array>', f18_p: '<boolean>', f19_p: '<number>', f20_l: '<array>', f21_s: '<object>', f22_o: '<array>', f23_g: '<number>', f24_g: '<string>', f25_p: '<null>', f26_t: '<string>', f27_s: '<object>', f28_n: '<string>', f29_b: '<string>', f30_e: '<array>', f31_k: '<array>', f32_z: '<object>', f33_u: '<array>', f34_q: '<object>', f35_c: '<object>', f36_g: '<array>', f37_k: '<object>', f38_o: '<string>', f39_m: '<string>', f40_u: '<array>', f41_g: '<array>', f42_u: '<null>', f43_z: '<object>', f44_d: '<null>', f45_m: '<null>', f46_r: '<boolean>', f47_l: '<object>', f48_j: '<boolean>', f49_o: '<array>', f50_o: '<object>', f51_i: '<null>', f52_t: '<null>', f53_a: '<number>', f54_v: '<array>', f55_z: '<object>', f56_j: '<boolean>', f57_c: '<array>', f58_v: '<object>', f59_o: '<object>', f60_o: '<array>', f61_t: '<null>', f62_d: '<string>', f63_d: '<string>', f64_l: '<object>', f65_a: '<array>', f66_i: '<array>', f67_z: '<boolean>', f68_n: '<array>', f69_u: '<number>', f70_p: '<null>', f71_t: '<string>', f72_y: '<object>', f73_l: '<number>', f74_u: '<boolean>', f75_p: '<object>', f76_z: '<null>', f77_b: '<boolean>', f78_f: '<array>', f79_i: '<boolean>', f80_k: '<array>', f81_f: '<array>', f82_t: '<number>', f83_s: '<array>', f84_v: '<object>', f85_l: '<string>', f86_h: '<array>', f87_j: '<string>', f88_a: '<boolean>', f89_w: '<number>', f90_i: '<string>', f91_h: '<boolean>', f92_u: '<object>', f93_o: '<object>', f94_o: '<boolean>', f95_o: '<boolean>', f96_m: '<number>', f97_x: '<null>', f98_m: '<string>', f99_b: '<null>', f100_p: '<array>', f101_k: '<string>', f102_e: '<boolean>', f103_g: '<array>', f104_j: '<boolean>', f105_x: '<object>', f106_k: '<string>', f107_n: '<string>', f108_x: '<null>', f109_f: '<null>', f110_d: '<string>', f111_g: '<string>', f112_u: '<object>', f113_d: '<boolean>', f114_e: '<number>', f115_j: '<number>', f116_o: '<number>', f117_z: '<boolean>', f118_c: '<string>', f119_b: '<string>', f120_d: '<boolean>', f121_g: '<number>', f122_t: '<array>', f123_y: '<null>', f124_i: '<object>', f125_r: '<number>', f126_q: '<object>', f127_o: '<array>', f128_q: '<boolean>', f129_o: '<number>', f130_d: '<array>', f131_a: '<object>', f132_b: '<array>', f133_h: '<array>', f134_b: '<object>', f135_l: '<array>', f136_s: '<object>', f137_k: '<array>', f138_d: '<number>', f139_v: '<object>', f140_f: '<boolean>', f141_a: '<array>', f142_t: '<string>', f143_z: '<object>', f144_j: '<object>', f145_z: '<boolean>', f146_n: '<null>', f147_r: '<null>', f148_h: '<string>', f149_w: '<object>', f150_g: '<number>', f151_y: '<string>', f152_h: '<number>', f153_t: '<object>', f154_f: '<object>', f155_n: '<boolean>', f156_i: '<boolean>', f157_u: '<boolean>', f158_n: '<number>', f159_m: '<array>', f160_r: '<boolean>', f161_j: '<object>', f162_t: '<null>', f163_m: '<number>', f164_b: '<object>', f165_i: '<string>', f166_g: '<null>', f167_q: '<boolean>', f168_x: '<string>', f169_x: '<object>', f170_q: '<array>', f171_j: '<number>', f172_u: '<array>', f173_w: '<null>', f174_g: '<null>', f175_s: '<string>', f176_v: '<boolean>', f177_h: '<null>', f178_i: '<number>', f179_c: '<null>', f180_y: '<array>', f181_q: '<object>', f182_c: '<object>', f183_c: '<object>', f184_n: '<number>', f185_x: '<object>', f186_u: '<number>', f187_h: '<null>', f188_u: '<string>', f189_k: '<array>', f190_c: '<string>', f191_r: '<object>', f192_e: '<object>', f193_v: '<object>', f194_r: '<boolean>', f195_m: '<null>', f196_r: '<string>', f197_u: '<object>', f198_v: '<object>', f199_q: '<object>', f200_b: '<object>', f201_s: '<null>', f202_b: '<array>', f203_w: '<array>', f204_f: '<boolean>', f205_t: '<boolean>', f206_e: '<null>', f207_d: '<array>', f208_c: '<array>', f209_s: '<array>', f210_h: '<object>', f211_h: '<object>', f212_e: '<boolean>', f213_u: '<null>', f214_q: '<array>', f215_g: '<string>', f216_u: '<boolean>', f217_x: '<boolean>', f218_g: '<number>', f219_k: '<null>', f220_l: '<string>', f221_m: '<object>', f222_t: '<boolean>', f223_u: '<boolean>', f224_v: '<number>', f225_z: '<object>', f226_g: '<object>', f227_f: '<string>', f228_x: '<number>', f229_q: '<number>', f230_j: '<object>', f231_u: '<boolean>', f232_l: '<boolean>', f233_i: '<array>', f234_a: '<null>', f235_f: '<string>', f236_x: '<array>', f237_t: '<null>', f238_h: '<string>', f239_l: '<array>', f240_s: '<null>', f241_s: '<null>', f242_r: '<object>', f243_w: '<boolean>', f244_y: '<boolean>', f245_h: '<boolean>', f246_i: '<array>', f247_s: '<array>', f248_w: '<object>', f249_i: '<boolean>', f250_n: '<array>', f251_f: '<string>', f252_o: '<object>', f253_x: '<string>', f254_b: '<number>', f255_f: '<number>', f256_e: '<string>', f257_v: '<string>', f258_o: '<boolean>', f259_s: '<string>', f260_i: '<number>', f261_l: '<string>', f262_f: '<object>', f263_p: '<null>', f264_o: '<boolean>', f265_y: '<null>', f266_l: '<string>', f267_x: '<number>', f268_p: '<array>', f269_v: '<object>', f270_n: '<object>', f271_i: '<null>', f272_m: '<boolean>', f273_b: '<boolean>', f274_r: '<array>', f275_v: '<object>', f276_j: '<string>', f277_g: '<object>', f278_o: '<object>', f279_q: '<string>', f280_n: '<number>', f281_n: '<object>', f282_c: '<null>', f283_t: '<boolean>', f284_p: '<string>', f285_z: '<object>', f286_r: '<string>', f287_a: '<object>', f288_a: '<boolean>', f289_a: '<array>', f290_i: '<number>', f291_n: '<string>', f292_r: '<string>', f293_a: '<null>', f294_f: '<string>', f295_z: '<boolean>', f296_j: '<null>', f297_i: '<boolean>', f298_p: '<object>', f299_b: '<array>', f300_y: '<array>', f301_q: '<string>', f302_p: '<string>', f303_m: '<boolean>', f304_c: '<number>', f305_e: '<object>', f306_w: '<string>', f307_j: '<null>', f308_u: '<boolean>', f309_f: '<null>', f310_d: '<object>', f311_b: '<boolean>', f312_o: '<array>', f313_q: '<object>', f314_l: '<null>', f315_r: '<object>', f316_s: '<array>', f317_n: '<null>', f318_z: '<number>', f319_u: '<boolean>', f320_r: '<number>', f321_w: '<number>', f322_g: '<boolean>', f323_u: '<object>', f324_a: '<boolean>', f325_a: '<boolean>', f326_z: '<number>', f327_q: '<string>', f328_m: '<boolean>', f329_w: '<number>', f330_b: '<boolean>', f331_h: '<object>', f332_l: '<object>', f333_a: '<string>', f334_u: '<object>', f335_y: '<null>', f336_i: '<null>', f337_m: '<object>', f338_j: '<string>', f339_n: '<object>', f340_t: '<number>', f341_h: '<string>', f342_y: '<string>', f343_b: '<string>', f344_n: '<string>', f345_t: '<object>', f346_x: '<object>', f347_v: '<string>', f348_c: '<object>', f349_z: '<boolean>', f350_i: '<null>', f351_i: '<array>', f352_j: '<null>', f353_q: '<array>', f354_o: '<string>', f355_x: '<boolean>', f356_o: '<array>', f357_b: '<array>', f358_e: '<null>', f359_s: '<string>', f360_r: '<array>', f361_d: '<boolean>', f362_i: '<string>', f363_q: '<object>', f364_j: '<object>', f365_k: '<string>', f366_a: '<array>', f367_l: '<number>', f368_x: '<null>', f369_c: '<number>', f370_d: '<array>', f371_n: '<null>', f372_m: '<number>', f373_c: '<string>', f374_l: '<null>', f375_e: '<boolean>', f376_v: '<number>', f377_g: '<null>', f378_o: '<string>', f379_k: '<null>', f380_b: '<boolean>', f381_e: '<object>', f382_l: '<null>', f383_c: '<string>', f384_s: '<string>', f385_o: '<null>', f386_w: '<string>', f387_z: '<string>', f388_h: '<array>', f389_r: '<boolean>', f390_a: '<null>', f391_s: '<boolean>', f392_i: '<string>', f393_t: '<number>', f394_z: '<string>', f395_k: '<array>', f396_h: '<string>', f397_f: '<array>', f398_b: '<boolean>', f399_y: '<null>', f400_t: '<boolean>', f401_x: '<array>', f402_y: '<number>', f403_c: '<boolean>', f404_m: '<string>', f405_z: '<array>', f406_i: '<array>', f407_k: '<boolean>', f408_z: '<array>', f409_v: '<boolean>', f410_h: '<boolean>', f411_f: '<object>', f412_c: '<number>', f413_k: '<number>', f414_x: '<array>', f415_c: '<boolean>', f416_s: '<null>', f417_s: '<number>', f418_a: '<number>', f419_f: '<null>', f420_n: '<string>', f421_w: '<array>', f422_t: '<string>', f423_s: '<array>', f424_e: '<string>', f425_a: '<string>', f426_z: '<string>', f427_z: '<number>', f428_y: '<boolean>', f429_d: '<boolean>', f430_o: '<null>', f431_l: '<object>', f432_p: '<array>', f433_a: '<null>', f434_x: '<object>', f435_d: '<null>', f436_l: '<boolean>', f437_s: '<null>', f438_q: '<null>', f439_d: '<array>', f440_a: '<object>', f441_k: '<null>', f442_l: '<string>', f443_o: '<array>', f444_g: '<array>', f445_z: '<boolean>', f446_z: '<boolean>', f447_s: '<null>', f448_z: '<array>', f449_p: '<boolean>', f450_n: '<object>', f451_x: '<boolean>', f452_e: '<array>', f453_m: '<object>', f454_l: '<array>', f455_l: '<array>', f456_d: '<array>', f457_r: '<null>', f458_h: '<string>', f459_b: '<object>', f460_d: '<string>', f461_o: '<object>', f462_b: '<number>', f463_b: '<string>', f464_b: '<array>', f465_m: '<null>', f466_z: '<boolean>', f467_a: '<null>', f468_k: '<number>', f469_n: '<string>', f470_e: '<object>', f471_f: '<null>', f472_x: '<string>', f473_b: '<number>', f474_d: '<boolean>', f475_q: '<null>', f476_u: '<array>', f477_p: '<number>', f478_w: '<number>', f479_c: '<object>', f480_v: '<number>', f481_l: '<boolean>', f482_f: '<boolean>', f483_c: '<array>', f484_w: '<null>', f485_i: '<null>'}, 'ZgjhcuqyNOPCaRCaGFSLvqcXCBHCVDPFzyycSPvApZoczjacjclyhnaNETazXnpOiNqIvuXcSCZYBQwNOOVtMiqZPlvqvgYxrqolFqwOLIRVzzhIQDfyMhDeqXQJQoISeDswyaQIUonbuAAVAOdXFXSmqbYrVwGzxBTbcxcqmvykfHsdmZdknKVrbRiaLwjqFgryasegfDnCLlPKQzHUPCZqqBmmLvrLbvgeADBNgmCIzPOCUvHJtsrWuuNhWLhYaPsjKsIVNAJlZSHsATaOUTKIITjgejgaeaJkUCiwqaielweFlnJNBlZdfRWLpuZzLADxGLHvWFXjulIdxMuqBIEOidZtVPqFQuNqZLNJLSanqhcPosuXXfYWPQrQaTTYndxgAZrCyTaNtnVThYGElPyBIavJzdQBKjgGLXdMjudYiccAGYFOnKmJECVNZZJaRKWUpUAEcucMaEAVPPTFbmNpYUMDFvwrTpyzdQTDDYihqsdPiejNpkcMtvOWFoSyMTQTbAErnhrejUDZvdRVfeypTECCzIDjvYxOMxriUFJSlJYHJkBYkAIycHIkTAtyqbqSnxxMBIKujXmtODqlOcVQsVdXwuKPFjMUuIndXVcGkiPbCkEonyZWDueqYHxcnsUCqibqCApVDjjzTnhpNkDdDZSbkhZjvdALEOUZydWgHfJFVzsAofpVkLztxzSFdoMpRtxtweatsTxooPKwKqVSepNxXSxQxHexejLMigoOJpKhjhDKjZDjIgRZkhkHZaOijyTExoMPlTDROeGenbkMXLXrxpfFQmGqhpofWNeLKTkDKMRFovgpfByVUrbbqnVsNqJMZDJKuqcwHAFSCFlKrOPygtlMotyINvBQCtdxTUKZYEWuDIadTSlmXowTAfXPliQWJAmRTcApHvFjpmMEpIurzLcgcsUhQWGOMCghoAiGvMZgPVCFIDPomfSulaFRjwtuHNSoQzu');
    var clear_6 = objectStore_5375.clear();
    var put_3 = objectStore_5375.put({f0_b: '<number>'}, 'ETCEkcgOrYEFMfrzAZgsEoTzXXRkyCwguiFhLauWZJMuqxVzoKHxqnfaSVWrHCexAlNNNIdUSvBNchnLidmpeBUtkFdfouImLQPFCZvMBZcfcmQEZOqetiubbdPGohFjJlPVpPTVAPQQPWyrgZynAFOUVMpeKmZbbgCEcfsCvXAyZmSviqtfbqSavqvkhppvIyCgxWTQHhZyUNvawHCaRkCpjkmxjuuCEZrWGBzdSaVAPAJCuRYsrhrfsuxvVPSWHlOJIOVvvWuLWpKfgqfxKQLCIwtRNTyTCQJkHnlTGgqlDRzZ');
    var getAllKeys_3 = objectStore_5375.getAllKeys();
    txn_8132.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8132.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8132.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8133 = db.transaction(['objectStore_5376'], 'readwrite', {durability:"default"})
    var objectStore_5376 = txn_8133.objectStore('objectStore_5376');
    txn_8133.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8133.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8133.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8134 = db.transaction(['objectStore_5376'], 'readwrite', {durability:"strict"})
    var objectStore_5376 = txn_8134.objectStore('objectStore_5376');
    var clear_7 = objectStore_5376.clear();
    var add_4 = objectStore_5376.add({f0_u: '<boolean>', f1_v: '<array>', f2_c: '<object>', f3_n: '<null>', f4_i: '<null>', f5_g: '<string>', f6_s: '<string>', f7_q: '<number>', f8_l: '<string>', f9_u: '<string>', f10_f: '<boolean>', f11_s: '<object>', f12_l: '<object>', f13_u: '<array>', f14_e: '<null>', f15_b: '<object>', f16_r: '<number>', f17_e: '<number>', f18_x: '<number>', f19_g: '<boolean>', f20_z: '<number>', f21_o: '<boolean>', f22_m: '<boolean>', f23_k: '<object>', f24_h: '<array>', f25_y: '<null>', f26_r: '<null>', f27_k: '<null>', f28_j: '<null>', f29_y: '<boolean>', f30_k: '<string>', f31_e: '<string>', f32_q: '<null>', f33_k: '<number>', f34_p: '<object>', f35_f: '<number>', f36_f: '<number>', f37_s: '<null>', f38_y: '<number>', f39_l: '<number>', f40_t: '<number>', f41_g: '<number>', f42_z: '<null>', f43_o: '<boolean>', f44_p: '<array>', f45_u: '<array>', f46_g: '<object>', f47_x: '<boolean>', f48_v: '<object>', f49_i: '<null>', f50_y: '<boolean>', f51_j: '<array>', f52_z: '<object>', f53_s: '<null>', f54_c: '<number>', f55_w: '<object>', f56_k: '<boolean>', f57_c: '<string>', f58_u: '<object>', f59_q: '<number>', f60_s: '<number>', f61_k: '<array>', f62_i: '<null>', f63_d: '<array>', f64_z: '<null>', f65_w: '<boolean>', f66_m: '<null>', f67_v: '<null>', f68_d: '<null>', f69_f: '<null>', f70_i: '<number>', f71_u: '<string>', f72_e: '<null>', f73_v: '<object>', f74_n: '<array>', f75_o: '<object>', f76_f: '<null>', f77_b: '<boolean>', f78_g: '<string>', f79_d: '<array>', f80_i: '<object>', f81_m: '<array>', f82_o: '<boolean>', f83_a: '<null>', f84_x: '<array>', f85_l: '<array>', f86_k: '<boolean>', f87_y: '<object>', f88_u: '<string>', f89_g: '<object>', f90_o: '<object>', f91_v: '<boolean>', f92_v: '<array>', f93_t: '<object>', f94_z: '<null>', f95_e: '<string>', f96_b: '<boolean>', f97_i: '<array>', f98_m: '<object>', f99_d: '<object>', f100_v: '<number>', f101_e: '<number>', f102_u: '<number>', f103_r: '<null>', f104_o: '<array>', f105_z: '<object>', f106_r: '<boolean>', f107_j: '<string>', f108_w: '<number>', f109_c: '<boolean>', f110_r: '<string>', f111_f: '<null>', f112_c: '<null>', f113_o: '<object>', f114_l: '<null>', f115_y: '<number>', f116_s: '<null>', f117_h: '<number>', f118_o: '<null>', f119_t: '<array>', f120_q: '<string>', f121_s: '<number>', f122_u: '<object>', f123_o: '<number>', f124_a: '<null>', f125_n: '<null>', f126_p: '<array>', f127_z: '<boolean>', f128_k: '<null>', f129_o: '<object>', f130_u: '<array>', f131_s: '<string>', f132_q: '<null>', f133_m: '<array>', f134_u: '<null>', f135_g: '<boolean>', f136_p: '<boolean>', f137_y: '<string>', f138_d: '<string>', f139_v: '<boolean>', f140_c: '<number>', f141_o: '<null>', f142_r: '<array>', f143_w: '<boolean>', f144_l: '<array>', f145_f: '<boolean>', f146_z: '<null>', f147_l: '<string>', f148_w: '<string>', f149_k: '<array>', f150_y: '<null>', f151_x: '<object>', f152_u: '<object>', f153_j: '<object>', f154_z: '<boolean>', f155_m: '<number>', f156_w: '<array>', f157_d: '<boolean>', f158_b: '<boolean>', f159_b: '<string>', f160_l: '<number>', f161_y: '<number>', f162_b: '<number>', f163_l: '<null>', f164_m: '<array>', f165_m: '<object>', f166_z: '<string>', f167_f: '<number>', f168_c: '<null>', f169_e: '<null>', f170_z: '<number>', f171_j: '<string>', f172_m: '<boolean>', f173_a: '<object>', f174_c: '<null>', f175_o: '<number>', f176_v: '<array>', f177_s: '<array>', f178_v: '<array>', f179_l: '<array>', f180_j: '<string>', f181_o: '<number>', f182_f: '<array>', f183_c: '<array>', f184_i: '<array>', f185_l: '<number>', f186_c: '<array>', f187_k: '<array>', f188_k: '<array>', f189_s: '<array>', f190_r: '<number>', f191_m: '<boolean>', f192_o: '<number>', f193_p: '<number>', f194_m: '<number>', f195_y: '<boolean>', f196_q: '<number>', f197_d: '<array>', f198_l: '<boolean>', f199_l: '<string>', f200_h: '<array>', f201_z: '<object>', f202_m: '<object>', f203_e: '<boolean>', f204_f: '<string>', f205_j: '<array>', f206_c: '<object>', f207_l: '<object>', f208_b: '<number>', f209_y: '<object>', f210_i: '<boolean>', f211_o: '<number>', f212_f: '<array>', f213_y: '<null>', f214_y: '<object>', f215_i: '<boolean>', f216_n: '<number>', f217_m: '<number>', f218_t: '<number>', f219_z: '<boolean>', f220_f: '<number>', f221_b: '<array>', f222_l: '<object>', f223_d: '<number>', f224_u: '<boolean>', f225_r: '<array>', f226_u: '<array>'}, 'fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn');
    var clear_8 = objectStore_5376.clear();
    var delete_0;
    try{
        KeyRange_34 = IDBKeyRange.only('fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn');
        delete_0 = objectStore_5376.delete(KeyRange_34);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_36 = IDBKeyRange.bound('fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn', 'fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn', true, true);
        get_12 = objectStore_5376.get(KeyRange_36);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_38 = IDBKeyRange.bound('fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn', 'fFsQwGNDAjoRCqjdWAMwEMVriOpFRooRfFXzFtAFGKXsBaTxrWn', false, true);
        delete_1 = objectStore_5376.delete(KeyRange_38);
    }
    catch (e){
    }

    var put_4 = objectStore_5376.put({f0_e: '<string>', f1_y: '<boolean>', f2_b: '<boolean>', f3_v: '<boolean>', f4_z: '<array>', f5_o: '<object>', f6_z: '<object>', f7_o: '<number>'}, 'uEiZpNcfwJebZiQmjdKXSppQEamVCfcZzYcIRaezjvcxqwXuKUXXmMqtraSZRLtGGblUjghBVsGdPoLgBSyJXSsmwXcclpCAYRwDAnJaOVTNmcTtpQIZvlaQvysSrqzRhjeGOmgAEQHQHfvVBvzWmWXGpYzrNmEMKsChRJUDVZCBoHoJkozFtYKqiZMfmZBuugJoYyzZlaaeoKBRkFgTmOArgGmWGgeUaSNTcPeVImARCxmJbGPjnqdDFWfZBGlzXaQOyuxVFcyHKjCfWxpuoFldqeeBuCRjcBjPpYamUPdWdbRMzCiiSJgZSwyknkqxLVrgBCiCagXaVamoDfyqkssvprmmLpxDYoGnTWCoNcBQixrntZFzOsdBPoyIiEmwxbKksaUTNQxbAfKGCkDSKNZgMCThbwkokUFJenOCYlXialxrYFAvBhVTAZWCSIGeFDRQfEocWtCjYYgHRWjbHMQZEqZfIQDDsROmszTFZdlremlSXKByjpT');
    var getAllKeys_4 = objectStore_5376.getAllKeys(1194779113);
    var get_13;
    try{
        KeyRange_40 = IDBKeyRange.only('uEiZpNcfwJebZiQmjdKXSppQEamVCfcZzYcIRaezjvcxqwXuKUXXmMqtraSZRLtGGblUjghBVsGdPoLgBSyJXSsmwXcclpCAYRwDAnJaOVTNmcTtpQIZvlaQvysSrqzRhjeGOmgAEQHQHfvVBvzWmWXGpYzrNmEMKsChRJUDVZCBoHoJkozFtYKqiZMfmZBuugJoYyzZlaaeoKBRkFgTmOArgGmWGgeUaSNTcPeVImARCxmJbGPjnqdDFWfZBGlzXaQOyuxVFcyHKjCfWxpuoFldqeeBuCRjcBjPpYamUPdWdbRMzCiiSJgZSwyknkqxLVrgBCiCagXaVamoDfyqkssvprmmLpxDYoGnTWCoNcBQixrntZFzOsdBPoyIiEmwxbKksaUTNQxbAfKGCkDSKNZgMCThbwkokUFJenOCYlXialxrYFAvBhVTAZWCSIGeFDRQfEocWtCjYYgHRWjbHMQZEqZfIQDDsROmszTFZdlremlSXKByjpT');
        get_13 = objectStore_5376.get(KeyRange_40);
    }
    catch (e){
    }

    txn_8134.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8134.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8134.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6198')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};