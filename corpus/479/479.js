let db;
const openRequest = window.indexedDB.open('str_4666', 7795386942534570)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2834');
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_i: '<object>', f1_g: '<boolean>', f2_u: '<boolean>', f3_b: '<null>', f4_w: '<object>', f5_y: '<boolean>', f6_r: '<boolean>', f7_h: '<array>', f8_d: '<number>', f9_o: '<null>', f10_x: '<object>', f11_c: '<string>', f12_h: '<number>', f13_h: '<string>', f14_u: '<boolean>', f15_p: '<object>', f16_x: '<array>', f17_s: '<string>', f18_v: '<object>', f19_m: '<number>', f20_k: '<object>', f21_x: '<number>', f22_g: '<array>', f23_d: '<string>', f24_b: '<object>', f25_b: '<number>', f26_k: '<string>', f27_y: '<boolean>', f28_w: '<string>', f29_w: '<null>', f30_l: '<boolean>', f31_s: '<number>', f32_r: '<string>', f33_i: '<boolean>', f34_p: '<null>', f35_u: '<boolean>', f36_e: '<null>', f37_d: '<null>', f38_l: '<array>', f39_y: '<string>', f40_l: '<boolean>', f41_w: '<string>', f42_u: '<array>', f43_r: '<string>', f44_m: '<number>', f45_x: '<object>', f46_d: '<string>', f47_u: '<object>', f48_q: '<object>', f49_w: '<number>', f50_l: '<array>', f51_v: '<boolean>', f52_t: '<null>', f53_q: '<null>', f54_d: '<object>', f55_a: '<array>', f56_t: '<object>', f57_h: '<string>', f58_v: '<array>', f59_s: '<string>', f60_p: '<array>', f61_l: '<null>', f62_q: '<array>', f63_t: '<string>', f64_y: '<null>', f65_z: '<array>', f66_m: '<string>', f67_h: '<object>', f68_y: '<object>', f69_n: '<object>', f70_l: '<string>', f71_u: '<object>', f72_i: '<number>', f73_i: '<boolean>', f74_d: '<null>', f75_i: '<object>', f76_c: '<boolean>', f77_y: '<object>', f78_o: '<object>', f79_v: '<number>', f80_a: '<boolean>', f81_x: '<string>', f82_v: '<array>', f83_e: '<number>', f84_d: '<number>', f85_s: '<boolean>', f86_e: '<string>', f87_q: '<null>', f88_w: '<boolean>', f89_t: '<array>', f90_j: '<boolean>', f91_g: '<object>', f92_t: '<null>', f93_a: '<number>', f94_y: '<number>', f95_t: '<boolean>', f96_z: '<number>', f97_x: '<null>', f98_h: '<object>', f99_j: '<array>', f100_q: '<string>', f101_k: '<boolean>', f102_h: '<object>', f103_f: '<array>', f104_b: '<null>', f105_y: '<boolean>', f106_q: '<string>', f107_v: '<string>', f108_a: '<null>', f109_b: '<object>', f110_x: '<number>', f111_l: '<null>', f112_r: '<string>', f113_s: '<boolean>', f114_b: '<number>', f115_p: '<number>', f116_k: '<boolean>', f117_f: '<object>', f118_m: '<array>', f119_b: '<null>', f120_v: '<boolean>', f121_i: '<boolean>', f122_k: '<string>', f123_x: '<array>', f124_v: '<array>', f125_o: '<object>', f126_l: '<string>', f127_l: '<object>', f128_y: '<boolean>', f129_z: '<boolean>', f130_f: '<array>', f131_a: '<string>', f132_d: '<array>', f133_f: '<string>', f134_o: '<string>', f135_q: '<number>', f136_o: '<null>', f137_p: '<array>', f138_g: '<array>', f139_p: '<boolean>', f140_o: '<string>', f141_q: '<number>', f142_m: '<object>', f143_q: '<object>', f144_r: '<object>', f145_n: '<number>', f146_z: '<number>', f147_b: '<object>', f148_i: '<number>', f149_t: '<null>', f150_v: '<boolean>', f151_s: '<string>', f152_a: '<number>', f153_b: '<number>', f154_w: '<null>', f155_y: '<number>', f156_x: '<boolean>', f157_g: '<string>', f158_s: '<object>', f159_x: '<number>', f160_h: '<string>', f161_x: '<object>', f162_k: '<number>', f163_p: '<null>', f164_i: '<object>', f165_i: '<array>', f166_t: '<string>', f167_o: '<string>', f168_e: '<object>', f169_l: '<string>', f170_k: '<array>', f171_q: '<boolean>', f172_m: '<null>', f173_b: '<object>', f174_j: '<null>', f175_y: '<object>', f176_w: '<number>', f177_c: '<array>', f178_r: '<object>', f179_v: '<object>', f180_r: '<number>', f181_j: '<null>', f182_s: '<string>', f183_z: '<object>', f184_q: '<number>', f185_t: '<array>', f186_y: '<array>', f187_s: '<object>', f188_o: '<number>', f189_m: '<boolean>', f190_g: '<number>', f191_c: '<boolean>', f192_m: '<array>', f193_d: '<boolean>', f194_m: '<object>', f195_l: '<array>', f196_m: '<null>', f197_c: '<object>', f198_m: '<null>', f199_b: '<array>', f200_a: '<null>', f201_n: '<object>', f202_p: '<null>', f203_z: '<boolean>', f204_p: '<boolean>', f205_t: '<string>', f206_o: '<object>', f207_l: '<number>', f208_b: '<number>', f209_v: '<string>', f210_i: '<null>', f211_r: '<boolean>', f212_m: '<null>', f213_u: '<null>', f214_j: '<array>', f215_w: '<array>', f216_w: '<object>', f217_m: '<object>', f218_b: '<string>', f219_w: '<number>', f220_t: '<object>', f221_l: '<null>', f222_j: '<number>', f223_w: '<number>', f224_e: '<boolean>', f225_r: '<array>', f226_v: '<number>', f227_o: '<boolean>', f228_u: '<string>', f229_l: '<null>', f230_q: '<string>', f231_g: '<number>', f232_a: '<number>', f233_e: '<null>', f234_s: '<array>', f235_w: '<object>', f236_z: '<object>', f237_l: '<string>', f238_x: '<object>', f239_i: '<number>', f240_m: '<boolean>', f241_i: '<object>', f242_g: '<array>', f243_c: '<object>', f244_u: '<string>', f245_x: '<string>', f246_c: '<string>', f247_a: '<boolean>', f248_h: '<boolean>', f249_i: '<number>', f250_m: '<array>', f251_k: '<string>', f252_g: '<boolean>', f253_m: '<string>', f254_n: '<string>', f255_t: '<boolean>', f256_j: '<string>', f257_m: '<null>', f258_b: '<array>', f259_v: '<boolean>', f260_m: '<boolean>', f261_y: '<string>', f262_k: '<number>', f263_n: '<string>', f264_m: '<number>', f265_l: '<null>', f266_r: '<object>', f267_d: '<object>', f268_q: '<string>', f269_p: '<boolean>', f270_l: '<object>', f271_n: '<null>', f272_l: '<null>', f273_g: '<string>', f274_t: '<number>', f275_e: '<object>', f276_j: '<null>', f277_a: '<boolean>', f278_o: '<number>', f279_c: '<array>', f280_l: '<object>', f281_n: '<boolean>', f282_g: '<object>', f283_i: '<null>', f284_q: '<array>', f285_b: '<array>', f286_y: '<boolean>', f287_y: '<number>', f288_y: '<null>', f289_x: '<boolean>', f290_p: '<object>', f291_v: '<boolean>', f292_x: '<object>', f293_y: '<boolean>', f294_f: '<boolean>', f295_d: '<string>', f296_t: '<string>', f297_g: '<number>', f298_y: '<null>', f299_s: '<string>', f300_i: '<null>', f301_z: '<string>', f302_e: '<null>', f303_w: '<array>', f304_w: '<number>', f305_f: '<boolean>', f306_n: '<object>', f307_y: '<object>', f308_a: '<null>', f309_s: '<null>', f310_g: '<boolean>', f311_c: '<string>', f312_p: '<array>', f313_q: '<string>', f314_p: '<object>', f315_a: '<boolean>', f316_y: '<array>', f317_y: '<object>', f318_t: '<array>', f319_b: '<number>', f320_b: '<object>', f321_z: '<string>', f322_p: '<null>', f323_r: '<boolean>', f324_w: '<null>', f325_p: '<boolean>', f326_o: '<null>', f327_m: '<boolean>', f328_w: '<number>', f329_l: '<number>', f330_p: '<number>', f331_n: '<null>', f332_c: '<number>', f333_k: '<string>', f334_y: '<array>', f335_i: '<string>', f336_f: '<string>', f337_e: '<boolean>', f338_c: '<number>', f339_m: '<null>', f340_s: '<number>', f341_c: '<null>', f342_g: '<string>', f343_l: '<boolean>', f344_d: '<array>', f345_e: '<number>', f346_x: '<number>', f347_f: '<array>', f348_w: '<array>', f349_w: '<array>', f350_i: '<array>', f351_p: '<number>', f352_c: '<object>', f353_o: '<boolean>', f354_f: '<boolean>', f355_t: '<string>', f356_l: '<boolean>', f357_m: '<string>', f358_r: '<boolean>', f359_m: '<boolean>', f360_b: '<null>', f361_j: '<null>', f362_t: '<object>', f363_d: '<boolean>', f364_k: '<number>', f365_k: '<string>', f366_c: '<boolean>', f367_x: '<string>', f368_x: '<boolean>', f369_o: '<object>', f370_n: '<null>', f371_n: '<boolean>', f372_m: '<string>', f373_p: '<null>', f374_d: '<array>', f375_v: '<number>', f376_g: '<string>', f377_g: '<object>', f378_k: '<object>', f379_w: '<number>', f380_p: '<number>', f381_r: '<string>', f382_r: '<string>', f383_y: '<null>', f384_s: '<string>', f385_n: '<array>', f386_i: '<string>', f387_v: '<string>', f388_a: '<null>', f389_l: '<object>', f390_t: '<string>', f391_p: '<number>', f392_n: '<array>', f393_i: '<object>', f394_g: '<null>', f395_u: '<array>', f396_r: '<object>', f397_m: '<object>', f398_o: '<object>', f399_l: '<boolean>', f400_m: '<object>', f401_i: '<number>', f402_q: '<number>', f403_f: '<boolean>', f404_m: '<number>', f405_l: '<object>', f406_v: '<boolean>', f407_k: '<string>', f408_a: '<array>', f409_w: '<object>', f410_t: '<boolean>', f411_s: '<number>', f412_t: '<object>', f413_n: '<array>', f414_c: '<object>', f415_d: '<string>', f416_h: '<array>', f417_q: '<array>', f418_g: '<array>', f419_b: '<object>', f420_k: '<array>', f421_o: '<object>', f422_c: '<null>', f423_g: '<string>', f424_p: '<string>', f425_v: '<number>', f426_n: '<object>', f427_a: '<array>', f428_m: '<null>', f429_f: '<object>', f430_j: '<object>', f431_u: '<array>', f432_s: '<number>', f433_h: '<array>', f434_c: '<array>', f435_n: '<array>', f436_j: '<array>', f437_l: '<null>', f438_a: '<object>', f439_v: '<number>', f440_f: '<boolean>', f441_s: '<array>', f442_d: '<null>', f443_z: '<array>', f444_q: '<null>', f445_h: '<array>', f446_s: '<array>', f447_z: '<number>', f448_w: '<number>', f449_e: '<string>', f450_m: '<null>', f451_g: '<null>', f452_n: '<boolean>', f453_b: '<number>', f454_t: '<object>', f455_v: '<boolean>', f456_o: '<array>', f457_m: '<object>', f458_w: '<boolean>', f459_d: '<object>', f460_r: '<array>', f461_k: '<number>', f462_k: '<string>', f463_f: '<object>', f464_k: '<number>', f465_k: '<object>', f466_z: '<array>'}, 'zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr');
    var getAll_0 = objectStore_0.getAll(1973321657);
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_2835', {keypath: 'ILiOgHpiYXFeEzMhWYvaqMAVojJzfwBPjoquyzLUfBPBuvJNWmfiedyfgRcKfKkaiANMzrRgBcRbVmcZavsBUIOsOaujnKGacfrpSeMdWWObISMWKrFVrPOSrYFeXRFVIssPSWaRyNAXeGObUWiTFJfXGfxsAskYHFncIqLbfEXcjcSHQEYdpAFywDJjVpJXRdsPJtwCaXOGyFCGKvXgkeHsuWhPMmuNYMijgLGyMlkYNuxohrkfqBLVERPKCQjkKsHUoJhGedSiPGKfddNJcBQYClzanatAbnSIBskXPwnVoMKzdTYNtJjdpptPttnWAUjPKLxXSIlXIYkBkmfLfjmXHhoPCunwVsfSIvVsrjfkHSIcdyLClICPaHDgMwjXZiHaUNkEXFohPhWdolrzEkzgjUNPIxWBpoxQcdxTXHQrAdt'});
    var index_1871 = objectStore_0.createIndex('index_1871', 'test', {unique: false, multiEntry: true});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var index_1872 = objectStore_0.createIndex('index_1872', 'test', {unique: false, multiEntry: true});
    var put_0 = objectStore_1.put({f0_h: '<null>', f1_k: '<object>', f2_k: '<string>', f3_l: '<string>', f4_u: '<string>', f5_v: '<null>', f6_m: '<boolean>', f7_b: '<number>', f8_e: '<number>', f9_g: '<boolean>', f10_x: '<object>', f11_r: '<string>', f12_p: '<object>', f13_t: '<null>', f14_o: '<boolean>', f15_f: '<string>', f16_s: '<array>', f17_s: '<array>', f18_r: '<object>', f19_y: '<number>', f20_d: '<string>', f21_g: '<null>', f22_c: '<boolean>', f23_g: '<null>', f24_q: '<string>', f25_y: '<object>', f26_x: '<string>', f27_a: '<array>', f28_n: '<array>', f29_v: '<boolean>', f30_z: '<array>', f31_i: '<object>', f32_i: '<boolean>', f33_w: '<number>', f34_p: '<boolean>', f35_p: '<boolean>', f36_q: '<array>', f37_o: '<null>', f38_b: '<array>', f39_q: '<boolean>', f40_n: '<number>', f41_m: '<array>', f42_o: '<number>', f43_m: '<object>', f44_f: '<boolean>', f45_n: '<number>', f46_n: '<string>', f47_d: '<null>', f48_d: '<number>', f49_t: '<boolean>', f50_q: '<object>', f51_f: '<string>', f52_l: '<string>', f53_s: '<null>', f54_l: '<object>', f55_e: '<object>', f56_h: '<number>', f57_o: '<array>', f58_k: '<object>', f59_s: '<boolean>', f60_b: '<array>', f61_o: '<object>', f62_q: '<number>', f63_d: '<boolean>', f64_f: '<object>', f65_r: '<null>', f66_w: '<array>', f67_g: '<boolean>', f68_v: '<object>', f69_t: '<boolean>', f70_y: '<null>', f71_q: '<object>', f72_k: '<null>', f73_g: '<string>', f74_l: '<null>', f75_w: '<object>', f76_e: '<null>', f77_z: '<object>', f78_w: '<number>', f79_c: '<object>', f80_h: '<null>', f81_v: '<boolean>', f82_n: '<array>', f83_o: '<object>', f84_f: '<null>', f85_l: '<array>', f86_z: '<array>', f87_q: '<null>', f88_h: '<string>', f89_c: '<null>', f90_u: '<boolean>', f91_x: '<array>', f92_w: '<null>', f93_d: '<null>', f94_j: '<boolean>', f95_s: '<number>'}, 'BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr');
    var index_1873 = objectStore_0.createIndex('index_1873', 'test');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', 'zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false, true);
        get_2 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_1.add({f0_k: '<null>', f1_y: '<string>', f2_b: '<array>', f3_u: '<null>', f4_v: '<boolean>', f5_u: '<string>'}, 'DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk');
    var objectStore_2 = db.createObjectStore('objectStore_2836');
    var objectStore_3 = db.createObjectStore('objectStore_2837', {autoIncrement: true});
    var add_2 = objectStore_1.add({f0_t: '<boolean>', f1_y: '<object>', f2_t: '<boolean>', f3_s: '<array>', f4_t: '<object>', f5_p: '<boolean>', f6_e: '<array>'}, 'ZPislOoUXFOIKlyAjfkQOZwbuCOkDqpBnyaReUtCzCaySXSFYtHkpPMOIbBRRXlKvoTRHvwJJUvcPIzJhxfvPYHkoYiBISdntYuzrPlGClhMapyMRSwHAHYHbdBnbrOJUaWWCXxMziKYWfeSNexWKnDFcTVywwSLnLGrybHXaibMKlsiMHjOjWIJnSwgqnvSBodSXVDrwTmoskEZcnzKPqjzfDVIsKviGZflAAydhfiKeWukNajweNcqJqmsOeXtPjiMUITtjwevEjInAENVjQCeyQqweLfktDYTIFDpJRRcyjMfnfNSQVqBbyMviFPugbCUrqRmQBoLsWXeKLKWhQqdcMReJLjpPwqJMzCrZxgGHvqfRmCncajXItBQneozCukxZlqdNXdqykRukqUMJdhEBoRJkmHjACSeosYurRYxEvQGEMZaVNJStCkqOFIWYrAoIJEpaHQpXkMoNruBahkChYNKIjTcXwPvUKIllcSBxeyDXulvuCweSuSUjeesMBswwswhDRqjPimvAZXurIDWBGzuAxtJWoRhedoNQynMoufSYwPydfFhuEYDmeTjizXdqzuFhqCLgvwLIXvbdVbvpCLIalsIOUUkrHUgdHmMitKNHAmVmykkPihomaqAbZGpVbWcRQBIfsnAdWnkyRMnlFpiTkfKSjBuEjFiEetiziLvYFNDfnvFbHiZwqWeeGxncCJPPoxcQxOXZPfdwFmnhJGyuDGJzypVcjOnYISHWYgoUNHUNfavgFmaOYEKUpliRlnqFfwpfgYwUrfCIOAHHNTHmVCwxZQbmzNGBKg');
    var clear_1 = objectStore_1.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4220 = db.transaction(['objectStore_2834', 'objectStore_2836', 'objectStore_2837'], 'readonly', {durability:"default"})
    var objectStore_2837 = txn_4220.objectStore('objectStore_2837');
    txn_4220.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4220.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4220.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4221 = db.transaction(['objectStore_2835'], 'readonly', {durability:"strict"})
    var objectStore_2835 = txn_4221.objectStore('objectStore_2835');
    var getAll_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr', false);
        getAll_1 = objectStore_2835.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr');
        getAll_1 = objectStore_2835.getAll(KeyRange_7);
    }

    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.only('BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr');
        get_3 = objectStore_2835.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('ZPislOoUXFOIKlyAjfkQOZwbuCOkDqpBnyaReUtCzCaySXSFYtHkpPMOIbBRRXlKvoTRHvwJJUvcPIzJhxfvPYHkoYiBISdntYuzrPlGClhMapyMRSwHAHYHbdBnbrOJUaWWCXxMziKYWfeSNexWKnDFcTVywwSLnLGrybHXaibMKlsiMHjOjWIJnSwgqnvSBodSXVDrwTmoskEZcnzKPqjzfDVIsKviGZflAAydhfiKeWukNajweNcqJqmsOeXtPjiMUITtjwevEjInAENVjQCeyQqweLfktDYTIFDpJRRcyjMfnfNSQVqBbyMviFPugbCUrqRmQBoLsWXeKLKWhQqdcMReJLjpPwqJMzCrZxgGHvqfRmCncajXItBQneozCukxZlqdNXdqykRukqUMJdhEBoRJkmHjACSeosYurRYxEvQGEMZaVNJStCkqOFIWYrAoIJEpaHQpXkMoNruBahkChYNKIjTcXwPvUKIllcSBxeyDXulvuCweSuSUjeesMBswwswhDRqjPimvAZXurIDWBGzuAxtJWoRhedoNQynMoufSYwPydfFhuEYDmeTjizXdqzuFhqCLgvwLIXvbdVbvpCLIalsIOUUkrHUgdHmMitKNHAmVmykkPihomaqAbZGpVbWcRQBIfsnAdWnkyRMnlFpiTkfKSjBuEjFiEetiziLvYFNDfnvFbHiZwqWeeGxncCJPPoxcQxOXZPfdwFmnhJGyuDGJzypVcjOnYISHWYgoUNHUNfavgFmaOYEKUpliRlnqFfwpfgYwUrfCIOAHHNTHmVCwxZQbmzNGBKg', 'DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk', false, false);
        getAllKeys_0 = objectStore_2835.getAllKeys(KeyRange_10, 117814510);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr');
        getAllKeys_0 = objectStore_2835.getAllKeys(KeyRange_11);
    }

    var getAllKeys_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk', 'DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk', true, true);
        getAllKeys_1 = objectStore_2835.getAllKeys(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('ZPislOoUXFOIKlyAjfkQOZwbuCOkDqpBnyaReUtCzCaySXSFYtHkpPMOIbBRRXlKvoTRHvwJJUvcPIzJhxfvPYHkoYiBISdntYuzrPlGClhMapyMRSwHAHYHbdBnbrOJUaWWCXxMziKYWfeSNexWKnDFcTVywwSLnLGrybHXaibMKlsiMHjOjWIJnSwgqnvSBodSXVDrwTmoskEZcnzKPqjzfDVIsKviGZflAAydhfiKeWukNajweNcqJqmsOeXtPjiMUITtjwevEjInAENVjQCeyQqweLfktDYTIFDpJRRcyjMfnfNSQVqBbyMviFPugbCUrqRmQBoLsWXeKLKWhQqdcMReJLjpPwqJMzCrZxgGHvqfRmCncajXItBQneozCukxZlqdNXdqykRukqUMJdhEBoRJkmHjACSeosYurRYxEvQGEMZaVNJStCkqOFIWYrAoIJEpaHQpXkMoNruBahkChYNKIjTcXwPvUKIllcSBxeyDXulvuCweSuSUjeesMBswwswhDRqjPimvAZXurIDWBGzuAxtJWoRhedoNQynMoufSYwPydfFhuEYDmeTjizXdqzuFhqCLgvwLIXvbdVbvpCLIalsIOUUkrHUgdHmMitKNHAmVmykkPihomaqAbZGpVbWcRQBIfsnAdWnkyRMnlFpiTkfKSjBuEjFiEetiziLvYFNDfnvFbHiZwqWeeGxncCJPPoxcQxOXZPfdwFmnhJGyuDGJzypVcjOnYISHWYgoUNHUNfavgFmaOYEKUpliRlnqFfwpfgYwUrfCIOAHHNTHmVCwxZQbmzNGBKg');
        getAllKeys_1 = objectStore_2835.getAllKeys(KeyRange_13);
    }

    var getAllKeys_2 = objectStore_2835.getAllKeys();
    var getAllKeys_3;
    try{
        KeyRange_14 = IDBKeyRange.only('DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk');
        getAllKeys_3 = objectStore_2835.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('DhmuvEqarXNuoViiVWztwndUTLEGBVdjbRwROxbSCsoEWuSPIyosmoHbSSUkYxIVxrXSixicirSCPvWCSfGtWnrZGMnzAeBNIlTzZBgzehmPgPIqonRKMbMxnQnZkZpMCbOzknJvhRIAbMVsNUwmHjfjPYrrjYgjxIWsregnZloBxvEoaAKBbeDimZgnwNyIfstoislwHqqLPgaVFkffPrHkbsCfMcxtMCCpuuurUNZCucBOwMnprEIeCXDTLeaCRBqWEaWHIFsaTLYluKUtXaktsZaRPKAkMqfXVKaOVaRSOAyPaQgSQzividDfcGiezuXdsLvccBSgLqsjgYNhNAXtEJimXqFHMeupUTuRoZYJjZACqhfMKgfRRmBvDZWdDctcDhhQMBKegqPqeGQbFXNIwrQXtcmSRqjSCwFZCZPaCBsSpWrjnZyJSLyMmuOnfMqLrwlKrwPeDMKTyAaYVVPIqbvnZhfzNdLzDpbOnLiDRpULiOLgNpoYWOetzfgaIySVbTLTEvNPfDsmTsePGTqPyXtSyWlJpWXubmRkkhSBjkBegctmeOSwXrvhFJUeDGhCzXVynvZOJcMjPGbzsVMBRsMYUSlInzPNdzECuVDnMtjAMWXmPpaNcogYgNjAwUHgHEIQuvuQslHSlBifySzDMpjqtidFTdvnAkWlvXTHgbeygKQKypTNbTZCMOzyBKLdnWwaIAIbryqNqgpQWjqIvuKtTcbuXIrQlQEsvyZNzdZNZskJWXmGAEHKAmZdWzQbxPmwGJepmmoGMCeriUfNguoPMyddDZmYunIhPZvgugTRWGsEumAIlOKhTxeasrJJpiEJdSDyOhrgNHcAwwHTYxyvMRsVYUOnOiiXRQXZcCEwTCcEtQhekaFWhlbeyxfpVarjXGRuCbpKUvsnWVjivCbSNgzisk');
        getAllKeys_3 = objectStore_2835.getAllKeys(KeyRange_15);
    }

    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.only('BXTOwTaxbZZTsVaRPDeQqfhGCTVKyDeRdsnsgBRTHlicbQvHJMLBEHHkEXphMDbTEFArUIToYvnPuztCtLVwHzWADyyrYvvUuFMnUQtuCEhaJbhKEtoTpcVhFUWMgqADndXOkDZBiwXanLjBtIillYMVwEKNWcYjCHEFLOjEZHhoWSUcwkWdMeCrRoLXLkWvTDfoBANBWeEWjDUgNtCnNhjUkpfHtmBwQdfkeoISbwgaLFmsOAowNfCRckrCIAlDonJyUDuzxasHtSLxuLiIMVWNSDUJRAHTqMteGEanzAjorBqXLRDxuBDRlqiZWdstUnUumREAqxSpGqyEKOHweDFkGSeMmbDNgFHrHHANtkYdQBnIwLXkkPiZRHKnwxsKwMAJpwrEGbEzWRgdiQmQHRHxrKiAGHANgwUurBbeiEsHpsvmhOogJPwpKuymsRUqRCrGOlXZlFRvZNckzYWCcPkGmIaIYHXOASSYzKUEauTJVFlRkEEBNJcLedbYzKhRAYQlHkMEXZUoLUOmKCkzzOOaNHmHfESFjsQTTlgXBDDQQwBJGRiPVujuyrUjWNqWQAmtjWQGzMLcOBPHZkOUmwpKlzFDfiQvibqbdVBBegXcmgZvPDZwyvvESBRzJhdEhRNUrTCxdpgliWUQNuKQAJJKIUr');
        get_4 = objectStore_2835.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_2 = objectStore_2835.getAll();
    txn_4221.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4221.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4221.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4222 = db.transaction(['objectStore_2834'], 'readonly', {durability:"default"})
    var objectStore_2834 = txn_4222.objectStore('objectStore_2834');
    var count_0 = objectStore_2834.count();
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', true);
        get_5 = objectStore_2834.get(KeyRange_18);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.only('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr');
        get_6 = objectStore_2834.get(KeyRange_20);
    }
    catch (e){
    }

    var getAll_3 = objectStore_2834.getAll(4015454628);
    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false);
        get_7 = objectStore_2834.get(KeyRange_22);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false);
        get_8 = objectStore_2834.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', true);
        getAll_4 = objectStore_2834.getAll(KeyRange_26, 1326986424);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr');
        getAll_4 = objectStore_2834.getAll(KeyRange_27);
    }

    var getAllKeys_4 = objectStore_2834.getAllKeys(3480115835);
    var count_1 = objectStore_2834.count();
    var count_2;
    try{
        KeyRange_28 = IDBKeyRange.bound('zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', 'zeukuQZqERiIaLLsTkWEmjlSPAvTtIfmkWBiRFwsEVAmYYyvHGsqloXfZcfgZoGBbVgUsuIUVdNpIYumgLXqHpPVLnysSBpByCzhEjzHwtqJgtDLcuttITmxtvgFwGHPEeuxERrHeUxtagZDsEsDyIetdbjngRzPiPMwUrYXZPrMVnGTglbsjhhmKFvhzBmWhrKFFqKPIpSuPFVrkjGoaxgJpjzLBZXVESQoIXQyGLkhLdXUsKUdneUicenFiJlrdhHFYbLiMBDVJARFXRVkffdUlsSbWBghqdlEQZGdvtqJHTxgKVOpTcxYTPaWNxgNPkUCgOpvZFNhBWHJVJycADtLJaBbxVoRuJuFbIkKxwvuFBmVwtvbnwlpLwweubMkWTqUhsiwuFjAnXtToZuyzeireBfAMdtyyUuKVucWiOXJdtjlgsLswBLdsxWpXoqpjPfjoUgkKYIjVHyQZxpllXpijMHVgzXmTMDphdEZOAyEAEWSWwTMmFghSSKcSpdoiwcMTuUjhPcUSUgYzqPROVmglpYAnovsDJlAUyeaxEwQRtbwfaFsEvMRxaGeIAoHZLYgAbqUaBTUZOhallFgtXbkhDJcuFOSOQgxvRMSbmpjOjMkdxyMcTcHZbjPNpjrnHkCKrINVbDxHjGoCwOQsFrumScPEyUGLwFTkXluWRCSETtnCGbLnxtzNEOXlsvTXbDAutIyLVjqbsNGRkIzigbVLXDqArLGigYtDboWAPyhFzVmNAxlJwkOYuCtqhnIrLEWbabrJnYXhgPZBPyobxxjzgIocuvGr', false, true);
        count_2 = objectStore_2834.count(KeyRange_28);
    }
    catch (e){
    }

    txn_4222.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4222.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4222.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4223 = db.transaction(['objectStore_2835', 'objectStore_2836'], 'readonly', {durability:"relaxed"})
    var objectStore_2836 = txn_4223.objectStore('objectStore_2836');
    txn_4223.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4223.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4223.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4224 = db.transaction(['objectStore_2836', 'objectStore_2834'], 'readonly', {durability:"relaxed"})
    var objectStore_2836 = txn_4224.objectStore('objectStore_2836');
    txn_4224.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4224.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4224.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2224')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};