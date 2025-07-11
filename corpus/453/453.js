let db;
const openRequest = window.indexedDB.open('str_67', 5492385986176602)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2677', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_2678', {autoIncrement: false});
    var index_1756 = objectStore_0.createIndex('index_1756', 'test', {unique: true, multiEntry: false});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_t: '<string>', f1_g: '<null>', f2_f: '<string>', f3_e: '<array>', f4_j: '<object>', f5_n: '<boolean>', f6_d: '<object>', f7_o: '<array>', f8_q: '<object>', f9_u: '<boolean>', f10_e: '<string>', f11_r: '<boolean>', f12_c: '<number>', f13_y: '<null>', f14_w: '<number>', f15_l: '<string>', f16_r: '<object>', f17_c: '<number>', f18_d: '<null>', f19_s: '<string>', f20_q: '<boolean>', f21_s: '<array>', f22_w: '<array>', f23_x: '<array>', f24_a: '<null>', f25_b: '<null>', f26_z: '<array>', f27_d: '<string>', f28_v: '<number>', f29_f: '<string>', f30_t: '<null>', f31_a: '<boolean>', f32_r: '<boolean>', f33_h: '<boolean>', f34_j: '<boolean>', f35_d: '<array>', f36_q: '<null>', f37_c: '<number>', f38_y: '<string>', f39_n: '<string>', f40_m: '<null>', f41_z: '<array>', f42_d: '<string>', f43_x: '<object>', f44_t: '<number>', f45_d: '<boolean>', f46_g: '<number>', f47_h: '<number>', f48_d: '<string>', f49_d: '<number>', f50_p: '<boolean>', f51_k: '<string>', f52_z: '<null>', f53_s: '<array>', f54_o: '<array>', f55_l: '<boolean>', f56_m: '<array>', f57_f: '<string>', f58_f: '<object>', f59_j: '<object>', f60_r: '<object>', f61_u: '<boolean>', f62_h: '<array>', f63_g: '<array>', f64_l: '<array>', f65_w: '<array>', f66_y: '<number>', f67_a: '<null>', f68_c: '<boolean>', f69_n: '<null>', f70_j: '<null>', f71_i: '<number>', f72_i: '<array>', f73_u: '<boolean>', f74_m: '<object>', f75_n: '<null>', f76_f: '<boolean>', f77_i: '<array>', f78_z: '<object>', f79_u: '<null>', f80_q: '<object>', f81_u: '<array>', f82_e: '<array>', f83_r: '<object>', f84_p: '<object>', f85_u: '<boolean>', f86_v: '<string>', f87_l: '<number>', f88_q: '<string>', f89_z: '<object>', f90_q: '<array>', f91_h: '<string>', f92_m: '<object>', f93_b: '<array>', f94_i: '<string>', f95_e: '<object>', f96_d: '<object>', f97_d: '<object>', f98_n: '<string>', f99_e: '<string>', f100_i: '<string>', f101_s: '<boolean>', f102_t: '<object>', f103_o: '<string>', f104_h: '<boolean>', f105_i: '<string>', f106_h: '<string>', f107_z: '<boolean>', f108_c: '<array>', f109_y: '<boolean>', f110_n: '<object>', f111_h: '<number>', f112_d: '<number>', f113_b: '<number>', f114_q: '<boolean>', f115_d: '<boolean>', f116_s: '<boolean>', f117_o: '<object>', f118_t: '<object>', f119_a: '<array>', f120_p: '<array>', f121_i: '<object>', f122_q: '<boolean>', f123_j: '<boolean>', f124_a: '<array>', f125_m: '<boolean>', f126_d: '<number>', f127_f: '<object>', f128_j: '<null>', f129_o: '<null>', f130_u: '<boolean>', f131_a: '<number>', f132_u: '<string>', f133_e: '<string>', f134_l: '<array>', f135_s: '<null>', f136_z: '<array>', f137_n: '<array>', f138_y: '<array>', f139_c: '<boolean>', f140_t: '<boolean>', f141_r: '<array>', f142_y: '<string>', f143_m: '<array>', f144_d: '<boolean>', f145_z: '<object>', f146_a: '<string>', f147_v: '<object>', f148_l: '<array>', f149_n: '<null>', f150_j: '<string>', f151_d: '<array>', f152_l: '<number>', f153_m: '<string>', f154_b: '<null>', f155_i: '<array>', f156_h: '<object>', f157_h: '<boolean>', f158_b: '<object>', f159_v: '<object>', f160_n: '<number>', f161_j: '<string>', f162_i: '<number>', f163_o: '<array>', f164_p: '<boolean>', f165_h: '<array>', f166_h: '<number>', f167_i: '<object>', f168_u: '<object>', f169_d: '<null>', f170_q: '<string>', f171_u: '<string>', f172_c: '<string>', f173_l: '<null>', f174_t: '<array>', f175_a: '<object>', f176_s: '<number>', f177_a: '<null>', f178_u: '<null>', f179_v: '<boolean>', f180_r: '<object>', f181_a: '<array>', f182_l: '<object>', f183_l: '<object>', f184_i: '<boolean>', f185_u: '<number>', f186_t: '<boolean>', f187_y: '<null>', f188_t: '<object>', f189_l: '<number>', f190_k: '<boolean>', f191_y: '<boolean>', f192_o: '<object>', f193_q: '<number>', f194_f: '<null>', f195_l: '<boolean>', f196_e: '<number>', f197_t: '<boolean>', f198_u: '<object>', f199_i: '<boolean>', f200_r: '<number>', f201_t: '<object>', f202_a: '<object>', f203_x: '<string>', f204_q: '<object>', f205_j: '<array>', f206_t: '<object>', f207_f: '<string>', f208_b: '<boolean>', f209_r: '<object>', f210_f: '<object>', f211_y: '<object>', f212_y: '<null>', f213_n: '<boolean>', f214_m: '<number>', f215_j: '<string>', f216_f: '<array>', f217_e: '<null>', f218_g: '<boolean>', f219_s: '<string>', f220_b: '<array>', f221_s: '<number>', f222_m: '<array>', f223_k: '<object>', f224_p: '<number>', f225_o: '<string>', f226_k: '<string>', f227_g: '<number>', f228_z: '<string>', f229_x: '<number>', f230_j: '<object>', f231_i: '<object>', f232_e: '<string>', f233_m: '<null>', f234_s: '<null>', f235_d: '<object>', f236_f: '<object>', f237_e: '<boolean>', f238_k: '<object>', f239_o: '<number>', f240_b: '<string>', f241_y: '<string>', f242_c: '<object>', f243_v: '<null>', f244_k: '<boolean>', f245_f: '<object>', f246_z: '<string>', f247_b: '<number>', f248_e: '<null>', f249_h: '<array>', f250_h: '<object>', f251_a: '<array>', f252_q: '<boolean>', f253_f: '<array>', f254_l: '<object>', f255_f: '<array>', f256_p: '<number>', f257_t: '<number>', f258_p: '<number>', f259_d: '<boolean>', f260_z: '<null>', f261_g: '<number>', f262_s: '<number>', f263_p: '<string>', f264_h: '<null>', f265_d: '<string>', f266_h: '<object>', f267_s: '<string>', f268_t: '<array>', f269_a: '<object>', f270_i: '<null>', f271_h: '<object>', f272_e: '<string>', f273_t: '<null>', f274_w: '<array>', f275_r: '<boolean>', f276_s: '<object>', f277_l: '<boolean>', f278_u: '<null>', f279_j: '<array>', f280_p: '<null>', f281_s: '<boolean>', f282_w: '<string>', f283_w: '<string>', f284_a: '<number>', f285_y: '<number>', f286_o: '<object>', f287_u: '<number>', f288_b: '<object>', f289_d: '<string>', f290_c: '<object>', f291_b: '<array>', f292_p: '<boolean>', f293_x: '<boolean>', f294_b: '<number>', f295_f: '<number>', f296_x: '<object>', f297_w: '<array>', f298_g: '<null>', f299_p: '<number>', f300_z: '<number>', f301_a: '<null>'}, 'tZagCTydhQGVuOhiWvXeNzDgAxvSrnefSJnFrrrxmUVAofycCAxNaRpfJyzCvxyYONkElBqYxNrAsCLoOELGafPAZoTNTJVLsIEMPArvmRukdVvuYEIIcpUnIUVSRRuVoiNmxnodTSrZYHmlYVXRWDDjZqwdHQaimnbxMhrtuSemSerlydyDbAxQfuQlQmMasxyyEYuDVxpwEOjVwaxrxtUFVSKWKhtrqzuGhvUJqacJagJGTdjidJnfRSiONCERTwENjyOltRWaBg');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_1.clear();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('tZagCTydhQGVuOhiWvXeNzDgAxvSrnefSJnFrrrxmUVAofycCAxNaRpfJyzCvxyYONkElBqYxNrAsCLoOELGafPAZoTNTJVLsIEMPArvmRukdVvuYEIIcpUnIUVSRRuVoiNmxnodTSrZYHmlYVXRWDDjZqwdHQaimnbxMhrtuSemSerlydyDbAxQfuQlQmMasxyyEYuDVxpwEOjVwaxrxtUFVSKWKhtrqzuGhvUJqacJagJGTdjidJnfRSiONCERTwENjyOltRWaBg', true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_1756');
    db.deleteObjectStore('objectStore_2677')
    var put_1 = objectStore_1.put({f0_i: '<object>', f1_h: '<null>', f2_y: '<number>', f3_m: '<object>'}, 'iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
    var delete_1;
    try{
        KeyRange_2 = IDBKeyRange.only('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
        delete_1 = objectStore_1.delete(KeyRange_2);
    }
    catch (e){
    }

    var add_0 = objectStore_1.add({f0_u: '<number>', f1_u: '<object>', f2_l: '<object>', f3_g: '<null>', f4_n: '<object>', f5_t: '<object>', f6_m: '<number>', f7_z: '<array>', f8_e: '<string>', f9_t: '<string>'}, 'xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3990 = db.transaction(['objectStore_2678'], 'readwrite', {durability:"strict"})
    var objectStore_2678 = txn_3990.objectStore('objectStore_2678');
    var add_1 = objectStore_2678.add({f0_k: '<string>', f1_q: '<number>', f2_t: '<null>', f3_g: '<number>', f4_a: '<array>', f5_i: '<number>', f6_q: '<null>'}, 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
    var delete_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', false, true);
        delete_2 = objectStore_2678.delete(KeyRange_4);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', true);
        delete_3 = objectStore_2678.delete(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2678.getAll();
    var delete_4;
    try{
        KeyRange_8 = IDBKeyRange.bound('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', true, false);
        delete_4 = objectStore_2678.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_10 = IDBKeyRange.only('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
        get_0 = objectStore_2678.get(KeyRange_10);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', 'iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', false, true);
        count_0 = objectStore_2678.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2678.getAllKeys();
    var getAll_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', true, true);
        getAll_1 = objectStore_2678.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW');
        getAll_1 = objectStore_2678.getAll(KeyRange_15);
    }

    txn_3990.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3990.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3990.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3991 = db.transaction(['objectStore_2678'], 'readonly', {durability:"strict"})
    var objectStore_2678 = txn_3991.objectStore('objectStore_2678');
    var count_1 = objectStore_2678.count();
    var getAll_2;
    try{
        KeyRange_16 = IDBKeyRange.only('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW');
        getAll_2 = objectStore_2678.getAll(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
        getAll_2 = objectStore_2678.getAll(KeyRange_17);
    }

    var getAllKeys_1 = objectStore_2678.getAllKeys();
    var getAll_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', 'xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', false, false);
        getAll_3 = objectStore_2678.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        getAll_3 = objectStore_2678.getAll(KeyRange_19);
    }

    txn_3991.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3991.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3991.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3992 = db.transaction(['objectStore_2678'], 'readonly', {durability:"default"})
    var objectStore_2678 = txn_3992.objectStore('objectStore_2678');
    var get_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', false);
        get_1 = objectStore_2678.get(KeyRange_20);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_22 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', false, false);
        get_2 = objectStore_2678.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', 'xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', false, false);
        getAll_4 = objectStore_2678.getAll(KeyRange_24, 2067895538);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        getAll_4 = objectStore_2678.getAll(KeyRange_25);
    }

    var get_3;
    try{
        KeyRange_26 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', true, true);
        get_3 = objectStore_2678.get(KeyRange_26);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        get_4 = objectStore_2678.get(KeyRange_28);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', true, true);
        get_5 = objectStore_2678.get(KeyRange_30);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_32 = IDBKeyRange.only('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
        count_2 = objectStore_2678.count(KeyRange_32);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', false);
        get_6 = objectStore_2678.get(KeyRange_34);
    }
    catch (e){
    }

    var count_3 = objectStore_2678.count();
    var count_4 = objectStore_2678.count();
    var getAll_5;
    try{
        KeyRange_36 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        getAll_5 = objectStore_2678.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        getAll_5 = objectStore_2678.getAll(KeyRange_37);
    }

    txn_3992.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3992.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3992.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3993 = db.transaction(['objectStore_2678'], 'readonly', {durability:"strict"})
    var objectStore_2678 = txn_3993.objectStore('objectStore_2678');
    var count_5 = objectStore_2678.count();
    var count_6;
    try{
        KeyRange_38 = IDBKeyRange.only('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW');
        count_6 = objectStore_2678.count(KeyRange_38);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_40 = IDBKeyRange.bound('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', 'iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', false, false);
        get_7 = objectStore_2678.get(KeyRange_40);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', false, true);
        get_8 = objectStore_2678.get(KeyRange_42);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        get_9 = objectStore_2678.get(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_46 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', false, true);
        getAllKeys_2 = objectStore_2678.getAllKeys(KeyRange_46, 2916038682);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        getAllKeys_2 = objectStore_2678.getAllKeys(KeyRange_47);
    }

    txn_3993.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3993.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3993.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3994 = db.transaction(['objectStore_2678'], 'readonly', {durability:"strict"})
    var objectStore_2678 = txn_3994.objectStore('objectStore_2678');
    var get_10;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', true);
        get_10 = objectStore_2678.get(KeyRange_48);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_2678.getAllKeys(1580403784);
    var getAll_6;
    try{
        KeyRange_50 = IDBKeyRange.bound('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', true, true);
        getAll_6 = objectStore_2678.getAll(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('iloZbwbnMhWtoNSWVANrtVwyBopnupVUiUuQvIjhfBDho');
        getAll_6 = objectStore_2678.getAll(KeyRange_51);
    }

    var count_7 = objectStore_2678.count();
    var count_8 = objectStore_2678.count();
    var getAllKeys_4 = objectStore_2678.getAllKeys(726808331);
    var get_11;
    try{
        KeyRange_52 = IDBKeyRange.only('GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP');
        get_11 = objectStore_2678.get(KeyRange_52);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_54 = IDBKeyRange.bound('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW', 'GHipgyjlAluVrrmgGBrKfsribanUfjHcnARMloAqWNbfbcBhvmgNwcwHMkWgPjBYfIKqevUoyhEvzOKnNYaCaEXrUMxCbeREJVxDjNNhwVInogLjNAomwyKSMSzAxpCJxcVJNmjrvdaCeKOibdJICWrGDGveckSdnmZaFbFMMCiDHPGmHgsAzqJuJhOovoeEbrnbRDAgEuVDzaxsKqrGdDOELgsmTYvsRJpehsBewtbifguPPFMXfbOPeGqkzKcjKdLyzYSsMGWZVojuYwrSjddIQbbgeFBtdFauDJqeJlNcoP', false, true);
        getAll_7 = objectStore_2678.getAll(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('xEnTIKTXEzuPwYskujWldtBBuYtYWyHQjhOjRKaPjxkhIGcDQSxqGTZwzbJpmIlTuMbfggLzfGsohGEFVryEHlhDWJzpzcSgduJCWTkxsaCSWtKzFEGHzuVPDkwyqbRzqMoDSfjLLbZulIMfHyQbanTuXZlfcumLWXyNqEvtAVXORFTXwWoIKpjDxrUOigRsdaRwzvRTYfzBemsfxfpjsXUdvsXLdMHVjOYcEYeASGIVjgtfapSZYGxnyXzKRFYkBcYSYFtDSMUlqYpoIXsnJKnuXhToWXeiJaljhGAGZtWWlYHvYvXKNQWdwsmXUIYvHpcANaVMJekhlJdcHXLKNgWxxQQaSwdxviYFEDLFRTPaNTuXJOzlGMnMpxjhpYMbDAZDVpjujLWMOxZW');
        getAll_7 = objectStore_2678.getAll(KeyRange_55);
    }

    var count_9 = objectStore_2678.count();
    txn_3994.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3994.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3994.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4121')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};