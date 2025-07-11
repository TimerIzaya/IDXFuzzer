let db;
const openRequest = window.indexedDB.open('str_4230', 2535680288673244)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4286', {keypath: 'pYNuHaCTXQFHyEdGGLTvQOPYuFOlftlufFWnTZkxevzNcKYMbWtaanizFWhJBPPvypAVcOLVdGarxCOfqtKzEFZikVFafZcwOqdsikfRfnPimXzdvfeHguXYchVXCvDhFLKRpYHVeAkrsAdExzVfCpPoaRJMDKRWGNSOkWEsNOzPIRJppCjeEEhtdtOWnLhwRkNySZEqRKwAKRXqPFuNGmOuOXrlKPEjXJwTcTsmxLwgFGygOuekMtvrEcaSrmghllMVUOxrRBtbiEMOCzeEylPUmMfZXjPkBIAFMahGsrzIDhSSeZBETiLjFfvYApoxlIqCXWxwfNcTjYUteGxzUBzzgWCBJnrmWNMDLhVhFTIcrbXmREmSxfDFPdnedHiheqGQMDCJSNHtvkXQXGxJcoBeomRnvsaDZLIZtHBiUMwPDyLZNiUaetoDrkvMkzvPMLIDUVDwymlhcZKPDyEemtMhVTMEkhByJMsCjErnHXIMvRGXHYelqDurvmMnYuQQcghcRPyWlkbkJKMzpnknj'});
    var objectStore_1 = db.createObjectStore('objectStore_4287');
    var put_0 = objectStore_0.put({f0_r: '<object>', f1_g: '<boolean>', f2_p: '<string>', f3_w: '<number>', f4_k: '<string>'}, 'uWNgNzGnWOmDbwDuSAeOUNPyCyuyXDGbMVsNeVyJMkmooYmyJUMoVlVwDrqSWWkqtjALvDbPgCpWxnkkFRThXikozHbjbGfZv');
    var count_0 = objectStore_0.count();
    var getAllKeys_0 = objectStore_0.getAllKeys(2731680640);
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('uWNgNzGnWOmDbwDuSAeOUNPyCyuyXDGbMVsNeVyJMkmooYmyJUMoVlVwDrqSWWkqtjALvDbPgCpWxnkkFRThXikozHbjbGfZv', true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_4288', {keypath: 'PYJqGeigiWZIweLuPVuUMkxfNEVDLzjGDPaenJvhGMdyudqXsgINPVPsmXZSQCOniOWQcIhYSWakIDhjDArPpYvEAUHYHwFqRcHJSeqMmkeAtBtfKhLRNFvmGwLERfhRqLyaZWzjjBEhweJDtzNohZyGotKBOfZbtuKrhNRDNnuEmQfRrcpOuNkmMfyscRMuxxpSEWwXcpNEpdmOLbIJXQMVGCldBZjFbcYaHCFoKJVFdBjNtTZBsXsUmqtXxrxNCjSzxEGrGpmHSycAkzMLeDLhKktipiHzuAYvvdyihWnNQeTkdclITnAcSBEZkMqHzbSkNDXyXnvVrhhcHBEeIAcHXLItSYvuvCOnsGOEuNKjzECPoKRKDdkltBKOagAoJxqJjCkXNxwNthVpAoXOynASxJxPAZUZTgdeHbddlOkjqhtFxqgjWraQghXuINJMxKuxQCAFNudCyYpDHWVYFwQrpIAhGjzLzbpRGfYMFULitMUREzKPRluNRMAWoKSADFSrEOPzUeLVyLLeblILnTOKGSlQGpDFFOLoDAzlYUTveScBrSKkytCeZCcEytTKoiDoQhZRIQIVKwirQJEDQ', autoIncrement: true});
    var add_0 = objectStore_1.add({f0_i: '<null>', f1_f: '<number>'}, 'vKUmDMnUeGmLojLlLZhbMfpriAJvHJEAonTGfStprofjqxgFTYxeyAmpRMPCVtPIQilZZFjfUCwUCfGHJNeKKtNWnMfxTUuBBVxnjNkzRnlchDLwYIRazZrLUcemCfQgyjlKahzyCAsMtETCILdjRhxgCHNfidwLDewNMYoTSNcQFvMcfQeCnqCaXnOtllawnpetbdJxJcJskikdzTBGcGhzhbixULVTCHONezLQgLCJZgKAvqPcWSvPvxFkyNEXlHSsnGEaCuXEZmOLCsDYwwt');
    var objectStore_3 = db.createObjectStore('objectStore_4289', {autoIncrement: true});
    var index_2892 = objectStore_3.createIndex('index_2892', 'test');
    var objectStore_4 = db.createObjectStore('objectStore_4290', {autoIncrement: true});
    var getAllKeys_1 = objectStore_1.getAllKeys();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('uWNgNzGnWOmDbwDuSAeOUNPyCyuyXDGbMVsNeVyJMkmooYmyJUMoVlVwDrqSWWkqtjALvDbPgCpWxnkkFRThXikozHbjbGfZv');
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6460 = db.transaction(['objectStore_4287'], 'readwrite', {durability:"strict"})
    var objectStore_4287 = txn_6460.objectStore('objectStore_4287');
    var clear_0 = objectStore_4287.clear();
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.only('vKUmDMnUeGmLojLlLZhbMfpriAJvHJEAonTGfStprofjqxgFTYxeyAmpRMPCVtPIQilZZFjfUCwUCfGHJNeKKtNWnMfxTUuBBVxnjNkzRnlchDLwYIRazZrLUcemCfQgyjlKahzyCAsMtETCILdjRhxgCHNfidwLDewNMYoTSNcQFvMcfQeCnqCaXnOtllawnpetbdJxJcJskikdzTBGcGhzhbixULVTCHONezLQgLCJZgKAvqPcWSvPvxFkyNEXlHSsnGEaCuXEZmOLCsDYwwt');
        get_2 = objectStore_4287.get(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_4287.add({f0_l: '<array>', f1_y: '<null>', f2_x: '<boolean>', f3_g: '<string>'}, 'PFmIHvibIAGWnVVXxtPfBCKEenuYJoOSkhOKkVwcJTeOXKWLDopfJGWImNGjgTkNyxpIloRXwecyfJMLmkQVGhMNYBYpgxhBWuOpW');
    var put_1 = objectStore_4287.put({f0_p: '<number>', f1_e: '<string>', f2_d: '<array>', f3_f: '<string>', f4_n: '<array>', f5_t: '<string>'}, 'qVZULUKZyZUHCciUcXYvuBdzuujuZiyhxiCDxruSexFavLULdwuiFESrCuozjAOoExqEIRXDQDBwrhkPUEfMIEZOymHuqXXVUEZMAjsekWVSMwCjkZMcxufRvJQJBKdQjTTQRfHmkOvyaLZSyhEVspWgPeleuOyYMBIMSwNfQVTpJywdGpDuuOtndGemMLAVhRpCYaPICQyiQXIKtxotpaJPmoAnNavDIBgnRiteNKsNJIJTiZdKjNXDfYrxivZjSXsCFdnXiJgvWDbNrcdDHwmLFrvRSLvXNlxIvIDHAWwivmNktcfRrBzRDrfzDrVJsTutuAwHEdGbkcLeOlwpQsfSiEGQPSOjaCBwFAQKWdHoedBUlEZvoMXHWtrAjFxvbYnxwGzawxdttDxByPRGEsXqDvoSHzsckAEVePvITmifTTjiGCwZUKcBAkhwnwKhJcsYBFBDmFAlygjxdEdajCSavlnZQsZWqCikzMUHXqyWTJUcjjOQJZdmSnfjhYaRjoyYVfEAeIMpIlMJqLAbyaGQPdmeyEOqfrAMtsmDAItBpCVRWSxLvYYRsjLxjZOkjkRorVmcgUiFSyyUOrlBRFNGlPgvBDpPgvukYexjrSrNOEvkSDWRQCjVozf');
    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('qVZULUKZyZUHCciUcXYvuBdzuujuZiyhxiCDxruSexFavLULdwuiFESrCuozjAOoExqEIRXDQDBwrhkPUEfMIEZOymHuqXXVUEZMAjsekWVSMwCjkZMcxufRvJQJBKdQjTTQRfHmkOvyaLZSyhEVspWgPeleuOyYMBIMSwNfQVTpJywdGpDuuOtndGemMLAVhRpCYaPICQyiQXIKtxotpaJPmoAnNavDIBgnRiteNKsNJIJTiZdKjNXDfYrxivZjSXsCFdnXiJgvWDbNrcdDHwmLFrvRSLvXNlxIvIDHAWwivmNktcfRrBzRDrfzDrVJsTutuAwHEdGbkcLeOlwpQsfSiEGQPSOjaCBwFAQKWdHoedBUlEZvoMXHWtrAjFxvbYnxwGzawxdttDxByPRGEsXqDvoSHzsckAEVePvITmifTTjiGCwZUKcBAkhwnwKhJcsYBFBDmFAlygjxdEdajCSavlnZQsZWqCikzMUHXqyWTJUcjjOQJZdmSnfjhYaRjoyYVfEAeIMpIlMJqLAbyaGQPdmeyEOqfrAMtsmDAItBpCVRWSxLvYYRsjLxjZOkjkRorVmcgUiFSyyUOrlBRFNGlPgvBDpPgvukYexjrSrNOEvkSDWRQCjVozf', 'vKUmDMnUeGmLojLlLZhbMfpriAJvHJEAonTGfStprofjqxgFTYxeyAmpRMPCVtPIQilZZFjfUCwUCfGHJNeKKtNWnMfxTUuBBVxnjNkzRnlchDLwYIRazZrLUcemCfQgyjlKahzyCAsMtETCILdjRhxgCHNfidwLDewNMYoTSNcQFvMcfQeCnqCaXnOtllawnpetbdJxJcJskikdzTBGcGhzhbixULVTCHONezLQgLCJZgKAvqPcWSvPvxFkyNEXlHSsnGEaCuXEZmOLCsDYwwt', true, false);
        getAll_0 = objectStore_4287.getAll(KeyRange_6, 151892580);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('vKUmDMnUeGmLojLlLZhbMfpriAJvHJEAonTGfStprofjqxgFTYxeyAmpRMPCVtPIQilZZFjfUCwUCfGHJNeKKtNWnMfxTUuBBVxnjNkzRnlchDLwYIRazZrLUcemCfQgyjlKahzyCAsMtETCILdjRhxgCHNfidwLDewNMYoTSNcQFvMcfQeCnqCaXnOtllawnpetbdJxJcJskikdzTBGcGhzhbixULVTCHONezLQgLCJZgKAvqPcWSvPvxFkyNEXlHSsnGEaCuXEZmOLCsDYwwt');
        getAll_0 = objectStore_4287.getAll(KeyRange_7);
    }

    var clear_1 = objectStore_4287.clear();
    var add_2 = objectStore_4287.add({f0_l: '<number>', f1_h: '<boolean>', f2_i: '<array>', f3_p: '<number>', f4_s: '<object>', f5_c: '<string>', f6_o: '<object>', f7_h: '<array>', f8_a: '<string>', f9_m: '<boolean>', f10_z: '<number>', f11_g: '<array>', f12_n: '<array>', f13_n: '<string>', f14_y: '<null>', f15_d: '<object>', f16_b: '<boolean>', f17_l: '<null>', f18_v: '<null>', f19_i: '<number>', f20_n: '<string>', f21_s: '<object>', f22_q: '<object>', f23_y: '<null>', f24_g: '<boolean>', f25_s: '<string>', f26_t: '<boolean>', f27_f: '<number>', f28_r: '<object>', f29_z: '<null>', f30_x: '<number>', f31_m: '<string>', f32_i: '<object>', f33_i: '<string>', f34_a: '<number>', f35_x: '<boolean>', f36_f: '<boolean>', f37_y: '<null>', f38_i: '<array>', f39_y: '<string>', f40_t: '<array>', f41_m: '<array>', f42_p: '<number>', f43_v: '<null>', f44_r: '<boolean>', f45_u: '<boolean>', f46_n: '<number>', f47_d: '<boolean>', f48_y: '<number>', f49_g: '<boolean>', f50_b: '<number>', f51_u: '<object>', f52_h: '<boolean>', f53_e: '<array>', f54_s: '<string>', f55_x: '<number>', f56_v: '<number>', f57_a: '<boolean>', f58_u: '<boolean>', f59_w: '<string>', f60_f: '<object>', f61_x: '<null>', f62_b: '<object>', f63_z: '<object>', f64_v: '<boolean>', f65_l: '<object>', f66_o: '<boolean>', f67_r: '<null>', f68_w: '<null>', f69_u: '<string>', f70_d: '<null>', f71_r: '<number>', f72_h: '<object>', f73_n: '<string>', f74_g: '<boolean>', f75_b: '<number>', f76_l: '<boolean>', f77_r: '<object>', f78_s: '<boolean>', f79_o: '<number>', f80_w: '<object>', f81_a: '<object>', f82_h: '<number>', f83_e: '<number>', f84_u: '<object>', f85_w: '<array>', f86_i: '<boolean>', f87_e: '<number>', f88_e: '<string>', f89_p: '<number>', f90_i: '<boolean>', f91_y: '<string>', f92_g: '<number>', f93_i: '<array>', f94_x: '<number>', f95_u: '<boolean>', f96_o: '<null>', f97_c: '<array>', f98_b: '<array>', f99_l: '<array>', f100_m: '<number>', f101_v: '<string>', f102_t: '<boolean>', f103_h: '<number>', f104_u: '<array>', f105_l: '<null>', f106_s: '<string>', f107_u: '<boolean>', f108_z: '<object>', f109_i: '<boolean>', f110_n: '<string>', f111_j: '<object>', f112_d: '<null>', f113_p: '<string>', f114_k: '<number>', f115_r: '<string>', f116_y: '<string>', f117_b: '<string>', f118_p: '<object>', f119_p: '<boolean>', f120_l: '<object>', f121_l: '<boolean>', f122_q: '<null>', f123_o: '<string>', f124_y: '<string>', f125_e: '<object>', f126_l: '<string>', f127_f: '<object>', f128_r: '<string>', f129_s: '<number>', f130_n: '<boolean>', f131_v: '<number>', f132_b: '<number>', f133_r: '<string>', f134_b: '<null>', f135_c: '<number>', f136_c: '<string>', f137_k: '<null>', f138_a: '<object>', f139_f: '<null>', f140_e: '<boolean>', f141_c: '<boolean>', f142_n: '<number>', f143_f: '<null>', f144_z: '<number>', f145_s: '<array>', f146_q: '<number>', f147_q: '<array>', f148_a: '<null>', f149_q: '<object>', f150_i: '<string>', f151_q: '<boolean>', f152_s: '<number>', f153_a: '<null>', f154_r: '<boolean>', f155_s: '<null>', f156_y: '<null>', f157_v: '<array>', f158_z: '<array>', f159_g: '<string>', f160_l: '<object>', f161_d: '<array>', f162_v: '<string>', f163_t: '<object>', f164_r: '<boolean>', f165_w: '<array>', f166_k: '<string>', f167_u: '<boolean>', f168_y: '<array>', f169_r: '<null>', f170_y: '<string>', f171_m: '<null>', f172_d: '<boolean>', f173_i: '<string>'}, 'ihvMCClHJDHkBjmWZVtSGwFzjPgInSkfagrjysBsjZBcZUzNOUBhlRoZrNCyFRTVLrFVDwpqPCUlKoLXMDqMFRefJcUcmrantbcgedQRTaSbgLpOmMwgIhKXrRmalbYLNQMmARNcGCNeJdMnpJmdIlerTRTIWjthsQClFwYrMKXTZFgXCniCkwbWAZjotkuLwdMCgSmcONHjRKffApRUDDXurLTYyCaKtsjnoyQyTJQBvskwvpiNRltwRKQnFdPVDsohScTffaiJFDCYqkfTZqHvdUwFmzMRTFosqTsRJshlcYhBCExsWptACzgqNjSGTsXILHuTGJSHunGCRnNPkYcnTcUJiYtKMhJxcJnRYghGNcYthlkBKJCFnkpfyXfAhOHWZQFtvMXLmbDnbTVSfgLkQsGfoSkfUTBFqLZVkOTJwmkeoPfYWLGjrImawRIEgzasxXjhkuwwdpvtuZTVvDeHGnimekjjBXalBIpvOzhgUlbylpXyPVgnsYXMDKjDkhiTmxzDjeCGIYWlSgskCZpKquZzAYsgRhCnPhbgOcSUwStAOCJsHHASWXMYRAkpHGgwFVTlRfKmkjCshhGWnVtzErihLgvgjQExbTJbtUMFVuMOXWOgtvTlLRLckWprsyqCHPSwZQEDPtOdEgVPthYvDLllqRxszfADVvtKUwkQQmHnwipVSLdXrDvxcOxbwTwDWrBJUSAvtYwuVoXiNvuiKvyrhrNeEEiGOsFKTDaoFtvzaCNeQzFJbyAViOuvFJbljfbtijkskoyLHpYUvxWuMebXYUbwxscEFsoAFyBAavtNIJxezMZzGwoffRBIIZVwezZtYnBRjABtbYzbNPyjuGGVXkuEis');
    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('vKUmDMnUeGmLojLlLZhbMfpriAJvHJEAonTGfStprofjqxgFTYxeyAmpRMPCVtPIQilZZFjfUCwUCfGHJNeKKtNWnMfxTUuBBVxnjNkzRnlchDLwYIRazZrLUcemCfQgyjlKahzyCAsMtETCILdjRhxgCHNfidwLDewNMYoTSNcQFvMcfQeCnqCaXnOtllawnpetbdJxJcJskikdzTBGcGhzhbixULVTCHONezLQgLCJZgKAvqPcWSvPvxFkyNEXlHSsnGEaCuXEZmOLCsDYwwt', 'ihvMCClHJDHkBjmWZVtSGwFzjPgInSkfagrjysBsjZBcZUzNOUBhlRoZrNCyFRTVLrFVDwpqPCUlKoLXMDqMFRefJcUcmrantbcgedQRTaSbgLpOmMwgIhKXrRmalbYLNQMmARNcGCNeJdMnpJmdIlerTRTIWjthsQClFwYrMKXTZFgXCniCkwbWAZjotkuLwdMCgSmcONHjRKffApRUDDXurLTYyCaKtsjnoyQyTJQBvskwvpiNRltwRKQnFdPVDsohScTffaiJFDCYqkfTZqHvdUwFmzMRTFosqTsRJshlcYhBCExsWptACzgqNjSGTsXILHuTGJSHunGCRnNPkYcnTcUJiYtKMhJxcJnRYghGNcYthlkBKJCFnkpfyXfAhOHWZQFtvMXLmbDnbTVSfgLkQsGfoSkfUTBFqLZVkOTJwmkeoPfYWLGjrImawRIEgzasxXjhkuwwdpvtuZTVvDeHGnimekjjBXalBIpvOzhgUlbylpXyPVgnsYXMDKjDkhiTmxzDjeCGIYWlSgskCZpKquZzAYsgRhCnPhbgOcSUwStAOCJsHHASWXMYRAkpHGgwFVTlRfKmkjCshhGWnVtzErihLgvgjQExbTJbtUMFVuMOXWOgtvTlLRLckWprsyqCHPSwZQEDPtOdEgVPthYvDLllqRxszfADVvtKUwkQQmHnwipVSLdXrDvxcOxbwTwDWrBJUSAvtYwuVoXiNvuiKvyrhrNeEEiGOsFKTDaoFtvzaCNeQzFJbyAViOuvFJbljfbtijkskoyLHpYUvxWuMebXYUbwxscEFsoAFyBAavtNIJxezMZzGwoffRBIIZVwezZtYnBRjABtbYzbNPyjuGGVXkuEis', false, false);
        get_3 = objectStore_4287.get(KeyRange_8);
    }
    catch (e){
    }

    var put_2 = objectStore_4287.put({f0_a: '<array>', f1_j: '<number>', f2_x: '<boolean>', f3_p: '<number>', f4_u: '<boolean>'}, 'leOvoYAvtxhYDTavxSKkrsGaJnZKInstIoktMIIVrOHhytpgYwcIpXRPavhxqxiwrKeZLfDEHQMIxBKJFoVdxVfDqoMZhVQbTMastnUQSNnNcwDhLpRZckplalAsHqsfWIZIpHPGqCYcHkfseBBKbQXbhZtTJclUbYjUdvRmzErHAGfIGdIpTLCsAxVNZZdbTSGfZLHAcXVEGknkDjrhxZkkGSjoTbRigOPLNQOKGnqmFyiMrNiYRNbMkDvnYxxrlMgBJHIRsErLQoctJngrNOvzCENWpgOAKXiLCyvUkNvYxilQEpnuVOoLUpweHUoSOsKqgoIyegwMxxdTssEexxgqQdOqgYYYewTkoNZyxMwCFvlYUcbbpVYNadXXooKJLeOjTEaUWgAQPcCYRZCRFDOjUuIEsMnfgyAFZkdWFEFOUiRIEieHTTbkkRBJyGjQgfaFrbQDlfscDHTEuEpYzJaJlQmckJpsIlEdWJMqAGxIXkWtht');
    txn_6460.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6460.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6460.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6461 = db.transaction(['objectStore_4287'], 'readonly', {durability:"relaxed"})
    var objectStore_4287 = txn_6461.objectStore('objectStore_4287');
    var get_4;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('leOvoYAvtxhYDTavxSKkrsGaJnZKInstIoktMIIVrOHhytpgYwcIpXRPavhxqxiwrKeZLfDEHQMIxBKJFoVdxVfDqoMZhVQbTMastnUQSNnNcwDhLpRZckplalAsHqsfWIZIpHPGqCYcHkfseBBKbQXbhZtTJclUbYjUdvRmzErHAGfIGdIpTLCsAxVNZZdbTSGfZLHAcXVEGknkDjrhxZkkGSjoTbRigOPLNQOKGnqmFyiMrNiYRNbMkDvnYxxrlMgBJHIRsErLQoctJngrNOvzCENWpgOAKXiLCyvUkNvYxilQEpnuVOoLUpweHUoSOsKqgoIyegwMxxdTssEexxgqQdOqgYYYewTkoNZyxMwCFvlYUcbbpVYNadXXooKJLeOjTEaUWgAQPcCYRZCRFDOjUuIEsMnfgyAFZkdWFEFOUiRIEieHTTbkkRBJyGjQgfaFrbQDlfscDHTEuEpYzJaJlQmckJpsIlEdWJMqAGxIXkWtht', true);
        get_4 = objectStore_4287.get(KeyRange_10);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('leOvoYAvtxhYDTavxSKkrsGaJnZKInstIoktMIIVrOHhytpgYwcIpXRPavhxqxiwrKeZLfDEHQMIxBKJFoVdxVfDqoMZhVQbTMastnUQSNnNcwDhLpRZckplalAsHqsfWIZIpHPGqCYcHkfseBBKbQXbhZtTJclUbYjUdvRmzErHAGfIGdIpTLCsAxVNZZdbTSGfZLHAcXVEGknkDjrhxZkkGSjoTbRigOPLNQOKGnqmFyiMrNiYRNbMkDvnYxxrlMgBJHIRsErLQoctJngrNOvzCENWpgOAKXiLCyvUkNvYxilQEpnuVOoLUpweHUoSOsKqgoIyegwMxxdTssEexxgqQdOqgYYYewTkoNZyxMwCFvlYUcbbpVYNadXXooKJLeOjTEaUWgAQPcCYRZCRFDOjUuIEsMnfgyAFZkdWFEFOUiRIEieHTTbkkRBJyGjQgfaFrbQDlfscDHTEuEpYzJaJlQmckJpsIlEdWJMqAGxIXkWtht', 'ihvMCClHJDHkBjmWZVtSGwFzjPgInSkfagrjysBsjZBcZUzNOUBhlRoZrNCyFRTVLrFVDwpqPCUlKoLXMDqMFRefJcUcmrantbcgedQRTaSbgLpOmMwgIhKXrRmalbYLNQMmARNcGCNeJdMnpJmdIlerTRTIWjthsQClFwYrMKXTZFgXCniCkwbWAZjotkuLwdMCgSmcONHjRKffApRUDDXurLTYyCaKtsjnoyQyTJQBvskwvpiNRltwRKQnFdPVDsohScTffaiJFDCYqkfTZqHvdUwFmzMRTFosqTsRJshlcYhBCExsWptACzgqNjSGTsXILHuTGJSHunGCRnNPkYcnTcUJiYtKMhJxcJnRYghGNcYthlkBKJCFnkpfyXfAhOHWZQFtvMXLmbDnbTVSfgLkQsGfoSkfUTBFqLZVkOTJwmkeoPfYWLGjrImawRIEgzasxXjhkuwwdpvtuZTVvDeHGnimekjjBXalBIpvOzhgUlbylpXyPVgnsYXMDKjDkhiTmxzDjeCGIYWlSgskCZpKquZzAYsgRhCnPhbgOcSUwStAOCJsHHASWXMYRAkpHGgwFVTlRfKmkjCshhGWnVtzErihLgvgjQExbTJbtUMFVuMOXWOgtvTlLRLckWprsyqCHPSwZQEDPtOdEgVPthYvDLllqRxszfADVvtKUwkQQmHnwipVSLdXrDvxcOxbwTwDWrBJUSAvtYwuVoXiNvuiKvyrhrNeEEiGOsFKTDaoFtvzaCNeQzFJbyAViOuvFJbljfbtijkskoyLHpYUvxWuMebXYUbwxscEFsoAFyBAavtNIJxezMZzGwoffRBIIZVwezZtYnBRjABtbYzbNPyjuGGVXkuEis', true, false);
        get_5 = objectStore_4287.get(KeyRange_12);
    }
    catch (e){
    }

    var count_1 = objectStore_4287.count();
    var getAllKeys_2 = objectStore_4287.getAllKeys();
    var getAllKeys_3 = objectStore_4287.getAllKeys(3007534698);
    var count_2 = objectStore_4287.count();
    var count_3 = objectStore_4287.count();
    var getAllKeys_4 = objectStore_4287.getAllKeys(1313674604);
    var count_4 = objectStore_4287.count();
    txn_6461.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6461.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6461.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6462 = db.transaction(['objectStore_4290'], 'readonly', {durability:"relaxed"})
    var objectStore_4290 = txn_6462.objectStore('objectStore_4290');
    txn_6462.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6462.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6462.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6463 = db.transaction(['objectStore_4288', 'objectStore_4286'], 'readwrite', {durability:"default"})
    var objectStore_4286 = txn_6463.objectStore('objectStore_4286');
    var add_3 = objectStore_4286.add({f0_v: '<string>', f1_t: '<boolean>', f2_f: '<number>', f3_r: '<boolean>', f4_k: '<number>'}, 'rVyGLuMCAASySTlFiTRCvumWzxuIaIubwsWanuKzETMycJuueQrRqEPWMEXENohBYTCmQowsTKaTDtVwCWTpyNWzqDlUVVXYIhqNvmsXpHnuVbdjakgSyWUpBfsMDMdhgyYaKAhKpewAbkHUrEicSEiytSHoftJWtCCNTrEYByMgwQldUvcdTlQwJMnvkqtlvGsFiXCtyQdGShGxcTQeKrvIkyxFSGMqJGeaWAzWnnQBHflAPYVRMpTtblLhqZTwHUPdryVBcBkxkLSJwIYsSllvqmefiLYQnHFmbTpSzGdlzjFiMDPoGIyRWqQfzxSRJBKOjpupiGDQglEscCGDTwnTgpXYYZAAByPNdlkWmPdmagIEtsgeDqYZcQTSMfnSXBhuNoZSxucpryrjAaNscnYrIyoKTQnodUEQYQbNLhBtQryVtIyyINpuCQkpdHjlBePgsebwJogzvscOVoZoimtJzIfXQzGwQALfRukKAlVvdiJuXBRZXxrRYLsUvQqDmrSqcjgQMixeKPYDdaGpNJWoLjqURvPDRNKNOJVNAonzxAACcBNPnDnEnRdFejuMGTImLOjQDBoAOYKbadYpUrZRLIGJYyZZFmeJQXudzxUTQiTZXLIgJNOLFafjUPbhgoPYPwnomJtBXiCtkSdgaUfhBXSFXnUZmAZGqVeirUhWciwmcsFQAkbDMCTfgXb');
    var clear_2 = objectStore_4286.clear();
    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.bound('rVyGLuMCAASySTlFiTRCvumWzxuIaIubwsWanuKzETMycJuueQrRqEPWMEXENohBYTCmQowsTKaTDtVwCWTpyNWzqDlUVVXYIhqNvmsXpHnuVbdjakgSyWUpBfsMDMdhgyYaKAhKpewAbkHUrEicSEiytSHoftJWtCCNTrEYByMgwQldUvcdTlQwJMnvkqtlvGsFiXCtyQdGShGxcTQeKrvIkyxFSGMqJGeaWAzWnnQBHflAPYVRMpTtblLhqZTwHUPdryVBcBkxkLSJwIYsSllvqmefiLYQnHFmbTpSzGdlzjFiMDPoGIyRWqQfzxSRJBKOjpupiGDQglEscCGDTwnTgpXYYZAAByPNdlkWmPdmagIEtsgeDqYZcQTSMfnSXBhuNoZSxucpryrjAaNscnYrIyoKTQnodUEQYQbNLhBtQryVtIyyINpuCQkpdHjlBePgsebwJogzvscOVoZoimtJzIfXQzGwQALfRukKAlVvdiJuXBRZXxrRYLsUvQqDmrSqcjgQMixeKPYDdaGpNJWoLjqURvPDRNKNOJVNAonzxAACcBNPnDnEnRdFejuMGTImLOjQDBoAOYKbadYpUrZRLIGJYyZZFmeJQXudzxUTQiTZXLIgJNOLFafjUPbhgoPYPwnomJtBXiCtkSdgaUfhBXSFXnUZmAZGqVeirUhWciwmcsFQAkbDMCTfgXb', 'rVyGLuMCAASySTlFiTRCvumWzxuIaIubwsWanuKzETMycJuueQrRqEPWMEXENohBYTCmQowsTKaTDtVwCWTpyNWzqDlUVVXYIhqNvmsXpHnuVbdjakgSyWUpBfsMDMdhgyYaKAhKpewAbkHUrEicSEiytSHoftJWtCCNTrEYByMgwQldUvcdTlQwJMnvkqtlvGsFiXCtyQdGShGxcTQeKrvIkyxFSGMqJGeaWAzWnnQBHflAPYVRMpTtblLhqZTwHUPdryVBcBkxkLSJwIYsSllvqmefiLYQnHFmbTpSzGdlzjFiMDPoGIyRWqQfzxSRJBKOjpupiGDQglEscCGDTwnTgpXYYZAAByPNdlkWmPdmagIEtsgeDqYZcQTSMfnSXBhuNoZSxucpryrjAaNscnYrIyoKTQnodUEQYQbNLhBtQryVtIyyINpuCQkpdHjlBePgsebwJogzvscOVoZoimtJzIfXQzGwQALfRukKAlVvdiJuXBRZXxrRYLsUvQqDmrSqcjgQMixeKPYDdaGpNJWoLjqURvPDRNKNOJVNAonzxAACcBNPnDnEnRdFejuMGTImLOjQDBoAOYKbadYpUrZRLIGJYyZZFmeJQXudzxUTQiTZXLIgJNOLFafjUPbhgoPYPwnomJtBXiCtkSdgaUfhBXSFXnUZmAZGqVeirUhWciwmcsFQAkbDMCTfgXb', true, false);
        count_5 = objectStore_4286.count(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_16 = IDBKeyRange.only('rVyGLuMCAASySTlFiTRCvumWzxuIaIubwsWanuKzETMycJuueQrRqEPWMEXENohBYTCmQowsTKaTDtVwCWTpyNWzqDlUVVXYIhqNvmsXpHnuVbdjakgSyWUpBfsMDMdhgyYaKAhKpewAbkHUrEicSEiytSHoftJWtCCNTrEYByMgwQldUvcdTlQwJMnvkqtlvGsFiXCtyQdGShGxcTQeKrvIkyxFSGMqJGeaWAzWnnQBHflAPYVRMpTtblLhqZTwHUPdryVBcBkxkLSJwIYsSllvqmefiLYQnHFmbTpSzGdlzjFiMDPoGIyRWqQfzxSRJBKOjpupiGDQglEscCGDTwnTgpXYYZAAByPNdlkWmPdmagIEtsgeDqYZcQTSMfnSXBhuNoZSxucpryrjAaNscnYrIyoKTQnodUEQYQbNLhBtQryVtIyyINpuCQkpdHjlBePgsebwJogzvscOVoZoimtJzIfXQzGwQALfRukKAlVvdiJuXBRZXxrRYLsUvQqDmrSqcjgQMixeKPYDdaGpNJWoLjqURvPDRNKNOJVNAonzxAACcBNPnDnEnRdFejuMGTImLOjQDBoAOYKbadYpUrZRLIGJYyZZFmeJQXudzxUTQiTZXLIgJNOLFafjUPbhgoPYPwnomJtBXiCtkSdgaUfhBXSFXnUZmAZGqVeirUhWciwmcsFQAkbDMCTfgXb');
        getAllKeys_5 = objectStore_4286.getAllKeys(KeyRange_16, 958865989);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('rVyGLuMCAASySTlFiTRCvumWzxuIaIubwsWanuKzETMycJuueQrRqEPWMEXENohBYTCmQowsTKaTDtVwCWTpyNWzqDlUVVXYIhqNvmsXpHnuVbdjakgSyWUpBfsMDMdhgyYaKAhKpewAbkHUrEicSEiytSHoftJWtCCNTrEYByMgwQldUvcdTlQwJMnvkqtlvGsFiXCtyQdGShGxcTQeKrvIkyxFSGMqJGeaWAzWnnQBHflAPYVRMpTtblLhqZTwHUPdryVBcBkxkLSJwIYsSllvqmefiLYQnHFmbTpSzGdlzjFiMDPoGIyRWqQfzxSRJBKOjpupiGDQglEscCGDTwnTgpXYYZAAByPNdlkWmPdmagIEtsgeDqYZcQTSMfnSXBhuNoZSxucpryrjAaNscnYrIyoKTQnodUEQYQbNLhBtQryVtIyyINpuCQkpdHjlBePgsebwJogzvscOVoZoimtJzIfXQzGwQALfRukKAlVvdiJuXBRZXxrRYLsUvQqDmrSqcjgQMixeKPYDdaGpNJWoLjqURvPDRNKNOJVNAonzxAACcBNPnDnEnRdFejuMGTImLOjQDBoAOYKbadYpUrZRLIGJYyZZFmeJQXudzxUTQiTZXLIgJNOLFafjUPbhgoPYPwnomJtBXiCtkSdgaUfhBXSFXnUZmAZGqVeirUhWciwmcsFQAkbDMCTfgXb');
        getAllKeys_5 = objectStore_4286.getAllKeys(KeyRange_17);
    }

    var add_4 = objectStore_4286.add({f0_e: '<number>', f1_m: '<array>', f2_u: '<null>', f3_z: '<string>'}, 'fjLihTxhekodeGxVpHJiNbSLAANtTguFTwYETJDXhhHyOBGcgiquDIYslmTbBJdMQHQBpsQxTPGlKQadPpUARGJvhoZjQCFlEzmXfPtBxqzjfzHrUCWIXRoGCHXYXtPqaEPiYemTMjtovbWfrvXjhMnPhTDBuxpSNmVBLCfvACyZtCzwizJiyyrZBgEGmJHcCROemjcRLKiCBdXqIriTPjpKZGxEeMdNqDFRxdwwEQJVhBoljcXDtrabRkhYYeiKBwLmIfmuvjfjOLbOljavaDJSxNmYZkiIwHrDnBAUMKNGzkLyKwBdYPDfYWWAKemuBxPuPtoTdwAiCIYxtlYTXXYBFxYDpswqEabABSeycPhIZidPCehqthYExadhoxLmqtElQhAnjkLGkufyMntNviZvtCqxyynKnKvEGJikFrpWKBfERtxKzXVqxoOHyAOHYzWjcUGuXSVHWQSkjciHamchEsnwlsTurogoBLfqeTUyyMgIZzGdEMRewgwxFDlJWekwYQIPKSplIjkYjwJzOLQVjDUgARYxvieLJooMiXYAdSAXAYAiSbzfsDmHjivkewXlcbQZSFAHrJyDJDDpTFNEByfYCkXYSZTFgICjRoDTUxeGINLzfyNBxuTZUPQPxYUZvqQwUUmCEQePUmKdXiBGLqInASrdKqrXMMEyfQtDjWwPBKgSYwXwDOdNANWsmDTeXzNoudaBzSaQbWeKSlHWXtWlRGUzuuuMxIDLdDqhJozp');
    var add_5 = objectStore_4286.add({f0_o: '<object>', f1_i: '<boolean>', f2_g: '<null>', f3_u: '<array>', f4_k: '<array>', f5_x: '<boolean>', f6_p: '<boolean>', f7_l: '<number>', f8_s: '<boolean>', f9_c: '<string>', f10_l: '<boolean>', f11_x: '<boolean>', f12_w: '<number>', f13_i: '<null>', f14_w: '<null>', f15_d: '<number>', f16_k: '<null>', f17_i: '<object>', f18_l: '<string>', f19_q: '<number>', f20_k: '<string>', f21_t: '<array>', f22_p: '<null>', f23_p: '<boolean>', f24_l: '<object>', f25_w: '<array>', f26_f: '<array>', f27_g: '<boolean>', f28_w: '<object>', f29_p: '<array>', f30_z: '<boolean>', f31_s: '<array>', f32_w: '<boolean>', f33_d: '<object>', f34_v: '<string>', f35_z: '<object>', f36_k: '<object>', f37_w: '<number>', f38_s: '<object>', f39_n: '<boolean>', f40_n: '<null>', f41_c: '<null>', f42_u: '<boolean>', f43_s: '<string>', f44_v: '<boolean>', f45_h: '<boolean>', f46_q: '<array>', f47_d: '<boolean>', f48_j: '<null>', f49_y: '<string>', f50_c: '<object>', f51_g: '<object>', f52_k: '<number>', f53_q: '<null>', f54_g: '<boolean>', f55_z: '<string>', f56_a: '<number>', f57_n: '<null>', f58_p: '<array>', f59_g: '<string>', f60_m: '<boolean>', f61_k: '<null>', f62_m: '<array>', f63_h: '<boolean>', f64_j: '<boolean>', f65_r: '<null>', f66_q: '<array>', f67_d: '<string>', f68_b: '<array>', f69_q: '<boolean>', f70_z: '<null>', f71_d: '<object>', f72_h: '<array>', f73_g: '<boolean>', f74_g: '<string>', f75_l: '<object>', f76_k: '<null>', f77_m: '<array>', f78_a: '<number>', f79_q: '<array>', f80_n: '<number>', f81_c: '<string>', f82_k: '<string>', f83_r: '<array>', f84_y: '<string>', f85_g: '<array>', f86_e: '<array>', f87_h: '<boolean>', f88_a: '<string>', f89_i: '<object>', f90_j: '<number>', f91_j: '<string>', f92_o: '<string>', f93_h: '<number>', f94_i: '<boolean>', f95_a: '<array>', f96_i: '<array>', f97_g: '<null>', f98_g: '<number>', f99_v: '<object>', f100_y: '<array>', f101_b: '<boolean>', f102_z: '<number>', f103_a: '<boolean>', f104_l: '<array>', f105_b: '<array>', f106_j: '<number>', f107_d: '<boolean>', f108_b: '<array>', f109_a: '<object>', f110_j: '<array>', f111_m: '<object>', f112_m: '<boolean>', f113_l: '<string>', f114_x: '<array>', f115_f: '<boolean>', f116_y: '<boolean>', f117_a: '<number>', f118_q: '<number>', f119_l: '<string>', f120_l: '<boolean>', f121_i: '<array>', f122_j: '<null>', f123_q: '<array>', f124_n: '<object>', f125_d: '<null>', f126_m: '<boolean>', f127_r: '<number>', f128_r: '<boolean>', f129_r: '<object>', f130_b: '<null>', f131_s: '<number>', f132_z: '<number>', f133_a: '<null>', f134_v: '<object>', f135_o: '<boolean>', f136_s: '<number>', f137_n: '<string>', f138_n: '<number>', f139_p: '<string>', f140_n: '<string>', f141_w: '<number>', f142_f: '<null>', f143_d: '<number>', f144_d: '<boolean>', f145_o: '<number>', f146_j: '<number>', f147_x: '<array>', f148_n: '<number>', f149_c: '<number>', f150_z: '<boolean>', f151_t: '<object>', f152_a: '<null>', f153_u: '<string>', f154_q: '<boolean>', f155_x: '<string>', f156_u: '<boolean>', f157_q: '<object>', f158_l: '<string>', f159_l: '<array>', f160_p: '<boolean>', f161_z: '<null>', f162_m: '<number>', f163_a: '<number>', f164_t: '<string>', f165_k: '<object>', f166_q: '<number>', f167_g: '<array>', f168_d: '<boolean>', f169_f: '<array>', f170_c: '<boolean>', f171_m: '<number>', f172_k: '<null>', f173_q: '<object>', f174_u: '<boolean>', f175_b: '<null>', f176_a: '<object>', f177_l: '<boolean>', f178_o: '<boolean>', f179_o: '<string>', f180_x: '<boolean>', f181_u: '<string>', f182_t: '<string>', f183_y: '<number>', f184_z: '<object>', f185_p: '<string>', f186_r: '<boolean>', f187_g: '<boolean>', f188_f: '<number>', f189_s: '<object>', f190_j: '<string>', f191_b: '<array>', f192_s: '<number>', f193_o: '<object>', f194_m: '<number>', f195_s: '<object>', f196_e: '<number>', f197_e: '<array>', f198_y: '<array>', f199_h: '<object>', f200_c: '<boolean>', f201_u: '<string>', f202_h: '<boolean>', f203_l: '<null>'}, 'htgYmACPcEvygtEtEwpnodZVQbnlxwHyZFkRtNhuujlajkaraUBTKHTdwqfrgvNxqzjUpqOoeOHWmbYOHTFNvPhdRgWesxvbLbMRWQvysuwznSDWLMQkhVwozsPmIGMrzfyFJcfGxTLMECSZJGsAExUhEYChMchRSfXRWbiTtZhkGAPRnOFsizojHmykLEDxmtefhFxAlJBCupfzcJIpfqNJqBc');
    var add_6 = objectStore_4286.add({f0_j: '<array>', f1_h: '<null>', f2_n: '<array>', f3_j: '<string>', f4_u: '<number>', f5_x: '<number>'}, 'ZIKayyGaqLWcnjjbzHMvnPkTTmdGINCqoGPGXQXzXoTiGNItJOLcUesFagIOhYLRyCPtBfKZDZNvBQWoTNQriOtZgZPAhhbfSvcMFOWN');
    var clear_3 = objectStore_4286.clear();
    var count_6;
    try{
        KeyRange_18 = IDBKeyRange.bound('htgYmACPcEvygtEtEwpnodZVQbnlxwHyZFkRtNhuujlajkaraUBTKHTdwqfrgvNxqzjUpqOoeOHWmbYOHTFNvPhdRgWesxvbLbMRWQvysuwznSDWLMQkhVwozsPmIGMrzfyFJcfGxTLMECSZJGsAExUhEYChMchRSfXRWbiTtZhkGAPRnOFsizojHmykLEDxmtefhFxAlJBCupfzcJIpfqNJqBc', 'htgYmACPcEvygtEtEwpnodZVQbnlxwHyZFkRtNhuujlajkaraUBTKHTdwqfrgvNxqzjUpqOoeOHWmbYOHTFNvPhdRgWesxvbLbMRWQvysuwznSDWLMQkhVwozsPmIGMrzfyFJcfGxTLMECSZJGsAExUhEYChMchRSfXRWbiTtZhkGAPRnOFsizojHmykLEDxmtefhFxAlJBCupfzcJIpfqNJqBc', true, true);
        count_6 = objectStore_4286.count(KeyRange_18);
    }
    catch (e){
    }

    var put_3 = objectStore_4286.put({f0_p: '<string>', f1_v: '<null>', f2_u: '<number>', f3_d: '<array>', f4_r: '<object>', f5_m: '<object>', f6_f: '<null>', f7_m: '<null>', f8_f: '<object>', f9_t: '<number>'}, 'ssNLtTTHmNkbEhuxIPfBxcLSyvrgMMbiLRvqGwEjXkgeoLJLXlNBXsCzfAcvmHQYWoxeNoTJgPODJItyltdzaMyvDJNpXEbNFSgRDAUVYadoMHCvqpoGoIURUJhdwKXAhJaOsPjKHkDIvgcXFxiydaCbsKZQofIzgBCkbPGazMUEVVmdstEdzVwyBpTEIEgMUhYXduJgXANQzHgFbpCmAubqsxCUMMivffyigBNyfJGdVfcCOsnobwCNiurtvAlKjvIYNECUQrfbisDUvyQlncmKlPVYapbvyYnuIBgispofZxMAiWhLFbNtNAqMhznMpFVtwBXvquToLEgWzJNGLuugYZUZcdhICPYRynXTVyQEiNbzigSYVkORDpkDHljokkZqZiYTtaaBSKXBDNLXmJvjGgctEnhXJQkyUDLSYDnLRVTHQhVlDtrcFSik');
    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.bound('uWNgNzGnWOmDbwDuSAeOUNPyCyuyXDGbMVsNeVyJMkmooYmyJUMoVlVwDrqSWWkqtjALvDbPgCpWxnkkFRThXikozHbjbGfZv', 'htgYmACPcEvygtEtEwpnodZVQbnlxwHyZFkRtNhuujlajkaraUBTKHTdwqfrgvNxqzjUpqOoeOHWmbYOHTFNvPhdRgWesxvbLbMRWQvysuwznSDWLMQkhVwozsPmIGMrzfyFJcfGxTLMECSZJGsAExUhEYChMchRSfXRWbiTtZhkGAPRnOFsizojHmykLEDxmtefhFxAlJBCupfzcJIpfqNJqBc', true, false);
        get_6 = objectStore_4286.get(KeyRange_20);
    }
    catch (e){
    }

    txn_6463.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6463.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6463.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6464 = db.transaction(['objectStore_4290', 'objectStore_4288'], 'readonly', {durability:"strict"})
    var objectStore_4290 = txn_6464.objectStore('objectStore_4290');
    txn_6464.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6464.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6464.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1687')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};