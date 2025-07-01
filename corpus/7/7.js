let db;
const openRequest = window.indexedDB.open('str_666', '14')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_189', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_190', {autoIncrement: false});
    var add_0 = objectStore_1.add({f0_w: '<object>', f1_k: '<boolean>', f2_n: '<number>', f3_p: '<string>', f4_b: '<number>', f5_u: '<null>', f6_a: '<null>', f7_x: '<boolean>', f8_g: '<array>'}, 'KxtMxQf');
    var index_183 = objectStore_0.createIndex('index_183', 'test');
    db.deleteObjectStore('objectStore_190')
    var add_1 = objectStore_0.add({f0_n: '<array>', f1_a: '<number>', f2_d: '<string>', f3_j: '<number>', f4_s: '<null>', f5_k: '<object>', f6_s: '<array>', f7_b: '<object>', f8_k: '<null>', f9_h: '<object>'}, 'nywog');
    var index_184 = objectStore_0.createIndex('index_184', 'test');
    add_1.onsuccess = (event) => {
        var add_2;
        add_2 = objectStore_0.add({f0_n: '<string>', f1_t: '<object>', f2_t: '<array>', f3_m: '<null>', f4_s: '<number>'}, 'BXmTTSqZBXC');
        var index_0;
        index_0 = objectStore_0.index('index_184');
        add_0.onsuccess = (event) => {
            var index_1;
            index_1 = objectStore_0.index('index_183');
            var delete_0;
            try{
                KeyRange_0 = IDBKeyRange.bound('BXmTTSqZBXC', 'BXmTTSqZBXC', false, true);
                delete_0 = objectStore_0.delete(KeyRange_0);
            }
            catch (e){
                KeyRange_1 = IDBKeyRange.only('BXmTTSqZBXC');
                delete_0 = objectStore_0.delete(KeyRange_1);
            }

            add_1.onsuccess = (event) => {
                var index_2;
                index_2 = objectStore_0.index('index_184');
                var put_0;
                put_0 = objectStore_0.put({f0_s: '<null>', f1_f: '<number>', f2_g: '<null>', f3_q: '<null>', f4_k: '<object>', f5_f: '<boolean>'}, 'wgVnxHq');
                var objectStore_2;
                objectStore_2 = db.createObjectStore('objectStore_191', {autoIncrement: true});
                var index_185;
                index_185 = objectStore_0.createIndex('index_185', 'test', {unique: true, multiEntry: true});
                db.deleteObjectStore('objectStore_191')
                add_0.onsuccess = (event) => {
                    var delete_1;
                    try{
                        KeyRange_2 = IDBKeyRange.bound('wgVnxHq', 'BXmTTSqZBXC', false, false);
                        delete_1 = objectStore_0.delete(KeyRange_2);
                    }
                    catch (e){
                        KeyRange_3 = IDBKeyRange.only('nywog');
                        delete_1 = objectStore_0.delete(KeyRange_3);
                    }

                    var delete_2;
                    try{
                        KeyRange_4 = IDBKeyRange.only('nywog');
                        delete_2 = objectStore_0.delete(KeyRange_4);
                    }
                    catch (e){
                        KeyRange_5 = IDBKeyRange.only('BXmTTSqZBXC');
                        delete_2 = objectStore_0.delete(KeyRange_5);
                    }

                    var get_0;
                    try{
                        KeyRange_6 = IDBKeyRange.bound('BXmTTSqZBXC', 'BXmTTSqZBXC', true, true);
                        get_0 = objectStore_0.get(KeyRange_6);
                    }
                    catch (e){
                        KeyRange_7 = IDBKeyRange.only('BXmTTSqZBXC');
                        get_0 = objectStore_0.get(KeyRange_7);
                    }

                    var index_186;
                    index_186 = objectStore_0.createIndex('index_186', 'test', {unique: true});
                    var objectStore_3;
                    objectStore_3 = db.createObjectStore('objectStore_192', {keypath: 'jqf'});
                    add_0.onsuccess = (event) => {
                        var count_0;
                        try{
                            KeyRange_8 = IDBKeyRange.only('BXmTTSqZBXC');
                            count_0 = objectStore_0.count(KeyRange_8);
                        }
                        catch (e){
                            KeyRange_9 = IDBKeyRange.only('BXmTTSqZBXC');
                            count_0 = objectStore_0.count(KeyRange_9);
                        }

                        delete_1.onsuccess = (event) => {
                            var index_3;
                            index_3 = objectStore_0.index('index_185');
                            var index_187;
                            index_187 = objectStore_0.createIndex('index_187', 'test', {unique: false});
                            var objectStore_4;
                            objectStore_4 = db.createObjectStore('objectStore_193', {keypath: 'OwvPAftkG'});
                            delete_1.onsuccess = (event) => {
                                var index_188;
                                index_188 = objectStore_0.createIndex('index_188', 'test');
                                put_0.onsuccess = (event) => {
                                    var clear_0;
                                    clear_0 = objectStore_0.clear();
                                    delete_2.onsuccess = (event) => {
                                        var add_3;
                                        add_3 = objectStore_0.add({f0_e: '<boolean>', f1_l: '<null>', f2_z: '<number>', f3_i: '<array>', f4_g: '<array>', f5_a: '<object>', f6_c: '<number>'}, 'yelDqfIYneH');
                                        var get_1;
                                        try{
                                            KeyRange_10 = IDBKeyRange.bound('BXmTTSqZBXC', 'BXmTTSqZBXC', false, true);
                                            get_1 = objectStore_0.get(KeyRange_10);
                                        }
                                        catch (e){
                                            KeyRange_11 = IDBKeyRange.only('BXmTTSqZBXC');
                                            get_1 = objectStore_0.get(KeyRange_11);
                                        }

                                        get_0.onsuccess = (event) => {
                                            var put_1;
                                            put_1 = objectStore_3.put({f0_t: '<boolean>', f1_u: '<object>', f2_s: '<number>', f3_y: '<string>', f4_t: '<string>'}, 'iAGdIfaMRfq');
                                            var index_4;
                                            index_4 = objectStore_0.index('index_188');
                                            var put_2;
                                            put_2 = objectStore_4.put({f0_c: '<number>', f1_p: '<number>', f2_s: '<string>'}, 'Lgf');
                                            var index_189;
                                            index_189 = objectStore_3.createIndex('index_189', 'test', {unique: true, multiEntry: false});
                                            db.deleteObjectStore('objectStore_193')
                                            var add_4;
                                            add_4 = objectStore_0.add({f0_a: '<null>', f1_f: '<null>', f2_c: '<array>', f3_n: '<object>', f4_e: '<string>', f5_e: '<object>'}, 'GRKZ');
                                            var add_5;
                                            add_5 = objectStore_3.add({f0_z: '<string>', f1_t: '<object>', f2_s: '<object>', f3_u: '<number>', f4_s: '<object>', f5_c: '<boolean>', f6_r: '<number>', f7_w: '<null>', f8_f: '<boolean>', f9_v: '<boolean>'}, 'SNF');
                                            var delete_3;
                                            try{
                                                KeyRange_12 = IDBKeyRange.bound('yelDqfIYneH', 'wgVnxHq', false, true);
                                                delete_3 = objectStore_0.delete(KeyRange_12);
                                            }
                                            catch (e){
                                                KeyRange_13 = IDBKeyRange.only('nywog');
                                                delete_3 = objectStore_0.delete(KeyRange_13);
                                            }

                                            var objectStore_5;
                                            objectStore_5 = db.createObjectStore('objectStore_194', {keypath: 'CnbKLMtqjIDi'});
                                            var add_6;
                                            add_6 = objectStore_5.add({f0_c: '<string>'}, 'etJCHPhiyA');
                                        };
                                        var index_190;
                                        index_190 = objectStore_3.createIndex('index_190', 'test', {unique: false});
                                        var objectStore_6;
                                        objectStore_6 = db.createObjectStore('objectStore_195', {autoIncrement: false});
                                        var add_7;
                                        add_7 = objectStore_3.add({f0_e: '<object>', f1_n: '<string>', f2_w: '<object>'}, 'aPQKoCfvexp');
                                        var index_191;
                                        index_191 = objectStore_0.createIndex('index_191', 'test');
                                    };
                                    var objectStore_7;
                                    objectStore_7 = db.createObjectStore('objectStore_196', {keypath: 'UVtmiNXdvcf'});
                                    var get_2;
                                    try{
                                        KeyRange_14 = IDBKeyRange.bound('nywog', 'BXmTTSqZBXC', true, false);
                                        get_2 = objectStore_0.get(KeyRange_14);
                                    }
                                    catch (e){
                                        KeyRange_15 = IDBKeyRange.only('wgVnxHq');
                                        get_2 = objectStore_0.get(KeyRange_15);
                                    }

                                    var put_3;
                                    put_3 = objectStore_3.put({f0_w: '<array>', f1_z: '<array>', f2_y: '<array>'}, 'ggblDfx');
                                };
                                var get_3;
                                try{
                                    KeyRange_16 = IDBKeyRange.only('aPQKoCfvexp');
                                    get_3 = objectStore_3.get(KeyRange_16);
                                }
                                catch (e){
                                    KeyRange_17 = IDBKeyRange.only('aPQKoCfvexp');
                                    get_3 = objectStore_3.get(KeyRange_17);
                                }

                                db.deleteObjectStore('objectStore_189')
                                var clear_1;
                                clear_1 = objectStore_3.clear();
                                var get_4;
                                try{
                                    KeyRange_18 = IDBKeyRange.bound('aPQKoCfvexp', 'iAGdIfaMRfq', false, false);
                                    get_4 = objectStore_3.get(KeyRange_18);
                                }
                                catch (e){
                                    KeyRange_19 = IDBKeyRange.only('ggblDfx');
                                    get_4 = objectStore_3.get(KeyRange_19);
                                }

                                var objectStore_8;
                                objectStore_8 = db.createObjectStore('objectStore_197', {keypath: 'blvnoirNOxnW'});
                            };
                            var delete_4;
                            try{
                                KeyRange_20 = IDBKeyRange.lowerBound('SNF', true);
                                delete_4 = objectStore_3.delete(KeyRange_20);
                            }
                            catch (e){
                                KeyRange_21 = IDBKeyRange.only('SNF');
                                delete_4 = objectStore_3.delete(KeyRange_21);
                            }

                            var put_4;
                            put_4 = objectStore_3.put({f0_s: '<array>', f1_m: '<array>', f2_k: '<number>', f3_v: '<null>', f4_x: '<array>', f5_u: '<array>', f6_c: '<string>'}, 'IUBSSP');
                            var count_1;
                            try{
                                KeyRange_22 = IDBKeyRange.only('aPQKoCfvexp');
                                count_1 = objectStore_3.count(KeyRange_22);
                            }
                            catch (e){
                                KeyRange_23 = IDBKeyRange.only('SNF');
                                count_1 = objectStore_3.count(KeyRange_23);
                            }

                            var count_2;
                            count_2 = objectStore_3.count();
                            var clear_2;
                            clear_2 = objectStore_3.clear();
                        };
                        var put_5;
                        put_5 = objectStore_3.put({f0_s: '<object>', f1_e: '<null>'}, 'wfF');
                        var put_6;
                        put_6 = objectStore_3.put({f0_l: '<number>', f1_s: '<boolean>', f2_m: '<null>', f3_x: '<string>', f4_u: '<string>', f5_s: '<null>', f6_e: '<object>', f7_j: '<object>', f8_e: '<boolean>', f9_u: '<object>'}, 'OBzgzCGe');
                        var clear_3;
                        clear_3 = objectStore_3.clear();
                        var delete_5;
                        try{
                            KeyRange_24 = IDBKeyRange.lowerBound('wfF', false);
                            delete_5 = objectStore_3.delete(KeyRange_24);
                        }
                        catch (e){
                            KeyRange_25 = IDBKeyRange.only('iAGdIfaMRfq');
                            delete_5 = objectStore_3.delete(KeyRange_25);
                        }

                        var clear_4;
                        clear_4 = objectStore_3.clear();
                    };
                    var add_8;
                    add_8 = objectStore_3.add({f0_h: '<object>', f1_m: '<boolean>', f2_j: '<string>', f3_s: '<string>'}, 'ebFf');
                    var get_5;
                    try{
                        KeyRange_26 = IDBKeyRange.only('wfF');
                        get_5 = objectStore_3.get(KeyRange_26);
                    }
                    catch (e){
                        KeyRange_27 = IDBKeyRange.only('SNF');
                        get_5 = objectStore_3.get(KeyRange_27);
                    }

                    var index_192;
                    index_192 = objectStore_3.createIndex('index_192', 'test');
                    var clear_5;
                    clear_5 = objectStore_3.clear();
                    var index_193;
                    index_193 = objectStore_3.createIndex('index_193', 'test', {unique: false, multiEntry: false});
                };
            };
        };
        var objectStore_9;
        objectStore_9 = db.createObjectStore('objectStore_198', {keypath: 'paBg'});
        var add_9;
        add_9 = objectStore_9.add({f0_p: '<string>', f1_h: '<number>', f2_n: '<null>'}, 'KoiM');
        var index_194;
        index_194 = objectStore_9.createIndex('index_194', 'test', {unique: true, multiEntry: true});
        var add_10;
        add_10 = objectStore_9.add({f0_y: '<boolean>', f1_d: '<array>', f2_k: '<array>', f3_e: '<null>', f4_e: '<array>', f5_i: '<object>', f6_a: '<number>'}, 'NxGKMExKnj');
    };
    var objectStore_10 = db.createObjectStore('objectStore_199', {keypath: 'dDbN.ogwIZDvkP.wPEcwN.RteeGa.fsolSCJ.bpnVnrQYF.EXMW.VnyNXWBB.ccTnpk.dqRP'});
    db.deleteObjectStore('objectStore_199')
    var objectStore_11 = db.createObjectStore('objectStore_200', {keypath: 'rVNFpstlcpaT'});
    var objectStore_12 = db.createObjectStore('objectStore_201', {keypath: 'jss'});
    var index_195 = objectStore_12.createIndex('index_195', 'test', {unique: true});
    var index_196 = objectStore_11.createIndex('index_196', 'test');
    var index_5 = objectStore_12.index('index_195');
    var index_197 = objectStore_11.createIndex('index_197', 'test', {unique: true, multiEntry: false});
    db.deleteObjectStore('objectStore_200')
    add_1.onsuccess = (event) => {
        objectStore_12.deleteIndex('index_195')
        var index_198;
        index_198 = objectStore_12.createIndex('index_198', 'test', {unique: true, multiEntry: true});
        add_0.onsuccess = (event) => {
            objectStore_12.deleteIndex('index_198')
            db.deleteObjectStore('objectStore_201')
            add_1.onsuccess = (event) => {
                add_0.onsuccess = (event) => {
                    add_1.onsuccess = (event) => {
                        add_1.onsuccess = (event) => {
                            add_0.onsuccess = (event) => {
                                add_1.onsuccess = (event) => {
                                    add_0.onsuccess = (event) => {
                                        add_0.onsuccess = (event) => {
                                            var objectStore_13;
                                            objectStore_13 = db.createObjectStore('objectStore_202');
                                            var put_7;
                                            put_7 = objectStore_13.put({f0_g: '<boolean>', f1_c: '<array>', f2_f: '<null>'}, 'KvFf');
                                            db.deleteObjectStore('objectStore_202')
                                        };
                                    };
                                };
                            };
                        };
                        var objectStore_14;
                        objectStore_14 = db.createObjectStore('objectStore_203');
                        var add_11;
                        add_11 = objectStore_14.add({f0_z: '<array>', f1_d: '<null>', f2_k: '<number>', f3_h: '<string>', f4_n: '<string>', f5_m: '<array>', f6_j: '<array>'}, 'gwvZr');
                        var index_199;
                        index_199 = objectStore_14.createIndex('index_199', 'test', {multiEntry: true});
                        var get_6;
                        try{
                            KeyRange_28 = IDBKeyRange.only('gwvZr');
                            get_6 = objectStore_14.get(KeyRange_28);
                        }
                        catch (e){
                            KeyRange_29 = IDBKeyRange.only('gwvZr');
                            get_6 = objectStore_14.get(KeyRange_29);
                        }

                    };
                };
            };
        };
        var objectStore_15;
        objectStore_15 = db.createObjectStore('objectStore_204', {autoIncrement: true});
        var put_8;
        put_8 = objectStore_15.put({f0_k: '<null>', f1_r: '<object>', f2_r: '<object>', f3_l: '<number>', f4_r: '<object>', f5_a: '<number>', f6_q: '<string>'}, 'ONLxZDWSAlg');
        var add_12;
        add_12 = objectStore_15.add({f0_m: '<object>', f1_k: '<string>', f2_g: '<object>', f3_t: '<boolean>', f4_v: '<object>', f5_l: '<null>'}, 'HUxV');
    };
    var objectStore_16 = db.createObjectStore('objectStore_205', {keypath: 'IAvOhDEAExmq', autoIncrement: true});
};
const deleteRequest = indexedDB.deleteDatabase('str_6173')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
