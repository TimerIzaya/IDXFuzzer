let db;
const openRequest = window.indexedDB.open('str_90', 8268969990608858)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1501', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_1502', {keypath: 'oULTVFS'});
    var index_996 = objectStore_0.createIndex('index_996', 'test');
    var put_0 = objectStore_0.put({f0_y: '<string>', f1_h: '<boolean>'}, 'iTvvqmCvGzdISEplQRjfJNoZHMtQHDeVUfaJySwRRgiRhHSrlxEDZDgqqJNnUPPMcCKSMwjeKYQCMFeAaVwpHXWjvyzVXVoyrZpbghJpnqlDIElUqgQfbYjBbrcZSPwuizFCARVpPXLXJJobsMRIcmuVWFRxTFqeyXavbmxWoBypzhTzFZPJyBiakgjnhOzkJYPMHuChDmAMwYtgfUAFnZoxHePFMitLzzyWgSWxqETCMVmbmmDEcCbLoPXbubXkChldlbCceyCsCPVJLrpxwIbwThfYnfPiLzIOjcIqJTRwOPKzyMBEZJZEPeKYtygTSgTRMLERCwaJjVhLyowLjWDGxqejmHuAomuCenBToeLoVbpLCbCiDFoAUAZINCxUZnmnkYwsVuhcrSQVPAjCZnsbsXGFEvdvmjBOuTtZdSmTlkQDEIcwiCcxTAeBAAeAzkVYYkfOWFfQCRmhNlNesTCvQFxDVPVKfMHvNhzvSRnugpXbwldyfgUREEAuwtkMhrTHmInZpkGtANzTGDvmCBkwFxdSfIsdrHXnoicQbBtLruuofAkDAFYqEfGQubSKBOpbtcwOijbefXJOVSQdqoIJxOXJCZrCJwZFXrbVUjBVIBuJXEomcvHweGGZhwmxQGzidtfsBZOCvGimovXEMtyrMzRVGiydQziCTWgEpdSZxADLpeblXajwukPdbCDqTpjjnzNUVpgjHzWfxXUpZVwMtrZdYlKBvMgOwpvCcmcGjBAZmWhSUxRlOldVEvTSFLozxdrkMHUaSBNQTIUyuVIoszoDTpmEOnDFAPjhOXSjwSNcvDEBUyraLVsvUudTiiHOADnhtudefHIatMmiHsiiaOhhPbiJQUbeSTVmEfQQxYESBwYTChwthXPDGInVfFNfYOXTjqtHiPtUJcNxzYphGaKkzLCQHHoEfjmtZVSmqsxUxFndjRTRuNWXXJTzdGtJaLzbXECVRZ');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('iTvvqmCvGzdISEplQRjfJNoZHMtQHDeVUfaJySwRRgiRhHSrlxEDZDgqqJNnUPPMcCKSMwjeKYQCMFeAaVwpHXWjvyzVXVoyrZpbghJpnqlDIElUqgQfbYjBbrcZSPwuizFCARVpPXLXJJobsMRIcmuVWFRxTFqeyXavbmxWoBypzhTzFZPJyBiakgjnhOzkJYPMHuChDmAMwYtgfUAFnZoxHePFMitLzzyWgSWxqETCMVmbmmDEcCbLoPXbubXkChldlbCceyCsCPVJLrpxwIbwThfYnfPiLzIOjcIqJTRwOPKzyMBEZJZEPeKYtygTSgTRMLERCwaJjVhLyowLjWDGxqejmHuAomuCenBToeLoVbpLCbCiDFoAUAZINCxUZnmnkYwsVuhcrSQVPAjCZnsbsXGFEvdvmjBOuTtZdSmTlkQDEIcwiCcxTAeBAAeAzkVYYkfOWFfQCRmhNlNesTCvQFxDVPVKfMHvNhzvSRnugpXbwldyfgUREEAuwtkMhrTHmInZpkGtANzTGDvmCBkwFxdSfIsdrHXnoicQbBtLruuofAkDAFYqEfGQubSKBOpbtcwOijbefXJOVSQdqoIJxOXJCZrCJwZFXrbVUjBVIBuJXEomcvHweGGZhwmxQGzidtfsBZOCvGimovXEMtyrMzRVGiydQziCTWgEpdSZxADLpeblXajwukPdbCDqTpjjnzNUVpgjHzWfxXUpZVwMtrZdYlKBvMgOwpvCcmcGjBAZmWhSUxRlOldVEvTSFLozxdrkMHUaSBNQTIUyuVIoszoDTpmEOnDFAPjhOXSjwSNcvDEBUyraLVsvUudTiiHOADnhtudefHIatMmiHsiiaOhhPbiJQUbeSTVmEfQQxYESBwYTChwthXPDGInVfFNfYOXTjqtHiPtUJcNxzYphGaKkzLCQHHoEfjmtZVSmqsxUxFndjRTRuNWXXJTzdGtJaLzbXECVRZ', 'iTvvqmCvGzdISEplQRjfJNoZHMtQHDeVUfaJySwRRgiRhHSrlxEDZDgqqJNnUPPMcCKSMwjeKYQCMFeAaVwpHXWjvyzVXVoyrZpbghJpnqlDIElUqgQfbYjBbrcZSPwuizFCARVpPXLXJJobsMRIcmuVWFRxTFqeyXavbmxWoBypzhTzFZPJyBiakgjnhOzkJYPMHuChDmAMwYtgfUAFnZoxHePFMitLzzyWgSWxqETCMVmbmmDEcCbLoPXbubXkChldlbCceyCsCPVJLrpxwIbwThfYnfPiLzIOjcIqJTRwOPKzyMBEZJZEPeKYtygTSgTRMLERCwaJjVhLyowLjWDGxqejmHuAomuCenBToeLoVbpLCbCiDFoAUAZINCxUZnmnkYwsVuhcrSQVPAjCZnsbsXGFEvdvmjBOuTtZdSmTlkQDEIcwiCcxTAeBAAeAzkVYYkfOWFfQCRmhNlNesTCvQFxDVPVKfMHvNhzvSRnugpXbwldyfgUREEAuwtkMhrTHmInZpkGtANzTGDvmCBkwFxdSfIsdrHXnoicQbBtLruuofAkDAFYqEfGQubSKBOpbtcwOijbefXJOVSQdqoIJxOXJCZrCJwZFXrbVUjBVIBuJXEomcvHweGGZhwmxQGzidtfsBZOCvGimovXEMtyrMzRVGiydQziCTWgEpdSZxADLpeblXajwukPdbCDqTpjjnzNUVpgjHzWfxXUpZVwMtrZdYlKBvMgOwpvCcmcGjBAZmWhSUxRlOldVEvTSFLozxdrkMHUaSBNQTIUyuVIoszoDTpmEOnDFAPjhOXSjwSNcvDEBUyraLVsvUudTiiHOADnhtudefHIatMmiHsiiaOhhPbiJQUbeSTVmEfQQxYESBwYTChwthXPDGInVfFNfYOXTjqtHiPtUJcNxzYphGaKkzLCQHHoEfjmtZVSmqsxUxFndjRTRuNWXXJTzdGtJaLzbXECVRZ', true, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_0.add({f0_h: '<number>', f1_i: '<null>', f2_g: '<null>', f3_b: '<null>', f4_l: '<string>', f5_y: '<string>', f6_e: '<null>', f7_z: '<object>', f8_c: '<array>', f9_h: '<array>', f10_v: '<string>', f11_x: '<boolean>', f12_c: '<string>', f13_d: '<object>', f14_q: '<object>', f15_u: '<boolean>', f16_x: '<array>', f17_w: '<object>', f18_f: '<object>', f19_t: '<null>', f20_c: '<array>', f21_f: '<null>', f22_k: '<array>', f23_x: '<number>', f24_q: '<number>', f25_e: '<object>', f26_c: '<string>', f27_h: '<object>', f28_k: '<null>', f29_h: '<string>', f30_c: '<boolean>', f31_p: '<string>', f32_v: '<number>', f33_r: '<boolean>', f34_s: '<object>', f35_a: '<number>', f36_t: '<array>', f37_x: '<object>', f38_c: '<boolean>', f39_z: '<string>', f40_i: '<boolean>', f41_g: '<array>', f42_c: '<string>', f43_c: '<array>', f44_n: '<null>', f45_q: '<string>', f46_r: '<string>', f47_w: '<null>', f48_n: '<object>', f49_h: '<null>', f50_i: '<object>', f51_q: '<number>', f52_i: '<array>', f53_e: '<boolean>', f54_g: '<null>', f55_z: '<null>', f56_c: '<array>', f57_h: '<boolean>', f58_t: '<null>', f59_j: '<array>', f60_x: '<boolean>', f61_e: '<string>', f62_e: '<string>', f63_g: '<number>', f64_f: '<number>', f65_y: '<string>', f66_n: '<array>', f67_v: '<string>', f68_y: '<array>', f69_a: '<boolean>', f70_e: '<null>', f71_m: '<array>', f72_i: '<boolean>', f73_o: '<boolean>', f74_l: '<number>', f75_j: '<number>', f76_r: '<array>', f77_j: '<boolean>', f78_q: '<string>', f79_f: '<boolean>', f80_m: '<object>', f81_c: '<string>', f82_y: '<array>', f83_v: '<object>', f84_y: '<boolean>', f85_n: '<null>', f86_k: '<boolean>', f87_b: '<string>', f88_r: '<object>', f89_f: '<string>', f90_g: '<array>', f91_n: '<string>', f92_a: '<string>', f93_t: '<object>', f94_g: '<null>', f95_e: '<string>', f96_x: '<string>', f97_e: '<boolean>', f98_u: '<number>', f99_m: '<number>', f100_c: '<object>', f101_b: '<null>', f102_o: '<array>', f103_k: '<string>', f104_q: '<array>', f105_d: '<number>', f106_r: '<number>', f107_j: '<array>', f108_v: '<array>', f109_a: '<array>', f110_k: '<boolean>', f111_i: '<string>', f112_e: '<number>', f113_u: '<boolean>', f114_f: '<string>', f115_p: '<number>', f116_k: '<boolean>', f117_m: '<string>', f118_x: '<object>', f119_x: '<array>', f120_a: '<string>', f121_k: '<string>', f122_f: '<null>', f123_p: '<array>', f124_q: '<string>', f125_q: '<object>', f126_z: '<null>', f127_t: '<array>', f128_i: '<boolean>', f129_k: '<object>', f130_y: '<boolean>', f131_l: '<string>', f132_t: '<array>', f133_x: '<array>', f134_r: '<null>', f135_c: '<object>', f136_g: '<number>', f137_d: '<array>', f138_x: '<boolean>', f139_d: '<number>', f140_t: '<boolean>', f141_e: '<null>', f142_m: '<number>', f143_m: '<boolean>', f144_r: '<string>', f145_r: '<null>', f146_u: '<object>', f147_z: '<boolean>', f148_e: '<array>', f149_c: '<array>', f150_e: '<number>', f151_k: '<null>', f152_x: '<number>', f153_f: '<object>', f154_v: '<boolean>', f155_o: '<array>', f156_w: '<string>', f157_e: '<string>', f158_s: '<boolean>', f159_s: '<object>', f160_n: '<array>', f161_l: '<number>', f162_p: '<string>', f163_b: '<number>', f164_u: '<array>', f165_j: '<number>', f166_r: '<object>', f167_f: '<null>', f168_e: '<string>', f169_a: '<number>', f170_t: '<array>', f171_o: '<number>', f172_f: '<number>', f173_u: '<null>', f174_e: '<array>', f175_k: '<number>', f176_q: '<array>', f177_f: '<number>', f178_y: '<string>', f179_g: '<null>', f180_y: '<boolean>', f181_k: '<boolean>', f182_c: '<null>', f183_f: '<null>', f184_k: '<null>', f185_l: '<string>', f186_c: '<number>', f187_b: '<object>', f188_y: '<boolean>', f189_t: '<object>', f190_c: '<string>', f191_q: '<boolean>', f192_l: '<boolean>', f193_o: '<string>', f194_z: '<null>', f195_k: '<array>', f196_v: '<number>', f197_t: '<null>', f198_p: '<array>', f199_d: '<null>', f200_w: '<object>', f201_o: '<null>', f202_x: '<object>', f203_d: '<number>', f204_l: '<number>', f205_q: '<number>', f206_i: '<null>', f207_r: '<string>', f208_j: '<object>', f209_v: '<string>', f210_i: '<null>', f211_d: '<array>', f212_d: '<null>', f213_j: '<string>', f214_f: '<boolean>', f215_q: '<object>', f216_r: '<array>', f217_q: '<object>', f218_c: '<string>', f219_u: '<number>', f220_w: '<boolean>', f221_x: '<null>', f222_c: '<string>', f223_w: '<object>', f224_d: '<object>', f225_k: '<number>', f226_q: '<string>', f227_f: '<boolean>', f228_v: '<number>', f229_n: '<string>', f230_v: '<null>', f231_t: '<string>', f232_q: '<null>', f233_d: '<string>', f234_l: '<object>', f235_c: '<number>', f236_o: '<null>', f237_g: '<object>', f238_x: '<object>', f239_w: '<null>', f240_l: '<array>', f241_i: '<string>', f242_b: '<string>', f243_o: '<null>', f244_e: '<object>', f245_b: '<object>', f246_t: '<boolean>', f247_n: '<object>', f248_v: '<object>', f249_s: '<number>', f250_h: '<null>', f251_e: '<string>', f252_j: '<boolean>', f253_z: '<string>', f254_u: '<null>', f255_e: '<boolean>', f256_v: '<object>', f257_q: '<null>', f258_z: '<number>', f259_m: '<number>', f260_s: '<number>', f261_m: '<number>', f262_e: '<null>', f263_t: '<boolean>', f264_u: '<array>', f265_z: '<object>', f266_f: '<number>', f267_t: '<array>', f268_t: '<array>', f269_u: '<null>', f270_g: '<string>', f271_z: '<number>', f272_n: '<string>', f273_w: '<boolean>', f274_j: '<number>', f275_t: '<null>', f276_e: '<object>', f277_r: '<object>', f278_j: '<string>', f279_d: '<number>', f280_v: '<object>', f281_x: '<array>', f282_d: '<string>', f283_z: '<boolean>', f284_h: '<array>', f285_b: '<number>', f286_l: '<array>', f287_y: '<array>', f288_j: '<object>', f289_f: '<string>', f290_h: '<object>', f291_i: '<boolean>', f292_n: '<object>', f293_i: '<string>', f294_w: '<array>', f295_j: '<array>', f296_i: '<boolean>', f297_p: '<number>', f298_l: '<string>', f299_i: '<number>', f300_c: '<number>', f301_r: '<string>', f302_x: '<null>', f303_l: '<array>', f304_l: '<object>', f305_a: '<object>', f306_w: '<string>', f307_y: '<null>', f308_b: '<boolean>', f309_q: '<boolean>', f310_x: '<array>', f311_g: '<object>', f312_i: '<boolean>', f313_t: '<number>', f314_e: '<array>', f315_k: '<number>', f316_h: '<null>', f317_s: '<object>', f318_z: '<object>', f319_x: '<number>', f320_o: '<null>', f321_z: '<array>', f322_n: '<array>', f323_e: '<string>', f324_q: '<number>', f325_n: '<number>', f326_r: '<array>', f327_r: '<string>', f328_u: '<number>', f329_e: '<null>', f330_y: '<array>', f331_s: '<string>', f332_e: '<string>', f333_b: '<null>', f334_z: '<object>', f335_z: '<object>', f336_z: '<object>', f337_p: '<number>', f338_r: '<array>', f339_i: '<string>', f340_p: '<string>', f341_m: '<boolean>', f342_x: '<object>', f343_b: '<string>', f344_e: '<null>', f345_v: '<array>', f346_m: '<string>', f347_b: '<number>', f348_m: '<boolean>', f349_n: '<number>', f350_i: '<null>', f351_k: '<null>', f352_j: '<array>', f353_u: '<number>', f354_j: '<array>', f355_y: '<object>', f356_l: '<object>', f357_t: '<boolean>', f358_i: '<number>', f359_u: '<number>', f360_n: '<object>', f361_o: '<boolean>', f362_l: '<array>', f363_c: '<object>', f364_q: '<array>', f365_d: '<string>', f366_d: '<boolean>', f367_q: '<null>', f368_o: '<array>', f369_l: '<array>', f370_g: '<string>', f371_h: '<boolean>', f372_n: '<boolean>', f373_w: '<object>', f374_x: '<array>', f375_a: '<null>', f376_r: '<null>', f377_t: '<object>', f378_v: '<string>', f379_a: '<array>', f380_q: '<number>', f381_d: '<number>', f382_f: '<number>', f383_e: '<number>', f384_b: '<number>', f385_m: '<null>', f386_f: '<number>', f387_s: '<boolean>', f388_d: '<array>', f389_v: '<array>', f390_h: '<string>', f391_n: '<string>', f392_k: '<object>', f393_m: '<boolean>', f394_y: '<string>', f395_j: '<string>', f396_k: '<array>', f397_i: '<number>', f398_j: '<null>', f399_h: '<array>', f400_u: '<string>', f401_v: '<object>', f402_j: '<string>', f403_k: '<array>', f404_j: '<string>', f405_p: '<null>', f406_n: '<null>', f407_h: '<boolean>', f408_d: '<boolean>', f409_p: '<null>', f410_f: '<boolean>', f411_b: '<array>', f412_r: '<null>', f413_j: '<string>', f414_c: '<object>', f415_m: '<number>', f416_k: '<boolean>', f417_l: '<object>', f418_u: '<string>', f419_k: '<null>', f420_w: '<string>', f421_g: '<null>', f422_o: '<number>', f423_d: '<null>', f424_s: '<null>', f425_i: '<array>', f426_p: '<number>', f427_s: '<null>', f428_l: '<null>', f429_v: '<number>', f430_x: '<object>', f431_d: '<array>', f432_a: '<number>', f433_z: '<object>', f434_c: '<object>', f435_k: '<null>', f436_d: '<array>', f437_h: '<boolean>', f438_r: '<boolean>', f439_v: '<object>', f440_o: '<array>', f441_m: '<array>', f442_u: '<array>', f443_f: '<number>', f444_c: '<array>', f445_o: '<object>', f446_y: '<number>', f447_q: '<string>', f448_d: '<object>', f449_y: '<null>', f450_r: '<array>', f451_a: '<null>', f452_k: '<object>', f453_n: '<object>', f454_r: '<number>', f455_s: '<null>', f456_g: '<number>', f457_n: '<null>', f458_t: '<array>', f459_t: '<boolean>', f460_c: '<boolean>', f461_g: '<string>', f462_u: '<boolean>', f463_p: '<object>', f464_o: '<boolean>', f465_c: '<array>', f466_a: '<string>', f467_f: '<number>', f468_g: '<null>', f469_c: '<null>', f470_h: '<null>', f471_s: '<array>', f472_d: '<number>', f473_o: '<string>', f474_o: '<number>', f475_s: '<boolean>', f476_b: '<array>', f477_u: '<boolean>', f478_a: '<number>', f479_s: '<null>', f480_n: '<boolean>', f481_s: '<array>', f482_q: '<number>', f483_o: '<boolean>', f484_i: '<object>', f485_c: '<null>', f486_y: '<boolean>', f487_t: '<boolean>'}, 'lyiYRtwgaSwIYwQJEiCWcpzcPsRmPkSRgdWrjhNcPZIoWhrnLPfWMSDMJvvvvfOMTjtPDGaiOpRztCCxDGXofWJCzREjLPxATNxdCuVOBQLAuBohpLIxvtiabsFxaTycmcKkidWRqymPvntQelpseTPqbcnZIBBPiAVayuxSvzdjcUrBQlJlIDncYUFofZjALGrzWmvgPUPDpLIokbpDSNqyhEcqTCwGyqPtBdyCcNwzJJsgKjrTwNEgGnFqMulbXfskidkHUMqnvyGkajCVczufPFzaiLNhzVheEbAVAANEifeiiJtTbLWiqyyYDlCvVYLCjqZIUgvRXmbHZMjqtRIKpfmoWGFTkydmmQsSGWWaUKYziAQFhLnhgRjgUXNSjEndSPcnhrfjVVMbQvLZNhHwCSeExUuqFBNQmLeLuZzBkqxBFZMdlVbZbDtuTVPFMhVUetWLEKrSXuXZqoBYOMLCvMRBSTMRGavkgKZnboNkYMfktpbxCWKnHtDfVZmaxtIfkRktYXFJQZt');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_1503', {keypath: 'HHGmVIgcLIpWevaiHGueJWICODnFdKryhJwBmHlXTUxnNKaqmaaZQmmpDhcqsPZXqKPWdoqGKADUDHirPWydmeXDbtFePHzikGeTIPeBHjajSTzJPhgqqhlRHxTFWanAyFZdnwOCgBoPKbxFrzItOcAnrtblnKLfDDpEDNbiTbAQgicWKxDMkBSvZqJyYCLJEudBciuqBcmwBOoEARaSNIFXLKMBYGhHZkKdaVjaSjfRrspkzhFyAHRGjhPkocXYESCYmQwGJTyBJJnVorNtmTtVHHopjOlJpBhMwfLehzEPILXsywVTVYvQsUMeJOnFZUhqKEsAonowwFQxPVflWKtmrJQfWLKTRgXvIvoxMbWBizUhSYJLduORfTKDBSbpDxIdgqdfJOeugvfTAynPZaKGYJtCGLkZPHTKUEkyeEdLeLNIXCbCyhOxYlgNHKThhTFKWHJhbCOCUNokcgCvAWkPKntOIZXOnUzhhyhGSZKu', autoIncrement: true});
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('lyiYRtwgaSwIYwQJEiCWcpzcPsRmPkSRgdWrjhNcPZIoWhrnLPfWMSDMJvvvvfOMTjtPDGaiOpRztCCxDGXofWJCzREjLPxATNxdCuVOBQLAuBohpLIxvtiabsFxaTycmcKkidWRqymPvntQelpseTPqbcnZIBBPiAVayuxSvzdjcUrBQlJlIDncYUFofZjALGrzWmvgPUPDpLIokbpDSNqyhEcqTCwGyqPtBdyCcNwzJJsgKjrTwNEgGnFqMulbXfskidkHUMqnvyGkajCVczufPFzaiLNhzVheEbAVAANEifeiiJtTbLWiqyyYDlCvVYLCjqZIUgvRXmbHZMjqtRIKpfmoWGFTkydmmQsSGWWaUKYziAQFhLnhgRjgUXNSjEndSPcnhrfjVVMbQvLZNhHwCSeExUuqFBNQmLeLuZzBkqxBFZMdlVbZbDtuTVPFMhVUetWLEKrSXuXZqoBYOMLCvMRBSTMRGavkgKZnboNkYMfktpbxCWKnHtDfVZmaxtIfkRktYXFJQZt', false);
        getAll_0 = objectStore_0.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('lyiYRtwgaSwIYwQJEiCWcpzcPsRmPkSRgdWrjhNcPZIoWhrnLPfWMSDMJvvvvfOMTjtPDGaiOpRztCCxDGXofWJCzREjLPxATNxdCuVOBQLAuBohpLIxvtiabsFxaTycmcKkidWRqymPvntQelpseTPqbcnZIBBPiAVayuxSvzdjcUrBQlJlIDncYUFofZjALGrzWmvgPUPDpLIokbpDSNqyhEcqTCwGyqPtBdyCcNwzJJsgKjrTwNEgGnFqMulbXfskidkHUMqnvyGkajCVczufPFzaiLNhzVheEbAVAANEifeiiJtTbLWiqyyYDlCvVYLCjqZIUgvRXmbHZMjqtRIKpfmoWGFTkydmmQsSGWWaUKYziAQFhLnhgRjgUXNSjEndSPcnhrfjVVMbQvLZNhHwCSeExUuqFBNQmLeLuZzBkqxBFZMdlVbZbDtuTVPFMhVUetWLEKrSXuXZqoBYOMLCvMRBSTMRGavkgKZnboNkYMfktpbxCWKnHtDfVZmaxtIfkRktYXFJQZt');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var add_1 = objectStore_2.add({f0_t: '<number>', f1_q: '<object>', f2_l: '<null>', f3_k: '<number>', f4_h: '<array>', f5_u: '<string>', f6_e: '<object>', f7_c: '<boolean>', f8_s: '<object>'}, 'ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
    var add_2 = objectStore_0.add({f0_w: '<boolean>', f1_b: '<number>', f2_z: '<null>', f3_n: '<array>', f4_x: '<boolean>', f5_i: '<object>', f6_r: '<null>'}, 'hxoaNgDTqFsCpgnVymJENXRJdMnfSEwKmkMNeHIMzavImOdlbJxRafwDBBECLVahOvaGAZTCgcrExjTjqjlzhqHlmpFZvGEFuPUEYtjfHnnrqSNoxVJibXwQfvkQjeiTQBxHFJJnyNJanSSvuaBFODEorIkUHZTPUjmsUkAcYTbWipifKXXCJCtbPfAaOVbhAliqjeUSADwHoPlZyhmFXAGTZMHsCCeFTvVwACZvhjUNgOvDkdgfprPhwyztxmIkEqfTsWekNJPIUMnhxpzaRInrWJZBcInJlZDsMXkvjuAroKHWhFOvZbQmoxNmAKwZZPdygpfrPvASIMDbEzEHsNNlAVCbhtCWMbjMsmZRSwdIBnkHtLwZrRDvfxzCtqyBAKtYjBozsjpeFfhLGSgYSuwlrleaWaXQhxXIAJESGDpRWrtdiPibQKoLHaaGheNeYlZigFWmXbwcIAosxoqpofCDEifHCqDznnqYWEHqjeKAucYogNDNoDQiDXQCXerDEOwKdzfrgvePaXKQBRNgFOPmKkDhKohTkPVsvZiPOeedZIkscXTxJaRkPvjfrKjyHmtcSKGSZOJzhLMJjySszXeOHmAhHCeAvMRObJcGdchsSpmCGjBsajddkuEgsLgYdcYwLGLstYwPXulKduuhfGIznCdlzgkpggAozMiRNGgXuBhPYuXhpXMdbOvANoWjrffFFBuqvxMaGMWLpIoRhoEVnrGkwagQWvhyhKkjsVBgIPSuMvLdhHrMqaIHKGlOTdsYvleqPbAVjKGklCISiJNfsKyoIbehrwCpOAgwDZwngEkykdrXLugGnqBEoWucZjSCcOSabzYBjTqIYskSNslzptlOyeorIgRsQcvYMlbdxJwOMTcpZliM');
    var index_997 = objectStore_1.createIndex('index_997', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2240 = db.transaction(['objectStore_1502'], 'readonly', {durability:"strict"})
    var objectStore_1502 = txn_2240.objectStore('objectStore_1502');
    var index_0 = objectStore_1502.index('index_997');
    txn_2240.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2240.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2240.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2241 = db.transaction(['objectStore_1503'], 'readonly', {durability:"relaxed"})
    var objectStore_1503 = txn_2241.objectStore('objectStore_1503');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        get_0 = objectStore_1503.get(KeyRange_4);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        getAllKeys_0 = objectStore_1503.getAllKeys(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        getAllKeys_0 = objectStore_1503.getAllKeys(KeyRange_7);
    }

    var getAllKeys_1 = objectStore_1503.getAllKeys();
    var count_1 = objectStore_1503.count();
    var count_2 = objectStore_1503.count();
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', false);
        get_1 = objectStore_1503.get(KeyRange_8);
    }
    catch (e){
    }

    var count_3 = objectStore_1503.count();
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', 'ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', false, true);
        get_2 = objectStore_1503.get(KeyRange_10);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.bound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', 'ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', false, true);
        count_4 = objectStore_1503.count(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', true);
        get_3 = objectStore_1503.get(KeyRange_14);
    }
    catch (e){
    }

    txn_2241.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2241.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2241.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2242 = db.transaction(['objectStore_1502'], 'readonly', {durability:"strict"})
    var objectStore_1502 = txn_2242.objectStore('objectStore_1502');
    txn_2242.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2242.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2242.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2243 = db.transaction(['objectStore_1501', 'objectStore_1503'], 'readonly', {durability:"strict"})
    var objectStore_1503 = txn_2243.objectStore('objectStore_1503');
    var getAll_1 = objectStore_1503.getAll();
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', true);
        get_4 = objectStore_1503.get(KeyRange_16);
    }
    catch (e){
    }

    var count_5 = objectStore_1503.count();
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        get_5 = objectStore_1503.get(KeyRange_18);
    }
    catch (e){
    }

    var count_6 = objectStore_1503.count();
    var count_7 = objectStore_1503.count();
    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.bound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', 'ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', true, false);
        count_8 = objectStore_1503.count(KeyRange_20);
    }
    catch (e){
    }

    var getAll_2 = objectStore_1503.getAll(1534210642);
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', true);
        get_6 = objectStore_1503.get(KeyRange_22);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_24 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        get_7 = objectStore_1503.get(KeyRange_24);
    }
    catch (e){
    }

    txn_2243.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2243.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2243.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2244 = db.transaction(['objectStore_1503'], 'readonly', {durability:"default"})
    var objectStore_1503 = txn_2244.objectStore('objectStore_1503');
    var getAllKeys_2 = objectStore_1503.getAllKeys();
    var count_9 = objectStore_1503.count();
    var count_10;
    try{
        KeyRange_26 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        count_10 = objectStore_1503.count(KeyRange_26);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.only('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk');
        get_8 = objectStore_1503.get(KeyRange_28);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_1503.getAllKeys(2407313455);
    var count_11 = objectStore_1503.count();
    var getAllKeys_4 = objectStore_1503.getAllKeys(4139543314);
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.bound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', 'ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', true, false);
        get_9 = objectStore_1503.get(KeyRange_30);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('ZkUICbyMNNlHwPSmOBWNyNaQmPKZgoYXBpjQnPofAEkNmjVycUwFPmJQWeZyaeSAwbtFteUgokiDloNTOEHoIsBAEwqlUzlJQOk', false);
        get_10 = objectStore_1503.get(KeyRange_32);
    }
    catch (e){
    }

    txn_2244.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2244.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2244.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_740')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};