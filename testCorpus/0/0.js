let db;
const openRequest = window.indexedDB.open('str_775', 6232089376393383)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'WjKPOdLINM'});
    var index_0 = objectStore_0.createIndex('index_0', 'test');
    var add_0 = objectStore_0.add({f0_m: '<object>', f1_j: '<string>', f2_z: '<number>', f3_z: '<number>', f4_n: '<string>', f5_s: '<number>', f6_r: '<boolean>'}, 'vKLrGybAJf');
    add_0.onsuccess = (event) => {
        var add_1;
        add_1 = objectStore_0.add({f0_z: '<null>', f1_y: '<array>', f2_w: '<number>', f3_g: '<number>', f4_p: '<number>'}, 'pObzwQMomW');
        var clear_0;
        clear_0 = objectStore_0.clear();
        add_0.onsuccess = (event) => {
            objectStore_0.deleteIndex('index_0')
            var put_0;
            put_0 = objectStore_0.put({f0_o: '<number>', f1_w: '<string>', f2_s: '<array>', f3_b: '<null>', f4_p: '<number>', f5_w: '<object>', f6_h: '<boolean>', f7_i: '<string>'}, 'iQKTnPcE');
            var clear_1;
            clear_1 = objectStore_0.clear();
            put_0.onsuccess = (event) => {
                var put_1;
                put_1 = objectStore_0.put({f0_c: '<object>', f1_t: '<number>', f2_z: '<boolean>', f3_o: '<number>', f4_n: '<string>', f5_q: '<null>', f6_m: '<object>', f7_i: '<object>'}, 'jVohtUiKP');
                var clear_2;
                clear_2 = objectStore_0.clear();
                var get_0;
                try{
                    KeyRange_0 = IDBKeyRange.only('pObzwQMomW');
                    get_0 = objectStore_0.get(KeyRange_0);
                }
                catch (e){
                }

                var clear_3;
                clear_3 = objectStore_0.clear();
            };
            var get_1;
            try{
                KeyRange_2 = IDBKeyRange.bound('pObzwQMomW', 'iQKTnPcE', true, false);
                get_1 = objectStore_0.get(KeyRange_2);
            }
            catch (e){
            }

            var count_0;
            count_0 = objectStore_0.count();
            var getAllKeys_0;
            try{
                KeyRange_4 = IDBKeyRange.bound('pObzwQMomW', 'vKLrGybAJf', true, true);
                getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_4, 537815330);
            }
            catch (e){
                KeyRange_5 = IDBKeyRange.only('vKLrGybAJf');
                getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_5);
            }

        };
        var get_2;
        try{
            KeyRange_6 = IDBKeyRange.lowerBound('pObzwQMomW', true);
            get_2 = objectStore_0.get(KeyRange_6);
        }
        catch (e){
        }

    };
    var count_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('pObzwQMomW', 'iQKTnPcE', false, false);
        count_1 = objectStore_0.count(KeyRange_8);
    }
    catch (e){
    }

    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'gTarDALbIAr.iHjbGGpkWbcZ.asH.eYJyeW.MikcbURtT.qdmfz.uAUKV.cvS.wEiuvKu.vAOH'});
    var objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'klDG', autoIncrement: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_2', 'objectStore_1', 'objectStore_0'], 'readwrite', {durability:"strict"})
    var objectStore_1;
    txn_0.objectStore('objectStore_1')
    var put_2 = objectStore_1.put({f0_f: '<boolean>', f1_a: '<null>', f2_k: '<array>', f3_k: '<string>', f4_y: '<string>', f5_j: '<string>', f6_v: '<boolean>', f7_h: '<array>', f8_o: '<boolean>'}, 'wsgLBMtg');
    var add_2 = objectStore_1.add({f0_c: '<boolean>', f1_e: '<string>', f2_i: '<object>', f3_u: '<array>'}, 'GaG');
    var getAllKeys_1 = objectStore_1.getAllKeys(2339885412);
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.only('wsgLBMtg');
        get_3 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var getAllKeys_2;
    try{
        KeyRange_12 = IDBKeyRange.lowerBound('GaG', false);
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_12, 502356040);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('GaG');
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_13);
    }

    get_3.onsuccess = (event) => {
        var count_2;
        count_2 = objectStore_1.count();
        var add_3;
        add_3 = objectStore_1.add({f0_n: '<object>', f1_r: '<string>', f2_u: '<null>', f3_p: '<boolean>', f4_k: '<boolean>'}, 'Nrnynncj');
        var count_3;
        try{
            KeyRange_14 = IDBKeyRange.lowerBound('GaG', false);
            count_3 = objectStore_1.count(KeyRange_14);
        }
        catch (e){
        }

        var clear_4;
        clear_4 = objectStore_1.clear();
        var clear_5;
        clear_5 = objectStore_1.clear();
        count_1.onsuccess = (event) => {
            var clear_6;
            clear_6 = objectStore_1.clear();
            var count_4;
            count_4 = objectStore_1.count();
            var getAllKeys_3;
            try{
                KeyRange_16 = IDBKeyRange.lowerBound('wsgLBMtg', true);
                getAllKeys_3 = objectStore_1.getAllKeys(KeyRange_16);
            }
            catch (e){
                KeyRange_17 = IDBKeyRange.only('GaG');
                getAllKeys_3 = objectStore_1.getAllKeys(KeyRange_17);
            }

            getAllKeys_2.onsuccess = (event) => {
                var put_3;
                put_3 = objectStore_1.put({f0_j: '<boolean>', f1_l: '<array>', f2_k: '<array>', f3_l: '<array>'}, 'OdPb');
                var put_4;
                put_4 = objectStore_1.put({f0_d: '<string>', f1_h: '<string>', f2_k: '<object>', f3_x: '<string>', f4_x: '<boolean>', f5_g: '<object>', f6_y: '<string>', f7_p: '<object>', f8_j: '<boolean>'}, 'hpiOCbXvlKxr');
                var get_4;
                try{
                    KeyRange_18 = IDBKeyRange.bound('wsgLBMtg', 'hpiOCbXvlKxr', false, true);
                    get_4 = objectStore_1.get(KeyRange_18);
                }
                catch (e){
                }

                add_2.onsuccess = (event) => {
                    var clear_7;
                    clear_7 = objectStore_1.clear();
                    var count_5;
                    try{
                        KeyRange_20 = IDBKeyRange.lowerBound('OdPb', true);
                        count_5 = objectStore_1.count(KeyRange_20);
                    }
                    catch (e){
                    }

                    put_3.onsuccess = (event) => {
                        var getAll_0;
                        getAll_0 = objectStore_1.getAll();
                        var delete_0;
                        try{
                            KeyRange_22 = IDBKeyRange.bound('hpiOCbXvlKxr', 'OdPb', false, true);
                            delete_0 = objectStore_1.delete(KeyRange_22);
                        }
                        catch (e){
                        }

                        var count_6;
                        count_6 = objectStore_1.count();
                        var get_5;
                        try{
                            KeyRange_24 = IDBKeyRange.only('Nrnynncj');
                            get_5 = objectStore_1.get(KeyRange_24);
                        }
                        catch (e){
                        }

                        getAllKeys_3.onsuccess = (event) => {
                            var clear_8;
                            clear_8 = objectStore_1.clear();
                            var put_5;
                            put_5 = objectStore_1.put({f0_j: '<null>', f1_o: '<boolean>', f2_e: '<null>', f3_d: '<number>', f4_x: '<array>', f5_d: '<object>', f6_r: '<boolean>', f7_e: '<null>', f8_q: '<null>'}, 'KiKnX');
                            var get_6;
                            try{
                                KeyRange_26 = IDBKeyRange.only('Nrnynncj');
                                get_6 = objectStore_1.get(KeyRange_26);
                            }
                            catch (e){
                            }

                            var count_7;
                            count_7 = objectStore_1.count();
                            getAllKeys_2.onsuccess = (event) => {
                                var count_8;
                                try{
                                    KeyRange_28 = IDBKeyRange.bound('hpiOCbXvlKxr', 'wsgLBMtg', false, true);
                                    count_8 = objectStore_1.count(KeyRange_28);
                                }
                                catch (e){
                                }

                                var getAllKeys_4;
                                getAllKeys_4 = objectStore_1.getAllKeys(4144802892);
                                add_0.onsuccess = (event) => {
                                    var clear_9;
                                    clear_9 = objectStore_1.clear();
                                    var count_9;
                                    count_9 = objectStore_1.count();
                                    var clear_10;
                                    clear_10 = objectStore_1.clear();
                                    var count_10;
                                    count_10 = objectStore_1.count();
                                    put_3.onsuccess = (event) => {
                                        var get_7;
                                        try{
                                            KeyRange_30 = IDBKeyRange.only('wsgLBMtg');
                                            get_7 = objectStore_1.get(KeyRange_30);
                                        }
                                        catch (e){
                                        }

                                        var add_4;
                                        add_4 = objectStore_1.add({f0_c: '<null>', f1_u: '<boolean>', f2_j: '<null>', f3_n: '<string>'}, 'BQYhnS');
                                        get_3.onsuccess = (event) => {
                                            var count_11;
                                            count_11 = objectStore_1.count();
                                            var count_12;
                                            count_12 = objectStore_1.count();
                                            var count_13;
                                            try{
                                                KeyRange_32 = IDBKeyRange.bound('wsgLBMtg', 'wsgLBMtg', true, false);
                                                count_13 = objectStore_1.count(KeyRange_32);
                                            }
                                            catch (e){
                                            }

                                            var delete_1;
                                            try{
                                                KeyRange_34 = IDBKeyRange.bound('BQYhnS', 'Nrnynncj', true, false);
                                                delete_1 = objectStore_1.delete(KeyRange_34);
                                            }
                                            catch (e){
                                            }

                                        };
                                        var put_6;
                                        put_6 = objectStore_1.put({f0_h: '<array>', f1_o: '<null>', f2_w: '<number>', f3_a: '<boolean>', f4_n: '<boolean>', f5_v: '<null>'}, 'xKOWh');
                                        var clear_11;
                                        clear_11 = objectStore_1.clear();
                                        var count_14;
                                        count_14 = objectStore_1.count();
                                    };
                                    var getAllKeys_5;
                                    try{
                                        KeyRange_36 = IDBKeyRange.lowerBound('xKOWh', false);
                                        getAllKeys_5 = objectStore_1.getAllKeys(KeyRange_36);
                                    }
                                    catch (e){
                                        KeyRange_37 = IDBKeyRange.only('OdPb');
                                        getAllKeys_5 = objectStore_1.getAllKeys(KeyRange_37);
                                    }

                                };
                                var add_5;
                                add_5 = objectStore_1.add({f0_s: '<number>', f1_d: '<number>', f2_p: '<null>', f3_u: '<string>'}, 'tdHVoPJbPbl');
                                var add_6;
                                add_6 = objectStore_1.add({f0_b: '<string>', f1_x: '<null>', f2_a: '<null>'}, 'RVgxWPbiZ');
                                var clear_12;
                                clear_12 = objectStore_1.clear();
                            };
                        };
                    };
                };
                var add_7;
                add_7 = objectStore_1.add({f0_a: '<array>', f1_x: '<number>', f2_n: '<array>', f3_o: '<null>', f4_r: '<number>', f5_o: '<object>', f6_y: '<number>', f7_p: '<string>', f8_s: '<string>', f9_b: '<number>'}, 'TKHVGsSwSl');
            };
            var getAllKeys_6;
            try{
                KeyRange_38 = IDBKeyRange.lowerBound('GaG', true);
                getAllKeys_6 = objectStore_1.getAllKeys(KeyRange_38);
            }
            catch (e){
                KeyRange_39 = IDBKeyRange.only('xKOWh');
                getAllKeys_6 = objectStore_1.getAllKeys(KeyRange_39);
            }

            var put_7;
            put_7 = objectStore_1.put({f0_e: '<null>', f1_f: '<number>', f2_y: '<object>', f3_t: '<object>', f4_t: '<string>', f5_v: '<object>', f6_p: '<object>', f7_m: '<object>'}, 'zya');
            var getAllKeys_7;
            getAllKeys_7 = objectStore_1.getAllKeys(860573150);
        };
        var clear_13;
        clear_13 = objectStore_1.clear();
    };
    var clear_14 = objectStore_1.clear();
    add_0.onsuccess = (event) => {
        var put_8;
        put_8 = objectStore_1.put({f0_p: '<number>', f1_o: '<array>', f2_l: '<string>'}, 'gMOUNSw');
        var clear_15;
        clear_15 = objectStore_1.clear();
        var get_8;
        try{
            KeyRange_40 = IDBKeyRange.bound('RVgxWPbiZ', 'KiKnX', true, false);
            get_8 = objectStore_1.get(KeyRange_40);
        }
        catch (e){
        }

        var clear_16;
        clear_16 = objectStore_1.clear();
        var count_15;
        count_15 = objectStore_1.count();
        clear_14.onsuccess = (event) => {
            var put_9;
            put_9 = objectStore_1.put({f0_g: '<null>', f1_u: '<number>', f2_u: '<string>', f3_i: '<object>', f4_s: '<number>', f5_h: '<null>', f6_e: '<boolean>', f7_h: '<string>'}, 'DrwThEHqvhAp');
            var put_10;
            put_10 = objectStore_1.put({f0_e: '<boolean>'}, 'HNkCWnK');
            var count_16;
            try{
                KeyRange_42 = IDBKeyRange.only('RVgxWPbiZ');
                count_16 = objectStore_1.count(KeyRange_42);
            }
            catch (e){
            }

            var clear_17;
            clear_17 = objectStore_1.clear();
            var count_17;
            count_17 = objectStore_1.count();
            put_2.onsuccess = (event) => {
                var add_8;
                add_8 = objectStore_1.add({f0_t: '<object>', f1_p: '<array>', f2_j: '<object>'}, 'RRfx');
                var count_18;
                count_18 = objectStore_1.count();
                put_9.onsuccess = (event) => {
                    var count_19;
                    try{
                        KeyRange_44 = IDBKeyRange.bound('RVgxWPbiZ', 'Nrnynncj', true, false);
                        count_19 = objectStore_1.count(KeyRange_44);
                    }
                    catch (e){
                    }

                    var count_20;
                    count_20 = objectStore_1.count();
                    var getAllKeys_8;
                    getAllKeys_8 = objectStore_1.getAllKeys(1348869504);
                    clear_15.onsuccess = (event) => {
                        var getAll_1;
                        getAll_1 = objectStore_1.getAll(1853311868);
                        var put_11;
                        put_11 = objectStore_1.put({f0_p: '<object>', f1_q: '<string>', f2_b: '<null>', f3_r: '<array>', f4_b: '<number>', f5_r: '<array>'}, 'PKh');
                        var clear_18;
                        clear_18 = objectStore_1.clear();
                        getAllKeys_8.onsuccess = (event) => {
                            var put_12;
                            put_12 = objectStore_1.put({f0_s: '<string>', f1_c: '<null>', f2_b: '<string>', f3_q: '<number>', f4_k: '<array>'}, 'TbWi');
                            var delete_2;
                            try{
                                KeyRange_46 = IDBKeyRange.bound('TKHVGsSwSl', 'RVgxWPbiZ', false, false);
                                delete_2 = objectStore_1.delete(KeyRange_46);
                            }
                            catch (e){
                            }

                            var get_9;
                            try{
                                KeyRange_48 = IDBKeyRange.bound('TKHVGsSwSl', 'RRfx', false, false);
                                get_9 = objectStore_1.get(KeyRange_48);
                            }
                            catch (e){
                            }

                            getAllKeys_1.onsuccess = (event) => {
                                var delete_3;
                                try{
                                    KeyRange_50 = IDBKeyRange.bound('hpiOCbXvlKxr', 'KiKnX', true, false);
                                    delete_3 = objectStore_1.delete(KeyRange_50);
                                }
                                catch (e){
                                }

                                var get_10;
                                try{
                                    KeyRange_52 = IDBKeyRange.only('TbWi');
                                    get_10 = objectStore_1.get(KeyRange_52);
                                }
                                catch (e){
                                }

                                var clear_19;
                                clear_19 = objectStore_1.clear();
                                put_2.onsuccess = (event) => {
                                    var count_21;
                                    count_21 = objectStore_1.count();
                                    var get_11;
                                    try{
                                        KeyRange_54 = IDBKeyRange.bound('hpiOCbXvlKxr', 'PKh', true, true);
                                        get_11 = objectStore_1.get(KeyRange_54);
                                    }
                                    catch (e){
                                    }

                                    var put_13;
                                    put_13 = objectStore_1.put({f0_r: '<number>', f1_o: '<number>', f2_y: '<null>', f3_z: '<number>', f4_e: '<number>', f5_g: '<string>', f6_m: '<object>', f7_x: '<object>', f8_d: '<string>'}, 'wxnLBl');
                                    getAllKeys_1.onsuccess = (event) => {
                                        var getAll_2;
                                        getAll_2 = objectStore_1.getAll();
                                        var get_12;
                                        try{
                                            KeyRange_56 = IDBKeyRange.only('TKHVGsSwSl');
                                            get_12 = objectStore_1.get(KeyRange_56);
                                        }
                                        catch (e){
                                        }

                                        get_10.onsuccess = (event) => {
                                            var clear_20;
                                            clear_20 = objectStore_1.clear();
                                            var count_22;
                                            count_22 = objectStore_1.count();
                                            var put_14;
                                            put_14 = objectStore_1.put({f0_e: '<null>', f1_n: '<object>', f2_n: '<null>', f3_d: '<object>'}, 'DGp');
                                            var count_23;
                                            try{
                                                KeyRange_58 = IDBKeyRange.lowerBound('xKOWh', true);
                                                count_23 = objectStore_1.count(KeyRange_58);
                                            }
                                            catch (e){
                                            }

                                            var count_24;
                                            try{
                                                KeyRange_60 = IDBKeyRange.bound('TbWi', 'TKHVGsSwSl', false, true);
                                                count_24 = objectStore_1.count(KeyRange_60);
                                            }
                                            catch (e){
                                            }

                                            var get_13;
                                            try{
                                                KeyRange_62 = IDBKeyRange.bound('zya', 'OdPb', true, false);
                                                get_13 = objectStore_1.get(KeyRange_62);
                                            }
                                            catch (e){
                                            }

                                            var delete_4;
                                            try{
                                                KeyRange_64 = IDBKeyRange.lowerBound('TKHVGsSwSl', true);
                                                delete_4 = objectStore_1.delete(KeyRange_64);
                                            }
                                            catch (e){
                                            }

                                        };
                                        var count_25;
                                        try{
                                            KeyRange_66 = IDBKeyRange.bound('Nrnynncj', 'zya', true, false);
                                            count_25 = objectStore_1.count(KeyRange_66);
                                        }
                                        catch (e){
                                        }

                                        var add_9;
                                        add_9 = objectStore_1.add({f0_n: '<string>', f1_n: '<array>', f2_g: '<boolean>', f3_w: '<number>', f4_f: '<string>'}, 'UTJGhE');
                                        var put_15;
                                        put_15 = objectStore_1.put({f0_i: '<boolean>', f1_h: '<string>'}, 'YkaaZbmDDRPV');
                                    };
                                };
                            };
                            var count_26;
                            count_26 = objectStore_1.count();
                        };
                        var getAllKeys_9;
                        try{
                            KeyRange_68 = IDBKeyRange.lowerBound('UTJGhE', false);
                            getAllKeys_9 = objectStore_1.getAllKeys(KeyRange_68);
                        }
                        catch (e){
                            KeyRange_69 = IDBKeyRange.only('wsgLBMtg');
                            getAllKeys_9 = objectStore_1.getAllKeys(KeyRange_69);
                        }

                        var put_16;
                        put_16 = objectStore_1.put({f0_f: '<boolean>', f1_s: '<null>', f2_n: '<string>', f3_w: '<object>', f4_p: '<null>', f5_a: '<string>'}, 'YOx');
                        var get_14;
                        try{
                            KeyRange_70 = IDBKeyRange.lowerBound('OdPb', false);
                            get_14 = objectStore_1.get(KeyRange_70);
                        }
                        catch (e){
                        }

                    };
                    var count_27;
                    try{
                        KeyRange_72 = IDBKeyRange.lowerBound('OdPb', true);
                        count_27 = objectStore_1.count(KeyRange_72);
                    }
                    catch (e){
                    }

                };
                var clear_21;
                clear_21 = objectStore_1.clear();
            };
            var count_28;
            try{
                KeyRange_74 = IDBKeyRange.lowerBound('xKOWh', true);
                count_28 = objectStore_1.count(KeyRange_74);
            }
            catch (e){
            }

            var get_15;
            try{
                KeyRange_76 = IDBKeyRange.bound('DrwThEHqvhAp', 'hpiOCbXvlKxr', false, false);
                get_15 = objectStore_1.get(KeyRange_76);
            }
            catch (e){
            }

        };
        var add_10;
        add_10 = objectStore_1.add({f0_c: '<boolean>', f1_w: '<boolean>', f2_f: '<boolean>', f3_z: '<boolean>', f4_q: '<array>', f5_u: '<string>'}, 'UKXvJ');
        var get_16;
        try{
            KeyRange_78 = IDBKeyRange.only('YOx');
            get_16 = objectStore_1.get(KeyRange_78);
        }
        catch (e){
        }

    };
    var delete_5;
    try{
        KeyRange_80 = IDBKeyRange.bound('xKOWh', 'xKOWh', true, false);
        delete_5 = objectStore_1.delete(KeyRange_80);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_82 = IDBKeyRange.bound('gMOUNSw', 'UKXvJ', true, false);
        get_17 = objectStore_1.get(KeyRange_82);
    }
    catch (e){
    }

    var add_11 = objectStore_1.add({f0_h: '<object>', f1_y: '<array>', f2_v: '<string>', f3_d: '<null>', f4_p: '<null>', f5_e: '<boolean>', f6_b: '<boolean>', f7_h: '<string>'}, 'aLSBDv');
    var clear_22 = objectStore_1.clear();
    var get_18;
    try{
        KeyRange_84 = IDBKeyRange.bound('YOx', 'DGp', true, true);
        get_18 = objectStore_1.get(KeyRange_84);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_86 = IDBKeyRange.bound('YOx', 'RVgxWPbiZ', false, false);
        count_29 = objectStore_1.count(KeyRange_86);
    }
    catch (e){
    }

    var add_12 = objectStore_1.add({f0_c: '<null>', f1_o: '<string>', f2_f: '<array>', f3_v: '<number>'}, 'gjafKrbRUBRH');
    var delete_6;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('wsgLBMtg', true);
        delete_6 = objectStore_1.delete(KeyRange_88);
    }
    catch (e){
    }

    var put_17 = objectStore_1.put({f0_p: '<string>', f1_j: '<string>', f2_q: '<string>', f3_i: '<boolean>'}, 'LMszhOq');
    var clear_23 = objectStore_1.clear();
    var get_19;
    try{
        KeyRange_90 = IDBKeyRange.only('UKXvJ');
        get_19 = objectStore_1.get(KeyRange_90);
    }
    catch (e){
    }

    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_775')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};