let db;
const openRequest = window.indexedDB.open('str_594', 607514855190555)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4910', {keypath: 'QUhJwpuueSzdbgIvUhKkeuduiPOBezFJKOtzvytYMSgTJgsJLXhtiLVHyMjzUUrjhYwiqBIcWzfnxsDQNScGANLHUnqPvykwxMOymdoqqDqtHQRaqvlYkuPJgttJHhkAhTuOzRDHxJhNzRlywQVLNGszQdYOKxLnEOiiQvaLMhMXEhRgFCOgOBQcnprLTKhmvLRbYqWbdyApzHNnglgFXzCitBslVkQeulurSSUJlrrMFxZNmYcUVIKptHATCtzIPmOUvqrGSsnmwRtRkaZQwuRpLjbwRCcdzhOhgLYLFtsMhsojdTcjVQCHdiawyseQqxTKxwMwGDymuxNwCrYoQFdEcLKLYxfVLmiGlWxGcSkqUxedMJdLVNiWqLCfmfszdnAqaormIKUVgLqZUPtAzTEgpYWIcLfQpLIpmQPuVXIFshdQrcfpYcDoNZjCzfYfdiApJNIrQCFImdISAILlogOQofLLNLeFpSZXcQwmBAnQmlsuBGBqEtsyGTIGwBQhHaNVCOvQTOWTJnawrntfAvYGuWVQsxmJeQuopltaFPJwtBxGQfEWZhmyoyUVOdvWJvqDzoSfJocxFVmJXHEgmRmZfcrSMRNuFItyKsvlfSZuSwxxPsTAvBuLfJXJwkmdZxqLbMZkxrsbuvxdodJvFItOWOMCOklrXhdPKWaUX', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_t: '<array>', f1_m: '<array>', f2_p: '<string>', f3_a: '<string>', f4_g: '<object>', f5_b: '<null>', f6_b: '<null>', f7_c: '<number>', f8_n: '<string>'}, 'fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB');
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_l: '<number>', f1_v: '<number>', f2_o: '<array>', f3_j: '<null>', f4_y: '<object>', f5_h: '<object>', f6_m: '<null>', f7_z: '<object>', f8_j: '<boolean>', f9_r: '<null>', f10_i: '<string>', f11_v: '<array>', f12_w: '<string>', f13_k: '<number>', f14_r: '<boolean>', f15_x: '<array>', f16_m: '<array>', f17_n: '<object>', f18_c: '<null>', f19_c: '<array>', f20_g: '<array>', f21_x: '<boolean>', f22_g: '<array>', f23_k: '<object>', f24_x: '<object>', f25_d: '<null>', f26_j: '<array>', f27_n: '<array>', f28_o: '<boolean>', f29_a: '<number>', f30_j: '<string>', f31_h: '<number>', f32_r: '<number>', f33_t: '<number>', f34_d: '<number>', f35_y: '<null>', f36_g: '<number>', f37_z: '<boolean>', f38_k: '<object>', f39_h: '<array>', f40_r: '<array>', f41_k: '<null>', f42_b: '<null>', f43_j: '<object>', f44_s: '<boolean>', f45_h: '<null>', f46_h: '<array>', f47_m: '<object>', f48_h: '<array>', f49_h: '<object>', f50_d: '<array>', f51_t: '<array>', f52_t: '<null>', f53_o: '<number>', f54_y: '<string>', f55_m: '<boolean>', f56_h: '<array>', f57_h: '<number>', f58_o: '<object>', f59_n: '<array>', f60_l: '<number>', f61_r: '<object>', f62_a: '<object>', f63_o: '<array>', f64_m: '<string>', f65_t: '<array>', f66_i: '<array>', f67_x: '<object>', f68_t: '<boolean>', f69_r: '<null>', f70_p: '<string>', f71_j: '<object>', f72_r: '<boolean>', f73_m: '<array>', f74_z: '<array>', f75_u: '<number>', f76_x: '<boolean>', f77_f: '<number>', f78_r: '<number>', f79_h: '<string>', f80_i: '<null>', f81_p: '<number>', f82_c: '<array>', f83_s: '<string>', f84_s: '<boolean>', f85_v: '<array>', f86_x: '<object>', f87_o: '<boolean>', f88_c: '<number>', f89_g: '<boolean>', f90_k: '<number>', f91_l: '<string>', f92_x: '<array>', f93_j: '<boolean>', f94_o: '<number>'}, 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', false, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', true, true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_b: '<boolean>', f1_y: '<null>', f2_f: '<null>', f3_u: '<array>', f4_k: '<null>', f5_k: '<number>', f6_x: '<string>', f7_g: '<string>', f8_m: '<null>', f9_q: '<string>'}, 'zPqXeuVyyRJpmdNmoxHIiINLrKzgFbEITIoWomOPHMGevTGFsLNgHUGXKtFHasUbAmQrZDQTMovRNHjEofdAhOoCGmYMEeYBIJSNxPTufbdwIdigblIvcBWIspacQyMLXuCjIkFHbsGFOnUqxowEzwBPTaxuKzvxawYfBTWxEmEvjDtwveLjvKNvyDPrkSGquQsWJUhprtmkkbQkLgjGxwNTegPYyTCskkjiZisTXaBZuhVJwhkUSQVgKAQqcqtyetRCoXtuWLZNAdlvjlkFbACKXsatVUABPScRXiqYqzLDnHXbdbidrjRSdEWXiLHAnzjDvkrebVkLAujQecQYvkTHPivPyPmguOYsdwICrukVbrlcWRaqZEOgjmXVsUfOzyTCBaiODyKtzxkKoMvXFkpqhQFAMEvRnOXMHtAtzFRMxRkokDVqvLzAExzObQqiyaAwNHUvkqjIicxPiDwdKtcmnXjkCMYVtruorsnCYdbQDLhihynsvhPqPgxXpxFKkcFhXoqfNMbPXNCOwyjvPfcTQclXFWxGtkSCRvLHBrfpzNRWGGOKzhHbvhwbPJexkaMCIcRoHvKTfwWWVNKGGYVbnuIgiXIlYxYPBHfKEYSKIGNyztrqXgAtLwDsVaBrmZndLRDscsnzKpMLJgKcZgyPlVsSVgJMJXydzzQqODymLXBuUneeYoyYjDDqNOIWRSNnJzhPPXdlBXJHjbcgXLZzarkBxxeZSNsRrOVUdQVximzxDHbSxJTxGoQIXUcGpaxIxMgkCEvuJtpHbEGbqOVmrczzHxWfrkgNaGtIGzfDkbAJtFNyuqLacyFSDTfCszAXlZJkkt');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('zPqXeuVyyRJpmdNmoxHIiINLrKzgFbEITIoWomOPHMGevTGFsLNgHUGXKtFHasUbAmQrZDQTMovRNHjEofdAhOoCGmYMEeYBIJSNxPTufbdwIdigblIvcBWIspacQyMLXuCjIkFHbsGFOnUqxowEzwBPTaxuKzvxawYfBTWxEmEvjDtwveLjvKNvyDPrkSGquQsWJUhprtmkkbQkLgjGxwNTegPYyTCskkjiZisTXaBZuhVJwhkUSQVgKAQqcqtyetRCoXtuWLZNAdlvjlkFbACKXsatVUABPScRXiqYqzLDnHXbdbidrjRSdEWXiLHAnzjDvkrebVkLAujQecQYvkTHPivPyPmguOYsdwICrukVbrlcWRaqZEOgjmXVsUfOzyTCBaiODyKtzxkKoMvXFkpqhQFAMEvRnOXMHtAtzFRMxRkokDVqvLzAExzObQqiyaAwNHUvkqjIicxPiDwdKtcmnXjkCMYVtruorsnCYdbQDLhihynsvhPqPgxXpxFKkcFhXoqfNMbPXNCOwyjvPfcTQclXFWxGtkSCRvLHBrfpzNRWGGOKzhHbvhwbPJexkaMCIcRoHvKTfwWWVNKGGYVbnuIgiXIlYxYPBHfKEYSKIGNyztrqXgAtLwDsVaBrmZndLRDscsnzKpMLJgKcZgyPlVsSVgJMJXydzzQqODymLXBuUneeYoyYjDDqNOIWRSNnJzhPPXdlBXJHjbcgXLZzarkBxxeZSNsRrOVUdQVximzxDHbSxJTxGoQIXUcGpaxIxMgkCEvuJtpHbEGbqOVmrczzHxWfrkgNaGtIGzfDkbAJtFNyuqLacyFSDTfCszAXlZJkkt', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', false, false);
        count_1 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_g: '<string>', f1_t: '<number>', f2_r: '<boolean>', f3_s: '<string>'}, 'tfhfWrgNgcEzmTNEvBlnzjXYOgcTFZohtlajXYPzsYKvjBYfeUjAtVpxAdfERQkJwXvVSZBKRzcPbgTqOvtMaeatroiiAOLVnxpKfTqmUMlHsYpZbspfRMIAAOOPZUcOcVXcebRThBuEERadCisbPsadkyVcaxIcmFYYopzEesoEQqHlKZrdNwMmgLUixiQyVwZnumuRbIlNZJvlzKKMkkAorfVIvcZOEHSTeRtPRRaaRbsjULXZdkEYQLYjLPaVJNFaqyYXabOYsGvMhNKvyuTVkFLwvdcoIgvkUqvWECfKuSWgomzqlItniOtjcRVHcBlPCyHNodvtmGjqjcTHuJOMclJRcljFtCSSkTsJXkWjFLWgweKpkBabjCekhqTxGKWQyEacmduLvVGJZmLBOEoOzIvPdIJazEyFaunHGTyIOjjWkPbdIGuGbCoCxFjGxNANHlALCvNdysIGDYxcjQzCxUezyltCaCKQBGEFXfPXHdvsQjbhZfqzZPyqyUxCjJSSSpz');
    var add_3 = objectStore_0.add({f0_i: '<number>', f1_v: '<object>', f2_p: '<array>', f3_w: '<number>', f4_s: '<boolean>', f5_y: '<object>', f6_q: '<boolean>', f7_l: '<number>', f8_p: '<boolean>', f9_l: '<boolean>', f10_r: '<string>', f11_v: '<string>', f12_y: '<string>', f13_a: '<string>', f14_i: '<object>', f15_a: '<boolean>', f16_l: '<boolean>', f17_k: '<null>', f18_z: '<object>', f19_q: '<null>', f20_i: '<array>', f21_f: '<null>', f22_j: '<object>', f23_c: '<string>', f24_w: '<string>', f25_c: '<string>', f26_d: '<object>', f27_q: '<number>', f28_t: '<object>', f29_f: '<object>', f30_g: '<boolean>', f31_v: '<number>', f32_m: '<array>', f33_p: '<boolean>', f34_s: '<object>', f35_x: '<array>', f36_z: '<array>', f37_o: '<string>', f38_f: '<object>', f39_s: '<boolean>', f40_u: '<array>', f41_q: '<string>', f42_o: '<number>', f43_i: '<string>', f44_k: '<null>', f45_j: '<array>', f46_m: '<array>', f47_c: '<number>', f48_x: '<number>', f49_c: '<null>', f50_n: '<object>', f51_e: '<string>', f52_c: '<string>', f53_g: '<array>', f54_p: '<null>', f55_y: '<number>', f56_a: '<boolean>', f57_e: '<string>', f58_l: '<boolean>', f59_o: '<null>', f60_b: '<array>', f61_f: '<number>', f62_d: '<boolean>', f63_h: '<object>', f64_l: '<array>', f65_b: '<boolean>', f66_m: '<boolean>', f67_l: '<number>', f68_w: '<null>', f69_h: '<string>', f70_n: '<array>', f71_a: '<number>', f72_v: '<string>', f73_q: '<string>', f74_e: '<array>', f75_z: '<object>', f76_u: '<string>', f77_m: '<boolean>', f78_a: '<array>', f79_r: '<number>', f80_h: '<null>', f81_f: '<number>', f82_j: '<number>', f83_p: '<null>', f84_q: '<number>', f85_r: '<boolean>', f86_x: '<array>', f87_d: '<null>', f88_y: '<null>', f89_g: '<object>', f90_s: '<number>', f91_d: '<array>', f92_p: '<null>', f93_m: '<number>', f94_b: '<object>', f95_i: '<boolean>', f96_a: '<object>', f97_u: '<string>', f98_p: '<string>', f99_q: '<boolean>', f100_m: '<object>', f101_c: '<array>', f102_k: '<number>', f103_e: '<object>', f104_c: '<boolean>', f105_s: '<boolean>', f106_t: '<string>', f107_e: '<null>', f108_f: '<object>', f109_m: '<boolean>', f110_o: '<string>', f111_r: '<array>', f112_w: '<string>', f113_o: '<array>', f114_a: '<null>', f115_a: '<null>', f116_f: '<string>', f117_c: '<array>', f118_x: '<number>', f119_b: '<null>', f120_d: '<null>', f121_u: '<array>', f122_c: '<array>', f123_l: '<number>', f124_z: '<boolean>', f125_n: '<string>', f126_d: '<number>', f127_q: '<number>', f128_u: '<number>', f129_w: '<boolean>', f130_w: '<null>', f131_j: '<array>', f132_o: '<boolean>', f133_n: '<boolean>', f134_g: '<number>', f135_x: '<string>', f136_h: '<object>', f137_w: '<number>', f138_q: '<object>', f139_a: '<string>', f140_s: '<number>', f141_p: '<boolean>', f142_g: '<null>', f143_r: '<string>', f144_x: '<boolean>', f145_g: '<array>', f146_c: '<array>', f147_u: '<boolean>', f148_p: '<string>', f149_a: '<array>', f150_t: '<boolean>', f151_b: '<object>', f152_g: '<number>', f153_m: '<array>', f154_v: '<null>', f155_v: '<null>', f156_d: '<string>', f157_w: '<object>', f158_g: '<string>', f159_i: '<number>', f160_j: '<array>', f161_p: '<null>', f162_y: '<string>', f163_r: '<number>', f164_i: '<string>', f165_q: '<object>', f166_i: '<number>', f167_z: '<array>', f168_y: '<number>', f169_g: '<object>', f170_m: '<object>', f171_n: '<object>', f172_l: '<null>', f173_v: '<null>', f174_j: '<number>', f175_w: '<number>', f176_n: '<null>', f177_j: '<array>', f178_l: '<boolean>', f179_k: '<null>', f180_n: '<boolean>', f181_w: '<object>', f182_z: '<string>', f183_w: '<number>', f184_g: '<string>', f185_u: '<boolean>', f186_w: '<string>', f187_v: '<null>', f188_w: '<number>', f189_r: '<null>', f190_r: '<number>', f191_s: '<string>', f192_v: '<boolean>', f193_f: '<boolean>', f194_l: '<object>', f195_o: '<array>', f196_i: '<object>', f197_v: '<boolean>', f198_d: '<null>', f199_i: '<boolean>', f200_d: '<number>', f201_x: '<string>', f202_g: '<string>', f203_f: '<boolean>', f204_o: '<number>', f205_s: '<null>', f206_t: '<object>', f207_c: '<boolean>', f208_h: '<array>', f209_u: '<null>', f210_o: '<null>', f211_h: '<boolean>', f212_d: '<string>', f213_k: '<string>', f214_o: '<null>', f215_u: '<null>', f216_j: '<string>', f217_u: '<null>', f218_z: '<boolean>', f219_e: '<null>', f220_t: '<null>', f221_h: '<null>', f222_d: '<boolean>', f223_u: '<object>', f224_n: '<null>', f225_q: '<string>', f226_v: '<boolean>', f227_o: '<object>', f228_q: '<array>', f229_d: '<null>', f230_u: '<object>', f231_r: '<array>', f232_i: '<array>', f233_p: '<number>', f234_r: '<boolean>', f235_s: '<object>', f236_e: '<array>', f237_b: '<null>', f238_h: '<null>', f239_l: '<number>', f240_v: '<string>', f241_y: '<object>', f242_g: '<null>', f243_q: '<array>', f244_o: '<string>', f245_c: '<number>', f246_b: '<object>', f247_l: '<boolean>', f248_a: '<array>', f249_i: '<object>', f250_y: '<boolean>', f251_m: '<boolean>', f252_c: '<array>', f253_d: '<boolean>', f254_f: '<string>', f255_y: '<array>', f256_g: '<boolean>', f257_x: '<number>', f258_s: '<object>', f259_g: '<null>', f260_k: '<string>', f261_g: '<number>', f262_a: '<array>', f263_e: '<number>', f264_e: '<number>', f265_p: '<number>', f266_d: '<boolean>', f267_r: '<boolean>', f268_m: '<string>', f269_x: '<boolean>'}, 'qTsSknsaKIREidrAdHJeuvpliqlWQOGUiMFcCIRbkTeeowUDMbYZvwWRNIJQRJrIXLSXfKYbTHAYwOUDrAJeNBEPJJgVEFvIeJayQdUyBCvzObOpyzdVyTAwmbhSUChOsErtMDYoqvjrviemHwYoYksFKePUcepfrOoFdFDhnpElYjRTIJGLkvMsEVAYpZpRFeOKTchRtBnNCLypGXbRrsofNlagFSAFKSFajUgKYZkrjpwvShXbJXHCukEJTpqHrVcFezooYSwScufUQpTdvdmkvrcovgHXQdgTrJuIIKizfAfvhynxbfodXYWNjQOWpnKVuxKjUTrOzYAJLSHSBsyraFLBTsaPXugQxVWfbmLTrLkYATxTVBzivmOHRobBoyLNAuAgHDWoKDBZtUerEGTdKDIXKjJInQxqpDrpqTLjGKIqFhESEPOupjqmNGlvCkssTAekvNekNyMKRrylNcjUbgIWMqicWfjAlgqfQjFISTfebhUwGfAgnbZfoTtnQZSvmBDqENGrGPZGknHjSCZqBoEJDlSGKiOpGQBposMxjYiyLIKlJiwJgubiBmeeqEaulWjBiQNWqZhuhqGRCRaBSwPSqVXtmqVnXcJjqZjytZaJTLZBGWqakbxpOecxiDPVFDfuWyKiyUQupDaXEuwIHsVkIzJQbdxDpoCOdooiDEMXgxcJUjRRylVmMLOoAZBhXyAgKJXaHIRZtiOzOlWUYNbbXYRvCmtAoYMvCPNuAbWDwEhaUXRurwhxzsmNutuVLmxOpYdRqzI');
    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', true);
        getAll_0 = objectStore_0.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW');
        getAll_0 = objectStore_0.getAll(KeyRange_7);
    }

    var index_3281 = objectStore_0.createIndex('index_3281', 'test', {unique: false});
    var index_3282 = objectStore_0.createIndex('index_3282', 'test');
    var add_4 = objectStore_0.add({f0_o: '<number>', f1_i: '<string>', f2_j: '<number>', f3_p: '<string>', f4_c: '<number>'}, 'EPtcsMLBfblIkrcQufiaoolqoDHCWdqowjhUUzBSgHSygfLsUsmBDJZoMPlBgQkHufVFgFvcPEnAFHRsCOkVwMghPGqClNoYKDWceCTILtJpsfgALdgQfhAWBYPyjjCncdblylaHvVtLfqKNshHzCRpMgdyVwNBbjHJSmDYzISjFgBzWJGuTJjDPpgIMRYInSyjbUCABaCqUrvvmVctDOpNlXWtSuWjqWggfVteQSFFqmtBpqxoatjAUqACgBSCgrADnFPGqFMtPtuJvCfFJFGpeFVvNuuTOsJvYEVYRZJTWFYZFDNgtIWTCHUgAlMnjVNWoHnSaYtsMUtcWkxgofTvcPcTMGuYpqnAPbOoyMjCQnSNulNWwlmRAnJGUjMWmrTdlmzsxlTEHftnOgizqSZhJLwkHeykzBHIlmvhpnIXeTaprmclobhVpILeguEfBSGmxwOtIDvggsyDPZWsYOEbdczjdzkUgKqXyMPgcvirNAqcvMwcIKSKtkSYApnTQBpykruDVnniDnsgPLfxtWoyCjwSzlTyTBzmlmWIjDmgsOeRVDUxJwUSQFzZGiWDpgiKOvVrlZtoVZwyQVYzrxCANHshJYmNUSraltrxjWhnqluTJfnOYRYjHSFZrwaqShiZocownbDcqUuDvkkYSquPtlRRvRgkklXjxXKbMMRCNuunxaFyezOuwFRMZSYBGXgFlrozGMnNzJTCvTLjwosXuwSQAeGcalsxoTCLNPJFkbJekVwqGnEZXRnTpMXwHujMZJkJqggQEprTlxGITFBTVeuctgBibkUlTCLypNJEoRHFrNYbuxZXmhoDJDpsOwHlzlOPQEaONHFOVkotiyYvTswiZySrxWRCXAAwWdblZGdoDoovEaPutrCeIoFINOlZkPVzpuHTHuOnQXnyiEXvjHktjjulgXXfszHjYmSMpvaDpcOjbuGIoNZyChpgvPgRczm');
    var add_5 = objectStore_0.add({f0_u: '<string>', f1_q: '<array>', f2_x: '<null>', f3_r: '<number>', f4_n: '<array>', f5_e: '<string>', f6_n: '<object>', f7_n: '<number>', f8_e: '<number>', f9_r: '<string>'}, 'HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE');
    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.only('fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB');
        delete_1 = objectStore_0.delete(KeyRange_8);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7400 = db.transaction(['objectStore_4910'], 'readwrite', {durability:"strict"})
    var objectStore_4910 = txn_7400.objectStore('objectStore_4910');
    var add_6 = objectStore_4910.add({f0_r: '<object>', f1_s: '<object>', f2_z: '<boolean>', f3_g: '<array>', f4_w: '<object>', f5_x: '<number>', f6_g: '<number>', f7_o: '<array>'}, 'BzbbZktAdKUSMPoxWWmVZQAnHnhJpjJQFPknZrtmIvgbHZmNPrWwqJSPTnGlSjOwzfwoeDrhqQIpklYumFGydSIlEebjDvBZyxxzXlVhRhLqmiRTmHDrQiaDVAmhtLFkMJDHVZCjVWPAUZvkNCCzhJGEqlBVfLOBFdxNvOUwfQaDZdaGxtabqWweyegaVqCWACmWGmMQnIaGVEediceirtCPlEVtVeBMXttRxPwUoCafCRiQtHWGKdKOQuVTgMkPQVUtehXAGqvPSNTYovjLKBSvJKBnJNTLzuVtRgkhfFMBoWzYvfancXfakoxPSujDehCdraKwxufYsXpNiWQsSlCFjEcKMnJaCSnZGwdchtTgcpCjThmuFccSBDZuPcHRpMRTApbq');
    var add_7 = objectStore_4910.add({f0_e: '<object>', f1_i: '<number>', f2_n: '<number>', f3_l: '<boolean>', f4_j: '<array>', f5_c: '<boolean>', f6_e: '<array>', f7_b: '<string>'}, 'JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf');
    var clear_1 = objectStore_4910.clear();
    var getAll_1 = objectStore_4910.getAll(2105710075);
    var clear_2 = objectStore_4910.clear();
    var clear_3 = objectStore_4910.clear();
    var clear_4 = objectStore_4910.clear();
    var clear_5 = objectStore_4910.clear();
    var count_2;
    try{
        KeyRange_10 = IDBKeyRange.only('BzbbZktAdKUSMPoxWWmVZQAnHnhJpjJQFPknZrtmIvgbHZmNPrWwqJSPTnGlSjOwzfwoeDrhqQIpklYumFGydSIlEebjDvBZyxxzXlVhRhLqmiRTmHDrQiaDVAmhtLFkMJDHVZCjVWPAUZvkNCCzhJGEqlBVfLOBFdxNvOUwfQaDZdaGxtabqWweyegaVqCWACmWGmMQnIaGVEediceirtCPlEVtVeBMXttRxPwUoCafCRiQtHWGKdKOQuVTgMkPQVUtehXAGqvPSNTYovjLKBSvJKBnJNTLzuVtRgkhfFMBoWzYvfancXfakoxPSujDehCdraKwxufYsXpNiWQsSlCFjEcKMnJaCSnZGwdchtTgcpCjThmuFccSBDZuPcHRpMRTApbq');
        count_2 = objectStore_4910.count(KeyRange_10);
    }
    catch (e){
    }

    var clear_6 = objectStore_4910.clear();
    var put_1 = objectStore_4910.put({f0_o: '<object>', f1_g: '<array>', f2_y: '<number>', f3_i: '<array>', f4_s: '<array>', f5_p: '<array>', f6_s: '<number>', f7_m: '<object>', f8_o: '<null>', f9_i: '<number>'}, 'sSuSbBXNsgrvWBItQWjZPYWjXKZamLWylguNPuLJVUDQQyVIgROMcCrbdjIaAjPwVGzhRiLULhSOEfXchUZkCrJCbkbbHmHiLNjGlFFOiKlVSMKgThVuGwDBCTmMtdCqbbMkAXIItdavFREBDbVqZBGfdeNtOpZYtndnNKcLXsNGcpFoOVTBYRFOyWaucaapkYZFAnWevKFwBEZcDErUszWhtVglqilVUjgxNClFMKyPAWzdMFZvjnSgSadAWzrvxRafdMwYFJtCrrmTUYRnzGQRzCzfZHQAmNEJgSkatCyzNwAmjoBcpazIromwaFduMFKgSLYeyvGviDhHNeUjZqTdwQgsWqutTrsbLpwDeaLkzgafmbLvWQRPfewBdlDdjtLZDjJIYnpOPFYiznzNvCnZkNihXnSFsxWJcFFkfpCHCQnrDniQQRDNEzBkgmYHSOLqUIzGYuSnTJgZyScTYqVUfjFhIKCziDVQWUNTgbuFBSjMoGjVSdhENbwSqWVWvooztJfPkowXhjHNvsfCaNIczsnspnoLCQlNuGuMELzShUleyINFRffKYFWodMSsxpfKYNfQtrGFwKKGAECXMqNwnazjfFgBTPLOVBwAcZMgsryQZXRPGExmrIUQxLHQASXJNvmvitVFdiyfODWpwyVkZNUIhvLQsFMhXZVUaXVkEyMRDyYPqUFfaWAAQTGhCMURbUMxPXNCGSvlkPUAydSWmQsvvuQosyFiRgRASAXtITLmkiUlZQXrUICmuTCGiCdPrcZIrCSIGF');
    var get_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('sSuSbBXNsgrvWBItQWjZPYWjXKZamLWylguNPuLJVUDQQyVIgROMcCrbdjIaAjPwVGzhRiLULhSOEfXchUZkCrJCbkbbHmHiLNjGlFFOiKlVSMKgThVuGwDBCTmMtdCqbbMkAXIItdavFREBDbVqZBGfdeNtOpZYtndnNKcLXsNGcpFoOVTBYRFOyWaucaapkYZFAnWevKFwBEZcDErUszWhtVglqilVUjgxNClFMKyPAWzdMFZvjnSgSadAWzrvxRafdMwYFJtCrrmTUYRnzGQRzCzfZHQAmNEJgSkatCyzNwAmjoBcpazIromwaFduMFKgSLYeyvGviDhHNeUjZqTdwQgsWqutTrsbLpwDeaLkzgafmbLvWQRPfewBdlDdjtLZDjJIYnpOPFYiznzNvCnZkNihXnSFsxWJcFFkfpCHCQnrDniQQRDNEzBkgmYHSOLqUIzGYuSnTJgZyScTYqVUfjFhIKCziDVQWUNTgbuFBSjMoGjVSdhENbwSqWVWvooztJfPkowXhjHNvsfCaNIczsnspnoLCQlNuGuMELzShUleyINFRffKYFWodMSsxpfKYNfQtrGFwKKGAECXMqNwnazjfFgBTPLOVBwAcZMgsryQZXRPGExmrIUQxLHQASXJNvmvitVFdiyfODWpwyVkZNUIhvLQsFMhXZVUaXVkEyMRDyYPqUFfaWAAQTGhCMURbUMxPXNCGSvlkPUAydSWmQsvvuQosyFiRgRASAXtITLmkiUlZQXrUICmuTCGiCdPrcZIrCSIGF', 'BzbbZktAdKUSMPoxWWmVZQAnHnhJpjJQFPknZrtmIvgbHZmNPrWwqJSPTnGlSjOwzfwoeDrhqQIpklYumFGydSIlEebjDvBZyxxzXlVhRhLqmiRTmHDrQiaDVAmhtLFkMJDHVZCjVWPAUZvkNCCzhJGEqlBVfLOBFdxNvOUwfQaDZdaGxtabqWweyegaVqCWACmWGmMQnIaGVEediceirtCPlEVtVeBMXttRxPwUoCafCRiQtHWGKdKOQuVTgMkPQVUtehXAGqvPSNTYovjLKBSvJKBnJNTLzuVtRgkhfFMBoWzYvfancXfakoxPSujDehCdraKwxufYsXpNiWQsSlCFjEcKMnJaCSnZGwdchtTgcpCjThmuFccSBDZuPcHRpMRTApbq', true, true);
        get_0 = objectStore_4910.get(KeyRange_12);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('sSuSbBXNsgrvWBItQWjZPYWjXKZamLWylguNPuLJVUDQQyVIgROMcCrbdjIaAjPwVGzhRiLULhSOEfXchUZkCrJCbkbbHmHiLNjGlFFOiKlVSMKgThVuGwDBCTmMtdCqbbMkAXIItdavFREBDbVqZBGfdeNtOpZYtndnNKcLXsNGcpFoOVTBYRFOyWaucaapkYZFAnWevKFwBEZcDErUszWhtVglqilVUjgxNClFMKyPAWzdMFZvjnSgSadAWzrvxRafdMwYFJtCrrmTUYRnzGQRzCzfZHQAmNEJgSkatCyzNwAmjoBcpazIromwaFduMFKgSLYeyvGviDhHNeUjZqTdwQgsWqutTrsbLpwDeaLkzgafmbLvWQRPfewBdlDdjtLZDjJIYnpOPFYiznzNvCnZkNihXnSFsxWJcFFkfpCHCQnrDniQQRDNEzBkgmYHSOLqUIzGYuSnTJgZyScTYqVUfjFhIKCziDVQWUNTgbuFBSjMoGjVSdhENbwSqWVWvooztJfPkowXhjHNvsfCaNIczsnspnoLCQlNuGuMELzShUleyINFRffKYFWodMSsxpfKYNfQtrGFwKKGAECXMqNwnazjfFgBTPLOVBwAcZMgsryQZXRPGExmrIUQxLHQASXJNvmvitVFdiyfODWpwyVkZNUIhvLQsFMhXZVUaXVkEyMRDyYPqUFfaWAAQTGhCMURbUMxPXNCGSvlkPUAydSWmQsvvuQosyFiRgRASAXtITLmkiUlZQXrUICmuTCGiCdPrcZIrCSIGF', false);
        count_3 = objectStore_4910.count(KeyRange_14);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_16 = IDBKeyRange.only('BzbbZktAdKUSMPoxWWmVZQAnHnhJpjJQFPknZrtmIvgbHZmNPrWwqJSPTnGlSjOwzfwoeDrhqQIpklYumFGydSIlEebjDvBZyxxzXlVhRhLqmiRTmHDrQiaDVAmhtLFkMJDHVZCjVWPAUZvkNCCzhJGEqlBVfLOBFdxNvOUwfQaDZdaGxtabqWweyegaVqCWACmWGmMQnIaGVEediceirtCPlEVtVeBMXttRxPwUoCafCRiQtHWGKdKOQuVTgMkPQVUtehXAGqvPSNTYovjLKBSvJKBnJNTLzuVtRgkhfFMBoWzYvfancXfakoxPSujDehCdraKwxufYsXpNiWQsSlCFjEcKMnJaCSnZGwdchtTgcpCjThmuFccSBDZuPcHRpMRTApbq');
        getAll_2 = objectStore_4910.getAll(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW');
        getAll_2 = objectStore_4910.getAll(KeyRange_17);
    }

    txn_7400.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7400.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7400.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7401 = db.transaction(['objectStore_4910'], 'readonly', {durability:"strict"})
    var objectStore_4910 = txn_7401.objectStore('objectStore_4910');
    var get_1;
    try{
        KeyRange_18 = IDBKeyRange.only('HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE');
        get_1 = objectStore_4910.get(KeyRange_18);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', 'fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', false, false);
        count_4 = objectStore_4910.count(KeyRange_20);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_22 = IDBKeyRange.bound('fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', 'fSTPJfIPumNWbQiIifWdMgHfEqNoJJilJJFBApBIuEMZPHcgqfJqxYNfYHUnuomOWyGtRZdPChoNXsdNnxoCqvOgnLHpgkZAXAhsdFErExLGLTwIOEdkvKVxQHOrRYByLPOnDnYhjMlJisXpfxdnDziHeuoOjoSWKNUrXJuxHdPkFVMyHdCdiecrAtrXtqEgYpOFTGkWYYkrsMRNelcXfqZxJvgXvmqvlwHWnaaOUdIbRzvImCvOLesIlQTWPNCULqiaLDWDCpPPWZaZtlgpiROWCxNyamTkdTwFPDXVrgTFPWxzvAavYkkHlEuCrdSGmafcKiJPDkGpSvBjRefLUSmBzHUPAKBBpgnUVMozdEkCpkembttgquCzCmThYbzOHsBimPGSQlbNYGfMSsqNTBViHxbyEsyVsWQQaBFzacUjkFWiUGiWtxMkmVlHTTpNuEjINiqQRYEpavEaSGZmDsOYQjedrfSSMuNUGzhMsetsDTIeNCwUrECbCKmhRKhgIBmVSqthbrqFpXlqxiOVuBMvdWygOmPVhDqTSiPunXiFcblHlihLyOvaebqFoGNtfJExcbMzVYCCszldlwVZajvLVBvICdcLYYsICuwvNJrdVAwYQAbDtbJhANJHIAiicSPMwZaBoRvvIFJJEZBxqFWwictyJfOXpiGUOGGCtShB', true, false);
        get_2 = objectStore_4910.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_3 = objectStore_4910.getAll();
    var get_3;
    try{
        KeyRange_24 = IDBKeyRange.bound('tfhfWrgNgcEzmTNEvBlnzjXYOgcTFZohtlajXYPzsYKvjBYfeUjAtVpxAdfERQkJwXvVSZBKRzcPbgTqOvtMaeatroiiAOLVnxpKfTqmUMlHsYpZbspfRMIAAOOPZUcOcVXcebRThBuEERadCisbPsadkyVcaxIcmFYYopzEesoEQqHlKZrdNwMmgLUixiQyVwZnumuRbIlNZJvlzKKMkkAorfVIvcZOEHSTeRtPRRaaRbsjULXZdkEYQLYjLPaVJNFaqyYXabOYsGvMhNKvyuTVkFLwvdcoIgvkUqvWECfKuSWgomzqlItniOtjcRVHcBlPCyHNodvtmGjqjcTHuJOMclJRcljFtCSSkTsJXkWjFLWgweKpkBabjCekhqTxGKWQyEacmduLvVGJZmLBOEoOzIvPdIJazEyFaunHGTyIOjjWkPbdIGuGbCoCxFjGxNANHlALCvNdysIGDYxcjQzCxUezyltCaCKQBGEFXfPXHdvsQjbhZfqzZPyqyUxCjJSSSpz', 'JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf', false, false);
        get_3 = objectStore_4910.get(KeyRange_24);
    }
    catch (e){
    }

    var count_5 = objectStore_4910.count();
    var index_0 = objectStore_4910.index('index_3282');
    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.bound('BzbbZktAdKUSMPoxWWmVZQAnHnhJpjJQFPknZrtmIvgbHZmNPrWwqJSPTnGlSjOwzfwoeDrhqQIpklYumFGydSIlEebjDvBZyxxzXlVhRhLqmiRTmHDrQiaDVAmhtLFkMJDHVZCjVWPAUZvkNCCzhJGEqlBVfLOBFdxNvOUwfQaDZdaGxtabqWweyegaVqCWACmWGmMQnIaGVEediceirtCPlEVtVeBMXttRxPwUoCafCRiQtHWGKdKOQuVTgMkPQVUtehXAGqvPSNTYovjLKBSvJKBnJNTLzuVtRgkhfFMBoWzYvfancXfakoxPSujDehCdraKwxufYsXpNiWQsSlCFjEcKMnJaCSnZGwdchtTgcpCjThmuFccSBDZuPcHRpMRTApbq', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', false, true);
        get_4 = objectStore_4910.get(KeyRange_26);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_28 = IDBKeyRange.only('GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW');
        count_6 = objectStore_4910.count(KeyRange_28);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.only('tfhfWrgNgcEzmTNEvBlnzjXYOgcTFZohtlajXYPzsYKvjBYfeUjAtVpxAdfERQkJwXvVSZBKRzcPbgTqOvtMaeatroiiAOLVnxpKfTqmUMlHsYpZbspfRMIAAOOPZUcOcVXcebRThBuEERadCisbPsadkyVcaxIcmFYYopzEesoEQqHlKZrdNwMmgLUixiQyVwZnumuRbIlNZJvlzKKMkkAorfVIvcZOEHSTeRtPRRaaRbsjULXZdkEYQLYjLPaVJNFaqyYXabOYsGvMhNKvyuTVkFLwvdcoIgvkUqvWECfKuSWgomzqlItniOtjcRVHcBlPCyHNodvtmGjqjcTHuJOMclJRcljFtCSSkTsJXkWjFLWgweKpkBabjCekhqTxGKWQyEacmduLvVGJZmLBOEoOzIvPdIJazEyFaunHGTyIOjjWkPbdIGuGbCoCxFjGxNANHlALCvNdysIGDYxcjQzCxUezyltCaCKQBGEFXfPXHdvsQjbhZfqzZPyqyUxCjJSSSpz');
        get_5 = objectStore_4910.get(KeyRange_30);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_32 = IDBKeyRange.only('qTsSknsaKIREidrAdHJeuvpliqlWQOGUiMFcCIRbkTeeowUDMbYZvwWRNIJQRJrIXLSXfKYbTHAYwOUDrAJeNBEPJJgVEFvIeJayQdUyBCvzObOpyzdVyTAwmbhSUChOsErtMDYoqvjrviemHwYoYksFKePUcepfrOoFdFDhnpElYjRTIJGLkvMsEVAYpZpRFeOKTchRtBnNCLypGXbRrsofNlagFSAFKSFajUgKYZkrjpwvShXbJXHCukEJTpqHrVcFezooYSwScufUQpTdvdmkvrcovgHXQdgTrJuIIKizfAfvhynxbfodXYWNjQOWpnKVuxKjUTrOzYAJLSHSBsyraFLBTsaPXugQxVWfbmLTrLkYATxTVBzivmOHRobBoyLNAuAgHDWoKDBZtUerEGTdKDIXKjJInQxqpDrpqTLjGKIqFhESEPOupjqmNGlvCkssTAekvNekNyMKRrylNcjUbgIWMqicWfjAlgqfQjFISTfebhUwGfAgnbZfoTtnQZSvmBDqENGrGPZGknHjSCZqBoEJDlSGKiOpGQBposMxjYiyLIKlJiwJgubiBmeeqEaulWjBiQNWqZhuhqGRCRaBSwPSqVXtmqVnXcJjqZjytZaJTLZBGWqakbxpOecxiDPVFDfuWyKiyUQupDaXEuwIHsVkIzJQbdxDpoCOdooiDEMXgxcJUjRRylVmMLOoAZBhXyAgKJXaHIRZtiOzOlWUYNbbXYRvCmtAoYMvCPNuAbWDwEhaUXRurwhxzsmNutuVLmxOpYdRqzI');
        get_6 = objectStore_4910.get(KeyRange_32);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_34 = IDBKeyRange.bound('tfhfWrgNgcEzmTNEvBlnzjXYOgcTFZohtlajXYPzsYKvjBYfeUjAtVpxAdfERQkJwXvVSZBKRzcPbgTqOvtMaeatroiiAOLVnxpKfTqmUMlHsYpZbspfRMIAAOOPZUcOcVXcebRThBuEERadCisbPsadkyVcaxIcmFYYopzEesoEQqHlKZrdNwMmgLUixiQyVwZnumuRbIlNZJvlzKKMkkAorfVIvcZOEHSTeRtPRRaaRbsjULXZdkEYQLYjLPaVJNFaqyYXabOYsGvMhNKvyuTVkFLwvdcoIgvkUqvWECfKuSWgomzqlItniOtjcRVHcBlPCyHNodvtmGjqjcTHuJOMclJRcljFtCSSkTsJXkWjFLWgweKpkBabjCekhqTxGKWQyEacmduLvVGJZmLBOEoOzIvPdIJazEyFaunHGTyIOjjWkPbdIGuGbCoCxFjGxNANHlALCvNdysIGDYxcjQzCxUezyltCaCKQBGEFXfPXHdvsQjbhZfqzZPyqyUxCjJSSSpz', 'EPtcsMLBfblIkrcQufiaoolqoDHCWdqowjhUUzBSgHSygfLsUsmBDJZoMPlBgQkHufVFgFvcPEnAFHRsCOkVwMghPGqClNoYKDWceCTILtJpsfgALdgQfhAWBYPyjjCncdblylaHvVtLfqKNshHzCRpMgdyVwNBbjHJSmDYzISjFgBzWJGuTJjDPpgIMRYInSyjbUCABaCqUrvvmVctDOpNlXWtSuWjqWggfVteQSFFqmtBpqxoatjAUqACgBSCgrADnFPGqFMtPtuJvCfFJFGpeFVvNuuTOsJvYEVYRZJTWFYZFDNgtIWTCHUgAlMnjVNWoHnSaYtsMUtcWkxgofTvcPcTMGuYpqnAPbOoyMjCQnSNulNWwlmRAnJGUjMWmrTdlmzsxlTEHftnOgizqSZhJLwkHeykzBHIlmvhpnIXeTaprmclobhVpILeguEfBSGmxwOtIDvggsyDPZWsYOEbdczjdzkUgKqXyMPgcvirNAqcvMwcIKSKtkSYApnTQBpykruDVnniDnsgPLfxtWoyCjwSzlTyTBzmlmWIjDmgsOeRVDUxJwUSQFzZGiWDpgiKOvVrlZtoVZwyQVYzrxCANHshJYmNUSraltrxjWhnqluTJfnOYRYjHSFZrwaqShiZocownbDcqUuDvkkYSquPtlRRvRgkklXjxXKbMMRCNuunxaFyezOuwFRMZSYBGXgFlrozGMnNzJTCvTLjwosXuwSQAeGcalsxoTCLNPJFkbJekVwqGnEZXRnTpMXwHujMZJkJqggQEprTlxGITFBTVeuctgBibkUlTCLypNJEoRHFrNYbuxZXmhoDJDpsOwHlzlOPQEaONHFOVkotiyYvTswiZySrxWRCXAAwWdblZGdoDoovEaPutrCeIoFINOlZkPVzpuHTHuOnQXnyiEXvjHktjjulgXXfszHjYmSMpvaDpcOjbuGIoNZyChpgvPgRczm', true, true);
        get_7 = objectStore_4910.get(KeyRange_34);
    }
    catch (e){
    }

    var index_1 = objectStore_4910.index('index_3281');
    txn_7401.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7401.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7401.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7402 = db.transaction(['objectStore_4910'], 'readonly', {durability:"strict"})
    var objectStore_4910 = txn_7402.objectStore('objectStore_4910');
    var getAll_4 = objectStore_4910.getAll();
    var count_7 = objectStore_4910.count();
    var getAllKeys_0;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('qTsSknsaKIREidrAdHJeuvpliqlWQOGUiMFcCIRbkTeeowUDMbYZvwWRNIJQRJrIXLSXfKYbTHAYwOUDrAJeNBEPJJgVEFvIeJayQdUyBCvzObOpyzdVyTAwmbhSUChOsErtMDYoqvjrviemHwYoYksFKePUcepfrOoFdFDhnpElYjRTIJGLkvMsEVAYpZpRFeOKTchRtBnNCLypGXbRrsofNlagFSAFKSFajUgKYZkrjpwvShXbJXHCukEJTpqHrVcFezooYSwScufUQpTdvdmkvrcovgHXQdgTrJuIIKizfAfvhynxbfodXYWNjQOWpnKVuxKjUTrOzYAJLSHSBsyraFLBTsaPXugQxVWfbmLTrLkYATxTVBzivmOHRobBoyLNAuAgHDWoKDBZtUerEGTdKDIXKjJInQxqpDrpqTLjGKIqFhESEPOupjqmNGlvCkssTAekvNekNyMKRrylNcjUbgIWMqicWfjAlgqfQjFISTfebhUwGfAgnbZfoTtnQZSvmBDqENGrGPZGknHjSCZqBoEJDlSGKiOpGQBposMxjYiyLIKlJiwJgubiBmeeqEaulWjBiQNWqZhuhqGRCRaBSwPSqVXtmqVnXcJjqZjytZaJTLZBGWqakbxpOecxiDPVFDfuWyKiyUQupDaXEuwIHsVkIzJQbdxDpoCOdooiDEMXgxcJUjRRylVmMLOoAZBhXyAgKJXaHIRZtiOzOlWUYNbbXYRvCmtAoYMvCPNuAbWDwEhaUXRurwhxzsmNutuVLmxOpYdRqzI', false);
        getAllKeys_0 = objectStore_4910.getAllKeys(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('zPqXeuVyyRJpmdNmoxHIiINLrKzgFbEITIoWomOPHMGevTGFsLNgHUGXKtFHasUbAmQrZDQTMovRNHjEofdAhOoCGmYMEeYBIJSNxPTufbdwIdigblIvcBWIspacQyMLXuCjIkFHbsGFOnUqxowEzwBPTaxuKzvxawYfBTWxEmEvjDtwveLjvKNvyDPrkSGquQsWJUhprtmkkbQkLgjGxwNTegPYyTCskkjiZisTXaBZuhVJwhkUSQVgKAQqcqtyetRCoXtuWLZNAdlvjlkFbACKXsatVUABPScRXiqYqzLDnHXbdbidrjRSdEWXiLHAnzjDvkrebVkLAujQecQYvkTHPivPyPmguOYsdwICrukVbrlcWRaqZEOgjmXVsUfOzyTCBaiODyKtzxkKoMvXFkpqhQFAMEvRnOXMHtAtzFRMxRkokDVqvLzAExzObQqiyaAwNHUvkqjIicxPiDwdKtcmnXjkCMYVtruorsnCYdbQDLhihynsvhPqPgxXpxFKkcFhXoqfNMbPXNCOwyjvPfcTQclXFWxGtkSCRvLHBrfpzNRWGGOKzhHbvhwbPJexkaMCIcRoHvKTfwWWVNKGGYVbnuIgiXIlYxYPBHfKEYSKIGNyztrqXgAtLwDsVaBrmZndLRDscsnzKpMLJgKcZgyPlVsSVgJMJXydzzQqODymLXBuUneeYoyYjDDqNOIWRSNnJzhPPXdlBXJHjbcgXLZzarkBxxeZSNsRrOVUdQVximzxDHbSxJTxGoQIXUcGpaxIxMgkCEvuJtpHbEGbqOVmrczzHxWfrkgNaGtIGzfDkbAJtFNyuqLacyFSDTfCszAXlZJkkt');
        getAllKeys_0 = objectStore_4910.getAllKeys(KeyRange_37);
    }

    var count_8;
    try{
        KeyRange_38 = IDBKeyRange.only('qTsSknsaKIREidrAdHJeuvpliqlWQOGUiMFcCIRbkTeeowUDMbYZvwWRNIJQRJrIXLSXfKYbTHAYwOUDrAJeNBEPJJgVEFvIeJayQdUyBCvzObOpyzdVyTAwmbhSUChOsErtMDYoqvjrviemHwYoYksFKePUcepfrOoFdFDhnpElYjRTIJGLkvMsEVAYpZpRFeOKTchRtBnNCLypGXbRrsofNlagFSAFKSFajUgKYZkrjpwvShXbJXHCukEJTpqHrVcFezooYSwScufUQpTdvdmkvrcovgHXQdgTrJuIIKizfAfvhynxbfodXYWNjQOWpnKVuxKjUTrOzYAJLSHSBsyraFLBTsaPXugQxVWfbmLTrLkYATxTVBzivmOHRobBoyLNAuAgHDWoKDBZtUerEGTdKDIXKjJInQxqpDrpqTLjGKIqFhESEPOupjqmNGlvCkssTAekvNekNyMKRrylNcjUbgIWMqicWfjAlgqfQjFISTfebhUwGfAgnbZfoTtnQZSvmBDqENGrGPZGknHjSCZqBoEJDlSGKiOpGQBposMxjYiyLIKlJiwJgubiBmeeqEaulWjBiQNWqZhuhqGRCRaBSwPSqVXtmqVnXcJjqZjytZaJTLZBGWqakbxpOecxiDPVFDfuWyKiyUQupDaXEuwIHsVkIzJQbdxDpoCOdooiDEMXgxcJUjRRylVmMLOoAZBhXyAgKJXaHIRZtiOzOlWUYNbbXYRvCmtAoYMvCPNuAbWDwEhaUXRurwhxzsmNutuVLmxOpYdRqzI');
        count_8 = objectStore_4910.count(KeyRange_38);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE', false);
        get_8 = objectStore_4910.get(KeyRange_40);
    }
    catch (e){
    }

    txn_7402.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7402.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7402.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7403 = db.transaction(['objectStore_4910'], 'readonly', {durability:"default"})
    var objectStore_4910 = txn_7403.objectStore('objectStore_4910');
    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.bound('GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', false, false);
        get_9 = objectStore_4910.get(KeyRange_42);
    }
    catch (e){
    }

    var count_9 = objectStore_4910.count();
    var getAll_5 = objectStore_4910.getAll();
    var count_10 = objectStore_4910.count();
    var count_11 = objectStore_4910.count();
    var get_10;
    try{
        KeyRange_44 = IDBKeyRange.bound('qTsSknsaKIREidrAdHJeuvpliqlWQOGUiMFcCIRbkTeeowUDMbYZvwWRNIJQRJrIXLSXfKYbTHAYwOUDrAJeNBEPJJgVEFvIeJayQdUyBCvzObOpyzdVyTAwmbhSUChOsErtMDYoqvjrviemHwYoYksFKePUcepfrOoFdFDhnpElYjRTIJGLkvMsEVAYpZpRFeOKTchRtBnNCLypGXbRrsofNlagFSAFKSFajUgKYZkrjpwvShXbJXHCukEJTpqHrVcFezooYSwScufUQpTdvdmkvrcovgHXQdgTrJuIIKizfAfvhynxbfodXYWNjQOWpnKVuxKjUTrOzYAJLSHSBsyraFLBTsaPXugQxVWfbmLTrLkYATxTVBzivmOHRobBoyLNAuAgHDWoKDBZtUerEGTdKDIXKjJInQxqpDrpqTLjGKIqFhESEPOupjqmNGlvCkssTAekvNekNyMKRrylNcjUbgIWMqicWfjAlgqfQjFISTfebhUwGfAgnbZfoTtnQZSvmBDqENGrGPZGknHjSCZqBoEJDlSGKiOpGQBposMxjYiyLIKlJiwJgubiBmeeqEaulWjBiQNWqZhuhqGRCRaBSwPSqVXtmqVnXcJjqZjytZaJTLZBGWqakbxpOecxiDPVFDfuWyKiyUQupDaXEuwIHsVkIzJQbdxDpoCOdooiDEMXgxcJUjRRylVmMLOoAZBhXyAgKJXaHIRZtiOzOlWUYNbbXYRvCmtAoYMvCPNuAbWDwEhaUXRurwhxzsmNutuVLmxOpYdRqzI', 'JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf', false, false);
        get_10 = objectStore_4910.get(KeyRange_44);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('zPqXeuVyyRJpmdNmoxHIiINLrKzgFbEITIoWomOPHMGevTGFsLNgHUGXKtFHasUbAmQrZDQTMovRNHjEofdAhOoCGmYMEeYBIJSNxPTufbdwIdigblIvcBWIspacQyMLXuCjIkFHbsGFOnUqxowEzwBPTaxuKzvxawYfBTWxEmEvjDtwveLjvKNvyDPrkSGquQsWJUhprtmkkbQkLgjGxwNTegPYyTCskkjiZisTXaBZuhVJwhkUSQVgKAQqcqtyetRCoXtuWLZNAdlvjlkFbACKXsatVUABPScRXiqYqzLDnHXbdbidrjRSdEWXiLHAnzjDvkrebVkLAujQecQYvkTHPivPyPmguOYsdwICrukVbrlcWRaqZEOgjmXVsUfOzyTCBaiODyKtzxkKoMvXFkpqhQFAMEvRnOXMHtAtzFRMxRkokDVqvLzAExzObQqiyaAwNHUvkqjIicxPiDwdKtcmnXjkCMYVtruorsnCYdbQDLhihynsvhPqPgxXpxFKkcFhXoqfNMbPXNCOwyjvPfcTQclXFWxGtkSCRvLHBrfpzNRWGGOKzhHbvhwbPJexkaMCIcRoHvKTfwWWVNKGGYVbnuIgiXIlYxYPBHfKEYSKIGNyztrqXgAtLwDsVaBrmZndLRDscsnzKpMLJgKcZgyPlVsSVgJMJXydzzQqODymLXBuUneeYoyYjDDqNOIWRSNnJzhPPXdlBXJHjbcgXLZzarkBxxeZSNsRrOVUdQVximzxDHbSxJTxGoQIXUcGpaxIxMgkCEvuJtpHbEGbqOVmrczzHxWfrkgNaGtIGzfDkbAJtFNyuqLacyFSDTfCszAXlZJkkt', true);
        get_11 = objectStore_4910.get(KeyRange_46);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_4910.getAllKeys(3700624846);
    var get_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE', 'HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE', false, false);
        get_12 = objectStore_4910.get(KeyRange_48);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_50 = IDBKeyRange.only('JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf');
        get_13 = objectStore_4910.get(KeyRange_50);
    }
    catch (e){
    }

    txn_7403.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7403.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7403.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7404 = db.transaction(['objectStore_4910'], 'readonly', {durability:"default"})
    var objectStore_4910 = txn_7404.objectStore('objectStore_4910');
    var count_12 = objectStore_4910.count();
    var getAllKeys_2 = objectStore_4910.getAllKeys(843000976);
    var index_2 = objectStore_4910.index('index_3281');
    var get_14;
    try{
        KeyRange_52 = IDBKeyRange.only('sSuSbBXNsgrvWBItQWjZPYWjXKZamLWylguNPuLJVUDQQyVIgROMcCrbdjIaAjPwVGzhRiLULhSOEfXchUZkCrJCbkbbHmHiLNjGlFFOiKlVSMKgThVuGwDBCTmMtdCqbbMkAXIItdavFREBDbVqZBGfdeNtOpZYtndnNKcLXsNGcpFoOVTBYRFOyWaucaapkYZFAnWevKFwBEZcDErUszWhtVglqilVUjgxNClFMKyPAWzdMFZvjnSgSadAWzrvxRafdMwYFJtCrrmTUYRnzGQRzCzfZHQAmNEJgSkatCyzNwAmjoBcpazIromwaFduMFKgSLYeyvGviDhHNeUjZqTdwQgsWqutTrsbLpwDeaLkzgafmbLvWQRPfewBdlDdjtLZDjJIYnpOPFYiznzNvCnZkNihXnSFsxWJcFFkfpCHCQnrDniQQRDNEzBkgmYHSOLqUIzGYuSnTJgZyScTYqVUfjFhIKCziDVQWUNTgbuFBSjMoGjVSdhENbwSqWVWvooztJfPkowXhjHNvsfCaNIczsnspnoLCQlNuGuMELzShUleyINFRffKYFWodMSsxpfKYNfQtrGFwKKGAECXMqNwnazjfFgBTPLOVBwAcZMgsryQZXRPGExmrIUQxLHQASXJNvmvitVFdiyfODWpwyVkZNUIhvLQsFMhXZVUaXVkEyMRDyYPqUFfaWAAQTGhCMURbUMxPXNCGSvlkPUAydSWmQsvvuQosyFiRgRASAXtITLmkiUlZQXrUICmuTCGiCdPrcZIrCSIGF');
        get_14 = objectStore_4910.get(KeyRange_52);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_54 = IDBKeyRange.only('HCzLLgTHiCifAilxoWFwBUqNKYeBzOuDAeyOpvRiFdcLghadjfqNeqTZTvUQNoSnoqWECDOFGhSNkgHYdQEOXjOkewQlxaeODkRVqXNpIcczagHqgewhcVejypYanJbSyqXfOTAYqvEYCxJSqOoZFXHpBTHLgJaGloRokrVrAnbkgjubGLKtmmbksKuuQCXemlvWltKpTwJnpUcKrqafpqtWBgGMMchTIcJSaJshJdKbhfcfzEHXuTNgWjartlrSmenidtGBDqIJidoXJJwvTVvEpzDDSkYyHpJouLebItwwiwqZfAIGuCyCaZuTbVAHuBgNSvtmpudAaMZlPXDOpDgqUmVGYiKAahEgMbVGHJYjixXgCEKIjYlFCHhWDcwkLKARNHfwlDrLeCIupvUHsFyCLKVhdbFvAHFDFcztdWtysyKudRPnoNvaIeomKbFcRKvrEOnuIOzIMeXtpqUfgowHUYlRctFqQPppuYDETWGxIKCHppsnFvXqzATIKVbGRYTJnFgIRpSAAEaCvqlTGmcaRqCEQmyHbZNlWqLsZrYmpzsTkAE');
        getAll_6 = objectStore_4910.getAll(KeyRange_54, 1798603142);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('zPqXeuVyyRJpmdNmoxHIiINLrKzgFbEITIoWomOPHMGevTGFsLNgHUGXKtFHasUbAmQrZDQTMovRNHjEofdAhOoCGmYMEeYBIJSNxPTufbdwIdigblIvcBWIspacQyMLXuCjIkFHbsGFOnUqxowEzwBPTaxuKzvxawYfBTWxEmEvjDtwveLjvKNvyDPrkSGquQsWJUhprtmkkbQkLgjGxwNTegPYyTCskkjiZisTXaBZuhVJwhkUSQVgKAQqcqtyetRCoXtuWLZNAdlvjlkFbACKXsatVUABPScRXiqYqzLDnHXbdbidrjRSdEWXiLHAnzjDvkrebVkLAujQecQYvkTHPivPyPmguOYsdwICrukVbrlcWRaqZEOgjmXVsUfOzyTCBaiODyKtzxkKoMvXFkpqhQFAMEvRnOXMHtAtzFRMxRkokDVqvLzAExzObQqiyaAwNHUvkqjIicxPiDwdKtcmnXjkCMYVtruorsnCYdbQDLhihynsvhPqPgxXpxFKkcFhXoqfNMbPXNCOwyjvPfcTQclXFWxGtkSCRvLHBrfpzNRWGGOKzhHbvhwbPJexkaMCIcRoHvKTfwWWVNKGGYVbnuIgiXIlYxYPBHfKEYSKIGNyztrqXgAtLwDsVaBrmZndLRDscsnzKpMLJgKcZgyPlVsSVgJMJXydzzQqODymLXBuUneeYoyYjDDqNOIWRSNnJzhPPXdlBXJHjbcgXLZzarkBxxeZSNsRrOVUdQVximzxDHbSxJTxGoQIXUcGpaxIxMgkCEvuJtpHbEGbqOVmrczzHxWfrkgNaGtIGzfDkbAJtFNyuqLacyFSDTfCszAXlZJkkt');
        getAll_6 = objectStore_4910.getAll(KeyRange_55);
    }

    var get_15;
    try{
        KeyRange_56 = IDBKeyRange.bound('tfhfWrgNgcEzmTNEvBlnzjXYOgcTFZohtlajXYPzsYKvjBYfeUjAtVpxAdfERQkJwXvVSZBKRzcPbgTqOvtMaeatroiiAOLVnxpKfTqmUMlHsYpZbspfRMIAAOOPZUcOcVXcebRThBuEERadCisbPsadkyVcaxIcmFYYopzEesoEQqHlKZrdNwMmgLUixiQyVwZnumuRbIlNZJvlzKKMkkAorfVIvcZOEHSTeRtPRRaaRbsjULXZdkEYQLYjLPaVJNFaqyYXabOYsGvMhNKvyuTVkFLwvdcoIgvkUqvWECfKuSWgomzqlItniOtjcRVHcBlPCyHNodvtmGjqjcTHuJOMclJRcljFtCSSkTsJXkWjFLWgweKpkBabjCekhqTxGKWQyEacmduLvVGJZmLBOEoOzIvPdIJazEyFaunHGTyIOjjWkPbdIGuGbCoCxFjGxNANHlALCvNdysIGDYxcjQzCxUezyltCaCKQBGEFXfPXHdvsQjbhZfqzZPyqyUxCjJSSSpz', 'GIwXfbqXWCZxZCeDFHNtveXEWPtNiDawIsojtabqnWDfSXgjvCjqHfUqkaRJViStnW', false, false);
        get_15 = objectStore_4910.get(KeyRange_56);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf', false);
        get_16 = objectStore_4910.get(KeyRange_58);
    }
    catch (e){
    }

    var count_13 = objectStore_4910.count();
    var count_14;
    try{
        KeyRange_60 = IDBKeyRange.lowerBound('EPtcsMLBfblIkrcQufiaoolqoDHCWdqowjhUUzBSgHSygfLsUsmBDJZoMPlBgQkHufVFgFvcPEnAFHRsCOkVwMghPGqClNoYKDWceCTILtJpsfgALdgQfhAWBYPyjjCncdblylaHvVtLfqKNshHzCRpMgdyVwNBbjHJSmDYzISjFgBzWJGuTJjDPpgIMRYInSyjbUCABaCqUrvvmVctDOpNlXWtSuWjqWggfVteQSFFqmtBpqxoatjAUqACgBSCgrADnFPGqFMtPtuJvCfFJFGpeFVvNuuTOsJvYEVYRZJTWFYZFDNgtIWTCHUgAlMnjVNWoHnSaYtsMUtcWkxgofTvcPcTMGuYpqnAPbOoyMjCQnSNulNWwlmRAnJGUjMWmrTdlmzsxlTEHftnOgizqSZhJLwkHeykzBHIlmvhpnIXeTaprmclobhVpILeguEfBSGmxwOtIDvggsyDPZWsYOEbdczjdzkUgKqXyMPgcvirNAqcvMwcIKSKtkSYApnTQBpykruDVnniDnsgPLfxtWoyCjwSzlTyTBzmlmWIjDmgsOeRVDUxJwUSQFzZGiWDpgiKOvVrlZtoVZwyQVYzrxCANHshJYmNUSraltrxjWhnqluTJfnOYRYjHSFZrwaqShiZocownbDcqUuDvkkYSquPtlRRvRgkklXjxXKbMMRCNuunxaFyezOuwFRMZSYBGXgFlrozGMnNzJTCvTLjwosXuwSQAeGcalsxoTCLNPJFkbJekVwqGnEZXRnTpMXwHujMZJkJqggQEprTlxGITFBTVeuctgBibkUlTCLypNJEoRHFrNYbuxZXmhoDJDpsOwHlzlOPQEaONHFOVkotiyYvTswiZySrxWRCXAAwWdblZGdoDoovEaPutrCeIoFINOlZkPVzpuHTHuOnQXnyiEXvjHktjjulgXXfszHjYmSMpvaDpcOjbuGIoNZyChpgvPgRczm', true);
        count_14 = objectStore_4910.count(KeyRange_60);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_4910.getAllKeys();
    var get_17;
    try{
        KeyRange_62 = IDBKeyRange.bound('sSuSbBXNsgrvWBItQWjZPYWjXKZamLWylguNPuLJVUDQQyVIgROMcCrbdjIaAjPwVGzhRiLULhSOEfXchUZkCrJCbkbbHmHiLNjGlFFOiKlVSMKgThVuGwDBCTmMtdCqbbMkAXIItdavFREBDbVqZBGfdeNtOpZYtndnNKcLXsNGcpFoOVTBYRFOyWaucaapkYZFAnWevKFwBEZcDErUszWhtVglqilVUjgxNClFMKyPAWzdMFZvjnSgSadAWzrvxRafdMwYFJtCrrmTUYRnzGQRzCzfZHQAmNEJgSkatCyzNwAmjoBcpazIromwaFduMFKgSLYeyvGviDhHNeUjZqTdwQgsWqutTrsbLpwDeaLkzgafmbLvWQRPfewBdlDdjtLZDjJIYnpOPFYiznzNvCnZkNihXnSFsxWJcFFkfpCHCQnrDniQQRDNEzBkgmYHSOLqUIzGYuSnTJgZyScTYqVUfjFhIKCziDVQWUNTgbuFBSjMoGjVSdhENbwSqWVWvooztJfPkowXhjHNvsfCaNIczsnspnoLCQlNuGuMELzShUleyINFRffKYFWodMSsxpfKYNfQtrGFwKKGAECXMqNwnazjfFgBTPLOVBwAcZMgsryQZXRPGExmrIUQxLHQASXJNvmvitVFdiyfODWpwyVkZNUIhvLQsFMhXZVUaXVkEyMRDyYPqUFfaWAAQTGhCMURbUMxPXNCGSvlkPUAydSWmQsvvuQosyFiRgRASAXtITLmkiUlZQXrUICmuTCGiCdPrcZIrCSIGF', 'JsgyIASODPOlIIyqZIEfZhkmOoxuFunKWvtAKsnwgNSflfyasSUIAHVylGMBPgiDtxvxMMWCnEOWSfYDCSsbwDSOpCFIFFMDjrNofHdjureGgJfgdMryqDHlOxSmXZtCyrvxOMfZiMVxkAObGlbVCjnJsjnkuUEYHSmomCtshZDzJkHxjpTUZpWFGTisKWhtBuNfoJpFGytpunlYIpmNhnKyurvXjkjIZgGPmkodmvlFAtUevxXiIZraPxKbDnipktUUPJKWsesJooOgGioWpCbHmBDOeTNMJcKLkvSyjzkNeJSuywqzMamhuJOPpkEQdZeaCUilgKWasLRCvdXISuSVdxRkKMRlOkbFgVHMwlAQenoAkGZZcqvPFTQYKzQKHLKgIZvdMYceAcraRUYiIawVuqdxQHZPmttQZYvdAmHsrVgokIGuqxHlRnqMgSWqcCPiyVxlBqCdyQTNBvqtjZmLRmbCAdGifqWhaiAkxDedImDXwPQyGmUDfTPVLxClzodtKmuacQHEYcqGLfyrgRZPvitupBWkjaRCQRjRzZoOQFmhgjRGoGofsQYPLjMyamGCLbPhgkMXpEYnEPaJkbpjrshkzqxrJsiRiKQDhBjMDYjxPpEEAEMbxsCXPNuHZBxVMJvnnjZSQzdFSeLQfStRBQZiWGpErjQUZTqldZGDTXAeopOeUDifuUOfHVKBcXmGnePnUoktaWqEnTeaiwZzkPdRQBtAdXQvQf', true, true);
        get_17 = objectStore_4910.get(KeyRange_62);
    }
    catch (e){
    }

    var index_3 = objectStore_4910.index('index_3281');
    var count_15 = objectStore_4910.count();
    txn_7404.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7404.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7404.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5818')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};