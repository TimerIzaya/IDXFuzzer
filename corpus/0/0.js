let db;
const openRequest = window.indexedDB.open('str_6270', 2658876544674932)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'ScxUWXRfYcTNVMxRgCovgx'});
    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'rABzfOhNVcxHURBUsomeexvwPQsxlZDOHRvhruWGZQlBLZmFymAbdnXGfBshrnXFEwFnPJAbhfutoQK'});
    var add_0 = objectStore_0.add({f0_h: '<null>', f1_t: '<null>', f2_y: '<string>', f3_q: '<number>', f4_n: '<string>', f5_q: '<array>', f6_t: '<object>', f7_x: '<array>', f8_p: '<null>', f9_p: '<object>', f10_h: '<string>', f11_a: '<string>', f12_f: '<string>', f13_w: '<array>', f14_t: '<null>', f15_y: '<boolean>', f16_w: '<number>', f17_c: '<array>', f18_h: '<object>', f19_h: '<array>', f20_m: '<object>', f21_a: '<boolean>', f22_t: '<object>', f23_y: '<string>', f24_i: '<boolean>', f25_o: '<array>', f26_p: '<boolean>', f27_l: '<object>', f28_h: '<number>', f29_y: '<object>', f30_g: '<number>', f31_e: '<number>', f32_s: '<string>', f33_e: '<object>', f34_h: '<string>', f35_k: '<boolean>', f36_v: '<object>', f37_z: '<boolean>', f38_d: '<number>', f39_m: '<boolean>', f40_h: '<array>', f41_x: '<boolean>', f42_l: '<boolean>', f43_l: '<null>', f44_w: '<array>', f45_h: '<boolean>', f46_a: '<boolean>', f47_v: '<number>', f48_c: '<string>', f49_k: '<string>', f50_i: '<object>', f51_a: '<boolean>', f52_v: '<string>', f53_c: '<number>', f54_z: '<null>', f55_j: '<null>', f56_n: '<number>', f57_y: '<number>', f58_m: '<boolean>', f59_l: '<array>', f60_p: '<string>', f61_m: '<array>', f62_q: '<object>', f63_o: '<number>', f64_h: '<array>', f65_f: '<string>', f66_l: '<object>', f67_v: '<null>', f68_x: '<array>', f69_p: '<object>', f70_i: '<string>', f71_y: '<array>', f72_e: '<null>', f73_n: '<number>', f74_k: '<boolean>', f75_k: '<object>', f76_y: '<null>', f77_o: '<object>', f78_l: '<boolean>', f79_u: '<boolean>', f80_q: '<array>', f81_t: '<string>', f82_v: '<array>', f83_r: '<boolean>', f84_q: '<number>', f85_r: '<number>', f86_k: '<array>', f87_o: '<object>', f88_l: '<object>', f89_s: '<array>', f90_f: '<string>', f91_r: '<array>', f92_l: '<boolean>', f93_q: '<string>', f94_z: '<array>', f95_w: '<number>', f96_d: '<array>', f97_b: '<number>', f98_y: '<number>', f99_l: '<boolean>', f100_k: '<array>', f101_d: '<object>', f102_p: '<null>', f103_o: '<string>', f104_q: '<string>', f105_i: '<boolean>', f106_b: '<null>', f107_p: '<array>', f108_e: '<number>', f109_x: '<null>', f110_o: '<string>', f111_x: '<object>', f112_h: '<boolean>', f113_q: '<array>', f114_u: '<number>', f115_z: '<null>', f116_g: '<string>', f117_f: '<object>', f118_d: '<number>', f119_w: '<number>', f120_z: '<boolean>', f121_a: '<string>', f122_z: '<number>', f123_q: '<number>', f124_t: '<null>', f125_o: '<null>', f126_t: '<null>', f127_s: '<string>', f128_q: '<array>', f129_b: '<array>', f130_f: '<boolean>', f131_u: '<string>', f132_u: '<boolean>', f133_m: '<null>', f134_x: '<object>', f135_w: '<string>', f136_g: '<object>', f137_q: '<object>', f138_f: '<boolean>', f139_w: '<boolean>', f140_n: '<array>', f141_c: '<boolean>', f142_a: '<object>', f143_p: '<array>', f144_v: '<array>', f145_x: '<object>', f146_h: '<string>', f147_n: '<string>', f148_r: '<boolean>', f149_l: '<null>', f150_j: '<boolean>', f151_x: '<boolean>', f152_q: '<string>', f153_l: '<number>', f154_v: '<string>', f155_x: '<boolean>', f156_n: '<null>', f157_x: '<null>', f158_h: '<object>', f159_n: '<object>', f160_t: '<null>', f161_w: '<boolean>', f162_l: '<boolean>', f163_h: '<object>', f164_n: '<object>', f165_v: '<boolean>', f166_y: '<null>', f167_k: '<string>', f168_b: '<boolean>', f169_n: '<boolean>', f170_i: '<null>', f171_k: '<null>', f172_m: '<null>', f173_d: '<null>', f174_f: '<null>', f175_k: '<number>', f176_y: '<boolean>', f177_a: '<number>', f178_n: '<null>', f179_u: '<null>', f180_g: '<number>', f181_a: '<array>', f182_d: '<null>', f183_d: '<array>', f184_r: '<string>', f185_d: '<number>', f186_b: '<number>', f187_c: '<object>', f188_n: '<string>', f189_c: '<boolean>', f190_a: '<boolean>', f191_o: '<number>', f192_c: '<null>', f193_r: '<array>', f194_c: '<string>', f195_e: '<boolean>', f196_p: '<number>', f197_k: '<string>', f198_u: '<string>', f199_s: '<array>', f200_d: '<string>', f201_n: '<array>', f202_d: '<object>', f203_j: '<number>', f204_c: '<number>', f205_k: '<null>', f206_f: '<number>', f207_z: '<string>', f208_f: '<object>', f209_r: '<null>', f210_d: '<object>', f211_n: '<boolean>', f212_q: '<string>', f213_c: '<object>', f214_n: '<object>', f215_d: '<null>', f216_e: '<object>', f217_u: '<null>', f218_v: '<string>', f219_b: '<number>', f220_i: '<array>', f221_p: '<array>', f222_q: '<null>', f223_w: '<boolean>', f224_g: '<object>', f225_t: '<object>', f226_u: '<number>', f227_n: '<object>', f228_b: '<array>', f229_n: '<object>', f230_i: '<string>', f231_x: '<array>', f232_g: '<null>', f233_o: '<null>', f234_t: '<null>', f235_w: '<array>', f236_k: '<null>', f237_h: '<array>', f238_f: '<string>', f239_o: '<array>', f240_d: '<number>', f241_z: '<string>', f242_u: '<null>', f243_y: '<object>', f244_g: '<string>', f245_y: '<number>', f246_l: '<number>', f247_z: '<string>', f248_w: '<null>', f249_t: '<object>', f250_l: '<string>', f251_p: '<string>', f252_l: '<number>', f253_y: '<string>', f254_v: '<boolean>', f255_a: '<number>', f256_u: '<object>', f257_y: '<string>', f258_r: '<array>', f259_q: '<boolean>', f260_k: '<null>', f261_c: '<array>', f262_p: '<string>', f263_q: '<array>', f264_n: '<boolean>', f265_d: '<array>', f266_d: '<string>', f267_o: '<string>', f268_y: '<object>', f269_s: '<null>', f270_o: '<null>', f271_w: '<object>', f272_s: '<array>', f273_j: '<null>', f274_i: '<object>', f275_s: '<number>', f276_g: '<boolean>', f277_g: '<number>', f278_r: '<boolean>', f279_u: '<array>', f280_h: '<boolean>', f281_w: '<string>', f282_j: '<object>', f283_h: '<null>', f284_p: '<boolean>', f285_s: '<boolean>', f286_m: '<boolean>', f287_c: '<array>', f288_q: '<string>', f289_s: '<number>', f290_m: '<boolean>', f291_v: '<null>', f292_z: '<boolean>', f293_d: '<array>', f294_z: '<array>', f295_z: '<string>', f296_i: '<array>', f297_y: '<null>', f298_w: '<null>', f299_j: '<array>', f300_s: '<string>', f301_k: '<boolean>', f302_w: '<object>', f303_y: '<number>', f304_c: '<string>', f305_t: '<number>', f306_m: '<array>', f307_g: '<boolean>', f308_g: '<array>', f309_a: '<array>', f310_s: '<array>', f311_k: '<boolean>', f312_g: '<string>', f313_p: '<number>', f314_a: '<object>', f315_a: '<boolean>', f316_v: '<number>', f317_g: '<null>', f318_a: '<array>', f319_t: '<null>', f320_m: '<number>', f321_d: '<null>', f322_x: '<string>', f323_n: '<string>', f324_e: '<null>', f325_q: '<array>', f326_z: '<object>', f327_n: '<string>', f328_q: '<number>', f329_a: '<boolean>', f330_b: '<null>', f331_p: '<null>', f332_f: '<null>', f333_t: '<null>', f334_u: '<boolean>', f335_n: '<object>', f336_v: '<string>', f337_y: '<object>', f338_c: '<object>', f339_v: '<object>', f340_w: '<number>', f341_i: '<object>', f342_q: '<object>', f343_b: '<array>', f344_v: '<array>', f345_i: '<number>', f346_e: '<number>', f347_h: '<object>', f348_a: '<number>', f349_c: '<array>', f350_e: '<boolean>', f351_g: '<null>', f352_f: '<null>', f353_l: '<null>', f354_v: '<array>', f355_t: '<number>', f356_k: '<string>', f357_n: '<object>', f358_e: '<boolean>', f359_d: '<array>', f360_d: '<object>', f361_h: '<object>', f362_j: '<array>', f363_g: '<number>', f364_t: '<string>', f365_v: '<null>', f366_s: '<null>', f367_f: '<null>', f368_w: '<array>', f369_q: '<boolean>', f370_a: '<boolean>', f371_x: '<string>', f372_l: '<boolean>', f373_g: '<string>', f374_q: '<number>', f375_b: '<string>', f376_d: '<boolean>', f377_u: '<object>', f378_b: '<string>', f379_n: '<null>', f380_s: '<boolean>', f381_i: '<object>', f382_n: '<object>', f383_v: '<object>', f384_g: '<boolean>', f385_f: '<string>', f386_g: '<null>', f387_q: '<array>', f388_p: '<array>', f389_y: '<array>', f390_r: '<boolean>', f391_k: '<boolean>', f392_x: '<array>', f393_s: '<boolean>', f394_s: '<number>', f395_i: '<string>', f396_b: '<object>', f397_y: '<array>', f398_u: '<null>', f399_l: '<array>', f400_y: '<number>', f401_v: '<number>', f402_h: '<object>', f403_k: '<object>', f404_l: '<boolean>', f405_r: '<null>', f406_f: '<array>', f407_p: '<null>', f408_j: '<string>', f409_t: '<boolean>', f410_i: '<number>', f411_h: '<array>', f412_h: '<object>', f413_w: '<boolean>'}, 'MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb');
    var put_0 = objectStore_1.put({f0_i: '<number>', f1_h: '<string>', f2_n: '<number>', f3_p: '<null>', f4_d: '<object>', f5_u: '<number>', f6_l: '<array>', f7_p: '<array>', f8_x: '<array>'}, 'dqvLboLXqqENDImBgSeUMbsermDgCEADuzRGQSgnsnvxZQw');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.only('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0, 627751603);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var index_0 = objectStore_1.createIndex('index_0', 'test');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var index_0 = objectStore_1.index('index_0');
    var getAll_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('dqvLboLXqqENDImBgSeUMbsermDgCEADuzRGQSgnsnvxZQw', 'dqvLboLXqqENDImBgSeUMbsermDgCEADuzRGQSgnsnvxZQw', true, true);
        getAll_0 = objectStore_1.getAll(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('dqvLboLXqqENDImBgSeUMbsermDgCEADuzRGQSgnsnvxZQw');
        getAll_0 = objectStore_1.getAll(KeyRange_5);
    }

    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', 'MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', true, true);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', 'MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', true, false);
        get_1 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var index_1 = objectStore_0.createIndex('index_1', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_2');
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('dqvLboLXqqENDImBgSeUMbsermDgCEADuzRGQSgnsnvxZQw', true);
        get_2 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var index_2 = objectStore_0.createIndex('index_2', 'test', {unique: true, multiEntry: false});
    var add_1 = objectStore_2.add({f0_b: '<null>', f1_f: '<object>', f2_w: '<boolean>', f3_w: '<number>', f4_x: '<object>', f5_v: '<null>', f6_e: '<number>', f7_z: '<string>', f8_m: '<null>', f9_q: '<object>', f10_c: '<boolean>', f11_d: '<null>', f12_v: '<boolean>', f13_z: '<string>', f14_g: '<object>', f15_s: '<array>', f16_z: '<object>', f17_b: '<string>', f18_y: '<boolean>', f19_y: '<string>', f20_e: '<boolean>', f21_e: '<null>', f22_k: '<number>', f23_u: '<null>', f24_x: '<number>', f25_x: '<array>', f26_e: '<null>', f27_y: '<string>', f28_x: '<object>', f29_k: '<string>', f30_p: '<array>', f31_o: '<object>', f32_j: '<number>', f33_z: '<number>', f34_n: '<array>', f35_l: '<string>', f36_e: '<string>', f37_s: '<array>', f38_z: '<null>', f39_y: '<array>', f40_s: '<object>', f41_f: '<object>', f42_t: '<string>', f43_m: '<boolean>', f44_b: '<object>', f45_k: '<boolean>', f46_m: '<array>', f47_z: '<array>', f48_z: '<string>', f49_n: '<string>', f50_g: '<string>', f51_r: '<string>', f52_g: '<null>', f53_q: '<null>', f54_u: '<number>', f55_v: '<null>', f56_s: '<number>', f57_u: '<string>', f58_v: '<null>', f59_a: '<number>', f60_v: '<number>', f61_g: '<number>', f62_i: '<null>', f63_o: '<array>', f64_y: '<number>', f65_u: '<array>', f66_x: '<boolean>', f67_r: '<object>', f68_a: '<boolean>', f69_f: '<string>', f70_e: '<boolean>', f71_v: '<null>', f72_b: '<null>', f73_q: '<null>', f74_n: '<null>', f75_k: '<object>', f76_g: '<string>', f77_y: '<string>', f78_s: '<boolean>', f79_n: '<object>', f80_n: '<number>', f81_c: '<array>', f82_m: '<object>', f83_o: '<boolean>', f84_q: '<null>', f85_z: '<number>', f86_l: '<string>', f87_u: '<string>', f88_b: '<string>', f89_l: '<null>', f90_l: '<null>', f91_q: '<null>', f92_r: '<null>', f93_x: '<boolean>', f94_p: '<null>', f95_c: '<boolean>', f96_v: '<array>', f97_c: '<object>', f98_b: '<string>', f99_w: '<null>', f100_a: '<object>', f101_c: '<number>', f102_l: '<null>', f103_o: '<null>', f104_c: '<object>', f105_o: '<null>', f106_m: '<object>', f107_v: '<null>', f108_f: '<number>', f109_f: '<boolean>', f110_k: '<string>', f111_a: '<number>', f112_q: '<object>', f113_w: '<object>', f114_c: '<number>', f115_b: '<string>', f116_a: '<null>', f117_m: '<number>', f118_e: '<string>', f119_p: '<object>', f120_o: '<number>', f121_b: '<number>', f122_u: '<string>', f123_h: '<object>', f124_y: '<array>', f125_h: '<object>', f126_n: '<null>', f127_e: '<null>', f128_h: '<boolean>', f129_t: '<array>', f130_c: '<null>', f131_k: '<array>', f132_e: '<null>', f133_q: '<string>', f134_l: '<boolean>', f135_j: '<null>', f136_o: '<string>', f137_s: '<object>', f138_r: '<string>', f139_w: '<null>', f140_r: '<array>', f141_t: '<array>', f142_y: '<number>', f143_z: '<string>', f144_u: '<null>', f145_x: '<number>', f146_l: '<string>', f147_f: '<number>', f148_j: '<string>', f149_w: '<null>', f150_p: '<string>', f151_n: '<object>', f152_h: '<boolean>', f153_f: '<null>', f154_u: '<number>', f155_q: '<array>', f156_g: '<number>', f157_k: '<string>', f158_u: '<null>', f159_m: '<number>', f160_g: '<object>', f161_e: '<boolean>', f162_s: '<object>', f163_d: '<null>', f164_h: '<null>', f165_a: '<boolean>', f166_s: '<null>', f167_o: '<null>'}, 'haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU');
    var getAllKeys_1 = objectStore_1.getAllKeys();
    var clear_0 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_3', {autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_2', 'objectStore_0', 'objectStore_1'], 'readonly', {durability:"relaxed"})
    var objectStore_0 = txn_0.objectStore('objectStore_0');
    var index_1 = objectStore_0.index('index_2');
    var count_0;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', true);
        count_0 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', false);
        count_1 = objectStore_0.count(KeyRange_14);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', 'MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', true, false);
        count_2 = objectStore_0.count(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', true);
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_18, 739641979);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb');
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_19);
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', false);
        getAll_1 = objectStore_0.getAll(KeyRange_20, 1969759724);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb');
        getAll_1 = objectStore_0.getAll(KeyRange_21);
    }

    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1 = db.transaction(['objectStore_1', 'objectStore_0'], 'readwrite', {durability:"default"})
    var objectStore_0 = txn_1.objectStore('objectStore_0');
    var clear_1 = objectStore_0.clear();
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', 'MpybZaMapvuJkxiJxcFyLdPEYiBdmNgb', false, false);
        get_3 = objectStore_0.get(KeyRange_22);
    }
    catch (e){
    }

    var clear_2 = objectStore_0.clear();
    var add_2 = objectStore_0.add({f0_x: '<object>', f1_c: '<object>', f2_z: '<object>', f3_n: '<object>', f4_s: '<number>', f5_a: '<array>', f6_v: '<string>', f7_j: '<number>'}, 'CWwwMjjdQsiEtnIbdZEFQlxUdadTLApvRViCBlLIxYdOufGuinCpqYTkjuYPQfppuNEpHFVLpo');
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.only('CWwwMjjdQsiEtnIbdZEFQlxUdadTLApvRViCBlLIxYdOufGuinCpqYTkjuYPQfppuNEpHFVLpo');
        get_4 = objectStore_0.get(KeyRange_24);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_m: '<boolean>', f1_d: '<null>', f2_u: '<array>', f3_h: '<null>', f4_m: '<array>', f5_j: '<string>', f6_m: '<number>', f7_b: '<string>', f8_e: '<boolean>', f9_f: '<null>', f10_c: '<string>', f11_o: '<string>', f12_k: '<boolean>', f13_z: '<string>', f14_a: '<number>', f15_n: '<object>', f16_a: '<object>', f17_d: '<string>', f18_b: '<array>', f19_s: '<object>', f20_n: '<number>', f21_x: '<object>', f22_t: '<null>', f23_f: '<array>', f24_c: '<number>', f25_l: '<null>', f26_w: '<number>', f27_a: '<string>', f28_u: '<boolean>', f29_b: '<null>', f30_s: '<number>', f31_e: '<null>', f32_p: '<null>', f33_i: '<object>', f34_t: '<null>', f35_w: '<boolean>', f36_p: '<object>', f37_e: '<array>', f38_q: '<array>', f39_d: '<null>', f40_f: '<null>', f41_u: '<number>', f42_z: '<null>', f43_g: '<null>', f44_d: '<string>', f45_b: '<number>', f46_r: '<number>', f47_l: '<object>', f48_y: '<object>', f49_b: '<number>', f50_t: '<null>', f51_y: '<null>', f52_t: '<string>', f53_e: '<boolean>', f54_l: '<string>', f55_z: '<boolean>', f56_i: '<number>', f57_l: '<object>', f58_p: '<null>', f59_o: '<object>', f60_g: '<array>', f61_l: '<array>', f62_t: '<string>', f63_w: '<boolean>', f64_u: '<number>', f65_d: '<array>', f66_j: '<object>', f67_p: '<object>', f68_v: '<number>', f69_w: '<string>', f70_y: '<number>', f71_v: '<object>', f72_y: '<number>', f73_e: '<number>', f74_w: '<object>', f75_y: '<array>', f76_l: '<number>', f77_i: '<boolean>', f78_g: '<boolean>', f79_h: '<boolean>', f80_f: '<array>', f81_r: '<boolean>', f82_h: '<string>', f83_w: '<string>', f84_r: '<string>', f85_p: '<string>', f86_t: '<string>', f87_m: '<boolean>', f88_o: '<number>', f89_n: '<number>', f90_h: '<null>', f91_x: '<boolean>', f92_o: '<object>', f93_z: '<number>', f94_x: '<number>', f95_j: '<object>', f96_t: '<object>', f97_z: '<number>', f98_q: '<null>', f99_e: '<null>', f100_x: '<array>', f101_m: '<string>', f102_t: '<null>', f103_d: '<string>', f104_s: '<null>', f105_e: '<number>', f106_m: '<boolean>', f107_s: '<string>', f108_h: '<null>', f109_h: '<array>', f110_x: '<number>', f111_i: '<object>', f112_g: '<number>', f113_p: '<array>', f114_q: '<string>', f115_g: '<number>', f116_o: '<string>', f117_j: '<null>', f118_c: '<array>', f119_w: '<object>', f120_q: '<number>', f121_f: '<boolean>', f122_b: '<object>', f123_z: '<object>', f124_d: '<boolean>', f125_a: '<boolean>', f126_b: '<boolean>', f127_l: '<string>', f128_e: '<string>', f129_b: '<object>', f130_m: '<number>', f131_z: '<number>', f132_l: '<string>', f133_h: '<array>', f134_x: '<number>', f135_y: '<number>', f136_i: '<string>', f137_l: '<object>', f138_f: '<string>', f139_j: '<array>', f140_a: '<number>', f141_j: '<array>', f142_g: '<array>', f143_v: '<object>', f144_s: '<array>', f145_q: '<number>', f146_f: '<object>', f147_d: '<boolean>', f148_g: '<string>', f149_n: '<object>', f150_g: '<string>', f151_m: '<null>', f152_s: '<null>', f153_c: '<string>', f154_j: '<string>', f155_b: '<string>', f156_q: '<null>', f157_e: '<boolean>', f158_z: '<string>', f159_f: '<boolean>', f160_o: '<number>', f161_y: '<null>', f162_p: '<null>', f163_h: '<array>', f164_k: '<number>', f165_s: '<object>', f166_s: '<string>', f167_v: '<null>', f168_e: '<object>', f169_r: '<null>', f170_m: '<number>', f171_f: '<string>', f172_y: '<array>', f173_m: '<object>', f174_j: '<object>', f175_u: '<number>', f176_f: '<string>', f177_j: '<boolean>', f178_k: '<null>', f179_p: '<number>', f180_h: '<object>', f181_p: '<number>', f182_k: '<object>', f183_z: '<object>', f184_r: '<boolean>', f185_z: '<number>', f186_g: '<boolean>', f187_x: '<boolean>', f188_i: '<object>', f189_j: '<null>', f190_u: '<object>', f191_x: '<string>', f192_e: '<string>', f193_e: '<array>', f194_t: '<array>', f195_v: '<number>', f196_b: '<object>', f197_h: '<string>', f198_f: '<null>', f199_g: '<boolean>', f200_x: '<number>', f201_e: '<boolean>', f202_p: '<boolean>', f203_p: '<array>', f204_s: '<boolean>', f205_u: '<number>', f206_i: '<array>', f207_v: '<string>', f208_t: '<boolean>', f209_u: '<array>', f210_v: '<null>', f211_f: '<null>', f212_w: '<string>', f213_z: '<array>', f214_t: '<object>', f215_u: '<string>', f216_a: '<array>', f217_h: '<boolean>', f218_d: '<array>', f219_q: '<string>', f220_w: '<null>', f221_t: '<boolean>', f222_k: '<null>', f223_o: '<number>', f224_e: '<object>', f225_g: '<array>', f226_x: '<string>', f227_e: '<null>', f228_w: '<null>', f229_o: '<string>', f230_q: '<string>', f231_e: '<null>', f232_p: '<number>', f233_b: '<number>', f234_c: '<null>', f235_g: '<null>', f236_m: '<string>', f237_l: '<array>', f238_u: '<number>', f239_m: '<string>', f240_o: '<string>', f241_g: '<object>', f242_c: '<object>', f243_f: '<boolean>', f244_d: '<array>', f245_m: '<object>', f246_n: '<null>', f247_n: '<string>', f248_f: '<array>', f249_s: '<null>', f250_j: '<array>', f251_a: '<null>', f252_f: '<array>', f253_w: '<string>', f254_d: '<array>', f255_a: '<string>', f256_t: '<null>', f257_e: '<boolean>', f258_g: '<null>', f259_t: '<object>', f260_m: '<object>', f261_x: '<boolean>', f262_i: '<boolean>', f263_r: '<object>', f264_o: '<string>', f265_a: '<string>', f266_j: '<object>', f267_w: '<string>', f268_b: '<boolean>', f269_f: '<array>', f270_w: '<array>', f271_d: '<null>', f272_g: '<boolean>', f273_a: '<string>', f274_e: '<boolean>', f275_h: '<string>', f276_z: '<object>', f277_w: '<string>', f278_c: '<null>', f279_b: '<object>', f280_o: '<number>', f281_y: '<array>', f282_m: '<boolean>', f283_d: '<number>', f284_j: '<number>', f285_l: '<number>', f286_d: '<array>', f287_p: '<boolean>', f288_e: '<null>', f289_r: '<null>', f290_a: '<object>', f291_y: '<string>', f292_u: '<array>', f293_v: '<null>', f294_n: '<object>', f295_z: '<null>', f296_e: '<number>', f297_h: '<boolean>', f298_d: '<number>', f299_d: '<string>', f300_r: '<string>', f301_n: '<boolean>', f302_w: '<boolean>', f303_e: '<array>', f304_o: '<object>', f305_d: '<string>', f306_v: '<string>', f307_u: '<array>', f308_v: '<array>', f309_i: '<array>', f310_e: '<null>', f311_r: '<object>', f312_e: '<boolean>', f313_l: '<null>', f314_w: '<string>', f315_o: '<object>', f316_n: '<boolean>', f317_o: '<array>', f318_p: '<array>', f319_g: '<number>', f320_f: '<null>', f321_b: '<boolean>', f322_l: '<number>', f323_w: '<string>', f324_i: '<array>', f325_x: '<boolean>', f326_y: '<object>', f327_s: '<array>', f328_q: '<object>', f329_v: '<boolean>', f330_j: '<string>', f331_y: '<number>', f332_y: '<null>', f333_u: '<object>', f334_p: '<array>', f335_z: '<array>', f336_a: '<number>', f337_f: '<null>', f338_r: '<null>', f339_a: '<boolean>', f340_t: '<null>', f341_e: '<boolean>', f342_g: '<null>'}, 'irVTCxdjQZwPWKqrTLqtMpoCQiXtuWnrWdZj');
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('irVTCxdjQZwPWKqrTLqtMpoCQiXtuWnrWdZj', 'CWwwMjjdQsiEtnIbdZEFQlxUdadTLApvRViCBlLIxYdOufGuinCpqYTkjuYPQfppuNEpHFVLpo', true, true);
        get_5 = objectStore_0.get(KeyRange_26);
    }
    catch (e){
    }

    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2 = db.transaction(['objectStore_0', 'objectStore_1', 'objectStore_3', 'objectStore_2'], 'readwrite', {durability:"strict"})
    var objectStore_1 = txn_2.objectStore('objectStore_1');
    var getAllKeys_3 = objectStore_1.getAllKeys(418564319);
    var add_3 = objectStore_1.add({f0_i: '<array>', f1_c: '<boolean>', f2_p: '<boolean>', f3_o: '<string>'}, 'nxtMRDRYAxZfUO');
    var clear_3 = objectStore_1.clear();
    var add_4 = objectStore_1.add({f0_v: '<string>', f1_o: '<array>', f2_n: '<null>'}, 'XLisrhxyltTtQSloZHvygtuQYkNTQUWryJPKdjIyYbWRdew');
    var delete_1;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('nxtMRDRYAxZfUO', false);
        delete_1 = objectStore_1.delete(KeyRange_28);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_30 = IDBKeyRange.only('nxtMRDRYAxZfUO');
        delete_2 = objectStore_1.delete(KeyRange_30);
    }
    catch (e){
    }

    var clear_4 = objectStore_1.clear();
    var clear_5 = objectStore_1.clear();
    var getAll_2;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('XLisrhxyltTtQSloZHvygtuQYkNTQUWryJPKdjIyYbWRdew', true);
        getAll_2 = objectStore_1.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('nxtMRDRYAxZfUO');
        getAll_2 = objectStore_1.getAll(KeyRange_33);
    }

    var put_2 = objectStore_1.put({f0_t: '<array>', f1_e: '<array>', f2_q: '<object>', f3_f: '<string>', f4_n: '<number>', f5_v: '<boolean>', f6_c: '<boolean>', f7_l: '<number>'}, 'TUUFyWJsiouqIWOvacInKPIqUpQwSfnfHpVRxZoVCDlgEeUFRfByNEiWeQuYEBMhTWK');
    var delete_3;
    try{
        KeyRange_34 = IDBKeyRange.only('XLisrhxyltTtQSloZHvygtuQYkNTQUWryJPKdjIyYbWRdew');
        delete_3 = objectStore_1.delete(KeyRange_34);
    }
    catch (e){
    }

    txn_2.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3 = db.transaction(['objectStore_2'], 'readonly', {durability:"relaxed"})
    var objectStore_2 = txn_3.objectStore('objectStore_2');
    var getAllKeys_4 = objectStore_2.getAllKeys(2164631748);
    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.bound('haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', 'haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', false, false);
        get_6 = objectStore_2.get(KeyRange_36);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_38 = IDBKeyRange.bound('haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', 'haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', false, false);
        count_3 = objectStore_2.count(KeyRange_38);
    }
    catch (e){
    }

    var count_4 = objectStore_2.count();
    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.only('haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU');
        get_7 = objectStore_2.get(KeyRange_40);
    }
    catch (e){
    }

    var getAll_3 = objectStore_2.getAll(3418697509);
    var getAll_4 = objectStore_2.getAll(1428475797);
    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.only('haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU');
        get_8 = objectStore_2.get(KeyRange_42);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_44 = IDBKeyRange.bound('haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', 'haKatrDOkvKrfojrSqKdJEReOZkdSFEsbbYVlTKHAfZYnpFkHKANvjSZzStAMlzeeaLXdTpNmkaZWwszfQSEntBaxYwOItYJU', false, false);
        count_5 = objectStore_2.count(KeyRange_44);
    }
    catch (e){
    }

    txn_3.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4 = db.transaction(['objectStore_3'], 'readonly', {durability:"strict"})
    var objectStore_3 = txn_4.objectStore('objectStore_3');
    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6270')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};