let db;
const openRequest = window.indexedDB.open('str_3847', 5941305232678026)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1318', {keypath: 'fwhLIrHQAIsyNObWXjfBRlZAOpjStGCUtuXburHECQJkCLJKNPARkoVwGKIa', autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_0.clear();
    var index_881 = objectStore_0.createIndex('index_881', 'test', {unique: false, multiEntry: false});
    var index_882 = objectStore_0.createIndex('index_882', 'test', {unique: false, multiEntry: false});
    var clear_4 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_1319', {autoIncrement: true});
    var clear_5 = objectStore_1.clear();
    var index_883 = objectStore_0.createIndex('index_883', 'test', {unique: false});
    var clear_6 = objectStore_0.clear();
    var index_884 = objectStore_1.createIndex('index_884', 'test', {unique: true});
    var index_885 = objectStore_0.createIndex('index_885', 'test', {unique: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1985 = db.transaction(['objectStore_1318'], 'readonly', {durability:"strict"})
    var objectStore_1318 = txn_1985.objectStore('objectStore_1318');
    var index_0 = objectStore_1318.index('index_885');
    txn_1985.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1985.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1985.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1986 = db.transaction(['objectStore_1318', 'objectStore_1319'], 'readwrite', {durability:"strict"})
    var objectStore_1318 = txn_1986.objectStore('objectStore_1318');
    var add_0 = objectStore_1318.add({f0_a: '<null>', f1_t: '<array>', f2_v: '<number>', f3_b: '<number>', f4_a: '<null>', f5_u: '<string>', f6_j: '<object>', f7_g: '<array>', f8_n: '<string>', f9_u: '<null>'}, 'YYHVtXzKvMIdjSUJSgDWDEplmfTwluhVhOvoOOaLeHQalRWXrhmZZuDFXiQUlPSjIOiWqRPBsKTbEfvuvFsUHClvxfISIGwyplcywJzonTZUDWbhfiDrEUGEuhnMzJbOMXGugzNfJpAyVUyNwJFeHDYUvJZqzhmYNmbYMrGsnONsJEkzkQevLmDxsIgDjsQOBfDkmYtbrBYRZubtiZqgIumvrFIuiIMqktMbSOMwvtuYgLOsJkQrVUiWaPGlXJQaYgHVYntEFzZjUJmywdyOKttoyDUiweGPgVGZfcrHldvZEchIzodasCiYEpuMamlPNskhGhXNRdxtGuHKGdQtTswoUEmaZMPXSOGlKuKBrpXWWTFDKiQZpZCSnYDejrRCbDqAQFuAIBbsddOjFBSEtHwwhDglNpAqFsPnOPzhvTSEWUUKaxUOybNBgRyePsaZzbOjiSlqcmtQwwv');
    var clear_7 = objectStore_1318.clear();
    var count_0 = objectStore_1318.count();
    var clear_8 = objectStore_1318.clear();
    var count_1 = objectStore_1318.count();
    var add_1 = objectStore_1318.add({f0_w: '<boolean>', f1_q: '<array>', f2_p: '<object>', f3_d: '<null>', f4_w: '<object>', f5_w: '<number>', f6_i: '<null>', f7_m: '<number>', f8_k: '<null>', f9_o: '<number>'}, 'RSGaLippjADNleoEJStgrmFFKjJUfXPjaJESKaoRiykVjqmQYfzHTHkzTlWlHPiwjXlZdOEcTbQMCACtwfTWKugUnKQjNhyYeLJDbwubHFbydjWyKpIcKSPnFTZcatHlOcGzEksFRPUpQInANDDajKaLcngAzwHIZElxqxSLAuiikkIYCzuPwovdzlRlEcsEqhpeADOaVmiylVRmfuQgjJxinzUxsSVbfAREkUIIRzDtypflzprkapfZlZcBrOALrHXFoFBpwwoUwLPWTNMYrkOZZKVUJqFSdAJRSMlwxoQskmXodQzAeZXKdUZyjPGManjweRtuEDjbuFtMzJkOPCZSKckUQcIoqekIPzxorob');
    var add_2 = objectStore_1318.add({f0_r: '<boolean>', f1_e: '<array>', f2_h: '<string>', f3_n: '<boolean>', f4_q: '<string>', f5_x: '<null>', f6_l: '<boolean>', f7_v: '<object>', f8_v: '<boolean>', f9_k: '<boolean>'}, 'DzsqFYjjxIhauRqRwcQhuDaTuGmaNxjqbWHyYhrEXaEdGgeicYViSIuPRiCOqpgqEfuZYLtDYOutEajCYVpebqGfJzFUoBnVJxyycVeSrquYzbefIZOXWmxMJmuVrVuobfCniYzdhVDgFsHfKRqMTiBjQDjJGLxanFdXwPfkdVAlXXmIMYRuALdOcGthCzTxjlVyJclhoSlUQdqJMovVGkrSoHBTvJctTrJXTxjppJTNGpcVxHRzhByzqFobyIzWSOSgsncHxZvhOegpVulpFXfzooqSThBYQlWprPhJRzVEkwLRaORoataBicxwDKTGlTLkuoMxFiXOVIlPJaVNdvpitlRkRkfuabzlQUjvcroUrKeMzOusGMXcRrmHCkugYiwqkJKsnOtBBSnyBseXFZGqJLRZHBDtPBvaSDBwxJyMSSYEuwkLFJwoyUBYOgslamfsnyVbNUQcFhpligezZCgPFtQCeyrDibFJCBKzpwHubYGbUzawajxQNoSXmKDfQklmCnSbKVFOuUMrFBYfcbhzCoLOXbBbFmRwoybSALCVZnJWnCMuhuaYBIGRUdTfyjaamcntxhxUAuBJYjMBkDFkByoumXbxCXDjrwvjVmWzWtyfwkmHLDUZwsqnabdmfaVKXrOvbkhcRBACoeTwFNKkPkXQnEwxewABIFpWZNTwzdhgCVVRlCRibZqaHUcDlxwYrOQqwvLNqmaXnlHdFQJJbvtthUfFFDjNfkOvfarfXEGswoacPcSlVujKfDtrUvvlMWDVzJDIMVEmdyETycJjwgCyFglat');
    var clear_9 = objectStore_1318.clear();
    var put_0 = objectStore_1318.put({f0_l: '<object>', f1_p: '<number>', f2_j: '<string>'}, 'NueyspEMbwrXToCbkQYjMVUuupZfCtoQgASrbbTELYfFWKrEdRNhZRbFyPSiUzvGPqakHtuUpTHHHoAqYKPZpzBkTLGPrvYZOsfjxKWgxWsZrvtVzmUeYDlwLtTrwofIWKIkdKA');
    var add_3 = objectStore_1318.add({f0_q: '<array>', f1_v: '<null>', f2_j: '<object>'}, 'WmpKhiptbjkKzjFkinOhfRgzuikpPVskgpuJIIjtXumkoEfsOtIuGjTEDjKttRboxxiCfSoWhrqbrlElJrXkHzVDKHCZIIHWtYqsXQOWpxKbuflBXkdgXckiJjdbEWXyIYx');
    var count_2;
    try{
        KeyRange_0 = IDBKeyRange.bound('RSGaLippjADNleoEJStgrmFFKjJUfXPjaJESKaoRiykVjqmQYfzHTHkzTlWlHPiwjXlZdOEcTbQMCACtwfTWKugUnKQjNhyYeLJDbwubHFbydjWyKpIcKSPnFTZcatHlOcGzEksFRPUpQInANDDajKaLcngAzwHIZElxqxSLAuiikkIYCzuPwovdzlRlEcsEqhpeADOaVmiylVRmfuQgjJxinzUxsSVbfAREkUIIRzDtypflzprkapfZlZcBrOALrHXFoFBpwwoUwLPWTNMYrkOZZKVUJqFSdAJRSMlwxoQskmXodQzAeZXKdUZyjPGManjweRtuEDjbuFtMzJkOPCZSKckUQcIoqekIPzxorob', 'DzsqFYjjxIhauRqRwcQhuDaTuGmaNxjqbWHyYhrEXaEdGgeicYViSIuPRiCOqpgqEfuZYLtDYOutEajCYVpebqGfJzFUoBnVJxyycVeSrquYzbefIZOXWmxMJmuVrVuobfCniYzdhVDgFsHfKRqMTiBjQDjJGLxanFdXwPfkdVAlXXmIMYRuALdOcGthCzTxjlVyJclhoSlUQdqJMovVGkrSoHBTvJctTrJXTxjppJTNGpcVxHRzhByzqFobyIzWSOSgsncHxZvhOegpVulpFXfzooqSThBYQlWprPhJRzVEkwLRaORoataBicxwDKTGlTLkuoMxFiXOVIlPJaVNdvpitlRkRkfuabzlQUjvcroUrKeMzOusGMXcRrmHCkugYiwqkJKsnOtBBSnyBseXFZGqJLRZHBDtPBvaSDBwxJyMSSYEuwkLFJwoyUBYOgslamfsnyVbNUQcFhpligezZCgPFtQCeyrDibFJCBKzpwHubYGbUzawajxQNoSXmKDfQklmCnSbKVFOuUMrFBYfcbhzCoLOXbBbFmRwoybSALCVZnJWnCMuhuaYBIGRUdTfyjaamcntxhxUAuBJYjMBkDFkByoumXbxCXDjrwvjVmWzWtyfwkmHLDUZwsqnabdmfaVKXrOvbkhcRBACoeTwFNKkPkXQnEwxewABIFpWZNTwzdhgCVVRlCRibZqaHUcDlxwYrOQqwvLNqmaXnlHdFQJJbvtthUfFFDjNfkOvfarfXEGswoacPcSlVujKfDtrUvvlMWDVzJDIMVEmdyETycJjwgCyFglat', true, false);
        count_2 = objectStore_1318.count(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_1318.put({f0_t: '<boolean>', f1_o: '<boolean>', f2_r: '<object>', f3_f: '<object>', f4_j: '<boolean>', f5_c: '<object>', f6_q: '<null>', f7_c: '<object>', f8_i: '<boolean>', f9_t: '<null>', f10_r: '<boolean>', f11_o: '<boolean>', f12_i: '<array>', f13_e: '<boolean>', f14_c: '<object>', f15_w: '<boolean>', f16_d: '<boolean>', f17_a: '<number>', f18_o: '<string>', f19_l: '<object>', f20_m: '<object>', f21_k: '<number>', f22_c: '<object>', f23_b: '<string>', f24_p: '<array>', f25_x: '<array>', f26_g: '<boolean>', f27_i: '<boolean>', f28_s: '<null>', f29_i: '<object>', f30_v: '<number>', f31_e: '<object>', f32_j: '<array>', f33_c: '<null>', f34_h: '<boolean>', f35_u: '<array>', f36_d: '<object>', f37_o: '<null>', f38_d: '<boolean>', f39_q: '<null>', f40_s: '<boolean>', f41_h: '<array>', f42_h: '<number>', f43_a: '<object>', f44_m: '<array>', f45_l: '<number>', f46_y: '<array>', f47_s: '<boolean>', f48_j: '<number>', f49_p: '<boolean>', f50_j: '<null>', f51_m: '<object>', f52_r: '<array>', f53_t: '<string>', f54_m: '<boolean>', f55_f: '<string>', f56_q: '<object>', f57_n: '<string>', f58_k: '<object>', f59_p: '<array>', f60_l: '<number>', f61_k: '<object>', f62_t: '<number>', f63_o: '<object>', f64_e: '<null>', f65_u: '<boolean>', f66_c: '<number>', f67_w: '<object>', f68_a: '<boolean>', f69_a: '<array>', f70_u: '<array>', f71_h: '<object>', f72_v: '<array>', f73_c: '<null>', f74_b: '<string>', f75_y: '<string>', f76_j: '<null>', f77_w: '<null>', f78_e: '<boolean>', f79_g: '<boolean>', f80_r: '<boolean>', f81_w: '<null>', f82_u: '<boolean>', f83_b: '<array>', f84_h: '<array>', f85_l: '<string>', f86_f: '<null>', f87_w: '<number>', f88_r: '<boolean>', f89_d: '<number>', f90_t: '<number>', f91_t: '<boolean>', f92_q: '<string>', f93_m: '<null>', f94_v: '<null>', f95_f: '<array>', f96_s: '<array>', f97_c: '<null>', f98_a: '<object>', f99_m: '<null>', f100_v: '<number>', f101_e: '<array>', f102_i: '<number>', f103_o: '<null>', f104_r: '<string>', f105_v: '<object>', f106_k: '<string>', f107_i: '<string>', f108_x: '<boolean>', f109_t: '<number>'}, 'GmQtQfrpfCWWcMIEBkzOqyFyOQTdofWHPZLaYqmZsmDnLWnXzvprFhIucJzfmEGNlaatldJCxyAohYARxMuOMXokJtswSSfBPHExttCsSKOaSVnAqscuoepvwtNSwJOXDgANPvQvuXkEbJiVjfQnnHiHprWeIqRbxUWnJdPzqEmUpufjyqaxDWwopZSgzLSffbWcaIWjaOAIwnECgCHFqgZNYSKKYnVEgyedjBInogKbXaamnctrwWBfFzwiwDWVBcRijBHCCfozZvxijPFrUEsqYnLGXYRaawbhtPSbBsfhZJLlifORrShcJOYBcAmXrPvVCrUpEXKyiZmVgaAbpssNZdOzJUgNGEQaUgxkSlboFZEGzptltKlmGOmRjXAeeUoSOHlZmfinMHxkBiHGErELUOhrXDKXivcvUMofWZdelGFLBDwJqmRXDLNvBzRFpGGlrlJaNQTfegtFyyBzTtIJeXtexLKSvdUqtPhNzmngbrnygAxyYXkITuxaruKiMsSyInGBncrhyiolbjxjyMKOegqLeiOIYFwkqQKpUZGjWbOrwYlrqqHZDhbhxBcyuLdMkpQHRcGDImKmIquLuNBKAGLxfIgLpELDQzkrzWVoGwPNltxWzvAGcNfqYJNQFflTgdREourRFfXUjmxZKBNzMsPMdQnRMdQJBBtHvPYQhnAkmsbCDBAmvegejASEZRqQISNzJvoaiSrbTgIGyFAFMDDUbSoFePsmGknWsigcgIeZEyGvpKckKbSwJTSPsxUo');
    txn_1986.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1986.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1986.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1987 = db.transaction(['objectStore_1319', 'objectStore_1318'], 'readonly', {durability:"default"})
    var objectStore_1319 = txn_1987.objectStore('objectStore_1319');
    var index_1 = objectStore_1319.index('index_884');
    txn_1987.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1987.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1987.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1988 = db.transaction(['objectStore_1318', 'objectStore_1319'], 'readwrite', {durability:"strict"})
    var objectStore_1318 = txn_1988.objectStore('objectStore_1318');
    var put_2 = objectStore_1318.put({f0_v: '<object>', f1_z: '<number>', f2_w: '<null>', f3_a: '<string>', f4_f: '<array>', f5_j: '<string>', f6_v: '<string>'}, 'bXnmmRwfGyetbSCivanbDJcbYLRSqZKBFrRuYIJCThxCHXnSJdiyvfabTaXSIVqDWAToRYrBCkBFCsZtPuYPymNKZGsyTuupxPaWfNGdPgMEvmFRpDTvCWophpRUKtbDBjvFfrylYaqdKzHDIEKUXZFcjbJzJjvDaVvBgcXUQnlWmjdFaaWrvhqzRKGICEKQFIFuIvLGCRSHDSkTHJajqsvRYEAMIsfVnYaqOdUNNbLLuRfcusdMHVsEYHCpbIOZGVieSoCQwxFaJDObYVMIRSGDOHMlriOMuBDogocqSIxPcDPemJYqmDfXQUebemMzPaHWfcORdEAvoFhKEhjltyleuTXooDdzwUYmbzmdsmGBtuQIAltfYLoGmdbAtUhUfzUTiZfznwHbzHGYMjOmBykPMMKGDGzebgxpAFLifloDNygesffyWwPPQFweiQBzHuRWuRnuAoPSlHeAHUkQbnipSrGvZLjllgqpAWrpqEhxYGSfzVFXMpqetDsqXgQgjRSXUdLRCENmHXZdAlnEuenstitrCPbPXqegmxYnqiWjLEoDdfykXoJWHryuviwiANXrsFw');
    var add_4 = objectStore_1318.add({f0_d: '<string>', f1_m: '<string>'}, 'fbqlxxgFtrDyTqnCqiUBPYRDqvciADJksQuTNMjLdmUstNKmkIdpCoBxMvEmUSUnZNFxdfmxnZiLdFVrbfkVPAjMliOXqgaMAqFgIsbzxKRkDsTNORqvuzkLmJLwLqBpbwBP');
    var getAll_0 = objectStore_1318.getAll();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('RSGaLippjADNleoEJStgrmFFKjJUfXPjaJESKaoRiykVjqmQYfzHTHkzTlWlHPiwjXlZdOEcTbQMCACtwfTWKugUnKQjNhyYeLJDbwubHFbydjWyKpIcKSPnFTZcatHlOcGzEksFRPUpQInANDDajKaLcngAzwHIZElxqxSLAuiikkIYCzuPwovdzlRlEcsEqhpeADOaVmiylVRmfuQgjJxinzUxsSVbfAREkUIIRzDtypflzprkapfZlZcBrOALrHXFoFBpwwoUwLPWTNMYrkOZZKVUJqFSdAJRSMlwxoQskmXodQzAeZXKdUZyjPGManjweRtuEDjbuFtMzJkOPCZSKckUQcIoqekIPzxorob', 'WmpKhiptbjkKzjFkinOhfRgzuikpPVskgpuJIIjtXumkoEfsOtIuGjTEDjKttRboxxiCfSoWhrqbrlElJrXkHzVDKHCZIIHWtYqsXQOWpxKbuflBXkdgXckiJjdbEWXyIYx', true, false);
        getAllKeys_0 = objectStore_1318.getAllKeys(KeyRange_2, 1051218707);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('DzsqFYjjxIhauRqRwcQhuDaTuGmaNxjqbWHyYhrEXaEdGgeicYViSIuPRiCOqpgqEfuZYLtDYOutEajCYVpebqGfJzFUoBnVJxyycVeSrquYzbefIZOXWmxMJmuVrVuobfCniYzdhVDgFsHfKRqMTiBjQDjJGLxanFdXwPfkdVAlXXmIMYRuALdOcGthCzTxjlVyJclhoSlUQdqJMovVGkrSoHBTvJctTrJXTxjppJTNGpcVxHRzhByzqFobyIzWSOSgsncHxZvhOegpVulpFXfzooqSThBYQlWprPhJRzVEkwLRaORoataBicxwDKTGlTLkuoMxFiXOVIlPJaVNdvpitlRkRkfuabzlQUjvcroUrKeMzOusGMXcRrmHCkugYiwqkJKsnOtBBSnyBseXFZGqJLRZHBDtPBvaSDBwxJyMSSYEuwkLFJwoyUBYOgslamfsnyVbNUQcFhpligezZCgPFtQCeyrDibFJCBKzpwHubYGbUzawajxQNoSXmKDfQklmCnSbKVFOuUMrFBYfcbhzCoLOXbBbFmRwoybSALCVZnJWnCMuhuaYBIGRUdTfyjaamcntxhxUAuBJYjMBkDFkByoumXbxCXDjrwvjVmWzWtyfwkmHLDUZwsqnabdmfaVKXrOvbkhcRBACoeTwFNKkPkXQnEwxewABIFpWZNTwzdhgCVVRlCRibZqaHUcDlxwYrOQqwvLNqmaXnlHdFQJJbvtthUfFFDjNfkOvfarfXEGswoacPcSlVujKfDtrUvvlMWDVzJDIMVEmdyETycJjwgCyFglat');
        getAllKeys_0 = objectStore_1318.getAllKeys(KeyRange_3);
    }

    var put_3 = objectStore_1318.put({f0_u: '<null>', f1_r: '<string>', f2_f: '<null>', f3_b: '<object>'}, 'nNgxrXqSctLeUNGcsbOLCvmijRlPaYWbKXEZDdfdyBaweIJhiJzwHVLtvxFqwbnkDndpqDzYgZXuyNRGdsRJkhXTsiQgpjvaBFWvoMgYLTujHTNWEIQALvgnYwIcCWBzKakSbdJQTlddYFDVrrJEPQyuRwRYFlLGXdKVHVFnTTbeFdriJGOlwuOirnWBebJjtohFlyoVFFnTGaKjtwsehgDvRcqpIXVKxtWLmGDEhWNdebhCGyTPRfbNTPnjekwxGmwRrVYCLdbCfEvQgnGXXtxtJnVipRvtoZIQTPYNGeeMuZeeGmIAUZkfgpHNvIeGbgALvWynOPtKzPLFypbQzOiQBFYTotSjszlDEYHbByUyyqmbGEzpzYqkYbAXWQmiFdtMaAPLqollopLIpXgCkHCVqoLbiPqKxaDcuQQIcbFfXgbkIpdoaqgPMAzMaNenjwKXMUyNIFfGuylvjiOEyJDmRvQBDDMkWwKYJnYaTSMMFFlNaBvmtSbREjlQlyHfEpkeCvZXEfcqDKMxQGZjdHLjJEhNoSQnEjTQYKAwvrKnwFGxyCxjnlVNJBLgTYDeCoeySCyGTCuupLLgjPUslOqORtEWAcPTPwzijbJbnuZmtfAOyhrzBWudbZqSYIhEjaDYVXkSNnjjyCmrrAiqnoSGykGxWISAyHRNKfBITpkfPYQTZIFMVuWtobXKMYBRoqUEnyzroIJGTGnGYBIcNBRQeUvqSYxStIKLwsaMlnYuwjwItYyusGRrnDHQMOuqLUgpYGqnROcIivHe');
    var clear_10 = objectStore_1318.clear();
    var clear_11 = objectStore_1318.clear();
    var put_4 = objectStore_1318.put({f0_c: '<boolean>', f1_h: '<number>', f2_h: '<null>', f3_z: '<null>', f4_g: '<string>', f5_v: '<object>', f6_a: '<number>', f7_v: '<null>', f8_b: '<null>', f9_z: '<boolean>', f10_b: '<object>', f11_t: '<boolean>', f12_f: '<string>', f13_f: '<object>', f14_k: '<boolean>', f15_d: '<boolean>', f16_k: '<array>', f17_d: '<number>', f18_i: '<boolean>', f19_j: '<string>', f20_q: '<object>', f21_w: '<boolean>', f22_h: '<array>', f23_w: '<number>', f24_a: '<boolean>', f25_y: '<string>', f26_u: '<string>', f27_q: '<number>', f28_l: '<boolean>', f29_t: '<array>', f30_o: '<object>', f31_l: '<boolean>', f32_h: '<object>', f33_y: '<string>', f34_w: '<string>', f35_o: '<string>', f36_m: '<string>', f37_o: '<object>', f38_b: '<array>', f39_y: '<number>', f40_i: '<array>', f41_i: '<boolean>', f42_s: '<string>', f43_u: '<boolean>', f44_a: '<null>', f45_u: '<boolean>', f46_j: '<boolean>', f47_b: '<number>', f48_l: '<object>', f49_y: '<null>', f50_n: '<boolean>', f51_q: '<number>', f52_l: '<object>', f53_a: '<null>', f54_w: '<number>', f55_a: '<number>', f56_t: '<array>', f57_t: '<null>', f58_g: '<boolean>', f59_h: '<boolean>', f60_v: '<string>', f61_w: '<string>', f62_f: '<object>', f63_s: '<array>', f64_j: '<object>', f65_e: '<number>', f66_e: '<number>', f67_j: '<null>', f68_o: '<number>', f69_g: '<boolean>', f70_v: '<null>', f71_x: '<number>', f72_x: '<boolean>', f73_g: '<boolean>', f74_g: '<array>', f75_y: '<array>', f76_p: '<number>', f77_g: '<string>', f78_x: '<string>', f79_p: '<string>', f80_u: '<null>', f81_x: '<boolean>', f82_b: '<array>', f83_g: '<object>', f84_w: '<null>', f85_z: '<number>', f86_x: '<object>', f87_j: '<array>', f88_x: '<string>', f89_x: '<number>', f90_m: '<null>', f91_g: '<boolean>', f92_q: '<object>', f93_o: '<array>', f94_u: '<string>', f95_u: '<object>', f96_p: '<null>', f97_d: '<object>', f98_t: '<array>', f99_j: '<object>', f100_d: '<boolean>', f101_i: '<object>', f102_a: '<number>', f103_x: '<null>', f104_m: '<boolean>', f105_m: '<string>', f106_n: '<null>', f107_a: '<number>', f108_h: '<null>', f109_p: '<object>', f110_m: '<object>', f111_v: '<string>', f112_u: '<object>', f113_c: '<array>', f114_w: '<number>', f115_v: '<object>', f116_t: '<null>', f117_e: '<array>', f118_j: '<null>', f119_c: '<boolean>', f120_z: '<boolean>', f121_k: '<string>', f122_a: '<object>', f123_w: '<object>', f124_y: '<array>', f125_u: '<number>', f126_p: '<null>', f127_q: '<object>', f128_d: '<null>', f129_e: '<boolean>', f130_n: '<array>', f131_u: '<number>', f132_s: '<null>', f133_z: '<boolean>', f134_d: '<object>', f135_n: '<array>', f136_o: '<array>', f137_m: '<array>', f138_y: '<boolean>', f139_q: '<null>', f140_d: '<object>', f141_o: '<string>', f142_m: '<array>', f143_w: '<array>', f144_c: '<null>', f145_h: '<array>', f146_s: '<string>', f147_w: '<string>', f148_v: '<number>', f149_a: '<number>', f150_s: '<string>', f151_y: '<string>', f152_o: '<boolean>', f153_p: '<number>', f154_a: '<number>', f155_v: '<string>', f156_t: '<number>', f157_v: '<number>', f158_j: '<string>', f159_g: '<number>', f160_b: '<object>', f161_p: '<number>', f162_m: '<object>', f163_k: '<array>', f164_u: '<boolean>', f165_t: '<object>', f166_c: '<string>', f167_h: '<object>', f168_q: '<string>', f169_d: '<null>', f170_g: '<boolean>', f171_r: '<string>', f172_s: '<object>', f173_f: '<number>', f174_n: '<number>', f175_t: '<number>', f176_i: '<string>', f177_j: '<null>', f178_w: '<boolean>', f179_e: '<boolean>', f180_g: '<number>', f181_g: '<number>', f182_h: '<object>', f183_c: '<array>', f184_c: '<string>', f185_x: '<number>', f186_o: '<number>', f187_r: '<object>', f188_s: '<array>', f189_o: '<number>', f190_d: '<string>', f191_t: '<boolean>', f192_m: '<null>', f193_n: '<number>', f194_j: '<object>', f195_l: '<boolean>', f196_n: '<boolean>', f197_o: '<number>', f198_a: '<boolean>', f199_r: '<string>', f200_c: '<array>', f201_u: '<object>', f202_g: '<boolean>', f203_k: '<number>', f204_b: '<boolean>', f205_z: '<string>', f206_i: '<string>', f207_g: '<null>', f208_p: '<object>', f209_w: '<boolean>', f210_s: '<array>', f211_z: '<array>', f212_y: '<string>', f213_o: '<boolean>', f214_a: '<object>', f215_w: '<number>', f216_w: '<string>', f217_k: '<array>', f218_s: '<array>', f219_c: '<array>', f220_z: '<number>', f221_g: '<object>', f222_k: '<object>', f223_c: '<string>', f224_u: '<object>', f225_a: '<array>'}, 'nHzYziFQyAToiTzaydlPlCwZMEYnnskQrEpdLEltYvGKDoqtljQrCkRLRFJHWJnaLwGGMrwJJJjOtXjGG');
    var count_3;
    try{
        KeyRange_4 = IDBKeyRange.bound('NueyspEMbwrXToCbkQYjMVUuupZfCtoQgASrbbTELYfFWKrEdRNhZRbFyPSiUzvGPqakHtuUpTHHHoAqYKPZpzBkTLGPrvYZOsfjxKWgxWsZrvtVzmUeYDlwLtTrwofIWKIkdKA', 'YYHVtXzKvMIdjSUJSgDWDEplmfTwluhVhOvoOOaLeHQalRWXrhmZZuDFXiQUlPSjIOiWqRPBsKTbEfvuvFsUHClvxfISIGwyplcywJzonTZUDWbhfiDrEUGEuhnMzJbOMXGugzNfJpAyVUyNwJFeHDYUvJZqzhmYNmbYMrGsnONsJEkzkQevLmDxsIgDjsQOBfDkmYtbrBYRZubtiZqgIumvrFIuiIMqktMbSOMwvtuYgLOsJkQrVUiWaPGlXJQaYgHVYntEFzZjUJmywdyOKttoyDUiweGPgVGZfcrHldvZEchIzodasCiYEpuMamlPNskhGhXNRdxtGuHKGdQtTswoUEmaZMPXSOGlKuKBrpXWWTFDKiQZpZCSnYDejrRCbDqAQFuAIBbsddOjFBSEtHwwhDglNpAqFsPnOPzhvTSEWUUKaxUOybNBgRyePsaZzbOjiSlqcmtQwwv', true, true);
        count_3 = objectStore_1318.count(KeyRange_4);
    }
    catch (e){
    }

    txn_1988.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1988.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1988.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1989 = db.transaction(['objectStore_1319'], 'readonly', {durability:"default"})
    var objectStore_1319 = txn_1989.objectStore('objectStore_1319');
    txn_1989.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1989.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1989.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_720')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};