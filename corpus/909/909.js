let db;
const openRequest = window.indexedDB.open('str_9216', 2322119484266832)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5386');
    var add_0 = objectStore_0.add({f0_l: '<number>', f1_v: '<string>', f2_p: '<array>', f3_z: '<boolean>', f4_w: '<null>', f5_f: '<boolean>', f6_v: '<object>', f7_e: '<number>', f8_q: '<object>', f9_k: '<object>'}, 'EyrhYikntQQkmvkBsZGbFmyXAndAGDrjoMjcqCySVKLAcKvJnMDORyPYztlAuUUMGWTQdMVLwsvaDmrkfwQdMbePfNkYzfdhVcbZuiUvFzulJWSLkofHsYhqwiESLpElpWDjHPWAXrMILDUdKrdPmybwDisSLjnqcOVrAlwIQTjwltGRGVnXJmMrkIpwdcGwQKsQwChDwaginNJQUiphDUclaKQUVcACJWqoTroFyFOljUTFsArUoOEFjXVhCqbMYdZuJrNBclsuRwAPAemfFofzYPCAIvdnomwrSqaaCizRbNjMHuolUj');
    var objectStore_1 = db.createObjectStore('objectStore_5387');
    var clear_0 = objectStore_0.clear();
    var add_1 = objectStore_1.add({f0_a: '<string>', f1_e: '<null>', f2_b: '<array>', f3_g: '<null>', f4_i: '<object>', f5_o: '<array>', f6_u: '<array>'}, 'bVvdtjUxlgwrQcjUGiSFHGLZtotFdnhjvmhCBDPhJOFegwblNKXPIMOMwITOBrWLZhrunZNcisAGuyZeuYEOKjslXrtjolJVXryjJUuhmmvhxrihoYuMhTUSUUkorzoLXZunpgSHKGfbKsFFKUqbObNDknrzpmTGyeFBevYwGZpCmETeSwwQXGgzuQzvWCLCQBlmBMivXSOIapuoEgCYGyBUwJXWjcpOFnROpdayYtEfAmQCDLRiGUKBEqvPjBsoIdJsqblDtrzInulSZnAwLukTmGZpHiSSeaQLogiqqZWhPGjnmDybmQTQrUFlnRXWqVFUGqvrbezhNxoFCwqjkadwyvdlfXjKDYBOlrrMXMRwkOATjdXkAUeAZPEsWjRAgegqXKXkNqPIdNlUAWVBJjQAnqAPaFIsPGhNakvMWJfCkzEqmebKqgUYhhUewPYjPbShJcelCtohVFXpSFDAEZonYIdGiNxYHjDEaTtGVdcDfnUTRIbNqackTopTaowJoTeGEUaXYGBgMtwkAMJKGYUyNhgHDUHBhSkCCaTMatLJXrFYxjbFGWTCBZEZhZGaTSkRHWvkeezCQLJjFVivTqrLPovnaJZTxRIsFwgJvIiHgbxpOtAaKvRuvlNCSokXosCwhVhaXZXHlWtvWZTqbBdqbgZEnNoHPfnhUtyyGwsOWREgWppNQoTPCKPsYMgAWoaOhgoStjGMwzSgpGjaPTdkYoN');
    var index_3611 = objectStore_1.createIndex('index_3611', 'test', {unique: true, multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_5388', {autoIncrement: false});
    var count_0 = objectStore_1.count();
    var add_2 = objectStore_0.add({f0_m: '<null>', f1_a: '<boolean>'}, 'EEBcMNXaIaEWGnsmQdXiCmkuCPKNSLYtUMtQViQBNjGEUAUVUPemthpjQmheXJOmauznQUhCgJRBzkwcApkmGPJRUcjIvKnHorXJDHSUsBfmHaaMiSOPKQEQzTemkCOZxSrGQPsMELJbcdrdjZpxECgMnXOtcQfvIvmITlFHDQrnArSAlJWePknDGaWNNAEjPpjovaRmHYNdAHsUayeOJntYLPlpMQidyySKMyJHpa');
    var count_1 = objectStore_0.count();
    var count_2;
    try{
        KeyRange_0 = IDBKeyRange.bound('bVvdtjUxlgwrQcjUGiSFHGLZtotFdnhjvmhCBDPhJOFegwblNKXPIMOMwITOBrWLZhrunZNcisAGuyZeuYEOKjslXrtjolJVXryjJUuhmmvhxrihoYuMhTUSUUkorzoLXZunpgSHKGfbKsFFKUqbObNDknrzpmTGyeFBevYwGZpCmETeSwwQXGgzuQzvWCLCQBlmBMivXSOIapuoEgCYGyBUwJXWjcpOFnROpdayYtEfAmQCDLRiGUKBEqvPjBsoIdJsqblDtrzInulSZnAwLukTmGZpHiSSeaQLogiqqZWhPGjnmDybmQTQrUFlnRXWqVFUGqvrbezhNxoFCwqjkadwyvdlfXjKDYBOlrrMXMRwkOATjdXkAUeAZPEsWjRAgegqXKXkNqPIdNlUAWVBJjQAnqAPaFIsPGhNakvMWJfCkzEqmebKqgUYhhUewPYjPbShJcelCtohVFXpSFDAEZonYIdGiNxYHjDEaTtGVdcDfnUTRIbNqackTopTaowJoTeGEUaXYGBgMtwkAMJKGYUyNhgHDUHBhSkCCaTMatLJXrFYxjbFGWTCBZEZhZGaTSkRHWvkeezCQLJjFVivTqrLPovnaJZTxRIsFwgJvIiHgbxpOtAaKvRuvlNCSokXosCwhVhaXZXHlWtvWZTqbBdqbgZEnNoHPfnhUtyyGwsOWREgWppNQoTPCKPsYMgAWoaOhgoStjGMwzSgpGjaPTdkYoN', 'bVvdtjUxlgwrQcjUGiSFHGLZtotFdnhjvmhCBDPhJOFegwblNKXPIMOMwITOBrWLZhrunZNcisAGuyZeuYEOKjslXrtjolJVXryjJUuhmmvhxrihoYuMhTUSUUkorzoLXZunpgSHKGfbKsFFKUqbObNDknrzpmTGyeFBevYwGZpCmETeSwwQXGgzuQzvWCLCQBlmBMivXSOIapuoEgCYGyBUwJXWjcpOFnROpdayYtEfAmQCDLRiGUKBEqvPjBsoIdJsqblDtrzInulSZnAwLukTmGZpHiSSeaQLogiqqZWhPGjnmDybmQTQrUFlnRXWqVFUGqvrbezhNxoFCwqjkadwyvdlfXjKDYBOlrrMXMRwkOATjdXkAUeAZPEsWjRAgegqXKXkNqPIdNlUAWVBJjQAnqAPaFIsPGhNakvMWJfCkzEqmebKqgUYhhUewPYjPbShJcelCtohVFXpSFDAEZonYIdGiNxYHjDEaTtGVdcDfnUTRIbNqackTopTaowJoTeGEUaXYGBgMtwkAMJKGYUyNhgHDUHBhSkCCaTMatLJXrFYxjbFGWTCBZEZhZGaTSkRHWvkeezCQLJjFVivTqrLPovnaJZTxRIsFwgJvIiHgbxpOtAaKvRuvlNCSokXosCwhVhaXZXHlWtvWZTqbBdqbgZEnNoHPfnhUtyyGwsOWREgWppNQoTPCKPsYMgAWoaOhgoStjGMwzSgpGjaPTdkYoN', false, false);
        count_2 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('EEBcMNXaIaEWGnsmQdXiCmkuCPKNSLYtUMtQViQBNjGEUAUVUPemthpjQmheXJOmauznQUhCgJRBzkwcApkmGPJRUcjIvKnHorXJDHSUsBfmHaaMiSOPKQEQzTemkCOZxSrGQPsMELJbcdrdjZpxECgMnXOtcQfvIvmITlFHDQrnArSAlJWePknDGaWNNAEjPpjovaRmHYNdAHsUayeOJntYLPlpMQidyySKMyJHpa', 'EEBcMNXaIaEWGnsmQdXiCmkuCPKNSLYtUMtQViQBNjGEUAUVUPemthpjQmheXJOmauznQUhCgJRBzkwcApkmGPJRUcjIvKnHorXJDHSUsBfmHaaMiSOPKQEQzTemkCOZxSrGQPsMELJbcdrdjZpxECgMnXOtcQfvIvmITlFHDQrnArSAlJWePknDGaWNNAEjPpjovaRmHYNdAHsUayeOJntYLPlpMQidyySKMyJHpa', true, true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var clear_1 = objectStore_1.clear();
    var objectStore_3 = db.createObjectStore('objectStore_5389', {autoIncrement: false});
    var objectStore_4 = db.createObjectStore('objectStore_5390', {keypath: 'nvdiKafdqNbNZlaQuNcLEfeqgOQOVUovEpJNTMncKvEzruijyGIasgnVisqpGtAlxyxjlRvqKMRGlioXbZIKKWlAuBZnTmwxZSQlojjeOfQEoihNflmFzEsBcPxLncJiwWTNgmerlCgaDegvjhxvgczJCXYIPlnTWJSrrltRdUanvnMhmkdHPGMMbxpkpYhpLmBsurDgThLheUcklGdYVsMonAwmSGOLtZGSIcWWtzZAANLYINoikqAhyhNxfTgpdNZLpRKJAloEpTAwsOWCrkLHCKutyRxoTRgPLBQFTpFECipplrbnhtCmVFcaCIOHqhriSibgmdLdQPXHPjrcDmVFRikkyQDbWpUMeHpFRNlTmwHAnoOyTwyXJrZbCPYaABlBDlVPVmibMwuTjbvPRQPehqWUmtsUzvhMieSxBZARsCeIgFMZIUaEQfnmvcFIMAULZeugueQsrROBlqdwAQUlRpPKvmnIDavnYJoNWmrwepRTOFvUmVqxDofDiMIgstTOcMsVFkypyVPUubyMwLxZJuzlOxMDSFqOjKFqIGLGIBcDYmrsnUySVdiffmqwGorYsHDTqjIApUKZdfPKlSdkzeWqjmteDZuFBLlCmZNhyDNUUZTIdRzGCNSGZHUZyyFCdmhIVyEoerHSNkHjtJoViKUltacihQ.fXSlHXWSfdeImpoGdpcEbpDbRfPOIVdDNKGpefOLVWvzlqdVxFwVdvhvMlpJKWAQTIfJDhgQBPgoZjuODRXXMPnARonWXqkBiZBsdYlJxuUWrEtWfKnrzAFfTaKINSPjoNHfrZSCaqQsvNhaJMnnzyvPAqufTOBXljhYhymUeJJprEMUrlMeSIzZLCZIKdwySyeoKqmdSbclfSKhRpbXwxSBZJUhIYMxYvwNNVWNriFGtYaveRMMYLlhLQLDGwVqEaODCmAjjyMXfhNoACfaOFxPfQhDcyvOGTcGVajtNOIuodzoiKnbJhxjCQCmhDHiGYpQlTMPEGHioZmrBAAOFAERqigIbOUtNEFwVdOTPOqHFZweECBwxFdqmXSwuYkTaYANITqQLzogDMeFUfbHdckwenzCHKfweMGFvWTCZDsYJFTSYwcorWhkmVzWJEFdnLgdWCHUiMJOvjzkuYeLlAhOQNZjAQXwPftUVvKAnmAKdsbpsJwWmMpGIOMdOLrhfDdZVyAmRxZmYlyDmakqeAryGIJUEfGdbfqbiZRGpLNmvtbxZbvWFgPBKDvoxjfbGZKvdRnsTyriWypXKnERlTXRVQSqWixhELTSwcVhrmKbcatDlIiaTTSOGIezhfUkIBqIiBoiRmXAsutOJVsteaODtilLtQYYNQqNez.nkRatdovFhGzLLaBptNtvHCcoPOsJzuwlEQSheRLkzoLoYwcsUsJiziDYEUorHUeQnuCoTrldFVVRGvAtCqPUvntwetaQLfUlQwzvlRrVEADHraWKFTmPpMZswuvKfVcoGehqPnJIPnYiPUvnNLPFIbtjvAUdfcwhJeKkfEvdYmjJanQNFncbonoiGnTVGJiNwaFzzOgWZzmYjBcXIkNITdYycAIqRjAbvryZXQnCOgUJRwesxodSwTbCSyQLAWHHnjaOTwsyEaodCiYuoHJjyOXLWTkhqVNvxfEJVXQwcezJiaZEbQIOjZWcoilsgfipxodPChJTmfLFMusmzzYAKkAjrITRECXvNZddBbNfwgCkmPLtLHGYQVxULItTOXkqDLaRvqguNXcgxpJpXgmnVqEXtqOpBZaenjsYTKtkLISidosyNZUQufismsietQTrIoJcYVVPlSAqiCzXMuxAyaLTwvurQihRfIszwYGPvXEPDnvebfsudAdNIyoBZgaeHdoskdlwCrCARRUCgWaHnAnkvuSknIaAbkOEIuGvMQkxZwQAntyYviClgJsXwyjCOvYDLaKiANBTfeabDojRFGiUywacgkQGzjZNWpXsuqqVazYgGqROIxfFTNiXgvMWIBNiWaMdooDeXoDQqBilwBEOXfcxwiTYexoMxehfCuGAMVoDfGdgpnGviGOSEUFcYtlmAfIRQqOyiiCbMPfUoOLSbwpHhLHIHoXmItfEHTcdppqrKXBAmQJGnPdBeybXLgRAzPGoQrzYwsPOksTRxofALZCbVdLAoBKGiSgcHolQ.PENzYtWkyhjJHSeugePeYbIsTAPTynQYjeSVjIpMufLDbsphqojLxsVWNNrWSwkbIJVpsuLQjHfFnCzSuARiZrpHkTZwRPQRfGHdBWipGRucXuUIsYTWQRmsdGIRYNFYDdhoedZrYbBNxxwNkihITvunCycrutmKRGVxibMJqfBlBJPUMTbbAUVymlXYVetKRyYMJBvZYiPdsJxVuVnuBpEzeWudcBvgdEN.kFlGCSIhtVRPLKHvaOuCHvqnQjtwcpgMYVcWkgIXFvfzsZyFSQJjsYOYItceetKChDPSUEEUMvZDiLymHDyOeKpjzbrSnFOBlvpAxLKjMUmKylWMHKyexJgDUgmkjXhorNCgRpbhlEYolwcQghIqAVdtwgucjzPwxuijSBeCpJoHSweTDoNvakexWwSdhXhSoBNOHkPfZUBbdHEkzYOxgLTlIzNsqEJFPpgluQTmAiMgenAmGUuhaSAUfONtNlvQYEHRHiebQIlYRVyCRdVumrsBmqRdcYmouHUoqszDMdtUGDPQmojtxdndiIoJAEQYoWslRjZbPtkbPNlBoebQShOMDuFIOcyXNwwxZEOUMuEDFDlstMzpzekmQmUqLLEXgEjRXoQwGDgWxsDKTLuAyUbxkjRAuVmiqZaCoMtadrasCUJnPxTcCqRKOMJgOvYGlALAKEJCvmQgaqYCfEDBPMzDnYxNPMZtIRCtbkdsEufOvdEkopCHaICOsUsClAInZjaRigRioyVNOVLgyqcXzMLvrdeJuFuDikIIUTBdXtyHJhajzwSrtHBTSMfXTrPYhhroyKHZshXkrlznWikXUUZOXUIlPbxcSWDYvsadqNZuoGhhTy.yNdENpDeyLPVIoyGBrzRuSOiNoazOkymqzIknCIqkGYZzJmazVWDQRnIVvbeORxuxkhKhchXyarsXnyrrVvjnhMBaYYfoHaTIpgaiOEXhbcghINUXRlAnaIjXDSSRARqWYikfANdqFKpjrcWTpjmZsLziiKhxQtYcmQdsHXYVsOTvlPoJXQUTFTaqlhruXvsNPEBjEfUcEwTXfPYnvltoFhIXruyqgbUfxsXkOR.XDGHIMezbkgVEbCtFOXqfHRAsQCIzfRvrvhetcDhibbUqYGAHJksfkENCypkYXKqfdvFFnlCUvuoPERXdsZvxmFkShuAPMqbcOevvhXesIXYLLaNXvsqAwVZBfDBcBqavJdnreKdqkaFDvVQFqZkqXPJySvsWmuOviPEPZxoyoZcLCTvDsSfnZSGeIlgULXWSTbvQSjKmnvkEyoHKSOBQTyhUQeOHispLTVYSyrhmgAYGZTUGodnWKiVkpqksDaTAAwZzZzdxGhEXvoixmTeUhKlhlCJhnRvjKtw.yMuDTkTUXrOWhebOgfYmnZMEEYsthjQMMzAnlSDOUVizOTVhhznRrhZffQhAofNjIxvIdeoDJkRVznahszcwFDtwyjvqTZtEFRnLOejApJMWJyHQYKRaocRIOzjVedZSiBlZDmuvNlVReqTJREbWwQAgNEMtPLpJzwbvWzHWqkLhelfilmTjuIQo.gUEVuBXIpxMiosPMCQCUiMKzldRvrYYIdxMewyPtHGaglhpEwSqghSilFwVLGeFMosLThttNiKXBGVsoxNjNpbShpeFkEexNAeRHOqtyNyfwJEPpBbtTyXBtnOQLgGGaTrSeSSSmDWGWdJenemDQLaARkuinxznWbPpjucaNIDpPFKhlSNgYcKMTHEydhHzfIFygNEwBhOrOusjEIGRYQmDJTCWmSvaEDFgqATIHITBIiLGubdgqoVroKqZhqpCOMbCAOBrDHVlRZAmaovIsFSiIergLzYpQfRxlJOnHALgFyTHNqSKwQmKnVZrSYTyXGvXVWMXqZChuANEouypAWgLZMgvZhwjCkHLUdzVNvyYvvMduCKDMnofmjFmZUAyNLpsQSxSfXbRmoOaVlEqqqBdQSpgWmjOXhUyrQQTsgGtYyJvLPWlHJKcziuyOodkrEhYlpDpDBoMrpvvWlOJGCafkuHcGwFwcMsNduCvacoHlTOYBzGTEAxzZYXaamZjksHKOqhALXjzDqtkjLNjJVOGVBanrQMMGCQRvzDPmVFBuUNDbLTREAqTJiNUVXcXBsnzJsERnHBkuiRjUbgDjskOKcsAOLiusVSnkzgajoFQhWpkNtKQUeqbuwDGXJBfrZMDkAjPgLbDfIUnyhGEGTNUrVMgcUrxbgBBDgZqQbXGAuwwNmCVddZzYYoetlzKdjsfYcXOCsfeOpJiqVodpAIOjUeCuQRQuAbFALdpIUHXuGBFuEeYVCmXEkEWTXoINSayAjSFqfyMyJPZDYgfNsTOPRIIHCsXlLRZOIsSToloCkevBzONWYcFXrxwUOPHNUOuzgHlSJKEMziOvdXTCMlqALNALaFQdvyOLRzqzDDadNlsFlXGDToBuvXfiQWwstbJWqNjvdwnXskbGlYlxMmthwFASMEYJcNGVMoOmFvHAFmtOQQzbjAXnrgftGTERJmodIVbWDDFhRUmDjimgvkLXMfgmJsvXTj.PmxdNCUwvxbIBZTtrCddJZAhrzWLnRPdNxxKbOkUIBMHqLntCaXpHLUNadVUJalRNifggrAWdAvZjqywiHTzOgrxMZAtRDxmNCwqAEHMtIhrMtxuSkGFFTcJxBWHmqxfwZpHgrjjolDcKUrBbDfaRWxfTUxbZJKclFDQFYMlSQkjezaNNIyssPRfXQpIStBEBWwjHWHRUgthFffeYuwtrOxfpRdkKwZeBClnpFgRHlLPuAonUYCFYPZoXBAcEMyeODQcumpixXXZqkQApCFLSUGwDcmaidQycOheyZEbwUzaAHGqrxLcBylBqkgBNXrrzlJsHXNURjpFtLLcbZtdRlPrtaueLkchANZGnwmZePRCaHHnmExtbEVMOHasnfdXnhibwhMHdKStvwGADeEQqqXGldlmFGmeGlNboCLMGWCCzDtSKmIpIYZIwEnZQglHhsSvThbbhqgsRoySnpcILTCvsKAuCCROpbwfMqOhdpfLomWYZcioHZNvpgoLfVHnHCfvqtOGajHqLXWBKhGvEwHjvnRZyFeuPAKtMjQiOTISbHDylTKdigcuwNmxWddEeiHvDUKojQcbgRoqAvPnjyoyxxVetOYpcjKceUMGjHvndgcjrbDdasyJyXpXzYhogjkOOtklqHsHwNvGFiubQgRRRKHGRjOIvKVcbMDaoEXTJTHCIMKQZeTfqpDqAVuwhxxWJceTEPvkOXrTviPcydZBNXvPcEQzWzUAZlGUYUJQOEnxrpVZgMPoKtEXhyPVPzAMcpzizLPTXjvpteRREWFVrNVDnXYfAasrADmwHkHHNhURnqwdMptOyMoVIlUdSSfGRDoSwGWaJMwHSWcUgZUTuAsJdDPTlufkTcAksLyEGBVKRiPUUx'});
    var index_3612 = objectStore_3.createIndex('index_3612', 'test', {unique: true});
    var add_3 = objectStore_0.add({f0_h: '<boolean>', f1_j: '<null>', f2_x: '<object>', f3_t: '<boolean>'}, 'uzIJEejIzYexSNKRmeFmeDhlbWIsWaTwpvbXCRTjLRJMJfMfzeFftXxesHEZXlIsNIqhIoUDRYsjcYqifFNWGTAPXpEHgYQrEmChnfHOsCQSUAUbyTXBHqYMMKwzxCeyoPcQhUmKvXmIAzMxonftOUxBxdSccLjbUpMnKvRTbipoEApjtjZWACgPpiYiCJHASXEfWGEFSlpBqzqxyZIRnEfRXkqJtQgprOaPRcfmEJBEeOwdDcfUtUshlGDFyEpbdgLAGvmBAUvoeqXGTBEuRLUxcZfbAhgYprcPbuJpqpKfTZKboWZghdPsnPgWBiWHdBCsJDxpvSTHUtvhnrSkyjCnyoYlxEFnHhdSvKUvtfFReInguXhzRspHAurRNeHYzAbWGNFwjRWVCbHNLAdCrrHHYkXLLaJWgJYDcdFHexhDeBmLjAbsiAhVgepdpOqakWHEWwRbDtBNOPPiCwpkrWojsQjozVqDCamloTlvgkGwnbAutPHnjkvUYOYDJkLphXHLpcuEoMvHCpFTJawGNYdkqJaZuwHNXzrTMqENsOlvxdvBEyMEXPImdtuCPsRDENKKZMmGTiLFlFljpqhFsxQKMzJhJfVeabGUjnrrOsTbUrKDMFlMORrJaluaShNaurqOLstmcZbCrUBQDknADMiNHFjezozrDBxKEwdTrdQWlCMKPlWGyYRqAkmCaUFlNyrHhcfBKpTAVFZWyhOaKqjbITOBMEaTHWURgbcixkxgmIXxkdVReRJqKoIlYYYkFfuFDrVvJAIkXeUiRJBR');
    var index_0 = objectStore_3.index('index_3612');
    var add_4 = objectStore_3.add({f0_i: '<boolean>', f1_q: '<boolean>'}, 'OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8150 = db.transaction(['objectStore_5390'], 'readwrite', {durability:"default"})
    var objectStore_5390 = txn_8150.objectStore('objectStore_5390');
    var put_0 = objectStore_5390.put({f0_t: '<string>'}, 'RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
    var count_3;
    try{
        KeyRange_4 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        count_3 = objectStore_5390.count(KeyRange_4);
    }
    catch (e){
    }

    var clear_2 = objectStore_5390.clear();
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        getAllKeys_0 = objectStore_5390.getAllKeys(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        getAllKeys_0 = objectStore_5390.getAllKeys(KeyRange_7);
    }

    var add_5 = objectStore_5390.add({f0_k: '<boolean>', f1_n: '<string>', f2_n: '<string>', f3_b: '<string>', f4_e: '<array>', f5_k: '<null>', f6_a: '<array>', f7_a: '<array>'}, 'AMDlPUXFWayrCYIZrlWUgCWfgHzHXPGdOOQYzeECFTvhJbzLYGZLJWNmrSceNVxMXbpUADYMUUZuJcPjmXaxnzJQGAGffgPSWdmBXMBRHywPbyHiqxWlBXIuTYWYnYrVFfMKgFnLowXdCTgpmmrYKXphCJIWZDjeQvRuLJrASGhAsUNsWCLEyXHwHxIScMwmJyGWTzWyoTEEakLhtNJtlEgnkpfoIgXZFtFcXzJIRjstaviHbDHBtENJNTYYZSYeKwekRmSyFxjaSvxGSVKJIsnsnULBUWVTBxrNTOewIvXhHRUoElbpjWSkpBEhlGFYLbWeQTYEprowLFiQvtzUMSQOJyMkPNAzkxEBLVZZPYygdqcIgPpPaeaqPEuurUgiLhDPjVkTglKluwxGbYPHyAGnzsrmNkMfMfAmttIdXkBFZEbUnvIJpuXvOHYdfqfXDHECeQwoXsfSPjbOWCnYmCxtiUJlvqepTbwMq');
    var count_4;
    try{
        KeyRange_8 = IDBKeyRange.only('AMDlPUXFWayrCYIZrlWUgCWfgHzHXPGdOOQYzeECFTvhJbzLYGZLJWNmrSceNVxMXbpUADYMUUZuJcPjmXaxnzJQGAGffgPSWdmBXMBRHywPbyHiqxWlBXIuTYWYnYrVFfMKgFnLowXdCTgpmmrYKXphCJIWZDjeQvRuLJrASGhAsUNsWCLEyXHwHxIScMwmJyGWTzWyoTEEakLhtNJtlEgnkpfoIgXZFtFcXzJIRjstaviHbDHBtENJNTYYZSYeKwekRmSyFxjaSvxGSVKJIsnsnULBUWVTBxrNTOewIvXhHRUoElbpjWSkpBEhlGFYLbWeQTYEprowLFiQvtzUMSQOJyMkPNAzkxEBLVZZPYygdqcIgPpPaeaqPEuurUgiLhDPjVkTglKluwxGbYPHyAGnzsrmNkMfMfAmttIdXkBFZEbUnvIJpuXvOHYdfqfXDHECeQwoXsfSPjbOWCnYmCxtiUJlvqepTbwMq');
        count_4 = objectStore_5390.count(KeyRange_8);
    }
    catch (e){
    }

    var add_6 = objectStore_5390.add({f0_r: '<object>', f1_y: '<array>'}, 'zRXNBYVvOjMgsVwuRVRaxPtvigNIWSNLmdUmThdPPQwBUMMSaeuJaEQeJKSvkmZHAFkIZroDwLNXbFWXGOrQRkTTmWMXNEDtfkPrtgTQtFuyjYzeBrDEceUUVsMduyPpnHiwerOBPMIEYIIewqKHwpxKqfEbtVuIxWYDdlAmQENkBkoqDaiGQBSLtdJxGLFjMiIkTUlcsbjTyHDyFBdNggPkabxLRjzFcpSppkNwYedibIITsjFZMQPLoOsLtTfNnEUNJKHoDCSqUrNgcyTVIDKaBzYjaHsqrdUMiSxiMCCkdimHGojdNdtKzzTgXWNSsivDVZrDxXRpmvLtzGfRKQUCrhMTzLJhDzgTHcbvUvojAxQYIaTcdbMgMLYrBfKvSaPUQEQ');
    var add_7 = objectStore_5390.add({f0_u: '<object>'}, 'BHtSmvrbhkJdgfOABwZOgEvRjLWdWqGntOaNIJkILqXncxUeBeIBBvLGQwOothYtsJKXgWsQXuCbYXVjAHbSeQuhHkKevCYOYLTZukIsfkWLrFoECJZaAFPjXVUcNeHBsZtKwAPgqizWMrkzMhCqYJvAIZBrRhZIPqRGNkULWSwEHLQbyaiKNkVsQqXgqjbQAMLwcQpHUHSdLBFNlfQlNTJwEjvwzgoMzEoixxNKhwgtTiaojerLTvgJSEyZNIMwwPNlDgtZvDEIWaFaeQnAhgWiHQxPNSaojKxeXYrlpWXtwgWmsGvAqEXoFovcaZfIEzSkrJrNYlCIFkvqXpfqpkzTHnBNkvDdBHJzOCQVfTzDYpXqtsfIkIzwkYDAYOFxgpZRQKRaDlqLcYGroDRcmujoijIiPyHCtwkkplkLasdxgDtUFnCgbyPEDVYHbaThFpMGNhfcToUxhsVKyRIzWBTLtUmREaixwDmghtPXOTJgfpHUAvaDENdfPXZQHIBPFKzWLdlhNOCFDNZZqdbPIALOLwdGLwxMTfnPTNzQoaXPApfQwSMeWLkLcBtEHgKMrwTkHKNspBxteIGxcOsecHPiAzabIqYqhPNKfisNNSAfMWKkuiXmvywMPTSSGmCAocaTLVvGibaPtwwnIyoqgZNgUsQvpLNCykqChassFfvTIvLrEQSeBsKuWEUrlHWNWDYoXHhwZdZcGsGvlbnbYEnRSRgEBqFfhVAhbhmQatgpRRDEPBaCpylpwGlGZVIPfhMe');
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq', false);
        getAll_0 = objectStore_5390.getAll(KeyRange_10, 1271277124);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('zRXNBYVvOjMgsVwuRVRaxPtvigNIWSNLmdUmThdPPQwBUMMSaeuJaEQeJKSvkmZHAFkIZroDwLNXbFWXGOrQRkTTmWMXNEDtfkPrtgTQtFuyjYzeBrDEceUUVsMduyPpnHiwerOBPMIEYIIewqKHwpxKqfEbtVuIxWYDdlAmQENkBkoqDaiGQBSLtdJxGLFjMiIkTUlcsbjTyHDyFBdNggPkabxLRjzFcpSppkNwYedibIITsjFZMQPLoOsLtTfNnEUNJKHoDCSqUrNgcyTVIDKaBzYjaHsqrdUMiSxiMCCkdimHGojdNdtKzzTgXWNSsivDVZrDxXRpmvLtzGfRKQUCrhMTzLJhDzgTHcbvUvojAxQYIaTcdbMgMLYrBfKvSaPUQEQ');
        getAll_0 = objectStore_5390.getAll(KeyRange_11);
    }

    var put_1 = objectStore_5390.put({f0_q: '<array>', f1_l: '<object>', f2_z: '<number>', f3_v: '<array>', f4_d: '<object>', f5_t: '<string>'}, 'JkLTVfCLcfjyoBhmXCvtmPtUXNRHWcabozjwrfjCtlPVrdVUqWQhJoXQWPWadwjyaIEIiIcsrMuOzWimctSOjjmVUziWixFGeuuZADsQEvJVLVufMLuzzyajFbTGEelhsAfiSXnHMnrEVvQjeDaarZpSjTYQxOFJwxUmnKzeenEjgtgZWWgXNBSSFsxvAgGYgXtzxoRGpsQpnMrmjttbhUuwDMwdHBMbkyOSOmdwuZMfLFqnMOfJUfoMtHcaDMAcKNewTqIASZRifSpqyVfldr');
    txn_8150.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8150.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8150.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8151 = db.transaction(['objectStore_5386', 'objectStore_5389', 'objectStore_5390'], 'readwrite', {durability:"default"})
    var objectStore_5386 = txn_8151.objectStore('objectStore_5386');
    var count_5 = objectStore_5386.count();
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.only('EEBcMNXaIaEWGnsmQdXiCmkuCPKNSLYtUMtQViQBNjGEUAUVUPemthpjQmheXJOmauznQUhCgJRBzkwcApkmGPJRUcjIvKnHorXJDHSUsBfmHaaMiSOPKQEQzTemkCOZxSrGQPsMELJbcdrdjZpxECgMnXOtcQfvIvmITlFHDQrnArSAlJWePknDGaWNNAEjPpjovaRmHYNdAHsUayeOJntYLPlpMQidyySKMyJHpa');
        delete_1 = objectStore_5386.delete(KeyRange_12);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('EEBcMNXaIaEWGnsmQdXiCmkuCPKNSLYtUMtQViQBNjGEUAUVUPemthpjQmheXJOmauznQUhCgJRBzkwcApkmGPJRUcjIvKnHorXJDHSUsBfmHaaMiSOPKQEQzTemkCOZxSrGQPsMELJbcdrdjZpxECgMnXOtcQfvIvmITlFHDQrnArSAlJWePknDGaWNNAEjPpjovaRmHYNdAHsUayeOJntYLPlpMQidyySKMyJHpa', true);
        get_0 = objectStore_5386.get(KeyRange_14);
    }
    catch (e){
    }

    var clear_3 = objectStore_5386.clear();
    var get_1;
    try{
        KeyRange_16 = IDBKeyRange.bound('EyrhYikntQQkmvkBsZGbFmyXAndAGDrjoMjcqCySVKLAcKvJnMDORyPYztlAuUUMGWTQdMVLwsvaDmrkfwQdMbePfNkYzfdhVcbZuiUvFzulJWSLkofHsYhqwiESLpElpWDjHPWAXrMILDUdKrdPmybwDisSLjnqcOVrAlwIQTjwltGRGVnXJmMrkIpwdcGwQKsQwChDwaginNJQUiphDUclaKQUVcACJWqoTroFyFOljUTFsArUoOEFjXVhCqbMYdZuJrNBclsuRwAPAemfFofzYPCAIvdnomwrSqaaCizRbNjMHuolUj', 'uzIJEejIzYexSNKRmeFmeDhlbWIsWaTwpvbXCRTjLRJMJfMfzeFftXxesHEZXlIsNIqhIoUDRYsjcYqifFNWGTAPXpEHgYQrEmChnfHOsCQSUAUbyTXBHqYMMKwzxCeyoPcQhUmKvXmIAzMxonftOUxBxdSccLjbUpMnKvRTbipoEApjtjZWACgPpiYiCJHASXEfWGEFSlpBqzqxyZIRnEfRXkqJtQgprOaPRcfmEJBEeOwdDcfUtUshlGDFyEpbdgLAGvmBAUvoeqXGTBEuRLUxcZfbAhgYprcPbuJpqpKfTZKboWZghdPsnPgWBiWHdBCsJDxpvSTHUtvhnrSkyjCnyoYlxEFnHhdSvKUvtfFReInguXhzRspHAurRNeHYzAbWGNFwjRWVCbHNLAdCrrHHYkXLLaJWgJYDcdFHexhDeBmLjAbsiAhVgepdpOqakWHEWwRbDtBNOPPiCwpkrWojsQjozVqDCamloTlvgkGwnbAutPHnjkvUYOYDJkLphXHLpcuEoMvHCpFTJawGNYdkqJaZuwHNXzrTMqENsOlvxdvBEyMEXPImdtuCPsRDENKKZMmGTiLFlFljpqhFsxQKMzJhJfVeabGUjnrrOsTbUrKDMFlMORrJaluaShNaurqOLstmcZbCrUBQDknADMiNHFjezozrDBxKEwdTrdQWlCMKPlWGyYRqAkmCaUFlNyrHhcfBKpTAVFZWyhOaKqjbITOBMEaTHWURgbcixkxgmIXxkdVReRJqKoIlYYYkFfuFDrVvJAIkXeUiRJBR', true, false);
        get_1 = objectStore_5386.get(KeyRange_16);
    }
    catch (e){
    }

    var count_6 = objectStore_5386.count();
    var getAll_1 = objectStore_5386.getAll(3265698737);
    var clear_4 = objectStore_5386.clear();
    var count_7;
    try{
        KeyRange_18 = IDBKeyRange.only('EyrhYikntQQkmvkBsZGbFmyXAndAGDrjoMjcqCySVKLAcKvJnMDORyPYztlAuUUMGWTQdMVLwsvaDmrkfwQdMbePfNkYzfdhVcbZuiUvFzulJWSLkofHsYhqwiESLpElpWDjHPWAXrMILDUdKrdPmybwDisSLjnqcOVrAlwIQTjwltGRGVnXJmMrkIpwdcGwQKsQwChDwaginNJQUiphDUclaKQUVcACJWqoTroFyFOljUTFsArUoOEFjXVhCqbMYdZuJrNBclsuRwAPAemfFofzYPCAIvdnomwrSqaaCizRbNjMHuolUj');
        count_7 = objectStore_5386.count(KeyRange_18);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_20 = IDBKeyRange.only('uzIJEejIzYexSNKRmeFmeDhlbWIsWaTwpvbXCRTjLRJMJfMfzeFftXxesHEZXlIsNIqhIoUDRYsjcYqifFNWGTAPXpEHgYQrEmChnfHOsCQSUAUbyTXBHqYMMKwzxCeyoPcQhUmKvXmIAzMxonftOUxBxdSccLjbUpMnKvRTbipoEApjtjZWACgPpiYiCJHASXEfWGEFSlpBqzqxyZIRnEfRXkqJtQgprOaPRcfmEJBEeOwdDcfUtUshlGDFyEpbdgLAGvmBAUvoeqXGTBEuRLUxcZfbAhgYprcPbuJpqpKfTZKboWZghdPsnPgWBiWHdBCsJDxpvSTHUtvhnrSkyjCnyoYlxEFnHhdSvKUvtfFReInguXhzRspHAurRNeHYzAbWGNFwjRWVCbHNLAdCrrHHYkXLLaJWgJYDcdFHexhDeBmLjAbsiAhVgepdpOqakWHEWwRbDtBNOPPiCwpkrWojsQjozVqDCamloTlvgkGwnbAutPHnjkvUYOYDJkLphXHLpcuEoMvHCpFTJawGNYdkqJaZuwHNXzrTMqENsOlvxdvBEyMEXPImdtuCPsRDENKKZMmGTiLFlFljpqhFsxQKMzJhJfVeabGUjnrrOsTbUrKDMFlMORrJaluaShNaurqOLstmcZbCrUBQDknADMiNHFjezozrDBxKEwdTrdQWlCMKPlWGyYRqAkmCaUFlNyrHhcfBKpTAVFZWyhOaKqjbITOBMEaTHWURgbcixkxgmIXxkdVReRJqKoIlYYYkFfuFDrVvJAIkXeUiRJBR');
        get_2 = objectStore_5386.get(KeyRange_20);
    }
    catch (e){
    }

    var count_8 = objectStore_5386.count();
    var put_2 = objectStore_5386.put({f0_y: '<array>', f1_i: '<object>'}, 'bUHRWxHqMsWstpYYoiESWNQqwypLRnmtFxuPKwWbWaYnpYVdAcwXeCDLsDwqljmNHQiMgtxctSjJWtAzDwWlkFphLsgtskCoZObSYvkWIGnidGRNeRCWxgdcxVeJwbunsICahVxzIDDPNuLBAXUWIhJMaCbWNvDitzQiYtwnkOYRlFKgwlgjvsWwhAQBqjkabaIfrGFfoEUBsEgLbPadpLCglrcDaHoVoicPGhUHQiyDnxsDtjbnrfXMAtZfmCzYnLyuXpjejEsTvkjXwsfoQfRqqOKdRwHIQDpRgZuNTPptGUmSUQgyXYUrDnvrXwPQHLExJabICOjLIDtrvzvtQcrGQYtyhsJxnXTArRfObjPlHDgvlYpzCNQBcxrRJglkBbgfNVPjDxcgvkVLPAvmbNFSJpWmXUnIPSdBIxUZXSusdsfXQilOMErCztGcvgdHTHHZSFORoBQrHrCfnBWQOZLnIIeQUZTGexHDUvqaDMWooeouzGmCjWTovXkWjsqIwzWWZaWyZbsDydtSHyvXCvdYpCIxFojdYYicWKhsTNijeoEwRQuTLqnjfJTOrawKAdQvpZrJyLJqaPNUkCVBOUCtjCQKsXUYdxybAuvXBXJkwRggYXQVSsxNJOgaAutMmhMKeDdJvXIyyWKQFTpNTbkiZZEnHDtInjmiFlKYieLWiQRgGrGaoVnHMARkhWYpHDSCsorxHfRQQTocbYfqrtHnIxevvdTzrIsZzdipZtswdLqvDOnNMQapEQeOJWpDhhAIUnTQapriABUCwRtmGToeclSeySGZJtZxWhSULHaSzWZzQ');
    txn_8151.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8151.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8151.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8152 = db.transaction(['objectStore_5388'], 'readonly', {durability:"strict"})
    var objectStore_5388 = txn_8152.objectStore('objectStore_5388');
    txn_8152.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8152.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8152.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8153 = db.transaction(['objectStore_5389', 'objectStore_5386'], 'readonly', {durability:"strict"})
    var objectStore_5389 = txn_8153.objectStore('objectStore_5389');
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.only('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr');
        get_3 = objectStore_5389.get(KeyRange_22);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', 'OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', false, false);
        get_4 = objectStore_5389.get(KeyRange_24);
    }
    catch (e){
    }

    var count_9 = objectStore_5389.count();
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', false);
        get_5 = objectStore_5389.get(KeyRange_26);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', false);
        get_6 = objectStore_5389.get(KeyRange_28);
    }
    catch (e){
    }

    var count_10 = objectStore_5389.count();
    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', 'OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', true, false);
        get_7 = objectStore_5389.get(KeyRange_30);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', true);
        get_8 = objectStore_5389.get(KeyRange_32);
    }
    catch (e){
    }

    var count_11 = objectStore_5389.count();
    var count_12;
    try{
        KeyRange_34 = IDBKeyRange.bound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', 'OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', true, true);
        count_12 = objectStore_5389.count(KeyRange_34);
    }
    catch (e){
    }

    var index_1 = objectStore_5389.index('index_3612');
    var get_9;
    try{
        KeyRange_36 = IDBKeyRange.bound('OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', 'OPeDxZfnZHDuYUQnXCIBDkIrnlGtoCihgYQujHsr', false, true);
        get_9 = objectStore_5389.get(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_5389.getAllKeys();
    txn_8153.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8153.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8153.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8154 = db.transaction(['objectStore_5389', 'objectStore_5390'], 'readonly', {durability:"default"})
    var objectStore_5390 = txn_8154.objectStore('objectStore_5390');
    var get_10;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('AMDlPUXFWayrCYIZrlWUgCWfgHzHXPGdOOQYzeECFTvhJbzLYGZLJWNmrSceNVxMXbpUADYMUUZuJcPjmXaxnzJQGAGffgPSWdmBXMBRHywPbyHiqxWlBXIuTYWYnYrVFfMKgFnLowXdCTgpmmrYKXphCJIWZDjeQvRuLJrASGhAsUNsWCLEyXHwHxIScMwmJyGWTzWyoTEEakLhtNJtlEgnkpfoIgXZFtFcXzJIRjstaviHbDHBtENJNTYYZSYeKwekRmSyFxjaSvxGSVKJIsnsnULBUWVTBxrNTOewIvXhHRUoElbpjWSkpBEhlGFYLbWeQTYEprowLFiQvtzUMSQOJyMkPNAzkxEBLVZZPYygdqcIgPpPaeaqPEuurUgiLhDPjVkTglKluwxGbYPHyAGnzsrmNkMfMfAmttIdXkBFZEbUnvIJpuXvOHYdfqfXDHECeQwoXsfSPjbOWCnYmCxtiUJlvqepTbwMq', false);
        get_10 = objectStore_5390.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_5390.getAllKeys(962651055);
    var get_11;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('zRXNBYVvOjMgsVwuRVRaxPtvigNIWSNLmdUmThdPPQwBUMMSaeuJaEQeJKSvkmZHAFkIZroDwLNXbFWXGOrQRkTTmWMXNEDtfkPrtgTQtFuyjYzeBrDEceUUVsMduyPpnHiwerOBPMIEYIIewqKHwpxKqfEbtVuIxWYDdlAmQENkBkoqDaiGQBSLtdJxGLFjMiIkTUlcsbjTyHDyFBdNggPkabxLRjzFcpSppkNwYedibIITsjFZMQPLoOsLtTfNnEUNJKHoDCSqUrNgcyTVIDKaBzYjaHsqrdUMiSxiMCCkdimHGojdNdtKzzTgXWNSsivDVZrDxXRpmvLtzGfRKQUCrhMTzLJhDzgTHcbvUvojAxQYIaTcdbMgMLYrBfKvSaPUQEQ', false);
        get_11 = objectStore_5390.get(KeyRange_40);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_42 = IDBKeyRange.bound('JkLTVfCLcfjyoBhmXCvtmPtUXNRHWcabozjwrfjCtlPVrdVUqWQhJoXQWPWadwjyaIEIiIcsrMuOzWimctSOjjmVUziWixFGeuuZADsQEvJVLVufMLuzzyajFbTGEelhsAfiSXnHMnrEVvQjeDaarZpSjTYQxOFJwxUmnKzeenEjgtgZWWgXNBSSFsxvAgGYgXtzxoRGpsQpnMrmjttbhUuwDMwdHBMbkyOSOmdwuZMfLFqnMOfJUfoMtHcaDMAcKNewTqIASZRifSpqyVfldr', 'zRXNBYVvOjMgsVwuRVRaxPtvigNIWSNLmdUmThdPPQwBUMMSaeuJaEQeJKSvkmZHAFkIZroDwLNXbFWXGOrQRkTTmWMXNEDtfkPrtgTQtFuyjYzeBrDEceUUVsMduyPpnHiwerOBPMIEYIIewqKHwpxKqfEbtVuIxWYDdlAmQENkBkoqDaiGQBSLtdJxGLFjMiIkTUlcsbjTyHDyFBdNggPkabxLRjzFcpSppkNwYedibIITsjFZMQPLoOsLtTfNnEUNJKHoDCSqUrNgcyTVIDKaBzYjaHsqrdUMiSxiMCCkdimHGojdNdtKzzTgXWNSsivDVZrDxXRpmvLtzGfRKQUCrhMTzLJhDzgTHcbvUvojAxQYIaTcdbMgMLYrBfKvSaPUQEQ', false, true);
        get_12 = objectStore_5390.get(KeyRange_42);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_44 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        getAllKeys_3 = objectStore_5390.getAllKeys(KeyRange_44, 2335839030);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        getAllKeys_3 = objectStore_5390.getAllKeys(KeyRange_45);
    }

    var getAllKeys_4;
    try{
        KeyRange_46 = IDBKeyRange.only('RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq');
        getAllKeys_4 = objectStore_5390.getAllKeys(KeyRange_46);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('zRXNBYVvOjMgsVwuRVRaxPtvigNIWSNLmdUmThdPPQwBUMMSaeuJaEQeJKSvkmZHAFkIZroDwLNXbFWXGOrQRkTTmWMXNEDtfkPrtgTQtFuyjYzeBrDEceUUVsMduyPpnHiwerOBPMIEYIIewqKHwpxKqfEbtVuIxWYDdlAmQENkBkoqDaiGQBSLtdJxGLFjMiIkTUlcsbjTyHDyFBdNggPkabxLRjzFcpSppkNwYedibIITsjFZMQPLoOsLtTfNnEUNJKHoDCSqUrNgcyTVIDKaBzYjaHsqrdUMiSxiMCCkdimHGojdNdtKzzTgXWNSsivDVZrDxXRpmvLtzGfRKQUCrhMTzLJhDzgTHcbvUvojAxQYIaTcdbMgMLYrBfKvSaPUQEQ');
        getAllKeys_4 = objectStore_5390.getAllKeys(KeyRange_47);
    }

    var get_13;
    try{
        KeyRange_48 = IDBKeyRange.bound('BHtSmvrbhkJdgfOABwZOgEvRjLWdWqGntOaNIJkILqXncxUeBeIBBvLGQwOothYtsJKXgWsQXuCbYXVjAHbSeQuhHkKevCYOYLTZukIsfkWLrFoECJZaAFPjXVUcNeHBsZtKwAPgqizWMrkzMhCqYJvAIZBrRhZIPqRGNkULWSwEHLQbyaiKNkVsQqXgqjbQAMLwcQpHUHSdLBFNlfQlNTJwEjvwzgoMzEoixxNKhwgtTiaojerLTvgJSEyZNIMwwPNlDgtZvDEIWaFaeQnAhgWiHQxPNSaojKxeXYrlpWXtwgWmsGvAqEXoFovcaZfIEzSkrJrNYlCIFkvqXpfqpkzTHnBNkvDdBHJzOCQVfTzDYpXqtsfIkIzwkYDAYOFxgpZRQKRaDlqLcYGroDRcmujoijIiPyHCtwkkplkLasdxgDtUFnCgbyPEDVYHbaThFpMGNhfcToUxhsVKyRIzWBTLtUmREaixwDmghtPXOTJgfpHUAvaDENdfPXZQHIBPFKzWLdlhNOCFDNZZqdbPIALOLwdGLwxMTfnPTNzQoaXPApfQwSMeWLkLcBtEHgKMrwTkHKNspBxteIGxcOsecHPiAzabIqYqhPNKfisNNSAfMWKkuiXmvywMPTSSGmCAocaTLVvGibaPtwwnIyoqgZNgUsQvpLNCykqChassFfvTIvLrEQSeBsKuWEUrlHWNWDYoXHhwZdZcGsGvlbnbYEnRSRgEBqFfhVAhbhmQatgpRRDEPBaCpylpwGlGZVIPfhMe', 'RIxfTWefVuZUREskqewjdzvIBFOqsAhbibyceaoiwgwWatKkDdrLsJMJQfGjPHNPyguYGTBKUwturANdgDvkzFBRKElJbELDkAtedclOTMpKKZeixUTGbwqrWrDxuOVmQZVcouLsOShksBKwVOkMUEJSQpPNkHnHJYPnJGQsnQKfkDKzwnVtuGRMctSdPgJVKKpbsLhEdeLAfKaHhDczmtTHKYPdpBOWodDcCJScRRNXeCyaHSTpIBzLmqexPSARzKlDtDsCHQmcZYpGhqMXTScJXhTJcoIofnRRfQoDZdVXvQRUwqauQzcdQYShCJEoumsCLInivzTPaubBvEMYQfsMWhWkmzvfCXAWLwVsVxZkSkwlWyHHagPrUJHWbBcLgANJHGbQRWeBWqmcQoohWmQwNRnLRPcTKelzEwgGtNZloQXIggpKqWJmknQknujGZUODDcrXBVgySSqXpwArbrDOFVDihbGnMdsojtItzQcRHVbkhqhSwswkKIAqZRcbpAWcbMffJphRPOJBbgOePoaKzutbTtFFLRxzcMGwzBLaqwTykGNRUagjbghqOnrIldAXyYSplMEPldMDlBbyylZiEAlwRAoCldcjwMqnExmbVFLSnAmaAfnguxYfHWUqFGfvTaVJrwnCKgVvUfDkAUeTIjwBIFnXXOXXgCUxRLOnfXZlvZKmFWWLCvlNGzoeRALRwBktOjGCcdiVuyzUTmYzjakCDpwWFVmGEoMBlPnNvmvfOSWrEYeDwRvIHcUixKXsBSCBUTWoHVJeXtAyrovXqTwjMXrpbjHCYBEHzEurGTWgDeIgKaWkiiHkCmdtuTcmWzfnZMsNBqLFufkcKjq', true, false);
        get_13 = objectStore_5390.get(KeyRange_48);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('BHtSmvrbhkJdgfOABwZOgEvRjLWdWqGntOaNIJkILqXncxUeBeIBBvLGQwOothYtsJKXgWsQXuCbYXVjAHbSeQuhHkKevCYOYLTZukIsfkWLrFoECJZaAFPjXVUcNeHBsZtKwAPgqizWMrkzMhCqYJvAIZBrRhZIPqRGNkULWSwEHLQbyaiKNkVsQqXgqjbQAMLwcQpHUHSdLBFNlfQlNTJwEjvwzgoMzEoixxNKhwgtTiaojerLTvgJSEyZNIMwwPNlDgtZvDEIWaFaeQnAhgWiHQxPNSaojKxeXYrlpWXtwgWmsGvAqEXoFovcaZfIEzSkrJrNYlCIFkvqXpfqpkzTHnBNkvDdBHJzOCQVfTzDYpXqtsfIkIzwkYDAYOFxgpZRQKRaDlqLcYGroDRcmujoijIiPyHCtwkkplkLasdxgDtUFnCgbyPEDVYHbaThFpMGNhfcToUxhsVKyRIzWBTLtUmREaixwDmghtPXOTJgfpHUAvaDENdfPXZQHIBPFKzWLdlhNOCFDNZZqdbPIALOLwdGLwxMTfnPTNzQoaXPApfQwSMeWLkLcBtEHgKMrwTkHKNspBxteIGxcOsecHPiAzabIqYqhPNKfisNNSAfMWKkuiXmvywMPTSSGmCAocaTLVvGibaPtwwnIyoqgZNgUsQvpLNCykqChassFfvTIvLrEQSeBsKuWEUrlHWNWDYoXHhwZdZcGsGvlbnbYEnRSRgEBqFfhVAhbhmQatgpRRDEPBaCpylpwGlGZVIPfhMe', false);
        get_14 = objectStore_5390.get(KeyRange_50);
    }
    catch (e){
    }

    var count_13 = objectStore_5390.count();
    var count_14;
    try{
        KeyRange_52 = IDBKeyRange.bound('AMDlPUXFWayrCYIZrlWUgCWfgHzHXPGdOOQYzeECFTvhJbzLYGZLJWNmrSceNVxMXbpUADYMUUZuJcPjmXaxnzJQGAGffgPSWdmBXMBRHywPbyHiqxWlBXIuTYWYnYrVFfMKgFnLowXdCTgpmmrYKXphCJIWZDjeQvRuLJrASGhAsUNsWCLEyXHwHxIScMwmJyGWTzWyoTEEakLhtNJtlEgnkpfoIgXZFtFcXzJIRjstaviHbDHBtENJNTYYZSYeKwekRmSyFxjaSvxGSVKJIsnsnULBUWVTBxrNTOewIvXhHRUoElbpjWSkpBEhlGFYLbWeQTYEprowLFiQvtzUMSQOJyMkPNAzkxEBLVZZPYygdqcIgPpPaeaqPEuurUgiLhDPjVkTglKluwxGbYPHyAGnzsrmNkMfMfAmttIdXkBFZEbUnvIJpuXvOHYdfqfXDHECeQwoXsfSPjbOWCnYmCxtiUJlvqepTbwMq', 'BHtSmvrbhkJdgfOABwZOgEvRjLWdWqGntOaNIJkILqXncxUeBeIBBvLGQwOothYtsJKXgWsQXuCbYXVjAHbSeQuhHkKevCYOYLTZukIsfkWLrFoECJZaAFPjXVUcNeHBsZtKwAPgqizWMrkzMhCqYJvAIZBrRhZIPqRGNkULWSwEHLQbyaiKNkVsQqXgqjbQAMLwcQpHUHSdLBFNlfQlNTJwEjvwzgoMzEoixxNKhwgtTiaojerLTvgJSEyZNIMwwPNlDgtZvDEIWaFaeQnAhgWiHQxPNSaojKxeXYrlpWXtwgWmsGvAqEXoFovcaZfIEzSkrJrNYlCIFkvqXpfqpkzTHnBNkvDdBHJzOCQVfTzDYpXqtsfIkIzwkYDAYOFxgpZRQKRaDlqLcYGroDRcmujoijIiPyHCtwkkplkLasdxgDtUFnCgbyPEDVYHbaThFpMGNhfcToUxhsVKyRIzWBTLtUmREaixwDmghtPXOTJgfpHUAvaDENdfPXZQHIBPFKzWLdlhNOCFDNZZqdbPIALOLwdGLwxMTfnPTNzQoaXPApfQwSMeWLkLcBtEHgKMrwTkHKNspBxteIGxcOsecHPiAzabIqYqhPNKfisNNSAfMWKkuiXmvywMPTSSGmCAocaTLVvGibaPtwwnIyoqgZNgUsQvpLNCykqChassFfvTIvLrEQSeBsKuWEUrlHWNWDYoXHhwZdZcGsGvlbnbYEnRSRgEBqFfhVAhbhmQatgpRRDEPBaCpylpwGlGZVIPfhMe', true, true);
        count_14 = objectStore_5390.count(KeyRange_52);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_54 = IDBKeyRange.bound('JkLTVfCLcfjyoBhmXCvtmPtUXNRHWcabozjwrfjCtlPVrdVUqWQhJoXQWPWadwjyaIEIiIcsrMuOzWimctSOjjmVUziWixFGeuuZADsQEvJVLVufMLuzzyajFbTGEelhsAfiSXnHMnrEVvQjeDaarZpSjTYQxOFJwxUmnKzeenEjgtgZWWgXNBSSFsxvAgGYgXtzxoRGpsQpnMrmjttbhUuwDMwdHBMbkyOSOmdwuZMfLFqnMOfJUfoMtHcaDMAcKNewTqIASZRifSpqyVfldr', 'AMDlPUXFWayrCYIZrlWUgCWfgHzHXPGdOOQYzeECFTvhJbzLYGZLJWNmrSceNVxMXbpUADYMUUZuJcPjmXaxnzJQGAGffgPSWdmBXMBRHywPbyHiqxWlBXIuTYWYnYrVFfMKgFnLowXdCTgpmmrYKXphCJIWZDjeQvRuLJrASGhAsUNsWCLEyXHwHxIScMwmJyGWTzWyoTEEakLhtNJtlEgnkpfoIgXZFtFcXzJIRjstaviHbDHBtENJNTYYZSYeKwekRmSyFxjaSvxGSVKJIsnsnULBUWVTBxrNTOewIvXhHRUoElbpjWSkpBEhlGFYLbWeQTYEprowLFiQvtzUMSQOJyMkPNAzkxEBLVZZPYygdqcIgPpPaeaqPEuurUgiLhDPjVkTglKluwxGbYPHyAGnzsrmNkMfMfAmttIdXkBFZEbUnvIJpuXvOHYdfqfXDHECeQwoXsfSPjbOWCnYmCxtiUJlvqepTbwMq', true, false);
        get_15 = objectStore_5390.get(KeyRange_54);
    }
    catch (e){
    }

    txn_8154.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8154.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8154.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8989')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};