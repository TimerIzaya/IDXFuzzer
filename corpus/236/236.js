let db;
const openRequest = window.indexedDB.open('str_6354', 27353454958998)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1377', {autoIncrement: false});
    var put_0 = objectStore_0.put({f0_l: '<boolean>'}, 'jXPQvAEQhSdiGXthHgCfGOUCLXprCWOHUqoIHPXLdEhPwuNljfnxuXxJdZVksiWYOdXerJWZimmkZuDYCZVNHUVVVvTlWvPVzmjigzKDbmHtmlrFfPvfUzMyLHiQNTMhzKeHX');
    var count_0 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_1378', {autoIncrement: true});
    var put_1 = objectStore_0.put({f0_y: '<null>', f1_w: '<array>', f2_a: '<number>', f3_a: '<boolean>', f4_e: '<null>'}, 'RxiNhDfuHcLjJHAFbyicdQnlmEURQkMrEqwLCFeOTkuxAGKrJUtLLcZKHElBtxBglwqMeyekhuaNmZDPfSTllYyYIOJQfdCcTzldXwjJjvulvoJWfuAhAIVaUuDLnsZtqAPpNnegtwpYISSKPUtbHdiRuwcTMAabghoGEDChDGJYIMOxvCPmQVBjTUKlYYaIWcyuFcfBBWECBREIjUJtyyzZaSsNeyBXDxSlnSxhdnExCZSlVfcgDppRUJlYElkQFDqxOazGhUzagYbZfDkYfofByEoTYnsquWrqYeJKpakjMARsfiDVCflWJkHfEdBDPJfukoUUWfAVkqdmSRYUZDMWdzHOosjnywEJpGvEUpebkWicqSiXcYRuwkJrhGFLlxQphjQqDSygpHjyahlnDuDeEDcsiwuSzvKwCnUGRvszpfIwRJtktSNXOMgMOKSFNyMhenjXDWmBCJHPoWUYrAYeSmBmtYtkkkiMHgtHNfhUkdXKOKfITOUziwQVAkBoywJFigJQJTUeHeCArTfzgPFSTYClvVIRBRVyIZwKjNQngNaLvzKkAKBONUtVKovhCqVIrJryGwToNlngejutCNrJQDaLrydGZTeHvmOBOqUjQSwtBXMiySXSwfgkduYmyGIymqORtO');
    var index_931 = objectStore_1.createIndex('index_931', 'test', {unique: false});
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('jXPQvAEQhSdiGXthHgCfGOUCLXprCWOHUqoIHPXLdEhPwuNljfnxuXxJdZVksiWYOdXerJWZimmkZuDYCZVNHUVVVvTlWvPVzmjigzKDbmHtmlrFfPvfUzMyLHiQNTMhzKeHX', false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('RxiNhDfuHcLjJHAFbyicdQnlmEURQkMrEqwLCFeOTkuxAGKrJUtLLcZKHElBtxBglwqMeyekhuaNmZDPfSTllYyYIOJQfdCcTzldXwjJjvulvoJWfuAhAIVaUuDLnsZtqAPpNnegtwpYISSKPUtbHdiRuwcTMAabghoGEDChDGJYIMOxvCPmQVBjTUKlYYaIWcyuFcfBBWECBREIjUJtyyzZaSsNeyBXDxSlnSxhdnExCZSlVfcgDppRUJlYElkQFDqxOazGhUzagYbZfDkYfofByEoTYnsquWrqYeJKpakjMARsfiDVCflWJkHfEdBDPJfukoUUWfAVkqdmSRYUZDMWdzHOosjnywEJpGvEUpebkWicqSiXcYRuwkJrhGFLlxQphjQqDSygpHjyahlnDuDeEDcsiwuSzvKwCnUGRvszpfIwRJtktSNXOMgMOKSFNyMhenjXDWmBCJHPoWUYrAYeSmBmtYtkkkiMHgtHNfhUkdXKOKfITOUziwQVAkBoywJFigJQJTUeHeCArTfzgPFSTYClvVIRBRVyIZwKjNQngNaLvzKkAKBONUtVKovhCqVIrJryGwToNlngejutCNrJQDaLrydGZTeHvmOBOqUjQSwtBXMiySXSwfgkduYmyGIymqORtO');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var index_932 = objectStore_0.createIndex('index_932', 'test', {multiEntry: false});
    var clear_0 = objectStore_1.clear();
    var add_0 = objectStore_0.add({f0_v: '<number>', f1_w: '<null>', f2_a: '<array>', f3_u: '<null>'}, 'EwMDHNUGdDRIjOXiEBKRCtwtCFPODtYPjzOoYdXAahUdJHMvxzALWQcq');
    var put_2 = objectStore_0.put({f0_r: '<boolean>', f1_u: '<object>'}, 'XfYvtqZfrcixKbjgUStfQINuMsKBAXQfGceNbjzabgpFXWcuvKayaVnMIXDcZOqgSLDcjXLMdafpZMbwLnHsAayvLVjMefaYzHaopQAkIYlfuIiFIelOFYUHayzuylsyQAkQkNClJoyQorBCuiIOjvqdYpDAMIWaMkClWfuUUVdwOQGaauEmbNrlqYHfBPEOTFwkqGvkZRBoMWZJZkSpvOEesQgELxVhGHjTxFntdaQbTMauCekFQvBhatAasXmoeZhNWUjobaOKyYqPTyBpmBqcFuTbyTjYlpCeRSNRziFHbRPBSBIQrkjZEBVTSdyzLaondApDxZUXGprzCK');
    objectStore_1.deleteIndex('index_931')
    var clear_1 = objectStore_0.clear();
    var put_3 = objectStore_0.put({f0_x: '<null>', f1_d: '<object>', f2_g: '<object>', f3_x: '<array>'}, 'nKCafKzptZQjfPNabaHsJOurbourMWVWhEVdYELTeMQViHjuSSNOIYGdBHvEkuFxNWbrispgsbJRlbdfqIsqGbHOfPhgkJwmiJwhizNxkmgwxjWRKcJffvwaHJwfdAingLuvmuupyDvVoVCjOzzDqcqzIzKCKYptktmItPiCxXPzTTjHDHkHSZnrrReWfppRjVKZjevfIAGPrlmEcUQWLKVsKNbYqNtlsZAgOopLEBMcxwytFWBspDSDZsyIaXmRVMdwzvqNXgiEEEGcWyzWiAFVcuxJxQaQvFShXXUrxaiQEiYMYJfJhWbQDzKFanHNgYaPPvumeuXfvZbILPiEdjVWRmiUdVylJwvKHmDMOxificxGuAeZXaYrwzfhXYNMHddFIVpBeMyDQcIWeZfusjBTuwsEGpmCQzSXrZerkjPUCfVMSzEKBPPJna');
    var index_933 = objectStore_0.createIndex('index_933', 'test', {multiEntry: false});
    var objectStore_2 = db.createObjectStore('objectStore_1379', {autoIncrement: true});
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('nKCafKzptZQjfPNabaHsJOurbourMWVWhEVdYELTeMQViHjuSSNOIYGdBHvEkuFxNWbrispgsbJRlbdfqIsqGbHOfPhgkJwmiJwhizNxkmgwxjWRKcJffvwaHJwfdAingLuvmuupyDvVoVCjOzzDqcqzIzKCKYptktmItPiCxXPzTTjHDHkHSZnrrReWfppRjVKZjevfIAGPrlmEcUQWLKVsKNbYqNtlsZAgOopLEBMcxwytFWBspDSDZsyIaXmRVMdwzvqNXgiEEEGcWyzWiAFVcuxJxQaQvFShXXUrxaiQEiYMYJfJhWbQDzKFanHNgYaPPvumeuXfvZbILPiEdjVWRmiUdVylJwvKHmDMOxificxGuAeZXaYrwzfhXYNMHddFIVpBeMyDQcIWeZfusjBTuwsEGpmCQzSXrZerkjPUCfVMSzEKBPPJna', 'jXPQvAEQhSdiGXthHgCfGOUCLXprCWOHUqoIHPXLdEhPwuNljfnxuXxJdZVksiWYOdXerJWZimmkZuDYCZVNHUVVVvTlWvPVzmjigzKDbmHtmlrFfPvfUzMyLHiQNTMhzKeHX', false, true);
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var put_4 = objectStore_0.put({f0_n: '<string>', f1_i: '<string>', f2_l: '<number>', f3_s: '<boolean>', f4_q: '<number>'}, 'bmSiZCLzRapLeBGQPGeuwVXhJjaLGGucZCyvLwJYMoIGBRzmcoASulaIrufeAQHfvGppkPOGaUBnoJSTTFCkgZabjvfKyGfdIWCJaERmuXKXIFtCglFNBBEsrVdhxsaIWmHsvxCmREhKxXtXYuxwSGqihsXcSjWaykNBJdyIpHpPVdIMzMapDzGWgpZjKQHlSZGexsGDEntCQKDrnwIGWiZSTsjKLpcqsSuspzwdFsTENBNDwkwJKvYiVtHDKlhSxiIdkWZWnhrfWkpakDOphfWPgnEdyIaTMDclnSWTOANLlsOhdBQuvZxzbxZjZxcZxLCgwcEmnPnVhxJNynEhXSBoIXjeLFuKLRiOqHiPAaqUDVdvIAwkKeaZqcduHXLPyBIMiXTXtvXPOrzmChArpIzNwsjXjVExZVvpPdQLUPxuaCDAXaDBDjYhKUnJIEFPuNFaijyYpUQfmsajyrwVXbofvTuzLIaTfVyMniUIvbdmWUQmOVaWXnyxBFaBEyfvPcHbSzNiaRPntkfKwtFrqvcvUykhENpJGFHLUFyaJrOOPVGdEvMcnzbIBy');
    var add_1 = objectStore_0.add({f0_i: '<object>', f1_r: '<null>', f2_o: '<boolean>', f3_q: '<array>', f4_c: '<string>', f5_w: '<array>', f6_e: '<object>'}, 'RSDiMkqjtwYtwIRiiRSYpgYtNYwxzcmfGbkmlCr');
    var index_934 = objectStore_1.createIndex('index_934', 'test');
    var count_2 = objectStore_0.count();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2075 = db.transaction(['objectStore_1379'], 'readwrite', {durability:"default"})
    var objectStore_1379 = txn_2075.objectStore('objectStore_1379');
    var clear_2 = objectStore_1379.clear();
    var add_2 = objectStore_1379.add({f0_z: '<object>', f1_e: '<string>', f2_j: '<object>', f3_x: '<string>', f4_e: '<object>', f5_p: '<object>', f6_r: '<object>', f7_y: '<number>', f8_i: '<boolean>', f9_i: '<array>', f10_c: '<string>', f11_q: '<object>', f12_t: '<null>', f13_f: '<number>', f14_h: '<number>', f15_i: '<number>', f16_v: '<array>', f17_g: '<string>', f18_m: '<array>', f19_q: '<array>', f20_i: '<array>', f21_y: '<object>', f22_j: '<array>', f23_x: '<object>', f24_p: '<null>', f25_u: '<string>', f26_b: '<boolean>', f27_h: '<number>', f28_k: '<number>', f29_c: '<string>', f30_m: '<number>', f31_a: '<boolean>', f32_s: '<null>', f33_r: '<boolean>', f34_n: '<array>', f35_v: '<null>', f36_n: '<array>', f37_k: '<null>', f38_i: '<number>', f39_s: '<string>', f40_t: '<boolean>', f41_d: '<number>', f42_l: '<boolean>', f43_w: '<string>', f44_c: '<object>', f45_f: '<boolean>', f46_k: '<array>', f47_q: '<number>', f48_c: '<object>', f49_z: '<boolean>', f50_x: '<string>', f51_r: '<null>', f52_z: '<string>', f53_c: '<array>', f54_i: '<boolean>', f55_l: '<object>', f56_b: '<string>', f57_s: '<array>', f58_p: '<string>', f59_d: '<object>', f60_u: '<boolean>', f61_y: '<array>', f62_c: '<number>', f63_d: '<null>', f64_g: '<number>', f65_l: '<array>', f66_n: '<boolean>', f67_k: '<number>', f68_u: '<array>', f69_g: '<string>', f70_v: '<string>', f71_l: '<string>', f72_c: '<string>', f73_o: '<number>', f74_j: '<boolean>', f75_k: '<null>', f76_u: '<array>', f77_z: '<string>', f78_d: '<number>', f79_m: '<number>', f80_c: '<array>', f81_c: '<number>', f82_y: '<string>', f83_q: '<object>', f84_h: '<array>', f85_n: '<boolean>', f86_q: '<boolean>', f87_k: '<object>', f88_p: '<string>', f89_t: '<array>', f90_j: '<array>', f91_i: '<array>', f92_e: '<object>', f93_v: '<null>', f94_f: '<number>', f95_s: '<null>', f96_s: '<null>', f97_q: '<array>', f98_e: '<object>', f99_i: '<object>', f100_h: '<array>', f101_j: '<number>', f102_t: '<string>', f103_b: '<number>', f104_a: '<string>', f105_m: '<string>', f106_z: '<object>', f107_j: '<boolean>', f108_c: '<number>', f109_v: '<object>', f110_w: '<boolean>', f111_a: '<boolean>', f112_z: '<string>', f113_q: '<number>', f114_b: '<number>', f115_h: '<null>', f116_d: '<boolean>', f117_v: '<object>', f118_c: '<boolean>', f119_e: '<boolean>', f120_s: '<boolean>', f121_l: '<boolean>', f122_i: '<null>', f123_z: '<number>', f124_f: '<object>', f125_q: '<array>', f126_h: '<array>', f127_m: '<boolean>', f128_q: '<object>', f129_l: '<null>', f130_t: '<object>', f131_d: '<boolean>', f132_h: '<string>', f133_a: '<null>', f134_a: '<object>', f135_n: '<number>', f136_a: '<array>', f137_b: '<boolean>', f138_r: '<array>', f139_z: '<null>', f140_i: '<array>', f141_u: '<object>', f142_f: '<number>', f143_r: '<array>', f144_w: '<number>', f145_u: '<object>', f146_m: '<boolean>', f147_a: '<object>', f148_o: '<null>', f149_d: '<number>', f150_o: '<number>', f151_a: '<boolean>', f152_k: '<object>', f153_j: '<object>', f154_s: '<object>', f155_o: '<string>', f156_s: '<array>', f157_c: '<null>', f158_j: '<number>', f159_a: '<object>', f160_s: '<string>', f161_h: '<boolean>', f162_m: '<object>', f163_u: '<object>', f164_o: '<string>', f165_w: '<array>', f166_l: '<string>', f167_t: '<null>', f168_c: '<boolean>', f169_x: '<string>', f170_f: '<null>', f171_p: '<object>', f172_i: '<array>', f173_l: '<number>', f174_q: '<number>', f175_u: '<object>', f176_g: '<array>', f177_r: '<boolean>', f178_s: '<array>', f179_l: '<object>', f180_o: '<null>', f181_a: '<array>', f182_i: '<boolean>', f183_z: '<number>'}, 'MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk');
    var put_5 = objectStore_1379.put({f0_k: '<string>', f1_g: '<array>', f2_u: '<null>', f3_c: '<string>', f4_o: '<array>', f5_n: '<string>'}, 'BgezCyYJpDHxJrpWAAZpAOXdNqSNzPVKlinBiLRCmaGkKBIcDzXDCuEgBQfHvPjjzTEmJmYUvzYekJOnMXefncvFYUVWxtgpxugrlzbuHugnKebjPDZcbBjRYnTDljxcYuoCUmNpgRnPpiDWMsGrZGsaiinCNZMoWOhpJOQozPXMDnqpVQjvLNSSYRoaZRZkLEezETvcXgspKhOvQkymmxzjJLbDpYBqXqgFSXtPBbRTXbOQFytUMfCmZovNliHfVUavULXHRUxcPGFVwRVxdIDjSSOZrqaEmrboWehZVMlqfAydSaCZjJtvOMnDHzuRxCePFLYjUKCmFbjdxyPXiNxNzAjDgsOKzpZhLbXmGFiCHcbbabRLTSdwGsQrywdFhzpphgGTgoKVJqoEWKsOaTjegRsQRidiXuOmsgLfeHGTJoUIiUxqdmNBwSpCnEzlKQZUDiQBxxkSPCfRoIITtlciHxakUnadBbmEIbLRbTRgnpVfGKAUDarSOzmWYjkeRhLQKSFFIQpFUBuiqEQUTCNHsTpZgpeAyojGRSIksPuDjMaLJwOnuRDItdOBLSIsppaUCMTZEvhiXYkIhECUxEhcDqlcEzSCSswLlyecmpVTRxRqxqWvIqQHEtEqtvqVtfMwYOGtiHXNtHZliVrBBSurWvrLPjjItuMgXSTXquffApIzSKYcrdBXNTAozeALVbokcVrtYXIIFlXtPwJDKzAEcrngaZdviXpetqJYtJeHLxZlqsdmFGvmnCjvlvxtyinWzwppqdDzoqIoXXImLgTBrSnnZsjpVqkHRIpAwuywzIgXYoyFSKfqhx');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('BgezCyYJpDHxJrpWAAZpAOXdNqSNzPVKlinBiLRCmaGkKBIcDzXDCuEgBQfHvPjjzTEmJmYUvzYekJOnMXefncvFYUVWxtgpxugrlzbuHugnKebjPDZcbBjRYnTDljxcYuoCUmNpgRnPpiDWMsGrZGsaiinCNZMoWOhpJOQozPXMDnqpVQjvLNSSYRoaZRZkLEezETvcXgspKhOvQkymmxzjJLbDpYBqXqgFSXtPBbRTXbOQFytUMfCmZovNliHfVUavULXHRUxcPGFVwRVxdIDjSSOZrqaEmrboWehZVMlqfAydSaCZjJtvOMnDHzuRxCePFLYjUKCmFbjdxyPXiNxNzAjDgsOKzpZhLbXmGFiCHcbbabRLTSdwGsQrywdFhzpphgGTgoKVJqoEWKsOaTjegRsQRidiXuOmsgLfeHGTJoUIiUxqdmNBwSpCnEzlKQZUDiQBxxkSPCfRoIITtlciHxakUnadBbmEIbLRbTRgnpVfGKAUDarSOzmWYjkeRhLQKSFFIQpFUBuiqEQUTCNHsTpZgpeAyojGRSIksPuDjMaLJwOnuRDItdOBLSIsppaUCMTZEvhiXYkIhECUxEhcDqlcEzSCSswLlyecmpVTRxRqxqWvIqQHEtEqtvqVtfMwYOGtiHXNtHZliVrBBSurWvrLPjjItuMgXSTXquffApIzSKYcrdBXNTAozeALVbokcVrtYXIIFlXtPwJDKzAEcrngaZdviXpetqJYtJeHLxZlqsdmFGvmnCjvlvxtyinWzwppqdDzoqIoXXImLgTBrSnnZsjpVqkHRIpAwuywzIgXYoyFSKfqhx', true);
        get_0 = objectStore_1379.get(KeyRange_4);
    }
    catch (e){
    }

    var put_6 = objectStore_1379.put({f0_a: '<number>', f1_z: '<string>', f2_n: '<number>', f3_q: '<boolean>', f4_z: '<null>'}, 'TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX');
    var clear_3 = objectStore_1379.clear();
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX', 'BgezCyYJpDHxJrpWAAZpAOXdNqSNzPVKlinBiLRCmaGkKBIcDzXDCuEgBQfHvPjjzTEmJmYUvzYekJOnMXefncvFYUVWxtgpxugrlzbuHugnKebjPDZcbBjRYnTDljxcYuoCUmNpgRnPpiDWMsGrZGsaiinCNZMoWOhpJOQozPXMDnqpVQjvLNSSYRoaZRZkLEezETvcXgspKhOvQkymmxzjJLbDpYBqXqgFSXtPBbRTXbOQFytUMfCmZovNliHfVUavULXHRUxcPGFVwRVxdIDjSSOZrqaEmrboWehZVMlqfAydSaCZjJtvOMnDHzuRxCePFLYjUKCmFbjdxyPXiNxNzAjDgsOKzpZhLbXmGFiCHcbbabRLTSdwGsQrywdFhzpphgGTgoKVJqoEWKsOaTjegRsQRidiXuOmsgLfeHGTJoUIiUxqdmNBwSpCnEzlKQZUDiQBxxkSPCfRoIITtlciHxakUnadBbmEIbLRbTRgnpVfGKAUDarSOzmWYjkeRhLQKSFFIQpFUBuiqEQUTCNHsTpZgpeAyojGRSIksPuDjMaLJwOnuRDItdOBLSIsppaUCMTZEvhiXYkIhECUxEhcDqlcEzSCSswLlyecmpVTRxRqxqWvIqQHEtEqtvqVtfMwYOGtiHXNtHZliVrBBSurWvrLPjjItuMgXSTXquffApIzSKYcrdBXNTAozeALVbokcVrtYXIIFlXtPwJDKzAEcrngaZdviXpetqJYtJeHLxZlqsdmFGvmnCjvlvxtyinWzwppqdDzoqIoXXImLgTBrSnnZsjpVqkHRIpAwuywzIgXYoyFSKfqhx', false, false);
        count_3 = objectStore_1379.count(KeyRange_6);
    }
    catch (e){
    }

    var put_7 = objectStore_1379.put({f0_g: '<boolean>', f1_z: '<null>', f2_d: '<null>', f3_r: '<string>', f4_c: '<number>', f5_i: '<array>', f6_y: '<array>', f7_m: '<number>', f8_d: '<array>'}, 'jGYJcnldlfxGqiKgSQnKMdRjNAmzVesSOrBRTscFMfzacpDVtaFwqtUDkvBEEYUuHIIxVefSOmudVAsNEJiiznYzvALDfauGGOvYNvZNHtcWHbHNlFLgoQbPaLWKAgPRfPdTIfviVlhZGmEQNLReyLpEOWMOQNdxkPczzPjgqPtOrCnArzJpoKoOpYjzJCjQFHBxosOBFjjLAAFNNUymCBEriZhhrxblWOoZWlRISCIoxkfkOuebEHawrxyvrpgcOkFIPZGZkCbUsDkiMkPKbEGAWFqQeoaVMHnrkKRylvMbCtbBmClBUrpQWMkdebrEwCbILOWzHgYslwOwpnbGrntETcaJwiVoGuTNGtGqhUsAuPwroHgSPTkDaRavnGlBzCDaADLrZJhVQhAEokCqXfhLqTkwKdkkkCoZkgIeNIRQiknszcPnkOYFGXpQVgrQUpRDYdVmPtFZnHtdeezccHAivpvGWlLRXoOvVLspqALnIcbqHrAgzicqCzmlhmKfipKRadmlYOUNmrbRqTyaZkDpcIbEUojqvNqcaNaXFeJMsHTheOfXgtfIrEUrKpUoBWEBZIelIbSmKHeuSOOLgdeqAVdWCmHCYRpJwsGJlpY');
    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.only('MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk');
        getAllKeys_1 = objectStore_1379.getAllKeys(KeyRange_8, 3577705884);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('jGYJcnldlfxGqiKgSQnKMdRjNAmzVesSOrBRTscFMfzacpDVtaFwqtUDkvBEEYUuHIIxVefSOmudVAsNEJiiznYzvALDfauGGOvYNvZNHtcWHbHNlFLgoQbPaLWKAgPRfPdTIfviVlhZGmEQNLReyLpEOWMOQNdxkPczzPjgqPtOrCnArzJpoKoOpYjzJCjQFHBxosOBFjjLAAFNNUymCBEriZhhrxblWOoZWlRISCIoxkfkOuebEHawrxyvrpgcOkFIPZGZkCbUsDkiMkPKbEGAWFqQeoaVMHnrkKRylvMbCtbBmClBUrpQWMkdebrEwCbILOWzHgYslwOwpnbGrntETcaJwiVoGuTNGtGqhUsAuPwroHgSPTkDaRavnGlBzCDaADLrZJhVQhAEokCqXfhLqTkwKdkkkCoZkgIeNIRQiknszcPnkOYFGXpQVgrQUpRDYdVmPtFZnHtdeezccHAivpvGWlLRXoOvVLspqALnIcbqHrAgzicqCzmlhmKfipKRadmlYOUNmrbRqTyaZkDpcIbEUojqvNqcaNaXFeJMsHTheOfXgtfIrEUrKpUoBWEBZIelIbSmKHeuSOOLgdeqAVdWCmHCYRpJwsGJlpY');
        getAllKeys_1 = objectStore_1379.getAllKeys(KeyRange_9);
    }

    var clear_4 = objectStore_1379.clear();
    var clear_5 = objectStore_1379.clear();
    txn_2075.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2075.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2075.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2076 = db.transaction(['objectStore_1378'], 'readonly', {durability:"relaxed"})
    var objectStore_1378 = txn_2076.objectStore('objectStore_1378');
    var index_0 = objectStore_1378.index('index_934');
    txn_2076.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2076.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2076.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2077 = db.transaction(['objectStore_1379'], 'readwrite', {durability:"default"})
    var objectStore_1379 = txn_2077.objectStore('objectStore_1379');
    var getAllKeys_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('jGYJcnldlfxGqiKgSQnKMdRjNAmzVesSOrBRTscFMfzacpDVtaFwqtUDkvBEEYUuHIIxVefSOmudVAsNEJiiznYzvALDfauGGOvYNvZNHtcWHbHNlFLgoQbPaLWKAgPRfPdTIfviVlhZGmEQNLReyLpEOWMOQNdxkPczzPjgqPtOrCnArzJpoKoOpYjzJCjQFHBxosOBFjjLAAFNNUymCBEriZhhrxblWOoZWlRISCIoxkfkOuebEHawrxyvrpgcOkFIPZGZkCbUsDkiMkPKbEGAWFqQeoaVMHnrkKRylvMbCtbBmClBUrpQWMkdebrEwCbILOWzHgYslwOwpnbGrntETcaJwiVoGuTNGtGqhUsAuPwroHgSPTkDaRavnGlBzCDaADLrZJhVQhAEokCqXfhLqTkwKdkkkCoZkgIeNIRQiknszcPnkOYFGXpQVgrQUpRDYdVmPtFZnHtdeezccHAivpvGWlLRXoOvVLspqALnIcbqHrAgzicqCzmlhmKfipKRadmlYOUNmrbRqTyaZkDpcIbEUojqvNqcaNaXFeJMsHTheOfXgtfIrEUrKpUoBWEBZIelIbSmKHeuSOOLgdeqAVdWCmHCYRpJwsGJlpY', 'MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk', false, false);
        getAllKeys_2 = objectStore_1379.getAllKeys(KeyRange_10, 4231066528);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk');
        getAllKeys_2 = objectStore_1379.getAllKeys(KeyRange_11);
    }

    var getAllKeys_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk', true);
        getAllKeys_3 = objectStore_1379.getAllKeys(KeyRange_12, 2039430932);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX');
        getAllKeys_3 = objectStore_1379.getAllKeys(KeyRange_13);
    }

    var get_1;
    try{
        KeyRange_14 = IDBKeyRange.only('TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX');
        get_1 = objectStore_1379.get(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.only('TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX');
        get_2 = objectStore_1379.get(KeyRange_16);
    }
    catch (e){
    }

    var add_3 = objectStore_1379.add({f0_z: '<object>', f1_z: '<string>', f2_b: '<boolean>', f3_x: '<boolean>', f4_j: '<number>'}, 'hNDoowopVPvuMRyzUBlsnvKRvHxJjZifFCVNQavrCSfVTBwkIqseTNpVNgoHRxBDRWKmAnnjZVVOFQbrqWcLRqXEOolQWiqUyRGWaCWwpScgzrscgrxGrOeFrrjYNVOdjwIIyvaXUQRwvTwMJZFPRRuiGjnFoWygYHlNDuoMOxegxazRGwmisgfiHSGEhNVToAncSueUTaftUHPwhCoxWhtINkmphZdeuZxkNlPxulJHSNuHZDfltMyvODlHJBreFWzgkpduBXtlGdviUJRxEJgjsleCSXnxAkLXmHLxEhQNxlQMDLczdPMAsdrvJftxeXKGSTciKxKmigJvLLjSzfhqPUXuKBzjmVmmYMtfFxvrOtrKrExBrMmVspIyTVsSgGsXduSMMVqqtArViyUjKtVCHxkXvqZCpAnJjIwJlcGEzOSJHeUCSNHBHmSwcplROxkaJcQFvcMTJUrAoTrifkxmKDfJiOkHpAhLWVEmSSZuNrQCKCLBfwf');
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('hNDoowopVPvuMRyzUBlsnvKRvHxJjZifFCVNQavrCSfVTBwkIqseTNpVNgoHRxBDRWKmAnnjZVVOFQbrqWcLRqXEOolQWiqUyRGWaCWwpScgzrscgrxGrOeFrrjYNVOdjwIIyvaXUQRwvTwMJZFPRRuiGjnFoWygYHlNDuoMOxegxazRGwmisgfiHSGEhNVToAncSueUTaftUHPwhCoxWhtINkmphZdeuZxkNlPxulJHSNuHZDfltMyvODlHJBreFWzgkpduBXtlGdviUJRxEJgjsleCSXnxAkLXmHLxEhQNxlQMDLczdPMAsdrvJftxeXKGSTciKxKmigJvLLjSzfhqPUXuKBzjmVmmYMtfFxvrOtrKrExBrMmVspIyTVsSgGsXduSMMVqqtArViyUjKtVCHxkXvqZCpAnJjIwJlcGEzOSJHeUCSNHBHmSwcplROxkaJcQFvcMTJUrAoTrifkxmKDfJiOkHpAhLWVEmSSZuNrQCKCLBfwf', true);
        delete_0 = objectStore_1379.delete(KeyRange_18);
    }
    catch (e){
    }

    var put_8 = objectStore_1379.put({f0_z: '<null>', f1_v: '<null>', f2_s: '<null>', f3_w: '<number>'}, 'weqDfFgCuVAPRWqyLsumFZngXGOspYgCRlRyBxTlfhsRpIJrOmBKfSuqOeFrPUccqckNxoBqxcdHlIdWjNTYHPqzLRfLOsWEukNBVTUMvHwEMdIkvunSehYGqkdVXOtyMaiizZaUYzEtWhaWBCVDSZVJhYRzUbaaZdAKYaTFOGTlpZyaUHcCTwbuBnMHQTsCiEMzNqwXKYkMZWeEjYlJTrGCdNyLtEfnkIwBhksIBEPgpEyMFCXHTTrLKTOAwajvxYSZdLAZVwwiCbHesJlzZYwWCBvtiJBUBmrGXBXVkjuxvwYNYaFyLFEOHtCLIpaOpricJMCEuiyhsgrRCEpOnFdlPgdHdWDvnlWIWzJmKStyYTEbxWKilACtIpUNWqfJGMIjwJAzGNLFbzBnfViSsaVNGBOPhtIJaYiPaEdcqXUIFuZmvmrSuYB');
    txn_2077.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2077.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2077.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2078 = db.transaction(['objectStore_1378'], 'readonly', {durability:"relaxed"})
    var objectStore_1378 = txn_2078.objectStore('objectStore_1378');
    txn_2078.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2078.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2078.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2079 = db.transaction(['objectStore_1379'], 'readonly', {durability:"strict"})
    var objectStore_1379 = txn_2079.objectStore('objectStore_1379');
    var getAllKeys_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk', false);
        getAllKeys_4 = objectStore_1379.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('jGYJcnldlfxGqiKgSQnKMdRjNAmzVesSOrBRTscFMfzacpDVtaFwqtUDkvBEEYUuHIIxVefSOmudVAsNEJiiznYzvALDfauGGOvYNvZNHtcWHbHNlFLgoQbPaLWKAgPRfPdTIfviVlhZGmEQNLReyLpEOWMOQNdxkPczzPjgqPtOrCnArzJpoKoOpYjzJCjQFHBxosOBFjjLAAFNNUymCBEriZhhrxblWOoZWlRISCIoxkfkOuebEHawrxyvrpgcOkFIPZGZkCbUsDkiMkPKbEGAWFqQeoaVMHnrkKRylvMbCtbBmClBUrpQWMkdebrEwCbILOWzHgYslwOwpnbGrntETcaJwiVoGuTNGtGqhUsAuPwroHgSPTkDaRavnGlBzCDaADLrZJhVQhAEokCqXfhLqTkwKdkkkCoZkgIeNIRQiknszcPnkOYFGXpQVgrQUpRDYdVmPtFZnHtdeezccHAivpvGWlLRXoOvVLspqALnIcbqHrAgzicqCzmlhmKfipKRadmlYOUNmrbRqTyaZkDpcIbEUojqvNqcaNaXFeJMsHTheOfXgtfIrEUrKpUoBWEBZIelIbSmKHeuSOOLgdeqAVdWCmHCYRpJwsGJlpY');
        getAllKeys_4 = objectStore_1379.getAllKeys(KeyRange_21);
    }

    var count_4 = objectStore_1379.count();
    var getAll_0 = objectStore_1379.getAll(4277078743);
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('TZpaYdxkfnGkZyANmLzHtxGUtaulgBQgmZlLkLGwQvueBrrAufaEeDfyQzditTUbEKMOfJolQLWMwRX', 'BgezCyYJpDHxJrpWAAZpAOXdNqSNzPVKlinBiLRCmaGkKBIcDzXDCuEgBQfHvPjjzTEmJmYUvzYekJOnMXefncvFYUVWxtgpxugrlzbuHugnKebjPDZcbBjRYnTDljxcYuoCUmNpgRnPpiDWMsGrZGsaiinCNZMoWOhpJOQozPXMDnqpVQjvLNSSYRoaZRZkLEezETvcXgspKhOvQkymmxzjJLbDpYBqXqgFSXtPBbRTXbOQFytUMfCmZovNliHfVUavULXHRUxcPGFVwRVxdIDjSSOZrqaEmrboWehZVMlqfAydSaCZjJtvOMnDHzuRxCePFLYjUKCmFbjdxyPXiNxNzAjDgsOKzpZhLbXmGFiCHcbbabRLTSdwGsQrywdFhzpphgGTgoKVJqoEWKsOaTjegRsQRidiXuOmsgLfeHGTJoUIiUxqdmNBwSpCnEzlKQZUDiQBxxkSPCfRoIITtlciHxakUnadBbmEIbLRbTRgnpVfGKAUDarSOzmWYjkeRhLQKSFFIQpFUBuiqEQUTCNHsTpZgpeAyojGRSIksPuDjMaLJwOnuRDItdOBLSIsppaUCMTZEvhiXYkIhECUxEhcDqlcEzSCSswLlyecmpVTRxRqxqWvIqQHEtEqtvqVtfMwYOGtiHXNtHZliVrBBSurWvrLPjjItuMgXSTXquffApIzSKYcrdBXNTAozeALVbokcVrtYXIIFlXtPwJDKzAEcrngaZdviXpetqJYtJeHLxZlqsdmFGvmnCjvlvxtyinWzwppqdDzoqIoXXImLgTBrSnnZsjpVqkHRIpAwuywzIgXYoyFSKfqhx', false, true);
        get_3 = objectStore_1379.get(KeyRange_22);
    }
    catch (e){
    }

    var count_5 = objectStore_1379.count();
    var getAll_1;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('jGYJcnldlfxGqiKgSQnKMdRjNAmzVesSOrBRTscFMfzacpDVtaFwqtUDkvBEEYUuHIIxVefSOmudVAsNEJiiznYzvALDfauGGOvYNvZNHtcWHbHNlFLgoQbPaLWKAgPRfPdTIfviVlhZGmEQNLReyLpEOWMOQNdxkPczzPjgqPtOrCnArzJpoKoOpYjzJCjQFHBxosOBFjjLAAFNNUymCBEriZhhrxblWOoZWlRISCIoxkfkOuebEHawrxyvrpgcOkFIPZGZkCbUsDkiMkPKbEGAWFqQeoaVMHnrkKRylvMbCtbBmClBUrpQWMkdebrEwCbILOWzHgYslwOwpnbGrntETcaJwiVoGuTNGtGqhUsAuPwroHgSPTkDaRavnGlBzCDaADLrZJhVQhAEokCqXfhLqTkwKdkkkCoZkgIeNIRQiknszcPnkOYFGXpQVgrQUpRDYdVmPtFZnHtdeezccHAivpvGWlLRXoOvVLspqALnIcbqHrAgzicqCzmlhmKfipKRadmlYOUNmrbRqTyaZkDpcIbEUojqvNqcaNaXFeJMsHTheOfXgtfIrEUrKpUoBWEBZIelIbSmKHeuSOOLgdeqAVdWCmHCYRpJwsGJlpY', true);
        getAll_1 = objectStore_1379.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('weqDfFgCuVAPRWqyLsumFZngXGOspYgCRlRyBxTlfhsRpIJrOmBKfSuqOeFrPUccqckNxoBqxcdHlIdWjNTYHPqzLRfLOsWEukNBVTUMvHwEMdIkvunSehYGqkdVXOtyMaiizZaUYzEtWhaWBCVDSZVJhYRzUbaaZdAKYaTFOGTlpZyaUHcCTwbuBnMHQTsCiEMzNqwXKYkMZWeEjYlJTrGCdNyLtEfnkIwBhksIBEPgpEyMFCXHTTrLKTOAwajvxYSZdLAZVwwiCbHesJlzZYwWCBvtiJBUBmrGXBXVkjuxvwYNYaFyLFEOHtCLIpaOpricJMCEuiyhsgrRCEpOnFdlPgdHdWDvnlWIWzJmKStyYTEbxWKilACtIpUNWqfJGMIjwJAzGNLFbzBnfViSsaVNGBOPhtIJaYiPaEdcqXUIFuZmvmrSuYB');
        getAll_1 = objectStore_1379.getAll(KeyRange_25);
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('MsehujuvqVWpyCbpJmgOuJdMDiJcgArHIAnMQLxUQurFwARIfpYbkeSzKctpADbQIOWyYwuaAOlqvhhGjARxVmeMUzuMnHqjIhhBOtIvdsAPqsHgvBngkrszWWaSRjxOjPKNoynddsRQqPZOrZtTmfBSlUvUgnCFBkJnzXapgSBtcmUdcgADhtezGueZfhFpoSIEKqpEloJKeaDUROoCLkXwrFRCjCVIqMtgCXCweknEMocfHyyGJwMgbxjTvWseUuQhydMLITTimDmdOIDgxlJOfXFoloZtPrTVwkiWXHCQUieDHHpGEeupVPqGBFKDHkNUxqritRcwJIlAVqNCLkVhGuWyegiEzuKsMFoAOiUoNORIgWKnZYiYZQRKyBrxUUTngHejIzzKWfYWmKeEtwYFiHHPmuHtTzUwxGJzKXIkiKfJGfDybMMAyMcBVFAoIdwQGnTDjAjEAhOaADfjPZkPNbhOPrHSEtjuBIboOCxmWZAWtQRobVLqASugisRctWlLwzzJDawtk', true);
        get_4 = objectStore_1379.get(KeyRange_26);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_1379.getAllKeys();
    var getAllKeys_6 = objectStore_1379.getAllKeys(1447574990);
    txn_2079.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2079.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2079.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4454')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};