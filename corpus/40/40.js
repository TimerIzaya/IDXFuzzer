let db;
const openRequest = window.indexedDB.open('str_3610', 7082088662380227)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_182', {keypath: 'XbRlFddtkZeuUXBcyEcktEPIKPkWBZTUUozeDzZwBhxlOpXDPRbyrmUjCvnULuQaQvIajkfhVyMjvUPSgtGuCuDdygZiKHjtnlnoEEEwJHAncAAzSMqfGpGnFtLvFqGBgYjeyvEqXVMrmPshWBqvGKiJoppckwrUMOxqwmQwVgqyhMCbZnFDLvQWMvkxouTzMYVPuzUzgLwRBrcQjEHhiVYBGWzfyeqvWMbqxwVGsgiKxUlZWCCDLWVpUupDcCXWamzUhKPWkDnOktqVoMVAZfdNTcKBtGcxzrTvmKFoBqVKLewtuVptQDdXCYvFjhFYowsflmQiGjkJSAcfzPgFuwBCneHfSqsSgObMEqhBfinYEPjZzOShCsiiluQirUyBokHuAxQLnhATlGExbLLfJhLdclXUfAcyUyCFrWdgchfVOWfARVlQKZFJoGZmqpGYCtrEcjCSxgaGNHBUZlfQTSMxVKjGlNjGxJHYkwaiURuwjmuzzDNtnGqjjjXcuPaulVLRRQTNjxuTvcCOHKtmqqVuOvpjwBSFexhTsErMrrCyvnjXVQMVioQAPhCcCeuheIBQdlmDOSxvTasOxWXAFZXNPdNLzpyMAYXuDjSOeIFweWPOUfmwbwpoDcjxvJogmvdCUOSWLppzFDzmGogMEpwDjfgIQMbteSddVcdHYdJSeiDMMUmLFXjKSlDDYfgWdgWDQALsRatdqdDFDHkhbvQQMEhsRfEjkyXWBwXkzMHPWVBkJxBwZBWfmjvSaCzudKVZVNkgREuDhqWekQunqgbSycKzWvneSAfBMAAhcKTyLKQqBAxhnRtIGjEyQgJeFjqFFPpvcWMGBtUhjYvksJSIbHIK'});
    var put_0 = objectStore_0.put({f0_o: '<number>', f1_q: '<object>', f2_h: '<number>', f3_d: '<array>', f4_x: '<object>'}, 'NSAzdciNLccsnypYRpuJThpJaMhXkuVUOZqIgSBAgCbULuNCPncfTWyZHpYgNySkYbhyfPtfDTYKSHiMrAWWXKsQTZetpmPoBEqNZSiBphQWkYrKxodxXGqOrmcb');
    var index_129 = objectStore_0.createIndex('index_129', 'test', {unique: false});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('NSAzdciNLccsnypYRpuJThpJaMhXkuVUOZqIgSBAgCbULuNCPncfTWyZHpYgNySkYbhyfPtfDTYKSHiMrAWWXKsQTZetpmPoBEqNZSiBphQWkYrKxodxXGqOrmcb');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_m: '<object>', f1_k: '<object>', f2_l: '<array>', f3_m: '<null>', f4_g: '<boolean>', f5_b: '<object>', f6_t: '<number>', f7_m: '<array>', f8_j: '<null>', f9_g: '<number>'}, 'GJlgWISoosiCOYQLNWaodEIZrIVpsuuERbirLvRsHVHBeVGpiSRlOyvGAJcNcDwKxwZWkXDBIXYNviZOJUHNKpPYlBbgHmxZMrwZauiihQXJZdpzMVIDswfQSLrucKjvFajuFviGMQGtOjhXhEuRUFIMzfNxXAEiAChZmVURoREsFIhSZCkDhqYFoZFBPLFSnfHbAFIyskwhjKaVoJApXYByeUEACtJMjzzqxuTQoTuarPlgzvwDXiexPPVwTEDWDBIrYWrFGmkijlXsRzXnYZvngBpxWlMgXRlBKQbOYUmtiKCyQEmhDlTlPERISSYiUtspMEiGoyGsXUzlPfmhWCmAchpvIzyixPWTuKIzROdxIhVGgHfeFugAyzMNaEFVAjwkncnZBRvbvRcRBzcEKjOalhcgMDuwWQrcKbvUZlNUFGivnwpnIzStWBjMzGyUzolZhjNGEjzMIkHQyYNmwPABSPyDgPBvPDOIZNQGiEVjBQyKWrVQWAfSJMOnBgZoHzppEOwNKOVqMVNQpHdudwFkmgiKuQAynybCKOgZIqlpQxlHYSQwBYaTSgYcCkaQnAoYuFXHVQVYYeqTzTFiJdUDfMseiPXvLMGCraoHRngtjrmbrEnZyBndIhtnjNGBKCjwZhrQolVimNqbCCKtsAECYACGmFXcfLZwstVFZeccwxVeCpCVVxHQGuGbyVlhhMyBymFxsQoBAzlvjYtAjeoInaxHVgLRjNwebJCwXLdMcmQZttMANZvVqckOonwPjLwrYuITpJuNoJesCKDPmYGhKjwshIvgiYkOuxtKYDPncfhZwaxgmtdyWNNNFsDXyIamUWuhrQcddOkiQRoBBRlaAAUpAgPSZVBJcOMTXzDUrOkDypZbEHMXUvxAafcdauUMZDuNDIXChLLaLczlGtLlVmZRAEzKibqwrjwmWDGdNfkzQwPYinfsoQEFKfzydbjeogHORGqIUqc');
    var index_130 = objectStore_0.createIndex('index_130', 'test', {unique: false, multiEntry: false});
    objectStore_0.deleteIndex('index_129')
    var getAllKeys_0 = objectStore_0.getAllKeys(2496713012);
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('GJlgWISoosiCOYQLNWaodEIZrIVpsuuERbirLvRsHVHBeVGpiSRlOyvGAJcNcDwKxwZWkXDBIXYNviZOJUHNKpPYlBbgHmxZMrwZauiihQXJZdpzMVIDswfQSLrucKjvFajuFviGMQGtOjhXhEuRUFIMzfNxXAEiAChZmVURoREsFIhSZCkDhqYFoZFBPLFSnfHbAFIyskwhjKaVoJApXYByeUEACtJMjzzqxuTQoTuarPlgzvwDXiexPPVwTEDWDBIrYWrFGmkijlXsRzXnYZvngBpxWlMgXRlBKQbOYUmtiKCyQEmhDlTlPERISSYiUtspMEiGoyGsXUzlPfmhWCmAchpvIzyixPWTuKIzROdxIhVGgHfeFugAyzMNaEFVAjwkncnZBRvbvRcRBzcEKjOalhcgMDuwWQrcKbvUZlNUFGivnwpnIzStWBjMzGyUzolZhjNGEjzMIkHQyYNmwPABSPyDgPBvPDOIZNQGiEVjBQyKWrVQWAfSJMOnBgZoHzppEOwNKOVqMVNQpHdudwFkmgiKuQAynybCKOgZIqlpQxlHYSQwBYaTSgYcCkaQnAoYuFXHVQVYYeqTzTFiJdUDfMseiPXvLMGCraoHRngtjrmbrEnZyBndIhtnjNGBKCjwZhrQolVimNqbCCKtsAECYACGmFXcfLZwstVFZeccwxVeCpCVVxHQGuGbyVlhhMyBymFxsQoBAzlvjYtAjeoInaxHVgLRjNwebJCwXLdMcmQZttMANZvVqckOonwPjLwrYuITpJuNoJesCKDPmYGhKjwshIvgiYkOuxtKYDPncfhZwaxgmtdyWNNNFsDXyIamUWuhrQcddOkiQRoBBRlaAAUpAgPSZVBJcOMTXzDUrOkDypZbEHMXUvxAafcdauUMZDuNDIXChLLaLczlGtLlVmZRAEzKibqwrjwmWDGdNfkzQwPYinfsoQEFKfzydbjeogHORGqIUqc');
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_182')
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
const deleteRequest = indexedDB.deleteDatabase('str_9215')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};