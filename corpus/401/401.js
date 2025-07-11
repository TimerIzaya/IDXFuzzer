let db;
const openRequest = window.indexedDB.open('str_5627', 6774113002708073)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2347', {keypath: 'lWEspQOviNGYdmIqYOLQDVFxHFLIrvyXjhnrCGYUFPKbZodaOIurhSteoGFVOGDebMzELqhBrnXXfhurjqMMFhWpcsQWKAvxeLaIHrlqLXSiNkVKREDHlHuCyJSDlNOqFoAMLTCMslvtixAyLcOZSUxdFHLNsILzvaVBjEsDeobyXDBAPPWuCcQEOktpBwVmjwZNwuMdEREFjIjPhZLOsDrAsaaGrBkVGVhWxHVOWrOMMuvOAcEcnzfvJVXDbxPBTPjckwIroVSQfLhdpuMphxpNObyZaPrBIMNdIGtNgVYoUCVliNPvITqlCQBXExEKPpNEjaoPOuxhGxrbmjWzUhHRfRBwdNWKjoKEHpXDWlCEMrLKwbsAlpgUobhUFySJwWbuIQoQeJFmCfAZKfwCaLnddybJmukqMOnfDumlUQYfaTzHJHVtuoplkhXxbRHdlJkXDDycSXxXHvEHvxtOzqKXSSSRvgzqMTsfotnXjlHHeGakxToClGUXaPjpnVVvnbGTfSdwzAFNULBhemQzBowQerfVAnIHnqmChFLrzTOOHPPYYsLhURNASRjdAeusNeSJwWKRRfZSWMBkHAsanReDvyHqQuSWRqwdgxNyYpZnuWl.WFOJmAwDRDYleWwWUpuvQcJAdVdgfcmgxmWqtLeJUJOCAuFFGfaovmlZWWOqQvhjWyMVeUVTnGsnnrutpygUAToldPzamhEHPcKjKZNWWuMyTEnkGwDuhfSDCoUvjunhNFeQhxlUAZHBPKtlmjVAUKnfzChamaENxnGITAYJynVZkWawNtbdjPrdCBSOTkbWBtsnqIQyXjeYydIjEJCEHPxsHeXEmEIwwJIXhlzOTaOIDreWLjjLxCpqnWYLwZHZsINukjHVdVkqPKvukVYCYJtEjyfswisCyVktoHNOsfwRbbLpMNAEeGOOusvuuOZbiPuyCxuWHfUaQklAKTFrWVqhuwnozxYTjWQWcoITTYtmDUWHrgaeZyrZZNtKOsIZFuekFESLQqQsxZjFeKtlRPpAoLFAlBmHtAbUAyCjLvvKhlTgjxaobJiplkQFNiZkKyIlGIzlHBHanUQcjHUUDCoLEUXcEfKNIwrpERPdmBIdSZnhUamEHnqGDmXeNoPgEUXAOKWNPrJDbMKuGrUITjBXOrNjldwauVyLYCKqRTS.XYmtaLURNMMKBVUQgRfZGHGyXpJUngCueXbTsAydQuMmnSzCChIkqaMzfvtdURotEjxIXtmQBSfErfHcIHPgEMWPXOJUSukCTnsBhVwUkUmEsaQkefirTHumzilmKHfQTZJRsWLqZYItRacGcWdEqAORDLWAITWevitTtBSzCelXKVQNOCbGhPpQejmkDErEkvKrEIKcpTVibTqadOPWAglRvFnVFqlVfrvbLOJjbpBErTZzeMjIGgRwzkHthtFHSeolQqPQdMKNiRreiNCYgDQcqgnRGhZrmyDwQrhoBaktJVmBDrNdAtsnDbsJPZjOjvQwAeZAzRVTsHKBctAASlbYBTeJVdTQwAFJHruEESALUyopgPEkuBUjlUVeqtNAPUMztDZbqmiMRTkmpRRXQytxHNvjpBnODUDGLhFIHbLrzptraACDHoYoiQdEKvZtMTVVvzsnAVIvhPlmKkWMWNRalbqMcNMJixBEmKAxmOETyqRfjEaMvfnGVuzZFbDGtcKSHgalqQccQpIeMoKqHHOeGFkMuPEEQmogROYuLXLbCYmHsNScTmaurbUrdFTFCZFYTgrMOWPPPhndBdiUMeGEuGFrWtLxkZxYXbeXgDMBAzFFjRbPaNGACyFmBXBUfZeiaubhRPXusDlvlrefOkPLnHtcstmgaazIbuSxSoAkhOVWEcHVTKGQqOpWZMAgTadqAjVYWabNGIgqVxODdJyAjZgVChtegbolImPtxKiiKXMBEmMjlASdavcHdEZPOsErSPJkgYSEhPtgXMGpzryvVMDHyHZEzfLGQTSqHwprTXzfRKHeBXWPOPEpvYrJDsakovWXrimykaFCjnXWZJTFXfvVjmJzsDDvfzrffQagu.pCCaEOdvaQlFCdblUHpURIxnUYdYtWKPypYWTyRDNftWaEIkrsrwabXMcXZNvBAvrifyffKnWXxGshgCnMpbAkXjRCBICuONApcMlDsbmiyFNlTbJXrFRTFMYlmatHyLgvnNNRTvIvSTyXGaacmPeLyppUjbwnsOEBjNsbwJwnimVTAQghtPphyjOzBDEdTxWenadxWEqVBjLbzqMxlguCGLxUxf.KLJNMRaCEdimBzTwUCyeambHjhmIOzHwcovHBbZBmUsLXWLKSQIjOJLuTEbfNYLnVsfDeHKEBVLDWwoFXAaOJzInfibaZgmRocBdlBfGhChrEbrtDyqHCzmkNDfGUGfaGdYamNFyZctZhorGKOySOALIxDYEqGOgZEpjQfWQweuBPhsIGYRofkzHRWGTtBXIuYHEjljvyGLcstoStXYsnqZRpjLVPJlhfKnIBrqDAdozIEaMxglxgUNZeYNNkcmqQhlxFQSxJVllPoSppSDztwxLHEjqdaKREfhRRmlumIoiBFCLrpFKrPjEFIcpyXkFtbZictzdcudQirBQstsaCqUvMtZFbjDAWXTeiXLYJxILCbidNPTmjykslgUPmbZUSjFVJiBAAgXoFvCequiiAmfECzuYaawNkETjRAVOMhWWFtYZSpGuvvnYWEAZWiWwsnHjtYOvhjRUKJzgYFTBEPxtCAweunDOjBksUALRsMjpiBRvhySuueSLyrLOH.xjIEFYoOQExXhhXBHKdsiNXByNlUWeAYPlGqklWPusNQgESPeyECTSFrHtwtmAsjgmogtCrxilWqSYGXVEYibmldyIXKhtFtMAGewzoXhLDPxQZEFEBGnyDWfKqPltxQAKkvZkBGFjdWAyPmztNCBKdBXktAwQCgjPSYBBcVhIzrSKcOKLMuHsAuejbebtZBhDMPhRhXlTsQXpNXLnTRwLtsqmIJPzBlJrGbdzGHVyVnhLRjOhCexpHQbsLlUClXQiTxYqkZyoRmXocERxFicsJRtOgFedhZGraDCCtBHREdyvmrSODCJOXhjanhnugVVlFhorxNcyctIGKPQarSjMIsGUHQnNGVcoFhBxAUCOkNXAXyXdXaotvxsnpC'});
    var objectStore_1 = db.createObjectStore('objectStore_2348', {keypath: 'BsgTUCZGDgDfLKuPTpGRqKrOoyrLvuxvYXuPXWOFFBDSefCigPoSaDJivADJKWHtUuLlCoxIJKpeznuxVmhRWUgyMbKOtvcGAsczTjUoLGinLyfnUdBAnbZdGbsRGtISClpWaqCRFsdsVrpDIKoALxLqBWWJbBItqIQuUKSuxdPXkliMFBznjh'});
    var add_0 = objectStore_1.add({f0_z: '<boolean>', f1_j: '<string>', f2_v: '<string>', f3_v: '<boolean>', f4_s: '<boolean>', f5_h: '<number>', f6_o: '<boolean>', f7_e: '<array>', f8_g: '<number>', f9_r: '<array>'}, 'zFVilMhAWIHBgjDDJBrJOxbTAEFEQquybiZihLXanFVtdyxhLFYQzpRGDXMACQzcRhEJrKmRjPDufuqSWGBdTkrGnxsFpSZVptFVHHBOsBJkLEnlMVFxYRkFcXNukFMzRuYYQVdWLZcPbvNsUMvCLatvXDicUyLByyjhDQsujVHcnGzpbeuERZqiOHMeYuMVDRWurHATCTakvaHbypXLduLylFXKUiAyfgOaMEArbCEGlmGkAxoGYUxGRNmDmENobtVKoQPizSSJlLnRqLnwldzUYJnVqckkrgEbbFdULxJWHzCuPlFpzsFXcgyqNvGxrxZsXdkQXrneDGmAMzBHynbRYvUHbTWMXcEZOPXTpbofvdqyBhVzlKvPqConTsniEPYDkPOgvlEhrXjxwTIYIOciKZHujNcoCKsADczolLewpRDkDOthWSQrZEnrJxqKuIHhsaT');
    var add_1 = objectStore_1.add({f0_z: '<array>', f1_f: '<array>', f2_p: '<boolean>', f3_s: '<number>', f4_l: '<string>', f5_o: '<number>', f6_r: '<array>', f7_a: '<string>', f8_a: '<boolean>', f9_l: '<number>'}, 'MuwWMCjjHoVRMlOPMNHkJsyFbxTgfUSkujPSRlBSswFjVOCYklkKRnHafLxZcBdnEeZAxaCpRYhDpbWpmIkhyXGMZyKJkNdHWPVkorMahJWBtBMmMmvwVqgmtIpnWRousMHdkdgmAsaytSkRXBpcuDcfwTBhxVxqDSEPzoJGqkxRMwTACQAUojxZKTgFsDwCHzXhhSrncNarzVPwBsXoeUxclKbSJdUPxYqzGJbqYJmKRCxIxKzneDmYVerklqzpstPMzPVKlGMMwhlbnVRlyMzPtEEYNqvsGObNsJSVwwyeRgrLxqMazwDSToOsjWoawCXqxHjHtXgkqMygvVaNJpiypIqZMWMegqMhCOcXxigSUyEEIuMVKIJwBrzIxRrTnRBoiwoTDcmOSnrfOYAjCTomodIqbzUJokRAVVwbTkXrUFfxWkysPkHLMQYpHqpFxtkqwEbslyCfPDkzZZRwzyMAFJPHnvPhdlsjJruXvZfmXPbXAvoipGaoQjyeOdBCxFpTpGVajGdXCncuQJeJdDZBDYpdIAyoswhKfZaWxoeHSswnsKhcQrnhASpsASmCbZMrtgPVmoamzbTgqZDvwzOongeEMFhBndbNHygszCvcZxRYPvRjOcRgBaSrQYNrTePNeMMmkekufNvwOAZvJxKDEKIzjaiHdZeNIAgDTFADaedqboXjkpcAaDIxhVwUhTuFjlWPxOOIydpbUZkLOBYRGhKNBhwewGvSDybsUBErEKGumPkZLneGnNDzeuBPClBpCIbfxzyUXGlsYJSowjoeyTmfkkLcBPqaANhDmVzYyeFNmeGdJmKRVbfuDkFGLDnbmi');
    var add_2 = objectStore_1.add({f0_y: '<string>', f1_p: '<object>', f2_x: '<null>', f3_d: '<null>', f4_z: '<boolean>', f5_b: '<array>', f6_u: '<array>', f7_w: '<number>', f8_j: '<null>', f9_k: '<string>', f10_o: '<number>', f11_h: '<string>', f12_u: '<array>', f13_q: '<boolean>', f14_r: '<boolean>', f15_o: '<string>', f16_n: '<object>', f17_w: '<null>', f18_q: '<boolean>', f19_t: '<null>', f20_c: '<boolean>', f21_l: '<number>', f22_o: '<null>', f23_b: '<number>', f24_c: '<null>', f25_b: '<boolean>', f26_p: '<array>', f27_s: '<number>', f28_l: '<boolean>', f29_a: '<boolean>', f30_h: '<object>', f31_v: '<boolean>', f32_j: '<null>', f33_c: '<number>', f34_e: '<number>', f35_e: '<boolean>', f36_x: '<null>', f37_g: '<string>', f38_j: '<null>', f39_d: '<null>', f40_f: '<number>', f41_n: '<array>', f42_n: '<array>', f43_g: '<null>', f44_p: '<object>', f45_t: '<string>', f46_c: '<null>', f47_q: '<boolean>', f48_h: '<boolean>', f49_i: '<null>', f50_k: '<string>', f51_c: '<boolean>', f52_q: '<array>', f53_e: '<object>', f54_b: '<number>', f55_r: '<number>', f56_m: '<boolean>', f57_i: '<null>', f58_h: '<null>', f59_d: '<string>', f60_e: '<boolean>', f61_p: '<string>', f62_r: '<array>', f63_q: '<string>', f64_d: '<null>', f65_l: '<string>', f66_g: '<object>', f67_c: '<array>', f68_k: '<number>', f69_e: '<boolean>', f70_z: '<string>', f71_m: '<number>', f72_v: '<boolean>', f73_p: '<string>', f74_d: '<null>', f75_x: '<array>', f76_e: '<number>', f77_h: '<null>', f78_y: '<string>', f79_k: '<null>', f80_g: '<object>', f81_k: '<number>', f82_o: '<object>', f83_l: '<string>', f84_l: '<string>', f85_k: '<object>', f86_a: '<number>', f87_m: '<boolean>', f88_k: '<boolean>', f89_z: '<array>', f90_a: '<number>', f91_t: '<string>', f92_x: '<boolean>', f93_y: '<object>', f94_o: '<number>', f95_c: '<array>', f96_h: '<string>', f97_p: '<number>', f98_a: '<object>', f99_i: '<object>', f100_m: '<number>', f101_l: '<number>', f102_n: '<number>', f103_t: '<object>', f104_p: '<boolean>', f105_l: '<array>', f106_k: '<string>', f107_c: '<boolean>', f108_d: '<null>', f109_v: '<number>', f110_c: '<number>', f111_h: '<array>', f112_v: '<null>', f113_u: '<string>', f114_h: '<boolean>', f115_w: '<null>', f116_g: '<number>', f117_n: '<string>', f118_s: '<null>', f119_l: '<array>', f120_y: '<string>', f121_e: '<null>', f122_l: '<boolean>', f123_b: '<null>', f124_f: '<string>', f125_t: '<object>', f126_u: '<array>', f127_u: '<number>', f128_k: '<null>', f129_t: '<object>', f130_f: '<array>', f131_k: '<boolean>', f132_q: '<object>', f133_r: '<array>', f134_a: '<array>', f135_e: '<object>', f136_k: '<object>', f137_m: '<string>', f138_l: '<null>', f139_p: '<number>', f140_n: '<number>', f141_v: '<string>', f142_h: '<array>', f143_y: '<number>', f144_q: '<boolean>', f145_p: '<null>', f146_m: '<array>', f147_f: '<object>', f148_a: '<object>', f149_f: '<object>', f150_d: '<boolean>', f151_g: '<object>', f152_e: '<object>', f153_x: '<array>', f154_i: '<object>', f155_s: '<boolean>', f156_e: '<null>', f157_e: '<string>', f158_x: '<number>', f159_i: '<array>', f160_z: '<number>', f161_g: '<string>', f162_a: '<boolean>', f163_b: '<object>', f164_p: '<boolean>', f165_s: '<string>', f166_b: '<string>', f167_h: '<object>', f168_i: '<null>', f169_s: '<string>', f170_j: '<number>', f171_g: '<null>', f172_c: '<string>', f173_m: '<object>', f174_a: '<array>', f175_v: '<boolean>', f176_p: '<array>', f177_y: '<string>', f178_j: '<string>', f179_g: '<string>', f180_i: '<number>', f181_c: '<null>', f182_i: '<number>', f183_m: '<object>', f184_p: '<boolean>', f185_y: '<object>', f186_y: '<array>', f187_h: '<object>', f188_p: '<object>', f189_a: '<number>', f190_d: '<number>', f191_x: '<array>', f192_t: '<string>', f193_d: '<null>', f194_q: '<boolean>', f195_q: '<boolean>', f196_w: '<null>', f197_q: '<string>', f198_w: '<array>', f199_w: '<boolean>', f200_d: '<string>', f201_c: '<boolean>', f202_f: '<number>', f203_g: '<null>', f204_n: '<null>', f205_h: '<array>', f206_p: '<string>', f207_l: '<null>', f208_a: '<number>', f209_t: '<object>', f210_c: '<null>', f211_t: '<string>', f212_e: '<array>', f213_k: '<number>', f214_d: '<null>', f215_x: '<string>', f216_u: '<object>', f217_s: '<array>', f218_o: '<number>', f219_b: '<object>', f220_h: '<string>', f221_b: '<array>', f222_a: '<string>', f223_z: '<number>', f224_n: '<boolean>', f225_c: '<string>', f226_q: '<number>', f227_d: '<number>', f228_e: '<array>', f229_s: '<number>', f230_y: '<boolean>', f231_d: '<string>', f232_p: '<number>', f233_k: '<null>', f234_b: '<array>', f235_t: '<object>', f236_b: '<null>', f237_p: '<string>', f238_q: '<array>', f239_n: '<array>', f240_g: '<boolean>', f241_l: '<object>', f242_c: '<null>', f243_i: '<string>', f244_o: '<null>', f245_p: '<string>', f246_d: '<array>', f247_a: '<boolean>', f248_l: '<boolean>', f249_s: '<object>', f250_p: '<null>', f251_b: '<string>', f252_s: '<object>', f253_z: '<null>', f254_s: '<string>', f255_y: '<number>', f256_n: '<string>', f257_e: '<string>', f258_t: '<null>', f259_f: '<boolean>', f260_z: '<null>', f261_r: '<boolean>', f262_t: '<boolean>', f263_n: '<array>', f264_y: '<string>', f265_l: '<string>', f266_f: '<array>', f267_x: '<object>', f268_a: '<string>', f269_a: '<null>', f270_s: '<number>', f271_l: '<array>', f272_o: '<null>', f273_q: '<boolean>', f274_y: '<object>', f275_m: '<array>', f276_f: '<boolean>', f277_m: '<array>', f278_k: '<array>', f279_z: '<number>', f280_d: '<array>', f281_s: '<string>', f282_d: '<string>', f283_z: '<boolean>', f284_r: '<number>', f285_f: '<null>', f286_o: '<number>', f287_j: '<number>', f288_d: '<array>', f289_i: '<array>', f290_i: '<array>', f291_m: '<number>', f292_a: '<string>', f293_l: '<object>', f294_d: '<string>', f295_d: '<number>', f296_x: '<number>', f297_g: '<array>', f298_i: '<boolean>', f299_h: '<array>', f300_y: '<number>', f301_d: '<array>', f302_p: '<array>', f303_t: '<array>', f304_t: '<boolean>', f305_v: '<number>', f306_e: '<number>', f307_f: '<null>', f308_z: '<string>', f309_a: '<number>', f310_o: '<array>', f311_h: '<array>', f312_q: '<boolean>', f313_b: '<object>', f314_z: '<boolean>', f315_l: '<object>', f316_p: '<array>', f317_q: '<object>', f318_l: '<object>', f319_m: '<object>', f320_t: '<string>', f321_q: '<array>', f322_e: '<null>', f323_e: '<number>', f324_d: '<string>', f325_y: '<string>', f326_m: '<array>', f327_s: '<boolean>', f328_j: '<number>', f329_o: '<string>', f330_y: '<object>', f331_e: '<number>', f332_q: '<string>', f333_c: '<string>', f334_d: '<null>', f335_f: '<object>', f336_x: '<number>', f337_i: '<string>', f338_o: '<array>', f339_a: '<string>', f340_w: '<number>', f341_x: '<string>', f342_b: '<object>', f343_t: '<array>', f344_b: '<array>', f345_r: '<null>', f346_f: '<boolean>', f347_x: '<null>', f348_t: '<null>', f349_c: '<null>', f350_o: '<boolean>', f351_d: '<boolean>', f352_t: '<number>', f353_y: '<number>', f354_b: '<number>', f355_g: '<string>', f356_g: '<null>', f357_m: '<string>', f358_d: '<number>', f359_m: '<number>', f360_b: '<string>', f361_p: '<null>', f362_r: '<boolean>', f363_k: '<array>', f364_e: '<string>', f365_z: '<object>', f366_q: '<number>', f367_z: '<string>', f368_g: '<object>', f369_e: '<null>', f370_q: '<object>', f371_b: '<number>', f372_d: '<boolean>', f373_h: '<boolean>', f374_y: '<null>', f375_r: '<null>', f376_y: '<string>', f377_h: '<boolean>', f378_t: '<object>', f379_b: '<object>', f380_t: '<boolean>', f381_x: '<boolean>', f382_r: '<number>', f383_v: '<array>', f384_o: '<array>', f385_b: '<null>', f386_p: '<number>', f387_h: '<array>', f388_n: '<number>', f389_a: '<boolean>', f390_h: '<array>', f391_p: '<null>', f392_z: '<object>', f393_g: '<null>', f394_f: '<boolean>', f395_j: '<number>', f396_f: '<boolean>', f397_k: '<boolean>', f398_m: '<object>', f399_h: '<null>', f400_m: '<array>', f401_i: '<null>', f402_o: '<array>', f403_v: '<boolean>', f404_t: '<number>', f405_n: '<boolean>', f406_j: '<boolean>', f407_w: '<array>', f408_c: '<number>', f409_v: '<object>', f410_y: '<array>', f411_s: '<null>', f412_r: '<boolean>', f413_c: '<boolean>', f414_j: '<null>', f415_m: '<object>', f416_z: '<string>', f417_n: '<null>', f418_k: '<object>', f419_s: '<object>', f420_j: '<string>', f421_r: '<array>', f422_g: '<string>', f423_e: '<null>', f424_x: '<string>', f425_p: '<null>', f426_h: '<array>', f427_z: '<boolean>', f428_q: '<string>', f429_z: '<null>', f430_s: '<string>', f431_z: '<string>', f432_k: '<object>', f433_x: '<number>', f434_l: '<object>', f435_e: '<object>', f436_v: '<array>', f437_u: '<object>', f438_o: '<string>', f439_a: '<string>', f440_a: '<boolean>', f441_z: '<null>', f442_h: '<boolean>', f443_c: '<array>', f444_f: '<null>', f445_y: '<string>', f446_x: '<null>', f447_t: '<object>', f448_k: '<array>', f449_r: '<string>', f450_m: '<number>', f451_i: '<null>', f452_j: '<number>', f453_j: '<string>', f454_b: '<boolean>', f455_d: '<array>', f456_q: '<boolean>', f457_j: '<null>', f458_g: '<array>', f459_q: '<number>', f460_b: '<boolean>', f461_j: '<array>', f462_e: '<boolean>', f463_z: '<null>', f464_k: '<number>', f465_r: '<null>', f466_s: '<boolean>', f467_m: '<array>', f468_a: '<boolean>', f469_f: '<null>', f470_i: '<number>', f471_x: '<object>', f472_s: '<number>', f473_y: '<array>', f474_o: '<string>', f475_s: '<string>', f476_v: '<object>', f477_t: '<null>', f478_i: '<null>', f479_o: '<string>', f480_x: '<boolean>', f481_d: '<number>', f482_x: '<number>', f483_m: '<string>', f484_f: '<object>', f485_a: '<null>', f486_y: '<boolean>', f487_d: '<boolean>', f488_q: '<boolean>', f489_h: '<number>', f490_l: '<object>', f491_r: '<number>', f492_k: '<array>', f493_a: '<number>', f494_t: '<boolean>', f495_s: '<number>', f496_t: '<object>', f497_x: '<null>', f498_j: '<boolean>', f499_g: '<array>'}, 'pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', true);
        getAll_0 = objectStore_1.getAll(KeyRange_0, 3523489617);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk');
        getAll_0 = objectStore_1.getAll(KeyRange_1);
    }

    var count_0 = objectStore_1.count();
    var put_0 = objectStore_1.put({f0_z: '<null>', f1_l: '<number>', f2_a: '<boolean>', f3_i: '<array>', f4_n: '<boolean>', f5_d: '<string>', f6_q: '<null>', f7_x: '<array>'}, 'LEWbhLlvujFbJpeTraXYlzZkYAHJTFwaeRjjMtYkuekcBzAwChdhIKqZbZvGambISrmRNEiqWeyPgLntGARfAAypPvnaYAqPpllDqq');
    var objectStore_2 = db.createObjectStore('objectStore_2349', {autoIncrement: false});
    var getAllKeys_0 = objectStore_1.getAllKeys();
    var objectStore_3 = db.createObjectStore('objectStore_2350');
    var getAllKeys_1 = objectStore_1.getAllKeys();
    var index_1548 = objectStore_1.createIndex('index_1548', 'test', {unique: false, multiEntry: true});
    var getAll_1 = objectStore_1.getAll(378148072);
    var clear_0 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3510 = db.transaction(['objectStore_2349', 'objectStore_2348', 'objectStore_2350'], 'readwrite', {durability:"strict"})
    var objectStore_2348 = txn_3510.objectStore('objectStore_2348');
    var clear_1 = objectStore_2348.clear();
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('LEWbhLlvujFbJpeTraXYlzZkYAHJTFwaeRjjMtYkuekcBzAwChdhIKqZbZvGambISrmRNEiqWeyPgLntGARfAAypPvnaYAqPpllDqq', 'MuwWMCjjHoVRMlOPMNHkJsyFbxTgfUSkujPSRlBSswFjVOCYklkKRnHafLxZcBdnEeZAxaCpRYhDpbWpmIkhyXGMZyKJkNdHWPVkorMahJWBtBMmMmvwVqgmtIpnWRousMHdkdgmAsaytSkRXBpcuDcfwTBhxVxqDSEPzoJGqkxRMwTACQAUojxZKTgFsDwCHzXhhSrncNarzVPwBsXoeUxclKbSJdUPxYqzGJbqYJmKRCxIxKzneDmYVerklqzpstPMzPVKlGMMwhlbnVRlyMzPtEEYNqvsGObNsJSVwwyeRgrLxqMazwDSToOsjWoawCXqxHjHtXgkqMygvVaNJpiypIqZMWMegqMhCOcXxigSUyEEIuMVKIJwBrzIxRrTnRBoiwoTDcmOSnrfOYAjCTomodIqbzUJokRAVVwbTkXrUFfxWkysPkHLMQYpHqpFxtkqwEbslyCfPDkzZZRwzyMAFJPHnvPhdlsjJruXvZfmXPbXAvoipGaoQjyeOdBCxFpTpGVajGdXCncuQJeJdDZBDYpdIAyoswhKfZaWxoeHSswnsKhcQrnhASpsASmCbZMrtgPVmoamzbTgqZDvwzOongeEMFhBndbNHygszCvcZxRYPvRjOcRgBaSrQYNrTePNeMMmkekufNvwOAZvJxKDEKIzjaiHdZeNIAgDTFADaedqboXjkpcAaDIxhVwUhTuFjlWPxOOIydpbUZkLOBYRGhKNBhwewGvSDybsUBErEKGumPkZLneGnNDzeuBPClBpCIbfxzyUXGlsYJSowjoeyTmfkkLcBPqaANhDmVzYyeFNmeGdJmKRVbfuDkFGLDnbmi', true, false);
        get_0 = objectStore_2348.get(KeyRange_2);
    }
    catch (e){
    }

    var index_0 = objectStore_2348.index('index_1548');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('zFVilMhAWIHBgjDDJBrJOxbTAEFEQquybiZihLXanFVtdyxhLFYQzpRGDXMACQzcRhEJrKmRjPDufuqSWGBdTkrGnxsFpSZVptFVHHBOsBJkLEnlMVFxYRkFcXNukFMzRuYYQVdWLZcPbvNsUMvCLatvXDicUyLByyjhDQsujVHcnGzpbeuERZqiOHMeYuMVDRWurHATCTakvaHbypXLduLylFXKUiAyfgOaMEArbCEGlmGkAxoGYUxGRNmDmENobtVKoQPizSSJlLnRqLnwldzUYJnVqckkrgEbbFdULxJWHzCuPlFpzsFXcgyqNvGxrxZsXdkQXrneDGmAMzBHynbRYvUHbTWMXcEZOPXTpbofvdqyBhVzlKvPqConTsniEPYDkPOgvlEhrXjxwTIYIOciKZHujNcoCKsADczolLewpRDkDOthWSQrZEnrJxqKuIHhsaT', true);
        get_1 = objectStore_2348.get(KeyRange_4);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('zFVilMhAWIHBgjDDJBrJOxbTAEFEQquybiZihLXanFVtdyxhLFYQzpRGDXMACQzcRhEJrKmRjPDufuqSWGBdTkrGnxsFpSZVptFVHHBOsBJkLEnlMVFxYRkFcXNukFMzRuYYQVdWLZcPbvNsUMvCLatvXDicUyLByyjhDQsujVHcnGzpbeuERZqiOHMeYuMVDRWurHATCTakvaHbypXLduLylFXKUiAyfgOaMEArbCEGlmGkAxoGYUxGRNmDmENobtVKoQPizSSJlLnRqLnwldzUYJnVqckkrgEbbFdULxJWHzCuPlFpzsFXcgyqNvGxrxZsXdkQXrneDGmAMzBHynbRYvUHbTWMXcEZOPXTpbofvdqyBhVzlKvPqConTsniEPYDkPOgvlEhrXjxwTIYIOciKZHujNcoCKsADczolLewpRDkDOthWSQrZEnrJxqKuIHhsaT', true);
        count_1 = objectStore_2348.count(KeyRange_6);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', false);
        delete_0 = objectStore_2348.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('MuwWMCjjHoVRMlOPMNHkJsyFbxTgfUSkujPSRlBSswFjVOCYklkKRnHafLxZcBdnEeZAxaCpRYhDpbWpmIkhyXGMZyKJkNdHWPVkorMahJWBtBMmMmvwVqgmtIpnWRousMHdkdgmAsaytSkRXBpcuDcfwTBhxVxqDSEPzoJGqkxRMwTACQAUojxZKTgFsDwCHzXhhSrncNarzVPwBsXoeUxclKbSJdUPxYqzGJbqYJmKRCxIxKzneDmYVerklqzpstPMzPVKlGMMwhlbnVRlyMzPtEEYNqvsGObNsJSVwwyeRgrLxqMazwDSToOsjWoawCXqxHjHtXgkqMygvVaNJpiypIqZMWMegqMhCOcXxigSUyEEIuMVKIJwBrzIxRrTnRBoiwoTDcmOSnrfOYAjCTomodIqbzUJokRAVVwbTkXrUFfxWkysPkHLMQYpHqpFxtkqwEbslyCfPDkzZZRwzyMAFJPHnvPhdlsjJruXvZfmXPbXAvoipGaoQjyeOdBCxFpTpGVajGdXCncuQJeJdDZBDYpdIAyoswhKfZaWxoeHSswnsKhcQrnhASpsASmCbZMrtgPVmoamzbTgqZDvwzOongeEMFhBndbNHygszCvcZxRYPvRjOcRgBaSrQYNrTePNeMMmkekufNvwOAZvJxKDEKIzjaiHdZeNIAgDTFADaedqboXjkpcAaDIxhVwUhTuFjlWPxOOIydpbUZkLOBYRGhKNBhwewGvSDybsUBErEKGumPkZLneGnNDzeuBPClBpCIbfxzyUXGlsYJSowjoeyTmfkkLcBPqaANhDmVzYyeFNmeGdJmKRVbfuDkFGLDnbmi', false);
        get_2 = objectStore_2348.get(KeyRange_10);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', 'pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', false, true);
        delete_1 = objectStore_2348.delete(KeyRange_12);
    }
    catch (e){
    }

    var clear_2 = objectStore_2348.clear();
    var add_3 = objectStore_2348.add({f0_l: '<object>', f1_u: '<null>', f2_o: '<null>', f3_f: '<string>', f4_a: '<boolean>', f5_c: '<number>', f6_a: '<string>', f7_b: '<number>', f8_a: '<boolean>', f9_w: '<boolean>', f10_q: '<array>', f11_x: '<null>', f12_m: '<object>', f13_j: '<null>', f14_u: '<array>', f15_t: '<number>', f16_g: '<boolean>', f17_u: '<object>', f18_n: '<string>', f19_w: '<object>', f20_b: '<null>', f21_g: '<null>', f22_f: '<array>', f23_h: '<null>', f24_o: '<number>', f25_b: '<boolean>', f26_r: '<string>', f27_b: '<number>', f28_x: '<array>', f29_p: '<object>', f30_a: '<null>', f31_r: '<null>', f32_v: '<array>', f33_d: '<array>', f34_h: '<array>', f35_b: '<object>', f36_h: '<null>', f37_t: '<boolean>', f38_f: '<string>', f39_p: '<null>', f40_c: '<number>', f41_w: '<null>', f42_o: '<boolean>', f43_i: '<null>', f44_c: '<string>', f45_o: '<null>', f46_z: '<number>', f47_b: '<object>', f48_a: '<number>', f49_u: '<boolean>', f50_d: '<boolean>', f51_l: '<boolean>', f52_j: '<array>', f53_b: '<array>', f54_y: '<array>', f55_p: '<number>', f56_o: '<boolean>', f57_t: '<string>', f58_k: '<string>', f59_b: '<boolean>', f60_e: '<object>', f61_c: '<boolean>', f62_x: '<null>', f63_z: '<array>', f64_k: '<null>', f65_x: '<boolean>', f66_x: '<number>', f67_m: '<object>', f68_b: '<array>', f69_c: '<string>', f70_p: '<string>', f71_w: '<boolean>', f72_o: '<null>', f73_x: '<number>', f74_e: '<boolean>', f75_i: '<string>', f76_m: '<null>', f77_r: '<number>', f78_v: '<number>', f79_p: '<null>', f80_i: '<string>', f81_r: '<object>', f82_c: '<boolean>', f83_c: '<number>', f84_v: '<null>', f85_e: '<string>', f86_p: '<boolean>', f87_c: '<number>', f88_b: '<array>', f89_r: '<string>', f90_h: '<boolean>', f91_q: '<boolean>', f92_d: '<object>', f93_a: '<array>', f94_q: '<object>', f95_b: '<boolean>', f96_c: '<string>', f97_w: '<null>', f98_v: '<boolean>', f99_l: '<number>', f100_l: '<null>', f101_a: '<string>', f102_b: '<null>', f103_a: '<null>', f104_y: '<string>', f105_l: '<boolean>', f106_g: '<string>', f107_j: '<number>', f108_h: '<boolean>', f109_r: '<boolean>', f110_k: '<string>', f111_z: '<object>', f112_j: '<number>', f113_n: '<object>', f114_a: '<array>', f115_f: '<number>', f116_x: '<number>', f117_q: '<null>', f118_m: '<number>', f119_u: '<object>'}, 'uyyboBveGjvtqXYrWmMepMezZOaBZoROAamWVexlAuGyQfNeunGAUAlpbKbfskFoDpqRYAPJowFxoMfYrhToWCmHkUbIzWxacbwpwMUXkaidfQXabQHxjNBCAlOhmTvyBXUOuZjjKMdstqpeMaUgMbWSkkHCYzVDtbiRYBDXrSrtCkLHoklztRtNwUybGCEztKeoZAdBQrygZzYDGXmYeiOcudxPxatIZSeDoEpgmTiOzHiAkaEDthChxjJCGUAAvIpafzvOIqPVwVyfJShavprSdByzFIDdQCrDZdHVNcnisllUySOOQPMKRZkVMFXVFLTHhWNzQPtPqLgkdbrpDcmPPrANgMCySSuNnSgxuEtGMUEZIxatrfzsvXZhsMBPyjDXzPGSOczhHDrskBwJSivTiHVkgIaANNrFReDqMkbsNqlRHoMsuOzWjcNVPqqkcNwpMAsFcwUKzzxzbVaFVGApJpKmtxegdObigKRWFFKlPAsiWoNUAkhlsCDFsMACTHeBqRSSbnUEwLnNktojjhpmtOVBmkHiMpdIxduAjTOSyUDEaceqswqZDnPJZlBbNvvavfeByHPitLqiRBlVAbmBcXCRZQIIwEBOvjqWNExwdmWZfxpHuphiuuntblljvziThzGLxtTABA');
    var getAll_2 = objectStore_2348.getAll(2511127783);
    txn_3510.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3510.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3510.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3511 = db.transaction(['objectStore_2348'], 'readonly', {durability:"default"})
    var objectStore_2348 = txn_3511.objectStore('objectStore_2348');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', false);
        get_3 = objectStore_2348.get(KeyRange_14);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('zFVilMhAWIHBgjDDJBrJOxbTAEFEQquybiZihLXanFVtdyxhLFYQzpRGDXMACQzcRhEJrKmRjPDufuqSWGBdTkrGnxsFpSZVptFVHHBOsBJkLEnlMVFxYRkFcXNukFMzRuYYQVdWLZcPbvNsUMvCLatvXDicUyLByyjhDQsujVHcnGzpbeuERZqiOHMeYuMVDRWurHATCTakvaHbypXLduLylFXKUiAyfgOaMEArbCEGlmGkAxoGYUxGRNmDmENobtVKoQPizSSJlLnRqLnwldzUYJnVqckkrgEbbFdULxJWHzCuPlFpzsFXcgyqNvGxrxZsXdkQXrneDGmAMzBHynbRYvUHbTWMXcEZOPXTpbofvdqyBhVzlKvPqConTsniEPYDkPOgvlEhrXjxwTIYIOciKZHujNcoCKsADczolLewpRDkDOthWSQrZEnrJxqKuIHhsaT', true);
        get_4 = objectStore_2348.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_3 = objectStore_2348.getAll(2308567466);
    var getAll_4 = objectStore_2348.getAll(2728149893);
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.only('uyyboBveGjvtqXYrWmMepMezZOaBZoROAamWVexlAuGyQfNeunGAUAlpbKbfskFoDpqRYAPJowFxoMfYrhToWCmHkUbIzWxacbwpwMUXkaidfQXabQHxjNBCAlOhmTvyBXUOuZjjKMdstqpeMaUgMbWSkkHCYzVDtbiRYBDXrSrtCkLHoklztRtNwUybGCEztKeoZAdBQrygZzYDGXmYeiOcudxPxatIZSeDoEpgmTiOzHiAkaEDthChxjJCGUAAvIpafzvOIqPVwVyfJShavprSdByzFIDdQCrDZdHVNcnisllUySOOQPMKRZkVMFXVFLTHhWNzQPtPqLgkdbrpDcmPPrANgMCySSuNnSgxuEtGMUEZIxatrfzsvXZhsMBPyjDXzPGSOczhHDrskBwJSivTiHVkgIaANNrFReDqMkbsNqlRHoMsuOzWjcNVPqqkcNwpMAsFcwUKzzxzbVaFVGApJpKmtxegdObigKRWFFKlPAsiWoNUAkhlsCDFsMACTHeBqRSSbnUEwLnNktojjhpmtOVBmkHiMpdIxduAjTOSyUDEaceqswqZDnPJZlBbNvvavfeByHPitLqiRBlVAbmBcXCRZQIIwEBOvjqWNExwdmWZfxpHuphiuuntblljvziThzGLxtTABA');
        get_5 = objectStore_2348.get(KeyRange_18);
    }
    catch (e){
    }

    var index_1 = objectStore_2348.index('index_1548');
    txn_3511.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3511.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3511.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3512 = db.transaction(['objectStore_2348'], 'readwrite', {durability:"strict"})
    var objectStore_2348 = txn_3512.objectStore('objectStore_2348');
    var clear_3 = objectStore_2348.clear();
    var clear_4 = objectStore_2348.clear();
    var index_2 = objectStore_2348.index('index_1548');
    var count_2 = objectStore_2348.count();
    var clear_5 = objectStore_2348.clear();
    var getAllKeys_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('zFVilMhAWIHBgjDDJBrJOxbTAEFEQquybiZihLXanFVtdyxhLFYQzpRGDXMACQzcRhEJrKmRjPDufuqSWGBdTkrGnxsFpSZVptFVHHBOsBJkLEnlMVFxYRkFcXNukFMzRuYYQVdWLZcPbvNsUMvCLatvXDicUyLByyjhDQsujVHcnGzpbeuERZqiOHMeYuMVDRWurHATCTakvaHbypXLduLylFXKUiAyfgOaMEArbCEGlmGkAxoGYUxGRNmDmENobtVKoQPizSSJlLnRqLnwldzUYJnVqckkrgEbbFdULxJWHzCuPlFpzsFXcgyqNvGxrxZsXdkQXrneDGmAMzBHynbRYvUHbTWMXcEZOPXTpbofvdqyBhVzlKvPqConTsniEPYDkPOgvlEhrXjxwTIYIOciKZHujNcoCKsADczolLewpRDkDOthWSQrZEnrJxqKuIHhsaT', 'pKsMuiWDERxFerOBoDJLiFrdsoCsEaUiIPacrBmxIXpuFAZRtRcbGnfcNoCLjmqbqzAXtlDXBQYsZgdlaISSbKOLPgHpMrmtNewTHkbxwBgngChrhzGNQEszzMkHlLDKZJZOfFBDvbMUQkEdictYkpNnOMOAnSgXxlCpBoiJvoVPGdrAILauNUnrYCCyznpaBdTTTKqk', true, true);
        getAllKeys_2 = objectStore_2348.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('LEWbhLlvujFbJpeTraXYlzZkYAHJTFwaeRjjMtYkuekcBzAwChdhIKqZbZvGambISrmRNEiqWeyPgLntGARfAAypPvnaYAqPpllDqq');
        getAllKeys_2 = objectStore_2348.getAllKeys(KeyRange_21);
    }

    var add_4 = objectStore_2348.add({f0_j: '<null>', f1_q: '<null>', f2_n: '<null>', f3_y: '<string>', f4_e: '<string>'}, 'wIvVyWWAxUTxhOacvzSyPyDUqtwkfeRosHnMPHGgCOQVGoPwDUhYbYnkcSrwmVwAjkGlbRqKVGoYmSdSuRUzvloXpDmtZMWllPFMrdExyMLmcRsPyQzTwarchlGWuDTDsQrNTPDuEtKUqQJCLYgRiZgxbXTDNBslIjyvhttHptuaUFINOsqfRhMuIZnckBruAlutWkwrDgzjBCdxKFwGutzKuztnyabHtYosGMJzdnlhtpcLSAevUTsfZdkGoqZKltOHGRpJdBMIipkclFyKuUjoHSUcQdsGtRTsAapsbwmMAWvtFHYSFoXgIXYokfwEuemEdLeiuvotKomrADpEeGiVhtLFlojaLauCAnxCPSodfKAWaxMDipXztbpspwYrCdtRHJfxZtTHfQrmTaFOptCZoYZvxyRzhvAEiciVIKXkkqjvzccWdmHLUTbijNtATTeATPeVQrIpCeCNCcCcRGStvcUrKhzbczPLlvZQWgXKNRxueeRkQONftYvouAQpVEkOEpgkKrhBgFpmSyyzQDhycEudAUQnAnaPtKUelIRDTaGAHhDfOugncfRruHXqQLOZUAfmDZfzGvXcXSEGetJoXvlVoCHmsgIGLXsBFyamhbeUsqsURhMhxPFoTrbSMoUwKmHheQSPDDXxlOLuolRqNTqZUoBuMLXWVHAYIMvhzXSucOftjrywwwaPlzWAzhXTQiHpUiJInsFEvSoYNVhZDlZFZQlrSfxKKVSfZIGXjRWblgAKKlsMLhweNoaKBxamBlBDgpSWwsvyBgfDamGRdSvdQCbGXbDdmcrOHWHuxnskjLCZkhVlXVqlzCYldWvTAvhuOzqYRSrPFizenxUkWeTtwyHvGvvBoEwJfmHZmXeUAwhDMHcCIlDFyJJNoPfmRsFUwFkQGZdlbbZdRvpWctgHuuBTYbokDGruZBmJOzfzHCYonlNH');
    var count_3 = objectStore_2348.count();
    var clear_6 = objectStore_2348.clear();
    var add_5 = objectStore_2348.add({f0_f: '<string>', f1_g: '<string>', f2_m: '<array>', f3_t: '<array>'}, 'ETJWkYcCHHjxUsJYclPIpGabHRAjJdLHFvqYRTQYzAaoSgbTGpzAIMczncETiOTDfLrSiPqzrVDhJacEHJYLccqoJzLNEwDpHEiuVfxkBkyLIrHAEhGpXwVpSvQTFxkWdaYFUBHdYCYJMYSMKkAFavYIECPKUVAvbkZyWHpR');
    var getAllKeys_3 = objectStore_2348.getAllKeys();
    txn_3512.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3512.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3512.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3513 = db.transaction(['objectStore_2347'], 'readonly', {durability:"default"})
    var objectStore_2347 = txn_3513.objectStore('objectStore_2347');
    txn_3513.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3513.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3513.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3514 = db.transaction(['objectStore_2350'], 'readonly', {durability:"relaxed"})
    var objectStore_2350 = txn_3514.objectStore('objectStore_2350');
    txn_3514.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3514.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3514.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2007')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};