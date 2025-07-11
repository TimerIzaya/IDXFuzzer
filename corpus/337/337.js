db.close()
let db;
const openRequest = window.indexedDB.open('str_5177', 7905073174388732)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2025', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_2026');
    var clear_0 = objectStore_1.clear();
    var index_1357 = objectStore_1.createIndex('index_1357', 'test', {multiEntry: true});
    var put_0 = objectStore_1.put({f0_p: '<boolean>', f1_u: '<null>', f2_x: '<object>', f3_o: '<boolean>', f4_y: '<number>', f5_j: '<null>', f6_o: '<string>', f7_g: '<object>'}, 'mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP');
    var index_1358 = objectStore_1.createIndex('index_1358', 'test', {unique: true, multiEntry: false});
    var clear_1 = objectStore_0.clear();
    var put_1 = objectStore_1.put({f0_f: '<object>', f1_v: '<object>', f2_l: '<string>', f3_j: '<boolean>', f4_u: '<number>'}, 'BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy');
    var index_1359 = objectStore_0.createIndex('index_1359', 'test', {unique: false});
    var add_0 = objectStore_0.add({f0_k: '<array>', f1_i: '<string>', f2_x: '<number>', f3_c: '<string>', f4_g: '<null>', f5_u: '<boolean>', f6_r: '<object>', f7_w: '<number>'}, 'vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', 'mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', true, false);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK', true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_a: '<object>', f1_e: '<string>', f2_z: '<boolean>', f3_z: '<boolean>'}, 'QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy', 'BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy', false, true);
        get_0 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_i: '<string>', f1_x: '<number>', f2_y: '<boolean>', f3_s: '<boolean>'}, 'glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk');
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg', 'QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg', false, false);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var add_3 = objectStore_1.add({f0_l: '<string>', f1_c: '<array>', f2_g: '<null>', f3_x: '<string>', f4_q: '<object>', f5_n: '<null>', f6_o: '<array>', f7_r: '<boolean>'}, 'IfvWAnlRJcVlTjBxhuCaBvOnqajKFwCxewLXSQIWZZaakoBfXQEJNovGYWrQRVaHLaAUdxJAz');
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg', false);
        get_2 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var add_4 = objectStore_1.add({f0_h: '<object>', f1_f: '<number>', f2_z: '<array>', f3_f: '<string>'}, 'qZzvmaeRGxpjKyjcRHViE');
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.only('IfvWAnlRJcVlTjBxhuCaBvOnqajKFwCxewLXSQIWZZaakoBfXQEJNovGYWrQRVaHLaAUdxJAz');
        get_3 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_2 = objectStore_0.clear();
    var add_5 = objectStore_0.add({f0_w: '<null>', f1_w: '<string>', f2_e: '<boolean>', f3_n: '<number>', f4_y: '<string>', f5_v: '<boolean>', f6_w: '<string>', f7_g: '<boolean>', f8_b: '<object>', f9_s: '<null>', f10_q: '<array>', f11_m: '<object>', f12_g: '<array>', f13_y: '<object>', f14_z: '<null>', f15_h: '<number>', f16_r: '<object>', f17_c: '<number>', f18_l: '<number>', f19_v: '<number>', f20_a: '<array>', f21_r: '<string>', f22_b: '<boolean>', f23_m: '<number>', f24_r: '<object>', f25_a: '<string>', f26_x: '<string>', f27_x: '<array>', f28_j: '<boolean>', f29_c: '<boolean>', f30_a: '<string>', f31_d: '<null>', f32_x: '<boolean>', f33_j: '<number>', f34_o: '<null>', f35_z: '<number>', f36_x: '<string>', f37_g: '<number>', f38_a: '<object>', f39_o: '<boolean>', f40_i: '<string>', f41_l: '<number>', f42_o: '<boolean>', f43_e: '<string>', f44_v: '<boolean>', f45_o: '<boolean>', f46_p: '<number>', f47_c: '<array>', f48_w: '<array>', f49_y: '<boolean>', f50_f: '<null>', f51_w: '<null>', f52_l: '<number>', f53_y: '<array>', f54_i: '<null>', f55_o: '<string>', f56_i: '<boolean>', f57_x: '<number>', f58_j: '<number>', f59_x: '<array>', f60_f: '<string>', f61_g: '<boolean>', f62_f: '<array>', f63_l: '<object>', f64_q: '<boolean>', f65_z: '<array>', f66_x: '<array>', f67_n: '<number>', f68_j: '<boolean>', f69_l: '<object>', f70_u: '<number>', f71_b: '<array>', f72_g: '<object>', f73_s: '<string>', f74_g: '<number>', f75_j: '<number>', f76_l: '<number>', f77_l: '<array>', f78_s: '<number>', f79_m: '<null>', f80_j: '<number>', f81_m: '<array>', f82_j: '<object>', f83_b: '<string>', f84_j: '<array>', f85_b: '<number>', f86_l: '<number>', f87_r: '<boolean>', f88_t: '<string>', f89_k: '<null>', f90_r: '<object>', f91_e: '<string>', f92_h: '<array>', f93_p: '<number>', f94_y: '<string>', f95_f: '<string>', f96_l: '<array>', f97_o: '<array>', f98_o: '<null>', f99_e: '<boolean>', f100_d: '<array>', f101_d: '<number>', f102_c: '<string>', f103_a: '<null>', f104_b: '<string>', f105_c: '<boolean>', f106_z: '<object>', f107_y: '<null>', f108_l: '<boolean>', f109_b: '<array>', f110_a: '<number>', f111_s: '<boolean>', f112_j: '<null>', f113_x: '<number>', f114_c: '<null>', f115_c: '<boolean>', f116_i: '<number>', f117_k: '<object>', f118_r: '<string>', f119_i: '<boolean>', f120_o: '<number>', f121_h: '<string>', f122_n: '<object>', f123_l: '<number>', f124_g: '<boolean>', f125_i: '<array>', f126_e: '<object>', f127_j: '<number>', f128_j: '<number>', f129_p: '<boolean>', f130_z: '<array>', f131_t: '<string>', f132_m: '<string>', f133_n: '<array>', f134_z: '<null>', f135_k: '<string>', f136_y: '<number>', f137_l: '<array>', f138_b: '<null>', f139_t: '<object>', f140_b: '<array>', f141_w: '<boolean>', f142_j: '<object>', f143_z: '<null>', f144_u: '<boolean>', f145_x: '<boolean>', f146_y: '<object>', f147_t: '<number>', f148_p: '<array>', f149_e: '<object>', f150_w: '<number>', f151_e: '<boolean>', f152_v: '<boolean>', f153_r: '<object>', f154_w: '<boolean>', f155_w: '<null>', f156_m: '<object>', f157_l: '<array>', f158_m: '<number>', f159_a: '<null>', f160_i: '<array>', f161_k: '<null>', f162_j: '<string>', f163_c: '<string>', f164_z: '<string>', f165_v: '<object>', f166_d: '<number>', f167_d: '<object>', f168_j: '<string>', f169_u: '<boolean>', f170_r: '<boolean>', f171_q: '<array>', f172_c: '<boolean>', f173_u: '<object>', f174_k: '<array>', f175_n: '<number>', f176_t: '<object>', f177_q: '<number>', f178_w: '<boolean>', f179_r: '<object>', f180_v: '<null>', f181_s: '<null>', f182_a: '<boolean>', f183_n: '<number>', f184_y: '<array>', f185_a: '<boolean>', f186_q: '<boolean>', f187_j: '<number>', f188_k: '<string>', f189_o: '<number>', f190_r: '<string>', f191_r: '<null>', f192_r: '<number>', f193_y: '<boolean>', f194_p: '<string>', f195_p: '<string>', f196_u: '<object>', f197_s: '<string>', f198_k: '<number>', f199_r: '<number>', f200_x: '<number>', f201_r: '<boolean>', f202_r: '<null>', f203_k: '<boolean>', f204_n: '<number>', f205_t: '<string>', f206_f: '<array>', f207_m: '<array>', f208_i: '<array>', f209_d: '<number>', f210_j: '<null>', f211_w: '<null>', f212_x: '<number>', f213_o: '<string>', f214_m: '<boolean>', f215_i: '<null>', f216_q: '<string>', f217_w: '<array>', f218_o: '<string>', f219_f: '<boolean>', f220_n: '<null>', f221_w: '<array>', f222_y: '<array>', f223_b: '<object>', f224_m: '<array>', f225_x: '<array>', f226_v: '<boolean>', f227_x: '<array>', f228_e: '<string>', f229_u: '<object>', f230_k: '<object>', f231_c: '<object>', f232_z: '<number>', f233_q: '<object>', f234_w: '<object>', f235_q: '<number>', f236_m: '<object>', f237_o: '<string>', f238_s: '<null>', f239_i: '<object>', f240_n: '<number>', f241_g: '<number>', f242_l: '<object>', f243_g: '<number>', f244_u: '<number>', f245_o: '<string>', f246_k: '<object>', f247_n: '<boolean>', f248_o: '<null>', f249_n: '<string>', f250_y: '<string>', f251_t: '<object>', f252_u: '<null>', f253_z: '<null>', f254_p: '<object>', f255_x: '<null>', f256_d: '<object>', f257_z: '<null>', f258_c: '<null>', f259_f: '<null>', f260_b: '<boolean>', f261_r: '<null>', f262_l: '<number>', f263_k: '<array>', f264_o: '<boolean>', f265_n: '<array>', f266_w: '<boolean>', f267_y: '<object>', f268_e: '<null>', f269_u: '<object>', f270_f: '<boolean>', f271_m: '<object>', f272_t: '<array>', f273_g: '<array>', f274_y: '<number>', f275_c: '<array>', f276_d: '<null>', f277_r: '<string>', f278_i: '<null>', f279_k: '<array>', f280_f: '<boolean>', f281_d: '<string>', f282_v: '<array>', f283_b: '<boolean>', f284_r: '<object>', f285_x: '<array>', f286_a: '<number>', f287_o: '<null>', f288_z: '<string>', f289_k: '<array>', f290_a: '<object>', f291_e: '<string>', f292_l: '<boolean>', f293_v: '<boolean>', f294_d: '<number>', f295_j: '<number>', f296_y: '<array>', f297_l: '<boolean>', f298_f: '<boolean>', f299_j: '<boolean>', f300_r: '<null>', f301_o: '<null>', f302_j: '<number>', f303_a: '<object>', f304_k: '<boolean>', f305_w: '<array>', f306_t: '<array>', f307_e: '<number>', f308_q: '<array>', f309_s: '<number>', f310_n: '<null>', f311_v: '<boolean>', f312_p: '<array>', f313_h: '<number>', f314_v: '<boolean>', f315_k: '<string>', f316_q: '<boolean>', f317_x: '<string>', f318_u: '<number>', f319_r: '<number>', f320_j: '<object>', f321_y: '<null>', f322_u: '<number>', f323_b: '<boolean>', f324_s: '<boolean>', f325_m: '<string>', f326_n: '<number>', f327_o: '<string>', f328_m: '<array>', f329_d: '<object>', f330_u: '<object>', f331_o: '<string>', f332_x: '<object>', f333_r: '<string>', f334_u: '<null>', f335_y: '<number>', f336_x: '<object>', f337_r: '<array>', f338_l: '<boolean>', f339_z: '<object>', f340_d: '<number>', f341_d: '<array>', f342_c: '<null>', f343_o: '<boolean>', f344_o: '<boolean>', f345_w: '<object>', f346_c: '<null>', f347_u: '<number>', f348_g: '<boolean>', f349_i: '<null>', f350_n: '<string>', f351_s: '<boolean>', f352_f: '<null>', f353_b: '<number>', f354_j: '<string>', f355_u: '<number>', f356_i: '<string>', f357_a: '<array>', f358_h: '<boolean>', f359_p: '<boolean>', f360_s: '<null>', f361_f: '<boolean>', f362_f: '<boolean>', f363_r: '<string>', f364_q: '<number>', f365_o: '<string>', f366_v: '<string>', f367_f: '<object>', f368_q: '<array>', f369_l: '<object>', f370_g: '<array>', f371_q: '<string>', f372_j: '<number>', f373_i: '<array>', f374_i: '<object>', f375_f: '<boolean>', f376_u: '<string>', f377_v: '<number>', f378_f: '<null>', f379_d: '<boolean>', f380_g: '<number>', f381_o: '<boolean>', f382_p: '<array>', f383_d: '<object>', f384_z: '<string>', f385_v: '<object>', f386_n: '<array>', f387_y: '<number>', f388_c: '<boolean>', f389_g: '<number>', f390_r: '<object>', f391_t: '<string>', f392_l: '<number>', f393_l: '<number>', f394_i: '<number>', f395_q: '<number>', f396_j: '<string>', f397_t: '<null>', f398_n: '<number>', f399_p: '<null>', f400_h: '<string>', f401_w: '<object>', f402_f: '<string>', f403_g: '<number>', f404_p: '<string>', f405_b: '<object>', f406_n: '<string>', f407_q: '<boolean>', f408_w: '<number>', f409_j: '<number>', f410_o: '<null>', f411_o: '<number>', f412_t: '<boolean>', f413_u: '<null>', f414_i: '<number>', f415_p: '<boolean>', f416_o: '<number>', f417_x: '<null>', f418_r: '<number>', f419_u: '<array>', f420_a: '<number>', f421_h: '<string>', f422_a: '<null>', f423_l: '<string>', f424_r: '<string>', f425_b: '<boolean>', f426_j: '<number>', f427_a: '<array>', f428_b: '<null>', f429_a: '<array>', f430_g: '<number>', f431_t: '<boolean>', f432_x: '<boolean>', f433_i: '<boolean>', f434_o: '<null>', f435_g: '<array>', f436_w: '<string>', f437_y: '<array>', f438_b: '<string>', f439_k: '<string>', f440_w: '<object>', f441_l: '<number>', f442_l: '<boolean>', f443_d: '<array>', f444_w: '<number>', f445_y: '<object>', f446_d: '<number>', f447_n: '<object>', f448_f: '<boolean>', f449_x: '<object>', f450_j: '<number>', f451_w: '<boolean>', f452_q: '<string>', f453_i: '<null>', f454_i: '<string>', f455_r: '<number>', f456_x: '<number>', f457_e: '<null>', f458_n: '<boolean>', f459_n: '<null>', f460_o: '<boolean>', f461_m: '<boolean>', f462_c: '<array>', f463_m: '<null>', f464_q: '<number>', f465_n: '<string>', f466_b: '<null>', f467_y: '<null>', f468_x: '<boolean>', f469_b: '<object>', f470_f: '<null>', f471_l: '<string>', f472_g: '<string>', f473_t: '<null>', f474_w: '<null>', f475_i: '<object>', f476_r: '<object>', f477_d: '<string>', f478_b: '<number>', f479_f: '<string>', f480_y: '<null>', f481_o: '<string>', f482_o: '<null>', f483_g: '<object>', f484_q: '<array>', f485_c: '<array>', f486_t: '<object>', f487_u: '<array>', f488_a: '<null>', f489_d: '<object>', f490_a: '<string>', f491_y: '<null>', f492_i: '<boolean>', f493_b: '<array>', f494_l: '<string>', f495_j: '<object>', f496_m: '<string>', f497_x: '<array>', f498_q: '<boolean>', f499_w: '<string>', f500_t: '<array>', f501_b: '<boolean>', f502_y: '<number>', f503_f: '<null>', f504_i: '<array>', f505_r: '<array>', f506_g: '<boolean>', f507_u: '<object>', f508_l: '<number>', f509_e: '<null>', f510_g: '<array>', f511_c: '<null>', f512_c: '<boolean>', f513_s: '<string>', f514_v: '<array>', f515_r: '<array>', f516_h: '<object>', f517_u: '<null>', f518_v: '<object>', f519_s: '<number>', f520_d: '<null>', f521_p: '<number>', f522_a: '<null>', f523_y: '<object>', f524_w: '<number>', f525_f: '<number>', f526_q: '<null>', f527_k: '<object>', f528_o: '<array>', f529_a: '<null>', f530_g: '<string>', f531_f: '<boolean>', f532_o: '<array>', f533_o: '<number>', f534_f: '<boolean>', f535_p: '<number>', f536_q: '<array>', f537_t: '<array>', f538_z: '<array>', f539_q: '<number>', f540_x: '<boolean>', f541_h: '<null>', f542_r: '<null>', f543_p: '<number>', f544_l: '<array>', f545_h: '<array>', f546_o: '<array>', f547_u: '<string>', f548_e: '<string>', f549_g: '<array>', f550_c: '<number>', f551_s: '<array>', f552_t: '<object>', f553_s: '<number>', f554_u: '<string>', f555_b: '<boolean>', f556_g: '<boolean>', f557_s: '<boolean>', f558_b: '<number>', f559_k: '<array>', f560_m: '<array>', f561_r: '<number>', f562_m: '<boolean>', f563_s: '<object>', f564_o: '<number>', f565_d: '<object>', f566_i: '<string>', f567_h: '<string>', f568_z: '<string>', f569_y: '<string>', f570_y: '<array>', f571_h: '<boolean>', f572_a: '<number>', f573_v: '<null>', f574_r: '<boolean>', f575_v: '<boolean>', f576_g: '<number>', f577_k: '<string>', f578_k: '<number>', f579_w: '<null>', f580_j: '<number>', f581_h: '<null>', f582_t: '<number>', f583_b: '<string>', f584_c: '<string>', f585_j: '<array>', f586_e: '<string>', f587_n: '<boolean>', f588_v: '<array>', f589_w: '<object>', f590_v: '<null>', f591_g: '<boolean>', f592_e: '<null>', f593_k: '<null>', f594_t: '<string>', f595_l: '<number>', f596_d: '<string>', f597_g: '<string>', f598_z: '<string>', f599_m: '<array>', f600_f: '<array>', f601_h: '<null>', f602_f: '<string>', f603_c: '<string>', f604_i: '<boolean>', f605_n: '<array>', f606_r: '<null>', f607_y: '<object>', f608_u: '<number>', f609_u: '<boolean>', f610_q: '<string>', f611_g: '<string>', f612_i: '<object>', f613_h: '<string>', f614_b: '<number>', f615_r: '<object>', f616_f: '<string>', f617_g: '<boolean>', f618_d: '<array>', f619_u: '<object>', f620_k: '<number>', f621_o: '<null>', f622_n: '<boolean>', f623_z: '<boolean>'}, 'KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO');
    var count_1;
    try{
        KeyRange_12 = IDBKeyRange.only('BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy');
        count_1 = objectStore_1.count(KeyRange_12);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3020 = db.transaction(['objectStore_2026'], 'readwrite', {durability:"relaxed"})
    var objectStore_2026 = txn_3020.objectStore('objectStore_2026');
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('qZzvmaeRGxpjKyjcRHViE', 'mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', false, false);
        get_4 = objectStore_2026.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('qZzvmaeRGxpjKyjcRHViE', 'qZzvmaeRGxpjKyjcRHViE', false, true);
        get_5 = objectStore_2026.get(KeyRange_16);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.bound('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', 'mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', false, false);
        get_6 = objectStore_2026.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_20 = IDBKeyRange.bound('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', 'BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy', false, false);
        getAll_0 = objectStore_2026.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('qZzvmaeRGxpjKyjcRHViE');
        getAll_0 = objectStore_2026.getAll(KeyRange_21);
    }

    var add_6 = objectStore_2026.add({f0_a: '<boolean>', f1_q: '<object>', f2_r: '<boolean>', f3_c: '<array>', f4_r: '<object>', f5_e: '<boolean>', f6_p: '<array>'}, 'MaOkpuYWGmKUdlWzMWTogCsbVDavMQtwKEvBFYjnjnaRBwiyNndCkzpfMBFegMzBRczdcKaXEeNfuKtdAsTJsjshFAHDDZMFdpqDSHhNtpAvRiDsHFPvmVuwalfczDeeYKmctqrmHBaOZDecSyqtdQJnuHFbaQAsvnD');
    var add_7 = objectStore_2026.add({f0_s: '<object>', f1_t: '<array>', f2_v: '<object>', f3_s: '<object>', f4_p: '<object>', f5_n: '<number>', f6_f: '<null>', f7_u: '<number>', f8_p: '<number>'}, 'AzkJcksqBCzUSuiRDgHaom');
    var getAll_1 = objectStore_2026.getAll(2672726689);
    txn_3020.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3020.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3020.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3021 = db.transaction(['objectStore_2026', 'objectStore_2025'], 'readwrite', {durability:"strict"})
    var objectStore_2026 = txn_3021.objectStore('objectStore_2026');
    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', 'MaOkpuYWGmKUdlWzMWTogCsbVDavMQtwKEvBFYjnjnaRBwiyNndCkzpfMBFegMzBRczdcKaXEeNfuKtdAsTJsjshFAHDDZMFdpqDSHhNtpAvRiDsHFPvmVuwalfczDeeYKmctqrmHBaOZDecSyqtdQJnuHFbaQAsvnD', false, true);
        get_7 = objectStore_2026.get(KeyRange_22);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('qZzvmaeRGxpjKyjcRHViE', 'qZzvmaeRGxpjKyjcRHViE', false, true);
        count_2 = objectStore_2026.count(KeyRange_24);
    }
    catch (e){
    }

    var count_3 = objectStore_2026.count();
    var get_8;
    try{
        KeyRange_26 = IDBKeyRange.bound('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP', 'BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy', true, false);
        get_8 = objectStore_2026.get(KeyRange_26);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_28 = IDBKeyRange.bound('qZzvmaeRGxpjKyjcRHViE', 'MaOkpuYWGmKUdlWzMWTogCsbVDavMQtwKEvBFYjnjnaRBwiyNndCkzpfMBFegMzBRczdcKaXEeNfuKtdAsTJsjshFAHDDZMFdpqDSHhNtpAvRiDsHFPvmVuwalfczDeeYKmctqrmHBaOZDecSyqtdQJnuHFbaQAsvnD', false, true);
        get_9 = objectStore_2026.get(KeyRange_28);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_30 = IDBKeyRange.bound('qZzvmaeRGxpjKyjcRHViE', 'AzkJcksqBCzUSuiRDgHaom', false, false);
        get_10 = objectStore_2026.get(KeyRange_30);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_32 = IDBKeyRange.only('mUGLOfDocFluPhQePjzibihxOCKgatRVIgWAPeTjSqsheGBsGMBkKGFfgLiuTRyqiZNDpLBIaJtDQiPYksqlKVhZHGzjoKoHBoAMaSeuSXswHCtQoaWzCRecMnyQssOxQErcjCIFFfqxQwXAZVipLDaKdixIBtIpksJdyyBBpaYxyfPOKpQcLtNajcmHMUQvfHJEgANnjkBuEHCUcciPvPLUQIiGbYFIvBNEgfMhkvFIgosACJEmVsbCiNeHEaaDHNWHFntQOMWTOVSeSRgmJdlBsfcxQFwPQsmCMcUGEmADNOtxttWzLBdGsIzdfRiNasejldMWpXtAnDQpSFwSeTsXfEOitFrrwMfyrptdYCgkvKkiAZszzZMdmbLgSwMULHQWdmiFwxNnNJAPBrvETMvCrlpWOdCCraIwuxzecpjKdmnHanxgRayXgTEbyYZDflOBvkHbvpzKnyGAtMdrlKRmIuekXQGuqPRYNjgoIfLxPWBUBCLxHuNLDgRoAUaCJJNcOWVPvjFIFRyJtHcYiClieYTNCQjUDcSwBbdAbXmjMCXbJtvdeBHKSwoJwQjAmpOqzEWLNBKwldZsUpYqYqIkMlhQCrSSEQtTbBFusiGJxHMwOZmFKCMBrICgsoontDDJRXDamhBrhOctCqiAKhDGfkjjcpaDSHOMxqgAOYNaITHAmoOOWPEmRzIyilZSgZhZukJocuqOzvwUHiwzQkzLEhmybTDBFspfDIsCNBJyTthvCtYXzxZjTqXFUJkCSjGyJImykEZLTQHJaNvTVQiP');
        delete_1 = objectStore_2026.delete(KeyRange_32);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_34 = IDBKeyRange.bound('IfvWAnlRJcVlTjBxhuCaBvOnqajKFwCxewLXSQIWZZaakoBfXQEJNovGYWrQRVaHLaAUdxJAz', 'BdstcfGQqqQkvOHZmUADQkjiGPFndGGdZISTeHrjEnjyiXVTdFsGZOSkLYRHqcjnVKgvJwyjrQECEijBrOXykwKhwGrQELTBjPerbQAiyasDSaJNuRezQcFZAvOkSwDJCvdWQJlgshPdjklDKRYCGCcQVdblBCoDeixzIJqJFgfqDJdnCFeTxNLIPKEchNcMUyGDzPvBVdpTOGsNTLIKYgSUwdycKRqUUDPtmvaqCOWWBwyhqIqWyGmhHNMYJRTPqtaQaBiOZRHuKvDymZSctwyXsFlPQigKRCRzOjpwpkBlTlFSXUTpWrhKFZSoOtfuXwnAgYGHnUjlJwGbcdAPQZlBkjYCukqyHAtZBcbNJgoqupczAjVMvqDqHwiviDOQHIDCbfwgSocsZiESZLsfdxPRxzvXCoNPLaLFQyIyyFpoUfFLdhCVyefMgGacBtszItvhWGsjNPZXfNHnHazganXPXLUVWmKnWblAuaeCDkInbeMkHjucPcLmqQKAGgFdXDzAKcFseWGYZoLLjTuzcCsrxmqiCxwdsLpZJnyWobDgGDvXXyfvZnSBMAAdy', true, false);
        get_11 = objectStore_2026.get(KeyRange_34);
    }
    catch (e){
    }

    txn_3021.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3021.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3021.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3022 = db.transaction(['objectStore_2026'], 'readwrite', {durability:"relaxed"})
    var objectStore_2026 = txn_3022.objectStore('objectStore_2026');
    var add_8 = objectStore_2026.add({f0_t: '<null>', f1_n: '<object>', f2_u: '<number>', f3_i: '<null>', f4_t: '<null>'}, 'AkeoNHSxWwLAyTShRxiInuTEMsvjBzHVQqgiLuVPFHhANlpdgVvEHYRyqhtpsOiUviLPYVEosLvUUXnflQkaeneMjcFUWvnXZpfblfXzrvTnqObQkklMZJDrNRIDHlWcRzLTfETEmcMiIjUfHuDbssueAaddrEqasTYJrKDBXVZYmOUUgQrLvDJWXrEGxRhGOLeRXZYPDKVjQGcScBnywGwxhCzScLoGLRuJFleiqwHaFIOlcNznuqaKNKyfBRmBqHkrwnzdcXCNHHkkfbZJkPlMRwYPoEaLUTpTLhqkkwJswSFcvaOHOQBQGcSvamrDXligyhVdjEsgSzvQbGxqOAdxbnPCcHRGkAksERZxWNqGFGUQYFvSQSXxxgbVmxJELTjjIfFtgCXNmAegwAiZYRfLGHxQtokRaQugfPYPpsZKKrUCofcrHeJHbOXMhzhMPOrECZr');
    var get_12;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('AkeoNHSxWwLAyTShRxiInuTEMsvjBzHVQqgiLuVPFHhANlpdgVvEHYRyqhtpsOiUviLPYVEosLvUUXnflQkaeneMjcFUWvnXZpfblfXzrvTnqObQkklMZJDrNRIDHlWcRzLTfETEmcMiIjUfHuDbssueAaddrEqasTYJrKDBXVZYmOUUgQrLvDJWXrEGxRhGOLeRXZYPDKVjQGcScBnywGwxhCzScLoGLRuJFleiqwHaFIOlcNznuqaKNKyfBRmBqHkrwnzdcXCNHHkkfbZJkPlMRwYPoEaLUTpTLhqkkwJswSFcvaOHOQBQGcSvamrDXligyhVdjEsgSzvQbGxqOAdxbnPCcHRGkAksERZxWNqGFGUQYFvSQSXxxgbVmxJELTjjIfFtgCXNmAegwAiZYRfLGHxQtokRaQugfPYPpsZKKrUCofcrHeJHbOXMhzhMPOrECZr', true);
        get_12 = objectStore_2026.get(KeyRange_36);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_38 = IDBKeyRange.bound('AkeoNHSxWwLAyTShRxiInuTEMsvjBzHVQqgiLuVPFHhANlpdgVvEHYRyqhtpsOiUviLPYVEosLvUUXnflQkaeneMjcFUWvnXZpfblfXzrvTnqObQkklMZJDrNRIDHlWcRzLTfETEmcMiIjUfHuDbssueAaddrEqasTYJrKDBXVZYmOUUgQrLvDJWXrEGxRhGOLeRXZYPDKVjQGcScBnywGwxhCzScLoGLRuJFleiqwHaFIOlcNznuqaKNKyfBRmBqHkrwnzdcXCNHHkkfbZJkPlMRwYPoEaLUTpTLhqkkwJswSFcvaOHOQBQGcSvamrDXligyhVdjEsgSzvQbGxqOAdxbnPCcHRGkAksERZxWNqGFGUQYFvSQSXxxgbVmxJELTjjIfFtgCXNmAegwAiZYRfLGHxQtokRaQugfPYPpsZKKrUCofcrHeJHbOXMhzhMPOrECZr', 'qZzvmaeRGxpjKyjcRHViE', false, true);
        get_13 = objectStore_2026.get(KeyRange_38);
    }
    catch (e){
    }

    var put_2 = objectStore_2026.put({f0_v: '<string>', f1_m: '<array>', f2_p: '<object>', f3_f: '<number>', f4_y: '<number>', f5_k: '<array>', f6_i: '<object>', f7_b: '<string>', f8_c: '<boolean>'}, 'DzPmaiEydQfxyGYtFdYYUSZHdMlgtXQFsthqNfEjeRZeNEQUmHcWASSEFINBrNVFVquPizooIbVYmFljQNbiLvmuefOOJYGORGudWaonodgwWLnZlfkmXWVLHdEOeYiESTzfWbBqwOKzLLNsFnKJTxtHaYNAFWsjgjWydCLbQoFTxVntwUenyZTbgukJyNVlJFLuJTJcTJOxQmaMZAQosqNsLFVUwrdCktRHTpoYMQmrcfILvzuQZLdajEROhkCXbCkvHSWAOlvKwtBXwFWMkBkEVKhHzmmaFVukypjGYqcIQVJAORbOrmNHjllCIBJUNufHngVRSpDkOUHLlOLVDxWCxmowdHLHRdSgKWYRRpFfDdjMaKnQZuNFFIMAibUSomVSIKcuRFcfLzOqhKGBMTTpuIPicMbEUifQpeDvNZenDMXhjCWROAbhjXxFFKTAiFDHZzwoxgIkeMTzHJVhLzNqqHFEcwQttkWEuiYVGpsNQOkmUWMUpGsRaMaKULXTbmAkcUNjuRNAaNRLoZAGAdAxKZGLNuxBOWbabexPpaHEpiYiYctIqbgdInislrpHSwTqZQvMIVXaPcGaqatcYKtkdcPKWgZEaeUpGlZvmVOsgsTYuDPldgGSqCNtUCTdvpMglZDGTRwPfAalNQTcCIFzyIuyvoKqphOJQunVkfQRmZPHBpyWqocGkxbqXOHNxxvGxjNWKnNFifXTXHEDmuoiEvwyvKXtQDedJEnXmuFwjzJSHybuWU');
    var index_0 = objectStore_2026.index('index_1358');
    txn_3022.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3022.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3022.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3023 = db.transaction(['objectStore_2025'], 'readonly', {durability:"default"})
    var objectStore_2025 = txn_3023.objectStore('objectStore_2025');
    var count_4;
    try{
        KeyRange_40 = IDBKeyRange.bound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', 'KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO', false, true);
        count_4 = objectStore_2025.count(KeyRange_40);
    }
    catch (e){
    }

    var index_1 = objectStore_2025.index('index_1359');
    var count_5 = objectStore_2025.count();
    var getAll_2;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', false);
        getAll_2 = objectStore_2025.getAll(KeyRange_42);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg');
        getAll_2 = objectStore_2025.getAll(KeyRange_43);
    }

    var getAll_3;
    try{
        KeyRange_44 = IDBKeyRange.bound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', 'vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK', true, true);
        getAll_3 = objectStore_2025.getAll(KeyRange_44);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk');
        getAll_3 = objectStore_2025.getAll(KeyRange_45);
    }

    var get_14;
    try{
        KeyRange_46 = IDBKeyRange.only('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk');
        get_14 = objectStore_2025.get(KeyRange_46);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_48 = IDBKeyRange.bound('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO', 'vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK', true, false);
        count_6 = objectStore_2025.count(KeyRange_48);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_50 = IDBKeyRange.bound('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO', 'glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', true, true);
        get_15 = objectStore_2025.get(KeyRange_50);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_52 = IDBKeyRange.only('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO');
        get_16 = objectStore_2025.get(KeyRange_52);
    }
    catch (e){
    }

    txn_3023.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3023.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3023.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3024 = db.transaction(['objectStore_2025'], 'readonly', {durability:"default"})
    var objectStore_2025 = txn_3024.objectStore('objectStore_2025');
    var get_17;
    try{
        KeyRange_54 = IDBKeyRange.bound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', 'vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK', false, false);
        get_17 = objectStore_2025.get(KeyRange_54);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO', true);
        get_18 = objectStore_2025.get(KeyRange_56);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_58 = IDBKeyRange.bound('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO', 'vVUYoqSJtrRCKjaOmKTgIHDOBtrNjBzxzyLMbGczSzJSAsFSdQyQeBElhsXSuqNiPZouewbVQPhoNqOOuUKyujRPlEVDBNMGRXIpUozPrmHgQcEberTADaNRLrxwzzFrPLCSPbpUCUDOYWRgutJszFklefkNPoqRyhffbQswwmvxMvlAEOQkKjMEGtNkffpmUWIdfvOGsscKTViPjrQAksnCiLJLuEhxtIpWSNfrourFeHJuyK', false, true);
        count_7 = objectStore_2025.count(KeyRange_58);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2025.getAllKeys(2610484401);
    var count_8;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', false);
        count_8 = objectStore_2025.count(KeyRange_60);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_62 = IDBKeyRange.bound('glFGYQlrmQuwBgwONqfPRHRxgZojMQcWdldffygIwLyeWYHTswUJqFUxhJCsdZGRVazCZNNURhnPEWKfEVjRLMAsjTJamCtfYHJlBfqpciXkIutNBncakFEQozHAYkPtDmmNoBfFHxgKVmfifwUnYmkLBzLdihLatYyPwSHRrItWzStDYnEQlcHALFQpHRckDtdHwkiwKEMJxcgoDXrbSooQpLJXfaJtEmWxpXWLeNSPMpzbypZhcYbbpHGjjTztXpUMHpngnInKotFwTErXqgpqVvQIcFAXVZIrprUIKPknneEuSZZyteYlTkAcIYorTbMLmowSUFCtklzQVMdMzvxJszCIQxuKFEPMDJCbzEgzKjsVLBeWBKzIsFkuOlNUdiPWjpfhkCAJHFwVRKqYwWbkfChHZPRfeHbNfOQOVpYiWrTmyutXaCrFwVLcWUpwNuBhyNbRUeXzHkEaExDJytYdUJsAqNOEgtnANDfWceHHnRNtqKmznWfUcfUvRlrmanYReolGCqnuRQnltepuRLsOXxXCPxHlsrowKvgQDbyZpBpgXjCRnpinwqPqxuNkyYURzQoTTcqOqzLRsitkUoyLzqbAaOUVAdqIwVnipHcfteXDJJkJcHcxURikRjPetIpNEZykVzGQEHgQSMDsyaZPmLgXIjGxPAhMjDmTCIqTdyXClWaZXIbppKvgupmWLxPMQQjIhCAPJnXsGvPMEyhttDwMWAUXQOJhHUyZVKprlwYruMQSxcqceqZacNfKlMk', 'QxYcNNVDiFuqaOKZZwkbOYoHxalIunYyMkJVrTkLJCzEDIjWPVeouZmHxfBiNbCRaiEtAPFjWOXdQEZJGkvNkcsXazFBEsQUpkaYqPDEyVKSupXtFpupSVvdwnSoiDuFafjtUAVjjCfmtRWxGeHskPZBnQWdxXsnYowLFuwdoMwrmjCsVJvUHXTCkUwogyHbeAwzvxVWrkZccVwiwjjMzmyfWZmGMjqlCFxBXqMMIOGESMGJJRyCdvQrDkTQLQcSfDXtgHfGVYeGYDDZrcjHXsygeJsCZaEnRhyTckKLyykcVZHFcfquslImfXGAklNoULYDYxXrXuSlyzOrbroFuNkCJXRiolGsroBkdntXxg', false, false);
        count_9 = objectStore_2025.count(KeyRange_62);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_64 = IDBKeyRange.only('KKfILmkTOKZpaJqkujYPrmQOiSSkNSwZiRaYvxcjejxIRjjIWvJNRlDwMCvbcCzVDjiKABtqvUrLVaBtPMXfGqhsrZluuJIBVSshpMhQFSGCurfGbIwokAEZGNyaAkdmrKdYKXfhnkqEfldBkjzrzqRDUeKoGyzYvMIlcWvdIBiDUuYviuLnfzRcNOLyzKUrRaWsLGsejgWNYnHegCSurSxyPbOjqGGxRzxAHaRVtIliynVXePdUzaOeDXHHXOdmUANYsTDUKnCyyIJhYzLztDgPRpopRpKfZGzwHfRVuDKBnmakXAHeeeJvheUFXVJOxbZNhMGaAdpkeLNrhDykBOmQGxOyArbGKXKUBEffQqZhgvyHhKMOSFRuDoxKQIINdXPgcfGSTgecuogRiSMaQjtFFoHvZckQPsormCkWuyzYghaEfriOcHgEfigCgpSzdnbHVvelbHVuMmbHwEuvmViXcrkdfBuzSzuHDoVtxbVdYJlCPsPEzqSxgyBBIqiCnNFqHTmujcGyZZPOiwtgDJknaVVBFbbjNsuxSQNYWbSyiIlyRHJdsBazgDeEpOGjIMqRnqRWsvAnPCTopSYjvshGMKQPNpckaDGlXvWcMmMXTuvKhAXdARfHjUFmzTvFOoThZjobpQSlWqmOyCsHAWrvJttllYYZLJrWVLO');
        count_10 = objectStore_2025.count(KeyRange_64);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_2025.getAllKeys();
    txn_3024.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3024.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3024.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8585')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};