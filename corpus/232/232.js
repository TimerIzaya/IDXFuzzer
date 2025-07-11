let db;
const openRequest = window.indexedDB.open('str_4121', 2222740854932653)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1361', {autoIncrement: true});
    var add_0 = objectStore_0.add({f0_e: '<string>', f1_h: '<null>', f2_d: '<array>', f3_l: '<number>', f4_o: '<boolean>'}, 'zbGNRNgfPgtAlRzpOlseHUHErdZCkuJrWqeTpzfHMrjupaXUuTWlaVgJUNLnNjXfIwZOUvrJsSedhGCtDKGlPgbCyIXRJFWMMXjQGIHcboAIYCNVyJnPIZrWwIoomHLHVSaIQpPWidmLDnZjlTjMjrJDKuhBIbsIfMOxurYXMNCyYWDVqNDtTqhSVUoaQHRqcloGFaffMrOlOqQUuMyapjCobVaZEnWaJWxWWeUoxCKoouyJxChfIumnkwFXIzRAxvTZCldoKEHSjeMnnVkvWrpBEPhHIqMTxxeWeBIGzgPOZfJLtfolWOKmbxGctXlTnfrIDUApYUGCblxosjndTlpRZIfODFXNdDkbhjGMDSjawsUOBrTPuRuNrDHHUshMzYZFfsqIvxTRwdqktCUSlTlbprIxgSQtkkxJlSjeIhvRYsWRfRkggNjeKeohwlztfVGNSWoakiypszxhXVlUWyzOIWgADIcSvOAGzYymWhtvOCkFzadxGJHXODJiURHuNujmwnLnNHDUqNYkoRMldrbZfhbTKRFDkCTohoOvyhnXxlgoEBzPKfzrpdMHJbAnpusYeyNtgoKnwNDOIdwsfuvVoblqrdjeLIoiOBbGNaBbFFrAqvpQnyNJWpjxsGpmgzQVPaobcYNXBPgqJJkNEOJvDItUoisdUUOrSoexTbIRygRUhXrEwgootEOuBsUhioMwTJtYKlRyQHhNDwKhtecPCGhIEQsXhxcoGCvGxshoQwBcHKnLujdGNoKtZZSDGHmPyqBpwwTvjnIhSokqwWVyOkKyRxmUpkDbyGnOwUMcXzyAENQkANPTCJljlSGubqvkGUPhPujYMszerBNKcXGzpJmkdxSaClAwcgrKoschAeuQzRcSFjmVmzIUEzTtYLqONqJDTzOYAkueIEMdIVZmyfjWMlbBGSwYslDZYZKKWsbAsLknZHFAzztOTffxUwcc');
    var put_0 = objectStore_0.put({f0_f: '<array>', f1_i: '<object>', f2_z: '<object>', f3_t: '<number>', f4_m: '<array>', f5_t: '<null>', f6_u: '<boolean>', f7_v: '<string>', f8_o: '<string>', f9_m: '<object>', f10_l: '<boolean>', f11_k: '<number>', f12_f: '<null>', f13_c: '<object>', f14_h: '<number>', f15_d: '<string>', f16_n: '<array>', f17_q: '<null>', f18_t: '<object>', f19_f: '<null>', f20_k: '<null>', f21_w: '<boolean>', f22_s: '<string>', f23_g: '<object>'}, 'FOdhhJDBKrgXDqGOItRQQhqaJOvxSGKkTfTMgWcORRFFLGnSNDrmwWvuUvyHzZiorpbfxAiaRLCMppkhVDaFIqIWOtDVjaOihcxvEwPbZyUwvBpuWXGGYmebzJkazwBvRMPKwvsPbVA');
    var add_1 = objectStore_0.add({f0_c: '<boolean>'}, 'DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('FOdhhJDBKrgXDqGOItRQQhqaJOvxSGKkTfTMgWcORRFFLGnSNDrmwWvuUvyHzZiorpbfxAiaRLCMppkhVDaFIqIWOtDVjaOihcxvEwPbZyUwvBpuWXGGYmebzJkazwBvRMPKwvsPbVA', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var count_0 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_1362', {autoIncrement: true});
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.only('FOdhhJDBKrgXDqGOItRQQhqaJOvxSGKkTfTMgWcORRFFLGnSNDrmwWvuUvyHzZiorpbfxAiaRLCMppkhVDaFIqIWOtDVjaOihcxvEwPbZyUwvBpuWXGGYmebzJkazwBvRMPKwvsPbVA');
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('zbGNRNgfPgtAlRzpOlseHUHErdZCkuJrWqeTpzfHMrjupaXUuTWlaVgJUNLnNjXfIwZOUvrJsSedhGCtDKGlPgbCyIXRJFWMMXjQGIHcboAIYCNVyJnPIZrWwIoomHLHVSaIQpPWidmLDnZjlTjMjrJDKuhBIbsIfMOxurYXMNCyYWDVqNDtTqhSVUoaQHRqcloGFaffMrOlOqQUuMyapjCobVaZEnWaJWxWWeUoxCKoouyJxChfIumnkwFXIzRAxvTZCldoKEHSjeMnnVkvWrpBEPhHIqMTxxeWeBIGzgPOZfJLtfolWOKmbxGctXlTnfrIDUApYUGCblxosjndTlpRZIfODFXNdDkbhjGMDSjawsUOBrTPuRuNrDHHUshMzYZFfsqIvxTRwdqktCUSlTlbprIxgSQtkkxJlSjeIhvRYsWRfRkggNjeKeohwlztfVGNSWoakiypszxhXVlUWyzOIWgADIcSvOAGzYymWhtvOCkFzadxGJHXODJiURHuNujmwnLnNHDUqNYkoRMldrbZfhbTKRFDkCTohoOvyhnXxlgoEBzPKfzrpdMHJbAnpusYeyNtgoKnwNDOIdwsfuvVoblqrdjeLIoiOBbGNaBbFFrAqvpQnyNJWpjxsGpmgzQVPaobcYNXBPgqJJkNEOJvDItUoisdUUOrSoexTbIRygRUhXrEwgootEOuBsUhioMwTJtYKlRyQHhNDwKhtecPCGhIEQsXhxcoGCvGxshoQwBcHKnLujdGNoKtZZSDGHmPyqBpwwTvjnIhSokqwWVyOkKyRxmUpkDbyGnOwUMcXzyAENQkANPTCJljlSGubqvkGUPhPujYMszerBNKcXGzpJmkdxSaClAwcgrKoschAeuQzRcSFjmVmzIUEzTtYLqONqJDTzOYAkueIEMdIVZmyfjWMlbBGSwYslDZYZKKWsbAsLknZHFAzztOTffxUwcc', 'zbGNRNgfPgtAlRzpOlseHUHErdZCkuJrWqeTpzfHMrjupaXUuTWlaVgJUNLnNjXfIwZOUvrJsSedhGCtDKGlPgbCyIXRJFWMMXjQGIHcboAIYCNVyJnPIZrWwIoomHLHVSaIQpPWidmLDnZjlTjMjrJDKuhBIbsIfMOxurYXMNCyYWDVqNDtTqhSVUoaQHRqcloGFaffMrOlOqQUuMyapjCobVaZEnWaJWxWWeUoxCKoouyJxChfIumnkwFXIzRAxvTZCldoKEHSjeMnnVkvWrpBEPhHIqMTxxeWeBIGzgPOZfJLtfolWOKmbxGctXlTnfrIDUApYUGCblxosjndTlpRZIfODFXNdDkbhjGMDSjawsUOBrTPuRuNrDHHUshMzYZFfsqIvxTRwdqktCUSlTlbprIxgSQtkkxJlSjeIhvRYsWRfRkggNjeKeohwlztfVGNSWoakiypszxhXVlUWyzOIWgADIcSvOAGzYymWhtvOCkFzadxGJHXODJiURHuNujmwnLnNHDUqNYkoRMldrbZfhbTKRFDkCTohoOvyhnXxlgoEBzPKfzrpdMHJbAnpusYeyNtgoKnwNDOIdwsfuvVoblqrdjeLIoiOBbGNaBbFFrAqvpQnyNJWpjxsGpmgzQVPaobcYNXBPgqJJkNEOJvDItUoisdUUOrSoexTbIRygRUhXrEwgootEOuBsUhioMwTJtYKlRyQHhNDwKhtecPCGhIEQsXhxcoGCvGxshoQwBcHKnLujdGNoKtZZSDGHmPyqBpwwTvjnIhSokqwWVyOkKyRxmUpkDbyGnOwUMcXzyAENQkANPTCJljlSGubqvkGUPhPujYMszerBNKcXGzpJmkdxSaClAwcgrKoschAeuQzRcSFjmVmzIUEzTtYLqONqJDTzOYAkueIEMdIVZmyfjWMlbBGSwYslDZYZKKWsbAsLknZHFAzztOTffxUwcc', true, false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_0 = objectStore_1.clear();
    var add_2 = objectStore_0.add({f0_o: '<boolean>', f1_o: '<null>', f2_r: '<string>', f3_c: '<string>', f4_e: '<string>', f5_s: '<null>', f6_l: '<string>', f7_m: '<null>', f8_k: '<boolean>'}, 'qeMhTXYZXhxbHqrgjjkSNCBXVudAdcsMNZsSNKdjoIcvxjfPwQSqWVsZEvlrpbrnYcpYBmpJXggDvbatpLnDJJstffVclLwWKFtNoIHBiSulhLzynMyqtKhDmcQmXpbrrcuHpFssZXsCttPNIQXESgbMAiAOrhhAlgENDIEitHgwfpdCXtERAJRZrESzkWPzOjPBRqibGRFCVpubAIoBLwEWbMOtdCNJgYFZDGWFqeagdjpexKUOkMUvEKBwIinClvKdDKbDEJIEIfKJMXMXpaKLeSqHDaBoDUjcrxHjlVFihCGcSUxMESuPJOsYdxzLcpABkuPDjfdEUlWujlDipaJfUHnxPRvfDZXpgKeIrIujdeeqqJBumJvIEvSIsOcreoBPUcqBJXtwNQGaoPfiPRPSBzNLTqIcxNZnrWydseoCmfWpIWLUAVBqwcMzcAJrfbExnKlXZaENeDjjNClGupmqZiGoCdOJqFlDPoTuqIiLSJBCBtbjkgLxZRrCMtzRKZhBsfpOtYfE');
    var index_917 = objectStore_0.createIndex('index_917', 'test', {multiEntry: true});
    objectStore_0.deleteIndex('index_917')
    var getAllKeys_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ', 'DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ', false, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_6, 1541032484);
    }
    catch (e){
        KeyRange_7 = IDBKeyRange.only('FOdhhJDBKrgXDqGOItRQQhqaJOvxSGKkTfTMgWcORRFFLGnSNDrmwWvuUvyHzZiorpbfxAiaRLCMppkhVDaFIqIWOtDVjaOihcxvEwPbZyUwvBpuWXGGYmebzJkazwBvRMPKwvsPbVA');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_7);
    }

    var put_1 = objectStore_0.put({f0_v: '<null>', f1_q: '<number>', f2_f: '<boolean>'}, 'aoMtBXnDGdmMqJSTJvELEMyHxhOiMmkPstBPeteeZGUfnNIKjWSqmEQIgUZbpVjMUKtNnAfCrXisJddLIuVrBLjxhtyTnqHjNxvXQcmbXwvJOcnMioTAQoNvrTBDMQpkwBGTlwWBVgCxzbYqViqCJHbaRjHMwJIghERUHivqAirNIcgrIyQcyVagnPjWdcBKfQCqhzWsvGMkbHppuIPImeOUQrycMGHuqNCVNgeNKqUekAIIjQBHnuRNRTgxxGZaoqgzPThnDNuADmFRzPplYZDlmDgBjFAMWqPVvYaBDjOXlulSkYgFaOpCbhryUAsxXKGqVcPkBnJZkYAgBipL');
    var index_918 = objectStore_0.createIndex('index_918', 'test', {unique: true});
    var put_2 = objectStore_0.put({f0_w: '<null>', f1_b: '<array>', f2_y: '<boolean>', f3_t: '<boolean>', f4_h: '<boolean>'}, 'AAxLmNIerXudvjVVaxQzybcOCKrHHiAGeYUZkMKBUqaEuJGvUuxuPFNZJGpPsfgsecvacMMWfFFObzMFsKgZxTUKFTqdSKaaxZSCLGVlFvffoYZXMCsqHTfHfStNkjzvWeRpDVeBIBkJreUzHuYnAHKYpOdtyfaecqcMTZyoTHiKhOTTpCWLyYlllkFPAitTCDZqNSjphhqgbcJIGuRpxAKzMqxOeRcTtWKhvOoOijRxZLwIeBKPJMjyoVUZYPyHFuMpDfKvuH');
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('aoMtBXnDGdmMqJSTJvELEMyHxhOiMmkPstBPeteeZGUfnNIKjWSqmEQIgUZbpVjMUKtNnAfCrXisJddLIuVrBLjxhtyTnqHjNxvXQcmbXwvJOcnMioTAQoNvrTBDMQpkwBGTlwWBVgCxzbYqViqCJHbaRjHMwJIghERUHivqAirNIcgrIyQcyVagnPjWdcBKfQCqhzWsvGMkbHppuIPImeOUQrycMGHuqNCVNgeNKqUekAIIjQBHnuRNRTgxxGZaoqgzPThnDNuADmFRzPplYZDlmDgBjFAMWqPVvYaBDjOXlulSkYgFaOpCbhryUAsxXKGqVcPkBnJZkYAgBipL', 'DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ', true, true);
        count_2 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var clear_1 = objectStore_1.clear();
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ', 'FOdhhJDBKrgXDqGOItRQQhqaJOvxSGKkTfTMgWcORRFFLGnSNDrmwWvuUvyHzZiorpbfxAiaRLCMppkhVDaFIqIWOtDVjaOihcxvEwPbZyUwvBpuWXGGYmebzJkazwBvRMPKwvsPbVA', false, false);
        getAll_0 = objectStore_0.getAll(KeyRange_10, 2963405522);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('zbGNRNgfPgtAlRzpOlseHUHErdZCkuJrWqeTpzfHMrjupaXUuTWlaVgJUNLnNjXfIwZOUvrJsSedhGCtDKGlPgbCyIXRJFWMMXjQGIHcboAIYCNVyJnPIZrWwIoomHLHVSaIQpPWidmLDnZjlTjMjrJDKuhBIbsIfMOxurYXMNCyYWDVqNDtTqhSVUoaQHRqcloGFaffMrOlOqQUuMyapjCobVaZEnWaJWxWWeUoxCKoouyJxChfIumnkwFXIzRAxvTZCldoKEHSjeMnnVkvWrpBEPhHIqMTxxeWeBIGzgPOZfJLtfolWOKmbxGctXlTnfrIDUApYUGCblxosjndTlpRZIfODFXNdDkbhjGMDSjawsUOBrTPuRuNrDHHUshMzYZFfsqIvxTRwdqktCUSlTlbprIxgSQtkkxJlSjeIhvRYsWRfRkggNjeKeohwlztfVGNSWoakiypszxhXVlUWyzOIWgADIcSvOAGzYymWhtvOCkFzadxGJHXODJiURHuNujmwnLnNHDUqNYkoRMldrbZfhbTKRFDkCTohoOvyhnXxlgoEBzPKfzrpdMHJbAnpusYeyNtgoKnwNDOIdwsfuvVoblqrdjeLIoiOBbGNaBbFFrAqvpQnyNJWpjxsGpmgzQVPaobcYNXBPgqJJkNEOJvDItUoisdUUOrSoexTbIRygRUhXrEwgootEOuBsUhioMwTJtYKlRyQHhNDwKhtecPCGhIEQsXhxcoGCvGxshoQwBcHKnLujdGNoKtZZSDGHmPyqBpwwTvjnIhSokqwWVyOkKyRxmUpkDbyGnOwUMcXzyAENQkANPTCJljlSGubqvkGUPhPujYMszerBNKcXGzpJmkdxSaClAwcgrKoschAeuQzRcSFjmVmzIUEzTtYLqONqJDTzOYAkueIEMdIVZmyfjWMlbBGSwYslDZYZKKWsbAsLknZHFAzztOTffxUwcc');
        getAll_0 = objectStore_0.getAll(KeyRange_11);
    }

    var objectStore_2 = db.createObjectStore('objectStore_1363', {keypath: 'HtDdToKXvWmxIyjRcYimSgXFEQVUPmvqzOjYHpzcmkJefEnUFBCUcBXPJSIoOxrJxDVhRKxDJLsjVOhPXMMAXclAupKNjNuzTbHoKSythwSlZgzdjMUuZcAzPGlXMiMiCsjBCCArifaPVddXEemnqOPLTbbpsgtqjRZGaZXYBXyBRVvYrAAythUhOWJTAssfQuOnRDceavVGWdosfCHfrZMBZlQnlloCIaCAnHToeTBHSDUvxLRkQUHCzZBtbVuUxylqzlzZTgoLXjdykHIEELlvDQGVVCVoRxKknZiqAZTCZAcsdzVpEVXcGqFpRGMJPcFbPAGLIsTTfVbRnBMLscKPwPWrHccjoLmjCiZBjQdpAevmhAMBQXtnpDjTIBKnwBTNyDPAjAYPxzDuzkiNzDDVllmbHkjApntylqqNDpozmGiLmvOjGbXZLfVNxnwanmXPeKhicZMFzNaSusjfNwtudTObqkbGbIXacUcxFRcCIQwpxLaogBXFcYOAbSKQvZXxofTisDlGJVROeWthMAftedeWCkGoSpVXsRbqMibqjbMamYbVlaOXIAqbgRshBIfleRepJMGDEZAJTctdzK', autoIncrement: true});
    var clear_2 = objectStore_2.clear();
    var add_3 = objectStore_2.add({f0_d: '<array>', f1_a: '<object>', f2_w: '<string>', f3_w: '<null>'}, 'gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2050 = db.transaction(['objectStore_1363', 'objectStore_1362'], 'readonly', {durability:"default"})
    var objectStore_1362 = txn_2050.objectStore('objectStore_1362');
    txn_2050.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2050.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2050.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2051 = db.transaction(['objectStore_1361', 'objectStore_1363'], 'readwrite', {durability:"default"})
    var objectStore_1361 = txn_2051.objectStore('objectStore_1361');
    var clear_3 = objectStore_1361.clear();
    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('DQiXENDZBzJTZbZPsDlzxQbgIYvlHEJPqORjZkYMLeqwuOmIzxLwWzYUGYZlUTKJPBuTZsLHqJjixrrNLqqkNQSLHJJLBqGYJzAzVGAHQmeShzZJNjqsqohAbprbLCdUGuCQDIzoMIZablnQwsokjqROPtKVqFatBvtYwrHTAXDHLeunlQNgjjZIIVejCItfZuLPHQnzenHHbkIQNaiVdEusBpZKazzZrHdjgkNxZkqcjXSosfidwfpeEHLQgYlbBmJ', 'zbGNRNgfPgtAlRzpOlseHUHErdZCkuJrWqeTpzfHMrjupaXUuTWlaVgJUNLnNjXfIwZOUvrJsSedhGCtDKGlPgbCyIXRJFWMMXjQGIHcboAIYCNVyJnPIZrWwIoomHLHVSaIQpPWidmLDnZjlTjMjrJDKuhBIbsIfMOxurYXMNCyYWDVqNDtTqhSVUoaQHRqcloGFaffMrOlOqQUuMyapjCobVaZEnWaJWxWWeUoxCKoouyJxChfIumnkwFXIzRAxvTZCldoKEHSjeMnnVkvWrpBEPhHIqMTxxeWeBIGzgPOZfJLtfolWOKmbxGctXlTnfrIDUApYUGCblxosjndTlpRZIfODFXNdDkbhjGMDSjawsUOBrTPuRuNrDHHUshMzYZFfsqIvxTRwdqktCUSlTlbprIxgSQtkkxJlSjeIhvRYsWRfRkggNjeKeohwlztfVGNSWoakiypszxhXVlUWyzOIWgADIcSvOAGzYymWhtvOCkFzadxGJHXODJiURHuNujmwnLnNHDUqNYkoRMldrbZfhbTKRFDkCTohoOvyhnXxlgoEBzPKfzrpdMHJbAnpusYeyNtgoKnwNDOIdwsfuvVoblqrdjeLIoiOBbGNaBbFFrAqvpQnyNJWpjxsGpmgzQVPaobcYNXBPgqJJkNEOJvDItUoisdUUOrSoexTbIRygRUhXrEwgootEOuBsUhioMwTJtYKlRyQHhNDwKhtecPCGhIEQsXhxcoGCvGxshoQwBcHKnLujdGNoKtZZSDGHmPyqBpwwTvjnIhSokqwWVyOkKyRxmUpkDbyGnOwUMcXzyAENQkANPTCJljlSGubqvkGUPhPujYMszerBNKcXGzpJmkdxSaClAwcgrKoschAeuQzRcSFjmVmzIUEzTtYLqONqJDTzOYAkueIEMdIVZmyfjWMlbBGSwYslDZYZKKWsbAsLknZHFAzztOTffxUwcc', false, true);
        count_3 = objectStore_1361.count(KeyRange_12);
    }
    catch (e){
    }

    var put_3 = objectStore_1361.put({f0_b: '<number>', f1_e: '<string>'}, 'JtfeeQTmDaazhKIOdgZdADvXsnSzpFdfmXSSAVayOsbwMuRwMWtfDhqMkUhtkMRGQuHrXtxOdkloKXSoanKYuWsDtZowXZHWoVtYupkDKXscKVsiinejbSAggPJDFIIgjlwhtfYzaCehMRUiGcUmFgpfISCyGignfnCahdyTPtpiopIVtJnMDZIHGyOwXTZtPUICnTYbYccBzrnNutlQzwvlurERWQXCyHunNqiNdMorCaIquNkRFcPmterxUcGCBebAUEAlVyaYvLOttWdwhOrIAoV');
    var put_4 = objectStore_1361.put({f0_f: '<string>', f1_z: '<object>', f2_h: '<array>', f3_t: '<object>', f4_c: '<object>', f5_m: '<array>', f6_g: '<boolean>', f7_d: '<null>', f8_y: '<object>', f9_x: '<boolean>'}, 'dBhQLCkcplHQuUnUobSOxmLHNqmJUvJGHoIYEEkvTAFUbEafCZIhAMqIgBLpidIeLXCDebJkwhDebXjVsIyBYrtPRDBcSdAPjDTMQlKzsRkSmamXGzvnUQwmupVJMcSHLQBOiwJoJPMTjAQNrErgIpghWWPVqzFMeGqWPtQEyClFsfQKlDPXiYFjEEdYUeLjUHCYBLqXVrzVeLumlqEbFEMlGfmiiDbGlcHYllFtGfqaNvhpXIQCCreuhuEklNeMtJjUVDVqtvcJVYwyCltpbxsYnvdlOCzkUYCzPbJbLiLhMbfJKxVdgkLLBAfGWTbEmCpxrPTYKHfhnDmMnefwxQHXHgDbKMxxgPBjjJiWxtBGDVouCNirHeTomdoPMCvxRnOfQMGNXQiDnLbCkijNlGiPRkBVtUqAPbBiFKCEawUrcGSnBTtoLpVropRAjKKCSwyjnsXOTvvRjyZSnAlBXuArHlCgWIncTBamxYKzPhvTLjfgLMkFoGfWyZUVUDXhVVfycZonJaVAodVoCVrfppTHJwsoINKkmxVUNthstOpuiAcReiwMGKTzmkSAjVJKNADyMKYZXpmPnseLUhHJSSCKudktIiMupEIECOHRmmxtmbCtPPsIluWjurGKhwtBDNgKGtgvcTvZxarTYUlFXpsCyUecGtKqqoESwgYxhplAqrFTrhkaYpMaRxLZoyHoTLiEMzLNSiyMzRRMLjlxejYoIgCu');
    var add_4 = objectStore_1361.add({f0_u: '<null>', f1_y: '<null>', f2_u: '<number>', f3_x: '<array>', f4_l: '<null>', f5_v: '<null>', f6_i: '<array>'}, 'frrfuXHXisRsRSukidNdCLyszwdZYyxkDcStRDLoYwoyCaobIMEGHGWNXILGGqNNajBVpoUuixpxxDxrXzwsCvPELDraTafgkLuqckeaUnWVmkQimxzjKxgEEwwfPybwLlyZzqWjKqkbPTkcFBuYGbSplMjKOxTzILbERdjkRCXUfGzSOBfMGsyqiuHstVrhDhdASattQHdDscmPhzJDXPkzBBWzhzMuesKwSQAvFORWzuHCaaVaPCsdakXsVrEPkkqvAuEcfUEIUuudBVykOJCiDrsmslVeprtpKDPKoTzrlcJDDkYZOccXxcdfEOMQpBpwVzGxXCwAZLyQvNQJxDkHLGUtLmbqczDsGJOOIFyuEKPMlkkCkRdMYyfAKvrZuwscgJnvOCDOkcojfcgrLmpCOGeuzAPZZwzkIfCIrsMcFYUOOEgbUhfepBuPMXlckqWxoxoglWyiuvBRLJWOakQqMUvrrwYczCRsPAlnu');
    var put_5 = objectStore_1361.put({f0_i: '<array>', f1_b: '<null>', f2_r: '<array>', f3_x: '<null>', f4_i: '<boolean>', f5_v: '<array>', f6_g: '<array>', f7_f: '<number>', f8_c: '<null>', f9_p: '<object>', f10_t: '<null>', f11_q: '<object>', f12_z: '<null>', f13_r: '<null>', f14_k: '<null>', f15_i: '<object>', f16_o: '<array>', f17_j: '<object>', f18_a: '<number>', f19_g: '<string>', f20_n: '<boolean>', f21_s: '<null>', f22_v: '<null>', f23_d: '<object>', f24_z: '<string>', f25_y: '<boolean>', f26_t: '<array>', f27_e: '<array>', f28_g: '<boolean>', f29_p: '<null>', f30_k: '<boolean>', f31_d: '<array>', f32_c: '<object>', f33_a: '<array>', f34_v: '<array>', f35_v: '<null>', f36_o: '<boolean>', f37_a: '<array>', f38_e: '<array>', f39_o: '<number>', f40_z: '<boolean>', f41_z: '<number>', f42_h: '<number>', f43_d: '<object>', f44_d: '<object>', f45_f: '<null>', f46_n: '<boolean>', f47_b: '<null>', f48_y: '<boolean>', f49_f: '<string>', f50_t: '<object>', f51_q: '<null>', f52_o: '<object>', f53_p: '<boolean>', f54_i: '<array>', f55_c: '<object>', f56_z: '<string>', f57_w: '<boolean>', f58_m: '<null>', f59_k: '<number>', f60_p: '<number>', f61_v: '<null>', f62_o: '<string>', f63_k: '<array>', f64_r: '<number>', f65_m: '<boolean>', f66_b: '<object>', f67_j: '<null>', f68_e: '<array>', f69_e: '<boolean>', f70_z: '<object>', f71_o: '<array>', f72_d: '<array>', f73_p: '<boolean>', f74_l: '<string>', f75_w: '<object>', f76_e: '<object>', f77_j: '<null>', f78_z: '<number>', f79_g: '<boolean>', f80_e: '<array>', f81_j: '<null>', f82_s: '<array>', f83_y: '<number>', f84_d: '<object>', f85_x: '<array>', f86_d: '<null>', f87_c: '<object>', f88_m: '<null>', f89_g: '<object>', f90_m: '<boolean>', f91_u: '<number>', f92_g: '<number>', f93_b: '<null>', f94_j: '<boolean>', f95_q: '<string>', f96_h: '<null>', f97_q: '<null>', f98_q: '<array>', f99_f: '<number>', f100_e: '<string>', f101_c: '<array>', f102_x: '<number>', f103_b: '<number>', f104_w: '<string>', f105_e: '<array>', f106_t: '<object>', f107_q: '<number>', f108_u: '<null>', f109_z: '<object>', f110_m: '<string>', f111_c: '<object>', f112_b: '<null>', f113_b: '<boolean>', f114_m: '<boolean>', f115_a: '<boolean>', f116_w: '<null>', f117_p: '<number>', f118_g: '<null>', f119_y: '<array>', f120_k: '<number>', f121_m: '<boolean>', f122_y: '<object>', f123_d: '<object>', f124_l: '<string>', f125_s: '<null>', f126_h: '<string>', f127_c: '<object>', f128_z: '<object>', f129_w: '<object>', f130_m: '<string>', f131_u: '<object>', f132_e: '<null>', f133_c: '<number>', f134_m: '<boolean>', f135_r: '<null>', f136_v: '<array>', f137_h: '<string>', f138_y: '<array>', f139_a: '<string>', f140_a: '<object>', f141_h: '<null>', f142_e: '<array>', f143_b: '<object>', f144_k: '<number>', f145_v: '<array>', f146_s: '<null>', f147_i: '<boolean>', f148_r: '<object>', f149_o: '<object>', f150_l: '<boolean>', f151_f: '<number>', f152_a: '<boolean>', f153_w: '<number>', f154_y: '<null>', f155_e: '<string>', f156_n: '<boolean>', f157_g: '<null>', f158_e: '<number>', f159_n: '<boolean>', f160_f: '<string>', f161_q: '<object>', f162_x: '<array>', f163_u: '<boolean>', f164_s: '<null>', f165_m: '<boolean>', f166_e: '<array>', f167_a: '<string>', f168_z: '<number>', f169_c: '<object>', f170_x: '<string>', f171_e: '<boolean>', f172_i: '<null>', f173_t: '<boolean>', f174_e: '<null>', f175_c: '<object>', f176_m: '<object>', f177_o: '<object>'}, 'saJdtfTUuAIcyxBTcdSbQtBhfdBGECEjfYCeQOeMEQMAlxVdvsYKofKAbscaVNZOMdzIJcdsJaLvRdweNbKvgcrivHjJdXtaJBAZOipjWfCxwrsMMXAaumpldbGpMTPtceYqGatBdVJwCZtXWiWKpXzRCpbihXXKrssvAoQBlufOxCuetbmxZiIdAooXrRUiJGCrBsVHkxfjNtSMkWXhoANVdeOGxTtRRGEZjNORTIaquVSDIenIfmjLFQdIWqLzpatjbZgoDRqOhYluLQHRYaebnHLvUzLIqQOJicBvbNPRjjAerGPWpbiSaTyDUqqEJTFcWLorhSOdzcogQIArFMZtJqZbzvAhUvcGTXvkaajPEnttVJtLkamMdktOSdBFGvwgQtyzZQoNuDdaNvKWkgEloCUzAGnNfZLYIqWcQysNsJYNpRQKrWigKfKdHwFwtkriHmcDExoOwZguNwdowfRidmKzDnCMDhOLpBzkvcRkZVBEYVZOMWjYocdFFhEOzcCyyknQOZUNqPpBqiWgCubTYMsQrlUOSTIjwytCfTlETzmjEYtHoLWCsFwxTKyIwQBtomdyCdQDsUgiiiwOisnYEtOPdYWPkUDmZSuuKRyIqQEALXPUSuQTbQxsuENxzXvNsGwuFhXQmaWOuhRRtSxpjEZWzljajDItJufwGOrMTHwXwulqGOZRSaIbmErBKNiZetsGUiEpkGeiVWJFEfCzvaCiVUtZosfsbrznEIpMglKjfW');
    var put_6 = objectStore_1361.put({f0_x: '<array>', f1_p: '<number>', f2_m: '<string>', f3_m: '<string>'}, 'JFxJoWfbwZxvZCyNUZilWORkOzJhdJlotvQvprjlqSABYeAAieYpWQYhyneegVpyubsIRYfVKMteCIdVdNiaSqrQLWxzqxdSFIjXKJeGaJujTPRdbjoeXSAEWQBneyoQrWFeffKuHdvPdrJaBwVdzCkFUdnuQbBVCJJIuGptmpcDPsbHRtJqFoJsdsbGDMheQdFVQhSRcBlJlOvsgfGyWxTWexNnWcICTQanlQVxzyNbXZckeKWOKRZxepGZKxqvckfmyIOjdQYrVQSSMlklnAziYnJIbCbMyxuOMLPclwxGBYvtBzIMOEMoWwVdcMKubuIDhIbFitSZtMbggSRGLgymhGPRsnDCQNQNxAGLxvOwzLqWPZTRmnoQjyCflegQEDqrXjqVTscLcnDtEjNfKMBQOYnIXwjOJVtZmPtUFDVkWUonCaGroVtalhtzIlqjQQXiFhxgzUoxRyAtCgKArHLqsmtXlveaYnHJBTLMPWUYelsmZYpeiS');
    var getAllKeys_1 = objectStore_1361.getAllKeys(3591657856);
    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.only('qeMhTXYZXhxbHqrgjjkSNCBXVudAdcsMNZsSNKdjoIcvxjfPwQSqWVsZEvlrpbrnYcpYBmpJXggDvbatpLnDJJstffVclLwWKFtNoIHBiSulhLzynMyqtKhDmcQmXpbrrcuHpFssZXsCttPNIQXESgbMAiAOrhhAlgENDIEitHgwfpdCXtERAJRZrESzkWPzOjPBRqibGRFCVpubAIoBLwEWbMOtdCNJgYFZDGWFqeagdjpexKUOkMUvEKBwIinClvKdDKbDEJIEIfKJMXMXpaKLeSqHDaBoDUjcrxHjlVFihCGcSUxMESuPJOsYdxzLcpABkuPDjfdEUlWujlDipaJfUHnxPRvfDZXpgKeIrIujdeeqqJBumJvIEvSIsOcreoBPUcqBJXtwNQGaoPfiPRPSBzNLTqIcxNZnrWydseoCmfWpIWLUAVBqwcMzcAJrfbExnKlXZaENeDjjNClGupmqZiGoCdOJqFlDPoTuqIiLSJBCBtbjkgLxZRrCMtzRKZhBsfpOtYfE');
        get_2 = objectStore_1361.get(KeyRange_14);
    }
    catch (e){
    }

    txn_2051.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2051.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2051.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2052 = db.transaction(['objectStore_1363'], 'readwrite', {durability:"relaxed"})
    var objectStore_1363 = txn_2052.objectStore('objectStore_1363');
    var put_7 = objectStore_1363.put({f0_l: '<boolean>', f1_w: '<object>', f2_l: '<string>', f3_z: '<string>', f4_g: '<null>', f5_b: '<boolean>', f6_j: '<string>', f7_s: '<number>'}, 'yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT');
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP', 'gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP', false, true);
        count_4 = objectStore_1363.count(KeyRange_16);
    }
    catch (e){
    }

    var clear_4 = objectStore_1363.clear();
    var clear_5 = objectStore_1363.clear();
    var put_8 = objectStore_1363.put({f0_p: '<object>', f1_a: '<object>', f2_d: '<boolean>'}, 'gjRUoPStqOkEaTHErhYSPNcIDBcsNYgBVTYefuxwPxgxXIMGyJzihoSpovITdxCiQUUwtGwqmvClZhAcpHrNvrSsFpchTuYINULpoIPlLKkYTaZVLbTrwHEaqFyDNhOXAYrmxXuaNcfPenCfOIiyl');
    var put_9 = objectStore_1363.put({f0_r: '<object>', f1_x: '<object>', f2_t: '<null>', f3_w: '<string>'}, 'KdPpvgHMTNJnkXhrqJZvIHhQnlhhvkCDfIKNNofuWtMnGcxgAJrOZSSsHENMytwZcadSXJEMCSVVtOKnfQavVIXJQGydnLipsBiAVtSVjvdRRrcVcKoJhwdlZyAvATHVSAUpWJXMsODIFzEtmlVLCNUoNDPTIWlvJeBgZBSLCvKFvNvWmVeYCjQyCVtCGdymXposfYMFufUcPFCJwovFHvatjUDwFHDiMSTPefzAflctlcXSQZzHykpKckitzgXqQAUDqKCF');
    var getAll_1;
    try{
        KeyRange_18 = IDBKeyRange.only('gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP');
        getAll_1 = objectStore_1363.getAll(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT');
        getAll_1 = objectStore_1363.getAll(KeyRange_19);
    }

    txn_2052.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2052.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2052.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2053 = db.transaction(['objectStore_1361', 'objectStore_1363'], 'readonly', {durability:"default"})
    var objectStore_1363 = txn_2053.objectStore('objectStore_1363');
    var getAll_2;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP', true);
        getAll_2 = objectStore_1363.getAll(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('KdPpvgHMTNJnkXhrqJZvIHhQnlhhvkCDfIKNNofuWtMnGcxgAJrOZSSsHENMytwZcadSXJEMCSVVtOKnfQavVIXJQGydnLipsBiAVtSVjvdRRrcVcKoJhwdlZyAvATHVSAUpWJXMsODIFzEtmlVLCNUoNDPTIWlvJeBgZBSLCvKFvNvWmVeYCjQyCVtCGdymXposfYMFufUcPFCJwovFHvatjUDwFHDiMSTPefzAflctlcXSQZzHykpKckitzgXqQAUDqKCF');
        getAll_2 = objectStore_1363.getAll(KeyRange_21);
    }

    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.only('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT');
        get_3 = objectStore_1363.get(KeyRange_22);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('gjRUoPStqOkEaTHErhYSPNcIDBcsNYgBVTYefuxwPxgxXIMGyJzihoSpovITdxCiQUUwtGwqmvClZhAcpHrNvrSsFpchTuYINULpoIPlLKkYTaZVLbTrwHEaqFyDNhOXAYrmxXuaNcfPenCfOIiyl', true);
        get_4 = objectStore_1363.get(KeyRange_24);
    }
    catch (e){
    }

    var getAll_3;
    try{
        KeyRange_26 = IDBKeyRange.bound('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT', 'yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT', false, false);
        getAll_3 = objectStore_1363.getAll(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('KdPpvgHMTNJnkXhrqJZvIHhQnlhhvkCDfIKNNofuWtMnGcxgAJrOZSSsHENMytwZcadSXJEMCSVVtOKnfQavVIXJQGydnLipsBiAVtSVjvdRRrcVcKoJhwdlZyAvATHVSAUpWJXMsODIFzEtmlVLCNUoNDPTIWlvJeBgZBSLCvKFvNvWmVeYCjQyCVtCGdymXposfYMFufUcPFCJwovFHvatjUDwFHDiMSTPefzAflctlcXSQZzHykpKckitzgXqQAUDqKCF');
        getAll_3 = objectStore_1363.getAll(KeyRange_27);
    }

    var count_5 = objectStore_1363.count();
    var getAll_4;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('gjRUoPStqOkEaTHErhYSPNcIDBcsNYgBVTYefuxwPxgxXIMGyJzihoSpovITdxCiQUUwtGwqmvClZhAcpHrNvrSsFpchTuYINULpoIPlLKkYTaZVLbTrwHEaqFyDNhOXAYrmxXuaNcfPenCfOIiyl', false);
        getAll_4 = objectStore_1363.getAll(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT');
        getAll_4 = objectStore_1363.getAll(KeyRange_29);
    }

    var count_6 = objectStore_1363.count();
    var getAll_5;
    try{
        KeyRange_30 = IDBKeyRange.bound('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT', 'gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP', true, true);
        getAll_5 = objectStore_1363.getAll(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP');
        getAll_5 = objectStore_1363.getAll(KeyRange_31);
    }

    var getAllKeys_2;
    try{
        KeyRange_32 = IDBKeyRange.only('yaLAccJZKJMrbPsDAIPfVNdgyyslBuADdTEHOTOoFDhzMZtHVASHawWOOgBCZnMghyXyhuKGsbxqNtFkJCpEcfmFwsGzZNGGVfogOyORFmYYbEXzczYqmsgAQhJVHeCxtuIhlxTwoxNoFWDqukGqSzffMkBsmuXKmVRqXsZyxayASRNrZnGyPLsjkDnFKCeJzPQdIJQoKkuEeoreMNqGeqftAmskWhcYiwSAT');
        getAllKeys_2 = objectStore_1363.getAllKeys(KeyRange_32, 3406746047);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('gEWFpAvOgEjRNmVIcwPNcHRBLdGVCOCnzXZvKTTVeGXAPdobiawPxBUZfUkunSebYsnEzfYsZuLVthYuAIAUpEGiOIhqhZwMIEAPXIsCGSbJbWAQNHmypmRislVFRVTqEXELapMwFdMAYFajthSGACtTcRUMLuiNBUoOZwBJRdaCMrUuTWqkCIUiVwXrIQdKKwEgmYDaJJuGqspyHLcJNmeqQtGVKwNCOMFqKKIKaRWwKqooOwcVZjmDCLZJCEVDYaP');
        getAllKeys_2 = objectStore_1363.getAllKeys(KeyRange_33);
    }

    txn_2053.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2053.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2053.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2054 = db.transaction(['objectStore_1362'], 'readonly', {durability:"strict"})
    var objectStore_1362 = txn_2054.objectStore('objectStore_1362');
    txn_2054.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2054.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2054.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9474')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};