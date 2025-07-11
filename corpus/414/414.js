let db;
const openRequest = window.indexedDB.open('str_5184', 4784631867028522)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2414', {keypath: 'LbExxrUaXgjpfNVxkSaFSWHACAIcJhOGaCaksdfxTHFYMNTfpPuqjRAniwyhKuidAxUVVTxynyVBsGbBjExfZhlsMebdqAriUwWYFRpeAhTmBpqsKYxxvqEeomtCvlwADYtvDHSyDhUHPJmEtjWJGthArgnsxBeHjvmEQTrJctIOOTAxkyYzGWrMgbvTTZZMsiDEKBhsooRqwuZOdkIyhAMMx'});
    var add_0 = objectStore_0.add({f0_x: '<number>', f1_q: '<null>', f2_g: '<object>', f3_g: '<array>', f4_y: '<number>', f5_x: '<string>', f6_i: '<boolean>', f7_x: '<string>', f8_i: '<array>', f9_a: '<null>', f10_s: '<array>', f11_a: '<boolean>', f12_h: '<null>', f13_d: '<array>', f14_e: '<array>', f15_x: '<object>', f16_f: '<string>', f17_o: '<boolean>', f18_b: '<number>', f19_v: '<boolean>', f20_q: '<number>', f21_q: '<object>', f22_l: '<object>', f23_g: '<number>', f24_i: '<array>', f25_u: '<null>', f26_e: '<string>', f27_k: '<null>', f28_e: '<string>', f29_j: '<null>', f30_u: '<null>', f31_m: '<null>', f32_k: '<null>', f33_u: '<array>', f34_x: '<null>', f35_y: '<object>', f36_z: '<array>', f37_s: '<array>', f38_s: '<boolean>', f39_q: '<string>', f40_w: '<string>', f41_o: '<string>', f42_d: '<number>', f43_u: '<null>', f44_f: '<null>', f45_t: '<number>', f46_q: '<array>', f47_u: '<array>', f48_s: '<number>', f49_x: '<number>', f50_g: '<string>', f51_v: '<object>', f52_i: '<string>', f53_h: '<array>', f54_z: '<number>', f55_m: '<string>', f56_g: '<object>', f57_j: '<array>', f58_f: '<null>', f59_m: '<string>', f60_k: '<object>', f61_j: '<number>', f62_p: '<null>', f63_f: '<string>', f64_p: '<array>', f65_e: '<null>', f66_w: '<number>', f67_y: '<string>', f68_r: '<boolean>', f69_x: '<string>', f70_a: '<array>', f71_u: '<number>', f72_i: '<string>', f73_w: '<array>', f74_p: '<array>', f75_t: '<null>', f76_j: '<boolean>', f77_j: '<boolean>', f78_r: '<string>', f79_m: '<number>', f80_o: '<object>', f81_l: '<array>', f82_v: '<number>', f83_i: '<array>', f84_w: '<null>', f85_f: '<array>', f86_j: '<boolean>', f87_p: '<null>', f88_p: '<boolean>', f89_b: '<number>', f90_b: '<object>', f91_g: '<boolean>', f92_q: '<object>', f93_c: '<string>', f94_u: '<number>', f95_l: '<number>', f96_a: '<boolean>', f97_m: '<number>', f98_k: '<number>', f99_u: '<array>', f100_n: '<number>', f101_l: '<boolean>', f102_j: '<object>', f103_c: '<array>', f104_d: '<array>', f105_n: '<string>', f106_u: '<null>', f107_t: '<string>', f108_x: '<null>', f109_z: '<boolean>', f110_q: '<string>', f111_s: '<object>', f112_m: '<array>', f113_i: '<array>', f114_g: '<object>', f115_s: '<boolean>', f116_g: '<number>', f117_x: '<object>', f118_i: '<array>', f119_d: '<object>', f120_g: '<boolean>', f121_a: '<null>', f122_x: '<number>', f123_p: '<string>', f124_b: '<number>', f125_w: '<number>', f126_i: '<null>', f127_x: '<string>', f128_r: '<boolean>', f129_p: '<null>', f130_a: '<null>', f131_r: '<number>', f132_r: '<array>', f133_d: '<string>', f134_p: '<number>', f135_y: '<boolean>', f136_t: '<number>', f137_x: '<array>', f138_a: '<number>', f139_q: '<boolean>', f140_v: '<number>', f141_x: '<boolean>', f142_u: '<object>', f143_v: '<boolean>', f144_n: '<number>', f145_f: '<array>', f146_m: '<array>', f147_q: '<array>', f148_y: '<number>', f149_t: '<boolean>', f150_x: '<number>', f151_n: '<object>', f152_h: '<object>', f153_n: '<boolean>', f154_f: '<string>', f155_o: '<string>', f156_r: '<boolean>', f157_l: '<boolean>', f158_w: '<null>', f159_i: '<number>', f160_e: '<boolean>', f161_t: '<number>', f162_b: '<object>', f163_j: '<boolean>', f164_r: '<array>', f165_u: '<string>', f166_a: '<string>', f167_s: '<null>', f168_q: '<string>', f169_g: '<number>', f170_g: '<null>', f171_p: '<null>', f172_v: '<array>', f173_g: '<number>', f174_o: '<boolean>', f175_q: '<null>', f176_y: '<boolean>', f177_b: '<object>', f178_s: '<null>', f179_l: '<number>', f180_v: '<boolean>', f181_g: '<string>', f182_w: '<boolean>', f183_v: '<object>', f184_c: '<number>', f185_g: '<string>', f186_w: '<string>', f187_h: '<array>', f188_t: '<string>', f189_s: '<string>', f190_n: '<null>', f191_x: '<number>', f192_w: '<boolean>', f193_d: '<object>', f194_b: '<array>', f195_n: '<object>', f196_d: '<string>', f197_k: '<null>', f198_f: '<string>', f199_h: '<array>', f200_b: '<boolean>', f201_i: '<boolean>', f202_o: '<number>', f203_e: '<boolean>', f204_x: '<number>', f205_n: '<null>', f206_e: '<number>', f207_y: '<null>', f208_u: '<object>', f209_h: '<null>', f210_j: '<boolean>', f211_b: '<string>', f212_y: '<null>', f213_h: '<null>', f214_z: '<boolean>', f215_g: '<boolean>', f216_r: '<array>', f217_k: '<object>', f218_x: '<string>', f219_i: '<null>', f220_w: '<boolean>', f221_x: '<boolean>', f222_b: '<boolean>', f223_i: '<boolean>', f224_a: '<null>', f225_g: '<boolean>', f226_a: '<string>', f227_g: '<null>', f228_i: '<object>', f229_y: '<string>', f230_l: '<boolean>', f231_t: '<boolean>', f232_h: '<boolean>', f233_e: '<null>', f234_y: '<number>', f235_s: '<string>', f236_w: '<number>', f237_c: '<string>', f238_g: '<null>', f239_b: '<object>', f240_n: '<number>', f241_c: '<boolean>', f242_a: '<array>', f243_e: '<number>', f244_q: '<null>', f245_p: '<boolean>', f246_i: '<array>', f247_q: '<string>', f248_d: '<array>', f249_y: '<object>', f250_s: '<object>', f251_y: '<object>', f252_t: '<string>', f253_c: '<array>', f254_c: '<array>', f255_q: '<boolean>', f256_i: '<null>', f257_z: '<boolean>', f258_x: '<number>', f259_o: '<null>', f260_i: '<number>', f261_g: '<object>', f262_c: '<number>', f263_j: '<array>', f264_t: '<array>', f265_h: '<string>', f266_b: '<string>', f267_v: '<object>', f268_i: '<object>', f269_d: '<object>', f270_s: '<boolean>', f271_o: '<string>', f272_d: '<boolean>', f273_a: '<array>', f274_v: '<null>', f275_u: '<array>', f276_h: '<number>', f277_s: '<boolean>', f278_p: '<boolean>', f279_y: '<string>', f280_z: '<number>', f281_r: '<null>', f282_r: '<object>', f283_g: '<null>', f284_g: '<null>', f285_x: '<object>', f286_h: '<boolean>', f287_o: '<object>', f288_s: '<string>', f289_d: '<object>', f290_h: '<array>', f291_p: '<object>', f292_d: '<boolean>', f293_n: '<null>', f294_v: '<number>', f295_e: '<number>', f296_a: '<null>', f297_r: '<array>', f298_f: '<array>', f299_p: '<number>', f300_e: '<array>', f301_o: '<array>', f302_t: '<object>', f303_u: '<object>', f304_y: '<string>', f305_p: '<boolean>', f306_q: '<number>', f307_v: '<array>', f308_i: '<boolean>'}, 'KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso', false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso', true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso');
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var count_2 = objectStore_0.count();
    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.only('KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso');
        getAll_0 = objectStore_0.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('KzQcSFoQJkzjZxfywGDqyqeszMFtNBGVSTWSOBOdqKroKzplwAzuWrGQWVUnyPRngZhfcrABNNGCWxvmMKZUkYiso');
        getAll_0 = objectStore_0.getAll(KeyRange_7);
    }

    var put_0 = objectStore_0.put({f0_n: '<boolean>', f1_q: '<number>', f2_e: '<array>', f3_o: '<object>', f4_b: '<string>', f5_n: '<number>', f6_d: '<number>', f7_r: '<boolean>'}, 'yjDOWqZucApnLUnsEMowGBtlQtWIscibTHnQDGDBciTBAPtsgajLjgYKemLwCgIGfFLeQDTNgEXDrPAkEkjTIowxXYCyPBTxvIEcZPeNLwNXBSKDzQKyhCBRcHZRwjkfVibGSHtjuROxGdHiynLLEkUXmpWuVFDDhszlSTuhdLOsqJziiOBKDBCYOUkNHDqFLGLXTeCoVPAHqSMOKoGouiBOsiTaGUIbzjDXPYYwjmpWGiiwmpqZHlqtqlfYIhDRmDTTqmZMDDVGAgmYCCnvCpiqdLsoRxMIhawIThkOSrTrzBfgkUeHUhQzTxWpAvbYxbuWcOVqZggBKeaReTUsOSeTrZipjdmqZLcqrWoeSvoqsemIHwBalresjLVOyRNaIkZIWJbbFYPdwdLZnXZjHZxkaeLmQUYCEpEwAoRuqyhUrnaxKHtZzEaZiPuLCuSvwLyGjuLOzFicsLkGocIXGOufrjffAlDuvziSYbhYrbgglRPbvfzmyKTPnvAkDUbpOyFXAhiPSMkZvCqksueoNLMpSrfSTLKkhXxCLZkpznVwdBDNPlOQxywuWLGwKwWiUjHuhLFDlRngSuqxMyOWKTBCDISLXIcbwxMoKDbJGxcMLqrEhFlBLzmxeAtfZPxlgkviBAaoBiPcuwLZKuxWtCefFXeCSUbOrhbAeVhqISqrRsvLfLNBiwBdPbZWNpbvskkVfcrjZQnpNFfSzHiCbCQlpkaGiauQsQvKhBMnyagllOtdBASjlSrfplakBoVQRPZrWBpQDJlYdXZetpKdORYxG');
    var count_3 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_2415', {autoIncrement: true});
    var count_4 = objectStore_0.count();
    var getAllKeys_0 = objectStore_0.getAllKeys();
    db.deleteObjectStore('objectStore_1827')
    var objectStore_2 = db.createObjectStore('objectStore_2416', {keypath: 'uvlWjtAeZbZIxHvzAZIcszVVShpxiKLQFQtpccFPTmTfakYdqGyaxSivKrLRrKvtrvBzjGsfgvVdORdtecNJKcFDjdbRGaZnKFlKEQaHBGerrastbrykjILeAZeCtTMUlosTJRBpBAPNHsLlbAYmDmBQbsiqZRhipJXFgPXCFAezUBhoiTgPifAHwsKrRNUPNPGpDIpagqlBpBQOVhbDBtXSdnhcNNwseoSKXvpdpEldtKAoQU'});
    var getAll_1 = objectStore_0.getAll();
    var clear_0 = objectStore_1.clear();
    var clear_1 = objectStore_1.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3615 = db.transaction(['objectStore_38', 'objectStore_2416'], 'readonly', {durability:"strict"})
    var objectStore_2416 = txn_3615.objectStore('objectStore_2416');
    txn_3615.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3615.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3615.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3616 = db.transaction(['objectStore_39'], 'readonly', {durability:"default"})
    var objectStore_39 = txn_3616.objectStore('objectStore_39');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', 'USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', false, true);
        get_1 = objectStore_39.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_39.getAllKeys();
    var count_5 = objectStore_39.count();
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', 'USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', true, true);
        get_2 = objectStore_39.get(KeyRange_10);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', 'USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', false, false);
        get_3 = objectStore_39.get(KeyRange_12);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.only('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg');
        get_4 = objectStore_39.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg', false);
        get_5 = objectStore_39.get(KeyRange_16);
    }
    catch (e){
    }

    txn_3616.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3616.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3616.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3617 = db.transaction(['objectStore_38'], 'readonly', {durability:"default"})
    var objectStore_38 = txn_3617.objectStore('objectStore_38');
    var count_6 = objectStore_38.count();
    var count_7;
    try{
        KeyRange_18 = IDBKeyRange.bound('UtDuRFKeUgizvEFIKWsvlpnpEYvSlynweFiDmtUcHpmYBxdCAlvCJBKvXoRiltBfBFhmkXomLLdhlXKuAVoLbZKPTtvHiigviZuQuyRYQzOiyUuXZbIxJObQGXGRtFEKPwTJRfuvbuzcQPkQUzAGYhfMGQXrpzzbzJMxlgOKKPvHgkfBaucWHgKYNdrCBuDpClFkLTfDtpOLnMOQZUVmLGpPHHXyyiWYEInGAjoUnYmWhynBjmYpnLWrNXCfClzuJmVvrlQLCaHtQxxyEVhQKKeyusuyadEQGBtwaylbJtJZzi', 'UtDuRFKeUgizvEFIKWsvlpnpEYvSlynweFiDmtUcHpmYBxdCAlvCJBKvXoRiltBfBFhmkXomLLdhlXKuAVoLbZKPTtvHiigviZuQuyRYQzOiyUuXZbIxJObQGXGRtFEKPwTJRfuvbuzcQPkQUzAGYhfMGQXrpzzbzJMxlgOKKPvHgkfBaucWHgKYNdrCBuDpClFkLTfDtpOLnMOQZUVmLGpPHHXyyiWYEInGAjoUnYmWhynBjmYpnLWrNXCfClzuJmVvrlQLCaHtQxxyEVhQKKeyusuyadEQGBtwaylbJtJZzi', false, true);
        count_7 = objectStore_38.count(KeyRange_18);
    }
    catch (e){
    }

    var count_8 = objectStore_38.count();
    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('llEQYWmKzLnmgaZstmuNvDnEhjcsJtYzvRGBibIrwphwafbfzKjBxPzsAXBjiziOhqQxKfweBlvthsCiPpOAMazdBdoYMswnXTgEXUYuoGsuFEFIdpejiYVSWldEOzBfbiQduzaZMTlqYYODqjOGGFbyypCigvghvMolCqnEdmKnQARPKwIanYGXfEVtJVrIIMZeLIXuXcVKonggxhSpDgajaftKYmpKWrjYXJDELpVAksDAjYyBkaFzzZHGbxjsOyjDJvFThyUclzgKqYLCIszEIonMikvNTvJZMCFgSQWzncZNDjRYeKlSyTzSDHXRTbyXtZaGkIXzwALdtmwQgTMsNrJQaZqIRZiqAJzDlZBMDyLDprdXQcTwoJNjvUhAZEYOVhcNBf', 'llEQYWmKzLnmgaZstmuNvDnEhjcsJtYzvRGBibIrwphwafbfzKjBxPzsAXBjiziOhqQxKfweBlvthsCiPpOAMazdBdoYMswnXTgEXUYuoGsuFEFIdpejiYVSWldEOzBfbiQduzaZMTlqYYODqjOGGFbyypCigvghvMolCqnEdmKnQARPKwIanYGXfEVtJVrIIMZeLIXuXcVKonggxhSpDgajaftKYmpKWrjYXJDELpVAksDAjYyBkaFzzZHGbxjsOyjDJvFThyUclzgKqYLCIszEIonMikvNTvJZMCFgSQWzncZNDjRYeKlSyTzSDHXRTbyXtZaGkIXzwALdtmwQgTMsNrJQaZqIRZiqAJzDlZBMDyLDprdXQcTwoJNjvUhAZEYOVhcNBf', false, true);
        get_6 = objectStore_38.get(KeyRange_20);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.only('UtDuRFKeUgizvEFIKWsvlpnpEYvSlynweFiDmtUcHpmYBxdCAlvCJBKvXoRiltBfBFhmkXomLLdhlXKuAVoLbZKPTtvHiigviZuQuyRYQzOiyUuXZbIxJObQGXGRtFEKPwTJRfuvbuzcQPkQUzAGYhfMGQXrpzzbzJMxlgOKKPvHgkfBaucWHgKYNdrCBuDpClFkLTfDtpOLnMOQZUVmLGpPHHXyyiWYEInGAjoUnYmWhynBjmYpnLWrNXCfClzuJmVvrlQLCaHtQxxyEVhQKKeyusuyadEQGBtwaylbJtJZzi');
        get_7 = objectStore_38.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('llEQYWmKzLnmgaZstmuNvDnEhjcsJtYzvRGBibIrwphwafbfzKjBxPzsAXBjiziOhqQxKfweBlvthsCiPpOAMazdBdoYMswnXTgEXUYuoGsuFEFIdpejiYVSWldEOzBfbiQduzaZMTlqYYODqjOGGFbyypCigvghvMolCqnEdmKnQARPKwIanYGXfEVtJVrIIMZeLIXuXcVKonggxhSpDgajaftKYmpKWrjYXJDELpVAksDAjYyBkaFzzZHGbxjsOyjDJvFThyUclzgKqYLCIszEIonMikvNTvJZMCFgSQWzncZNDjRYeKlSyTzSDHXRTbyXtZaGkIXzwALdtmwQgTMsNrJQaZqIRZiqAJzDlZBMDyLDprdXQcTwoJNjvUhAZEYOVhcNBf', 'UtDuRFKeUgizvEFIKWsvlpnpEYvSlynweFiDmtUcHpmYBxdCAlvCJBKvXoRiltBfBFhmkXomLLdhlXKuAVoLbZKPTtvHiigviZuQuyRYQzOiyUuXZbIxJObQGXGRtFEKPwTJRfuvbuzcQPkQUzAGYhfMGQXrpzzbzJMxlgOKKPvHgkfBaucWHgKYNdrCBuDpClFkLTfDtpOLnMOQZUVmLGpPHHXyyiWYEInGAjoUnYmWhynBjmYpnLWrNXCfClzuJmVvrlQLCaHtQxxyEVhQKKeyusuyadEQGBtwaylbJtJZzi', true, true);
        getAll_2 = objectStore_38.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('UtDuRFKeUgizvEFIKWsvlpnpEYvSlynweFiDmtUcHpmYBxdCAlvCJBKvXoRiltBfBFhmkXomLLdhlXKuAVoLbZKPTtvHiigviZuQuyRYQzOiyUuXZbIxJObQGXGRtFEKPwTJRfuvbuzcQPkQUzAGYhfMGQXrpzzbzJMxlgOKKPvHgkfBaucWHgKYNdrCBuDpClFkLTfDtpOLnMOQZUVmLGpPHHXyyiWYEInGAjoUnYmWhynBjmYpnLWrNXCfClzuJmVvrlQLCaHtQxxyEVhQKKeyusuyadEQGBtwaylbJtJZzi');
        getAll_2 = objectStore_38.getAll(KeyRange_25);
    }

    var count_9;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('llEQYWmKzLnmgaZstmuNvDnEhjcsJtYzvRGBibIrwphwafbfzKjBxPzsAXBjiziOhqQxKfweBlvthsCiPpOAMazdBdoYMswnXTgEXUYuoGsuFEFIdpejiYVSWldEOzBfbiQduzaZMTlqYYODqjOGGFbyypCigvghvMolCqnEdmKnQARPKwIanYGXfEVtJVrIIMZeLIXuXcVKonggxhSpDgajaftKYmpKWrjYXJDELpVAksDAjYyBkaFzzZHGbxjsOyjDJvFThyUclzgKqYLCIszEIonMikvNTvJZMCFgSQWzncZNDjRYeKlSyTzSDHXRTbyXtZaGkIXzwALdtmwQgTMsNrJQaZqIRZiqAJzDlZBMDyLDprdXQcTwoJNjvUhAZEYOVhcNBf', true);
        count_9 = objectStore_38.count(KeyRange_26);
    }
    catch (e){
    }

    var index_0 = objectStore_38.index('index_25');
    txn_3617.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3617.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3617.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3618 = db.transaction(['objectStore_2414', 'objectStore_39', 'objectStore_2415'], 'readwrite', {durability:"default"})
    var objectStore_39 = txn_3618.objectStore('objectStore_39');
    var put_1 = objectStore_39.put({f0_x: '<boolean>', f1_d: '<string>', f2_i: '<array>', f3_e: '<null>', f4_l: '<number>'}, 'oDuUSgpQDYjipkmwDXDEGZJkHQQixeETbqRavDeIVgDlNwppWMrIcmmiUcVFrAttdlUlhywLlfFotPhFubbcXKhEDSZvBccrOxDaICYruhXKZxNvxYyhaarkLmoZpDRPPSxpVeAzQOJNaVvQOJaShlZDdEWBTPisIKObYtHSgsEaZOZPEsRWGJFUNMSQfUcEyageDbmXziZZHVrKheEhLevZQiEwcUljNsvuEuypfvdegfFkCmweYATTDjllRZbJMltZNWKRuyoyGwVARaLOwodRalFlkwgoHFydwDZUlNopKYKErSREHnElstNkAQthbeUTComvLqWlbffpIFnFmtswXXGiQosiplIjVVwdVnIOHvAlDovInVlTkHkSGSYmDDndFARWLqcXdToGFilMOcJxhPTLbWTmQFBKleRcpkwUQAhUVfnZXsbpniVjyNkCLqfnsuVKDvrnlDjrCOtJaulXHwPmoImGBROGghTqbQrySlDuUpSTxFXEPOvYZsHMQmlJwaiIhSoqZRlasMYKkaRPMMPcxPrMVmTXlUnFQxViAFdEiKTclnQdEhSUDZdUngnGLePxIENHjNsSoBSbLOqFBcEggIuDeTkJEgfPDMNSfRmWElssBJbncXmSZrkptXCublfZQMKfhgZIgXPgdlpNdQIKZPckpPzUdissAJYKOdVXoyNuPTXlIewxvIxmRHPKGuyqznnkcHrdKHhwUhwTDkaXRRSSLMzTcCaKplhqnCOxBCZAqnsdanQekNqtLYVsYsjKQyTerfrNjZXONuWDGQEjxWdNCfcweEaBNJjgIlVnnFGuaAFTVEsnfeToyZITKGDGeNIqFcJYRWeTvYqtTcoacNkjXYkknusQgDdFSKYOzRXhLfgChoUdIhuDwqVqkaorhWCzdjVENDKHtVlufTQgwwWixgt');
    var add_1 = objectStore_39.add({f0_d: '<array>', f1_d: '<null>', f2_o: '<boolean>', f3_n: '<string>', f4_f: '<boolean>', f5_w: '<boolean>', f6_h: '<number>', f7_h: '<number>', f8_c: '<string>'}, 'DpLcTmfHCmFgoxmGRYOlSfZbXzcTuSoUBzmPnwpQdFXirKfwspZAtCgqZGTRBtXQkADpoIeMsgAaQApuRhGhaMABvHKoWhLtBJpBkBEeNJmqKsuhcvdTnJAcRnCjbmfaDpbgxgxmfEbtujTtIwQVvSGAeYjLZjOaKuOsN');
    var clear_2 = objectStore_39.clear();
    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.only('USSOZSeQwWHYBxehcbjWftQnaOrzOygcNTZycTCgMBxSLacHHOQEgWXASHtgtwYkvHOclApmHFMmqzkGFwLXkQrCdtvZetzLxrIeeFSHDcCNWNOdqgDrmFSVDEunYZNZzZNwGMoLYTnsDebqwfKFldEisdpjgORlTmtaqaZKwqrAytOleoSIpUXykgdBhHIEywFolwcXoVzpajeBUcGyWsurrLssnkSJKKMVfArDfUvdobxygflvSuAVMSFKtbxLNLVFEWtYfZLxRPIEHOuESEgaerNVBrxMwnNMZEuHfBAqKHuttnuJDFfrwycMfLndatCyoZlZYPwSacEvXCBcishoiNeHpNNxjzeMtOrEzIYOroePGwULOVbSGOKZdztJfIlxfxwlFobBNbSCsaaCTkIwnylkcNVQPLulmxJbmUGQvZgZQXEaEglMHQmydFKsKZpaWdJwvAzIPDZVolMDGTtsnxbHBkFrAPoDAQBnukYHUzUbLuVtaQpoYApAGhnZtjXiAzVZSUlgpmPATzmkWEMlZWRHWtyTSkHizfDYPKcQjRUplFzkUjOKkwWCZYLDFYDvbnmCgKVmGefHiagFCUjifwNtXXjaqXHJOiGCOckUBYHKoBLdkFqbyWItubvTQYJDAeAHtGSFaxyTLgJGJjVAfyDaudxRqnVqxiTXyDUAmaFSUIMPbOHuODlThMbcPDVSozVbfhJIzHxtzaZUCWWUQMgRYckSGPVHDgWbwZeqLcudYcXSJhjbgOtndWDKfZUCfHqGDgQynnDWxVjLydbOffnZXVGVujZlRlRcUWTWGoxGyntWgeCtptvyZJgCXzVlbpAkncFJPZnqYThLjvVIFQEMAmMpauLxdpEQMdHpZgltcgWmwRfTHSfAvFLgg');
        get_8 = objectStore_39.get(KeyRange_28);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_39.getAllKeys(2627544587);
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.only('oDuUSgpQDYjipkmwDXDEGZJkHQQixeETbqRavDeIVgDlNwppWMrIcmmiUcVFrAttdlUlhywLlfFotPhFubbcXKhEDSZvBccrOxDaICYruhXKZxNvxYyhaarkLmoZpDRPPSxpVeAzQOJNaVvQOJaShlZDdEWBTPisIKObYtHSgsEaZOZPEsRWGJFUNMSQfUcEyageDbmXziZZHVrKheEhLevZQiEwcUljNsvuEuypfvdegfFkCmweYATTDjllRZbJMltZNWKRuyoyGwVARaLOwodRalFlkwgoHFydwDZUlNopKYKErSREHnElstNkAQthbeUTComvLqWlbffpIFnFmtswXXGiQosiplIjVVwdVnIOHvAlDovInVlTkHkSGSYmDDndFARWLqcXdToGFilMOcJxhPTLbWTmQFBKleRcpkwUQAhUVfnZXsbpniVjyNkCLqfnsuVKDvrnlDjrCOtJaulXHwPmoImGBROGghTqbQrySlDuUpSTxFXEPOvYZsHMQmlJwaiIhSoqZRlasMYKkaRPMMPcxPrMVmTXlUnFQxViAFdEiKTclnQdEhSUDZdUngnGLePxIENHjNsSoBSbLOqFBcEggIuDeTkJEgfPDMNSfRmWElssBJbncXmSZrkptXCublfZQMKfhgZIgXPgdlpNdQIKZPckpPzUdissAJYKOdVXoyNuPTXlIewxvIxmRHPKGuyqznnkcHrdKHhwUhwTDkaXRRSSLMzTcCaKplhqnCOxBCZAqnsdanQekNqtLYVsYsjKQyTerfrNjZXONuWDGQEjxWdNCfcweEaBNJjgIlVnnFGuaAFTVEsnfeToyZITKGDGeNIqFcJYRWeTvYqtTcoacNkjXYkknusQgDdFSKYOzRXhLfgChoUdIhuDwqVqkaorhWCzdjVENDKHtVlufTQgwwWixgt');
        get_9 = objectStore_39.get(KeyRange_30);
    }
    catch (e){
    }

    var add_2 = objectStore_39.add({f0_m: '<null>', f1_y: '<string>'}, 'LQtETdUaUlWZnrbyNQJJKsFvvFqSOttdcpAtRyZXXeftprqiGzzMBUfcBXeSQupfuqncPDRHVLFMNPKICKxtTsywJyDcMtIlLLHceJqskGZEkEAjCcGpyNeopwFntedLmeAgByMnxnhINPixHahAmOLGgXCOgPhdqopdnrUfoAbwOuSWtzPMrmiyMffasFjEGtyGPcoejRZkqFPRKBnoWYLLNZapJoyIEpKbkpmuTRzUvBoKzgbsOtapXpaQBBGNKzjmMAJLQFHQQtMrDkWoEpPvvxICinFUPSMrqsiZwsWCeLnnhhAifhEJfjQYMNPPZsswHBrSuhMGAdtjvZZIglEZZLGBULSQurMDFPCitekwQrcZhfvliwfmOAjfllKzPGoHCoulDEODHIaCPCphjhrWEJxXyCIkWHksWPJlYPYuNibvxGvXIdtzx');
    var add_3 = objectStore_39.add({f0_z: '<boolean>', f1_m: '<object>', f2_l: '<number>', f3_j: '<null>', f4_u: '<null>'}, 'xOFaupeGFiOjtNJfCjjbzBqqYgBSNVBShQlYhUgufpJzpFMbCiLIVIIKTZmlYhcWVteJUMAjCHHQWReApbS');
    var clear_3 = objectStore_39.clear();
    txn_3618.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3618.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3618.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3619 = db.transaction(['objectStore_2416'], 'readwrite', {durability:"default"})
    var objectStore_2416 = txn_3619.objectStore('objectStore_2416');
    var add_4 = objectStore_2416.add({f0_m: '<object>', f1_v: '<array>'}, 'FwkUobUcGKSuJjgETIUKvMDaRHOFVjLeEDVguiKhVXsfdQeNiKrakbFhpifNWWDJTcHuPpSrlYAllsVohgGuaScyfOCLcIgRocwaeuiTSkOpRpWBwYfuaQzxzSLqtlGHRpjAundcrFymdMMXxxRzzpLVxxxPWUwyaSlZHyTzkCoFYYQuclECRzrJuvfJrZAySUtoeqLgDbgBDDJimOFiVseXQKCPOixYoskeBJhPvMRYinVBdfyJFHSEVCdaVxPkMmRXrrNoajyhyWsnEjrLeSBEyUjvqNjbrzriMLmxRjULcGDOONgaAwIJSibpGbhqXpYJlqnIrIUvnsCMzlLStueczCtPMZkPBiBOHXSfofWICYWtuSpKAmwwLLfPYBYFLzIIjdKOdmQYzgPskyZFwvDeIucPHhcxHvymmIduYBFllaotvdXZrPYsLnfOAmNqgRyzoprnQAtrRYoXhBjHdQGFGkHRhYVTZDCdCTOZXNhPNBTvjnCEZsXnAhwBpSXgyNdqSVEmHhyoohEDTaJBYwBuKZNxEhVvtytqmPqluqWDPSkzDYkofSuIBkxtkkbNOzUBlNQPHWxGaAdFEnMhyFnXoTYekTvoBFgIhePSideIaVgOZUGZuGFFeFKMYswFUmBsfvCUxFacbgkKPQGuxahkGyHHVtmaCzcEfSnouUaMTUzhycqIgKYvxqQPwHFsODszRceVnWdjThXDARbdbolVHrIDAzYYptHopWrMPZMXOOcGCfAJoRbDAQROKIqcID');
    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.only('FwkUobUcGKSuJjgETIUKvMDaRHOFVjLeEDVguiKhVXsfdQeNiKrakbFhpifNWWDJTcHuPpSrlYAllsVohgGuaScyfOCLcIgRocwaeuiTSkOpRpWBwYfuaQzxzSLqtlGHRpjAundcrFymdMMXxxRzzpLVxxxPWUwyaSlZHyTzkCoFYYQuclECRzrJuvfJrZAySUtoeqLgDbgBDDJimOFiVseXQKCPOixYoskeBJhPvMRYinVBdfyJFHSEVCdaVxPkMmRXrrNoajyhyWsnEjrLeSBEyUjvqNjbrzriMLmxRjULcGDOONgaAwIJSibpGbhqXpYJlqnIrIUvnsCMzlLStueczCtPMZkPBiBOHXSfofWICYWtuSpKAmwwLLfPYBYFLzIIjdKOdmQYzgPskyZFwvDeIucPHhcxHvymmIduYBFllaotvdXZrPYsLnfOAmNqgRyzoprnQAtrRYoXhBjHdQGFGkHRhYVTZDCdCTOZXNhPNBTvjnCEZsXnAhwBpSXgyNdqSVEmHhyoohEDTaJBYwBuKZNxEhVvtytqmPqluqWDPSkzDYkofSuIBkxtkkbNOzUBlNQPHWxGaAdFEnMhyFnXoTYekTvoBFgIhePSideIaVgOZUGZuGFFeFKMYswFUmBsfvCUxFacbgkKPQGuxahkGyHHVtmaCzcEfSnouUaMTUzhycqIgKYvxqQPwHFsODszRceVnWdjThXDARbdbolVHrIDAzYYptHopWrMPZMXOOcGCfAJoRbDAQROKIqcID');
        get_10 = objectStore_2416.get(KeyRange_32);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_34 = IDBKeyRange.bound('FwkUobUcGKSuJjgETIUKvMDaRHOFVjLeEDVguiKhVXsfdQeNiKrakbFhpifNWWDJTcHuPpSrlYAllsVohgGuaScyfOCLcIgRocwaeuiTSkOpRpWBwYfuaQzxzSLqtlGHRpjAundcrFymdMMXxxRzzpLVxxxPWUwyaSlZHyTzkCoFYYQuclECRzrJuvfJrZAySUtoeqLgDbgBDDJimOFiVseXQKCPOixYoskeBJhPvMRYinVBdfyJFHSEVCdaVxPkMmRXrrNoajyhyWsnEjrLeSBEyUjvqNjbrzriMLmxRjULcGDOONgaAwIJSibpGbhqXpYJlqnIrIUvnsCMzlLStueczCtPMZkPBiBOHXSfofWICYWtuSpKAmwwLLfPYBYFLzIIjdKOdmQYzgPskyZFwvDeIucPHhcxHvymmIduYBFllaotvdXZrPYsLnfOAmNqgRyzoprnQAtrRYoXhBjHdQGFGkHRhYVTZDCdCTOZXNhPNBTvjnCEZsXnAhwBpSXgyNdqSVEmHhyoohEDTaJBYwBuKZNxEhVvtytqmPqluqWDPSkzDYkofSuIBkxtkkbNOzUBlNQPHWxGaAdFEnMhyFnXoTYekTvoBFgIhePSideIaVgOZUGZuGFFeFKMYswFUmBsfvCUxFacbgkKPQGuxahkGyHHVtmaCzcEfSnouUaMTUzhycqIgKYvxqQPwHFsODszRceVnWdjThXDARbdbolVHrIDAzYYptHopWrMPZMXOOcGCfAJoRbDAQROKIqcID', 'FwkUobUcGKSuJjgETIUKvMDaRHOFVjLeEDVguiKhVXsfdQeNiKrakbFhpifNWWDJTcHuPpSrlYAllsVohgGuaScyfOCLcIgRocwaeuiTSkOpRpWBwYfuaQzxzSLqtlGHRpjAundcrFymdMMXxxRzzpLVxxxPWUwyaSlZHyTzkCoFYYQuclECRzrJuvfJrZAySUtoeqLgDbgBDDJimOFiVseXQKCPOixYoskeBJhPvMRYinVBdfyJFHSEVCdaVxPkMmRXrrNoajyhyWsnEjrLeSBEyUjvqNjbrzriMLmxRjULcGDOONgaAwIJSibpGbhqXpYJlqnIrIUvnsCMzlLStueczCtPMZkPBiBOHXSfofWICYWtuSpKAmwwLLfPYBYFLzIIjdKOdmQYzgPskyZFwvDeIucPHhcxHvymmIduYBFllaotvdXZrPYsLnfOAmNqgRyzoprnQAtrRYoXhBjHdQGFGkHRhYVTZDCdCTOZXNhPNBTvjnCEZsXnAhwBpSXgyNdqSVEmHhyoohEDTaJBYwBuKZNxEhVvtytqmPqluqWDPSkzDYkofSuIBkxtkkbNOzUBlNQPHWxGaAdFEnMhyFnXoTYekTvoBFgIhePSideIaVgOZUGZuGFFeFKMYswFUmBsfvCUxFacbgkKPQGuxahkGyHHVtmaCzcEfSnouUaMTUzhycqIgKYvxqQPwHFsODszRceVnWdjThXDARbdbolVHrIDAzYYptHopWrMPZMXOOcGCfAJoRbDAQROKIqcID', false, true);
        count_10 = objectStore_2416.count(KeyRange_34);
    }
    catch (e){
    }

    var count_11 = objectStore_2416.count();
    var put_2 = objectStore_2416.put({f0_f: '<array>', f1_p: '<null>', f2_a: '<string>'}, 'rWLCXCBsnnCkXngROYAUbvDpnqqfLIVBIgdjPdjaqNDl');
    var count_12 = objectStore_2416.count();
    var add_5 = objectStore_2416.add({f0_p: '<string>', f1_t: '<string>', f2_h: '<array>', f3_c: '<array>', f4_y: '<null>', f5_h: '<string>', f6_i: '<string>', f7_x: '<array>'}, 'QNEtDViJRhRfgJxEtSubktBaqIQbezhMtRzhHRGNUFVMxijmLAJpeKZdTbDuVBncUJmYuaLqBWNMAzqzOeJIBJItULWleaOlQqorQAwYbsFiDzyWtYRJWcvRFrDwDndwjrHKUFeURkySZTvMfMqylsPsnefApmDcglUeXyvAnCqqayPMgQRmeZydSRcAtAqvOLoGKFMVGuPxWhGTVGTrNYlgKNExyXBxIPwIfznJlPcAfpakNuQwUJGnAaAHbtfoCYGeMJVnDJppeduqTXYZNToyWwCuUUcwfWSSOAoWavyEJDvBOIOaMSkTmtaRZRUKYVcjDhtveKBnBEKqAgIVPGJqVJIRBZdEqZYjSHyvVbEeFcZADQDZdAJgamUqvJEDJWP');
    var get_11;
    try{
        KeyRange_36 = IDBKeyRange.only('FwkUobUcGKSuJjgETIUKvMDaRHOFVjLeEDVguiKhVXsfdQeNiKrakbFhpifNWWDJTcHuPpSrlYAllsVohgGuaScyfOCLcIgRocwaeuiTSkOpRpWBwYfuaQzxzSLqtlGHRpjAundcrFymdMMXxxRzzpLVxxxPWUwyaSlZHyTzkCoFYYQuclECRzrJuvfJrZAySUtoeqLgDbgBDDJimOFiVseXQKCPOixYoskeBJhPvMRYinVBdfyJFHSEVCdaVxPkMmRXrrNoajyhyWsnEjrLeSBEyUjvqNjbrzriMLmxRjULcGDOONgaAwIJSibpGbhqXpYJlqnIrIUvnsCMzlLStueczCtPMZkPBiBOHXSfofWICYWtuSpKAmwwLLfPYBYFLzIIjdKOdmQYzgPskyZFwvDeIucPHhcxHvymmIduYBFllaotvdXZrPYsLnfOAmNqgRyzoprnQAtrRYoXhBjHdQGFGkHRhYVTZDCdCTOZXNhPNBTvjnCEZsXnAhwBpSXgyNdqSVEmHhyoohEDTaJBYwBuKZNxEhVvtytqmPqluqWDPSkzDYkofSuIBkxtkkbNOzUBlNQPHWxGaAdFEnMhyFnXoTYekTvoBFgIhePSideIaVgOZUGZuGFFeFKMYswFUmBsfvCUxFacbgkKPQGuxahkGyHHVtmaCzcEfSnouUaMTUzhycqIgKYvxqQPwHFsODszRceVnWdjThXDARbdbolVHrIDAzYYptHopWrMPZMXOOcGCfAJoRbDAQROKIqcID');
        get_11 = objectStore_2416.get(KeyRange_36);
    }
    catch (e){
    }

    txn_3619.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3619.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3619.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9797')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};