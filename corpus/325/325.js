let db;
db.close()
const openRequest = window.indexedDB.open('str_1878', 7095805964456600)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1955', {keypath: 'yEyjbtKNQGHqjvPoFZyEXcpBfkXZyzrjlPZeBwUUVskdrKfzNgvhXQbvAlPqqWEsANQNsTLfFRGbMrfFfFiomKgczPSoLJLWefLUFVKMwaoZdvLFRYXMTwUdkxlUImcTsygBLVvdrwtPknAGkTpFTtpAHcIbhPgWaSeZFZSuARYNvFqpdoq'});
    var objectStore_1 = db.createObjectStore('objectStore_1956', {autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2920 = db.transaction(['objectStore_1956', 'objectStore_1955'], 'readonly', {durability:"relaxed"})
    var objectStore_1956 = txn_2920.objectStore('objectStore_1956');
    txn_2920.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2920.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2920.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2921 = db.transaction(['objectStore_1956', 'objectStore_1955'], 'readwrite', {durability:"default"})
    var objectStore_1956 = txn_2921.objectStore('objectStore_1956');
    var clear_0 = objectStore_1956.clear();
    var put_0 = objectStore_1956.put({f0_p: '<object>', f1_y: '<array>'}, 'zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', 'zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', false, true);
        delete_0 = objectStore_1956.delete(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        getAllKeys_0 = objectStore_1956.getAllKeys(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        getAllKeys_0 = objectStore_1956.getAllKeys(KeyRange_3);
    }

    var put_1 = objectStore_1956.put({f0_e: '<array>'}, 'qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp');
    var clear_1 = objectStore_1956.clear();
    txn_2921.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2921.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2921.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2922 = db.transaction(['objectStore_1956'], 'readwrite', {durability:"strict"})
    var objectStore_1956 = txn_2922.objectStore('objectStore_1956');
    var clear_2 = objectStore_1956.clear();
    var clear_3 = objectStore_1956.clear();
    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', 'zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', false, false);
        get_0 = objectStore_1956.get(KeyRange_4);
    }
    catch (e){
    }

    var clear_4 = objectStore_1956.clear();
    var count_0 = objectStore_1956.count();
    var put_2 = objectStore_1956.put({f0_b: '<null>', f1_y: '<null>'}, 'FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT');
    var clear_5 = objectStore_1956.clear();
    var count_1 = objectStore_1956.count();
    var count_2 = objectStore_1956.count();
    var clear_6 = objectStore_1956.clear();
    txn_2922.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2922.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2922.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2923 = db.transaction(['objectStore_1956'], 'readonly', {durability:"default"})
    var objectStore_1956 = txn_2923.objectStore('objectStore_1956');
    var count_3;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', true);
        count_3 = objectStore_1956.count(KeyRange_6);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT', 'FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT', false, true);
        getAll_0 = objectStore_1956.getAll(KeyRange_8, 1635383628);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        getAll_0 = objectStore_1956.getAll(KeyRange_9);
    }

    var getAllKeys_1 = objectStore_1956.getAllKeys();
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.only('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp');
        get_1 = objectStore_1956.get(KeyRange_10);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_12 = IDBKeyRange.only('FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT');
        getAll_1 = objectStore_1956.getAll(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        getAll_1 = objectStore_1956.getAll(KeyRange_13);
    }

    var count_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', 'zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', true, false);
        count_4 = objectStore_1956.count(KeyRange_14);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.only('FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT');
        get_2 = objectStore_1956.get(KeyRange_16);
    }
    catch (e){
    }

    txn_2923.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2923.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2923.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2924 = db.transaction(['objectStore_1956', 'objectStore_1955'], 'readonly', {durability:"strict"})
    var objectStore_1956 = txn_2924.objectStore('objectStore_1956');
    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        count_5 = objectStore_1956.count(KeyRange_18);
    }
    catch (e){
    }

    var getAll_2;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', true);
        getAll_2 = objectStore_1956.getAll(KeyRange_20, 3183151623);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp');
        getAll_2 = objectStore_1956.getAll(KeyRange_21);
    }

    var count_6 = objectStore_1956.count();
    var count_7 = objectStore_1956.count();
    var count_8 = objectStore_1956.count();
    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', 'zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', true, true);
        get_3 = objectStore_1956.get(KeyRange_22);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', 'qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', false, false);
        count_9 = objectStore_1956.count(KeyRange_24);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.only('qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp');
        get_4 = objectStore_1956.get(KeyRange_26);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', 'FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT', true, false);
        get_5 = objectStore_1956.get(KeyRange_28);
    }
    catch (e){
    }

    var count_10 = objectStore_1956.count();
    var count_11 = objectStore_1956.count();
    var getAllKeys_2 = objectStore_1956.getAllKeys();
    var getAllKeys_3;
    try{
        KeyRange_30 = IDBKeyRange.bound('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb', 'qEOQRfxPwPkXfivnmhSxaHWuSIVYbYPWCikfggAeEKzLwowXgmhuQeIxLsBEBTiSHNp', true, false);
        getAllKeys_3 = objectStore_1956.getAllKeys(KeyRange_30, 3566196477);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('zkbQGufHQGttBxCZVTAhlgBEcwSHFXAtIlZEkMbhkBtYzrlBRUWHAJxFmLbbVVfEdCDgkVsUpCdMURoBkqUOqgRukVRxmMbzEhdEnTNcGBlQRVLTfdIseWcpscBbfLjlxRQSBwVgKdtlGoEZhIycZcexhGNLqKJIuIpfcyGvgyeGOdmjGNJNZxGKgsrUGEKVyKQqFKtVuzEMKkoJZSwwwmlRocqYphjnYNlXDEgYpDZrVYxpLENgoyKXayLQwyswbzLxrhGNjCpGiRNVjBXkbsuSyPfBYPwHMhQAmgGopKNErJYDgKfceNDlayrJoGovRIEvaxioAWuPjgaXlNjzJjSWLTIbqFkcJiMZMcdLueemcMdLKDuuWYksBLKTZFbzRrVnEOrHJiJzVQYvpqdHAGb');
        getAllKeys_3 = objectStore_1956.getAllKeys(KeyRange_31);
    }

    var getAllKeys_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT', 'FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT', false, true);
        getAllKeys_4 = objectStore_1956.getAllKeys(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('FuOlXHVxqdrwZsRWhDSwfXTEjdaKRcvWToTrRmrpOjRqlyOpHLyDFzkzhfBGhEjArCrUgePztSYroDneREDZRQeERPvktKRexhuCGbpnlDiT');
        getAllKeys_4 = objectStore_1956.getAllKeys(KeyRange_33);
    }

    txn_2924.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2924.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2924.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7959')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};