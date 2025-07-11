let db;
const openRequest = window.indexedDB.open('str_5693', 5282618000760731)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4322', {keypath: 'UOaaPFyuJBSbyYqSXPPxjMfVsFiyzTWtkjmskrUbRqiUPlYGKPzWsBECsbZodpPJEsbLMzSQXiIUUTJHtRYSrvxGrithZVnbSiNDbtAMwizapsABDIHcxiJfNEKHzAqPVPpeRrceBodDqzznnQBQVcbCNqkFmJCAYYWCNvaUEkHlOhFHgJGRpzcNZQpbjZzuCgcoKugGXfiVDCIauDlZXrFmLMzyYkwpXWYtNtglcgOJrVlwxqZtQxJBrnEOakVuAxgcuVdLxkXYvrFrmpvIHcRhuayPpnBYAoQxUsrKmXkNgAIyyhqdmYnlDtPyknGqDJiLqvYuxGQulQEdPJAraJPmmEHrndROfsIYDSoQdmAlfppNWqKwPdLhimYsszZZQLhKGCAzwgpcLwzHRrhuksZjWfKotUbaCMwwekqnKDVUVBWwhFNObKCeKtGJxZCYYOdtgsyHJlMlXIYLeUdNUKJiKoxqAopcRiIniwTJbGlIaGncsVUoyvDCBRQMfqjAlBKQMVeWIhtEduoFivBHWGYzPntgyCuuzDasPZnvObkROiKoccvfEXrxEDLOIJxIwKPvGePcAmkUiEoZRBnRHEafasHIFAdIvqxzgXHrsGcdUcHuuJkpklnvbPkCVCtxEqmovTqcTjziRDtUacLGoVHXuFRjNGoccAxeOyFADYkBSCMaXlBPoPWxswUTURxLfvwfrZohaPNBMfYxsGfdVyLylRLSyifXIGSIcaWnEFPkELAMAwayzOHEYLzfFeSoNdzVFkbuLHxBVgDxlsecUQQRft', autoIncrement: true});
    var put_0 = objectStore_0.put({f0_h: '<string>'}, 'ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF');
    var put_1 = objectStore_0.put({f0_q: '<boolean>', f1_i: '<boolean>', f2_x: '<string>', f3_u: '<number>', f4_c: '<null>', f5_z: '<array>', f6_f: '<array>'}, 'LiVyBJmpcevuvcJfdtuVXaLXlQCZxJHdICrYSLVLkMffcIHEhKqDKXlBOxJGiixjcaqyHEdMqYGlOFJXYVuXzFyxdOwUaQFSyYlIDaGjXkFpGWkYnxGRWmLIjNEReOmCAKwWHnFuLMHWLDwxoDSdHVanZWONzACoczqlQSAQJATZuofoPpTXpoAc');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    var count_1 = objectStore_0.count();
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('LiVyBJmpcevuvcJfdtuVXaLXlQCZxJHdICrYSLVLkMffcIHEhKqDKXlBOxJGiixjcaqyHEdMqYGlOFJXYVuXzFyxdOwUaQFSyYlIDaGjXkFpGWkYnxGRWmLIjNEReOmCAKwWHnFuLMHWLDwxoDSdHVanZWONzACoczqlQSAQJATZuofoPpTXpoAc');
        getAll_0 = objectStore_0.getAll(KeyRange_2, 2746980849);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('LiVyBJmpcevuvcJfdtuVXaLXlQCZxJHdICrYSLVLkMffcIHEhKqDKXlBOxJGiixjcaqyHEdMqYGlOFJXYVuXzFyxdOwUaQFSyYlIDaGjXkFpGWkYnxGRWmLIjNEReOmCAKwWHnFuLMHWLDwxoDSdHVanZWONzACoczqlQSAQJATZuofoPpTXpoAc');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var getAll_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF', 'ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF', false, false);
        getAll_1 = objectStore_0.getAll(KeyRange_4, 3695090930);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('LiVyBJmpcevuvcJfdtuVXaLXlQCZxJHdICrYSLVLkMffcIHEhKqDKXlBOxJGiixjcaqyHEdMqYGlOFJXYVuXzFyxdOwUaQFSyYlIDaGjXkFpGWkYnxGRWmLIjNEReOmCAKwWHnFuLMHWLDwxoDSdHVanZWONzACoczqlQSAQJATZuofoPpTXpoAc');
        getAll_1 = objectStore_0.getAll(KeyRange_5);
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('LiVyBJmpcevuvcJfdtuVXaLXlQCZxJHdICrYSLVLkMffcIHEhKqDKXlBOxJGiixjcaqyHEdMqYGlOFJXYVuXzFyxdOwUaQFSyYlIDaGjXkFpGWkYnxGRWmLIjNEReOmCAKwWHnFuLMHWLDwxoDSdHVanZWONzACoczqlQSAQJATZuofoPpTXpoAc', 'ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF', false, true);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.only('ugAsipQYSwNaHoemvVwWAjIgMnFkUSpoPwYFbLFYlcdSHDFCmxTevNqiVyCodyWpggHMhNwZcqHyVcbpjDxpQMPAltqVLWdMWUYisCTyzmpTKKgsTMNxyTQHdQseKrbkFmejcbrlcMLvVyxWeTffHubwAmQprixfwIiRsKKacebfSEBZfVwWorxeGSrvLgnYHLpuDQkeRjAnEDDRogRAnMHCrHpFXfcLGnRkjUCjUXUwweF');
        count_2 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_4322')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_3590')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};