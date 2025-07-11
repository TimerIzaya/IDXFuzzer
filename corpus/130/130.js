let db;
const openRequest = window.indexedDB.open('str_3380', 48374377890197)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_747');
    var index_494 = objectStore_0.createIndex('index_494', 'test');
    var add_0 = objectStore_0.add({f0_f: '<string>', f1_v: '<null>', f2_e: '<null>', f3_t: '<object>', f4_b: '<string>'}, 'VBdIzpXswRshso');
    var add_1 = objectStore_0.add({f0_v: '<boolean>'}, 'YuoasAYvRvSTDaTHxRSabhaSFOnVGcLHgchFZHBoTFhuyqMnMgcIjBbIlWZBLcPoHKKOaQlCqiYdBLCChraJsREdIiolgLlNIxgVKHeFwmOFPWKPgNcfiqSlSuQcxNvyKzDbZNkVWmEwyrPjRiTtMEQPcmOLPeBVbDfJdPgtZlbcjJscXWMVAYxSMrLOMBYaERMHoPrrBqMBVlnbftkjlWxWnBcswBlplqqLUBsCoyRokINpEkgqIxmwfRhgdrKfvHiszAYJIegxSDIMIhcNvclZHIvsqeLaxWvcmkYZgdXhgsuEDnvKYwCwlnmmwkKNOgpugDdvgyanFsYiWpoKaLguFSHuPdPWQCpilgJwKVyXwNqRXONYLfsyLTutnQPWDxOoqkFxqeWAmUrMnucZRVqZeEXWCxUWnmAORdFyAtWcVCdfGzHitPgQHmuYLCaCpckJPjiozZkKokgqThJlqaYUneLCPQiJgsbkEGojJCkAsDWsESnNOLJNyxFJMAPFiWzpeQaxITqUTkjFYCdcwqqnrjpvjYUGJKrfZAToeeDUUzGVpUfBRlzuhJSDbuRTyzvMBifXdOVivzAftqLfcHCmqWntZUSbOjiOlmDnVqDqGDrvCbHOOLpAIiiEAEQhkwCRuhstEOSjnYiGzQjKOACrtiFOftzktKXWuGNzntCMFyXWigzwwerWMhhzbbvUIiZEohlAroMcXOkrSOaoSmJKsKiKEWSZmjbCsGMbIYQhvfSrQfWiFBjRgSgEpXpuKaXDnLePojNImLjnIoxVxdocUzjjXxnzFrOQXvxLjXQoSErwkXdtQXQriWtrDEeWnbXwAeSoyHuxBXpDnaIJmBDJLYkHnTrCyFEXfRDeJBjSCuMimoTsdkayU');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('VBdIzpXswRshso');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var index_495 = objectStore_0.createIndex('index_495', 'test', {unique: true, multiEntry: false});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('YuoasAYvRvSTDaTHxRSabhaSFOnVGcLHgchFZHBoTFhuyqMnMgcIjBbIlWZBLcPoHKKOaQlCqiYdBLCChraJsREdIiolgLlNIxgVKHeFwmOFPWKPgNcfiqSlSuQcxNvyKzDbZNkVWmEwyrPjRiTtMEQPcmOLPeBVbDfJdPgtZlbcjJscXWMVAYxSMrLOMBYaERMHoPrrBqMBVlnbftkjlWxWnBcswBlplqqLUBsCoyRokINpEkgqIxmwfRhgdrKfvHiszAYJIegxSDIMIhcNvclZHIvsqeLaxWvcmkYZgdXhgsuEDnvKYwCwlnmmwkKNOgpugDdvgyanFsYiWpoKaLguFSHuPdPWQCpilgJwKVyXwNqRXONYLfsyLTutnQPWDxOoqkFxqeWAmUrMnucZRVqZeEXWCxUWnmAORdFyAtWcVCdfGzHitPgQHmuYLCaCpckJPjiozZkKokgqThJlqaYUneLCPQiJgsbkEGojJCkAsDWsESnNOLJNyxFJMAPFiWzpeQaxITqUTkjFYCdcwqqnrjpvjYUGJKrfZAToeeDUUzGVpUfBRlzuhJSDbuRTyzvMBifXdOVivzAftqLfcHCmqWntZUSbOjiOlmDnVqDqGDrvCbHOOLpAIiiEAEQhkwCRuhstEOSjnYiGzQjKOACrtiFOftzktKXWuGNzntCMFyXWigzwwerWMhhzbbvUIiZEohlAroMcXOkrSOaoSmJKsKiKEWSZmjbCsGMbIYQhvfSrQfWiFBjRgSgEpXpuKaXDnLePojNImLjnIoxVxdocUzjjXxnzFrOQXvxLjXQoSErwkXdtQXQriWtrDEeWnbXwAeSoyHuxBXpDnaIJmBDJLYkHnTrCyFEXfRDeJBjSCuMimoTsdkayU', 'YuoasAYvRvSTDaTHxRSabhaSFOnVGcLHgchFZHBoTFhuyqMnMgcIjBbIlWZBLcPoHKKOaQlCqiYdBLCChraJsREdIiolgLlNIxgVKHeFwmOFPWKPgNcfiqSlSuQcxNvyKzDbZNkVWmEwyrPjRiTtMEQPcmOLPeBVbDfJdPgtZlbcjJscXWMVAYxSMrLOMBYaERMHoPrrBqMBVlnbftkjlWxWnBcswBlplqqLUBsCoyRokINpEkgqIxmwfRhgdrKfvHiszAYJIegxSDIMIhcNvclZHIvsqeLaxWvcmkYZgdXhgsuEDnvKYwCwlnmmwkKNOgpugDdvgyanFsYiWpoKaLguFSHuPdPWQCpilgJwKVyXwNqRXONYLfsyLTutnQPWDxOoqkFxqeWAmUrMnucZRVqZeEXWCxUWnmAORdFyAtWcVCdfGzHitPgQHmuYLCaCpckJPjiozZkKokgqThJlqaYUneLCPQiJgsbkEGojJCkAsDWsESnNOLJNyxFJMAPFiWzpeQaxITqUTkjFYCdcwqqnrjpvjYUGJKrfZAToeeDUUzGVpUfBRlzuhJSDbuRTyzvMBifXdOVivzAftqLfcHCmqWntZUSbOjiOlmDnVqDqGDrvCbHOOLpAIiiEAEQhkwCRuhstEOSjnYiGzQjKOACrtiFOftzktKXWuGNzntCMFyXWigzwwerWMhhzbbvUIiZEohlAroMcXOkrSOaoSmJKsKiKEWSZmjbCsGMbIYQhvfSrQfWiFBjRgSgEpXpuKaXDnLePojNImLjnIoxVxdocUzjjXxnzFrOQXvxLjXQoSErwkXdtQXQriWtrDEeWnbXwAeSoyHuxBXpDnaIJmBDJLYkHnTrCyFEXfRDeJBjSCuMimoTsdkayU', true, false);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_g: '<null>', f1_k: '<array>', f2_u: '<object>', f3_g: '<number>', f4_n: '<object>', f5_s: '<boolean>', f6_s: '<boolean>'}, 'ovNQxFTSjBLDhmkBfINxyHCIcyuRgdSLFXPCIuzZcAPvSSswRSlhCYjrjZCxXPQkclcqlIZVbpKjwugNfnPQqHnWithnakxglwiyXaeenePHNoORYxzOJQwdGNRpOXGMNRrwJMOKgfGdQvfuKJalGrqeEUpIomtirEFPnOqnBUobjAcpDnkeQjMj');
    var index_0 = objectStore_0.index('index_494');
    var add_2 = objectStore_0.add({f0_e: '<object>', f1_i: '<object>', f2_o: '<null>', f3_a: '<string>', f4_c: '<object>', f5_w: '<string>'}, 'mNqDakENjpmiRfMrvsjACljaSqsyzlGnwrlULjKcJXRqAWLzSzcovjOUjODRdtmxbYloBFtOYKfRQWyhkBmtatwRRBrAhYWVHoVzTWwmrqwaJTRbDGLogNKBhzKJbDvEvHwWCTbIkiGNkWMxjKFyjrasJXnVzfkEkgwgyDNWMbCFBYVOxsrToFxHVvIFYvGFPlpnnIcNDHpirEYVTcXWGkPdNMhsTBUntSyTnlZsDkbsJZGyjTCgLskFpOlficNZmIbkcvTq');
    var add_3 = objectStore_0.add({f0_g: '<object>', f1_i: '<array>', f2_h: '<string>', f3_a: '<boolean>', f4_w: '<object>', f5_d: '<array>', f6_k: '<boolean>', f7_p: '<object>', f8_x: '<number>'}, 'ljLBeNmChPkKoxiepeRvRYCqAUpGbvSkQzqhPTRrXkLaKLphrdyyEXBwkyTnyAxAgzwGKnYTbtUlzVdmkfCaxjhfxXXHWtfXlwJierqtRfSdgmhYNqfGDaqvTwukoIUCMltaptBNHZXOKeskPflOiMFwNdLgOlPGzFqhUBFnKlLAYFlSfKPaSXFpXzlaxfDxennZxjbydsoATLI');
    db.deleteObjectStore('objectStore_747')
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
const deleteRequest = indexedDB.deleteDatabase('str_4853')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};