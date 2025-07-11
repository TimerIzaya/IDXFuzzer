let db;
const openRequest = window.indexedDB.open('str_9878', 8161658748917812)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_550', {keypath: 'sFUeyDgsBuQCKeocvuvivWGpBIHtigqDRlLktFumoSmvTAbINKYAJxVgyPbYgKZzgkdPHjuPIBMqAuKrPOpJWeqKIxSSZicvjnZpTAnBkoMYfjvkbVWinvqtbnmAhcXowjWTHvyRRVZCMZBVbhZGIc', autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_c: '<number>', f1_e: '<number>', f2_j: '<object>', f3_u: '<null>', f4_b: '<boolean>', f5_b: '<object>', f6_e: '<number>'}, 'agjxrLyEZtSiCMIWToULEzuVNvMGVOGOYqWWXtBqSKWuIGJEoAsswyrdDxDcMXHxoalZmjvsNEdfpXjjmCCzBHPwPzEqTXthwVZTysLHothAkPnsnqDIBlebDSRSJYWyGbWQsDqbyGcEEvgpqMJFiDCdHwAWXjaZiUZGjfZStKTPPPsqteWknxLukRvzGByYJFOAKdMxkinIzDLDUPGQIAKxOWZTTexUxUlfeuZJUizZXvqMGgJdSQBIYdqbfxkxHqCYCXFsfdmOMcYjEGpeonxoeolCRqWaIOWpEsYEEStQhHCEletRvrbdPDpTVQawJFaDjIBUGoJZdahDoMkFcorvellXIbzPiPgWYTGRZRLjxWzcSMoQdtDaxhiAsKPSpWeJyKEFPQJTYIFBwSMCzUouOHxyzuTNdnkSQFRUfMuVWKIFlkyGiCROHopUeYIYfPNRJFKkceZFqHjkQgsapXGvIVcfMwTyBPBaIphyrdVOcSGvKvxNhxVkdZZPhODUHOvMgqjMXaLpTarhmxxrrrSgtETmFDFhhtdKzOCVMSIrhoSBJIrkYJVHXexrfvvBmHFqNycBkjpNPivtNfsMnIzFfWUpbxluFrHfAvkktvDLhyZVSzkVCplxwnXHfUqdSWJzbMLuupKfvNOLuEBobrKYpfYmUBBZLybEHJCAOraJoXAsmzlUwmLvfeNtuNBjFXwfffcYTWvpLZkAyeYKZdxLcJLjDubkiEhQNrtazgpfcAUgTsszatwOpDdYzbvJBrnXqBqgmiBQMmrYAUHkGXsbJYvxjKaHqMDdogMLNqgTIlDRRCsQbUOXhaCWwupzKsuvBZviQUbFYOgQoVFAySum');
    var index_365 = objectStore_0.createIndex('index_365', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_550')
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
const deleteRequest = indexedDB.deleteDatabase('str_7270')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};