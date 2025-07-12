let db;
const openRequest = window.indexedDB.open('str_4368', 6576865771760297)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_77', {autoIncrement: true});
    var add_0 = objectStore_0.add({f0_t: '<number>', f1_m: '<object>', f2_d: '<null>', f3_l: '<boolean>', f4_o: '<number>', f5_f: '<number>', f6_x: '<array>'}, 'hhEeLZLVKAmsDzhbxloZrIULeJmEGYsCnScMAhIXMJpFtZXiScq');
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_78', {autoIncrement: true});
    var index_47 = objectStore_1.createIndex('index_47', 'test', {unique: true});
    var put_0 = objectStore_1.put({f0_u: '<boolean>', f1_d: '<boolean>', f2_f: '<string>', f3_e: '<null>', f4_u: '<string>', f5_d: '<null>', f6_b: '<null>', f7_n: '<boolean>', f8_d: '<string>', f9_v: '<number>', f10_i: '<object>', f11_r: '<object>', f12_q: '<boolean>', f13_i: '<object>', f14_z: '<array>', f15_b: '<boolean>', f16_k: '<object>', f17_s: '<number>', f18_n: '<null>', f19_k: '<null>', f20_t: '<null>', f21_x: '<array>', f22_o: '<null>', f23_u: '<number>', f24_o: '<string>', f25_j: '<string>', f26_c: '<array>', f27_j: '<object>', f28_g: '<array>', f29_q: '<object>', f30_n: '<null>', f31_u: '<object>', f32_d: '<string>', f33_p: '<number>', f34_e: '<number>', f35_y: '<number>', f36_c: '<object>', f37_x: '<string>', f38_k: '<object>', f39_h: '<number>', f40_h: '<object>', f41_h: '<number>', f42_g: '<boolean>', f43_x: '<boolean>', f44_j: '<array>', f45_j: '<number>', f46_u: '<string>', f47_w: '<array>', f48_s: '<string>', f49_h: '<number>', f50_z: '<array>', f51_a: '<object>', f52_x: '<object>', f53_r: '<object>', f54_s: '<number>', f55_r: '<object>', f56_l: '<string>', f57_z: '<string>', f58_q: '<null>', f59_b: '<null>', f60_e: '<array>', f61_w: '<number>', f62_z: '<object>', f63_m: '<number>', f64_u: '<string>', f65_v: '<string>', f66_g: '<null>', f67_d: '<boolean>', f68_w: '<number>', f69_h: '<null>', f70_i: '<null>', f71_n: '<object>', f72_p: '<object>', f73_p: '<object>', f74_s: '<string>', f75_h: '<null>', f76_x: '<null>', f77_s: '<boolean>', f78_l: '<array>', f79_o: '<object>', f80_n: '<string>', f81_t: '<object>', f82_n: '<null>', f83_q: '<array>', f84_u: '<array>', f85_u: '<number>', f86_y: '<null>', f87_x: '<string>', f88_d: '<boolean>', f89_i: '<boolean>', f90_i: '<number>', f91_e: '<null>', f92_i: '<null>', f93_d: '<null>', f94_i: '<string>', f95_z: '<object>', f96_h: '<number>', f97_e: '<array>', f98_b: '<null>', f99_n: '<object>', f100_q: '<boolean>', f101_k: '<object>', f102_n: '<null>', f103_x: '<array>', f104_q: '<null>', f105_n: '<boolean>', f106_z: '<string>', f107_o: '<null>', f108_e: '<null>', f109_s: '<object>', f110_z: '<boolean>', f111_x: '<object>', f112_e: '<array>', f113_y: '<array>', f114_l: '<array>', f115_a: '<null>', f116_e: '<string>', f117_d: '<number>', f118_m: '<object>', f119_j: '<null>', f120_h: '<object>', f121_j: '<string>', f122_h: '<boolean>', f123_u: '<object>', f124_w: '<number>', f125_n: '<object>', f126_m: '<string>', f127_b: '<number>', f128_a: '<boolean>', f129_t: '<null>', f130_g: '<string>', f131_z: '<boolean>', f132_p: '<array>', f133_z: '<string>', f134_y: '<boolean>', f135_v: '<null>', f136_g: '<null>', f137_x: '<array>', f138_o: '<null>', f139_q: '<array>', f140_p: '<null>', f141_t: '<number>', f142_j: '<null>', f143_o: '<boolean>', f144_n: '<string>', f145_v: '<number>', f146_y: '<array>', f147_j: '<array>', f148_f: '<object>', f149_x: '<array>', f150_k: '<array>', f151_e: '<array>', f152_e: '<boolean>', f153_i: '<boolean>', f154_h: '<array>', f155_d: '<null>', f156_c: '<array>', f157_i: '<array>', f158_x: '<array>', f159_e: '<boolean>', f160_k: '<boolean>', f161_x: '<object>', f162_r: '<string>', f163_k: '<null>', f164_g: '<object>', f165_m: '<array>', f166_k: '<array>', f167_x: '<string>', f168_s: '<object>', f169_c: '<null>', f170_a: '<object>', f171_c: '<boolean>', f172_r: '<boolean>', f173_o: '<array>', f174_l: '<number>', f175_r: '<string>', f176_h: '<string>'}, 'vHzKWhllYikecwJOhsPQyGFRcSrmQBVKehHISKNgOHbNPnrMAFIQPzgiuBWrjO');
    objectStore_1.deleteIndex('index_47')
    var count_0 = objectStore_1.count();
    var add_1 = objectStore_1.add({f0_m: '<object>', f1_w: '<number>', f2_i: '<number>'}, 'RgXADhkaUIRmNNPRGhREubRC');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('vHzKWhllYikecwJOhsPQyGFRcSrmQBVKehHISKNgOHbNPnrMAFIQPzgiuBWrjO', 'vHzKWhllYikecwJOhsPQyGFRcSrmQBVKehHISKNgOHbNPnrMAFIQPzgiuBWrjO', true, false);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('RgXADhkaUIRmNNPRGhREubRC', 'RgXADhkaUIRmNNPRGhREubRC', true, true);
        count_1 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_j: '<null>', f1_t: '<string>', f2_h: '<string>', f3_e: '<string>', f4_r: '<string>', f5_n: '<boolean>', f6_c: '<array>'}, 'qFFAcGHCZUVmqSL');
    var index_48 = objectStore_0.createIndex('index_48', 'test');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('hhEeLZLVKAmsDzhbxloZrIULeJmEGYsCnScMAhIXMJpFtZXiScq', false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('vHzKWhllYikecwJOhsPQyGFRcSrmQBVKehHISKNgOHbNPnrMAFIQPzgiuBWrjO', true);
        get_2 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_79');
    var add_2 = objectStore_1.add({f0_g: '<null>', f1_k: '<number>', f2_f: '<array>', f3_i: '<boolean>', f4_p: '<object>'}, 'QdyeDfLUnQnwPMDsBgMIpvgSyfoYwheekKmPUdMnnNmnmmnLOqqxItCXZaFUaVjPwxdPqxxgCSpElI');
    var clear_1 = objectStore_0.clear();
    var put_2 = objectStore_0.put({f0_d: '<array>', f1_d: '<object>', f2_s: '<object>'}, 'wxyUXFHbJEoyYUGvzCpcjHwuxnXsrPpEKBMlkLLLBtzKYHdDhFdTxranBBSYhUWUvmGzTcISu');
    objectStore_0.deleteIndex('index_48')
    var add_3 = objectStore_0.add({f0_t: '<boolean>', f1_u: '<null>', f2_b: '<null>', f3_s: '<string>', f4_i: '<null>', f5_z: '<boolean>', f6_q: '<boolean>', f7_b: '<object>'}, 'wBgwZNCETmEXRqeOwGnEHgIwZzwLKJihQBbLhFDuGEzlXPoOXWwGrtlYYynonOUDkizbCROB');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_100 = db.transaction(['objectStore_77', 'objectStore_78'], 'readwrite', {durability:"default"})
    var objectStore_78 = txn_100.objectStore('objectStore_78');
    var count_2 = objectStore_78.count();
    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.only('QdyeDfLUnQnwPMDsBgMIpvgSyfoYwheekKmPUdMnnNmnmmnLOqqxItCXZaFUaVjPwxdPqxxgCSpElI');
        get_3 = objectStore_78.get(KeyRange_8);
    }
    catch (e){
    }

    var put_3 = objectStore_78.put({f0_d: '<string>'}, 'mGgKIlLAiIBPRaXbiQOv');
    var clear_2 = objectStore_78.clear();
    var put_4 = objectStore_78.put({f0_g: '<string>', f1_v: '<array>', f2_b: '<string>', f3_v: '<array>', f4_c: '<boolean>', f5_e: '<boolean>', f6_c: '<null>', f7_c: '<array>'}, 'fgUvamVpoVpEiBsYAIQIZYpG');
    var getAllKeys_0 = objectStore_78.getAllKeys(3615387164);
    txn_100.abort()
    var put_5 = objectStore_78.put({f0_s: '<null>', f1_l: '<boolean>', f2_l: '<boolean>', f3_w: '<object>', f4_x: '<string>', f5_z: '<null>', f6_d: '<boolean>', f7_k: '<string>', f8_x: '<string>', f9_e: '<null>', f10_l: '<number>', f11_x: '<string>', f12_u: '<number>', f13_n: '<object>', f14_c: '<array>', f15_k: '<null>', f16_z: '<string>', f17_q: '<string>', f18_r: '<string>', f19_i: '<boolean>', f20_c: '<number>', f21_c: '<null>', f22_x: '<array>', f23_t: '<object>', f24_n: '<number>', f25_u: '<string>', f26_f: '<null>', f27_n: '<array>', f28_b: '<object>', f29_x: '<boolean>', f30_n: '<number>', f31_l: '<number>', f32_w: '<array>', f33_p: '<string>', f34_s: '<number>', f35_j: '<null>', f36_f: '<object>', f37_r: '<null>', f38_r: '<string>', f39_n: '<null>', f40_u: '<null>', f41_a: '<array>', f42_j: '<boolean>', f43_n: '<boolean>', f44_x: '<string>', f45_a: '<boolean>', f46_a: '<null>', f47_z: '<array>', f48_w: '<array>', f49_w: '<string>', f50_e: '<number>', f51_x: '<number>', f52_s: '<number>', f53_d: '<boolean>', f54_f: '<object>', f55_h: '<array>', f56_q: '<object>', f57_a: '<object>', f58_i: '<array>', f59_o: '<boolean>', f60_c: '<object>', f61_e: '<null>', f62_o: '<boolean>', f63_h: '<number>', f64_l: '<array>', f65_q: '<number>', f66_p: '<string>', f67_i: '<boolean>', f68_e: '<boolean>', f69_l: '<object>', f70_v: '<boolean>', f71_u: '<array>', f72_b: '<array>', f73_c: '<number>', f74_g: '<string>', f75_z: '<object>', f76_r: '<string>', f77_a: '<array>', f78_f: '<number>', f79_q: '<string>', f80_n: '<array>', f81_z: '<array>', f82_b: '<number>', f83_i: '<string>', f84_c: '<object>', f85_j: '<boolean>', f86_x: '<object>', f87_y: '<array>', f88_f: '<boolean>', f89_s: '<object>', f90_q: '<null>', f91_v: '<string>', f92_f: '<array>', f93_v: '<object>', f94_a: '<object>', f95_m: '<number>', f96_q: '<array>', f97_s: '<null>', f98_x: '<object>', f99_g: '<object>', f100_p: '<array>', f101_k: '<array>', f102_n: '<null>', f103_f: '<array>', f104_t: '<boolean>', f105_m: '<object>', f106_b: '<number>', f107_v: '<array>', f108_n: '<boolean>', f109_g: '<string>', f110_g: '<string>', f111_b: '<object>', f112_k: '<boolean>', f113_g: '<null>', f114_m: '<boolean>', f115_m: '<null>', f116_g: '<string>', f117_g: '<boolean>', f118_y: '<null>', f119_m: '<object>', f120_b: '<null>', f121_j: '<string>', f122_i: '<boolean>', f123_j: '<null>', f124_n: '<boolean>', f125_i: '<array>', f126_p: '<number>', f127_d: '<boolean>', f128_i: '<object>', f129_q: '<boolean>', f130_a: '<string>', f131_g: '<number>', f132_g: '<string>', f133_m: '<null>', f134_x: '<string>', f135_i: '<array>', f136_g: '<number>', f137_v: '<object>', f138_s: '<boolean>', f139_c: '<number>', f140_d: '<number>', f141_v: '<null>', f142_f: '<null>', f143_p: '<boolean>', f144_j: '<string>', f145_t: '<string>', f146_d: '<number>', f147_n: '<number>', f148_x: '<string>', f149_s: '<null>', f150_l: '<null>', f151_w: '<string>', f152_e: '<boolean>', f153_e: '<object>', f154_b: '<string>', f155_b: '<array>', f156_t: '<number>', f157_y: '<boolean>', f158_i: '<boolean>', f159_r: '<array>', f160_x: '<object>', f161_i: '<string>', f162_y: '<number>', f163_a: '<object>', f164_p: '<null>', f165_w: '<object>', f166_g: '<object>', f167_d: '<null>', f168_e: '<boolean>', f169_w: '<object>', f170_d: '<boolean>', f171_t: '<array>', f172_j: '<object>', f173_f: '<object>', f174_b: '<null>', f175_g: '<number>', f176_m: '<null>', f177_y: '<number>', f178_s: '<null>', f179_r: '<null>', f180_u: '<number>', f181_t: '<string>', f182_w: '<array>', f183_d: '<null>', f184_c: '<object>', f185_e: '<object>', f186_x: '<string>', f187_l: '<boolean>', f188_p: '<string>'}, 'TnFFjmedSrTdqozyTWFMSCjYwKzjLjnEIVogOqieXDyEuSlcuLhguyoLxAlTJXOAaEWTeZgtSisVPoPM');
    var put_6 = objectStore_78.put({f0_h: '<null>', f1_e: '<array>', f2_a: '<string>'}, 'gFjApAaFHJBfHkhmAODUOiDiCMrcwLiiNBweWikSoZmbIslApkffTonxSaGuqCrIeuusinowigihvGpeprTV');
    txn_100.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_100.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_100.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_101 = db.transaction(['objectStore_79'], 'readonly', {durability:"strict"})
    var objectStore_79;
    txn_101.commit()
    objectStore_79 = txn_101.objectStore('objectStore_79');
    txn_101.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_101.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_101.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_102 = db.transaction(['objectStore_78', 'objectStore_77', 'objectStore_79'], 'readwrite', {durability:"default"})
    var objectStore_79 = txn_102.objectStore('objectStore_79');
    var clear_3 = objectStore_79.clear();
    var clear_4 = objectStore_79.clear();
    var put_7 = objectStore_79.put({f0_k: '<string>', f1_s: '<string>'}, 'YfMEdvzMkZqWTTKUTrNWlGLXMSUqkkJgvvFZluaffYvRQK');
    var put_8 = objectStore_79.put({f0_c: '<string>', f1_j: '<array>', f2_j: '<number>', f3_w: '<object>', f4_z: '<number>', f5_d: '<null>', f6_r: '<number>'}, 'foXovDVJVUxDVmqVsMwRrUIZiewxRFZKuSCgIkkiDbjwUDnoZcsGzLavBSvNsCOzxzL');
    var clear_5 = objectStore_79.clear();
    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('YfMEdvzMkZqWTTKUTrNWlGLXMSUqkkJgvvFZluaffYvRQK', 'YfMEdvzMkZqWTTKUTrNWlGLXMSUqkkJgvvFZluaffYvRQK', false, false);
        get_4 = objectStore_79.get(KeyRange_10);
    }
    catch (e){
    }

    var put_9 = objectStore_79.put({f0_m: '<number>', f1_j: '<number>', f2_n: '<boolean>'}, 'InycqwwQmtAm');
    var count_3 = objectStore_79.count();
    txn_102.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_102.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_102.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_103 = db.transaction(['objectStore_79'], 'readwrite', {durability:"strict"})
    var objectStore_79 = txn_103.objectStore('objectStore_79');
    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('foXovDVJVUxDVmqVsMwRrUIZiewxRFZKuSCgIkkiDbjwUDnoZcsGzLavBSvNsCOzxzL', false);
        count_4 = objectStore_79.count(KeyRange_12);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('InycqwwQmtAm', true);
        get_5 = objectStore_79.get(KeyRange_14);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('InycqwwQmtAm', true);
        get_6 = objectStore_79.get(KeyRange_16);
    }
    catch (e){
    }

    var clear_6 = objectStore_79.clear();
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.bound('YfMEdvzMkZqWTTKUTrNWlGLXMSUqkkJgvvFZluaffYvRQK', 'YfMEdvzMkZqWTTKUTrNWlGLXMSUqkkJgvvFZluaffYvRQK', false, false);
        delete_0 = objectStore_79.delete(KeyRange_18);
    }
    catch (e){
    }

    txn_103.abort()
    var getAllKeys_1 = objectStore_79.getAllKeys(3622723848);
    var count_5 = objectStore_79.count();
    var put_10 = objectStore_79.put({f0_y: '<null>', f1_g: '<boolean>', f2_w: '<array>', f3_g: '<null>', f4_y: '<array>'}, 'CcWpSySgbZGbNzxWhYDXIAwfUYZuppXtlevJmoRzDpsGoSwAJjiUEicBe');
    var count_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('CcWpSySgbZGbNzxWhYDXIAwfUYZuppXtlevJmoRzDpsGoSwAJjiUEicBe', 'InycqwwQmtAm', true, false);
        count_6 = objectStore_79.count(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_79.getAllKeys(2529202390);
    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.only('InycqwwQmtAm');
        get_7 = objectStore_79.get(KeyRange_22);
    }
    catch (e){
    }

    var count_7 = objectStore_79.count();
    var put_11 = objectStore_79.put({f0_c: '<string>', f1_q: '<number>', f2_d: '<null>', f3_y: '<boolean>'}, 'DuCGNtTDbCMekkPbaorrTTsuBqqKRzhThJBoS');
    txn_103.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_103.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_103.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_104 = db.transaction(['objectStore_78', 'objectStore_77'], 'readonly', {durability:"strict"})
    var objectStore_78 = txn_104.objectStore('objectStore_78');
    var get_8;
    try{
        KeyRange_24 = IDBKeyRange.only('QdyeDfLUnQnwPMDsBgMIpvgSyfoYwheekKmPUdMnnNmnmmnLOqqxItCXZaFUaVjPwxdPqxxgCSpElI');
        get_8 = objectStore_78.get(KeyRange_24);
    }
    catch (e){
    }

    var count_8 = objectStore_78.count();
    var count_9 = objectStore_78.count();
    var get_9;
    try{
        KeyRange_26 = IDBKeyRange.bound('fgUvamVpoVpEiBsYAIQIZYpG', 'QdyeDfLUnQnwPMDsBgMIpvgSyfoYwheekKmPUdMnnNmnmmnLOqqxItCXZaFUaVjPwxdPqxxgCSpElI', true, true);
        get_9 = objectStore_78.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_28 = IDBKeyRange.only('RgXADhkaUIRmNNPRGhREubRC');
        getAll_0 = objectStore_78.getAll(KeyRange_28, 2552793574);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('fgUvamVpoVpEiBsYAIQIZYpG');
        getAll_0 = objectStore_78.getAll(KeyRange_29);
    }

    var get_10;
    try{
        KeyRange_30 = IDBKeyRange.bound('TnFFjmedSrTdqozyTWFMSCjYwKzjLjnEIVogOqieXDyEuSlcuLhguyoLxAlTJXOAaEWTeZgtSisVPoPM', 'RgXADhkaUIRmNNPRGhREubRC', false, false);
        get_10 = objectStore_78.get(KeyRange_30);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('RgXADhkaUIRmNNPRGhREubRC', true);
        get_11 = objectStore_78.get(KeyRange_32);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('mGgKIlLAiIBPRaXbiQOv', false);
        get_12 = objectStore_78.get(KeyRange_34);
    }
    catch (e){
    }

    var getAll_1 = objectStore_78.getAll();
    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.only('gFjApAaFHJBfHkhmAODUOiDiCMrcwLiiNBweWikSoZmbIslApkffTonxSaGuqCrIeuusinowigihvGpeprTV');
        getAll_2 = objectStore_78.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('mGgKIlLAiIBPRaXbiQOv');
        getAll_2 = objectStore_78.getAll(KeyRange_37);
    }

    var getAll_3;
    txn_104.commit()
    getAll_3 = objectStore_78.getAll();
    txn_104.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_104.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_104.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5657')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};