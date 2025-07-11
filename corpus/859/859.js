let db;
const openRequest = window.indexedDB.open('str_9545', 7511227382970789)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_5147');
    var index_3452 = objectStore_0.createIndex('index_3452', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_5147')
    var objectStore_1 = db.createObjectStore('objectStore_5148', {keypath: 'JgKcXtginUlawQuux', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_5149');
    var clear_0 = objectStore_2.clear();
    var index_3453 = objectStore_1.createIndex('index_3453', 'test', {unique: true, multiEntry: false});
    var put_0 = objectStore_1.put({f0_q: '<null>', f1_i: '<object>', f2_l: '<boolean>'}, 'gqPFwSNgRPnbQgmMsJHBTsbPRlHRsRLkVCfBcmdDoRWHWohGeJzixkoeZmdhOPeoxbMxpqMRVycHoMZaowzMtSzWqdhYbadCZAfkvMqeSsKgDlbVwVXLiLqMrPdxeFrSkxWmEcXvimwAAnBGUcczvhGAqIYIFxzKOoShPyemjvVbQrFRTSwgKxdaYkNreeTbKuvJhYIPtDqvYMCeCOweRgXoXriwdaWJNnuzHTerQzBUWsPzyBujSndqZbwNYozpsDnQmQfRNeJywyRujkCpxLZsGxtqaejZdvXZePmKZQiinZiHgDEPDbyGZErPxejbegIERwiJSjMdxPcJFHedOLTdBiJppuXTCwqetpupCilfofVOvbmtzhBRQQvutYgXHgjBGscKemdbmwbenfawzGIPJoSDbriFeAQbobstyJxmMlrVdezAlpkDAnNUPYaxjJPFgOhExXxmclZNCbizSBvzekmEXSOVetQrhjLyTGVYLc');
    var put_1 = objectStore_2.put({f0_m: '<array>', f1_s: '<object>', f2_y: '<array>', f3_f: '<string>', f4_n: '<string>', f5_c: '<boolean>', f6_g: '<boolean>', f7_s: '<boolean>', f8_s: '<null>'}, 'VxfNynnWpUkGWvrmTuzoroFtpbZyTaSWdJAcMyTaVIsZgJfAXiyJjanPLPlAztifTNhhnfYlwEDksnSgEdLUtOrmqJyFzLOzDLAiWHvtOPYkFVAIKgpMcXngdXLWyxHLHOkFMdKGcOnhaJAaQZztscWAEBlHFqoWrSlwQSGXptgqSXRTJNoiBxAKHpCtIKHbVUPhrXtkrUWXszswqSoQLzGRcOnLanmeYAICySOzJLcDWdwhObILjjYEtMBzbOVtjavgsLNueZWkfoLhRVYCNPMMekFczyQrleVyxAhZqgAjyAyeDgbiqsaJntVbEvHKcXjgCotsuDaqibMsOGTWuWOJMPfHOzvqhlWiWyIiowNanXbCMgOfAGnzuOPIuOgpDFVyLDrKDgnwcuByMJypwqlUjbviTYwkkgNqXSRleVwkalbvEJdncPhUQXfozbrPOITwFIAweQuNuMIUGOeXiewhJwktxMUFTPTIQslWvLCxwAzlQMFtBPTNrtvOxYJxEafFzNaNFDVaMLDWFCtaLRLUIQLscuoqiDFPrDziYMrAWbjbSFsLOhKdznJaraTARqXshGEzqSKAmFQmckFaZbhSVoOWCZdzexrnjHJoISRWcPIXJkMzqEOYpDMrxJQUgHPQmgwBPvOJtkVorKrMUIAMBvmKBOnczRGmCEpWHIUPFwBSKCYxPAamxdHLdlhnsRaORqFhHhAnmFtSMPpeHZGyvTGqwlHoEjMEtjpADCHFFxbFXSFhSfucSSmZEqnTePznHhEFMXNjySrFNbdGGcnyVKrXmCLRXfrfrQdupqlqDbnZfqVMEjmGusnfewBxvmwrYTfevIbaRHxNEVIREHZqmwNqyeyoRIKvD');
    var clear_1 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_5148')
    var objectStore_3 = db.createObjectStore('objectStore_5150', {keypath: 'KvzDWWlVMHJdikOZaQmIdwijMmWxypRdSBuUVeYHvhEKerXXBKXPZCjOmcDvjXcqdGgYWaCtfRUboLkcxHqZgmoWKwPwKPSGaVIwdRrbFIumBUpDcniPqPwczKCIP.tOSdtKtTSNPXpPihWwUwDRDeYhAePantjlTbbRKpQZDzpkXEGThpzzwTlSygXLQtKEgjTVuhBQVfyUOrTeYiqwGuQFsDQzoQaqKlBTttqFKXhCeAGqDGNGfHBxpZrjEXuCklJnRKOtoAIbxZQLrphXuORfYtHajssoROSVZNCQcuNzRYSZzlsrmjDlKiBvtIpTHIMsvFecAZlEecNJvYohKtBpHsygYijmPqsPQomfUURtaZXiQFqzTDArsiBBBGLVWtqIzLKeyjwjCpQNUxfqEUHyLbuDwkIjcqeNBfyagtJHVBpEdsAtQtlJtHexzjUbyDfJqaYLrcsslNDHBNHzhHXWELHuIejIKkrTQJdejddKgXbzhArrHmEHgzRMATNjdvZhTVpfrsPBzGoyeknSDGCOmYucwIEKIGjaERLEbUuDepXKrhrHfZgqzFbogmzWAJmqZGzObTyEyMtkpewsYyPWEDjlVdmnnWJUPJEY.kCIwTIWukmkJtRGGZMOquoqjzWzifRPllqXVxKBghlzTIwpecOVrJBtotyWsctijDKKzgUsLWfUOoCqswSfmOosalTxnSOuHRdYcYNUPDjfjUCKsJjcAbYBCgvNJcSJWuMPWCbVpczKsWawNjUKTDKubwbWeDZhSNyAQGxtUFpYEPITtUblizggrciRJfvcLafssGUcpEvErnkgeWIRcwIYibXwTyV.yMwEjwDAaiEtYWwqRLBUgTFGRqoYMtCifbUKoIwTuJguxLlQrgjfxWUkfEqHVkIUDYpmtzgFaVwqtXPHkIGVhlmFVmxOFadVQKEsAcaGYkphubnUXDctNFwxHRDLYRDLmKkVVzTsrHaJNSVdfJiZvoVvgjxheyaQJhlJrIsiBsRwYhbbPZuCaRpjNnZSKMFDRatsKbTsozMbsiedCWiwcdpyuXFHFiXtJOnjVkhcQDkHMtBRTWdhSpoRatqVtyiiXKfQlSTsoignvmsyqjTFSSDHesqBzVMrqpgeVeeBNGdFqhUZjOnvLVQTJfEXUfNrkfFzEGHpOEFZgJKRongjdaZCVFefbnKLJbGcGATCCqHHEieAoJJyTKpNGOCZAtxUisEwjbOJb.csVbxMnMQXMhfpBOELTxtRjihOjCAKstycCWnSukJxYnrOSCczjLHUvKtjpuLSXNpmfJSKulraUZdyStmLkzBhWKmuolFpfEigroEGwaJuGhJneCgfsHmfIVxvOREwLItWfyxJRmuZPKLFRaoiTWAyqSIosemhjuzvlDMtxVglzeQXDxuozxgcxKCyZPaqLbjAbZEkNhvalEwHLCkaXXfsSoSeGaTpHqXefNQcMFPsXMYtdNzjOPmaQTbLgyGZaYVobZurRHpkNmyKtrwdAeooPSEATHSrKxfaWlPJHIeguzfKafOhVmwTvnnytTcTldlvSETetNbsYohzCfYFnYMhzHIEpFODAgeobLgktEryePnoDXzjaSAeXIdLlkBZylZJIAeHnQDGQpUCfRuIvazUCrafEYwzXUTgYGOHrWsTkEetBpCYWGDftaDwirwYjkKoPrACPgUAJQyZJMZvOFvMnzkquarbbIhAHPuGJUjZPZYouIYkgGmwEiwCdiNvkMorotxHSHMEVRkPktMLKvFvjkulwTnYbFjTZozMDRzjZgAMvaduOomWPHTDLicoWGjCFWMIJCbsLHmUROVwxprnAl.LWcEMNDLkvwaMPiLonKCvRQGDqWMgGE.XtXkaChkAnnwTQxCLjrETFcnnMJDmWqpnBjhoBTINNGnxdaiHxflCwATHDsbAdAuqmBMViYdocWoTSXKWYfWUBlKnaMBswznAPVHKyAMXVyhmIkiXkijFuyWZBZKMuNfVBAdGnTqQnkUBQpbFvfwKeDeTcTLAUNMyJAfYmahzkIqAlkhmTRQseCNaLoOBzTiKHcWImVPaFTpayNeCIGclFJsYBYwEEYuWNjiatJPuuVCImcmqmddTIBIAGmkPoxYqfDtWBUxrafhWatpGlARdNZXvEbtYiyRQQlrrMpBLMqgiiazokpJUgoPjlYuQGtGFqvdBERYqZwaeCdvETdxJAImwbLaRaBTdhUBiVsIQYqlMGrayXPqUfsNKPguYZPUHChNBvYKHCBfUOzIntLBFfiDhGXbkSIuWJeTUEGybTSyiNfNItoFBlArVAqDWkQsyZTQcvlrEicgcRplnjICymdqAWduCztyNDiBEvODCZLeXPRoJClZixoinRmPeNznbvbnnSnjzRbKlpbmTEMkOBgOguBkwJpKycrLPAQRCSJmHrLaawYuFCABXqvpkfxLEnGXwFvxwbyYuSQefhwwIPNpbpngoMZagRnedhjYEqOHSTFFZerbCdpimugypHZljEUWdDEEzlXnaTAwnfiCrpJOnzTYcOnahEkJcagTWKUIHFbYIwSzyDtmcMqWvOmvGAcVtoijEBStlwNHvngDyajbwmXzvPAbBvTIizuFdsHxCWiWcrPivlRuqtmfcDBeLFhFtPjIOSRbJbBzgBwgAitECGIPgdyKMHPDAkYhFNjfXdaITVZkAhaHxrVFNzTPteJGFvDEGTaRzXjAPEgFWNXcROTK.fVlqmnmJobXHUnPYChMnSLSRKHbNemkBAWhbtviVYkjpKNBrfLXeIwxLdherldMhQJRjgryZxGISFgqCKYLbEOXUlkGUlboCnEKHtpsLpgWUiRUOdaSJKfKjexoNPkToufFMwuZKCOzHXJKvIgsbrLdaeyQgQJTrSjuhPqEFoXtPxtynriCdPfxtPlWIPyvKonmSvDUcbFNChMefMeJnCXAxnINmpHVSTYUCrdWoIjJCXQVocXfwdGJQUjfpuZcrVWgAkCxHozCbsmwdznPftkafRQXrHYiMtysltHUodJMnPpYhyzNzwtKiMleCMZRvPnBGZVpVXOjJPAeenFcpbBfTncUDzLIauUBMOmHAEQIGFmFmMcsQSWXZghYCLzPMNbqcIGCFFTJfVhUSIwxWhbDVxUubkuxNjHWsFImGOrgsucMxvSMVlZakVtnHiydMCotBlum.qRgIJGAkBJpFfnGIostblmmXZGBhEvOPWbOasdBlzRJvShTNNgwaRukDSDzLXEoPjRfWLYdrfjjLbVVmywqSmViCNXReVfjSZVCsJhnMtJVJkNLfXhlLZDzxUuYwmVycJVatavtfLxngFHtQkAPBDJBipebpYpRYgbTtraKUpWXovNziRhAZIucVopUyGvkDnsKDuVsOtAXFlcrYkkhbMHBKDewjJfLLNGbuxhffYAlaFaGeyqYBMiPSg.wxIafzKjcDkQMuqTXBgaMewdQlOQfClxoUnCnndbLDCjlKafGbTSSilykEdIbMlIcYbXwsoenvSEiIsUgsZUYwUAjGdSDgZTLysEvsHITpwIHlvfKUsUnCNcHKRYEkZSfZfYpZdXQekefgNyNsaFOysYWLbtSGSNXbYgPFIhBNuPvzGCAsLARlbzvZgojrTnErlMwPaWsQpTEUZhYPqSMjiZLQHAleSZrWEGhaaIUVtuJncMqebExOrAphYBNmjfOpBchAjwpgkqicJlzJGobwHShHEnqNiOHUsbKDwmetSOCzkodbouoLdylQrYCygMJXtcsRAfNTpaoqzqNAmdEHtYOfMOhchvYmRAOOawFZBXhLsGtILwwvpleesWvsjUUHsFEzhRtfayeVGuWfzjdNUVwUqvynSUQfmZRLcxOcRSggQtykCcOJIpyYFclnMBcRXhUGjVDqZcTgcetVpfoHxfHwqgPNQPhgvQtuDXLHHIlgAeLXdiPLiOTNnYDQEumMRzuoQoCnrKEQJxpGIBWlJtjgMumylDluBdmqlClZyEYJOHzpkFzyaxNcetPSsPvQfgVKvkOZYVeilJWAcMXUTVzvMNdwKtRqSajAYqOHCNbtFxlnsFHEuAmyCKmzpeDJKcBKCubFbcJzwEsSMMmcKcsCrPyYOhoiMBHAjGagtCiqFIyDm', autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_5151', {keypath: 'maejXebqxuvwqrmKvHJFjSgJyjUXRVDQbRSfzmKfxqZhPEmIhWZZAsgGZCMBkCKmvRaKnCoZRhRwkxhBPyyCeObsdshQNJSzPhIsiPSHSfmjQHidIZLwKfZLlVDzmzzrwiypOHzNrCOvYQBNKcheipSJKaoZWOBCmHRpzkwHBqJexNHfCeliIPmqqjgHtVrXntlZhLMmqjQpYIGWcNeievcLaCIMqFKShsZnEOHCEEEftxrBVGhEJGUAGTbDZxLgShYOBabTlcowwKRDJLqTrYezpnLWbpiRaUDxoVOgUSVTcApGUddYCzAPETFQrDQHyaTmDiFjuGeRLvHavpBvkyaVyVzpbySlosoPVZoqYeajRSaceXFZWLmmXYUXVWAwSxQPadMmimwOqRALUqRCScIqdKDihyZyeeTxqXaJGqXKBTtKHFxkSjXBYfhkwNqWaUiljmcZkuyGVkEdnoDZNFfiCVOiNygDdgQGcczqRHeVEiUmOOeymEesugRcOHPiokNfcnqYJebZVbEbGaoAHRenzdLRsQkXHgEZMJ', autoIncrement: false});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('VxfNynnWpUkGWvrmTuzoroFtpbZyTaSWdJAcMyTaVIsZgJfAXiyJjanPLPlAztifTNhhnfYlwEDksnSgEdLUtOrmqJyFzLOzDLAiWHvtOPYkFVAIKgpMcXngdXLWyxHLHOkFMdKGcOnhaJAaQZztscWAEBlHFqoWrSlwQSGXptgqSXRTJNoiBxAKHpCtIKHbVUPhrXtkrUWXszswqSoQLzGRcOnLanmeYAICySOzJLcDWdwhObILjjYEtMBzbOVtjavgsLNueZWkfoLhRVYCNPMMekFczyQrleVyxAhZqgAjyAyeDgbiqsaJntVbEvHKcXjgCotsuDaqibMsOGTWuWOJMPfHOzvqhlWiWyIiowNanXbCMgOfAGnzuOPIuOgpDFVyLDrKDgnwcuByMJypwqlUjbviTYwkkgNqXSRleVwkalbvEJdncPhUQXfozbrPOITwFIAweQuNuMIUGOeXiewhJwktxMUFTPTIQslWvLCxwAzlQMFtBPTNrtvOxYJxEafFzNaNFDVaMLDWFCtaLRLUIQLscuoqiDFPrDziYMrAWbjbSFsLOhKdznJaraTARqXshGEzqSKAmFQmckFaZbhSVoOWCZdzexrnjHJoISRWcPIXJkMzqEOYpDMrxJQUgHPQmgwBPvOJtkVorKrMUIAMBvmKBOnczRGmCEpWHIUPFwBSKCYxPAamxdHLdlhnsRaORqFhHhAnmFtSMPpeHZGyvTGqwlHoEjMEtjpADCHFFxbFXSFhSfucSSmZEqnTePznHhEFMXNjySrFNbdGGcnyVKrXmCLRXfrfrQdupqlqDbnZfqVMEjmGusnfewBxvmwrYTfevIbaRHxNEVIREHZqmwNqyeyoRIKvD');
        get_0 = objectStore_2.get(KeyRange_0);
    }
    catch (e){
    }

    var index_3454 = objectStore_3.createIndex('index_3454', 'test', {unique: true, multiEntry: false});
    var put_2 = objectStore_2.put({f0_p: '<string>', f1_a: '<array>', f2_s: '<number>', f3_n: '<array>', f4_g: '<object>', f5_z: '<array>', f6_z: '<string>', f7_x: '<boolean>', f8_m: '<string>', f9_z: '<null>'}, 'MJikicqoGWEUjxCfsQmnnQaKlCKnpXjvucRYuBpZPtkrmOjoUActGcrdevFlcbsGWPySfSygMGFCaiMBrivIOYbAWKMjcOpZHGNePHmPwOHhHXEuGvUvXLiNHUvtIqaPIhGSPxuOkfLGTUqbnBHovcNcqcIYbArVWEfgbJQsSFnrZrUdkcfGQcDTpmsQUEyEcmTveuTyBxkmfdwiirHMXAErJoDzrllKNWYRwoSGsjEbxZtDASQqBhJEnpjxYHcohNshSPhYkicWCuUhovDKSEdxGHzYCDsviZPSYRMtBEFkPblRhxTfNdhiXcFkeqCHDkISTAlVspOxyRiCfqVyPOJbmQlmoEegMMnXXFyNbLQnRPXJpQnVeJCjeZFLoJnLKtxrPGvEMSraQgfjGFARPPUDMcsvultLoAlNBfbzqSFRVoCmpsRHnNCBcrrwZHichqJelOonUyhNNNofxwCBYGYwaXwPlUcsBlsOnJMlntTUCVUWmQoKQzZnjhytPvDVaIjQRyqmMAqgOGGi');
    db.deleteObjectStore('objectStore_5149')
    var clear_2 = objectStore_3.clear();
    var clear_3 = objectStore_3.clear();
    var put_3 = objectStore_4.put({f0_g: '<string>', f1_t: '<number>', f2_d: '<null>', f3_b: '<boolean>', f4_y: '<boolean>', f5_w: '<string>', f6_i: '<null>', f7_u: '<null>', f8_b: '<array>'}, 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
    var index_3455 = objectStore_4.createIndex('index_3455', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7755 = db.transaction(['objectStore_5151'], 'readonly', {durability:"default"})
    var objectStore_5151 = txn_7755.objectStore('objectStore_5151');
    var count_0 = objectStore_5151.count();
    var getAll_0 = objectStore_5151.getAll(2161488838);
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        get_1 = objectStore_5151.get(KeyRange_2);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', true, true);
        getAllKeys_0 = objectStore_5151.getAllKeys(KeyRange_4, 278968033);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        getAllKeys_0 = objectStore_5151.getAllKeys(KeyRange_5);
    }

    var getAll_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', true);
        getAll_1 = objectStore_5151.getAll(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        getAll_1 = objectStore_5151.getAll(KeyRange_7);
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        get_2 = objectStore_5151.get(KeyRange_8);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_5151.getAllKeys();
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false);
        get_3 = objectStore_5151.get(KeyRange_10);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_12 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        get_4 = objectStore_5151.get(KeyRange_12);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_14 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        get_5 = objectStore_5151.get(KeyRange_14);
    }
    catch (e){
    }

    txn_7755.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7755.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7755.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7756 = db.transaction(['objectStore_5150'], 'readonly', {durability:"default"})
    var objectStore_5150 = txn_7756.objectStore('objectStore_5150');
    txn_7756.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7756.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7756.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7757 = db.transaction(['objectStore_5150', 'objectStore_5151'], 'readonly', {durability:"default"})
    var objectStore_5151 = txn_7757.objectStore('objectStore_5151');
    var get_6;
    try{
        KeyRange_16 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, true);
        get_6 = objectStore_5151.get(KeyRange_16);
    }
    catch (e){
    }

    var getAll_2 = objectStore_5151.getAll(2406367339);
    var count_1;
    try{
        KeyRange_18 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        count_1 = objectStore_5151.count(KeyRange_18);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        count_2 = objectStore_5151.count(KeyRange_20);
    }
    catch (e){
    }

    var getAll_3 = objectStore_5151.getAll(1346926656);
    var get_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        get_7 = objectStore_5151.get(KeyRange_22);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_24 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', true, false);
        get_8 = objectStore_5151.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_26 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        getAll_4 = objectStore_5151.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        getAll_4 = objectStore_5151.getAll(KeyRange_27);
    }

    var count_3;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', true);
        count_3 = objectStore_5151.count(KeyRange_28);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', true, true);
        getAll_5 = objectStore_5151.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        getAll_5 = objectStore_5151.getAll(KeyRange_31);
    }

    var getAll_6 = objectStore_5151.getAll();
    var getAllKeys_2 = objectStore_5151.getAllKeys();
    txn_7757.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7757.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7757.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7758 = db.transaction(['objectStore_5151'], 'readonly', {durability:"relaxed"})
    var objectStore_5151 = txn_7758.objectStore('objectStore_5151');
    var index_0 = objectStore_5151.index('index_3455');
    var count_4 = objectStore_5151.count();
    var getAll_7 = objectStore_5151.getAll();
    var get_9;
    try{
        KeyRange_32 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        get_9 = objectStore_5151.get(KeyRange_32);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_34 = IDBKeyRange.only('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn');
        count_5 = objectStore_5151.count(KeyRange_34);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_36 = IDBKeyRange.bound('vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', 'vDVzYFOFsZXMJQfjhnRkjGEOVbOFwZMCsJLBnyImutywMMGhWJGFbWaCAbxrYtTlsHtXjbArnNcdUiLiLkITjabuuciRyAtLWmFHYIqCTNCZBymjvuGcZdbTxchBkRNkLbLSFdNJrSwSKQwawctqkWMeopvTAxokaRgDGXzOvgFQvshnroSelkuRwblGkKQKtJMIjUMJuJlCeJrvPCkfGsmhzGfHmjZRRGJSjsRwctfpdNFElxNtlNsIaJkBCiFKxqdVEHpfrniUJMuUroPn', false, false);
        get_10 = objectStore_5151.get(KeyRange_36);
    }
    catch (e){
    }

    txn_7758.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7758.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7758.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7759 = db.transaction(['objectStore_5150'], 'readwrite', {durability:"strict"})
    var objectStore_5150 = txn_7759.objectStore('objectStore_5150');
    var clear_4 = objectStore_5150.clear();
    txn_7759.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7759.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7759.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8046')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};