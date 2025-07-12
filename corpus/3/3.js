let db;
const openRequest = window.indexedDB.open('str_6299', 3938063729572293)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_24', {keypath: 'zWTyfuumIpvbufncBQTkMppdzVajFIFEyZKjxpuHwCeiPZjnmCMesvaL.jXkjuRWYsXAPBzaZMHrcFpAHujUkvZWjSCWkBilbEOOooLMACDrOqEeCsQJnSdtPJGALLWVBYkn.ldbneicTleHTbTibBzm.AZnJHaLpUQtEJURZVVMgbAgsqKHiQGZzPmHeYLminvWwrVVpbbNwoapqHqwKtxQBhpHUU.RFwhzLE.ZkRMpYAXPpkKzOziojmhMyVE.NEuYYLEekakEWI.dMnGbIujAcWLf.SjBIYgwLfjtYCwUekQaLwaIljoKlzCzbCOumSvgWqxdatZexflbapQenXmuOFKbzGrCviQnXlHNJpMrVuWbrB.aeycjhqqWROVbzQdbiErEeKBVjhUjQXUwoohKquDuxFXobMmoqSNZxvOtlkfocvwndBq', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_25', {autoIncrement: false});
    var put_0 = objectStore_1.put({f0_c: '<object>', f1_h: '<boolean>', f2_b: '<null>', f3_l: '<null>', f4_i: '<string>', f5_d: '<number>'}, 'JXQrDoyaDTJXuVpTCjNHaRriQQQmTHqymvAJ');
    var count_0 = objectStore_1.count();
    var index_22 = objectStore_1.createIndex('index_22', 'test', {multiEntry: true});
    var add_0 = objectStore_0.add({f0_e: '<null>', f1_u: '<array>', f2_o: '<null>', f3_t: '<boolean>', f4_q: '<boolean>', f5_m: '<array>', f6_a: '<array>', f7_b: '<string>'}, 'cDaOFygBPiMdAHbhuocpOEhSAQqseXqgSpqxNxjeWnSjbRmxnAU');
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('cDaOFygBPiMdAHbhuocpOEhSAQqseXqgSpqxNxjeWnSjbRmxnAU', false);
        count_1 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_l: '<number>', f1_s: '<number>', f2_u: '<number>', f3_n: '<object>', f4_m: '<object>', f5_v: '<string>', f6_x: '<null>', f7_k: '<number>', f8_b: '<string>', f9_n: '<boolean>'}, 'EsXQGTaCayVUWAzCHNuFuPCbbObyNMgYLGoxQweQddprF');
    var put_1 = objectStore_0.put({f0_x: '<number>', f1_d: '<number>'}, 'NcweyggccamcdidSAybdiIXileijradvPtsaxcOBg');
    var objectStore_2 = db.createObjectStore('objectStore_26', {autoIncrement: false});
    objectStore_1.deleteIndex('index_22')
    var objectStore_3 = db.createObjectStore('objectStore_27', {autoIncrement: false});
    var add_2 = objectStore_2.add({f0_u: '<array>', f1_x: '<boolean>'}, 'rEdAtLRZIKtsOyOsRDbInGalsGpmRcRKglrGvzzwusdXnCrXIZOjIFvZvEAFEzJeIePY');
    var objectStore_4 = db.createObjectStore('objectStore_28', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_35 = db.transaction(['objectStore_25', 'objectStore_28', 'objectStore_26'], 'readwrite', {durability:"default"})
    var objectStore_28 = txn_35.objectStore('objectStore_28');
    var clear_1 = objectStore_28.clear();
    var clear_2 = objectStore_28.clear();
    var clear_3 = objectStore_28.clear();
    txn_35.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_35.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_35.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_36 = db.transaction(['objectStore_27'], 'readonly', {durability:"default"})
    var objectStore_27 = txn_36.objectStore('objectStore_27');
    txn_36.abort()
    txn_36.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_36.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_37 = db.transaction(['objectStore_27'], 'readwrite', {durability:"strict"})
    var objectStore_27 = txn_37.objectStore('objectStore_27');
    var add_3 = objectStore_27.add({f0_w: '<number>', f1_m: '<array>', f2_w: '<boolean>', f3_c: '<number>', f4_z: '<string>', f5_c: '<boolean>', f6_z: '<string>', f7_z: '<number>', f8_u: '<array>', f9_j: '<string>'}, 'luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR');
    var clear_4 = objectStore_27.clear();
    var count_2 = objectStore_27.count();
    var count_3;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', true);
        count_3 = objectStore_27.count(KeyRange_2);
    }
    catch (e){
    }

    var add_4 = objectStore_27.add({f0_d: '<object>', f1_v: '<null>', f2_w: '<number>', f3_a: '<array>', f4_a: '<array>', f5_v: '<null>', f6_i: '<array>', f7_p: '<string>', f8_s: '<array>', f9_a: '<array>', f10_k: '<number>', f11_h: '<boolean>', f12_b: '<string>', f13_h: '<boolean>', f14_j: '<null>', f15_y: '<string>', f16_e: '<boolean>', f17_x: '<array>', f18_g: '<null>', f19_t: '<string>', f20_n: '<string>', f21_b: '<boolean>', f22_a: '<boolean>', f23_v: '<array>', f24_s: '<object>', f25_m: '<string>', f26_o: '<object>', f27_t: '<string>', f28_t: '<boolean>', f29_t: '<array>', f30_y: '<string>', f31_n: '<array>', f32_u: '<boolean>', f33_x: '<string>', f34_b: '<number>', f35_m: '<string>', f36_s: '<object>', f37_v: '<number>', f38_q: '<number>', f39_y: '<boolean>', f40_w: '<object>', f41_r: '<array>', f42_x: '<array>', f43_c: '<object>', f44_r: '<array>', f45_m: '<null>', f46_j: '<number>', f47_u: '<array>', f48_g: '<object>', f49_c: '<number>', f50_d: '<null>', f51_z: '<string>', f52_l: '<array>', f53_t: '<array>', f54_f: '<null>', f55_z: '<null>', f56_x: '<array>', f57_z: '<string>', f58_s: '<object>', f59_l: '<number>', f60_q: '<null>', f61_a: '<boolean>', f62_l: '<object>', f63_z: '<array>', f64_r: '<object>', f65_z: '<string>', f66_o: '<number>', f67_d: '<null>', f68_g: '<string>', f69_l: '<number>', f70_g: '<string>', f71_a: '<boolean>', f72_n: '<null>', f73_o: '<string>', f74_y: '<string>', f75_g: '<boolean>', f76_s: '<object>', f77_o: '<array>', f78_f: '<boolean>', f79_f: '<null>', f80_g: '<null>', f81_a: '<number>', f82_u: '<number>', f83_j: '<number>', f84_o: '<boolean>', f85_y: '<number>', f86_e: '<boolean>', f87_x: '<object>', f88_c: '<string>', f89_d: '<boolean>', f90_v: '<string>', f91_k: '<string>', f92_a: '<string>', f93_z: '<array>', f94_m: '<null>', f95_b: '<string>', f96_w: '<array>', f97_w: '<number>', f98_n: '<null>', f99_f: '<boolean>', f100_k: '<array>', f101_t: '<number>', f102_n: '<array>', f103_c: '<array>', f104_v: '<null>', f105_f: '<boolean>', f106_t: '<array>', f107_m: '<null>', f108_m: '<array>', f109_o: '<boolean>', f110_z: '<null>', f111_l: '<boolean>', f112_u: '<boolean>', f113_f: '<array>', f114_d: '<string>', f115_b: '<number>', f116_w: '<object>', f117_n: '<null>', f118_f: '<boolean>', f119_n: '<string>', f120_m: '<array>', f121_m: '<string>', f122_d: '<array>', f123_p: '<object>', f124_p: '<array>', f125_k: '<boolean>', f126_j: '<null>', f127_p: '<string>', f128_j: '<boolean>', f129_s: '<null>', f130_n: '<null>', f131_o: '<object>', f132_h: '<object>', f133_g: '<string>', f134_f: '<null>', f135_e: '<string>', f136_u: '<boolean>', f137_s: '<number>', f138_c: '<string>', f139_e: '<boolean>', f140_l: '<number>', f141_c: '<boolean>', f142_h: '<null>', f143_k: '<boolean>', f144_t: '<string>', f145_f: '<object>', f146_a: '<object>', f147_q: '<null>', f148_y: '<object>', f149_d: '<array>', f150_d: '<string>', f151_b: '<null>', f152_y: '<number>', f153_z: '<object>', f154_l: '<string>', f155_v: '<array>', f156_x: '<null>', f157_k: '<null>', f158_j: '<array>', f159_q: '<array>', f160_y: '<null>', f161_t: '<array>', f162_b: '<null>', f163_q: '<null>', f164_c: '<array>', f165_g: '<null>', f166_i: '<object>', f167_l: '<object>', f168_a: '<boolean>', f169_l: '<boolean>', f170_o: '<number>', f171_a: '<null>', f172_z: '<array>', f173_h: '<object>', f174_k: '<string>', f175_e: '<boolean>', f176_m: '<null>', f177_v: '<null>', f178_q: '<array>', f179_m: '<object>', f180_i: '<array>', f181_p: '<array>', f182_c: '<boolean>', f183_b: '<boolean>', f184_d: '<boolean>', f185_m: '<array>', f186_y: '<string>', f187_n: '<null>', f188_v: '<string>', f189_z: '<object>', f190_y: '<string>', f191_o: '<string>', f192_b: '<object>', f193_x: '<array>', f194_p: '<boolean>', f195_z: '<null>', f196_s: '<object>', f197_a: '<null>', f198_e: '<boolean>', f199_a: '<string>', f200_r: '<array>', f201_n: '<number>', f202_z: '<object>'}, 'azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ');
    var clear_5 = objectStore_27.clear();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', false);
        get_0 = objectStore_27.get(KeyRange_4);
    }
    catch (e){
    }

    txn_37.commit()
    var count_4;
    try{
        KeyRange_6 = IDBKeyRange.bound('azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ', 'azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ', true, false);
        count_4 = objectStore_27.count(KeyRange_6);
    }
    catch (e){
    }

    var clear_6 = objectStore_27.clear();
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', 'azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ', false, false);
        delete_0 = objectStore_27.delete(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_27.put({f0_q: '<array>', f1_u: '<null>', f2_c: '<array>', f3_f: '<null>', f4_s: '<string>', f5_o: '<array>', f6_u: '<null>'}, 'eYLfZdGLSnEBbDSbDPbpiYlZ');
    var count_5 = objectStore_27.count();
    var put_3 = objectStore_27.put({f0_y: '<number>', f1_j: '<boolean>', f2_n: '<object>', f3_t: '<boolean>', f4_i: '<boolean>', f5_a: '<number>'}, 'bAFTKCgKozniNzoCJm');
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ', 'bAFTKCgKozniNzoCJm', true, true);
        get_1 = objectStore_27.get(KeyRange_10);
    }
    catch (e){
    }

    txn_37.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_37.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_37.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_38 = db.transaction(['objectStore_28'], 'readonly', {durability:"default"})
    var objectStore_28 = txn_38.objectStore('objectStore_28');
    txn_38.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_38.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_38.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_39 = db.transaction(['objectStore_27'], 'readonly', {durability:"default"})
    var objectStore_27 = txn_39.objectStore('objectStore_27');
    var count_6 = objectStore_27.count();
    var count_7;
    try{
        KeyRange_12 = IDBKeyRange.bound('luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', 'luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', false, true);
        count_7 = objectStore_27.count(KeyRange_12);
    }
    catch (e){
    }

    txn_39.abort()
    var count_8;
    try{
        KeyRange_14 = IDBKeyRange.bound('luMhFrkRFsEXDVZgVKNbnTsQHdSHykeCabyjSoLKrkDHTR', 'bAFTKCgKozniNzoCJm', false, false);
        count_8 = objectStore_27.count(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_27.getAllKeys(2185609355);
    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.only('azwxyufwHSVixZqWGvEnUcKYnXhRPcgsTVMtPJ');
        getAllKeys_1 = objectStore_27.getAllKeys(KeyRange_16, 1194885583);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('eYLfZdGLSnEBbDSbDPbpiYlZ');
        getAllKeys_1 = objectStore_27.getAllKeys(KeyRange_17);
    }

    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.only('eYLfZdGLSnEBbDSbDPbpiYlZ');
        get_2 = objectStore_27.get(KeyRange_18);
    }
    catch (e){
    }

    var count_9 = objectStore_27.count();
    txn_39.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_39.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_39.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2786')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};