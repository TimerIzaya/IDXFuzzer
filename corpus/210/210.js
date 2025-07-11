let db;
const openRequest = window.indexedDB.open('str_4066', 6209350182473091)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1251', {keypath: 'KrGPudAxAvslMVEfOTXhArNJSEPmKTBLkDAPZVAJwIAtJvvVCLYQfGCFpOJDNoAVOOtWKmGwOHmCQBNfqFtMOnuxOJScmwldwUXozrWZGiQCeSeXCDiUdRlfiRegKdXBLGVlDiSAseBlGIuLdeVLfWaqbQEQFgKKaksNcqkiwABvvSOBHPjFilCXIjKWyaQVMoCffoyhNnyUIZZxkenkoqSKDHuvHSpTqtFQiyRcMLfYBClJGHDqjqXzalHzZiubKwFLazOvuxnHAqduzjyyxNdnLFvvldltFryBwdqlNFCLyDUdateZwQuPJxzXPlqBBDhdOoUGZYgupsIwVIkaJPgLhRiWgAGTYxreVGfRHpimMxixkqrkgJrjUpngQKEupiqOfTBqDUTlHDnPLcBRRcgFHIZGVxVjmfIdikbQKWiwvEODRdxlaxSdnqbxbZbsvgbkVEzjGCOGWucsaPzhGiqoCUwIdLEPRxHkFvSmDQnGTkDmGWGrDIfwcptewaCLnGYtJYehoJOxJyMEdXEPIOUUZkeLsZYInZnxkogZANPebRWHDpmyOAnSNELWxlwJRrcmpsvfFAgKBqhDelMrnYgMysWXHzuzKMfRLLCnpXcdHlxDLIjilHLpBTeAYATxaiJCYYcoGQKHGACQxpkfBrVCuurQgMhWdvJHaUiyYeGoYMyIpYXwOQlbBFjEemXjMKMpIBzRlWrmcjDRnsa'});
    var put_0 = objectStore_0.put({f0_z: '<null>'}, 'sepCnYGDEIbMbPHahLtXLHmzRFIQJyOdJcKVMdhQJfwChCQvUAuWJGIOgKmRPqCbptGYgTgCwJKNFMPwGjgDYhdUZwCYSxErdeLMOGCDRGnxUOaBgMpeewHOzVnyzoFUUMfmJxFDsyvnNtiwQruEkpDOuMbfQxNkUoVEUGupzAppxQXfMbBNXEOmZIAUwrDIfelLClPpOperLauSFnjnkFetYAHxbprAzrBLULSyItmHvasRgmpBxlcGsDMDlBOvNnPZYLVXUxmjYqnIFSIwWfyCPBfSeablJZATEBBVlgKszESvdKsJRMVfVTKoNuAzGEAiZdSMDsAOtVlPLXJetgcbsMUvGFriKIGBGeMHndUPwqvkkKRTGPTpglvMqXamIlBtPGDhtRCYThsATJoQrhRhZYhpaeZzbdEnrNGphHVDujFOUjwkOrIJvdWmQdjXnmFsjwNtUYnLPGBlFUmpcMsLUnWacHWTvVwFeMazEWlFbuSCfyUdNgQnqcdYVJdbhiwcrwYMPiXUENCYSvZpJBgcbKQCRMmaHgIdSAyFYtVtuKmnUoQSPdeMAxGWamqBwnbdXSAfiSkhDTVLhynSrlyjYmqoNNU');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('sepCnYGDEIbMbPHahLtXLHmzRFIQJyOdJcKVMdhQJfwChCQvUAuWJGIOgKmRPqCbptGYgTgCwJKNFMPwGjgDYhdUZwCYSxErdeLMOGCDRGnxUOaBgMpeewHOzVnyzoFUUMfmJxFDsyvnNtiwQruEkpDOuMbfQxNkUoVEUGupzAppxQXfMbBNXEOmZIAUwrDIfelLClPpOperLauSFnjnkFetYAHxbprAzrBLULSyItmHvasRgmpBxlcGsDMDlBOvNnPZYLVXUxmjYqnIFSIwWfyCPBfSeablJZATEBBVlgKszESvdKsJRMVfVTKoNuAzGEAiZdSMDsAOtVlPLXJetgcbsMUvGFriKIGBGeMHndUPwqvkkKRTGPTpglvMqXamIlBtPGDhtRCYThsATJoQrhRhZYhpaeZzbdEnrNGphHVDujFOUjwkOrIJvdWmQdjXnmFsjwNtUYnLPGBlFUmpcMsLUnWacHWTvVwFeMazEWlFbuSCfyUdNgQnqcdYVJdbhiwcrwYMPiXUENCYSvZpJBgcbKQCRMmaHgIdSAyFYtVtuKmnUoQSPdeMAxGWamqBwnbdXSAfiSkhDTVLhynSrlyjYmqoNNU', true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_t: '<boolean>', f1_b: '<number>', f2_w: '<string>', f3_z: '<array>', f4_f: '<object>', f5_q: '<string>', f6_q: '<boolean>', f7_u: '<null>', f8_x: '<null>', f9_a: '<number>', f10_f: '<object>', f11_r: '<array>', f12_c: '<number>', f13_x: '<object>', f14_n: '<null>', f15_u: '<array>', f16_h: '<null>', f17_i: '<object>', f18_d: '<string>', f19_c: '<null>', f20_q: '<null>', f21_g: '<object>', f22_w: '<number>', f23_u: '<array>', f24_k: '<number>', f25_q: '<null>', f26_k: '<boolean>', f27_t: '<string>', f28_a: '<null>', f29_g: '<array>', f30_w: '<boolean>', f31_p: '<boolean>', f32_t: '<object>', f33_q: '<string>', f34_t: '<null>', f35_c: '<boolean>', f36_o: '<number>', f37_v: '<boolean>', f38_p: '<null>', f39_f: '<number>', f40_a: '<number>', f41_s: '<boolean>', f42_j: '<object>', f43_r: '<object>', f44_m: '<array>', f45_f: '<number>', f46_h: '<number>', f47_f: '<array>', f48_n: '<null>', f49_b: '<array>', f50_w: '<object>', f51_t: '<null>', f52_d: '<string>', f53_z: '<null>', f54_h: '<null>', f55_y: '<object>', f56_s: '<string>', f57_j: '<array>', f58_s: '<null>', f59_l: '<number>', f60_c: '<null>', f61_w: '<null>', f62_c: '<null>', f63_a: '<null>', f64_n: '<array>', f65_f: '<array>', f66_n: '<number>', f67_i: '<object>', f68_x: '<array>', f69_l: '<string>', f70_g: '<number>', f71_x: '<array>', f72_p: '<boolean>', f73_i: '<boolean>', f74_k: '<object>', f75_y: '<string>', f76_b: '<boolean>', f77_e: '<object>', f78_v: '<object>', f79_x: '<object>', f80_v: '<number>', f81_d: '<string>', f82_l: '<string>', f83_j: '<array>', f84_z: '<array>', f85_v: '<object>', f86_o: '<boolean>', f87_c: '<string>', f88_x: '<boolean>', f89_w: '<object>', f90_o: '<object>', f91_l: '<array>', f92_j: '<null>', f93_u: '<boolean>', f94_w: '<array>', f95_o: '<object>', f96_u: '<object>', f97_v: '<null>', f98_h: '<boolean>', f99_s: '<object>', f100_x: '<object>', f101_c: '<object>', f102_a: '<number>', f103_t: '<null>', f104_o: '<array>', f105_a: '<object>', f106_s: '<array>', f107_v: '<string>', f108_t: '<object>', f109_p: '<boolean>', f110_y: '<string>', f111_k: '<boolean>', f112_v: '<boolean>', f113_o: '<null>', f114_b: '<number>', f115_l: '<object>', f116_e: '<array>', f117_t: '<number>', f118_o: '<number>', f119_d: '<object>', f120_f: '<array>'}, 'RkXJeBhABcwjKdcLHblsartCrwgxXuhGabqWXKXAcIbjFdFoqyvEuCuehakdWjLHZRGzfUsldgEdFzmSShRIcYsVOjtRRVBYrBpeaRmiTPzpZRDyzFeBSEBzQDteHpSZlahDFXttIfAPqRDwJTgapJJEBBEtPXjnvpfMFrsnWsLIPUXIuJBLnkJUaBhSfKRoaVEyjaMbHUkaIMwnTYePDfsEqHcn');
    var add_0 = objectStore_0.add({f0_n: '<boolean>', f1_h: '<object>'}, 'KjTOrOQLhtxEVBzQvLldHOuPGffLTJrUgQocVwcMtwikQPrVkHbzRfNiYgLXjKwlyPYbirpziuoRmVmZnePkBQNeoKsCwHWrVHZgHctQvuQNABurJKxDtHZSmBUkxyVKgUeYzJxzuKZVvHjFZnIJhQKabfiEJKIQEQPPymIewydltuUnMuvpgIsftKBbrnpQolQHlGmgglHVqpszucPaNrMqALUBTcCYnmxfpOTjKtDpidxJToRvKuVYelgKiNvkNbpZUoCBTXyhAmGglLMrTDQOLkCtDhoGeYTKKYhwaWlzkUflAVjFxAnWtkNapisWIvQrOFFhSZrhYpPmHytUBLgDeiwKRFYbzqLznBrbtBwaQVhykXKApipaDtaigcuUGmBryWsMrOcmVnalfSEFHCTeyxEWDsBWqppMFJUTacFeAxAbTiivirEucEEYWfpXlvainChgiXgqghNhTAQkmSKbPQhCOFgkYtCfroKZDZBLqAPUdLRotczuMFfiCvOYGmmZnfcaXeZoTeTxiRxwcqRalAlMxhhdhNjsJvqFffGlJznkGDgFTIDaCKpByhKZccWiLExjcfnYCMOLuaDOkcQBSeduNpgFGWhyBUNagLVQHTkCvdznRexkAcZxMntSieyNLigDGFgaiVjgkqKEFfPmHSzmcUTJbttLAEtGtOllNaldBZgZTvtGJqgBzWPlOBauAQuGXECjwdgguNHuErBQpzSTPEvXlLfGGTQNcpEfwySzogxwKSEhYyxdSuyrgRmhLmhOrgnDKKSUozbJxHGdlCPuKTGOygSNcmtSdmxOKMKZfektRdMxIEBqqiHV');
    var index_836 = objectStore_0.createIndex('index_836', 'test', {unique: false});
    var objectStore_1 = db.createObjectStore('objectStore_1252');
    var put_2 = objectStore_1.put({f0_t: '<boolean>', f1_n: '<null>', f2_n: '<number>', f3_c: '<number>', f4_a: '<object>', f5_n: '<object>', f6_b: '<array>'}, 'mcrOYccWRFagfxNNUKRmOClLNXJArggNYgKClBxWSFNGQitTiUhZtvnAYwxtuEjyKANWqGRWHnirjenOEbxKfGbZxlxvrEdGxLAkvwksKIcTxdtPNlqRJpdupJoReqVFJVndFrlLZVdvSnfCnJUuEChvYcGXxHehITUiyjtuBpogcwbfpildBMlhDLvcWHolmzSMHhIVdwVDeEnTEzYCtIMmADmqHeKwuQkjjwhEJJccYijOyYJALqHQRDIibOfGcJFlUsdAEpwtLkkpomgydciYDwylgjgfJeVImwMbWaBzdsGmDpuZZHisXnirpnSHNJfNtGyoejsBjEHWXzYHzDDBoIinOTlweiDIEitEmiuUXkfkLfKtIiAeWqSbmVfeKBBKTkZVBDocdiHRUznMEqnBfZVCLXrSaIxJcdFNYknaJmimsPMJrknlTADzjIZYduTLymvLqpnxfeCvRqqCYPDSMhUrGydIBlJUnvkjGDjZGoLHakxhungapNhYwKuPQNhpQUyUWviZHqDpmTGEhIFikmqKwWNSasJLXqtwiInUSjQGLjrsCfqPfhigNGbINMOpgOINDZMJYPZwpArKhgaFdiZPNIIzZRKDvFtfkbLNSceBMvPBKOSSXXDHAZvBCOPUrVsqNEMnivUVLnlCsDmoxRtULTOaymvBDzBjGyxjwQLirkzcTMigZvroWDdSpRLuqiMnonXExpcXvJIdywsTqJnfmXROJkZBjpqiEEStxMkegKPuIcdWVPfpREmlvMUGgvMwfTwgOKubfqrRwQclBgPDbavPLsxANsFMDgHtNuTNugxRVmgZrDDiTOoGtZVlBiFzAbplgdkpKLQZZZZtrpDDesDiGbXplnDIzXxxkkvCSDkQqHiUkyCQdEiQZr');
    var objectStore_2 = db.createObjectStore('objectStore_1253', {autoIncrement: true});
    db.deleteObjectStore('objectStore_1251')
    var clear_0 = objectStore_2.clear();
    var clear_1 = objectStore_2.clear();
    var put_3 = objectStore_2.put({f0_s: '<boolean>', f1_f: '<object>', f2_j: '<array>', f3_p: '<null>', f4_e: '<string>', f5_x: '<string>', f6_x: '<number>', f7_a: '<null>', f8_c: '<object>', f9_m: '<null>', f10_s: '<object>', f11_p: '<string>', f12_t: '<null>', f13_y: '<null>', f14_p: '<boolean>', f15_p: '<number>', f16_w: '<boolean>', f17_t: '<array>', f18_q: '<number>', f19_f: '<string>', f20_l: '<array>', f21_o: '<string>', f22_b: '<string>', f23_j: '<object>', f24_w: '<null>', f25_m: '<array>', f26_l: '<array>', f27_l: '<number>', f28_x: '<array>', f29_v: '<boolean>', f30_p: '<array>', f31_v: '<object>', f32_y: '<number>', f33_b: '<array>', f34_l: '<boolean>', f35_a: '<number>', f36_i: '<array>', f37_o: '<null>', f38_y: '<object>', f39_q: '<boolean>', f40_p: '<boolean>', f41_o: '<object>', f42_b: '<string>', f43_f: '<null>', f44_n: '<array>', f45_w: '<object>', f46_c: '<number>', f47_y: '<null>', f48_j: '<number>', f49_i: '<boolean>', f50_e: '<null>', f51_m: '<array>', f52_n: '<string>', f53_g: '<string>', f54_g: '<object>', f55_q: '<boolean>', f56_l: '<object>', f57_p: '<string>', f58_z: '<number>', f59_v: '<null>', f60_j: '<boolean>', f61_k: '<boolean>', f62_e: '<object>', f63_z: '<boolean>', f64_z: '<string>', f65_d: '<object>', f66_t: '<object>', f67_g: '<array>', f68_e: '<array>', f69_i: '<string>', f70_u: '<number>', f71_l: '<number>', f72_o: '<boolean>', f73_c: '<boolean>', f74_t: '<number>', f75_d: '<object>', f76_q: '<array>', f77_m: '<null>', f78_n: '<array>', f79_o: '<string>', f80_x: '<object>', f81_e: '<string>', f82_b: '<object>', f83_h: '<number>', f84_o: '<boolean>', f85_j: '<boolean>', f86_w: '<number>', f87_p: '<number>', f88_e: '<object>', f89_b: '<array>', f90_k: '<string>', f91_e: '<null>', f92_o: '<object>', f93_s: '<number>', f94_u: '<null>', f95_z: '<boolean>', f96_g: '<array>', f97_a: '<object>', f98_b: '<object>', f99_c: '<object>', f100_n: '<number>', f101_q: '<number>', f102_g: '<boolean>', f103_j: '<number>', f104_p: '<boolean>', f105_v: '<string>', f106_a: '<string>', f107_d: '<null>', f108_p: '<null>', f109_r: '<null>', f110_z: '<boolean>', f111_d: '<boolean>', f112_n: '<number>', f113_n: '<object>', f114_b: '<array>'}, 'EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ');
    var add_1 = objectStore_1.add({f0_y: '<string>', f1_l: '<boolean>'}, 'FyNZcbXBjuloEDLRaZwSDfjzMwbnNzRBHW');
    var objectStore_3 = db.createObjectStore('objectStore_1254', {keypath: 'PTeAaAowrJqfJaOLveMSJrcNhRxrIabRcuAzFqAoSNyMmdiSCyzMsUfemfMZSFStATDlnzrqXAjLjFhFLnvuEATEyDMJobdXFBTqkEbmNahlvXwzQeUulxjaEXQYjCMcmcuozvqvNVYjSFHLzplbJEqPpgwJQSyLnHaUGqqrhRZUIOgJIkNyRyWarmsFWsZopNZYrpksfGDUoTLaiKogsscKwtJZwQcpTqIMXmagFvIEXWihnGCsPjEjfJQVMSaRjYniAhppYFnrkocBoIAkFFJZVQpkJZjBoPKcrIMGiUgDhPbQgyNnYJCkAHcRdRiIKUgxEgOtxjVoAPixEmHLODAzJTcRgiptIMUOffLdoFcMqWcUWebqXulIwpBcdeHoDmjFLdjiEQNCGetaaSLBkQjsQdcXUpaBNgmNjWgJhzYIGOFxSnhAqjDOEOxwibblqWtBeZRuBvZNxSqQfRgNrUBanDRweDuixQe', autoIncrement: true});
    var index_837 = objectStore_3.createIndex('index_837', 'test', {multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1885 = db.transaction(['objectStore_1254'], 'readonly', {durability:"strict"})
    var objectStore_1254 = txn_1885.objectStore('objectStore_1254');
    txn_1885.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1885.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1885.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1886 = db.transaction(['objectStore_1252'], 'readwrite', {durability:"relaxed"})
    var objectStore_1252 = txn_1886.objectStore('objectStore_1252');
    var getAll_0 = objectStore_1252.getAll();
    var clear_2 = objectStore_1252.clear();
    var count_1 = objectStore_1252.count();
    var put_4 = objectStore_1252.put({f0_o: '<null>', f1_x: '<object>', f2_g: '<number>', f3_e: '<string>', f4_r: '<null>', f5_a: '<array>', f6_o: '<object>', f7_k: '<null>', f8_g: '<number>'}, 'uRhkqvyITFxhUiOxlPLeFhcyURidvSLzjOnuTGOhPzzdXPePqrvDFciQsbeZZYWtiKInFcBincVXekyAUfGvSCcKUgWzLJNUJWRlOUmYPfBpKjKfFumOdgpSOAgIIqQQOkcbMAEUVinubHMjoQlbcONmvMoHLjkEhHjXTamMfcFoAkxFBUxbmSPFComhYOJSVujNiDrGYGMFDnLFIfoRTglXXAtynUqPjiaEIDDyyWkJEABOpYAFwZhlnlsEXDcxEILhZyAXlqYaaeaFTWGmAmZFjBWQTGTpbehkmRhLQGxrTNOixrvF');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('mcrOYccWRFagfxNNUKRmOClLNXJArggNYgKClBxWSFNGQitTiUhZtvnAYwxtuEjyKANWqGRWHnirjenOEbxKfGbZxlxvrEdGxLAkvwksKIcTxdtPNlqRJpdupJoReqVFJVndFrlLZVdvSnfCnJUuEChvYcGXxHehITUiyjtuBpogcwbfpildBMlhDLvcWHolmzSMHhIVdwVDeEnTEzYCtIMmADmqHeKwuQkjjwhEJJccYijOyYJALqHQRDIibOfGcJFlUsdAEpwtLkkpomgydciYDwylgjgfJeVImwMbWaBzdsGmDpuZZHisXnirpnSHNJfNtGyoejsBjEHWXzYHzDDBoIinOTlweiDIEitEmiuUXkfkLfKtIiAeWqSbmVfeKBBKTkZVBDocdiHRUznMEqnBfZVCLXrSaIxJcdFNYknaJmimsPMJrknlTADzjIZYduTLymvLqpnxfeCvRqqCYPDSMhUrGydIBlJUnvkjGDjZGoLHakxhungapNhYwKuPQNhpQUyUWviZHqDpmTGEhIFikmqKwWNSasJLXqtwiInUSjQGLjrsCfqPfhigNGbINMOpgOINDZMJYPZwpArKhgaFdiZPNIIzZRKDvFtfkbLNSceBMvPBKOSSXXDHAZvBCOPUrVsqNEMnivUVLnlCsDmoxRtULTOaymvBDzBjGyxjwQLirkzcTMigZvroWDdSpRLuqiMnonXExpcXvJIdywsTqJnfmXROJkZBjpqiEEStxMkegKPuIcdWVPfpREmlvMUGgvMwfTwgOKubfqrRwQclBgPDbavPLsxANsFMDgHtNuTNugxRVmgZrDDiTOoGtZVlBiFzAbplgdkpKLQZZZZtrpDDesDiGbXplnDIzXxxkkvCSDkQqHiUkyCQdEiQZr', false);
        get_0 = objectStore_1252.get(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('uRhkqvyITFxhUiOxlPLeFhcyURidvSLzjOnuTGOhPzzdXPePqrvDFciQsbeZZYWtiKInFcBincVXekyAUfGvSCcKUgWzLJNUJWRlOUmYPfBpKjKfFumOdgpSOAgIIqQQOkcbMAEUVinubHMjoQlbcONmvMoHLjkEhHjXTamMfcFoAkxFBUxbmSPFComhYOJSVujNiDrGYGMFDnLFIfoRTglXXAtynUqPjiaEIDDyyWkJEABOpYAFwZhlnlsEXDcxEILhZyAXlqYaaeaFTWGmAmZFjBWQTGTpbehkmRhLQGxrTNOixrvF', 'FyNZcbXBjuloEDLRaZwSDfjzMwbnNzRBHW', false, false);
        delete_0 = objectStore_1252.delete(KeyRange_4);
    }
    catch (e){
    }

    var clear_3 = objectStore_1252.clear();
    var add_2 = objectStore_1252.add({f0_x: '<object>', f1_l: '<string>', f2_q: '<number>', f3_a: '<boolean>', f4_b: '<null>', f5_v: '<string>', f6_m: '<array>', f7_f: '<number>'}, 'VZJZjayqIXkUjUtSjrljHwaOcGaDPGAqzjDmqpVmjfohQgFxLGeKntwLjECoQIbbgltDtpvEvJAKFtupXCyBPstBNXjJQrtwSDdTgWIsUFsZsnpItdJpPuwynfPAnQGPuaIUVNIRVnsUrDgACtQBxxGkIHQKxishoulCfWUqNWvghnDTaNlkzxhNzSXHyeMuJQoObEsPzkoYEfIpOSICRsmgoZWFTyTaBhUQTATRaTLfqivXdcFxoqfyMqccrkAzltvTZvUtPJMkVCOmZpAqlQEmbGNeWcmjbsWutdJUhQYZGwaUQVTrxtYZeuaMpeyejSupMaEjyPKTwojBoSXHBvzejQXqeOAekRtDzKbQzzINXcWXXTdQfsgWDCNzWKVIqleKsmfIlzIZBWefizajPMvMKEENuySdhvsBPNKBrINooElZkFFsgsqTDfaDqHephMnNGdwOohqbCNtynHIah');
    var clear_4 = objectStore_1252.clear();
    var put_5 = objectStore_1252.put({f0_r: '<null>', f1_e: '<null>', f2_w: '<null>', f3_w: '<array>', f4_m: '<string>', f5_h: '<string>', f6_p: '<object>', f7_v: '<boolean>', f8_m: '<boolean>'}, 'NqDCVzSzHESzmTZdNbKAZTrOFJIDbpVoqufyTiXsJDRUoEncTDrpFqayptWHADnSvpPIhiNaeyMftHuzlkQIMzOUFkNzvyQYCBnRsPyoWovDOOdoWJMtXCmRZSzzqjfhfyFePZZOucFWmnYySuOwinmhsi');
    var getAll_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('NqDCVzSzHESzmTZdNbKAZTrOFJIDbpVoqufyTiXsJDRUoEncTDrpFqayptWHADnSvpPIhiNaeyMftHuzlkQIMzOUFkNzvyQYCBnRsPyoWovDOOdoWJMtXCmRZSzzqjfhfyFePZZOucFWmnYySuOwinmhsi', 'NqDCVzSzHESzmTZdNbKAZTrOFJIDbpVoqufyTiXsJDRUoEncTDrpFqayptWHADnSvpPIhiNaeyMftHuzlkQIMzOUFkNzvyQYCBnRsPyoWovDOOdoWJMtXCmRZSzzqjfhfyFePZZOucFWmnYySuOwinmhsi', false, false);
        getAll_1 = objectStore_1252.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('FyNZcbXBjuloEDLRaZwSDfjzMwbnNzRBHW');
        getAll_1 = objectStore_1252.getAll(KeyRange_7);
    }

    var add_3 = objectStore_1252.add({f0_p: '<boolean>', f1_q: '<null>', f2_r: '<string>', f3_o: '<number>'}, 'qFixIJwGUvzdbADRhrRSTMhNvAAxhRsUUAZLacJBAYrhMLIHSZjUcYggQHVTuSOROHKsRHokaJddJUDkqOzhzRzKFGaxTDPMwAENsgZNzbUXMUfcbBEKSUklYWkYwJXwhfnJlmAQsbGVNHqYTznpKyxpGYCBLxlSqetZqvhUWcymioMVkBqQUdBddDPUFosukFDHuInCQHPmjKfHjABymYwxCleQSvnatVdYquWNAEGFnbOJPuyXwpvtJrFXNFITmbakPGoEPEdUezdPphOYEWZNJcwtNxbaQCArxxqfzmMPDaYFKeTiuNyQBsxbAKoJTnOQNFKnGGYDnXxwwrRzXwMvrBFbQEGFSuyLjprWtJAbcvxaRchGkzxicIkFsKJmFIyvHoHRIwPabjCjoHJcvqxkzfPAlijSsZRYwWYrjxqJkdxnZGFYILbtVkBdbGJrLJcGmoTVAiLCDAkfFTaPNiEjtqLoVpktrAkpdADejUAOqqCHAZtbXuLQExWNwJhUAqXfgSgJorkQjQXzKFQIcRZEoyttpwpPqQeGQpFjYJbCbWFOTOcPoetIEIMdLWMunbXCKhKzvhQYngcHQVqDdRbEpXJXEtPjKWJwYKlQFPvNrFWIqyCveKrzlUbJQNIAxngafvsnePGJVBBfreOLHkdllBQSEazTGmpcjCYRrMxBRRZGJbeKSXEoegycqRTLrLftmfmLUIMqgCOusHNwAWTiWvugHXJQEvbasuagZdFSZWDBpIfXwNMsSCKFBllkbDakKtCHTUKtYNjtEByOcEMbcOhXvjBEOYjCfvGuuudtjsebJZqMqIYvTSYwvcjnVynAZDyhEBYAMxlCXaprlXBdkrUKzePhIQDYVvAZDzOKqzzqRTdXuCRncLikDzOdFTpwnqkCacAWqgPhdJOwKwOnVCkaMxZUVSJhVuVNzMMkRJCFrJTzxVhnfLsngo');
    txn_1886.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1886.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1886.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1887 = db.transaction(['objectStore_1253', 'objectStore_1252'], 'readonly', {durability:"default"})
    var objectStore_1253 = txn_1887.objectStore('objectStore_1253');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ', 'EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ', false, false);
        get_1 = objectStore_1253.get(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ', 'EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ', false, true);
        get_2 = objectStore_1253.get(KeyRange_10);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_1253.getAllKeys(223257940);
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.only('EPxHMSyEFMUkbKTMxIpQsIHCbCTfyuwOBuNwXqJpYabBtRZEhkfLpQUERMwgzUEzuKTwTesjLQjtGjghWChBSeJtcUxMrLwobcjPeWxwXPyWFyqPeTqkJ');
        get_3 = objectStore_1253.get(KeyRange_12);
    }
    catch (e){
    }

    txn_1887.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1887.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1887.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1888 = db.transaction(['objectStore_1252'], 'readonly', {durability:"strict"})
    var objectStore_1252 = txn_1888.objectStore('objectStore_1252');
    var count_2 = objectStore_1252.count();
    var count_3 = objectStore_1252.count();
    var getAll_2 = objectStore_1252.getAll(4225559593);
    var count_4 = objectStore_1252.count();
    var getAll_3 = objectStore_1252.getAll();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('uRhkqvyITFxhUiOxlPLeFhcyURidvSLzjOnuTGOhPzzdXPePqrvDFciQsbeZZYWtiKInFcBincVXekyAUfGvSCcKUgWzLJNUJWRlOUmYPfBpKjKfFumOdgpSOAgIIqQQOkcbMAEUVinubHMjoQlbcONmvMoHLjkEhHjXTamMfcFoAkxFBUxbmSPFComhYOJSVujNiDrGYGMFDnLFIfoRTglXXAtynUqPjiaEIDDyyWkJEABOpYAFwZhlnlsEXDcxEILhZyAXlqYaaeaFTWGmAmZFjBWQTGTpbehkmRhLQGxrTNOixrvF', true);
        get_4 = objectStore_1252.get(KeyRange_14);
    }
    catch (e){
    }

    var count_5 = objectStore_1252.count();
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.only('uRhkqvyITFxhUiOxlPLeFhcyURidvSLzjOnuTGOhPzzdXPePqrvDFciQsbeZZYWtiKInFcBincVXekyAUfGvSCcKUgWzLJNUJWRlOUmYPfBpKjKfFumOdgpSOAgIIqQQOkcbMAEUVinubHMjoQlbcONmvMoHLjkEhHjXTamMfcFoAkxFBUxbmSPFComhYOJSVujNiDrGYGMFDnLFIfoRTglXXAtynUqPjiaEIDDyyWkJEABOpYAFwZhlnlsEXDcxEILhZyAXlqYaaeaFTWGmAmZFjBWQTGTpbehkmRhLQGxrTNOixrvF');
        get_5 = objectStore_1252.get(KeyRange_16);
    }
    catch (e){
    }

    txn_1888.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1888.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1888.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1889 = db.transaction(['objectStore_1254'], 'readonly', {durability:"relaxed"})
    var objectStore_1254 = txn_1889.objectStore('objectStore_1254');
    txn_1889.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1889.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1889.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3828')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};