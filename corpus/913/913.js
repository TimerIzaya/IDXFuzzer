let db;
const openRequest = window.indexedDB.open('str_7023', 2751985461090593)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5405', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_5406');
    var index_3617 = objectStore_1.createIndex('index_3617', 'test');
    var index_3618 = objectStore_0.createIndex('index_3618', 'test', {unique: true, multiEntry: true});
    var put_0 = objectStore_0.put({f0_s: '<number>', f1_q: '<string>'}, 'WUKIIwnlNmHDsIAaqzoZMqgHScAgulkrCYrFSWJZCvuXiKKaKTEByjCFXIAFRBPfysFomxNAJEvZNNixPyRtgQkjGmEqnbUZwxuWaoSfxlJMrEXHIJGTyaMoUSqotBexusKTwFdBuefQkuUFSZpIcFeSVCmhRVQKLxaiyRRKmvRznoIAQyCmfeFKJbmTHERvxflcehnQUKBXdkgoWvoxmFFhMmLozOlmeCJvXHMmbfICAwXYRcFbBJGcOrEBCXoJqstutUrWBHvPGOWLbWQKeiAUOugoJwXdaquhikdVghhEAsFxtfpXZnndCMELFBdgPjQFEjTbzjxSIuJLdshjysLcFsmfQdDaEtlsLbSOXhIjmXAshLtRpmWBmjvBHhyFBYmIHzswsrznUgnMSRTjoKEzFlloBPwVyPmVMcbjkBveeNaESvrQLKpLLRDFmjTlnXXyYviCHosUsgHNZWSzEdMaeIxYvDaIxwdHkotNxttZUqtLUacFCoPPsqiRBulTZyPctiVXwpqLhcoqAKqpDMvYQODbILzQLacTtFvzIPAgpIxcgKcmlaSEPdOCystmrxXklOuOXiyFhKnqmRNAKMlppdEuLkKueLmSeOaEzAYtKWhbbBjMKHmamssZLaPdphvCnhpWtNTSFIpmubatIPXaQMdQLWHkSAGeagVf');
    var index_3619 = objectStore_0.createIndex('index_3619', 'test', {unique: true, multiEntry: false});
    objectStore_1.deleteIndex('index_3617')
    var objectStore_2 = db.createObjectStore('objectStore_5407', {keypath: 'OiXrhBqUnSqFBdJIGIULShMFUhWsFfLRwnKSMxeIKCXmlOsuyMgdielIxdHcoecJQEJslnVshbAPkKFAXFOgNbeQgCjiTltTvPaVRZqVGfqsUpJGMGYXrCaxobMWVCcTLSqBrsIyYhVITkylmbBqXFsmuWOAWksWHFQniqEehRzKFJlLhGFuRuHpkjXmeOPVjcIIOWjQzoIpPnvpgzniZKVMNiQIGTAxlcMUBWunTISCkSTqZKhyGXvogfjafdBgpuaDskIbeUEJecslfOIVnaiyczeGVXcbQGDvviIOJtwzCJjCdsOmvPFtyDTTqutfGNSKhrHIrvHXXVGGiqqSznozNqAIUpLTczkVDLhk'});
    db.deleteObjectStore('objectStore_5405')
    db.deleteObjectStore('objectStore_5407')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8170 = db.transaction(['objectStore_5406'], 'readonly', {durability:"relaxed"})
    var objectStore_5406 = txn_8170.objectStore('objectStore_5406');
    txn_8170.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8170.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8170.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8171 = db.transaction(['objectStore_5406'], 'readonly', {durability:"relaxed"})
    var objectStore_5406 = txn_8171.objectStore('objectStore_5406');
    txn_8171.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8171.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8171.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8172 = db.transaction(['objectStore_5406'], 'readonly', {durability:"strict"})
    var objectStore_5406 = txn_8172.objectStore('objectStore_5406');
    txn_8172.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8172.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8172.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8173 = db.transaction(['objectStore_5406'], 'readwrite', {durability:"relaxed"})
    var objectStore_5406 = txn_8173.objectStore('objectStore_5406');
    var add_0 = objectStore_5406.add({f0_w: '<array>', f1_u: '<boolean>', f2_n: '<number>', f3_x: '<null>'}, 'cCzIXqtLILbELtSWsMjYmpsgCpnwGpDRZzCOAfuWVmlqQvgyiaNeCeTgAKiXLMgCEdCHJRAJuCuKsyeRARKAMjF');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('cCzIXqtLILbELtSWsMjYmpsgCpnwGpDRZzCOAfuWVmlqQvgyiaNeCeTgAKiXLMgCEdCHJRAJuCuKsyeRARKAMjF', 'cCzIXqtLILbELtSWsMjYmpsgCpnwGpDRZzCOAfuWVmlqQvgyiaNeCeTgAKiXLMgCEdCHJRAJuCuKsyeRARKAMjF', false, false);
        get_0 = objectStore_5406.get(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_5406.add({f0_h: '<object>', f1_v: '<array>', f2_f: '<boolean>', f3_r: '<object>', f4_p: '<string>', f5_p: '<null>', f6_x: '<string>'}, 'fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN');
    var add_2 = objectStore_5406.add({f0_v: '<object>', f1_j: '<null>', f2_c: '<number>', f3_o: '<null>', f4_d: '<boolean>', f5_j: '<array>', f6_r: '<number>'}, 'TqIGGocMHAnsMbUMVDLjRJwVRmVrEsuMiDHXnIlHqFUFvcCbphWBAxclQgDVwuLNcKQjmOALKuLkfGCCxRXWHOMbTZaPENgYFTrmkwQGIYtqRStMcDpekdMbNeGWDlQyabNxlDxUozZSuwRIyrfFhCxPTybzWDAlxsXZABGltlnWWBcHwHkvtwDCmXNEflrnhIFccYWGKMVWNhwtUJhLyGqcHVWbEcLmDkLQzEVSWpKCstqTQHNBJcIeUiHWSCywhCRYvgGfRZlSERmPOSwAFwkctYhsmNhlDBzjDSkfzIMlQpYBkNZxxnDGVhphtJsTxGcuyjhEKlxCbivotybzPRhzQoSisAyEGywUBueciHtynyYHQfmbpbFOmGgNkUbUEcASVXWsTZqipdBEYnnYdAnIELaUCzkAMOyUfDwSEBnCVRWMnZuLAmSyOHerUVSlxRxRaiOpxQPLxLXqYglNwCmhonuqKGdPweNmkKtSsNvfmUxMhMctBVPbMtWarPlSYIjpAyPnTnmOiajxdsgtYTjIkJDVsXMtVqZuIWTICTnGyrqWCPcyqUXAHxjDREkUBrphsciiaNDXVShhrOQAxFemoyrazmOdqApAJFqmPlHdNyGcCjdKTvqTyezFrwxeyKqlrzBagVUllTuQoYtdSzjtx');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN');
        get_1 = objectStore_5406.get(KeyRange_2);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', 'fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', true, false);
        get_2 = objectStore_5406.get(KeyRange_4);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', 'TqIGGocMHAnsMbUMVDLjRJwVRmVrEsuMiDHXnIlHqFUFvcCbphWBAxclQgDVwuLNcKQjmOALKuLkfGCCxRXWHOMbTZaPENgYFTrmkwQGIYtqRStMcDpekdMbNeGWDlQyabNxlDxUozZSuwRIyrfFhCxPTybzWDAlxsXZABGltlnWWBcHwHkvtwDCmXNEflrnhIFccYWGKMVWNhwtUJhLyGqcHVWbEcLmDkLQzEVSWpKCstqTQHNBJcIeUiHWSCywhCRYvgGfRZlSERmPOSwAFwkctYhsmNhlDBzjDSkfzIMlQpYBkNZxxnDGVhphtJsTxGcuyjhEKlxCbivotybzPRhzQoSisAyEGywUBueciHtynyYHQfmbpbFOmGgNkUbUEcASVXWsTZqipdBEYnnYdAnIELaUCzkAMOyUfDwSEBnCVRWMnZuLAmSyOHerUVSlxRxRaiOpxQPLxLXqYglNwCmhonuqKGdPweNmkKtSsNvfmUxMhMctBVPbMtWarPlSYIjpAyPnTnmOiajxdsgtYTjIkJDVsXMtVqZuIWTICTnGyrqWCPcyqUXAHxjDREkUBrphsciiaNDXVShhrOQAxFemoyrazmOdqApAJFqmPlHdNyGcCjdKTvqTyezFrwxeyKqlrzBagVUllTuQoYtdSzjtx', true, false);
        count_0 = objectStore_5406.count(KeyRange_6);
    }
    catch (e){
    }

    var put_1 = objectStore_5406.put({f0_q: '<null>', f1_z: '<number>', f2_a: '<string>', f3_a: '<string>', f4_h: '<string>', f5_f: '<array>', f6_r: '<array>', f7_v: '<null>', f8_j: '<boolean>', f9_o: '<array>', f10_i: '<array>', f11_h: '<array>', f12_j: '<object>', f13_h: '<boolean>', f14_n: '<object>', f15_e: '<string>', f16_g: '<null>', f17_i: '<array>', f18_o: '<object>', f19_v: '<number>', f20_k: '<array>', f21_s: '<object>', f22_f: '<object>', f23_h: '<boolean>', f24_s: '<boolean>', f25_e: '<string>', f26_v: '<object>', f27_o: '<array>', f28_u: '<number>', f29_t: '<string>', f30_x: '<number>', f31_h: '<boolean>', f32_k: '<object>', f33_r: '<null>', f34_o: '<string>', f35_u: '<null>', f36_o: '<number>', f37_t: '<boolean>', f38_v: '<null>', f39_c: '<string>', f40_l: '<string>', f41_l: '<null>', f42_e: '<array>', f43_k: '<string>', f44_k: '<string>', f45_g: '<array>', f46_y: '<string>', f47_w: '<array>', f48_t: '<array>', f49_f: '<array>', f50_k: '<array>', f51_j: '<null>', f52_p: '<null>', f53_h: '<array>', f54_i: '<boolean>', f55_f: '<object>', f56_h: '<object>', f57_j: '<boolean>', f58_a: '<string>', f59_k: '<boolean>', f60_c: '<boolean>', f61_x: '<boolean>', f62_c: '<string>', f63_r: '<boolean>', f64_w: '<null>', f65_u: '<object>', f66_e: '<number>', f67_v: '<null>', f68_h: '<string>', f69_n: '<null>', f70_p: '<boolean>', f71_r: '<null>', f72_z: '<string>', f73_u: '<number>', f74_g: '<boolean>', f75_z: '<object>', f76_r: '<null>', f77_h: '<boolean>', f78_c: '<string>', f79_t: '<string>', f80_z: '<boolean>', f81_c: '<boolean>', f82_b: '<null>', f83_m: '<boolean>', f84_n: '<array>', f85_x: '<boolean>', f86_q: '<boolean>', f87_t: '<number>', f88_w: '<number>', f89_p: '<object>', f90_r: '<boolean>', f91_v: '<null>', f92_g: '<number>', f93_o: '<array>', f94_a: '<object>', f95_q: '<object>', f96_j: '<boolean>', f97_j: '<object>', f98_j: '<boolean>', f99_u: '<string>', f100_i: '<boolean>', f101_m: '<boolean>', f102_e: '<null>', f103_a: '<string>', f104_e: '<number>', f105_u: '<boolean>', f106_n: '<object>', f107_a: '<object>', f108_z: '<string>', f109_v: '<array>', f110_u: '<null>', f111_a: '<object>', f112_v: '<number>', f113_b: '<number>', f114_i: '<number>', f115_n: '<array>', f116_j: '<array>', f117_e: '<number>', f118_h: '<object>', f119_w: '<null>', f120_z: '<null>', f121_v: '<object>', f122_h: '<boolean>', f123_p: '<number>', f124_e: '<boolean>', f125_g: '<number>', f126_e: '<null>', f127_t: '<string>', f128_c: '<array>', f129_k: '<number>', f130_l: '<object>', f131_z: '<string>', f132_e: '<string>', f133_e: '<null>', f134_x: '<string>', f135_d: '<null>', f136_l: '<number>', f137_l: '<boolean>', f138_w: '<object>', f139_h: '<null>', f140_n: '<number>', f141_n: '<null>', f142_c: '<object>', f143_x: '<number>', f144_s: '<null>', f145_z: '<object>', f146_n: '<boolean>', f147_i: '<boolean>', f148_x: '<string>', f149_x: '<array>', f150_o: '<boolean>', f151_x: '<string>', f152_o: '<boolean>', f153_y: '<null>', f154_z: '<array>', f155_n: '<null>', f156_w: '<boolean>', f157_h: '<null>', f158_r: '<number>', f159_o: '<boolean>', f160_z: '<object>', f161_n: '<boolean>', f162_m: '<null>', f163_r: '<array>', f164_p: '<number>', f165_m: '<object>', f166_x: '<string>', f167_x: '<boolean>', f168_w: '<null>', f169_a: '<array>', f170_r: '<object>', f171_b: '<boolean>', f172_l: '<array>', f173_a: '<number>', f174_s: '<null>', f175_m: '<null>', f176_c: '<null>', f177_t: '<number>', f178_r: '<boolean>', f179_g: '<number>', f180_k: '<object>', f181_c: '<object>', f182_o: '<boolean>', f183_h: '<string>', f184_c: '<number>', f185_a: '<object>'}, 'OKJIaAajWVXAfeYJMaLwdEKKokuyTVykpJfJWGbUDcRWmRrTFgyIxIfwNiVauJVKbRwSqSFPSXroelkRJRdFvpYZUhMliOJZpUpQqFiJmxFTDSCKOcygeakWUUIhvTMPhbPJsSkmSqislLoSBWxYeEgEYewPkoVDPyRRhQWwZpBSfITfREqdoneGbBMBQHLZOALiHNXmCozgmlhaeTbMdsxJHPYhyUHcZmzKgH');
    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('TqIGGocMHAnsMbUMVDLjRJwVRmVrEsuMiDHXnIlHqFUFvcCbphWBAxclQgDVwuLNcKQjmOALKuLkfGCCxRXWHOMbTZaPENgYFTrmkwQGIYtqRStMcDpekdMbNeGWDlQyabNxlDxUozZSuwRIyrfFhCxPTybzWDAlxsXZABGltlnWWBcHwHkvtwDCmXNEflrnhIFccYWGKMVWNhwtUJhLyGqcHVWbEcLmDkLQzEVSWpKCstqTQHNBJcIeUiHWSCywhCRYvgGfRZlSERmPOSwAFwkctYhsmNhlDBzjDSkfzIMlQpYBkNZxxnDGVhphtJsTxGcuyjhEKlxCbivotybzPRhzQoSisAyEGywUBueciHtynyYHQfmbpbFOmGgNkUbUEcASVXWsTZqipdBEYnnYdAnIELaUCzkAMOyUfDwSEBnCVRWMnZuLAmSyOHerUVSlxRxRaiOpxQPLxLXqYglNwCmhonuqKGdPweNmkKtSsNvfmUxMhMctBVPbMtWarPlSYIjpAyPnTnmOiajxdsgtYTjIkJDVsXMtVqZuIWTICTnGyrqWCPcyqUXAHxjDREkUBrphsciiaNDXVShhrOQAxFemoyrazmOdqApAJFqmPlHdNyGcCjdKTvqTyezFrwxeyKqlrzBagVUllTuQoYtdSzjtx', 'fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', false, true);
        count_1 = objectStore_5406.count(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_5406.put({f0_e: '<null>', f1_e: '<string>', f2_t: '<string>', f3_g: '<number>', f4_c: '<number>', f5_u: '<string>', f6_s: '<number>', f7_l: '<number>'}, 'xaLzXHmecElyXjnNMTZrTWKVpgrOFDqvZFsQHHmOuJaYurDDkcTFuniFPrmXqZqujoNdxVNeMZaVNBoMGZaFfxateLChGroiwwPMjJlbHKZsjSqrYqToSQQfIYebOPPthMwXQWKaklVcjfioCJSiZGOPghqJupkCFikkUvOTXzSyaHIVuzaDAFWzuNsBrHSSdVOWfBLtJDkpjYVwfWuJTpPAKmJcBpmdUJTowRLKgCRYNIcCXbmGmeTSucNNOscysHwZPJJrXPIdceRsrSByKHvAbljDGuxSVMHkcvxMYcQdoItsEiIPiztavkpCLdLdmmsAxTWEjbdasyhHhOgqgaqOgxXzDHixmnMkhxCbPXGPCLnCJQzIdhHCusdsVHmIFqWuQBdSzlRblpkDkGJNmATEIDFbcVwMWbfwhntkbMsbGPYslPMUQVOVcXGfphdYAVzzHHGAJPcSnfFvGmlybLBjeDvrGqyyQnLNDIDcVlUStHTSRPMEYuhLYbkhMOmMpTyEWmoNlScqrAGNVBMWCqUsHwSaWkbDtoR');
    txn_8173.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8173.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8173.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8174 = db.transaction(['objectStore_5406'], 'readonly', {durability:"relaxed"})
    var objectStore_5406 = txn_8174.objectStore('objectStore_5406');
    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('xaLzXHmecElyXjnNMTZrTWKVpgrOFDqvZFsQHHmOuJaYurDDkcTFuniFPrmXqZqujoNdxVNeMZaVNBoMGZaFfxateLChGroiwwPMjJlbHKZsjSqrYqToSQQfIYebOPPthMwXQWKaklVcjfioCJSiZGOPghqJupkCFikkUvOTXzSyaHIVuzaDAFWzuNsBrHSSdVOWfBLtJDkpjYVwfWuJTpPAKmJcBpmdUJTowRLKgCRYNIcCXbmGmeTSucNNOscysHwZPJJrXPIdceRsrSByKHvAbljDGuxSVMHkcvxMYcQdoItsEiIPiztavkpCLdLdmmsAxTWEjbdasyhHhOgqgaqOgxXzDHixmnMkhxCbPXGPCLnCJQzIdhHCusdsVHmIFqWuQBdSzlRblpkDkGJNmATEIDFbcVwMWbfwhntkbMsbGPYslPMUQVOVcXGfphdYAVzzHHGAJPcSnfFvGmlybLBjeDvrGqyyQnLNDIDcVlUStHTSRPMEYuhLYbkhMOmMpTyEWmoNlScqrAGNVBMWCqUsHwSaWkbDtoR', 'TqIGGocMHAnsMbUMVDLjRJwVRmVrEsuMiDHXnIlHqFUFvcCbphWBAxclQgDVwuLNcKQjmOALKuLkfGCCxRXWHOMbTZaPENgYFTrmkwQGIYtqRStMcDpekdMbNeGWDlQyabNxlDxUozZSuwRIyrfFhCxPTybzWDAlxsXZABGltlnWWBcHwHkvtwDCmXNEflrnhIFccYWGKMVWNhwtUJhLyGqcHVWbEcLmDkLQzEVSWpKCstqTQHNBJcIeUiHWSCywhCRYvgGfRZlSERmPOSwAFwkctYhsmNhlDBzjDSkfzIMlQpYBkNZxxnDGVhphtJsTxGcuyjhEKlxCbivotybzPRhzQoSisAyEGywUBueciHtynyYHQfmbpbFOmGgNkUbUEcASVXWsTZqipdBEYnnYdAnIELaUCzkAMOyUfDwSEBnCVRWMnZuLAmSyOHerUVSlxRxRaiOpxQPLxLXqYglNwCmhonuqKGdPweNmkKtSsNvfmUxMhMctBVPbMtWarPlSYIjpAyPnTnmOiajxdsgtYTjIkJDVsXMtVqZuIWTICTnGyrqWCPcyqUXAHxjDREkUBrphsciiaNDXVShhrOQAxFemoyrazmOdqApAJFqmPlHdNyGcCjdKTvqTyezFrwxeyKqlrzBagVUllTuQoYtdSzjtx', false, false);
        getAllKeys_0 = objectStore_5406.getAllKeys(KeyRange_10, 1717272135);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('OKJIaAajWVXAfeYJMaLwdEKKokuyTVykpJfJWGbUDcRWmRrTFgyIxIfwNiVauJVKbRwSqSFPSXroelkRJRdFvpYZUhMliOJZpUpQqFiJmxFTDSCKOcygeakWUUIhvTMPhbPJsSkmSqislLoSBWxYeEgEYewPkoVDPyRRhQWwZpBSfITfREqdoneGbBMBQHLZOALiHNXmCozgmlhaeTbMdsxJHPYhyUHcZmzKgH');
        getAllKeys_0 = objectStore_5406.getAllKeys(KeyRange_11);
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.only('OKJIaAajWVXAfeYJMaLwdEKKokuyTVykpJfJWGbUDcRWmRrTFgyIxIfwNiVauJVKbRwSqSFPSXroelkRJRdFvpYZUhMliOJZpUpQqFiJmxFTDSCKOcygeakWUUIhvTMPhbPJsSkmSqislLoSBWxYeEgEYewPkoVDPyRRhQWwZpBSfITfREqdoneGbBMBQHLZOALiHNXmCozgmlhaeTbMdsxJHPYhyUHcZmzKgH');
        get_3 = objectStore_5406.get(KeyRange_12);
    }
    catch (e){
    }

    var count_2 = objectStore_5406.count();
    var getAll_0 = objectStore_5406.getAll();
    var count_3 = objectStore_5406.count();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.only('TqIGGocMHAnsMbUMVDLjRJwVRmVrEsuMiDHXnIlHqFUFvcCbphWBAxclQgDVwuLNcKQjmOALKuLkfGCCxRXWHOMbTZaPENgYFTrmkwQGIYtqRStMcDpekdMbNeGWDlQyabNxlDxUozZSuwRIyrfFhCxPTybzWDAlxsXZABGltlnWWBcHwHkvtwDCmXNEflrnhIFccYWGKMVWNhwtUJhLyGqcHVWbEcLmDkLQzEVSWpKCstqTQHNBJcIeUiHWSCywhCRYvgGfRZlSERmPOSwAFwkctYhsmNhlDBzjDSkfzIMlQpYBkNZxxnDGVhphtJsTxGcuyjhEKlxCbivotybzPRhzQoSisAyEGywUBueciHtynyYHQfmbpbFOmGgNkUbUEcASVXWsTZqipdBEYnnYdAnIELaUCzkAMOyUfDwSEBnCVRWMnZuLAmSyOHerUVSlxRxRaiOpxQPLxLXqYglNwCmhonuqKGdPweNmkKtSsNvfmUxMhMctBVPbMtWarPlSYIjpAyPnTnmOiajxdsgtYTjIkJDVsXMtVqZuIWTICTnGyrqWCPcyqUXAHxjDREkUBrphsciiaNDXVShhrOQAxFemoyrazmOdqApAJFqmPlHdNyGcCjdKTvqTyezFrwxeyKqlrzBagVUllTuQoYtdSzjtx');
        get_4 = objectStore_5406.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', 'fflRrffwUUFDxzgluOfTwofRxnxicbdliNIcvdwEWCXhzeyVOcjnxXzRKvNDamMoRhgEvaJwLjEkiEscJGWloMUGmDtIEYirOBGqvaTlUJBjzWSDWTmypQbZmliDcUPJPYdwXwmWUmPMebeobUEXjbEwhpdLerYOEkLxeWnPmBIGFgCYAvmyEwnsiqbupaljhpOwqxHyRVOZtePXVdcxzZxVaRhVXcRwyvMkxngacyqquCRxNiNBxallqaoEFavcWsZDwnSilwTXlotTfiXZfZexNbdXZhAFvkSICwaLFUsVpTMxkmgkpcSocnN', true, true);
        get_5 = objectStore_5406.get(KeyRange_16);
    }
    catch (e){
    }

    txn_8174.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8174.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8174.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1745')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};