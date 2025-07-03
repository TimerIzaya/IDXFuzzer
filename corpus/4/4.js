let db;
const openRequest = window.indexedDB.open('str_9227', '58')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_172', {keypath: 'cGiexwuGNW.COQZWzvKNPia.xcdOvlrBonfd.vLMPHSBzih.XLQiSYRB.LGSQzE'});
    var objectStore_1 = db.createObjectStore('objectStore_173', {autoIncrement: true});
    var add_0 = objectStore_1.add({f0_j: '<null>', f1_b: '<object>', f2_f: '<boolean>', f3_w: '<array>'}, 'hAvWy');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_1.clear();
    var put_0 = objectStore_1.put({f0_u: '<null>', f1_r: '<number>', f2_k: '<number>', f3_s: '<object>', f4_b: '<boolean>', f5_p: '<object>'}, 'WWHfqDH');
    var put_1 = objectStore_0.put({f0_g: '<number>', f1_t: '<boolean>', f2_w: '<object>', f3_w: '<number>', f4_d: '<null>', f5_f: '<array>', f6_i: '<object>'}, 'fajPkkccJ');
    var add_1 = objectStore_1.add({f0_r: '<null>', f1_l: '<string>', f2_c: '<number>', f3_x: '<boolean>', f4_u: '<null>', f5_q: '<object>', f6_c: '<array>', f7_t: '<null>'}, 'erAWRNnYXSqA');
    clear_0.onsuccess = (event) => {
        var put_2;
        put_2 = objectStore_0.put({f0_e: '<array>', f1_o: '<object>', f2_y: '<null>', f3_f: '<object>', f4_j: '<boolean>', f5_f: '<string>', f6_h: '<array>', f7_s: '<object>', f8_r: '<null>'}, 'VZYxsTlvp');
        var clear_2;
        clear_2 = objectStore_1.clear();
        var put_3;
        put_3 = objectStore_1.put({f0_z: '<object>', f1_t: '<null>', f2_c: '<boolean>', f3_w: '<object>', f4_f: '<string>', f5_m: '<object>', f6_r: '<number>', f7_r: '<boolean>', f8_w: '<array>'}, 'npJcPZGVB');
        put_3.onsuccess = (event) => {
            db.deleteObjectStore('objectStore_173')
            var put_4;
            put_4 = objectStore_0.put({f0_x: '<array>', f1_w: '<array>', f2_z: '<array>'}, 'uAPlBmcSmgZ');
            var delete_0;
            try{
                KeyRange_0 = IDBKeyRange.bound('fajPkkccJ', 'fajPkkccJ', true, false);
                delete_0 = objectStore_0.delete(KeyRange_0);
            }
            catch (e){
                KeyRange_1 = IDBKeyRange.only('uAPlBmcSmgZ');
                delete_0 = objectStore_0.delete(KeyRange_1);
            }

            clear_0.onsuccess = (event) => {
                var index_139;
                index_139 = objectStore_0.createIndex('index_139', 'test', {unique: false, multiEntry: false});
                var delete_1;
                try{
                    KeyRange_2 = IDBKeyRange.bound('VZYxsTlvp', 'uAPlBmcSmgZ', false, false);
                    delete_1 = objectStore_0.delete(KeyRange_2);
                }
                catch (e){
                    KeyRange_3 = IDBKeyRange.only('uAPlBmcSmgZ');
                    delete_1 = objectStore_0.delete(KeyRange_3);
                }

                var delete_2;
                try{
                    KeyRange_4 = IDBKeyRange.lowerBound('uAPlBmcSmgZ', false);
                    delete_2 = objectStore_0.delete(KeyRange_4);
                }
                catch (e){
                    KeyRange_5 = IDBKeyRange.only('fajPkkccJ');
                    delete_2 = objectStore_0.delete(KeyRange_5);
                }

                delete_0.onsuccess = (event) => {
                    var delete_3;
                    try{
                        KeyRange_6 = IDBKeyRange.only('VZYxsTlvp');
                        delete_3 = objectStore_0.delete(KeyRange_6);
                    }
                    catch (e){
                        KeyRange_7 = IDBKeyRange.only('uAPlBmcSmgZ');
                        delete_3 = objectStore_0.delete(KeyRange_7);
                    }

                    var count_0;
                    try{
                        KeyRange_8 = IDBKeyRange.bound('uAPlBmcSmgZ', 'fajPkkccJ', true, false);
                        count_0 = objectStore_0.count(KeyRange_8);
                    }
                    catch (e){
                        KeyRange_9 = IDBKeyRange.only('fajPkkccJ');
                        count_0 = objectStore_0.count(KeyRange_9);
                    }

                    count_0.onsuccess = (event) => {
                        objectStore_0.deleteIndex('index_139')
                        delete_3.onsuccess = (event) => {
                            var count_1;
                            count_1 = objectStore_0.count();
                            var get_0;
                            try{
                                KeyRange_10 = IDBKeyRange.only('VZYxsTlvp');
                                get_0 = objectStore_0.get(KeyRange_10);
                            }
                            catch (e){
                                KeyRange_11 = IDBKeyRange.only('VZYxsTlvp');
                                get_0 = objectStore_0.get(KeyRange_11);
                            }

                            var count_2;
                            try{
                                KeyRange_12 = IDBKeyRange.only('fajPkkccJ');
                                count_2 = objectStore_0.count(KeyRange_12);
                            }
                            catch (e){
                                KeyRange_13 = IDBKeyRange.only('uAPlBmcSmgZ');
                                count_2 = objectStore_0.count(KeyRange_13);
                            }

                            var count_3;
                            count_3 = objectStore_0.count();
                            put_0.onsuccess = (event) => {
                                var objectStore_2;
                                objectStore_2 = db.createObjectStore('objectStore_174', {keypath: 'tIGDtqso'});
                                var count_4;
                                count_4 = objectStore_0.count();
                                clear_2.onsuccess = (event) => {
                                    var index_140;
                                    index_140 = objectStore_2.createIndex('index_140', 'test', {unique: true});
                                    var count_5;
                                    try{
                                        KeyRange_14 = IDBKeyRange.bound('VZYxsTlvp', 'VZYxsTlvp', true, true);
                                        count_5 = objectStore_0.count(KeyRange_14);
                                    }
                                    catch (e){
                                        KeyRange_15 = IDBKeyRange.only('fajPkkccJ');
                                        count_5 = objectStore_0.count(KeyRange_15);
                                    }

                                    db.deleteObjectStore('objectStore_172')
                                    var index_141;
                                    index_141 = objectStore_2.createIndex('index_141', 'test', {unique: true, multiEntry: true});
                                    delete_2.onsuccess = (event) => {
                                        var put_5;
                                        put_5 = objectStore_2.put({f0_q: '<string>', f1_z: '<object>', f2_w: '<boolean>', f3_f: '<string>', f4_c: '<object>', f5_j: '<number>', f6_t: '<null>'}, 'yglA');
                                        var index_142;
                                        index_142 = objectStore_2.createIndex('index_142', 'test', {unique: false});
                                        put_3.onsuccess = (event) => {
                                            var index_143;
                                            index_143 = objectStore_2.createIndex('index_143', 'test', {unique: true});
                                            var index_0;
                                            index_0 = objectStore_2.index('index_143');
                                            var index_1;
                                            index_1 = objectStore_2.index('index_143');
                                            var index_144;
                                            index_144 = objectStore_2.createIndex('index_144', 'test', {unique: true, multiEntry: false});
                                            var index_2;
                                            index_2 = objectStore_2.index('index_140');
                                            var put_6;
                                            put_6 = objectStore_2.put({f0_r: '<boolean>', f1_f: '<number>', f2_h: '<boolean>', f3_e: '<null>', f4_d: '<string>', f5_g: '<object>', f6_m: '<string>', f7_e: '<number>', f8_t: '<string>'}, 'vrFgMuieBpCc');
                                            var index_3;
                                            index_3 = objectStore_2.index('index_141');
                                            var count_6;
                                            try{
                                                KeyRange_16 = IDBKeyRange.lowerBound('vrFgMuieBpCc', true);
                                                count_6 = objectStore_2.count(KeyRange_16);
                                            }
                                            catch (e){
                                                KeyRange_17 = IDBKeyRange.only('yglA');
                                                count_6 = objectStore_2.count(KeyRange_17);
                                            }

                                            var index_145;
                                            index_145 = objectStore_2.createIndex('index_145', 'test', {multiEntry: false});
                                            var get_1;
                                            try{
                                                KeyRange_18 = IDBKeyRange.bound('vrFgMuieBpCc', 'yglA', true, false);
                                                get_1 = objectStore_2.get(KeyRange_18);
                                            }
                                            catch (e){
                                                KeyRange_19 = IDBKeyRange.only('yglA');
                                                get_1 = objectStore_2.get(KeyRange_19);
                                            }

                                        };
                                        var index_146;
                                        index_146 = objectStore_2.createIndex('index_146', 'test', {multiEntry: true});
                                        var objectStore_3;
                                        objectStore_3 = db.createObjectStore('objectStore_175', {keypath: 'xvU', autoIncrement: false});
                                        var index_147;
                                        index_147 = objectStore_3.createIndex('index_147', 'test', {multiEntry: false});
                                        var get_2;
                                        try{
                                            KeyRange_20 = IDBKeyRange.only('vrFgMuieBpCc');
                                            get_2 = objectStore_2.get(KeyRange_20);
                                        }
                                        catch (e){
                                            KeyRange_21 = IDBKeyRange.only('yglA');
                                            get_2 = objectStore_2.get(KeyRange_21);
                                        }

                                        var index_4;
                                        index_4 = objectStore_3.index('index_147');
                                    };
                                    var get_3;
                                    try{
                                        KeyRange_22 = IDBKeyRange.bound('vrFgMuieBpCc', 'yglA', false, true);
                                        get_3 = objectStore_2.get(KeyRange_22);
                                    }
                                    catch (e){
                                        KeyRange_23 = IDBKeyRange.only('vrFgMuieBpCc');
                                        get_3 = objectStore_2.get(KeyRange_23);
                                    }

                                    var add_2;
                                    add_2 = objectStore_2.add({f0_r: '<object>', f1_n: '<object>', f2_y: '<object>'}, 'xFiAyntkg');
                                    var index_148;
                                    index_148 = objectStore_2.createIndex('index_148', 'test', {unique: true});
                                    var delete_4;
                                    try{
                                        KeyRange_24 = IDBKeyRange.lowerBound('vrFgMuieBpCc', true);
                                        delete_4 = objectStore_2.delete(KeyRange_24);
                                    }
                                    catch (e){
                                        KeyRange_25 = IDBKeyRange.only('xFiAyntkg');
                                        delete_4 = objectStore_2.delete(KeyRange_25);
                                    }

                                    var count_7;
                                    try{
                                        KeyRange_26 = IDBKeyRange.lowerBound('xFiAyntkg', true);
                                        count_7 = objectStore_2.count(KeyRange_26);
                                    }
                                    catch (e){
                                        KeyRange_27 = IDBKeyRange.only('xFiAyntkg');
                                        count_7 = objectStore_2.count(KeyRange_27);
                                    }

                                };
                                var objectStore_4;
                                objectStore_4 = db.createObjectStore('objectStore_176');
                                var get_4;
                                try{
                                    KeyRange_28 = IDBKeyRange.bound('vrFgMuieBpCc', 'vrFgMuieBpCc', false, false);
                                    get_4 = objectStore_2.get(KeyRange_28);
                                }
                                catch (e){
                                    KeyRange_29 = IDBKeyRange.only('xFiAyntkg');
                                    get_4 = objectStore_2.get(KeyRange_29);
                                }

                                var count_8;
                                count_8 = objectStore_2.count();
                                var add_3;
                                add_3 = objectStore_4.add({f0_k: '<object>', f1_d: '<object>', f2_w: '<null>', f3_s: '<number>'}, 'SaTiu');
                            };
                            var objectStore_5;
                            objectStore_5 = db.createObjectStore('objectStore_177', {keypath: 'HUsyyiuTfehu.EefQIMzPZi'});
                        };
                        var objectStore_6;
                        objectStore_6 = db.createObjectStore('objectStore_178', {autoIncrement: true});
                    };
                };
                var objectStore_7;
                objectStore_7 = db.createObjectStore('objectStore_179', {keypath: 'XNmneg'});
                var index_149;
                index_149 = objectStore_7.createIndex('index_149', 'test', {multiEntry: false});
                db.deleteObjectStore('objectStore_179')
            };
        };
        var objectStore_8;
        objectStore_8 = db.createObjectStore('objectStore_180');
    };
    var objectStore_9 = db.createObjectStore('objectStore_181', {keypath: 'AKwzd', autoIncrement: true});
    var objectStore_10 = db.createObjectStore('objectStore_182', {keypath: 'QAI'});
    var add_4 = objectStore_10.add({f0_d: '<object>'}, 'YfNJZZa');
    var put_7 = objectStore_10.put({f0_n: '<boolean>', f1_j: '<null>', f2_m: '<array>', f3_x: '<number>', f4_x: '<null>', f5_v: '<array>', f6_o: '<boolean>', f7_c: '<boolean>', f8_m: '<array>'}, 'pFHomXsjLEWM');
    var index_150 = objectStore_9.createIndex('index_150', 'test');
    var clear_3 = objectStore_9.clear();
    var get_5;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('YfNJZZa', true);
        get_5 = objectStore_10.get(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('YfNJZZa');
        get_5 = objectStore_10.get(KeyRange_31);
    }

    db.deleteObjectStore('objectStore_181')
    var objectStore_11 = db.createObjectStore('objectStore_183');
    var index_151 = objectStore_10.createIndex('index_151', 'test', {unique: false});
    db.deleteObjectStore('objectStore_183')
    objectStore_10.deleteIndex('index_151')
    var objectStore_12 = db.createObjectStore('objectStore_184', {keypath: 'ZJN', autoIncrement: false});
    var index_152 = objectStore_10.createIndex('index_152', 'test', {unique: true});
    var put_8 = objectStore_10.put({f0_m: '<number>', f1_j: '<null>', f2_r: '<null>', f3_c: '<null>'}, 'jxze');
    objectStore_10.deleteIndex('index_152')
    var count_9 = objectStore_10.count();
};
const deleteRequest = indexedDB.deleteDatabase('str_9227')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
