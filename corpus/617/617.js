let db;
const openRequest = window.indexedDB.open('str_778', 949511501401898)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3711', {keypath: 'hzmwxDOTjlZglBakGVjCgYZfqIIslZBelSEISJdbrADqkrIAKCtnQJauNaouHENexZXSLEvQzMeHRAbtpIJyFZhuiiENWjGmYVXUJtyKOQqloIFnZDMHhVHdCnhWGwfQSVAUXWREJQyWiopWbDqipwRAMINQpvCjkTMgYWJjEBTMUVFnWqAWhLcdJrcMEXVMinYSvfEgPdisRvvdgtHfonldGyCIyoLPlvmMBIOTaDRpaUGWoInbQInDaJkqSzjhRBPOjUuWryrTplgRRBPGalXBQddjFkofHREklxPkrsWxWUJIHgKSVTTVUlbGdAGwnIHFzmkIdOPgOwFxIsWVjuXbJLKHIiPhEPALbbNOtnbJWSOZROGnrZHsCcvAmcHPzFnfVEaTQZOnOCUuhkSRKwPSjIJNZpwquIUueWAJoczlOuwigROJwfnhtlRgFnaiQFpGRSCWOZLPDZnQuiQsGYvODSatzjqvmgMTsAiSdRNWckDTlCRIleYbjjjOGMPsPUQznneOIUWmZgZvbHRDFuMXqwYshLFHgTncgAOrfkqneJEnJoeAiAkfZJUWjqsPYdCeRwTcBKQrODuzytrjRaaDMAYyJjGHkptUaiYfpgWcvZaqiXigdNiLfdzRMmLmWyRPBBAESFGOisxJtNGdSIbPXJeAvoISFRDDSDNkqUBGipgVsMqcRmhsuHieUNKTnrsDOexmUAXagbYDOJkjWcaxDdJsutyJLYJrrEaVjqxtHuGkyctWzOMrAZtIcWbrMcKQDOmSJtVRJabcVPqDqdglwqmSZMVbaHTfwrWTSQXxIZWQdXBDKHZxKryTiKhYlQSDWVHzUerzvvWXjpsRPCAWNKWHhsAWZMBFNUibcknqSoDYYJdgyluaaRdUDiarVZixXjcnztumrJAROKYLbuqGAOOIbzlAzjRerwWWAEHobGMhivLvlxpXxqprYTZyZyhKRdFiSXIfDPqZrOkytMDHcncdjxNeMl', autoIncrement: false});
    db.deleteObjectStore('objectStore_3711')
    var objectStore_1 = db.createObjectStore('objectStore_3712', {keypath: 'wYhWBwTPZvQQUvchfmKYkrKjvenLazUmGeftlrMwltKlWfwkslEgmBMngrRoPBIxVjcgBEeGJTYwdLnlgmnwVGCYkWkWISbqGzJzvWApyntLbPHqtnBZxBqYITYwTPMulgbtQhSriMtktOckuwruVtRfcQazjroivIpywmHTRcEuZiBFUDtSUcAAoKcCNhDxRvOgCuXorcDFeWWxIOSVsQmRstCBTAsORLJbNKISmOHeaHtSzgqgrtsvxnEXSRpvaILQBtzAuNNzbqIHVjvcLZxxHQZAQLSCvOyuoXNFOVYGcwhCasojIcvFVzvLzhOtfReARyyoIzvZMAZEWZzBEfnXglsDpHQHxbdnnhSEYZMBpGwZcjgDSRTqMFAKjgPmSdXaHaetllayRnVdADlGsoFCcVZMyWflrYqzhRQzuEVnnjSGTGbyPydKhxozDvSlGSurHwQNvjWCUiyxQrelyaSSmpUweZTaFJIPBeqyZAyIHUezwQLyOymsEbaXItKtnrnfCvjnwzRVDaTQOKmCuXZufjBESWcrtjNPXPclRGgTeavKfsRHjzvOgcPoumcgsyANwrgnKGVVFJMNYRIRiZUFlOKasWFqycfxOXkcyemJgtNIeyuJqxPfpyJXYVmZsFtjRtDqRgzwriDmmhIYgRftfxFEqPcqDfgvnglfmUuwgjpzdTPtvIyHwnWoPYQldpFvUfuUhNDjYttlcywPfTxMhBoHRWVkKdEPbfBZvhtDKOmqhIyyMDiFKdmgkvWMJVdMzaYJSLBYqHhGlsndhUqwRoUkNrxTIQexLBkPqNPpVmaceJkPTwzyBMFjxKGtponqvdadyQVmvJwDLcEOLLsjpdSsVTOMZFggIJGkjbKBbDgUZZwNUfwtWmZ', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_3713', {keypath: 'oKjbqxdeukIGEwvNIZjqWYpCpurgDdircMUHZMoXNXcSaxUZILVmVSAALMwFiWyRAZmWnOjUvmptYmSqcjneqCBJymTulaArjwUpEfpETuDeIFzNzecHPabIyIuBjDFVyjKmlvbFrCbesRtAGBQwcDEdFCwjghCmfjHhbyGxdvvTJfGuJrAZOwRhOzZKnNPhkzjPbPpCPGFxKBxxItPDNRfHXVKheRqWvkSVoKhoVrJPmjRCqiagsMJztCYdVCOXMxtmjyKACmZuKQpJUOYznYXWScQYSKiZIDogNXokqIQVWivIQshWWykTLyAodPovSXQyJLNggQjouOQCTvqEFvCfTEhRDgrCHDlocHtBrbhvYxxLsHxbhqsUssVjEzdvZtQuzQCztldoiockvPsLqEfRzkEyuShlCHoWjmqJoOzQJgmHspSuWIOOQPsczZUlewxhSOGPowrOguoPOcYuocxdmEgNxvGfeesMeUATZkstiwZmCzAtYoyEbuTJThssoVCvTkDqlKLunqtcmDxJeJQPbgijqCwHKOlDxdsOkGqnShbFdVDSDSpcXumpSByqyhqMOwfHoqWtWTounNIeuIPMbMVIEsUzARvxoRJjrBqBBEHhDvegrVYZSioIDfzCcVFxUvRULlPPiNwtLLmoqrIeEpKEytFjWTTwQLhSnXOvzOFZPSEHzqszdrjcXgTKcsbPpmnKibAbSPUcTHkmwZTfXCnViCOsesFverNjSWpRVxSNcrQSPnTSibbHJlytzQYSFHnQMwQJzMAAtByLUnnUUAahSlocBnIQJsEcvJJzjyxFWPK'});
    var index_2497 = objectStore_2.createIndex('index_2497', 'test', {unique: true, multiEntry: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5550 = db.transaction(['objectStore_3712'], 'readonly', {durability:"default"})
    var objectStore_3712 = txn_5550.objectStore('objectStore_3712');
    txn_5550.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5550.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5550.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5551 = db.transaction(['objectStore_3713'], 'readonly', {durability:"strict"})
    var objectStore_3713 = txn_5551.objectStore('objectStore_3713');
    var index_0 = objectStore_3713.index('index_2497');
    txn_5551.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5551.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5551.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5552 = db.transaction(['objectStore_3713', 'objectStore_3712'], 'readonly', {durability:"strict"})
    var objectStore_3712 = txn_5552.objectStore('objectStore_3712');
    txn_5552.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5552.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5552.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5553 = db.transaction(['objectStore_3713'], 'readonly', {durability:"relaxed"})
    var objectStore_3713 = txn_5553.objectStore('objectStore_3713');
    txn_5553.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5553.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5553.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5554 = db.transaction(['objectStore_3713'], 'readonly', {durability:"relaxed"})
    var objectStore_3713 = txn_5554.objectStore('objectStore_3713');
    var index_1 = objectStore_3713.index('index_2497');
    var index_2 = objectStore_3713.index('index_2497');
    txn_5554.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5554.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5554.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9094')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};