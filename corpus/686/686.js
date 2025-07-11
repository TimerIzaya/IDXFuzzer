let db;
const openRequest = window.indexedDB.open('str_2351', 6561926635159041)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4132', {keypath: 'yVcnUGBTKIFyyzxVnIdZpTcGPOzXwDukvNFlndcrIywfsnpEsxLPcExmJGuZpBZlGBpMsLKwWjizPfilSyFGDKFwrJtcxONExdvslizxAPpLSqeMkVQysuvYqqtLfunlbyVxJzlPLXSFtqVrWASeDmmAFgcQFEDQMmgRDtVkjTzdgeWKKZzwFtqJgQvCqvYGBWpCBkAnIaIVxtecFWACERsudRknjRIVQOYRrCaHAPWLzXGGorFooOgiWVQuquwbTQBqYzLJYzfcSyPJTPsRMmSScRljyPkewescKRdrGtfQynyzTVJgEZjxvxzzjDbZmevmmjBOSyfuTeUTiMfUDBlKubqqZzVYvGhxzSCFVVectifvMxjKuIFazrWpiTSQLApVgXNmxIvYWECWnXIAjEBpYEPeUrgrlnFPuianJvpkwpRvJFsEVaDKSRytxfVJIyySdwACGUboszMQHtFrWtUdOsiKrEJslxX'});
    var objectStore_1 = db.createObjectStore('objectStore_4133', {keypath: 'LrYpOpaAbBnksIARLyjcQNVvfIfQBidJYpkfEsLdKKBoYFgKmhHVntSCsqfKJWabWSVIXcjZyoXyYtEiuufQnGCpvrdmbAQnHyvibcjRBxSAwzqKCUibOGyKdPJuHjGyWjNrynpFmulZJaLyKeNVRhUhZuMtFVaCLKznCiVfDNYRgWANWAjCOMdzkTXNxnnjluRBHlmKyHgPPekpKJdQJzTJbasyoAVlgQejeEUCvBLxtktyDgtKYZYYvUwAzFBEthzLqfgbqAbBshjIrhFJMZvWnpeanhRpsesTOzdksgGrTjKUAZtYoBQBYLlhPmwoZPeQfpzJKfxRutJpTOtZCdBCPKxOxADKGPJONdpTzFvRwQWpDlhsdQBODUYAmLygpZwilEPSGGVkpfxxymevUfiPKDWlhkzCtbdUcRzxLYXxCfEhnVWCvFoqSUqrukkhrnYSUcqDQROdgAFloZHMXKxJqLKDKtSmFHiZbabkLImPWjmxSYLNCzQBihOlvntGmjEBobyKytTYHlhKWznSSxBicYeDwIIFDPwlLmcxdCUtBeahiDcRATDkWeduLHSduYfoJGPXYSoctGrpkPCXWHMWEImsCybHpgePcwaxRzyDLoIYApbUeRgibOimCodovhOJRTxRZyXndtgIGXEhnsPqWSEWKPGIuEPCLRULVddkYZmThhDPLLPvBPnHPLfkuUmPtPtaBHsDxvAONXfPbZaIOhTNQXhnxvNzVlrjEwJuGHWBHuqUBstfOXizjKHJDXrHOhXyzDjQZksmsgtIajWonTxuUAESRNVaFDqvtZhhiulUUPOnbUVmInVrEWBNHMblxnjWystZPhGffvEbxjBjczpDsClWtvELxdTMMTsCFhsWnJqubEEiWejRFCBToSPDcBLFCDMYQFncUPkiKBQEoJnuyzOzSQUrBlmKojCnADSKhONbGIdfpSGwJuTaczgnfDrnlhiVpzwShKiQj'});
    var put_0 = objectStore_0.put({f0_t: '<string>', f1_z: '<number>', f2_j: '<object>', f3_s: '<boolean>', f4_v: '<null>', f5_n: '<array>', f6_w: '<boolean>', f7_y: '<object>', f8_u: '<null>', f9_b: '<number>', f10_j: '<array>', f11_g: '<object>', f12_g: '<boolean>', f13_v: '<number>', f14_n: '<string>', f15_l: '<number>', f16_w: '<null>', f17_c: '<boolean>', f18_o: '<null>', f19_h: '<object>', f20_x: '<number>', f21_x: '<number>', f22_q: '<boolean>', f23_l: '<object>', f24_f: '<array>', f25_r: '<array>', f26_b: '<string>', f27_t: '<object>', f28_g: '<null>', f29_f: '<string>', f30_a: '<boolean>', f31_i: '<array>', f32_z: '<string>', f33_f: '<number>', f34_m: '<null>', f35_k: '<boolean>', f36_m: '<number>', f37_f: '<null>', f38_b: '<boolean>', f39_f: '<number>', f40_s: '<string>', f41_a: '<array>', f42_f: '<array>', f43_j: '<array>', f44_g: '<null>', f45_m: '<string>', f46_p: '<array>', f47_k: '<number>', f48_i: '<array>', f49_i: '<array>', f50_s: '<object>', f51_g: '<string>', f52_s: '<object>', f53_x: '<number>', f54_y: '<null>', f55_b: '<boolean>', f56_n: '<null>', f57_z: '<object>', f58_t: '<boolean>', f59_u: '<boolean>', f60_g: '<object>', f61_x: '<null>', f62_t: '<number>'}, 'naynGrKexzDlkTrWCbiirJgsVjOUoKOwmHqymxKYjLIrbJMBgjrxHbNXxtIGDUORdqMTbFgcgZmUUgzUmkXEuniWTeUUcDAtAdYNVvKJpQAHXAiRcrimjjKKDRapLabGPvmjKxNWoctXArZyLBpuauhsCJYDcKJNuMRAbsNiLZCQEmWNYGryrhhWIIowKzmvhQDdxHJnNKSIlupWAazTLfTmbKxkaAxdNvlkghdzYBCQWnkGaOZnfrBtxPGaWmEjqispotBaZexTefSTNSKmpZUNOLNHBdOTclvHlMeeqcCbXLvDbMbWSABUNdXhEXIFVhPeRaPIKdMUxiTvlJBLprZThBFcpoSLvwTnTUJpVWtBXXYqBLMfnSeKwVFsSUhjFiAPTIPUvfAp');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('naynGrKexzDlkTrWCbiirJgsVjOUoKOwmHqymxKYjLIrbJMBgjrxHbNXxtIGDUORdqMTbFgcgZmUUgzUmkXEuniWTeUUcDAtAdYNVvKJpQAHXAiRcrimjjKKDRapLabGPvmjKxNWoctXArZyLBpuauhsCJYDcKJNuMRAbsNiLZCQEmWNYGryrhhWIIowKzmvhQDdxHJnNKSIlupWAazTLfTmbKxkaAxdNvlkghdzYBCQWnkGaOZnfrBtxPGaWmEjqispotBaZexTefSTNSKmpZUNOLNHBdOTclvHlMeeqcCbXLvDbMbWSABUNdXhEXIFVhPeRaPIKdMUxiTvlJBLprZThBFcpoSLvwTnTUJpVWtBXXYqBLMfnSeKwVFsSUhjFiAPTIPUvfAp', 'naynGrKexzDlkTrWCbiirJgsVjOUoKOwmHqymxKYjLIrbJMBgjrxHbNXxtIGDUORdqMTbFgcgZmUUgzUmkXEuniWTeUUcDAtAdYNVvKJpQAHXAiRcrimjjKKDRapLabGPvmjKxNWoctXArZyLBpuauhsCJYDcKJNuMRAbsNiLZCQEmWNYGryrhhWIIowKzmvhQDdxHJnNKSIlupWAazTLfTmbKxkaAxdNvlkghdzYBCQWnkGaOZnfrBtxPGaWmEjqispotBaZexTefSTNSKmpZUNOLNHBdOTclvHlMeeqcCbXLvDbMbWSABUNdXhEXIFVhPeRaPIKdMUxiTvlJBLprZThBFcpoSLvwTnTUJpVWtBXXYqBLMfnSeKwVFsSUhjFiAPTIPUvfAp', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('naynGrKexzDlkTrWCbiirJgsVjOUoKOwmHqymxKYjLIrbJMBgjrxHbNXxtIGDUORdqMTbFgcgZmUUgzUmkXEuniWTeUUcDAtAdYNVvKJpQAHXAiRcrimjjKKDRapLabGPvmjKxNWoctXArZyLBpuauhsCJYDcKJNuMRAbsNiLZCQEmWNYGryrhhWIIowKzmvhQDdxHJnNKSIlupWAazTLfTmbKxkaAxdNvlkghdzYBCQWnkGaOZnfrBtxPGaWmEjqispotBaZexTefSTNSKmpZUNOLNHBdOTclvHlMeeqcCbXLvDbMbWSABUNdXhEXIFVhPeRaPIKdMUxiTvlJBLprZThBFcpoSLvwTnTUJpVWtBXXYqBLMfnSeKwVFsSUhjFiAPTIPUvfAp');
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_4134', {keypath: 'WGvrYLnxUY'});
    var objectStore_3 = db.createObjectStore('objectStore_4135', {keypath: 'GzzyoQNdgdRqbdsfSNIEITdcWlzYEAArrdnLdQzhlyXtWcjhEjCNSMOkWEMYIEqIDdAcIowVvrlmosVsnreNkuDVeuegGRsZIgyzAnqqObEnFBHvEpgTNIAtpRnLNHvEnxMbyKLPitTXm', autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_4136', {autoIncrement: false});
    var clear_0 = objectStore_3.clear();
    var objectStore_5 = db.createObjectStore('objectStore_4137', {keypath: 'pmmELTqMI'});
    var index_2786 = objectStore_1.createIndex('index_2786', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6195 = db.transaction(['objectStore_4132', 'objectStore_4135', 'objectStore_4134'], 'readwrite', {durability:"strict"})
    var objectStore_4134 = txn_6195.objectStore('objectStore_4134');
    var clear_1 = objectStore_4134.clear();
    var clear_2 = objectStore_4134.clear();
    var clear_3 = objectStore_4134.clear();
    var clear_4 = objectStore_4134.clear();
    txn_6195.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6195.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6195.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6196 = db.transaction(['objectStore_4137'], 'readonly', {durability:"relaxed"})
    var objectStore_4137 = txn_6196.objectStore('objectStore_4137');
    txn_6196.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6196.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6196.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6197 = db.transaction(['objectStore_4137'], 'readonly', {durability:"strict"})
    var objectStore_4137 = txn_6197.objectStore('objectStore_4137');
    txn_6197.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6197.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6197.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6198 = db.transaction(['objectStore_4135'], 'readonly', {durability:"strict"})
    var objectStore_4135 = txn_6198.objectStore('objectStore_4135');
    txn_6198.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6198.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6198.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6199 = db.transaction(['objectStore_4135', 'objectStore_4137'], 'readwrite', {durability:"relaxed"})
    var objectStore_4137 = txn_6199.objectStore('objectStore_4137');
    var clear_5 = objectStore_4137.clear();
    var put_1 = objectStore_4137.put({f0_j: '<string>', f1_u: '<null>', f2_y: '<array>', f3_c: '<boolean>', f4_o: '<array>', f5_j: '<string>', f6_r: '<string>', f7_r: '<boolean>'}, 'XPVMfnniunNXErqnaxJDuaXcAfmNpWsdNvDmPBOXTTINojoiSYyLRFqcULSfVYpqZIqtqVQxRgUqiaYLCwTcbJDqDJjbouWUbrhyXoGqRbloHrCTpFmqwxlkFPauSsvVtFLUCnKmRsUlhVqkcVDNBLrwoqrERikyHxVLBnqrUGRjasFdULQmbegNPGgVAPTkWckLwvKEwGDFGAmorcCIhZTiUAhRyTHOyFQhSQPwNufbjkJWzJhRuGU');
    var put_2 = objectStore_4137.put({f0_q: '<object>', f1_r: '<boolean>', f2_d: '<null>', f3_x: '<number>', f4_r: '<number>', f5_m: '<string>'}, 'BnEHjhgcifQvXwVeuvnRVTMBffEzGRLhHEmMXdyrqhIgeuJcybwAXOEmiORjZGTxgbsyHPzDEXvgTKkyLGGjdhGlbXqnJSDvQfaOwFdLvzIwosHJuooTugiPuDrjdZWeqBwYKVjhtxCImRwRrRIDvfySKEounSxJLCnaPXqUdilYqepXprZxUuRCoiBDpcyLvbiUPhLFVPuTxhoPeolsdPeozsysaKWnwypMLIAMVbkEEEUTNPGnIZvlauoTJJThblArwvgUscFaUtCwiepkxqiKQuXompqLvfGOEXugErpoLexBQujNYrubfxEytLIdtTMAAFjBedwjnvOPXXptfFqpfhoUlxIWQYGfSFhbvCTZgiSZIXDQadODNqlbMApT');
    var add_0 = objectStore_4137.add({f0_n: '<array>', f1_s: '<object>', f2_a: '<string>', f3_v: '<array>', f4_z: '<object>', f5_o: '<number>', f6_d: '<null>'}, 'FCSypFjqLbKncbRKdIeTYSmtPhJaZbbnWwNmGUNBYhCKlndNOSfaMrdmTPFgDPDzOxowCQrIpHmgAWvosPQLCpCSyHOUnQXfAJvyaijcYvyBbUMgQvxEgAaEnWUjtYvEsOGhmWBDEjmWlelSoktCrbxxVwmwARTNKejjWGzwHjhQpdAxnVdnyBFapRhHJEVgrVLphVeCNDfJFSPTECAzkyYnHkQKIWMRzWDOoyMjpRdK');
    var delete_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('XPVMfnniunNXErqnaxJDuaXcAfmNpWsdNvDmPBOXTTINojoiSYyLRFqcULSfVYpqZIqtqVQxRgUqiaYLCwTcbJDqDJjbouWUbrhyXoGqRbloHrCTpFmqwxlkFPauSsvVtFLUCnKmRsUlhVqkcVDNBLrwoqrERikyHxVLBnqrUGRjasFdULQmbegNPGgVAPTkWckLwvKEwGDFGAmorcCIhZTiUAhRyTHOyFQhSQPwNufbjkJWzJhRuGU', 'XPVMfnniunNXErqnaxJDuaXcAfmNpWsdNvDmPBOXTTINojoiSYyLRFqcULSfVYpqZIqtqVQxRgUqiaYLCwTcbJDqDJjbouWUbrhyXoGqRbloHrCTpFmqwxlkFPauSsvVtFLUCnKmRsUlhVqkcVDNBLrwoqrERikyHxVLBnqrUGRjasFdULQmbegNPGgVAPTkWckLwvKEwGDFGAmorcCIhZTiUAhRyTHOyFQhSQPwNufbjkJWzJhRuGU', true, true);
        delete_1 = objectStore_4137.delete(KeyRange_4);
    }
    catch (e){
    }

    txn_6199.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6199.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6199.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4514')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};