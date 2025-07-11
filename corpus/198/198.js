let db;
const openRequest = window.indexedDB.open('str_2017', 7645816913564971)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1173', {keypath: 'MrKhoAisAqqxXAPAjiKnVQYzhJAyEEjeuvdHBeVXtJAbMaZlSUVGTBFoBjXGqvRUvJKVgrcsWZYJwFCCtfZkEyZhuGkErfgaVDlMwUhbVpSTcucKsPioTezJLhLThndOociaSxudyBfClKdUkpxOHkGdphEsdBXvoZMXokJATUuafXVwkcnQFxUvSqXgpOJiiPgJMGYuPOUnmSrsIkzsZEEMFooMIplqUFmaqCxkgQikIQXkiAzMTNbupdpVqfKEUgYVSojIcyYJpnFRqAwMfNLOJTtlnMaNvCyzaKpGAlkxuRGxwJhVvfCdPoyPkCHJNmcFBsKCSPWQzUHdsVRWASDTGlNxJTvyMwzcLmtlvMRQlhMmGZdBydYParGTFK.ExOPlbxJrhwVTpYmqxmyKAubWjAJdhWXYvXkuSHmxrEwgpjHkyJUuQKnNoQLKctEbOBhpDHRnYehfzUvIwrbvAPiMiJgxCzRFhTukhDPdnrVKdcrOhpiILVvzNDViZKfMuirMsUXOGwxrWTSvwJlwBadklpURcJXfebDMErGTdpXEGdBYjnpgNYVfAlQeRFTZBMcyqivnIRceYkzLXbZhAQGSgySTIgeZqjaGJDvEGoIhueWgmYjafQYqsEEluCFGMjeCgtTlTSqLozKFKqLHVTDkqaTpzivyZJlMCEdHGWKZFxJgdJoSGHWVevlUYLZGWPLzGAPqJezbAFjHrsqvzmNwtJiaHtjyZUgmsPuoEeJOpwxrEFZIGVskSqLEkDZvvKcNomqFDxBoGyDqvClYihktEUdRGgMJVDNXMbuQXIBAyHRnCAgneDgmwMmckvDfJfnTJAXsKrZdKPsOjPLtdNkpkrgjXqvBwPPFaQLMTmOeNAMEOMIKVwlBiIebfCvdtVggxDLFhkKAtaVlLhUqRbMdRSgoxhABexuEVpKXJZlWtAaYVjfjBgRsxvJTzmOroBxCcqmdzayXflnXEYoh.dnvInbTHhfvqEIRvJXBsLLvlburbjwveTDophmbLCzcDszvXIsBrUKCYbtPWWjkolrjYDjtVbqWGroMFRtKkHqRTvLSKAeDjhIudfrXJipqiCFNJBbDjUWuEqrXzVfagEVNShuruhuqlDnsXQiLakEokcvJGimburnaRwrePjnZdzXGoirZlQdqyQtfSYeNUgPgSDLvsFabjZVFEyxjzsdKgMkDFWxUFpHVbAIvyBLYOLVqDZoxiqhqHcWxjziUHVfPOFqdltmKsSgvZDIrbmxqeGPfepeeePfXJPaLZSlSPGBSZdUkPzpejnDRraFAyLsBDoNoJdTVqHMTcDSMriisjxOEmbDAKYMddMacbvwKnGYHFUamPSNKJdzQQliOIeEllStRgIAGbKbCOtwMHNitpaZnnJPoaObyFITpaWzmLkwYNNjNnwylZVuHORZeuPUvTwGkRqTlyuNMclXkMYxtySQFicybMwNYwZUlktgrqYVxvdnokDZKTtLhrdTNtUKDZggHXmdbTLUsYhfKRQpoGozlARaeYFFXHCwYxzBHRRlDyTqQIeSXGFONliGdqzWkajEmjEDzhqjaXQQXeHLrHASyoIuMlVerKXIXmYAWVkVrLdtrqkZbMGzhrDuxQVCLx.EUyeKPoADqQlcyVWRrfQGCRjyPcgSCTqtUrPhIykNihoeXinSKkQsJjeoumcBEdjSEOnCCMkbZIFvMbDOznYdiaMMwbwuvbvQIYiyBcrPKxfyZlLLUkxROyIyINbNFXlcCZDHSKqrdPmXEujWZqvksueuFosvJoGgSpNhIusCSPcHwajpIdaOLknNDAHJEaGHnoUdpZClMmwzRVsMcIFddFHTMkyeUEIbVxjMaOUvaFIALdXRXtmBpKMIJReZWwgxwsjjmxnJMdVnHqIhtCMXYdvWUqxCNcLDiUEmTMAwaTlipxdlAfTMGRPDhkBqELMhLujezumqPwSBMQFIJMRWiOUZwQbtpZkXXEEXVmdIblkRPxPKbTrgSCUuabFlJfHUglezRlqLIgBTsjyDKLizShRduoALkPjJAXghmnJPpsrpdRdCnNmyQOLdbwWDSgBkJdWOhCitiSrSnpVWpyyDmttmpFKxpDAYUyUKhclHznfUUvknxMiIPxlUmjZfBkVqXjihoSuzBpRVDKVfvnsYYQfSLeTXntWaBenHmKICgpkTbWyCsfjqCQzFXFMBbVGzxzlzWfHxOgPcKGBUjFKGCeoTyfSegrMExbEUHnchpGqXodWfmNQIUDQAUUgXxOxvy', autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_1174');
    var put_0 = objectStore_1.put({f0_w: '<number>', f1_k: '<array>', f2_d: '<string>', f3_s: '<number>', f4_o: '<null>', f5_h: '<number>', f6_c: '<number>', f7_n: '<boolean>', f8_m: '<number>', f9_p: '<boolean>', f10_k: '<string>', f11_k: '<object>', f12_w: '<array>', f13_e: '<string>', f14_w: '<null>', f15_x: '<boolean>', f16_h: '<array>', f17_y: '<boolean>', f18_p: '<array>', f19_e: '<boolean>', f20_t: '<null>', f21_i: '<null>', f22_d: '<string>', f23_r: '<object>', f24_t: '<object>', f25_x: '<string>', f26_a: '<string>', f27_y: '<string>', f28_v: '<number>', f29_z: '<number>', f30_i: '<number>', f31_e: '<array>', f32_f: '<number>', f33_g: '<array>', f34_q: '<null>', f35_q: '<array>', f36_j: '<array>', f37_i: '<null>', f38_o: '<array>', f39_b: '<string>', f40_o: '<object>', f41_q: '<array>', f42_o: '<string>', f43_q: '<boolean>', f44_e: '<boolean>', f45_t: '<array>', f46_g: '<null>', f47_r: '<boolean>', f48_m: '<null>', f49_y: '<string>', f50_n: '<object>', f51_c: '<null>', f52_k: '<object>', f53_w: '<null>', f54_z: '<array>', f55_g: '<string>', f56_h: '<string>', f57_h: '<string>', f58_s: '<object>', f59_h: '<boolean>', f60_v: '<string>', f61_d: '<null>', f62_f: '<boolean>', f63_q: '<array>', f64_f: '<array>', f65_c: '<null>', f66_a: '<number>', f67_c: '<string>', f68_k: '<string>', f69_c: '<string>', f70_z: '<null>', f71_r: '<boolean>', f72_u: '<object>', f73_h: '<string>', f74_r: '<string>', f75_a: '<string>', f76_l: '<string>', f77_l: '<null>', f78_f: '<boolean>', f79_r: '<object>', f80_f: '<boolean>', f81_p: '<object>', f82_l: '<object>', f83_f: '<number>', f84_i: '<null>', f85_n: '<null>', f86_k: '<number>', f87_k: '<string>', f88_p: '<object>', f89_t: '<boolean>', f90_j: '<object>', f91_y: '<object>', f92_v: '<string>', f93_f: '<string>', f94_w: '<null>', f95_n: '<object>', f96_m: '<object>', f97_s: '<number>', f98_h: '<string>', f99_n: '<boolean>', f100_y: '<null>', f101_l: '<number>', f102_n: '<number>', f103_a: '<boolean>', f104_y: '<array>', f105_n: '<array>', f106_i: '<boolean>', f107_c: '<object>', f108_x: '<boolean>', f109_p: '<null>', f110_v: '<null>', f111_j: '<object>', f112_r: '<number>', f113_h: '<null>', f114_a: '<null>', f115_c: '<array>', f116_y: '<boolean>', f117_m: '<array>', f118_u: '<number>', f119_f: '<null>', f120_p: '<number>', f121_e: '<string>', f122_f: '<array>', f123_h: '<number>', f124_f: '<null>', f125_y: '<array>', f126_h: '<null>', f127_v: '<string>', f128_a: '<number>', f129_c: '<boolean>', f130_y: '<null>', f131_n: '<number>', f132_b: '<number>', f133_e: '<string>', f134_y: '<boolean>', f135_d: '<object>', f136_g: '<array>', f137_m: '<null>', f138_m: '<boolean>', f139_l: '<object>', f140_v: '<null>', f141_u: '<boolean>', f142_d: '<string>', f143_u: '<array>', f144_a: '<string>', f145_r: '<boolean>', f146_y: '<string>', f147_b: '<string>', f148_r: '<boolean>', f149_a: '<null>', f150_h: '<boolean>', f151_d: '<array>', f152_g: '<array>', f153_t: '<boolean>', f154_s: '<array>', f155_c: '<string>', f156_k: '<array>', f157_a: '<boolean>', f158_a: '<number>', f159_h: '<array>', f160_s: '<array>', f161_w: '<number>', f162_i: '<null>', f163_v: '<boolean>', f164_s: '<number>', f165_d: '<array>', f166_l: '<number>', f167_j: '<object>', f168_i: '<boolean>', f169_d: '<number>', f170_v: '<string>', f171_a: '<boolean>', f172_p: '<null>', f173_a: '<object>', f174_z: '<number>', f175_q: '<null>', f176_q: '<number>', f177_w: '<array>', f178_k: '<boolean>', f179_p: '<object>', f180_g: '<object>', f181_z: '<array>', f182_a: '<array>', f183_w: '<number>', f184_m: '<string>', f185_k: '<number>', f186_a: '<array>', f187_u: '<object>', f188_k: '<object>', f189_l: '<string>', f190_i: '<null>', f191_j: '<null>', f192_t: '<object>', f193_e: '<string>', f194_y: '<boolean>', f195_q: '<array>', f196_p: '<object>', f197_f: '<array>', f198_j: '<null>', f199_x: '<array>', f200_d: '<array>', f201_r: '<number>', f202_b: '<null>', f203_k: '<object>', f204_z: '<boolean>', f205_v: '<string>', f206_o: '<number>', f207_x: '<array>', f208_e: '<string>', f209_z: '<string>', f210_h: '<string>', f211_e: '<number>', f212_c: '<string>', f213_d: '<number>', f214_g: '<object>', f215_g: '<null>', f216_a: '<number>', f217_y: '<boolean>', f218_w: '<number>', f219_o: '<null>', f220_n: '<array>', f221_y: '<array>', f222_z: '<boolean>', f223_q: '<array>', f224_s: '<object>', f225_o: '<object>', f226_l: '<null>', f227_j: '<null>', f228_e: '<boolean>', f229_l: '<boolean>', f230_j: '<null>', f231_z: '<object>', f232_s: '<boolean>', f233_p: '<number>', f234_i: '<number>', f235_g: '<object>', f236_o: '<array>', f237_s: '<number>', f238_i: '<array>', f239_w: '<number>', f240_k: '<object>', f241_d: '<null>', f242_q: '<string>', f243_l: '<null>', f244_n: '<array>', f245_d: '<string>', f246_n: '<object>', f247_d: '<string>', f248_v: '<null>', f249_l: '<array>', f250_k: '<object>', f251_k: '<boolean>', f252_k: '<string>', f253_i: '<number>'}, 'egklbByAUFMoDPbojfvhXMrdyxQJFzBEuwMooGIAFeiwISKGOWepeoGndXfehyMnFHbGNIRhtVwmkPgIahomwfoqZEdKADtOBNxlMMHgIcaaRFwiiGpOGvUVVf');
    var add_0 = objectStore_1.add({f0_a: '<string>', f1_b: '<array>', f2_f: '<object>', f3_b: '<boolean>'}, 'RzzzZjSzxSuuWTsqjPhovGzzxwsYArcBfUSBELGhtwZOwFViGalebwVsOEeRlzYDSbjsdeSzoDdmdIvQQFsZisCzbEqETrxTiHuubhFaCNSisjklNHAgHRqNRVPoWVNtSHneCBQUtfuGabNzsPnIJHyQXMRaxPCowZpanlVnyjTuFqrUTOROeahqPnShWjWnEIbnbuwnqtBElExgqAvzbQKhVwvgtdoNCsUTjgznxXTotfRmLXzIMJyeUIuVMsULaqWWCLsZxCPVDPikyOcXXZDioYBkmtZfJYtmtpBdJafmSWfwanNTUTgLYnlumTFhXKhTVObzgrNeqZRVrujalVSZHqtOONoGmoJlnRphFTCzPRLMFJSwxGiqbERqddFZGmiZjtHjTGdCnkCUAkRICXDNDrUYpTWkvXfkhriKBHtRxcFEKFNbwjRJcsAPkIRMvDbgtZnzSRtKJDZnlJAhUKOMVHcyLDrATdTSWcKujxSFkmScQWCwEoBjwBzLVCtiZGhWITwbSLYcImeEJLGUePzxHSxyePskpICYVdkWowlekxwiRSjsFOToofdPrEBY');
    db.deleteObjectStore('objectStore_1173')
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.only('RzzzZjSzxSuuWTsqjPhovGzzxwsYArcBfUSBELGhtwZOwFViGalebwVsOEeRlzYDSbjsdeSzoDdmdIvQQFsZisCzbEqETrxTiHuubhFaCNSisjklNHAgHRqNRVPoWVNtSHneCBQUtfuGabNzsPnIJHyQXMRaxPCowZpanlVnyjTuFqrUTOROeahqPnShWjWnEIbnbuwnqtBElExgqAvzbQKhVwvgtdoNCsUTjgznxXTotfRmLXzIMJyeUIuVMsULaqWWCLsZxCPVDPikyOcXXZDioYBkmtZfJYtmtpBdJafmSWfwanNTUTgLYnlumTFhXKhTVObzgrNeqZRVrujalVSZHqtOONoGmoJlnRphFTCzPRLMFJSwxGiqbERqddFZGmiZjtHjTGdCnkCUAkRICXDNDrUYpTWkvXfkhriKBHtRxcFEKFNbwjRJcsAPkIRMvDbgtZnzSRtKJDZnlJAhUKOMVHcyLDrATdTSWcKujxSFkmScQWCwEoBjwBzLVCtiZGhWITwbSLYcImeEJLGUePzxHSxyePskpICYVdkWowlekxwiRSjsFOToofdPrEBY');
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var index_782 = objectStore_1.createIndex('index_782', 'test', {multiEntry: false});
    var index_783 = objectStore_1.createIndex('index_783', 'test');
    db.deleteObjectStore('objectStore_1174')
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
const deleteRequest = indexedDB.deleteDatabase('str_7270')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};