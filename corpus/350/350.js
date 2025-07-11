let db;
const openRequest = window.indexedDB.open('str_3168', 5623274260458759)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2097', {keypath: 'bCAXppjYdzEHqRsYKXTvaAVHQPdlXbaDCulUivQqFPOmNKCDdxKybAyrPWBeIXQrbAmIsKFEcBPqIXuiknrWubuFhELMRGbOgylgnGDuPFBbqFEkNFbgImtaVWofprllOZfjsSaivpTgUgFGQdElywSNoflHdbjIpqXaRCERnameTsCObaCnVAnYDwDLeFeRgkmgaBMAHJWscGuKvmUyxSldcoQdxwqQcKLZpFciMLxPmPHOOWhpfbJPksdpmOXuZgPvursbhTGnaWoycDylkloTCgbUxQIJfUZQTENlxVgkKkbkpMaRtovOGtdyASTYYLTEbUJlvYqhwywLHXzLbssPkQzLqtptqYvHmleAHYYkaHxMdZKVYqsDiSPDTXrcsNaoEMBbcgmYGObuEqJRXUUZVMKDHkoszDlXAqMRFdRbKYucYYniEblNZNANYTUUuwONdBCVtvMjfyRWBHHUiTbkHkQkCUNhTlCLmMWpdPWAsawsIvdwIqpclohkdYswNMSRsDVXpxqquFVGTGlQxHSFjGClAAWKraQhUyWZPHjCrnOjoDrmNslhFbyFRMXOABbidPNuYUTcUhpotfGCfagakLJuPHaBOMUjWwYnv.RPzxneLbyRJJMFVNublORpzScRDYwcDEnvDyDpShQIruHyAByPDEQlWUPoFuiOPMEWvqoMWUzSDLoCpjmlDVoPjyHhILPTHwqBvSqUUhWTwRxXhmmSsxlZbzejKgzTWBxrLHVWlimEuEKfHAwAtTlfOlibyuPfnrSijdZIJPrgfjMjKEuaNlkLuOFamAuRgaapBtEHgfAKbzZAqbaoKdxnIJeVNHcXdhRzIizaksbZjPqgEdSkEISxWHmSpHqwvVcxXXBRpOhTDzStODNHQHVezwRHrJMiWqXEVPXLOGIODPwZYDXrcstzZwEGkAtURcBpDhjoYgozYoQVUAfLHBIKlancCFqxcBfzhrWjsyyaMaCTDwrCuiBZWPJevmImMbxzDPtsFMaGMqfqlxlHzIwOFsmbikOHNwjcLruUdCRemXwxWihEhExYKmzBVMIpHvMWsKYbJkjTEmMmDzAasSNHPysbLUWOcAOUxQiljuxCxp.IyIyJaPvAyVyEJzTySBBZjxoInGgwOIDvGDCLVqmlxGEWvDKPMEYYzVULgUzktEqFvEulwRDhJZynrZrbaPPtqRIxPfBfNgQFJVAcJbZcpHFlWiTvHNQxibFAUaoERLQkbgIyYnUjmzRUMOnJFOkSdXvhBgNyqPlelfD.CXqJXXanfOxBfJPkgASimfbEqLPtnhqaPqgpcOoakRLRaZcNpwNpGvcXPNPvskAcOUwOQmEKhdDHczwJNmjPPWdYlqBlbIJFhDjElhcTzcsTcnWhnVrlRdBHRdxAyvxYzOmypQAzVBfprCDQIWfAbdZaLbRhHhSUzRZrrjnwLqCSeVWSFGkboZgyjzkWkIPHoqyLhylAAMBUGHQAlfbFAFHTUjqetmSpadBaLfoIjqOswozxeFjMDrTCSjlfMVOQsEyAjltsuGLqrVheGWJBCXkBtiBejNYGqAWDpkNnBvxxelMDWrjaKMOJRQLoDFGpqfQJYWZpFpTIOECBBxXBQbxjTcWOUSPUdOzwxZMrhGiPomxUfYNlcPOsvuCjJhdxlKyIPuSnPDxLBCkQmGdtoKHJKAJJBbaAsMdZOmpwCBZbdpSvnAlBvpGkuItRIoKkNnMPyKifWnMjnOfhSWuoynIIuRhmdxhiFHRigiAQyosDWWokKOAcJtCNesxxxojocSochTrUNWjKiVIboMoyZgTeFRGYqwVomOJfJhufMqdaZbUDVFXebIlNLrXvZuEADqgwoyfzCkiKmjiquVciygcIiHAozKqzwSXjdcBWJTsoxyQxSxpipGziTMKrYYeXWNWhGSoutDzFZRMtushovLLAcSRhlOsHfBASjXfIgaUKQCgsOFLXxSxwTbUBNz.TZtRBKpaJQXQulbdPXTIyDEXQmjNjkpJsDeKtMGeOpZSxUgwOlOfqOkSwcsBiMnNxkRArhQNWdLVHZmvDfUdHOPlfHlJkNtSvDyBrCGMIEjQrxZkiDpnakQSydtFQvShwIwIsyUGVjDuFsxmTTMdNrkmZTFggJsdnrMHyiLbTNHKemKnfIfIHBsEDxuQZurRJLzTIbuEDyrBiEoPDDICjwJZblBefCjCVHSgoGVNImVQRhrmlBEhVlJZvJaAlcahaUiCrWhNTZKWhHOUMZCZYaUgJLZZDVHmGoxjqDxpLvawHnkoOIrmCXfCVFsejwBoJIGaohpGvbVVcWPedvPoniqOlNZzdNnLPQKzWeIyFfSrHeHpKvmnwXtPoiNvCjKmsKNDENwwkssDgIOOXsTjPOPwSxSkgUQLnFmcNjFqAUhpmcSdYdoTyKaHrSFJqapwzAgcGvbkPpmPobOIeFkYHyUnjTpfXrtXPiBcFZlaFxmvliftYOKHAeyLwonymVcuIQwLRuAnQAAxZLtUpqbHFIzFThTSiaxHrYmVqWvmePZYvYrAZJbSrDJYIlMDhUDocpjIxUDIE.GCGrYQfeWhWMgDVobfkIVOtuSQBYQuxjVBySKgqMCttcIpnOPQDjvZKZpfZVrGuBG.AdzNhOsNcnTdwHGhQBzjFgrVIsIOVdgdzrplCQFAabFuicjupCuXyZzofPdHuaZLAKPKOpoodhTDCBjeIWICCwhkukbRensdzJWunPSdTOdczfGAgnglhjJicBXEzfSWMVLplksIuJUbqtRFXTguHnIldaaGzUYMOsfIaOBiOqvUFClZRyNVuCnqROIpOGupdEJVCHOXKNEOBLSuDYxKMeGMOBpSIorRoMAFSjMRjEYffCvJYISTdRnyCsWiiwHDzqLzcwhxcQtNXULrMkARUmCNvUCMAuMQFZdYaXPLwwxiCjWPBTCXtMKabvZVprqPbrEQsLSxlEJrPPpjTwsDgLcWckURrOIHpiJgMrPERPZlaHOYnSdVjUmfGlEhABsYMfgcWbUVyYHUuWYAxrQuzgqzPhRfdwCCkMjrSxVAOqtGMwocloKKEhyecLbZcAcsJBaWOjOweloPHEDFbPBQUVLYaFpBrttvVQequzrksklFuy.qkBjmrfkPRApQbibFlfVYJoHEHgqZKVKVSGMspLcNckKDZbuUnVQNHQZauxbUZaUzipJbsgyhmyCvdsmDkZOxRQqwWKGrdEEKLveOGuQzmgVqSeaaXOYKgAXRXhvLjJtLocpigxibYoQJCCxMlrDDIpPIaOBeYziXvbIrJtfprbDKHtYKNPeIQGjv.fHEkpTuntQwLrSWiYjGzmaQYDztrqICgyXEoNfDOpfqbqiOnoXidfkxFlYBrZNIxnuXbQivgTnfLZDxLyovPvTZStTXmmbcASKrKRhWSfmpsKXmxubCbduXruQueCzaJKThZbNcjYBVcUHTYlGEHTisydJRpvGPxyspHoVjQSGJrZbAnyFOLtxhZItlSdrHPNgVrhSZchAFjkJszRJAoqTDYLeqAVCqsHbNRJGPfTBKhJDeENjKpDsXOXpYysnkYzgnIoPRFQuvIMENwPPtCODWNzGnarBBDINMUdsBMxagfNXHnjNvdZSceoasFTxmgYavhmYasmBGVbiGFjOMmUkMBkoQUzBfIorYfLvRoweDPPyPplwFRWMRWJEQtJnDfJzZlCPQvEAnStvxOxJcONaQPkMEbBXAKeMgupqubpjPCkVaKKgsTQbxbEEtcGjUHYSERnxRLlEoMjStvGATpGQMEQWjobImmKotMCkCtUhPAuxTxJeEPEbqtWqqmGNGUyXQmAAsYCilhosBFcFBfvnjOBflDhIlBVQuqEpOHzyTNEJBgZtlruDPOZjYeuypRbTRXwMGSvisRVGIETiHhCOoriuFYxaYSGMFmppBLrDqBhnDmBtQoNSaTLzsJMioBDSgLRarXKkdxkULJciLiNlZvjkzKIayNnbndouUFPbqrwseqDsaGHOCvvltNHRsmiXJDWnhXZnvNEQdPxRqpOivKfYphXlNpGxCKHtSSwuIDMjhEMlcdjlmLgxzvFuOJSBFiOoqgNmHLmkjBXcTuDjIEJMyzhPWefZZzkucEBsQGgnyicVaNJnQqtTZbMBZPKVmBcArtVjvxybBnqsvQaUyZQyGWfnXHQziFEKFPlFSwjCBYBGMSBSdQXNyYYvHWiVzVtKjtRHfyCeinaZNqltYdVIuEIPbGTHBLUJFgYNNIhttSCXSlmIwcFbjMLiYFOthGJEmWIsQzZLjmAfepATQmwzzel'});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_2098');
    var clear_1 = objectStore_0.clear();
    var index_1389 = objectStore_0.createIndex('index_1389', 'test', {unique: false});
    var clear_2 = objectStore_0.clear();
    var index_1390 = objectStore_0.createIndex('index_1390', 'test', {multiEntry: true});
    var add_0 = objectStore_0.add({f0_m: '<number>', f1_g: '<object>', f2_m: '<string>'}, 'BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh');
    var clear_3 = objectStore_0.clear();
    var index_1391 = objectStore_0.createIndex('index_1391', 'test', {unique: true, multiEntry: false});
    var index_1392 = objectStore_0.createIndex('index_1392', 'test', {unique: false});
    var objectStore_2 = db.createObjectStore('objectStore_2099', {keypath: 'sNVvtkzHmCyehnatCygheKqtYiaUUPYmSVbwWLvZtZtiIRBiNOPgOyjZcHeHZSkcqAFcIJNWkGzQrmfYApaEiwlMnBDiBxFtDqzoRvSLoXGEAPmLmhtmAojBJkAlXwWwtqgVyadDotjkVygyESCIOhSNyxCRSjuTaerkKizWaeyQGXVXaswFanwhzINwhUZgaxEPEOTyciZIyoNtZwWXmnwQXNMxGUulCOUuuRTkKkevEzBSGAtLXzrjIujUrYAzmKhExHdNlqTYHSeFDXDDevKhCxOWeAEEvPMdflnbFhBIqAcjSUbPLEgMoMrOJmNWgAyZvpLusKMbpqzqzaOOSAfrCBwJMOKkDhIdbDhtmgFFIvqHkZkBvmcEBxNbvyfRqBWwdGLhPfhJxsEGKzgUtYStkjwXAAMVShpeikmLtvqLJCkPgEBwldbCaXNCuVfHidZzWHRqnErHXBxLhyOzHDjVxjCMosfDkoUUNTNezfRzVhKAeixThPMKBjbnLELSANDXltyCpdxamvPerqzhRtpGmHGVCbXEoYCoRyfExiBKIDtHfxFrQSotBARvMwghPNwXBPIYIHXKvAHWfITDTHkvemIDBFsOOFsBXRwLiVdmcckvBTXVBtsmmifsVXGaYwtRCJFXsanAKmqHfMqMJoAnAOyRgMUfLJvmiizMmiPcthjdQRFLjYSCUVwkaXzQZnVBWdWBjyiXzuAbIBaTSYIvhNZWCmgGjMCdBuTKYnNWXblTuqEUUBasUPGiCwXzfOlweYqxTKPsekVDbEoyeWyhAvMmAwNYbhZrGukYstlrNUqnRbcLy'});
    var clear_4 = objectStore_0.clear();
    var index_1393 = objectStore_0.createIndex('index_1393', 'test', {unique: true});
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', 'BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3105 = db.transaction(['objectStore_2098'], 'readonly', {durability:"relaxed"})
    var objectStore_2098 = txn_3105.objectStore('objectStore_2098');
    txn_3105.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3105.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3105.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3106 = db.transaction(['objectStore_2099'], 'readwrite', {durability:"relaxed"})
    var objectStore_2099 = txn_3106.objectStore('objectStore_2099');
    var clear_5 = objectStore_2099.clear();
    var clear_6 = objectStore_2099.clear();
    var clear_7 = objectStore_2099.clear();
    var put_0 = objectStore_2099.put({f0_h: '<string>', f1_f: '<boolean>', f2_i: '<array>', f3_v: '<null>', f4_m: '<array>', f5_u: '<string>', f6_k: '<object>'}, 'MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA');
    var add_1 = objectStore_2099.add({f0_i: '<string>', f1_g: '<object>', f2_g: '<boolean>', f3_n: '<array>', f4_n: '<array>', f5_z: '<array>', f6_q: '<string>', f7_p: '<number>', f8_l: '<object>'}, 'gsSDQjNJcnhFnQJcTqfNJGYCNHGLxSxmeEasMxZdjoVOoezUSBvsVcVsEPJqvbMfiGYMGqwqGlqvECkarAYJKXwicrMkMqpZDfNCBuMaCBktYmlLVaDOdCMywryLkNSnQVXPOwNbamdhmafDmPWmNrqIvASeUigaPmgQryqfLCkJRlZnzkvZqWwYEOZAoZtiDedyMqsBTDYPePYLTUTPZAWfoKWtkUrKSrEEfdyyoOGfRAlIhwMOlyhhSJyWWpKZxPJFUNoGiLxTBImnxuGEDuTGQAkPLfSPGUWtDqMjRfBQkDKDdHGNDpjeJvknKubpPYTNhfhVOkdlZJInMRMVoUGKLNJLstIAAsiUiEKUnfCpJREjmANkBLeQQeIfvMaDnQTkasmNlolKIJdrrnusDJRRJaFRdGmoHlHYzwiEkfbttudfocwFLAwxThWmuMYudyjfLAuFTPCWGObvAJZzlQSmnGoAHCoMXrPxgYBuXBSUUcNrvxWikRHDXxxoDOMLjlIkukEEQJFkdWmAkZWkuQlXIyhodQCEHvcDOTiKIxvxBnMJImZMXRDimHhDmdVxKuUCISJATEFIjGiCFTTjjReDtjvbmKERIXcIpgvutXbeDcZCSFtgOwSsJILEWCAruvEzZnYQKUNbDnSVdLTGkrzjbeQwdUkJVFZpjcdRkxPQZFLinMYKREhXijMzicNNfVgpnsZhkLGKbbgiVFtXzipgASYufYuHaHxkgBEXJoqgfWBEUxCwdnsZmwFZjMxwwofhmJUyeBfCLfYAAIBorUBWkYhPhwRSSBtwaXXquvQqNCpZXpGXtWYzSdiQmzJnGnLMwfTVhfcTMJGsaKlsQxNUMFpFfqiOaxzfhZvKALdFVzAFirtrVfkoebEYkqIBJlTPmywhJXsQnUaXRUAwXHDkIUmi');
    txn_3106.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3106.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3106.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3107 = db.transaction(['objectStore_2097', 'objectStore_2099', 'objectStore_2098'], 'readonly', {durability:"strict"})
    var objectStore_2098 = txn_3107.objectStore('objectStore_2098');
    txn_3107.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3107.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3107.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3108 = db.transaction(['objectStore_2097', 'objectStore_2099'], 'readwrite', {durability:"default"})
    var objectStore_2099 = txn_3108.objectStore('objectStore_2099');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('gsSDQjNJcnhFnQJcTqfNJGYCNHGLxSxmeEasMxZdjoVOoezUSBvsVcVsEPJqvbMfiGYMGqwqGlqvECkarAYJKXwicrMkMqpZDfNCBuMaCBktYmlLVaDOdCMywryLkNSnQVXPOwNbamdhmafDmPWmNrqIvASeUigaPmgQryqfLCkJRlZnzkvZqWwYEOZAoZtiDedyMqsBTDYPePYLTUTPZAWfoKWtkUrKSrEEfdyyoOGfRAlIhwMOlyhhSJyWWpKZxPJFUNoGiLxTBImnxuGEDuTGQAkPLfSPGUWtDqMjRfBQkDKDdHGNDpjeJvknKubpPYTNhfhVOkdlZJInMRMVoUGKLNJLstIAAsiUiEKUnfCpJREjmANkBLeQQeIfvMaDnQTkasmNlolKIJdrrnusDJRRJaFRdGmoHlHYzwiEkfbttudfocwFLAwxThWmuMYudyjfLAuFTPCWGObvAJZzlQSmnGoAHCoMXrPxgYBuXBSUUcNrvxWikRHDXxxoDOMLjlIkukEEQJFkdWmAkZWkuQlXIyhodQCEHvcDOTiKIxvxBnMJImZMXRDimHhDmdVxKuUCISJATEFIjGiCFTTjjReDtjvbmKERIXcIpgvutXbeDcZCSFtgOwSsJILEWCAruvEzZnYQKUNbDnSVdLTGkrzjbeQwdUkJVFZpjcdRkxPQZFLinMYKREhXijMzicNNfVgpnsZhkLGKbbgiVFtXzipgASYufYuHaHxkgBEXJoqgfWBEUxCwdnsZmwFZjMxwwofhmJUyeBfCLfYAAIBorUBWkYhPhwRSSBtwaXXquvQqNCpZXpGXtWYzSdiQmzJnGnLMwfTVhfcTMJGsaKlsQxNUMFpFfqiOaxzfhZvKALdFVzAFirtrVfkoebEYkqIBJlTPmywhJXsQnUaXRUAwXHDkIUmi', false);
        get_0 = objectStore_2099.get(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2099.getAllKeys(3239838431);
    var getAll_0 = objectStore_2099.getAll(2177682344);
    var clear_8 = objectStore_2099.clear();
    var getAll_1;
    try{
        KeyRange_4 = IDBKeyRange.only('MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA');
        getAll_1 = objectStore_2099.getAll(KeyRange_4, 418200385);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA');
        getAll_1 = objectStore_2099.getAll(KeyRange_5);
    }

    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA', 'MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA', true, true);
        count_1 = objectStore_2099.count(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('gsSDQjNJcnhFnQJcTqfNJGYCNHGLxSxmeEasMxZdjoVOoezUSBvsVcVsEPJqvbMfiGYMGqwqGlqvECkarAYJKXwicrMkMqpZDfNCBuMaCBktYmlLVaDOdCMywryLkNSnQVXPOwNbamdhmafDmPWmNrqIvASeUigaPmgQryqfLCkJRlZnzkvZqWwYEOZAoZtiDedyMqsBTDYPePYLTUTPZAWfoKWtkUrKSrEEfdyyoOGfRAlIhwMOlyhhSJyWWpKZxPJFUNoGiLxTBImnxuGEDuTGQAkPLfSPGUWtDqMjRfBQkDKDdHGNDpjeJvknKubpPYTNhfhVOkdlZJInMRMVoUGKLNJLstIAAsiUiEKUnfCpJREjmANkBLeQQeIfvMaDnQTkasmNlolKIJdrrnusDJRRJaFRdGmoHlHYzwiEkfbttudfocwFLAwxThWmuMYudyjfLAuFTPCWGObvAJZzlQSmnGoAHCoMXrPxgYBuXBSUUcNrvxWikRHDXxxoDOMLjlIkukEEQJFkdWmAkZWkuQlXIyhodQCEHvcDOTiKIxvxBnMJImZMXRDimHhDmdVxKuUCISJATEFIjGiCFTTjjReDtjvbmKERIXcIpgvutXbeDcZCSFtgOwSsJILEWCAruvEzZnYQKUNbDnSVdLTGkrzjbeQwdUkJVFZpjcdRkxPQZFLinMYKREhXijMzicNNfVgpnsZhkLGKbbgiVFtXzipgASYufYuHaHxkgBEXJoqgfWBEUxCwdnsZmwFZjMxwwofhmJUyeBfCLfYAAIBorUBWkYhPhwRSSBtwaXXquvQqNCpZXpGXtWYzSdiQmzJnGnLMwfTVhfcTMJGsaKlsQxNUMFpFfqiOaxzfhZvKALdFVzAFirtrVfkoebEYkqIBJlTPmywhJXsQnUaXRUAwXHDkIUmi', false);
        get_1 = objectStore_2099.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA', 'gsSDQjNJcnhFnQJcTqfNJGYCNHGLxSxmeEasMxZdjoVOoezUSBvsVcVsEPJqvbMfiGYMGqwqGlqvECkarAYJKXwicrMkMqpZDfNCBuMaCBktYmlLVaDOdCMywryLkNSnQVXPOwNbamdhmafDmPWmNrqIvASeUigaPmgQryqfLCkJRlZnzkvZqWwYEOZAoZtiDedyMqsBTDYPePYLTUTPZAWfoKWtkUrKSrEEfdyyoOGfRAlIhwMOlyhhSJyWWpKZxPJFUNoGiLxTBImnxuGEDuTGQAkPLfSPGUWtDqMjRfBQkDKDdHGNDpjeJvknKubpPYTNhfhVOkdlZJInMRMVoUGKLNJLstIAAsiUiEKUnfCpJREjmANkBLeQQeIfvMaDnQTkasmNlolKIJdrrnusDJRRJaFRdGmoHlHYzwiEkfbttudfocwFLAwxThWmuMYudyjfLAuFTPCWGObvAJZzlQSmnGoAHCoMXrPxgYBuXBSUUcNrvxWikRHDXxxoDOMLjlIkukEEQJFkdWmAkZWkuQlXIyhodQCEHvcDOTiKIxvxBnMJImZMXRDimHhDmdVxKuUCISJATEFIjGiCFTTjjReDtjvbmKERIXcIpgvutXbeDcZCSFtgOwSsJILEWCAruvEzZnYQKUNbDnSVdLTGkrzjbeQwdUkJVFZpjcdRkxPQZFLinMYKREhXijMzicNNfVgpnsZhkLGKbbgiVFtXzipgASYufYuHaHxkgBEXJoqgfWBEUxCwdnsZmwFZjMxwwofhmJUyeBfCLfYAAIBorUBWkYhPhwRSSBtwaXXquvQqNCpZXpGXtWYzSdiQmzJnGnLMwfTVhfcTMJGsaKlsQxNUMFpFfqiOaxzfhZvKALdFVzAFirtrVfkoebEYkqIBJlTPmywhJXsQnUaXRUAwXHDkIUmi', true, true);
        getAllKeys_1 = objectStore_2099.getAllKeys(KeyRange_10, 2121440938);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('MSgRvQYhzQxTrGnOqifLFqdBHOvhpEsJwicQaqSgkCjtCNeOxNJEpdjmZotYpTVeBThltOaiGWEdtcSrMiAFGuRBjcwrrHsnTEdWpRyzRVfyCEKGJIffTWvlllCjfYZDlTMxEWhlBQDgRBBVEmYkdEiGonbcnwencowfEPYIIvdpMyaWQLnNAuRFbavIcxfHormXruZGsSPBDpBSCcleGCKvosBuimfglRjrZrMJPBUEaTCQJNDXWtmZPEQpfECqCjiaJEJMwNxIDzQHrJuHOTukpiWVDLyflibWjyqPUJmjSEQOpYoHETkhmqUTGnkgpQSXHuZDIuzzbA');
        getAllKeys_1 = objectStore_2099.getAllKeys(KeyRange_11);
    }

    txn_3108.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3108.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3108.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3109 = db.transaction(['objectStore_2097'], 'readonly', {durability:"relaxed"})
    var objectStore_2097 = txn_3109.objectStore('objectStore_2097');
    var getAll_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', 'BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', false, true);
        getAll_2 = objectStore_2097.getAll(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh');
        getAll_2 = objectStore_2097.getAll(KeyRange_13);
    }

    var getAll_3;
    try{
        KeyRange_14 = IDBKeyRange.only('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh');
        getAll_3 = objectStore_2097.getAll(KeyRange_14, 325391299);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh');
        getAll_3 = objectStore_2097.getAll(KeyRange_15);
    }

    var getAll_4 = objectStore_2097.getAll(2246468377);
    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', false);
        count_2 = objectStore_2097.count(KeyRange_16);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', 'BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh', false, true);
        get_2 = objectStore_2097.get(KeyRange_18);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_20 = IDBKeyRange.only('BwssmdvzjsgxhIIXmnUxtXDQuteVonUsuEwLFkjNQTcpyaLDADyTiorQqvxDFjBSALqVXWdiYETPszQmxlWjsfLTttCbpdOlDZAKJWfPzobipntjVfVaUVjdOKHiBiuqHwzziBsxdNuzrTOylYBSYkgPJORcALCuuTREbgLZEzqWxRdONgsAlvtsszXPsqcFzvTLdsLFuekZTjvfqToxhWDhzTTQKgfWtQbeSmDdLTMPKWMvSLqdVMdWHxnXZyGYzhLzDBYgRcJnbuANkVrgZuSwWVFEsMLKyHLgoEebOBkGrPMTEaiHCzsNRHhXOhnNFSzenDTORFHdjVxUNGjJENqildFGworouQWDwCTaSNDqzqrTlyJQOHNjSebkbfrEvxgxYHZNmBmJAQFxuTMrkzJNiYSsxFpOynGgNhHZDMTZehyJLXygVRBgQPDSEcBPfmWANlFlyZBxOPMteQpoXyCnRzXrvHYCNGKjctnSMJYQyTKdIGWFmKVwWHRXpujmhRkpEdnh');
        count_3 = objectStore_2097.count(KeyRange_20);
    }
    catch (e){
    }

    txn_3109.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3109.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3109.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3787')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};