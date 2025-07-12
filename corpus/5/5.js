let db;
const openRequest = window.indexedDB.open('str_8269', 7236570060848071)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_20');
    var put_0 = objectStore_0.put({f0_y: '<null>', f1_r: '<array>', f2_j: '<boolean>', f3_b: '<boolean>', f4_h: '<null>', f5_j: '<boolean>', f6_u: '<boolean>', f7_l: '<string>', f8_c: '<array>', f9_n: '<string>'}, 'IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD', 'IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD');
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var getAll_0 = objectStore_0.getAll();
    var clear_0 = objectStore_0.clear();
    var index_15 = objectStore_0.createIndex('index_15', 'test', {unique: true, multiEntry: true});
    var index_16 = objectStore_0.createIndex('index_16', 'test', {multiEntry: true});
    var put_1 = objectStore_0.put({f0_j: '<number>', f1_f: '<object>', f2_f: '<null>', f3_p: '<null>', f4_o: '<number>', f5_o: '<array>', f6_k: '<array>', f7_q: '<string>', f8_z: '<boolean>', f9_h: '<object>', f10_i: '<object>', f11_j: '<array>', f12_q: '<array>', f13_d: '<null>', f14_o: '<number>', f15_d: '<boolean>', f16_b: '<string>', f17_h: '<number>', f18_h: '<string>', f19_i: '<string>', f20_u: '<array>', f21_q: '<null>', f22_z: '<array>', f23_k: '<boolean>', f24_y: '<array>', f25_v: '<boolean>', f26_s: '<string>', f27_y: '<string>', f28_g: '<object>', f29_b: '<array>', f30_s: '<boolean>', f31_o: '<null>', f32_z: '<boolean>', f33_l: '<string>', f34_k: '<string>', f35_h: '<number>', f36_s: '<null>', f37_t: '<boolean>', f38_f: '<object>', f39_y: '<null>', f40_g: '<number>', f41_b: '<number>', f42_q: '<object>', f43_c: '<null>', f44_r: '<array>', f45_o: '<array>', f46_x: '<null>', f47_b: '<null>', f48_f: '<array>', f49_m: '<string>', f50_m: '<object>', f51_h: '<boolean>', f52_y: '<object>', f53_j: '<number>', f54_k: '<boolean>', f55_q: '<object>', f56_f: '<null>', f57_d: '<null>', f58_y: '<boolean>', f59_c: '<number>', f60_n: '<array>', f61_u: '<null>', f62_t: '<boolean>', f63_z: '<null>', f64_s: '<string>', f65_n: '<object>', f66_i: '<number>', f67_z: '<boolean>', f68_e: '<array>', f69_n: '<number>', f70_i: '<object>', f71_d: '<number>', f72_t: '<null>', f73_c: '<object>', f74_l: '<boolean>', f75_s: '<string>', f76_s: '<object>', f77_k: '<string>', f78_v: '<boolean>', f79_h: '<null>', f80_q: '<array>', f81_c: '<object>', f82_c: '<object>', f83_m: '<object>', f84_k: '<null>', f85_e: '<number>', f86_q: '<string>', f87_e: '<array>', f88_l: '<array>', f89_o: '<boolean>', f90_c: '<boolean>', f91_i: '<number>', f92_v: '<string>', f93_f: '<null>', f94_b: '<null>', f95_n: '<array>', f96_e: '<null>', f97_s: '<number>', f98_x: '<null>', f99_k: '<object>', f100_e: '<string>', f101_m: '<string>', f102_t: '<boolean>', f103_p: '<boolean>', f104_p: '<boolean>', f105_a: '<object>', f106_r: '<object>', f107_d: '<object>', f108_h: '<number>', f109_d: '<string>', f110_v: '<array>', f111_i: '<string>', f112_f: '<object>', f113_y: '<object>', f114_y: '<null>', f115_f: '<boolean>', f116_j: '<boolean>', f117_s: '<string>', f118_k: '<null>', f119_e: '<array>', f120_b: '<null>', f121_d: '<string>', f122_r: '<array>', f123_t: '<null>', f124_m: '<object>', f125_e: '<number>', f126_d: '<array>', f127_o: '<number>', f128_t: '<object>', f129_z: '<object>', f130_o: '<object>', f131_b: '<number>', f132_s: '<object>', f133_z: '<array>', f134_f: '<object>', f135_t: '<number>', f136_h: '<string>', f137_t: '<number>', f138_j: '<string>', f139_k: '<object>', f140_l: '<boolean>', f141_u: '<boolean>', f142_r: '<array>', f143_g: '<object>', f144_t: '<object>', f145_h: '<number>', f146_p: '<array>', f147_h: '<null>', f148_c: '<boolean>', f149_w: '<boolean>', f150_p: '<object>', f151_b: '<null>', f152_e: '<number>', f153_k: '<null>', f154_m: '<array>', f155_i: '<string>', f156_x: '<string>', f157_l: '<boolean>', f158_f: '<array>', f159_k: '<number>', f160_d: '<number>', f161_q: '<number>', f162_x: '<number>', f163_v: '<string>', f164_y: '<number>', f165_v: '<boolean>', f166_q: '<number>', f167_j: '<null>', f168_d: '<string>', f169_i: '<object>', f170_b: '<string>', f171_g: '<object>', f172_w: '<null>', f173_r: '<array>', f174_v: '<number>', f175_p: '<null>', f176_o: '<string>', f177_c: '<boolean>', f178_y: '<boolean>', f179_d: '<array>', f180_k: '<string>', f181_k: '<array>', f182_k: '<number>', f183_v: '<object>', f184_d: '<boolean>', f185_x: '<object>', f186_q: '<null>', f187_u: '<null>', f188_f: '<number>', f189_y: '<array>', f190_e: '<boolean>', f191_l: '<null>', f192_g: '<number>', f193_q: '<object>', f194_g: '<object>', f195_k: '<object>', f196_g: '<array>', f197_k: '<array>', f198_j: '<array>', f199_w: '<array>', f200_n: '<object>', f201_a: '<number>', f202_r: '<array>', f203_u: '<boolean>', f204_h: '<boolean>', f205_k: '<boolean>', f206_a: '<null>', f207_c: '<null>', f208_d: '<string>', f209_c: '<boolean>', f210_x: '<number>', f211_c: '<number>', f212_f: '<array>', f213_x: '<null>', f214_o: '<null>', f215_g: '<string>', f216_y: '<array>', f217_g: '<null>', f218_o: '<null>', f219_w: '<null>', f220_q: '<string>', f221_i: '<boolean>', f222_t: '<number>', f223_f: '<object>', f224_z: '<boolean>', f225_y: '<null>', f226_d: '<boolean>', f227_n: '<string>', f228_l: '<object>', f229_a: '<number>', f230_v: '<string>', f231_w: '<number>', f232_v: '<number>', f233_s: '<number>', f234_c: '<string>', f235_s: '<array>', f236_g: '<object>', f237_j: '<boolean>', f238_y: '<boolean>', f239_k: '<number>', f240_e: '<boolean>', f241_j: '<string>', f242_o: '<number>', f243_i: '<array>', f244_n: '<string>', f245_q: '<null>', f246_i: '<boolean>', f247_g: '<object>', f248_n: '<array>', f249_t: '<boolean>', f250_b: '<object>', f251_q: '<object>', f252_l: '<number>', f253_z: '<object>', f254_a: '<number>', f255_s: '<number>', f256_z: '<boolean>', f257_l: '<boolean>', f258_m: '<array>', f259_w: '<array>', f260_w: '<number>', f261_b: '<null>', f262_a: '<boolean>', f263_x: '<null>', f264_o: '<string>', f265_a: '<array>', f266_s: '<array>', f267_f: '<number>', f268_k: '<object>', f269_b: '<object>', f270_c: '<string>', f271_z: '<string>', f272_f: '<string>', f273_f: '<string>', f274_i: '<number>', f275_n: '<object>', f276_p: '<number>', f277_t: '<number>', f278_d: '<boolean>', f279_y: '<array>', f280_l: '<string>', f281_f: '<array>', f282_d: '<string>', f283_i: '<null>', f284_k: '<object>', f285_i: '<array>', f286_p: '<array>', f287_s: '<boolean>', f288_z: '<null>', f289_z: '<string>', f290_b: '<string>', f291_d: '<boolean>', f292_t: '<array>', f293_x: '<string>', f294_b: '<string>', f295_u: '<null>', f296_z: '<number>', f297_l: '<number>', f298_q: '<boolean>', f299_d: '<number>', f300_a: '<string>', f301_l: '<array>', f302_m: '<string>', f303_q: '<object>', f304_g: '<boolean>', f305_w: '<number>', f306_k: '<array>', f307_s: '<boolean>', f308_f: '<object>', f309_z: '<null>', f310_s: '<number>', f311_f: '<array>', f312_k: '<null>', f313_i: '<null>', f314_p: '<boolean>', f315_o: '<number>', f316_j: '<number>', f317_b: '<string>', f318_v: '<null>', f319_o: '<array>', f320_i: '<array>', f321_v: '<object>', f322_r: '<number>', f323_b: '<boolean>', f324_r: '<null>', f325_n: '<number>', f326_u: '<null>', f327_x: '<null>', f328_l: '<number>', f329_n: '<array>', f330_j: '<null>', f331_a: '<array>', f332_c: '<null>', f333_t: '<number>'}, 'KZcKtVxYHOjEpkoztSQWmjhe');
    var index_17 = objectStore_0.createIndex('index_17', 'test', {multiEntry: false});
    var put_2 = objectStore_0.put({f0_w: '<object>', f1_y: '<array>', f2_i: '<boolean>', f3_i: '<number>', f4_r: '<array>', f5_y: '<null>', f6_q: '<boolean>', f7_d: '<object>', f8_q: '<number>'}, 'bHVzHzoadOSA');
    var add_0 = objectStore_0.add({f0_x: '<null>', f1_d: '<boolean>', f2_i: '<boolean>', f3_j: '<null>', f4_x: '<number>', f5_k: '<object>', f6_y: '<null>', f7_j: '<object>', f8_k: '<array>', f9_c: '<null>'}, 'XofAVmqXkmfnRmWlaHwMCqxkmaOErnZYAPmVGSCYzPPSE');
    var add_1 = objectStore_0.add({f0_i: '<boolean>', f1_i: '<string>', f2_o: '<array>'}, 'rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.only('KZcKtVxYHOjEpkoztSQWmjhe');
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_15');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp', true);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var index_18 = objectStore_0.createIndex('index_18', 'test', {unique: false, multiEntry: true});
    var clear_1 = objectStore_0.clear();
    var add_2 = objectStore_0.add({f0_n: '<null>', f1_x: '<null>', f2_x: '<string>', f3_m: '<number>', f4_h: '<null>', f5_x: '<boolean>', f6_y: '<array>', f7_g: '<number>'}, 'PMsawDNmrxNxKfNbklroQxfwGH');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_30 = db.transaction(['objectStore_20'], 'readwrite', {durability:"relaxed"})
    var objectStore_20 = txn_30.objectStore('objectStore_20');
    var getAll_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('KZcKtVxYHOjEpkoztSQWmjhe', 'KZcKtVxYHOjEpkoztSQWmjhe', false, true);
        getAll_1 = objectStore_20.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD');
        getAll_1 = objectStore_20.getAll(KeyRange_9);
    }

    var put_3 = objectStore_20.put({f0_d: '<boolean>', f1_z: '<object>', f2_z: '<object>', f3_r: '<number>'}, 'DtfIgGZJuKKwrsEniRkhnZlOMFhHnaDhEqZUKmNft');
    var count_2 = objectStore_20.count();
    var clear_2 = objectStore_20.clear();
    var clear_3 = objectStore_20.clear();
    var clear_4 = objectStore_20.clear();
    var add_3 = objectStore_20.add({f0_t: '<array>', f1_j: '<object>', f2_t: '<number>', f3_e: '<null>', f4_j: '<number>', f5_a: '<object>', f6_d: '<array>'}, 'zyz');
    var add_4 = objectStore_20.add({f0_n: '<number>'}, 'RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG');
    var getAllKeys_0 = objectStore_20.getAllKeys();
    var clear_5 = objectStore_20.clear();
    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_31 = db.transaction(['objectStore_20'], 'readonly', {durability:"relaxed"})
    var objectStore_20 = txn_31.objectStore('objectStore_20');
    var count_3 = objectStore_20.count();
    var count_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('PMsawDNmrxNxKfNbklroQxfwGH', 'KZcKtVxYHOjEpkoztSQWmjhe', true, false);
        count_4 = objectStore_20.count(KeyRange_10);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD', 'PMsawDNmrxNxKfNbklroQxfwGH', true, true);
        get_1 = objectStore_20.get(KeyRange_12);
    }
    catch (e){
    }

    var count_5 = objectStore_20.count();
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('KZcKtVxYHOjEpkoztSQWmjhe', false);
        get_2 = objectStore_20.get(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('DtfIgGZJuKKwrsEniRkhnZlOMFhHnaDhEqZUKmNft', 'bHVzHzoadOSA', false, true);
        getAllKeys_1 = objectStore_20.getAllKeys(KeyRange_16, 3523486789);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG');
        getAllKeys_1 = objectStore_20.getAllKeys(KeyRange_17);
    }

    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG', 'PMsawDNmrxNxKfNbklroQxfwGH', true, false);
        get_3 = objectStore_20.get(KeyRange_18);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('PMsawDNmrxNxKfNbklroQxfwGH', true);
        get_4 = objectStore_20.get(KeyRange_20);
    }
    catch (e){
    }

    var index_1 = objectStore_20.index('index_17');
    var index_2 = objectStore_20.index('index_18');
    var count_6 = objectStore_20.count();
    txn_31.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_32 = db.transaction(['objectStore_20'], 'readonly', {durability:"relaxed"})
    var objectStore_20 = txn_32.objectStore('objectStore_20');
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.only('KZcKtVxYHOjEpkoztSQWmjhe');
        get_5 = objectStore_20.get(KeyRange_22);
    }
    catch (e){
    }

    var count_7 = objectStore_20.count();
    var count_8 = objectStore_20.count();
    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp', 'KZcKtVxYHOjEpkoztSQWmjhe', false, false);
        count_9 = objectStore_20.count(KeyRange_24);
    }
    catch (e){
    }

    var index_3 = objectStore_20.index('index_15');
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.only('KZcKtVxYHOjEpkoztSQWmjhe');
        get_6 = objectStore_20.get(KeyRange_26);
    }
    catch (e){
    }

    var index_4 = objectStore_20.index('index_18');
    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD', true);
        get_7 = objectStore_20.get(KeyRange_28);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_30 = IDBKeyRange.bound('bHVzHzoadOSA', 'DtfIgGZJuKKwrsEniRkhnZlOMFhHnaDhEqZUKmNft', true, true);
        count_10 = objectStore_20.count(KeyRange_30);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('bHVzHzoadOSA', 'DtfIgGZJuKKwrsEniRkhnZlOMFhHnaDhEqZUKmNft', false, true);
        get_8 = objectStore_20.get(KeyRange_32);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.only('XofAVmqXkmfnRmWlaHwMCqxkmaOErnZYAPmVGSCYzPPSE');
        get_9 = objectStore_20.get(KeyRange_34);
    }
    catch (e){
    }

    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_32.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_33 = db.transaction(['objectStore_20'], 'readwrite', {durability:"strict"})
    var objectStore_20 = txn_33.objectStore('objectStore_20');
    var count_11;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp', true);
        count_11 = objectStore_20.count(KeyRange_36);
    }
    catch (e){
    }

    var add_5 = objectStore_20.add({f0_w: '<object>', f1_o: '<object>', f2_j: '<object>', f3_q: '<string>', f4_l: '<number>', f5_g: '<object>'}, 'VNjBvQcDAlyIoCCzuWZOJIVP');
    var add_6 = objectStore_20.add({f0_v: '<array>', f1_h: '<boolean>', f2_z: '<object>', f3_i: '<null>'}, 'KUUbXyPpzaKZvhBPAHoyyNJEsiRJSnwoNVHX');
    var add_7 = objectStore_20.add({f0_d: '<object>'}, 'ERJsWQJAbGrPJEFAtPlnIenrRokLHepVoNLFfRpBnaLPRYhtuFoC');
    var count_12;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('zyz', false);
        count_12 = objectStore_20.count(KeyRange_38);
    }
    catch (e){
    }

    var clear_6 = objectStore_20.clear();
    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.only('XofAVmqXkmfnRmWlaHwMCqxkmaOErnZYAPmVGSCYzPPSE');
        get_10 = objectStore_20.get(KeyRange_40);
    }
    catch (e){
    }

    var put_4 = objectStore_20.put({f0_n: '<null>', f1_s: '<number>', f2_z: '<string>'}, 'zORTkkAIKWcGUkfKbDRiGQaWqXtZYxkJLHfIFxRoezlTqLhyQMsgr');
    var delete_1;
    try{
        KeyRange_42 = IDBKeyRange.bound('IMdgZnfPHLmoaklsYksFtskPCQpPYRqbmwyjdscrqMIHzSOxOLIFHFROD', 'VNjBvQcDAlyIoCCzuWZOJIVP', true, false);
        delete_1 = objectStore_20.delete(KeyRange_42);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_44 = IDBKeyRange.bound('zORTkkAIKWcGUkfKbDRiGQaWqXtZYxkJLHfIFxRoezlTqLhyQMsgr', 'RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG', true, false);
        get_11 = objectStore_20.get(KeyRange_44);
    }
    catch (e){
    }

    var add_8 = objectStore_20.add({f0_t: '<number>'}, 'mIInCrmtcrwuHcXFewjirdnrOjrlCgEEGpnTqDjkLrOGZOr');
    var getAll_2 = objectStore_20.getAll(3404849908);
    var clear_7 = objectStore_20.clear();
    var get_12;
    try{
        KeyRange_46 = IDBKeyRange.bound('KUUbXyPpzaKZvhBPAHoyyNJEsiRJSnwoNVHX', 'RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG', false, false);
        get_12 = objectStore_20.get(KeyRange_46);
    }
    catch (e){
    }

    txn_33.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_33.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_34 = db.transaction(['objectStore_20'], 'readwrite', {durability:"relaxed"})
    var objectStore_20 = txn_34.objectStore('objectStore_20');
    var clear_8 = objectStore_20.clear();
    var getAllKeys_2 = objectStore_20.getAllKeys(3004389905);
    var delete_2;
    try{
        KeyRange_48 = IDBKeyRange.bound('VNjBvQcDAlyIoCCzuWZOJIVP', 'DtfIgGZJuKKwrsEniRkhnZlOMFhHnaDhEqZUKmNft', true, false);
        delete_2 = objectStore_20.delete(KeyRange_48);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_50 = IDBKeyRange.only('KUUbXyPpzaKZvhBPAHoyyNJEsiRJSnwoNVHX');
        get_13 = objectStore_20.get(KeyRange_50);
    }
    catch (e){
    }

    var clear_9 = objectStore_20.clear();
    var count_13;
    try{
        KeyRange_52 = IDBKeyRange.only('rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp');
        count_13 = objectStore_20.count(KeyRange_52);
    }
    catch (e){
    }

    var clear_10 = objectStore_20.clear();
    var clear_11 = objectStore_20.clear();
    var getAllKeys_3;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('ERJsWQJAbGrPJEFAtPlnIenrRokLHepVoNLFfRpBnaLPRYhtuFoC', true);
        getAllKeys_3 = objectStore_20.getAllKeys(KeyRange_54, 2170062302);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('KZcKtVxYHOjEpkoztSQWmjhe');
        getAllKeys_3 = objectStore_20.getAllKeys(KeyRange_55);
    }

    var get_14;
    try{
        KeyRange_56 = IDBKeyRange.bound('bHVzHzoadOSA', 'RNekqXjYovTHUjLRWHqWmUddXIipaYzJScGvNrxUvEXqySKkZaRpwTXTG', false, false);
        get_14 = objectStore_20.get(KeyRange_56);
    }
    catch (e){
    }

    var clear_12 = objectStore_20.clear();
    var count_14;
    try{
        KeyRange_58 = IDBKeyRange.bound('rAQlRmhtaFIdyZKbZoGONahCUDBGCJEcjBWvDZvkhtQudZWVNyXAtrgjVLcfmVuSsAjCiipKOUSMVsXrsgFrEDBrCp', 'XofAVmqXkmfnRmWlaHwMCqxkmaOErnZYAPmVGSCYzPPSE', true, false);
        count_14 = objectStore_20.count(KeyRange_58);
    }
    catch (e){
    }

    txn_34.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_34.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_34.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8269')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};