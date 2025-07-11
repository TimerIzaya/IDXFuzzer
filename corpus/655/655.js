let db;
const openRequest = window.indexedDB.open('str_7348', 749059495054717)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3948');
    var add_0 = objectStore_0.add({f0_f: '<null>', f1_w: '<array>', f2_t: '<boolean>', f3_w: '<boolean>', f4_a: '<boolean>', f5_z: '<null>', f6_v: '<object>', f7_u: '<string>'}, 'WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz');
    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var put_0 = objectStore_0.put({f0_c: '<null>', f1_u: '<number>', f2_d: '<array>', f3_y: '<object>', f4_m: '<array>', f5_q: '<object>', f6_r: '<array>', f7_u: '<boolean>', f8_n: '<string>', f9_h: '<null>'}, 'YIDwlWENRjBLNOPZgoSdaqGuzkPSxvFoCUczkYiuJOopyJqQEVHgFQoBaOAbHRtiMziiruewTdtOWVkEJoLAPyBiDCZLsQbJxELJEbwSMTcZeevDrLwHGEIVghIMcnUejRTsCEJbDbaqSkfQPFSUatSqlmLOeHYISwpvxJvNwUMYsbJpgQJUkOOkYeFRHrfUjzIaVcgAuXocsGEZrqYgqpJFcScyZGYJuaStIbMRIJEhOlMRdXksPdMvfFfLOzRrhNIDMmvlUjohUOoUYLKNluecuPbuCPGqonyRZQlVBlrLSHRJLBlTwwuMqYTBKaBYcqQjDSjKNBFRNNevEliSfiziaKXQjBEdyRmkPLfmEXffGERxshvBhTFmFilYFrjSoFogtRbQtJfYVqBXxhUbZJRBbEtiQysCxhWDzpWoCrFYHROljZGlkolerDEvYltvxNbhZxdgflDjaBQRabnEleKqPcRcgGBAIxcSTsObqDNoTVpzCnMmstJCRWyqAsZHIEJkPCEhXNtRfOWqQDczXmkEOdkCnXgrDCAfRRAjeeZfvebLSRFBCwwiCMIPmVYGXbKixyEGOCpPDLe');
    var add_1 = objectStore_0.add({f0_x: '<boolean>', f1_k: '<string>', f2_f: '<boolean>', f3_g: '<null>'}, 'eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle');
    var put_1 = objectStore_0.put({f0_z: '<number>', f1_k: '<boolean>'}, 'yLXvRfjWcwrQNSCerVJEXTSlURxVErhzbQtIlYhtyZAGdNZQErdicYwxMFrbEPduSMNwQjKHmQSwVqzrUCRmlddwaEFmPNqnwcHzHMueNkCQEyjJxVeIxbkSWVTWJBmVfWYDEVcFFerKYdDjYEQrWfCZUoLHIVZyQHlsbfcjvnmsZZWOnzjWgkeoyCtDTWophPyCCLEqVcdxzOHldVmNVLCCoqRnhqZVeNjYHugYklWYOnncOUyXHdHISTzPGheQGqegkeLBuLghdwWYlOCNQgzQHWsBynnzkjmzOgVbYadqAjSgLprIYwnABzvpoOlgWDfBrjUQgaXgvGCNvFvPDuZELfxsGqByXnOEZNKcKSJkpIquBUuvusOCgmmhbRJKDqCshnQeBfteMIgzqIKtcnnXbICaGWuSSTqzZrSiATazmGbDQaUcTSAHMhyONIpxNEnHSzsMNMMhyCSWZHpJXauYVOzQgXfzLYizNNOJVQbkmYKYuGrewLFCZwnndVsYDaIghonduGBZsiGMMJscwZFKrrwbxuwwXVzZdpLisDBvUvvSnDOALbdCgkQfdrvDADtjlECIfGZovCOSylSKNsSMwJrXLgsyrZkveMhgTqszpaxAtvyUcFrraJSeWDCeyRUPRrrOnKdSWurPbKWJjOAanzGdfhccIwPXOKgvpzLQkiPdEELaUdfLjqLFZtagwOqmDweaBOoayVgkoldXFNYRKfDLxSOsMsirMlRcwVpjXfEfESbetyBBxCQaKJHdyLkHPhDJlDFTmJjCkHudITlauztrHMENxKGxFIxxO');
    var objectStore_1 = db.createObjectStore('objectStore_3949', {autoIncrement: false});
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.only('WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz');
        getAll_0 = objectStore_0.getAll(KeyRange_0, 4249997231);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle');
        getAll_0 = objectStore_0.getAll(KeyRange_1);
    }

    var index_2655 = objectStore_0.createIndex('index_2655', 'test', {unique: false});
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('yLXvRfjWcwrQNSCerVJEXTSlURxVErhzbQtIlYhtyZAGdNZQErdicYwxMFrbEPduSMNwQjKHmQSwVqzrUCRmlddwaEFmPNqnwcHzHMueNkCQEyjJxVeIxbkSWVTWJBmVfWYDEVcFFerKYdDjYEQrWfCZUoLHIVZyQHlsbfcjvnmsZZWOnzjWgkeoyCtDTWophPyCCLEqVcdxzOHldVmNVLCCoqRnhqZVeNjYHugYklWYOnncOUyXHdHISTzPGheQGqegkeLBuLghdwWYlOCNQgzQHWsBynnzkjmzOgVbYadqAjSgLprIYwnABzvpoOlgWDfBrjUQgaXgvGCNvFvPDuZELfxsGqByXnOEZNKcKSJkpIquBUuvusOCgmmhbRJKDqCshnQeBfteMIgzqIKtcnnXbICaGWuSSTqzZrSiATazmGbDQaUcTSAHMhyONIpxNEnHSzsMNMMhyCSWZHpJXauYVOzQgXfzLYizNNOJVQbkmYKYuGrewLFCZwnndVsYDaIghonduGBZsiGMMJscwZFKrrwbxuwwXVzZdpLisDBvUvvSnDOALbdCgkQfdrvDADtjlECIfGZovCOSylSKNsSMwJrXLgsyrZkveMhgTqszpaxAtvyUcFrraJSeWDCeyRUPRrrOnKdSWurPbKWJjOAanzGdfhccIwPXOKgvpzLQkiPdEELaUdfLjqLFZtagwOqmDweaBOoayVgkoldXFNYRKfDLxSOsMsirMlRcwVpjXfEfESbetyBBxCQaKJHdyLkHPhDJlDFTmJjCkHudITlauztrHMENxKGxFIxxO', 'eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle', false, true);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
    }

    var put_2 = objectStore_0.put({f0_l: '<object>', f1_t: '<number>', f2_p: '<object>', f3_k: '<null>', f4_i: '<boolean>', f5_n: '<object>', f6_y: '<object>', f7_h: '<number>', f8_c: '<boolean>', f9_j: '<boolean>', f10_a: '<boolean>', f11_h: '<null>', f12_d: '<string>', f13_p: '<string>', f14_m: '<string>', f15_q: '<number>', f16_o: '<number>', f17_l: '<null>', f18_n: '<number>', f19_z: '<object>', f20_b: '<string>', f21_t: '<number>', f22_q: '<array>', f23_d: '<null>', f24_c: '<boolean>', f25_t: '<number>', f26_r: '<boolean>', f27_h: '<null>', f28_f: '<object>', f29_k: '<number>', f30_b: '<boolean>', f31_l: '<object>', f32_u: '<array>', f33_z: '<string>', f34_t: '<object>', f35_n: '<string>', f36_p: '<string>', f37_g: '<array>', f38_n: '<null>', f39_z: '<array>', f40_o: '<array>', f41_b: '<null>', f42_s: '<number>', f43_t: '<array>', f44_o: '<string>', f45_m: '<object>', f46_a: '<object>', f47_z: '<array>', f48_k: '<array>', f49_w: '<array>', f50_p: '<boolean>', f51_n: '<number>', f52_l: '<array>', f53_x: '<object>', f54_u: '<null>', f55_x: '<array>', f56_w: '<object>', f57_w: '<object>', f58_g: '<number>', f59_u: '<object>', f60_h: '<boolean>', f61_c: '<boolean>', f62_z: '<null>', f63_b: '<boolean>', f64_a: '<boolean>', f65_z: '<object>', f66_f: '<number>', f67_y: '<boolean>', f68_y: '<array>', f69_m: '<object>', f70_w: '<null>', f71_d: '<array>', f72_p: '<null>', f73_y: '<object>', f74_d: '<number>', f75_j: '<number>', f76_u: '<null>', f77_u: '<number>', f78_d: '<boolean>', f79_t: '<array>', f80_f: '<array>', f81_r: '<string>', f82_i: '<string>', f83_q: '<null>', f84_a: '<object>', f85_g: '<object>', f86_u: '<number>', f87_h: '<string>', f88_p: '<boolean>', f89_b: '<null>', f90_i: '<array>', f91_s: '<boolean>', f92_e: '<string>', f93_t: '<number>', f94_a: '<string>', f95_f: '<object>', f96_m: '<array>', f97_h: '<boolean>', f98_u: '<string>', f99_m: '<array>', f100_l: '<number>', f101_m: '<array>', f102_f: '<null>', f103_v: '<boolean>', f104_x: '<object>', f105_b: '<string>', f106_a: '<string>', f107_y: '<null>', f108_b: '<string>', f109_k: '<array>', f110_c: '<array>', f111_h: '<boolean>', f112_i: '<null>', f113_n: '<boolean>', f114_w: '<array>', f115_g: '<boolean>', f116_n: '<boolean>', f117_j: '<number>', f118_a: '<object>', f119_j: '<string>', f120_m: '<object>', f121_x: '<number>', f122_y: '<object>', f123_w: '<array>', f124_n: '<null>', f125_g: '<array>', f126_o: '<number>', f127_l: '<number>', f128_b: '<null>', f129_r: '<string>', f130_k: '<number>', f131_i: '<array>', f132_p: '<null>', f133_a: '<array>', f134_w: '<null>', f135_l: '<array>', f136_n: '<array>', f137_w: '<boolean>', f138_n: '<boolean>', f139_c: '<string>', f140_i: '<null>', f141_y: '<boolean>', f142_h: '<string>', f143_x: '<boolean>', f144_s: '<string>', f145_v: '<string>', f146_l: '<boolean>', f147_s: '<null>', f148_m: '<number>', f149_u: '<object>', f150_m: '<string>', f151_b: '<null>', f152_p: '<string>', f153_i: '<string>', f154_u: '<string>', f155_o: '<object>', f156_j: '<array>', f157_m: '<array>', f158_k: '<string>', f159_s: '<null>', f160_n: '<array>', f161_b: '<null>', f162_c: '<boolean>', f163_x: '<null>', f164_h: '<boolean>', f165_k: '<null>', f166_k: '<number>', f167_f: '<boolean>', f168_w: '<number>', f169_a: '<null>', f170_e: '<array>', f171_r: '<number>', f172_v: '<array>', f173_y: '<boolean>', f174_p: '<boolean>', f175_p: '<array>', f176_q: '<boolean>', f177_t: '<number>', f178_c: '<boolean>', f179_l: '<string>', f180_v: '<number>', f181_m: '<string>', f182_y: '<boolean>', f183_u: '<array>', f184_v: '<array>', f185_f: '<string>', f186_u: '<boolean>', f187_s: '<null>', f188_v: '<string>', f189_k: '<string>', f190_e: '<array>', f191_r: '<object>', f192_p: '<number>', f193_y: '<null>', f194_b: '<array>', f195_o: '<number>', f196_i: '<string>', f197_n: '<array>', f198_p: '<string>', f199_x: '<boolean>', f200_w: '<boolean>', f201_c: '<null>', f202_n: '<object>', f203_i: '<null>', f204_j: '<number>', f205_f: '<null>', f206_u: '<null>', f207_p: '<number>', f208_v: '<number>', f209_o: '<null>', f210_h: '<boolean>', f211_d: '<boolean>', f212_k: '<null>', f213_u: '<string>', f214_l: '<object>', f215_c: '<boolean>', f216_g: '<array>', f217_m: '<null>', f218_k: '<number>', f219_k: '<null>', f220_l: '<boolean>', f221_x: '<null>', f222_f: '<null>', f223_v: '<boolean>', f224_p: '<object>', f225_k: '<object>', f226_y: '<array>', f227_o: '<null>', f228_h: '<string>', f229_n: '<boolean>', f230_a: '<string>', f231_d: '<boolean>', f232_k: '<boolean>', f233_b: '<boolean>', f234_h: '<object>', f235_k: '<string>', f236_q: '<null>', f237_o: '<object>', f238_s: '<boolean>', f239_k: '<object>', f240_v: '<boolean>', f241_m: '<null>', f242_c: '<string>', f243_g: '<object>', f244_z: '<object>', f245_r: '<object>', f246_j: '<number>', f247_l: '<boolean>', f248_j: '<string>', f249_b: '<number>', f250_v: '<null>', f251_x: '<number>', f252_s: '<number>', f253_i: '<boolean>', f254_j: '<boolean>', f255_x: '<null>', f256_d: '<string>', f257_r: '<string>', f258_g: '<string>', f259_g: '<array>', f260_a: '<null>', f261_s: '<number>', f262_c: '<boolean>', f263_k: '<number>', f264_q: '<null>', f265_n: '<string>', f266_j: '<boolean>', f267_h: '<number>', f268_a: '<number>', f269_n: '<object>', f270_w: '<object>', f271_b: '<number>', f272_c: '<number>', f273_l: '<object>', f274_z: '<array>', f275_c: '<array>', f276_b: '<number>', f277_g: '<object>', f278_m: '<null>', f279_d: '<object>', f280_u: '<number>', f281_q: '<string>', f282_b: '<number>', f283_s: '<string>', f284_y: '<array>', f285_z: '<array>', f286_t: '<boolean>', f287_n: '<string>', f288_n: '<string>', f289_p: '<object>', f290_b: '<boolean>', f291_a: '<array>', f292_y: '<null>', f293_d: '<boolean>', f294_g: '<object>', f295_t: '<string>', f296_s: '<string>', f297_e: '<number>', f298_g: '<array>', f299_s: '<null>', f300_h: '<array>', f301_b: '<boolean>', f302_t: '<null>', f303_f: '<null>', f304_l: '<null>', f305_p: '<string>', f306_z: '<boolean>', f307_i: '<null>', f308_s: '<number>', f309_b: '<number>', f310_q: '<null>', f311_j: '<number>', f312_f: '<string>', f313_s: '<object>', f314_k: '<null>', f315_h: '<object>', f316_k: '<number>', f317_d: '<number>', f318_s: '<string>', f319_i: '<string>', f320_b: '<string>', f321_p: '<boolean>', f322_z: '<number>', f323_p: '<object>', f324_w: '<number>', f325_f: '<string>', f326_w: '<boolean>', f327_e: '<array>', f328_q: '<null>', f329_y: '<string>', f330_z: '<number>', f331_p: '<array>', f332_e: '<number>', f333_o: '<string>'}, 'upvawFxwycDBVgvTeSJQHyGXNBGbyZEEBRvlPhOeZBCmyVECLmYHdqYJoBhmjHkOMidSwcjbwTAOuRKWKycLRfiJcNEqmFULdSZildZxBcxsMYtXiBwYkupeshVVnbMjhRCIDaBVjLPNeIYjBOttyRQdOipZJrORLSJXCEyPzrzkWBhuRgznsawqeDCylQFLWfuNISOWbAlONtzZgMlJYHKQNqLWGAyfIeFRuh');
    var add_2 = objectStore_1.add({f0_p: '<array>', f1_v: '<number>'}, 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
    var put_3 = objectStore_0.put({f0_u: '<number>', f1_f: '<null>'}, 'bIGwSlIVxrbcPCcNdlYivGAwBhsqYwNUelAhzJvlZFGOhanwMzAmVEvaKncaHPBfhHZYfTLpOjxIgCMZVXBPjeQtuZSUgBoODSzvlXRJQntCLqGMznbvlDuaMPwBFWhVrQPpCMSLTylFIBObaSJomGnUoyqhweVmZesqhzmcULWdFgGwiYBxFuxAevAWsWHZFsTDTFgRLjOfXmafhAjSXKmgsZxTkFvUgatoricSqIFQjButuuxemHGfglPcfVOeuXvJjroutSaaKAMndtyImPSQsfIcYQhOPmlaxBMPlMWncILxGLCgWEAHXOVVvMUvwnBPwApgIjJdINWtjjxBLuloXiQdiQIUzGMjFkugokkoWMBUGbhJuIwydyyAiBpOIWLHjSSrkLLsDgMPumhyyWKwFnTGioiXDvMuzfxvIvyjyKOLZsRJhmXlKyKIYKNoUSVXfJIernkEeyAIGSsSbjDCgbFgBAtVBaExPyDuaFKiNrCxSyiMoErfuzLSXgOSIiwrAqVMHjRKajbQzJPBqyegvkCHWhEgFnqrkVOVYdbHlfridgodFifakkGXMILLGHyfdurvOhkTWTCejjcSgRTRsSUXqzBDpBAaGFuVez');
    var count_2 = objectStore_1.count();
    var add_3 = objectStore_0.add({f0_f: '<null>', f1_o: '<number>', f2_e: '<null>', f3_b: '<string>', f4_c: '<boolean>', f5_f: '<object>'}, 'RxMskmMAVluyFYLHWYblKCzXkGzTIncjLwuhFRFijiiRBERfXWchbkvJbVMADklldRltWIEmAaFOrhFkGVriAcILakIVBDATNxGsLUMvebjJFkuhTFJEopmxKkwIJDrndChbRYcTbMCyGhQBEFluUfkTXFQdBtYiqGikTfdoEKemfdeCuzPzcedtBEvUdFlILOEebQORFEJpkcOiOuvtRWQHTvxJieOtXHJmVLrguOxvimlYcmWUDxNjpSWQYdfraujYJtSkxPfIWonjFgRXLEGYWUOgMgIjofafopRAeUkJLZmgxwtbpXlvHqhyhcwkCyzMeRaReQiNuufrIQGJHEJaDanFQPyGElOiRvcBBQnihEoGOrWDsOuyGLHNIxcYbNbrECtazNZDqTvpQCvriWsAMeSsWEnfMjWpqiaGFcLWxVFFKwOMqzwdGKFjZRMyiDmDLMuUVAeXtGIPpINove');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5910 = db.transaction(['objectStore_3948'], 'readonly', {durability:"default"})
    var objectStore_3948 = txn_5910.objectStore('objectStore_3948');
    var getAll_1 = objectStore_3948.getAll(2599574133);
    var index_0 = objectStore_3948.index('index_2655');
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('YIDwlWENRjBLNOPZgoSdaqGuzkPSxvFoCUczkYiuJOopyJqQEVHgFQoBaOAbHRtiMziiruewTdtOWVkEJoLAPyBiDCZLsQbJxELJEbwSMTcZeevDrLwHGEIVghIMcnUejRTsCEJbDbaqSkfQPFSUatSqlmLOeHYISwpvxJvNwUMYsbJpgQJUkOOkYeFRHrfUjzIaVcgAuXocsGEZrqYgqpJFcScyZGYJuaStIbMRIJEhOlMRdXksPdMvfFfLOzRrhNIDMmvlUjohUOoUYLKNluecuPbuCPGqonyRZQlVBlrLSHRJLBlTwwuMqYTBKaBYcqQjDSjKNBFRNNevEliSfiziaKXQjBEdyRmkPLfmEXffGERxshvBhTFmFilYFrjSoFogtRbQtJfYVqBXxhUbZJRBbEtiQysCxhWDzpWoCrFYHROljZGlkolerDEvYltvxNbhZxdgflDjaBQRabnEleKqPcRcgGBAIxcSTsObqDNoTVpzCnMmstJCRWyqAsZHIEJkPCEhXNtRfOWqQDczXmkEOdkCnXgrDCAfRRAjeeZfvebLSRFBCwwiCMIPmVYGXbKixyEGOCpPDLe', true);
        get_0 = objectStore_3948.get(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('YIDwlWENRjBLNOPZgoSdaqGuzkPSxvFoCUczkYiuJOopyJqQEVHgFQoBaOAbHRtiMziiruewTdtOWVkEJoLAPyBiDCZLsQbJxELJEbwSMTcZeevDrLwHGEIVghIMcnUejRTsCEJbDbaqSkfQPFSUatSqlmLOeHYISwpvxJvNwUMYsbJpgQJUkOOkYeFRHrfUjzIaVcgAuXocsGEZrqYgqpJFcScyZGYJuaStIbMRIJEhOlMRdXksPdMvfFfLOzRrhNIDMmvlUjohUOoUYLKNluecuPbuCPGqonyRZQlVBlrLSHRJLBlTwwuMqYTBKaBYcqQjDSjKNBFRNNevEliSfiziaKXQjBEdyRmkPLfmEXffGERxshvBhTFmFilYFrjSoFogtRbQtJfYVqBXxhUbZJRBbEtiQysCxhWDzpWoCrFYHROljZGlkolerDEvYltvxNbhZxdgflDjaBQRabnEleKqPcRcgGBAIxcSTsObqDNoTVpzCnMmstJCRWyqAsZHIEJkPCEhXNtRfOWqQDczXmkEOdkCnXgrDCAfRRAjeeZfvebLSRFBCwwiCMIPmVYGXbKixyEGOCpPDLe', false);
        get_1 = objectStore_3948.get(KeyRange_6);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle', true);
        count_3 = objectStore_3948.count(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('upvawFxwycDBVgvTeSJQHyGXNBGbyZEEBRvlPhOeZBCmyVECLmYHdqYJoBhmjHkOMidSwcjbwTAOuRKWKycLRfiJcNEqmFULdSZildZxBcxsMYtXiBwYkupeshVVnbMjhRCIDaBVjLPNeIYjBOttyRQdOipZJrORLSJXCEyPzrzkWBhuRgznsawqeDCylQFLWfuNISOWbAlONtzZgMlJYHKQNqLWGAyfIeFRuh', 'WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz', true, true);
        get_2 = objectStore_3948.get(KeyRange_10);
    }
    catch (e){
    }

    txn_5910.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5910.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5910.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5911 = db.transaction(['objectStore_3949', 'objectStore_3948'], 'readonly', {durability:"relaxed"})
    var objectStore_3949 = txn_5911.objectStore('objectStore_3949');
    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.bound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true, true);
        count_4 = objectStore_3949.count(KeyRange_12);
    }
    catch (e){
    }

    var count_5 = objectStore_3949.count();
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true);
        get_3 = objectStore_3949.get(KeyRange_14);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true, true);
        get_4 = objectStore_3949.get(KeyRange_16);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        get_5 = objectStore_3949.get(KeyRange_18);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        get_6 = objectStore_3949.get(KeyRange_20);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true, false);
        get_7 = objectStore_3949.get(KeyRange_22);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_24 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        get_8 = objectStore_3949.get(KeyRange_24);
    }
    catch (e){
    }

    var count_6 = objectStore_3949.count();
    txn_5911.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5911.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5911.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5912 = db.transaction(['objectStore_3948', 'objectStore_3949'], 'readonly', {durability:"strict"})
    var objectStore_3949 = txn_5912.objectStore('objectStore_3949');
    var count_7 = objectStore_3949.count();
    var getAllKeys_0;
    try{
        KeyRange_26 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        getAllKeys_0 = objectStore_3949.getAllKeys(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        getAllKeys_0 = objectStore_3949.getAllKeys(KeyRange_27);
    }

    var getAllKeys_1 = objectStore_3949.getAllKeys();
    var get_9;
    try{
        KeyRange_28 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        get_9 = objectStore_3949.get(KeyRange_28);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true, false);
        count_8 = objectStore_3949.count(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_3949.getAllKeys(552991465);
    var getAllKeys_3 = objectStore_3949.getAllKeys();
    txn_5912.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5912.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5912.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5913 = db.transaction(['objectStore_3949'], 'readwrite', {durability:"default"})
    var objectStore_3949 = txn_5913.objectStore('objectStore_3949');
    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', 'WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk', true, true);
        get_10 = objectStore_3949.get(KeyRange_32);
    }
    catch (e){
    }

    var add_4 = objectStore_3949.add({f0_v: '<boolean>', f1_c: '<array>'}, 'tbPEHCIihyyaaUTfNccGKeFpgFqnqSuONjpVrdXqWIQKGNuiwsJDCzNRPMdVJbLQNOxgQpACKpzTfJoACHDcAIzynaKNIjvpdfKlZOHBXBlnHAnqItJnbqddhCQTiYgXIVgimMtNbvvjfLQySqYWfnAeRmZZIiTrbAZcZPfFWjUdwAfpkIoUTmvpSWQPDdezkAmWPiOqqvxTQWqjuIpaBrOHvoFHKTPFsgYyNgWONAkwcBREpXIZaqkNDoqbEpifgJFwaeIpjRifopPFXDmkntIXCaOyqVIqLLeJTAhcevyHvorbalzDqoVdzezxmissOEKtNJSBfPxWxqpPqppKcJOXljRTBXbtYFVNmyFVoLekEmpmyhHsholKYSlVbAXOXVZiMgsENCDznEdsJjadQNFRnlBmJnpXaaJCSruoERqQAVMLsopBrNkcTimdTuWAIsouoanZBUGXnLNPuczkJoiyetHffAPIiNutdZiyZqhtFGrfbZqOQCBcJvIWwwRmifVSPAYjSXZLmVpDIrwJfRzLNRZtoENQKBwUriavYhVlGsaKDCKOvfsVGYHJdZLtGSswCaHZxrNGpAsaMHuwAZsMQfprqsNTrhLpxkALXNGgEohyclKARkRTzUKiXbnHGaJwUSGKXTRXMOdeXWjMkWMamHidEYsRHEPldxktKbNVfrnPAIUcgUaiwBpHOGlKWksSJTgkFPgToDDrJbMBBVNthRdQVfHQXeAqgDrJTOJTZatwLJDMFBeVAOixWKDQTIBMxFMlXGLJadAWpNwilBHjNPfDjUJxrybOLzPNMXIZdedZdkYvhgPgJaujthDCsTQlgOgdwPm');
    var add_5 = objectStore_3949.add({f0_j: '<object>', f1_y: '<boolean>', f2_p: '<object>', f3_l: '<object>'}, 'ztqZApGFxsMRvrThxbvjwyeHEgFPOSimjqGfMspHpjnEQafRznGnnaEyZegJAGXahnEPVbzhSSdKGWzZTFJiIgTJCzPQdCgsiiROjAaIKPLvOEIBMbsxldVDWeYqooNtCsaNTZdUmEYJzqriDOXKImwnluhwmKIGOmWXFYUENomzBARMLIyeDdjPWfwEEmBMeeReDvLinTAoIvacQfpCGVRpTvEkKnqFmQhdrIBVfTKAbpWDMfaysryEywHKKyfJoXRPQsxDJeoLEaIKXEcwCYUEJSZJRQQuXXBKeljoJtfjXPvGDAHzlEtsnKySzWeCdobMwAwQDJeHnPkqOqPzDuFTLvtzDRKnYsiKTevFbTRUrWfeXnSRCAVlGlKdiMsHpAXRrTNOABFvdrEiLhGJLcumfZTgtfwqtEgcEjtojBiPPwchifwAQsqMsNcvbxGmzSywuDiEbeoPkfhygwHMwpwEWMxQbtvTRselzLCHuYpRJaCwrkMEaiiWqZCuIfZkfUDFvlZnqWKmSrLDWblTNYyWreoLDLOhcwrPySDgsXUGZOmCIapuDzkBJlJDxdtTsanDPekENVoEunFNspWfllmmauihYvRyevlZNWVWwIjcTSTabWIpjXvqTQxzbCftRHQCDZLXKgIQUhWMUXVrXJbTepsWkYZxOzYuJVVPBaMuEAqzNcYryaIRPaHtgjAJKcjAtJuOBXFJLDPhFwuDjnxNbsmxPGxdZJPApuxAuxIWyHIxWfRCKKebMuvqJtXvCpkjEyHZyNJKYDuRiRqbOSftXpIBBoFONXXclFIEjSHdkBYWoEupcuQfDZwomYYPnePWQrLXRpkAMfojOxOtNWEMCVNYjqZOBQnApYVHk');
    var count_9 = objectStore_3949.count();
    var get_11;
    try{
        KeyRange_34 = IDBKeyRange.only('WUvDuvPesRZsnEvuBiRzkKqcHyYNJnHQmmhHkXnfpcHxbhXLrPfSTUUhqPpPkYvveVdMPQSoLuBOnpbfuQTSurceOJWfpWpDZUyCrVvLGVPIhFDcLldzcQmaCzwUbGjvDrVklVfnSXyrpAQxhZyFIHnvyVwaEnuAYhkDDXnylbLeRQKHBYeuZtSzxvaijZKVYIuyGPBrWmVotZtoWASIluWvWoTspEiVEvTijfHXtrNoqFHRDIFGARATpDVvoLFjeiTImqNVUWDZMcvAgdLDjpnkuQJtHJYCKsLqcouaihsuRBKfSltcRODmINDUgUrpBRkRFBAxJROhTKExfwVnUDVwsISNQVECXUk');
        get_11 = objectStore_3949.get(KeyRange_34);
    }
    catch (e){
    }

    var add_6 = objectStore_3949.add({f0_k: '<number>', f1_o: '<object>', f2_i: '<boolean>', f3_u: '<string>', f4_i: '<array>', f5_g: '<object>', f6_j: '<null>'}, 'fAzsEaTnRRBJAqWLkTWhHNFehLGXTkFyRihHSpMyHXsBsdxyxfNoliZfDrcpLVJTGgrofhVrsLbFCKDPdzezFslqiWsLQSzhRfPDVwuGfiSBiCEfECOnyNkkflZJqkaMVyTEzpDtnXOKKcwyzNJoXSiiDiyaENgrPoTQtuFLIbTMROZMbUJCMltIFVSTrRIZFtXpfEdSWuaNFyuCfEghmLUTAisZSgiMJQHrUEvWygDQwIIwrgvGyiUgtZFgpklFOHkaGnrcOPBKwydEFnvwiMaXNXVTZBYziMOYOPStghXvdJVgQYCgGdneFJnYmYIcvVaUhlMkiqeKFfXDEGRyTvEItFZvwk');
    var put_4 = objectStore_3949.put({f0_l: '<object>', f1_c: '<null>', f2_b: '<boolean>', f3_h: '<array>', f4_t: '<boolean>', f5_r: '<array>', f6_f: '<boolean>', f7_w: '<object>', f8_j: '<string>'}, 'EDYiXVUgukoUmnSANsORxnTZpjdqwQitmPlFTBASfkLGPZvVpfhdSuWZhgbJEgqfZAOAjxUPLgHKAFjBrMbovdjKgWbDrWKouPtQomMfkQTRkwtdQmcYMHDfhLZtwXiPXkBvtqJdpoKrgNUFOFBQqCSMkeXHRBFARQRIJJDgypJxsyptSrnHzDqcZmavNuuCIXyNZwRrekoTQhFSLrxUnTQtoAFqXjmkHTrwYQDDuXRrdyvvzKDFBqaoNWaFFIncoKxWzeuiEgclXEEgpncoEfIAEPrlgomDnouCKguGGUIFYTXNfpqgiVxNCkawtwMSYIXwZsDcAvCtcukBSLPBCaDMdgxdmdhDqYMHciBnuTTVXNjKoSQfLHsyIPxptAMOiUWJrhBKJRAYBouHWgihryOQiAcECqDOaQyRdoUCMRnArXydRyThCpDOuIAJtpekRgSAQLVClnYqGZjRZUKrucjTYtcTXOarYhEsBeuEPurkVjOqXnAhlvrRhQoRakyADMZRbEcqvGNQpaMaGayvIifMhingENfZOADeECYXpLjLOrRcGgwPUsjfPRwNkBJoumJFqGMCjKPQLhmdkQGgqLztARFVTnmtiupujLTNlLIFMSYRMauxuSmloEAYbyVuKsxZsioPSefxEXkXmqBpJbPPwgarXerNPBcYTUEiGVgGSCeGncMLdwiBgDXfryLdBcokJzXmSnRXHnNSRFtBlZhhwYUYmErxEiUUsrTzPWeGqVkUnrypsczAHCHTkzagisTctSkBdvuThoYgAzfdWwMsyKOnRPlCBKwEixbBKqztbLCKleGdzEMaclxbpCtTaTRXzsUDCgMgPSsImFSqGCsoRXmtRanttUsgfPopLxXtQlvNnnalKhcnRKtmVMdLqvlLTICPMOjDOxtqtPSSCAQUHwztFoTcaJM');
    var put_5 = objectStore_3949.put({f0_r: '<number>', f1_k: '<string>'}, 'NIBcAUZqoHSCjhwYPGtWcrjmXIHcEZvDKzQXrLQtQAZDQjnNWVKGRyEOoTdRkDnIbDozBjQXPtqIncJHjOCDjdzEOinveQOlLmIpWQCMLULZdvqLvoSDfczybKSZhqRZZRMPkhoyEfSGaZuEEolTklZFfbCfStEtARoDhUdAgxzsvrsgzOPILebcfLgOdzhCFGNnMrZoKZXAuqMFXniMgENbEFtGvabYMXWVmKylPerMzpGUUewAxoXLHNqlenSymDEUqClIUBoXflNOyaxpKLAOrQqplQSsoJEdpxAPgXjaHvrjAtj');
    txn_5913.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5913.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5913.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5914 = db.transaction(['objectStore_3948'], 'readonly', {durability:"strict"})
    var objectStore_3948 = txn_5914.objectStore('objectStore_3948');
    var count_10;
    try{
        KeyRange_36 = IDBKeyRange.only('WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz');
        count_10 = objectStore_3948.count(KeyRange_36);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_38 = IDBKeyRange.only('eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle');
        count_11 = objectStore_3948.count(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_4 = objectStore_3948.getAllKeys(295332507);
    var getAllKeys_5;
    try{
        KeyRange_40 = IDBKeyRange.only('eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle');
        getAllKeys_5 = objectStore_3948.getAllKeys(KeyRange_40, 3526620434);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('yLXvRfjWcwrQNSCerVJEXTSlURxVErhzbQtIlYhtyZAGdNZQErdicYwxMFrbEPduSMNwQjKHmQSwVqzrUCRmlddwaEFmPNqnwcHzHMueNkCQEyjJxVeIxbkSWVTWJBmVfWYDEVcFFerKYdDjYEQrWfCZUoLHIVZyQHlsbfcjvnmsZZWOnzjWgkeoyCtDTWophPyCCLEqVcdxzOHldVmNVLCCoqRnhqZVeNjYHugYklWYOnncOUyXHdHISTzPGheQGqegkeLBuLghdwWYlOCNQgzQHWsBynnzkjmzOgVbYadqAjSgLprIYwnABzvpoOlgWDfBrjUQgaXgvGCNvFvPDuZELfxsGqByXnOEZNKcKSJkpIquBUuvusOCgmmhbRJKDqCshnQeBfteMIgzqIKtcnnXbICaGWuSSTqzZrSiATazmGbDQaUcTSAHMhyONIpxNEnHSzsMNMMhyCSWZHpJXauYVOzQgXfzLYizNNOJVQbkmYKYuGrewLFCZwnndVsYDaIghonduGBZsiGMMJscwZFKrrwbxuwwXVzZdpLisDBvUvvSnDOALbdCgkQfdrvDADtjlECIfGZovCOSylSKNsSMwJrXLgsyrZkveMhgTqszpaxAtvyUcFrraJSeWDCeyRUPRrrOnKdSWurPbKWJjOAanzGdfhccIwPXOKgvpzLQkiPdEELaUdfLjqLFZtagwOqmDweaBOoayVgkoldXFNYRKfDLxSOsMsirMlRcwVpjXfEfESbetyBBxCQaKJHdyLkHPhDJlDFTmJjCkHudITlauztrHMENxKGxFIxxO');
        getAllKeys_5 = objectStore_3948.getAllKeys(KeyRange_41);
    }

    var get_12;
    try{
        KeyRange_42 = IDBKeyRange.bound('WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz', 'upvawFxwycDBVgvTeSJQHyGXNBGbyZEEBRvlPhOeZBCmyVECLmYHdqYJoBhmjHkOMidSwcjbwTAOuRKWKycLRfiJcNEqmFULdSZildZxBcxsMYtXiBwYkupeshVVnbMjhRCIDaBVjLPNeIYjBOttyRQdOipZJrORLSJXCEyPzrzkWBhuRgznsawqeDCylQFLWfuNISOWbAlONtzZgMlJYHKQNqLWGAyfIeFRuh', false, false);
        get_12 = objectStore_3948.get(KeyRange_42);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_44 = IDBKeyRange.bound('WTPTnRKUdZkwsFiwlellrJGyOCxuyqVgWLwQKzrStIYOBKyaHAbzKSSedscZdVxzqWRElSGFBjzbzpjsMBFbbfjqrnoQClQvUaVhGJuUPctgewRpliloAZEdZdtGqKVzvRZOBhdafKIvctskcQubXsKeOuhhNqPNFmWvOmehktlTQvgyaxcabJwEbMLdbgXvmXsbcjJRirmQFWaGYNMPpAMHjitesAQSaDoDoHtaTyRBKEXFslfLqPTJWLRCnCygjKYkwfFTJuwhbPnJPMZPYSGIIamjTTheWCqkdRKqwmmZrICDWILkAaJAhPDVeeNmVFUoGTjxlMCwnzkCBiAUpExNAklTHakPesTyVifAhXQyuaeJFlFyLRpPfZOXnsaqoJexYkMlUQocWyBeslcZwinrwatixDwDaEKEUMmYODyMPCPNsGelGmvtYNjqeMWZLtJQItcDfGumkjrmgaDQkXNDmYcZiihihajjDurfOMZOJYOXrcbNHJPwrNTTlaCKqzqzTksUzWsvPCLOMiczxFllEJGZeYwfIgwUMfIqKWUSmsHbGMLMHBbZKfvqQdmbacmoAMWhEsfkYQdzAtXrqcBAJxFKlyPFJAhHoWvMaawtRRkaprCoxDCibGoCQeUqrePIGWFuLoXBMGiMkCGrqTyezOXSczfUVWhHCQUyWWGortGquqZAxJCJWoluJlIePgsRqRuknLOemaBbrOmYiZAyOEjSXZqLihGAHoCLfJzAhRurKBRDNwtfuKUdJhYzMbkYFYVfkNsPHpebwabDWMBaUTGxvicoFQXEWBIEuNdbkTryOOkKzKqdcGRAwcxwVbmRlyWDERiDwShpYhxrjcdOUwwqjxfLgwZNKqfMKNVtkKOscEKHggIVNjADzMKlSpIhOztskBCZlLdCdYFIVGTcvFrcTNpkLuLPMCupuJIfIDKrDvqHcomDNJJBzNtSMwbOFFqfkJbnRmjuWnEfvSRGirnkvUGFxedz', 'RxMskmMAVluyFYLHWYblKCzXkGzTIncjLwuhFRFijiiRBERfXWchbkvJbVMADklldRltWIEmAaFOrhFkGVriAcILakIVBDATNxGsLUMvebjJFkuhTFJEopmxKkwIJDrndChbRYcTbMCyGhQBEFluUfkTXFQdBtYiqGikTfdoEKemfdeCuzPzcedtBEvUdFlILOEebQORFEJpkcOiOuvtRWQHTvxJieOtXHJmVLrguOxvimlYcmWUDxNjpSWQYdfraujYJtSkxPfIWonjFgRXLEGYWUOgMgIjofafopRAeUkJLZmgxwtbpXlvHqhyhcwkCyzMeRaReQiNuufrIQGJHEJaDanFQPyGElOiRvcBBQnihEoGOrWDsOuyGLHNIxcYbNbrECtazNZDqTvpQCvriWsAMeSsWEnfMjWpqiaGFcLWxVFFKwOMqzwdGKFjZRMyiDmDLMuUVAeXtGIPpINove', true, true);
        get_13 = objectStore_3948.get(KeyRange_44);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_46 = IDBKeyRange.only('eEAILIogZGjGiicuSiRdiHisZSlvbQULdilVrYfnIIvOKmCNIVnrOUGvPbcWyAopJKbCyEeQsoOCjXUaWqgNkUbzMVNgbONCDdMmazjJDnJvlfKvmkIfuGVJAhzkCwjTasQYgnYEle');
        get_14 = objectStore_3948.get(KeyRange_46);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_3948.getAllKeys(1680356715);
    var get_15;
    try{
        KeyRange_48 = IDBKeyRange.bound('yLXvRfjWcwrQNSCerVJEXTSlURxVErhzbQtIlYhtyZAGdNZQErdicYwxMFrbEPduSMNwQjKHmQSwVqzrUCRmlddwaEFmPNqnwcHzHMueNkCQEyjJxVeIxbkSWVTWJBmVfWYDEVcFFerKYdDjYEQrWfCZUoLHIVZyQHlsbfcjvnmsZZWOnzjWgkeoyCtDTWophPyCCLEqVcdxzOHldVmNVLCCoqRnhqZVeNjYHugYklWYOnncOUyXHdHISTzPGheQGqegkeLBuLghdwWYlOCNQgzQHWsBynnzkjmzOgVbYadqAjSgLprIYwnABzvpoOlgWDfBrjUQgaXgvGCNvFvPDuZELfxsGqByXnOEZNKcKSJkpIquBUuvusOCgmmhbRJKDqCshnQeBfteMIgzqIKtcnnXbICaGWuSSTqzZrSiATazmGbDQaUcTSAHMhyONIpxNEnHSzsMNMMhyCSWZHpJXauYVOzQgXfzLYizNNOJVQbkmYKYuGrewLFCZwnndVsYDaIghonduGBZsiGMMJscwZFKrrwbxuwwXVzZdpLisDBvUvvSnDOALbdCgkQfdrvDADtjlECIfGZovCOSylSKNsSMwJrXLgsyrZkveMhgTqszpaxAtvyUcFrraJSeWDCeyRUPRrrOnKdSWurPbKWJjOAanzGdfhccIwPXOKgvpzLQkiPdEELaUdfLjqLFZtagwOqmDweaBOoayVgkoldXFNYRKfDLxSOsMsirMlRcwVpjXfEfESbetyBBxCQaKJHdyLkHPhDJlDFTmJjCkHudITlauztrHMENxKGxFIxxO', 'yLXvRfjWcwrQNSCerVJEXTSlURxVErhzbQtIlYhtyZAGdNZQErdicYwxMFrbEPduSMNwQjKHmQSwVqzrUCRmlddwaEFmPNqnwcHzHMueNkCQEyjJxVeIxbkSWVTWJBmVfWYDEVcFFerKYdDjYEQrWfCZUoLHIVZyQHlsbfcjvnmsZZWOnzjWgkeoyCtDTWophPyCCLEqVcdxzOHldVmNVLCCoqRnhqZVeNjYHugYklWYOnncOUyXHdHISTzPGheQGqegkeLBuLghdwWYlOCNQgzQHWsBynnzkjmzOgVbYadqAjSgLprIYwnABzvpoOlgWDfBrjUQgaXgvGCNvFvPDuZELfxsGqByXnOEZNKcKSJkpIquBUuvusOCgmmhbRJKDqCshnQeBfteMIgzqIKtcnnXbICaGWuSSTqzZrSiATazmGbDQaUcTSAHMhyONIpxNEnHSzsMNMMhyCSWZHpJXauYVOzQgXfzLYizNNOJVQbkmYKYuGrewLFCZwnndVsYDaIghonduGBZsiGMMJscwZFKrrwbxuwwXVzZdpLisDBvUvvSnDOALbdCgkQfdrvDADtjlECIfGZovCOSylSKNsSMwJrXLgsyrZkveMhgTqszpaxAtvyUcFrraJSeWDCeyRUPRrrOnKdSWurPbKWJjOAanzGdfhccIwPXOKgvpzLQkiPdEELaUdfLjqLFZtagwOqmDweaBOoayVgkoldXFNYRKfDLxSOsMsirMlRcwVpjXfEfESbetyBBxCQaKJHdyLkHPhDJlDFTmJjCkHudITlauztrHMENxKGxFIxxO', false, true);
        get_15 = objectStore_3948.get(KeyRange_48);
    }
    catch (e){
    }

    txn_5914.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5914.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5914.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_372')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};