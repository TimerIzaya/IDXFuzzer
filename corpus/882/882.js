let db;
const openRequest = window.indexedDB.open('str_3533', 5675925337825922)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5259', {autoIncrement: false});
    var index_3525 = objectStore_0.createIndex('index_3525', 'test', {unique: false});
    var clear_0 = objectStore_0.clear();
    objectStore_0.deleteIndex('index_3525')
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_5260', {keypath: 'jyKcCGnHusefCUwkpbiSQoPIKwdLXJUigfqgxarnTzyvRyLQXlCNOtyfwKvYlOXyTFyqMAwXwjadWuMhsqDxfzpKDqLCskSAEhebHmNseCAbMXGiMGaTHXECfIFHJXXfakZYKRquqRPypydASySIxBsjgcnxgcYenYvAIscspNMFzVlyEFYRqtOEXtWLOAHZlcTjsAZwupjFrTJwBQpVJuDCPNIAxUVaIBOSUdYKcKkxWpQMvbzVQUhzjXpuZYbRHJbHVydUYnCPtGsIWYCJIkFORxIiNPiunfqGMmnXRIhKIsGuPOdiENjbcJLRJjSTbeDsXgHEHYRjqsp', autoIncrement: false});
    var put_0 = objectStore_1.put({f0_w: '<null>', f1_r: '<object>'}, 'QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao');
    var add_0 = objectStore_1.add({f0_b: '<null>', f1_o: '<number>'}, 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW');
    var index_3526 = objectStore_0.createIndex('index_3526', 'test', {multiEntry: false});
    var put_1 = objectStore_1.put({f0_z: '<array>', f1_l: '<null>', f2_w: '<array>', f3_p: '<object>', f4_t: '<array>', f5_d: '<boolean>', f6_v: '<null>', f7_v: '<string>', f8_f: '<object>', f9_k: '<string>', f10_q: '<array>', f11_y: '<null>', f12_a: '<object>', f13_x: '<boolean>', f14_u: '<boolean>', f15_m: '<array>', f16_q: '<object>', f17_f: '<boolean>', f18_m: '<number>', f19_r: '<number>', f20_j: '<array>', f21_l: '<string>', f22_k: '<array>', f23_x: '<null>', f24_i: '<null>', f25_e: '<string>', f26_f: '<null>', f27_m: '<boolean>', f28_h: '<null>', f29_p: '<object>', f30_a: '<number>', f31_a: '<boolean>', f32_k: '<string>', f33_w: '<boolean>', f34_e: '<string>', f35_v: '<object>', f36_y: '<string>', f37_d: '<object>', f38_q: '<boolean>', f39_q: '<object>', f40_y: '<boolean>', f41_i: '<object>', f42_g: '<array>', f43_j: '<number>', f44_e: '<array>', f45_t: '<boolean>', f46_h: '<string>', f47_v: '<string>', f48_q: '<number>', f49_v: '<boolean>', f50_r: '<number>', f51_s: '<null>', f52_i: '<null>', f53_x: '<null>', f54_c: '<object>', f55_p: '<string>', f56_o: '<boolean>', f57_g: '<number>', f58_v: '<boolean>', f59_c: '<array>', f60_n: '<array>', f61_q: '<boolean>', f62_t: '<string>', f63_n: '<null>', f64_t: '<null>', f65_q: '<array>', f66_v: '<array>', f67_m: '<object>', f68_w: '<number>', f69_u: '<string>', f70_z: '<boolean>', f71_k: '<null>', f72_o: '<object>', f73_o: '<array>', f74_i: '<number>', f75_d: '<string>', f76_v: '<array>', f77_u: '<string>', f78_x: '<number>', f79_f: '<null>', f80_a: '<string>', f81_j: '<string>', f82_b: '<array>', f83_b: '<string>', f84_w: '<string>', f85_h: '<string>', f86_b: '<null>', f87_u: '<array>', f88_q: '<object>', f89_k: '<boolean>', f90_a: '<number>', f91_p: '<string>', f92_q: '<boolean>', f93_z: '<array>', f94_t: '<boolean>', f95_j: '<boolean>', f96_r: '<array>', f97_v: '<array>', f98_w: '<object>', f99_g: '<boolean>', f100_l: '<object>', f101_n: '<null>', f102_e: '<string>', f103_u: '<number>', f104_x: '<number>', f105_n: '<null>', f106_o: '<boolean>', f107_w: '<number>', f108_p: '<boolean>', f109_z: '<null>', f110_c: '<array>', f111_i: '<boolean>', f112_c: '<null>', f113_n: '<boolean>', f114_f: '<null>', f115_q: '<number>', f116_w: '<array>', f117_m: '<number>', f118_t: '<boolean>', f119_y: '<boolean>', f120_w: '<object>', f121_s: '<number>', f122_x: '<array>', f123_g: '<object>', f124_r: '<null>', f125_e: '<array>', f126_b: '<array>', f127_v: '<object>', f128_q: '<string>', f129_f: '<array>', f130_d: '<array>', f131_n: '<boolean>', f132_n: '<string>', f133_c: '<null>', f134_l: '<string>', f135_e: '<number>', f136_r: '<array>', f137_o: '<object>', f138_s: '<boolean>', f139_l: '<array>', f140_h: '<object>', f141_z: '<number>', f142_z: '<null>', f143_v: '<number>', f144_x: '<null>', f145_o: '<number>', f146_a: '<null>', f147_g: '<null>', f148_o: '<array>', f149_w: '<number>', f150_e: '<object>', f151_v: '<array>', f152_t: '<boolean>', f153_s: '<null>', f154_s: '<number>', f155_d: '<array>', f156_b: '<object>', f157_d: '<number>', f158_v: '<object>', f159_s: '<object>', f160_b: '<boolean>', f161_c: '<object>', f162_e: '<array>', f163_x: '<array>', f164_i: '<null>', f165_b: '<null>', f166_k: '<null>', f167_z: '<array>', f168_h: '<null>', f169_a: '<null>', f170_y: '<number>', f171_w: '<array>', f172_m: '<array>', f173_u: '<boolean>', f174_x: '<boolean>', f175_l: '<array>', f176_j: '<null>', f177_m: '<null>', f178_x: '<array>', f179_e: '<number>', f180_g: '<object>', f181_o: '<object>', f182_n: '<boolean>', f183_d: '<null>', f184_q: '<string>', f185_m: '<null>', f186_f: '<boolean>', f187_u: '<null>', f188_x: '<boolean>', f189_i: '<array>', f190_p: '<null>', f191_a: '<array>', f192_b: '<object>', f193_p: '<array>', f194_o: '<array>', f195_d: '<number>', f196_j: '<object>', f197_q: '<array>', f198_f: '<number>', f199_r: '<array>', f200_b: '<null>', f201_y: '<null>', f202_d: '<string>', f203_q: '<string>', f204_o: '<boolean>', f205_b: '<string>', f206_m: '<number>', f207_p: '<object>', f208_y: '<boolean>', f209_u: '<string>', f210_n: '<null>', f211_k: '<boolean>', f212_y: '<null>', f213_d: '<boolean>', f214_o: '<null>', f215_q: '<array>', f216_a: '<null>', f217_j: '<array>', f218_n: '<number>', f219_w: '<number>', f220_c: '<string>', f221_t: '<boolean>', f222_e: '<array>', f223_u: '<boolean>', f224_y: '<null>', f225_o: '<null>', f226_g: '<string>', f227_n: '<string>', f228_u: '<array>', f229_m: '<object>', f230_d: '<object>', f231_v: '<string>', f232_k: '<string>', f233_t: '<array>', f234_v: '<number>', f235_r: '<array>', f236_m: '<boolean>', f237_h: '<null>', f238_o: '<array>', f239_q: '<boolean>', f240_z: '<number>', f241_g: '<null>', f242_j: '<boolean>', f243_s: '<object>', f244_j: '<object>', f245_x: '<number>', f246_g: '<null>', f247_e: '<null>', f248_h: '<number>', f249_n: '<null>', f250_h: '<string>', f251_s: '<string>', f252_w: '<null>', f253_x: '<string>', f254_a: '<array>', f255_l: '<number>', f256_s: '<null>', f257_g: '<null>', f258_g: '<string>', f259_z: '<object>', f260_s: '<null>', f261_v: '<number>', f262_g: '<object>', f263_z: '<number>', f264_o: '<array>', f265_z: '<array>', f266_j: '<string>', f267_f: '<null>', f268_v: '<number>', f269_e: '<null>', f270_b: '<object>', f271_a: '<boolean>', f272_z: '<boolean>', f273_y: '<null>', f274_v: '<boolean>', f275_n: '<array>', f276_n: '<number>', f277_k: '<number>', f278_x: '<string>', f279_i: '<null>', f280_u: '<array>', f281_v: '<object>', f282_a: '<null>', f283_w: '<number>', f284_s: '<object>', f285_s: '<array>', f286_t: '<array>', f287_x: '<boolean>', f288_a: '<string>', f289_h: '<boolean>', f290_j: '<object>', f291_f: '<string>', f292_f: '<string>', f293_c: '<string>', f294_q: '<object>', f295_r: '<number>', f296_y: '<number>', f297_u: '<boolean>', f298_o: '<null>', f299_j: '<null>', f300_v: '<null>', f301_q: '<object>', f302_u: '<boolean>', f303_h: '<boolean>', f304_e: '<array>', f305_x: '<number>', f306_c: '<array>', f307_f: '<null>', f308_t: '<object>', f309_f: '<string>', f310_x: '<boolean>', f311_r: '<number>', f312_x: '<object>', f313_f: '<boolean>', f314_a: '<number>', f315_z: '<boolean>', f316_i: '<boolean>', f317_w: '<boolean>', f318_l: '<boolean>', f319_t: '<number>', f320_b: '<string>', f321_i: '<number>', f322_m: '<array>', f323_k: '<null>', f324_s: '<number>', f325_b: '<object>', f326_z: '<array>', f327_n: '<number>', f328_d: '<boolean>', f329_a: '<string>', f330_t: '<object>', f331_w: '<string>', f332_z: '<string>', f333_t: '<object>', f334_v: '<boolean>', f335_l: '<object>', f336_d: '<string>', f337_k: '<array>', f338_k: '<number>', f339_b: '<string>', f340_i: '<boolean>', f341_j: '<string>', f342_k: '<boolean>', f343_t: '<object>', f344_b: '<array>', f345_m: '<null>', f346_y: '<object>', f347_d: '<object>', f348_y: '<string>', f349_w: '<object>', f350_h: '<number>', f351_p: '<number>', f352_x: '<boolean>', f353_r: '<object>', f354_k: '<number>', f355_p: '<null>', f356_j: '<string>', f357_f: '<array>', f358_y: '<null>', f359_f: '<number>', f360_g: '<string>', f361_y: '<null>', f362_p: '<object>', f363_o: '<boolean>', f364_g: '<string>', f365_b: '<boolean>', f366_r: '<object>', f367_w: '<null>', f368_x: '<null>', f369_g: '<string>', f370_s: '<null>', f371_k: '<array>', f372_j: '<object>', f373_r: '<boolean>', f374_t: '<boolean>', f375_w: '<boolean>', f376_z: '<array>', f377_k: '<string>', f378_i: '<array>', f379_w: '<object>', f380_z: '<boolean>', f381_f: '<boolean>', f382_x: '<number>', f383_g: '<boolean>', f384_p: '<object>', f385_i: '<null>'}, 'xAJathFw');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', true, false);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('xAJathFw');
        delete_0 = objectStore_1.delete(KeyRange_2);
    }
    catch (e){
    }

    var index_3527 = objectStore_1.createIndex('index_3527', 'test', {unique: false, multiEntry: false});
    var put_2 = objectStore_1.put({f0_k: '<string>'}, 'HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7930 = db.transaction(['objectStore_5260', 'objectStore_5259'], 'readonly', {durability:"default"})
    var objectStore_5260 = txn_7930.objectStore('objectStore_5260');
    var index_0 = objectStore_5260.index('index_3527');
    var index_1 = objectStore_5260.index('index_3527');
    var getAllKeys_0 = objectStore_5260.getAllKeys(1311170755);
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', false);
        get_0 = objectStore_5260.get(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd', true);
        get_1 = objectStore_5260.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.only('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW');
        get_2 = objectStore_5260.get(KeyRange_8);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', true, false);
        count_1 = objectStore_5260.count(KeyRange_10);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd', false);
        getAll_0 = objectStore_5260.getAll(KeyRange_12, 1819353138);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('xAJathFw');
        getAll_0 = objectStore_5260.getAll(KeyRange_13);
    }

    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', false, true);
        count_2 = objectStore_5260.count(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', false);
        get_3 = objectStore_5260.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', false, true);
        get_4 = objectStore_5260.get(KeyRange_18);
    }
    catch (e){
    }

    txn_7930.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7930.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7930.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7931 = db.transaction(['objectStore_5260'], 'readwrite', {durability:"relaxed"})
    var objectStore_5260 = txn_7931.objectStore('objectStore_5260');
    var index_2 = objectStore_5260.index('index_3527');
    var clear_2 = objectStore_5260.clear();
    var add_1 = objectStore_5260.add({f0_i: '<boolean>', f1_x: '<null>', f2_j: '<number>', f3_y: '<boolean>', f4_d: '<string>'}, 'wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz');
    var delete_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz', 'NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', false, false);
        delete_1 = objectStore_5260.delete(KeyRange_20);
    }
    catch (e){
    }

    var index_3 = objectStore_5260.index('index_3527');
    var add_2 = objectStore_5260.add({f0_p: '<number>', f1_m: '<object>', f2_z: '<string>', f3_x: '<boolean>'}, 'QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp');
    var clear_3 = objectStore_5260.clear();
    var count_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('xAJathFw', 'wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz', true, true);
        count_3 = objectStore_5260.count(KeyRange_22);
    }
    catch (e){
    }

    txn_7931.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7931.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7931.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7932 = db.transaction(['objectStore_5260'], 'readonly', {durability:"strict"})
    var objectStore_5260 = txn_7932.objectStore('objectStore_5260');
    var count_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', 'QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', false, false);
        count_4 = objectStore_5260.count(KeyRange_24);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp', true);
        count_5 = objectStore_5260.count(KeyRange_26);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_28 = IDBKeyRange.only('QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp');
        count_6 = objectStore_5260.count(KeyRange_28);
    }
    catch (e){
    }

    var index_4 = objectStore_5260.index('index_3527');
    var count_7 = objectStore_5260.count();
    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp', 'QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', false, false);
        get_5 = objectStore_5260.get(KeyRange_30);
    }
    catch (e){
    }

    var count_8 = objectStore_5260.count();
    var getAllKeys_1 = objectStore_5260.getAllKeys(2234093740);
    var count_9;
    try{
        KeyRange_32 = IDBKeyRange.bound('HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd', 'wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz', true, true);
        count_9 = objectStore_5260.count(KeyRange_32);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_34 = IDBKeyRange.only('xAJathFw');
        get_6 = objectStore_5260.get(KeyRange_34);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', 'xAJathFw', false, false);
        get_7 = objectStore_5260.get(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_5260.getAllKeys();
    var count_10;
    try{
        KeyRange_38 = IDBKeyRange.bound('NyrMtktPQzZqhqCNpAHNLbWNoNDeXlAvTCEottVfRzlaDNATaMOAOcHzogqgOtOxEqhnplQVANSGPDwPUrsCLZrWxYKEDUvbSgavjVwejeyuQohJMcEhmjAGpKRVRuCUGygpDXmqTKSUNZmaZKInIefJKynXfQsyjgPpBJZpOTgQekYOLAUYsHiGNZnZhpzkDusPmAjJFRRLOwExaBrRjunZYnetJWbmtRIHilJPXobnBKQhoTqqFiotDwpFFNpTqdKJjvDUnXVJnosqdmCVKlxMymKAxKSTPOzFkWhtgTIICcjHnklSyEmiVpjqJAWnhWEfZAOXZuAlmGtcEfopleVOTbFOIcKncokcRlVfmjsjQPvrXSGfeBuAhAYqDJtETbNxHWcLDsNTuvZGBWQZcKuYJoYCjalJAvClcZYLFhQzPjBpBxINnHifiJQUnpbGCwAXFoWglUgjqBEeUuLeXbqHoqshLJPPJglhWKkapURYEvkMiBebCbCuRXSiwJZBVfShzW', 'QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp', false, true);
        count_10 = objectStore_5260.count(KeyRange_38);
    }
    catch (e){
    }

    var index_5 = objectStore_5260.index('index_3527');
    var index_6 = objectStore_5260.index('index_3527');
    txn_7932.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7932.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7932.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7933 = db.transaction(['objectStore_5260'], 'readonly', {durability:"default"})
    var objectStore_5260 = txn_7933.objectStore('objectStore_5260');
    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', false);
        get_8 = objectStore_5260.get(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.only('HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd');
        get_9 = objectStore_5260.get(KeyRange_42);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_44 = IDBKeyRange.bound('wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz', 'xAJathFw', true, true);
        count_11 = objectStore_5260.count(KeyRange_44);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_46 = IDBKeyRange.bound('xAJathFw', 'HsyOaFLrdBHlUviUuBafqnCKodoUKyKFFZJtnAmWfGRNmUSRAAhFdMNHdlLJnCBpRrxVXxLxBKVlbvMpJLkCffONVpPabBxCkZgunslGd', true, false);
        count_12 = objectStore_5260.count(KeyRange_46);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_48 = IDBKeyRange.only('wsgHCTsNwLzpfaOvcOoEmOYJVBfioDubrggYFVSuxaKQeTtHZUmEbjdlrlQhTzzEaLyNwbKGIROHLwhZOciRCAEbNkXBSJcqLEoMhxgdMVZPAVDtnSvfZCLWKZAwveXyGYvAZkCgeqIiYeVDJTvkSZrwKMGteZiqggxexxiiBoSYNFvMBPQNyEUDOnSGoePHoJCYqhhBCWuHcWsbRcTwvxVRTPlsbETmpguFFwNmaMNYcekePKBULrayYEDhWVWgOYxOrbBFhAQxtqEDgxXBnJwvQQafkWIfogzddxvrecHRlfEGZPBKoDbQosrFCafTFiQZpXjbroKWLlUFZEwbbhiTNpqyUFFYHwEfCbMfbcNkjBrsjBZKhYaYwYPTmNlOGnbKXuHmRVWWkqZkzfXksRFfuPlycfnICpMANZJxLmQQLBGoFkZBRjWptBrVvMDchlyhBqlNSmhEkaGOyvOkuiBrWhviNHykEuCZNCCvEnIijVtngYwrZDyLUgdPcDbzBGInDLzTZSYHPXQnOKIknpUctekzVfAjWNXwMvPJIFIgBZXfghKhFqmBcjdXfzAEOHYeVHrvThLPBtoGcVmAqyFvatcjVtwzRpWKfTlgMSGtMdxiAdLNLNEtMHVdGUBKjgorOMFBccZmnPQOgVbTMGfAGmfTpahZayqCRSKPrDQYGwwgrUcaVNVtMVwGfmNxWXhunlMhSpJfxuOraAZYArbltACFmSSTUqhpwIEvTmlstwwImzkynGtUMfZJgtmVpQutzgJeBsYXwYbqPqyjpNYiDsvZnqoYQvHkJvkKiSXqbipcCbQcSAzLlahWIbblyyYDfearMUQyNGpnMvUMmdwiXnCPOldozz');
        count_13 = objectStore_5260.count(KeyRange_48);
    }
    catch (e){
    }

    var count_14;
    try{
        KeyRange_50 = IDBKeyRange.only('QBcHEQXQOHocykefsuOWlLTOKXklDfrvReQCcAmmIxynrbGdKOFTAFAluVWlhqRXRnqZmHuIciMOLfHOXgvGUkLKKjRHUJKuWandIfHRXVJXDgjrvcTYSyvozbnLLRduaNJIltljNxiAXsagoOWmouMUveIkGxujbTgEfdnUTwMMTxyBXXvOxAworaTirWKdnPBaISlMnyhJLwgVmfhxeIFpKDuozPpXYkCwAHsSrfbMFmqSdNcfCjMMcVfNoaOPUAXTAEAJLvLjwDgaPFmaaZPmRVXZKhVlEdsIJDVqnzcCdSWCtXoKUYYzsagJUJDhYzAWGvCHlSFnWixTxHOTCICWflqePohyoDThjPDgDbqIPmXlAMsSqWrcfMUuycarlNGcQtrFqlTdxChViElfSHUsqXHKYcUNguqhGOSnDNziVZwjbLKsRGAlnvxgBvHEGVQNROCTjEdZQQiShvmbMWTDNOxXHXmqfyTBaObCOdNbzebWSjHgLLtcTjaLlkNcCyzBJcMOWviWAjsfnOpFRFWqWzybjcNBDuNmqeVsPmtcScoKqCpbVyXlBpREGoLpruTprbwPMNQpqnektXDbyXFbVaDTONJxyxamRenDRbTQnwWAHzYaRzJrpVJmMYhOUqOgPhjnnJNLIAAKKOcXeiddWeVKdjcmDGNLFFFYKDrMIHQflEp');
        count_14 = objectStore_5260.count(KeyRange_50);
    }
    catch (e){
    }

    var count_15 = objectStore_5260.count();
    var count_16;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('QUOWUdChiwApkYvOvOenfxKgiivAsegJvNnseKvPrYMAecSYCXnniAwZASsGCpuBDldHgovekolzskgCywMoTXmxgYkzwXAbUGBQODHVLdTBRwwWgIHwrUQTVbdbJpxyDEmPIlAxUURCOTBGwntiMpqlDQqNWdiKoQPzuIhfZaoGnVxGwPXGfzznbwHUwqXJhaoanoflAolHeoYUhThEXUfrvnhxijkuZciFCVABkqLMDFmJZkoMJEtqAvqBpPaozaeksQTYhCxVwWhTxqxNsFdzDapSTjUTJdslArrrALehCcZrSnWJwZuPMNDoVckprNuRXuPoeDVgDpwvyKWPyADviaKJeBAsuofoPZXptNvRTWqyKvxdRIfOEDmBodSsBNHScZygAxfhGedZbdnQZreftWwvPUNvAIUsJZQrhHjpkWwjoptGGfRwnqUaWiEMNCYMcidszeDWaCvzYvOOKfrLtySvRlZgogRQlRKebeuvmuVDngjhcCqSSwjFCsEbWfWerPxTPMdqQuGtZwAzmjwWfYZiQVieNxkaEISwGtokzBfMKGZAeLyXoQSNyfgtnBhNjtNiUeIwmJZxQejqeIytMyqSwhbbJBoIdLJsHstxBwWfLOmZlRPxwgipYAyYYIZzBfmtUkwBvpilxCcpvBbXpKhtffBbGsehDnNRbkasXULWVcySpCuDkZmeBCkPJUpyxoPcsSkCkuhgGXAKXmlTkNDao', true);
        count_16 = objectStore_5260.count(KeyRange_52);
    }
    catch (e){
    }

    txn_7933.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7933.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7933.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7934 = db.transaction(['objectStore_5259', 'objectStore_5260'], 'readonly', {durability:"strict"})
    var objectStore_5259 = txn_7934.objectStore('objectStore_5259');
    var index_7 = objectStore_5259.index('index_3526');
    txn_7934.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7934.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7934.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3574')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};