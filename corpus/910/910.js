let db;
const openRequest = window.indexedDB.open('str_1278', 3708759264001318)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5391', {keypath: 'pLZUbhZLwRwWugdOTRbPgVeSvrnhvstEuueQSHBmVtBVlUQJutqLNXwBGOGSMnDwvcoUMSoaoxZKtFTGHoTTmkjLGQqoyvekTbwKXqutzBDSLBfnrJcvWFNVGjoOXWVFClpUDYHhqMsLWJelYVuJArfyXFuCkSayZrKDKnllJGnMTtbQyPAeLWPNMoEyrXvrGzZQugElzYcGrkqaHdfrgxuTIWuxXRWPJWRBRKBEwFgAOuzHIpBcTNJOnSLkyRjPMHRPrIFAQuklgrtJZBADrViGacabDgsLSPnocCVdrzZqzkNTuoJuVquunpBGEmajdeGPVLPLqvXDPpGzNIoEDoTqVPXQOOyLOonyEuuSiWHGKTZcxtswwtdTfWbPRZWeivzHdqPtoSAFNfcPuipSnWznJtRVeeOsrJTpHdvredqlAIfMWLyRxfGYKJefkdBMZotbSMwZFWxKXNNVKwVKyNpmFgxgtEuRdBVoVzNkePhfMDQvwKzwnPiCAyOXLEnKoZwvEkIHPUIyaFUXQAgYlEszcLHwqzIsVpUjTDrYfxsRPaPceeFRwdDSaKiJhwXgctYWMiMLHYkOuGLqhovEnpFLgPZepEaFNOLvzqlWYHPJfPIuVrufFQKeZazhyWulOsgJwruIPRVurfyJZxetukyhYiQnqOVilzgCbJdfuZAEjhXISThKWQVUtVeKInTAANiWVsUoziZUWoXEsBZjju'});
    var objectStore_1 = db.createObjectStore('objectStore_5392', {keypath: 'wDbOrWSVOQoitRfAOFQTWLMsivuHpSmNMETrCnNburaPHhLDZtntKzPyytuFGAzFbcwxEZIcAnufBBZwPOwzpWpnOsuJADqEhFxuZIaDNfnacutCNITWVhRbpkeJuKQYmayVyUePKsKGznGCqkIGjULycGjPDkpqsQaRlbQHUpNItHBIVvufuaRHPGkmMnHLgnASgrxYVcwQvBIQTmWwIpGFadxPHfiEmxXVYypVKpKNNFWjoviTufVqSuaZEqSBzWtwdKOhAAaLrIgXqaNIMbwrxHgLqACRPfMJvUMCfVvwLjAbrXIsNfztjtJETFwwnIjzbwUcNKvukZpsAHrGyLkhrCHZXcXrUSiMydMbqJTzbRjbCOoGQUwEaGYGYbAOgUuKXdNWmQoBbnHTUPHcnyfcFBNNVQDEgSRLbZVsylVNTxgtNBzfMZMgFrElnEzYsBqHpvzqhDjSnCuHVATGrVEkJzMJmXIXozjPFZkLEqxtyjEyTuLAArPQEWhyLZyNfRHUeoUJjVAVVKiTGNfRpuDtdfxZXpqNJpUCUztePKTtyudQcbPTvSNoBzqJoVaqGTuzecDqJaTyPxHFGHgatrFgjMoaDSSxdBttjyTmeCkkOsBjuGSeRKnAimxnykhYcDNLlJCphqowuqFFrmWPFSjzKefmnjUnpcTrngpveXaWZJNFQneepQOdMuzrdhOPLvycTdMaRbRPNfwFxVhwEgZmCSMbRkyNpYqmilGNhKOhgNAglyFijxrzdSrvffFmkvwuquOqyOaAmQIDzfIlYQQddRNWLJkHyItYDxQmjgHzjsJtfNHoZkhThKZLnr', autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_5393');
    db.deleteObjectStore('objectStore_5391')
    var objectStore_3 = db.createObjectStore('objectStore_5394', {autoIncrement: true});
    db.deleteObjectStore('objectStore_5394')
    var clear_1 = objectStore_1.clear();
    var index_3613 = objectStore_2.createIndex('index_3613', 'test', {multiEntry: true});
    var clear_2 = objectStore_1.clear();
    var clear_3 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8155 = db.transaction(['objectStore_5392', 'objectStore_5393'], 'readwrite', {durability:"relaxed"})
    var objectStore_5393 = txn_8155.objectStore('objectStore_5393');
    var clear_4 = objectStore_5393.clear();
    var clear_5 = objectStore_5393.clear();
    var clear_6 = objectStore_5393.clear();
    var clear_7 = objectStore_5393.clear();
    txn_8155.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8155.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8155.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8156 = db.transaction(['objectStore_5392'], 'readonly', {durability:"relaxed"})
    var objectStore_5392 = txn_8156.objectStore('objectStore_5392');
    txn_8156.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8156.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8156.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8157 = db.transaction(['objectStore_5392', 'objectStore_5393'], 'readonly', {durability:"relaxed"})
    var objectStore_5392 = txn_8157.objectStore('objectStore_5392');
    txn_8157.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8157.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8157.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8158 = db.transaction(['objectStore_5393', 'objectStore_5392'], 'readwrite', {durability:"default"})
    var objectStore_5393 = txn_8158.objectStore('objectStore_5393');
    var add_0 = objectStore_5393.add({f0_t: '<null>', f1_p: '<boolean>', f2_k: '<string>', f3_s: '<array>', f4_z: '<null>'}, 'jYPtTuDrHXeoKycTXpjrqkJOtnWFjZGITjeXNVEeyZYTAtjHqoFFRIKQDuZzAoAOvZRfXvSpPcnKtPXBTwBkfgKRohBsSLzXhKnKYdaVvKXhiiHSTnLuDoYNgBBnQmPFsRCzjWZbtlYfdgQxlMNBKYXRkWNTKRoCMTlncfcdkUziFTuOnFREuIsYkoqAmkaJzeGmQLOGIlnlEZeVXCwSyGFaVwPGPMrZCnxxRKKRQvjZCmeQgDXYPDpKlbdkleVyPNhGnueXInRZjFVXOmAgcmXMwXcuROjYjyoFQgUtSXkioEwvyvPmnewjyrGdHOmJYULUKROUlKrdfWueluWorvDXWFhlOgEDdhywDFAzXEXizjcwBgJdbqNYnVdSzKqrdPUwCSCgJwAgHntLVNbsfKqGzLicJdaOjEmBEFESjDVhskdOukquAZitsypDRWukzwyQHYWHMIsgEPQRYhUzVYhssUEtvBSDCtzMZeATybsmXsVwriFesHCqygzTusbBIPuxlDiUjzGoznNfnjMRqtWHVXlfAQIPJwliOCpSkKyIUQOGLbHXlEXCMgLndIfOXPtXhzUkBYfNYdXyPABvVWcNFZXOUIWpTlqYVIhXeFuBfWThCfbeXPtekRPZpxiQXOhxUzxgqnFsTsFpoEvEyAyssCbWFDnjDlwvgniYjRoseMVZQnuqMSMItWvFOWUWYLLRvYjXCrxccGOXcjeSepWgyAWyWCOlvoQMVTbrvlPVbiyPHxmDwXjrLzBMFKmlyhLGUZFLbDxskYicEuXtpyQzviBSlEyVTWIAfDOhYWzBhAbvlMuQBVysnxuLwhIfCWHHyBaySsModqfwhByFSboHHDVaLwckNENFkJiGTDivLMsjxNq');
    var put_0 = objectStore_5393.put({f0_e: '<object>', f1_c: '<boolean>', f2_k: '<boolean>', f3_l: '<array>', f4_w: '<array>', f5_r: '<object>'}, 'ScphxUorlSOclkWAFeFpBPMLcCMzSGjAYnNdtleynijwFNmMPfKHIfTdMYvfDhaDnaeZiSkIPxJhzYiSGFSzwKFusxwlcTTehxVwvKGxwuRxmtKENNIcDeKrcshDiKyoivvBQLKjIhoApraUsVtzzBLdIMpCDMrHfSHQyiRVByZdLUhkIhlIHpnCSoPCdrtOqVJGoltJaFaCYCAzbDrlIQoePqHsCFjMANFXMsiwewQqmHsHpyooufhzHaCrDvZzddIwIsgstUbPVauhOpedqHQSQJbzxQFKslRiPieGMIprjsCAiTsgtkwWDfMvlLKTyunxCERHLEPprCpZZQCBMMrWKsLcoBPfFtYXICXOVXtImwFdCysGOunTKtOPZELFreAibLrcQfXBIPcZYcDbHrYVIVLTjuiAtBPBEnGayoQHPMGsvcZYivNJkKWAHxybuENHcKJNxWAoUXAEChuLXZoNVznKspxxHmlGCzlUIYliQVRQdzpteeCaveYwKJpUsKcHpqesqutKcfXvRozwVuztLmiexUnpKnNDcMOhsUOsNOuyAhMKltuRuOKJeprIIQYPetQkjPbtRZcEOcjjqCEvdfcQTbsKmUzKUnLGAxjxzcrSEsqMGoHzdjjHvcGdBuHRMsoMkkwNnJZTQrCKERiuLXZGxVrbMOsNFUmSIWzZVPdLWUXpzRnxHuRUH');
    var clear_8 = objectStore_5393.clear();
    var put_1 = objectStore_5393.put({f0_y: '<object>', f1_w: '<null>', f2_d: '<array>', f3_o: '<boolean>'}, 'eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet');
    var getAllKeys_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ScphxUorlSOclkWAFeFpBPMLcCMzSGjAYnNdtleynijwFNmMPfKHIfTdMYvfDhaDnaeZiSkIPxJhzYiSGFSzwKFusxwlcTTehxVwvKGxwuRxmtKENNIcDeKrcshDiKyoivvBQLKjIhoApraUsVtzzBLdIMpCDMrHfSHQyiRVByZdLUhkIhlIHpnCSoPCdrtOqVJGoltJaFaCYCAzbDrlIQoePqHsCFjMANFXMsiwewQqmHsHpyooufhzHaCrDvZzddIwIsgstUbPVauhOpedqHQSQJbzxQFKslRiPieGMIprjsCAiTsgtkwWDfMvlLKTyunxCERHLEPprCpZZQCBMMrWKsLcoBPfFtYXICXOVXtImwFdCysGOunTKtOPZELFreAibLrcQfXBIPcZYcDbHrYVIVLTjuiAtBPBEnGayoQHPMGsvcZYivNJkKWAHxybuENHcKJNxWAoUXAEChuLXZoNVznKspxxHmlGCzlUIYliQVRQdzpteeCaveYwKJpUsKcHpqesqutKcfXvRozwVuztLmiexUnpKnNDcMOhsUOsNOuyAhMKltuRuOKJeprIIQYPetQkjPbtRZcEOcjjqCEvdfcQTbsKmUzKUnLGAxjxzcrSEsqMGoHzdjjHvcGdBuHRMsoMkkwNnJZTQrCKERiuLXZGxVrbMOsNFUmSIWzZVPdLWUXpzRnxHuRUH', false);
        getAllKeys_0 = objectStore_5393.getAllKeys(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet');
        getAllKeys_0 = objectStore_5393.getAllKeys(KeyRange_1);
    }

    var clear_9 = objectStore_5393.clear();
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet');
        delete_0 = objectStore_5393.delete(KeyRange_2);
    }
    catch (e){
    }

    txn_8158.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8158.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8158.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8159 = db.transaction(['objectStore_5392', 'objectStore_5393'], 'readonly', {durability:"strict"})
    var objectStore_5393 = txn_8159.objectStore('objectStore_5393');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet', 'jYPtTuDrHXeoKycTXpjrqkJOtnWFjZGITjeXNVEeyZYTAtjHqoFFRIKQDuZzAoAOvZRfXvSpPcnKtPXBTwBkfgKRohBsSLzXhKnKYdaVvKXhiiHSTnLuDoYNgBBnQmPFsRCzjWZbtlYfdgQxlMNBKYXRkWNTKRoCMTlncfcdkUziFTuOnFREuIsYkoqAmkaJzeGmQLOGIlnlEZeVXCwSyGFaVwPGPMrZCnxxRKKRQvjZCmeQgDXYPDpKlbdkleVyPNhGnueXInRZjFVXOmAgcmXMwXcuROjYjyoFQgUtSXkioEwvyvPmnewjyrGdHOmJYULUKROUlKrdfWueluWorvDXWFhlOgEDdhywDFAzXEXizjcwBgJdbqNYnVdSzKqrdPUwCSCgJwAgHntLVNbsfKqGzLicJdaOjEmBEFESjDVhskdOukquAZitsypDRWukzwyQHYWHMIsgEPQRYhUzVYhssUEtvBSDCtzMZeATybsmXsVwriFesHCqygzTusbBIPuxlDiUjzGoznNfnjMRqtWHVXlfAQIPJwliOCpSkKyIUQOGLbHXlEXCMgLndIfOXPtXhzUkBYfNYdXyPABvVWcNFZXOUIWpTlqYVIhXeFuBfWThCfbeXPtekRPZpxiQXOhxUzxgqnFsTsFpoEvEyAyssCbWFDnjDlwvgniYjRoseMVZQnuqMSMItWvFOWUWYLLRvYjXCrxccGOXcjeSepWgyAWyWCOlvoQMVTbrvlPVbiyPHxmDwXjrLzBMFKmlyhLGUZFLbDxskYicEuXtpyQzviBSlEyVTWIAfDOhYWzBhAbvlMuQBVysnxuLwhIfCWHHyBaySsModqfwhByFSboHHDVaLwckNENFkJiGTDivLMsjxNq', true, false);
        get_0 = objectStore_5393.get(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet', 'jYPtTuDrHXeoKycTXpjrqkJOtnWFjZGITjeXNVEeyZYTAtjHqoFFRIKQDuZzAoAOvZRfXvSpPcnKtPXBTwBkfgKRohBsSLzXhKnKYdaVvKXhiiHSTnLuDoYNgBBnQmPFsRCzjWZbtlYfdgQxlMNBKYXRkWNTKRoCMTlncfcdkUziFTuOnFREuIsYkoqAmkaJzeGmQLOGIlnlEZeVXCwSyGFaVwPGPMrZCnxxRKKRQvjZCmeQgDXYPDpKlbdkleVyPNhGnueXInRZjFVXOmAgcmXMwXcuROjYjyoFQgUtSXkioEwvyvPmnewjyrGdHOmJYULUKROUlKrdfWueluWorvDXWFhlOgEDdhywDFAzXEXizjcwBgJdbqNYnVdSzKqrdPUwCSCgJwAgHntLVNbsfKqGzLicJdaOjEmBEFESjDVhskdOukquAZitsypDRWukzwyQHYWHMIsgEPQRYhUzVYhssUEtvBSDCtzMZeATybsmXsVwriFesHCqygzTusbBIPuxlDiUjzGoznNfnjMRqtWHVXlfAQIPJwliOCpSkKyIUQOGLbHXlEXCMgLndIfOXPtXhzUkBYfNYdXyPABvVWcNFZXOUIWpTlqYVIhXeFuBfWThCfbeXPtekRPZpxiQXOhxUzxgqnFsTsFpoEvEyAyssCbWFDnjDlwvgniYjRoseMVZQnuqMSMItWvFOWUWYLLRvYjXCrxccGOXcjeSepWgyAWyWCOlvoQMVTbrvlPVbiyPHxmDwXjrLzBMFKmlyhLGUZFLbDxskYicEuXtpyQzviBSlEyVTWIAfDOhYWzBhAbvlMuQBVysnxuLwhIfCWHHyBaySsModqfwhByFSboHHDVaLwckNENFkJiGTDivLMsjxNq', false, false);
        get_1 = objectStore_5393.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.only('ScphxUorlSOclkWAFeFpBPMLcCMzSGjAYnNdtleynijwFNmMPfKHIfTdMYvfDhaDnaeZiSkIPxJhzYiSGFSzwKFusxwlcTTehxVwvKGxwuRxmtKENNIcDeKrcshDiKyoivvBQLKjIhoApraUsVtzzBLdIMpCDMrHfSHQyiRVByZdLUhkIhlIHpnCSoPCdrtOqVJGoltJaFaCYCAzbDrlIQoePqHsCFjMANFXMsiwewQqmHsHpyooufhzHaCrDvZzddIwIsgstUbPVauhOpedqHQSQJbzxQFKslRiPieGMIprjsCAiTsgtkwWDfMvlLKTyunxCERHLEPprCpZZQCBMMrWKsLcoBPfFtYXICXOVXtImwFdCysGOunTKtOPZELFreAibLrcQfXBIPcZYcDbHrYVIVLTjuiAtBPBEnGayoQHPMGsvcZYivNJkKWAHxybuENHcKJNxWAoUXAEChuLXZoNVznKspxxHmlGCzlUIYliQVRQdzpteeCaveYwKJpUsKcHpqesqutKcfXvRozwVuztLmiexUnpKnNDcMOhsUOsNOuyAhMKltuRuOKJeprIIQYPetQkjPbtRZcEOcjjqCEvdfcQTbsKmUzKUnLGAxjxzcrSEsqMGoHzdjjHvcGdBuHRMsoMkkwNnJZTQrCKERiuLXZGxVrbMOsNFUmSIWzZVPdLWUXpzRnxHuRUH');
        get_2 = objectStore_5393.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_5393.getAllKeys(2496646042);
    var getAll_0 = objectStore_5393.getAll(3987495965);
    var index_0 = objectStore_5393.index('index_3613');
    var count_0;
    try{
        KeyRange_10 = IDBKeyRange.only('eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet');
        count_0 = objectStore_5393.count(KeyRange_10);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('jYPtTuDrHXeoKycTXpjrqkJOtnWFjZGITjeXNVEeyZYTAtjHqoFFRIKQDuZzAoAOvZRfXvSpPcnKtPXBTwBkfgKRohBsSLzXhKnKYdaVvKXhiiHSTnLuDoYNgBBnQmPFsRCzjWZbtlYfdgQxlMNBKYXRkWNTKRoCMTlncfcdkUziFTuOnFREuIsYkoqAmkaJzeGmQLOGIlnlEZeVXCwSyGFaVwPGPMrZCnxxRKKRQvjZCmeQgDXYPDpKlbdkleVyPNhGnueXInRZjFVXOmAgcmXMwXcuROjYjyoFQgUtSXkioEwvyvPmnewjyrGdHOmJYULUKROUlKrdfWueluWorvDXWFhlOgEDdhywDFAzXEXizjcwBgJdbqNYnVdSzKqrdPUwCSCgJwAgHntLVNbsfKqGzLicJdaOjEmBEFESjDVhskdOukquAZitsypDRWukzwyQHYWHMIsgEPQRYhUzVYhssUEtvBSDCtzMZeATybsmXsVwriFesHCqygzTusbBIPuxlDiUjzGoznNfnjMRqtWHVXlfAQIPJwliOCpSkKyIUQOGLbHXlEXCMgLndIfOXPtXhzUkBYfNYdXyPABvVWcNFZXOUIWpTlqYVIhXeFuBfWThCfbeXPtekRPZpxiQXOhxUzxgqnFsTsFpoEvEyAyssCbWFDnjDlwvgniYjRoseMVZQnuqMSMItWvFOWUWYLLRvYjXCrxccGOXcjeSepWgyAWyWCOlvoQMVTbrvlPVbiyPHxmDwXjrLzBMFKmlyhLGUZFLbDxskYicEuXtpyQzviBSlEyVTWIAfDOhYWzBhAbvlMuQBVysnxuLwhIfCWHHyBaySsModqfwhByFSboHHDVaLwckNENFkJiGTDivLMsjxNq', 'eZHtNJzAUNqeBzDiMYQudjCVXKWfPPVdZuWKlYOSDdkiRfReQWadsacuADBnGZANMuVHABSNMmVAyqCXjqkaORTbPMqDEEJtdbQIQAKwCzGzCojpcBiMwpfNXYXqyCnJgseMhOHMBxyYRlzErVyTytpMSxNFlkJncLSVuTFrQtjRCZRwwlvXWLaykwTtlUPFuwUmTlZolOpEHKimEXThTuEDDISyccuWLjcEXLOQMIQdxeEdnaYhnzMMMgQjQEUcrKLuqCcqQsRFeEWhneUcJhNrSZKeVwIblWAMnVapZGziQrXCcZSSHxJJOlCIVBSJJZsJJgSzqjyEumCvuuAusmhxQKYPeGAMaSQxPBHjet', true, true);
        get_3 = objectStore_5393.get(KeyRange_12);
    }
    catch (e){
    }

    txn_8159.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8159.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8159.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8486')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};