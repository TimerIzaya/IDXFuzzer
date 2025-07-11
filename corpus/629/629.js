let db;
const openRequest = window.indexedDB.open('str_3393', 2765190463715177)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3786', {keypath: 'wuDdjwKjGOgosLxoZZoJJILIgopwpSSsQijVjnPHYAdBssVblzAhOofjIsyKnCgZWUzOVIgwsqgLrLOUfWmIsHcKRqicDraxIVPBEeEroffBDTEdNjumLzErWlsNgWAIAFjDQLFsWkvBBvWtbVqZUMgzabEzNPzHODKvMDSHVsmnxrvGjVizeLmjCkdRQGEFdsQYlujNotBxtPNHvlexJPoPHCxlnJXGrXbuJfwIJKnGWGDQQfMgxXUDRAblGUAyaELlyuMNecDGiaVqwRmgFegfcrKJbLiwXMOryMbWzDjijGDGozPECGlXzlzfgYQygEElXEwjDtyjfDGsGknZnSmkiapuUPDNmqQLSqQRuydQeDVgVmYzcSnWGelHYsNNhHTsKgXblUXrwoWWMzWSRTQgsDQJHtyyDjGemVqnXJKfceRSkmBlBXTzDwxqlPfRaekjXhgEgwatSmlobzRdsQBteDKWWLjKtnlSFSnerMiWqlglztxJOoZXGboWFrvjylKsooMWqtGqvwCWcWOVrnuyIUkgxrOXESlxFjwqnqsJsTbczaufEYZSTnTUsqPkWlEMyxYZODrAfjqUabtfYLrOcjpLeCLShWQJMcgHpfiWXDgFZOfIifgpJwZpwvnCJdCIGDTADJjgyNdqPudDvdiFEwwJNDEgDCGPRGkblDvZoVhWNJZfdUVwPyjicBkrdXoFPkgvkiAEJZlFzDAOMGInKrgPGvBQfeoMOFodXrYRGMkCUWxMPxqkOfdUCWEuHpbxnwWdHmjaiOlXBSxoLuJvgQfreKcWwVWCSDmHvTLsAtjCRVxdFPdNtxJYxGmyFcCzDSVlicImKvIZKUkfYsGxzgLBkQoWoSPQfbcEOFXFHaRLZ.jejsGppfYMGCSSpAVSbgXUiJTZirlosCRUSiIBiVBwewaPjZeQYQgzCsiTszgckajYosoaiPwSZdjZAFDikNqLArblwOSZlkoITTIQzaTzfGZwEUJVcJjOhkqRAiABsSgGIKCcCQVCuMBmHMTwmVtvUIGYaxerusgeWklNdIGnNijoAntEAfMeRTawFeGkiqfxYvoZXIVfNWxpsArIbVoHnwHrSjbQYpUbuofZNvlfPw.kRhCysppksObSbWiGOFGFaUkHHaeiQsYPjSWjmjFLcsFvpOJEVzLRjiKSOXKpQBtezaDeuyYpiyDsUoxViqNNytghzuVUBImKIcbzyvRxvHxNQtgHGQSTuzKrzaliejqgHPyapCaFLnrJVHSWfmyuQnsUfKlhxBjqVYCoHsutgMrkTVBzrCAqJVBwBCAvPVwdQmGTDNCLSEzdHfnpWhwzUTDTbLmVUIaNkBpuNnwHcSpNmmbapWlCADrOQIkThXmjahXOOQjeSPYxMyScZcIaqDJNNKGnFSLJyOfCpCYeViwUoIqfoVIhuPjBWbMTPTGlPeGjWdNYfbPfKRpoKIiidWfCSLEUaEJRGpRXivbveJAaJfvgkrJBQQpWjYXovfHySuTlokcomxminetmdKoKxlGAvKgDUwvGuMStrcxuOKwwKFYUfTFABgoHvFXaUsCpWJReloUCHncaloLTznPKxtUvIpXdURQftabjBgZCvTyYUrIbvxFoaFLjuiSmOYcyuCOhVEunZjzGcuXrkMxUhKcooBAXPUXSONgVXPJsJXmxtyDGtHLYUBtbbkcRUuJJtqvUpJimNKlcdjjPWEvLuGCeGWQhdrSPzIIrpYEXmUqpZRGru.VAblQSYzmVkDcYCxGLShAQaFUHqsFttVAzJwAnvjTkLSUhqckgToVdurQaiqBQAvwaWHkMThHjRxOHEijKncLEhJsNRzCDygVAZXbLdFPjMHdRZkPJUXHvcPlgJQDnVLCwJrSLjqDHiZyktCazOoEGfKbkdEJESfnoYuHWQachRCYHARcHlGYbCURhhVKsNEXeEQPtIRFwtuflwleSpXzPQWnJmPLenNrYTKTFxXwUKofPItFMtfasDphIqiqeZahziicxRkXhcgNifjRJbPDZqdFQginstVbjDDzVINBApZAQurRCVrCcYoqzhdQSVgPmnXiWkxFafaIOoubwYlvqyiIfoJyywLxgxuoLkHfZtAIYHCbTYjyvLjWviTB.MZmoDxHOQkOTvfoMEDPkZODvQchoFKkoji.IcMgyBhFWLrnGHRGcgOqzpcUUxjWDNrjRubeeyJwbkvScrZjPpSueoFJiRBOALOtwAwgQNsYphqwUgtmhUgMehLDQBoAcdvqjwDWvOuMmbCMbGrKvvrpiPGhqUUBVTjootlqcagJkDIaJcTBIROHXzjEybSFSdlZrTSRPDdUNxkKdIPsJGcTMmXCCiFbqAgOxJJZgjpdJUanbbhLcwPUrYnavrWtpbGOVXASlaeGyqMVjCQrPyLJmEAYDXPecShlPkFsFnVofCjlGUbmkpYYymCgLdPhkFThlbufjbjreGXyrovfodTsQYNyPxkCRoyLBAAuVVhjjBKWNptvqaCaZNncawSPaduUfJbnhhKwILRXbKfqbvSGfftxPmnUBJcpbYfHDWLrlbgnRnRvZMCBRWSFDxwbvEDfzepIVzHZdieByxTSlMlnBqmykhElXGKfBvAekDSyVXvxnlFRWorXUvgKgRMbkDFaiMRuakyHUISXdMQxjBoEClHpLyzMNpVWSYFAnbHzfmLZiKmuMNiLAGEFxtuSvIpNpthpsaEZhPBqQzBfqdHMruvQcDjJmlsaKzeAdZCKDfClECWAPLklUOHjPKLiVPUsgcuoHLMzaOSnOlioDMwiXvKiqjkYvdokvrjlNrjJpXYUEEQpxFFuwKvOKTWuU.kfJMPrUytYcNXXxRflYfRVKKIfXXabDCGXPkhSBpTGEqeQVZUNXvYwijalGtZacuqJthwOfspYiLQufpkMTMLgNXlNQiWNXbUIMtPohVfBpOTztIVsVCrqzNnxNpCOXVaqWRDyPGYvMCbkkYDKTUejAqKLdlhEofuzdRHDfidYMeHRCZCQFPliHtFtgLCTmENoGFBDsnKqutOSJjFjdUYwNHjKAXjGKKFWjGVPwJKjflUBoWvKUxpqPzjIvOEXpAuXARantTrMFqIDuWOFJRVHXopoZIxBsseQCKVoDuhcQylDUSyhnuyBrhhnJfSEcxTWXzXjTQomxWyzeewFWlorGMSdHLFShVVCIAVrFxhjpyFYiBXWZlvZBEpcQyVzMVPpSpbLgtwwKwkccUhxRsmVgCZOzSvGSrcSsIqlJcSmWuwvDheMKuXstxTsklWLZZXPXuekDiXuDJhVeYDwmHpHGfWUlYpMwcBSqSAOqKmbEscsprDZYBWXAIEnHQoFxgggoknKjAznsbbxNRozHAqvVxtBGBxezoKQeSpasmQlvIjdUyUzNOgcrXEjsvAJWjs'});
    var put_0 = objectStore_0.put({f0_v: '<array>'}, 'wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_0.add({f0_t: '<object>', f1_l: '<number>', f2_u: '<string>', f3_j: '<string>', f4_n: '<string>', f5_u: '<object>', f6_s: '<boolean>', f7_n: '<array>', f8_g: '<number>', f9_x: '<array>', f10_k: '<array>', f11_m: '<boolean>', f12_d: '<boolean>', f13_d: '<boolean>', f14_c: '<boolean>', f15_x: '<string>', f16_p: '<number>', f17_b: '<object>', f18_z: '<null>', f19_z: '<object>', f20_i: '<string>', f21_x: '<number>', f22_q: '<array>', f23_e: '<array>', f24_p: '<object>', f25_h: '<boolean>', f26_o: '<boolean>', f27_m: '<array>', f28_w: '<string>', f29_r: '<number>', f30_c: '<null>', f31_c: '<null>', f32_j: '<string>', f33_l: '<object>', f34_l: '<number>', f35_g: '<null>', f36_d: '<number>', f37_g: '<number>', f38_m: '<boolean>', f39_l: '<number>', f40_f: '<object>', f41_i: '<object>', f42_w: '<string>', f43_z: '<string>', f44_k: '<array>', f45_a: '<boolean>', f46_f: '<object>', f47_k: '<boolean>', f48_q: '<object>', f49_n: '<boolean>', f50_l: '<boolean>', f51_x: '<array>', f52_p: '<array>', f53_p: '<boolean>', f54_i: '<number>', f55_x: '<object>', f56_m: '<object>', f57_g: '<array>', f58_g: '<number>', f59_v: '<boolean>', f60_g: '<array>', f61_i: '<boolean>', f62_j: '<number>', f63_a: '<array>', f64_o: '<number>', f65_j: '<object>', f66_m: '<object>', f67_d: '<number>', f68_s: '<array>', f69_s: '<object>', f70_k: '<null>', f71_y: '<array>', f72_d: '<array>', f73_y: '<number>', f74_n: '<number>', f75_b: '<array>', f76_w: '<string>', f77_y: '<string>', f78_s: '<boolean>', f79_l: '<string>', f80_q: '<boolean>', f81_d: '<string>', f82_w: '<boolean>', f83_n: '<boolean>', f84_w: '<array>', f85_w: '<array>', f86_a: '<null>', f87_x: '<null>', f88_f: '<null>', f89_o: '<string>', f90_c: '<null>', f91_v: '<number>', f92_i: '<string>', f93_o: '<string>', f94_g: '<object>', f95_l: '<boolean>', f96_t: '<null>', f97_r: '<number>', f98_g: '<string>', f99_k: '<number>', f100_g: '<boolean>', f101_h: '<boolean>', f102_l: '<array>', f103_j: '<number>', f104_f: '<string>', f105_i: '<object>', f106_n: '<null>', f107_o: '<array>', f108_g: '<boolean>', f109_n: '<null>', f110_d: '<number>', f111_h: '<string>', f112_u: '<boolean>', f113_r: '<string>', f114_d: '<boolean>', f115_y: '<string>', f116_h: '<string>', f117_c: '<null>', f118_w: '<null>', f119_z: '<object>', f120_q: '<array>', f121_d: '<object>', f122_n: '<string>', f123_i: '<array>', f124_a: '<boolean>', f125_b: '<string>', f126_x: '<boolean>', f127_y: '<object>', f128_e: '<boolean>', f129_l: '<string>', f130_d: '<number>', f131_l: '<object>', f132_z: '<null>', f133_d: '<array>', f134_d: '<null>', f135_o: '<number>', f136_w: '<array>', f137_m: '<null>', f138_l: '<null>', f139_e: '<null>', f140_d: '<boolean>', f141_s: '<string>', f142_i: '<number>', f143_e: '<boolean>', f144_s: '<array>', f145_t: '<string>', f146_v: '<array>', f147_s: '<boolean>', f148_u: '<null>', f149_j: '<string>', f150_b: '<array>', f151_h: '<null>', f152_h: '<boolean>', f153_t: '<boolean>', f154_n: '<number>', f155_p: '<string>', f156_q: '<array>', f157_q: '<number>', f158_z: '<boolean>', f159_e: '<boolean>', f160_i: '<string>', f161_h: '<number>', f162_t: '<number>', f163_i: '<array>', f164_f: '<number>', f165_b: '<string>', f166_d: '<string>', f167_e: '<string>', f168_f: '<object>', f169_s: '<string>', f170_x: '<array>', f171_t: '<object>', f172_s: '<number>', f173_l: '<null>', f174_y: '<boolean>', f175_o: '<string>', f176_f: '<boolean>', f177_t: '<string>', f178_o: '<array>', f179_x: '<boolean>', f180_d: '<array>', f181_g: '<array>', f182_g: '<number>', f183_t: '<array>', f184_l: '<null>', f185_h: '<array>', f186_o: '<object>', f187_o: '<string>', f188_v: '<array>', f189_m: '<boolean>', f190_h: '<null>', f191_m: '<number>', f192_t: '<array>', f193_k: '<number>', f194_z: '<number>', f195_f: '<null>', f196_y: '<array>', f197_y: '<object>', f198_o: '<number>', f199_t: '<boolean>', f200_c: '<boolean>'}, 'wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU');
    var getAllKeys_0 = objectStore_0.getAllKeys(2250420780);
    var count_0 = objectStore_0.count();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU');
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3787');
    var objectStore_2 = db.createObjectStore('objectStore_3788', {autoIncrement: false});
    var index_2535 = objectStore_2.createIndex('index_2535', 'test', {unique: true});
    var clear_1 = objectStore_1.clear();
    var objectStore_3 = db.createObjectStore('objectStore_3789', {keypath: 'akcDFvgpKVQLAmEJBQhAcjFoaxmXnVHmycbXbcJjqntAlayZFQDSghCiuKGjCtXgbVAfQeljIySOxLWmmUxfkLrQfvUhWQznlaOMtCwAjwoyopzsuCoKWJHrHUuxUnXoNQCXWExtDqFyIbBAInCzGGWZqUYbjyhHFqfTKhdIydFDwwpeEveZllBykMGXcqEUDDIpUQHlWwCkCtZjibQQPSarXNJkmHVseyqcauXsqqvVreiBjwwUPwtqRbYrRtxXWLywnhSVgMabrIzTUHIJikZhkRHXzvWJBBbYjxijSdOiIyLuqvOkZnoTSKclOoXNQsLKlqGiFqzKufEwizYdFeLQPTWMZkcWibiElSklsxepDVLatYvIjuOkMgXcTXIwnTKzKgZGoAYZicncbrsaaKeicSdvQTRBZVCsTWDySgqYFSAmESLqlMaRhnIsnuBCUSrqdOHlFuCWIsBBMMoKJfkooWdONgWvGLGQjKHDkzIvNIoOfVEywYBZsCOnPJQyyxNikgMnWplmMYpaqDRyksaUcuzkfVVwRbjYjSPfAkRWficMhIXjHVHRvwekZkyZpdny', autoIncrement: true});
    var clear_2 = objectStore_3.clear();
    var add_1 = objectStore_1.add({f0_v: '<array>', f1_v: '<number>', f2_g: '<array>', f3_g: '<array>', f4_d: '<number>', f5_a: '<array>', f6_t: '<number>', f7_z: '<number>', f8_m: '<boolean>', f9_g: '<number>', f10_n: '<number>', f11_c: '<string>', f12_x: '<array>', f13_y: '<array>', f14_i: '<object>', f15_t: '<number>', f16_q: '<array>', f17_b: '<null>', f18_c: '<null>', f19_b: '<number>', f20_g: '<number>', f21_f: '<boolean>', f22_d: '<object>', f23_s: '<boolean>', f24_y: '<object>', f25_k: '<string>', f26_k: '<null>', f27_q: '<boolean>', f28_f: '<object>', f29_k: '<array>', f30_i: '<number>', f31_u: '<boolean>', f32_f: '<string>', f33_o: '<number>', f34_b: '<string>', f35_v: '<null>', f36_w: '<string>', f37_w: '<object>', f38_w: '<object>', f39_l: '<null>', f40_t: '<string>', f41_e: '<null>', f42_i: '<null>', f43_d: '<boolean>', f44_w: '<object>', f45_r: '<array>', f46_b: '<null>', f47_a: '<array>', f48_n: '<array>', f49_n: '<string>', f50_w: '<array>', f51_v: '<array>', f52_i: '<string>', f53_c: '<null>', f54_l: '<null>', f55_z: '<array>', f56_w: '<boolean>', f57_c: '<object>', f58_w: '<string>', f59_u: '<array>', f60_t: '<array>', f61_u: '<string>', f62_a: '<number>', f63_p: '<string>', f64_c: '<boolean>', f65_m: '<boolean>', f66_p: '<number>', f67_c: '<array>', f68_x: '<boolean>', f69_x: '<array>', f70_d: '<object>', f71_k: '<array>', f72_g: '<number>', f73_g: '<number>', f74_g: '<object>', f75_k: '<number>', f76_s: '<string>', f77_w: '<boolean>', f78_q: '<array>', f79_m: '<array>', f80_k: '<string>', f81_j: '<string>', f82_t: '<null>', f83_h: '<object>', f84_m: '<array>', f85_b: '<boolean>', f86_g: '<array>', f87_e: '<object>', f88_m: '<array>', f89_z: '<boolean>', f90_b: '<string>', f91_e: '<array>', f92_n: '<null>', f93_t: '<object>', f94_x: '<array>', f95_v: '<string>', f96_k: '<null>', f97_u: '<object>', f98_i: '<null>', f99_l: '<string>', f100_q: '<array>', f101_v: '<string>', f102_h: '<string>', f103_s: '<number>', f104_e: '<string>', f105_b: '<object>', f106_e: '<boolean>', f107_p: '<boolean>', f108_k: '<null>', f109_k: '<object>', f110_r: '<boolean>', f111_r: '<array>', f112_x: '<boolean>', f113_l: '<boolean>', f114_u: '<array>', f115_z: '<string>', f116_y: '<object>', f117_j: '<object>', f118_x: '<null>', f119_e: '<array>', f120_w: '<null>', f121_u: '<string>', f122_z: '<string>', f123_f: '<number>', f124_j: '<number>', f125_j: '<null>', f126_j: '<string>', f127_c: '<string>', f128_s: '<object>', f129_y: '<array>', f130_s: '<string>', f131_i: '<number>', f132_t: '<array>', f133_k: '<string>', f134_h: '<number>', f135_m: '<boolean>', f136_x: '<string>', f137_v: '<array>', f138_u: '<number>', f139_r: '<array>', f140_f: '<null>', f141_l: '<array>', f142_u: '<string>', f143_k: '<array>', f144_y: '<boolean>', f145_m: '<null>', f146_s: '<string>', f147_w: '<array>', f148_k: '<string>', f149_c: '<null>', f150_v: '<null>', f151_u: '<string>', f152_g: '<array>', f153_u: '<boolean>', f154_c: '<null>', f155_i: '<string>', f156_y: '<string>', f157_y: '<object>', f158_e: '<array>', f159_w: '<array>', f160_s: '<number>', f161_y: '<array>', f162_r: '<boolean>', f163_a: '<number>', f164_f: '<array>', f165_p: '<null>', f166_i: '<boolean>', f167_h: '<string>', f168_d: '<string>', f169_f: '<number>', f170_x: '<array>', f171_h: '<number>', f172_t: '<null>', f173_r: '<array>', f174_g: '<number>', f175_g: '<boolean>', f176_p: '<boolean>', f177_g: '<boolean>', f178_b: '<null>', f179_f: '<number>', f180_x: '<number>', f181_o: '<null>', f182_m: '<array>', f183_k: '<array>', f184_l: '<array>', f185_g: '<string>', f186_f: '<number>', f187_m: '<array>', f188_f: '<number>', f189_a: '<string>', f190_s: '<number>', f191_c: '<object>', f192_z: '<null>', f193_h: '<string>', f194_f: '<array>', f195_g: '<boolean>', f196_m: '<boolean>', f197_x: '<null>', f198_i: '<object>', f199_d: '<number>', f200_m: '<array>', f201_s: '<number>', f202_a: '<number>', f203_g: '<object>', f204_p: '<boolean>', f205_o: '<boolean>', f206_s: '<object>', f207_m: '<null>', f208_q: '<null>', f209_u: '<object>', f210_d: '<object>', f211_f: '<string>', f212_c: '<number>', f213_l: '<number>', f214_t: '<object>', f215_a: '<object>', f216_r: '<array>', f217_j: '<array>', f218_s: '<string>', f219_d: '<object>', f220_d: '<string>', f221_a: '<null>', f222_x: '<number>', f223_w: '<string>', f224_w: '<array>', f225_b: '<object>', f226_e: '<object>', f227_o: '<string>', f228_g: '<string>', f229_v: '<object>', f230_h: '<array>', f231_r: '<array>', f232_b: '<null>', f233_j: '<object>', f234_o: '<boolean>', f235_p: '<number>', f236_h: '<boolean>', f237_w: '<boolean>', f238_y: '<object>', f239_n: '<array>', f240_h: '<number>'}, 'qOlgvHtyiMFeSumlHhClIGNCpysCoHSeVSFBOnqmrFxYwHUucTBtEeqRqWaYFElMLdLzSSdRndddHlpDxUgjldWJhXpfuNMTblpYoQSMwIlUwjDEKYdRLOSLBZwiabCGCBmAJyKQtQqfJoJeyKvyCdlMZxMqWiZtTZtsPfByacohaEjcmbhvoydwjQBaSJuXuycTuuKEwOFAsuuIQBxwoIMKeDYjOKGKUzNQLdJofgyiylcEYlNqfQSFlfdiOLWHrDDHfmOeQwccedzZFwqFbKQKQZGWbYGDIQIRrlQnnrbzLmHoemWLrCVhupLGCpJMdGRSTIjIsUskkrPFGXXpDkmzVlQQOjpHnyUGLxasrxUkbbLYDaVcETZatgZRSpJxXUMDkQrIYhPesuKGbytOknGHwkHvDlpxnrbhYifEVLmTHNsjuByqRctaFbTADmwqlTECpcLncULidJcQBaCRZyNScjdNqyyDaPCCsPUqmbvHkxOzLAKfvslQSDdenjWsUztVbnIWScsGULypFrfCtTDuLUqDyxJOPKlDNNAufMAvzAiriRchmHmBoIKeCCmrlCAcPMSHUGJdNBnAlcuRKtsWIwnsewwjHZpQUkmtbunLrmjgmCvodfpfNlsdOobGaBQCXIFjqwwTXblDRcOxJLitWivxQKyNzsflOMzgukxkxFrvaaugaaAxxORqYqWrpaLLWABTazfGcPkjENQCoPYPYzDpbBQvHCtzUvOoLLboQBHPRBnSCKQabElnHSyuzJsZEQoiCFIfIxIQBOaKQwCncvmCwksJKHhcZhPgUroUTjSLRFBhIxXdSCpcaJYWdziglBBGaUqzAmycWgRKbUnTMVDnLEstR');
    var clear_3 = objectStore_3.clear();
    var objectStore_4 = db.createObjectStore('objectStore_3790', {keypath: 'WkKHabtkKxkhJqGGUuwIFffzOFRCyIDIryKyQebDxAUrzdyHdTDVCislgQTBjiLnJdpuXcFCtwPFGOZMhUtlHoJYfCDpAomWhaIcmoaUYzFLOvCCdAoZMGFwDQdcjBATJHKWBfcmGhuZZqvbyusLMjJLqDkYuYcXbkejDOWThJNzsrTPLmWJSxMBwrFNHirXNMsNqCJioqQYbnLmNDydfPOQogAcNFThKBhTQvMKpUAQFzTomlEmjcMwIKCvXVInEYNvLqYeHJmblmzvXzIsxcZUHuTTHtIEanRCHNCvtiyDKxshiGxVtUhPeIrQWlTqAnlfbjkMhpEjNNitaSYuMyzPxlAUKKqMlJRisrcDWQLBIVBSQQAosjoDucsHDeEZYHfhZUFlfJjRcnIRcZsMBOyPKbnwgCUbQKCmODRVluGurVJPzxfqMZhwPFxJaByOigmKhEBxXSEwhfSAyodFrDwiWlkSLNqfmZndFuBLhyOmVRPpHiUqnMDcJfScCFEOVjEukinniulmejIudwpvDPWoxcWEpuuenKnJDiZTQRZYODwYfbguZVEMWsexvrpShfsrAJOMzmuSeOjVUZeqkhWzugywBxkVQcuQFQdYdGBVbDBe'});
    var add_2 = objectStore_2.add({f0_l: '<number>', f1_x: '<number>', f2_y: '<array>', f3_g: '<string>', f4_p: '<boolean>', f5_a: '<boolean>', f6_y: '<object>', f7_p: '<boolean>', f8_l: '<boolean>', f9_e: '<object>', f10_f: '<string>', f11_y: '<null>', f12_w: '<null>', f13_n: '<array>', f14_f: '<array>', f15_s: '<boolean>', f16_o: '<null>', f17_a: '<null>', f18_i: '<null>', f19_r: '<string>', f20_w: '<object>', f21_g: '<string>', f22_x: '<number>', f23_o: '<array>', f24_g: '<null>', f25_x: '<null>', f26_e: '<boolean>', f27_f: '<array>', f28_o: '<object>', f29_l: '<number>', f30_f: '<object>', f31_t: '<null>', f32_n: '<number>', f33_l: '<null>', f34_s: '<string>', f35_u: '<string>', f36_w: '<number>', f37_u: '<string>', f38_m: '<object>', f39_b: '<string>', f40_h: '<number>', f41_k: '<object>', f42_j: '<boolean>', f43_g: '<null>', f44_d: '<string>', f45_e: '<boolean>', f46_x: '<string>', f47_s: '<array>', f48_z: '<number>', f49_q: '<boolean>', f50_h: '<object>', f51_e: '<array>', f52_z: '<object>', f53_j: '<string>', f54_g: '<array>', f55_q: '<string>', f56_j: '<array>', f57_b: '<boolean>', f58_b: '<string>', f59_i: '<number>', f60_i: '<object>', f61_s: '<number>', f62_h: '<null>', f63_b: '<null>', f64_e: '<string>', f65_x: '<string>', f66_g: '<array>', f67_k: '<boolean>', f68_s: '<string>', f69_h: '<array>', f70_v: '<array>', f71_w: '<null>', f72_c: '<number>', f73_t: '<array>', f74_e: '<string>', f75_r: '<boolean>', f76_y: '<object>', f77_f: '<object>', f78_y: '<string>', f79_l: '<boolean>', f80_r: '<string>', f81_d: '<array>', f82_p: '<array>', f83_q: '<null>', f84_z: '<string>', f85_y: '<boolean>', f86_g: '<null>', f87_f: '<null>', f88_r: '<null>', f89_a: '<number>', f90_l: '<null>', f91_d: '<object>', f92_k: '<number>', f93_j: '<string>', f94_k: '<array>', f95_h: '<array>', f96_k: '<number>', f97_r: '<array>', f98_s: '<object>', f99_c: '<string>', f100_v: '<boolean>', f101_f: '<array>', f102_z: '<array>', f103_g: '<string>', f104_f: '<number>', f105_t: '<array>', f106_y: '<number>', f107_c: '<number>', f108_m: '<boolean>', f109_g: '<object>', f110_i: '<number>', f111_s: '<array>', f112_p: '<null>', f113_n: '<string>', f114_e: '<null>', f115_x: '<string>', f116_q: '<string>', f117_a: '<string>', f118_j: '<null>', f119_d: '<string>', f120_q: '<array>', f121_u: '<array>', f122_g: '<object>', f123_k: '<boolean>', f124_a: '<boolean>', f125_r: '<boolean>', f126_r: '<boolean>', f127_v: '<number>', f128_i: '<number>', f129_w: '<boolean>', f130_n: '<number>', f131_k: '<null>', f132_l: '<array>', f133_r: '<null>', f134_h: '<string>', f135_e: '<array>', f136_e: '<null>', f137_v: '<array>', f138_z: '<object>', f139_o: '<number>', f140_x: '<null>', f141_s: '<null>', f142_x: '<boolean>', f143_x: '<object>', f144_i: '<number>', f145_z: '<array>', f146_y: '<boolean>', f147_s: '<null>', f148_r: '<null>', f149_z: '<null>', f150_x: '<object>', f151_d: '<object>', f152_j: '<object>', f153_a: '<string>', f154_t: '<boolean>', f155_d: '<boolean>', f156_s: '<null>', f157_j: '<null>', f158_p: '<object>', f159_u: '<number>', f160_t: '<array>', f161_i: '<null>', f162_b: '<array>', f163_n: '<boolean>', f164_a: '<boolean>', f165_d: '<object>', f166_u: '<number>', f167_n: '<object>', f168_j: '<null>', f169_k: '<string>', f170_w: '<array>', f171_r: '<object>', f172_s: '<string>', f173_h: '<boolean>', f174_t: '<null>', f175_l: '<boolean>', f176_c: '<number>', f177_n: '<number>', f178_a: '<array>', f179_n: '<null>', f180_w: '<string>', f181_y: '<object>', f182_a: '<array>', f183_y: '<null>', f184_p: '<string>', f185_x: '<array>', f186_r: '<string>', f187_y: '<object>', f188_t: '<null>', f189_b: '<object>', f190_h: '<array>', f191_q: '<string>', f192_v: '<array>', f193_h: '<number>', f194_e: '<null>', f195_y: '<null>', f196_y: '<boolean>', f197_u: '<null>', f198_o: '<number>', f199_n: '<object>', f200_a: '<boolean>', f201_q: '<object>', f202_s: '<number>', f203_u: '<number>', f204_r: '<array>', f205_x: '<boolean>', f206_l: '<boolean>', f207_r: '<number>', f208_j: '<object>', f209_f: '<boolean>', f210_p: '<string>', f211_r: '<string>', f212_a: '<string>', f213_q: '<object>', f214_f: '<null>', f215_p: '<number>', f216_h: '<string>', f217_q: '<object>', f218_v: '<object>', f219_j: '<string>', f220_u: '<string>', f221_i: '<null>', f222_h: '<null>', f223_n: '<object>', f224_y: '<array>', f225_v: '<null>', f226_h: '<number>', f227_f: '<array>', f228_u: '<null>', f229_w: '<object>', f230_n: '<boolean>', f231_n: '<number>', f232_j: '<object>', f233_z: '<boolean>', f234_q: '<object>', f235_f: '<string>', f236_k: '<number>', f237_r: '<number>', f238_q: '<boolean>', f239_k: '<string>', f240_d: '<number>', f241_r: '<array>', f242_m: '<array>', f243_s: '<object>', f244_s: '<null>', f245_q: '<null>', f246_i: '<object>', f247_y: '<object>', f248_z: '<null>', f249_u: '<object>', f250_r: '<boolean>', f251_h: '<boolean>', f252_j: '<boolean>', f253_c: '<boolean>', f254_l: '<number>', f255_a: '<array>', f256_y: '<number>', f257_p: '<string>', f258_b: '<string>', f259_a: '<number>', f260_p: '<object>', f261_o: '<object>', f262_q: '<object>', f263_a: '<array>', f264_s: '<array>', f265_n: '<object>', f266_r: '<array>', f267_p: '<null>', f268_t: '<string>', f269_c: '<null>', f270_s: '<number>', f271_n: '<object>', f272_y: '<null>', f273_j: '<array>', f274_b: '<object>', f275_l: '<number>', f276_r: '<object>', f277_f: '<array>', f278_h: '<number>', f279_h: '<null>', f280_e: '<array>', f281_s: '<number>', f282_r: '<object>', f283_w: '<array>', f284_m: '<null>', f285_w: '<boolean>', f286_w: '<null>', f287_i: '<number>', f288_e: '<object>', f289_v: '<string>', f290_u: '<string>', f291_f: '<null>', f292_u: '<boolean>', f293_h: '<array>', f294_z: '<null>', f295_g: '<null>', f296_w: '<array>', f297_z: '<boolean>', f298_c: '<number>', f299_i: '<string>', f300_g: '<string>', f301_r: '<object>', f302_a: '<number>', f303_c: '<boolean>', f304_x: '<number>', f305_c: '<array>', f306_a: '<number>', f307_k: '<null>', f308_s: '<array>', f309_r: '<string>', f310_b: '<null>', f311_v: '<null>', f312_z: '<boolean>', f313_h: '<boolean>', f314_a: '<array>', f315_h: '<object>', f316_i: '<number>', f317_n: '<boolean>', f318_o: '<null>', f319_n: '<array>', f320_o: '<array>', f321_p: '<number>', f322_d: '<object>', f323_i: '<boolean>', f324_y: '<boolean>', f325_k: '<number>', f326_l: '<null>', f327_y: '<number>', f328_g: '<string>', f329_h: '<object>', f330_y: '<null>', f331_g: '<array>', f332_m: '<object>', f333_r: '<boolean>', f334_w: '<array>', f335_t: '<boolean>', f336_d: '<string>', f337_d: '<string>', f338_w: '<null>', f339_c: '<object>', f340_y: '<boolean>', f341_w: '<array>', f342_j: '<object>', f343_r: '<null>', f344_e: '<array>', f345_t: '<number>', f346_k: '<number>', f347_w: '<null>', f348_c: '<array>', f349_t: '<array>', f350_c: '<array>', f351_h: '<number>', f352_s: '<number>', f353_y: '<array>', f354_a: '<boolean>', f355_x: '<number>', f356_j: '<string>', f357_n: '<string>', f358_y: '<object>', f359_z: '<string>', f360_u: '<boolean>', f361_t: '<object>', f362_s: '<string>', f363_p: '<string>', f364_r: '<array>', f365_m: '<object>', f366_k: '<number>', f367_b: '<number>', f368_a: '<null>', f369_u: '<boolean>', f370_g: '<number>', f371_c: '<number>', f372_y: '<number>', f373_p: '<string>', f374_o: '<number>', f375_v: '<null>', f376_f: '<number>', f377_o: '<object>', f378_z: '<null>', f379_t: '<object>', f380_p: '<number>', f381_x: '<object>', f382_b: '<string>', f383_d: '<boolean>', f384_z: '<number>', f385_o: '<boolean>', f386_j: '<string>', f387_h: '<object>', f388_w: '<object>', f389_w: '<array>', f390_s: '<boolean>', f391_f: '<array>', f392_u: '<boolean>', f393_n: '<null>', f394_l: '<null>', f395_n: '<object>', f396_y: '<string>', f397_v: '<string>', f398_t: '<boolean>', f399_p: '<array>', f400_h: '<null>', f401_a: '<number>', f402_h: '<object>', f403_w: '<null>', f404_x: '<string>', f405_o: '<boolean>', f406_g: '<string>', f407_w: '<boolean>', f408_w: '<boolean>', f409_z: '<array>', f410_c: '<boolean>', f411_f: '<null>', f412_k: '<boolean>', f413_l: '<boolean>', f414_i: '<string>', f415_u: '<boolean>', f416_r: '<array>', f417_l: '<boolean>', f418_u: '<null>', f419_d: '<object>', f420_u: '<array>', f421_k: '<string>', f422_p: '<string>', f423_m: '<object>', f424_v: '<number>'}, 'KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG');
    var clear_4 = objectStore_1.clear();
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('qOlgvHtyiMFeSumlHhClIGNCpysCoHSeVSFBOnqmrFxYwHUucTBtEeqRqWaYFElMLdLzSSdRndddHlpDxUgjldWJhXpfuNMTblpYoQSMwIlUwjDEKYdRLOSLBZwiabCGCBmAJyKQtQqfJoJeyKvyCdlMZxMqWiZtTZtsPfByacohaEjcmbhvoydwjQBaSJuXuycTuuKEwOFAsuuIQBxwoIMKeDYjOKGKUzNQLdJofgyiylcEYlNqfQSFlfdiOLWHrDDHfmOeQwccedzZFwqFbKQKQZGWbYGDIQIRrlQnnrbzLmHoemWLrCVhupLGCpJMdGRSTIjIsUskkrPFGXXpDkmzVlQQOjpHnyUGLxasrxUkbbLYDaVcETZatgZRSpJxXUMDkQrIYhPesuKGbytOknGHwkHvDlpxnrbhYifEVLmTHNsjuByqRctaFbTADmwqlTECpcLncULidJcQBaCRZyNScjdNqyyDaPCCsPUqmbvHkxOzLAKfvslQSDdenjWsUztVbnIWScsGULypFrfCtTDuLUqDyxJOPKlDNNAufMAvzAiriRchmHmBoIKeCCmrlCAcPMSHUGJdNBnAlcuRKtsWIwnsewwjHZpQUkmtbunLrmjgmCvodfpfNlsdOobGaBQCXIFjqwwTXblDRcOxJLitWivxQKyNzsflOMzgukxkxFrvaaugaaAxxORqYqWrpaLLWABTazfGcPkjENQCoPYPYzDpbBQvHCtzUvOoLLboQBHPRBnSCKQabElnHSyuzJsZEQoiCFIfIxIQBOaKQwCncvmCwksJKHhcZhPgUroUTjSLRFBhIxXdSCpcaJYWdziglBBGaUqzAmycWgRKbUnTMVDnLEstR', 'qOlgvHtyiMFeSumlHhClIGNCpysCoHSeVSFBOnqmrFxYwHUucTBtEeqRqWaYFElMLdLzSSdRndddHlpDxUgjldWJhXpfuNMTblpYoQSMwIlUwjDEKYdRLOSLBZwiabCGCBmAJyKQtQqfJoJeyKvyCdlMZxMqWiZtTZtsPfByacohaEjcmbhvoydwjQBaSJuXuycTuuKEwOFAsuuIQBxwoIMKeDYjOKGKUzNQLdJofgyiylcEYlNqfQSFlfdiOLWHrDDHfmOeQwccedzZFwqFbKQKQZGWbYGDIQIRrlQnnrbzLmHoemWLrCVhupLGCpJMdGRSTIjIsUskkrPFGXXpDkmzVlQQOjpHnyUGLxasrxUkbbLYDaVcETZatgZRSpJxXUMDkQrIYhPesuKGbytOknGHwkHvDlpxnrbhYifEVLmTHNsjuByqRctaFbTADmwqlTECpcLncULidJcQBaCRZyNScjdNqyyDaPCCsPUqmbvHkxOzLAKfvslQSDdenjWsUztVbnIWScsGULypFrfCtTDuLUqDyxJOPKlDNNAufMAvzAiriRchmHmBoIKeCCmrlCAcPMSHUGJdNBnAlcuRKtsWIwnsewwjHZpQUkmtbunLrmjgmCvodfpfNlsdOobGaBQCXIFjqwwTXblDRcOxJLitWivxQKyNzsflOMzgukxkxFrvaaugaaAxxORqYqWrpaLLWABTazfGcPkjENQCoPYPYzDpbBQvHCtzUvOoLLboQBHPRBnSCKQabElnHSyuzJsZEQoiCFIfIxIQBOaKQwCncvmCwksJKHhcZhPgUroUTjSLRFBhIxXdSCpcaJYWdziglBBGaUqzAmycWgRKbUnTMVDnLEstR', true, false);
        get_2 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    objectStore_2.deleteIndex('index_2535')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5650 = db.transaction(['objectStore_3789'], 'readonly', {durability:"strict"})
    var objectStore_3789 = txn_5650.objectStore('objectStore_3789');
    txn_5650.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5650.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5650.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5651 = db.transaction(['objectStore_3788', 'objectStore_3786'], 'readonly', {durability:"default"})
    var objectStore_3786 = txn_5651.objectStore('objectStore_3786');
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.only('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU');
        count_1 = objectStore_3786.count(KeyRange_6);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', false, false);
        get_3 = objectStore_3786.get(KeyRange_8);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', true, false);
        get_4 = objectStore_3786.get(KeyRange_10);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', false, false);
        get_5 = objectStore_3786.get(KeyRange_12);
    }
    catch (e){
    }

    txn_5651.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5651.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5651.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5652 = db.transaction(['objectStore_3786'], 'readonly', {durability:"default"})
    var objectStore_3786 = txn_5652.objectStore('objectStore_3786');
    var get_6;
    try{
        KeyRange_14 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', false, true);
        get_6 = objectStore_3786.get(KeyRange_14);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_16 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', false, true);
        get_7 = objectStore_3786.get(KeyRange_16);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_18 = IDBKeyRange.bound('wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', 'wOqMbTlGpamHmgoLypmhAtANYNnvcWTFU', true, true);
        get_8 = objectStore_3786.get(KeyRange_18);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('wOtxgfvwWvWMvJeSFSioyBwohquqPsfjacbWQKYdREllMfWFOsMykQPiPtCuJOiALNySVIsepaWTsAuutmHkwHDZLkUKQIdYjcFLnQvJkkaGSifoRYoudPUZYXFnslPnpliAprIUCDXTyOnWiAyNbGCKMElfSwgHzDeKinaSHxtBVaKOpNYruNtGnTReJTEaPjKMNKokafPpfnJYhXSrMOIEaPYNZGVCCowlAHDdzpAahCIhWiYMHReQTISoUfJeEqVeWdMOfTxRLzVjqGNCMuCTASLVZJREnNsoPU', false);
        get_9 = objectStore_3786.get(KeyRange_20);
    }
    catch (e){
    }

    var count_2 = objectStore_3786.count();
    txn_5652.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5652.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5652.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5653 = db.transaction(['objectStore_3789'], 'readonly', {durability:"default"})
    var objectStore_3789 = txn_5653.objectStore('objectStore_3789');
    txn_5653.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5653.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5653.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5654 = db.transaction(['objectStore_3788'], 'readonly', {durability:"relaxed"})
    var objectStore_3788 = txn_5654.objectStore('objectStore_3788');
    var get_10;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', false);
        get_10 = objectStore_3788.get(KeyRange_22);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', true);
        count_3 = objectStore_3788.count(KeyRange_24);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', true);
        get_11 = objectStore_3788.get(KeyRange_26);
    }
    catch (e){
    }

    var count_4 = objectStore_3788.count();
    var getAll_0;
    try{
        KeyRange_28 = IDBKeyRange.only('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG');
        getAll_0 = objectStore_3788.getAll(KeyRange_28, 2837157426);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG');
        getAll_0 = objectStore_3788.getAll(KeyRange_29);
    }

    var get_12;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', true);
        get_12 = objectStore_3788.get(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_32 = IDBKeyRange.bound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', 'KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', false, false);
        getAllKeys_1 = objectStore_3788.getAllKeys(KeyRange_32, 1837404970);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG');
        getAllKeys_1 = objectStore_3788.getAllKeys(KeyRange_33);
    }

    var get_13;
    try{
        KeyRange_34 = IDBKeyRange.bound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', 'KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', true, false);
        get_13 = objectStore_3788.get(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', true);
        getAllKeys_2 = objectStore_3788.getAllKeys(KeyRange_36, 920135073);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG');
        getAllKeys_2 = objectStore_3788.getAllKeys(KeyRange_37);
    }

    var get_14;
    try{
        KeyRange_38 = IDBKeyRange.bound('KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', 'KtOUIIqkrBBoRGtdTlAlVFHLPXvAOakcCoDbLXuMlJPYptbaiZScjVejvDkXuzlQGGTciyetNCofzEeNPghXBsbBziFQgWtluiKDUDEIOCCculXrWknFahSOOgHXfQJXovXlJGWdRCAoeQLWILYXPlpsNXaDDHVcoVxpKnrjdDwnuUNQrAWdNYXQCTbSxEYgnWdIjyLAOLWlLhSwDuFridhPyqXhNkAMzhpInMCQwQXaxgjiDQHdzGdziUCzaAQOBEewcbccLxJdHNxwqHWAEpohNRMZgqmyejCaExyDExHmSkOrrhcwGDCywqWzJZZZzclSwFzWHbbgaGSUyfxKCxDxXmEgYjAYEKmSrkQyCWgapKLGHOvQpmhxWmbnGIsnFaNyEmmuUDaPprdVSZG', false, true);
        get_14 = objectStore_3788.get(KeyRange_38);
    }
    catch (e){
    }

    txn_5654.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5654.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5654.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6383')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};