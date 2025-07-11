let db;
const openRequest = window.indexedDB.open('str_7851', 3445197198653141)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4334', {keypath: 'TXSpqaIfFeYcIWdmHMeojJBAmmVVjPiIcEwpZMRmLvBGBzdKIRhjikdRSPeNWlHLQcvRnOUpbccNpoBHLUsfiBVEZDXgrZCaIilZSeAZrfJzKmdxfcCEFbQoGcGJrwfJnFqqOHcoyivCXHylKhzJoePJANkqbtuiPwIadrGZJPvJUGUCgwdokYTNYkdMEUCwMXtRirMwcHOrpEeHZdmDUPXfcGERKJWgwoCMXVFSeOghsmbaOHVgwmCtCSnGYbOtimoQMNShEMGBXdwHDeoDAVHCzTWlYrYKTMytmOXmKiElVRMdOyLgUWMZZIKdlwZUyYzHVzSUKGNHXBzeiWuzpaqluCbYyVQxGmOeXfxVrSOKwUDowmfWWLxjkMHNrKSvbtMvPUHtTdZXYOdnLFJIvwAEtVYvIuDnwAXhyUYNqikGhiFvLdQoJnvbMRXDhvmmZARdchKarFVdSBzeskPVSgQTvGYVTbKGFHFRMOVmCnnyApPQsQepzIuZsXHHjLHDbkFENIYEDjXokmNqUeIAGfNbLKzunwzIJpYdcVPLdQCBOhztLxAWEawqtCGGoseZrBBNGZCeKgRxTWeBeWtlSmhsaERpkhODrhkoJWrYwaSwBQZxYZBNRTNynnnWyGCcNoQXDFugKVQHXNaozjRNZpiXNzdPDfHjctHEVuWPGeQWrDHDxPXURIkZYeUYaEjjziVPppiuXTzgmlTPneMMMcWabwVBxEonXLCbQnxrOFYmtQCIOnpbLXCxWzZFAaiuUmuvYLZZAOSOxwfGifYRrpNBMNisGvlNOPIKpbFBSHlRFNiEXTOtBmmkIDoZqRwIfQKDCsgQnLSrICxhaobPvihJeBYrVgzcrSrCzHJRAPmulIPYbThELeRVQxwFvZxbZSAEF', autoIncrement: true});
    db.deleteObjectStore('objectStore_4334')
    var objectStore_1 = db.createObjectStore('objectStore_4335', {keypath: 'UIKFtSsIvZsfmvMGBZDMptvEnduqlxxhtZgeFVFKixvLspFHNRPtoMWNIuSrdZiNquQDfeaFjgIRexbgZbAuaPHgMyheaUwcAmvCOUlgCBImjGMDtuKNiHiFOWADrNCiTurfaHLMrShXcjPuMlIXHXKnQsvwUbmuXeepGcxgtnHKxCSjXnFzxMnuFunZoVFSxoxfNtxSpZAHpsYFgCbHvympxrfBgsyPIfRoKfyPZWAjMlXrZCSMwPBdDsURyvSVkVHLwUGYwNIxfaenepDIPRsnkWZNxslIzWbUJQWulQrzbZnInFBhVpNPBYqaZZpbxWEKjsrsMDqQtmLkAiuctJecNXXOcnLgqWFHOqQxZCefkNcVLMFJDwkmWFUKXnanVCPybtKTCRooMPGvjQFDqsDimQPuAfJFuFQiRJzPuiawRXtzwkcavXiwcfkBLSTCqnMqvrCxFTvndHcsRfaMNQTPHSXuWAKVoxIYfHKatCvGirZwQneXnAElJflKaEQAfzNkwGJAPsHsRgtQXgMLtjrBgtFZEGWGUkOhPgaYvfNJGKzItYkXjVuYAfaxzZLmxjzDatvVdYiKrbOwjYTLGIKLDGhvOKJvTRtPDGzYWBRbyIZltVluwXzPpmtYeRcBbjOGTXWjVCMAKWWYYSEUtiUaJlaurepmSTWxxaaEZdebHvJLqdxxKci'});
    var put_0 = objectStore_1.put({f0_v: '<boolean>', f1_q: '<array>', f2_e: '<array>', f3_h: '<object>', f4_v: '<null>', f5_m: '<boolean>', f6_h: '<boolean>', f7_a: '<null>', f8_v: '<string>', f9_u: '<array>'}, 'oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat');
    var getAll_0 = objectStore_1.getAll();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat', 'oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat', true, false);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat', 'oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat', true, true);
        count_0 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_4336', {keypath: 'XGFBsBvTGspZMxQfuHKJonAkjSaSbFMVumOHLFficxfghdSNxIjVbSNnzkQnwWmrgTkbCbBktEfDqpGXbveiOYRhmghefGiFRWdVYZUGkupKVTDwWqxbIllmulkKisWGWBpMlEPxnpozKtPpwkOkjLrxprhLBARxTAqkzWSIhdyyjWTMMjspuAORbburRJndXJNfMMTiCZHba'});
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.only('oDlKEEIqFKPKyVaIavYSjlAHPHocRXPSRacGHRmbqVkTwRlcOrBmNKSmUsCVphPaOxyGNMqGYgYNDyzPDSvHCFPJCnjZpHNXaVHEAewSrunJabiLXENzZmeGGigRrmLDaaJhFFHkzoFsRlTzVHhghOsbLxWvKMLogzDBwzDwLRSjOHBuNpFYopDgPIuyjpuGzBNhakTqzYWwmSvMRemUciNdHQywZoiVAAEKNAAgQjrATIpSkSmgunrHzDcyvOXoXNEAiDgpuHdsGEOsQuxlECywpYLaGpWBOeJvcWGTZPQwcdXrjFXQqMzJMaSdeYTYMQmhXVsZLtYOCswRcRjfXltJUFNATURfBrzXPRtkcGZTCyckalkHmjYnjRutjdjJrsGilxFHVRsxReCHfWjngIxHaAjUfxPMLKsJANRlFUVRPqbqJdWUYErSQeSrLDzKUsNDgZiHCdphNHiIjjEwggjcPXSirCKVdkTBqOIURRfxpjtBbhqwfylXdZhXGZSfCXoUBvNnGAHKzyvpDqLRrmGTIOIFdNkcxwGGlRLutFMyHujFsbvVcNvqsSZdMwCkoofPPMDRthkiUBQmat');
        get_0 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var add_0 = objectStore_2.add({f0_c: '<number>', f1_s: '<object>', f2_r: '<null>', f3_i: '<boolean>', f4_w: '<object>'}, 'uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy');
    var clear_0 = objectStore_2.clear();
    var add_1 = objectStore_2.add({f0_b: '<string>', f1_d: '<boolean>', f2_l: '<object>', f3_b: '<string>', f4_o: '<object>', f5_q: '<null>', f6_z: '<object>', f7_b: '<array>', f8_h: '<object>'}, 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
    var add_2 = objectStore_1.add({f0_f: '<boolean>', f1_q: '<array>', f2_n: '<boolean>', f3_q: '<null>', f4_m: '<string>'}, 'vQTCCucxJflFCkmtZbBhtXgfMwGwcjvWvYPVncdIMUstYglPyczuCEjkmECpkhmMpwfFgRavQNcvWSntOwEtmqjJZdqLEpEpkSPIlAWBVCXaMoruCsudW');
    var put_1 = objectStore_1.put({f0_v: '<string>', f1_g: '<boolean>', f2_t: '<object>', f3_t: '<boolean>'}, 'RtZAGtzZkvPDuxFSBsFtkLdgnpvCDFTylTkGNatDIRjqkLIFAuYQZAPwqqGoJgJmGEphSvZxExlnSBHbhUreUpPzKlrbasGHJrHznHIgYXIfqFnwsUzDVHIpGIHeRXHGeUtozaZOynHECctoBkHkQnoOAlsLquzhtCYskmOtIVjBlhwXMllNQUWMFfVVvYZfDhCDOLkBdrXGOexlHMklsBWoVTsnLSRJjceDJnLThHxrfAINEPnufAmlDyLaSqBGSrzGbToMhZZOulShKbRkjMIKYzUllmYzzGtvqRIUhAdZBKuXDeSoMVlhfBTRFTTIpAMFcCsgHSYoBkUntvBluRZMUSPFiFqzufjJoQuZlWvIfRtWRDCJUjJaDhgnRLjkwxBBeiqTrdzsZohtrjqMBhbFDaxgzRwwzVnlxfIHMfpYfLlvrrFHbAgempLTzoQKHloQzGQlEeGeSHLymdjlZThagRdEIOAKCFpcyFJYbjTcJqYoTAKqWTXZHKqSgjTv');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6535 = db.transaction(['objectStore_4336'], 'readonly', {durability:"strict"})
    var objectStore_4336 = txn_6535.objectStore('objectStore_4336');
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy');
        get_1 = objectStore_4336.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', false, true);
        get_2 = objectStore_4336.get(KeyRange_8);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', true, true);
        count_1 = objectStore_4336.count(KeyRange_10);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        count_2 = objectStore_4336.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', false);
        getAllKeys_0 = objectStore_4336.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy');
        getAllKeys_0 = objectStore_4336.getAllKeys(KeyRange_15);
    }

    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', true, false);
        getAllKeys_1 = objectStore_4336.getAllKeys(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy');
        getAllKeys_1 = objectStore_4336.getAllKeys(KeyRange_17);
    }

    var getAll_1;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', true);
        getAll_1 = objectStore_4336.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        getAll_1 = objectStore_4336.getAll(KeyRange_19);
    }

    var getAllKeys_2 = objectStore_4336.getAllKeys();
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', false, true);
        get_3 = objectStore_4336.get(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', true, true);
        get_4 = objectStore_4336.get(KeyRange_22);
    }
    catch (e){
    }

    var count_3 = objectStore_4336.count();
    txn_6535.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6535.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6535.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6536 = db.transaction(['objectStore_4336'], 'readonly', {durability:"default"})
    var objectStore_4336 = txn_6536.objectStore('objectStore_4336');
    var count_4;
    try{
        KeyRange_24 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        count_4 = objectStore_4336.count(KeyRange_24);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', false, false);
        count_5 = objectStore_4336.count(KeyRange_26);
    }
    catch (e){
    }

    var count_6 = objectStore_4336.count();
    var count_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', 'uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', true, false);
        count_7 = objectStore_4336.count(KeyRange_28);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', false, false);
        get_5 = objectStore_4336.get(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', true);
        getAllKeys_3 = objectStore_4336.getAllKeys(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        getAllKeys_3 = objectStore_4336.getAllKeys(KeyRange_33);
    }

    txn_6536.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6536.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6536.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6537 = db.transaction(['objectStore_4336'], 'readwrite', {durability:"relaxed"})
    var objectStore_4336 = txn_6537.objectStore('objectStore_4336');
    var add_3 = objectStore_4336.add({f0_p: '<number>', f1_v: '<array>', f2_i: '<string>', f3_a: '<boolean>', f4_n: '<number>'}, 'tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI');
    var getAllKeys_4 = objectStore_4336.getAllKeys(1360028138);
    var getAllKeys_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI', 'efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', false, false);
        getAllKeys_5 = objectStore_4336.getAllKeys(KeyRange_34, 3205854191);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI');
        getAllKeys_5 = objectStore_4336.getAllKeys(KeyRange_35);
    }

    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI', 'tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI', false, true);
        getAll_2 = objectStore_4336.getAll(KeyRange_36, 3246573768);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        getAll_2 = objectStore_4336.getAll(KeyRange_37);
    }

    var get_6;
    try{
        KeyRange_38 = IDBKeyRange.bound('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL', 'uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy', true, false);
        get_6 = objectStore_4336.get(KeyRange_38);
    }
    catch (e){
    }

    var count_8 = objectStore_4336.count();
    var count_9;
    try{
        KeyRange_40 = IDBKeyRange.only('uMLFUZmgNIRdCCXIhVDjaCFsYjFeXyVuxIQRvwfucYydwvjtpgAhVqyFBHRtZBMEqMiKATPgBDrESvnWRpuPkWeQOVSWDFosMQQKnjxLuJfUsfyJjgivZTcUpXiWRnOMuAarMdcdTejsGmjdALmosIIinZsriHvjuMxcCzyDhDDXrwZnHteXmNaycUjbGDquuvUWSFgfYBEJOzVXRajGCSpTrEoBJnLzdhjODCBkqHctwOKfZdVSvSXopyMiuFzwqdWMCLguOsudcfazHPWVcYTDTJeDPfllXZMTHbTgdXCSKfofTXVVVqxVhVicPrvKVLJokeLDVdqttdxlPuorjTcPSQiAjknJORqOtPnYwJmprmcEZMGbTzsYUXwAPHJELpgkOntePEwzSLVVrQwvWJjFzODXwNEEwHVTkkFCSy');
        count_9 = objectStore_4336.count(KeyRange_40);
    }
    catch (e){
    }

    var add_4 = objectStore_4336.add({f0_t: '<array>', f1_b: '<object>', f2_s: '<number>', f3_z: '<number>', f4_c: '<object>', f5_w: '<boolean>', f6_f: '<null>', f7_t: '<null>', f8_s: '<object>', f9_v: '<null>'}, 'TPiByZizgWTkuZlpLFkUiPrFuXECFuzBleXnlkizyZjHvBkASdeBUgsZyNoeXpGOkvHHihbjMrMkkoTSACIELlSbrNLUfuIzeydsoKJByNSZTzcsLDXORFvPWbbATjeyimZGVogTESgdhsatgMCpBHTBQsJzDRZuFpFZEnscwyZLwgTQdyqYHxNKTKbkQUusiYBzqrctbUYvKYwhDanonjmIYJXenAYQCMQxeYBoUQUZmeYScJzPuzzcpKYhekacUJChVfvShFVtIHyrdwvMbFICoSvxYueGHXTGwvXyowusYLGkpVoACasEwfAIcsSjlpasqSxKehbggFMHYXFySFmaoRsaFeMCJBPgaCmXWgsDueBsSQmncHyPOlyhWtGYkAapbFzfSqQmjTkoezCZBbmFkQBlRfCaGDUdKBFmkRvFrkRMliHiunAANIGZfCApOCMuFYPgTNUVkKcLAUFmPyQQQQRWvlVewwSoyZBLqOJWIynbNlbqUyBpuVjJQIjEfJKjQrqYrtBekRzjiRiodMNrmDtCBgMJYooMYZQAhdaAXPOMvBSUjqtoNWodgPMjweiTLZwBUCrVcRFyDYBsWbiTKShClyRiJDUGuRGjkvqahwCjUYdjzrZYjEOuBlxSOdxfYfQwqjQlQrZcjzHeeZNXRfDsdzYvrpHryBHJkiEsFsVSoZHsYlHfOUnbBizteheClUwnkdDLkENTSSirlHuttZjWvlBYfhqKWznIExvxmlBcHhbbZpTHAadjjhovSiZhhVxJRKUkasxTEijPYtOIZZgvMIuejziSUGYvelumkoXAYgbAEmhFARNGHopRMfMHqVxbIOFcdMQNDaLQQOkAOjYVnkBjiMHrcYQzbSufgwgJYcZVTFjvtJCmqtjMoBlUibZeRxvmkEYoIr');
    var count_10;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('TPiByZizgWTkuZlpLFkUiPrFuXECFuzBleXnlkizyZjHvBkASdeBUgsZyNoeXpGOkvHHihbjMrMkkoTSACIELlSbrNLUfuIzeydsoKJByNSZTzcsLDXORFvPWbbATjeyimZGVogTESgdhsatgMCpBHTBQsJzDRZuFpFZEnscwyZLwgTQdyqYHxNKTKbkQUusiYBzqrctbUYvKYwhDanonjmIYJXenAYQCMQxeYBoUQUZmeYScJzPuzzcpKYhekacUJChVfvShFVtIHyrdwvMbFICoSvxYueGHXTGwvXyowusYLGkpVoACasEwfAIcsSjlpasqSxKehbggFMHYXFySFmaoRsaFeMCJBPgaCmXWgsDueBsSQmncHyPOlyhWtGYkAapbFzfSqQmjTkoezCZBbmFkQBlRfCaGDUdKBFmkRvFrkRMliHiunAANIGZfCApOCMuFYPgTNUVkKcLAUFmPyQQQQRWvlVewwSoyZBLqOJWIynbNlbqUyBpuVjJQIjEfJKjQrqYrtBekRzjiRiodMNrmDtCBgMJYooMYZQAhdaAXPOMvBSUjqtoNWodgPMjweiTLZwBUCrVcRFyDYBsWbiTKShClyRiJDUGuRGjkvqahwCjUYdjzrZYjEOuBlxSOdxfYfQwqjQlQrZcjzHeeZNXRfDsdzYvrpHryBHJkiEsFsVSoZHsYlHfOUnbBizteheClUwnkdDLkENTSSirlHuttZjWvlBYfhqKWznIExvxmlBcHhbbZpTHAadjjhovSiZhhVxJRKUkasxTEijPYtOIZZgvMIuejziSUGYvelumkoXAYgbAEmhFARNGHopRMfMHqVxbIOFcdMQNDaLQQOkAOjYVnkBjiMHrcYQzbSufgwgJYcZVTFjvtJCmqtjMoBlUibZeRxvmkEYoIr', true);
        count_10 = objectStore_4336.count(KeyRange_42);
    }
    catch (e){
    }

    var clear_3 = objectStore_4336.clear();
    var add_5 = objectStore_4336.add({f0_g: '<array>', f1_a: '<object>', f2_q: '<array>', f3_f: '<boolean>', f4_m: '<null>', f5_n: '<object>'}, 'djocYpWcYApVivKVImyCkPBIOFaHmcOCzOzuPijeBYBbZskXCjwHRcuAftmwTTKZqLVyyiUGMqmCHIdPCdmqGtQIczbnQOdBMfesXkCQopoHPiybgcMtqcgawzGcWnejUCYMPYSFroWamcsymKXhMwghngmbEnnxcXLqRFnjYvwIhtdKcTnejDzVsKPXMNNexesNGgtXhKKLdElkSBxhSRBnmpxsraLFMqrDzefYofwBuozNxdBHHHKBLnnNCACdxcgHAcFsiWBWCyvueyegPHaYtzagqsnXvLVSvgfeXCQIQsAWHqPaCYbExgthRMuUbApHWCHWQfPwBafspWzLzIIROnMmHOVQuTUmPudYsivxArFWCSDnYIQHjmwjZRdfFZOfICoBJbSUvpVhZIoQKivLAONJOemvQVnHVxBGjQQQghHlEoxlnxBokjnRJElzhCDlKSBIqwcOitlihjWbEpraFisbNBZzSUsiclgHBxsbVpLMQnCNcMUmDyliXigvnxKSLtHynMBaVqUQlOOhkCUegNhdJcPAoGDiDVvyAFVUDPArUXQXJaZUUJrMgBcfalHczIBoWrrztqsKCJbXibWtcPPMxcxoDYSvvqlutAvbJcVIwlvSXdAUFVuTNBYVPurWSJjXfKGOZnrrqEssjwNghCdCIJoxCsEWcsBmuOqKKfRJJkNykduDYsJYZhBFknEbViSFpxKdastOiLlFNWgwdEwJaOLQPnHsqayHEWhuOIzxhXoxPZWYdxLOVDimlVopkjycDnljaxIDqumaluhBhRcLADePjFPXzRTPNfgrhleGuXKgAvIJbXmeqHygZ');
    var getAllKeys_6 = objectStore_4336.getAllKeys();
    txn_6537.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6537.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6537.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6538 = db.transaction(['objectStore_4335'], 'readwrite', {durability:"default"})
    var objectStore_4335 = txn_6538.objectStore('objectStore_4335');
    var get_7;
    try{
        KeyRange_44 = IDBKeyRange.bound('vQTCCucxJflFCkmtZbBhtXgfMwGwcjvWvYPVncdIMUstYglPyczuCEjkmECpkhmMpwfFgRavQNcvWSntOwEtmqjJZdqLEpEpkSPIlAWBVCXaMoruCsudW', 'vQTCCucxJflFCkmtZbBhtXgfMwGwcjvWvYPVncdIMUstYglPyczuCEjkmECpkhmMpwfFgRavQNcvWSntOwEtmqjJZdqLEpEpkSPIlAWBVCXaMoruCsudW', true, false);
        get_7 = objectStore_4335.get(KeyRange_44);
    }
    catch (e){
    }

    var add_6 = objectStore_4335.add({f0_r: '<number>', f1_q: '<boolean>', f2_k: '<object>', f3_z: '<object>'}, 'ehRoRDoZyJVYNOAhqQbmnfsSqoanbveNnbUhETHBxvcsGWFAateWNwuEEuYpFXEzbTfhWlFPZVmIXoAQKGwpVRUeuBTNDZvUSWooQATZelARGMNGDTLijwqRCGJqGjeFOzDjIWeyqZBMbPwGcfAXAJCTelVsfFvIXttDKTbnldqCIUiFBaeFvhxYUCGgQCLsLheUJTlHuxlPRjxbMiAMSpYDAJctVtMcoaBNomVTFeLsFCmfUxTBQorRVuuCwcttkHsxFFvXXrqNaKjEQwsrqXwNRPzgrtBjnhZucqcrhpXNUVjuTexMcoAkHGziSyEjBHJyQdXowkYeynmGDqjjZDWcxSlkERsuqSVehCGoEygXMcsbiXRWWOsSoasmryVTfKsfUZZdgTGrpPwGjYvoeMyPIcFbNCmFUQdEKlRLpCIXfjZ');
    var add_7 = objectStore_4335.add({f0_a: '<boolean>', f1_v: '<string>', f2_v: '<null>', f3_j: '<boolean>', f4_a: '<number>'}, 'wkcvJIZLAwazzotOnOORAyMmzNGQBhxIjUxnXBgQOITaztfbKafJfyWChjjQlIkQmVgnEvpLdTEUNkLAxIJZKbbSoglBsCcWQGdBEqcNVuSfsThrSJgyTbdfwcjPbiLCPPupMctacWqJvFaFzgKcPjKIAsmsJdtsdQjSQeMNEPqvLQMEchcyjIfdmggraXPDTZRulQvgMDaydkdWFUtIRvhEeExEJLotMoqgwMLMhHzjMgBKXDRnxDPcYPPetdrLdYsZeCiKfXFZAuklRpsIXfzybiJXpTMAUSEdmZMvXpQJFwlvbHIHfSxOUNrnFekJYHEAHgzqoxkizznRkOafwGvMxOjXAbPWCpnuOcZjNcbSiSSQXTgdUaWbImeQtLzyVqCJUdwvDAKpXnsSnZNyZFiHlNHvdzCAMimJpqkWhHMtLSSotoxpfSfIeecjIRiCbHSJnpEpxzyXVoTwskRkpQocDxoZggmISDUJNwoLfVQSWZUWpzzLwUhClVBnpZUmIJmcSJWxsCQdtRjNPEwJzXmboaQCgQoWvITzcudnHfFLQwSAiTnJWjHnoURrNbhP');
    var count_11 = objectStore_4335.count();
    txn_6538.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6538.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6538.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6539 = db.transaction(['objectStore_4336', 'objectStore_4335'], 'readwrite', {durability:"default"})
    var objectStore_4336 = txn_6539.objectStore('objectStore_4336');
    var getAllKeys_7;
    try{
        KeyRange_46 = IDBKeyRange.only('tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI');
        getAllKeys_7 = objectStore_4336.getAllKeys(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('efLLBZqVJBEtKBGsMgtIAYteepxYhYNspHXWbLaTHmBuLgXsqEfNWAXFubPgEfCFvcFQzcfKhYSAPUkFBUOXPRrdjhzSqzEukKOUXdoJYaskdalTaqxYjcqpuXDoqkRBhwkUSuOrPodgPwwWBKqPTPqafSHcICfIUetyYNEeneOMXCbYPmwyAaoVugmwZUTeqvMyvvDPMEfpFKlMlfzIkshgCsfsRnzpdGpUNHWEkKiQawSqbEVvZAgtkeOBZEClgUNjNYCWPnZrTFHWuHxUgQZafSoLClEFVugvTRsHsxvaWiemjxiQAEsAnTMXRwOFRQODxAqiTL');
        getAllKeys_7 = objectStore_4336.getAllKeys(KeyRange_47);
    }

    var clear_4 = objectStore_4336.clear();
    var put_2 = objectStore_4336.put({f0_d: '<null>', f1_o: '<string>', f2_k: '<object>', f3_d: '<boolean>', f4_c: '<null>', f5_g: '<array>', f6_w: '<array>', f7_g: '<array>'}, 'exWgJWqqXIsbRFyCNNZZzhWSRkEklXydMBuMpcVGzRBMRbjXsLtDIfpcAGdwQburQWeRQcfZL');
    var put_3 = objectStore_4336.put({f0_d: '<string>', f1_b: '<string>', f2_u: '<string>', f3_n: '<object>', f4_d: '<string>'}, 'xVfCEpgPsGeDUkxmGWoqxiqUjAwnaZSckFhihhnkjyITAeskOXoHuhrWndBJFmvNtstUBcaexKGPptCCeGFoBbTJuwnLszPOdcGOyZbKisJCkYDXXkwXOPoBeDyGyjLZDvxAfaOdbcXXCXIcybOyGAWeYOhjLDaRrvaBXsPlCoWUbFjLjLAxolLYMdRDAuajcoOXLWYFYjkcvDYyWnYHwgAJtBhnsMdOFDyxbnbKnHflQkoqWlCaOikAdvoKPnzhTFdiDHQOVGnFExknKakpxFJvUWDzfGeokorIVtWBWPeOcHLaAFReqZCseslDGlarEkwCYUMeSGAohomYcllLdEGslFrikZyeqauUwBxbTAgpyBoXgWkSASOqRJfVwFpzbJpAFCHIuDoYaKhnTNWdcodbYysFpWStatwHJmVcwLbSVknAktZwhCPrXfbDUyirbObZgUCtpIwQyTIrdvGuqkEHCatppgPrKukxHyxUZJWXoLzcRtcgNeWkCHcHZxnsleVrTduSbqLKRVZiaYRefIjcMaDKESFJyvpGkBrkuOmAeriqhrYmxgVFRqYvvocEMIzqeYcdsRvoAiYwiJUKjZcQieQvhziVuRPoLBGyzFLNpEoupRVpKmKXxVaZNltDtMCcSStcIBhsnEPLxdEvVAxZtJhJeCokmcbZHdbJSxfwqWSlRLgQDykVPCjjOhoJRhvaHymVBjAQkpqCTEbkHniGdwCUYxKOMwXbzhkqmyHHsbSHaTLKFysUjGQlrDrSLVtiTaFKZIefbAmVCDukQEdaCVfVuGEgkJLLbwLIyCUGRpKQRgLHHQmqDZzJcziHIaxiMPrFoHfhqdAuDRvrVMOmVPGJFDPajAaBdodCaucdPt');
    var count_12;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('TPiByZizgWTkuZlpLFkUiPrFuXECFuzBleXnlkizyZjHvBkASdeBUgsZyNoeXpGOkvHHihbjMrMkkoTSACIELlSbrNLUfuIzeydsoKJByNSZTzcsLDXORFvPWbbATjeyimZGVogTESgdhsatgMCpBHTBQsJzDRZuFpFZEnscwyZLwgTQdyqYHxNKTKbkQUusiYBzqrctbUYvKYwhDanonjmIYJXenAYQCMQxeYBoUQUZmeYScJzPuzzcpKYhekacUJChVfvShFVtIHyrdwvMbFICoSvxYueGHXTGwvXyowusYLGkpVoACasEwfAIcsSjlpasqSxKehbggFMHYXFySFmaoRsaFeMCJBPgaCmXWgsDueBsSQmncHyPOlyhWtGYkAapbFzfSqQmjTkoezCZBbmFkQBlRfCaGDUdKBFmkRvFrkRMliHiunAANIGZfCApOCMuFYPgTNUVkKcLAUFmPyQQQQRWvlVewwSoyZBLqOJWIynbNlbqUyBpuVjJQIjEfJKjQrqYrtBekRzjiRiodMNrmDtCBgMJYooMYZQAhdaAXPOMvBSUjqtoNWodgPMjweiTLZwBUCrVcRFyDYBsWbiTKShClyRiJDUGuRGjkvqahwCjUYdjzrZYjEOuBlxSOdxfYfQwqjQlQrZcjzHeeZNXRfDsdzYvrpHryBHJkiEsFsVSoZHsYlHfOUnbBizteheClUwnkdDLkENTSSirlHuttZjWvlBYfhqKWznIExvxmlBcHhbbZpTHAadjjhovSiZhhVxJRKUkasxTEijPYtOIZZgvMIuejziSUGYvelumkoXAYgbAEmhFARNGHopRMfMHqVxbIOFcdMQNDaLQQOkAOjYVnkBjiMHrcYQzbSufgwgJYcZVTFjvtJCmqtjMoBlUibZeRxvmkEYoIr', false);
        count_12 = objectStore_4336.count(KeyRange_48);
    }
    catch (e){
    }

    var add_8 = objectStore_4336.add({f0_y: '<number>', f1_a: '<null>', f2_r: '<string>', f3_i: '<number>', f4_w: '<boolean>'}, 'RyXRSZBoWPYUSUHwtVYSRQRREjcPZZKtHjLKirjaVVfLtFfQsiJNNBqGwjhhBSajQnNnNoLKUBPsWkyDnpGeiECpFNYkGGUdQzlFAtDTybLOIsTvorPoFOWQFowWQlzuNVbMTkajrJYAydxyemaGUMQNjhKzRXYahHqaHSDYGnnerFmLeuxjzsUyWDwEeXdXrhYHSfbUJWJWSWLwuMYDNFxASsmlqQkIsxmgcVffapYgSkdZqlhVEKeXiASTGxLQCzkbYJyOernNRKnWthtdZASTMemIvCSPSioZzsdjMTRPbldWILWyDhpGVVDiAhgQJIGkfEsoHPcnOjqeOVogjRoMAwbhepOVYCVNoNBXCzlsDiPEsdoLsgDkgVhhvVgWFqzutyCbWeearbPiOIFdkVRbhGNCEcwnjVDeoLrefvPxtVhaRaMbeFqWhYJuHETlOYi');
    var getAllKeys_8;
    try{
        KeyRange_50 = IDBKeyRange.bound('tlFQLlBsqPUchEGCOXTdSLlEsDhSwJQGUGKjuWOkvSVARnpSgCHMDuCifxIdsBFoTbiWUvOvWWEvGjBKfjHMBKuNwingJGaiXadjYKMZLSDNqXjQIPjjNZpnDzdIYihqPOaxBxZSYNMLqRoksQzDcTOcaSVqDnSnNZXeVAxwvOnltTXXlhbTgQqzLFPufIyNNutpmaDyDLRMEGXfZRTYTGyJqSJnyfpRVLORHXsIhleBKYLlixELaJbUBNaEFkEerIYbMjfNdjHfRFVPQNPnPdAGjwxIHvOCjwUPVpgYoDOXvPigMGxhWbrizbtnVVhGumtSDRUIUCKOSeUgOHelbgjEzZDrOghNCODuiYTHezCdqgdeCXqRrxAPZRtXFKjkPtRHvlgAI', 'xVfCEpgPsGeDUkxmGWoqxiqUjAwnaZSckFhihhnkjyITAeskOXoHuhrWndBJFmvNtstUBcaexKGPptCCeGFoBbTJuwnLszPOdcGOyZbKisJCkYDXXkwXOPoBeDyGyjLZDvxAfaOdbcXXCXIcybOyGAWeYOhjLDaRrvaBXsPlCoWUbFjLjLAxolLYMdRDAuajcoOXLWYFYjkcvDYyWnYHwgAJtBhnsMdOFDyxbnbKnHflQkoqWlCaOikAdvoKPnzhTFdiDHQOVGnFExknKakpxFJvUWDzfGeokorIVtWBWPeOcHLaAFReqZCseslDGlarEkwCYUMeSGAohomYcllLdEGslFrikZyeqauUwBxbTAgpyBoXgWkSASOqRJfVwFpzbJpAFCHIuDoYaKhnTNWdcodbYysFpWStatwHJmVcwLbSVknAktZwhCPrXfbDUyirbObZgUCtpIwQyTIrdvGuqkEHCatppgPrKukxHyxUZJWXoLzcRtcgNeWkCHcHZxnsleVrTduSbqLKRVZiaYRefIjcMaDKESFJyvpGkBrkuOmAeriqhrYmxgVFRqYvvocEMIzqeYcdsRvoAiYwiJUKjZcQieQvhziVuRPoLBGyzFLNpEoupRVpKmKXxVaZNltDtMCcSStcIBhsnEPLxdEvVAxZtJhJeCokmcbZHdbJSxfwqWSlRLgQDykVPCjjOhoJRhvaHymVBjAQkpqCTEbkHniGdwCUYxKOMwXbzhkqmyHHsbSHaTLKFysUjGQlrDrSLVtiTaFKZIefbAmVCDukQEdaCVfVuGEgkJLLbwLIyCUGRpKQRgLHHQmqDZzJcziHIaxiMPrFoHfhqdAuDRvrVMOmVPGJFDPajAaBdodCaucdPt', true, false);
        getAllKeys_8 = objectStore_4336.getAllKeys(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('djocYpWcYApVivKVImyCkPBIOFaHmcOCzOzuPijeBYBbZskXCjwHRcuAftmwTTKZqLVyyiUGMqmCHIdPCdmqGtQIczbnQOdBMfesXkCQopoHPiybgcMtqcgawzGcWnejUCYMPYSFroWamcsymKXhMwghngmbEnnxcXLqRFnjYvwIhtdKcTnejDzVsKPXMNNexesNGgtXhKKLdElkSBxhSRBnmpxsraLFMqrDzefYofwBuozNxdBHHHKBLnnNCACdxcgHAcFsiWBWCyvueyegPHaYtzagqsnXvLVSvgfeXCQIQsAWHqPaCYbExgthRMuUbApHWCHWQfPwBafspWzLzIIROnMmHOVQuTUmPudYsivxArFWCSDnYIQHjmwjZRdfFZOfICoBJbSUvpVhZIoQKivLAONJOemvQVnHVxBGjQQQghHlEoxlnxBokjnRJElzhCDlKSBIqwcOitlihjWbEpraFisbNBZzSUsiclgHBxsbVpLMQnCNcMUmDyliXigvnxKSLtHynMBaVqUQlOOhkCUegNhdJcPAoGDiDVvyAFVUDPArUXQXJaZUUJrMgBcfalHczIBoWrrztqsKCJbXibWtcPPMxcxoDYSvvqlutAvbJcVIwlvSXdAUFVuTNBYVPurWSJjXfKGOZnrrqEssjwNghCdCIJoxCsEWcsBmuOqKKfRJJkNykduDYsJYZhBFknEbViSFpxKdastOiLlFNWgwdEwJaOLQPnHsqayHEWhuOIzxhXoxPZWYdxLOVDimlVopkjycDnljaxIDqumaluhBhRcLADePjFPXzRTPNfgrhleGuXKgAvIJbXmeqHygZ');
        getAllKeys_8 = objectStore_4336.getAllKeys(KeyRange_51);
    }

    var add_9 = objectStore_4336.add({f0_r: '<number>', f1_h: '<number>', f2_w: '<number>', f3_k: '<array>', f4_f: '<object>', f5_f: '<array>', f6_e: '<null>'}, 'gQmkTYcnCqiXnzYTwTmwzJPDObEBxTSMXVEmmbdlgKPEeaYVQUyTbIkFMUXgfMsLZSGmYzjEpQlfYnjjiebyLQAcHsdltNjraNeLUQnFTkCQFuWIzGUjtfIwVUjDzcsfluRNmqIUtbCWtTYlOGSqKvmLsMelIxoDkYYkKKXXsudkLAPWyurQWvJNLUCMgLdSpXYeIRHzdaaePaVTGHUQZSfMbbVecTxekGAgptgZEfFmMiueqLkFRriiTAwjEXLENKEqTABlyiorhzbhWlpUlQyyBbIwOaOYHfUHVJkKJPUiPGUDyBCexdzgelmFoXlGfTSTZuLyLEbbBTWedgByOMlEMbMpYCRzMzLOGngPeEUBUbgzouzTfhFvCCpsGGSkSzyeHtpkcYlEaNqrSNUxHvzyOhpAAYkMkmYhUpjHqxhjBtgnFZUBsDhGjNDOuzmSsoOXkVPjndaXMibOEMdGxhprtDHddfGfYRYIBfPmpSqBTcyPgPqtpZcVTMZGYzoWAaeOfhcJLgJhBcsJtgHEZemOyQcoGYXEIgLqahSXsuPHHJbkFzGXTJkZsflnhNyBqoKJGpnEAdHPxyRDkluJYdiEICsvhhpyDgyivSCjPbKwkvPbeBsXYrJbCnFbBTbdwYPlxslAjyCExbaDlpXvxHClGRLlXcBskxh');
    var getAll_3 = objectStore_4336.getAll();
    var clear_5 = objectStore_4336.clear();
    txn_6539.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6539.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6539.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3134')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};