let db;
const openRequest = window.indexedDB.open('str_2786', 3130023657950896)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_9', {keypath: 'QhGplORtXCnlmmHSotkQREeFKsGLn'});
    var objectStore_1 = db.createObjectStore('objectStore_10', {keypath: 'ABaFofAFoNQbRJGShYdlvuZivZMvEqAWyOlVEfhdDJuXzpwhdTYMBAfNOETBybLbvKNJJ'});
    var put_0 = objectStore_0.put({f0_g: '<null>', f1_m: '<string>'}, 'zQkyWzBNjArqYOGIdIwVpNpeejgAaebXXOximCtDqcWmcEAvOS');
    db.deleteObjectStore('objectStore_9')
    var add_0 = objectStore_1.add({f0_x: '<boolean>', f1_m: '<boolean>', f2_c: '<boolean>', f3_j: '<object>', f4_q: '<object>', f5_p: '<array>', f6_c: '<number>', f7_b: '<number>', f8_h: '<array>', f9_j: '<object>', f10_s: '<array>', f11_e: '<boolean>', f12_o: '<string>', f13_w: '<string>', f14_u: '<number>', f15_f: '<array>', f16_l: '<number>', f17_h: '<array>', f18_l: '<null>', f19_t: '<string>', f20_k: '<number>', f21_h: '<string>', f22_o: '<null>', f23_r: '<number>', f24_s: '<number>', f25_l: '<object>', f26_q: '<string>', f27_o: '<boolean>', f28_a: '<array>', f29_b: '<array>', f30_u: '<null>', f31_l: '<array>', f32_s: '<boolean>', f33_f: '<array>', f34_x: '<null>', f35_r: '<object>', f36_j: '<null>', f37_w: '<null>', f38_m: '<string>', f39_g: '<array>', f40_c: '<null>', f41_y: '<number>', f42_q: '<boolean>', f43_x: '<array>', f44_p: '<null>', f45_x: '<string>', f46_c: '<boolean>', f47_z: '<string>', f48_b: '<boolean>', f49_y: '<array>', f50_y: '<string>', f51_p: '<array>', f52_s: '<object>', f53_z: '<number>', f54_d: '<object>', f55_s: '<null>', f56_s: '<number>', f57_h: '<array>', f58_z: '<object>', f59_a: '<boolean>', f60_b: '<string>', f61_z: '<object>', f62_h: '<null>', f63_y: '<string>', f64_b: '<null>', f65_h: '<string>', f66_w: '<array>', f67_l: '<number>', f68_z: '<boolean>', f69_j: '<number>', f70_k: '<string>', f71_f: '<boolean>', f72_c: '<boolean>', f73_p: '<array>', f74_z: '<array>', f75_m: '<number>', f76_d: '<string>', f77_v: '<number>', f78_u: '<string>', f79_d: '<number>', f80_h: '<object>', f81_v: '<string>', f82_a: '<boolean>', f83_g: '<string>', f84_b: '<array>', f85_w: '<null>', f86_u: '<object>', f87_f: '<object>', f88_x: '<boolean>', f89_w: '<string>', f90_r: '<object>', f91_l: '<string>', f92_p: '<boolean>', f93_j: '<boolean>', f94_w: '<number>', f95_y: '<array>', f96_w: '<number>', f97_s: '<string>', f98_j: '<number>', f99_u: '<null>', f100_y: '<null>', f101_d: '<object>', f102_i: '<number>', f103_d: '<number>', f104_v: '<object>', f105_t: '<number>', f106_q: '<array>', f107_v: '<number>', f108_o: '<array>', f109_t: '<array>', f110_o: '<boolean>', f111_g: '<object>', f112_x: '<null>', f113_k: '<object>', f114_a: '<boolean>', f115_k: '<string>', f116_v: '<string>', f117_p: '<array>', f118_y: '<string>', f119_m: '<boolean>', f120_z: '<boolean>', f121_m: '<string>', f122_x: '<array>', f123_w: '<array>', f124_q: '<boolean>', f125_z: '<number>', f126_o: '<null>', f127_u: '<object>', f128_l: '<array>', f129_v: '<string>', f130_h: '<array>', f131_p: '<number>', f132_n: '<number>', f133_r: '<null>', f134_o: '<string>', f135_o: '<object>', f136_p: '<array>', f137_e: '<string>', f138_u: '<null>', f139_s: '<null>', f140_d: '<array>', f141_d: '<boolean>', f142_y: '<null>', f143_a: '<boolean>', f144_x: '<null>', f145_m: '<object>', f146_u: '<array>', f147_t: '<array>', f148_f: '<boolean>', f149_t: '<string>', f150_t: '<string>', f151_j: '<null>', f152_i: '<boolean>', f153_s: '<array>', f154_s: '<string>', f155_u: '<string>', f156_y: '<null>', f157_o: '<array>', f158_p: '<boolean>', f159_i: '<number>', f160_e: '<boolean>', f161_j: '<array>', f162_k: '<null>', f163_w: '<array>', f164_h: '<null>', f165_d: '<object>', f166_y: '<null>', f167_c: '<boolean>', f168_m: '<null>', f169_j: '<boolean>', f170_d: '<boolean>', f171_h: '<number>', f172_x: '<boolean>', f173_r: '<array>', f174_s: '<string>', f175_n: '<boolean>', f176_a: '<boolean>', f177_w: '<boolean>', f178_r: '<string>', f179_c: '<number>', f180_j: '<number>', f181_x: '<boolean>', f182_x: '<number>', f183_b: '<number>', f184_q: '<number>', f185_t: '<number>', f186_z: '<string>', f187_s: '<array>', f188_u: '<object>', f189_v: '<number>', f190_u: '<array>', f191_l: '<object>', f192_g: '<number>', f193_l: '<number>', f194_s: '<boolean>', f195_m: '<null>', f196_c: '<string>', f197_e: '<null>', f198_w: '<boolean>', f199_m: '<number>', f200_r: '<null>', f201_e: '<boolean>', f202_s: '<string>', f203_t: '<null>', f204_l: '<string>', f205_v: '<array>', f206_c: '<boolean>', f207_x: '<null>', f208_i: '<null>', f209_x: '<array>', f210_w: '<object>', f211_w: '<array>', f212_a: '<array>', f213_v: '<null>', f214_e: '<array>', f215_x: '<boolean>', f216_g: '<null>', f217_u: '<array>', f218_p: '<object>', f219_p: '<array>', f220_n: '<null>', f221_c: '<boolean>', f222_o: '<boolean>', f223_f: '<string>', f224_m: '<string>', f225_n: '<string>', f226_h: '<string>', f227_d: '<array>', f228_z: '<object>', f229_x: '<array>', f230_o: '<array>', f231_s: '<object>', f232_x: '<boolean>', f233_g: '<object>', f234_k: '<boolean>', f235_f: '<boolean>', f236_n: '<null>', f237_a: '<array>', f238_y: '<null>', f239_i: '<number>', f240_f: '<array>', f241_t: '<null>', f242_c: '<boolean>', f243_b: '<boolean>', f244_l: '<number>', f245_m: '<number>', f246_z: '<string>', f247_m: '<boolean>', f248_o: '<array>', f249_j: '<number>', f250_s: '<array>', f251_y: '<string>', f252_s: '<null>', f253_l: '<array>', f254_g: '<string>', f255_x: '<boolean>', f256_f: '<array>', f257_g: '<boolean>', f258_a: '<boolean>', f259_n: '<array>', f260_w: '<array>', f261_l: '<array>', f262_q: '<object>', f263_o: '<number>', f264_j: '<string>', f265_z: '<number>', f266_d: '<array>', f267_n: '<array>', f268_h: '<number>', f269_y: '<boolean>', f270_o: '<null>', f271_k: '<string>', f272_u: '<array>', f273_e: '<null>', f274_w: '<array>', f275_t: '<array>', f276_k: '<string>', f277_n: '<array>', f278_w: '<null>', f279_f: '<number>', f280_e: '<array>', f281_s: '<null>', f282_d: '<object>', f283_k: '<string>', f284_r: '<string>', f285_u: '<object>', f286_v: '<array>', f287_i: '<null>', f288_b: '<null>', f289_z: '<null>', f290_e: '<object>', f291_p: '<number>', f292_t: '<number>', f293_x: '<array>', f294_q: '<array>', f295_n: '<string>', f296_r: '<null>', f297_r: '<number>', f298_c: '<null>', f299_f: '<null>', f300_n: '<string>', f301_t: '<number>', f302_h: '<string>', f303_r: '<number>', f304_u: '<boolean>', f305_s: '<number>', f306_y: '<number>', f307_r: '<null>', f308_i: '<null>', f309_d: '<string>', f310_z: '<null>', f311_u: '<array>', f312_e: '<array>', f313_j: '<number>', f314_g: '<boolean>', f315_p: '<array>', f316_o: '<array>', f317_d: '<null>', f318_s: '<boolean>', f319_k: '<boolean>', f320_r: '<boolean>', f321_i: '<null>', f322_c: '<number>', f323_o: '<object>', f324_f: '<boolean>', f325_o: '<boolean>', f326_n: '<null>', f327_l: '<null>', f328_a: '<string>', f329_w: '<null>', f330_f: '<array>', f331_a: '<object>', f332_h: '<object>', f333_p: '<null>', f334_n: '<null>', f335_t: '<null>', f336_k: '<object>', f337_r: '<array>', f338_v: '<boolean>', f339_r: '<array>', f340_h: '<number>', f341_y: '<array>', f342_y: '<boolean>', f343_i: '<boolean>', f344_w: '<array>', f345_z: '<string>', f346_q: '<null>', f347_z: '<string>', f348_d: '<boolean>', f349_n: '<array>', f350_y: '<number>', f351_r: '<null>', f352_h: '<null>', f353_b: '<object>', f354_t: '<string>', f355_l: '<string>', f356_e: '<array>', f357_c: '<number>', f358_c: '<boolean>', f359_w: '<boolean>', f360_m: '<number>', f361_c: '<string>', f362_q: '<number>', f363_l: '<string>', f364_a: '<boolean>', f365_a: '<boolean>', f366_e: '<array>', f367_f: '<null>', f368_e: '<null>', f369_k: '<array>', f370_g: '<null>', f371_a: '<boolean>', f372_i: '<object>', f373_a: '<null>', f374_n: '<boolean>', f375_d: '<object>', f376_o: '<boolean>', f377_p: '<number>', f378_r: '<null>', f379_r: '<null>', f380_c: '<boolean>', f381_i: '<array>', f382_r: '<array>', f383_l: '<array>', f384_v: '<array>', f385_p: '<array>', f386_f: '<object>', f387_y: '<string>', f388_t: '<number>', f389_m: '<number>', f390_e: '<boolean>', f391_t: '<boolean>', f392_p: '<string>', f393_e: '<null>', f394_i: '<null>', f395_m: '<string>', f396_d: '<array>', f397_b: '<boolean>'}, 'iGbGGlAIIaoVPAHfJCrQZuLiKOBmskokgJPlaqUPgqhBvWarnnBUzDUMROHqLLMN');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('iGbGGlAIIaoVPAHfJCrQZuLiKOBmskokgJPlaqUPgqhBvWarnnBUzDUMROHqLLMN');
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var index_16 = objectStore_1.createIndex('index_16', 'test', {multiEntry: false});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.only('iGbGGlAIIaoVPAHfJCrQZuLiKOBmskokgJPlaqUPgqhBvWarnnBUzDUMROHqLLMN');
        count_0 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var index_17 = objectStore_1.createIndex('index_17', 'test');
    var clear_0 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_11', {keypath: 'SYMGyaaEgMoubBqcMKvFnIVluSmTrRajtFcVFzdrNDgpxwEaGLANYvPwjPVZmeEqDdbdMNYjOeWOcvAhkKIFjVfHEfiiCupr'});
    var add_1 = objectStore_2.add({f0_t: '<object>', f1_a: '<null>'}, 'BNMkDOwtJIUrZtpvIbnHcKDmgEdDjoWSOsASGpUIjPKAAXkJUnUzqz');
    var add_2 = objectStore_1.add({f0_y: '<null>'}, 'JpukFEscXUHqXBtzvrErNemrLjsrQxxpkVZhWePLYP');
    var put_1 = objectStore_2.put({f0_j: '<number>', f1_a: '<array>', f2_i: '<string>', f3_k: '<number>', f4_c: '<array>', f5_z: '<object>', f6_f: '<number>'}, 'hhKnO');
    var objectStore_3 = db.createObjectStore('objectStore_12');
    var objectStore_4 = db.createObjectStore('objectStore_13', {keypath: 'myOa.wODQaWKlrPtzDXpeDFPOfcQJTHIJctqxQJRXoaSBzoaJhvqQweLfZCfYqIukALhmPJyWeWmsgTdbLEpxFktjChyZwEUT.nHzAbCekTGTXUCHhuDgKqfKsHlrZCkpvYcwUhtuPqtiKpKuQSaYeusAvCJRexzGCxN'});
    var clear_1 = objectStore_1.clear();
    objectStore_1.deleteIndex('index_17')
    var put_2 = objectStore_2.put({f0_j: '<object>'}, 'CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo');
    var clear_2 = objectStore_3.clear();
    var objectStore_5 = db.createObjectStore('objectStore_14');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_20 = db.transaction(['objectStore_10', 'objectStore_12'], 'readonly', {durability:"default"})
    var objectStore_12 = txn_20.objectStore('objectStore_12');
    txn_20.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_20.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_20.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_21 = db.transaction(['objectStore_14'], 'readonly', {durability:"default"})
    var objectStore_14 = txn_21.objectStore('objectStore_14');
    txn_21.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_21.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_21.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_22 = db.transaction(['objectStore_11'], 'readonly', {durability:"default"})
    var objectStore_11 = txn_22.objectStore('objectStore_11');
    var count_1 = objectStore_11.count();
    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo', true);
        getAllKeys_0 = objectStore_11.getAllKeys(KeyRange_4, 1086872603);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo');
        getAllKeys_0 = objectStore_11.getAllKeys(KeyRange_5);
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo', false);
        get_1 = objectStore_11.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.only('hhKnO');
        count_2 = objectStore_11.count(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1;
    txn_22.commit()
    getAllKeys_1 = objectStore_11.getAllKeys(485226029);
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('hhKnO', 'CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo', false, false);
        getAll_0 = objectStore_11.getAll(KeyRange_10, 4076445380);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('hhKnO');
        getAll_0 = objectStore_11.getAll(KeyRange_11);
    }

    var getAll_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('hhKnO', 'CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo', false, false);
        getAll_1 = objectStore_11.getAll(KeyRange_12, 2174664471);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('CGCSKlxcpgidZeSYOOgyysPvLYKxyugUgVeGhpIEnGCkRFkjZzDifAAsFsnULNixXMpeFxWepmApTRczijCGzBQqrhwbRqHvLo');
        getAll_1 = objectStore_11.getAll(KeyRange_13);
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('hhKnO', 'BNMkDOwtJIUrZtpvIbnHcKDmgEdDjoWSOsASGpUIjPKAAXkJUnUzqz', true, true);
        get_2 = objectStore_11.get(KeyRange_14);
    }
    catch (e){
    }

    var count_3 = objectStore_11.count();
    txn_22.abort()
    var getAllKeys_2;
    try{
        KeyRange_16 = IDBKeyRange.only('hhKnO');
        getAllKeys_2 = objectStore_11.getAllKeys(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('BNMkDOwtJIUrZtpvIbnHcKDmgEdDjoWSOsASGpUIjPKAAXkJUnUzqz');
        getAllKeys_2 = objectStore_11.getAllKeys(KeyRange_17);
    }

    var getAllKeys_3 = objectStore_11.getAllKeys();
    txn_22.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_22.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_22.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_23 = db.transaction(['objectStore_14'], 'readonly', {durability:"default"})
    var objectStore_14;
    txn_23.abort()
    txn_23.commit()
    objectStore_14 = txn_23.objectStore('objectStore_14');
    txn_23.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_23.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_23.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_24 = db.transaction(['objectStore_13', 'objectStore_14'], 'readonly', {durability:"strict"})
    var objectStore_13 = txn_24.objectStore('objectStore_13');
    txn_24.abort()
    txn_24.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_24.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_24.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7488')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};