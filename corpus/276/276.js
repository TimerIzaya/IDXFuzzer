let db;
const openRequest = window.indexedDB.open('str_775', 442916498786456)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1668', {keypath: 'emDVqbaySRwVxqWoHhOhQiDpZvYeVimJNLIaRrZoRqwYRSHrCJXHBwaSfdpEimZsscdlzlPzdqnKOOhLZurmcJFUqlaXmWoRsfENhqVwhlprcUUXQPLBciUShUJUmQjqOGzLUiVDbuKapbrFBKoHStQaZMYvuFjilgPDOjaToKOKUvozAnwBIIaQcVJRifclJympnomOwMmpOxUqjQEhqTPymuJBGzfcLREyIQBRqhjSnpwMDeqacOvHqyBaFfWuUILzzqsCHUlTrvjMVWGCFinaezceBOkUaVLgrkNjSUcPHnpZoYaLRBCQYVyvxvppuyifmEBZDvqTwynvjLFxwSJCKjQhfowhgzIiwKEjlKaagscTcGTMJKEuhVzsglshPqzhDQOIjFIHaUatrfAxzhKHJmEADQlmzhUkiVYPDEuKAljqvtuTUEKZGJiIrvKEUUvXDZPiWNhAquwgWGPprCnXtwIrgjmLdBlzaWDoMMyRqhQLrEngdpZRhVdAyqwBlkgJjDyupflCflqnDFHOTjlxMQCVEZaxwYvcuhlceKrJwuBuIVXhFWBfLelzNLkgUfrBNBmtPAhpPTMwtpWcDnDUcEUSXVZGEatMuWWgFQeXLXygRAfVMapFtdtAyLIL'});
    var index_1093 = objectStore_0.createIndex('index_1093', 'test', {unique: true});
    objectStore_0.deleteIndex('index_1093')
    var objectStore_1 = db.createObjectStore('objectStore_1669', {autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_1670', {keypath: 'HEXWEJoxrGnXmvCSyQvaVkMbVDggYtxjDOpHQYruHfXnDkcTJEpgTnRGGPKJDGoPuZSFFyggfZdAYsiyDurUmDUCGnCtdrPLJJfrHFGXcCXOOVgkFbmFVnFQJrHukpsiALBvlEluJKYmLCIrTxIrHHoCVHuUlRdBoxatwUQTACdhRmcxwcvUUjDLPoIdRrsOGMdpmrasZBXWYndUKqQTJxXfLlSmaPqPlutLioOJtdUEhqqGHHUggQfhnZWopqDtWbNsLoUNYxuUrvVuiQrYfPueNyKaEQzXfyNUjfSERyiGIJcjhnGKJsAVRKeUeRvLUmsxcHmnIJoLOZlfpCyUeYcSFgNTogTRVttyJXtrkSxmVXuHuVpzGWQVBWWMBsAMsakMdbTzeKgigkhVXNWeZwclpblnWKjJmVBGNziJMTAEqzNxzDaawqYnNGPtaQdkJBbcolVrELQvSkHwZJZNWwgVbiuILurVdtDLzWhuzONoFuTPzBFdHPsVWewfhTAEkpjgTKTYMcXZMyaQCysvoCyejGzFDmOUjdkffzGOkjBXBGcUyNQMcyAnrPgRDvRTcIJjQQGsfXZGJwQvafNcxrhTVfXNeXADKZpOqZCeoNLwSKXhxKPElqcpYXbXJIMfitSppwUybfZCVybVeZlIOhnUldkAEXsEvhgaDaLKVyoyBvUIOWjUNmVommfRIHwiiRsGbqhFyVDIAGxUNqMMvOLfwHCVHWVWXmnMlEUeQRcjwHAbIACSnjRNTuFwRZJKGUHQAsDwlpfSwLgGqkGWRgkfdnqDNOFjpUXukPqttkxmShuMApWbeZornCeFyjDounCUfCkASdKHLhlcFOswnTJMaBhHDviklGPyNRehWea'});
    var put_0 = objectStore_1.put({f0_m: '<number>'}, 'jjTZhLjTYpFzixpSWAoWAsqzCVCyBjZaitIUIDimAZfhgysqZTNWEGzMYruAGDjRfxJDSuSneATSmpHJltOboOGsRpvLkGzKVXBcJgiIisJSPhgjxmILLMlpAquZYfXXFYSWyrYnUYRYxgVxmrlYctxeSHqljuWRzbiqzQSzGXJiJqyZcKPzatTPQafYTjMHeeUGlOKedZwHEVnCxGEKsiekOSPsWKpDtsJPPcKiMMRoxeTLULDaaceaOAfgucYKcBTWkUXjedJtztJaXGPEHcAenJzXhCfjCMqHCCmnLxFRadQdqUDkGsBQTxxEIKyGbqTexLQhKLZQzR');
    var objectStore_3 = db.createObjectStore('objectStore_1671', {keypath: 'xEAqdiWJCkYdBJIsWXcDeJcekTjiFtJRHFvXVlBibCLTwpWaCHpGVZJaOSSIOqCtzunuPyNFzEfcnHpfJqdcgAJdRlrEFNakBDKazENKAywzgJgfVjVQvvcjcSTwibKUCFDWhGkdBvIkBDkwXYPwYuGpHJPzXXMrAiFwasTMwMbXWxPkYnorwcsFNswPGkunGMbvYtVuaGOCrPsLglcjuFBxxKtrwdHXFaXpRwnkryazjiqItZmVHertTqyuWAtupAuuIrwrKdmqasVAOnqbQpxdQdfepuBOQCYJDvoowQuYeNsfIZNlPIPVgIJWfUghQAnZoxRHwsggiahP', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_2.clear();
    var objectStore_4 = db.createObjectStore('objectStore_1672', {keypath: 'YmipsWpRhIdXEAcqVQyJqmHlRIlWkNXGsHerpHrLzPHOmBlcmBkbuMcSWBCzQXgUSrlAxsDLPBWqKiukwvAsJNBfDUwNvTrRzLuAZENkYkuMbzOBCnqscEQXqsXUnVdmXnUNRigaNGXShyfRDBuqMQPDgkyhEXIRbqaWraOBUxdKeazUXqymeJTCGaQwtpunOqrcKTwGCLuiiwIuVPlijEugSKyuJzSEDTKiBEWlZZXwJobXMrzOZBzJEBkNvcFuOgFrBsrbzbcHUhacqiJGyNBUFWTrsVPiAWVszJfVbVZEHtVHYTbeRmUMRBdzruktYmeCAmeWwloRaYomfXJkuQXeLfaTWcwzNhUjdRnDKKZbCorZbCvhajg'});
    var put_1 = objectStore_3.put({f0_h: '<boolean>', f1_e: '<number>', f2_c: '<number>', f3_a: '<null>', f4_g: '<boolean>', f5_m: '<boolean>', f6_t: '<null>', f7_b: '<string>', f8_x: '<null>', f9_y: '<object>', f10_h: '<number>', f11_l: '<boolean>', f12_w: '<string>', f13_e: '<null>', f14_g: '<number>', f15_q: '<array>', f16_j: '<object>', f17_m: '<number>', f18_m: '<string>', f19_d: '<null>', f20_y: '<boolean>', f21_d: '<boolean>', f22_m: '<null>', f23_o: '<string>', f24_u: '<boolean>', f25_w: '<object>', f26_d: '<object>', f27_j: '<number>', f28_v: '<string>', f29_i: '<object>', f30_n: '<string>', f31_e: '<array>', f32_z: '<object>', f33_b: '<object>', f34_y: '<array>', f35_r: '<number>', f36_q: '<array>', f37_o: '<boolean>', f38_i: '<array>', f39_s: '<object>', f40_q: '<object>', f41_p: '<array>', f42_j: '<string>', f43_r: '<null>', f44_h: '<boolean>', f45_y: '<boolean>', f46_p: '<null>', f47_l: '<number>', f48_d: '<string>', f49_c: '<boolean>', f50_k: '<string>', f51_h: '<object>', f52_k: '<boolean>', f53_x: '<object>', f54_l: '<boolean>', f55_v: '<string>', f56_r: '<object>', f57_o: '<null>', f58_o: '<object>', f59_u: '<number>', f60_j: '<null>', f61_n: '<object>', f62_x: '<string>', f63_v: '<string>', f64_c: '<array>', f65_p: '<string>', f66_l: '<object>', f67_n: '<boolean>', f68_g: '<null>', f69_p: '<string>', f70_r: '<boolean>', f71_j: '<number>', f72_n: '<array>', f73_h: '<string>', f74_s: '<null>', f75_g: '<number>', f76_w: '<object>', f77_b: '<array>', f78_w: '<array>', f79_c: '<string>', f80_d: '<array>', f81_p: '<string>', f82_u: '<object>', f83_m: '<array>', f84_d: '<object>', f85_g: '<object>', f86_i: '<boolean>', f87_e: '<number>', f88_i: '<array>', f89_p: '<number>', f90_f: '<boolean>', f91_a: '<array>', f92_r: '<number>', f93_r: '<array>', f94_s: '<boolean>', f95_m: '<array>', f96_a: '<string>', f97_y: '<null>', f98_w: '<string>', f99_v: '<number>', f100_y: '<array>', f101_b: '<string>', f102_g: '<boolean>', f103_y: '<array>', f104_o: '<object>', f105_x: '<null>', f106_b: '<number>', f107_b: '<number>', f108_h: '<string>', f109_h: '<object>', f110_h: '<number>', f111_s: '<boolean>', f112_y: '<null>', f113_x: '<boolean>', f114_l: '<object>', f115_r: '<array>', f116_w: '<string>', f117_e: '<object>', f118_f: '<null>', f119_w: '<array>', f120_j: '<boolean>', f121_p: '<array>', f122_d: '<number>', f123_n: '<boolean>', f124_n: '<object>', f125_g: '<array>', f126_a: '<number>', f127_f: '<boolean>', f128_r: '<number>', f129_o: '<null>', f130_m: '<boolean>', f131_h: '<array>', f132_e: '<number>', f133_x: '<object>', f134_p: '<array>', f135_e: '<array>', f136_h: '<boolean>', f137_q: '<number>', f138_k: '<array>', f139_o: '<boolean>', f140_d: '<number>', f141_t: '<boolean>', f142_e: '<object>', f143_m: '<number>', f144_u: '<null>', f145_m: '<number>', f146_q: '<null>', f147_z: '<null>', f148_z: '<object>', f149_a: '<array>', f150_n: '<string>', f151_p: '<string>', f152_r: '<null>', f153_h: '<number>', f154_t: '<number>', f155_k: '<null>', f156_g: '<boolean>', f157_u: '<boolean>', f158_d: '<boolean>', f159_i: '<array>', f160_s: '<null>', f161_y: '<object>', f162_q: '<array>', f163_e: '<object>', f164_g: '<string>', f165_r: '<number>', f166_i: '<array>', f167_t: '<null>', f168_t: '<null>', f169_g: '<string>', f170_l: '<null>', f171_c: '<object>', f172_t: '<boolean>', f173_s: '<boolean>', f174_t: '<boolean>', f175_v: '<object>', f176_v: '<null>', f177_i: '<string>', f178_f: '<number>', f179_c: '<string>', f180_f: '<array>', f181_h: '<null>', f182_v: '<array>', f183_o: '<null>', f184_w: '<array>', f185_u: '<string>', f186_z: '<string>', f187_g: '<string>', f188_a: '<array>', f189_b: '<null>', f190_t: '<null>', f191_v: '<string>', f192_t: '<string>', f193_z: '<object>', f194_a: '<number>', f195_q: '<number>', f196_k: '<string>', f197_l: '<string>', f198_a: '<string>', f199_s: '<array>', f200_b: '<boolean>', f201_h: '<string>', f202_w: '<boolean>', f203_m: '<string>', f204_k: '<object>', f205_i: '<boolean>', f206_m: '<null>', f207_e: '<number>', f208_r: '<boolean>', f209_x: '<object>', f210_i: '<number>', f211_j: '<boolean>', f212_w: '<null>', f213_l: '<null>', f214_k: '<string>', f215_d: '<boolean>', f216_z: '<number>', f217_x: '<boolean>', f218_c: '<object>', f219_q: '<number>', f220_j: '<array>', f221_l: '<object>', f222_p: '<null>', f223_t: '<string>', f224_g: '<number>', f225_i: '<boolean>', f226_z: '<number>', f227_s: '<object>', f228_h: '<null>', f229_x: '<object>', f230_z: '<number>', f231_w: '<string>', f232_y: '<boolean>', f233_c: '<boolean>', f234_h: '<string>', f235_p: '<array>', f236_h: '<number>', f237_a: '<array>', f238_b: '<array>', f239_h: '<object>', f240_p: '<string>', f241_i: '<number>', f242_a: '<string>', f243_q: '<array>', f244_b: '<object>', f245_m: '<string>', f246_c: '<array>', f247_c: '<string>', f248_q: '<object>', f249_s: '<number>', f250_m: '<object>', f251_a: '<null>', f252_u: '<null>', f253_v: '<array>', f254_i: '<number>', f255_w: '<array>', f256_r: '<null>', f257_m: '<array>', f258_o: '<array>', f259_m: '<string>', f260_z: '<array>', f261_n: '<null>', f262_s: '<null>', f263_d: '<null>', f264_q: '<null>', f265_x: '<array>', f266_n: '<object>', f267_k: '<null>'}, 'znLxxRsSBIztpEWQRVxooAIvyvcGFibqGqTwiddCrsgiKtqANPrWgDjayhzqLKuTbDmMgrArAwSwjnScLuGHcBseGeUaMoPzwIwhXhlPLuppdrAqxutgRvIRArFWnjytefOjYMGKJTNlHOCjMoiUKqsUYCjfCAuuWsYHznzBNMbagQdFXuAPOzaxZxJZudrEbYPoCsPGkHCLUOVsyzeEXIQHwpKuaeODzsHefQEkQcmdEpvCGiNGXVUiPDrwpjQavrJFYIxoGVGeqthxZXFUklPwVnyiCrGimoiiGgMIiLzsfCsMchLLTzbPuRGAUGhZcecIjPTHazTDIhmiVdJhtkURYIKdlZpQGVzUIXBjubRwjRybeBfrzcgMleiDZLLoiAlaBdfRzEdUhhuKFiIslPzavcZJiGtVVzaJirCrhafTGbHTQeEhgAsMeKTcjAaPJbpNtowdHbfEGLEohROYpQnBXakzrDqqPqbuOYlfsyPlvpOdKPfGYxBxlDFexMuITkeuAzkWFChhaUYuKpvFELIOFcnyMWlHQXMFpMaeIBSRbaBuxmgBhCtYBwPmIcsydbqwvfkotirmPaGpYVExfnmYnEirmOziBpsrCknFvHaVwVIAKiwbzzXsQuYRNMNygazUYemDvOTJGYPiEiOWvRiINpNMlNqdqLhWeCgkfSAtTnuetPoeaeBXltDbZWQMWiEzBegTNlRUgAFaNZdDQKIzPeJJylnpPwkfRJcAAcDPkEvMsEaRAoZaxWCtaCQUTZWwAExaXMJqPXkChVG');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2465 = db.transaction(['objectStore_1671', 'objectStore_1668', 'objectStore_1670', 'objectStore_1672'], 'readonly', {durability:"relaxed"})
    var objectStore_1668 = txn_2465.objectStore('objectStore_1668');
    txn_2465.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2465.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2465.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2466 = db.transaction(['objectStore_1670'], 'readwrite', {durability:"relaxed"})
    var objectStore_1670 = txn_2466.objectStore('objectStore_1670');
    var clear_2 = objectStore_1670.clear();
    var clear_3 = objectStore_1670.clear();
    txn_2466.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2466.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2466.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2467 = db.transaction(['objectStore_1672', 'objectStore_1670', 'objectStore_1671'], 'readwrite', {durability:"default"})
    var objectStore_1672 = txn_2467.objectStore('objectStore_1672');
    var clear_4 = objectStore_1672.clear();
    var clear_5 = objectStore_1672.clear();
    var clear_6 = objectStore_1672.clear();
    var add_0 = objectStore_1672.add({f0_u: '<object>', f1_i: '<number>', f2_f: '<boolean>', f3_a: '<number>', f4_y: '<null>'}, 'qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', true);
        get_0 = objectStore_1672.get(KeyRange_0);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', true);
        get_1 = objectStore_1672.get(KeyRange_2);
    }
    catch (e){
    }

    txn_2467.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2467.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2467.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2468 = db.transaction(['objectStore_1672', 'objectStore_1671'], 'readonly', {durability:"strict"})
    var objectStore_1672 = txn_2468.objectStore('objectStore_1672');
    var count_0;
    try{
        KeyRange_4 = IDBKeyRange.only('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM');
        count_0 = objectStore_1672.count(KeyRange_4);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', true);
        getAll_0 = objectStore_1672.getAll(KeyRange_6, 861483478);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM');
        getAll_0 = objectStore_1672.getAll(KeyRange_7);
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', 'qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', false, true);
        get_2 = objectStore_1672.get(KeyRange_8);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', 'qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', true, false);
        get_3 = objectStore_1672.get(KeyRange_10);
    }
    catch (e){
    }

    var count_1 = objectStore_1672.count();
    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.bound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', 'qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', false, true);
        get_4 = objectStore_1672.get(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_14 = IDBKeyRange.bound('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', 'qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM', false, true);
        getAllKeys_0 = objectStore_1672.getAllKeys(KeyRange_14, 2793538349);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('qUnnewslEyWqgsWSpkwWxMQCIACaodrcnwtUHGQBbIeQfdDWkEjTdAmOtIacgaNrhshdQuBugvGIFeDOGfshxcibAkqBGZhSLQMLVYKTimERGnuhsVGKSeAqgIafxgCvPdjhEPiMbmXPiempqXGYMkbIZxEphrhPRNexrhaDHLPxCgBpvJzyRPmTwRTIbokbTgQyOFffxFUdRBSmKguBOGqnBeBuAvEEHzeShaGvVvGDjmCAkYRfaYePukQkDaRzkPIMURnrwsDmKAkKcXffwOVdxGezgeQymODywZuJRjLynZKmGZzleSEnibUqkKphdbTTyXwSTNfHdBNHzadjXZqJbiXuIiDUIdIcouSZbckGdNazLHBZaaNuWGjYHVmzZuKuqjklhNKyRzlNgWrLDzjGbzqNnQbIHemkyUhXdAEydQHyrPGLgAXCNVmJYveGIYdnOPEcSmdAiULDiyKCfWhfxSrwmWOSjsDzlohIrGWURvkFiDQApLYAtEfkaviLWpCwoyyyiXxmnEowrNCdyQBAQgdKFOMECApTJIwQoRtTjrSaGXkkKOpFMTGZTCOKkHRCwqMECoKTXxfQeExOGWBEuGautUflMdeYUbuLxOQxdgnmQRrUtKOFOLNgsrMbrabfWmHBdiGcimMDjjwQracVmGRTNzmrzPVjSXweysmaCenIMpM');
        getAllKeys_0 = objectStore_1672.getAllKeys(KeyRange_15);
    }

    txn_2468.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2468.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2468.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2469 = db.transaction(['objectStore_1670'], 'readonly', {durability:"strict"})
    var objectStore_1670 = txn_2469.objectStore('objectStore_1670');
    txn_2469.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2469.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2469.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2405')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};