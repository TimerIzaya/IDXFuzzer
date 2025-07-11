let db;
const openRequest = window.indexedDB.open('str_8732', 8035156572598090)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4540', {keypath: 'mUtfBxtCjgYRDfpaqYazrJSIGwzyfSIbtAEacczDhTeamtPrYqilJIuyjAojBWSQqvVCrvhTMRXaPlLighTLeJiSEZaqvHzoVJsQnVPWazuzRAFDamgrUclbHpprcnhXTomQNeaYFfvwpEuJZucMBhABXiZFPOBIkhdbyvuwEOOxQpvfDlryYyDTiTwkljEzRYrhMrDvPXWUklQWoeHyqEnIKNKgTBWyIvYmqBWaEpbggwKsBSmlzSWvdgeQcEydjzIrUzvDrKeXQSECkWIvAsyWZYNHaxeiGRGNJIMgCjdJjAlMuFYKshisFTkLMRcVZLkKYlJVPGHONqhFKHkYymcbhfpRHdLbHupgiQobBqJLMweJLWpcETNLGOiKLMMxUTjhGclBFqmHiSGxXgrKgZeEWGXlmuVRrTBcCUPPrJkLnGtWBYvjBjBMlCffCsHAAyVOWVDaSeojfoLvGoQXqqJGrWcmWkQOKesgMvCbsJuHdAooiBfIAYxxeWpvbesZLCiaBPPDeeflMWfRlrlddAAiCdaChwNUbRQwJiSCZWZUaRTCfsBnFKeikFuhAJPglojZBaaynMIcGdhcaeKvcflRbyeAICuKwNfVMYPtCipbOxzVRKZMPSFPcMKohOtVmzkRZvzmDHOwHhWUazUWIHKaYvuNqLQAAxDrbFNSlAaZbTZsDYvERRQPqXrqFwwIoBAecsuSqxqbjUFrHgmSePnGYuuUDYdfftGUBfQvJjLVsrARpmiUTsLzMOWGYhOcSCgpAxWzxpoh', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_a: '<number>', f1_x: '<boolean>', f2_n: '<string>', f3_j: '<number>', f4_h: '<object>', f5_e: '<null>', f6_j: '<array>', f7_p: '<object>', f8_u: '<boolean>', f9_f: '<array>'}, 'EFCrxBWAQWSphmiCGNfBjykxxyUtrGLPeCCCAzUdwpcNWFCRPeKMZzIsKGVuJLWEyVVJDoLQMPOwJSSymrIFKOUwcaNDEwrlWKjQmbaiSuIYQwdulZZHgvxLsJuVNaNtZAFzBdTNqcEBJycVLhDMqnJFrOCMdRTdaeILxFEHXUrHCscmyISwlcBbXFBkufQFwjWnkOvhpmJtuPheruaqKZBBbDrLSJfQSjYxpWXpqeaZXSdBhKpQplnBSfDmwLRzwqkKlYiSfAJKgVJLoTHjQOrjaTMjJqVcCKXikinegnxecgTsJPffMjnYHRKOHbhCjpOLVfspJRuLbYZflFEHyhrXNKIlqxadrQbFiBOLxtfEAvwRlmLfViTMaLwVFovEGiajGJSawOaXrbhgKKYMFoNwrXDvhhUBGLrRYsJZMowZcCTSOjGvpjnvfynMWDnoNiiQeITLTnSVzFrfcOeVWtGqELalbIeMmFJKCTiBHrCHblUKRkKJustRtqXZaCrFYJlTAaEcETjUjkIEPKyQLZbVkVhUpMNVMtXTCoHiipKolmLwSCAVGtQtqhaljHgdQWtHraMbcRVMihRdQPBRovovZkQxITMBWkkTxWTopFQRsLBfsjLYiYxlpgkAntCmcCOQPqEtujggKOWGsDCPJDpvxXowwvNSCSIDpXMdrPeNXTXSYzXzpXmHKRxTOZHvRqqvixhKiXImpqYnFycHtlturHloFWGxJRVXobUvHFeRUJjoHOKoziTiltPuLsqLRxwynSZXWMHBnUqhQCLBngEBOFyunzRIfylXrzMesjHZExjxldFOncTkIFLlCQbDQkRpdQygjbRwtIzZSiQmGjxVbUhUGxFuUTcQrpYMHIgzJewStoKrTWCoxrRSkpiOmeyaGCHkGVmIxEq');
    var add_0 = objectStore_0.add({f0_c: '<number>', f1_j: '<boolean>', f2_l: '<array>', f3_g: '<string>', f4_i: '<boolean>', f5_c: '<number>', f6_b: '<string>', f7_m: '<array>'}, 'plWqmteOCVpfHTuJlPMCZVkzlrJTRytjiwcGifRLfZfaJEuAVzlamBOQmARbnsUnSboyogzNdDAUsAsjDjlEBmEVcJElkFaGrSEGhMSePIUckFOhNfkXhykvWdQyraYABxjkCNkEPlQpxYKUafJOQsZOuViKmntpxiKjRRvqaFMTRYmXFODvlfmzdcrNzMzhGkrnGYTrHmdUnVHcAEzCveoOtNBksbmvjeuWwapCRYUcyOZOkGcnCNEypvGMJyDxUNEdWwMJlfmbkVRXLpaUDDYxUkPmGQvfeGjMWVjQENsOioSOkMlnpfhRDzrCtsjaygRaeKaAPXVslptkWXQSkIgmnsioZQFrHcyaaBjNWEsinSBUZYIjFhrCPhBbVRZSoAiPvEeIUvIpNQIXXQkVNDYScUqwUqsnSShScolvdwhkhUYfjSQNitXiCWPObkzzlYdYcYcYNMZuIjYRrIvlPjMBttuyiiXCuAcUTmWWOfQkehryRtMLHJDQkOfWsOBXABHTXWVGZPNnMvKUrBketZHGxRPCtpEEoTKohbHwuZZJkdQmgMbxlpDvJursvTIBxZRoZnnftsfmPMwitpToABliMYVKizpAYefqFPgRFMWtRFgSEjvghaWnSbZPjjcaUWOHYeyjKYppWciNYZLdzUeBlNZlLgIuBbjuIJYQASlYGkASJtrMcfOuomNUAKrAqDDvJZcgPzusAzCJrKmPERYimDYJcoAjAYcmhpxiEzbKlGWPfHqgNpNBioHusJWCDMrzAXbWAoaHVSqAvaKMNTbMgNPZeBGODuKGfsPGBTIjFXiyTkruDniVJGfXWrFEtSEXRZtnXEYHKDMUoPCoBAzthIQCUoHAFSfUlhwIYsVgiQxGSpdNjRYhXWMpRgzURAQKvknfQfjjznHAvXWDtxToHMLZGsiTQZzYLhpNIOdukmhQAtNveYC');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('plWqmteOCVpfHTuJlPMCZVkzlrJTRytjiwcGifRLfZfaJEuAVzlamBOQmARbnsUnSboyogzNdDAUsAsjDjlEBmEVcJElkFaGrSEGhMSePIUckFOhNfkXhykvWdQyraYABxjkCNkEPlQpxYKUafJOQsZOuViKmntpxiKjRRvqaFMTRYmXFODvlfmzdcrNzMzhGkrnGYTrHmdUnVHcAEzCveoOtNBksbmvjeuWwapCRYUcyOZOkGcnCNEypvGMJyDxUNEdWwMJlfmbkVRXLpaUDDYxUkPmGQvfeGjMWVjQENsOioSOkMlnpfhRDzrCtsjaygRaeKaAPXVslptkWXQSkIgmnsioZQFrHcyaaBjNWEsinSBUZYIjFhrCPhBbVRZSoAiPvEeIUvIpNQIXXQkVNDYScUqwUqsnSShScolvdwhkhUYfjSQNitXiCWPObkzzlYdYcYcYNMZuIjYRrIvlPjMBttuyiiXCuAcUTmWWOfQkehryRtMLHJDQkOfWsOBXABHTXWVGZPNnMvKUrBketZHGxRPCtpEEoTKohbHwuZZJkdQmgMbxlpDvJursvTIBxZRoZnnftsfmPMwitpToABliMYVKizpAYefqFPgRFMWtRFgSEjvghaWnSbZPjjcaUWOHYeyjKYppWciNYZLdzUeBlNZlLgIuBbjuIJYQASlYGkASJtrMcfOuomNUAKrAqDDvJZcgPzusAzCJrKmPERYimDYJcoAjAYcmhpxiEzbKlGWPfHqgNpNBioHusJWCDMrzAXbWAoaHVSqAvaKMNTbMgNPZeBGODuKGfsPGBTIjFXiyTkruDniVJGfXWrFEtSEXRZtnXEYHKDMUoPCoBAzthIQCUoHAFSfUlhwIYsVgiQxGSpdNjRYhXWMpRgzURAQKvknfQfjjznHAvXWDtxToHMLZGsiTQZzYLhpNIOdukmhQAtNveYC', 'EFCrxBWAQWSphmiCGNfBjykxxyUtrGLPeCCCAzUdwpcNWFCRPeKMZzIsKGVuJLWEyVVJDoLQMPOwJSSymrIFKOUwcaNDEwrlWKjQmbaiSuIYQwdulZZHgvxLsJuVNaNtZAFzBdTNqcEBJycVLhDMqnJFrOCMdRTdaeILxFEHXUrHCscmyISwlcBbXFBkufQFwjWnkOvhpmJtuPheruaqKZBBbDrLSJfQSjYxpWXpqeaZXSdBhKpQplnBSfDmwLRzwqkKlYiSfAJKgVJLoTHjQOrjaTMjJqVcCKXikinegnxecgTsJPffMjnYHRKOHbhCjpOLVfspJRuLbYZflFEHyhrXNKIlqxadrQbFiBOLxtfEAvwRlmLfViTMaLwVFovEGiajGJSawOaXrbhgKKYMFoNwrXDvhhUBGLrRYsJZMowZcCTSOjGvpjnvfynMWDnoNiiQeITLTnSVzFrfcOeVWtGqELalbIeMmFJKCTiBHrCHblUKRkKJustRtqXZaCrFYJlTAaEcETjUjkIEPKyQLZbVkVhUpMNVMtXTCoHiipKolmLwSCAVGtQtqhaljHgdQWtHraMbcRVMihRdQPBRovovZkQxITMBWkkTxWTopFQRsLBfsjLYiYxlpgkAntCmcCOQPqEtujggKOWGsDCPJDpvxXowwvNSCSIDpXMdrPeNXTXSYzXzpXmHKRxTOZHvRqqvixhKiXImpqYnFycHtlturHloFWGxJRVXobUvHFeRUJjoHOKoziTiltPuLsqLRxwynSZXWMHBnUqhQCLBngEBOFyunzRIfylXrzMesjHZExjxldFOncTkIFLlCQbDQkRpdQygjbRwtIzZSiQmGjxVbUhUGxFuUTcQrpYMHIgzJewStoKrTWCoxrRSkpiOmeyaGCHkGVmIxEq', true, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_h: '<array>', f1_q: '<string>', f2_l: '<number>', f3_o: '<string>', f4_g: '<number>'}, 'sTkxBcNdabcUtCntzJgzBMmcLPlIpfGahJGEHTvgJyeATvcMUrqxsEOBNzWzrPQwomvNpqvWYlnzqeNIAxDiIYyAGQthANtUILKGeBtOEUsfXGlGdbzCjfbHeptIQyVZxUxcuaXESDIVFfuYhzEtwujZWSvCXAilFXIdmEsUlQBtZldGkQaKRMUBvdLvgwtXVZsZCYXpttuEdWAvwIokMqLvYFmFQLLhgpDcEuUrSGnPvVNqZQZQtlYvIHOWyPqgiwsJQoFuffLOmIiHsLFzjnO');
    var count_1 = objectStore_0.count();
    var index_3026 = objectStore_0.createIndex('index_3026', 'test', {unique: false, multiEntry: true});
    db.deleteObjectStore('objectStore_4540')
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
const deleteRequest = indexedDB.deleteDatabase('str_5408')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};