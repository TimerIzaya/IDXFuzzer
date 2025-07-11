let db;
const openRequest = window.indexedDB.open('str_7106', 5191632288638546)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2718', {keypath: 'zwabpBVCMntxULeZromqGubmqaJxrBIlAquyHkZNkHfYtSAZkkwsYiGHrKZEOPYojsPZvvKoxZgeNdRMLNRylbxdKyKwWAkaJtB.UvdIfZGkXydMXjZXckZtyNjeYeuuELZzqwLaymRxVVutEoCDIxXQZelxfRZaGgUrwNQDVOWTMAPrfjZLONieQysmmKGCXgaKnaEHUQknbwSgyawWxarkxfsRgqsGuYSlgwrrvgdHOYAAwmgFLWoBPzqcpakkYMHWQfxaRBesJQslJBfSGautQCfVdZtuUJODiUVBuCZcvvwVkzghWlxLpscQLpprHpvadLYYOvMcZmwoHXxjkVVcwKkSGLkWGCxySnAaHRkotLNtMBqdrkAVTxZyygscNJdjSsljBzOVKOtSxWNDbgWnnHfCrfltSaAiSmrdpeoCuMhnGMKBpKpHPZxSknMOrYnuoGbrqsVCbeLaeGwv.VLDouPQmRVvoIBjCdMTfSIdyXcakzwTpCKpfvVFraHmvUwUaGssvNZMgSHkgqErHrqSXyhXExnCDwnFNZaMvzXWnZaRwguLZXcfULeStbxUHCvrHMbgwEkJECFFPAyjONfISTTRqQXwxRVnsKsGzEruRcsljUCgXTCCMyOthHRzdAKrdBHpVrdBUdlQlkSEiPbYfdcNvVPHcvcnPhIIOpmJdrBEMZbrVrszsPymRJqRAvAPhGkLRZHFJWiYLtktDnJbfVkKopNRffLiUsxnVvSJTUaqBDgagbKrSZPFcnHGXCJRHlkfXZaaAbFLKjJtsvJHLgYLujkXEDpWrkrCSGcAiCsMHcGMnIqAuHAPSpIBBuKyeAOBwROVbMdaKapFNxjWMRedBntRyqajMUNhLOdaBrbnUqZYALlLjmzPJajqjgsSLhlSuhXMrTAJKgytwKbeKxVJIRQGRqlekHnSyWdiEQtYjuRWyKcHICTvueZwCUSZLWAKxbwMsBEFeewaepYjdtwUYLVrDWaGJnxksrGtNxaWvEZBtWtMetuVXozSMGChMIbVtkTHnZKjQTfFhtDCQWdbpIurpHycYmhULBRBlgPemEYvrBwrfbUrEvFacvKHhJpWIAOcZXcPqDWcvXsrcDFiHVEbbOjHKoxIaRXhIUKfqlxsAlUtGgmEZFoUUkGEAnmcVjAEucmHjqpTDIzKxMebOlENgCONfJxagFCOBXrcTPDAtPnXsTQsXTBKrPJpTmKzrFHZRepJFgVkpDNgOhMhgqhFFqADMwhDbGakJANdWptHLFHVWkehXiPFiZihQXYaTbkYpysNsYeXjrPYDqrhxgFYSQGdaZwyaWbcQejOTDxIPXbPflXkqiiYnTcvbUUkLvAWWHLhLrOjNwvGBWxmCDaReyQLcEtGiCjgWVQXmTvXxSsmKQG.hxGMNlRqEGJRhQOKKdMKssVzoIllBAdqARjNTSNWIBZgFiQhjydywpFqEVrXTDnzInpOomciYjGEGIJURVvVyeSauLBtGsNsNSBIdHsDvEfYJJmfPynZDNSciUZNHEMsSqTIAwDcOdJyXBlTqvZrweaSIVUPHFaRZGZCHilUtfLgSQAscIhMPhnmyuTBGxsdvAOEoQgghfunZggigsMnbcFthrKWkTUbrEGGYRoBaEQWzoBqxdftGgMIoUwDHbrrBeffBgbApzsWoSHuUoYTnWHfozrfjIqTlSyXiEaqBsgzSlAhHkFjUCgeuTwcCJQfqkGUepBmLhaFXdKYKTXtqgHmAkTlaBcfZOkziafsSpsLlCifNrsLYAfDYqnXwzcJnNEXjBsSpirfzsJikekTRqDvPJcCQpqfsLwxorCastitfiHpTwdqFOlxZpcuNwFJEiHrpboKWRZaeFaBqiFxrOjaCgnsdJehTPJhfSEqmpwkdvhPFkFvptCTNAHcAqAhXwkpLHphPZgtVEboxJIWnEirDpdxVDDzhGMZRP.ZpffxeiyRSWobnVYAmYPfrQePdRaVRpeDWfoDXsvWRcaSPaBjaHxhBCoGLaNszcTYnvEdlTsWdNLPPWNrCXDKWrbpWLBIuvuuGCEMvqFaedeFRDZSEnzFdpQrXiLVEkcaxmUcSFWdzQdbfJedzzNEfbTtFDVPGwXdXVUoyWImFMzOJIyQhyzjNglSNdOUkJfHURkjdkrJcrGYNOuODyfLJCwkzVbuYplBoCIsXdHdJsSGokeUDzDDmHICQUyrwaJmRkqoZGmowkTNDzcwQhOUBTLOoAFDiMjkyGAArEzLInhrdoMgaaqfFAaUBEVOuxnpIZfjmooZLzGqmvohytUwOSKqJKgXfKeEgqeAIdUoyKfbkZxiVGdmJxIUxlBXvXixibtAD'});
    var objectStore_1 = db.createObjectStore('objectStore_2719', {keypath: 'qtmOFXNklEzmoKyvucgevQFtSudtjGsyVDFBRAmMwFpFUxGglByUvDGFCSZMgLdvStIVMBNAjhXjcUZgQahjrvkhxYmwSeJcsrsHeEjMSodQXBdUWzvMAqNaGiuwrUMcgTnmBdDyqURBzwIQgyOoyrQNHjCdqCMjLABztpxYHJBSNhqnRVfIpPvLhQEqLMOugaRwOvvpruzjfkWmjzLZfiZwoFvSWYCyOCMVLraVXKKKnBIKEReIVLyMpsqaPuNqAWsICBHIAytPSiJvaMVlULVIUXGaDZClNLxZPmUVXrhEZBnwmmdLQBsBHQZteOyoONbiTIaFLmylBawMOPlfbgAuPSclVrmZZmCtcEWnUNmXwJEMLgdFKxxOaZZYypeTdRxpdbVtJwYHhVyJEJeYoPEnaOYjKPmIWjdodhIronXrtutrVBgMoKMpgjjtZkSFLzTPmEXRuWvmijXfcazKQuNqEqQWhxmdrtJEfSHzKCLgtHoZUQIClpaxixVqbrsXMoTkZZIBaZOJJmBfGYIMzJcmNkMkdfujNEbxcSBTVfKiXeIxeaWiKboEdm', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_2720');
    var objectStore_3 = db.createObjectStore('objectStore_2721', {keypath: 'qCrkjohqrEiGcAigmScoqwJRhfPIyeVOHrctwFDWPFPywyJCtpLjXgoMgextCPlenmGEdqWmtIRHiFmGMhjIz', autoIncrement: true});
    var add_0 = objectStore_2.add({f0_v: '<array>', f1_l: '<object>', f2_b: '<boolean>', f3_q: '<string>', f4_z: '<object>', f5_s: '<string>', f6_o: '<array>'}, 'wQrrEuEWRJGakdijfyCgKiibJFKLWzbOJFdOMIGqwSnTiuIwJILtPhwBgPsAbjNjVtAjQBVBiLscCHHmdbuOgddLClMTlkEzggNVhhDMmeYpouSmYCcKPulEOaupJVHQJkeQaisPplOJXafZDnveBXOJuZeBRnMNFbJMuHFwoyWIYFLoDfxAOsgyrVZJbpfijnvuJdUPqnGgVqJLOpvFsAClTEdgjJrRSOrPadbXOlguvCpaonRVgnJzHofgcORGFepfJvJMihJiTfcsGuQoaIykptmczgXawDxRIUieZztCvawnIzBhluhOGsCvqKiUkoVOnPirjMrbBIPvaEFIJtlnybNanYVkSsXYBUXQUrgbyarBJwLMOcESTxKIxEJYybwCFaxZGLusUcXsVBluDDaXEpytqpkPWMJHQtyIqBzDOyrsnnVgogHwkCcdmNMplXFAumcezmdPZycKUpcqtunAWoTcZvFVzfHueMDcXHTrcjaExhSKdprDxoOFHaqACFcOzKLDByGQILODXYPEOdawoAmPCMQUDKioyHPhtvKJkBhZlmsnkqonSNeRFVZHKGTutjEWGmpMYksLUSdvNrrCwsjeGFizfCeDcrDBweZGgEyyhpOusqSiBqPQAYCeKJPpJFqlwnnWUhhqGVFpEjfKJuVypdbvMZwukqeXaSjsRajgiquORRQMqWijuyrXjZycvxqVltFLxGKqlinLAYyfgjbetItblWgPuKckQtUTPNyBLUdhXzYYEOGjNcbhzWMNoJMFFUntxtzZ');
    var objectStore_4 = db.createObjectStore('objectStore_2722', {keypath: 'dpommXPHCXCtnoNRCVypyzlXPhThATfPDEWjnHBKcGVnRZWmVmEYVwZPrvPHkwwZsIZLHvTOETWqTgUVncEAwHAdOnGHaoIdaRSLXyCaHxQqtIYUPTkofFpBEVVaOSIDhokImUTLMHzuxsMpKDbEzisfuoQm.SHTRkglqCcyEBQqYKaXkQfJZRmNWyOEkAEeYtDfUUMRHbiIFVrzaEbsMKHpYVNjhFncoRvkJnfiUcWjMaRXUURnjNzDOwYXFWqxEDtAnBNVHRrRpLAuXsBZSoBRPsLFxMLXMBRViDEITaQKkcyfNDWvAcckAoWarnhSrLMuKSNvQrtfjfMOFZgocMxUABEcaDuMejhMbtblNsoKgEpjOvydLvSswlErDQTOyzwmiShGSNrRRazeGUWXjMHVpYpICLkmhtpyUXEyevNOAVHuKVcoEHUUpzuWvysQfpwpywPWmetobXciwfdoCpMAoMOQsNOaRvMumVtcNdGHdLbnijcBwVcPnbJlwTNLXZTXWlBxlpjkCJddVOOpJDKYEdmOgbACVuuFGmCmbPcrCsynaiInRIUpacZXsWzOcLExqVmYdvZxdLwqgsmHPmdfttkjPHOSfuimkgnRzWxRwRVRObqicGcizZNffSZfHPgTlWoslszsEUCKiWyjBbkqLjLQalBbATcbKPUaqCgtGsLmAFmdlhbWzVIcdbIIaWakslhepMAGMGmZqnYcxGQCAcWSijSfVJWbdTLtYhJyGs.OvMXZPmzNnBQAbWnbIJCLCgtMpIQAboTwnXuzqaDqbGlwTWsYtpfCjuygVQmRcpnieSlDQaBZplLHUrXqhgsLvDPOIuTzyAzhfnZzIWUVDkdmpiKTkqTXeXimpHOEpSgGXGprExdRvGOnwlWhNigNwLmOQdnNnVesjRlNrxKwGmkxyNezMsQukzSlFeZKHTDTgSmwzTmZPVbjblMHUqXwNCHyimRJWfGVtpMSwzISPbqtyCdkHKNJrAchtucULsPbNeuKvTtaFSiJnLLFAcqPJzZVWTuNsmLCqUTjScaCFRutLzaNTMCOyQAocVCbDkrZMBjvQsmdbqMUmdRYgVQUSUtYDBgIuZINyhCNjHJAmPFOMqqkSpomZsYRXfBxPZkbqzxtOBWCNgrpHVLgFxTdsqHfNnaQoSzRjFqNDSgsvMaFLVhjeffJsmwvRUQJBiKdmtcdUIcHPFAxoDIgIOdnrRhqdOwZOABtPkAdJuEvChvzQfSZVhZFlODHKXrZuZRBrSJlPCHZxKpXNtCJywtqGDHYCegugGbgAUuiPpsSClzcigbCuwM.HGLMtZAEpfnSiBbcRlqrjUgdbggwgbQsxPDGzWIukrzciurVSQFcYvVNihDdbTulUGmHbkBfkIeargMUeWekVEmDqeerhnpvsmWssoBrglvJNWRrwpOhuvlIGvtPiSMagoAeIJJQRecYgksreqAxCdkMjrjymBkvxkXeePMdPQNOTdzxrDAHKBIeAmmcALpkktV', autoIncrement: true});
    var clear_0 = objectStore_3.clear();
    var add_1 = objectStore_2.add({f0_f: '<string>', f1_s: '<string>', f2_l: '<string>'}, 'CZRhaRgEVeQrfCywMMWRtWlOiECOVmqWqpRdCeWvzoyYSjvRyJLPoabiMTGbcLzUYKrVKsEAQItviaDgZgFgQFBypWHERXpGPJZCSuuLjgJazxhVCPjwdDSEGDKdNzPJdmqVcCPIDYoVcACqtYbWKLsCFUmQjgIhyydvxhpyfbsfECxOUJqwcQrvlAbOMVNNgPSlOFuJSiXcqdhurwhuhvfhgvUrvRNIXlnPCVaeEFFnYCaybacwTzgIfCxEHKEGSrihECWjsPIHklMXRVOKjcBFQqfZowRPPwsRKKHlIsBPhLjHlXyBUIBKklSVTYVhojWddqMUqlkNJnPzlADOsNtWxzYoKJolwatQRdNhgrMLeHxvfqYrHfpbuyIhtZoZbLlilUQwaqHOoxWIeSwBIzLvIqubEYfSokUJjphizIjdCSLQVChZpPdNmIlTlAzalNkQNSiuVenFymgjrTohVMzshvoaIXYKEFcwkOdqnJfyuGiKDVKhFxUhDJhBlxIkHYyKbBeDfpbdLKhshcmyhgvFHCoFNfqbMbQenpRNprlURHRWyUYJSrPdrGFbWaEYkaHeMWPCOmOoXgaEgJLZPVaUMQaBREvlsRQVnbZPSVFGFmqHeNBwXzoBUWggfAmzLCIlQkdiqRKhpmPKlWVmAVhGzRMEGNSCMimfMtECNu');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('wQrrEuEWRJGakdijfyCgKiibJFKLWzbOJFdOMIGqwSnTiuIwJILtPhwBgPsAbjNjVtAjQBVBiLscCHHmdbuOgddLClMTlkEzggNVhhDMmeYpouSmYCcKPulEOaupJVHQJkeQaisPplOJXafZDnveBXOJuZeBRnMNFbJMuHFwoyWIYFLoDfxAOsgyrVZJbpfijnvuJdUPqnGgVqJLOpvFsAClTEdgjJrRSOrPadbXOlguvCpaonRVgnJzHofgcORGFepfJvJMihJiTfcsGuQoaIykptmczgXawDxRIUieZztCvawnIzBhluhOGsCvqKiUkoVOnPirjMrbBIPvaEFIJtlnybNanYVkSsXYBUXQUrgbyarBJwLMOcESTxKIxEJYybwCFaxZGLusUcXsVBluDDaXEpytqpkPWMJHQtyIqBzDOyrsnnVgogHwkCcdmNMplXFAumcezmdPZycKUpcqtunAWoTcZvFVzfHueMDcXHTrcjaExhSKdprDxoOFHaqACFcOzKLDByGQILODXYPEOdawoAmPCMQUDKioyHPhtvKJkBhZlmsnkqonSNeRFVZHKGTutjEWGmpMYksLUSdvNrrCwsjeGFizfCeDcrDBweZGgEyyhpOusqSiBqPQAYCeKJPpJFqlwnnWUhhqGVFpEjfKJuVypdbvMZwukqeXaSjsRajgiquORRQMqWijuyrXjZycvxqVltFLxGKqlinLAYyfgjbetItblWgPuKckQtUTPNyBLUdhXzYYEOGjNcbhzWMNoJMFFUntxtzZ', 'wQrrEuEWRJGakdijfyCgKiibJFKLWzbOJFdOMIGqwSnTiuIwJILtPhwBgPsAbjNjVtAjQBVBiLscCHHmdbuOgddLClMTlkEzggNVhhDMmeYpouSmYCcKPulEOaupJVHQJkeQaisPplOJXafZDnveBXOJuZeBRnMNFbJMuHFwoyWIYFLoDfxAOsgyrVZJbpfijnvuJdUPqnGgVqJLOpvFsAClTEdgjJrRSOrPadbXOlguvCpaonRVgnJzHofgcORGFepfJvJMihJiTfcsGuQoaIykptmczgXawDxRIUieZztCvawnIzBhluhOGsCvqKiUkoVOnPirjMrbBIPvaEFIJtlnybNanYVkSsXYBUXQUrgbyarBJwLMOcESTxKIxEJYybwCFaxZGLusUcXsVBluDDaXEpytqpkPWMJHQtyIqBzDOyrsnnVgogHwkCcdmNMplXFAumcezmdPZycKUpcqtunAWoTcZvFVzfHueMDcXHTrcjaExhSKdprDxoOFHaqACFcOzKLDByGQILODXYPEOdawoAmPCMQUDKioyHPhtvKJkBhZlmsnkqonSNeRFVZHKGTutjEWGmpMYksLUSdvNrrCwsjeGFizfCeDcrDBweZGgEyyhpOusqSiBqPQAYCeKJPpJFqlwnnWUhhqGVFpEjfKJuVypdbvMZwukqeXaSjsRajgiquORRQMqWijuyrXjZycvxqVltFLxGKqlinLAYyfgjbetItblWgPuKckQtUTPNyBLUdhXzYYEOGjNcbhzWMNoJMFFUntxtzZ', true, true);
        get_0 = objectStore_2.get(KeyRange_0);
    }
    catch (e){
    }

    var put_0 = objectStore_1.put({f0_n: '<boolean>', f1_q: '<string>', f2_k: '<number>', f3_p: '<number>', f4_u: '<array>', f5_p: '<number>', f6_l: '<number>', f7_m: '<string>', f8_o: '<object>'}, 'daBJNjLtnOcRMeAuqerEGdFeFaFPkJYdLzOzHbQbGYKDXdZXEUJBXCvvWYKsTUsGYNfXUnakgUBzRfzmjdPLXhEVamZAUQpfGOniNlrhVurLyOaGiDAboDWXeUMRHYtqhhBMaFJFPbwPzbQRQMEbJuDZeFFsDTgBoRQvVPywJvYOwzSrXrjnQvWExJfRxsftCrHshTgLHtXdMTfZkfChWuDXcWxRZXRlarvtAEmmhejxMSUBDWJMEGaeRWTBJKFIUOamJHUtObvYuzpuasyPOUiUhYdFcNNqeuheZjLpQxzUqUMLyPRXjpRRBAZKviMJhCyUlYNhtkWYXNrBxaFqmHwqCmoHTmQKjwFgGmuqJdkumMBzKWMEAZFkkIocOjpkBrRDjghJQFYbJHUXcMGqeHRpZMvxfXsgvpYZkBtNKUjKCOAOxlULJxGUoXXPwPhDffuYhLzBbZCmJBMlJbIuUmeCAQEeGVgApIFcHxQqdiMRekvpKzQybMVEewMSHOnmiDPZWjJVpssRSRAfzKqMTZEDYLGAmQomnuFWRMafCwEAhRelgZkDZhqouhLqnKXcjHAGlTPuWmgYjdnozNWdMqRtkBAzMLdAsIlLGxqOjKhNvEXZHWcGDUALDncIhonYATewUZAOypuAwvIVbATgycQuhheFEBkGmAULdzmwwTgDTunOZQzlZylvMYFsbWVJVtagBQNVDJvZoWYVcYISlanouTxDofWOdJkLXfxikUJBWQffKDBhvZRhVuScdacfOsGsGybeeFJQtiByujGGzscyIxzHLxRGGrOITmIrrsuUchyiEzqrMuRKGGxhZpCTYYuCPmTAavpXEKcVZZbeQrzcndpGmnwqpB');
    var count_0 = objectStore_1.count();
    var index_1794 = objectStore_1.createIndex('index_1794', 'test', {unique: true});
    var put_1 = objectStore_2.put({f0_e: '<array>'}, 'mxiPdvWpROtupdgvMSPalhKfXFHBzJRhgwjphqXEdyFPCLPRQjeQdZSdCxoowguyFcDjjlryQDrkyafxTuicVLeHVGXlKAcjRpWnJLNHKYINXpsBTosJeFUovTQyIpmVcFFepBrdfzaTCFcmEcSUtYWSgktbsuibvsmQBRhxzXjnwWSvTvtnZZFhUleKYyCFTEMyZksJutzqJJvaFQbEDZbDgmTwKjBEXukQKcVHfAiUmZnFSnzwUAtURfRyJiTuskfHeiEiIzEvAsjTkfIAKnhbZQoNioEBMhCpCIHVFkYkajQSgGrmVEocwUeXOBCPrxkATflcDzMIZMoBseQeSMtyYzhVjekpiuAwriBBMSwTDfTAgaktxvUPtNIWfdhmLkauYKYfkRUpn');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4055 = db.transaction(['objectStore_2718', 'objectStore_2721'], 'readonly', {durability:"relaxed"})
    var objectStore_2718 = txn_4055.objectStore('objectStore_2718');
    txn_4055.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4055.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4055.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4056 = db.transaction(['objectStore_2722'], 'readonly', {durability:"relaxed"})
    var objectStore_2722 = txn_4056.objectStore('objectStore_2722');
    txn_4056.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4056.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4056.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4057 = db.transaction(['objectStore_2722', 'objectStore_2719'], 'readwrite', {durability:"default"})
    var objectStore_2722 = txn_4057.objectStore('objectStore_2722');
    var put_2 = objectStore_2722.put({f0_i: '<number>', f1_f: '<object>', f2_z: '<number>', f3_m: '<boolean>', f4_f: '<array>', f5_g: '<string>', f6_l: '<string>'}, 'PZfkydGWctdQfIFEveRMkufcPEJerWwIrdikBttEUHiqoFqMBeyRDJXvzbFVVLbVrzUKDAAkOvjLZLSHtjuJOokJSLCDkcDOZQDAUjfqsLuRCxeDnkWxDWKanYLMLWVGBRVJawdSUWscVmDKYfCvSjvwSXKlpxQervVUCiLngusrIqKuYDUIwmhlaTABfdoNZuxFKqjVXodQUrsXuxmnmejUGwnZzjeKdmMMwZClhYxzLiUdvDBRnJHmQMBaMPVsHMsxMtdWFOKEirvKbjYjjJkzghAGQDLDSmOisXVWiXUXQMfUDXiNrBUlnfWAihglLpiVIGHFuigSswjqWYgAinGbLMabDtCuFtgBLGLXYiYLaSnhFYitxvqipCwsQAFnvPLGRDmDIABSfNYtkLXiVrDGkOoyqsPTJhlsEJTmwjwrgsbIFAGtllkaciYDBHtySSHMCCjVhApGtzDHDihbWzruDCyiQHoDhazubsqSKrpXqmLQQkyiODWLBsuwcYBNcNfpxNqWbJllvCAVjjfVmCnXJrEcHLQZWQgNYcTChLuXeQoDEHVSekEBIlKeLKfPEpmYnxeEryXArJwuiFObmKgUXeBGMDcEgxaGBZvSKNINkFhcWHsuGuQaqXyCPjxDXthYeeYMcyCekpHzAnZcHZyVqTFsroScZnURkgEfslQDwObopWCBOjZYJSShMOnagjaaptFQVnBUWwtCer');
    var put_3 = objectStore_2722.put({f0_d: '<boolean>', f1_f: '<array>', f2_h: '<string>'}, 'rwMEsBwEfTgOqTPeWKasEMBXyhkiAPAsnQAqFSjGMXZUMeOrueqXgleZluTuCJyUMDEGPmblKkMLqALGzQHzyoJlsVjFRrhCLKQmrUntTviBjdeKfUCcWmMbXDnSpMknOpzuwoxmyInlqVieHXbazFlgzsCfzDfcLGLvplOpuxWcnilKFQWxAEYitioxIObePzufcchxGFLFbGEvZlLXIUlsvWxpdiUcemOJJfACstAyuHuboLqkegEKxdyZOPKljXYBsEzrXLJgyVYmXTcWKcqlkqGgErHVPxOLRyxIBkZbcrDDMSiQlHYbCohmxebVgCWIkgoTubNdLillJHYHPyvjNiCDxLVVpNaxFnpeLIndxOlEfOeHjAMkdvTVURwzpIoDrqDdjUTMUKeJYvCQulFSDfxcnsaDHBmqQTwWSWnLXkTqvRbBwwfHfhzTGXDfUkeQHsNhFuresvfGWQOZUmAiRaZQgjCFxCpkwbDmpGlUfnxbxpzjSWfZwrXxVWDDibVsicVQtzSKrqGQPdlYhUUSYeAcEcmMobboDimXotmOuWprFkWSMzjkIOWoQjnvQsalFqwCwqcscCfFMqekgcndAWhlGvFPbPchrVdtHKNUznuVDIoWaIdMieXTusnWtBNJCscuQKOYFAqsrHsfzsTxe');
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('PZfkydGWctdQfIFEveRMkufcPEJerWwIrdikBttEUHiqoFqMBeyRDJXvzbFVVLbVrzUKDAAkOvjLZLSHtjuJOokJSLCDkcDOZQDAUjfqsLuRCxeDnkWxDWKanYLMLWVGBRVJawdSUWscVmDKYfCvSjvwSXKlpxQervVUCiLngusrIqKuYDUIwmhlaTABfdoNZuxFKqjVXodQUrsXuxmnmejUGwnZzjeKdmMMwZClhYxzLiUdvDBRnJHmQMBaMPVsHMsxMtdWFOKEirvKbjYjjJkzghAGQDLDSmOisXVWiXUXQMfUDXiNrBUlnfWAihglLpiVIGHFuigSswjqWYgAinGbLMabDtCuFtgBLGLXYiYLaSnhFYitxvqipCwsQAFnvPLGRDmDIABSfNYtkLXiVrDGkOoyqsPTJhlsEJTmwjwrgsbIFAGtllkaciYDBHtySSHMCCjVhApGtzDHDihbWzruDCyiQHoDhazubsqSKrpXqmLQQkyiODWLBsuwcYBNcNfpxNqWbJllvCAVjjfVmCnXJrEcHLQZWQgNYcTChLuXeQoDEHVSekEBIlKeLKfPEpmYnxeEryXArJwuiFObmKgUXeBGMDcEgxaGBZvSKNINkFhcWHsuGuQaqXyCPjxDXthYeeYMcyCekpHzAnZcHZyVqTFsroScZnURkgEfslQDwObopWCBOjZYJSShMOnagjaaptFQVnBUWwtCer', false);
        count_1 = objectStore_2722.count(KeyRange_2);
    }
    catch (e){
    }

    var count_2 = objectStore_2722.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.only('PZfkydGWctdQfIFEveRMkufcPEJerWwIrdikBttEUHiqoFqMBeyRDJXvzbFVVLbVrzUKDAAkOvjLZLSHtjuJOokJSLCDkcDOZQDAUjfqsLuRCxeDnkWxDWKanYLMLWVGBRVJawdSUWscVmDKYfCvSjvwSXKlpxQervVUCiLngusrIqKuYDUIwmhlaTABfdoNZuxFKqjVXodQUrsXuxmnmejUGwnZzjeKdmMMwZClhYxzLiUdvDBRnJHmQMBaMPVsHMsxMtdWFOKEirvKbjYjjJkzghAGQDLDSmOisXVWiXUXQMfUDXiNrBUlnfWAihglLpiVIGHFuigSswjqWYgAinGbLMabDtCuFtgBLGLXYiYLaSnhFYitxvqipCwsQAFnvPLGRDmDIABSfNYtkLXiVrDGkOoyqsPTJhlsEJTmwjwrgsbIFAGtllkaciYDBHtySSHMCCjVhApGtzDHDihbWzruDCyiQHoDhazubsqSKrpXqmLQQkyiODWLBsuwcYBNcNfpxNqWbJllvCAVjjfVmCnXJrEcHLQZWQgNYcTChLuXeQoDEHVSekEBIlKeLKfPEpmYnxeEryXArJwuiFObmKgUXeBGMDcEgxaGBZvSKNINkFhcWHsuGuQaqXyCPjxDXthYeeYMcyCekpHzAnZcHZyVqTFsroScZnURkgEfslQDwObopWCBOjZYJSShMOnagjaaptFQVnBUWwtCer');
        get_1 = objectStore_2722.get(KeyRange_4);
    }
    catch (e){
    }

    var put_4 = objectStore_2722.put({f0_i: '<boolean>', f1_q: '<boolean>', f2_l: '<number>'}, 'lswxCRCKZTpCferTeFUcqMErUmRmTtGwIfgHQFojLOjqdVvIUANFOIZUQRNWrbcHnyWWxWenqiGLuLMmGDXcRqnhiVizurHgVORklrgIzUoONxgIjuIdhvsgUpmtMYEubvdLhKFCgFHbsEQEWHFPNOODmJxmyPdfjxhDpoIUALZsecNrNNVjkUbHBfnqSbZRKLyKvIaiukuVwviFwkvwAgEdlTDnkmkkWCGHNKyncxVuxkUfZrKyytzpnmjdYbKKekdMmmIcIgxqiqgQyhXdXNMKccgeTYQsNrsvIDIoWAeYmONRCaYqmglkbGYrNcvYXOCEABKiHNrLQazcVXAjicnYgCuFzQgiPLfHJDfKSWjjsgHWByCZPaDOsJJpmxRucwLJnBczonjugvVEXVuDozLCwqyvyrJwTGoYRJhjvOaZJCQrfohwDpkGWdIUbaTcMwKiodHteOVeWUWZyUaMoldPEaDLspjfDwfKKqnQXrMKRcpcSSfAMJnayfhSdzTlRcqQMpWPkaadDnTLOeskhcGVzodWsRjaSDqRaKcRnrfPuHmZmUKRRyYGuduOEneGgHiqsvWHnqgGxuyuoCKuNdSFgNsmRtLuOqTjRwoDIlmdGWrNBdwDemdaiUOfyhwcTQbFlsnXYFkiHlTNWImcWGxHvIweWCUyrBjGqQsqxeENNPlsYtByqmvFlnhnCngSrCpruRmlYDWAqtKliKyGOquEhUdUaDjQNmNTPSQdqgIqIwrrJNVuwZWlDOUolZTKcixZkSqKZfuSYaEmBIChOzDBixbZIvfGqTEGMdEDlYrAwbpKFmROIdTCCtKVVeHMcHOsOWbZdlPQdOAjXuCRZBjacxQsfYSwZPovbJaGJRAtAIhQeIFMgtoGOjzSJBVzqTtSFLojNfahLqrSDHuCYF');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('lswxCRCKZTpCferTeFUcqMErUmRmTtGwIfgHQFojLOjqdVvIUANFOIZUQRNWrbcHnyWWxWenqiGLuLMmGDXcRqnhiVizurHgVORklrgIzUoONxgIjuIdhvsgUpmtMYEubvdLhKFCgFHbsEQEWHFPNOODmJxmyPdfjxhDpoIUALZsecNrNNVjkUbHBfnqSbZRKLyKvIaiukuVwviFwkvwAgEdlTDnkmkkWCGHNKyncxVuxkUfZrKyytzpnmjdYbKKekdMmmIcIgxqiqgQyhXdXNMKccgeTYQsNrsvIDIoWAeYmONRCaYqmglkbGYrNcvYXOCEABKiHNrLQazcVXAjicnYgCuFzQgiPLfHJDfKSWjjsgHWByCZPaDOsJJpmxRucwLJnBczonjugvVEXVuDozLCwqyvyrJwTGoYRJhjvOaZJCQrfohwDpkGWdIUbaTcMwKiodHteOVeWUWZyUaMoldPEaDLspjfDwfKKqnQXrMKRcpcSSfAMJnayfhSdzTlRcqQMpWPkaadDnTLOeskhcGVzodWsRjaSDqRaKcRnrfPuHmZmUKRRyYGuduOEneGgHiqsvWHnqgGxuyuoCKuNdSFgNsmRtLuOqTjRwoDIlmdGWrNBdwDemdaiUOfyhwcTQbFlsnXYFkiHlTNWImcWGxHvIweWCUyrBjGqQsqxeENNPlsYtByqmvFlnhnCngSrCpruRmlYDWAqtKliKyGOquEhUdUaDjQNmNTPSQdqgIqIwrrJNVuwZWlDOUolZTKcixZkSqKZfuSYaEmBIChOzDBixbZIvfGqTEGMdEDlYrAwbpKFmROIdTCCtKVVeHMcHOsOWbZdlPQdOAjXuCRZBjacxQsfYSwZPovbJaGJRAtAIhQeIFMgtoGOjzSJBVzqTtSFLojNfahLqrSDHuCYF', false);
        delete_0 = objectStore_2722.delete(KeyRange_6);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('PZfkydGWctdQfIFEveRMkufcPEJerWwIrdikBttEUHiqoFqMBeyRDJXvzbFVVLbVrzUKDAAkOvjLZLSHtjuJOokJSLCDkcDOZQDAUjfqsLuRCxeDnkWxDWKanYLMLWVGBRVJawdSUWscVmDKYfCvSjvwSXKlpxQervVUCiLngusrIqKuYDUIwmhlaTABfdoNZuxFKqjVXodQUrsXuxmnmejUGwnZzjeKdmMMwZClhYxzLiUdvDBRnJHmQMBaMPVsHMsxMtdWFOKEirvKbjYjjJkzghAGQDLDSmOisXVWiXUXQMfUDXiNrBUlnfWAihglLpiVIGHFuigSswjqWYgAinGbLMabDtCuFtgBLGLXYiYLaSnhFYitxvqipCwsQAFnvPLGRDmDIABSfNYtkLXiVrDGkOoyqsPTJhlsEJTmwjwrgsbIFAGtllkaciYDBHtySSHMCCjVhApGtzDHDihbWzruDCyiQHoDhazubsqSKrpXqmLQQkyiODWLBsuwcYBNcNfpxNqWbJllvCAVjjfVmCnXJrEcHLQZWQgNYcTChLuXeQoDEHVSekEBIlKeLKfPEpmYnxeEryXArJwuiFObmKgUXeBGMDcEgxaGBZvSKNINkFhcWHsuGuQaqXyCPjxDXthYeeYMcyCekpHzAnZcHZyVqTFsroScZnURkgEfslQDwObopWCBOjZYJSShMOnagjaaptFQVnBUWwtCer', 'rwMEsBwEfTgOqTPeWKasEMBXyhkiAPAsnQAqFSjGMXZUMeOrueqXgleZluTuCJyUMDEGPmblKkMLqALGzQHzyoJlsVjFRrhCLKQmrUntTviBjdeKfUCcWmMbXDnSpMknOpzuwoxmyInlqVieHXbazFlgzsCfzDfcLGLvplOpuxWcnilKFQWxAEYitioxIObePzufcchxGFLFbGEvZlLXIUlsvWxpdiUcemOJJfACstAyuHuboLqkegEKxdyZOPKljXYBsEzrXLJgyVYmXTcWKcqlkqGgErHVPxOLRyxIBkZbcrDDMSiQlHYbCohmxebVgCWIkgoTubNdLillJHYHPyvjNiCDxLVVpNaxFnpeLIndxOlEfOeHjAMkdvTVURwzpIoDrqDdjUTMUKeJYvCQulFSDfxcnsaDHBmqQTwWSWnLXkTqvRbBwwfHfhzTGXDfUkeQHsNhFuresvfGWQOZUmAiRaZQgjCFxCpkwbDmpGlUfnxbxpzjSWfZwrXxVWDDibVsicVQtzSKrqGQPdlYhUUSYeAcEcmMobboDimXotmOuWprFkWSMzjkIOWoQjnvQsalFqwCwqcscCfFMqekgcndAWhlGvFPbPchrVdtHKNUznuVDIoWaIdMieXTusnWtBNJCscuQKOYFAqsrHsfzsTxe', true, true);
        count_3 = objectStore_2722.count(KeyRange_8);
    }
    catch (e){
    }

    var clear_1 = objectStore_2722.clear();
    txn_4057.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4057.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4057.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4058 = db.transaction(['objectStore_2720', 'objectStore_2722'], 'readwrite', {durability:"relaxed"})
    var objectStore_2720 = txn_4058.objectStore('objectStore_2720');
    var put_5 = objectStore_2720.put({f0_t: '<number>', f1_s: '<number>', f2_v: '<number>', f3_w: '<object>', f4_m: '<object>', f5_j: '<string>', f6_d: '<null>', f7_t: '<array>', f8_g: '<boolean>'}, 'kHfJozZuRZKChOlTQJHRaqDPYrHkKDSvshOlBmXXxntvIMNYnfGTxzyMeBLSjndGTteFcoHWwJbnNgOsCjwFMfMEnqUJpTPqEuwcCvgqiHhcmFzwDOfHmSPubStZsWeMqpWEwwPbSuQLCirzjhHAYKnezAHwTUiekhrvtTVlaDLybPNhihaWsniHLQrhOmWtOCptBZXVSgoOXDdMYJRAdKEmIcfSTmKINRsQzaeUPmSusToZgVFiWreARIruJFrPmmceauHRmhjLPMPsVCpHYGuxrUuBrdTRYMQRaMKewsjMGNHkazhXJjWcZPVQjRwrBNUEqnwsEMoHWIOLxGQjcoVpGPQYJpEMcnjsjJXUrOAkTHtyEyQdhYlyvwBZhNxjAAUkyXLlQrTubBlbHtsJfFtcCxWvcFuWAjvwKxPQDonQPuNGisgBremTyBVDBtVYgrTOYYYgwYDMPdQUsPAIprNKGfDnrcvNRyLZeCnabvwbasDfMgApctzpTEoxHEDgxWTnxGCfVYvBqCwWvOWIFfhCaePIzeoybKhWKHNoirjxhkLzZQCekcKvxSdMuryaMOfmquarzVYBEOubUarjQZSCCmUnoyjIujLtdHAWhUJkpPrFCSYfzGmGaGFlCgULqnXLYuBKRWgPAoSligWIBZARyyleudrOoFkgbpCMoQbVKwoFshVGpWfJgjJwktoHnAHuQJtjirBNMThKsbbaMfksByfnJuTKTYMtJtQCPcTOkWwehuvPgSbladcdbzeaXManORcxLmLnqkAJXkkdoeFEzcygbxxVKCxTYIXCkfqawtgyrtDLCFBwkxoDfmELhMfJheHOhtZFRTWLFAgmOlrLKZMYuddsfFlAEnqIwKfoqxNWNaVhQCUKztoxNFqHTjmKPpPojWgko');
    var add_2 = objectStore_2720.add({f0_h: '<null>', f1_y: '<array>', f2_t: '<boolean>', f3_g: '<string>'}, 'RFHebAiaHwJTdFFMoIYqroLWRzCMcxFIHOycXeEKlzjQxILzssSSAtkikHSpmWtPQxrsMuvnwltLKtKfBQwhRboxozzhbHDxwUBHGVJafnkjEAjerMKTImkPdclsJqOhQZoTYKSBFNCLBHIeqycTvpOHjKoXsrxXIKNSFHMQafMghhZKjcGJEgocLokUMtdSIyVyHyUCbuVoICPbjmBYNIPbYwXpMxlllZkNqIOjNHHwqMDjoEpWJRmRCiJsfILEgwg');
    var put_6 = objectStore_2720.put({f0_a: '<null>', f1_y: '<string>', f2_v: '<object>', f3_h: '<null>', f4_h: '<number>', f5_w: '<number>'}, 'xXlkJSDarpeaSuSTIcXuIIAoPxBBlvvpdXVNXNshsbXEhVrIQByxxZJOhGRaPjXoZnopxiXEoWSOyiiGOZnwPAdrkVUyNAyxLIQzqcMJIWumaIiUXTzvCdbDEYUklENjuaMANOKzAmnEUeUAzIaqHfBAWXYALckCKZxWfxljhlqgLEKoXlLBllcJZlXdgtiXtMFoDrsZsMYjCVHOCNmOFAtJigDRRxtqkqedBiTeBxgwrscOoPbgAuhKVPCEGDipAZrTATPrivWdhILrcKhYMOHJDlyGlhoTApRTIUTREceArvqkaNRDyLwPZkNBjhOTdnowKANJrXWJoyJGiHUnvPFDhkbDCNFQmggDQtNGADVZosUZKDiTypYzvbFzfREaAeqpaSOZxwtCPHPvwbsqMGhiOJKdyhAuGnuYSaPOSytbbdPWoDehtSHcHSaSWnHCWWgSkUviglqXgWdNeNUadQhVQXcVdzkJQwZrvffBoeuakN');
    var add_3 = objectStore_2720.add({f0_d: '<number>', f1_j: '<array>', f2_g: '<boolean>', f3_d: '<string>', f4_o: '<object>', f5_m: '<string>', f6_b: '<number>', f7_a: '<null>'}, 'OYgSSShVWOpjRIJwhPZbzYfswShboWjRhjIInOTrcinpTfOCCJJXGijOWZpkxclACEmRvPOAlhAdqZkZLUgErxAwxqZwjHTiPLljWXERPbsssqxMhzzmrvewWOBSkBXIqMqLZNWsjyICfTYQfPndCgnrZEadziPzdUVNuHuvqQpxHGtdbuqHrSvjsvztSESqVxzNLUujPYAGcZavpYbiKwYTRwDOLiIevjadeFCeMOnOTMhNDTexyWvipWpyOfIvb');
    var put_7 = objectStore_2720.put({f0_d: '<boolean>', f1_c: '<string>', f2_q: '<object>', f3_m: '<null>', f4_b: '<object>'}, 'tAKnsQIKIHABAToFbRunAmBckEUDtfBlQjEtgwBbapKFVOgFSWWYRnGKvCkVeuzvIDJZJDNXVempAmKAVzZKvuIiDmQhgnPWPPeWdXBQsBjZYsZLVLENCSYRpYpBxvMFiJSFHFsynuUbQUKphKmiVqqwfqrCZfNqfkkbaJrifahiIfcINYVUqSyrPLrROYLGKLZKXyXzgxSjNnKWxCXseyBlsbjRkuRhYfkRsNIauAGBSlblnmzkPXizSuUDkMaRDraeITiaMJOfHyTNaHdNUlAOuOAGHBdwtrMdMGeMblvsClouIFMjJDZRwkjkgeyGoPaRDcdGVAUXLntATxuYFVWxu');
    var put_8 = objectStore_2720.put({f0_o: '<object>', f1_r: '<boolean>', f2_t: '<object>', f3_p: '<object>', f4_o: '<object>', f5_w: '<boolean>'}, 'oQphwRTemTPbXGwJCRhblSAuiTqRNJWUbmngnwkfVcxOeZvCCkNMtKCzpZnQRkSymxKfEHmhkKsTBUrQTggSFQdwVvyDVOkAoTNfejlOMUgxSkvHSphfUErzeeaZVVoEyzDErcmkAqig');
    var clear_2 = objectStore_2720.clear();
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('OYgSSShVWOpjRIJwhPZbzYfswShboWjRhjIInOTrcinpTfOCCJJXGijOWZpkxclACEmRvPOAlhAdqZkZLUgErxAwxqZwjHTiPLljWXERPbsssqxMhzzmrvewWOBSkBXIqMqLZNWsjyICfTYQfPndCgnrZEadziPzdUVNuHuvqQpxHGtdbuqHrSvjsvztSESqVxzNLUujPYAGcZavpYbiKwYTRwDOLiIevjadeFCeMOnOTMhNDTexyWvipWpyOfIvb', 'RFHebAiaHwJTdFFMoIYqroLWRzCMcxFIHOycXeEKlzjQxILzssSSAtkikHSpmWtPQxrsMuvnwltLKtKfBQwhRboxozzhbHDxwUBHGVJafnkjEAjerMKTImkPdclsJqOhQZoTYKSBFNCLBHIeqycTvpOHjKoXsrxXIKNSFHMQafMghhZKjcGJEgocLokUMtdSIyVyHyUCbuVoICPbjmBYNIPbYwXpMxlllZkNqIOjNHHwqMDjoEpWJRmRCiJsfILEgwg', true, true);
        getAll_0 = objectStore_2720.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('kHfJozZuRZKChOlTQJHRaqDPYrHkKDSvshOlBmXXxntvIMNYnfGTxzyMeBLSjndGTteFcoHWwJbnNgOsCjwFMfMEnqUJpTPqEuwcCvgqiHhcmFzwDOfHmSPubStZsWeMqpWEwwPbSuQLCirzjhHAYKnezAHwTUiekhrvtTVlaDLybPNhihaWsniHLQrhOmWtOCptBZXVSgoOXDdMYJRAdKEmIcfSTmKINRsQzaeUPmSusToZgVFiWreARIruJFrPmmceauHRmhjLPMPsVCpHYGuxrUuBrdTRYMQRaMKewsjMGNHkazhXJjWcZPVQjRwrBNUEqnwsEMoHWIOLxGQjcoVpGPQYJpEMcnjsjJXUrOAkTHtyEyQdhYlyvwBZhNxjAAUkyXLlQrTubBlbHtsJfFtcCxWvcFuWAjvwKxPQDonQPuNGisgBremTyBVDBtVYgrTOYYYgwYDMPdQUsPAIprNKGfDnrcvNRyLZeCnabvwbasDfMgApctzpTEoxHEDgxWTnxGCfVYvBqCwWvOWIFfhCaePIzeoybKhWKHNoirjxhkLzZQCekcKvxSdMuryaMOfmquarzVYBEOubUarjQZSCCmUnoyjIujLtdHAWhUJkpPrFCSYfzGmGaGFlCgULqnXLYuBKRWgPAoSligWIBZARyyleudrOoFkgbpCMoQbVKwoFshVGpWfJgjJwktoHnAHuQJtjirBNMThKsbbaMfksByfnJuTKTYMtJtQCPcTOkWwehuvPgSbladcdbzeaXManORcxLmLnqkAJXkkdoeFEzcygbxxVKCxTYIXCkfqawtgyrtDLCFBwkxoDfmELhMfJheHOhtZFRTWLFAgmOlrLKZMYuddsfFlAEnqIwKfoqxNWNaVhQCUKztoxNFqHTjmKPpPojWgko');
        getAll_0 = objectStore_2720.getAll(KeyRange_11);
    }

    var add_4 = objectStore_2720.add({f0_r: '<string>', f1_i: '<boolean>'}, 'OKbTmiFbJNqSJLirFyWvqWAZcyJEuXaUOysdkheMNMyTmjWBSOZwpIQtMwexEWzpXcQPQkLjwNCtoYFSgAHeVKZdsLgFpZQUoBmIssdxzJfamiqMhCWFCWlevIeQUcfHxxEfPRwDYLtoCvoxqGbCWIjoGiyVNTYAQCHePfcObuXsnXdaccZEMAiIloKpuDWtCWtTiZvYbFPXLBkXgtCiUjVBmOxfZRyHjRahrGLSaPwYNIiJwdpWdLGlQMXNekUoBVUvqWqFGQCg');
    var put_9 = objectStore_2720.put({f0_o: '<array>', f1_m: '<number>', f2_e: '<number>', f3_d: '<null>', f4_s: '<number>', f5_p: '<null>', f6_y: '<object>'}, 'zKVBIOtQVbYePmSAlzwptYWIgcjoeRnuPGummiMUdNZBOKpyzsHglNYTXsEPWkWuqMpfmDMrXpZDMEIpjXbKaAqBvoDjreLEDlOdyUDpTVsntXIXDPloQQNBFCKYCuFTpUHPBBeqepBAVfWfDCJFMduyorPzqaXfDiatkLgUsCXCIQvrDohSvlWTPKQWDTdNRKaxECkGuAIInVxeykdznVzdwMQnIPfJHUbDtvpgNORvhsNjMqrFAPoMsHiFsDtgmsiXueewvRTqAwiyzAIMXeEOUiJNhxdYDXAzYUshLAMCPYSsRBvqHoaYSHtsKdKyDYPGYqCdIofisrmtgXDciSAxYrKDEfKAjvgQsKeNIIAkBlequwHcpBnBqwqXWQPus');
    txn_4058.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4058.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4058.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4059 = db.transaction(['objectStore_2718', 'objectStore_2722', 'objectStore_2719', 'objectStore_2721'], 'readonly', {durability:"default"})
    var objectStore_2721 = txn_4059.objectStore('objectStore_2721');
    txn_4059.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4059.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4059.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4300')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};