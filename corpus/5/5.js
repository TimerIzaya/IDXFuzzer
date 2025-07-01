let db;
const openRequest = window.indexedDB.open('str_6173')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_87', {autoIncrement: true});
    var objectStore_1 = db.createObjectStore('objectStore_88', {autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_89');
    var objectStore_3 = db.createObjectStore('objectStore_90', {keypath: 'umObSYlnaSRz.fuKzCrhDgYww.xFHLazozq.eAfJAznpZ.ECrRrLoD.itlWMvGI.pQt.LywMIb', autoIncrement: false});
    var index_93 = objectStore_1.createIndex('index_93', 'test', {unique: true, multiEntry: false});
    var objectStore_4 = db.createObjectStore('objectStore_91');
    var index_94 = objectStore_1.createIndex('index_94', 'test', {multiEntry: true});
    var objectStore_5 = db.createObjectStore('objectStore_92', {keypath: 'ifcSt.atWqqDPnWAYA.IIhnBykmqZry.QSRatsF.BaAuqisavssa'});
    var index_95 = objectStore_5.createIndex('index_95', 'test', {unique: false, multiEntry: true});
    var objectStore_6 = db.createObjectStore('objectStore_93', {keypath: 'uPnINuGll.zieUGeGRW.VtYoYozuhezz.xGOZWj.TtzNr.VFnd.ThfM.ZXHASldco'});
    var objectStore_7 = db.createObjectStore('objectStore_94', {keypath: 'VMVKaHiyGPlj'});
    var clear_0 = objectStore_7.clear();
    clear_0.onsuccess = (event) => {
        var objectStore_8;
        objectStore_8 = db.createObjectStore('objectStore_95', {autoIncrement: true});
        var index_96;
        index_96 = objectStore_4.createIndex('index_96', 'test', {multiEntry: false});
        var index_97;
        index_97 = objectStore_4.createIndex('index_97', 'test', {unique: false});
        clear_0.onsuccess = (event) => {
            var index_98;
            index_98 = objectStore_6.createIndex('index_98', 'test');
            var objectStore_9;
            objectStore_9 = db.createObjectStore('objectStore_96', {autoIncrement: true});
            var objectStore_10;
            objectStore_10 = db.createObjectStore('objectStore_97', {autoIncrement: false});
            clear_0.onsuccess = (event) => {
                var objectStore_11;
                objectStore_11 = db.createObjectStore('objectStore_98', {keypath: 'RvWKMU', autoIncrement: false});
                var add_0;
                add_0 = objectStore_11.add({f0_j: '<array>', f1_k: '<boolean>', f2_d: '<null>', f3_b: '<number>', f4_w: '<object>', f5_p: '<null>'}, 'rdUcpNqZd');
                db.deleteObjectStore('objectStore_87')
                add_0.onsuccess = (event) => {
                    var objectStore_12;
                    objectStore_12 = db.createObjectStore('objectStore_99', {keypath: 'ohsjWGTCtoSN'});
                    var clear_1;
                    clear_1 = objectStore_8.clear();
                    add_0.onsuccess = (event) => {
                        var clear_2;
                        clear_2 = objectStore_3.clear();
                        var index_99;
                        index_99 = objectStore_7.createIndex('index_99', 'test', {multiEntry: false});
                        var index_100;
                        index_100 = objectStore_4.createIndex('index_100', 'test', {unique: true});
                        add_0.onsuccess = (event) => {
                            var index_101;
                            index_101 = objectStore_9.createIndex('index_101', 'test', {multiEntry: false});
                            var index_102;
                            index_102 = objectStore_12.createIndex('index_102', 'test', {multiEntry: false});
                            var add_1;
                            add_1 = objectStore_7.add({f0_u: '<object>', f1_s: '<boolean>', f2_e: '<array>', f3_b: '<number>'}, 'KEAnyUxp');
                            clear_2.onsuccess = (event) => {
                                var index_103;
                                index_103 = objectStore_2.createIndex('index_103', 'test');
                                var put_0;
                                put_0 = objectStore_11.put({f0_o: '<array>', f1_h: '<string>', f2_t: '<string>', f3_g: '<boolean>', f4_q: '<array>', f5_o: '<number>', f6_r: '<string>', f7_d: '<object>', f8_u: '<object>', f9_m: '<boolean>'}, 'WqQXvX');
                                var objectStore_13;
                                objectStore_13 = db.createObjectStore('objectStore_100', {keypath: 'ogpF'});
                                objectStore_6.deleteIndex('index_98')
                                add_0.onsuccess = (event) => {
                                    db.deleteObjectStore('objectStore_97')
                                    var index_104;
                                    index_104 = objectStore_2.createIndex('index_104', 'test', {unique: true});
                                    var clear_3;
                                    clear_3 = objectStore_1.clear();
                                    put_0.onsuccess = (event) => {
                                        var delete_0;
                                        try{
                                            KeyRange_0 = IDBKeyRange.only('WqQXvX');
                                            delete_0 = objectStore_11.delete(KeyRange_0);
                                        }
                                        catch (e){
                                            KeyRange_1 = IDBKeyRange.only('rdUcpNqZd');
                                            delete_0 = objectStore_11.delete(KeyRange_1);
                                        }

                                        var index_105;
                                        index_105 = objectStore_5.createIndex('index_105', 'test', {unique: false, multiEntry: false});
                                        clear_0.onsuccess = (event) => {
                                            var get_0;
                                            try{
                                                KeyRange_2 = IDBKeyRange.bound('rdUcpNqZd', 'WqQXvX', false, false);
                                                get_0 = objectStore_11.get(KeyRange_2);
                                            }
                                            catch (e){
                                                KeyRange_3 = IDBKeyRange.only('WqQXvX');
                                                get_0 = objectStore_11.get(KeyRange_3);
                                            }

                                            var index_106;
                                            index_106 = objectStore_11.createIndex('index_106', 'test', {unique: true});
                                            var index_107;
                                            index_107 = objectStore_9.createIndex('index_107', 'test', {unique: true, multiEntry: false});
                                            db.deleteObjectStore('objectStore_99')
                                            var put_1;
                                            put_1 = objectStore_13.put({f0_b: '<number>', f1_z: '<string>', f2_v: '<array>', f3_o: '<null>', f4_e: '<object>', f5_q: '<null>', f6_j: '<null>', f7_c: '<null>'}, 'ZCYPW');
                                            var index_108;
                                            index_108 = objectStore_1.createIndex('index_108', 'test');
                                            var add_2;
                                            add_2 = objectStore_7.add({f0_o: '<boolean>', f1_b: '<boolean>', f2_v: '<array>', f3_v: '<null>', f4_k: '<number>', f5_c: '<string>', f6_s: '<object>', f7_x: '<object>'}, 'amTMYSu');
                                        };
                                        db.deleteObjectStore('objectStore_94')
                                        var objectStore_14;
                                        objectStore_14 = db.createObjectStore('objectStore_101');
                                        var put_2;
                                        put_2 = objectStore_3.put({f0_v: '<boolean>', f1_v: '<number>'}, 'uAUZkOiUOMlI');
                                    };
                                    var put_3;
                                    put_3 = objectStore_13.put({f0_b: '<boolean>', f1_g: '<array>', f2_j: '<null>', f3_r: '<boolean>', f4_s: '<null>', f5_g: '<number>'}, 'WMY');
                                    db.deleteObjectStore('objectStore_93')
                                    var index_109;
                                    index_109 = objectStore_13.createIndex('index_109', 'test', {multiEntry: true});
                                };
                                var add_3;
                                add_3 = objectStore_9.add({f0_w: '<string>', f1_c: '<array>', f2_n: '<boolean>', f3_r: '<null>', f4_l: '<null>', f5_m: '<object>', f6_t: '<array>', f7_h: '<string>', f8_w: '<object>', f9_s: '<object>'}, 'iUZcIkMEohF');
                                var count_0;
                                try{
                                    KeyRange_4 = IDBKeyRange.only('uAUZkOiUOMlI');
                                    count_0 = objectStore_3.count(KeyRange_4);
                                }
                                catch (e){
                                    KeyRange_5 = IDBKeyRange.only('uAUZkOiUOMlI');
                                    count_0 = objectStore_3.count(KeyRange_5);
                                }

                                var put_4;
                                put_4 = objectStore_9.put({f0_l: '<boolean>', f1_s: '<string>', f2_c: '<null>', f3_n: '<array>', f4_s: '<number>', f5_c: '<number>', f6_l: '<string>', f7_u: '<array>', f8_f: '<string>'}, 'wrsXN');
                                var objectStore_15;
                                objectStore_15 = db.createObjectStore('objectStore_102', {autoIncrement: false});
                                var clear_4;
                                clear_4 = objectStore_15.clear();
                            };
                            var index_110;
                            index_110 = objectStore_2.createIndex('index_110', 'test', {unique: false});
                            var objectStore_16;
                            objectStore_16 = db.createObjectStore('objectStore_103');
                            var clear_5;
                            clear_5 = objectStore_9.clear();
                            var index_111;
                            index_111 = objectStore_9.createIndex('index_111', 'test', {multiEntry: true});
                        };
                        var index_112;
                        index_112 = objectStore_2.createIndex('index_112', 'test', {unique: true});
                        db.deleteObjectStore('objectStore_88')
                        var put_5;
                        put_5 = objectStore_2.put({f0_b: '<boolean>', f1_r: '<number>', f2_c: '<object>', f3_v: '<string>', f4_t: '<string>', f5_v: '<null>', f6_r: '<number>', f7_g: '<boolean>', f8_a: '<object>', f9_g: '<null>'}, 'junss');
                        var delete_1;
                        try{
                            KeyRange_6 = IDBKeyRange.only('junss');
                            delete_1 = objectStore_2.delete(KeyRange_6);
                        }
                        catch (e){
                            KeyRange_7 = IDBKeyRange.only('junss');
                            delete_1 = objectStore_2.delete(KeyRange_7);
                        }

                    };
                    var delete_2;
                    try{
                        KeyRange_8 = IDBKeyRange.lowerBound('iUZcIkMEohF', true);
                        delete_2 = objectStore_9.delete(KeyRange_8);
                    }
                    catch (e){
                        KeyRange_9 = IDBKeyRange.only('iUZcIkMEohF');
                        delete_2 = objectStore_9.delete(KeyRange_9);
                    }

                    var count_1;
                    count_1 = objectStore_11.count();
                    var get_1;
                    try{
                        KeyRange_10 = IDBKeyRange.bound('uAUZkOiUOMlI', 'uAUZkOiUOMlI', true, false);
                        get_1 = objectStore_3.get(KeyRange_10);
                    }
                    catch (e){
                        KeyRange_11 = IDBKeyRange.only('uAUZkOiUOMlI');
                        get_1 = objectStore_3.get(KeyRange_11);
                    }

                    db.deleteObjectStore('objectStore_89')
                };
                var delete_3;
                try{
                    KeyRange_12 = IDBKeyRange.only('WqQXvX');
                    delete_3 = objectStore_11.delete(KeyRange_12);
                }
                catch (e){
                    KeyRange_13 = IDBKeyRange.only('rdUcpNqZd');
                    delete_3 = objectStore_11.delete(KeyRange_13);
                }

                var add_4;
                add_4 = objectStore_8.add({f0_i: '<number>', f1_n: '<array>', f2_y: '<object>', f3_j: '<null>'}, 'VuS');
                var objectStore_17;
                objectStore_17 = db.createObjectStore('objectStore_104', {keypath: 'KZWgwHonqr.ZPD.eoPok.CuVtg.leKzxfdDh.pgTrqlk.Vcw.nfsp.iUMwlz.OEFUNWmDjlDe', autoIncrement: true});
                db.deleteObjectStore('objectStore_90')
            };
            var index_113;
            index_113 = objectStore_4.createIndex('index_113', 'test', {multiEntry: true});
            var index_114;
            index_114 = objectStore_8.createIndex('index_114', 'test', {unique: true});
            var index_0;
            index_0 = objectStore_8.index('index_114');
            var put_6;
            put_6 = objectStore_9.put({f0_d: '<null>'}, 'IJCJkZ');
        };
        var add_5;
        add_5 = objectStore_5.add({f0_n: '<array>', f1_w: '<string>', f2_f: '<number>', f3_a: '<string>', f4_n: '<string>', f5_z: '<array>', f6_s: '<object>', f7_l: '<number>', f8_c: '<object>'}, 'VrbYmMVpP');
        var put_7;
        put_7 = objectStore_4.put({f0_v: '<number>', f1_x: '<number>', f2_q: '<number>', f3_o: '<number>', f4_f: '<boolean>', f5_q: '<object>', f6_s: '<number>', f7_j: '<object>', f8_e: '<string>'}, 'ukeDbTUt');
        var put_8;
        put_8 = objectStore_4.put({f0_z: '<object>', f1_i: '<array>', f2_s: '<object>', f3_r: '<string>', f4_m: '<boolean>', f5_x: '<object>', f6_b: '<null>'}, 'pNPisUnXnqf');
        var get_2;
        try{
            KeyRange_14 = IDBKeyRange.only('VuS');
            get_2 = objectStore_8.get(KeyRange_14);
        }
        catch (e){
            KeyRange_15 = IDBKeyRange.only('VuS');
            get_2 = objectStore_8.get(KeyRange_15);
        }

    };
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.only('VrbYmMVpP');
        get_3 = objectStore_5.get(KeyRange_16);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('VrbYmMVpP');
        get_3 = objectStore_5.get(KeyRange_17);
    }

    var index_115 = objectStore_4.createIndex('index_115', 'test', {unique: false});
    var clear_6 = objectStore_4.clear();
    objectStore_5.deleteIndex('index_95')
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('ukeDbTUt', false);
        get_4 = objectStore_4.get(KeyRange_18);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('ukeDbTUt');
        get_4 = objectStore_4.get(KeyRange_19);
    }

    var count_2;
    try{
        KeyRange_20 = IDBKeyRange.only('VrbYmMVpP');
        count_2 = objectStore_5.count(KeyRange_20);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('VrbYmMVpP');
        count_2 = objectStore_5.count(KeyRange_21);
    }

    var index_1 = objectStore_4.index('index_115');
    var index_116 = objectStore_5.createIndex('index_116', 'test', {multiEntry: true});
    var index_2 = objectStore_4.index('index_115');
    var delete_4;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('pNPisUnXnqf', true);
        delete_4 = objectStore_4.delete(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('ukeDbTUt');
        delete_4 = objectStore_4.delete(KeyRange_23);
    }

    var index_117 = objectStore_5.createIndex('index_117', 'test');
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.only('VrbYmMVpP');
        get_5 = objectStore_5.get(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('VrbYmMVpP');
        get_5 = objectStore_5.get(KeyRange_25);
    }

    db.deleteObjectStore('objectStore_91')
    db.deleteObjectStore('objectStore_92')
    get_5.onsuccess = (event) => {
        get_4.onsuccess = (event) => {
            get_5.onsuccess = (event) => {
                clear_6.onsuccess = (event) => {
                    clear_6.onsuccess = (event) => {
                        get_5.onsuccess = (event) => {
                            get_5.onsuccess = (event) => {
                                get_3.onsuccess = (event) => {
                                    var objectStore_18;
                                    objectStore_18 = db.createObjectStore('objectStore_105', {autoIncrement: true});
                                    get_5.onsuccess = (event) => {
                                        var put_9;
                                        put_9 = objectStore_18.put({f0_h: '<array>', f1_x: '<boolean>', f2_g: '<boolean>', f3_u: '<object>', f4_k: '<string>', f5_h: '<string>', f6_z: '<object>'}, 'BVncvAEvURB');
                                        var objectStore_19;
                                        objectStore_19 = db.createObjectStore('objectStore_106');
                                        var put_10;
                                        put_10 = objectStore_18.put({f0_v: '<string>', f1_z: '<array>'}, 'LwgvGGcF');
                                        clear_6.onsuccess = (event) => {
                                            var index_118;
                                            index_118 = objectStore_19.createIndex('index_118', 'test', {unique: true});
                                            db.deleteObjectStore('objectStore_106')
                                            var put_11;
                                            put_11 = objectStore_18.put({f0_t: '<string>', f1_f: '<string>', f2_t: '<boolean>', f3_f: '<boolean>', f4_p: '<boolean>', f5_n: '<object>', f6_d: '<number>', f7_x: '<number>'}, 'gbzIKOMoAvD');
                                            var get_6;
                                            try{
                                                KeyRange_26 = IDBKeyRange.bound('LwgvGGcF', 'gbzIKOMoAvD', false, true);
                                                get_6 = objectStore_18.get(KeyRange_26);
                                            }
                                            catch (e){
                                                KeyRange_27 = IDBKeyRange.only('LwgvGGcF');
                                                get_6 = objectStore_18.get(KeyRange_27);
                                            }

                                            var index_119;
                                            index_119 = objectStore_18.createIndex('index_119', 'test', {multiEntry: true});
                                            var get_7;
                                            try{
                                                KeyRange_28 = IDBKeyRange.bound('LwgvGGcF', 'gbzIKOMoAvD', true, false);
                                                get_7 = objectStore_18.get(KeyRange_28);
                                            }
                                            catch (e){
                                                KeyRange_29 = IDBKeyRange.only('gbzIKOMoAvD');
                                                get_7 = objectStore_18.get(KeyRange_29);
                                            }

                                            var count_3;
                                            count_3 = objectStore_18.count();
                                            db.deleteObjectStore('objectStore_105')
                                        };
                                    };
                                    var objectStore_20;
                                    objectStore_20 = db.createObjectStore('objectStore_107');
                                    var index_120;
                                    index_120 = objectStore_20.createIndex('index_120', 'test', {unique: false});
                                };
                                var objectStore_21;
                                objectStore_21 = db.createObjectStore('objectStore_108', {keypath: 'fXL', autoIncrement: true});
                            };
                        };
                    };
                };
            };
            var objectStore_22;
            objectStore_22 = db.createObjectStore('objectStore_109', {keypath: 'hiTkXoWT'});
            var index_121;
            index_121 = objectStore_22.createIndex('index_121', 'test', {multiEntry: true});
        };
        var objectStore_23;
        objectStore_23 = db.createObjectStore('objectStore_110', {autoIncrement: false});
    };
    var objectStore_24 = db.createObjectStore('objectStore_111');
    var put_12 = objectStore_24.put({f0_y: '<number>', f1_r: '<null>', f2_g: '<string>', f3_z: '<object>', f4_g: '<number>', f5_g: '<number>', f6_r: '<boolean>', f7_s: '<null>', f8_p: '<null>'}, 'CMyFM');
    var count_4 = objectStore_24.count();
    var index_122 = objectStore_24.createIndex('index_122', 'test', {multiEntry: false});
    var index_3 = objectStore_24.index('index_122');
    var index_123 = objectStore_24.createIndex('index_123', 'test', {unique: false});
    var get_8;
    try{
        KeyRange_30 = IDBKeyRange.bound('CMyFM', 'CMyFM', true, true);
        get_8 = objectStore_24.get(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('CMyFM');
        get_8 = objectStore_24.get(KeyRange_31);
    }

    var index_4 = objectStore_24.index('index_122');
    var index_124 = objectStore_24.createIndex('index_124', 'test', {multiEntry: false});
    var put_13 = objectStore_24.put({f0_c: '<number>', f1_a: '<string>', f2_u: '<object>'}, 'Fbyaib');
    put_12.onsuccess = (event) => {
        var index_125;
        index_125 = objectStore_24.createIndex('index_125', 'test', {multiEntry: false});
        var index_126;
        index_126 = objectStore_24.createIndex('index_126', 'test', {unique: false, multiEntry: true});
        var add_6;
        add_6 = objectStore_24.add({f0_g: '<boolean>', f1_s: '<number>', f2_d: '<string>', f3_e: '<boolean>', f4_n: '<null>', f5_l: '<boolean>', f6_w: '<null>', f7_i: '<string>'}, 'Vybu');
        put_12.onsuccess = (event) => {
            var objectStore_25;
            objectStore_25 = db.createObjectStore('objectStore_112');
            var count_5;
            count_5 = objectStore_24.count();
            var index_127;
            index_127 = objectStore_24.createIndex('index_127', 'test', {unique: true});
            var index_128;
            index_128 = objectStore_25.createIndex('index_128', 'test', {multiEntry: true});
            var put_14;
            put_14 = objectStore_24.put({f0_f: '<boolean>', f1_b: '<number>', f2_g: '<null>', f3_z: '<number>', f4_c: '<boolean>', f5_j: '<object>', f6_t: '<boolean>'}, 'geExDF');
            get_3.onsuccess = (event) => {
                var index_129;
                index_129 = objectStore_24.createIndex('index_129', 'test', {unique: true, multiEntry: true});
                var index_5;
                index_5 = objectStore_24.index('index_123');
                var get_9;
                try{
                    KeyRange_32 = IDBKeyRange.bound('CMyFM', 'Fbyaib', false, false);
                    get_9 = objectStore_24.get(KeyRange_32);
                }
                catch (e){
                    KeyRange_33 = IDBKeyRange.only('Fbyaib');
                    get_9 = objectStore_24.get(KeyRange_33);
                }

                var delete_5;
                try{
                    KeyRange_34 = IDBKeyRange.bound('CMyFM', 'Vybu', true, true);
                    delete_5 = objectStore_24.delete(KeyRange_34);
                }
                catch (e){
                    KeyRange_35 = IDBKeyRange.only('CMyFM');
                    delete_5 = objectStore_24.delete(KeyRange_35);
                }

                clear_0.onsuccess = (event) => {
                    db.deleteObjectStore('objectStore_112')
                    var delete_6;
                    try{
                        KeyRange_36 = IDBKeyRange.bound('CMyFM', 'Fbyaib', true, false);
                        delete_6 = objectStore_24.delete(KeyRange_36);
                    }
                    catch (e){
                        KeyRange_37 = IDBKeyRange.only('CMyFM');
                        delete_6 = objectStore_24.delete(KeyRange_37);
                    }

                    get_8.onsuccess = (event) => {
                        objectStore_24.deleteIndex('index_127')
                        db.deleteObjectStore('objectStore_111')
                        clear_0.onsuccess = (event) => {
                            get_5.onsuccess = (event) => {
                                var objectStore_26;
                                objectStore_26 = db.createObjectStore('objectStore_113', {autoIncrement: true});
                                count_5.onsuccess = (event) => {
                                    var put_15;
                                    put_15 = objectStore_26.put({f0_d: '<object>', f1_s: '<null>', f2_g: '<boolean>', f3_j: '<number>', f4_t: '<object>', f5_v: '<array>'}, 'uWAamvfL');
                                    var add_7;
                                    add_7 = objectStore_26.add({f0_v: '<array>', f1_k: '<number>', f2_m: '<number>', f3_a: '<null>', f4_g: '<boolean>'}, 'TKob');
                                    var index_130;
                                    index_130 = objectStore_26.createIndex('index_130', 'test');
                                    clear_6.onsuccess = (event) => {
                                        var objectStore_27;
                                        objectStore_27 = db.createObjectStore('objectStore_114', {keypath: 'rYqQSEs'});
                                        var objectStore_28;
                                        objectStore_28 = db.createObjectStore('objectStore_115', {keypath: 'tcVVNQXKYI'});
                                        var index_131;
                                        index_131 = objectStore_28.createIndex('index_131', 'test', {unique: true, multiEntry: true});
                                        add_7.onsuccess = (event) => {
                                            var objectStore_29;
                                            objectStore_29 = db.createObjectStore('objectStore_116', {keypath: 'kQGaTRcYrZU', autoIncrement: true});
                                            var put_16;
                                            put_16 = objectStore_27.put({f0_i: '<string>', f1_h: '<string>', f2_y: '<object>', f3_i: '<boolean>'}, 'mmAsUYbh');
                                            var index_132;
                                            index_132 = objectStore_26.createIndex('index_132', 'test', {multiEntry: true});
                                            db.deleteObjectStore('objectStore_113')
                                        };
                                        var delete_7;
                                        try{
                                            KeyRange_38 = IDBKeyRange.bound('mmAsUYbh', 'mmAsUYbh', false, true);
                                            delete_7 = objectStore_27.delete(KeyRange_38);
                                        }
                                        catch (e){
                                            KeyRange_39 = IDBKeyRange.only('mmAsUYbh');
                                            delete_7 = objectStore_27.delete(KeyRange_39);
                                        }

                                        var add_8;
                                        add_8 = objectStore_27.add({f0_e: '<array>', f1_i: '<null>', f2_f: '<string>', f3_u: '<object>', f4_s: '<number>', f5_p: '<boolean>', f6_k: '<null>', f7_t: '<object>'}, 'tUvQKxYN');
                                        var objectStore_30;
                                        objectStore_30 = db.createObjectStore('objectStore_117', {autoIncrement: false});
                                        var clear_7;
                                        clear_7 = objectStore_30.clear();
                                        var clear_8;
                                        clear_8 = objectStore_27.clear();
                                    };
                                    var objectStore_31;
                                    objectStore_31 = db.createObjectStore('objectStore_118', {keypath: 'WmxoBfrQrRM'});
                                };
                            };
                        };
                    };
                };
                var objectStore_32;
                objectStore_32 = db.createObjectStore('objectStore_119', {keypath: 'IbMpO', autoIncrement: false});
                var objectStore_33;
                objectStore_33 = db.createObjectStore('objectStore_120', {keypath: 'tqIAqtU.bvQauPZJr', autoIncrement: false});
                var objectStore_34;
                objectStore_34 = db.createObjectStore('objectStore_121', {keypath: 'oNplQZdw'});
            };
            var objectStore_35;
            objectStore_35 = db.createObjectStore('objectStore_122', {keypath: 'KWrfANE.DLVaYpZ.HbLi.Nunco.dywiaoSRa.AOuBAnftU.YXCBO.OGfFAi.dRsptp', autoIncrement: true});
            var index_133;
            index_133 = objectStore_35.createIndex('index_133', 'test', {multiEntry: true});
            db.deleteObjectStore('objectStore_122')
        };
    };
    var objectStore_36 = db.createObjectStore('objectStore_123');
    var put_17 = objectStore_36.put({f0_i: '<number>', f1_s: '<string>', f2_t: '<array>'}, 'DnlDKqyctgb');
    get_4.onsuccess = (event) => {
        var get_10;
        try{
            KeyRange_40 = IDBKeyRange.lowerBound('DnlDKqyctgb', false);
            get_10 = objectStore_36.get(KeyRange_40);
        }
        catch (e){
            KeyRange_41 = IDBKeyRange.only('DnlDKqyctgb');
            get_10 = objectStore_36.get(KeyRange_41);
        }

        var add_9;
        add_9 = objectStore_36.add({f0_r: '<boolean>', f1_c: '<string>', f2_h: '<string>', f3_f: '<array>'}, 'QCGYftsCQW');
        var get_11;
        try{
            KeyRange_42 = IDBKeyRange.bound('DnlDKqyctgb', 'QCGYftsCQW', false, true);
            get_11 = objectStore_36.get(KeyRange_42);
        }
        catch (e){
            KeyRange_43 = IDBKeyRange.only('DnlDKqyctgb');
            get_11 = objectStore_36.get(KeyRange_43);
        }

        var put_18;
        put_18 = objectStore_36.put({f0_h: '<array>', f1_v: '<string>', f2_z: '<array>', f3_w: '<boolean>', f4_l: '<object>', f5_b: '<string>', f6_d: '<number>'}, 'iTBkdgEZodZa');
        put_18.onsuccess = (event) => {
            var clear_9;
            clear_9 = objectStore_36.clear();
            var add_10;
            add_10 = objectStore_36.add({f0_o: '<string>', f1_f: '<boolean>', f2_v: '<number>', f3_b: '<string>', f4_r: '<boolean>', f5_p: '<array>', f6_r: '<number>', f7_t: '<boolean>', f8_p: '<number>', f9_y: '<string>'}, 'tqFSriZP');
            var objectStore_37;
            objectStore_37 = db.createObjectStore('objectStore_124', {autoIncrement: false});
            var clear_10;
            clear_10 = objectStore_37.clear();
            put_13.onsuccess = (event) => {
                var count_6;
                count_6 = objectStore_36.count();
                var add_11;
                add_11 = objectStore_37.add({f0_y: '<number>', f1_h: '<object>', f2_e: '<boolean>', f3_b: '<number>', f4_i: '<null>', f5_h: '<array>', f6_s: '<number>', f7_t: '<string>', f8_n: '<array>'}, 'jmdFmw');
                var count_7;
                try{
                    KeyRange_44 = IDBKeyRange.bound('jmdFmw', 'jmdFmw', true, true);
                    count_7 = objectStore_37.count(KeyRange_44);
                }
                catch (e){
                    KeyRange_45 = IDBKeyRange.only('jmdFmw');
                    count_7 = objectStore_37.count(KeyRange_45);
                }

                get_5.onsuccess = (event) => {
                    var delete_8;
                    try{
                        KeyRange_46 = IDBKeyRange.bound('DnlDKqyctgb', 'tqFSriZP', false, true);
                        delete_8 = objectStore_36.delete(KeyRange_46);
                    }
                    catch (e){
                        KeyRange_47 = IDBKeyRange.only('tqFSriZP');
                        delete_8 = objectStore_36.delete(KeyRange_47);
                    }

                    db.deleteObjectStore('objectStore_123')
                    clear_0.onsuccess = (event) => {
                        var get_12;
                        try{
                            KeyRange_48 = IDBKeyRange.only('jmdFmw');
                            get_12 = objectStore_37.get(KeyRange_48);
                        }
                        catch (e){
                            KeyRange_49 = IDBKeyRange.only('jmdFmw');
                            get_12 = objectStore_37.get(KeyRange_49);
                        }

                        var get_13;
                        try{
                            KeyRange_50 = IDBKeyRange.lowerBound('jmdFmw', false);
                            get_13 = objectStore_37.get(KeyRange_50);
                        }
                        catch (e){
                            KeyRange_51 = IDBKeyRange.only('jmdFmw');
                            get_13 = objectStore_37.get(KeyRange_51);
                        }

                        var get_14;
                        try{
                            KeyRange_52 = IDBKeyRange.lowerBound('jmdFmw', false);
                            get_14 = objectStore_37.get(KeyRange_52);
                        }
                        catch (e){
                            KeyRange_53 = IDBKeyRange.only('jmdFmw');
                            get_14 = objectStore_37.get(KeyRange_53);
                        }

                        var count_8;
                        try{
                            KeyRange_54 = IDBKeyRange.only('jmdFmw');
                            count_8 = objectStore_37.count(KeyRange_54);
                        }
                        catch (e){
                            KeyRange_55 = IDBKeyRange.only('jmdFmw');
                            count_8 = objectStore_37.count(KeyRange_55);
                        }

                        var add_12;
                        add_12 = objectStore_37.add({f0_i: '<number>'}, 'rScHKz');
                        get_13.onsuccess = (event) => {
                            var objectStore_38;
                            objectStore_38 = db.createObjectStore('objectStore_125');
                            add_12.onsuccess = (event) => {
                                var objectStore_39;
                                objectStore_39 = db.createObjectStore('objectStore_126', {autoIncrement: false});
                                var objectStore_40;
                                objectStore_40 = db.createObjectStore('objectStore_127');
                                var objectStore_41;
                                objectStore_41 = db.createObjectStore('objectStore_128');
                                get_12.onsuccess = (event) => {
                                    var index_134;
                                    index_134 = objectStore_39.createIndex('index_134', 'test', {unique: false});
                                    db.deleteObjectStore('objectStore_125')
                                    db.deleteObjectStore('objectStore_128')
                                    clear_6.onsuccess = (event) => {
                                        var clear_11;
                                        clear_11 = objectStore_39.clear();
                                        var index_6;
                                        index_6 = objectStore_39.index('index_134');
                                        var count_9;
                                        count_9 = objectStore_37.count();
                                        var add_13;
                                        add_13 = objectStore_39.add({f0_s: '<object>', f1_c: '<boolean>', f2_y: '<object>', f3_e: '<object>', f4_e: '<string>', f5_r: '<object>'}, 'dkA');
                                        delete_8.onsuccess = (event) => {
                                            var objectStore_42;
                                            objectStore_42 = db.createObjectStore('objectStore_129', {autoIncrement: false});
                                            var index_135;
                                            index_135 = objectStore_39.createIndex('index_135', 'test', {unique: false});
                                            var objectStore_43;
                                            objectStore_43 = db.createObjectStore('objectStore_130');
                                            var put_19;
                                            put_19 = objectStore_37.put({f0_a: '<string>', f1_p: '<boolean>'}, 'Sbc');
                                            var add_14;
                                            add_14 = objectStore_42.add({f0_z: '<boolean>', f1_z: '<null>', f2_n: '<array>', f3_w: '<object>', f4_j: '<boolean>', f5_o: '<null>', f6_c: '<string>', f7_c: '<array>', f8_u: '<string>', f9_u: '<null>'}, 'vKaF');
                                            var add_15;
                                            add_15 = objectStore_37.add({f0_g: '<boolean>', f1_p: '<boolean>', f2_q: '<string>', f3_n: '<array>', f4_m: '<null>', f5_s: '<number>', f6_p: '<string>', f7_t: '<number>', f8_o: '<array>'}, 'oOswSlpA');
                                            var clear_12;
                                            clear_12 = objectStore_43.clear();
                                            var count_10;
                                            try{
                                                KeyRange_56 = IDBKeyRange.only('dkA');
                                                count_10 = objectStore_39.count(KeyRange_56);
                                            }
                                            catch (e){
                                                KeyRange_57 = IDBKeyRange.only('dkA');
                                                count_10 = objectStore_39.count(KeyRange_57);
                                            }

                                            db.deleteObjectStore('objectStore_126')
                                        };
                                        var put_20;
                                        put_20 = objectStore_40.put({f0_y: '<null>', f1_b: '<null>', f2_c: '<number>', f3_a: '<null>', f4_i: '<number>', f5_d: '<number>', f6_q: '<array>', f7_h: '<number>', f8_v: '<null>'}, 'lHsTgNmrpIa');
                                        var delete_9;
                                        try{
                                            KeyRange_58 = IDBKeyRange.only('lHsTgNmrpIa');
                                            delete_9 = objectStore_40.delete(KeyRange_58);
                                        }
                                        catch (e){
                                            KeyRange_59 = IDBKeyRange.only('lHsTgNmrpIa');
                                            delete_9 = objectStore_40.delete(KeyRange_59);
                                        }

                                        var put_21;
                                        put_21 = objectStore_40.put({f0_v: '<boolean>', f1_z: '<array>', f2_r: '<object>'}, 'EcBy');
                                    };
                                    var add_16;
                                    add_16 = objectStore_40.add({f0_k: '<string>', f1_i: '<boolean>', f2_x: '<boolean>', f3_e: '<array>'}, 'derKuF');
                                    var index_136;
                                    index_136 = objectStore_40.createIndex('index_136', 'test', {multiEntry: false});
                                    var get_15;
                                    try{
                                        KeyRange_60 = IDBKeyRange.bound('lHsTgNmrpIa', 'derKuF', false, true);
                                        get_15 = objectStore_40.get(KeyRange_60);
                                    }
                                    catch (e){
                                        KeyRange_61 = IDBKeyRange.only('lHsTgNmrpIa');
                                        get_15 = objectStore_40.get(KeyRange_61);
                                    }

                                    var delete_10;
                                    try{
                                        KeyRange_62 = IDBKeyRange.lowerBound('rScHKz', true);
                                        delete_10 = objectStore_37.delete(KeyRange_62);
                                    }
                                    catch (e){
                                        KeyRange_63 = IDBKeyRange.only('jmdFmw');
                                        delete_10 = objectStore_37.delete(KeyRange_63);
                                    }

                                    var get_16;
                                    try{
                                        KeyRange_64 = IDBKeyRange.only('Sbc');
                                        get_16 = objectStore_37.get(KeyRange_64);
                                    }
                                    catch (e){
                                        KeyRange_65 = IDBKeyRange.only('rScHKz');
                                        get_16 = objectStore_37.get(KeyRange_65);
                                    }

                                };
                                var add_17;
                                add_17 = objectStore_40.add({f0_s: '<boolean>', f1_t: '<null>', f2_a: '<array>', f3_v: '<number>', f4_y: '<object>', f5_n: '<object>', f6_x: '<number>'}, 'zIvvlOUTVj');
                                var get_17;
                                try{
                                    KeyRange_66 = IDBKeyRange.bound('lHsTgNmrpIa', 'EcBy', true, true);
                                    get_17 = objectStore_40.get(KeyRange_66);
                                }
                                catch (e){
                                    KeyRange_67 = IDBKeyRange.only('lHsTgNmrpIa');
                                    get_17 = objectStore_40.get(KeyRange_67);
                                }

                                var objectStore_44;
                                objectStore_44 = db.createObjectStore('objectStore_131', {autoIncrement: true});
                                var put_22;
                                put_22 = objectStore_44.put({f0_y: '<number>', f1_n: '<number>'}, 'wuYRo');
                                var clear_13;
                                clear_13 = objectStore_40.clear();
                            };
                            var index_137;
                            index_137 = objectStore_37.createIndex('index_137', 'test');
                            var index_7;
                            index_7 = objectStore_37.index('index_137');
                            var index_138;
                            index_138 = objectStore_37.createIndex('index_138', 'test', {multiEntry: true});
                            var get_18;
                            try{
                                KeyRange_68 = IDBKeyRange.only('oOswSlpA');
                                get_18 = objectStore_37.get(KeyRange_68);
                            }
                            catch (e){
                                KeyRange_69 = IDBKeyRange.only('rScHKz');
                                get_18 = objectStore_37.get(KeyRange_69);
                            }

                            var count_11;
                            count_11 = objectStore_37.count();
                        };
                        var add_18;
                        add_18 = objectStore_37.add({f0_l: '<object>', f1_c: '<null>', f2_l: '<number>', f3_y: '<number>', f4_x: '<number>', f5_c: '<object>', f6_u: '<number>'}, 'yQGsj');
                        var add_19;
                        add_19 = objectStore_37.add({f0_g: '<null>', f1_o: '<number>', f2_i: '<object>', f3_f: '<null>'}, 'WifaG');
                        var add_20;
                        add_20 = objectStore_37.add({f0_s: '<number>', f1_t: '<string>', f2_m: '<number>', f3_c: '<boolean>', f4_o: '<string>', f5_m: '<string>', f6_o: '<array>'}, 'JNtU');
                        db.deleteObjectStore('objectStore_124')
                    };
                    var objectStore_45;
                    objectStore_45 = db.createObjectStore('objectStore_132');
                    var put_23;
                    put_23 = objectStore_45.put({f0_d: '<boolean>', f1_o: '<array>', f2_d: '<string>', f3_a: '<array>', f4_o: '<null>', f5_f: '<array>', f6_k: '<array>', f7_u: '<number>', f8_f: '<object>', f9_h: '<number>'}, 'tXlB');
                    var objectStore_46;
                    objectStore_46 = db.createObjectStore('objectStore_133', {keypath: 'RHzt'});
                    var add_21;
                    add_21 = objectStore_45.add({f0_i: '<number>', f1_k: '<string>', f2_l: '<null>', f3_p: '<number>', f4_g: '<array>', f5_u: '<string>', f6_p: '<null>', f7_i: '<number>', f8_j: '<number>'}, 'cjTdB');
                    var clear_14;
                    clear_14 = objectStore_45.clear();
                };
            };
        };
    };
    var objectStore_47 = db.createObjectStore('objectStore_134', {keypath: 'YGTsTM.pkubVdOvVp.EaypqBAt.avnttwXJxnBx'});
    var put_24 = objectStore_47.put({f0_w: '<string>', f1_m: '<boolean>', f2_u: '<number>'}, 'saCqMwdRJs');
    var index_139 = objectStore_47.createIndex('index_139', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_134')
    put_12.onsuccess = (event) => {
        put_24.onsuccess = (event) => {
            var objectStore_48;
            objectStore_48 = db.createObjectStore('objectStore_135', {keypath: 'jBJjw', autoIncrement: true});
            put_13.onsuccess = (event) => {
                clear_6.onsuccess = (event) => {
                    db.deleteObjectStore('objectStore_135')
                    clear_6.onsuccess = (event) => {
                        put_24.onsuccess = (event) => {
                            put_17.onsuccess = (event) => {
                                count_4.onsuccess = (event) => {
                                    get_5.onsuccess = (event) => {
                                        var objectStore_49;
                                        objectStore_49 = db.createObjectStore('objectStore_136', {keypath: 'DVKgTpkt'});
                                        var clear_15;
                                        clear_15 = objectStore_49.clear();
                                        var objectStore_50;
                                        objectStore_50 = db.createObjectStore('objectStore_137', {keypath: 'PrTrIGkP', autoIncrement: true});
                                        count_2.onsuccess = (event) => {
                                            var index_140;
                                            index_140 = objectStore_49.createIndex('index_140', 'test', {multiEntry: false});
                                            var objectStore_51;
                                            objectStore_51 = db.createObjectStore('objectStore_138', {autoIncrement: true});
                                            var objectStore_52;
                                            objectStore_52 = db.createObjectStore('objectStore_139', {keypath: 'BdAQgFb.oKhXvqWoUuL.eeDrPxQIoBv.czZhPTCkQeiw', autoIncrement: false});
                                            var add_22;
                                            add_22 = objectStore_50.add({f0_b: '<number>', f1_o: '<object>', f2_t: '<boolean>', f3_m: '<array>', f4_b: '<null>', f5_h: '<null>', f6_t: '<number>'}, 'wZO');
                                            var clear_16;
                                            clear_16 = objectStore_51.clear();
                                            var index_141;
                                            index_141 = objectStore_52.createIndex('index_141', 'test', {unique: false, multiEntry: false});
                                        };
                                        var index_142;
                                        index_142 = objectStore_50.createIndex('index_142', 'test');
                                        var clear_17;
                                        clear_17 = objectStore_49.clear();
                                        var objectStore_53;
                                        objectStore_53 = db.createObjectStore('objectStore_140', {autoIncrement: true});
                                        db.deleteObjectStore('objectStore_136')
                                    };
                                };
                            };
                        };
                        var objectStore_54;
                        objectStore_54 = db.createObjectStore('objectStore_141');
                        var put_25;
                        put_25 = objectStore_54.put({f0_o: '<number>', f1_f: '<object>'}, 'AgLcTskan');
                    };
                };
            };
            var objectStore_55;
            objectStore_55 = db.createObjectStore('objectStore_142', {keypath: 'RPXSuHc'});
            var put_26;
            put_26 = objectStore_55.put({f0_y: '<object>', f1_o: '<null>', f2_n: '<boolean>', f3_y: '<object>', f4_k: '<null>', f5_z: '<null>'}, 'YiNyoP');
            var delete_11;
            try{
                KeyRange_70 = IDBKeyRange.only('YiNyoP');
                delete_11 = objectStore_55.delete(KeyRange_70);
            }
            catch (e){
                KeyRange_71 = IDBKeyRange.only('YiNyoP');
                delete_11 = objectStore_55.delete(KeyRange_71);
            }

        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_9240')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
