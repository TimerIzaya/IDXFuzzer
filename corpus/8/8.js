let db;
const openRequest = window.indexedDB.open('str_6943', '33')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_206');
    var put_0 = objectStore_0.put({f0_i: '<null>', f1_n: '<object>', f2_b: '<string>', f3_r: '<string>', f4_e: '<object>', f5_l: '<string>', f6_e: '<boolean>', f7_g: '<boolean>', f8_j: '<null>'}, 'GejAedpUeIHY');
    var index_200 = objectStore_0.createIndex('index_200', 'test', {multiEntry: true});
    var put_1 = objectStore_0.put({f0_l: '<object>', f1_z: '<null>', f2_v: '<null>', f3_r: '<object>', f4_z: '<array>'}, 'PrYYCh');
    var index_0 = objectStore_0.index('index_200');
    var index_201 = objectStore_0.createIndex('index_201', 'test');
    var put_2 = objectStore_0.put({f0_f: '<object>', f1_v: '<array>', f2_a: '<number>'}, 'BUv');
    var index_202 = objectStore_0.createIndex('index_202', 'test', {unique: true, multiEntry: false});
    var objectStore_1 = db.createObjectStore('objectStore_207', {autoIncrement: false});
    var index_203 = objectStore_1.createIndex('index_203', 'test', {unique: false});
    var add_0 = objectStore_1.add({f0_z: '<boolean>', f1_u: '<null>', f2_r: '<string>', f3_i: '<boolean>', f4_n: '<boolean>', f5_l: '<string>', f6_l: '<array>', f7_b: '<boolean>', f8_z: '<string>'}, 'iNfuFjRggrc');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('iNfuFjRggrc', 'iNfuFjRggrc', false, true);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('iNfuFjRggrc');
        delete_0 = objectStore_1.delete(KeyRange_1);
    }

    var index_204 = objectStore_1.createIndex('index_204', 'test', {unique: false});
    var put_3 = objectStore_1.put({f0_c: '<boolean>', f1_m: '<array>', f2_l: '<object>', f3_z: '<null>', f4_v: '<string>', f5_n: '<object>', f6_d: '<null>', f7_f: '<string>', f8_l: '<object>', f9_z: '<number>'}, 'ESuWTHx');
    db.deleteObjectStore('objectStore_207')
    var objectStore_2 = db.createObjectStore('objectStore_208', {keypath: 'RjL'});
    var index_205 = objectStore_0.createIndex('index_205', 'test', {unique: true, multiEntry: false});
    add_0.onsuccess = (event) => {
        var clear_0;
        clear_0 = objectStore_0.clear();
        var objectStore_3;
        objectStore_3 = db.createObjectStore('objectStore_209', {keypath: 'xxWKBkcq', autoIncrement: true});
        put_3.onsuccess = (event) => {
            var add_1;
            add_1 = objectStore_3.add({f0_h: '<null>', f1_v: '<object>', f2_k: '<array>', f3_o: '<number>', f4_i: '<string>'}, 'TDQXhHl');
            var index_206;
            index_206 = objectStore_0.createIndex('index_206', 'test', {unique: false, multiEntry: false});
            delete_0.onsuccess = (event) => {
                var index_207;
                index_207 = objectStore_2.createIndex('index_207', 'test');
                var index_208;
                index_208 = objectStore_3.createIndex('index_208', 'test', {unique: false});
                var clear_1;
                clear_1 = objectStore_0.clear();
                delete_0.onsuccess = (event) => {
                    var count_0;
                    count_0 = objectStore_0.count();
                    db.deleteObjectStore('objectStore_208')
                    var index_209;
                    index_209 = objectStore_0.createIndex('index_209', 'test', {multiEntry: true});
                    var clear_2;
                    clear_2 = objectStore_0.clear();
                    delete_0.onsuccess = (event) => {
                        var clear_3;
                        clear_3 = objectStore_3.clear();
                        var clear_4;
                        clear_4 = objectStore_3.clear();
                        put_2.onsuccess = (event) => {
                            var index_210;
                            index_210 = objectStore_3.createIndex('index_210', 'test', {unique: false, multiEntry: false});
                            var put_4;
                            put_4 = objectStore_0.put({f0_r: '<number>', f1_c: '<string>', f2_n: '<null>', f3_m: '<number>', f4_b: '<object>'}, 'pXmgg');
                            clear_1.onsuccess = (event) => {
                                var add_2;
                                add_2 = objectStore_0.add({f0_f: '<string>', f1_f: '<object>', f2_c: '<null>', f3_i: '<number>', f4_q: '<string>', f5_b: '<boolean>', f6_g: '<null>', f7_l: '<string>', f8_m: '<boolean>', f9_b: '<string>'}, 'nzHgBz');
                                var index_211;
                                index_211 = objectStore_3.createIndex('index_211', 'test', {unique: true, multiEntry: false});
                                count_0.onsuccess = (event) => {
                                    var index_1;
                                    index_1 = objectStore_0.index('index_201');
                                    var clear_5;
                                    clear_5 = objectStore_0.clear();
                                    db.deleteObjectStore('objectStore_206')
                                    delete_0.onsuccess = (event) => {
                                        var index_2;
                                        index_2 = objectStore_3.index('index_210');
                                        db.deleteObjectStore('objectStore_209')
                                        clear_0.onsuccess = (event) => {

                                        };
                                    };
                                };
                                var objectStore_4;
                                objectStore_4 = db.createObjectStore('objectStore_210', {keypath: 'tBUbsQnBtmU'});
                            };
                        };
                    };
                    var objectStore_5;
                    objectStore_5 = db.createObjectStore('objectStore_211', {keypath: 'kWb', autoIncrement: false});
                    var index_212;
                    index_212 = objectStore_5.createIndex('index_212', 'test');
                    var index_213;
                    index_213 = objectStore_5.createIndex('index_213', 'test', {unique: true, multiEntry: true});
                };
            };
            var objectStore_6;
            objectStore_6 = db.createObjectStore('objectStore_212', {autoIncrement: true});
            var index_214;
            index_214 = objectStore_6.createIndex('index_214', 'test', {multiEntry: false});
            db.deleteObjectStore('objectStore_212')
        };
    };
    delete_0.onsuccess = (event) => {
        var objectStore_7;
        objectStore_7 = db.createObjectStore('objectStore_213', {autoIncrement: true});
        put_0.onsuccess = (event) => {
            var add_3;
            add_3 = objectStore_7.add({f0_n: '<null>', f1_v: '<string>', f2_r: '<boolean>'}, 'OvQgQ');
            var count_1;
            count_1 = objectStore_7.count();
            var delete_1;
            try{
                KeyRange_2 = IDBKeyRange.bound('OvQgQ', 'OvQgQ', true, false);
                delete_1 = objectStore_7.delete(KeyRange_2);
            }
            catch (e){
                KeyRange_3 = IDBKeyRange.only('OvQgQ');
                delete_1 = objectStore_7.delete(KeyRange_3);
            }

            add_0.onsuccess = (event) => {
                db.deleteObjectStore('objectStore_213')
                put_0.onsuccess = (event) => {
                    put_1.onsuccess = (event) => {
                        put_1.onsuccess = (event) => {
                            put_1.onsuccess = (event) => {
                                put_1.onsuccess = (event) => {
                                    delete_0.onsuccess = (event) => {
                                        var objectStore_8;
                                        objectStore_8 = db.createObjectStore('objectStore_214', {keypath: 'bmUJ.NORO.nEPFZRAo.Opi.kPclNzYg.DKh.nVI'});
                                        put_1.onsuccess = (event) => {
                                            var clear_6;
                                            clear_6 = objectStore_8.clear();
                                            var put_5;
                                            put_5 = objectStore_8.put({f0_g: '<boolean>', f1_r: '<null>', f2_x: '<number>', f3_q: '<boolean>', f4_k: '<object>', f5_s: '<number>'}, 'crlSrU');
                                            var index_215;
                                            index_215 = objectStore_8.createIndex('index_215', 'test', {unique: true});
                                            var add_4;
                                            add_4 = objectStore_8.add({f0_o: '<number>'}, 'PHj');
                                            db.deleteObjectStore('objectStore_214')
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
    var objectStore_9 = db.createObjectStore('objectStore_215', {keypath: 'hezAVFRvvrX', autoIncrement: false});
    db.deleteObjectStore('objectStore_215')
    put_1.onsuccess = (event) => {
        var objectStore_10;
        objectStore_10 = db.createObjectStore('objectStore_216', {autoIncrement: true});
        var add_5;
        add_5 = objectStore_10.add({f0_c: '<string>', f1_p: '<null>'}, 'bJOTe');
        add_5.onsuccess = (event) => {
            var objectStore_11;
            objectStore_11 = db.createObjectStore('objectStore_217', {keypath: 'JhAuhY'});
            var put_6;
            put_6 = objectStore_11.put({f0_p: '<boolean>', f1_y: '<null>', f2_q: '<string>', f3_c: '<object>', f4_g: '<boolean>', f5_a: '<number>', f6_r: '<string>', f7_q: '<object>', f8_b: '<null>'}, 'eCDo');
            var add_6;
            add_6 = objectStore_10.add({f0_e: '<null>'}, 'aifXeLlkHfG');
            var add_7;
            add_7 = objectStore_10.add({f0_w: '<object>', f1_y: '<object>'}, 'GCNMfHUy');
            put_2.onsuccess = (event) => {
                var put_7;
                put_7 = objectStore_10.put({f0_x: '<boolean>'}, 'dnRffKzPESFN');
                var get_0;
                try{
                    KeyRange_4 = IDBKeyRange.bound('aifXeLlkHfG', 'aifXeLlkHfG', true, true);
                    get_0 = objectStore_10.get(KeyRange_4);
                }
                catch (e){
                    KeyRange_5 = IDBKeyRange.only('bJOTe');
                    get_0 = objectStore_10.get(KeyRange_5);
                }

                delete_0.onsuccess = (event) => {
                    var delete_2;
                    try{
                        KeyRange_6 = IDBKeyRange.bound('dnRffKzPESFN', 'dnRffKzPESFN', true, true);
                        delete_2 = objectStore_10.delete(KeyRange_6);
                    }
                    catch (e){
                        KeyRange_7 = IDBKeyRange.only('dnRffKzPESFN');
                        delete_2 = objectStore_10.delete(KeyRange_7);
                    }

                    db.deleteObjectStore('objectStore_217')
                    var index_216;
                    index_216 = objectStore_10.createIndex('index_216', 'test', {unique: true});
                    add_5.onsuccess = (event) => {
                        var put_8;
                        put_8 = objectStore_10.put({f0_g: '<string>'}, 'beh');
                        var delete_3;
                        try{
                            KeyRange_8 = IDBKeyRange.bound('beh', 'dnRffKzPESFN', true, true);
                            delete_3 = objectStore_10.delete(KeyRange_8);
                        }
                        catch (e){
                            KeyRange_9 = IDBKeyRange.only('beh');
                            delete_3 = objectStore_10.delete(KeyRange_9);
                        }

                        var get_1;
                        try{
                            KeyRange_10 = IDBKeyRange.lowerBound('bJOTe', true);
                            get_1 = objectStore_10.get(KeyRange_10);
                        }
                        catch (e){
                            KeyRange_11 = IDBKeyRange.only('bJOTe');
                            get_1 = objectStore_10.get(KeyRange_11);
                        }

                        var delete_4;
                        try{
                            KeyRange_12 = IDBKeyRange.bound('aifXeLlkHfG', 'bJOTe', true, false);
                            delete_4 = objectStore_10.delete(KeyRange_12);
                        }
                        catch (e){
                            KeyRange_13 = IDBKeyRange.only('GCNMfHUy');
                            delete_4 = objectStore_10.delete(KeyRange_13);
                        }

                        delete_0.onsuccess = (event) => {
                            var index_217;
                            index_217 = objectStore_10.createIndex('index_217', 'test', {unique: false, multiEntry: true});
                            var index_3;
                            index_3 = objectStore_10.index('index_216');
                            var delete_5;
                            try{
                                KeyRange_14 = IDBKeyRange.only('aifXeLlkHfG');
                                delete_5 = objectStore_10.delete(KeyRange_14);
                            }
                            catch (e){
                                KeyRange_15 = IDBKeyRange.only('dnRffKzPESFN');
                                delete_5 = objectStore_10.delete(KeyRange_15);
                            }

                            delete_5.onsuccess = (event) => {
                                var count_2;
                                try{
                                    KeyRange_16 = IDBKeyRange.bound('GCNMfHUy', 'dnRffKzPESFN', false, true);
                                    count_2 = objectStore_10.count(KeyRange_16);
                                }
                                catch (e){
                                    KeyRange_17 = IDBKeyRange.only('beh');
                                    count_2 = objectStore_10.count(KeyRange_17);
                                }

                                var get_2;
                                try{
                                    KeyRange_18 = IDBKeyRange.only('dnRffKzPESFN');
                                    get_2 = objectStore_10.get(KeyRange_18);
                                }
                                catch (e){
                                    KeyRange_19 = IDBKeyRange.only('beh');
                                    get_2 = objectStore_10.get(KeyRange_19);
                                }

                                var put_9;
                                put_9 = objectStore_10.put({f0_i: '<number>'}, 'pHT');
                                delete_5.onsuccess = (event) => {
                                    var clear_7;
                                    clear_7 = objectStore_10.clear();
                                    var get_3;
                                    try{
                                        KeyRange_20 = IDBKeyRange.bound('beh', 'aifXeLlkHfG', true, false);
                                        get_3 = objectStore_10.get(KeyRange_20);
                                    }
                                    catch (e){
                                        KeyRange_21 = IDBKeyRange.only('pHT');
                                        get_3 = objectStore_10.get(KeyRange_21);
                                    }

                                    var count_3;
                                    count_3 = objectStore_10.count();
                                    var delete_6;
                                    try{
                                        KeyRange_22 = IDBKeyRange.bound('GCNMfHUy', 'GCNMfHUy', false, false);
                                        delete_6 = objectStore_10.delete(KeyRange_22);
                                    }
                                    catch (e){
                                        KeyRange_23 = IDBKeyRange.only('pHT');
                                        delete_6 = objectStore_10.delete(KeyRange_23);
                                    }

                                    count_2.onsuccess = (event) => {
                                        var get_4;
                                        try{
                                            KeyRange_24 = IDBKeyRange.lowerBound('dnRffKzPESFN', true);
                                            get_4 = objectStore_10.get(KeyRange_24);
                                        }
                                        catch (e){
                                            KeyRange_25 = IDBKeyRange.only('beh');
                                            get_4 = objectStore_10.get(KeyRange_25);
                                        }

                                        var delete_7;
                                        try{
                                            KeyRange_26 = IDBKeyRange.bound('pHT', 'beh', false, true);
                                            delete_7 = objectStore_10.delete(KeyRange_26);
                                        }
                                        catch (e){
                                            KeyRange_27 = IDBKeyRange.only('aifXeLlkHfG');
                                            delete_7 = objectStore_10.delete(KeyRange_27);
                                        }

                                        var index_218;
                                        index_218 = objectStore_10.createIndex('index_218', 'test', {multiEntry: false});
                                        var objectStore_12;
                                        objectStore_12 = db.createObjectStore('objectStore_218', {autoIncrement: false});
                                        add_6.onsuccess = (event) => {
                                            var put_10;
                                            put_10 = objectStore_10.put({f0_g: '<boolean>', f1_w: '<boolean>', f2_l: '<string>', f3_a: '<array>', f4_g: '<array>', f5_i: '<number>', f6_q: '<number>', f7_k: '<object>', f8_o: '<object>', f9_w: '<null>'}, 'JNLj');
                                            var get_5;
                                            try{
                                                KeyRange_28 = IDBKeyRange.only('GCNMfHUy');
                                                get_5 = objectStore_10.get(KeyRange_28);
                                            }
                                            catch (e){
                                                KeyRange_29 = IDBKeyRange.only('pHT');
                                                get_5 = objectStore_10.get(KeyRange_29);
                                            }

                                            var objectStore_13;
                                            objectStore_13 = db.createObjectStore('objectStore_219', {keypath: 'qVJZyMxDt', autoIncrement: false});
                                            var index_219;
                                            index_219 = objectStore_13.createIndex('index_219', 'test', {multiEntry: true});
                                            var delete_8;
                                            try{
                                                KeyRange_30 = IDBKeyRange.bound('dnRffKzPESFN', 'beh', true, true);
                                                delete_8 = objectStore_10.delete(KeyRange_30);
                                            }
                                            catch (e){
                                                KeyRange_31 = IDBKeyRange.only('pHT');
                                                delete_8 = objectStore_10.delete(KeyRange_31);
                                            }

                                        };
                                        var add_8;
                                        add_8 = objectStore_10.add({f0_c: '<object>', f1_g: '<number>', f2_w: '<number>', f3_g: '<object>', f4_y: '<number>', f5_r: '<array>', f6_g: '<object>'}, 'ACosJWOjU');
                                        var clear_8;
                                        clear_8 = objectStore_12.clear();
                                        var index_220;
                                        index_220 = objectStore_10.createIndex('index_220', 'test');
                                        var index_221;
                                        index_221 = objectStore_12.createIndex('index_221', 'test');
                                    };
                                    var index_4;
                                    index_4 = objectStore_10.index('index_216');
                                    var index_222;
                                    index_222 = objectStore_10.createIndex('index_222', 'test', {unique: true, multiEntry: false});
                                    var index_5;
                                    index_5 = objectStore_10.index('index_216');
                                    var get_6;
                                    try{
                                        KeyRange_32 = IDBKeyRange.bound('pHT', 'ACosJWOjU', false, false);
                                        get_6 = objectStore_10.get(KeyRange_32);
                                    }
                                    catch (e){
                                        KeyRange_33 = IDBKeyRange.only('aifXeLlkHfG');
                                        get_6 = objectStore_10.get(KeyRange_33);
                                    }

                                    var clear_9;
                                    clear_9 = objectStore_10.clear();
                                };
                                var clear_10;
                                clear_10 = objectStore_10.clear();
                                var clear_11;
                                clear_11 = objectStore_10.clear();
                                db.deleteObjectStore('objectStore_216')
                                var objectStore_14;
                                objectStore_14 = db.createObjectStore('objectStore_220');
                            };
                        };
                    };
                };
            };
        };
        var objectStore_15;
        objectStore_15 = db.createObjectStore('objectStore_221');
        var index_223;
        index_223 = objectStore_15.createIndex('index_223', 'test', {unique: true});
    };
    var objectStore_16 = db.createObjectStore('objectStore_222', {keypath: 'Vyxp.NzaUqC.uzPu.aSpBAYhNKl.AFRF.SBKcTvM.zZqaPC.LDfaBn'});
    var add_9 = objectStore_16.add({f0_r: '<object>', f1_c: '<boolean>'}, 'KJydpQbc');
    var objectStore_17 = db.createObjectStore('objectStore_223', {keypath: 'xjWNT'});
    put_1.onsuccess = (event) => {
        var add_10;
        add_10 = objectStore_16.add({f0_f: '<null>', f1_k: '<null>', f2_q: '<object>', f3_p: '<boolean>', f4_x: '<string>', f5_g: '<object>', f6_z: '<string>'}, 'rjujsz');
        db.deleteObjectStore('objectStore_223')
        var clear_12;
        clear_12 = objectStore_16.clear();
        add_10.onsuccess = (event) => {
            var count_4;
            count_4 = objectStore_16.count();
            var get_7;
            try{
                KeyRange_34 = IDBKeyRange.lowerBound('KJydpQbc', false);
                get_7 = objectStore_16.get(KeyRange_34);
            }
            catch (e){
                KeyRange_35 = IDBKeyRange.only('KJydpQbc');
                get_7 = objectStore_16.get(KeyRange_35);
            }

            count_4.onsuccess = (event) => {
                var clear_13;
                clear_13 = objectStore_16.clear();
                var add_11;
                add_11 = objectStore_16.add({f0_n: '<null>', f1_e: '<string>', f2_u: '<object>', f3_d: '<object>', f4_g: '<null>', f5_j: '<null>', f6_j: '<null>', f7_x: '<boolean>', f8_i: '<object>'}, 'iNxXybV');
                var count_5;
                try{
                    KeyRange_36 = IDBKeyRange.bound('KJydpQbc', 'rjujsz', false, false);
                    count_5 = objectStore_16.count(KeyRange_36);
                }
                catch (e){
                    KeyRange_37 = IDBKeyRange.only('KJydpQbc');
                    count_5 = objectStore_16.count(KeyRange_37);
                }

                var count_6;
                count_6 = objectStore_16.count();
                var index_224;
                index_224 = objectStore_16.createIndex('index_224', 'test', {unique: false});
                get_7.onsuccess = (event) => {
                    var put_11;
                    put_11 = objectStore_16.put({f0_p: '<array>'}, 'uJCykzpdkGZ');
                    var objectStore_18;
                    objectStore_18 = db.createObjectStore('objectStore_224', {keypath: 'FPfjUWhrxNtS'});
                    var count_7;
                    count_7 = objectStore_16.count();
                    var get_8;
                    try{
                        KeyRange_38 = IDBKeyRange.bound('KJydpQbc', 'rjujsz', true, false);
                        get_8 = objectStore_16.get(KeyRange_38);
                    }
                    catch (e){
                        KeyRange_39 = IDBKeyRange.only('KJydpQbc');
                        get_8 = objectStore_16.get(KeyRange_39);
                    }

                    get_7.onsuccess = (event) => {
                        var index_225;
                        index_225 = objectStore_18.createIndex('index_225', 'test', {unique: true});
                        var index_226;
                        index_226 = objectStore_18.createIndex('index_226', 'test', {unique: false, multiEntry: false});
                        var index_227;
                        index_227 = objectStore_18.createIndex('index_227', 'test', {multiEntry: false});
                        count_5.onsuccess = (event) => {
                            var index_228;
                            index_228 = objectStore_16.createIndex('index_228', 'test', {multiEntry: true});
                            var put_12;
                            put_12 = objectStore_18.put({f0_r: '<boolean>', f1_t: '<object>', f2_y: '<null>', f3_d: '<string>', f4_j: '<string>', f5_u: '<string>', f6_g: '<boolean>', f7_i: '<number>'}, 'uwMzTTsPzWZt');
                            put_3.onsuccess = (event) => {
                                var clear_14;
                                clear_14 = objectStore_16.clear();
                                var add_12;
                                add_12 = objectStore_18.add({f0_p: '<boolean>', f1_t: '<null>', f2_a: '<array>', f3_d: '<object>', f4_a: '<array>'}, 'tsRPfsttZk');
                                var get_9;
                                try{
                                    KeyRange_40 = IDBKeyRange.bound('uwMzTTsPzWZt', 'uwMzTTsPzWZt', true, true);
                                    get_9 = objectStore_18.get(KeyRange_40);
                                }
                                catch (e){
                                    KeyRange_41 = IDBKeyRange.only('tsRPfsttZk');
                                    get_9 = objectStore_18.get(KeyRange_41);
                                }

                                var objectStore_19;
                                objectStore_19 = db.createObjectStore('objectStore_225', {keypath: 'rblhJoBHcxYo', autoIncrement: true});
                                var clear_15;
                                clear_15 = objectStore_16.clear();
                                count_4.onsuccess = (event) => {
                                    var delete_9;
                                    try{
                                        KeyRange_42 = IDBKeyRange.only('uJCykzpdkGZ');
                                        delete_9 = objectStore_16.delete(KeyRange_42);
                                    }
                                    catch (e){
                                        KeyRange_43 = IDBKeyRange.only('iNxXybV');
                                        delete_9 = objectStore_16.delete(KeyRange_43);
                                    }

                                    delete_9.onsuccess = (event) => {
                                        var put_13;
                                        put_13 = objectStore_19.put({f0_k: '<array>', f1_p: '<string>', f2_l: '<array>', f3_w: '<array>', f4_z: '<number>'}, 'cEZdWzlHME');
                                        var delete_10;
                                        try{
                                            KeyRange_44 = IDBKeyRange.bound('cEZdWzlHME', 'cEZdWzlHME', false, true);
                                            delete_10 = objectStore_19.delete(KeyRange_44);
                                        }
                                        catch (e){
                                            KeyRange_45 = IDBKeyRange.only('cEZdWzlHME');
                                            delete_10 = objectStore_19.delete(KeyRange_45);
                                        }

                                        put_2.onsuccess = (event) => {
                                            var clear_16;
                                            clear_16 = objectStore_18.clear();
                                            var objectStore_20;
                                            objectStore_20 = db.createObjectStore('objectStore_226');
                                            var count_8;
                                            count_8 = objectStore_18.count();
                                            var count_9;
                                            try{
                                                KeyRange_46 = IDBKeyRange.bound('cEZdWzlHME', 'cEZdWzlHME', true, false);
                                                count_9 = objectStore_19.count(KeyRange_46);
                                            }
                                            catch (e){
                                                KeyRange_47 = IDBKeyRange.only('cEZdWzlHME');
                                                count_9 = objectStore_19.count(KeyRange_47);
                                            }

                                            var index_229;
                                            index_229 = objectStore_18.createIndex('index_229', 'test');
                                            var add_13;
                                            add_13 = objectStore_16.add({f0_e: '<number>', f1_p: '<object>', f2_c: '<array>'}, 'FaxcLUeMXuKJ');
                                        };
                                        var index_230;
                                        index_230 = objectStore_16.createIndex('index_230', 'test', {unique: false});
                                        var clear_17;
                                        clear_17 = objectStore_19.clear();
                                        db.deleteObjectStore('objectStore_224')
                                        var put_14;
                                        put_14 = objectStore_19.put({f0_z: '<null>', f1_h: '<null>', f2_u: '<null>', f3_x: '<null>'}, 'DYacIjAJQ');
                                        var count_10;
                                        try{
                                            KeyRange_48 = IDBKeyRange.lowerBound('DYacIjAJQ', true);
                                            count_10 = objectStore_19.count(KeyRange_48);
                                        }
                                        catch (e){
                                            KeyRange_49 = IDBKeyRange.only('cEZdWzlHME');
                                            count_10 = objectStore_19.count(KeyRange_49);
                                        }

                                    };
                                    objectStore_16.deleteIndex('index_224')
                                    var index_231;
                                    index_231 = objectStore_16.createIndex('index_231', 'test', {multiEntry: false});
                                    var put_15;
                                    put_15 = objectStore_19.put({f0_y: '<string>', f1_k: '<number>', f2_w: '<object>', f3_w: '<object>', f4_o: '<array>', f5_v: '<boolean>', f6_r: '<null>', f7_o: '<null>'}, 'iNjEVSFosx');
                                    var index_232;
                                    index_232 = objectStore_16.createIndex('index_232', 'test', {unique: true});
                                };
                                var clear_18;
                                clear_18 = objectStore_19.clear();
                                var count_11;
                                try{
                                    KeyRange_50 = IDBKeyRange.bound('FaxcLUeMXuKJ', 'FaxcLUeMXuKJ', false, false);
                                    count_11 = objectStore_16.count(KeyRange_50);
                                }
                                catch (e){
                                    KeyRange_51 = IDBKeyRange.only('uJCykzpdkGZ');
                                    count_11 = objectStore_16.count(KeyRange_51);
                                }

                                var index_233;
                                index_233 = objectStore_19.createIndex('index_233', 'test', {unique: true});
                                var index_234;
                                index_234 = objectStore_19.createIndex('index_234', 'test', {unique: false, multiEntry: false});
                                var add_14;
                                add_14 = objectStore_19.add({f0_t: '<object>', f1_c: '<array>'}, 'VVYfiRjQmaF');
                            };
                            var add_15;
                            add_15 = objectStore_16.add({f0_z: '<null>', f1_w: '<object>', f2_o: '<object>', f3_a: '<number>', f4_p: '<null>'}, 'wgGpjJlkuy');
                            var get_10;
                            try{
                                KeyRange_52 = IDBKeyRange.bound('rjujsz', 'KJydpQbc', true, true);
                                get_10 = objectStore_16.get(KeyRange_52);
                            }
                            catch (e){
                                KeyRange_53 = IDBKeyRange.only('FaxcLUeMXuKJ');
                                get_10 = objectStore_16.get(KeyRange_53);
                            }

                            var index_6;
                            index_6 = objectStore_16.index('index_228');
                            var delete_11;
                            try{
                                KeyRange_54 = IDBKeyRange.only('KJydpQbc');
                                delete_11 = objectStore_16.delete(KeyRange_54);
                            }
                            catch (e){
                                KeyRange_55 = IDBKeyRange.only('KJydpQbc');
                                delete_11 = objectStore_16.delete(KeyRange_55);
                            }

                            var clear_19;
                            clear_19 = objectStore_16.clear();
                        };
                        var delete_12;
                        try{
                            KeyRange_56 = IDBKeyRange.lowerBound('iNxXybV', true);
                            delete_12 = objectStore_16.delete(KeyRange_56);
                        }
                        catch (e){
                            KeyRange_57 = IDBKeyRange.only('wgGpjJlkuy');
                            delete_12 = objectStore_16.delete(KeyRange_57);
                        }

                        var put_16;
                        put_16 = objectStore_16.put({f0_w: '<string>', f1_n: '<boolean>', f2_v: '<number>', f3_k: '<array>', f4_m: '<string>'}, 'RrhiQCQ');
                        var delete_13;
                        try{
                            KeyRange_58 = IDBKeyRange.bound('wgGpjJlkuy', 'wgGpjJlkuy', true, true);
                            delete_13 = objectStore_16.delete(KeyRange_58);
                        }
                        catch (e){
                            KeyRange_59 = IDBKeyRange.only('wgGpjJlkuy');
                            delete_13 = objectStore_16.delete(KeyRange_59);
                        }

                        var put_17;
                        put_17 = objectStore_16.put({f0_p: '<boolean>', f1_m: '<boolean>'}, 'CSjiKmw');
                    };
                    var index_235;
                    index_235 = objectStore_16.createIndex('index_235', 'test', {multiEntry: true});
                    var objectStore_21;
                    objectStore_21 = db.createObjectStore('objectStore_227');
                    var get_11;
                    try{
                        KeyRange_60 = IDBKeyRange.only('rjujsz');
                        get_11 = objectStore_16.get(KeyRange_60);
                    }
                    catch (e){
                        KeyRange_61 = IDBKeyRange.only('rjujsz');
                        get_11 = objectStore_16.get(KeyRange_61);
                    }

                    var index_236;
                    index_236 = objectStore_21.createIndex('index_236', 'test', {multiEntry: false});
                };
                var index_237;
                index_237 = objectStore_16.createIndex('index_237', 'test', {unique: false});
                var objectStore_22;
                objectStore_22 = db.createObjectStore('objectStore_228');
                var objectStore_23;
                objectStore_23 = db.createObjectStore('objectStore_229');
                var index_238;
                index_238 = objectStore_23.createIndex('index_238', 'test', {unique: false, multiEntry: true});
            };
            var add_16;
            add_16 = objectStore_16.add({f0_y: '<string>', f1_j: '<array>'}, 'nsUByAbkeIBd');
            var add_17;
            add_17 = objectStore_16.add({f0_a: '<null>', f1_k: '<null>', f2_m: '<object>', f3_c: '<boolean>', f4_w: '<array>', f5_g: '<array>', f6_x: '<object>', f7_v: '<object>', f8_l: '<null>'}, 'LMOceNzW');
            var index_239;
            index_239 = objectStore_16.createIndex('index_239', 'test');
        };
        var clear_20;
        clear_20 = objectStore_16.clear();
        var put_18;
        put_18 = objectStore_16.put({f0_r: '<array>', f1_l: '<number>', f2_n: '<boolean>', f3_n: '<object>', f4_o: '<boolean>', f5_h: '<number>', f6_v: '<string>', f7_u: '<boolean>'}, 'KXIqtLvb');
        var index_240;
        index_240 = objectStore_16.createIndex('index_240', 'test', {unique: true, multiEntry: true});
        var delete_14;
        try{
            KeyRange_62 = IDBKeyRange.bound('nsUByAbkeIBd', 'LMOceNzW', true, false);
            delete_14 = objectStore_16.delete(KeyRange_62);
        }
        catch (e){
            KeyRange_63 = IDBKeyRange.only('LMOceNzW');
            delete_14 = objectStore_16.delete(KeyRange_63);
        }

        var index_241;
        index_241 = objectStore_16.createIndex('index_241', 'test', {unique: true, multiEntry: true});
    };
    var add_18 = objectStore_16.add({f0_e: '<object>', f1_s: '<null>', f2_e: '<null>', f3_g: '<number>', f4_m: '<array>', f5_u: '<null>'}, 'berUh');
    var index_242 = objectStore_16.createIndex('index_242', 'test');
    var put_19 = objectStore_16.put({f0_w: '<array>', f1_y: '<array>', f2_j: '<array>', f3_u: '<string>', f4_s: '<null>', f5_j: '<number>', f6_o: '<array>', f7_o: '<string>', f8_f: '<object>'}, 'nmnCKgYOH');
    var objectStore_24 = db.createObjectStore('objectStore_230');
    var index_243 = objectStore_16.createIndex('index_243', 'test');
    var objectStore_25 = db.createObjectStore('objectStore_231', {keypath: 'GzvAqMhctRd'});
    var add_19 = objectStore_25.add({f0_g: '<object>', f1_r: '<null>', f2_v: '<object>'}, 'zdZaXpUk');
    add_9.onsuccess = (event) => {
        var index_244;
        index_244 = objectStore_24.createIndex('index_244', 'test', {unique: false});
        add_19.onsuccess = (event) => {
            var add_20;
            add_20 = objectStore_25.add({f0_n: '<array>'}, 'zCt');
            var add_21;
            add_21 = objectStore_24.add({f0_o: '<array>', f1_f: '<array>', f2_y: '<object>', f3_q: '<null>', f4_z: '<array>'}, 'qaVXCtJ');
            var put_20;
            put_20 = objectStore_16.put({f0_i: '<object>', f1_x: '<boolean>', f2_m: '<null>', f3_m: '<string>', f4_s: '<boolean>', f5_q: '<object>'}, 'DasZECoSDhJM');
            delete_0.onsuccess = (event) => {
                var clear_21;
                clear_21 = objectStore_16.clear();
                var add_22;
                add_22 = objectStore_25.add({f0_a: '<number>', f1_c: '<object>', f2_o: '<boolean>', f3_b: '<number>', f4_u: '<array>', f5_p: '<boolean>', f6_g: '<boolean>'}, 'OBgpNILaDhj');
                var index_245;
                index_245 = objectStore_25.createIndex('index_245', 'test', {multiEntry: true});
                var clear_22;
                clear_22 = objectStore_16.clear();
                put_2.onsuccess = (event) => {
                    var index_246;
                    index_246 = objectStore_25.createIndex('index_246', 'test', {multiEntry: true});
                    var index_7;
                    index_7 = objectStore_24.index('index_244');
                    add_9.onsuccess = (event) => {
                        var index_247;
                        index_247 = objectStore_16.createIndex('index_247', 'test');
                        var put_21;
                        put_21 = objectStore_25.put({f0_n: '<number>'}, 'SIHJkaYPub');
                        add_19.onsuccess = (event) => {
                            var delete_15;
                            try{
                                KeyRange_64 = IDBKeyRange.only('OBgpNILaDhj');
                                delete_15 = objectStore_25.delete(KeyRange_64);
                            }
                            catch (e){
                                KeyRange_65 = IDBKeyRange.only('OBgpNILaDhj');
                                delete_15 = objectStore_25.delete(KeyRange_65);
                            }

                            objectStore_16.deleteIndex('index_242')
                            var add_23;
                            add_23 = objectStore_16.add({f0_t: '<boolean>', f1_s: '<boolean>', f2_n: '<null>', f3_g: '<array>', f4_k: '<object>', f5_n: '<array>'}, 'qXycJCxHCPx');
                            add_23.onsuccess = (event) => {
                                var index_8;
                                index_8 = objectStore_24.index('index_244');
                                var count_12;
                                count_12 = objectStore_16.count();
                                var delete_16;
                                try{
                                    KeyRange_66 = IDBKeyRange.only('OBgpNILaDhj');
                                    delete_16 = objectStore_25.delete(KeyRange_66);
                                }
                                catch (e){
                                    KeyRange_67 = IDBKeyRange.only('OBgpNILaDhj');
                                    delete_16 = objectStore_25.delete(KeyRange_67);
                                }

                                count_12.onsuccess = (event) => {
                                    var put_22;
                                    put_22 = objectStore_24.put({f0_j: '<string>', f1_s: '<number>', f2_y: '<object>'}, 'rkxmM');
                                    var add_24;
                                    add_24 = objectStore_24.add({f0_z: '<boolean>', f1_l: '<object>', f2_b: '<boolean>', f3_p: '<string>', f4_i: '<object>', f5_g: '<object>', f6_k: '<boolean>'}, 'Yxa');
                                    var add_25;
                                    add_25 = objectStore_25.add({f0_h: '<number>', f1_m: '<null>', f2_n: '<null>', f3_x: '<number>', f4_y: '<string>', f5_d: '<array>'}, 'rLzjouyNTl');
                                    put_22.onsuccess = (event) => {
                                        var index_248;
                                        index_248 = objectStore_16.createIndex('index_248', 'test', {unique: false});
                                        var put_23;
                                        put_23 = objectStore_24.put({f0_d: '<boolean>', f1_j: '<null>', f2_p: '<string>', f3_e: '<number>'}, 'ipZVPsGd');
                                        put_20.onsuccess = (event) => {
                                            db.deleteObjectStore('objectStore_231')
                                            var objectStore_26;
                                            objectStore_26 = db.createObjectStore('objectStore_232', {autoIncrement: false});
                                            var put_24;
                                            put_24 = objectStore_16.put({f0_f: '<null>', f1_i: '<object>', f2_m: '<number>', f3_f: '<number>', f4_j: '<null>', f5_r: '<number>'}, 'DUkarsbe');
                                            db.deleteObjectStore('objectStore_222')
                                            var put_25;
                                            put_25 = objectStore_24.put({f0_v: '<null>'}, 'hgfuUtab');
                                            var objectStore_27;
                                            objectStore_27 = db.createObjectStore('objectStore_233');
                                            var objectStore_28;
                                            objectStore_28 = db.createObjectStore('objectStore_234');
                                        };
                                        var objectStore_29;
                                        objectStore_29 = db.createObjectStore('objectStore_235', {autoIncrement: true});
                                        var get_12;
                                        try{
                                            KeyRange_68 = IDBKeyRange.bound('Yxa', 'rkxmM', false, true);
                                            get_12 = objectStore_24.get(KeyRange_68);
                                        }
                                        catch (e){
                                            KeyRange_69 = IDBKeyRange.only('rkxmM');
                                            get_12 = objectStore_24.get(KeyRange_69);
                                        }

                                        var clear_23;
                                        clear_23 = objectStore_24.clear();
                                        var clear_24;
                                        clear_24 = objectStore_29.clear();
                                        var count_13;
                                        count_13 = objectStore_24.count();
                                    };
                                    var clear_25;
                                    clear_25 = objectStore_24.clear();
                                    var index_249;
                                    index_249 = objectStore_24.createIndex('index_249', 'test', {unique: true});
                                    var objectStore_30;
                                    objectStore_30 = db.createObjectStore('objectStore_236', {keypath: 'drKYif.pVaYMn.SzRuB.fhXPulnA', autoIncrement: true});
                                    var delete_17;
                                    try{
                                        KeyRange_70 = IDBKeyRange.lowerBound('Yxa', false);
                                        delete_17 = objectStore_24.delete(KeyRange_70);
                                    }
                                    catch (e){
                                        KeyRange_71 = IDBKeyRange.only('qaVXCtJ');
                                        delete_17 = objectStore_24.delete(KeyRange_71);
                                    }

                                    var add_26;
                                    add_26 = objectStore_30.add({f0_a: '<array>', f1_g: '<number>', f2_w: '<array>'}, 'QmHNQdRIBeW');
                                };
                                var add_27;
                                add_27 = objectStore_24.add({f0_u: '<boolean>', f1_e: '<array>', f2_m: '<boolean>', f3_a: '<object>', f4_o: '<object>'}, 'uHwpzH');
                                var index_9;
                                index_9 = objectStore_24.index('index_244');
                                var put_26;
                                put_26 = objectStore_24.put({f0_o: '<object>', f1_g: '<number>', f2_b: '<array>', f3_g: '<null>', f4_r: '<object>'}, 'mShxRcqP');
                                var index_10;
                                index_10 = objectStore_24.index('index_244');
                                var add_28;
                                add_28 = objectStore_24.add({f0_l: '<boolean>', f1_j: '<number>'}, 'bNGghyYO');
                            };
                            var get_13;
                            try{
                                KeyRange_72 = IDBKeyRange.only('qaVXCtJ');
                                get_13 = objectStore_24.get(KeyRange_72);
                            }
                            catch (e){
                                KeyRange_73 = IDBKeyRange.only('mShxRcqP');
                                get_13 = objectStore_24.get(KeyRange_73);
                            }

                            var delete_18;
                            try{
                                KeyRange_74 = IDBKeyRange.bound('rkxmM', 'bNGghyYO', true, true);
                                delete_18 = objectStore_24.delete(KeyRange_74);
                            }
                            catch (e){
                                KeyRange_75 = IDBKeyRange.only('bNGghyYO');
                                delete_18 = objectStore_24.delete(KeyRange_75);
                            }

                            var objectStore_31;
                            objectStore_31 = db.createObjectStore('objectStore_237', {autoIncrement: true});
                            var index_250;
                            index_250 = objectStore_31.createIndex('index_250', 'test', {multiEntry: false});
                        };
                        db.deleteObjectStore('objectStore_230')
                    };
                    var objectStore_32;
                    objectStore_32 = db.createObjectStore('objectStore_238');
                };
            };
        };
    };
    var objectStore_33 = db.createObjectStore('objectStore_239', {keypath: 'rDDMnmwOET'});
    var put_27 = objectStore_33.put({f0_y: '<array>', f1_q: '<null>', f2_x: '<number>', f3_t: '<array>', f4_v: '<boolean>', f5_k: '<object>', f6_h: '<null>', f7_r: '<number>'}, 'GStajIwCQjvg');
    var clear_26 = objectStore_33.clear();
    var count_14;
    try{
        KeyRange_76 = IDBKeyRange.only('GStajIwCQjvg');
        count_14 = objectStore_33.count(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('GStajIwCQjvg');
        count_14 = objectStore_33.count(KeyRange_77);
    }

    var add_29 = objectStore_33.add({f0_u: '<number>', f1_n: '<string>', f2_i: '<null>', f3_l: '<boolean>'}, 'Nwqgucza');
    add_29.onsuccess = (event) => {
        var count_15;
        try{
            KeyRange_78 = IDBKeyRange.bound('Nwqgucza', 'GStajIwCQjvg', false, false);
            count_15 = objectStore_33.count(KeyRange_78);
        }
        catch (e){
            KeyRange_79 = IDBKeyRange.only('Nwqgucza');
            count_15 = objectStore_33.count(KeyRange_79);
        }

        db.deleteObjectStore('objectStore_239')
        put_3.onsuccess = (event) => {
            put_19.onsuccess = (event) => {
                put_0.onsuccess = (event) => {
                    count_14.onsuccess = (event) => {
                        count_14.onsuccess = (event) => {
                            put_19.onsuccess = (event) => {
                                put_1.onsuccess = (event) => {
                                    put_27.onsuccess = (event) => {
                                        add_18.onsuccess = (event) => {

                                        };
                                    };
                                };
                            };
                        };
                        var objectStore_34;
                        objectStore_34 = db.createObjectStore('objectStore_240', {keypath: 'tXZYbBm'});
                        db.deleteObjectStore('objectStore_240')
                    };
                    var objectStore_35;
                    objectStore_35 = db.createObjectStore('objectStore_241');
                };
            };
            var objectStore_36;
            objectStore_36 = db.createObjectStore('objectStore_242', {autoIncrement: false});
            var index_251;
            index_251 = objectStore_36.createIndex('index_251', 'test');
            var clear_27;
            clear_27 = objectStore_36.clear();
            db.deleteObjectStore('objectStore_242')
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_666')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
