let db;
const openRequest = window.indexedDB.open('str_6745', 7345177326513104)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2903', {keypath: 'tpFiRuFMxsNhYTcSioPpjpoBeesOwzqBTYGqBeddyLYfigihhxDZYGViBLVIXArKxejDsHbGzawrjiqEbNxIsWKtCzkXHPmEGiGVKUOgDsxRGxAMxwJXTuSgDMxMOuCdOTqwQWQAvIgdyoAYEigmTafRdhDFSVwrhDzxuVMezPBoYKDMGZWBJIirPelmtiFVUutwzuaOVUpxMHnyGUPFkXqaUkRBSLWBYDdsomKTOCcHkcXowgxIENGXzxQSxyWQHhgyzGMkEMEVKyGtEgWfIPClEOhVFKxGUIzjfjKztIGWBbuEIilbyMzGLoZNqGXJTMiBmngcSxZHTNoffGKLZvjOgZKGzLHvwyIBGhBXKRCDqBHcizbIydSMcaOQtvIDnllqzpPVnFLfdqAysEMNtGZTEINbLDyjattiGjSoGUgDaATcbyRfqrMSScalBQoIVfuOuNyByYzHaOdlNXTOukQmRDnoGPylhZxmpTvcTRKlNSQZtMjAFrlYFNkNPdJlgCSEPCRBQnurMAaxRRhAAziopeIfgEKGVfTYSsJgjTjYaWsFhaoWIuCOChgiZiFsBtMKOpRXRKGeSxOfWgaWTnOLIljaovWaAhRycONDbhKuDhoTAEkhQNVXuDWnibTlKqFtAegsftbLgqzAcRzQAAwivARJOkWyXMuXSpWeQlSzZJWBscNyqdIdCmrvZqomxDHPOLuZBXzrupEpbAuhtrUwpauHpyvWtbsrIhxKkDlOWVjBoaABRipaDqiDFqjLwtIEFOdsgfajRjBwkCW'});
    var put_0 = objectStore_0.put({f0_l: '<number>', f1_t: '<number>', f2_l: '<null>', f3_z: '<object>'}, 'aGqHXPienpnJZARntpcFktfBGHVxcnQCmAvrJmexJktJlKOQiBaMyiZBbbZCncaNyzNRgnMqyQmNcNKfrJlkNIHJybevWYxNquhmTHXxKQqsgDmulRpLqZvzUhOANHVIGbORpZaChAgMrAVDyxQfebqeeyisjokwJFqijNZsziIAaJCeNmLxBufAlXoIsdweVjhlDtAzgCYoXfHjawsBbYlxTnykVFrBuFujSjPEjQqrOIjkoidwenXGVMPlsHonjRWYEsimJGQGwXdBoRgwIsXUUzIZyIrwONUtOwFJMvBCDoIJXLmEGtIPkxnfHhQcwjvJchkxScayFQmwCgaXkFuovdVpOxOrGKtdXUaBqIilXtSLbYVyrUaMIUwnUEFgqtaLBIfpgPjMDjyWkNwNkpXgCjuLTCergFBZufgjxAvHwfOFTmhwRXwNJuZLbOYzKRqNtTzZdHVioCDdbBmUdEcRRwLjSuJxyrgZQCbfFRKnCh');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('aGqHXPienpnJZARntpcFktfBGHVxcnQCmAvrJmexJktJlKOQiBaMyiZBbbZCncaNyzNRgnMqyQmNcNKfrJlkNIHJybevWYxNquhmTHXxKQqsgDmulRpLqZvzUhOANHVIGbORpZaChAgMrAVDyxQfebqeeyisjokwJFqijNZsziIAaJCeNmLxBufAlXoIsdweVjhlDtAzgCYoXfHjawsBbYlxTnykVFrBuFujSjPEjQqrOIjkoidwenXGVMPlsHonjRWYEsimJGQGwXdBoRgwIsXUUzIZyIrwONUtOwFJMvBCDoIJXLmEGtIPkxnfHhQcwjvJchkxScayFQmwCgaXkFuovdVpOxOrGKtdXUaBqIilXtSLbYVyrUaMIUwnUEFgqtaLBIfpgPjMDjyWkNwNkpXgCjuLTCergFBZufgjxAvHwfOFTmhwRXwNJuZLbOYzKRqNtTzZdHVioCDdbBmUdEcRRwLjSuJxyrgZQCbfFRKnCh', 'aGqHXPienpnJZARntpcFktfBGHVxcnQCmAvrJmexJktJlKOQiBaMyiZBbbZCncaNyzNRgnMqyQmNcNKfrJlkNIHJybevWYxNquhmTHXxKQqsgDmulRpLqZvzUhOANHVIGbORpZaChAgMrAVDyxQfebqeeyisjokwJFqijNZsziIAaJCeNmLxBufAlXoIsdweVjhlDtAzgCYoXfHjawsBbYlxTnykVFrBuFujSjPEjQqrOIjkoidwenXGVMPlsHonjRWYEsimJGQGwXdBoRgwIsXUUzIZyIrwONUtOwFJMvBCDoIJXLmEGtIPkxnfHhQcwjvJchkxScayFQmwCgaXkFuovdVpOxOrGKtdXUaBqIilXtSLbYVyrUaMIUwnUEFgqtaLBIfpgPjMDjyWkNwNkpXgCjuLTCergFBZufgjxAvHwfOFTmhwRXwNJuZLbOYzKRqNtTzZdHVioCDdbBmUdEcRRwLjSuJxyrgZQCbfFRKnCh', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_1935 = objectStore_0.createIndex('index_1935', 'test', {unique: false, multiEntry: false});
    var index_1936 = objectStore_0.createIndex('index_1936', 'test', {unique: true});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('aGqHXPienpnJZARntpcFktfBGHVxcnQCmAvrJmexJktJlKOQiBaMyiZBbbZCncaNyzNRgnMqyQmNcNKfrJlkNIHJybevWYxNquhmTHXxKQqsgDmulRpLqZvzUhOANHVIGbORpZaChAgMrAVDyxQfebqeeyisjokwJFqijNZsziIAaJCeNmLxBufAlXoIsdweVjhlDtAzgCYoXfHjawsBbYlxTnykVFrBuFujSjPEjQqrOIjkoidwenXGVMPlsHonjRWYEsimJGQGwXdBoRgwIsXUUzIZyIrwONUtOwFJMvBCDoIJXLmEGtIPkxnfHhQcwjvJchkxScayFQmwCgaXkFuovdVpOxOrGKtdXUaBqIilXtSLbYVyrUaMIUwnUEFgqtaLBIfpgPjMDjyWkNwNkpXgCjuLTCergFBZufgjxAvHwfOFTmhwRXwNJuZLbOYzKRqNtTzZdHVioCDdbBmUdEcRRwLjSuJxyrgZQCbfFRKnCh');
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var add_0 = objectStore_0.add({f0_g: '<string>', f1_j: '<number>', f2_i: '<boolean>', f3_a: '<object>', f4_h: '<object>', f5_p: '<array>', f6_x: '<number>', f7_q: '<boolean>', f8_t: '<array>', f9_z: '<string>'}, 'ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe');
    var add_1 = objectStore_0.add({f0_p: '<object>', f1_c: '<object>', f2_u: '<object>', f3_j: '<number>', f4_m: '<boolean>', f5_a: '<string>'}, 'wYFWbOIZXpVRNUhGOVwrwrlqYhdVfwrrUadVxKESKxGRqfXlfawQYYQMkGcKULHmyBvEreqbWPGVFHtQaHNnvrGxvAygBxYbHHwpsBAhvOtDbjjxRjVmWfSHeNnyqogtkvxJungCXeJjcmPuCckMONjbPcsIecpDIhjQGCQejxaqzqHuGOcUMoSFcPHfcKcrjVfuAwybawWcrDsaTMgGNGfbNlk');
    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.only('wYFWbOIZXpVRNUhGOVwrwrlqYhdVfwrrUadVxKESKxGRqfXlfawQYYQMkGcKULHmyBvEreqbWPGVFHtQaHNnvrGxvAygBxYbHHwpsBAhvOtDbjjxRjVmWfSHeNnyqogtkvxJungCXeJjcmPuCckMONjbPcsIecpDIhjQGCQejxaqzqHuGOcUMoSFcPHfcKcrjVfuAwybawWcrDsaTMgGNGfbNlk');
        count_0 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var count_1 = objectStore_0.count();
    var clear_0 = objectStore_0.clear();
    var put_1 = objectStore_0.put({f0_w: '<array>', f1_l: '<number>', f2_y: '<string>', f3_o: '<boolean>', f4_g: '<object>', f5_t: '<array>'}, 'mZKPPZGUveGjTfNzRROhDiBoEziyvAwcdjOTbFHRYVFSMBOACQWRlmWkXpiBidTRwWJfVkebIfxZzcdWOZBpkmzHCgxtAtdASdijDDBHFhKvOtlVkLmXIrmEqfgHecklhJuSQTzTcEHHzrMrModRPVKObNqiBkgLPO');
    objectStore_0.deleteIndex('index_1935')
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', 'ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', true, true);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_2904');
    var objectStore_2 = db.createObjectStore('objectStore_2905', {keypath: 'eWryWfUJVHowHRoNHINGRiPDbqLcjzvhThsSUhHGQsAnkSIocTHSnFfczMLqklfHAVDWGwvImOwYsilcePjzNcChJmsaZLKPRMUdDdhGYRMnjTZzsZPaumMBHLGjtfuXNBXorQKwOiVyMRSmDMMsfetwJYtYAcUpCrGAvOThOqzQNmKCIBbpelAxYMwbWaeGtaqFaaIFykUDQvZSdgfsEEEyEOCEcYBIJbatwnWDRQnZmJeTQZdHdudDLlAqbIZQMnbVLLsvRNdmuhNHBGnVUfSJvpxDzIoBuCerEmhYdDJYbVenONxtYbxSnxkyCLRntriPLBpylrVcLZZtGrOdvOkKfwadtniPSbFojVUgnAWufi', autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4325 = db.transaction(['objectStore_2905'], 'readonly', {durability:"relaxed"})
    var objectStore_2905 = txn_4325.objectStore('objectStore_2905');
    txn_4325.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4325.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4325.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4326 = db.transaction(['objectStore_2905', 'objectStore_2903'], 'readwrite', {durability:"relaxed"})
    var objectStore_2903 = txn_4326.objectStore('objectStore_2903');
    var clear_1 = objectStore_2903.clear();
    var add_2 = objectStore_2903.add({f0_d: '<string>', f1_a: '<boolean>', f2_e: '<array>'}, 'GtQWwtjbHXPekXAskzTuBySFBSnEXkgIuYrMjTvInUyFEQRRTGnLXjmgrlUnoWIGkEhhscfsO');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', 'GtQWwtjbHXPekXAskzTuBySFBSnEXkgIuYrMjTvInUyFEQRRTGnLXjmgrlUnoWIGkEhhscfsO', false, false);
        count_2 = objectStore_2903.count(KeyRange_8);
    }
    catch (e){
    }

    var add_3 = objectStore_2903.add({f0_x: '<string>', f1_s: '<null>', f2_n: '<boolean>', f3_n: '<array>'}, 'DSPgLcFcelxMCnrdHGhuIcLbdasuNbgFMhbWaVJjgMNPSjOiHyBYKDvmUTfcBfpUUBMEwrWyRMhYoqNIvuvPrMrMFDhkaNfACCipEnkFQQkcuyuWLgTSijVFpzXbYPZFRCjBjufAIHwQzsKPMvYyEjzhvpYhSZYgafztLaWmBmrebwQEIFKXOHxesfeqbUkSBYoGAJtYnyDXOpbbPCnscLJVDVwifhwpwfcsGlnxFjSUEWUQsvbTDMVzMBLWXooOKsEeNaTAlRMsLNoBalKbWppyHXOZaDRPHWpAOxxcCvFRzbMrmPvSXYdUKwEhiACynAYajXiWKNJmkVNEWnXKdosyGbUFSAZwlAUpCgwSWaVPzhMtPqEvFDekO');
    var clear_2 = objectStore_2903.clear();
    var put_2 = objectStore_2903.put({f0_w: '<boolean>', f1_a: '<boolean>', f2_r: '<boolean>', f3_f: '<array>', f4_j: '<number>', f5_l: '<null>', f6_v: '<null>', f7_v: '<null>', f8_d: '<null>'}, 'dwoGaGhIDlzdDKiahiseNahtJOiOuwbxdvoulfkqRqFSxajPCARMXBGDmunWQiBvOTDCAdlFVnShAwsxYgjPBOQItmeWKcgjMSIqxBWwSJbGgHoSQNwyEuPxjcGnoInAWAYIuYGELEKNKDekaFetnuwTiOGAkSEXFfZJWOqWSmzZkyUdtOvVrlDlBdOnQHhdmhOWsPKqWLGipBwuHPAZRJkNudivfQzhNNWPwTQTXTSJYmKWgiinTMGuzqcqcACBbpqgfpXQRnIlqqivEpTQLLVhQcgZaCcWZPiNHjpOyeoyJLYgrWLhJRvAShnkFGidNlarqLubTQUZtPivqPYSiDfFoPfSyFFnfKBeKOqfIiPyEZPwxxUkgVMIlqvpgvtcfOVsNvLqxSViwiNTredeTczzCxcxYXktnDczxNzTOHlUNeTImHLMmTcVFCFsiYqvKmRvIpcTRUnOVxmLUFlUKbSrauOAUgQKGTRXBHXBoUuAfcqjxgRwPKTjsxDYbhOGanUbIrmqaoNHxVgSYwHbDfEZNnzYHjuANAFEhoosUGsgThKkkjpMudGzWWOUCLSpvflyZWVwXAFJCyQZfzGhgaoZakoRBGftDIwmwtWRrtLIsNKfihNDgSXuOmUgrFEJExglSzANilBUTXJzsZChhzCeLUMrrkMuExlTVlxyogKLeGklnkztXSYbGUSzCxOGUXkxgSuZvYKnjMuOcTpasIHFwMjfzHPWIQ');
    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('DSPgLcFcelxMCnrdHGhuIcLbdasuNbgFMhbWaVJjgMNPSjOiHyBYKDvmUTfcBfpUUBMEwrWyRMhYoqNIvuvPrMrMFDhkaNfACCipEnkFQQkcuyuWLgTSijVFpzXbYPZFRCjBjufAIHwQzsKPMvYyEjzhvpYhSZYgafztLaWmBmrebwQEIFKXOHxesfeqbUkSBYoGAJtYnyDXOpbbPCnscLJVDVwifhwpwfcsGlnxFjSUEWUQsvbTDMVzMBLWXooOKsEeNaTAlRMsLNoBalKbWppyHXOZaDRPHWpAOxxcCvFRzbMrmPvSXYdUKwEhiACynAYajXiWKNJmkVNEWnXKdosyGbUFSAZwlAUpCgwSWaVPzhMtPqEvFDekO', true);
        delete_1 = objectStore_2903.delete(KeyRange_10);
    }
    catch (e){
    }

    var put_3 = objectStore_2903.put({f0_h: '<null>', f1_z: '<string>', f2_k: '<boolean>', f3_x: '<boolean>', f4_n: '<boolean>', f5_l: '<null>', f6_o: '<number>', f7_o: '<array>', f8_t: '<string>'}, 'dIJhUdzWIhugjeqddXCpkCjNcYZIgOgQYUtNMFGCekwONzwQoCdmtGhrAnUMVwcgQwjXVMAvwSCCMlgKeirydFFQaIxgIHrIUpibDIslVAvCLQQOovfQwJkcdYMSmcphiavsekagiJbUFbOBVKqAwgNBZMqSsEvJvNoycbGvzLFVAmQFvQRXLGfTDjkGTCHpPeSPVAZEbgUkwxsLiwxxeiWDkvZbSguaResfokKcYXYCIbZGQQwMQhNAOIJeXfPloVbpYTbEXHjLcaKrwCtzyicBVLDVEhAixkCDmqtjELiqLDnkqTnXfNjnxZhrHfuSBKKAadQGlEVZjMjgAzLAoxfkzIznMefzXSVOlaLxmUQwqbKuqimapiFhUXKPvwTeoKEYRFZOWYNsQAuBIdxGEwoKSUThLGQRYLQtTIqNvNHjCMBhEfXnHPEqXRMrsibZbSgaoveJShRcDTYrFmWctzqtQwHdWfKOCHZtTzRjYenZLQjUPeoKVPWWKmQfvHGMLylkbKzoKuISCunBVtSMzptqyuSCzzDFTCZIAtmhogWxEiCwnEPvjBtKgbTsmUyrbSvJZXletVedsIATvnIigLYhQwoRrQNryDcIAdRXUEzQCatjWdGRaJVnKJEjgiTgzyuSjOrAwnlGXxUsrSRpIhoxIdSUAgONQuaQLTEHmrtTzdOzeAORRCJYppVdFpfvknFkYLAgKxkznfJMMNFRfvSyMqVVsPqfQXAXyPoYMJAyIXqRmCuvqYxQphIHgTYMBDJIYGQJExgMVtqVktcckAOQuyeKvuLkZsIHIMoYeCmEjwJfeZxtpJkwFHX');
    txn_4326.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4326.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4326.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4327 = db.transaction(['objectStore_2904', 'objectStore_2903'], 'readonly', {durability:"strict"})
    var objectStore_2904 = txn_4327.objectStore('objectStore_2904');
    txn_4327.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4327.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4327.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4328 = db.transaction(['objectStore_2905'], 'readonly', {durability:"default"})
    var objectStore_2905 = txn_4328.objectStore('objectStore_2905');
    txn_4328.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4328.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4328.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4329 = db.transaction(['objectStore_2903'], 'readonly', {durability:"strict"})
    var objectStore_2903 = txn_4329.objectStore('objectStore_2903');
    var count_3 = objectStore_2903.count();
    var count_4 = objectStore_2903.count();
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.only('dwoGaGhIDlzdDKiahiseNahtJOiOuwbxdvoulfkqRqFSxajPCARMXBGDmunWQiBvOTDCAdlFVnShAwsxYgjPBOQItmeWKcgjMSIqxBWwSJbGgHoSQNwyEuPxjcGnoInAWAYIuYGELEKNKDekaFetnuwTiOGAkSEXFfZJWOqWSmzZkyUdtOvVrlDlBdOnQHhdmhOWsPKqWLGipBwuHPAZRJkNudivfQzhNNWPwTQTXTSJYmKWgiinTMGuzqcqcACBbpqgfpXQRnIlqqivEpTQLLVhQcgZaCcWZPiNHjpOyeoyJLYgrWLhJRvAShnkFGidNlarqLubTQUZtPivqPYSiDfFoPfSyFFnfKBeKOqfIiPyEZPwxxUkgVMIlqvpgvtcfOVsNvLqxSViwiNTredeTczzCxcxYXktnDczxNzTOHlUNeTImHLMmTcVFCFsiYqvKmRvIpcTRUnOVxmLUFlUKbSrauOAUgQKGTRXBHXBoUuAfcqjxgRwPKTjsxDYbhOGanUbIrmqaoNHxVgSYwHbDfEZNnzYHjuANAFEhoosUGsgThKkkjpMudGzWWOUCLSpvflyZWVwXAFJCyQZfzGhgaoZakoRBGftDIwmwtWRrtLIsNKfihNDgSXuOmUgrFEJExglSzANilBUTXJzsZChhzCeLUMrrkMuExlTVlxyogKLeGklnkztXSYbGUSzCxOGUXkxgSuZvYKnjMuOcTpasIHFwMjfzHPWIQ');
        get_2 = objectStore_2903.get(KeyRange_12);
    }
    catch (e){
    }

    var index_0 = objectStore_2903.index('index_1936');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', false);
        get_3 = objectStore_2903.get(KeyRange_14);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('DSPgLcFcelxMCnrdHGhuIcLbdasuNbgFMhbWaVJjgMNPSjOiHyBYKDvmUTfcBfpUUBMEwrWyRMhYoqNIvuvPrMrMFDhkaNfACCipEnkFQQkcuyuWLgTSijVFpzXbYPZFRCjBjufAIHwQzsKPMvYyEjzhvpYhSZYgafztLaWmBmrebwQEIFKXOHxesfeqbUkSBYoGAJtYnyDXOpbbPCnscLJVDVwifhwpwfcsGlnxFjSUEWUQsvbTDMVzMBLWXooOKsEeNaTAlRMsLNoBalKbWppyHXOZaDRPHWpAOxxcCvFRzbMrmPvSXYdUKwEhiACynAYajXiWKNJmkVNEWnXKdosyGbUFSAZwlAUpCgwSWaVPzhMtPqEvFDekO', false);
        count_5 = objectStore_2903.count(KeyRange_16);
    }
    catch (e){
    }

    var count_6 = objectStore_2903.count();
    var count_7 = objectStore_2903.count();
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('mZKPPZGUveGjTfNzRROhDiBoEziyvAwcdjOTbFHRYVFSMBOACQWRlmWkXpiBidTRwWJfVkebIfxZzcdWOZBpkmzHCgxtAtdASdijDDBHFhKvOtlVkLmXIrmEqfgHecklhJuSQTzTcEHHzrMrModRPVKObNqiBkgLPO', false);
        get_4 = objectStore_2903.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2903.getAll();
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', 'dIJhUdzWIhugjeqddXCpkCjNcYZIgOgQYUtNMFGCekwONzwQoCdmtGhrAnUMVwcgQwjXVMAvwSCCMlgKeirydFFQaIxgIHrIUpibDIslVAvCLQQOovfQwJkcdYMSmcphiavsekagiJbUFbOBVKqAwgNBZMqSsEvJvNoycbGvzLFVAmQFvQRXLGfTDjkGTCHpPeSPVAZEbgUkwxsLiwxxeiWDkvZbSguaResfokKcYXYCIbZGQQwMQhNAOIJeXfPloVbpYTbEXHjLcaKrwCtzyicBVLDVEhAixkCDmqtjELiqLDnkqTnXfNjnxZhrHfuSBKKAadQGlEVZjMjgAzLAoxfkzIznMefzXSVOlaLxmUQwqbKuqimapiFhUXKPvwTeoKEYRFZOWYNsQAuBIdxGEwoKSUThLGQRYLQtTIqNvNHjCMBhEfXnHPEqXRMrsibZbSgaoveJShRcDTYrFmWctzqtQwHdWfKOCHZtTzRjYenZLQjUPeoKVPWWKmQfvHGMLylkbKzoKuISCunBVtSMzptqyuSCzzDFTCZIAtmhogWxEiCwnEPvjBtKgbTsmUyrbSvJZXletVedsIATvnIigLYhQwoRrQNryDcIAdRXUEzQCatjWdGRaJVnKJEjgiTgzyuSjOrAwnlGXxUsrSRpIhoxIdSUAgONQuaQLTEHmrtTzdOzeAORRCJYppVdFpfvknFkYLAgKxkznfJMMNFRfvSyMqVVsPqfQXAXyPoYMJAyIXqRmCuvqYxQphIHgTYMBDJIYGQJExgMVtqVktcckAOQuyeKvuLkZsIHIMoYeCmEjwJfeZxtpJkwFHX', false, true);
        get_5 = objectStore_2903.get(KeyRange_20);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('DSPgLcFcelxMCnrdHGhuIcLbdasuNbgFMhbWaVJjgMNPSjOiHyBYKDvmUTfcBfpUUBMEwrWyRMhYoqNIvuvPrMrMFDhkaNfACCipEnkFQQkcuyuWLgTSijVFpzXbYPZFRCjBjufAIHwQzsKPMvYyEjzhvpYhSZYgafztLaWmBmrebwQEIFKXOHxesfeqbUkSBYoGAJtYnyDXOpbbPCnscLJVDVwifhwpwfcsGlnxFjSUEWUQsvbTDMVzMBLWXooOKsEeNaTAlRMsLNoBalKbWppyHXOZaDRPHWpAOxxcCvFRzbMrmPvSXYdUKwEhiACynAYajXiWKNJmkVNEWnXKdosyGbUFSAZwlAUpCgwSWaVPzhMtPqEvFDekO', 'ilcfGKVNMhjybaZeQUxkcJEuMcWKDyAuLdBWVvHCEnmJbFGciXDdGgCyZyPUXTPOjpGZiUbRFLvlpTQuAkkKwFDzhVTBscRJBYfEYJgNupEe', false, false);
        get_6 = objectStore_2903.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_2903.getAllKeys(3387340447);
    txn_4329.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4329.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4329.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4672')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};