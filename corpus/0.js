let db;
const openRequest = window.indexedDB.open('str_4925', '89')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0');
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_1');
    var index_0 = objectStore_1.createIndex('index_0', 'test', {unique: false, multiEntry: true});
    var index_1 = objectStore_0.createIndex('index_1', 'test', {unique: true, multiEntry: true});
    var clear_1 = objectStore_1.clear();
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'VWj', autoIncrement: false});
    var count_0 = objectStore_2.count();
    var getAllKeys_0 = objectStore_0.getAllKeys();
    clear_0.onsuccess = (event) => {
        var getAll_0;
        getAll_0 = objectStore_0.getAll();
        var count_1;
        count_1 = objectStore_2.count();
        db.deleteObjectStore('objectStore_1')
        var getAllKeys_1;
        getAllKeys_1 = objectStore_2.getAllKeys();
        count_1.onsuccess = (event) => {
            var add_0;
            add_0 = objectStore_0.add({f0_i: '<object>', f1_c: '<string>', f2_j: '<number>', f3_p: '<boolean>', f4_u: '<string>', f5_b: '<boolean>', f6_z: '<array>', f7_j: '<null>', f8_y: '<null>', f9_u: '<null>'}, 'yEqCRr');
            var index_2;
            index_2 = objectStore_0.createIndex('index_2', 'test', {multiEntry: true});
            add_0.onsuccess = (event) => {
                var add_1;
                add_1 = objectStore_2.add({f0_z: '<number>'}, 'CNXbTUfgKPxf');
                var index_3;
                index_3 = objectStore_0.createIndex('index_3', 'test', {multiEntry: false});
                getAllKeys_0.onsuccess = (event) => {
                    var get_0;
                    get_0 = objectStore_2.get('CNXbTUfgKPxf');
                    var index_4;
                    index_4 = objectStore_2.createIndex('index_4', 'test');
                    var count_2;
                    count_2 = objectStore_2.count();
                    var objectStore_3;
                    objectStore_3 = db.createObjectStore('objectStore_3', {autoIncrement: true});
                    var getAllKeys_2;
                    getAllKeys_2 = objectStore_3.getAllKeys();
                    getAllKeys_2.onsuccess = (event) => {
                        KeyRange_0 = IDBKeyRange.bound('CNXbTUfgKPxf', 'CNXbTUfgKPxf', false, false);
                        var count_3;
                        try{
                            count_3 = objectStore_2.count(KeyRange_0);
                        }
                        catch (e){
                            KeyRange_1 = IDBKeyRange.only('CNXbTUfgKPxf');
                            count_3 = objectStore_2.count(KeyRange_1);
                        }

                        var index_5;
                        index_5 = objectStore_3.createIndex('index_5', 'test');
                        KeyRange_2 = IDBKeyRange.only('CNXbTUfgKPxf');
                        var delete_0;
                        try{
                            delete_0 = objectStore_2.delete(KeyRange_2);
                        }
                        catch (e){
                            KeyRange_3 = IDBKeyRange.only('CNXbTUfgKPxf');
                            delete_0 = objectStore_2.delete(KeyRange_3);
                        }

                        var index_0;
                        index_0 = objectStore_0.index('index_1');
                        clear_1.onsuccess = (event) => {
                            var count_4;
                            count_4 = objectStore_2.count();
                            var index_6;
                            index_6 = objectStore_3.createIndex('index_6', 'test', {multiEntry: false});
                            var put_0;
                            put_0 = objectStore_3.put({f0_o: '<number>', f1_b: '<array>', f2_h: '<number>'}, 'JXFA');
                            db.deleteObjectStore('objectStore_2')
                            KeyRange_4 = IDBKeyRange.lowerBound('yEqCRr', false);
                            var get_1;
                            try{
                                get_1 = objectStore_0.get(KeyRange_4);
                            }
                            catch (e){
                                KeyRange_5 = IDBKeyRange.only('yEqCRr');
                                get_1 = objectStore_0.get(KeyRange_5);
                            }

                            count_4.onsuccess = (event) => {
                                var getAllKeys_3;
                                getAllKeys_3 = objectStore_3.getAllKeys();
                                var index_7;
                                index_7 = objectStore_0.createIndex('index_7', 'test');
                                var getAllKeys_4;
                                getAllKeys_4 = objectStore_3.getAllKeys('JXFA', 1110673691);
                                add_1.onsuccess = (event) => {
                                    objectStore_0.deleteIndex('index_3')
                                    var index_8;
                                    index_8 = objectStore_0.createIndex('index_8', 'test', {multiEntry: false});
                                    var clear_2;
                                    clear_2 = objectStore_0.clear();
                                    put_0.onsuccess = (event) => {
                                        var getAll_1;
                                        getAll_1 = objectStore_3.getAll();
                                        var index_1;
                                        index_1 = objectStore_0.index('index_1');
                                        var clear_3;
                                        clear_3 = objectStore_0.clear();
                                        var getAll_2;
                                        getAll_2 = objectStore_0.getAll();
                                        count_4.onsuccess = (event) => {
                                            var add_2;
                                            add_2 = objectStore_3.add({f0_v: '<number>', f1_v: '<boolean>', f2_p: '<null>'}, 'tXT');
                                            KeyRange_6 = IDBKeyRange.lowerBound('yEqCRr', true);
                                            var get_2;
                                            try{
                                                get_2 = objectStore_0.get(KeyRange_6);
                                            }
                                            catch (e){
                                                KeyRange_7 = IDBKeyRange.only('yEqCRr');
                                                get_2 = objectStore_0.get(KeyRange_7);
                                            }

                                            var delete_1;
                                            delete_1 = objectStore_0.delete('yEqCRr');
                                            var getAllKeys_5;
                                            getAllKeys_5 = objectStore_0.getAllKeys();
                                            var get_3;
                                            get_3 = objectStore_3.get('JXFA');
                                            var index_9;
                                            index_9 = objectStore_0.createIndex('index_9', 'test', {unique: true});
                                            objectStore_0.deleteIndex('index_9')
                                        };
                                        KeyRange_8 = IDBKeyRange.bound('JXFA', 'JXFA', false, true);
                                        var count_5;
                                        try{
                                            count_5 = objectStore_3.count(KeyRange_8);
                                        }
                                        catch (e){
                                            KeyRange_9 = IDBKeyRange.only('tXT');
                                            count_5 = objectStore_3.count(KeyRange_9);
                                        }

                                        KeyRange_10 = IDBKeyRange.bound('tXT', 'tXT', false, false);
                                        var get_4;
                                        try{
                                            get_4 = objectStore_3.get(KeyRange_10);
                                        }
                                        catch (e){
                                            KeyRange_11 = IDBKeyRange.only('JXFA');
                                            get_4 = objectStore_3.get(KeyRange_11);
                                        }

                                        var index_2;
                                        index_2 = objectStore_3.index('index_6');
                                        KeyRange_12 = IDBKeyRange.lowerBound('yEqCRr', false);
                                        var delete_2;
                                        try{
                                            delete_2 = objectStore_0.delete(KeyRange_12);
                                        }
                                        catch (e){
                                            KeyRange_13 = IDBKeyRange.only('yEqCRr');
                                            delete_2 = objectStore_0.delete(KeyRange_13);
                                        }

                                        var clear_4;
                                        clear_4 = objectStore_3.clear();
                                    };
                                    var put_1;
                                    put_1 = objectStore_0.put({f0_u: '<array>', f1_d: '<boolean>'}, 'dOSpoCTaC');
                                    KeyRange_14 = IDBKeyRange.lowerBound('dOSpoCTaC', true);
                                    var get_5;
                                    try{
                                        get_5 = objectStore_0.get(KeyRange_14);
                                    }
                                    catch (e){
                                        KeyRange_15 = IDBKeyRange.only('yEqCRr');
                                        get_5 = objectStore_0.get(KeyRange_15);
                                    }

                                    var put_2;
                                    put_2 = objectStore_0.put({f0_c: '<null>', f1_v: '<string>', f2_y: '<boolean>', f3_e: '<object>'}, 'lKRs');
                                    var index_10;
                                    index_10 = objectStore_0.createIndex('index_10', 'test', {multiEntry: false});
                                    var index_11;
                                    index_11 = objectStore_0.createIndex('index_11', 'test', {unique: false, multiEntry: true});
                                };
                                db.deleteObjectStore('objectStore_3')
                                var objectStore_4;
                                objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'ltdfiTbbo'});
                                var put_3;
                                put_3 = objectStore_0.put({f0_m: '<string>', f1_q: '<array>', f2_p: '<string>', f3_h: '<string>'}, 'pJbOuWZPjfV');
                                var index_3;
                                index_3 = objectStore_0.index('index_7');
                                var get_6;
                                get_6 = objectStore_0.get('pJbOuWZPjfV');
                            };
                            var index_4;
                            index_4 = objectStore_0.index('index_2');
                            KeyRange_16 = IDBKeyRange.bound('yEqCRr', 'pJbOuWZPjfV', true, true);
                            var getAll_3;
                            try{
                                getAll_3 = objectStore_0.getAll(KeyRange_16, 1364767670);
                            }
                            catch (e){
                                KeyRange_17 = IDBKeyRange.only('lKRs');
                                getAll_3 = objectStore_0.getAll(KeyRange_16, KeyRange_17);
                            }

                            var index_12;
                            index_12 = objectStore_0.createIndex('index_12', 'test', {unique: false});
                            var get_7;
                            get_7 = objectStore_0.get('dOSpoCTaC');
                            var index_13;
                            index_13 = objectStore_0.createIndex('index_13', 'test', {unique: true});
                        };
                        db.deleteObjectStore('objectStore_0')
                    };
                };
            };
            var objectStore_5;
            objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'lllz', autoIncrement: false});
        };
    };
    clear_0.onsuccess = (event) => {
        var objectStore_6;
        objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'DAbjZdEhUQF'});
        var objectStore_7;
        objectStore_7 = db.createObjectStore('objectStore_7', {keypath: 'htoiqgmQ', autoIncrement: false});
        clear_0.onsuccess = (event) => {
            var clear_5;
            clear_5 = objectStore_6.clear();
            var count_6;
            count_6 = objectStore_6.count();
            var add_3;
            add_3 = objectStore_6.add({f0_o: '<string>', f1_m: '<array>', f2_v: '<boolean>', f3_r: '<string>', f4_m: '<null>', f5_n: '<null>'}, 'nTJqPoX');
            count_0.onsuccess = (event) => {
                db.deleteObjectStore('objectStore_7')
                var objectStore_8;
                objectStore_8 = db.createObjectStore('objectStore_8');
                var add_4;
                add_4 = objectStore_6.add({f0_i: '<null>', f1_t: '<number>', f2_z: '<array>'}, 'wVp');
                count_0.onsuccess = (event) => {
                    KeyRange_18 = IDBKeyRange.bound('nTJqPoX', 'nTJqPoX', false, false);
                    var delete_3;
                    try{
                        delete_3 = objectStore_6.delete(KeyRange_18);
                    }
                    catch (e){
                        KeyRange_19 = IDBKeyRange.only('wVp');
                        delete_3 = objectStore_6.delete(KeyRange_19);
                    }

                    db.deleteObjectStore('objectStore_6')
                    var index_14;
                    index_14 = objectStore_8.createIndex('index_14', 'test');
                    add_4.onsuccess = (event) => {
                        var objectStore_9;
                        objectStore_9 = db.createObjectStore('objectStore_9');
                        var index_15;
                        index_15 = objectStore_9.createIndex('index_15', 'test', {multiEntry: false});
                        getAllKeys_0.onsuccess = (event) => {
                            var clear_6;
                            clear_6 = objectStore_8.clear();
                            clear_6.onsuccess = (event) => {
                                var index_16;
                                index_16 = objectStore_8.createIndex('index_16', 'test', {unique: false});
                                var getAll_4;
                                getAll_4 = objectStore_8.getAll();
                                getAllKeys_0.onsuccess = (event) => {
                                    var index_17;
                                    index_17 = objectStore_9.createIndex('index_17', 'test', {multiEntry: true});
                                    var index_18;
                                    index_18 = objectStore_9.createIndex('index_18', 'test', {unique: false});
                                    getAllKeys_0.onsuccess = (event) => {
                                        db.deleteObjectStore('objectStore_8')
                                        var objectStore_10;
                                        objectStore_10 = db.createObjectStore('objectStore_10', {keypath: 'cUIHp'});
                                        var index_19;
                                        index_19 = objectStore_9.createIndex('index_19', 'test', {unique: false, multiEntry: false});
                                        clear_5.onsuccess = (event) => {
                                            var add_5;
                                            add_5 = objectStore_9.add({f0_t: '<boolean>'}, 'SSWDIG');
                                            var index_5;
                                            index_5 = objectStore_9.index('index_17');
                                            KeyRange_20 = IDBKeyRange.only('SSWDIG');
                                            var getAll_5;
                                            try{
                                                getAll_5 = objectStore_9.getAll(KeyRange_20, 3962140107);
                                            }
                                            catch (e){
                                                KeyRange_21 = IDBKeyRange.only('SSWDIG');
                                                getAll_5 = objectStore_9.getAll(KeyRange_20, KeyRange_21);
                                            }

                                            db.deleteObjectStore('objectStore_9')
                                            var put_4;
                                            put_4 = objectStore_10.put({f0_z: '<number>', f1_i: '<object>', f2_e: '<number>'}, 'Ora');
                                            var put_5;
                                            put_5 = objectStore_10.put({f0_x: '<null>', f1_n: '<null>', f2_j: '<null>', f3_z: '<array>', f4_k: '<array>', f5_m: '<object>', f6_j: '<string>', f7_z: '<object>', f8_m: '<number>', f9_e: '<string>'}, 'SQSuSWo');
                                            KeyRange_22 = IDBKeyRange.bound('SQSuSWo', 'SQSuSWo', true, false);
                                            var get_8;
                                            try{
                                                get_8 = objectStore_10.get(KeyRange_22);
                                            }
                                            catch (e){
                                                KeyRange_23 = IDBKeyRange.only('SQSuSWo');
                                                get_8 = objectStore_10.get(KeyRange_23);
                                            }

                                            KeyRange_24 = IDBKeyRange.bound('SQSuSWo', 'SQSuSWo', false, true);
                                            var getAllKeys_6;
                                            try{
                                                getAllKeys_6 = objectStore_10.getAllKeys(KeyRange_24);
                                            }
                                            catch (e){
                                                KeyRange_25 = IDBKeyRange.only('Ora');
                                                getAllKeys_6 = objectStore_10.getAllKeys(KeyRange_25);
                                            }

                                            var add_6;
                                            add_6 = objectStore_10.add({f0_k: '<array>'}, 'SxGrwfrasg');
                                        };
                                        var count_7;
                                        count_7 = objectStore_10.count();
                                        var put_6;
                                        put_6 = objectStore_10.put({f0_n: '<array>'}, 'HTL');
                                        KeyRange_26 = IDBKeyRange.only('SxGrwfrasg');
                                        var count_8;
                                        try{
                                            count_8 = objectStore_10.count(KeyRange_26);
                                        }
                                        catch (e){
                                            KeyRange_27 = IDBKeyRange.only('SQSuSWo');
                                            count_8 = objectStore_10.count(KeyRange_27);
                                        }

                                        KeyRange_28 = IDBKeyRange.bound('SQSuSWo', 'Ora', false, false);
                                        var delete_4;
                                        try{
                                            delete_4 = objectStore_10.delete(KeyRange_28);
                                        }
                                        catch (e){
                                            KeyRange_29 = IDBKeyRange.only('SxGrwfrasg');
                                            delete_4 = objectStore_10.delete(KeyRange_29);
                                        }

                                        var add_7;
                                        add_7 = objectStore_10.add({f0_q: '<string>', f1_w: '<null>', f2_q: '<null>', f3_i: '<boolean>', f4_d: '<null>', f5_n: '<boolean>', f6_q: '<array>', f7_v: '<number>', f8_y: '<array>', f9_g: '<number>'}, 'ukfuaN');
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'ofo'});
    var add_8 = objectStore_11.add({f0_i: '<null>', f1_l: '<number>', f2_y: '<string>', f3_l: '<number>', f4_m: '<array>', f5_r: '<number>', f6_x: '<null>', f7_k: '<number>', f8_i: '<null>', f9_q: '<object>'}, 'XIWSb');
    var put_7 = objectStore_11.put({f0_b: '<number>', f1_f: '<null>', f2_j: '<string>', f3_x: '<array>', f4_s: '<object>', f5_x: '<object>', f6_h: '<number>'}, 'JHAY');
    var index_20 = objectStore_11.createIndex('index_20', 'test', {unique: true, multiEntry: true});
    var index_21 = objectStore_11.createIndex('index_21', 'test', {unique: false, multiEntry: true});
    var index_22 = objectStore_11.createIndex('index_22', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_11')
    count_0.onsuccess = (event) => {
        count_0.onsuccess = (event) => {
            put_7.onsuccess = (event) => {
                put_7.onsuccess = (event) => {
                    count_0.onsuccess = (event) => {
                        getAllKeys_0.onsuccess = (event) => {
                            var objectStore_12;
                            objectStore_12 = db.createObjectStore('objectStore_12', {autoIncrement: true});
                            var getAll_6;
                            getAll_6 = objectStore_12.getAll();
                            var count_9;
                            count_9 = objectStore_12.count();
                            put_7.onsuccess = (event) => {
                                db.deleteObjectStore('objectStore_12')
                                count_0.onsuccess = (event) => {
                                    count_0.onsuccess = (event) => {
                                        getAll_6.onsuccess = (event) => {

                                        };
                                    };
                                    var objectStore_13;
                                    objectStore_13 = db.createObjectStore('objectStore_13', {autoIncrement: true});
                                };
                            };
                        };
                        var objectStore_14;
                        objectStore_14 = db.createObjectStore('objectStore_14', {keypath: 'jCzhCz.HNgJ.ZjoXXrGt.XBJDlJkzLS.uwygHmzbY.yxgMZy'});
                    };
                };
            };
        };
    };
    var objectStore_15 = db.createObjectStore('objectStore_15', {keypath: 'YfVIdU', autoIncrement: true});
    db.deleteObjectStore('objectStore_15')
    put_7.onsuccess = (event) => {
        count_0.onsuccess = (event) => {
            var objectStore_16;
            objectStore_16 = db.createObjectStore('objectStore_16', {autoIncrement: false});
            var clear_7;
            clear_7 = objectStore_16.clear();
            var index_23;
            index_23 = objectStore_16.createIndex('index_23', 'test', {multiEntry: false});
            count_0.onsuccess = (event) => {
                var put_8;
                put_8 = objectStore_16.put({f0_b: '<boolean>', f1_r: '<string>', f2_p: '<boolean>', f3_o: '<number>', f4_s: '<string>', f5_a: '<null>'}, 'ZyYCaJsjhFTV');
                var count_10;
                count_10 = objectStore_16.count();
                KeyRange_30 = IDBKeyRange.only('ZyYCaJsjhFTV');
                var count_11;
                try{
                    count_11 = objectStore_16.count(KeyRange_30);
                }
                catch (e){
                    KeyRange_31 = IDBKeyRange.only('ZyYCaJsjhFTV');
                    count_11 = objectStore_16.count(KeyRange_31);
                }

                var index_24;
                index_24 = objectStore_16.createIndex('index_24', 'test', {multiEntry: false});
                var add_9;
                add_9 = objectStore_16.add({f0_h: '<array>'}, 'RzmovzjvihO');
                count_0.onsuccess = (event) => {
                    var put_9;
                    put_9 = objectStore_16.put({f0_r: '<boolean>', f1_n: '<boolean>', f2_l: '<number>', f3_y: '<array>', f4_j: '<string>', f5_m: '<boolean>'}, 'HUQEqPcAvm');
                    db.deleteObjectStore('objectStore_16')
                    var objectStore_17;
                    objectStore_17 = db.createObjectStore('objectStore_17', {keypath: 'OESleT'});
                    clear_0.onsuccess = (event) => {
                        var add_10;
                        add_10 = objectStore_17.add({f0_f: '<null>', f1_j: '<boolean>', f2_p: '<boolean>'}, 'ICqRUMic');
                        KeyRange_32 = IDBKeyRange.lowerBound('ICqRUMic', true);
                        var get_9;
                        try{
                            get_9 = objectStore_17.get(KeyRange_32);
                        }
                        catch (e){
                            KeyRange_33 = IDBKeyRange.only('ICqRUMic');
                            get_9 = objectStore_17.get(KeyRange_33);
                        }

                        add_9.onsuccess = (event) => {
                            var add_11;
                            add_11 = objectStore_17.add({f0_k: '<boolean>', f1_d: '<string>'}, 'RaMCkjaYv');
                            db.deleteObjectStore('objectStore_17')
                            clear_1.onsuccess = (event) => {
                                put_8.onsuccess = (event) => {
                                    clear_0.onsuccess = (event) => {
                                        add_8.onsuccess = (event) => {

                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var objectStore_18 = db.createObjectStore('objectStore_18');
    var index_25 = objectStore_18.createIndex('index_25', 'test', {unique: true});
    var add_12 = objectStore_18.add({f0_h: '<string>', f1_e: '<null>', f2_d: '<object>', f3_r: '<null>', f4_c: '<object>', f5_t: '<boolean>'}, 'yOFPqRqfiyKD');
    KeyRange_34 = IDBKeyRange.only('yOFPqRqfiyKD');
    var get_10;
    try{
        get_10 = objectStore_18.get(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('yOFPqRqfiyKD');
        get_10 = objectStore_18.get(KeyRange_35);
    }

    var index_26 = objectStore_18.createIndex('index_26', 'test', {unique: true});
    put_7.onsuccess = (event) => {
        var index_27;
        index_27 = objectStore_18.createIndex('index_27', 'test');
        KeyRange_36 = IDBKeyRange.lowerBound('yOFPqRqfiyKD', false);
        var getAll_7;
        try{
            getAll_7 = objectStore_18.getAll(KeyRange_36);
        }
        catch (e){
            KeyRange_37 = IDBKeyRange.only('yOFPqRqfiyKD');
            getAll_7 = objectStore_18.getAll(KeyRange_37);
        }

        var index_6;
        index_6 = objectStore_18.index('index_25');
        KeyRange_38 = IDBKeyRange.bound('yOFPqRqfiyKD', 'yOFPqRqfiyKD', false, false);
        var delete_5;
        try{
            delete_5 = objectStore_18.delete(KeyRange_38);
        }
        catch (e){
            KeyRange_39 = IDBKeyRange.only('yOFPqRqfiyKD');
            delete_5 = objectStore_18.delete(KeyRange_39);
        }

        db.deleteObjectStore('objectStore_18')
        delete_5.onsuccess = (event) => {
            add_8.onsuccess = (event) => {
                var objectStore_19;
                objectStore_19 = db.createObjectStore('objectStore_19', {keypath: 'bbBSZa', autoIncrement: true});
                var add_13;
                add_13 = objectStore_19.add({f0_i: '<boolean>', f1_d: '<string>', f2_o: '<null>', f3_j: '<string>', f4_g: '<string>', f5_y: '<number>', f6_j: '<array>'}, 'bPk');
                db.deleteObjectStore('objectStore_19')
                put_7.onsuccess = (event) => {
                    clear_0.onsuccess = (event) => {
                        add_12.onsuccess = (event) => {
                            var objectStore_20;
                            objectStore_20 = db.createObjectStore('objectStore_20', {keypath: 'proskLRKXyI'});
                            get_10.onsuccess = (event) => {
                                getAllKeys_0.onsuccess = (event) => {
                                    var add_14;
                                    add_14 = objectStore_20.add({f0_t: '<null>', f1_y: '<object>', f2_n: '<array>', f3_y: '<array>', f4_d: '<boolean>', f5_y: '<null>', f6_f: '<object>', f7_j: '<boolean>'}, 'yBRnUbDRLM');
                                    KeyRange_40 = IDBKeyRange.bound('yBRnUbDRLM', 'yBRnUbDRLM', true, true);
                                    var count_12;
                                    try{
                                        count_12 = objectStore_20.count(KeyRange_40);
                                    }
                                    catch (e){
                                        KeyRange_41 = IDBKeyRange.only('yBRnUbDRLM');
                                        count_12 = objectStore_20.count(KeyRange_41);
                                    }

                                    db.deleteObjectStore('objectStore_20')
                                    count_12.onsuccess = (event) => {
                                        clear_0.onsuccess = (event) => {

                                        };
                                    };
                                    var objectStore_21;
                                    objectStore_21 = db.createObjectStore('objectStore_21');
                                    var clear_8;
                                    clear_8 = objectStore_21.clear();
                                };
                            };
                        };
                        var objectStore_22;
                        objectStore_22 = db.createObjectStore('objectStore_22', {autoIncrement: true});
                    };
                    var objectStore_23;
                    objectStore_23 = db.createObjectStore('objectStore_23');
                };
            };
        };
        var objectStore_24;
        objectStore_24 = db.createObjectStore('objectStore_24');
        db.deleteObjectStore('objectStore_24')
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_4925')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
