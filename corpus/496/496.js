let db;
const openRequest = window.indexedDB.open('str_1279', 3188569597551107)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2906', {autoIncrement: false});
    var index_1937 = objectStore_0.createIndex('index_1937', 'test', {multiEntry: true});
    var add_0 = objectStore_0.add({f0_c: '<number>', f1_s: '<array>', f2_l: '<number>', f3_g: '<number>', f4_m: '<boolean>', f5_a: '<null>', f6_b: '<object>', f7_r: '<object>', f8_p: '<array>', f9_o: '<array>', f10_h: '<boolean>', f11_i: '<null>', f12_v: '<boolean>', f13_b: '<number>', f14_e: '<string>', f15_p: '<number>', f16_h: '<array>', f17_z: '<string>', f18_a: '<array>', f19_f: '<number>', f20_s: '<object>', f21_v: '<string>', f22_b: '<null>', f23_h: '<number>', f24_s: '<object>', f25_u: '<array>', f26_t: '<null>', f27_j: '<number>', f28_i: '<number>', f29_c: '<null>', f30_o: '<object>', f31_g: '<object>', f32_v: '<null>', f33_s: '<number>', f34_c: '<number>', f35_r: '<number>', f36_a: '<object>', f37_q: '<boolean>', f38_z: '<string>', f39_r: '<object>', f40_t: '<null>', f41_a: '<array>', f42_z: '<boolean>', f43_u: '<object>', f44_s: '<array>', f45_p: '<array>', f46_y: '<number>', f47_t: '<boolean>', f48_x: '<array>', f49_g: '<boolean>', f50_y: '<null>', f51_i: '<object>', f52_g: '<boolean>', f53_n: '<string>', f54_n: '<string>', f55_u: '<string>', f56_d: '<object>', f57_e: '<number>', f58_h: '<object>', f59_h: '<string>', f60_h: '<array>', f61_x: '<boolean>', f62_u: '<object>', f63_j: '<boolean>', f64_z: '<array>', f65_r: '<array>', f66_t: '<object>', f67_y: '<object>', f68_e: '<number>', f69_s: '<string>', f70_v: '<number>', f71_m: '<string>', f72_f: '<string>', f73_g: '<array>', f74_s: '<array>', f75_p: '<null>', f76_l: '<number>', f77_s: '<object>', f78_g: '<object>', f79_i: '<null>', f80_g: '<number>', f81_z: '<string>', f82_f: '<null>', f83_j: '<array>', f84_z: '<string>', f85_x: '<object>', f86_b: '<number>', f87_o: '<number>', f88_g: '<array>', f89_u: '<object>', f90_f: '<null>', f91_t: '<object>', f92_x: '<null>', f93_z: '<object>', f94_x: '<string>', f95_l: '<object>', f96_f: '<boolean>', f97_u: '<null>', f98_u: '<boolean>', f99_o: '<null>', f100_z: '<boolean>', f101_p: '<number>', f102_j: '<null>', f103_e: '<string>', f104_w: '<string>', f105_h: '<object>', f106_y: '<string>', f107_s: '<array>', f108_f: '<number>', f109_y: '<boolean>', f110_f: '<object>', f111_u: '<string>', f112_q: '<number>', f113_k: '<array>', f114_a: '<object>', f115_r: '<number>', f116_r: '<number>', f117_k: '<array>', f118_n: '<array>', f119_n: '<null>', f120_r: '<array>', f121_u: '<string>', f122_z: '<null>', f123_g: '<null>', f124_r: '<string>', f125_u: '<object>', f126_s: '<string>', f127_f: '<array>', f128_n: '<object>', f129_y: '<string>', f130_q: '<array>', f131_s: '<string>', f132_o: '<number>', f133_z: '<number>', f134_w: '<boolean>', f135_p: '<boolean>', f136_r: '<object>', f137_s: '<null>', f138_x: '<string>', f139_l: '<string>', f140_x: '<boolean>', f141_y: '<string>', f142_p: '<number>', f143_l: '<null>', f144_s: '<string>', f145_v: '<boolean>', f146_y: '<number>', f147_w: '<string>', f148_i: '<array>', f149_h: '<null>', f150_q: '<array>', f151_j: '<number>', f152_x: '<boolean>', f153_o: '<number>', f154_i: '<boolean>', f155_o: '<null>', f156_n: '<string>', f157_i: '<boolean>', f158_m: '<array>', f159_i: '<array>', f160_w: '<object>', f161_f: '<string>', f162_u: '<null>', f163_y: '<object>', f164_z: '<string>', f165_s: '<null>', f166_k: '<null>', f167_j: '<boolean>', f168_n: '<string>', f169_v: '<boolean>', f170_a: '<string>', f171_k: '<string>', f172_g: '<boolean>', f173_k: '<array>', f174_w: '<null>', f175_w: '<null>', f176_f: '<boolean>', f177_j: '<boolean>', f178_s: '<number>', f179_k: '<object>', f180_b: '<boolean>', f181_n: '<string>', f182_p: '<array>', f183_k: '<object>', f184_f: '<object>', f185_y: '<array>', f186_f: '<object>', f187_m: '<number>', f188_o: '<null>', f189_g: '<number>', f190_v: '<array>', f191_w: '<object>', f192_u: '<object>', f193_i: '<null>', f194_f: '<number>', f195_q: '<array>', f196_d: '<boolean>', f197_y: '<string>', f198_v: '<object>', f199_o: '<string>', f200_g: '<number>', f201_l: '<array>', f202_h: '<array>', f203_b: '<number>', f204_m: '<null>', f205_a: '<string>', f206_v: '<boolean>', f207_y: '<object>', f208_o: '<object>', f209_q: '<number>', f210_g: '<null>', f211_i: '<boolean>', f212_q: '<array>', f213_c: '<array>', f214_g: '<number>', f215_l: '<number>', f216_f: '<object>', f217_o: '<number>', f218_w: '<array>', f219_p: '<string>', f220_w: '<object>', f221_f: '<null>', f222_t: '<null>', f223_p: '<array>', f224_w: '<null>', f225_x: '<string>', f226_h: '<string>', f227_j: '<string>', f228_u: '<array>', f229_y: '<boolean>', f230_m: '<null>', f231_z: '<number>', f232_t: '<number>', f233_p: '<number>', f234_h: '<object>', f235_p: '<object>', f236_b: '<array>', f237_y: '<null>', f238_k: '<string>', f239_h: '<boolean>', f240_p: '<object>', f241_z: '<null>', f242_c: '<array>', f243_v: '<number>', f244_o: '<null>', f245_l: '<number>', f246_a: '<object>', f247_q: '<null>', f248_g: '<number>', f249_c: '<string>', f250_l: '<number>', f251_q: '<object>', f252_n: '<object>', f253_q: '<object>', f254_s: '<object>', f255_i: '<object>', f256_r: '<boolean>', f257_q: '<number>', f258_y: '<object>', f259_x: '<number>', f260_i: '<boolean>', f261_j: '<string>', f262_h: '<boolean>', f263_f: '<boolean>', f264_x: '<string>', f265_j: '<boolean>', f266_i: '<array>', f267_o: '<number>', f268_u: '<string>', f269_g: '<string>', f270_k: '<array>', f271_l: '<number>', f272_o: '<number>', f273_n: '<string>', f274_r: '<string>', f275_l: '<object>', f276_x: '<number>', f277_e: '<object>', f278_l: '<string>', f279_c: '<string>', f280_s: '<array>', f281_l: '<array>', f282_u: '<number>', f283_o: '<number>', f284_i: '<string>', f285_o: '<number>', f286_q: '<object>', f287_d: '<boolean>', f288_e: '<array>', f289_q: '<object>', f290_a: '<object>', f291_t: '<null>', f292_z: '<null>', f293_z: '<object>', f294_g: '<string>', f295_e: '<object>', f296_a: '<string>', f297_s: '<string>', f298_e: '<object>', f299_i: '<array>', f300_n: '<array>', f301_r: '<array>', f302_r: '<object>', f303_x: '<boolean>', f304_m: '<array>', f305_a: '<array>', f306_n: '<string>'}, 'CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.only('CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ');
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var index_1938 = objectStore_0.createIndex('index_1938', 'test', {unique: false});
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ', 'CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ', false, true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var index_1939 = objectStore_0.createIndex('index_1939', 'test', {unique: false, multiEntry: false});
    var clear_0 = objectStore_0.clear();
    var add_1 = objectStore_0.add({f0_m: '<object>', f1_z: '<null>'}, 'zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp');
    var count_0 = objectStore_0.count();
    var getAll_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ', 'zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp', false, true);
        getAll_0 = objectStore_0.getAll(KeyRange_4, 708153042);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp');
        getAll_0 = objectStore_0.getAll(KeyRange_5);
    }

    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_b: '<string>', f1_y: '<string>', f2_b: '<object>', f3_c: '<array>'}, 'GaEvNcyPfhkPQAkaVpKaTtBhUGUVMZcKYOWZWCXrOMxvEpyNqmrJhNsgciGBbDOFifFusMftAXzPQVgPIpRhFFGmWaMtAODsqLdPaVnVsXmxATAJVOtySexJnbdwrQqGhZnYNNDsIrGmWKRgycPpvlBiHVsNQLcCvMTdBoIrMBANdVhWDeEpKcQhjrOBMZXuyMfYMkGblqOKauYySDvQwoVjfXQFxwsVVWfpMrRBrbsIPs');
    var index_1940 = objectStore_0.createIndex('index_1940', 'test');
    var index_1941 = objectStore_0.createIndex('index_1941', 'test');
    var clear_2 = objectStore_0.clear();
    var index_1942 = objectStore_0.createIndex('index_1942', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_2907', {keypath: 'NRzpLCPsFplxsCFFcGInOFOoZjMevkPsxrbsmCCENTPCKqLGXBAXBnzSrIsTXyNyjXrwttqsLKvgqzXkrIsqATAfDHWFJmukAkBIaJqjaosarpzTGyROrHRPFAkuBXCRNoLPvWHySOJXufwVUgkTrpBQEwyMHmLpdUPJlDOpEXIwleBpJtoqzxMuIRTPSUucIMJwLOJQxqQUOvUXSKKoVRgNvzDdFnwmMfXQCCZuqeuRwxiauBgsMpUIkukyUoJJqqgWGEHAWcNKPPodJBqGJYGJgXYeUSKgwAMzaTxLRnEOiswcbHzrRRUtmkbAmyJustksyrLrLarKEidYVYqXTcpmzwNcAwhALRAuTmrZfqAThjBnDrdynxtNMpDKiJtsTzFfqdhydaGzWmAaFWOaslBouDGDPbkMpZXlxyqVpBWZQpMZsRXtuttFCrzMdlUGEDLdXXdZsLwlWmFFSdpdCAFpzvCPLykiTvtTjtLeueaHimSCzRzmqBPmqnCYfXogGctcpQfmqxIyIEMoFMVSuDOfnzYXUNvFNaNpYsGWeiZhderjzEzsFxIcAkbdtoxHyShzeAlulzcAHUeKaUbAGTxxgqIXLdzmLozPmeHCtOmuipHxKSpsDXEszNOFzvctiHPQbbUiVtmOzxQMBJJmVvZqVelpifibLCLswLpgXaLQxvzuYctZSdicNoIvuMcyNBKCDcKSJInOYkhaJGjPXfToDBgdAUIUrwznkgSckgtbqJMirlmjZZKWureyoYjYOkjKBlsHvJAZtwQsjRroFlryqIMtkfmzLvutpDODmnKwBhxmhTUazNbdRBaEoMCYbrbmHBxEBTJBOPHfhKhhrBPoQrPwqKqEUOkKtVddrgmMtwCpDmaQWBkphAaQxIKIRLySwhIXoQtgQzeJOmcqRNwEVbtqrPoyr', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_2908', {autoIncrement: true});
    var getAll_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp', 'GaEvNcyPfhkPQAkaVpKaTtBhUGUVMZcKYOWZWCXrOMxvEpyNqmrJhNsgciGBbDOFifFusMftAXzPQVgPIpRhFFGmWaMtAODsqLdPaVnVsXmxATAJVOtySexJnbdwrQqGhZnYNNDsIrGmWKRgycPpvlBiHVsNQLcCvMTdBoIrMBANdVhWDeEpKcQhjrOBMZXuyMfYMkGblqOKauYySDvQwoVjfXQFxwsVVWfpMrRBrbsIPs', true, true);
        getAll_1 = objectStore_0.getAll(KeyRange_6, 1316773653);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp');
        getAll_1 = objectStore_0.getAll(KeyRange_7);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4330 = db.transaction(['objectStore_2907'], 'readonly', {durability:"relaxed"})
    var objectStore_2907 = txn_4330.objectStore('objectStore_2907');
    txn_4330.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4330.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4330.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4331 = db.transaction(['objectStore_2908', 'objectStore_2907', 'objectStore_2906'], 'readonly', {durability:"relaxed"})
    var objectStore_2907 = txn_4331.objectStore('objectStore_2907');
    txn_4331.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4331.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4331.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4332 = db.transaction(['objectStore_2907'], 'readonly', {durability:"strict"})
    var objectStore_2907 = txn_4332.objectStore('objectStore_2907');
    txn_4332.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4332.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4332.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4333 = db.transaction(['objectStore_2907'], 'readonly', {durability:"strict"})
    var objectStore_2907 = txn_4333.objectStore('objectStore_2907');
    txn_4333.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4333.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4333.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4334 = db.transaction(['objectStore_2906'], 'readwrite', {durability:"relaxed"})
    var objectStore_2906 = txn_4334.objectStore('objectStore_2906');
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.only('GaEvNcyPfhkPQAkaVpKaTtBhUGUVMZcKYOWZWCXrOMxvEpyNqmrJhNsgciGBbDOFifFusMftAXzPQVgPIpRhFFGmWaMtAODsqLdPaVnVsXmxATAJVOtySexJnbdwrQqGhZnYNNDsIrGmWKRgycPpvlBiHVsNQLcCvMTdBoIrMBANdVhWDeEpKcQhjrOBMZXuyMfYMkGblqOKauYySDvQwoVjfXQFxwsVVWfpMrRBrbsIPs');
        getAllKeys_0 = objectStore_2906.getAllKeys(KeyRange_8, 3003478312);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ');
        getAllKeys_0 = objectStore_2906.getAllKeys(KeyRange_9);
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('zsNEraKCrFJVOKlRNAAZlTeTrxXYnnnDBhfxuTdWLNWEfgZbakXRzSwLiiBmLCBGYDaxJjUvVSXiBoEVONsultmTXMxlZDGBMiaqopJTGynnbomLoZtvGThSJBMWDWNWEtJzDdxjcskAaCakXBuicgScJURRwGATWBwdHLOjBZfKaSXQNtcJQUHGmczJrbotghDCYvGLbbQUTDqhrsWDwfTymiTEkSRsYcdlkoONrWGhCfvxpszLFAPVgiYmjdSDNgTYEtEJuUdPHDrgFVNPjMwcoaltYrxlHgzmXoQPXrAaiEPcKqtXlzlomWlKQbFpYaGvTzyGgNVIfHgLoOyQkdtVrqACACCHoiGDIGTHQxKHnjJHvuWstObsInJnxbyXDaWhCNooijqqSWXaSPWVCVHtNMBQmawmjapdQlePvfFLBTKbfIAGTvPcdOdfFZkDvgIiiavjlymenjoKRxawvGPeceayadVWIrHPkaVwlIKPhcLNXRFSwewMkraPNTrwwzfrquMxWWmNoavVrWwIdNLsxTwKunJRcSAmCgbfoXwQTxXhHxCzVsFvszmLGotDvkzRgkcXLYCctUDwZscKcgMFIGupPoljiyEecOLbWwdxsdwmvFRdWnKeUORkWhIWWBnIpJoTSYzGCYQMWWofDzdzVAXDAxjhpsGTdKmCyysYrsTOnvotNEYvjQGIOBpdFBLlqMXHrYtglUczAgcGNgfdpWrOsCAHySfSXZUFQLOAQojipBnVnvuAp', false);
        get_1 = objectStore_2906.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_3 = objectStore_2906.clear();
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('GaEvNcyPfhkPQAkaVpKaTtBhUGUVMZcKYOWZWCXrOMxvEpyNqmrJhNsgciGBbDOFifFusMftAXzPQVgPIpRhFFGmWaMtAODsqLdPaVnVsXmxATAJVOtySexJnbdwrQqGhZnYNNDsIrGmWKRgycPpvlBiHVsNQLcCvMTdBoIrMBANdVhWDeEpKcQhjrOBMZXuyMfYMkGblqOKauYySDvQwoVjfXQFxwsVVWfpMrRBrbsIPs', true);
        delete_1 = objectStore_2906.delete(KeyRange_12);
    }
    catch (e){
    }

    var clear_4 = objectStore_2906.clear();
    var getAll_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ', 'CWzoEhqIgMJheedBsXRcnryYvScnpeKDNvRHgsUAgurjBMBniGJLWSYneNEMWCuqZBgfPHDimjExOkVaAgKlilwnklbiGTiKfeYEUcsYvvgiAnjbAOmcGZHztWYHWsleHLmjQpndCsqDXAdTmkltQrXbSzaNKBptsdpHJycPjlPhLUnpPhWnXtJrVknDzZnCmmeKEEsKPzwliDfWCLdxuLQZgCAdQuTGpAHGynayYVOWMIEGSlKuMllkSiSeKrVJmyYKVJEPzxqGYoqoEAnCarqdWckPDBqiDAznVLVjQfVegvRrFcrKYinkbQRztSXpieiRSfrkSCaWsWEqqjhCRJCIvGCMEPsyZMAvfNHfLaIHLBbkbAnOfhIxwKAShSUwSOMfpSBRVyyKVnZyctQXwZWvgikqUuluRrCsUrwoHVjZRaiEAcgqzwFKzEvmNWPTZkwBqNncvPQIVWfNhaYROtycPwspSLPKyZRlqliLvWhAVnJyJ', false, true);
        getAll_2 = objectStore_2906.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('GaEvNcyPfhkPQAkaVpKaTtBhUGUVMZcKYOWZWCXrOMxvEpyNqmrJhNsgciGBbDOFifFusMftAXzPQVgPIpRhFFGmWaMtAODsqLdPaVnVsXmxATAJVOtySexJnbdwrQqGhZnYNNDsIrGmWKRgycPpvlBiHVsNQLcCvMTdBoIrMBANdVhWDeEpKcQhjrOBMZXuyMfYMkGblqOKauYySDvQwoVjfXQFxwsVVWfpMrRBrbsIPs');
        getAll_2 = objectStore_2906.getAll(KeyRange_15);
    }

    var index_0 = objectStore_2906.index('index_1937');
    var getAll_3 = objectStore_2906.getAll();
    var put_1 = objectStore_2906.put({f0_g: '<object>', f1_s: '<object>'}, 'cLfZturmEWIucehEJsMhqcOCCcWZEiTtclpsZzWBkQZAgbLGbHjZHZVOtPqDfLDJmfEqhbhxQTlcqvfizVnjzixWdLagEriWiNUpJqpLbdzsSSbDgaKZAdmWHOjURnZCPIcxIPYSHaHTyjClmcVfRvqgHIRbEbFaTgQgLOViuzppEjAilDniFcGBXatdtdgNwTdSbodHTWyIBoJOjgDbdvQgyCaeOnCMunVMajtoAnONCvsUoiKTLipvpOEtpqVZSziVzXcwPzPpRFLcuWVinItFIRPshTsLFPolcyRCLniOWnxbYghegBvoWSQbVmbQPFefigwDNBVtjlfUTlrwpzwSAWiYyDbyiZBRFlvmTZrCmKPHYuOykqoQfdqdeBEGHsjpmgnwwhtMVtshbXuUbfuTluCQewWBVpQEPDvOxwjiHLWAZTFPgPpWhAuwfYrxcyyFvTLgXHGTZzSimOohJuRHMlocyIyNOvzqmSumQhQlvAvEgmscubbFWrtdWHmHHSLdnZdHAwsRDPvytZxUMuXTYAEDoXZarrDfrjkNTWLhyrfefZYFsEkGLKyUMXTfoKFMFwiWgZHdivKWnNsVcTkZbPoDleYznehmSFXtbguTbCLCvINVMyIojuLLFXikGyEnbgIbKNPEZFdWEeFiKBQqnoYWxcMjFGbsgHfqBCLkvfhHzaKiFcCUHlibXuCFURqawOWTjaAzstNleYQTAeUsFxfgsrtmUZDshHxoZlbIpBOIlxxAwwyWaQXmkBQFfCgnPwBlFPcDeruTOQSEqAVjpPUAnCjqFEcwkOcVMFmaGThKcabmuvPTGivDgtaeFFtGggwMsWGLKGusMuvaChZqIMTNxPwMivfvtpimPBvNpsNktMyvTWprsgFrDbZZFUIOjXeHTzjjBflDeRidwiUlDoeYgnYeGCAmUvBHbLVyRJdSzeEkfeXWAEsDhYlXJSynUEvkXhkEHmFQoYxGWgsdJXn');
    var clear_5 = objectStore_2906.clear();
    var put_2 = objectStore_2906.put({f0_q: '<number>', f1_z: '<number>', f2_e: '<string>', f3_c: '<string>', f4_q: '<number>', f5_m: '<string>', f6_q: '<string>', f7_j: '<array>'}, 'JMFzJefdrAjPxPptBEHTFJYJIDJowhBsBFqOGKFutsuAVnSLFJMHUvqLjDBlPiIFYSFyVPcwjpWodycGPSnNEKnMIKHyGESZEKTVvUoSqzIMlZeEKRsvWbZBrCCMQcnMHytoqEpAPBKqByzeiPdyTxBPMynPnETqURijEcPTSyHTsicqkrFuMpBMTSFicsdLumhPxJkixKPXrkUbEwCakosVUDKATPeTfKdenBOWYCYgNiAbUPQSqqaZbRWVxgaiBLEtypjxfgGVemkOHTqSnqEYLpMWghJVRziPBvPwgttjDaZAMPzsHnPrlOrfCSCtIHqaNVrDHIQtjtovhcZdrMSrPTviyoFxqTggtZdAhwCNOpcNOIulzqnDOTidvAfctMkvLQevNKjvgaBSMvisvIZLlzWWahxraXGoqbvjjYklzRNnLiTtynmRySOvRfcitceViaIPtEBTxpppvtEHPUPMAUdfyYxGFXAgxfmsCdrDCXEoKSIjGAgtvrQPHPaKxtHgRakzXuuAiuxxfTdnlACIoyeRLCFOFqwrMNUtLpbIUJqRurhuUFVxhRFBqyjqblJAkqYVfhGJarIjdzjsJKjxhzVPypzIaDyGFMuKvUUqbTSDrjReoKnfoSNuhhehXNclRZTEWLSpjIonTtLiAXjaenPtqtyBEBGcaXDDqKfSZNSBgoos');
    txn_4334.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4334.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4334.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4702')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};