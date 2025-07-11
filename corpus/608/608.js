let db;
const openRequest = window.indexedDB.open('str_5161', 3011839696893013)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3662', {keypath: 'EDuuuyOeeNjqKJFFNcaOHRejyWpZchZbSXQAtYwLkpbcWkGDdpdJckpRHWidwldAShenhBXvUTBdVrhXkKuLDNwRQkgmVhQzYmJYwzuaEbNmpADLPoLThEcIevLRPkpFqGRTwWtZYbXlsVdFuqPXlSqIQsxEPNfMcbseBvZtdeKAYrJghstcAnhlcDxRqbDaXUvkUYMZPUAoUTpKlnQJHAIxUfVxzEffcRKhtSGrnBxRlTaxcqUGXFdjvmhGzHJAkzhipMFpGXpNeHKvPYYqJnWxUUoHONMpEiEjBAvbuYJEKOfkgMUEbhmKSFFINHzetNBVmrrvYRDjlReggXyccaHxdXezSIIvdzwRjUMVWEZjRQojXaynbMczilbQYXThIiDtOtWoCeEloQwmYkzxNwYgAArAhfglGHZUnIoHSiASfUwCQIzarYzKMNEERcvnMOBbQjKRKfavcwAamksFVQNVVNJZkDxdnOtXWBzdbBEpZSMTUVxPgZpyrChdcrPwsacUflrCGArsYYTFsuqSbusSTHqrqzhRVtLlwifnjmZPvNjDDRsCZrHPNGwbPeVsDdsvvEbqZkCZzjXOGfbRmnhwGACVJWjvyZHXZATxaZqSGRWXypCuXRJWOabZyTfqBpBHeTfOfDtpbieyNODJrkQGuVS'});
    var objectStore_1 = db.createObjectStore('objectStore_3663', {keypath: 'xKvgzXoJwCEweypqqLZdhYrmTFQDY', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_3664');
    var put_0 = objectStore_2.put({f0_z: '<boolean>'}, 'OyRxTMOPVFBUKCIPUgFCJKLRWzxViYcLIpimShBBduMIiYaODeFmPsDHdRVtmpKymquBXYNiVcZhbYFdRFHVuRWyuJfZAREthiMdHOsHMhfQtUkVJPjEdPoLopiYt');
    var add_0 = objectStore_0.add({f0_c: '<array>', f1_w: '<object>', f2_b: '<object>', f3_f: '<number>', f4_g: '<boolean>', f5_z: '<object>', f6_t: '<string>', f7_a: '<null>', f8_d: '<array>'}, 'SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
    var clear_0 = objectStore_1.clear();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', 'SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_h: '<number>', f1_m: '<boolean>', f2_q: '<string>', f3_m: '<boolean>'}, 'XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
    var add_2 = objectStore_2.add({f0_v: '<number>', f1_o: '<string>', f2_l: '<object>'}, 'XZkvdkQSKgNgNSbyrqoVzSXuvOVnURSMWUvHuPqjfhhDDsEemkZMnqqncIWqBCisPslHzYqxksHRtxDCWeRrGYvtTHjFjrBTtUTGAFBuxg');
    var add_3 = objectStore_1.add({f0_g: '<string>', f1_f: '<string>', f2_w: '<object>', f3_p: '<null>', f4_c: '<string>', f5_z: '<array>'}, 'mihLKqVeERsBrvNzFegoOnwexmBdhiixfajCmUidPzJjkzxuRxreYW');
    var getAllKeys_0 = objectStore_2.getAllKeys(4040440659);
    var getAllKeys_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('XZkvdkQSKgNgNSbyrqoVzSXuvOVnURSMWUvHuPqjfhhDDsEemkZMnqqncIWqBCisPslHzYqxksHRtxDCWeRrGYvtTHjFjrBTtUTGAFBuxg', 'OyRxTMOPVFBUKCIPUgFCJKLRWzxViYcLIpimShBBduMIiYaODeFmPsDHdRVtmpKymquBXYNiVcZhbYFdRFHVuRWyuJfZAREthiMdHOsHMhfQtUkVJPjEdPoLopiYt', false, true);
        getAllKeys_1 = objectStore_2.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('OyRxTMOPVFBUKCIPUgFCJKLRWzxViYcLIpimShBBduMIiYaODeFmPsDHdRVtmpKymquBXYNiVcZhbYFdRFHVuRWyuJfZAREthiMdHOsHMhfQtUkVJPjEdPoLopiYt');
        getAllKeys_1 = objectStore_2.getAllKeys(KeyRange_3);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5475 = db.transaction(['objectStore_3662', 'objectStore_3664'], 'readonly', {durability:"relaxed"})
    var objectStore_3662 = txn_5475.objectStore('objectStore_3662');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        get_1 = objectStore_3662.get(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        getAll_0 = objectStore_3662.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        getAll_0 = objectStore_3662.getAll(KeyRange_7);
    }

    var getAllKeys_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', true);
        getAllKeys_2 = objectStore_3662.getAllKeys(KeyRange_8, 2031462504);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        getAllKeys_2 = objectStore_3662.getAllKeys(KeyRange_9);
    }

    var getAll_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', 'XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', true, true);
        getAll_1 = objectStore_3662.getAll(KeyRange_10, 3080849873);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        getAll_1 = objectStore_3662.getAll(KeyRange_11);
    }

    txn_5475.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5475.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5475.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5476 = db.transaction(['objectStore_3662'], 'readonly', {durability:"strict"})
    var objectStore_3662 = txn_5476.objectStore('objectStore_3662');
    var getAll_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', false);
        getAll_2 = objectStore_3662.getAll(KeyRange_12, 2422662592);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        getAll_2 = objectStore_3662.getAll(KeyRange_13);
    }

    var getAll_3;
    try{
        KeyRange_14 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        getAll_3 = objectStore_3662.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        getAll_3 = objectStore_3662.getAll(KeyRange_15);
    }

    var getAllKeys_3 = objectStore_3662.getAllKeys();
    var count_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', 'SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', true, true);
        count_0 = objectStore_3662.count(KeyRange_16);
    }
    catch (e){
    }

    var count_1 = objectStore_3662.count();
    var count_2 = objectStore_3662.count();
    var getAll_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', 'XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', false, false);
        getAll_4 = objectStore_3662.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        getAll_4 = objectStore_3662.getAll(KeyRange_19);
    }

    var getAll_5 = objectStore_3662.getAll();
    var getAll_6 = objectStore_3662.getAll();
    txn_5476.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5476.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5476.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5477 = db.transaction(['objectStore_3662'], 'readonly', {durability:"relaxed"})
    var objectStore_3662 = txn_5477.objectStore('objectStore_3662');
    var getAll_7 = objectStore_3662.getAll();
    var get_2;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', true);
        get_2 = objectStore_3662.get(KeyRange_20);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        get_3 = objectStore_3662.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_3662.getAllKeys(2897001715);
    var count_3 = objectStore_3662.count();
    var getAllKeys_5 = objectStore_3662.getAllKeys();
    var count_4;
    try{
        KeyRange_24 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        count_4 = objectStore_3662.count(KeyRange_24);
    }
    catch (e){
    }

    var count_5 = objectStore_3662.count();
    txn_5477.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5477.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5477.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5478 = db.transaction(['objectStore_3662'], 'readonly', {durability:"strict"})
    var objectStore_3662 = txn_5478.objectStore('objectStore_3662');
    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.only('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ');
        get_4 = objectStore_3662.get(KeyRange_26);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_3662.getAllKeys(380069982);
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', 'SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', false, false);
        get_5 = objectStore_3662.get(KeyRange_28);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        get_6 = objectStore_3662.get(KeyRange_30);
    }
    catch (e){
    }

    var getAll_8;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', false);
        getAll_8 = objectStore_3662.getAll(KeyRange_32, 2262582526);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        getAll_8 = objectStore_3662.getAll(KeyRange_33);
    }

    var getAllKeys_7 = objectStore_3662.getAllKeys(3549679206);
    txn_5478.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5478.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5478.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5479 = db.transaction(['objectStore_3662'], 'readwrite', {durability:"relaxed"})
    var objectStore_3662 = txn_5479.objectStore('objectStore_3662');
    var get_7;
    try{
        KeyRange_34 = IDBKeyRange.bound('SgoOOOIqncEfZWzhXJObkLHALwSsZdoYlJJAUWArwmqzuiTEmmVGlFvGOKpTBBNSjERAPWRiTSNLebkIwxOQXkhNUYdkPiFAoRXDpvarxNVNlcWcLJbLNwMfQoWUDfVOrfVULyLQthtjskaXfbdKzpsTBOowVONROVvNuQhqAiXKwSMzxUoTijrfzqKVmJ', 'XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', true, false);
        get_7 = objectStore_3662.get(KeyRange_34);
    }
    catch (e){
    }

    var add_4 = objectStore_3662.add({f0_q: '<object>', f1_p: '<string>', f2_d: '<number>'}, 'STRMQCbzPKvtuBlYtwPnTWhSBWvpbTgeBTrTIIpsmbjhZUhxgVnLphvaztIDodXtlqUxCesrudkqqfWNkEGtzozLOciTkJUPkFRhsCHxqEyjoIMAmujTfOZnmtipZAHvalBrvJnxOZNESXicNkppcXNKwWYwmCAyybVTZnVXApbYCiQplmuZHTldYdJbVbRkUXMwXCijwxXjZTMjnRpoPALfBxlKTXJbRxpIUhzRSxktAzbouzdcavOhWYEuBEMNnqNreXSzXYPmAuBHESYckxiPKvyOKzzigClXcYlahyaqbZBHmZrMcNgMnydIMBmytBOTVywBVkbyqxWVgeYouLomTkFsBKpcowhKaIpFbzPpTKeesshZosMUWnggVI');
    var put_1 = objectStore_3662.put({f0_u: '<array>', f1_p: '<null>', f2_x: '<number>', f3_f: '<number>', f4_j: '<array>', f5_a: '<number>', f6_v: '<object>', f7_g: '<array>', f8_k: '<array>', f9_i: '<array>', f10_m: '<object>', f11_b: '<boolean>', f12_z: '<object>', f13_o: '<number>', f14_f: '<boolean>', f15_q: '<null>', f16_f: '<array>', f17_j: '<object>', f18_u: '<number>', f19_k: '<string>', f20_t: '<boolean>', f21_n: '<string>', f22_f: '<number>', f23_v: '<string>', f24_w: '<string>', f25_c: '<string>', f26_a: '<object>', f27_l: '<string>', f28_q: '<array>', f29_h: '<boolean>', f30_p: '<object>', f31_a: '<number>', f32_g: '<string>', f33_i: '<object>', f34_z: '<boolean>', f35_d: '<object>', f36_z: '<number>', f37_h: '<string>', f38_w: '<boolean>', f39_z: '<string>', f40_s: '<string>', f41_p: '<array>', f42_h: '<boolean>', f43_e: '<number>', f44_u: '<array>', f45_v: '<string>', f46_h: '<number>', f47_k: '<boolean>', f48_h: '<number>', f49_t: '<object>', f50_h: '<number>', f51_l: '<number>', f52_u: '<null>', f53_d: '<null>', f54_w: '<string>', f55_l: '<string>', f56_k: '<object>', f57_h: '<boolean>', f58_n: '<object>', f59_c: '<string>', f60_v: '<array>', f61_l: '<array>', f62_p: '<array>', f63_e: '<null>', f64_d: '<boolean>', f65_s: '<string>', f66_h: '<object>', f67_v: '<string>', f68_l: '<null>', f69_s: '<string>', f70_b: '<null>', f71_h: '<boolean>', f72_m: '<null>', f73_h: '<string>', f74_f: '<object>', f75_s: '<array>', f76_o: '<string>', f77_c: '<array>', f78_m: '<number>', f79_g: '<null>', f80_h: '<number>', f81_n: '<boolean>', f82_w: '<object>', f83_p: '<null>', f84_a: '<string>', f85_e: '<array>', f86_x: '<boolean>', f87_t: '<string>', f88_d: '<object>', f89_h: '<number>', f90_j: '<boolean>', f91_v: '<number>', f92_g: '<number>', f93_y: '<null>', f94_r: '<string>', f95_a: '<boolean>', f96_j: '<array>', f97_u: '<array>', f98_j: '<number>', f99_o: '<object>', f100_x: '<null>', f101_y: '<number>', f102_f: '<boolean>', f103_n: '<string>', f104_h: '<array>', f105_h: '<array>', f106_v: '<boolean>', f107_z: '<number>', f108_c: '<object>', f109_g: '<string>', f110_z: '<string>', f111_r: '<string>', f112_j: '<object>', f113_r: '<number>', f114_m: '<null>', f115_w: '<null>', f116_h: '<null>', f117_w: '<null>', f118_r: '<object>', f119_s: '<array>', f120_u: '<null>', f121_z: '<boolean>', f122_s: '<null>', f123_d: '<null>', f124_o: '<boolean>', f125_j: '<string>', f126_x: '<string>', f127_d: '<array>', f128_d: '<number>', f129_j: '<object>', f130_q: '<array>', f131_f: '<number>', f132_m: '<boolean>', f133_i: '<array>', f134_b: '<array>', f135_w: '<boolean>', f136_u: '<array>', f137_j: '<object>', f138_s: '<array>', f139_a: '<null>', f140_o: '<null>', f141_i: '<array>', f142_l: '<array>', f143_u: '<number>'}, 'UoVLwadsfLOypCWmvbcoHEnoSoIhYrztErvDJZnGIpCiQCEWpODoWWltKtfDoXcKNtYtUReGHlISTuZYzdTuZQMHnMbISHeFQteFMVeNHFtsqpkjszgFInGdCCMJbgeVtbtPhWiPVhoKJbnerVBkoDilOKFrgNPFYUAEvdodQrLPJuTmLysjsQHWoHhWtgTsAyVDxvrzTadAaFGKGoYWKRILxYaqirPkPXzvdidXxtszyzLCgPifDcY');
    var add_5 = objectStore_3662.add({f0_n: '<boolean>', f1_s: '<number>', f2_e: '<null>', f3_f: '<boolean>', f4_j: '<string>', f5_x: '<array>', f6_v: '<string>'}, 'KIGNCWOpVkfeVuPpIycYOQWAKyyYooveUKRcJEvjqILoZiXzFivMOPWidLwAlfsxCTIcqVeeOoyqeTEorjocFUOledJzKSxciESpcfTdhWymEYdHSLDnFVbmczQqyZnIKrWZlYuuxatklPhymOxnvLzFejTnzpmqrfJpfSgBPYNTzMweogkiBwdRjQOVYpzwNmlwNEZXNZpAJokSHtqtUamDzbXwwgeRChqwILoRucGAyGaDqVRdgPDxpvcLSiyvQQPkbIReuWLqxWpkpoUPPVNaCBQnUIyhPQjfbDHIsmvzRZBtIVuUQtWaYE');
    var add_6 = objectStore_3662.add({f0_k: '<number>', f1_n: '<array>', f2_b: '<object>', f3_y: '<boolean>', f4_f: '<object>', f5_i: '<object>', f6_b: '<object>', f7_c: '<number>'}, 'wdZJAkEZKYbYqYxbUrxKofGYBALpnSJDMaHlTSKBSkoRnllGdgYbPZcFESzQdJzOoJMcNcorKjnRAUJXiAPrzECHhZlrTbCkYoKomaVLsWlDgfRlGRUUETkUlKWLgwuaaZoBEbDvGAbhCTKeItEMBQoVypxQTLdxQdlxbBgorWJrPgXKsHHNQMOQfOhZqPlphOLprGeiHxSHvRvtCuGvvpTcKGdXnmpYOJVpqWTRMdYsUCeyiORHIhheiWkKZIIiMQmJMrAQjjvPcVzdJeoMffRstgLsfhlLwnJqtnkIRVgDjPQXysHuFcKPrbvIFbuDXuDrDPgxVIWiPVMXKYKLWHKtXofjFjBnukxjWZniGeMCorawubuurypxOpykTcnrGkwlTrDPlKbpQQSWzuOqIFvNrsFpvzLksrLPWaojJVzMpBPhtjQsEfndjUQiFAFZRddtUoAfPYJAlAndAqFhjjqsaCRarWoPfkBtvnfEpDarpnvYAtgqXRWKHxhGgSYYkaoVachNMplHWHhXvPePSaNTNFUcYTaeHheOYPQEwJUvzVwQtSDmgaRWEApQqbxsDgHhcoSSYLfTIIzpJFldIKWMVsOKnxuYFzQXulROrryWRphXIiwlVUyRPabEnUsYAJBTeQRaVKEsRVV');
    var add_7 = objectStore_3662.add({f0_m: '<boolean>', f1_d: '<boolean>', f2_z: '<null>', f3_l: '<object>', f4_f: '<null>', f5_u: '<null>', f6_p: '<null>', f7_d: '<boolean>', f8_m: '<number>'}, 'EsxKsPuvetwCfDNLlrJqVFVpPomoAED');
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.only('UoVLwadsfLOypCWmvbcoHEnoSoIhYrztErvDJZnGIpCiQCEWpODoWWltKtfDoXcKNtYtUReGHlISTuZYzdTuZQMHnMbISHeFQteFMVeNHFtsqpkjszgFInGdCCMJbgeVtbtPhWiPVhoKJbnerVBkoDilOKFrgNPFYUAEvdodQrLPJuTmLysjsQHWoHhWtgTsAyVDxvrzTadAaFGKGoYWKRILxYaqirPkPXzvdidXxtszyzLCgPifDcY');
        get_8 = objectStore_3662.get(KeyRange_36);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_38 = IDBKeyRange.bound('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK', 'STRMQCbzPKvtuBlYtwPnTWhSBWvpbTgeBTrTIIpsmbjhZUhxgVnLphvaztIDodXtlqUxCesrudkqqfWNkEGtzozLOciTkJUPkFRhsCHxqEyjoIMAmujTfOZnmtipZAHvalBrvJnxOZNESXicNkppcXNKwWYwmCAyybVTZnVXApbYCiQplmuZHTldYdJbVbRkUXMwXCijwxXjZTMjnRpoPALfBxlKTXJbRxpIUhzRSxktAzbouzdcavOhWYEuBEMNnqNreXSzXYPmAuBHESYckxiPKvyOKzzigClXcYlahyaqbZBHmZrMcNgMnydIMBmytBOTVywBVkbyqxWVgeYouLomTkFsBKpcowhKaIpFbzPpTKeesshZosMUWnggVI', false, true);
        get_9 = objectStore_3662.get(KeyRange_38);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_40 = IDBKeyRange.only('XHFQgbPtqGIYXkyQTHxLgIGfIWBjuMKegRDUVvJCvfZBIPnlBHmggIGzxtiSuwyhXfeutKDEzrPQdRztjLzdxtBeWSxNeygSOKOtPqpdpcXaWFYOAlJYGYDDeCZK');
        delete_0 = objectStore_3662.delete(KeyRange_40);
    }
    catch (e){
    }

    var clear_1 = objectStore_3662.clear();
    txn_5479.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5479.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5479.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5854')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};