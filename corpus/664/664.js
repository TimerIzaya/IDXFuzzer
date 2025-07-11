let db;
const openRequest = window.indexedDB.open('str_5979', 6939083572917481)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3980', {autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var index_2678 = objectStore_0.createIndex('index_2678', 'test', {multiEntry: true});
    var add_0 = objectStore_0.add({f0_i: '<array>', f1_m: '<string>', f2_n: '<number>', f3_b: '<null>', f4_x: '<number>', f5_n: '<string>', f6_z: '<string>', f7_u: '<number>', f8_m: '<array>'}, 'iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR');
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_0.clear();
    var add_1 = objectStore_0.add({f0_n: '<string>', f1_l: '<null>', f2_o: '<number>', f3_f: '<number>', f4_v: '<object>', f5_l: '<null>', f6_q: '<null>', f7_v: '<string>'}, 'FUpW');
    var index_0 = objectStore_0.index('index_2678');
    var index_2679 = objectStore_0.createIndex('index_2679', 'test', {unique: true, multiEntry: true});
    var index_1 = objectStore_0.index('index_2678');
    var count_0 = objectStore_0.count();
    objectStore_0.deleteIndex('index_2679')
    var put_0 = objectStore_0.put({f0_p: '<string>', f1_h: '<number>', f2_y: '<number>', f3_j: '<array>', f4_m: '<object>', f5_r: '<boolean>', f6_p: '<boolean>'}, 'BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP');
    var index_2680 = objectStore_0.createIndex('index_2680', 'test', {unique: false});
    var index_2 = objectStore_0.index('index_2680');
    var add_2 = objectStore_0.add({f0_g: '<object>', f1_t: '<boolean>', f2_g: '<array>'}, 'OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe');
    var index_2681 = objectStore_0.createIndex('index_2681', 'test');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5960 = db.transaction(['objectStore_3980'], 'readonly', {durability:"relaxed"})
    var objectStore_3980 = txn_5960.objectStore('objectStore_3980');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', 'BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', false, true);
        getAll_0 = objectStore_3980.getAll(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP');
        getAll_0 = objectStore_3980.getAll(KeyRange_1);
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', 'OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe', false, false);
        get_0 = objectStore_3980.get(KeyRange_2);
    }
    catch (e){
    }

    var count_1 = objectStore_3980.count();
    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('FUpW', true);
        count_2 = objectStore_3980.count(KeyRange_4);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('FUpW', false);
        getAllKeys_0 = objectStore_3980.getAllKeys(KeyRange_6);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR');
        getAllKeys_0 = objectStore_3980.getAllKeys(KeyRange_7);
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', true);
        get_1 = objectStore_3980.get(KeyRange_8);
    }
    catch (e){
    }

    var getAll_1 = objectStore_3980.getAll(2326950618);
    var getAll_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('FUpW', 'OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe', false, true);
        getAll_2 = objectStore_3980.getAll(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe');
        getAll_2 = objectStore_3980.getAll(KeyRange_11);
    }

    var getAll_3 = objectStore_3980.getAll();
    var count_3 = objectStore_3980.count();
    txn_5960.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5960.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5960.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5961 = db.transaction(['objectStore_3980'], 'readonly', {durability:"strict"})
    var objectStore_3980 = txn_5961.objectStore('objectStore_3980');
    var getAllKeys_1 = objectStore_3980.getAllKeys();
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.only('OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe');
        get_2 = objectStore_3980.get(KeyRange_12);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.only('OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe');
        get_3 = objectStore_3980.get(KeyRange_14);
    }
    catch (e){
    }

    var index_3 = objectStore_3980.index('index_2681');
    var getAllKeys_2 = objectStore_3980.getAllKeys();
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe', 'iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', true, true);
        count_4 = objectStore_3980.count(KeyRange_16);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_18 = IDBKeyRange.bound('iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', 'BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', false, false);
        getAll_4 = objectStore_3980.getAll(KeyRange_18, 3980548411);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('FUpW');
        getAll_4 = objectStore_3980.getAll(KeyRange_19);
    }

    var get_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', 'iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', false, false);
        get_4 = objectStore_3980.get(KeyRange_20);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', false);
        get_5 = objectStore_3980.get(KeyRange_22);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', true);
        get_6 = objectStore_3980.get(KeyRange_24);
    }
    catch (e){
    }

    txn_5961.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5961.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5961.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5962 = db.transaction(['objectStore_3980'], 'readwrite', {durability:"default"})
    var objectStore_3980 = txn_5962.objectStore('objectStore_3980');
    var add_3 = objectStore_3980.add({f0_p: '<null>', f1_m: '<array>', f2_b: '<array>', f3_i: '<boolean>', f4_y: '<string>', f5_i: '<object>', f6_i: '<string>', f7_e: '<string>', f8_x: '<string>', f9_l: '<array>'}, 'OvLuwaKXXRpnyYHNhxhmtAAJRqKkNPuGnAeaUBsyaydhffMDiCCkcmtMnbMjZQqaikMjaEFnzQJRmvLMjCGLDKMYNrUGYnKYzFzIyfQdWEsLwAXysGQSDfIccoHiuGHUSUmwOYhidDHOFehMJXTutnwnyCGlRWTeXeJpTSSwlCPJaYrdrGwjGoWOXfYjAkkBpxULdSeOBQPSFnaxGWyg');
    var put_1 = objectStore_3980.put({f0_n: '<object>', f1_c: '<number>', f2_t: '<number>', f3_l: '<boolean>', f4_j: '<null>', f5_m: '<boolean>', f6_i: '<object>'}, 'gxvnsPwNMGTOVhYuQOOfSDUvyQwfoRwuUycWDwBrLGQPnvdgjVrzOPCYoNarLhzbfWRxRiGDzLJVJaFvcIGJRBbvzIKUEBxoThHDImhiujJvUgojpyNrtTusokUJrOYbYItlSIuYpXZYyzvYgRDeNjhGvGaATNazlrVKDvhjOAqfVRMPyMgzndRDbRfUiwLovhcsXvFnZQFPnmQfxJBLeyMxfIXrgryyftQMrVpiXYImhpKbgwRjFBXCRPrkwMqHYxpYaxtwzBBmchIQLkjQRkugyNbQVAirIWOSqNZKwQPilnzwnzQvgkalSpliDvFlkvmPqjWByFHTmUbGPsjtpuGBwCJotmXFoZHbCcZbKNUZFTrZVXTVcJiYgeIyybGtTwyXepogIjksQVGaNytbzyAUqbWyWcxVDkRPnOifNQaXAHmjTuSlKORskzNsNRavjZsIEsUjdbSxyJHYeRoEdBDItPQckyZyalEaUxakmxZWKeUaaOolHaONLJYCRMPkoAuLGmgGnRwtguFpmAYhRBAOueAuCbSjjZVzKzePuwBeKaYjZJGRHRRtnLmlvleLolAzZNpthomLzWmCfPkZiQwtnQblCgalTVpdahjzHINDpksthgiiTtAteIlvSTugtgTWOQkGeXSoubkyViaMZboEWCzcnWODLbEoDqLUGaYhljvqzfoNbGxZsCambNstAKOkBKImbfOKpbiOMeKIJCnSUspCPCHrxMei');
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', 'BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', false, true);
        get_7 = objectStore_3980.get(KeyRange_26);
    }
    catch (e){
    }

    var index_4 = objectStore_3980.index('index_2678');
    var put_2 = objectStore_3980.put({f0_l: '<boolean>', f1_i: '<array>', f2_v: '<object>', f3_t: '<number>', f4_o: '<number>', f5_a: '<object>', f6_o: '<boolean>'}, 'WlBBrWZzltlIqBJoLHurjdDAuZuAhGETjkUNBtbWDJTslfDyECLUYTzvpcFkwfafdKrhBrMuaJDajWBVNLfGqlXvrBfVmUvNYeYFVvdDhVmYNKvCUbwaccqpyAfWYBkHDzbskUuzeXEGZTAFtpKzNtOsOquvfsfIlYAuiqFpDAFdtyKtFNaNMuTBVaRWvFucVOkcZPBgMESceJyibvZFlsIXuuQmQPmhQDDZGAMQwPCqVJdlBuRKhkyrNbcscOqPLBryPCdLybfMVwoNhUvgVkhIjIztBmYjNAdEELHUfDNCbwfeqjuCjHSVfhYpxWlfTdJczUnVUUSEVqtahdVtPOtjaTFPHYWhwtFUWiGkNgPrjhPHRbdlHqQWEMKGOAFwABUBCkudRDZICQWkmsdkNupBMEFNVcKxcMtSbOYhHJIxTRsFBjyZjDdNyjRjZqEEFFdYmYVwiQCoxJZdBeppsAOuRSYCGCitFzkztoDKMpfhZZIvzXCoEVlFxctmFUBNUKcssKvvKTSyhZdPDQlVfuoqHXBECXtxZSXKcfJBhgDzVCbgWTQueScNAQkNVqtSaExHrXvFAAtRYgHvNpPcwxogxbnTjAmSXWJeUWAVRXFDDmAfkSCRUXfhdqwpZbZjguJVxCGbNVRamxpHnDeHqtLtEAjzWWwcnWjMeOXXSuZVpJGyRRDZejjxpfThZFjYFvLTLzNvptMnJBupHUlFrXGiTuPKlMEqPZddwlTKGZbMFysYkTUvLhoUEqdWRzZyjEvJWzFpkemZYTWojuNULAgLYBHsOsOxIEjSlBZOinyMOTmEElNgpSqRvZLccbeMahPIDJApQZORO');
    var put_3 = objectStore_3980.put({f0_f: '<array>', f1_i: '<object>', f2_i: '<null>', f3_l: '<number>', f4_p: '<object>', f5_x: '<object>', f6_t: '<boolean>', f7_k: '<object>', f8_r: '<string>'}, 'kgtRFtlHGystIHZveZsfYlcgywFfmwiVqKGlxANLZmbNjTrlxSiUkCSHzRWcdqReOpFYrabuRmsQiTyfHemKbcRbqgkWwdQGUFgARYQBwqKljLvGhTMdWMkoorvsofMZLTGoHmYZbAWHtoRQVthhhcxnSYUMxkDeHqeZJuBWKlhJGEvkmTycbZdkfUIBOEEZGfyHOHTEgNbyVseULKdEgBsVYUNWZWpwPoczMhQvZDxiAOrhwYueZlzoGdvexyaSGpVeqSajoLeXsPihbqEeahhOAoFXwzbvznFjMEufOpmfIlBFXiXOPnrZIMmyTLuTZfDiIaukuiqtnmWHZAPUHTVZkYDofkyRaXAMkdmLoyJYnxvKUlFfgsMcdEugaaGXPJIhdvCtlajxRbmvnNNROykPvFRIIeSrHEWFpWlsGiOBfalLzcehwxuJIOPIsURbkWmNflnEpSkrmLzzKSnSYzqfWDHgHSppDuRyMRUPgaGMoQRQJRtvGtuIrIYAzemcjQnfgDsDPIkcMyXPtoKOniyXAmrYEHcrJUPTdLOVXTyArRGmlxVENaqXEUOWNFEeNCYbIBnuWaBmgdAeZAvnKxeorWPiaGVzsjFHWoAkHGNdftTkDECGSnc');
    var add_4 = objectStore_3980.add({f0_u: '<string>', f1_l: '<string>', f2_a: '<number>', f3_l: '<string>', f4_d: '<string>', f5_f: '<string>', f6_m: '<number>', f7_e: '<string>', f8_p: '<array>', f9_u: '<array>', f10_g: '<object>', f11_h: '<boolean>', f12_o: '<null>', f13_c: '<string>', f14_v: '<string>', f15_d: '<boolean>', f16_f: '<number>', f17_h: '<null>', f18_l: '<object>', f19_q: '<null>', f20_u: '<string>', f21_x: '<array>', f22_c: '<boolean>', f23_q: '<string>', f24_d: '<number>', f25_a: '<array>', f26_a: '<number>', f27_h: '<boolean>', f28_k: '<string>', f29_q: '<number>', f30_d: '<object>', f31_a: '<null>', f32_x: '<object>', f33_i: '<number>', f34_b: '<number>', f35_f: '<null>', f36_x: '<object>', f37_d: '<string>', f38_d: '<string>', f39_t: '<number>', f40_q: '<null>', f41_b: '<string>', f42_m: '<object>', f43_b: '<boolean>', f44_e: '<array>', f45_o: '<string>', f46_f: '<array>', f47_k: '<boolean>', f48_v: '<object>', f49_r: '<null>', f50_x: '<null>', f51_e: '<number>', f52_d: '<object>', f53_h: '<null>', f54_f: '<number>', f55_f: '<object>'}, 'QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ');
    var getAll_5 = objectStore_3980.getAll();
    txn_5962.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5962.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5962.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5963 = db.transaction(['objectStore_3980'], 'readonly', {durability:"relaxed"})
    var objectStore_3980 = txn_5963.objectStore('objectStore_3980');
    var count_5 = objectStore_3980.count();
    var count_6 = objectStore_3980.count();
    var index_5 = objectStore_3980.index('index_2681');
    var getAll_6 = objectStore_3980.getAll(733208225);
    var index_6 = objectStore_3980.index('index_2680');
    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.only('QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ');
        get_8 = objectStore_3980.get(KeyRange_28);
    }
    catch (e){
    }

    var count_7 = objectStore_3980.count();
    var getAll_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('kgtRFtlHGystIHZveZsfYlcgywFfmwiVqKGlxANLZmbNjTrlxSiUkCSHzRWcdqReOpFYrabuRmsQiTyfHemKbcRbqgkWwdQGUFgARYQBwqKljLvGhTMdWMkoorvsofMZLTGoHmYZbAWHtoRQVthhhcxnSYUMxkDeHqeZJuBWKlhJGEvkmTycbZdkfUIBOEEZGfyHOHTEgNbyVseULKdEgBsVYUNWZWpwPoczMhQvZDxiAOrhwYueZlzoGdvexyaSGpVeqSajoLeXsPihbqEeahhOAoFXwzbvznFjMEufOpmfIlBFXiXOPnrZIMmyTLuTZfDiIaukuiqtnmWHZAPUHTVZkYDofkyRaXAMkdmLoyJYnxvKUlFfgsMcdEugaaGXPJIhdvCtlajxRbmvnNNROykPvFRIIeSrHEWFpWlsGiOBfalLzcehwxuJIOPIsURbkWmNflnEpSkrmLzzKSnSYzqfWDHgHSppDuRyMRUPgaGMoQRQJRtvGtuIrIYAzemcjQnfgDsDPIkcMyXPtoKOniyXAmrYEHcrJUPTdLOVXTyArRGmlxVENaqXEUOWNFEeNCYbIBnuWaBmgdAeZAvnKxeorWPiaGVzsjFHWoAkHGNdftTkDECGSnc', 'iAAGwGMuttAQdBOEJPYUndCMJeoqkvMkMHwfWDcSTiziEtBfCFXafUUPWuXvCmsKzGhgxJUwBJKeaSwygUoSeRHQGEGjyalIjEQlDPxZPFNqcRlTHqXQMMHfSCIToZPqDZuKdvrGigafKUGSPteTBnrhbYESAFQsGeYOEFuwxBIqDncEXSYUkLyXZmMLmTljRBdgxEttQYiJAPlgcWRaLOThkKsSEEYRJNdRHtSajGVaDXySwtRGtbhVwuQNHWGwjecIkjvjGWljTgMBmKyUlSlkxOpKfWvzIVAMUcJtptGTVwtsUeilSSnFCaQYnzgVIwZPTqnBKtZDIKBIKcMaThptEBILpSGkDToUWvVRhnfrHKqqfZeXZDCBvnSBVGDcbNiYMMAeyMmXeMwXznzKgvVidDrKPzPynUoznGBEoDHjTnCAgokvTDSaCHNchHgohVITfKEyCnWpjLjuEcbYNNRigLCHvTQfeIxfCDaKXyGUDqJiYSzvuqvUuUxPbxtgkrouyoIPJHUVuxzhbtyAIJsGdlJNHYYXTaBfZIXOTuATfmqIVBPAJOZNpobwXZBQLrdYUAsPizMhKPXSbtlBfqpQInGsaVbnfVgLJWUfDbQCDwRLRtdtVXiwZBmJYLUcZwEqdOGCSkDhRoMatyJPCKFutHmJdAHXDwlwoJXNoIIuORJxnUJPhnCWggYtJkEIcopIPAFbQuoNGR', false, false);
        getAll_7 = objectStore_3980.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('WlBBrWZzltlIqBJoLHurjdDAuZuAhGETjkUNBtbWDJTslfDyECLUYTzvpcFkwfafdKrhBrMuaJDajWBVNLfGqlXvrBfVmUvNYeYFVvdDhVmYNKvCUbwaccqpyAfWYBkHDzbskUuzeXEGZTAFtpKzNtOsOquvfsfIlYAuiqFpDAFdtyKtFNaNMuTBVaRWvFucVOkcZPBgMESceJyibvZFlsIXuuQmQPmhQDDZGAMQwPCqVJdlBuRKhkyrNbcscOqPLBryPCdLybfMVwoNhUvgVkhIjIztBmYjNAdEELHUfDNCbwfeqjuCjHSVfhYpxWlfTdJczUnVUUSEVqtahdVtPOtjaTFPHYWhwtFUWiGkNgPrjhPHRbdlHqQWEMKGOAFwABUBCkudRDZICQWkmsdkNupBMEFNVcKxcMtSbOYhHJIxTRsFBjyZjDdNyjRjZqEEFFdYmYVwiQCoxJZdBeppsAOuRSYCGCitFzkztoDKMpfhZZIvzXCoEVlFxctmFUBNUKcssKvvKTSyhZdPDQlVfuoqHXBECXtxZSXKcfJBhgDzVCbgWTQueScNAQkNVqtSaExHrXvFAAtRYgHvNpPcwxogxbnTjAmSXWJeUWAVRXFDDmAfkSCRUXfhdqwpZbZjguJVxCGbNVRamxpHnDeHqtLtEAjzWWwcnWjMeOXXSuZVpJGyRRDZejjxpfThZFjYFvLTLzNvptMnJBupHUlFrXGiTuPKlMEqPZddwlTKGZbMFysYkTUvLhoUEqdWRzZyjEvJWzFpkemZYTWojuNULAgLYBHsOsOxIEjSlBZOinyMOTmEElNgpSqRvZLccbeMahPIDJApQZORO');
        getAll_7 = objectStore_3980.getAll(KeyRange_31);
    }

    var get_9;
    try{
        KeyRange_32 = IDBKeyRange.bound('OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe', 'QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ', false, true);
        get_9 = objectStore_3980.get(KeyRange_32);
    }
    catch (e){
    }

    var count_8 = objectStore_3980.count();
    txn_5963.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5963.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5963.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5964 = db.transaction(['objectStore_3980'], 'readonly', {durability:"relaxed"})
    var objectStore_3980 = txn_5964.objectStore('objectStore_3980');
    var getAll_8 = objectStore_3980.getAll();
    var get_10;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ', true);
        get_10 = objectStore_3980.get(KeyRange_34);
    }
    catch (e){
    }

    var count_9 = objectStore_3980.count();
    var getAllKeys_3 = objectStore_3980.getAllKeys(848308400);
    var get_11;
    try{
        KeyRange_36 = IDBKeyRange.only('QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ');
        get_11 = objectStore_3980.get(KeyRange_36);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', false);
        count_10 = objectStore_3980.count(KeyRange_38);
    }
    catch (e){
    }

    var count_11 = objectStore_3980.count();
    var get_12;
    try{
        KeyRange_40 = IDBKeyRange.bound('QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ', 'OGnJYGrwOswykWTjEyvmSIihvkZgMfkDvXcbBqwGFoCLzyFZDfpBrCjpGRqAfFWZdoHNLkAEUpeiDfUwnjMQXtkRBBkMeVmeIdENBYfJaqTzTuXcmLRlxocgFXypwieCiubCebgNJZqoqxoOrfqBpZERrHcmnmwsraopblfNrlVSWxJdqJyRfwoMzlsHJibrJuAceBNcdsPMwbhwAKhltvXezVTKVGJRXlclHmTCGvbaPKHURgPfghRDXBIXkEYkgyUJGmxLxhwdeUXe', false, false);
        get_12 = objectStore_3980.get(KeyRange_40);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_42 = IDBKeyRange.bound('gxvnsPwNMGTOVhYuQOOfSDUvyQwfoRwuUycWDwBrLGQPnvdgjVrzOPCYoNarLhzbfWRxRiGDzLJVJaFvcIGJRBbvzIKUEBxoThHDImhiujJvUgojpyNrtTusokUJrOYbYItlSIuYpXZYyzvYgRDeNjhGvGaATNazlrVKDvhjOAqfVRMPyMgzndRDbRfUiwLovhcsXvFnZQFPnmQfxJBLeyMxfIXrgryyftQMrVpiXYImhpKbgwRjFBXCRPrkwMqHYxpYaxtwzBBmchIQLkjQRkugyNbQVAirIWOSqNZKwQPilnzwnzQvgkalSpliDvFlkvmPqjWByFHTmUbGPsjtpuGBwCJotmXFoZHbCcZbKNUZFTrZVXTVcJiYgeIyybGtTwyXepogIjksQVGaNytbzyAUqbWyWcxVDkRPnOifNQaXAHmjTuSlKORskzNsNRavjZsIEsUjdbSxyJHYeRoEdBDItPQckyZyalEaUxakmxZWKeUaaOolHaONLJYCRMPkoAuLGmgGnRwtguFpmAYhRBAOueAuCbSjjZVzKzePuwBeKaYjZJGRHRRtnLmlvleLolAzZNpthomLzWmCfPkZiQwtnQblCgalTVpdahjzHINDpksthgiiTtAteIlvSTugtgTWOQkGeXSoubkyViaMZboEWCzcnWODLbEoDqLUGaYhljvqzfoNbGxZsCambNstAKOkBKImbfOKpbiOMeKIJCnSUspCPCHrxMei', 'OvLuwaKXXRpnyYHNhxhmtAAJRqKkNPuGnAeaUBsyaydhffMDiCCkcmtMnbMjZQqaikMjaEFnzQJRmvLMjCGLDKMYNrUGYnKYzFzIyfQdWEsLwAXysGQSDfIccoHiuGHUSUmwOYhidDHOFehMJXTutnwnyCGlRWTeXeJpTSSwlCPJaYrdrGwjGoWOXfYjAkkBpxULdSeOBQPSFnaxGWyg', true, false);
        count_12 = objectStore_3980.count(KeyRange_42);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_44 = IDBKeyRange.bound('WlBBrWZzltlIqBJoLHurjdDAuZuAhGETjkUNBtbWDJTslfDyECLUYTzvpcFkwfafdKrhBrMuaJDajWBVNLfGqlXvrBfVmUvNYeYFVvdDhVmYNKvCUbwaccqpyAfWYBkHDzbskUuzeXEGZTAFtpKzNtOsOquvfsfIlYAuiqFpDAFdtyKtFNaNMuTBVaRWvFucVOkcZPBgMESceJyibvZFlsIXuuQmQPmhQDDZGAMQwPCqVJdlBuRKhkyrNbcscOqPLBryPCdLybfMVwoNhUvgVkhIjIztBmYjNAdEELHUfDNCbwfeqjuCjHSVfhYpxWlfTdJczUnVUUSEVqtahdVtPOtjaTFPHYWhwtFUWiGkNgPrjhPHRbdlHqQWEMKGOAFwABUBCkudRDZICQWkmsdkNupBMEFNVcKxcMtSbOYhHJIxTRsFBjyZjDdNyjRjZqEEFFdYmYVwiQCoxJZdBeppsAOuRSYCGCitFzkztoDKMpfhZZIvzXCoEVlFxctmFUBNUKcssKvvKTSyhZdPDQlVfuoqHXBECXtxZSXKcfJBhgDzVCbgWTQueScNAQkNVqtSaExHrXvFAAtRYgHvNpPcwxogxbnTjAmSXWJeUWAVRXFDDmAfkSCRUXfhdqwpZbZjguJVxCGbNVRamxpHnDeHqtLtEAjzWWwcnWjMeOXXSuZVpJGyRRDZejjxpfThZFjYFvLTLzNvptMnJBupHUlFrXGiTuPKlMEqPZddwlTKGZbMFysYkTUvLhoUEqdWRzZyjEvJWzFpkemZYTWojuNULAgLYBHsOsOxIEjSlBZOinyMOTmEElNgpSqRvZLccbeMahPIDJApQZORO', 'WlBBrWZzltlIqBJoLHurjdDAuZuAhGETjkUNBtbWDJTslfDyECLUYTzvpcFkwfafdKrhBrMuaJDajWBVNLfGqlXvrBfVmUvNYeYFVvdDhVmYNKvCUbwaccqpyAfWYBkHDzbskUuzeXEGZTAFtpKzNtOsOquvfsfIlYAuiqFpDAFdtyKtFNaNMuTBVaRWvFucVOkcZPBgMESceJyibvZFlsIXuuQmQPmhQDDZGAMQwPCqVJdlBuRKhkyrNbcscOqPLBryPCdLybfMVwoNhUvgVkhIjIztBmYjNAdEELHUfDNCbwfeqjuCjHSVfhYpxWlfTdJczUnVUUSEVqtahdVtPOtjaTFPHYWhwtFUWiGkNgPrjhPHRbdlHqQWEMKGOAFwABUBCkudRDZICQWkmsdkNupBMEFNVcKxcMtSbOYhHJIxTRsFBjyZjDdNyjRjZqEEFFdYmYVwiQCoxJZdBeppsAOuRSYCGCitFzkztoDKMpfhZZIvzXCoEVlFxctmFUBNUKcssKvvKTSyhZdPDQlVfuoqHXBECXtxZSXKcfJBhgDzVCbgWTQueScNAQkNVqtSaExHrXvFAAtRYgHvNpPcwxogxbnTjAmSXWJeUWAVRXFDDmAfkSCRUXfhdqwpZbZjguJVxCGbNVRamxpHnDeHqtLtEAjzWWwcnWjMeOXXSuZVpJGyRRDZejjxpfThZFjYFvLTLzNvptMnJBupHUlFrXGiTuPKlMEqPZddwlTKGZbMFysYkTUvLhoUEqdWRzZyjEvJWzFpkemZYTWojuNULAgLYBHsOsOxIEjSlBZOinyMOTmEElNgpSqRvZLccbeMahPIDJApQZORO', false, true);
        getAllKeys_4 = objectStore_3980.getAllKeys(KeyRange_44, 3017114021);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('WlBBrWZzltlIqBJoLHurjdDAuZuAhGETjkUNBtbWDJTslfDyECLUYTzvpcFkwfafdKrhBrMuaJDajWBVNLfGqlXvrBfVmUvNYeYFVvdDhVmYNKvCUbwaccqpyAfWYBkHDzbskUuzeXEGZTAFtpKzNtOsOquvfsfIlYAuiqFpDAFdtyKtFNaNMuTBVaRWvFucVOkcZPBgMESceJyibvZFlsIXuuQmQPmhQDDZGAMQwPCqVJdlBuRKhkyrNbcscOqPLBryPCdLybfMVwoNhUvgVkhIjIztBmYjNAdEELHUfDNCbwfeqjuCjHSVfhYpxWlfTdJczUnVUUSEVqtahdVtPOtjaTFPHYWhwtFUWiGkNgPrjhPHRbdlHqQWEMKGOAFwABUBCkudRDZICQWkmsdkNupBMEFNVcKxcMtSbOYhHJIxTRsFBjyZjDdNyjRjZqEEFFdYmYVwiQCoxJZdBeppsAOuRSYCGCitFzkztoDKMpfhZZIvzXCoEVlFxctmFUBNUKcssKvvKTSyhZdPDQlVfuoqHXBECXtxZSXKcfJBhgDzVCbgWTQueScNAQkNVqtSaExHrXvFAAtRYgHvNpPcwxogxbnTjAmSXWJeUWAVRXFDDmAfkSCRUXfhdqwpZbZjguJVxCGbNVRamxpHnDeHqtLtEAjzWWwcnWjMeOXXSuZVpJGyRRDZejjxpfThZFjYFvLTLzNvptMnJBupHUlFrXGiTuPKlMEqPZddwlTKGZbMFysYkTUvLhoUEqdWRzZyjEvJWzFpkemZYTWojuNULAgLYBHsOsOxIEjSlBZOinyMOTmEElNgpSqRvZLccbeMahPIDJApQZORO');
        getAllKeys_4 = objectStore_3980.getAllKeys(KeyRange_45);
    }

    var count_13;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('FUpW', false);
        count_13 = objectStore_3980.count(KeyRange_46);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_48 = IDBKeyRange.bound('QSUeGVkOlVqdWLLhgpolPwHylljgJjajVTdvlLhsbPTsTaULlotxnMyWwLWJJUzipiTABIfOEtbRXPvxWRcJeckOSCZagdJGWPtxdYXnZDByHgnwVVMojzfUpTNvwzQnrosyFUFXblxuhdAnyjaSWYRxKIYykLSObvlSnCByobwNVbWbmBcfUilCzLwCGblRLiOwwdWmgbFePpLzbuDcLmWNCseZDrlAGmWJBIapVIwaHSBBMFBsdpnNJdUJgGmDpBocSlFoRAThOlIsvUhOgdDRHYLjyHAPTAbSWbmrtOiZwNNbWRWNvDMoLATqQfMtxzzqVfLuvuQuBjMFaqZYydYaxsWXkqnzYvVTEeJBpBjhQdVjUMpZiwdnUeQpWsbcJXAWcWRBWBXtoVbwlNbQrOZZMKQdIWrbZgtqNCuSXGZbZtFyaTrfERkvSsrQLYWdEMjqUWdLXqpgXPCPlnEzZVvXTYMmtGzGoNVREgyvKHmyQhskhdUyKOuQHdFVMeQtjGBlASpIXdGfTDAGhnXuSNPmhhukWcsCsVaUzimknAJjrLIsMRKWMNpyBlwNBjpkagJbIvKMUHbdewEdTWKUegqmxmzjsgJFfvZqJRRobOjTZMlaKYlrhTqDXzfkEAQOBqlbfwYQzqANGzVDkwGKqMcRNFxjGTVSclKTmfxTvQnoNEDOfrAwhLBbtUByjxniSlAiLgbeHEhTbQNVUAVsMeyUArlphMQzTmldOAThrhMQOfcFPXSfSpfJxauSLaTWaeCNTszSoVITEOqNQyFLXAdAiJBGAzxoxjltRLwhwAAAnVtFDcsObDPfWvexRwnwjFBmoFtgZzrwHXamuZYLDMQ', 'BHyCOZivRXZvOBSCXKcSaHYqDKzTdfGlVSIDJOUoIXJxxNcEbkIQuXfKDCNsmEGKIQQaOfjxsomqfRwZWShJdzIVyUXWlhFZgAumKhvzmnMVTGOlcibQzCidXumeEkeFbLYLSbEboremwQdMdwwRVYbbfHkTpdUZtQnYaGZaWCuOFFKAxLNuXqryOtTTQVoaBrXjWsLbWbFhHMlgWpyBOSrfINZATmTmBNPJJZuvoVSuHTmLwjoYFKaExAJxfWLpwwzrfaVbIJyBQtGxpDbfJTGmXTRJcSIwaWndsIvdqAWyEnyAZJddoYYQHvebxCvBHPtMGCseZWntZpSrZyuKjWqbdgBPQmPbAnTfzkAUdNienvAVHviZTWzIalJQtsjIiHMwSaDgcGoXlSP', true, false);
        get_13 = objectStore_3980.get(KeyRange_48);
    }
    catch (e){
    }

    txn_5964.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5964.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5964.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8337')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};