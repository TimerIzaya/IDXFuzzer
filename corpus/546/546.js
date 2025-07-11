let db;
const openRequest = window.indexedDB.open('str_4946', 7895921784481816)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3211', {keypath: 'hfFjcKqNZovGSrwcXXHFYFMQFHMjzSJzPrMWyIQSCPqnImrHRAaxjngcpOXgBurELcrJCzxckOtRTjFUmkQtKUBHNptqpoXZXLommKKckkkWahlwKVYnoKZqkdIzgAHSZyqzDsSnlegkbfVFUCBzlfDQoaTwvwAhlKHTFnkaTjoOVzxEKFeYpBtSJkiqplNuQazHNUPcCgHSzMGfXjcSBXYBANFjownWLiuwkSvXyHQutBdXsgzwZbNHOmUTEGxYlqiWTNzRYyYjeuYVqFDNKrotcILZndzkGZFnYSljngluertEAGTtpUIEpylKdBFlAhVDctMrCOaQWYvHQkzpRvraPJPsqLunsGRPzyXUuCdCSkmQfwJpiNmOWBbspimmhReRSsriJRGsNDouzPLJoCfUlLlXeShTzgtcGcNgKWLLEFiNxUedqObBgTurNvuEavBfHldYCyQDdWxKpAUoLtbWofyNIrsIZVYuwdCSoLuHGAZGUbvGkdIFDTsTKJbsZpeOchoVOUZElRETulNEUyWinindCJYnLYcDFnQUYJxBXMbgllIcnzuBDUvxeVZIWESIXwiKMWfEdCMlEMAMajjWItbQujdZbkKEdfQGDAhHEXQuASIuhwvUVVeFvOZAOeRCCqcpxjeqXajAtrSnkumSTOoDshPGSSKUhTpRBiXWdUnjNKIpxKjDobNeDVeZTcwETQeACafQrrvfIFjxHmtmkxbizGbJrfhfHGzaZSEtafuXuioCDwQUdMpKbYzmjiFJdPMgbPTyTqujWKCiaUfBTJqBRUsKTtRRLCvIwobWzYwjayrtIONTTpCSaDBpeNoSEVuGpSszxhzKkGRVrhQTPfUNhYyWbokeHHYAbRorkvftHTHSQ.iZhZenyHpQDDQmSJnjEQEgpHbnhkxCTNlUngDwaGFakBrqIIxIgSDogctpuLOFfRNrhndMcyLCZBdOiCGvQfxHBFgimBCAGjoXJolSJjthZCVihNMqWIRqPrwVOppnrCoLWrkWcgJgnPAnorBywSbSSSPecTbCRFCyYrkwcJjbkTp.XPGlvdjgxwYtjWpYFRzFGxOCXvQvlivJFmIBpBReGrYJslochsvYZtBcxnHkTiHnkdljfwJxyKbLFQOTrgyMcPDkUYWKMQdgIeKqKJgbqMGCcSXGqZwgUKhQaklipEtofihzHDNLVfyZpmUgANiboXdntNEwOKPCFtuSvLYrqrhSeyxaxdjpPhsxTcYMoMEboFueZenhwbZWSDmApiKoOmznsRmsCSOkjgcNMXWtGONudNdOOXwLiVSnrLWcgCuIkrpCgUlZIWSRPheDVZJUGzAmYoLiPTGkaNtclvJwoPgfBWVkilXkzFaTbexoWyzjwXazKyXACWOKnMKdVZzkqVQxXeUhNrsuFJpyrSJlGYjpVLgpktrhtVZtmoGgFWJxDBjKUodcfccyLhbNGauRIsmuAmrldoSYhYfWLcSUDlEpZMxGvLSgZqsGXyeoNeQPawCCnRFjjstofaXpuanyMbdPMJUitVXVPcPFNHoHZWkiJAZMafqRwbdgKsQQJZkTIpBkTnhXLxavXuunXjikmnfhMqiiTFHuhMNkRbZLcCGDUzfTFaKVKQWJDncGUPcQPMjwxTiBtppydGwHtDSTpyVfxCxvAVSYxVhKxHuPiJLAguHgwHVJMpletXakyonclRCnRzJbMkQflTHiXZxNXhbkKFzweXNVgckREyagRbvlaaM.nSnDMDLXexHFeOiTTyWoQwFioALAoFNVaCCOBimUuTtxofYgbdPwZfSjmnTzqdPzQcKhiOrPGmqeSiFPQtBHreyhhVnXVVLSqswqixOYPqJeRUlCuriNcPoqMdDEeQxIGKYjXpwSgCiZJFqkOTesAGlJOhbEqASHbQawdZHxUkFyOVeqUVEnhBUxkoMkLzlkfQjDOJqknIHBgirXidYjrhjhMZCsbjazkzcNwKDrvBSmWwYIXADPCyQtVinuXUMVDkUzJYxciHcEhbIZnluDvrdxserecEkRqaVOnCCiserHMPHskyobUOFDprlRIkCjXdGjyoPfctPozHKZiqghDVwmPXakEIwmFCBYpRBKPIsLYcAklFGRLywW.ukonJ.pfXsENqMcrlakNAFAEWVgbhDDgzkVyykIzPHidFYNSIYsNUrzEXGXbvxvzFcAPcWHhUIOuTYfLCBddDNpAibsHOzdfvrUylmRLAkAaSFgMYTvLjHiXIAQMjrhnQUvTYGokHdNbJcKPnmFvsGwwCwmxRbrJnezgHbmgNlKujjyavkHhMsIVftDQUqpJmnvKwtSFbweOhRZYLlKUxOMjDZsBLHIidCYiVkOAYkhYRGujaCCAHWfZBWfCAkxRIOiiuHKxgkCKVlLdMTfLtzUJFHTCZmxYNLdlzflONMDerxRPBViiesazOUbYYQJMOduWTRFkiBxQVVflgDngESeperjrinRVOIVAAjPjDeTGDiDXjoJigfogjvgDcRlYPGaGrrasjmmQcVlULYTXKHmXFtxyHtwvbJpkEfxkZkmiyZbQyvPSaIwswuCczthakqxbLaFqpSkvycuUVBihtJVNmMQJBOzKQxhhimOrJnSQSKdKLijdXoUpItmVdaOYmFsXavpAzpfBziqGIAnsszDbdILUFkmavUYHKNmgUSWmevhVekkxFIlRiCfaMiVDDhtjMcBoyJIPKSgxyBReeBCxOmuWuImhhZSJWjaucUHpbANFaGSxISKIrubWwbQenXtGUOTENzOMSyamqhYxCBEyEHmiSUURIqKlOaFkBSsHtWVBaUflQBZQApzCtEbFkZaxePSWSWcTfNSjplAuaKabuMpZqdXKecODXIbYDHkWdHRrxlZHEoZVesNnnIiONUkZmyFQhLvcqrIMrTWqlMzTtThIk.LTbvLtcincadiqzBTrNdeAoSEEexbhIxuYDopYWgzQExlQskpKlHRjcjIqjImwqcfpOvKllZtxIxWTdIZQHKgFkTqjjabOeMXnkSwiTaiYhwuCkEACMxSZrDOPnUgqtZzBXzFEsuXVKPxYNVBlPkbxkbHDvXCYurLfuvYvydGKQOBANpLptApZBMCBkyiZLkrBYpTOszgyqXfRbmmcDQESshNSfwEUrelYZJeaCTzoKhKZSwqqarpYHMcrmbmXgknqGnWHIJIjtKvJUjftYESDMrlBOMVlbMSyUqwOXNFPDPfpOqSkiflTQGvZPxDhdivTAvVxdHTlxdSXoVtGfoGVZuuksStBvdmxIoOMdqYuiHfxqqzqUOjZIgNYioTeLPWtAUpNVSwoxvsCqCBEIGCnxBLREAvNUhCDYvIGcCXGszpDMguAeNgSilLmkSiYeTzXqfnDUomsvsJhgTppfgGwlsMfdDllhhJmxcOzFGYdeTMRUUCEIEgkdHQHGYnqHqXCAmOYeVOaVEHoVkubhQESaQGgXIBArtothNISFopSJRGyhrXEBQuaaWMLQwGfQviFayIObWCqdAUifHYGRUZtGEytkRSVaShGLPCfLmWzXMOjpxGetWQqrXmxFpCeqiJFvkVmGKEOEaQXpcYpfWHYpDJZHlngCa', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var index_2156 = objectStore_0.createIndex('index_2156', 'test', {unique: false, multiEntry: true});
    var clear_1 = objectStore_0.clear();
    var index_2157 = objectStore_0.createIndex('index_2157', 'test', {unique: true, multiEntry: false});
    var clear_2 = objectStore_0.clear();
    var index_2158 = objectStore_0.createIndex('index_2158', 'test', {unique: false});
    var index_2159 = objectStore_0.createIndex('index_2159', 'test', {unique: true});
    var index_2160 = objectStore_0.createIndex('index_2160', 'test', {unique: true});
    var add_0 = objectStore_0.add({f0_y: '<null>'}, 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh');
    var put_0 = objectStore_0.put({f0_f: '<null>', f1_f: '<boolean>', f2_c: '<object>', f3_g: '<null>', f4_i: '<null>', f5_o: '<array>'}, 'PUuOuHAlqQBDSeNMvpDTTNMleMnly');
    var clear_3 = objectStore_0.clear();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', false, true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_3212');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', true);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_4 = objectStore_0.clear();
    var index_2161 = objectStore_0.createIndex('index_2161', 'test', {multiEntry: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4805 = db.transaction(['objectStore_3212', 'objectStore_3211'], 'readonly', {durability:"relaxed"})
    var objectStore_3212 = txn_4805.objectStore('objectStore_3212');
    txn_4805.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4805.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4805.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4806 = db.transaction(['objectStore_3211'], 'readonly', {durability:"strict"})
    var objectStore_3211 = txn_4806.objectStore('objectStore_3211');
    var index_0 = objectStore_3211.index('index_2157');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', true, false);
        get_1 = objectStore_3211.get(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_3211.getAll(3607538922);
    var count_0;
    try{
        KeyRange_6 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        count_0 = objectStore_3211.count(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        get_2 = objectStore_3211.get(KeyRange_8);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        get_3 = objectStore_3211.get(KeyRange_10);
    }
    catch (e){
    }

    var count_1 = objectStore_3211.count();
    var getAllKeys_0;
    try{
        KeyRange_12 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        getAllKeys_0 = objectStore_3211.getAllKeys(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        getAllKeys_0 = objectStore_3211.getAllKeys(KeyRange_13);
    }

    var getAll_1 = objectStore_3211.getAll(1538721314);
    var getAll_2 = objectStore_3211.getAll(2756833637);
    var getAll_3;
    try{
        KeyRange_14 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        getAll_3 = objectStore_3211.getAll(KeyRange_14, 3210042034);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        getAll_3 = objectStore_3211.getAll(KeyRange_15);
    }

    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', true, false);
        count_2 = objectStore_3211.count(KeyRange_16);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', false, true);
        count_3 = objectStore_3211.count(KeyRange_18);
    }
    catch (e){
    }

    txn_4806.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4806.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4806.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4807 = db.transaction(['objectStore_3212'], 'readonly', {durability:"strict"})
    var objectStore_3212 = txn_4807.objectStore('objectStore_3212');
    txn_4807.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4807.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4807.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4808 = db.transaction(['objectStore_3212', 'objectStore_3211'], 'readonly', {durability:"strict"})
    var objectStore_3211 = txn_4808.objectStore('objectStore_3211');
    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', false);
        count_4 = objectStore_3211.count(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', true, false);
        get_4 = objectStore_3211.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', true, false);
        getAll_4 = objectStore_3211.getAll(KeyRange_24, 1123881037);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        getAll_4 = objectStore_3211.getAll(KeyRange_25);
    }

    var getAll_5 = objectStore_3211.getAll();
    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', false, true);
        count_5 = objectStore_3211.count(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.only('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh');
        get_5 = objectStore_3211.get(KeyRange_28);
    }
    catch (e){
    }

    txn_4808.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4808.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4808.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4809 = db.transaction(['objectStore_3211', 'objectStore_3212'], 'readonly', {durability:"relaxed"})
    var objectStore_3211 = txn_4809.objectStore('objectStore_3211');
    var count_6;
    try{
        KeyRange_30 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', false, false);
        count_6 = objectStore_3211.count(KeyRange_30);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', false);
        get_6 = objectStore_3211.get(KeyRange_32);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_34 = IDBKeyRange.bound('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', false, false);
        getAllKeys_1 = objectStore_3211.getAllKeys(KeyRange_34, 483734142);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('UqPOoHNxRsaZvycnEAyAeGBmKYOWzysRWbsjFdxLVlCMRukDhPDPueyCtakSgjFihupIiZZpzSzxGFBPybNiKnXkbIjLtyXhErSUTlxveuTKoQIFuofPffrCWKuCLItvMGRVMUNAtjuPMVEimKzfEQSLdjlCkxBnjJGpvRxxweOnbhUPfcoigBgIhwEyzakiIfumeVxduJflhxRNfHCMJxeovbfPxUJwPohRbbhdMYndJDINnlnCgHGIYdQREiGzZQIBbKsmNzYCRTNymSBSuPwwtmSkNGFsDKvKLdywlgHrWKefBBRUQkXOOFzAZKsHelapAnCNAgHKCgWwctZTPfRiRyDuIZUOIizxCwIxwuRUSVCEHCgVWBsMjySTsTjQVunEPbfwdRXexhCeOqfCGgAEYMWOdicocPzAgbSNrQzLoJdmsiizUFhtvpQmfOEPRiDPWBhrfnmjeGBQHlGKIpstDUUhHtsdAPJoCrBVNgsGWdXkVzGqPasFAogvRWQKXpSBDagqmKDYfnJVaFRVqYGlEQpMqKzaWOEEAhpyGElUmmnlbJeYVUVKFATjbgLhcjkcCxUyZTOVpsQuNsACfuJEQzxUuPOCOqZgyyUdtxavYicwQzJZrvAiNCbXZlCqyYQogRFvPwaiIBXGyLJqgINIEhJZjuekcyKTssVWRPlzRBRshCJCTidUBYxQuQfszMLwzh');
        getAllKeys_1 = objectStore_3211.getAllKeys(KeyRange_35);
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', false, false);
        get_7 = objectStore_3211.get(KeyRange_36);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_38 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', true, false);
        count_7 = objectStore_3211.count(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_3211.getAllKeys();
    var count_8;
    try{
        KeyRange_40 = IDBKeyRange.bound('PUuOuHAlqQBDSeNMvpDTTNMleMnly', 'PUuOuHAlqQBDSeNMvpDTTNMleMnly', false, true);
        count_8 = objectStore_3211.count(KeyRange_40);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_42 = IDBKeyRange.only('PUuOuHAlqQBDSeNMvpDTTNMleMnly');
        count_9 = objectStore_3211.count(KeyRange_42);
    }
    catch (e){
    }

    txn_4809.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4809.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4809.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6526')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};