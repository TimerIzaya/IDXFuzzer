let db;
const openRequest = window.indexedDB.open('str_4809', 5704960497788999)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_1857', {autoIncrement: false});
    var index_1222 = objectStore_0.createIndex('index_1222', 'test', {unique: false});
    var index_1223 = objectStore_0.createIndex('index_1223', 'test');
    var index_0 = objectStore_0.index('index_1223');
    var index_1224 = objectStore_0.createIndex('index_1224', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_1858', {keypath: 'znebfiQhPccVzBpWLpCxjYBgEJbEOuSuQFoFfqWUxdiTkUPNqJGjWyNitJNurvUMaoICVlBbQavlMcgjReIeopHgVlAHnFBQvNINaHimzxQhZosVmDbJzsfYRGKLJwDLwXPTvYEgEeuyrpWFjGiLbJKkoPpSochzlKSqqxQYGAzlYDLcatiAriSPWLBbSRFjwDBHBMjviXTVFnNHcmlMsHCDCNUZyqjvkKfZwgbwxiUcQKAbVDhNSqNdPFxmfUtgLCSedljWFNdvlEyqhdEfsnDFYmfGqFhkLdZbBTElNkLgRpJjOHHaHvzUQfBCEqEcLgUROAxJVXHwLBldEmQkchZpAOkFKnKObEtxhPdvpkXeNmynUNUDONIeVbsnJdNULMlzpCSFyEzyhAzsRPWTdLgkyoXSetqedCOPzBIWMIXoojjXDpTBsQiDijGtDErzrACsITKMhYTsLXxNLQgfFIpGLfUP'});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_2750 = db.transaction(['objectStore_1857'], 'readonly', {durability:"relaxed"})
    var objectStore_1857 = txn_2750.objectStore('objectStore_1857');
    txn_2750.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2750.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2750.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2751 = db.transaction(['objectStore_1858', 'objectStore_1857'], 'readonly', {durability:"relaxed"})
    var objectStore_1858 = txn_2751.objectStore('objectStore_1858');
    txn_2751.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2751.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2751.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2752 = db.transaction(['objectStore_1857'], 'readwrite', {durability:"relaxed"})
    var objectStore_1857 = txn_2752.objectStore('objectStore_1857');
    var index_1 = objectStore_1857.index('index_1223');
    var clear_0 = objectStore_1857.clear();
    var put_0 = objectStore_1857.put({f0_g: '<boolean>', f1_e: '<array>', f2_n: '<object>', f3_z: '<object>'}, 'plfUzVJxQtZdQSdYzHTNlRsvtmvVMmEmPiFfeqKmAfrXfXHztMLYLsYNdBTpkUxMGKxjEnFxabfOPnWfttpRqmKgHQlkxIwRIVMFwtFaulDeNHWLSqPhCykXpXWCyoFLnNaGbZaZUSzDmYrVuAjDhsbYUwtNztBqIoKyGiCIUNSVacWqjXWPpfkizEOCSJxVmUxnXbNbDXprVIjuuMVCZiSVqHiUUOokHJjdzXAbwuNhCwXXYsNnPhgYkWxdyEamGORRNYiUlowTnZXrgwnuLWPJIdovyORGsXJlLcglmxmuQflPSKiFartkifRjTPaAnLCSaJIpuezHiIQqtcLuvpuTrlsLdJkefYOXIsmGUkRnVOZIIdsjeDPjnEGPjHGxdQIyoJYxptNUOVLkFjiimslneZeyuvOSzYlwiPiEIPZEjCfOtdqzYWopAuZyIzKapDQwcKxxcJxUjGRtsZUPOPeHEbgkKogjWACvGHuFrXpOgdoTSZEUxEYuOrGSNxmjGQAtGYqwvSqOJDiyBwCwPyzXSfezaQCLCZdcjSCdGvfCWfTEhNfnUNuAoTIoJxmlXIFufHBSZhbSnJuyNxjuffNZNSUVPCzMsGljBKfZwIruSeVKsFrIXlmdVPLQzxGGDyJEZMJZxMIHziKOqpTSinzSOeJ');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('plfUzVJxQtZdQSdYzHTNlRsvtmvVMmEmPiFfeqKmAfrXfXHztMLYLsYNdBTpkUxMGKxjEnFxabfOPnWfttpRqmKgHQlkxIwRIVMFwtFaulDeNHWLSqPhCykXpXWCyoFLnNaGbZaZUSzDmYrVuAjDhsbYUwtNztBqIoKyGiCIUNSVacWqjXWPpfkizEOCSJxVmUxnXbNbDXprVIjuuMVCZiSVqHiUUOokHJjdzXAbwuNhCwXXYsNnPhgYkWxdyEamGORRNYiUlowTnZXrgwnuLWPJIdovyORGsXJlLcglmxmuQflPSKiFartkifRjTPaAnLCSaJIpuezHiIQqtcLuvpuTrlsLdJkefYOXIsmGUkRnVOZIIdsjeDPjnEGPjHGxdQIyoJYxptNUOVLkFjiimslneZeyuvOSzYlwiPiEIPZEjCfOtdqzYWopAuZyIzKapDQwcKxxcJxUjGRtsZUPOPeHEbgkKogjWACvGHuFrXpOgdoTSZEUxEYuOrGSNxmjGQAtGYqwvSqOJDiyBwCwPyzXSfezaQCLCZdcjSCdGvfCWfTEhNfnUNuAoTIoJxmlXIFufHBSZhbSnJuyNxjuffNZNSUVPCzMsGljBKfZwIruSeVKsFrIXlmdVPLQzxGGDyJEZMJZxMIHziKOqpTSinzSOeJ', 'plfUzVJxQtZdQSdYzHTNlRsvtmvVMmEmPiFfeqKmAfrXfXHztMLYLsYNdBTpkUxMGKxjEnFxabfOPnWfttpRqmKgHQlkxIwRIVMFwtFaulDeNHWLSqPhCykXpXWCyoFLnNaGbZaZUSzDmYrVuAjDhsbYUwtNztBqIoKyGiCIUNSVacWqjXWPpfkizEOCSJxVmUxnXbNbDXprVIjuuMVCZiSVqHiUUOokHJjdzXAbwuNhCwXXYsNnPhgYkWxdyEamGORRNYiUlowTnZXrgwnuLWPJIdovyORGsXJlLcglmxmuQflPSKiFartkifRjTPaAnLCSaJIpuezHiIQqtcLuvpuTrlsLdJkefYOXIsmGUkRnVOZIIdsjeDPjnEGPjHGxdQIyoJYxptNUOVLkFjiimslneZeyuvOSzYlwiPiEIPZEjCfOtdqzYWopAuZyIzKapDQwcKxxcJxUjGRtsZUPOPeHEbgkKogjWACvGHuFrXpOgdoTSZEUxEYuOrGSNxmjGQAtGYqwvSqOJDiyBwCwPyzXSfezaQCLCZdcjSCdGvfCWfTEhNfnUNuAoTIoJxmlXIFufHBSZhbSnJuyNxjuffNZNSUVPCzMsGljBKfZwIruSeVKsFrIXlmdVPLQzxGGDyJEZMJZxMIHziKOqpTSinzSOeJ', true, true);
        delete_0 = objectStore_1857.delete(KeyRange_0);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_1857.getAllKeys(2464795828);
    var put_1 = objectStore_1857.put({f0_r: '<null>', f1_p: '<string>'}, 'WvaVVMVbGTdfZdfmELfAsPRDYHBDSbnHcWCtTQNUfDxGCqmkfaNlnVRYPmeJiVOfGHTbhbelxQyTAbZEtMEXNblIqhvygpXRJHgGozRzvQPokRTahztonfewhGoogjovsnKBhsCqzkmlaAOUQaCXjdHtQfUebNYwnkqqveGmWDbhChJDkvZqJaSFenXVyjUoOuamYcasyuTRmQiquLiGV');
    txn_2752.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2752.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2752.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2753 = db.transaction(['objectStore_1858'], 'readonly', {durability:"strict"})
    var objectStore_1858 = txn_2753.objectStore('objectStore_1858');
    txn_2753.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2753.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2753.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2754 = db.transaction(['objectStore_1858'], 'readonly', {durability:"default"})
    var objectStore_1858 = txn_2754.objectStore('objectStore_1858');
    txn_2754.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2754.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2754.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8136')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};