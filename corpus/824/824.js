let db;
const openRequest = window.indexedDB.open('str_3462', 1659133478241585)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4908', {autoIncrement: false});
    db.deleteObjectStore('objectStore_4908')
    var objectStore_1 = db.createObjectStore('objectStore_4909', {autoIncrement: false});
    var index_3278 = objectStore_1.createIndex('index_3278', 'test');
    var clear_0 = objectStore_1.clear();
    var add_0 = objectStore_1.add({f0_o: '<array>', f1_h: '<object>', f2_l: '<array>', f3_m: '<null>', f4_i: '<array>', f5_k: '<string>'}, 'JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt');
    var index_3279 = objectStore_1.createIndex('index_3279', 'test');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', 'JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', true, true);
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var index_3280 = objectStore_1.createIndex('index_3280', 'test', {unique: false, multiEntry: false});
    var index_0 = objectStore_1.index('index_3280');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_7395 = db.transaction(['objectStore_4909'], 'readwrite', {durability:"relaxed"})
    var objectStore_4909 = txn_7395.objectStore('objectStore_4909');
    var add_1 = objectStore_4909.add({f0_w: '<boolean>', f1_e: '<number>', f2_d: '<string>', f3_e: '<array>', f4_n: '<object>', f5_w: '<null>', f6_w: '<null>', f7_y: '<string>'}, 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq');
    var clear_1 = objectStore_4909.clear();
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', false, false);
        delete_0 = objectStore_4909.delete(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_4909.count();
    var clear_2 = objectStore_4909.clear();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', true, true);
        get_0 = objectStore_4909.get(KeyRange_4);
    }
    catch (e){
    }

    var add_2 = objectStore_4909.add({f0_u: '<boolean>', f1_k: '<string>', f2_c: '<array>', f3_q: '<null>', f4_a: '<number>', f5_z: '<null>', f6_s: '<array>', f7_c: '<object>'}, 'huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT');
    var count_2 = objectStore_4909.count();
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', true, true);
        count_3 = objectStore_4909.count(KeyRange_6);
    }
    catch (e){
    }

    var clear_3 = objectStore_4909.clear();
    txn_7395.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7395.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7395.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7396 = db.transaction(['objectStore_4909'], 'readwrite', {durability:"relaxed"})
    var objectStore_4909 = txn_7396.objectStore('objectStore_4909');
    var put_0 = objectStore_4909.put({f0_z: '<object>', f1_w: '<number>', f2_a: '<object>', f3_z: '<number>', f4_k: '<null>', f5_e: '<number>', f6_c: '<null>', f7_c: '<boolean>', f8_w: '<boolean>', f9_c: '<object>'}, 'JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ');
    var put_1 = objectStore_4909.put({f0_x: '<number>', f1_q: '<number>', f2_x: '<string>', f3_m: '<object>', f4_p: '<null>', f5_q: '<string>', f6_d: '<string>'}, 'xrsDAzrOHkIlFZFrmkAuZhQenzdiatDfpoyBoRcIqzbSMgZlMrAOqJBQqnfDMKNipKtNIGMnhoLMrYtFKAiLfYMPkDGHrXfxgfmiKfkRqyMDyScyQsAUkLYovhADpvfaVoEfulbAwRHNpIacqIpzztXHotkAEknFyRwfiGChWTwiuGysOaVQhrNICcWzruMtseTKM');
    var count_4;
    try{
        KeyRange_8 = IDBKeyRange.bound('fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', 'JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', false, false);
        count_4 = objectStore_4909.count(KeyRange_8);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_10 = IDBKeyRange.bound('fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', 'JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', true, true);
        count_5 = objectStore_4909.count(KeyRange_10);
    }
    catch (e){
    }

    var add_3 = objectStore_4909.add({f0_r: '<object>', f1_b: '<number>', f2_k: '<number>', f3_v: '<string>'}, 'rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd');
    txn_7396.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7396.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7396.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7397 = db.transaction(['objectStore_4909'], 'readonly', {durability:"default"})
    var objectStore_4909 = txn_7397.objectStore('objectStore_4909');
    var getAll_0;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ', true);
        getAll_0 = objectStore_4909.getAll(KeyRange_12, 3863358630);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ');
        getAll_0 = objectStore_4909.getAll(KeyRange_13);
    }

    var count_6;
    try{
        KeyRange_14 = IDBKeyRange.only('huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT');
        count_6 = objectStore_4909.count(KeyRange_14);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_16 = IDBKeyRange.only('rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd');
        get_1 = objectStore_4909.get(KeyRange_16);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_18 = IDBKeyRange.bound('JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', 'huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT', true, true);
        get_2 = objectStore_4909.get(KeyRange_18);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd', true);
        getAll_1 = objectStore_4909.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('xrsDAzrOHkIlFZFrmkAuZhQenzdiatDfpoyBoRcIqzbSMgZlMrAOqJBQqnfDMKNipKtNIGMnhoLMrYtFKAiLfYMPkDGHrXfxgfmiKfkRqyMDyScyQsAUkLYovhADpvfaVoEfulbAwRHNpIacqIpzztXHotkAEknFyRwfiGChWTwiuGysOaVQhrNICcWzruMtseTKM');
        getAll_1 = objectStore_4909.getAll(KeyRange_21);
    }

    var count_7 = objectStore_4909.count();
    var getAll_2 = objectStore_4909.getAll();
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd', 'huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT', false, true);
        get_3 = objectStore_4909.get(KeyRange_22);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd', 'JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ', false, true);
        get_4 = objectStore_4909.get(KeyRange_24);
    }
    catch (e){
    }

    txn_7397.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7397.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7397.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7398 = db.transaction(['objectStore_4909'], 'readwrite', {durability:"relaxed"})
    var objectStore_4909 = txn_7398.objectStore('objectStore_4909');
    var add_4 = objectStore_4909.add({f0_b: '<boolean>', f1_r: '<boolean>', f2_g: '<number>', f3_g: '<string>', f4_n: '<number>', f5_a: '<boolean>', f6_k: '<null>', f7_z: '<array>', f8_q: '<null>'}, 'hnEZwHFiufEcbhNzUVPNlpQhtMwvJnZnkmPnaMuOXtkotpifpZMegITBcCmFaYidAGbnnAlrFCQRHFEwERJeGBGHAgzRDRxvpgefkwteLHQLUsluqAisZxZFOiVNuOmLQmhjzCjinMewLduPWEjKjPoQxqNHqAzrydHwaoRYqQLYMaRNOyAXHcAmxrZYvgapJtqnCfCvqTlNgVSkWcOKWMHXErHTfFyQrdqUTyhUEzxvnHlVUrwMrHivcCltCWsWFmScDWoUKBOsilihsafrDrKxWzgnKLSWRqrIuFUOjtNSYAAcRbQyAAHiwgJJRsxubdAyPEOQbgpxbwChxYwuZsHZAfjBhYVHDiWgCtuolswBYDYPSGGwCOUnEevofERQWMwuvcpiuEXXscNdUAcgfPRRFkmGAnfPqeFagyBbgzBkQVTrzbwxvnOMBxcMiIBwrJFrGzhJAgfCjQRXOTaUZGLoCuWBDJTfJUikuWlxvvtlnmxlqvqYxlariGTPslifEajyEuVkLCHoiGYYVkDwnKERcWULtAZPYOXDYOgfZjUNncXvdoFSKHGrcJQwSzpuntJws');
    var delete_1;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('xrsDAzrOHkIlFZFrmkAuZhQenzdiatDfpoyBoRcIqzbSMgZlMrAOqJBQqnfDMKNipKtNIGMnhoLMrYtFKAiLfYMPkDGHrXfxgfmiKfkRqyMDyScyQsAUkLYovhADpvfaVoEfulbAwRHNpIacqIpzztXHotkAEknFyRwfiGChWTwiuGysOaVQhrNICcWzruMtseTKM', false);
        delete_1 = objectStore_4909.delete(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', 'JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ', true, true);
        get_5 = objectStore_4909.get(KeyRange_28);
    }
    catch (e){
    }

    var put_2 = objectStore_4909.put({f0_x: '<number>', f1_d: '<array>', f2_k: '<number>', f3_j: '<boolean>'}, 'sKLhNChVrCsGRuPGgaEnEZiQicQZPtNJDevdcjfjaqfxiVCsmovusLUoOBAEDvVrWhDTTFsjLawaPunBnIfbRiRdEmCGSimJNEpWxOHHoIMJcFnqwcDfCzaJdZbowpbAXRcpMVQVKglpdPhUQXXMUrKrWEZYrPolSpDHJjXPLxyUYPvVWWwwzdDoMyooxeYZIWiZGXavTvunNKKZfBNeDahDMFNMbtjPgzrMomKCTDAffbHsrUOKrEdaFPYkTxIOeduqxXqVTpltVJWENthzskjWBzvbnLuELexPwLTwuTkjSHmQsVbQNgNoqAaIZHUrwBSOyHbnPztRMHrepxrwIiHpMGhspbOkWGzgnzSwHFxJACCWdHcsiBHtHPSBRNfFOIGDceFccmvLaGVgWcywUCpdCoLDEdLuVLnZQRqEXDkqawDBAAypFXVvjDIncbVOWycohOFuzFiIbJbsiGUsPPtsTCTjAmoTlbCwiDMaiGBzVBkxUcVqhGsxjwkAyUTeZCWFdXDFEJAHOJHvUZlboNaXybtmoNEtvVcWEfdolbpJudJVtwFkOyqnQUeEkohIIDtQfdOHFSjFvaobAXruINORLtutnvXuVrxCKrHzUPzlExiJeRgSPSCpIBmvzsqpLRQxtWmnQsTJgubVKRUJwWuWZJKKTRKqTGzXJmiZXNDMXMVzSrxNvZaoyFpTcpLapUrbTzVgECaDBWfRvIwetztJubsbVQfzhsBizakXJAzDdaWGsjIeqceFpTqTHVbSZeAyQZrDOteqKEgZqMqseAyAjARiayLUugPuQnlAWBe');
    var put_3 = objectStore_4909.put({f0_e: '<object>', f1_f: '<boolean>', f2_o: '<boolean>', f3_h: '<null>', f4_i: '<number>', f5_m: '<null>', f6_v: '<boolean>', f7_c: '<null>', f8_g: '<null>', f9_z: '<number>', f10_u: '<null>', f11_o: '<null>', f12_a: '<number>', f13_c: '<null>', f14_o: '<object>', f15_n: '<boolean>', f16_z: '<null>', f17_r: '<object>', f18_c: '<array>', f19_l: '<number>', f20_i: '<string>', f21_k: '<number>', f22_j: '<number>', f23_i: '<boolean>', f24_b: '<object>', f25_k: '<object>', f26_f: '<array>', f27_a: '<string>', f28_t: '<string>', f29_e: '<array>', f30_a: '<null>', f31_i: '<string>', f32_s: '<boolean>', f33_q: '<array>', f34_d: '<null>', f35_o: '<array>', f36_j: '<array>', f37_e: '<string>', f38_w: '<array>', f39_x: '<null>', f40_r: '<null>', f41_o: '<array>', f42_b: '<object>', f43_p: '<array>', f44_f: '<array>', f45_w: '<array>', f46_u: '<array>', f47_y: '<null>', f48_z: '<string>', f49_u: '<string>', f50_w: '<number>', f51_e: '<string>', f52_g: '<string>', f53_m: '<string>', f54_c: '<array>', f55_r: '<string>', f56_x: '<array>', f57_h: '<string>', f58_g: '<boolean>', f59_p: '<null>', f60_y: '<number>', f61_r: '<object>', f62_n: '<object>', f63_x: '<array>', f64_n: '<array>', f65_n: '<boolean>', f66_e: '<string>', f67_i: '<boolean>', f68_v: '<object>', f69_b: '<array>', f70_b: '<null>', f71_n: '<array>', f72_d: '<null>', f73_h: '<object>', f74_d: '<string>', f75_k: '<boolean>', f76_b: '<string>', f77_h: '<object>', f78_x: '<object>', f79_g: '<boolean>', f80_o: '<array>', f81_c: '<object>', f82_y: '<object>', f83_a: '<object>', f84_i: '<boolean>', f85_w: '<boolean>', f86_j: '<string>', f87_t: '<number>', f88_c: '<number>', f89_c: '<boolean>', f90_e: '<string>', f91_v: '<null>', f92_g: '<array>', f93_i: '<boolean>', f94_x: '<number>', f95_o: '<null>', f96_i: '<number>', f97_r: '<array>', f98_z: '<string>', f99_w: '<null>', f100_w: '<object>', f101_q: '<number>', f102_l: '<boolean>', f103_a: '<array>', f104_u: '<string>', f105_l: '<number>', f106_n: '<number>', f107_l: '<array>', f108_p: '<object>', f109_k: '<number>', f110_o: '<string>', f111_i: '<boolean>', f112_m: '<number>', f113_i: '<array>', f114_h: '<number>', f115_g: '<string>', f116_u: '<boolean>', f117_n: '<boolean>', f118_b: '<number>', f119_k: '<boolean>', f120_e: '<object>', f121_l: '<string>', f122_a: '<string>', f123_j: '<string>', f124_n: '<null>', f125_j: '<null>', f126_x: '<boolean>', f127_q: '<boolean>', f128_k: '<number>', f129_z: '<string>', f130_a: '<string>', f131_l: '<number>', f132_f: '<boolean>', f133_h: '<number>', f134_e: '<number>', f135_l: '<number>', f136_l: '<boolean>', f137_b: '<number>', f138_g: '<null>', f139_x: '<number>', f140_s: '<boolean>', f141_q: '<boolean>', f142_v: '<string>', f143_u: '<null>', f144_b: '<null>', f145_o: '<null>', f146_p: '<string>', f147_p: '<null>', f148_c: '<array>', f149_r: '<null>', f150_n: '<string>', f151_n: '<string>', f152_e: '<string>', f153_k: '<array>', f154_v: '<null>', f155_y: '<string>', f156_b: '<number>', f157_l: '<null>', f158_q: '<null>', f159_i: '<string>'}, 'cqJFVEmJETyolwtxQXIEhoGKsQXzIQvhtmjMLcNJkWFydVCBgKCbDZliokAMvztVCnzeZUOMbtXwHTIqmFzuFJqNaOozjfKsomqfxcCxMqDbdLrGARxhzcaZLJmiREfaYFheHdmDrSUqbQaPkTZbrxSpLTtwYWzUOEkvgbsiCGVgFWrwNTytCeIeYqTCRlvKoYlJnkmMklNVSuHnsxxbTCGbfQcfXCtuHnhfXQZjEYcaQHlOWzqGyKtaxHOxHYadxrygenVGqJYrRUNPtCNyUEWooaYupzCcwiGXGCFEsymGhnSLgdzrHXMCRIoWXWvZcKtuBwHFymjAvKZnLoRFiFEfgcwEpMoTPPNBZejAPvWdCSTtdPEKyyxikihJMPKiWvkcCBotZVxnjVSWhCjyXWpVynpOmUDzJBGYqmReXIpdvGTtWCKZvfRbkvehwoyAixBBNtOBSSqRxwligXVCnUNxTOnlZCaNFQjeKWfeYZoCebHZqZenfsPMPVOKoxfqpThsURjYuHcLDaSuQatgBeSHtBkYkfUqMfGeJNAVArCnYlWJxpTTABGuqoJpZbYqvAgNUJiiKfCbMkHDugHsAxvZDvfLyazNHHZgrKxiJOICijSeSWhOSXDvltqvYKzLPOubOyYxudyymBdWgYGDGHRiQRqZyimCyZDBjRoomaeMDlXwDsTGBAMoiRjTeHlTlrLWxCfOvUWGfHAzFbZzXRLEaQK');
    var getAll_3 = objectStore_4909.getAll();
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.bound('rqyrMTwuSOqbVOuUgnmtEnZmGtJXIBbkdcNpMKtCAgFaJviaDzSqshJgUTrWEdIcpqYCiKeIewNAJFsNhKoyqEXYpduTYEOaszzjShFfawQmJsYnAMzOKWmUMidGHeazNddfTADgzDktpAdEzSIdpBuFMpZpPEwxLyLaQgAVUqjwcqeOguyFGfZBTCZEEIIobviwnDsbSchzIGYqNAPdUyIqNQqSFMlVQAHTYOgalrGVcmJrpUDYGTQlaQieFKnmYvgIHWqeaGoYrnudhGfwcPFpSIKSKDRbWvmSmVWPhRAWYDVxJLPyJNrIaYkwBggkHaVnoxXNcscUAjeUetyRXmGwlxIarmGfJdPtXbvjJxJIMWiaVeoeMnfZmxqPQniEFIzeOqPtJTnZFJwzvQfKQPwLiWdTQyuypeCLDWXYIhrfDXUrblocozzleXYzTQFNRQVoAtkDDmymqkxvpFgYrjXMfsaLiLzsMjdgyHdwtWKupVrDciuLEWpOeKfhyUspsNHKEcMmkETKbMTPZGLudSBcrIWmbxHTfdIxLbpKcWRJZPChoEiXYzwoFJIYWsULXISVJeOBmCNKIWivIwrZsUFopftVhFxKCRxknUqmycURxQRbvQFayd', 'cqJFVEmJETyolwtxQXIEhoGKsQXzIQvhtmjMLcNJkWFydVCBgKCbDZliokAMvztVCnzeZUOMbtXwHTIqmFzuFJqNaOozjfKsomqfxcCxMqDbdLrGARxhzcaZLJmiREfaYFheHdmDrSUqbQaPkTZbrxSpLTtwYWzUOEkvgbsiCGVgFWrwNTytCeIeYqTCRlvKoYlJnkmMklNVSuHnsxxbTCGbfQcfXCtuHnhfXQZjEYcaQHlOWzqGyKtaxHOxHYadxrygenVGqJYrRUNPtCNyUEWooaYupzCcwiGXGCFEsymGhnSLgdzrHXMCRIoWXWvZcKtuBwHFymjAvKZnLoRFiFEfgcwEpMoTPPNBZejAPvWdCSTtdPEKyyxikihJMPKiWvkcCBotZVxnjVSWhCjyXWpVynpOmUDzJBGYqmReXIpdvGTtWCKZvfRbkvehwoyAixBBNtOBSSqRxwligXVCnUNxTOnlZCaNFQjeKWfeYZoCebHZqZenfsPMPVOKoxfqpThsURjYuHcLDaSuQatgBeSHtBkYkfUqMfGeJNAVArCnYlWJxpTTABGuqoJpZbYqvAgNUJiiKfCbMkHDugHsAxvZDvfLyazNHHZgrKxiJOICijSeSWhOSXDvltqvYKzLPOubOyYxudyymBdWgYGDGHRiQRqZyimCyZDBjRoomaeMDlXwDsTGBAMoiRjTeHlTlrLWxCfOvUWGfHAzFbZzXRLEaQK', false, true);
        get_6 = objectStore_4909.get(KeyRange_30);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_4909.getAllKeys(2085091134);
    var count_8;
    try{
        KeyRange_32 = IDBKeyRange.only('cqJFVEmJETyolwtxQXIEhoGKsQXzIQvhtmjMLcNJkWFydVCBgKCbDZliokAMvztVCnzeZUOMbtXwHTIqmFzuFJqNaOozjfKsomqfxcCxMqDbdLrGARxhzcaZLJmiREfaYFheHdmDrSUqbQaPkTZbrxSpLTtwYWzUOEkvgbsiCGVgFWrwNTytCeIeYqTCRlvKoYlJnkmMklNVSuHnsxxbTCGbfQcfXCtuHnhfXQZjEYcaQHlOWzqGyKtaxHOxHYadxrygenVGqJYrRUNPtCNyUEWooaYupzCcwiGXGCFEsymGhnSLgdzrHXMCRIoWXWvZcKtuBwHFymjAvKZnLoRFiFEfgcwEpMoTPPNBZejAPvWdCSTtdPEKyyxikihJMPKiWvkcCBotZVxnjVSWhCjyXWpVynpOmUDzJBGYqmReXIpdvGTtWCKZvfRbkvehwoyAixBBNtOBSSqRxwligXVCnUNxTOnlZCaNFQjeKWfeYZoCebHZqZenfsPMPVOKoxfqpThsURjYuHcLDaSuQatgBeSHtBkYkfUqMfGeJNAVArCnYlWJxpTTABGuqoJpZbYqvAgNUJiiKfCbMkHDugHsAxvZDvfLyazNHHZgrKxiJOICijSeSWhOSXDvltqvYKzLPOubOyYxudyymBdWgYGDGHRiQRqZyimCyZDBjRoomaeMDlXwDsTGBAMoiRjTeHlTlrLWxCfOvUWGfHAzFbZzXRLEaQK');
        count_8 = objectStore_4909.count(KeyRange_32);
    }
    catch (e){
    }

    txn_7398.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7398.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7398.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7399 = db.transaction(['objectStore_4909'], 'readonly', {durability:"relaxed"})
    var objectStore_4909 = txn_7399.objectStore('objectStore_4909');
    var count_9;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('sKLhNChVrCsGRuPGgaEnEZiQicQZPtNJDevdcjfjaqfxiVCsmovusLUoOBAEDvVrWhDTTFsjLawaPunBnIfbRiRdEmCGSimJNEpWxOHHoIMJcFnqwcDfCzaJdZbowpbAXRcpMVQVKglpdPhUQXXMUrKrWEZYrPolSpDHJjXPLxyUYPvVWWwwzdDoMyooxeYZIWiZGXavTvunNKKZfBNeDahDMFNMbtjPgzrMomKCTDAffbHsrUOKrEdaFPYkTxIOeduqxXqVTpltVJWENthzskjWBzvbnLuELexPwLTwuTkjSHmQsVbQNgNoqAaIZHUrwBSOyHbnPztRMHrepxrwIiHpMGhspbOkWGzgnzSwHFxJACCWdHcsiBHtHPSBRNfFOIGDceFccmvLaGVgWcywUCpdCoLDEdLuVLnZQRqEXDkqawDBAAypFXVvjDIncbVOWycohOFuzFiIbJbsiGUsPPtsTCTjAmoTlbCwiDMaiGBzVBkxUcVqhGsxjwkAyUTeZCWFdXDFEJAHOJHvUZlboNaXybtmoNEtvVcWEfdolbpJudJVtwFkOyqnQUeEkohIIDtQfdOHFSjFvaobAXruINORLtutnvXuVrxCKrHzUPzlExiJeRgSPSCpIBmvzsqpLRQxtWmnQsTJgubVKRUJwWuWZJKKTRKqTGzXJmiZXNDMXMVzSrxNvZaoyFpTcpLapUrbTzVgECaDBWfRvIwetztJubsbVQfzhsBizakXJAzDdaWGsjIeqceFpTqTHVbSZeAyQZrDOteqKEgZqMqseAyAjARiayLUugPuQnlAWBe', true);
        count_9 = objectStore_4909.count(KeyRange_34);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', false, true);
        get_7 = objectStore_4909.get(KeyRange_36);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('xrsDAzrOHkIlFZFrmkAuZhQenzdiatDfpoyBoRcIqzbSMgZlMrAOqJBQqnfDMKNipKtNIGMnhoLMrYtFKAiLfYMPkDGHrXfxgfmiKfkRqyMDyScyQsAUkLYovhADpvfaVoEfulbAwRHNpIacqIpzztXHotkAEknFyRwfiGChWTwiuGysOaVQhrNICcWzruMtseTKM', 'JHIHNpeIBNkRzzNMUOmkWRlOOdeLslvzJUOfkutqZHEtywPXWvvZRwMcUfZJaQRdQXSKSRvqXZQVdersrTrecFyuNVEWLoFDboEQetMVOzCpMttFzvnZyLtcYEvJzrKRCiJsEBErhNRcUSaWQFswmrZdBLodKeQaQFdhnixgqpzmHrhyxhGFnCxMfCMKTUHyJlRkVLHBNinLXIYFXtNURNLvBbSNLSQMIwXbQjNERWHLocvssOcgUHgCWxFLnzONUGRAcAigTxDDisQbowEpqkQpieQrwntPEGuNoDAEHdoXkndGmJSWehKlesdNFWjRwKSEgsHSjHEXKUhfBBOUntqhoJWZouhpJGVrINWBFWdWSYDpbTgvpaySXDJLzYrysSmekZrhiFZuxGCletxaspBxcwEyRrMVZKCaYFFQJdNDgXqpuZAixuCXJzWuTmvgkcCJAYxTIcqRvWzbpzkaQYDIIhRYZBmKFWEWDGcNmBFEDGypoZHGQOBMjUgbvtQLMkwMQSHcyaCvvxFYNWJwIixxVcySBnvyzoulkDrVqoOrVEqTSvtZHnEFOrPXObQCAtsstSgBqSTjkZcvebEeJZyfUjhlrMDiKzswYtiOBoETTYQyfMkelYEEIZMSJmtAWirRIrgOatmBdOdVwreXYctxuDAwcRmYfECJWkgvHHPOJaSejLzlHtcycgXUpLNRxZnKQRaAcNQrYCEkCetFSKfCFrTKsMPTeLUjroczKsyUt', true, true);
        get_8 = objectStore_4909.get(KeyRange_38);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_40 = IDBKeyRange.bound('cqJFVEmJETyolwtxQXIEhoGKsQXzIQvhtmjMLcNJkWFydVCBgKCbDZliokAMvztVCnzeZUOMbtXwHTIqmFzuFJqNaOozjfKsomqfxcCxMqDbdLrGARxhzcaZLJmiREfaYFheHdmDrSUqbQaPkTZbrxSpLTtwYWzUOEkvgbsiCGVgFWrwNTytCeIeYqTCRlvKoYlJnkmMklNVSuHnsxxbTCGbfQcfXCtuHnhfXQZjEYcaQHlOWzqGyKtaxHOxHYadxrygenVGqJYrRUNPtCNyUEWooaYupzCcwiGXGCFEsymGhnSLgdzrHXMCRIoWXWvZcKtuBwHFymjAvKZnLoRFiFEfgcwEpMoTPPNBZejAPvWdCSTtdPEKyyxikihJMPKiWvkcCBotZVxnjVSWhCjyXWpVynpOmUDzJBGYqmReXIpdvGTtWCKZvfRbkvehwoyAixBBNtOBSSqRxwligXVCnUNxTOnlZCaNFQjeKWfeYZoCebHZqZenfsPMPVOKoxfqpThsURjYuHcLDaSuQatgBeSHtBkYkfUqMfGeJNAVArCnYlWJxpTTABGuqoJpZbYqvAgNUJiiKfCbMkHDugHsAxvZDvfLyazNHHZgrKxiJOICijSeSWhOSXDvltqvYKzLPOubOyYxudyymBdWgYGDGHRiQRqZyimCyZDBjRoomaeMDlXwDsTGBAMoiRjTeHlTlrLWxCfOvUWGfHAzFbZzXRLEaQK', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', false, true);
        count_10 = objectStore_4909.count(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('huzaeRtLEEyZWehOjbFWWeCvqCcvdybdMENQSquLvBdktNItRGvPYNYguOGQqBjnQjmoStDymfTNQOrlEYeWxEUzKYpyfxvZQyiHJFdWdsYnNGfchSgKoRqCMqeYpOlUQUIzvGgkgJsISvUapvLJjIkjgZqoLXzuSECaEAPhTzahkaRLaTsgqqlZfGjnlwNOnvzyuKwDqFyFJbxgYoUYaCdAhdiFWRcCduqzJSdXfAHWZEcZYFaZdzysYuboDNAlfhZmrbDEPhgaIgAFyrZNScKpiAEfwcUlKhALGrZNoQefwlGKADpCOEmkjDlhGJzceSuEEeQfhUVlFSAOqaQnYpIBPeFcrdyYCoYbjeJXBckhJmQPSEvJAubtxnifVtaUYUhZAdSeZKgUjRTUbzJqXleypEWxWGitrEzXYmkpjAeZrhHhIdjxyyJOiqnryWVwpFdQLMHioEfHRfWyAUkLwwzpZpbTGLzccbazRxrVwZHfcTgMDVCuRJwzSDgnVxQGsWledzsibleoIzTfWrrBDECPqswJdyjlAjZmdbpewkugjTSTUzKOBfEDtsDsLWXXKEIwZMWQTAdazqaACaoGbcWAOYjhDAQvzxLnpniNqnarKuSjPPrNbVikbLEDNLsQQjlAaDuckmDuvXPyygLUgsLQCgRkZgKSsjhHUkkzStbUYYqctpDfBNxdxaUdcfngXytakhiNiLaHkZFempLnkRrPNbQytRhkPxSGVTJGAwMGgLTZkFAxrVYrICqzvyxGYRVAUMiAnfhuMrwtoOSAIlhZoraFHAvQyqofSnnCnFrT', true);
        get_9 = objectStore_4909.get(KeyRange_42);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_44 = IDBKeyRange.bound('cqJFVEmJETyolwtxQXIEhoGKsQXzIQvhtmjMLcNJkWFydVCBgKCbDZliokAMvztVCnzeZUOMbtXwHTIqmFzuFJqNaOozjfKsomqfxcCxMqDbdLrGARxhzcaZLJmiREfaYFheHdmDrSUqbQaPkTZbrxSpLTtwYWzUOEkvgbsiCGVgFWrwNTytCeIeYqTCRlvKoYlJnkmMklNVSuHnsxxbTCGbfQcfXCtuHnhfXQZjEYcaQHlOWzqGyKtaxHOxHYadxrygenVGqJYrRUNPtCNyUEWooaYupzCcwiGXGCFEsymGhnSLgdzrHXMCRIoWXWvZcKtuBwHFymjAvKZnLoRFiFEfgcwEpMoTPPNBZejAPvWdCSTtdPEKyyxikihJMPKiWvkcCBotZVxnjVSWhCjyXWpVynpOmUDzJBGYqmReXIpdvGTtWCKZvfRbkvehwoyAixBBNtOBSSqRxwligXVCnUNxTOnlZCaNFQjeKWfeYZoCebHZqZenfsPMPVOKoxfqpThsURjYuHcLDaSuQatgBeSHtBkYkfUqMfGeJNAVArCnYlWJxpTTABGuqoJpZbYqvAgNUJiiKfCbMkHDugHsAxvZDvfLyazNHHZgrKxiJOICijSeSWhOSXDvltqvYKzLPOubOyYxudyymBdWgYGDGHRiQRqZyimCyZDBjRoomaeMDlXwDsTGBAMoiRjTeHlTlrLWxCfOvUWGfHAzFbZzXRLEaQK', 'JgvDlfeiQZeUAkUNZiCOLVvhtuFCxJTOMnQvlAtgXAhMcRduDfkIWQlfFnAFMRCqltbQBlEpOHoXoYZraIsxXqzWfPumKCDXMCtbhyWKHASSiCAyLzjWmREPTBrnqaqllVLhvYdKNicTmaNLbPTwQLvzMtaXFcWfJMOhVXKqXMizmeEFGvcqbvBYqQWCILeztIveyLJYTXpwsrZOldKhmngcJyNUULAxmFHImFfzRNflPIJEgPwrbLmGYFyiyGHbetmXiyyflftSvuDiSoIzzKLHZhyFOvLFEyAmybCwoMXayRxvUOhASVRyfIpoqIbzoCMIvWvPzukehQowRZqIWKENAtBkcLbdgLpcDHUwZTGXIrUtzLKReImufavWJmondeVENEAddVBsiiPXbCPEHottCPhmrSkwyOXIvvFcfOQbFkeSdMqBocxoojGfAimwWXANKKlJvgmFDhzRYfyElJmsUUXjdNcbeSpwmwIZMrCPYQNymKDLjBjYdVZFupsfZlaTBAWDBZPxVfHIiOKNxQAAykZ', true, false);
        get_10 = objectStore_4909.get(KeyRange_44);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('sKLhNChVrCsGRuPGgaEnEZiQicQZPtNJDevdcjfjaqfxiVCsmovusLUoOBAEDvVrWhDTTFsjLawaPunBnIfbRiRdEmCGSimJNEpWxOHHoIMJcFnqwcDfCzaJdZbowpbAXRcpMVQVKglpdPhUQXXMUrKrWEZYrPolSpDHJjXPLxyUYPvVWWwwzdDoMyooxeYZIWiZGXavTvunNKKZfBNeDahDMFNMbtjPgzrMomKCTDAffbHsrUOKrEdaFPYkTxIOeduqxXqVTpltVJWENthzskjWBzvbnLuELexPwLTwuTkjSHmQsVbQNgNoqAaIZHUrwBSOyHbnPztRMHrepxrwIiHpMGhspbOkWGzgnzSwHFxJACCWdHcsiBHtHPSBRNfFOIGDceFccmvLaGVgWcywUCpdCoLDEdLuVLnZQRqEXDkqawDBAAypFXVvjDIncbVOWycohOFuzFiIbJbsiGUsPPtsTCTjAmoTlbCwiDMaiGBzVBkxUcVqhGsxjwkAyUTeZCWFdXDFEJAHOJHvUZlboNaXybtmoNEtvVcWEfdolbpJudJVtwFkOyqnQUeEkohIIDtQfdOHFSjFvaobAXruINORLtutnvXuVrxCKrHzUPzlExiJeRgSPSCpIBmvzsqpLRQxtWmnQsTJgubVKRUJwWuWZJKKTRKqTGzXJmiZXNDMXMVzSrxNvZaoyFpTcpLapUrbTzVgECaDBWfRvIwetztJubsbVQfzhsBizakXJAzDdaWGsjIeqceFpTqTHVbSZeAyQZrDOteqKEgZqMqseAyAjARiayLUugPuQnlAWBe', false);
        count_11 = objectStore_4909.count(KeyRange_46);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_48 = IDBKeyRange.bound('xrsDAzrOHkIlFZFrmkAuZhQenzdiatDfpoyBoRcIqzbSMgZlMrAOqJBQqnfDMKNipKtNIGMnhoLMrYtFKAiLfYMPkDGHrXfxgfmiKfkRqyMDyScyQsAUkLYovhADpvfaVoEfulbAwRHNpIacqIpzztXHotkAEknFyRwfiGChWTwiuGysOaVQhrNICcWzruMtseTKM', 'fcMqoAGpHgRaqRgrOOjwQzEpoXiyXBHgWRSJziHhjupZGbhZNKfGZPugrSOaoWTjTjjkKjQvNzUONwpyGYRigoLKihcjrkjQVbZbBAFjiTwDcRjgzVvuoJxZDXvXuXprQbcTRNiNVLpOpZvPMULWvFUDqFYHrWCJkguCPjeuhkvBybUhSPmClYPqVHaoIRSoYaSYGXZKbAskWHsNBAQHZntkGsrvDjcYogJFJBBSfmBXWTQRguolLJiDDpvRVTIczusMBpVFGQeaFmNZIASsDgzPTCJzzMUIXIugsOjWyTpXwcqwcwxtXvsaxvbwbWzheEJHuyVgDPxdBgXRxwdxSrWxcsiVfBqkGmPlHCkENoHrFpwaTERvVVNcgtABParjZZENenUmOEyrXkPARUSCsStgaIZmeXirTFeHbyAQJRxFzhcYdIlqFJafKThygQbLbHjvHsBWRlvrjIvThvgxQdsqECyLumbsXPzhVjcrfcDAaeTuxvpIPbHvQsZRjTlzOYnaDahGFWZFlafdLgcXSagYjsFFUATdEhvwyZqrJUTrAsMjTUshyiFxDNVaeAljqELtBkLIFVRepDXhZkChLXLrhRFpBCEjoZYqjeKiSzsMhoByrnrmvDfprXnDWekdsNbanNuGkrFOq', false, false);
        count_12 = objectStore_4909.count(KeyRange_48);
    }
    catch (e){
    }

    txn_7399.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7399.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7399.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1967')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};