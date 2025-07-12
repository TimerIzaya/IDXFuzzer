let db;
const openRequest = window.indexedDB.open('str_710', 2579323620433923)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_34', {keypath: 'cTGTfVcovQRLUlwwVvrrqflsSguXIrbsOvDIsypAUsRTHZKYUplhUgWytGbVNGhjBFobSSosnicjdbAwzplTzdPZKOgVkanaF', autoIncrement: false});
    var index_31 = objectStore_0.createIndex('index_31', 'test', {multiEntry: false});
    var index_32 = objectStore_0.createIndex('index_32', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_35', {autoIncrement: true});
    var index_33 = objectStore_1.createIndex('index_33', 'test', {unique: false, multiEntry: true});
    var index_34 = objectStore_0.createIndex('index_34', 'test', {unique: true, multiEntry: true});
    var put_0 = objectStore_1.put({f0_c: '<array>', f1_q: '<boolean>', f2_h: '<object>'}, 'AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm');
    var objectStore_2 = db.createObjectStore('objectStore_36', {keypath: 'wQfoCAPVW', autoIncrement: true});
    var add_0 = objectStore_1.add({f0_n: '<array>', f1_d: '<number>', f2_c: '<object>', f3_o: '<null>', f4_p: '<string>', f5_l: '<boolean>', f6_s: '<array>', f7_x: '<array>', f8_c: '<array>'}, 'FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF');
    var index_35 = objectStore_1.createIndex('index_35', 'test', {multiEntry: false});
    var getAllKeys_0 = objectStore_1.getAllKeys();
    db.deleteObjectStore('objectStore_36')
    var objectStore_3 = db.createObjectStore('objectStore_37');
    var clear_0 = objectStore_3.clear();
    var objectStore_4 = db.createObjectStore('objectStore_38', {autoIncrement: true});
    var index_36 = objectStore_4.createIndex('index_36', 'test', {unique: true});
    var index_37 = objectStore_1.createIndex('index_37', 'test', {multiEntry: false});
    var index_38 = objectStore_4.createIndex('index_38', 'test', {multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_55 = db.transaction(['objectStore_38', 'objectStore_35'], 'readwrite', {durability:"default"})
    var objectStore_35 = txn_55.objectStore('objectStore_35');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm', 'FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', false, false);
        get_0 = objectStore_35.get(KeyRange_0);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm', 'FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', true, true);
        get_1 = objectStore_35.get(KeyRange_2);
    }
    catch (e){
    }

    var count_0 = objectStore_35.count();
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm', 'AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm', false, true);
        get_2 = objectStore_35.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_35.clear();
    var clear_2 = objectStore_35.clear();
    var add_1 = objectStore_35.add({f0_e: '<number>', f1_l: '<number>', f2_y: '<boolean>', f3_b: '<string>', f4_m: '<number>', f5_g: '<null>'}, 'ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg');
    var count_1 = objectStore_35.count();
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('AmEpniqUtIsZYQyZACZTukbRLnPMixxJegAWPkWgdWrmOFMEjxmNzKwUsyTMtkxmYXWWlgoegfSxqbfsMdbCidVuDuvDm', 'FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', false, true);
        get_3 = objectStore_35.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2 = objectStore_35.count();
    var add_2 = objectStore_35.add({f0_u: '<array>', f1_q: '<boolean>', f2_f: '<boolean>'}, 'IVjnUhFPnWhoFzyXDlHAZqLLUExRgt');
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.only('ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg');
        delete_0 = objectStore_35.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg', 'ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg', true, true);
        get_4 = objectStore_35.get(KeyRange_10);
    }
    catch (e){
    }

    txn_55.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_55.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_55.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_56 = db.transaction(['objectStore_34'], 'readonly', {durability:"strict"})
    var objectStore_34 = txn_56.objectStore('objectStore_34');
    txn_56.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_56.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_56.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_57 = db.transaction(['objectStore_34', 'objectStore_37', 'objectStore_35', 'objectStore_38'], 'readwrite', {durability:"relaxed"})
    var objectStore_37 = txn_57.objectStore('objectStore_37');
    var put_1 = objectStore_37.put({f0_o: '<number>'}, 'OSbTComTbVqSveWlSibwSoQUvEXEoPBcunyFNoigQTOmoSCHgyLQzrzXFqRBSzDiTIpvOwTMSGNTjXKfumzxqlfMqbQuSRx');
    var add_3 = objectStore_37.add({f0_t: '<string>', f1_e: '<array>', f2_b: '<object>', f3_i: '<number>'}, 'rtVheWDKrROimxvaZjysXqKKqWlkxUlWxNbAvkRFXDCmpGszQTWuzcYOuKpKWtnDzxPsV');
    var clear_3 = objectStore_37.clear();
    var clear_4 = objectStore_37.clear();
    var put_2 = objectStore_37.put({f0_p: '<null>', f1_f: '<string>', f2_g: '<null>'}, 'EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf');
    var getAll_0;
    try{
        KeyRange_12 = IDBKeyRange.only('EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf');
        getAll_0 = objectStore_37.getAll(KeyRange_12, 2303302814);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('rtVheWDKrROimxvaZjysXqKKqWlkxUlWxNbAvkRFXDCmpGszQTWuzcYOuKpKWtnDzxPsV');
        getAll_0 = objectStore_37.getAll(KeyRange_13);
    }

    var clear_5 = objectStore_37.clear();
    var clear_6 = objectStore_37.clear();
    var put_3 = objectStore_37.put({f0_d: '<number>', f1_c: '<boolean>', f2_v: '<number>', f3_g: '<boolean>', f4_x: '<object>', f5_v: '<number>', f6_c: '<null>', f7_a: '<number>', f8_s: '<array>', f9_e: '<boolean>', f10_w: '<null>', f11_y: '<object>', f12_e: '<object>', f13_r: '<array>', f14_w: '<string>', f15_q: '<object>', f16_x: '<string>', f17_b: '<object>', f18_b: '<null>', f19_g: '<null>', f20_n: '<string>', f21_w: '<string>', f22_y: '<string>', f23_z: '<array>', f24_w: '<null>', f25_f: '<object>', f26_e: '<array>', f27_t: '<string>', f28_y: '<object>', f29_w: '<array>', f30_z: '<string>', f31_n: '<object>', f32_j: '<null>', f33_g: '<boolean>', f34_s: '<object>', f35_j: '<object>', f36_t: '<number>', f37_z: '<number>', f38_h: '<number>', f39_c: '<null>', f40_y: '<null>', f41_e: '<string>', f42_b: '<null>', f43_q: '<boolean>', f44_h: '<null>', f45_d: '<object>', f46_t: '<string>', f47_c: '<string>', f48_l: '<null>', f49_d: '<number>', f50_h: '<array>', f51_r: '<array>', f52_t: '<number>', f53_r: '<boolean>', f54_o: '<array>', f55_b: '<string>', f56_x: '<null>', f57_o: '<array>', f58_b: '<array>', f59_q: '<string>', f60_l: '<array>', f61_b: '<number>', f62_g: '<number>', f63_z: '<array>', f64_f: '<array>', f65_y: '<object>', f66_t: '<null>', f67_v: '<null>', f68_a: '<string>', f69_h: '<number>', f70_p: '<object>', f71_y: '<object>', f72_u: '<number>', f73_o: '<boolean>', f74_g: '<null>', f75_i: '<object>', f76_e: '<string>', f77_u: '<null>', f78_u: '<null>', f79_z: '<null>', f80_v: '<number>', f81_l: '<number>', f82_t: '<null>', f83_g: '<boolean>', f84_b: '<number>', f85_j: '<number>', f86_h: '<array>', f87_a: '<boolean>', f88_g: '<number>', f89_j: '<array>', f90_q: '<array>', f91_d: '<array>', f92_h: '<null>', f93_a: '<boolean>', f94_p: '<number>', f95_y: '<object>', f96_e: '<boolean>', f97_l: '<boolean>', f98_s: '<null>', f99_l: '<string>', f100_i: '<array>', f101_b: '<object>', f102_k: '<array>', f103_z: '<boolean>', f104_k: '<number>', f105_s: '<array>', f106_x: '<object>', f107_h: '<boolean>', f108_a: '<boolean>', f109_g: '<number>', f110_z: '<boolean>', f111_f: '<array>', f112_u: '<object>', f113_g: '<boolean>', f114_l: '<number>', f115_s: '<boolean>', f116_m: '<object>', f117_k: '<string>', f118_q: '<null>', f119_n: '<null>', f120_g: '<string>', f121_m: '<array>', f122_n: '<number>', f123_a: '<boolean>', f124_a: '<array>', f125_q: '<number>', f126_s: '<string>', f127_a: '<object>', f128_f: '<boolean>', f129_g: '<number>', f130_l: '<null>', f131_r: '<object>', f132_h: '<null>', f133_s: '<array>', f134_j: '<array>', f135_w: '<boolean>', f136_j: '<boolean>', f137_b: '<number>', f138_f: '<string>', f139_p: '<string>', f140_z: '<number>', f141_l: '<boolean>', f142_n: '<array>', f143_z: '<number>', f144_i: '<null>', f145_m: '<array>', f146_n: '<number>', f147_j: '<boolean>', f148_x: '<null>', f149_y: '<null>', f150_c: '<array>', f151_n: '<object>', f152_l: '<array>', f153_d: '<array>', f154_f: '<object>', f155_s: '<object>', f156_u: '<boolean>', f157_c: '<null>', f158_a: '<string>', f159_v: '<array>', f160_m: '<string>', f161_i: '<object>', f162_a: '<null>', f163_f: '<string>', f164_i: '<number>', f165_u: '<string>', f166_a: '<object>', f167_r: '<array>', f168_i: '<number>', f169_n: '<array>', f170_z: '<null>', f171_v: '<number>', f172_w: '<boolean>', f173_q: '<number>', f174_a: '<array>', f175_t: '<object>', f176_l: '<boolean>', f177_t: '<boolean>', f178_j: '<null>', f179_a: '<array>', f180_n: '<object>', f181_w: '<null>', f182_j: '<number>', f183_b: '<number>', f184_p: '<array>', f185_i: '<object>', f186_u: '<boolean>', f187_m: '<null>', f188_z: '<null>', f189_p: '<number>', f190_u: '<object>', f191_n: '<object>', f192_z: '<object>', f193_u: '<boolean>', f194_a: '<null>', f195_s: '<number>', f196_p: '<null>', f197_g: '<string>', f198_x: '<number>', f199_y: '<boolean>', f200_z: '<string>', f201_x: '<null>', f202_b: '<boolean>', f203_d: '<object>', f204_b: '<object>', f205_b: '<boolean>', f206_h: '<null>', f207_s: '<string>', f208_a: '<array>', f209_c: '<number>', f210_i: '<boolean>', f211_i: '<boolean>', f212_k: '<boolean>', f213_i: '<string>', f214_l: '<string>', f215_f: '<string>', f216_c: '<object>', f217_z: '<boolean>', f218_k: '<null>', f219_z: '<number>', f220_u: '<null>', f221_m: '<string>', f222_b: '<array>', f223_s: '<null>', f224_g: '<boolean>', f225_s: '<null>', f226_m: '<boolean>', f227_b: '<number>', f228_u: '<string>', f229_p: '<null>', f230_u: '<number>', f231_k: '<null>', f232_u: '<number>', f233_i: '<string>', f234_g: '<boolean>', f235_r: '<array>', f236_g: '<number>', f237_p: '<number>', f238_z: '<null>', f239_u: '<null>', f240_n: '<null>', f241_g: '<boolean>', f242_j: '<object>', f243_n: '<null>', f244_t: '<boolean>', f245_s: '<boolean>', f246_m: '<number>', f247_b: '<boolean>', f248_x: '<string>', f249_x: '<number>', f250_h: '<object>', f251_p: '<object>', f252_z: '<string>', f253_v: '<array>', f254_h: '<array>', f255_j: '<array>', f256_d: '<object>', f257_k: '<string>', f258_g: '<number>', f259_y: '<number>', f260_f: '<number>', f261_a: '<number>', f262_d: '<boolean>', f263_b: '<null>', f264_r: '<number>', f265_s: '<array>', f266_f: '<object>', f267_s: '<null>', f268_j: '<object>', f269_n: '<boolean>', f270_y: '<number>', f271_x: '<string>', f272_p: '<null>', f273_e: '<number>', f274_h: '<null>', f275_u: '<array>', f276_l: '<number>', f277_h: '<null>', f278_w: '<null>', f279_q: '<object>', f280_l: '<array>', f281_q: '<number>', f282_k: '<array>', f283_l: '<object>', f284_j: '<array>', f285_z: '<boolean>', f286_z: '<string>', f287_v: '<boolean>', f288_m: '<null>', f289_r: '<object>', f290_o: '<null>', f291_t: '<null>', f292_t: '<boolean>', f293_w: '<null>', f294_x: '<object>', f295_v: '<object>', f296_n: '<string>', f297_i: '<null>', f298_z: '<object>', f299_q: '<string>', f300_o: '<null>', f301_v: '<boolean>', f302_t: '<string>', f303_j: '<number>', f304_w: '<boolean>', f305_i: '<string>', f306_u: '<boolean>', f307_w: '<array>', f308_l: '<object>', f309_d: '<string>', f310_n: '<array>', f311_l: '<string>', f312_y: '<object>', f313_k: '<boolean>', f314_p: '<number>', f315_r: '<string>', f316_j: '<array>', f317_r: '<object>', f318_i: '<boolean>', f319_v: '<number>', f320_d: '<null>', f321_d: '<string>', f322_y: '<number>', f323_h: '<boolean>', f324_g: '<object>', f325_c: '<array>', f326_b: '<object>', f327_t: '<number>', f328_z: '<boolean>', f329_o: '<null>', f330_f: '<boolean>', f331_z: '<array>', f332_m: '<array>', f333_l: '<null>', f334_u: '<null>', f335_r: '<number>', f336_t: '<null>', f337_q: '<string>', f338_g: '<number>', f339_i: '<object>', f340_v: '<object>', f341_u: '<array>', f342_n: '<object>', f343_o: '<number>', f344_k: '<number>', f345_h: '<array>', f346_n: '<string>', f347_g: '<number>', f348_c: '<number>', f349_m: '<array>', f350_b: '<boolean>', f351_h: '<object>', f352_c: '<string>', f353_n: '<number>', f354_z: '<array>', f355_z: '<object>', f356_u: '<string>', f357_y: '<number>', f358_j: '<array>', f359_n: '<string>', f360_m: '<null>', f361_k: '<number>', f362_h: '<number>', f363_t: '<string>', f364_x: '<object>', f365_w: '<boolean>'}, 'JJUMfvmLpuPluZr');
    var count_3 = objectStore_37.count();
    var getAll_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf', false);
        getAll_1 = objectStore_37.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf');
        getAll_1 = objectStore_37.getAll(KeyRange_15);
    }

    var clear_7 = objectStore_37.clear();
    txn_57.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_57.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_57.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_58 = db.transaction(['objectStore_37'], 'readwrite', {durability:"relaxed"})
    var objectStore_37 = txn_58.objectStore('objectStore_37');
    var clear_8 = objectStore_37.clear();
    var delete_1;
    try{
        KeyRange_16 = IDBKeyRange.only('JJUMfvmLpuPluZr');
        delete_1 = objectStore_37.delete(KeyRange_16);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('OSbTComTbVqSveWlSibwSoQUvEXEoPBcunyFNoigQTOmoSCHgyLQzrzXFqRBSzDiTIpvOwTMSGNTjXKfumzxqlfMqbQuSRx', 'EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf', true, true);
        get_5 = objectStore_37.get(KeyRange_18);
    }
    catch (e){
    }

    var put_4 = objectStore_37.put({f0_i: '<boolean>', f1_s: '<number>', f2_a: '<array>', f3_n: '<object>', f4_x: '<string>'}, 'MZyaLAPoBRlwrjombDYWGCvZyoAytNlmaPV');
    var count_4 = objectStore_37.count();
    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('rtVheWDKrROimxvaZjysXqKKqWlkxUlWxNbAvkRFXDCmpGszQTWuzcYOuKpKWtnDzxPsV', 'EVJscFJKMkyfWirPRSAYtVclohqJOYgSMwkzCbWWQAyTVBgdqBpzmJDGFxGOf', false, false);
        get_6 = objectStore_37.get(KeyRange_20);
    }
    catch (e){
    }

    var clear_9 = objectStore_37.clear();
    var delete_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('MZyaLAPoBRlwrjombDYWGCvZyoAytNlmaPV', false);
        delete_2 = objectStore_37.delete(KeyRange_22);
    }
    catch (e){
    }

    var getAll_2 = objectStore_37.getAll(1623083448);
    txn_58.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_58.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_58.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_59 = db.transaction(['objectStore_35'], 'readonly', {durability:"default"})
    var objectStore_35 = txn_59.objectStore('objectStore_35');
    var count_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', 'IVjnUhFPnWhoFzyXDlHAZqLLUExRgt', false, false);
        count_5 = objectStore_35.count(KeyRange_24);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg', 'IVjnUhFPnWhoFzyXDlHAZqLLUExRgt', false, true);
        get_7 = objectStore_35.get(KeyRange_26);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', true);
        get_8 = objectStore_35.get(KeyRange_28);
    }
    catch (e){
    }

    var count_6 = objectStore_35.count();
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.bound('FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', 'IVjnUhFPnWhoFzyXDlHAZqLLUExRgt', false, true);
        get_9 = objectStore_35.get(KeyRange_30);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF', 'ipupNyIcxiNsFxOVZRBQlwWAGgAYLOwdZhUUZooZHGHXIvsZCMgqeamaaYoGTegCeajdtAyCwfzIJdDHxSJgmMehUUNg', false, false);
        get_10 = objectStore_35.get(KeyRange_32);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_34 = IDBKeyRange.only('FLqnBTkXrqymYQJGLlZaJxnAVaTVWkeappBfSeklMPSjJxAZGCkoknfdvDudCvUQNUPbpjnLvYQvJF');
        count_7 = objectStore_35.count(KeyRange_34);
    }
    catch (e){
    }

    txn_59.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_59.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_59.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4905')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};