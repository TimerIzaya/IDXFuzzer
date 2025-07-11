let db;
const openRequest = window.indexedDB.open('str_2641', 7444970376989671)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1127', {keypath: 'HTEALOHIRLAFXofKqLNHLihMQmInJWwHGpZkEApTZKERWjsfVVxvuRDRfDBgwuYyffmyBUkFwTmdgtyZkKhKVpgSOTLTtjLpZbdwcnHGnucmGVDDopOBIagQEFDxjdkMpNVAhsivrbrLysKyrprMAPajHBrdqjtzzSLcmfarrniXRCRlForIvnxtEGmKAMARvjcYlZOuIRdTehfIYvxexYmQKGrSRujlnOWjMSVzAKPXEBLSDaejhrUFKcOnVXRptUwexdqhhjgAUuXOCYfoLZRwNNHmjohTqTQPYqUzMxPONMUPAbCpeVcGYQaspwdplzppJUznfQrXBZqqJiPVTVWKjNosCRDyRhvXpEZlHqdtcEqoecwgKIczWqIIyEJrkGlQYxzUZafAwBuHTjrffRPfEHoLVnpSiDjHUcrCUSbNBqoEIgIQxhLfvAqXZhphlBcqGAYRTZQyMxiDiBRQUXFRrKhVKkmTJYNgPaKhZwPEeyPOLTTNGzckmWVtidLjaHMOmVlmoxQAhtKdqRItQJHfSvoEtCXkYtJAZFwzkAtfzgFZJCJgQWVAShNSzOHOuWfoWBVheDLUmtHIsltanYgddAgZaYBUEuHTeuxxVnWCElrUevWcdYwOoGncSyuKKXXoGIijLrVRKyFiIaeYQCTUtcHiwPdriUwTTdyGzpyEHVlfwsTAMqPNHlfIDQpogwkJgzEAjZtXRJKFPqOUJtbejrryWmYqfxqBjIMiUBtKHiPhQhSJSoikOUECntuHrkFSfPdSMsBppZNtpDwDIIUOsZPEzYZvFRbzxhQJSOcnkXxF', autoIncrement: true});
    var index_746 = objectStore_0.createIndex('index_746', 'test', {multiEntry: true});
    var objectStore_1 = db.createObjectStore('objectStore_1128', {keypath: 'TwezlXAUzbZGzCuLnFzEMwTHYWngEJEVQoWQnYqbwhnEACfriebrQgxNMWMTHhmSbcFRZqRWAimRMFAHREKRolAwiMqAoHWwvVdtCBHieWKFDEwGhcRRBXiOzeWJrwHKGORHwLFQjzXtlyGJaxIQatlCRNKevqYzLtXbrJsx', autoIncrement: false});
    var index_747 = objectStore_1.createIndex('index_747', 'test', {multiEntry: true});
    var objectStore_2 = db.createObjectStore('objectStore_1129', {autoIncrement: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var add_0 = objectStore_1.add({f0_z: '<array>', f1_t: '<string>', f2_s: '<null>', f3_i: '<number>', f4_p: '<boolean>', f5_z: '<array>'}, 'mEvEtcCXOdvTVDtsADvCvZIoFOuTdQjxmqAEXqDJbwTwrrVdrMEZkEMNkNyRbdApGLvLdhgMyacmWbTVjjsdlErhTDJqaIzQHhNpBARsEDqjBdcUtehunpPNwMyfpdruEKsiaZDVKjnsGTOOmiXdMqmIbgHTyHIzWcLyVzuzeEqJFbRwInxAEWECcmNCuhTBvNrhEVLYQygPfjcuhUVzzx');
    var objectStore_3 = db.createObjectStore('objectStore_1130', {keypath: 'BhbextNDqEWtGySHRXOzGqqAIIgblaLHBjdYaekDqOCrVssJSkMUdqYqcSJZpqinIhXSevWtptUSrvwaGGYpGcIwVrNJKxnYqwRGorcRDeoaYyImPuqrKsxRnxyzIaWPwXOkWunbCfzrNcMNwMaYSccJQeFUkflfecxFWoCdwDFKboQANVhIqxVvuWNUgEZWuOkmtOdwaGOKlPvFwfnCztjrFQpWObobWWloyxtpsWjnbrOLLzEZbqyLJQEazvIXeWCnePXzmaDMJIBYEjcuUSTFgewYlKbxaHrREaaFmGiBRqMVIJzUUrbeADKXyaVHfDoGXmeWlBWawiuHrtXOkFtBTqaNKcnekSlhFHNpOZxdPpffUntmzEJJPhBvCMzUGRlTYTMXOoRqvRTBBfLVFBXlrqVRXLkYGEoiRWMzivcpfDlszROlXLllzLrWjtAJlUrNhTVnmBTlBRWmEzxIUYyhFvHhqywaXPIIGlJudnQQKGiNYcHObzRMxsXsaVGeMyqOwZGeyiCYOzwPiVoZsYlketNJRbCAAyrsbGsKXQAKpWtZDNcFURPdHONkdgJIKIrrAcPRaztrsPAHgBQuLmOIpYsKegXjUjxGcNpFpdCOWUshDNexxGgFVNRJhSpSkhknaLKXkcwBnxoTQSJjqjAcZjaYCPKaSzlOkqNVQrMnzKPAXIAOrOqHppRrufWXgJKvghOWroGAMiDSwIVVQJnNKnFhksvXgEIvkKPwhjQDKkPjHCoJaTUEEscFwrjBIHQPlSMwiIHPCEOdbIPtsTS', autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_1131', {autoIncrement: true});
    var index_748 = objectStore_4.createIndex('index_748', 'test', {unique: false, multiEntry: false});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('mEvEtcCXOdvTVDtsADvCvZIoFOuTdQjxmqAEXqDJbwTwrrVdrMEZkEMNkNyRbdApGLvLdhgMyacmWbTVjjsdlErhTDJqaIzQHhNpBARsEDqjBdcUtehunpPNwMyfpdruEKsiaZDVKjnsGTOOmiXdMqmIbgHTyHIzWcLyVzuzeEqJFbRwInxAEWECcmNCuhTBvNrhEVLYQygPfjcuhUVzzx');
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_p: '<array>', f1_m: '<number>', f2_v: '<string>', f3_i: '<boolean>', f4_h: '<null>', f5_j: '<object>', f6_k: '<object>', f7_o: '<array>', f8_h: '<boolean>'}, 'BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO');
    var put_0 = objectStore_0.put({f0_z: '<array>', f1_a: '<number>', f2_y: '<number>', f3_p: '<number>', f4_i: '<boolean>', f5_v: '<object>', f6_f: '<array>', f7_s: '<boolean>', f8_n: '<array>', f9_i: '<array>', f10_h: '<boolean>', f11_u: '<object>', f12_c: '<object>', f13_t: '<array>', f14_y: '<number>', f15_n: '<boolean>', f16_t: '<boolean>', f17_g: '<string>', f18_d: '<array>', f19_x: '<null>', f20_v: '<null>', f21_t: '<null>', f22_w: '<array>', f23_o: '<object>', f24_e: '<number>', f25_h: '<boolean>', f26_s: '<string>', f27_j: '<number>', f28_t: '<null>', f29_w: '<string>', f30_j: '<string>', f31_j: '<number>', f32_f: '<boolean>', f33_s: '<string>', f34_h: '<object>', f35_e: '<object>', f36_f: '<string>', f37_g: '<number>', f38_x: '<null>', f39_v: '<string>', f40_j: '<boolean>', f41_s: '<object>', f42_o: '<array>', f43_m: '<object>', f44_t: '<null>', f45_t: '<number>', f46_z: '<number>', f47_v: '<object>', f48_j: '<number>', f49_f: '<array>', f50_q: '<object>', f51_b: '<number>', f52_d: '<string>', f53_x: '<null>', f54_x: '<null>', f55_q: '<boolean>', f56_h: '<null>', f57_a: '<array>', f58_l: '<object>', f59_r: '<array>', f60_p: '<object>', f61_h: '<number>', f62_l: '<number>', f63_y: '<boolean>', f64_c: '<object>', f65_z: '<null>', f66_z: '<boolean>', f67_z: '<number>', f68_j: '<boolean>', f69_x: '<number>', f70_m: '<null>', f71_x: '<array>', f72_g: '<number>', f73_f: '<null>', f74_n: '<object>', f75_j: '<object>', f76_l: '<object>', f77_h: '<number>', f78_a: '<array>', f79_p: '<null>', f80_u: '<number>', f81_f: '<boolean>', f82_y: '<null>', f83_f: '<boolean>', f84_y: '<number>', f85_v: '<array>', f86_d: '<object>', f87_r: '<string>', f88_p: '<array>', f89_q: '<array>', f90_v: '<null>', f91_r: '<null>', f92_l: '<array>', f93_u: '<number>', f94_c: '<array>', f95_j: '<number>', f96_n: '<string>', f97_c: '<object>', f98_s: '<array>', f99_g: '<number>', f100_r: '<array>', f101_c: '<string>', f102_w: '<number>', f103_x: '<object>', f104_o: '<array>', f105_a: '<array>', f106_w: '<null>', f107_p: '<array>', f108_l: '<object>', f109_x: '<null>', f110_u: '<number>', f111_w: '<string>', f112_w: '<boolean>'}, 'MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_1700 = db.transaction(['objectStore_1131', 'objectStore_1127'], 'readonly', {durability:"relaxed"})
    var objectStore_1127 = txn_1700.objectStore('objectStore_1127');
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', 'BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', true, true);
        getAllKeys_0 = objectStore_1127.getAllKeys(KeyRange_2, 2118860904);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv');
        getAllKeys_0 = objectStore_1127.getAllKeys(KeyRange_3);
    }

    var count_0 = objectStore_1127.count();
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', 'MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv', true, true);
        get_1 = objectStore_1127.get(KeyRange_4);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.only('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO');
        get_2 = objectStore_1127.get(KeyRange_6);
    }
    catch (e){
    }

    var count_1 = objectStore_1127.count();
    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', true);
        count_2 = objectStore_1127.count(KeyRange_8);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', false);
        get_3 = objectStore_1127.get(KeyRange_10);
    }
    catch (e){
    }

    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', true);
        count_3 = objectStore_1127.count(KeyRange_12);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', 'MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv', true, true);
        count_4 = objectStore_1127.count(KeyRange_14);
    }
    catch (e){
    }

    var getAll_0 = objectStore_1127.getAll();
    var count_5 = objectStore_1127.count();
    var get_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv', 'BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', false, false);
        get_4 = objectStore_1127.get(KeyRange_16);
    }
    catch (e){
    }

    var getAllKeys_1 = objectStore_1127.getAllKeys();
    txn_1700.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1700.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1700.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1701 = db.transaction(['objectStore_1131'], 'readonly', {durability:"relaxed"})
    var objectStore_1131 = txn_1701.objectStore('objectStore_1131');
    var index_0 = objectStore_1131.index('index_748');
    txn_1701.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1701.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1701.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1702 = db.transaction(['objectStore_1131'], 'readwrite', {durability:"default"})
    var objectStore_1131 = txn_1702.objectStore('objectStore_1131');
    var add_2 = objectStore_1131.add({f0_a: '<number>', f1_e: '<array>', f2_g: '<object>', f3_n: '<string>', f4_o: '<boolean>', f5_j: '<object>', f6_s: '<object>', f7_h: '<object>', f8_j: '<array>', f9_u: '<boolean>'}, 'tWwDbmXjGevpmtCmPkcSdQGhILVDWJUNBCNWfHIKzntaWJmgTZtVIEHkIuIRijPkwxjgroTwxyYInVNqHgdjCQVxDPUKrkAFVryUhNRfCUgzlzgQplFcGvbxbwukUhmsOBoSHxYNhFRJrYzLfXHKkgTAXoEqlJBooisrJriCygxabVrORqcykyuQFXvKgmRqSgVwkPQqicCbTPZIuhkgdSjSrSkwPCifuNYzsYjcQCHkUQHdLBMWPTHvyYnAlRRWFAozVZSbVJLELQYkGATLKfeySbMWevnofKrBDqfgMYbEmrDEjQXlmNIEBqgXHwkaMenEGMtzQQfkCIhWFpuJZNsRvPJfkshnCHCPTySAwhzQchqkjnlpoetUiESBGSuQLTfUyULxzqLribnHmZYaPzZXKdXCbhxYVlbNxsBYjeUxgrOXhXjwpKwqnwbKtBcYzNMtbSMzspxEKimFcEkiOketYFjbdSabMLESwxjNoQapeUcERKvipizsLyeMlrnXHqXlhpOHyDuPuVKYdebOXooyzBOWzSIYWBqDEF');
    var add_3 = objectStore_1131.add({f0_l: '<string>', f1_t: '<number>', f2_c: '<number>', f3_u: '<array>', f4_d: '<number>', f5_x: '<string>', f6_c: '<string>', f7_r: '<null>', f8_g: '<number>', f9_j: '<array>'}, 'bbPHuQTnhPKweNMurkKMwZkqOEZfDQyNsIxOrWlZIwrlkvQHlcyBmIiuinJtkqdCzockiwkhcEJaRtfTRiwnOdDDLpywYPPtVFgBEcLISYsKHVJfTapwFmBxbStigbGleClHeXWQUGJUUXnJQRnyhACWfzCAGsgmzWwETKbOekexAOnzKDxCIMgUYDYqNRxpPIvWkQgUWOjumCOuVjANlstvICGXRRQmbjPppOLdQeAruPUeklBOlbkVBCctgiSBAxjAluyvjApPZnQhRvfZmBEyulTKWzNgeZsjeXL');
    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('tWwDbmXjGevpmtCmPkcSdQGhILVDWJUNBCNWfHIKzntaWJmgTZtVIEHkIuIRijPkwxjgroTwxyYInVNqHgdjCQVxDPUKrkAFVryUhNRfCUgzlzgQplFcGvbxbwukUhmsOBoSHxYNhFRJrYzLfXHKkgTAXoEqlJBooisrJriCygxabVrORqcykyuQFXvKgmRqSgVwkPQqicCbTPZIuhkgdSjSrSkwPCifuNYzsYjcQCHkUQHdLBMWPTHvyYnAlRRWFAozVZSbVJLELQYkGATLKfeySbMWevnofKrBDqfgMYbEmrDEjQXlmNIEBqgXHwkaMenEGMtzQQfkCIhWFpuJZNsRvPJfkshnCHCPTySAwhzQchqkjnlpoetUiESBGSuQLTfUyULxzqLribnHmZYaPzZXKdXCbhxYVlbNxsBYjeUxgrOXhXjwpKwqnwbKtBcYzNMtbSMzspxEKimFcEkiOketYFjbdSabMLESwxjNoQapeUcERKvipizsLyeMlrnXHqXlhpOHyDuPuVKYdebOXooyzBOWzSIYWBqDEF', true);
        get_5 = objectStore_1131.get(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_1131.getAllKeys(2574059853);
    var getAll_1 = objectStore_1131.getAll();
    var count_6;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('tWwDbmXjGevpmtCmPkcSdQGhILVDWJUNBCNWfHIKzntaWJmgTZtVIEHkIuIRijPkwxjgroTwxyYInVNqHgdjCQVxDPUKrkAFVryUhNRfCUgzlzgQplFcGvbxbwukUhmsOBoSHxYNhFRJrYzLfXHKkgTAXoEqlJBooisrJriCygxabVrORqcykyuQFXvKgmRqSgVwkPQqicCbTPZIuhkgdSjSrSkwPCifuNYzsYjcQCHkUQHdLBMWPTHvyYnAlRRWFAozVZSbVJLELQYkGATLKfeySbMWevnofKrBDqfgMYbEmrDEjQXlmNIEBqgXHwkaMenEGMtzQQfkCIhWFpuJZNsRvPJfkshnCHCPTySAwhzQchqkjnlpoetUiESBGSuQLTfUyULxzqLribnHmZYaPzZXKdXCbhxYVlbNxsBYjeUxgrOXhXjwpKwqnwbKtBcYzNMtbSMzspxEKimFcEkiOketYFjbdSabMLESwxjNoQapeUcERKvipizsLyeMlrnXHqXlhpOHyDuPuVKYdebOXooyzBOWzSIYWBqDEF', false);
        count_6 = objectStore_1131.count(KeyRange_20);
    }
    catch (e){
    }

    txn_1702.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1702.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1702.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1703 = db.transaction(['objectStore_1131', 'objectStore_1128', 'objectStore_1130'], 'readonly', {durability:"relaxed"})
    var objectStore_1130 = txn_1703.objectStore('objectStore_1130');
    txn_1703.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1703.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1703.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1704 = db.transaction(['objectStore_1129', 'objectStore_1128', 'objectStore_1127'], 'readwrite', {durability:"relaxed"})
    var objectStore_1127 = txn_1704.objectStore('objectStore_1127');
    var count_7;
    try{
        KeyRange_22 = IDBKeyRange.bound('BQdLOQWoeEwUFyHmzSjvgzDjvPithYpHsfFHphIfDhrEpDCFfdcRiLVgIfCVRejaRxddzpAPjtQzdGUJQQNARlCjzoxCbbtZSkVzZUJdWbXORpCqbqPkRFZRGJGiQwlIsEZgulzwwAXpDXNKhQHFyIFVlSYjjCAFuvBiSrZzqWUrhrsLhGjpPDFDRJdRwfPSSQllTfLauHlLiipXUbHBXBOqoIyeqGUHaDOZaEeVXvojRJBGMYTCeDuMKxubsPTJiQLQfeBkzSWrPCIJWZPmHYoOqSocTzkUZPxDudWWPGjQgNUEGdoQjFhJpkDcUFwBdBKPOPHsMjXUrqnTHuOLVXPUkITuIQZpMWQjoXSzXtejISissPfBwHJnXqHaQiTnooUNRSrIwydJCKoKHnAoUmVeNcrBmByyNiqnJOJcGEnydpDJxXLTkazZYEJfcwkTPbZRekFgGlfQfHjmyCsZrYnAsRnuvkDkQdotRnyshaRDuLbNqefussyZoAmdFKUujVYiXRpPlfqhCgaWREVMZitIgdIvWJaYLAqQgQRHMQEFzHZqzaKUsYZuCDGzVzYkNtXPULgDpxzHbGNVrwgxQoTXSsjwJgbcfOyYkzonBtqRLaQWCFxiSDbYBjkwXMTADQKuUUQWkGwhiWclsO', 'MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv', true, true);
        count_7 = objectStore_1127.count(KeyRange_22);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('MQZfyYZDWwKMwKXgnfvthZQAbQBIUHHxsLQXsQMlhiLGRcuBzRkdBPaEKbgcMqdNtYQOguIWVXzMVLmIjPeFseQRbfqyBZDTUAmcMoJdqQERAfjCkcfJMzoukoXldWnxaQoVOJxiqUJRlRufGDRdrcoeDYWQphnOXmIGskioGDihpalDTpBzafMqgYwuqPFyEDyYJzqENGyUQsIGZKujxWfmeWuXugeLOYNeyRhxxLVjfQypHyXgGvoMiXkHLCEXoUIv', true);
        delete_0 = objectStore_1127.delete(KeyRange_24);
    }
    catch (e){
    }

    var add_4 = objectStore_1127.add({f0_d: '<null>', f1_x: '<number>', f2_m: '<number>', f3_q: '<array>', f4_b: '<boolean>', f5_b: '<boolean>', f6_h: '<boolean>', f7_e: '<number>'}, 'oBsnPhexQmpdxVeOynGlONAjxYRIWSwWrbbWZuljRMJncUgqNRTWvZvqSLUISvcxrcKbbiqXxWreInmXOzcgTvPUDtdQTkJlhsYVwiAKTxLyeEreQnWIKaBWTfTldALtdjLqUWTHxCPHjYlmahMcBYdiXKJypMyZhmWkIPJhYQsGbzkidVkPutmOGmNtukLzSaaMPogIbkiKquTAfNOOBEnlijRkhyPrYJTLkSiwyAvzFVOxaNPknUNmOpkVkCTFJjMvlvnPnGAzOOQeDakxFyXxlsCXYIgNrpOqDraxqUREsIhtBtJmjolIYPRJsAnAHJdmlKFNANytZqsIwdZmDKzGztvgiwklZJXxlmpnWJYimGtPSTQgbfvaxBUHtGGniWMBRnpnFCvZbJTytTbmDepjPZJVoszwgpNOYLUiVtiIphhIPuCbXSsSElXivtqDdnVoSaiXeYSaiZlJBKoFmXlzwMYtKiutasiaWPfssCwQgvTGkxkbiluQwIokkgLteqcTPBJuVxoxxqPILYxgibHYbzXerMFxIQtQSHmXMNpxTjgDiJVvZvEiVCgIBsldIVekcftDSkFzZFcRwheZdSCYUJylSQBeuhQpjDzGhTbLJzOgSAYtMJgNcCnzavcsCdTYZquYsfJoVsNQjmtymePHm');
    var add_5 = objectStore_1127.add({f0_p: '<boolean>', f1_o: '<null>', f2_w: '<object>', f3_l: '<object>', f4_q: '<string>', f5_c: '<boolean>', f6_c: '<string>', f7_j: '<string>'}, 'tdebKGaIBGuZSEjwPRyiwSeQcWpyFkRibTORLmCXhCrVpvLhknIhwOXWDNDTpazOxFTiNhCwioPpgHlfSpeiupfMOFXRVRafkqHkljEiygtBkGQtagTsltqBcSjRmDHNXjeRpMSlrHDccbvPrJgMVctseLFbZUUPgnoApPbMrbncaoEOYoxDjWOORZfAXsHSkrWbQVkKynqLVbGjsSKvNYuNGVoDMnINNxPbnOByqqIEhzbHCpXGHhCouHtIfvbVAiFw');
    var add_6 = objectStore_1127.add({f0_p: '<array>', f1_z: '<null>', f2_v: '<object>', f3_r: '<boolean>', f4_m: '<string>', f5_j: '<object>', f6_z: '<object>', f7_x: '<array>', f8_m: '<boolean>', f9_p: '<array>'}, 'YwZYvTnAqYajIIdqExBwfJbYWHSyMliahIVSrPXSdwYmdtwhloHsjenDrkFYaMXTWEUIYYCoMmNXTdeitbeLVOioibGpccQqPgGpVsDDptlaqooDSmyojtyAsZbKbWgkjPyvkMKhRUlMSmYubkfjmzwninpQDHPablCobgaftqDalNNFqEkBwUgDMOCyLXSjGsuopslwrbLIFEhZdvlZGoxQovzoHITAtpgKIodEuPMcEiHNSExQCCROzBCQOlVuFxMHkrGeuyzTzbDpXRcOKhUWQYtZBsuKzdbPOcOINZ');
    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('oBsnPhexQmpdxVeOynGlONAjxYRIWSwWrbbWZuljRMJncUgqNRTWvZvqSLUISvcxrcKbbiqXxWreInmXOzcgTvPUDtdQTkJlhsYVwiAKTxLyeEreQnWIKaBWTfTldALtdjLqUWTHxCPHjYlmahMcBYdiXKJypMyZhmWkIPJhYQsGbzkidVkPutmOGmNtukLzSaaMPogIbkiKquTAfNOOBEnlijRkhyPrYJTLkSiwyAvzFVOxaNPknUNmOpkVkCTFJjMvlvnPnGAzOOQeDakxFyXxlsCXYIgNrpOqDraxqUREsIhtBtJmjolIYPRJsAnAHJdmlKFNANytZqsIwdZmDKzGztvgiwklZJXxlmpnWJYimGtPSTQgbfvaxBUHtGGniWMBRnpnFCvZbJTytTbmDepjPZJVoszwgpNOYLUiVtiIphhIPuCbXSsSElXivtqDdnVoSaiXeYSaiZlJBKoFmXlzwMYtKiutasiaWPfssCwQgvTGkxkbiluQwIokkgLteqcTPBJuVxoxxqPILYxgibHYbzXerMFxIQtQSHmXMNpxTjgDiJVvZvEiVCgIBsldIVekcftDSkFzZFcRwheZdSCYUJylSQBeuhQpjDzGhTbLJzOgSAYtMJgNcCnzavcsCdTYZquYsfJoVsNQjmtymePHm', true);
        get_6 = objectStore_1127.get(KeyRange_26);
    }
    catch (e){
    }

    var clear_2 = objectStore_1127.clear();
    var count_8 = objectStore_1127.count();
    txn_1704.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1704.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1704.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4545')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};