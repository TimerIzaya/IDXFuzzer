let db;
const openRequest = window.indexedDB.open('str_1542', 2305669097832664)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1488', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_1489');
    var index_988 = objectStore_1.createIndex('index_988', 'test', {unique: false});
    var clear_0 = objectStore_1.clear();
    var add_0 = objectStore_0.add({f0_x: '<boolean>', f1_c: '<string>', f2_q: '<number>', f3_b: '<null>', f4_j: '<null>', f5_x: '<array>', f6_z: '<boolean>', f7_p: '<null>', f8_j: '<string>', f9_u: '<null>', f10_q: '<array>', f11_v: '<object>', f12_u: '<string>', f13_n: '<object>', f14_y: '<boolean>', f15_u: '<string>', f16_r: '<boolean>', f17_p: '<boolean>', f18_k: '<object>', f19_o: '<string>', f20_q: '<boolean>', f21_h: '<null>', f22_f: '<null>', f23_t: '<null>', f24_t: '<boolean>', f25_v: '<number>', f26_v: '<number>', f27_o: '<object>', f28_o: '<number>', f29_r: '<number>', f30_a: '<boolean>', f31_h: '<number>', f32_r: '<string>', f33_j: '<object>', f34_c: '<object>', f35_r: '<string>', f36_x: '<array>', f37_w: '<boolean>', f38_d: '<string>', f39_n: '<string>', f40_h: '<string>', f41_c: '<object>', f42_u: '<number>', f43_p: '<array>', f44_p: '<string>', f45_j: '<null>', f46_x: '<string>', f47_s: '<null>', f48_r: '<string>', f49_a: '<number>', f50_x: '<null>', f51_m: '<null>', f52_s: '<null>', f53_p: '<boolean>', f54_c: '<string>', f55_i: '<null>', f56_z: '<boolean>', f57_u: '<boolean>', f58_n: '<string>', f59_s: '<null>', f60_z: '<null>', f61_a: '<string>', f62_r: '<null>', f63_t: '<number>', f64_v: '<array>', f65_w: '<array>', f66_s: '<number>', f67_o: '<object>', f68_m: '<null>', f69_x: '<null>', f70_y: '<object>', f71_z: '<string>', f72_o: '<null>', f73_b: '<null>', f74_b: '<null>', f75_p: '<null>', f76_s: '<object>'}, 'QwntYAreECoThiUGttkZvRuUlFMDW');
    var index_989 = objectStore_0.createIndex('index_989', 'test');
    var put_0 = objectStore_1.put({f0_v: '<object>'}, 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn');
    var objectStore_2 = db.createObjectStore('objectStore_1490');
    var add_1 = objectStore_0.add({f0_a: '<string>', f1_i: '<array>', f2_g: '<object>', f3_a: '<number>', f4_l: '<string>', f5_d: '<string>', f6_t: '<boolean>'}, 'fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC');
    var index_990 = objectStore_1.createIndex('index_990', 'test', {multiEntry: true});
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC', 'fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC', false, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_1491', {keypath: 'jYsEVhqidPWeekpIdGjoSqIJuSmGwZgfTjzzarkHSLzHgVBcLOGZjVkRBTbPrCJoNoTkAvHJhwqiRqJXNUGvZwgqwieJfMIHJAZYlynBmPjJLbQoVyLCNUrUxXclzYoijDRAguIjuYOEHJtvJByVvFnafQvDFFVmPrfbwowuYfpGFxoAxlemyfWUcibfGYUxEoJbyCjpNOUAbtpkuEZMmMbIqxwsrIIBavKwsLPMVrvFLibTIdmNiPrreVJSiccvAaIFUyBUTolLkxCtzkWptlhYpppbDeRvgbNoGXSrZZRHZlJYpGKhZgjyjvxotCHdYXU', autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_1492', {keypath: 'aLdWVtiHxaMFOLJidhncNqAAfglaVeJnWzNidCOfXXXzYXEjnZzqMZiWCHlrbToSGCYWWNGEyzLGeVVTSNTVsmkXjTzVZFIuaRaKeEzJTIpghqULrVYpVOHKUIfzowbxkBEezTDzdpGgZGuoYkNRFTazRDGqKEUYhdZZCttULRIeTiPkPlADCMTWFBjHEzuKfpKLvYQZlnfjXSQTCPwJiIsUtdIyvjNJqTiJjNvpjsqtzPGoCzkjdEgjFDGenYPNdEFshDhmQdxxRowhBNPbEdytWnfWGdHqDrRsxZakTQOvPsbwLCCmtckLEHfmNBbPlOIMkEjrzTlyGJjjYQYYRAFjYZfGMNZeJCaRCqlMaDhgTvqlQEoUPTgtmIcJfDgunmUgmQztiwUNWxAYeWUisicbWhcriwUoWDLrQRzsBnKTQY'});
    var objectStore_5 = db.createObjectStore('objectStore_1493', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2220 = db.transaction(['objectStore_1492', 'objectStore_1493', 'objectStore_1488'], 'readonly', {durability:"relaxed"})
    var objectStore_1488 = txn_2220.objectStore('objectStore_1488');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', false, true);
        get_0 = objectStore_1488.get(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_1488.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC');
        get_1 = objectStore_1488.get(KeyRange_4);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', true, false);
        get_2 = objectStore_1488.get(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC', true, true);
        getAll_0 = objectStore_1488.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('QwntYAreECoThiUGttkZvRuUlFMDW');
        getAll_0 = objectStore_1488.getAll(KeyRange_9);
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', true, false);
        get_3 = objectStore_1488.get(KeyRange_10);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', false, false);
        get_4 = objectStore_1488.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', true, true);
        getAllKeys_0 = objectStore_1488.getAllKeys(KeyRange_14, 1754555620);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('QwntYAreECoThiUGttkZvRuUlFMDW');
        getAllKeys_0 = objectStore_1488.getAllKeys(KeyRange_15);
    }

    var index_0 = objectStore_1488.index('index_989');
    txn_2220.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2220.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2220.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2221 = db.transaction(['objectStore_1489', 'objectStore_1492', 'objectStore_1488', 'objectStore_1493'], 'readonly', {durability:"default"})
    var objectStore_1488 = txn_2221.objectStore('objectStore_1488');
    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC', false, true);
        getAllKeys_1 = objectStore_1488.getAllKeys(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('QwntYAreECoThiUGttkZvRuUlFMDW');
        getAllKeys_1 = objectStore_1488.getAllKeys(KeyRange_17);
    }

    var getAllKeys_2 = objectStore_1488.getAllKeys(3270668665);
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('QwntYAreECoThiUGttkZvRuUlFMDW', 'QwntYAreECoThiUGttkZvRuUlFMDW', true, false);
        get_5 = objectStore_1488.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('QwntYAreECoThiUGttkZvRuUlFMDW', true);
        getAll_1 = objectStore_1488.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC');
        getAll_1 = objectStore_1488.getAll(KeyRange_21);
    }

    var count_2 = objectStore_1488.count();
    var count_3 = objectStore_1488.count();
    var getAllKeys_3;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('fTWUrxzPXnERgGcTJWxjibBFyLkPgcPPsYNjNoGOlkgoTtfZcylIKUAyumRZGmDbXTbdAGIOmcKPpyyqJnNczHlmLbyxPSJuTFQXXQUTSQkIlZwuJAiGLmwbaNBmzmNdJkzDypxLdeioYheqVZByrLTRVrWdVprxXlDbGttpIHGvSfymJkfdlLYxaibHDlYcnofsdplYVQpIFCBzvtcjVOEgHvdYaqcFbgXObeUqazwRtDcbgRixvuiQeHleDdgVOqKKYRSNaLtUuuhNPLXAGNONKNCaCewWJGrcGewdLssfETSXVsEtkJepgoeOdohPJohXRapNoluMgMDRbqYAWTnrGXnfkEdwMDwPKdzdVfBsiyyYAWiNxWScScLYEXJqGqAWHHQVIiWnIerfooOtproEHLrASJUYpxBGofjmsrZIlIDthoaQPogHqtOZPbuEUposEoISOezMbtWlMRofAJLGHzpUYAC', true);
        getAllKeys_3 = objectStore_1488.getAllKeys(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('QwntYAreECoThiUGttkZvRuUlFMDW');
        getAllKeys_3 = objectStore_1488.getAllKeys(KeyRange_23);
    }

    var count_4 = objectStore_1488.count();
    txn_2221.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2221.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2221.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2222 = db.transaction(['objectStore_1490'], 'readwrite', {durability:"strict"})
    var objectStore_1490 = txn_2222.objectStore('objectStore_1490');
    var put_1 = objectStore_1490.put({f0_h: '<null>', f1_x: '<boolean>', f2_u: '<array>', f3_d: '<null>', f4_i: '<object>', f5_g: '<null>', f6_z: '<number>', f7_d: '<number>', f8_n: '<boolean>', f9_k: '<null>'}, 'hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD');
    var delete_0;
    try{
        KeyRange_24 = IDBKeyRange.bound('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD', 'hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD', true, false);
        delete_0 = objectStore_1490.delete(KeyRange_24);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD', false);
        delete_1 = objectStore_1490.delete(KeyRange_26);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_28 = IDBKeyRange.only('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD');
        count_5 = objectStore_1490.count(KeyRange_28);
    }
    catch (e){
    }

    var clear_1 = objectStore_1490.clear();
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD', false);
        get_6 = objectStore_1490.get(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_1490.getAllKeys();
    var get_7;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD', false);
        get_7 = objectStore_1490.get(KeyRange_32);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_34 = IDBKeyRange.only('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD');
        getAllKeys_5 = objectStore_1490.getAllKeys(KeyRange_34, 1181409779);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('hDSfMmzhgZbubzjRRQobJxlBmdogGXvjLObSgcjDxsKKkPuGdBfVAMbofeQHRLyjHLlRSjbPNhmzFaHNqqxxbFXmWJYZTjWjZLDjuLEcrgxfOuyGShZdDvtAyUfXwzgGOYdNVGHeNCzPemnAyAXvRcIEGtHNEFekFMoheTnTgLyLXjGhZMTQGHoMFVKLHchoBCtQSEsDsrqnJVFlPYwvHVwNBNROJkRbQcJMcrfuOBgkGwmBKEiWHpmWTMyLmEpbdTYPUSeHPkBKRPyDIlWNTCypcdPIeHsEFLPOCtIwvgTlyYDDacHFeJYBbgEpVgLVwCuuvnHctAlKxalFaOawLiALchsHjgKCPWzWDLsbYzUNBMhXtglPHaFBbAeQVnaPEZGyHKBXzjfnTtCCqwESpfuDcEYpAKiEzqfUqyvBsxbFAEHJOeQnbVLzixjGGYgwSDAVBkHkySQqazYMIhtkZxgzdFqIVvJKoCGravnZEqcOuKVeZSzRAVFGlwPwPRVszxsMwwzFHMTCZQzGoYFhumQwIGOvKEFlCsjhbgUndAKJtzCbtdCzBvkSCotHZBMIicosHUzkPVnnkyfiSLntDIDmnfJyaEZzthXZmcgkYJFGhzfQUMHwZLgBoaWlgUCkRJBZoyqZWUqlWSUIVLZNtSnXtMlwjoRbdzUAKZIDXheJcMBRNYfOqnEJjOowtKlrkcsLHfgqkOucMjLWmWVzcXmLvMFnzTMbTXgIvnclbbLWGoHYSxJLedrfmkkIanvWDfWfdDzOJGjjaswD');
        getAllKeys_5 = objectStore_1490.getAllKeys(KeyRange_35);
    }

    var clear_2 = objectStore_1490.clear();
    var add_2 = objectStore_1490.add({f0_h: '<number>', f1_w: '<array>', f2_u: '<object>', f3_z: '<array>', f4_d: '<object>', f5_a: '<null>'}, 'nWEwhiDQNOleZppsyQAMzLGmeTzVfYawiueuaJGcgjwcKSYnMzilMQugZIkLJRaTFcBoZvYmvDbVtTrLefgJBCCuoyjWsmougDgMHfEicZUYPtnLgPuaQJhqqyAYTDoaEjyHfMLMsHVXnfotryKvtpxbrseJJWsqleFtxwtbAHRvbsvUAqkeeTjmUvinIFNXzCqtGJmqrIQgcvRXLxzJYrgdmJaMQAHJhIcPfQyXhdhGJRrztobNQnJOhSyVvnXqxyehQbBptUlnnBfwqCfklKFCDWoruBNXROVLUrglXJpfaVXZhkTwIjYjaQNSDmdFddwlthDQwUVQXiFrhiCvgawIMuHyuscWuRZdZBfKcFJJtFwTdvAhjEvEfzSlasBHRUFcjXASBbRYkcitUuDDXIFsHuoEgUIzqsbQKOXrKnrQtKwRZZOXQKfJSXQmQNeRIpMXUPjzyCUaMrtxZPYGcLNCPnjPbpGOYJrNSVKAClDHJWqUZTocuCdbZOEqlsGRULrWxGJThElnGzTSTcMGZsQKdWkzTwIKalotxDZvnydWwSlkJRyxvDOhKaXcXMhOjocnvpBItbNTHabSHoyOlLbUDRhETvuLgNBsSkTiGPtwrdQYIKMtjgfeUAwPJMKoCZXJzhYoxkOJpJLIGhblHOKFwDBuwgHviimmUmkrWIHxoSpMdltKBvexJoSHrHyRBuxKNvLPJAFCYiXRSdVhoOqjJcTJRkemwkdCAPHAiYvhkvQYcNqoNtUICtbuEpPhVGULCJNONMrNdGjEfNeqINOrGZcO');
    var getAllKeys_6 = objectStore_1490.getAllKeys();
    var add_3 = objectStore_1490.add({f0_j: '<null>', f1_z: '<array>', f2_o: '<number>', f3_q: '<null>', f4_z: '<boolean>', f5_u: '<string>', f6_t: '<boolean>', f7_k: '<string>', f8_c: '<object>', f9_d: '<number>', f10_n: '<null>', f11_w: '<boolean>', f12_k: '<string>', f13_c: '<number>', f14_a: '<object>', f15_j: '<object>', f16_u: '<string>', f17_s: '<object>', f18_y: '<array>', f19_s: '<array>', f20_w: '<object>', f21_u: '<boolean>', f22_q: '<null>', f23_l: '<boolean>', f24_x: '<null>', f25_q: '<null>', f26_t: '<null>', f27_q: '<null>', f28_s: '<object>', f29_u: '<null>', f30_j: '<number>', f31_p: '<boolean>', f32_g: '<object>', f33_a: '<boolean>', f34_f: '<array>', f35_z: '<array>', f36_p: '<number>', f37_m: '<string>', f38_i: '<boolean>', f39_o: '<array>', f40_i: '<object>', f41_v: '<null>', f42_s: '<number>', f43_l: '<object>', f44_n: '<string>', f45_b: '<number>', f46_w: '<null>', f47_q: '<object>', f48_d: '<string>', f49_h: '<object>', f50_t: '<boolean>', f51_s: '<array>', f52_a: '<string>', f53_i: '<string>', f54_h: '<number>', f55_c: '<object>', f56_s: '<string>', f57_k: '<object>', f58_s: '<object>', f59_z: '<object>', f60_y: '<null>', f61_b: '<number>', f62_x: '<null>', f63_h: '<boolean>', f64_o: '<array>', f65_y: '<object>', f66_t: '<object>', f67_t: '<boolean>', f68_i: '<null>', f69_a: '<object>', f70_d: '<number>', f71_t: '<array>', f72_s: '<null>', f73_a: '<array>', f74_z: '<string>', f75_s: '<object>', f76_f: '<number>', f77_p: '<string>', f78_k: '<null>', f79_b: '<number>', f80_q: '<number>', f81_p: '<object>', f82_y: '<object>', f83_r: '<boolean>', f84_e: '<number>', f85_s: '<object>', f86_m: '<array>', f87_c: '<number>', f88_q: '<object>', f89_x: '<string>', f90_y: '<string>', f91_c: '<boolean>', f92_g: '<boolean>', f93_c: '<number>', f94_r: '<number>', f95_x: '<boolean>', f96_d: '<string>', f97_k: '<boolean>', f98_j: '<array>', f99_z: '<array>', f100_i: '<number>', f101_i: '<boolean>', f102_m: '<array>', f103_d: '<null>', f104_d: '<object>', f105_l: '<array>', f106_n: '<null>', f107_m: '<array>', f108_k: '<object>', f109_s: '<object>', f110_t: '<object>', f111_h: '<string>', f112_i: '<number>', f113_t: '<boolean>', f114_m: '<array>', f115_e: '<string>', f116_t: '<boolean>', f117_m: '<object>', f118_p: '<boolean>', f119_t: '<number>', f120_i: '<boolean>', f121_i: '<number>', f122_k: '<string>', f123_b: '<array>', f124_k: '<object>', f125_f: '<string>', f126_j: '<array>', f127_b: '<null>', f128_p: '<object>'}, 'YzofXQZUonkKcPQUspxGukiOQPGuzNPjtDtFlUkNyNAzZDuvcFdVDVzxgNhdlvEcjoAsNEcwcINSYKPdmhbzPVwRKOEwmEhPenPBzNIzJpuHmeUhHaelIBlqQRCgFQCbQSCLsaZOHFwMtWROZNGbIyJZRAUjQAWpcaYRoMKWZYDSWlthZLjOLoLRukleQpveqouDYwpMULoZfvnqsLvUzzjGtQqufscqKAYKghsegtNsBcdAznBJESKBlsphIdeSziZtSXZegttfWHNcWIHZzNpSrNJgozbXaFDZhaJPRCQVDmhWIPuOUUlVVdxrthXlphtrVrYfWeNpBeWmKyhCzIbIplvubSNzNlWsnNdoHwmikvZQWYtKTXuhUUNbBIzpuvOevSrbbHCBBrKTXEvyGNTzOdTQqOxfNUYWBozmxAUoQYFeEVjLDXDweSGuWbfEuQQzEDWzSQntAgHQwDBxlvtHDAGJQruKAXXJiDdsmQOSwxFKHLmtKKlRUqaVwPbwFMbZuaXBOpLuWerUNOUAHuOggzvXGIYcdmYvwnekvmLuTgeAaOAFPJKkATWFpKqVZseTlaYxRKcFLTzndEfcgFWDTHVMgcjxEmmPdrqVJmLGbaIcQuCOVmUgjWtWkrCJTbazUaNnnwARIHbGxYxfiIxUBpMVMbfQAKcQXOHrxhZdLFkUOJHAmrUHfgjlwZnKGtrkHwMMxxcqtxdULEAOqqNMLqyvnBNDufBwIkdQVHiVYmUmtatKVdcRJWhwnoubvYJtwuOgnOemqcCbZQtUZwFDpDnVoCCVXwuIgniByILhIFAHmQekhNeHZbaJGgRZxkTVmxIVmpxPpWBqnkDvWXgCrjIiPAYDIZFwaztzPQXbxktnVTNgepYBrzuNvixJaALLXyugGkbGNyIqYllwtlQmqoDZfWDqIMormUqHhZVSEHMoectZVtLZSxkXuCvemIlDrFqwfKlQTTbBEgi');
    txn_2222.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2222.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2222.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2223 = db.transaction(['objectStore_1491', 'objectStore_1489'], 'readonly', {durability:"strict"})
    var objectStore_1489 = txn_2223.objectStore('objectStore_1489');
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', true, true);
        get_8 = objectStore_1489.get(KeyRange_36);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_38 = IDBKeyRange.bound('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', true, true);
        count_6 = objectStore_1489.count(KeyRange_38);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_40 = IDBKeyRange.only('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn');
        count_7 = objectStore_1489.count(KeyRange_40);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_42 = IDBKeyRange.bound('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', true, true);
        count_8 = objectStore_1489.count(KeyRange_42);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_44 = IDBKeyRange.only('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn');
        count_9 = objectStore_1489.count(KeyRange_44);
    }
    catch (e){
    }

    var getAll_2 = objectStore_1489.getAll(3829827656);
    var getAllKeys_7;
    try{
        KeyRange_46 = IDBKeyRange.bound('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', false, false);
        getAllKeys_7 = objectStore_1489.getAllKeys(KeyRange_46, 1071609789);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn');
        getAllKeys_7 = objectStore_1489.getAllKeys(KeyRange_47);
    }

    var index_1 = objectStore_1489.index('index_990');
    txn_2223.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2223.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2223.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2224 = db.transaction(['objectStore_1489'], 'readwrite', {durability:"strict"})
    var objectStore_1489 = txn_2224.objectStore('objectStore_1489');
    var get_9;
    try{
        KeyRange_48 = IDBKeyRange.only('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn');
        get_9 = objectStore_1489.get(KeyRange_48);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', false);
        count_10 = objectStore_1489.count(KeyRange_50);
    }
    catch (e){
    }

    var clear_3 = objectStore_1489.clear();
    var clear_4 = objectStore_1489.clear();
    var clear_5 = objectStore_1489.clear();
    var add_4 = objectStore_1489.add({f0_y: '<object>', f1_t: '<boolean>', f2_n: '<null>', f3_d: '<array>', f4_d: '<array>', f5_o: '<string>', f6_r: '<null>', f7_o: '<array>', f8_v: '<array>'}, 'OuXXCHvXSOhzDpYXBAXZabsMqGJHhNqkkkBrLfwkmmnxXJtMiRJyzRsvjbidgJvcywfdCTyODsKMQfpYvtPjjiRGygPvQMKCklYqDYqubUKuJqwUokzThXvypWNeLMbXBssEGpVldfCxHFjzeBpINAFzvPyrVkFugKQnyJBXOvDiqOPXLSWsGUNxUGiTldvFCRPzmdNShsGGNnknKXNjIKYpmfnylEnQlaowookpbCkEPZhCafXHKkLAcHyUhZZQCSLfHlqkdzBPyAYmUZOzQHNtFrANYMOGVOfuMTGgfWGpICVGdkExrRmGJFimFSgimZjxlaHODWwnbkBHjfpSJStMybSAkaToljOtymOkJtXkeNbanvJtZJTCfEBrwYSDuerhdUVfXaqbraUTyaLLXarBtvLKtwwcLbTfblhxxmLBWzunnFFATIrzQjsljfdpIAkNcyhGldatQZiPkGSFSWnADHQZIPOkHtOrVKoleiwnocRiwFbUxUGQjisFAeewSfpbseBIdmSNLSILmUXukOicnaKkokG');
    var delete_2;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('OuXXCHvXSOhzDpYXBAXZabsMqGJHhNqkkkBrLfwkmmnxXJtMiRJyzRsvjbidgJvcywfdCTyODsKMQfpYvtPjjiRGygPvQMKCklYqDYqubUKuJqwUokzThXvypWNeLMbXBssEGpVldfCxHFjzeBpINAFzvPyrVkFugKQnyJBXOvDiqOPXLSWsGUNxUGiTldvFCRPzmdNShsGGNnknKXNjIKYpmfnylEnQlaowookpbCkEPZhCafXHKkLAcHyUhZZQCSLfHlqkdzBPyAYmUZOzQHNtFrANYMOGVOfuMTGgfWGpICVGdkExrRmGJFimFSgimZjxlaHODWwnbkBHjfpSJStMybSAkaToljOtymOkJtXkeNbanvJtZJTCfEBrwYSDuerhdUVfXaqbraUTyaLLXarBtvLKtwwcLbTfblhxxmLBWzunnFFATIrzQjsljfdpIAkNcyhGldatQZiPkGSFSWnADHQZIPOkHtOrVKoleiwnocRiwFbUxUGQjisFAeewSfpbseBIdmSNLSILmUXukOicnaKkokG', true);
        delete_2 = objectStore_1489.delete(KeyRange_52);
    }
    catch (e){
    }

    var getAll_3 = objectStore_1489.getAll(2424530780);
    var delete_3;
    try{
        KeyRange_54 = IDBKeyRange.bound('OuXXCHvXSOhzDpYXBAXZabsMqGJHhNqkkkBrLfwkmmnxXJtMiRJyzRsvjbidgJvcywfdCTyODsKMQfpYvtPjjiRGygPvQMKCklYqDYqubUKuJqwUokzThXvypWNeLMbXBssEGpVldfCxHFjzeBpINAFzvPyrVkFugKQnyJBXOvDiqOPXLSWsGUNxUGiTldvFCRPzmdNShsGGNnknKXNjIKYpmfnylEnQlaowookpbCkEPZhCafXHKkLAcHyUhZZQCSLfHlqkdzBPyAYmUZOzQHNtFrANYMOGVOfuMTGgfWGpICVGdkExrRmGJFimFSgimZjxlaHODWwnbkBHjfpSJStMybSAkaToljOtymOkJtXkeNbanvJtZJTCfEBrwYSDuerhdUVfXaqbraUTyaLLXarBtvLKtwwcLbTfblhxxmLBWzunnFFATIrzQjsljfdpIAkNcyhGldatQZiPkGSFSWnADHQZIPOkHtOrVKoleiwnocRiwFbUxUGQjisFAeewSfpbseBIdmSNLSILmUXukOicnaKkokG', 'DDiNbMDXrwjkkvddjUbjPnIyJIGjhfzkfVxZogbYvzGMsPhTwecTAbxKswnqwuhwgWDzWPXNrWhckCpSqLXcSFXOSzBmEcnqlnKpwTkLmckmZddDAwLtzwgeYTPcebQcIlmSvwZYfJebkaoQHyWIoSOCUsEeRRkUMn', false, true);
        delete_3 = objectStore_1489.delete(KeyRange_54);
    }
    catch (e){
    }

    txn_2224.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2224.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2224.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7926')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};