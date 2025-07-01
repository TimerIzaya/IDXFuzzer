let db;
const openRequest = window.indexedDB.open('str_4210')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'Psm.NRxv.MDqNkkqL.eUrARI.nsJJAKzW', autoIncrement: true});
    var index_0 = objectStore_0.createIndex('index_0', 'test', {unique: true});
    db.deleteObjectStore('objectStore_0')
    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'CjL', autoIncrement: true});
    var clear_0 = objectStore_1.clear();
    var index_1 = objectStore_1.createIndex('index_1', 'test', {unique: false});
    var index_0 = objectStore_1.index('index_1');
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'HzvJSJF', autoIncrement: true});
    var objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'rlEfKdLLUmcN', autoIncrement: true});
    var index_1 = objectStore_1.index('index_1');
    clear_0.onsuccess = (event) => {
        var put_0;
        put_0 = objectStore_1.put({f0_x: '<number>', f1_k: '<array>', f2_v: '<boolean>', f3_g: '<string>', f4_h: '<string>', f5_m: '<boolean>', f6_u: '<string>', f7_t: '<object>'}, 'MLGE');
        var get_0;
        try{
            KeyRange_0 = IDBKeyRange.bound('MLGE', 'MLGE', true, true);
            get_0 = objectStore_1.get(KeyRange_0);
        }
        catch (e){
            KeyRange_1 = IDBKeyRange.only('MLGE');
            get_0 = objectStore_1.get(KeyRange_1);
        }

        var clear_1;
        clear_1 = objectStore_2.clear();
        var delete_0;
        try{
            KeyRange_2 = IDBKeyRange.bound('MLGE', 'MLGE', true, true);
            delete_0 = objectStore_1.delete(KeyRange_2);
        }
        catch (e){
            KeyRange_3 = IDBKeyRange.only('MLGE');
            delete_0 = objectStore_1.delete(KeyRange_3);
        }

        get_0.onsuccess = (event) => {
            var get_1;
            try{
                KeyRange_4 = IDBKeyRange.lowerBound('MLGE', true);
                get_1 = objectStore_1.get(KeyRange_4);
            }
            catch (e){
                KeyRange_5 = IDBKeyRange.only('MLGE');
                get_1 = objectStore_1.get(KeyRange_5);
            }

            var put_1;
            put_1 = objectStore_1.put({f0_u: '<string>'}, 'nyM');
            var get_2;
            try{
                KeyRange_6 = IDBKeyRange.bound('MLGE', 'MLGE', false, true);
                get_2 = objectStore_1.get(KeyRange_6);
            }
            catch (e){
                KeyRange_7 = IDBKeyRange.only('nyM');
                get_2 = objectStore_1.get(KeyRange_7);
            }

            var index_2;
            index_2 = objectStore_1.index('index_1');
            get_1.onsuccess = (event) => {
                var index_2;
                index_2 = objectStore_2.createIndex('index_2', 'test', {unique: true});
                var index_3;
                index_3 = objectStore_1.createIndex('index_3', 'test', {multiEntry: false});
                get_2.onsuccess = (event) => {
                    var index_3;
                    index_3 = objectStore_2.index('index_2');
                    var index_4;
                    index_4 = objectStore_3.createIndex('index_4', 'test', {unique: false});
                    var delete_1;
                    try{
                        KeyRange_8 = IDBKeyRange.lowerBound('nyM', false);
                        delete_1 = objectStore_1.delete(KeyRange_8);
                    }
                    catch (e){
                        KeyRange_9 = IDBKeyRange.only('MLGE');
                        delete_1 = objectStore_1.delete(KeyRange_9);
                    }

                    objectStore_1.deleteIndex('index_1')
                    delete_0.onsuccess = (event) => {
                        db.deleteObjectStore('objectStore_3')
                        db.deleteObjectStore('objectStore_1')
                        put_0.onsuccess = (event) => {
                            var clear_2;
                            clear_2 = objectStore_2.clear();
                            var index_4;
                            index_4 = objectStore_2.index('index_2');
                            var objectStore_4;
                            objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'OAAGzYTBecv', autoIncrement: false});
                            delete_1.onsuccess = (event) => {
                                db.deleteObjectStore('objectStore_4')
                                var index_5;
                                index_5 = objectStore_2.index('index_2');
                                delete_1.onsuccess = (event) => {
                                    var put_2;
                                    put_2 = objectStore_2.put({f0_v: '<array>'}, 'umpQGj');
                                    var index_5;
                                    index_5 = objectStore_2.createIndex('index_5', 'test', {unique: false, multiEntry: true});
                                    get_1.onsuccess = (event) => {
                                        var clear_3;
                                        clear_3 = objectStore_2.clear();
                                        var index_6;
                                        index_6 = objectStore_2.index('index_2');
                                        clear_2.onsuccess = (event) => {
                                            var count_0;
                                            try{
                                                KeyRange_10 = IDBKeyRange.lowerBound('umpQGj', true);
                                                count_0 = objectStore_2.count(KeyRange_10);
                                            }
                                            catch (e){
                                                KeyRange_11 = IDBKeyRange.only('umpQGj');
                                                count_0 = objectStore_2.count(KeyRange_11);
                                            }

                                            var objectStore_5;
                                            objectStore_5 = db.createObjectStore('objectStore_5', {autoIncrement: true});
                                            var count_1;
                                            try{
                                                KeyRange_12 = IDBKeyRange.bound('umpQGj', 'umpQGj', false, false);
                                                count_1 = objectStore_2.count(KeyRange_12);
                                            }
                                            catch (e){
                                                KeyRange_13 = IDBKeyRange.only('umpQGj');
                                                count_1 = objectStore_2.count(KeyRange_13);
                                            }

                                            var clear_4;
                                            clear_4 = objectStore_2.clear();
                                            var index_6;
                                            index_6 = objectStore_2.createIndex('index_6', 'test', {multiEntry: true});
                                            db.deleteObjectStore('objectStore_2')
                                            var put_3;
                                            put_3 = objectStore_5.put({f0_e: '<object>', f1_q: '<object>', f2_u: '<number>', f3_d: '<array>', f4_o: '<number>', f5_s: '<object>', f6_z: '<number>', f7_n: '<array>', f8_x: '<string>'}, 'VpnwxXGMU');
                                        };
                                        var objectStore_6;
                                        objectStore_6 = db.createObjectStore('objectStore_6');
                                        db.deleteObjectStore('objectStore_6')
                                    };
                                };
                            };
                        };
                        var objectStore_7;
                        objectStore_7 = db.createObjectStore('objectStore_7', {autoIncrement: false});
                        var put_4;
                        put_4 = objectStore_7.put({f0_n: '<boolean>', f1_g: '<object>', f2_j: '<object>', f3_o: '<string>', f4_u: '<array>', f5_u: '<array>', f6_i: '<number>', f7_v: '<object>', f8_n: '<object>', f9_g: '<object>'}, 'ZVKTt');
                        var add_0;
                        add_0 = objectStore_7.add({f0_w: '<null>', f1_d: '<object>', f2_d: '<object>', f3_h: '<array>', f4_o: '<string>', f5_k: '<number>', f6_u: '<boolean>', f7_t: '<string>', f8_b: '<number>', f9_p: '<object>'}, 'hFdBuOE');
                        db.deleteObjectStore('objectStore_7')
                    };
                };
            };
        };
    };
    var objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'vBI', autoIncrement: false});
    var objectStore_9 = db.createObjectStore('objectStore_9');
    var index_7 = objectStore_8.createIndex('index_7', 'test');
    var clear_5 = objectStore_9.clear();
    var objectStore_10 = db.createObjectStore('objectStore_10', {keypath: 'XWsd.JUZkVVdlL.ogiabwOBH'});
    var objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'yhdKHYQAjDWS'});
    var clear_6 = objectStore_11.clear();
    var index_8 = objectStore_8.createIndex('index_8', 'test', {unique: false, multiEntry: true});
    var index_7 = objectStore_8.index('index_8');
    db.deleteObjectStore('objectStore_11')
    db.deleteObjectStore('objectStore_10')
    var index_8 = objectStore_8.index('index_7');
    var objectStore_12 = db.createObjectStore('objectStore_12');
    var index_9 = objectStore_12.createIndex('index_9', 'test', {multiEntry: false});
    var clear_7 = objectStore_9.clear();
    var put_5 = objectStore_8.put({f0_u: '<number>', f1_j: '<object>', f2_t: '<null>', f3_n: '<object>', f4_b: '<null>', f5_s: '<null>', f6_z: '<string>'}, 'zflYKXKbcsuV');
    objectStore_12.deleteIndex('index_9')
    db.deleteObjectStore('objectStore_12')
    var add_1 = objectStore_9.add({f0_m: '<array>', f1_v: '<boolean>', f2_s: '<string>', f3_p: '<boolean>', f4_h: '<string>', f5_g: '<string>', f6_i: '<array>', f7_i: '<number>', f8_u: '<array>'}, 'LIUPzf');
    var index_10 = objectStore_9.createIndex('index_10', 'test', {unique: false});
    var count_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('LIUPzf', false);
        count_2 = objectStore_9.count(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('LIUPzf');
        count_2 = objectStore_9.count(KeyRange_15);
    }

    var index_9 = objectStore_8.index('index_8');
    var index_11 = objectStore_9.createIndex('index_11', 'test', {unique: false, multiEntry: false});
    var delete_2;
    try{
        KeyRange_16 = IDBKeyRange.only('zflYKXKbcsuV');
        delete_2 = objectStore_8.delete(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('zflYKXKbcsuV');
        delete_2 = objectStore_8.delete(KeyRange_17);
    }

    var clear_8 = objectStore_9.clear();
    var index_10 = objectStore_8.index('index_7');
    var index_12 = objectStore_9.createIndex('index_12', 'test', {multiEntry: true});
    var index_11 = objectStore_9.index('index_12');
    var index_12 = objectStore_8.index('index_8');
    var clear_9 = objectStore_9.clear();
    var put_6 = objectStore_9.put({f0_l: '<boolean>', f1_s: '<number>', f2_s: '<array>', f3_b: '<number>', f4_u: '<boolean>', f5_q: '<string>', f6_z: '<string>'}, 'BrYDl');
    var get_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('LIUPzf', 'BrYDl', false, true);
        get_3 = objectStore_9.get(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('BrYDl');
        get_3 = objectStore_9.get(KeyRange_19);
    }

    var index_13 = objectStore_8.createIndex('index_13', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_13', {autoIncrement: false});
    var count_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('BrYDl', 'BrYDl', true, true);
        count_3 = objectStore_9.count(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('BrYDl');
        count_3 = objectStore_9.count(KeyRange_21);
    }

    var index_14 = objectStore_9.createIndex('index_14', 'test', {unique: true, multiEntry: false});
    var count_4 = objectStore_9.count();
    var index_15 = objectStore_9.createIndex('index_15', 'test', {unique: false});
    var index_16 = objectStore_9.createIndex('index_16', 'test');
    var index_13 = objectStore_8.index('index_7');
    var index_17 = objectStore_13.createIndex('index_17', 'test', {unique: true, multiEntry: false});
    db.deleteObjectStore('objectStore_8')
    var objectStore_14 = db.createObjectStore('objectStore_14', {keypath: 'jWvCx.nZnXUYzLBQqS', autoIncrement: true});
    var index_18 = objectStore_14.createIndex('index_18', 'test', {unique: true});
    var clear_10 = objectStore_13.clear();
    put_6.onsuccess = (event) => {
        objectStore_14.deleteIndex('index_18')
        var put_7;
        put_7 = objectStore_13.put({f0_p: '<string>', f1_e: '<boolean>', f2_m: '<object>', f3_n: '<string>', f4_t: '<null>', f5_t: '<string>', f6_l: '<boolean>', f7_e: '<null>', f8_g: '<object>'}, 'jFbmxy');
        count_2.onsuccess = (event) => {
            var index_14;
            index_14 = objectStore_9.index('index_15');
            var objectStore_15;
            objectStore_15 = db.createObjectStore('objectStore_15', {keypath: 'WfZVyb'});
            var clear_11;
            clear_11 = objectStore_13.clear();
            count_3.onsuccess = (event) => {
                var count_5;
                count_5 = objectStore_13.count();
                delete_2.onsuccess = (event) => {
                    var index_19;
                    index_19 = objectStore_9.createIndex('index_19', 'test', {multiEntry: false});
                    var objectStore_16;
                    objectStore_16 = db.createObjectStore('objectStore_16', {keypath: 'BVeZxAKOQ.RsTwiPJbxeyG.ukDBAqYe.gktTJGovHlf.IGejvorz.ApzMAloI.mUigMGBLml'});
                    count_2.onsuccess = (event) => {
                        var index_20;
                        index_20 = objectStore_14.createIndex('index_20', 'test', {multiEntry: true});
                        var add_2;
                        add_2 = objectStore_13.add({f0_w: '<array>'}, 'zdy');
                        var index_21;
                        index_21 = objectStore_13.createIndex('index_21', 'test', {unique: true});
                        count_4.onsuccess = (event) => {
                            var index_22;
                            index_22 = objectStore_9.createIndex('index_22', 'test', {unique: false});
                            var add_3;
                            add_3 = objectStore_9.add({f0_m: '<object>', f1_p: '<null>', f2_h: '<object>', f3_s: '<array>', f4_i: '<object>', f5_o: '<string>', f6_w: '<null>', f7_x: '<array>', f8_y: '<object>', f9_d: '<number>'}, 'cYjaygBQz');
                            var objectStore_17;
                            objectStore_17 = db.createObjectStore('objectStore_17', {autoIncrement: false});
                            add_2.onsuccess = (event) => {
                                var put_8;
                                put_8 = objectStore_13.put({f0_n: '<null>', f1_v: '<string>', f2_t: '<null>', f3_d: '<object>', f4_z: '<object>', f5_o: '<null>', f6_y: '<string>', f7_b: '<string>', f8_r: '<object>'}, 'ZgiCHuqv');
                                var count_6;
                                try{
                                    KeyRange_22 = IDBKeyRange.bound('cYjaygBQz', 'LIUPzf', false, true);
                                    count_6 = objectStore_9.count(KeyRange_22);
                                }
                                catch (e){
                                    KeyRange_23 = IDBKeyRange.only('LIUPzf');
                                    count_6 = objectStore_9.count(KeyRange_23);
                                }

                                clear_8.onsuccess = (event) => {
                                    var index_23;
                                    index_23 = objectStore_15.createIndex('index_23', 'test', {unique: false});
                                    var put_9;
                                    put_9 = objectStore_17.put({f0_v: '<null>', f1_a: '<object>', f2_u: '<number>', f3_z: '<object>'}, 'hDjWcKufIxm');
                                    var index_24;
                                    index_24 = objectStore_16.createIndex('index_24', 'test', {unique: false, multiEntry: false});
                                    db.deleteObjectStore('objectStore_14')
                                    count_4.onsuccess = (event) => {
                                        var index_15;
                                        index_15 = objectStore_13.index('index_21');
                                        var add_4;
                                        add_4 = objectStore_9.add({f0_e: '<null>', f1_s: '<number>', f2_i: '<string>'}, 'VwhUYOv');
                                        var put_10;
                                        put_10 = objectStore_9.put({f0_g: '<object>', f1_a: '<object>', f2_m: '<string>', f3_r: '<array>', f4_y: '<string>', f5_f: '<string>', f6_s: '<boolean>', f7_c: '<boolean>'}, 'QQPlfTx');
                                        var get_4;
                                        try{
                                            KeyRange_24 = IDBKeyRange.bound('LIUPzf', 'LIUPzf', false, false);
                                            get_4 = objectStore_9.get(KeyRange_24);
                                        }
                                        catch (e){
                                            KeyRange_25 = IDBKeyRange.only('cYjaygBQz');
                                            get_4 = objectStore_9.get(KeyRange_25);
                                        }

                                        clear_5.onsuccess = (event) => {
                                            var count_7;
                                            count_7 = objectStore_17.count();
                                            var put_11;
                                            put_11 = objectStore_13.put({f0_b: '<string>', f1_k: '<null>', f2_g: '<object>', f3_y: '<number>', f4_i: '<string>', f5_x: '<array>'}, 'mHVFbC');
                                            var put_12;
                                            put_12 = objectStore_17.put({f0_c: '<object>', f1_f: '<null>'}, 'riMnZoyTPs');
                                            var put_13;
                                            put_13 = objectStore_9.put({f0_c: '<string>', f1_e: '<number>', f2_g: '<string>', f3_m: '<string>', f4_h: '<array>', f5_g: '<string>', f6_l: '<number>'}, 'qogruWw');
                                            var objectStore_18;
                                            objectStore_18 = db.createObjectStore('objectStore_18');
                                            var clear_12;
                                            clear_12 = objectStore_17.clear();
                                            var delete_3;
                                            try{
                                                KeyRange_26 = IDBKeyRange.bound('riMnZoyTPs', 'hDjWcKufIxm', false, false);
                                                delete_3 = objectStore_17.delete(KeyRange_26);
                                            }
                                            catch (e){
                                                KeyRange_27 = IDBKeyRange.only('hDjWcKufIxm');
                                                delete_3 = objectStore_17.delete(KeyRange_27);
                                            }

                                            var add_5;
                                            add_5 = objectStore_9.add({f0_y: '<number>'}, 'Xhi');
                                        };
                                        var add_6;
                                        add_6 = objectStore_16.add({f0_m: '<boolean>', f1_r: '<object>', f2_t: '<array>', f3_n: '<boolean>', f4_b: '<string>', f5_w: '<array>', f6_m: '<boolean>', f7_r: '<number>', f8_o: '<null>', f9_j: '<array>'}, 'HHVHUyZb');
                                        db.deleteObjectStore('objectStore_17')
                                        var get_5;
                                        try{
                                            KeyRange_28 = IDBKeyRange.bound('LIUPzf', 'LIUPzf', false, false);
                                            get_5 = objectStore_9.get(KeyRange_28);
                                        }
                                        catch (e){
                                            KeyRange_29 = IDBKeyRange.only('VwhUYOv');
                                            get_5 = objectStore_9.get(KeyRange_29);
                                        }

                                        objectStore_16.deleteIndex('index_24')
                                    };
                                    var index_25;
                                    index_25 = objectStore_15.createIndex('index_25', 'test', {multiEntry: false});
                                    var put_14;
                                    put_14 = objectStore_15.put({f0_r: '<null>', f1_w: '<null>', f2_f: '<boolean>'}, 'XszzbMNN');
                                    var index_16;
                                    index_16 = objectStore_13.index('index_17');
                                    var clear_13;
                                    clear_13 = objectStore_15.clear();
                                    var get_6;
                                    try{
                                        KeyRange_30 = IDBKeyRange.only('XszzbMNN');
                                        get_6 = objectStore_15.get(KeyRange_30);
                                    }
                                    catch (e){
                                        KeyRange_31 = IDBKeyRange.only('XszzbMNN');
                                        get_6 = objectStore_15.get(KeyRange_31);
                                    }

                                };
                                var delete_4;
                                try{
                                    KeyRange_32 = IDBKeyRange.only('HHVHUyZb');
                                    delete_4 = objectStore_16.delete(KeyRange_32);
                                }
                                catch (e){
                                    KeyRange_33 = IDBKeyRange.only('HHVHUyZb');
                                    delete_4 = objectStore_16.delete(KeyRange_33);
                                }

                                var get_7;
                                try{
                                    KeyRange_34 = IDBKeyRange.lowerBound('LIUPzf', false);
                                    get_7 = objectStore_9.get(KeyRange_34);
                                }
                                catch (e){
                                    KeyRange_35 = IDBKeyRange.only('qogruWw');
                                    get_7 = objectStore_9.get(KeyRange_35);
                                }

                                var put_15;
                                put_15 = objectStore_16.put({f0_d: '<null>', f1_t: '<string>', f2_w: '<object>', f3_s: '<string>', f4_o: '<string>', f5_h: '<string>', f6_n: '<string>', f7_j: '<number>', f8_v: '<number>'}, 'OfSmxxAxk');
                                var add_7;
                                add_7 = objectStore_13.add({f0_d: '<boolean>', f1_z: '<array>', f2_d: '<null>'}, 'MBipIFjnzB');
                                var delete_5;
                                try{
                                    KeyRange_36 = IDBKeyRange.only('HHVHUyZb');
                                    delete_5 = objectStore_16.delete(KeyRange_36);
                                }
                                catch (e){
                                    KeyRange_37 = IDBKeyRange.only('OfSmxxAxk');
                                    delete_5 = objectStore_16.delete(KeyRange_37);
                                }

                            };
                            var add_8;
                            add_8 = objectStore_16.add({f0_r: '<boolean>', f1_b: '<array>', f2_w: '<number>', f3_y: '<object>'}, 'OTiDt');
                            var get_8;
                            try{
                                KeyRange_38 = IDBKeyRange.lowerBound('qogruWw', false);
                                get_8 = objectStore_9.get(KeyRange_38);
                            }
                            catch (e){
                                KeyRange_39 = IDBKeyRange.only('qogruWw');
                                get_8 = objectStore_9.get(KeyRange_39);
                            }

                            var index_26;
                            index_26 = objectStore_13.createIndex('index_26', 'test', {unique: true, multiEntry: false});
                            var add_9;
                            add_9 = objectStore_16.add({f0_k: '<array>', f1_o: '<object>', f2_j: '<object>'}, 'dkeQpoexkJ');
                        };
                        var add_10;
                        add_10 = objectStore_13.add({f0_o: '<object>', f1_t: '<array>', f2_g: '<boolean>', f3_b: '<array>', f4_q: '<array>'}, 'XXCqGQokXVjy');
                        db.deleteObjectStore('objectStore_13')
                        var add_11;
                        add_11 = objectStore_16.add({f0_z: '<array>', f1_y: '<object>', f2_c: '<object>', f3_g: '<array>', f4_c: '<string>', f5_r: '<array>', f6_t: '<boolean>', f7_z: '<null>', f8_z: '<array>', f9_x: '<array>'}, 'murrP');
                        var delete_6;
                        try{
                            KeyRange_40 = IDBKeyRange.bound('cYjaygBQz', 'Xhi', false, false);
                            delete_6 = objectStore_9.delete(KeyRange_40);
                        }
                        catch (e){
                            KeyRange_41 = IDBKeyRange.only('QQPlfTx');
                            delete_6 = objectStore_9.delete(KeyRange_41);
                        }

                        var index_17;
                        index_17 = objectStore_9.index('index_11');
                    };
                    var objectStore_19;
                    objectStore_19 = db.createObjectStore('objectStore_19', {keypath: 'olzOyBQvPtFp', autoIncrement: true});
                    var delete_7;
                    try{
                        KeyRange_42 = IDBKeyRange.lowerBound('XszzbMNN', false);
                        delete_7 = objectStore_15.delete(KeyRange_42);
                    }
                    catch (e){
                        KeyRange_43 = IDBKeyRange.only('XszzbMNN');
                        delete_7 = objectStore_15.delete(KeyRange_43);
                    }

                    var index_27;
                    index_27 = objectStore_16.createIndex('index_27', 'test', {multiEntry: true});
                    var count_8;
                    try{
                        KeyRange_44 = IDBKeyRange.bound('dkeQpoexkJ', 'OTiDt', true, false);
                        count_8 = objectStore_16.count(KeyRange_44);
                    }
                    catch (e){
                        KeyRange_45 = IDBKeyRange.only('OTiDt');
                        count_8 = objectStore_16.count(KeyRange_45);
                    }

                    var index_28;
                    index_28 = objectStore_19.createIndex('index_28', 'test');
                };
                var get_9;
                try{
                    KeyRange_46 = IDBKeyRange.bound('XszzbMNN', 'XszzbMNN', false, false);
                    get_9 = objectStore_15.get(KeyRange_46);
                }
                catch (e){
                    KeyRange_47 = IDBKeyRange.only('XszzbMNN');
                    get_9 = objectStore_15.get(KeyRange_47);
                }

                db.deleteObjectStore('objectStore_15')
                var objectStore_20;
                objectStore_20 = db.createObjectStore('objectStore_20', {keypath: 'euLr.bWv.zBpZmKI.gpqzIlIJGa.VyEZRf.KLatsoQ.RdbHTWN.DVOpY.gtkmBTlsR.fDsbdjMg', autoIncrement: false});
                var index_29;
                index_29 = objectStore_20.createIndex('index_29', 'test', {unique: true});
                var put_16;
                put_16 = objectStore_20.put({f0_b: '<number>'}, 'pnNUSKeww');
            };
            var index_18;
            index_18 = objectStore_9.index('index_12');
            var delete_8;
            try{
                KeyRange_48 = IDBKeyRange.only('Xhi');
                delete_8 = objectStore_9.delete(KeyRange_48);
            }
            catch (e){
                KeyRange_49 = IDBKeyRange.only('LIUPzf');
                delete_8 = objectStore_9.delete(KeyRange_49);
            }

            db.deleteObjectStore('objectStore_9')
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_4210')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
