let db;
const openRequest = window.indexedDB.open('str_2414', 5141515150447883)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4550');
    var clear_0 = objectStore_0.clear();
    var index_3037 = objectStore_0.createIndex('index_3037', 'test');
    var index_3038 = objectStore_0.createIndex('index_3038', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_0.put({f0_h: '<null>', f1_n: '<boolean>', f2_n: '<number>', f3_n: '<number>'}, 'AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
    var index_3039 = objectStore_0.createIndex('index_3039', 'test', {unique: false, multiEntry: true});
    var add_0 = objectStore_0.add({f0_h: '<object>', f1_b: '<string>', f2_h: '<string>', f3_z: '<string>', f4_t: '<object>', f5_y: '<null>', f6_c: '<null>', f7_k: '<string>', f8_r: '<array>', f9_v: '<null>', f10_i: '<number>', f11_n: '<boolean>', f12_w: '<string>', f13_y: '<null>', f14_w: '<null>', f15_o: '<null>', f16_f: '<boolean>', f17_v: '<array>', f18_w: '<array>', f19_i: '<null>', f20_u: '<array>', f21_v: '<boolean>', f22_z: '<object>', f23_m: '<boolean>', f24_l: '<boolean>', f25_w: '<number>', f26_s: '<object>', f27_i: '<null>', f28_y: '<array>', f29_g: '<number>', f30_f: '<boolean>', f31_j: '<string>', f32_v: '<boolean>', f33_g: '<string>', f34_f: '<string>', f35_i: '<string>', f36_m: '<array>', f37_s: '<string>', f38_h: '<string>', f39_w: '<array>', f40_c: '<string>', f41_k: '<array>', f42_z: '<number>', f43_w: '<string>', f44_n: '<number>', f45_c: '<object>', f46_b: '<null>', f47_l: '<boolean>', f48_q: '<null>', f49_u: '<null>', f50_h: '<boolean>', f51_c: '<number>', f52_u: '<boolean>', f53_q: '<null>', f54_d: '<object>', f55_x: '<string>', f56_z: '<string>', f57_n: '<number>', f58_j: '<number>', f59_p: '<boolean>', f60_o: '<null>', f61_x: '<number>', f62_c: '<number>', f63_p: '<object>', f64_j: '<boolean>', f65_y: '<boolean>', f66_g: '<object>', f67_w: '<object>', f68_z: '<boolean>', f69_a: '<number>', f70_t: '<object>', f71_b: '<boolean>', f72_y: '<null>', f73_i: '<array>', f74_h: '<array>', f75_h: '<object>', f76_g: '<null>', f77_w: '<string>', f78_b: '<string>', f79_s: '<array>', f80_l: '<null>', f81_k: '<array>', f82_m: '<null>', f83_f: '<null>', f84_x: '<object>', f85_w: '<object>', f86_d: '<string>', f87_k: '<array>', f88_g: '<object>', f89_p: '<boolean>', f90_i: '<object>', f91_s: '<boolean>', f92_i: '<object>', f93_d: '<null>', f94_g: '<string>', f95_z: '<null>', f96_l: '<number>', f97_x: '<null>', f98_r: '<boolean>', f99_l: '<object>', f100_n: '<object>', f101_w: '<array>', f102_v: '<object>', f103_z: '<object>', f104_e: '<null>', f105_h: '<array>', f106_z: '<boolean>', f107_w: '<number>', f108_k: '<string>', f109_n: '<object>', f110_i: '<boolean>', f111_a: '<boolean>', f112_b: '<array>', f113_c: '<array>', f114_z: '<null>', f115_d: '<array>', f116_v: '<array>', f117_x: '<boolean>', f118_l: '<null>', f119_x: '<object>', f120_f: '<boolean>', f121_z: '<number>', f122_w: '<null>', f123_b: '<object>', f124_p: '<string>', f125_z: '<array>', f126_o: '<boolean>', f127_b: '<number>', f128_p: '<string>', f129_u: '<object>', f130_s: '<null>', f131_w: '<number>', f132_r: '<array>', f133_r: '<number>', f134_d: '<boolean>', f135_i: '<array>', f136_p: '<null>', f137_p: '<null>', f138_l: '<array>', f139_k: '<number>', f140_k: '<string>', f141_b: '<number>', f142_p: '<object>', f143_d: '<number>', f144_c: '<array>', f145_y: '<object>'}, 'VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn');
    var put_1 = objectStore_0.put({f0_d: '<null>', f1_k: '<boolean>'}, 'rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH');
    var count_0 = objectStore_0.count();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_v: '<boolean>', f1_p: '<array>', f2_p: '<null>', f3_c: '<array>', f4_o: '<object>', f5_t: '<null>', f6_f: '<array>', f7_g: '<null>', f8_x: '<null>'}, 'KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab');
    var put_2 = objectStore_0.put({f0_s: '<boolean>', f1_x: '<string>', f2_g: '<array>'}, 'mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn', false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.only('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
        delete_0 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var put_3 = objectStore_0.put({f0_h: '<boolean>', f1_l: '<boolean>', f2_f: '<null>'}, 'PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa');
    var count_1 = objectStore_0.count();
    var clear_1 = objectStore_0.clear();
    var count_2 = objectStore_0.count();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6855 = db.transaction(['objectStore_4550'], 'readwrite', {durability:"strict"})
    var objectStore_4550 = txn_6855.objectStore('objectStore_4550');
    var index_0 = objectStore_4550.index('index_3039');
    var count_3 = objectStore_4550.count();
    var getAll_0;
    try{
        KeyRange_6 = IDBKeyRange.only('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa');
        getAll_0 = objectStore_4550.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
        getAll_0 = objectStore_4550.getAll(KeyRange_7);
    }

    var delete_1;
    try{
        KeyRange_8 = IDBKeyRange.only('VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn');
        delete_1 = objectStore_4550.delete(KeyRange_8);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.only('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab');
        get_2 = objectStore_4550.get(KeyRange_10);
    }
    catch (e){
    }

    txn_6855.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6855.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6855.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6856 = db.transaction(['objectStore_4550'], 'readonly', {durability:"strict"})
    var objectStore_4550 = txn_6856.objectStore('objectStore_4550');
    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', true);
        get_3 = objectStore_4550.get(KeyRange_12);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', false);
        get_4 = objectStore_4550.get(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_4550.getAllKeys();
    var getAllKeys_1 = objectStore_4550.getAllKeys(343091246);
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.only('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab');
        get_5 = objectStore_4550.get(KeyRange_16);
    }
    catch (e){
    }

    var count_4 = objectStore_4550.count();
    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.bound('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', 'rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH', true, true);
        get_6 = objectStore_4550.get(KeyRange_18);
    }
    catch (e){
    }

    var count_5 = objectStore_4550.count();
    var get_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab', 'PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', true, true);
        get_7 = objectStore_4550.get(KeyRange_20);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY', false);
        count_6 = objectStore_4550.count(KeyRange_22);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_24 = IDBKeyRange.only('VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn');
        get_8 = objectStore_4550.get(KeyRange_24);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_26 = IDBKeyRange.only('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa');
        count_7 = objectStore_4550.count(KeyRange_26);
    }
    catch (e){
    }

    var count_8 = objectStore_4550.count();
    var count_9 = objectStore_4550.count();
    txn_6856.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6856.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6856.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6857 = db.transaction(['objectStore_4550'], 'readonly', {durability:"default"})
    var objectStore_4550 = txn_6857.objectStore('objectStore_4550');
    var get_9;
    try{
        KeyRange_28 = IDBKeyRange.bound('rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH', 'rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH', true, true);
        get_9 = objectStore_4550.get(KeyRange_28);
    }
    catch (e){
    }

    var index_1 = objectStore_4550.index('index_3037');
    var count_10 = objectStore_4550.count();
    var getAllKeys_2 = objectStore_4550.getAllKeys();
    var getAllKeys_3;
    try{
        KeyRange_30 = IDBKeyRange.bound('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab', 'rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH', true, false);
        getAllKeys_3 = objectStore_4550.getAllKeys(KeyRange_30, 2868665794);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
        getAllKeys_3 = objectStore_4550.getAllKeys(KeyRange_31);
    }

    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', 'mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', true, true);
        get_10 = objectStore_4550.get(KeyRange_32);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_34 = IDBKeyRange.bound('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY', 'KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab', false, false);
        getAll_1 = objectStore_4550.getAll(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab');
        getAll_1 = objectStore_4550.getAll(KeyRange_35);
    }

    txn_6857.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6857.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6857.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6858 = db.transaction(['objectStore_4550'], 'readwrite', {durability:"strict"})
    var objectStore_4550 = txn_6858.objectStore('objectStore_4550');
    var get_11;
    try{
        KeyRange_36 = IDBKeyRange.bound('mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', 'KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab', true, false);
        get_11 = objectStore_4550.get(KeyRange_36);
    }
    catch (e){
    }

    var count_11 = objectStore_4550.count();
    var getAllKeys_4;
    try{
        KeyRange_38 = IDBKeyRange.bound('VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn', 'rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH', true, false);
        getAllKeys_4 = objectStore_4550.getAllKeys(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('rphzDeekJXOnqoOQUGLnDxrWQGPfxDcgxXAInyGtACHXmmlAyTwfYlRGKzdZhWGfLpNtbsykjyOHFLzlKFeWtNCsXYJrfIwhlgIJikBnzpTzffYHmUwmbHpPcVzTBvqYRLCHlqeCPQUCzRmApZIaLodxCQnBJMKJSSKPLiUEajmLpQFrPLHxVxFffdqoakyyvtvDpqjbDzOwqVQngoNzrigHYrLQKZtFSWcQHUHcFlrVcxLISRmCAoaalZHiRDsZGyH');
        getAllKeys_4 = objectStore_4550.getAllKeys(KeyRange_39);
    }

    var get_12;
    try{
        KeyRange_40 = IDBKeyRange.bound('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab', 'PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', false, true);
        get_12 = objectStore_4550.get(KeyRange_40);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('mtDsHDZCBauGYiWVfcmprxJqeQnHrSoIQisYwitpEDPnGuSzTaYGbHYsDiRknCjjxYWIiIfATlxtBftAgFQKzbrhFZpUMIrszqzqornUQumtldjrGQaVXgZXesLjFjbbSqtdkXsQydVbvzidjpywRvSMnWxxyMTMEWRVNTXZSkArcWKwwafNEBiuIyhecbsxWSNpqEURFvqtUkquTrFcAtnAyroKToPOhfxFCHCzEIHcUqDxNJonmIdNuvMMnWrkmtjxUufNKNkbjNEXCHArLmpGAtLGkqiXymhsyNQNrRVPcXhmmzUzCEwcCcwBXQfedwdcEHQjzMBtDegHkIRYhRGKXuDxNBQScfyWnZgRdibotBJKrYekoCEDSzVoilyGuEIzVNQJmVgIVJxAXzrIhgZSWmMRBrCPqoUMPhLDTTDbtbsPumIlHbbZSQQcEgvqeXLqIdfjUuCjfsuRWuI', true);
        get_13 = objectStore_4550.get(KeyRange_42);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', 'PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', true, false);
        count_12 = objectStore_4550.count(KeyRange_44);
    }
    catch (e){
    }

    var clear_2 = objectStore_4550.clear();
    var getAllKeys_5 = objectStore_4550.getAllKeys(914639836);
    var clear_3 = objectStore_4550.clear();
    var clear_4 = objectStore_4550.clear();
    var delete_2;
    try{
        KeyRange_46 = IDBKeyRange.bound('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', 'PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa', false, false);
        delete_2 = objectStore_4550.delete(KeyRange_46);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_48 = IDBKeyRange.only('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
        get_14 = objectStore_4550.get(KeyRange_48);
    }
    catch (e){
    }

    txn_6858.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6858.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6858.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6859 = db.transaction(['objectStore_4550'], 'readwrite', {durability:"relaxed"})
    var objectStore_4550 = txn_6859.objectStore('objectStore_4550');
    var clear_5 = objectStore_4550.clear();
    var getAll_2;
    try{
        KeyRange_50 = IDBKeyRange.only('PKbPWSXEynAbdqUuqOZvpuxAHexCNOaEGaxpHAIAuIALQPOwMpjDQJEJBTTOeDDipjQKfmXePAasWyLEcKLfeDIOUQjRnBUnKUWDwOXPGjwsYGzQSAOogpsgCCSFiwzDstsEOPGismpmhXPpFTJSjvwEXcJRgUHbRJJsrxFmnVntFqvliDJHpSepkRxTMzwqJoMScEUkSBynifJwPqGvIBRKLvvKstZCXqCXKQwOiEMJrQKEmpBoUBPOWpcobnxinFXEjlvCELyBSlhfqolAdlWXPa');
        getAll_2 = objectStore_4550.getAll(KeyRange_50, 306510963);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('KiNfYbPhQYTXvIBXoVBGuZLUSJKHXdfEYvmfqHkLVJzocATjfkfuHMVhuonnbJiqzHbgynKGvUlEGhrjzUxHTYusxsmjMAwjsvVXKdgCAuXQoggJHSZjQYMotvgFDjkedPGVXEEcVNsymPSUUxCZAhecRBFnPcrhWiCwFExAGpPWXktebVNiCVgKRApsWiAEdSPpuSEtAZFoMdddYRoZovzYLEvZkWtdYOLuCqGGGwOtyBmCNyBSyLSVrVWQMmaNrAEsXyQafORrPNtBTGhVcNKkNHyZxqvgaCziYEfFanPFBxkvPDKAjvqKARbXHtXHikfdlXwZhdkmbEwJjckjDDMzXHZMtpazgbEWJQoxxMYdoAEhExPTyrkjOQWbYOCvEnAFafRzjab');
        getAll_2 = objectStore_4550.getAll(KeyRange_51);
    }

    var delete_3;
    try{
        KeyRange_52 = IDBKeyRange.only('AyhlCzMfdzbmYWQfVqMVIpzqqKVqaPRJfZXrIYmQoHciVBwiCxydreBberPilgdjQllHyRuaLQUdDPXdZEdIDIrusJEzDbqXFWJjZAJUoqXpzlUqlRpmBaUaypRthlLsubzChtrZFMEVmGuarwhrasyfMWVGcWeHmLzvZsHtdXQwbwETjiRBeDuyfVJYWpWMvOmWGlYGeERxhlwysTVXHLopzqFOfatTSaGY');
        delete_3 = objectStore_4550.delete(KeyRange_52);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('VNsMcqvvevAgQAMowUCnesEXxyaHsmVtdGzFJEimCqMloPPNsqhueVbsWWGjivmOqbtNPUAdUfcjCSKAqgEvWAwSrPAaHBnSFdvJAhHBfpZdSfZMkuuLcUrFdgArBPWeiFImDlcePwYzWeGmqdHfcBCNFjXphQdgUpdIrwPTXHQpbVswuVJJtAUPusKkaGQltwuPnCZvjcmYkXmEFpKneswPgEqqjsSnGJbaWpCglUXn', true);
        count_13 = objectStore_4550.count(KeyRange_54);
    }
    catch (e){
    }

    var getAll_3 = objectStore_4550.getAll(3641440492);
    var clear_6 = objectStore_4550.clear();
    var add_2 = objectStore_4550.add({f0_t: '<null>', f1_v: '<string>', f2_u: '<string>', f3_o: '<boolean>', f4_q: '<object>', f5_a: '<array>', f6_x: '<object>', f7_v: '<string>', f8_v: '<string>'}, 'ovjDqcxClgStSiEsLrsVvbQDQHiLwGlgAcbByOogVgRHAORxiIOSYOQSJPKtcUoElbQxdqAafEVEOXXFihVleFNMZNTpDlrAYSwAmWucHiLDjNHDZRIRHB');
    var clear_7 = objectStore_4550.clear();
    var add_3 = objectStore_4550.add({f0_k: '<string>', f1_j: '<string>', f2_u: '<object>', f3_c: '<array>'}, 'kdztGvjhcFaRsAFPEaSZiiLDymAUhGIhBoCoxdtADCQnhDNAhlBaLyjuLZgPYSsoDqIxnNmhePIwEWVNBdXqfozVkWWHuJHXQqMhgzjuVfQvxoFYvUqXghNnCriRjOjAlbGmqGtDsGlesdJHoRMIurgdwbmPCAXZFFdekgamNZfdbwNhKuuxLnupUEblYzumBlNezwUgMMtrBaQUxTpsmWcgfIJhjaJLHQhzmPBBRPWlwFHlaRFTlPxzcXAXTPksQUyxLaMwKqegbRwuJPDrZIbFmqPcvhvPouhmllyFTdfgGjqxqsXFYcUSJwSiBxJZGtIpizximrJjWahigbBLlTxRtRKKEmpHuQWHILngQrPUINZOausiQREWZpyfZoVEkdbhRSspKdwQMLEAvGLWmadIAYQXARoyWnQoSUzZbdNPNCWTAxyHoGnbfnKAFacrppzrmPVsHOhyLTvvhz');
    var clear_8 = objectStore_4550.clear();
    var add_4 = objectStore_4550.add({f0_j: '<object>', f1_g: '<string>', f2_u: '<number>', f3_i: '<boolean>', f4_z: '<object>', f5_t: '<string>', f6_w: '<null>', f7_j: '<null>', f8_c: '<boolean>', f9_z: '<number>'}, 'BWBxYykjjwMacNhcJNZdlEwLvmstJzcYgmsFVscbHbtjUrdQzMZtlKBBrqGRfjNHfODkoZfjrdbcBLxPAYqYMUxAqWpVEnXySTatBwYdlgUzmBUWUMUCreiNuGeOgAloitbGPbJEHZOqQDRlpXamohBgrYcOHJpnPLtNOsjVhIhwVhyhaDRxLquPwFQTrPbefpiuVtFQbfkpuAtusARewaemORePhaFrpfWITsUhdkUdPjAJdPGJfWnVuOInUZxqjhVkEddqCRDkYKPoVVQNXiZVBZkaCYUlNkWUekPZLvhKUgTYSgiTFChLjKotcPuJGsPfHRPtPtODfgCgbCvbzTkTLNLZhtDxsuydzXOMNRpzMisOfUotsMrQycQUVinGlbItfkrdjZjaapBSeZanQsuigaKaMfmfBshtQgxVvwbEZLZVpIwwiRhsjqAWPjXi');
    txn_6859.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6859.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6859.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6795')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};