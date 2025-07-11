let db;
const openRequest = window.indexedDB.open('str_9157', 1758338724598226)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5518', {keypath: 'esUzZOihndNshmfBFWyuoYpySDKhkhqNqVdiyJeCvablqzhRPrznNRiINfndoGbAQjftFBcEHAydOktHhwKrTJLHhMqqihHikPOYxBJtmndGgdkIGdjaHdbZXMzQaTJeoAxmljzHJLiUSoqqZunKIyZSpcbdxVYuFxkwkaplKUzxsZDokcPzWAYAOFwOeiaqEBTqzGGgtcGabbmtCWmsQIxDTDhgwJNWRJOqPssnmhLPmGviqLfBlhQZKQYOypmGoXZtBSKgaSmaZUBsNwXQqzVrietfvnHubThuwVUVelaWGsAgCRQSFJrqAZdUdimVIlPUnqhcMIDccXBVlalBhDiXJooVbCDmGyhtOvAnXPZSiwZPhfBkjQrcjdqsAJcbegUKkSTdbuFDesSxAoCicYfuqpiuiQjZRlZyHPKnmTqEuEJADOtfKjuHraBkxoMpYgavWjAuWZBHMZsoItfeAFYVCcfzpYglpMpafSLWQDCDqUAfMDJJupWWchMrnRSZLJaITDfIgxGokBXnNLhAdOwxyzAdHhBtXKztpuoiHupBicboIIUWfdJlfXixTEPdwSaItIDOaFJjPnuCxDaJLAeTmWkPoYxHYvwXEcSnwUfcjiYSPQLXuwAKtIIkFfMzvaxvrWHmWalphMnQHTAvJvAgUnWInnScjoyFburbaLLueuXvIWfGAZCnMNEXnbvwgAQGfJAljnJKCpBUgRtxMPFYpWQFyazErYsTEvOIRWewkqrnKnqabRjdBCIDPFIqjgGnxBJrhejqRNYJwAaIQGPmdrcBUHRdEyUMrTPQzHhtkFLIEiRJsWlJLAdEKWDYpTIKIeNsVNcQPBXgBKVsfUiNsBCAgivqsexdmPMcKoyEjufFkNSQedUORvxHjRlUgmOErTSvBdQaeskSEWTHVcHgyOzGgpxndsyGeeiabVXkieKiWliAlvYiVxXvRjSYhchIegUOyOmKfwmcPGqIBqDCjXbPHuUsHq', autoIncrement: false});
    var index_3699 = objectStore_0.createIndex('index_3699', 'test', {multiEntry: false});
    var put_0 = objectStore_0.put({f0_b: '<string>'}, 'yeuFLHZLEuFoioIPJklwioYgtESbfvgbrpFmzRXTvAHsiguPqJdFtxnOgwXEyIMWjSpaNsJIxzakNPRsJJhJBQHiNOFMtOYJFMeaRGsIMiiZECUunFLVYvWrAsIaJqxYIEeBhTSWgvGiJcXlimUHWrUzQYvAfaChoktSqSufnkzdFIvOpMNbJKaVRUrTVgsbOeAUDUKRavqeZWScjLDjdLKQmXGvLUueiJVLdIKsXroDEjskbMQbXyRdVxjfKYekrhsOpRwPIYRhDMOmefcOAuIGJrtCDpiMSmVvsLlxpYYJTJFfDpcQnirUVmrpcBcdxykkQchlAFqTRekoxbLMdfSyYXIaLZgdHUJVQieQfQoRzXcjkQZTDjmfvSfGZYBGzOqIYJmuDjBurIbGMqRAqsfZzOZpVnHTxKNfydZzBQtOFKIhGszTFMPoIQiqkxrHPdmEFKmfOtEXxZbSlUchcublyNYiDnPzQnpymCjfAjttfNUcyPTLjMrszJnMByCuoPDZxLUFPTCATOPArNKsPCSbpGJwlqzgLDMjGUSosICpCmBYtOOvqqfOgXlHAzSKXDDmwjlHcgHSEzJhxzJetmshOqXcPBVkEHwhUqjBMWqhMpKGbXiMfEltGmgtUfgSiJVSqibkUEXyyPNCGkrHOEEfBkIPWsjjhHJkifEmWyjbfKfvGxnaaGFVrLSgGMZQMuXscfWoNIYYmsWUBrgcMhIhCbYEzBZgJerJEmpojzPfGYETePJsqrdpRSCCPHJswCDIXcOcWwsCqFgiTifSuPffohPaxSlePapFfnwXghrKzmUitgTgEOzvgGNMG');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('yeuFLHZLEuFoioIPJklwioYgtESbfvgbrpFmzRXTvAHsiguPqJdFtxnOgwXEyIMWjSpaNsJIxzakNPRsJJhJBQHiNOFMtOYJFMeaRGsIMiiZECUunFLVYvWrAsIaJqxYIEeBhTSWgvGiJcXlimUHWrUzQYvAfaChoktSqSufnkzdFIvOpMNbJKaVRUrTVgsbOeAUDUKRavqeZWScjLDjdLKQmXGvLUueiJVLdIKsXroDEjskbMQbXyRdVxjfKYekrhsOpRwPIYRhDMOmefcOAuIGJrtCDpiMSmVvsLlxpYYJTJFfDpcQnirUVmrpcBcdxykkQchlAFqTRekoxbLMdfSyYXIaLZgdHUJVQieQfQoRzXcjkQZTDjmfvSfGZYBGzOqIYJmuDjBurIbGMqRAqsfZzOZpVnHTxKNfydZzBQtOFKIhGszTFMPoIQiqkxrHPdmEFKmfOtEXxZbSlUchcublyNYiDnPzQnpymCjfAjttfNUcyPTLjMrszJnMByCuoPDZxLUFPTCATOPArNKsPCSbpGJwlqzgLDMjGUSosICpCmBYtOOvqqfOgXlHAzSKXDDmwjlHcgHSEzJhxzJetmshOqXcPBVkEHwhUqjBMWqhMpKGbXiMfEltGmgtUfgSiJVSqibkUEXyyPNCGkrHOEEfBkIPWsjjhHJkifEmWyjbfKfvGxnaaGFVrLSgGMZQMuXscfWoNIYYmsWUBrgcMhIhCbYEzBZgJerJEmpojzPfGYETePJsqrdpRSCCPHJswCDIXcOcWwsCqFgiTifSuPffohPaxSlePapFfnwXghrKzmUitgTgEOzvgGNMG', 'yeuFLHZLEuFoioIPJklwioYgtESbfvgbrpFmzRXTvAHsiguPqJdFtxnOgwXEyIMWjSpaNsJIxzakNPRsJJhJBQHiNOFMtOYJFMeaRGsIMiiZECUunFLVYvWrAsIaJqxYIEeBhTSWgvGiJcXlimUHWrUzQYvAfaChoktSqSufnkzdFIvOpMNbJKaVRUrTVgsbOeAUDUKRavqeZWScjLDjdLKQmXGvLUueiJVLdIKsXroDEjskbMQbXyRdVxjfKYekrhsOpRwPIYRhDMOmefcOAuIGJrtCDpiMSmVvsLlxpYYJTJFfDpcQnirUVmrpcBcdxykkQchlAFqTRekoxbLMdfSyYXIaLZgdHUJVQieQfQoRzXcjkQZTDjmfvSfGZYBGzOqIYJmuDjBurIbGMqRAqsfZzOZpVnHTxKNfydZzBQtOFKIhGszTFMPoIQiqkxrHPdmEFKmfOtEXxZbSlUchcublyNYiDnPzQnpymCjfAjttfNUcyPTLjMrszJnMByCuoPDZxLUFPTCATOPArNKsPCSbpGJwlqzgLDMjGUSosICpCmBYtOOvqqfOgXlHAzSKXDDmwjlHcgHSEzJhxzJetmshOqXcPBVkEHwhUqjBMWqhMpKGbXiMfEltGmgtUfgSiJVSqibkUEXyyPNCGkrHOEEfBkIPWsjjhHJkifEmWyjbfKfvGxnaaGFVrLSgGMZQMuXscfWoNIYYmsWUBrgcMhIhCbYEzBZgJerJEmpojzPfGYETePJsqrdpRSCCPHJswCDIXcOcWwsCqFgiTifSuPffohPaxSlePapFfnwXghrKzmUitgTgEOzvgGNMG', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_v: '<array>', f1_r: '<string>', f2_m: '<number>', f3_h: '<null>', f4_a: '<string>', f5_j: '<object>', f6_f: '<number>', f7_k: '<boolean>', f8_g: '<object>', f9_z: '<boolean>', f10_j: '<array>', f11_w: '<object>', f12_h: '<string>', f13_j: '<array>', f14_k: '<object>', f15_f: '<null>', f16_l: '<string>', f17_r: '<null>', f18_b: '<string>', f19_j: '<null>', f20_d: '<boolean>', f21_x: '<number>', f22_r: '<array>', f23_f: '<object>', f24_u: '<array>', f25_b: '<null>', f26_m: '<object>', f27_o: '<null>', f28_s: '<array>', f29_f: '<null>', f30_m: '<object>', f31_n: '<boolean>', f32_n: '<null>', f33_a: '<string>', f34_b: '<array>', f35_z: '<object>', f36_i: '<string>', f37_o: '<array>', f38_z: '<boolean>', f39_r: '<string>', f40_t: '<string>', f41_j: '<string>', f42_c: '<null>', f43_m: '<boolean>', f44_u: '<array>', f45_u: '<null>', f46_s: '<number>', f47_y: '<boolean>', f48_j: '<number>', f49_t: '<number>', f50_t: '<object>', f51_w: '<number>', f52_d: '<object>', f53_o: '<boolean>', f54_k: '<string>', f55_x: '<number>', f56_r: '<number>', f57_j: '<null>', f58_w: '<number>', f59_t: '<boolean>', f60_s: '<object>', f61_r: '<object>', f62_q: '<number>', f63_m: '<boolean>', f64_s: '<string>', f65_n: '<number>', f66_w: '<number>', f67_u: '<number>', f68_d: '<number>', f69_z: '<object>', f70_c: '<string>', f71_q: '<string>', f72_d: '<string>', f73_r: '<number>', f74_v: '<object>', f75_z: '<null>', f76_d: '<array>', f77_w: '<boolean>', f78_d: '<boolean>', f79_y: '<boolean>', f80_r: '<string>', f81_k: '<number>', f82_f: '<boolean>', f83_k: '<null>', f84_c: '<null>', f85_f: '<object>', f86_h: '<boolean>', f87_u: '<null>', f88_e: '<string>', f89_s: '<null>', f90_k: '<boolean>', f91_t: '<number>', f92_j: '<array>', f93_z: '<object>', f94_q: '<number>', f95_w: '<number>', f96_z: '<object>', f97_x: '<object>', f98_j: '<number>', f99_u: '<boolean>', f100_m: '<object>', f101_p: '<string>', f102_p: '<string>', f103_o: '<number>', f104_l: '<string>', f105_n: '<boolean>', f106_q: '<array>', f107_f: '<array>', f108_i: '<number>', f109_u: '<object>', f110_d: '<number>', f111_g: '<boolean>', f112_e: '<number>', f113_i: '<null>', f114_p: '<object>', f115_y: '<number>', f116_s: '<null>', f117_w: '<null>', f118_l: '<string>', f119_b: '<array>', f120_x: '<array>', f121_v: '<number>', f122_j: '<array>', f123_n: '<boolean>', f124_o: '<array>', f125_s: '<null>', f126_e: '<null>', f127_b: '<number>', f128_y: '<null>', f129_t: '<null>', f130_f: '<string>', f131_r: '<string>', f132_p: '<boolean>', f133_n: '<boolean>', f134_c: '<string>', f135_d: '<array>', f136_z: '<array>', f137_w: '<array>', f138_z: '<object>', f139_x: '<number>', f140_v: '<boolean>', f141_t: '<string>', f142_u: '<null>', f143_r: '<boolean>', f144_i: '<boolean>', f145_l: '<object>', f146_t: '<number>', f147_m: '<number>', f148_l: '<boolean>', f149_l: '<boolean>', f150_c: '<null>', f151_c: '<object>', f152_b: '<array>', f153_g: '<array>', f154_s: '<array>', f155_j: '<string>', f156_r: '<boolean>', f157_p: '<boolean>', f158_b: '<number>', f159_g: '<null>', f160_a: '<array>', f161_t: '<number>', f162_q: '<boolean>', f163_i: '<object>', f164_f: '<array>', f165_u: '<boolean>', f166_u: '<null>', f167_d: '<null>', f168_i: '<number>', f169_q: '<string>', f170_p: '<array>', f171_t: '<array>', f172_m: '<string>', f173_n: '<object>', f174_s: '<string>', f175_c: '<boolean>', f176_s: '<boolean>', f177_e: '<boolean>', f178_g: '<array>', f179_u: '<number>', f180_x: '<object>', f181_n: '<object>', f182_t: '<string>', f183_n: '<boolean>', f184_r: '<array>', f185_g: '<object>', f186_s: '<number>', f187_o: '<number>', f188_u: '<array>', f189_o: '<string>', f190_f: '<array>', f191_a: '<number>', f192_o: '<object>', f193_f: '<boolean>', f194_b: '<number>', f195_m: '<object>', f196_k: '<boolean>', f197_h: '<boolean>', f198_j: '<number>', f199_v: '<number>', f200_g: '<string>', f201_w: '<array>', f202_m: '<object>', f203_s: '<number>', f204_m: '<number>', f205_u: '<object>', f206_j: '<array>', f207_w: '<null>', f208_y: '<number>', f209_g: '<array>', f210_d: '<string>', f211_q: '<number>', f212_d: '<boolean>', f213_n: '<boolean>', f214_l: '<array>', f215_l: '<object>', f216_t: '<array>', f217_k: '<null>', f218_j: '<number>', f219_q: '<array>', f220_x: '<array>', f221_m: '<array>', f222_k: '<array>', f223_l: '<array>', f224_g: '<null>', f225_d: '<string>', f226_b: '<array>', f227_b: '<array>', f228_e: '<number>', f229_z: '<boolean>', f230_m: '<number>', f231_l: '<object>', f232_m: '<boolean>', f233_g: '<null>', f234_v: '<object>', f235_o: '<object>', f236_s: '<null>', f237_z: '<array>', f238_p: '<array>', f239_u: '<array>', f240_q: '<object>', f241_t: '<object>', f242_e: '<string>', f243_z: '<object>', f244_b: '<null>', f245_r: '<boolean>', f246_o: '<object>', f247_s: '<boolean>', f248_k: '<string>', f249_h: '<number>', f250_e: '<object>', f251_c: '<object>', f252_k: '<null>', f253_k: '<boolean>', f254_e: '<null>', f255_w: '<null>', f256_z: '<number>', f257_f: '<boolean>', f258_d: '<array>', f259_s: '<null>', f260_z: '<null>', f261_v: '<array>', f262_f: '<boolean>', f263_k: '<string>', f264_z: '<array>', f265_r: '<boolean>', f266_q: '<object>', f267_i: '<number>', f268_v: '<number>', f269_i: '<boolean>', f270_g: '<string>', f271_y: '<null>', f272_g: '<null>', f273_q: '<object>', f274_o: '<boolean>', f275_i: '<object>', f276_c: '<string>', f277_z: '<null>', f278_d: '<number>', f279_q: '<boolean>', f280_k: '<number>', f281_i: '<object>', f282_m: '<string>', f283_q: '<null>', f284_l: '<object>', f285_b: '<number>', f286_y: '<null>', f287_c: '<array>', f288_f: '<string>', f289_w: '<array>', f290_j: '<array>', f291_y: '<null>', f292_q: '<object>', f293_h: '<array>', f294_e: '<number>', f295_s: '<string>', f296_l: '<array>', f297_f: '<array>', f298_i: '<null>', f299_z: '<object>', f300_n: '<number>', f301_t: '<string>', f302_c: '<null>', f303_p: '<null>', f304_y: '<array>', f305_j: '<null>', f306_t: '<string>', f307_u: '<number>', f308_x: '<boolean>', f309_a: '<array>', f310_w: '<number>', f311_x: '<object>', f312_r: '<string>', f313_e: '<null>', f314_s: '<object>', f315_r: '<array>', f316_v: '<array>', f317_m: '<object>', f318_r: '<object>', f319_c: '<string>', f320_n: '<string>', f321_x: '<array>', f322_u: '<number>', f323_o: '<object>', f324_f: '<null>', f325_i: '<string>', f326_a: '<boolean>', f327_k: '<array>', f328_g: '<object>', f329_f: '<boolean>', f330_y: '<array>', f331_b: '<string>', f332_i: '<object>', f333_u: '<object>', f334_k: '<string>', f335_m: '<object>', f336_h: '<array>', f337_g: '<array>', f338_d: '<number>', f339_f: '<string>', f340_c: '<number>', f341_d: '<string>', f342_i: '<boolean>', f343_h: '<null>', f344_t: '<boolean>', f345_o: '<null>', f346_o: '<object>', f347_a: '<object>', f348_q: '<string>', f349_u: '<number>', f350_l: '<number>', f351_n: '<array>', f352_y: '<null>', f353_r: '<object>', f354_b: '<string>', f355_h: '<boolean>', f356_d: '<array>', f357_t: '<object>', f358_r: '<string>', f359_n: '<object>', f360_z: '<array>', f361_t: '<object>', f362_r: '<number>', f363_d: '<boolean>', f364_v: '<null>', f365_d: '<boolean>', f366_d: '<null>', f367_c: '<string>', f368_l: '<null>', f369_r: '<string>', f370_v: '<null>', f371_c: '<array>', f372_c: '<string>', f373_r: '<array>', f374_x: '<string>', f375_p: '<boolean>', f376_x: '<array>', f377_t: '<string>', f378_e: '<array>', f379_a: '<string>', f380_c: '<null>', f381_o: '<number>', f382_q: '<number>', f383_e: '<number>', f384_r: '<null>', f385_n: '<object>', f386_u: '<string>', f387_t: '<object>', f388_q: '<array>', f389_b: '<array>', f390_o: '<array>', f391_s: '<null>', f392_s: '<array>', f393_e: '<number>', f394_l: '<object>', f395_t: '<object>', f396_y: '<object>', f397_k: '<boolean>', f398_c: '<array>', f399_m: '<number>', f400_h: '<array>', f401_k: '<boolean>', f402_y: '<number>', f403_w: '<array>', f404_h: '<array>', f405_i: '<boolean>', f406_u: '<string>', f407_h: '<number>', f408_a: '<array>', f409_z: '<object>', f410_p: '<number>', f411_c: '<null>', f412_k: '<string>', f413_f: '<array>', f414_x: '<number>', f415_p: '<array>', f416_d: '<array>', f417_c: '<array>', f418_e: '<array>', f419_e: '<object>', f420_t: '<number>', f421_z: '<null>', f422_h: '<object>', f423_m: '<boolean>', f424_y: '<object>', f425_o: '<object>', f426_f: '<object>', f427_d: '<object>', f428_t: '<object>', f429_w: '<number>', f430_b: '<object>', f431_t: '<null>'}, 'XYAOttQnWdNvMMdJuWorIRiBxyXMyMeKvkcarTceHqdXmzSnMxSIGVDqjvEzLPrvEragBJQTCJFznCnunyiHzvUScFlscStpbhITFtviUKxRwxLCRSdPdPQvpdGanotaPyoHAxVyPkzOtBDWcGHNbVdamyhaFscwLQnlrdjSmXokhJGjMspEwRarQvycwJiHfBpHCyDLJDhzXWDsYpfVQZvFZllBjscuxPzqeEcQTgcsFpsiFmDxFKmUNhUadaQIaPhkBVxJRevHqIVgCkGFmfPPbqHwDXQevtKqYMBwSYvVPNsiRcVheVaOpfdMyLSEUQzwVzwFIOahMbWBJXXZSMxIZIUrVhLDHwCFTziAxGWnSVRkbkLcIGeVGzMfkdbcqnapLUHwCkfIPHFNATRaIZlMJgHhLCxuWxoMxqlTrIOCyjRfYPdtypkQvaGjCxxVbhpmQfRFnOgUiJudVenTgssbWcokYWtpyfCMXoBnMCCOUlxnvBBdKQZldGiNADhkmuMGunfHqBlcUhCfEDzYwDitTmDKGrNexGuHCceFZjTaOvYnwJmSfSjuxxkNXAJLtNyShmFJPUoNgcZsbjELVzPqneAoBzFlCXozxwJPWZwsrxljKHOtRagGBzpuJoPJkrvotqiliwQMEnBCcGnofYjMGMFUdeciZOtkOXyHtorzuSwZKRyWJaBSlZJIdtLIWJTYkpWuUKhwGxloFbYgRRxkBagmCforMlkSEYyMRAyZpTxmDgOMNjsrRPquURTfPPmqJLmlcoZsiegiIokHhkiQSKhGrNtuzaZOnJhcNgornFkaWWCLRmQTfsbyTukFtlpbiYutDKMplEPYYiLIIFgMUpNe');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('yeuFLHZLEuFoioIPJklwioYgtESbfvgbrpFmzRXTvAHsiguPqJdFtxnOgwXEyIMWjSpaNsJIxzakNPRsJJhJBQHiNOFMtOYJFMeaRGsIMiiZECUunFLVYvWrAsIaJqxYIEeBhTSWgvGiJcXlimUHWrUzQYvAfaChoktSqSufnkzdFIvOpMNbJKaVRUrTVgsbOeAUDUKRavqeZWScjLDjdLKQmXGvLUueiJVLdIKsXroDEjskbMQbXyRdVxjfKYekrhsOpRwPIYRhDMOmefcOAuIGJrtCDpiMSmVvsLlxpYYJTJFfDpcQnirUVmrpcBcdxykkQchlAFqTRekoxbLMdfSyYXIaLZgdHUJVQieQfQoRzXcjkQZTDjmfvSfGZYBGzOqIYJmuDjBurIbGMqRAqsfZzOZpVnHTxKNfydZzBQtOFKIhGszTFMPoIQiqkxrHPdmEFKmfOtEXxZbSlUchcublyNYiDnPzQnpymCjfAjttfNUcyPTLjMrszJnMByCuoPDZxLUFPTCATOPArNKsPCSbpGJwlqzgLDMjGUSosICpCmBYtOOvqqfOgXlHAzSKXDDmwjlHcgHSEzJhxzJetmshOqXcPBVkEHwhUqjBMWqhMpKGbXiMfEltGmgtUfgSiJVSqibkUEXyyPNCGkrHOEEfBkIPWsjjhHJkifEmWyjbfKfvGxnaaGFVrLSgGMZQMuXscfWoNIYYmsWUBrgcMhIhCbYEzBZgJerJEmpojzPfGYETePJsqrdpRSCCPHJswCDIXcOcWwsCqFgiTifSuPffohPaxSlePapFfnwXghrKzmUitgTgEOzvgGNMG');
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var index_3700 = objectStore_0.createIndex('index_3700', 'test', {unique: false, multiEntry: false});
    var clear_2 = objectStore_0.clear();
    var index_3701 = objectStore_0.createIndex('index_3701', 'test');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('XYAOttQnWdNvMMdJuWorIRiBxyXMyMeKvkcarTceHqdXmzSnMxSIGVDqjvEzLPrvEragBJQTCJFznCnunyiHzvUScFlscStpbhITFtviUKxRwxLCRSdPdPQvpdGanotaPyoHAxVyPkzOtBDWcGHNbVdamyhaFscwLQnlrdjSmXokhJGjMspEwRarQvycwJiHfBpHCyDLJDhzXWDsYpfVQZvFZllBjscuxPzqeEcQTgcsFpsiFmDxFKmUNhUadaQIaPhkBVxJRevHqIVgCkGFmfPPbqHwDXQevtKqYMBwSYvVPNsiRcVheVaOpfdMyLSEUQzwVzwFIOahMbWBJXXZSMxIZIUrVhLDHwCFTziAxGWnSVRkbkLcIGeVGzMfkdbcqnapLUHwCkfIPHFNATRaIZlMJgHhLCxuWxoMxqlTrIOCyjRfYPdtypkQvaGjCxxVbhpmQfRFnOgUiJudVenTgssbWcokYWtpyfCMXoBnMCCOUlxnvBBdKQZldGiNADhkmuMGunfHqBlcUhCfEDzYwDitTmDKGrNexGuHCceFZjTaOvYnwJmSfSjuxxkNXAJLtNyShmFJPUoNgcZsbjELVzPqneAoBzFlCXozxwJPWZwsrxljKHOtRagGBzpuJoPJkrvotqiliwQMEnBCcGnofYjMGMFUdeciZOtkOXyHtorzuSwZKRyWJaBSlZJIdtLIWJTYkpWuUKhwGxloFbYgRRxkBagmCforMlkSEYyMRAyZpTxmDgOMNjsrRPquURTfPPmqJLmlcoZsiegiIokHhkiQSKhGrNtuzaZOnJhcNgornFkaWWCLRmQTfsbyTukFtlpbiYutDKMplEPYYiLIIFgMUpNe', false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_5519', {autoIncrement: false});
    db.deleteObjectStore('objectStore_5518')
    var add_0 = objectStore_1.add({f0_v: '<object>', f1_j: '<number>', f2_b: '<boolean>', f3_e: '<number>'}, 'vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr');
    var index_3702 = objectStore_1.createIndex('index_3702', 'test', {unique: false});
    var add_1 = objectStore_1.add({f0_u: '<boolean>'}, 'QezqlEqtVnEaoqusMHTRPVFmypysGQDiBtymjghUZqAdHoFcJqQlyemVxAHwzRDmCSGpaxwfqFBXKfXCtpZMBybrMZqMAfGIzVzqvAiEnCoESyrTiVRajMKKlkwGCdetowuMWsiEdpsWDIVUwOLajDfIiMGCiXaRTDEOWdWmieSFwIowzvcLtocDslcUkkOGcITvmtwbdkkeMbxsMGytDvGePFagAyufQfJjpZrOFvlxxBIPfHyrXkyXUOuNGHjoXYjRdQJsfZTnfoYrUxENNhUWYicMSNzdHdDAvZejBqJJHPZchbUbsEjmRfjPVGnhIiyeELYaEMgbJprgkKNVtGceEUEfKhxXYgVTTzIJPXPAFCZJkLPLTdkvSccixclDqsBucMbVBjKpidKweLVNSmbOXpHfabIGuUfbAsQfyIxMXCOtbMUMCYzbwZbElQpxziEdFfexRTdNZFHNPzyQaXRWSYYATMqoTspLewzpWvpxoYIZKtKcighkvujQvTHwOcHVbMijreiFGzSYDWTpYlcQKLaoOGXCYCXyRGoZdBjerllFnGzxIHTScsVkOSUbiklKscPFgsTxgQeqEGHphrJDPN');
    objectStore_1.deleteIndex('index_3702')
    var clear_3 = objectStore_1.clear();
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr', 'QezqlEqtVnEaoqusMHTRPVFmypysGQDiBtymjghUZqAdHoFcJqQlyemVxAHwzRDmCSGpaxwfqFBXKfXCtpZMBybrMZqMAfGIzVzqvAiEnCoESyrTiVRajMKKlkwGCdetowuMWsiEdpsWDIVUwOLajDfIiMGCiXaRTDEOWdWmieSFwIowzvcLtocDslcUkkOGcITvmtwbdkkeMbxsMGytDvGePFagAyufQfJjpZrOFvlxxBIPfHyrXkyXUOuNGHjoXYjRdQJsfZTnfoYrUxENNhUWYicMSNzdHdDAvZejBqJJHPZchbUbsEjmRfjPVGnhIiyeELYaEMgbJprgkKNVtGceEUEfKhxXYgVTTzIJPXPAFCZJkLPLTdkvSccixclDqsBucMbVBjKpidKweLVNSmbOXpHfabIGuUfbAsQfyIxMXCOtbMUMCYzbwZbElQpxziEdFfexRTdNZFHNPzyQaXRWSYYATMqoTspLewzpWvpxoYIZKtKcighkvujQvTHwOcHVbMijreiFGzSYDWTpYlcQKLaoOGXCYCXyRGoZdBjerllFnGzxIHTScsVkOSUbiklKscPFgsTxgQeqEGHphrJDPN', false, true);
        count_1 = objectStore_1.count(KeyRange_6);
    }
    catch (e){
    }

    var put_2 = objectStore_1.put({f0_q: '<number>', f1_a: '<null>', f2_o: '<boolean>', f3_s: '<boolean>'}, 'wQjdAbtzZLkbJAFmqHEbzoWLNNsOZqHfaDxoHzGMOOleahOpqmNzgVKpAWmVdLTgEZdGVAfOTpnSXfvteDlACRUmnnmbcCadSOMrxwSdmxIonDYYpJfsMHkQduICqSjXoEHqGdjtZFuTvrALrRmpomYlNGouqQXUjSvlYCXUyuXqxaTViyJyCgDZbixUQoBdEsMWjpxSmWHfpyvJDfKIHMfouCdhFFJrzTRbnUuuaYOMIkXREZIeCfqgHsQbCVvKBQOXxJspEFaOfZsPPbSeYEekkAkmYeoZgPsSyWOwcRPjcQEHkgldDZoqDquMkItOZiTlyRFAgrtrKiktvIgOrVmXpHtCsatnGAjHWPJmQqGEGPluuQcjjCvPDXcfkYicQttTdVkcheWLPibBWBASjtSOzpGqfdbnvpIbd');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_8335 = db.transaction(['objectStore_5519'], 'readwrite', {durability:"strict"})
    var objectStore_5519 = txn_8335.objectStore('objectStore_5519');
    var put_3 = objectStore_5519.put({f0_w: '<array>', f1_z: '<number>', f2_f: '<null>'}, 'ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU');
    var delete_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr', 'vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr', false, true);
        delete_0 = objectStore_5519.delete(KeyRange_8);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU', true);
        delete_1 = objectStore_5519.delete(KeyRange_10);
    }
    catch (e){
    }

    var count_2 = objectStore_5519.count();
    var add_2 = objectStore_5519.add({f0_p: '<null>', f1_g: '<string>', f2_d: '<array>', f3_x: '<number>', f4_l: '<array>', f5_l: '<boolean>'}, 'VLDhnWXJhthbVjwIVEljXCLnLunjoCnxpBBaEkOAcsTwgOoZHOdQxylEUWNQRDUrViTQVdlUOczOscoaATbObtIMiMaJFRfmqiWNOuosgjTVIkduuBppTXKdduOvQGUJiXYvdrjbazahDPlBJVbeeAPsGowdlXPN');
    var add_3 = objectStore_5519.add({f0_a: '<null>', f1_b: '<number>', f2_p: '<number>', f3_j: '<array>', f4_j: '<null>', f5_g: '<boolean>', f6_w: '<array>', f7_b: '<number>'}, 'AJNkvgBlfoMQTYMCeCMIfBjMFhcnZIQcEjNhmJEHodBKRMMMNqNypLsWmZmtxGwcDUPGyzzYWUCvMCyAIodQotybfvpSVyYsmFuAGfcvAULrhlfnFDrgYCeyKmidZHPgksGKJuiTFgkXkwRpAUXsUdJISqLzkZiXncwRqNQSqYokEETtNmWwqvzxXoFcyvULzWuBxGKHCKVSXjPIzdENeaSIYcJyGojVXDKbWqDHYVANpPQqgClQtIMcqdjoUYrpUusyEejUzdxNlmqJSpMipUbWvrQVxYLgYDkbDNZuFDxytOAWTvzqtwDzONXZymCmnvBgtPRypVwSnSHvIZMMUGnpmQmAhxDtsduinFEnsDEHrtveuWqCAqORabuqeiWdvdGoOTOLybyrbeSTufRKRZLZKFFZuKEsTweGwNqnVtsLSZNaKXttfpxillWTBoXFyFCnpIFmVaqEONIUyDdenfSosEulUBYWLWnInfeHylGdMMCVOAKsHAbBKFYDEpbgKyfwixnjxiIIpSXzQVdoeFwvarDsbvjVnmUllakjwgYhBUXAbEqfxFcglUGlqTxikNeOzuUcSBlKjy');
    var add_4 = objectStore_5519.add({f0_l: '<null>'}, 'GsBWNFaDgYGmaWmOHQfVtVNnwEnXYkTqmigCNCuTFEfljgGemmboSjIUWizgIXiMEtycXVPrvoAGtFkQMilHjZFbRRBBqpMVcbqULHyliKDDJtCqDmaQQEubThULEbKVLQhAiBKgBFyBBWeGzYkDgEATCbJvODLbBKcRhxUHXegKAKqVMhAIQNjVvpfKMCLzJsvrnMKtdsAHaSGhKZphfdXZIycGvcnQKOaRDsTbuLnDswrxDgCqOHyMYatSajwveyKgVsCedghNCAWsITuvIWDpTRErOVOadHVcOyGzaUJDhAdfpzdAJbBxULkeGEZqFqiSPyzoQMxjvjsOWnnGcWzCnLvvlGUTtjnDqHWtrGPeDzEsIVTcbNBAVZCtMMwngHEgQuZEsIQCHDIqLAVcHhbSszQQnlkwyOcogYyxOtRzqxoLvauCrvPPNKhGZdIbMzmixVtJnYjIWmoGnOVtzokGmvAungGcVwfNxVaSohwUPwbIFVlYGARqUchWWfOBqxjmXznyhzcrvQHEkvaCACiLcejzGsJldvPZEqcoiWBHcsELLHlTmNNPzbMBdvFnAuMdfaEKMSWHsOYgRagEqcONQmZiMEdbblFAEFasVWhppwmqhTBPsEfaNKGmtTJVCYCABUidPLxgYTndpzrHPkxAeFGCmpJTzNGOppmFImYdoODRqHYbvXLYfyByJwBmyWfVUVeBDBuggtQVrnMnJbXdNpzmZzEUgRGLRxEGfbqSlbRJdGEnBOTwPelOCBCuuyTxutVjVeJXqMMlxeRfyRBwcKcihnijzXKIszxxioccqQMZlNNClvzaeQRMjwfEJqINxRQwceUWLsVyCGAZZTYhKgAgnGqTjjggxxdrfTENQrBQNNvYWVqKGkLzwVnMBJsymstShFAcARjNfZrrQeIjeooPLhnajhGzEu');
    var delete_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('AJNkvgBlfoMQTYMCeCMIfBjMFhcnZIQcEjNhmJEHodBKRMMMNqNypLsWmZmtxGwcDUPGyzzYWUCvMCyAIodQotybfvpSVyYsmFuAGfcvAULrhlfnFDrgYCeyKmidZHPgksGKJuiTFgkXkwRpAUXsUdJISqLzkZiXncwRqNQSqYokEETtNmWwqvzxXoFcyvULzWuBxGKHCKVSXjPIzdENeaSIYcJyGojVXDKbWqDHYVANpPQqgClQtIMcqdjoUYrpUusyEejUzdxNlmqJSpMipUbWvrQVxYLgYDkbDNZuFDxytOAWTvzqtwDzONXZymCmnvBgtPRypVwSnSHvIZMMUGnpmQmAhxDtsduinFEnsDEHrtveuWqCAqORabuqeiWdvdGoOTOLybyrbeSTufRKRZLZKFFZuKEsTweGwNqnVtsLSZNaKXttfpxillWTBoXFyFCnpIFmVaqEONIUyDdenfSosEulUBYWLWnInfeHylGdMMCVOAKsHAbBKFYDEpbgKyfwixnjxiIIpSXzQVdoeFwvarDsbvjVnmUllakjwgYhBUXAbEqfxFcglUGlqTxikNeOzuUcSBlKjy', 'ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU', true, false);
        delete_2 = objectStore_5519.delete(KeyRange_12);
    }
    catch (e){
    }

    txn_8335.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8335.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8335.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8336 = db.transaction(['objectStore_5519'], 'readonly', {durability:"default"})
    var objectStore_5519 = txn_8336.objectStore('objectStore_5519');
    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU', true);
        count_3 = objectStore_5519.count(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('VLDhnWXJhthbVjwIVEljXCLnLunjoCnxpBBaEkOAcsTwgOoZHOdQxylEUWNQRDUrViTQVdlUOczOscoaATbObtIMiMaJFRfmqiWNOuosgjTVIkduuBppTXKdduOvQGUJiXYvdrjbazahDPlBJVbeeAPsGowdlXPN', 'vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr', true, false);
        get_2 = objectStore_5519.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_0 = objectStore_5519.getAll(4215756784);
    txn_8336.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8336.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8336.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8337 = db.transaction(['objectStore_5519'], 'readwrite', {durability:"relaxed"})
    var objectStore_5519 = txn_8337.objectStore('objectStore_5519');
    var count_4 = objectStore_5519.count();
    var add_5 = objectStore_5519.add({f0_y: '<null>', f1_a: '<boolean>', f2_d: '<number>', f3_r: '<boolean>', f4_l: '<null>', f5_c: '<array>', f6_g: '<object>'}, 'MFbAuiTfgiJUYAOtslMLYSmGwbSSoVhTTTdESKgLOJEBNTKKpkZgJLoFcjWnuRcFNdyZWQzXfcWoyBdXPcdyWnkVjrTwymKLMeCvJLzvAQwzBOsdbMKBtHfLosjczXDTXzJSEchvwaisaOAJNnqnSPZrmOdtYVhIBomAoSEhgwaivBOGGWhySCmCKGDtFAaQIlEpZHAuOvCNVrMFfDMrlGSLXIWhAPGurIxVOTHKHwafCGSZIAIIpGyJBOaRReaYgwHKLcaVgOvQkprnczjAVZOOPtFoHNrcNGBocmJfJyrrbmuRiboKsIMpZNDLvCaJDSwHBnSbhBTdqjYfVHdyKnqsWxdsyuIFcdnoAAeYpwGBMeEICYHzEAIudeGccPkOHAOGXVcejooKkhYBKSgdrJEhDZtTVLiqwFtbjCRnduVjLaDOtzzfGdPTOaxBeNYXlHEDvpIEOPEAqRZrRbMZxMuBOHYdNgSFdYBIlOMFEQwDWSAfDERFmHmImrIhCecFKvvKsoZCGzWtPdzgCacgFRNQNToSYpeZavlYqwzEGGCPZwaIhhxzfsmOSkgthdMkQvAUWqMUrsYPQOaIzHmAePlTpEoJAkwSVMmzOdHOhdgpMVDIpuKpyANKdRlWWQflVTgzdNTwpRvLAtNtskbvbLzhiwHOqxGPnjfCiPiHwppcUCpdNPQXPfJCTtItYiKxDyRU');
    var clear_4 = objectStore_5519.clear();
    var getAll_1 = objectStore_5519.getAll(2731032574);
    var delete_3;
    try{
        KeyRange_18 = IDBKeyRange.only('ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU');
        delete_3 = objectStore_5519.delete(KeyRange_18);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.only('VLDhnWXJhthbVjwIVEljXCLnLunjoCnxpBBaEkOAcsTwgOoZHOdQxylEUWNQRDUrViTQVdlUOczOscoaATbObtIMiMaJFRfmqiWNOuosgjTVIkduuBppTXKdduOvQGUJiXYvdrjbazahDPlBJVbeeAPsGowdlXPN');
        get_3 = objectStore_5519.get(KeyRange_20);
    }
    catch (e){
    }

    var add_6 = objectStore_5519.add({f0_s: '<null>', f1_n: '<object>', f2_r: '<boolean>', f3_w: '<number>', f4_r: '<number>', f5_z: '<object>', f6_w: '<number>'}, 'WhWXfLjYFWKRaZuNqngEPyoJvxHJbcrsgaSCYUVUHfjDOcZUqcHCPEHawETcwnIRNeBZDATkTKffMvTvOITCERhQYzySjcAKNdsFJLhqHxGAwZdRuvNUpwQicaVLsIAPVlUCBKlXXZgDMFPUGnvRTEZmZtRaaJhmhnVLYAmYPExrhkhszSeAAugohXGduLBWwnyaBWpejOtKfPVoXsjXzDPZIkvamvdBupVCAlkjjhSZXLJPYkLJIGJizIYvacvZuLglbkvrahwuxBOdhsRrqBRoiBrUjvqjEVFPacYteTTGFYglmXcdMuyDSLkLRwGTpDOJdDHtoTBsrrAUNFQtYQcIhWktYhkHvFduBDIkNCOvGYlGqhxXrFVogjCxiWXmZRnMuJffIXvnpzoYahOQhppEHYhbkepEfCutRqrROuyqAiKXcuBiqHLBMgdgtNYZtTgdYuODgqWhfRRPdnoOlJkgFFXaaDnpBmcxqYmskArITeSfYoWuTDMWGCepWdwQCUnmGWusiYSYiWptuPWOFfrGMTYroFZEurGJXsiEvrfXlOKrRUPAZPDbQkKgLbGZJVEeyDwYsUeEfPXltoDeAfyHnCpYqdggrZaZffDleuszSuzofqDOiCjwhwIlfcZbhPrfaJIKDlhkHqoWiTMNcOKeSQdVMZUitXmLYYXOkfSgycGTRGGuAWXALufnOCdRPJPMCPkaLvgVWymyNmRaZJMCPioYmGpfOarqDcuZdkEuJQaoBFTUtzqWcgbRaviprAnpUOUZwBdlnhpZGrozaqmBtKzunhwufLuxMFdeRDjgaQoUNBrYAienTEjJffAYKPoBlqnvUDiNbdt');
    var clear_5 = objectStore_5519.clear();
    var getAllKeys_0;
    try{
        KeyRange_22 = IDBKeyRange.only('QezqlEqtVnEaoqusMHTRPVFmypysGQDiBtymjghUZqAdHoFcJqQlyemVxAHwzRDmCSGpaxwfqFBXKfXCtpZMBybrMZqMAfGIzVzqvAiEnCoESyrTiVRajMKKlkwGCdetowuMWsiEdpsWDIVUwOLajDfIiMGCiXaRTDEOWdWmieSFwIowzvcLtocDslcUkkOGcITvmtwbdkkeMbxsMGytDvGePFagAyufQfJjpZrOFvlxxBIPfHyrXkyXUOuNGHjoXYjRdQJsfZTnfoYrUxENNhUWYicMSNzdHdDAvZejBqJJHPZchbUbsEjmRfjPVGnhIiyeELYaEMgbJprgkKNVtGceEUEfKhxXYgVTTzIJPXPAFCZJkLPLTdkvSccixclDqsBucMbVBjKpidKweLVNSmbOXpHfabIGuUfbAsQfyIxMXCOtbMUMCYzbwZbElQpxziEdFfexRTdNZFHNPzyQaXRWSYYATMqoTspLewzpWvpxoYIZKtKcighkvujQvTHwOcHVbMijreiFGzSYDWTpYlcQKLaoOGXCYCXyRGoZdBjerllFnGzxIHTScsVkOSUbiklKscPFgsTxgQeqEGHphrJDPN');
        getAllKeys_0 = objectStore_5519.getAllKeys(KeyRange_22, 2305641732);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('WhWXfLjYFWKRaZuNqngEPyoJvxHJbcrsgaSCYUVUHfjDOcZUqcHCPEHawETcwnIRNeBZDATkTKffMvTvOITCERhQYzySjcAKNdsFJLhqHxGAwZdRuvNUpwQicaVLsIAPVlUCBKlXXZgDMFPUGnvRTEZmZtRaaJhmhnVLYAmYPExrhkhszSeAAugohXGduLBWwnyaBWpejOtKfPVoXsjXzDPZIkvamvdBupVCAlkjjhSZXLJPYkLJIGJizIYvacvZuLglbkvrahwuxBOdhsRrqBRoiBrUjvqjEVFPacYteTTGFYglmXcdMuyDSLkLRwGTpDOJdDHtoTBsrrAUNFQtYQcIhWktYhkHvFduBDIkNCOvGYlGqhxXrFVogjCxiWXmZRnMuJffIXvnpzoYahOQhppEHYhbkepEfCutRqrROuyqAiKXcuBiqHLBMgdgtNYZtTgdYuODgqWhfRRPdnoOlJkgFFXaaDnpBmcxqYmskArITeSfYoWuTDMWGCepWdwQCUnmGWusiYSYiWptuPWOFfrGMTYroFZEurGJXsiEvrfXlOKrRUPAZPDbQkKgLbGZJVEeyDwYsUeEfPXltoDeAfyHnCpYqdggrZaZffDleuszSuzofqDOiCjwhwIlfcZbhPrfaJIKDlhkHqoWiTMNcOKeSQdVMZUitXmLYYXOkfSgycGTRGGuAWXALufnOCdRPJPMCPkaLvgVWymyNmRaZJMCPioYmGpfOarqDcuZdkEuJQaoBFTUtzqWcgbRaviprAnpUOUZwBdlnhpZGrozaqmBtKzunhwufLuxMFdeRDjgaQoUNBrYAienTEjJffAYKPoBlqnvUDiNbdt');
        getAllKeys_0 = objectStore_5519.getAllKeys(KeyRange_23);
    }

    txn_8337.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8337.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8337.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8338 = db.transaction(['objectStore_5519'], 'readonly', {durability:"strict"})
    var objectStore_5519 = txn_8338.objectStore('objectStore_5519');
    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('GsBWNFaDgYGmaWmOHQfVtVNnwEnXYkTqmigCNCuTFEfljgGemmboSjIUWizgIXiMEtycXVPrvoAGtFkQMilHjZFbRRBBqpMVcbqULHyliKDDJtCqDmaQQEubThULEbKVLQhAiBKgBFyBBWeGzYkDgEATCbJvODLbBKcRhxUHXegKAKqVMhAIQNjVvpfKMCLzJsvrnMKtdsAHaSGhKZphfdXZIycGvcnQKOaRDsTbuLnDswrxDgCqOHyMYatSajwveyKgVsCedghNCAWsITuvIWDpTRErOVOadHVcOyGzaUJDhAdfpzdAJbBxULkeGEZqFqiSPyzoQMxjvjsOWnnGcWzCnLvvlGUTtjnDqHWtrGPeDzEsIVTcbNBAVZCtMMwngHEgQuZEsIQCHDIqLAVcHhbSszQQnlkwyOcogYyxOtRzqxoLvauCrvPPNKhGZdIbMzmixVtJnYjIWmoGnOVtzokGmvAungGcVwfNxVaSohwUPwbIFVlYGARqUchWWfOBqxjmXznyhzcrvQHEkvaCACiLcejzGsJldvPZEqcoiWBHcsELLHlTmNNPzbMBdvFnAuMdfaEKMSWHsOYgRagEqcONQmZiMEdbblFAEFasVWhppwmqhTBPsEfaNKGmtTJVCYCABUidPLxgYTndpzrHPkxAeFGCmpJTzNGOppmFImYdoODRqHYbvXLYfyByJwBmyWfVUVeBDBuggtQVrnMnJbXdNpzmZzEUgRGLRxEGfbqSlbRJdGEnBOTwPelOCBCuuyTxutVjVeJXqMMlxeRfyRBwcKcihnijzXKIszxxioccqQMZlNNClvzaeQRMjwfEJqINxRQwceUWLsVyCGAZZTYhKgAgnGqTjjggxxdrfTENQrBQNNvYWVqKGkLzwVnMBJsymstShFAcARjNfZrrQeIjeooPLhnajhGzEu', 'MFbAuiTfgiJUYAOtslMLYSmGwbSSoVhTTTdESKgLOJEBNTKKpkZgJLoFcjWnuRcFNdyZWQzXfcWoyBdXPcdyWnkVjrTwymKLMeCvJLzvAQwzBOsdbMKBtHfLosjczXDTXzJSEchvwaisaOAJNnqnSPZrmOdtYVhIBomAoSEhgwaivBOGGWhySCmCKGDtFAaQIlEpZHAuOvCNVrMFfDMrlGSLXIWhAPGurIxVOTHKHwafCGSZIAIIpGyJBOaRReaYgwHKLcaVgOvQkprnczjAVZOOPtFoHNrcNGBocmJfJyrrbmuRiboKsIMpZNDLvCaJDSwHBnSbhBTdqjYfVHdyKnqsWxdsyuIFcdnoAAeYpwGBMeEICYHzEAIudeGccPkOHAOGXVcejooKkhYBKSgdrJEhDZtTVLiqwFtbjCRnduVjLaDOtzzfGdPTOaxBeNYXlHEDvpIEOPEAqRZrRbMZxMuBOHYdNgSFdYBIlOMFEQwDWSAfDERFmHmImrIhCecFKvvKsoZCGzWtPdzgCacgFRNQNToSYpeZavlYqwzEGGCPZwaIhhxzfsmOSkgthdMkQvAUWqMUrsYPQOaIzHmAePlTpEoJAkwSVMmzOdHOhdgpMVDIpuKpyANKdRlWWQflVTgzdNTwpRvLAtNtskbvbLzhiwHOqxGPnjfCiPiHwppcUCpdNPQXPfJCTtItYiKxDyRU', false, true);
        get_4 = objectStore_5519.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('AJNkvgBlfoMQTYMCeCMIfBjMFhcnZIQcEjNhmJEHodBKRMMMNqNypLsWmZmtxGwcDUPGyzzYWUCvMCyAIodQotybfvpSVyYsmFuAGfcvAULrhlfnFDrgYCeyKmidZHPgksGKJuiTFgkXkwRpAUXsUdJISqLzkZiXncwRqNQSqYokEETtNmWwqvzxXoFcyvULzWuBxGKHCKVSXjPIzdENeaSIYcJyGojVXDKbWqDHYVANpPQqgClQtIMcqdjoUYrpUusyEejUzdxNlmqJSpMipUbWvrQVxYLgYDkbDNZuFDxytOAWTvzqtwDzONXZymCmnvBgtPRypVwSnSHvIZMMUGnpmQmAhxDtsduinFEnsDEHrtveuWqCAqORabuqeiWdvdGoOTOLybyrbeSTufRKRZLZKFFZuKEsTweGwNqnVtsLSZNaKXttfpxillWTBoXFyFCnpIFmVaqEONIUyDdenfSosEulUBYWLWnInfeHylGdMMCVOAKsHAbBKFYDEpbgKyfwixnjxiIIpSXzQVdoeFwvarDsbvjVnmUllakjwgYhBUXAbEqfxFcglUGlqTxikNeOzuUcSBlKjy', false);
        getAll_2 = objectStore_5519.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU');
        getAll_2 = objectStore_5519.getAll(KeyRange_27);
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('MFbAuiTfgiJUYAOtslMLYSmGwbSSoVhTTTdESKgLOJEBNTKKpkZgJLoFcjWnuRcFNdyZWQzXfcWoyBdXPcdyWnkVjrTwymKLMeCvJLzvAQwzBOsdbMKBtHfLosjczXDTXzJSEchvwaisaOAJNnqnSPZrmOdtYVhIBomAoSEhgwaivBOGGWhySCmCKGDtFAaQIlEpZHAuOvCNVrMFfDMrlGSLXIWhAPGurIxVOTHKHwafCGSZIAIIpGyJBOaRReaYgwHKLcaVgOvQkprnczjAVZOOPtFoHNrcNGBocmJfJyrrbmuRiboKsIMpZNDLvCaJDSwHBnSbhBTdqjYfVHdyKnqsWxdsyuIFcdnoAAeYpwGBMeEICYHzEAIudeGccPkOHAOGXVcejooKkhYBKSgdrJEhDZtTVLiqwFtbjCRnduVjLaDOtzzfGdPTOaxBeNYXlHEDvpIEOPEAqRZrRbMZxMuBOHYdNgSFdYBIlOMFEQwDWSAfDERFmHmImrIhCecFKvvKsoZCGzWtPdzgCacgFRNQNToSYpeZavlYqwzEGGCPZwaIhhxzfsmOSkgthdMkQvAUWqMUrsYPQOaIzHmAePlTpEoJAkwSVMmzOdHOhdgpMVDIpuKpyANKdRlWWQflVTgzdNTwpRvLAtNtskbvbLzhiwHOqxGPnjfCiPiHwppcUCpdNPQXPfJCTtItYiKxDyRU', false);
        get_5 = objectStore_5519.get(KeyRange_28);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_30 = IDBKeyRange.bound('WhWXfLjYFWKRaZuNqngEPyoJvxHJbcrsgaSCYUVUHfjDOcZUqcHCPEHawETcwnIRNeBZDATkTKffMvTvOITCERhQYzySjcAKNdsFJLhqHxGAwZdRuvNUpwQicaVLsIAPVlUCBKlXXZgDMFPUGnvRTEZmZtRaaJhmhnVLYAmYPExrhkhszSeAAugohXGduLBWwnyaBWpejOtKfPVoXsjXzDPZIkvamvdBupVCAlkjjhSZXLJPYkLJIGJizIYvacvZuLglbkvrahwuxBOdhsRrqBRoiBrUjvqjEVFPacYteTTGFYglmXcdMuyDSLkLRwGTpDOJdDHtoTBsrrAUNFQtYQcIhWktYhkHvFduBDIkNCOvGYlGqhxXrFVogjCxiWXmZRnMuJffIXvnpzoYahOQhppEHYhbkepEfCutRqrROuyqAiKXcuBiqHLBMgdgtNYZtTgdYuODgqWhfRRPdnoOlJkgFFXaaDnpBmcxqYmskArITeSfYoWuTDMWGCepWdwQCUnmGWusiYSYiWptuPWOFfrGMTYroFZEurGJXsiEvrfXlOKrRUPAZPDbQkKgLbGZJVEeyDwYsUeEfPXltoDeAfyHnCpYqdggrZaZffDleuszSuzofqDOiCjwhwIlfcZbhPrfaJIKDlhkHqoWiTMNcOKeSQdVMZUitXmLYYXOkfSgycGTRGGuAWXALufnOCdRPJPMCPkaLvgVWymyNmRaZJMCPioYmGpfOarqDcuZdkEuJQaoBFTUtzqWcgbRaviprAnpUOUZwBdlnhpZGrozaqmBtKzunhwufLuxMFdeRDjgaQoUNBrYAienTEjJffAYKPoBlqnvUDiNbdt', 'ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU', false, false);
        getAll_3 = objectStore_5519.getAll(KeyRange_30, 676838190);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('GsBWNFaDgYGmaWmOHQfVtVNnwEnXYkTqmigCNCuTFEfljgGemmboSjIUWizgIXiMEtycXVPrvoAGtFkQMilHjZFbRRBBqpMVcbqULHyliKDDJtCqDmaQQEubThULEbKVLQhAiBKgBFyBBWeGzYkDgEATCbJvODLbBKcRhxUHXegKAKqVMhAIQNjVvpfKMCLzJsvrnMKtdsAHaSGhKZphfdXZIycGvcnQKOaRDsTbuLnDswrxDgCqOHyMYatSajwveyKgVsCedghNCAWsITuvIWDpTRErOVOadHVcOyGzaUJDhAdfpzdAJbBxULkeGEZqFqiSPyzoQMxjvjsOWnnGcWzCnLvvlGUTtjnDqHWtrGPeDzEsIVTcbNBAVZCtMMwngHEgQuZEsIQCHDIqLAVcHhbSszQQnlkwyOcogYyxOtRzqxoLvauCrvPPNKhGZdIbMzmixVtJnYjIWmoGnOVtzokGmvAungGcVwfNxVaSohwUPwbIFVlYGARqUchWWfOBqxjmXznyhzcrvQHEkvaCACiLcejzGsJldvPZEqcoiWBHcsELLHlTmNNPzbMBdvFnAuMdfaEKMSWHsOYgRagEqcONQmZiMEdbblFAEFasVWhppwmqhTBPsEfaNKGmtTJVCYCABUidPLxgYTndpzrHPkxAeFGCmpJTzNGOppmFImYdoODRqHYbvXLYfyByJwBmyWfVUVeBDBuggtQVrnMnJbXdNpzmZzEUgRGLRxEGfbqSlbRJdGEnBOTwPelOCBCuuyTxutVjVeJXqMMlxeRfyRBwcKcihnijzXKIszxxioccqQMZlNNClvzaeQRMjwfEJqINxRQwceUWLsVyCGAZZTYhKgAgnGqTjjggxxdrfTENQrBQNNvYWVqKGkLzwVnMBJsymstShFAcARjNfZrrQeIjeooPLhnajhGzEu');
        getAll_3 = objectStore_5519.getAll(KeyRange_31);
    }

    var getAllKeys_1 = objectStore_5519.getAllKeys(1032722497);
    var count_5 = objectStore_5519.count();
    var getAll_4 = objectStore_5519.getAll();
    var count_6;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('WhWXfLjYFWKRaZuNqngEPyoJvxHJbcrsgaSCYUVUHfjDOcZUqcHCPEHawETcwnIRNeBZDATkTKffMvTvOITCERhQYzySjcAKNdsFJLhqHxGAwZdRuvNUpwQicaVLsIAPVlUCBKlXXZgDMFPUGnvRTEZmZtRaaJhmhnVLYAmYPExrhkhszSeAAugohXGduLBWwnyaBWpejOtKfPVoXsjXzDPZIkvamvdBupVCAlkjjhSZXLJPYkLJIGJizIYvacvZuLglbkvrahwuxBOdhsRrqBRoiBrUjvqjEVFPacYteTTGFYglmXcdMuyDSLkLRwGTpDOJdDHtoTBsrrAUNFQtYQcIhWktYhkHvFduBDIkNCOvGYlGqhxXrFVogjCxiWXmZRnMuJffIXvnpzoYahOQhppEHYhbkepEfCutRqrROuyqAiKXcuBiqHLBMgdgtNYZtTgdYuODgqWhfRRPdnoOlJkgFFXaaDnpBmcxqYmskArITeSfYoWuTDMWGCepWdwQCUnmGWusiYSYiWptuPWOFfrGMTYroFZEurGJXsiEvrfXlOKrRUPAZPDbQkKgLbGZJVEeyDwYsUeEfPXltoDeAfyHnCpYqdggrZaZffDleuszSuzofqDOiCjwhwIlfcZbhPrfaJIKDlhkHqoWiTMNcOKeSQdVMZUitXmLYYXOkfSgycGTRGGuAWXALufnOCdRPJPMCPkaLvgVWymyNmRaZJMCPioYmGpfOarqDcuZdkEuJQaoBFTUtzqWcgbRaviprAnpUOUZwBdlnhpZGrozaqmBtKzunhwufLuxMFdeRDjgaQoUNBrYAienTEjJffAYKPoBlqnvUDiNbdt', false);
        count_6 = objectStore_5519.count(KeyRange_32);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('VLDhnWXJhthbVjwIVEljXCLnLunjoCnxpBBaEkOAcsTwgOoZHOdQxylEUWNQRDUrViTQVdlUOczOscoaATbObtIMiMaJFRfmqiWNOuosgjTVIkduuBppTXKdduOvQGUJiXYvdrjbazahDPlBJVbeeAPsGowdlXPN', true);
        count_7 = objectStore_5519.count(KeyRange_34);
    }
    catch (e){
    }

    var getAll_5 = objectStore_5519.getAll(2604239538);
    txn_8338.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8338.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8338.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8339 = db.transaction(['objectStore_5519'], 'readwrite', {durability:"relaxed"})
    var objectStore_5519 = txn_8339.objectStore('objectStore_5519');
    var add_7 = objectStore_5519.add({f0_a: '<array>', f1_s: '<object>'}, 'aUTrHfCCCrZXhdkwUhpjRSDpQSQObIBzSCoiEadmivgIXygMLCHMpuAjDiwvRDunlaVGFQJUhJnkKWjtIZZCdNSCllOAQZFOkWayQgWRLqGcNBDOApgfpNOtHqAyMdjFMdZbMZYGaadNUrBBfAygttUkkkqxlnEtDwjRWQmuzlzJIHpimzBwKLTOvlTeXVeZONfFYVkSVdaERLWUtYpUhKJVCayLZSErHAHCbggbSXjMGFchaFMvDKBYVQYJswyvKwboxFmuhelljgktciIAGYvHdDaWlNmbWcXaHxWYrzMKVBamCyEqyVVyrtPKGcEWtrWFjiHmSRPDfkqtmlXLmZpBQIsrhilcJeEDuSpSnkyDBIFizUqMruxJvPoABordKztrsJeJnzqTvyInQhjCFBjKrDcLgKJoohGaHTBwCiGVUnEBeHZQHmqAJexCDBVFpqfnRFOKaUOcsgdJmhGjAPlzojQHRmWBbSzVjpgESvMJeYUARFxywEMiRpfVgugPiRRaGGOrrcOjkvdLdJyD');
    var put_4 = objectStore_5519.put({f0_a: '<null>', f1_l: '<array>', f2_t: '<array>', f3_p: '<number>', f4_g: '<null>'}, 'QRtXUCFHKPRaPTCAZKxPELZBroHzrSUjawMLHJTjkiZIoaKdsGSsvRuHePBtkvcbNcTcSLOfwIalxaeZNiTSuxHZcsppMkzVaAEikUBHBNgVepdXegbRFAludjiSmsScXwcnHPNKRxvWPvORRxKQNHgGYVJsnGykQXkTXHZBJtXdhpSzOjlNBEsquGMXGhfLyfWePoIhjsoYXagewkeTcJLcgebrrXPpBWoEqKyBAbcKFpGQpdDVECccpGFUsXBjrayVXEkZJNTQpQViulRWEGcxpUeuaDlJPMjcrvVlXbroAkGEdgVCbjesPmdupvmQfQwFYopXlQiveAHyNMIqLXHsHQqVsKrOKbSLjoYHWPUuFSIHlYRsnnrcbfusqAdqRfZhtXFWIrobMFvUiyzgOwCngUprOTLRdITKXfjkQRKXqgcPzuYGbyHVlxaNGiUkSOFKgviCkjsUhwvToCobGZatvFxvptsMUomhWLosYTuOvxbSmLgMdBEdcCnuDjTDqvsLNZMpUeqwOyWhPyFiKUGTxJarMrddyirjiQQUpUnyXYEMEJZQfVFfruTtSOhnwsTvdtaeFdIZwyfKkDRDlkGJJcmzTXchShkMyFoWIEpnCfBCPZaBLfcoTzIPOTKBKowLGGHhJpgOusbgxwViqAMFhUGBjlJsaRZYBuKsOVazumTzGNPBJiQxyHRVkNtlkdTWSgLTlXttwKNRtYhCMORFMzoQiVGrRJvGlYkBVTdbrIocBpxXWvCkJiYPbrYaNEhdlsTnaAgpGOoP');
    var put_5 = objectStore_5519.put({f0_x: '<null>', f1_z: '<null>', f2_m: '<string>', f3_t: '<string>', f4_c: '<string>', f5_w: '<boolean>', f6_l: '<object>', f7_a: '<number>', f8_b: '<string>', f9_a: '<number>'}, 'RrgcVxUcMvBDazbruVWgPfhQATeZyIvVoDt');
    var clear_6 = objectStore_5519.clear();
    var put_6 = objectStore_5519.put({f0_a: '<null>', f1_t: '<number>', f2_y: '<number>'}, 'zNOpJPGDQroubfuhFrDMmsHhFsBTdYAUTQhFKeKqmOxujYoHJbNMMTLYBOznnHJCHixCbELUwjeFqVjaBpVfzmgSqZwXGgeVYvzupRDBanxGaCgYutYftrgEIAYHwstBLmETItveJArJpazYKcqSDXEoBLFHWeSPTQsfMagjIHfTzXZcTaToDsMPFuMJRGcRVwnOSCySyGbfvuQcORTeFDspnCwxlxcDmFBXLrJZIYdTzArnnadDxYEGqygnvBcVdujsIgqhemYuFtthwaIRvddVstenigDVfCmESWiPfXxDJGECRXHbdjJvBBrJqTTGtIgryyELLjOxoueNAIzGHlJromUMsWHzjlduQeaLWvFWvlRGKRUJrNFqXfGiSxjyHJECggwURApdQajvHpAMOqVYXUvnPtivTygMKrAdnEBWIsqgQlafagyEJODqY');
    var get_6;
    try{
        KeyRange_36 = IDBKeyRange.bound('VLDhnWXJhthbVjwIVEljXCLnLunjoCnxpBBaEkOAcsTwgOoZHOdQxylEUWNQRDUrViTQVdlUOczOscoaATbObtIMiMaJFRfmqiWNOuosgjTVIkduuBppTXKdduOvQGUJiXYvdrjbazahDPlBJVbeeAPsGowdlXPN', 'ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU', true, true);
        get_6 = objectStore_5519.get(KeyRange_36);
    }
    catch (e){
    }

    var count_8 = objectStore_5519.count();
    var get_7;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('QezqlEqtVnEaoqusMHTRPVFmypysGQDiBtymjghUZqAdHoFcJqQlyemVxAHwzRDmCSGpaxwfqFBXKfXCtpZMBybrMZqMAfGIzVzqvAiEnCoESyrTiVRajMKKlkwGCdetowuMWsiEdpsWDIVUwOLajDfIiMGCiXaRTDEOWdWmieSFwIowzvcLtocDslcUkkOGcITvmtwbdkkeMbxsMGytDvGePFagAyufQfJjpZrOFvlxxBIPfHyrXkyXUOuNGHjoXYjRdQJsfZTnfoYrUxENNhUWYicMSNzdHdDAvZejBqJJHPZchbUbsEjmRfjPVGnhIiyeELYaEMgbJprgkKNVtGceEUEfKhxXYgVTTzIJPXPAFCZJkLPLTdkvSccixclDqsBucMbVBjKpidKweLVNSmbOXpHfabIGuUfbAsQfyIxMXCOtbMUMCYzbwZbElQpxziEdFfexRTdNZFHNPzyQaXRWSYYATMqoTspLewzpWvpxoYIZKtKcighkvujQvTHwOcHVbMijreiFGzSYDWTpYlcQKLaoOGXCYCXyRGoZdBjerllFnGzxIHTScsVkOSUbiklKscPFgsTxgQeqEGHphrJDPN', false);
        get_7 = objectStore_5519.get(KeyRange_38);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.bound('AJNkvgBlfoMQTYMCeCMIfBjMFhcnZIQcEjNhmJEHodBKRMMMNqNypLsWmZmtxGwcDUPGyzzYWUCvMCyAIodQotybfvpSVyYsmFuAGfcvAULrhlfnFDrgYCeyKmidZHPgksGKJuiTFgkXkwRpAUXsUdJISqLzkZiXncwRqNQSqYokEETtNmWwqvzxXoFcyvULzWuBxGKHCKVSXjPIzdENeaSIYcJyGojVXDKbWqDHYVANpPQqgClQtIMcqdjoUYrpUusyEejUzdxNlmqJSpMipUbWvrQVxYLgYDkbDNZuFDxytOAWTvzqtwDzONXZymCmnvBgtPRypVwSnSHvIZMMUGnpmQmAhxDtsduinFEnsDEHrtveuWqCAqORabuqeiWdvdGoOTOLybyrbeSTufRKRZLZKFFZuKEsTweGwNqnVtsLSZNaKXttfpxillWTBoXFyFCnpIFmVaqEONIUyDdenfSosEulUBYWLWnInfeHylGdMMCVOAKsHAbBKFYDEpbgKyfwixnjxiIIpSXzQVdoeFwvarDsbvjVnmUllakjwgYhBUXAbEqfxFcglUGlqTxikNeOzuUcSBlKjy', 'vXMcrXSgzpuoGHveczgWrzfstSlRQKmhcUdTzqYJHQqhwtQdbkogDMLsIeonvYSKhcLmxzqrFamrSDGsFwFr', false, false);
        get_8 = objectStore_5519.get(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.only('ViFnUAElsBLKFeEzcDWsPMnZXrCCLIHMzPWolWmFdNsAXYLLgOLeOAmU');
        get_9 = objectStore_5519.get(KeyRange_42);
    }
    catch (e){
    }

    txn_8339.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8339.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8339.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_90')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};