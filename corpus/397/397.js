let db;
const openRequest = window.indexedDB.open('str_6384', 383122333348040)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2336', {keypath: 'fAloCBLzUYCwPfpEpulJgUCbgCYBhfnGaODxVuCJiFJGsDdsHduDLrzJFIdtyPKFdGwOoZoqoklXMZURUPiLHTWpDuefyqHhUvTfDovFmnAnApLqkZRRHzPoKTUCqUxCBBtNiGvPJ', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_o: '<string>', f1_q: '<string>', f2_a: '<null>', f3_f: '<number>', f4_i: '<boolean>', f5_q: '<boolean>', f6_z: '<object>', f7_c: '<object>', f8_i: '<null>', f9_w: '<array>', f10_x: '<boolean>', f11_i: '<number>', f12_g: '<string>', f13_k: '<object>', f14_d: '<object>', f15_t: '<array>', f16_h: '<null>', f17_r: '<array>', f18_c: '<null>', f19_a: '<boolean>', f20_i: '<number>', f21_c: '<number>', f22_c: '<object>', f23_n: '<string>', f24_c: '<array>', f25_j: '<string>', f26_g: '<object>', f27_v: '<array>', f28_c: '<number>', f29_e: '<object>', f30_m: '<boolean>', f31_o: '<array>', f32_r: '<array>', f33_e: '<string>', f34_b: '<number>', f35_o: '<array>', f36_c: '<null>', f37_k: '<string>', f38_d: '<object>', f39_s: '<null>', f40_h: '<number>', f41_n: '<string>', f42_h: '<boolean>', f43_l: '<boolean>', f44_t: '<object>', f45_a: '<boolean>', f46_x: '<object>', f47_d: '<null>', f48_z: '<array>', f49_s: '<null>', f50_t: '<object>', f51_l: '<string>', f52_s: '<number>', f53_w: '<boolean>', f54_f: '<boolean>', f55_k: '<null>', f56_m: '<boolean>', f57_r: '<number>', f58_c: '<boolean>', f59_o: '<null>', f60_j: '<number>', f61_l: '<array>', f62_w: '<null>', f63_r: '<string>', f64_x: '<object>', f65_j: '<number>', f66_n: '<array>', f67_g: '<object>', f68_a: '<null>', f69_x: '<boolean>', f70_r: '<boolean>', f71_q: '<null>', f72_j: '<number>', f73_h: '<boolean>', f74_a: '<array>', f75_r: '<null>', f76_u: '<object>', f77_y: '<array>', f78_e: '<number>', f79_r: '<string>', f80_u: '<number>', f81_c: '<array>', f82_p: '<null>', f83_q: '<string>', f84_v: '<boolean>', f85_m: '<array>', f86_g: '<array>', f87_y: '<string>', f88_z: '<object>', f89_l: '<array>', f90_u: '<boolean>', f91_z: '<string>', f92_q: '<number>', f93_v: '<string>', f94_s: '<boolean>', f95_r: '<number>', f96_u: '<string>', f97_c: '<array>', f98_d: '<boolean>', f99_k: '<string>', f100_n: '<boolean>', f101_p: '<object>', f102_a: '<object>', f103_f: '<array>', f104_y: '<string>', f105_u: '<object>', f106_h: '<array>', f107_t: '<object>', f108_b: '<array>', f109_x: '<string>', f110_r: '<object>', f111_c: '<object>', f112_a: '<string>', f113_l: '<string>', f114_j: '<number>', f115_d: '<number>', f116_s: '<null>', f117_w: '<array>', f118_r: '<object>', f119_y: '<array>', f120_u: '<number>', f121_n: '<object>', f122_e: '<number>', f123_e: '<array>', f124_u: '<number>', f125_q: '<object>', f126_r: '<boolean>', f127_o: '<array>', f128_c: '<null>', f129_v: '<null>', f130_f: '<string>', f131_n: '<array>', f132_n: '<number>', f133_m: '<null>', f134_p: '<array>', f135_u: '<object>', f136_w: '<null>', f137_q: '<string>', f138_z: '<object>', f139_m: '<null>', f140_u: '<boolean>', f141_m: '<number>'}, 'EZogvjhSHaOkliVhgERMxhMwkBvbThyBPTbLfWwkJzEhsmwaBzThieKeNJkXlnHUPZopwMnJddUXzqKhRsDXfCPgtnmvgnMvpiDgNgCFRgdwayKoMZmCHdcxgpORblnSDmqhkdTEnzYbEBmimdRavMPNGewJnTuXhxYemDHpYGLxsDoLYGFDKYHpJqlZgRMbwUsRbeCQchhzBfpHImiScDDfbTaVWDBPhrTnYFzUtJrFhZSwbRuQDbYTWLiCmUwiEYRXknfEOMkwidLzAYDYjAIzBVEOPuyIdZOeprvlIDsLEDjJoFatrdxdkTClGSyosIKfvGSaVbJZiksuELgZIgnpHqlrAOrKPdUjwKelnOplWTyxGYpusGRgxYTmbeWIAaJJkDvfIRkXJcwiuKTiQpJgChgdVBDRXxWGnFSTxufhtiQNlUttRWNmQRTuOhVAIpXrMcOxtLFZRQDTCPGxZnxVRlUzhLOPrMeTkdAPbAIpyzwAvaGkkdsaFxkUBCxviKrXNgUpsRCoPMnqKePBiuHJfYXQQyinVjytxgeWBOhlVffeAqbLEhfKrXLMfobXwJcFuRDRTSHfTpRgtORZjxJpVzjUauHkTWgBTlxZmRFmeHgfjSygVXcwlhRNdSDvyDsiJjxcEfgSgWONkdcawxmP');
    var put_0 = objectStore_0.put({f0_i: '<null>', f1_a: '<string>', f2_t: '<object>'}, 'jNlKKPqaKSyaVOXcqPuQgKjMNUkSjmTTWCLgjGFdpVqUXTjYQKRurRMasuyFsOarqPQLlKIyfbfpPblSBecsmSigcVasxQxfqnbTmCHHHCumZOMVoiqjakprjMtsJFQplVasWaIrDFVFrSAPTsFqpQRYRxpzWZrXgoxrLAjriqmuFfQUEpjaSdMLgdtVSWKJADOTrFhrCWbtrQLnsSkISODBeziHghPhUxJvXCPfFXqvLRkAUHeqlMrlLVbrhrYIUOtkJwizJHWZFNaDjbBMVCaCKTcgcIIjhpTrAelogMpBWaAFqKHafExJIgVvFnUTZfaxBoDkiyCwIKgzdQuuMlrwZYMryBDZwYqrZYcHMffcczLpMVAtwCrroslYwofcLJvtFXCyNwMzOMGeCHjOJkFPrPjUqjWtSMuiPrZGAOPkAxVPVqERmvbRaUPohAwWxINkwelOhSfgfiFXroKxzRHWfGjrEsNpAOqHaCWWryOJMDBFFpKeMuZtoFhtUmcYMhYRZnoZaTKrnzKXrUQJZvLDQwrxqpvnfKuEzdKUuhDTBKDCXLeiEhMzlnarnYjiADYNHYAUbLVyerPZbHjNEWADNtDSlprHPLDpswDXNyzasLiPaAVubOPXPHZUirsBhuBrhHXLHDxPWIMoYz');
    db.deleteObjectStore('objectStore_2336')
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
const deleteRequest = indexedDB.deleteDatabase('str_193')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};