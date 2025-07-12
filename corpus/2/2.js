let db;
const openRequest = window.indexedDB.open('str_9016', 1534895611689624)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_9');
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_d: '<array>', f1_g: '<null>', f2_c: '<null>', f3_y: '<number>', f4_l: '<array>', f5_r: '<object>'}, 'ZRrAqFlcxagrEsDpDVyROEh');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ZRrAqFlcxagrEsDpDVyROEh', true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_7 = objectStore_0.createIndex('index_7', 'test', {unique: false, multiEntry: false});
    var clear_1 = objectStore_0.clear();
    var index_8 = objectStore_0.createIndex('index_8', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_10', {autoIncrement: false});
    var add_1 = objectStore_1.add({f0_f: '<array>', f1_w: '<number>', f2_i: '<string>', f3_y: '<boolean>', f4_y: '<string>', f5_y: '<null>', f6_h: '<string>'}, 'MJLPAPMyUXjiXjXbmIUfURtPzOFzoIsAygTRdNRyNWPnoFvfFlevHTVAXzcXTMUgozR');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('MJLPAPMyUXjiXjXbmIUfURtPzOFzoIsAygTRdNRyNWPnoFvfFlevHTVAXzcXTMUgozR', true);
        getAll_0 = objectStore_1.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('MJLPAPMyUXjiXjXbmIUfURtPzOFzoIsAygTRdNRyNWPnoFvfFlevHTVAXzcXTMUgozR');
        getAll_0 = objectStore_1.getAll(KeyRange_3);
    }

    var add_2 = objectStore_0.add({f0_i: '<object>', f1_h: '<array>', f2_z: '<array>', f3_q: '<number>', f4_c: '<array>'}, 'uhcqLQoV');
    var clear_2 = objectStore_0.clear();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('ZRrAqFlcxagrEsDpDVyROEh', false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var add_3 = objectStore_0.add({f0_k: '<boolean>', f1_m: '<number>', f2_e: '<array>', f3_p: '<array>', f4_e: '<number>', f5_y: '<null>', f6_d: '<number>', f7_f: '<array>', f8_n: '<object>', f9_q: '<null>', f10_n: '<boolean>', f11_e: '<object>', f12_u: '<string>', f13_q: '<string>', f14_d: '<array>', f15_a: '<object>', f16_m: '<string>', f17_f: '<number>', f18_c: '<boolean>', f19_s: '<boolean>', f20_l: '<boolean>', f21_y: '<boolean>', f22_j: '<string>', f23_i: '<null>', f24_n: '<string>', f25_s: '<null>', f26_f: '<array>', f27_j: '<null>', f28_b: '<boolean>', f29_d: '<number>', f30_n: '<array>', f31_j: '<object>', f32_u: '<string>', f33_e: '<boolean>', f34_b: '<null>', f35_y: '<object>', f36_v: '<boolean>', f37_a: '<null>', f38_o: '<number>', f39_y: '<array>', f40_b: '<object>', f41_x: '<string>', f42_d: '<number>', f43_p: '<null>', f44_y: '<number>', f45_x: '<null>', f46_a: '<boolean>', f47_l: '<array>', f48_r: '<null>', f49_x: '<array>', f50_n: '<null>', f51_a: '<null>', f52_i: '<array>', f53_c: '<array>', f54_s: '<boolean>', f55_h: '<null>', f56_t: '<string>', f57_n: '<number>', f58_q: '<object>', f59_b: '<array>', f60_w: '<string>', f61_t: '<array>', f62_w: '<boolean>', f63_p: '<array>', f64_g: '<object>', f65_k: '<array>', f66_a: '<object>', f67_s: '<array>', f68_o: '<boolean>', f69_g: '<boolean>', f70_t: '<null>', f71_e: '<number>', f72_o: '<string>', f73_n: '<string>', f74_m: '<number>', f75_r: '<boolean>', f76_d: '<boolean>', f77_d: '<boolean>', f78_h: '<number>', f79_n: '<object>', f80_x: '<null>', f81_x: '<array>', f82_q: '<object>', f83_c: '<null>', f84_a: '<number>', f85_h: '<null>', f86_b: '<array>', f87_d: '<string>', f88_t: '<boolean>', f89_p: '<object>', f90_u: '<null>', f91_m: '<object>', f92_l: '<array>', f93_g: '<boolean>', f94_j: '<array>', f95_z: '<null>', f96_o: '<number>', f97_f: '<array>', f98_b: '<array>', f99_e: '<boolean>', f100_k: '<string>', f101_l: '<string>', f102_t: '<object>', f103_l: '<null>', f104_p: '<array>', f105_h: '<object>', f106_m: '<array>', f107_p: '<number>', f108_x: '<null>', f109_t: '<object>', f110_r: '<object>', f111_r: '<string>', f112_t: '<string>', f113_b: '<object>', f114_u: '<boolean>', f115_s: '<number>', f116_s: '<object>', f117_e: '<boolean>', f118_h: '<object>', f119_r: '<boolean>', f120_l: '<object>', f121_l: '<boolean>', f122_d: '<string>', f123_x: '<null>', f124_k: '<string>', f125_w: '<null>', f126_i: '<string>', f127_f: '<object>', f128_s: '<array>', f129_c: '<boolean>', f130_o: '<null>', f131_v: '<array>', f132_u: '<string>', f133_l: '<number>', f134_q: '<array>', f135_z: '<array>', f136_r: '<boolean>', f137_p: '<array>', f138_e: '<number>', f139_e: '<null>', f140_t: '<boolean>', f141_m: '<boolean>', f142_r: '<object>', f143_r: '<number>', f144_e: '<string>', f145_f: '<string>', f146_f: '<null>', f147_k: '<boolean>', f148_r: '<number>', f149_w: '<null>', f150_f: '<boolean>', f151_v: '<object>', f152_q: '<object>', f153_m: '<boolean>', f154_e: '<boolean>', f155_g: '<boolean>', f156_s: '<string>', f157_t: '<null>', f158_g: '<boolean>', f159_s: '<string>', f160_s: '<boolean>', f161_j: '<string>', f162_f: '<number>', f163_t: '<boolean>', f164_f: '<boolean>', f165_j: '<null>', f166_y: '<array>', f167_y: '<boolean>', f168_e: '<string>', f169_p: '<number>', f170_l: '<null>', f171_n: '<number>', f172_a: '<string>', f173_z: '<null>', f174_h: '<array>', f175_q: '<object>', f176_d: '<null>', f177_s: '<object>', f178_z: '<string>', f179_t: '<null>', f180_u: '<object>', f181_t: '<boolean>', f182_z: '<boolean>', f183_j: '<number>', f184_a: '<null>', f185_a: '<number>', f186_l: '<null>', f187_e: '<number>', f188_j: '<array>', f189_r: '<array>', f190_c: '<null>', f191_m: '<object>', f192_e: '<number>', f193_o: '<array>', f194_k: '<array>', f195_i: '<boolean>', f196_j: '<number>', f197_p: '<object>', f198_w: '<array>', f199_y: '<string>', f200_f: '<object>', f201_e: '<string>', f202_o: '<string>', f203_x: '<number>', f204_x: '<number>', f205_w: '<number>', f206_r: '<object>', f207_r: '<boolean>', f208_t: '<number>', f209_u: '<array>', f210_z: '<string>', f211_k: '<boolean>', f212_l: '<number>', f213_v: '<boolean>', f214_o: '<string>', f215_x: '<string>', f216_n: '<null>', f217_o: '<array>', f218_t: '<null>', f219_z: '<array>', f220_i: '<array>', f221_o: '<object>', f222_r: '<boolean>', f223_q: '<null>', f224_f: '<array>', f225_q: '<boolean>', f226_y: '<null>', f227_g: '<boolean>', f228_o: '<number>', f229_t: '<array>', f230_g: '<null>', f231_l: '<string>', f232_a: '<null>', f233_v: '<boolean>', f234_p: '<object>', f235_m: '<null>', f236_f: '<object>', f237_o: '<string>', f238_c: '<boolean>', f239_l: '<object>', f240_z: '<null>', f241_v: '<null>', f242_n: '<object>', f243_f: '<boolean>', f244_y: '<null>', f245_m: '<object>', f246_w: '<boolean>', f247_g: '<null>', f248_w: '<number>', f249_v: '<string>', f250_b: '<string>', f251_h: '<object>', f252_p: '<boolean>', f253_h: '<boolean>', f254_n: '<string>', f255_k: '<boolean>', f256_o: '<boolean>', f257_v: '<array>', f258_v: '<number>', f259_x: '<null>', f260_d: '<array>', f261_z: '<array>', f262_m: '<number>', f263_z: '<null>', f264_v: '<null>', f265_w: '<array>', f266_e: '<object>', f267_c: '<null>', f268_w: '<array>', f269_n: '<boolean>', f270_x: '<number>', f271_p: '<string>', f272_m: '<boolean>', f273_r: '<string>', f274_d: '<object>', f275_s: '<number>', f276_n: '<boolean>', f277_v: '<string>', f278_z: '<string>', f279_n: '<null>', f280_u: '<array>', f281_j: '<string>', f282_x: '<string>', f283_k: '<array>', f284_c: '<array>', f285_a: '<boolean>', f286_e: '<array>', f287_n: '<string>', f288_c: '<array>', f289_p: '<null>', f290_w: '<number>', f291_j: '<null>', f292_j: '<number>', f293_d: '<string>', f294_o: '<array>', f295_l: '<number>', f296_j: '<boolean>', f297_s: '<string>', f298_v: '<object>', f299_k: '<object>', f300_b: '<null>', f301_y: '<string>', f302_f: '<number>', f303_d: '<string>', f304_o: '<array>', f305_p: '<array>', f306_m: '<object>', f307_c: '<object>', f308_x: '<string>', f309_u: '<object>', f310_t: '<object>', f311_h: '<null>', f312_a: '<array>', f313_q: '<array>', f314_f: '<object>', f315_y: '<array>', f316_e: '<boolean>', f317_d: '<null>', f318_h: '<array>', f319_y: '<string>', f320_v: '<object>', f321_a: '<string>', f322_h: '<boolean>', f323_i: '<number>', f324_f: '<boolean>', f325_f: '<object>', f326_k: '<boolean>', f327_k: '<array>', f328_l: '<array>', f329_p: '<string>', f330_o: '<boolean>', f331_d: '<array>', f332_u: '<number>', f333_d: '<object>', f334_e: '<string>', f335_g: '<number>', f336_t: '<number>', f337_j: '<array>', f338_b: '<null>', f339_k: '<number>', f340_h: '<null>', f341_a: '<null>', f342_l: '<object>', f343_x: '<null>', f344_k: '<string>', f345_s: '<string>', f346_n: '<object>', f347_m: '<boolean>', f348_a: '<null>', f349_l: '<array>', f350_f: '<string>', f351_i: '<null>', f352_g: '<boolean>', f353_r: '<object>', f354_x: '<array>', f355_d: '<string>', f356_j: '<object>', f357_i: '<string>', f358_x: '<string>', f359_m: '<boolean>', f360_n: '<boolean>', f361_z: '<array>', f362_d: '<string>', f363_y: '<number>', f364_x: '<object>', f365_o: '<number>'}, 'JpiGnKdvkSsSWLIZSoAyUPrhEOCqHWJ');
    var put_0 = objectStore_1.put({f0_z: '<string>', f1_j: '<null>', f2_s: '<string>', f3_c: '<object>', f4_y: '<object>', f5_w: '<boolean>', f6_e: '<boolean>', f7_s: '<null>', f8_a: '<number>'}, 'PKhIjgLMHNZeoFJSIEXdzSWmgsWxwoeGqievqnPAyTjMyAhxKaTDehMHhMtPLWzGo');
    var objectStore_2 = db.createObjectStore('objectStore_11', {keypath: 'JKedLWThoRpkhfwGkrprBTYYDMcmrDbpmNewsfOHYYKWTULrSDGIIIHTqfCSvwsBglnmEkfIVwsigaIqBr'});
    var add_4 = objectStore_0.add({f0_r: '<boolean>', f1_q: '<null>', f2_r: '<number>', f3_n: '<object>', f4_y: '<null>', f5_q: '<null>'}, 'hcAlLcKEFv');
    var objectStore_3 = db.createObjectStore('objectStore_12', {keypath: 'etEAbNbDIeWnDyrncFIkOuGAynFnpbCLm'});
    var put_1 = objectStore_2.put({f0_h: '<number>', f1_f: '<array>', f2_x: '<null>', f3_a: '<number>', f4_s: '<number>', f5_m: '<null>', f6_a: '<boolean>', f7_k: '<boolean>', f8_c: '<null>', f9_p: '<null>', JKedLWThoRpkhfwGkrprBTYYDMcmrDbpmNewsfOHYYKWTULrSDGIIIHTqfCSvwsBglnmEkfIVwsigaIqBr: false});
    var add_5 = objectStore_0.add({f0_n: '<object>', f1_d: '<string>', f2_a: '<number>', f3_c: '<object>', f4_z: '<number>', f5_v: '<object>', f6_u: '<array>', f7_k: '<array>', f8_b: '<null>', f9_a: '<boolean>', f10_x: '<number>', f11_g: '<number>', f12_m: '<object>', f13_j: '<string>', f14_n: '<null>', f15_y: '<null>', f16_d: '<null>', f17_q: '<boolean>', f18_p: '<array>', f19_m: '<object>', f20_t: '<array>', f21_u: '<null>', f22_h: '<null>', f23_h: '<null>', f24_a: '<null>', f25_r: '<boolean>', f26_y: '<null>', f27_z: '<object>', f28_h: '<boolean>', f29_v: '<string>', f30_o: '<object>', f31_n: '<object>', f32_h: '<object>', f33_u: '<array>', f34_l: '<null>', f35_k: '<boolean>', f36_w: '<boolean>', f37_d: '<array>', f38_s: '<object>', f39_e: '<boolean>', f40_o: '<null>', f41_d: '<boolean>', f42_i: '<number>', f43_y: '<number>', f44_g: '<null>', f45_j: '<string>', f46_p: '<array>', f47_l: '<array>', f48_v: '<string>', f49_d: '<object>', f50_r: '<array>', f51_p: '<array>', f52_o: '<array>', f53_d: '<number>', f54_d: '<null>', f55_h: '<array>', f56_w: '<boolean>', f57_q: '<null>', f58_o: '<number>', f59_t: '<number>', f60_c: '<boolean>', f61_w: '<null>', f62_f: '<number>', f63_b: '<array>', f64_j: '<string>', f65_j: '<string>', f66_m: '<null>', f67_x: '<object>', f68_z: '<boolean>', f69_d: '<array>', f70_s: '<number>', f71_p: '<boolean>', f72_a: '<string>', f73_v: '<number>', f74_b: '<number>', f75_b: '<object>', f76_s: '<string>', f77_e: '<object>', f78_y: '<object>', f79_r: '<object>', f80_z: '<boolean>', f81_m: '<string>', f82_p: '<null>', f83_k: '<boolean>', f84_p: '<null>', f85_h: '<string>', f86_w: '<null>', f87_e: '<number>', f88_i: '<object>', f89_i: '<null>', f90_k: '<array>', f91_f: '<object>', f92_s: '<number>', f93_t: '<array>', f94_z: '<boolean>', f95_z: '<string>', f96_b: '<null>', f97_a: '<array>', f98_d: '<boolean>', f99_w: '<string>', f100_k: '<object>', f101_d: '<null>', f102_d: '<array>', f103_l: '<number>', f104_s: '<null>', f105_j: '<null>', f106_y: '<number>', f107_h: '<string>', f108_g: '<null>', f109_o: '<number>', f110_q: '<string>', f111_o: '<number>', f112_m: '<object>', f113_e: '<number>', f114_g: '<array>', f115_z: '<null>', f116_e: '<null>', f117_a: '<string>', f118_h: '<boolean>', f119_x: '<boolean>', f120_p: '<null>', f121_h: '<number>', f122_d: '<object>', f123_g: '<object>', f124_y: '<object>', f125_g: '<null>', f126_b: '<string>', f127_l: '<array>', f128_w: '<string>', f129_s: '<string>', f130_y: '<null>', f131_r: '<null>', f132_g: '<object>', f133_g: '<string>', f134_k: '<boolean>', f135_a: '<null>', f136_b: '<array>', f137_w: '<string>', f138_w: '<string>', f139_b: '<object>', f140_m: '<array>', f141_e: '<array>', f142_t: '<object>', f143_g: '<string>', f144_v: '<string>', f145_i: '<array>', f146_l: '<array>', f147_x: '<array>', f148_u: '<number>', f149_u: '<null>', f150_s: '<null>', f151_p: '<object>', f152_g: '<null>', f153_f: '<object>', f154_v: '<array>', f155_b: '<number>', f156_r: '<array>', f157_n: '<boolean>', f158_a: '<null>', f159_o: '<null>', f160_a: '<array>', f161_m: '<string>', f162_s: '<string>', f163_b: '<string>', f164_c: '<boolean>', f165_n: '<object>', f166_s: '<string>', f167_z: '<boolean>', f168_g: '<object>', f169_r: '<string>', f170_m: '<null>', f171_c: '<null>', f172_n: '<null>', f173_j: '<string>', f174_t: '<array>', f175_l: '<array>', f176_l: '<array>', f177_m: '<array>', f178_o: '<null>', f179_c: '<null>', f180_l: '<object>', f181_b: '<number>', f182_j: '<number>', f183_m: '<object>', f184_y: '<null>', f185_d: '<string>', f186_o: '<object>', f187_u: '<object>', f188_s: '<null>', f189_d: '<null>', f190_l: '<string>', f191_r: '<number>', f192_a: '<string>', f193_s: '<boolean>', f194_h: '<null>', f195_j: '<array>', f196_r: '<null>', f197_h: '<number>', f198_e: '<null>', f199_c: '<boolean>', f200_a: '<array>', f201_s: '<boolean>', f202_d: '<boolean>', f203_n: '<object>', f204_g: '<null>', f205_v: '<string>', f206_s: '<array>', f207_n: '<number>', f208_m: '<string>', f209_s: '<object>', f210_r: '<array>', f211_t: '<string>', f212_n: '<null>', f213_q: '<number>', f214_x: '<string>', f215_n: '<object>', f216_b: '<string>', f217_e: '<number>', f218_z: '<string>', f219_m: '<boolean>', f220_t: '<object>', f221_a: '<string>', f222_p: '<boolean>', f223_i: '<string>', f224_b: '<boolean>', f225_l: '<object>', f226_q: '<number>', f227_s: '<null>', f228_m: '<object>', f229_a: '<boolean>', f230_s: '<null>', f231_x: '<number>', f232_f: '<array>', f233_a: '<boolean>', f234_t: '<string>', f235_t: '<number>', f236_d: '<object>', f237_y: '<boolean>', f238_g: '<boolean>', f239_x: '<object>', f240_c: '<boolean>', f241_e: '<boolean>', f242_g: '<number>', f243_z: '<object>', f244_m: '<null>', f245_h: '<boolean>', f246_e: '<number>', f247_v: '<null>', f248_g: '<array>', f249_o: '<number>', f250_k: '<null>', f251_q: '<null>', f252_i: '<object>', f253_l: '<string>', f254_d: '<number>', f255_m: '<array>', f256_x: '<boolean>', f257_f: '<number>', f258_l: '<string>', f259_a: '<number>', f260_c: '<boolean>', f261_c: '<null>', f262_a: '<string>', f263_j: '<string>', f264_u: '<boolean>', f265_q: '<boolean>', f266_p: '<boolean>', f267_a: '<array>', f268_z: '<boolean>', f269_c: '<boolean>', f270_s: '<string>', f271_f: '<number>', f272_d: '<number>', f273_d: '<null>', f274_g: '<boolean>', f275_e: '<object>', f276_e: '<string>', f277_t: '<object>', f278_m: '<boolean>', f279_s: '<number>', f280_l: '<number>', f281_s: '<null>', f282_s: '<boolean>', f283_y: '<number>', f284_b: '<object>', f285_k: '<number>', f286_j: '<number>', f287_b: '<array>', f288_t: '<null>', f289_k: '<boolean>', f290_z: '<object>', f291_a: '<object>', f292_d: '<string>', f293_j: '<array>', f294_e: '<null>', f295_m: '<string>', f296_b: '<number>', f297_p: '<number>', f298_d: '<array>', f299_x: '<number>', f300_v: '<array>', f301_n: '<string>', f302_g: '<null>', f303_r: '<string>', f304_v: '<object>', f305_h: '<string>', f306_k: '<string>', f307_y: '<array>', f308_l: '<object>', f309_w: '<null>', f310_q: '<number>', f311_k: '<array>', f312_y: '<string>', f313_o: '<array>', f314_i: '<array>', f315_p: '<number>', f316_w: '<number>', f317_n: '<null>', f318_c: '<null>', f319_y: '<number>', f320_o: '<null>', f321_v: '<null>', f322_a: '<boolean>', f323_m: '<null>', f324_u: '<null>', f325_s: '<array>', f326_f: '<boolean>', f327_v: '<object>', f328_m: '<object>', f329_p: '<object>', f330_f: '<boolean>', f331_s: '<object>', f332_y: '<null>', f333_z: '<array>', f334_f: '<object>', f335_y: '<array>', f336_x: '<array>', f337_e: '<boolean>', f338_c: '<number>', f339_g: '<object>', f340_p: '<boolean>', f341_e: '<boolean>', f342_j: '<string>', f343_u: '<string>', f344_c: '<string>', f345_y: '<boolean>', f346_x: '<object>', f347_p: '<boolean>', f348_l: '<number>', f349_j: '<array>', f350_u: '<number>', f351_u: '<string>', f352_j: '<object>', f353_j: '<number>', f354_f: '<boolean>', f355_c: '<string>'}, 'AIVhnubIhghJUMnPMhFeGpTeljaBVuEWwKqqXwqgWylfBAUKmulfihhOkRagzdvIWz');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_15 = db.transaction(['objectStore_12', 'objectStore_10'], 'readonly', {durability:"default"})
    var objectStore_12 = txn_15.objectStore('objectStore_12');
    txn_15.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_15.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_15.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_16 = db.transaction(['objectStore_12', 'objectStore_10', 'objectStore_9'], 'readwrite', {durability:"default"})
    var objectStore_9 = txn_16.objectStore('objectStore_9');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.only('uhcqLQoV');
        delete_0 = objectStore_9.delete(KeyRange_6);
    }
    catch (e){
    }

    var add_6 = objectStore_9.add({f0_g: '<number>', f1_a: '<object>'}, 'teNaqUSbCSoxXntuScFgvxp');
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('hcAlLcKEFv', 'hcAlLcKEFv', false, false);
        get_2 = objectStore_9.get(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_9.put({f0_p: '<array>', f1_a: '<object>', f2_o: '<object>', f3_p: '<boolean>', f4_n: '<null>', f5_t: '<object>', f6_v: '<null>', f7_x: '<array>'}, 'hFQja');
    var put_3 = objectStore_9.put({f0_o: '<number>', f1_x: '<array>', f2_k: '<string>', f3_u: '<number>', f4_t: '<object>', f5_d: '<string>', f6_c: '<array>', f7_n: '<null>', f8_a: '<number>', f9_b: '<string>'}, 'QNqimdpgOGUDWBpAUOkTpLRwLpecdUjMgXhRwFJlDXMluNOa');
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('JpiGnKdvkSsSWLIZSoAyUPrhEOCqHWJ', 'AIVhnubIhghJUMnPMhFeGpTeljaBVuEWwKqqXwqgWylfBAUKmulfihhOkRagzdvIWz', true, false);
        get_3 = objectStore_9.get(KeyRange_10);
    }
    catch (e){
    }

    var count_0 = objectStore_9.count();
    var put_4 = objectStore_9.put({f0_s: '<string>', f1_x: '<object>', f2_i: '<null>', f3_e: '<null>', f4_h: '<null>', f5_p: '<object>', f6_f: '<number>', f7_j: '<null>'}, 'XvlWMITOAmeGsATjxqJDlUBZdUuaAnQzWCxkFpCqVlz');
    var count_1 = objectStore_9.count();
    var clear_3 = objectStore_9.clear();
    txn_16.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_16.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_16.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_17 = db.transaction(['objectStore_11'], 'readonly', {durability:"default"})
    var objectStore_11 = txn_17.objectStore('objectStore_11');
    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.only(false);
        get_4 = objectStore_11.get(KeyRange_12);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.bound(false, false, true, false);
        count_2 = objectStore_11.count(KeyRange_14);
    }
    catch (e){
    }

    var count_3 = objectStore_11.count();
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound(false, false, true, true);
        get_5 = objectStore_11.get(KeyRange_16);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.bound(false, false, false, false);
        get_6 = objectStore_11.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.only(false);
        getAll_1 = objectStore_11.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only(false);
        getAll_1 = objectStore_11.getAll(KeyRange_21);
    }

    var getAllKeys_0;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound(false, true);
        getAllKeys_0 = objectStore_11.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only(false);
        getAllKeys_0 = objectStore_11.getAllKeys(KeyRange_23);
    }

    var count_4 = objectStore_11.count();
    txn_17.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_17.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_17.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_18 = db.transaction(['objectStore_12'], 'readonly', {durability:"relaxed"})
    var objectStore_12 = txn_18.objectStore('objectStore_12');
    txn_18.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_18.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_18.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_19 = db.transaction(['objectStore_9'], 'readonly', {durability:"default"})
    var objectStore_9 = txn_19.objectStore('objectStore_9');
    var count_5 = objectStore_9.count();
    var getAll_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('uhcqLQoV', 'teNaqUSbCSoxXntuScFgvxp', true, true);
        getAll_2 = objectStore_9.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('XvlWMITOAmeGsATjxqJDlUBZdUuaAnQzWCxkFpCqVlz');
        getAll_2 = objectStore_9.getAll(KeyRange_25);
    }

    var count_6 = objectStore_9.count();
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('hFQja', 'JpiGnKdvkSsSWLIZSoAyUPrhEOCqHWJ', false, true);
        get_7 = objectStore_9.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('AIVhnubIhghJUMnPMhFeGpTeljaBVuEWwKqqXwqgWylfBAUKmulfihhOkRagzdvIWz', false);
        getAll_3 = objectStore_9.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('ZRrAqFlcxagrEsDpDVyROEh');
        getAll_3 = objectStore_9.getAll(KeyRange_29);
    }

    var count_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('XvlWMITOAmeGsATjxqJDlUBZdUuaAnQzWCxkFpCqVlz', 'teNaqUSbCSoxXntuScFgvxp', true, false);
        count_7 = objectStore_9.count(KeyRange_30);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('QNqimdpgOGUDWBpAUOkTpLRwLpecdUjMgXhRwFJlDXMluNOa', 'teNaqUSbCSoxXntuScFgvxp', true, false);
        count_8 = objectStore_9.count(KeyRange_32);
    }
    catch (e){
    }

    txn_19.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_19.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_19.onerror = (event) => {
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