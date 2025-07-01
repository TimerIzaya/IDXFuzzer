let db;
const openRequest = window.indexedDB.open('str_6032', '83')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_243', {autoIncrement: false});
    var index_252 = objectStore_0.createIndex('index_252', 'test', {unique: false, multiEntry: false});
    var index_253 = objectStore_0.createIndex('index_253', 'test', {multiEntry: false});
    var index_0 = objectStore_0.index('index_253');
    var index_1 = objectStore_0.index('index_253');
    var index_254 = objectStore_0.createIndex('index_254', 'test', {unique: true, multiEntry: false});
    var add_0 = objectStore_0.add({f0_b: '<null>', f1_n: '<string>', f2_s: '<number>', f3_u: '<number>', f4_p: '<array>', f5_e: '<object>', f6_r: '<array>'}, 'reto');
    db.deleteObjectStore('objectStore_243')
    add_0.onsuccess = (event) => {
        add_0.onsuccess = (event) => {
            add_0.onsuccess = (event) => {
                add_0.onsuccess = (event) => {
                    add_0.onsuccess = (event) => {
                        add_0.onsuccess = (event) => {
                            add_0.onsuccess = (event) => {
                                var objectStore_1;
                                objectStore_1 = db.createObjectStore('objectStore_244');
                                add_0.onsuccess = (event) => {
                                    var objectStore_2;
                                    objectStore_2 = db.createObjectStore('objectStore_245', {keypath: 'DbQR'});
                                    db.deleteObjectStore('objectStore_244')
                                    var put_0;
                                    put_0 = objectStore_2.put({f0_c: '<array>', f1_k: '<array>', f2_m: '<null>', f3_y: '<null>', f4_q: '<object>', f5_g: '<object>'}, 'HGNYWMKcY');
                                    var clear_0;
                                    clear_0 = objectStore_2.clear();
                                    add_0.onsuccess = (event) => {
                                        var index_255;
                                        index_255 = objectStore_2.createIndex('index_255', 'test');
                                        var objectStore_3;
                                        objectStore_3 = db.createObjectStore('objectStore_246', {autoIncrement: true});
                                        db.deleteObjectStore('objectStore_246')
                                        add_0.onsuccess = (event) => {
                                            var clear_1;
                                            clear_1 = objectStore_2.clear();
                                            var clear_2;
                                            clear_2 = objectStore_2.clear();
                                            var delete_0;
                                            try{
                                                KeyRange_0 = IDBKeyRange.lowerBound('HGNYWMKcY', false);
                                                delete_0 = objectStore_2.delete(KeyRange_0);
                                            }
                                            catch (e){
                                                KeyRange_1 = IDBKeyRange.only('HGNYWMKcY');
                                                delete_0 = objectStore_2.delete(KeyRange_1);
                                            }

                                            var put_1;
                                            put_1 = objectStore_2.put({f0_t: '<array>', f1_l: '<string>'}, 'ZTAoTQEAxFZ');
                                            var index_2;
                                            index_2 = objectStore_2.index('index_255');
                                            var index_256;
                                            index_256 = objectStore_2.createIndex('index_256', 'test', {unique: false});
                                            var count_0;
                                            try{
                                                KeyRange_2 = IDBKeyRange.lowerBound('ZTAoTQEAxFZ', true);
                                                count_0 = objectStore_2.count(KeyRange_2);
                                            }
                                            catch (e){
                                                KeyRange_3 = IDBKeyRange.only('ZTAoTQEAxFZ');
                                                count_0 = objectStore_2.count(KeyRange_3);
                                            }

                                        };
                                        db.deleteObjectStore('objectStore_245')
                                    };
                                };
                            };
                        };
                        var objectStore_4;
                        objectStore_4 = db.createObjectStore('objectStore_247');
                    };
                };
            };
        };
        var objectStore_5;
        objectStore_5 = db.createObjectStore('objectStore_248', {autoIncrement: true});
        var put_2;
        put_2 = objectStore_5.put({f0_d: '<null>', f1_h: '<boolean>', f2_s: '<boolean>', f3_r: '<boolean>', f4_a: '<object>'}, 'ffsL');
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_9503')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
