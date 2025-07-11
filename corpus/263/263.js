let db;
const openRequest = window.indexedDB.open('str_6682', 1459167990495703)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1560', {keypath: 'RmIulrITCzXNOcvFAHSNiveAdGNSThvFqmhgrpVJpLEieHrdhQrnwPfVulOPNtYrAdinpbhbNiANVZaWayqNSuRIUegOnvDunjPAZTNiGvbytBRLlKTDugKKLIsrnhOPwIhfGzXiZhDAQERljgfBCawrcCOHLyQBPRLMwWKMZldwYBxGIHvNzsoAhMEykTnXgNEybKEpTjBOrEPUQXLSiKCwbVddFuwWWXWVMpTxDgFoRdXRZjRMlMrLscVzkDQavwLCgHTVtKulCpycwXtJHcWSmasNyGoXHEEhTvAWxdKPFJmAbBXKGvuRlwatPBqKUxddlgoQzdOXtCJDexyEPlMQYDmAhsFxOicpSpHorKUSLoXiNssOLGuxcBevDtaGGqysBHZfroou'});
    var put_0 = objectStore_0.put({f0_b: '<boolean>', f1_r: '<array>'}, 'lccsYWIbujzMMQvzFcFjqdRDlFAmCNKMQkLmpQzKHNdmaszmKZFUXVyItSnqYOvvmtwXfnxvfWZBGMKMsQCkZZTqeMJSatwpBJeCmbafzMaCUhAqFBjkpDFoi');
    db.deleteObjectStore('objectStore_1560')
    var objectStore_1 = db.createObjectStore('objectStore_1561');
    var put_1 = objectStore_1.put({f0_u: '<string>', f1_g: '<array>', f2_t: '<boolean>'}, 'zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN');
    var clear_0 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_1562', {keypath: 'ghOpZMPbTcWrrsJMCVCtavVUYLxkvoHxaYrWExswhxyOTdElzwztkcYLvbgQjHYNZWvjbbCVFpkIDiLObpyuFfyOysWSWtJqgpQKtnCasqUkbnklJOuGSSmMhUJLLXSLLYpEVDvihqIpPCWDIkWTyjYMHXIgbseKSMNISEXlsXUKPIcLgZMOxejZiWmogXDObnoyWOuyUXSrFMByRwJMsegDrwRarFRoCnkefcDeWAbtFuBFsrrlcBPgpjlpBsXjGmxKjHsmnVSliFGrlcyCpxzQhdoSKzcptNWRXxAGqEKgdGBQRoxbtzAqBCOvyMPUFCrwKpkurLQXwRbWosCQbNkJqzWaDEtFovXCLkmgYOrlaKahGpLfkWFYnARiLYDKNiOyEShiIeIERyBRMBbhKCnWZCujtrKoEbaPEtkfzSdJBinOeyhHgtwwqddxSSwQLVwAtrZxbwvVfOjukRnZIyjvmimXNgCHrXeeFwOekmgvEyDudeWMOsirgJOBUqifKtTqUUywAPvkxewyEGNWODnKhsHAanaEfmEwonnskYZDSJtjQDatNlVYpfTjXJnrrzQVULzYsmQkTWAwLiqRriiZMxfrOehomduFOlgxrksPYSiODQmojdDATNyFoaClTRDDUrQUfzANFfhpwzWFhzrtDjaYruGVqjPsWYHoYjpOmig'});
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', true);
        getAll_0 = objectStore_1.getAll(KeyRange_0, 2038865832);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN');
        getAll_0 = objectStore_1.getAll(KeyRange_1);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2315 = db.transaction(['objectStore_1562'], 'readonly', {durability:"default"})
    var objectStore_1562 = txn_2315.objectStore('objectStore_1562');
    txn_2315.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2315.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2315.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2316 = db.transaction(['objectStore_1562'], 'readwrite', {durability:"strict"})
    var objectStore_1562 = txn_2316.objectStore('objectStore_1562');
    var add_0 = objectStore_1562.add({f0_x: '<object>'}, 'KPCbnOJGlaAMiPIIJvEpRbfQbwbghMGIgVgldChqVyrYWVkqMcSYYcgwVRshzBuGSdmBUHxFWeEoWKZQKoQGTLosTgWpJkTcNckzklmrAsqlbbYwrjulZWefDeobUHbBApGVtZKSEttPHXAsbqYineXjvMwcqkvzSxyyvpyKrUKwdJiZdbsTjbvxMVeSkJlzqBwyFRgyjBKbvEVKGKxUFXfkWscBJsobvGwMZrlDAETROZXYvXfspEsxxsnuzUxqGZVoDTGHySNqAFVswEnXthhSkVstvOWKTMjfZFVUafUwaxxdDiUmRmrxCbdOTLXraTLyAZvfmyAQTJJmoigJjVszvmoHmfsLJAIdHHGNfBrUpptWfKUnvCVlROhAtEoWbncSSzbXoqsXcOFWifoBOubQVZvslchZeAsGtRYsxzZBjPhHUXyuscZVwUnHQhKlJAQjZglDOmfdSuECvMDEYpLjKephBhIDIULBCapExAzzeYtouyXtzsBbiNTNmohpOrXmUvaUNmDVqwYsWentuFyUUELOJQSEWWVklyJUgNfXQpqVOdPSqfdStmJbURGeveopBttBHiWuQcxBRxnLgKcFmZcLlDKLIGoxVIpByvLQOoePzmjPasUwDAxxOxATUCRClMevMLkSOXLxXelgeVQjNMBAZMKqzrkXeXZhRJXfKiVDGrqBdpJtsbrBlfcKMulspNkXVTRnuAAQhBqLJpzZBgAZuwKvFOYeIOxoUMRrqgFeTGuRwNhzhBnmWZsfeZcPMJelvkFxshCXpzpbauknGiaGLtIL');
    var count_0 = objectStore_1562.count();
    var put_2 = objectStore_1562.put({f0_f: '<boolean>', f1_a: '<boolean>', f2_m: '<null>', f3_s: '<array>', f4_v: '<null>', f5_c: '<string>', f6_x: '<array>', f7_a: '<array>'}, 'qaEWtfMqrLOjSJsIygKhZDxupbQBYaRkOcnyxGTssBukAabLixdIUZHGydpaCsTbnkHbHkfcOQxxqeLtwbNDuMMVZDDtiebhAyUtHcqFfdchIyzguAJRcVwcEeSOmXFZwwNrzpqQwpGnMMXbOFAfHISXEPLskaMshqDclrtnSyBmWdaxBjSE');
    var clear_1 = objectStore_1562.clear();
    var add_1 = objectStore_1562.add({f0_m: '<string>', f1_j: '<object>', f2_n: '<object>'}, 'WmlZZDiUKCwQyqRxYujzyxWfzNzrAulrhsJQKWdDxHAvRXybFEfvcgRJiryedEdwwdsXDOaKrmItPAcvqjWcwOKHFudEUPNGteaIEnqeB');
    txn_2316.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2316.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2316.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2317 = db.transaction(['objectStore_1562'], 'readwrite', {durability:"default"})
    var objectStore_1562 = txn_2317.objectStore('objectStore_1562');
    var put_3 = objectStore_1562.put({f0_k: '<null>', f1_f: '<string>', f2_d: '<null>', f3_f: '<array>', f4_a: '<boolean>', f5_z: '<boolean>', f6_s: '<number>', f7_s: '<array>'}, 'uvKjRzJfXRjIUDFMcToKDNupDacJyjUFmXorkCugIqZtBlrGZhRYZMzTFIXEUFcKxxdscywNykTMLPERNYFCTbSCAIPtVNOIXMOcHvFTJAZTaLOMrCwGrMfqUBpWRZTiPaOJyVUmBYlqCiJONRfoyaXvlfmJzONxtsPlmYDItwJbIHEdFUmWeUjUolvSApjuXqLSFuQTGsWVbdFIQBHfLgUxXKyIGMCimnwCYcXMIWKiPyOEiUzeTjlzYbzWqWlIyhnEUsbDJRMkAJvgXeSBVWMxxicgRlmRCaTUmzdammvNOkiiYiTeuiBoNRgkkfqcatDNBPlYGGXZMVrUqtRBzkAsiRzlDfvADcXFykTLUJbcFBrBhuhoxnVYBKEwAMwmXaocCvSuRqAzwOPeOrVzwAzxkcdpzKPRRzcVWsNOGivsRdcTlKkzmtKeWsCXLkljmdfOmTIZPIDZtNZAeYEQqyydrDAPuLTSmKhLzojVujmKSrFOuEjFBivqXGDBfaLvCkouXzsgXifumRKZGiIlvTXpFXMWVZAAqnjuAfPaDGotzHrBjVvKapSTVzVuQKaqbAHbnNVdzaOsawtLXmfErYzhldfJoPEayhkCUDPYthXtRUZzMQxgdPolqVMUgRnsQTAsJnXhMARZcFmmDvfRiguvyv');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('qaEWtfMqrLOjSJsIygKhZDxupbQBYaRkOcnyxGTssBukAabLixdIUZHGydpaCsTbnkHbHkfcOQxxqeLtwbNDuMMVZDDtiebhAyUtHcqFfdchIyzguAJRcVwcEeSOmXFZwwNrzpqQwpGnMMXbOFAfHISXEPLskaMshqDclrtnSyBmWdaxBjSE', 'WmlZZDiUKCwQyqRxYujzyxWfzNzrAulrhsJQKWdDxHAvRXybFEfvcgRJiryedEdwwdsXDOaKrmItPAcvqjWcwOKHFudEUPNGteaIEnqeB', true, false);
        get_0 = objectStore_1562.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_2 = objectStore_1562.clear();
    var clear_3 = objectStore_1562.clear();
    var put_4 = objectStore_1562.put({f0_y: '<boolean>', f1_r: '<null>', f2_t: '<object>', f3_g: '<string>', f4_v: '<array>', f5_e: '<object>', f6_v: '<string>'}, 'ELNYUQvMSbuRxkXYnwbtBXHGSLkUClkGnfozdojgwpMCBJWoSgrPtmoPVheauSlQHsjWOHAUNKclVKFziExLXAUAoOrrpeDSxaWjgOlwoHdkFndMKtNAjUrDpoEIIDlOxFDrZZGcHeEbLwhzHDcmmWQOSrumAlIdrMggCYnnQxdXhKrogPFlAPMpkfcdoJgYqYGPEFKUYVpFhJOBCCVoTIRCgvyNqsOiebunVyvRoUwWVHMRHqqWGhlPhEyYVqwEVVSSpiFJSmtInIgrvqDeikURVqMHktdRPPQFUXodnkpfCeviCufxHGoEHPuDPkEnBZZLcloEwtPQhSOZvZZdgNmlGPdgOZaTJUBBZlWgzCCcAhQRqxQpGcenUhaYkfDvfvGvPdoHeuXFlzomNGzfbkUUsqbMpvuowMYXeQNQIjfMKRBCHyTIEzVdbekdwyGGzHLZaKbVBLeTzsODLyYpBbfyWGPAQXjgnYDoPxzbtMkvLANICnNODPDdgBdjRiTDPTlRmsDdbxUnUQBSpmBlaqMypELuVBKkaexpVGRvKytrUTQfYoQnfniqIlDWobXwhDYpAlzHaYFXdqNNRnLTrcGUskOHZqgpl');
    var add_2 = objectStore_1562.add({f0_x: '<null>', f1_k: '<array>'}, 'XTnGdMiMpYotlQDsrGPkyBiHvCXjkwoIHBfnczyopUzFJoBVIgeWaMGkOSLpDCVdhJUYcQHFkdVdBhEGgdBcPJPZdozhaluEXfGiuKGDSjjmsLourEdiHRmNgtIExAOZHBFGtPoVgmIcALcLOaNugpfTtEKYcqXLhTotkJZjloFjEhRxarJCnLoCDlvgDOZZrrWDZeTKYkcbGFiZuzfvunmgzKuJiycISjPEtWkfapAdxFFKfvnfBnHMIuRxHqibeuwnoSKnJlEnwTGjEzIEQeTyxhlbpDfxIMagTRFCIVtGiBKwjWdfGqAMxaqpCBnAIyxeOovvLLutMgQcAtKtjTBGHEADgdkAJAaEYMQYVMgyRAhrFiCqQiYTiBsnmAntOORXmzKpWyOZPgKbmzvJbbcRXpmTAkTxoZZjCxgfvFPAJVmQdReRmTuXgfOHUKbxYWjszYwplzUWxOscOxdyQqnnlVQkBpOoYaagIIiXLoTvywgQqLrMCYYXLQDBDAbUebyPBhBkOxXcoakXRZRreAShzzmGNoZClrrtRGsyMYOmVYSOUQBUyvLFTrDSWaMYOYUbXeeXqOIUfsUATXPEGSGMfDvgkLOJnPgIiUfiYJYdNjxRRrhxqNaldVIQtOLXRqIzcHQrjYCpxuIPuqPHFXcRIzflNNFnGishuIFmRSjVAPGKXEnYnuzOGqbRaxjRtymSwltOSMlWhHutIXsAhyskmnpkPZOoSdlRIXYwjWbLUwTdAdDlwhuBgDjcWnPWwaGFKTGxxpAsjETSsEKGZNFSWZyZMTFiMzKhiWGxQqAIlhFGWWsR');
    var delete_0;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('KPCbnOJGlaAMiPIIJvEpRbfQbwbghMGIgVgldChqVyrYWVkqMcSYYcgwVRshzBuGSdmBUHxFWeEoWKZQKoQGTLosTgWpJkTcNckzklmrAsqlbbYwrjulZWefDeobUHbBApGVtZKSEttPHXAsbqYineXjvMwcqkvzSxyyvpyKrUKwdJiZdbsTjbvxMVeSkJlzqBwyFRgyjBKbvEVKGKxUFXfkWscBJsobvGwMZrlDAETROZXYvXfspEsxxsnuzUxqGZVoDTGHySNqAFVswEnXthhSkVstvOWKTMjfZFVUafUwaxxdDiUmRmrxCbdOTLXraTLyAZvfmyAQTJJmoigJjVszvmoHmfsLJAIdHHGNfBrUpptWfKUnvCVlROhAtEoWbncSSzbXoqsXcOFWifoBOubQVZvslchZeAsGtRYsxzZBjPhHUXyuscZVwUnHQhKlJAQjZglDOmfdSuECvMDEYpLjKephBhIDIULBCapExAzzeYtouyXtzsBbiNTNmohpOrXmUvaUNmDVqwYsWentuFyUUELOJQSEWWVklyJUgNfXQpqVOdPSqfdStmJbURGeveopBttBHiWuQcxBRxnLgKcFmZcLlDKLIGoxVIpByvLQOoePzmjPasUwDAxxOxATUCRClMevMLkSOXLxXelgeVQjNMBAZMKqzrkXeXZhRJXfKiVDGrqBdpJtsbrBlfcKMulspNkXVTRnuAAQhBqLJpzZBgAZuwKvFOYeIOxoUMRrqgFeTGuRwNhzhBnmWZsfeZcPMJelvkFxshCXpzpbauknGiaGLtIL', false);
        delete_0 = objectStore_1562.delete(KeyRange_4);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('ELNYUQvMSbuRxkXYnwbtBXHGSLkUClkGnfozdojgwpMCBJWoSgrPtmoPVheauSlQHsjWOHAUNKclVKFziExLXAUAoOrrpeDSxaWjgOlwoHdkFndMKtNAjUrDpoEIIDlOxFDrZZGcHeEbLwhzHDcmmWQOSrumAlIdrMggCYnnQxdXhKrogPFlAPMpkfcdoJgYqYGPEFKUYVpFhJOBCCVoTIRCgvyNqsOiebunVyvRoUwWVHMRHqqWGhlPhEyYVqwEVVSSpiFJSmtInIgrvqDeikURVqMHktdRPPQFUXodnkpfCeviCufxHGoEHPuDPkEnBZZLcloEwtPQhSOZvZZdgNmlGPdgOZaTJUBBZlWgzCCcAhQRqxQpGcenUhaYkfDvfvGvPdoHeuXFlzomNGzfbkUUsqbMpvuowMYXeQNQIjfMKRBCHyTIEzVdbekdwyGGzHLZaKbVBLeTzsODLyYpBbfyWGPAQXjgnYDoPxzbtMkvLANICnNODPDdgBdjRiTDPTlRmsDdbxUnUQBSpmBlaqMypELuVBKkaexpVGRvKytrUTQfYoQnfniqIlDWobXwhDYpAlzHaYFXdqNNRnLTrcGUskOHZqgpl', 'ELNYUQvMSbuRxkXYnwbtBXHGSLkUClkGnfozdojgwpMCBJWoSgrPtmoPVheauSlQHsjWOHAUNKclVKFziExLXAUAoOrrpeDSxaWjgOlwoHdkFndMKtNAjUrDpoEIIDlOxFDrZZGcHeEbLwhzHDcmmWQOSrumAlIdrMggCYnnQxdXhKrogPFlAPMpkfcdoJgYqYGPEFKUYVpFhJOBCCVoTIRCgvyNqsOiebunVyvRoUwWVHMRHqqWGhlPhEyYVqwEVVSSpiFJSmtInIgrvqDeikURVqMHktdRPPQFUXodnkpfCeviCufxHGoEHPuDPkEnBZZLcloEwtPQhSOZvZZdgNmlGPdgOZaTJUBBZlWgzCCcAhQRqxQpGcenUhaYkfDvfvGvPdoHeuXFlzomNGzfbkUUsqbMpvuowMYXeQNQIjfMKRBCHyTIEzVdbekdwyGGzHLZaKbVBLeTzsODLyYpBbfyWGPAQXjgnYDoPxzbtMkvLANICnNODPDdgBdjRiTDPTlRmsDdbxUnUQBSpmBlaqMypELuVBKkaexpVGRvKytrUTQfYoQnfniqIlDWobXwhDYpAlzHaYFXdqNNRnLTrcGUskOHZqgpl', false, false);
        delete_1 = objectStore_1562.delete(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('uvKjRzJfXRjIUDFMcToKDNupDacJyjUFmXorkCugIqZtBlrGZhRYZMzTFIXEUFcKxxdscywNykTMLPERNYFCTbSCAIPtVNOIXMOcHvFTJAZTaLOMrCwGrMfqUBpWRZTiPaOJyVUmBYlqCiJONRfoyaXvlfmJzONxtsPlmYDItwJbIHEdFUmWeUjUolvSApjuXqLSFuQTGsWVbdFIQBHfLgUxXKyIGMCimnwCYcXMIWKiPyOEiUzeTjlzYbzWqWlIyhnEUsbDJRMkAJvgXeSBVWMxxicgRlmRCaTUmzdammvNOkiiYiTeuiBoNRgkkfqcatDNBPlYGGXZMVrUqtRBzkAsiRzlDfvADcXFykTLUJbcFBrBhuhoxnVYBKEwAMwmXaocCvSuRqAzwOPeOrVzwAzxkcdpzKPRRzcVWsNOGivsRdcTlKkzmtKeWsCXLkljmdfOmTIZPIDZtNZAeYEQqyydrDAPuLTSmKhLzojVujmKSrFOuEjFBivqXGDBfaLvCkouXzsgXifumRKZGiIlvTXpFXMWVZAAqnjuAfPaDGotzHrBjVvKapSTVzVuQKaqbAHbnNVdzaOsawtLXmfErYzhldfJoPEayhkCUDPYthXtRUZzMQxgdPolqVMUgRnsQTAsJnXhMARZcFmmDvfRiguvyv', 'qaEWtfMqrLOjSJsIygKhZDxupbQBYaRkOcnyxGTssBukAabLixdIUZHGydpaCsTbnkHbHkfcOQxxqeLtwbNDuMMVZDDtiebhAyUtHcqFfdchIyzguAJRcVwcEeSOmXFZwwNrzpqQwpGnMMXbOFAfHISXEPLskaMshqDclrtnSyBmWdaxBjSE', true, true);
        getAllKeys_0 = objectStore_1562.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('qaEWtfMqrLOjSJsIygKhZDxupbQBYaRkOcnyxGTssBukAabLixdIUZHGydpaCsTbnkHbHkfcOQxxqeLtwbNDuMMVZDDtiebhAyUtHcqFfdchIyzguAJRcVwcEeSOmXFZwwNrzpqQwpGnMMXbOFAfHISXEPLskaMshqDclrtnSyBmWdaxBjSE');
        getAllKeys_0 = objectStore_1562.getAllKeys(KeyRange_9);
    }

    txn_2317.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2317.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2317.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2318 = db.transaction(['objectStore_1562', 'objectStore_1561'], 'readwrite', {durability:"relaxed"})
    var objectStore_1562 = txn_2318.objectStore('objectStore_1562');
    var add_3 = objectStore_1562.add({f0_c: '<boolean>', f1_o: '<object>', f2_q: '<number>', f3_y: '<boolean>'}, 'MsKcBmomYfLwgYbXqquWWAfsydetSenoNLpCEqXueEbkNolXVyEJBeTdVIceMfwZOulkMlqKRCzTKUmEBOAPteUHOnJxUDPCamVMyVmGsztSIsWJwrRmIMqtyJkrGXUltjsKVnugdPyBfQmQHRneHAUMQmJjBIehUjIZjjHgKTBZxwYaadFQWJCXYZprSHYdpiSHhXylvdXaXYOPkgivNDhHRBCFULsuNNJAscgPXrDUJfuTQBowVACkrLQuVPEECFEQrolpzosdroNbKjmLGMoOysvwaSwNyeCxINWHoWEsDXjrxOVdSTvKCLGTrirYuBtQGZpbwIhRbJJOmYHwphdnnSrOVpLtxUIvbQxefnipEtUCiEddHxpoyXdihoIhugNzedIJcdkOpGkdZocrEjUnwhmsjMibeWhSgsFBPPrIZsAsIVkJdhMrtxtjPUArLbJnehWCJisgbuXXAYGIFPzkdxaSFnqwfmzDYkfuEcbExLPZDsqyhXmvyZnluQDqyokdqrAqIxKPJNwfTNmuZzGzaSGxeAihzAIELIkJXjXvQFAHrfIamkrZRxWvLVtqAKePySZPwkHgmuQFePPZnfSObNOJAsIwDDqEDDslDEUbkvJEEwJYTIlEnDQkqYxpOiqIjrGsEdqQcfJSMuhZHbTPeEaowDYdiZPOgNIMYbrNAXTAlCGrZKrRgxRqCCGTTjwBLdMKWaPuBekpCjNwTcYydkkLHNayMeUqcquMYsCOJniENyqoGjpAFhOiBMvtZmrLQBjcOKIsUUStVxOgJEmUFogPNRoHleBRTgUrfRkBJxWLMDvEirfZHhGfOenKussHMqDawUuavhLakIacTLHgMmDavDSICIsicPUioPebD');
    var getAllKeys_1 = objectStore_1562.getAllKeys(2960922783);
    var put_5 = objectStore_1562.put({f0_y: '<boolean>', f1_g: '<null>', f2_w: '<string>', f3_p: '<null>', f4_q: '<object>', f5_g: '<array>', f6_j: '<array>'}, 'CdEnhwRLxGyTMFySTALJbOJxeVUnGZNYSYULZeyzJppEBLMpdGdbmYHWJsyRkBMCiSMgnQIbTvLKcHSUZYitkclggnwwOsqJRDhwqWFdHhgSReewbePjRatdXxcxURayLKRawBFvQZOCcqnqjOKQWODwQKLhuxCIFNNcRXqWQzvGWsrPzNcIkZovXZPblrJZhmKHkAu');
    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.only('qaEWtfMqrLOjSJsIygKhZDxupbQBYaRkOcnyxGTssBukAabLixdIUZHGydpaCsTbnkHbHkfcOQxxqeLtwbNDuMMVZDDtiebhAyUtHcqFfdchIyzguAJRcVwcEeSOmXFZwwNrzpqQwpGnMMXbOFAfHISXEPLskaMshqDclrtnSyBmWdaxBjSE');
        count_1 = objectStore_1562.count(KeyRange_10);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('WmlZZDiUKCwQyqRxYujzyxWfzNzrAulrhsJQKWdDxHAvRXybFEfvcgRJiryedEdwwdsXDOaKrmItPAcvqjWcwOKHFudEUPNGteaIEnqeB', true);
        get_1 = objectStore_1562.get(KeyRange_12);
    }
    catch (e){
    }

    var clear_4 = objectStore_1562.clear();
    var count_2 = objectStore_1562.count();
    var put_6 = objectStore_1562.put({f0_k: '<null>', f1_g: '<array>', f2_n: '<object>', f3_s: '<object>', f4_l: '<string>', f5_x: '<number>'}, 'SZkdOSTUfhheeCobzEpcfsYVsgVwwYhlBAEqpqmrvcrsibzADOzPBjJjsoubpHiBkGVCPYXfVKPDbhFdBCihUjVxdCliJcCSOcXbpcUIICFVQqrHWgZPIjgXhdivyNVQlMQpakkIfYRujZAAJaMYXLrLHoMmlkmmYvZXqhDssnIEUqDOZldncMMQHTIhCCYQmmeLtMYsWSQkDbJkaCnZFWanbEubiQNykrhZUVDoVIjBNGYVLyBrfMxmGbXheIbUaHXuiqYxTUdAaqHngEAEsbKesCXzVSksPBIVoVvRmTSlTPeFZgfBNRmPWEPFOGodbvTYUejOAtjgAaMGdqVHcFJFKMFdVfSWcoqPFOWwreIrSGjBnIQgLcHjFkYUkNUPLiaMFnXfDzIaBFBUdgkAPUnJMhzREDLjlCkZwVIAjUkpLlrRmCkmbobEVcErBEdpXjAqvFyRTSdhoGVmcTlsMVRoqWZRpChIVOMLhhkuAYjcsXXMfYKKDujNYFqZgmLkyeNYLbsudNqMVAXfVbIzOTSAiqePKDGlGiiHKLEsWxYLjutbnFncrsxsoAZIpxAWfVdjhgnjBsyVLuOcBjMtfSwKPBzioIIrwNHFOUKuyFygmYjVVlQAjzxlZyxjCvyaioLlfutXzlHTRHBlwRfuRBMZHMPwAsddDBgSAjrMAxbZTOTXyVLOpfvDURyQNNMLBYvgtgKApHhbqrPEVhoPDIzbAMwrRUWdaaBUrqMbNbXNBmJhKLUJiuMWtKfzcaIfEquLnllPtSYbyddllXdaJdTAjJQroElXAvSPOvSSsUeHXrwZLiCoXPapLbCuPpGwRBOxJBMOcgQSKhuZMNROgiEEqqoQRlcEzienJIXdacgdydRKudgZEwKxMyjlGDnxdqGlKmGQrXytdsXIQAwaWBwGeOgnENPIArUtYWZeTeEEiUsBhVVMZfAUTMfOUaBSCCcMujKsmCUDcnonTLlEPUryVIvTJ');
    txn_2318.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2318.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2318.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2319 = db.transaction(['objectStore_1562', 'objectStore_1561'], 'readonly', {durability:"strict"})
    var objectStore_1561 = txn_2319.objectStore('objectStore_1561');
    var count_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', 'zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', true, false);
        count_3 = objectStore_1561.count(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', 'zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', false, true);
        get_2 = objectStore_1561.get(KeyRange_16);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', false);
        get_3 = objectStore_1561.get(KeyRange_18);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', true);
        count_4 = objectStore_1561.count(KeyRange_20);
    }
    catch (e){
    }

    var count_5 = objectStore_1561.count();
    var getAllKeys_2 = objectStore_1561.getAllKeys();
    var getAllKeys_3 = objectStore_1561.getAllKeys();
    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.only('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN');
        get_4 = objectStore_1561.get(KeyRange_22);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', false);
        getAll_1 = objectStore_1561.getAll(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN');
        getAll_1 = objectStore_1561.getAll(KeyRange_25);
    }

    var count_6 = objectStore_1561.count();
    var count_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', 'zfonjntneCDjPEahHPtaQGSVlHmECrrmldoXpxYPZJBmWFQOfMXRdYkrqDAzyXisCzdocsjKnCPdEukltrjjihqcTcSPCtXFIXBRXVEkeOLZbLKwXFXmlnJXvLmrkTHMWQeKAkkzJzToVCzqFiCYLMjpbMaiRwZuNOfpOTgKnmrHnupyBgaQrxoDUEN', false, true);
        count_7 = objectStore_1561.count(KeyRange_26);
    }
    catch (e){
    }

    txn_2319.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2319.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2319.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6915')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};