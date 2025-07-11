let db;
const openRequest = window.indexedDB.open('str_3894', 8131672294538826)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5633', {autoIncrement: false});
    var put_0 = objectStore_0.put({f0_y: '<number>', f1_k: '<boolean>', f2_c: '<object>', f3_e: '<boolean>', f4_d: '<object>', f5_d: '<object>'}, 'MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', 'MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', true, false);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var index_3759 = objectStore_0.createIndex('index_3759', 'test', {unique: false, multiEntry: false});
    var put_1 = objectStore_0.put({f0_c: '<array>', f1_t: '<string>', f2_k: '<number>', f3_c: '<object>'}, 'qcvfYHWrjmmsMLbglkIjMrWSdlxCjaKDfPygoHYeNlMLsCBxkeZdtmmCehELKeNOBHyrPkcgZmdXnzaDrlsobSgmVgEWCMHHQVJmAIDrWWbPyRgbTlzOZtkRKwPWZjjvCEvqCCuYniEkDJHHPCnXhjzwlbFWnVAaDXYMaWXdRZLIUlTxBYIkyWIHKKorNxMskpyBIXqLGXVdZEkBHiKhGxwdwXHpsBHwsnlLFnumtsiTCYlzBUoqdrWRDRSUtIlFQOVlehWvgAboSiHEqugpYgzCvAcHpPVgcqMtaICRhtSYqslWkGjzfJNblLYJGQCSdrclqViAlCEWUnRzjjMYTJNxNbzwyuFqfJJOPPAPXEZlzPeGCqgDHTRbNgmzmscZAeWzwBTyIfNtSAlYWbAIEUEJOyZaHbsWInuSevMbABgLhUsmSyxlsZhZYtbZsgpaXllGcJqGrYccMJfxJuuVHvUEFWFXRFCXOcOZAtCWbjUNoweFEfSfyMjPqvFILKqHOhBKdBKQfUKbEjJTMbOEJDBywfJQSDyUjsLzwTIFmxsZSHrMtBPrgkAhToucnCaLLYyALIrUEmBjjTAweiKATwgIrJdJFNHwaxYBPmfQqXKwkhAMuTOjyQyVANBVFxofBIGKWouJkOXxEulXDfwGhgxyefpAdaOwWup');
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.only('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_2, 1374879205);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_3);
    }

    var clear_0 = objectStore_0.clear();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', 'MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', true, false);
        get_0 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var put_2 = objectStore_0.put({f0_r: '<number>', f1_s: '<string>', f2_y: '<object>', f3_z: '<array>', f4_w: '<string>', f5_d: '<number>', f6_j: '<array>', f7_x: '<boolean>', f8_a: '<object>', f9_j: '<array>', f10_g: '<boolean>', f11_f: '<boolean>', f12_y: '<boolean>', f13_r: '<string>', f14_o: '<object>', f15_d: '<number>', f16_z: '<number>', f17_b: '<number>', f18_r: '<number>', f19_d: '<boolean>', f20_m: '<null>', f21_x: '<string>', f22_t: '<string>', f23_q: '<string>', f24_d: '<number>', f25_f: '<array>', f26_h: '<array>', f27_u: '<number>', f28_c: '<null>', f29_s: '<array>', f30_z: '<string>', f31_b: '<object>', f32_g: '<object>', f33_i: '<number>', f34_p: '<array>', f35_k: '<number>', f36_u: '<null>', f37_o: '<object>', f38_i: '<boolean>', f39_e: '<object>', f40_c: '<object>', f41_d: '<object>', f42_o: '<number>', f43_a: '<array>', f44_i: '<object>', f45_g: '<array>', f46_r: '<null>', f47_l: '<object>', f48_z: '<boolean>', f49_u: '<number>', f50_a: '<object>', f51_z: '<null>', f52_j: '<string>', f53_m: '<boolean>', f54_u: '<boolean>', f55_d: '<boolean>', f56_h: '<string>', f57_p: '<array>', f58_a: '<boolean>', f59_t: '<string>', f60_v: '<string>', f61_q: '<number>', f62_x: '<array>', f63_c: '<object>', f64_j: '<array>', f65_a: '<number>', f66_x: '<number>', f67_c: '<object>', f68_s: '<boolean>', f69_h: '<string>', f70_y: '<object>', f71_a: '<object>', f72_p: '<string>', f73_i: '<null>', f74_g: '<boolean>', f75_d: '<string>', f76_i: '<string>', f77_q: '<string>', f78_u: '<number>', f79_f: '<string>', f80_v: '<string>', f81_f: '<number>', f82_p: '<string>', f83_h: '<array>', f84_l: '<null>', f85_n: '<null>', f86_i: '<null>', f87_i: '<object>', f88_a: '<string>', f89_o: '<null>', f90_u: '<string>', f91_e: '<array>', f92_o: '<boolean>', f93_l: '<string>', f94_l: '<boolean>', f95_a: '<array>', f96_a: '<boolean>', f97_q: '<number>', f98_d: '<null>', f99_n: '<number>', f100_c: '<boolean>', f101_z: '<array>', f102_k: '<array>', f103_u: '<boolean>', f104_a: '<object>', f105_o: '<number>', f106_c: '<object>', f107_n: '<string>', f108_b: '<null>', f109_j: '<array>', f110_c: '<array>', f111_y: '<object>', f112_w: '<null>', f113_s: '<number>', f114_j: '<array>', f115_v: '<array>', f116_x: '<array>', f117_n: '<string>', f118_n: '<null>', f119_s: '<string>', f120_f: '<array>', f121_v: '<string>', f122_g: '<number>', f123_n: '<string>', f124_f: '<array>', f125_u: '<string>', f126_i: '<null>', f127_r: '<object>', f128_d: '<array>', f129_y: '<array>', f130_s: '<object>', f131_o: '<object>', f132_n: '<boolean>', f133_c: '<string>', f134_l: '<array>', f135_v: '<object>', f136_t: '<array>', f137_c: '<null>', f138_u: '<boolean>', f139_p: '<array>', f140_l: '<number>', f141_q: '<string>', f142_y: '<null>', f143_b: '<null>', f144_v: '<array>', f145_j: '<object>', f146_b: '<object>', f147_w: '<number>', f148_q: '<null>', f149_z: '<string>', f150_s: '<object>', f151_w: '<array>', f152_m: '<string>', f153_u: '<boolean>', f154_k: '<number>', f155_l: '<boolean>', f156_e: '<array>', f157_g: '<number>', f158_n: '<object>', f159_x: '<number>', f160_z: '<array>', f161_k: '<array>', f162_f: '<null>', f163_c: '<array>', f164_z: '<object>', f165_b: '<object>', f166_l: '<number>', f167_g: '<array>', f168_z: '<object>', f169_l: '<object>', f170_b: '<string>', f171_b: '<array>', f172_p: '<array>', f173_v: '<number>', f174_l: '<array>', f175_w: '<string>', f176_x: '<object>', f177_c: '<null>', f178_m: '<number>', f179_k: '<string>', f180_p: '<array>', f181_a: '<number>', f182_y: '<string>', f183_x: '<string>', f184_y: '<null>', f185_o: '<array>', f186_s: '<string>', f187_j: '<boolean>', f188_e: '<boolean>', f189_i: '<null>', f190_x: '<null>', f191_w: '<string>', f192_k: '<number>', f193_o: '<number>', f194_j: '<object>', f195_d: '<boolean>', f196_f: '<object>', f197_b: '<number>', f198_p: '<object>', f199_y: '<array>', f200_s: '<null>', f201_g: '<boolean>', f202_s: '<number>', f203_s: '<null>', f204_g: '<array>', f205_n: '<boolean>', f206_w: '<boolean>', f207_k: '<number>', f208_i: '<number>', f209_r: '<null>', f210_z: '<number>', f211_h: '<array>', f212_e: '<string>', f213_k: '<null>', f214_v: '<number>', f215_m: '<array>', f216_n: '<array>', f217_l: '<array>', f218_x: '<string>', f219_r: '<array>', f220_q: '<string>', f221_w: '<object>', f222_q: '<number>', f223_a: '<string>', f224_b: '<number>', f225_o: '<boolean>', f226_f: '<array>', f227_v: '<number>', f228_n: '<null>', f229_c: '<string>', f230_c: '<object>', f231_h: '<null>', f232_z: '<null>', f233_t: '<null>', f234_y: '<string>', f235_y: '<object>', f236_m: '<number>', f237_i: '<number>', f238_y: '<object>', f239_z: '<boolean>', f240_i: '<boolean>', f241_e: '<string>', f242_j: '<array>', f243_v: '<number>', f244_o: '<boolean>', f245_c: '<null>', f246_b: '<boolean>', f247_y: '<array>', f248_x: '<boolean>', f249_l: '<boolean>', f250_q: '<null>', f251_f: '<null>', f252_n: '<object>', f253_a: '<array>', f254_l: '<number>', f255_g: '<null>', f256_x: '<string>', f257_w: '<array>', f258_t: '<string>', f259_u: '<number>', f260_h: '<null>', f261_x: '<null>', f262_m: '<boolean>', f263_d: '<null>', f264_r: '<null>', f265_a: '<number>', f266_f: '<array>', f267_l: '<array>', f268_q: '<null>', f269_z: '<object>', f270_y: '<array>', f271_d: '<string>', f272_p: '<object>', f273_k: '<string>', f274_m: '<null>', f275_b: '<string>', f276_u: '<number>', f277_m: '<null>', f278_b: '<array>', f279_o: '<number>', f280_q: '<null>', f281_a: '<boolean>', f282_a: '<string>', f283_o: '<string>', f284_b: '<null>', f285_j: '<string>', f286_s: '<string>', f287_x: '<boolean>', f288_o: '<null>', f289_w: '<number>', f290_m: '<boolean>', f291_w: '<boolean>', f292_c: '<array>', f293_a: '<object>', f294_w: '<number>', f295_u: '<boolean>', f296_t: '<object>', f297_r: '<object>', f298_c: '<number>', f299_f: '<array>', f300_j: '<string>', f301_n: '<null>', f302_n: '<array>', f303_m: '<array>', f304_f: '<null>', f305_f: '<boolean>', f306_p: '<object>', f307_z: '<object>', f308_g: '<object>', f309_c: '<array>', f310_j: '<number>', f311_a: '<object>', f312_i: '<object>', f313_c: '<boolean>', f314_n: '<object>', f315_d: '<array>', f316_q: '<array>', f317_g: '<null>', f318_m: '<object>', f319_a: '<string>', f320_j: '<number>', f321_o: '<array>', f322_v: '<boolean>', f323_u: '<array>', f324_c: '<number>', f325_p: '<null>', f326_v: '<boolean>'}, 'ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR');
    var clear_2 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_z: '<array>', f1_g: '<object>', f2_b: '<array>', f3_r: '<string>', f4_g: '<array>', f5_w: '<string>', f6_b: '<object>'}, 'HKbIShDmQRTYjhmDLCEGkbFRLVHmBPHLyhDXAbNNBBJsQtSnKHWnXkrnXNqTHwWTOgyZtMYEQZvKRPNVGtYxNIRbFaegeMikBHQpmeytJDicFaVaBhiVWZSfcAogceGFGHjrUalDYtMOkgfEBeAAEoLtWBZrAnufAdiTeTqRGjTPWpgGCdlUlKCxdCfJxZDQsoyMaVUsACrDPKGzcaJNmDsrGciDSJyBImaAxvDuUqkJvbxIROJiisoWEumLqfyDHcNownlxDjcUEoIjtRxZewMtbxZyaPatRkqBPfbzqmqzkpcpXkhsqUYNBQlzDZFfeCgICHnbJkaOafrdnicGlEtCOGsUQTBOAbEiNsasSTBRSmUiotXNfruDXcHwBTSSLShjxXBgooLEUHhkGimPHOxsGYsdnaIpGUgaEEnDtxednKituoiNdndTBVoafTVECitzxynfwsXRVCYahGUXMLDvCRjUvLmzpCUPXCVICRCgwhDWXlFWnCvwOiqVfrOmBbsxDCzewGdCvjOpBTKDBfSObKbtfTDevFlftxfNuRtEHISUBltUupyvFPOAijhjUBrZxWVOuyptSHMVZgsM');
    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', 'MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', true, true);
        getAll_0 = objectStore_0.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('qcvfYHWrjmmsMLbglkIjMrWSdlxCjaKDfPygoHYeNlMLsCBxkeZdtmmCehELKeNOBHyrPkcgZmdXnzaDrlsobSgmVgEWCMHHQVJmAIDrWWbPyRgbTlzOZtkRKwPWZjjvCEvqCCuYniEkDJHHPCnXhjzwlbFWnVAaDXYMaWXdRZLIUlTxBYIkyWIHKKorNxMskpyBIXqLGXVdZEkBHiKhGxwdwXHpsBHwsnlLFnumtsiTCYlzBUoqdrWRDRSUtIlFQOVlehWvgAboSiHEqugpYgzCvAcHpPVgcqMtaICRhtSYqslWkGjzfJNblLYJGQCSdrclqViAlCEWUnRzjjMYTJNxNbzwyuFqfJJOPPAPXEZlzPeGCqgDHTRbNgmzmscZAeWzwBTyIfNtSAlYWbAIEUEJOyZaHbsWInuSevMbABgLhUsmSyxlsZhZYtbZsgpaXllGcJqGrYccMJfxJuuVHvUEFWFXRFCXOcOZAtCWbjUNoweFEfSfyMjPqvFILKqHOhBKdBKQfUKbEjJTMbOEJDBywfJQSDyUjsLzwTIFmxsZSHrMtBPrgkAhToucnCaLLYyALIrUEmBjjTAweiKATwgIrJdJFNHwaxYBPmfQqXKwkhAMuTOjyQyVANBVFxofBIGKWouJkOXxEulXDfwGhgxyefpAdaOwWup');
        getAll_0 = objectStore_0.getAll(KeyRange_7);
    }

    var index_3760 = objectStore_0.createIndex('index_3760', 'test', {multiEntry: true});
    var clear_3 = objectStore_0.clear();
    var add_1 = objectStore_0.add({f0_i: '<null>', f1_z: '<array>', f2_m: '<number>', f3_j: '<number>', f4_w: '<string>', f5_o: '<null>', f6_o: '<boolean>', f7_c: '<object>', f8_m: '<string>', f9_r: '<array>'}, 'PbNtQxaJFFfDDqKbhLpynFfvumnVllZmndldduqyqGhgUdSluNMSqDMaocgSQuMozvWauhqcCXpARFrbIOiiovKNuvmBiViaqQtqyDyhnXPZeNqRceuADkeADhDEnkccySgNjCOQkzCQTGWEWMuWaFdOTMjxVCdNBybWOIvmjSqfeLnftosGwDNbOYnLVgzCckmsrryFIcLepdAAsLFlzAbADhSKBvTWdAevUUFKMPSkhkpQZATKcLMYqjRoYQnMEYRzXcUmjXdtueyQAwoqxIyfbTsknjJnJgDzxOAgAcgmusWkSgBetyASQWCbiQYPbwTOyDVJGqMQXSOwxontffkWfrirDYxdAIsNGVdUlsBlwKeMPDBazeDUPvkoqjTsQIuxDCqgOGzrswLLpLtdiILCWDIcfErtFIbwazOiUQCgHUyHBWiOZdhXXqsf');
    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('PbNtQxaJFFfDDqKbhLpynFfvumnVllZmndldduqyqGhgUdSluNMSqDMaocgSQuMozvWauhqcCXpARFrbIOiiovKNuvmBiViaqQtqyDyhnXPZeNqRceuADkeADhDEnkccySgNjCOQkzCQTGWEWMuWaFdOTMjxVCdNBybWOIvmjSqfeLnftosGwDNbOYnLVgzCckmsrryFIcLepdAAsLFlzAbADhSKBvTWdAevUUFKMPSkhkpQZATKcLMYqjRoYQnMEYRzXcUmjXdtueyQAwoqxIyfbTsknjJnJgDzxOAgAcgmusWkSgBetyASQWCbiQYPbwTOyDVJGqMQXSOwxontffkWfrirDYxdAIsNGVdUlsBlwKeMPDBazeDUPvkoqjTsQIuxDCqgOGzrswLLpLtdiILCWDIcfErtFIbwazOiUQCgHUyHBWiOZdhXXqsf', true);
        get_1 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('HKbIShDmQRTYjhmDLCEGkbFRLVHmBPHLyhDXAbNNBBJsQtSnKHWnXkrnXNqTHwWTOgyZtMYEQZvKRPNVGtYxNIRbFaegeMikBHQpmeytJDicFaVaBhiVWZSfcAogceGFGHjrUalDYtMOkgfEBeAAEoLtWBZrAnufAdiTeTqRGjTPWpgGCdlUlKCxdCfJxZDQsoyMaVUsACrDPKGzcaJNmDsrGciDSJyBImaAxvDuUqkJvbxIROJiisoWEumLqfyDHcNownlxDjcUEoIjtRxZewMtbxZyaPatRkqBPfbzqmqzkpcpXkhsqUYNBQlzDZFfeCgICHnbJkaOafrdnicGlEtCOGsUQTBOAbEiNsasSTBRSmUiotXNfruDXcHwBTSSLShjxXBgooLEUHhkGimPHOxsGYsdnaIpGUgaEEnDtxednKituoiNdndTBVoafTVECitzxynfwsXRVCYahGUXMLDvCRjUvLmzpCUPXCVICRCgwhDWXlFWnCvwOiqVfrOmBbsxDCzewGdCvjOpBTKDBfSObKbtfTDevFlftxfNuRtEHISUBltUupyvFPOAijhjUBrZxWVOuyptSHMVZgsM', 'HKbIShDmQRTYjhmDLCEGkbFRLVHmBPHLyhDXAbNNBBJsQtSnKHWnXkrnXNqTHwWTOgyZtMYEQZvKRPNVGtYxNIRbFaegeMikBHQpmeytJDicFaVaBhiVWZSfcAogceGFGHjrUalDYtMOkgfEBeAAEoLtWBZrAnufAdiTeTqRGjTPWpgGCdlUlKCxdCfJxZDQsoyMaVUsACrDPKGzcaJNmDsrGciDSJyBImaAxvDuUqkJvbxIROJiisoWEumLqfyDHcNownlxDjcUEoIjtRxZewMtbxZyaPatRkqBPfbzqmqzkpcpXkhsqUYNBQlzDZFfeCgICHnbJkaOafrdnicGlEtCOGsUQTBOAbEiNsasSTBRSmUiotXNfruDXcHwBTSSLShjxXBgooLEUHhkGimPHOxsGYsdnaIpGUgaEEnDtxednKituoiNdndTBVoafTVECitzxynfwsXRVCYahGUXMLDvCRjUvLmzpCUPXCVICRCgwhDWXlFWnCvwOiqVfrOmBbsxDCzewGdCvjOpBTKDBfSObKbtfTDevFlftxfNuRtEHISUBltUupyvFPOAijhjUBrZxWVOuyptSHMVZgsM', false, true);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_11);
    }

    var objectStore_1 = db.createObjectStore('objectStore_5634');
    var delete_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', false);
        delete_1 = objectStore_0.delete(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_5635');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8480 = db.transaction(['objectStore_5634'], 'readonly', {durability:"default"})
    var objectStore_5634 = txn_8480.objectStore('objectStore_5634');
    txn_8480.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8480.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8480.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8481 = db.transaction(['objectStore_5633'], 'readonly', {durability:"default"})
    var objectStore_5633 = txn_8481.objectStore('objectStore_5633');
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('qcvfYHWrjmmsMLbglkIjMrWSdlxCjaKDfPygoHYeNlMLsCBxkeZdtmmCehELKeNOBHyrPkcgZmdXnzaDrlsobSgmVgEWCMHHQVJmAIDrWWbPyRgbTlzOZtkRKwPWZjjvCEvqCCuYniEkDJHHPCnXhjzwlbFWnVAaDXYMaWXdRZLIUlTxBYIkyWIHKKorNxMskpyBIXqLGXVdZEkBHiKhGxwdwXHpsBHwsnlLFnumtsiTCYlzBUoqdrWRDRSUtIlFQOVlehWvgAboSiHEqugpYgzCvAcHpPVgcqMtaICRhtSYqslWkGjzfJNblLYJGQCSdrclqViAlCEWUnRzjjMYTJNxNbzwyuFqfJJOPPAPXEZlzPeGCqgDHTRbNgmzmscZAeWzwBTyIfNtSAlYWbAIEUEJOyZaHbsWInuSevMbABgLhUsmSyxlsZhZYtbZsgpaXllGcJqGrYccMJfxJuuVHvUEFWFXRFCXOcOZAtCWbjUNoweFEfSfyMjPqvFILKqHOhBKdBKQfUKbEjJTMbOEJDBywfJQSDyUjsLzwTIFmxsZSHrMtBPrgkAhToucnCaLLYyALIrUEmBjjTAweiKATwgIrJdJFNHwaxYBPmfQqXKwkhAMuTOjyQyVANBVFxofBIGKWouJkOXxEulXDfwGhgxyefpAdaOwWup', false);
        get_2 = objectStore_5633.get(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', 'MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', true, true);
        get_3 = objectStore_5633.get(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('HKbIShDmQRTYjhmDLCEGkbFRLVHmBPHLyhDXAbNNBBJsQtSnKHWnXkrnXNqTHwWTOgyZtMYEQZvKRPNVGtYxNIRbFaegeMikBHQpmeytJDicFaVaBhiVWZSfcAogceGFGHjrUalDYtMOkgfEBeAAEoLtWBZrAnufAdiTeTqRGjTPWpgGCdlUlKCxdCfJxZDQsoyMaVUsACrDPKGzcaJNmDsrGciDSJyBImaAxvDuUqkJvbxIROJiisoWEumLqfyDHcNownlxDjcUEoIjtRxZewMtbxZyaPatRkqBPfbzqmqzkpcpXkhsqUYNBQlzDZFfeCgICHnbJkaOafrdnicGlEtCOGsUQTBOAbEiNsasSTBRSmUiotXNfruDXcHwBTSSLShjxXBgooLEUHhkGimPHOxsGYsdnaIpGUgaEEnDtxednKituoiNdndTBVoafTVECitzxynfwsXRVCYahGUXMLDvCRjUvLmzpCUPXCVICRCgwhDWXlFWnCvwOiqVfrOmBbsxDCzewGdCvjOpBTKDBfSObKbtfTDevFlftxfNuRtEHISUBltUupyvFPOAijhjUBrZxWVOuyptSHMVZgsM', false);
        getAllKeys_2 = objectStore_5633.getAllKeys(KeyRange_18, 3514556175);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('HKbIShDmQRTYjhmDLCEGkbFRLVHmBPHLyhDXAbNNBBJsQtSnKHWnXkrnXNqTHwWTOgyZtMYEQZvKRPNVGtYxNIRbFaegeMikBHQpmeytJDicFaVaBhiVWZSfcAogceGFGHjrUalDYtMOkgfEBeAAEoLtWBZrAnufAdiTeTqRGjTPWpgGCdlUlKCxdCfJxZDQsoyMaVUsACrDPKGzcaJNmDsrGciDSJyBImaAxvDuUqkJvbxIROJiisoWEumLqfyDHcNownlxDjcUEoIjtRxZewMtbxZyaPatRkqBPfbzqmqzkpcpXkhsqUYNBQlzDZFfeCgICHnbJkaOafrdnicGlEtCOGsUQTBOAbEiNsasSTBRSmUiotXNfruDXcHwBTSSLShjxXBgooLEUHhkGimPHOxsGYsdnaIpGUgaEEnDtxednKituoiNdndTBVoafTVECitzxynfwsXRVCYahGUXMLDvCRjUvLmzpCUPXCVICRCgwhDWXlFWnCvwOiqVfrOmBbsxDCzewGdCvjOpBTKDBfSObKbtfTDevFlftxfNuRtEHISUBltUupyvFPOAijhjUBrZxWVOuyptSHMVZgsM');
        getAllKeys_2 = objectStore_5633.getAllKeys(KeyRange_19);
    }

    var getAllKeys_3;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', true);
        getAllKeys_3 = objectStore_5633.getAllKeys(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('PbNtQxaJFFfDDqKbhLpynFfvumnVllZmndldduqyqGhgUdSluNMSqDMaocgSQuMozvWauhqcCXpARFrbIOiiovKNuvmBiViaqQtqyDyhnXPZeNqRceuADkeADhDEnkccySgNjCOQkzCQTGWEWMuWaFdOTMjxVCdNBybWOIvmjSqfeLnftosGwDNbOYnLVgzCckmsrryFIcLepdAAsLFlzAbADhSKBvTWdAevUUFKMPSkhkpQZATKcLMYqjRoYQnMEYRzXcUmjXdtueyQAwoqxIyfbTsknjJnJgDzxOAgAcgmusWkSgBetyASQWCbiQYPbwTOyDVJGqMQXSOwxontffkWfrirDYxdAIsNGVdUlsBlwKeMPDBazeDUPvkoqjTsQIuxDCqgOGzrswLLpLtdiILCWDIcfErtFIbwazOiUQCgHUyHBWiOZdhXXqsf');
        getAllKeys_3 = objectStore_5633.getAllKeys(KeyRange_21);
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('PbNtQxaJFFfDDqKbhLpynFfvumnVllZmndldduqyqGhgUdSluNMSqDMaocgSQuMozvWauhqcCXpARFrbIOiiovKNuvmBiViaqQtqyDyhnXPZeNqRceuADkeADhDEnkccySgNjCOQkzCQTGWEWMuWaFdOTMjxVCdNBybWOIvmjSqfeLnftosGwDNbOYnLVgzCckmsrryFIcLepdAAsLFlzAbADhSKBvTWdAevUUFKMPSkhkpQZATKcLMYqjRoYQnMEYRzXcUmjXdtueyQAwoqxIyfbTsknjJnJgDzxOAgAcgmusWkSgBetyASQWCbiQYPbwTOyDVJGqMQXSOwxontffkWfrirDYxdAIsNGVdUlsBlwKeMPDBazeDUPvkoqjTsQIuxDCqgOGzrswLLpLtdiILCWDIcfErtFIbwazOiUQCgHUyHBWiOZdhXXqsf', 'ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', true, true);
        get_4 = objectStore_5633.get(KeyRange_22);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('qcvfYHWrjmmsMLbglkIjMrWSdlxCjaKDfPygoHYeNlMLsCBxkeZdtmmCehELKeNOBHyrPkcgZmdXnzaDrlsobSgmVgEWCMHHQVJmAIDrWWbPyRgbTlzOZtkRKwPWZjjvCEvqCCuYniEkDJHHPCnXhjzwlbFWnVAaDXYMaWXdRZLIUlTxBYIkyWIHKKorNxMskpyBIXqLGXVdZEkBHiKhGxwdwXHpsBHwsnlLFnumtsiTCYlzBUoqdrWRDRSUtIlFQOVlehWvgAboSiHEqugpYgzCvAcHpPVgcqMtaICRhtSYqslWkGjzfJNblLYJGQCSdrclqViAlCEWUnRzjjMYTJNxNbzwyuFqfJJOPPAPXEZlzPeGCqgDHTRbNgmzmscZAeWzwBTyIfNtSAlYWbAIEUEJOyZaHbsWInuSevMbABgLhUsmSyxlsZhZYtbZsgpaXllGcJqGrYccMJfxJuuVHvUEFWFXRFCXOcOZAtCWbjUNoweFEfSfyMjPqvFILKqHOhBKdBKQfUKbEjJTMbOEJDBywfJQSDyUjsLzwTIFmxsZSHrMtBPrgkAhToucnCaLLYyALIrUEmBjjTAweiKATwgIrJdJFNHwaxYBPmfQqXKwkhAMuTOjyQyVANBVFxofBIGKWouJkOXxEulXDfwGhgxyefpAdaOwWup', true);
        get_5 = objectStore_5633.get(KeyRange_24);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('qcvfYHWrjmmsMLbglkIjMrWSdlxCjaKDfPygoHYeNlMLsCBxkeZdtmmCehELKeNOBHyrPkcgZmdXnzaDrlsobSgmVgEWCMHHQVJmAIDrWWbPyRgbTlzOZtkRKwPWZjjvCEvqCCuYniEkDJHHPCnXhjzwlbFWnVAaDXYMaWXdRZLIUlTxBYIkyWIHKKorNxMskpyBIXqLGXVdZEkBHiKhGxwdwXHpsBHwsnlLFnumtsiTCYlzBUoqdrWRDRSUtIlFQOVlehWvgAboSiHEqugpYgzCvAcHpPVgcqMtaICRhtSYqslWkGjzfJNblLYJGQCSdrclqViAlCEWUnRzjjMYTJNxNbzwyuFqfJJOPPAPXEZlzPeGCqgDHTRbNgmzmscZAeWzwBTyIfNtSAlYWbAIEUEJOyZaHbsWInuSevMbABgLhUsmSyxlsZhZYtbZsgpaXllGcJqGrYccMJfxJuuVHvUEFWFXRFCXOcOZAtCWbjUNoweFEfSfyMjPqvFILKqHOhBKdBKQfUKbEjJTMbOEJDBywfJQSDyUjsLzwTIFmxsZSHrMtBPrgkAhToucnCaLLYyALIrUEmBjjTAweiKATwgIrJdJFNHwaxYBPmfQqXKwkhAMuTOjyQyVANBVFxofBIGKWouJkOXxEulXDfwGhgxyefpAdaOwWup', false);
        count_0 = objectStore_5633.count(KeyRange_26);
    }
    catch (e){
    }

    var getAll_1 = objectStore_5633.getAll(2535256656);
    var getAllKeys_4 = objectStore_5633.getAllKeys();
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', false);
        get_6 = objectStore_5633.get(KeyRange_28);
    }
    catch (e){
    }

    var index_0 = objectStore_5633.index('index_3760');
    txn_8481.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8481.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8481.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8482 = db.transaction(['objectStore_5633'], 'readwrite', {durability:"relaxed"})
    var objectStore_5633 = txn_8482.objectStore('objectStore_5633');
    var add_2 = objectStore_5633.add({f0_b: '<number>', f1_i: '<null>', f2_k: '<array>', f3_u: '<boolean>', f4_y: '<array>', f5_p: '<array>', f6_b: '<object>'}, 'nzGWBzMfJECtAZhDYmruSCgMbgAiyQCKdfaLhQovtrspPhCpYBSowYYhGyYhZAGSiAYSrWnTGEJzNuwgsRFjVVMVYnjvzKxUeMMpzbgRmzMUkMCSYgwxxsaLPrdMhcDYdgSEeYYkGjLjllbuKcuOuyRCldteMpCyhyqNcLVLUBZBVChQJahewsQRjmQvYmrWEcIOEYOPYbTKmMbzirQcysfoQBTUYBFReFwfPQtZNwYSvBQShVJpMmgvXsRmdOxZQLgBuxpavMZPrsDNcMFSHXFVxTmEPpBlQRVnqyhCyjozcHdBccGFdyEOVGdwjxjhzJdjNVYSzMDciXtpMGHdesviUBxHmVLHWblmXHKdcZcSVKgBFXFjMQERYbDsQaiPVUhSlIgBEftKBapAfoSMK');
    var count_1 = objectStore_5633.count();
    var count_2;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('ZgDBPyyUBvMGodNTfWCamMRzpUcdAVFfkyrGszYfONFGdEfEjxXpNxTRylAmXIPgIxjguKJPSroRetBBDFIzkLFwDmuFVXAHPNHVWdNznJDMxXNAfxjNNaNqAVffLkbHkDmUBREDaqjijzncDlwqhfOyHeExnhfIDMinxXukequTokiZdupyEaJahbmpervhgrEFQvdooOjbBPYXeddzTMvtJgzxUQCqJPihiQEywLbiqslpyruneNpmImzjPThWxmrpZOuZfAHQDR', true);
        count_2 = objectStore_5633.count(KeyRange_30);
    }
    catch (e){
    }

    var put_3 = objectStore_5633.put({f0_y: '<array>', f1_b: '<array>'}, 'NEENerfVbMOkYgCLvXCsrIZjkoDLmSIuythaqRHDismoGaLtAqryFDBontHcpFuHmskOPsDdiUnPhEFWAjlVYgoGCPglcfbpdbXrUJQJomFUXCbQvGGpTZuAoZPOjwtetALHLcqcslijMoDrMgwJqzrDzxguhgPWjwyRycBneGUHOiikTxKIIsVLllyoPFeQbeJvmRtqBbxIcgBQhOWhIWoWIbnKikRcipqIrvxvflEamFwrlDVMnxkywElvqUbDCRvQxfIoRkAmcIFWguLHFDOAGXOSkkqyHOGcCCyfJvbgPQtKgbHdCxfXHMZWwugLoCnBviDvBhCuFSkKPWuyfMmmqoJOKuVQMcaKVfCLqmWylIEmKxefFQXWubbfWhwtBodLHVsNSTwZKsePKnOlFrUpfVHOaDnoYghKdhOylTttMhiBtiOYhYjrFSXbdntohDiqWMPLSyFPhDpSolIezumNVCRiRkeLWLf');
    var add_3 = objectStore_5633.add({f0_v: '<boolean>'}, 'MebnajcPfvABMmKGkeYcejIODkTIgUErcXaEqLMrMYAJalRZpHYpAXVbUmlSpRSKqczWdBjVSoRbgAeQBvwRHrELnfZXDgjYOxAsZfUIayjsajhoSHkdJIuvjPSujfexYkBfpgiMKVNGYIoMpRcnDifxiqVoOsBUmwKCbjuwtyganaZJzXZqhLWGpuwhqhqzOEBhWPVlDQmbgFWVYPKImSwVRnLuAIhfolkmZyxodBWXOzXstwxxaqgjTmhjCtjdAHwnOPHrXxwzzTTbVspYVblmNILxwWNxwgWgdlnJisXZwxizMtlMNTAXnbLzDCWMrHgyxGaKtVnlgzQbakoXtlLCyXWEpBgmrkvsRWorDXnNmxQdsaxHetYVSLfmPiBZfkbYbtWvaUAkEuDBuJFuZrcWPwaGmLiifpyoLCBCXUEuFXjhGAgmWkXdFLpWzUNUGoCupaNtxmQJRhwDHZmStooMZoIkQTRkwUFrGvJIcmTyVpftaWeXLtNHPcRrLdQerSQhtNvbgVULJwgvpbGywfRIvPrUMpjIAtgDFIjBYBcJiPxmJRXouWdXWVKrWVSLMNTAPuGrgoaHYHEoPZXGsppNniDRcdHgzNkBsJfibMJDXEevjqaKrrmozCvhbFlUbSmmRRCncYGWXbgfnAchbhcyVuxldbeTNMSHwfnuxreqyAOaNWSMFwqTHYfoaaiMOtjnopjholTvGsCCYoWjRUTOZWCxtNwMGYbdTPgnGwzPFVfmIpHbhVSqhjNdwmWKcMgwgbbOyPvgZgZhpcxnenpXsVSLGMymwTYHwpnehRcXgQHSPyDgcnckhcySZDGyTuhxelwdhxqQRlDelSqydnAQfhHEptmLWtEDcDiSekzfbdjhqPjYFkWiM');
    var put_4 = objectStore_5633.put({f0_f: '<array>', f1_n: '<null>', f2_j: '<number>', f3_i: '<boolean>', f4_z: '<string>', f5_u: '<boolean>', f6_g: '<string>', f7_z: '<boolean>'}, 'JWkOZcLekMVzONkvSZSQLRUEGflmIKLuBgHhCXajcZWMPhQSeTlWVNoguKiDepcMhIZMolXQyvVWHltHrVUykUuUqyjeYSwPSVKEavHMpokaqjIXUtvgzkHlQjGMuiyTUKTTBklwzhdmJwGgtfGXyqPmdKLYTadqVBxPFVGLNazzMWOdUNifdKMyuCOiTEuGxypLViaLGXtXgnaIFJQDToxYTdTXQLQtJSusbpskQTsfWgIXasWqVINePLdXFsqLLLYyITeeQJDbdhQwPHHZqECJIMphdurwcgtvcclAkeQDWWQdyvqxgBKGhCrEFuCIURZVUYsseZauLRFhqWXEogRhBmSUgwNGhXFKwTJvXOYycHOBAFkCZkrCbLbraxveiPxdSzFVmMMIPpLHdzmBDKPTAmIQBmAxRuHdwDMoRSIxCoVddiXKOhBSYAArJsKkZukoafBbFaXyBrlOAOAculMxytoinECPlfOEkjDzYTHgbXHNXtRldIAmoYDRAoyWJXodgBkFYThLvLuSVgkjQmKcRgolpLSyntoHvsTgNDYvnniTzPYGgYzApSMLCEbMtVrycKOZiCRacUtfxiVCymIPvbUbHEmzIVzAMvZXPWVWSsunbgsJFFWqrJVNdZdVosGpUBekFsivkPIYjYhtKIAwDOUFSqCFkDvKYmfLyqRmlPFwIGWuGzJBRnVhHrtmFEjqpFVZAIgpLSFeNbsIWNeOEHOXeWwXrmECXcvqPyzwUPUpnOSzOTPryhhiWDnbIvsfmilNqWczXIajJYnGTkFUKIDuULlfkwdbqtaTQksJDnuYIAecjYPtyWjcyWyAtGxBKCHoHGTHdrIbEzBTGIYdVfgvtJnqABijWvHUFYlDpbFLhogLSBmlPKuWdEsHZJKrrDLVLeuzVzLbwSWoAVAPeVdMMzkImEGEOxQfpCZEMUwgVpEenyeaHDZNFhtgAsnHAgCG');
    var get_7;
    try{
        KeyRange_32 = IDBKeyRange.bound('MCYThgjNeFyaRsayHqiZXUQpIvwuNDuoatzSTPicumKqrQAthSsbvLPODdNpBquIPCcRRCiooepCJvKkVMtUXEJjkCzYGjgTtfRDmtuXEYLNCMKtZTjJewFjIXeThcYitLsJVMJntxQcDymEuicyNWBfqrcaYWHeHCyZRyXUNWhNmcVhryZVuNgNJqpcdhVAENVvEDZTOUGajTlgFLQNByLhiVeWrxEEmRcvhDlsUFEYfFKzFPkmVxSBwuWPpdyqwdDXCnosCQPTTtPiyXlJpwTJahhTDnFIGRTtrhWfikinRjtiOSFNebMozWZESZWKJdWYrqpYQBuUurHvdbayMnDvcOSqoHdmAtCauHVZrVrCMQRIJzyAXEoHPFoYgOZmDZzQlNbFdXCdDMoaPmujrFbKFFQpOSDBHcSHAEEJFyHinDnAbeAEKcFvtbXRGLiVBVUfojpinWrqWZMrjzUBXrFbJEpASQVJqPGigxEmBEAacbaWRmDFsdaBOXSkknCHMMhrHRZhTnjjNDidRyBnisPAaeremBzGTjPyReqwoZpgvDWUzFmbMDlfwpUrHqVllJKSbQUvyADogeZFOAXEEFvoiUVCGEutlZSjueLACdTIxqyjiDEYyAJdUQKsnjeejjZBAILHANuNBIArBoazbeEcAvotzVLTASkBUtMfbMOhOYBGcEdsJshSojfHYeaUdkolQRhaXbehdqelGcxNtTaOgvAQnQllDkkfUyiCGErYxhmXDFibCehHWUKIdYaivSAcpIgkEEDkQwSKEAiyeNaPqhzocsCgvKTsFnWZaDzXDDrtEHUkEcpAwoBfqNzQodtQujrFIbEUBlDTcDVinevAbiWmhnmQFPcKJptRGOENrQWizDrSOlXuMZYYnRpzxSeSfnHSpaAFAkjAOnqpeSzAmvmvrhPGcDyHaFKHJWZILwYHJwFbRUCcZ', 'nzGWBzMfJECtAZhDYmruSCgMbgAiyQCKdfaLhQovtrspPhCpYBSowYYhGyYhZAGSiAYSrWnTGEJzNuwgsRFjVVMVYnjvzKxUeMMpzbgRmzMUkMCSYgwxxsaLPrdMhcDYdgSEeYYkGjLjllbuKcuOuyRCldteMpCyhyqNcLVLUBZBVChQJahewsQRjmQvYmrWEcIOEYOPYbTKmMbzirQcysfoQBTUYBFReFwfPQtZNwYSvBQShVJpMmgvXsRmdOxZQLgBuxpavMZPrsDNcMFSHXFVxTmEPpBlQRVnqyhCyjozcHdBccGFdyEOVGdwjxjhzJdjNVYSzMDciXtpMGHdesviUBxHmVLHWblmXHKdcZcSVKgBFXFjMQERYbDsQaiPVUhSlIgBEftKBapAfoSMK', true, false);
        get_7 = objectStore_5633.get(KeyRange_32);
    }
    catch (e){
    }

    var add_4 = objectStore_5633.add({f0_o: '<string>', f1_c: '<array>'}, 'DIIhOLoBkJJTTSQRvUNRNpcdDzTszYJoHJfEGgSYSdRnHvatxNuZPUYYEqrvZLLWxorJHhfzRgLJaUhrxhKocPxKsTGCoqffRmfGzLdpcVAQtWXfomYLlKnzydNJxeubCLTGYprodfAEXWmeFlwRgHvjzVruXReIldUsTwUDJVKdfJaZDZkBBdzEDlvUuuxqgYtVTDklHsAUbgFvaXCTtvcXRQtHzkDJCqJewQBAabNfujXtaKKhGOdtyHXdGXycNxELqpMSlieoQeIBAbWTcuKpwsOLgGYHJfeTUOYhTXXZJHnANgXqUxGdtKwzNERlJsxBsinnNZXFGSlNvfCoOkjNmbCtCydrtEGvAibDOZWyaIfHQBuwQoRfpdfRXdtQfIPVBStWqrhIXlkZyozOmRLGCAHZYTNUuWLiTaEnhxHtXDYtLXtiYAQudxsgSPZWAlZahxdqiTPMJbNaWyvuzuSXbETpSKIItbWlzwqGViQvkfaqGDGGYvyGGCAITTcbXLMsvSgUolUZOpCWZDwfLqFToEXvYyZCIqSliOjdWcjeSyKNVBqUafrMWWuPZdqySUsNLbvNcBBhMJfQculSUPpEYtBBFHCuponhaVoJHEENpmbMSAwPupUHmtxcHIkNOwYHLzDVqvPKDyTDXCmrcvRqRoLcwkSyqxsGRGUaETLcENrgiIMvRfCxSHMbhLvzMvwulJijVifRUcNPUQfOgMghFUHZGRJTThUIVIQdwNmYohMjApBjgpQKlarZwXbBjZxehuNFaAPKiwyFAATJyakrvGPMuOTwQx');
    var getAllKeys_5 = objectStore_5633.getAllKeys();
    var index_1 = objectStore_5633.index('index_3760');
    txn_8482.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8482.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8482.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8483 = db.transaction(['objectStore_5635'], 'readonly', {durability:"relaxed"})
    var objectStore_5635 = txn_8483.objectStore('objectStore_5635');
    txn_8483.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8483.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8483.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8484 = db.transaction(['objectStore_5634'], 'readonly', {durability:"default"})
    var objectStore_5634 = txn_8484.objectStore('objectStore_5634');
    txn_8484.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8484.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8484.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3794')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};