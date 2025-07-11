let db;
const openRequest = window.indexedDB.open('str_1403', 2619966294657495)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5482', {keypath: 'mPsuQImNxKPswpBotgkQoRpBowjKNLsDeKYluhNThUeFcruKkpJARrOCxfKFTQGlSGVKmIVqgHeQgPlqmiIFfpgfnXjZuXJvYjmnuRRuJCHxxftgLrKIRXxKredXEFfDNoJtCzohgKlMPxXjVlIuEfZXaBSDLDsGQDaBToZbkDyMPDbPTNpYiVxchOEYmrECuegsYsTbPbgpFngxzXZAdUSXCnqLJbBTjazSuVpMrOQAGSpuYJatVwAIDriAsYqhiMJJReLTvgqTxdlZGtkKgJlasGxsdTuswsDrzJAvNnnOLLLLjnKdNuzMOGdmYUostyhMWOiUsvZGqkNoOLmbUeUktvZqScLIVEYGVxKJWtbzNsOkpMKOlFuUJYSIkPKcQJhzfufqBpKzvYUOwwUcuANaBmasWieSHIKUAhmRUPmlYxFtIFclVrQqOgbBxtqnBORKYSaDnheiPxjVUuAyZtIGNKqVWCMrKIVNqQbbViRVURxgOYqqoBHgpvRNxhqwNgEtzeTqglHRkrzmHBuPxFmLvFHGcnsEFmRbLnzzgSiZHmNTPsYAuIRAQCdccaIMXezaLNYLvyNxOXUpQFvhcjQvwqNFCyAMPQbdNYauSnBNgjhLPCjNpQHtkSmrDBnNgPQhDyhLLAPpnBBZNsdcnNqvSopMcGAYcCnxsXtygPfGDqepSPtxhczRbMeMXssRkZTPsoLHnqaBNRJSXsTDJyybwnKiXxECixALZDmCXRvyPWTwisdBpFVEUrSqELFgkZkKKEYfYObGUbKerbzAGshLOOgSeeadbpXmdFzeEYDiEykNmGVwHEPaBdKsPsiCOuHPaKTdVfkJMAHhpdnBYQeNnfQNQVcINFTvfxNgfHzZlCtDCiWzGFYTUywGpeFazPvcAPpmcWByKqVMARfhnTnmTIepcBOtetswExkmjHTpoGxJZDexjLCpOEqAhKIQnedOVclkWShMoZKNfkzTeyuvAtwzitwaoSngOHB', autoIncrement: true});
    var index_3675 = objectStore_0.createIndex('index_3675', 'test', {unique: false, multiEntry: true});
    var index_3676 = objectStore_0.createIndex('index_3676', 'test');
    var add_0 = objectStore_0.add({f0_y: '<string>', f1_l: '<number>', f2_y: '<number>', f3_n: '<string>', f4_v: '<null>', f5_o: '<object>', f6_c: '<null>'}, 'OabXOLMDowIBIueKelvqCYYZFJrCkvGhiXPRlTUCRBOxdliDEqEEyiZhMCsireVzumjswVLcPsAiryedspWOKVGSXHqMDYZFiDzuZcntJjXxDmvwtInzlAdldhKzNcpOraJwAXsIsRiEgUntwhBeUjfnxrrleusgdfRhQqEKmKhOIbTtnYqbpXAxOKFezyePtsQshNwXNapGYBiAQLycVqmADBMKaGAnYNZJXRfOtHkCUteSRPuMHJckTcfmftbeeeNHBLkQnDOtmqTnolZzqyeIGZVuNbYfccMPRqKSjSQdDpTSGpjDWZHbOeVRzVBxcuhAaiEzZHmCMTSOXEWvHcyBTtPEycVrbpbaIbKrifyjlnGTkZiMWKdzORYWilEgBVB');
    var objectStore_1 = db.createObjectStore('objectStore_5483', {keypath: 'yiJDPYtaCCmLfUTakhtCeXTQRpaNBshbXiIjIGjXYGafAJxVHdpoOOkxMGLmhTUZwCUATUXGEHSDkWFoWTbLZncZCKCldPpIxTOZqDxrzqIxkIFsEmfciRAVDsiaUVuldAiFdsDYHRHBoYOzHYLDFNwdlzyiwTjhInnVnxensolpyIZzslTQEQKcKzQxtRLpimadmvmowebotDyzGmXjQGjtsCeWAaYvCoRDycLPIzAhPbYjZwQtzfKMerkwxnkUXXjlEKnniYwHSgmFGZmiYfdsVHzJEYYdsXuzWALElIITPLqDLwLRHGBtTjXCqMVDMmPUmJudXaafsVdHibedifkxHPAcUaeXXnVhkQDhEgAiLbhnJZoEpsqFMZXJZaQhOtjJaoTaUQBvaSAcnvFaELduvnNbsfwHnbnpNYuZpuLeBamExSfIyw', autoIncrement: false});
    var put_0 = objectStore_1.put({f0_q: '<boolean>', f1_s: '<string>', f2_h: '<string>', f3_o: '<number>', f4_f: '<string>'}, 'mmtTlYHstZMhRjdALvGFDJvLiaTOviAteyjkHifQVSBuNHhTeXOtsmRMByeGjPOmfyFPUXvwvIxLBTBeVYIQScHnRZMYarxgCudVHOtMZyufTPgDjnSMqpOpMqVWZYGzFzZjaXuktTXIXJoQzSErPuccjmxhHXFsaWiMJftFoPKBLldqLqPNtzcdslGIGcdaYXHmWafqxyIDzJTMwRDBzmAMvNsLsIdLTPhGLkDfYotbQmXqNtVioubhimcPHwbdHlOnivTsDHDAUqvURSbTOfDUbfsWiFRCExkLDEzsEtlwNNPHHnjXCEzyTyKEJDqfetdPPkkyvOVoUPFDOBlajEDtPJeAtntqKqgNfXcpWsWjDNCUOmKhpAwZLWaquztkYjcvOqTdbDcFfNtrjzKYHWeJaiDkHFUDlqaQtQoToZqkMyoTVALzAAvmfzNOeyuhOrXpGVJMEGFllUbUsOtgTHQCGrsISjVWFBiPjLiFdGkglJYzZmbKWqlnGDhvrDfvJDpqQquxMzrqNjeDbmETZvIuynbipJPpJnaHjYfbTtcUqcjYboWZVRLaBKPCIrLTEjwOkYKPUUBuVYJVZovRABkbDZUOCRVsAumFBrrdHyNUtofwTPRpovggoi');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('mmtTlYHstZMhRjdALvGFDJvLiaTOviAteyjkHifQVSBuNHhTeXOtsmRMByeGjPOmfyFPUXvwvIxLBTBeVYIQScHnRZMYarxgCudVHOtMZyufTPgDjnSMqpOpMqVWZYGzFzZjaXuktTXIXJoQzSErPuccjmxhHXFsaWiMJftFoPKBLldqLqPNtzcdslGIGcdaYXHmWafqxyIDzJTMwRDBzmAMvNsLsIdLTPhGLkDfYotbQmXqNtVioubhimcPHwbdHlOnivTsDHDAUqvURSbTOfDUbfsWiFRCExkLDEzsEtlwNNPHHnjXCEzyTyKEJDqfetdPPkkyvOVoUPFDOBlajEDtPJeAtntqKqgNfXcpWsWjDNCUOmKhpAwZLWaquztkYjcvOqTdbDcFfNtrjzKYHWeJaiDkHFUDlqaQtQoToZqkMyoTVALzAAvmfzNOeyuhOrXpGVJMEGFllUbUsOtgTHQCGrsISjVWFBiPjLiFdGkglJYzZmbKWqlnGDhvrDfvJDpqQquxMzrqNjeDbmETZvIuynbipJPpJnaHjYfbTtcUqcjYboWZVRLaBKPCIrLTEjwOkYKPUUBuVYJVZovRABkbDZUOCRVsAumFBrrdHyNUtofwTPRpovggoi', false);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    objectStore_0.deleteIndex('index_3676')
    var clear_0 = objectStore_0.clear();
    var add_1 = objectStore_0.add({f0_z: '<number>', f1_e: '<string>', f2_h: '<number>', f3_d: '<boolean>', f4_k: '<boolean>', f5_s: '<string>', f6_c: '<object>', f7_x: '<object>', f8_a: '<object>', f9_x: '<array>'}, 'JaynwduwrcupRjbsHBCastqkroAzXCcWLTMmmijKVtcGHYdXiFUtVCHlIlUhuYtsJWwchxBybgEoSZOyUambXLtTKtOIEuVRbZiUEJGlaqrJfInfdsEPZGDoWKYrJumhhAKdVubmZFkPsxTlIykkGjkF');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('mmtTlYHstZMhRjdALvGFDJvLiaTOviAteyjkHifQVSBuNHhTeXOtsmRMByeGjPOmfyFPUXvwvIxLBTBeVYIQScHnRZMYarxgCudVHOtMZyufTPgDjnSMqpOpMqVWZYGzFzZjaXuktTXIXJoQzSErPuccjmxhHXFsaWiMJftFoPKBLldqLqPNtzcdslGIGcdaYXHmWafqxyIDzJTMwRDBzmAMvNsLsIdLTPhGLkDfYotbQmXqNtVioubhimcPHwbdHlOnivTsDHDAUqvURSbTOfDUbfsWiFRCExkLDEzsEtlwNNPHHnjXCEzyTyKEJDqfetdPPkkyvOVoUPFDOBlajEDtPJeAtntqKqgNfXcpWsWjDNCUOmKhpAwZLWaquztkYjcvOqTdbDcFfNtrjzKYHWeJaiDkHFUDlqaQtQoToZqkMyoTVALzAAvmfzNOeyuhOrXpGVJMEGFllUbUsOtgTHQCGrsISjVWFBiPjLiFdGkglJYzZmbKWqlnGDhvrDfvJDpqQquxMzrqNjeDbmETZvIuynbipJPpJnaHjYfbTtcUqcjYboWZVRLaBKPCIrLTEjwOkYKPUUBuVYJVZovRABkbDZUOCRVsAumFBrrdHyNUtofwTPRpovggoi', 'mmtTlYHstZMhRjdALvGFDJvLiaTOviAteyjkHifQVSBuNHhTeXOtsmRMByeGjPOmfyFPUXvwvIxLBTBeVYIQScHnRZMYarxgCudVHOtMZyufTPgDjnSMqpOpMqVWZYGzFzZjaXuktTXIXJoQzSErPuccjmxhHXFsaWiMJftFoPKBLldqLqPNtzcdslGIGcdaYXHmWafqxyIDzJTMwRDBzmAMvNsLsIdLTPhGLkDfYotbQmXqNtVioubhimcPHwbdHlOnivTsDHDAUqvURSbTOfDUbfsWiFRCExkLDEzsEtlwNNPHHnjXCEzyTyKEJDqfetdPPkkyvOVoUPFDOBlajEDtPJeAtntqKqgNfXcpWsWjDNCUOmKhpAwZLWaquztkYjcvOqTdbDcFfNtrjzKYHWeJaiDkHFUDlqaQtQoToZqkMyoTVALzAAvmfzNOeyuhOrXpGVJMEGFllUbUsOtgTHQCGrsISjVWFBiPjLiFdGkglJYzZmbKWqlnGDhvrDfvJDpqQquxMzrqNjeDbmETZvIuynbipJPpJnaHjYfbTtcUqcjYboWZVRLaBKPCIrLTEjwOkYKPUUBuVYJVZovRABkbDZUOCRVsAumFBrrdHyNUtofwTPRpovggoi', false, true);
        get_0 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('OabXOLMDowIBIueKelvqCYYZFJrCkvGhiXPRlTUCRBOxdliDEqEEyiZhMCsireVzumjswVLcPsAiryedspWOKVGSXHqMDYZFiDzuZcntJjXxDmvwtInzlAdldhKzNcpOraJwAXsIsRiEgUntwhBeUjfnxrrleusgdfRhQqEKmKhOIbTtnYqbpXAxOKFezyePtsQshNwXNapGYBiAQLycVqmADBMKaGAnYNZJXRfOtHkCUteSRPuMHJckTcfmftbeeeNHBLkQnDOtmqTnolZzqyeIGZVuNbYfccMPRqKSjSQdDpTSGpjDWZHbOeVRzVBxcuhAaiEzZHmCMTSOXEWvHcyBTtPEycVrbpbaIbKrifyjlnGTkZiMWKdzORYWilEgBVB');
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_o: '<string>', f1_c: '<number>', f2_i: '<null>', f3_y: '<null>'}, 'rFBZtGbylxXGXjrrBjiOKbJcwuaiddxLekrlnBLcCzKdBpHScBsAzGAwqjRLfLTYVXHdJTDwKnImBcxwZRflTQtwPSQRWDxxRGYeQvNilpJKfMdFSxFDaPwqfKNZoCxyrsWoofJYqNQnxQNLDVCAnLNEnsIsbwluNzsgypIrurAvXuWxfphOClzAHrRZUYDxYjNLulkCCxWtppBhQyyQSrhOfIzxDSXjxWDDgPbXtKnbHDKjLRPYZlhVUGQckPZgEeZgwempEqTpz');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.only('mmtTlYHstZMhRjdALvGFDJvLiaTOviAteyjkHifQVSBuNHhTeXOtsmRMByeGjPOmfyFPUXvwvIxLBTBeVYIQScHnRZMYarxgCudVHOtMZyufTPgDjnSMqpOpMqVWZYGzFzZjaXuktTXIXJoQzSErPuccjmxhHXFsaWiMJftFoPKBLldqLqPNtzcdslGIGcdaYXHmWafqxyIDzJTMwRDBzmAMvNsLsIdLTPhGLkDfYotbQmXqNtVioubhimcPHwbdHlOnivTsDHDAUqvURSbTOfDUbfsWiFRCExkLDEzsEtlwNNPHHnjXCEzyTyKEJDqfetdPPkkyvOVoUPFDOBlajEDtPJeAtntqKqgNfXcpWsWjDNCUOmKhpAwZLWaquztkYjcvOqTdbDcFfNtrjzKYHWeJaiDkHFUDlqaQtQoToZqkMyoTVALzAAvmfzNOeyuhOrXpGVJMEGFllUbUsOtgTHQCGrsISjVWFBiPjLiFdGkglJYzZmbKWqlnGDhvrDfvJDpqQquxMzrqNjeDbmETZvIuynbipJPpJnaHjYfbTtcUqcjYboWZVRLaBKPCIrLTEjwOkYKPUUBuVYJVZovRABkbDZUOCRVsAumFBrrdHyNUtofwTPRpovggoi');
        delete_0 = objectStore_1.delete(KeyRange_6);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_5483')
    var put_1 = objectStore_0.put({f0_n: '<string>', f1_p: '<string>', f2_b: '<array>', f3_t: '<object>', f4_k: '<null>', f5_y: '<boolean>', f6_m: '<string>', f7_z: '<number>'}, 'JduWwDsAtDopIaXasZjHPAiYfbOsNihJKjZXdbMoPUWWAnpZcXfYbdqanNMNoaqxAbIQLSNJryRlnDBLN');
    var objectStore_2 = db.createObjectStore('objectStore_5484', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8285 = db.transaction(['objectStore_5484'], 'readonly', {durability:"strict"})
    var objectStore_5484 = txn_8285.objectStore('objectStore_5484');
    txn_8285.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8285.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8285.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8286 = db.transaction(['objectStore_5482'], 'readwrite', {durability:"relaxed"})
    var objectStore_5482 = txn_8286.objectStore('objectStore_5482');
    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('JduWwDsAtDopIaXasZjHPAiYfbOsNihJKjZXdbMoPUWWAnpZcXfYbdqanNMNoaqxAbIQLSNJryRlnDBLN', 'JduWwDsAtDopIaXasZjHPAiYfbOsNihJKjZXdbMoPUWWAnpZcXfYbdqanNMNoaqxAbIQLSNJryRlnDBLN', false, true);
        getAll_0 = objectStore_5482.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('rFBZtGbylxXGXjrrBjiOKbJcwuaiddxLekrlnBLcCzKdBpHScBsAzGAwqjRLfLTYVXHdJTDwKnImBcxwZRflTQtwPSQRWDxxRGYeQvNilpJKfMdFSxFDaPwqfKNZoCxyrsWoofJYqNQnxQNLDVCAnLNEnsIsbwluNzsgypIrurAvXuWxfphOClzAHrRZUYDxYjNLulkCCxWtppBhQyyQSrhOfIzxDSXjxWDDgPbXtKnbHDKjLRPYZlhVUGQckPZgEeZgwempEqTpz');
        getAll_0 = objectStore_5482.getAll(KeyRange_9);
    }

    var clear_1 = objectStore_5482.clear();
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('JaynwduwrcupRjbsHBCastqkroAzXCcWLTMmmijKVtcGHYdXiFUtVCHlIlUhuYtsJWwchxBybgEoSZOyUambXLtTKtOIEuVRbZiUEJGlaqrJfInfdsEPZGDoWKYrJumhhAKdVubmZFkPsxTlIykkGjkF', 'rFBZtGbylxXGXjrrBjiOKbJcwuaiddxLekrlnBLcCzKdBpHScBsAzGAwqjRLfLTYVXHdJTDwKnImBcxwZRflTQtwPSQRWDxxRGYeQvNilpJKfMdFSxFDaPwqfKNZoCxyrsWoofJYqNQnxQNLDVCAnLNEnsIsbwluNzsgypIrurAvXuWxfphOClzAHrRZUYDxYjNLulkCCxWtppBhQyyQSrhOfIzxDSXjxWDDgPbXtKnbHDKjLRPYZlhVUGQckPZgEeZgwempEqTpz', false, true);
        count_1 = objectStore_5482.count(KeyRange_10);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('rFBZtGbylxXGXjrrBjiOKbJcwuaiddxLekrlnBLcCzKdBpHScBsAzGAwqjRLfLTYVXHdJTDwKnImBcxwZRflTQtwPSQRWDxxRGYeQvNilpJKfMdFSxFDaPwqfKNZoCxyrsWoofJYqNQnxQNLDVCAnLNEnsIsbwluNzsgypIrurAvXuWxfphOClzAHrRZUYDxYjNLulkCCxWtppBhQyyQSrhOfIzxDSXjxWDDgPbXtKnbHDKjLRPYZlhVUGQckPZgEeZgwempEqTpz', 'JaynwduwrcupRjbsHBCastqkroAzXCcWLTMmmijKVtcGHYdXiFUtVCHlIlUhuYtsJWwchxBybgEoSZOyUambXLtTKtOIEuVRbZiUEJGlaqrJfInfdsEPZGDoWKYrJumhhAKdVubmZFkPsxTlIykkGjkF', true, false);
        count_2 = objectStore_5482.count(KeyRange_12);
    }
    catch (e){
    }

    var put_2 = objectStore_5482.put({f0_f: '<boolean>', f1_l: '<object>', f2_j: '<null>', f3_d: '<number>'}, 'HEOVZVLGnZuMfuwJNqnLkfPTKprwiwdltHReGCErDBrJhOmAyywOQhFUDsHNmcCHOgLEXWSPJZyITQMfNAFIBhawSrfumgKufmNFAXQYSmZtcSnylWNZdiGkNrGCLNIFjMQSYGwSpQVqraVoNWUqnZUPBEwiBlkBidbxufxuFpIAQvVevWpfOuFedtVcBRrsaAjPSbcOsYJsGoOOzTTDtRRHivbIoVZihyHYnHyPMKjKpptujpxBdsqpAaHjASRFezBlatTXkSCnHiqFYnqIogkGkGGAGsxdmXXKOSOcfVsdAfyAvEHChEMGmgpMUkzouwrGWXbyghEBsrgnBbhSZJjvWmlJRlmIMjiwHQEIpyEFSotEpYKayJxOdbSmCyTebbeLvrojGsetCCOsyKknqZXSxnQzTJuHcLHdKYbVdUhdgUIYrIZOgeyMno');
    var add_3 = objectStore_5482.add({f0_d: '<null>', f1_o: '<null>', f2_p: '<boolean>', f3_l: '<number>', f4_r: '<string>', f5_a: '<number>', f6_e: '<array>', f7_a: '<array>', f8_l: '<number>', f9_j: '<string>', f10_p: '<number>', f11_a: '<string>', f12_z: '<object>', f13_n: '<string>', f14_v: '<number>', f15_k: '<boolean>', f16_d: '<object>', f17_b: '<string>', f18_s: '<null>', f19_p: '<array>', f20_p: '<array>', f21_h: '<object>', f22_b: '<array>', f23_k: '<array>', f24_s: '<number>', f25_h: '<string>', f26_x: '<string>', f27_o: '<null>', f28_o: '<string>', f29_b: '<object>', f30_c: '<array>', f31_a: '<number>', f32_f: '<object>', f33_r: '<object>', f34_m: '<array>', f35_p: '<number>', f36_y: '<number>', f37_f: '<string>', f38_m: '<null>', f39_n: '<array>', f40_u: '<number>', f41_j: '<array>', f42_k: '<array>', f43_l: '<string>', f44_e: '<number>', f45_v: '<number>', f46_y: '<array>', f47_p: '<null>', f48_g: '<string>', f49_v: '<null>', f50_j: '<null>', f51_q: '<number>', f52_g: '<string>', f53_r: '<array>', f54_r: '<string>', f55_u: '<null>', f56_n: '<null>', f57_d: '<array>', f58_k: '<string>', f59_v: '<number>', f60_a: '<string>', f61_x: '<object>', f62_q: '<number>', f63_a: '<array>', f64_c: '<null>', f65_l: '<array>', f66_h: '<array>', f67_a: '<boolean>', f68_s: '<array>', f69_k: '<boolean>', f70_v: '<boolean>', f71_j: '<number>', f72_p: '<object>', f73_v: '<number>', f74_k: '<null>', f75_k: '<boolean>', f76_c: '<object>', f77_s: '<number>', f78_p: '<string>', f79_q: '<object>', f80_h: '<boolean>', f81_q: '<string>', f82_m: '<number>', f83_c: '<object>', f84_a: '<object>', f85_w: '<null>', f86_y: '<object>', f87_t: '<string>', f88_n: '<string>', f89_h: '<string>', f90_t: '<null>', f91_g: '<string>', f92_g: '<boolean>', f93_y: '<array>'}, 'NQhpXfdFNiMSFsivZuEuQMJDwPLeamuTbseXtMUfImctsvQXmLNyWiMmltobvHojVyhVNwPRBLoRaCxdzQjstYUQGEyhtFTmjsdTOLJyEcOBqflBlJvQQdHXwxRuvqWMaqeLynwrxfTtwSJGKQgdywsqJYvXdKElkXsnkxmPrhscXfAjNShUXjQTIdkEYxDSgRqxnJdNFdIJFfNCJBEnqfWomkEDarMoPDUzcrraERHrrElBTWAaGRvuLqaxHwbWNWIHmGgVrCpMjrIWSewwUYCNiQVmQvGvKKFFkQgKlgfneiXQUIrovMkCokGTHUzyxdviVZXqpfwzmeFcDhzcwOsyDhQTZolwKeZtBRpDzUVGXpTenqoSXPlmYPNEccCtVvABGpfBkOiEhuuHNJDPMYqsNEcEmmrEXEzuAIVdNdoIWofcXsuKpDOcfnwiofjylCqRvDwjDqmFEfcifyYCMdmYvGbzlDkikxueAbcBkMgZqSbSZAEmsnDXsvdlYBYTNoMcydFUHEvseHsCEnPTItEXNqmNvlVUrouRDzltzLzqxvvfzPUBFmG');
    var delete_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('JduWwDsAtDopIaXasZjHPAiYfbOsNihJKjZXdbMoPUWWAnpZcXfYbdqanNMNoaqxAbIQLSNJryRlnDBLN', false);
        delete_1 = objectStore_5482.delete(KeyRange_14);
    }
    catch (e){
    }

    var add_4 = objectStore_5482.add({f0_o: '<null>', f1_s: '<string>', f2_i: '<number>', f3_u: '<number>'}, 'DuWpsNxvpLhjg');
    var add_5 = objectStore_5482.add({f0_j: '<array>', f1_z: '<boolean>', f2_s: '<boolean>', f3_s: '<number>', f4_t: '<string>', f5_s: '<number>'}, 'RpAQMIeVNiGNmkSKbmxQuietyeQFveLxNpNddCEXdIuyyAlbYCnbAQIvkceQrbpAghGTORUhYrkIgYhITGyPvAUYBxYCnntkiSzbRIXlCjVXMAwdtlXdOYWvdTyMekkPVMcxzCnGDKmHGVlruKsixHibSBTRwVqXuZwHbInfYxxWVEetRmSiVIbWAjyZHiEcJxlxwQjLQKMzeDBZYNIyGUXHeLaRgGdpcZzBPZhnBIPNaANDCafQvsZrFvlZNINQMqoiatjwvPQwzFPyeERNyjhWGFardTlgXuVkdfEqRRWHopDowGQXSJwRKnuLZrrxrUEFImnMDjqvUBDjtBfetauERnBjnAJbyGmlKaYdvbPsheLTbtBXwYNniYKaBjgmVSyplKxdktMKAnvltBqDJZEjNRnVPTCpAVrMeVvitsIKMWruyVQzqLjhWpMuzIGlYqgIbEMHNOKMWqqRGxQndTMnvUsVglGMJUQQIhaGeDnmppogHCxhSIoWoKXThAdRdIPjLrknFHryTjRUPTvYHBBuWylaZHbmtmHvcnqbQYolAp');
    var put_3 = objectStore_5482.put({f0_a: '<null>', f1_w: '<boolean>', f2_e: '<string>', f3_e: '<boolean>', f4_e: '<null>', f5_g: '<null>', f6_i: '<array>', f7_z: '<number>', f8_n: '<object>', f9_x: '<object>'}, 'DCChqQqRBmItrVwaBqHQhqHHmLpAfaziYROPKxxsDIfZiDQRZUZxcQpnNXyAveCCWBfnPKcRtMGaNactjnRogtvVIjTQFaAPOKrCnwvjOhOVKOWGYWyUzTLVbXgVZNgsCRzJKhaNUsOqrYlszBZn');
    var delete_2;
    try{
        KeyRange_16 = IDBKeyRange.only('JaynwduwrcupRjbsHBCastqkroAzXCcWLTMmmijKVtcGHYdXiFUtVCHlIlUhuYtsJWwchxBybgEoSZOyUambXLtTKtOIEuVRbZiUEJGlaqrJfInfdsEPZGDoWKYrJumhhAKdVubmZFkPsxTlIykkGjkF');
        delete_2 = objectStore_5482.delete(KeyRange_16);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('NQhpXfdFNiMSFsivZuEuQMJDwPLeamuTbseXtMUfImctsvQXmLNyWiMmltobvHojVyhVNwPRBLoRaCxdzQjstYUQGEyhtFTmjsdTOLJyEcOBqflBlJvQQdHXwxRuvqWMaqeLynwrxfTtwSJGKQgdywsqJYvXdKElkXsnkxmPrhscXfAjNShUXjQTIdkEYxDSgRqxnJdNFdIJFfNCJBEnqfWomkEDarMoPDUzcrraERHrrElBTWAaGRvuLqaxHwbWNWIHmGgVrCpMjrIWSewwUYCNiQVmQvGvKKFFkQgKlgfneiXQUIrovMkCokGTHUzyxdviVZXqpfwzmeFcDhzcwOsyDhQTZolwKeZtBRpDzUVGXpTenqoSXPlmYPNEccCtVvABGpfBkOiEhuuHNJDPMYqsNEcEmmrEXEzuAIVdNdoIWofcXsuKpDOcfnwiofjylCqRvDwjDqmFEfcifyYCMdmYvGbzlDkikxueAbcBkMgZqSbSZAEmsnDXsvdlYBYTNoMcydFUHEvseHsCEnPTItEXNqmNvlVUrouRDzltzLzqxvvfzPUBFmG', false);
        delete_3 = objectStore_5482.delete(KeyRange_18);
    }
    catch (e){
    }

    txn_8286.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8286.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8286.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8287 = db.transaction(['objectStore_5484'], 'readonly', {durability:"relaxed"})
    var objectStore_5484 = txn_8287.objectStore('objectStore_5484');
    txn_8287.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8287.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8287.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8288 = db.transaction(['objectStore_5484'], 'readonly', {durability:"strict"})
    var objectStore_5484 = txn_8288.objectStore('objectStore_5484');
    txn_8288.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8288.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8288.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8289 = db.transaction(['objectStore_5484'], 'readonly', {durability:"strict"})
    var objectStore_5484 = txn_8289.objectStore('objectStore_5484');
    txn_8289.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8289.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8289.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2226')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};