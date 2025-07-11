let db;
const openRequest = window.indexedDB.open('str_1011', 7034233128190372)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4680', {keypath: 'JAGkSuIukrNikafddvyYQaTyjKDsxzuIYguDlrTtvyvNWAkRakUslVWPBUJfKboqUOKoQICuLNtqrRjEpFQaamBaXjBAuJQpGhLmbUVbPEGPlYOMXqtmGxyNMl'});
    var objectStore_1 = db.createObjectStore('objectStore_4681', {keypath: 'JxAxBQeDwtIWzyoFIfggrfvCUyCVortPOJOLHUTDMzLiTkXRuZUWtFMkmKZujriCapFxCqjFiFkocukMPAETQYFfGBiCSVLtsYzRABUodkpDsAIoEltxZLZgdwxEXlppPbLePcvCIeZEXoQRLxVSPkZeyOpXnCuuukJKzDshiwwvOUWisgYlElcRIhFWXqukrinUhlITZyUpeboWxYFJBBuMKSUEDlfkRRIPZAUVqKjcaOnSTCHMzsztrqFpNuVKdIlZmUKSarBytZuehaqSUysfiUoGk'});
    var put_0 = objectStore_1.put({f0_g: '<string>', f1_g: '<array>', f2_m: '<string>', f3_q: '<boolean>', f4_i: '<object>', f5_p: '<array>', f6_d: '<null>', f7_j: '<object>', f8_b: '<number>', f9_r: '<number>', f10_h: '<string>', f11_f: '<boolean>', f12_m: '<string>', f13_t: '<object>', f14_x: '<number>', f15_b: '<object>', f16_o: '<array>', f17_i: '<array>', f18_k: '<array>', f19_u: '<object>', f20_x: '<boolean>', f21_l: '<array>', f22_g: '<number>', f23_e: '<number>', f24_x: '<null>', f25_g: '<null>', f26_k: '<boolean>', f27_n: '<number>', f28_z: '<string>', f29_v: '<boolean>', f30_o: '<null>', f31_t: '<number>', f32_x: '<boolean>', f33_w: '<boolean>', f34_v: '<string>', f35_c: '<null>', f36_o: '<boolean>', f37_e: '<null>', f38_a: '<array>', f39_j: '<number>', f40_y: '<array>', f41_o: '<number>', f42_k: '<number>', f43_x: '<array>', f44_x: '<array>', f45_m: '<string>', f46_s: '<array>', f47_g: '<object>', f48_p: '<boolean>', f49_f: '<object>', f50_l: '<null>', f51_p: '<boolean>', f52_w: '<array>', f53_e: '<string>', f54_q: '<object>', f55_w: '<null>', f56_z: '<string>', f57_n: '<string>', f58_a: '<number>', f59_g: '<null>', f60_l: '<object>', f61_v: '<boolean>', f62_v: '<object>', f63_v: '<string>', f64_p: '<object>', f65_z: '<null>', f66_p: '<array>', f67_f: '<array>', f68_t: '<number>', f69_g: '<string>', f70_b: '<object>', f71_i: '<number>', f72_l: '<null>', f73_u: '<null>', f74_y: '<null>', f75_w: '<object>', f76_f: '<boolean>', f77_d: '<number>', f78_j: '<array>', f79_j: '<null>', f80_y: '<number>', f81_y: '<string>', f82_r: '<object>', f83_m: '<boolean>', f84_t: '<boolean>', f85_q: '<number>', f86_c: '<number>', f87_e: '<object>', f88_j: '<null>', f89_b: '<string>', f90_b: '<string>', f91_k: '<object>', f92_f: '<string>', f93_n: '<null>', f94_m: '<null>', f95_w: '<array>'}, 'kyKHdCzCatHaFNkWCEWCaaefIEjiuOehJYuZxOFkOierCHNyaiXrjjToPVpqESjqtMKKZoqoLyrzAMRHLVHskLKcsgYEspQWNgeOVERXUhNrAEpWLhwkaTpMloLVaXJFfQeLeYLbSuFwNUgApDTFttowtxRMnGMwuNsQapzsOhulBYXcHEdwGprhyIVYZTxMlIcWOMrHKuxRabnsLNjPtDtBdWnIWOJSuwMXvaTLMsBXMEbziwRGQZuDRxGBIiGVoyCOarNtROtqcPbOFewrtTlTnBsuydrWpeGtaxZNEXarQjrnhsCbEcsHPCDecKZiuwXCMNtwUVTdeOyNReJJrgfWdQNYcPgVbZMLQapYRUPoszGwTzMKEtaywZBnbuZxyOrvzQRzTivgMPwUWnkHpZOwtMPeaaRrSFnyqwMZBwtT');
    var count_0 = objectStore_1.count();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('kyKHdCzCatHaFNkWCEWCaaefIEjiuOehJYuZxOFkOierCHNyaiXrjjToPVpqESjqtMKKZoqoLyrzAMRHLVHskLKcsgYEspQWNgeOVERXUhNrAEpWLhwkaTpMloLVaXJFfQeLeYLbSuFwNUgApDTFttowtxRMnGMwuNsQapzsOhulBYXcHEdwGprhyIVYZTxMlIcWOMrHKuxRabnsLNjPtDtBdWnIWOJSuwMXvaTLMsBXMEbziwRGQZuDRxGBIiGVoyCOarNtROtqcPbOFewrtTlTnBsuydrWpeGtaxZNEXarQjrnhsCbEcsHPCDecKZiuwXCMNtwUVTdeOyNReJJrgfWdQNYcPgVbZMLQapYRUPoszGwTzMKEtaywZBnbuZxyOrvzQRzTivgMPwUWnkHpZOwtMPeaaRrSFnyqwMZBwtT', 'kyKHdCzCatHaFNkWCEWCaaefIEjiuOehJYuZxOFkOierCHNyaiXrjjToPVpqESjqtMKKZoqoLyrzAMRHLVHskLKcsgYEspQWNgeOVERXUhNrAEpWLhwkaTpMloLVaXJFfQeLeYLbSuFwNUgApDTFttowtxRMnGMwuNsQapzsOhulBYXcHEdwGprhyIVYZTxMlIcWOMrHKuxRabnsLNjPtDtBdWnIWOJSuwMXvaTLMsBXMEbziwRGQZuDRxGBIiGVoyCOarNtROtqcPbOFewrtTlTnBsuydrWpeGtaxZNEXarQjrnhsCbEcsHPCDecKZiuwXCMNtwUVTdeOyNReJJrgfWdQNYcPgVbZMLQapYRUPoszGwTzMKEtaywZBnbuZxyOrvzQRzTivgMPwUWnkHpZOwtMPeaaRrSFnyqwMZBwtT', false, true);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var index_3132 = objectStore_0.createIndex('index_3132', 'test', {unique: false, multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_4682', {autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    var index_0 = objectStore_0.index('index_3132');
    var clear_1 = objectStore_2.clear();
    var add_0 = objectStore_0.add({f0_i: '<number>', f1_a: '<string>', f2_d: '<null>', f3_h: '<boolean>', f4_g: '<number>', f5_i: '<object>', f6_z: '<boolean>', f7_q: '<number>', f8_r: '<number>'}, 'lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub');
    var objectStore_3 = db.createObjectStore('objectStore_4683');
    var add_1 = objectStore_1.add({f0_f: '<string>', f1_j: '<object>', f2_i: '<number>', f3_n: '<array>', f4_s: '<string>', f5_w: '<null>'}, 'QZMICpCnONjdDWoPpKeHicQJMPohyvQcnuPqvzgvFXIQhqQzVAsCsEVMUCGCsPGNRdYhaYgHBASQCDPasSHtAlQHDLFlFLnxFqQlVEWIjEZgNjxoSLDVDzTjNCssfCyDDhWkXjvhViwwqMasysKGpTRhBYWZfcqgJEAxXAqERNyaZOofnFtEPMkXxLOvMgcuNvQNouyymDKfMrRrkYYxHODgfQCYrcHeXCtHLHAilDyWxcJaHlDoNfhKftLiLOaQzbYuHRMMzUZzCcqGJwPjIBUXgYchkUtgjvhQhpTKjjfwmXkWGspVuKknpdSOGFGbcUEJyIoRZqquZLgfCVeSVmyNwavKeqzlZldOQeUADsQCChoobUazWduWENhEWFamaSobgfgOfNkDZVAtGlbencyORGIBKwAerjajPKwmaCZTbNlmXjqSZNAUvvWHabxxphrbkFZtbOSNvRysdWHnpHvbtRZChdEVDzFzjvwnEJDPni');
    var count_1 = objectStore_0.count();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7045 = db.transaction(['objectStore_4682'], 'readwrite', {durability:"relaxed"})
    var objectStore_4682 = txn_7045.objectStore('objectStore_4682');
    var add_2 = objectStore_4682.add({f0_r: '<object>', f1_t: '<array>', f2_s: '<object>'}, 'BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji');
    var put_1 = objectStore_4682.put({f0_e: '<object>', f1_g: '<boolean>', f2_m: '<string>', f3_g: '<null>'}, 'UJuQSrkQFeIXZiTYfSuDjVdRJDGWyyZmHIRZQxfcrnXaNuzhFLIbhnXwThNDrHzAKZEsloXwKKEyWecGblqARNDvakwtFlLRjzbOuejFBfyAQuYZjRgzlCaWmMnwhuOlPblYwjTvkuxWjQSlHgryBcBDLcERoHyeczPwmbgEqHVNTcBBFvSSFEbotOEqvJWmmueHKeMvkDpPkgyaDHlqyxuySCyEUwQEcSmAIZGBwtUykILISYzpXFMFcnHyyoRqRHIZkyDlgodEybNJAEDTtVArLDNiLudQONCwVhHXXXZkGqItFhpgluiRGEthzrlfFHsONtwcyaCCRMtoOXGBQKNEOPffvMkKbqOsCOqeTutXExJGWMUouRTYctbHdFQMoWhshCRzjcCoJWmjZhQvtVCouasTpQmfuMRiDRhkTVRrivkMFtOohZPKBLZBhXmZbacwtEAEpbfNKEpGReJBfWZcFcmuLguenPqlRvucpEssOYqwtDkLRXBKydHMbCHsCGdOIfFlWDceftmSPHaXGvpWcEeNALQoPLujfrDQXUgJRNGUaBEUvzZeIALvqFueTFMOcwHBJDfjhJLTIyuXwfQROKlcEfdpSxDjBBNLGeLigBDXbAJBvsmAAfyxwlAHaCauJUCmQAbOisaZYkDBJnbOtjuXgLamZGLnjhCSKjKbmnrKDbRHuWAyxgZFCPUbTpPdDorkwGSCWPDDcggVyZLkDReBMRutMKFylaqfROOOUxemyuigUNLwaWuJRXseWYyNurGSOieJrzHNUBGQSMuCnnPfuHdsyHGdthIjyDUPaPTsJLbBfXPJYfwpfNyONNsFzaNbSqRgnyfzzgcrSHeohLpapITyNinZHQlqDgOVDXuEXxEFUeaB');
    var add_3 = objectStore_4682.add({f0_q: '<null>', f1_j: '<null>', f2_x: '<string>', f3_v: '<object>', f4_u: '<number>', f5_v: '<null>', f6_h: '<object>', f7_l: '<object>'}, 'yssRIWThYPlXsDWnJtjuLZuXGgyKcwqHOPzwuNndhVAavFYwMqSwDAGPNWlcEgieYMiybZpSusmVEEyRWnjzsLVhFvAqywNVUedgXcZMOFAYiRkYOrwOGigePDfNkchZImNeThoCBDBtSlKiSUiJvPdOzrdpjzPsEOlyYBZRwSSXrBZSNNzKSOmoGzWyrcVoBwsqLlOvVXiyNKmKctUmbZVhraGAQyRYCuOiDFBsoXGFYrbTPcmFTvfelEEIucdxxKoBvlvOZbVpkBxbbxeFtiFsSvgXNQwOABAwhGPDQyHqtwKnWLcQxkPhHKaftmyQjcgezwlTTFZFxvuhTnLXrxoFOePgQMeXrNqjUnQQau');
    var count_2 = objectStore_4682.count();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji', 'yssRIWThYPlXsDWnJtjuLZuXGgyKcwqHOPzwuNndhVAavFYwMqSwDAGPNWlcEgieYMiybZpSusmVEEyRWnjzsLVhFvAqywNVUedgXcZMOFAYiRkYOrwOGigePDfNkchZImNeThoCBDBtSlKiSUiJvPdOzrdpjzPsEOlyYBZRwSSXrBZSNNzKSOmoGzWyrcVoBwsqLlOvVXiyNKmKctUmbZVhraGAQyRYCuOiDFBsoXGFYrbTPcmFTvfelEEIucdxxKoBvlvOZbVpkBxbbxeFtiFsSvgXNQwOABAwhGPDQyHqtwKnWLcQxkPhHKaftmyQjcgezwlTTFZFxvuhTnLXrxoFOePgQMeXrNqjUnQQau', false, true);
        get_1 = objectStore_4682.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_2 = objectStore_4682.clear();
    var put_2 = objectStore_4682.put({f0_y: '<string>', f1_t: '<number>', f2_b: '<number>', f3_j: '<null>', f4_i: '<object>'}, 'yUesapTGrJomeqPqlItjSrvlayUhHGQMDEIfTQIRPyLYRSMWBUpwyInhzsdoJxIEzOvtXjJsfBMPjnWozFRGnIfXakyTFeBoxKcbIkItlPbNSUGPyzOMbODizfFnHyAsXWXEJZLaxtGUDWwIxWlKarGMchezDQrWscykOhheNrpdLRsXaOYgKswwhIbZMiuGwhZMONYACZRQKctCNxcVEoOsgcHGTbYuDJDnCyREdkeizxyIucvmCbIwzYvyxSrZdmNUgJnPmbbAYrafjqlpZNSJNrRivdrJxKskUhDgkIfltSqCiGdWGvAQnYspeNlqGBxkjCdwfDWqTLAbusXJLilLRypWmWcRyHBiOazkReaBpNetwIkKhcxUKjfOQPeRieHuZYYAYzXwePiKkeHOpMGeVxRCarTcfZOzACPpLIlppbQiYBGoMTicSiHVxHbRVEXuvPEXrRSYCJBFZbjmLLtPIJKdyiHhWJrmBwBBfWzntwaFHSHFbioggnSqEBWHFQzrdukASbAEXBAvOqjVsgWSoiuknUVRfTndvnaFcQlVVGFvpvXfTpWZQzhLmOzHSPLYSJQRclxTfLXiXZLwFWMnAhAjvgOweqESaXlpnUIWwOgChsbUjIivkKCXuhLMjYvfsSfBRdkLpwPqSdxHDRCbTRoqGNqAAbyCFksmjpVHoDxGyorfHKGwxrtnEyahPStiBcKwAjvSWRNEtCjWRVgzcdiXliFsnQrVDoRVespppytZkkkXMqUJaIYHCbVdZMDXezlSENcsFGkevfxgQITPDYolNCQfPbDxZRICAEVquywOfCMnjCIvrXROkAdpwRMPTmLLWywqNoCbBaNIyUYcsMLmSZiAKfwmWyxkBK');
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('yUesapTGrJomeqPqlItjSrvlayUhHGQMDEIfTQIRPyLYRSMWBUpwyInhzsdoJxIEzOvtXjJsfBMPjnWozFRGnIfXakyTFeBoxKcbIkItlPbNSUGPyzOMbODizfFnHyAsXWXEJZLaxtGUDWwIxWlKarGMchezDQrWscykOhheNrpdLRsXaOYgKswwhIbZMiuGwhZMONYACZRQKctCNxcVEoOsgcHGTbYuDJDnCyREdkeizxyIucvmCbIwzYvyxSrZdmNUgJnPmbbAYrafjqlpZNSJNrRivdrJxKskUhDgkIfltSqCiGdWGvAQnYspeNlqGBxkjCdwfDWqTLAbusXJLilLRypWmWcRyHBiOazkReaBpNetwIkKhcxUKjfOQPeRieHuZYYAYzXwePiKkeHOpMGeVxRCarTcfZOzACPpLIlppbQiYBGoMTicSiHVxHbRVEXuvPEXrRSYCJBFZbjmLLtPIJKdyiHhWJrmBwBBfWzntwaFHSHFbioggnSqEBWHFQzrdukASbAEXBAvOqjVsgWSoiuknUVRfTndvnaFcQlVVGFvpvXfTpWZQzhLmOzHSPLYSJQRclxTfLXiXZLwFWMnAhAjvgOweqESaXlpnUIWwOgChsbUjIivkKCXuhLMjYvfsSfBRdkLpwPqSdxHDRCbTRoqGNqAAbyCFksmjpVHoDxGyorfHKGwxrtnEyahPStiBcKwAjvSWRNEtCjWRVgzcdiXliFsnQrVDoRVespppytZkkkXMqUJaIYHCbVdZMDXezlSENcsFGkevfxgQITPDYolNCQfPbDxZRICAEVquywOfCMnjCIvrXROkAdpwRMPTmLLWywqNoCbBaNIyUYcsMLmSZiAKfwmWyxkBK', 'BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji', false, false);
        delete_0 = objectStore_4682.delete(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('yssRIWThYPlXsDWnJtjuLZuXGgyKcwqHOPzwuNndhVAavFYwMqSwDAGPNWlcEgieYMiybZpSusmVEEyRWnjzsLVhFvAqywNVUedgXcZMOFAYiRkYOrwOGigePDfNkchZImNeThoCBDBtSlKiSUiJvPdOzrdpjzPsEOlyYBZRwSSXrBZSNNzKSOmoGzWyrcVoBwsqLlOvVXiyNKmKctUmbZVhraGAQyRYCuOiDFBsoXGFYrbTPcmFTvfelEEIucdxxKoBvlvOZbVpkBxbbxeFtiFsSvgXNQwOABAwhGPDQyHqtwKnWLcQxkPhHKaftmyQjcgezwlTTFZFxvuhTnLXrxoFOePgQMeXrNqjUnQQau', true);
        getAll_0 = objectStore_4682.getAll(KeyRange_6, 2867249417);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('yssRIWThYPlXsDWnJtjuLZuXGgyKcwqHOPzwuNndhVAavFYwMqSwDAGPNWlcEgieYMiybZpSusmVEEyRWnjzsLVhFvAqywNVUedgXcZMOFAYiRkYOrwOGigePDfNkchZImNeThoCBDBtSlKiSUiJvPdOzrdpjzPsEOlyYBZRwSSXrBZSNNzKSOmoGzWyrcVoBwsqLlOvVXiyNKmKctUmbZVhraGAQyRYCuOiDFBsoXGFYrbTPcmFTvfelEEIucdxxKoBvlvOZbVpkBxbbxeFtiFsSvgXNQwOABAwhGPDQyHqtwKnWLcQxkPhHKaftmyQjcgezwlTTFZFxvuhTnLXrxoFOePgQMeXrNqjUnQQau');
        getAll_0 = objectStore_4682.getAll(KeyRange_7);
    }

    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji', 'BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji', true, false);
        delete_1 = objectStore_4682.delete(KeyRange_8);
    }
    catch (e){
    }

    txn_7045.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7045.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7045.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7046 = db.transaction(['objectStore_4680', 'objectStore_4681'], 'readonly', {durability:"strict"})
    var objectStore_4680 = txn_7046.objectStore('objectStore_4680');
    var count_3 = objectStore_4680.count();
    var count_4;
    try{
        KeyRange_10 = IDBKeyRange.only('lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub');
        count_4 = objectStore_4680.count(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', 'lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', false, true);
        get_2 = objectStore_4680.get(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', true);
        get_3 = objectStore_4680.get(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_4680.getAllKeys(3005319892);
    var count_5 = objectStore_4680.count();
    var count_6;
    try{
        KeyRange_16 = IDBKeyRange.bound('lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', 'lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', true, true);
        count_6 = objectStore_4680.count(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_4680.getAllKeys(1200928089);
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', 'lWvJUCdcbDFZKMChbFHECFHDnnplvJVVVwVzYHPYCGWZVtHkHnNIzOsGfsZcZFBaTCRtwobqQXtAqSrNEmURbODhXxyRXpBcRCzGjyGujnifySsMkUoWQAQLRhfDisGuwphmXzGuVRGkssLUNPWllkEmBzKIuxmCzRAqhsIoiVcHWPDGmlAUcPsNZXlCNGVSuWwlbcDDjFkBpGBizMDCuPnviKvpibUsqxonZsccsGcnVrqslOeUXZqtLKMTKRYjQCxwHBmAUyLFmlGKFtewLsYfjpSNXTsDeMyMeKYgtxsWuQdUtCaWTTXyFtgkeSFduAdOyvkiNhevbkKRaeZLiaXuKZtBIClfnQLfebtDFLFruvvcHzOcqgfFXTHMaJugNMVthGWWyRDOHaPYeJHlCqMiHBGyKfXhYQTRKANOrDvwlKHtrrQROlwyBWuwlQfAYmhTQUfvlZaMPwAuIIuElyNmkcjpTnVPErtlQxWbjdookKfsDCqMNIOqtStWWpVKUdRQTbKZIDwWBdFOpgqYbxTKtxmoCub', false, false);
        get_4 = objectStore_4680.get(KeyRange_18);
    }
    catch (e){
    }

    var index_1 = objectStore_4680.index('index_3132');
    txn_7046.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7046.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7046.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7047 = db.transaction(['objectStore_4683'], 'readonly', {durability:"default"})
    var objectStore_4683 = txn_7047.objectStore('objectStore_4683');
    txn_7047.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7047.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7047.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7048 = db.transaction(['objectStore_4682', 'objectStore_4683', 'objectStore_4680'], 'readonly', {durability:"strict"})
    var objectStore_4682 = txn_7048.objectStore('objectStore_4682');
    var getAllKeys_2 = objectStore_4682.getAllKeys();
    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('UJuQSrkQFeIXZiTYfSuDjVdRJDGWyyZmHIRZQxfcrnXaNuzhFLIbhnXwThNDrHzAKZEsloXwKKEyWecGblqARNDvakwtFlLRjzbOuejFBfyAQuYZjRgzlCaWmMnwhuOlPblYwjTvkuxWjQSlHgryBcBDLcERoHyeczPwmbgEqHVNTcBBFvSSFEbotOEqvJWmmueHKeMvkDpPkgyaDHlqyxuySCyEUwQEcSmAIZGBwtUykILISYzpXFMFcnHyyoRqRHIZkyDlgodEybNJAEDTtVArLDNiLudQONCwVhHXXXZkGqItFhpgluiRGEthzrlfFHsONtwcyaCCRMtoOXGBQKNEOPffvMkKbqOsCOqeTutXExJGWMUouRTYctbHdFQMoWhshCRzjcCoJWmjZhQvtVCouasTpQmfuMRiDRhkTVRrivkMFtOohZPKBLZBhXmZbacwtEAEpbfNKEpGReJBfWZcFcmuLguenPqlRvucpEssOYqwtDkLRXBKydHMbCHsCGdOIfFlWDceftmSPHaXGvpWcEeNALQoPLujfrDQXUgJRNGUaBEUvzZeIALvqFueTFMOcwHBJDfjhJLTIyuXwfQROKlcEfdpSxDjBBNLGeLigBDXbAJBvsmAAfyxwlAHaCauJUCmQAbOisaZYkDBJnbOtjuXgLamZGLnjhCSKjKbmnrKDbRHuWAyxgZFCPUbTpPdDorkwGSCWPDDcggVyZLkDReBMRutMKFylaqfROOOUxemyuigUNLwaWuJRXseWYyNurGSOieJrzHNUBGQSMuCnnPfuHdsyHGdthIjyDUPaPTsJLbBfXPJYfwpfNyONNsFzaNbSqRgnyfzzgcrSHeohLpapITyNinZHQlqDgOVDXuEXxEFUeaB', 'yUesapTGrJomeqPqlItjSrvlayUhHGQMDEIfTQIRPyLYRSMWBUpwyInhzsdoJxIEzOvtXjJsfBMPjnWozFRGnIfXakyTFeBoxKcbIkItlPbNSUGPyzOMbODizfFnHyAsXWXEJZLaxtGUDWwIxWlKarGMchezDQrWscykOhheNrpdLRsXaOYgKswwhIbZMiuGwhZMONYACZRQKctCNxcVEoOsgcHGTbYuDJDnCyREdkeizxyIucvmCbIwzYvyxSrZdmNUgJnPmbbAYrafjqlpZNSJNrRivdrJxKskUhDgkIfltSqCiGdWGvAQnYspeNlqGBxkjCdwfDWqTLAbusXJLilLRypWmWcRyHBiOazkReaBpNetwIkKhcxUKjfOQPeRieHuZYYAYzXwePiKkeHOpMGeVxRCarTcfZOzACPpLIlppbQiYBGoMTicSiHVxHbRVEXuvPEXrRSYCJBFZbjmLLtPIJKdyiHhWJrmBwBBfWzntwaFHSHFbioggnSqEBWHFQzrdukASbAEXBAvOqjVsgWSoiuknUVRfTndvnaFcQlVVGFvpvXfTpWZQzhLmOzHSPLYSJQRclxTfLXiXZLwFWMnAhAjvgOweqESaXlpnUIWwOgChsbUjIivkKCXuhLMjYvfsSfBRdkLpwPqSdxHDRCbTRoqGNqAAbyCFksmjpVHoDxGyorfHKGwxrtnEyahPStiBcKwAjvSWRNEtCjWRVgzcdiXliFsnQrVDoRVespppytZkkkXMqUJaIYHCbVdZMDXezlSENcsFGkevfxgQITPDYolNCQfPbDxZRICAEVquywOfCMnjCIvrXROkAdpwRMPTmLLWywqNoCbBaNIyUYcsMLmSZiAKfwmWyxkBK', false, true);
        count_7 = objectStore_4682.count(KeyRange_20);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.only('yUesapTGrJomeqPqlItjSrvlayUhHGQMDEIfTQIRPyLYRSMWBUpwyInhzsdoJxIEzOvtXjJsfBMPjnWozFRGnIfXakyTFeBoxKcbIkItlPbNSUGPyzOMbODizfFnHyAsXWXEJZLaxtGUDWwIxWlKarGMchezDQrWscykOhheNrpdLRsXaOYgKswwhIbZMiuGwhZMONYACZRQKctCNxcVEoOsgcHGTbYuDJDnCyREdkeizxyIucvmCbIwzYvyxSrZdmNUgJnPmbbAYrafjqlpZNSJNrRivdrJxKskUhDgkIfltSqCiGdWGvAQnYspeNlqGBxkjCdwfDWqTLAbusXJLilLRypWmWcRyHBiOazkReaBpNetwIkKhcxUKjfOQPeRieHuZYYAYzXwePiKkeHOpMGeVxRCarTcfZOzACPpLIlppbQiYBGoMTicSiHVxHbRVEXuvPEXrRSYCJBFZbjmLLtPIJKdyiHhWJrmBwBBfWzntwaFHSHFbioggnSqEBWHFQzrdukASbAEXBAvOqjVsgWSoiuknUVRfTndvnaFcQlVVGFvpvXfTpWZQzhLmOzHSPLYSJQRclxTfLXiXZLwFWMnAhAjvgOweqESaXlpnUIWwOgChsbUjIivkKCXuhLMjYvfsSfBRdkLpwPqSdxHDRCbTRoqGNqAAbyCFksmjpVHoDxGyorfHKGwxrtnEyahPStiBcKwAjvSWRNEtCjWRVgzcdiXliFsnQrVDoRVespppytZkkkXMqUJaIYHCbVdZMDXezlSENcsFGkevfxgQITPDYolNCQfPbDxZRICAEVquywOfCMnjCIvrXROkAdpwRMPTmLLWywqNoCbBaNIyUYcsMLmSZiAKfwmWyxkBK');
        get_5 = objectStore_4682.get(KeyRange_22);
    }
    catch (e){
    }

    var count_8 = objectStore_4682.count();
    var getAllKeys_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('BAghkMiDgQZhzabQaZulyQmfTHSeNLEYzvQRFbdmlWTFhSueRDtUfDvdyVhACLNavfsmvayptkfjfqyQtGpFkbicYVdGroAqbpiSOPiaYcGvCorQFAUKooRNnZlDeZadisYmBkjaqAsVREPVTiYkfnGgFTKBdPqClQzPYfWrAwHdQVznZZLJnvkGUitujwJhJiINkVyVZIjtxRFiSAiEbcyXjVeYzJtxrqWEquOWycHZzFlMyOcHuSEbnPzmERRfIgkfgcCMhsFQEsnBMzISmTHRhMfCJimHbMkSBFByfYelryJbJjvTPZzUTEelStBCBxoSlONbobRnmrnIqEMJFXeLxOzHGOdrFFLOcwxpXNAKyviiQYZTXTfdWMzpvvPvKgTwWcDhKGFdpzQZprymPAgtLTysoOIvUbJNaFAxnWPpyEsWtEQYXxfpdACmmeGFpXIZKqzLjRvnuuQVayrgzttcCnicfmMdganUXwaInbMFuwEcvlxOEzslFoIQeSAokcEoCxUZLGjWyRnVWJyoDeJdNzEruJnzzkji', 'yUesapTGrJomeqPqlItjSrvlayUhHGQMDEIfTQIRPyLYRSMWBUpwyInhzsdoJxIEzOvtXjJsfBMPjnWozFRGnIfXakyTFeBoxKcbIkItlPbNSUGPyzOMbODizfFnHyAsXWXEJZLaxtGUDWwIxWlKarGMchezDQrWscykOhheNrpdLRsXaOYgKswwhIbZMiuGwhZMONYACZRQKctCNxcVEoOsgcHGTbYuDJDnCyREdkeizxyIucvmCbIwzYvyxSrZdmNUgJnPmbbAYrafjqlpZNSJNrRivdrJxKskUhDgkIfltSqCiGdWGvAQnYspeNlqGBxkjCdwfDWqTLAbusXJLilLRypWmWcRyHBiOazkReaBpNetwIkKhcxUKjfOQPeRieHuZYYAYzXwePiKkeHOpMGeVxRCarTcfZOzACPpLIlppbQiYBGoMTicSiHVxHbRVEXuvPEXrRSYCJBFZbjmLLtPIJKdyiHhWJrmBwBBfWzntwaFHSHFbioggnSqEBWHFQzrdukASbAEXBAvOqjVsgWSoiuknUVRfTndvnaFcQlVVGFvpvXfTpWZQzhLmOzHSPLYSJQRclxTfLXiXZLwFWMnAhAjvgOweqESaXlpnUIWwOgChsbUjIivkKCXuhLMjYvfsSfBRdkLpwPqSdxHDRCbTRoqGNqAAbyCFksmjpVHoDxGyorfHKGwxrtnEyahPStiBcKwAjvSWRNEtCjWRVgzcdiXliFsnQrVDoRVespppytZkkkXMqUJaIYHCbVdZMDXezlSENcsFGkevfxgQITPDYolNCQfPbDxZRICAEVquywOfCMnjCIvrXROkAdpwRMPTmLLWywqNoCbBaNIyUYcsMLmSZiAKfwmWyxkBK', false, false);
        getAllKeys_3 = objectStore_4682.getAllKeys(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('yssRIWThYPlXsDWnJtjuLZuXGgyKcwqHOPzwuNndhVAavFYwMqSwDAGPNWlcEgieYMiybZpSusmVEEyRWnjzsLVhFvAqywNVUedgXcZMOFAYiRkYOrwOGigePDfNkchZImNeThoCBDBtSlKiSUiJvPdOzrdpjzPsEOlyYBZRwSSXrBZSNNzKSOmoGzWyrcVoBwsqLlOvVXiyNKmKctUmbZVhraGAQyRYCuOiDFBsoXGFYrbTPcmFTvfelEEIucdxxKoBvlvOZbVpkBxbbxeFtiFsSvgXNQwOABAwhGPDQyHqtwKnWLcQxkPhHKaftmyQjcgezwlTTFZFxvuhTnLXrxoFOePgQMeXrNqjUnQQau');
        getAllKeys_3 = objectStore_4682.getAllKeys(KeyRange_25);
    }

    var count_9 = objectStore_4682.count();
    var count_10 = objectStore_4682.count();
    txn_7048.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7048.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7048.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7049 = db.transaction(['objectStore_4683'], 'readonly', {durability:"default"})
    var objectStore_4683 = txn_7049.objectStore('objectStore_4683');
    txn_7049.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7049.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7049.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6056')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};