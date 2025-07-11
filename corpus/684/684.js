let db;
const openRequest = window.indexedDB.open('str_348', 1546447043915721)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4127', {keypath: 'VnAanXByDYrGVFOTCtKqnkZWHACtqqYXigLnzOCjEXNzFkQMsKHonbyTlQQyKgxkxtjEuCzwAOQkMIphWCBiuvVGerzCUifkbtPcwtaDcEpsNVDGwGncwwOJmcDrZYzsCrlzuNDayVOFphfDWoPzjEyrGWyXRtuygeBsPXoelWjNQHEQQprRNeaXNmWvKaSfdYpFZWkhPssoJNNLEbIbwCQXqzaWFULQUbIAbfVNQhKkuIMzfbRQtiiHMijOalYHoEMbvACvQrYHNdGINlXgBQzwuRpLjfNRVtnxEImrIWlbuwwarzTJWGkrbxzgPuKbjZKEVrmmrXzVInVJiiQEFfrxGBFHxHEICVRSngBXWCKWyTMKnLxAtqwqtOwfYSKzuzyFIMfLRDqNOKleVeAdpCJjqoPKFaCmgPiolfEPlkrEXoePrufnZdlqxAjZzoqPnAJgeVCAvtuvDfBZbxoONakvORQQWKvouIlbtbENRNUeYWGOmJvqqtXWaTwszxBpkExrcWwPCziOTYcZIdksMXoNoAzuhhybqmbGkgUekNJWUHbIPBlPdxGHVBglCLrtuMGClVYcSpqVJWtPJGyNmXSmKGLjXCoRfjZUthAsDerqKXUBrrWUfitUPfqFDnuzgjzpKYqZpMUvytlAXtodyWTZVFplGlAfOLDgSGoaeEfZbazhDHuxGvlwbwJxpyWicVuyzsJoMhsBDoXeJDwilFDoejcLSdborgcLKlzJzRdIByVQdYEiVWCPhZit', autoIncrement: false});
    var index_2781 = objectStore_0.createIndex('index_2781', 'test', {unique: true, multiEntry: true});
    var put_0 = objectStore_0.put({f0_e: '<null>', f1_u: '<object>'}, 'kDYCSyzXrm');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('kDYCSyzXrm', 'kDYCSyzXrm', true, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_0.add({f0_n: '<boolean>', f1_g: '<boolean>', f2_i: '<string>', f3_t: '<boolean>', f4_a: '<null>'}, 'zDmsPzjBXQvSNclgnYQAMbHdOWXlIQHIAgUiAvpnApoMufXrhxAGvXngnbYXYvEzUNFpGwYLbqPMIVYfqHTdYuiQUCGTjMDbkvoLQsEHLRZEfwzqKGTXUumaPoKZlAJREncQGsXolwIdXjlUJRoTpvKDkBgekBalfXDDtpFYzTnbNyxqjFcsSoINtoMZNVOMMuqdiZdgvNzueTJIFUtDWVQldsBDcMJxokNyRTFkvcgiMzZgWveZdcGubWeUZCRbHVfjNgyPwQyvUdnFqdNHkbHrJHexbmyWfuOUiLeLLCxmFyvcSVvtJJwvZIlvjCjzovWlPtdxBJycPYwMYennwalBoDnMGAylrVwRcejBfiSmIDkzHcnGJsieUzFqnlwPmZZfkduwoHwislxsotnhTHUrazZUxzdaRRpEpKQKHGWXiDWrAZNoiLypqFLJfRxxtubhIcjRzfnTnYDPrMVwpomytsMdlSCuWNgGMndKtZDnETQdlPWopLnEYnABojXXdDmxJfjvoEpaKHsWxJbCGNURVXTWbBgAedpDOOqzmSihOtASYArFXEmeKGTpFHYcYgpfVNAGnKxoTAwkqQLtjMbpwRVyvccgrwijnIiWzYUiZpIEDPRwqYGUPOPZVWeYKifUhkdeBzRdUeSdFsCIPgirssnzCXXCDBGvtGrDFLiEdrGIRlKDzsrZfVtVAyFqDDUlUHkcNhSaqCXLwQmheaWrKHLXwkzHYkGXiQNFuRjtCDrtGymdujsiPtUJBxhJBdfLkaMXkvrSVbgsZTjrBoIGIogZfxNlypvJJKCuXw');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('zDmsPzjBXQvSNclgnYQAMbHdOWXlIQHIAgUiAvpnApoMufXrhxAGvXngnbYXYvEzUNFpGwYLbqPMIVYfqHTdYuiQUCGTjMDbkvoLQsEHLRZEfwzqKGTXUumaPoKZlAJREncQGsXolwIdXjlUJRoTpvKDkBgekBalfXDDtpFYzTnbNyxqjFcsSoINtoMZNVOMMuqdiZdgvNzueTJIFUtDWVQldsBDcMJxokNyRTFkvcgiMzZgWveZdcGubWeUZCRbHVfjNgyPwQyvUdnFqdNHkbHrJHexbmyWfuOUiLeLLCxmFyvcSVvtJJwvZIlvjCjzovWlPtdxBJycPYwMYennwalBoDnMGAylrVwRcejBfiSmIDkzHcnGJsieUzFqnlwPmZZfkduwoHwislxsotnhTHUrazZUxzdaRRpEpKQKHGWXiDWrAZNoiLypqFLJfRxxtubhIcjRzfnTnYDPrMVwpomytsMdlSCuWNgGMndKtZDnETQdlPWopLnEYnABojXXdDmxJfjvoEpaKHsWxJbCGNURVXTWbBgAedpDOOqzmSihOtASYArFXEmeKGTpFHYcYgpfVNAGnKxoTAwkqQLtjMbpwRVyvccgrwijnIiWzYUiZpIEDPRwqYGUPOPZVWeYKifUhkdeBzRdUeSdFsCIPgirssnzCXXCDBGvtGrDFLiEdrGIRlKDzsrZfVtVAyFqDDUlUHkcNhSaqCXLwQmheaWrKHLXwkzHYkGXiQNFuRjtCDrtGymdujsiPtUJBxhJBdfLkaMXkvrSVbgsZTjrBoIGIogZfxNlypvJJKCuXw', 'kDYCSyzXrm', false, true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('zDmsPzjBXQvSNclgnYQAMbHdOWXlIQHIAgUiAvpnApoMufXrhxAGvXngnbYXYvEzUNFpGwYLbqPMIVYfqHTdYuiQUCGTjMDbkvoLQsEHLRZEfwzqKGTXUumaPoKZlAJREncQGsXolwIdXjlUJRoTpvKDkBgekBalfXDDtpFYzTnbNyxqjFcsSoINtoMZNVOMMuqdiZdgvNzueTJIFUtDWVQldsBDcMJxokNyRTFkvcgiMzZgWveZdcGubWeUZCRbHVfjNgyPwQyvUdnFqdNHkbHrJHexbmyWfuOUiLeLLCxmFyvcSVvtJJwvZIlvjCjzovWlPtdxBJycPYwMYennwalBoDnMGAylrVwRcejBfiSmIDkzHcnGJsieUzFqnlwPmZZfkduwoHwislxsotnhTHUrazZUxzdaRRpEpKQKHGWXiDWrAZNoiLypqFLJfRxxtubhIcjRzfnTnYDPrMVwpomytsMdlSCuWNgGMndKtZDnETQdlPWopLnEYnABojXXdDmxJfjvoEpaKHsWxJbCGNURVXTWbBgAedpDOOqzmSihOtASYArFXEmeKGTpFHYcYgpfVNAGnKxoTAwkqQLtjMbpwRVyvccgrwijnIiWzYUiZpIEDPRwqYGUPOPZVWeYKifUhkdeBzRdUeSdFsCIPgirssnzCXXCDBGvtGrDFLiEdrGIRlKDzsrZfVtVAyFqDDUlUHkcNhSaqCXLwQmheaWrKHLXwkzHYkGXiQNFuRjtCDrtGymdujsiPtUJBxhJBdfLkaMXkvrSVbgsZTjrBoIGIogZfxNlypvJJKCuXw', true);
        delete_0 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var put_1 = objectStore_0.put({f0_m: '<boolean>'}, 'xNEKyXDJRJrnGUrpjLNThEFUkYegKgttHoienjnukaMRztfbjALzxyzEAjXXPDyeSYDBkDcAIeAeJxIjlHrhxtpRdyRLfByjDSlvORLTIZXyWQoYvzeVOdsAOgQxasbGoYLlxWqqYoCUqRoliXkFlWPDvbYyzPV');
    var count_1 = objectStore_0.count();
    db.deleteObjectStore('objectStore_4127')
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
const deleteRequest = indexedDB.deleteDatabase('str_5121')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};