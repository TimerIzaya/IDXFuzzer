let db;
const openRequest = window.indexedDB.open('str_2034', 3758728568958929)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5548', {keypath: 'dVafcPWwPnvKjVmoBoBajnVvSgXOstXuiATdVBbqfrhRGagunOkRaDSukLcSIwwsxzZwtTMbuLAMJitGiEHxPGeCjYNKXjXjzjanANlwmkokSySkNQHpWsayIpWazCwwbEMoadIjNuCEBDOFaYWzyOxvxdHPbONLtJiaktbIizfBeKsXYKivbUySwEKJzzcTMTMSFVZgqaGnqGEcGzrrdoibbfSLjTSIJZJUpZVIdcIfYcNYUXdhBAbNWtoWLDVwuFHrREZpRHJDEcUewPxeazejzLdnQVYGwtUXPiwqfGDqNtpoxmfVyHRKmhlehIHVfnZPgyijxNOFmwGKmYNaeuhJutQREISwwsPiuZlYKanRqjeWLdwJagoknFpQNsOIpVLHUVEKPdOqcozOaeIxtdtwZxfjpKTDMqdBtqgerFdptnlbkpGeAJTjGvbXtKbXfINTnUgycyGmnbLXuSsUOcNitWApBVSmvGBkhyVCLBDHTSXRqURKwyUkbJprAByNgpvcsavYtqJRZyYSrBlpnFlgFNuzXXJYrNxlHZHQCTv', autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_5549', {keypath: 'LecTuSkRHYryjtqpmxVKvNSxBesPVYfxHuGSaUTKdQkGrCtFKiDOcPECHayqYwjTVBSxGDclbNbpzoUUjUSZeftHLLqVJBBmcSZbqaJQKnJODFFwGAnxytpEfYVnYzQqaGrXRzKqojttxZlmyRYPsfTBsQAHaTDaPwuJstizgQOxAaMaTzprlbgcFmuTwdRQIiHIImQBzQIXUhQsPGdAgDtJTAasTSsSaSYykKJdmaWfdMwiNSWGKSblmwBzzJrhIsSThJHcHwENpFHLKjbqSpRVlOqwEZjLglqLdozTJgtzLmupNSdSoervvhGhvugsdxkQBlTbBNNqZQoZWRWMWPCFoRkEIsfBxlcRkXIxraQzvJUNVBjwAptPoslJMcYKabawoaqFwAYZtloLPGkhUcePqjYjGIiSOTxPZpFljGaDRBlRQyjKqjVFeMessXHGRTUejtDKnYBhGwztbQwmHDuksELkHoVdZgqlMzRGCbSJpguifWbOASIiAunYqyatEektfcZGrVhyEpyJearJl'});
    var clear_0 = objectStore_1.clear();
    var add_0 = objectStore_0.add({f0_n: '<boolean>'}, 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
    var add_1 = objectStore_1.add({f0_q: '<boolean>', f1_e: '<null>', f2_w: '<number>', f3_c: '<string>', f4_k: '<string>', f5_y: '<object>', f6_z: '<object>', f7_e: '<object>', f8_v: '<boolean>', f9_e: '<number>'}, 'HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP');
    var put_0 = objectStore_0.put({f0_o: '<boolean>', f1_d: '<null>'}, 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', 'HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', false, false);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', 'HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', true, true);
        get_0 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_1.clear();
    var add_2 = objectStore_1.add({f0_c: '<array>', f1_v: '<null>', f2_v: '<boolean>', f3_f: '<object>', f4_p: '<string>', f5_v: '<object>', f6_t: '<object>', f7_f: '<null>', f8_w: '<array>', f9_p: '<string>'}, 'SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc');
    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', 'SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', true, true);
        count_0 = objectStore_1.count(KeyRange_4);
    }
    catch (e){
    }

    var count_1 = objectStore_1.count();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP');
        get_1 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_5550');
    var clear_2 = objectStore_2.clear();
    var objectStore_3 = db.createObjectStore('objectStore_5551');
    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false);
        getAll_0 = objectStore_0.getAll(KeyRange_8, 268517516);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        getAll_0 = objectStore_0.getAll(KeyRange_9);
    }

    var index_3713 = objectStore_2.createIndex('index_3713', 'test', {unique: true, multiEntry: false});
    db.deleteObjectStore('objectStore_5550')
    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false);
        delete_1 = objectStore_0.delete(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', false);
        get_2 = objectStore_1.get(KeyRange_12);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8375 = db.transaction(['objectStore_5549'], 'readonly', {durability:"relaxed"})
    var objectStore_5549 = txn_8375.objectStore('objectStore_5549');
    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', true);
        count_2 = objectStore_5549.count(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.only('SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc');
        get_3 = objectStore_5549.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('HmExCQwlhycKaskimbfDCmpsLCTMVeXlKKCGxofOMWGhbZMhkNrPEgynPsDbtsDRsSRDGGYfseCNHnhuGYXOuHEMswHiPYeiLQzTfPCrcTuPQKXrtkuntoGpypfCIJUP', 'SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', true, true);
        get_4 = objectStore_5549.get(KeyRange_18);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', 'SqnlWRMfttBzbwJqUZcTibYKNmNUSTSHQrrFQtKjuyKJZFaRPefQvZkmvZcyUUAPysBRacIBvyqbfvxJEEGCfKltqrDNcWTHDEZLQzAaMZXvgjnyfUOOVApjzUtEncBOlnGXVSoyUkFVxesrhLnJikGHztJpHtbjwEbMkuJrPRwDUZcubbtQiaBoXRVOmbyUPfpKFAeOaHIrXGzsdfTfQCCBiHINeYxtSYniCOlaSVZutpYlFCsVlFOdQViKPRemhPSVPrryWlpctnWmQMFjKydztXDqNmqwBbCUUHFmrYtexQrpjPlOapPDcawSiJkhIXRmnIOLsSmLTtnQGecTTwMBrvCdpRnPjqaMDxRryIVpqBhGpCcxrlgwSMORhncoXzHeYuNADXxBtRazgsMWGZyswkkkTcmWbuhwvDFWkjRhFQOVVDOpJWTTiwc', false, true);
        get_5 = objectStore_5549.get(KeyRange_20);
    }
    catch (e){
    }

    txn_8375.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8375.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8375.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8376 = db.transaction(['objectStore_5549', 'objectStore_5548', 'objectStore_5551'], 'readwrite', {durability:"default"})
    var objectStore_5551 = txn_8376.objectStore('objectStore_5551');
    var put_1 = objectStore_5551.put({f0_a: '<array>', f1_s: '<array>', f2_p: '<number>', f3_g: '<string>'}, 'fltMQywtmJZYEkcwfVqteWDEJRLWiKSCWkgnwfIZMlYHcdPcBDVDekbqrGhhSKlipNbSAlGDdPOwcMPUEElQKkESYdZrcusEdOhPNVKAqDYItXUzjcpLEZYjkrvouqGODMtpdzYIoChrccEoiMDwohtseqZWQuzzzKrtVGAutfpmRWmaurAdjBrzwOadmKAdaympGvVRPtSuMkDWtCJooNMvujtzWYWmoialPdCQzBxNbIjyvsIXTObEdweejFJDrgbMRbMDUPZCNNxtnhnugqXagnzGzYiJKkTFGRjVQcUkChIyhMmgjrOlSCNQbQsEfXoQMAQpJbTCzxkfQuAzilJzLIdJFgHHqeAqzOpOyVETkXMHKvJmxIIHUxddjPaBDhvloQwGxiAYwbngjZjMcKqHBrQvUsZyccgcPCTTutXVcYjPUbjgjHEfzfBpjWbtqNDqYfmvWSlOPdWUufZSHSTNdvezAqvFCpjWqkyFaLArgcYjwaVREmPQZAemTWiYiXHEBtVsjzNOYnwFaXFEYeRmRsweBMPBlnSwyUPuoDpAeDppYYlEGvbjhcWUXJAWddudxAsTqgSxgApGcEmkXPRGSVzXcnCjafYZBxYhdqPbOKOOhNjZJlGcfPtyXgjQIvHLwQxZLTfaPtMytcrPjfqzQBOXvnvzThvqpduIJyZdmgbUodAQLeZvZQJnXkejpckCjRpntDRcQTfZMKHynxcMYlywWzHMMQBbwPPZdnZsEzjpRMxrXGaeFRAPVlLLDdfRcsEEiTjhkOTYuEDmlkNvtVSuhqKybvxPVCJxWDApFsCcnrhEJaVZUhDdymULeMblVlMxVZRzLVVUmFTlLljpLEmRNdNlhOthnhXEAUJYMtidbIVXFnOMjSUSarzvVHcTawqJnNyAnKxGmocwLqRUsoNVVLYwIPQdZwZEWYrpCHdOhilAgXfMKVQpHrNuSyjT');
    var add_3 = objectStore_5551.add({f0_s: '<string>', f1_k: '<array>'}, 'KNtpuMxWLAhLmcLzOpdzjcAEtBqzQwLRNZnxSzrWiCDvhjqYKnXcWlulPAxHwRwMAVRqtnNtSbaHCJclnmjEJwvamUIFdSBUTcUsytPywvOOqxMlAqHNkeasrVGUmAIKIgjQlkVrPZnCKUKFJRQeUGJNfJEoTUcgNfKGUzkRYhwWbevHZGOGFnuoyEjpZhKxVGxPwQaMDaTGXvmvBzIpWBsvrIhIxRvgVdSaEvcxpksMgYzEVjLVqzqllOcLHyCOhqpDRMzYbYmLJFiisnIifJwOwzcnhhllvlmJtviUpEHqWiNZJCvAugvwdEVhIluFiOrwNRYcnEohGgsImDrvkaHQxdsnBgiYgyYyDShjtIJbOuuIzXuNBHwtjAgzZgSGmitOrWXUIlbcosuWSPxvgceeliCytfjzYuSBSdJVMlqzAUYgelymjZFErOxqhAdSkWYTTPQSaIHHFhgitgeLzXigIXPkDkSloJKtEadFdmUFzyTUzMWHVclIrhMxYyYVTBpERzsvDzIEwdqSWJDqQvHuCmCJGGpYJqiMxgfXzGGLRjPyQMsOshIvNVuOMdjmojdCvwCIjpKVmZwsqVcRYmxqjaQDUwrhEJcLZWbgDdzIFLAOdLEqxeObCYixphveCeSNyMxsBcFKXyITXrlEWGPlXCAmoFSatCVjaHbWwrcWHrlflzilgMfVTRSoKXKKHYJVNCxVQWVmhjZjKOEZvrTLeMdFeUDhJWerRDhudgNokAZjviopzmrJswRKITOOSzvkxtuXSWStxFsREYfZrONfHWBcIQkoSJfyKMduzskuQfSnPRiUwWyEQsiGGdLSeoDkOISOPWwpsEWCYdmwCdIKtkLLTZUhkgFkYtCydaqPmypkxpEdxycAPGKaFoEuqvUxxeEZUaJNoMWqGBxECHSMtMWGrVpCBGHCtIPwUUnvFijCtTFCpzqTqvYRKVepgmMjGsWiCRIjzXVillAwG');
    var getAllKeys_0;
    try{
        KeyRange_22 = IDBKeyRange.only('KNtpuMxWLAhLmcLzOpdzjcAEtBqzQwLRNZnxSzrWiCDvhjqYKnXcWlulPAxHwRwMAVRqtnNtSbaHCJclnmjEJwvamUIFdSBUTcUsytPywvOOqxMlAqHNkeasrVGUmAIKIgjQlkVrPZnCKUKFJRQeUGJNfJEoTUcgNfKGUzkRYhwWbevHZGOGFnuoyEjpZhKxVGxPwQaMDaTGXvmvBzIpWBsvrIhIxRvgVdSaEvcxpksMgYzEVjLVqzqllOcLHyCOhqpDRMzYbYmLJFiisnIifJwOwzcnhhllvlmJtviUpEHqWiNZJCvAugvwdEVhIluFiOrwNRYcnEohGgsImDrvkaHQxdsnBgiYgyYyDShjtIJbOuuIzXuNBHwtjAgzZgSGmitOrWXUIlbcosuWSPxvgceeliCytfjzYuSBSdJVMlqzAUYgelymjZFErOxqhAdSkWYTTPQSaIHHFhgitgeLzXigIXPkDkSloJKtEadFdmUFzyTUzMWHVclIrhMxYyYVTBpERzsvDzIEwdqSWJDqQvHuCmCJGGpYJqiMxgfXzGGLRjPyQMsOshIvNVuOMdjmojdCvwCIjpKVmZwsqVcRYmxqjaQDUwrhEJcLZWbgDdzIFLAOdLEqxeObCYixphveCeSNyMxsBcFKXyITXrlEWGPlXCAmoFSatCVjaHbWwrcWHrlflzilgMfVTRSoKXKKHYJVNCxVQWVmhjZjKOEZvrTLeMdFeUDhJWerRDhudgNokAZjviopzmrJswRKITOOSzvkxtuXSWStxFsREYfZrONfHWBcIQkoSJfyKMduzskuQfSnPRiUwWyEQsiGGdLSeoDkOISOPWwpsEWCYdmwCdIKtkLLTZUhkgFkYtCydaqPmypkxpEdxycAPGKaFoEuqvUxxeEZUaJNoMWqGBxECHSMtMWGrVpCBGHCtIPwUUnvFijCtTFCpzqTqvYRKVepgmMjGsWiCRIjzXVillAwG');
        getAllKeys_0 = objectStore_5551.getAllKeys(KeyRange_22, 3052154524);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('fltMQywtmJZYEkcwfVqteWDEJRLWiKSCWkgnwfIZMlYHcdPcBDVDekbqrGhhSKlipNbSAlGDdPOwcMPUEElQKkESYdZrcusEdOhPNVKAqDYItXUzjcpLEZYjkrvouqGODMtpdzYIoChrccEoiMDwohtseqZWQuzzzKrtVGAutfpmRWmaurAdjBrzwOadmKAdaympGvVRPtSuMkDWtCJooNMvujtzWYWmoialPdCQzBxNbIjyvsIXTObEdweejFJDrgbMRbMDUPZCNNxtnhnugqXagnzGzYiJKkTFGRjVQcUkChIyhMmgjrOlSCNQbQsEfXoQMAQpJbTCzxkfQuAzilJzLIdJFgHHqeAqzOpOyVETkXMHKvJmxIIHUxddjPaBDhvloQwGxiAYwbngjZjMcKqHBrQvUsZyccgcPCTTutXVcYjPUbjgjHEfzfBpjWbtqNDqYfmvWSlOPdWUufZSHSTNdvezAqvFCpjWqkyFaLArgcYjwaVREmPQZAemTWiYiXHEBtVsjzNOYnwFaXFEYeRmRsweBMPBlnSwyUPuoDpAeDppYYlEGvbjhcWUXJAWddudxAsTqgSxgApGcEmkXPRGSVzXcnCjafYZBxYhdqPbOKOOhNjZJlGcfPtyXgjQIvHLwQxZLTfaPtMytcrPjfqzQBOXvnvzThvqpduIJyZdmgbUodAQLeZvZQJnXkejpckCjRpntDRcQTfZMKHynxcMYlywWzHMMQBbwPPZdnZsEzjpRMxrXGaeFRAPVlLLDdfRcsEEiTjhkOTYuEDmlkNvtVSuhqKybvxPVCJxWDApFsCcnrhEJaVZUhDdymULeMblVlMxVZRzLVVUmFTlLljpLEmRNdNlhOthnhXEAUJYMtidbIVXFnOMjSUSarzvVHcTawqJnNyAnKxGmocwLqRUsoNVVLYwIPQdZwZEWYrpCHdOhilAgXfMKVQpHrNuSyjT');
        getAllKeys_0 = objectStore_5551.getAllKeys(KeyRange_23);
    }

    var clear_3 = objectStore_5551.clear();
    var clear_4 = objectStore_5551.clear();
    txn_8376.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8376.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8376.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8377 = db.transaction(['objectStore_5551', 'objectStore_5548'], 'readonly', {durability:"strict"})
    var objectStore_5548 = txn_8377.objectStore('objectStore_5548');
    var count_3;
    try{
        KeyRange_24 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        count_3 = objectStore_5548.count(KeyRange_24);
    }
    catch (e){
    }

    var getAll_1 = objectStore_5548.getAll();
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', false);
        get_6 = objectStore_5548.get(KeyRange_26);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_28 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        getAll_2 = objectStore_5548.getAll(KeyRange_28, 1103136444);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        getAll_2 = objectStore_5548.getAll(KeyRange_29);
    }

    var getAllKeys_1 = objectStore_5548.getAllKeys();
    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false, true);
        get_7 = objectStore_5548.get(KeyRange_30);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        get_8 = objectStore_5548.get(KeyRange_32);
    }
    catch (e){
    }

    var count_4 = objectStore_5548.count();
    var get_9;
    try{
        KeyRange_34 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        get_9 = objectStore_5548.get(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true);
        getAllKeys_2 = objectStore_5548.getAllKeys(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        getAllKeys_2 = objectStore_5548.getAllKeys(KeyRange_37);
    }

    var count_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false, false);
        count_5 = objectStore_5548.count(KeyRange_38);
    }
    catch (e){
    }

    txn_8377.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8377.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8377.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8378 = db.transaction(['objectStore_5548'], 'readonly', {durability:"relaxed"})
    var objectStore_5548 = txn_8378.objectStore('objectStore_5548');
    var get_10;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true);
        get_10 = objectStore_5548.get(KeyRange_40);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_42 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true, false);
        count_6 = objectStore_5548.count(KeyRange_42);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_44 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', true, true);
        count_7 = objectStore_5548.count(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_5548.getAllKeys(4245935613);
    var getAll_3;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true);
        getAll_3 = objectStore_5548.getAll(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        getAll_3 = objectStore_5548.getAll(KeyRange_47);
    }

    var get_11;
    try{
        KeyRange_48 = IDBKeyRange.bound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', false, false);
        get_11 = objectStore_5548.get(KeyRange_48);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_50 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        get_12 = objectStore_5548.get(KeyRange_50);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_52 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false, true);
        count_8 = objectStore_5548.count(KeyRange_52);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_54 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false, true);
        count_9 = objectStore_5548.count(KeyRange_54);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_5548.getAllKeys(328387121);
    var getAllKeys_5 = objectStore_5548.getAllKeys(3437469169);
    var count_10;
    try{
        KeyRange_56 = IDBKeyRange.lowerBound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', true);
        count_10 = objectStore_5548.count(KeyRange_56);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', false);
        getAllKeys_6 = objectStore_5548.getAllKeys(KeyRange_58);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        getAllKeys_6 = objectStore_5548.getAllKeys(KeyRange_59);
    }

    txn_8378.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8378.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8378.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8379 = db.transaction(['objectStore_5551', 'objectStore_5548'], 'readonly', {durability:"default"})
    var objectStore_5548 = txn_8379.objectStore('objectStore_5548');
    var getAll_4 = objectStore_5548.getAll(3108252267);
    var count_11;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', false);
        count_11 = objectStore_5548.count(KeyRange_60);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.bound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true, false);
        get_13 = objectStore_5548.get(KeyRange_62);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.only('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq');
        get_14 = objectStore_5548.get(KeyRange_64);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_66 = IDBKeyRange.bound('qEtLJDPEqJWtFnxwekgxHiyLNYRVtbkmFSzhZWOTFBullwjEjRXDZdYuYOzIgAGVAvqyouGYFNqNcXUDnMBEPHaCAcRSuzlmTZRNawnzynpytEbRknrvaQIVxLHymFpisdWwPioFRgCMWKzEjjLWOceEesugYdycUCPxLsDGVPCqXHOyFYQZvBJqQBIcDZSKGNJdzsSTvTAKOoeZgclrfmhDEAOFPxOxXdhzQEinJOWaQnxNsrqroTBmhyqCeQtAWSgHqxCHaduSXCdGsRyzyPQzyUBXmvLsvNgwwlteq', 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true, false);
        get_15 = objectStore_5548.get(KeyRange_66);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_68 = IDBKeyRange.only('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn');
        count_12 = objectStore_5548.count(KeyRange_68);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_70 = IDBKeyRange.bound('daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', 'daIxyzttjpWMpFOwuhVuqjeOAnAtxrcexRpyxipMgAciutoGzWPDQgOxZTpoGOhWOZhowHZUnDAUghecqLonTUXRaDiMDMdeWWoJyDPFcdTRjYVUTVAJAbuPhodPkHnmPVbrBAwJclIXPkmZTayErPfGxWmPXzdlASMLpHONLahSmAJyZrcBJjLdfndFGNHfRWIXwjxPFUehUwrriIkJdEJacwPIPwAkphpKAAVSNVdueqlWKfDKOhekEpdOVUEAZgbGRzSUSdRJudxJgBOElWvVYaiTliJqUQuCrtCqKFDlTFhvRYRMKkMONDRZohqBJphYzqCeeOURFOBLSXTjvDIyzKGmibJResFPSwKExSamrFXXxbiRuFVSHbRXgRcmuAETIRZWcuUBdIPVpyIcGxSdhRJMSCoFaCHknHJxWxFlCpGFcARwcpzcTjNwFzTEiLGbaTfhxBimxFnrYbfrLnhSUPmUKrZabQoJucKiglYPoNdKgzFqoarZcNzINZSJQpuPikwVARnn', true, true);
        count_13 = objectStore_5548.count(KeyRange_70);
    }
    catch (e){
    }

    txn_8379.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8379.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8379.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7367')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};