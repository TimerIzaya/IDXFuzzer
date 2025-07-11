let db;
const openRequest = window.indexedDB.open('str_2504', 4173332973096454)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_63', {keypath: 'TrbKIDWcWetRgmQyvlXDgmwTfxKlwojwdppdZmBRlekNZDDVHlZXdRZXgDhsbjRADFaSnQgAtjexCjFZmBBneBwJmjRZGMFRjLZNGxOkbZNpgIMxTehWnsEDsiXedNmyBwrmBplSoBKuXUCrpJakZNrGIyGhtbRsnBxNaOpIcEFIjfTizPGfjpfLpbXuallGYMvgAxMOOijDwWMcSHQmKBhMzBfkMPbfzQiqRQKNriztVnydnWQoyYdVYLxffDPOsQlIShpQRuZJFYWiVpYsmXNnqZjPdBpCgfTYddUBaZPvdPzdrBHmcXkpQCYCyvjkrLMcWgihMvYVLmBtyBTAGoJmdZwypKfovCWZDiApvAFpyUzQZAmePvMwekcwqGJWsLkDyMTJcOMRidejOebSXkJlKFpkTCrCKlbwxqweiVNbSTqRSVfFVbhrMKBswlAflMZtOVTltiVPUFtxGuWjHShXRKuOFNHhFfheMLZhDsevivhCsBdhiCHGLmprCThDNqFyiRtPMcfZmyudtypuvdFKZOjKjFxoSwQzLuKOIpzDaksQEkFWPssmmMScipKlvuVwjEtEqYFtxKrkGDtcGunyGgpXFBYuKrwgJFcdAnkBDOxEpnyPUuXYyySRdFMIYgFyjviXldALHWUeILduImqzYpOWerqOjDoaAgYekCgCjjWfTHjKnptlEOxwABrZupiUaNXPrzvaQhsROQDOYbuERcdRGgwQepIciYlufjHaqhEYslxKinkAZjkjoFndtdfhEMFuApGvUpbdsgfFoQAbWVQpzoTgDmxgWSeTculHtpAiAzfmUCElkjDemsyofVaqzBCmUDImyUzjFpdVmxxMTFCeGMndXnAelzxQGcmrRsRNDXCrnQNroxSBUaYjkIxSzstfBWEUGviTeTfgHHccDTNnOdyGWhUwuzaTChHaNRbmBbLQMPAuKmFunBuxUHIfclNugxkBmeqJY', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_q: '<boolean>', f1_w: '<null>', f2_b: '<boolean>', f3_e: '<array>', f4_j: '<boolean>'}, 'GpGfXwXrGPaePyDmsdhihccpLdOkSFnomPCetbOnVasbhvhuwcSPIZmqoUasoveNsnzOEMTDHwbrvYETtbOWkXVphCjmcvUtcUjUxFBNhHDmjofBwLvfLzzOVVIhodCcYoZWpzqyJystzZzXYkXOdjXoxwfITWOOxUslvKAVLcIuqVlCCLyuJvttiNGTkoJTANNcdQKosWzQBZDDVyUVAArlqziyyBsmdflqFhBEIHeAOTaqaORGOPRJuYSUFjFJHqUPwnOkUOPmgtSyvWOOGznpowvNGMYUywuLSLpRCVPdWlaoDRBXyQWsyUNqMlfdLcWUBeHYEPMvjAmzJsAQvFsXbLnVxAhOoZgFoLwflntkxRukdapWKxGryNUNEjWAETyyyyldsyhswzKnfvlQUdNIKsMbbFmXQTWrsrdhZuLNYKqauiwUjSwSSvkejRJXOOWtTnSjTKRwEkAstndLiiefOTemgXTfxJnwkmIeCiSJQNSjyzwRQbitZIZauAXpXiDFdCuukKqYrYlePbzjbvrtLEpyyCMDnuosDlrZbvmQujsmKLEOcsrFknXdaBXQkOdaFnMexAywlMNzrDFtdPrACpp');
    var index_38 = objectStore_0.createIndex('index_38', 'test', {unique: true, multiEntry: false});
    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var add_1 = objectStore_0.add({f0_o: '<boolean>', f1_g: '<number>', f2_v: '<array>', f3_g: '<object>', f4_j: '<string>', f5_p: '<string>', f6_b: '<object>', f7_c: '<number>', f8_i: '<number>'}, 'JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM');
    var getAll_0 = objectStore_0.getAll();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM', 'JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM', false, true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_0 = objectStore_0.put({f0_e: '<null>', f1_h: '<array>', f2_z: '<null>', f3_d: '<array>', f4_z: '<null>'}, 'ARPqzrediLgMTTeLDjgvpiuoHkbDJMGBPfjzrSkpMGVeDDdOpiMcLnBhZIhCizrNMiEGqydfmMchocceTRejWlqlUSdgLsqxhuYMJEKftmeJkEsexccKhxWqWRQfXnkWvLVgBUTfnXUTNtCFKFlYkmOtsKizLMnHnoNRLxCrBfVMxFSDCZKiWZmTxUtechxsTOxXeIEaExERWPmIDIzQrNVRZHfCmBikNFYJwRPpnGkuoDJnSUACXZAOZfUuzVNgKfGzjnWTKLYQUtrWNDbvvzWAMwjCXfSaTADiIkHSDwVrBbuzvUTrTwBJzMcZCBaxXPlFQgWNuKzWLEjFXMyCkmezNUDZNCfYLsjvujSKJJkYuQCaEYAtJcmkelmAFspWYGaajHKLomJMTOCOgEOjggNkPBCWzURKbzwazCrxnvvvdxsnretfuYhyNazPYKcFTGkQozcplQfgRwwykTvUHvVnfMLZnxsWJJRaULuazxFYsUXSefCXMBSRjbiRigLOmLUUygBdvqPezFYyTCmVFXmhByVuHHZFfXOpsvgtlUqYBeBiRfcjTGjTMVAUZVEevswgcQMsfRobUiwhdMgJpMfeYlgednZIpDMeptnDWoOypKovlyhPHdtYqyPIuiSsQHvkfPrVHicgTZYmgAzDPuXlNwmpoFvVYaPvxtYFcjTvuzNwTHHJMXGGReOAmjiqJofTrNAdakntOGziwcTtEiqKrJiHPYJWFRvscBqClcBVMZWyAnbOPFTRKktehwtLggjtnveBMgjvvqbYOQFgSqaSDqocBGGVtlOmBxAaDgqnECCvrqbZctvvsKKiXfnFjUVfwQwVyIxwuGTfBTuxNkeObZKWLerGzmjVYwXzWeVEH');
    var getAllKeys_0 = objectStore_0.getAllKeys(907058872);
    var objectStore_1 = db.createObjectStore('objectStore_64');
    var objectStore_2 = db.createObjectStore('objectStore_65', {keypath: 'ppxBYMMtNfFGFnLSgyhiMhwAxEZsUFMtvaBgWnWGrQgOnXPTeGxydNqBbuCAPuwTyuQDfbyWEZUXCQCjfcdUxdkLuGbLHXBLimSJRKlWCdMGDUKmWmrqHRAeSjCYlBdUlfZtiWeiyFzsIIankDPQqmeQixCBwTFWTCNQhITYbCZFDWXRJneugshEhArdsOXCOzIEiUpKtPxpScJxrcqxNTYsFiEkRAZxqRcVUnkBJdrswnONZSsdrvfQHaJWPwjZlXFOHvWUhLpjfnrcjnILTzHatbDOYKRwXCvEPxwwzklNXDreWxZnKsZcSDEKaAuvOqmtmshwYjxfUlRuzLShDRrmlZUpSEzjgOMIFziDJAiDkGanaLgtrUEqvjwBrqJnrbidQQJiARSqMTUnDebkwrPlfhmWPoliROaWrwcfjfibJECjVlCKkiKHmFrdDxAlLsYCazHIHlhuGFtUgwJpLwTAxXajnWzEXfrRzCDodpYBtOoqjWhCzEASBqjaqUGmyNVkjLgORzSCSLIeuUnuscXtZXlaIRpbGbhRetqGhybBJOXvfDzHIhCKJACCjCTbjVgtaVEIsrNWfWhuPEfHXkVDHgCpLEpQWMYFrsOPJdzdEgQMaUFqmvpAAIEfpruHxhwMHvjPqDbdoVhbYbuDbuazLhogWWWCVOTBhtDWvheqdvbAwnlWNAyiLQjhJZpNICUQFtwnLFghYrzkaGIxljdiUSqRYieipMLLOjvDEnugLNtZJAVZjjXUGCUPAFIOtKTaRyZRalndmIFQFFuWacMSLsxeLUKvEnRUyhSaaboILwObfwwajPokTlZPiMqbmWMvxldSEaF', autoIncrement: false});
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM', 'GpGfXwXrGPaePyDmsdhihccpLdOkSFnomPCetbOnVasbhvhuwcSPIZmqoUasoveNsnzOEMTDHwbrvYETtbOWkXVphCjmcvUtcUjUxFBNhHDmjofBwLvfLzzOVVIhodCcYoZWpzqyJystzZzXYkXOdjXoxwfITWOOxUslvKAVLcIuqVlCCLyuJvttiNGTkoJTANNcdQKosWzQBZDDVyUVAArlqziyyBsmdflqFhBEIHeAOTaqaORGOPRJuYSUFjFJHqUPwnOkUOPmgtSyvWOOGznpowvNGMYUywuLSLpRCVPdWlaoDRBXyQWsyUNqMlfdLcWUBeHYEPMvjAmzJsAQvFsXbLnVxAhOoZgFoLwflntkxRukdapWKxGryNUNEjWAETyyyyldsyhswzKnfvlQUdNIKsMbbFmXQTWrsrdhZuLNYKqauiwUjSwSSvkejRJXOOWtTnSjTKRwEkAstndLiiefOTemgXTfxJnwkmIeCiSJQNSjyzwRQbitZIZauAXpXiDFdCuukKqYrYlePbzjbvrtLEpyyCMDnuosDlrZbvmQujsmKLEOcsrFknXdaBXQkOdaFnMexAywlMNzrDFtdPrACpp', false, true);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.only('JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM');
        count_2 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.only('JomBRhrYLoBBwjwgTmUMgAYxvmSgjKWUarAICqcgiclngLdDkrXPwOFRCdhALNmQqOwQUpMbzzXnhGvXZPtFbXWPttDSBZSyacjqxrhyfQgcypNjfijJSIsXiXJejyZRbWynTCNNWtGeaPZRcdiSKYLvlJOWndVGSblNIbEjCkSPtycFaoVGfGqbFBSpDckqCIJnAuDaSexihtqfIjVCtVwaRrKTcZOSGBrpJNpACFOoKJmabilEEpdfIJwyybkzZBjHvBsYgxCXjqvJCAsRXMiaHZHluAepkNZvduoFRKnBzKkEtEUqObnZRXLzCvdnCTPFUZCmvmKxZYJrmpIsAIdeUonwrPdTVcmrzkuZyltiLppWbasTdyYdZEQBWbEWIlnAQMTzMoYemBATpbPkQyeDCMeaLBWUiETcvnsYtNUNYzBUjMbroAmkDmPDiAoXnNYBOohqeMgOdgcHAgvKdtbLzkxLCmLCLdBKIxNRjdSnlFfGNPbKYLtXqlFGrNgDzJujCExehoebotqUXzzKDxHFpJCPShPRleqCzQwvgzMhhxgsbqosPbSmxXkDrafWerFLuoiSemeJBWynQaxWAFHlWekmaqTvWJbeKQTAkHLNIdWguxIcLUbVKLAPtXluAYLgSlKAttnIiUkvhUlYQqbBIblpsJvMGyvljYALlCzPQdTUtArMzCATFyqjaebEmtaCzrgdqgTcLwQGXbuRHflsruYiDILzajmDlDTJLrjzBoLVdltSHmqbbwZLnscGswLXVjNHlQkTJTcSBcgvfZwwnRWwEqppnZmvRLXxbZnOhkgtwfgUKJeVpFXfNhmwunTorSuOCZpHwWSwjOhnmIeInhYAepkvoiRyYddHFOpBWpaHDHdLyXAvFUIEPLnweDVRIbruZNpOuDHwRLzBpgM');
        count_3 = objectStore_0.count(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_3 = db.createObjectStore('objectStore_66');
    var index_39 = objectStore_3.createIndex('index_39', 'test');
    var clear_0 = objectStore_2.clear();
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_95 = db.transaction(['objectStore_65'], 'readwrite', {durability:"strict"})
    var objectStore_65 = txn_95.objectStore('objectStore_65');
    var put_1 = objectStore_65.put({f0_t: '<boolean>'}, 'sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL');
    var add_2 = objectStore_65.add({f0_q: '<object>', f1_l: '<object>', f2_y: '<null>', f3_e: '<string>', f4_h: '<string>', f5_s: '<array>', f6_m: '<array>', f7_x: '<number>', f8_m: '<array>'}, 'YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt');
    var getAll_1;
    try{
        KeyRange_8 = IDBKeyRange.only('YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt');
        getAll_1 = objectStore_65.getAll(KeyRange_8, 3334213389);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt');
        getAll_1 = objectStore_65.getAll(KeyRange_9);
    }

    var count_4;
    try{
        KeyRange_10 = IDBKeyRange.bound('sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL', 'sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL', true, true);
        count_4 = objectStore_65.count(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL', 'YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt', false, true);
        get_2 = objectStore_65.get(KeyRange_12);
    }
    catch (e){
    }

    var add_3 = objectStore_65.add({f0_q: '<null>'}, 'NExLhCfDSrNxWePTOmyRjbkScHeUilTjZTxrASXYQuaWxmXxMNEDUDaXfoOXMJMhuXLqTACSjWofbdRiKWmFYmrOHtaAusHtDNIRamEHqlYwJXDCeqYsGkKqCEvOWviFayjXHOkofiPsQlgTlHlfesMuBBJVqajngKDTRHmiEZwPGjxbuyJMIuUChonELqfLMsWPwxuKuymeUEigoPEXpfhRzXwNsXgyMceSlsWJbsvSzaquruEKdQGGioWiTWRmIxYmqlxYfEwqJBcJGkJFNetrMNKPfXYVQjBoBjKDnAvYgRSgpcfBoCKwGpzhkAzxWgzzYOOYmeDdpkyRQLBVxSOrTqZhWfPmUTZlGdAzRTuMITPtgzVvDqGykHcqGJnKgxuUNreTMWjgHHrbXAOKVIOAOhtGiFDLzfAeuBSfzQBhnBnJQVVuwEKduPswWjapYTwTHeHHDRSwufJDXBiSvgTUjrqQzlSwTiWzQraRWGleJOprVVwcqLcGQDXdEQbNpnDTgZcvcBCRtXsCnKgWpCxqvzJOynbubKenIMIVvMXbELoEZRMmcvHchHAHiFAmRmGytBcLiyGfNOhbPIBjqPHwhLXbrtZEpFXuXyqNoYRVmBJRvYgTLdioeHaxPudpvmczNKWfPRLwLRxNOioqvcqmxBAPWDBpNcdnkpBcUBRnVYhJtZdbhrV');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL');
        get_3 = objectStore_65.get(KeyRange_14);
    }
    catch (e){
    }

    var count_5 = objectStore_65.count();
    txn_95.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_95.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_95.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_96 = db.transaction(['objectStore_63'], 'readwrite', {durability:"relaxed"})
    var objectStore_63 = txn_96.objectStore('objectStore_63');
    var add_4 = objectStore_63.add({f0_r: '<boolean>', f1_d: '<null>', f2_y: '<null>', f3_f: '<null>', f4_v: '<boolean>', f5_s: '<object>', f6_d: '<null>', f7_k: '<array>', f8_i: '<object>', f9_o: '<array>', f10_z: '<boolean>', f11_z: '<object>', f12_k: '<array>', f13_s: '<object>', f14_q: '<string>', f15_x: '<object>', f16_y: '<boolean>', f17_q: '<array>', f18_x: '<string>', f19_l: '<string>', f20_o: '<object>', f21_y: '<object>', f22_e: '<boolean>', f23_k: '<null>', f24_y: '<boolean>', f25_j: '<string>', f26_e: '<boolean>', f27_r: '<number>', f28_q: '<string>', f29_l: '<null>', f30_f: '<string>', f31_z: '<null>', f32_k: '<string>', f33_q: '<string>', f34_z: '<number>', f35_s: '<null>', f36_v: '<array>', f37_y: '<string>', f38_m: '<object>', f39_n: '<null>', f40_n: '<object>', f41_i: '<number>', f42_e: '<array>', f43_v: '<boolean>', f44_n: '<boolean>', f45_r: '<object>', f46_n: '<array>', f47_u: '<null>', f48_e: '<array>', f49_d: '<string>', f50_o: '<boolean>', f51_o: '<null>', f52_d: '<null>', f53_w: '<null>', f54_j: '<boolean>', f55_q: '<object>', f56_u: '<boolean>', f57_d: '<null>', f58_o: '<array>', f59_l: '<number>', f60_j: '<array>', f61_r: '<array>', f62_i: '<null>', f63_f: '<boolean>', f64_y: '<number>', f65_f: '<number>', f66_s: '<boolean>', f67_u: '<array>', f68_k: '<string>', f69_i: '<number>', f70_r: '<number>', f71_n: '<object>', f72_x: '<null>', f73_d: '<array>', f74_z: '<number>', f75_z: '<boolean>', f76_k: '<boolean>', f77_o: '<object>', f78_q: '<object>', f79_z: '<string>', f80_l: '<string>', f81_i: '<string>', f82_x: '<boolean>', f83_g: '<null>', f84_y: '<array>', f85_s: '<string>', f86_k: '<object>', f87_q: '<string>', f88_h: '<string>', f89_l: '<boolean>', f90_n: '<number>', f91_v: '<null>', f92_o: '<number>', f93_w: '<number>', f94_b: '<null>', f95_g: '<object>', f96_z: '<string>', f97_s: '<string>', f98_x: '<array>', f99_o: '<boolean>', f100_d: '<boolean>', f101_h: '<null>', f102_u: '<null>', f103_n: '<object>', f104_a: '<array>', f105_e: '<string>', f106_e: '<object>', f107_e: '<number>', f108_j: '<boolean>', f109_f: '<string>', f110_e: '<boolean>', f111_m: '<number>', f112_x: '<boolean>', f113_m: '<string>', f114_l: '<null>', f115_n: '<object>', f116_x: '<string>', f117_w: '<number>', f118_i: '<array>', f119_k: '<boolean>', f120_d: '<string>', f121_i: '<string>', f122_p: '<boolean>', f123_e: '<object>', f124_u: '<array>', f125_c: '<number>', f126_c: '<boolean>', f127_d: '<object>', f128_e: '<null>', f129_k: '<array>', f130_x: '<boolean>', f131_u: '<string>', f132_p: '<array>', f133_o: '<array>', f134_j: '<boolean>', f135_u: '<null>', f136_c: '<number>', f137_s: '<array>', f138_g: '<object>', f139_w: '<string>', f140_z: '<array>', f141_s: '<string>', f142_u: '<null>', f143_e: '<boolean>', f144_t: '<null>', f145_w: '<string>', f146_d: '<array>', f147_l: '<string>', f148_r: '<object>', f149_c: '<object>', f150_l: '<array>', f151_v: '<null>', f152_b: '<number>', f153_g: '<boolean>', f154_s: '<array>', f155_g: '<object>', f156_q: '<string>', f157_b: '<boolean>', f158_x: '<null>', f159_b: '<array>', f160_n: '<null>', f161_y: '<null>', f162_r: '<null>', f163_b: '<null>', f164_w: '<array>', f165_x: '<string>', f166_v: '<object>', f167_g: '<string>', f168_m: '<string>', f169_x: '<boolean>', f170_g: '<string>', f171_y: '<object>', f172_b: '<boolean>', f173_e: '<boolean>', f174_p: '<object>', f175_a: '<string>', f176_u: '<string>', f177_c: '<boolean>', f178_b: '<object>', f179_n: '<boolean>', f180_s: '<string>', f181_x: '<boolean>', f182_n: '<string>', f183_t: '<number>', f184_w: '<array>', f185_v: '<boolean>', f186_m: '<array>', f187_y: '<object>', f188_w: '<array>', f189_v: '<string>', f190_g: '<object>', f191_z: '<string>', f192_l: '<array>', f193_j: '<number>', f194_y: '<string>', f195_n: '<null>', f196_b: '<array>', f197_o: '<boolean>', f198_s: '<null>', f199_f: '<null>', f200_a: '<boolean>', f201_m: '<null>', f202_s: '<null>', f203_g: '<array>', f204_e: '<string>', f205_y: '<string>', f206_a: '<string>', f207_r: '<object>', f208_r: '<string>', f209_v: '<array>'}, 'hElGKYCOPkNxWLSmwGdgtrcutGLcjisIbC');
    var count_6 = objectStore_63.count();
    var clear_1 = objectStore_63.clear();
    var getAll_2 = objectStore_63.getAll();
    var put_2 = objectStore_63.put({f0_d: '<boolean>', f1_o: '<object>', f2_n: '<null>', f3_a: '<string>'}, 'YNjpHucLJtEvXdcnwmyrxjskIgBvRhpQPqZHZrAydYlNKpMyBrwdLiOQMaNDyNCBVFQlpBWgEPjXmjpbhKkwhGBTZpYihueUfjsxQdJWCqPmxGNThwsLuhyCazzVwxPsftvNMTJLdwuNbpDfvRbkZgWwwhdBOihRSPIjzBZpZOFtPlRivKuAojwvuFHlWDYABbJCPurZfyNfRlsxYTsNXTtmnJKrgSOOcCCjLyHuzezrfNdZhniihXGMCjusxkARYbvbzCqzwwvAMCUCHWHejnMnxLHjMBrRzsWDVvXLewekXobMRumGPyeVASnWKUmdKeCOXQGMsOYDcZSRsfJmptKjtpyyPfbGYvWswvTxpprjLdxayYtYzzsGvshoXGWywwxZLDwfHpCluhrHljlTIVscaXtkDphrQTmqURQJRAZmJSAtcwFpaIhpdMunYZZgSPirBibxywWWXQcwseBbJKuKGprzUOcQaNGVHbejiLGixbNguvyzNFgHNIwbzMZVzEIpfGowTwPYlznrAVUpZogKhJBemYZcuEtqDhPXdnrrygstXduyEFjrZpsHwPeaGEXroxTjnKinAHCiDSCWZLFipwPuDxojrNylNAQlzAsUDTikaoCYACglebprHDZfgXpSjbXyZbdzgfqFkBz');
    var add_5 = objectStore_63.add({f0_k: '<object>', f1_w: '<number>', f2_e: '<number>', f3_r: '<array>', f4_l: '<array>', f5_s: '<null>'}, 'LIIUlNTJRtcVbKNtKFUiROqMLatJhVOelzVXUPNjTkkXHbkpkShCUgqoodDiJhTDihUpbFggDGTMiqXfNavLBCJfkMOxkxnvNFFPDbMVPhqDKTyAJttLBQaYdqoioVfZsOiJwKkOnOGrhyqoaXpUJPMucupXaOrWBGUGQXzoEoQFcIEVMGjbjTdZDmYJtGNVAvPEcaBuczXChjfruZGqFoqbJlRepTmUtmzEeaVrvbCQgXkMHHFCHdiEGLXlYKVKnsgTSlMleFkvJrtnkhXKtMdflVWSKWlzVwaEToQsHgIqxdwhGUKDlHkYPSfAqwwxToLUoFQiguIDwhEbGRvOFVHfdYzI');
    var put_3 = objectStore_63.put({f0_q: '<boolean>', f1_v: '<number>', f2_b: '<boolean>', f3_i: '<string>', f4_b: '<array>'}, 'tpnQQnCWQXBdpiRjAmpqebTLcHvHajgsHSyGpahJbkBaHywUmmQcvjfsIPGMbIJBDDMNvdSCzjqmMHHXqFbwobcwtYgbUyDyRfoNOhVGkBrXfaRsIGWkIkQOTAAkOntKFQCgaWxhFKvnlYwHujZANTBoRZDuCjQpWENbyTwsShrYmSHHCqWHmXy');
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('YNjpHucLJtEvXdcnwmyrxjskIgBvRhpQPqZHZrAydYlNKpMyBrwdLiOQMaNDyNCBVFQlpBWgEPjXmjpbhKkwhGBTZpYihueUfjsxQdJWCqPmxGNThwsLuhyCazzVwxPsftvNMTJLdwuNbpDfvRbkZgWwwhdBOihRSPIjzBZpZOFtPlRivKuAojwvuFHlWDYABbJCPurZfyNfRlsxYTsNXTtmnJKrgSOOcCCjLyHuzezrfNdZhniihXGMCjusxkARYbvbzCqzwwvAMCUCHWHejnMnxLHjMBrRzsWDVvXLewekXobMRumGPyeVASnWKUmdKeCOXQGMsOYDcZSRsfJmptKjtpyyPfbGYvWswvTxpprjLdxayYtYzzsGvshoXGWywwxZLDwfHpCluhrHljlTIVscaXtkDphrQTmqURQJRAZmJSAtcwFpaIhpdMunYZZgSPirBibxywWWXQcwseBbJKuKGprzUOcQaNGVHbejiLGixbNguvyzNFgHNIwbzMZVzEIpfGowTwPYlznrAVUpZogKhJBemYZcuEtqDhPXdnrrygstXduyEFjrZpsHwPeaGEXroxTjnKinAHCiDSCWZLFipwPuDxojrNylNAQlzAsUDTikaoCYACglebprHDZfgXpSjbXyZbdzgfqFkBz', true);
        get_4 = objectStore_63.get(KeyRange_16);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_18 = IDBKeyRange.only('GpGfXwXrGPaePyDmsdhihccpLdOkSFnomPCetbOnVasbhvhuwcSPIZmqoUasoveNsnzOEMTDHwbrvYETtbOWkXVphCjmcvUtcUjUxFBNhHDmjofBwLvfLzzOVVIhodCcYoZWpzqyJystzZzXYkXOdjXoxwfITWOOxUslvKAVLcIuqVlCCLyuJvttiNGTkoJTANNcdQKosWzQBZDDVyUVAArlqziyyBsmdflqFhBEIHeAOTaqaORGOPRJuYSUFjFJHqUPwnOkUOPmgtSyvWOOGznpowvNGMYUywuLSLpRCVPdWlaoDRBXyQWsyUNqMlfdLcWUBeHYEPMvjAmzJsAQvFsXbLnVxAhOoZgFoLwflntkxRukdapWKxGryNUNEjWAETyyyyldsyhswzKnfvlQUdNIKsMbbFmXQTWrsrdhZuLNYKqauiwUjSwSSvkejRJXOOWtTnSjTKRwEkAstndLiiefOTemgXTfxJnwkmIeCiSJQNSjyzwRQbitZIZauAXpXiDFdCuukKqYrYlePbzjbvrtLEpyyCMDnuosDlrZbvmQujsmKLEOcsrFknXdaBXQkOdaFnMexAywlMNzrDFtdPrACpp');
        count_7 = objectStore_63.count(KeyRange_18);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('hElGKYCOPkNxWLSmwGdgtrcutGLcjisIbC', 'tpnQQnCWQXBdpiRjAmpqebTLcHvHajgsHSyGpahJbkBaHywUmmQcvjfsIPGMbIJBDDMNvdSCzjqmMHHXqFbwobcwtYgbUyDyRfoNOhVGkBrXfaRsIGWkIkQOTAAkOntKFQCgaWxhFKvnlYwHujZANTBoRZDuCjQpWENbyTwsShrYmSHHCqWHmXy', false, true);
        get_5 = objectStore_63.get(KeyRange_20);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_63.getAllKeys();
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('tpnQQnCWQXBdpiRjAmpqebTLcHvHajgsHSyGpahJbkBaHywUmmQcvjfsIPGMbIJBDDMNvdSCzjqmMHHXqFbwobcwtYgbUyDyRfoNOhVGkBrXfaRsIGWkIkQOTAAkOntKFQCgaWxhFKvnlYwHujZANTBoRZDuCjQpWENbyTwsShrYmSHHCqWHmXy', 'tpnQQnCWQXBdpiRjAmpqebTLcHvHajgsHSyGpahJbkBaHywUmmQcvjfsIPGMbIJBDDMNvdSCzjqmMHHXqFbwobcwtYgbUyDyRfoNOhVGkBrXfaRsIGWkIkQOTAAkOntKFQCgaWxhFKvnlYwHujZANTBoRZDuCjQpWENbyTwsShrYmSHHCqWHmXy', false, true);
        get_6 = objectStore_63.get(KeyRange_22);
    }
    catch (e){
    }

    var count_8 = objectStore_63.count();
    txn_96.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_96.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_96.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_97 = db.transaction(['objectStore_63', 'objectStore_65'], 'readwrite', {durability:"relaxed"})
    var objectStore_65 = txn_97.objectStore('objectStore_65');
    var getAllKeys_2 = objectStore_65.getAllKeys(877553939);
    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.only('YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt');
        count_9 = objectStore_65.count(KeyRange_24);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_26 = IDBKeyRange.bound('YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt', 'YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt', false, false);
        getAllKeys_3 = objectStore_65.getAllKeys(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt');
        getAllKeys_3 = objectStore_65.getAllKeys(KeyRange_27);
    }

    var clear_2 = objectStore_65.clear();
    var getAllKeys_4;
    try{
        KeyRange_28 = IDBKeyRange.bound('NExLhCfDSrNxWePTOmyRjbkScHeUilTjZTxrASXYQuaWxmXxMNEDUDaXfoOXMJMhuXLqTACSjWofbdRiKWmFYmrOHtaAusHtDNIRamEHqlYwJXDCeqYsGkKqCEvOWviFayjXHOkofiPsQlgTlHlfesMuBBJVqajngKDTRHmiEZwPGjxbuyJMIuUChonELqfLMsWPwxuKuymeUEigoPEXpfhRzXwNsXgyMceSlsWJbsvSzaquruEKdQGGioWiTWRmIxYmqlxYfEwqJBcJGkJFNetrMNKPfXYVQjBoBjKDnAvYgRSgpcfBoCKwGpzhkAzxWgzzYOOYmeDdpkyRQLBVxSOrTqZhWfPmUTZlGdAzRTuMITPtgzVvDqGykHcqGJnKgxuUNreTMWjgHHrbXAOKVIOAOhtGiFDLzfAeuBSfzQBhnBnJQVVuwEKduPswWjapYTwTHeHHDRSwufJDXBiSvgTUjrqQzlSwTiWzQraRWGleJOprVVwcqLcGQDXdEQbNpnDTgZcvcBCRtXsCnKgWpCxqvzJOynbubKenIMIVvMXbELoEZRMmcvHchHAHiFAmRmGytBcLiyGfNOhbPIBjqPHwhLXbrtZEpFXuXyqNoYRVmBJRvYgTLdioeHaxPudpvmczNKWfPRLwLRxNOioqvcqmxBAPWDBpNcdnkpBcUBRnVYhJtZdbhrV', 'YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt', false, false);
        getAllKeys_4 = objectStore_65.getAllKeys(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL');
        getAllKeys_4 = objectStore_65.getAllKeys(KeyRange_29);
    }

    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('sJVEqDlvixWJWcMNvSnYidZwiskcinagDZZlfTSDDsapWotzZZSlLxOSYmtbuUoUpvolzRGnATpylJXpuAZenPXGcbyMlxuiMUchBnBVeudnLTaOdKrWZuYDPaqixjkincqDhTKdtXhYZdUuBGdmKRJasKssiqUYZOgVgOMvJwLZeFLuQswqyxcuiLLFvGWPQTTTAJrzUfHfUaYnqODLACqmLDzFGYCipSJNuEMDUKgPkuBBGxwrQWYKEvdcmcJhprKVimJkzL', 'YAniimqxLpgszaDsfgwpjNXDYYLZOAluytdhxt', true, false);
        get_7 = objectStore_65.get(KeyRange_30);
    }
    catch (e){
    }

    var clear_3 = objectStore_65.clear();
    var getAllKeys_5 = objectStore_65.getAllKeys(3078482670);
    var clear_4 = objectStore_65.clear();
    txn_97.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_97.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_97.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_98 = db.transaction(['objectStore_64'], 'readonly', {durability:"strict"})
    var objectStore_64 = txn_98.objectStore('objectStore_64');
    txn_98.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_98.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_98.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_99 = db.transaction(['objectStore_64', 'objectStore_65'], 'readwrite', {durability:"default"})
    var objectStore_64 = txn_99.objectStore('objectStore_64');
    var clear_5 = objectStore_64.clear();
    var put_4 = objectStore_64.put({f0_x: '<null>', f1_u: '<number>', f2_w: '<array>', f3_x: '<null>', f4_l: '<string>'}, 'clyfflotefyOdFLyxKJjTccYirzIHGdSClvRFYtiYVxXwVXSAuBHPhXcVfXLyCgHpgPfMXqUNpaubXzmvvDOEPYxulevUeZBXSSqTGdSfUrJgBMvObVIgrUDTIBxJKwbMtlOFaXREblVNQiiecsSgYqqLMMqemKDOFBDUkcnvfiZDlLbSJTBHRtHxHvxxuvpkpokqdAHHXBxzHeGtGkEWYqStFzOLwaubUNQLzOpDEsHCnNRFmTGPuLDealiIVaXzDexjBuLjmYwNDsRmwWHippCjQKwVxtPSymcYeAWgauxRnWzHHIVWbppxOlFBlkrELvsKLflEuNurnPmBeVsidJsWFSVjOkgUxoJHNbHLWwGhUiHCPefLnQwGntaFqqXLdIZwfjbLzzFDFmXpDkvfLTkmWpNBHpzETyouXtobzwXEBCsmnMhCrNsXJAvHKnclENQaGnCWZpjMuCnlrrqhPCijwVSiZXoMnamjnfLcVwUONZFyZEMCjFZTyIKsXPGosgyQFJXgnZjMaSSWcMYnvybeVlPTiAlPdZCmGmyxSOBpyGtRfWMetpoIJYawEfVQPswDJtKmFcnRyVFeEmYSyXxAgusqgzvMMwfViUarNXwjYoyMGNlhevxSIiHoqofYgbcXKUQCtVPEGpybENAhQNjsZbfoqHSrrsxNYuPMVSOtwCoYBfxAdtOuduYLkuJVseedEwTvOgDdPdoZLVJxFxCCxpOniBsSKmpfeIenClBYtqiBdIcvNWPwEkjvscruJzUeqtyzFUzzjiaZcxfwzgnmCvnIbxZdLArFCBMGKfIvahAEeYBFXeUdvdeymrYUECTxOwhtHRWFnBXqqViXHUhknKYjhNvrbtQQUoDLCpbFxjzbXOayJFwzqax');
    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('clyfflotefyOdFLyxKJjTccYirzIHGdSClvRFYtiYVxXwVXSAuBHPhXcVfXLyCgHpgPfMXqUNpaubXzmvvDOEPYxulevUeZBXSSqTGdSfUrJgBMvObVIgrUDTIBxJKwbMtlOFaXREblVNQiiecsSgYqqLMMqemKDOFBDUkcnvfiZDlLbSJTBHRtHxHvxxuvpkpokqdAHHXBxzHeGtGkEWYqStFzOLwaubUNQLzOpDEsHCnNRFmTGPuLDealiIVaXzDexjBuLjmYwNDsRmwWHippCjQKwVxtPSymcYeAWgauxRnWzHHIVWbppxOlFBlkrELvsKLflEuNurnPmBeVsidJsWFSVjOkgUxoJHNbHLWwGhUiHCPefLnQwGntaFqqXLdIZwfjbLzzFDFmXpDkvfLTkmWpNBHpzETyouXtobzwXEBCsmnMhCrNsXJAvHKnclENQaGnCWZpjMuCnlrrqhPCijwVSiZXoMnamjnfLcVwUONZFyZEMCjFZTyIKsXPGosgyQFJXgnZjMaSSWcMYnvybeVlPTiAlPdZCmGmyxSOBpyGtRfWMetpoIJYawEfVQPswDJtKmFcnRyVFeEmYSyXxAgusqgzvMMwfViUarNXwjYoyMGNlhevxSIiHoqofYgbcXKUQCtVPEGpybENAhQNjsZbfoqHSrrsxNYuPMVSOtwCoYBfxAdtOuduYLkuJVseedEwTvOgDdPdoZLVJxFxCCxpOniBsSKmpfeIenClBYtqiBdIcvNWPwEkjvscruJzUeqtyzFUzzjiaZcxfwzgnmCvnIbxZdLArFCBMGKfIvahAEeYBFXeUdvdeymrYUECTxOwhtHRWFnBXqqViXHUhknKYjhNvrbtQQUoDLCpbFxjzbXOayJFwzqax', false);
        get_8 = objectStore_64.get(KeyRange_32);
    }
    catch (e){
    }

    var add_6 = objectStore_64.add({f0_x: '<boolean>', f1_m: '<array>', f2_h: '<array>', f3_t: '<object>', f4_z: '<array>', f5_o: '<number>', f6_m: '<boolean>', f7_t: '<string>', f8_w: '<object>', f9_y: '<null>', f10_r: '<string>', f11_z: '<null>', f12_r: '<object>', f13_n: '<boolean>', f14_y: '<object>', f15_y: '<boolean>', f16_i: '<object>', f17_y: '<boolean>', f18_a: '<boolean>', f19_v: '<object>', f20_z: '<boolean>', f21_k: '<null>', f22_o: '<null>', f23_o: '<number>', f24_v: '<array>', f25_k: '<null>', f26_n: '<object>', f27_o: '<string>', f28_j: '<object>', f29_w: '<string>', f30_p: '<number>', f31_l: '<boolean>', f32_o: '<boolean>', f33_z: '<null>', f34_s: '<object>', f35_o: '<null>', f36_e: '<boolean>', f37_i: '<array>', f38_m: '<string>', f39_z: '<array>', f40_s: '<boolean>', f41_v: '<null>', f42_b: '<boolean>', f43_i: '<null>', f44_m: '<object>', f45_k: '<null>', f46_w: '<boolean>', f47_o: '<number>', f48_s: '<array>', f49_a: '<string>', f50_d: '<number>', f51_m: '<string>', f52_g: '<null>', f53_y: '<object>', f54_p: '<boolean>', f55_u: '<object>', f56_s: '<string>', f57_q: '<array>', f58_t: '<null>', f59_o: '<object>', f60_f: '<array>', f61_c: '<boolean>', f62_h: '<string>', f63_y: '<number>', f64_g: '<number>', f65_l: '<boolean>', f66_i: '<boolean>', f67_v: '<object>', f68_u: '<null>', f69_i: '<array>', f70_l: '<number>', f71_a: '<boolean>', f72_c: '<boolean>', f73_s: '<number>', f74_a: '<number>', f75_e: '<object>', f76_r: '<object>', f77_h: '<object>', f78_n: '<null>', f79_g: '<number>', f80_d: '<null>', f81_c: '<string>', f82_x: '<array>', f83_b: '<object>', f84_p: '<number>', f85_u: '<array>', f86_a: '<number>', f87_l: '<array>', f88_k: '<null>', f89_g: '<boolean>', f90_g: '<object>', f91_x: '<number>', f92_w: '<object>', f93_i: '<string>', f94_s: '<array>', f95_d: '<string>', f96_s: '<string>', f97_e: '<object>', f98_p: '<boolean>', f99_e: '<array>', f100_t: '<null>', f101_q: '<string>', f102_l: '<number>', f103_f: '<null>', f104_s: '<boolean>', f105_g: '<array>', f106_i: '<string>', f107_r: '<array>', f108_x: '<array>', f109_m: '<number>', f110_o: '<object>', f111_j: '<string>', f112_i: '<string>', f113_w: '<object>', f114_d: '<boolean>', f115_y: '<object>', f116_z: '<array>', f117_e: '<number>', f118_k: '<array>', f119_m: '<null>', f120_d: '<object>', f121_w: '<object>', f122_g: '<string>', f123_b: '<null>', f124_e: '<boolean>', f125_z: '<string>', f126_o: '<array>', f127_z: '<object>', f128_h: '<object>', f129_z: '<object>', f130_g: '<array>', f131_q: '<number>', f132_y: '<null>', f133_l: '<boolean>', f134_h: '<array>', f135_i: '<string>', f136_v: '<boolean>', f137_i: '<null>', f138_d: '<string>', f139_i: '<boolean>', f140_y: '<null>', f141_u: '<number>', f142_z: '<boolean>', f143_r: '<string>', f144_r: '<string>', f145_n: '<null>', f146_x: '<object>', f147_e: '<number>', f148_y: '<boolean>', f149_j: '<boolean>', f150_d: '<string>', f151_p: '<object>', f152_x: '<string>'}, 'shtzXxmIqfGrUfhgMXDrKVFumEKhqnzkQVYOTASoOzCzssoqMkindCvtAmbuafQMwJeuqSvEPMLNYkZAgnsCnVrDXVOswpShtrufYnIcymaQZrzXbFHaQUJrHHmNbrUPHDmULaQgqRjqMqPDHtaRXXoYIpObriKcRceeDcTwMfNZEnbXFQdTGWvZKJhkhwqBHfVWAEJfbJTnBZDDTBTxySgnmijzqJMapnkYzNOUwrZkkStCspvsUDRClZtxewqxHhXQMJoyjLbptEBnSuhilFvUIScbYyYliZlvlZsFheQbYmDFTIxEQOIxQiXDCYoEmiHdolQCShNrhGWuOkFwymKoZlpqgQPKjvjVWZrPnyomVlNpNrPiGkOyAJqmHWKayjzmZrkoKrSWWfDlUtXQLKWfHsDhXQRxawnooTGOkeVeoDoAmdlCSsQhaLZpjKUgBKVkRxWSrYVpVskqHpURDTWkEMRIVhbaDgDgiSuTUGGKowqnjZUzRGfgWJxyIrkXGNpBfwmSSxxpCrPiBKrosXIXarhKjwzrgCcxrsLtByHiZlSOAJryXeZPYxGaXjRMxQvhuAxVSSEEEwhAAxHXTuiXkVOilgtueoigjiDTLEpKWyAiygDcNbZqiKjIQJsFiXJaWpZzprWJgxSWbwfiukRJDjTZztjkwomOdLsOTXaDBabADWXsQEZvSgCxdAMXassvNXMFmUztKzLKoErgAdiSPskxtRLqIaRCBislymWNhhwBkhgxGOQImxtbOsctwycypHEzsjVPVqcFfwSTLmYALdYmvpKAJzcmkLcWixgLZabibvHKKOrthqDYOEFUzaXUjsFytlPJjQKrTNCUqeaUVEwduhjfpsxkNAyfWUfZlRWEXeQeytd');
    txn_99.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_99.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_99.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2840')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};