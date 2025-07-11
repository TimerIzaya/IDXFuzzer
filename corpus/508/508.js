let db;
const openRequest = window.indexedDB.open('str_8438', 4014445335070831)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2959', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_2960', {keypath: 'WgRghOgjSvfZjwnXkQhkpyYoZcIgoUohCXzKSarKSatfDMxoCpWkhlYeAewTFcFdPPjvyGoYuaigHrPTqjruULUsxifrFhZZIFdFFjBYBFTxChzyrUXIEYfSHXFVEHnpXiijXBkrTcbdGebcdGJhYFkzSaZPjEMrXhnYKYuaTdRAeseCaRDCQhqNqCQUzbByAwVYKeoPeXeGJkltuWowddjWSjndVKfxSHwsFMEeTLdPcakrVWBIXDcjzcsjVKagIBFWrRGdIDGLRCRObPdLLbkoDdWjQCIMcXweVlsOVwnhIPSaeCdwDGTjASakOLBQQOsUMADJFFonnulPbLbLmonZpHgemIIdLohHZIKnhXtvFolTrunZiBoVmEQdIHoQDEerTKBHwaOkWuTbDVBywitcxcGpsycavpPaZXRRKXswmdBbuLEESycMOoJjNBmiWMmKweAwlZhdnwFzTtZJVluTPeiSsqpROjpnYIGgFwxiAuLsCwQLkCYUIqORKpeQrZgqXKJPDXRZWJDjmcuUWYdXRaxyalLZdSrXPXXSOLHryzhUkNluxGBmeSPjwAPFHNsjGytwrcHYPGBNRuNMKlihQoFjXBfNdDhJTFNXQzeUVmTbKEcyNapvVMaJJGEdlYcLuzMcQqttVXVdNJOEuXXIAzTBdCAjZdPvVSlghoyHWRgIzuSrpDAduoiGUmsmYuDydaoAxdbuKMUKVtTzuLVmTblWCqCdiIBUHLjhGNexSciJaNlEKyVnqgmbuWnTmPRbEAhSTcmHZZgUFRHMkCFLkwdyLWeJQLytRDMWNvXdtyCLOzTmZTRIbUUglgqSjtWETGgQkvJdpSwQiWnWfPueLjpTpRxtIPUbSFFUrsnSoXzbRLNLOOsbFatZhfzjOSJyqpJbpcIVgpCpvwiMtqiUwSxuxZOeXHBJUnKCJDYozUlOcOdMvDjmiSLPlSfpRHhXkJBlQVE'});
    var index_1990 = objectStore_1.createIndex('index_1990', 'test', {unique: true});
    var clear_0 = objectStore_0.clear();
    db.deleteObjectStore('objectStore_2959')
    var add_0 = objectStore_1.add({f0_a: '<array>', f1_b: '<null>', f2_r: '<boolean>', f3_w: '<boolean>'}, 'DoKlSFfKOSIdvFQnNqOKuvvLUWUoySrhIIwjWTOaFpcNRuxLuINkaqmRJfquzMCPgzHJNJDrttKwJxPyCpvzZSPblzQNDSaWDRXJVVySioreCjAaFSTuakuVxYVV');
    var put_0 = objectStore_1.put({f0_h: '<object>', f1_z: '<object>', f2_y: '<object>', f3_t: '<string>', f4_c: '<null>', f5_i: '<array>', f6_t: '<string>', f7_t: '<boolean>'}, 'xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP');
    var put_1 = objectStore_1.put({f0_n: '<string>'}, 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG');
    var index_1991 = objectStore_1.createIndex('index_1991', 'test', {multiEntry: false});
    var index_0 = objectStore_1.index('index_1990');
    var put_2 = objectStore_1.put({f0_j: '<array>', f1_j: '<object>', f2_f: '<boolean>'}, 'kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_1.getAllKeys(845624629);
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', 'xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', false, false);
        delete_0 = objectStore_1.delete(KeyRange_2);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4415 = db.transaction(['objectStore_2960'], 'readonly', {durability:"relaxed"})
    var objectStore_2960 = txn_4415.objectStore('objectStore_2960');
    var count_0 = objectStore_2960.count();
    var count_1 = objectStore_2960.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', true);
        get_1 = objectStore_2960.get(KeyRange_4);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', 'kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', true, false);
        get_2 = objectStore_2960.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', 'kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', true, false);
        count_2 = objectStore_2960.count(KeyRange_8);
    }
    catch (e){
    }

    var index_1 = objectStore_2960.index('index_1991');
    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', 'DoKlSFfKOSIdvFQnNqOKuvvLUWUoySrhIIwjWTOaFpcNRuxLuINkaqmRJfquzMCPgzHJNJDrttKwJxPyCpvzZSPblzQNDSaWDRXJVVySioreCjAaFSTuakuVxYVV', false, true);
        count_3 = objectStore_2960.count(KeyRange_10);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false);
        count_4 = objectStore_2960.count(KeyRange_12);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_2960.getAllKeys();
    var count_5;
    try{
        KeyRange_14 = IDBKeyRange.bound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false, true);
        count_5 = objectStore_2960.count(KeyRange_14);
    }
    catch (e){
    }

    var index_2 = objectStore_2960.index('index_1990');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false, false);
        get_3 = objectStore_2960.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_0 = objectStore_2960.getAll();
    txn_4415.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4415.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4415.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4416 = db.transaction(['objectStore_2960'], 'readwrite', {durability:"strict"})
    var objectStore_2960 = txn_4416.objectStore('objectStore_2960');
    var put_3 = objectStore_2960.put({f0_s: '<number>', f1_d: '<boolean>', f2_k: '<boolean>'}, 'nSvGbJBFOTLsUlfHOIKNttkITcilILKfLMjCEShQbeZZimObyroapzxCjPVCvLOGTZJWSpYmGWWfmXbaPaDHTQAKHBZbHWOyNNoqeWBnpYjSCpRyddUOfPHkqgbnyLNHNXGtrNLcVePZjDNaIQPTCJXLmOkpMGXocRWLMzmfojDTCvjCpdkreRQYbIsJrPnxrJqEGkziceGrzjcxsFyrVVcfEwuQNJjoOJTUiPaiqCUIpXTDPGsBtvEFYwXbxJjhyIJGaNlRxZnWCyEgUygyPVozlyVuXWqwNZqPwRgtCQqDKRAbrnneduLSgzGqtRurDjMMkcgMpiAusQCnbPUrAyIJRKluMEHZKJywzvaRCTeJwDmntUFSBilRCselWWvLtsTjlcRUKUpvtFaeIvQrAlSJFXbppMvdGxGGnDIYBizMRfuCbmmUeWfREAYSbBgHQmUlsVpkuXMMeowNhKBGCZUNVFdPkKBrpgAirVeCSOeNwLsGlAsyJniCMbRAgqcQFTRsJIfltaoRQrWPyfccwDfxXrfEFFb');
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', false);
        get_4 = objectStore_2960.get(KeyRange_18);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', true);
        count_6 = objectStore_2960.count(KeyRange_20);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_22 = IDBKeyRange.bound('DoKlSFfKOSIdvFQnNqOKuvvLUWUoySrhIIwjWTOaFpcNRuxLuINkaqmRJfquzMCPgzHJNJDrttKwJxPyCpvzZSPblzQNDSaWDRXJVVySioreCjAaFSTuakuVxYVV', 'kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', true, true);
        delete_1 = objectStore_2960.delete(KeyRange_22);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_24 = IDBKeyRange.bound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false, true);
        count_7 = objectStore_2960.count(KeyRange_24);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.bound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', 'xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', true, false);
        get_5 = objectStore_2960.get(KeyRange_26);
    }
    catch (e){
    }

    var count_8 = objectStore_2960.count();
    var index_3 = objectStore_2960.index('index_1991');
    txn_4416.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4416.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4416.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4417 = db.transaction(['objectStore_2960'], 'readwrite', {durability:"default"})
    var objectStore_2960 = txn_4417.objectStore('objectStore_2960');
    var clear_1 = objectStore_2960.clear();
    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('DoKlSFfKOSIdvFQnNqOKuvvLUWUoySrhIIwjWTOaFpcNRuxLuINkaqmRJfquzMCPgzHJNJDrttKwJxPyCpvzZSPblzQNDSaWDRXJVVySioreCjAaFSTuakuVxYVV', 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', true, true);
        get_6 = objectStore_2960.get(KeyRange_28);
    }
    catch (e){
    }

    var add_1 = objectStore_2960.add({f0_l: '<object>', f1_m: '<number>', f2_n: '<array>', f3_y: '<string>', f4_h: '<object>', f5_j: '<array>', f6_o: '<boolean>', f7_f: '<boolean>'}, 'hBNCqbxRZgoPMXLKeRqZTlVTlFtSNeaHZOEFaYMwUKSKszALaTBdItouDdUjrNesNhnyFSavkidysnacUKtDznrhdNSmQsQwwMxfjlWmQYuXRvihNtpPHhaaAGwaBXxVekfTsvfyVReXEbECXcobwClcYhCkluRbHWcvDdKOIdjSxQIMdJvzwlOGDlwrcGAGEzXUGczkuQMHDMCABChRqMsGIoccOinlfakAOTqNVdMVvpgZawqiBtquwkztoNARcstiXpTdmsHYNctfnyiaVTHNRcURRmvZCJVdINPdggbOyFPtMWPiBJAQcbMKLfpyBhAOmlkxRECTYFYzLDIoAKpBJwKwbmBcPJJgWbwFbMxHeaPHMPTKEDhwwhlhpLMLCKDWIdCxAmIPEAyKKxsowGMvMFFFyKhraDFFVKKkudkTrncvGpexbzJPlksodPIGjHxWVEoeUkplnMwnqWnDpgwjYQcHlBlciAyFdpeEIZOGLzObvnTbNzrdpHknsNmiezTPHrrvxOxnRhdWguPxGcPCHMtJqkFiJDDbNYEQUZHwIqMAlrMQJuDDkYlWFRYwdHcouZTFpOzqPoWkrPufbiDWGqsLNhxCPKaGCsBKIjsuBgVzOCRNDlIMYLPimUeyJUIYESBVQFMAqhfTrZMudaeSxpwfXLTcSPKkXchtezrUgtwpWaZOgyqXkxxpGvMcouWRwGgubNKoAbofrdJXgPRzwWhbSvEHJMeIKiEHStwavUlPnrBjIpGlyWCKCIVmrapKCrnaKPIenMWcIBvBVocAAKqHBufeRTunuyPqllMAqroDIStCKUYXHuhTbErABncBsXtStiljiSITudyNadzTajkgXzUJKyWWLkyOevTWtweJOJOIlxfiAbClPXEhoWqHbd');
    var count_9 = objectStore_2960.count();
    var put_4 = objectStore_2960.put({f0_f: '<object>', f1_f: '<array>', f2_p: '<number>', f3_h: '<string>', f4_l: '<boolean>', f5_s: '<array>', f6_w: '<number>', f7_u: '<object>', f8_c: '<null>', f9_c: '<array>', f10_p: '<boolean>', f11_z: '<boolean>', f12_p: '<boolean>', f13_l: '<null>', f14_u: '<number>', f15_g: '<null>', f16_l: '<number>', f17_c: '<null>', f18_o: '<string>', f19_j: '<array>', f20_u: '<array>', f21_v: '<null>', f22_c: '<object>', f23_p: '<boolean>', f24_w: '<array>', f25_u: '<string>', f26_i: '<object>', f27_u: '<number>', f28_j: '<null>', f29_v: '<null>', f30_o: '<object>', f31_n: '<null>', f32_q: '<array>', f33_o: '<object>', f34_q: '<boolean>', f35_b: '<array>', f36_b: '<null>', f37_d: '<number>', f38_h: '<boolean>', f39_b: '<number>', f40_c: '<number>', f41_h: '<null>', f42_x: '<number>', f43_o: '<object>', f44_h: '<string>', f45_k: '<array>', f46_n: '<object>', f47_w: '<null>', f48_l: '<object>', f49_p: '<object>', f50_z: '<object>', f51_r: '<null>', f52_q: '<number>', f53_y: '<object>', f54_w: '<string>', f55_o: '<string>', f56_g: '<object>', f57_v: '<boolean>', f58_h: '<boolean>', f59_d: '<number>', f60_u: '<object>', f61_j: '<object>', f62_e: '<null>', f63_h: '<number>', f64_f: '<null>', f65_h: '<string>', f66_p: '<string>', f67_d: '<null>', f68_d: '<object>', f69_g: '<boolean>', f70_s: '<number>', f71_i: '<null>', f72_s: '<number>', f73_q: '<boolean>', f74_f: '<null>', f75_q: '<array>', f76_w: '<null>', f77_o: '<boolean>', f78_g: '<boolean>', f79_q: '<string>', f80_c: '<boolean>', f81_m: '<boolean>', f82_v: '<string>', f83_b: '<boolean>', f84_x: '<boolean>', f85_z: '<null>', f86_w: '<null>', f87_o: '<boolean>', f88_p: '<null>', f89_x: '<string>', f90_a: '<null>', f91_k: '<number>', f92_a: '<object>', f93_z: '<object>', f94_f: '<number>', f95_a: '<object>', f96_l: '<string>', f97_a: '<object>', f98_g: '<array>', f99_j: '<number>', f100_r: '<null>', f101_y: '<object>', f102_t: '<number>', f103_o: '<array>', f104_z: '<null>', f105_s: '<string>', f106_p: '<object>', f107_z: '<null>', f108_g: '<array>', f109_w: '<string>', f110_t: '<string>', f111_u: '<object>', f112_u: '<string>', f113_l: '<array>', f114_o: '<array>', f115_b: '<null>', f116_v: '<string>', f117_n: '<object>', f118_i: '<string>', f119_k: '<null>', f120_d: '<array>', f121_u: '<null>', f122_y: '<boolean>', f123_f: '<null>', f124_d: '<array>', f125_h: '<number>', f126_x: '<string>', f127_n: '<boolean>', f128_u: '<array>', f129_x: '<number>', f130_o: '<string>', f131_w: '<array>', f132_f: '<number>', f133_h: '<null>', f134_a: '<array>', f135_i: '<null>', f136_a: '<string>', f137_x: '<number>', f138_x: '<string>', f139_w: '<boolean>', f140_q: '<string>', f141_z: '<number>', f142_t: '<number>', f143_e: '<object>', f144_f: '<object>', f145_b: '<null>'}, 'VytgLGLKhmLbDUvqjfozyLnvARfLXwtqZdqagmEtdfNJrSoTImQexlhSJZhtYZAPwtmSGVqudBfuvNiqvVFdTTrwpGlgLbwGscybCoqqcvVUUTuiiEYlJvPbnamRlDcAnXxbkCpHPqRIKdtuRdJwkLhriHiOhmNwLiqspanhnolyJaudeMfRmnDOgPTrwjyfHOfcdJotCghzNaQqctGzbQMehZaOfIbvASoSdFZlxnPUuqZQTEujydiAlhmPGMAnncCCeBjWSquUHOiltGoTzbGuQnTIUGZiBHtonJJsJXNnFVEStKVwfqZUGrdUFAXPpqEnqqoVxbYaZZRcVllzfRxYXYLdMVQGaTOfHxIPzUjwONRvLWSVPwqWDhVESvXtvpksJMFGkPzapsghpSpRQhRmUfTcWywklKugNnUxRVRZjtQOpfZYdHMcUaNaTBZcJfNvwukZnLfxeFnesGNTUkxDQKxUvSPMVsvCHNIOgvnMuCavzHcrCWNlrfIUMFSfbjJbPylAugniYmcwupiPDaVCEykkGGxfAWYGZfEhWNIBtjYwWmSzgHtzIhdCovUFooJypBDiWrbyKroGCFdbtWaRBwWAcNsKYZmXuBCpSfUYseRITQhBNdKDnZSdvdrebQYssSujgAiqSbgLwhzeMkHesvvWJJtliQEiEaXWyUPcCBBfEIjiVYHqRyeoGlyzYCDKhQXyBisZPKqpJBKiQJbnYjyejSeTjLAxCkJvLyuCTOJliPyfLMHyEGJHHbBGYvWRkmdYNelbenkWuHaZlWumZRMHoBzZSLStZgizBYcvVYceZBipVsrMLQKejxGEAqoNwvlHFzygjGPFZLpCcPRDnyNrKfnolYZubgSRXpxwFunraabXOzfjGQOzvhqPBTqyRnjuJiWDnBUnLvaITdcYufjBbJyVTPDRPfge');
    var getAll_1 = objectStore_2960.getAll();
    var getAllKeys_2;
    try{
        KeyRange_30 = IDBKeyRange.bound('nSvGbJBFOTLsUlfHOIKNttkITcilILKfLMjCEShQbeZZimObyroapzxCjPVCvLOGTZJWSpYmGWWfmXbaPaDHTQAKHBZbHWOyNNoqeWBnpYjSCpRyddUOfPHkqgbnyLNHNXGtrNLcVePZjDNaIQPTCJXLmOkpMGXocRWLMzmfojDTCvjCpdkreRQYbIsJrPnxrJqEGkziceGrzjcxsFyrVVcfEwuQNJjoOJTUiPaiqCUIpXTDPGsBtvEFYwXbxJjhyIJGaNlRxZnWCyEgUygyPVozlyVuXWqwNZqPwRgtCQqDKRAbrnneduLSgzGqtRurDjMMkcgMpiAusQCnbPUrAyIJRKluMEHZKJywzvaRCTeJwDmntUFSBilRCselWWvLtsTjlcRUKUpvtFaeIvQrAlSJFXbppMvdGxGGnDIYBizMRfuCbmmUeWfREAYSbBgHQmUlsVpkuXMMeowNhKBGCZUNVFdPkKBrpgAirVeCSOeNwLsGlAsyJniCMbRAgqcQFTRsJIfltaoRQrWPyfccwDfxXrfEFFb', 'VytgLGLKhmLbDUvqjfozyLnvARfLXwtqZdqagmEtdfNJrSoTImQexlhSJZhtYZAPwtmSGVqudBfuvNiqvVFdTTrwpGlgLbwGscybCoqqcvVUUTuiiEYlJvPbnamRlDcAnXxbkCpHPqRIKdtuRdJwkLhriHiOhmNwLiqspanhnolyJaudeMfRmnDOgPTrwjyfHOfcdJotCghzNaQqctGzbQMehZaOfIbvASoSdFZlxnPUuqZQTEujydiAlhmPGMAnncCCeBjWSquUHOiltGoTzbGuQnTIUGZiBHtonJJsJXNnFVEStKVwfqZUGrdUFAXPpqEnqqoVxbYaZZRcVllzfRxYXYLdMVQGaTOfHxIPzUjwONRvLWSVPwqWDhVESvXtvpksJMFGkPzapsghpSpRQhRmUfTcWywklKugNnUxRVRZjtQOpfZYdHMcUaNaTBZcJfNvwukZnLfxeFnesGNTUkxDQKxUvSPMVsvCHNIOgvnMuCavzHcrCWNlrfIUMFSfbjJbPylAugniYmcwupiPDaVCEykkGGxfAWYGZfEhWNIBtjYwWmSzgHtzIhdCovUFooJypBDiWrbyKroGCFdbtWaRBwWAcNsKYZmXuBCpSfUYseRITQhBNdKDnZSdvdrebQYssSujgAiqSbgLwhzeMkHesvvWJJtliQEiEaXWyUPcCBBfEIjiVYHqRyeoGlyzYCDKhQXyBisZPKqpJBKiQJbnYjyejSeTjLAxCkJvLyuCTOJliPyfLMHyEGJHHbBGYvWRkmdYNelbenkWuHaZlWumZRMHoBzZSLStZgizBYcvVYceZBipVsrMLQKejxGEAqoNwvlHFzygjGPFZLpCcPRDnyNrKfnolYZubgSRXpxwFunraabXOzfjGQOzvhqPBTqyRnjuJiWDnBUnLvaITdcYufjBbJyVTPDRPfge', false, true);
        getAllKeys_2 = objectStore_2960.getAllKeys(KeyRange_30, 582749156);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('nSvGbJBFOTLsUlfHOIKNttkITcilILKfLMjCEShQbeZZimObyroapzxCjPVCvLOGTZJWSpYmGWWfmXbaPaDHTQAKHBZbHWOyNNoqeWBnpYjSCpRyddUOfPHkqgbnyLNHNXGtrNLcVePZjDNaIQPTCJXLmOkpMGXocRWLMzmfojDTCvjCpdkreRQYbIsJrPnxrJqEGkziceGrzjcxsFyrVVcfEwuQNJjoOJTUiPaiqCUIpXTDPGsBtvEFYwXbxJjhyIJGaNlRxZnWCyEgUygyPVozlyVuXWqwNZqPwRgtCQqDKRAbrnneduLSgzGqtRurDjMMkcgMpiAusQCnbPUrAyIJRKluMEHZKJywzvaRCTeJwDmntUFSBilRCselWWvLtsTjlcRUKUpvtFaeIvQrAlSJFXbppMvdGxGGnDIYBizMRfuCbmmUeWfREAYSbBgHQmUlsVpkuXMMeowNhKBGCZUNVFdPkKBrpgAirVeCSOeNwLsGlAsyJniCMbRAgqcQFTRsJIfltaoRQrWPyfccwDfxXrfEFFb');
        getAllKeys_2 = objectStore_2960.getAllKeys(KeyRange_31);
    }

    var count_10;
    try{
        KeyRange_32 = IDBKeyRange.only('nSvGbJBFOTLsUlfHOIKNttkITcilILKfLMjCEShQbeZZimObyroapzxCjPVCvLOGTZJWSpYmGWWfmXbaPaDHTQAKHBZbHWOyNNoqeWBnpYjSCpRyddUOfPHkqgbnyLNHNXGtrNLcVePZjDNaIQPTCJXLmOkpMGXocRWLMzmfojDTCvjCpdkreRQYbIsJrPnxrJqEGkziceGrzjcxsFyrVVcfEwuQNJjoOJTUiPaiqCUIpXTDPGsBtvEFYwXbxJjhyIJGaNlRxZnWCyEgUygyPVozlyVuXWqwNZqPwRgtCQqDKRAbrnneduLSgzGqtRurDjMMkcgMpiAusQCnbPUrAyIJRKluMEHZKJywzvaRCTeJwDmntUFSBilRCselWWvLtsTjlcRUKUpvtFaeIvQrAlSJFXbppMvdGxGGnDIYBizMRfuCbmmUeWfREAYSbBgHQmUlsVpkuXMMeowNhKBGCZUNVFdPkKBrpgAirVeCSOeNwLsGlAsyJniCMbRAgqcQFTRsJIfltaoRQrWPyfccwDfxXrfEFFb');
        count_10 = objectStore_2960.count(KeyRange_32);
    }
    catch (e){
    }

    txn_4417.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4417.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4417.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4418 = db.transaction(['objectStore_2960'], 'readwrite', {durability:"default"})
    var objectStore_2960 = txn_4418.objectStore('objectStore_2960');
    var put_5 = objectStore_2960.put({f0_m: '<array>', f1_g: '<string>'}, 'aBAYPwwcsDOecnXVNzzhfpWmweYsbUrDbQdSYdoOpbVhsYUoezfzmklPNLclydyJLrMrxNpySedEEjDltaoAGuhNnfupNhnFqMcqcJgHlBCpywlLlLtLLFMLqGBjOQjWhtzrpyvxgYyFOAMZrZHOXUEgrRcvlZTPaDeAooxxMozaxXfmcuwatpZaSVSSevjbAazPvPWiNyyXMYsiWrCiMZBZzSBfYetFDXuTnoVRPpsfuYSsQhlxqVgBRiaRSlcOiuSfQVdzcpZvftaqmpJBcUgvXeNcYKVlMufzSOLFgwKbkaKCgSPaMtJgWwmioiWjhFEYXIdINplCMBMxWcyVZlBvvKgiNivfKzKVIQqBNygqzzAAeoyGCnYgoLFliLpTztLxvipmETVkGPvyEmcwPWEkNELlrNSrEojidsHMZdQDXYjTrYiuuHgprTdvMilcaGBjaePYevPAsOabIaFztktxmi');
    var add_2 = objectStore_2960.add({f0_f: '<array>', f1_k: '<object>'}, 'OZKidWNpZkxHtbIVcaJFcIYQlfxmDCgAsFmxUzjJcMACOtLsHODlioaboRpPgHxgySmudiVfXOpSsSKHIAripPYuXsSxZoltgzcVGJxGTrvEjUxwTyFKvgBNeXLnFOPieiKhkIJNFLJl');
    var get_7;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', false);
        get_7 = objectStore_2960.get(KeyRange_34);
    }
    catch (e){
    }

    var put_6 = objectStore_2960.put({f0_q: '<null>', f1_f: '<null>', f2_y: '<boolean>'}, 'IUnLMBBhvyyQlwswQyiNiklKynrYMvJOArACuPRWuoOArCPqKQzAZSMeELUbbLXKHKDsHejdHYlIHIXxJratQLQpWzCvDrAbepaIVfcKtPRnKLofYpxqepjpROBMrxCOnKztPJziFsFfcbZuJFZXzcASbtyQgjhYTUknebBIfBJTxiUBJqPNWMPPaHoBEsMhLMWZIcyOYEmCOIcKGJPicpgmKGjzcDxunoTOlKsboXDAeJkzrhHfPbesoGZWRhjoVtAdhPHPKdZkLCSAGUMpbNbttrLYPVTqZJiPSkpHCFGoEDjMKTSYZqqdIAHTBYZdYFwgUuVwBAfLTAlLLkpcuWvsOVoKrbKOtlHstRkBBMRyEPEhOWIKkqVuUtNOBZPbvIZvdANdhH');
    var count_11 = objectStore_2960.count();
    var put_7 = objectStore_2960.put({f0_s: '<array>', f1_l: '<number>', f2_m: '<boolean>', f3_i: '<object>'}, 'HuLLpfGzFUcKJbIikZLCkhPKUsCPqCsSIJJJDAzwVPHTbIOgpjktsyoRJfuAbYWBLUnRWzzjmtVBeNKWrcBCGZhLnpAkfGAMXOugIryVPrTuHldQWgwMMZQBWtJkXkQNdfljXDYhSzsXVCZdcVoECvLhVEoipvOpczVcveAGXUEFAgGzwWnQbSxcVvNtamCUhPuYSiVCdoRzwPERxoeFseApvqqNRwDPLGFyUCkbPhCVLKyVZUhDNaQWkOXpmtShWmeWIvFGpSSMIEwdzIMVmqGOPjLtclbCGUFGGQQXtAibAIEvvSqfsKJTVKrvwGOUSHOwPQOSvuTBSTSkIfXWskZtIGnzwUiiQOooHzNMgSqQVRXoAgpAiktchvTaqQheACgoJjdWMIAObmSBtxfaiwlsdBylAsyyQGVwtNoAcboIOkXihHMgCWBomhIlbwrDaPQRrTiDWDQCqzGrvDvUpSuARrQvNiUtosnQdzKsdUJWeinUysQHdNuUjMzptZtbXgTgOntFCutncpkmVvbVdSnBMTSgBXuyBBmRhgmqAjIckkcIDOgOUkSSvzVixyojFLjGwtMYhScheoUaJMtEzqNqOuKcOyorHNoVwrlZKgWmHiXeqZMNqtVDCXAxQeVloMIaOGDfLpyKuZiwsnhMEZNLfLKhMhgEXmYVFHbhNRkOVUiRDgUBjZPCtsDLAMvaOFAYbhfDtrjMqkZGCZeAGFEkyaTTNynbXiDttLJUHOAaEtTbSNipBnhqfUuuumVZZOxcJShSNEnOGKsNEqsrPjKWSogXmkmJYlyWVxFLGUXgknzIclRGbjATCWDLhbWSqHjhlflFkUljBySt');
    var count_12;
    try{
        KeyRange_36 = IDBKeyRange.bound('VytgLGLKhmLbDUvqjfozyLnvARfLXwtqZdqagmEtdfNJrSoTImQexlhSJZhtYZAPwtmSGVqudBfuvNiqvVFdTTrwpGlgLbwGscybCoqqcvVUUTuiiEYlJvPbnamRlDcAnXxbkCpHPqRIKdtuRdJwkLhriHiOhmNwLiqspanhnolyJaudeMfRmnDOgPTrwjyfHOfcdJotCghzNaQqctGzbQMehZaOfIbvASoSdFZlxnPUuqZQTEujydiAlhmPGMAnncCCeBjWSquUHOiltGoTzbGuQnTIUGZiBHtonJJsJXNnFVEStKVwfqZUGrdUFAXPpqEnqqoVxbYaZZRcVllzfRxYXYLdMVQGaTOfHxIPzUjwONRvLWSVPwqWDhVESvXtvpksJMFGkPzapsghpSpRQhRmUfTcWywklKugNnUxRVRZjtQOpfZYdHMcUaNaTBZcJfNvwukZnLfxeFnesGNTUkxDQKxUvSPMVsvCHNIOgvnMuCavzHcrCWNlrfIUMFSfbjJbPylAugniYmcwupiPDaVCEykkGGxfAWYGZfEhWNIBtjYwWmSzgHtzIhdCovUFooJypBDiWrbyKroGCFdbtWaRBwWAcNsKYZmXuBCpSfUYseRITQhBNdKDnZSdvdrebQYssSujgAiqSbgLwhzeMkHesvvWJJtliQEiEaXWyUPcCBBfEIjiVYHqRyeoGlyzYCDKhQXyBisZPKqpJBKiQJbnYjyejSeTjLAxCkJvLyuCTOJliPyfLMHyEGJHHbBGYvWRkmdYNelbenkWuHaZlWumZRMHoBzZSLStZgizBYcvVYceZBipVsrMLQKejxGEAqoNwvlHFzygjGPFZLpCcPRDnyNrKfnolYZubgSRXpxwFunraabXOzfjGQOzvhqPBTqyRnjuJiWDnBUnLvaITdcYufjBbJyVTPDRPfge', 'IUnLMBBhvyyQlwswQyiNiklKynrYMvJOArACuPRWuoOArCPqKQzAZSMeELUbbLXKHKDsHejdHYlIHIXxJratQLQpWzCvDrAbepaIVfcKtPRnKLofYpxqepjpROBMrxCOnKztPJziFsFfcbZuJFZXzcASbtyQgjhYTUknebBIfBJTxiUBJqPNWMPPaHoBEsMhLMWZIcyOYEmCOIcKGJPicpgmKGjzcDxunoTOlKsboXDAeJkzrhHfPbesoGZWRhjoVtAdhPHPKdZkLCSAGUMpbNbttrLYPVTqZJiPSkpHCFGoEDjMKTSYZqqdIAHTBYZdYFwgUuVwBAfLTAlLLkpcuWvsOVoKrbKOtlHstRkBBMRyEPEhOWIKkqVuUtNOBZPbvIZvdANdhH', true, true);
        count_12 = objectStore_2960.count(KeyRange_36);
    }
    catch (e){
    }

    var delete_2;
    try{
        KeyRange_38 = IDBKeyRange.only('IUnLMBBhvyyQlwswQyiNiklKynrYMvJOArACuPRWuoOArCPqKQzAZSMeELUbbLXKHKDsHejdHYlIHIXxJratQLQpWzCvDrAbepaIVfcKtPRnKLofYpxqepjpROBMrxCOnKztPJziFsFfcbZuJFZXzcASbtyQgjhYTUknebBIfBJTxiUBJqPNWMPPaHoBEsMhLMWZIcyOYEmCOIcKGJPicpgmKGjzcDxunoTOlKsboXDAeJkzrhHfPbesoGZWRhjoVtAdhPHPKdZkLCSAGUMpbNbttrLYPVTqZJiPSkpHCFGoEDjMKTSYZqqdIAHTBYZdYFwgUuVwBAfLTAlLLkpcuWvsOVoKrbKOtlHstRkBBMRyEPEhOWIKkqVuUtNOBZPbvIZvdANdhH');
        delete_2 = objectStore_2960.delete(KeyRange_38);
    }
    catch (e){
    }

    var add_3 = objectStore_2960.add({f0_e: '<string>', f1_e: '<array>', f2_d: '<boolean>', f3_b: '<number>', f4_a: '<object>', f5_k: '<boolean>', f6_f: '<string>', f7_d: '<object>', f8_k: '<string>', f9_i: '<object>', f10_v: '<string>', f11_m: '<number>', f12_a: '<string>', f13_q: '<array>', f14_e: '<null>', f15_b: '<null>', f16_s: '<boolean>', f17_o: '<boolean>', f18_i: '<string>', f19_x: '<string>', f20_w: '<array>', f21_t: '<array>', f22_s: '<number>', f23_l: '<number>', f24_l: '<object>', f25_x: '<number>', f26_s: '<boolean>', f27_j: '<array>', f28_n: '<number>', f29_z: '<boolean>', f30_m: '<null>', f31_e: '<null>', f32_q: '<boolean>', f33_g: '<object>', f34_n: '<array>', f35_c: '<string>', f36_j: '<array>', f37_u: '<object>', f38_m: '<object>', f39_q: '<null>', f40_h: '<boolean>', f41_z: '<boolean>', f42_m: '<string>', f43_s: '<boolean>', f44_u: '<number>', f45_e: '<array>', f46_m: '<boolean>', f47_l: '<array>', f48_m: '<number>', f49_p: '<boolean>', f50_u: '<number>', f51_k: '<number>', f52_d: '<string>', f53_q: '<number>', f54_n: '<number>', f55_w: '<boolean>', f56_w: '<null>', f57_t: '<array>', f58_v: '<boolean>', f59_c: '<null>', f60_t: '<array>', f61_d: '<null>', f62_v: '<number>', f63_g: '<array>', f64_q: '<object>', f65_x: '<string>', f66_a: '<number>', f67_y: '<boolean>', f68_w: '<array>', f69_r: '<null>', f70_l: '<array>', f71_m: '<object>', f72_f: '<number>', f73_f: '<number>', f74_f: '<object>', f75_n: '<boolean>', f76_z: '<null>', f77_n: '<object>', f78_k: '<null>', f79_b: '<array>', f80_p: '<null>', f81_i: '<string>', f82_d: '<boolean>', f83_j: '<object>', f84_g: '<null>', f85_q: '<object>', f86_w: '<string>', f87_o: '<string>', f88_l: '<string>', f89_x: '<string>', f90_i: '<array>', f91_h: '<number>', f92_m: '<number>', f93_v: '<array>', f94_k: '<number>', f95_w: '<boolean>', f96_b: '<boolean>', f97_v: '<object>', f98_t: '<array>', f99_k: '<object>', f100_k: '<number>', f101_u: '<null>', f102_a: '<number>', f103_t: '<null>', f104_z: '<null>', f105_a: '<null>', f106_b: '<array>', f107_n: '<null>', f108_p: '<boolean>', f109_v: '<object>', f110_k: '<boolean>', f111_j: '<array>', f112_x: '<number>', f113_x: '<boolean>', f114_m: '<array>', f115_z: '<object>', f116_a: '<object>', f117_x: '<boolean>', f118_g: '<boolean>', f119_x: '<null>', f120_s: '<array>', f121_q: '<array>', f122_v: '<boolean>', f123_l: '<array>', f124_w: '<object>', f125_r: '<object>', f126_m: '<number>', f127_e: '<string>', f128_k: '<null>', f129_p: '<string>', f130_l: '<null>', f131_a: '<boolean>', f132_t: '<array>', f133_o: '<null>', f134_p: '<array>', f135_a: '<object>', f136_q: '<string>', f137_e: '<string>'}, 'NaqimsswfydGOwUtxwwwxHdgpzUlHPtmGXDOHFbQzNirpFvfCdLYSzxawvUSKOdxcfuZSJudLcFHcuIjyoeDsrYvELhJzFDPNoMlgcWiPsbzvIkxcTSQjjyYKDgDVVmvLqxwmQsyQNFmYnzstJGUWIzCjIhprmkfCkIeBkwbqPmfZVTjcjgzgSNrllrMfdkRcEeTtGdqSEpBGPSxMIlZSjHsUHdSLLPPbutQvqMRUXUCuRmRtortGZKiZcBBZJUmKGIXlAIJXULqWADspzcrHmVmYlImTkDUfDxKxYAjSrZYJitMSZsVerJFKWipETXHZhnxiQcSLeHvlvIimdNDGIAnWLqMorEkIBESosFyfUlRRSNsGmfYuDzqfdsbIqwolntzjWnduaKsveEKpGQdCMohcqYJPmOFRIEnZLzxumqFXbvfkMIouYjUxReSlXmAwmUZDbRHnUQHTTfwUAndoYOlRKOCFsCbEyyvGPHwUzHmkHOXCOLjddoKyVceSfIrEHqTjayObsrvyOJObNUZNBNRpVGeZziXXMKWCsXCufOVmmjLIhHPUOKIQAxYyQqOdwgRZdgstfnbTfSnfrZlagEPAiBdJNYTaOPCFYapzbwJMBYmJuvFJZdafWsCtLdDkfcSlUbShD');
    txn_4418.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4418.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4418.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4419 = db.transaction(['objectStore_2960'], 'readonly', {durability:"relaxed"})
    var objectStore_2960 = txn_4419.objectStore('objectStore_2960');
    var count_13;
    try{
        KeyRange_40 = IDBKeyRange.bound('hBNCqbxRZgoPMXLKeRqZTlVTlFtSNeaHZOEFaYMwUKSKszALaTBdItouDdUjrNesNhnyFSavkidysnacUKtDznrhdNSmQsQwwMxfjlWmQYuXRvihNtpPHhaaAGwaBXxVekfTsvfyVReXEbECXcobwClcYhCkluRbHWcvDdKOIdjSxQIMdJvzwlOGDlwrcGAGEzXUGczkuQMHDMCABChRqMsGIoccOinlfakAOTqNVdMVvpgZawqiBtquwkztoNARcstiXpTdmsHYNctfnyiaVTHNRcURRmvZCJVdINPdggbOyFPtMWPiBJAQcbMKLfpyBhAOmlkxRECTYFYzLDIoAKpBJwKwbmBcPJJgWbwFbMxHeaPHMPTKEDhwwhlhpLMLCKDWIdCxAmIPEAyKKxsowGMvMFFFyKhraDFFVKKkudkTrncvGpexbzJPlksodPIGjHxWVEoeUkplnMwnqWnDpgwjYQcHlBlciAyFdpeEIZOGLzObvnTbNzrdpHknsNmiezTPHrrvxOxnRhdWguPxGcPCHMtJqkFiJDDbNYEQUZHwIqMAlrMQJuDDkYlWFRYwdHcouZTFpOzqPoWkrPufbiDWGqsLNhxCPKaGCsBKIjsuBgVzOCRNDlIMYLPimUeyJUIYESBVQFMAqhfTrZMudaeSxpwfXLTcSPKkXchtezrUgtwpWaZOgyqXkxxpGvMcouWRwGgubNKoAbofrdJXgPRzwWhbSvEHJMeIKiEHStwavUlPnrBjIpGlyWCKCIVmrapKCrnaKPIenMWcIBvBVocAAKqHBufeRTunuyPqllMAqroDIStCKUYXHuhTbErABncBsXtStiljiSITudyNadzTajkgXzUJKyWWLkyOevTWtweJOJOIlxfiAbClPXEhoWqHbd', 'DoKlSFfKOSIdvFQnNqOKuvvLUWUoySrhIIwjWTOaFpcNRuxLuINkaqmRJfquzMCPgzHJNJDrttKwJxPyCpvzZSPblzQNDSaWDRXJVVySioreCjAaFSTuakuVxYVV', false, false);
        count_13 = objectStore_2960.count(KeyRange_40);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_42 = IDBKeyRange.bound('NaqimsswfydGOwUtxwwwxHdgpzUlHPtmGXDOHFbQzNirpFvfCdLYSzxawvUSKOdxcfuZSJudLcFHcuIjyoeDsrYvELhJzFDPNoMlgcWiPsbzvIkxcTSQjjyYKDgDVVmvLqxwmQsyQNFmYnzstJGUWIzCjIhprmkfCkIeBkwbqPmfZVTjcjgzgSNrllrMfdkRcEeTtGdqSEpBGPSxMIlZSjHsUHdSLLPPbutQvqMRUXUCuRmRtortGZKiZcBBZJUmKGIXlAIJXULqWADspzcrHmVmYlImTkDUfDxKxYAjSrZYJitMSZsVerJFKWipETXHZhnxiQcSLeHvlvIimdNDGIAnWLqMorEkIBESosFyfUlRRSNsGmfYuDzqfdsbIqwolntzjWnduaKsveEKpGQdCMohcqYJPmOFRIEnZLzxumqFXbvfkMIouYjUxReSlXmAwmUZDbRHnUQHTTfwUAndoYOlRKOCFsCbEyyvGPHwUzHmkHOXCOLjddoKyVceSfIrEHqTjayObsrvyOJObNUZNBNRpVGeZziXXMKWCsXCufOVmmjLIhHPUOKIQAxYyQqOdwgRZdgstfnbTfSnfrZlagEPAiBdJNYTaOPCFYapzbwJMBYmJuvFJZdafWsCtLdDkfcSlUbShD', 'kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', false, false);
        get_8 = objectStore_2960.get(KeyRange_42);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.bound('xiUnitxJgRnDhugluAoNUtcELZvksCdiyQjSsTSurGshtsrGqBzIrPiHeelIDDLbxjzCyeuUZQLrMsWmBSCmFWUXCNHmCzlsMWWSTKPJqWbFYQxFEzoNbqgvnrVXSBfBopfsYBxVQNWZgdxtJKBxHgspbRIUCSaZSvgShoOKkqltqyAhPVKFpyynEWtiwEzRUQOyzXKHvKXzmQgJuANwEfXGsfTjUDcFUUcPHguexXLCUWpOmHisvTQcQmnogJOUDmXYQdXCzinmCcnlkPmJLnWPxRwxPfeLVkWSuyqWptlYbulxGoCmOfkcQrFawPuHjEcFhgKnKMXoXGOHedzmwhOrjHOWrPaHPHsmzSCZRbAwEXfqSAFloQnXotKRYvCWvJEgAXVPzykGlUyOoCYshLGfyDVDWCmeXxzXffdHwoIruqxrPeQBkYdvqkplGwrzvoYYXHJmaKMnRXUEAhNByAQPGEBsDAOMZYzITqFdDbofjXSqsjuBPPEykAxrTydlTLpSpcSXgJltbHSgJFAsEBcLkRPkMpfklcatjldfgUXfqcLrslqBxKgTlsIDIwkHUVkEBkSUIVTQtAAZexSQdludHjckGUFuoCsZWFehDjiAtJiVieUiGVwtYckVyipmxQzyVhVuiKzGepeotvDIRgkkqrWPrtMwLTPWcpdvNKsgFPHyUTcMwfsLAYiUUZPmkctpHWuesmWdcNueNdRscGxGAaNgtdKVuJXtpCBgIpwEYeWDsWwmMXJDzYCHhQzibOvPxXFUGcIdUhmOIzLTJDRYUkmaHVGRiSAHcHMJIJgrwTYwhCqpubEfJQwplmVRpTAlwcvlkBwHIJQPlpEXcfXMPGAYFbBmwhP', 'aBAYPwwcsDOecnXVNzzhfpWmweYsbUrDbQdSYdoOpbVhsYUoezfzmklPNLclydyJLrMrxNpySedEEjDltaoAGuhNnfupNhnFqMcqcJgHlBCpywlLlLtLLFMLqGBjOQjWhtzrpyvxgYyFOAMZrZHOXUEgrRcvlZTPaDeAooxxMozaxXfmcuwatpZaSVSSevjbAazPvPWiNyyXMYsiWrCiMZBZzSBfYetFDXuTnoVRPpsfuYSsQhlxqVgBRiaRSlcOiuSfQVdzcpZvftaqmpJBcUgvXeNcYKVlMufzSOLFgwKbkaKCgSPaMtJgWwmioiWjhFEYXIdINplCMBMxWcyVZlBvvKgiNivfKzKVIQqBNygqzzAAeoyGCnYgoLFliLpTztLxvipmETVkGPvyEmcwPWEkNELlrNSrEojidsHMZdQDXYjTrYiuuHgprTdvMilcaGBjaePYevPAsOabIaFztktxmi', false, false);
        get_9 = objectStore_2960.get(KeyRange_44);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_2960.getAllKeys();
    var getAllKeys_4 = objectStore_2960.getAllKeys();
    var count_14;
    try{
        KeyRange_46 = IDBKeyRange.bound('IUnLMBBhvyyQlwswQyiNiklKynrYMvJOArACuPRWuoOArCPqKQzAZSMeELUbbLXKHKDsHejdHYlIHIXxJratQLQpWzCvDrAbepaIVfcKtPRnKLofYpxqepjpROBMrxCOnKztPJziFsFfcbZuJFZXzcASbtyQgjhYTUknebBIfBJTxiUBJqPNWMPPaHoBEsMhLMWZIcyOYEmCOIcKGJPicpgmKGjzcDxunoTOlKsboXDAeJkzrhHfPbesoGZWRhjoVtAdhPHPKdZkLCSAGUMpbNbttrLYPVTqZJiPSkpHCFGoEDjMKTSYZqqdIAHTBYZdYFwgUuVwBAfLTAlLLkpcuWvsOVoKrbKOtlHstRkBBMRyEPEhOWIKkqVuUtNOBZPbvIZvdANdhH', 'IUnLMBBhvyyQlwswQyiNiklKynrYMvJOArACuPRWuoOArCPqKQzAZSMeELUbbLXKHKDsHejdHYlIHIXxJratQLQpWzCvDrAbepaIVfcKtPRnKLofYpxqepjpROBMrxCOnKztPJziFsFfcbZuJFZXzcASbtyQgjhYTUknebBIfBJTxiUBJqPNWMPPaHoBEsMhLMWZIcyOYEmCOIcKGJPicpgmKGjzcDxunoTOlKsboXDAeJkzrhHfPbesoGZWRhjoVtAdhPHPKdZkLCSAGUMpbNbttrLYPVTqZJiPSkpHCFGoEDjMKTSYZqqdIAHTBYZdYFwgUuVwBAfLTAlLLkpcuWvsOVoKrbKOtlHstRkBBMRyEPEhOWIKkqVuUtNOBZPbvIZvdANdhH', false, true);
        count_14 = objectStore_2960.count(KeyRange_46);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_48 = IDBKeyRange.bound('VytgLGLKhmLbDUvqjfozyLnvARfLXwtqZdqagmEtdfNJrSoTImQexlhSJZhtYZAPwtmSGVqudBfuvNiqvVFdTTrwpGlgLbwGscybCoqqcvVUUTuiiEYlJvPbnamRlDcAnXxbkCpHPqRIKdtuRdJwkLhriHiOhmNwLiqspanhnolyJaudeMfRmnDOgPTrwjyfHOfcdJotCghzNaQqctGzbQMehZaOfIbvASoSdFZlxnPUuqZQTEujydiAlhmPGMAnncCCeBjWSquUHOiltGoTzbGuQnTIUGZiBHtonJJsJXNnFVEStKVwfqZUGrdUFAXPpqEnqqoVxbYaZZRcVllzfRxYXYLdMVQGaTOfHxIPzUjwONRvLWSVPwqWDhVESvXtvpksJMFGkPzapsghpSpRQhRmUfTcWywklKugNnUxRVRZjtQOpfZYdHMcUaNaTBZcJfNvwukZnLfxeFnesGNTUkxDQKxUvSPMVsvCHNIOgvnMuCavzHcrCWNlrfIUMFSfbjJbPylAugniYmcwupiPDaVCEykkGGxfAWYGZfEhWNIBtjYwWmSzgHtzIhdCovUFooJypBDiWrbyKroGCFdbtWaRBwWAcNsKYZmXuBCpSfUYseRITQhBNdKDnZSdvdrebQYssSujgAiqSbgLwhzeMkHesvvWJJtliQEiEaXWyUPcCBBfEIjiVYHqRyeoGlyzYCDKhQXyBisZPKqpJBKiQJbnYjyejSeTjLAxCkJvLyuCTOJliPyfLMHyEGJHHbBGYvWRkmdYNelbenkWuHaZlWumZRMHoBzZSLStZgizBYcvVYceZBipVsrMLQKejxGEAqoNwvlHFzygjGPFZLpCcPRDnyNrKfnolYZubgSRXpxwFunraabXOzfjGQOzvhqPBTqyRnjuJiWDnBUnLvaITdcYufjBbJyVTPDRPfge', 'tpymNNKspcFqdBkELKKzCcliJKScoOPObMtoqPoldCbugwsoxTKZCSCLzvlQvFAuGYBSoXUFhrIoCbkuejMzgufdRIxDTjeLvIneRhntzzIHXvpyWjEIUtUVoFMQwTMegvRAXJIoCIQjdGolFaBexTCpdQlbiojyPnJwtnlYG', false, true);
        count_15 = objectStore_2960.count(KeyRange_48);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_50 = IDBKeyRange.bound('nSvGbJBFOTLsUlfHOIKNttkITcilILKfLMjCEShQbeZZimObyroapzxCjPVCvLOGTZJWSpYmGWWfmXbaPaDHTQAKHBZbHWOyNNoqeWBnpYjSCpRyddUOfPHkqgbnyLNHNXGtrNLcVePZjDNaIQPTCJXLmOkpMGXocRWLMzmfojDTCvjCpdkreRQYbIsJrPnxrJqEGkziceGrzjcxsFyrVVcfEwuQNJjoOJTUiPaiqCUIpXTDPGsBtvEFYwXbxJjhyIJGaNlRxZnWCyEgUygyPVozlyVuXWqwNZqPwRgtCQqDKRAbrnneduLSgzGqtRurDjMMkcgMpiAusQCnbPUrAyIJRKluMEHZKJywzvaRCTeJwDmntUFSBilRCselWWvLtsTjlcRUKUpvtFaeIvQrAlSJFXbppMvdGxGGnDIYBizMRfuCbmmUeWfREAYSbBgHQmUlsVpkuXMMeowNhKBGCZUNVFdPkKBrpgAirVeCSOeNwLsGlAsyJniCMbRAgqcQFTRsJIfltaoRQrWPyfccwDfxXrfEFFb', 'hBNCqbxRZgoPMXLKeRqZTlVTlFtSNeaHZOEFaYMwUKSKszALaTBdItouDdUjrNesNhnyFSavkidysnacUKtDznrhdNSmQsQwwMxfjlWmQYuXRvihNtpPHhaaAGwaBXxVekfTsvfyVReXEbECXcobwClcYhCkluRbHWcvDdKOIdjSxQIMdJvzwlOGDlwrcGAGEzXUGczkuQMHDMCABChRqMsGIoccOinlfakAOTqNVdMVvpgZawqiBtquwkztoNARcstiXpTdmsHYNctfnyiaVTHNRcURRmvZCJVdINPdggbOyFPtMWPiBJAQcbMKLfpyBhAOmlkxRECTYFYzLDIoAKpBJwKwbmBcPJJgWbwFbMxHeaPHMPTKEDhwwhlhpLMLCKDWIdCxAmIPEAyKKxsowGMvMFFFyKhraDFFVKKkudkTrncvGpexbzJPlksodPIGjHxWVEoeUkplnMwnqWnDpgwjYQcHlBlciAyFdpeEIZOGLzObvnTbNzrdpHknsNmiezTPHrrvxOxnRhdWguPxGcPCHMtJqkFiJDDbNYEQUZHwIqMAlrMQJuDDkYlWFRYwdHcouZTFpOzqPoWkrPufbiDWGqsLNhxCPKaGCsBKIjsuBgVzOCRNDlIMYLPimUeyJUIYESBVQFMAqhfTrZMudaeSxpwfXLTcSPKkXchtezrUgtwpWaZOgyqXkxxpGvMcouWRwGgubNKoAbofrdJXgPRzwWhbSvEHJMeIKiEHStwavUlPnrBjIpGlyWCKCIVmrapKCrnaKPIenMWcIBvBVocAAKqHBufeRTunuyPqllMAqroDIStCKUYXHuhTbErABncBsXtStiljiSITudyNadzTajkgXzUJKyWWLkyOevTWtweJOJOIlxfiAbClPXEhoWqHbd', false, true);
        get_10 = objectStore_2960.get(KeyRange_50);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM', true);
        count_16 = objectStore_2960.count(KeyRange_52);
    }
    catch (e){
    }

    var count_17 = objectStore_2960.count();
    var count_18 = objectStore_2960.count();
    var get_11;
    try{
        KeyRange_54 = IDBKeyRange.only('kNUGRzcBmVPAAtuLFpynUhFqSDleXmrhiUThtgtaJNdXYozAwQFuuMUkaMjlZcYjBcFXGOECEWKDBGMrwuxzOKoDJbxdcVuDXUcDYTrMCgDmNbDkjypLMcGhEPlNKNlmbywKPisbMJivwqPDJcAYefPcOnpMHOrpEOQwXQBChSvbMhVWqUERuASHvwkxQvhsWXbrLkNSYFaEscZUvblXMVAjrUseWaOiM');
        get_11 = objectStore_2960.get(KeyRange_54);
    }
    catch (e){
    }

    txn_4419.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4419.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4419.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9808')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};