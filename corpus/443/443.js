let db;
const openRequest = window.indexedDB.open('str_8037', 295842655905078)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2619', {keypath: 'nnPDHastkyPeojUfgCXTVrGwnGPsZJAwfglOkwonObJXHYjqoSyiujSqaOvnRMccMrWyuXcXKKOuQzNWFOlozIMuKxWhWDIEFCgrRsdTqrzUpRvXGAVYETYLNGybdqoqDHPsuEvzItyOeTKbGSGyVPoBdBkYJeFyofCZqVGaNpXxHFaLhyVswqQMacuAZSkFcXSVwVyeZBUrxNpPAIRNNCPfnavAKhJBhAuJnBAFtUlSFxdPMXgMEjMyxardEEGovGbeTdSILjyRsDLvcAzWfuSqsQTMkFpgDmyTpzypSrWThWMcUfXzZFwwPZWpXNDtbfJBroktqvwTwOMDbHHUgcayxoJWCUoCjGodCsCAlSvyjmLQpaairzOzYJWVHAismeadiTXKcYxIXBtEOWpFaRrUHAmAnrZMRePpElxAdGjJyuHDxDXsMEXWyoeAYBphZrbuvSjBXrYAkbxCPHqYGfgaOpYuzRndKudxbsggQpDPWMuCVsdMcvJaNDAQhXTNUPJFrYEzGMDljxwOsmUQLprYJAFfJYZZCAjnkAFnhKLWIOsWuMxLLBXlIPrAVRowwpPzIHErUbOYfedjwFIpIApJXCVsoKTRWdxOwnnQcBEUgrPSjRKtivGxUQBaJZPhmMuRHTFzleGOFqYcMICwzvjhWVYMAbTRnKLEBQEzwkjuKhPyiMobGzzBiZiOjEPABKHOjBZAmmRMgvfXgvALqvDsDhdBtPUoJDdTjuQKjjMuCDfjybStmWhJtmEePGxxIpouhwXBMojPuiHumVgRZMeQhDJpwBLUElNPsqCQNnpReFfWyBOxBogySOgFIwfdLzCVPOGcfGMfzp'});
    var put_0 = objectStore_0.put({f0_u: '<boolean>', f1_g: '<object>', f2_g: '<string>', f3_e: '<array>', f4_v: '<null>', f5_w: '<string>', f6_o: '<string>', f7_d: '<string>', f8_u: '<array>', f9_u: '<boolean>', f10_f: '<array>', f11_b: '<number>', f12_f: '<boolean>', f13_z: '<string>', f14_r: '<null>', f15_l: '<string>', f16_w: '<string>', f17_p: '<object>', f18_i: '<string>', f19_a: '<boolean>', f20_o: '<null>', f21_g: '<object>', f22_x: '<number>', f23_n: '<object>', f24_i: '<string>', f25_z: '<null>', f26_x: '<array>', f27_l: '<number>', f28_p: '<boolean>', f29_w: '<number>', f30_q: '<number>', f31_q: '<number>', f32_y: '<object>', f33_m: '<string>', f34_v: '<string>', f35_q: '<array>', f36_u: '<array>', f37_l: '<object>', f38_o: '<object>', f39_e: '<number>', f40_x: '<number>', f41_a: '<array>', f42_d: '<null>', f43_j: '<array>', f44_a: '<array>', f45_w: '<array>', f46_z: '<null>', f47_t: '<boolean>', f48_j: '<boolean>', f49_r: '<string>', f50_i: '<object>', f51_q: '<number>', f52_e: '<array>', f53_t: '<number>', f54_p: '<string>', f55_a: '<string>', f56_v: '<boolean>', f57_s: '<number>', f58_i: '<array>', f59_l: '<boolean>', f60_c: '<array>', f61_w: '<null>', f62_s: '<number>', f63_m: '<number>', f64_a: '<null>', f65_g: '<string>', f66_a: '<array>', f67_r: '<null>', f68_w: '<boolean>', f69_s: '<string>', f70_e: '<string>', f71_k: '<number>', f72_o: '<string>', f73_r: '<number>', f74_b: '<object>', f75_r: '<number>', f76_b: '<string>', f77_h: '<boolean>', f78_b: '<null>', f79_t: '<number>', f80_h: '<boolean>', f81_v: '<array>', f82_w: '<null>', f83_k: '<boolean>', f84_j: '<array>', f85_d: '<string>', f86_s: '<object>', f87_a: '<boolean>', f88_x: '<object>', f89_f: '<null>', f90_p: '<string>', f91_a: '<null>', f92_z: '<object>', f93_i: '<boolean>', f94_t: '<object>', f95_c: '<object>'}, 'IcRYqlvQkwVzefhDNSlaILzqMZbrLXzIAixAKhNzMTfOeTcKZlfqtWISYRxdSfrPxYAGzQvqzvNpkEReikwBKAIcvigcAwPsUYRThtXXrauwPOvnTYgisqmATCBaRUNiSSiMwVRMYoeGCQGfMNRAlsISYpfNrBAcwaGGaVftpyaxWvDdnnEceTLJTFhWbrkUaoUogfvkMWuullGypPoWWEIuEnHxiliYLYVjCgTsBqbJXdxhkluBLgmnsiTmwWYYAGWmAyECfDzRIxMBGDiyasMbdkeUwgUOICzixALCobeHgJGiXYZEkMWvvNlnVsguzIOOAmweMTUopbarmneonuZQSwRMmanDLHkwnkcwSBCfnhfvYFFNIlcwVnuABHmMcvppdPIeZKRpmuRIWCZyesjOGNVZhwSyLwErmXgGqXfjPNtulOVesnuvDZJtkvLAzxQyilbEYQwqCPBBtHSCAPYIzzXivGNaCKrgcDKrXWfVizlpqpwpEdZKybUzkLdZgGCqbMEZGHGsElScVfcEugNGlzdECLeziIcBrlNzhCQmrzcuqxySTermZeQLGTxBaEDoWZBAazSKQjdedChFIrIlXDWPXFlUekREmzSjVdxHrDBZTlPnHgPblONctAFbuNVXYhsZyELEfhmTpDdmtGkzjlSxkRXPbPaQeLCQefNiHtgDKcWFcZnIjQcgNkWyjrzfTNlLXvUtUmpZeEDUAUbYtUhXFOTfeldsCNgrAGdDgQKxAkxSpUQlBMJTQVcjxFqkgoSqGnNWJgqRvIjQdDfBSvcaCGOlWNpFbEwfcXBfvtdEWvoXZpmPuSwyHZBWBUmjEJoXiMZfRAMdMZYQwLMrBmQSaThFaYWElfsmuWLYKrtLsOnESvGrUpqoIvuXnSdZFCNmxdpaHJOLxUcUcqPGXuUrtyTgpXmGjsCDgWlRfQSUDTaQvqPSVDXMwpOJvfTItMBAVOykSPbgKozHMakdZI');
    var index_1723 = objectStore_0.createIndex('index_1723', 'test', {unique: true, multiEntry: true});
    var put_1 = objectStore_0.put({f0_t: '<boolean>', f1_e: '<string>', f2_l: '<number>', f3_o: '<null>', f4_n: '<null>', f5_f: '<null>', f6_q: '<boolean>', f7_t: '<array>'}, 'pQeiclCQuAmaRCDmulUKsuXZaTXJCmKuVsUedVHZELerxqDrlpnYCcLiDjsDaHjLyvOpHTsKaNMTbTDpNKnKuoooRKsIkHeVmDYqCeyyjrszgEXEgPjeAPfifxcfgKYQmJhXGABgPDFqGMjmshvhuZPoUlVjKHqOrpozlFtfgKoMuEINkKqbVyvohblYZESDSLHHDuzncPvCwgcPnloWPLBtmpyhKTugvguzHiuBRGHJGTpsLGFrwPoWMfMwigniDQoHPR');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('IcRYqlvQkwVzefhDNSlaILzqMZbrLXzIAixAKhNzMTfOeTcKZlfqtWISYRxdSfrPxYAGzQvqzvNpkEReikwBKAIcvigcAwPsUYRThtXXrauwPOvnTYgisqmATCBaRUNiSSiMwVRMYoeGCQGfMNRAlsISYpfNrBAcwaGGaVftpyaxWvDdnnEceTLJTFhWbrkUaoUogfvkMWuullGypPoWWEIuEnHxiliYLYVjCgTsBqbJXdxhkluBLgmnsiTmwWYYAGWmAyECfDzRIxMBGDiyasMbdkeUwgUOICzixALCobeHgJGiXYZEkMWvvNlnVsguzIOOAmweMTUopbarmneonuZQSwRMmanDLHkwnkcwSBCfnhfvYFFNIlcwVnuABHmMcvppdPIeZKRpmuRIWCZyesjOGNVZhwSyLwErmXgGqXfjPNtulOVesnuvDZJtkvLAzxQyilbEYQwqCPBBtHSCAPYIzzXivGNaCKrgcDKrXWfVizlpqpwpEdZKybUzkLdZgGCqbMEZGHGsElScVfcEugNGlzdECLeziIcBrlNzhCQmrzcuqxySTermZeQLGTxBaEDoWZBAazSKQjdedChFIrIlXDWPXFlUekREmzSjVdxHrDBZTlPnHgPblONctAFbuNVXYhsZyELEfhmTpDdmtGkzjlSxkRXPbPaQeLCQefNiHtgDKcWFcZnIjQcgNkWyjrzfTNlLXvUtUmpZeEDUAUbYtUhXFOTfeldsCNgrAGdDgQKxAkxSpUQlBMJTQVcjxFqkgoSqGnNWJgqRvIjQdDfBSvcaCGOlWNpFbEwfcXBfvtdEWvoXZpmPuSwyHZBWBUmjEJoXiMZfRAMdMZYQwLMrBmQSaThFaYWElfsmuWLYKrtLsOnESvGrUpqoIvuXnSdZFCNmxdpaHJOLxUcUcqPGXuUrtyTgpXmGjsCDgWlRfQSUDTaQvqPSVDXMwpOJvfTItMBAVOykSPbgKozHMakdZI', 'pQeiclCQuAmaRCDmulUKsuXZaTXJCmKuVsUedVHZELerxqDrlpnYCcLiDjsDaHjLyvOpHTsKaNMTbTDpNKnKuoooRKsIkHeVmDYqCeyyjrszgEXEgPjeAPfifxcfgKYQmJhXGABgPDFqGMjmshvhuZPoUlVjKHqOrpozlFtfgKoMuEINkKqbVyvohblYZESDSLHHDuzncPvCwgcPnloWPLBtmpyhKTugvguzHiuBRGHJGTpsLGFrwPoWMfMwigniDQoHPR', false, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_2620', {keypath: 'ljSlZoauPAOtfOzETgBqwDDyTFxNDdXMRptZITkALKKDqPTJqtpgNujUevKgafbBDneFNiHWqVFQDFEYWqddcIsqTwrPsRBDkZppCsrsqRcKOkVOKUVXNFqJLoyYSXkguvUNrQivxOzlVkZgeWMgeIMNSowAqtAWbUkJnJgxAwtnSObhDQUyJqJSFyFmwlQRShNBaJCpSGtWLWGurUIKXIPSCZGvnCQQIljkBLWaaIehUDsYGxhXemWwIlevxTXmBYdXhvlVQJCbqSPPWOBnTEARKNtrhQZEEEvYwtZnZvWSaPHoniLuTQxRbCRoXOiFgxWOrxMkyCcxiwDHjZUTNOThRUViclEzHTLZentYcieuMNIDrxdPhYcfegLlBryQjGMYOwpUHDkQeitCrvkOWGoUeEuDFRHUWgxloFFreyaTrqVWRZewtMrGxTAKdvgLNgbUBVCqzfcykvDSxJzukmcFQbALCEvmgaGesyLFWeHW', autoIncrement: false});
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.only('IcRYqlvQkwVzefhDNSlaILzqMZbrLXzIAixAKhNzMTfOeTcKZlfqtWISYRxdSfrPxYAGzQvqzvNpkEReikwBKAIcvigcAwPsUYRThtXXrauwPOvnTYgisqmATCBaRUNiSSiMwVRMYoeGCQGfMNRAlsISYpfNrBAcwaGGaVftpyaxWvDdnnEceTLJTFhWbrkUaoUogfvkMWuullGypPoWWEIuEnHxiliYLYVjCgTsBqbJXdxhkluBLgmnsiTmwWYYAGWmAyECfDzRIxMBGDiyasMbdkeUwgUOICzixALCobeHgJGiXYZEkMWvvNlnVsguzIOOAmweMTUopbarmneonuZQSwRMmanDLHkwnkcwSBCfnhfvYFFNIlcwVnuABHmMcvppdPIeZKRpmuRIWCZyesjOGNVZhwSyLwErmXgGqXfjPNtulOVesnuvDZJtkvLAzxQyilbEYQwqCPBBtHSCAPYIzzXivGNaCKrgcDKrXWfVizlpqpwpEdZKybUzkLdZgGCqbMEZGHGsElScVfcEugNGlzdECLeziIcBrlNzhCQmrzcuqxySTermZeQLGTxBaEDoWZBAazSKQjdedChFIrIlXDWPXFlUekREmzSjVdxHrDBZTlPnHgPblONctAFbuNVXYhsZyELEfhmTpDdmtGkzjlSxkRXPbPaQeLCQefNiHtgDKcWFcZnIjQcgNkWyjrzfTNlLXvUtUmpZeEDUAUbYtUhXFOTfeldsCNgrAGdDgQKxAkxSpUQlBMJTQVcjxFqkgoSqGnNWJgqRvIjQdDfBSvcaCGOlWNpFbEwfcXBfvtdEWvoXZpmPuSwyHZBWBUmjEJoXiMZfRAMdMZYQwLMrBmQSaThFaYWElfsmuWLYKrtLsOnESvGrUpqoIvuXnSdZFCNmxdpaHJOLxUcUcqPGXuUrtyTgpXmGjsCDgWlRfQSUDTaQvqPSVDXMwpOJvfTItMBAVOykSPbgKozHMakdZI');
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_1.clear();
    var count_0 = objectStore_0.count();
    objectStore_0.deleteIndex('index_1723')
    var index_1724 = objectStore_1.createIndex('index_1724', 'test', {unique: true, multiEntry: true});
    var clear_1 = objectStore_0.clear();
    var index_1725 = objectStore_1.createIndex('index_1725', 'test');
    var add_0 = objectStore_1.add({f0_d: '<string>', f1_b: '<array>', f2_d: '<number>', f3_j: '<array>'}, 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR');
    var count_1 = objectStore_1.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, false);
        get_1 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_2 = objectStore_1.clear();
    var clear_3 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_2621', {keypath: 'mxgYKFFpmFhmuBhVIpZhPLRfkNvVnuDoyGAvkKQrulKfqSHseXjoiUVHFwDPeOFZzHsBsokyHrKTIvkczzlNqdHswojBsbEixnAhznnpOQzsKPwsAaNHpCCmfdQRpTSoFwqzslIcgGCcoRlZXiLQEkjAGiJnNiDeDutoVCxvmneRwZTCADtsOjGemLrXEQUpRgySDtamsqChNqPSfYObDMQIJmCXOAkZbLUNmnetIkBpXhRRopkszBXSyZkdBdIPyttwwbnbPGHyIEHklnYFNTVpDmfecflwXZkICFlzcmaDPeLAkkkSinDuqOPnRHygYfAilwZbTWVelPBjIRHnmxveJqDhIMmOnhduOgnGQEqvYqbNDjrMeRFWqbvYtkazbTjzibGZqtMvOMLCYiCfsluFnvJRSQIPjNColwQijRTQDeEOwBcqvVIFNEkEOLKtOmhBXRZHHgwDgGGneuxyvmOYdMjLMhxdVnMJSXIRCDnhSUWEfmcJoYHKfpsotbyUUUCmOdZpiezGVVVjhmtlvRUXTSsCmulwtQwgsGlibQDcnGHCvsTHUswhGXkmTAgUSflfYnIb'});
    var objectStore_3 = db.createObjectStore('objectStore_2622', {keypath: 'hpCHolQGDGqFAsoLeFWLcYKQXXZlAwrdzNjCBsGhpExHhYeIblQGzPGZWaeMayNPQqFQFXppMDUiQjdmBZbhHiXgHnFocOWoxhBjyzrPMyIgxPbWafIkQMMaFjcsFoJKKlFBYHAssFaFBLPrpfPIsJnLjhzEDHrFUgcFdnbsEmQrZTwgGhXvnlIUzXcCfNNCItvFNwwUXEcYsclscHJGazxHyDcYDovTELwecCBNrTKzccyTKQhYpVzJMvfSkAsvBqnWJSOVRDVgPTQMoheUmdvAosPnSPZsqEEZGJDyeEvWWIHqROeYUAuFBBMmMxfIoGxRdVOwXyUZmxpjYwOdrBqPOUbpInOifbJrNOYzXQJdQKBbkPDDiLTCxlKjOztiBnVHLVLheDacJKEZJmEOXoRBjnRZcvxQbdkBjYYigZzrJGDiNvRivsKNATwSCaaYTXrmtIcuOOTHTwAFfXXEKWguLbsiWmsCbJfhk'});
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true, false);
        get_2 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_2623', {autoIncrement: false});
    var index_1726 = objectStore_2.createIndex('index_1726', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3920 = db.transaction(['objectStore_2620', 'objectStore_2619'], 'readonly', {durability:"default"})
    var objectStore_2620 = txn_3920.objectStore('objectStore_2620');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, false);
        count_2 = objectStore_2620.count(KeyRange_8);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2620.getAll();
    var getAll_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, false);
        getAll_1 = objectStore_2620.getAll(KeyRange_10, 2836303711);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR');
        getAll_1 = objectStore_2620.getAll(KeyRange_11);
    }

    var count_3 = objectStore_2620.count();
    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false);
        count_4 = objectStore_2620.count(KeyRange_12);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, true);
        count_5 = objectStore_2620.count(KeyRange_14);
    }
    catch (e){
    }

    var count_6 = objectStore_2620.count();
    txn_3920.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3920.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3920.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3921 = db.transaction(['objectStore_2620', 'objectStore_2621'], 'readonly', {durability:"relaxed"})
    var objectStore_2621 = txn_3921.objectStore('objectStore_2621');
    txn_3921.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3921.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3921.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3922 = db.transaction(['objectStore_2620'], 'readonly', {durability:"default"})
    var objectStore_2620 = txn_3922.objectStore('objectStore_2620');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true, false);
        get_3 = objectStore_2620.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true, false);
        get_4 = objectStore_2620.get(KeyRange_18);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true, true);
        count_7 = objectStore_2620.count(KeyRange_20);
    }
    catch (e){
    }

    var index_0 = objectStore_2620.index('index_1725');
    var count_8 = objectStore_2620.count();
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true);
        get_5 = objectStore_2620.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_24 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, true);
        getAllKeys_0 = objectStore_2620.getAllKeys(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR');
        getAllKeys_0 = objectStore_2620.getAllKeys(KeyRange_25);
    }

    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', true, false);
        get_6 = objectStore_2620.get(KeyRange_26);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_28 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, false);
        count_9 = objectStore_2620.count(KeyRange_28);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', 'nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR', false, true);
        getAll_2 = objectStore_2620.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('nPNbuGTOsWrsqXXzwRWbfxQUpirUUUZnwNpYuxYZnfouZfrXrHJZfzgheKbvlEHANDTAXfKGzfYfCQGysktgiIkfDDvIkMqJpJfkKJbBIXoiieihGdGHUYgFdDdjNyNQrIFYLEhncYBxpjtgTYyDjBouQHZQClHTzHTmApYIickR');
        getAll_2 = objectStore_2620.getAll(KeyRange_31);
    }

    txn_3922.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3922.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3922.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3923 = db.transaction(['objectStore_2622', 'objectStore_2621'], 'readwrite', {durability:"relaxed"})
    var objectStore_2622 = txn_3923.objectStore('objectStore_2622');
    var clear_4 = objectStore_2622.clear();
    var add_1 = objectStore_2622.add({f0_m: '<null>'}, 'AoQhopNMPmKGGSZKABhpgmoWOidfGS');
    var put_2 = objectStore_2622.put({f0_i: '<number>', f1_e: '<boolean>', f2_v: '<object>', f3_c: '<string>'}, 'MJioidmwYBuzofKvhbVglnTLyKTgSXyBhPRQGSCnpEzqJZjdYvsgtlUKAFPyuzJAiJNoHDnpetFIOSBTCiSgafhzdltLjEZBKdmnilAbdyIXHOyinHViOZYBnPVyJQJcPvpOJfCPIvYvWyoTluOGWGnarYendtqirdRebWPnkaCOyUskDjdmYxaNNcNCeTtyZmXVIiLgswIXxvApAGlWxszWBkfdoGmtDBLpClIJwcvDvyZAgOrdIknTbJOHIuMkNTKCLsSqAFbRuPSmdQHuLKmHFTTDzfHkyutOfLYOdFhPTvmSWMjrzzSrlSGVzusOGPPjLFxLFcjHRAWKfeyaMYVjKDaSitVFeRcibkKnMnypTDIAYYXkiQVATgEMHvCRClMfEXqIWOzRkDHWKaevoUkUVUJSsYiJOLXaefdoPTVnKDWCIJjzzurBcKNGGfLHZlcujPKKaWSrndJJJpFTKdvNFWFrQWkLhHbCsPBErAnLonKQAbSxpHHLhPDmLDUpVFSbAApCTgZMSUrYSkGeAkUNEwljZkdqrpAjvkjNOgqwbNBeEURGMLkqOSRjKYcNaWBJwtgRWkuAziQWWX');
    var clear_5 = objectStore_2622.clear();
    var get_7;
    try{
        KeyRange_32 = IDBKeyRange.bound('MJioidmwYBuzofKvhbVglnTLyKTgSXyBhPRQGSCnpEzqJZjdYvsgtlUKAFPyuzJAiJNoHDnpetFIOSBTCiSgafhzdltLjEZBKdmnilAbdyIXHOyinHViOZYBnPVyJQJcPvpOJfCPIvYvWyoTluOGWGnarYendtqirdRebWPnkaCOyUskDjdmYxaNNcNCeTtyZmXVIiLgswIXxvApAGlWxszWBkfdoGmtDBLpClIJwcvDvyZAgOrdIknTbJOHIuMkNTKCLsSqAFbRuPSmdQHuLKmHFTTDzfHkyutOfLYOdFhPTvmSWMjrzzSrlSGVzusOGPPjLFxLFcjHRAWKfeyaMYVjKDaSitVFeRcibkKnMnypTDIAYYXkiQVATgEMHvCRClMfEXqIWOzRkDHWKaevoUkUVUJSsYiJOLXaefdoPTVnKDWCIJjzzurBcKNGGfLHZlcujPKKaWSrndJJJpFTKdvNFWFrQWkLhHbCsPBErAnLonKQAbSxpHHLhPDmLDUpVFSbAApCTgZMSUrYSkGeAkUNEwljZkdqrpAjvkjNOgqwbNBeEURGMLkqOSRjKYcNaWBJwtgRWkuAziQWWX', 'MJioidmwYBuzofKvhbVglnTLyKTgSXyBhPRQGSCnpEzqJZjdYvsgtlUKAFPyuzJAiJNoHDnpetFIOSBTCiSgafhzdltLjEZBKdmnilAbdyIXHOyinHViOZYBnPVyJQJcPvpOJfCPIvYvWyoTluOGWGnarYendtqirdRebWPnkaCOyUskDjdmYxaNNcNCeTtyZmXVIiLgswIXxvApAGlWxszWBkfdoGmtDBLpClIJwcvDvyZAgOrdIknTbJOHIuMkNTKCLsSqAFbRuPSmdQHuLKmHFTTDzfHkyutOfLYOdFhPTvmSWMjrzzSrlSGVzusOGPPjLFxLFcjHRAWKfeyaMYVjKDaSitVFeRcibkKnMnypTDIAYYXkiQVATgEMHvCRClMfEXqIWOzRkDHWKaevoUkUVUJSsYiJOLXaefdoPTVnKDWCIJjzzurBcKNGGfLHZlcujPKKaWSrndJJJpFTKdvNFWFrQWkLhHbCsPBErAnLonKQAbSxpHHLhPDmLDUpVFSbAApCTgZMSUrYSkGeAkUNEwljZkdqrpAjvkjNOgqwbNBeEURGMLkqOSRjKYcNaWBJwtgRWkuAziQWWX', true, true);
        get_7 = objectStore_2622.get(KeyRange_32);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('AoQhopNMPmKGGSZKABhpgmoWOidfGS', true);
        get_8 = objectStore_2622.get(KeyRange_34);
    }
    catch (e){
    }

    txn_3923.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3923.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3923.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3924 = db.transaction(['objectStore_2619', 'objectStore_2621'], 'readonly', {durability:"strict"})
    var objectStore_2621 = txn_3924.objectStore('objectStore_2621');
    txn_3924.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3924.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3924.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3340')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};