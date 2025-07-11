let db;
const openRequest = window.indexedDB.open('str_3766', 8771115226053801)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2901', {keypath: 'oGLqbuZwZadzRUgUAWfDQDcSWWCwxaOLJVTTkCHpZOSKYGirLWxiWAyTBDUHnANkuXIjStiwhFjRxNJyiOnwRyHsnvqeCMUvbrpNdaWAWLVvxpbarbNgCZsgGyOcYQvEfGZaomGXCjormHjwTnxNhlWEKUpDQTGZgzdLXAPKGUyfaJGExSbdZwXazRYggEzIOBesxvOtjNmafXeBitLcdClxUjYHrXSfEIocQjKjEgCgNftreyJaZXhadONzmlbbUtSkOiJuEEqgxKVOgojyAjrUyuzITLHEgwTYlUCYBnRUlZOsKAFVOfdNThPPSjShOpDbWQcyEuDOgpLBekIhwBpGGuwbucnaJghyQISLDmGbtYkatiqACUoNJkQmLakGnJAWilnaiNQQTDOUxFvtsiJVwkFinaJyzrwuaEkGylTyhiIblYHBoWRfWxowqCVKgcfKtdgqHFAlNVuDYbpGDRTxVKtouCorkScmFeaOwMLdRCYljbkIwYMHuasuXwuxjgjgdAtyXnWaAJKTJzNEFEIEgxeKXPHXbsDBeTlyctSYUkUKiNwTaNAAigOqEFQrhsCLaBGeALLaBUSriuLSotaageRhbNpziSiAzhisGmcgwOeLOFtokmsIckDHmRYcLUyMSZklpSSCGSqdrnFGgFgoQGvmwFJfsRilYbjUgqIUsbVVSoqnDhgnzxfATJTsdbhwnedkJjeDi', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_e: '<boolean>', f1_c: '<object>', f2_c: '<string>', f3_u: '<boolean>', f4_x: '<string>', f5_t: '<boolean>', f6_l: '<object>', f7_t: '<object>'}, 'eWhQtDCmPmWfNJUZgmJSndXWDQSpjilNH');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('eWhQtDCmPmWfNJUZgmJSndXWDQSpjilNH', 'eWhQtDCmPmWfNJUZgmJSndXWDQSpjilNH', false, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('eWhQtDCmPmWfNJUZgmJSndXWDQSpjilNH', 'eWhQtDCmPmWfNJUZgmJSndXWDQSpjilNH', true, false);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    var add_1 = objectStore_0.add({f0_x: '<null>', f1_p: '<array>', f2_x: '<boolean>', f3_j: '<string>', f4_o: '<string>', f5_o: '<object>'}, 'HpgMeNfvkJiVjQJTjEDZuDJpfMSQlTlPuxxWbRiezCKjwNrEVQOwrJymjguroOqQmcsFdzzfLZhvpsZBZmaaerUejKPkMgNkuNRpGSrksBxnMVbwpIAxNdQEewCiBLZiFKmQfYCMznSkjDGkzuWmOtqlYOzuudSnWgibxVgqSQvgRCDRjrQOYjJPvpXRXasZUGULUimcjxUpBJwMOyzPKJyRCkhFjOCzJklgCIDaQyovLXEoxXlwTrJlsefLiqEYkuBbyMMzwKCYYxvtkJbMRJJeLpwRNeoPqmZZceblCeZtcWIiUXjePqZEJMcNchqPpidVJbJUUYFcDittYnDNgknwwTgXOWYUtSzQTmQJrCHBGWgFIwhNlanlQNArhGUQtwxlTYFNXPpKcPrBagqTDDxEhyWNENQzpqEduErvWyTDFyVAuQPTCDNjJiiclTYHExAHomvCMAQTYMRCJSAeeUUrhNavzfMspqFnBcolKUqzXlUggMzXfPcWUPDzvqFxUomBTpWynYQFiBHFPrtNRiMTLWiqULUoLfBTDOZsxOQpajwbvjqFCkcECNIItlDQlrZVnVqNRSDzrgpARTcpepAIQOgIROgjoglotcCZerIyAyGuEEEzcVKIIZBBYPfVnKOXCkFurzxGKOZSojedRGIYuPMIGrnZcCpranWXcMEXtKnRlOTKbNgvWgXfxQUUkpTDBmSBMbSHWZvmDkFXKSvXdacjsRGHKJKQPKgMJhBrVgePfXhARlIKuQDWkKKderfLwvIOKkutvoEOzejUQRhZokiDeAWGQKDtJCoqzRzmKCPeNMaSDwdHRpwNcqSxLLsOaMLqcFKDEHbgBiFBmzcxxNZmCMPsSJGBu');
    db.deleteObjectStore('objectStore_2901')
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
const deleteRequest = indexedDB.deleteDatabase('str_6892')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};