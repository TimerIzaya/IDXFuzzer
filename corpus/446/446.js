let db;
const openRequest = window.indexedDB.open('str_3971', 2266453617723139)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2639', {autoIncrement: true});
    var add_0 = objectStore_0.add({f0_j: '<null>', f1_c: '<object>', f2_r: '<object>', f3_j: '<boolean>', f4_z: '<boolean>', f5_w: '<number>', f6_u: '<null>', f7_s: '<string>'}, 'qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.only('qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0, 377396664);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS');
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS', false);
        delete_1 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var delete_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS', 'qjJEscvXqHkUhnIBEeQBsAzJFVarSuZiGoxyLzuzKMtELQRCFUwZfnAcqeTyVdxhvrxPlsQJYnEyGtUqPUxgKEkFSQaGQGCWHGHXDfiaQJhGhHaYJtKMjoODbltzBZcENMgzFiVAryXAS', true, true);
        delete_2 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var count_2 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_2640', {keypath: 'uhnnAaSJTdLvbIZXjaxtwGpTTCVeXUfDvhpaWmtIkjIQJuwTNtNSUiFqTsxnzwptAyOSnnGDFDbDNuHJtpKIOLnFVGqtwrVdCuSIQfVZfkjGwCwHYNzJVojZkoLjMPgCBcnYimUqQENcutIhZNSqUbxroSHVcrChXEuvpRqswWHIcKpJfDeAZebhgQKIoFqloixDmodWgINOibPnrwMhuWNjTzztOelQmzBhkhokdooJGzvFJmJDhUxZTMwjzKniEPeApnrptfqbhrvZFIsNrGacoGxPrzIpdiYCCajUmiwtVtuVUAofVOXBfmWgfUOMjZCmiaNnCVxWBknihXxzXvIiNEQwMFVHAeYWjYnfOsTJzfHEfatQPvvTvIdvMCkkMuyeHQtNnpLFyGyftXmeOfwtAtSVxVMCKapwrNKgQvFcHyTVmhwKNCxprsDojnAcIdHmcWCGMvHUKfXBZkUBGmaycYYTwHCWVwkQASYMBncTekgWWQetdSNpAiCgUPuoaLqomjxlBZxzbKYLvWGeXmhsTHNXZjMoNwPwkbpFGrVbcbaUDGqcHDMSyauFvCpRFfmlksEKYlbvCSXRfLVCVKoBnFBEdOLWqHteKwinoPOSHiWkzYMzLpcaXeUGYAQNFpiOubEPZcGpQyXlbVCFyJakIJdZTCovvULUcsYKaBUKFkwAhvSUkKdrHZsPSnmtJCioAorkSyrIyJJXzqfgtWwLDKsnzdmNMPXSVYyCQXoRgxyeoIHWrMpQauDFyqTYebKLhaFYTlzXFqYeqfBHAdsiYlLjUsgOGFhALFGhAomECMibXuHzNOheXG'});
    var index_1731 = objectStore_0.createIndex('index_1731', 'test', {unique: false, multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_2641');
    db.deleteObjectStore('objectStore_2639')
    var clear_1 = objectStore_1.clear();
    var index_1732 = objectStore_2.createIndex('index_1732', 'test', {multiEntry: true});
    var index_1733 = objectStore_2.createIndex('index_1733', 'test', {multiEntry: false});
    var add_1 = objectStore_1.add({f0_a: '<string>', f1_x: '<number>', f2_d: '<number>', f3_p: '<boolean>', f4_d: '<object>'}, 'HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV');
    var put_0 = objectStore_2.put({f0_b: '<boolean>', f1_f: '<null>', f2_c: '<boolean>', f3_i: '<number>', f4_g: '<string>', f5_m: '<null>', f6_z: '<boolean>', f7_q: '<number>', f8_q: '<number>', f9_i: '<string>', f10_t: '<boolean>', f11_l: '<object>', f12_j: '<null>', f13_s: '<array>', f14_a: '<boolean>', f15_a: '<number>', f16_x: '<number>', f17_d: '<number>', f18_x: '<object>', f19_b: '<object>', f20_q: '<number>', f21_m: '<boolean>', f22_c: '<boolean>', f23_k: '<object>', f24_o: '<null>', f25_h: '<array>', f26_w: '<array>', f27_w: '<number>', f28_b: '<boolean>', f29_z: '<null>', f30_t: '<array>', f31_m: '<string>', f32_v: '<object>', f33_p: '<object>', f34_a: '<array>', f35_j: '<null>', f36_i: '<string>', f37_s: '<null>', f38_v: '<boolean>', f39_c: '<boolean>', f40_b: '<number>', f41_z: '<object>', f42_g: '<null>', f43_j: '<array>', f44_w: '<string>', f45_u: '<object>', f46_r: '<number>', f47_o: '<boolean>', f48_o: '<number>', f49_w: '<number>', f50_a: '<array>', f51_p: '<number>', f52_r: '<number>', f53_l: '<boolean>', f54_k: '<string>', f55_s: '<null>', f56_q: '<array>', f57_l: '<boolean>', f58_c: '<object>', f59_x: '<number>', f60_x: '<array>', f61_k: '<string>', f62_p: '<boolean>', f63_z: '<object>', f64_i: '<number>', f65_u: '<number>', f66_w: '<string>', f67_g: '<boolean>', f68_a: '<string>', f69_v: '<boolean>', f70_v: '<string>', f71_n: '<number>', f72_x: '<string>', f73_w: '<array>', f74_u: '<boolean>', f75_r: '<array>', f76_h: '<object>', f77_n: '<boolean>', f78_x: '<boolean>', f79_d: '<null>', f80_j: '<null>', f81_c: '<number>', f82_d: '<boolean>', f83_n: '<null>', f84_f: '<string>', f85_d: '<boolean>', f86_q: '<array>', f87_u: '<string>', f88_s: '<number>', f89_h: '<string>', f90_y: '<boolean>', f91_n: '<array>', f92_r: '<array>', f93_i: '<boolean>', f94_u: '<boolean>', f95_i: '<array>', f96_x: '<object>', f97_b: '<number>', f98_q: '<number>', f99_z: '<array>', f100_k: '<object>', f101_k: '<object>', f102_j: '<null>', f103_l: '<string>', f104_s: '<array>', f105_y: '<object>', f106_k: '<boolean>', f107_j: '<array>', f108_k: '<string>', f109_u: '<array>', f110_h: '<array>', f111_q: '<number>', f112_w: '<null>', f113_n: '<array>', f114_p: '<null>', f115_a: '<number>', f116_c: '<number>', f117_g: '<object>', f118_w: '<object>', f119_v: '<object>', f120_x: '<null>', f121_y: '<number>', f122_v: '<null>', f123_m: '<array>', f124_m: '<array>', f125_z: '<number>', f126_z: '<array>', f127_b: '<number>', f128_e: '<boolean>', f129_p: '<object>', f130_g: '<number>', f131_t: '<null>', f132_o: '<boolean>', f133_l: '<string>', f134_b: '<string>', f135_a: '<null>', f136_c: '<array>', f137_y: '<number>', f138_e: '<array>', f139_a: '<array>', f140_m: '<string>', f141_l: '<array>', f142_q: '<string>', f143_i: '<number>', f144_f: '<array>', f145_f: '<null>', f146_q: '<string>', f147_l: '<string>', f148_g: '<object>', f149_a: '<string>', f150_c: '<null>', f151_r: '<boolean>', f152_s: '<object>', f153_b: '<null>', f154_u: '<array>', f155_k: '<boolean>', f156_t: '<array>', f157_h: '<array>', f158_w: '<array>', f159_z: '<number>', f160_b: '<number>', f161_k: '<string>', f162_m: '<array>', f163_q: '<string>', f164_t: '<null>', f165_t: '<object>', f166_r: '<array>', f167_t: '<array>', f168_o: '<number>', f169_a: '<string>', f170_j: '<array>', f171_i: '<object>', f172_j: '<null>', f173_r: '<array>', f174_q: '<array>', f175_u: '<string>', f176_u: '<string>', f177_t: '<number>', f178_p: '<boolean>', f179_o: '<null>', f180_g: '<boolean>', f181_g: '<object>', f182_g: '<number>', f183_c: '<array>', f184_h: '<number>', f185_k: '<string>', f186_c: '<null>', f187_f: '<array>', f188_l: '<string>', f189_k: '<object>', f190_f: '<boolean>', f191_q: '<boolean>', f192_j: '<boolean>', f193_f: '<boolean>', f194_c: '<number>', f195_r: '<number>', f196_c: '<null>', f197_i: '<array>', f198_h: '<string>', f199_x: '<number>', f200_v: '<array>', f201_l: '<null>', f202_o: '<array>', f203_u: '<array>', f204_p: '<null>', f205_i: '<boolean>', f206_c: '<string>', f207_r: '<object>', f208_d: '<string>', f209_i: '<array>', f210_b: '<array>', f211_h: '<boolean>', f212_q: '<array>', f213_x: '<array>', f214_x: '<number>', f215_r: '<boolean>', f216_f: '<number>', f217_h: '<null>', f218_a: '<object>', f219_j: '<number>', f220_s: '<number>', f221_p: '<object>', f222_a: '<boolean>', f223_r: '<null>', f224_m: '<boolean>', f225_t: '<string>', f226_y: '<array>', f227_c: '<array>', f228_k: '<string>', f229_t: '<number>', f230_o: '<null>', f231_d: '<number>', f232_r: '<array>', f233_y: '<array>', f234_w: '<array>', f235_q: '<null>', f236_o: '<object>', f237_g: '<null>', f238_v: '<array>', f239_l: '<number>', f240_j: '<string>', f241_p: '<boolean>', f242_o: '<null>', f243_o: '<boolean>', f244_e: '<object>', f245_g: '<number>', f246_h: '<string>'}, 'ylQPtGZOiOoQafIWsbafHmgahLWdsRdPbuFInpGIwuCqHsbGoNnQnfQJHBCCHMVyhWmSSWigCtNtJfFoAyRyYOWGOLMkUkYfhxoahhcJZlGPSymLLkHxrouXicizpMTCmoNCHieDHicGTeMxZNAjzzDXhrzMzhwtomCuLMcPXiKjrtaBDgejimTSPQhAEZOqYCrqsKXmEV');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3945 = db.transaction(['objectStore_2640'], 'readonly', {durability:"strict"})
    var objectStore_2640 = txn_3945.objectStore('objectStore_2640');
    var count_3 = objectStore_2640.count();
    var getAll_0 = objectStore_2640.getAll(3038304840);
    var count_4;
    try{
        KeyRange_8 = IDBKeyRange.only('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV');
        count_4 = objectStore_2640.count(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', 'HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', true, false);
        getAllKeys_1 = objectStore_2640.getAllKeys(KeyRange_10, 3933784555);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV');
        getAllKeys_1 = objectStore_2640.getAllKeys(KeyRange_11);
    }

    var getAll_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', false);
        getAll_1 = objectStore_2640.getAll(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV');
        getAll_1 = objectStore_2640.getAll(KeyRange_13);
    }

    var count_5 = objectStore_2640.count();
    var count_6 = objectStore_2640.count();
    var count_7 = objectStore_2640.count();
    txn_3945.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3945.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3945.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3946 = db.transaction(['objectStore_2640'], 'readwrite', {durability:"strict"})
    var objectStore_2640 = txn_3946.objectStore('objectStore_2640');
    var delete_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', 'HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', true, true);
        delete_3 = objectStore_2640.delete(KeyRange_14);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('HuwQTeBXOHuOGaYWnCPFNrFdTjvkwLDZUCvRJNPvRfLctBIjRPjBVmLbnJqkfwwcYSYfqbHLXudqjCXjmqQmhMYlWWifmeLXYCivPPuGCVDpHgjGdzRNiXBfexMPowtBhmeKanhSqXBOZkfErkEGngDvbRZgFJWSDeaZAtvOkwEgySAukaIDxMClDdQyfMnPdwFRarUoZXYfITDXBbyspNUtLItrMWJqgcOzSbeKQvgswLxDYmlEEPIWIyCqzpFRPkEInOhJovsyVVUjohRkZdJeixDpvNrRmeQMVrmONFcegaYhUhAoXwzXgWvyrWQkbiLVThAvdMNODGhiVDSiDMdzZczwrYxKISfLZPpgLSIcpBCUckzUbmuClxPAzpEzNaLngOICzsuLWRTEZMlppXVMpZNlBPjTITLFavJSBhdTzZOyLKPyrDTRvZTXSspnLpMvUBfpszVbOVeYggfhhexqKhugEdQVhvWHzliVccPSqasGFdZTMlxCFNOdreXBZROoqYlRlgpCgDPwgwbigmOmKurvOyKBbtWDHCkIepcSIeilHeUySfYxgvovEdKuElflTNomuMYDgdTzaEbSoHBBLDiSWvIOqAQIogysvBLulYiIQzIqDeXsxUDbvleyFxHUgkFtvMVMkTbLXzagvNJQcGxlSYMCZVjfjgobTqhIRlZFpkmwWHmNixfMxKvGgWnWZSXzOTtvuYlIOphdXqTVHfODmLebQTxlmRiCgfdfGxBlPSAaeGNQixxdAmvCevKsFycbwjzQgxDwyPteHdOteqeblxFGmYqKtdFISyOsMebiQZGnjFPXBLmYczNGQrQwDNZePFgFfvwwRsHqNcSFrHAwCIdxJAhLlEmHcUDoJNbUEcDIHwwLoXGFtLCnrNIRNiVlVaxwetDiXREMwbNdMszJOoQwJDNOuJmuoWhtaiSARpfVjtV', true);
        delete_4 = objectStore_2640.delete(KeyRange_16);
    }
    catch (e){
    }

    var clear_2 = objectStore_2640.clear();
    var add_2 = objectStore_2640.add({f0_x: '<null>', f1_x: '<object>', f2_u: '<array>', f3_z: '<array>', f4_c: '<array>', f5_b: '<string>', f6_n: '<boolean>'}, 'NFzKRFwRkKOCMtOdfKCrijIzFddCtOvNUHUatsmBsTUuxgHCKkNAndQJhUYSWbYEXMKjeUJWxizAbCIxlRlOOZkgpztsMFbTJxCqorsAyTwoGCzdWmoVEKHqTkVzrVqeZAyAcZnPDfXEMbcfKmoVtLGnKHDqdisMGWhrlsuoOeastPAZEyWazVMXLoEBnHRsQPNtLOAigpqJMaEeDBgBZDrsEdCjwVgDNcEYqwgWcoKGzoVcRvthAAzUCkLMzJUcMjTpKmMSivyraJpulwvu');
    var get_0;
    try{
        KeyRange_18 = IDBKeyRange.only('NFzKRFwRkKOCMtOdfKCrijIzFddCtOvNUHUatsmBsTUuxgHCKkNAndQJhUYSWbYEXMKjeUJWxizAbCIxlRlOOZkgpztsMFbTJxCqorsAyTwoGCzdWmoVEKHqTkVzrVqeZAyAcZnPDfXEMbcfKmoVtLGnKHDqdisMGWhrlsuoOeastPAZEyWazVMXLoEBnHRsQPNtLOAigpqJMaEeDBgBZDrsEdCjwVgDNcEYqwgWcoKGzoVcRvthAAzUCkLMzJUcMjTpKmMSivyraJpulwvu');
        get_0 = objectStore_2640.get(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_2640.getAllKeys(51085624);
    txn_3946.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3946.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3946.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3947 = db.transaction(['objectStore_2641', 'objectStore_2640'], 'readwrite', {durability:"strict"})
    var objectStore_2640 = txn_3947.objectStore('objectStore_2640');
    var clear_3 = objectStore_2640.clear();
    var put_1 = objectStore_2640.put({f0_y: '<object>', f1_h: '<null>', f2_e: '<boolean>', f3_c: '<string>', f4_o: '<boolean>', f5_h: '<number>', f6_m: '<boolean>', f7_g: '<object>', f8_h: '<null>', f9_w: '<boolean>', f10_a: '<null>', f11_u: '<string>', f12_p: '<object>', f13_l: '<array>', f14_j: '<array>', f15_h: '<boolean>', f16_f: '<string>', f17_f: '<string>', f18_b: '<object>', f19_h: '<number>', f20_w: '<boolean>', f21_i: '<array>', f22_h: '<null>', f23_m: '<boolean>', f24_v: '<array>', f25_d: '<boolean>', f26_a: '<string>', f27_b: '<number>', f28_t: '<array>', f29_b: '<object>', f30_g: '<array>', f31_t: '<array>', f32_h: '<object>', f33_v: '<array>', f34_n: '<boolean>', f35_n: '<boolean>', f36_i: '<null>', f37_m: '<array>', f38_l: '<number>', f39_f: '<number>', f40_g: '<number>', f41_s: '<array>', f42_y: '<string>', f43_s: '<null>', f44_c: '<null>', f45_n: '<string>', f46_x: '<array>', f47_f: '<null>', f48_j: '<object>', f49_j: '<boolean>', f50_m: '<object>', f51_o: '<boolean>', f52_j: '<array>', f53_t: '<boolean>', f54_d: '<string>', f55_o: '<null>', f56_b: '<array>', f57_e: '<array>', f58_l: '<number>', f59_x: '<array>', f60_j: '<boolean>', f61_f: '<number>', f62_d: '<array>', f63_j: '<string>', f64_k: '<string>', f65_n: '<array>', f66_k: '<null>', f67_a: '<object>', f68_m: '<null>', f69_c: '<string>', f70_h: '<boolean>', f71_z: '<null>', f72_w: '<boolean>', f73_c: '<string>', f74_b: '<boolean>', f75_c: '<string>', f76_o: '<number>', f77_g: '<null>', f78_i: '<number>', f79_s: '<boolean>', f80_n: '<number>', f81_o: '<boolean>', f82_y: '<array>', f83_c: '<object>', f84_e: '<object>', f85_q: '<number>', f86_y: '<null>', f87_z: '<boolean>', f88_e: '<string>', f89_b: '<null>', f90_u: '<number>', f91_c: '<boolean>', f92_m: '<boolean>', f93_s: '<number>', f94_q: '<object>', f95_s: '<null>', f96_z: '<object>', f97_y: '<string>', f98_e: '<null>', f99_u: '<array>', f100_v: '<string>', f101_r: '<string>', f102_r: '<array>', f103_o: '<string>', f104_i: '<object>', f105_g: '<array>', f106_h: '<string>', f107_l: '<null>', f108_n: '<object>', f109_j: '<null>', f110_b: '<object>', f111_k: '<boolean>', f112_o: '<boolean>', f113_h: '<array>', f114_e: '<string>', f115_t: '<string>', f116_a: '<object>', f117_j: '<boolean>', f118_u: '<object>', f119_c: '<object>', f120_n: '<array>', f121_u: '<array>', f122_q: '<string>', f123_m: '<string>', f124_b: '<number>', f125_r: '<string>', f126_e: '<array>', f127_m: '<boolean>', f128_n: '<object>', f129_d: '<string>', f130_u: '<null>', f131_e: '<number>', f132_o: '<boolean>', f133_t: '<object>', f134_j: '<boolean>', f135_s: '<string>', f136_y: '<object>', f137_s: '<array>', f138_n: '<null>', f139_n: '<array>', f140_m: '<string>', f141_s: '<null>', f142_l: '<string>', f143_s: '<array>', f144_u: '<null>', f145_x: '<number>', f146_g: '<object>', f147_c: '<string>', f148_f: '<null>', f149_q: '<string>', f150_l: '<object>', f151_b: '<string>', f152_k: '<null>', f153_g: '<object>', f154_p: '<boolean>', f155_y: '<number>', f156_y: '<boolean>', f157_l: '<array>', f158_m: '<object>', f159_i: '<array>', f160_o: '<object>', f161_w: '<boolean>', f162_z: '<number>', f163_b: '<null>', f164_e: '<object>', f165_h: '<boolean>', f166_j: '<null>', f167_g: '<null>', f168_b: '<string>', f169_g: '<number>', f170_k: '<null>', f171_b: '<boolean>', f172_f: '<null>', f173_j: '<boolean>', f174_q: '<object>', f175_o: '<array>', f176_j: '<array>', f177_c: '<null>', f178_a: '<array>', f179_c: '<array>', f180_b: '<boolean>', f181_a: '<object>', f182_d: '<boolean>', f183_h: '<null>', f184_b: '<array>', f185_p: '<string>', f186_a: '<object>', f187_y: '<object>', f188_d: '<boolean>', f189_v: '<array>', f190_m: '<boolean>', f191_i: '<number>', f192_b: '<null>', f193_o: '<null>', f194_l: '<number>', f195_f: '<array>', f196_p: '<null>', f197_d: '<number>', f198_k: '<number>', f199_p: '<boolean>', f200_w: '<boolean>', f201_u: '<array>', f202_p: '<null>', f203_c: '<string>', f204_b: '<array>', f205_y: '<boolean>', f206_c: '<number>', f207_c: '<string>', f208_a: '<null>', f209_p: '<null>', f210_x: '<array>', f211_h: '<null>', f212_z: '<array>', f213_m: '<object>', f214_q: '<object>', f215_o: '<null>', f216_c: '<null>', f217_b: '<array>', f218_h: '<string>', f219_k: '<number>', f220_v: '<string>', f221_u: '<number>', f222_p: '<string>', f223_y: '<array>', f224_n: '<null>', f225_d: '<boolean>', f226_c: '<string>', f227_g: '<boolean>', f228_w: '<boolean>', f229_c: '<array>', f230_o: '<number>', f231_a: '<object>', f232_k: '<string>', f233_q: '<boolean>', f234_q: '<string>', f235_z: '<boolean>', f236_y: '<object>', f237_n: '<number>', f238_o: '<string>', f239_k: '<object>', f240_k: '<array>', f241_p: '<string>', f242_n: '<boolean>', f243_c: '<object>', f244_s: '<boolean>', f245_r: '<null>', f246_v: '<string>', f247_t: '<array>', f248_y: '<array>', f249_z: '<null>', f250_h: '<null>', f251_u: '<null>', f252_i: '<number>', f253_c: '<number>', f254_z: '<array>', f255_h: '<object>', f256_d: '<null>', f257_t: '<array>', f258_g: '<number>', f259_d: '<boolean>', f260_c: '<array>', f261_f: '<array>', f262_h: '<null>', f263_a: '<object>', f264_u: '<number>', f265_w: '<number>', f266_y: '<boolean>', f267_o: '<boolean>', f268_v: '<string>', f269_f: '<string>', f270_l: '<null>', f271_r: '<null>', f272_r: '<string>', f273_f: '<array>', f274_v: '<object>', f275_d: '<string>', f276_c: '<number>', f277_y: '<null>', f278_b: '<boolean>', f279_o: '<null>', f280_x: '<boolean>', f281_g: '<number>', f282_r: '<object>', f283_a: '<string>', f284_i: '<array>', f285_m: '<array>', f286_s: '<object>', f287_m: '<object>', f288_m: '<array>', f289_l: '<null>', f290_e: '<boolean>', f291_b: '<boolean>', f292_x: '<number>', f293_u: '<object>', f294_k: '<string>', f295_k: '<object>', f296_h: '<null>', f297_p: '<object>', f298_i: '<object>', f299_h: '<null>', f300_v: '<number>', f301_z: '<null>', f302_w: '<array>', f303_c: '<boolean>', f304_c: '<object>', f305_s: '<number>', f306_k: '<array>', f307_y: '<string>', f308_a: '<object>', f309_d: '<array>', f310_s: '<string>', f311_h: '<number>', f312_j: '<string>', f313_j: '<string>', f314_q: '<null>', f315_o: '<null>', f316_y: '<null>', f317_m: '<string>', f318_k: '<number>', f319_p: '<number>'}, 'TrKtnQtulpVJRyBaFMbQAAnVyxJqkpQybAKjQhHLdhgdNegQOvQiYDCTlHYdFGNChwMnwDkPxRkcAIioIRVBBwhxcZiZZpEdZloAnZIOqtJzTijqFErZqFBvykuOPCVdDDqWzVtKjmiJBBvjjzYMTsjYOayJSTKEYcJkYKGAJFvzeEfYgqHmHiwUGlosaSkFLuxakvzziRaRzhDIqTWOkqGPfyJAMpERUiehDYFswYorOOBhlbKeofRCBJCkRnxiHgXJYaKrzPzREeDoFMKDitVuNcuTxhESKiemPpRaAAIvIIIDHsDPsAVKLOoOxvTYnZUSckiwgNPlMPySGWGpTEEXqZGIRrtVbceVANRcWjIZmouofiyywHDncvdFwRnOGaGeIQMuXIiVsLXGMwMXrusJyMowerQkpkYJvXSDoJMbFKOgnVGWIQU');
    var clear_4 = objectStore_2640.clear();
    txn_3947.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3947.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3947.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3948 = db.transaction(['objectStore_2641'], 'readwrite', {durability:"default"})
    var objectStore_2641 = txn_3948.objectStore('objectStore_2641');
    var index_0 = objectStore_2641.index('index_1733');
    var put_2 = objectStore_2641.put({f0_u: '<array>', f1_z: '<boolean>'}, 'KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj');
    var index_1 = objectStore_2641.index('index_1733');
    var add_3 = objectStore_2641.add({f0_j: '<boolean>', f1_c: '<array>', f2_k: '<string>', f3_h: '<number>'}, 'xqKVhfBJpDnGDVQbSQmrhGTgmGqvBksVcrEUgkBifcCjDCFBewvxrsLAdobWWBVgt');
    var getAll_2 = objectStore_2641.getAll(388500747);
    var get_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('xqKVhfBJpDnGDVQbSQmrhGTgmGqvBksVcrEUgkBifcCjDCFBewvxrsLAdobWWBVgt', 'ylQPtGZOiOoQafIWsbafHmgahLWdsRdPbuFInpGIwuCqHsbGoNnQnfQJHBCCHMVyhWmSSWigCtNtJfFoAyRyYOWGOLMkUkYfhxoahhcJZlGPSymLLkHxrouXicizpMTCmoNCHieDHicGTeMxZNAjzzDXhrzMzhwtomCuLMcPXiKjrtaBDgejimTSPQhAEZOqYCrqsKXmEV', false, true);
        get_1 = objectStore_2641.get(KeyRange_20);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj', false);
        get_2 = objectStore_2641.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_2641.getAllKeys(2361026929);
    var clear_5 = objectStore_2641.clear();
    var put_3 = objectStore_2641.put({f0_k: '<boolean>', f1_h: '<object>', f2_l: '<string>'}, 'cIOHrlLdUcNTZRrzSFhWrtWsHghthMZwzQCTeQDDAsewouwmpDwOdszHxbYMqNErNmBsqWcbJcLylMupGTbRHPCTihadRTDPrqhYlQzLUMlWeMnZdzsDtSUXvLWfBnktIfMKgIUplCWBhUXYqJzNGTmRNZTqaZdSzrSRcKLQGwTPzmcKIvKfcJxZuJBWsfrLRwqQJvQnPNXtENuVYZKIMscTVCgovKEGZzdtkKHEBEKbkzcgtxGLtLPZppqRfDLUuRJjjjOscLravkAYqOeWgzZLkmemqsGpjyliKLxJjUGZkFQGYyvSJLbvetUBOoYaLFmphOSRuXFMGyL');
    txn_3948.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3948.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3948.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3949 = db.transaction(['objectStore_2641'], 'readonly', {durability:"strict"})
    var objectStore_2641 = txn_3949.objectStore('objectStore_2641');
    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj', false);
        get_3 = objectStore_2641.get(KeyRange_24);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('ylQPtGZOiOoQafIWsbafHmgahLWdsRdPbuFInpGIwuCqHsbGoNnQnfQJHBCCHMVyhWmSSWigCtNtJfFoAyRyYOWGOLMkUkYfhxoahhcJZlGPSymLLkHxrouXicizpMTCmoNCHieDHicGTeMxZNAjzzDXhrzMzhwtomCuLMcPXiKjrtaBDgejimTSPQhAEZOqYCrqsKXmEV', false);
        get_4 = objectStore_2641.get(KeyRange_26);
    }
    catch (e){
    }

    var count_8 = objectStore_2641.count();
    var count_9 = objectStore_2641.count();
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.only('KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj');
        get_5 = objectStore_2641.get(KeyRange_28);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('xqKVhfBJpDnGDVQbSQmrhGTgmGqvBksVcrEUgkBifcCjDCFBewvxrsLAdobWWBVgt', true);
        count_10 = objectStore_2641.count(KeyRange_30);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_32 = IDBKeyRange.bound('KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj', 'cIOHrlLdUcNTZRrzSFhWrtWsHghthMZwzQCTeQDDAsewouwmpDwOdszHxbYMqNErNmBsqWcbJcLylMupGTbRHPCTihadRTDPrqhYlQzLUMlWeMnZdzsDtSUXvLWfBnktIfMKgIUplCWBhUXYqJzNGTmRNZTqaZdSzrSRcKLQGwTPzmcKIvKfcJxZuJBWsfrLRwqQJvQnPNXtENuVYZKIMscTVCgovKEGZzdtkKHEBEKbkzcgtxGLtLPZppqRfDLUuRJjjjOscLravkAYqOeWgzZLkmemqsGpjyliKLxJjUGZkFQGYyvSJLbvetUBOoYaLFmphOSRuXFMGyL', false, true);
        getAll_3 = objectStore_2641.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('cIOHrlLdUcNTZRrzSFhWrtWsHghthMZwzQCTeQDDAsewouwmpDwOdszHxbYMqNErNmBsqWcbJcLylMupGTbRHPCTihadRTDPrqhYlQzLUMlWeMnZdzsDtSUXvLWfBnktIfMKgIUplCWBhUXYqJzNGTmRNZTqaZdSzrSRcKLQGwTPzmcKIvKfcJxZuJBWsfrLRwqQJvQnPNXtENuVYZKIMscTVCgovKEGZzdtkKHEBEKbkzcgtxGLtLPZppqRfDLUuRJjjjOscLravkAYqOeWgzZLkmemqsGpjyliKLxJjUGZkFQGYyvSJLbvetUBOoYaLFmphOSRuXFMGyL');
        getAll_3 = objectStore_2641.getAll(KeyRange_33);
    }

    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('ylQPtGZOiOoQafIWsbafHmgahLWdsRdPbuFInpGIwuCqHsbGoNnQnfQJHBCCHMVyhWmSSWigCtNtJfFoAyRyYOWGOLMkUkYfhxoahhcJZlGPSymLLkHxrouXicizpMTCmoNCHieDHicGTeMxZNAjzzDXhrzMzhwtomCuLMcPXiKjrtaBDgejimTSPQhAEZOqYCrqsKXmEV', false);
        get_6 = objectStore_2641.get(KeyRange_34);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('xqKVhfBJpDnGDVQbSQmrhGTgmGqvBksVcrEUgkBifcCjDCFBewvxrsLAdobWWBVgt', false);
        getAll_4 = objectStore_2641.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('KbEVcLClKwLgReJRngQtrshrEStabkCjHxFufRWENTxGNTAjPtXtuVXJsYmjWxlYGRMzqWisLAkFODAequoXriAaJNkOiGZwdIVnDTqWtKmOnFECltvzEBzYbgfuMaiczTeTIeBIGADaKRMigKvmIwVTlZQeVABCPZJcYbXqXBJCsVAmHZPtAiiMOfBFQYzOixWquzDljhSkxDzvRZcAalNxnVepeSIwsjYTNucUMTrKynClRxmWzqEqDkZCzcxmrTyWoMQdSBmXFEVXEoUpaJBndcfLPuqFvrXYYnBtairZehmpgaBcoYRfIgaYqbUaZpwzTumVuwrNmmugBTqrTcWkYNbPjyItnKbAHFyiZGIGiBMHuGeLlKUNRyCLACnAYziAyZKPjvPTVnikhBwnmQoAqyVzgBpovLIxaIZdMQKeSdcRJRYJYOaryVEyKPqAPXmAnSrrQXORMSGjdLTalVmFJYtIhaVweaJUvrjSSRpQvKGbxmnwAVMwALzZcJVLVYuYgOxTfwTeCgxxuKUj');
        getAll_4 = objectStore_2641.getAll(KeyRange_37);
    }

    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('cIOHrlLdUcNTZRrzSFhWrtWsHghthMZwzQCTeQDDAsewouwmpDwOdszHxbYMqNErNmBsqWcbJcLylMupGTbRHPCTihadRTDPrqhYlQzLUMlWeMnZdzsDtSUXvLWfBnktIfMKgIUplCWBhUXYqJzNGTmRNZTqaZdSzrSRcKLQGwTPzmcKIvKfcJxZuJBWsfrLRwqQJvQnPNXtENuVYZKIMscTVCgovKEGZzdtkKHEBEKbkzcgtxGLtLPZppqRfDLUuRJjjjOscLravkAYqOeWgzZLkmemqsGpjyliKLxJjUGZkFQGYyvSJLbvetUBOoYaLFmphOSRuXFMGyL', false);
        get_7 = objectStore_2641.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_2641.getAllKeys(1152940490);
    txn_3949.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3949.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3949.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3096')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};