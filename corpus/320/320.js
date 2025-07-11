let db;
const openRequest = window.indexedDB.open('str_2710', 6515039814669440)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1925', {autoIncrement: false});
    var index_1277 = objectStore_0.createIndex('index_1277', 'test', {unique: false});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_q: '<number>', f1_z: '<string>', f2_y: '<object>'}, 'lxwvcElZeeIfwgQOMxGtCoQvTXjVZeKxxXrZavBLftbCJzsgMNJhbRsYRbzOwVbOZMfLnArtYOGchmnTDTaBhIiBDkrVEMLVnXXIHlVcYnPJTufHPNurOCtZxbIqfuSDihXJJLWEmpHKJtyfMmyORDtNCMcnMMiDEDZCHrsdLwAcQGVAXXAYebkfpUOOFwrFHUSVapjbbCwbKRyZIgIQbkRJbsIzRtUbTjPuUQYYLIVVRNtGZdqhZVrJvxRSCgWnDGEhFZAXbNnkKpxbQGuqgYhkEyUthmuNQfSSHZTjjKPDpXiMAAGdEtHElhwMPFKyUCtonaAyEEqxLJVVUfoErPSqXHolBVEoyaLrqxmwECKINTdNSRsTkqGWUfREiaoJCGmtfjDQomryfSdvXlpwBBeHaUAUnpBvkawyDDaSdlpJnzAsROXCmpnjzcLpFruIaNuEwdmrbqJfDcHciwUebwracoLUDiZZbyzCzOsCXhuArkTnxdeeLltweEwIgaqRrCRhZgaboAKoqqkdEnPJCOeyKgQincjRcvLDsPIgbUQynYjNONJHurwkPGMlcAmpiYkknXoGBawcJoIDEJZWtiJjZGFdHMWaDQMSaosVuhkqwK');
    var clear_1 = objectStore_0.clear();
    var getAll_0 = objectStore_0.getAll(1967353853);
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_0.clear();
    var count_0 = objectStore_0.count();
    var clear_4 = objectStore_0.clear();
    var count_1 = objectStore_0.count();
    var index_1278 = objectStore_0.createIndex('index_1278', 'test', {unique: false, multiEntry: false});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('lxwvcElZeeIfwgQOMxGtCoQvTXjVZeKxxXrZavBLftbCJzsgMNJhbRsYRbzOwVbOZMfLnArtYOGchmnTDTaBhIiBDkrVEMLVnXXIHlVcYnPJTufHPNurOCtZxbIqfuSDihXJJLWEmpHKJtyfMmyORDtNCMcnMMiDEDZCHrsdLwAcQGVAXXAYebkfpUOOFwrFHUSVapjbbCwbKRyZIgIQbkRJbsIzRtUbTjPuUQYYLIVVRNtGZdqhZVrJvxRSCgWnDGEhFZAXbNnkKpxbQGuqgYhkEyUthmuNQfSSHZTjjKPDpXiMAAGdEtHElhwMPFKyUCtonaAyEEqxLJVVUfoErPSqXHolBVEoyaLrqxmwECKINTdNSRsTkqGWUfREiaoJCGmtfjDQomryfSdvXlpwBBeHaUAUnpBvkawyDDaSdlpJnzAsROXCmpnjzcLpFruIaNuEwdmrbqJfDcHciwUebwracoLUDiZZbyzCzOsCXhuArkTnxdeeLltweEwIgaqRrCRhZgaboAKoqqkdEnPJCOeyKgQincjRcvLDsPIgbUQynYjNONJHurwkPGMlcAmpiYkknXoGBawcJoIDEJZWtiJjZGFdHMWaDQMSaosVuhkqwK', 'lxwvcElZeeIfwgQOMxGtCoQvTXjVZeKxxXrZavBLftbCJzsgMNJhbRsYRbzOwVbOZMfLnArtYOGchmnTDTaBhIiBDkrVEMLVnXXIHlVcYnPJTufHPNurOCtZxbIqfuSDihXJJLWEmpHKJtyfMmyORDtNCMcnMMiDEDZCHrsdLwAcQGVAXXAYebkfpUOOFwrFHUSVapjbbCwbKRyZIgIQbkRJbsIzRtUbTjPuUQYYLIVVRNtGZdqhZVrJvxRSCgWnDGEhFZAXbNnkKpxbQGuqgYhkEyUthmuNQfSSHZTjjKPDpXiMAAGdEtHElhwMPFKyUCtonaAyEEqxLJVVUfoErPSqXHolBVEoyaLrqxmwECKINTdNSRsTkqGWUfREiaoJCGmtfjDQomryfSdvXlpwBBeHaUAUnpBvkawyDDaSdlpJnzAsROXCmpnjzcLpFruIaNuEwdmrbqJfDcHciwUebwracoLUDiZZbyzCzOsCXhuArkTnxdeeLltweEwIgaqRrCRhZgaboAKoqqkdEnPJCOeyKgQincjRcvLDsPIgbUQynYjNONJHurwkPGMlcAmpiYkknXoGBawcJoIDEJZWtiJjZGFdHMWaDQMSaosVuhkqwK', true, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_a: '<object>', f1_t: '<object>', f2_n: '<object>', f3_n: '<array>', f4_j: '<number>', f5_p: '<array>', f6_l: '<null>', f7_q: '<object>', f8_v: '<number>', f9_a: '<number>', f10_r: '<number>', f11_t: '<string>', f12_c: '<boolean>', f13_d: '<number>', f14_v: '<string>', f15_g: '<object>', f16_t: '<boolean>', f17_f: '<number>', f18_t: '<array>', f19_s: '<null>', f20_o: '<boolean>', f21_v: '<null>', f22_m: '<string>', f23_w: '<boolean>', f24_h: '<array>', f25_d: '<array>', f26_c: '<array>', f27_b: '<array>', f28_c: '<number>', f29_k: '<array>', f30_z: '<object>', f31_b: '<null>', f32_o: '<null>', f33_e: '<array>', f34_u: '<array>', f35_c: '<null>', f36_l: '<number>', f37_u: '<string>', f38_s: '<array>', f39_e: '<boolean>', f40_i: '<string>', f41_m: '<boolean>', f42_i: '<number>', f43_m: '<number>', f44_r: '<object>', f45_i: '<number>', f46_x: '<number>', f47_a: '<string>', f48_o: '<string>', f49_q: '<number>', f50_o: '<string>', f51_t: '<array>', f52_w: '<string>', f53_r: '<number>', f54_n: '<object>', f55_d: '<null>', f56_t: '<null>', f57_m: '<boolean>', f58_r: '<boolean>', f59_n: '<object>', f60_f: '<string>', f61_x: '<null>', f62_z: '<null>', f63_g: '<number>', f64_e: '<object>', f65_k: '<object>', f66_c: '<number>', f67_s: '<null>', f68_w: '<number>', f69_y: '<string>', f70_v: '<string>', f71_t: '<boolean>', f72_f: '<number>', f73_s: '<object>', f74_j: '<null>', f75_b: '<number>', f76_e: '<number>', f77_p: '<array>', f78_m: '<null>', f79_y: '<object>', f80_p: '<null>', f81_v: '<object>', f82_z: '<boolean>', f83_f: '<boolean>', f84_y: '<string>', f85_p: '<boolean>', f86_j: '<array>', f87_w: '<array>', f88_q: '<object>', f89_d: '<array>', f90_k: '<boolean>', f91_s: '<number>', f92_w: '<null>', f93_k: '<null>', f94_h: '<number>', f95_o: '<boolean>', f96_d: '<object>', f97_f: '<number>', f98_y: '<string>', f99_c: '<null>', f100_o: '<number>', f101_w: '<array>', f102_d: '<boolean>', f103_w: '<object>', f104_i: '<object>', f105_h: '<null>', f106_t: '<object>', f107_a: '<boolean>', f108_n: '<array>', f109_r: '<object>', f110_x: '<boolean>', f111_e: '<number>', f112_p: '<string>', f113_c: '<boolean>', f114_r: '<boolean>', f115_y: '<array>', f116_y: '<array>', f117_z: '<null>'}, 'QUTxfecEbdHqFflUmquaCWaZLtKPqpisSCbQxHaTmKeVcMabMqzkSCzPlpHONAYtUlrAqcftcFzGfbnGACGWIzAqIqDAKVK');
    var count_2;
    try{
        KeyRange_2 = IDBKeyRange.only('lxwvcElZeeIfwgQOMxGtCoQvTXjVZeKxxXrZavBLftbCJzsgMNJhbRsYRbzOwVbOZMfLnArtYOGchmnTDTaBhIiBDkrVEMLVnXXIHlVcYnPJTufHPNurOCtZxbIqfuSDihXJJLWEmpHKJtyfMmyORDtNCMcnMMiDEDZCHrsdLwAcQGVAXXAYebkfpUOOFwrFHUSVapjbbCwbKRyZIgIQbkRJbsIzRtUbTjPuUQYYLIVVRNtGZdqhZVrJvxRSCgWnDGEhFZAXbNnkKpxbQGuqgYhkEyUthmuNQfSSHZTjjKPDpXiMAAGdEtHElhwMPFKyUCtonaAyEEqxLJVVUfoErPSqXHolBVEoyaLrqxmwECKINTdNSRsTkqGWUfREiaoJCGmtfjDQomryfSdvXlpwBBeHaUAUnpBvkawyDDaSdlpJnzAsROXCmpnjzcLpFruIaNuEwdmrbqJfDcHciwUebwracoLUDiZZbyzCzOsCXhuArkTnxdeeLltweEwIgaqRrCRhZgaboAKoqqkdEnPJCOeyKgQincjRcvLDsPIgbUQynYjNONJHurwkPGMlcAmpiYkknXoGBawcJoIDEJZWtiJjZGFdHMWaDQMSaosVuhkqwK');
        count_2 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_b: '<boolean>', f1_y: '<null>', f2_t: '<null>'}, 'rWRhRnhzRfddQplqpHCkiIEqPtIzwWVRpUYttOQNHuRacEokgiWJGHmsKwYxetYxtRGUvAiZiMGdtTvlsSEWloNxnwKLMFpnUTeTwAmnDMVwjdBbdFKmeUYTyoRkdtScHdhVDasNFmMRmHKVsEXIYxKsAbYxYJwonQYecoBornCoprsGKEDRjcBAenmLfnaLijVIJIgTmZuvgNREdxPlFjoGPFNJehqSwZKIlHswpndUiCLvGpagdEpKOVxQqYhyGqdiZhziUysrxJEzVfvMlXjPWKWiCaSlqPxCMLiHynaunxyGyLaoWNOAjYJsfDQpeHvOxQRcWUJGwVWMROiQrBvyPQebgavoqYdxibdxsqcQBjSZWXuCxdeiidmHvuoPuDiqpKliGdSwSeLddUfugsrANNoyNMrYxVdklqjtCNUwqYMMhjUXBpGblUTcigxmBkxVopSwnIukEQhNycKbgWqWysRxfBcZmxvfxBvmFgQkNIVHJwwV');
    var put_1 = objectStore_0.put({f0_n: '<boolean>', f1_v: '<number>'}, 'wXpoKmlQtzOjBzNkdRCIlonbkxxjkLwuuwgVBjFZJoEfZLBlnfigPMPDlaRkfTAnmcSppSaFTcuJwlJxszGAiZwXheztNZaXvVbaDxaFglZVWPksyhZJVeTqGGJLCqqWFkoVECjYaVczjHcGeDYhveWVFWhqOmGwwObEFFPYespbVebAtiBtKZtMAmoaUYnAOygubbxYwDmMwzfvXXqELivdXezCxmXUdZTwDIzeJncncGjXFxkpQWZUwPMcBwAUMFfWJaUdMYamAohXhDPPOPYYUuNQAiOrviNtGKeApHcweiEKzlKeSDBZNVKCWgZVliVdcaPMpqckccGwaevEpUXhFqMEdZfYHeSSBBDeDsCvyJJWSKoGSnkOvygESeikMyAJlqJYPRAQzBLHKMXVZnaJEGselBAKLCdxYwEvMJkbFghxeRusvKnBFsqJAImTqUGmXedHEKSUpLEGBNwkqFNugTJhQYkKrevvuxDAoDdrYOlBmVSaDVZByTLEQMscHuQbtzZfilwUxeHvIwxpnhULBsdQCgEvysgORYDdfjVdKJzOIjOjHSWUvwYgOqVIhSmorJlqdkcgvuHEoEertqMqz');
    db.deleteObjectStore('objectStore_1925')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_1237')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};