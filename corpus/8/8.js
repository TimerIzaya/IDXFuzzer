let db;
const openRequest = window.indexedDB.open('str_838', 1001239568138097)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_26', {keypath: 'LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG', autoIncrement: true});
    var index_26 = objectStore_0.createIndex('index_26', 'test', {unique: false});
    var index_0 = objectStore_0.index('index_26');
    var index_27 = objectStore_0.createIndex('index_27', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_27', {keypath: 'SCYYDhAhoOqwlToRDyOqaXXirtYGJSxNTsKjFWPbYZsjFnipIcAiPHcXXZlIhwAcwxRCUkwBMhlQTAbqSQrwEhBVnvUZ'});
    var put_0 = objectStore_1.put({f0_u: '<array>', f1_h: '<string>', f2_a: '<null>', f3_p: '<array>', f4_h: '<object>', f5_x: '<string>', f6_w: '<boolean>', f7_j: '<null>', f8_h: '<string>', f9_y: '<array>', f10_j: '<number>', f11_c: '<array>', f12_f: '<number>', f13_f: '<number>', f14_m: '<array>', f15_y: '<number>', f16_m: '<string>', f17_r: '<number>', f18_h: '<array>', f19_m: '<array>', f20_l: '<number>', f21_x: '<array>', f22_h: '<array>', f23_g: '<object>', f24_f: '<string>', f25_i: '<number>', f26_j: '<number>', f27_a: '<boolean>', f28_z: '<number>', f29_s: '<object>', f30_i: '<number>', f31_o: '<boolean>', f32_r: '<array>', f33_m: '<null>', f34_e: '<boolean>', f35_z: '<number>', f36_h: '<boolean>', f37_w: '<number>', f38_r: '<object>', f39_l: '<string>', f40_t: '<null>', f41_b: '<object>', f42_h: '<object>', f43_z: '<number>', f44_j: '<number>', f45_h: '<array>', f46_k: '<boolean>', f47_b: '<string>', f48_w: '<object>', f49_q: '<null>', f50_p: '<boolean>', f51_i: '<null>', f52_q: '<null>', f53_u: '<boolean>', f54_u: '<string>', f55_t: '<array>', f56_i: '<object>', f57_z: '<object>', f58_j: '<number>', f59_v: '<boolean>', f60_t: '<null>', f61_f: '<number>', f62_r: '<boolean>', f63_w: '<null>', f64_s: '<string>', f65_r: '<null>', f66_i: '<object>', f67_n: '<number>', f68_m: '<object>', f69_r: '<object>', f70_k: '<boolean>', f71_d: '<null>', f72_b: '<array>', f73_g: '<string>', f74_i: '<null>', f75_p: '<object>', f76_z: '<string>', f77_f: '<null>', f78_w: '<array>', f79_x: '<number>', f80_i: '<number>', f81_p: '<string>', f82_c: '<array>', f83_r: '<object>', f84_s: '<object>', f85_b: '<null>', f86_e: '<null>', f87_y: '<number>', f88_i: '<number>', f89_a: '<boolean>', f90_c: '<null>', f91_d: '<null>', f92_o: '<boolean>', f93_i: '<string>', f94_v: '<boolean>', f95_z: '<string>', f96_l: '<boolean>', f97_e: '<string>', f98_o: '<object>', f99_p: '<boolean>', f100_j: '<boolean>', f101_i: '<object>', f102_z: '<null>', f103_e: '<object>', f104_o: '<number>', f105_k: '<number>', f106_u: '<null>', f107_d: '<object>', f108_d: '<object>', f109_w: '<number>', f110_q: '<boolean>', f111_o: '<number>', f112_k: '<array>', f113_w: '<null>', f114_m: '<array>', f115_p: '<boolean>', f116_k: '<number>', f117_i: '<object>', f118_f: '<string>', f119_h: '<array>', f120_s: '<string>', f121_p: '<array>', f122_v: '<null>', f123_p: '<object>', f124_n: '<null>', f125_y: '<object>', f126_w: '<null>', f127_u: '<boolean>', f128_r: '<object>', f129_l: '<array>', f130_t: '<object>', f131_y: '<array>', f132_g: '<null>', f133_r: '<null>', f134_t: '<array>', f135_b: '<number>', f136_n: '<array>', f137_s: '<boolean>', f138_j: '<null>', f139_b: '<number>', f140_r: '<number>', f141_d: '<null>', f142_h: '<null>', f143_v: '<null>', f144_k: '<string>', f145_v: '<boolean>', f146_i: '<object>', f147_a: '<string>', f148_u: '<array>', f149_u: '<string>', f150_f: '<object>', f151_p: '<number>', f152_l: '<object>', f153_l: '<object>', f154_u: '<null>', f155_a: '<null>', f156_w: '<array>', f157_f: '<number>', f158_a: '<string>', f159_v: '<null>', f160_b: '<number>', f161_m: '<string>', f162_w: '<null>', f163_k: '<string>', f164_a: '<string>', f165_p: '<object>', f166_b: '<number>', f167_b: '<string>', f168_d: '<object>', f169_v: '<boolean>', f170_h: '<null>', f171_c: '<null>', f172_y: '<boolean>', f173_u: '<boolean>', f174_b: '<string>', f175_r: '<array>', f176_y: '<null>', f177_i: '<array>', f178_v: '<array>', f179_h: '<string>', f180_v: '<number>', f181_g: '<string>', f182_t: '<object>', f183_s: '<number>', f184_m: '<string>', f185_n: '<object>', f186_b: '<string>', f187_n: '<number>', f188_u: '<string>', f189_f: '<array>', f190_c: '<boolean>', f191_a: '<null>', f192_n: '<boolean>', f193_l: '<null>', f194_c: '<string>', f195_m: '<array>', f196_r: '<array>', f197_g: '<array>', f198_e: '<string>', f199_a: '<null>', f200_h: '<boolean>', f201_u: '<object>', f202_g: '<number>', f203_w: '<string>', f204_c: '<number>', f205_w: '<array>', f206_o: '<array>', f207_y: '<null>', f208_q: '<array>', f209_q: '<array>', f210_i: '<array>', f211_v: '<array>', f212_q: '<boolean>', f213_m: '<string>', f214_g: '<array>', f215_y: '<array>', f216_e: '<string>', f217_c: '<array>', f218_i: '<object>', f219_l: '<boolean>', f220_c: '<string>', f221_l: '<boolean>', f222_f: '<null>', f223_e: '<number>', f224_z: '<number>', f225_t: '<object>', f226_a: '<array>', f227_i: '<number>', f228_m: '<object>', f229_l: '<boolean>', f230_c: '<boolean>', f231_y: '<boolean>', f232_n: '<string>', f233_z: '<object>', f234_v: '<array>', f235_a: '<object>', f236_c: '<string>', f237_m: '<null>', f238_h: '<object>', f239_q: '<boolean>', f240_p: '<boolean>', f241_k: '<null>', f242_v: '<number>', f243_h: '<boolean>', f244_z: '<array>', f245_n: '<string>', f246_o: '<object>', f247_s: '<array>', f248_o: '<boolean>', f249_u: '<number>', f250_t: '<boolean>', f251_u: '<boolean>', f252_u: '<null>', f253_u: '<number>', f254_w: '<object>', f255_x: '<boolean>', f256_u: '<boolean>', f257_j: '<array>', f258_c: '<null>', f259_y: '<boolean>', f260_m: '<array>', f261_n: '<boolean>', f262_y: '<array>', f263_n: '<object>', f264_e: '<array>', f265_o: '<boolean>', f266_c: '<array>', f267_r: '<array>', f268_e: '<string>', f269_l: '<array>', f270_y: '<object>', f271_l: '<boolean>', f272_e: '<string>', f273_l: '<number>', f274_b: '<array>', f275_h: '<object>', f276_v: '<object>', f277_t: '<null>', f278_z: '<boolean>', f279_y: '<string>', f280_m: '<boolean>', f281_q: '<null>', f282_v: '<null>', f283_d: '<array>', f284_d: '<boolean>', f285_d: '<array>', f286_a: '<boolean>', f287_i: '<object>', f288_a: '<null>', f289_d: '<number>', f290_k: '<null>', f291_i: '<boolean>', f292_l: '<array>', f293_z: '<null>', f294_p: '<boolean>', f295_i: '<array>', f296_f: '<number>', f297_b: '<array>', f298_n: '<array>', f299_b: '<string>', f300_d: '<string>', f301_z: '<number>', f302_w: '<null>', f303_d: '<null>', f304_p: '<boolean>', f305_w: '<array>', f306_s: '<array>', f307_y: '<object>', f308_e: '<number>', f309_f: '<boolean>', f310_u: '<boolean>', f311_e: '<array>', f312_e: '<string>', f313_e: '<object>', f314_y: '<string>', f315_h: '<number>', f316_n: '<array>', f317_m: '<object>', f318_h: '<number>', f319_f: '<null>', f320_p: '<boolean>', f321_e: '<object>', f322_p: '<array>', f323_v: '<string>', f324_t: '<object>', f325_a: '<boolean>', f326_x: '<null>', f327_d: '<string>', f328_i: '<number>', f329_o: '<array>', f330_w: '<number>', f331_g: '<boolean>', f332_g: '<null>', f333_h: '<array>', f334_x: '<null>', f335_u: '<object>', f336_m: '<string>', f337_x: '<boolean>', f338_t: '<boolean>', f339_l: '<number>', f340_v: '<string>', f341_i: '<null>', f342_q: '<boolean>', f343_u: '<null>', f344_n: '<string>', f345_z: '<boolean>', f346_i: '<object>', f347_s: '<null>', f348_g: '<boolean>', f349_q: '<object>', f350_t: '<string>', f351_p: '<string>', f352_w: '<string>', f353_t: '<boolean>', f354_p: '<boolean>', f355_d: '<number>', f356_o: '<boolean>', f357_o: '<null>', f358_n: '<array>', f359_d: '<string>', f360_z: '<object>', f361_d: '<string>', f362_j: '<number>', f363_p: '<string>', f364_d: '<object>', f365_l: '<boolean>', f366_s: '<null>', f367_l: '<null>', f368_t: '<object>', f369_o: '<array>', f370_r: '<array>', f371_j: '<string>', f372_w: '<string>', f373_v: '<object>', f374_n: '<object>', f375_w: '<object>', f376_v: '<boolean>', f377_s: '<string>', f378_w: '<boolean>', f379_t: '<string>', f380_w: '<array>', f381_x: '<boolean>', f382_y: '<array>', f383_b: '<boolean>', f384_s: '<null>', f385_p: '<string>', f386_n: '<null>', f387_u: '<object>', f388_j: '<boolean>', f389_f: '<null>', f390_p: '<string>', f391_j: '<boolean>', f392_b: '<null>', f393_s: '<boolean>', f394_n: '<number>', f395_k: '<number>', f396_i: '<object>', f397_w: '<array>', f398_u: '<array>', f399_w: '<string>', f400_k: '<array>', f401_s: '<object>', f402_m: '<string>', f403_u: '<array>', f404_h: '<object>', f405_y: '<object>', f406_o: '<string>', f407_b: '<number>', f408_q: '<string>', f409_c: '<array>', f410_d: '<object>', f411_j: '<null>', f412_g: '<number>', f413_w: '<number>', f414_w: '<object>', f415_j: '<null>', f416_m: '<array>', f417_h: '<boolean>', f418_y: '<null>', f419_e: '<null>', f420_g: '<null>', f421_u: '<boolean>', f422_b: '<object>', f423_p: '<string>', f424_i: '<null>', f425_l: '<array>', f426_x: '<object>', f427_c: '<number>', f428_b: '<number>', f429_t: '<object>', f430_w: '<null>', f431_q: '<boolean>', f432_c: '<null>', f433_d: '<number>', f434_p: '<null>', f435_p: '<array>', f436_n: '<object>', f437_w: '<number>', f438_o: '<number>', f439_z: '<string>', f440_m: '<object>', f441_v: '<null>', f442_b: '<array>', f443_k: '<number>', f444_h: '<array>', f445_c: '<null>', f446_o: '<boolean>', f447_u: '<array>', f448_g: '<object>', f449_p: '<null>', f450_s: '<array>', f451_g: '<string>', f452_h: '<boolean>', f453_b: '<null>', f454_j: '<number>', f455_t: '<string>', f456_u: '<number>', f457_m: '<number>', f458_q: '<array>', f459_d: '<number>', f460_p: '<null>', f461_b: '<object>', f462_x: '<array>', f463_d: '<number>', f464_l: '<boolean>', f465_i: '<null>', f466_a: '<object>', f467_j: '<boolean>', f468_w: '<null>', f469_d: '<boolean>', f470_c: '<number>', f471_k: '<array>', f472_t: '<number>', f473_a: '<boolean>', f474_p: '<null>', f475_a: '<null>', f476_t: '<string>', f477_g: '<null>', f478_s: '<string>', f479_q: '<number>', f480_j: '<string>', f481_x: '<array>', f482_t: '<boolean>', f483_t: '<array>', f484_t: '<array>', f485_a: '<null>', f486_u: '<object>', f487_w: '<array>', f488_z: '<array>', f489_a: '<object>', f490_z: '<string>', f491_l: '<object>', f492_e: '<boolean>', f493_c: '<array>', f494_n: '<number>', f495_c: '<number>', f496_k: '<null>', f497_c: '<array>', f498_i: '<array>', f499_l: '<null>', f500_r: '<string>', f501_l: '<number>', f502_y: '<string>', f503_h: '<string>', f504_w: '<string>', f505_q: '<array>', f506_y: '<string>', f507_m: '<string>', f508_p: '<null>', f509_k: '<boolean>', f510_f: '<number>', f511_c: '<null>', f512_y: '<boolean>', f513_h: '<null>', f514_h: '<boolean>', f515_v: '<string>', f516_d: '<null>', f517_p: '<object>', f518_y: '<null>', f519_p: '<string>', f520_t: '<number>', f521_r: '<string>', f522_l: '<boolean>', f523_o: '<boolean>', f524_d: '<object>', f525_g: '<object>', f526_d: '<object>', f527_f: '<array>', f528_k: '<string>', f529_a: '<object>', f530_u: '<boolean>', f531_h: '<number>', f532_t: '<boolean>', f533_x: '<array>', f534_x: '<boolean>', f535_g: '<boolean>', f536_r: '<string>', f537_c: '<number>', f538_z: '<boolean>', f539_t: '<null>', f540_o: '<array>', f541_d: '<null>', f542_x: '<string>', f543_u: '<array>', f544_k: '<boolean>', f545_g: '<string>', f546_o: '<array>', f547_p: '<string>', f548_b: '<string>', f549_y: '<string>', f550_z: '<boolean>', f551_i: '<null>', f552_c: '<boolean>', f553_n: '<number>', f554_q: '<null>', f555_u: '<array>', f556_x: '<object>', f557_v: '<boolean>', f558_z: '<number>', f559_g: '<array>', f560_s: '<number>', f561_k: '<null>', f562_s: '<null>', f563_e: '<number>', f564_q: '<string>', f565_q: '<number>', f566_h: '<null>', f567_f: '<array>', f568_w: '<string>', f569_y: '<null>', f570_r: '<number>', f571_c: '<boolean>', f572_y: '<string>', f573_a: '<string>', f574_h: '<boolean>', f575_g: '<number>', f576_p: '<number>', f577_m: '<string>', f578_q: '<boolean>', f579_u: '<boolean>', f580_e: '<string>', f581_b: '<number>', f582_a: '<null>', f583_a: '<array>', f584_i: '<null>', f585_y: '<number>', f586_p: '<array>', f587_b: '<number>', f588_r: '<number>', f589_z: '<number>', f590_b: '<boolean>', f591_d: '<boolean>', f592_z: '<object>', f593_w: '<number>', f594_r: '<object>', f595_m: '<null>', f596_a: '<string>', f597_z: '<null>', f598_o: '<boolean>', f599_h: '<boolean>', f600_o: '<array>', f601_b: '<string>', f602_v: '<object>', f603_h: '<null>', f604_z: '<boolean>', f605_v: '<string>', f606_v: '<object>', f607_w: '<string>', f608_j: '<string>', f609_d: '<boolean>', f610_p: '<boolean>', f611_m: '<boolean>', f612_j: '<number>', f613_e: '<string>', f614_w: '<null>', f615_j: '<number>', f616_g: '<object>', f617_x: '<array>', f618_m: '<string>', f619_u: '<number>', f620_g: '<array>', f621_o: '<null>', f622_o: '<boolean>', f623_o: '<number>', f624_m: '<number>', f625_p: '<number>', f626_o: '<boolean>', f627_k: '<boolean>', f628_k: '<null>', f629_f: '<object>', f630_a: '<boolean>', f631_j: '<boolean>', f632_m: '<null>', f633_z: '<null>', f634_z: '<object>', f635_j: '<boolean>', f636_x: '<array>', f637_x: '<boolean>', f638_m: '<object>', f639_f: '<object>', f640_u: '<number>', f641_e: '<number>', f642_q: '<null>', f643_d: '<boolean>', f644_j: '<boolean>', f645_j: '<boolean>', f646_j: '<null>', f647_w: '<boolean>', f648_r: '<array>', f649_x: '<null>', f650_k: '<null>', f651_h: '<null>', f652_c: '<string>', f653_m: '<array>', f654_h: '<object>', f655_c: '<string>', f656_p: '<object>', f657_l: '<array>', f658_z: '<string>', f659_t: '<array>', f660_f: '<string>', f661_a: '<array>', f662_s: '<string>', f663_u: '<string>', f664_h: '<boolean>', f665_m: '<array>', f666_o: '<number>', f667_o: '<number>', f668_s: '<boolean>', f669_g: '<null>', f670_w: '<string>', f671_j: '<boolean>', f672_o: '<string>', f673_l: '<boolean>', f674_a: '<array>', f675_a: '<array>', f676_m: '<object>', SCYYDhAhoOqwlToRDyOqaXXirtYGJSxNTsKjFWPbYZsjFnipIcAiPHcXXZlIhwAcwxRCUkwBMhlQTAbqSQrwEhBVnvUZ: true});
    var add_0 = objectStore_0.add({f0_l: '<number>', f1_y: '<boolean>', f2_w: '<null>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: null});
    var add_1 = objectStore_0.add({f0_l: '<string>', f1_i: '<number>', f2_p: '<boolean>', f3_d: '<array>', f4_i: '<boolean>', f5_u: '<string>', f6_t: '<string>', f7_e: '<number>', f8_m: '<string>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: 'eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt'});
    var clear_0 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_28', {keypath: 'xVFrijEUzIwxVdiPSiKrOmjcnFa', autoIncrement: true});
    var clear_1 = objectStore_1.clear();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt', 'eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_1.put({f0_g: '<boolean>', f1_t: '<number>', f2_v: '<boolean>', f3_d: '<string>', f4_l: '<object>', f5_r: '<null>', f6_a: '<number>', f7_c: '<string>', f8_i: '<number>', f9_a: '<null>', f10_w: '<string>', f11_b: '<object>', f12_x: '<boolean>', f13_p: '<object>', f14_r: '<boolean>', f15_b: '<null>', f16_p: '<number>', f17_r: '<null>', f18_x: '<boolean>', f19_m: '<number>', f20_o: '<null>', f21_x: '<null>', f22_f: '<array>', f23_c: '<string>', f24_l: '<object>', f25_h: '<boolean>', f26_s: '<boolean>', f27_c: '<array>', f28_e: '<array>', f29_u: '<number>', f30_s: '<number>', f31_p: '<boolean>', f32_f: '<string>', f33_e: '<number>', f34_o: '<array>', f35_j: '<object>', f36_s: '<boolean>', f37_c: '<string>', f38_u: '<object>', f39_z: '<number>', f40_i: '<boolean>', f41_h: '<string>', f42_c: '<boolean>', f43_y: '<null>', f44_z: '<boolean>', f45_z: '<number>', f46_l: '<array>', f47_e: '<boolean>', f48_p: '<boolean>', f49_a: '<null>', f50_e: '<null>', f51_m: '<object>', f52_a: '<boolean>', f53_h: '<boolean>', f54_h: '<array>', f55_h: '<array>', f56_p: '<null>', f57_r: '<boolean>', f58_k: '<null>', f59_e: '<null>', f60_m: '<null>', f61_z: '<string>', f62_i: '<boolean>', f63_v: '<number>', f64_i: '<object>', f65_e: '<number>', f66_z: '<number>', f67_i: '<null>', f68_u: '<object>', f69_f: '<string>', f70_x: '<number>', f71_k: '<boolean>', f72_c: '<object>', f73_p: '<string>', f74_l: '<null>', f75_c: '<string>', f76_o: '<array>', f77_r: '<array>', f78_g: '<boolean>', f79_o: '<boolean>', f80_x: '<string>', f81_o: '<number>', f82_e: '<object>', f83_m: '<null>', f84_n: '<boolean>', f85_z: '<string>', f86_p: '<object>', f87_y: '<array>', f88_w: '<array>', f89_a: '<object>', f90_b: '<null>', f91_s: '<number>', f92_g: '<array>', f93_r: '<object>', f94_b: '<object>', f95_u: '<string>', f96_b: '<string>', f97_b: '<boolean>', f98_t: '<boolean>', f99_s: '<null>', f100_m: '<string>', f101_f: '<array>', f102_x: '<object>', f103_h: '<string>', f104_k: '<null>', f105_c: '<object>', f106_a: '<null>', f107_i: '<array>', f108_m: '<array>', f109_s: '<object>', f110_n: '<array>', f111_c: '<object>', f112_s: '<null>', f113_b: '<string>', f114_f: '<array>', f115_n: '<array>', f116_z: '<boolean>', f117_v: '<string>', f118_w: '<boolean>', f119_k: '<boolean>', f120_p: '<array>', f121_e: '<string>', f122_z: '<boolean>', f123_f: '<object>', f124_p: '<null>', f125_z: '<array>', f126_g: '<number>', f127_y: '<string>', f128_z: '<object>', f129_e: '<string>', f130_t: '<array>', f131_d: '<null>', f132_v: '<null>', f133_d: '<number>', f134_l: '<object>', f135_w: '<string>', f136_g: '<null>', f137_b: '<null>', f138_o: '<boolean>', f139_k: '<number>', f140_b: '<number>', f141_g: '<string>', f142_l: '<number>', f143_v: '<string>', f144_v: '<object>', f145_o: '<array>', f146_s: '<array>', f147_p: '<null>', f148_x: '<boolean>', f149_v: '<string>', f150_l: '<array>', f151_x: '<string>', f152_b: '<string>', f153_i: '<number>', f154_g: '<boolean>', f155_t: '<boolean>', f156_z: '<string>', f157_q: '<object>', f158_k: '<null>', f159_m: '<object>', f160_e: '<boolean>', f161_p: '<object>', f162_w: '<object>', f163_t: '<object>', f164_x: '<object>', f165_o: '<object>', f166_d: '<string>', f167_o: '<string>', f168_w: '<number>', f169_t: '<boolean>', f170_u: '<string>', f171_k: '<object>', f172_a: '<array>', f173_p: '<array>', f174_l: '<string>', f175_c: '<array>', f176_w: '<null>', f177_c: '<number>', f178_p: '<array>', f179_c: '<object>', f180_a: '<array>', f181_b: '<boolean>', f182_v: '<array>', f183_w: '<number>', f184_m: '<object>', f185_t: '<null>', f186_v: '<array>', f187_y: '<array>', f188_v: '<boolean>', f189_t: '<object>', f190_r: '<number>', f191_e: '<string>', f192_p: '<boolean>', f193_g: '<array>', f194_h: '<number>', f195_m: '<number>', f196_a: '<string>', f197_o: '<number>', f198_a: '<object>', f199_k: '<number>', f200_s: '<string>', f201_i: '<object>', f202_k: '<boolean>', f203_v: '<boolean>', f204_f: '<array>', f205_i: '<boolean>', f206_k: '<object>', SCYYDhAhoOqwlToRDyOqaXXirtYGJSxNTsKjFWPbYZsjFnipIcAiPHcXXZlIhwAcwxRCUkwBMhlQTAbqSQrwEhBVnvUZ: true});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound(true, true, true, false);
        get_1 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_29', {keypath: 'FxtQVJRuAtp'});
    var add_2 = objectStore_1.add({f0_p: '<array>', f1_k: '<number>', SCYYDhAhoOqwlToRDyOqaXXirtYGJSxNTsKjFWPbYZsjFnipIcAiPHcXXZlIhwAcwxRCUkwBMhlQTAbqSQrwEhBVnvUZ: 'WsmeSmymQQhtTGUTRStXGhYFxkCNTGNMJkBcSBZQibbjCNqfFW'});
    var index_28 = objectStore_1.createIndex('index_28', 'test', {multiEntry: false});
    var add_3 = objectStore_1.add({f0_s: '<boolean>', f1_y: '<string>', f2_p: '<null>', SCYYDhAhoOqwlToRDyOqaXXirtYGJSxNTsKjFWPbYZsjFnipIcAiPHcXXZlIhwAcwxRCUkwBMhlQTAbqSQrwEhBVnvUZ: 'keSzGXpmAMYUssfoUgrwwiMJiJRjJynkhrdQLuJCWeoVipONbOukmbfSD'});
    db.deleteObjectStore('objectStore_27')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_45 = db.transaction(['objectStore_26'], 'readwrite', {durability:"relaxed"})
    var objectStore_26 = txn_45.objectStore('objectStore_26');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound(null, true);
        get_2 = objectStore_26.get(KeyRange_4);
    }
    catch (e){
    }

    var count_0 = objectStore_26.count();
    var add_4 = objectStore_26.add({f0_u: '<string>', f1_h: '<object>', f2_s: '<string>', f3_b: '<number>', f4_w: '<null>', f5_r: '<string>', f6_y: '<object>', f7_e: '<boolean>', f8_b: '<object>', f9_x: '<object>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: true});
    var put_2 = objectStore_26.put({f0_l: '<null>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: true});
    var put_3 = objectStore_26.put({f0_n: '<array>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: null});
    var add_5 = objectStore_26.add({f0_y: '<object>', f1_r: '<null>', f2_f: '<boolean>', f3_x: '<array>', f4_j: '<number>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: 'yYeNzwJVcqUWzIOZAZTYHHGeQbVWNjZrXoncGSzUOwnIGcwHTZqAGSjGAXXaQymJePFTgElobmzNIXpRpKeuXklMgrxBqwILgbq'});
    var clear_2 = objectStore_26.clear();
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.bound(true, true, true, false);
        count_1 = objectStore_26.count(KeyRange_6);
    }
    catch (e){
    }

    var clear_3 = objectStore_26.clear();
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.bound(true, 'eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt', false, false);
        getAllKeys_0 = objectStore_26.getAllKeys(KeyRange_8, 233031474);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only(true);
        getAllKeys_0 = objectStore_26.getAllKeys(KeyRange_9);
    }

    var clear_4 = objectStore_26.clear();
    var index_1 = objectStore_26.index('index_26');
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound(null, null, true, false);
        getAll_0 = objectStore_26.getAll(KeyRange_10, 548181171);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only(null);
        getAll_0 = objectStore_26.getAll(KeyRange_11);
    }

    txn_45.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_45.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_45.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_46 = db.transaction(['objectStore_29'], 'readwrite', {durability:"relaxed"})
    var objectStore_29 = txn_46.objectStore('objectStore_29');
    var clear_5 = objectStore_29.clear();
    var add_6 = objectStore_29.add({f0_h: '<object>', f1_f: '<array>', f2_t: '<object>', f3_d: '<object>', f4_f: '<number>', f5_e: '<null>', f6_b: '<object>', f7_y: '<string>', f8_b: '<boolean>', f9_j: '<object>', FxtQVJRuAtp: false});
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound(false, false, true, true);
        get_3 = objectStore_29.get(KeyRange_12);
    }
    catch (e){
    }

    var put_4 = objectStore_29.put({f0_z: '<object>', f1_r: '<array>', f2_z: '<object>', f3_g: '<null>', f4_q: '<null>', f5_n: '<number>', f6_i: '<array>', f7_f: '<object>', FxtQVJRuAtp: true});
    var put_5 = objectStore_29.put({f0_h: '<array>', f1_h: '<array>', f2_w: '<number>', f3_k: '<boolean>', FxtQVJRuAtp: null});
    var add_7 = objectStore_29.add({f0_b: '<array>', f1_g: '<array>', f2_t: '<boolean>', f3_n: '<array>', f4_y: '<object>', f5_j: '<boolean>', f6_i: '<number>', FxtQVJRuAtp: 'DbRF'});
    var add_8 = objectStore_29.add({f0_p: '<number>', f1_z: '<null>', f2_u: '<null>', f3_u: '<number>', f4_x: '<object>', FxtQVJRuAtp: null});
    var clear_6 = objectStore_29.clear();
    txn_46.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_46.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_46.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_47 = db.transaction(['objectStore_26'], 'readwrite', {durability:"relaxed"})
    var objectStore_26 = txn_47.objectStore('objectStore_26');
    var clear_7 = objectStore_26.clear();
    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt', null, true, false);
        getAllKeys_1 = objectStore_26.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only(true);
        getAllKeys_1 = objectStore_26.getAllKeys(KeyRange_15);
    }

    var clear_8 = objectStore_26.clear();
    var count_2 = objectStore_26.count();
    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.bound(null, 'yYeNzwJVcqUWzIOZAZTYHHGeQbVWNjZrXoncGSzUOwnIGcwHTZqAGSjGAXXaQymJePFTgElobmzNIXpRpKeuXklMgrxBqwILgbq', false, true);
        count_3 = objectStore_26.count(KeyRange_16);
    }
    catch (e){
    }

    var add_9 = objectStore_26.add({f0_j: '<null>', f1_r: '<array>', f2_g: '<boolean>', f3_i: '<null>', f4_h: '<number>', f5_b: '<null>', f6_l: '<object>', f7_r: '<number>', f8_y: '<string>', f9_r: '<boolean>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: null});
    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound(null, false);
        count_4 = objectStore_26.count(KeyRange_18);
    }
    catch (e){
    }

    var count_5 = objectStore_26.count();
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('yYeNzwJVcqUWzIOZAZTYHHGeQbVWNjZrXoncGSzUOwnIGcwHTZqAGSjGAXXaQymJePFTgElobmzNIXpRpKeuXklMgrxBqwILgbq', null, false, true);
        get_4 = objectStore_26.get(KeyRange_20);
    }
    catch (e){
    }

    var add_10 = objectStore_26.add({f0_n: '<number>', f1_q: '<string>', f2_j: '<string>', f3_d: '<object>', f4_p: '<array>', LtzcgFEZZasaaJwymqphpytkCfPbqApVvqNULJfarYoaG: null});
    var clear_9 = objectStore_26.clear();
    txn_47.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_47.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_47.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_48 = db.transaction(['objectStore_29', 'objectStore_28', 'objectStore_26'], 'readonly', {durability:"strict"})
    var objectStore_26 = txn_48.objectStore('objectStore_26');
    var getAll_1 = objectStore_26.getAll(2763206860);
    var count_6 = objectStore_26.count();
    var count_7;
    try{
        KeyRange_22 = IDBKeyRange.bound(null, true, true, false);
        count_7 = objectStore_26.count(KeyRange_22);
    }
    catch (e){
    }

    var count_8 = objectStore_26.count();
    var getAll_2 = objectStore_26.getAll();
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.only(null);
        get_5 = objectStore_26.get(KeyRange_24);
    }
    catch (e){
    }

    var index_2 = objectStore_26.index('index_26');
    var getAll_3;
    try{
        KeyRange_26 = IDBKeyRange.bound(null, null, true, true);
        getAll_3 = objectStore_26.getAll(KeyRange_26, 434470362);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only(null);
        getAll_3 = objectStore_26.getAll(KeyRange_27);
    }

    var index_3 = objectStore_26.index('index_27');
    var getAll_4;
    try{
        KeyRange_28 = IDBKeyRange.only('yYeNzwJVcqUWzIOZAZTYHHGeQbVWNjZrXoncGSzUOwnIGcwHTZqAGSjGAXXaQymJePFTgElobmzNIXpRpKeuXklMgrxBqwILgbq');
        getAll_4 = objectStore_26.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only(null);
        getAll_4 = objectStore_26.getAll(KeyRange_29);
    }

    var count_9;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('eeQfefIgmdkDScIsSMPtEqxBsVlWjPeYsWzCoTkaWqdjKUnzNDt', true);
        count_9 = objectStore_26.count(KeyRange_30);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_32 = IDBKeyRange.bound(null, null, true, true);
        count_10 = objectStore_26.count(KeyRange_32);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.only('yYeNzwJVcqUWzIOZAZTYHHGeQbVWNjZrXoncGSzUOwnIGcwHTZqAGSjGAXXaQymJePFTgElobmzNIXpRpKeuXklMgrxBqwILgbq');
        get_6 = objectStore_26.get(KeyRange_34);
    }
    catch (e){
    }

    txn_48.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_48.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_48.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_49 = db.transaction(['objectStore_28', 'objectStore_29'], 'readonly', {durability:"default"})
    var objectStore_28 = txn_49.objectStore('objectStore_28');
    txn_49.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_49.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_49.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9016')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};