let db;
db.close()
const openRequest = window.indexedDB.open('str_2045', 6424288693556100)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1147');
    var put_0 = objectStore_0.put({f0_a: '<number>', f1_f: '<array>', f2_o: '<null>', f3_x: '<null>', f4_i: '<object>', f5_z: '<array>', f6_q: '<array>', f7_b: '<boolean>', f8_q: '<string>', f9_n: '<array>', f10_d: '<boolean>', f11_k: '<string>', f12_s: '<string>', f13_t: '<number>', f14_h: '<boolean>', f15_d: '<boolean>', f16_u: '<string>', f17_g: '<boolean>', f18_n: '<boolean>', f19_r: '<string>', f20_s: '<boolean>', f21_h: '<object>', f22_l: '<array>', f23_f: '<object>', f24_g: '<array>', f25_s: '<boolean>', f26_z: '<object>', f27_h: '<string>', f28_n: '<object>', f29_p: '<object>', f30_b: '<array>', f31_w: '<string>', f32_x: '<number>', f33_j: '<null>', f34_j: '<object>', f35_n: '<null>', f36_i: '<object>', f37_m: '<string>', f38_j: '<array>', f39_x: '<boolean>', f40_c: '<string>', f41_g: '<array>', f42_d: '<boolean>', f43_a: '<object>', f44_s: '<string>', f45_u: '<number>', f46_m: '<number>', f47_d: '<null>', f48_f: '<number>', f49_f: '<object>', f50_r: '<array>', f51_h: '<boolean>', f52_m: '<string>', f53_e: '<object>', f54_v: '<array>', f55_u: '<null>', f56_t: '<string>', f57_n: '<object>', f58_l: '<null>', f59_c: '<null>', f60_t: '<array>', f61_d: '<boolean>', f62_s: '<object>', f63_q: '<number>', f64_l: '<number>', f65_i: '<number>', f66_z: '<object>', f67_r: '<string>', f68_i: '<boolean>', f69_j: '<number>', f70_y: '<null>', f71_l: '<string>', f72_h: '<object>', f73_b: '<number>', f74_v: '<number>', f75_q: '<string>', f76_h: '<array>', f77_d: '<array>', f78_b: '<boolean>', f79_f: '<object>', f80_e: '<string>', f81_h: '<boolean>', f82_b: '<boolean>', f83_a: '<array>', f84_k: '<string>', f85_r: '<boolean>', f86_y: '<boolean>', f87_o: '<string>', f88_r: '<object>', f89_t: '<number>', f90_u: '<number>', f91_y: '<null>', f92_c: '<null>', f93_v: '<null>', f94_g: '<object>', f95_v: '<string>', f96_v: '<boolean>', f97_n: '<object>', f98_p: '<null>', f99_h: '<array>', f100_v: '<object>', f101_g: '<number>', f102_y: '<number>', f103_e: '<boolean>', f104_p: '<array>', f105_u: '<null>', f106_f: '<object>', f107_c: '<array>', f108_f: '<object>', f109_b: '<array>', f110_c: '<array>', f111_k: '<array>', f112_w: '<string>', f113_i: '<array>', f114_m: '<number>', f115_g: '<boolean>', f116_k: '<array>', f117_w: '<number>', f118_f: '<boolean>', f119_u: '<array>', f120_x: '<number>', f121_w: '<null>', f122_u: '<number>', f123_y: '<string>', f124_a: '<boolean>', f125_l: '<object>', f126_i: '<boolean>', f127_u: '<array>', f128_g: '<number>', f129_o: '<null>', f130_o: '<object>', f131_f: '<string>', f132_i: '<string>', f133_y: '<number>', f134_b: '<number>', f135_q: '<array>', f136_p: '<array>', f137_c: '<string>', f138_k: '<number>', f139_p: '<object>', f140_p: '<number>', f141_q: '<object>', f142_w: '<null>', f143_c: '<object>', f144_n: '<array>', f145_g: '<boolean>', f146_l: '<string>', f147_p: '<string>', f148_u: '<array>', f149_w: '<number>', f150_b: '<number>', f151_s: '<number>', f152_v: '<object>', f153_l: '<string>', f154_d: '<null>', f155_d: '<boolean>', f156_t: '<boolean>', f157_y: '<array>', f158_z: '<array>', f159_c: '<null>', f160_y: '<null>', f161_i: '<null>', f162_o: '<string>', f163_p: '<number>', f164_l: '<null>', f165_w: '<object>', f166_e: '<boolean>', f167_n: '<array>', f168_n: '<null>', f169_f: '<object>', f170_k: '<number>', f171_g: '<string>', f172_c: '<object>', f173_q: '<array>', f174_v: '<null>', f175_v: '<number>', f176_p: '<array>', f177_b: '<string>', f178_b: '<null>', f179_a: '<string>', f180_v: '<array>', f181_d: '<null>', f182_c: '<object>', f183_p: '<object>', f184_s: '<object>', f185_u: '<object>', f186_j: '<boolean>', f187_x: '<null>', f188_w: '<number>', f189_o: '<null>', f190_b: '<object>', f191_r: '<string>', f192_a: '<number>', f193_x: '<boolean>', f194_l: '<object>', f195_z: '<object>', f196_r: '<object>', f197_g: '<array>', f198_b: '<array>', f199_v: '<string>', f200_m: '<boolean>', f201_u: '<number>', f202_m: '<array>', f203_q: '<boolean>', f204_j: '<null>', f205_t: '<string>', f206_z: '<object>', f207_e: '<string>', f208_o: '<boolean>', f209_e: '<boolean>', f210_d: '<boolean>', f211_z: '<array>', f212_p: '<array>', f213_o: '<string>', f214_h: '<null>', f215_k: '<boolean>', f216_t: '<string>', f217_i: '<null>', f218_z: '<string>', f219_z: '<string>', f220_n: '<null>', f221_s: '<number>', f222_x: '<string>', f223_l: '<object>', f224_z: '<object>', f225_w: '<boolean>', f226_u: '<string>', f227_r: '<array>', f228_g: '<boolean>', f229_s: '<string>', f230_k: '<object>', f231_r: '<string>', f232_w: '<boolean>', f233_f: '<null>', f234_h: '<object>', f235_o: '<array>', f236_h: '<object>', f237_s: '<null>', f238_y: '<boolean>', f239_n: '<array>', f240_e: '<object>', f241_k: '<array>', f242_z: '<number>', f243_u: '<boolean>', f244_x: '<object>', f245_p: '<boolean>', f246_s: '<object>', f247_e: '<null>', f248_v: '<null>', f249_v: '<number>', f250_q: '<object>', f251_y: '<number>', f252_p: '<boolean>', f253_r: '<boolean>', f254_m: '<number>', f255_l: '<number>', f256_j: '<array>', f257_m: '<array>', f258_z: '<array>', f259_f: '<boolean>', f260_n: '<object>', f261_j: '<null>', f262_y: '<object>', f263_h: '<number>', f264_l: '<null>', f265_t: '<null>', f266_g: '<array>', f267_y: '<null>', f268_k: '<object>', f269_b: '<number>', f270_g: '<array>', f271_k: '<boolean>', f272_a: '<array>', f273_y: '<string>', f274_g: '<string>', f275_p: '<object>', f276_n: '<null>', f277_k: '<boolean>', f278_s: '<number>', f279_f: '<string>', f280_b: '<string>', f281_r: '<null>', f282_a: '<number>', f283_u: '<boolean>', f284_c: '<object>', f285_j: '<array>', f286_e: '<boolean>', f287_r: '<number>', f288_y: '<string>', f289_b: '<array>', f290_o: '<object>', f291_o: '<number>', f292_t: '<object>', f293_r: '<string>', f294_a: '<boolean>', f295_a: '<string>', f296_f: '<number>', f297_f: '<string>', f298_y: '<number>', f299_m: '<null>', f300_i: '<null>', f301_r: '<number>', f302_d: '<number>', f303_j: '<number>', f304_e: '<null>', f305_b: '<string>', f306_v: '<string>', f307_x: '<array>', f308_m: '<boolean>', f309_i: '<array>', f310_d: '<string>', f311_b: '<object>', f312_l: '<number>', f313_d: '<array>', f314_l: '<string>', f315_d: '<array>', f316_u: '<object>', f317_a: '<boolean>', f318_d: '<string>', f319_x: '<object>', f320_c: '<null>', f321_r: '<number>', f322_a: '<object>', f323_t: '<object>', f324_u: '<array>', f325_l: '<string>', f326_g: '<boolean>', f327_r: '<null>', f328_e: '<number>', f329_a: '<array>', f330_n: '<null>', f331_n: '<boolean>', f332_t: '<string>', f333_p: '<string>', f334_q: '<boolean>', f335_h: '<object>', f336_w: '<string>', f337_p: '<boolean>', f338_h: '<null>', f339_r: '<number>', f340_s: '<string>', f341_o: '<null>', f342_q: '<string>', f343_y: '<null>', f344_l: '<null>', f345_q: '<null>', f346_v: '<null>', f347_f: '<string>', f348_m: '<object>', f349_v: '<object>', f350_l: '<boolean>', f351_x: '<boolean>', f352_v: '<boolean>', f353_a: '<boolean>', f354_x: '<object>', f355_k: '<boolean>', f356_x: '<null>', f357_j: '<object>', f358_x: '<string>', f359_x: '<object>', f360_h: '<object>', f361_e: '<boolean>', f362_y: '<boolean>', f363_b: '<null>', f364_b: '<object>', f365_c: '<object>', f366_v: '<string>', f367_r: '<object>', f368_x: '<array>', f369_b: '<null>', f370_b: '<string>', f371_s: '<object>', f372_q: '<number>', f373_n: '<array>', f374_p: '<boolean>', f375_k: '<string>', f376_g: '<boolean>', f377_z: '<number>', f378_j: '<object>', f379_y: '<boolean>', f380_t: '<number>', f381_e: '<object>', f382_p: '<array>', f383_z: '<string>', f384_v: '<number>', f385_h: '<null>', f386_c: '<array>', f387_e: '<null>', f388_u: '<number>', f389_w: '<object>', f390_j: '<string>', f391_j: '<string>', f392_u: '<boolean>', f393_b: '<string>', f394_k: '<boolean>', f395_w: '<number>', f396_d: '<string>', f397_s: '<string>', f398_x: '<number>', f399_w: '<boolean>', f400_k: '<number>', f401_q: '<string>'}, 'rxPzMWVaoFkFzEtxIOeeVVTmhzstksBQpaTYZHVmYnHyZKYiITSHOcoiICbSrCUeaqnLhuWRVVRSxFMKbYAPmamckqWJjMATvGNuLmkntXjOQVjLbxQkwiGHWHhULGyAmioUpOiWaxsRTcDEFRYzNDlMCNKBiOvrKLQXjrxuaZuwXypWLNwNApWWkRCmfuOShAoLHeGmCFAJzJhZzcTeWfRECoOegQRmIyNJuGgKBmsOrfzcRHrKVfvOXqLNpm');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('rxPzMWVaoFkFzEtxIOeeVVTmhzstksBQpaTYZHVmYnHyZKYiITSHOcoiICbSrCUeaqnLhuWRVVRSxFMKbYAPmamckqWJjMATvGNuLmkntXjOQVjLbxQkwiGHWHhULGyAmioUpOiWaxsRTcDEFRYzNDlMCNKBiOvrKLQXjrxuaZuwXypWLNwNApWWkRCmfuOShAoLHeGmCFAJzJhZzcTeWfRECoOegQRmIyNJuGgKBmsOrfzcRHrKVfvOXqLNpm', 'rxPzMWVaoFkFzEtxIOeeVVTmhzstksBQpaTYZHVmYnHyZKYiITSHOcoiICbSrCUeaqnLhuWRVVRSxFMKbYAPmamckqWJjMATvGNuLmkntXjOQVjLbxQkwiGHWHhULGyAmioUpOiWaxsRTcDEFRYzNDlMCNKBiOvrKLQXjrxuaZuwXypWLNwNApWWkRCmfuOShAoLHeGmCFAJzJhZzcTeWfRECoOegQRmIyNJuGgKBmsOrfzcRHrKVfvOXqLNpm', true, false);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_1147')
    var objectStore_1 = db.createObjectStore('objectStore_1148', {keypath: 'qZwpHaHRQtgQEZUJYkZDFSPMeIqeFcvTMhMehvhpWyjvdGiWyMFOonKxsbTaszZostpdjTDFFuvbsgaspgfTVHUfYvLxnoApWJeVYnKaNqEVQprKaiQYmzefZJLcdsPZCpWMQIlPSPnKLArQhPiwyosXYtMWmLCTCVBtreUPialHOUmkRlzwFWOhCJEfsTMKrSqFhUtdwipLJTECTSiEIgjEoVyuIOqCYjmObvhtznVbuRrYVcLMzbchfHyFfRWpaiqamjTSnlfzPGjzHhddzCIsvpKlQaKkYVVrsmMfONSXCmuPbNarpxFHDcejpyXtNmhhiClndVJQfhvpDlrbjbDqoslMSomYfsPqWaSXFdVUiuAygtfYGQzGhIGPktVUFgLkQyxUHLhEvbTQouSgAaWhBdCMkwXzkwMiVKcPFpALzMdPzGmttcCtkfuoPTnLFbvttJUhxIdOrLtpuJPoDOHLOSwpLEOvGsbiEJUTiEbUOrZfKMLzPbkzyUgcbHOMRioRqzIqEjzQscwnCbLmjwbcbZZMcobKezBkqIkTEZIERaoioqzLFLcCUZKfrTcDYUhWHMHtNMPikvfwRNEtihkWfpHUIxulZqtNwsQXCiDKHsIQfQkXIIuyrBvYVilSCeQzkgEjxCsvNPIjoFKbONUusWpNFNHLFqUyaDOtXDrsevlLXnKMzirDAoWbTELlNoczmnMGgemxuHOVpaWujVVWYuHRCYgqItGcuiAeVyoFoURCStsAVwAFfbwMjvgBxIsSSXCkbVuflseYzZNjlQiobpZpXTwdwQIbwyhLkbHdFXLKHXYrzBsOArTHwFQtmFhHbnOWOPyNDmHXagiNfUAglqvTvgkvswxJsMhVRqdCmmReNMsDHpWpmXg'});
    var objectStore_2 = db.createObjectStore('objectStore_1149', {keypath: 'xjsniHyqWGiPWpmMJirKUiAPsdLsiUhOJwRdYWkcIMVlpdmBbkpJHgxVqQerxgKXTeKvnnueSeuHnCcCcuiQLYbRatYHOuzmGFFTUZJxffXDNaqHbzlWDwlGoCTmQmicJAhaffwmFdcoXWxnmqEwjbeLkerOJLHqaOthyOHgCGRzbOxmxHZVpuUcGlfJwCdYWlctqULcFhwLaNoqDweXMiblLyXdydbwmXISzckFmGPwqivOxPJsbdDwbLdgePTWsdawMGfuPQGNMHdLuxfGcskhQhujRMEzVVxhJVFpHeKRQrDFKOdkabYmTQxDYaOvmBqmNcJuaLlBlHXrmTdGLDRLFJBjEGADAkdtZXojphmVtVshGqJidlfNAoHNrwoaSjbweEMSlryokAEjsFIfZHMPceThiWjoJXJaxAKAObawqKIKApvHnGjjISWNcqAPwGvlgEnQVafyytPoLOwaCzXwHKOKYUtKpANeufoljphKkjqeBFIHWjZzlrNnWIMsVGktcTcUoREhGrEpRWpTlwWCffNkzdfBOwtTPBAxEhoIEJUOwyfwHGwJlkTMyfTsZSsDKJXDkUBtQKvrwerPSNcgRvNugsXVZZDvujDVsPTxmCRJyhueyNLvuCPBAvsFznKqvFHJrHjuDPHRahCqBlnwjRGyjUgrDdkcnef', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1730 = db.transaction(['objectStore_1149', 'objectStore_1148'], 'readonly', {durability:"strict"})
    var objectStore_1148 = txn_1730.objectStore('objectStore_1148');
    txn_1730.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1730.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1730.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1731 = db.transaction(['objectStore_1148'], 'readonly', {durability:"strict"})
    var objectStore_1148 = txn_1731.objectStore('objectStore_1148');
    txn_1731.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1731.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1731.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1732 = db.transaction(['objectStore_1148', 'objectStore_1149'], 'readonly', {durability:"relaxed"})
    var objectStore_1149 = txn_1732.objectStore('objectStore_1149');
    txn_1732.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1732.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1732.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1733 = db.transaction(['objectStore_1149', 'objectStore_1148'], 'readonly', {durability:"default"})
    var objectStore_1148 = txn_1733.objectStore('objectStore_1148');
    txn_1733.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1733.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1733.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1734 = db.transaction(['objectStore_1148', 'objectStore_1149'], 'readonly', {durability:"relaxed"})
    var objectStore_1149 = txn_1734.objectStore('objectStore_1149');
    txn_1734.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1734.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1734.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6622')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};