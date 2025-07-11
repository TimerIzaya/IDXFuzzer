let db;
const openRequest = window.indexedDB.open('str_6042', 3536090696074405)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2067', {keypath: 'bEAEROxbXwXMSflZFpYYGusZHHmChwKyWGswOzLPvrDaIWeVAWiIqkMpfksbLFgsZQdYSDbZVTVed.nPNhwaXctWpOyKIWjyjzhwBIWslqAnOJjkrSNoCIkicAWyVNrBuQjtLHvgKOePvhHIdolPUsEDwpvbvmqoBPAlPsfiZrLKfkOStbigJQAscLRoJGOeAZAuxDuNZutsjzWzwHACowcqSzSfmnByFHIHSnhayRpSQJqYhqAANUNtbwbotWTjXogCMgKqqJPebhsietVWJDpDvwmoyaPRiCHGrZbshOboPIzYcNerWssKzXgCuPLRWFLrOcRSZLQmIQQbDndEDNaNYMOSqdfJZsOPyHhlcTFMmJOxlAWNvIARqvMHqRhwoJqLUagRolBiAzdtxUgVUCsmkMZNSXbMuARuIVtorETGprpknTVBcvwTkDgscxQpdMuOAvHABVlGMsZFowrSioRQMkZjJRSAwUzWBmjWkZfZAJzMOixqCzOYvyvEAjwMMvaAXmXJWYuIxEhboeKDkLoFaBTKKNOPupLzx'});
    var objectStore_1 = db.createObjectStore('objectStore_2068', {keypath: 'dNNXHLqWPdTUFmvkZwpOVWhlVdFwpTxOdkIWhTLeleyfaEXtECjSgILcYkeoPWwVwDDpuOYbHDJlreSHTmVcdQlKePajjGyBQSLnGrjKlqdpvkwzJwMzAufbReeFkAYGEVBEShTgnaOpsjkHTcHMWJqnunXIZNEGLrRkOFoMSmwuhGIOhnIxMwzErGiHydtxDSYZvOKWQkeinSGSaNLFMopecWaiqZBEZpNQDELBkQlDfteShMjCYXfhDPkyahMhRorWUEeSlCCgLGlHsBcNzvdHlHZmgaYLSbvkNVuZfbXnpXlMJBcDfHxlDCbFfXnZNPtpdBcUIatzGZxmewMimWElFxoVSBwFitWufPxCepdzmAAhcpplRNIGUtZgrESMlgPLvqXWuHtpTptLxiKfCxxmIcsTFWqUsJjINPYKgensksaGevGOLgeqhsKalqdLwocunyAIlWqxfahAhVuMhNyjxcZeELqSRDHIDgEFKnCwJVfJsHMOxCchNGY', autoIncrement: false});
    var put_0 = objectStore_0.put({f0_l: '<null>', f1_c: '<array>', f2_v: '<boolean>'}, 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd');
    var clear_0 = objectStore_0.clear();
    var add_0 = objectStore_1.add({f0_g: '<boolean>', f1_t: '<object>'}, 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU');
    var clear_1 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_2069', {keypath: 'LhDlaUItVrHfxsSgYffrPGDGaxCFpjuXKfkAOJfthaTnDjEvvkZIjyZQJTltirzKkzPKKBLdeaNQEsuRcwUJzFTFOSHsrFioxaqZDxdLUAjcNgwECPrQsmVlDCSqhVvlVwALDPeBNHwaeuXgqIkTptWyKdyCmYyKZOqGZNwnWALwVzCXKzSywPSfluJqwrxjKBHiLggIseSoUycwUKyVSqdlUdJNQtBfsOvAFUWSQDsxofWRLIxkAZjWEzmdvjxxtbudhKhxYeZssLsLQVoiqdTClnrWhYHfindgupYSYcSEVXGLBgvlFiIiEBcqAgNcJQsrUvsFPKxOHbjhxBBaNPGoytcziIWVTOaXuiisuHNckAcPIpDRfxCAXEpydxesNmSNaAQPbJCYzZwvvpEYgGAhGYPZdpmcZKVhNQjZPH'});
    var clear_2 = objectStore_1.clear();
    var objectStore_3 = db.createObjectStore('objectStore_2070', {keypath: 'BDQgIsqFbPJogmeZpMjuxSjwQsyHixgJVYijbyLQsrBEXQGYZenqBmPOmLDyHyishGarBBTtalBercDaoIRZDiEYyoZpuJLjMzwHKBdNFsyNbOqmLqwwtzcgrClkKXxpnCavFHtgMdLpHavrnhMKyMRXYAGhNXLminnJTXwjYlgHQJAxkXMmABfCbVTgshlJMJfGBbWzrWMYvpCsVuvjgVRfxAkpiFucANhjKtZPbnMwLxzlyEqjnU'});
    var clear_3 = objectStore_3.clear();
    var clear_4 = objectStore_1.clear();
    var objectStore_4 = db.createObjectStore('objectStore_2071');
    var index_1378 = objectStore_3.createIndex('index_1378', 'test', {multiEntry: true});
    var clear_5 = objectStore_4.clear();
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', true);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var clear_6 = objectStore_1.clear();
    var count_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', false, false);
        count_0 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var put_1 = objectStore_4.put({f0_p: '<string>', f1_n: '<number>', f2_x: '<array>', f3_y: '<array>', f4_d: '<boolean>', f5_u: '<null>'}, 'LCFNBdKhdytEnSolJvxKQurEDYyMfvVfWIogAqHWlLgMQBEJEpVPExiQCPmGGpFCOhXmOjaZOuAEFScmxGGgvYyptzYLnlUlCcjAaWnKJvfYtNagYSjUQwrHhgciYqLANjyRnUgCuxinyRmngFVcFbEgtGrbWBSKRgQqamUxvqYuCJPWHCoaepMakMDbjYcyNqgHNLWjxxmQukiRJkBpbhWbHkagekv');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3070 = db.transaction(['objectStore_2068'], 'readonly', {durability:"strict"})
    var objectStore_2068 = txn_3070.objectStore('objectStore_2068');
    var getAll_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', true, true);
        getAll_0 = objectStore_2068.getAll(KeyRange_4);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU');
        getAll_0 = objectStore_2068.getAll(KeyRange_5);
    }

    var count_1 = objectStore_2068.count();
    var getAllKeys_0 = objectStore_2068.getAllKeys(2109120604);
    var count_2 = objectStore_2068.count();
    var getAll_1 = objectStore_2068.getAll(3621916639);
    var getAll_2 = objectStore_2068.getAll(836286619);
    var count_3 = objectStore_2068.count();
    txn_3070.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3070.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3070.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3071 = db.transaction(['objectStore_2070', 'objectStore_2068', 'objectStore_2067'], 'readonly', {durability:"relaxed"})
    var objectStore_2070 = txn_3071.objectStore('objectStore_2070');
    var index_0 = objectStore_2070.index('index_1378');
    var index_1 = objectStore_2070.index('index_1378');
    var index_2 = objectStore_2070.index('index_1378');
    txn_3071.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3071.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3071.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3072 = db.transaction(['objectStore_2068'], 'readonly', {durability:"strict"})
    var objectStore_2068 = txn_3072.objectStore('objectStore_2068');
    var count_4;
    try{
        KeyRange_6 = IDBKeyRange.bound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', true, false);
        count_4 = objectStore_2068.count(KeyRange_6);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', true, false);
        get_1 = objectStore_2068.get(KeyRange_8);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', false);
        count_5 = objectStore_2068.count(KeyRange_10);
    }
    catch (e){
    }

    var count_6 = objectStore_2068.count();
    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', false, false);
        get_2 = objectStore_2068.get(KeyRange_12);
    }
    catch (e){
    }

    var count_7 = objectStore_2068.count();
    var count_8;
    try{
        KeyRange_14 = IDBKeyRange.only('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU');
        count_8 = objectStore_2068.count(KeyRange_14);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_16 = IDBKeyRange.bound('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', 'TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU', true, true);
        count_9 = objectStore_2068.count(KeyRange_16);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_18 = IDBKeyRange.only('TPXTLPfynJjPLynymvaChGmbsjQkygHNVVaGKYUuVylkGGYgsYhvmtquFERGQYmodOkmeaSrmYoXymToIwYVvboOtCANodcHNkKeWbEBsnEoLYeorjTfCJXUBzYnqycWpqXwObWmGkMFvLtABmJmjLOiIUMCpjJOebDWyAcYCjHwLNADpRkJfkOqFhJPaIdqWAUteAkDgtHzTIMjhXVjGMffqhLXdvlyThJorWwhySPwunvyApVKcHLmLVZrxLNIqmFeIFKhKIWPBZTTBPLUjbYCvuYAIihEdsGxNSXzIYMKaZkuEIllGU');
        count_10 = objectStore_2068.count(KeyRange_18);
    }
    catch (e){
    }

    txn_3072.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3072.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3072.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3073 = db.transaction(['objectStore_2069'], 'readonly', {durability:"default"})
    var objectStore_2069 = txn_3073.objectStore('objectStore_2069');
    txn_3073.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3073.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3073.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3074 = db.transaction(['objectStore_2067'], 'readonly', {durability:"relaxed"})
    var objectStore_2067 = txn_3074.objectStore('objectStore_2067');
    var count_11 = objectStore_2067.count();
    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', true, true);
        get_3 = objectStore_2067.get(KeyRange_20);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_22 = IDBKeyRange.bound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', false, true);
        count_12 = objectStore_2067.count(KeyRange_22);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_24 = IDBKeyRange.bound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', true, false);
        get_4 = objectStore_2067.get(KeyRange_24);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', false);
        get_5 = objectStore_2067.get(KeyRange_26);
    }
    catch (e){
    }

    var count_13 = objectStore_2067.count();
    var getAllKeys_1 = objectStore_2067.getAllKeys();
    var count_14;
    try{
        KeyRange_28 = IDBKeyRange.bound('sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', 'sHbBrykoFSGHPfBYmDpIhodMZmGNcywBfNRhwJwpLxLdRXsiHqwQd', false, true);
        count_14 = objectStore_2067.count(KeyRange_28);
    }
    catch (e){
    }

    txn_3074.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3074.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3074.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3613')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};