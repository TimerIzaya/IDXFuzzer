let db;
const openRequest = window.indexedDB.open('str_6726', 4242994238646043)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_96', {keypath: 'RpKUbikmRSjjpfGeSuxApDZhUIuPdWcSARJcXAEnWaRTSiHvdNDuvyVLdVvggDSLedBCnoxSXbEgtJhgYzjzUBiOmtkGYCVEFbkfPOfiygvEfXjVRRnHBPLIEvrzQVotoVfQzTUXANlmdDBWFydJiGkvsF'});
    var index_54 = objectStore_0.createIndex('index_54', 'test');
    var put_0 = objectStore_0.put({f0_o: '<number>', f1_l: '<boolean>', f2_x: '<string>', f3_q: '<number>', f4_h: '<boolean>', f5_b: '<number>', f6_p: '<number>', f7_z: '<null>', f8_v: '<number>'}, 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ');
    var index_55 = objectStore_0.createIndex('index_55', 'test', {multiEntry: false});
    var index_56 = objectStore_0.createIndex('index_56', 'test', {unique: false, multiEntry: false});
    var index_0 = objectStore_0.index('index_56');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', true, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0, 1998478111);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var index_57 = objectStore_0.createIndex('index_57', 'test', {multiEntry: true});
    var index_58 = objectStore_0.createIndex('index_58', 'test');
    var put_1 = objectStore_0.put({f0_o: '<array>'}, 'qJeRvCFTVMgdoridCtAURsixGDTTYvDJjYLFSxUAgfSBwaGtdfvmmleoQLhDjZiBCrTuGdLLaaQVEdOOYEutxBUouJVAjGTMUOZoLrZcXXYQsKnqmObdLneEosSPoivZNrzQNgrUUHSWZcUlwLIZQduDpijYLBSSoRVKBQBNXtbTZDWoaVgCfJXHZdsDKuoDeLDLqECPzAILbsezJsCxqlSkxOxasfGUerEwxVnKJqpxSrWhzkUHpoAXqqwBworQhbUUQCsqYAayokGofONZLDpuYnxUQyZfATeBIXxIbydOZfugZnUDWUyskIeoInaNpdXcxnVSioNADWgcDEEqwJAhAdFtbdblEiLGlwIenzWZXXkLkrcoVaHBDGUqTHkIDQYncMIODHUwxcmxYCUJghclHmoxAGQcfvgvIdlahrQyoSMyrmDiIbarjdVzOXMupXZsuMyPoZsmQoqWDUCeheNZJXlnTzqONJahbTduFThjFWHSdfsxPEGbisNTzwYRrYWXpT');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('qJeRvCFTVMgdoridCtAURsixGDTTYvDJjYLFSxUAgfSBwaGtdfvmmleoQLhDjZiBCrTuGdLLaaQVEdOOYEutxBUouJVAjGTMUOZoLrZcXXYQsKnqmObdLneEosSPoivZNrzQNgrUUHSWZcUlwLIZQduDpijYLBSSoRVKBQBNXtbTZDWoaVgCfJXHZdsDKuoDeLDLqECPzAILbsezJsCxqlSkxOxasfGUerEwxVnKJqpxSrWhzkUHpoAXqqwBworQhbUUQCsqYAayokGofONZLDpuYnxUQyZfATeBIXxIbydOZfugZnUDWUyskIeoInaNpdXcxnVSioNADWgcDEEqwJAhAdFtbdblEiLGlwIenzWZXXkLkrcoVaHBDGUqTHkIDQYncMIODHUwxcmxYCUJghclHmoxAGQcfvgvIdlahrQyoSMyrmDiIbarjdVzOXMupXZsuMyPoZsmQoqWDUCeheNZJXlnTzqONJahbTduFThjFWHSdfsxPEGbisNTzwYRrYWXpT', 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', false, false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_o: '<string>', f1_m: '<number>', f2_a: '<string>'}, 'aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ');
    var put_2 = objectStore_0.put({f0_n: '<boolean>'}, 'mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw');
    var add_1 = objectStore_0.add({f0_t: '<boolean>', f1_n: '<boolean>', f2_h: '<object>'}, 'TUxwhPpwIeCtOudYmJxkdNuFRwwcjHosZj');
    var index_1 = objectStore_0.index('index_54');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_135 = db.transaction(['objectStore_96'], 'readwrite', {durability:"default"})
    var objectStore_96 = txn_135.objectStore('objectStore_96');
    var put_3 = objectStore_96.put({f0_o: '<number>', f1_s: '<array>', f2_n: '<boolean>', f3_n: '<null>', f4_g: '<null>'}, 'yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs');
    var count_0 = objectStore_96.count();
    var getAllKeys_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', 'yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs', false, true);
        getAllKeys_1 = objectStore_96.getAllKeys(KeyRange_4, 4091057739);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs');
        getAllKeys_1 = objectStore_96.getAllKeys(KeyRange_5);
    }

    var clear_1 = objectStore_96.clear();
    var put_4 = objectStore_96.put({f0_d: '<string>', f1_t: '<string>', f2_o: '<null>', f3_e: '<boolean>', f4_l: '<number>', f5_r: '<array>', f6_u: '<string>'}, 'vBDuWqmUSWTDKcSXrFYBYgYaMHulBqVMiRCVpmbNAFSSYFpZZaCgsDwdzaNWUPlKJEeUUSJlNERyuBZsKcwRcKQfbKWSRVmxMRVhxDziNTWCSWwSHGnqFEMiFctnFmnJvIGfLNSbsrxispLjEEtsIVkHNJpbTnJTnWZNZpcIoMPrBXpDXJsVVJqDXlOKcqcpQdssXQekViPzJPUsBtDpmdceZkXPljESImlqJwZGqVTAlvDguiUtZksmtnYcVQEFfcIyKxZQWeyXpZtvCCrvHnlpjmNvLjoIieHnOVpVwhSqocktpgBjRjehhNeHOIlNtYAHfppMRIrqLsfyyykpGQZqlIyQTTvJMlpfWkJiAPehNJugBuamPpHkxvShVjpgBDIxqLCbqAqejdAnidHGYUjIKwbbvRDOQKjmuEWRsrWES');
    var put_5 = objectStore_96.put({f0_w: '<number>', f1_o: '<boolean>'}, 'KfkKkgYIeNxiARFxmIPBJYaMEuKbOUGQCTTCSUkmrFlnpkcbATEaXPtwCSylcInIOqKWlBaaHXbdoprcrcgbPtTWRiycJqxppgJwlXSjLGgzJDKNKkoOptlkndyIlIbQthBpTbmwwzHUeRJWmgyHVcyfxqeAKFTEWaEiEoojwRAGOPVzHocBxCqTwXUUsGZxpGVcYgvQCDOGDyoOcjSdBDspIObetLZZoMmerldCLIJwZljbLJhMHVHYJOTZqhlgpDBLsJSmmtWQzZnzisqXTeAvgcmlHjZrCvsbUbgffwARvIayOuVZfLCxyUmApdvjwkgncKQYqUFNyvQjEIAZVeJFyVKJXQzYUehqJcyBqUdENBClBStiNabKkXVPZpExspFpIPzmomkbuAObPxDjzAvumsTybHsWOrowIbXInSOvZVfJalBNqCxHXIaGoaPnHUMylluYiCUCtGlBDvsaPleprNpOVNEOLfhIRcSfsNpBzlFnLnkmSgwVZfEiZtWOIcLFrXEerHTlXpiKBPcccHEdpzouvqPgYjIcFSSPILPuXLUcTNFbbqrAklGrrUCQBliUhTfUgKNwWGWPgCqeyTZzUotSsNUgphOpxMYpwgnvHMtyGVHetyoGXnIWDJnDHKDNyuwdxoPhjzMjeIGFbamiwrFogxOYaXsKfrzBAuDWtcEoEIinKRBXbAZmPqmCuqotEqAIDwNjHZURtAnWnSfBHsdEznxLdGds');
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('TUxwhPpwIeCtOudYmJxkdNuFRwwcjHosZj', 'vBDuWqmUSWTDKcSXrFYBYgYaMHulBqVMiRCVpmbNAFSSYFpZZaCgsDwdzaNWUPlKJEeUUSJlNERyuBZsKcwRcKQfbKWSRVmxMRVhxDziNTWCSWwSHGnqFEMiFctnFmnJvIGfLNSbsrxispLjEEtsIVkHNJpbTnJTnWZNZpcIoMPrBXpDXJsVVJqDXlOKcqcpQdssXQekViPzJPUsBtDpmdceZkXPljESImlqJwZGqVTAlvDguiUtZksmtnYcVQEFfcIyKxZQWeyXpZtvCCrvHnlpjmNvLjoIieHnOVpVwhSqocktpgBjRjehhNeHOIlNtYAHfppMRIrqLsfyyykpGQZqlIyQTTvJMlpfWkJiAPehNJugBuamPpHkxvShVjpgBDIxqLCbqAqejdAnidHGYUjIKwbbvRDOQKjmuEWRsrWES', false, false);
        count_1 = objectStore_96.count(KeyRange_6);
    }
    catch (e){
    }

    txn_135.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_135.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_135.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_136 = db.transaction(['objectStore_96'], 'readonly', {durability:"relaxed"})
    var objectStore_96 = txn_136.objectStore('objectStore_96');
    var getAll_0 = objectStore_96.getAll();
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('vBDuWqmUSWTDKcSXrFYBYgYaMHulBqVMiRCVpmbNAFSSYFpZZaCgsDwdzaNWUPlKJEeUUSJlNERyuBZsKcwRcKQfbKWSRVmxMRVhxDziNTWCSWwSHGnqFEMiFctnFmnJvIGfLNSbsrxispLjEEtsIVkHNJpbTnJTnWZNZpcIoMPrBXpDXJsVVJqDXlOKcqcpQdssXQekViPzJPUsBtDpmdceZkXPljESImlqJwZGqVTAlvDguiUtZksmtnYcVQEFfcIyKxZQWeyXpZtvCCrvHnlpjmNvLjoIieHnOVpVwhSqocktpgBjRjehhNeHOIlNtYAHfppMRIrqLsfyyykpGQZqlIyQTTvJMlpfWkJiAPehNJugBuamPpHkxvShVjpgBDIxqLCbqAqejdAnidHGYUjIKwbbvRDOQKjmuEWRsrWES', 'aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ', false, false);
        get_1 = objectStore_96.get(KeyRange_8);
    }
    catch (e){
    }

    var count_2 = objectStore_96.count();
    var count_3 = objectStore_96.count();
    var count_4;
    try{
        KeyRange_10 = IDBKeyRange.only('qJeRvCFTVMgdoridCtAURsixGDTTYvDJjYLFSxUAgfSBwaGtdfvmmleoQLhDjZiBCrTuGdLLaaQVEdOOYEutxBUouJVAjGTMUOZoLrZcXXYQsKnqmObdLneEosSPoivZNrzQNgrUUHSWZcUlwLIZQduDpijYLBSSoRVKBQBNXtbTZDWoaVgCfJXHZdsDKuoDeLDLqECPzAILbsezJsCxqlSkxOxasfGUerEwxVnKJqpxSrWhzkUHpoAXqqwBworQhbUUQCsqYAayokGofONZLDpuYnxUQyZfATeBIXxIbydOZfugZnUDWUyskIeoInaNpdXcxnVSioNADWgcDEEqwJAhAdFtbdblEiLGlwIenzWZXXkLkrcoVaHBDGUqTHkIDQYncMIODHUwxcmxYCUJghclHmoxAGQcfvgvIdlahrQyoSMyrmDiIbarjdVzOXMupXZsuMyPoZsmQoqWDUCeheNZJXlnTzqONJahbTduFThjFWHSdfsxPEGbisNTzwYRrYWXpT');
        count_4 = objectStore_96.count(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('vBDuWqmUSWTDKcSXrFYBYgYaMHulBqVMiRCVpmbNAFSSYFpZZaCgsDwdzaNWUPlKJEeUUSJlNERyuBZsKcwRcKQfbKWSRVmxMRVhxDziNTWCSWwSHGnqFEMiFctnFmnJvIGfLNSbsrxispLjEEtsIVkHNJpbTnJTnWZNZpcIoMPrBXpDXJsVVJqDXlOKcqcpQdssXQekViPzJPUsBtDpmdceZkXPljESImlqJwZGqVTAlvDguiUtZksmtnYcVQEFfcIyKxZQWeyXpZtvCCrvHnlpjmNvLjoIieHnOVpVwhSqocktpgBjRjehhNeHOIlNtYAHfppMRIrqLsfyyykpGQZqlIyQTTvJMlpfWkJiAPehNJugBuamPpHkxvShVjpgBDIxqLCbqAqejdAnidHGYUjIKwbbvRDOQKjmuEWRsrWES', 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', true, true);
        get_2 = objectStore_96.get(KeyRange_12);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_14 = IDBKeyRange.only('yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs');
        getAll_1 = objectStore_96.getAll(KeyRange_14, 975654389);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs');
        getAll_1 = objectStore_96.getAll(KeyRange_15);
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.only('yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs');
        get_3 = objectStore_96.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ', 'KfkKkgYIeNxiARFxmIPBJYaMEuKbOUGQCTTCSUkmrFlnpkcbATEaXPtwCSylcInIOqKWlBaaHXbdoprcrcgbPtTWRiycJqxppgJwlXSjLGgzJDKNKkoOptlkndyIlIbQthBpTbmwwzHUeRJWmgyHVcyfxqeAKFTEWaEiEoojwRAGOPVzHocBxCqTwXUUsGZxpGVcYgvQCDOGDyoOcjSdBDspIObetLZZoMmerldCLIJwZljbLJhMHVHYJOTZqhlgpDBLsJSmmtWQzZnzisqXTeAvgcmlHjZrCvsbUbgffwARvIayOuVZfLCxyUmApdvjwkgncKQYqUFNyvQjEIAZVeJFyVKJXQzYUehqJcyBqUdENBClBStiNabKkXVPZpExspFpIPzmomkbuAObPxDjzAvumsTybHsWOrowIbXInSOvZVfJalBNqCxHXIaGoaPnHUMylluYiCUCtGlBDvsaPleprNpOVNEOLfhIRcSfsNpBzlFnLnkmSgwVZfEiZtWOIcLFrXEerHTlXpiKBPcccHEdpzouvqPgYjIcFSSPILPuXLUcTNFbbqrAklGrrUCQBliUhTfUgKNwWGWPgCqeyTZzUotSsNUgphOpxMYpwgnvHMtyGVHetyoGXnIWDJnDHKDNyuwdxoPhjzMjeIGFbamiwrFogxOYaXsKfrzBAuDWtcEoEIinKRBXbAZmPqmCuqotEqAIDwNjHZURtAnWnSfBHsdEznxLdGds', true, false);
        get_4 = objectStore_96.get(KeyRange_18);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ', true);
        get_5 = objectStore_96.get(KeyRange_20);
    }
    catch (e){
    }

    txn_136.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_136.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_136.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_137 = db.transaction(['objectStore_96'], 'readonly', {durability:"relaxed"})
    var objectStore_96 = txn_137.objectStore('objectStore_96');
    var count_5 = objectStore_96.count();
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('KfkKkgYIeNxiARFxmIPBJYaMEuKbOUGQCTTCSUkmrFlnpkcbATEaXPtwCSylcInIOqKWlBaaHXbdoprcrcgbPtTWRiycJqxppgJwlXSjLGgzJDKNKkoOptlkndyIlIbQthBpTbmwwzHUeRJWmgyHVcyfxqeAKFTEWaEiEoojwRAGOPVzHocBxCqTwXUUsGZxpGVcYgvQCDOGDyoOcjSdBDspIObetLZZoMmerldCLIJwZljbLJhMHVHYJOTZqhlgpDBLsJSmmtWQzZnzisqXTeAvgcmlHjZrCvsbUbgffwARvIayOuVZfLCxyUmApdvjwkgncKQYqUFNyvQjEIAZVeJFyVKJXQzYUehqJcyBqUdENBClBStiNabKkXVPZpExspFpIPzmomkbuAObPxDjzAvumsTybHsWOrowIbXInSOvZVfJalBNqCxHXIaGoaPnHUMylluYiCUCtGlBDvsaPleprNpOVNEOLfhIRcSfsNpBzlFnLnkmSgwVZfEiZtWOIcLFrXEerHTlXpiKBPcccHEdpzouvqPgYjIcFSSPILPuXLUcTNFbbqrAklGrrUCQBliUhTfUgKNwWGWPgCqeyTZzUotSsNUgphOpxMYpwgnvHMtyGVHetyoGXnIWDJnDHKDNyuwdxoPhjzMjeIGFbamiwrFogxOYaXsKfrzBAuDWtcEoEIinKRBXbAZmPqmCuqotEqAIDwNjHZURtAnWnSfBHsdEznxLdGds', 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', true, false);
        get_6 = objectStore_96.get(KeyRange_22);
    }
    catch (e){
    }

    var count_6 = objectStore_96.count();
    var count_7;
    try{
        KeyRange_24 = IDBKeyRange.bound('vBDuWqmUSWTDKcSXrFYBYgYaMHulBqVMiRCVpmbNAFSSYFpZZaCgsDwdzaNWUPlKJEeUUSJlNERyuBZsKcwRcKQfbKWSRVmxMRVhxDziNTWCSWwSHGnqFEMiFctnFmnJvIGfLNSbsrxispLjEEtsIVkHNJpbTnJTnWZNZpcIoMPrBXpDXJsVVJqDXlOKcqcpQdssXQekViPzJPUsBtDpmdceZkXPljESImlqJwZGqVTAlvDguiUtZksmtnYcVQEFfcIyKxZQWeyXpZtvCCrvHnlpjmNvLjoIieHnOVpVwhSqocktpgBjRjehhNeHOIlNtYAHfppMRIrqLsfyyykpGQZqlIyQTTvJMlpfWkJiAPehNJugBuamPpHkxvShVjpgBDIxqLCbqAqejdAnidHGYUjIKwbbvRDOQKjmuEWRsrWES', 'nsrStfyWcbloXVoDHyAMkOtpbKoBYWEpmlQndyDBsJchtRFFWKCFDFURVfwMJmWXHaKofkAZqVpSYibNGqEziyTSfMLtYkXyfvWAQgieFbqgSTNtpfMEYqimBUYhNaxEWyhFlBCbAJZJjkArPdhiWpYFDnaSAUwOSjaecmbenPZOCPQ', true, true);
        count_7 = objectStore_96.count(KeyRange_24);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.only('aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ');
        get_7 = objectStore_96.get(KeyRange_26);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.bound('TUxwhPpwIeCtOudYmJxkdNuFRwwcjHosZj', 'yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs', false, false);
        get_8 = objectStore_96.get(KeyRange_28);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_96.getAllKeys(1936153523);
    var count_8 = objectStore_96.count();
    var getAllKeys_3 = objectStore_96.getAllKeys(1934616146);
    var getAll_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw', 'KfkKkgYIeNxiARFxmIPBJYaMEuKbOUGQCTTCSUkmrFlnpkcbATEaXPtwCSylcInIOqKWlBaaHXbdoprcrcgbPtTWRiycJqxppgJwlXSjLGgzJDKNKkoOptlkndyIlIbQthBpTbmwwzHUeRJWmgyHVcyfxqeAKFTEWaEiEoojwRAGOPVzHocBxCqTwXUUsGZxpGVcYgvQCDOGDyoOcjSdBDspIObetLZZoMmerldCLIJwZljbLJhMHVHYJOTZqhlgpDBLsJSmmtWQzZnzisqXTeAvgcmlHjZrCvsbUbgffwARvIayOuVZfLCxyUmApdvjwkgncKQYqUFNyvQjEIAZVeJFyVKJXQzYUehqJcyBqUdENBClBStiNabKkXVPZpExspFpIPzmomkbuAObPxDjzAvumsTybHsWOrowIbXInSOvZVfJalBNqCxHXIaGoaPnHUMylluYiCUCtGlBDvsaPleprNpOVNEOLfhIRcSfsNpBzlFnLnkmSgwVZfEiZtWOIcLFrXEerHTlXpiKBPcccHEdpzouvqPgYjIcFSSPILPuXLUcTNFbbqrAklGrrUCQBliUhTfUgKNwWGWPgCqeyTZzUotSsNUgphOpxMYpwgnvHMtyGVHetyoGXnIWDJnDHKDNyuwdxoPhjzMjeIGFbamiwrFogxOYaXsKfrzBAuDWtcEoEIinKRBXbAZmPqmCuqotEqAIDwNjHZURtAnWnSfBHsdEznxLdGds', false, true);
        getAll_2 = objectStore_96.getAll(KeyRange_30, 656609994);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw');
        getAll_2 = objectStore_96.getAll(KeyRange_31);
    }

    var getAll_3;
    try{
        KeyRange_32 = IDBKeyRange.bound('yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs', 'mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw', true, true);
        getAll_3 = objectStore_96.getAll(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw');
        getAll_3 = objectStore_96.getAll(KeyRange_33);
    }

    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.bound('KfkKkgYIeNxiARFxmIPBJYaMEuKbOUGQCTTCSUkmrFlnpkcbATEaXPtwCSylcInIOqKWlBaaHXbdoprcrcgbPtTWRiycJqxppgJwlXSjLGgzJDKNKkoOptlkndyIlIbQthBpTbmwwzHUeRJWmgyHVcyfxqeAKFTEWaEiEoojwRAGOPVzHocBxCqTwXUUsGZxpGVcYgvQCDOGDyoOcjSdBDspIObetLZZoMmerldCLIJwZljbLJhMHVHYJOTZqhlgpDBLsJSmmtWQzZnzisqXTeAvgcmlHjZrCvsbUbgffwARvIayOuVZfLCxyUmApdvjwkgncKQYqUFNyvQjEIAZVeJFyVKJXQzYUehqJcyBqUdENBClBStiNabKkXVPZpExspFpIPzmomkbuAObPxDjzAvumsTybHsWOrowIbXInSOvZVfJalBNqCxHXIaGoaPnHUMylluYiCUCtGlBDvsaPleprNpOVNEOLfhIRcSfsNpBzlFnLnkmSgwVZfEiZtWOIcLFrXEerHTlXpiKBPcccHEdpzouvqPgYjIcFSSPILPuXLUcTNFbbqrAklGrrUCQBliUhTfUgKNwWGWPgCqeyTZzUotSsNUgphOpxMYpwgnvHMtyGVHetyoGXnIWDJnDHKDNyuwdxoPhjzMjeIGFbamiwrFogxOYaXsKfrzBAuDWtcEoEIinKRBXbAZmPqmCuqotEqAIDwNjHZURtAnWnSfBHsdEznxLdGds', 'qJeRvCFTVMgdoridCtAURsixGDTTYvDJjYLFSxUAgfSBwaGtdfvmmleoQLhDjZiBCrTuGdLLaaQVEdOOYEutxBUouJVAjGTMUOZoLrZcXXYQsKnqmObdLneEosSPoivZNrzQNgrUUHSWZcUlwLIZQduDpijYLBSSoRVKBQBNXtbTZDWoaVgCfJXHZdsDKuoDeLDLqECPzAILbsezJsCxqlSkxOxasfGUerEwxVnKJqpxSrWhzkUHpoAXqqwBworQhbUUQCsqYAayokGofONZLDpuYnxUQyZfATeBIXxIbydOZfugZnUDWUyskIeoInaNpdXcxnVSioNADWgcDEEqwJAhAdFtbdblEiLGlwIenzWZXXkLkrcoVaHBDGUqTHkIDQYncMIODHUwxcmxYCUJghclHmoxAGQcfvgvIdlahrQyoSMyrmDiIbarjdVzOXMupXZsuMyPoZsmQoqWDUCeheNZJXlnTzqONJahbTduFThjFWHSdfsxPEGbisNTzwYRrYWXpT', true, false);
        get_9 = objectStore_96.get(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_96.getAllKeys(400267017);
    var index_2 = objectStore_96.index('index_58');
    txn_137.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_137.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_137.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_138 = db.transaction(['objectStore_96'], 'readwrite', {durability:"default"})
    var objectStore_96 = txn_138.objectStore('objectStore_96');
    var put_6 = objectStore_96.put({f0_f: '<string>', f1_k: '<boolean>', f2_c: '<number>', f3_b: '<null>', f4_c: '<string>', f5_m: '<string>', f6_x: '<string>', f7_d: '<null>', f8_f: '<array>'}, 'LFjtDrppHIsawrYnqHpkDgIfWceuPgCCUdwxEzaiXtpCZUbfjKzGKxnaxMcybFrqVSKYsshHaDKshjQftwfUoLCanhnmAJUMUUjaASPxNnGxAFBTzfkGdujZYjUmxymAOsyoLPkwsgbTUGqIixNODOLUgNEiFeVozZSRxgeDhYFnMZtBURQCiVYazrphgJvmCpUtYHWNNMynZzqFulRGJTHpifGHfiXXqLmxOUINFhsKCJCBxOnhNAwVqtwRWXsFQEbZoHPeYFvyVQggtrzWVaYfCCygLXDsARiRvxyuKwgIWpqUCFAKNWBlTnHzyQnDRRDEiaeYWpUlqlyoahPmEdqETyJdtYoILSOIHXDzEPCaMJgqHZSRLzQOjDBjTtLupLxsleBwfYmQPUUZSqUBHBjgiWpPgdFtipcAGnMOkHOMVJAefzshfvqtYdRYbHYUqnpyhQzMbPrbdKgeqXDHVckuvYjahZcAlNgthVMAcgnAKwfhnOGHwrhUmCxnRLQKkVkPGIBrBxdmEPRJLeOSyVfuYZlhCvneuyKiTMVywlGQCTzyAWMiGJSFDJrJgZxpDXVuhSCqLjOrQadLPJPVbKyBycWtmBGySQKuuxnWhCsyZsbJQDymzUaJbacgrUxxtyCNBvUyzAyZtlJAlQEtNmJFiKtFscPrdJbuJTZweBio');
    var count_9 = objectStore_96.count();
    var get_10;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('LFjtDrppHIsawrYnqHpkDgIfWceuPgCCUdwxEzaiXtpCZUbfjKzGKxnaxMcybFrqVSKYsshHaDKshjQftwfUoLCanhnmAJUMUUjaASPxNnGxAFBTzfkGdujZYjUmxymAOsyoLPkwsgbTUGqIixNODOLUgNEiFeVozZSRxgeDhYFnMZtBURQCiVYazrphgJvmCpUtYHWNNMynZzqFulRGJTHpifGHfiXXqLmxOUINFhsKCJCBxOnhNAwVqtwRWXsFQEbZoHPeYFvyVQggtrzWVaYfCCygLXDsARiRvxyuKwgIWpqUCFAKNWBlTnHzyQnDRRDEiaeYWpUlqlyoahPmEdqETyJdtYoILSOIHXDzEPCaMJgqHZSRLzQOjDBjTtLupLxsleBwfYmQPUUZSqUBHBjgiWpPgdFtipcAGnMOkHOMVJAefzshfvqtYdRYbHYUqnpyhQzMbPrbdKgeqXDHVckuvYjahZcAlNgthVMAcgnAKwfhnOGHwrhUmCxnRLQKkVkPGIBrBxdmEPRJLeOSyVfuYZlhCvneuyKiTMVywlGQCTzyAWMiGJSFDJrJgZxpDXVuhSCqLjOrQadLPJPVbKyBycWtmBGySQKuuxnWhCsyZsbJQDymzUaJbacgrUxxtyCNBvUyzAyZtlJAlQEtNmJFiKtFscPrdJbuJTZweBio', true);
        get_10 = objectStore_96.get(KeyRange_36);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_38 = IDBKeyRange.bound('aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ', 'qJeRvCFTVMgdoridCtAURsixGDTTYvDJjYLFSxUAgfSBwaGtdfvmmleoQLhDjZiBCrTuGdLLaaQVEdOOYEutxBUouJVAjGTMUOZoLrZcXXYQsKnqmObdLneEosSPoivZNrzQNgrUUHSWZcUlwLIZQduDpijYLBSSoRVKBQBNXtbTZDWoaVgCfJXHZdsDKuoDeLDLqECPzAILbsezJsCxqlSkxOxasfGUerEwxVnKJqpxSrWhzkUHpoAXqqwBworQhbUUQCsqYAayokGofONZLDpuYnxUQyZfATeBIXxIbydOZfugZnUDWUyskIeoInaNpdXcxnVSioNADWgcDEEqwJAhAdFtbdblEiLGlwIenzWZXXkLkrcoVaHBDGUqTHkIDQYncMIODHUwxcmxYCUJghclHmoxAGQcfvgvIdlahrQyoSMyrmDiIbarjdVzOXMupXZsuMyPoZsmQoqWDUCeheNZJXlnTzqONJahbTduFThjFWHSdfsxPEGbisNTzwYRrYWXpT', false, false);
        get_11 = objectStore_96.get(KeyRange_38);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_40 = IDBKeyRange.only('mrUlojukfLhKbhpjboddZovJvRDgJzmXWcrTqaSBXMGmsEmqxPQdgcsRbxfHFmYNNPqfkWutRYQKEBRcOmpARfBaduSwRtZNEOLpzOnSBDPAcCDcGFmCTlqbZNcNSVxNIqGjCgbelpDSuVdlrnyPSeHbBdexZyxTVrCOKKoMTXmVrJMmNnVxicvDeLTJbfvZMgEhnWxTpClTqONYlDfxqNjwclRbYFMXtlPOChIegRNuyQaOaMBWgrbAswfDfHNNhqzMrmjxbrlSJWVxGXNbTWeyknHCOciKrJnePYodqRhQTFxviIw');
        delete_0 = objectStore_96.delete(KeyRange_40);
    }
    catch (e){
    }

    var put_7 = objectStore_96.put({f0_t: '<object>', f1_a: '<number>', f2_k: '<null>', f3_x: '<array>'}, 'glFvxZykGntyCkOQdjKrjVNZbFsayICmUDdquPliNxQhnDzHFoirYSXEeUVXTBenixZwmDGQkPnhlaRMqalcTbkseAAQUgbMAymsQngevGbYTIPsjbIPPjjtMVkUxWiiIxvLjWqhLoQbNaRbQqKuDmyPLdkfsBnDGLbJaVf');
    var count_10 = objectStore_96.count();
    txn_138.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_138.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_138.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_139 = db.transaction(['objectStore_96'], 'readonly', {durability:"strict"})
    var objectStore_96 = txn_139.objectStore('objectStore_96');
    var count_11 = objectStore_96.count();
    var count_12 = objectStore_96.count();
    var count_13 = objectStore_96.count();
    var index_3 = objectStore_96.index('index_55');
    var count_14 = objectStore_96.count();
    var count_15;
    try{
        KeyRange_42 = IDBKeyRange.bound('aQxSlfelvdDTrQYuhPueucbFsNKZqJFJsPMlCfwpfGDJJJYkLYMNNAJXoqetneJmZIVMsFHAyXpJvmJLKmCcJatcXawlTRAxiIBhgMoYUdrSGQTDugZJLmNggfOmTYbNSroXipagoYouXGLDJIxEXQjwYaeMTtVqzeGiGYzjdGAvFWFroWjMcVouKCqUvrwVzLLMyploBRzqYsRHBCtgjaAvQYVmbcVGNJRgFvjYmpPapaRRPHiLIyALHgsqqoQJ', 'yjlnppYARzbThcJIfQrmxiMyRpYGKAlHRDAZFwOKZWGEttmHTswWHtqGQVNVAyLnyCNzUdNbXCCNcrfiiqjnzvceIMNGQOmiLTFKqshUdpCIRxjwwdnmflDhUFIOhwXhJPQnBIzJERLFGbdCzBs', false, true);
        count_15 = objectStore_96.count(KeyRange_42);
    }
    catch (e){
    }

    txn_139.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_139.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_139.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4157')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};