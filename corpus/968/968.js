let db;
const openRequest = window.indexedDB.open('str_3573', 4149996174392696)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5748', {autoIncrement: false});
    var index_3829 = objectStore_0.createIndex('index_3829', 'test');
    var index_3830 = objectStore_0.createIndex('index_3830', 'test', {unique: true, multiEntry: false});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_5749', {autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_5750');
    db.deleteObjectStore('objectStore_5750')
    var put_0 = objectStore_1.put({f0_h: '<array>', f1_e: '<string>', f2_v: '<number>', f3_z: '<number>', f4_p: '<object>', f5_y: '<array>', f6_l: '<number>', f7_n: '<object>', f8_v: '<string>', f9_h: '<array>', f10_j: '<null>', f11_h: '<boolean>', f12_f: '<null>', f13_e: '<null>', f14_p: '<number>', f15_n: '<number>', f16_o: '<number>', f17_l: '<array>', f18_h: '<array>', f19_b: '<number>', f20_f: '<object>', f21_t: '<string>', f22_b: '<null>', f23_v: '<number>', f24_d: '<null>', f25_v: '<array>', f26_s: '<array>', f27_l: '<object>', f28_g: '<object>', f29_t: '<null>', f30_c: '<boolean>', f31_a: '<array>', f32_c: '<null>', f33_m: '<object>', f34_z: '<array>', f35_i: '<null>', f36_z: '<boolean>', f37_l: '<boolean>', f38_x: '<string>', f39_j: '<boolean>', f40_d: '<boolean>', f41_k: '<number>', f42_s: '<number>', f43_o: '<boolean>', f44_z: '<number>', f45_t: '<object>', f46_a: '<string>', f47_g: '<string>', f48_q: '<object>', f49_b: '<string>', f50_w: '<null>', f51_k: '<string>', f52_q: '<object>', f53_f: '<array>', f54_n: '<object>', f55_k: '<boolean>', f56_w: '<boolean>', f57_g: '<number>', f58_z: '<object>', f59_p: '<string>', f60_b: '<string>', f61_i: '<number>', f62_v: '<array>', f63_k: '<boolean>', f64_x: '<boolean>', f65_v: '<null>', f66_g: '<array>', f67_u: '<null>', f68_t: '<string>', f69_s: '<null>', f70_w: '<object>', f71_c: '<array>', f72_d: '<array>', f73_y: '<null>', f74_i: '<object>', f75_s: '<number>', f76_m: '<boolean>', f77_p: '<number>', f78_f: '<boolean>', f79_j: '<string>', f80_h: '<object>', f81_h: '<object>', f82_x: '<null>', f83_j: '<boolean>', f84_n: '<null>', f85_l: '<null>', f86_y: '<boolean>', f87_v: '<string>', f88_d: '<boolean>', f89_a: '<object>', f90_h: '<boolean>', f91_r: '<null>', f92_a: '<object>', f93_i: '<number>', f94_o: '<boolean>', f95_x: '<number>', f96_b: '<number>', f97_o: '<string>', f98_q: '<number>', f99_s: '<string>', f100_z: '<boolean>', f101_z: '<string>', f102_f: '<boolean>', f103_e: '<object>', f104_l: '<number>', f105_o: '<object>', f106_q: '<object>', f107_w: '<string>', f108_l: '<string>', f109_t: '<number>', f110_r: '<string>', f111_q: '<string>', f112_c: '<null>', f113_e: '<null>', f114_c: '<boolean>', f115_w: '<string>', f116_w: '<number>', f117_x: '<string>', f118_x: '<array>', f119_b: '<string>', f120_r: '<string>', f121_d: '<null>', f122_j: '<string>', f123_n: '<number>', f124_y: '<string>', f125_z: '<object>', f126_f: '<object>', f127_q: '<null>', f128_a: '<object>', f129_p: '<boolean>', f130_c: '<object>', f131_f: '<boolean>', f132_i: '<number>', f133_v: '<string>', f134_p: '<object>', f135_d: '<boolean>', f136_p: '<string>', f137_s: '<null>', f138_x: '<number>', f139_h: '<number>', f140_o: '<object>', f141_w: '<boolean>', f142_w: '<boolean>', f143_t: '<boolean>', f144_i: '<array>', f145_n: '<number>', f146_f: '<boolean>', f147_p: '<null>', f148_o: '<array>', f149_o: '<array>', f150_l: '<number>', f151_t: '<null>', f152_g: '<array>', f153_o: '<boolean>', f154_x: '<array>', f155_q: '<string>', f156_n: '<null>', f157_x: '<array>', f158_z: '<null>', f159_f: '<string>', f160_w: '<number>', f161_g: '<string>', f162_a: '<null>', f163_u: '<object>', f164_l: '<object>', f165_t: '<string>', f166_j: '<null>', f167_q: '<null>', f168_i: '<array>', f169_l: '<array>', f170_h: '<array>', f171_i: '<array>', f172_p: '<number>', f173_s: '<null>', f174_l: '<number>', f175_t: '<number>', f176_c: '<number>', f177_s: '<boolean>', f178_r: '<null>', f179_b: '<object>', f180_s: '<object>', f181_s: '<object>', f182_g: '<null>', f183_a: '<string>', f184_z: '<boolean>', f185_a: '<object>', f186_r: '<null>', f187_k: '<number>', f188_m: '<string>', f189_k: '<object>', f190_u: '<string>', f191_x: '<null>', f192_j: '<null>', f193_y: '<number>', f194_p: '<string>', f195_w: '<array>', f196_r: '<null>', f197_z: '<number>', f198_g: '<object>', f199_b: '<null>', f200_h: '<object>', f201_v: '<number>', f202_p: '<number>', f203_t: '<boolean>', f204_i: '<string>', f205_y: '<array>', f206_p: '<boolean>', f207_i: '<object>', f208_e: '<number>', f209_o: '<null>', f210_n: '<null>', f211_t: '<boolean>', f212_z: '<number>', f213_m: '<number>', f214_l: '<object>', f215_x: '<null>', f216_y: '<array>', f217_c: '<array>', f218_v: '<string>', f219_m: '<boolean>', f220_f: '<object>', f221_t: '<null>', f222_h: '<null>', f223_y: '<object>', f224_r: '<string>', f225_n: '<string>', f226_y: '<number>', f227_t: '<null>', f228_j: '<string>', f229_y: '<array>', f230_p: '<array>', f231_t: '<number>', f232_b: '<boolean>', f233_v: '<boolean>', f234_j: '<number>', f235_e: '<string>', f236_o: '<null>', f237_j: '<array>', f238_q: '<boolean>', f239_v: '<array>', f240_a: '<object>', f241_y: '<number>', f242_a: '<boolean>', f243_y: '<string>', f244_q: '<null>', f245_e: '<array>', f246_a: '<object>', f247_c: '<number>', f248_k: '<object>', f249_z: '<array>', f250_p: '<string>', f251_s: '<number>', f252_u: '<string>', f253_i: '<array>', f254_k: '<number>', f255_v: '<object>', f256_u: '<object>', f257_i: '<array>', f258_v: '<string>', f259_o: '<object>', f260_x: '<string>', f261_f: '<object>', f262_q: '<array>', f263_w: '<boolean>', f264_r: '<boolean>', f265_d: '<null>', f266_u: '<string>', f267_u: '<boolean>', f268_f: '<boolean>', f269_s: '<null>', f270_i: '<number>', f271_u: '<array>', f272_w: '<object>', f273_g: '<number>', f274_r: '<boolean>', f275_i: '<array>', f276_h: '<boolean>', f277_j: '<object>', f278_e: '<number>', f279_r: '<string>', f280_v: '<array>', f281_h: '<array>', f282_p: '<string>'}, 'nzmCHVHAvUFAVhHFfOwyBqfKpuVngxzMFIMpKWSnBwScnwoZZAcBeTPmuWliULpfmEzZXwPoEzFbwDyDZgvvAaKiYwaZzWPocUOHokgrTDqoNWPrvJlceWLANxNMYeyCDIfsBnUegybsrXRLgTnKPgZDkOkzaDUadHbgwINdMgYzXJvGoGiIGprunxQeubZiBLzFzkonFKeDzbFcNRmYnWywbuVgVjBuCTlNJmTOrLJyPkifPSvUDJpqUdggTKwThWnGewqKfmorqgzrkMkeouXKRPWobOscGBBCaMWAKsgcHFhwAErQJDPnvXXfohXmTiHGtoLJyatfHwgPBCbvtEGOmUSSbArUsWvgyVoIEuBorpEYXASgcrEYoFXiZEEorxbgLiJIZyGBcopyeUhcDwqrzVBwvcGRzrIchoVObYBvOpvQtZFuIPJplXIzjolIOlUOTdsDAExLQNichNfjRKqyFjPlzRlbofxjQFsAdLCjdSEnFxYRCVisjMXatygiHjoNoIEzswLfiIthEKoHcFutJAynaDgtDrSmqsShYIFdElIYGwYjgnJeTQlXvbFadbAarSUWenJGwWCHyInAZBexxatIuYVjvcYdFzhghVdfmXobSIXoIUhlkaHqwJtxLYfkLZNHuJSbTNNyTSxtYKumMePGCferACVWSpNiiutoKNfDbyVIPxmeOoWWHHzmhnHgIayDfSWjRsAilpwkmjORMhOaZZLQHDgrcYVqSAgkewYjViZXxJCCUkIBNZJAwOHCuDRJUIJleiDqhehXHOKdNtsJBfMImstoBSfzckisYmOJRBkJmqLhWijltariFvRvYzGMLlPYLlxrZknymxyAr');
    var index_3831 = objectStore_0.createIndex('index_3831', 'test', {multiEntry: false});
    var getAllKeys_0 = objectStore_1.getAllKeys();
    var put_1 = objectStore_1.put({f0_x: '<boolean>', f1_x: '<number>', f2_g: '<boolean>', f3_n: '<array>', f4_f: '<object>', f5_v: '<array>', f6_j: '<boolean>', f7_w: '<object>', f8_n: '<boolean>', f9_b: '<string>', f10_a: '<array>', f11_x: '<boolean>', f12_z: '<null>', f13_l: '<number>', f14_w: '<array>', f15_i: '<number>', f16_a: '<boolean>', f17_w: '<boolean>', f18_r: '<string>', f19_q: '<object>', f20_n: '<string>', f21_g: '<object>', f22_w: '<number>', f23_n: '<number>', f24_w: '<string>', f25_d: '<null>', f26_k: '<array>', f27_a: '<array>', f28_b: '<object>', f29_r: '<object>', f30_r: '<array>', f31_n: '<boolean>', f32_s: '<object>', f33_j: '<array>', f34_f: '<boolean>', f35_m: '<string>', f36_z: '<number>', f37_a: '<object>', f38_d: '<boolean>', f39_y: '<string>', f40_p: '<null>', f41_i: '<object>', f42_l: '<null>', f43_b: '<array>', f44_i: '<string>', f45_c: '<object>', f46_c: '<number>', f47_n: '<null>', f48_w: '<boolean>', f49_r: '<number>', f50_y: '<null>', f51_a: '<null>', f52_r: '<boolean>', f53_t: '<number>', f54_t: '<object>', f55_f: '<array>', f56_e: '<object>', f57_w: '<number>', f58_h: '<null>', f59_o: '<number>', f60_r: '<boolean>', f61_i: '<boolean>', f62_m: '<array>', f63_f: '<object>', f64_a: '<null>', f65_o: '<number>', f66_j: '<array>', f67_s: '<number>', f68_i: '<array>', f69_r: '<array>', f70_j: '<object>', f71_y: '<string>', f72_k: '<number>', f73_n: '<number>', f74_b: '<string>', f75_n: '<null>', f76_o: '<string>', f77_k: '<number>', f78_f: '<boolean>', f79_o: '<object>', f80_t: '<number>', f81_e: '<string>', f82_e: '<number>', f83_i: '<string>', f84_b: '<number>', f85_t: '<null>', f86_z: '<null>', f87_r: '<boolean>', f88_l: '<string>', f89_o: '<object>', f90_v: '<number>', f91_v: '<string>', f92_h: '<boolean>', f93_q: '<null>', f94_g: '<array>', f95_g: '<string>', f96_i: '<array>', f97_t: '<null>', f98_e: '<string>', f99_a: '<string>', f100_m: '<string>', f101_g: '<null>', f102_z: '<number>', f103_u: '<boolean>', f104_b: '<boolean>', f105_m: '<null>', f106_x: '<string>', f107_d: '<number>', f108_v: '<null>', f109_l: '<boolean>', f110_w: '<number>', f111_s: '<string>', f112_a: '<boolean>', f113_y: '<string>', f114_n: '<object>', f115_o: '<string>', f116_o: '<object>', f117_y: '<boolean>', f118_m: '<number>', f119_s: '<object>', f120_s: '<number>', f121_w: '<array>', f122_k: '<null>', f123_x: '<array>', f124_x: '<number>', f125_m: '<object>', f126_w: '<number>', f127_r: '<null>', f128_y: '<array>', f129_w: '<object>', f130_t: '<object>', f131_l: '<boolean>', f132_m: '<array>', f133_q: '<number>', f134_s: '<object>', f135_a: '<boolean>', f136_k: '<array>', f137_x: '<null>', f138_g: '<number>', f139_p: '<array>', f140_s: '<string>', f141_u: '<null>', f142_n: '<string>', f143_e: '<null>', f144_j: '<array>', f145_b: '<string>', f146_s: '<boolean>', f147_o: '<null>', f148_m: '<object>', f149_k: '<string>', f150_l: '<boolean>', f151_k: '<array>', f152_w: '<number>', f153_v: '<array>', f154_h: '<number>', f155_o: '<boolean>', f156_f: '<number>', f157_q: '<number>', f158_b: '<array>', f159_a: '<null>', f160_r: '<null>', f161_d: '<string>', f162_g: '<string>', f163_u: '<number>', f164_l: '<null>', f165_z: '<number>', f166_h: '<string>', f167_f: '<array>', f168_s: '<number>', f169_t: '<boolean>', f170_a: '<array>', f171_j: '<string>', f172_m: '<null>', f173_n: '<array>', f174_a: '<boolean>', f175_v: '<string>', f176_i: '<string>', f177_b: '<null>', f178_c: '<null>', f179_o: '<boolean>', f180_s: '<array>', f181_i: '<array>', f182_s: '<object>', f183_a: '<null>', f184_o: '<null>', f185_v: '<number>', f186_m: '<array>', f187_v: '<null>', f188_o: '<boolean>', f189_g: '<boolean>', f190_v: '<null>', f191_m: '<null>', f192_u: '<object>', f193_p: '<string>', f194_z: '<object>', f195_f: '<string>', f196_d: '<string>', f197_y: '<string>', f198_x: '<object>', f199_l: '<array>', f200_r: '<array>', f201_c: '<array>', f202_b: '<object>', f203_a: '<null>', f204_f: '<object>', f205_i: '<boolean>', f206_e: '<object>', f207_h: '<array>', f208_r: '<boolean>', f209_y: '<array>', f210_q: '<string>', f211_g: '<array>', f212_d: '<number>', f213_m: '<array>', f214_o: '<number>', f215_c: '<boolean>', f216_x: '<boolean>', f217_q: '<object>', f218_c: '<null>', f219_c: '<null>', f220_i: '<string>', f221_t: '<number>', f222_o: '<number>', f223_l: '<string>', f224_l: '<null>', f225_j: '<array>', f226_a: '<object>', f227_t: '<string>', f228_x: '<null>', f229_e: '<array>', f230_c: '<string>', f231_w: '<number>', f232_k: '<null>', f233_i: '<string>', f234_x: '<array>', f235_t: '<null>', f236_u: '<object>', f237_j: '<string>', f238_l: '<number>', f239_t: '<object>', f240_g: '<array>', f241_f: '<array>', f242_t: '<number>', f243_f: '<object>', f244_p: '<string>', f245_f: '<null>', f246_i: '<number>', f247_y: '<number>', f248_e: '<null>', f249_c: '<object>', f250_r: '<array>', f251_a: '<number>', f252_i: '<boolean>', f253_y: '<boolean>', f254_g: '<boolean>', f255_p: '<boolean>', f256_n: '<array>', f257_i: '<object>', f258_b: '<null>', f259_f: '<array>', f260_o: '<array>', f261_f: '<string>', f262_k: '<null>', f263_w: '<null>', f264_g: '<array>', f265_s: '<number>', f266_h: '<array>', f267_s: '<boolean>', f268_l: '<number>', f269_h: '<string>', f270_h: '<null>', f271_u: '<number>', f272_t: '<boolean>', f273_u: '<string>', f274_y: '<boolean>', f275_n: '<object>', f276_n: '<array>', f277_r: '<boolean>', f278_i: '<array>', f279_z: '<number>', f280_d: '<object>', f281_q: '<null>', f282_v: '<null>', f283_x: '<number>', f284_n: '<object>', f285_c: '<array>', f286_o: '<null>', f287_l: '<object>', f288_n: '<string>', f289_n: '<string>', f290_g: '<object>', f291_z: '<array>', f292_c: '<array>', f293_f: '<null>', f294_n: '<boolean>', f295_f: '<array>', f296_i: '<number>', f297_b: '<string>', f298_l: '<string>', f299_u: '<array>', f300_e: '<string>', f301_k: '<null>', f302_t: '<null>', f303_r: '<array>', f304_s: '<null>', f305_z: '<object>', f306_w: '<boolean>', f307_o: '<object>', f308_g: '<string>', f309_u: '<string>', f310_b: '<object>', f311_u: '<object>', f312_n: '<string>', f313_t: '<number>', f314_r: '<string>', f315_d: '<string>', f316_h: '<array>', f317_l: '<object>', f318_l: '<object>', f319_u: '<array>', f320_t: '<string>', f321_f: '<string>', f322_k: '<object>', f323_d: '<string>', f324_q: '<array>', f325_s: '<string>', f326_n: '<object>', f327_m: '<object>', f328_c: '<array>', f329_u: '<boolean>', f330_y: '<object>', f331_s: '<string>', f332_u: '<string>', f333_z: '<boolean>', f334_v: '<array>', f335_n: '<string>', f336_t: '<number>', f337_q: '<array>', f338_a: '<object>', f339_b: '<array>', f340_d: '<array>', f341_z: '<object>', f342_o: '<object>', f343_k: '<string>', f344_g: '<object>', f345_u: '<number>', f346_r: '<string>', f347_t: '<object>', f348_z: '<array>', f349_u: '<array>', f350_r: '<number>', f351_k: '<object>', f352_v: '<object>', f353_h: '<string>', f354_f: '<string>', f355_r: '<object>', f356_a: '<boolean>', f357_l: '<string>', f358_a: '<null>', f359_s: '<object>', f360_u: '<array>', f361_v: '<string>', f362_g: '<array>', f363_r: '<null>', f364_y: '<number>', f365_i: '<array>', f366_a: '<object>', f367_h: '<array>', f368_q: '<object>', f369_h: '<string>', f370_l: '<array>', f371_h: '<string>', f372_k: '<null>', f373_e: '<boolean>', f374_k: '<null>', f375_a: '<object>', f376_n: '<number>', f377_o: '<object>', f378_n: '<array>', f379_y: '<boolean>', f380_z: '<null>', f381_g: '<string>', f382_g: '<array>', f383_e: '<number>', f384_r: '<null>', f385_f: '<boolean>', f386_m: '<number>', f387_x: '<boolean>', f388_u: '<null>', f389_z: '<object>', f390_t: '<null>', f391_a: '<object>', f392_m: '<number>', f393_e: '<array>', f394_g: '<boolean>', f395_j: '<null>', f396_n: '<number>', f397_y: '<array>', f398_u: '<null>', f399_a: '<null>', f400_z: '<boolean>', f401_z: '<number>', f402_n: '<array>', f403_w: '<array>', f404_d: '<boolean>', f405_r: '<number>', f406_u: '<array>', f407_e: '<array>', f408_g: '<array>', f409_j: '<string>', f410_q: '<array>', f411_e: '<array>', f412_u: '<string>', f413_y: '<array>', f414_f: '<string>', f415_s: '<object>', f416_v: '<number>', f417_g: '<object>', f418_z: '<string>', f419_h: '<null>', f420_l: '<array>', f421_f: '<string>', f422_q: '<number>', f423_x: '<object>', f424_b: '<boolean>', f425_p: '<object>', f426_d: '<object>', f427_r: '<object>', f428_n: '<boolean>', f429_u: '<number>', f430_x: '<number>', f431_f: '<boolean>', f432_k: '<number>', f433_f: '<object>', f434_m: '<string>', f435_v: '<object>', f436_y: '<string>', f437_t: '<array>', f438_c: '<boolean>', f439_o: '<string>', f440_e: '<array>', f441_z: '<string>', f442_j: '<object>', f443_g: '<number>', f444_n: '<object>', f445_y: '<string>', f446_q: '<number>', f447_y: '<null>', f448_h: '<number>', f449_o: '<string>', f450_b: '<null>', f451_y: '<object>', f452_r: '<string>', f453_h: '<array>', f454_t: '<object>', f455_h: '<null>', f456_z: '<string>', f457_v: '<array>', f458_l: '<boolean>', f459_q: '<object>', f460_g: '<object>', f461_q: '<string>', f462_g: '<boolean>', f463_w: '<null>', f464_i: '<string>', f465_r: '<null>', f466_u: '<object>', f467_m: '<array>', f468_b: '<boolean>', f469_k: '<boolean>', f470_e: '<array>', f471_z: '<array>', f472_k: '<array>', f473_n: '<object>', f474_z: '<boolean>', f475_j: '<array>', f476_d: '<object>', f477_j: '<null>', f478_y: '<number>', f479_v: '<number>', f480_w: '<object>', f481_a: '<object>', f482_i: '<number>', f483_b: '<array>', f484_c: '<string>', f485_j: '<string>', f486_q: '<object>', f487_a: '<number>', f488_b: '<boolean>', f489_f: '<boolean>', f490_u: '<number>', f491_f: '<array>', f492_r: '<number>'}, 'ysVlreBCXPLuhkTmztKhEHtuKaULOCrAhmqurTQoEKCLMPPBOEtCeTVZgcnAIBIBuamHjSyrYedI');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('ysVlreBCXPLuhkTmztKhEHtuKaULOCrAhmqurTQoEKCLMPPBOEtCeTVZgcnAIBIBuamHjSyrYedI', 'nzmCHVHAvUFAVhHFfOwyBqfKpuVngxzMFIMpKWSnBwScnwoZZAcBeTPmuWliULpfmEzZXwPoEzFbwDyDZgvvAaKiYwaZzWPocUOHokgrTDqoNWPrvJlceWLANxNMYeyCDIfsBnUegybsrXRLgTnKPgZDkOkzaDUadHbgwINdMgYzXJvGoGiIGprunxQeubZiBLzFzkonFKeDzbFcNRmYnWywbuVgVjBuCTlNJmTOrLJyPkifPSvUDJpqUdggTKwThWnGewqKfmorqgzrkMkeouXKRPWobOscGBBCaMWAKsgcHFhwAErQJDPnvXXfohXmTiHGtoLJyatfHwgPBCbvtEGOmUSSbArUsWvgyVoIEuBorpEYXASgcrEYoFXiZEEorxbgLiJIZyGBcopyeUhcDwqrzVBwvcGRzrIchoVObYBvOpvQtZFuIPJplXIzjolIOlUOTdsDAExLQNichNfjRKqyFjPlzRlbofxjQFsAdLCjdSEnFxYRCVisjMXatygiHjoNoIEzswLfiIthEKoHcFutJAynaDgtDrSmqsShYIFdElIYGwYjgnJeTQlXvbFadbAarSUWenJGwWCHyInAZBexxatIuYVjvcYdFzhghVdfmXobSIXoIUhlkaHqwJtxLYfkLZNHuJSbTNNyTSxtYKumMePGCferACVWSpNiiutoKNfDbyVIPxmeOoWWHHzmhnHgIayDfSWjRsAilpwkmjORMhOaZZLQHDgrcYVqSAgkewYjViZXxJCCUkIBNZJAwOHCuDRJUIJleiDqhehXHOKdNtsJBfMImstoBSfzckisYmOJRBkJmqLhWijltariFvRvYzGMLlPYLlxrZknymxyAr', true, false);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8665 = db.transaction(['objectStore_5748'], 'readwrite', {durability:"strict"})
    var objectStore_5748 = txn_8665.objectStore('objectStore_5748');
    var clear_2 = objectStore_5748.clear();
    var clear_3 = objectStore_5748.clear();
    var put_2 = objectStore_5748.put({f0_h: '<array>', f1_l: '<object>', f2_r: '<string>', f3_h: '<object>', f4_s: '<boolean>', f5_b: '<object>', f6_r: '<number>', f7_x: '<null>', f8_v: '<boolean>', f9_f: '<null>'}, 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAll_0 = objectStore_5748.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAll_0 = objectStore_5748.getAll(KeyRange_3);
    }

    txn_8665.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8665.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8665.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8666 = db.transaction(['objectStore_5748'], 'readonly', {durability:"default"})
    var objectStore_5748 = txn_8666.objectStore('objectStore_5748');
    var index_0 = objectStore_5748.index('index_3829');
    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, true);
        count_0 = objectStore_5748.count(KeyRange_4);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', true);
        get_0 = objectStore_5748.get(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false);
        get_1 = objectStore_5748.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_5748.getAllKeys(2836790155);
    var getAllKeys_2 = objectStore_5748.getAllKeys(3529820605);
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, true);
        count_1 = objectStore_5748.count(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, false);
        get_2 = objectStore_5748.get(KeyRange_12);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, false);
        count_2 = objectStore_5748.count(KeyRange_14);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, false);
        count_3 = objectStore_5748.count(KeyRange_16);
    }
    catch (e){
    }

    var count_4 = objectStore_5748.count();
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, false);
        count_5 = objectStore_5748.count(KeyRange_18);
    }
    catch (e){
    }

    txn_8666.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8666.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8666.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8667 = db.transaction(['objectStore_5748', 'objectStore_5749'], 'readonly', {durability:"strict"})
    var objectStore_5748 = txn_8667.objectStore('objectStore_5748');
    var getAllKeys_3;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', true);
        getAllKeys_3 = objectStore_5748.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_3 = objectStore_5748.getAllKeys(KeyRange_21);
    }

    var index_1 = objectStore_5748.index('index_3829');
    var count_6 = objectStore_5748.count();
    var getAllKeys_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', true, false);
        getAllKeys_4 = objectStore_5748.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_4 = objectStore_5748.getAllKeys(KeyRange_23);
    }

    var index_2 = objectStore_5748.index('index_3831');
    var getAllKeys_5 = objectStore_5748.getAllKeys();
    var getAll_1 = objectStore_5748.getAll();
    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, true);
        get_3 = objectStore_5748.get(KeyRange_24);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_26 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_6 = objectStore_5748.getAllKeys(KeyRange_26, 2567664888);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_6 = objectStore_5748.getAllKeys(KeyRange_27);
    }

    var getAllKeys_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', true, true);
        getAllKeys_7 = objectStore_5748.getAllKeys(KeyRange_28, 3015643062);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_7 = objectStore_5748.getAllKeys(KeyRange_29);
    }

    var count_7 = objectStore_5748.count();
    var index_3 = objectStore_5748.index('index_3831');
    var count_8 = objectStore_5748.count();
    var count_9;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false);
        count_9 = objectStore_5748.count(KeyRange_30);
    }
    catch (e){
    }

    txn_8667.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8667.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8667.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8668 = db.transaction(['objectStore_5748'], 'readonly', {durability:"default"})
    var objectStore_5748 = txn_8668.objectStore('objectStore_5748');
    var getAll_2 = objectStore_5748.getAll();
    var count_10 = objectStore_5748.count();
    var getAll_3 = objectStore_5748.getAll(486277994);
    var getAll_4 = objectStore_5748.getAll(3748544678);
    var get_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, true);
        get_4 = objectStore_5748.get(KeyRange_32);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false, false);
        get_5 = objectStore_5748.get(KeyRange_34);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', false);
        get_6 = objectStore_5748.get(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_38 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_8 = objectStore_5748.getAllKeys(KeyRange_38, 4206147560);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        getAllKeys_8 = objectStore_5748.getAllKeys(KeyRange_39);
    }

    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', true, true);
        get_7 = objectStore_5748.get(KeyRange_40);
    }
    catch (e){
    }

    txn_8668.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8668.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8668.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8669 = db.transaction(['objectStore_5748'], 'readwrite', {durability:"strict"})
    var objectStore_5748 = txn_8669.objectStore('objectStore_5748');
    var index_4 = objectStore_5748.index('index_3831');
    var put_3 = objectStore_5748.put({f0_y: '<object>', f1_m: '<array>', f2_s: '<boolean>', f3_u: '<array>', f4_r: '<object>', f5_y: '<object>'}, 'oaMLoUrbUktOKCZkscpkGmEKqSNMPenfqgHHlnGEWyPYBfVYpPGJzfeYysgMtiTrLkIPpHmzaFtmjFhoZzXMCWnmcMnJaUfzzsZylWqgJnGtIbkSGUaZhqpqHKXhQMzmaEKVpgwZIBGThsDNJlkVvbAxoMmOlssSEysXslOPgeWFLChoYnYvdbawXMXjvVBAgTVBOzrxfjgPeTYYrauGztfLefMIHNLuVsFMhrITdlQbKTRcYixCUPWbDQePsduCdSj');
    var delete_1;
    try{
        KeyRange_42 = IDBKeyRange.only('oaMLoUrbUktOKCZkscpkGmEKqSNMPenfqgHHlnGEWyPYBfVYpPGJzfeYysgMtiTrLkIPpHmzaFtmjFhoZzXMCWnmcMnJaUfzzsZylWqgJnGtIbkSGUaZhqpqHKXhQMzmaEKVpgwZIBGThsDNJlkVvbAxoMmOlssSEysXslOPgeWFLChoYnYvdbawXMXjvVBAgTVBOzrxfjgPeTYYrauGztfLefMIHNLuVsFMhrITdlQbKTRcYixCUPWbDQePsduCdSj');
        delete_1 = objectStore_5748.delete(KeyRange_42);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.only('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ');
        get_8 = objectStore_5748.get(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_5748.getAllKeys();
    var getAllKeys_10 = objectStore_5748.getAllKeys();
    var add_0 = objectStore_5748.add({f0_g: '<string>', f1_s: '<array>', f2_l: '<boolean>', f3_c: '<boolean>', f4_u: '<object>', f5_h: '<null>', f6_z: '<object>', f7_u: '<null>'}, 'RpIiScRPPRtriCLhUQxnsZbcFocaIsRegejNzwQRgdiaOVMqqDVKkgOKDvOllLEsHjIeTuOshEWGlvetINqaIYRreiBdXugOgiCPIyGnXheFRuWeaRpuPLEqFtMNiORrvnqCOsdPUTpZmjtOtAqKcjVQjKpJgssMMtZrMxxhyuZCgdkDSQvRvhyJbKaizrIzaAlmgxhvPvBZlrQkzWbFvGVXjwsEayaybBLMQrzjIFGTosPajBdNZFQKcKxHZWTLJqTkFtBpgKnpkhYWCJKUOsQPGOUDoMHOLaJIWduxajieqWqSOwqGsMFInNkyWwcPmlWxSmrbQNycGOQSPEmlESNFQYJRsAYRGETlvvJJhiROFWJSlRMZIOPBEnTvfJSUpGkCfOEzdSAFZywPsFzWzyoFMiyfNTqzWOpeLiepqwawKuKnOpqOnnFSvqypuMIdCvilFXgUDWDgmtNPoBWHftjRhNwAWkLhUAZfrESlmFKhgKqEwRdRbKuEHxtCXEZUnaSpAJBKxrdipKKwOWbJSLWKijzrQFhBouqPROHmEdJCxnxfrAIWegEAOSyTXOgWPweOXKdFJROdSYRHPdOaFVTsrGQvnINrLJkaoPAuTkCPwBvEDmgthjOxBXYWayuPXpJkQxdGVOdVUNicHUyeXPvZSqqQwNqcLVTzvmUpiJSqvixVGWppNhYgOzu');
    var count_11;
    try{
        KeyRange_46 = IDBKeyRange.bound('RpIiScRPPRtriCLhUQxnsZbcFocaIsRegejNzwQRgdiaOVMqqDVKkgOKDvOllLEsHjIeTuOshEWGlvetINqaIYRreiBdXugOgiCPIyGnXheFRuWeaRpuPLEqFtMNiORrvnqCOsdPUTpZmjtOtAqKcjVQjKpJgssMMtZrMxxhyuZCgdkDSQvRvhyJbKaizrIzaAlmgxhvPvBZlrQkzWbFvGVXjwsEayaybBLMQrzjIFGTosPajBdNZFQKcKxHZWTLJqTkFtBpgKnpkhYWCJKUOsQPGOUDoMHOLaJIWduxajieqWqSOwqGsMFInNkyWwcPmlWxSmrbQNycGOQSPEmlESNFQYJRsAYRGETlvvJJhiROFWJSlRMZIOPBEnTvfJSUpGkCfOEzdSAFZywPsFzWzyoFMiyfNTqzWOpeLiepqwawKuKnOpqOnnFSvqypuMIdCvilFXgUDWDgmtNPoBWHftjRhNwAWkLhUAZfrESlmFKhgKqEwRdRbKuEHxtCXEZUnaSpAJBKxrdipKKwOWbJSLWKijzrQFhBouqPROHmEdJCxnxfrAIWegEAOSyTXOgWPweOXKdFJROdSYRHPdOaFVTsrGQvnINrLJkaoPAuTkCPwBvEDmgthjOxBXYWayuPXpJkQxdGVOdVUNicHUyeXPvZSqqQwNqcLVTzvmUpiJSqvixVGWppNhYgOzu', 'RpIiScRPPRtriCLhUQxnsZbcFocaIsRegejNzwQRgdiaOVMqqDVKkgOKDvOllLEsHjIeTuOshEWGlvetINqaIYRreiBdXugOgiCPIyGnXheFRuWeaRpuPLEqFtMNiORrvnqCOsdPUTpZmjtOtAqKcjVQjKpJgssMMtZrMxxhyuZCgdkDSQvRvhyJbKaizrIzaAlmgxhvPvBZlrQkzWbFvGVXjwsEayaybBLMQrzjIFGTosPajBdNZFQKcKxHZWTLJqTkFtBpgKnpkhYWCJKUOsQPGOUDoMHOLaJIWduxajieqWqSOwqGsMFInNkyWwcPmlWxSmrbQNycGOQSPEmlESNFQYJRsAYRGETlvvJJhiROFWJSlRMZIOPBEnTvfJSUpGkCfOEzdSAFZywPsFzWzyoFMiyfNTqzWOpeLiepqwawKuKnOpqOnnFSvqypuMIdCvilFXgUDWDgmtNPoBWHftjRhNwAWkLhUAZfrESlmFKhgKqEwRdRbKuEHxtCXEZUnaSpAJBKxrdipKKwOWbJSLWKijzrQFhBouqPROHmEdJCxnxfrAIWegEAOSyTXOgWPweOXKdFJROdSYRHPdOaFVTsrGQvnINrLJkaoPAuTkCPwBvEDmgthjOxBXYWayuPXpJkQxdGVOdVUNicHUyeXPvZSqqQwNqcLVTzvmUpiJSqvixVGWppNhYgOzu', false, false);
        count_11 = objectStore_5748.count(KeyRange_46);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_48 = IDBKeyRange.bound('pYEvyzaogQtGDAObuVrluYZbgtWWAJUEokHJIWLZGuZcsNcXwidjhPjKQpUCIQjEIqpLIMDOXfmsjtdOwyMWVejzLXjyomdKfJMiUDmJdmsqYJGklGByMskvAdyrvAjxVIjWJoWbVDwkpygVBIhAjliPEwQMeMchjZozlLARopMGJmLQyslFSXmnesSLiqPmpVPPewUobhgGaWWVVcqSqeLgQPwnAdFCzMvCUQsOfNnwKYRLimugLvTCUrWPmSSvOKpAUcatFePRFtkgSTPzrgpiVfxQ', 'oaMLoUrbUktOKCZkscpkGmEKqSNMPenfqgHHlnGEWyPYBfVYpPGJzfeYysgMtiTrLkIPpHmzaFtmjFhoZzXMCWnmcMnJaUfzzsZylWqgJnGtIbkSGUaZhqpqHKXhQMzmaEKVpgwZIBGThsDNJlkVvbAxoMmOlssSEysXslOPgeWFLChoYnYvdbawXMXjvVBAgTVBOzrxfjgPeTYYrauGztfLefMIHNLuVsFMhrITdlQbKTRcYixCUPWbDQePsduCdSj', true, false);
        get_9 = objectStore_5748.get(KeyRange_48);
    }
    catch (e){
    }

    txn_8669.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8669.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8669.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2710')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};