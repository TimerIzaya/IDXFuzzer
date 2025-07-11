let db;
db.close()
const openRequest = window.indexedDB.open('str_8047', 1247227841693566)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_132');
    var add_0 = objectStore_0.add({f0_o: '<number>', f1_w: '<object>', f2_g: '<array>', f3_z: '<null>', f4_i: '<object>', f5_j: '<number>', f6_k: '<null>', f7_d: '<object>', f8_b: '<object>', f9_k: '<string>', f10_j: '<array>', f11_y: '<null>', f12_i: '<array>', f13_w: '<number>', f14_o: '<string>', f15_b: '<number>', f16_d: '<number>', f17_i: '<boolean>', f18_b: '<string>', f19_a: '<number>', f20_r: '<object>', f21_a: '<number>', f22_z: '<object>', f23_g: '<null>', f24_r: '<null>', f25_o: '<null>', f26_f: '<boolean>', f27_z: '<object>', f28_k: '<number>', f29_m: '<number>', f30_e: '<null>', f31_q: '<array>', f32_i: '<null>', f33_l: '<array>', f34_l: '<number>', f35_r: '<number>', f36_v: '<number>', f37_x: '<string>', f38_v: '<number>', f39_n: '<null>', f40_i: '<null>', f41_h: '<number>', f42_w: '<string>', f43_w: '<null>', f44_w: '<number>', f45_i: '<boolean>', f46_x: '<string>', f47_m: '<null>', f48_l: '<number>', f49_c: '<number>', f50_o: '<array>', f51_q: '<object>', f52_y: '<null>', f53_h: '<object>', f54_f: '<boolean>', f55_f: '<null>', f56_w: '<object>', f57_b: '<array>', f58_t: '<array>', f59_d: '<string>', f60_c: '<null>', f61_l: '<boolean>', f62_g: '<number>', f63_e: '<string>', f64_g: '<string>', f65_f: '<null>', f66_u: '<string>', f67_t: '<object>', f68_m: '<string>', f69_j: '<number>', f70_t: '<array>', f71_e: '<null>', f72_y: '<string>', f73_o: '<array>', f74_j: '<number>', f75_z: '<string>', f76_m: '<array>', f77_s: '<array>', f78_e: '<boolean>', f79_r: '<string>', f80_x: '<string>', f81_w: '<array>', f82_e: '<string>', f83_v: '<string>', f84_o: '<null>', f85_w: '<boolean>', f86_q: '<boolean>', f87_q: '<number>', f88_k: '<string>', f89_o: '<null>', f90_h: '<object>', f91_i: '<null>', f92_d: '<boolean>', f93_n: '<number>', f94_k: '<null>', f95_y: '<array>', f96_y: '<string>', f97_l: '<object>', f98_b: '<object>', f99_f: '<array>', f100_o: '<boolean>', f101_m: '<null>', f102_c: '<boolean>', f103_t: '<string>', f104_s: '<array>', f105_j: '<null>', f106_a: '<null>', f107_d: '<number>', f108_f: '<array>', f109_j: '<array>', f110_w: '<string>', f111_m: '<object>', f112_t: '<null>', f113_r: '<string>', f114_l: '<string>', f115_l: '<array>', f116_z: '<string>', f117_x: '<number>', f118_f: '<null>', f119_b: '<object>', f120_t: '<boolean>', f121_t: '<string>', f122_n: '<object>', f123_c: '<string>', f124_k: '<boolean>', f125_g: '<number>', f126_g: '<null>', f127_b: '<null>', f128_n: '<null>', f129_o: '<boolean>', f130_p: '<object>', f131_f: '<null>', f132_e: '<array>', f133_b: '<array>', f134_l: '<number>', f135_v: '<string>', f136_t: '<number>', f137_f: '<boolean>', f138_q: '<object>', f139_b: '<object>', f140_s: '<null>', f141_f: '<string>', f142_z: '<string>', f143_p: '<object>', f144_c: '<boolean>', f145_v: '<number>', f146_d: '<object>', f147_m: '<object>', f148_r: '<array>', f149_e: '<null>', f150_z: '<object>', f151_a: '<boolean>', f152_j: '<boolean>', f153_m: '<number>', f154_k: '<array>', f155_i: '<object>', f156_v: '<number>', f157_d: '<string>', f158_p: '<object>', f159_k: '<boolean>', f160_k: '<null>', f161_h: '<string>', f162_p: '<array>', f163_n: '<null>', f164_z: '<string>', f165_h: '<number>', f166_q: '<array>', f167_x: '<boolean>', f168_c: '<string>', f169_f: '<null>', f170_j: '<boolean>', f171_e: '<string>', f172_f: '<string>', f173_e: '<object>', f174_i: '<array>', f175_i: '<object>', f176_y: '<string>', f177_h: '<string>', f178_c: '<number>', f179_t: '<boolean>', f180_y: '<null>', f181_o: '<null>', f182_e: '<number>', f183_n: '<number>', f184_q: '<number>', f185_z: '<object>', f186_q: '<string>', f187_n: '<string>', f188_d: '<string>', f189_e: '<string>', f190_o: '<boolean>', f191_g: '<boolean>', f192_y: '<array>', f193_v: '<number>', f194_u: '<object>', f195_w: '<null>', f196_q: '<null>', f197_x: '<string>', f198_b: '<array>', f199_u: '<array>', f200_i: '<object>', f201_n: '<array>', f202_b: '<number>', f203_n: '<null>', f204_s: '<array>', f205_v: '<boolean>', f206_g: '<array>', f207_l: '<array>', f208_z: '<string>', f209_r: '<null>', f210_b: '<string>', f211_o: '<object>', f212_r: '<null>', f213_i: '<string>', f214_o: '<number>', f215_f: '<array>', f216_f: '<array>', f217_p: '<string>', f218_i: '<string>', f219_h: '<number>', f220_r: '<number>', f221_f: '<number>', f222_w: '<object>', f223_t: '<array>', f224_q: '<boolean>', f225_a: '<array>', f226_o: '<null>', f227_f: '<object>', f228_e: '<string>', f229_x: '<string>', f230_l: '<string>', f231_q: '<object>', f232_l: '<string>', f233_u: '<object>', f234_t: '<object>', f235_v: '<array>', f236_l: '<null>', f237_l: '<array>', f238_z: '<string>', f239_p: '<boolean>', f240_w: '<object>', f241_y: '<object>', f242_o: '<object>', f243_v: '<number>', f244_o: '<number>', f245_o: '<number>', f246_w: '<number>', f247_l: '<null>', f248_d: '<null>', f249_x: '<object>', f250_k: '<number>', f251_b: '<object>', f252_y: '<number>', f253_l: '<object>', f254_h: '<boolean>', f255_d: '<object>', f256_q: '<boolean>', f257_t: '<boolean>', f258_p: '<string>', f259_r: '<array>', f260_j: '<number>', f261_p: '<boolean>', f262_q: '<number>', f263_e: '<null>', f264_c: '<string>', f265_n: '<number>', f266_j: '<object>', f267_p: '<null>', f268_a: '<array>', f269_n: '<string>', f270_a: '<array>', f271_a: '<object>', f272_v: '<boolean>', f273_d: '<number>', f274_t: '<boolean>', f275_r: '<string>', f276_m: '<string>', f277_g: '<object>', f278_e: '<number>', f279_b: '<boolean>', f280_p: '<array>', f281_m: '<object>', f282_e: '<array>', f283_m: '<string>', f284_x: '<boolean>', f285_s: '<string>', f286_x: '<string>', f287_r: '<string>', f288_m: '<string>', f289_c: '<string>', f290_d: '<string>', f291_n: '<string>', f292_g: '<array>', f293_q: '<object>', f294_i: '<number>', f295_a: '<boolean>', f296_v: '<number>', f297_m: '<boolean>', f298_v: '<object>', f299_m: '<null>', f300_o: '<null>', f301_t: '<object>', f302_r: '<number>', f303_s: '<null>', f304_h: '<array>', f305_o: '<object>', f306_o: '<number>', f307_o: '<string>', f308_x: '<object>', f309_x: '<string>', f310_d: '<object>', f311_v: '<boolean>', f312_o: '<number>', f313_u: '<object>', f314_z: '<string>', f315_x: '<object>', f316_f: '<string>', f317_z: '<string>', f318_p: '<object>', f319_n: '<object>', f320_k: '<object>', f321_p: '<object>', f322_y: '<null>', f323_o: '<null>', f324_f: '<number>', f325_j: '<string>', f326_a: '<object>', f327_d: '<object>', f328_q: '<object>', f329_j: '<number>', f330_i: '<null>', f331_e: '<string>', f332_o: '<boolean>', f333_a: '<array>', f334_i: '<string>', f335_r: '<boolean>', f336_k: '<null>', f337_l: '<boolean>', f338_k: '<number>', f339_o: '<object>', f340_a: '<number>', f341_n: '<array>', f342_s: '<array>', f343_f: '<number>', f344_g: '<boolean>', f345_e: '<string>', f346_r: '<number>', f347_c: '<number>', f348_m: '<null>', f349_n: '<boolean>', f350_a: '<array>', f351_z: '<string>', f352_m: '<array>', f353_p: '<null>', f354_b: '<null>', f355_s: '<string>', f356_l: '<string>', f357_b: '<number>'}, 'lRTFMiDmLbJFyhjvCihdiaPkHlQzVUtfYjoguvKBBWKljwjIthjTVvdJRnqHcxMZhnBhMctkeepMEMTAhFFanfNvwnzTcxSICupiYqKgprymnrDigLOebsaGZKhldQpqjnCSUPbdEpWqrDohtZofLLaR');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('lRTFMiDmLbJFyhjvCihdiaPkHlQzVUtfYjoguvKBBWKljwjIthjTVvdJRnqHcxMZhnBhMctkeepMEMTAhFFanfNvwnzTcxSICupiYqKgprymnrDigLOebsaGZKhldQpqjnCSUPbdEpWqrDohtZofLLaR', 'lRTFMiDmLbJFyhjvCihdiaPkHlQzVUtfYjoguvKBBWKljwjIthjTVvdJRnqHcxMZhnBhMctkeepMEMTAhFFanfNvwnzTcxSICupiYqKgprymnrDigLOebsaGZKhldQpqjnCSUPbdEpWqrDohtZofLLaR', true, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_0.getAllKeys(4131071748);
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.only('lRTFMiDmLbJFyhjvCihdiaPkHlQzVUtfYjoguvKBBWKljwjIthjTVvdJRnqHcxMZhnBhMctkeepMEMTAhFFanfNvwnzTcxSICupiYqKgprymnrDigLOebsaGZKhldQpqjnCSUPbdEpWqrDohtZofLLaR');
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var index_100 = objectStore_0.createIndex('index_100', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_0.put({f0_c: '<array>', f1_p: '<number>', f2_z: '<array>', f3_e: '<object>', f4_z: '<object>', f5_r: '<object>', f6_l: '<array>', f7_c: '<object>'}, 'ppkndPgNskNwgNdsBzdoKYxAfgoQZutGeGJhMikswNxkwhFGiSjJCsajPSzXEoMGxEUeFpLnFYJLclcbcUXgqlUeaRrCiDNELlWGSsfLRrkfIObjSFzeJHvVjkgeYbmNsosJOdeiyWKfoTHiSTNWYfUaCdgLodksFZnCgjpQhTFOscPIXAvwTfEGeVObqpxhijURUjmVKDtGNlCGGmzroAnafKLYiBCKNRHVBbUHWCWAaeIXgPWguBRTtfMYRFIPKvdQDEmnHwJgdEFkgviTlHPMVupngVvPolzcRUGEcqhMNMqlguoBnKBVkpBANyWUgEunQOFaChhOxDWdQJNYwFluuhJMhIvFJONKJMfziLKZAyPozYLbhuRcxHVZiIHwarRpwFsfBpHcKWLSlJWfINRbbHqaIXdOsitNYngDbxFmVwCutMWAwYXvzrhBpoSjEoxzISnJrqUffRwgBxqBuMrXWiAAwwmtdgSVdcHIHwgFKkXecXfpZXvrggfXUREVOXudNQviFVswEZDRMmcJrzMdWvyvfNbSqoPTRJZZFFZTAhWOMEXzuZuzMQPVlpDtAVQWqkzTSFToReYWhbFrnucUcyyxqbFVamyqWDwygRLmSbeDXxmrhvpxQPunkiNsVcicgShkezFPogjzGvfhQsgqBmplITcYyYyjRXxtZRGfKBRyRVXIsdgknHUtOnQIeNzMEzaHAHMmmfaspOuzsakKVZDezJwpSdBxLUCQrRmhYPcZeqUtHZORGFffFgWRaBKGCkjGmVGWEvUJoqMsPSmsrKywFbWshFJFQPsezAqOmfgTnUBSQOPAlytJqrQBPbfOtHAKQBzNqHmwGEugcdyhID');
    var count_2 = objectStore_0.count();
    var put_1 = objectStore_0.put({f0_a: '<array>', f1_w: '<boolean>', f2_d: '<array>', f3_s: '<string>', f4_t: '<array>', f5_t: '<string>', f6_j: '<boolean>', f7_i: '<null>', f8_k: '<number>'}, 'JTQZplnAfdjxmjaOaNfDswgAqzpCmVdJfnmgNtpCEbqkTGfqDaSXpZQCPuAsRUNwJOoVaoeabCYaNuTjiIlTqTkpLWWgQYIlJzkDIRqnnnSphRLELdLZteBacPMjSsBZmbEdpdDkpbfxQrMGcDFHBcoTomZoUCEsoYVtyOAyuKSMtBABrVJOMykfJZrydoSVpIhiazkUWRicgriCVglkaWXkKftdUboMJrMhRcvUDDobioMZeXPyVpxaHEeKWOrLikkvjucPHOuJqVidAhacTcRSdVvxebNTmXWsMIzSYYpUGDlRBCiybGMqhaocvkTQLVbHdVuGfitNZdKnIFUJodfPXBDzbMKOeYuGFmBVVUyqekrrdxTU');
    var objectStore_1 = db.createObjectStore('objectStore_133', {autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_132')
    var index_101 = objectStore_1.createIndex('index_101', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_210 = db.transaction(['objectStore_133'], 'readonly', {durability:"strict"})
    var objectStore_133 = txn_210.objectStore('objectStore_133');
    var index_0 = objectStore_133.index('index_101');
    txn_210.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_210.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_210.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_211 = db.transaction(['objectStore_133'], 'readonly', {durability:"strict"})
    var objectStore_133 = txn_211.objectStore('objectStore_133');
    var index_1 = objectStore_133.index('index_101');
    txn_211.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_211.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_211.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_212 = db.transaction(['objectStore_133'], 'readonly', {durability:"relaxed"})
    var objectStore_133 = txn_212.objectStore('objectStore_133');
    txn_212.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_212.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_212.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_213 = db.transaction(['objectStore_133'], 'readonly', {durability:"relaxed"})
    var objectStore_133 = txn_213.objectStore('objectStore_133');
    txn_213.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_213.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_213.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_214 = db.transaction(['objectStore_133'], 'readonly', {durability:"default"})
    var objectStore_133 = txn_214.objectStore('objectStore_133');
    var index_2 = objectStore_133.index('index_101');
    var index_3 = objectStore_133.index('index_101');
    txn_214.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_214.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_214.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1999')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};