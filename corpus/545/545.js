let db;
const openRequest = window.indexedDB.open('str_7698', 7246821984617561)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3209', {keypath: 'JwftxqtcXqFzIsaWbCwnqFABdzEpxoeBSwxZesHvHEVpecDayyeMZgaCwIHbCKfxHrVhkIKrtgKIuwxutZIRbbIyZqkeESjVxVoPtfclWhDmDcuCneXxLPKhBNiecEpJgVfpOJZlzjcwmEKeMmgHlatJhxdxZiSWvgiBUKMZOPAEuqFOzBQKsyTWjWAiBkMpcEApTWgndzmvXTwwwOCcDYsVnPepLefWrwTmBVcmCjbzRDHVrfePKwxGfHHSBAgKwtmDSWVLhIWTtUpxNnFNunUYQSyIorhbMlxTSfoFbYjPvmlOAozfWgBEGrTKMVRatASvvSyHNiDDMQuOSSuEerrNbrdVtMYshCxDfpIJT.PJxTEFbygBcLWqRvFcvqGgpKXzRSwOGQFGYMUBdVQQdSOyPpUPKcbwatMqAkoOQnsWXyOAlAvoDwqabJseUzFBqPvudvugGmRibICwwOhQGZkChqupKNJFbZgIaOogrhejeUUMdzxEBZgVrHHTMCQJqlpQ.ObyigtHQRTzpaXeuGHDKGzssAEdEtsvgmJkejTmweuMGUtMDwlNtiefkwTwqKYrUoBqNzqQxJbYwFRHnlIcKiFZpirwKxHpbQkcyGfoDIkOpZSYvtOAybKSTSgOoutWTPPlhKgXMYxkueTMGwOZdALtQRYlCUeDcDlIsaqUqBoEOaUVfiSGgamwclzHABBrmzwIWPykaKnFSUxnvgOvwsekfZGoXMbvkreVuXmVkYMMpJGKhzlsBTM.voLEFWMOcGzjEuWOoGjBpoNzHypBsGMbfNNjkPIhzdQZlTPWoRkONZRzbWxCewDvnBkJqYKeqGyvBkLTSoQgAfmGgzacVNqXoNdqPsSwnzJpejQpzsOyvtyUtnxFwnBLIkBPouDCTJTfzDSRHuUrItEdMFFaYJPzGRqODsSFXoaLOfPOVxBVMBrBAoVWGqDAoEdWLJQAcQBQmISlyIAAXUetZAaxmUJafsQSHicTTvcCfdCSgMRItpHyBgkgxKKXPVgzHWAsOnINwfvZRYXZOxVcXMUZOzIuNqcIUiqQJympMgTcDZOGrozzKWUzCVnrEUwEDAHawakGUpiqhbyHFlcexTUlmNDiPgNOesJUBbagiYKXKrezvaDOitZGJUIvtFfljtUrQmFeRKvBNhQHVtDvAXxonhpDQxeZlLRVFxHnCtrTKwaKJsSgRAhfBbwCzYVDPbycUXhLSmOFdvkCSKTFjNPgDfgyAynvQTzTGUizePEifKzdhJgCsQAeYUrReWWQsJcgQgdGygpCgsademTGbKLmqPFvghyKdFlgETkPsZBIfjoLBHKvPmFSbwXvvbTBZGRJoLkywzWYugwoleesEPxWEVjJJHVksrqWwhCdIhKvFzFNTfFzKjPNPaVzEhgrLQBEeilJQQXeFCOkJlAvQamQgunjbPJPnJaVYmZgOolfcPDPMbCyENzmrtSNbDYqkgJwDSzPPnydVNDWsiNXWmpCTBqUiPPvMJiNsQsDnOyueEtXrhwqbAhSuOBeaGwVcdhpAflDndQPODFEcCNbDmZsGuZmEFkSydTrMRXAuEqwtMZBACfNOIibrRNAOOLNnjrMHtLITQftnCLbgEHyVOAjOirYaNpLFfWPQJFQbVsrgYYoBDrpoWfkvNgRsZmOdIMjzZaXfiQXMUVbxhDCHTEzguRejaRFfdHCIzzpIFvQclUvGCkActbtKHkMGjnTveVmZEVfjaNTWOzcnNteIKsGOpETfR.BpvHxDdSsLZYIhZFnvTxhnDRkOlrBqoYXWNFRUMwrbMGetERhfdXuwBwclYTVZsqvQrinEspXRqwjklKYHCNFaHScFkBesoGmxXPUmuHxDFspqfvguYaZtaEVJlrUpKBHavWcEvOgfrPlvprNtcOeAPgiEJmwhsKZkbfabhmuwspVYoBsYEgnLsbWMfpYjI.EGRrZUmYxJibXmsjdXPBLtmYbICaCRpBoBzWnmFCuTYuvbaOxRMmJvVFUOgazeMOIMgCkRigNQBwPtEUDmCcqZKixzHUSUyhqioihLYXLpyqDCoHYcnuRZKvxLDdAWOVtfUUBsMiBApEFtkaWGSkqIECwhPpxzcAStowXrrpdDtngfHwhotQcvpfvEtrOxLUzvzCyHPybEGBYzyxmYFchhdLTbzOuGQKVjNsbJXcgUOTwnFqbuTZTrooYauMpecwkCxszGddIXuuoAqBjiEXwqVUPDapRqxgNCVPLGhSnXuspuztcLCOHnxfBtHSkTOaUOOCmzSpGMFvoCMdrAGkzSXTkpupTlCWddaelEphUxewJwULEvBcpTgoJllOeieIRvOnmerlgsGUEpSnbzhfaiDWpapFOCKoIstmhoDNDGCYFSZargLIuCmgXHA.AxHTOarGHpCyEqcaWmaMnbFLKnLMVtxnNlmgpAUhvpuZDEqhzjRKojNjoElFirxYIVcaWfPecAKtpPhEzhBBgvjiceqnTpYIYZgfKjGXBTNyraTwliUbIO', autoIncrement: false});
    var add_0 = objectStore_0.add({f0_r: '<object>', f1_q: '<array>', f2_o: '<null>', f3_u: '<boolean>'}, 'KnFGLGNfCTxTPbHqxNlbNYljUcwQbuxfjHcFIzyRzeoGcjNBBSYBPPohDBrHOptbetHCmsRABmHeSTDUxzMrjYwnBNdFuHbEFfwzVWpZtCpaJVHHdoHxCbPDfEkmjGfOveDJlZXjcvZWgLtothkiuaYuUoviQjzCQAruhsnRfblDgbcbofiBwsjAAbxxHDHfqWQLsQlyYqoVsitMiPqVwjIhHHXVCGuhJhLcyUKVOYxdDNqyZUCYMEYgsecILNpvXZvPoRYvhvIGPhbRnQfGVAFKyBkDkLuTddjRoxripNEBHbRCjcEThemZVQTIBkJlpWsQGCLKkExwTMJERYkRemmNsFGXGqESPiAxAllKVhatVhEmvZzZfcGkzJHZHKApLJOKdQKeFrEcBYesXamJmGODRSSDZxyPnrNcQckfKtCiFAgePKcHwHJPnqxFvNQLVpelFeOfhuVDBYYOMgEieUcNuTABOGNxRBHMKwPoGzaKtDeXNKWyPQIQaVDiNjqKloEgnGWHKXxNsoLCaqkebQPBOrMhUFUtnMWYEaRexbUFfYFAYsSPxVsFPWGneILuweTEERtapnWGBuMCRjJIQgFfAviKZtEFHHoRmGAAZXjrknUmVwQqMPxhUgBAsNqVMXogUflWPvKlFpAUdhZJSyqqJhEEwMNXeGuXDDWLaGAbiYdbfdXYhqqWYerfYluJfASWpXzZHkqzpwreiclPEqvTHAzXjduOwAtotTxxUtAmhQSverJkIiWGrJKmTGq');
    var add_1 = objectStore_0.add({f0_g: '<boolean>', f1_o: '<boolean>', f2_v: '<number>', f3_n: '<array>', f4_l: '<boolean>'}, 'ljDZGkYPBSisXFokUUPazsyYOyvbHfgSpxGyDzTDqWYxAwvUEhzOfaUiiVaNrxnhowHNpchpfkOQCrvjkxxrlpszieEXOtGppWcuwBrYzxMZhBYAIHkwnEZkrQfSlnZpOOELgellqXmzjOmweGAlNgMLrFRMMbbnWpVZbnJtNtBDcAqScFOfQNZIVNObDQCpqhhptGslNFCUZJTVVEAQtShfgISwXOWbcADuyVuDWiCqcplQfsEFvDnHleLUyCcRFerFmrOeluEIQuIfbMoBdNpoyHMjcFXmfSmYwhpRxaLzJyvzZAQUTlrxlORqSykOYNESBcPhzLPtQYLpOdnBBrxWyegXNTBiiXGldwliyKfrsXKxzhRZbGgKLzUKBnPEFWTcZUtvRpoWqngBtyAJhBIgMZtKBWUcNrXENhMMNwaPj');
    var add_2 = objectStore_0.add({f0_e: '<boolean>', f1_p: '<number>', f2_h: '<null>', f3_r: '<string>', f4_k: '<number>'}, 'cvxOuHqZXkxQKVDwvXdIQiovUKgndpbQEqxSvlmoCzLCYDLMuEgfiUEdfDdOuclJSgIWstVnVPYpLTTvHdHfMPaYAlPYixfGcnAylXVRSKCczxOOJcTYuMpBLDQMfQiwFQQLqanqqYUouitiPLsIEdvwysaoqXJTbTEnqSLPi');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('KnFGLGNfCTxTPbHqxNlbNYljUcwQbuxfjHcFIzyRzeoGcjNBBSYBPPohDBrHOptbetHCmsRABmHeSTDUxzMrjYwnBNdFuHbEFfwzVWpZtCpaJVHHdoHxCbPDfEkmjGfOveDJlZXjcvZWgLtothkiuaYuUoviQjzCQAruhsnRfblDgbcbofiBwsjAAbxxHDHfqWQLsQlyYqoVsitMiPqVwjIhHHXVCGuhJhLcyUKVOYxdDNqyZUCYMEYgsecILNpvXZvPoRYvhvIGPhbRnQfGVAFKyBkDkLuTddjRoxripNEBHbRCjcEThemZVQTIBkJlpWsQGCLKkExwTMJERYkRemmNsFGXGqESPiAxAllKVhatVhEmvZzZfcGkzJHZHKApLJOKdQKeFrEcBYesXamJmGODRSSDZxyPnrNcQckfKtCiFAgePKcHwHJPnqxFvNQLVpelFeOfhuVDBYYOMgEieUcNuTABOGNxRBHMKwPoGzaKtDeXNKWyPQIQaVDiNjqKloEgnGWHKXxNsoLCaqkebQPBOrMhUFUtnMWYEaRexbUFfYFAYsSPxVsFPWGneILuweTEERtapnWGBuMCRjJIQgFfAviKZtEFHHoRmGAAZXjrknUmVwQqMPxhUgBAsNqVMXogUflWPvKlFpAUdhZJSyqqJhEEwMNXeGuXDDWLaGAbiYdbfdXYhqqWYerfYluJfASWpXzZHkqzpwreiclPEqvTHAzXjduOwAtotTxxUtAmhQSverJkIiWGrJKmTGq', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('KnFGLGNfCTxTPbHqxNlbNYljUcwQbuxfjHcFIzyRzeoGcjNBBSYBPPohDBrHOptbetHCmsRABmHeSTDUxzMrjYwnBNdFuHbEFfwzVWpZtCpaJVHHdoHxCbPDfEkmjGfOveDJlZXjcvZWgLtothkiuaYuUoviQjzCQAruhsnRfblDgbcbofiBwsjAAbxxHDHfqWQLsQlyYqoVsitMiPqVwjIhHHXVCGuhJhLcyUKVOYxdDNqyZUCYMEYgsecILNpvXZvPoRYvhvIGPhbRnQfGVAFKyBkDkLuTddjRoxripNEBHbRCjcEThemZVQTIBkJlpWsQGCLKkExwTMJERYkRemmNsFGXGqESPiAxAllKVhatVhEmvZzZfcGkzJHZHKApLJOKdQKeFrEcBYesXamJmGODRSSDZxyPnrNcQckfKtCiFAgePKcHwHJPnqxFvNQLVpelFeOfhuVDBYYOMgEieUcNuTABOGNxRBHMKwPoGzaKtDeXNKWyPQIQaVDiNjqKloEgnGWHKXxNsoLCaqkebQPBOrMhUFUtnMWYEaRexbUFfYFAYsSPxVsFPWGneILuweTEERtapnWGBuMCRjJIQgFfAviKZtEFHHoRmGAAZXjrknUmVwQqMPxhUgBAsNqVMXogUflWPvKlFpAUdhZJSyqqJhEEwMNXeGuXDDWLaGAbiYdbfdXYhqqWYerfYluJfASWpXzZHkqzpwreiclPEqvTHAzXjduOwAtotTxxUtAmhQSverJkIiWGrJKmTGq');
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var index_2152 = objectStore_0.createIndex('index_2152', 'test', {unique: true});
    var delete_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('KnFGLGNfCTxTPbHqxNlbNYljUcwQbuxfjHcFIzyRzeoGcjNBBSYBPPohDBrHOptbetHCmsRABmHeSTDUxzMrjYwnBNdFuHbEFfwzVWpZtCpaJVHHdoHxCbPDfEkmjGfOveDJlZXjcvZWgLtothkiuaYuUoviQjzCQAruhsnRfblDgbcbofiBwsjAAbxxHDHfqWQLsQlyYqoVsitMiPqVwjIhHHXVCGuhJhLcyUKVOYxdDNqyZUCYMEYgsecILNpvXZvPoRYvhvIGPhbRnQfGVAFKyBkDkLuTddjRoxripNEBHbRCjcEThemZVQTIBkJlpWsQGCLKkExwTMJERYkRemmNsFGXGqESPiAxAllKVhatVhEmvZzZfcGkzJHZHKApLJOKdQKeFrEcBYesXamJmGODRSSDZxyPnrNcQckfKtCiFAgePKcHwHJPnqxFvNQLVpelFeOfhuVDBYYOMgEieUcNuTABOGNxRBHMKwPoGzaKtDeXNKWyPQIQaVDiNjqKloEgnGWHKXxNsoLCaqkebQPBOrMhUFUtnMWYEaRexbUFfYFAYsSPxVsFPWGneILuweTEERtapnWGBuMCRjJIQgFfAviKZtEFHHoRmGAAZXjrknUmVwQqMPxhUgBAsNqVMXogUflWPvKlFpAUdhZJSyqqJhEEwMNXeGuXDDWLaGAbiYdbfdXYhqqWYerfYluJfASWpXzZHkqzpwreiclPEqvTHAzXjduOwAtotTxxUtAmhQSverJkIiWGrJKmTGq', 'cvxOuHqZXkxQKVDwvXdIQiovUKgndpbQEqxSvlmoCzLCYDLMuEgfiUEdfDdOuclJSgIWstVnVPYpLTTvHdHfMPaYAlPYixfGcnAylXVRSKCczxOOJcTYuMpBLDQMfQiwFQQLqanqqYUouitiPLsIEdvwysaoqXJTbTEnqSLPi', false, true);
        delete_1 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('KnFGLGNfCTxTPbHqxNlbNYljUcwQbuxfjHcFIzyRzeoGcjNBBSYBPPohDBrHOptbetHCmsRABmHeSTDUxzMrjYwnBNdFuHbEFfwzVWpZtCpaJVHHdoHxCbPDfEkmjGfOveDJlZXjcvZWgLtothkiuaYuUoviQjzCQAruhsnRfblDgbcbofiBwsjAAbxxHDHfqWQLsQlyYqoVsitMiPqVwjIhHHXVCGuhJhLcyUKVOYxdDNqyZUCYMEYgsecILNpvXZvPoRYvhvIGPhbRnQfGVAFKyBkDkLuTddjRoxripNEBHbRCjcEThemZVQTIBkJlpWsQGCLKkExwTMJERYkRemmNsFGXGqESPiAxAllKVhatVhEmvZzZfcGkzJHZHKApLJOKdQKeFrEcBYesXamJmGODRSSDZxyPnrNcQckfKtCiFAgePKcHwHJPnqxFvNQLVpelFeOfhuVDBYYOMgEieUcNuTABOGNxRBHMKwPoGzaKtDeXNKWyPQIQaVDiNjqKloEgnGWHKXxNsoLCaqkebQPBOrMhUFUtnMWYEaRexbUFfYFAYsSPxVsFPWGneILuweTEERtapnWGBuMCRjJIQgFfAviKZtEFHHoRmGAAZXjrknUmVwQqMPxhUgBAsNqVMXogUflWPvKlFpAUdhZJSyqqJhEEwMNXeGuXDDWLaGAbiYdbfdXYhqqWYerfYluJfASWpXzZHkqzpwreiclPEqvTHAzXjduOwAtotTxxUtAmhQSverJkIiWGrJKmTGq', 'cvxOuHqZXkxQKVDwvXdIQiovUKgndpbQEqxSvlmoCzLCYDLMuEgfiUEdfDdOuclJSgIWstVnVPYpLTTvHdHfMPaYAlPYixfGcnAylXVRSKCczxOOJcTYuMpBLDQMfQiwFQQLqanqqYUouitiPLsIEdvwysaoqXJTbTEnqSLPi', false, false);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_y: '<array>', f1_v: '<object>', f2_w: '<boolean>', f3_y: '<number>', f4_d: '<number>', f5_d: '<array>', f6_w: '<null>', f7_k: '<number>', f8_l: '<array>', f9_f: '<null>', f10_n: '<string>', f11_d: '<object>', f12_b: '<number>', f13_g: '<boolean>', f14_v: '<null>', f15_v: '<object>', f16_r: '<array>', f17_k: '<number>', f18_e: '<boolean>', f19_y: '<boolean>', f20_i: '<object>', f21_b: '<boolean>', f22_u: '<string>', f23_c: '<array>', f24_z: '<boolean>', f25_o: '<null>', f26_o: '<array>', f27_z: '<null>', f28_b: '<number>', f29_z: '<array>', f30_y: '<number>', f31_l: '<null>', f32_y: '<object>', f33_f: '<boolean>', f34_l: '<object>', f35_p: '<number>', f36_o: '<object>', f37_t: '<string>', f38_t: '<null>', f39_c: '<boolean>', f40_j: '<string>', f41_r: '<string>', f42_s: '<array>', f43_l: '<array>', f44_l: '<null>', f45_m: '<boolean>', f46_t: '<object>', f47_r: '<string>', f48_v: '<boolean>', f49_i: '<boolean>', f50_r: '<object>', f51_b: '<null>', f52_n: '<array>', f53_q: '<object>', f54_k: '<boolean>', f55_n: '<number>', f56_i: '<null>'}, 'sjwbTOyRoTsAHMNOLKMFKMgcZDJfWjYWCGrJNEqtZxDjWYDrOGoxqltwydCRkdlyYBpauJRvxfoMkVIhnLYZLctMqkTtBDTpZpNLeLMeuVFsXlfbbxrTYbsXkZKtPwzbQanqDlzlHHvxYHYSfZsoNpPNjUPTASLguDYccfFagDHfELkFqmGlDDoBmgdLkZKdSEwcNboBwCcBgUYKntvkgOhgSczPzApGvfGeUeaGLJgHHPFsqHtlSQIgXuHTmQDHRJFvmtLBTNntiiMxrMNVWXrdkblznHWqksQlNfQqjvcLcFpGKhduLOZMZWAgizulMXbteADBivvspRDyyKgbRioxMdMEHrcWzYgobamdfN');
    var add_3 = objectStore_0.add({f0_v: '<array>', f1_i: '<null>', f2_c: '<array>', f3_a: '<null>', f4_i: '<boolean>', f5_e: '<boolean>', f6_n: '<object>'}, 'DGDNbpaWCytxnHFdKxTKGBYKOWCTfUvYjkyRixilAVySiqmGBZIbrNMdNJdAZoWgYYwSPBSzMmvrxbZNBFkOGaaINZiNMWOCwWgxHCQathoXObscasmcsHQxyOQNkXYIhtaFBvQcOiJhRVjnNmWAyOURNxKapqbEHsMLREWZfHSfyilbvLzfDwKMiBCcLgoDFqzEgSRZBpcYJDebdQksgEdqpHswbGZysMAqFrMfJZQeNSUraNZKswcnLdiCCrnJBIbTtVwFZxMKcToOQGsncpulZzHvlnaVSJkagoyCYBstNlTgwYfTUJGGhuCaJOvfGmONnZazvXCSPLBZZGviEYBNMOANkUQrZswDOfphxHXdEJEhCcMvENpipolkVRKVWEEnrBrtmKKttgeCrXbjlfWAZsCXGnrDhaXuOWhDPglxPrCxMvCrGprWhOXvLOhSCVnGtQDNDyLEqnwgbtYLWBuQqqSsSoabZLiiJOsambgbdxGzHHexeXdsGCCiYRqCvLNrgZXdlLXxJOnOqfruSXhAlOXZyUSZSnaycanyHofLnDqztXNeGsopxKdCHOsQRziDIOSLxrkyoC');
    var index_2153 = objectStore_0.createIndex('index_2153', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3210');
    var index_2154 = objectStore_1.createIndex('index_2154', 'test', {multiEntry: true});
    var index_2155 = objectStore_1.createIndex('index_2155', 'test', {multiEntry: true});
    var getAllKeys_0 = objectStore_0.getAllKeys(1182800607);
    db.deleteObjectStore('objectStore_3209')
    objectStore_1.deleteIndex('index_2154')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4800 = db.transaction(['objectStore_3210'], 'readonly', {durability:"relaxed"})
    var objectStore_3210 = txn_4800.objectStore('objectStore_3210');
    txn_4800.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4800.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4800.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4801 = db.transaction(['objectStore_3210'], 'readonly', {durability:"relaxed"})
    var objectStore_3210 = txn_4801.objectStore('objectStore_3210');
    var index_0 = objectStore_3210.index('index_2155');
    txn_4801.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4801.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4801.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4802 = db.transaction(['objectStore_3210'], 'readonly', {durability:"strict"})
    var objectStore_3210 = txn_4802.objectStore('objectStore_3210');
    txn_4802.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4802.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4802.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4803 = db.transaction(['objectStore_3210'], 'readonly', {durability:"relaxed"})
    var objectStore_3210 = txn_4803.objectStore('objectStore_3210');
    txn_4803.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4803.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4803.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4804 = db.transaction(['objectStore_3210'], 'readonly', {durability:"default"})
    var objectStore_3210 = txn_4804.objectStore('objectStore_3210');
    var index_1 = objectStore_3210.index('index_2155');
    txn_4804.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4804.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4804.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1807')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};