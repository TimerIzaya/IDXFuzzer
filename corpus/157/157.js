let db;
const openRequest = window.indexedDB.open('str_3819', 1066365364035470)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_894', {keypath: 'xaYuPJozMcYOEnbssALiEcfxqIGZYvilpwPWzfIXvGfqpOZetBcErSMEnEuwTXzHlFWNdupYqKBvnNHSUaWnUahcrxffTXkYbvsDNIWxoqPUPAYkASiAhAZMYPXJrqLJWoOfkWynNTLAwcjUbvcjiNyBLCDxkqydtIQlxAQVkLjvNTGtnHAChbHvgpoQpZPVyjxLgOwRsjDlpcvTISBHdPdnfAlknqlhsbxsRlYsVAKYrJTHjmjMHwnmFcZbozHfGCCkDUExysihExzGLGdjpPopehsNDrkNsqOYkraGHbc', autoIncrement: true});
    var index_613 = objectStore_0.createIndex('index_613', 'test', {unique: true});
    var put_0 = objectStore_0.put({f0_d: '<array>', f1_y: '<string>', f2_y: '<string>', f3_t: '<array>'}, 'fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW');
    var objectStore_1 = db.createObjectStore('objectStore_895');
    var add_0 = objectStore_0.add({f0_h: '<null>', f1_s: '<array>', f2_i: '<boolean>', f3_b: '<boolean>', f4_l: '<string>', f5_k: '<array>', f6_c: '<string>', f7_o: '<number>', f8_h: '<null>', f9_k: '<boolean>', f10_f: '<number>', f11_f: '<object>', f12_b: '<object>', f13_s: '<string>', f14_a: '<null>', f15_u: '<array>', f16_c: '<object>', f17_w: '<object>', f18_q: '<object>', f19_h: '<array>', f20_e: '<boolean>', f21_u: '<number>', f22_z: '<boolean>', f23_r: '<object>', f24_n: '<array>', f25_r: '<number>', f26_y: '<boolean>', f27_t: '<object>', f28_e: '<object>', f29_y: '<null>', f30_u: '<string>', f31_s: '<boolean>', f32_w: '<null>', f33_s: '<object>', f34_q: '<number>', f35_w: '<null>', f36_i: '<boolean>', f37_u: '<object>', f38_z: '<string>', f39_k: '<object>', f40_f: '<number>', f41_d: '<number>', f42_j: '<string>', f43_f: '<null>', f44_m: '<string>', f45_a: '<object>', f46_k: '<array>', f47_o: '<array>', f48_v: '<array>', f49_g: '<null>', f50_q: '<boolean>', f51_s: '<null>', f52_h: '<object>', f53_a: '<number>', f54_j: '<null>', f55_r: '<array>', f56_g: '<boolean>', f57_m: '<object>', f58_s: '<string>', f59_y: '<object>', f60_z: '<boolean>', f61_v: '<string>', f62_c: '<string>', f63_i: '<null>', f64_u: '<object>', f65_d: '<string>', f66_d: '<number>', f67_z: '<string>', f68_x: '<array>', f69_h: '<null>', f70_a: '<number>', f71_p: '<object>', f72_v: '<array>', f73_p: '<null>', f74_c: '<null>', f75_e: '<string>', f76_d: '<object>', f77_u: '<object>', f78_q: '<string>', f79_j: '<object>', f80_u: '<object>', f81_a: '<boolean>', f82_a: '<array>', f83_m: '<string>', f84_c: '<boolean>', f85_y: '<number>', f86_l: '<null>', f87_b: '<string>', f88_m: '<null>', f89_p: '<boolean>', f90_y: '<string>', f91_f: '<null>', f92_x: '<string>', f93_o: '<array>', f94_k: '<object>', f95_p: '<number>', f96_b: '<boolean>', f97_p: '<object>', f98_k: '<boolean>', f99_l: '<boolean>', f100_q: '<boolean>', f101_p: '<object>', f102_q: '<object>', f103_u: '<number>', f104_y: '<boolean>', f105_x: '<object>', f106_g: '<number>', f107_l: '<number>', f108_n: '<number>', f109_d: '<array>', f110_j: '<object>', f111_u: '<object>', f112_r: '<null>', f113_n: '<string>', f114_r: '<number>', f115_d: '<string>', f116_y: '<boolean>', f117_x: '<array>', f118_p: '<boolean>', f119_g: '<string>', f120_g: '<object>', f121_q: '<null>', f122_l: '<string>', f123_k: '<number>', f124_e: '<string>', f125_q: '<string>', f126_c: '<boolean>', f127_p: '<object>', f128_o: '<null>', f129_m: '<boolean>', f130_c: '<null>', f131_d: '<object>', f132_w: '<number>', f133_z: '<object>', f134_o: '<object>', f135_l: '<boolean>', f136_s: '<null>', f137_r: '<boolean>', f138_t: '<array>', f139_c: '<array>', f140_z: '<array>', f141_w: '<number>', f142_o: '<object>', f143_m: '<array>', f144_i: '<number>', f145_n: '<null>', f146_u: '<boolean>', f147_i: '<string>', f148_j: '<null>', f149_w: '<object>', f150_j: '<object>', f151_w: '<array>', f152_z: '<object>', f153_a: '<string>', f154_m: '<boolean>', f155_p: '<object>', f156_s: '<boolean>', f157_n: '<number>', f158_y: '<string>', f159_i: '<array>', f160_g: '<string>', f161_e: '<string>', f162_v: '<array>', f163_j: '<null>', f164_s: '<array>', f165_m: '<object>', f166_h: '<string>', f167_i: '<array>', f168_k: '<array>', f169_j: '<object>', f170_p: '<string>', f171_h: '<array>', f172_y: '<null>', f173_x: '<object>', f174_d: '<string>', f175_p: '<boolean>', f176_a: '<null>', f177_b: '<boolean>', f178_p: '<string>', f179_l: '<number>', f180_y: '<object>', f181_t: '<array>', f182_g: '<number>', f183_w: '<number>', f184_i: '<object>', f185_z: '<null>', f186_b: '<array>', f187_c: '<number>', f188_x: '<array>', f189_d: '<number>', f190_s: '<object>', f191_q: '<null>', f192_a: '<array>', f193_f: '<string>', f194_e: '<array>', f195_o: '<string>', f196_q: '<object>', f197_q: '<null>', f198_n: '<array>', f199_p: '<array>', f200_b: '<object>', f201_f: '<array>', f202_d: '<number>', f203_p: '<boolean>', f204_j: '<null>', f205_g: '<object>', f206_w: '<object>', f207_i: '<null>', f208_w: '<boolean>', f209_t: '<number>', f210_p: '<boolean>', f211_g: '<object>', f212_o: '<string>', f213_a: '<null>', f214_d: '<null>', f215_l: '<object>', f216_l: '<boolean>', f217_f: '<boolean>', f218_u: '<number>', f219_x: '<string>', f220_y: '<object>', f221_v: '<null>', f222_y: '<boolean>', f223_g: '<number>', f224_b: '<array>', f225_f: '<boolean>', f226_k: '<null>', f227_e: '<string>', f228_d: '<number>', f229_q: '<number>', f230_u: '<null>', f231_j: '<boolean>', f232_b: '<string>', f233_b: '<object>', f234_r: '<string>', f235_k: '<boolean>', f236_v: '<object>', f237_d: '<boolean>', f238_o: '<object>', f239_e: '<number>', f240_f: '<number>', f241_m: '<boolean>', f242_f: '<null>', f243_o: '<object>', f244_d: '<null>', f245_l: '<number>', f246_l: '<number>', f247_o: '<boolean>', f248_k: '<string>', f249_q: '<array>', f250_e: '<array>', f251_l: '<null>', f252_o: '<number>', f253_u: '<string>', f254_t: '<null>', f255_a: '<object>', f256_k: '<number>', f257_j: '<object>', f258_a: '<array>', f259_s: '<string>', f260_g: '<object>', f261_b: '<object>', f262_n: '<array>', f263_w: '<null>', f264_z: '<string>', f265_d: '<string>', f266_i: '<string>', f267_k: '<object>', f268_e: '<string>', f269_k: '<null>', f270_n: '<number>', f271_h: '<object>', f272_e: '<string>', f273_h: '<boolean>', f274_n: '<string>', f275_k: '<number>', f276_h: '<null>', f277_u: '<boolean>', f278_y: '<string>', f279_i: '<number>', f280_k: '<null>', f281_j: '<string>', f282_v: '<array>', f283_x: '<boolean>', f284_g: '<null>', f285_m: '<array>', f286_f: '<string>', f287_o: '<number>', f288_u: '<boolean>', f289_v: '<number>', f290_a: '<boolean>', f291_z: '<object>', f292_k: '<string>', f293_r: '<string>', f294_z: '<object>', f295_z: '<array>', f296_r: '<string>', f297_u: '<boolean>', f298_k: '<string>', f299_v: '<null>', f300_y: '<array>', f301_w: '<null>', f302_f: '<string>', f303_l: '<number>', f304_c: '<null>', f305_z: '<array>', f306_r: '<string>', f307_z: '<object>', f308_w: '<object>', f309_e: '<null>', f310_d: '<null>', f311_d: '<string>', f312_s: '<object>', f313_j: '<array>', f314_i: '<boolean>', f315_b: '<array>', f316_l: '<array>', f317_l: '<null>', f318_t: '<string>', f319_d: '<string>', f320_i: '<boolean>', f321_h: '<number>', f322_u: '<array>', f323_k: '<number>', f324_j: '<string>', f325_x: '<object>', f326_w: '<array>', f327_v: '<array>', f328_k: '<boolean>', f329_p: '<boolean>', f330_o: '<string>', f331_g: '<object>', f332_v: '<array>', f333_r: '<boolean>', f334_s: '<number>', f335_t: '<array>', f336_i: '<number>', f337_i: '<string>', f338_c: '<array>', f339_a: '<boolean>', f340_r: '<object>', f341_o: '<null>', f342_c: '<array>', f343_v: '<array>', f344_q: '<string>', f345_a: '<number>', f346_f: '<string>', f347_k: '<number>', f348_z: '<null>', f349_p: '<array>', f350_n: '<array>', f351_d: '<boolean>', f352_z: '<number>', f353_b: '<string>', f354_s: '<boolean>', f355_k: '<string>', f356_y: '<number>', f357_r: '<array>', f358_e: '<array>', f359_m: '<object>', f360_d: '<object>', f361_q: '<string>', f362_k: '<null>', f363_v: '<number>', f364_o: '<number>', f365_q: '<boolean>', f366_c: '<null>', f367_e: '<string>', f368_s: '<null>', f369_r: '<string>', f370_a: '<number>', f371_q: '<boolean>', f372_v: '<array>', f373_d: '<boolean>', f374_b: '<string>', f375_j: '<array>', f376_l: '<array>', f377_o: '<boolean>', f378_m: '<boolean>', f379_e: '<array>', f380_q: '<number>', f381_q: '<object>', f382_h: '<null>', f383_j: '<object>', f384_s: '<boolean>', f385_n: '<number>', f386_l: '<string>', f387_n: '<boolean>', f388_o: '<number>', f389_a: '<array>', f390_l: '<string>', f391_i: '<number>', f392_o: '<object>', f393_w: '<object>', f394_t: '<string>', f395_k: '<string>', f396_o: '<boolean>', f397_f: '<boolean>', f398_z: '<null>', f399_e: '<string>', f400_d: '<null>', f401_m: '<object>', f402_y: '<string>'}, 'SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var clear_0 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_896', {autoIncrement: true});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.only('SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW');
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_d: '<number>', f1_r: '<object>', f2_l: '<array>', f3_s: '<array>', f4_d: '<null>', f5_p: '<null>', f6_u: '<string>', f7_w: '<number>'}, 'PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM');
    var index_614 = objectStore_1.createIndex('index_614', 'test', {unique: true});
    var clear_1 = objectStore_0.clear();
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM', 'SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW', true, false);
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_897', {autoIncrement: false});
    var index_615 = objectStore_3.createIndex('index_615', 'test');
    var objectStore_4 = db.createObjectStore('objectStore_898', {autoIncrement: false});
    var clear_2 = objectStore_2.clear();
    var index_616 = objectStore_4.createIndex('index_616', 'test', {multiEntry: false});
    var clear_3 = objectStore_0.clear();
    var index_617 = objectStore_0.createIndex('index_617', 'test');
    var add_2 = objectStore_4.add({f0_y: '<object>', f1_d: '<null>'}, 'uzVMywNvlhjLPcfibsnXyusDpWegghqXhCmkRzcJsIrhoCQvQjOLgIKhBmBtYUGaEaONackGdSUXfJTWPXtbWkyFRRAAVaFUClvhORElKkFttQVyVOZbfXsbnqFeoFEgDmTad');
    var index_618 = objectStore_2.createIndex('index_618', 'test', {unique: true, multiEntry: false});
    var index_0 = objectStore_1.index('index_614');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1370 = db.transaction(['objectStore_896', 'objectStore_898'], 'readwrite', {durability:"default"})
    var objectStore_898 = txn_1370.objectStore('objectStore_898');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.only('uzVMywNvlhjLPcfibsnXyusDpWegghqXhCmkRzcJsIrhoCQvQjOLgIKhBmBtYUGaEaONackGdSUXfJTWPXtbWkyFRRAAVaFUClvhORElKkFttQVyVOZbfXsbnqFeoFEgDmTad');
        delete_0 = objectStore_898.delete(KeyRange_6);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('uzVMywNvlhjLPcfibsnXyusDpWegghqXhCmkRzcJsIrhoCQvQjOLgIKhBmBtYUGaEaONackGdSUXfJTWPXtbWkyFRRAAVaFUClvhORElKkFttQVyVOZbfXsbnqFeoFEgDmTad', true);
        delete_1 = objectStore_898.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.only('uzVMywNvlhjLPcfibsnXyusDpWegghqXhCmkRzcJsIrhoCQvQjOLgIKhBmBtYUGaEaONackGdSUXfJTWPXtbWkyFRRAAVaFUClvhORElKkFttQVyVOZbfXsbnqFeoFEgDmTad');
        get_1 = objectStore_898.get(KeyRange_10);
    }
    catch (e){
    }

    var add_3 = objectStore_898.add({f0_d: '<number>', f1_i: '<array>', f2_f: '<array>', f3_y: '<array>'}, 'LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH');
    var getAll_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', 'LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', true, true);
        getAll_0 = objectStore_898.getAll(KeyRange_12, 3348748052);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('uzVMywNvlhjLPcfibsnXyusDpWegghqXhCmkRzcJsIrhoCQvQjOLgIKhBmBtYUGaEaONackGdSUXfJTWPXtbWkyFRRAAVaFUClvhORElKkFttQVyVOZbfXsbnqFeoFEgDmTad');
        getAll_0 = objectStore_898.getAll(KeyRange_13);
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.bound('LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', 'LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', false, true);
        getAllKeys_0 = objectStore_898.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH');
        getAllKeys_0 = objectStore_898.getAllKeys(KeyRange_15);
    }

    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', true);
        count_2 = objectStore_898.count(KeyRange_16);
    }
    catch (e){
    }

    var put_1 = objectStore_898.put({f0_f: '<object>', f1_a: '<string>'}, 'CuRDumVTJNJAdeEKprqEyPMiRiSzQpsswxMpKqmiHhJlowvXFvreCrkdqzmUyskYZtrtIVIRdWTIcAVChraqUydrbDiNrfQeEvJlBkOUCCgQDkDvPyzfxmVkrjZjRuHjQqcauxIjYLkLTTAgTqqCtnmmeNhbXVPGyqBejeZpfLxoxcYCqkHDGUsOADTctGThESdUHheSqcNJTfsYjcJwjHTmSCfRBADEgNaDaAobeSrSNwqmiwWdavTNDNWTGdvMaTRPHsKoGOiaSPRMvIFTkrICBEQNuXiEDXPjbNCtYWeBHgxMBQmpkNBreCOYXyRxvSnQUhMzPIGOxvatntVboGqqJsceJQUZYNpObfXnBHtJfynPdXYEYQeRTlPTwHJKOwAaPmqabRrbanZMdWVEBMPKOXgdVmtScPDwsKUpNrcFBprLQIAtSAQqrBorWdNxKsrMfpexagWoVbSyJVrmYfiTlphliZLTZcnFwFYVwcdCqLCNAvfsmoKLbrTBIVoBJbGfoCyvguhMj');
    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', 'LAYYFKmWGayMugNLmWymUNQDTNqgpvogQYJUBxhpwptCbOouZAgsbycyUphVdFxBfCNYmtuuGZkPrvNDFgmYGXDgLVytBlYrCylQKmSwLvUzwyuoDHvouEebCBclOHgBZWyMTRPRScvreRamaRlyETaaUxkUnytBHLyUhLHmiBSrCDjgPhjsFDlAWEGpWLqIGHLsblhCJjYuAuYHfJTlSqjOYUFLYiXOSwCseHjqqjsIBMpyIJHepIwihqKYdpwfUEWnBELPCjvXSvzTPFkOSiZeFDGRpDiZxzZqFQbHTkWzCmUCValhamvLZhsiWXEVRXdkxXeSUDlwvlaEIJBwQICWbTJBLQRgXgyTUZkSxunuCmNJGIWTIEZjcAKvsbYjWFmaOlQLHYmalDeBNWBNiZiAYIMvFvzNJRhUxDkRpUqztuIBIXRfglmAMHqTcswCwriIvCbqmxEXPFPtCeuAKKgiDAOklCnuSWhsXFKDpLGtmnogVSqYwUkqUnPUgGzljnvhTiQpcrmRvljxLIACttmgLGASIrlSBWcVAGQpymGFeEsGSirMKtQwtreZUJThZaOQOcZZIEnGHvnfCVXwXxXpVkKYPhWMUCoOwqBGBwCQwhqfXaomHIkzIfZKLutASkedzJRmPNnSpBcOMOCqBhlmuidDTqyqhtPJlhKqRoIEHeCFXuresoyKCXvmLatQCSFhozUVcrdCfHoUUiXhnRzRsxLZecHMIBhzNorEvaAUhehsbKnMtEsjDwvShNQgWRZOlzHezNnmhxmExtlIGCwLxRvhwfmogrSDYBQJedqJrpdYgHnKocSDnfnxNZvsOJOnqHSVxNSkohshVUBEokWIujnNkPOfxdriiXXKzTlRKtSSgOSQiYKVUkGWfSIoLyDmlsKtYqaJndnTAwDoDBpxTqkmMkIFpjVLgfIuhCjbgobdtOCcbboDQnoyigIijgovMXylufUyRgZMakaZVnxPiLAH', false, true);
        get_2 = objectStore_898.get(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_898.getAllKeys(2639932558);
    txn_1370.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1370.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1370.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1371 = db.transaction(['objectStore_895'], 'readonly', {durability:"relaxed"})
    var objectStore_895 = txn_1371.objectStore('objectStore_895');
    txn_1371.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1371.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1371.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1372 = db.transaction(['objectStore_896', 'objectStore_897', 'objectStore_894', 'objectStore_895', 'objectStore_898'], 'readwrite', {durability:"strict"})
    var objectStore_894 = txn_1372.objectStore('objectStore_894');
    var add_4 = objectStore_894.add({f0_l: '<string>', f1_z: '<number>', f2_h: '<array>', f3_w: '<null>', f4_i: '<object>', f5_p: '<boolean>'}, 'NDTXGyCOHBNfsgkvlVqZQPMFaHCSQfSrOPWWxzYZijkfcIKHbbrUcjwrZSdMdcGLNADxULWWBkcEyGGMABWPMFenDygbdOXxhvAovDQbDIBRgRGLWkJBtMJplqzywFJzjfOWLDLdcDhRDCAOeLCNCKvnhajFTSyPVRTnFgdtheLMCxxiQNIAOTglGpiIFBBTvgWEAgFadxNjgqZgsABcBPXweNKSMtRzVzEwhTMbWJTlYlvxdPRKuVdTTUWceLDtKCcFnEapbAwFbYeJIKFYtieYrbBMvUWWuMPFVjMSSdYYMzDJjCqsxeaELnbSIAOUlUspJVbBRZhqfEDtQhqfCJcWilSLvDwRnWrhIJuGeExEfHmVakliYgVVgsLcJyqssnwXtnqtfpIwImuiTgjskVuYCBDFdOASFSvkZnvcwjXJVkfpXhVbyIcbKatBnuXaiuhjpmJjJHUFganJvGDSUrbhZgbFGlidCFkmUJRWEcriUjqJAvUQQLKTkMYIsJLvZtZpeATzBTMeyzmlxtpWuZBhYQcqhioxvEgQVwKPZHMiNMGJmxbhRBjbyhcBhlrKQiwMhUSnvlauyIdjBHRmLqWivLLQCgOlknNjrozKuXbkzVDCtaiVWpJAQQLiVlGdgwPkRdqHDTqRIVmAYCTgEOlfDbCWeWvSVctPKvZFvlrWdEYgfnPBauptvAFNlCxFPqZfXJSdcevkBGVMzUfzcoLybmuhaHuNhoNQYIWyemieikssDooeLQfakxwuGhTxcVJLXSYhTRDljvuwQkHxBiQTHsovYLIUIKcaSCEHpZUDVIWFCRxeSSdBYCqGXUjNchHWKSRYQYwApsWUIKBUrDNDTQDZFWrwnVCLANpohwPnaQbtCsulpxUuPGGFxQBFGUcCaZxAXzbVACxZBQBemgHaeSeINdksZjlBuKwBUIGYqqQzGAjSSzdWePxezjfrbdBispmaYFizwblcWWsBQdMxLacoZsYjXl');
    var clear_4 = objectStore_894.clear();
    var getAllKeys_2 = objectStore_894.getAllKeys();
    var clear_5 = objectStore_894.clear();
    var clear_6 = objectStore_894.clear();
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('NDTXGyCOHBNfsgkvlVqZQPMFaHCSQfSrOPWWxzYZijkfcIKHbbrUcjwrZSdMdcGLNADxULWWBkcEyGGMABWPMFenDygbdOXxhvAovDQbDIBRgRGLWkJBtMJplqzywFJzjfOWLDLdcDhRDCAOeLCNCKvnhajFTSyPVRTnFgdtheLMCxxiQNIAOTglGpiIFBBTvgWEAgFadxNjgqZgsABcBPXweNKSMtRzVzEwhTMbWJTlYlvxdPRKuVdTTUWceLDtKCcFnEapbAwFbYeJIKFYtieYrbBMvUWWuMPFVjMSSdYYMzDJjCqsxeaELnbSIAOUlUspJVbBRZhqfEDtQhqfCJcWilSLvDwRnWrhIJuGeExEfHmVakliYgVVgsLcJyqssnwXtnqtfpIwImuiTgjskVuYCBDFdOASFSvkZnvcwjXJVkfpXhVbyIcbKatBnuXaiuhjpmJjJHUFganJvGDSUrbhZgbFGlidCFkmUJRWEcriUjqJAvUQQLKTkMYIsJLvZtZpeATzBTMeyzmlxtpWuZBhYQcqhioxvEgQVwKPZHMiNMGJmxbhRBjbyhcBhlrKQiwMhUSnvlauyIdjBHRmLqWivLLQCgOlknNjrozKuXbkzVDCtaiVWpJAQQLiVlGdgwPkRdqHDTqRIVmAYCTgEOlfDbCWeWvSVctPKvZFvlrWdEYgfnPBauptvAFNlCxFPqZfXJSdcevkBGVMzUfzcoLybmuhaHuNhoNQYIWyemieikssDooeLQfakxwuGhTxcVJLXSYhTRDljvuwQkHxBiQTHsovYLIUIKcaSCEHpZUDVIWFCRxeSSdBYCqGXUjNchHWKSRYQYwApsWUIKBUrDNDTQDZFWrwnVCLANpohwPnaQbtCsulpxUuPGGFxQBFGUcCaZxAXzbVACxZBQBemgHaeSeINdksZjlBuKwBUIGYqqQzGAjSSzdWePxezjfrbdBispmaYFizwblcWWsBQdMxLacoZsYjXl', 'PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM', true, false);
        get_3 = objectStore_894.get(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('NDTXGyCOHBNfsgkvlVqZQPMFaHCSQfSrOPWWxzYZijkfcIKHbbrUcjwrZSdMdcGLNADxULWWBkcEyGGMABWPMFenDygbdOXxhvAovDQbDIBRgRGLWkJBtMJplqzywFJzjfOWLDLdcDhRDCAOeLCNCKvnhajFTSyPVRTnFgdtheLMCxxiQNIAOTglGpiIFBBTvgWEAgFadxNjgqZgsABcBPXweNKSMtRzVzEwhTMbWJTlYlvxdPRKuVdTTUWceLDtKCcFnEapbAwFbYeJIKFYtieYrbBMvUWWuMPFVjMSSdYYMzDJjCqsxeaELnbSIAOUlUspJVbBRZhqfEDtQhqfCJcWilSLvDwRnWrhIJuGeExEfHmVakliYgVVgsLcJyqssnwXtnqtfpIwImuiTgjskVuYCBDFdOASFSvkZnvcwjXJVkfpXhVbyIcbKatBnuXaiuhjpmJjJHUFganJvGDSUrbhZgbFGlidCFkmUJRWEcriUjqJAvUQQLKTkMYIsJLvZtZpeATzBTMeyzmlxtpWuZBhYQcqhioxvEgQVwKPZHMiNMGJmxbhRBjbyhcBhlrKQiwMhUSnvlauyIdjBHRmLqWivLLQCgOlknNjrozKuXbkzVDCtaiVWpJAQQLiVlGdgwPkRdqHDTqRIVmAYCTgEOlfDbCWeWvSVctPKvZFvlrWdEYgfnPBauptvAFNlCxFPqZfXJSdcevkBGVMzUfzcoLybmuhaHuNhoNQYIWyemieikssDooeLQfakxwuGhTxcVJLXSYhTRDljvuwQkHxBiQTHsovYLIUIKcaSCEHpZUDVIWFCRxeSSdBYCqGXUjNchHWKSRYQYwApsWUIKBUrDNDTQDZFWrwnVCLANpohwPnaQbtCsulpxUuPGGFxQBFGUcCaZxAXzbVACxZBQBemgHaeSeINdksZjlBuKwBUIGYqqQzGAjSSzdWePxezjfrbdBispmaYFizwblcWWsBQdMxLacoZsYjXl', 'fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW', true, true);
        get_4 = objectStore_894.get(KeyRange_22);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_24 = IDBKeyRange.bound('NDTXGyCOHBNfsgkvlVqZQPMFaHCSQfSrOPWWxzYZijkfcIKHbbrUcjwrZSdMdcGLNADxULWWBkcEyGGMABWPMFenDygbdOXxhvAovDQbDIBRgRGLWkJBtMJplqzywFJzjfOWLDLdcDhRDCAOeLCNCKvnhajFTSyPVRTnFgdtheLMCxxiQNIAOTglGpiIFBBTvgWEAgFadxNjgqZgsABcBPXweNKSMtRzVzEwhTMbWJTlYlvxdPRKuVdTTUWceLDtKCcFnEapbAwFbYeJIKFYtieYrbBMvUWWuMPFVjMSSdYYMzDJjCqsxeaELnbSIAOUlUspJVbBRZhqfEDtQhqfCJcWilSLvDwRnWrhIJuGeExEfHmVakliYgVVgsLcJyqssnwXtnqtfpIwImuiTgjskVuYCBDFdOASFSvkZnvcwjXJVkfpXhVbyIcbKatBnuXaiuhjpmJjJHUFganJvGDSUrbhZgbFGlidCFkmUJRWEcriUjqJAvUQQLKTkMYIsJLvZtZpeATzBTMeyzmlxtpWuZBhYQcqhioxvEgQVwKPZHMiNMGJmxbhRBjbyhcBhlrKQiwMhUSnvlauyIdjBHRmLqWivLLQCgOlknNjrozKuXbkzVDCtaiVWpJAQQLiVlGdgwPkRdqHDTqRIVmAYCTgEOlfDbCWeWvSVctPKvZFvlrWdEYgfnPBauptvAFNlCxFPqZfXJSdcevkBGVMzUfzcoLybmuhaHuNhoNQYIWyemieikssDooeLQfakxwuGhTxcVJLXSYhTRDljvuwQkHxBiQTHsovYLIUIKcaSCEHpZUDVIWFCRxeSSdBYCqGXUjNchHWKSRYQYwApsWUIKBUrDNDTQDZFWrwnVCLANpohwPnaQbtCsulpxUuPGGFxQBFGUcCaZxAXzbVACxZBQBemgHaeSeINdksZjlBuKwBUIGYqqQzGAjSSzdWePxezjfrbdBispmaYFizwblcWWsBQdMxLacoZsYjXl', 'SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW', true, true);
        delete_2 = objectStore_894.delete(KeyRange_24);
    }
    catch (e){
    }

    txn_1372.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1372.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1372.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1373 = db.transaction(['objectStore_895', 'objectStore_896'], 'readonly', {durability:"relaxed"})
    var objectStore_896 = txn_1373.objectStore('objectStore_896');
    var index_1 = objectStore_896.index('index_618');
    txn_1373.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1373.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1373.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1374 = db.transaction(['objectStore_894'], 'readonly', {durability:"relaxed"})
    var objectStore_894 = txn_1374.objectStore('objectStore_894');
    var count_3 = objectStore_894.count();
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW', 'fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW', true, true);
        get_5 = objectStore_894.get(KeyRange_26);
    }
    catch (e){
    }

    var count_4 = objectStore_894.count();
    var getAll_1 = objectStore_894.getAll(756554810);
    var index_2 = objectStore_894.index('index_613');
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM', 'PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM', false, false);
        get_6 = objectStore_894.get(KeyRange_28);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_30 = IDBKeyRange.bound('fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW', 'fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW', true, true);
        getAllKeys_3 = objectStore_894.getAllKeys(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW');
        getAllKeys_3 = objectStore_894.getAllKeys(KeyRange_31);
    }

    var getAllKeys_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('SjRFZQxmwvjimiuVtpYaDFnOSCPeATHevyAsRtNSGUEfZqwlpigBePMIqHrNWCgEUiizyHDfEHTfcbkUsHhyYAgauoiAhWPhbQgaZelaOBKDrVYIKWxeUCxJPVW', 'PNCqoXiCVupHcuiiERXgTkEKrCTnEyQcswMppbKGxBktJPXNHAiWlcKaviObpTskrbvAavJqHMHYcpUGhdJxAYVSKOqwhXCRqHSpHLxfYTCtzjuArojaKODxPKMixGOQJmjXQvCjusGWqvicobCDwrGIheCqQYKhAyWhTLPoFpLWfyYYUBHRkEWRDCZcBcuCCwaVuYtmeejdcxBCFLhwzbAsGnVrjrrwrSRNQfgGirtsoMpfztftffUUVGwTmRdgLyxaBVgtTmZCxrPbzpYbvjFqTwXpYPvfpdwYhtHaGPLUtbGtYgkPlWRBPYvhYsxXZWabncHmKhewERBpbVYsGpiUYThpLApBELshIQRHuNAbjxmAHtKoDWXVOQpiEUqRGkEeqBrZtiypqjOvgTZmSTIQlSJOTfJTlVrHNFDJHBXHbbclynraFtaNjRVljBdqkVcUJIXuiYuAtZWNKrvfKHCHIbtPngcTmFMkkwrkFGDlOSSnEFurfwdKbrffhCYqMfWAUeKBNFIBNDHKeZpwgwlEQkkobIBWAhsJTLEVuGLCQoSJsYxDCIlhdTqInHCSgUqQZbThTUrbGZKTefpFizJKQmUaGtmVBXRhWarrzxNjYWjSIuJQzsAdmzSGyWwLviXmANPBLwNAxbWLaRnkzYWlOARIiEWiuLXvlAJWXgiAyZLKmUIObKGKLTzWCcVVcaJtYczaKeDjoTlKFavEVixflOTPSvM', true, false);
        getAllKeys_4 = objectStore_894.getAllKeys(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('fAXknymgjGCiFSkWPQFszIKWPRfIOadlHRSfdEZbWrURHruPpEZeqaXKRpcxrkesqjJsTjACVbXksAWISZNPrFvssbJcZhmNLoSkSrqglohfzTCkcFSZDhwahdqvqWSAmHRGvsQywiuxioFaKxMeyTfNygTzYlWnuKzpeNikrDLZRCEHNpUEFsTgbURZRdCRFZuPJwFensefqLLDjLYgnWTxkkhtTmkmrPRgqxqCNfcUmlDUWuGyumwjsLlxmityWqZUGmqafnRQSAcTbBnhBwVPTQEWZAwBVkeAyMksHGKzPoqWxwJZPATWviNrQlpTdjSQsLeeZkDEVnrsJBYzqZsPWPKvBNEuRvzONPNAxbngcYYnwZcHfHUjDRCGmMqkyRSRYPqtdHHLegnFvjNXSfyCjaRxwZdJjDPIzVYEejsdGeVQrWEDKHjcaWGuGrpXdSQNcMmSPzeQgnoIYVtTyAQztPbFhatQOqTRtCAMwXkORkcvHyzIZVNiOXvZlTjErImPtuAJvsTEWSXWwdeUvUhOXGNVTUbWtBBpJqEqMbBlVnPVFcbAHAZMxsafOvvdNJFBjHssHnfmuuHitbbFpkcOIQPWqDDetEFZgmDLCcaicuDW');
        getAllKeys_4 = objectStore_894.getAllKeys(KeyRange_33);
    }

    txn_1374.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1374.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1374.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4652')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};