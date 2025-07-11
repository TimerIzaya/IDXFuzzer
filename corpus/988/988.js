let db;
const openRequest = window.indexedDB.open('str_4546', 8128642971892117)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5878', {autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_5879');
    var objectStore_2 = db.createObjectStore('objectStore_5880', {autoIncrement: false});
    var clear_2 = objectStore_1.clear();
    var put_0 = objectStore_1.put({f0_p: '<string>', f1_k: '<string>', f2_e: '<array>', f3_w: '<boolean>', f4_y: '<number>', f5_e: '<object>', f6_w: '<boolean>'}, 'VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK');
    var clear_3 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_5881', {keypath: 'hHGRudiXIJNUPeDCuEGPOvIcFRuftjOvsupyzlAUPxBLZYjsdIdmgigXymFJQeXqcEQbuopYncCMKrDmsUAOtFlXaoBOrgHAyNipSjMqLPloKoBjKDMFaxGTOWkOjVQtJuwDKNKPDpfVarVrVXGWcoHjeprOZdJfEkpDkYrzCGKIIXfRZmDzBgcyICJOukDmULRQIzyoMEFNFBkksacMAOrgaxbrkptFrXAkpptwySywYVSbuaqGShBsJZmIkjjnmFGifVOufWvrIwcyjTPWqelESYMWARbnXGKQrlamvnovdOJLthbLWWKoynmaQkAeGqjyGABFKbKWMPsJZjUlhlbIBbpKrQqRKXNfhmHcHreICWaoGeFbbkSInzOhVIaMcKTwWvJJjTMbJWopAFcJPTpvCUFOYyDKIDcmHWFkFHtXAfqFJtIaphIuLXwNDAIAHLbRXCZImMoYiHtcYoOVUQSWZCNUAATYPnKJWPQdkBghAlAatbObeFWGfFwtAIIhuOutGLJdXAmgCrcQnDklbMXtIzqYeCSLKgFbwfvKqyCmqFDbXgJlQJSPhmUOTEbwSSrVrwHZrDohAleRlqiDRtjPfAhOepioUbYviRIrYCVdbnRbOFslkZkbQVZubtWtFqnYFnBBDlcPXbSSAoCLYbxMrObjWUQkNc'});
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', 'VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', false, true);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var clear_4 = objectStore_2.clear();
    var add_0 = objectStore_1.add({f0_r: '<number>', f1_j: '<null>', f2_y: '<number>', f3_g: '<boolean>', f4_n: '<array>', f5_l: '<array>', f6_u: '<string>', f7_l: '<array>', f8_h: '<array>', f9_g: '<number>'}, 'RSXqYyuAkoANFXAqnvdCoydAypOfiimJRWfavFrikTuLDoBxXQFZVtyDfFxPazjczcahCVKfzGDZnYXQjlFneNeMccMOruFdBmNpPGgOcPkJFnuaAfbmqllNkUqONUWOXoEeXnIuRZRSxVIzqHHFtxdkQqNbcuwIehymoquyCstZBIeOLwRDmhwRtOpNsURnCXDppHDmWsOOtusnpKcVAfEoXFmotMBZpuwZjAkKWHBPdGnmSNgiKslZkwRBYCqSuOUFOLHHkhvBJHoOJbgMysCtojlJQdpxYVQ');
    var clear_5 = objectStore_0.clear();
    var add_1 = objectStore_3.add({f0_m: '<string>', f1_g: '<object>'}, 'ITZXCDDAemUZtwqvgsqpKxVgsPtzvIXHmQRNLMutbHQoveHVSVqQwkoCHGTsUlBEiQzMmhBwzByltAwvAwWKaTPuslomxULsTDAFzpxXcLwGlDtvaWPDBNeCRIVjATOtokETXVLwqlyTnaYGdziJGqbjdHYjQKEEAFJfERVclvoTadbPVoGFfarvSUbBGvJwcBQiUFSlDszXafVgLgIdQeLIZlVnwbUTTJsaEjMgMNooeEkYXSqfjdTKOLdSgEPWvombKwKKGLBHAjLrjDkQIkTZHcdUkoPYTLTDcgWaBIOzCVZYmchOcwyzCsqfMKICQnGGpnlqlpXCWlSkvoGKrcRposXgBWaOOURGbawTFOjTRwDHOUKepurrCsNdaDZQCbOyjuJBwSOuJTcpsSVDdmsaaTLpbDBjsTDYUdEamRlCFIVKUwNolCPrPzTEkTHMvxmPjooabJiuEvmgLwWdHbqnpoSwcMypBEvFDxNIMSiTjhXhVIovSOzLFFJkarvolzuXCTfDBZoyQLBGLFkXgVaiQMwvsMEFuFiFWQsQAPMnrdpablkZysdcqtPKaXSjsFRjWqZNAloyTgOuEjQMtXmPyuIpopfZirrioxvCsflTPkYflKtdrmkPHfCKGznwYSYIDwzHVZtjespPQRFbVueZGCwnsSVUJBbpEXftfrmtUrUILLWKArnbDeHizoxfgacXeZbSMwnwtBLILvaWwbHGSghAFGJFwSlYBxOIHeVpKkLEEzueSoydXgGheHLIPZKwBceLJlKrAkYlDCPvvauWmdSyNUsLVWLKtHvnbscYPOtwHnhXcrsdzJsuWjzNIQyRsiwXdeelFoUCIjippgHioVsAJWLxffXHbOpSwnpsNQvKsnlZUlCbhehyoSbjzJZBVuFsKfvgXI');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8885 = db.transaction(['objectStore_5878', 'objectStore_5880', 'objectStore_5879', 'objectStore_5881'], 'readwrite', {durability:"relaxed"})
    var objectStore_5879 = txn_8885.objectStore('objectStore_5879');
    var add_2 = objectStore_5879.add({f0_p: '<string>', f1_n: '<object>', f2_j: '<array>', f3_a: '<string>', f4_v: '<null>', f5_k: '<boolean>', f6_a: '<object>'}, 'syCZZucRxIgQkWNNzUBwpTrEuyApKHzVrKMPTHmXhJDzXHrLzMgJQbhXSVQRUyZlpeetoetLAVgrASWJvlmonNgrwlXrYkETBhQWvFKfoSVFQHvnYrwLnerZPjXhzGRiSTSYGqopakuDHlhKSuIIFcaCYAUMxsOQdfbvjrawBekNAqDbGwjWaqogqrKwpknciDeqWQiljSnagJQazexDJsBFZEJhkqLkbrjeYLmNxrNidvqNyhiRBSgxGlUVSBfdJGoqXKLflBXxiQLhfxESBbphEslgEkyYcEROHifisUvUKPiQKpJsVCOpaORrnckiPdwNMoGOYbbwfczRVDtiWTNvlSOXAcCXjnXtHiitwqYOUoDVyqNDKGgvhKGTYpGqIdNZSQGmNIDEFOCWMAZxKZgqwNjVXXraSJssAJwYkUoZpvIMcQdFZVYUSWNApqXSOdVZihIgLXWUfDmvfJDbWbqitmIqNOTMlyaPbvYIccUceHiVmpSQbOLPXlTXvIJeVIgnytyaHCwXdZfIjetfhysmYRKTFQgqsYIDjKQQgmnelhAuEyhkGiPVhPtrOwbYeWkvNBm');
    var delete_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('RSXqYyuAkoANFXAqnvdCoydAypOfiimJRWfavFrikTuLDoBxXQFZVtyDfFxPazjczcahCVKfzGDZnYXQjlFneNeMccMOruFdBmNpPGgOcPkJFnuaAfbmqllNkUqONUWOXoEeXnIuRZRSxVIzqHHFtxdkQqNbcuwIehymoquyCstZBIeOLwRDmhwRtOpNsURnCXDppHDmWsOOtusnpKcVAfEoXFmotMBZpuwZjAkKWHBPdGnmSNgiKslZkwRBYCqSuOUFOLHHkhvBJHoOJbgMysCtojlJQdpxYVQ', 'VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', false, false);
        delete_1 = objectStore_5879.delete(KeyRange_2);
    }
    catch (e){
    }

    var put_1 = objectStore_5879.put({f0_v: '<number>', f1_j: '<null>', f2_f: '<number>', f3_n: '<array>', f4_d: '<number>', f5_y: '<boolean>'}, 'WKxWzLmRpQkJVRAhkgssFkJfbGxvccdvUTSowIsMvewcrerjTIabitpzCxTYzjXQlJfIePVtIIqsEpDBxNEPGkoGwRWqiCsXTSneGDLiheDHGbscvnxKSl');
    var add_3 = objectStore_5879.add({f0_y: '<object>', f1_d: '<number>', f2_r: '<object>', f3_k: '<string>', f4_g: '<array>', f5_w: '<object>', f6_k: '<array>'}, 'mmYiMnmyHXOviCzQlOZfVQKExeWEuKnkgAEupjNgBIrrEpDPzmBYMgxslZjwJcdwHANRIzVshBIuZsuIprPPWzXaBpAhDulimFXCUXAPRnRdZlOZcYiLCBrToeUsYxYUzkVU');
    var clear_6 = objectStore_5879.clear();
    var add_4 = objectStore_5879.add({f0_v: '<string>', f1_f: '<null>', f2_r: '<string>', f3_p: '<string>', f4_r: '<null>', f5_v: '<number>', f6_l: '<string>', f7_r: '<object>', f8_r: '<array>'}, 'QBbkEOQVgkwPQawSrlgIcVTpdMRwsfvsPRBsQVMYkrxMqAXggQvnrHtJ');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', false);
        get_0 = objectStore_5879.get(KeyRange_4);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('QBbkEOQVgkwPQawSrlgIcVTpdMRwsfvsPRBsQVMYkrxMqAXggQvnrHtJ', 'VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', false, false);
        getAllKeys_0 = objectStore_5879.getAllKeys(KeyRange_6, 2909788651);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('mmYiMnmyHXOviCzQlOZfVQKExeWEuKnkgAEupjNgBIrrEpDPzmBYMgxslZjwJcdwHANRIzVshBIuZsuIprPPWzXaBpAhDulimFXCUXAPRnRdZlOZcYiLCBrToeUsYxYUzkVU');
        getAllKeys_0 = objectStore_5879.getAllKeys(KeyRange_7);
    }

    var clear_7 = objectStore_5879.clear();
    var add_5 = objectStore_5879.add({f0_i: '<boolean>', f1_h: '<number>', f2_u: '<number>', f3_g: '<array>', f4_x: '<null>'}, 'BnxcnQJIQDChQjbYgwptnMbsnrpmpUlzQscNkJvJzRbk');
    txn_8885.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8885.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8885.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8886 = db.transaction(['objectStore_5879', 'objectStore_5880'], 'readwrite', {durability:"default"})
    var objectStore_5880 = txn_8886.objectStore('objectStore_5880');
    var add_6 = objectStore_5880.add({f0_t: '<string>', f1_d: '<null>', f2_d: '<number>', f3_e: '<number>', f4_s: '<number>', f5_f: '<number>', f6_b: '<object>', f7_t: '<number>', f8_g: '<object>'}, 'XFNjamdcRzYpOSXXsUKGbRNFRsDupGIZlwJTqzGriJOlvOjFRFHOXzZdifyTJxvOdjAunPqctCNfUhtcKwCFAYOeEwkJtWwQVHHJLgqUYZtpkldBOikrrHcbQHQlNswHBlWDSrCMBUcPBPNkQRRrefGLiXHLEavBHgWRtdcJPNrKqlHKsVsivCtlhvtpSUKSmWsxUawQpwteojEJrMjzyOjesAQxUHPabGRqsFhQgenbjlqHFUDMjUeuWOHqzClvUPkzDHYqkhwffLYrUCYAtASkJdfQmFMkeVoRLSdyYDVOApjjuHwHUmdRtjTVxHqUiKbAUbMhmVNSkyDOyBTITBdhLkjbNSomEuYzJjptSfgAVPQAalBtwSvzxuBjpUJfUQzVTxJTrVNrWAozIXFvkAwSfOrVlOPqejRSMkeJooDdFqzfEnWpcZtRZXMDyzUiKRYgNhVihzuKPHeHaqbZLElieMrNjkMKnxkzhgqxSCxUmQZvnHHsMEaohYoVMIhRiMyqKBLvyvZ');
    var count_0 = objectStore_5880.count();
    var count_1 = objectStore_5880.count();
    var put_2 = objectStore_5880.put({f0_t: '<boolean>', f1_p: '<string>', f2_a: '<object>', f3_n: '<null>', f4_p: '<array>', f5_s: '<object>', f6_o: '<null>'}, 'YqlGRXpZFzpPuYlYVwCPoOFKRVVlmliDtXSGpbkBOKcYvuRncvkdrRWvkKLptyPnJwysLzmbhBBINJwRqSxHznlJlupxXqIcrlJzuyBxfsSuiQOLJuonPIAvXyqrLNPfMCcgmFIkkshJqljLvJWmcTEwQfHDBTKXBeUtkbSYykcHtGaWDNqWXbYjSnclyaoqXhnqwlUXIwhjHiWoLFtNXaiscQVvAIIySDKMKLbNQodWTKGNhAPjCfhIYWyEpZBGHpJSxkHNfpjuwEeIOQwKvXxpuszZUslmPMgPngQRbAiSQVWyNVRSGvQgkzKIEHrXPyaWfBUukslQWuxwMdNIOlyFRHSOiIhwHYuDkVCyoiuJzMPlyYYucUlbeQrBIfLiXNfkqHpEJBkInPPYzHshOhmbgFZZOJjbrLylCqaMKgapZeYBsMkRDhDxmZNbOCMJBvGLeikUKpbsnmxVfydOVjLLploQQguIANbVxnsZuvgCUtnMgLxCCiTPAfkSBYJXTTFWrEj');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('YqlGRXpZFzpPuYlYVwCPoOFKRVVlmliDtXSGpbkBOKcYvuRncvkdrRWvkKLptyPnJwysLzmbhBBINJwRqSxHznlJlupxXqIcrlJzuyBxfsSuiQOLJuonPIAvXyqrLNPfMCcgmFIkkshJqljLvJWmcTEwQfHDBTKXBeUtkbSYykcHtGaWDNqWXbYjSnclyaoqXhnqwlUXIwhjHiWoLFtNXaiscQVvAIIySDKMKLbNQodWTKGNhAPjCfhIYWyEpZBGHpJSxkHNfpjuwEeIOQwKvXxpuszZUslmPMgPngQRbAiSQVWyNVRSGvQgkzKIEHrXPyaWfBUukslQWuxwMdNIOlyFRHSOiIhwHYuDkVCyoiuJzMPlyYYucUlbeQrBIfLiXNfkqHpEJBkInPPYzHshOhmbgFZZOJjbrLylCqaMKgapZeYBsMkRDhDxmZNbOCMJBvGLeikUKpbsnmxVfydOVjLLploQQguIANbVxnsZuvgCUtnMgLxCCiTPAfkSBYJXTTFWrEj', 'YqlGRXpZFzpPuYlYVwCPoOFKRVVlmliDtXSGpbkBOKcYvuRncvkdrRWvkKLptyPnJwysLzmbhBBINJwRqSxHznlJlupxXqIcrlJzuyBxfsSuiQOLJuonPIAvXyqrLNPfMCcgmFIkkshJqljLvJWmcTEwQfHDBTKXBeUtkbSYykcHtGaWDNqWXbYjSnclyaoqXhnqwlUXIwhjHiWoLFtNXaiscQVvAIIySDKMKLbNQodWTKGNhAPjCfhIYWyEpZBGHpJSxkHNfpjuwEeIOQwKvXxpuszZUslmPMgPngQRbAiSQVWyNVRSGvQgkzKIEHrXPyaWfBUukslQWuxwMdNIOlyFRHSOiIhwHYuDkVCyoiuJzMPlyYYucUlbeQrBIfLiXNfkqHpEJBkInPPYzHshOhmbgFZZOJjbrLylCqaMKgapZeYBsMkRDhDxmZNbOCMJBvGLeikUKpbsnmxVfydOVjLLploQQguIANbVxnsZuvgCUtnMgLxCCiTPAfkSBYJXTTFWrEj', false, true);
        get_1 = objectStore_5880.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_5880.getAllKeys();
    var delete_2;
    try{
        KeyRange_10 = IDBKeyRange.only('YqlGRXpZFzpPuYlYVwCPoOFKRVVlmliDtXSGpbkBOKcYvuRncvkdrRWvkKLptyPnJwysLzmbhBBINJwRqSxHznlJlupxXqIcrlJzuyBxfsSuiQOLJuonPIAvXyqrLNPfMCcgmFIkkshJqljLvJWmcTEwQfHDBTKXBeUtkbSYykcHtGaWDNqWXbYjSnclyaoqXhnqwlUXIwhjHiWoLFtNXaiscQVvAIIySDKMKLbNQodWTKGNhAPjCfhIYWyEpZBGHpJSxkHNfpjuwEeIOQwKvXxpuszZUslmPMgPngQRbAiSQVWyNVRSGvQgkzKIEHrXPyaWfBUukslQWuxwMdNIOlyFRHSOiIhwHYuDkVCyoiuJzMPlyYYucUlbeQrBIfLiXNfkqHpEJBkInPPYzHshOhmbgFZZOJjbrLylCqaMKgapZeYBsMkRDhDxmZNbOCMJBvGLeikUKpbsnmxVfydOVjLLploQQguIANbVxnsZuvgCUtnMgLxCCiTPAfkSBYJXTTFWrEj');
        delete_2 = objectStore_5880.delete(KeyRange_10);
    }
    catch (e){
    }

    txn_8886.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8886.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8886.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8887 = db.transaction(['objectStore_5878'], 'readonly', {durability:"default"})
    var objectStore_5878 = txn_8887.objectStore('objectStore_5878');
    txn_8887.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8887.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8887.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8888 = db.transaction(['objectStore_5880'], 'readonly', {durability:"default"})
    var objectStore_5880 = txn_8888.objectStore('objectStore_5880');
    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.only('YqlGRXpZFzpPuYlYVwCPoOFKRVVlmliDtXSGpbkBOKcYvuRncvkdrRWvkKLptyPnJwysLzmbhBBINJwRqSxHznlJlupxXqIcrlJzuyBxfsSuiQOLJuonPIAvXyqrLNPfMCcgmFIkkshJqljLvJWmcTEwQfHDBTKXBeUtkbSYykcHtGaWDNqWXbYjSnclyaoqXhnqwlUXIwhjHiWoLFtNXaiscQVvAIIySDKMKLbNQodWTKGNhAPjCfhIYWyEpZBGHpJSxkHNfpjuwEeIOQwKvXxpuszZUslmPMgPngQRbAiSQVWyNVRSGvQgkzKIEHrXPyaWfBUukslQWuxwMdNIOlyFRHSOiIhwHYuDkVCyoiuJzMPlyYYucUlbeQrBIfLiXNfkqHpEJBkInPPYzHshOhmbgFZZOJjbrLylCqaMKgapZeYBsMkRDhDxmZNbOCMJBvGLeikUKpbsnmxVfydOVjLLploQQguIANbVxnsZuvgCUtnMgLxCCiTPAfkSBYJXTTFWrEj');
        count_2 = objectStore_5880.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_5880.getAllKeys();
    var getAllKeys_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('XFNjamdcRzYpOSXXsUKGbRNFRsDupGIZlwJTqzGriJOlvOjFRFHOXzZdifyTJxvOdjAunPqctCNfUhtcKwCFAYOeEwkJtWwQVHHJLgqUYZtpkldBOikrrHcbQHQlNswHBlWDSrCMBUcPBPNkQRRrefGLiXHLEavBHgWRtdcJPNrKqlHKsVsivCtlhvtpSUKSmWsxUawQpwteojEJrMjzyOjesAQxUHPabGRqsFhQgenbjlqHFUDMjUeuWOHqzClvUPkzDHYqkhwffLYrUCYAtASkJdfQmFMkeVoRLSdyYDVOApjjuHwHUmdRtjTVxHqUiKbAUbMhmVNSkyDOyBTITBdhLkjbNSomEuYzJjptSfgAVPQAalBtwSvzxuBjpUJfUQzVTxJTrVNrWAozIXFvkAwSfOrVlOPqejRSMkeJooDdFqzfEnWpcZtRZXMDyzUiKRYgNhVihzuKPHeHaqbZLElieMrNjkMKnxkzhgqxSCxUmQZvnHHsMEaohYoVMIhRiMyqKBLvyvZ', true);
        getAllKeys_3 = objectStore_5880.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('XFNjamdcRzYpOSXXsUKGbRNFRsDupGIZlwJTqzGriJOlvOjFRFHOXzZdifyTJxvOdjAunPqctCNfUhtcKwCFAYOeEwkJtWwQVHHJLgqUYZtpkldBOikrrHcbQHQlNswHBlWDSrCMBUcPBPNkQRRrefGLiXHLEavBHgWRtdcJPNrKqlHKsVsivCtlhvtpSUKSmWsxUawQpwteojEJrMjzyOjesAQxUHPabGRqsFhQgenbjlqHFUDMjUeuWOHqzClvUPkzDHYqkhwffLYrUCYAtASkJdfQmFMkeVoRLSdyYDVOApjjuHwHUmdRtjTVxHqUiKbAUbMhmVNSkyDOyBTITBdhLkjbNSomEuYzJjptSfgAVPQAalBtwSvzxuBjpUJfUQzVTxJTrVNrWAozIXFvkAwSfOrVlOPqejRSMkeJooDdFqzfEnWpcZtRZXMDyzUiKRYgNhVihzuKPHeHaqbZLElieMrNjkMKnxkzhgqxSCxUmQZvnHHsMEaohYoVMIhRiMyqKBLvyvZ');
        getAllKeys_3 = objectStore_5880.getAllKeys(KeyRange_15);
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.only('XFNjamdcRzYpOSXXsUKGbRNFRsDupGIZlwJTqzGriJOlvOjFRFHOXzZdifyTJxvOdjAunPqctCNfUhtcKwCFAYOeEwkJtWwQVHHJLgqUYZtpkldBOikrrHcbQHQlNswHBlWDSrCMBUcPBPNkQRRrefGLiXHLEavBHgWRtdcJPNrKqlHKsVsivCtlhvtpSUKSmWsxUawQpwteojEJrMjzyOjesAQxUHPabGRqsFhQgenbjlqHFUDMjUeuWOHqzClvUPkzDHYqkhwffLYrUCYAtASkJdfQmFMkeVoRLSdyYDVOApjjuHwHUmdRtjTVxHqUiKbAUbMhmVNSkyDOyBTITBdhLkjbNSomEuYzJjptSfgAVPQAalBtwSvzxuBjpUJfUQzVTxJTrVNrWAozIXFvkAwSfOrVlOPqejRSMkeJooDdFqzfEnWpcZtRZXMDyzUiKRYgNhVihzuKPHeHaqbZLElieMrNjkMKnxkzhgqxSCxUmQZvnHHsMEaohYoVMIhRiMyqKBLvyvZ');
        get_2 = objectStore_5880.get(KeyRange_16);
    }
    catch (e){
    }

    var count_3 = objectStore_5880.count();
    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.only('XFNjamdcRzYpOSXXsUKGbRNFRsDupGIZlwJTqzGriJOlvOjFRFHOXzZdifyTJxvOdjAunPqctCNfUhtcKwCFAYOeEwkJtWwQVHHJLgqUYZtpkldBOikrrHcbQHQlNswHBlWDSrCMBUcPBPNkQRRrefGLiXHLEavBHgWRtdcJPNrKqlHKsVsivCtlhvtpSUKSmWsxUawQpwteojEJrMjzyOjesAQxUHPabGRqsFhQgenbjlqHFUDMjUeuWOHqzClvUPkzDHYqkhwffLYrUCYAtASkJdfQmFMkeVoRLSdyYDVOApjjuHwHUmdRtjTVxHqUiKbAUbMhmVNSkyDOyBTITBdhLkjbNSomEuYzJjptSfgAVPQAalBtwSvzxuBjpUJfUQzVTxJTrVNrWAozIXFvkAwSfOrVlOPqejRSMkeJooDdFqzfEnWpcZtRZXMDyzUiKRYgNhVihzuKPHeHaqbZLElieMrNjkMKnxkzhgqxSCxUmQZvnHHsMEaohYoVMIhRiMyqKBLvyvZ');
        count_4 = objectStore_5880.count(KeyRange_18);
    }
    catch (e){
    }

    txn_8888.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8888.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8888.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8889 = db.transaction(['objectStore_5879'], 'readonly', {durability:"default"})
    var objectStore_5879 = txn_8889.objectStore('objectStore_5879');
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('QBbkEOQVgkwPQawSrlgIcVTpdMRwsfvsPRBsQVMYkrxMqAXggQvnrHtJ', 'RSXqYyuAkoANFXAqnvdCoydAypOfiimJRWfavFrikTuLDoBxXQFZVtyDfFxPazjczcahCVKfzGDZnYXQjlFneNeMccMOruFdBmNpPGgOcPkJFnuaAfbmqllNkUqONUWOXoEeXnIuRZRSxVIzqHHFtxdkQqNbcuwIehymoquyCstZBIeOLwRDmhwRtOpNsURnCXDppHDmWsOOtusnpKcVAfEoXFmotMBZpuwZjAkKWHBPdGnmSNgiKslZkwRBYCqSuOUFOLHHkhvBJHoOJbgMysCtojlJQdpxYVQ', true, true);
        get_3 = objectStore_5879.get(KeyRange_20);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('RSXqYyuAkoANFXAqnvdCoydAypOfiimJRWfavFrikTuLDoBxXQFZVtyDfFxPazjczcahCVKfzGDZnYXQjlFneNeMccMOruFdBmNpPGgOcPkJFnuaAfbmqllNkUqONUWOXoEeXnIuRZRSxVIzqHHFtxdkQqNbcuwIehymoquyCstZBIeOLwRDmhwRtOpNsURnCXDppHDmWsOOtusnpKcVAfEoXFmotMBZpuwZjAkKWHBPdGnmSNgiKslZkwRBYCqSuOUFOLHHkhvBJHoOJbgMysCtojlJQdpxYVQ', 'VPKRfbOOcWHKmLSEDMpKVdfebOcgVoplQvFwHzqZIcaERyXWIDvjleMehNVMjHiqnBupPiKnWEnKJFvVxucQCMxZGUtPjonaORnJldxnbzPOqCPMsAPeonDHPUspIjYFIbCKKrdjpYQXdnVNiuK', true, false);
        count_5 = objectStore_5879.count(KeyRange_22);
    }
    catch (e){
    }

    var getAll_0 = objectStore_5879.getAll(2353531474);
    var count_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('BnxcnQJIQDChQjbYgwptnMbsnrpmpUlzQscNkJvJzRbk', 'BnxcnQJIQDChQjbYgwptnMbsnrpmpUlzQscNkJvJzRbk', false, true);
        count_6 = objectStore_5879.count(KeyRange_24);
    }
    catch (e){
    }

    var getAll_1 = objectStore_5879.getAll();
    var count_7;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('BnxcnQJIQDChQjbYgwptnMbsnrpmpUlzQscNkJvJzRbk', false);
        count_7 = objectStore_5879.count(KeyRange_26);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_28 = IDBKeyRange.bound('BnxcnQJIQDChQjbYgwptnMbsnrpmpUlzQscNkJvJzRbk', 'QBbkEOQVgkwPQawSrlgIcVTpdMRwsfvsPRBsQVMYkrxMqAXggQvnrHtJ', true, false);
        get_4 = objectStore_5879.get(KeyRange_28);
    }
    catch (e){
    }

    txn_8889.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8889.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8889.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6548')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};