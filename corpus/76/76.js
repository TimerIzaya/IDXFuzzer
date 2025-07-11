let db;
const openRequest = window.indexedDB.open('str_1434', 1013816302700701)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_437', {keypath: 'HABzALtpQMdoLbinLNwqShI.xVYwVjIZP', autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_438', {keypath: 'JRqTvlyGFemWcxLuSDQfDZJBckirQBmEyJiYhbWgqKdTsrKBCCgnIRBzmSQJFsdxzeKofWulBaUziZzYtcYxnCksiwqbOwNYqPdhzDpSnoiWYBzvAxEVOfMipDJiKhbUhxWbbRMAzJIoOfHkcJXdBabHOaVaGXxYdcdXlOuprXxTRSjiSSmhKNidERHKVngnYDsysRkMkjlVRIgItxoNFZbmVPnOieTUbfUHvRTEZiqSerxaSDuJXwcuzIwYNwMAgMUgqXjyvUPzUjeZXKjQaoioCgxLMOPWGxVmACtpqUWYcJLKsrZQdAhaPbmitMNIStjKkfkudZpaPRvCFtJulgPAKmeFkJmupdfKlXrzpSjVLtZhujCLuzBsUmYkLzzkZEldJsCaBUULSqZojDqSTIVfceSlgimJalBTHwdoZteQYKQokxdHGBsmGiDedacHZbkOWnZcvAdCicrvqWnqXVWbZlqbYnVOrTJlfvnAzLXpIXlqMuIIuToXIXUNRmpUpbGYriyWstGoMMqKAnHZevnCPsWiPneUzGZHUzMGXLbLYJOocXRQjEViqHMoqMHXQZuyFgReMzuodMZLXeRiOBCxbstIolwKgluHZldFOKGJYGjJMxNWjihkVylggTfNFpaHFoGuZTkfUgLsRtvLKHTceNdIohnvdgLzWWRByYDNKlGUcTqmCaNPYPHNBNNDCEgbnoFGNGQOZRRqAPfElwYYSzxyCcRDHzQkCTYLLmoiPaYiSoFnxRqtJArVkESeCMdkGIOxrAbvSgBSjlPaSYWmnKAItHedlSnjLOiUoQMSxHJkzwKYGEccTHJdYxJHerPipdsnNoiVBsJeAEbbjiZhvAYLBSUUqMSnKaUKVISOBvDYxypQBnbOOCnhrbHmHQunEgNYJVtJRqdqgGR', autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_439');
    var objectStore_3 = db.createObjectStore('objectStore_440', {keypath: 'eQukIyzHZostIgsQVPGFuaJyOHrkTCyjljUyBxxLtKuiNWlhFj', autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_441', {autoIncrement: false});
    var put_0 = objectStore_2.put({f0_t: '<null>', f1_b: '<array>', f2_g: '<number>', f3_x: '<array>', f4_z: '<boolean>', f5_e: '<object>', f6_q: '<boolean>', f7_l: '<string>', f8_a: '<string>', f9_w: '<object>', f10_e: '<object>', f11_p: '<array>', f12_d: '<string>', f13_x: '<number>', f14_y: '<object>', f15_i: '<string>', f16_a: '<string>', f17_w: '<boolean>', f18_u: '<boolean>', f19_i: '<number>', f20_h: '<string>', f21_y: '<null>', f22_e: '<boolean>', f23_i: '<boolean>', f24_b: '<null>', f25_r: '<boolean>', f26_c: '<number>', f27_a: '<array>', f28_o: '<object>', f29_p: '<boolean>', f30_f: '<null>', f31_x: '<string>', f32_n: '<string>', f33_q: '<array>', f34_o: '<number>', f35_d: '<null>', f36_k: '<string>', f37_b: '<number>', f38_q: '<null>', f39_g: '<boolean>', f40_o: '<null>', f41_g: '<null>', f42_u: '<object>', f43_x: '<array>', f44_f: '<number>', f45_t: '<null>', f46_n: '<array>', f47_c: '<null>', f48_o: '<null>', f49_f: '<null>', f50_n: '<object>', f51_f: '<number>', f52_a: '<object>', f53_l: '<array>', f54_q: '<number>', f55_m: '<string>', f56_c: '<boolean>', f57_h: '<boolean>', f58_v: '<number>', f59_m: '<boolean>', f60_u: '<boolean>', f61_v: '<array>', f62_x: '<object>', f63_n: '<number>', f64_a: '<boolean>', f65_t: '<boolean>', f66_s: '<boolean>', f67_x: '<string>', f68_p: '<object>', f69_f: '<null>', f70_k: '<null>', f71_q: '<array>', f72_u: '<object>', f73_n: '<number>', f74_b: '<null>', f75_n: '<number>', f76_x: '<object>', f77_d: '<object>', f78_v: '<boolean>', f79_n: '<null>', f80_o: '<array>', f81_a: '<string>', f82_f: '<null>', f83_z: '<object>', f84_s: '<array>', f85_i: '<string>', f86_n: '<object>', f87_g: '<number>', f88_f: '<array>', f89_b: '<string>', f90_d: '<string>', f91_k: '<null>', f92_s: '<boolean>', f93_l: '<null>', f94_b: '<null>', f95_r: '<string>', f96_w: '<null>', f97_d: '<boolean>', f98_i: '<boolean>', f99_i: '<null>', f100_h: '<array>', f101_x: '<boolean>', f102_k: '<number>', f103_e: '<null>', f104_h: '<string>', f105_f: '<null>', f106_k: '<boolean>', f107_g: '<array>', f108_i: '<number>', f109_w: '<string>', f110_y: '<string>', f111_u: '<number>', f112_k: '<object>', f113_h: '<array>', f114_n: '<object>', f115_o: '<null>', f116_e: '<string>', f117_p: '<string>', f118_e: '<boolean>', f119_f: '<number>', f120_q: '<boolean>', f121_j: '<boolean>', f122_r: '<string>', f123_l: '<null>', f124_k: '<number>', f125_j: '<boolean>', f126_g: '<null>', f127_q: '<object>', f128_u: '<object>', f129_i: '<null>', f130_g: '<boolean>', f131_k: '<array>', f132_f: '<null>', f133_l: '<null>', f134_c: '<array>', f135_m: '<boolean>', f136_z: '<boolean>', f137_x: '<string>', f138_d: '<boolean>', f139_n: '<number>', f140_x: '<object>', f141_h: '<number>', f142_t: '<number>', f143_z: '<null>', f144_j: '<boolean>', f145_w: '<null>', f146_w: '<object>', f147_i: '<object>', f148_z: '<string>', f149_m: '<array>', f150_q: '<null>', f151_w: '<array>', f152_y: '<number>', f153_y: '<boolean>', f154_o: '<object>', f155_i: '<number>', f156_z: '<object>', f157_d: '<boolean>', f158_i: '<boolean>', f159_u: '<string>', f160_j: '<boolean>', f161_f: '<object>', f162_j: '<object>', f163_o: '<boolean>', f164_i: '<null>', f165_a: '<null>', f166_c: '<null>', f167_j: '<boolean>', f168_n: '<number>', f169_r: '<number>', f170_j: '<boolean>', f171_h: '<null>', f172_z: '<string>', f173_o: '<null>', f174_i: '<number>', f175_t: '<array>', f176_i: '<boolean>', f177_u: '<boolean>', f178_w: '<number>', f179_a: '<string>', f180_x: '<boolean>', f181_b: '<null>', f182_j: '<array>', f183_z: '<object>', f184_p: '<object>', f185_z: '<string>', f186_w: '<object>', f187_d: '<array>', f188_n: '<boolean>', f189_j: '<array>', f190_t: '<null>', f191_f: '<number>', f192_s: '<null>', f193_m: '<array>', f194_e: '<null>', f195_v: '<string>', f196_q: '<array>', f197_h: '<number>', f198_n: '<boolean>', f199_f: '<array>', f200_l: '<boolean>', f201_q: '<null>', f202_b: '<null>', f203_w: '<number>', f204_u: '<string>', f205_o: '<array>', f206_f: '<array>', f207_s: '<object>', f208_k: '<array>', f209_t: '<boolean>', f210_p: '<number>', f211_s: '<null>', f212_y: '<number>', f213_s: '<array>', f214_i: '<array>', f215_e: '<string>', f216_l: '<string>', f217_r: '<boolean>', f218_n: '<array>', f219_w: '<boolean>', f220_s: '<number>', f221_c: '<object>', f222_u: '<string>', f223_n: '<array>', f224_h: '<string>', f225_h: '<array>', f226_y: '<number>', f227_b: '<number>', f228_v: '<null>', f229_o: '<object>', f230_h: '<null>', f231_f: '<null>', f232_b: '<null>', f233_m: '<boolean>', f234_z: '<number>', f235_r: '<boolean>', f236_v: '<string>', f237_m: '<array>', f238_y: '<null>', f239_o: '<boolean>', f240_i: '<array>', f241_z: '<string>', f242_s: '<boolean>', f243_t: '<null>', f244_u: '<array>', f245_r: '<array>', f246_r: '<number>', f247_b: '<string>', f248_c: '<string>', f249_l: '<object>', f250_l: '<null>', f251_d: '<boolean>', f252_g: '<array>', f253_d: '<array>', f254_k: '<array>', f255_b: '<number>', f256_j: '<object>', f257_q: '<number>', f258_f: '<object>', f259_m: '<boolean>', f260_t: '<object>', f261_m: '<string>', f262_n: '<array>', f263_t: '<object>', f264_z: '<null>', f265_s: '<number>', f266_e: '<object>', f267_m: '<array>', f268_t: '<null>', f269_q: '<object>', f270_e: '<array>', f271_m: '<boolean>', f272_j: '<array>', f273_c: '<number>', f274_o: '<null>', f275_y: '<number>', f276_t: '<null>', f277_g: '<null>', f278_n: '<array>', f279_g: '<string>', f280_m: '<string>', f281_b: '<array>', f282_n: '<number>', f283_v: '<array>', f284_j: '<object>', f285_r: '<object>', f286_a: '<array>', f287_i: '<array>', f288_s: '<object>', f289_w: '<null>', f290_j: '<null>', f291_q: '<array>', f292_l: '<string>', f293_c: '<array>', f294_n: '<boolean>', f295_t: '<null>', f296_j: '<boolean>', f297_y: '<string>', f298_g: '<boolean>', f299_r: '<boolean>', f300_w: '<string>', f301_c: '<null>', f302_x: '<object>', f303_v: '<object>', f304_x: '<string>', f305_t: '<null>', f306_e: '<array>', f307_w: '<array>', f308_m: '<null>', f309_g: '<string>', f310_q: '<null>', f311_r: '<array>', f312_k: '<string>', f313_t: '<number>', f314_j: '<null>', f315_i: '<string>', f316_o: '<null>', f317_v: '<null>', f318_m: '<string>', f319_a: '<null>', f320_q: '<number>', f321_x: '<array>', f322_b: '<boolean>', f323_l: '<object>', f324_k: '<object>', f325_x: '<array>', f326_h: '<boolean>', f327_h: '<boolean>', f328_o: '<number>', f329_z: '<boolean>', f330_v: '<null>', f331_h: '<number>', f332_o: '<number>', f333_o: '<string>', f334_q: '<string>', f335_t: '<string>', f336_l: '<null>', f337_x: '<number>', f338_i: '<string>', f339_k: '<object>', f340_g: '<number>', f341_i: '<array>', f342_x: '<null>', f343_q: '<array>', f344_v: '<string>', f345_p: '<string>', f346_m: '<null>', f347_m: '<number>', f348_c: '<null>', f349_x: '<string>', f350_m: '<string>', f351_w: '<boolean>', f352_t: '<number>', f353_s: '<object>', f354_b: '<object>', f355_r: '<object>', f356_k: '<array>', f357_p: '<array>', f358_w: '<array>', f359_g: '<boolean>', f360_k: '<number>', f361_b: '<array>', f362_x: '<string>', f363_u: '<boolean>', f364_g: '<boolean>', f365_x: '<object>', f366_v: '<number>', f367_z: '<boolean>', f368_x: '<array>', f369_i: '<string>', f370_j: '<string>', f371_l: '<number>', f372_s: '<number>', f373_i: '<array>', f374_o: '<string>', f375_v: '<number>', f376_g: '<object>', f377_d: '<boolean>', f378_r: '<boolean>', f379_e: '<boolean>', f380_h: '<array>', f381_a: '<string>', f382_c: '<boolean>', f383_t: '<string>', f384_m: '<array>', f385_e: '<boolean>', f386_m: '<array>', f387_l: '<null>', f388_i: '<array>', f389_v: '<string>', f390_h: '<object>', f391_f: '<boolean>', f392_z: '<string>', f393_p: '<object>', f394_z: '<string>', f395_b: '<boolean>', f396_m: '<number>', f397_a: '<string>', f398_z: '<array>', f399_i: '<number>', f400_c: '<object>', f401_h: '<boolean>', f402_k: '<null>', f403_b: '<string>', f404_m: '<number>', f405_l: '<boolean>', f406_v: '<number>', f407_v: '<object>', f408_z: '<boolean>', f409_l: '<boolean>', f410_t: '<array>', f411_q: '<boolean>', f412_k: '<array>', f413_d: '<number>', f414_g: '<null>', f415_d: '<boolean>', f416_m: '<string>', f417_l: '<string>', f418_m: '<boolean>', f419_x: '<null>', f420_u: '<string>', f421_k: '<null>', f422_y: '<array>', f423_l: '<array>', f424_o: '<array>', f425_f: '<number>', f426_s: '<object>', f427_a: '<boolean>', f428_o: '<null>', f429_d: '<boolean>', f430_q: '<boolean>', f431_e: '<object>', f432_p: '<object>', f433_w: '<number>', f434_c: '<number>', f435_j: '<string>', f436_l: '<boolean>', f437_a: '<string>', f438_t: '<string>', f439_y: '<number>', f440_u: '<string>', f441_d: '<object>', f442_k: '<object>', f443_g: '<boolean>', f444_j: '<boolean>', f445_s: '<boolean>', f446_v: '<null>', f447_z: '<number>', f448_z: '<boolean>', f449_a: '<object>', f450_b: '<boolean>', f451_f: '<boolean>', f452_m: '<array>', f453_g: '<string>', f454_n: '<null>', f455_p: '<string>', f456_j: '<string>', f457_i: '<null>', f458_m: '<object>', f459_x: '<object>', f460_p: '<string>', f461_g: '<boolean>', f462_k: '<number>', f463_o: '<boolean>', f464_v: '<number>', f465_b: '<array>', f466_c: '<boolean>', f467_w: '<null>', f468_a: '<array>', f469_t: '<array>', f470_f: '<null>', f471_s: '<string>', f472_k: '<null>', f473_j: '<string>', f474_c: '<string>', f475_w: '<number>', f476_m: '<string>', f477_h: '<number>', f478_j: '<boolean>', f479_k: '<null>', f480_l: '<object>', f481_w: '<array>', f482_u: '<number>'}, 'PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
    var add_0 = objectStore_0.add({f0_a: '<object>'}, 'zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu');
    var count_0 = objectStore_2.count();
    var clear_0 = objectStore_3.clear();
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.bound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', 'zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', false, false);
        count_1 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var index_279 = objectStore_1.createIndex('index_279', 'test', {multiEntry: false});
    var getAll_0 = objectStore_0.getAll();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', 'PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', true, true);
        get_1 = objectStore_2.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_4.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_660 = db.transaction(['objectStore_440'], 'readwrite', {durability:"strict"})
    var objectStore_440 = txn_660.objectStore('objectStore_440');
    var clear_2 = objectStore_440.clear();
    var put_1 = objectStore_440.put({f0_e: '<null>', f1_m: '<object>', f2_b: '<array>', f3_t: '<array>', f4_r: '<boolean>', f5_p: '<null>', f6_h: '<boolean>', f7_d: '<object>', f8_w: '<object>', f9_x: '<boolean>', f10_b: '<string>', f11_y: '<number>', f12_r: '<number>', f13_j: '<object>', f14_f: '<array>', f15_r: '<object>', f16_y: '<array>', f17_u: '<string>', f18_f: '<string>', f19_i: '<number>', f20_m: '<null>', f21_h: '<number>', f22_d: '<array>', f23_m: '<array>', f24_j: '<boolean>', f25_s: '<number>', f26_x: '<object>', f27_g: '<object>', f28_z: '<number>', f29_f: '<array>', f30_r: '<string>', f31_j: '<string>', f32_j: '<string>', f33_y: '<null>', f34_u: '<object>', f35_m: '<boolean>', f36_c: '<null>', f37_y: '<object>', f38_y: '<null>', f39_y: '<string>', f40_u: '<boolean>', f41_r: '<boolean>', f42_d: '<string>', f43_k: '<null>', f44_f: '<array>', f45_w: '<number>', f46_i: '<array>', f47_u: '<null>', f48_v: '<null>', f49_l: '<boolean>', f50_s: '<boolean>', f51_q: '<object>', f52_m: '<boolean>', f53_c: '<boolean>', f54_q: '<boolean>', f55_c: '<array>', f56_o: '<number>', f57_o: '<object>', f58_l: '<null>', f59_v: '<array>', f60_p: '<string>', f61_v: '<number>', f62_i: '<boolean>', f63_j: '<boolean>', f64_g: '<number>', f65_p: '<null>', f66_u: '<null>', f67_h: '<boolean>', f68_z: '<object>', f69_w: '<number>', f70_u: '<boolean>', f71_x: '<object>', f72_g: '<boolean>', f73_o: '<array>', f74_s: '<number>', f75_v: '<boolean>', f76_n: '<null>', f77_w: '<string>', f78_i: '<boolean>', f79_u: '<boolean>', f80_g: '<number>', f81_b: '<null>', f82_n: '<array>', f83_i: '<string>', f84_n: '<string>', f85_l: '<string>', f86_i: '<array>', f87_n: '<null>', f88_x: '<number>', f89_i: '<boolean>', f90_k: '<null>', f91_q: '<boolean>', f92_w: '<array>', f93_d: '<number>', f94_r: '<number>', f95_f: '<null>', f96_b: '<null>', f97_f: '<object>', f98_b: '<string>', f99_w: '<number>', f100_l: '<null>', f101_v: '<null>', f102_l: '<number>', f103_z: '<object>', f104_o: '<array>', f105_w: '<array>', f106_w: '<array>', f107_z: '<array>', f108_t: '<object>', f109_m: '<object>', f110_w: '<string>', f111_u: '<array>', f112_h: '<array>', f113_k: '<string>', f114_b: '<object>', f115_s: '<boolean>', f116_n: '<boolean>', f117_l: '<array>', f118_k: '<string>', f119_k: '<number>', f120_u: '<string>', f121_q: '<array>', f122_a: '<string>', f123_q: '<object>', f124_h: '<null>', f125_n: '<array>', f126_i: '<string>', f127_v: '<string>', f128_j: '<object>', f129_s: '<null>', f130_t: '<array>', f131_z: '<array>', f132_v: '<array>', f133_o: '<boolean>', f134_e: '<string>', f135_s: '<string>', f136_q: '<object>', f137_d: '<object>', f138_j: '<string>', f139_a: '<object>', f140_d: '<string>', f141_d: '<boolean>', f142_m: '<number>', f143_n: '<boolean>', f144_f: '<boolean>', f145_o: '<boolean>', f146_e: '<null>', f147_p: '<array>', f148_r: '<number>', f149_t: '<number>', f150_p: '<object>', f151_f: '<boolean>', f152_p: '<number>', f153_o: '<string>', f154_f: '<string>', f155_p: '<null>', f156_p: '<string>', f157_y: '<boolean>', f158_j: '<object>', f159_q: '<number>', f160_a: '<boolean>', f161_k: '<string>', f162_y: '<array>', f163_n: '<boolean>', f164_s: '<array>', f165_x: '<number>', f166_k: '<object>', f167_y: '<string>', f168_r: '<boolean>', f169_g: '<boolean>', f170_e: '<string>', f171_x: '<null>', f172_f: '<string>', f173_l: '<null>', f174_h: '<object>', f175_i: '<array>'}, 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw');
    txn_660.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_660.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_660.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_661 = db.transaction(['objectStore_440'], 'readonly', {durability:"relaxed"})
    var objectStore_440 = txn_661.objectStore('objectStore_440');
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', true);
        getAllKeys_0 = objectStore_440.getAllKeys(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw');
        getAllKeys_0 = objectStore_440.getAllKeys(KeyRange_7);
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', false, true);
        count_2 = objectStore_440.count(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', true, false);
        get_2 = objectStore_440.get(KeyRange_10);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', true, false);
        get_3 = objectStore_440.get(KeyRange_12);
    }
    catch (e){
    }

    var count_3 = objectStore_440.count();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.only('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw');
        get_4 = objectStore_440.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', true, false);
        get_5 = objectStore_440.get(KeyRange_16);
    }
    catch (e){
    }

    txn_661.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_661.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_661.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_662 = db.transaction(['objectStore_439'], 'readonly', {durability:"relaxed"})
    var objectStore_439 = txn_662.objectStore('objectStore_439');
    var getAll_1;
    try{
        KeyRange_18 = IDBKeyRange.only('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
        getAll_1 = objectStore_439.getAll(KeyRange_18, 898964672);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
        getAll_1 = objectStore_439.getAll(KeyRange_19);
    }

    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', false);
        get_6 = objectStore_439.get(KeyRange_20);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', false);
        get_7 = objectStore_439.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_24 = IDBKeyRange.bound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', 'PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', false, false);
        getAllKeys_1 = objectStore_439.getAllKeys(KeyRange_24, 3547063533);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
        getAllKeys_1 = objectStore_439.getAllKeys(KeyRange_25);
    }

    var getAll_2;
    try{
        KeyRange_26 = IDBKeyRange.bound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', 'PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', false, true);
        getAll_2 = objectStore_439.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
        getAll_2 = objectStore_439.getAll(KeyRange_27);
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', false);
        get_8 = objectStore_439.get(KeyRange_28);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.only('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO');
        get_9 = objectStore_439.get(KeyRange_30);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('PAzmcJbADxVOcLtLcUTFaiFWzWIcoGdGkPvJDvMQqAnBkdAcqxZIWjzIXyFaPqmrARwTErJTSKBElSBqjPtAvLUJCZgOcXwCcwjPSFPhmSaJalhOVUpWadJlzJFuGZnOeossXUyZIKphnzCBJNzXLYzoYtUZpcHZKGuckprwbVTtyTAYmmeBQzCvsLRjABepSwIlXPhkwTbmyRmNfLKmgQsYxGygrQgvTWQcjXEFZgGXGpLLOYnOadRizcuzOgNHRuJLUZMJrXPRCAfMMIWhIHsJcBfYkpPTyUvPmTJWGsZyOIVElEAUXvoRDwJYPLMBkltBmOqQAeTfgQGIKfeiFtUQpwSAyjCGohBnSDCLXbjljYqnsXnWqLieMRITEfMBUgwRRBkqxysoYWmrVFvtphgayqSMoysecvxzqMsxqTchaEGoEhqeZpWqbtEBwlLTkefVsRvLNUARDaTzMwpjzSpjjnkbPyuteovieQdVkbxhqxfZxMO', true);
        count_4 = objectStore_439.count(KeyRange_32);
    }
    catch (e){
    }

    txn_662.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_662.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_662.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_663 = db.transaction(['objectStore_438', 'objectStore_440'], 'readwrite', {durability:"relaxed"})
    var objectStore_440 = txn_663.objectStore('objectStore_440');
    var put_2 = objectStore_440.put({f0_i: '<null>', f1_k: '<array>', f2_n: '<boolean>', f3_d: '<number>', f4_c: '<object>', f5_s: '<string>', f6_j: '<object>', f7_m: '<boolean>', f8_v: '<null>', f9_m: '<boolean>'}, 'DQBPVeXeVHMTaOMDeKPAriNiDVWQXejARLoWBEuLLBlcEvaDsSqfvJQuJvMUibHGlEmlJUwymxFecRykTzhtMNvXrwjtzlLhhECxjVxTKEqTqFQtROdUZeKGJfqlMebAbQfdnPkQryHzmZQBpswyDJQwJOYkuLzUkAUBGfNcTEBafuNhcPVYzqPSVtkvGuMCKnpGxrGhMncRQgsWuqgpQoWPYRNTZPTwQtnwnpIpcMlASaeisXIjMxopYXywJtEPCINygyvKQbKKAsYMDpAPHCFDMFYgyLgLoflAuoYvPxlwEeyuguDrHyfAoEFYXRVfyIdCXzonigrqshJhITtOQKgnNBvCQgrtOVFugPDgAmbJMWayPtIyKGJaNeYPeHNhCPxHCsndoKDrlpBiHBTSdhsnDcYHDzPHkgRGCQeEdYOJRucgTkglZiXyFYwvvKwsUUQZXdfFTbUqDksGUmMeOrlWreEvEEBzadYukWNFnuwFJwocwahfTdKTcZhWITMFXFwRBQsLuwoEwSiIunzgCudWAAjmhiBQOMLbPUvuPdauLEMkWVwebGsVQcSxUZTMHoucNJYuCswOIYoHWUudITBtCLRbWGKAhzkvmpEVfMzTryqCCdXBZIHNUBPIzuJuJgDKDlTtnoplooIhFufVEFtoXlNu');
    var delete_0;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('DQBPVeXeVHMTaOMDeKPAriNiDVWQXejARLoWBEuLLBlcEvaDsSqfvJQuJvMUibHGlEmlJUwymxFecRykTzhtMNvXrwjtzlLhhECxjVxTKEqTqFQtROdUZeKGJfqlMebAbQfdnPkQryHzmZQBpswyDJQwJOYkuLzUkAUBGfNcTEBafuNhcPVYzqPSVtkvGuMCKnpGxrGhMncRQgsWuqgpQoWPYRNTZPTwQtnwnpIpcMlASaeisXIjMxopYXywJtEPCINygyvKQbKKAsYMDpAPHCFDMFYgyLgLoflAuoYvPxlwEeyuguDrHyfAoEFYXRVfyIdCXzonigrqshJhITtOQKgnNBvCQgrtOVFugPDgAmbJMWayPtIyKGJaNeYPeHNhCPxHCsndoKDrlpBiHBTSdhsnDcYHDzPHkgRGCQeEdYOJRucgTkglZiXyFYwvvKwsUUQZXdfFTbUqDksGUmMeOrlWreEvEEBzadYukWNFnuwFJwocwahfTdKTcZhWITMFXFwRBQsLuwoEwSiIunzgCudWAAjmhiBQOMLbPUvuPdauLEMkWVwebGsVQcSxUZTMHoucNJYuCswOIYoHWUudITBtCLRbWGKAhzkvmpEVfMzTryqCCdXBZIHNUBPIzuJuJgDKDlTtnoplooIhFufVEFtoXlNu', true);
        delete_0 = objectStore_440.delete(KeyRange_34);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_36 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', false, false);
        getAll_3 = objectStore_440.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('DQBPVeXeVHMTaOMDeKPAriNiDVWQXejARLoWBEuLLBlcEvaDsSqfvJQuJvMUibHGlEmlJUwymxFecRykTzhtMNvXrwjtzlLhhECxjVxTKEqTqFQtROdUZeKGJfqlMebAbQfdnPkQryHzmZQBpswyDJQwJOYkuLzUkAUBGfNcTEBafuNhcPVYzqPSVtkvGuMCKnpGxrGhMncRQgsWuqgpQoWPYRNTZPTwQtnwnpIpcMlASaeisXIjMxopYXywJtEPCINygyvKQbKKAsYMDpAPHCFDMFYgyLgLoflAuoYvPxlwEeyuguDrHyfAoEFYXRVfyIdCXzonigrqshJhITtOQKgnNBvCQgrtOVFugPDgAmbJMWayPtIyKGJaNeYPeHNhCPxHCsndoKDrlpBiHBTSdhsnDcYHDzPHkgRGCQeEdYOJRucgTkglZiXyFYwvvKwsUUQZXdfFTbUqDksGUmMeOrlWreEvEEBzadYukWNFnuwFJwocwahfTdKTcZhWITMFXFwRBQsLuwoEwSiIunzgCudWAAjmhiBQOMLbPUvuPdauLEMkWVwebGsVQcSxUZTMHoucNJYuCswOIYoHWUudITBtCLRbWGKAhzkvmpEVfMzTryqCCdXBZIHNUBPIzuJuJgDKDlTtnoplooIhFufVEFtoXlNu');
        getAll_3 = objectStore_440.getAll(KeyRange_37);
    }

    var count_5 = objectStore_440.count();
    var delete_1;
    try{
        KeyRange_38 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'DQBPVeXeVHMTaOMDeKPAriNiDVWQXejARLoWBEuLLBlcEvaDsSqfvJQuJvMUibHGlEmlJUwymxFecRykTzhtMNvXrwjtzlLhhECxjVxTKEqTqFQtROdUZeKGJfqlMebAbQfdnPkQryHzmZQBpswyDJQwJOYkuLzUkAUBGfNcTEBafuNhcPVYzqPSVtkvGuMCKnpGxrGhMncRQgsWuqgpQoWPYRNTZPTwQtnwnpIpcMlASaeisXIjMxopYXywJtEPCINygyvKQbKKAsYMDpAPHCFDMFYgyLgLoflAuoYvPxlwEeyuguDrHyfAoEFYXRVfyIdCXzonigrqshJhITtOQKgnNBvCQgrtOVFugPDgAmbJMWayPtIyKGJaNeYPeHNhCPxHCsndoKDrlpBiHBTSdhsnDcYHDzPHkgRGCQeEdYOJRucgTkglZiXyFYwvvKwsUUQZXdfFTbUqDksGUmMeOrlWreEvEEBzadYukWNFnuwFJwocwahfTdKTcZhWITMFXFwRBQsLuwoEwSiIunzgCudWAAjmhiBQOMLbPUvuPdauLEMkWVwebGsVQcSxUZTMHoucNJYuCswOIYoHWUudITBtCLRbWGKAhzkvmpEVfMzTryqCCdXBZIHNUBPIzuJuJgDKDlTtnoplooIhFufVEFtoXlNu', true, true);
        delete_1 = objectStore_440.delete(KeyRange_38);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', false);
        get_10 = objectStore_440.get(KeyRange_40);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_42 = IDBKeyRange.bound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', 'DQBPVeXeVHMTaOMDeKPAriNiDVWQXejARLoWBEuLLBlcEvaDsSqfvJQuJvMUibHGlEmlJUwymxFecRykTzhtMNvXrwjtzlLhhECxjVxTKEqTqFQtROdUZeKGJfqlMebAbQfdnPkQryHzmZQBpswyDJQwJOYkuLzUkAUBGfNcTEBafuNhcPVYzqPSVtkvGuMCKnpGxrGhMncRQgsWuqgpQoWPYRNTZPTwQtnwnpIpcMlASaeisXIjMxopYXywJtEPCINygyvKQbKKAsYMDpAPHCFDMFYgyLgLoflAuoYvPxlwEeyuguDrHyfAoEFYXRVfyIdCXzonigrqshJhITtOQKgnNBvCQgrtOVFugPDgAmbJMWayPtIyKGJaNeYPeHNhCPxHCsndoKDrlpBiHBTSdhsnDcYHDzPHkgRGCQeEdYOJRucgTkglZiXyFYwvvKwsUUQZXdfFTbUqDksGUmMeOrlWreEvEEBzadYukWNFnuwFJwocwahfTdKTcZhWITMFXFwRBQsLuwoEwSiIunzgCudWAAjmhiBQOMLbPUvuPdauLEMkWVwebGsVQcSxUZTMHoucNJYuCswOIYoHWUudITBtCLRbWGKAhzkvmpEVfMzTryqCCdXBZIHNUBPIzuJuJgDKDlTtnoplooIhFufVEFtoXlNu', false, true);
        count_6 = objectStore_440.count(KeyRange_42);
    }
    catch (e){
    }

    var put_3 = objectStore_440.put({f0_h: '<null>', f1_d: '<object>', f2_i: '<null>', f3_c: '<boolean>', f4_w: '<number>'}, 'fvOtXuezqJHHtfWPjiLKGIHgXOdDkRotnJOQwHnpkqaizUUrOpgnTiUpNNXrSUvUYJJrXCcyzoACknesZPhpLCcCAIxXmjnagZaIpBAPXiOAbXSrWZvttMxNUmNnuOXSvbDAGynlfRIroRWwfHaJbWZNsywfipdVZDlBzTMpwYzjKErRikPpddWTLtSUpCtyijmqqPBrqgdBzGyGrKeZeDRpMGPpvomWGuLUWhLlCNKaUqAxGoZShbpnyrikYwDtuLrgsKAiIeAsjLRswVKtUAYPgIBAwSMprPNoWGIakqjbiGAKSzqWLQWGhJzXjNqZclVKdSMqZeftXGAMwnqwjHuhtwZKVHVzDoKukeiCBsewtxvNqnzpZgNPGZymGoxsiazsuNaybdEMBnIPRYEjtfAHSiRtHaBdhNijxZEcJMopdEtVXfEnJRNpjnAxwuTNlelhugIiKngBDJqVKRbFRWlrLzuXbrBLnLBbVehoiftcjDdBGnuFeCKyvYuTSxQxfldJxJUUKLQBawfxWauNVcNWdVGcwlkmKIPwogpYcPiUkuNkvDJkageKmfMdSTMlYetWKImzGypGSjguguvLXDGwpbPvMWvUEhlaiSTKPxlRhtYyxmSgHYdxevjhTqkIhbDGRxYinFULgGMNxUpGNYyrDLKtIPVOATgtKFGTTSLvJMeUkOnOOThZwKerMzXniiPfcFqdjSVbnMLEZukZrIvobHedfUQgbjeTnciXFsTqbWbZQmdygFMQEGsIqzKmuTXOMoWHVbdDeXfFsziMkwdwkikezjBZzQxKDuOugtCzDypLVfEYxEhTkznuHBKqvakWtZTwMDeoulRTRwHlOUDTKqAPbPafPyhiHXjyJcOXgJkksjftKWKCBeurbBcUGFAJeDgHfrdUyBYcEnELeIkFdgFnoSIGwLedDxRsWoFHgiYvafLkmRtoRBUzwiyaxyRjgGwbx');
    var get_11;
    try{
        KeyRange_44 = IDBKeyRange.only('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw');
        get_11 = objectStore_440.get(KeyRange_44);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('lNbyVKjeWnpEHoAsSsudLnQfUmWIMDwSXxuaIpakNHVosMnrEnyJzNTfMMLRbaAmyWTLgnVcPKnVikbGodVTCCtoOFjKsIrNbIpdhlAEIswyKkKqgsIcqTYZOKWkwSBcLZFw', false);
        count_7 = objectStore_440.count(KeyRange_46);
    }
    catch (e){
    }

    var clear_3 = objectStore_440.clear();
    txn_663.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_663.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_663.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_664 = db.transaction(['objectStore_437'], 'readonly', {durability:"strict"})
    var objectStore_437 = txn_664.objectStore('objectStore_437');
    var count_8 = objectStore_437.count();
    var count_9;
    try{
        KeyRange_48 = IDBKeyRange.bound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', 'zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', false, false);
        count_9 = objectStore_437.count(KeyRange_48);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', true);
        get_12 = objectStore_437.get(KeyRange_50);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_52 = IDBKeyRange.only('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu');
        get_13 = objectStore_437.get(KeyRange_52);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', true);
        getAllKeys_2 = objectStore_437.getAllKeys(KeyRange_54, 18534702);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu');
        getAllKeys_2 = objectStore_437.getAllKeys(KeyRange_55);
    }

    var get_14;
    try{
        KeyRange_56 = IDBKeyRange.only('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu');
        get_14 = objectStore_437.get(KeyRange_56);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('zZkITjllaWNomAgEqhCFIywzLqkJdPiaIagYWGdEOIFKQwcbJgibZVbGIHGfWgjQKbXWyEaTLuEJixdZiREbqJDOdtgdhqLwRfwyxyNpNeweLvLpgypulmCjBFiDqzaDlenBdUVjTUxHTspsnshcgNHVESBcxJDpPFDNByBSIpSvxEJMxYjrYFYttvLdGhmCEorlrsGhZvimYsTnqaiBLHXwcJlTgmlDJGhqmuDaqidTwYOtAcRkCUugoYmPBSqbHIAWpRbOgLZJkKpyphXnPLXWZObbOwmCTqKNTJJBCUOOhQhDDjonyQLuGtgwPIcCpxjyDKDijvxHoNyiQluFWheKbbrIfMbtVXmuBaWiLuQuKultqwAlnvxyAQKPazFDNXGJzzONyKVigAEWjTBkhHSSu', false);
        get_15 = objectStore_437.get(KeyRange_58);
    }
    catch (e){
    }

    txn_664.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_664.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_664.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4933')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};