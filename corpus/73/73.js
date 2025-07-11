let db;
const openRequest = window.indexedDB.open('str_9135', 4078101594250182)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_417', {keypath: 'sttOVVwhgquVBdhCQvTdEsBMJeoXMnohkpxrctadhtmBETcNdsruIwhfUrTwqhvJsAQJhMweGMjIhaZGXCAuRAWhgNRYqabzoQAPhtqibbrrtnhPPuCWBajdQKtVLnmmwfxIVjLRkXSDvekhMALgZduwQvYbvLHBKSytndkyTZkMmGbzoBFVwJESgNmrXLVVHFqVAqRNSmjiIZcVcspBOeHnGeqWJCfLfYXZTaJTMAPStGmLRSjQjRSwnujuVyRoYgRXuOXixZBRGJSzIrvWSNZjYkVnPsRxNUyKcmbeuToaEifHXBiARNOKRfpEyCGVVGXrwgMvWyHLYLVrChctfZvSJKNWKLpdcPNYrBYcCgOOSphDsmRUbYZkZxuilfAWBfcROxXcfTYdirLmZFnbqNhOyeWOxQyyDvbAGzyDwLKLFFZoIenQxshpmeEHPhOlykVoGAGsUoSHBxDBctrunKZfrWLlSeMlbnhMZvwEhWIFiDbnuKWRysADp'});
    var add_0 = objectStore_0.add({f0_f: '<array>', f1_t: '<number>', f2_k: '<object>', f3_m: '<object>', f4_b: '<null>'}, 'DNxzWDyYIXHoYnsKfzGzOApIjQPAZnRpoGhGPNDzbRmpUxLOlKVSSywSbHABIRlSBBTTkkrDyU');
    var clear_0 = objectStore_0.clear();
    var getAll_0 = objectStore_0.getAll(962790314);
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('DNxzWDyYIXHoYnsKfzGzOApIjQPAZnRpoGhGPNDzbRmpUxLOlKVSSywSbHABIRlSBBTTkkrDyU');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_418');
    var put_0 = objectStore_0.put({f0_j: '<number>', f1_a: '<array>', f2_n: '<null>', f3_j: '<array>'}, 'FEyxPGGYJiPyJGPqqDVMqISTeKCBCVkSIKmtpOZYriEkqiZjCRWNeDFWIyxsJSmsmWtZiJlcsAkZARStaVAgOdMJmOeeqJUIeAhOulhpnynahuOMkZDHp');
    var put_1 = objectStore_0.put({f0_w: '<null>', f1_k: '<number>', f2_k: '<string>', f3_u: '<object>', f4_d: '<boolean>', f5_q: '<boolean>', f6_f: '<array>', f7_s: '<array>', f8_j: '<boolean>', f9_p: '<array>', f10_g: '<number>', f11_t: '<null>', f12_q: '<boolean>', f13_m: '<array>', f14_d: '<array>', f15_c: '<number>', f16_p: '<number>', f17_f: '<null>', f18_v: '<boolean>', f19_o: '<array>', f20_c: '<array>', f21_z: '<array>', f22_o: '<boolean>', f23_g: '<string>', f24_t: '<number>', f25_o: '<string>', f26_t: '<array>', f27_b: '<boolean>', f28_i: '<string>', f29_e: '<null>', f30_w: '<boolean>', f31_w: '<array>', f32_x: '<number>', f33_t: '<number>', f34_h: '<boolean>', f35_b: '<object>', f36_j: '<array>', f37_m: '<array>', f38_u: '<boolean>', f39_d: '<string>', f40_q: '<boolean>', f41_p: '<object>', f42_p: '<string>', f43_q: '<array>', f44_p: '<array>', f45_e: '<object>', f46_d: '<null>', f47_e: '<object>', f48_u: '<string>', f49_w: '<number>', f50_v: '<array>', f51_z: '<object>', f52_a: '<string>', f53_y: '<null>', f54_a: '<array>', f55_x: '<array>', f56_h: '<string>', f57_a: '<array>', f58_y: '<boolean>', f59_z: '<array>', f60_t: '<boolean>', f61_p: '<boolean>', f62_i: '<null>', f63_n: '<array>', f64_o: '<number>', f65_q: '<string>', f66_a: '<null>', f67_x: '<null>', f68_d: '<string>', f69_n: '<array>', f70_p: '<number>', f71_h: '<array>', f72_k: '<boolean>', f73_h: '<array>', f74_e: '<object>', f75_t: '<object>', f76_t: '<array>', f77_u: '<string>', f78_a: '<null>', f79_f: '<array>', f80_g: '<array>', f81_j: '<number>', f82_e: '<null>', f83_y: '<null>', f84_h: '<null>', f85_u: '<number>', f86_h: '<number>', f87_t: '<array>', f88_v: '<string>', f89_f: '<number>', f90_h: '<string>', f91_e: '<null>', f92_c: '<number>', f93_r: '<array>', f94_v: '<number>', f95_f: '<array>', f96_g: '<number>', f97_r: '<null>', f98_l: '<string>', f99_z: '<number>', f100_q: '<object>', f101_n: '<number>', f102_a: '<array>', f103_s: '<object>', f104_w: '<object>', f105_z: '<number>', f106_c: '<array>', f107_e: '<number>', f108_q: '<null>', f109_u: '<string>', f110_x: '<string>', f111_f: '<array>', f112_b: '<null>', f113_x: '<string>', f114_c: '<string>', f115_w: '<null>', f116_z: '<string>', f117_r: '<array>', f118_u: '<array>', f119_j: '<number>', f120_z: '<object>', f121_j: '<object>', f122_p: '<string>', f123_m: '<array>', f124_w: '<string>', f125_l: '<boolean>', f126_q: '<array>', f127_s: '<boolean>', f128_y: '<string>', f129_n: '<boolean>', f130_s: '<array>', f131_m: '<boolean>', f132_p: '<number>', f133_c: '<number>', f134_s: '<object>', f135_j: '<boolean>', f136_h: '<number>', f137_u: '<null>', f138_y: '<object>', f139_l: '<boolean>', f140_h: '<string>', f141_q: '<null>', f142_b: '<array>', f143_k: '<boolean>', f144_z: '<string>', f145_e: '<null>', f146_o: '<string>', f147_q: '<boolean>', f148_z: '<object>', f149_q: '<string>', f150_e: '<null>', f151_p: '<null>', f152_r: '<number>', f153_d: '<boolean>', f154_e: '<object>', f155_k: '<string>', f156_j: '<null>', f157_l: '<array>', f158_t: '<boolean>', f159_p: '<number>', f160_b: '<null>', f161_m: '<null>', f162_x: '<boolean>', f163_r: '<array>', f164_u: '<object>', f165_u: '<object>', f166_d: '<boolean>', f167_m: '<boolean>', f168_c: '<string>', f169_j: '<null>', f170_z: '<string>', f171_a: '<number>', f172_j: '<number>', f173_e: '<string>', f174_q: '<number>', f175_n: '<array>', f176_a: '<null>', f177_y: '<object>', f178_d: '<number>', f179_v: '<null>', f180_c: '<boolean>', f181_i: '<object>', f182_k: '<string>', f183_b: '<boolean>', f184_c: '<object>', f185_y: '<boolean>', f186_m: '<boolean>', f187_n: '<number>', f188_g: '<object>', f189_k: '<array>', f190_b: '<string>', f191_r: '<boolean>', f192_a: '<boolean>', f193_z: '<string>', f194_o: '<null>', f195_y: '<null>', f196_y: '<object>', f197_r: '<null>', f198_t: '<boolean>', f199_b: '<array>', f200_y: '<boolean>', f201_q: '<boolean>', f202_g: '<array>', f203_k: '<object>', f204_z: '<number>', f205_k: '<null>', f206_u: '<null>', f207_r: '<array>', f208_r: '<string>', f209_q: '<number>', f210_w: '<boolean>', f211_d: '<object>', f212_y: '<number>', f213_c: '<object>', f214_m: '<array>', f215_p: '<array>', f216_j: '<null>', f217_o: '<string>', f218_v: '<boolean>', f219_u: '<number>', f220_l: '<array>', f221_z: '<null>', f222_d: '<null>', f223_b: '<object>', f224_t: '<array>', f225_x: '<object>', f226_v: '<string>', f227_o: '<number>', f228_n: '<null>', f229_d: '<object>', f230_q: '<boolean>', f231_s: '<string>', f232_t: '<number>', f233_x: '<boolean>', f234_l: '<object>', f235_x: '<number>', f236_n: '<object>', f237_u: '<string>', f238_e: '<string>', f239_r: '<array>'}, 'FoRNScwIIjcjcauWVFsgxxSSikcyDVlqnLnEbYWpHbCWxwbMmgzDeBMNwpQEhurykmQWMqvtKPiyooTjUiWBlnZfXfxBeHsyefpZCuWPitXWORgCMwufglKKMFyFzZtptJGtOedPpSYdIVYdomeIpABUBLfLAoXZXKeFaCzxgtiMBdEKcfHKlaxkowNIJtdmNXkvdfAticlmdQOghGPewSCtIDnPTGFGpHXzUORnUntEJJTxuYYtodKPKDXqOWIAmBnYyPMOwVYvQzkdjamLwSwmaaXMnlCADMgskZvVSOAUKSQkqOqRyhSmjtnrQkzmZrQWiIGuIHifGhZusKuCgrrlgCLLogrmcyKUeqdXxBOGfLAxXQTBRiCbasBqDEXefoTLGAEdmnGDqfHwDHJpsHwsmyfcfOwSCPpvjSpANQbKiQepjpTKOOZjVqUFxTCuZCkXwweefXKzpKjancxchDyKUKkItapuBoMDpVTihZWWDfmYlnRqoDgKddptROiHAbmgOADQGkxsiGydjbBEhtekuZdiclhKgJPPwxYpmiheaILEOkUeOTaVawmMjahjbdMAqgCavcqEXXSRueFSkmNqRdvRuGoyioMhrTNhxcUhTntHLkAjMGctzaSFCkrvfDrxYwlsjvrJFrosJAwEPxlwvPsNCrkXMFeouSeKGqvMAqfROqruLGtrYktW');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_1.clear();
    var count_0 = objectStore_0.count();
    var index_268 = objectStore_1.createIndex('index_268', 'test', {multiEntry: true});
    var add_1 = objectStore_0.add({f0_r: '<boolean>', f1_f: '<object>', f2_x: '<null>'}, 'rEUvfmRrqZdYrpGHjmUksYxgglIZtghUUnMRiWdwxIKjTtZfVtwhnPpQAyxjPhHxVnDunTCEteQeMcOKyLNirOFOuLlBpujvlhvnIITipFMaFGaeVIQUvqLFqSudslZvqQNXsFsVNxGolqGHgfOrdutqhhYiXIkEMGedUxuEvhDnsqfrhIsKLLVzVrjQoqUKnHhEkiUQEyKasUMbgAMpXZQCsoQUjKqMzygjUyirfMnqJDbAvmkuoybeuRqWoAYKvDBIfDtzWpHhNjpMfEHaaefULQitWIPkEsTPbxJVMOJIeBgUopYkOpWjRWOYlMCxVEtWmqucEcsOPrYGwyIlksYneTqzLKVMUjLEyhQDdPkiKDQFWxOsVjowkSgSywbMOhqxnoXQEufTaAnoIjLunavuEDlvUCeHKvsmQjceRINZmmaviRANYNIaOueHpYEHghLlgnRjEOJOqIuUSEYTBNKJDunERvPUgdPWGNntXNwVNyScHsrJEhtuoSQQdIKMoQVvRWhzWKzEObiCNWIqlGWSEXGidDNKawapzuzCoSyYDcExavkjpzoSDJwmUWYXEXrXiqOvjyveqXOdsScYDPYrzEILCCZJdMOEBkCNbvftRdBvmAtqLZkYBGYycUbxGoYCqzIqcolUmVSNekUDkEraboeOwilpbQvpLBSzXlwxNkwEnpxVsjBiAJFmDjOyvXOaqWzxRoxVIIkvScEBeSpXHNshqWwgwbfEVuqufiYmEhpGclxlDunxhtGCrZHClKkrtaCyYrdUEOgYoNDiKxTycvDexhRdLLJGtlcUUszZnxKEjqYLicgxnLlIoEGcWjCWExoavFQjLejoSAIJAKjNzrp');
    var objectStore_2 = db.createObjectStore('objectStore_419', {autoIncrement: true});
    var clear_3 = objectStore_0.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_630 = db.transaction(['objectStore_417', 'objectStore_418'], 'readonly', {durability:"default"})
    var objectStore_418 = txn_630.objectStore('objectStore_418');
    var index_0 = objectStore_418.index('index_268');
    txn_630.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_630.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_630.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_631 = db.transaction(['objectStore_418'], 'readwrite', {durability:"default"})
    var objectStore_418 = txn_631.objectStore('objectStore_418');
    var add_2 = objectStore_418.add({f0_d: '<object>', f1_q: '<null>', f2_w: '<object>', f3_q: '<number>', f4_s: '<null>', f5_h: '<null>', f6_f: '<null>', f7_p: '<object>'}, 'YniNGXNsFOwlAfWabxUbzVZBwlhRtCaBHfhwBgXtZCLTuvlvWbVvUOXPykLrB');
    var count_1 = objectStore_418.count();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('YniNGXNsFOwlAfWabxUbzVZBwlhRtCaBHfhwBgXtZCLTuvlvWbVvUOXPykLrB');
        get_1 = objectStore_418.get(KeyRange_2);
    }
    catch (e){
    }

    var add_3 = objectStore_418.add({f0_m: '<string>', f1_o: '<object>', f2_k: '<boolean>', f3_f: '<boolean>', f4_x: '<number>', f5_d: '<array>', f6_m: '<number>', f7_e: '<string>'}, 'xmgxpAALcytMCPNyKhysbMRxcrHaSuCjympHgCtwwNzzSHgaheosGVGxNNXztnaZCIMMOzeebbqvdnUJKENTsiiBXhVsStgPhjnyeqxHrwBxRRhFbpUtNQncSWiOrTYStKMRfTGdsCwDFZwqpxzZGDLwNKnXXUZpnHfIbmAkauGOlXNXPwpvWqJvvzHPexjtokNSnFCvTCHYoEzaupvPXubhVXAtxGANWRAbkbNBwRFUyGjCyWnYpAcOtMShkdUHcRLcmvMTUXATOhSYQhNhniEIMdJsORbwkymYQzRdUDrRVkeYVZIZVYsGUURnbDXGQnbNSqenoOojRwEvhaQpINRUUfzsioEweYcTzvVypiGORZJKeitfbwBimBzPviMlSAqGjqMBDdZukZLBUBgSRNioewpFFPjLkOQyyggtnIRfxoFJvtmqzaSWDHklajwctObBzQDASrXZAkCqImTmCcZbDIKEAXhNIZWmRnZxeUjAfdFvItmrjZNLEYuFlyABtEPtiZsEMlPshBfmEkadaiCuGsPpCQAAByFokBagxVeWvVJNtWdDkAwXStBuXPKxAFVtVnCwVWzOwwYIoOgGFYmdQJqQIgEscWucdLqBrRvZwdZtnVfZjZwSsQEwsVGouSVwLdbYTcyCwEfTLKHrliJyXESekwNWvCAbQkikYgRDrFPAqEdfsTCoVXkNPSKIdbpCMajZpFosagpetpCfNSyqxsUeXXVPwmspbOddnMmzJzfMQvPrglnNNwdpzdDKWBtgBzHfSLABtvkYcQeKbAidjtAODckTwckERtWopMCwcIQiDVjXaokVsdABLbLreoxlinwwmuClAgNGOLrXLdHtWdqtzlmYZSUpJIcmkedyxfsjHSvlDlvqCPvbyISEiPnOyXmojXBytjlrFNNIPlyPGvINmhHbZGwTMeaxuxnOnHUlQGOkoipzwtyPgNxEwTuYLPiaBMeFBSnCng');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('xmgxpAALcytMCPNyKhysbMRxcrHaSuCjympHgCtwwNzzSHgaheosGVGxNNXztnaZCIMMOzeebbqvdnUJKENTsiiBXhVsStgPhjnyeqxHrwBxRRhFbpUtNQncSWiOrTYStKMRfTGdsCwDFZwqpxzZGDLwNKnXXUZpnHfIbmAkauGOlXNXPwpvWqJvvzHPexjtokNSnFCvTCHYoEzaupvPXubhVXAtxGANWRAbkbNBwRFUyGjCyWnYpAcOtMShkdUHcRLcmvMTUXATOhSYQhNhniEIMdJsORbwkymYQzRdUDrRVkeYVZIZVYsGUURnbDXGQnbNSqenoOojRwEvhaQpINRUUfzsioEweYcTzvVypiGORZJKeitfbwBimBzPviMlSAqGjqMBDdZukZLBUBgSRNioewpFFPjLkOQyyggtnIRfxoFJvtmqzaSWDHklajwctObBzQDASrXZAkCqImTmCcZbDIKEAXhNIZWmRnZxeUjAfdFvItmrjZNLEYuFlyABtEPtiZsEMlPshBfmEkadaiCuGsPpCQAAByFokBagxVeWvVJNtWdDkAwXStBuXPKxAFVtVnCwVWzOwwYIoOgGFYmdQJqQIgEscWucdLqBrRvZwdZtnVfZjZwSsQEwsVGouSVwLdbYTcyCwEfTLKHrliJyXESekwNWvCAbQkikYgRDrFPAqEdfsTCoVXkNPSKIdbpCMajZpFosagpetpCfNSyqxsUeXXVPwmspbOddnMmzJzfMQvPrglnNNwdpzdDKWBtgBzHfSLABtvkYcQeKbAidjtAODckTwckERtWopMCwcIQiDVjXaokVsdABLbLreoxlinwwmuClAgNGOLrXLdHtWdqtzlmYZSUpJIcmkedyxfsjHSvlDlvqCPvbyISEiPnOyXmojXBytjlrFNNIPlyPGvINmhHbZGwTMeaxuxnOnHUlQGOkoipzwtyPgNxEwTuYLPiaBMeFBSnCng', 'YniNGXNsFOwlAfWabxUbzVZBwlhRtCaBHfhwBgXtZCLTuvlvWbVvUOXPykLrB', false, true);
        get_2 = objectStore_418.get(KeyRange_4);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('xmgxpAALcytMCPNyKhysbMRxcrHaSuCjympHgCtwwNzzSHgaheosGVGxNNXztnaZCIMMOzeebbqvdnUJKENTsiiBXhVsStgPhjnyeqxHrwBxRRhFbpUtNQncSWiOrTYStKMRfTGdsCwDFZwqpxzZGDLwNKnXXUZpnHfIbmAkauGOlXNXPwpvWqJvvzHPexjtokNSnFCvTCHYoEzaupvPXubhVXAtxGANWRAbkbNBwRFUyGjCyWnYpAcOtMShkdUHcRLcmvMTUXATOhSYQhNhniEIMdJsORbwkymYQzRdUDrRVkeYVZIZVYsGUURnbDXGQnbNSqenoOojRwEvhaQpINRUUfzsioEweYcTzvVypiGORZJKeitfbwBimBzPviMlSAqGjqMBDdZukZLBUBgSRNioewpFFPjLkOQyyggtnIRfxoFJvtmqzaSWDHklajwctObBzQDASrXZAkCqImTmCcZbDIKEAXhNIZWmRnZxeUjAfdFvItmrjZNLEYuFlyABtEPtiZsEMlPshBfmEkadaiCuGsPpCQAAByFokBagxVeWvVJNtWdDkAwXStBuXPKxAFVtVnCwVWzOwwYIoOgGFYmdQJqQIgEscWucdLqBrRvZwdZtnVfZjZwSsQEwsVGouSVwLdbYTcyCwEfTLKHrliJyXESekwNWvCAbQkikYgRDrFPAqEdfsTCoVXkNPSKIdbpCMajZpFosagpetpCfNSyqxsUeXXVPwmspbOddnMmzJzfMQvPrglnNNwdpzdDKWBtgBzHfSLABtvkYcQeKbAidjtAODckTwckERtWopMCwcIQiDVjXaokVsdABLbLreoxlinwwmuClAgNGOLrXLdHtWdqtzlmYZSUpJIcmkedyxfsjHSvlDlvqCPvbyISEiPnOyXmojXBytjlrFNNIPlyPGvINmhHbZGwTMeaxuxnOnHUlQGOkoipzwtyPgNxEwTuYLPiaBMeFBSnCng', true);
        delete_0 = objectStore_418.delete(KeyRange_6);
    }
    catch (e){
    }

    var add_4 = objectStore_418.add({f0_d: '<string>', f1_l: '<null>', f2_j: '<object>'}, 'OLSmnCaAqOpFjnEwghgILrpjoAoEJvVZzwdzNyozERckleAcvsWkkjbzBNhIZoNQljAHMfOzWKoxrStkmVYIQeIXgZjJEsArZCnIUukbeXTNHiUGgthxaIeOcWIJgWcEfUuZtdQcrVkiDRDfmtIzvcwTlKpeMmiLabbWKGJUNKzXoJDwGlgAPmfGXnlFSSpjFOukKdhqfjvGXkffhkyNQqlbArwTRlmZzHNYnjUjWoMdPOwfsJxHtdiASEbKJrhhhYxoYRhdEsRbKqMqCZBdFIbEvsFtmikDummzUoNKXlibaFjwaPKYGJPphTEnvxsQMHZaiXtthhuhdvITyTYCbFhqoULbHLepRZHgfBCsGJAXjdsbCtueaTbPBnoFgEqJfNdPkbIMcBVYPTbPRRxdeaIkzwWbWAioJKnVrdReMeiTRJGZtRyzVfuqjxZygTogRkKADWuhwivtzilsmyqsVQfl');
    var put_2 = objectStore_418.put({f0_v: '<null>', f1_w: '<null>'}, 'vOrfAekPlKZiSGztFXksIUBCNWObKKvQLvTkIwCNkpnVEXbLyzhEJZAgtGKYMYoFnXrmVolwozSrEpynqpswasgikTSYjSGuIJVRHtSBAiNoXMRhFiOQazcyNeMvvljWYHVjQKDGZOiUnHhiZZMivYqTwrsbuTieXjjLzLGXOvKYTuiHCPLJfHYqhGWtuMiAvLLZxjBOYBuEuMrYrvAGjllbzqjuNHOfykUyrDmmDLPqbDQhpNKMqzTdoxflJwmXQYmpxbKBmJGhEIeYJLkBzLuKNukpogaEDgolsBSDhzSIhaKXWekzhRHvdlAZeYRuvQrQVhHqULZJxfqHEyiBNDxqyvWNEehpAbVEkxXojuHvTQkZfltuQxFIApOtnHaxoAWbYOCjLwOixDenzfewSxWGCdTpwDAFxOziBJepywmgsTsLCtoZwGHfCCsWZvXnFvMlgKWyaCQaUDekQwLeaknjWVwQHehJBlnIxKqVkYbtPGTjJjgVhjiuRprJeClrXtJtEfpJuHrSABxSijeGXzAacmVvyySTqyaNjQjpnshsAHCGMFdDDeMHsaVGCneidrdSdyHNdjVGMJuvbJEtvYvAHLfNDuITmOdnaodrPNifvfIbpWmtWIcQCgzXUEKWcqmDPjFoaZzfBKlfMUlQCEavGctOSPqCnEzCXqnxrkVWhnpsnOGlMALIrAMRNoSHPtpxUDCAjgmWawwGjCRZPNmFtBTaFfhXNOHfyptiboYbJZYmzgdXOpzaeBYblrhqNpXotggadPOzlxhdzxfJFPtNTwzznMeDQwSVNgyVpqsZlqDBSzDuItJttRcxiagMMoLfGAWKOkqUOvouMYudODkQvAHFHqxvUzlmltXVyswFucFHBgbpwXxpAMqEPWCchyeHSbCARfnhCUoihGQzVpCXGqDxkgzgmhSL');
    var getAll_1 = objectStore_418.getAll();
    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.only('YniNGXNsFOwlAfWabxUbzVZBwlhRtCaBHfhwBgXtZCLTuvlvWbVvUOXPykLrB');
        get_3 = objectStore_418.get(KeyRange_8);
    }
    catch (e){
    }

    var clear_4 = objectStore_418.clear();
    var clear_5 = objectStore_418.clear();
    var count_2 = objectStore_418.count();
    txn_631.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_631.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_631.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_632 = db.transaction(['objectStore_419'], 'readonly', {durability:"strict"})
    var objectStore_419 = txn_632.objectStore('objectStore_419');
    txn_632.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_632.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_632.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_633 = db.transaction(['objectStore_419', 'objectStore_417'], 'readonly', {durability:"relaxed"})
    var objectStore_419 = txn_633.objectStore('objectStore_419');
    txn_633.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_633.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_633.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_634 = db.transaction(['objectStore_417'], 'readonly', {durability:"relaxed"})
    var objectStore_417 = txn_634.objectStore('objectStore_417');
    var count_3 = objectStore_417.count();
    var getAll_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('FoRNScwIIjcjcauWVFsgxxSSikcyDVlqnLnEbYWpHbCWxwbMmgzDeBMNwpQEhurykmQWMqvtKPiyooTjUiWBlnZfXfxBeHsyefpZCuWPitXWORgCMwufglKKMFyFzZtptJGtOedPpSYdIVYdomeIpABUBLfLAoXZXKeFaCzxgtiMBdEKcfHKlaxkowNIJtdmNXkvdfAticlmdQOghGPewSCtIDnPTGFGpHXzUORnUntEJJTxuYYtodKPKDXqOWIAmBnYyPMOwVYvQzkdjamLwSwmaaXMnlCADMgskZvVSOAUKSQkqOqRyhSmjtnrQkzmZrQWiIGuIHifGhZusKuCgrrlgCLLogrmcyKUeqdXxBOGfLAxXQTBRiCbasBqDEXefoTLGAEdmnGDqfHwDHJpsHwsmyfcfOwSCPpvjSpANQbKiQepjpTKOOZjVqUFxTCuZCkXwweefXKzpKjancxchDyKUKkItapuBoMDpVTihZWWDfmYlnRqoDgKddptROiHAbmgOADQGkxsiGydjbBEhtekuZdiclhKgJPPwxYpmiheaILEOkUeOTaVawmMjahjbdMAqgCavcqEXXSRueFSkmNqRdvRuGoyioMhrTNhxcUhTntHLkAjMGctzaSFCkrvfDrxYwlsjvrJFrosJAwEPxlwvPsNCrkXMFeouSeKGqvMAqfROqruLGtrYktW', 'FoRNScwIIjcjcauWVFsgxxSSikcyDVlqnLnEbYWpHbCWxwbMmgzDeBMNwpQEhurykmQWMqvtKPiyooTjUiWBlnZfXfxBeHsyefpZCuWPitXWORgCMwufglKKMFyFzZtptJGtOedPpSYdIVYdomeIpABUBLfLAoXZXKeFaCzxgtiMBdEKcfHKlaxkowNIJtdmNXkvdfAticlmdQOghGPewSCtIDnPTGFGpHXzUORnUntEJJTxuYYtodKPKDXqOWIAmBnYyPMOwVYvQzkdjamLwSwmaaXMnlCADMgskZvVSOAUKSQkqOqRyhSmjtnrQkzmZrQWiIGuIHifGhZusKuCgrrlgCLLogrmcyKUeqdXxBOGfLAxXQTBRiCbasBqDEXefoTLGAEdmnGDqfHwDHJpsHwsmyfcfOwSCPpvjSpANQbKiQepjpTKOOZjVqUFxTCuZCkXwweefXKzpKjancxchDyKUKkItapuBoMDpVTihZWWDfmYlnRqoDgKddptROiHAbmgOADQGkxsiGydjbBEhtekuZdiclhKgJPPwxYpmiheaILEOkUeOTaVawmMjahjbdMAqgCavcqEXXSRueFSkmNqRdvRuGoyioMhrTNhxcUhTntHLkAjMGctzaSFCkrvfDrxYwlsjvrJFrosJAwEPxlwvPsNCrkXMFeouSeKGqvMAqfROqruLGtrYktW', true, false);
        getAll_2 = objectStore_417.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('FoRNScwIIjcjcauWVFsgxxSSikcyDVlqnLnEbYWpHbCWxwbMmgzDeBMNwpQEhurykmQWMqvtKPiyooTjUiWBlnZfXfxBeHsyefpZCuWPitXWORgCMwufglKKMFyFzZtptJGtOedPpSYdIVYdomeIpABUBLfLAoXZXKeFaCzxgtiMBdEKcfHKlaxkowNIJtdmNXkvdfAticlmdQOghGPewSCtIDnPTGFGpHXzUORnUntEJJTxuYYtodKPKDXqOWIAmBnYyPMOwVYvQzkdjamLwSwmaaXMnlCADMgskZvVSOAUKSQkqOqRyhSmjtnrQkzmZrQWiIGuIHifGhZusKuCgrrlgCLLogrmcyKUeqdXxBOGfLAxXQTBRiCbasBqDEXefoTLGAEdmnGDqfHwDHJpsHwsmyfcfOwSCPpvjSpANQbKiQepjpTKOOZjVqUFxTCuZCkXwweefXKzpKjancxchDyKUKkItapuBoMDpVTihZWWDfmYlnRqoDgKddptROiHAbmgOADQGkxsiGydjbBEhtekuZdiclhKgJPPwxYpmiheaILEOkUeOTaVawmMjahjbdMAqgCavcqEXXSRueFSkmNqRdvRuGoyioMhrTNhxcUhTntHLkAjMGctzaSFCkrvfDrxYwlsjvrJFrosJAwEPxlwvPsNCrkXMFeouSeKGqvMAqfROqruLGtrYktW');
        getAll_2 = objectStore_417.getAll(KeyRange_11);
    }

    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.only('DNxzWDyYIXHoYnsKfzGzOApIjQPAZnRpoGhGPNDzbRmpUxLOlKVSSywSbHABIRlSBBTTkkrDyU');
        get_4 = objectStore_417.get(KeyRange_12);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_14 = IDBKeyRange.bound('rEUvfmRrqZdYrpGHjmUksYxgglIZtghUUnMRiWdwxIKjTtZfVtwhnPpQAyxjPhHxVnDunTCEteQeMcOKyLNirOFOuLlBpujvlhvnIITipFMaFGaeVIQUvqLFqSudslZvqQNXsFsVNxGolqGHgfOrdutqhhYiXIkEMGedUxuEvhDnsqfrhIsKLLVzVrjQoqUKnHhEkiUQEyKasUMbgAMpXZQCsoQUjKqMzygjUyirfMnqJDbAvmkuoybeuRqWoAYKvDBIfDtzWpHhNjpMfEHaaefULQitWIPkEsTPbxJVMOJIeBgUopYkOpWjRWOYlMCxVEtWmqucEcsOPrYGwyIlksYneTqzLKVMUjLEyhQDdPkiKDQFWxOsVjowkSgSywbMOhqxnoXQEufTaAnoIjLunavuEDlvUCeHKvsmQjceRINZmmaviRANYNIaOueHpYEHghLlgnRjEOJOqIuUSEYTBNKJDunERvPUgdPWGNntXNwVNyScHsrJEhtuoSQQdIKMoQVvRWhzWKzEObiCNWIqlGWSEXGidDNKawapzuzCoSyYDcExavkjpzoSDJwmUWYXEXrXiqOvjyveqXOdsScYDPYrzEILCCZJdMOEBkCNbvftRdBvmAtqLZkYBGYycUbxGoYCqzIqcolUmVSNekUDkEraboeOwilpbQvpLBSzXlwxNkwEnpxVsjBiAJFmDjOyvXOaqWzxRoxVIIkvScEBeSpXHNshqWwgwbfEVuqufiYmEhpGclxlDunxhtGCrZHClKkrtaCyYrdUEOgYoNDiKxTycvDexhRdLLJGtlcUUszZnxKEjqYLicgxnLlIoEGcWjCWExoavFQjLejoSAIJAKjNzrp', 'DNxzWDyYIXHoYnsKfzGzOApIjQPAZnRpoGhGPNDzbRmpUxLOlKVSSywSbHABIRlSBBTTkkrDyU', true, true);
        get_5 = objectStore_417.get(KeyRange_14);
    }
    catch (e){
    }

    var count_4 = objectStore_417.count();
    var get_6;
    try{
        KeyRange_16 = IDBKeyRange.only('FEyxPGGYJiPyJGPqqDVMqISTeKCBCVkSIKmtpOZYriEkqiZjCRWNeDFWIyxsJSmsmWtZiJlcsAkZARStaVAgOdMJmOeeqJUIeAhOulhpnynahuOMkZDHp');
        get_6 = objectStore_417.get(KeyRange_16);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_18 = IDBKeyRange.bound('FEyxPGGYJiPyJGPqqDVMqISTeKCBCVkSIKmtpOZYriEkqiZjCRWNeDFWIyxsJSmsmWtZiJlcsAkZARStaVAgOdMJmOeeqJUIeAhOulhpnynahuOMkZDHp', 'rEUvfmRrqZdYrpGHjmUksYxgglIZtghUUnMRiWdwxIKjTtZfVtwhnPpQAyxjPhHxVnDunTCEteQeMcOKyLNirOFOuLlBpujvlhvnIITipFMaFGaeVIQUvqLFqSudslZvqQNXsFsVNxGolqGHgfOrdutqhhYiXIkEMGedUxuEvhDnsqfrhIsKLLVzVrjQoqUKnHhEkiUQEyKasUMbgAMpXZQCsoQUjKqMzygjUyirfMnqJDbAvmkuoybeuRqWoAYKvDBIfDtzWpHhNjpMfEHaaefULQitWIPkEsTPbxJVMOJIeBgUopYkOpWjRWOYlMCxVEtWmqucEcsOPrYGwyIlksYneTqzLKVMUjLEyhQDdPkiKDQFWxOsVjowkSgSywbMOhqxnoXQEufTaAnoIjLunavuEDlvUCeHKvsmQjceRINZmmaviRANYNIaOueHpYEHghLlgnRjEOJOqIuUSEYTBNKJDunERvPUgdPWGNntXNwVNyScHsrJEhtuoSQQdIKMoQVvRWhzWKzEObiCNWIqlGWSEXGidDNKawapzuzCoSyYDcExavkjpzoSDJwmUWYXEXrXiqOvjyveqXOdsScYDPYrzEILCCZJdMOEBkCNbvftRdBvmAtqLZkYBGYycUbxGoYCqzIqcolUmVSNekUDkEraboeOwilpbQvpLBSzXlwxNkwEnpxVsjBiAJFmDjOyvXOaqWzxRoxVIIkvScEBeSpXHNshqWwgwbfEVuqufiYmEhpGclxlDunxhtGCrZHClKkrtaCyYrdUEOgYoNDiKxTycvDexhRdLLJGtlcUUszZnxKEjqYLicgxnLlIoEGcWjCWExoavFQjLejoSAIJAKjNzrp', true, false);
        get_7 = objectStore_417.get(KeyRange_18);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_20 = IDBKeyRange.only('FoRNScwIIjcjcauWVFsgxxSSikcyDVlqnLnEbYWpHbCWxwbMmgzDeBMNwpQEhurykmQWMqvtKPiyooTjUiWBlnZfXfxBeHsyefpZCuWPitXWORgCMwufglKKMFyFzZtptJGtOedPpSYdIVYdomeIpABUBLfLAoXZXKeFaCzxgtiMBdEKcfHKlaxkowNIJtdmNXkvdfAticlmdQOghGPewSCtIDnPTGFGpHXzUORnUntEJJTxuYYtodKPKDXqOWIAmBnYyPMOwVYvQzkdjamLwSwmaaXMnlCADMgskZvVSOAUKSQkqOqRyhSmjtnrQkzmZrQWiIGuIHifGhZusKuCgrrlgCLLogrmcyKUeqdXxBOGfLAxXQTBRiCbasBqDEXefoTLGAEdmnGDqfHwDHJpsHwsmyfcfOwSCPpvjSpANQbKiQepjpTKOOZjVqUFxTCuZCkXwweefXKzpKjancxchDyKUKkItapuBoMDpVTihZWWDfmYlnRqoDgKddptROiHAbmgOADQGkxsiGydjbBEhtekuZdiclhKgJPPwxYpmiheaILEOkUeOTaVawmMjahjbdMAqgCavcqEXXSRueFSkmNqRdvRuGoyioMhrTNhxcUhTntHLkAjMGctzaSFCkrvfDrxYwlsjvrJFrosJAwEPxlwvPsNCrkXMFeouSeKGqvMAqfROqruLGtrYktW');
        get_8 = objectStore_417.get(KeyRange_20);
    }
    catch (e){
    }

    var count_5 = objectStore_417.count();
    var getAll_3 = objectStore_417.getAll();
    var getAll_4 = objectStore_417.getAll(3274444665);
    txn_634.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_634.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_634.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_346')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};