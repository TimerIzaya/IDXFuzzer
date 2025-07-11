let db;
const openRequest = window.indexedDB.open('str_5848', 2368974761458145)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5277', {keypath: 'ZBSYIlrVMgDTsCNTLeaBxNYWUzththNUkVkIfOkVbhvTFStPDqkzpBakJblHKUhKUjnfWnyzTPzofDRGCIFiSzGCOOtJZrObscITfpFLxPxwerwVWhXGcmDJjPKgpEGYIjkxqOhqJEKmuUxRMCLOyFkzzhXnWiJQYrMNccakSGKmlpODeYNpJRTHQsEoueYvRMotkTuPjKoIUZAIYREOVzXaEvrqGIHVHcCmvLgubVnPykbLaKxzNRuPfjXAftTlttdpyDodzgDWshKkQvbPgxhdVFAWFZIxTAosWuBwrRtGtsdOweYLJoLKjEmfbdpcjvnIDYnVnzHPamUkUTgaWdXIVNcfPTul'});
    var index_3540 = objectStore_0.createIndex('index_3540', 'test', {unique: false});
    db.deleteObjectStore('objectStore_5277')
    var objectStore_1 = db.createObjectStore('objectStore_5278', {autoIncrement: true});
    var clear_0 = objectStore_1.clear();
    var put_0 = objectStore_1.put({f0_l: '<array>'}, 'HMXcPDlbNBHhrTnHghxvsmnRkvwREMoBAgQyPrBdJNtowZQVZiOFJcLjjwPFrWGocvvAPBxcOizOCuiEuYXGAfEGpQmmzUZLlcoRDvPpsdmWgzSIAyJguHOJVGJNZunfPoXVTCzZTdQvYDDYvYpTyvptxTFigFyWtTcaqnTCwAKsTCVYHooVEVpffMPPZBoWQiqsfKwXwsfzMZPBfmyMlgkWYxlJhfxbzMLJZbDjqClDbGYBENkBNCuFXYbUPOcvMyVrLXCZVoePXHIwcLTibqPEZOpyrtyQmKCzuumFOUMLuMXCwaojHDQWjBKSVJHOrJbEroMSoRtJNGxIfHOBEiFrxyURkXRfxFGlVPCfZluSjUWPeMGabmOgEVgiNbKuOHFznMOclFiNCqwddUfTSZogbUASIYyxvmHLHPoXeueDYlxHlgLatyTTdYnpRUSbN');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7960 = db.transaction(['objectStore_5278'], 'readwrite', {durability:"default"})
    var objectStore_5278 = txn_7960.objectStore('objectStore_5278');
    var add_0 = objectStore_5278.add({f0_q: '<string>', f1_y: '<number>', f2_d: '<boolean>', f3_l: '<array>'}, 'RAXOvEpUfTjfYZHbhvNEIGHTMuBjORRTNcNluHfuTQbUgDjgAvgiMFPdtsSFYtuyYkjYZjzQOYtSzeMmLlxXJBCMMowStnAVHmBXLLchprCkhEKlDQedUICBYeSMGnhQLhOgiwpRaHZSsgsnlXOevychmTvNpkLPGxLhMdhzNjEzMcgYUAnRGwgChGuFtcHtpEGMovcjamFfrkjxMIZkmWHcNcqJPtsbawRNbxXrrAFpTJyvijRZtWeUupWzjTAePeusBRyVllGAHIPMIFCS');
    var add_1 = objectStore_5278.add({f0_s: '<number>', f1_d: '<number>', f2_c: '<null>', f3_n: '<boolean>', f4_j: '<boolean>', f5_f: '<boolean>', f6_i: '<boolean>', f7_t: '<array>', f8_u: '<string>'}, 'ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ');
    var put_1 = objectStore_5278.put({f0_u: '<array>', f1_f: '<string>', f2_n: '<object>', f3_p: '<object>', f4_v: '<boolean>', f5_d: '<null>', f6_i: '<null>', f7_h: '<number>', f8_g: '<array>', f9_t: '<number>', f10_g: '<null>', f11_y: '<object>', f12_v: '<number>', f13_l: '<string>', f14_m: '<boolean>', f15_h: '<null>', f16_d: '<boolean>', f17_e: '<number>', f18_c: '<boolean>', f19_n: '<number>', f20_j: '<array>', f21_i: '<object>', f22_q: '<number>', f23_r: '<array>', f24_q: '<number>', f25_f: '<boolean>', f26_v: '<object>', f27_q: '<object>', f28_g: '<object>', f29_q: '<string>', f30_h: '<number>', f31_m: '<boolean>', f32_j: '<string>', f33_n: '<null>', f34_j: '<number>', f35_h: '<number>', f36_q: '<null>', f37_i: '<number>', f38_n: '<boolean>', f39_h: '<array>', f40_y: '<null>', f41_d: '<boolean>', f42_u: '<number>', f43_i: '<boolean>', f44_j: '<string>', f45_g: '<object>', f46_i: '<object>', f47_j: '<string>', f48_q: '<object>', f49_c: '<number>', f50_o: '<null>', f51_l: '<boolean>', f52_z: '<number>', f53_e: '<array>', f54_f: '<object>', f55_p: '<number>', f56_l: '<null>', f57_n: '<string>', f58_p: '<number>', f59_i: '<null>', f60_n: '<object>', f61_a: '<array>', f62_t: '<array>', f63_o: '<null>', f64_e: '<boolean>', f65_o: '<string>', f66_z: '<string>', f67_e: '<object>', f68_u: '<number>', f69_z: '<string>', f70_y: '<boolean>', f71_i: '<string>', f72_j: '<object>', f73_a: '<number>', f74_b: '<number>', f75_g: '<boolean>', f76_a: '<string>', f77_m: '<null>', f78_x: '<null>', f79_c: '<array>', f80_r: '<string>', f81_j: '<number>', f82_c: '<array>', f83_a: '<object>', f84_n: '<boolean>', f85_h: '<string>', f86_e: '<object>', f87_q: '<string>', f88_i: '<object>', f89_r: '<null>', f90_i: '<string>', f91_m: '<array>', f92_u: '<object>', f93_p: '<null>', f94_b: '<number>', f95_y: '<boolean>', f96_h: '<boolean>', f97_v: '<number>', f98_g: '<array>', f99_y: '<boolean>', f100_k: '<array>', f101_d: '<boolean>', f102_e: '<null>', f103_p: '<string>', f104_o: '<null>', f105_n: '<null>', f106_r: '<array>', f107_w: '<number>', f108_i: '<null>', f109_c: '<object>', f110_n: '<object>', f111_l: '<string>', f112_r: '<number>', f113_c: '<object>', f114_b: '<number>', f115_m: '<null>', f116_h: '<array>', f117_s: '<number>', f118_a: '<string>', f119_n: '<string>', f120_y: '<array>', f121_p: '<string>', f122_t: '<boolean>', f123_k: '<number>', f124_s: '<null>', f125_q: '<string>', f126_m: '<object>', f127_u: '<object>', f128_z: '<array>', f129_q: '<null>', f130_x: '<number>', f131_t: '<null>', f132_k: '<array>', f133_c: '<string>', f134_t: '<number>', f135_g: '<object>', f136_i: '<number>', f137_q: '<null>', f138_s: '<object>', f139_i: '<object>', f140_q: '<array>', f141_r: '<boolean>', f142_e: '<object>', f143_o: '<boolean>', f144_b: '<boolean>', f145_e: '<boolean>', f146_s: '<string>', f147_q: '<array>', f148_x: '<null>', f149_x: '<number>', f150_g: '<object>', f151_i: '<array>', f152_w: '<null>', f153_x: '<object>', f154_b: '<boolean>', f155_o: '<string>', f156_i: '<number>', f157_d: '<array>', f158_p: '<null>', f159_s: '<array>', f160_p: '<string>', f161_u: '<array>', f162_t: '<array>', f163_i: '<string>', f164_z: '<string>', f165_n: '<string>', f166_o: '<null>', f167_m: '<array>', f168_t: '<array>', f169_z: '<number>', f170_b: '<null>', f171_w: '<boolean>', f172_i: '<object>', f173_h: '<number>', f174_l: '<string>', f175_v: '<number>', f176_g: '<null>', f177_c: '<string>', f178_w: '<array>', f179_g: '<string>', f180_d: '<number>', f181_m: '<object>', f182_a: '<object>', f183_o: '<array>', f184_i: '<object>', f185_b: '<string>', f186_o: '<null>', f187_u: '<number>', f188_c: '<null>', f189_o: '<array>', f190_x: '<array>', f191_p: '<string>', f192_e: '<number>', f193_a: '<string>', f194_j: '<null>', f195_d: '<boolean>', f196_i: '<number>', f197_p: '<number>', f198_b: '<null>', f199_d: '<number>', f200_i: '<null>', f201_e: '<number>', f202_t: '<boolean>', f203_p: '<null>', f204_x: '<string>', f205_z: '<number>', f206_p: '<object>', f207_r: '<string>', f208_q: '<number>', f209_s: '<array>', f210_x: '<string>', f211_c: '<number>', f212_d: '<array>', f213_f: '<number>', f214_f: '<object>', f215_f: '<string>', f216_h: '<string>', f217_a: '<number>', f218_c: '<number>', f219_i: '<null>', f220_n: '<number>', f221_f: '<null>', f222_h: '<string>', f223_x: '<null>', f224_u: '<null>', f225_s: '<boolean>', f226_a: '<object>', f227_p: '<boolean>', f228_k: '<null>', f229_e: '<object>', f230_h: '<null>', f231_l: '<null>', f232_d: '<array>', f233_y: '<array>', f234_b: '<object>', f235_u: '<boolean>', f236_k: '<boolean>', f237_f: '<string>', f238_j: '<array>', f239_z: '<array>', f240_e: '<object>', f241_w: '<boolean>', f242_i: '<boolean>', f243_o: '<array>', f244_v: '<array>', f245_n: '<null>', f246_z: '<string>', f247_z: '<object>', f248_g: '<array>', f249_l: '<string>', f250_u: '<number>', f251_y: '<object>', f252_x: '<boolean>', f253_z: '<string>', f254_n: '<object>', f255_j: '<array>', f256_c: '<string>', f257_k: '<object>', f258_g: '<number>', f259_n: '<number>', f260_n: '<number>', f261_t: '<boolean>', f262_k: '<array>', f263_j: '<object>', f264_s: '<array>', f265_i: '<string>', f266_q: '<null>', f267_j: '<string>', f268_t: '<object>', f269_b: '<number>', f270_l: '<string>', f271_t: '<array>', f272_u: '<object>', f273_n: '<boolean>', f274_o: '<null>', f275_k: '<string>', f276_p: '<array>', f277_i: '<string>', f278_i: '<null>', f279_q: '<null>', f280_n: '<null>', f281_w: '<string>', f282_f: '<array>', f283_j: '<null>', f284_p: '<string>', f285_d: '<object>', f286_y: '<boolean>', f287_u: '<array>', f288_b: '<null>', f289_j: '<string>', f290_t: '<boolean>', f291_a: '<object>', f292_y: '<boolean>', f293_g: '<null>', f294_g: '<object>', f295_a: '<array>', f296_x: '<object>', f297_v: '<null>', f298_y: '<null>', f299_d: '<boolean>'}, 'FYLErxzvJhNyxZVQjiampDIHnAHqLG');
    var count_0 = objectStore_5278.count();
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.only('HMXcPDlbNBHhrTnHghxvsmnRkvwREMoBAgQyPrBdJNtowZQVZiOFJcLjjwPFrWGocvvAPBxcOizOCuiEuYXGAfEGpQmmzUZLlcoRDvPpsdmWgzSIAyJguHOJVGJNZunfPoXVTCzZTdQvYDDYvYpTyvptxTFigFyWtTcaqnTCwAKsTCVYHooVEVpffMPPZBoWQiqsfKwXwsfzMZPBfmyMlgkWYxlJhfxbzMLJZbDjqClDbGYBENkBNCuFXYbUPOcvMyVrLXCZVoePXHIwcLTibqPEZOpyrtyQmKCzuumFOUMLuMXCwaojHDQWjBKSVJHOrJbEroMSoRtJNGxIfHOBEiFrxyURkXRfxFGlVPCfZluSjUWPeMGabmOgEVgiNbKuOHFznMOclFiNCqwddUfTSZogbUASIYyxvmHLHPoXeueDYlxHlgLatyTTdYnpRUSbN');
        count_1 = objectStore_5278.count(KeyRange_0);
    }
    catch (e){
    }

    var clear_1 = objectStore_5278.clear();
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ', 'ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ', false, false);
        delete_0 = objectStore_5278.delete(KeyRange_2);
    }
    catch (e){
    }

    txn_7960.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7960.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7960.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7961 = db.transaction(['objectStore_5278'], 'readonly', {durability:"strict"})
    var objectStore_5278 = txn_7961.objectStore('objectStore_5278');
    var count_2 = objectStore_5278.count();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('HMXcPDlbNBHhrTnHghxvsmnRkvwREMoBAgQyPrBdJNtowZQVZiOFJcLjjwPFrWGocvvAPBxcOizOCuiEuYXGAfEGpQmmzUZLlcoRDvPpsdmWgzSIAyJguHOJVGJNZunfPoXVTCzZTdQvYDDYvYpTyvptxTFigFyWtTcaqnTCwAKsTCVYHooVEVpffMPPZBoWQiqsfKwXwsfzMZPBfmyMlgkWYxlJhfxbzMLJZbDjqClDbGYBENkBNCuFXYbUPOcvMyVrLXCZVoePXHIwcLTibqPEZOpyrtyQmKCzuumFOUMLuMXCwaojHDQWjBKSVJHOrJbEroMSoRtJNGxIfHOBEiFrxyURkXRfxFGlVPCfZluSjUWPeMGabmOgEVgiNbKuOHFznMOclFiNCqwddUfTSZogbUASIYyxvmHLHPoXeueDYlxHlgLatyTTdYnpRUSbN', true);
        get_0 = objectStore_5278.get(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_5278.getAll(4150163276);
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.only('ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ');
        count_3 = objectStore_5278.count(KeyRange_6);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ', 'FYLErxzvJhNyxZVQjiampDIHnAHqLG', true, false);
        getAll_1 = objectStore_5278.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('RAXOvEpUfTjfYZHbhvNEIGHTMuBjORRTNcNluHfuTQbUgDjgAvgiMFPdtsSFYtuyYkjYZjzQOYtSzeMmLlxXJBCMMowStnAVHmBXLLchprCkhEKlDQedUICBYeSMGnhQLhOgiwpRaHZSsgsnlXOevychmTvNpkLPGxLhMdhzNjEzMcgYUAnRGwgChGuFtcHtpEGMovcjamFfrkjxMIZkmWHcNcqJPtsbawRNbxXrrAFpTJyvijRZtWeUupWzjTAePeusBRyVllGAHIPMIFCS');
        getAll_1 = objectStore_5278.getAll(KeyRange_9);
    }

    var getAll_2 = objectStore_5278.getAll(1520926322);
    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ', false);
        getAllKeys_0 = objectStore_5278.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('HMXcPDlbNBHhrTnHghxvsmnRkvwREMoBAgQyPrBdJNtowZQVZiOFJcLjjwPFrWGocvvAPBxcOizOCuiEuYXGAfEGpQmmzUZLlcoRDvPpsdmWgzSIAyJguHOJVGJNZunfPoXVTCzZTdQvYDDYvYpTyvptxTFigFyWtTcaqnTCwAKsTCVYHooVEVpffMPPZBoWQiqsfKwXwsfzMZPBfmyMlgkWYxlJhfxbzMLJZbDjqClDbGYBENkBNCuFXYbUPOcvMyVrLXCZVoePXHIwcLTibqPEZOpyrtyQmKCzuumFOUMLuMXCwaojHDQWjBKSVJHOrJbEroMSoRtJNGxIfHOBEiFrxyURkXRfxFGlVPCfZluSjUWPeMGabmOgEVgiNbKuOHFznMOclFiNCqwddUfTSZogbUASIYyxvmHLHPoXeueDYlxHlgLatyTTdYnpRUSbN');
        getAllKeys_0 = objectStore_5278.getAllKeys(KeyRange_11);
    }

    var count_4 = objectStore_5278.count();
    var count_5 = objectStore_5278.count();
    var getAll_3 = objectStore_5278.getAll(3845968214);
    var getAllKeys_1 = objectStore_5278.getAllKeys();
    txn_7961.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7961.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7961.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7962 = db.transaction(['objectStore_5278'], 'readwrite', {durability:"relaxed"})
    var objectStore_5278 = txn_7962.objectStore('objectStore_5278');
    var put_2 = objectStore_5278.put({f0_s: '<array>', f1_l: '<null>', f2_f: '<object>', f3_f: '<boolean>'}, 'BqJcwUjPIOOzUvkfkkxdGJVRGruwquThsajSYVDnFMGSwpcalBSPFQtUaEdXwoovgHXAPJaLhtIrrbjqxzkjcXMPuGESOHcVBsjfXwysmnysJVxnUeoHWUOQGYBajxrqOJceBudkZSRGZZdmIdORHlTxrDpfqrnxzYYCHJrDvJknjjZctvuWaBohAKGHvIdFsfrwqLVhwPDPFaGaFWNFqybPTharXdNukoLXASjiBvWAvPZEdZMKPnystYOkeillCzlGnxZICtEmXBHECxNKRPfvfuGfJLHZMcPtQUwjkArukyubSCjWSJkuAmDesHJAmdWEcCaTptHisrLxCsbxzryKRMcEjvNlSORCPsthktCJgMAllURJBoJQrtLlucWTntztHixXKYsCERUBgifLLzQBfXLuZzwSRHPtcmJoERdYIVlULRSnJnbKrtRYgiZXEpEXEihnLRBTgjuNvOmxpKyVpmNENprgUdpjaejSsJMhmPhPeoaRZohnaPAaXZAOOzreyVWIPXZjmMAdSnbWxdiYjwfovMHYJASzWFsrHwvmfVNpzNYddLJJaVKbghvqCxHfhKaHyodtUuDYwsvFpgQGLElDTQubzHxZpNtRZVbkoFWSeTlbjUFvCPvJcHhXyoymytKSjHYjycuPFwhOKOZVvTp');
    var add_2 = objectStore_5278.add({f0_f: '<null>'}, 'tUvGzIbMEYBWDZbISJtSyKZxaKuIWFOdShvppFMUcSfLdpsIwJxdiWdTXgyRgTCBUgtybNwenRNwwUMVbjfCDArRjXMtqPKoTzQAemJSHGcyJkgNfNQjcNNBTkNFNRKqxNchkOnGwttJfxqtJWxnHBgJlCdRzNxjncBLOlxudNpzHnRInsozUYosTnizHtqjsBmtfLoJDxjEfyIiJdZIrWdLHjBwSBdafMiiMYWTJBKhuMSxhDADitGahxFmzwuRpiJRypHxHoMPAUiKDGFseLVfhpSiQZPCCHfKmWqLGBJBuqnpFWCCwFzDtLnPOdoJJqdzEfDmzfucUeTcVwQWyIDmbRpoKByoQqlYBWXSseEDFoWeTfZVtgJaulnqgJaGihDriJVMkyZRMYWDcNLBPmaqUkGCZQCEvKpxjehpSBKqXjsMjrYQYPjwGwEgwyBuI');
    var count_6 = objectStore_5278.count();
    var add_3 = objectStore_5278.add({f0_e: '<number>', f1_o: '<boolean>', f2_k: '<boolean>', f3_h: '<object>'}, 'ATEennIWhxoMYpWknxcUigkWtvqeqREuHKhmDYnLsTqDhcpYVE');
    var clear_2 = objectStore_5278.clear();
    var getAll_4 = objectStore_5278.getAll(4273395799);
    var put_3 = objectStore_5278.put({f0_n: '<string>', f1_w: '<object>', f2_h: '<object>', f3_e: '<boolean>', f4_a: '<null>', f5_b: '<boolean>', f6_a: '<array>', f7_s: '<number>', f8_i: '<number>', f9_x: '<null>', f10_j: '<null>', f11_m: '<null>', f12_r: '<object>', f13_e: '<string>', f14_x: '<object>', f15_n: '<null>', f16_o: '<object>', f17_q: '<null>', f18_e: '<array>', f19_v: '<null>', f20_q: '<object>', f21_f: '<boolean>', f22_m: '<object>', f23_c: '<object>', f24_d: '<number>', f25_a: '<string>', f26_y: '<null>', f27_y: '<boolean>', f28_t: '<string>', f29_b: '<object>', f30_d: '<array>', f31_t: '<object>', f32_u: '<null>', f33_w: '<boolean>', f34_y: '<string>', f35_o: '<boolean>', f36_z: '<array>', f37_v: '<object>', f38_r: '<number>', f39_i: '<number>', f40_o: '<null>', f41_l: '<number>', f42_h: '<object>', f43_o: '<object>', f44_c: '<null>', f45_r: '<null>', f46_f: '<number>', f47_g: '<boolean>', f48_j: '<null>', f49_u: '<string>', f50_c: '<object>', f51_j: '<string>', f52_g: '<null>', f53_j: '<string>', f54_u: '<string>', f55_b: '<boolean>', f56_o: '<object>', f57_v: '<null>', f58_j: '<array>', f59_z: '<object>', f60_a: '<object>', f61_z: '<object>', f62_d: '<object>', f63_e: '<string>', f64_w: '<string>', f65_b: '<null>', f66_r: '<array>', f67_j: '<object>', f68_z: '<array>', f69_e: '<string>', f70_b: '<string>', f71_o: '<string>', f72_y: '<boolean>', f73_p: '<object>', f74_v: '<string>', f75_d: '<boolean>', f76_j: '<array>', f77_z: '<object>', f78_e: '<number>', f79_a: '<boolean>', f80_y: '<boolean>', f81_a: '<number>', f82_d: '<string>', f83_o: '<null>', f84_y: '<string>', f85_g: '<number>', f86_k: '<null>', f87_j: '<null>', f88_r: '<string>', f89_k: '<number>', f90_c: '<boolean>', f91_q: '<object>', f92_w: '<array>', f93_u: '<array>', f94_b: '<string>', f95_a: '<boolean>', f96_d: '<string>', f97_m: '<array>', f98_r: '<object>', f99_c: '<number>', f100_r: '<boolean>', f101_u: '<string>', f102_g: '<string>', f103_n: '<array>', f104_o: '<object>', f105_k: '<object>', f106_l: '<string>', f107_o: '<string>', f108_n: '<object>', f109_u: '<boolean>', f110_g: '<number>', f111_t: '<number>', f112_w: '<number>', f113_u: '<array>', f114_t: '<boolean>', f115_w: '<null>', f116_o: '<null>', f117_a: '<array>', f118_n: '<null>', f119_z: '<boolean>', f120_g: '<string>', f121_m: '<object>', f122_c: '<array>', f123_f: '<string>', f124_d: '<object>', f125_w: '<null>', f126_p: '<boolean>', f127_f: '<boolean>', f128_j: '<array>', f129_z: '<array>', f130_i: '<null>', f131_k: '<number>', f132_p: '<array>', f133_y: '<object>', f134_s: '<string>', f135_d: '<number>', f136_o: '<array>', f137_p: '<object>', f138_p: '<boolean>', f139_c: '<boolean>', f140_a: '<array>', f141_b: '<array>', f142_g: '<array>', f143_g: '<object>', f144_l: '<array>', f145_m: '<boolean>', f146_s: '<number>', f147_r: '<object>', f148_q: '<null>', f149_q: '<array>', f150_x: '<number>', f151_k: '<string>', f152_t: '<null>', f153_k: '<boolean>', f154_z: '<number>', f155_w: '<null>', f156_j: '<null>', f157_l: '<object>', f158_f: '<array>', f159_s: '<boolean>', f160_b: '<array>', f161_v: '<array>', f162_n: '<array>', f163_x: '<array>', f164_x: '<boolean>', f165_t: '<string>', f166_y: '<object>', f167_t: '<object>', f168_y: '<boolean>', f169_z: '<number>', f170_h: '<array>', f171_a: '<number>', f172_v: '<string>', f173_i: '<boolean>', f174_u: '<object>', f175_a: '<number>', f176_x: '<array>', f177_a: '<number>'}, 'DgPOdUREoGrFqEADclUIJVMYufQeXqyKsWcuAKrloJKYpOTuxZoUvHcvhehpTKBEEqlYDTdhsRvCEvsTecTdqOcGkXyKRunUevXaDDLvzZcwxJjUEzqCWHTiWLpyFMIuKpOXpVzXFnlpszXqygtwPXelJGdJOFqfQhVYqJTPeZvGlTntrFvxmEofgOohjYpinkVrDFomyfQtmDeXYKeRejuoeNnwEPvfngwUxbXnRbAkHJGLucONVUspZONsqUDscnXasrStpBVOheHptBNPPsqjaCEssvXSJJVCxtxMSjOXUNqkcSOrOhopHMzfYeMZrrdiLvuKIbAIhPMHirZUbDZrAwaOFJXFzZLqbUqwuBKFNWruyZtnvDxVSUqBaEDWDbhUvRLeASYMAbCGSUNhMheEdDYvioCFvYalwIZFhQRkcFgPnYQSvvwpmZFLaKNneHYlGgolGJJcHdXZMPeSfMnUJbZwTToxqrjLbPkfNBTieOXQQTNKVYKeVgiBShJmgTiCfzqktYDUgFpnybJLwPWIbLCIyuJwzaKMaVCMxRMxMfYuJpcOlKkDJxfgzBBNSezsKZrTtxDLWWNbRShClGWvxjvfqdBJlkoEhQsIclqKSJWPACUFCpqVeIGAJhvUfMNjGdczxhaafxNMzPzLfQVGgqaBkVJKAWRNoztwPiwVPDLcAUPizKqqeaafBxnqOTTRyZHdjBGcUeMXtnAWKUrPCiyaWuMXvyRbjBHKUXuokwUgQxauhcECDkXtGjZCgthjxORJanqDnQcqXGDnCiPMKwdchVoZYgVqrqSkPjkNWzaRvMIsrxiKhOevhUcCi');
    var clear_3 = objectStore_5278.clear();
    txn_7962.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7962.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7962.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7963 = db.transaction(['objectStore_5278'], 'readonly', {durability:"strict"})
    var objectStore_5278 = txn_7963.objectStore('objectStore_5278');
    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('ATEennIWhxoMYpWknxcUigkWtvqeqREuHKhmDYnLsTqDhcpYVE', false);
        get_1 = objectStore_5278.get(KeyRange_12);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('DgPOdUREoGrFqEADclUIJVMYufQeXqyKsWcuAKrloJKYpOTuxZoUvHcvhehpTKBEEqlYDTdhsRvCEvsTecTdqOcGkXyKRunUevXaDDLvzZcwxJjUEzqCWHTiWLpyFMIuKpOXpVzXFnlpszXqygtwPXelJGdJOFqfQhVYqJTPeZvGlTntrFvxmEofgOohjYpinkVrDFomyfQtmDeXYKeRejuoeNnwEPvfngwUxbXnRbAkHJGLucONVUspZONsqUDscnXasrStpBVOheHptBNPPsqjaCEssvXSJJVCxtxMSjOXUNqkcSOrOhopHMzfYeMZrrdiLvuKIbAIhPMHirZUbDZrAwaOFJXFzZLqbUqwuBKFNWruyZtnvDxVSUqBaEDWDbhUvRLeASYMAbCGSUNhMheEdDYvioCFvYalwIZFhQRkcFgPnYQSvvwpmZFLaKNneHYlGgolGJJcHdXZMPeSfMnUJbZwTToxqrjLbPkfNBTieOXQQTNKVYKeVgiBShJmgTiCfzqktYDUgFpnybJLwPWIbLCIyuJwzaKMaVCMxRMxMfYuJpcOlKkDJxfgzBBNSezsKZrTtxDLWWNbRShClGWvxjvfqdBJlkoEhQsIclqKSJWPACUFCpqVeIGAJhvUfMNjGdczxhaafxNMzPzLfQVGgqaBkVJKAWRNoztwPiwVPDLcAUPizKqqeaafBxnqOTTRyZHdjBGcUeMXtnAWKUrPCiyaWuMXvyRbjBHKUXuokwUgQxauhcECDkXtGjZCgthjxORJanqDnQcqXGDnCiPMKwdchVoZYgVqrqSkPjkNWzaRvMIsrxiKhOevhUcCi', 'HMXcPDlbNBHhrTnHghxvsmnRkvwREMoBAgQyPrBdJNtowZQVZiOFJcLjjwPFrWGocvvAPBxcOizOCuiEuYXGAfEGpQmmzUZLlcoRDvPpsdmWgzSIAyJguHOJVGJNZunfPoXVTCzZTdQvYDDYvYpTyvptxTFigFyWtTcaqnTCwAKsTCVYHooVEVpffMPPZBoWQiqsfKwXwsfzMZPBfmyMlgkWYxlJhfxbzMLJZbDjqClDbGYBENkBNCuFXYbUPOcvMyVrLXCZVoePXHIwcLTibqPEZOpyrtyQmKCzuumFOUMLuMXCwaojHDQWjBKSVJHOrJbEroMSoRtJNGxIfHOBEiFrxyURkXRfxFGlVPCfZluSjUWPeMGabmOgEVgiNbKuOHFznMOclFiNCqwddUfTSZogbUASIYyxvmHLHPoXeueDYlxHlgLatyTTdYnpRUSbN', true, false);
        get_2 = objectStore_5278.get(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('ATEennIWhxoMYpWknxcUigkWtvqeqREuHKhmDYnLsTqDhcpYVE', 'BqJcwUjPIOOzUvkfkkxdGJVRGruwquThsajSYVDnFMGSwpcalBSPFQtUaEdXwoovgHXAPJaLhtIrrbjqxzkjcXMPuGESOHcVBsjfXwysmnysJVxnUeoHWUOQGYBajxrqOJceBudkZSRGZZdmIdORHlTxrDpfqrnxzYYCHJrDvJknjjZctvuWaBohAKGHvIdFsfrwqLVhwPDPFaGaFWNFqybPTharXdNukoLXASjiBvWAvPZEdZMKPnystYOkeillCzlGnxZICtEmXBHECxNKRPfvfuGfJLHZMcPtQUwjkArukyubSCjWSJkuAmDesHJAmdWEcCaTptHisrLxCsbxzryKRMcEjvNlSORCPsthktCJgMAllURJBoJQrtLlucWTntztHixXKYsCERUBgifLLzQBfXLuZzwSRHPtcmJoERdYIVlULRSnJnbKrtRYgiZXEpEXEihnLRBTgjuNvOmxpKyVpmNENprgUdpjaejSsJMhmPhPeoaRZohnaPAaXZAOOzreyVWIPXZjmMAdSnbWxdiYjwfovMHYJASzWFsrHwvmfVNpzNYddLJJaVKbghvqCxHfhKaHyodtUuDYwsvFpgQGLElDTQubzHxZpNtRZVbkoFWSeTlbjUFvCPvJcHhXyoymytKSjHYjycuPFwhOKOZVvTp', false, true);
        get_3 = objectStore_5278.get(KeyRange_16);
    }
    catch (e){
    }

    var count_7 = objectStore_5278.count();
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('FYLErxzvJhNyxZVQjiampDIHnAHqLG', false);
        get_4 = objectStore_5278.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_5 = objectStore_5278.getAll();
    var count_8 = objectStore_5278.count();
    var getAllKeys_2 = objectStore_5278.getAllKeys();
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('FYLErxzvJhNyxZVQjiampDIHnAHqLG', true);
        get_5 = objectStore_5278.get(KeyRange_20);
    }
    catch (e){
    }

    txn_7963.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7963.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7963.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7964 = db.transaction(['objectStore_5278'], 'readwrite', {durability:"default"})
    var objectStore_5278 = txn_7964.objectStore('objectStore_5278');
    var delete_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('ATEennIWhxoMYpWknxcUigkWtvqeqREuHKhmDYnLsTqDhcpYVE', 'ysVUBCAUnJhcbAVdHweGxorEXUlPyinsQnzgRIaNnKGZIaAOLvZEovxsAHXODZdJVzHtVdtJYtcdEPFZnhsGMwlIVwaEqqWlHCBXtXNNeYTSKTCYKnhmhbeYDImumwlKNozgzaiwmSRQQLMNVQoZWCSnMkQpYVbPwxPFcoqplLZtzwioGpVUApqSUWLfhekEfkspEdsdEXSouNLNmAcwjIvbHxDXcboUnraQQUdtqPAQvxoAferiZUkpFqfqtTkKJyQqatdVcJHxXDyloChZObkdcIFPWulUNxFaLFgHxUkIVUOxHZmRbaoExrWJjFDQVZHacTczEoMaXUDStrYHQlaBlWZozXHbcmsnQVabJqAVOsDSQoOUSgpNCXRjNledPiOAzNfmtSMWvyfvGJocyfcWAlFwlENIHSUDYsYjoVCxfvpXQuHhywNQEHulwjWwBwCxSNMGHUlrkeIBMgOOtJIkbsHWsuCkmkBLCnzVerirKrdHVSjuYZZYIrpkiXQrIIWwCPAtHEQpMKJaAnIhViciElJVCRKWuueSUamPFdaLiqWQxSwhgVsSvGOetVylPMxvUXxVoImqVYyXWLvxKOWHeZtpXLFKpRmyeJHZaNEfufiixVdjflGcBJESGJ', true, true);
        delete_1 = objectStore_5278.delete(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_24 = IDBKeyRange.only('FYLErxzvJhNyxZVQjiampDIHnAHqLG');
        getAllKeys_3 = objectStore_5278.getAllKeys(KeyRange_24, 3240533008);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('RAXOvEpUfTjfYZHbhvNEIGHTMuBjORRTNcNluHfuTQbUgDjgAvgiMFPdtsSFYtuyYkjYZjzQOYtSzeMmLlxXJBCMMowStnAVHmBXLLchprCkhEKlDQedUICBYeSMGnhQLhOgiwpRaHZSsgsnlXOevychmTvNpkLPGxLhMdhzNjEzMcgYUAnRGwgChGuFtcHtpEGMovcjamFfrkjxMIZkmWHcNcqJPtsbawRNbxXrrAFpTJyvijRZtWeUupWzjTAePeusBRyVllGAHIPMIFCS');
        getAllKeys_3 = objectStore_5278.getAllKeys(KeyRange_25);
    }

    var count_9 = objectStore_5278.count();
    var getAll_6 = objectStore_5278.getAll(863181764);
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.only('FYLErxzvJhNyxZVQjiampDIHnAHqLG');
        get_6 = objectStore_5278.get(KeyRange_26);
    }
    catch (e){
    }

    var add_4 = objectStore_5278.add({f0_b: '<array>', f1_p: '<null>', f2_x: '<array>', f3_o: '<boolean>', f4_m: '<boolean>', f5_q: '<object>', f6_a: '<string>', f7_p: '<object>', f8_o: '<number>', f9_h: '<boolean>'}, 'PhppCLBqLGDyKxYMBRODVlTndxHPaQeCxJhXbddnTndhMDqnLZHkMKvrXueLsdrxEhKsUcDyfGCWhPVlnhNqRZtSPtAkrWPIuBvFgcaSRNcgBckRpWAPKXSVhLwdRZQuQoPlXizUKAECQKvIALTObOdsLSKgMonjzvZbgrfansQtUrNyLGiGqNGXOYurgaukdnXAAxdlbUosfOdpBfEWgU');
    var clear_4 = objectStore_5278.clear();
    var add_5 = objectStore_5278.add({f0_f: '<boolean>', f1_a: '<number>'}, 'NpdvMIaDiDJEcbSkIETvagfGVwhQzmqVdYnmHIFjYscpwaHXsMDLYwegoakxZqqjWWkajRrGuqRcHGoMBoAoYypLHGtsHQJbeyjOwuCFLUcipYIjfPzuNcyBKMXLkDbcZEuKXQIpuloTgGSPrKfRhRTOfvgcsamHMARCOsNsRkWWrOVxsfixvqRvNQkZNNkZLGrVuuPwvTgMgFvorUsOxbJLoMFxcDcdvqgulIaYmkXXKGKjxfELSFglVFoVyfiaDTHUItJEfQEwPdDqFaKgEFeAwyOeWjkIwVsjzjMfNwSdvhxIxqIrvAMlOKVtUKdvgUSWNeCpbYRRcfHsZHtdkxSFlnOBiYWmDxLYPWgMTrATVuCYdbaluDaOMXlCKruHMYDIjNFqycwrNGwVwkZXohJSJgsuRDPSVUEsuATQjkapUmeAPKhGfOIohDfxBasbwdSqJoNCcDdfhNtABNguqCwsVISkRfnFTtmEatOpDKAVJMqeFhCXtJemHMVlGAuznmmovuCqwxWePzjpcrqwnSGcLOXBlDfDeXVuMYpmnAZDobPAsKVgtogUmHuAHCkbmXkhbzQEYbhKGxNakCTJOjCXedYyUSJHUFLPAZhKklXexXxSPcqosWCgzIzWTevlxTJhTJMCKfnGBQsQAfsdfEQiYDqqCmlFozdiBFgtOEERXEZvtwEekYdOru');
    var getAll_7 = objectStore_5278.getAll();
    var count_10;
    try{
        KeyRange_28 = IDBKeyRange.only('BqJcwUjPIOOzUvkfkkxdGJVRGruwquThsajSYVDnFMGSwpcalBSPFQtUaEdXwoovgHXAPJaLhtIrrbjqxzkjcXMPuGESOHcVBsjfXwysmnysJVxnUeoHWUOQGYBajxrqOJceBudkZSRGZZdmIdORHlTxrDpfqrnxzYYCHJrDvJknjjZctvuWaBohAKGHvIdFsfrwqLVhwPDPFaGaFWNFqybPTharXdNukoLXASjiBvWAvPZEdZMKPnystYOkeillCzlGnxZICtEmXBHECxNKRPfvfuGfJLHZMcPtQUwjkArukyubSCjWSJkuAmDesHJAmdWEcCaTptHisrLxCsbxzryKRMcEjvNlSORCPsthktCJgMAllURJBoJQrtLlucWTntztHixXKYsCERUBgifLLzQBfXLuZzwSRHPtcmJoERdYIVlULRSnJnbKrtRYgiZXEpEXEihnLRBTgjuNvOmxpKyVpmNENprgUdpjaejSsJMhmPhPeoaRZohnaPAaXZAOOzreyVWIPXZjmMAdSnbWxdiYjwfovMHYJASzWFsrHwvmfVNpzNYddLJJaVKbghvqCxHfhKaHyodtUuDYwsvFpgQGLElDTQubzHxZpNtRZVbkoFWSeTlbjUFvCPvJcHhXyoymytKSjHYjycuPFwhOKOZVvTp');
        count_10 = objectStore_5278.count(KeyRange_28);
    }
    catch (e){
    }

    var getAll_8 = objectStore_5278.getAll(2661867453);
    txn_7964.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7964.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7964.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9717')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};