let db;
const openRequest = window.indexedDB.open('str_3442', 9003187418800255)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_61');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_62', {keypath: 'FOCqFhqkHaxzYJalquUKpFDhfPZHYaxoTbZdnEONIDZyIsSbSkUQZXRuROSqiymlfBFEFrRKrCMyaANfgNRwOtzvik'});
    var put_0 = objectStore_0.put({f0_s: '<boolean>', f1_l: '<array>', f2_f: '<boolean>', f3_t: '<null>', f4_g: '<boolean>', f5_v: '<null>', f6_f: '<null>', f7_v: '<boolean>'}, 'YgCJEKiNgMsTNIWrNLcamTJjGlrTkvvU');
    var index_38 = objectStore_1.createIndex('index_38', 'test', {unique: true});
    var objectStore_2 = db.createObjectStore('objectStore_63', {keypath: 'Wdf', autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_64');
    var clear_2 = objectStore_1.clear();
    var clear_3 = objectStore_0.clear();
    var objectStore_4 = db.createObjectStore('objectStore_65');
    var objectStore_5 = db.createObjectStore('objectStore_66', {autoIncrement: true});
    objectStore_1.deleteIndex('index_38')
    var index_39 = objectStore_3.createIndex('index_39', 'test');
    var clear_4 = objectStore_4.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_80 = db.transaction(['objectStore_62'], 'readwrite', {durability:"default"})
    var objectStore_62 = txn_80.objectStore('objectStore_62');
    var put_1 = objectStore_62.put({f0_r: '<string>', f1_n: '<number>', f2_c: '<boolean>', f3_c: '<object>', f4_u: '<boolean>', f5_i: '<string>', f6_g: '<number>', f7_r: '<object>', f8_o: '<string>', f9_n: '<null>'}, 'hBSfvgMNWSPBcPqFardBq');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('hBSfvgMNWSPBcPqFardBq', 'hBSfvgMNWSPBcPqFardBq', true, false);
        delete_0 = objectStore_62.delete(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('hBSfvgMNWSPBcPqFardBq', 'hBSfvgMNWSPBcPqFardBq', true, true);
        get_0 = objectStore_62.get(KeyRange_2);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('hBSfvgMNWSPBcPqFardBq', false);
        count_0 = objectStore_62.count(KeyRange_4);
    }
    catch (e){
    }

    var clear_5 = objectStore_62.clear();
    var clear_6 = objectStore_62.clear();
    var getAllKeys_0 = objectStore_62.getAllKeys(2974394512);
    var getAll_0 = objectStore_62.getAll();
    var getAllKeys_1;
    txn_80.abort()
    try{
        KeyRange_6 = IDBKeyRange.only('hBSfvgMNWSPBcPqFardBq');
        getAllKeys_1 = objectStore_62.getAllKeys(KeyRange_6, 3908806201);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('hBSfvgMNWSPBcPqFardBq');
        getAllKeys_1 = objectStore_62.getAllKeys(KeyRange_7);
    }

    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_81 = db.transaction(['objectStore_66'], 'readwrite', {durability:"strict"})
    var objectStore_66;
    txn_81.abort()
    objectStore_66 = txn_81.objectStore('objectStore_66');
    var clear_7 = objectStore_66.clear();
    var add_0 = objectStore_66.add({f0_o: '<string>', f1_n: '<boolean>', f2_r: '<array>', f3_w: '<number>', f4_g: '<string>', f5_x: '<array>', f6_h: '<object>', f7_n: '<number>', f8_n: '<object>', f9_m: '<null>', f10_w: '<number>', f11_c: '<boolean>', f12_f: '<array>', f13_h: '<number>', f14_h: '<null>', f15_w: '<string>', f16_i: '<array>', f17_l: '<number>', f18_f: '<object>', f19_p: '<string>'}, 'svZwjTEHIk');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('svZwjTEHIk', 'svZwjTEHIk', false, false);
        get_1 = objectStore_66.get(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_66.put({f0_l: '<boolean>', f1_y: '<array>', f2_m: '<number>', f3_t: '<boolean>', f4_b: '<boolean>', f5_t: '<number>', f6_c: '<object>'}, 'dhOnSTPdmQahrbXsTxAbnHYrxBSOBGCPDINWMg');
    var getAllKeys_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('dhOnSTPdmQahrbXsTxAbnHYrxBSOBGCPDINWMg', 'dhOnSTPdmQahrbXsTxAbnHYrxBSOBGCPDINWMg', false, false);
        getAllKeys_2 = objectStore_66.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('svZwjTEHIk');
        getAllKeys_2 = objectStore_66.getAllKeys(KeyRange_11);
    }

    var getAll_1 = objectStore_66.getAll(4204773179);
    var put_3 = objectStore_66.put({f0_i: '<string>', f1_j: '<boolean>', f2_i: '<string>', f3_c: '<null>'}, 'SlxXToRkQOJlvXxkhuxfNcOOYPYanmYPVPdPdheubKEEFePTeWZLYIbbBDoZONlXikEjlznPkBhtyEriKw');
    var put_4 = objectStore_66.put({f0_h: '<array>'}, 'SZpVCCbpoXYCVaMObOcVtVgGvKUYVEMHiUCPOGop');
    var getAll_2;
    try{
        KeyRange_12 = IDBKeyRange.only('SZpVCCbpoXYCVaMObOcVtVgGvKUYVEMHiUCPOGop');
        getAll_2 = objectStore_66.getAll(KeyRange_12, 1580010116);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('svZwjTEHIk');
        getAll_2 = objectStore_66.getAll(KeyRange_13);
    }

    var put_5 = objectStore_66.put({f0_a: '<number>', f1_p: '<number>', f2_e: '<null>', f3_y: '<number>', f4_z: '<array>', f5_t: '<array>', f6_i: '<null>', f7_z: '<number>', f8_y: '<array>', f9_f: '<null>', f10_b: '<number>', f11_m: '<object>', f12_t: '<boolean>', f13_q: '<null>', f14_v: '<boolean>', f15_v: '<string>', f16_n: '<boolean>', f17_f: '<object>', f18_j: '<number>', f19_n: '<string>', f20_g: '<boolean>', f21_a: '<boolean>', f22_f: '<boolean>', f23_q: '<string>', f24_q: '<array>', f25_r: '<number>', f26_k: '<null>', f27_s: '<string>', f28_i: '<null>', f29_d: '<array>', f30_q: '<array>', f31_w: '<array>', f32_f: '<number>', f33_j: '<boolean>', f34_i: '<string>', f35_u: '<string>', f36_a: '<number>', f37_t: '<string>', f38_d: '<boolean>', f39_g: '<null>', f40_i: '<number>', f41_d: '<number>', f42_h: '<string>', f43_r: '<number>', f44_z: '<array>', f45_k: '<array>', f46_r: '<null>', f47_h: '<array>', f48_x: '<array>', f49_s: '<null>', f50_d: '<null>', f51_k: '<null>', f52_f: '<object>', f53_t: '<array>', f54_q: '<string>', f55_k: '<object>', f56_e: '<string>', f57_g: '<null>', f58_s: '<boolean>', f59_c: '<number>', f60_j: '<number>', f61_g: '<array>', f62_t: '<string>', f63_c: '<null>', f64_m: '<null>', f65_i: '<object>', f66_g: '<string>', f67_q: '<number>', f68_s: '<null>', f69_u: '<boolean>', f70_j: '<boolean>', f71_r: '<string>', f72_m: '<null>', f73_u: '<boolean>', f74_i: '<number>', f75_s: '<string>', f76_q: '<boolean>', f77_r: '<array>', f78_l: '<boolean>', f79_v: '<string>', f80_w: '<null>', f81_m: '<null>', f82_n: '<boolean>', f83_w: '<number>', f84_c: '<object>', f85_r: '<object>', f86_x: '<boolean>', f87_w: '<number>', f88_y: '<string>', f89_h: '<string>', f90_l: '<boolean>', f91_z: '<object>', f92_g: '<null>', f93_c: '<string>', f94_y: '<number>', f95_f: '<number>', f96_v: '<null>', f97_d: '<string>', f98_i: '<boolean>', f99_d: '<string>', f100_c: '<null>', f101_j: '<array>', f102_w: '<object>', f103_z: '<array>', f104_v: '<string>', f105_d: '<boolean>', f106_k: '<string>', f107_y: '<null>', f108_n: '<number>', f109_l: '<boolean>', f110_g: '<boolean>', f111_u: '<boolean>', f112_q: '<boolean>', f113_p: '<array>', f114_r: '<number>', f115_k: '<boolean>', f116_d: '<string>', f117_c: '<number>', f118_x: '<boolean>', f119_s: '<object>', f120_c: '<boolean>', f121_o: '<string>', f122_p: '<boolean>', f123_p: '<boolean>', f124_b: '<number>', f125_w: '<string>', f126_i: '<object>', f127_l: '<string>', f128_x: '<object>', f129_k: '<array>', f130_o: '<object>', f131_u: '<array>', f132_p: '<object>', f133_q: '<string>', f134_y: '<array>', f135_q: '<null>', f136_m: '<number>', f137_g: '<string>', f138_t: '<number>', f139_z: '<object>', f140_r: '<null>', f141_y: '<null>', f142_m: '<null>', f143_p: '<null>', f144_l: '<string>', f145_v: '<string>', f146_q: '<boolean>', f147_w: '<array>', f148_k: '<number>', f149_f: '<number>', f150_f: '<null>', f151_a: '<boolean>', f152_i: '<number>', f153_v: '<array>', f154_z: '<string>', f155_d: '<array>', f156_t: '<object>', f157_o: '<object>', f158_m: '<string>', f159_s: '<string>', f160_j: '<boolean>', f161_q: '<array>', f162_k: '<object>', f163_j: '<array>', f164_c: '<boolean>', f165_c: '<boolean>', f166_f: '<array>', f167_q: '<null>', f168_f: '<object>', f169_m: '<null>', f170_n: '<object>', f171_j: '<array>', f172_y: '<string>', f173_f: '<number>', f174_j: '<number>', f175_n: '<boolean>', f176_d: '<number>', f177_m: '<null>', f178_p: '<boolean>', f179_p: '<boolean>', f180_r: '<array>', f181_f: '<string>', f182_x: '<array>', f183_y: '<null>', f184_q: '<object>', f185_k: '<object>', f186_w: '<string>', f187_x: '<boolean>', f188_m: '<object>', f189_i: '<number>', f190_o: '<object>', f191_a: '<number>', f192_x: '<object>', f193_y: '<string>', f194_y: '<array>', f195_k: '<array>', f196_z: '<string>', f197_a: '<object>', f198_y: '<boolean>', f199_w: '<object>', f200_i: '<boolean>', f201_a: '<null>', f202_t: '<array>', f203_f: '<boolean>', f204_d: '<array>', f205_i: '<array>', f206_w: '<null>', f207_x: '<array>', f208_m: '<array>', f209_u: '<array>', f210_x: '<object>', f211_n: '<string>', f212_l: '<boolean>', f213_m: '<array>', f214_l: '<array>', f215_k: '<null>', f216_j: '<string>', f217_a: '<null>', f218_i: '<number>', f219_q: '<object>', f220_v: '<null>', f221_c: '<boolean>', f222_a: '<object>', f223_o: '<boolean>', f224_m: '<boolean>', f225_y: '<null>', f226_i: '<object>', f227_b: '<boolean>', f228_g: '<null>', f229_x: '<string>', f230_m: '<null>', f231_m: '<number>', f232_i: '<object>', f233_h: '<array>', f234_y: '<string>', f235_n: '<string>', f236_j: '<number>', f237_g: '<number>', f238_e: '<object>', f239_u: '<null>', f240_y: '<array>', f241_c: '<null>', f242_s: '<number>', f243_z: '<string>', f244_w: '<string>', f245_c: '<null>', f246_v: '<null>', f247_g: '<object>', f248_m: '<boolean>', f249_h: '<object>', f250_k: '<boolean>', f251_k: '<number>', f252_j: '<boolean>', f253_x: '<string>', f254_e: '<string>', f255_u: '<array>', f256_k: '<object>', f257_x: '<null>', f258_x: '<object>', f259_x: '<object>', f260_f: '<object>', f261_l: '<boolean>', f262_r: '<null>', f263_v: '<boolean>', f264_o: '<boolean>', f265_m: '<array>', f266_q: '<array>', f267_c: '<string>', f268_u: '<null>', f269_f: '<array>', f270_m: '<array>', f271_b: '<object>', f272_i: '<object>', f273_t: '<null>', f274_y: '<null>', f275_o: '<object>', f276_l: '<string>', f277_m: '<null>', f278_r: '<boolean>', f279_j: '<null>', f280_k: '<number>', f281_w: '<array>', f282_v: '<number>', f283_x: '<number>', f284_q: '<number>', f285_y: '<boolean>', f286_l: '<object>', f287_n: '<boolean>', f288_v: '<object>', f289_a: '<array>', f290_f: '<array>', f291_m: '<number>', f292_s: '<boolean>', f293_i: '<boolean>', f294_j: '<boolean>', f295_a: '<object>', f296_k: '<array>', f297_d: '<string>', f298_o: '<number>', f299_i: '<array>', f300_d: '<boolean>', f301_l: '<object>', f302_s: '<boolean>', f303_u: '<string>', f304_u: '<number>', f305_c: '<boolean>', f306_c: '<null>', f307_l: '<number>', f308_k: '<number>', f309_s: '<null>', f310_h: '<number>', f311_u: '<string>', f312_g: '<object>', f313_c: '<array>', f314_t: '<string>', f315_w: '<number>', f316_c: '<number>', f317_n: '<null>', f318_p: '<null>', f319_x: '<array>', f320_r: '<number>', f321_w: '<number>', f322_f: '<number>', f323_t: '<boolean>', f324_p: '<string>', f325_f: '<object>', f326_j: '<array>', f327_t: '<null>', f328_z: '<number>', f329_v: '<string>', f330_u: '<null>', f331_h: '<string>', f332_s: '<null>', f333_g: '<array>', f334_t: '<boolean>', f335_p: '<string>', f336_s: '<number>', f337_e: '<string>', f338_t: '<object>', f339_z: '<object>', f340_a: '<object>', f341_o: '<number>', f342_c: '<array>', f343_g: '<object>', f344_i: '<number>', f345_w: '<array>', f346_d: '<array>', f347_r: '<null>', f348_v: '<boolean>', f349_h: '<boolean>', f350_q: '<null>', f351_b: '<array>', f352_g: '<number>', f353_b: '<object>', f354_r: '<object>', f355_i: '<string>', f356_a: '<null>', f357_g: '<array>', f358_d: '<string>', f359_u: '<boolean>', f360_l: '<number>', f361_i: '<array>', f362_i: '<boolean>', f363_z: '<number>', f364_z: '<object>', f365_d: '<array>', f366_h: '<null>', f367_r: '<null>', f368_r: '<string>', f369_c: '<object>', f370_z: '<object>', f371_n: '<null>', f372_j: '<object>', f373_h: '<null>', f374_q: '<boolean>', f375_i: '<string>', f376_q: '<string>', f377_u: '<array>', f378_b: '<array>', f379_f: '<array>', f380_j: '<string>', f381_t: '<number>', f382_e: '<null>', f383_f: '<number>', f384_m: '<object>', f385_b: '<array>', f386_k: '<array>', f387_j: '<number>', f388_d: '<array>', f389_t: '<boolean>', f390_s: '<object>', f391_r: '<array>', f392_l: '<null>', f393_m: '<number>', f394_x: '<number>', f395_c: '<boolean>', f396_e: '<string>', f397_t: '<object>', f398_r: '<null>', f399_a: '<string>', f400_w: '<object>', f401_m: '<array>', f402_n: '<null>', f403_h: '<boolean>', f404_k: '<null>', f405_z: '<number>', f406_h: '<null>', f407_k: '<string>', f408_l: '<number>', f409_l: '<boolean>', f410_b: '<boolean>', f411_j: '<string>', f412_j: '<string>', f413_e: '<number>', f414_a: '<array>', f415_m: '<string>', f416_r: '<string>', f417_t: '<object>', f418_b: '<number>', f419_n: '<string>', f420_v: '<number>', f421_p: '<string>', f422_u: '<object>', f423_e: '<boolean>', f424_y: '<string>', f425_t: '<string>', f426_f: '<boolean>', f427_h: '<object>', f428_u: '<object>', f429_i: '<number>', f430_n: '<object>', f431_k: '<boolean>', f432_p: '<array>', f433_v: '<string>', f434_q: '<array>', f435_l: '<string>', f436_v: '<array>', f437_g: '<string>', f438_a: '<object>', f439_o: '<number>', f440_d: '<object>', f441_r: '<object>', f442_m: '<object>', f443_z: '<string>', f444_m: '<boolean>', f445_t: '<null>', f446_c: '<number>', f447_q: '<string>', f448_t: '<array>', f449_s: '<array>', f450_q: '<object>', f451_a: '<string>', f452_e: '<null>', f453_e: '<number>', f454_m: '<object>', f455_s: '<object>', f456_w: '<string>', f457_y: '<object>', f458_g: '<number>', f459_x: '<string>', f460_x: '<boolean>', f461_b: '<number>'}, 'tlXYVVJbqHSWDZzeXWSBjtlgRAEXfYktpiTbQVpFedbIycIRgprebUXp');
    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_81.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_82 = db.transaction(['objectStore_61', 'objectStore_64'], 'readonly', {durability:"strict"})
    var objectStore_64 = txn_82.objectStore('objectStore_64');
    var index_0 = objectStore_64.index('index_39');
    txn_82.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_82.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_82.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_83 = db.transaction(['objectStore_65'], 'readwrite', {durability:"relaxed"})
    var objectStore_65 = txn_83.objectStore('objectStore_65');
    var put_6;
    txn_83.abort()
    put_6 = objectStore_65.put({f0_b: '<boolean>', f1_c: '<array>', f2_r: '<boolean>', f3_s: '<null>', f4_w: '<null>', f5_n: '<boolean>', f6_v: '<object>', f7_c: '<boolean>'}, 'QemIVQKYsFePCmPZwSZKpGSVZoawutxWD');
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('QemIVQKYsFePCmPZwSZKpGSVZoawutxWD', 'QemIVQKYsFePCmPZwSZKpGSVZoawutxWD', false, true);
        get_2 = objectStore_65.get(KeyRange_14);
    }
    catch (e){
    }

    var put_7 = objectStore_65.put({f0_y: '<null>', f1_q: '<boolean>'}, 'UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih');
    var get_3;
    txn_83.commit()
    try{
        KeyRange_16 = IDBKeyRange.bound('UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih', 'UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih', true, true);
        get_3 = objectStore_65.get(KeyRange_16);
    }
    catch (e){
    }

    var add_1 = objectStore_65.add({f0_o: '<null>', f1_r: '<string>', f2_d: '<string>', f3_c: '<object>', f4_m: '<string>', f5_t: '<number>', f6_t: '<null>', f7_c: '<object>', f8_j: '<number>', f9_b: '<string>', f10_l: '<null>', f11_l: '<object>', f12_o: '<array>', f13_p: '<null>', f14_r: '<object>', f15_t: '<object>', f16_q: '<number>', f17_x: '<number>', f18_z: '<object>', f19_h: '<object>', f20_z: '<array>', f21_w: '<null>', f22_f: '<string>', f23_z: '<null>', f24_o: '<string>', f25_l: '<number>', f26_a: '<boolean>', f27_y: '<array>', f28_q: '<array>', f29_a: '<string>', f30_j: '<string>', f31_q: '<string>', f32_y: '<null>', f33_z: '<boolean>', f34_q: '<boolean>', f35_m: '<number>', f36_g: '<boolean>', f37_z: '<object>', f38_t: '<array>', f39_g: '<number>', f40_r: '<string>', f41_r: '<number>', f42_n: '<boolean>', f43_h: '<null>', f44_v: '<number>', f45_g: '<boolean>', f46_m: '<boolean>', f47_x: '<object>', f48_u: '<object>', f49_v: '<array>', f50_z: '<array>', f51_a: '<string>', f52_z: '<number>', f53_u: '<boolean>', f54_o: '<array>', f55_p: '<number>', f56_z: '<object>', f57_r: '<number>', f58_e: '<number>', f59_n: '<boolean>', f60_q: '<number>', f61_u: '<number>', f62_j: '<number>', f63_j: '<number>', f64_q: '<null>', f65_j: '<string>', f66_l: '<boolean>', f67_b: '<number>', f68_b: '<null>', f69_k: '<boolean>', f70_g: '<number>', f71_o: '<array>', f72_t: '<boolean>', f73_y: '<string>', f74_z: '<null>', f75_n: '<null>', f76_q: '<null>', f77_q: '<string>', f78_d: '<boolean>', f79_r: '<string>', f80_k: '<null>', f81_h: '<null>', f82_s: '<null>', f83_p: '<number>', f84_z: '<object>', f85_m: '<string>', f86_n: '<array>', f87_r: '<number>', f88_c: '<string>', f89_i: '<boolean>', f90_j: '<array>', f91_z: '<object>', f92_x: '<boolean>', f93_z: '<number>', f94_h: '<number>', f95_o: '<string>', f96_w: '<number>', f97_o: '<null>', f98_r: '<string>', f99_y: '<boolean>', f100_w: '<object>', f101_e: '<array>', f102_o: '<number>', f103_v: '<number>', f104_c: '<array>', f105_u: '<boolean>', f106_r: '<string>', f107_z: '<null>', f108_u: '<number>', f109_a: '<string>', f110_t: '<null>', f111_i: '<object>', f112_q: '<string>', f113_n: '<number>', f114_x: '<null>', f115_d: '<string>', f116_o: '<number>', f117_v: '<null>', f118_g: '<null>', f119_x: '<array>', f120_v: '<string>', f121_s: '<boolean>', f122_j: '<string>', f123_j: '<object>', f124_s: '<object>', f125_d: '<number>', f126_a: '<string>', f127_s: '<array>', f128_g: '<object>', f129_k: '<object>', f130_e: '<number>', f131_s: '<string>', f132_e: '<null>', f133_p: '<number>', f134_b: '<boolean>', f135_k: '<boolean>', f136_t: '<array>', f137_h: '<array>', f138_d: '<boolean>', f139_d: '<object>', f140_j: '<string>', f141_p: '<object>', f142_b: '<number>', f143_q: '<boolean>', f144_n: '<object>', f145_s: '<string>', f146_h: '<string>', f147_i: '<string>', f148_u: '<string>', f149_o: '<object>', f150_d: '<boolean>', f151_x: '<object>', f152_c: '<string>', f153_z: '<string>', f154_h: '<boolean>', f155_t: '<null>', f156_h: '<null>', f157_d: '<object>', f158_g: '<boolean>', f159_d: '<boolean>', f160_p: '<null>', f161_z: '<number>', f162_w: '<object>', f163_s: '<boolean>', f164_a: '<boolean>', f165_q: '<number>', f166_m: '<string>', f167_t: '<string>', f168_j: '<boolean>'}, 'XntmFQIkqLLXZhebvKKdDcDpWBnYdsuHnCIIkVW');
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('QemIVQKYsFePCmPZwSZKpGSVZoawutxWD', 'XntmFQIkqLLXZhebvKKdDcDpWBnYdsuHnCIIkVW', true, true);
        get_4 = objectStore_65.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih', 'UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih', true, false);
        getAll_3 = objectStore_65.getAll(KeyRange_20, 4117154827);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih');
        getAll_3 = objectStore_65.getAll(KeyRange_21);
    }

    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_83.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_83.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_84 = db.transaction(['objectStore_65'], 'readwrite', {durability:"strict"})
    var objectStore_65 = txn_84.objectStore('objectStore_65');
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.only('QemIVQKYsFePCmPZwSZKpGSVZoawutxWD');
        get_5 = objectStore_65.get(KeyRange_22);
    }
    catch (e){
    }

    var clear_8 = objectStore_65.clear();
    var add_2 = objectStore_65.add({f0_s: '<string>'}, 'NncpffjtdVGOtwhRxcOzqKfKMprEBRUayvqnLrKSupCiZaqPiiaUEZ');
    var getAllKeys_3 = objectStore_65.getAllKeys();
    var count_1 = objectStore_65.count();
    var put_8 = objectStore_65.put({f0_n: '<object>', f1_w: '<object>', f2_k: '<array>', f3_e: '<null>', f4_p: '<array>', f5_c: '<boolean>', f6_x: '<null>'}, 'CAWSSwyUhHwggTaFVZZsCVlCiBvjJRkSbPurtaxlRaEjNEKUvLzprzQdjxVJUHAuRisTydOopyiJuK');
    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('NncpffjtdVGOtwhRxcOzqKfKMprEBRUayvqnLrKSupCiZaqPiiaUEZ', 'XntmFQIkqLLXZhebvKKdDcDpWBnYdsuHnCIIkVW', false, true);
        get_6 = objectStore_65.get(KeyRange_24);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('UvNIHDDNwQFSStCVetWnnqHTjzoydrlBGeOmySkHBoaQzrniThQmjAbJpHooZyikOwwtLSih', 'QemIVQKYsFePCmPZwSZKpGSVZoawutxWD', false, false);
        get_7 = objectStore_65.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_28 = IDBKeyRange.only('QemIVQKYsFePCmPZwSZKpGSVZoawutxWD');
        getAll_4 = objectStore_65.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('CAWSSwyUhHwggTaFVZZsCVlCiBvjJRkSbPurtaxlRaEjNEKUvLzprzQdjxVJUHAuRisTydOopyiJuK');
        getAll_4 = objectStore_65.getAll(KeyRange_29);
    }

    var count_2;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('CAWSSwyUhHwggTaFVZZsCVlCiBvjJRkSbPurtaxlRaEjNEKUvLzprzQdjxVJUHAuRisTydOopyiJuK', false);
        count_2 = objectStore_65.count(KeyRange_30);
    }
    catch (e){
    }

    var clear_9 = objectStore_65.clear();
    txn_84.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_84.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7400')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};