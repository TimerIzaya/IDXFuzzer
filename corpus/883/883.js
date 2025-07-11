let db;
const openRequest = window.indexedDB.open('str_1022', 8209173889805799)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5261');
    var objectStore_1 = db.createObjectStore('objectStore_5262');
    var clear_0 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_5263', {keypath: 'FBYHGrZYaKEvouflIhprJDmfrGAfdLxSJGToexKXjWJvaVQMUtzSXIfbskapAeNYHbUZvxOijzcynNmxIFiLITiCjAwUzfXPavTBEwrWLlnfDLqZuYmWnCzvGbbZhmmcpbchCrrOcWkVJvCNsDBZoZfnfOAUjdBoopFMfjafKONYzIllkpTjgcpAAhPNofYdgQSGJxZIkMPVaCTYXEQuDPbvJlaPrvryKNanuNMrlWiOdexERmlQFaIwfJRueIRpYqkRZGswurfOlZVrXcFiGrBKkpvyeHFTKUuHEakpldtnPogsWsIcGWKmKpRgUywsjChVfmFumbukJtVMZXkuoDlBVKFIHOiudtgfLhlfNTCqhODVIuIBoWhNbOlgnnPUklhYJWSYiskKRESbeqvjTZfiDJtXGhlGfrFnCsovedbNuJyiwIwsqscbPDSYUvIiAmaZcSOAuxpknNDoDrRvlfcvOWXJgYhmVdMGEQCfArQaBBjyuFTkZVKsMRsEoVBSjPryhZarEmcrLHwTqazkrqMQnOGceVpGwppBwBsjcGQKVHAaVbsLrYTJgZUeZmgWeEfmEqmwEcdnmpIyVrtYZNLdXxwpFAwvZtvfutmHPmfpMlHsZcSndahvkUSPpFPOMxCkLygrjliCObQzSCTDKQDeGWpqfplNCMtulclkSBcQdbAVoGEhuEEqdTkJjLJFpZaRbGOwUlbhLMvxhooXFVmPIIFlADOLFazrBnkDAZxTqNlfMeesikYRkOmTYHcoRHNUAztMWfbCVAAhpwCUxNZGyZGIqxuKFsNupvMGLbbDksicRpDnHMgBrHffYwqGJmmTinRxDZuSeWlodQVtrtkcmYyfSfkkaSBbVkpoJrSTHmLctKhADXG', autoIncrement: true});
    var add_0 = objectStore_1.add({f0_e: '<array>', f1_t: '<array>', f2_a: '<null>', f3_n: '<string>'}, 'bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', 'bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', true, false);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_5264', {autoIncrement: false});
    var add_1 = objectStore_0.add({f0_z: '<array>', f1_t: '<null>', f2_m: '<object>', f3_b: '<array>', f4_b: '<null>', f5_j: '<array>'}, 'yllQrBoenJMHwxOVrOVihwPFjTYEOburlkQRtZSJDNMwhgiGAywqhIyXNPuyTGNRJtkSWSlxsoCxgfvnNJAHHtyAdMfMgNiUzNShOxGVznOsNAMuNhsjgoZRSbWhNZXKjzaoPHLsMPjgBlYlOgPKapcPSHgVXItImIFbkoUigYFYLLhpwVEvjeYvijTMqeymZmpgolEfPIMYuGykpILjcqsmJCrCwBFILreVKDXnHfwpwRGoJfxsSpcslvBAPxPDNvFuGkqHSPJHmELTqWGgaEAGaPzmYagfSHCIMVTKaKbyfICsqjKKPSodguGjLCXnZCbBUQeEUZCdsHoDzVLqNzzjYqGLDCpMMmrVRQYIXBgNKYUYeFCQukMUSYLWjwvYuoWSUJlLEzMnLzCRZPhNeFgLfMWbqzqFhHidcNgSmRVKqUNcztQXQhfflYiLdmKiqnPJVvnpOPFvxJeRsYSmvBZxUzBKZWvAgVrccDhwld');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX');
        get_0 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var add_2 = objectStore_3.add({f0_s: '<boolean>', f1_o: '<null>'}, 'OSkeOKDOeUrVEmGHVgLRFyEDoHlTzziwUbnKMcjnKwcbgtJSQPtPhPVNsVTvtTSqjqiRvzvCQzleBOoTrzuRSOpnewbMbLGpIRgqcRDYqEyyQTvCnAROtlDJVpIYtEpGHXWZqbmJOITdHgToTgUBzFdLNwcKRtBnLLesMaJGddexuqhNkqPCJEGpBexYrWqSEJbsVEuzTfAkBxWtnKJKPlAG');
    var index_3528 = objectStore_1.createIndex('index_3528', 'test', {unique: true});
    var objectStore_4 = db.createObjectStore('objectStore_5265');
    var add_3 = objectStore_4.add({f0_q: '<boolean>', f1_u: '<object>', f2_a: '<object>', f3_r: '<object>'}, 'higvxtAtnDTNbIbgOxDOyyLaJMKsAXDfzkWKzpsFNvHqswFAZOVXVoViwFHgXeSyeZFglnfZXLOQYYhkujwdWjMqDxxAiGFhAkoCvrvtlGXllXdexarmUNotNnWEIoUriYEtabkRqmvDucmPTPcugXOZtRVWemKJgWDQgatxygHLHLGtUpedQSZgdXrmDJkZVOznGSBEaSeAdHIVesfEqmsUQoeRcrZbHLsgmQoqgSxWFrZnPjUyaJwvVpziPzsykjsIBAkPHkxpHVNiDkmIKexbQppdyzeIXbYVzOGMzKeuAuPrtMgqJbIbCrUbBSDZdUSImxmGvTWSJTuCNqqHvnfRjgZLLMgheUoAlqTDf');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', 'bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', false, false);
        count_1 = objectStore_1.count(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('higvxtAtnDTNbIbgOxDOyyLaJMKsAXDfzkWKzpsFNvHqswFAZOVXVoViwFHgXeSyeZFglnfZXLOQYYhkujwdWjMqDxxAiGFhAkoCvrvtlGXllXdexarmUNotNnWEIoUriYEtabkRqmvDucmPTPcugXOZtRVWemKJgWDQgatxygHLHLGtUpedQSZgdXrmDJkZVOznGSBEaSeAdHIVesfEqmsUQoeRcrZbHLsgmQoqgSxWFrZnPjUyaJwvVpziPzsykjsIBAkPHkxpHVNiDkmIKexbQppdyzeIXbYVzOGMzKeuAuPrtMgqJbIbCrUbBSDZdUSImxmGvTWSJTuCNqqHvnfRjgZLLMgheUoAlqTDf');
        get_1 = objectStore_4.get(KeyRange_6);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7935 = db.transaction(['objectStore_5263'], 'readonly', {durability:"strict"})
    var objectStore_5263 = txn_7935.objectStore('objectStore_5263');
    txn_7935.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7935.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7935.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7936 = db.transaction(['objectStore_5262'], 'readwrite', {durability:"default"})
    var objectStore_5262 = txn_7936.objectStore('objectStore_5262');
    var add_4 = objectStore_5262.add({f0_j: '<array>', f1_a: '<object>', f2_v: '<array>', f3_i: '<null>', f4_n: '<number>', f5_s: '<array>', f6_a: '<null>', f7_o: '<boolean>'}, 'OpBGNgRCdYRVMSfYWwvGzretnWzOInuSwOlfnTiYXqIGjDGigCHWqbtkHeFkHJygtHPdIoGYfuIKuhYiZTgrKweHbjRIfSRebpVgEJOmWkMHTVNqwcbcFnVHhbFRvcATnroUrTScXHHVSmLGKitrFAnoXOPfsUcheNgNORRNMwcucWxtHFVFKfpycuDIsWWBbnwNQJfhnGtzsRGkaaYrmixrGbkIlDUIBRmRrJtzDleKgFAbnkUWVQyibHRQLygCZFkQPbxgKikslUpojZlTuVfjPvEwDFYbfZsybKqMLoAYWJCleCTBNSkjzBncZRdDvaRgAjmmfrVvowFdtJbiiqBhJymHufzzlhyeacCnNBCGSxVatvKshvWoSLkcXNECtZjzmUpLtAjwsiEmTFAeOOyDfbjvghgWKTMEnZdNQDdvAUtgqyZbeefhAMeCKxwAnXqvshlCNicvTMDyFCQqNoyRVCBwUhalFoNkIgsKMhxbQvKJxdVJFYTbKSpZaQloywDQVjCVoOqcuePaKixSPWgTCySpLCObObQqsPytLXfAMSaQuKIsBbcuXiQtXHRaIxaMoqYIjNnOXuuWTgsUbqtuNnwvFVROqOMtVVehtnjRrGWgCqCOmwempLReXXtMnJTXoddpgzedYznDxUqOqFmFDKpOeRDnOqBCFOoLnXhSVIxkaeRWpCRSpzqiMSUfpejuFQnfLiwUpHEpMKfEJtQpErevHOLbsHljDsaTrmiASGVPUymPtAPAsuFqqMDaMONQCeXPHCDWndxNLcGWESzQIWepbGsfGjJPOiFagBCMFxcqFilvxGtCsyFWQDHfuiSSAGOnxxNADEOYRSdbtcWJCilgtumPhUHBkhGyBRiaqGXKuOZzaDfKptXYzzDykPeimwckqtXUDzULwPqYGHDduIKanczcUDTzuKPkuQmUDeycgjpYpjLLutlklpZTlGQYCrqZZorsgjlzLcSEllpqskkIJvqYg');
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', 'OpBGNgRCdYRVMSfYWwvGzretnWzOInuSwOlfnTiYXqIGjDGigCHWqbtkHeFkHJygtHPdIoGYfuIKuhYiZTgrKweHbjRIfSRebpVgEJOmWkMHTVNqwcbcFnVHhbFRvcATnroUrTScXHHVSmLGKitrFAnoXOPfsUcheNgNORRNMwcucWxtHFVFKfpycuDIsWWBbnwNQJfhnGtzsRGkaaYrmixrGbkIlDUIBRmRrJtzDleKgFAbnkUWVQyibHRQLygCZFkQPbxgKikslUpojZlTuVfjPvEwDFYbfZsybKqMLoAYWJCleCTBNSkjzBncZRdDvaRgAjmmfrVvowFdtJbiiqBhJymHufzzlhyeacCnNBCGSxVatvKshvWoSLkcXNECtZjzmUpLtAjwsiEmTFAeOOyDfbjvghgWKTMEnZdNQDdvAUtgqyZbeefhAMeCKxwAnXqvshlCNicvTMDyFCQqNoyRVCBwUhalFoNkIgsKMhxbQvKJxdVJFYTbKSpZaQloywDQVjCVoOqcuePaKixSPWgTCySpLCObObQqsPytLXfAMSaQuKIsBbcuXiQtXHRaIxaMoqYIjNnOXuuWTgsUbqtuNnwvFVROqOMtVVehtnjRrGWgCqCOmwempLReXXtMnJTXoddpgzedYznDxUqOqFmFDKpOeRDnOqBCFOoLnXhSVIxkaeRWpCRSpzqiMSUfpejuFQnfLiwUpHEpMKfEJtQpErevHOLbsHljDsaTrmiASGVPUymPtAPAsuFqqMDaMONQCeXPHCDWndxNLcGWESzQIWepbGsfGjJPOiFagBCMFxcqFilvxGtCsyFWQDHfuiSSAGOnxxNADEOYRSdbtcWJCilgtumPhUHBkhGyBRiaqGXKuOZzaDfKptXYzzDykPeimwckqtXUDzULwPqYGHDduIKanczcUDTzuKPkuQmUDeycgjpYpjLLutlklpZTlGQYCrqZZorsgjlzLcSEllpqskkIJvqYg', true, true);
        get_2 = objectStore_5262.get(KeyRange_8);
    }
    catch (e){
    }

    var add_5 = objectStore_5262.add({f0_n: '<boolean>', f1_n: '<null>', f2_h: '<array>', f3_o: '<boolean>', f4_j: '<string>', f5_e: '<null>', f6_f: '<string>', f7_t: '<string>', f8_h: '<boolean>', f9_l: '<object>'}, 'DMjXRedkHKhxifyiwMTyMuRWhAwrVBqVgFJlqEaReIoguzZzwneISinBgrjxkzwmCIOZgwshFIPLkXuQGtgNhGCoSBpwjOijkNJzzTxHtEmvLuWPqHLCMgeEqOReRKpUROyQlUotvjearPYOgwwQXrPTaEdpfaqLhLfLuJbHBlepPYJgEAFHGTwZpbsDqhcpWeuieTYIbkPBCcXYDPuGhWyCATIKMHvnRiUOUPjSdzRMtUnZVfLXFanJPHIxzJbBkegsYPxsGreaHLixXlqIZJpSmSZHbjdgXUgpDJFhHGKvhSaNrDggNqpsmqJNWHPRLxuMHovUQYnsEbrKArFwkeDXYmPUvnlzrOpjPFHDuyCiYuvNIBkOkIeuLaxcpFWhLoXWeyLkIjsKPdGWyyQVOxhZUvZBUxBckAGvPbfaFwXR');
    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', 'DMjXRedkHKhxifyiwMTyMuRWhAwrVBqVgFJlqEaReIoguzZzwneISinBgrjxkzwmCIOZgwshFIPLkXuQGtgNhGCoSBpwjOijkNJzzTxHtEmvLuWPqHLCMgeEqOReRKpUROyQlUotvjearPYOgwwQXrPTaEdpfaqLhLfLuJbHBlepPYJgEAFHGTwZpbsDqhcpWeuieTYIbkPBCcXYDPuGhWyCATIKMHvnRiUOUPjSdzRMtUnZVfLXFanJPHIxzJbBkegsYPxsGreaHLixXlqIZJpSmSZHbjdgXUgpDJFhHGKvhSaNrDggNqpsmqJNWHPRLxuMHovUQYnsEbrKArFwkeDXYmPUvnlzrOpjPFHDuyCiYuvNIBkOkIeuLaxcpFWhLoXWeyLkIjsKPdGWyyQVOxhZUvZBUxBckAGvPbfaFwXR', true, true);
        count_2 = objectStore_5262.count(KeyRange_10);
    }
    catch (e){
    }

    var clear_2 = objectStore_5262.clear();
    var add_6 = objectStore_5262.add({f0_c: '<boolean>', f1_v: '<boolean>', f2_r: '<array>', f3_a: '<null>', f4_v: '<number>', f5_d: '<boolean>', f6_k: '<null>'}, 'dQprWCnwhaKJnmZrlhHekjqrXwLtuhHKKdFqsOOLAHcGIPobEHbGiyLvLVGuPbTdBIpDnmTszeOzjyhywPmPYGCQCfwqZWHTdJQZscOPhOKFmlLRVpMtLFEaZcnRewFzcAEMVaBTvDPHnKKKLpiovuGEaYyCtNeiVmOrFFeAzMIBewKoIKrDpIATxsNoyPRsgBFKGsBXBjSEYjfdsNRYRvyDUxdlOsYFUDjHObZheFszRNaLmSCRMXbpLLMbRp');
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.only('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX');
        count_3 = objectStore_5262.count(KeyRange_12);
    }
    catch (e){
    }

    var clear_3 = objectStore_5262.clear();
    var clear_4 = objectStore_5262.clear();
    txn_7936.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7936.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7936.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7937 = db.transaction(['objectStore_5263', 'objectStore_5262'], 'readonly', {durability:"relaxed"})
    var objectStore_5263 = txn_7937.objectStore('objectStore_5263');
    txn_7937.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7937.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7937.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7938 = db.transaction(['objectStore_5263'], 'readonly', {durability:"default"})
    var objectStore_5263 = txn_7938.objectStore('objectStore_5263');
    txn_7938.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7938.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7938.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7939 = db.transaction(['objectStore_5262'], 'readwrite', {durability:"relaxed"})
    var objectStore_5262 = txn_7939.objectStore('objectStore_5262');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('bfqGyYwORcjmaxyAFItFIciRazcKzSEIyzjxpGXBQkSqKKUuhtDpBIbWvkZEnFvAEGVuuYojDnNgblHkEejXvVqPCcvwqgXoWLkEUCphvyuXTVXeeRLxbXGvemnaBVLiFdEsYsLCOShXTBvcClrwTgOKRxsBInLAeNBxohegfPkyqqPQFVXojKaYZWDtIeprDCXzZzfhSjForkLfyEmhDcgLDeojXrKzUKktyJpPWxyFCgyAXZLFjnZXqBflQUHHKnLbEpZFDPGUdricjvEqBDGAoYajfzYDbLEbmILMQbupTuLIEstEiQTQZhVvUSWqziSPBFapFSCfCdmhfzgyQSUaucPZqfDwTwytJyXDLEkHHhLEICYaGANTTdgapwCNiEDRwFlvFiClBNdYX', 'dQprWCnwhaKJnmZrlhHekjqrXwLtuhHKKdFqsOOLAHcGIPobEHbGiyLvLVGuPbTdBIpDnmTszeOzjyhywPmPYGCQCfwqZWHTdJQZscOPhOKFmlLRVpMtLFEaZcnRewFzcAEMVaBTvDPHnKKKLpiovuGEaYyCtNeiVmOrFFeAzMIBewKoIKrDpIATxsNoyPRsgBFKGsBXBjSEYjfdsNRYRvyDUxdlOsYFUDjHObZheFszRNaLmSCRMXbpLLMbRp', true, true);
        get_3 = objectStore_5262.get(KeyRange_14);
    }
    catch (e){
    }

    var getAll_0 = objectStore_5262.getAll();
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('DMjXRedkHKhxifyiwMTyMuRWhAwrVBqVgFJlqEaReIoguzZzwneISinBgrjxkzwmCIOZgwshFIPLkXuQGtgNhGCoSBpwjOijkNJzzTxHtEmvLuWPqHLCMgeEqOReRKpUROyQlUotvjearPYOgwwQXrPTaEdpfaqLhLfLuJbHBlepPYJgEAFHGTwZpbsDqhcpWeuieTYIbkPBCcXYDPuGhWyCATIKMHvnRiUOUPjSdzRMtUnZVfLXFanJPHIxzJbBkegsYPxsGreaHLixXlqIZJpSmSZHbjdgXUgpDJFhHGKvhSaNrDggNqpsmqJNWHPRLxuMHovUQYnsEbrKArFwkeDXYmPUvnlzrOpjPFHDuyCiYuvNIBkOkIeuLaxcpFWhLoXWeyLkIjsKPdGWyyQVOxhZUvZBUxBckAGvPbfaFwXR', 'DMjXRedkHKhxifyiwMTyMuRWhAwrVBqVgFJlqEaReIoguzZzwneISinBgrjxkzwmCIOZgwshFIPLkXuQGtgNhGCoSBpwjOijkNJzzTxHtEmvLuWPqHLCMgeEqOReRKpUROyQlUotvjearPYOgwwQXrPTaEdpfaqLhLfLuJbHBlepPYJgEAFHGTwZpbsDqhcpWeuieTYIbkPBCcXYDPuGhWyCATIKMHvnRiUOUPjSdzRMtUnZVfLXFanJPHIxzJbBkegsYPxsGreaHLixXlqIZJpSmSZHbjdgXUgpDJFhHGKvhSaNrDggNqpsmqJNWHPRLxuMHovUQYnsEbrKArFwkeDXYmPUvnlzrOpjPFHDuyCiYuvNIBkOkIeuLaxcpFWhLoXWeyLkIjsKPdGWyyQVOxhZUvZBUxBckAGvPbfaFwXR', true, true);
        get_4 = objectStore_5262.get(KeyRange_16);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.only('OpBGNgRCdYRVMSfYWwvGzretnWzOInuSwOlfnTiYXqIGjDGigCHWqbtkHeFkHJygtHPdIoGYfuIKuhYiZTgrKweHbjRIfSRebpVgEJOmWkMHTVNqwcbcFnVHhbFRvcATnroUrTScXHHVSmLGKitrFAnoXOPfsUcheNgNORRNMwcucWxtHFVFKfpycuDIsWWBbnwNQJfhnGtzsRGkaaYrmixrGbkIlDUIBRmRrJtzDleKgFAbnkUWVQyibHRQLygCZFkQPbxgKikslUpojZlTuVfjPvEwDFYbfZsybKqMLoAYWJCleCTBNSkjzBncZRdDvaRgAjmmfrVvowFdtJbiiqBhJymHufzzlhyeacCnNBCGSxVatvKshvWoSLkcXNECtZjzmUpLtAjwsiEmTFAeOOyDfbjvghgWKTMEnZdNQDdvAUtgqyZbeefhAMeCKxwAnXqvshlCNicvTMDyFCQqNoyRVCBwUhalFoNkIgsKMhxbQvKJxdVJFYTbKSpZaQloywDQVjCVoOqcuePaKixSPWgTCySpLCObObQqsPytLXfAMSaQuKIsBbcuXiQtXHRaIxaMoqYIjNnOXuuWTgsUbqtuNnwvFVROqOMtVVehtnjRrGWgCqCOmwempLReXXtMnJTXoddpgzedYznDxUqOqFmFDKpOeRDnOqBCFOoLnXhSVIxkaeRWpCRSpzqiMSUfpejuFQnfLiwUpHEpMKfEJtQpErevHOLbsHljDsaTrmiASGVPUymPtAPAsuFqqMDaMONQCeXPHCDWndxNLcGWESzQIWepbGsfGjJPOiFagBCMFxcqFilvxGtCsyFWQDHfuiSSAGOnxxNADEOYRSdbtcWJCilgtumPhUHBkhGyBRiaqGXKuOZzaDfKptXYzzDykPeimwckqtXUDzULwPqYGHDduIKanczcUDTzuKPkuQmUDeycgjpYpjLLutlklpZTlGQYCrqZZorsgjlzLcSEllpqskkIJvqYg');
        delete_0 = objectStore_5262.delete(KeyRange_18);
    }
    catch (e){
    }

    var put_0 = objectStore_5262.put({f0_e: '<string>', f1_n: '<string>', f2_e: '<string>', f3_r: '<boolean>', f4_s: '<array>'}, 'VRzzVwgFaaqECMxvxdZtKKLZLXuQnLxnImKmTyPPPRysAJHGiIBIiccVqSjECitREHgzXXbDQsKbNMwdkpBGIOcIrRSJWpdzHCWcJKiNTvjFEWZlbWoxlADbBZCXCaPjLVErQDglhzGedQswLIZcJzlKgZDiUwFxZYoxZreKnaLppzCXfvgoDGsiSrYmNHAkuNIIxlWgBGUNJHJRYHleXmXdiPsJMZfWdmKUXGapQQIeyHxnWsNOGUDLpIanFrZQDXPnATkExUwQsTXqLoPxpNHISHDtsSAfTQFYTVMNTOlTOHFJqnoAYcLGzsAaBbeQXAxCuSEFbWoEhchiXfpVIVoILsrqeKizUBxWIvgsePTCoRRpsuQLTofIMSNFfjaYzNoWNssCqMRthUdobOiFZsYmTtRhEUzEVroeZpMGCIqXltDhIuaRsccjkcVfHhxmQElWTUSRKeDDnkzpNTFWHMtxXVBWiXVeFGZKmwfTLDESwrEnKXjZswMSxTknrTxNfWKuoVPpEHTHaVMZPUUNNKUrQrmTgumAHGwQoJoHdlsiHgZNzjeLIpRLGCnnDdORFqVAmRbUiljnRQEmbyoZxjJkCBiYReNpLIKMjUlqyJmmszXmkNVfujWruczwnBZgMxtMuAUAXaETXszgetRzDSGBMlpvXWPevMpzfEZyUuFdGuzuJARZUGRkcBQAcbwJeqOiZNjWrSGwlaZUfTQXKLezgykdMCgOBoUiFkDQZdvGRUGtKiGrbYtFClCBTRkuuYiUBmfHINjBzlYRbPwWdMXkEqfKoOmTbwHvpajYMsuHbCCizchJJEeaGagsZJnZYLuNgEfJoKqsecDFSQhRURKNbeczHIHoFUMCYBKOsBCdjsSSJQKklRoVoASbzATzBcHtDRTmvfxjQFOdGYHXdDjkyCsfwlHSZdrFkqvHHdVpXgNmhAWiPIIcYenMJxUzezeVPvPFSwsqlXgHjlaeqNbxH');
    txn_7939.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7939.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7939.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7742')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};