let db;
const openRequest = window.indexedDB.open('str_85', 2747778742506541)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3898', {autoIncrement: false});
    var put_0 = objectStore_0.put({f0_c: '<boolean>', f1_c: '<boolean>', f2_k: '<boolean>', f3_o: '<string>', f4_t: '<array>'}, 'RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes');
    var add_0 = objectStore_0.add({f0_y: '<string>', f1_u: '<number>', f2_d: '<boolean>', f3_f: '<null>', f4_x: '<boolean>', f5_v: '<number>'}, 'eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg');
    var index_2618 = objectStore_0.createIndex('index_2618', 'test');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', 'RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', true, true);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_2618');
    var getAllKeys_0 = objectStore_0.getAllKeys(2874524107);
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', 'eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', false, false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_0.getAllKeys(999267832);
    var index_2619 = objectStore_0.createIndex('index_2619', 'test', {unique: true, multiEntry: false});
    var put_1 = objectStore_0.put({f0_d: '<boolean>', f1_x: '<string>', f2_f: '<boolean>'}, 'ZQjubwkVELxbMDLXhOHUwbtFYHBcLoCBlEIgNOKkfXZbhHxbipXQhZiLQoVkBCGvaPkKvVhTHMxJLsepRpCnXDqHVVsBeJywRnalFrZBTUGDNljMbpJBIGUMYVGLtCbyIdTxzCqIDzRCPYXUgZfyxiaNksxtKammIONxNuocKUBOmOjNCkFNPdBkjeFSxCusqIJdKnjSspYfnvWxTQbCsqWeEaJLZlxqrenSQxYbMQdbeOJWKwqfNknTuyHUAULuHMvYWzmTSwtfmYurXghzMiziWzRmeCNZGJoIJctfFYPwyNHKqKMZZgvCisOOBVxCnfNnaWtTIdNaReXpUOIEgsdtwuoDGmenFfLxMgZgmHswAHoEZGhuxWYJweFBPILvqjmIzlDuVvHZEodBvGwWOrnoafDTIjOxFWEKmUTaBJovzafJHZShAgPAhQeOzigPLDQWyxtFtDmfLgCFtOhzRFqTBYlrWQruekdxSNnBbLyVtTtVBiyCwPPGLgDeafBlwDjxTxCsfNuYkSdWQEZpVZmfrsNFiIwAeImehzlKKWIRAMdzRyxUcaWjrByrZlPxrhWwAGjJXmTRcFSoPUhLImkGGjkOKpNKQYeSyIKlaYpRFfOXtyYoCLyctyovIbixlORrYOndqOzVOENGCOiSrrCcOBGSSQVnczoJrCWgPNpCeDPDvwxUYwouizcXHmwjnilFWuyLwdHpUbZVRXqAXduXZM');
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg');
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', true);
        count_1 = objectStore_0.count(KeyRange_6);
    }
    catch (e){
    }

    var index_2620 = objectStore_0.createIndex('index_2620', 'test', {multiEntry: true});
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', 'RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', false, false);
        get_2 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_h: '<number>', f1_f: '<boolean>', f2_h: '<boolean>', f3_d: '<number>'}, 'XZTwnVajXiLaLpwpLprqPokVdOpucirJad');
    var getAllKeys_2;
    try{
        KeyRange_10 = IDBKeyRange.only('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes');
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes');
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_11);
    }

    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', false);
        delete_0 = objectStore_0.delete(KeyRange_12);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_z: '<string>', f1_h: '<string>', f2_n: '<array>', f3_y: '<array>', f4_b: '<boolean>', f5_g: '<number>', f6_u: '<string>', f7_a: '<object>', f8_v: '<object>', f9_m: '<object>'}, 'EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn');
    var getAllKeys_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', 'eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', true, false);
        getAllKeys_3 = objectStore_0.getAllKeys(KeyRange_14, 792598157);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg');
        getAllKeys_3 = objectStore_0.getAllKeys(KeyRange_15);
    }

    var objectStore_1 = db.createObjectStore('objectStore_3899');
    var index_2621 = objectStore_1.createIndex('index_2621', 'test', {multiEntry: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5830 = db.transaction(['objectStore_3898'], 'readonly', {durability:"strict"})
    var objectStore_3898 = txn_5830.objectStore('objectStore_3898');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', 'EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn', false, false);
        get_3 = objectStore_3898.get(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_18 = IDBKeyRange.only('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes');
        getAllKeys_4 = objectStore_3898.getAllKeys(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('ZQjubwkVELxbMDLXhOHUwbtFYHBcLoCBlEIgNOKkfXZbhHxbipXQhZiLQoVkBCGvaPkKvVhTHMxJLsepRpCnXDqHVVsBeJywRnalFrZBTUGDNljMbpJBIGUMYVGLtCbyIdTxzCqIDzRCPYXUgZfyxiaNksxtKammIONxNuocKUBOmOjNCkFNPdBkjeFSxCusqIJdKnjSspYfnvWxTQbCsqWeEaJLZlxqrenSQxYbMQdbeOJWKwqfNknTuyHUAULuHMvYWzmTSwtfmYurXghzMiziWzRmeCNZGJoIJctfFYPwyNHKqKMZZgvCisOOBVxCnfNnaWtTIdNaReXpUOIEgsdtwuoDGmenFfLxMgZgmHswAHoEZGhuxWYJweFBPILvqjmIzlDuVvHZEodBvGwWOrnoafDTIjOxFWEKmUTaBJovzafJHZShAgPAhQeOzigPLDQWyxtFtDmfLgCFtOhzRFqTBYlrWQruekdxSNnBbLyVtTtVBiyCwPPGLgDeafBlwDjxTxCsfNuYkSdWQEZpVZmfrsNFiIwAeImehzlKKWIRAMdzRyxUcaWjrByrZlPxrhWwAGjJXmTRcFSoPUhLImkGGjkOKpNKQYeSyIKlaYpRFfOXtyYoCLyctyovIbixlORrYOndqOzVOENGCOiSrrCcOBGSSQVnczoJrCWgPNpCeDPDvwxUYwouizcXHmwjnilFWuyLwdHpUbZVRXqAXduXZM');
        getAllKeys_4 = objectStore_3898.getAllKeys(KeyRange_19);
    }

    var getAllKeys_5;
    try{
        KeyRange_20 = IDBKeyRange.only('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg');
        getAllKeys_5 = objectStore_3898.getAllKeys(KeyRange_20, 2572031023);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('XZTwnVajXiLaLpwpLprqPokVdOpucirJad');
        getAllKeys_5 = objectStore_3898.getAllKeys(KeyRange_21);
    }

    var getAllKeys_6 = objectStore_3898.getAllKeys(1256011551);
    var count_2 = objectStore_3898.count();
    var count_3;
    try{
        KeyRange_22 = IDBKeyRange.only('ZQjubwkVELxbMDLXhOHUwbtFYHBcLoCBlEIgNOKkfXZbhHxbipXQhZiLQoVkBCGvaPkKvVhTHMxJLsepRpCnXDqHVVsBeJywRnalFrZBTUGDNljMbpJBIGUMYVGLtCbyIdTxzCqIDzRCPYXUgZfyxiaNksxtKammIONxNuocKUBOmOjNCkFNPdBkjeFSxCusqIJdKnjSspYfnvWxTQbCsqWeEaJLZlxqrenSQxYbMQdbeOJWKwqfNknTuyHUAULuHMvYWzmTSwtfmYurXghzMiziWzRmeCNZGJoIJctfFYPwyNHKqKMZZgvCisOOBVxCnfNnaWtTIdNaReXpUOIEgsdtwuoDGmenFfLxMgZgmHswAHoEZGhuxWYJweFBPILvqjmIzlDuVvHZEodBvGwWOrnoafDTIjOxFWEKmUTaBJovzafJHZShAgPAhQeOzigPLDQWyxtFtDmfLgCFtOhzRFqTBYlrWQruekdxSNnBbLyVtTtVBiyCwPPGLgDeafBlwDjxTxCsfNuYkSdWQEZpVZmfrsNFiIwAeImehzlKKWIRAMdzRyxUcaWjrByrZlPxrhWwAGjJXmTRcFSoPUhLImkGGjkOKpNKQYeSyIKlaYpRFfOXtyYoCLyctyovIbixlORrYOndqOzVOENGCOiSrrCcOBGSSQVnczoJrCWgPNpCeDPDvwxUYwouizcXHmwjnilFWuyLwdHpUbZVRXqAXduXZM');
        count_3 = objectStore_3898.count(KeyRange_22);
    }
    catch (e){
    }

    var count_4 = objectStore_3898.count();
    var getAll_0;
    try{
        KeyRange_24 = IDBKeyRange.bound('EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn', 'eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', true, false);
        getAll_0 = objectStore_3898.getAll(KeyRange_24, 3034418234);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn');
        getAll_0 = objectStore_3898.getAll(KeyRange_25);
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.bound('EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn', 'RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', false, false);
        get_4 = objectStore_3898.get(KeyRange_26);
    }
    catch (e){
    }

    var getAllKeys_7;
    try{
        KeyRange_28 = IDBKeyRange.bound('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', 'EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn', true, false);
        getAllKeys_7 = objectStore_3898.getAllKeys(KeyRange_28, 1646120393);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('ZQjubwkVELxbMDLXhOHUwbtFYHBcLoCBlEIgNOKkfXZbhHxbipXQhZiLQoVkBCGvaPkKvVhTHMxJLsepRpCnXDqHVVsBeJywRnalFrZBTUGDNljMbpJBIGUMYVGLtCbyIdTxzCqIDzRCPYXUgZfyxiaNksxtKammIONxNuocKUBOmOjNCkFNPdBkjeFSxCusqIJdKnjSspYfnvWxTQbCsqWeEaJLZlxqrenSQxYbMQdbeOJWKwqfNknTuyHUAULuHMvYWzmTSwtfmYurXghzMiziWzRmeCNZGJoIJctfFYPwyNHKqKMZZgvCisOOBVxCnfNnaWtTIdNaReXpUOIEgsdtwuoDGmenFfLxMgZgmHswAHoEZGhuxWYJweFBPILvqjmIzlDuVvHZEodBvGwWOrnoafDTIjOxFWEKmUTaBJovzafJHZShAgPAhQeOzigPLDQWyxtFtDmfLgCFtOhzRFqTBYlrWQruekdxSNnBbLyVtTtVBiyCwPPGLgDeafBlwDjxTxCsfNuYkSdWQEZpVZmfrsNFiIwAeImehzlKKWIRAMdzRyxUcaWjrByrZlPxrhWwAGjJXmTRcFSoPUhLImkGGjkOKpNKQYeSyIKlaYpRFfOXtyYoCLyctyovIbixlORrYOndqOzVOENGCOiSrrCcOBGSSQVnczoJrCWgPNpCeDPDvwxUYwouizcXHmwjnilFWuyLwdHpUbZVRXqAXduXZM');
        getAllKeys_7 = objectStore_3898.getAllKeys(KeyRange_29);
    }

    var index_1 = objectStore_3898.index('index_2619');
    var getAll_1 = objectStore_3898.getAll(449348523);
    var count_5;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('RfmAarSLiHFyQWwOGdBzUeArRlxxJWlIXBTlrbntiEHCNULDwtkDDgYiLEaaODGguYBayLfSFHVMUBQUplQLlmIPySNvMsosmjgsSnlbKfGvszRQVHAwedmFSdrYPiLsdTLfJwVAibFjtLnWdIOQMUPysJfCbIpxGUOfcbYfsJgJzIdYuuUiHEjRuZhlkuKfVOFuWxLVXcHZFjOVIPLwZrWyvIxOseCLKzYmEUtxuyUwcOYFQOYdLPxLTcuglwKyJJSAGctqEQGODuzXmnwvRmloEnhXIEEocviyEwYeznhQKkzeEchmoNmgkMgeSthFhcIeKZJwpeszMwOgkRQwBzAbqjwHaWtAIKgANjTPHugaLRmQMsfcdBNahEtWOihRZmDwRmPqeDNXVhiuetrMHBNOBssLbQegbByJawOLtgURVYkNrJxAVKRJtxCVwyqtSvxXofcZoBTxaRnZsxarFADFPLIuvgXwPArVyKuRIfQAlgmBHZsiuUUlCMSlrDoZAYkExtKAgsLXOulzxuIDNqTEPQmdaEKfaEUBZWzVHBNykXmOCqazCRCFDppLYecnntumiEynYaSEWowSmUsRweXKnYXyWqdeBArrVVFlbmKHyVtdCITBmasKLaChcxwLczEkxriMHdepYCYAcBCXmQlMCLHZfTuMcSUzeAEbEMsgwsqGdbXEtCcSmuyZECQZTBZLOQqNwzFpDgOexviGnXGQREdXKdSrYuaKHIFbNNvYKawbEYMDLBAubrftONJamApdxIzNEThcDbQUoxwytsGqbyQCaWQfSjMpinlmOkujfjnbCzDLUyTYkSIkZGHCPOCNlJtYUdes', false);
        count_5 = objectStore_3898.count(KeyRange_30);
    }
    catch (e){
    }

    txn_5830.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5830.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5830.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5831 = db.transaction(['objectStore_3898'], 'readwrite', {durability:"relaxed"})
    var objectStore_3898 = txn_5831.objectStore('objectStore_3898');
    var count_6 = objectStore_3898.count();
    var add_3 = objectStore_3898.add({f0_g: '<number>', f1_p: '<number>', f2_a: '<null>', f3_b: '<null>', f4_x: '<number>', f5_g: '<null>', f6_l: '<boolean>', f7_x: '<string>', f8_l: '<object>'}, 'nGnTTsBeaPnkXBKEqzwtFzFAyXOBDDhzhjRcktAdLWpMaYOcrrgtEXzCePSaiajYhJLLEoHEcGSZBBPKEfuXrUzVemCWAQbfnswCITeLVuwjFOhHCMPgthbACcPNrUVSlxirBymCaYxJVNxYGITUipsMAAkscqWJGZtRJPsSreXwWtgzsdfKjxkOqSDQCjEJIMzVtcnhOPvtPRgsVBtAoIzDjnAMTRtgamONjDWWsUPAkNIlziMECVLZDyTniudmzUZsVZSiNNlFpwveSHsrCqkRblGxMkexETXJsjHKEdfyUBazonhJNnWkRzpJFWsOdUAlYBVPSWqZnyhbAqKCdVvwrXHMYIpkjrvEDhauJSDkZzOxmtEhrIXDoIKhPUhQdhGoaymYqhZLXomaCGLBtdlhxsGJYWtRptxPyXGskBueSZiHjFDBETVlSVDewoMpQMoKVOiKylGPDFzKmpGHzDvZMbwJUMSGqUPUaeLpqYKzpTBIZGdZqdZnCbGcHlPktjxwXKBrNqUcokzcHDEZMbMgtcLPeFeIBGJPfidTZXnrnwkqQFtPqmnOnbpBElMcPzamvqENTgtjgnGGxFNijTbTtiBDPictVpwiPUqnOjeEfryueQtkIOtfSHSmkgRLEOPvGFqgflRUfXZXxhwnXHKayaoQEVNDqnnzIxNcqRShPUeEgIeKjatJOTosSrGUlMsHmjyrwAgKtjqATETDQngvusUuhnBHtwUmFHSlTleKCaqezGXvCubSPjHxVbrQfDjqwRQQmYOqQcowijCwppoBImlquWIDVbTBsJufuaixKIDYDJXHwAbomCzGkYbJvSOcjBLuLaVPLdlAHlJgRAcXXsMVrpFInyKensZroaYxyTvCaVXVDJeKlgKjFCyDCnEJvkQobUmCJQuTrP');
    var clear_0 = objectStore_3898.clear();
    var getAll_2;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('EjJKePhztbxmzxgVHdlScZUMClOPcasBJZDmBmmNjlDcXKCoYbImhwChUDTfblBQANhCsvHglWyRrPZbSAKTQzKtcqxaqJdCCHNpWwPkVQkhNOUEGxpvuTuKYUFbWOLuMVFjsQfsaGlwKsOJxoYCnlMpVnXrZlzwLcNgTycxYjMWSAKfKbqpyWwYBqMQBMnqqhQzKFWgAWdJNkqXGJJthifrovpgbLjZXcBASOlcWjdwMoWeVcFrKAMIiZGuxHLuWIIyOWXODSMjMbJYVVzNzeuUUVLWTMPgvwNXPCgwYhVNXoPsvJFIXmqWVORakgSRdoXtZKEnOebuPHFONYdWKmHQMTWinWn', true);
        getAll_2 = objectStore_3898.getAll(KeyRange_32, 3281658688);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('ZQjubwkVELxbMDLXhOHUwbtFYHBcLoCBlEIgNOKkfXZbhHxbipXQhZiLQoVkBCGvaPkKvVhTHMxJLsepRpCnXDqHVVsBeJywRnalFrZBTUGDNljMbpJBIGUMYVGLtCbyIdTxzCqIDzRCPYXUgZfyxiaNksxtKammIONxNuocKUBOmOjNCkFNPdBkjeFSxCusqIJdKnjSspYfnvWxTQbCsqWeEaJLZlxqrenSQxYbMQdbeOJWKwqfNknTuyHUAULuHMvYWzmTSwtfmYurXghzMiziWzRmeCNZGJoIJctfFYPwyNHKqKMZZgvCisOOBVxCnfNnaWtTIdNaReXpUOIEgsdtwuoDGmenFfLxMgZgmHswAHoEZGhuxWYJweFBPILvqjmIzlDuVvHZEodBvGwWOrnoafDTIjOxFWEKmUTaBJovzafJHZShAgPAhQeOzigPLDQWyxtFtDmfLgCFtOhzRFqTBYlrWQruekdxSNnBbLyVtTtVBiyCwPPGLgDeafBlwDjxTxCsfNuYkSdWQEZpVZmfrsNFiIwAeImehzlKKWIRAMdzRyxUcaWjrByrZlPxrhWwAGjJXmTRcFSoPUhLImkGGjkOKpNKQYeSyIKlaYpRFfOXtyYoCLyctyovIbixlORrYOndqOzVOENGCOiSrrCcOBGSSQVnczoJrCWgPNpCeDPDvwxUYwouizcXHmwjnilFWuyLwdHpUbZVRXqAXduXZM');
        getAll_2 = objectStore_3898.getAll(KeyRange_33);
    }

    var delete_1;
    try{
        KeyRange_34 = IDBKeyRange.only('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg');
        delete_1 = objectStore_3898.delete(KeyRange_34);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('eqXsEVDYFXZbiVqjjpgUSQnTTjaAvpbGvDEuBVtEGdNRploacWFbLqgbtqFSyBxTYwasGuFZDhAbxvVsUhNoqmtHcbBbVuARjBimyhwZYvFamKWyFbQZGizhzqkzNUqQkAbbCFoiBQHuKzbdBYVwWzEXGiQhxTSDTJOqapiYgIimwfFUcnXEBmikFuVqYPziyuYiRGrGcjxueOXtABDUIighAdtpppeMGMmfpUCtbolERnjwHHefVbqNERBrzQjqiPBtBJDpODzjTOuCpFOaxUOEoPWoaxVWiJHOUzkPmWvAksFQKXryemZTTzllOUySKuDVMVkeEmYsOzioFhTKmRXGWlYeswpSaAGwsUthHUbZpQReVfdpzzeodbSOtiSiQlUmeImQg', true);
        get_5 = objectStore_3898.get(KeyRange_36);
    }
    catch (e){
    }

    var add_4 = objectStore_3898.add({f0_g: '<boolean>', f1_q: '<array>', f2_j: '<object>', f3_h: '<boolean>'}, 'VnVoPqDpSEPEJXPJPXXiljNVTUhvJMmPSdvGJgwJLhIEckywTUmjxGzFJQYmlZkgQtDbPMtEisDrGwkLVtEtHkXhJlimnzJSiitSoBlEmRDMMTnzCCxWVzCTPqbYMuhgUzGAYLVhxbNzWplGJtiKgOwiOJjfUHgALborbfqTmJIaOBnjdTJjORUaxROEsoBTgimYbahYcPaoKNRomjfDRnlNnhJurLISuBKYclJAlWkxJVBlPZVZqBzmMugXaFnsNTyKyOGEbfXYWRjoNooWMasnNWXABmZQxdhzlGjEKYquVbQOIghWgyVbjKNxikNOkOwfFxyWwcAxoOwhtBKuyeMqgiXVtLIdawMXbPogWLtdeEzyifGlTjemJQiXULnqDWEgKZWLRpdhyEEUucnaWVRiCBGWYmFnXzvWmXzknwQTbjmrIhfSFlhYxDcLGVbPxSgAXGYAwFJPmNVJYNDlMmyWpcIFOINXoVChtZwlsNVeueedGwpZEtgGxajaYUxtjXKrwFRBTKMOLGuGdGTcONjgFBbgUDeKRBIxYQrksfuTpJxFPyDcWUbKVVUCRvHJEiDYhGiKUPAlCXdopIJcVZVewMVwCsJSvGeFbTjcY');
    var put_2 = objectStore_3898.put({f0_q: '<null>', f1_p: '<null>', f2_j: '<string>', f3_h: '<null>', f4_z: '<number>', f5_t: '<object>', f6_w: '<boolean>', f7_a: '<number>', f8_b: '<number>', f9_o: '<boolean>', f10_p: '<number>', f11_l: '<string>', f12_g: '<string>', f13_j: '<object>', f14_c: '<boolean>', f15_v: '<string>', f16_z: '<string>', f17_s: '<string>', f18_c: '<object>', f19_z: '<string>', f20_w: '<number>', f21_z: '<null>', f22_v: '<array>', f23_l: '<boolean>', f24_o: '<object>', f25_q: '<null>', f26_c: '<object>', f27_d: '<null>', f28_f: '<number>', f29_z: '<object>', f30_d: '<string>', f31_d: '<boolean>', f32_z: '<array>', f33_v: '<number>', f34_j: '<array>', f35_t: '<string>', f36_d: '<boolean>', f37_i: '<number>', f38_q: '<number>', f39_r: '<string>', f40_x: '<string>', f41_z: '<string>', f42_n: '<object>', f43_z: '<array>', f44_h: '<null>', f45_x: '<object>', f46_z: '<number>', f47_y: '<boolean>', f48_n: '<array>', f49_w: '<string>', f50_w: '<boolean>', f51_i: '<string>', f52_r: '<null>', f53_d: '<number>', f54_z: '<null>', f55_y: '<object>', f56_x: '<object>', f57_w: '<array>', f58_x: '<string>', f59_p: '<string>', f60_k: '<number>', f61_o: '<number>', f62_i: '<object>', f63_k: '<null>', f64_j: '<boolean>', f65_p: '<object>', f66_k: '<array>', f67_y: '<null>', f68_y: '<string>', f69_r: '<number>', f70_j: '<array>', f71_r: '<string>', f72_z: '<number>', f73_m: '<object>', f74_m: '<null>', f75_k: '<number>', f76_o: '<object>', f77_t: '<array>', f78_n: '<boolean>', f79_l: '<array>', f80_q: '<number>', f81_t: '<object>', f82_r: '<string>', f83_o: '<array>', f84_z: '<boolean>', f85_e: '<string>', f86_m: '<number>', f87_e: '<object>', f88_n: '<boolean>', f89_h: '<boolean>', f90_s: '<number>', f91_a: '<string>', f92_d: '<number>', f93_a: '<null>', f94_z: '<object>', f95_g: '<array>', f96_y: '<number>', f97_d: '<number>', f98_u: '<string>', f99_w: '<string>', f100_u: '<array>', f101_f: '<array>', f102_o: '<array>', f103_v: '<string>'}, 'PzLScizzfZjmtObmrNFybOMSgCloMIYUFmuEStIEMEKUZEnuJRWdGkSBsNRHCiKWYRKjUaxAnTakQnCPLetKKRylHlaWSJrGDyebkRpaiqMdSBqLuGCiXpGlLeVprLzLQhdBrevRYOzUOAtJSMbunSwFgzMhmHxgDdWbEREpmiCstmLNjzirazRNWoFBhQAWTjdtqsRYlFWZaIDvJmeXcfSpuTAejfCWpPQTjqzWHdpOHSDWkdhOUGfXTcycoDsTKIJUfmCglqAPPGmzhmUwoWdYSCkUmksKkRaRoaHFlTPiMDkfZYHNtnMLiwPBCbFqUndhtMpLUYDmFKAiAsvtvbXgHCnVnFkRknoOkInBdIHAgyGOnNWNmVDHwAOsZMqFlnnZGHPYVYrYiEuSiubkAKGRnwQXyXYZStMAtdgZIKuQgbvcEycIUdbbEjrEyQFmcPHFzKBXoIAAsPbpgrofKBrofqKprFyxWBlZZqwbmHYnZKdiiHOySFSCLWQPnJYJDiYFkSWkpTYAegHluulodQenejZWBHHhUbncklZLfcWoAIRZdttyVUVSmbrwJPvHwURLWTpACLNaolqloVHvOPZGKguxiDYSciZSrVBVEcEBkRyDyxupgmzdnQBwuLGIjxktQUoWONOzuKOQyBvbBRyyNgJCdkMfBngmBujuaPQvdhJVkNFYJedHLcfDBWYCuNFxIOeRDCWRbUEmFvzPIKOQmGpVtELxORGoECXzmlBUUNcvbWQrLjGbIbuGXzJvHxhAtnTfIXjFAbpiersSrFgMwtuirjXfclgBDOJMTRYcHhjAbAhoaVjUMFUpqSMAQjYkHUdAASIifrhRuiskjYhwPMQQTLnRMkHjamQhxDgFJwUSYkgftZvZjekm');
    var clear_1 = objectStore_3898.clear();
    var add_5 = objectStore_3898.add({f0_f: '<boolean>', f1_w: '<boolean>', f2_m: '<array>', f3_y: '<null>', f4_b: '<null>'}, 'wRpQMabocfeVsEtMjPRfQqZXTDATpRKeAVdXOoIuOOEebsScBaUdZWBbaDggUftUuzUcqfsrgHFnJgnwaxgszcAXmsrggKqVeKfXFoBBBPbtyAvSpkPegkSYRDDVFWFADVPzixBYXvXkYaWxqVyxzMAeNFOeVqruISYHWGSlJDoVaiGNBsctMrfafpYfSJiyaqcMVloJpSxBSTDHneULxIjzqHTreTtHzBauTWKFsNLEaLbGEKfNb');
    var put_3 = objectStore_3898.put({f0_t: '<number>', f1_f: '<array>', f2_p: '<null>'}, 'gMCpowpZbxqackqFXCxRgyYLCPXKXslIJrhaWTjesxrVhSEshpbFkjYGSxbgWKShvIAbvEoTFrtymwTISLzYKewJFFpYlygjFmrLLQhxKQOwvxngucqhQSZwaSvhnzufBJTyPHTvNxYXCPnNOQPpoIcACbqeygQmqixRiijNjNEVaBcGktMdVByqEadSIlZijVUAuvxSoGXKInzykiOFIpGwNGLmiYmyixeFZwonXzEyUBECIJLiygwHihxnDGLgvwtKzUSpZdqzZZgjAIEcyTMSuOuApCjNfJbOyyqARAvDkDEMPcIxxsTlsoLSsVgrkxBeovRsLIXpnhblZYvLAUUfyWoSeJQDhoAcwcZktbBzAoNURQHYsTarKrrRuMerXqQlXuURhlWVeVDAptqGVLeIHeJptdOMPFkHzijqdkIrNReKvFXScPLWjwxmcPydPLkwOteaBeTIgmzaRtggSYUCyADVDxyFbVcQFbsPWNPdVBGgOmnvkDnUzBhoIbFIOqmJJESURBHDdLanafduEixLkaQyFCqBMQKUwwcMStPsViwHhijUVvMpdhlijfeBnWBohhwWVqofffscLAMyTJiVQjjfOTjUTjkHVHHDTWWtHlZYBkYDLwEGkYvoLStygUwdaqGPSDlqgMwbFepHRDsrofJWIHQMPtjRpQmbfpmyvsLgzATPnysPudDgFtzoiQPGGUoKZUtoQnhWfsVfqGSJWtQwolFcWwxOTUuN');
    var count_7 = objectStore_3898.count();
    var put_4 = objectStore_3898.put({f0_h: '<number>', f1_t: '<object>', f2_l: '<string>', f3_v: '<array>', f4_w: '<object>', f5_p: '<number>', f6_p: '<boolean>', f7_x: '<null>', f8_d: '<number>', f9_e: '<boolean>', f10_l: '<array>', f11_s: '<string>', f12_f: '<boolean>', f13_o: '<array>', f14_m: '<array>', f15_g: '<number>', f16_x: '<array>', f17_b: '<object>', f18_v: '<string>', f19_e: '<number>', f20_u: '<number>', f21_r: '<array>', f22_m: '<object>', f23_b: '<array>', f24_i: '<boolean>', f25_f: '<string>', f26_e: '<null>', f27_d: '<object>', f28_i: '<object>', f29_w: '<number>', f30_x: '<array>', f31_w: '<boolean>', f32_l: '<boolean>', f33_n: '<number>', f34_d: '<boolean>', f35_c: '<object>', f36_z: '<boolean>', f37_b: '<array>', f38_o: '<array>', f39_f: '<number>', f40_o: '<object>', f41_r: '<object>', f42_y: '<null>', f43_r: '<array>', f44_f: '<null>', f45_h: '<array>', f46_a: '<boolean>', f47_t: '<boolean>', f48_l: '<null>', f49_y: '<array>', f50_b: '<array>', f51_k: '<number>', f52_s: '<object>', f53_w: '<null>', f54_q: '<boolean>', f55_z: '<number>', f56_l: '<array>', f57_j: '<boolean>', f58_c: '<object>', f59_m: '<array>', f60_c: '<number>', f61_v: '<string>', f62_i: '<object>', f63_n: '<boolean>', f64_t: '<string>', f65_j: '<string>', f66_q: '<null>', f67_k: '<string>', f68_b: '<number>', f69_n: '<array>', f70_b: '<array>', f71_m: '<object>', f72_a: '<null>', f73_m: '<object>'}, 'kFBaYTkzsrCdLqAlbNytlyUOayqvagShJrlvRiGztgKRPCfFQFerbmqnOphhWyBOiktHywBSpCchKfIbKjpzXyxPYGDOuOTZiMKkJzdhpimijdivYQQzSjjbNDssALBZXVwBedTOWNMReZoHlifOzthPaoIvWPckttssBEbhtlLgMnSRkBeXuMCKHPQGBUWWdJiUkzsSrPOFlcEjZGcJjaWzLKmpHUmoflKtMnMklGjQJKAXsvWQZEEpfpajnNWPjZEaBdGYdRUhGSKRMRGcJyNjgfuNjnspBmqKxiytTfUguYicSXDEGpBxkrMfdljFrUuywgBhQvcgbztPirPjkJxnGJFzYpExHsHSdUBtdZvkYcvHWsDxraHUHrWgVCtVNtrvETvELiDBwmueCvQuRuRXzJSVQMkWQxpTroqkAANXIgpkeYchjITJpjxxfPvUYlGgcqrJzTdMbCHQpqYvgWjfAbvDyqEcbUH');
    txn_5831.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5831.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5831.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5832 = db.transaction(['objectStore_3898', 'objectStore_3899'], 'readwrite', {durability:"default"})
    var objectStore_3898 = txn_5832.objectStore('objectStore_3898');
    var clear_2 = objectStore_3898.clear();
    var getAll_3 = objectStore_3898.getAll(413061112);
    var add_6 = objectStore_3898.add({f0_x: '<object>', f1_r: '<array>', f2_p: '<null>', f3_g: '<null>', f4_c: '<string>', f5_o: '<string>', f6_e: '<object>'}, 'vrTsPBNNQhdHZzvqAeoQAQpDjvyqTfcJEpZwyTaRaDRLEfVsHRFRBXZFpbjSzmnMMLHOdPzVXsiEMuJMODUYiFBmGqlLXdHGchsbtOHdWkbpgpwMVQuYkgFyGGjlafwYEeHMBNtLdQtJKHVaeVHJBdSyuLzoxhChjHhhEOVWkHuDwtwpCcNyecDrybImsgkqOsyqKWjRBgEKnuAcBamfXhxgAKzvKpPEXBtzUAWibclJqZWgLBbrfFJjlZLKXJegzotZNWxTmSsSBGgGKqYiGzRKxUkFsFyKbMxffzFNEnXQecnyLLXKerZEgzieKirkEMlgHEgxuShIIweKmOGRpMyRMsHQEVMhPNVIhNTipJKxpVqosSmdxEXcLyVWvrQPMSDfORgmOzrAYfqFBijkwVfaehPYBgoCuUcfHGcXkbciiooMXozqkUynZISgSKiJooPjyiWraaFjDgIMSUNdFlTXneYoIGzrZTVDYvjqHpzeVfI');
    var put_5 = objectStore_3898.put({f0_n: '<boolean>', f1_u: '<object>', f2_o: '<null>', f3_e: '<object>', f4_s: '<object>'}, 'gqxzSyYYwDZAdhCThHMemXLTtfdyfpGIiwhWkeAajluzHjEzJRtkyHrwGNBUqrPVhhxfHPldxgfuDDUPrUaNbXDdiyBrxbbdikfNJOqmunMtSfmLjhlwbqSGOfjMxZOITkBblOVVOOlSbyySV');
    var add_7 = objectStore_3898.add({f0_p: '<number>', f1_e: '<array>', f2_s: '<object>', f3_y: '<array>', f4_n: '<object>', f5_u: '<array>', f6_a: '<boolean>', f7_u: '<string>'}, 'EFnsQXcdIUIATmBqpbdIfREnyrMXDCFcotHZLGInZsVphTPAYPcJgLDtNJfVRGbJBLEKnPPHScVKUenENlRRIhmQBOQHnRHHNwYUvHVpPtbVQXOInyBTVtrykgFSdvDfXCwtFICcVttFVZwSEteiIJlpezRDkhmmkVEEREFUxtvocwnWKHXQUXafUxUArYknQMgZgaoqeVjXRASHZSfdGnTbPOyHqtUBGbZAufcHeCkpHpkrfgeEKkDWbEgaLWBLCGmzCeyohdKVyKWxGbykfotwtIXWDehYEqEPvCoodVbwTUiVMXFvRptulvyEzizpVQqBUnEwXxIhWBkeDgcgLjGdsYTZsUDZwjuoWdnshedsxtTGBZvLQgkcrQMNVuLmRWMCGQiSIBGJxEYXLyMHHwslLooEqQfYFFJEECVpRwhOgxFMrdyCnHeejIrzfUkmPGPpdtKiyPNHgjlthkMyYmLHPSBCotfGjfZWeChQfYoKxISvsfGDtfyePrWWhiybHVAiHKwRezBNsFJHmfJNSYnYUYJkQVqTVBFUWIcZPPKBGMHKHJhfLejwQEdavVSDQc');
    var add_8 = objectStore_3898.add({f0_g: '<string>', f1_d: '<array>', f2_b: '<boolean>', f3_w: '<array>', f4_a: '<string>'}, 'mREXjiHUduAfZvtSpXgxtabiWiQoPAkkuvZeJxRPFPGBWXtqMdpiopzgAMRxGYJXaweCzrFtPPmqUHrpkjzFxdetjtAppWRnPgOYyPndtGlQnGfxznwkqTyIBfYvWAtZaZBhiRmARUUjPRXOULUgDDSyxklPXvzQZBaWUrZKOjfjulxUVTrcpapyBkRafcFViokEpfGxDqsSDsLqwcDqNXQmyxzxeYXyZCSADezqdHiZcvAJcJbLPnlRDWftKyJDvAupiOSDjrhlDwcUckUSqVyHjLjfGOskkZGFtLbDXqGfFPksXKflQQauIAHWOrGTdfKshHOTqqgZjSJjdoWMQZCUaIgyJpBZTevWkJiekIUPshyOBPiXatZZtZXcoissYCszEDsAlxuChSaruXsXIwXHFxtNmFfkvsZKKPwKaoKrtJfizKoSEemmqjScKkNmghgAzvOkPbKpbjvYFbQoCTfweMmIusZbhvvdqIqNLiWcPxBjgydtgcVuHEnkHaeVfyrQAvJohEEuIkxFzIylpgxtgICyhTzXDDtthgROYFcgTYkOQxFyFkszaYJdIuZrToRWvXKsCMIbicYbBDDibUxZrbDDYgwrbKRVrafPIZFSmlzDiBKhKEndOYUfvInjqZGpWMZwEAZQVooJhmbCycgacEOWHFqiPjXFTLUSNARLOAoOcBeQGYqDMqoZMnAAyYbAinvePAsmGqxVELLtWPIpiHmvohPcdTGHreiHgsdPyelxEcGIbNbasyqCCHCWKvDLbvlTBAYGruHMTnEUhjRzpaCaEwHlv');
    txn_5832.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5832.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5832.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5833 = db.transaction(['objectStore_3898', 'objectStore_3899'], 'readonly', {durability:"strict"})
    var objectStore_3899 = txn_5833.objectStore('objectStore_3899');
    var index_2 = objectStore_3899.index('index_2621');
    txn_5833.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5833.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5833.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5834 = db.transaction(['objectStore_3899'], 'readonly', {durability:"default"})
    var objectStore_3899 = txn_5834.objectStore('objectStore_3899');
    var index_3 = objectStore_3899.index('index_2621');
    txn_5834.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5834.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5834.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8001')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};