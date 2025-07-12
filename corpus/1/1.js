let db;
const openRequest = window.indexedDB.open('str_6294', 4268039083610745)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_6', {keypath: 'YeXDumPhciRIsylLPTsFnqPUhaQHyzqfzfByyMFHWFfJGoCfvCzIBzTdCtNiGSGVbtgIuvSkqzsfMpdM'});
    var index_4 = objectStore_0.createIndex('index_4', 'test', {multiEntry: false});
    var clear_0 = objectStore_0.clear();
    var index_5 = objectStore_0.createIndex('index_5', 'test', {multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_7', {autoIncrement: true});
    var index_6 = objectStore_0.createIndex('index_6', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_0.put({f0_w: '<array>', f1_m: '<object>', f2_y: '<array>', YeXDumPhciRIsylLPTsFnqPUhaQHyzqfzfByyMFHWFfJGoCfvCzIBzTdCtNiGSGVbtgIuvSkqzsfMpdM: null});
    var clear_1 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_s: '<string>', f1_u: '<number>', f2_f: '<string>', f3_b: '<array>', YeXDumPhciRIsylLPTsFnqPUhaQHyzqfzfByyMFHWFfJGoCfvCzIBzTdCtNiGSGVbtgIuvSkqzsfMpdM: null});
    var clear_2 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_8', {keypath: 'CDhyNDXSvivsSpEjfgOKOIxnwTIlrF', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_10 = db.transaction(['objectStore_8', 'objectStore_6'], 'readonly', {durability:"default"})
    var objectStore_8 = txn_10.objectStore('objectStore_8');
    txn_10.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_10.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_10.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_11 = db.transaction(['objectStore_6', 'objectStore_8', 'objectStore_7'], 'readwrite', {durability:"relaxed"})
    var objectStore_7 = txn_11.objectStore('objectStore_7');
    var put_1 = objectStore_7.put({f0_d: '<number>'}, 'KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC');
    var count_0 = objectStore_7.count();
    var clear_3 = objectStore_7.clear();
    var clear_4 = objectStore_7.clear();
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', false);
        count_1 = objectStore_7.count(KeyRange_0);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_2 = IDBKeyRange.bound('KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', 'KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', false, true);
        count_2 = objectStore_7.count(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.only('KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC');
        delete_0 = objectStore_7.delete(KeyRange_4);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', 'KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', true, false);
        get_0 = objectStore_7.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_5 = objectStore_7.clear();
    var put_2 = objectStore_7.put({f0_t: '<object>', f1_g: '<null>', f2_z: '<array>'}, 'zUJxRpUmPocDBbJXnQMsSfK');
    txn_11.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_11.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_11.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_12 = db.transaction(['objectStore_6', 'objectStore_7', 'objectStore_8'], 'readwrite', {durability:"default"})
    var objectStore_7 = txn_12.objectStore('objectStore_7');
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('KnEgiIRIavyokbveLWardWJqUnjWIMfzUbNLlNBuC', false);
        getAllKeys_0 = objectStore_7.getAllKeys(KeyRange_8, 809022216);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('zUJxRpUmPocDBbJXnQMsSfK');
        getAllKeys_0 = objectStore_7.getAllKeys(KeyRange_9);
    }

    var clear_6 = objectStore_7.clear();
    var add_1 = objectStore_7.add({f0_t: '<object>', f1_j: '<boolean>', f2_f: '<array>', f3_x: '<string>', f4_e: '<object>', f5_y: '<null>', f6_h: '<object>', f7_k: '<string>', f8_m: '<array>', f9_r: '<array>', f10_s: '<array>', f11_x: '<array>', f12_c: '<array>', f13_w: '<array>', f14_f: '<object>', f15_h: '<boolean>', f16_i: '<number>', f17_v: '<object>', f18_p: '<boolean>', f19_w: '<number>', f20_m: '<number>', f21_z: '<boolean>', f22_r: '<null>', f23_h: '<object>', f24_t: '<number>', f25_o: '<number>', f26_r: '<number>', f27_v: '<array>', f28_x: '<string>', f29_x: '<string>', f30_t: '<string>', f31_k: '<object>', f32_f: '<string>', f33_q: '<array>', f34_v: '<string>', f35_k: '<array>', f36_p: '<number>', f37_a: '<object>', f38_w: '<object>', f39_g: '<array>', f40_m: '<null>', f41_w: '<object>', f42_h: '<boolean>', f43_u: '<array>', f44_u: '<boolean>', f45_x: '<null>', f46_g: '<boolean>', f47_y: '<array>', f48_q: '<boolean>', f49_v: '<boolean>', f50_z: '<array>', f51_j: '<array>', f52_e: '<array>', f53_l: '<array>', f54_z: '<null>', f55_q: '<number>', f56_y: '<number>', f57_t: '<object>', f58_l: '<object>', f59_c: '<string>', f60_h: '<object>', f61_t: '<array>', f62_q: '<boolean>', f63_r: '<boolean>', f64_c: '<boolean>', f65_t: '<array>', f66_x: '<boolean>', f67_m: '<boolean>', f68_k: '<null>', f69_a: '<array>', f70_e: '<object>', f71_q: '<string>', f72_a: '<null>', f73_l: '<null>', f74_h: '<array>', f75_o: '<null>', f76_s: '<boolean>', f77_t: '<boolean>', f78_m: '<string>', f79_j: '<string>', f80_w: '<number>', f81_z: '<array>', f82_d: '<boolean>', f83_n: '<object>', f84_a: '<boolean>', f85_d: '<string>', f86_q: '<boolean>', f87_c: '<number>', f88_f: '<null>', f89_l: '<string>', f90_s: '<array>', f91_b: '<object>', f92_i: '<object>', f93_e: '<object>', f94_m: '<null>', f95_e: '<number>', f96_w: '<array>', f97_l: '<string>', f98_n: '<string>', f99_r: '<string>', f100_q: '<number>', f101_l: '<object>', f102_p: '<null>', f103_b: '<string>', f104_e: '<string>', f105_j: '<number>', f106_r: '<object>', f107_j: '<object>', f108_c: '<boolean>', f109_o: '<string>', f110_r: '<number>', f111_u: '<boolean>', f112_x: '<boolean>', f113_r: '<boolean>', f114_o: '<null>', f115_f: '<array>', f116_q: '<string>', f117_o: '<string>', f118_h: '<object>', f119_z: '<string>', f120_h: '<array>', f121_z: '<null>', f122_s: '<number>', f123_z: '<array>', f124_c: '<boolean>', f125_c: '<null>', f126_u: '<object>', f127_v: '<boolean>', f128_c: '<null>', f129_x: '<null>', f130_y: '<number>', f131_a: '<null>', f132_f: '<array>', f133_b: '<boolean>', f134_y: '<boolean>', f135_o: '<boolean>', f136_l: '<number>', f137_f: '<string>', f138_c: '<null>', f139_v: '<object>', f140_z: '<number>', f141_a: '<object>', f142_d: '<string>', f143_y: '<string>', f144_l: '<null>', f145_u: '<string>', f146_d: '<string>', f147_a: '<string>', f148_k: '<number>', f149_l: '<boolean>', f150_l: '<null>', f151_b: '<null>', f152_m: '<array>', f153_k: '<array>', f154_p: '<null>', f155_j: '<object>', f156_t: '<number>', f157_h: '<number>', f158_e: '<string>', f159_j: '<number>', f160_y: '<array>', f161_w: '<number>', f162_r: '<array>', f163_q: '<array>', f164_y: '<number>', f165_e: '<array>', f166_s: '<boolean>', f167_s: '<object>', f168_c: '<object>', f169_i: '<string>', f170_m: '<string>', f171_e: '<array>', f172_w: '<object>', f173_p: '<number>', f174_k: '<array>', f175_l: '<boolean>', f176_l: '<boolean>', f177_z: '<string>', f178_r: '<boolean>', f179_y: '<null>', f180_k: '<number>', f181_i: '<boolean>', f182_s: '<string>', f183_i: '<number>', f184_l: '<number>', f185_v: '<string>', f186_l: '<object>', f187_e: '<null>', f188_t: '<null>', f189_a: '<number>', f190_n: '<string>', f191_a: '<number>', f192_m: '<string>', f193_z: '<number>', f194_c: '<string>', f195_e: '<number>', f196_x: '<number>', f197_u: '<boolean>', f198_m: '<null>', f199_k: '<number>', f200_z: '<number>', f201_j: '<null>', f202_b: '<null>', f203_e: '<array>', f204_o: '<boolean>', f205_f: '<array>', f206_p: '<object>', f207_h: '<string>', f208_p: '<object>', f209_k: '<null>', f210_b: '<string>', f211_w: '<object>', f212_s: '<null>', f213_a: '<number>', f214_z: '<number>', f215_a: '<string>', f216_r: '<string>', f217_o: '<boolean>', f218_y: '<array>', f219_q: '<number>', f220_u: '<boolean>', f221_r: '<string>', f222_d: '<null>', f223_s: '<string>', f224_v: '<object>', f225_m: '<null>', f226_c: '<boolean>', f227_j: '<number>', f228_p: '<boolean>', f229_h: '<string>', f230_j: '<null>', f231_m: '<array>', f232_m: '<number>', f233_b: '<object>', f234_q: '<null>', f235_h: '<object>', f236_x: '<null>', f237_b: '<boolean>', f238_k: '<boolean>', f239_d: '<object>'}, 'ygPdcaaerAjuvuB');
    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('ygPdcaaerAjuvuB', 'zUJxRpUmPocDBbJXnQMsSfK', false, true);
        count_3 = objectStore_7.count(KeyRange_10);
    }
    catch (e){
    }

    var count_4 = objectStore_7.count();
    var add_2 = objectStore_7.add({f0_e: '<string>', f1_h: '<array>', f2_m: '<number>', f3_y: '<string>', f4_a: '<boolean>', f5_j: '<object>', f6_q: '<object>', f7_b: '<object>', f8_i: '<null>'}, 'yEtApYPRtsFKQdtuafGuTrUTs');
    var count_5 = objectStore_7.count();
    var getAllKeys_1 = objectStore_7.getAllKeys();
    var add_3 = objectStore_7.add({f0_g: '<object>', f1_j: '<object>', f2_f: '<string>', f3_g: '<null>', f4_g: '<number>', f5_y: '<object>', f6_j: '<string>'}, 'bpbGsHMcxaHnPvoqxOFOyNvlkHcBAdVkggEAjnxShxZTBAQnqIGNeSfFIKqrJELHpkCQARUyrsDifDKach');
    txn_12.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_12.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_12.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_13 = db.transaction(['objectStore_6', 'objectStore_8'], 'readwrite', {durability:"strict"})
    var objectStore_6 = txn_13.objectStore('objectStore_6');
    var put_3 = objectStore_6.put({f0_o: '<boolean>', f1_o: '<string>', f2_v: '<object>', f3_v: '<null>', f4_j: '<null>', f5_c: '<array>', f6_i: '<boolean>', f7_x: '<null>', f8_w: '<number>', f9_m: '<string>', f10_d: '<array>', f11_x: '<string>', f12_m: '<array>', f13_e: '<array>', f14_y: '<boolean>', f15_q: '<boolean>', f16_h: '<boolean>', f17_e: '<boolean>', f18_x: '<number>', f19_g: '<object>', f20_k: '<string>', f21_t: '<number>', f22_b: '<boolean>', f23_m: '<string>', f24_b: '<array>', f25_j: '<boolean>', f26_e: '<array>', f27_i: '<string>', f28_e: '<string>', f29_z: '<null>', f30_e: '<number>', f31_g: '<number>', f32_m: '<array>', f33_c: '<string>', f34_v: '<string>', f35_y: '<object>', f36_x: '<object>', f37_c: '<boolean>', f38_w: '<string>', f39_h: '<boolean>', f40_z: '<object>', f41_d: '<number>', f42_d: '<number>', f43_l: '<boolean>', f44_e: '<object>', f45_v: '<number>', f46_v: '<object>', f47_v: '<string>', f48_j: '<null>', f49_t: '<null>', f50_t: '<object>', f51_f: '<string>', f52_o: '<number>', f53_l: '<object>', f54_z: '<null>', f55_k: '<null>', f56_b: '<number>', f57_t: '<null>', f58_f: '<boolean>', f59_t: '<object>', f60_r: '<boolean>', f61_g: '<object>', f62_k: '<string>', f63_v: '<number>', f64_o: '<number>', f65_s: '<string>', f66_a: '<object>', f67_a: '<object>', f68_c: '<number>', f69_d: '<null>', f70_x: '<number>', f71_e: '<array>', f72_i: '<number>', f73_f: '<string>', f74_h: '<object>', f75_s: '<null>', f76_k: '<object>', f77_w: '<boolean>', f78_z: '<boolean>', f79_h: '<null>', f80_v: '<boolean>', f81_h: '<string>', f82_d: '<object>', f83_b: '<array>', f84_m: '<string>', f85_l: '<array>', f86_u: '<string>', f87_z: '<object>', f88_e: '<object>', f89_b: '<array>', f90_p: '<string>', f91_h: '<object>', f92_b: '<boolean>', f93_z: '<number>', f94_m: '<string>', f95_w: '<string>', f96_q: '<boolean>', f97_x: '<string>', f98_q: '<object>', f99_a: '<array>', f100_r: '<object>', f101_c: '<string>', f102_t: '<string>', f103_j: '<number>', f104_f: '<boolean>', f105_l: '<number>', f106_r: '<boolean>', f107_a: '<null>', f108_m: '<boolean>', f109_a: '<object>', f110_k: '<object>', f111_u: '<object>', f112_n: '<boolean>', f113_y: '<number>', f114_h: '<null>', f115_f: '<boolean>', f116_w: '<number>', f117_y: '<object>', f118_u: '<string>', f119_k: '<object>', f120_b: '<array>', f121_k: '<string>', f122_o: '<array>', f123_f: '<number>', f124_u: '<array>', f125_m: '<null>', f126_l: '<string>', f127_t: '<string>', f128_k: '<boolean>', f129_d: '<array>', f130_r: '<boolean>', f131_j: '<number>', f132_a: '<boolean>', f133_s: '<string>', f134_z: '<boolean>', f135_k: '<number>', f136_w: '<boolean>', f137_g: '<boolean>', f138_a: '<object>', f139_c: '<array>', f140_t: '<number>', f141_m: '<number>', f142_m: '<null>', f143_x: '<number>', f144_g: '<null>', f145_i: '<object>', f146_t: '<boolean>', f147_d: '<number>', f148_y: '<number>', f149_q: '<number>', f150_q: '<array>', f151_i: '<boolean>', f152_y: '<string>', f153_v: '<array>', f154_f: '<null>', f155_h: '<string>', f156_c: '<number>', f157_m: '<boolean>', f158_y: '<number>', f159_a: '<null>', f160_t: '<object>', f161_z: '<null>', f162_s: '<number>', f163_t: '<number>', YeXDumPhciRIsylLPTsFnqPUhaQHyzqfzfByyMFHWFfJGoCfvCzIBzTdCtNiGSGVbtgIuvSkqzsfMpdM: false});
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.bound(null, null, false, true);
        delete_1 = objectStore_6.delete(KeyRange_12);
    }
    catch (e){
    }

    var clear_7 = objectStore_6.clear();
    var count_6;
    try{
        KeyRange_14 = IDBKeyRange.bound(null, false, false, true);
        count_6 = objectStore_6.count(KeyRange_14);
    }
    catch (e){
    }

    var clear_8 = objectStore_6.clear();
    var count_7 = objectStore_6.count();
    var get_1;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound(null, true);
        get_1 = objectStore_6.get(KeyRange_16);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound(null, null, false, true);
        get_2 = objectStore_6.get(KeyRange_18);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_20 = IDBKeyRange.bound(null, null, false, true);
        count_8 = objectStore_6.count(KeyRange_20);
    }
    catch (e){
    }

    txn_13.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_13.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_13.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_14 = db.transaction(['objectStore_7', 'objectStore_6'], 'readonly', {durability:"relaxed"})
    var objectStore_6 = txn_14.objectStore('objectStore_6');
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound(null, true);
        get_3 = objectStore_6.get(KeyRange_22);
    }
    catch (e){
    }

    var count_9 = objectStore_6.count();
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound(null, null, true, false);
        get_4 = objectStore_6.get(KeyRange_24);
    }
    catch (e){
    }

    var count_10 = objectStore_6.count();
    var getAll_0;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound(null, false);
        getAll_0 = objectStore_6.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only(null);
        getAll_0 = objectStore_6.getAll(KeyRange_27);
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound(false, true);
        get_5 = objectStore_6.get(KeyRange_28);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.only(null);
        get_6 = objectStore_6.get(KeyRange_30);
    }
    catch (e){
    }

    txn_14.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_14.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_14.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5489')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};