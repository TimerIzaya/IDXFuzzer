let db;
const openRequest = window.indexedDB.open('str_4345', '34')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: true});
    db.deleteObjectStore('objectStore_0')
    var objectStore_1 = db.createObjectStore('objectStore_1');
    var index_0 = objectStore_1.createIndex('index_0', 'test', {unique: false, multiEntry: true});
    var clear_0 = objectStore_1.clear();
    objectStore_1.deleteIndex('index_0')
    var add_0 = objectStore_1.add({f0_f: '<null>', f1_x: '<number>'}, 'VQZqgROv');
    var get_0 = objectStore_1.get('VQZqgROv');
    KeyRange_0 = IDBKeyRange.bound('VQZqgROv', 'VQZqgROv', false, false);
    var delete_0 = objectStore_1.delete(KeyRange_0);
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'NtVITd.vCSUlkasaO.KOQvz.glVqZiggX.vfb.bpoDa.mUgRi'});
    var clear_1 = objectStore_1.clear();
    db.deleteObjectStore('objectStore_1')
    add_0.onsuccess = (event) => {
        var index_1;
        index_1 = objectStore_2.createIndex('index_1', 'test');
        var index_2;
        index_2 = objectStore_2.createIndex('index_2', 'test', {multiEntry: true});
        db.deleteObjectStore('objectStore_2')
        clear_0.onsuccess = (event) => {
            delete_0.onsuccess = (event) => {
                delete_0.onsuccess = (event) => {
                    add_0.onsuccess = (event) => {
                        clear_0.onsuccess = (event) => {
                            add_0.onsuccess = (event) => {
                                clear_1.onsuccess = (event) => {
                                    var objectStore_3;
                                    objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'qmluvwaGW', autoIncrement: false});
                                    db.deleteObjectStore('objectStore_3')
                                    var objectStore_4;
                                    objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'OyAZl', autoIncrement: false});
                                    var count_0;
                                    count_0 = objectStore_4.count();
                                    count_0.onsuccess = (event) => {
                                        var getAllKeys_0;
                                        getAllKeys_0 = objectStore_4.getAllKeys();
                                        clear_1.onsuccess = (event) => {
                                            var put_0;
                                            put_0 = objectStore_4.put({f0_v: '<null>', f1_b: '<null>', f2_i: '<object>', f3_j: '<null>', f4_u: '<object>'}, 'RdybBkbunXbL');
                                            var index_3;
                                            index_3 = objectStore_4.createIndex('index_3', 'test', {unique: true, multiEntry: false});
                                            var index_4;
                                            index_4 = objectStore_4.createIndex('index_4', 'test');
                                            KeyRange_1 = IDBKeyRange.lowerBound('RdybBkbunXbL', false);
                                            var getAll_0;
                                            getAll_0 = objectStore_4.getAll(KeyRange_1, 1872887937);
                                            var getAll_1;
                                            getAll_1 = objectStore_4.getAll('RdybBkbunXbL', 2456926502);
                                        };
                                        var getAllKeys_1;
                                        getAllKeys_1 = objectStore_4.getAllKeys();
                                        var index_5;
                                        index_5 = objectStore_4.createIndex('index_5', 'test');
                                        var index_6;
                                        index_6 = objectStore_4.createIndex('index_6', 'test', {multiEntry: true});
                                        db.deleteObjectStore('objectStore_4')
                                    };
                                };
                                var objectStore_5;
                                objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'teMcckMNz'});
                            };
                        };
                    };
                };
            };
        };
    };
    var objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'ojSrMhH.lbHjPUdDqB.OKOajZptPk.piinbKhauoE.ifJMKWQHU.BaZHiqE'});
    var count_1 = objectStore_6.count();
    var index_7 = objectStore_6.createIndex('index_7', 'test', {unique: true});
    var index_8 = objectStore_6.createIndex('index_8', 'test', {multiEntry: false});
    clear_0.onsuccess = (event) => {
        var getAllKeys_2;
        getAllKeys_2 = objectStore_6.getAllKeys();
        var objectStore_7;
        objectStore_7 = db.createObjectStore('objectStore_7');
        get_0.onsuccess = (event) => {
            var index_0;
            index_0 = objectStore_6.index('index_8');
            getAllKeys_2.onsuccess = (event) => {
                db.deleteObjectStore('objectStore_6')
                var index_9;
                index_9 = objectStore_7.createIndex('index_9', 'test', {multiEntry: false});
                var index_10;
                index_10 = objectStore_7.createIndex('index_10', 'test', {unique: true});
                var index_11;
                index_11 = objectStore_7.createIndex('index_11', 'test', {unique: false, multiEntry: false});
                get_0.onsuccess = (event) => {
                    var objectStore_8;
                    objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'KtIdsEUZwt', autoIncrement: true});
                    var put_1;
                    put_1 = objectStore_7.put({f0_z: '<array>', f1_k: '<array>', f2_q: '<object>', f3_p: '<string>', f4_k: '<null>', f5_r: '<number>', f6_t: '<object>', f7_n: '<object>'}, 'Snze');
                    var objectStore_9;
                    objectStore_9 = db.createObjectStore('objectStore_9', {keypath: 'cDmkToCylMFG.YhnPhKCO.ACTrmowNZFR.CrVXFrZcHQHO.rRDNpJyBwWZ.PtPckCKkdLKL.etwW.sSng.DofmVUEppqW', autoIncrement: true});
                    var delete_1;
                    delete_1 = objectStore_7.delete('Snze');
                    count_1.onsuccess = (event) => {
                        var put_2;
                        put_2 = objectStore_7.put({f0_b: '<object>', f1_q: '<object>', f2_t: '<array>', f3_u: '<number>'}, 'MtpbkFcLJ');
                        db.deleteObjectStore('objectStore_9')
                        delete_0.onsuccess = (event) => {
                            var put_3;
                            put_3 = objectStore_8.put({f0_l: '<object>', f1_u: '<object>', f2_u: '<boolean>', f3_l: '<array>', f4_a: '<string>'}, 'bSRHufbxThf');
                            var objectStore_10;
                            objectStore_10 = db.createObjectStore('objectStore_10');
                            count_1.onsuccess = (event) => {
                                var objectStore_11;
                                objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'UjwMrHIKAZ'});
                                var getAll_2;
                                getAll_2 = objectStore_7.getAll();
                                var index_12;
                                index_12 = objectStore_7.createIndex('index_12', 'test', {unique: false, multiEntry: false});
                                var objectStore_12;
                                objectStore_12 = db.createObjectStore('objectStore_12');
                                getAllKeys_2.onsuccess = (event) => {
                                    var objectStore_13;
                                    objectStore_13 = db.createObjectStore('objectStore_13', {keypath: 'QYdv', autoIncrement: true});
                                    var add_1;
                                    add_1 = objectStore_8.add({f0_q: '<null>', f1_e: '<array>', f2_o: '<array>'}, 'VzpGu');
                                    get_0.onsuccess = (event) => {
                                        var objectStore_14;
                                        objectStore_14 = db.createObjectStore('objectStore_14', {autoIncrement: true});
                                        db.deleteObjectStore('objectStore_12')
                                        get_0.onsuccess = (event) => {
                                            var index_13;
                                            index_13 = objectStore_10.createIndex('index_13', 'test');
                                            var put_4;
                                            put_4 = objectStore_7.put({f0_r: '<null>', f1_y: '<number>', f2_o: '<array>', f3_f: '<boolean>', f4_e: '<null>', f5_e: '<boolean>', f6_w: '<null>'}, 'hDWTmmss');
                                            var index_14;
                                            index_14 = objectStore_14.createIndex('index_14', 'test');
                                            var clear_2;
                                            clear_2 = objectStore_8.clear();
                                            var index_15;
                                            index_15 = objectStore_11.createIndex('index_15', 'test', {multiEntry: false});
                                        };
                                        var add_2;
                                        add_2 = objectStore_8.add({f0_g: '<null>', f1_b: '<array>', f2_y: '<number>'}, 'VVIF');
                                        var clear_3;
                                        clear_3 = objectStore_11.clear();
                                        var index_16;
                                        index_16 = objectStore_7.createIndex('index_16', 'test', {multiEntry: true});
                                        var index_17;
                                        index_17 = objectStore_13.createIndex('index_17', 'test', {unique: true});
                                        var getAll_3;
                                        getAll_3 = objectStore_13.getAll();
                                    };
                                    var put_5;
                                    put_5 = objectStore_13.put({f0_o: '<string>', f1_x: '<object>', f2_s: '<boolean>', f3_k: '<array>', f4_u: '<null>', f5_v: '<object>', f6_p: '<array>', f7_y: '<boolean>', f8_q: '<null>', f9_m: '<number>'}, 'QjWWfAYMlmzO');
                                    var objectStore_15;
                                    objectStore_15 = db.createObjectStore('objectStore_15');
                                    var getAll_4;
                                    getAll_4 = objectStore_15.getAll();
                                };
                                var put_6;
                                put_6 = objectStore_11.put({f0_q: '<array>', f1_c: '<null>', f2_l: '<object>', f3_k: '<object>', f4_y: '<number>', f5_l: '<number>', f6_x: '<string>', f7_g: '<object>'}, 'jkcykL');
                                var index_18;
                                index_18 = objectStore_11.createIndex('index_18', 'test');
                                KeyRange_2 = IDBKeyRange.lowerBound('jkcykL', true);
                                var get_1;
                                get_1 = objectStore_11.get(KeyRange_2);
                                var index_1;
                                index_1 = objectStore_7.index('index_10');
                                var getAllKeys_3;
                                getAllKeys_3 = objectStore_11.getAllKeys('jkcykL');
                            };
                            var objectStore_16;
                            objectStore_16 = db.createObjectStore('objectStore_16', {keypath: 'leNUwnjAdu'});
                            var index_19;
                            index_19 = objectStore_8.createIndex('index_19', 'test', {multiEntry: true});
                            var clear_4;
                            clear_4 = objectStore_7.clear();
                            var clear_5;
                            clear_5 = objectStore_8.clear();
                        };
                        var index_2;
                        index_2 = objectStore_7.index('index_9');
                        var add_3;
                        add_3 = objectStore_8.add({f0_j: '<boolean>', f1_w: '<string>', f2_u: '<object>', f3_p: '<boolean>', f4_k: '<object>', f5_q: '<object>'}, 'PNpzfmiuGBr');
                        var getAllKeys_4;
                        getAllKeys_4 = objectStore_8.getAllKeys();
                        KeyRange_3 = IDBKeyRange.only('Snze');
                        var count_2;
                        try{
                            count_2 = objectStore_7.count(KeyRange_3);
                        }
                        catch (e){
                            KeyRange_4 = IDBKeyRange.only('Snze');
                            count_2 = objectStore_7.count(KeyRange_4);
                        }

                        var clear_6;
                        clear_6 = objectStore_7.clear();
                    };
                    KeyRange_5 = IDBKeyRange.bound('MtpbkFcLJ', 'MtpbkFcLJ', false, false);
                    var getAll_5;
                    getAll_5 = objectStore_7.getAll(KeyRange_5, 1021498552);
                    var get_2;
                    get_2 = objectStore_8.get('VVIF');
                    var getAll_6;
                    getAll_6 = objectStore_8.getAll('PNpzfmiuGBr', 1085775348);
                    var add_4;
                    add_4 = objectStore_8.add({f0_a: '<boolean>', f1_l: '<null>', f2_z: '<boolean>', f3_n: '<null>'}, 'MeUOKoQOriN');
                    var getAllKeys_5;
                    getAllKeys_5 = objectStore_7.getAllKeys();
                };
                KeyRange_6 = IDBKeyRange.bound('MtpbkFcLJ', 'MtpbkFcLJ', true, false);
                var delete_2;
                delete_2 = objectStore_7.delete(KeyRange_6);
                var getAllKeys_6;
                getAllKeys_6 = objectStore_7.getAllKeys('MtpbkFcLJ');
                var delete_3;
                delete_3 = objectStore_7.delete('Snze');
                var count_3;
                count_3 = objectStore_7.count();
                var getAllKeys_7;
                getAllKeys_7 = objectStore_7.getAllKeys();
            };
            var index_20;
            index_20 = objectStore_7.createIndex('index_20', 'test', {unique: false});
            var getAll_7;
            getAll_7 = objectStore_7.getAll();
            var index_3;
            index_3 = objectStore_7.index('index_20');
            var index_4;
            index_4 = objectStore_7.index('index_20');
            var index_21;
            index_21 = objectStore_7.createIndex('index_21', 'test', {unique: true, multiEntry: true});
        };
        var clear_7;
        clear_7 = objectStore_7.clear();
        var objectStore_17;
        objectStore_17 = db.createObjectStore('objectStore_17', {keypath: 'tLAFRBZmj'});
        var index_22;
        index_22 = objectStore_17.createIndex('index_22', 'test');
        KeyRange_7 = IDBKeyRange.bound('Snze', 'MtpbkFcLJ', true, false);
        var count_4;
        try{
            count_4 = objectStore_7.count(KeyRange_7);
        }
        catch (e){
            KeyRange_8 = IDBKeyRange.only('Snze');
            count_4 = objectStore_7.count(KeyRange_8);
        }

    };
    var objectStore_18 = db.createObjectStore('objectStore_18');
    var add_5 = objectStore_18.add({f0_p: '<object>', f1_y: '<array>', f2_a: '<string>', f3_q: '<object>'}, 'eDHSQsNFO');
    count_1.onsuccess = (event) => {
        var objectStore_19;
        objectStore_19 = db.createObjectStore('objectStore_19');
        var get_3;
        get_3 = objectStore_18.get('eDHSQsNFO');
        var getAllKeys_8;
        getAllKeys_8 = objectStore_19.getAllKeys();
        var add_6;
        add_6 = objectStore_19.add({f0_n: '<number>', f1_i: '<array>'}, 'dlGTEpvWV');
        get_0.onsuccess = (event) => {
            var add_7;
            add_7 = objectStore_18.add({f0_x: '<object>', f1_w: '<string>', f2_e: '<boolean>', f3_j: '<number>', f4_g: '<boolean>', f5_c: '<number>', f6_d: '<boolean>', f7_r: '<object>', f8_j: '<string>'}, 'rczfd');
            var objectStore_20;
            objectStore_20 = db.createObjectStore('objectStore_20', {autoIncrement: false});
            add_7.onsuccess = (event) => {
                var clear_8;
                clear_8 = objectStore_19.clear();
                KeyRange_9 = IDBKeyRange.bound('eDHSQsNFO', 'eDHSQsNFO', true, true);
                var delete_4;
                delete_4 = objectStore_18.delete(KeyRange_9);
                getAllKeys_8.onsuccess = (event) => {
                    var get_4;
                    get_4 = objectStore_19.get('dlGTEpvWV');
                    var index_23;
                    index_23 = objectStore_18.createIndex('index_23', 'test', {unique: false, multiEntry: false});
                    KeyRange_10 = IDBKeyRange.lowerBound('dlGTEpvWV', false);
                    var get_5;
                    get_5 = objectStore_19.get(KeyRange_10);
                    var put_7;
                    put_7 = objectStore_18.put({f0_s: '<array>'}, 'BvxgPcTzD');
                    getAllKeys_8.onsuccess = (event) => {
                        var count_5;
                        count_5 = objectStore_19.count();
                        var index_5;
                        index_5 = objectStore_18.index('index_23');
                        var index_24;
                        index_24 = objectStore_18.createIndex('index_24', 'test');
                        delete_4.onsuccess = (event) => {
                            KeyRange_11 = IDBKeyRange.bound('eDHSQsNFO', 'rczfd', false, true);
                            var get_6;
                            get_6 = objectStore_18.get(KeyRange_11);
                            db.deleteObjectStore('objectStore_19')
                            var count_6;
                            count_6 = objectStore_18.count();
                            var get_7;
                            get_7 = objectStore_18.get('BvxgPcTzD');
                            get_4.onsuccess = (event) => {
                                var index_25;
                                index_25 = objectStore_18.createIndex('index_25', 'test');
                                objectStore_18.deleteIndex('index_23')
                                var getAllKeys_9;
                                getAllKeys_9 = objectStore_18.getAllKeys('rczfd', 1551812474);
                                get_6.onsuccess = (event) => {
                                    var getAllKeys_10;
                                    getAllKeys_10 = objectStore_18.getAllKeys('rczfd');
                                    var index_6;
                                    index_6 = objectStore_18.index('index_24');
                                    var add_8;
                                    add_8 = objectStore_20.add({f0_j: '<number>', f1_d: '<array>', f2_v: '<object>', f3_r: '<number>', f4_l: '<boolean>', f5_s: '<null>', f6_k: '<string>'}, 'fiSuFpsgHsnW');
                                    var index_26;
                                    index_26 = objectStore_20.createIndex('index_26', 'test');
                                    get_5.onsuccess = (event) => {
                                        KeyRange_12 = IDBKeyRange.only('BvxgPcTzD');
                                        var getAllKeys_11;
                                        getAllKeys_11 = objectStore_18.getAllKeys(KeyRange_12);
                                        db.deleteObjectStore('objectStore_18')
                                        var index_27;
                                        index_27 = objectStore_20.createIndex('index_27', 'test');
                                        get_4.onsuccess = (event) => {
                                            var get_8;
                                            get_8 = objectStore_20.get('fiSuFpsgHsnW');
                                            var index_7;
                                            index_7 = objectStore_20.index('index_27');
                                            var objectStore_21;
                                            objectStore_21 = db.createObjectStore('objectStore_21', {autoIncrement: true});
                                            objectStore_20.deleteIndex('index_26')
                                            var objectStore_22;
                                            objectStore_22 = db.createObjectStore('objectStore_22', {keypath: 'jmzza', autoIncrement: true});
                                            var add_9;
                                            add_9 = objectStore_21.add({f0_c: '<number>', f1_y: '<array>', f2_n: '<null>', f3_n: '<object>', f4_b: '<object>', f5_i: '<boolean>', f6_w: '<array>', f7_o: '<string>', f8_x: '<array>', f9_j: '<object>'}, 'dhldiGSmx');
                                            var count_7;
                                            count_7 = objectStore_20.count();
                                        };
                                        var clear_9;
                                        clear_9 = objectStore_20.clear();
                                        var add_10;
                                        add_10 = objectStore_20.add({f0_w: '<string>', f1_r: '<string>', f2_f: '<string>', f3_s: '<array>', f4_e: '<null>', f5_s: '<array>', f6_z: '<boolean>', f7_s: '<string>', f8_s: '<number>'}, 'MsiEqa');
                                        db.deleteObjectStore('objectStore_20')
                                    };
                                };
                            };
                            var objectStore_23;
                            objectStore_23 = db.createObjectStore('objectStore_23', {autoIncrement: true});
                            db.deleteObjectStore('objectStore_23')
                        };
                        var objectStore_24;
                        objectStore_24 = db.createObjectStore('objectStore_24', {autoIncrement: true});
                        var index_28;
                        index_28 = objectStore_24.createIndex('index_28', 'test', {unique: false, multiEntry: false});
                        var index_29;
                        index_29 = objectStore_24.createIndex('index_29', 'test', {unique: true});
                    };
                };
            };
        };
    };
    var objectStore_25 = db.createObjectStore('objectStore_25', {autoIncrement: false});
    var add_11 = objectStore_25.add({f0_s: '<array>', f1_a: '<string>'}, 'CbDwXLLOMva');
    var count_8 = objectStore_25.count();
    var clear_10 = objectStore_25.clear();
    var count_9 = objectStore_25.count();
    var add_12 = objectStore_25.add({f0_a: '<number>', f1_o: '<boolean>', f2_t: '<array>', f3_p: '<object>', f4_y: '<object>', f5_w: '<object>'}, 'uIdo');
    var objectStore_26 = db.createObjectStore('objectStore_26', {keypath: 'gDUoqhGejV', autoIncrement: true});
    clear_0.onsuccess = (event) => {
        var add_13;
        add_13 = objectStore_25.add({f0_f: '<object>', f1_s: '<string>', f2_k: '<number>', f3_g: '<string>', f4_a: '<number>'}, 'JUyTjCXlB');
        var objectStore_27;
        objectStore_27 = db.createObjectStore('objectStore_27', {autoIncrement: false});
        var put_8;
        put_8 = objectStore_27.put({f0_n: '<null>', f1_q: '<string>', f2_b: '<array>', f3_i: '<null>', f4_s: '<string>', f5_j: '<boolean>'}, 'pcfIgvEiPd');
        add_12.onsuccess = (event) => {
            db.deleteObjectStore('objectStore_27')
            var getAll_8;
            getAll_8 = objectStore_25.getAll();
            add_0.onsuccess = (event) => {
                var getAllKeys_12;
                getAllKeys_12 = objectStore_26.getAllKeys();
                var add_14;
                add_14 = objectStore_26.add({f0_c: '<null>', f1_g: '<number>', f2_d: '<object>', f3_l: '<object>', f4_i: '<number>'}, 'aITLTXMYh');
                delete_0.onsuccess = (event) => {
                    var objectStore_28;
                    objectStore_28 = db.createObjectStore('objectStore_28', {autoIncrement: true});
                    count_8.onsuccess = (event) => {
                        var get_9;
                        get_9 = objectStore_26.get('aITLTXMYh');
                        KeyRange_13 = IDBKeyRange.only('JUyTjCXlB');
                        var count_10;
                        try{
                            count_10 = objectStore_25.count(KeyRange_13);
                        }
                        catch (e){
                            KeyRange_14 = IDBKeyRange.only('uIdo');
                            count_10 = objectStore_25.count(KeyRange_14);
                        }

                        add_14.onsuccess = (event) => {
                            var add_15;
                            add_15 = objectStore_28.add({f0_b: '<null>', f1_t: '<boolean>', f2_s: '<boolean>', f3_x: '<array>', f4_p: '<array>', f5_n: '<boolean>', f6_h: '<number>', f7_f: '<boolean>', f8_e: '<boolean>', f9_a: '<string>'}, 'dxtFyLbRNOsy');
                            var add_16;
                            add_16 = objectStore_28.add({f0_i: '<number>', f1_x: '<object>', f2_p: '<boolean>', f3_r: '<array>'}, 'iDDPB');
                            var index_30;
                            index_30 = objectStore_28.createIndex('index_30', 'test', {unique: true, multiEntry: false});
                            var getAll_9;
                            getAll_9 = objectStore_25.getAll('uIdo');
                            var add_17;
                            add_17 = objectStore_26.add({f0_n: '<array>'}, 'UyEVxjqeoX');
                            add_0.onsuccess = (event) => {
                                var add_18;
                                add_18 = objectStore_25.add({f0_i: '<number>', f1_o: '<object>', f2_r: '<string>', f3_x: '<string>', f4_y: '<null>', f5_n: '<object>', f6_v: '<string>', f7_m: '<boolean>'}, 'TpaQf');
                                var delete_5;
                                delete_5 = objectStore_25.delete('TpaQf');
                                add_5.onsuccess = (event) => {
                                    var count_11;
                                    count_11 = objectStore_25.count();
                                    KeyRange_15 = IDBKeyRange.only('dxtFyLbRNOsy');
                                    var getAll_10;
                                    getAll_10 = objectStore_28.getAll(KeyRange_15);
                                    var put_9;
                                    put_9 = objectStore_25.put({f0_l: '<array>', f1_g: '<null>', f2_k: '<boolean>', f3_e: '<number>', f4_g: '<string>', f5_h: '<string>'}, 'iHmuXwPGj');
                                    var index_31;
                                    index_31 = objectStore_28.createIndex('index_31', 'test', {unique: false, multiEntry: false});
                                    var index_32;
                                    index_32 = objectStore_28.createIndex('index_32', 'test', {unique: true, multiEntry: false});
                                    clear_1.onsuccess = (event) => {
                                        objectStore_28.deleteIndex('index_32')
                                        var getAll_11;
                                        getAll_11 = objectStore_28.getAll();
                                        var count_12;
                                        count_12 = objectStore_25.count();
                                        var index_33;
                                        index_33 = objectStore_25.createIndex('index_33', 'test', {unique: true, multiEntry: false});
                                        clear_0.onsuccess = (event) => {
                                            var getAll_12;
                                            getAll_12 = objectStore_25.getAll();
                                            db.deleteObjectStore('objectStore_28')
                                            var put_10;
                                            put_10 = objectStore_25.put({f0_e: '<null>', f1_g: '<boolean>', f2_u: '<number>'}, 'WFE');
                                            var count_13;
                                            count_13 = objectStore_25.count();
                                            var put_11;
                                            put_11 = objectStore_26.put({f0_u: '<array>', f1_y: '<object>', f2_y: '<number>', f3_l: '<object>', f4_p: '<array>', f5_t: '<object>', f6_d: '<null>'}, 'IajS');
                                            var add_19;
                                            add_19 = objectStore_25.add({f0_l: '<object>', f1_x: '<number>', f2_k: '<null>'}, 'VgGLjbb');
                                            var add_20;
                                            add_20 = objectStore_25.add({f0_f: '<boolean>', f1_j: '<null>', f2_l: '<object>', f3_p: '<boolean>', f4_q: '<boolean>', f5_a: '<boolean>', f6_x: '<null>', f7_b: '<number>', f8_i: '<null>'}, 'tMjW');
                                        };
                                        var clear_11;
                                        clear_11 = objectStore_25.clear();
                                        KeyRange_16 = IDBKeyRange.bound('UyEVxjqeoX', 'IajS', true, false);
                                        var getAll_13;
                                        getAll_13 = objectStore_26.getAll(KeyRange_16);
                                        var add_21;
                                        add_21 = objectStore_26.add({f0_e: '<array>', f1_j: '<object>'}, 'XASUllTeTGmP');
                                        var index_34;
                                        index_34 = objectStore_26.createIndex('index_34', 'test', {multiEntry: false});
                                        var objectStore_29;
                                        objectStore_29 = db.createObjectStore('objectStore_29', {keypath: 'lgvv'});
                                    };
                                    db.deleteObjectStore('objectStore_26')
                                    var put_12;
                                    put_12 = objectStore_25.put({f0_v: '<number>'}, 'VlIisEAs');
                                    var put_13;
                                    put_13 = objectStore_25.put({f0_w: '<null>', f1_f: '<number>', f2_q: '<object>', f3_w: '<array>', f4_w: '<boolean>'}, 'uHqyqvk');
                                    KeyRange_17 = IDBKeyRange.only('VgGLjbb');
                                    var delete_6;
                                    delete_6 = objectStore_25.delete(KeyRange_17);
                                };
                                var getAll_14;
                                getAll_14 = objectStore_25.getAll('VgGLjbb', 874727236);
                                var index_35;
                                index_35 = objectStore_25.createIndex('index_35', 'test', {unique: true, multiEntry: true});
                                var index_36;
                                index_36 = objectStore_25.createIndex('index_36', 'test', {unique: false});
                                var get_10;
                                get_10 = objectStore_25.get('tMjW');
                                objectStore_25.deleteIndex('index_35')
                            };
                            var get_11;
                            get_11 = objectStore_25.get('uIdo');
                            KeyRange_18 = IDBKeyRange.bound('iHmuXwPGj', 'JUyTjCXlB', true, true);
                            var getAllKeys_13;
                            getAllKeys_13 = objectStore_25.getAllKeys(KeyRange_18);
                            KeyRange_19 = IDBKeyRange.only('iHmuXwPGj');
                            var count_14;
                            try{
                                count_14 = objectStore_25.count(KeyRange_19);
                            }
                            catch (e){
                                KeyRange_20 = IDBKeyRange.only('TpaQf');
                                count_14 = objectStore_25.count(KeyRange_20);
                            }

                            var objectStore_30;
                            objectStore_30 = db.createObjectStore('objectStore_30', {autoIncrement: false});
                        };
                        db.deleteObjectStore('objectStore_25')
                    };
                };
            };
        };
        var objectStore_31;
        objectStore_31 = db.createObjectStore('objectStore_31', {keypath: 'jMARQqynoIkf', autoIncrement: false});
        var add_22;
        add_22 = objectStore_31.add({f0_o: '<null>', f1_q: '<object>', f2_f: '<object>', f3_l: '<number>', f4_h: '<null>', f5_n: '<boolean>', f6_b: '<string>', f7_j: '<object>'}, 'SVVnRzzIUIp');
        var delete_7;
        delete_7 = objectStore_31.delete('SVVnRzzIUIp');
        KeyRange_21 = IDBKeyRange.bound('SVVnRzzIUIp', 'SVVnRzzIUIp', false, true);
        var get_12;
        get_12 = objectStore_31.get(KeyRange_21);
        var put_14;
        put_14 = objectStore_31.put({f0_a: '<number>', f1_t: '<array>', f2_w: '<string>', f3_n: '<array>', f4_g: '<object>', f5_z: '<array>', f6_t: '<array>'}, 'ficaDMKZDTn');
    };
    add_0.onsuccess = (event) => {
        clear_0.onsuccess = (event) => {
            var objectStore_32;
            objectStore_32 = db.createObjectStore('objectStore_32', {keypath: 'zyFiaZzux.hulnTTuRthv.osawfr.JoQLhKE.bMIuPJZlnui.qEnFGE', autoIncrement: false});
            clear_10.onsuccess = (event) => {
                var objectStore_33;
                objectStore_33 = db.createObjectStore('objectStore_33', {autoIncrement: false});
                var objectStore_34;
                objectStore_34 = db.createObjectStore('objectStore_34');
                var count_15;
                count_15 = objectStore_32.count();
                var add_23;
                add_23 = objectStore_34.add({f0_c: '<boolean>', f1_p: '<string>', f2_o: '<array>', f3_u: '<number>', f4_p: '<boolean>', f5_u: '<null>'}, 'jQlH');
                count_15.onsuccess = (event) => {
                    var getAllKeys_14;
                    getAllKeys_14 = objectStore_32.getAllKeys();
                    KeyRange_22 = IDBKeyRange.bound('jQlH', 'jQlH', true, true);
                    var count_16;
                    try{
                        count_16 = objectStore_34.count(KeyRange_22);
                    }
                    catch (e){
                        KeyRange_23 = IDBKeyRange.only('jQlH');
                        count_16 = objectStore_34.count(KeyRange_23);
                    }

                    var count_17;
                    count_17 = objectStore_32.count();
                    var put_15;
                    put_15 = objectStore_33.put({f0_c: '<string>', f1_p: '<null>', f2_z: '<number>'}, 'tfLWboGKl');
                    count_16.onsuccess = (event) => {
                        var objectStore_35;
                        objectStore_35 = db.createObjectStore('objectStore_35', {keypath: 'pjvPvHwNbXZz'});
                        var getAllKeys_15;
                        getAllKeys_15 = objectStore_32.getAllKeys();
                        add_0.onsuccess = (event) => {
                            var delete_8;
                            delete_8 = objectStore_33.delete('tfLWboGKl');
                            var index_37;
                            index_37 = objectStore_35.createIndex('index_37', 'test', {unique: true});
                            var index_38;
                            index_38 = objectStore_32.createIndex('index_38', 'test', {multiEntry: false});
                            var getAllKeys_16;
                            getAllKeys_16 = objectStore_34.getAllKeys();
                            delete_8.onsuccess = (event) => {
                                var index_8;
                                index_8 = objectStore_35.index('index_37');
                                var index_9;
                                index_9 = objectStore_35.index('index_37');
                                count_15.onsuccess = (event) => {
                                    KeyRange_24 = IDBKeyRange.lowerBound('jQlH', true);
                                    var delete_9;
                                    delete_9 = objectStore_34.delete(KeyRange_24);
                                    var clear_12;
                                    clear_12 = objectStore_34.clear();
                                    KeyRange_25 = IDBKeyRange.only('tfLWboGKl');
                                    var delete_10;
                                    delete_10 = objectStore_33.delete(KeyRange_25);
                                    put_15.onsuccess = (event) => {
                                        var put_16;
                                        put_16 = objectStore_35.put({f0_v: '<boolean>', f1_y: '<array>', f2_p: '<array>'}, 'GyrWEjvHAAm');
                                        var count_18;
                                        count_18 = objectStore_33.count();
                                        var clear_13;
                                        clear_13 = objectStore_34.clear();
                                        count_15.onsuccess = (event) => {
                                            var clear_14;
                                            clear_14 = objectStore_33.clear();
                                            var objectStore_36;
                                            objectStore_36 = db.createObjectStore('objectStore_36', {keypath: 'PeFcJVWXZOX'});
                                            var put_17;
                                            put_17 = objectStore_32.put({f0_u: '<null>', f1_v: '<string>', f2_o: '<number>'}, 'TxbdNXV');
                                            var getAll_15;
                                            getAll_15 = objectStore_33.getAll('tfLWboGKl');
                                            var delete_11;
                                            delete_11 = objectStore_32.delete('TxbdNXV');
                                            var getAllKeys_17;
                                            getAllKeys_17 = objectStore_33.getAllKeys();
                                            var add_24;
                                            add_24 = objectStore_32.add({f0_v: '<number>', f1_h: '<object>', f2_a: '<boolean>', f3_g: '<null>', f4_g: '<object>', f5_i: '<number>'}, 'iDAZzlkUQxZ');
                                            KeyRange_26 = IDBKeyRange.bound('GyrWEjvHAAm', 'GyrWEjvHAAm', true, true);
                                            var get_13;
                                            get_13 = objectStore_35.get(KeyRange_26);
                                            db.deleteObjectStore('objectStore_33')
                                        };
                                        KeyRange_27 = IDBKeyRange.lowerBound('TxbdNXV', false);
                                        var delete_12;
                                        delete_12 = objectStore_32.delete(KeyRange_27);
                                        var add_25;
                                        add_25 = objectStore_34.add({f0_n: '<null>', f1_x: '<null>', f2_z: '<string>', f3_x: '<array>', f4_j: '<number>', f5_o: '<object>'}, 'oCTZxObVewB');
                                        var getAllKeys_18;
                                        getAllKeys_18 = objectStore_32.getAllKeys('iDAZzlkUQxZ');
                                        var objectStore_37;
                                        objectStore_37 = db.createObjectStore('objectStore_37');
                                        var getAll_16;
                                        getAll_16 = objectStore_37.getAll();
                                    };
                                    var index_39;
                                    index_39 = objectStore_34.createIndex('index_39', 'test', {multiEntry: false});
                                    KeyRange_28 = IDBKeyRange.lowerBound('TxbdNXV', true);
                                    var get_14;
                                    get_14 = objectStore_32.get(KeyRange_28);
                                    var objectStore_38;
                                    objectStore_38 = db.createObjectStore('objectStore_38');
                                    var clear_15;
                                    clear_15 = objectStore_34.clear();
                                    var getAll_17;
                                    getAll_17 = objectStore_32.getAll();
                                };
                                var get_15;
                                get_15 = objectStore_34.get('jQlH');
                                var put_18;
                                put_18 = objectStore_34.put({f0_t: '<number>', f1_n: '<null>', f2_l: '<boolean>', f3_h: '<object>', f4_b: '<string>'}, 'HluvoCYJrkx');
                                db.deleteObjectStore('objectStore_35')
                                var add_26;
                                add_26 = objectStore_34.add({f0_p: '<array>', f1_a: '<null>', f2_e: '<array>', f3_e: '<boolean>', f4_w: '<null>'}, 'qJJ');
                            };
                            KeyRange_29 = IDBKeyRange.only('TxbdNXV');
                            var getAllKeys_19;
                            getAllKeys_19 = objectStore_32.getAllKeys(KeyRange_29);
                            var index_40;
                            index_40 = objectStore_32.createIndex('index_40', 'test', {unique: true, multiEntry: true});
                            var put_19;
                            put_19 = objectStore_32.put({f0_k: '<null>', f1_f: '<number>'}, 'wNNACuK');
                            KeyRange_30 = IDBKeyRange.only('jQlH');
                            var delete_13;
                            delete_13 = objectStore_34.delete(KeyRange_30);
                            var get_16;
                            get_16 = objectStore_32.get('iDAZzlkUQxZ');
                        };
                        var delete_14;
                        delete_14 = objectStore_34.delete('jQlH');
                        var index_41;
                        index_41 = objectStore_32.createIndex('index_41', 'test', {multiEntry: true});
                        db.deleteObjectStore('objectStore_34')
                        var add_27;
                        add_27 = objectStore_32.add({f0_y: '<boolean>'}, 'WJXTpItRE');
                        db.deleteObjectStore('objectStore_32')
                    };
                };
            };
        };
        var objectStore_39;
        objectStore_39 = db.createObjectStore('objectStore_39');
    };
    var objectStore_40 = db.createObjectStore('objectStore_40', {keypath: 'tXKwz.HOOauVus'});
    var objectStore_41 = db.createObjectStore('objectStore_41');
    var put_20 = objectStore_40.put({f0_x: '<string>', f1_l: '<null>', f2_h: '<string>', f3_a: '<array>', f4_q: '<object>'}, 'qezV');
    var index_42 = objectStore_41.createIndex('index_42', 'test', {unique: true, multiEntry: false});
    var objectStore_42 = db.createObjectStore('objectStore_42', {keypath: 'FHBb'});
    KeyRange_31 = IDBKeyRange.bound('qezV', 'qezV', true, true);
    var get_17 = objectStore_40.get(KeyRange_31);
    var clear_16 = objectStore_40.clear();
    var put_21 = objectStore_42.put({f0_h: '<boolean>', f1_i: '<object>', f2_e: '<number>', f3_c: '<null>', f4_m: '<string>', f5_t: '<null>', f6_c: '<number>', f7_t: '<null>'}, 'loFsJr');
    var index_43 = objectStore_40.createIndex('index_43', 'test');
    var get_18 = objectStore_42.get('loFsJr');
    var put_22 = objectStore_42.put({f0_b: '<number>', f1_j: '<null>', f2_q: '<boolean>', f3_a: '<string>', f4_u: '<boolean>', f5_s: '<object>', f6_w: '<null>', f7_d: '<object>', f8_m: '<array>'}, 'VzdCQYvIWdYU');
    var index_44 = objectStore_42.createIndex('index_44', 'test', {multiEntry: true});
    var objectStore_43 = db.createObjectStore('objectStore_43', {keypath: 'fDOMBoLYZ', autoIncrement: true});
    var objectStore_44 = db.createObjectStore('objectStore_44', {keypath: 'GltVJg', autoIncrement: true});
    db.deleteObjectStore('objectStore_40')
    var index_45 = objectStore_43.createIndex('index_45', 'test', {unique: true, multiEntry: true});
    var clear_17 = objectStore_44.clear();
    get_18.onsuccess = (event) => {
        var count_19;
        count_19 = objectStore_44.count();
        var clear_18;
        clear_18 = objectStore_42.clear();
        var getAllKeys_20;
        getAllKeys_20 = objectStore_42.getAllKeys();
        count_8.onsuccess = (event) => {
            var index_46;
            index_46 = objectStore_43.createIndex('index_46', 'test');
            var put_23;
            put_23 = objectStore_41.put({f0_g: '<object>', f1_d: '<object>', f2_r: '<array>', f3_m: '<object>', f4_w: '<null>', f5_c: '<number>', f6_f: '<string>'}, 'TQTmnZATByFq');
            add_5.onsuccess = (event) => {
                var index_10;
                index_10 = objectStore_43.index('index_46');
                KeyRange_32 = IDBKeyRange.bound('TQTmnZATByFq', 'TQTmnZATByFq', true, false);
                var getAllKeys_21;
                getAllKeys_21 = objectStore_41.getAllKeys(KeyRange_32);
                var put_24;
                put_24 = objectStore_44.put({f0_s: '<boolean>', f1_p: '<number>'}, 'pajmobW');
                var objectStore_45;
                objectStore_45 = db.createObjectStore('objectStore_45');
                get_0.onsuccess = (event) => {
                    var put_25;
                    put_25 = objectStore_42.put({f0_z: '<boolean>', f1_x: '<null>', f2_q: '<array>', f3_d: '<array>'}, 'uvpKkCC');
                    db.deleteObjectStore('objectStore_45')
                    var index_47;
                    index_47 = objectStore_43.createIndex('index_47', 'test');
                    put_22.onsuccess = (event) => {
                        var index_48;
                        index_48 = objectStore_43.createIndex('index_48', 'test');
                        var index_49;
                        index_49 = objectStore_44.createIndex('index_49', 'test');
                        var add_28;
                        add_28 = objectStore_41.add({f0_u: '<string>', f1_h: '<array>'}, 'fpT');
                        var index_50;
                        index_50 = objectStore_41.createIndex('index_50', 'test');
                        clear_18.onsuccess = (event) => {
                            objectStore_44.deleteIndex('index_49')
                            var delete_15;
                            delete_15 = objectStore_42.delete('VzdCQYvIWdYU');
                            var index_51;
                            index_51 = objectStore_43.createIndex('index_51', 'test', {unique: false, multiEntry: false});
                            var put_26;
                            put_26 = objectStore_44.put({f0_z: '<boolean>', f1_a: '<number>', f2_c: '<object>', f3_x: '<number>', f4_b: '<number>', f5_u: '<null>', f6_d: '<string>', f7_o: '<boolean>', f8_b: '<number>', f9_n: '<object>'}, 'pijhTGknaT');
                            getAllKeys_20.onsuccess = (event) => {
                                var getAll_18;
                                getAll_18 = objectStore_41.getAll();
                                var index_52;
                                index_52 = objectStore_43.createIndex('index_52', 'test', {unique: true, multiEntry: true});
                                var delete_16;
                                delete_16 = objectStore_44.delete('pajmobW');
                                var count_20;
                                count_20 = objectStore_44.count();
                                add_11.onsuccess = (event) => {
                                    var count_21;
                                    count_21 = objectStore_43.count();
                                    get_18.onsuccess = (event) => {
                                        var count_22;
                                        count_22 = objectStore_44.count();
                                        var put_27;
                                        put_27 = objectStore_41.put({f0_f: '<null>', f1_r: '<string>', f2_a: '<boolean>', f3_g: '<null>', f4_v: '<null>', f5_h: '<object>', f6_t: '<array>', f7_x: '<object>', f8_a: '<object>', f9_l: '<string>'}, 'xPo');
                                        var index_53;
                                        index_53 = objectStore_41.createIndex('index_53', 'test', {unique: true});
                                        count_1.onsuccess = (event) => {
                                            KeyRange_33 = IDBKeyRange.bound('uvpKkCC', 'loFsJr', true, true);
                                            var count_23;
                                            try{
                                                count_23 = objectStore_42.count(KeyRange_33);
                                            }
                                            catch (e){
                                                KeyRange_34 = IDBKeyRange.only('uvpKkCC');
                                                count_23 = objectStore_42.count(KeyRange_34);
                                            }

                                            var delete_17;
                                            delete_17 = objectStore_41.delete('TQTmnZATByFq');
                                            var objectStore_46;
                                            objectStore_46 = db.createObjectStore('objectStore_46');
                                            KeyRange_35 = IDBKeyRange.bound('pajmobW', 'pajmobW', false, true);
                                            var getAll_19;
                                            getAll_19 = objectStore_44.getAll(KeyRange_35, 2828198660);
                                            var objectStore_47;
                                            objectStore_47 = db.createObjectStore('objectStore_47');
                                            var getAll_20;
                                            getAll_20 = objectStore_47.getAll();
                                            var index_11;
                                            index_11 = objectStore_41.index('index_42');
                                            db.deleteObjectStore('objectStore_44')
                                            var put_28;
                                            put_28 = objectStore_41.put({f0_x: '<boolean>', f1_l: '<object>', f2_b: '<array>', f3_o: '<null>', f4_o: '<object>'}, 'mQgHBXy');
                                        };
                                        objectStore_42.deleteIndex('index_44')
                                        KeyRange_36 = IDBKeyRange.lowerBound('fpT', false);
                                        var getAll_21;
                                        getAll_21 = objectStore_41.getAll(KeyRange_36);
                                        objectStore_43.deleteIndex('index_47')
                                        var count_24;
                                        count_24 = objectStore_41.count();
                                        var objectStore_48;
                                        objectStore_48 = db.createObjectStore('objectStore_48');
                                    };
                                    var index_54;
                                    index_54 = objectStore_43.createIndex('index_54', 'test', {unique: false, multiEntry: true});
                                    var get_19;
                                    get_19 = objectStore_41.get('fpT');
                                    var count_25;
                                    count_25 = objectStore_42.count();
                                    var index_55;
                                    index_55 = objectStore_42.createIndex('index_55', 'test', {unique: true});
                                };
                                var add_29;
                                add_29 = objectStore_43.add({f0_w: '<array>'}, 'sRsOiPEwFxYW');
                                var getAll_22;
                                getAll_22 = objectStore_42.getAll();
                                var add_30;
                                add_30 = objectStore_42.add({f0_q: '<number>', f1_v: '<array>', f2_z: '<null>', f3_v: '<array>', f4_b: '<array>', f5_g: '<number>', f6_m: '<boolean>', f7_q: '<number>', f8_c: '<string>'}, 'SkN');
                                var index_12;
                                index_12 = objectStore_43.index('index_46');
                            };
                            var index_56;
                            index_56 = objectStore_43.createIndex('index_56', 'test', {unique: false, multiEntry: false});
                            var index_13;
                            index_13 = objectStore_41.index('index_50');
                            KeyRange_37 = IDBKeyRange.bound('sRsOiPEwFxYW', 'sRsOiPEwFxYW', true, false);
                            var count_26;
                            try{
                                count_26 = objectStore_43.count(KeyRange_37);
                            }
                            catch (e){
                                KeyRange_38 = IDBKeyRange.only('sRsOiPEwFxYW');
                                count_26 = objectStore_43.count(KeyRange_38);
                            }

                            var getAllKeys_22;
                            getAllKeys_22 = objectStore_41.getAllKeys();
                            KeyRange_39 = IDBKeyRange.bound('sRsOiPEwFxYW', 'sRsOiPEwFxYW', false, false);
                            var delete_18;
                            delete_18 = objectStore_43.delete(KeyRange_39);
                        };
                        KeyRange_40 = IDBKeyRange.only('xPo');
                        var count_27;
                        try{
                            count_27 = objectStore_41.count(KeyRange_40);
                        }
                        catch (e){
                            KeyRange_41 = IDBKeyRange.only('xPo');
                            count_27 = objectStore_41.count(KeyRange_41);
                        }

                        var index_57;
                        index_57 = objectStore_43.createIndex('index_57', 'test', {multiEntry: false});
                        var clear_19;
                        clear_19 = objectStore_42.clear();
                        var getAllKeys_23;
                        getAllKeys_23 = objectStore_41.getAllKeys('mQgHBXy');
                        var index_58;
                        index_58 = objectStore_41.createIndex('index_58', 'test', {unique: false});
                    };
                    var put_29;
                    put_29 = objectStore_43.put({f0_q: '<string>', f1_s: '<boolean>', f2_m: '<object>', f3_k: '<number>', f4_h: '<object>', f5_l: '<array>', f6_g: '<number>'}, 'jrMMJQWnjJo');
                    var getAll_23;
                    getAll_23 = objectStore_42.getAll();
                    var count_28;
                    count_28 = objectStore_42.count();
                    var delete_19;
                    delete_19 = objectStore_42.delete('loFsJr');
                    db.deleteObjectStore('objectStore_41')
                };
                KeyRange_42 = IDBKeyRange.only('sRsOiPEwFxYW');
                var getAllKeys_24;
                getAllKeys_24 = objectStore_43.getAllKeys(KeyRange_42, 660332178);
                var delete_20;
                delete_20 = objectStore_43.delete('sRsOiPEwFxYW');
                var put_30;
                put_30 = objectStore_43.put({f0_n: '<null>', f1_i: '<null>', f2_j: '<number>', f3_u: '<array>'}, 'zGC');
                var add_31;
                add_31 = objectStore_42.add({f0_s: '<boolean>', f1_a: '<null>', f2_y: '<array>', f3_i: '<array>', f4_p: '<array>', f5_l: '<boolean>', f6_m: '<boolean>', f7_v: '<boolean>'}, 'ZTuLCwtjMywZ');
                var add_32;
                add_32 = objectStore_43.add({f0_g: '<number>', f1_f: '<object>', f2_i: '<null>', f3_m: '<number>', f4_g: '<array>', f5_q: '<number>'}, 'oyZTqumwGf');
            };
            var index_59;
            index_59 = objectStore_43.createIndex('index_59', 'test', {multiEntry: false});
            var index_14;
            index_14 = objectStore_43.index('index_45');
            var clear_20;
            clear_20 = objectStore_43.clear();
            var index_60;
            index_60 = objectStore_42.createIndex('index_60', 'test', {unique: false, multiEntry: true});
            var clear_21;
            clear_21 = objectStore_43.clear();
        };
        KeyRange_43 = IDBKeyRange.lowerBound('SkN', true);
        var delete_21;
        delete_21 = objectStore_42.delete(KeyRange_43);
        KeyRange_44 = IDBKeyRange.only('uvpKkCC');
        var count_29;
        try{
            count_29 = objectStore_42.count(KeyRange_44);
        }
        catch (e){
            KeyRange_45 = IDBKeyRange.only('SkN');
            count_29 = objectStore_42.count(KeyRange_45);
        }

        var add_33;
        add_33 = objectStore_43.add({f0_m: '<array>', f1_c: '<object>', f2_b: '<array>', f3_m: '<boolean>', f4_m: '<string>'}, 'oqaq');
        var index_61;
        index_61 = objectStore_43.createIndex('index_61', 'test', {unique: true});
        KeyRange_46 = IDBKeyRange.bound('oqaq', 'jrMMJQWnjJo', true, true);
        var count_30;
        try{
            count_30 = objectStore_43.count(KeyRange_46);
        }
        catch (e){
            KeyRange_47 = IDBKeyRange.only('sRsOiPEwFxYW');
            count_30 = objectStore_43.count(KeyRange_47);
        }

    };
    var index_62 = objectStore_43.createIndex('index_62', 'test', {unique: false, multiEntry: true});
    var delete_22 = objectStore_42.delete('ZTuLCwtjMywZ');
    var index_63 = objectStore_42.createIndex('index_63', 'test');
    db.deleteObjectStore('objectStore_42')
    var objectStore_49 = db.createObjectStore('objectStore_49');
    db.deleteObjectStore('objectStore_49')
    var getAllKeys_25 = objectStore_43.getAllKeys();
    KeyRange_48 = IDBKeyRange.bound('zGC', 'sRsOiPEwFxYW', false, true);
    var count_31;
    try{
        count_31 = objectStore_43.count(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('oqaq');
        count_31 = objectStore_43.count(KeyRange_49);
    }

    KeyRange_50 = IDBKeyRange.bound('oqaq', 'oyZTqumwGf', false, false);
    var get_20 = objectStore_43.get(KeyRange_50);
};
const deleteRequest = indexedDB.deleteDatabase('str_4345')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
