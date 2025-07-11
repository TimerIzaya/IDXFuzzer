let db;
const openRequest = window.indexedDB.open('str_7275', 3653558682741338)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3641', {keypath: 'yZjpyZvqJrUairhqVCJcYRSsqjYJyCvywLZHCHSdYqASevbKlZauLyaDnkWulRGaBmrAzFxNldHcjHjLAThhAQCKBiGufQNEUYInDPyywBxCbODTIXwemocLFGuvKGBfBtHnyDcYROuuIOiIWmnlWUunSdGhbaQRBVloxTJqiWIHmgyWTJdiSXFgIOpGOKQORdxqmfvWNVbEzDyGfBdJxwZDMsuUlDOtrBfvIhXbhLSuIhkoCALdPZRVsGhnCmReGtckZCtFTaCaCVxIgoeUtejtdQzeShwNnSnNVikuQqSdLmAoqJGuYwlrpgfQDunoNDNVWDgGyOvjjScbmWCJJefxDbcOpYcECQOhyAiaZchBGZsYzyUqxzfrbtDXQLKYTaxLvXfNcPfDvshRVDLSetypVamWRwxgyDTNRgZzVvEhlhlOiHLEGQGWsOFGWmcBcYVpDUmizqNitlZdrXzNQojfwjTDtyFQGEVdrEpdwGaMaHpRTLYCRhRAtpBNvpxnSaOezcDbalfTthvngXPTvhUinYSzBmoXWFDQDUWUsjkIgKipLuEVIUfctaOFcpqQvNseBKLCTWPAiOavzUFRPWpKmAazbQUllCtgGRWMmzIhhAsWItmdXqVKqfTQpJVbWzKduGHVnbbMNlesRKiprXbzTOOAaMBcnqingVrqUTikzjJxojKCWquiANltLBUwAPEFQjAyyHQK'});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3642', {keypath: 'GaBLDgMUJZhVaFNEzraADlbHtvUYhWzcKeEdnFxRkBYygeHimlOwhIXXJBYKIPGoSRypjfPGNrlCgGgfycCxLiCVyVIPrrIKssakyCRbqkBtyqwEyhvnyeXRRaXidBJNNgMmrmtarAcUVzrXSDxqGakBStbLwFRjWaHwutMRwkHbxdHzrgUJlWWHmWDGxQKyTUULVKapjneIiaNHDQgyFBxfpVEKUELXDdjsuhKUVzPXwscKTIwqtTzXBYgwyvGqzKujttRpmqktkuOsMHQIrfEMPQlrLZqJkZkifxkcyvuVujUqjgMLmbkANWepLxlohJtBEzdcyjxWXlAfmkaOYaNWoLZKTuisnVTVFkMmMJHBJxHaYTVsknwhCIPxzMzctaZpjcXnWwZJLabdvgfDexSSHAAPKDSUEVMMRbOGRUUkUHbmHmoOkvIADynLxVVRKfJbNdzXEningPfYuhvUQphsSOlnOZXVYxgpxrfyTIGkxXManMQorNQbwiJgJpyrYthsivwlEECWKYLtoMEuUAhEuXHjPlAgKXtszAcunbfsaSZMvsXUWGPSUeiFNtQkwGLqzCADyjaqUdpRRQUPiPKLmaWIBuKvXXIYWshwthMEiFEeTcjxSpHBgmHmgkdftQKyCRIUnomDrJDiuUrirhyRbfHHyRROUNBtpmbKlihzkGplfoOKbzTmbfOSdPnWbMFuxzTVckoQxvcIrjfCMvztPAmZcIfltwCGuUQRozhCOaZzaxGrJZAqzeSNSjQqsSNvUyljCUPyMsfkuuUfnPjNghlALxPqLdgvIiKaqTABOxCqYXLCQxZSvSthbykaNWylSmswtXvhYsUEUItaURHdXEObvHYFEAETEBxCKOISLBTJjdRuvYUwPYYQyVbfJTlxxVvoOvUFllCoFWySGtneVvZrFoCfxJaZQHDDhzn'});
    var put_0 = objectStore_1.put({f0_z: '<boolean>', f1_c: '<object>', f2_w: '<array>', f3_h: '<null>', f4_e: '<boolean>', f5_b: '<string>', f6_t: '<number>', f7_h: '<boolean>', f8_p: '<boolean>', f9_o: '<object>', f10_b: '<object>', f11_v: '<null>', f12_q: '<boolean>', f13_y: '<object>', f14_i: '<boolean>', f15_u: '<null>', f16_t: '<string>', f17_x: '<null>', f18_b: '<object>', f19_j: '<object>', f20_c: '<boolean>', f21_z: '<array>', f22_r: '<string>', f23_v: '<boolean>', f24_t: '<boolean>', f25_r: '<string>', f26_y: '<null>', f27_s: '<null>', f28_q: '<object>', f29_t: '<boolean>', f30_m: '<null>', f31_f: '<object>', f32_n: '<boolean>', f33_n: '<null>', f34_v: '<string>', f35_g: '<boolean>', f36_h: '<boolean>', f37_e: '<boolean>', f38_u: '<object>', f39_k: '<null>', f40_y: '<boolean>', f41_e: '<object>', f42_l: '<boolean>', f43_s: '<null>', f44_v: '<object>', f45_d: '<number>', f46_z: '<number>', f47_l: '<boolean>', f48_d: '<string>', f49_c: '<null>', f50_p: '<string>', f51_u: '<object>', f52_v: '<null>', f53_j: '<null>', f54_t: '<null>', f55_x: '<boolean>', f56_z: '<array>', f57_b: '<string>', f58_c: '<array>', f59_s: '<string>', f60_r: '<array>', f61_z: '<number>', f62_t: '<array>', f63_h: '<null>', f64_s: '<object>', f65_j: '<object>', f66_d: '<object>', f67_m: '<number>', f68_g: '<array>', f69_u: '<null>', f70_c: '<string>', f71_l: '<boolean>', f72_t: '<null>', f73_v: '<null>', f74_y: '<array>', f75_l: '<null>', f76_k: '<object>', f77_e: '<boolean>', f78_r: '<object>', f79_q: '<null>', f80_z: '<object>', f81_g: '<array>', f82_t: '<object>', f83_s: '<boolean>', f84_j: '<null>', f85_u: '<array>', f86_e: '<number>', f87_f: '<string>', f88_i: '<object>', f89_z: '<object>', f90_o: '<boolean>', f91_d: '<number>', f92_w: '<array>', f93_t: '<array>', f94_p: '<string>', f95_p: '<number>', f96_h: '<array>', f97_f: '<number>', f98_x: '<string>', f99_r: '<array>', f100_x: '<object>', f101_o: '<array>', f102_u: '<number>', f103_r: '<null>', f104_e: '<number>', f105_h: '<object>', f106_a: '<boolean>', f107_s: '<object>', f108_c: '<null>', f109_m: '<string>', f110_m: '<array>', f111_m: '<boolean>', f112_w: '<number>', f113_b: '<string>', f114_y: '<number>', f115_r: '<array>', f116_j: '<object>', f117_e: '<array>', f118_m: '<null>', f119_x: '<object>', f120_t: '<number>', f121_i: '<number>', f122_a: '<array>', f123_k: '<object>', f124_a: '<object>', f125_z: '<number>', f126_c: '<boolean>', f127_r: '<null>', f128_e: '<array>', f129_v: '<string>', f130_c: '<string>', f131_i: '<object>', f132_o: '<number>', f133_u: '<boolean>', f134_p: '<null>', f135_u: '<boolean>', f136_f: '<null>', f137_g: '<object>', f138_r: '<object>', f139_u: '<string>', f140_o: '<array>', f141_q: '<object>', f142_x: '<array>', f143_o: '<null>', f144_s: '<null>', f145_i: '<boolean>', f146_j: '<array>', f147_i: '<number>', f148_v: '<array>', f149_l: '<number>', f150_a: '<array>', f151_s: '<object>', f152_w: '<boolean>', f153_m: '<string>', f154_h: '<number>', f155_j: '<object>', f156_y: '<number>', f157_f: '<array>', f158_r: '<number>', f159_z: '<null>', f160_v: '<object>', f161_n: '<boolean>', f162_g: '<array>', f163_k: '<object>', f164_m: '<number>', f165_f: '<object>', f166_a: '<boolean>'}, 'ZVTnpDlOXaEPWPFvGOVkATwrvbiJsoyXckgDKhMSQizERhFauUFIFNAyJNlQGoNBjQAzDPhyQMKOlKLTUCswejmeNGinUdtjamWDWukXxjbPvkopSwevPFcOYHtDDPufAeePJVjCyTQONlMmwPlWmlrgrVmayUZOPyCkIYLazMbCOioOgwIytFpYBVQCrQoGuFNDPpETsRRWzIOOcKbUXYroAPIxEUKXUhsckmPVHBdyZfbrHRPXULMUxLtUyBXhMYrniTCGTNBJJgJNgLjPyFHokJhYDQkhEkMIQYXeZPjJSWlgdHvsalOaszmaClQlGpddONGDNwStrEUFkJXtiTvcYDMupGEhDDzcHDHpDVzdAltrZdTIDvouIx');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ZVTnpDlOXaEPWPFvGOVkATwrvbiJsoyXckgDKhMSQizERhFauUFIFNAyJNlQGoNBjQAzDPhyQMKOlKLTUCswejmeNGinUdtjamWDWukXxjbPvkopSwevPFcOYHtDDPufAeePJVjCyTQONlMmwPlWmlrgrVmayUZOPyCkIYLazMbCOioOgwIytFpYBVQCrQoGuFNDPpETsRRWzIOOcKbUXYroAPIxEUKXUhsckmPVHBdyZfbrHRPXULMUxLtUyBXhMYrniTCGTNBJJgJNgLjPyFHokJhYDQkhEkMIQYXeZPjJSWlgdHvsalOaszmaClQlGpddONGDNwStrEUFkJXtiTvcYDMupGEhDDzcHDHpDVzdAltrZdTIDvouIx', true);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var clear_2 = objectStore_1.clear();
    var index_2452 = objectStore_1.createIndex('index_2452', 'test', {unique: false, multiEntry: true});
    var add_0 = objectStore_0.add({f0_z: '<string>', f1_i: '<boolean>', f2_r: '<number>', f3_p: '<object>', f4_h: '<boolean>', f5_g: '<object>', f6_s: '<number>', f7_y: '<null>', f8_u: '<boolean>', f9_x: '<boolean>', f10_g: '<string>', f11_b: '<object>', f12_x: '<array>', f13_q: '<array>', f14_n: '<string>', f15_z: '<number>', f16_o: '<null>', f17_a: '<object>', f18_d: '<string>', f19_q: '<object>', f20_b: '<object>', f21_r: '<boolean>', f22_q: '<number>', f23_l: '<boolean>', f24_a: '<null>', f25_h: '<object>', f26_x: '<number>', f27_d: '<null>', f28_r: '<null>', f29_f: '<array>', f30_g: '<boolean>', f31_s: '<number>', f32_h: '<null>', f33_f: '<boolean>', f34_k: '<object>', f35_u: '<array>', f36_j: '<number>', f37_f: '<string>', f38_i: '<array>', f39_c: '<object>', f40_t: '<null>', f41_a: '<boolean>', f42_x: '<string>', f43_c: '<number>', f44_r: '<array>', f45_q: '<boolean>', f46_x: '<number>', f47_w: '<number>', f48_b: '<object>', f49_w: '<array>', f50_a: '<object>', f51_l: '<null>', f52_z: '<object>', f53_x: '<object>', f54_r: '<string>', f55_n: '<boolean>', f56_v: '<null>', f57_v: '<string>', f58_k: '<boolean>', f59_z: '<string>', f60_t: '<array>', f61_r: '<object>', f62_x: '<object>', f63_s: '<null>', f64_o: '<array>', f65_o: '<number>', f66_d: '<null>', f67_m: '<null>', f68_z: '<number>', f69_x: '<string>', f70_m: '<array>', f71_z: '<string>', f72_t: '<boolean>', f73_j: '<null>', f74_u: '<boolean>', f75_o: '<string>', f76_n: '<object>', f77_j: '<object>', f78_q: '<null>', f79_c: '<array>', f80_c: '<array>', f81_f: '<boolean>', f82_t: '<null>', f83_y: '<array>', f84_h: '<number>', f85_g: '<string>', f86_m: '<number>', f87_c: '<null>', f88_m: '<boolean>', f89_g: '<string>', f90_i: '<number>', f91_e: '<boolean>', f92_g: '<boolean>', f93_c: '<object>', f94_j: '<number>', f95_q: '<null>', f96_z: '<string>', f97_g: '<object>', f98_e: '<null>', f99_l: '<object>', f100_p: '<boolean>', f101_l: '<null>', f102_d: '<number>', f103_t: '<null>', f104_c: '<number>', f105_c: '<boolean>', f106_q: '<number>', f107_l: '<array>', f108_w: '<number>', f109_y: '<object>', f110_z: '<null>', f111_u: '<string>', f112_x: '<number>', f113_e: '<object>', f114_v: '<boolean>', f115_p: '<array>', f116_n: '<array>', f117_f: '<number>', f118_d: '<null>', f119_o: '<array>', f120_z: '<string>', f121_z: '<array>', f122_i: '<boolean>', f123_u: '<number>', f124_s: '<boolean>', f125_k: '<null>', f126_z: '<object>', f127_c: '<null>', f128_q: '<string>', f129_m: '<array>', f130_u: '<boolean>', f131_f: '<array>', f132_t: '<boolean>', f133_t: '<number>', f134_t: '<number>', f135_b: '<number>', f136_c: '<boolean>', f137_k: '<number>', f138_b: '<array>', f139_a: '<array>', f140_w: '<boolean>', f141_h: '<object>', f142_v: '<object>', f143_l: '<object>', f144_x: '<string>', f145_y: '<object>', f146_x: '<object>', f147_s: '<string>', f148_c: '<string>', f149_d: '<string>', f150_x: '<string>', f151_k: '<object>', f152_s: '<null>', f153_o: '<number>', f154_z: '<object>', f155_a: '<boolean>', f156_q: '<array>', f157_e: '<string>', f158_s: '<string>', f159_f: '<boolean>', f160_p: '<boolean>', f161_i: '<object>', f162_z: '<array>', f163_q: '<object>', f164_c: '<array>', f165_p: '<boolean>', f166_e: '<number>', f167_f: '<array>', f168_h: '<null>', f169_r: '<string>', f170_m: '<object>', f171_w: '<object>', f172_c: '<null>', f173_q: '<array>', f174_n: '<object>', f175_d: '<null>', f176_g: '<array>', f177_l: '<boolean>', f178_x: '<string>', f179_g: '<string>', f180_n: '<string>', f181_o: '<object>', f182_c: '<number>', f183_x: '<number>', f184_h: '<array>', f185_x: '<string>', f186_a: '<object>', f187_q: '<null>', f188_v: '<object>', f189_y: '<number>', f190_u: '<number>', f191_i: '<null>', f192_r: '<boolean>', f193_d: '<array>', f194_b: '<boolean>', f195_k: '<array>', f196_v: '<string>', f197_a: '<object>', f198_t: '<array>', f199_l: '<null>', f200_s: '<object>', f201_m: '<number>', f202_b: '<number>', f203_r: '<string>', f204_z: '<number>', f205_q: '<boolean>', f206_t: '<number>', f207_h: '<null>', f208_i: '<null>', f209_u: '<number>', f210_i: '<array>', f211_y: '<null>', f212_z: '<string>', f213_c: '<null>', f214_p: '<array>', f215_u: '<object>', f216_c: '<null>', f217_d: '<number>', f218_y: '<number>', f219_g: '<array>', f220_k: '<string>', f221_b: '<number>', f222_u: '<object>', f223_c: '<array>', f224_i: '<object>', f225_f: '<null>', f226_h: '<string>', f227_b: '<object>', f228_d: '<null>', f229_d: '<null>', f230_a: '<boolean>', f231_o: '<null>', f232_g: '<boolean>', f233_k: '<number>', f234_w: '<null>', f235_d: '<number>', f236_b: '<null>', f237_c: '<null>', f238_g: '<object>', f239_t: '<null>', f240_a: '<number>', f241_f: '<array>', f242_i: '<null>', f243_u: '<array>', f244_c: '<boolean>', f245_b: '<number>', f246_b: '<object>', f247_o: '<null>', f248_o: '<object>', f249_k: '<null>', f250_k: '<boolean>', f251_s: '<object>', f252_l: '<number>', f253_d: '<array>', f254_n: '<null>', f255_h: '<boolean>', f256_p: '<object>', f257_a: '<null>', f258_m: '<array>', f259_p: '<string>', f260_t: '<null>', f261_k: '<number>', f262_e: '<boolean>', f263_f: '<boolean>', f264_q: '<array>', f265_y: '<array>', f266_c: '<array>', f267_l: '<object>', f268_i: '<boolean>', f269_w: '<boolean>', f270_r: '<null>', f271_z: '<boolean>', f272_y: '<boolean>', f273_s: '<null>', f274_k: '<string>', f275_r: '<boolean>', f276_v: '<null>', f277_w: '<number>', f278_c: '<number>'}, 'roBAEfOdgXyTYMdqABgxsuWyDUmImejIgxbLeIukBBwtBbCSOEHBDOLnMuwjcUBDWzcWwaeThCopjAJFopGluWoMWesZZeMbDUHfgMYDuEscIhmxZCQuWSrglzLgWZaHDFxJkSwFXbQsitZWYfTFkFLIzETSvJhhNsihqaaoCMrdTkeIbmUFEOUvrtrtBKBUgwOGwphApHkgwYGjxfSXTgUmAmRFSVRlAurmAyAWHcDbRGBWMMlSvhzogJtDIdECeXvvJtMJvlTRmbDNJzkKsgvJGCKJmorkNbzOAqygwMErpjKGCdtmZkfLCWPzSKkNpiamUcCcFoylGJcAbcmynQNQEvEZfrsFumoSwfwwTxNdFsDiLaeCSgGlXAgjTuNkDMuNTcgLEseGjSOBrZVVwCQMCsJYKBxUeriVEDeTrOcaXdoxhcwSjbFdkfRcpRfCRRBWmHvUGpJEXzqjvpXiCebZWQiEFdPEHYkOQRFMzpxSejoKxnUgRlpeJXrcMEIZmATpQmnf');
    var put_1 = objectStore_1.put({f0_m: '<string>', f1_w: '<number>', f2_n: '<boolean>'}, 'VXYhXnhIwqksmwYcLAVdfsuIopGnHahsHEMtBHEHmlhqHxoctHWHaQHdhtNoJTejHSWNfdXo');
    var index_2453 = objectStore_0.createIndex('index_2453', 'test', {multiEntry: false});
    var clear_3 = objectStore_1.clear();
    var clear_4 = objectStore_1.clear();
    var index_2454 = objectStore_1.createIndex('index_2454', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_3643', {autoIncrement: false});
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('ZVTnpDlOXaEPWPFvGOVkATwrvbiJsoyXckgDKhMSQizERhFauUFIFNAyJNlQGoNBjQAzDPhyQMKOlKLTUCswejmeNGinUdtjamWDWukXxjbPvkopSwevPFcOYHtDDPufAeePJVjCyTQONlMmwPlWmlrgrVmayUZOPyCkIYLazMbCOioOgwIytFpYBVQCrQoGuFNDPpETsRRWzIOOcKbUXYroAPIxEUKXUhsckmPVHBdyZfbrHRPXULMUxLtUyBXhMYrniTCGTNBJJgJNgLjPyFHokJhYDQkhEkMIQYXeZPjJSWlgdHvsalOaszmaClQlGpddONGDNwStrEUFkJXtiTvcYDMupGEhDDzcHDHpDVzdAltrZdTIDvouIx', true);
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('ZVTnpDlOXaEPWPFvGOVkATwrvbiJsoyXckgDKhMSQizERhFauUFIFNAyJNlQGoNBjQAzDPhyQMKOlKLTUCswejmeNGinUdtjamWDWukXxjbPvkopSwevPFcOYHtDDPufAeePJVjCyTQONlMmwPlWmlrgrVmayUZOPyCkIYLazMbCOioOgwIytFpYBVQCrQoGuFNDPpETsRRWzIOOcKbUXYroAPIxEUKXUhsckmPVHBdyZfbrHRPXULMUxLtUyBXhMYrniTCGTNBJJgJNgLjPyFHokJhYDQkhEkMIQYXeZPjJSWlgdHvsalOaszmaClQlGpddONGDNwStrEUFkJXtiTvcYDMupGEhDDzcHDHpDVzdAltrZdTIDvouIx');
        getAllKeys_0 = objectStore_1.getAllKeys(KeyRange_3);
    }

    var objectStore_3 = db.createObjectStore('objectStore_3644');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5445 = db.transaction(['objectStore_3644', 'objectStore_3641'], 'readwrite', {durability:"relaxed"})
    var objectStore_3641 = txn_5445.objectStore('objectStore_3641');
    var index_0 = objectStore_3641.index('index_2453');
    var add_1 = objectStore_3641.add({f0_h: '<number>', f1_w: '<string>', f2_h: '<number>', f3_u: '<null>', f4_z: '<boolean>', f5_a: '<string>'}, 'iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ');
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('roBAEfOdgXyTYMdqABgxsuWyDUmImejIgxbLeIukBBwtBbCSOEHBDOLnMuwjcUBDWzcWwaeThCopjAJFopGluWoMWesZZeMbDUHfgMYDuEscIhmxZCQuWSrglzLgWZaHDFxJkSwFXbQsitZWYfTFkFLIzETSvJhhNsihqaaoCMrdTkeIbmUFEOUvrtrtBKBUgwOGwphApHkgwYGjxfSXTgUmAmRFSVRlAurmAyAWHcDbRGBWMMlSvhzogJtDIdECeXvvJtMJvlTRmbDNJzkKsgvJGCKJmorkNbzOAqygwMErpjKGCdtmZkfLCWPzSKkNpiamUcCcFoylGJcAbcmynQNQEvEZfrsFumoSwfwwTxNdFsDiLaeCSgGlXAgjTuNkDMuNTcgLEseGjSOBrZVVwCQMCsJYKBxUeriVEDeTrOcaXdoxhcwSjbFdkfRcpRfCRRBWmHvUGpJEXzqjvpXiCebZWQiEFdPEHYkOQRFMzpxSejoKxnUgRlpeJXrcMEIZmATpQmnf', false);
        delete_0 = objectStore_3641.delete(KeyRange_4);
    }
    catch (e){
    }

    var put_2 = objectStore_3641.put({f0_m: '<number>', f1_w: '<object>', f2_o: '<string>', f3_o: '<boolean>', f4_q: '<null>', f5_c: '<string>', f6_s: '<number>', f7_n: '<null>', f8_n: '<string>', f9_x: '<number>'}, 'jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO');
    var add_2 = objectStore_3641.add({f0_r: '<array>', f1_m: '<boolean>', f2_e: '<object>', f3_h: '<boolean>', f4_u: '<object>', f5_h: '<array>', f6_m: '<array>', f7_s: '<boolean>', f8_q: '<boolean>', f9_j: '<number>', f10_g: '<string>', f11_h: '<null>', f12_q: '<null>', f13_l: '<array>', f14_h: '<array>', f15_n: '<number>', f16_e: '<object>', f17_x: '<boolean>', f18_p: '<boolean>', f19_d: '<boolean>', f20_m: '<null>', f21_x: '<string>', f22_v: '<object>', f23_r: '<string>', f24_y: '<string>', f25_z: '<boolean>', f26_q: '<object>', f27_u: '<array>', f28_m: '<array>', f29_t: '<null>', f30_z: '<number>', f31_j: '<boolean>', f32_c: '<array>', f33_l: '<object>', f34_y: '<array>', f35_p: '<string>', f36_e: '<number>', f37_w: '<string>', f38_t: '<array>', f39_h: '<number>', f40_b: '<null>', f41_q: '<boolean>', f42_x: '<string>', f43_k: '<boolean>', f44_k: '<array>', f45_y: '<object>', f46_l: '<null>', f47_e: '<number>', f48_q: '<number>', f49_n: '<array>', f50_i: '<object>', f51_c: '<array>', f52_m: '<array>', f53_p: '<string>', f54_p: '<number>', f55_i: '<number>', f56_d: '<null>', f57_u: '<null>', f58_e: '<boolean>', f59_c: '<number>', f60_c: '<number>', f61_r: '<string>', f62_j: '<number>', f63_z: '<string>', f64_a: '<string>', f65_u: '<null>', f66_e: '<object>', f67_t: '<string>', f68_f: '<boolean>', f69_i: '<null>', f70_l: '<null>', f71_y: '<null>', f72_h: '<number>', f73_h: '<object>', f74_o: '<string>', f75_s: '<string>', f76_q: '<string>', f77_i: '<boolean>', f78_v: '<number>', f79_z: '<boolean>', f80_g: '<object>', f81_t: '<array>', f82_z: '<string>', f83_p: '<array>', f84_g: '<object>', f85_x: '<object>', f86_c: '<object>', f87_b: '<number>', f88_c: '<null>', f89_v: '<number>', f90_f: '<string>', f91_w: '<number>', f92_h: '<null>', f93_n: '<object>', f94_e: '<null>', f95_k: '<string>', f96_w: '<number>', f97_q: '<null>', f98_y: '<number>', f99_p: '<null>', f100_a: '<boolean>', f101_f: '<string>', f102_n: '<boolean>', f103_q: '<boolean>', f104_t: '<object>', f105_l: '<null>', f106_c: '<boolean>', f107_v: '<string>', f108_u: '<object>', f109_b: '<number>', f110_c: '<number>', f111_a: '<array>', f112_a: '<boolean>', f113_e: '<boolean>', f114_v: '<string>', f115_q: '<string>', f116_j: '<string>', f117_b: '<string>', f118_b: '<array>', f119_g: '<null>', f120_z: '<string>', f121_m: '<boolean>', f122_i: '<number>', f123_w: '<boolean>', f124_j: '<string>', f125_m: '<null>', f126_e: '<array>', f127_b: '<boolean>', f128_x: '<number>', f129_r: '<number>', f130_s: '<string>', f131_d: '<null>', f132_i: '<number>', f133_j: '<number>', f134_e: '<object>', f135_b: '<array>', f136_x: '<boolean>', f137_y: '<object>', f138_u: '<array>', f139_s: '<null>', f140_j: '<null>', f141_p: '<array>', f142_z: '<string>', f143_u: '<array>', f144_l: '<number>', f145_b: '<number>', f146_z: '<array>', f147_l: '<boolean>', f148_j: '<string>', f149_b: '<object>', f150_t: '<string>', f151_d: '<boolean>', f152_h: '<string>', f153_d: '<null>', f154_p: '<array>', f155_n: '<number>', f156_a: '<object>', f157_w: '<object>', f158_n: '<string>', f159_t: '<null>', f160_z: '<array>', f161_d: '<array>', f162_n: '<array>', f163_g: '<string>', f164_i: '<null>', f165_t: '<object>', f166_s: '<object>', f167_n: '<number>', f168_p: '<array>', f169_p: '<object>', f170_b: '<object>', f171_m: '<array>', f172_q: '<array>', f173_t: '<object>', f174_c: '<array>', f175_q: '<string>', f176_f: '<number>', f177_g: '<array>', f178_b: '<object>', f179_l: '<object>', f180_m: '<boolean>', f181_b: '<null>', f182_f: '<number>', f183_p: '<object>'}, 'wIQBfpLWmrQkgixxamfnmZLedGbCaKBLNLqBoaDIoeeUkJpGSBCEIcUXrFtDpNqAEbpFlbCwijhlZDjDrIojpSMZacFWXdKJuwlPYsujOQGbmyiocFTHOFhMynpVHSpuNaMFFwJHOojjArMnkZHobfNLUctOSqxxYLNmwuBMAAWwAkaNBOhpYNvMcwNvGQDjcqqCmqAnbQmkOwPVwDLYFsbubNgPTFUDolNErgcCfVObbXPcDTuwZdqkGPsXRKkSKoMNFkLtqIGwSTFvleorZDXDqpTXREchJxTeauihbxxmIEouzStXdWqiwZEMgEUSyFIRTdirlKCFfElgDtGEMJEHHHRxezbkSLIMGhcqSMACAglugjMuBRFZghykBllcjoXXEHkcqnSccdVhNSlSmvtFKSFXCLeEaIClpVbmxGHjdcowIqpACcsouFMFdiJOmtGoKLYBEXdldnJiUYAWUGBVubSrQDJiCzwIjZOyHziyfCtuYioZrMuVeKbrCuduknMHGVzlLNCREdQGNNUAxYtglKIxLgkZFwVazjGCKpNLhxfXsGtqnhpfWVXtymXHOaOaLADKMzZplAIbWpVBMmSwEQZbUrqEqxwBAsMAO');
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', 'jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', true, true);
        get_0 = objectStore_3641.get(KeyRange_6);
    }
    catch (e){
    }

    txn_5445.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5445.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5445.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5446 = db.transaction(['objectStore_3644', 'objectStore_3641'], 'readonly', {durability:"default"})
    var objectStore_3641 = txn_5446.objectStore('objectStore_3641');
    var getAllKeys_1 = objectStore_3641.getAllKeys();
    var getAll_0 = objectStore_3641.getAll(3715767240);
    var getAllKeys_2 = objectStore_3641.getAllKeys();
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('wIQBfpLWmrQkgixxamfnmZLedGbCaKBLNLqBoaDIoeeUkJpGSBCEIcUXrFtDpNqAEbpFlbCwijhlZDjDrIojpSMZacFWXdKJuwlPYsujOQGbmyiocFTHOFhMynpVHSpuNaMFFwJHOojjArMnkZHobfNLUctOSqxxYLNmwuBMAAWwAkaNBOhpYNvMcwNvGQDjcqqCmqAnbQmkOwPVwDLYFsbubNgPTFUDolNErgcCfVObbXPcDTuwZdqkGPsXRKkSKoMNFkLtqIGwSTFvleorZDXDqpTXREchJxTeauihbxxmIEouzStXdWqiwZEMgEUSyFIRTdirlKCFfElgDtGEMJEHHHRxezbkSLIMGhcqSMACAglugjMuBRFZghykBllcjoXXEHkcqnSccdVhNSlSmvtFKSFXCLeEaIClpVbmxGHjdcowIqpACcsouFMFdiJOmtGoKLYBEXdldnJiUYAWUGBVubSrQDJiCzwIjZOyHziyfCtuYioZrMuVeKbrCuduknMHGVzlLNCREdQGNNUAxYtglKIxLgkZFwVazjGCKpNLhxfXsGtqnhpfWVXtymXHOaOaLADKMzZplAIbWpVBMmSwEQZbUrqEqxwBAsMAO', 'iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ', false, true);
        get_1 = objectStore_3641.get(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.only('wIQBfpLWmrQkgixxamfnmZLedGbCaKBLNLqBoaDIoeeUkJpGSBCEIcUXrFtDpNqAEbpFlbCwijhlZDjDrIojpSMZacFWXdKJuwlPYsujOQGbmyiocFTHOFhMynpVHSpuNaMFFwJHOojjArMnkZHobfNLUctOSqxxYLNmwuBMAAWwAkaNBOhpYNvMcwNvGQDjcqqCmqAnbQmkOwPVwDLYFsbubNgPTFUDolNErgcCfVObbXPcDTuwZdqkGPsXRKkSKoMNFkLtqIGwSTFvleorZDXDqpTXREchJxTeauihbxxmIEouzStXdWqiwZEMgEUSyFIRTdirlKCFfElgDtGEMJEHHHRxezbkSLIMGhcqSMACAglugjMuBRFZghykBllcjoXXEHkcqnSccdVhNSlSmvtFKSFXCLeEaIClpVbmxGHjdcowIqpACcsouFMFdiJOmtGoKLYBEXdldnJiUYAWUGBVubSrQDJiCzwIjZOyHziyfCtuYioZrMuVeKbrCuduknMHGVzlLNCREdQGNNUAxYtglKIxLgkZFwVazjGCKpNLhxfXsGtqnhpfWVXtymXHOaOaLADKMzZplAIbWpVBMmSwEQZbUrqEqxwBAsMAO');
        get_2 = objectStore_3641.get(KeyRange_10);
    }
    catch (e){
    }

    var count_1 = objectStore_3641.count();
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('wIQBfpLWmrQkgixxamfnmZLedGbCaKBLNLqBoaDIoeeUkJpGSBCEIcUXrFtDpNqAEbpFlbCwijhlZDjDrIojpSMZacFWXdKJuwlPYsujOQGbmyiocFTHOFhMynpVHSpuNaMFFwJHOojjArMnkZHobfNLUctOSqxxYLNmwuBMAAWwAkaNBOhpYNvMcwNvGQDjcqqCmqAnbQmkOwPVwDLYFsbubNgPTFUDolNErgcCfVObbXPcDTuwZdqkGPsXRKkSKoMNFkLtqIGwSTFvleorZDXDqpTXREchJxTeauihbxxmIEouzStXdWqiwZEMgEUSyFIRTdirlKCFfElgDtGEMJEHHHRxezbkSLIMGhcqSMACAglugjMuBRFZghykBllcjoXXEHkcqnSccdVhNSlSmvtFKSFXCLeEaIClpVbmxGHjdcowIqpACcsouFMFdiJOmtGoKLYBEXdldnJiUYAWUGBVubSrQDJiCzwIjZOyHziyfCtuYioZrMuVeKbrCuduknMHGVzlLNCREdQGNNUAxYtglKIxLgkZFwVazjGCKpNLhxfXsGtqnhpfWVXtymXHOaOaLADKMzZplAIbWpVBMmSwEQZbUrqEqxwBAsMAO', 'iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ', false, true);
        get_3 = objectStore_3641.get(KeyRange_12);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ', 'roBAEfOdgXyTYMdqABgxsuWyDUmImejIgxbLeIukBBwtBbCSOEHBDOLnMuwjcUBDWzcWwaeThCopjAJFopGluWoMWesZZeMbDUHfgMYDuEscIhmxZCQuWSrglzLgWZaHDFxJkSwFXbQsitZWYfTFkFLIzETSvJhhNsihqaaoCMrdTkeIbmUFEOUvrtrtBKBUgwOGwphApHkgwYGjxfSXTgUmAmRFSVRlAurmAyAWHcDbRGBWMMlSvhzogJtDIdECeXvvJtMJvlTRmbDNJzkKsgvJGCKJmorkNbzOAqygwMErpjKGCdtmZkfLCWPzSKkNpiamUcCcFoylGJcAbcmynQNQEvEZfrsFumoSwfwwTxNdFsDiLaeCSgGlXAgjTuNkDMuNTcgLEseGjSOBrZVVwCQMCsJYKBxUeriVEDeTrOcaXdoxhcwSjbFdkfRcpRfCRRBWmHvUGpJEXzqjvpXiCebZWQiEFdPEHYkOQRFMzpxSejoKxnUgRlpeJXrcMEIZmATpQmnf', false, true);
        getAll_1 = objectStore_3641.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO');
        getAll_1 = objectStore_3641.getAll(KeyRange_15);
    }

    var count_2 = objectStore_3641.count();
    txn_5446.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5446.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5446.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5447 = db.transaction(['objectStore_3641', 'objectStore_3644'], 'readonly', {durability:"relaxed"})
    var objectStore_3644 = txn_5447.objectStore('objectStore_3644');
    txn_5447.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5447.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5447.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5448 = db.transaction(['objectStore_3641'], 'readwrite', {durability:"relaxed"})
    var objectStore_3641 = txn_5448.objectStore('objectStore_3641');
    var add_3 = objectStore_3641.add({f0_f: '<array>', f1_h: '<object>'}, 'tKseaznCzyLZOPhDWnfDNeIlbyUPGWxHWkMjTLwssBvvLfzvdBEGyDKGJXqDdvLviRzsufmpJNrfOrtwBDfFuTkBxGxTuPvpDVUqtIsWOQGKditCWlRrCEGGTugQAQDorGcNcDqcVpTLrVqENBwupOVLSYZhlZgPPrtAKXXDawYZGdzeuKidGDvdoagVcfwAIuYPkttPGwGiuLjfqaLkARnLdRdvhlYHkLQlYiAqpDanPMHmQnUEGisgkhFtqhaZmVFUQvrOZOURUlLnlZARNkJicgnRBRkaCIQTGRbElGhQzEZBPDNWLWLXpssjRkWxubFAqGmbbCaeYcxuOxTFmfudJmXIpwPyKWwtjTFKLXCWHfUPMFuWGbgKqTySfdxeYynmZspbAHEUXZQgxqrOIALFafNIdhdzTozzjZyqBHdpAJKnoTvQWTzGRwGsCiyBdLDcGZpboYCHENPGQzFAngwFpOKKwlZjOyHWQzbwFokhinNqSVSyzgRjrpwnnfDhCYMLYrXBgrrEYkmZcBYyJNjXjTwPXMDvyKPQqBmdhQWewpauScTyvKNUnTOvEnRFfZrojcylirOtYrnBuRkhxqpoYmIqvfwqdzwmIEXUzkKfaZjlkTGxAgIdzQyBTlbYhlpjeBrTkosh');
    var count_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ', 'iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ', true, false);
        count_3 = objectStore_3641.count(KeyRange_16);
    }
    catch (e){
    }

    var put_3 = objectStore_3641.put({f0_g: '<null>', f1_a: '<number>', f2_v: '<number>'}, 'VUtKfXkBwWLEuHdMmjrTTXwajpIGlFkyFalvbEvoutEBDsUNxzlAHcBVhUWlNwNCxKxYnzNRflmWQydqxTfCIGXnsObfZuYFxDMuNsOsjDKGTWUAxRemxCoCrDtyACfkVMEwRauPORnvvaGQcWrWXabrLeMVuFcJpXsOIUrnKRjADkzAuxZAkXGNBYYMBezhBasSOOKiGmhDineJZKpUPPNXgRHkZUEyTfvCAqIJRARTZDyjvpDMEvXVkxEDijsKuCtOiYxIIguVdCVqFyukAwuLEUPM');
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('VUtKfXkBwWLEuHdMmjrTTXwajpIGlFkyFalvbEvoutEBDsUNxzlAHcBVhUWlNwNCxKxYnzNRflmWQydqxTfCIGXnsObfZuYFxDMuNsOsjDKGTWUAxRemxCoCrDtyACfkVMEwRauPORnvvaGQcWrWXabrLeMVuFcJpXsOIUrnKRjADkzAuxZAkXGNBYYMBezhBasSOOKiGmhDineJZKpUPPNXgRHkZUEyTfvCAqIJRARTZDyjvpDMEvXVkxEDijsKuCtOiYxIIguVdCVqFyukAwuLEUPM', 'jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', true, false);
        get_4 = objectStore_3641.get(KeyRange_18);
    }
    catch (e){
    }

    var count_4 = objectStore_3641.count();
    txn_5448.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5448.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5448.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5449 = db.transaction(['objectStore_3641'], 'readonly', {durability:"strict"})
    var objectStore_3641 = txn_5449.objectStore('objectStore_3641');
    var getAll_2 = objectStore_3641.getAll(53275226);
    var index_1 = objectStore_3641.index('index_2453');
    var getAllKeys_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('wIQBfpLWmrQkgixxamfnmZLedGbCaKBLNLqBoaDIoeeUkJpGSBCEIcUXrFtDpNqAEbpFlbCwijhlZDjDrIojpSMZacFWXdKJuwlPYsujOQGbmyiocFTHOFhMynpVHSpuNaMFFwJHOojjArMnkZHobfNLUctOSqxxYLNmwuBMAAWwAkaNBOhpYNvMcwNvGQDjcqqCmqAnbQmkOwPVwDLYFsbubNgPTFUDolNErgcCfVObbXPcDTuwZdqkGPsXRKkSKoMNFkLtqIGwSTFvleorZDXDqpTXREchJxTeauihbxxmIEouzStXdWqiwZEMgEUSyFIRTdirlKCFfElgDtGEMJEHHHRxezbkSLIMGhcqSMACAglugjMuBRFZghykBllcjoXXEHkcqnSccdVhNSlSmvtFKSFXCLeEaIClpVbmxGHjdcowIqpACcsouFMFdiJOmtGoKLYBEXdldnJiUYAWUGBVubSrQDJiCzwIjZOyHziyfCtuYioZrMuVeKbrCuduknMHGVzlLNCREdQGNNUAxYtglKIxLgkZFwVazjGCKpNLhxfXsGtqnhpfWVXtymXHOaOaLADKMzZplAIbWpVBMmSwEQZbUrqEqxwBAsMAO', 'tKseaznCzyLZOPhDWnfDNeIlbyUPGWxHWkMjTLwssBvvLfzvdBEGyDKGJXqDdvLviRzsufmpJNrfOrtwBDfFuTkBxGxTuPvpDVUqtIsWOQGKditCWlRrCEGGTugQAQDorGcNcDqcVpTLrVqENBwupOVLSYZhlZgPPrtAKXXDawYZGdzeuKidGDvdoagVcfwAIuYPkttPGwGiuLjfqaLkARnLdRdvhlYHkLQlYiAqpDanPMHmQnUEGisgkhFtqhaZmVFUQvrOZOURUlLnlZARNkJicgnRBRkaCIQTGRbElGhQzEZBPDNWLWLXpssjRkWxubFAqGmbbCaeYcxuOxTFmfudJmXIpwPyKWwtjTFKLXCWHfUPMFuWGbgKqTySfdxeYynmZspbAHEUXZQgxqrOIALFafNIdhdzTozzjZyqBHdpAJKnoTvQWTzGRwGsCiyBdLDcGZpboYCHENPGQzFAngwFpOKKwlZjOyHWQzbwFokhinNqSVSyzgRjrpwnnfDhCYMLYrXBgrrEYkmZcBYyJNjXjTwPXMDvyKPQqBmdhQWewpauScTyvKNUnTOvEnRFfZrojcylirOtYrnBuRkhxqpoYmIqvfwqdzwmIEXUzkKfaZjlkTGxAgIdzQyBTlbYhlpjeBrTkosh', false, true);
        getAllKeys_3 = objectStore_3641.getAllKeys(KeyRange_20, 1956410348);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO');
        getAllKeys_3 = objectStore_3641.getAllKeys(KeyRange_21);
    }

    var index_2 = objectStore_3641.index('index_2453');
    var index_3 = objectStore_3641.index('index_2453');
    var count_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', 'jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', false, false);
        count_5 = objectStore_3641.count(KeyRange_22);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.bound('jjSYmDJKNpywrBtsJuIKJUZKZstIijeqbmviiwfPabmusZQpNEBinWAKRlUOUDgaZwHVfazOzfSqExREMOYhUcZYiTblyqefuXHgOynmvtUKmraKQCtBTOrwxbquPLeddwSeMNuXaKETbexOeDLgJXbKzkfhUDHWsZESxffQQeFCuhqTftHYAUTHhuabqJCVZAqWiELiKMswswgoCswqPhUwGUiisGLrKILPvuWkCjxrnzIuaZSvLCoEwpedrWzdpJeOSiTNDhEISQbECNbmncBftEvLhDgELeouNMAcvyAWqpQreRTNcTcyfUIXwCIUXTwUbPnJEHPmqQzoABHZNRzUMpPFpTfbktmbjeMMZijLZkCvOBIDZREnvBqmnnsSvvhiCDGrdcXvbiYEsZjYRSmjrDpPiaJbJFsjWzAFgYyFYclRxCGKXZyicJDHEJJsGrAxathZeEmNKSCOfuanYXwCsuWtSpbeuRBVrbxXSzfiezKSeRrZqhaGVhqbxewVnMKKBEdcGHJssDyjUqcjwNdstYkpjOvgjDoyEccMrBrDrKKpYutqxEpBjqGPmlxhuALfIhLpOPQfciukVKzQOzmltJunLZdaIgZzJBPyXDsqNtmiZUaaKQtbeOWVimQtbGFqlyNPmqNQOieMNxRppfVhCnBozsZxlpZypKiQfXdetLZPiiXBiyVeRFYsniOwdSOscxCjuhZecOHPScRhBbIJZBALmrIfkJxlkUhjHGzreQUAnzfFmbAPmLhvyyEcPuLEQRyirYPAdTrJZsoevjQjgjDdCdmEaWbUpLcCUlidxGPVPLNYntUBgbUzrMFTSIihRZpHUxgZpcUwffgcSNO', 'roBAEfOdgXyTYMdqABgxsuWyDUmImejIgxbLeIukBBwtBbCSOEHBDOLnMuwjcUBDWzcWwaeThCopjAJFopGluWoMWesZZeMbDUHfgMYDuEscIhmxZCQuWSrglzLgWZaHDFxJkSwFXbQsitZWYfTFkFLIzETSvJhhNsihqaaoCMrdTkeIbmUFEOUvrtrtBKBUgwOGwphApHkgwYGjxfSXTgUmAmRFSVRlAurmAyAWHcDbRGBWMMlSvhzogJtDIdECeXvvJtMJvlTRmbDNJzkKsgvJGCKJmorkNbzOAqygwMErpjKGCdtmZkfLCWPzSKkNpiamUcCcFoylGJcAbcmynQNQEvEZfrsFumoSwfwwTxNdFsDiLaeCSgGlXAgjTuNkDMuNTcgLEseGjSOBrZVVwCQMCsJYKBxUeriVEDeTrOcaXdoxhcwSjbFdkfRcpRfCRRBWmHvUGpJEXzqjvpXiCebZWQiEFdPEHYkOQRFMzpxSejoKxnUgRlpeJXrcMEIZmATpQmnf', true, true);
        get_5 = objectStore_3641.get(KeyRange_24);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.only('roBAEfOdgXyTYMdqABgxsuWyDUmImejIgxbLeIukBBwtBbCSOEHBDOLnMuwjcUBDWzcWwaeThCopjAJFopGluWoMWesZZeMbDUHfgMYDuEscIhmxZCQuWSrglzLgWZaHDFxJkSwFXbQsitZWYfTFkFLIzETSvJhhNsihqaaoCMrdTkeIbmUFEOUvrtrtBKBUgwOGwphApHkgwYGjxfSXTgUmAmRFSVRlAurmAyAWHcDbRGBWMMlSvhzogJtDIdECeXvvJtMJvlTRmbDNJzkKsgvJGCKJmorkNbzOAqygwMErpjKGCdtmZkfLCWPzSKkNpiamUcCcFoylGJcAbcmynQNQEvEZfrsFumoSwfwwTxNdFsDiLaeCSgGlXAgjTuNkDMuNTcgLEseGjSOBrZVVwCQMCsJYKBxUeriVEDeTrOcaXdoxhcwSjbFdkfRcpRfCRRBWmHvUGpJEXzqjvpXiCebZWQiEFdPEHYkOQRFMzpxSejoKxnUgRlpeJXrcMEIZmATpQmnf');
        get_6 = objectStore_3641.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_28 = IDBKeyRange.bound('tKseaznCzyLZOPhDWnfDNeIlbyUPGWxHWkMjTLwssBvvLfzvdBEGyDKGJXqDdvLviRzsufmpJNrfOrtwBDfFuTkBxGxTuPvpDVUqtIsWOQGKditCWlRrCEGGTugQAQDorGcNcDqcVpTLrVqENBwupOVLSYZhlZgPPrtAKXXDawYZGdzeuKidGDvdoagVcfwAIuYPkttPGwGiuLjfqaLkARnLdRdvhlYHkLQlYiAqpDanPMHmQnUEGisgkhFtqhaZmVFUQvrOZOURUlLnlZARNkJicgnRBRkaCIQTGRbElGhQzEZBPDNWLWLXpssjRkWxubFAqGmbbCaeYcxuOxTFmfudJmXIpwPyKWwtjTFKLXCWHfUPMFuWGbgKqTySfdxeYynmZspbAHEUXZQgxqrOIALFafNIdhdzTozzjZyqBHdpAJKnoTvQWTzGRwGsCiyBdLDcGZpboYCHENPGQzFAngwFpOKKwlZjOyHWQzbwFokhinNqSVSyzgRjrpwnnfDhCYMLYrXBgrrEYkmZcBYyJNjXjTwPXMDvyKPQqBmdhQWewpauScTyvKNUnTOvEnRFfZrojcylirOtYrnBuRkhxqpoYmIqvfwqdzwmIEXUzkKfaZjlkTGxAgIdzQyBTlbYhlpjeBrTkosh', 'tKseaznCzyLZOPhDWnfDNeIlbyUPGWxHWkMjTLwssBvvLfzvdBEGyDKGJXqDdvLviRzsufmpJNrfOrtwBDfFuTkBxGxTuPvpDVUqtIsWOQGKditCWlRrCEGGTugQAQDorGcNcDqcVpTLrVqENBwupOVLSYZhlZgPPrtAKXXDawYZGdzeuKidGDvdoagVcfwAIuYPkttPGwGiuLjfqaLkARnLdRdvhlYHkLQlYiAqpDanPMHmQnUEGisgkhFtqhaZmVFUQvrOZOURUlLnlZARNkJicgnRBRkaCIQTGRbElGhQzEZBPDNWLWLXpssjRkWxubFAqGmbbCaeYcxuOxTFmfudJmXIpwPyKWwtjTFKLXCWHfUPMFuWGbgKqTySfdxeYynmZspbAHEUXZQgxqrOIALFafNIdhdzTozzjZyqBHdpAJKnoTvQWTzGRwGsCiyBdLDcGZpboYCHENPGQzFAngwFpOKKwlZjOyHWQzbwFokhinNqSVSyzgRjrpwnnfDhCYMLYrXBgrrEYkmZcBYyJNjXjTwPXMDvyKPQqBmdhQWewpauScTyvKNUnTOvEnRFfZrojcylirOtYrnBuRkhxqpoYmIqvfwqdzwmIEXUzkKfaZjlkTGxAgIdzQyBTlbYhlpjeBrTkosh', false, true);
        getAll_3 = objectStore_3641.getAll(KeyRange_28, 760649168);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ');
        getAll_3 = objectStore_3641.getAll(KeyRange_29);
    }

    var count_6;
    try{
        KeyRange_30 = IDBKeyRange.only('iiuTxuGyKdyJftAHJyjszlJGErNzydgDdqKbRqyBDDoyexxMWpsEYyqlWgqRELIRntwqINKxUcwbtEdxveXKuUvoPFiyZfMKqjpmHqnaXGmUutjbhPGbxutwngjurKgZnAQEAVuUjQDqXuscHfbYahneoUKDwnNIaHNOMpvfQIaBVuVzegBrSaucpOmDzWMoHOraUqIsNPWyWuiQjKYLEjQFEYGipVLSRUXXHBzWNAnHtpcdHUihOrTTTjZyLncgNVrknXVmMrTbTCkOaPqieCiSRGzfmnGkNBdyahCfQ');
        count_6 = objectStore_3641.count(KeyRange_30);
    }
    catch (e){
    }

    txn_5449.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5449.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5449.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2667')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};