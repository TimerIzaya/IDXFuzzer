let db;
const openRequest = window.indexedDB.open('str_578', 5410245286488075)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4610');
    var objectStore_1 = db.createObjectStore('objectStore_4611', {keypath: 'ftJRXEmvxcpzFCCjfSVUiZiqDLsItiQMhVzpWzQUrWxYkFRHVIixrAvNARZekRnqokUWafERZSdOVxrNEiVmpJnTBQVVZKHcrLDnlWrfSanPKsjzSMmUStZWcgjEhKKfCUJnWWgNaRfhIMwdxAIxwwQHqKgEOhkarKJrgysAnFvxgySRwprVQFEJJXEmNBGJrDbMyXfGTBlBMvIEvhiCXZIUHpiXUqyQsOEryjCdNTTHJzLOdoIVsEXsogzRHsrsdSveRzcpWLDctBMsBUbVFpBsdvHuHiIzbmhJSafsyUPFBPQvAzoNKTcMiGRnHXiWLNMHBbtvzrhKARCVMzBOPeTUcwAGUpiUfHvnpASaNocmpvVtYwhlQQlvhlQNMjoMyWYMRBOmQSqIiMSUsixrRQRjVusPPWMFaHvuNhIkFUKMpcOrFpyMyGJYsCDPjbPEvSjuolsZMzDqRausCZOsetjXmPJQtkdRHBXqohoxmAORfPprugAcOAgkspAdQWjnYPrZpTdIJLQnVrILorqUIabRFqHoOuajqKsAGeQBvQetUJKGIjFZKigRBpwcnVbiIjBzYmLVXIVmBMiplfdZNvGcCTMHpKkhrJrceXAcMWyqWwIVaFmCeCVPjpXldBsghthpjkyYYbglXWbofEwWiqImuuusvLwkoQRZcIIXJrURaYMZEWBWOIhUGyjbFvyPhBVqrLtnaqaJeTOmxKGZYDQFoIfLvCBnAVxbNbfWVDyvfrIVSM'});
    var add_0 = objectStore_1.add({f0_j: '<array>', f1_m: '<array>', f2_p: '<object>', f3_m: '<string>', f4_p: '<object>'}, 'wbmmJmAwWLNgLJhColZYogndHdeqaUjCXzwDlnUWnUGhoDZMtAJAzmrUaOkdDMhrQpPoeubzMeLRTLhxaxEUSCkXsYLbtTajsSzsNLyAxytTkvRxwK');
    var clear_0 = objectStore_1.clear();
    var put_0 = objectStore_1.put({f0_i: '<array>', f1_c: '<object>', f2_i: '<string>', f3_g: '<object>', f4_c: '<array>', f5_r: '<number>', f6_b: '<string>', f7_w: '<boolean>'}, 'BrHUqxULMQnAoDNIANaVxyvlPxVVDTJbGeYIcsRtXXnhEpvoTFTBAjYZMNDXdCqcjexmqIxkuSMUgPdyrcLUHCubHNRlVhQAUEIOzzqQXcDjyDJGGKyjzcdXKMLNEsXCVXnwPpjGHGAkzMRoGeYEjTsYjrrmBXBOfuWUsQzqvSWbAPuqleZvIBDaIBIbIZSUtNbGmSsZqBdbxDXirNJbehsyAlmtQmYnftyajRFmFkSAAFostwpaXRBCdLAOWzoGKSxIBsWkyGvJLmrmYthaQzLClpMjZtIjxLyyrFniXIIUFHYNWjGyYusuMGIFsDrNIxJGcLLEKbTcXTSpEJScxPjTigTkcaOgCjaAsqmRRmBozUbFIsoZpbjuzIZEBPrOigtLdbTutUuepbxzdvCnxcveMzUSjsaREGzRawWbUqezHTlZVnnmVOlwFluyWFMDDEdcpJJkyoEteQrrUZpNHeErmtQilcYdtMjuZkerDLICpYiTNBnBPSxFNBKvQPpqacVDKQSOcJdFrWINawHDmwrDDGFle');
    var put_1 = objectStore_0.put({f0_i: '<number>', f1_n: '<string>', f2_b: '<boolean>'}, 'LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx');
    var getAllKeys_0 = objectStore_1.getAllKeys(2629946202);
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx', 'LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx', false, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_y: '<string>', f1_s: '<number>', f2_q: '<string>', f3_h: '<object>', f4_f: '<array>', f5_k: '<number>', f6_t: '<null>', f7_a: '<array>', f8_o: '<null>'}, 'BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa');
    var objectStore_2 = db.createObjectStore('objectStore_4612', {keypath: 'qyrYwxFxXTWGdlzXByQoNjpEvPFFThVZFIDFFsVASzWCdoZcWBTFTONldOmKDFOrDcpIhzbvBUHrJIwyuHNZpsHRjeoafoytmHNEjqWFtgFzCCPKJCmNMWkpBpXdHbQGkWYOQZJuORmkjiGEAXZenMrIrjcEeXnjZxBASSOCpJefLvpEdzAVmKYBqnzEUpyptQqTqdTXOvyuUMzCrdUmKMLWzIlQFFgcHDzeGOAttrcKvDKqrBvPxVfJXhGTjeCBmmoGsBhzguXXvirrIvWgFuYRbxkHlIEUjEpAnvSbVzklWkUlMOMOvlzpqimDNbhTprtuJUWfpyspQgI', autoIncrement: false});
    var index_3081 = objectStore_1.createIndex('index_3081', 'test');
    var objectStore_3 = db.createObjectStore('objectStore_4613', {autoIncrement: true});
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', 'LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx', false, true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var add_2 = objectStore_1.add({f0_d: '<boolean>', f1_k: '<boolean>'}, 'CTGKduTNqrLBbxxQqdxrJTVRXMwjDQPOueFNnBJNqVfzSjnnqXQsvgGXscPSHhxWhIQlHNLQtLcrgwDbcrQiXZCMKLoKliazUAXnofgaQYEFzPgtQisdwqILKsEPdXGlEVgutpCzwjTjywJjEgrajPrJKoDUhlAbScCWFgtDAFVogoIYJMofoZAOfFcEOletzPvrLSaJhsGXAwtBvUAdtkcuPBYEpBZegNCaZbRqPBjpXWPngSAmvDazDSXXMqMrHrQIvkCxnbhYNTVrXZwOXsuqfQkmNERKyHPTWniyIEHkdpsEDJvcgoxRdbHUsBcMgLgvTDJalwxJmcZBrZMkfhXNeiXisHGApxSEelMrPzkSsizgEhdNuwwjXMVIahFmHamtlADtqxaUBnDjuXdfzkCiLCSoXtzWrUPjycwgVqXHMaJWppCXOOqyZOrHTrvSzVzMNzzQWUBvGIjDUxXUrJvYHMVIEvLalsgbMPVsbCvJMKKyOQmkLojmzMnDzQhdvZQMTiokLFgYDgzrPCPsdeSAkBEUuTAYCItIzLegtuKPXtKPfyzFUWbwiPqUSpNFOlbpHrXYKLlbKgwoUBDgVlSXNnmZpwjOyPKAKpKQTyPPzwnAkjFOeeFNNywZGtOSbhFEdBiiHHrjJjFEzwdVhFfCeKONpsNOZXatrVumdwZHDZsyfUmpJLGznNjJwoYSFinhNdcAeMBqwsxbljuYGaDSiHXhnLfmkiYvUFSsREufXFFGlYucVBDJAHEO');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', 'BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', false, true);
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_3.clear();
    var put_2 = objectStore_2.put({f0_k: '<array>', f1_f: '<string>', f2_w: '<string>', f3_b: '<boolean>', f4_k: '<object>', f5_q: '<object>', f6_r: '<object>', f7_w: '<array>', f8_c: '<array>'}, 'flZICgmJgNfWAhVhxDBqHfHyOlyooCYkcjCjafL');
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', 'LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx', true, true);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6945 = db.transaction(['objectStore_4613'], 'readonly', {durability:"strict"})
    var objectStore_4613 = txn_6945.objectStore('objectStore_4613');
    txn_6945.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6945.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6945.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6946 = db.transaction(['objectStore_4611'], 'readwrite', {durability:"relaxed"})
    var objectStore_4611 = txn_6946.objectStore('objectStore_4611');
    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('wbmmJmAwWLNgLJhColZYogndHdeqaUjCXzwDlnUWnUGhoDZMtAJAzmrUaOkdDMhrQpPoeubzMeLRTLhxaxEUSCkXsYLbtTajsSzsNLyAxytTkvRxwK', 'CTGKduTNqrLBbxxQqdxrJTVRXMwjDQPOueFNnBJNqVfzSjnnqXQsvgGXscPSHhxWhIQlHNLQtLcrgwDbcrQiXZCMKLoKliazUAXnofgaQYEFzPgtQisdwqILKsEPdXGlEVgutpCzwjTjywJjEgrajPrJKoDUhlAbScCWFgtDAFVogoIYJMofoZAOfFcEOletzPvrLSaJhsGXAwtBvUAdtkcuPBYEpBZegNCaZbRqPBjpXWPngSAmvDazDSXXMqMrHrQIvkCxnbhYNTVrXZwOXsuqfQkmNERKyHPTWniyIEHkdpsEDJvcgoxRdbHUsBcMgLgvTDJalwxJmcZBrZMkfhXNeiXisHGApxSEelMrPzkSsizgEhdNuwwjXMVIahFmHamtlADtqxaUBnDjuXdfzkCiLCSoXtzWrUPjycwgVqXHMaJWppCXOOqyZOrHTrvSzVzMNzzQWUBvGIjDUxXUrJvYHMVIEvLalsgbMPVsbCvJMKKyOQmkLojmzMnDzQhdvZQMTiokLFgYDgzrPCPsdeSAkBEUuTAYCItIzLegtuKPXtKPfyzFUWbwiPqUSpNFOlbpHrXYKLlbKgwoUBDgVlSXNnmZpwjOyPKAKpKQTyPPzwnAkjFOeeFNNywZGtOSbhFEdBiiHHrjJjFEzwdVhFfCeKONpsNOZXatrVumdwZHDZsyfUmpJLGznNjJwoYSFinhNdcAeMBqwsxbljuYGaDSiHXhnLfmkiYvUFSsREufXFFGlYucVBDJAHEO', true, true);
        delete_1 = objectStore_4611.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('CTGKduTNqrLBbxxQqdxrJTVRXMwjDQPOueFNnBJNqVfzSjnnqXQsvgGXscPSHhxWhIQlHNLQtLcrgwDbcrQiXZCMKLoKliazUAXnofgaQYEFzPgtQisdwqILKsEPdXGlEVgutpCzwjTjywJjEgrajPrJKoDUhlAbScCWFgtDAFVogoIYJMofoZAOfFcEOletzPvrLSaJhsGXAwtBvUAdtkcuPBYEpBZegNCaZbRqPBjpXWPngSAmvDazDSXXMqMrHrQIvkCxnbhYNTVrXZwOXsuqfQkmNERKyHPTWniyIEHkdpsEDJvcgoxRdbHUsBcMgLgvTDJalwxJmcZBrZMkfhXNeiXisHGApxSEelMrPzkSsizgEhdNuwwjXMVIahFmHamtlADtqxaUBnDjuXdfzkCiLCSoXtzWrUPjycwgVqXHMaJWppCXOOqyZOrHTrvSzVzMNzzQWUBvGIjDUxXUrJvYHMVIEvLalsgbMPVsbCvJMKKyOQmkLojmzMnDzQhdvZQMTiokLFgYDgzrPCPsdeSAkBEUuTAYCItIzLegtuKPXtKPfyzFUWbwiPqUSpNFOlbpHrXYKLlbKgwoUBDgVlSXNnmZpwjOyPKAKpKQTyPPzwnAkjFOeeFNNywZGtOSbhFEdBiiHHrjJjFEzwdVhFfCeKONpsNOZXatrVumdwZHDZsyfUmpJLGznNjJwoYSFinhNdcAeMBqwsxbljuYGaDSiHXhnLfmkiYvUFSsREufXFFGlYucVBDJAHEO', false);
        get_2 = objectStore_4611.get(KeyRange_10);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_12 = IDBKeyRange.only('wbmmJmAwWLNgLJhColZYogndHdeqaUjCXzwDlnUWnUGhoDZMtAJAzmrUaOkdDMhrQpPoeubzMeLRTLhxaxEUSCkXsYLbtTajsSzsNLyAxytTkvRxwK');
        getAllKeys_1 = objectStore_4611.getAllKeys(KeyRange_12, 4084710793);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('wbmmJmAwWLNgLJhColZYogndHdeqaUjCXzwDlnUWnUGhoDZMtAJAzmrUaOkdDMhrQpPoeubzMeLRTLhxaxEUSCkXsYLbtTajsSzsNLyAxytTkvRxwK');
        getAllKeys_1 = objectStore_4611.getAllKeys(KeyRange_13);
    }

    var put_3 = objectStore_4611.put({f0_u: '<object>', f1_b: '<boolean>', f2_a: '<array>'}, 'dSKfdzzNQpyEbwgkduObtpSSiPwgluBMnKqhvXmJUlmPpYYEiwZNqgJxlcuJOOdtGMznEcDWFxePXBrbnRRuENrBEmyUPBRmwcnCdBzbGSrAmOtjpSfdhWOdeHOjiItnwNROCRpqqLzAWuLaRuGBZXbBDhAOVekNKOjREdizzrjROfzZlIMNMmlaJNdEnvPTYWDOsDwjdvFnAcTuoATvMqxCVBCqyfGHPXoAZolDkMclipSjANQVxXdbMCMAJyfUmmEjfsZ');
    var put_4 = objectStore_4611.put({f0_k: '<boolean>'}, 'MybqDFKDotIixmHBFyIzILJDubzttZaFrcsffoYxDiGAfMfFzwNKpqzoYpjVgxcoQNhAXYnMUHarosTDMNhCAQcMsPzLWbncvTHBVsBToYQQBZenlxCFePAieCabJCcQCCfyHdGorCATPIo');
    var count_1 = objectStore_4611.count();
    var getAllKeys_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('BrHUqxULMQnAoDNIANaVxyvlPxVVDTJbGeYIcsRtXXnhEpvoTFTBAjYZMNDXdCqcjexmqIxkuSMUgPdyrcLUHCubHNRlVhQAUEIOzzqQXcDjyDJGGKyjzcdXKMLNEsXCVXnwPpjGHGAkzMRoGeYEjTsYjrrmBXBOfuWUsQzqvSWbAPuqleZvIBDaIBIbIZSUtNbGmSsZqBdbxDXirNJbehsyAlmtQmYnftyajRFmFkSAAFostwpaXRBCdLAOWzoGKSxIBsWkyGvJLmrmYthaQzLClpMjZtIjxLyyrFniXIIUFHYNWjGyYusuMGIFsDrNIxJGcLLEKbTcXTSpEJScxPjTigTkcaOgCjaAsqmRRmBozUbFIsoZpbjuzIZEBPrOigtLdbTutUuepbxzdvCnxcveMzUSjsaREGzRawWbUqezHTlZVnnmVOlwFluyWFMDDEdcpJJkyoEteQrrUZpNHeErmtQilcYdtMjuZkerDLICpYiTNBnBPSxFNBKvQPpqacVDKQSOcJdFrWINawHDmwrDDGFle', 'CTGKduTNqrLBbxxQqdxrJTVRXMwjDQPOueFNnBJNqVfzSjnnqXQsvgGXscPSHhxWhIQlHNLQtLcrgwDbcrQiXZCMKLoKliazUAXnofgaQYEFzPgtQisdwqILKsEPdXGlEVgutpCzwjTjywJjEgrajPrJKoDUhlAbScCWFgtDAFVogoIYJMofoZAOfFcEOletzPvrLSaJhsGXAwtBvUAdtkcuPBYEpBZegNCaZbRqPBjpXWPngSAmvDazDSXXMqMrHrQIvkCxnbhYNTVrXZwOXsuqfQkmNERKyHPTWniyIEHkdpsEDJvcgoxRdbHUsBcMgLgvTDJalwxJmcZBrZMkfhXNeiXisHGApxSEelMrPzkSsizgEhdNuwwjXMVIahFmHamtlADtqxaUBnDjuXdfzkCiLCSoXtzWrUPjycwgVqXHMaJWppCXOOqyZOrHTrvSzVzMNzzQWUBvGIjDUxXUrJvYHMVIEvLalsgbMPVsbCvJMKKyOQmkLojmzMnDzQhdvZQMTiokLFgYDgzrPCPsdeSAkBEUuTAYCItIzLegtuKPXtKPfyzFUWbwiPqUSpNFOlbpHrXYKLlbKgwoUBDgVlSXNnmZpwjOyPKAKpKQTyPPzwnAkjFOeeFNNywZGtOSbhFEdBiiHHrjJjFEzwdVhFfCeKONpsNOZXatrVumdwZHDZsyfUmpJLGznNjJwoYSFinhNdcAeMBqwsxbljuYGaDSiHXhnLfmkiYvUFSsREufXFFGlYucVBDJAHEO', true, false);
        getAllKeys_2 = objectStore_4611.getAllKeys(KeyRange_14, 2221327036);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('dSKfdzzNQpyEbwgkduObtpSSiPwgluBMnKqhvXmJUlmPpYYEiwZNqgJxlcuJOOdtGMznEcDWFxePXBrbnRRuENrBEmyUPBRmwcnCdBzbGSrAmOtjpSfdhWOdeHOjiItnwNROCRpqqLzAWuLaRuGBZXbBDhAOVekNKOjREdizzrjROfzZlIMNMmlaJNdEnvPTYWDOsDwjdvFnAcTuoATvMqxCVBCqyfGHPXoAZolDkMclipSjANQVxXdbMCMAJyfUmmEjfsZ');
        getAllKeys_2 = objectStore_4611.getAllKeys(KeyRange_15);
    }

    var add_3 = objectStore_4611.add({f0_f: '<string>'}, 'gKEzipQqMwoRQPOOxxvGvpRIcMeUeGwXKHGujuGOHDyLqQyZDpolvOYyRcLxEglezJiNJBJUzzAkVwjfcTUCAsumklGscLlfRLasKyslrQTymSsmMzrFpUrKnkAvOggujLlhYifFqnJmNmuPFfWNNXhoBXmsvEAREVvCDKFUbTJHbePBfnEYirxojuHfjUyUkQUHwdvHmACothspAFWeEmJHAkXXlhBfwVfLwqZvcobmGalkWztJJAZvpiOGgyEhdVopXlusyxlnJiOwEXgbNwYxZtOaIBiGRftrDxokFipcnZcIOldladHIOZSUeLOjhmQmzFitSqVTJxyibvXveAzatLfpPvrctCkMGVhdXXNYaoYcCcgSabSOZBDhCNOdExmjaSmwNpsuZWjOLqyXiPbvfRuWKQdInqJfdvkCtmdgHMQUmlOuoolkaHHnwrXfIoGJvmnAVPPICFLpLhyoTXkVxaSFVjDIBDMJvwnOIcdcyDSwiisgqsJlKiuEayieWLfMDXQLNkpxRDICVKHePTCNbzIIMaRTydQuMJvqbDRFmWPcxYIiZOKhkRTyOapHzmtvlejUhyXaQmGUWWcLcMWQpUAvTjRNsAYszZvjiDehcvguWWUzKYJqObdhCPHkkVUmTkFZDzzuDoCEFPcYDpQWjQRErSrFaYEmjlaNJBOEYgFtyVwZRWPfWJVzMZUPGcPKzNljmVpcIikocHHipTIcsZkeKAgzeYXJukjcsFuTWYXgbqWXMrUcnOthkPyUkmkdEvvizuzhSfDUtjmiZNQXJJLfkaArlYAUrWgTQBnFcyYLseFAHBJSVwlSgIeCiVwL');
    txn_6946.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6946.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6946.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6947 = db.transaction(['objectStore_4613'], 'readonly', {durability:"default"})
    var objectStore_4613 = txn_6947.objectStore('objectStore_4613');
    txn_6947.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6947.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6947.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6948 = db.transaction(['objectStore_4613'], 'readwrite', {durability:"default"})
    var objectStore_4613 = txn_6948.objectStore('objectStore_4613');
    var clear_2 = objectStore_4613.clear();
    var clear_3 = objectStore_4613.clear();
    var add_4 = objectStore_4613.add({f0_q: '<string>', f1_p: '<object>'}, 'oItPWinujasFIFtvfTeXukltTevBPQEFlpPpMxuIGEVwSUGGJfYgAyOJHxCkYPzNWntrVHJgcSultqrkEjvnwIWleZQSFZSwnaUkPuFeWJKcrCnRVzmwYcvYkqYifHxRFdVAdq');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('oItPWinujasFIFtvfTeXukltTevBPQEFlpPpMxuIGEVwSUGGJfYgAyOJHxCkYPzNWntrVHJgcSultqrkEjvnwIWleZQSFZSwnaUkPuFeWJKcrCnRVzmwYcvYkqYifHxRFdVAdq', 'oItPWinujasFIFtvfTeXukltTevBPQEFlpPpMxuIGEVwSUGGJfYgAyOJHxCkYPzNWntrVHJgcSultqrkEjvnwIWleZQSFZSwnaUkPuFeWJKcrCnRVzmwYcvYkqYifHxRFdVAdq', true, true);
        get_3 = objectStore_4613.get(KeyRange_16);
    }
    catch (e){
    }

    var clear_4 = objectStore_4613.clear();
    var getAllKeys_3 = objectStore_4613.getAllKeys();
    txn_6948.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6948.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6948.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6949 = db.transaction(['objectStore_4610', 'objectStore_4612'], 'readwrite', {durability:"relaxed"})
    var objectStore_4610 = txn_6949.objectStore('objectStore_4610');
    var count_2 = objectStore_4610.count();
    var delete_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', 'LmDWwWKtEqwyYGmjcufDbhnqBMlOpIGHvoFtlhebPFfRnOMFVlauRmRmaaasvgeMFkrAWWRFctYEiBTnZrRfufRghruXIkBFMHzihTjkbJwiXmaoGHvqwgvtoJyvPDnkBsnARfjCRPFSPhxquVAGEyAvrWNJoMWaihakRGvmOBjDwoenSunCIbQhVnUUiyYuFETbVCjeoWRLDxCWnkNcfqbyrkrHWprjuxTJQIDRranIGYWvYsRGEwOdXjoduSXZezPMlLMuAePJEfuZDYAKNSrDhDaAufiHjCwikPMkSnjfUOYOdgAxnBAxrNflLuexAdOymyFeGjSTDJivGlgqqszBolViStCuwoPrYMikqZLYgxylOXjZfZIHZjrJDrUjbXfHnTansxzCuTSqNEQbBIokQNxSvMOHPeCIFkdIskIzHGFMrNlNTCdaSmtBtNEOmAuidjhjHkjwRhWCigyLxmumIYDozaTeCMoiAxBuSNrsfxKlizDYSzknsBtSRaGrEaeyJotVvwx', true, false);
        delete_2 = objectStore_4610.delete(KeyRange_18);
    }
    catch (e){
    }

    var count_3 = objectStore_4610.count();
    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('BuNyErhNGurXjnkmHgXODUDjTATcWQWjRMSgjFAPAqgKASfyZDEpsKDHztJdjBKIoDVqXTycmGRCLcjxxSQntkkXZAmQIUa', true);
        count_4 = objectStore_4610.count(KeyRange_20);
    }
    catch (e){
    }

    var clear_5 = objectStore_4610.clear();
    var count_5 = objectStore_4610.count();
    var put_5 = objectStore_4610.put({f0_w: '<null>', f1_h: '<boolean>', f2_z: '<boolean>', f3_y: '<object>', f4_l: '<string>', f5_r: '<object>'}, 'vBifNnDhRLLnorrPUUpQGfxBkMyrjVCFKDyLToZgiEjjZmRmQweLwnFhBHbqDnMYTyMRNjYJgIXyTnJRSYAOkIDNemqtXTuLQsTeAyNzmnALPCemwdxpunFvnFHeQwJbvLIqqfzGWebjbyFpdqe');
    txn_6949.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6949.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6949.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1808')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};