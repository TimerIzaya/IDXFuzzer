let db;
const openRequest = window.indexedDB.open('str_7922', 3054823750758386)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_18', {keypath: 'oaCzgXUwQyxamvorhZAAxgjk.wHwlaECQYLJVCMkyBITqYNZTbDpEo.Ymyn'});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_r: '<boolean>', f1_t: '<string>'}, 'xUFQnfaWJlUbjZELHKTmjqdZFn');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('xUFQnfaWJlUbjZELHKTmjqdZFn');
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_i: '<object>', f1_z: '<object>'}, 'GGQcpmVpQ');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('GGQcpmVpQ', 'xUFQnfaWJlUbjZELHKTmjqdZFn', true, false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var index_11 = objectStore_0.createIndex('index_11', 'test');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('GGQcpmVpQ', false);
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_x: '<null>', f1_n: '<null>', f2_c: '<array>', f3_b: '<object>', f4_s: '<number>', f5_m: '<array>', f6_s: '<number>', f7_v: '<object>', f8_o: '<array>', f9_k: '<string>', f10_e: '<string>', f11_r: '<number>', f12_j: '<boolean>', f13_z: '<boolean>', f14_s: '<number>', f15_p: '<array>', f16_m: '<number>', f17_b: '<string>', f18_g: '<object>', f19_a: '<boolean>', f20_s: '<string>', f21_y: '<string>', f22_u: '<boolean>', f23_b: '<boolean>', f24_n: '<boolean>', f25_q: '<number>', f26_b: '<array>', f27_g: '<number>', f28_t: '<array>', f29_v: '<boolean>', f30_u: '<string>', f31_x: '<number>', f32_f: '<number>', f33_n: '<object>', f34_f: '<array>', f35_i: '<boolean>', f36_r: '<null>', f37_b: '<object>', f38_l: '<number>', f39_k: '<null>', f40_y: '<array>', f41_p: '<boolean>', f42_c: '<boolean>', f43_j: '<null>', f44_c: '<array>', f45_w: '<number>', f46_e: '<number>', f47_w: '<number>', f48_m: '<boolean>', f49_k: '<boolean>', f50_w: '<array>', f51_d: '<number>', f52_j: '<boolean>', f53_j: '<array>', f54_t: '<string>', f55_x: '<number>', f56_t: '<object>', f57_x: '<boolean>', f58_d: '<array>', f59_t: '<null>', f60_k: '<null>', f61_y: '<number>', f62_i: '<number>', f63_h: '<boolean>', f64_v: '<array>', f65_y: '<object>', f66_c: '<boolean>', f67_r: '<object>', f68_x: '<null>', f69_a: '<number>', f70_q: '<object>', f71_t: '<boolean>', f72_b: '<array>', f73_h: '<string>', f74_l: '<boolean>', f75_j: '<object>', f76_n: '<array>', f77_q: '<boolean>', f78_w: '<null>', f79_k: '<boolean>', f80_u: '<array>', f81_r: '<string>', f82_x: '<string>', f83_b: '<array>', f84_s: '<object>', f85_x: '<boolean>', f86_y: '<array>', f87_r: '<boolean>', f88_d: '<null>', f89_q: '<array>', f90_m: '<boolean>', f91_i: '<boolean>', f92_u: '<boolean>', f93_v: '<object>', f94_y: '<string>', f95_r: '<boolean>', f96_l: '<string>', f97_k: '<string>', f98_p: '<number>', f99_o: '<null>', f100_o: '<object>', f101_r: '<array>', f102_g: '<object>', f103_p: '<null>', f104_w: '<null>', f105_i: '<object>', f106_d: '<number>', f107_c: '<object>', f108_z: '<null>', f109_g: '<boolean>', f110_z: '<boolean>', f111_r: '<object>', f112_c: '<array>', f113_b: '<null>', f114_v: '<array>', f115_j: '<array>', f116_r: '<null>', f117_p: '<boolean>', f118_r: '<number>', f119_e: '<string>', f120_s: '<array>', f121_c: '<number>', f122_i: '<null>', f123_b: '<array>', f124_u: '<boolean>', f125_i: '<string>', f126_n: '<object>', f127_y: '<null>', f128_c: '<object>', f129_a: '<number>', f130_a: '<object>', f131_l: '<null>', f132_t: '<number>', f133_n: '<object>', f134_q: '<string>', f135_s: '<null>', f136_h: '<string>', f137_p: '<boolean>', f138_j: '<number>', f139_k: '<number>', f140_j: '<object>', f141_f: '<number>', f142_o: '<array>', f143_a: '<null>', f144_s: '<string>', f145_b: '<array>', f146_m: '<boolean>', f147_d: '<number>', f148_k: '<object>', f149_q: '<null>', f150_t: '<string>', f151_f: '<object>', f152_f: '<null>', f153_n: '<number>', f154_u: '<boolean>', f155_h: '<null>', f156_t: '<object>', f157_k: '<number>', f158_r: '<null>', f159_l: '<string>', f160_s: '<number>', f161_a: '<null>', f162_t: '<null>', f163_u: '<object>', f164_y: '<boolean>', f165_v: '<number>', f166_g: '<number>', f167_f: '<array>', f168_m: '<null>', f169_y: '<object>', f170_r: '<array>', f171_l: '<boolean>', f172_v: '<boolean>', f173_g: '<object>', f174_o: '<number>', f175_a: '<null>', f176_z: '<object>', f177_n: '<boolean>', f178_h: '<null>', f179_f: '<boolean>', f180_h: '<array>', f181_f: '<object>', f182_z: '<null>', f183_u: '<null>', f184_w: '<null>', f185_p: '<boolean>', f186_s: '<object>', f187_f: '<boolean>', f188_y: '<number>', f189_k: '<object>', f190_l: '<object>', f191_y: '<array>', f192_d: '<object>', f193_h: '<array>', f194_t: '<object>', f195_d: '<array>', f196_o: '<string>', f197_g: '<null>', f198_m: '<string>', f199_g: '<array>', f200_i: '<boolean>', f201_g: '<object>', f202_d: '<boolean>', f203_t: '<number>', f204_k: '<object>', f205_a: '<array>', f206_s: '<null>', f207_q: '<object>', f208_x: '<array>', f209_n: '<boolean>', f210_u: '<string>', f211_d: '<null>', f212_m: '<object>', f213_u: '<null>', f214_s: '<array>', f215_e: '<object>', f216_q: '<number>', f217_z: '<string>', f218_e: '<null>', f219_h: '<boolean>', f220_i: '<array>', f221_d: '<array>', f222_f: '<boolean>', f223_x: '<boolean>', f224_s: '<boolean>', f225_u: '<boolean>', f226_h: '<number>', f227_v: '<null>', f228_r: '<array>', f229_c: '<array>', f230_z: '<string>', f231_e: '<boolean>', f232_s: '<array>', f233_k: '<boolean>', f234_k: '<object>', f235_w: '<object>', f236_t: '<null>', f237_i: '<null>', f238_x: '<number>', f239_c: '<null>', f240_e: '<boolean>', f241_u: '<number>', f242_u: '<string>', f243_p: '<string>', f244_m: '<string>', f245_f: '<number>', f246_c: '<string>', f247_l: '<null>', f248_o: '<object>', f249_p: '<array>', f250_r: '<object>', f251_r: '<number>', f252_u: '<null>'}, 'WfHxrWsWSzDwPFBYfwbbUTsCxOWvaxidHkNjzZyFkzMlUfUpUAtLjkjSLQRCcBOnRxKlvPDUTEopFOcouBamkUKoZFJU');
    db.deleteObjectStore('objectStore_18')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_7922')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};