let db;
const openRequest = window.indexedDB.open('str_8829', 2061026742971299)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1498', {keypath: 'SmkURuqKkaVPWHNAQxmflDfdrbFFfCzNScTXtfqcHOGtMCZTTveVwmXTOlVQUABLfwrRAWIrjOjyZajxYaBKKkeoiCzCMjuHLLTVRwxeVpyHKLsNqlSfsUsPAFPTMZmHzpLTAAHngvVBQFbZjTrBYugIwGHMfzClhNwZFJyPgYcUJhUMItSpnlNaUOppPiikrUxOMDLWTepVLEfRbMitxaYjNvGRHNrCMDpkyEJmcdySvEstuDTLhEDTEIrDzZnHirJTkAgTUsoOetjTajtPpraZXXIEYSeauVLgixDPDODKJrizJoFnEjTjOrjVSKLfQzGOeuTCSTtlMqBwwdhbGKpOwzhyUyDXMcUSJlsxbxxeDh.UEltoOZNVrcFqbmrwWMkIfxYdXFaNjTtcYoYTFFlnTkAULJhxpoaJaJNEIosBUikPFOzTmAzheManlfYcFUktYVofrlbYLItCiUndKoRGNmMYGHMFPitpvsAqgzGSYmMWouYRdhclNgkxImOrBtZVkulqEqCYDVGVAjQCJGvMdSiwagkVMbMyTJbXeXdvzxWgwXvIxiFaZFpvcRCVtEbXHxsUaRzSwVWOsHOpnAyHPDNfJCdiVtJKTDyKzrUXeJrztxLRpXxgvKCzfDxabChFenXEvImtgoGvTxseizJkJnjgmbEkmRCGeZxnxQlRytgmHDwmwjChStxwmjiUKwUtkBnlLmnKgpgLucJVXkNRVXzymYUopYGmStEFCaNssBgpkZSCXODnDPGzkpaIODaOFUopCqNQUNwfbQiJitDyTAgTuslZKGpjOFBGSqLzbJOQKhgnBdHKlWAfSrlnccWWpzLtNgPLxQOJtQkUiSZQKIzKnvZmdKWTmPcyiLzKpaOHaxvncryExoTllxTxiZpkQxMgPgrqaNzTLAVqoQXvLmWSpZzrfOFwropUMQSkivdkuXZKfSYrcCvVsEVYQzJKDTdTOOYbSEiMLanYJDYwTalHKXaEArJzsYOKAxZbarHYKnIlCbLSaQaoQVAZYHsHvZjbwgItTAZdYlbTWTXpRaDcWEOpaApXfPEhpsNPvtQgfjSUCtIvdTZUPFbQZQzFKeJyNDKIMTRXSIczuWaRxKyHxvuTxRNxxLDrIiWxHqJoAYtNTeLlqPSeRRzpbvWvNHOSdcemzfJaQlLalySzLbvggmPzoXXYHyTKvEzEksdKdSPMsHglVRNtRWcnuCmcmYIvjtHYYcI.IJKFxKSSMeFXUlYRpXIIWppvhiSKlVxSsfWyKAeSSaiJMmtxIGLBLSrimTYXorSuFZExJQWiSGxoDUdVUhYdtkWuvWZGZmzOeZtYHMTKSbfTOMYnyAMgFqbjBdnjNefvWppNUkAUpirOFHNUYDRTfNzdQXFAYknBaOXcHBAFsslUNAnyDaugofLDlpfloQkANjcCrAuKKttXehbgjdCVUNPowrYYFGSQhvvKDZLuHAWUaMXGpUYXINRdCvzwzctJnSTtO.ICObPSTirvritUZvICCQnUpgXORyQqiULUgzytLKuBJePhoiojCuleXlvSpYudyLECUTmEfWLOdhsVZMFlMUfGqvuyCIBUNTCPwIUOSBigRfJOXKdiBCJCGUtpLqTh', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_m: '<number>', f1_u: '<string>'}, 'JHYCRVKFxqvPObHkIaLBUDiexZGOBOIgonKLroPXvdRbYnPuGLRLgrjBKpZmfvIacbvdCQMrtxuoHqGilimeFhiPLEweSsDgJfvAYOoQYbWsrLiBirUjOMPgGIeygLIHpLbsKIIDVLnzIMAGUpiOHFtKGtiBllkQvCYBRrVEqdnZRfuvXoryXARFoegOZohATfgbGcysqoqTogLPNLbJHVnwFSjYSTqvKILbTlrCHZxTmIivaxCxgkFmRSmVXjfGtGuOLFMTNRBLzvUPwDyzmXcLmDyyujZOEohFbrBOGzFRqvIaCtRUunFDmCCQgbNQaiOpardIwGeOOjqitLXrmkGzlNgrwctKUNRcYhxjyBFrjfDqhIbZPLFlKgvlfnCVqWNAtJvciBQDnxLZYuCgmgiHznSZwXlfhGUSvcEpbxARCJJwphGxwICVpjGSPCKiwWdfynooaIEhBKwlNpeAnvEMyyIaubtWlsLYQFWKcbOgcqBImCblQBfWPGGozutZUFovYSSjpCMYnqFtQoTlUhogOJRlwpkXESOQyNoUX');
    var index_993 = objectStore_0.createIndex('index_993', 'test', {multiEntry: false});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('JHYCRVKFxqvPObHkIaLBUDiexZGOBOIgonKLroPXvdRbYnPuGLRLgrjBKpZmfvIacbvdCQMrtxuoHqGilimeFhiPLEweSsDgJfvAYOoQYbWsrLiBirUjOMPgGIeygLIHpLbsKIIDVLnzIMAGUpiOHFtKGtiBllkQvCYBRrVEqdnZRfuvXoryXARFoegOZohATfgbGcysqoqTogLPNLbJHVnwFSjYSTqvKILbTlrCHZxTmIivaxCxgkFmRSmVXjfGtGuOLFMTNRBLzvUPwDyzmXcLmDyyujZOEohFbrBOGzFRqvIaCtRUunFDmCCQgbNQaiOpardIwGeOOjqitLXrmkGzlNgrwctKUNRcYhxjyBFrjfDqhIbZPLFlKgvlfnCVqWNAtJvciBQDnxLZYuCgmgiHznSZwXlfhGUSvcEpbxARCJJwphGxwICVpjGSPCKiwWdfynooaIEhBKwlNpeAnvEMyyIaubtWlsLYQFWKcbOgcqBImCblQBfWPGGozutZUFovYSSjpCMYnqFtQoTlUhogOJRlwpkXESOQyNoUX', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_994 = objectStore_0.createIndex('index_994', 'test', {unique: true, multiEntry: true});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('JHYCRVKFxqvPObHkIaLBUDiexZGOBOIgonKLroPXvdRbYnPuGLRLgrjBKpZmfvIacbvdCQMrtxuoHqGilimeFhiPLEweSsDgJfvAYOoQYbWsrLiBirUjOMPgGIeygLIHpLbsKIIDVLnzIMAGUpiOHFtKGtiBllkQvCYBRrVEqdnZRfuvXoryXARFoegOZohATfgbGcysqoqTogLPNLbJHVnwFSjYSTqvKILbTlrCHZxTmIivaxCxgkFmRSmVXjfGtGuOLFMTNRBLzvUPwDyzmXcLmDyyujZOEohFbrBOGzFRqvIaCtRUunFDmCCQgbNQaiOpardIwGeOOjqitLXrmkGzlNgrwctKUNRcYhxjyBFrjfDqhIbZPLFlKgvlfnCVqWNAtJvciBQDnxLZYuCgmgiHznSZwXlfhGUSvcEpbxARCJJwphGxwICVpjGSPCKiwWdfynooaIEhBKwlNpeAnvEMyyIaubtWlsLYQFWKcbOgcqBImCblQBfWPGGozutZUFovYSSjpCMYnqFtQoTlUhogOJRlwpkXESOQyNoUX', 'JHYCRVKFxqvPObHkIaLBUDiexZGOBOIgonKLroPXvdRbYnPuGLRLgrjBKpZmfvIacbvdCQMrtxuoHqGilimeFhiPLEweSsDgJfvAYOoQYbWsrLiBirUjOMPgGIeygLIHpLbsKIIDVLnzIMAGUpiOHFtKGtiBllkQvCYBRrVEqdnZRfuvXoryXARFoegOZohATfgbGcysqoqTogLPNLbJHVnwFSjYSTqvKILbTlrCHZxTmIivaxCxgkFmRSmVXjfGtGuOLFMTNRBLzvUPwDyzmXcLmDyyujZOEohFbrBOGzFRqvIaCtRUunFDmCCQgbNQaiOpardIwGeOOjqitLXrmkGzlNgrwctKUNRcYhxjyBFrjfDqhIbZPLFlKgvlfnCVqWNAtJvciBQDnxLZYuCgmgiHznSZwXlfhGUSvcEpbxARCJJwphGxwICVpjGSPCKiwWdfynooaIEhBKwlNpeAnvEMyyIaubtWlsLYQFWKcbOgcqBImCblQBfWPGGozutZUFovYSSjpCMYnqFtQoTlUhogOJRlwpkXESOQyNoUX', false, true);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_o: '<boolean>', f1_e: '<number>', f2_f: '<string>', f3_r: '<string>', f4_h: '<object>', f5_d: '<array>'}, 'BpWKrqmOreuGNAlwHoVwvOCLepXyZHfNJgfJPaAVYqXafhwhEvKvsJRVdWvZOKvGeanvhmsjloywvAZTZGaBlLdpfLnEkwmneLopYmXFiFPshxzjwzUkbWLuFqiRchBovyVOIVkAFXUtkRXZslLqDWKjYKKWXOaaWFHrLCJAXDVNKEizBJewzgbUHbKqXGECs');
    var objectStore_1 = db.createObjectStore('objectStore_1499', {keypath: 'ntYwyGbyuiYJyzcKPSjINZsYlfJphNrLqkbbrIDNwUdCoVvhtWSTlvHwHwNssvVnDBWgRTtVccZjinFwLvWqKEEFRBWsCsBnNrdbXxnPwZZADxDaUIPssxOPNrjefaYOsCfHXabYHphiSFymMZzHFemHIEfpgZnPUolFbEUAsKICSKryTyTzNjTTtMssxuARlZjhiMwIfZlmSyTbIDgHjpSxaXPynzGGDLmIdosxYbgieqVdczuWEjRozeiidNytrjWZTlZowoVKtjjIocSwgZaxJjlyxHXnPIcRcgMiPGduhZMJMLjBVUMBwlDPfwGsCoIGYzigDKxlxEIRjtQMoelRWFWSaOhvWoxUDAzhbLkHEvLsyQjGGYsWhysuJBxcoOMmcNOJFLfwiTmzLHeezPJPtlFLeNFrpMsfsXlxjPQxwvZRVrrbHidPQGfCJYEvkKZaiaGTHQhWjoShNtCoLgFMPLCNXksNaxMNmPfiYvAttYNDsUWJKjUPvFfZGLBklVkGOKnCOHuVwUdopEpwrhPiaDUFSsdYYpwqYUcOsMtMzpniLhxqnYSvKhOZKvcUpVPhOAnokDwzBJpnkZJJdGURCejsTdjGtvLdBURyJJPBjGiOSlxvUooTgXQazYPhTJcbzwtulSAIsmdCVDpBngQTcmrwawvORLTCReCyBcmuptWXKYYEdhKcixfORTCDsICqPETjeioRKRrOHdShPUcDfzSrJJJsttaoIoQTXmIILqYiIUoFipUIRxJuWuHCkOD'});
    var index_0 = objectStore_0.index('index_994');
    db.deleteObjectStore('objectStore_1498')
    var objectStore_2 = db.createObjectStore('objectStore_1500', {keypath: 'zlOZoROMEhbjbFqlgdeheYkfKZATkHSlDUuxYrYBqsrpguLEEghsIUhNlRgUqdpnclPRycKtZaMEgJiNhzxZhQSQqCzIqRXWEKooScFdZfdLfdXceuNBQgBdfAswrPUobmCkxdPjNQRwGhwJlflzxFxOglbQbXpIoncQXidxXalXLaaEHBFVNsrRIXmXhEmCjqFQcrsAwzxtpJuoxNkXyBQLfOEExUpGdOILfWVAijrmQqkJfdTEENtHEOepbdKqYizXUOTCZhSSFMxvyxJTkjkkFaFyaeMfZZkMydvsHkRMygbDKCwMweTESXeQemdgxJYxtoOkCzgVZXUJHreRFRJsYhCFfobLdpPlosAfVmxzckHibwBiNRGfMdgnNTcjcJMDYHXImQkQsuWoWUZMPqKYLBLpBfcnDTIxQDXWoaPdJOTYfguHJjHVeojwqXLkDNfkzfBfpnwdqHjtnsWTHLHUDkghVbqUgwSNKBUHhIYIlmYUDDrDChLRGqhYIrAoHheYMqxlmvkJaarbRazaipvrlRoNAraVHxQTFlHHRNqlYpdIWSPvcWdxikSHAzjtfhzlzWUOxtpsfHKigOoqIOoqihApfsQIXZOlzlATKTlhCTfHfCByXwtkObsEGeCcEKOMMwfOFdCmKuQewsgdpjemrTNPlWhgfcWDtkQZoNIGGHfqiGbuCIjvEIIlQuOgvvcaTxySDqKnFejldKTGmuWWjbOXkISYdqsBrYSPmJVXiGKiMqcBweZjUVZdXRCpIMiCtybVOaUOizeKzMgNPPtkPlGDvKlwPaqGiOYmBYDnISaDKTxEOJHEvlbxHdAXuursjRlbybXGqOvGjN', autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    var index_995 = objectStore_2.createIndex('index_995', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2235 = db.transaction(['objectStore_1499'], 'readwrite', {durability:"default"})
    var objectStore_1499 = txn_2235.objectStore('objectStore_1499');
    var add_2 = objectStore_1499.add({f0_b: '<null>', f1_f: '<array>', f2_v: '<string>', f3_h: '<array>', f4_e: '<array>', f5_y: '<number>'}, 'KIDOjqMOLKzEpOTjiMyahQYSwwqbqGYEwCQjqJlndDtQzVtamaXRHDWqYlnEQVrBbnVtfQUtccBRyJpyOFEVPuaTuWQZPvkCYpYBbtPBSyRRSqgdCuKVTGtlXKsMmnBNIQkRfKAmdviuywFWHRQUpzwGasorOhbGvRWBcTchBouBBeFUlqTLQYIzgXTXizpvcbMalwcxtPCmCcprkmLblMMCpbujuXWarcnNJeXGtcPvoBbJhwaBbQjSFypZqftWEngXaXdgnuChaZFXbqbXdNmVYtqvjHIXVCrUtFiYYSxngTSgtHimsOEoghAmOBzIHqvPOKZhuROdjOZxTiveXMHFhsOFtPqrKRRMPGDxWExIRloYfeCBUyHmlEjtNhMTxGZlvneELiWwtHkCpeiFAnAVYloenxpyCvJDmwuFWPxTjyodSJmxqvGAPDSNCiCapphYDJBjeVPIUbOMmBVYXTGXHTPqVSghHUNJqPfaRonToGcCjJoEXIInzzaNhvtSIKZlkzlQQqhaRuLrMQSoEqMNUrRTaCqvhVDTTZVivIKHOJVdvnoJLkNJTdjzzxfYJHAJhjYtZngUFKjlzoqSIMJzqrLmqYbLqHqAMeSrnxPImgrBCbkOpufNoqPwPuLsVXTrTMRBnEtxaDIkdqmTfCKnXHMvWyRwDaDrZn');
    var put_0 = objectStore_1499.put({f0_h: '<null>', f1_y: '<string>', f2_q: '<boolean>', f3_b: '<string>', f4_i: '<object>'}, 'AaBitzLNPdTnfVzUtVOdgwPkZVNwschmhBOTBZfauNaVAWqdC');
    var add_3 = objectStore_1499.add({f0_v: '<array>', f1_d: '<number>', f2_c: '<number>', f3_u: '<number>', f4_u: '<number>', f5_x: '<object>', f6_l: '<null>', f7_l: '<array>', f8_k: '<string>'}, 'nvJTchkJPfnyxQYhCHqYwtpbmpUwrLZuIrYhwsXwCkBbYJLBUqRRgvVXBQHtBtGxRbhnAlvMzYdXqDMTfIHAPVaaShOCmTNUoPbyeJtUvrbGjzusFJcSjuXuOaCdTOyRlTMlwJoekfsWdgGbkeYiyWEEtCwsofKhZiNmUvWYoVJpdNEJDuAPEkKaRmeZMdfAjcZDUIbWcySUGZjHGAnwkkowmyqOdnfNUGvosgvCGSoJBPuZzVxskIAddPsIeoCSZGnRuVsfgrFfHqunfGfJKyQTnDudqbhgcLQoIZDFbljmZewHFICItWtDnOapPREQGMgdjMGQpkQiSertvDxhOxtBvvcJbQjwtTI');
    var clear_1 = objectStore_1499.clear();
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('nvJTchkJPfnyxQYhCHqYwtpbmpUwrLZuIrYhwsXwCkBbYJLBUqRRgvVXBQHtBtGxRbhnAlvMzYdXqDMTfIHAPVaaShOCmTNUoPbyeJtUvrbGjzusFJcSjuXuOaCdTOyRlTMlwJoekfsWdgGbkeYiyWEEtCwsofKhZiNmUvWYoVJpdNEJDuAPEkKaRmeZMdfAjcZDUIbWcySUGZjHGAnwkkowmyqOdnfNUGvosgvCGSoJBPuZzVxskIAddPsIeoCSZGnRuVsfgrFfHqunfGfJKyQTnDudqbhgcLQoIZDFbljmZewHFICItWtDnOapPREQGMgdjMGQpkQiSertvDxhOxtBvvcJbQjwtTI', 'KIDOjqMOLKzEpOTjiMyahQYSwwqbqGYEwCQjqJlndDtQzVtamaXRHDWqYlnEQVrBbnVtfQUtccBRyJpyOFEVPuaTuWQZPvkCYpYBbtPBSyRRSqgdCuKVTGtlXKsMmnBNIQkRfKAmdviuywFWHRQUpzwGasorOhbGvRWBcTchBouBBeFUlqTLQYIzgXTXizpvcbMalwcxtPCmCcprkmLblMMCpbujuXWarcnNJeXGtcPvoBbJhwaBbQjSFypZqftWEngXaXdgnuChaZFXbqbXdNmVYtqvjHIXVCrUtFiYYSxngTSgtHimsOEoghAmOBzIHqvPOKZhuROdjOZxTiveXMHFhsOFtPqrKRRMPGDxWExIRloYfeCBUyHmlEjtNhMTxGZlvneELiWwtHkCpeiFAnAVYloenxpyCvJDmwuFWPxTjyodSJmxqvGAPDSNCiCapphYDJBjeVPIUbOMmBVYXTGXHTPqVSghHUNJqPfaRonToGcCjJoEXIInzzaNhvtSIKZlkzlQQqhaRuLrMQSoEqMNUrRTaCqvhVDTTZVivIKHOJVdvnoJLkNJTdjzzxfYJHAJhjYtZngUFKjlzoqSIMJzqrLmqYbLqHqAMeSrnxPImgrBCbkOpufNoqPwPuLsVXTrTMRBnEtxaDIkdqmTfCKnXHMvWyRwDaDrZn', false, true);
        get_2 = objectStore_1499.get(KeyRange_4);
    }
    catch (e){
    }

    var add_4 = objectStore_1499.add({f0_c: '<object>', f1_r: '<string>', f2_q: '<string>'}, 'EfKsECgpMRkhEYSFDLGkABzjwMCmRahhkgWgyQyQKONwpFSlwgnUZWUsRtlipcMnACOqEGykIYVkTHgnLWsdRjUGgQYKAcSiLrBHhpNibCtrjwFBsKEFGuOXvYMrQAzOlsyqTgbkPppafElWmtnnBqASpAijkZblRehSGALFGEBWziIZpLZhlFSfHkjcKCtWSdpapkFBGAXiePOsfqmuEFuoUEDGXAWyxKpwmrGnNaMrksKntaQsPdMpjnSNPynmaKtvsBwsakpsgINXLIcnacktZzPqxgUURUebBwFDgFRtwIgqiIDLrCriFmkXaWeevOxuTEEKrBUlyYgsOHBfGYKpfdcxalEtsZZMagNskBfRNPdbnfjKNMeuCjiJjjkZeqidkWngeLVukjAZWVIAWZQZdnePDUmDbNwoRRcUkBdHxHgCnNRlWOyoFvmeXFpsDgjCpAoiGyqvmRkxcHIrPoXvxhuygFRUtEVzzrHbreFGGSVdpuYSvNFFOnDfYwLgtlWwokcQVvYiKxjyCweANKgTNACAGvJWNIaFdWylXGHTixwtjWqeQfYnomcjpSboqKLwjbCNEprbfqqErtiAIgOOCGpOcclExtSlFiqVzUaNjmeOqZQmSVVOfetWXCCxJnilksoBTDWrTvIOqZZvjjKGxxjhgADGVhnaSTcQEcNPNOuDverxriOkRSvNvhIkQRwKTVosfMdzYAfquslSjZDwHvsrJLoImyuYBMNbWAjyxKLyBJYQOXoXTWwtVbzVjFOqqAEeqRPqaPHLVFCKqmJDkltRsGHRsnCORGMorSehVZNYqqmDsOdeNcSnohbxPWsoBzRlNCCZgEcmMgMFCNRkrZowDkHupeVFyXjWzLZP');
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('nvJTchkJPfnyxQYhCHqYwtpbmpUwrLZuIrYhwsXwCkBbYJLBUqRRgvVXBQHtBtGxRbhnAlvMzYdXqDMTfIHAPVaaShOCmTNUoPbyeJtUvrbGjzusFJcSjuXuOaCdTOyRlTMlwJoekfsWdgGbkeYiyWEEtCwsofKhZiNmUvWYoVJpdNEJDuAPEkKaRmeZMdfAjcZDUIbWcySUGZjHGAnwkkowmyqOdnfNUGvosgvCGSoJBPuZzVxskIAddPsIeoCSZGnRuVsfgrFfHqunfGfJKyQTnDudqbhgcLQoIZDFbljmZewHFICItWtDnOapPREQGMgdjMGQpkQiSertvDxhOxtBvvcJbQjwtTI', 'KIDOjqMOLKzEpOTjiMyahQYSwwqbqGYEwCQjqJlndDtQzVtamaXRHDWqYlnEQVrBbnVtfQUtccBRyJpyOFEVPuaTuWQZPvkCYpYBbtPBSyRRSqgdCuKVTGtlXKsMmnBNIQkRfKAmdviuywFWHRQUpzwGasorOhbGvRWBcTchBouBBeFUlqTLQYIzgXTXizpvcbMalwcxtPCmCcprkmLblMMCpbujuXWarcnNJeXGtcPvoBbJhwaBbQjSFypZqftWEngXaXdgnuChaZFXbqbXdNmVYtqvjHIXVCrUtFiYYSxngTSgtHimsOEoghAmOBzIHqvPOKZhuROdjOZxTiveXMHFhsOFtPqrKRRMPGDxWExIRloYfeCBUyHmlEjtNhMTxGZlvneELiWwtHkCpeiFAnAVYloenxpyCvJDmwuFWPxTjyodSJmxqvGAPDSNCiCapphYDJBjeVPIUbOMmBVYXTGXHTPqVSghHUNJqPfaRonToGcCjJoEXIInzzaNhvtSIKZlkzlQQqhaRuLrMQSoEqMNUrRTaCqvhVDTTZVivIKHOJVdvnoJLkNJTdjzzxfYJHAJhjYtZngUFKjlzoqSIMJzqrLmqYbLqHqAMeSrnxPImgrBCbkOpufNoqPwPuLsVXTrTMRBnEtxaDIkdqmTfCKnXHMvWyRwDaDrZn', false, false);
        get_3 = objectStore_1499.get(KeyRange_6);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_8 = IDBKeyRange.only('nvJTchkJPfnyxQYhCHqYwtpbmpUwrLZuIrYhwsXwCkBbYJLBUqRRgvVXBQHtBtGxRbhnAlvMzYdXqDMTfIHAPVaaShOCmTNUoPbyeJtUvrbGjzusFJcSjuXuOaCdTOyRlTMlwJoekfsWdgGbkeYiyWEEtCwsofKhZiNmUvWYoVJpdNEJDuAPEkKaRmeZMdfAjcZDUIbWcySUGZjHGAnwkkowmyqOdnfNUGvosgvCGSoJBPuZzVxskIAddPsIeoCSZGnRuVsfgrFfHqunfGfJKyQTnDudqbhgcLQoIZDFbljmZewHFICItWtDnOapPREQGMgdjMGQpkQiSertvDxhOxtBvvcJbQjwtTI');
        get_4 = objectStore_1499.get(KeyRange_8);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_10 = IDBKeyRange.bound('KIDOjqMOLKzEpOTjiMyahQYSwwqbqGYEwCQjqJlndDtQzVtamaXRHDWqYlnEQVrBbnVtfQUtccBRyJpyOFEVPuaTuWQZPvkCYpYBbtPBSyRRSqgdCuKVTGtlXKsMmnBNIQkRfKAmdviuywFWHRQUpzwGasorOhbGvRWBcTchBouBBeFUlqTLQYIzgXTXizpvcbMalwcxtPCmCcprkmLblMMCpbujuXWarcnNJeXGtcPvoBbJhwaBbQjSFypZqftWEngXaXdgnuChaZFXbqbXdNmVYtqvjHIXVCrUtFiYYSxngTSgtHimsOEoghAmOBzIHqvPOKZhuROdjOZxTiveXMHFhsOFtPqrKRRMPGDxWExIRloYfeCBUyHmlEjtNhMTxGZlvneELiWwtHkCpeiFAnAVYloenxpyCvJDmwuFWPxTjyodSJmxqvGAPDSNCiCapphYDJBjeVPIUbOMmBVYXTGXHTPqVSghHUNJqPfaRonToGcCjJoEXIInzzaNhvtSIKZlkzlQQqhaRuLrMQSoEqMNUrRTaCqvhVDTTZVivIKHOJVdvnoJLkNJTdjzzxfYJHAJhjYtZngUFKjlzoqSIMJzqrLmqYbLqHqAMeSrnxPImgrBCbkOpufNoqPwPuLsVXTrTMRBnEtxaDIkdqmTfCKnXHMvWyRwDaDrZn', 'EfKsECgpMRkhEYSFDLGkABzjwMCmRahhkgWgyQyQKONwpFSlwgnUZWUsRtlipcMnACOqEGykIYVkTHgnLWsdRjUGgQYKAcSiLrBHhpNibCtrjwFBsKEFGuOXvYMrQAzOlsyqTgbkPppafElWmtnnBqASpAijkZblRehSGALFGEBWziIZpLZhlFSfHkjcKCtWSdpapkFBGAXiePOsfqmuEFuoUEDGXAWyxKpwmrGnNaMrksKntaQsPdMpjnSNPynmaKtvsBwsakpsgINXLIcnacktZzPqxgUURUebBwFDgFRtwIgqiIDLrCriFmkXaWeevOxuTEEKrBUlyYgsOHBfGYKpfdcxalEtsZZMagNskBfRNPdbnfjKNMeuCjiJjjkZeqidkWngeLVukjAZWVIAWZQZdnePDUmDbNwoRRcUkBdHxHgCnNRlWOyoFvmeXFpsDgjCpAoiGyqvmRkxcHIrPoXvxhuygFRUtEVzzrHbreFGGSVdpuYSvNFFOnDfYwLgtlWwokcQVvYiKxjyCweANKgTNACAGvJWNIaFdWylXGHTixwtjWqeQfYnomcjpSboqKLwjbCNEprbfqqErtiAIgOOCGpOcclExtSlFiqVzUaNjmeOqZQmSVVOfetWXCCxJnilksoBTDWrTvIOqZZvjjKGxxjhgADGVhnaSTcQEcNPNOuDverxriOkRSvNvhIkQRwKTVosfMdzYAfquslSjZDwHvsrJLoImyuYBMNbWAjyxKLyBJYQOXoXTWwtVbzVjFOqqAEeqRPqaPHLVFCKqmJDkltRsGHRsnCORGMorSehVZNYqqmDsOdeNcSnohbxPWsoBzRlNCCZgEcmMgMFCNRkrZowDkHupeVFyXjWzLZP', false, false);
        get_5 = objectStore_1499.get(KeyRange_10);
    }
    catch (e){
    }

    txn_2235.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2235.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2235.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2236 = db.transaction(['objectStore_1499', 'objectStore_1500'], 'readonly', {durability:"default"})
    var objectStore_1500 = txn_2236.objectStore('objectStore_1500');
    var index_1 = objectStore_1500.index('index_995');
    txn_2236.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2236.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2236.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2237 = db.transaction(['objectStore_1499'], 'readwrite', {durability:"strict"})
    var objectStore_1499 = txn_2237.objectStore('objectStore_1499');
    var getAll_0 = objectStore_1499.getAll();
    var add_5 = objectStore_1499.add({f0_g: '<boolean>', f1_a: '<number>', f2_p: '<number>', f3_b: '<null>', f4_w: '<null>'}, 'wdSkHmxjDFvsEnySSNfnsDoptJVCRvORIetBnGMCXXYrIYngUMgEyZFiXTaSyjdGQAfaneQUBiyYvtiorTCpcQlbSJyZXUVWRgQQWcDYMHqJBZNgkwdxetAvPAMvZnQgRhJlSwDtnrrlQbdVDcDftmcdscWyCdZGMeuVYWQwBCbzkJFlVnGyOsKCpNHQhJIiEFKpqQVyDVRJCjDZciyslkNSsbQfpIcdgrBgiuhWSmJbCVtvcwhmvOcQpFLvWvNAdFXOVTclRKTUpSQgCMtkMNuqZKYJhbxPrviMOOiNTysfhFdVQLxYCapAeAZjtkljxNJAgdLZcckgsYwhiuNDOKnJfEOXiwLhxFuhnDRuxcsawPuFqvISWxhGPLFuVIcRQbRBNOwIqUfPzwIgtqDBoZbsqMGaXcIVNRepJwypzVvSnvQODAxBLKhbvzMJRSrpwovyxSXsxCHrQAiJWgVzphCYrabUbkuRgUBqkXYuMPqhVzPOMITuVHFIWbEyCYfHAamfMnAcygFJhhTaWEbtXKbhNZKpGDGNyiHWaQLxiuWERkZOSVabeFUBWBiDnekeKpTiTJLHbghkESnDyiOhOfQjNXYtwdOxEPVlQnCrNCNnWgZDoViTmnwenmFqPVRvfMCpXKmthlAEkHxLWndbuFLPlvnaDL');
    var getAll_1 = objectStore_1499.getAll(2927413921);
    var count_0 = objectStore_1499.count();
    var add_6 = objectStore_1499.add({f0_k: '<string>', f1_z: '<null>', f2_a: '<null>', f3_x: '<null>', f4_x: '<boolean>', f5_b: '<number>', f6_b: '<null>', f7_k: '<boolean>', f8_k: '<boolean>', f9_c: '<object>', f10_y: '<string>', f11_h: '<null>', f12_p: '<array>', f13_w: '<number>', f14_q: '<number>', f15_r: '<object>', f16_g: '<boolean>', f17_r: '<null>', f18_g: '<null>', f19_t: '<number>', f20_r: '<object>', f21_n: '<boolean>', f22_k: '<null>', f23_n: '<boolean>', f24_y: '<array>', f25_u: '<null>', f26_d: '<number>', f27_r: '<object>', f28_p: '<boolean>', f29_e: '<boolean>', f30_m: '<null>', f31_o: '<object>', f32_w: '<string>', f33_l: '<number>', f34_u: '<number>', f35_g: '<string>', f36_w: '<boolean>', f37_c: '<boolean>', f38_u: '<string>', f39_z: '<null>', f40_r: '<array>', f41_k: '<null>', f42_c: '<object>', f43_h: '<object>', f44_j: '<boolean>', f45_y: '<null>', f46_z: '<object>', f47_i: '<object>', f48_y: '<null>', f49_s: '<boolean>', f50_q: '<object>', f51_l: '<number>', f52_j: '<boolean>', f53_v: '<object>', f54_z: '<string>', f55_p: '<null>', f56_m: '<string>', f57_m: '<string>', f58_v: '<boolean>', f59_f: '<object>', f60_z: '<null>', f61_l: '<string>', f62_f: '<null>', f63_r: '<null>', f64_s: '<array>', f65_f: '<null>', f66_i: '<array>', f67_e: '<number>', f68_c: '<string>', f69_b: '<boolean>', f70_k: '<array>', f71_d: '<array>', f72_d: '<number>', f73_k: '<object>', f74_s: '<string>', f75_z: '<number>', f76_y: '<object>', f77_s: '<null>', f78_b: '<object>', f79_v: '<string>', f80_m: '<object>', f81_u: '<array>', f82_k: '<number>', f83_t: '<boolean>', f84_n: '<string>', f85_a: '<string>', f86_k: '<array>', f87_c: '<null>', f88_x: '<null>', f89_h: '<boolean>', f90_p: '<null>', f91_f: '<null>', f92_y: '<null>', f93_q: '<array>', f94_a: '<boolean>', f95_a: '<number>', f96_y: '<object>', f97_x: '<number>', f98_q: '<object>', f99_c: '<object>', f100_e: '<array>', f101_a: '<boolean>', f102_c: '<number>', f103_o: '<array>', f104_r: '<string>', f105_z: '<boolean>', f106_u: '<array>', f107_x: '<null>', f108_y: '<string>', f109_x: '<boolean>', f110_r: '<null>', f111_r: '<number>', f112_l: '<object>', f113_s: '<number>', f114_i: '<array>', f115_e: '<number>', f116_n: '<object>', f117_z: '<number>', f118_i: '<null>', f119_h: '<null>', f120_e: '<boolean>', f121_d: '<string>', f122_v: '<object>', f123_h: '<null>', f124_w: '<number>', f125_a: '<number>', f126_z: '<object>', f127_l: '<null>', f128_y: '<number>', f129_f: '<boolean>', f130_p: '<array>', f131_w: '<number>', f132_x: '<string>', f133_y: '<string>', f134_x: '<string>', f135_b: '<null>', f136_l: '<null>', f137_q: '<null>', f138_o: '<null>', f139_l: '<number>', f140_l: '<null>', f141_p: '<null>', f142_z: '<null>', f143_s: '<array>', f144_v: '<number>', f145_h: '<number>', f146_t: '<number>', f147_c: '<string>', f148_u: '<object>', f149_o: '<object>', f150_w: '<number>', f151_b: '<boolean>', f152_u: '<object>', f153_f: '<object>', f154_z: '<boolean>', f155_d: '<boolean>', f156_p: '<array>', f157_t: '<number>', f158_x: '<null>', f159_x: '<number>', f160_y: '<string>', f161_q: '<object>', f162_u: '<string>', f163_r: '<string>', f164_k: '<boolean>', f165_j: '<array>', f166_w: '<null>', f167_l: '<string>'}, 'PdqlpihoySakwFsQDxjCvBLmIixMDzbdTiYIHaJYGdkmoibmLdzMuntKjOFOfHUCitMbDYbMUSkEmMMOgHjmmbfpyHDWdDLtzaIojohIMXXgcmDwfKhdPWMwtTlCdLUgOwHgdnJdhgFhxDFEaIbRapRdPeysAGzTPYFavbfnEepVOlgeHvuZvUdYjnrwtIZstnghZKoDsNMDUUvIbUTKrgtMJmQJxzBJAxzCgOxpTFDSnzPCLClPJzmKxGPVdqISPJAZSseGXdYavWXcMycdNdOQgxSDUEWeyyXSnlVUQcsFlFJGFyQUXrgoayegqRngRRyyedULrjoywQquuTLfmmDoSIhxJVJMmTWnVlhZeDZYFqzyoFIliWqvnsESscZalECfukQnXxLYArIcrjIRoBTgULfpnClFGHeEfyJnclXkHjlKFSINQZYHUqlWGTmYivtGLegapdsGJPmGESNWSgWeMYBKRKntlkhlKvoQcsxzHToiFJAjxQuVwjwJcknDxEebgcGWYXTCwSkpiQkgmjYgoLGgVAlVLzlEXKYiygfIpiRbRusbmROsyPWRTBcWFKwbUckJsCObbBV');
    var clear_2 = objectStore_1499.clear();
    var put_1 = objectStore_1499.put({f0_k: '<boolean>', f1_c: '<object>', f2_e: '<null>', f3_n: '<boolean>', f4_p: '<string>', f5_o: '<string>', f6_g: '<boolean>', f7_a: '<string>'}, 'xpEwItLITLedEQGvEbqAApsaVudkxEIVaye');
    var put_2 = objectStore_1499.put({f0_n: '<boolean>', f1_p: '<null>', f2_j: '<number>'}, 'FSeQjrhyuUEUVTumICJGbvSNCylCtJjthxqUnsBpcQZFzrLdEqvQMMUSzIXJcPnsLkMOxcfJFFWunCRWYqaGfjDFHCWfUnggNeTXKaiwZzJeuTFYCPIPpLAzRoCboSFNbZSViXaqRQ');
    var put_3 = objectStore_1499.put({f0_q: '<null>', f1_y: '<null>', f2_j: '<object>'}, 'eeQNHQdQxJAwsfwMeAomUdoFUNpaOrfnibKRVIpkhBprQhVnUKCKWETHoMsWBdjJcPBiOYiYvSqoVqMzdRziYVMzkEwwUjKbCZehbYHCOhZZMAXepHZkiPICrMkeGpdyvkMRrWqxXsydhXIqnhgeHnUkFMbkYiIbtnedEYVZWOrbsvnHwapMytqMxUhXMUkoaKkFCqRBhcjJDXomptdBzHiftUKilKudoGbJSAynhDBTsooRMMgmQQTaVQXIfSTAFIpkJWritHONTUKClvzmeFecefRYZPeqOldzkjSGHByAOvdwoTOEpqJWbneiDsHgOFZreTkWmJLbXqRzTttUvkBqwwnqsbPNSwaMvGKIvAaYXAXOlANmeXOGbITnsLrhgIbUYVfaZzJVOXjCQayUjmEduvpRrdCx');
    var getAllKeys_0 = objectStore_1499.getAllKeys();
    var count_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('FSeQjrhyuUEUVTumICJGbvSNCylCtJjthxqUnsBpcQZFzrLdEqvQMMUSzIXJcPnsLkMOxcfJFFWunCRWYqaGfjDFHCWfUnggNeTXKaiwZzJeuTFYCPIPpLAzRoCboSFNbZSViXaqRQ', false);
        count_1 = objectStore_1499.count(KeyRange_12);
    }
    catch (e){
    }

    txn_2237.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2237.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2237.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2238 = db.transaction(['objectStore_1500'], 'readonly', {durability:"relaxed"})
    var objectStore_1500 = txn_2238.objectStore('objectStore_1500');
    txn_2238.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2238.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2238.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2239 = db.transaction(['objectStore_1500'], 'readwrite', {durability:"strict"})
    var objectStore_1500 = txn_2239.objectStore('objectStore_1500');
    var put_4 = objectStore_1500.put({f0_b: '<array>', f1_z: '<null>'}, 'ZYdzbrxhtmdbDknPzDjgoMeHXntStPmyrNaTKLhDVMPZvnOvMRyrElhVyWxDNsVFCYJCnetyflkLanhffBtIPqHsGrvIgRhBgmwnaQFDkhifKBucWaJbKNGdfeyRceerFcLXiWOuJBwNHyDurofF');
    var count_2 = objectStore_1500.count();
    var clear_3 = objectStore_1500.clear();
    txn_2239.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2239.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2239.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3081')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};