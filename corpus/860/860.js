let db;
const openRequest = window.indexedDB.open('str_5090', 5295912032124097)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5152', {autoIncrement: true});
    var add_0 = objectStore_0.add({f0_c: '<array>', f1_o: '<boolean>', f2_z: '<boolean>', f3_x: '<array>', f4_g: '<object>', f5_r: '<number>', f6_r: '<null>', f7_s: '<null>', f8_f: '<number>', f9_q: '<number>', f10_h: '<object>', f11_y: '<string>', f12_z: '<boolean>', f13_y: '<number>', f14_t: '<object>', f15_d: '<array>', f16_g: '<null>', f17_g: '<boolean>', f18_e: '<object>', f19_l: '<boolean>', f20_v: '<array>', f21_u: '<object>', f22_e: '<array>', f23_e: '<object>', f24_t: '<number>', f25_h: '<null>', f26_x: '<null>', f27_i: '<object>', f28_z: '<number>', f29_o: '<null>', f30_j: '<null>', f31_n: '<number>', f32_g: '<array>', f33_k: '<string>', f34_e: '<boolean>', f35_k: '<number>', f36_t: '<boolean>', f37_q: '<array>', f38_e: '<number>', f39_l: '<boolean>', f40_y: '<boolean>', f41_t: '<boolean>', f42_o: '<string>', f43_o: '<array>', f44_o: '<boolean>', f45_h: '<array>', f46_t: '<string>', f47_h: '<array>', f48_s: '<null>', f49_x: '<number>', f50_u: '<boolean>', f51_e: '<string>', f52_i: '<array>', f53_w: '<object>', f54_c: '<number>', f55_z: '<array>', f56_i: '<array>', f57_o: '<null>', f58_j: '<string>', f59_j: '<array>', f60_j: '<number>', f61_h: '<array>', f62_s: '<array>', f63_b: '<null>', f64_y: '<boolean>', f65_n: '<number>', f66_t: '<number>', f67_d: '<object>', f68_g: '<string>', f69_a: '<object>', f70_x: '<array>', f71_d: '<string>', f72_t: '<null>', f73_o: '<number>', f74_o: '<number>', f75_w: '<array>', f76_f: '<string>', f77_o: '<array>', f78_k: '<null>', f79_z: '<string>', f80_m: '<boolean>', f81_g: '<string>', f82_f: '<number>', f83_u: '<null>', f84_o: '<array>', f85_l: '<string>', f86_t: '<string>', f87_i: '<array>', f88_q: '<number>', f89_s: '<number>', f90_z: '<number>', f91_b: '<boolean>', f92_u: '<number>', f93_k: '<array>', f94_o: '<array>', f95_b: '<string>', f96_g: '<array>', f97_j: '<string>', f98_j: '<null>', f99_o: '<array>', f100_d: '<null>', f101_n: '<null>', f102_j: '<object>', f103_b: '<string>', f104_u: '<number>', f105_g: '<string>', f106_z: '<object>', f107_w: '<object>', f108_n: '<boolean>', f109_n: '<object>', f110_s: '<string>', f111_p: '<null>', f112_r: '<object>', f113_d: '<number>', f114_o: '<boolean>', f115_l: '<string>', f116_t: '<boolean>', f117_b: '<boolean>', f118_m: '<null>', f119_f: '<number>', f120_s: '<string>', f121_j: '<array>', f122_t: '<null>', f123_c: '<boolean>', f124_c: '<number>', f125_y: '<string>', f126_l: '<null>', f127_u: '<object>', f128_r: '<array>', f129_u: '<array>', f130_l: '<number>', f131_j: '<string>', f132_r: '<number>', f133_d: '<array>', f134_d: '<object>', f135_w: '<number>', f136_c: '<boolean>', f137_s: '<number>', f138_w: '<array>', f139_k: '<object>', f140_x: '<string>', f141_n: '<number>', f142_u: '<boolean>', f143_n: '<object>', f144_f: '<object>', f145_e: '<boolean>', f146_s: '<string>', f147_i: '<number>', f148_x: '<boolean>', f149_i: '<boolean>', f150_z: '<array>', f151_t: '<boolean>', f152_g: '<array>', f153_h: '<object>', f154_p: '<number>', f155_m: '<null>', f156_b: '<object>', f157_w: '<object>', f158_f: '<boolean>', f159_m: '<string>', f160_f: '<string>', f161_y: '<object>', f162_l: '<null>', f163_g: '<number>', f164_o: '<null>', f165_q: '<number>', f166_k: '<array>', f167_g: '<null>', f168_f: '<null>', f169_h: '<array>', f170_l: '<number>', f171_l: '<null>', f172_l: '<null>', f173_w: '<string>', f174_z: '<boolean>', f175_x: '<object>', f176_m: '<string>', f177_m: '<string>', f178_q: '<object>', f179_b: '<string>', f180_e: '<string>', f181_k: '<array>', f182_i: '<null>', f183_b: '<boolean>', f184_u: '<object>', f185_l: '<object>', f186_c: '<object>', f187_s: '<array>', f188_f: '<boolean>', f189_p: '<boolean>', f190_f: '<null>', f191_u: '<string>', f192_j: '<number>', f193_b: '<null>', f194_j: '<boolean>', f195_o: '<string>', f196_p: '<object>', f197_b: '<number>', f198_q: '<null>', f199_e: '<array>', f200_a: '<object>', f201_i: '<array>', f202_l: '<number>', f203_u: '<array>', f204_z: '<string>', f205_e: '<string>', f206_u: '<string>', f207_t: '<object>', f208_u: '<object>', f209_a: '<array>', f210_r: '<number>', f211_i: '<number>', f212_b: '<array>', f213_y: '<object>', f214_e: '<string>', f215_a: '<null>', f216_t: '<boolean>', f217_l: '<array>', f218_g: '<object>', f219_h: '<null>', f220_r: '<null>', f221_n: '<null>', f222_o: '<string>', f223_s: '<boolean>', f224_z: '<array>', f225_m: '<string>', f226_e: '<boolean>', f227_f: '<number>', f228_v: '<string>', f229_g: '<object>', f230_o: '<object>', f231_o: '<boolean>', f232_f: '<null>', f233_e: '<null>', f234_f: '<string>', f235_p: '<object>', f236_o: '<boolean>', f237_d: '<string>', f238_x: '<null>', f239_r: '<number>', f240_r: '<object>', f241_e: '<null>', f242_y: '<array>', f243_b: '<null>', f244_g: '<string>', f245_l: '<null>', f246_c: '<number>', f247_x: '<number>', f248_k: '<number>', f249_v: '<number>', f250_e: '<number>', f251_g: '<object>', f252_f: '<number>', f253_k: '<object>', f254_z: '<null>', f255_c: '<object>', f256_g: '<array>', f257_d: '<array>', f258_i: '<object>', f259_m: '<number>', f260_v: '<boolean>', f261_r: '<string>', f262_v: '<number>', f263_q: '<number>', f264_a: '<boolean>', f265_q: '<object>', f266_g: '<boolean>', f267_y: '<boolean>', f268_e: '<array>', f269_y: '<boolean>', f270_z: '<boolean>', f271_c: '<boolean>', f272_q: '<string>', f273_o: '<null>'}, 'OpGU');
    var getAllKeys_0 = objectStore_0.getAllKeys(2584984586);
    var index_3456 = objectStore_0.createIndex('index_3456', 'test', {unique: true});
    db.deleteObjectStore('objectStore_5152')
    var objectStore_1 = db.createObjectStore('objectStore_5153', {autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_5154');
    var objectStore_3 = db.createObjectStore('objectStore_5155');
    var put_0 = objectStore_2.put({f0_h: '<array>', f1_f: '<null>', f2_j: '<object>', f3_q: '<string>', f4_m: '<number>', f5_a: '<string>', f6_j: '<array>', f7_a: '<null>', f8_o: '<number>', f9_b: '<array>'}, 'NRCdWmjteVoRuhIqTLDsFNXAhVyTeAcPUAsQhdEqKnefuOZVtjHIbVMgWXPaNncnsccqFVqIZmkeDfwrxokCTBgKnfADfJnmkurUQFpzbhMVpBRcNKcbdHhggPyoosoGqHlMeWZnHYiCUeevVFLeZMTenFeoZnEsbvnvUZEnSwxfiGEcWJkSLwggKaiMpXzSzxIfGptIvuzkGMKiKZholyBwWMNaJfSjACZGuDauCJxoHFmdOEOaxWXVumoqMDFSgLZypRADjGiHhKBlubixeviexyBMATWBuMmcsIdZuUmhPjESJZIDHIKIGxEwsfzGqnKzWfSxwQbssGyQdfhtuisKLugViFZfofKOQVzVqNGCgrTFromxiJFYUhXBjjojDwMVklCPaiHoLtCivwXqDqiFVKntvLSgfdKKiZMutrauMhJBvremATfROcPBfrdwAseoprvFyyNvCDUucFuDUygJCpXKjQlOzwtgxzuplZiTxuGaDiJfSshuaOJrDTxCvMISjvGyNfNVYDOMhIRSMkINPuYDxICsHonEJmrXoFDmKbZlWpVjsZumxhiilpPRgDWLnQzbpptFpmCjFHpLMLDdpGQxzjjjlKNAQfViQcDChBmGsrAFdJrSnGyRqUpnaWaKvOFaceiJtrPjREhXinPEKhEhoAxRRWzYsUlKVGeGkfdUCzqNuMJLlVuoOFvSgbaJBrWIUcEMIpCbepsJNeHUwrQGfdlnspGkGiLgaBnPzrQXWuagiaCqKbjALRaEHyoaSymguiPZAAhkXwAKvYDkoULmHchkqtNbETsSlpgyZLMptKytiRQVsWXlaIwHlpVSpebXYtlDvbvsjOmHwMYopLghJhcEJXDCcWGGumeCGEypJtfcfRPQDPbMqylWWbLYjYkykrTmmOlwggmpcwkGkQZSZSRNBDYP');
    var objectStore_4 = db.createObjectStore('objectStore_5156', {keypath: 'WyWmsUomZXYZLWWsXrrItMBIzIvzyVlRfyHbLXWXnZZFnmDVHQZqkuWZCUPfjbteenwCELpPGURjYtdvubHizIgKKZkLCBEVDvGPuNVUGHEMJHmgMrVmZyAyBSJPrQuqOLPYQgwaGJuXQyAGOjWFySDLzPSPnoVcEGjjQAVllCcsFNmFWLdRMKdAirHnnweczjgmBnoraUksAntZNItEkHWkNWbHntERxQRMRMMXQdjTkuvscGFERsOwwVYCcTzmsDCSBSlOVmuNerbtoCUFAIvMQSsRYvAlIPOHTYLxixVjlJAWomEHuIHspsFMgDhDPRTpGOWQeuaKBYjLDQLGZVXoMCwYpHUdSXQnPGCeUtRglObbarBKaEexEvgeYlJMScpitANFmppatQWUOTkyIoOmiKYCvIHVssOFdTLgtRbHLDgCBldVrztOTCTprxQqZIsJrClTXAQXYruwAjDtACztaAjihIdhMUJWSipBUWlQGqCCAJZwRYRjCybIFGLyrTfEVAXLemqduaPKzzYVzyaffthHLDtcDZNONwoLntOvWUrJrVqpDc', autoIncrement: false});
    var clear_0 = objectStore_4.clear();
    var objectStore_5 = db.createObjectStore('objectStore_5157', {keypath: 'VHOWzvOehSkdawJOIcWdGSNOuGsQZrpwdMrTtUqeHRTwoWJtTjRGbdEFYMlmnuyVEhxSmuHOSOvLmluTvMTEXWpVwjyjITJtyrnLkigxGUmiiFXnNRNPBzhtWRuREoDFEkxGAAWAwbNJjVNaJcANBskeWYBLlUAmNpbnvKESBbYBWFXzrHrBGUZOJDcvvJwvgRUCvxXAQRoyfyOmaWLDLlblCLIHBnwsJAfPTDKVRcZhowWpabKKuZXTlhsSpPyDsLvYKfqYNijxiDEPbUJrfmqLhmrJRlkXpgfvUEIRfLsTEkrPDyPnGVhlAvVgtqVZkxUlptVJxuUNeCpEXgieJVJLajFrkIVyIDgKPtWzsuspfIpCFRqRFtXJVOnuScgUHCmoVdOkiaSpnoNDlcDtgvkbkYsBAtQmhCYlupqTyRdVmAfQfPjmGHMpRjVqEZcLRawKSmsXgkpVwAvZRVOyfxaJZrLJHRHrlKSAbPbcdVVdAfGePlFPwBuysCCTHBDycGmAlsGvuHIoPqezeteFlxIaXyefGspnhKCWDkwOouQPSGoVEXVQWCJzcoDRuZySUnaGfQGeGrMRmISFMZRZKqqMDDcXdfJwspEGexvoRdkJkPPWMEUROpaMugeDwOcsWhNdVgOGhTeUEFewnNOjPkMHWNHpasglRrRChUBwJDDxbgGKYaxogEFsXwtZjXNFmqxfAoxbXuHyKnSkpgvRKUwUvzwRRPCJfoNfASlfieDDspKlvZbGaoqFSzQbWrDRmCylWVDUEvcTUJpbKNxJDteczlSBmByccLDHNcpLxrJAhWdSOIfvWGfewfBlQBxGJskYTSjulmpJPBoYWpuXtdtVtsGCaBQtFvxUHpegLpNFZxIXuOHtifYqeqvVWhWDOLSPiHMlOPAriNfrifQURptsASTVbJJpapKjwEurbRCeTshDmJkUHxBxLmxjttmZWSrhRiusNtQoNhwKLcVVKjDSDxPNUkhRMdpJRv'});
    var clear_1 = objectStore_3.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7760 = db.transaction(['objectStore_5154', 'objectStore_5153'], 'readwrite', {durability:"default"})
    var objectStore_5153 = txn_7760.objectStore('objectStore_5153');
    var put_1 = objectStore_5153.put({f0_k: '<object>', f1_m: '<boolean>'}, 'ZDJqhUVGYFIQAoJmlHTrUxXrTpRIAzdQJDkvOFXWJl');
    var clear_2 = objectStore_5153.clear();
    var clear_3 = objectStore_5153.clear();
    var clear_4 = objectStore_5153.clear();
    var put_2 = objectStore_5153.put({f0_g: '<object>', f1_a: '<array>', f2_w: '<boolean>', f3_t: '<string>'}, 'efkFWSWkkpakdzQmnOXtjqjJYMMgFqmaXqrpPqAss');
    var put_3 = objectStore_5153.put({f0_u: '<boolean>', f1_a: '<object>'}, 'zPqAurUciGCDAqujVeIAjMODUoJdhaXBEndnSeOlUQSMnecaRyiIygciGwpFzFdyqmXgnIOWkSuqoEgxnMgoPQcyxqtYvSXwWJyleuWpgeCmJrtulSjEMHbRbVQwviKRZhloWdqwEATvlDXssPpabWWihPqvOqPIpVJCritVGVbzUmBPgLTfGlcQXjiBJZGxibQACWPvqernHNuknjdfXnpAszXzgEpcuwUqMWobGzjVuifSOivnwTInjjDOzyUcinnMnuFhdEmdhkqjVGXFbiztaUBTAWonmAXuanmmWLuRRtmYEBnLcidAhbWQzpEfswBQDpnZPQXUZvjwuLTJpdPbDfTBFXuRmZdvZTXyZiWEQqLtSjazzSpzbguPlTbSkxiRvutErxMJTXQmkTosSRUVyNalSrNtUeJfyMKOOdimtxuMxnhxtIEGLMhZmgLYXFlUqXDxmCCHthKAggxejHfZRiRwbWmjzFfykIdbcEkRZvmDwIMNuOLcFqcLQDXJhSoKVnTbeCBkHWshDsQeWokMCeHlfoAKCRDyXBgYzqwEArjXpEuRJWLGFkwlhaDjhLexiCnMQCnHFeKltaXqhbmDI');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.only('efkFWSWkkpakdzQmnOXtjqjJYMMgFqmaXqrpPqAss');
        getAll_0 = objectStore_5153.getAll(KeyRange_0, 1303754213);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('zPqAurUciGCDAqujVeIAjMODUoJdhaXBEndnSeOlUQSMnecaRyiIygciGwpFzFdyqmXgnIOWkSuqoEgxnMgoPQcyxqtYvSXwWJyleuWpgeCmJrtulSjEMHbRbVQwviKRZhloWdqwEATvlDXssPpabWWihPqvOqPIpVJCritVGVbzUmBPgLTfGlcQXjiBJZGxibQACWPvqernHNuknjdfXnpAszXzgEpcuwUqMWobGzjVuifSOivnwTInjjDOzyUcinnMnuFhdEmdhkqjVGXFbiztaUBTAWonmAXuanmmWLuRRtmYEBnLcidAhbWQzpEfswBQDpnZPQXUZvjwuLTJpdPbDfTBFXuRmZdvZTXyZiWEQqLtSjazzSpzbguPlTbSkxiRvutErxMJTXQmkTosSRUVyNalSrNtUeJfyMKOOdimtxuMxnhxtIEGLMhZmgLYXFlUqXDxmCCHthKAggxejHfZRiRwbWmjzFfykIdbcEkRZvmDwIMNuOLcFqcLQDXJhSoKVnTbeCBkHWshDsQeWokMCeHlfoAKCRDyXBgYzqwEArjXpEuRJWLGFkwlhaDjhLexiCnMQCnHFeKltaXqhbmDI');
        getAll_0 = objectStore_5153.getAll(KeyRange_1);
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('ZDJqhUVGYFIQAoJmlHTrUxXrTpRIAzdQJDkvOFXWJl', false);
        get_0 = objectStore_5153.get(KeyRange_2);
    }
    catch (e){
    }

    txn_7760.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7760.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7760.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7761 = db.transaction(['objectStore_5157', 'objectStore_5156', 'objectStore_5153', 'objectStore_5155', 'objectStore_5154'], 'readonly', {durability:"relaxed"})
    var objectStore_5157 = txn_7761.objectStore('objectStore_5157');
    txn_7761.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7761.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7761.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7762 = db.transaction(['objectStore_5157', 'objectStore_5155', 'objectStore_5154'], 'readonly', {durability:"strict"})
    var objectStore_5157 = txn_7762.objectStore('objectStore_5157');
    txn_7762.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7762.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7762.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7763 = db.transaction(['objectStore_5155'], 'readonly', {durability:"strict"})
    var objectStore_5155 = txn_7763.objectStore('objectStore_5155');
    txn_7763.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7763.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7763.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7764 = db.transaction(['objectStore_5156', 'objectStore_5155', 'objectStore_5153'], 'readonly', {durability:"default"})
    var objectStore_5155 = txn_7764.objectStore('objectStore_5155');
    txn_7764.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7764.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7764.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1542')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};