let db;
const openRequest = window.indexedDB.open('str_3058', 3096552623724265)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2082', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_0.add({f0_v: '<string>', f1_h: '<boolean>', f2_u: '<null>', f3_c: '<array>', f4_d: '<string>', f5_y: '<object>', f6_x: '<boolean>', f7_p: '<object>'}, 'kDGMCLiuCAwBrPBoSkqHJuSbxxqFZcXvujbaRINrhhseMbFJrsiQxCiamLcYGvpMGpgVUSTfPIfZwfOpStZmihRYkhJTpOQLXIzpIWiJVTQpMQjWtuhMFXgenUPwotSdWGBBjvnBpMHXMMRfBEDTPwHomAUkQRBHlJxiimjguraShsSLNUMnRFVtJNEvOwWFGaMDvCeZDYFkuevdzbARnbnRNyWgiiVXTiCVUikWFUZtBNnxUCChMQAhioXDIWmeGwRvabjvpJyrrBjYUlVysVdXXbpHjaOrFINdberAFjvHPfRUElUSYwlDQnbwgfRGrgqeqmVhkVQmPBINpHXVSnlBfhzaRgYtdgrAdWahrykRigeknQosSLbgYXkbdZCpPNnFkpsHMRlYTKJUbLGbJpdHsZSakxGeXrnvxeYGUyRvsXFAqQoIYjeHtFfyfEVTVmTdtZLdThJRlAVrOQJVZHtyIytCAtqNLiwBtCAdmkLSkASpmsGUGnwtLErettWUMgLEpUbQoAVsImpHSsJbyuwjLSVxgwVXOiyNwhHDivCCJDZVQxgLvEEHEaMZxQDosBOeszLHhuTUeryWtSIMQbWaYUsDffMfiNouSVDHurYdXYbNtQcBNzlJiAbGHWsgKPcfkFvDLoMTnTuVnRnaBIjKLibxAjZHkXiHXZLmtYfTgMnQAIuFyvMMQRVo');
    var getAllKeys_0 = objectStore_0.getAllKeys(2055028384);
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('kDGMCLiuCAwBrPBoSkqHJuSbxxqFZcXvujbaRINrhhseMbFJrsiQxCiamLcYGvpMGpgVUSTfPIfZwfOpStZmihRYkhJTpOQLXIzpIWiJVTQpMQjWtuhMFXgenUPwotSdWGBBjvnBpMHXMMRfBEDTPwHomAUkQRBHlJxiimjguraShsSLNUMnRFVtJNEvOwWFGaMDvCeZDYFkuevdzbARnbnRNyWgiiVXTiCVUikWFUZtBNnxUCChMQAhioXDIWmeGwRvabjvpJyrrBjYUlVysVdXXbpHjaOrFINdberAFjvHPfRUElUSYwlDQnbwgfRGrgqeqmVhkVQmPBINpHXVSnlBfhzaRgYtdgrAdWahrykRigeknQosSLbgYXkbdZCpPNnFkpsHMRlYTKJUbLGbJpdHsZSakxGeXrnvxeYGUyRvsXFAqQoIYjeHtFfyfEVTVmTdtZLdThJRlAVrOQJVZHtyIytCAtqNLiwBtCAdmkLSkASpmsGUGnwtLErettWUMgLEpUbQoAVsImpHSsJbyuwjLSVxgwVXOiyNwhHDivCCJDZVQxgLvEEHEaMZxQDosBOeszLHhuTUeryWtSIMQbWaYUsDffMfiNouSVDHurYdXYbNtQcBNzlJiAbGHWsgKPcfkFvDLoMTnTuVnRnaBIjKLibxAjZHkXiHXZLmtYfTgMnQAIuFyvMMQRVo', 'kDGMCLiuCAwBrPBoSkqHJuSbxxqFZcXvujbaRINrhhseMbFJrsiQxCiamLcYGvpMGpgVUSTfPIfZwfOpStZmihRYkhJTpOQLXIzpIWiJVTQpMQjWtuhMFXgenUPwotSdWGBBjvnBpMHXMMRfBEDTPwHomAUkQRBHlJxiimjguraShsSLNUMnRFVtJNEvOwWFGaMDvCeZDYFkuevdzbARnbnRNyWgiiVXTiCVUikWFUZtBNnxUCChMQAhioXDIWmeGwRvabjvpJyrrBjYUlVysVdXXbpHjaOrFINdberAFjvHPfRUElUSYwlDQnbwgfRGrgqeqmVhkVQmPBINpHXVSnlBfhzaRgYtdgrAdWahrykRigeknQosSLbgYXkbdZCpPNnFkpsHMRlYTKJUbLGbJpdHsZSakxGeXrnvxeYGUyRvsXFAqQoIYjeHtFfyfEVTVmTdtZLdThJRlAVrOQJVZHtyIytCAtqNLiwBtCAdmkLSkASpmsGUGnwtLErettWUMgLEpUbQoAVsImpHSsJbyuwjLSVxgwVXOiyNwhHDivCCJDZVQxgLvEEHEaMZxQDosBOeszLHhuTUeryWtSIMQbWaYUsDffMfiNouSVDHurYdXYbNtQcBNzlJiAbGHWsgKPcfkFvDLoMTnTuVnRnaBIjKLibxAjZHkXiHXZLmtYfTgMnQAIuFyvMMQRVo', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var clear_1 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_2083', {keypath: 'TGKSceVaaGgOSmidqBlRyweugNeJPnYSKfJaeBSbmtplMgvqYktTdZXWypTKAdaPZUujAHoqsFHCaqDnRinovKMprAfkcyinfRbGeljtKzLPczIJFXmBFtMNpgCsEjhrhtZUIhmNnbuDcynHJJGaDmyMCmXFnKmTbtEtVNAzGsdDHrqCJtdHClbxLUjhqgMuULBKhwcGEUDucGlJsRmWWGScjKsmZToAYPhFHveyuSFkrlvzOvylfiTQoJHZhUkmapcTdVfPCqwKgkvbvdBtcDWpcYtdaDaBdqbtQEMcWCqlruwtdahnvvBdRsXLhMXOsxIZFporqvwHcdMeRATVCnnArwGpTpaESOWSySTseeHGcmrVCnGFsxJkuEsrCUqDffqRMtmvVQsGvvvkkGsQpxknXimpVlaLhqXAuGSLmtoqQfaMtOyORgBFyCrAcReHymOTryEzwiKNSPEYRgvksVcBfCLFbKvGTjSggdCgxcZsozbchCRaMlyOEXNRGcmCqogatrVvDTTovwmwFFxQrFBMhGtfyPqeqgVywilsnMPCMYPHyuZOOUhTVKBXlYGQBiRyAGEYiaXLJsRfxUusieDyisymfCQwrvBHIYUvMldJJBlJTRAUJgHTVTCSqGcgdPBtvHzIpnszRxaYjqXpIjOROIvXyjyZOphjMydhQRsvxzdBwTehTxaKYXrTYNAvMNEJhLPgksNowSeAsZsbITBgDzrlEd'});
    var objectStore_2 = db.createObjectStore('objectStore_2084', {keypath: 'XnfghdLxREYPMydjKITetCZjxklXXXOuxDTTiKeIHblxKLJmNNStIHjNxDyLruTIcdyurSmVkdAuzxrqDYoRzfEoNDiGfeLKwjDlDqhYHmHvzAECWxpUqephbuLrxyqyFWvnZDORneuPHJzOXTNQpoTOnQqlQYwCCqqozxKYcDPrfOwqcvtLUtIzyhwybftDuHRUDtSUDTXTvwSRwfhDDJKmOOKBgJbYbKrankjDFaiBBvHLptiEDTRMBygVAWHWREpTumabQcYGkovYyDFbqLLSLXNAXJCDoYPJaQEyjUEARsDBiUGlyDTxHFljOwvQYYnUhDSYKMZHCCuqFcpuibNctQRtwJIKoAwqDQqjNitvYQQiazNbhIsmJVrwPMgGXZtuFOTBKNorBvzchTUVObYNXIjAOtSLvorFqRnPyOsQISDxfPvyuEzFXUUXmsFjMRlJefvcqfTWPnBDHfTvQYhExhheVcXUGAncsLjnGKUiiYTmuQNAqKsOfSvsXMQXyBshjUmbIHwbfbJcPldifcJBhLTRBsfulIwVVBTYAGrbFCqPvROrnlpptpoC', autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_2085', {autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_2086');
    var objectStore_5 = db.createObjectStore('objectStore_2087', {keypath: 'HiZRWzGSzpLKggSESTOIhHQsODVieFwxLpriQRGELmcWOVylQFJdYduoCuusZvyGLuuyYlPuUroHEagfJWwCuIaSHhXmutoSkaCmuehCJGExVIdTQYZbhZwgyrwzUKxGYcskDRBuQjRUsVPCOdrwwhWbDFQYnDoHaLECpvoKuEGHpVFbWIynSISpqxCKNpMofmMuDIZNqCErJFdEYHCwMlumcNFVuM'});
    var index_1384 = objectStore_0.createIndex('index_1384', 'test', {unique: false, multiEntry: false});
    var objectStore_6 = db.createObjectStore('objectStore_2088', {autoIncrement: true});
    var clear_2 = objectStore_4.clear();
    var put_0 = objectStore_4.put({f0_t: '<array>', f1_o: '<null>', f2_y: '<boolean>', f3_z: '<object>', f4_a: '<boolean>', f5_t: '<number>', f6_c: '<object>', f7_z: '<object>', f8_w: '<number>', f9_f: '<string>', f10_p: '<number>', f11_p: '<object>', f12_i: '<object>', f13_i: '<array>', f14_u: '<array>', f15_c: '<null>', f16_w: '<array>', f17_c: '<array>', f18_c: '<array>', f19_v: '<array>', f20_o: '<null>', f21_j: '<boolean>', f22_c: '<object>', f23_a: '<null>', f24_a: '<object>', f25_f: '<null>', f26_i: '<array>', f27_q: '<string>', f28_n: '<array>', f29_n: '<number>', f30_i: '<number>', f31_f: '<object>', f32_s: '<boolean>', f33_p: '<string>'}, 'aVakKfClDFNwheEDGPiHrmVciwbfmHLedGKwovbAJaCUaPhqFipOpvHIiSekYSeCtdwzkoDTGDiUKNdgmVhWfCMjersxwGIuagKIneASmgWRPDgUBnngiEHByYLeKCpFThjrsLWLNtelAWgSqdxEXGaNTeRPrfWoDJtnxMxbkHZKAznxIrMnbuyvTOduPIWLRXXcTZbONpjTmiwfwrtjtAOuHHAoUVrOxbcKApaKTMLLPTfSuMCcGEAgWZIcVEwKplDbLQKXBdcPnNpDsNXyujUzuOUAbDgkGPZaYqFMQiDbnHHsZklfZVtfvoVqkRFxkVYLFbpIkImqLeBdaCFFGPRvEITbeFZGfiplADMi');
    var put_1 = objectStore_5.put({f0_n: '<array>', f1_s: '<number>', f2_m: '<null>', f3_y: '<null>', f4_i: '<boolean>', f5_t: '<object>'}, 'LlsWrqNlNsBfrDgDwIRSsaiZnXLvZGrbBNFruxMwAuFLadluypShuRvXFImWQUmpncYUmiAtThCgGIQBYHmdvyjPwGPfJXATYuhdQfJNeOQXqfGOSPzIBcNsfEnMMIDITZrkHWFhGVXYXedPcxSVgMlhfRXwCyDnsmkRhkXpcaSajtPmUiBWMBtqWlJoSVyJPHaQAZyqOxgNwBkrsRSgdXgqSpxQnMhHFOTRjcuENRLdeUGhYdCJPpOQEmXKwjEgXBkBebdLxgisubOkUuXKTpRrWHiOwYoBPZqkNWMDUiRSYUuAxOuWJJOsLVbdPxBsaQlRtUuXaTGcTRVNPAftbCXYCJCxBDcOkTsZIYCUOReRdrHtLnDXYLrtStjJuQnBOwMhMBKVxaOAuvdXhKLHrEMDbAKyVyqUWHzxnsNUjvZbnoioozNbcNuBvKoMPjhNQWievcCgyDQfiywNwnQTIJsxoEKwTYbEEhluaKHOdTrkjieslZjJVygdLbgwHbuGQMZPsREkAQnjoeDLNRIDDUoWyKSKudzyaqvXLGjqDFoirkmdtannLdFJUTZpzEHfJokodHqAPkWTFwjiWXDRoxxIaLMaVHBdQskBygpgitnOTGsrSdixNJCtYiFIDEHfXMmbjvFooFeyzmyfAHGhUjUhOoBZrFBvvQXerZGnroRQmtKpFhSZzYelqJOZxUgEYtlofXiSjTRFpluqoFtcMGbcBzyJANnZJYrgLcvEwqvnCklBWNXnQjDWokcuIJqLWeogdgWbNIiqUxCggUfysKSbUwjlPEljREVnETYUGUmbvHwMToJKdQsDgdlwKGwnYyvBCaxHeGdWjmJinhBJnZiSvLfaUpTAtoeVWinqspgRNf');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3090 = db.transaction(['objectStore_2083'], 'readwrite', {durability:"strict"})
    var objectStore_2083 = txn_3090.objectStore('objectStore_2083');
    var clear_3 = objectStore_2083.clear();
    var clear_4 = objectStore_2083.clear();
    var add_1 = objectStore_2083.add({f0_s: '<boolean>', f1_a: '<array>', f2_t: '<array>', f3_r: '<boolean>', f4_l: '<array>'}, 'FBnHECNvOdDypYIXErMICRQNCgRaghqNCGwtizZLGNGwHoHQlFpyfwzPuayjTtmorSAgriZWMnYCdcYVkwlLmdbtNFxbUtgdyxrFuezcXNzDjZeOvNZGYUWZUPwHwNunBantnRxGMXekjQIFZwkTdOxXgHzwHeqvbSrBkEXMMHjTFTQnLpgcqseRHoYVtgUzHgnjbsJWdOhpvUCuDdTauHRpQvVjdKtbKgJoMmUTKhOSaqLaBAfYSwBzcwXEiFTIauiFrUZmhBLsOwDagDFuRUEUdRyJvONOCISpKyoNADzxJeLXsJCEctaxfGEUnuzEHWRGHmyNaAmQZKgYrDEQHIwPemPCLfhFPlWIFYSQeHmcrCZZtFkFtxYpYkAfSJsWtLroQrnUbqZHsCeSEScHpMtzFEGCPtSTzSDhuAmzmLqzV');
    var add_2 = objectStore_2083.add({f0_l: '<object>', f1_d: '<string>', f2_t: '<object>', f3_w: '<boolean>', f4_o: '<object>'}, 'iqktIoFnvaNfXrcKTTyPpXGgyQSEOsvlgiXCKitzpkmBNURdrXybxkVPxdKRbIAjAvobDqyNDKotCkctQLcUlRreWKCvTEscHiCdOYaSdHOKfszimbiKIOLjJKvvGKiXAClhAaZbsvKFVHIDtcZPHtxcBTjHMfBOHKvldFnWLjXviuiPRIzlHORHzYVsWSrVrOhHhwOdxnnEOTUqhWNSVkDFUmyeqXbGbocUhAUTFvXEOupGvwcEYLNgeiZwluebfeFAjRQIKYpAuTHSkTjWATplYlRVKkldVcVsUAfYOekTBvTPHpiNDknBgrBPjEWyrRyQyjnfKYgELONQWlhXnHFtpmUnLWgOxRhLRIRgidjjxhxUJRJocuZgYeCOAYyCRgKtUKPuqdPNpqSTKtVvFeajudyMQRwcPTWFeaqlIaOdufWjZdFObscheZxPParJPCCEagrsgMRQfhquESolWldRLavHfQgyzFPMAnpRCRrxCJBUxhuxBLGtxMuxjzPIVPPuumBlhiVYeEWBGnWTAMplLBYJPYnmgxKKqCqlVpMhcStJbzPuHCkjOECDCkJkoMvovuUOavsPPbwTYXPbUAWdthTImNZQTCcuyWNtThsViUweHohlnbjxfJetMjNyuFBgdLfpEuvCQLNtdlauCUqyHcBzbFMNpnqJviAqpTLtOWHrJVOgTGCyRfSDbNXhVXwBwzgihAcSlRINTWPqCxamcrIPjVpFHfiffYO');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('iqktIoFnvaNfXrcKTTyPpXGgyQSEOsvlgiXCKitzpkmBNURdrXybxkVPxdKRbIAjAvobDqyNDKotCkctQLcUlRreWKCvTEscHiCdOYaSdHOKfszimbiKIOLjJKvvGKiXAClhAaZbsvKFVHIDtcZPHtxcBTjHMfBOHKvldFnWLjXviuiPRIzlHORHzYVsWSrVrOhHhwOdxnnEOTUqhWNSVkDFUmyeqXbGbocUhAUTFvXEOupGvwcEYLNgeiZwluebfeFAjRQIKYpAuTHSkTjWATplYlRVKkldVcVsUAfYOekTBvTPHpiNDknBgrBPjEWyrRyQyjnfKYgELONQWlhXnHFtpmUnLWgOxRhLRIRgidjjxhxUJRJocuZgYeCOAYyCRgKtUKPuqdPNpqSTKtVvFeajudyMQRwcPTWFeaqlIaOdufWjZdFObscheZxPParJPCCEagrsgMRQfhquESolWldRLavHfQgyzFPMAnpRCRrxCJBUxhuxBLGtxMuxjzPIVPPuumBlhiVYeEWBGnWTAMplLBYJPYnmgxKKqCqlVpMhcStJbzPuHCkjOECDCkJkoMvovuUOavsPPbwTYXPbUAWdthTImNZQTCcuyWNtThsViUweHohlnbjxfJetMjNyuFBgdLfpEuvCQLNtdlauCUqyHcBzbFMNpnqJviAqpTLtOWHrJVOgTGCyRfSDbNXhVXwBwzgihAcSlRINTWPqCxamcrIPjVpFHfiffYO', 'FBnHECNvOdDypYIXErMICRQNCgRaghqNCGwtizZLGNGwHoHQlFpyfwzPuayjTtmorSAgriZWMnYCdcYVkwlLmdbtNFxbUtgdyxrFuezcXNzDjZeOvNZGYUWZUPwHwNunBantnRxGMXekjQIFZwkTdOxXgHzwHeqvbSrBkEXMMHjTFTQnLpgcqseRHoYVtgUzHgnjbsJWdOhpvUCuDdTauHRpQvVjdKtbKgJoMmUTKhOSaqLaBAfYSwBzcwXEiFTIauiFrUZmhBLsOwDagDFuRUEUdRyJvONOCISpKyoNADzxJeLXsJCEctaxfGEUnuzEHWRGHmyNaAmQZKgYrDEQHIwPemPCLfhFPlWIFYSQeHmcrCZZtFkFtxYpYkAfSJsWtLroQrnUbqZHsCeSEScHpMtzFEGCPtSTzSDhuAmzmLqzV', false, false);
        get_0 = objectStore_2083.get(KeyRange_2);
    }
    catch (e){
    }

    var count_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('FBnHECNvOdDypYIXErMICRQNCgRaghqNCGwtizZLGNGwHoHQlFpyfwzPuayjTtmorSAgriZWMnYCdcYVkwlLmdbtNFxbUtgdyxrFuezcXNzDjZeOvNZGYUWZUPwHwNunBantnRxGMXekjQIFZwkTdOxXgHzwHeqvbSrBkEXMMHjTFTQnLpgcqseRHoYVtgUzHgnjbsJWdOhpvUCuDdTauHRpQvVjdKtbKgJoMmUTKhOSaqLaBAfYSwBzcwXEiFTIauiFrUZmhBLsOwDagDFuRUEUdRyJvONOCISpKyoNADzxJeLXsJCEctaxfGEUnuzEHWRGHmyNaAmQZKgYrDEQHIwPemPCLfhFPlWIFYSQeHmcrCZZtFkFtxYpYkAfSJsWtLroQrnUbqZHsCeSEScHpMtzFEGCPtSTzSDhuAmzmLqzV', false);
        count_1 = objectStore_2083.count(KeyRange_4);
    }
    catch (e){
    }

    txn_3090.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3090.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3090.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3091 = db.transaction(['objectStore_2084', 'objectStore_2085', 'objectStore_2087', 'objectStore_2086', 'objectStore_2083', 'objectStore_2082', 'objectStore_2088'], 'readonly', {durability:"strict"})
    var objectStore_2084 = txn_3091.objectStore('objectStore_2084');
    txn_3091.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3091.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3091.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3092 = db.transaction(['objectStore_2085'], 'readonly', {durability:"relaxed"})
    var objectStore_2085 = txn_3092.objectStore('objectStore_2085');
    txn_3092.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3092.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3092.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3093 = db.transaction(['objectStore_2088'], 'readonly', {durability:"relaxed"})
    var objectStore_2088 = txn_3093.objectStore('objectStore_2088');
    txn_3093.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3093.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3093.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3094 = db.transaction(['objectStore_2088'], 'readonly', {durability:"relaxed"})
    var objectStore_2088 = txn_3094.objectStore('objectStore_2088');
    txn_3094.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3094.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3094.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9925')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};