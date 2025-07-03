let db;
const openRequest = window.indexedDB.open('str_1003', '92')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_601', {autoIncrement: true});
    var index_580 = objectStore_0.createIndex('index_580', 'test');
    var index_0 = objectStore_0.index('index_580');
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_i: '<null>', f1_n: '<string>', f2_o: '<null>', f3_r: '<boolean>', f4_o: '<string>', f5_z: '<boolean>', f6_x: '<boolean>', f7_f: '<boolean>'}, 'MGFMKtPkRGSM');
    db.deleteObjectStore('objectStore_601')
    var objectStore_1 = db.createObjectStore('objectStore_602');
    var add_0 = objectStore_1.add({f0_j: '<object>', f1_o: '<object>'}, 'lZvyUSrXx');
    db.deleteObjectStore('objectStore_602')
    var objectStore_2 = db.createObjectStore('objectStore_603', {keypath: 'qFlsYusorQE', autoIncrement: false});
    var add_1 = objectStore_2.add({f0_q: '<string>', f1_q: '<boolean>', f2_d: '<object>', f3_p: '<string>'}, 'bPOWDAunjA');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('bPOWDAunjA', 'bPOWDAunjA', false, false);
        get_0 = objectStore_2.get(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('bPOWDAunjA');
        get_0 = objectStore_2.get(KeyRange_1);
    }

    var clear_1 = objectStore_2.clear();
    db.deleteObjectStore('objectStore_603')
    get_0.onsuccess = (event) => {
        add_0.onsuccess = (event) => {
            add_1.onsuccess = (event) => {
                var objectStore_3;
                objectStore_3 = db.createObjectStore('objectStore_604', {autoIncrement: false});
                clear_0.onsuccess = (event) => {
                    var add_2;
                    add_2 = objectStore_3.add({f0_t: '<object>', f1_i: '<array>', f2_z: '<null>', f3_p: '<array>', f4_u: '<array>', f5_i: '<object>', f6_e: '<array>', f7_a: '<boolean>', f8_d: '<boolean>', f9_d: '<boolean>'}, 'NlQ');
                    get_0.onsuccess = (event) => {
                        var clear_2;
                        clear_2 = objectStore_3.clear();
                        var put_1;
                        put_1 = objectStore_3.put({f0_g: '<number>', f1_j: '<null>', f2_h: '<number>', f3_o: '<string>', f4_j: '<null>'}, 'PQyDQR');
                        add_1.onsuccess = (event) => {
                            var delete_0;
                            try{
                                KeyRange_2 = IDBKeyRange.bound('PQyDQR', 'PQyDQR', false, false);
                                delete_0 = objectStore_3.delete(KeyRange_2);
                            }
                            catch (e){
                                KeyRange_3 = IDBKeyRange.only('NlQ');
                                delete_0 = objectStore_3.delete(KeyRange_3);
                            }

                            clear_0.onsuccess = (event) => {
                                var index_581;
                                index_581 = objectStore_3.createIndex('index_581', 'test');
                                var delete_1;
                                try{
                                    KeyRange_4 = IDBKeyRange.bound('NlQ', 'NlQ', false, true);
                                    delete_1 = objectStore_3.delete(KeyRange_4);
                                }
                                catch (e){
                                    KeyRange_5 = IDBKeyRange.only('PQyDQR');
                                    delete_1 = objectStore_3.delete(KeyRange_5);
                                }

                                var delete_2;
                                try{
                                    KeyRange_6 = IDBKeyRange.lowerBound('PQyDQR', true);
                                    delete_2 = objectStore_3.delete(KeyRange_6);
                                }
                                catch (e){
                                    KeyRange_7 = IDBKeyRange.only('NlQ');
                                    delete_2 = objectStore_3.delete(KeyRange_7);
                                }

                                var add_3;
                                add_3 = objectStore_3.add({f0_o: '<null>', f1_z: '<number>'}, 'SQstDYA');
                                var index_582;
                                index_582 = objectStore_3.createIndex('index_582', 'test');
                                clear_0.onsuccess = (event) => {
                                    var delete_3;
                                    try{
                                        KeyRange_8 = IDBKeyRange.bound('PQyDQR', 'NlQ', false, false);
                                        delete_3 = objectStore_3.delete(KeyRange_8);
                                    }
                                    catch (e){
                                        KeyRange_9 = IDBKeyRange.only('NlQ');
                                        delete_3 = objectStore_3.delete(KeyRange_9);
                                    }

                                    var index_1;
                                    index_1 = objectStore_3.index('index_581');
                                    add_2.onsuccess = (event) => {
                                        var put_2;
                                        put_2 = objectStore_3.put({f0_l: '<array>'}, 'pqWcDZELhMJX');
                                        var index_583;
                                        index_583 = objectStore_3.createIndex('index_583', 'test');
                                        var index_2;
                                        index_2 = objectStore_3.index('index_581');
                                        get_0.onsuccess = (event) => {
                                            var clear_3;
                                            clear_3 = objectStore_3.clear();
                                            var add_4;
                                            add_4 = objectStore_3.add({f0_t: '<boolean>', f1_c: '<boolean>', f2_y: '<array>', f3_q: '<null>', f4_i: '<string>', f5_c: '<null>', f6_m: '<null>'}, 'dMmw');
                                            var clear_4;
                                            clear_4 = objectStore_3.clear();
                                            objectStore_3.deleteIndex('index_583')
                                            var index_584;
                                            index_584 = objectStore_3.createIndex('index_584', 'test', {multiEntry: false});
                                            var index_585;
                                            index_585 = objectStore_3.createIndex('index_585', 'test', {unique: false, multiEntry: true});
                                            var add_5;
                                            add_5 = objectStore_3.add({f0_q: '<array>', f1_t: '<string>', f2_b: '<number>', f3_a: '<boolean>', f4_m: '<number>', f5_g: '<array>', f6_p: '<array>', f7_q: '<array>', f8_c: '<array>'}, 'ffwopUWXidQ');
                                        };
                                        var count_0;
                                        try{
                                            KeyRange_10 = IDBKeyRange.lowerBound('PQyDQR', false);
                                            count_0 = objectStore_3.count(KeyRange_10);
                                        }
                                        catch (e){
                                            KeyRange_11 = IDBKeyRange.only('pqWcDZELhMJX');
                                            count_0 = objectStore_3.count(KeyRange_11);
                                        }

                                        var add_6;
                                        add_6 = objectStore_3.add({f0_k: '<number>', f1_i: '<boolean>', f2_r: '<null>', f3_s: '<string>', f4_s: '<array>', f5_r: '<boolean>', f6_u: '<string>'}, 'HEcVjQyM');
                                        db.deleteObjectStore('objectStore_604')
                                    };
                                    var objectStore_4;
                                    objectStore_4 = db.createObjectStore('objectStore_605');
                                };
                            };
                            var objectStore_5;
                            objectStore_5 = db.createObjectStore('objectStore_606', {autoIncrement: true});
                            var add_7;
                            add_7 = objectStore_5.add({f0_f: '<number>', f1_h: '<array>', f2_a: '<null>', f3_q: '<boolean>', f4_f: '<object>', f5_i: '<number>'}, 'aCzvqjrsoVQM');
                            var objectStore_6;
                            objectStore_6 = db.createObjectStore('objectStore_607', {autoIncrement: false});
                        };
                    };
                };
            };
        };
    };
    var objectStore_7 = db.createObjectStore('objectStore_608', {keypath: 'ujMmKnOaPffO.RamIzJF.EkNVCixdQ.RHooIgUSJ.HRqhJPXDa.hRudc.JbVhWV.RbvNaUGTi.JtRsgraia', autoIncrement: false});
    add_0.onsuccess = (event) => {
        var clear_5;
        clear_5 = objectStore_7.clear();
        var clear_6;
        clear_6 = objectStore_7.clear();
        db.deleteObjectStore('objectStore_608')
        add_1.onsuccess = (event) => {
            clear_6.onsuccess = (event) => {
                add_1.onsuccess = (event) => {
                    var objectStore_8;
                    objectStore_8 = db.createObjectStore('objectStore_609', {keypath: 'UmzPyM'});
                    add_1.onsuccess = (event) => {
                        db.deleteObjectStore('objectStore_609')
                        var objectStore_9;
                        objectStore_9 = db.createObjectStore('objectStore_610');
                        var index_586;
                        index_586 = objectStore_9.createIndex('index_586', 'test', {unique: true});
                        add_0.onsuccess = (event) => {
                            var index_3;
                            index_3 = objectStore_9.index('index_586');
                            var index_4;
                            index_4 = objectStore_9.index('index_586');
                            add_0.onsuccess = (event) => {
                                var index_5;
                                index_5 = objectStore_9.index('index_586');
                                var objectStore_10;
                                objectStore_10 = db.createObjectStore('objectStore_611', {autoIncrement: false});
                                db.deleteObjectStore('objectStore_610')
                                clear_1.onsuccess = (event) => {
                                    var index_587;
                                    index_587 = objectStore_10.createIndex('index_587', 'test', {unique: false});
                                    var add_8;
                                    add_8 = objectStore_10.add({f0_o: '<array>', f1_j: '<number>', f2_g: '<null>', f3_g: '<null>', f4_s: '<number>', f5_r: '<string>'}, 'uHTo');
                                    clear_1.onsuccess = (event) => {
                                        var clear_7;
                                        clear_7 = objectStore_10.clear();
                                        db.deleteObjectStore('objectStore_611')
                                        add_0.onsuccess = (event) => {

                                        };
                                        var objectStore_11;
                                        objectStore_11 = db.createObjectStore('objectStore_612', {keypath: 'eYZE'});
                                        var objectStore_12;
                                        objectStore_12 = db.createObjectStore('objectStore_613', {autoIncrement: false});
                                    };
                                    var objectStore_13;
                                    objectStore_13 = db.createObjectStore('objectStore_614', {autoIncrement: false});
                                    var index_588;
                                    index_588 = objectStore_13.createIndex('index_588', 'test');
                                    var index_589;
                                    index_589 = objectStore_13.createIndex('index_589', 'test');
                                };
                                var objectStore_14;
                                objectStore_14 = db.createObjectStore('objectStore_615', {keypath: 'FCsYMXKxspZN', autoIncrement: false});
                                var index_590;
                                index_590 = objectStore_14.createIndex('index_590', 'test');
                                var index_591;
                                index_591 = objectStore_14.createIndex('index_591', 'test');
                            };
                        };
                    };
                    var objectStore_15;
                    objectStore_15 = db.createObjectStore('objectStore_616', {keypath: 'syHySWykqP', autoIncrement: false});
                    var put_3;
                    put_3 = objectStore_15.put({f0_u: '<null>', f1_w: '<null>', f2_l: '<object>', f3_b: '<number>', f4_i: '<string>', f5_m: '<null>', f6_j: '<array>', f7_x: '<string>', f8_m: '<string>'}, 'LYxyGw');
                    var add_9;
                    add_9 = objectStore_15.add({f0_k: '<string>', f1_k: '<object>', f2_g: '<string>'}, 'icRRv');
                    db.deleteObjectStore('objectStore_616')
                };
            };
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_6485')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
