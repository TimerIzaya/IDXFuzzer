let db;
const openRequest = window.indexedDB.open('str_9167', 4695561959906829)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3881');
    var clear_0 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_3881')
    var objectStore_1 = db.createObjectStore('objectStore_3882', {keypath: 'KfYvIJlMTFfvOmEpYofpaFoPtTdTDmYwlpZjOfcyUmUnJPoMCAFJExHfDtTQAVtdmOxkmIpOymxDKjvAfeTafwacyYOWItjDMGkOGdMznwpoptXZiHDMKKxHEZhdlQwldTzaBPQnRTbelvmRiKFYmjJsjPvDLRlFPZrVcsgRjmmlaWgumDTBYUBJARMXsUTDUBDJLrNloJDcfiUyyWRzNeNjZcfzsdZxpdirFaqUEDXLPzodALKNfblttrTpFlJIxwfjXBElxaTRNRQJSksvgqOjvrcCvZFFsIoqoHIKhCsmuHMuuwVhnyXpGyNbGJoeQykDsrkrSjHJmQKNEKfhuhRCjOSKLKbYFtjvQNLRhORnuNDrQSqRSpfJfYxSvUAXAnFOBoesVtRDiYiTtLNVfGARnXIeEieeUNyyWMVacZJldhEASeYvegTHdbQNDkTJSPbJdqibcGOZisqBpeSXYmAcbWjJeUcFsQbykkwxncBgvPxjBTAaRZdsHPAdkdhmxrRZojaReryylgBpKniuyAoOVwSBbggEGjfXnUOlpsTuLBOdDPUrooUXLrvcQTvHtlJOpFtsGKOdkLZoVSIseoRcwShKbpvOxxwzyCVHgaQjMOyWArSsWXPwAiKNZcrFRMHmPMINhwAmRwTmKWqpaRBqZlurXbofNhjwvPQEWrRvoyZZRsHzRSvtXjXjxOfuyFDjIXsSvheeWAYArZDkJAiGTgRnaEcMyWtMAbEFaQcgOUcvhiMlkwWFHrpnYFgnSadQWvUIhHrHfhyKlsbdGTKoUimGjOSFenLhEBAEmoyvzMBRPtdxtzcSAQPuiQFwrWeTUEryVbTGZbauVQDOJNwzMbCWgKlYipfAvvoguZfGhadcPmGqrFxwafkOaACfb', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_3883');
    var add_0 = objectStore_2.add({f0_k: '<boolean>', f1_c: '<array>', f2_n: '<string>', f3_k: '<string>', f4_x: '<array>', f5_l: '<string>', f6_x: '<null>', f7_p: '<boolean>', f8_n: '<boolean>'}, 'TTNiqaJFTeRIAlfDgfTnKTtktfGNQJ');
    var add_1 = objectStore_2.add({f0_z: '<string>', f1_n: '<string>', f2_g: '<null>'}, 'blcssdLwuMdjOwZzjwqkXf');
    var clear_1 = objectStore_2.clear();
    var add_2 = objectStore_1.add({f0_e: '<array>', f1_i: '<object>', f2_z: '<string>', f3_g: '<null>', f4_t: '<string>', f5_t: '<object>', f6_d: '<string>'}, 'OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB');
    var index_2604 = objectStore_1.createIndex('index_2604', 'test', {unique: true});
    var index_2605 = objectStore_1.createIndex('index_2605', 'test');
    var add_3 = objectStore_1.add({f0_g: '<null>', f1_r: '<string>', f2_g: '<array>', f3_c: '<array>', f4_t: '<null>', f5_w: '<boolean>', f6_j: '<boolean>', f7_e: '<array>', f8_u: '<array>', f9_s: '<number>'}, 'pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5805 = db.transaction(['objectStore_3883'], 'readwrite', {durability:"relaxed"})
    var objectStore_3883 = txn_5805.objectStore('objectStore_3883');
    var clear_2 = objectStore_3883.clear();
    var clear_3 = objectStore_3883.clear();
    var count_0 = objectStore_3883.count();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('TTNiqaJFTeRIAlfDgfTnKTtktfGNQJ', 'TTNiqaJFTeRIAlfDgfTnKTtktfGNQJ', false, false);
        delete_0 = objectStore_3883.delete(KeyRange_0);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_2 = IDBKeyRange.only('TTNiqaJFTeRIAlfDgfTnKTtktfGNQJ');
        delete_1 = objectStore_3883.delete(KeyRange_2);
    }
    catch (e){
    }

    var clear_4 = objectStore_3883.clear();
    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('blcssdLwuMdjOwZzjwqkXf', false);
        count_1 = objectStore_3883.count(KeyRange_4);
    }
    catch (e){
    }

    var add_4 = objectStore_3883.add({f0_l: '<number>', f1_f: '<null>', f2_o: '<array>', f3_e: '<object>', f4_d: '<object>', f5_e: '<object>', f6_b: '<number>', f7_i: '<number>', f8_h: '<string>'}, 'iwrRDMjQTSbiDXzuANHxYiFJzYsgtKIWLUMVxxTofOxBFAdQNDPekXWHFJBYYFSCoeYclFJUuODVlHXvPVbjmssqcbRYpTSMvSOamvzsOhRtUaaoKcRyrcXNtJkjabcebYrcrijQecPaHMBVoJOiPwoUbrTWnAeEuaBKlHwLYRLTKpPkyPkYJgxfHZIilACjngIfKjflIfmIrvGEbXzYIdRaTIaOZFFGqWyCyFUofdbeGkadxiHxqWZxIgrZkjywGKXtZRQwINkzGTPxMSBKHjnhPImrdnAoVmLOADwQHSHjgzWXlGhwyvYErrjqgwZViMEpPyRYjhpWckZoQITrAIbZYQOAQfPgJkRNuRaocJyaMrXdwFqSAxmNeSVkEmNZEswCmHzudYtXTMZmbFAOukcuLMkhtsTKWZHNxmkzTsOkhCYBBnDYbMHGeoaJwFnjQkcGyDRSEfgIheRRZAEooILIKNmfvgZSoXeZDriZcwbcmpqoyTkzgtVuMdgYFqXLXMBvemsnlwZpLZayQjANYkeIUIVfBCpKRjHhOynxBNHMAuPrQgJceMyfGLyANhUraltfVDMtyPfkOYohUKnfnIkFoJIqWTbeRroZuTWdzXtJBiCVGLZDKuXTmsMqOSXKfmOPVcIuxsIcCfEtoGrhIVuYcOZEYEqeGwSLwVVXlWQwAhYQvizMnmOreGrjstCkEwlBbkVRgkhJIgsTEMrbbMgZXwtHQJBBlMubxBuFZxNBZOZnUciMBAwOzOQWrsrwqXbFiZTAGNdGoYEgdSSdgAYIQWlEScrWnOssIHfzXraUkrprJbIfETfXAlUNNIKxVkhIqycVUTTcVTrDcBSWvjRSEBFovMdE');
    var delete_2;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('iwrRDMjQTSbiDXzuANHxYiFJzYsgtKIWLUMVxxTofOxBFAdQNDPekXWHFJBYYFSCoeYclFJUuODVlHXvPVbjmssqcbRYpTSMvSOamvzsOhRtUaaoKcRyrcXNtJkjabcebYrcrijQecPaHMBVoJOiPwoUbrTWnAeEuaBKlHwLYRLTKpPkyPkYJgxfHZIilACjngIfKjflIfmIrvGEbXzYIdRaTIaOZFFGqWyCyFUofdbeGkadxiHxqWZxIgrZkjywGKXtZRQwINkzGTPxMSBKHjnhPImrdnAoVmLOADwQHSHjgzWXlGhwyvYErrjqgwZViMEpPyRYjhpWckZoQITrAIbZYQOAQfPgJkRNuRaocJyaMrXdwFqSAxmNeSVkEmNZEswCmHzudYtXTMZmbFAOukcuLMkhtsTKWZHNxmkzTsOkhCYBBnDYbMHGeoaJwFnjQkcGyDRSEfgIheRRZAEooILIKNmfvgZSoXeZDriZcwbcmpqoyTkzgtVuMdgYFqXLXMBvemsnlwZpLZayQjANYkeIUIVfBCpKRjHhOynxBNHMAuPrQgJceMyfGLyANhUraltfVDMtyPfkOYohUKnfnIkFoJIqWTbeRroZuTWdzXtJBiCVGLZDKuXTmsMqOSXKfmOPVcIuxsIcCfEtoGrhIVuYcOZEYEqeGwSLwVVXlWQwAhYQvizMnmOreGrjstCkEwlBbkVRgkhJIgsTEMrbbMgZXwtHQJBBlMubxBuFZxNBZOZnUciMBAwOzOQWrsrwqXbFiZTAGNdGoYEgdSSdgAYIQWlEScrWnOssIHfzXraUkrprJbIfETfXAlUNNIKxVkhIqycVUTTcVTrDcBSWvjRSEBFovMdE', true);
        delete_2 = objectStore_3883.delete(KeyRange_6);
    }
    catch (e){
    }

    txn_5805.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5805.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5805.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5806 = db.transaction(['objectStore_3882', 'objectStore_3883'], 'readonly', {durability:"default"})
    var objectStore_3882 = txn_5806.objectStore('objectStore_3882');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', false);
        count_2 = objectStore_3882.count(KeyRange_8);
    }
    catch (e){
    }

    var count_3 = objectStore_3882.count();
    var getAll_0 = objectStore_3882.getAll(826777684);
    var getAll_1 = objectStore_3882.getAll(2641711464);
    var get_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', 'pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', false, false);
        get_0 = objectStore_3882.get(KeyRange_10);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', 'pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', true, true);
        get_1 = objectStore_3882.get(KeyRange_12);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', false);
        get_2 = objectStore_3882.get(KeyRange_14);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', 'OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', true, true);
        get_3 = objectStore_3882.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', false);
        getAll_2 = objectStore_3882.getAll(KeyRange_18, 2553390571);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB');
        getAll_2 = objectStore_3882.getAll(KeyRange_19);
    }

    txn_5806.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5806.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5806.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5807 = db.transaction(['objectStore_3883'], 'readwrite', {durability:"relaxed"})
    var objectStore_3883 = txn_5807.objectStore('objectStore_3883');
    var clear_5 = objectStore_3883.clear();
    var add_5 = objectStore_3883.add({f0_d: '<string>', f1_k: '<array>', f2_g: '<object>', f3_b: '<array>', f4_m: '<boolean>', f5_y: '<string>', f6_d: '<boolean>', f7_m: '<boolean>', f8_u: '<null>', f9_i: '<string>', f10_v: '<string>', f11_e: '<string>', f12_f: '<boolean>', f13_h: '<number>', f14_k: '<string>', f15_z: '<null>', f16_c: '<object>', f17_l: '<number>', f18_d: '<boolean>', f19_k: '<null>', f20_v: '<number>', f21_b: '<array>', f22_d: '<string>', f23_f: '<object>', f24_e: '<array>', f25_r: '<null>', f26_k: '<boolean>', f27_s: '<array>', f28_c: '<string>', f29_b: '<number>', f30_d: '<string>', f31_d: '<string>', f32_c: '<string>', f33_p: '<boolean>', f34_h: '<string>', f35_y: '<null>', f36_i: '<array>', f37_j: '<string>', f38_g: '<boolean>', f39_z: '<array>', f40_s: '<array>', f41_b: '<array>', f42_a: '<object>', f43_y: '<string>', f44_h: '<null>', f45_n: '<array>', f46_r: '<string>', f47_b: '<string>', f48_t: '<number>', f49_v: '<array>', f50_k: '<number>', f51_k: '<boolean>', f52_v: '<null>', f53_r: '<null>', f54_x: '<null>', f55_h: '<number>', f56_r: '<array>', f57_w: '<boolean>', f58_z: '<object>', f59_i: '<string>', f60_z: '<number>', f61_p: '<number>', f62_v: '<object>', f63_i: '<array>', f64_p: '<array>', f65_e: '<object>', f66_u: '<object>', f67_v: '<array>', f68_y: '<null>', f69_r: '<object>', f70_h: '<number>', f71_p: '<boolean>', f72_g: '<boolean>', f73_w: '<array>', f74_z: '<number>', f75_j: '<boolean>', f76_d: '<string>', f77_j: '<boolean>', f78_w: '<number>', f79_w: '<null>', f80_a: '<boolean>', f81_s: '<array>', f82_u: '<null>', f83_a: '<number>', f84_q: '<array>', f85_k: '<array>', f86_k: '<null>', f87_s: '<array>', f88_q: '<boolean>', f89_m: '<string>', f90_l: '<null>', f91_k: '<number>', f92_x: '<boolean>', f93_m: '<boolean>', f94_w: '<number>', f95_z: '<boolean>', f96_d: '<boolean>', f97_u: '<array>', f98_d: '<object>', f99_b: '<number>', f100_o: '<null>', f101_z: '<boolean>', f102_y: '<array>', f103_l: '<boolean>', f104_y: '<null>', f105_d: '<number>', f106_f: '<object>', f107_i: '<boolean>', f108_n: '<array>', f109_o: '<null>', f110_e: '<boolean>', f111_x: '<null>', f112_o: '<boolean>', f113_a: '<boolean>', f114_u: '<boolean>', f115_g: '<string>', f116_l: '<boolean>', f117_a: '<object>', f118_w: '<boolean>', f119_l: '<boolean>', f120_b: '<string>', f121_d: '<array>', f122_x: '<array>', f123_l: '<null>', f124_v: '<array>', f125_d: '<string>', f126_n: '<boolean>', f127_z: '<boolean>', f128_o: '<number>', f129_t: '<boolean>', f130_n: '<object>', f131_u: '<array>', f132_v: '<null>', f133_e: '<number>', f134_d: '<object>', f135_r: '<number>', f136_x: '<null>', f137_h: '<number>', f138_d: '<null>', f139_v: '<boolean>', f140_e: '<number>', f141_o: '<boolean>', f142_z: '<null>', f143_b: '<boolean>', f144_b: '<object>', f145_j: '<null>', f146_o: '<number>', f147_a: '<object>', f148_c: '<string>', f149_e: '<string>', f150_k: '<string>', f151_c: '<string>', f152_d: '<boolean>'}, 'pgFyPydYIakMhUqXZYcMHCGHlIzCyObJvgmaIbYmQpYQSyeAOZJmNKLQztddPrsoPtjoGOAjisXsoCvpEUyQWpbUJQCNrmcZmxlNOHsNMHaAMERJOcCdaPXorpAPhHPhaMVHwhLQEQebpPIzcGhRxsitVHwZcPyZLjrTEolqHueNJaHuUYFWPDxEVYYDnbpLCDyBEOJZDDiFAuSqdcPhnpl');
    var put_0 = objectStore_3883.put({f0_e: '<boolean>', f1_l: '<number>', f2_w: '<array>', f3_d: '<string>', f4_d: '<null>', f5_o: '<boolean>', f6_w: '<object>', f7_x: '<boolean>', f8_f: '<array>', f9_p: '<null>'}, 'nEIuyzeEVNcCmXaxuWmjfVsrcaUzvVOisZskmAcDTiQcMrmLIikaerKIqJIDGJVPpJSayeovKTRlacKWkNOfjBXARRZmtknRlTfbUWcPhhswtpUSGEpjfCVuPJngIjCqLZlHMswXkDiVBCWLhRehstTCWWlExYrVLnmtqAQQOREcYiuZUtjTvkMAJsXKERfVxSVSiFXUMtqpbHwVWVaCMyGekkUIrMQQFqWKWBXildpSsnZyrhQqsNnvLAcBVjPYMerEiEPcvfUYsroxriTVzUJpxmfLHyYvxeyROrSECcYJRzRziaERRqqphRGvAvYvcWpObIQNvofCAgeBuQGDkrHsFbEfYJbDvYSyecPFNIFlLrMWOzhSdTAYhgzuLejWWBqYWqwyibTDOvbvyyrESTLdQZYqGlWuoDpBpcdJnlqNQGFXrzynOwrMPX');
    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('nEIuyzeEVNcCmXaxuWmjfVsrcaUzvVOisZskmAcDTiQcMrmLIikaerKIqJIDGJVPpJSayeovKTRlacKWkNOfjBXARRZmtknRlTfbUWcPhhswtpUSGEpjfCVuPJngIjCqLZlHMswXkDiVBCWLhRehstTCWWlExYrVLnmtqAQQOREcYiuZUtjTvkMAJsXKERfVxSVSiFXUMtqpbHwVWVaCMyGekkUIrMQQFqWKWBXildpSsnZyrhQqsNnvLAcBVjPYMerEiEPcvfUYsroxriTVzUJpxmfLHyYvxeyROrSECcYJRzRziaERRqqphRGvAvYvcWpObIQNvofCAgeBuQGDkrHsFbEfYJbDvYSyecPFNIFlLrMWOzhSdTAYhgzuLejWWBqYWqwyibTDOvbvyyrESTLdQZYqGlWuoDpBpcdJnlqNQGFXrzynOwrMPX', true);
        count_4 = objectStore_3883.count(KeyRange_20);
    }
    catch (e){
    }

    var add_6 = objectStore_3883.add({f0_c: '<number>', f1_p: '<boolean>', f2_k: '<number>', f3_c: '<null>', f4_g: '<null>', f5_p: '<number>', f6_q: '<number>'}, 'vLuWnhcfAdklzGkVemizhkMFXlhkHNCTFfrpTRlCsyyhLuYxzkkgOtNKGtgiCmOzKHwNkFNvBSNbUmqQvBhBDPwaENmWfIqWtxuLYRnfxynbcrkyIJpCeBXUsNZcFTbrGgOSBfTOMLkjPiIlChhlCByesIzjzMwwbhVEKuLVvaqqcgYkEgCHxUfZmJnGGqLvdqXNogZnJvsjqujsJGRRTBYQxEINHgQzoiAJHpfKtGPtsdQaNFPyHFmnEZUgCGDLuyjhgYZKJKPKCegRrIz');
    var getAll_3 = objectStore_3883.getAll(3400885326);
    var clear_6 = objectStore_3883.clear();
    var count_5 = objectStore_3883.count();
    txn_5807.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5807.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5807.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5808 = db.transaction(['objectStore_3882'], 'readwrite', {durability:"strict"})
    var objectStore_3882 = txn_5808.objectStore('objectStore_3882');
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe', 'OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', true, true);
        get_4 = objectStore_3882.get(KeyRange_22);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_24 = IDBKeyRange.only('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe');
        getAllKeys_0 = objectStore_3882.getAllKeys(KeyRange_24, 1154579383);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('pTlEoQhsmZLtTPYLNYBBRslczlTNDhrbjRHpDWJXETmWNFnbqmnduFpwOBaHJetYvRIAWWciwGeqzvjVImDsmmwVpojVvzZffRECKuMHYaZlsFvgMzZBswNmGocblYllvyrTXBMWWQsXKMnAFXtztVSdWlPeZrRBBMhHfEZSLePeHXwSlAqPjWiBxbILxkwmyNrdDQwrpGuCaiksPmBrbzRaRANcLalMSjbMRFzjXdfLFoUJpyHmeTOzGpMYocWhHEUvTutTiNTmQwSNMbHNYoYAeTWqqYREXKRrpzVxViQXAYwQhrfXCHzzPyrdnevRIcGQJJHqIWYyKqekyOKMGsASMGvKNGijHXmwmNTWEgIXLrQfEESYdiVKmUYmJjOJHTMZEzTyomMuQsJQUQgkZwoAOCFXAuLKwHmESWGXe');
        getAllKeys_0 = objectStore_3882.getAllKeys(KeyRange_25);
    }

    var getAll_4 = objectStore_3882.getAll();
    var put_1 = objectStore_3882.put({f0_i: '<boolean>', f1_p: '<object>', f2_s: '<string>', f3_w: '<boolean>', f4_r: '<number>', f5_u: '<string>', f6_t: '<object>', f7_c: '<object>', f8_k: '<null>', f9_o: '<array>'}, 'lOvRFKSWpuysbTSoVAZJQGPBPGzWwHbGodgGysKaWVwOTOMxMNxGjNRNVWbOKenXiTvgrWJqQevTnDVJrRBTbKIyvXfVHZmVXgLWEaPpNdymovOqGmAoqduPOZUFHDmhhIirSvnkuwMZAsUMlsEMhznqstRMiVNSEwCTJMTpJSufHGzyEUMiUDYbcSzsyLduCJWLrzPAdroXglIJZgByoOWeyoSzQbkilkptjNrnjKLIfDbugGPVxwsScRDyzHJIXMyHMQNPgwRTdmCqOoQjNBVsoZFvrhVXHsfssKmzLFKBvwQdUXAFotrdvpuILxlxIBCHOhNeGFUEmZPiscIWKcdZsIEYwekRrorCEUCDUvzriABspQhlockzObYgRJDEMfwpsLBUoAPMrtUtXxTHvtwbpYwefAjZIIqlNnZJbVHDGpgiChMKhgYigOqVlYjFVpULjiNMwXedGjNbRfYjONOecOyVdJmUVCEvYynZLXEoRokofUMNrAqrxutFCkczDzGGVivVfEhqWRDOhHNRlAZMMdiKLoevkHYnrLTOkXwJFfmoaYduOJEfwxxTuyTVmwlVqlycIVZXbDBAgyUoLipAfgUpgaPEbJRSdPJTXCltCGAqDoZEOxxkGglfjPcVIiRhxSEAZBDVrtbYtiQkGPWTMgCFHXSfaqYopfRMNqtdstOtaoWxIEXMPXdTneAoaaNloPNaqKNBTZADIXdEANKNWBUEtWVopRwgXleBWzHYOgPxspAPsPZmDlTJGMnkqszEnxxeorVdsZtYsyYKtoFFmLQRVzeUnHcfWqwhsKCwnmnOWdjuzoLgGeHBawwVKEverlBysfnoLdNHGllbDzGSbFYePFxIHSLHiAHkzfYpOWmQTlACaWmmB');
    var add_7 = objectStore_3882.add({f0_u: '<number>', f1_y: '<string>', f2_y: '<null>', f3_w: '<boolean>', f4_h: '<null>', f5_e: '<null>', f6_h: '<boolean>', f7_v: '<string>', f8_j: '<boolean>', f9_x: '<null>'}, 'gUdxSwaIVuhXKZVUVZOxMZKWQggapRoPFVMOuDyVEjBbnSomMTQwhIKCdUzIvqOjFLhNCsrEiYnCyymWULAdkbekjRZblERLgfpOxhuzxXpMPhNXRBfQIusqFetykDAtUFzIQYZLxddQJrrCwZcbdsKuHsGbWBxnCBmAZELQEWKgFCXiXokEfjStzJCKrDsyQRSzNZFeBtsliIfjDxmxEcqMOTYrjUluUkfpyjGGQoyRAQlGCHNzpETarDxYIBPdOrECFxRuxHLbnjhJzEIZbBiTbnhGmgkIiopfkOugdGcwiPEZDJdLMBQFFGTnJkrGfcsnanWaUrsAzhkjwdIYfWbSVNyOXAhGxyQHwfCJJjdOZNEGzGJtCFWoNmZfHCFMQkbWkbWXQWExnXmNxXICQMYdvsvZpuOjfaLBxosRERXpUaXCRrxEjfbaQJhBJdQoVdxXgynUoUcksTylIAIsZVflMjtPHiMppECalrswXqKdcqHLbJQINrOnYCWOGFVItcUcXCLadPUNfsmcWtFRmPtjJZKewIGRCNuQHaYHvVCjzkOyeOeqVttEcxjkWUQNMFmlnCvAVUJEDQICHJVmJmEmQpuJPyuXVWsjZQZnzeHjlYRqDzOnfhFlUvuTJJTOsjyCsVHYpaorSKiJyaUjtRFddaGtqJVioiaSkEAjUuqEbJkXvDyzMnwBHfMggHTEREswQyJMwWKDjSGQZbyzKWfFTOzVeaNStkdxlgqQrmNFUZNAMwyvArQrRPlhWihhfOJkLsFJwdrSDVcEYLFDZqhljplSlTSDqEUDMJPvqgPGvyIJPvlrIcZnMKdLZeKoxNMTvlAXCjIiMfjGtBhxYfMDCrQdUgunKSdNtNfDKGixyxLxhjgDJRbxZjdVchyIqUCQEngUeTgBYWpTrkVMOKLWvHGUCYIzsDNSLueJBHhZCFwdStStAetvzGiXGjdPvFWRLtmEQDSyqbXDShnW');
    var index_0 = objectStore_3882.index('index_2604');
    var clear_7 = objectStore_3882.clear();
    var add_8 = objectStore_3882.add({f0_e: '<object>', f1_p: '<string>', f2_z: '<boolean>', f3_p: '<number>', f4_s: '<boolean>', f5_p: '<null>', f6_l: '<string>', f7_y: '<null>', f8_v: '<array>'}, 'NxzYOHqGZRMXZmopwZDjOclBiMmmrFtyebYei');
    var count_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('OPFmsMtKLJhcuELSSoTtuqkKWPPidQqxHfmFYogzThHIkXwDDJPwUCxurEoLpTjyfRMjjFZIuuYbVoYCjoGCElyWYYUQWLZuAQELbFVZyEAEJAijATMlVLFdUhygqhJiTMkqEpxYVPefpycgIBnikMaWfTEwByXbbgFZcTGsixCHAmWfmTaosCIxDpXxeTThbRLbeMxiJpHXnCxAKZddErbqibiULNadOKQjkWgUKtSpOzzoacabAycsXGZyqyTbhJFYVmOQJgDffrNPZTgUaDeDdxCKSfdssoUTxFGtoVIbJkJcMjXQGYgVXgdrfimmCiEFMlTwHIMDUQCtXyZtkXEzaeDfdvlzIZfJkFYtANESCSCXLDdNKlMdibmBBcUMFthSNEIkZejfBxSckZuDPczwEOWIFXftcORbjKTtgJXNVxETORkGFVhxENqGzUmTozWfUbJEeSpkLdAAYxCEyJDcIGyDoMnKLjDMGkYzcLKNPHSpeZYexOTeffSphIkDNniVKCaLyOPuXXsefvACyuVaipMUtSZFB', 'lOvRFKSWpuysbTSoVAZJQGPBPGzWwHbGodgGysKaWVwOTOMxMNxGjNRNVWbOKenXiTvgrWJqQevTnDVJrRBTbKIyvXfVHZmVXgLWEaPpNdymovOqGmAoqduPOZUFHDmhhIirSvnkuwMZAsUMlsEMhznqstRMiVNSEwCTJMTpJSufHGzyEUMiUDYbcSzsyLduCJWLrzPAdroXglIJZgByoOWeyoSzQbkilkptjNrnjKLIfDbugGPVxwsScRDyzHJIXMyHMQNPgwRTdmCqOoQjNBVsoZFvrhVXHsfssKmzLFKBvwQdUXAFotrdvpuILxlxIBCHOhNeGFUEmZPiscIWKcdZsIEYwekRrorCEUCDUvzriABspQhlockzObYgRJDEMfwpsLBUoAPMrtUtXxTHvtwbpYwefAjZIIqlNnZJbVHDGpgiChMKhgYigOqVlYjFVpULjiNMwXedGjNbRfYjONOecOyVdJmUVCEvYynZLXEoRokofUMNrAqrxutFCkczDzGGVivVfEhqWRDOhHNRlAZMMdiKLoevkHYnrLTOkXwJFfmoaYduOJEfwxxTuyTVmwlVqlycIVZXbDBAgyUoLipAfgUpgaPEbJRSdPJTXCltCGAqDoZEOxxkGglfjPcVIiRhxSEAZBDVrtbYtiQkGPWTMgCFHXSfaqYopfRMNqtdstOtaoWxIEXMPXdTneAoaaNloPNaqKNBTZADIXdEANKNWBUEtWVopRwgXleBWzHYOgPxspAPsPZmDlTJGMnkqszEnxxeorVdsZtYsyYKtoFFmLQRVzeUnHcfWqwhsKCwnmnOWdjuzoLgGeHBawwVKEverlBysfnoLdNHGllbDzGSbFYePFxIHSLHiAHkzfYpOWmQTlACaWmmB', false, true);
        count_6 = objectStore_3882.count(KeyRange_26);
    }
    catch (e){
    }

    var clear_8 = objectStore_3882.clear();
    txn_5808.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5808.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5808.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5809 = db.transaction(['objectStore_3882', 'objectStore_3883'], 'readonly', {durability:"default"})
    var objectStore_3883 = txn_5809.objectStore('objectStore_3883');
    var count_7 = objectStore_3883.count();
    var getAllKeys_1 = objectStore_3883.getAllKeys(2390259617);
    txn_5809.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5809.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5809.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_182')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};