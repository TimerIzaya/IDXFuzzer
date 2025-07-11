let db;
const openRequest = window.indexedDB.open('str_8103', 5687638074877880)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1504', {keypath: 'DzilCTGOGeODSLzgwgEfKHFnOebPTZbzDNXwexhBesxdfzHQVY'});
    var objectStore_1 = db.createObjectStore('objectStore_1505');
    var put_0 = objectStore_1.put({f0_y: '<number>', f1_l: '<null>', f2_e: '<object>', f3_w: '<boolean>', f4_q: '<object>', f5_j: '<string>', f6_r: '<object>', f7_j: '<boolean>', f8_t: '<number>'}, 'btKvPZxGtvIOGZFmIPhToazQSWOopulPMivvHHdvdaFAGXSzjJnYzXcMgCOXZChlJXxmfoOZlqWLhOLYPZKjyHsfxnhAtvGNcFPSmWnRPzLdeNfJGpVlYkeiahWVZSavuNQcqHGLUtBBWwzUdDPOuXfOwYqCPOwAJdgBvzYZgtZcHHUPkidTaUtSvisqsoHwpDtc');
    var add_0 = objectStore_0.add({f0_a: '<number>', f1_u: '<string>', f2_q: '<number>', f3_n: '<boolean>', f4_t: '<string>', f5_z: '<null>', f6_y: '<string>', f7_o: '<number>', f8_a: '<number>', f9_z: '<array>', f10_r: '<string>', f11_v: '<null>', f12_i: '<string>', f13_a: '<array>', f14_j: '<string>', f15_q: '<object>', f16_w: '<null>', f17_b: '<object>', f18_y: '<string>', f19_o: '<number>', f20_e: '<number>', f21_a: '<string>', f22_t: '<null>', f23_m: '<string>', f24_b: '<string>', f25_u: '<array>', f26_b: '<array>', f27_x: '<object>', f28_h: '<string>', f29_u: '<string>', f30_e: '<string>', f31_i: '<array>', f32_r: '<number>', f33_g: '<string>', f34_b: '<array>', f35_n: '<array>', f36_u: '<string>', f37_l: '<object>', f38_z: '<number>', f39_z: '<string>', f40_d: '<null>', f41_i: '<object>', f42_l: '<string>', f43_f: '<number>', f44_w: '<string>', f45_v: '<object>', f46_r: '<null>', f47_t: '<object>', f48_t: '<string>', f49_k: '<boolean>', f50_v: '<string>', f51_w: '<object>', f52_r: '<string>', f53_v: '<boolean>', f54_w: '<boolean>', f55_c: '<array>', f56_i: '<null>', f57_k: '<boolean>', f58_n: '<null>', f59_x: '<array>', f60_e: '<number>', f61_t: '<boolean>', f62_f: '<number>', f63_g: '<null>', f64_x: '<number>', f65_w: '<number>', f66_m: '<null>', f67_r: '<boolean>', f68_z: '<array>', f69_u: '<null>', f70_s: '<null>', f71_s: '<boolean>', f72_j: '<string>', f73_j: '<string>', f74_t: '<object>', f75_m: '<string>', f76_s: '<string>', f77_b: '<array>', f78_l: '<string>', f79_u: '<string>', f80_p: '<number>', f81_b: '<object>', f82_g: '<string>', f83_u: '<null>', f84_f: '<string>', f85_t: '<null>', f86_p: '<array>', f87_f: '<null>', f88_n: '<object>', f89_b: '<number>', f90_a: '<object>', f91_w: '<number>', f92_o: '<object>', f93_k: '<array>', f94_q: '<number>', f95_u: '<object>', f96_y: '<string>', f97_y: '<array>', f98_e: '<object>', f99_j: '<null>', f100_a: '<array>', f101_y: '<number>', f102_n: '<object>', f103_m: '<string>', f104_c: '<object>', f105_u: '<number>', f106_e: '<string>', f107_z: '<string>', f108_u: '<string>', f109_r: '<array>', f110_o: '<array>', f111_l: '<string>', f112_i: '<number>', f113_k: '<boolean>', f114_i: '<number>', f115_l: '<number>', f116_j: '<string>', f117_o: '<number>', f118_j: '<boolean>', f119_m: '<string>', f120_e: '<number>', f121_b: '<boolean>', f122_l: '<number>', f123_y: '<string>', f124_i: '<number>', f125_i: '<number>', f126_s: '<object>', f127_o: '<string>', f128_p: '<boolean>', f129_h: '<null>', f130_s: '<boolean>', f131_y: '<boolean>', f132_x: '<array>', f133_m: '<number>', f134_m: '<array>', f135_a: '<array>', f136_m: '<object>', f137_k: '<number>', f138_n: '<array>', f139_q: '<number>', f140_d: '<array>', f141_z: '<array>', f142_x: '<number>', f143_k: '<number>', f144_a: '<boolean>', f145_k: '<boolean>', f146_q: '<object>', f147_c: '<string>', f148_x: '<boolean>', f149_q: '<number>', f150_e: '<array>', f151_m: '<array>', f152_o: '<number>', f153_r: '<boolean>', f154_r: '<number>', f155_s: '<boolean>', f156_i: '<number>', f157_k: '<null>', f158_q: '<boolean>', f159_c: '<number>', f160_q: '<number>', f161_i: '<number>', f162_c: '<boolean>', f163_h: '<number>', f164_v: '<null>', f165_y: '<null>', f166_p: '<array>', f167_t: '<string>', f168_a: '<array>', f169_z: '<null>', f170_k: '<null>', f171_r: '<string>', f172_i: '<string>', f173_d: '<null>', f174_d: '<object>', f175_h: '<number>', f176_k: '<array>', f177_p: '<null>', f178_s: '<object>', f179_d: '<boolean>', f180_k: '<number>', f181_u: '<string>', f182_e: '<boolean>', f183_t: '<boolean>', f184_x: '<null>', f185_i: '<string>', f186_r: '<object>', f187_v: '<boolean>', f188_n: '<string>', f189_f: '<string>', f190_n: '<object>', f191_b: '<string>', f192_q: '<number>', f193_r: '<number>', f194_v: '<boolean>', f195_h: '<boolean>', f196_l: '<null>', f197_j: '<number>', f198_s: '<object>', f199_s: '<number>', f200_b: '<object>', f201_y: '<string>', f202_x: '<array>', f203_b: '<null>', f204_l: '<number>', f205_a: '<null>', f206_l: '<array>', f207_l: '<string>', f208_b: '<string>', f209_z: '<string>', f210_l: '<array>', f211_p: '<null>', f212_e: '<object>', f213_s: '<null>', f214_r: '<string>', f215_u: '<object>', f216_x: '<object>', f217_e: '<number>', f218_a: '<boolean>', f219_h: '<string>', f220_y: '<string>', f221_p: '<string>', f222_f: '<array>', f223_l: '<null>', f224_v: '<object>', f225_o: '<boolean>', f226_k: '<string>', f227_d: '<null>', f228_j: '<array>', f229_j: '<null>', f230_q: '<boolean>', f231_k: '<null>', f232_a: '<array>', f233_m: '<boolean>', f234_h: '<string>', f235_i: '<null>', f236_a: '<number>', f237_a: '<object>', f238_r: '<boolean>', f239_g: '<string>', f240_v: '<object>', f241_e: '<null>', f242_q: '<object>', f243_k: '<null>', f244_e: '<object>', f245_e: '<boolean>', f246_b: '<boolean>', f247_d: '<object>', f248_z: '<string>', f249_q: '<number>', f250_z: '<string>', f251_e: '<array>', f252_w: '<boolean>', f253_j: '<number>', f254_v: '<number>', f255_o: '<string>', f256_h: '<boolean>', f257_x: '<null>', f258_e: '<number>', f259_t: '<boolean>', f260_n: '<array>', f261_s: '<array>', f262_h: '<object>', f263_b: '<boolean>', f264_n: '<array>', f265_x: '<null>', f266_n: '<number>', f267_x: '<number>', f268_m: '<boolean>', f269_n: '<string>', f270_l: '<array>', f271_f: '<string>', f272_t: '<string>', f273_v: '<number>', f274_p: '<null>', f275_z: '<number>', f276_v: '<boolean>', f277_n: '<array>', f278_w: '<null>', f279_y: '<object>', f280_a: '<array>', f281_q: '<null>', f282_y: '<boolean>', f283_q: '<object>', f284_h: '<string>', f285_v: '<number>', f286_r: '<number>', f287_q: '<number>', f288_u: '<null>', f289_l: '<array>', f290_z: '<boolean>', f291_f: '<object>', f292_b: '<number>', f293_a: '<number>', f294_b: '<boolean>', f295_h: '<object>', f296_c: '<boolean>', f297_r: '<array>', f298_g: '<object>', f299_q: '<array>', f300_g: '<string>', f301_r: '<string>', f302_v: '<boolean>', f303_l: '<array>', f304_o: '<number>', f305_o: '<object>', f306_b: '<object>', f307_v: '<string>', f308_u: '<array>', f309_g: '<array>', f310_c: '<object>', f311_h: '<array>', f312_r: '<object>', f313_q: '<boolean>', f314_e: '<boolean>', f315_h: '<boolean>', f316_f: '<array>', f317_q: '<boolean>', f318_t: '<null>', f319_f: '<string>', f320_i: '<boolean>', f321_s: '<null>', f322_m: '<string>', f323_l: '<null>', f324_d: '<number>', f325_o: '<boolean>', f326_h: '<null>', f327_e: '<boolean>', f328_f: '<number>', f329_t: '<null>', f330_q: '<string>', f331_y: '<string>', f332_v: '<string>', f333_i: '<number>', f334_y: '<array>', f335_n: '<number>', f336_n: '<string>', f337_s: '<string>', f338_v: '<string>', f339_m: '<string>', f340_t: '<null>', f341_e: '<null>', f342_b: '<string>', f343_s: '<array>', f344_l: '<number>', f345_h: '<object>', f346_s: '<object>', f347_h: '<string>', f348_z: '<null>', f349_o: '<object>', f350_t: '<string>', f351_q: '<number>', f352_g: '<string>', f353_m: '<object>', f354_r: '<string>', f355_r: '<array>', f356_a: '<null>', f357_h: '<number>', f358_m: '<boolean>', f359_g: '<array>', f360_v: '<null>', f361_c: '<array>', f362_l: '<array>', f363_w: '<number>', f364_u: '<number>', f365_x: '<object>', f366_n: '<number>', f367_x: '<null>', f368_a: '<number>', f369_q: '<array>', f370_t: '<object>', f371_w: '<object>', f372_p: '<number>', f373_t: '<boolean>', f374_m: '<object>', f375_g: '<number>', f376_j: '<null>', f377_w: '<boolean>', f378_c: '<number>', f379_l: '<array>', f380_g: '<null>', f381_e: '<null>', f382_y: '<null>', f383_i: '<null>', f384_p: '<boolean>', f385_u: '<number>', f386_u: '<boolean>', f387_j: '<object>', f388_m: '<object>', f389_t: '<string>', f390_n: '<null>', f391_k: '<array>', f392_z: '<string>', f393_e: '<null>', f394_m: '<boolean>', f395_w: '<array>', f396_m: '<boolean>', f397_r: '<object>', f398_y: '<number>', f399_s: '<number>', f400_y: '<number>', f401_j: '<array>', f402_v: '<null>', f403_v: '<boolean>', f404_j: '<null>', f405_b: '<string>', f406_k: '<boolean>', f407_z: '<null>', f408_n: '<number>', f409_r: '<string>', f410_x: '<null>', f411_b: '<number>', f412_n: '<boolean>', f413_o: '<string>', f414_u: '<object>', f415_q: '<number>', f416_y: '<array>', f417_y: '<boolean>', f418_o: '<number>', f419_v: '<string>', f420_l: '<array>', f421_p: '<object>', f422_c: '<string>', f423_d: '<boolean>', f424_a: '<array>', f425_a: '<boolean>', f426_n: '<number>', f427_q: '<string>', f428_v: '<string>', f429_x: '<boolean>', f430_d: '<array>', f431_x: '<null>', f432_g: '<array>', f433_s: '<string>', f434_z: '<string>', f435_d: '<array>', f436_y: '<array>', f437_r: '<boolean>', f438_t: '<array>', f439_v: '<array>', f440_o: '<object>', f441_a: '<array>', f442_x: '<number>', f443_f: '<boolean>', f444_n: '<array>', f445_k: '<object>', f446_v: '<boolean>', f447_n: '<null>', f448_q: '<object>', f449_n: '<array>', f450_b: '<boolean>', f451_l: '<object>', f452_l: '<boolean>', f453_c: '<object>', f454_t: '<array>', f455_d: '<null>', f456_l: '<string>', f457_a: '<object>', f458_d: '<array>', f459_l: '<array>', f460_s: '<null>', f461_h: '<number>', f462_h: '<number>', f463_w: '<boolean>', f464_i: '<null>', f465_i: '<boolean>', f466_h: '<number>', f467_g: '<null>', f468_d: '<array>', f469_g: '<number>', f470_z: '<number>', f471_z: '<array>', f472_f: '<number>', f473_z: '<array>', f474_x: '<object>', f475_i: '<array>', f476_z: '<null>', f477_r: '<boolean>'}, 'OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('btKvPZxGtvIOGZFmIPhToazQSWOopulPMivvHHdvdaFAGXSzjJnYzXcMgCOXZChlJXxmfoOZlqWLhOLYPZKjyHsfxnhAtvGNcFPSmWnRPzLdeNfJGpVlYkeiahWVZSavuNQcqHGLUtBBWwzUdDPOuXfOwYqCPOwAJdgBvzYZgtZcHHUPkidTaUtSvisqsoHwpDtc', 'btKvPZxGtvIOGZFmIPhToazQSWOopulPMivvHHdvdaFAGXSzjJnYzXcMgCOXZChlJXxmfoOZlqWLhOLYPZKjyHsfxnhAtvGNcFPSmWnRPzLdeNfJGpVlYkeiahWVZSavuNQcqHGLUtBBWwzUdDPOuXfOwYqCPOwAJdgBvzYZgtZcHHUPkidTaUtSvisqsoHwpDtc', false, true);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_1.put({f0_u: '<null>'}, 'GnZMQaBAAtDknmLKOpsTOTpOjSGaskFnOclhjlvAqrqiuNapITDHXDOmvttUEoZTesaYLmVPOwbydOmmBevPIyvwhRRIeWgTEvKPaNzjDcJTqfPSIYoNRuIWzcmlEgpOlahSGdDPaHhgGNCXMoFoqyHBuLgSnDWfsFkoYnaQUaDlatXMGqhvtVqoqvcwNeDPBnnQgdHtHjMQpmMIzOvmlGadhSBnarfVkYfQlCVVltvdiJPFMSkNzLfxnHnFzZzeeinpmhaRUCoyZEQhDzJnrajGXJAvmJnNszRfCUNXOkLqXpjHuVliovrAfqFhRNzlxPUKJqzDRDjTeSPucOVhewTjApXHTxyenjqeIQAowjNdiZiDZiDRskHwsmpNZePziOgMEpwsxokEqVKpflRhmnqBGlKXPUeSQZafgmtpaWqzsNhiNPMyivtyXaRdONUdqBzAGMlBpXrWRqUyILcZrUPGAcPkbmMEAwAyOAnPZouSBmJfPQqQYptAVuitiXKxctVXyOxxXTDayrRNehUqZggDBeCMiItlbcELhtBufuGyLIEtGDZUaWorjdGpMeauuCzWdVpkOdIZpbmVkHpNRukobGkQCiSQyMHsnDodLitOVFGHwPsvnfYymWpNUOjDZpVPsoBTHQXdfGwlBWCjxLIHnUZGjoDDJMhcQwtzcmSLMvulKcebMyarkocLuUmpgKPDvyUEKMWUcEWKtpWGXbztyJHMzVuHuBQGqchpHGHZuivyUgcaCUYmgSAKUfGpwcFmhTTlKbRSKNSMZopZIUHOvwmmcTdZiTbIEPWMAQrAuXcnjuYZfusTGpokynZVYdsfctWyUyaepPsOfAbRlDWVPiLMEOvahRdkMdKODvxOvDvnSEejISQwjNKCQyBwyhFcXXKqGtdQZwxCpIfCxAwetYJWwGpBDqwaWnntenilmOvposde');
    var put_2 = objectStore_1.put({f0_o: '<null>', f1_e: '<null>', f2_l: '<null>', f3_i: '<number>', f4_q: '<string>', f5_k: '<null>', f6_b: '<object>', f7_w: '<null>', f8_s: '<number>'}, 'pCXiSEIXumdZoYBmFEFKGKgFdMLIxGeFMVHyVItIZiJqsohlTiGBSGJHyrCsSmyNprNWrsbfPazppZaJUogrBbQgtegHeagYjZrQOyjauJVxAfgxniAbzsUichkvnFlLdWucjKyQDAmVDGeDFpwByDIiZxMbBIbNdIlXJZwxmpxjFdLIYZMtXHDgONfDFmKVQJzNBmYLWUPiMJLpbsJIHpaRLnxoQoMzWthacDLpaUTrtRpEXmvXgcQwAZBxJOlpdOSblpuNdtxWknHBHKPPawHLDeWjNAosGPprAlfEHigcgoylDAtlhNzZsHHYSSPXoyeFzNIRfDzFNpqdgsEPREacDCpGalUJpkeiMHnhKcdgMCyZFkDOpEbBxtpFSLCZeDWxLjnRYYoOwTbctAnXagpRKIUiTEhzSMhPvHPxYRBvIcHSxwASrGpQLKqhwgxfYPhpxXIVASrlqeTiIZvGLzrMgFgzjkbFDbtImXLfxqUWKRkZsTpSQlKeNTLxxYOvahDRwGLzr');
    var clear_0 = objectStore_0.clear();
    var put_3 = objectStore_1.put({f0_v: '<array>', f1_x: '<object>', f2_e: '<string>', f3_m: '<array>', f4_a: '<array>', f5_u: '<array>', f6_g: '<number>', f7_c: '<string>', f8_l: '<boolean>', f9_e: '<string>', f10_l: '<object>', f11_r: '<array>', f12_k: '<boolean>', f13_u: '<number>', f14_y: '<object>', f15_c: '<number>', f16_f: '<boolean>', f17_l: '<string>', f18_c: '<string>', f19_e: '<boolean>', f20_m: '<number>', f21_m: '<array>', f22_s: '<null>', f23_p: '<number>', f24_b: '<boolean>', f25_w: '<object>', f26_y: '<array>', f27_m: '<boolean>', f28_d: '<null>', f29_w: '<null>', f30_s: '<array>', f31_x: '<array>', f32_u: '<object>', f33_d: '<string>', f34_y: '<null>', f35_k: '<number>', f36_n: '<object>', f37_s: '<boolean>', f38_e: '<string>', f39_m: '<number>', f40_g: '<object>', f41_g: '<array>', f42_j: '<string>', f43_i: '<boolean>', f44_z: '<array>', f45_j: '<string>', f46_q: '<string>', f47_o: '<object>', f48_v: '<boolean>', f49_o: '<boolean>', f50_l: '<string>', f51_j: '<null>', f52_j: '<boolean>', f53_z: '<number>', f54_c: '<array>', f55_v: '<number>', f56_y: '<object>', f57_w: '<null>', f58_o: '<number>', f59_a: '<string>', f60_l: '<object>', f61_v: '<array>', f62_t: '<string>', f63_u: '<string>', f64_l: '<string>', f65_n: '<object>', f66_w: '<null>', f67_m: '<object>'}, 'ymMsbsbALltJTyDKyswvCtDIyaNgJYTHHBxQPxIktrkfCoYnUCFPrmADeDiuHwCjfpWuQaSooIffGdIFmpZHwPhHPcWVuAtLjKtUpjaLpsDGoogAnKLxsUKWOFgfrIXWviigtcCPphTacmjchbIHmwLuNKKYtWeZZxuAeuCeIaOHZHbKIKYgRiNCAIvofaWtOUXxtHMRNRGVumtcsrADtZSzFzrphzLArNwMkMVLcZOjhDycUrUyqihHuICKXAfqPXEPTZOgzyBxGcmTWrfiWSQqblqHwNVTERoCoGpdNnrEnNklETqXxslGopFiZzYZykXYzsGbfXuZIOoyVWpNpEGjRbqVJPicMIPWJmgYpPZKReMbfcKzpyEunHrfPxNwjovSwnxderZoEjYUALGznSHuWPliCGbksEjliQTbQgvKoBYVSUDEkaVDOJmhjrlhPhbNrHZNqQZdaEGNvLwqsVpyOhukbWtYPAIJLmbwqAKBRgADxLZVdqgGIBDULLGsYAhsKtyUluOKEwMVFvFsaBgKvsWcbIoKWAxIoKWAAiqfCYGVPlntxodvilvkMvEnHpwLvexLdhMBiXnUbhiJUAhnNbLTBufgwpnuwnrFrmThSeahWvZSuvfNbElLvskkGoFBMnZsBiDfgPiaZKEGXcQRAjUjwpcwewbUZAEnhCJTcLCOoIvoRNvPTfsVmeMGijQdrxwIACSdhtnPLCXfDnvpoaGwaTaoVsIbxnKmWLMWaRebErxsYUnxZJBsoMHXbDWOLpJNElwWYCDrXJiHviTbbyXWLANnNTqVrMYBKsbXHcjxwFPemCtIAUlSrUzkjURuObM');
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA');
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_1506', {keypath: 'eKHlXwltdvaaKDUWvqzHakOEDXwAmcvSUyribDDMxlsJQtKEaikMxqCMYwBKWcsuBBdgZojCoIybGWVdHmaYkoDUQlMCtEGSiRWtOIatdIRJtppOWWxQlHNJiLPfUeHhDTcmNGrjfaBHtvUTWVYCCZcGxlvsoaqKjdHdOoruwPCpvGHzBWfLKcwHLBmHcMOoDtnTRzqdiewEhlvKGamSPBcryTfWoOjovQXvrItKNnABmUMQPmSPOzAMYCiCoORPpboQgljWgqKGEickRPEAWbEyMurCFjiAQhrfJKTVcjLGBAyteTTukvxcocbGnHHKbFNMxcxQYhGAgFxtPaQvXULXbnqkVUKweVxyDxmzXIkpdYuZnRGcyLSCcrmsjXUoldHkKYlxbBCWXKAzvksqdURygtILiuCVwERtEawhvJGUDLlmgjunZZJoSiaLPpRQkKKvamyNFPXthOFBosKtKWkjSvSVmTfyTzbPvSwxitVYXZjijWYDxyGAMlAxRAKGTQhNHWNykspOKQVvVWBEwmnsRxffgGYYEyxOehGUBpUrXctRwMoOciqlpilzdiirtoFoWRIzQXAJSzXAamqcJKeuftJyjXKBzbzviAVUoZGijAoYdnaYHViswHwiEwuoSOJyhpwCBuJvchYJQVilbdKggNFiMRUEKsHiqYabJFzFhKCqBuPyEXcLngzEdfaBglEKaTQDzSzITTDjuQYNrsBlDSDzfFhzPlBhNEDETGvNvtgrxolTHGzhbYOjmjRTZiLbwamnqMybsBzMVLVhjqMhoIoucDHsKKzrZnZnSAOTDPMeRAsjhqFATYrTWdtxvnEYvrSfEoYjHqYWFBuFUemJHarTBveFwbAuepKNbdVQpzGydoQJjewojKWMNEWZmlxjknnykdQLruCGhMVdQFFTavxReqSeQGqugOeuBmziBcTveqIPVYnmFWZkrqkRVjSwuvKaLf'});
    db.deleteObjectStore('objectStore_1506')
    var objectStore_3 = db.createObjectStore('objectStore_1507', {keypath: 'uDBGEkQmEILfSCtnWIaoYKGqosmOtVrsbIBHHCwxrNHRQqyUyrKLEEaQZGdQIaHvKiQmZYbaqAibVdwCvtZvrclpbpJcjSzzvRsFjTkLQDRHFxFPprHqivJStHIyGRhigoCIMkSSSoZfqcORqMZdYqKDFBTqptwUVCdkcuMmvzpItbpeQxPkCUfVrAtSAtuDMUhwJEShpjPNjBzFZBEtgErcKnLFqHFlGYVCjjElFfuZEesUhNJGcTKTGTCClogBEDvHowKZjcrDotTOvUqNmxguxlhnMQntsRLKQVGkMXUlccrWXucmnaasYVOgLJhRBgslooaAZzjmmeIoHPZtnZveaHlvsUozICHPlDRVStAFiyxdBMQrKDbSlknMjBgLABGvwlCyvzThHbcVulVxwtwuqUQIQFbQHjKiJyeJkInNPRVdwQAfdXbXRwmQfjaCuZxzOQYtIhPexUrhAfUslJoXuOYmEkKyJzPQqXzLdvikuVHgVedlKNoDuPEolxBlIQAzZBqBPyJuCXHQbAKAegyUarmtkykCODoaZmWsYpMIPluLfPjTZkMYlWgFaQLTgxMxDrhdVPhcpOehkBpWUVNkLtIrulIuCgkaZizCmtuFAEZLLiDEdphapYIcjHrbhzGsCSjMQhMdcuyAkWiLMxwcfYOWiQxvoqdDJzNQyEeRVXHwNAZhygDVQSshyzqWmmVhsInNmYWqvXfpLPSHNKtiOHgTFZPjLRYwETLyIQJpOXTzEMFhfDycFJNMNRNnCLltJytKuYoGoIgpPUOyDgpwgwFZTAZCNZZOiByZLbjpmSoVlIIEUoVhmRaTlbLtWDlzMnCyyTedQdmjOAVSnuUByMdSEhabiWxgJtWccCSKOjDHIAoYPQlgWpWpIpiJqHlWDCfxJXwwoInSwSwvHYhzuomlMEhGkrbvYnmZNUAey'});
    var index_998 = objectStore_3.createIndex('index_998', 'test', {multiEntry: false});
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('btKvPZxGtvIOGZFmIPhToazQSWOopulPMivvHHdvdaFAGXSzjJnYzXcMgCOXZChlJXxmfoOZlqWLhOLYPZKjyHsfxnhAtvGNcFPSmWnRPzLdeNfJGpVlYkeiahWVZSavuNQcqHGLUtBBWwzUdDPOuXfOwYqCPOwAJdgBvzYZgtZcHHUPkidTaUtSvisqsoHwpDtc', true);
        get_1 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var index_999 = objectStore_3.createIndex('index_999', 'test', {unique: false, multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2245 = db.transaction(['objectStore_1507'], 'readonly', {durability:"strict"})
    var objectStore_1507 = txn_2245.objectStore('objectStore_1507');
    txn_2245.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2245.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2245.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2246 = db.transaction(['objectStore_1507'], 'readwrite', {durability:"strict"})
    var objectStore_1507 = txn_2246.objectStore('objectStore_1507');
    var index_0 = objectStore_1507.index('index_999');
    var index_1 = objectStore_1507.index('index_999');
    var clear_1 = objectStore_1507.clear();
    var clear_2 = objectStore_1507.clear();
    txn_2246.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2246.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2246.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2247 = db.transaction(['objectStore_1507'], 'readonly', {durability:"relaxed"})
    var objectStore_1507 = txn_2247.objectStore('objectStore_1507');
    var index_2 = objectStore_1507.index('index_998');
    txn_2247.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2247.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2247.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2248 = db.transaction(['objectStore_1504'], 'readwrite', {durability:"strict"})
    var objectStore_1504 = txn_2248.objectStore('objectStore_1504');
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA', 'OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA', false, false);
        count_0 = objectStore_1504.count(KeyRange_6);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.only('OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA');
        count_1 = objectStore_1504.count(KeyRange_8);
    }
    catch (e){
    }

    var put_4 = objectStore_1504.put({f0_c: '<object>', f1_y: '<number>', f2_a: '<object>', f3_f: '<object>'}, 'uxSVBMyyqCmgKTUsrsOaBcmhVNeCgOpGFtHsstogUnGOkHyaAZcsvjfTgtojzXGqyAMdSfarWSbFbsSNMzknPpUxVhrPxZVdItkVPmZeqndMlPrpuMRgDgLXIGoNUFreDudwKszAfcNEUNLqPDvcmzJuGPgSKYuQyqkZFUHbmZmDcQPNxBukTibLbPQuERGrckttUbKrmatbAeUKFQhRjzmybpPkNmDndpvgOizPfRYuMHoUHvAvaMsUVsnJZbJIHPqfJgcrHTCyiJcUGoiyXdeWOojrdntMPafxkVkHXuxhokkLhdnKzEPLpksKPwOHyArFxLaCsnTWSJZu');
    var put_5 = objectStore_1504.put({f0_d: '<number>', f1_w: '<string>', f2_c: '<null>', f3_i: '<number>', f4_i: '<number>'}, 'WBeexDDaAQMLOzvMUOykimndGeFRhYeKjccBHxWyafeHPMHgkeEXEfnEZVsrtwMadqszHAgBiHhXodCHN');
    var add_1 = objectStore_1504.add({f0_v: '<object>', f1_n: '<null>'}, 'chbOaNNWAxLlVEyOVTTbWBhwkhACMMcVuuAsepyyPvjLRpuUXhjJfLStNhjkYEVBRFNdOsDXorewKLUJpNpCHjeIxrphjCqwClLIpnITdLmXJVlqqqmJFkMXqIkjvXqJYbEDcNTrTQXLomdvWwpjqobqKoyknyRVbZQVaNVkSnMcTdzeKJYERqeGhtYPABmsPWnThYymBXZoKXECJErZnwJCNNbFSaxdRXnvYNyOmysCOdMSUUTIacwTlzaPPIbvAYDpiaZmQZUWMHZqROecdCfQFuTPHmlfwXJHKYvxvrVKDOhSYAOVMeeCqHqAJMkuvrLqFcgxUkbFbsOtQKBbgiUZHFQGMhEQBOptAOQRuRmyWlfzYBQmSFcFPJQqcDqkvDtgoabAAEfbfUrFiDYEfVqjQWyHYKFpthBqPTnysEHmTPPNfrdUZjiEgGYlCsSgolBHlpCNIqiNlLUfZUtHFjbJhcMwEWMfzDDTreVyuniJhYvjlWZKWkHGSWkJWMbIkIUPJeaCfgWnBMoQRMEUHlqeRhjtGnUoeICbDuqPwhHLKgvDJioIrMLlRAjECaAX');
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.only('OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA');
        get_2 = objectStore_1504.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_3 = objectStore_1504.clear();
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('chbOaNNWAxLlVEyOVTTbWBhwkhACMMcVuuAsepyyPvjLRpuUXhjJfLStNhjkYEVBRFNdOsDXorewKLUJpNpCHjeIxrphjCqwClLIpnITdLmXJVlqqqmJFkMXqIkjvXqJYbEDcNTrTQXLomdvWwpjqobqKoyknyRVbZQVaNVkSnMcTdzeKJYERqeGhtYPABmsPWnThYymBXZoKXECJErZnwJCNNbFSaxdRXnvYNyOmysCOdMSUUTIacwTlzaPPIbvAYDpiaZmQZUWMHZqROecdCfQFuTPHmlfwXJHKYvxvrVKDOhSYAOVMeeCqHqAJMkuvrLqFcgxUkbFbsOtQKBbgiUZHFQGMhEQBOptAOQRuRmyWlfzYBQmSFcFPJQqcDqkvDtgoabAAEfbfUrFiDYEfVqjQWyHYKFpthBqPTnysEHmTPPNfrdUZjiEgGYlCsSgolBHlpCNIqiNlLUfZUtHFjbJhcMwEWMfzDDTreVyuniJhYvjlWZKWkHGSWkJWMbIkIUPJeaCfgWnBMoQRMEUHlqeRhjtGnUoeICbDuqPwhHLKgvDJioIrMLlRAjECaAX', 'uxSVBMyyqCmgKTUsrsOaBcmhVNeCgOpGFtHsstogUnGOkHyaAZcsvjfTgtojzXGqyAMdSfarWSbFbsSNMzknPpUxVhrPxZVdItkVPmZeqndMlPrpuMRgDgLXIGoNUFreDudwKszAfcNEUNLqPDvcmzJuGPgSKYuQyqkZFUHbmZmDcQPNxBukTibLbPQuERGrckttUbKrmatbAeUKFQhRjzmybpPkNmDndpvgOizPfRYuMHoUHvAvaMsUVsnJZbJIHPqfJgcrHTCyiJcUGoiyXdeWOojrdntMPafxkVkHXuxhokkLhdnKzEPLpksKPwOHyArFxLaCsnTWSJZu', false, false);
        get_3 = objectStore_1504.get(KeyRange_12);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('OSxzpHtHfxPcLHIZiAwJZzfAohdIvuRElllJDtFaBxkdLkgmDJHLCvuYzpUAwPUFtYdPeAIiwXQUrVUewRGbDedkFWuWKNusVraCzKCcrKiODbQHgWxtWRuNdQjvuBFnjLDMlWXmkYjIjQwODcKyEcKgGpTkAqPXkEaUomNxWnpHWKgjBbztoYJPYvVhxRLCSZA', 'WBeexDDaAQMLOzvMUOykimndGeFRhYeKjccBHxWyafeHPMHgkeEXEfnEZVsrtwMadqszHAgBiHhXodCHN', false, true);
        get_4 = objectStore_1504.get(KeyRange_14);
    }
    catch (e){
    }

    var add_2 = objectStore_1504.add({f0_n: '<array>', f1_p: '<null>'}, 'NDxBgTsNGrhhiIaeRfQlLKydMOJwDXqohkeZpIYgnJhkzWuhFNEeTvluuyrQfJYtpaWaXxmxZpGnCXyXxhCIAzNslyKEzNRYTmzNbsvJhcpMTbJknbpqirJUgKASsQHudlOWTDDEKPbLRExPBmRGIcyLhuWNGaDjuEzJfagRDdzgaXaKsPyXYzGofMOcJGHMJRYdLCMxRwbJQQYiPEORpvVoCgQrPCeQzJ');
    txn_2248.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2248.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2248.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2249 = db.transaction(['objectStore_1505', 'objectStore_1507'], 'readwrite', {durability:"strict"})
    var objectStore_1507 = txn_2249.objectStore('objectStore_1507');
    var add_3 = objectStore_1507.add({f0_c: '<array>', f1_e: '<array>', f2_d: '<null>', f3_g: '<boolean>', f4_f: '<string>', f5_k: '<array>', f6_q: '<null>', f7_y: '<null>', f8_l: '<string>', f9_i: '<boolean>', f10_r: '<object>', f11_x: '<array>', f12_y: '<string>', f13_n: '<string>', f14_x: '<boolean>', f15_a: '<number>', f16_q: '<array>', f17_z: '<boolean>', f18_z: '<string>', f19_c: '<null>', f20_r: '<string>', f21_g: '<array>', f22_p: '<object>', f23_m: '<string>', f24_s: '<array>', f25_x: '<null>', f26_z: '<object>', f27_y: '<object>', f28_k: '<boolean>', f29_e: '<array>', f30_k: '<object>', f31_z: '<array>', f32_d: '<array>', f33_t: '<number>', f34_g: '<array>', f35_a: '<string>', f36_h: '<boolean>', f37_e: '<object>', f38_y: '<array>', f39_r: '<array>', f40_x: '<number>', f41_n: '<object>', f42_o: '<null>', f43_a: '<null>', f44_p: '<boolean>', f45_i: '<array>', f46_r: '<object>', f47_m: '<array>', f48_j: '<boolean>', f49_w: '<string>', f50_d: '<null>', f51_j: '<object>', f52_j: '<boolean>', f53_y: '<array>', f54_s: '<number>', f55_n: '<number>', f56_u: '<number>', f57_j: '<object>', f58_i: '<null>', f59_z: '<array>', f60_f: '<object>', f61_c: '<null>', f62_f: '<null>', f63_u: '<null>', f64_t: '<boolean>', f65_b: '<number>', f66_o: '<array>', f67_c: '<null>', f68_q: '<null>', f69_v: '<null>', f70_u: '<null>', f71_p: '<null>', f72_s: '<null>', f73_c: '<number>', f74_t: '<string>', f75_q: '<array>', f76_d: '<string>', f77_b: '<null>', f78_m: '<string>', f79_c: '<array>', f80_u: '<array>', f81_o: '<array>', f82_n: '<boolean>', f83_z: '<array>', f84_x: '<object>', f85_p: '<boolean>', f86_f: '<boolean>', f87_t: '<array>', f88_b: '<array>', f89_f: '<array>', f90_r: '<object>', f91_c: '<number>', f92_h: '<null>', f93_a: '<number>', f94_y: '<object>', f95_u: '<object>', f96_j: '<null>', f97_a: '<string>', f98_t: '<object>', f99_s: '<null>', f100_e: '<number>', f101_l: '<string>', f102_j: '<boolean>', f103_i: '<array>', f104_u: '<boolean>', f105_s: '<number>', f106_o: '<boolean>', f107_x: '<object>', f108_t: '<string>', f109_k: '<string>', f110_w: '<null>', f111_m: '<number>', f112_h: '<number>', f113_v: '<null>', f114_p: '<array>', f115_w: '<boolean>', f116_c: '<object>'}, 'nyIvNXVCJXkNBEeGDTOTTfPKGewQQpljqsklZJmAowbccEeAwxkjpDugryyomqHnsvLVPpGHNxOkyruEczTizbYzaHQiWnnJEKttsxGaMoaqPrfJHsHLgPwFcIxMLHsGuqIrqAnNiACsrLBDjCREWnFxDjixxcgjOlysYNOrmMhazmSZeeCqHpPvMwAYwPuoGcZERWAQniBOmLEBbCEXjcZhLBAUkkW');
    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('nyIvNXVCJXkNBEeGDTOTTfPKGewQQpljqsklZJmAowbccEeAwxkjpDugryyomqHnsvLVPpGHNxOkyruEczTizbYzaHQiWnnJEKttsxGaMoaqPrfJHsHLgPwFcIxMLHsGuqIrqAnNiACsrLBDjCREWnFxDjixxcgjOlysYNOrmMhazmSZeeCqHpPvMwAYwPuoGcZERWAQniBOmLEBbCEXjcZhLBAUkkW', false);
        count_2 = objectStore_1507.count(KeyRange_16);
    }
    catch (e){
    }

    var index_3 = objectStore_1507.index('index_999');
    var put_6 = objectStore_1507.put({f0_n: '<object>', f1_q: '<string>', f2_k: '<null>', f3_g: '<string>', f4_k: '<string>'}, 'wIRfCEvWShrfQJEtoyXDVJDWQwxaLcuUpOwRInKdOvehcWpCeHNcwkPSPuOBYvQpMOcVvxzbDMZKCXeubupibwzKjukzMDxcStaQFrXrCSyIkpcPhcrWzhGZVfHzFqtFvidDXGZNaYjOnLgvUOaMGgleAMaPpllaLMJKTmYSiyAiZjWVSkpjGSVTbrMHvdxdPgYwaVBmCNcxGdFEdylwoZJAdRYAzOtiwZCihxEDqTeMQQSfFCOUMiiZIQArdAwYUaXlVsFPgwNG');
    var index_4 = objectStore_1507.index('index_999');
    txn_2249.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2249.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2249.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5401')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};