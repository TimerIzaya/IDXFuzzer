let db;
const openRequest = window.indexedDB.open('str_361', 5160892266644837)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1957', {keypath: 'jBkxrtFNrwwebgYhIuDXeGMUIpBRnpWTnLKlqnXtIZCfTCnDhHzkLtRLiBFaIOzptythKvJxhYjJBkQLyqDgIfnQKQVbZwuutbY', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_y: '<string>', f1_j: '<object>', f2_k: '<null>', f3_o: '<object>', f4_m: '<object>', f5_a: '<object>', f6_x: '<boolean>', f7_u: '<null>', f8_e: '<array>'}, 'ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU');
    var count_0 = objectStore_0.count();
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU', 'ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU', false, true);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_1);
    }

    var getAllKeys_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU', 'ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU', true, true);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_3);
    }

    var clear_1 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_a: '<number>', f1_t: '<string>', f2_w: '<object>', f3_h: '<null>', f4_f: '<string>', f5_m: '<object>', f6_l: '<null>', f7_i: '<boolean>', f8_u: '<boolean>', f9_i: '<object>', f10_r: '<object>', f11_l: '<array>', f12_z: '<null>', f13_c: '<number>', f14_g: '<object>', f15_q: '<object>', f16_e: '<object>', f17_l: '<boolean>', f18_j: '<number>', f19_x: '<number>', f20_x: '<number>', f21_y: '<number>', f22_y: '<boolean>', f23_i: '<object>', f24_m: '<number>', f25_h: '<boolean>', f26_s: '<boolean>', f27_n: '<number>', f28_f: '<number>'}, 'IvGgnuPkbVJkYoPGjKMaYAXHzHCGofYfhIASrjXwEBbeUPECvFyVCqXDMyWzacyPHeZsHTBRztblKABSqhfrYhtHhExreJPKBfyfLAylZtiUBxYhgOMSDSqJyqcAgJONcKcMsYfRUfnCSRWDrQBKWNrxVtpnQiluOnLCxuqRjGrZbmbafnkyRndBBFWgXgoQMpSsVulhhJFXbteIWtyqxfpMbGtjuPrpKTDgLtVKHYQImQHjYPFisJeWuTjDwPuMKrPcFLQwTDxawpvPtwcejSIeiULQiRFQvTrjZoyMSoGxytAagjREEkpmLjknTvKCPtpNlpPPoOiVtdCdtqNoEMLHvXUUMGNTzR');
    var index_1307 = objectStore_0.createIndex('index_1307', 'test', {multiEntry: false});
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('IvGgnuPkbVJkYoPGjKMaYAXHzHCGofYfhIASrjXwEBbeUPECvFyVCqXDMyWzacyPHeZsHTBRztblKABSqhfrYhtHhExreJPKBfyfLAylZtiUBxYhgOMSDSqJyqcAgJONcKcMsYfRUfnCSRWDrQBKWNrxVtpnQiluOnLCxuqRjGrZbmbafnkyRndBBFWgXgoQMpSsVulhhJFXbteIWtyqxfpMbGtjuPrpKTDgLtVKHYQImQHjYPFisJeWuTjDwPuMKrPcFLQwTDxawpvPtwcejSIeiULQiRFQvTrjZoyMSoGxytAagjREEkpmLjknTvKCPtpNlpPPoOiVtdCdtqNoEMLHvXUUMGNTzR', true);
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_1958');
    var put_1 = objectStore_0.put({f0_y: '<array>'}, 'RbqxasXUNAZywnXxXZTJefsUhcmswMrmJGIuORrInOBVgZSbMKzBAAXcbZSRyDKMnavCbBgZzsEpbpBeBmcbzsmDbulcLwpwUnlRcYUlsuBGHgQsjtJzeqqEeCyTGqldaxMFOiHyfiJgWgBNVTOiopSlQuOTonPMrYNbUTlcfMYxUhANViHbTudlDZPgRvpXXkECwJuGabSRLLPmpUCAsCQZJMImvnOEXthnazjzoGuXuXQmyoyMjIFFcPTlRVgsiwGrfKSyuOMCYWyxGMfoJnKaBeLnOtzZyDGroRpwgTKZHQfJtOsbPafIoFuevsblietaHcTooqYUpbOseagjmTNbNvicyfKniVvUyEOgPIz');
    var put_2 = objectStore_1.put({f0_y: '<string>', f1_y: '<array>', f2_n: '<string>', f3_a: '<object>', f4_f: '<string>', f5_h: '<array>', f6_w: '<array>'}, 'MWsHhigXRZNoLHkaNaQGNLlrgaMTuuEMkhLlUSmdvZJppaatdiLcVORcAjhIvJoNfjJMoaJdsOhqdUEAFIGZifSObDSlmwBKWNMVtmegiSKKShglZWLFfJeOyCmWHwYVKeLUxKSHmtKFGlTYIimBdkoMZgmYTcSLzkYviyhIWkfLoNFGaglEQXjDbLoPxLvbnvifNoJPkcHjhbZOmixXwrhtAWRbZBnqRqyWHXCcjMdXKEKgKRSiFmUNNffdlhvrJtqhULaGQHVQTTENJrSpEPBscFgXcgtQHLCsVUXEkzMkiDAXKiZjUiUFrqrinuqlnRTaYumugEBrxbLQrKHMxAknFgOffZhNYjRtuCfCCFonvGnzWvjUpvQTnhtzJbXvbTrzTZpxvkMKZcqTAckLapvPwiIBNwaNsJVmxdOvjiGxPwfxRxknRsJkqtwOcChsFdShxtMXpPBjNKIFzKgDxictROQvguCnWXzOktMOTyxRmSfkBeiQKEBZcObcuOELqyFmeLxQBnJKVKCUHpKIAyddnYdWksMGmdEhNSESmvDokTPBUuiVTlRFpVpBcbbgJSqdhWutxHWpMgJxXiwWhrRuJpDqvIJXbDVVvPrrWYgqWyhcuLtPWOruHkQxMowheLqgjXhPoLRWkEETVednDovYcbtcXobFJAjKBsaMnsnjRdxtlNcIuUGnPgyubPPFezBkcCyEMvNqjznQoKPWcNoCwZmiPrAcQnwafUkvjGYmerozReVUNFPeYUAcHLnQbcQjpDtUSXEvLKOgETCkdVWRQ');
    var objectStore_2 = db.createObjectStore('objectStore_1959');
    var clear_2 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_1960', {autoIncrement: true});
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('IvGgnuPkbVJkYoPGjKMaYAXHzHCGofYfhIASrjXwEBbeUPECvFyVCqXDMyWzacyPHeZsHTBRztblKABSqhfrYhtHhExreJPKBfyfLAylZtiUBxYhgOMSDSqJyqcAgJONcKcMsYfRUfnCSRWDrQBKWNrxVtpnQiluOnLCxuqRjGrZbmbafnkyRndBBFWgXgoQMpSsVulhhJFXbteIWtyqxfpMbGtjuPrpKTDgLtVKHYQImQHjYPFisJeWuTjDwPuMKrPcFLQwTDxawpvPtwcejSIeiULQiRFQvTrjZoyMSoGxytAagjREEkpmLjknTvKCPtpNlpPPoOiVtdCdtqNoEMLHvXUUMGNTzR', 'IvGgnuPkbVJkYoPGjKMaYAXHzHCGofYfhIASrjXwEBbeUPECvFyVCqXDMyWzacyPHeZsHTBRztblKABSqhfrYhtHhExreJPKBfyfLAylZtiUBxYhgOMSDSqJyqcAgJONcKcMsYfRUfnCSRWDrQBKWNrxVtpnQiluOnLCxuqRjGrZbmbafnkyRndBBFWgXgoQMpSsVulhhJFXbteIWtyqxfpMbGtjuPrpKTDgLtVKHYQImQHjYPFisJeWuTjDwPuMKrPcFLQwTDxawpvPtwcejSIeiULQiRFQvTrjZoyMSoGxytAagjREEkpmLjknTvKCPtpNlpPPoOiVtdCdtqNoEMLHvXUUMGNTzR', false, false);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('MWsHhigXRZNoLHkaNaQGNLlrgaMTuuEMkhLlUSmdvZJppaatdiLcVORcAjhIvJoNfjJMoaJdsOhqdUEAFIGZifSObDSlmwBKWNMVtmegiSKKShglZWLFfJeOyCmWHwYVKeLUxKSHmtKFGlTYIimBdkoMZgmYTcSLzkYviyhIWkfLoNFGaglEQXjDbLoPxLvbnvifNoJPkcHjhbZOmixXwrhtAWRbZBnqRqyWHXCcjMdXKEKgKRSiFmUNNffdlhvrJtqhULaGQHVQTTENJrSpEPBscFgXcgtQHLCsVUXEkzMkiDAXKiZjUiUFrqrinuqlnRTaYumugEBrxbLQrKHMxAknFgOffZhNYjRtuCfCCFonvGnzWvjUpvQTnhtzJbXvbTrzTZpxvkMKZcqTAckLapvPwiIBNwaNsJVmxdOvjiGxPwfxRxknRsJkqtwOcChsFdShxtMXpPBjNKIFzKgDxictROQvguCnWXzOktMOTyxRmSfkBeiQKEBZcObcuOELqyFmeLxQBnJKVKCUHpKIAyddnYdWksMGmdEhNSESmvDokTPBUuiVTlRFpVpBcbbgJSqdhWutxHWpMgJxXiwWhrRuJpDqvIJXbDVVvPrrWYgqWyhcuLtPWOruHkQxMowheLqgjXhPoLRWkEETVednDovYcbtcXobFJAjKBsaMnsnjRdxtlNcIuUGnPgyubPPFezBkcCyEMvNqjznQoKPWcNoCwZmiPrAcQnwafUkvjGYmerozReVUNFPeYUAcHLnQbcQjpDtUSXEvLKOgETCkdVWRQ', 'MWsHhigXRZNoLHkaNaQGNLlrgaMTuuEMkhLlUSmdvZJppaatdiLcVORcAjhIvJoNfjJMoaJdsOhqdUEAFIGZifSObDSlmwBKWNMVtmegiSKKShglZWLFfJeOyCmWHwYVKeLUxKSHmtKFGlTYIimBdkoMZgmYTcSLzkYviyhIWkfLoNFGaglEQXjDbLoPxLvbnvifNoJPkcHjhbZOmixXwrhtAWRbZBnqRqyWHXCcjMdXKEKgKRSiFmUNNffdlhvrJtqhULaGQHVQTTENJrSpEPBscFgXcgtQHLCsVUXEkzMkiDAXKiZjUiUFrqrinuqlnRTaYumugEBrxbLQrKHMxAknFgOffZhNYjRtuCfCCFonvGnzWvjUpvQTnhtzJbXvbTrzTZpxvkMKZcqTAckLapvPwiIBNwaNsJVmxdOvjiGxPwfxRxknRsJkqtwOcChsFdShxtMXpPBjNKIFzKgDxictROQvguCnWXzOktMOTyxRmSfkBeiQKEBZcObcuOELqyFmeLxQBnJKVKCUHpKIAyddnYdWksMGmdEhNSESmvDokTPBUuiVTlRFpVpBcbbgJSqdhWutxHWpMgJxXiwWhrRuJpDqvIJXbDVVvPrrWYgqWyhcuLtPWOruHkQxMowheLqgjXhPoLRWkEETVednDovYcbtcXobFJAjKBsaMnsnjRdxtlNcIuUGnPgyubPPFezBkcCyEMvNqjznQoKPWcNoCwZmiPrAcQnwafUkvjGYmerozReVUNFPeYUAcHLnQbcQjpDtUSXEvLKOgETCkdVWRQ', true, true);
        get_1 = objectStore_1.get(KeyRange_8);
    }
    catch (e){
    }

    var index_1308 = objectStore_1.createIndex('index_1308', 'test', {unique: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2925 = db.transaction(['objectStore_1959'], 'readonly', {durability:"relaxed"})
    var objectStore_1959 = txn_2925.objectStore('objectStore_1959');
    txn_2925.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2925.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2925.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2926 = db.transaction(['objectStore_1959', 'objectStore_1960'], 'readonly', {durability:"default"})
    var objectStore_1959 = txn_2926.objectStore('objectStore_1959');
    txn_2926.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2926.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2926.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2927 = db.transaction(['objectStore_1957'], 'readwrite', {durability:"default"})
    var objectStore_1957 = txn_2927.objectStore('objectStore_1957');
    var clear_3 = objectStore_1957.clear();
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.only('ovLtXUufRXitEwrGfVhsrAFyoUDYotBwXVDzTBhiaYkcPBYXkEuODWdyUSNcrOYVpHCwgOzceCKNYtWdaxeXpkduznCpwEGdBXbeiMjTuzPUYLJhwziHLNyhxdYceucdIqFjiYPZFnCzjERZNMALnCfAVjQfHpzwpIhjWKPjAYOSbKWeXadfUJfVmsZkXviiwGxhlBpmRrqqNekbYZMIVMZXUMBGejDcPjDBZWTqdHrzXLGsxwKliNbIyCnFhADIemQwuXjQCTXgIFwboxGVXJgmZfVxMGXrYMCFJoqgeHpeIjyOYPQxpQQSDqdgZwYLWGDJqYlRjCOAZgvHpOejcfbvGEXihKhGpBxmukrGJvlRdtFTnVwMQgdYwedBOyZTyFdBOKQqLyykregpCSqUnSZBZGiCYEIDczuaSFEhXizU');
        count_1 = objectStore_1957.count(KeyRange_10);
    }
    catch (e){
    }

    var count_2 = objectStore_1957.count();
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('RbqxasXUNAZywnXxXZTJefsUhcmswMrmJGIuORrInOBVgZSbMKzBAAXcbZSRyDKMnavCbBgZzsEpbpBeBmcbzsmDbulcLwpwUnlRcYUlsuBGHgQsjtJzeqqEeCyTGqldaxMFOiHyfiJgWgBNVTOiopSlQuOTonPMrYNbUTlcfMYxUhANViHbTudlDZPgRvpXXkECwJuGabSRLLPmpUCAsCQZJMImvnOEXthnazjzoGuXuXQmyoyMjIFFcPTlRVgsiwGrfKSyuOMCYWyxGMfoJnKaBeLnOtzZyDGroRpwgTKZHQfJtOsbPafIoFuevsblietaHcTooqYUpbOseagjmTNbNvicyfKniVvUyEOgPIz', 'RbqxasXUNAZywnXxXZTJefsUhcmswMrmJGIuORrInOBVgZSbMKzBAAXcbZSRyDKMnavCbBgZzsEpbpBeBmcbzsmDbulcLwpwUnlRcYUlsuBGHgQsjtJzeqqEeCyTGqldaxMFOiHyfiJgWgBNVTOiopSlQuOTonPMrYNbUTlcfMYxUhANViHbTudlDZPgRvpXXkECwJuGabSRLLPmpUCAsCQZJMImvnOEXthnazjzoGuXuXQmyoyMjIFFcPTlRVgsiwGrfKSyuOMCYWyxGMfoJnKaBeLnOtzZyDGroRpwgTKZHQfJtOsbPafIoFuevsblietaHcTooqYUpbOseagjmTNbNvicyfKniVvUyEOgPIz', true, true);
        count_3 = objectStore_1957.count(KeyRange_12);
    }
    catch (e){
    }

    var add_1 = objectStore_1957.add({f0_e: '<number>', f1_m: '<array>', f2_u: '<boolean>'}, 'UezmqkGhUdGtRhKdDPBBClFkbbIBQpQXqdneSqlqdkHmeqSgnghrjCFUyNVbHPoPYyqlEAbvQWiJGdudkeqjZlxsFuimVWjuURzETqQvtyHAOTQZsMZBcVwQAdOXIXYIxpDloAWXdkmVJkpEOArgDQhgPIMLlteUbgDcSDgapSfCOWfqsfAvJZhRFKtalZfWSJVcUWRNthzNLAPlPWNgohoWKbTZReXfunSszQTsVhethqrlsHgnzIfoFoFfNpabGUfzxdjELqdQTwTaSXPBzKWYwUeTHQGpNpzbiWPKUZZQoTcySxBOExlJYvvAqjbvWXovpwtjjftYsLVxELoKLjmKMderHBDiiqplfJGJBEIjpuGApTsIWsvaQWWhQmYUbgSYdfqBQSGBUqSgJYpdellAnnXkyjuUuyZhQyStOxAHMXovJmaWDsDGFwwFwsVfDHAQjlRdPJXnNpvLGfqdQcJJtRWjWYNLjkcfxYnhtiiquEZqqSocmqbhNjqgFBknwOnIQghQaIgpUNPSgAeSPVGkYcKoYudBUyazqKuzCVonzInJLExYOnUvpYZagngfmgctMogDflQgOjMrlNbMsEFJnoZkMGQugEXugxjZAcJutWegjjRgDTKVHGziOTgQSKFsuBdOUTaJZDSmJDvxtbZgcHuayyVSZavMBTefOTqEkeEQltytdlVgvhZuPVsWYfajlhtDUKFcXkvHsmOlGkTcyVHPwvInFegeeNPLZIIkouTzcpSus');
    txn_2927.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2927.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2927.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2928 = db.transaction(['objectStore_1960'], 'readonly', {durability:"default"})
    var objectStore_1960 = txn_2928.objectStore('objectStore_1960');
    txn_2928.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2928.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2928.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2929 = db.transaction(['objectStore_1959'], 'readwrite', {durability:"relaxed"})
    var objectStore_1959 = txn_2929.objectStore('objectStore_1959');
    var add_2 = objectStore_1959.add({f0_h: '<array>', f1_b: '<number>', f2_a: '<string>', f3_l: '<null>', f4_u: '<array>', f5_k: '<string>', f6_z: '<object>', f7_y: '<boolean>', f8_t: '<object>', f9_s: '<number>'}, 'JxWqMkUrGVJQnnVRJrFbENvKDpclzGxZfZzZljfThYZDAAwknhTAcRtbxuFWRIrhLzYpPyZCOxQleAxCLYHLPFmJHYYYUoqWjiMluXEPJzLiTgkXYFltlJWeDrUTcwohbVAeuvaABRtsRACKoebffnAIlFslXXzzCMisuLsRCdQoXUJJnXOmpxpxDTQJCMpohSOBwhSRdvIgOLLJPAOtIkKSKOXzpycbBxlJPJrQIhpSfmaSJGAVlgNFQBDqgoIHRpixUMPMvCUnfwAcjaMUgGqjmrGmyZvhlXqikTChLIthpmlxKpXiCCrHhJATCZiZNtDBzracPDuOyBJUSbinLYmsLDJcYJPsGuTiRcKcdtgvBwNiESWiyHLAKYpcZYIwNwqrQHUUKtXDDaVkETmIDrCIIVZdxvVNwWRIXDuyHJCXGRqDHfxWARFpoAykqtERLwiMJeEXwtlHbgGRRwDwLAHfQwnVJXkYzfzBxXBWgBghNCQDVplegPdANIUMeWXMXhUuJHyQJjzCsvDIEzlSDiXTiSGfidpwHJGJqVMhNBnuSzGatvCCrBIxzDwoYZmpDaYTrFXdwXgyzkVOElwpBjqgrwLrlYmCHdOqBEKqOwOkXFhgTEgeOXGlKoAawQfrEnjwZKFrZetKLSkPucaIkiCKvwozHVfUqwbAXWHTTOgmPaypRaXLasZjjwYQIJBEEbKshDvNhUxQtpJHTVZGOLtpXQnbHQTcvEsZIrgVCjOWwYkVFfyhFhEXrGSyRPJQRfrpOgLGIlOsbQWsNSadnoYrHcpBoeclpRROilkRSDbGGvdcnnpIbYwxxxAJGyLwdesVxwCNDADYTCmuoJfGZByqAEqxSvibvumIZNBg');
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.only('JxWqMkUrGVJQnnVRJrFbENvKDpclzGxZfZzZljfThYZDAAwknhTAcRtbxuFWRIrhLzYpPyZCOxQleAxCLYHLPFmJHYYYUoqWjiMluXEPJzLiTgkXYFltlJWeDrUTcwohbVAeuvaABRtsRACKoebffnAIlFslXXzzCMisuLsRCdQoXUJJnXOmpxpxDTQJCMpohSOBwhSRdvIgOLLJPAOtIkKSKOXzpycbBxlJPJrQIhpSfmaSJGAVlgNFQBDqgoIHRpixUMPMvCUnfwAcjaMUgGqjmrGmyZvhlXqikTChLIthpmlxKpXiCCrHhJATCZiZNtDBzracPDuOyBJUSbinLYmsLDJcYJPsGuTiRcKcdtgvBwNiESWiyHLAKYpcZYIwNwqrQHUUKtXDDaVkETmIDrCIIVZdxvVNwWRIXDuyHJCXGRqDHfxWARFpoAykqtERLwiMJeEXwtlHbgGRRwDwLAHfQwnVJXkYzfzBxXBWgBghNCQDVplegPdANIUMeWXMXhUuJHyQJjzCsvDIEzlSDiXTiSGfidpwHJGJqVMhNBnuSzGatvCCrBIxzDwoYZmpDaYTrFXdwXgyzkVOElwpBjqgrwLrlYmCHdOqBEKqOwOkXFhgTEgeOXGlKoAawQfrEnjwZKFrZetKLSkPucaIkiCKvwozHVfUqwbAXWHTTOgmPaypRaXLasZjjwYQIJBEEbKshDvNhUxQtpJHTVZGOLtpXQnbHQTcvEsZIrgVCjOWwYkVFfyhFhEXrGSyRPJQRfrpOgLGIlOsbQWsNSadnoYrHcpBoeclpRROilkRSDbGGvdcnnpIbYwxxxAJGyLwdesVxwCNDADYTCmuoJfGZByqAEqxSvibvumIZNBg');
        get_2 = objectStore_1959.get(KeyRange_14);
    }
    catch (e){
    }

    var clear_4 = objectStore_1959.clear();
    var delete_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('JxWqMkUrGVJQnnVRJrFbENvKDpclzGxZfZzZljfThYZDAAwknhTAcRtbxuFWRIrhLzYpPyZCOxQleAxCLYHLPFmJHYYYUoqWjiMluXEPJzLiTgkXYFltlJWeDrUTcwohbVAeuvaABRtsRACKoebffnAIlFslXXzzCMisuLsRCdQoXUJJnXOmpxpxDTQJCMpohSOBwhSRdvIgOLLJPAOtIkKSKOXzpycbBxlJPJrQIhpSfmaSJGAVlgNFQBDqgoIHRpixUMPMvCUnfwAcjaMUgGqjmrGmyZvhlXqikTChLIthpmlxKpXiCCrHhJATCZiZNtDBzracPDuOyBJUSbinLYmsLDJcYJPsGuTiRcKcdtgvBwNiESWiyHLAKYpcZYIwNwqrQHUUKtXDDaVkETmIDrCIIVZdxvVNwWRIXDuyHJCXGRqDHfxWARFpoAykqtERLwiMJeEXwtlHbgGRRwDwLAHfQwnVJXkYzfzBxXBWgBghNCQDVplegPdANIUMeWXMXhUuJHyQJjzCsvDIEzlSDiXTiSGfidpwHJGJqVMhNBnuSzGatvCCrBIxzDwoYZmpDaYTrFXdwXgyzkVOElwpBjqgrwLrlYmCHdOqBEKqOwOkXFhgTEgeOXGlKoAawQfrEnjwZKFrZetKLSkPucaIkiCKvwozHVfUqwbAXWHTTOgmPaypRaXLasZjjwYQIJBEEbKshDvNhUxQtpJHTVZGOLtpXQnbHQTcvEsZIrgVCjOWwYkVFfyhFhEXrGSyRPJQRfrpOgLGIlOsbQWsNSadnoYrHcpBoeclpRROilkRSDbGGvdcnnpIbYwxxxAJGyLwdesVxwCNDADYTCmuoJfGZByqAEqxSvibvumIZNBg', 'JxWqMkUrGVJQnnVRJrFbENvKDpclzGxZfZzZljfThYZDAAwknhTAcRtbxuFWRIrhLzYpPyZCOxQleAxCLYHLPFmJHYYYUoqWjiMluXEPJzLiTgkXYFltlJWeDrUTcwohbVAeuvaABRtsRACKoebffnAIlFslXXzzCMisuLsRCdQoXUJJnXOmpxpxDTQJCMpohSOBwhSRdvIgOLLJPAOtIkKSKOXzpycbBxlJPJrQIhpSfmaSJGAVlgNFQBDqgoIHRpixUMPMvCUnfwAcjaMUgGqjmrGmyZvhlXqikTChLIthpmlxKpXiCCrHhJATCZiZNtDBzracPDuOyBJUSbinLYmsLDJcYJPsGuTiRcKcdtgvBwNiESWiyHLAKYpcZYIwNwqrQHUUKtXDDaVkETmIDrCIIVZdxvVNwWRIXDuyHJCXGRqDHfxWARFpoAykqtERLwiMJeEXwtlHbgGRRwDwLAHfQwnVJXkYzfzBxXBWgBghNCQDVplegPdANIUMeWXMXhUuJHyQJjzCsvDIEzlSDiXTiSGfidpwHJGJqVMhNBnuSzGatvCCrBIxzDwoYZmpDaYTrFXdwXgyzkVOElwpBjqgrwLrlYmCHdOqBEKqOwOkXFhgTEgeOXGlKoAawQfrEnjwZKFrZetKLSkPucaIkiCKvwozHVfUqwbAXWHTTOgmPaypRaXLasZjjwYQIJBEEbKshDvNhUxQtpJHTVZGOLtpXQnbHQTcvEsZIrgVCjOWwYkVFfyhFhEXrGSyRPJQRfrpOgLGIlOsbQWsNSadnoYrHcpBoeclpRROilkRSDbGGvdcnnpIbYwxxxAJGyLwdesVxwCNDADYTCmuoJfGZByqAEqxSvibvumIZNBg', true, false);
        delete_1 = objectStore_1959.delete(KeyRange_16);
    }
    catch (e){
    }

    var put_3 = objectStore_1959.put({f0_k: '<string>', f1_n: '<null>', f2_w: '<object>', f3_a: '<number>', f4_c: '<string>', f5_r: '<null>', f6_o: '<array>', f7_s: '<null>', f8_t: '<array>', f9_u: '<null>', f10_m: '<array>', f11_h: '<number>', f12_l: '<array>', f13_k: '<number>', f14_q: '<null>', f15_e: '<string>', f16_z: '<null>', f17_t: '<null>', f18_q: '<number>', f19_k: '<number>', f20_q: '<boolean>', f21_k: '<boolean>', f22_k: '<object>', f23_f: '<string>', f24_w: '<string>', f25_f: '<string>', f26_w: '<null>', f27_f: '<object>', f28_t: '<null>', f29_w: '<object>', f30_u: '<array>', f31_j: '<null>', f32_b: '<string>', f33_k: '<null>', f34_w: '<object>', f35_u: '<string>', f36_k: '<null>', f37_k: '<boolean>', f38_k: '<string>', f39_o: '<string>', f40_f: '<object>', f41_m: '<boolean>', f42_p: '<array>', f43_r: '<null>', f44_h: '<null>', f45_g: '<number>', f46_z: '<number>', f47_p: '<boolean>', f48_f: '<string>', f49_n: '<string>', f50_n: '<number>', f51_c: '<string>', f52_j: '<boolean>', f53_v: '<boolean>', f54_e: '<string>', f55_g: '<array>', f56_i: '<array>', f57_v: '<object>', f58_p: '<object>', f59_t: '<number>', f60_s: '<null>', f61_q: '<boolean>', f62_l: '<object>', f63_u: '<string>', f64_z: '<null>', f65_e: '<boolean>', f66_m: '<number>', f67_v: '<null>', f68_p: '<string>', f69_u: '<object>', f70_n: '<null>', f71_c: '<boolean>', f72_r: '<array>', f73_v: '<array>', f74_p: '<array>', f75_l: '<object>', f76_u: '<number>', f77_t: '<array>', f78_n: '<null>', f79_c: '<null>', f80_f: '<array>', f81_d: '<array>', f82_c: '<object>', f83_g: '<array>', f84_a: '<object>', f85_k: '<string>', f86_p: '<number>', f87_t: '<object>', f88_k: '<number>', f89_s: '<null>', f90_a: '<null>', f91_f: '<object>', f92_m: '<string>', f93_i: '<null>', f94_y: '<boolean>', f95_h: '<number>', f96_f: '<string>', f97_s: '<string>', f98_j: '<null>', f99_h: '<number>', f100_k: '<string>', f101_m: '<string>', f102_g: '<null>', f103_a: '<null>', f104_i: '<number>', f105_w: '<array>', f106_q: '<string>', f107_i: '<array>', f108_a: '<array>', f109_j: '<string>', f110_g: '<string>', f111_a: '<null>', f112_d: '<boolean>', f113_o: '<number>', f114_g: '<null>', f115_r: '<number>', f116_m: '<null>', f117_t: '<object>', f118_i: '<null>', f119_h: '<number>'}, 'KuAeCwnIdbrYhFAOnOQXjOeoygKouIuyzylsKGeSpGnKQJqqckXJdzKpcmbWhQUyWagPiGLBzrqdevJGhDGqSmdoQQYwylOhPzUdrVSRQuawsAqojEgaKQbmhRUayphJsohjSfTDKWlhXxJnmjkdyvcHkgvJWDffnidyEeEGkPMBqxaOczeJkQQUPYQEbLSRxXtcxpljRjyghRRdPFyhYkKXYPHZAFiAWNBwJjLmmYNTIUtdUqchjKBbrEIFRSJQldbMrCsqYULwuLtRYLxNCQzROkdnacmFBTGXKwHwXEcALMwfPEAXFLIhBMBxvNFOKsdUopseABPeXoViUPlZLLeJyohjPxwywoZWmLgcSVBfnUTPlQxQksDilTMfoGghlwsvUkvqpYPtvlLVMJaAmgpvuhlADgtzvFcVoetQuBOyvWCTibbghzyLtAXLlHkQXCuOKDGLbjnsKknlAToaWnXSQHTTeOazQLZBvRoFeKqofKYFSnbMBUtMvwQFhgXFoqoqkQMbsCNWuohUlAxTjjpaRuwZIOoZZNpTxnPjyftUwEiJSQjSaiMgwHalFHkGHDgTIRBjowQMIGgWOWEbVTAceEIPUpKhEzCzYiqJtNeRDdWxOkQqTqjNubEdUZlLNlPFNzqOAgGYJaiyLgvZqljRSfOnTkLKcSeMkyoaWFkTvxMlHUDwccYblyRCmZtbHBcPqhtcJEkrYFxqPlienWDilkLxXBwfcqgVOuxrqOCFmilSRmPlQ');
    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('KuAeCwnIdbrYhFAOnOQXjOeoygKouIuyzylsKGeSpGnKQJqqckXJdzKpcmbWhQUyWagPiGLBzrqdevJGhDGqSmdoQQYwylOhPzUdrVSRQuawsAqojEgaKQbmhRUayphJsohjSfTDKWlhXxJnmjkdyvcHkgvJWDffnidyEeEGkPMBqxaOczeJkQQUPYQEbLSRxXtcxpljRjyghRRdPFyhYkKXYPHZAFiAWNBwJjLmmYNTIUtdUqchjKBbrEIFRSJQldbMrCsqYULwuLtRYLxNCQzROkdnacmFBTGXKwHwXEcALMwfPEAXFLIhBMBxvNFOKsdUopseABPeXoViUPlZLLeJyohjPxwywoZWmLgcSVBfnUTPlQxQksDilTMfoGghlwsvUkvqpYPtvlLVMJaAmgpvuhlADgtzvFcVoetQuBOyvWCTibbghzyLtAXLlHkQXCuOKDGLbjnsKknlAToaWnXSQHTTeOazQLZBvRoFeKqofKYFSnbMBUtMvwQFhgXFoqoqkQMbsCNWuohUlAxTjjpaRuwZIOoZZNpTxnPjyftUwEiJSQjSaiMgwHalFHkGHDgTIRBjowQMIGgWOWEbVTAceEIPUpKhEzCzYiqJtNeRDdWxOkQqTqjNubEdUZlLNlPFNzqOAgGYJaiyLgvZqljRSfOnTkLKcSeMkyoaWFkTvxMlHUDwccYblyRCmZtbHBcPqhtcJEkrYFxqPlienWDilkLxXBwfcqgVOuxrqOCFmilSRmPlQ', false);
        count_4 = objectStore_1959.count(KeyRange_18);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('KuAeCwnIdbrYhFAOnOQXjOeoygKouIuyzylsKGeSpGnKQJqqckXJdzKpcmbWhQUyWagPiGLBzrqdevJGhDGqSmdoQQYwylOhPzUdrVSRQuawsAqojEgaKQbmhRUayphJsohjSfTDKWlhXxJnmjkdyvcHkgvJWDffnidyEeEGkPMBqxaOczeJkQQUPYQEbLSRxXtcxpljRjyghRRdPFyhYkKXYPHZAFiAWNBwJjLmmYNTIUtdUqchjKBbrEIFRSJQldbMrCsqYULwuLtRYLxNCQzROkdnacmFBTGXKwHwXEcALMwfPEAXFLIhBMBxvNFOKsdUopseABPeXoViUPlZLLeJyohjPxwywoZWmLgcSVBfnUTPlQxQksDilTMfoGghlwsvUkvqpYPtvlLVMJaAmgpvuhlADgtzvFcVoetQuBOyvWCTibbghzyLtAXLlHkQXCuOKDGLbjnsKknlAToaWnXSQHTTeOazQLZBvRoFeKqofKYFSnbMBUtMvwQFhgXFoqoqkQMbsCNWuohUlAxTjjpaRuwZIOoZZNpTxnPjyftUwEiJSQjSaiMgwHalFHkGHDgTIRBjowQMIGgWOWEbVTAceEIPUpKhEzCzYiqJtNeRDdWxOkQqTqjNubEdUZlLNlPFNzqOAgGYJaiyLgvZqljRSfOnTkLKcSeMkyoaWFkTvxMlHUDwccYblyRCmZtbHBcPqhtcJEkrYFxqPlienWDilkLxXBwfcqgVOuxrqOCFmilSRmPlQ', 'KuAeCwnIdbrYhFAOnOQXjOeoygKouIuyzylsKGeSpGnKQJqqckXJdzKpcmbWhQUyWagPiGLBzrqdevJGhDGqSmdoQQYwylOhPzUdrVSRQuawsAqojEgaKQbmhRUayphJsohjSfTDKWlhXxJnmjkdyvcHkgvJWDffnidyEeEGkPMBqxaOczeJkQQUPYQEbLSRxXtcxpljRjyghRRdPFyhYkKXYPHZAFiAWNBwJjLmmYNTIUtdUqchjKBbrEIFRSJQldbMrCsqYULwuLtRYLxNCQzROkdnacmFBTGXKwHwXEcALMwfPEAXFLIhBMBxvNFOKsdUopseABPeXoViUPlZLLeJyohjPxwywoZWmLgcSVBfnUTPlQxQksDilTMfoGghlwsvUkvqpYPtvlLVMJaAmgpvuhlADgtzvFcVoetQuBOyvWCTibbghzyLtAXLlHkQXCuOKDGLbjnsKknlAToaWnXSQHTTeOazQLZBvRoFeKqofKYFSnbMBUtMvwQFhgXFoqoqkQMbsCNWuohUlAxTjjpaRuwZIOoZZNpTxnPjyftUwEiJSQjSaiMgwHalFHkGHDgTIRBjowQMIGgWOWEbVTAceEIPUpKhEzCzYiqJtNeRDdWxOkQqTqjNubEdUZlLNlPFNzqOAgGYJaiyLgvZqljRSfOnTkLKcSeMkyoaWFkTvxMlHUDwccYblyRCmZtbHBcPqhtcJEkrYFxqPlienWDilkLxXBwfcqgVOuxrqOCFmilSRmPlQ', false, true);
        delete_2 = objectStore_1959.delete(KeyRange_20);
    }
    catch (e){
    }

    var clear_5 = objectStore_1959.clear();
    var clear_6 = objectStore_1959.clear();
    txn_2929.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2929.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2929.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4041')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};