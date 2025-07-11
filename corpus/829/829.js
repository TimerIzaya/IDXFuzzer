let db;
const openRequest = window.indexedDB.open('str_1437', 7067013274409533)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4932', {keypath: 'YynBuSUTYGBWHebpxyBpfMNqtorkIPfyCCFRCGpFPsMCzPgTHuvqSadEdgmKlJaNKrdLGhmOWKHidqchtkcOFmzTMFlkCcheMQrjBiEknmpRlzeBDbGCyxatfRABwmpJPSlglRorXkxKJxQrQCTqVDQRUuVqYCuylLWXSBmsKcbeQegDZxPmxjWjPbBdDbxSLgeWxvPMknPrGERcwwvHspLPTIbBPXDXBQvDXKOVtaJmrJuUTXakDkzceyWappIkVMdoVdAPXhBpPtaTduSTGCKLhmBhjOAfyDUXdboVCSnXTCHRdsiaLHCSBkuCDWtfKpRohTRclQaOGtzvlhIXJQATZtGuidcIKyWRhkrsGeQckBIqqHksFcyIXEJledmWWJkPZaqFsBuKWppnLSWuTkPZnUuOslfwzOXyTcUycslNTWzQTEDDurNSAqXZfMFIosnbjylDGAwsnOIWdTtFXAOUqxZpFWcVNOnQIOBETWJgXEGYATtjIViptYuKKVodWprBdiDIcuNXSbpmKIirhXRgulRDFfLjRvbsocYSYuoIwsSgaSrCfFdnihrYjICkdpWtPvmhukzuZgzTHfuvGMrccZTUoYjWLPOPAUdaCyBPvwVLnmdnQNGRYXlNbYvzrcjbRUalmWSscxWhONqZPwBGrASWyJeGTRYghflcSxINRefHBOEgTJfViWulboaNkGiBIRXXcIhFqSafsAkNvbDiPgJtsMaONxzBx', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_u: '<number>'}, 'nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM');
    var objectStore_1 = db.createObjectStore('objectStore_4933', {keypath: 'esUiRfVxXPxHDbGIpWwoQsAyXISMBbvZuaLdmBEnfQozIflcluYPAsOxyaqpuiLPzxgDbuiTIapnnTumnLXiAOaBumDzHsIXtaBXSatbtGMHxheFVUbNbZgbrnQcqrVghgMHIwGgKTApDCsNaDCnRPUonxCAFYkLQrOKOkNPtokBdTgQSsJROmzVyAEGJcVzXYCIFwYTKkKAiWdJfmQTlXwMYLxCjeMHajyOkuuDybNSpeKmcgpDAjexRtoDRYpUBjAlrJhfWYVMlzswFzVgvUFpHvNrezOGgFpOycDiwWJMNfCGNQnhLmDuEVxhmtEvChszQdnQwTLvYdgqnjZeYCIiuJwKjlJOMoiewwhhiQQoSaHrVhylH'});
    var index_3298 = objectStore_0.createIndex('index_3298', 'test', {unique: true});
    var index_3299 = objectStore_1.createIndex('index_3299', 'test', {unique: true, multiEntry: false});
    var add_1 = objectStore_0.add({f0_i: '<object>', f1_r: '<boolean>', f2_v: '<object>', f3_n: '<object>', f4_i: '<string>', f5_g: '<number>', f6_l: '<boolean>', f7_z: '<string>', f8_n: '<null>', f9_m: '<array>', f10_y: '<object>', f11_r: '<null>', f12_j: '<array>', f13_b: '<boolean>', f14_h: '<number>', f15_z: '<string>', f16_n: '<number>', f17_c: '<null>', f18_j: '<null>', f19_v: '<array>', f20_g: '<array>', f21_v: '<array>', f22_e: '<number>', f23_m: '<null>', f24_c: '<number>', f25_b: '<null>', f26_s: '<array>', f27_m: '<string>', f28_o: '<object>', f29_w: '<boolean>', f30_b: '<object>', f31_x: '<number>', f32_j: '<string>', f33_a: '<number>', f34_p: '<boolean>', f35_u: '<object>', f36_x: '<boolean>', f37_z: '<number>', f38_n: '<object>', f39_g: '<number>', f40_k: '<object>', f41_c: '<null>', f42_k: '<null>', f43_c: '<string>', f44_c: '<array>', f45_n: '<boolean>', f46_h: '<null>', f47_b: '<object>', f48_v: '<string>', f49_l: '<number>', f50_k: '<number>', f51_l: '<null>', f52_s: '<string>', f53_e: '<number>', f54_h: '<null>', f55_z: '<array>', f56_o: '<number>', f57_z: '<string>', f58_m: '<array>', f59_x: '<object>', f60_j: '<string>', f61_h: '<array>', f62_f: '<null>', f63_x: '<boolean>', f64_h: '<string>', f65_z: '<object>', f66_k: '<null>', f67_v: '<string>', f68_o: '<boolean>', f69_o: '<array>', f70_l: '<number>', f71_y: '<string>', f72_d: '<string>', f73_h: '<array>', f74_n: '<boolean>', f75_j: '<object>', f76_k: '<object>', f77_p: '<string>', f78_n: '<array>', f79_y: '<null>', f80_s: '<object>', f81_s: '<object>', f82_f: '<object>', f83_z: '<object>', f84_g: '<null>', f85_p: '<number>', f86_n: '<array>', f87_k: '<boolean>', f88_z: '<null>', f89_f: '<string>', f90_m: '<boolean>', f91_f: '<object>', f92_z: '<number>', f93_s: '<null>', f94_y: '<array>', f95_y: '<number>', f96_u: '<array>', f97_n: '<array>', f98_f: '<number>', f99_f: '<object>', f100_o: '<string>', f101_r: '<array>', f102_d: '<string>', f103_o: '<number>', f104_x: '<string>', f105_k: '<array>', f106_x: '<null>', f107_n: '<string>', f108_i: '<number>', f109_e: '<number>', f110_u: '<number>', f111_r: '<boolean>', f112_c: '<boolean>', f113_g: '<array>', f114_h: '<string>', f115_n: '<array>', f116_l: '<object>', f117_r: '<null>', f118_s: '<string>', f119_d: '<object>', f120_e: '<string>', f121_y: '<boolean>', f122_d: '<string>', f123_x: '<number>', f124_k: '<string>', f125_y: '<number>', f126_o: '<array>', f127_p: '<string>', f128_p: '<object>', f129_r: '<object>', f130_o: '<boolean>', f131_a: '<number>', f132_g: '<object>', f133_p: '<null>', f134_k: '<number>', f135_p: '<array>', f136_f: '<array>', f137_y: '<boolean>', f138_o: '<object>', f139_v: '<boolean>', f140_t: '<number>', f141_k: '<boolean>', f142_r: '<boolean>', f143_e: '<string>', f144_s: '<boolean>', f145_h: '<boolean>', f146_z: '<boolean>', f147_l: '<array>', f148_d: '<string>', f149_b: '<string>', f150_n: '<null>', f151_p: '<boolean>', f152_o: '<object>', f153_k: '<object>', f154_t: '<string>', f155_x: '<number>', f156_r: '<object>', f157_q: '<object>', f158_l: '<number>', f159_t: '<number>', f160_e: '<string>', f161_u: '<object>', f162_f: '<null>', f163_e: '<boolean>', f164_g: '<number>', f165_h: '<number>', f166_d: '<string>', f167_t: '<string>', f168_c: '<array>', f169_h: '<number>', f170_d: '<null>', f171_f: '<object>', f172_v: '<array>', f173_a: '<object>', f174_q: '<boolean>', f175_m: '<string>', f176_p: '<null>', f177_g: '<object>', f178_r: '<string>', f179_s: '<object>', f180_t: '<null>', f181_y: '<string>', f182_q: '<string>', f183_n: '<number>', f184_m: '<array>', f185_u: '<object>', f186_m: '<string>', f187_w: '<string>', f188_v: '<string>', f189_t: '<string>', f190_e: '<boolean>', f191_m: '<object>', f192_a: '<string>', f193_v: '<object>', f194_y: '<string>', f195_u: '<boolean>', f196_r: '<boolean>', f197_x: '<string>', f198_v: '<number>', f199_s: '<string>', f200_a: '<boolean>', f201_w: '<string>', f202_t: '<object>', f203_k: '<string>', f204_o: '<number>', f205_u: '<boolean>', f206_s: '<boolean>', f207_h: '<null>', f208_h: '<null>', f209_j: '<null>', f210_j: '<boolean>', f211_d: '<object>', f212_j: '<null>', f213_o: '<object>', f214_a: '<array>', f215_g: '<null>', f216_y: '<number>', f217_a: '<boolean>', f218_x: '<number>', f219_b: '<array>', f220_u: '<boolean>', f221_f: '<number>', f222_t: '<object>', f223_e: '<string>', f224_g: '<array>', f225_o: '<boolean>', f226_o: '<null>', f227_n: '<boolean>', f228_o: '<object>', f229_d: '<object>', f230_m: '<string>', f231_o: '<boolean>', f232_g: '<number>', f233_w: '<object>', f234_e: '<number>', f235_e: '<string>', f236_b: '<object>', f237_x: '<object>', f238_e: '<array>', f239_r: '<array>', f240_s: '<number>', f241_l: '<boolean>', f242_h: '<number>', f243_s: '<number>', f244_o: '<object>', f245_v: '<boolean>', f246_o: '<object>', f247_n: '<object>', f248_n: '<object>', f249_l: '<array>', f250_c: '<boolean>', f251_x: '<null>', f252_g: '<null>', f253_w: '<string>', f254_y: '<string>', f255_i: '<string>', f256_w: '<object>', f257_q: '<string>', f258_i: '<boolean>', f259_s: '<null>', f260_x: '<string>', f261_o: '<object>', f262_q: '<number>', f263_o: '<array>', f264_z: '<object>', f265_v: '<object>', f266_u: '<object>', f267_y: '<null>', f268_c: '<boolean>', f269_q: '<null>', f270_k: '<boolean>', f271_l: '<null>', f272_p: '<boolean>', f273_j: '<array>', f274_a: '<number>', f275_n: '<null>', f276_u: '<null>', f277_x: '<array>', f278_p: '<string>', f279_j: '<boolean>', f280_y: '<object>', f281_u: '<object>', f282_i: '<array>', f283_s: '<string>', f284_c: '<null>', f285_k: '<number>', f286_i: '<string>', f287_n: '<null>', f288_e: '<object>', f289_v: '<string>', f290_n: '<array>', f291_z: '<array>', f292_h: '<boolean>', f293_m: '<number>', f294_a: '<string>', f295_l: '<string>', f296_e: '<array>', f297_p: '<object>', f298_y: '<object>', f299_a: '<null>', f300_c: '<object>', f301_s: '<number>', f302_h: '<number>', f303_w: '<object>', f304_b: '<array>', f305_h: '<array>', f306_x: '<object>', f307_u: '<boolean>', f308_f: '<boolean>', f309_i: '<number>', f310_h: '<boolean>', f311_t: '<boolean>', f312_d: '<object>', f313_e: '<array>', f314_n: '<number>', f315_j: '<null>', f316_m: '<array>', f317_y: '<boolean>', f318_j: '<boolean>', f319_k: '<number>', f320_x: '<string>', f321_j: '<string>', f322_k: '<string>', f323_p: '<object>', f324_p: '<null>', f325_n: '<object>', f326_y: '<null>', f327_h: '<object>', f328_k: '<array>', f329_b: '<array>', f330_p: '<object>', f331_t: '<boolean>', f332_o: '<string>', f333_o: '<string>', f334_h: '<null>', f335_l: '<boolean>', f336_v: '<null>', f337_s: '<object>', f338_y: '<string>', f339_r: '<array>', f340_o: '<null>', f341_f: '<string>', f342_j: '<boolean>', f343_o: '<object>', f344_l: '<array>', f345_b: '<number>', f346_x: '<null>', f347_g: '<array>', f348_j: '<string>', f349_u: '<array>', f350_l: '<string>', f351_s: '<number>', f352_b: '<boolean>', f353_e: '<object>', f354_f: '<object>', f355_n: '<null>', f356_t: '<boolean>', f357_a: '<number>', f358_i: '<boolean>', f359_r: '<array>', f360_c: '<null>', f361_r: '<number>', f362_u: '<object>', f363_j: '<null>', f364_w: '<boolean>', f365_y: '<null>', f366_c: '<boolean>', f367_w: '<object>', f368_o: '<number>', f369_b: '<null>', f370_o: '<string>', f371_k: '<boolean>', f372_u: '<array>', f373_k: '<array>', f374_p: '<null>', f375_c: '<number>', f376_b: '<number>', f377_b: '<object>', f378_u: '<string>', f379_r: '<null>', f380_b: '<object>', f381_y: '<string>', f382_w: '<string>', f383_v: '<array>', f384_c: '<null>', f385_j: '<number>', f386_j: '<object>', f387_w: '<object>', f388_i: '<object>', f389_e: '<null>', f390_u: '<object>', f391_c: '<boolean>', f392_c: '<null>', f393_n: '<object>', f394_t: '<string>', f395_p: '<string>', f396_p: '<array>', f397_v: '<array>', f398_t: '<object>', f399_a: '<boolean>', f400_d: '<object>', f401_u: '<boolean>', f402_n: '<string>', f403_t: '<array>', f404_i: '<array>', f405_t: '<number>', f406_r: '<string>', f407_r: '<object>', f408_j: '<string>', f409_t: '<string>', f410_j: '<boolean>', f411_m: '<array>', f412_c: '<number>', f413_w: '<number>', f414_a: '<object>', f415_e: '<string>', f416_u: '<boolean>', f417_r: '<string>', f418_q: '<boolean>', f419_u: '<boolean>', f420_n: '<null>', f421_b: '<string>', f422_l: '<array>', f423_w: '<boolean>', f424_g: '<null>', f425_j: '<object>', f426_f: '<null>', f427_l: '<number>', f428_t: '<number>', f429_a: '<null>', f430_y: '<boolean>', f431_u: '<number>', f432_h: '<boolean>', f433_i: '<boolean>', f434_h: '<boolean>', f435_a: '<null>', f436_i: '<array>', f437_h: '<number>', f438_a: '<number>', f439_j: '<null>', f440_g: '<boolean>', f441_h: '<boolean>', f442_s: '<object>', f443_c: '<object>'}, 'tclbdwvOdZMQrprUtLQSBlxUhMhgxniizHVHgnSKjqosPcPTDwFpWEYChzpCKeUqpzodZshSDLWPUosirkEgqEteFFrThzavXdQSnUDHseqSwRNYTnxiecRDkKyUNQTvhmHvfvarifWRObXVitVKQBFwFoJuCMcroaopChSLUSyosWVEXXYZAFewyNuKrPsbnrtVuyYANonrexbIxJdtvOcXJHeuDAECikywQXywSOTYrnLNIPthaiVcXxdmHXheTPNuqYZqUxoYmtvDhXwZiNNhbANaklfpSXiTNiDeeqTisSXjVBehkUSkGKAjQGQHoSjqxFWcCADqujhroIpCBlQrudIPAvjgcgMArXUDTAtWDINWMMkhFIRtVcVuLtYHrzhnsvBQFtMFUdWRQsjeabqwjYhDGLRRbSRydAHyrvtxihnloTpMeqiPqDDyTtsZmwuGzAjFSuxLHFXhJuuCGUFJingstRxkEVxVHM');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM', 'nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM', false, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('tclbdwvOdZMQrprUtLQSBlxUhMhgxniizHVHgnSKjqosPcPTDwFpWEYChzpCKeUqpzodZshSDLWPUosirkEgqEteFFrThzavXdQSnUDHseqSwRNYTnxiecRDkKyUNQTvhmHvfvarifWRObXVitVKQBFwFoJuCMcroaopChSLUSyosWVEXXYZAFewyNuKrPsbnrtVuyYANonrexbIxJdtvOcXJHeuDAECikywQXywSOTYrnLNIPthaiVcXxdmHXheTPNuqYZqUxoYmtvDhXwZiNNhbANaklfpSXiTNiDeeqTisSXjVBehkUSkGKAjQGQHoSjqxFWcCADqujhroIpCBlQrudIPAvjgcgMArXUDTAtWDINWMMkhFIRtVcVuLtYHrzhnsvBQFtMFUdWRQsjeabqwjYhDGLRRbSRydAHyrvtxihnloTpMeqiPqDDyTtsZmwuGzAjFSuxLHFXhJuuCGUFJingstRxkEVxVHM', true);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var index_3300 = objectStore_1.createIndex('index_3300', 'test', {unique: false, multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_4934', {keypath: 'wxFyfYxLHgilhEIReSvYSHjqnmNVcVUCPasxjePcnTlPgkWBGzQLxRfnFSbUGFmHoqCjkLLaavstyyOOEKYjxYKohgkrDHNYdRzBnadRwdEhINbCvgMZpdGrYRszVfHdrUOIeaWZwYWVuiKKaqaNOomXTgoIIjCKWAyNqjUivJczjwSPNwsKfSDeRmfqzcOeowGhoQXrjxluNZmpJsQqguXmPhOUlMYnkAJCCOMEfCyWzKQIylUYYGbLcYCkkqJHFRQmzcvHqJJXlXeomubpmYaZfopHdEXXkiNRJjmmFKCDATCmhGTEQKPbdXsgBNirVzZxfOZTkEajSAzzpxjIgqRwVgWOeiIjOcFlmJfWoHAxNQQSvjENxLLTxharfdOcBqZEFalcYiFCHjFVdFomXbcuLSxLymfjrxljTjcRpgXYvCsGRGhbNidXNEhzEJkykPYAbaJCskBKFQCTddjieEHdiwNMZMmfVIYtOMrfvlAgMuPxxbRxvyaiyoKSBkieUTYUaWEHRGxivToNabQgYOJBJdwSToogzTsTkgdiqFDhpMUITeqPthBXaQCFIzcrUEAYvRPWdquvwDEwbsGBwykVwFqpkymwbyWPmJUQAdwlLpfQYzlbszoTaMRKQtLNCFmNNkcyHyVHSEFAAURnggLygNfDmEpLrgYBFVjNecWywyRAwNKgbQvZidwHOfexwmcpqggLmTaQBObXQluUrHliONkiODVCmNcikSzLGOsLllFJPAJSNVgbmPTUm', autoIncrement: false});
    var clear_0 = objectStore_1.clear();
    var clear_1 = objectStore_2.clear();
    var index_0 = objectStore_0.index('index_3298');
    var put_0 = objectStore_0.put({f0_x: '<array>', f1_p: '<null>'}, 'OezQmnqPJbQitRPpVdmvLuZHZSCdzYsqKqxfavjEaeirhLiyvYcjntHKKwborEafsSxOGgrcHdMbNcwmwDLqxhBlaMLSXEaNTKASIPOCmeiXwLTbSlovTjKwChykhkTocXicPCmVjTFmMxmzBcNgndbFeRAjqPJmtAvfoVxaFoVSSOjuTZbYeOcDjKoUVLsTfzTAvZhdTvnumXjJQNCtSszToZqpGGLFiIHDXHRpffERUinZWSXdZxHFmObIecgryluUqtZWiPvtMfRjScvBTjTCPrsvswjygjJJCUqwuqZhoUWkBqxRizoWfNfwZmfOwBtqYNQmjSxcUsfUuexIspeCsPHoveJJiBHtrDNgwPreBANQOiDImJYVdDIWCLXnXIJhxBXChEZYLFtyAhTtBQiSxTaFEvEIpjAFEVlWNOwAzIaFSEHBJVpqJpWarTbeWoHjgYkixcwgNsoaDPhaDugkMaktWMUtRdnnNJAgQzIVjifYwEwEcngGFRwCMWCceMrwUDYuXYJCKAUAAEcydMbzKIAQBKCDKpVialLjaTEuksEpbRwziJtagWYNiazJtHXVfOYmuHlJBvgOGJqJSRkjjOVViuwkYaCUTZDiKOXtMmMitaYTImJSwyqBglvoRWwmIYDOCiGLewFicpAJhoUeI');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7435 = db.transaction(['objectStore_4898'], 'readonly', {durability:"strict"})
    var objectStore_4898 = txn_7435.objectStore('objectStore_4898');
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('KMlpTaGRNiIwSrzOzHRMoHhHAHQPEIYONLFfHsRaubuafZOdlkUUZybajJYxHYYPRGoYzuvbnVuHdhhjTdsACiYORgKUjjeZHZeyClcMPBBrcavaTElVHIMUNZcuDmVCxcJOuJmDyTdzbOfbiapwpymUABhVSZfWUSZaqIwJSfdZAgEHyNzcxjNobaaKdRUnVHnQmHtbVmQinfyObpzbxNkhcQmMFtniBwqtDDMCKwSIwrLGGfhTAffQrWyswvWXyqzmVQADwZTCTJovVxdnNNNoRvgzcQSWHohBLMEKiXAeQAFdrVLVRAMJXfhgcuVbHqNyLKvNzoNFwVtuORQTUDQlLyEZiFvvXeovCzqqQFIytSNxjqyOBtzALEUREsgQzzgJwYAJUOsTQWSdbSAmuNJUDxDDrmObucATPrzBfBUUaLUCfNpxVrbUlMCBmCGYhqjjMtPPnCeySYhEqtMAWulyjBEuSFmc', true);
        count_1 = objectStore_4898.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0 = objectStore_4898.getAll();
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('KMlpTaGRNiIwSrzOzHRMoHhHAHQPEIYONLFfHsRaubuafZOdlkUUZybajJYxHYYPRGoYzuvbnVuHdhhjTdsACiYORgKUjjeZHZeyClcMPBBrcavaTElVHIMUNZcuDmVCxcJOuJmDyTdzbOfbiapwpymUABhVSZfWUSZaqIwJSfdZAgEHyNzcxjNobaaKdRUnVHnQmHtbVmQinfyObpzbxNkhcQmMFtniBwqtDDMCKwSIwrLGGfhTAffQrWyswvWXyqzmVQADwZTCTJovVxdnNNNoRvgzcQSWHohBLMEKiXAeQAFdrVLVRAMJXfhgcuVbHqNyLKvNzoNFwVtuORQTUDQlLyEZiFvvXeovCzqqQFIytSNxjqyOBtzALEUREsgQzzgJwYAJUOsTQWSdbSAmuNJUDxDDrmObucATPrzBfBUUaLUCfNpxVrbUlMCBmCGYhqjjMtPPnCeySYhEqtMAWulyjBEuSFmc', true);
        get_1 = objectStore_4898.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('KMlpTaGRNiIwSrzOzHRMoHhHAHQPEIYONLFfHsRaubuafZOdlkUUZybajJYxHYYPRGoYzuvbnVuHdhhjTdsACiYORgKUjjeZHZeyClcMPBBrcavaTElVHIMUNZcuDmVCxcJOuJmDyTdzbOfbiapwpymUABhVSZfWUSZaqIwJSfdZAgEHyNzcxjNobaaKdRUnVHnQmHtbVmQinfyObpzbxNkhcQmMFtniBwqtDDMCKwSIwrLGGfhTAffQrWyswvWXyqzmVQADwZTCTJovVxdnNNNoRvgzcQSWHohBLMEKiXAeQAFdrVLVRAMJXfhgcuVbHqNyLKvNzoNFwVtuORQTUDQlLyEZiFvvXeovCzqqQFIytSNxjqyOBtzALEUREsgQzzgJwYAJUOsTQWSdbSAmuNJUDxDDrmObucATPrzBfBUUaLUCfNpxVrbUlMCBmCGYhqjjMtPPnCeySYhEqtMAWulyjBEuSFmc', 'KMlpTaGRNiIwSrzOzHRMoHhHAHQPEIYONLFfHsRaubuafZOdlkUUZybajJYxHYYPRGoYzuvbnVuHdhhjTdsACiYORgKUjjeZHZeyClcMPBBrcavaTElVHIMUNZcuDmVCxcJOuJmDyTdzbOfbiapwpymUABhVSZfWUSZaqIwJSfdZAgEHyNzcxjNobaaKdRUnVHnQmHtbVmQinfyObpzbxNkhcQmMFtniBwqtDDMCKwSIwrLGGfhTAffQrWyswvWXyqzmVQADwZTCTJovVxdnNNNoRvgzcQSWHohBLMEKiXAeQAFdrVLVRAMJXfhgcuVbHqNyLKvNzoNFwVtuORQTUDQlLyEZiFvvXeovCzqqQFIytSNxjqyOBtzALEUREsgQzzgJwYAJUOsTQWSdbSAmuNJUDxDDrmObucATPrzBfBUUaLUCfNpxVrbUlMCBmCGYhqjjMtPPnCeySYhEqtMAWulyjBEuSFmc', true, true);
        count_2 = objectStore_4898.count(KeyRange_8);
    }
    catch (e){
    }

    var count_3 = objectStore_4898.count();
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('KMlpTaGRNiIwSrzOzHRMoHhHAHQPEIYONLFfHsRaubuafZOdlkUUZybajJYxHYYPRGoYzuvbnVuHdhhjTdsACiYORgKUjjeZHZeyClcMPBBrcavaTElVHIMUNZcuDmVCxcJOuJmDyTdzbOfbiapwpymUABhVSZfWUSZaqIwJSfdZAgEHyNzcxjNobaaKdRUnVHnQmHtbVmQinfyObpzbxNkhcQmMFtniBwqtDDMCKwSIwrLGGfhTAffQrWyswvWXyqzmVQADwZTCTJovVxdnNNNoRvgzcQSWHohBLMEKiXAeQAFdrVLVRAMJXfhgcuVbHqNyLKvNzoNFwVtuORQTUDQlLyEZiFvvXeovCzqqQFIytSNxjqyOBtzALEUREsgQzzgJwYAJUOsTQWSdbSAmuNJUDxDDrmObucATPrzBfBUUaLUCfNpxVrbUlMCBmCGYhqjjMtPPnCeySYhEqtMAWulyjBEuSFmc', false);
        get_2 = objectStore_4898.get(KeyRange_10);
    }
    catch (e){
    }

    txn_7435.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7435.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7435.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7436 = db.transaction(['objectStore_4934', 'objectStore_4899'], 'readonly', {durability:"strict"})
    var objectStore_4934 = txn_7436.objectStore('objectStore_4934');
    txn_7436.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7436.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7436.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7437 = db.transaction(['objectStore_4932'], 'readonly', {durability:"strict"})
    var objectStore_4932 = txn_7437.objectStore('objectStore_4932');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM', 'OezQmnqPJbQitRPpVdmvLuZHZSCdzYsqKqxfavjEaeirhLiyvYcjntHKKwborEafsSxOGgrcHdMbNcwmwDLqxhBlaMLSXEaNTKASIPOCmeiXwLTbSlovTjKwChykhkTocXicPCmVjTFmMxmzBcNgndbFeRAjqPJmtAvfoVxaFoVSSOjuTZbYeOcDjKoUVLsTfzTAvZhdTvnumXjJQNCtSszToZqpGGLFiIHDXHRpffERUinZWSXdZxHFmObIecgryluUqtZWiPvtMfRjScvBTjTCPrsvswjygjJJCUqwuqZhoUWkBqxRizoWfNfwZmfOwBtqYNQmjSxcUsfUuexIspeCsPHoveJJiBHtrDNgwPreBANQOiDImJYVdDIWCLXnXIJhxBXChEZYLFtyAhTtBQiSxTaFEvEIpjAFEVlWNOwAzIaFSEHBJVpqJpWarTbeWoHjgYkixcwgNsoaDPhaDugkMaktWMUtRdnnNJAgQzIVjifYwEwEcngGFRwCMWCceMrwUDYuXYJCKAUAAEcydMbzKIAQBKCDKpVialLjaTEuksEpbRwziJtagWYNiazJtHXVfOYmuHlJBvgOGJqJSRkjjOVViuwkYaCUTZDiKOXtMmMitaYTImJSwyqBglvoRWwmIYDOCiGLewFicpAJhoUeI', true, true);
        get_3 = objectStore_4932.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM', false);
        getAllKeys_0 = objectStore_4932.getAllKeys(KeyRange_14, 514075835);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM');
        getAllKeys_0 = objectStore_4932.getAllKeys(KeyRange_15);
    }

    var getAllKeys_1;
    try{
        KeyRange_16 = IDBKeyRange.only('OezQmnqPJbQitRPpVdmvLuZHZSCdzYsqKqxfavjEaeirhLiyvYcjntHKKwborEafsSxOGgrcHdMbNcwmwDLqxhBlaMLSXEaNTKASIPOCmeiXwLTbSlovTjKwChykhkTocXicPCmVjTFmMxmzBcNgndbFeRAjqPJmtAvfoVxaFoVSSOjuTZbYeOcDjKoUVLsTfzTAvZhdTvnumXjJQNCtSszToZqpGGLFiIHDXHRpffERUinZWSXdZxHFmObIecgryluUqtZWiPvtMfRjScvBTjTCPrsvswjygjJJCUqwuqZhoUWkBqxRizoWfNfwZmfOwBtqYNQmjSxcUsfUuexIspeCsPHoveJJiBHtrDNgwPreBANQOiDImJYVdDIWCLXnXIJhxBXChEZYLFtyAhTtBQiSxTaFEvEIpjAFEVlWNOwAzIaFSEHBJVpqJpWarTbeWoHjgYkixcwgNsoaDPhaDugkMaktWMUtRdnnNJAgQzIVjifYwEwEcngGFRwCMWCceMrwUDYuXYJCKAUAAEcydMbzKIAQBKCDKpVialLjaTEuksEpbRwziJtagWYNiazJtHXVfOYmuHlJBvgOGJqJSRkjjOVViuwkYaCUTZDiKOXtMmMitaYTImJSwyqBglvoRWwmIYDOCiGLewFicpAJhoUeI');
        getAllKeys_1 = objectStore_4932.getAllKeys(KeyRange_16, 779163503);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('nAFASxznGBwelgRTPAcvBeInkofnTgmOxgltsYJeokZmzCvOshcTRLteOxONylaXFdnykbyiJgkmhiuFjdHiAjwyGVYAZEETBHeaPZyyYgLHygUOVtuWiTDODzkzDKuHcuxQWPpgjoQhYRBYcnvaHiUvkOPTvvkzPmtNHTBycphJcVoaaatSMYxpPMqMaOFsEMNPmghnTPzMKvJvtNXnDMkTPiphoceqXKShMvCiFVybUIZvMhZsFHaZvfnpIimHOiZtVdnepkpvahnuGGDEtaASEztcgDVDKwbuWseMNiOKJCklsBfPRGYOBzSpbkwqcELqazYcWBJJktYxRzwjxRyhpXLdloXMhopIoVGOOyQYzCVhiKTwYrmaikzHRZTrTfNnBKuRFZorsppHRyROkslQEzkrLycBBvUoHGAnnXTOZKuYXDKPnWFrrPJvMCEpqguHbffnpzDqnLyVzyCOnWfVNHgPZRrjnaenykHqdkIAPieGXHXukhvPdYlyLgolXRcRZVkvNYfENwVAaDkmMWBBlrHfM');
        getAllKeys_1 = objectStore_4932.getAllKeys(KeyRange_17);
    }

    var count_4;
    try{
        KeyRange_18 = IDBKeyRange.only('tclbdwvOdZMQrprUtLQSBlxUhMhgxniizHVHgnSKjqosPcPTDwFpWEYChzpCKeUqpzodZshSDLWPUosirkEgqEteFFrThzavXdQSnUDHseqSwRNYTnxiecRDkKyUNQTvhmHvfvarifWRObXVitVKQBFwFoJuCMcroaopChSLUSyosWVEXXYZAFewyNuKrPsbnrtVuyYANonrexbIxJdtvOcXJHeuDAECikywQXywSOTYrnLNIPthaiVcXxdmHXheTPNuqYZqUxoYmtvDhXwZiNNhbANaklfpSXiTNiDeeqTisSXjVBehkUSkGKAjQGQHoSjqxFWcCADqujhroIpCBlQrudIPAvjgcgMArXUDTAtWDINWMMkhFIRtVcVuLtYHrzhnsvBQFtMFUdWRQsjeabqwjYhDGLRRbSRydAHyrvtxihnloTpMeqiPqDDyTtsZmwuGzAjFSuxLHFXhJuuCGUFJingstRxkEVxVHM');
        count_4 = objectStore_4932.count(KeyRange_18);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_20 = IDBKeyRange.only('OezQmnqPJbQitRPpVdmvLuZHZSCdzYsqKqxfavjEaeirhLiyvYcjntHKKwborEafsSxOGgrcHdMbNcwmwDLqxhBlaMLSXEaNTKASIPOCmeiXwLTbSlovTjKwChykhkTocXicPCmVjTFmMxmzBcNgndbFeRAjqPJmtAvfoVxaFoVSSOjuTZbYeOcDjKoUVLsTfzTAvZhdTvnumXjJQNCtSszToZqpGGLFiIHDXHRpffERUinZWSXdZxHFmObIecgryluUqtZWiPvtMfRjScvBTjTCPrsvswjygjJJCUqwuqZhoUWkBqxRizoWfNfwZmfOwBtqYNQmjSxcUsfUuexIspeCsPHoveJJiBHtrDNgwPreBANQOiDImJYVdDIWCLXnXIJhxBXChEZYLFtyAhTtBQiSxTaFEvEIpjAFEVlWNOwAzIaFSEHBJVpqJpWarTbeWoHjgYkixcwgNsoaDPhaDugkMaktWMUtRdnnNJAgQzIVjifYwEwEcngGFRwCMWCceMrwUDYuXYJCKAUAAEcydMbzKIAQBKCDKpVialLjaTEuksEpbRwziJtagWYNiazJtHXVfOYmuHlJBvgOGJqJSRkjjOVViuwkYaCUTZDiKOXtMmMitaYTImJSwyqBglvoRWwmIYDOCiGLewFicpAJhoUeI');
        count_5 = objectStore_4932.count(KeyRange_20);
    }
    catch (e){
    }

    var count_6 = objectStore_4932.count();
    txn_7437.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7437.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7437.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7438 = db.transaction(['objectStore_4933'], 'readwrite', {durability:"strict"})
    var objectStore_4933 = txn_7438.objectStore('objectStore_4933');
    var clear_2 = objectStore_4933.clear();
    var clear_3 = objectStore_4933.clear();
    var put_1 = objectStore_4933.put({f0_w: '<null>', f1_x: '<boolean>', f2_e: '<number>', f3_p: '<string>', f4_m: '<boolean>', f5_z: '<boolean>', f6_n: '<array>', f7_q: '<null>', f8_u: '<array>', f9_d: '<array>'}, 'HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc');
    var count_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc', 'HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc', true, true);
        count_7 = objectStore_4933.count(KeyRange_22);
    }
    catch (e){
    }

    var clear_4 = objectStore_4933.clear();
    var count_8;
    try{
        KeyRange_24 = IDBKeyRange.only('HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc');
        count_8 = objectStore_4933.count(KeyRange_24);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_26 = IDBKeyRange.bound('HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc', 'HgVHWzfZGWVEDNrPDGNJVXIOxoCoyJyVGxuQvKpYHrdqqCwcHjNJEIZGiQmluHYyAoAQpGBsMreJUoIxkBKqXRwVWAoXVVbfpZfXJobacaanEcrJOgplxUnlSdlmc', false, false);
        count_9 = objectStore_4933.count(KeyRange_26);
    }
    catch (e){
    }

    var add_2 = objectStore_4933.add({f0_m: '<array>', f1_v: '<string>', f2_c: '<boolean>', f3_v: '<array>', f4_x: '<string>', f5_h: '<object>', f6_k: '<boolean>', f7_i: '<string>', f8_q: '<null>', f9_r: '<object>', f10_y: '<array>', f11_u: '<array>', f12_m: '<number>', f13_g: '<string>', f14_a: '<number>', f15_p: '<boolean>', f16_d: '<object>', f17_r: '<null>', f18_o: '<boolean>', f19_l: '<boolean>', f20_t: '<boolean>', f21_n: '<array>', f22_a: '<boolean>', f23_s: '<string>', f24_z: '<number>', f25_d: '<object>', f26_l: '<string>', f27_h: '<number>'}, 'btptlBIsYCEiRPicpoiqecDEFcPDtlyObqfsSogXgWCUEexMWjBcbpkpaVJfHgNClqqpjDFHHRconQldpLfiLxmgcyQPClbbgquleqhzIbjqawrtHcDJEulXfkgXlhTsQUKTSBsrTSTrweptTUOnSMNdBKBnvfnyhBfbfbwjvglZgtmOZMliNlFZkAAjJwFRQKcrcxZqnKAkBegEavTEUzejWUCMFXqCVrFKFHfzkWhzHcVgrnqoYiDhgSSakzdHoDAnIZxkBMyeqerCRsJhwBSEMTpFHtkfvonaQpISvLOKznyZPpsWvOttkybaKAYNwBrwwwYzNnYfPOKuHkJivttNInJxWtThMOenHuPZlJVygHGuOcLGdcxXScZhyNfIEbmNToIWAmEYsXmLRvnquCQmaNxLMtSlUECqaCbAVlUbjeSWRIlkaomOPEtRlpMFnxFUJtmHHDdEQEuqXHGufNZsnkpdmwMJcAKGidoboTqEBNVElMOfImoktXWdXKrULZtVkPkBIdfVJbKnNxjrKxphVKtAMmMuJskGhJpMXxhLXZnEoxxcKBYEWXBZrWljrYESBzFXoytcQhuGGvfgNsKSERKuLePGjvYaFUWpqBJKlyoQfbCudAMAjHdBSeSsReIYlRJzjsFJuMcCPAdmJADLhXpuNFYgBEveeOKLzpxFuKGFbvAxJWoZJziyECptHSlvXdNwYietMCLvXzLiOInuTDBqMbQfbbIXeFaiVOpIWJoiSjVhLLTnhMYxwBDchvZioTWApFQTpJxfHlTooPEGSpDFWzGqLLyRRXEBYpkQscGcvBpwyHFmuMfqQkymklZnqPxcnwVrzWFQFKUtPkPwTIPkSQNhCHsmicViSvgfeUzxSJXwslTEpcFBIfgcKxIfkLHsLcwXRQMR');
    var index_1 = objectStore_4933.index('index_3299');
    txn_7438.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7438.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7438.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7439 = db.transaction(['objectStore_4934', 'objectStore_4932', 'objectStore_4899'], 'readonly', {durability:"relaxed"})
    var objectStore_4934 = txn_7439.objectStore('objectStore_4934');
    txn_7439.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7439.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7439.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1128')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};