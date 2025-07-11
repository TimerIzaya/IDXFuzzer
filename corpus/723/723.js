let db;
const openRequest = window.indexedDB.open('str_1238', 3639455813723749)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4348', {keypath: 'AeIRPfRokoxqUpaieiOlpPMPJBuWyHXTKGTaXMVKLeFcPPJoYDQgAOaoevrTUaUrJFFIvDeJnqpbYiNrpLsOmgXzDvsfAYSIczmSiCgqSsBHLgxxxJOCeENducvTTSGEZhlRNLYaTxMytgUaaGDAulewczmieKeibvgDJRsvhHqOCMUDRtYkfhcnkbjhdstqlWvWTwqboatgqyLwwJHzFFcFLFfuTsKbhilCezJEzDmNPLbhWnprFMGmtzgnCrsrTWglFNqtATnFBSRjKiDmRVAMLtQAwLbqtMcydvhfOsTPGJbwWGDovOnRWqriUZwOycpMkNwPsKSkabuYZPqZSeHJlIYrfJllPMosHbQWhbtQAotuvmfoSDPlmDZKmIygJBNYtzSIxWmzEdyMJTXNUQIdBzdIPRRLCMRPydPKOZyIAnStOxIeUHJFvwUOuDKUGJHDDYXpsYTcZeJtMrBwmXPBQLhczhYHHfpLCQPnwoRNBmnghHxFZDOTYqoeSEQnqMTUDuXJJZpNCws', autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_b: '<array>', f1_x: '<null>', f2_z: '<object>', f3_t: '<number>', f4_o: '<object>', f5_i: '<object>'}, 'BejbOQCcmlzdQnPNqcPQTsFGUkXxxeLgKzGRPYnozDHdOLwogUNdKPiVBSppPZCxxFLNCQVKdkfAILlsnlYZNgUTMnagZSlUufetgDFqSRrqIqtiaBnMqcGgBDKafLFyILeyhDqayZQGpKUDapPASKjBvjAdMZhHJfoRgcrlKETLmtnaHzpiYxmLvhTPswUByLLpxAJkROcJlyNdSYZultPthwBcdmCFkyGpyMSVUGWheVTtHMZWTvbflBgYJNImwPdTeMrkzGrTuDSAkmFJatDyAHzTgkoeClgNiTNTWifSXKsnmjnBFJSrAlXHwybtetCNeotSsTNGEbQecRoGKTXIRxtnPlJgTbzjUcRKbazuSmfYjRsMqSDjAVvXngJPNCxekaqexBQRvxlJGNMXMKmOLGzVSUNhiw');
    var objectStore_1 = db.createObjectStore('objectStore_4349', {keypath: 'WWviXXNUecJCrKiEPQIMdGPKeOozVLwnQShHGjvuxqeDoKjFFfJIIBbUrusyLyoLsyVhBAMhvcsRvewujaZorizXBNvuPcBXKQPFFalpEQOeCMzrgQgUDfqnHOAMddlgifkdVkGWwKRfcviWUOlKHBVmBiaAWSzRmzxayeIlrVOHNmYnXHWGCEPQkCXljezZnCryzMzZYmDNfZEZJCBuUxdRLqtGCRYAThyayRbGTHBTAKyPTHgHXXwuFJpDhzKzhzuAxbYOsWuZLNgBxXqQzrQDuKxRgXBmjLKyKXKPlPtjJwsHXTmzLuBYoBmpoQfBRpuYDCKGxwIxfBqIsTDIJCLJnxnVLyxpnOoGQFLtXCKWsJanZqqJGvGFkSAvNlgKzaQxHvpBYYrCbnDWqXUePKuaxQzcrBoyBVxsTiuawHMuNtXMSRjXpOmFtymVTmGBoMDtuCfBTAHTJFIRMQjLhZPzcocsrQFUwSQBegsAvjrmTFKySavQOMEfLIawZUJAmcAIJkKMwoeIABFGqlXToUPoxOjTywGJDOSDHKzjDTcmnngjUyNaPvz', autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_4350', {keypath: 'WKihMmJHCEzXsQjVzIVtIxJtGVNokWsEZXnJeIbUXiSPWKuALvMdDDmFFryRNjBApisKUqVyMgiJwDIfcDpfFQAGycbiGnqziraEeoBBYZQvyOGcyOZSFoAoJyHDndiVAJhksCYRtlDnXNrWNlweXjGWScGhFgOIMoLApWWPKRzVLSUfqHLZWoylQysWscsPAKVXtIqLkQxIBtYxsOmaWPCeAeLCYYZisKvLaMbPgELoUP', autoIncrement: false});
    var add_1 = objectStore_0.add({f0_g: '<string>', f1_k: '<string>', f2_o: '<array>', f3_j: '<number>', f4_j: '<object>', f5_i: '<null>', f6_w: '<string>'}, 'HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag');
    var objectStore_3 = db.createObjectStore('objectStore_4351', {autoIncrement: true});
    var add_2 = objectStore_0.add({f0_n: '<null>'}, 'bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS');
    var clear_2 = objectStore_2.clear();
    var objectStore_4 = db.createObjectStore('objectStore_4352');
    var index_2921 = objectStore_1.createIndex('index_2921', 'test', {unique: true, multiEntry: false});
    var clear_3 = objectStore_1.clear();
    var objectStore_5 = db.createObjectStore('objectStore_4353', {keypath: 'OvBbwDAQphQUTIKuSxeNTrQldtrOSRvVqCJUYJIXhmBynzmFJfxtCSlccQVthsaRmcRHYiaAmmCasHdBWrWHiHqhtjCMfxLsuuAMVbifWFpetuiCmKfSvabipBPyAfQgkJmHAZcvaiTvbixaxbduKyTirNsoJwshzKeHtyMuFRSQBeTYeNWzaWflnWaotDVVVXLoFSRHcyGYgdksklCgrpHqFnpFwkKSQKyhoHGpaCaiEssUphukohxapxxOnCyguliMUjsnNjwZ', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6560 = db.transaction(['objectStore_4350', 'objectStore_4352', 'objectStore_4351', 'objectStore_4348', 'objectStore_4353'], 'readwrite', {durability:"strict"})
    var objectStore_4353 = txn_6560.objectStore('objectStore_4353');
    var add_3 = objectStore_4353.add({f0_a: '<array>', f1_i: '<number>', f2_t: '<number>', f3_a: '<boolean>', f4_g: '<boolean>', f5_q: '<object>', f6_a: '<boolean>', f7_r: '<null>', f8_w: '<array>', f9_f: '<string>', f10_b: '<null>', f11_p: '<array>', f12_e: '<string>', f13_v: '<boolean>', f14_p: '<boolean>', f15_p: '<object>', f16_q: '<string>', f17_m: '<object>', f18_c: '<number>', f19_u: '<object>', f20_a: '<number>', f21_d: '<boolean>', f22_s: '<null>', f23_v: '<object>', f24_x: '<boolean>', f25_p: '<boolean>', f26_w: '<object>', f27_d: '<string>', f28_d: '<null>', f29_z: '<object>', f30_t: '<object>', f31_y: '<number>', f32_p: '<string>', f33_s: '<null>', f34_g: '<array>', f35_t: '<object>', f36_j: '<null>', f37_g: '<object>', f38_t: '<null>', f39_n: '<string>', f40_g: '<null>', f41_b: '<object>', f42_q: '<number>', f43_f: '<null>', f44_s: '<boolean>', f45_w: '<boolean>', f46_s: '<object>', f47_e: '<object>', f48_n: '<boolean>', f49_n: '<object>', f50_d: '<null>', f51_x: '<array>', f52_h: '<null>', f53_w: '<null>', f54_d: '<object>', f55_v: '<null>', f56_z: '<null>', f57_v: '<object>', f58_s: '<object>', f59_p: '<number>', f60_o: '<number>', f61_y: '<object>', f62_s: '<null>', f63_m: '<array>', f64_n: '<array>', f65_h: '<string>', f66_z: '<null>', f67_g: '<number>', f68_m: '<null>', f69_h: '<null>', f70_c: '<null>', f71_z: '<array>', f72_g: '<number>', f73_r: '<array>', f74_t: '<boolean>', f75_k: '<object>', f76_g: '<string>', f77_c: '<null>', f78_g: '<number>', f79_v: '<boolean>', f80_l: '<boolean>', f81_i: '<string>', f82_c: '<number>', f83_o: '<boolean>', f84_l: '<boolean>', f85_s: '<boolean>', f86_p: '<number>', f87_f: '<string>', f88_z: '<number>', f89_x: '<number>', f90_c: '<null>', f91_g: '<boolean>', f92_q: '<null>', f93_t: '<array>', f94_p: '<string>', f95_t: '<string>', f96_m: '<array>', f97_d: '<boolean>', f98_z: '<boolean>', f99_n: '<boolean>', f100_q: '<object>', f101_f: '<null>', f102_u: '<object>', f103_n: '<number>', f104_m: '<object>', f105_y: '<null>', f106_p: '<array>', f107_t: '<object>', f108_v: '<boolean>', f109_f: '<string>', f110_w: '<number>', f111_a: '<null>', f112_i: '<object>', f113_c: '<object>', f114_m: '<string>', f115_d: '<number>', f116_k: '<array>', f117_x: '<boolean>', f118_z: '<boolean>', f119_n: '<boolean>', f120_p: '<array>', f121_z: '<null>', f122_s: '<null>', f123_p: '<boolean>', f124_a: '<null>', f125_i: '<array>', f126_s: '<null>', f127_u: '<object>', f128_f: '<string>', f129_c: '<number>', f130_u: '<string>', f131_a: '<boolean>', f132_j: '<null>', f133_j: '<array>', f134_a: '<object>', f135_k: '<object>', f136_e: '<number>', f137_w: '<string>', f138_r: '<string>', f139_i: '<array>', f140_e: '<object>', f141_u: '<boolean>', f142_w: '<number>', f143_w: '<object>', f144_h: '<object>', f145_q: '<string>', f146_q: '<number>', f147_c: '<string>', f148_t: '<array>', f149_i: '<array>', f150_k: '<number>', f151_d: '<string>', f152_c: '<object>', f153_n: '<string>', f154_k: '<null>', f155_z: '<null>', f156_f: '<number>', f157_m: '<object>', f158_j: '<number>', f159_c: '<object>', f160_l: '<object>', f161_e: '<boolean>', f162_a: '<array>', f163_e: '<boolean>'}, 'zxPPVuEPDJrRvUvekHjNicFNwRyLXXhQdFndYJJOvoqjrWHZycuLzAtyMBCNLzmBMuVmOCEIDgHUICibdpqExThOlntBAAmBmfqiBuCgJJkvIuDJIOqDckhFFeIUWQIfbKSxYBBwZAcTXBivEZKFINHffdJkyKwSPvSqLbJpyhYMpBxWrUqmgyqQLAyTqTMJdZVVVmyFVqqzpSLXXSViIGbpcQAaDCwOLQTGxBSMVcjZNoTNEXbpmDJbepCXDrryXTlvdNeBkATmFBKoDbCdB');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('zxPPVuEPDJrRvUvekHjNicFNwRyLXXhQdFndYJJOvoqjrWHZycuLzAtyMBCNLzmBMuVmOCEIDgHUICibdpqExThOlntBAAmBmfqiBuCgJJkvIuDJIOqDckhFFeIUWQIfbKSxYBBwZAcTXBivEZKFINHffdJkyKwSPvSqLbJpyhYMpBxWrUqmgyqQLAyTqTMJdZVVVmyFVqqzpSLXXSViIGbpcQAaDCwOLQTGxBSMVcjZNoTNEXbpmDJbepCXDrryXTlvdNeBkATmFBKoDbCdB', 'zxPPVuEPDJrRvUvekHjNicFNwRyLXXhQdFndYJJOvoqjrWHZycuLzAtyMBCNLzmBMuVmOCEIDgHUICibdpqExThOlntBAAmBmfqiBuCgJJkvIuDJIOqDckhFFeIUWQIfbKSxYBBwZAcTXBivEZKFINHffdJkyKwSPvSqLbJpyhYMpBxWrUqmgyqQLAyTqTMJdZVVVmyFVqqzpSLXXSViIGbpcQAaDCwOLQTGxBSMVcjZNoTNEXbpmDJbepCXDrryXTlvdNeBkATmFBKoDbCdB', false, false);
        get_0 = objectStore_4353.get(KeyRange_0);
    }
    catch (e){
    }

    var add_4 = objectStore_4353.add({f0_y: '<object>', f1_v: '<boolean>', f2_k: '<string>', f3_t: '<null>', f4_g: '<null>', f5_s: '<number>', f6_r: '<string>', f7_t: '<string>', f8_t: '<number>'}, 'JpKcsHqXGXbjixrFhddxbCjaFNXPRZXjimByOVzuEUOvthUnZEUMXLGHleQzbETLzdlZCMoDBeqxsmGgDUjaLGTKrRkKNdyGsxgutFgrEBpnZqcwmrvgsfClatIRRFHhhkiKaRCIHPnEZjIbXLFTrdXDPYarLsniOKgENusinLkuTnQklm');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('JpKcsHqXGXbjixrFhddxbCjaFNXPRZXjimByOVzuEUOvthUnZEUMXLGHleQzbETLzdlZCMoDBeqxsmGgDUjaLGTKrRkKNdyGsxgutFgrEBpnZqcwmrvgsfClatIRRFHhhkiKaRCIHPnEZjIbXLFTrdXDPYarLsniOKgENusinLkuTnQklm', 'JpKcsHqXGXbjixrFhddxbCjaFNXPRZXjimByOVzuEUOvthUnZEUMXLGHleQzbETLzdlZCMoDBeqxsmGgDUjaLGTKrRkKNdyGsxgutFgrEBpnZqcwmrvgsfClatIRRFHhhkiKaRCIHPnEZjIbXLFTrdXDPYarLsniOKgENusinLkuTnQklm', false, true);
        get_1 = objectStore_4353.get(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('zxPPVuEPDJrRvUvekHjNicFNwRyLXXhQdFndYJJOvoqjrWHZycuLzAtyMBCNLzmBMuVmOCEIDgHUICibdpqExThOlntBAAmBmfqiBuCgJJkvIuDJIOqDckhFFeIUWQIfbKSxYBBwZAcTXBivEZKFINHffdJkyKwSPvSqLbJpyhYMpBxWrUqmgyqQLAyTqTMJdZVVVmyFVqqzpSLXXSViIGbpcQAaDCwOLQTGxBSMVcjZNoTNEXbpmDJbepCXDrryXTlvdNeBkATmFBKoDbCdB', 'JpKcsHqXGXbjixrFhddxbCjaFNXPRZXjimByOVzuEUOvthUnZEUMXLGHleQzbETLzdlZCMoDBeqxsmGgDUjaLGTKrRkKNdyGsxgutFgrEBpnZqcwmrvgsfClatIRRFHhhkiKaRCIHPnEZjIbXLFTrdXDPYarLsniOKgENusinLkuTnQklm', false, true);
        getAllKeys_0 = objectStore_4353.getAllKeys(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('JpKcsHqXGXbjixrFhddxbCjaFNXPRZXjimByOVzuEUOvthUnZEUMXLGHleQzbETLzdlZCMoDBeqxsmGgDUjaLGTKrRkKNdyGsxgutFgrEBpnZqcwmrvgsfClatIRRFHhhkiKaRCIHPnEZjIbXLFTrdXDPYarLsniOKgENusinLkuTnQklm');
        getAllKeys_0 = objectStore_4353.getAllKeys(KeyRange_5);
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('zxPPVuEPDJrRvUvekHjNicFNwRyLXXhQdFndYJJOvoqjrWHZycuLzAtyMBCNLzmBMuVmOCEIDgHUICibdpqExThOlntBAAmBmfqiBuCgJJkvIuDJIOqDckhFFeIUWQIfbKSxYBBwZAcTXBivEZKFINHffdJkyKwSPvSqLbJpyhYMpBxWrUqmgyqQLAyTqTMJdZVVVmyFVqqzpSLXXSViIGbpcQAaDCwOLQTGxBSMVcjZNoTNEXbpmDJbepCXDrryXTlvdNeBkATmFBKoDbCdB', true);
        get_2 = objectStore_4353.get(KeyRange_6);
    }
    catch (e){
    }

    txn_6560.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6560.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6560.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6561 = db.transaction(['objectStore_4348', 'objectStore_4349'], 'readwrite', {durability:"strict"})
    var objectStore_4349 = txn_6561.objectStore('objectStore_4349');
    var put_0 = objectStore_4349.put({f0_t: '<number>', f1_q: '<null>', f2_q: '<string>', f3_j: '<object>', f4_y: '<null>', f5_g: '<object>', f6_n: '<number>', f7_e: '<null>'}, 'ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN');
    var clear_4 = objectStore_4349.clear();
    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', true);
        getAll_0 = objectStore_4349.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN');
        getAll_0 = objectStore_4349.getAll(KeyRange_9);
    }

    var getAllKeys_1;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', false);
        getAllKeys_1 = objectStore_4349.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN');
        getAllKeys_1 = objectStore_4349.getAllKeys(KeyRange_11);
    }

    var index_0 = objectStore_4349.index('index_2921');
    var count_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', 'ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', true, true);
        count_0 = objectStore_4349.count(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN');
        get_3 = objectStore_4349.get(KeyRange_14);
    }
    catch (e){
    }

    var clear_5 = objectStore_4349.clear();
    var put_1 = objectStore_4349.put({f0_p: '<array>', f1_c: '<boolean>', f2_b: '<string>', f3_c: '<object>', f4_j: '<array>', f5_s: '<string>', f6_b: '<number>', f7_s: '<string>', f8_o: '<null>', f9_h: '<string>'}, 'dNsdQenwPCOvkdBPcSgDMzxqHLdGgvLzYZCIPZYQPSNbKoebsztICaplZaoFXQqzFUIXqSwVssBIRwNxeODofYSclMkQQxPYzXtXaNCMefrYLFWjxPORMUDPqZMzgyVmwqtwqHNeyRkHyFCeVfnayFSEUMaVaPmTdLTjHSkKzrxzJefoVoHeKbxDYkYLGLeKORuCTeYiIsnYZcgrwWIrRpAQvLrIPxgzSHCUyUVdkzJdrofhdmllhVvrQLGCyaXXxgsXoBUoOmTNmRjBBAxbwzSvosfWdvlTNyWbwkOvmYtNzxdjaWNypwAPzBlNNiVZwtUxhFwlKdaWnsCXibaapqyotZFnbPLeaXznYNZvxQewzMFOjNsaJcEHhujZmxTJKKKhXXDlSeMippfqwUYxLLfLHIZRYRjyydwVzFsFAEfOFRFNtBzBCEAbDWMfFOqhCCvKRWWqrxfrPxEgOmwvWWWkJPxTtmuFVpxcjgkfLHwyCOWHrPTJrQAieFJFTimwODGjRYuEzZgaVVAyIVinfBxySsLplYXuWYmTZgWCfbLwAUxEbGAOpskHneNUeftxWpkDKFjKukxaEnnelMcOEKRxYLKPbCXjuyakttrqlfLFRfeGRUaXPOjOIHrBEZFAolgRNuftVbneQcRbbagquxLSfvpsBhYoEmHYTuxATrXfaGdTILJTwATIZNdJdcGshxIeaBGkLPwIfKwFFwFyknuuYHRbTyDeQpWbpYrHczCdRdtoYLTXUNASnxtHpFDOZIK');
    var add_5 = objectStore_4349.add({f0_h: '<string>', f1_u: '<boolean>', f2_x: '<number>'}, 'oWXsFpPutUAyUxgfHxFSMvehZhGyMQloklvhwOmoYAtPhiLotUHOjmswkzXirVmRPKBrGdEVCGUDvGxdsXylNkyKCIWGmXkJdzxwwCkKLiifvzZCcgTFWNGOJqfbBIvQtwlSvoUkrjrFaNgiduLIypSbKqMBBZgCDaOGYwSziRiOkUXWcAgeXqGHSKoaBQaNJECDpYmFsLuvsPzEPrnFthaZodktkXWlNmkmTfYRkSfGxiKTneZQhcWhJudjiSntXtcpUfYdZZpslxcufGdwTKtTrjnZnMvSkHLYrNxAolDUzQgeWwQbSgJPSnAPVSnNoRPtHwDVKrtpRCjoLTBehedebWjLXoJlUAbcYKdHlhMJYeeXHrCdfuSpfUKKQIZDaCpXNRPSxqEkrxqHpEfutMWBLMTGdwitMIiJiUXZIzlrFEjhbrgBuvQHHjcCigjQdwVUrdpMZwRDrCowiCmveVPkmPwtVupqlQwsWOCiyGaQSstMFlEfQQbtvibmhraOx');
    var getAllKeys_2 = objectStore_4349.getAllKeys();
    var count_1 = objectStore_4349.count();
    var delete_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', 'ZjXjAoggCOuJDfwtsZwFepMLqPxjtUgEXJqxhlOGEkwrxmJjQUvRPsPGNVuxRfTDEujtKVTWMlLLzqWgnUqBSCBmHimTLLoytFskIXETrbuqCCuTIZnJXdahSOBSmEczFTVdbJrJBNnsIsHnFmBgCdumHyrjDPgvjehLIGUIMURSSGswYdJAfHIELQNxlotBQfyUCHelktJWKUPvNllBgOQiueTbvvHDaxbSBsFzpMClrmEIXhWYwToEvdvuYECPXVhfChOCZNgaaRYnKWMJKumFhXUyyHCvJghYIyMFWJjYNxvQnxhsOXJEcVjGTzeUlelyvjInSMvWuVOZuBeMbiKGsSmGlDKlJCNSymyAeGejREFsTRXSyTUCCwnXLWFKtTataiBEhcEGiNzFfHVSxVwKoosAoYeZOUVQXyDxoKTuztxYIvVCTEvnIMjdgjRXslOpXzFxlgAgTEXrMGgQJMVjpPZKKuXIuzjvdmrIMCyhabSUGKrYWHLJVQSvcPrsaLYirWMIZdnnXHKAYhiLWHKaZMTGMPtBxPLPnTdSIzAcZCMouoTvEzakmrNqNBAQTGstjStsXhfKyXygfCvnpbyhcRQZTKcQTssfRMTikVbfEAtEPxaocFfCCrsfAIUExmLbzoMcMNCNCYXXfjMvWOdWjpKQtZeClTMOrIpLwmXehfevkwzqtUVOHHcAkvzpSLMKkZwrUECODffitfmxFkWiOwWQeakPxHxCTUHfneWGKCfcUEjwIrQvjHPXwawxRlyJVNtpRdvByOyUYtiQHMEPpsekGKfdraHZdvLYQyEEvQwcxfTCIMFrrGvtcIpuXuGWaWJqRKTnfNYccInJjSKUkQANUjunLuwiUtkIdMRaCbhVGhXxPzhiPLSoUAnIZjyZLnpWXZexzQodJOaSMPpujXCLPyxSvEKdZKGcjhsWGpVdAlloZHVjEXZhHExYsN', true, true);
        delete_0 = objectStore_4349.delete(KeyRange_16);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_18 = IDBKeyRange.only('dNsdQenwPCOvkdBPcSgDMzxqHLdGgvLzYZCIPZYQPSNbKoebsztICaplZaoFXQqzFUIXqSwVssBIRwNxeODofYSclMkQQxPYzXtXaNCMefrYLFWjxPORMUDPqZMzgyVmwqtwqHNeyRkHyFCeVfnayFSEUMaVaPmTdLTjHSkKzrxzJefoVoHeKbxDYkYLGLeKORuCTeYiIsnYZcgrwWIrRpAQvLrIPxgzSHCUyUVdkzJdrofhdmllhVvrQLGCyaXXxgsXoBUoOmTNmRjBBAxbwzSvosfWdvlTNyWbwkOvmYtNzxdjaWNypwAPzBlNNiVZwtUxhFwlKdaWnsCXibaapqyotZFnbPLeaXznYNZvxQewzMFOjNsaJcEHhujZmxTJKKKhXXDlSeMippfqwUYxLLfLHIZRYRjyydwVzFsFAEfOFRFNtBzBCEAbDWMfFOqhCCvKRWWqrxfrPxEgOmwvWWWkJPxTtmuFVpxcjgkfLHwyCOWHrPTJrQAieFJFTimwODGjRYuEzZgaVVAyIVinfBxySsLplYXuWYmTZgWCfbLwAUxEbGAOpskHneNUeftxWpkDKFjKukxaEnnelMcOEKRxYLKPbCXjuyakttrqlfLFRfeGRUaXPOjOIHrBEZFAolgRNuftVbneQcRbbagquxLSfvpsBhYoEmHYTuxATrXfaGdTILJTwATIZNdJdcGshxIeaBGkLPwIfKwFFwFyknuuYHRbTyDeQpWbpYrHczCdRdtoYLTXUNASnxtHpFDOZIK');
        delete_1 = objectStore_4349.delete(KeyRange_18);
    }
    catch (e){
    }

    var put_2 = objectStore_4349.put({f0_s: '<boolean>', f1_q: '<number>', f2_t: '<string>', f3_i: '<object>', f4_c: '<boolean>', f5_l: '<string>', f6_n: '<array>', f7_j: '<boolean>', f8_f: '<string>'}, 'ExQJuZjtqDFkcVsybNqbLirGsFIHEvkQfNWxrfvuyoCxGPbEqNlUujYJKTcuhLGFVKheCLPoeySwWjzxtGFweqmITrhuVjCUtXWLwCOkpWfKPzWEVuCgMzwOVSGCzASWAcEWDEWFkmwbYPanBoiYoBhjPNIeQZXsTIpptoOzPaDRoGPSvWXCAkDsKcIyctTjAjpzoFJUJQoWWwfuprYropdIvDPcHKljAplXzCMUMPtkfZbYkQHEhkCfazdpOOyzWdvbcMqEjuETsQJuEmKfKViBSMlcCYWBVcqrNpbzsDUKYmRDotbpVZLLEseEQRqAvsYLucEPECdJWqnpzhaGvtslZZkeIBsFcnLyAwmdVHmmESQcoboDuiK');
    txn_6561.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6561.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6561.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6562 = db.transaction(['objectStore_4351', 'objectStore_4350', 'objectStore_4348'], 'readonly', {durability:"relaxed"})
    var objectStore_4351 = txn_6562.objectStore('objectStore_4351');
    txn_6562.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6562.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6562.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6563 = db.transaction(['objectStore_4348', 'objectStore_4350'], 'readonly', {durability:"strict"})
    var objectStore_4348 = txn_6563.objectStore('objectStore_4348');
    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('BejbOQCcmlzdQnPNqcPQTsFGUkXxxeLgKzGRPYnozDHdOLwogUNdKPiVBSppPZCxxFLNCQVKdkfAILlsnlYZNgUTMnagZSlUufetgDFqSRrqIqtiaBnMqcGgBDKafLFyILeyhDqayZQGpKUDapPASKjBvjAdMZhHJfoRgcrlKETLmtnaHzpiYxmLvhTPswUByLLpxAJkROcJlyNdSYZultPthwBcdmCFkyGpyMSVUGWheVTtHMZWTvbflBgYJNImwPdTeMrkzGrTuDSAkmFJatDyAHzTgkoeClgNiTNTWifSXKsnmjnBFJSrAlXHwybtetCNeotSsTNGEbQecRoGKTXIRxtnPlJgTbzjUcRKbazuSmfYjRsMqSDjAVvXngJPNCxekaqexBQRvxlJGNMXMKmOLGzVSUNhiw', 'bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS', true, true);
        get_4 = objectStore_4348.get(KeyRange_20);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', true);
        count_2 = objectStore_4348.count(KeyRange_22);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', false);
        count_3 = objectStore_4348.count(KeyRange_24);
    }
    catch (e){
    }

    var count_4 = objectStore_4348.count();
    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.only('BejbOQCcmlzdQnPNqcPQTsFGUkXxxeLgKzGRPYnozDHdOLwogUNdKPiVBSppPZCxxFLNCQVKdkfAILlsnlYZNgUTMnagZSlUufetgDFqSRrqIqtiaBnMqcGgBDKafLFyILeyhDqayZQGpKUDapPASKjBvjAdMZhHJfoRgcrlKETLmtnaHzpiYxmLvhTPswUByLLpxAJkROcJlyNdSYZultPthwBcdmCFkyGpyMSVUGWheVTtHMZWTvbflBgYJNImwPdTeMrkzGrTuDSAkmFJatDyAHzTgkoeClgNiTNTWifSXKsnmjnBFJSrAlXHwybtetCNeotSsTNGEbQecRoGKTXIRxtnPlJgTbzjUcRKbazuSmfYjRsMqSDjAVvXngJPNCxekaqexBQRvxlJGNMXMKmOLGzVSUNhiw');
        get_5 = objectStore_4348.get(KeyRange_26);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS', 'bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS', true, true);
        get_6 = objectStore_4348.get(KeyRange_28);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', 'bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS', false, true);
        get_7 = objectStore_4348.get(KeyRange_30);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', false);
        count_5 = objectStore_4348.count(KeyRange_32);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', 'HVvhZvWEqOsXwcnBUdTIQFyEqzteuNEbayNbGhzXuLNGHeCvxeGBNITBqvkIYNgDoYnCnJdOdnvdCZFfiLCKGQsrnEofoBdgRYFwEyaJdsLRHzmEDhWVPCJRpugyTSNHnuIcFRaESUUznAfnNBmqYNdAtvGQabbuWVzUjSaVGRAzSDewdoKRARqaNuYhgDZQxbqSwLpxcAnXEJaJFFNEhHRKsXoSJoEjzmhtHFcOqCnOzQdsXfKCaNjRoZpfbxdEifbBzjWWXbSlNvREddgojYYboNbqyWrnEhXRAGMBmvTCZCtAivMbNhYNrYWZYjwgpdIvbIqoweONrkGTnbnaJqrJMhqkTTHiLONWMOljJjOYkSTVwqPMVoYLaGtWmNYQlNpTTmbLflkOhMLTLggUedbNdYyvhDwJchgpPtYvZHdMjGLmyZcBjKeQGEASEIvcdyKPzhufESAGruAMKjUJJrKTUvpxHsyCVFpbUNag', true, true);
        count_6 = objectStore_4348.count(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS', false);
        getAllKeys_3 = objectStore_4348.getAllKeys(KeyRange_36, 2196892869);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('bZrkjnfVTdEqhXFnoqJMskrzXarceczLBfISnZksiDNZkAMfMIysTeheIMRRgTTgLobZqCzJnZpKdcwGGYpvyejEpEvXMuxMNCqOvKtZmELwbDeHDSunBTlNpMKXVPhYUTniDKrBOsuMoBpiqsMonbcpOUhvhqkCCnJPekJZrmXFfeNArADuQdzkWhhAPQsDgblMBPRRwAmpVVBTWgNVMbgRGBEUPUqzmOtEkOilLUzoaXNmKclVdGiRdadsgJGXUXdtFXVuheIjfypVwrrygfzOvUevnXReWrQskZuhUsQpZXHwHXuwIyRuHrvFXqeNGbDIHbhHYvFNwwiQcEaDhCcRfeqlKVCYpsXmXlrBzgHltgtLPPzsZIoNmEBLesKCenAlXBCWKexyQtqXKkbtrRKcvypHjwmeFGinxTRkxjLxLOcbHRjHbHVtyftQNXYOeCmkfLRtyWODKjAuLQdEQsPVspEnbWSyholimmSEzgOtQNSJdVgvzvnXFYdpBzJroiMNxZmUVuoiAEAEfHeS');
        getAllKeys_3 = objectStore_4348.getAllKeys(KeyRange_37);
    }

    txn_6563.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6563.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6563.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6564 = db.transaction(['objectStore_4350'], 'readwrite', {durability:"strict"})
    var objectStore_4350 = txn_6564.objectStore('objectStore_4350');
    var put_3 = objectStore_4350.put({f0_u: '<number>', f1_x: '<boolean>', f2_q: '<string>', f3_y: '<number>'}, 'OBUlVeHIgnfynXPVXpXyYrZfedSivqIgsFiLyjZoUHUNSnIVpbIZfmPUAkTlFnNEIncRgPukgNenUCiMm');
    var delete_2;
    try{
        KeyRange_38 = IDBKeyRange.bound('OBUlVeHIgnfynXPVXpXyYrZfedSivqIgsFiLyjZoUHUNSnIVpbIZfmPUAkTlFnNEIncRgPukgNenUCiMm', 'OBUlVeHIgnfynXPVXpXyYrZfedSivqIgsFiLyjZoUHUNSnIVpbIZfmPUAkTlFnNEIncRgPukgNenUCiMm', false, false);
        delete_2 = objectStore_4350.delete(KeyRange_38);
    }
    catch (e){
    }

    var add_6 = objectStore_4350.add({f0_p: '<array>'}, 'xVMbtxsmwghDuCSHKIRVmksxANLyMOjVTQcFCMspcoBRbtObfAKsjVpHXyPlhDTaUeTlKyStOdBecRKqQhLSbLXQcoLPBvYbFyyAvWEIzTdaBzbyBIVgnnSthybokIlvjWVKOwMGWlNTBbbFUmVSCtZpvjUoKstfahxaNPrWnpvwIwwqnICPQDWYrgyVQUDHlufiSdZiamSAFFeOvTSwrQZpniZVbMXRcyMoGOEMuotkCNYZUGtiOgpZUYpUmmZnGGXEGxBzMXOxLaBUXyFOcfwmZthhjTSisPVqLVcsgzpKLayLMByBJhJQevuoloxifuKDGDCzjODznAJuGHtfgheoLzzZogJbCvvDTWhGuHQFggcWDGDcXjlvYJjHhJoPtUjmamtbBzmWUykMgebxRbAQlFVnJXjQDDReGSNTsbsZpmcmmboBzsGVnrUiVHowSyzNwvEmpdOPGLCVTWpUsGTInbQFmWyVwbAyxEaZTThvahBEvyIuOdHSFgStUiGBkTDRWNsELFrdOpbBWGrNvYlHAwEtpDPfESseFdSBBJFXJPgZApJtcUbKdwtucBIkUsrCEOYnscGecogRyaKBzpiiJRLeobQBUyhlfKdyPvthHbonrpDhZxtwqxMxlkeChFvpRmySASFcCuipghMdRJzffllRXqXgecoDPbINQNdWMYUCbiJoFrkjYPOvCEMGmmAHBbjYuCvgRXAFZzCKaGbDBWLfHUjPfrBTMfrWQlelSVLmlsXrwzdpUpVEgxnOEhTLpsAlXOMwgCuNewtpXzQtqeogGgisJZqljiX');
    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.only('xVMbtxsmwghDuCSHKIRVmksxANLyMOjVTQcFCMspcoBRbtObfAKsjVpHXyPlhDTaUeTlKyStOdBecRKqQhLSbLXQcoLPBvYbFyyAvWEIzTdaBzbyBIVgnnSthybokIlvjWVKOwMGWlNTBbbFUmVSCtZpvjUoKstfahxaNPrWnpvwIwwqnICPQDWYrgyVQUDHlufiSdZiamSAFFeOvTSwrQZpniZVbMXRcyMoGOEMuotkCNYZUGtiOgpZUYpUmmZnGGXEGxBzMXOxLaBUXyFOcfwmZthhjTSisPVqLVcsgzpKLayLMByBJhJQevuoloxifuKDGDCzjODznAJuGHtfgheoLzzZogJbCvvDTWhGuHQFggcWDGDcXjlvYJjHhJoPtUjmamtbBzmWUykMgebxRbAQlFVnJXjQDDReGSNTsbsZpmcmmboBzsGVnrUiVHowSyzNwvEmpdOPGLCVTWpUsGTInbQFmWyVwbAyxEaZTThvahBEvyIuOdHSFgStUiGBkTDRWNsELFrdOpbBWGrNvYlHAwEtpDPfESseFdSBBJFXJPgZApJtcUbKdwtucBIkUsrCEOYnscGecogRyaKBzpiiJRLeobQBUyhlfKdyPvthHbonrpDhZxtwqxMxlkeChFvpRmySASFcCuipghMdRJzffllRXqXgecoDPbINQNdWMYUCbiJoFrkjYPOvCEMGmmAHBbjYuCvgRXAFZzCKaGbDBWLfHUjPfrBTMfrWQlelSVLmlsXrwzdpUpVEgxnOEhTLpsAlXOMwgCuNewtpXzQtqeogGgisJZqljiX');
        get_8 = objectStore_4350.get(KeyRange_40);
    }
    catch (e){
    }

    var count_7 = objectStore_4350.count();
    var clear_6 = objectStore_4350.clear();
    var add_7 = objectStore_4350.add({f0_u: '<string>', f1_z: '<null>', f2_t: '<array>', f3_i: '<object>', f4_l: '<number>', f5_r: '<number>', f6_w: '<object>', f7_w: '<array>'}, 'YGJtxAQnLpocmXQQLnHqgsKopiqqsLOuZIMxvlzayRYSTeRtLQqgrZPYxfIXjoVjawEXzOjhVvIEQIAqAqWtXkGhTyEmwuhoPbqTyFMNyJodjDrhqsMXfLJgLmnFvCZJelOtimYzFINaVYUKTpn');
    var count_8 = objectStore_4350.count();
    txn_6564.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6564.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6564.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_5960')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};