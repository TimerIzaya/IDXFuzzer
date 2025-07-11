let db;
const openRequest = window.indexedDB.open('str_3473', 4795352991637194)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1185');
    var put_0 = objectStore_0.put({f0_w: '<string>', f1_m: '<boolean>', f2_n: '<string>', f3_n: '<string>', f4_u: '<string>', f5_l: '<number>', f6_y: '<object>', f7_v: '<object>', f8_t: '<null>'}, 'EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs');
    var add_0 = objectStore_0.add({f0_c: '<object>'}, 'WRLmwLZjOwTozIOgNJAUfQtODxIBrtrOCdXJXKoO');
    var add_1 = objectStore_0.add({f0_x: '<null>', f1_j: '<string>', f2_o: '<object>', f3_g: '<number>', f4_i: '<number>', f5_n: '<object>', f6_d: '<object>', f7_u: '<string>', f8_d: '<number>', f9_m: '<string>', f10_y: '<string>', f11_y: '<string>', f12_l: '<null>', f13_p: '<object>', f14_k: '<string>', f15_t: '<number>', f16_s: '<string>', f17_k: '<null>', f18_j: '<number>', f19_l: '<boolean>', f20_v: '<array>', f21_m: '<boolean>', f22_o: '<boolean>', f23_d: '<boolean>', f24_l: '<null>', f25_l: '<null>', f26_h: '<array>', f27_h: '<number>', f28_r: '<array>', f29_y: '<array>', f30_r: '<array>', f31_f: '<object>', f32_m: '<number>', f33_e: '<boolean>', f34_n: '<object>', f35_f: '<array>', f36_m: '<array>', f37_c: '<number>', f38_t: '<boolean>', f39_x: '<number>', f40_y: '<array>', f41_x: '<string>', f42_e: '<string>', f43_x: '<number>', f44_k: '<string>', f45_z: '<string>', f46_d: '<string>', f47_h: '<array>', f48_x: '<number>', f49_n: '<null>', f50_q: '<boolean>', f51_v: '<object>', f52_z: '<string>', f53_n: '<string>', f54_w: '<string>', f55_y: '<null>', f56_c: '<number>'}, 'vfwYOxGyxnVyEALTUammdDkYzeGQfssbvUdWZwRvBPxEzhByACDIwLxrRkOkAEbgryWEJsTmCtijOhCWLPUtjWqQalqbhcTkhODCQeZKFUVZBGMsBxxCPtnsQhdcSKjeQLGnTreeMYbAjRCVWcxSbloyHtjLvuUGpRpYLcFLcvkTAzKAlVFzQxkOrJYETiXvproFLseZgTTPEZdGcaxYqdVERxqdmPplEiUlabkXlImYoMtcxAsWOzOMOLxyUTtzhwRuKVOjrUvpqxHcaHGHwTObKwSscrydGuheySjdAIpGRQsCaqxAEVPUSrbLxgWLYkYLOIDPyjvmfxctwycJgOxZKBWqmCRNDHrYrZdTwOasugNCchDqIFDCvIMzJtUnUPOvKEbDdHpQnKdREKNJJZFvKKjUJnHULejVShuchSc');
    var index_792 = objectStore_0.createIndex('index_792', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_1186', {autoIncrement: false});
    var put_1 = objectStore_1.put({f0_g: '<null>'}, 'qAtbpodAgVgSmhKfRPBFqUDQuCxhFUFHgNitqwehXRLCSMSntnGmZiWTThAIFIgTyfashtseEQtZoIqrnkMZhsERsPKYUWYsRTHjTPAtxAZRwFCpRavCMWOTWQjaWIgUBNaQYOJFqDWGJRCUzDzalLCqCrxKosEQusTeCDIQecvjZyFImweNfPuOmRYZKwtSuQtGDdcvkvNWiNvZhkrBGyaVEUWKxnGfiluRmeQXOGyIGOiPkgwvIJjojtvBtDjuJutnJHayGouVebHogKoTAgtbxlDDTvWXYxwfmwrPIqwqGLaGxWCQASUixTpubljXqeYUqQDiHUoDQaeimGPxDkzueRPycWyZyfqUZrCsnDrkdDGiJFFDtGKyWXUnXZmcJBVXDNjgXFCSSLGvshsHhSZfyBWxANsqjBYdJgUFGMoRWEDaubblKCzKeWprXBsZLykdyQSJrPufGvGYIHPtQqOonzCfwPtmPpZDSegQrSTYlyaARwCTegXrUloYEpBpMJEOteIRhZYOMBsjTMDsyRCZuzyqGsQHUZTKaFzaRkMVSauqhvGOiaIVxINZgyzvLcTjVlSKfNLGZXQSzpedmqZjBRKKFYTBzmfupczWwAjzGBZffKXEFwzuvcIjcrSLAPstgfRYNdeSatzgtrUIeqmoQyDFZUELRIbtDklCpNNmQkIwicdXKthGukbNYEHLxJzHgUJoBSnatyLFlADPDvefJKYtomAsjWZLufIeVQuJhlzKSQgneLIIjXBsNpkYwvqPOYywgXYkLBhKJDIoRYZLARHqAHURKaqiGMYKbmLJQsydUtRwsSFIeGneZunpfYtUAGRbBhfJAamsNnqDgUApqZzdbpPAqhjLtvCKhAxVEcMODBYanzLRdGIvGmCXnWtESNOqOCUXFVyTOIlHeeFMBEZVzCVEuByeZv');
    var add_2 = objectStore_1.add({f0_i: '<null>', f1_w: '<array>', f2_b: '<object>', f3_o: '<object>', f4_t: '<null>', f5_o: '<boolean>', f6_e: '<boolean>', f7_d: '<number>', f8_u: '<object>', f9_n: '<string>'}, 'odBMoWgJmPdKkOxGPpmxQsINdNqBvspGStPMxbWvHhrlmTtLMkZqyCQWjLnctZQvsHdwtfcmOeWqmcUmxqzORCUbjQYFpjwJKPGWrYwHxABmljDbXpFOEtGcHqCxCVMwUbJjGGyTxPqydclVcojSSTQtkwMXGfZaXgvQEyjJViyvWZByqfmxbxkPhMcIQGtZRtmVGAGQFqdmLabuYfDqqhaSMnKQtlXQVhcvlpAIGrzKcUhRyiegpAnQZXqKqjeRJNDsyWUeJHJSjtAitNeMadvOxwkgcXjMkBqnZjAHOzhVZNDvVbnpCKOwofrPGfBWnTmgWyVLIanqalVdDYCFQXcfeATZfYyuTomuZrommcrJtycTBaTxAbXYbZnPWLuvhrVxzmnaLXabwSgYUemNerDprKcUgGgqgXuGnegFFdPnjkCFJaRxVwOQyJyMVVsNjyatWXIvxdfrydFkUyRxHSJZCwBOuUwtaQgPiAphryZqKUSGLwCVFqJccawBuHSFeePxWhzuBlsfnIcCdDnFnolNigVFGzVGNsVfJqAcKLoOrPbOcmYmffeujOMTUXVIKaIXBkkXbgWZcrOUEuZdyJiywcSWQsFALoICEPyTuEPqBrlcokmbEBqWaKBBlFqovIpSSzGWNBacrGfaVinwRFvoaBqOOKIzNrbZHlyWASSXnlhddPQpEXjyUmPVRssZLgulkERMahTQZOUpfSJxEvGyxmMMgPksKVCCfsDFLFqDhjjLfaoTLkfOfiVmVQcrsnlTychAVtjneeDotBiNadfzEmRnvsTuPmvPOdjSGXZcWalcDObmUivcvVHNZhBKOjUomONWjlfZVpHYQxtNaLHcXOKGxtQFsMcxesbbMryTeDOOKIPIWmZGXPdJlRTvmYjMiYSWlZiDfKJwfbjMtBBwvTFhyQqQHfpQEPCgwMUvWIutzWyQJWOffVrttDIlPzdsybUFnlkMSHBlHkvvqhdeMzcq');
    var add_3 = objectStore_1.add({f0_v: '<null>', f1_d: '<number>', f2_d: '<boolean>', f3_z: '<object>', f4_x: '<boolean>', f5_a: '<null>'}, 'uMTUlldBmpvXrGQPIXWnbHZWwYJcQPIlIFKmImMcwffdYgbQIJnbdXXrxjAFrPjCSBXHzYQsbyGxnfyQwYsInYXlATTBLbABtwZeYVYpfpeMkkiPEXCyzzQjFAYFMSFwnrnPOYLYpWGgEatjPlKGFOgljXKrNddTOirwFXVYfZQNzylOeOiLPUBJMWKEaXFEyyqyKDcCVSrMYtUCNXjsmkUOouAnnhXGRnVQqwgTUHfHhzVRbLMzfxJTnCCmvNjzYlrMFVLPLZVIOsvnpQxOqLEXpMmDgxmqVetqMDorsAFKTVidjEDbYluYhoMcbLHfAavtAWBnlfixjuJktLGywBUpZldTfuzqLivpjCVpCQnDcrnfgzAAzNtWHMHaXSnyDlnNLJXwOZgsplSxiOAHFtODeDDSnMeRRGCtyNtzMucHqOfUXwTkpffMkOjnbwVifvNRAIJQiOiqVJBApLRZiusMnslWGPCpNdrqoiauLrfXlGIwobjvJAWfyNYlvXguXoUpylLabizXBAdLWHRPohXonQwHKClmnnTIeUPyQgrxTiwILHEuzUJEyYypTwssjlBCuDuTZlzIpqicdNoBIVxomaGCbomicyECUFoV');
    var add_4 = objectStore_1.add({f0_x: '<null>', f1_e: '<boolean>', f2_m: '<boolean>', f3_m: '<boolean>'}, 'vpaVcbaogYdTpMNvifSrWngzLjNnqFlfsTaGeUBGIeQKziawmFsBSGZnsoyCGMQggjfjiAPJXkwQMOjceuXsNPWBWvydPVnWFFrgMzpvBRnDmIxoIAuwkAywzjpOrRObSlsKKTXZKKpRrnjrLrXhMEOCGqnHudymWTiIGVIRfpORqNIiHHNAtUgpitIZjEmWwyhJmInDCTImtXgUvegSwujlCIGukVRSdPqABBfQKbQtnAZvADfsybFgrlAsjrKCljFBJXeHTUGFcknMrjvEltKZvMIvfjXmPOuBnwDumdMmbOYbbDAmolJZUTHjivPJUiQMnuzzWClPzAaUorjPbInFThRcWqWOOlIvTpPmkHkuPdUOtbXJtSpXjUuCEzEkWRTqxFzTPOFRiqhgpixoRYMEhoPvdAjqTOBScdLFLPkFGLvWVNDbPBEUIsXhNdBIuTPqTHlBrzFqJMYAxfOuFvyZgfTjkedxSsedtwFYZZjHcezCpCxVvFLWXMPUdvdMtuQaGCpyrhTPLZPZErVSZFmyMHegyOjGLsRjYkrrWJvlBITWXFrWGQdklOQYjrZKOTAKPkiPLhXDIJUNJnFkUHrysejwYyCvWfIdJLrhjIrQtUroNGZjqZOcFQjMAdmauACnZOraXDooznZGQdxJnLrsmMNXGBeXSDGiDodczlyNggTPjrmWKaJicgqOMScvzfFOHVjiMOYKIGYdOZkEguynwWPpEpcWoreBLoHLSzmMDwkzWhvaOrtaWyJxpFccEBoNYXusYHprmIIKCSDMVtDaHGNHjlvAwPWWqlqvKOoaBZOoFHJUPaGHPkFTvZAGtUocyRVfLoznRDbTplvXlNZUJpkVKlHNPBzsmNGSmRdjoatxQzYeIGxWBOwSaUjLPTWycqzsOLrJZtxOojQFnlSpOtIxQuKmIviXFiMtXFxCUFAYephdHirzlTLhHg');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('uMTUlldBmpvXrGQPIXWnbHZWwYJcQPIlIFKmImMcwffdYgbQIJnbdXXrxjAFrPjCSBXHzYQsbyGxnfyQwYsInYXlATTBLbABtwZeYVYpfpeMkkiPEXCyzzQjFAYFMSFwnrnPOYLYpWGgEatjPlKGFOgljXKrNddTOirwFXVYfZQNzylOeOiLPUBJMWKEaXFEyyqyKDcCVSrMYtUCNXjsmkUOouAnnhXGRnVQqwgTUHfHhzVRbLMzfxJTnCCmvNjzYlrMFVLPLZVIOsvnpQxOqLEXpMmDgxmqVetqMDorsAFKTVidjEDbYluYhoMcbLHfAavtAWBnlfixjuJktLGywBUpZldTfuzqLivpjCVpCQnDcrnfgzAAzNtWHMHaXSnyDlnNLJXwOZgsplSxiOAHFtODeDDSnMeRRGCtyNtzMucHqOfUXwTkpffMkOjnbwVifvNRAIJQiOiqVJBApLRZiusMnslWGPCpNdrqoiauLrfXlGIwobjvJAWfyNYlvXguXoUpylLabizXBAdLWHRPohXonQwHKClmnnTIeUPyQgrxTiwILHEuzUJEyYypTwssjlBCuDuTZlzIpqicdNoBIVxomaGCbomicyECUFoV', false);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var index_793 = objectStore_1.createIndex('index_793', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_1187');
    var put_2 = objectStore_2.put({f0_o: '<string>', f1_r: '<object>', f2_y: '<array>', f3_p: '<object>', f4_v: '<string>', f5_m: '<number>', f6_j: '<array>', f7_c: '<array>', f8_o: '<object>', f9_g: '<string>', f10_n: '<array>', f11_j: '<object>', f12_f: '<object>', f13_j: '<boolean>', f14_p: '<array>', f15_g: '<array>', f16_c: '<number>', f17_v: '<object>', f18_p: '<string>', f19_o: '<null>', f20_l: '<null>', f21_o: '<number>', f22_h: '<array>', f23_c: '<null>', f24_y: '<array>', f25_k: '<string>', f26_t: '<object>', f27_h: '<boolean>', f28_a: '<object>', f29_u: '<number>', f30_b: '<string>', f31_x: '<string>', f32_a: '<number>', f33_d: '<number>', f34_n: '<null>', f35_w: '<object>', f36_t: '<string>', f37_t: '<boolean>', f38_p: '<string>', f39_e: '<boolean>', f40_m: '<number>', f41_s: '<string>', f42_g: '<array>', f43_z: '<object>', f44_a: '<string>', f45_l: '<boolean>', f46_o: '<number>', f47_j: '<array>', f48_j: '<array>', f49_n: '<number>', f50_f: '<number>', f51_c: '<boolean>', f52_a: '<array>', f53_e: '<number>', f54_m: '<boolean>', f55_d: '<string>', f56_e: '<array>', f57_t: '<boolean>', f58_h: '<object>', f59_o: '<object>', f60_i: '<number>', f61_z: '<null>', f62_p: '<number>', f63_n: '<number>', f64_t: '<object>', f65_d: '<null>', f66_a: '<string>', f67_z: '<array>', f68_t: '<object>', f69_c: '<array>', f70_q: '<number>', f71_d: '<boolean>', f72_r: '<number>', f73_f: '<object>', f74_v: '<boolean>', f75_d: '<object>', f76_r: '<boolean>', f77_s: '<array>', f78_s: '<object>', f79_s: '<boolean>', f80_q: '<object>', f81_y: '<null>', f82_r: '<array>', f83_j: '<null>', f84_e: '<number>', f85_u: '<object>', f86_t: '<array>', f87_s: '<array>', f88_f: '<number>', f89_m: '<object>', f90_l: '<string>', f91_g: '<null>', f92_j: '<array>', f93_j: '<boolean>', f94_r: '<array>', f95_h: '<boolean>', f96_u: '<object>', f97_d: '<string>', f98_g: '<string>', f99_r: '<string>', f100_j: '<array>', f101_w: '<boolean>', f102_p: '<object>', f103_u: '<boolean>', f104_k: '<array>', f105_o: '<boolean>', f106_d: '<null>', f107_s: '<object>', f108_e: '<array>', f109_y: '<boolean>', f110_i: '<null>', f111_c: '<string>', f112_s: '<boolean>', f113_b: '<number>', f114_c: '<array>', f115_y: '<array>', f116_m: '<object>', f117_o: '<null>', f118_b: '<object>', f119_f: '<boolean>', f120_q: '<object>', f121_v: '<object>', f122_d: '<string>', f123_l: '<array>', f124_k: '<array>', f125_e: '<string>', f126_y: '<array>', f127_y: '<boolean>', f128_s: '<boolean>', f129_u: '<boolean>', f130_i: '<number>', f131_v: '<boolean>', f132_o: '<null>', f133_v: '<null>', f134_d: '<object>', f135_b: '<boolean>', f136_w: '<string>', f137_h: '<boolean>', f138_d: '<boolean>', f139_h: '<boolean>', f140_p: '<null>', f141_n: '<null>', f142_a: '<null>', f143_p: '<null>', f144_q: '<array>', f145_o: '<null>', f146_f: '<null>', f147_s: '<string>', f148_n: '<array>', f149_i: '<array>', f150_x: '<object>', f151_d: '<string>', f152_f: '<number>', f153_l: '<string>', f154_a: '<string>', f155_y: '<null>', f156_p: '<boolean>', f157_m: '<boolean>', f158_j: '<null>', f159_z: '<boolean>', f160_h: '<array>', f161_k: '<number>', f162_b: '<null>', f163_e: '<null>', f164_y: '<boolean>', f165_a: '<object>', f166_q: '<boolean>', f167_c: '<array>', f168_e: '<object>', f169_p: '<object>', f170_m: '<object>', f171_w: '<boolean>', f172_p: '<boolean>', f173_q: '<number>', f174_c: '<string>', f175_i: '<object>', f176_c: '<array>', f177_i: '<null>', f178_m: '<array>', f179_f: '<object>'}, 'aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN');
    var put_3 = objectStore_0.put({f0_n: '<array>', f1_n: '<null>', f2_z: '<array>', f3_b: '<null>', f4_q: '<null>', f5_e: '<object>'}, 'EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX');
    var index_794 = objectStore_2.createIndex('index_794', 'test', {unique: true, multiEntry: false});
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('odBMoWgJmPdKkOxGPpmxQsINdNqBvspGStPMxbWvHhrlmTtLMkZqyCQWjLnctZQvsHdwtfcmOeWqmcUmxqzORCUbjQYFpjwJKPGWrYwHxABmljDbXpFOEtGcHqCxCVMwUbJjGGyTxPqydclVcojSSTQtkwMXGfZaXgvQEyjJViyvWZByqfmxbxkPhMcIQGtZRtmVGAGQFqdmLabuYfDqqhaSMnKQtlXQVhcvlpAIGrzKcUhRyiegpAnQZXqKqjeRJNDsyWUeJHJSjtAitNeMadvOxwkgcXjMkBqnZjAHOzhVZNDvVbnpCKOwofrPGfBWnTmgWyVLIanqalVdDYCFQXcfeATZfYyuTomuZrommcrJtycTBaTxAbXYbZnPWLuvhrVxzmnaLXabwSgYUemNerDprKcUgGgqgXuGnegFFdPnjkCFJaRxVwOQyJyMVVsNjyatWXIvxdfrydFkUyRxHSJZCwBOuUwtaQgPiAphryZqKUSGLwCVFqJccawBuHSFeePxWhzuBlsfnIcCdDnFnolNigVFGzVGNsVfJqAcKLoOrPbOcmYmffeujOMTUXVIKaIXBkkXbgWZcrOUEuZdyJiywcSWQsFALoICEPyTuEPqBrlcokmbEBqWaKBBlFqovIpSSzGWNBacrGfaVinwRFvoaBqOOKIzNrbZHlyWASSXnlhddPQpEXjyUmPVRssZLgulkERMahTQZOUpfSJxEvGyxmMMgPksKVCCfsDFLFqDhjjLfaoTLkfOfiVmVQcrsnlTychAVtjneeDotBiNadfzEmRnvsTuPmvPOdjSGXZcWalcDObmUivcvVHNZhBKOjUomONWjlfZVpHYQxtNaLHcXOKGxtQFsMcxesbbMryTeDOOKIPIWmZGXPdJlRTvmYjMiYSWlZiDfKJwfbjMtBBwvTFhyQqQHfpQEPCgwMUvWIutzWyQJWOffVrttDIlPzdsybUFnlkMSHBlHkvvqhdeMzcq', false);
        count_0 = objectStore_1.count(KeyRange_2);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1790 = db.transaction(['objectStore_1185', 'objectStore_1186'], 'readonly', {durability:"relaxed"})
    var objectStore_1185 = txn_1790.objectStore('objectStore_1185');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs', 'EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', false, false);
        get_1 = objectStore_1185.get(KeyRange_4);
    }
    catch (e){
    }

    var count_1 = objectStore_1185.count();
    var count_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', 'EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', false, false);
        count_2 = objectStore_1185.count(KeyRange_6);
    }
    catch (e){
    }

    var count_3 = objectStore_1185.count();
    var count_4;
    try{
        KeyRange_8 = IDBKeyRange.only('EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs');
        count_4 = objectStore_1185.count(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs', true);
        getAllKeys_0 = objectStore_1185.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('vfwYOxGyxnVyEALTUammdDkYzeGQfssbvUdWZwRvBPxEzhByACDIwLxrRkOkAEbgryWEJsTmCtijOhCWLPUtjWqQalqbhcTkhODCQeZKFUVZBGMsBxxCPtnsQhdcSKjeQLGnTreeMYbAjRCVWcxSbloyHtjLvuUGpRpYLcFLcvkTAzKAlVFzQxkOrJYETiXvproFLseZgTTPEZdGcaxYqdVERxqdmPplEiUlabkXlImYoMtcxAsWOzOMOLxyUTtzhwRuKVOjrUvpqxHcaHGHwTObKwSscrydGuheySjdAIpGRQsCaqxAEVPUSrbLxgWLYkYLOIDPyjvmfxctwycJgOxZKBWqmCRNDHrYrZdTwOasugNCchDqIFDCvIMzJtUnUPOvKEbDdHpQnKdREKNJJZFvKKjUJnHULejVShuchSc');
        getAllKeys_0 = objectStore_1185.getAllKeys(KeyRange_11);
    }

    var count_5;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs', true);
        count_5 = objectStore_1185.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_14 = IDBKeyRange.bound('EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', 'EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', true, true);
        getAllKeys_1 = objectStore_1185.getAllKeys(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('vfwYOxGyxnVyEALTUammdDkYzeGQfssbvUdWZwRvBPxEzhByACDIwLxrRkOkAEbgryWEJsTmCtijOhCWLPUtjWqQalqbhcTkhODCQeZKFUVZBGMsBxxCPtnsQhdcSKjeQLGnTreeMYbAjRCVWcxSbloyHtjLvuUGpRpYLcFLcvkTAzKAlVFzQxkOrJYETiXvproFLseZgTTPEZdGcaxYqdVERxqdmPplEiUlabkXlImYoMtcxAsWOzOMOLxyUTtzhwRuKVOjrUvpqxHcaHGHwTObKwSscrydGuheySjdAIpGRQsCaqxAEVPUSrbLxgWLYkYLOIDPyjvmfxctwycJgOxZKBWqmCRNDHrYrZdTwOasugNCchDqIFDCvIMzJtUnUPOvKEbDdHpQnKdREKNJJZFvKKjUJnHULejVShuchSc');
        getAllKeys_1 = objectStore_1185.getAllKeys(KeyRange_15);
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('EXgSxyJHalYZjPEICQOJkzwCiazXAgLCZvFMXmIpRWJHkurJtsSIqHpdLLvkKqjtZxKdsTBwiZSgNIcfwYkpnlSULLdbJvSoaOEjErbtYPCBGcHvCucuRXxrsFbsPPWJKmQOPmjntrTykAcwCTfWepCWtvAEHSlfiiFSaCVPHVrqVyifkNuAGDUgtsTkZjCogvJxpeMFwKCeNAmkpZBBtpHtWheQPUsAPcATDrbVJlvypCVQImHrSzRNoEInWUrHYywBChVPVorFsFFdIJzHDTPCoARJzssWXWIjAEWwboteGbTTrnChfMklCnNONpuAGFSAYPwviiInUkjhdSVdNOimhNfvWIkQdCDQceoseKfbzjYOvGckZKLZTNHalDFfPkEedvnToAGcqPOoUngAmXpsCZpLaEGafrEZbFsepOzNbZUVnLghWqwrGIoLjTWtKZYkIIFvzhMgNMVFrJYGTNtEVApNOTYDXlnGyWORyxNyzxWyPTgtKCcazRIBfbCZOZzkPazZapDUokoCesItGEPKpvGIlrVxndSBovqHfBeaZlsSLbbFryeQArHpwYbmzTKJQmcnGAPooOlKrOprkKtWfkEtqBVNfARtvvBleAmKnUOjFVngNSvZCUQPEzOxDDSOQGHYLSKjmjVqmycmKRYydNEevSGyIKZHfxzsTuGwlYSkqDGRgyxMeqIydtohTFmuuDCiYtIyQZpICGiCtqhoOnVgAoCmEiropOyTCqs', 'WRLmwLZjOwTozIOgNJAUfQtODxIBrtrOCdXJXKoO', false, true);
        get_2 = objectStore_1185.get(KeyRange_16);
    }
    catch (e){
    }

    var count_6 = objectStore_1185.count();
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('vfwYOxGyxnVyEALTUammdDkYzeGQfssbvUdWZwRvBPxEzhByACDIwLxrRkOkAEbgryWEJsTmCtijOhCWLPUtjWqQalqbhcTkhODCQeZKFUVZBGMsBxxCPtnsQhdcSKjeQLGnTreeMYbAjRCVWcxSbloyHtjLvuUGpRpYLcFLcvkTAzKAlVFzQxkOrJYETiXvproFLseZgTTPEZdGcaxYqdVERxqdmPplEiUlabkXlImYoMtcxAsWOzOMOLxyUTtzhwRuKVOjrUvpqxHcaHGHwTObKwSscrydGuheySjdAIpGRQsCaqxAEVPUSrbLxgWLYkYLOIDPyjvmfxctwycJgOxZKBWqmCRNDHrYrZdTwOasugNCchDqIFDCvIMzJtUnUPOvKEbDdHpQnKdREKNJJZFvKKjUJnHULejVShuchSc', 'vfwYOxGyxnVyEALTUammdDkYzeGQfssbvUdWZwRvBPxEzhByACDIwLxrRkOkAEbgryWEJsTmCtijOhCWLPUtjWqQalqbhcTkhODCQeZKFUVZBGMsBxxCPtnsQhdcSKjeQLGnTreeMYbAjRCVWcxSbloyHtjLvuUGpRpYLcFLcvkTAzKAlVFzQxkOrJYETiXvproFLseZgTTPEZdGcaxYqdVERxqdmPplEiUlabkXlImYoMtcxAsWOzOMOLxyUTtzhwRuKVOjrUvpqxHcaHGHwTObKwSscrydGuheySjdAIpGRQsCaqxAEVPUSrbLxgWLYkYLOIDPyjvmfxctwycJgOxZKBWqmCRNDHrYrZdTwOasugNCchDqIFDCvIMzJtUnUPOvKEbDdHpQnKdREKNJJZFvKKjUJnHULejVShuchSc', false, false);
        get_3 = objectStore_1185.get(KeyRange_18);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('EFtEPMWbUYAAnVJdiShKfhIIWBbbJQDGSmHvptxvXsLXfDPspjORMipkvNNLLnZUcnXRZOQLvkgqrFwugvtoLxmAYNamNgkNTjgbnXKqPSKpwyLFWyexGTEbTEdDPSAnRbnwpJbALXPDprRahikFqjvBkqIQElGGTJPCNQFKpmKOAQOLrnehmikBPVeeDWflZvoAQHBVfSytiXUigmVaiETxYceuidPljBRtdiBIplfZVTnkjxsqzXFUzcjbsNljWjEZSLNWhINbvIcLYKsMxgTtLJrqpkyjZAKLHYWsSodrNgCxnfWLmonqUnqUKzPvJZvqaJbnoKqRpfeNVhwmDXMeeBcChQEXovcunSGEfTKOrETGOnGgeTfSwSqyuiVCmrYDIFyVLfvhrwkkOzJYeyrwSMzcQVNTmNvidTPdaeYFJzxnyIewmNmZwTdqhhyCjdNcXwlDolSZAbX', 'WRLmwLZjOwTozIOgNJAUfQtODxIBrtrOCdXJXKoO', false, true);
        count_7 = objectStore_1185.count(KeyRange_20);
    }
    catch (e){
    }

    var getAll_0 = objectStore_1185.getAll();
    txn_1790.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1790.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1790.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1791 = db.transaction(['objectStore_1185', 'objectStore_1186'], 'readwrite', {durability:"default"})
    var objectStore_1186 = txn_1791.objectStore('objectStore_1186');
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.only('uMTUlldBmpvXrGQPIXWnbHZWwYJcQPIlIFKmImMcwffdYgbQIJnbdXXrxjAFrPjCSBXHzYQsbyGxnfyQwYsInYXlATTBLbABtwZeYVYpfpeMkkiPEXCyzzQjFAYFMSFwnrnPOYLYpWGgEatjPlKGFOgljXKrNddTOirwFXVYfZQNzylOeOiLPUBJMWKEaXFEyyqyKDcCVSrMYtUCNXjsmkUOouAnnhXGRnVQqwgTUHfHhzVRbLMzfxJTnCCmvNjzYlrMFVLPLZVIOsvnpQxOqLEXpMmDgxmqVetqMDorsAFKTVidjEDbYluYhoMcbLHfAavtAWBnlfixjuJktLGywBUpZldTfuzqLivpjCVpCQnDcrnfgzAAzNtWHMHaXSnyDlnNLJXwOZgsplSxiOAHFtODeDDSnMeRRGCtyNtzMucHqOfUXwTkpffMkOjnbwVifvNRAIJQiOiqVJBApLRZiusMnslWGPCpNdrqoiauLrfXlGIwobjvJAWfyNYlvXguXoUpylLabizXBAdLWHRPohXonQwHKClmnnTIeUPyQgrxTiwILHEuzUJEyYypTwssjlBCuDuTZlzIpqicdNoBIVxomaGCbomicyECUFoV');
        get_4 = objectStore_1186.get(KeyRange_22);
    }
    catch (e){
    }

    var put_4 = objectStore_1186.put({f0_l: '<array>', f1_h: '<null>', f2_i: '<null>', f3_n: '<object>', f4_b: '<null>', f5_l: '<boolean>', f6_p: '<object>', f7_w: '<object>', f8_c: '<object>', f9_i: '<array>', f10_b: '<boolean>', f11_x: '<null>', f12_o: '<number>', f13_a: '<string>', f14_c: '<string>', f15_w: '<number>', f16_c: '<array>', f17_u: '<array>', f18_c: '<boolean>', f19_d: '<boolean>', f20_t: '<boolean>', f21_y: '<string>', f22_s: '<array>', f23_g: '<array>', f24_v: '<object>', f25_b: '<string>', f26_e: '<string>', f27_m: '<number>', f28_s: '<object>', f29_k: '<null>', f30_f: '<object>', f31_a: '<string>', f32_y: '<object>', f33_r: '<object>', f34_j: '<number>', f35_m: '<boolean>', f36_n: '<array>', f37_j: '<boolean>', f38_u: '<array>', f39_o: '<array>', f40_s: '<array>', f41_g: '<number>', f42_c: '<null>', f43_e: '<number>', f44_k: '<null>', f45_k: '<object>', f46_x: '<number>', f47_v: '<null>', f48_z: '<null>', f49_q: '<boolean>', f50_a: '<array>', f51_s: '<null>', f52_w: '<string>', f53_e: '<null>', f54_s: '<boolean>', f55_b: '<null>', f56_t: '<object>', f57_z: '<boolean>', f58_q: '<array>', f59_n: '<number>', f60_m: '<string>', f61_n: '<string>', f62_b: '<number>', f63_e: '<boolean>', f64_z: '<string>', f65_w: '<array>', f66_g: '<boolean>', f67_w: '<object>', f68_n: '<array>', f69_p: '<boolean>', f70_i: '<array>', f71_k: '<array>', f72_t: '<array>', f73_t: '<number>', f74_o: '<null>', f75_a: '<boolean>', f76_v: '<object>', f77_b: '<number>', f78_m: '<object>', f79_t: '<string>', f80_t: '<boolean>', f81_w: '<object>', f82_j: '<boolean>', f83_i: '<boolean>', f84_v: '<object>', f85_p: '<boolean>', f86_j: '<object>', f87_q: '<object>', f88_t: '<array>', f89_e: '<null>', f90_p: '<object>', f91_s: '<boolean>', f92_s: '<array>', f93_r: '<boolean>', f94_q: '<array>', f95_j: '<object>', f96_x: '<boolean>', f97_h: '<null>', f98_o: '<array>', f99_a: '<object>', f100_w: '<object>', f101_n: '<boolean>', f102_g: '<number>', f103_z: '<null>', f104_p: '<null>', f105_u: '<boolean>', f106_n: '<number>', f107_p: '<string>', f108_z: '<boolean>', f109_b: '<object>', f110_e: '<array>', f111_t: '<array>', f112_r: '<null>', f113_b: '<string>', f114_y: '<boolean>', f115_v: '<boolean>', f116_y: '<array>', f117_k: '<null>', f118_g: '<object>', f119_h: '<array>', f120_g: '<number>', f121_l: '<object>', f122_v: '<boolean>', f123_q: '<string>', f124_b: '<null>', f125_u: '<array>', f126_h: '<boolean>', f127_n: '<object>', f128_u: '<object>', f129_z: '<boolean>', f130_s: '<string>', f131_o: '<null>', f132_t: '<array>', f133_a: '<object>', f134_r: '<null>', f135_h: '<number>', f136_e: '<null>', f137_w: '<string>', f138_n: '<null>', f139_l: '<object>', f140_g: '<object>'}, 'gqYUMAxizYcvScyWxkqBSZQHShYoPgRuxRgmZRyGimxnbDmidDojNVsCdwHFedOdVdiTjgvhPSDHJwEAKfKcvAqEwSPrZeCdRpblbHpeosyMweHrYqNQSTUUFoUbBgmFbSrARnajHuirnzALTnBabnrQne');
    var add_5 = objectStore_1186.add({f0_p: '<array>', f1_f: '<object>', f2_r: '<string>', f3_i: '<null>', f4_j: '<null>', f5_r: '<object>', f6_q: '<boolean>', f7_q: '<string>', f8_n: '<null>', f9_v: '<array>', f10_p: '<string>', f11_r: '<boolean>', f12_x: '<object>', f13_c: '<null>', f14_l: '<array>', f15_m: '<number>', f16_n: '<number>', f17_t: '<array>', f18_s: '<array>', f19_v: '<object>', f20_e: '<null>', f21_b: '<null>', f22_f: '<array>', f23_q: '<string>', f24_l: '<array>', f25_s: '<string>', f26_r: '<boolean>', f27_n: '<array>', f28_i: '<object>', f29_z: '<object>', f30_l: '<boolean>', f31_s: '<array>', f32_a: '<object>', f33_g: '<number>', f34_y: '<string>', f35_i: '<array>', f36_b: '<number>', f37_r: '<null>', f38_u: '<array>', f39_l: '<object>', f40_q: '<object>', f41_k: '<string>', f42_w: '<object>', f43_o: '<string>', f44_p: '<boolean>', f45_d: '<boolean>', f46_y: '<number>', f47_q: '<array>', f48_h: '<string>', f49_q: '<string>', f50_z: '<number>', f51_c: '<array>', f52_t: '<array>', f53_y: '<string>', f54_c: '<number>', f55_t: '<array>', f56_e: '<object>', f57_n: '<boolean>', f58_q: '<boolean>', f59_g: '<string>', f60_k: '<string>', f61_y: '<null>', f62_x: '<string>', f63_t: '<boolean>', f64_y: '<null>', f65_m: '<null>', f66_k: '<string>', f67_s: '<number>', f68_q: '<string>', f69_e: '<string>', f70_l: '<array>', f71_i: '<object>', f72_f: '<array>', f73_t: '<boolean>', f74_d: '<null>', f75_e: '<array>', f76_c: '<object>', f77_d: '<null>', f78_a: '<null>', f79_a: '<boolean>', f80_l: '<boolean>', f81_s: '<boolean>', f82_d: '<object>', f83_v: '<boolean>', f84_s: '<number>', f85_d: '<boolean>', f86_u: '<string>', f87_o: '<number>', f88_s: '<boolean>', f89_q: '<null>', f90_t: '<array>', f91_q: '<array>', f92_c: '<number>', f93_i: '<object>', f94_p: '<boolean>', f95_b: '<null>', f96_f: '<string>', f97_m: '<object>', f98_f: '<string>', f99_k: '<number>', f100_q: '<array>', f101_e: '<null>', f102_l: '<object>', f103_n: '<null>', f104_j: '<string>', f105_j: '<array>', f106_u: '<array>', f107_o: '<array>', f108_k: '<number>', f109_s: '<string>', f110_s: '<array>', f111_z: '<null>', f112_m: '<object>', f113_t: '<null>', f114_u: '<string>', f115_c: '<boolean>', f116_z: '<boolean>', f117_y: '<null>', f118_v: '<number>', f119_v: '<string>', f120_t: '<null>', f121_a: '<object>', f122_w: '<string>', f123_n: '<string>', f124_u: '<object>', f125_b: '<null>', f126_g: '<null>', f127_g: '<string>', f128_q: '<object>', f129_m: '<boolean>', f130_t: '<object>', f131_x: '<boolean>', f132_h: '<array>', f133_a: '<number>', f134_t: '<string>'}, 'AnlKKmmvMXjCjChYSrYZMDDFxswzrVfKRguDKAwmoHtYsZbquCOnzwnInFOREYEGEGBfUnJRkVdhlmlhfJGJxbfbWFeBQEDpsiFXCSaDpxUWYEljTFNSYQdJoBEfkyaVpPALPBuFCTATRIzznCLfpGONbNgiWHzBmbaGlqmXyTloHCYRNKuadJetuECYpUlKVQcvZfPShmVwIiViuPrVNdhAHiJHIAlOvHWQYhpreHAChQThfwcjHbNepINAzmUbVckcGzOQlAJbnZCntMlCbWxTYBKBGDHcReiWmUUgGXNyhFDzFNOOappumzVvDYMxJprnCMpMjQWbUqAEtlZUwTIePaajXmcZRkjtlIEFmZIPuPmtnFHzSpvzZSiivAiZMCAYNRrVAGFsNiKMuLWADDMuPIysDbTAwZnbHqGSMqZUBBquavUsTJGkyMUZtvAJxCPVezFCJuzkTCLveWdytUdlZbasVHkpYzAvMMKbGwegeSoMjLsNQxdoZNNYlSMUusgqWqoYCyNfdOUCvMBfMKzKsfIcaGSGdiaIKdYQcUIJHtqlnLhzSYJafaBjUREBcGoRAloWiPrXVggQNovMIeJYTPwvnAHuhjSjzcFqpHfqluqeEMlOVQYLScRCEQfXxxHOhZsrnEtlFvQYBbFwWddEZIpLoIVChnfBFNWvERVQikGykWmpCpvjUrD');
    var clear_1 = objectStore_1186.clear();
    var add_6 = objectStore_1186.add({f0_t: '<string>', f1_h: '<number>', f2_x: '<null>', f3_t: '<object>', f4_v: '<object>', f5_l: '<number>', f6_h: '<number>'}, 'UrSbnzINxiJBDuMmOsPyHzSQWSGZJZbfGJcXVGQcJAnlETtkChDUCfNmUoFZtOtzPDQIbEQGHBMELNcEVSkoVLeyCbrcxiIdsQFEwiAPOVMmGqjAlLulAnxLfdlpbfFvlwNzuoueDXnpsipOKqNrKxZQRrnEyeAyRDCVaBtEishIJvuOzbMlnpFrPYcSBgUYIjsGCKorGddyRUhusdOibBYMkIdmzbnIaRWGdQhVXDZNdQuPIuVQOHqgzijtkOMkkxGkKKOHCPYDRoDzkpZadewqJjcbloVBxllZHyuaPBHpiXpjROCfZYyCGelPmKYFuvNpxmkjjNGFeVYfIBKRJHEgBPTlIphNxDCfYzlogRamCnkkQjkFedZdxiPGpIRgkHqQDeuNSWFFdzLzEzGQexACRGUqYtKTRpbohWccwXbdlaGwCIYQNEqLNeepuQAPGjdzoHzGvgdVaeGoFaGcsnnANAbGIBNSCGsRjFqCFNBYJktaOpYyMzaOMNJERUgvjjlQtMlVkUTDopNtsheilbwXihgCrnPgeGFyHgOxvuLzOpBaNjftPcltLvUJvnEfNPflOaQeVvKvnlzlqBBNApBYBuDdgcfDqgkOJlRnEbpcSeJjHPdWiWhteZPlLdjIsjisFThqiVbvGxYiMQGqFnkZMJ');
    txn_1791.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1791.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1791.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1792 = db.transaction(['objectStore_1185'], 'readwrite', {durability:"strict"})
    var objectStore_1185 = txn_1792.objectStore('objectStore_1185');
    var index_0 = objectStore_1185.index('index_792');
    var add_7 = objectStore_1185.add({f0_a: '<boolean>', f1_h: '<boolean>', f2_i: '<boolean>', f3_k: '<array>', f4_v: '<boolean>'}, 'xIkPLcDYQPxFlJJzXNURqDNDFcyFAziICBoycoaAVNEvJhTaSvuRaJaNnteQdRYSLailyRFbEGuMSJteNcXzsVPgrOKQbfMKXJGHwcczOqHuyYuoZcSDzsbHlHGUaTquEmMMJnzzBbpdfOIIVIgbSwfEVVpMBTYAqFWogMObtLjeqnEuTaSshrhtjharpIpusYlRvesnOSKgIVXRvIekWqkEynSARcqanYEHclwMboRqaygUJCbaDuaXyTHLBCKvCDDFdkEpXvQoDkjZHfpwLuneWVlhxrlIqbDrOKEaSJjcsjGPWYqRptDphGJRVOhpYhwTNxpBWbVskbZErAnNKZcRHxZfGbaOZaNpZMSalVsQeIiAYaFEFvsUqgrQKTjZxrKzWhehenTRNkbATvjaFJUMPreRcNZVHLiWIbkraWwjcutRwaqHZaIgPNheFhfWmxBYlixOfUGzSiNTxl');
    var count_8;
    try{
        KeyRange_24 = IDBKeyRange.only('WRLmwLZjOwTozIOgNJAUfQtODxIBrtrOCdXJXKoO');
        count_8 = objectStore_1185.count(KeyRange_24);
    }
    catch (e){
    }

    var put_5 = objectStore_1185.put({f0_g: '<array>', f1_h: '<number>', f2_h: '<null>'}, 'CzUVLywuwRMkiCkqINXJStyQCLvOoyBTDpCHLhCovljWMpfdBYDxTwBgITizbaTwIxfhnihbtJbCdQweclgJxtTurQxdYhgEeyinjfWoschiquZwyaBhVzStxnV');
    var clear_2 = objectStore_1185.clear();
    var clear_3 = objectStore_1185.clear();
    txn_1792.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1792.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1792.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1793 = db.transaction(['objectStore_1185', 'objectStore_1187', 'objectStore_1186'], 'readwrite', {durability:"relaxed"})
    var objectStore_1187 = txn_1793.objectStore('objectStore_1187');
    var getAllKeys_2 = objectStore_1187.getAllKeys();
    var count_9;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN', false);
        count_9 = objectStore_1187.count(KeyRange_26);
    }
    catch (e){
    }

    var add_8 = objectStore_1187.add({f0_p: '<object>', f1_o: '<boolean>', f2_i: '<array>', f3_y: '<boolean>', f4_g: '<number>', f5_d: '<string>', f6_o: '<boolean>', f7_b: '<array>', f8_g: '<boolean>', f9_h: '<array>'}, 'RZOFNqCcQolDIZaYYxbOCEkip');
    var count_10 = objectStore_1187.count();
    var clear_4 = objectStore_1187.clear();
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN', true);
        get_5 = objectStore_1187.get(KeyRange_28);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN', false);
        get_6 = objectStore_1187.get(KeyRange_30);
    }
    catch (e){
    }

    var add_9 = objectStore_1187.add({f0_q: '<number>', f1_f: '<null>', f2_l: '<string>', f3_q: '<number>', f4_s: '<null>', f5_h: '<boolean>', f6_i: '<object>', f7_n: '<object>'}, 'fnpZ');
    var clear_5 = objectStore_1187.clear();
    txn_1793.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1793.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1793.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1794 = db.transaction(['objectStore_1187'], 'readonly', {durability:"relaxed"})
    var objectStore_1187 = txn_1794.objectStore('objectStore_1187');
    var count_11;
    try{
        KeyRange_32 = IDBKeyRange.bound('aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN', 'RZOFNqCcQolDIZaYYxbOCEkip', false, false);
        count_11 = objectStore_1187.count(KeyRange_32);
    }
    catch (e){
    }

    var index_1 = objectStore_1187.index('index_794');
    var count_12 = objectStore_1187.count();
    var getAllKeys_3 = objectStore_1187.getAllKeys();
    var getAllKeys_4;
    try{
        KeyRange_34 = IDBKeyRange.bound('fnpZ', 'aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN', true, true);
        getAllKeys_4 = objectStore_1187.getAllKeys(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('RZOFNqCcQolDIZaYYxbOCEkip');
        getAllKeys_4 = objectStore_1187.getAllKeys(KeyRange_35);
    }

    var getAll_1;
    try{
        KeyRange_36 = IDBKeyRange.bound('fnpZ', 'fnpZ', false, false);
        getAll_1 = objectStore_1187.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('aVQITHtFtdIRRCcsEatbqbfbEVuzANIzENnYUcYzsmzjQgTtgULkSWFXYlMXscriEkXhNjpwNtqjKhJDeJWTEVTqJrwAstjSGcJMufttruTmvxUknIlzIBUDuhtHERTlTSNdpeXmoUEIMARLWRJQPDQjziTBwPbIKuZzRZIcliqbAtMSVoxsgKCnaFcObWHnjcbAmhJEiiIPndApTblGAXCkCYnmifinrGXzvAbdncOWXaalAKNKDMpHzfMFDeouIVvdMhXQoREOtajdetlFQjFajbPWKpYTcQwqlkrHPBVMHZgSGnfyxAVgrfmoLhIfPjaFNFxZUeSjSDPppvikwJLchkixWoIHDFEPDUzSuZlQTEYMYcqjIZOQrDuPoaYXcmUGwWTYEQLCmdiAtZNHkGMBWfttRUcEysZpoxHOkvbLMuyDhHpBakFdPjZqvARPScfrKjIdYHdbWPRMXReQJImsgNdFaGNazCVTlKSYEYVqLWHcYweZaNaYAAWnXspUuwVnlhQlFDYCbMBnxCLtJZXBlEGFXgDGwaFBSiujFnqSeAKtddLaSiqmHgUQfXKpJfAvPKCnttqyBqbnQccvaN');
        getAll_1 = objectStore_1187.getAll(KeyRange_37);
    }

    var count_13 = objectStore_1187.count();
    var count_14;
    try{
        KeyRange_38 = IDBKeyRange.bound('RZOFNqCcQolDIZaYYxbOCEkip', 'fnpZ', false, false);
        count_14 = objectStore_1187.count(KeyRange_38);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_40 = IDBKeyRange.bound('RZOFNqCcQolDIZaYYxbOCEkip', 'RZOFNqCcQolDIZaYYxbOCEkip', false, false);
        count_15 = objectStore_1187.count(KeyRange_40);
    }
    catch (e){
    }

    var count_16 = objectStore_1187.count();
    var getAllKeys_5 = objectStore_1187.getAllKeys(4173403704);
    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.bound('RZOFNqCcQolDIZaYYxbOCEkip', 'fnpZ', false, false);
        get_7 = objectStore_1187.get(KeyRange_42);
    }
    catch (e){
    }

    txn_1794.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1794.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1794.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5108')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};