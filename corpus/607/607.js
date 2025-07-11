let db;
const openRequest = window.indexedDB.open('str_4251', 3985422733127745)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3661');
    var clear_0 = objectStore_0.clear();
    var index_2462 = objectStore_0.createIndex('index_2462', 'test', {unique: true});
    var clear_1 = objectStore_0.clear();
    var index_2463 = objectStore_0.createIndex('index_2463', 'test');
    var index_2464 = objectStore_0.createIndex('index_2464', 'test', {unique: true});
    var put_0 = objectStore_0.put({f0_u: '<object>', f1_x: '<boolean>', f2_e: '<null>', f3_q: '<array>', f4_x: '<boolean>', f5_j: '<array>', f6_h: '<boolean>', f7_o: '<number>', f8_z: '<number>', f9_p: '<string>', f10_m: '<string>', f11_y: '<null>', f12_g: '<string>', f13_c: '<null>', f14_k: '<string>', f15_l: '<string>', f16_z: '<boolean>', f17_y: '<boolean>', f18_u: '<null>', f19_y: '<object>', f20_g: '<null>', f21_s: '<boolean>', f22_j: '<boolean>', f23_i: '<array>', f24_w: '<string>', f25_r: '<object>', f26_z: '<number>', f27_y: '<null>', f28_q: '<null>', f29_p: '<string>', f30_p: '<number>', f31_i: '<array>', f32_t: '<number>', f33_x: '<array>', f34_t: '<null>', f35_r: '<array>', f36_b: '<array>', f37_p: '<boolean>', f38_j: '<array>', f39_k: '<null>', f40_y: '<null>', f41_y: '<boolean>', f42_o: '<null>', f43_m: '<object>', f44_m: '<boolean>', f45_t: '<null>', f46_v: '<array>', f47_c: '<boolean>', f48_z: '<array>', f49_p: '<string>', f50_u: '<number>', f51_o: '<number>', f52_o: '<string>', f53_v: '<null>', f54_n: '<array>', f55_z: '<array>', f56_s: '<null>', f57_q: '<array>', f58_b: '<boolean>', f59_r: '<number>', f60_p: '<number>', f61_c: '<boolean>', f62_q: '<string>', f63_l: '<null>', f64_w: '<string>', f65_w: '<string>', f66_m: '<number>', f67_b: '<boolean>', f68_b: '<array>', f69_i: '<number>', f70_m: '<number>', f71_d: '<boolean>', f72_i: '<string>', f73_w: '<number>', f74_g: '<array>', f75_b: '<string>', f76_n: '<array>', f77_m: '<number>', f78_o: '<string>', f79_f: '<array>', f80_z: '<object>', f81_s: '<boolean>', f82_z: '<array>', f83_x: '<null>', f84_s: '<object>', f85_g: '<boolean>', f86_o: '<number>', f87_a: '<array>', f88_a: '<number>', f89_q: '<number>', f90_f: '<boolean>', f91_q: '<array>', f92_m: '<object>', f93_a: '<null>', f94_g: '<array>', f95_a: '<null>', f96_r: '<array>', f97_z: '<null>', f98_z: '<boolean>', f99_e: '<boolean>', f100_e: '<array>', f101_e: '<number>', f102_p: '<string>', f103_e: '<string>', f104_s: '<string>', f105_x: '<boolean>', f106_c: '<string>', f107_c: '<null>', f108_x: '<object>', f109_x: '<object>', f110_x: '<array>', f111_j: '<null>', f112_q: '<object>', f113_e: '<object>', f114_j: '<array>', f115_p: '<array>', f116_y: '<array>', f117_h: '<object>', f118_m: '<string>', f119_s: '<number>', f120_v: '<number>', f121_q: '<boolean>', f122_b: '<null>', f123_y: '<string>', f124_v: '<boolean>', f125_d: '<boolean>', f126_k: '<object>', f127_v: '<null>', f128_l: '<boolean>', f129_q: '<string>', f130_n: '<number>', f131_a: '<null>', f132_i: '<null>', f133_c: '<object>', f134_s: '<string>', f135_z: '<object>', f136_r: '<object>', f137_i: '<array>', f138_a: '<null>', f139_c: '<string>', f140_l: '<object>', f141_o: '<string>', f142_v: '<number>', f143_j: '<boolean>', f144_u: '<array>', f145_e: '<string>', f146_r: '<null>', f147_k: '<number>', f148_p: '<boolean>', f149_e: '<array>', f150_t: '<string>', f151_v: '<boolean>', f152_u: '<boolean>', f153_h: '<null>', f154_g: '<null>', f155_r: '<string>', f156_h: '<object>', f157_q: '<boolean>', f158_k: '<object>', f159_k: '<boolean>', f160_x: '<string>', f161_w: '<number>', f162_w: '<array>', f163_f: '<array>', f164_w: '<string>', f165_z: '<boolean>', f166_m: '<string>', f167_r: '<string>', f168_d: '<null>', f169_b: '<boolean>', f170_e: '<string>', f171_w: '<object>', f172_o: '<object>', f173_s: '<null>', f174_t: '<array>', f175_f: '<boolean>', f176_t: '<string>', f177_y: '<null>', f178_d: '<object>', f179_h: '<object>', f180_x: '<object>', f181_i: '<string>', f182_c: '<number>', f183_q: '<null>', f184_f: '<null>', f185_s: '<number>', f186_h: '<object>', f187_j: '<array>', f188_y: '<null>', f189_f: '<array>', f190_y: '<number>', f191_y: '<boolean>', f192_v: '<number>', f193_v: '<object>', f194_h: '<array>', f195_j: '<null>', f196_e: '<null>', f197_s: '<boolean>', f198_i: '<object>', f199_p: '<null>', f200_i: '<null>', f201_q: '<boolean>', f202_k: '<array>', f203_n: '<number>', f204_a: '<number>', f205_o: '<string>', f206_v: '<boolean>', f207_p: '<object>', f208_z: '<number>', f209_v: '<array>', f210_j: '<boolean>', f211_c: '<string>', f212_i: '<null>', f213_l: '<string>', f214_e: '<string>', f215_w: '<null>', f216_d: '<number>', f217_n: '<array>', f218_t: '<array>', f219_i: '<array>', f220_i: '<string>', f221_m: '<object>', f222_d: '<array>', f223_m: '<object>', f224_n: '<object>', f225_x: '<boolean>', f226_l: '<boolean>', f227_c: '<boolean>', f228_s: '<string>', f229_b: '<boolean>', f230_i: '<null>', f231_f: '<null>', f232_o: '<boolean>', f233_f: '<object>', f234_s: '<array>', f235_o: '<object>', f236_b: '<string>', f237_i: '<null>', f238_e: '<array>', f239_e: '<array>', f240_e: '<number>', f241_h: '<null>', f242_d: '<array>', f243_z: '<array>', f244_i: '<number>', f245_j: '<string>', f246_w: '<null>', f247_z: '<number>', f248_h: '<boolean>', f249_a: '<boolean>', f250_s: '<number>', f251_t: '<object>', f252_a: '<null>', f253_z: '<number>'}, 'JmNjpNFGAxnwmXPLzkVLKfxwiVlBHeRcsrFCPrlJyeeuZbtXRGVLsLDlfRoOpczSMRuUJIJbnLsCEGkWlcCXlvKdxjduUZRfXmuOpwfququDnCVnSUxmAfSEEjOdyHTTiUQMCOKHaWDQbXpGvEyMnvnbOSHRXftZAgHqOmvvJXoDPKpWtREfmEYprXNVCsRACPyAuFcwrWfIMMlLnDSynZAAJMxBxtdcfCRsBmivwnFHlVMWENSBVZbBSjaRzMasUetjzjnQmdtbvPuLjxXgogCPfFrXrQYaMHxqEvlEXjNQdnGYSPJOjwwOJslANWrYZwybdMJAgYjSQNboUXNMuSUhvKTeZVcOImObRJngXeyEIJtQkKwxIXLymxhTwWOJwlmntCEjuDGZmtoacOLCbYwxEfWhhicymLomkxUXhyQYNdXPtuucnetvPRhLaaRzGKPRdNLjdAzSfaIGZRjmpbYXFqsgfOMQYTPxZXEbIyauxOCoAbOnxOZRgdwspcBilxDKWSysFhTyMoQxmzZEmUOdDNPfTLFHrUlnqxqEIHEfgtBOdRaLUzqWGSjYOOiYuMUOJpvynNAUCDSdShDSzaZDwHEwKqAzUMnqsFHMGwpqefuOZebcYbuthUfwKEIaRrnGoaOkArktGIBIxgZNCmIGIooAVn');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('JmNjpNFGAxnwmXPLzkVLKfxwiVlBHeRcsrFCPrlJyeeuZbtXRGVLsLDlfRoOpczSMRuUJIJbnLsCEGkWlcCXlvKdxjduUZRfXmuOpwfququDnCVnSUxmAfSEEjOdyHTTiUQMCOKHaWDQbXpGvEyMnvnbOSHRXftZAgHqOmvvJXoDPKpWtREfmEYprXNVCsRACPyAuFcwrWfIMMlLnDSynZAAJMxBxtdcfCRsBmivwnFHlVMWENSBVZbBSjaRzMasUetjzjnQmdtbvPuLjxXgogCPfFrXrQYaMHxqEvlEXjNQdnGYSPJOjwwOJslANWrYZwybdMJAgYjSQNboUXNMuSUhvKTeZVcOImObRJngXeyEIJtQkKwxIXLymxhTwWOJwlmntCEjuDGZmtoacOLCbYwxEfWhhicymLomkxUXhyQYNdXPtuucnetvPRhLaaRzGKPRdNLjdAzSfaIGZRjmpbYXFqsgfOMQYTPxZXEbIyauxOCoAbOnxOZRgdwspcBilxDKWSysFhTyMoQxmzZEmUOdDNPfTLFHrUlnqxqEIHEfgtBOdRaLUzqWGSjYOOiYuMUOJpvynNAUCDSdShDSzaZDwHEwKqAzUMnqsFHMGwpqefuOZebcYbuthUfwKEIaRrnGoaOkArktGIBIxgZNCmIGIooAVn', true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_l: '<number>', f1_g: '<object>', f2_g: '<string>', f3_e: '<number>', f4_f: '<number>'}, 'dfemzPGLmQlVnMxtWZbualnlLISAyRevuKsyxHqrChxvPIvEIwVkUyDgpFXQ');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('JmNjpNFGAxnwmXPLzkVLKfxwiVlBHeRcsrFCPrlJyeeuZbtXRGVLsLDlfRoOpczSMRuUJIJbnLsCEGkWlcCXlvKdxjduUZRfXmuOpwfququDnCVnSUxmAfSEEjOdyHTTiUQMCOKHaWDQbXpGvEyMnvnbOSHRXftZAgHqOmvvJXoDPKpWtREfmEYprXNVCsRACPyAuFcwrWfIMMlLnDSynZAAJMxBxtdcfCRsBmivwnFHlVMWENSBVZbBSjaRzMasUetjzjnQmdtbvPuLjxXgogCPfFrXrQYaMHxqEvlEXjNQdnGYSPJOjwwOJslANWrYZwybdMJAgYjSQNboUXNMuSUhvKTeZVcOImObRJngXeyEIJtQkKwxIXLymxhTwWOJwlmntCEjuDGZmtoacOLCbYwxEfWhhicymLomkxUXhyQYNdXPtuucnetvPRhLaaRzGKPRdNLjdAzSfaIGZRjmpbYXFqsgfOMQYTPxZXEbIyauxOCoAbOnxOZRgdwspcBilxDKWSysFhTyMoQxmzZEmUOdDNPfTLFHrUlnqxqEIHEfgtBOdRaLUzqWGSjYOOiYuMUOJpvynNAUCDSdShDSzaZDwHEwKqAzUMnqsFHMGwpqefuOZebcYbuthUfwKEIaRrnGoaOkArktGIBIxgZNCmIGIooAVn', 'dfemzPGLmQlVnMxtWZbualnlLISAyRevuKsyxHqrChxvPIvEIwVkUyDgpFXQ', true, false);
        getAll_0 = objectStore_0.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('JmNjpNFGAxnwmXPLzkVLKfxwiVlBHeRcsrFCPrlJyeeuZbtXRGVLsLDlfRoOpczSMRuUJIJbnLsCEGkWlcCXlvKdxjduUZRfXmuOpwfququDnCVnSUxmAfSEEjOdyHTTiUQMCOKHaWDQbXpGvEyMnvnbOSHRXftZAgHqOmvvJXoDPKpWtREfmEYprXNVCsRACPyAuFcwrWfIMMlLnDSynZAAJMxBxtdcfCRsBmivwnFHlVMWENSBVZbBSjaRzMasUetjzjnQmdtbvPuLjxXgogCPfFrXrQYaMHxqEvlEXjNQdnGYSPJOjwwOJslANWrYZwybdMJAgYjSQNboUXNMuSUhvKTeZVcOImObRJngXeyEIJtQkKwxIXLymxhTwWOJwlmntCEjuDGZmtoacOLCbYwxEfWhhicymLomkxUXhyQYNdXPtuucnetvPRhLaaRzGKPRdNLjdAzSfaIGZRjmpbYXFqsgfOMQYTPxZXEbIyauxOCoAbOnxOZRgdwspcBilxDKWSysFhTyMoQxmzZEmUOdDNPfTLFHrUlnqxqEIHEfgtBOdRaLUzqWGSjYOOiYuMUOJpvynNAUCDSdShDSzaZDwHEwKqAzUMnqsFHMGwpqefuOZebcYbuthUfwKEIaRrnGoaOkArktGIBIxgZNCmIGIooAVn');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('JmNjpNFGAxnwmXPLzkVLKfxwiVlBHeRcsrFCPrlJyeeuZbtXRGVLsLDlfRoOpczSMRuUJIJbnLsCEGkWlcCXlvKdxjduUZRfXmuOpwfququDnCVnSUxmAfSEEjOdyHTTiUQMCOKHaWDQbXpGvEyMnvnbOSHRXftZAgHqOmvvJXoDPKpWtREfmEYprXNVCsRACPyAuFcwrWfIMMlLnDSynZAAJMxBxtdcfCRsBmivwnFHlVMWENSBVZbBSjaRzMasUetjzjnQmdtbvPuLjxXgogCPfFrXrQYaMHxqEvlEXjNQdnGYSPJOjwwOJslANWrYZwybdMJAgYjSQNboUXNMuSUhvKTeZVcOImObRJngXeyEIJtQkKwxIXLymxhTwWOJwlmntCEjuDGZmtoacOLCbYwxEfWhhicymLomkxUXhyQYNdXPtuucnetvPRhLaaRzGKPRdNLjdAzSfaIGZRjmpbYXFqsgfOMQYTPxZXEbIyauxOCoAbOnxOZRgdwspcBilxDKWSysFhTyMoQxmzZEmUOdDNPfTLFHrUlnqxqEIHEfgtBOdRaLUzqWGSjYOOiYuMUOJpvynNAUCDSdShDSzaZDwHEwKqAzUMnqsFHMGwpqefuOZebcYbuthUfwKEIaRrnGoaOkArktGIBIxgZNCmIGIooAVn');
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_3661')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_1782')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};