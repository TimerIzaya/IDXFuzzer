let db;
const openRequest = window.indexedDB.open('str_2575')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'JBcXMtGYqTG'});
    var put_0 = objectStore_0.put({f0_i: '<string>', f1_n: '<null>'}, 'ePRhJf');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('ePRhJf', 'ePRhJf', false, false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('ePRhJf');
        get_0 = objectStore_0.get(KeyRange_1);
    }

    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'UoxNhS.Gfz.DkmvE.YBFKpxIRsP', autoIncrement: true});
    var put_1 = objectStore_0.put({f0_f: '<null>', f1_l: '<array>', f2_h: '<array>', f3_a: '<array>', f4_r: '<array>', f5_f: '<boolean>', f6_h: '<null>'}, 'smaU');
    var put_2 = objectStore_0.put({f0_d: '<null>', f1_w: '<string>', f2_y: '<number>', f3_m: '<array>', f4_u: '<string>', f5_v: '<array>', f6_q: '<boolean>', f7_m: '<null>'}, 'CLo');
    var add_0 = objectStore_0.add({f0_j: '<string>', f1_c: '<boolean>', f2_o: '<object>'}, 'AtfPTvXbW');
    var delete_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('AtfPTvXbW', 'CLo', true, false);
        delete_0 = objectStore_0.delete(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('ePRhJf');
        delete_0 = objectStore_0.delete(KeyRange_3);
    }

    put_1.onsuccess = (event) => {
        add_0.onsuccess = (event) => {
            var add_1;
            add_1 = objectStore_0.add({f0_d: '<number>', f1_r: '<boolean>', f2_a: '<null>', f3_h: '<string>', f4_y: '<string>', f5_q: '<object>', f6_c: '<number>', f7_b: '<number>', f8_v: '<null>'}, 'Kzy');
            var clear_0;
            clear_0 = objectStore_0.clear();
            add_0.onsuccess = (event) => {
                var clear_1;
                clear_1 = objectStore_0.clear();
                var put_3;
                put_3 = objectStore_1.put({f0_v: '<null>', f1_w: '<object>', f2_b: '<boolean>', f3_u: '<boolean>', f4_p: '<number>'}, 'qppeGhEz');
                var index_0;
                index_0 = objectStore_0.createIndex('index_0', 'test', {unique: false});
                var objectStore_2;
                objectStore_2 = db.createObjectStore('objectStore_2', {keypath: 'BcBRDK.dWsNtxeIIdG.ipySc.pUfSZPCh.vVaFAGTzpjB', autoIncrement: false});
                add_1.onsuccess = (event) => {
                    db.deleteObjectStore('objectStore_1')
                    var index_1;
                    index_1 = objectStore_2.createIndex('index_1', 'test', {unique: false, multiEntry: false});
                    var put_4;
                    put_4 = objectStore_0.put({f0_r: '<boolean>', f1_u: '<object>', f2_n: '<number>', f3_s: '<object>', f4_y: '<object>', f5_l: '<null>', f6_q: '<string>', f7_n: '<null>', f8_v: '<object>'}, 'JfQLo');
                    var put_5;
                    put_5 = objectStore_0.put({f0_n: '<null>', f1_q: '<array>', f2_u: '<object>', f3_f: '<object>', f4_c: '<string>', f5_i: '<boolean>', f6_s: '<number>', f7_t: '<boolean>'}, 'vYPhLSNbxo');
                    put_1.onsuccess = (event) => {
                        var put_6;
                        put_6 = objectStore_0.put({f0_w: '<object>', f1_f: '<number>', f2_b: '<null>', f3_o: '<boolean>', f4_q: '<null>', f5_i: '<null>', f6_s: '<object>', f7_s: '<boolean>', f8_z: '<array>'}, 'dXCiELSOpkMp');
                        clear_0.onsuccess = (event) => {
                            db.deleteObjectStore('objectStore_2')
                            var put_7;
                            put_7 = objectStore_0.put({f0_w: '<string>'}, 'yIqv');
                            var index_2;
                            index_2 = objectStore_0.createIndex('index_2', 'test', {unique: true});
                            var index_0;
                            index_0 = objectStore_0.index('index_0');
                            var index_3;
                            index_3 = objectStore_0.createIndex('index_3', 'test');
                            add_0.onsuccess = (event) => {
                                var get_1;
                                try{
                                    KeyRange_4 = IDBKeyRange.bound('CLo', 'vYPhLSNbxo', true, true);
                                    get_1 = objectStore_0.get(KeyRange_4);
                                }
                                catch (e){
                                    KeyRange_5 = IDBKeyRange.only('dXCiELSOpkMp');
                                    get_1 = objectStore_0.get(KeyRange_5);
                                }

                                var index_4;
                                index_4 = objectStore_0.createIndex('index_4', 'test', {multiEntry: true});
                                var index_5;
                                index_5 = objectStore_0.createIndex('index_5', 'test', {unique: true, multiEntry: false});
                                var index_6;
                                index_6 = objectStore_0.createIndex('index_6', 'test', {unique: true});
                                get_0.onsuccess = (event) => {
                                    var index_1;
                                    index_1 = objectStore_0.index('index_3');
                                    var get_2;
                                    try{
                                        KeyRange_6 = IDBKeyRange.bound('AtfPTvXbW', 'smaU', false, true);
                                        get_2 = objectStore_0.get(KeyRange_6);
                                    }
                                    catch (e){
                                        KeyRange_7 = IDBKeyRange.only('CLo');
                                        get_2 = objectStore_0.get(KeyRange_7);
                                    }

                                    var put_8;
                                    put_8 = objectStore_0.put({f0_n: '<number>', f1_h: '<null>'}, 'JEq');
                                    put_3.onsuccess = (event) => {
                                        var index_7;
                                        index_7 = objectStore_0.createIndex('index_7', 'test');
                                        var index_8;
                                        index_8 = objectStore_0.createIndex('index_8', 'test', {unique: false, multiEntry: true});
                                        var delete_1;
                                        try{
                                            KeyRange_8 = IDBKeyRange.only('dXCiELSOpkMp');
                                            delete_1 = objectStore_0.delete(KeyRange_8);
                                        }
                                        catch (e){
                                            KeyRange_9 = IDBKeyRange.only('vYPhLSNbxo');
                                            delete_1 = objectStore_0.delete(KeyRange_9);
                                        }

                                        var index_9;
                                        index_9 = objectStore_0.createIndex('index_9', 'test', {unique: false, multiEntry: true});
                                        var index_10;
                                        index_10 = objectStore_0.createIndex('index_10', 'test');
                                        put_0.onsuccess = (event) => {
                                            var put_9;
                                            put_9 = objectStore_0.put({f0_k: '<number>', f1_e: '<null>', f2_p: '<boolean>', f3_j: '<null>', f4_f: '<boolean>', f5_k: '<object>', f6_l: '<array>', f7_l: '<array>', f8_s: '<boolean>', f9_d: '<number>'}, 'lYqlXQQhLKb');
                                            var delete_2;
                                            try{
                                                KeyRange_10 = IDBKeyRange.bound('JEq', 'smaU', false, true);
                                                delete_2 = objectStore_0.delete(KeyRange_10);
                                            }
                                            catch (e){
                                                KeyRange_11 = IDBKeyRange.only('yIqv');
                                                delete_2 = objectStore_0.delete(KeyRange_11);
                                            }

                                            var index_11;
                                            index_11 = objectStore_0.createIndex('index_11', 'test');
                                            var index_12;
                                            index_12 = objectStore_0.createIndex('index_12', 'test', {unique: true, multiEntry: false});
                                            var add_2;
                                            add_2 = objectStore_0.add({f0_r: '<boolean>', f1_t: '<boolean>', f2_j: '<object>', f3_e: '<string>', f4_u: '<array>', f5_a: '<object>', f6_l: '<null>'}, 'RGGr');
                                            var index_13;
                                            index_13 = objectStore_0.createIndex('index_13', 'test');
                                            var index_14;
                                            index_14 = objectStore_0.createIndex('index_14', 'test', {unique: false});
                                            var index_2;
                                            index_2 = objectStore_0.index('index_5');
                                            var index_15;
                                            index_15 = objectStore_0.createIndex('index_15', 'test', {unique: true});
                                        };
                                        objectStore_0.deleteIndex('index_3')
                                        var clear_2;
                                        clear_2 = objectStore_0.clear();
                                        var put_10;
                                        put_10 = objectStore_0.put({f0_o: '<array>', f1_c: '<object>', f2_d: '<array>', f3_c: '<boolean>', f4_k: '<object>', f5_h: '<array>', f6_h: '<object>'}, 'dbw');
                                        var index_16;
                                        index_16 = objectStore_0.createIndex('index_16', 'test', {unique: false, multiEntry: true});
                                        var put_11;
                                        put_11 = objectStore_0.put({f0_t: '<number>', f1_u: '<number>', f2_d: '<number>', f3_h: '<number>'}, 'naULXUWY');
                                    };
                                    var clear_3;
                                    clear_3 = objectStore_0.clear();
                                    var clear_4;
                                    clear_4 = objectStore_0.clear();
                                    db.deleteObjectStore('objectStore_0')
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'DylB'});
    var clear_5 = objectStore_3.clear();
    clear_5.onsuccess = (event) => {
        var add_3;
        add_3 = objectStore_3.add({f0_e: '<boolean>', f1_t: '<null>', f2_g: '<array>'}, 'scLcPKQNM');
        db.deleteObjectStore('objectStore_3')
        delete_0.onsuccess = (event) => {
            var objectStore_4;
            objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'tWVYjYd.MJzDbpxQ.ZQFnZ'});
            put_1.onsuccess = (event) => {
                var objectStore_5;
                objectStore_5 = db.createObjectStore('objectStore_5', {keypath: 'oMvxhRZBmZs'});
                put_0.onsuccess = (event) => {
                    db.deleteObjectStore('objectStore_5')
                    clear_5.onsuccess = (event) => {
                        var index_17;
                        index_17 = objectStore_4.createIndex('index_17', 'test', {unique: false});
                        var index_18;
                        index_18 = objectStore_4.createIndex('index_18', 'test', {unique: false, multiEntry: true});
                        add_3.onsuccess = (event) => {
                            var add_4;
                            add_4 = objectStore_4.add({f0_z: '<object>', f1_i: '<string>', f2_l: '<object>', f3_c: '<array>', f4_y: '<string>'}, 'oiLdh');
                            db.deleteObjectStore('objectStore_4')
                            add_4.onsuccess = (event) => {
                                var objectStore_6;
                                objectStore_6 = db.createObjectStore('objectStore_6');
                                put_1.onsuccess = (event) => {
                                    get_0.onsuccess = (event) => {
                                        var index_19;
                                        index_19 = objectStore_6.createIndex('index_19', 'test', {multiEntry: false});
                                        var clear_6;
                                        clear_6 = objectStore_6.clear();
                                        delete_0.onsuccess = (event) => {
                                            var index_3;
                                            index_3 = objectStore_6.index('index_19');
                                            var put_12;
                                            put_12 = objectStore_6.put({f0_t: '<null>', f1_w: '<null>', f2_r: '<boolean>', f3_b: '<boolean>'}, 'lUDwSdUPR');
                                            var index_20;
                                            index_20 = objectStore_6.createIndex('index_20', 'test', {unique: true});
                                            var clear_7;
                                            clear_7 = objectStore_6.clear();
                                            var get_3;
                                            try{
                                                KeyRange_12 = IDBKeyRange.lowerBound('lUDwSdUPR', true);
                                                get_3 = objectStore_6.get(KeyRange_12);
                                            }
                                            catch (e){
                                                KeyRange_13 = IDBKeyRange.only('lUDwSdUPR');
                                                get_3 = objectStore_6.get(KeyRange_13);
                                            }

                                            var put_13;
                                            put_13 = objectStore_6.put({f0_r: '<array>', f1_s: '<boolean>', f2_a: '<string>', f3_i: '<boolean>', f4_r: '<number>', f5_c: '<boolean>', f6_m: '<array>', f7_w: '<string>', f8_o: '<object>', f9_x: '<null>'}, 'Ylxaajw');
                                            var put_14;
                                            put_14 = objectStore_6.put({f0_h: '<number>', f1_s: '<null>', f2_d: '<array>', f3_y: '<null>', f4_n: '<object>', f5_n: '<array>', f6_q: '<array>'}, 'LJBXZkrnK');
                                            var delete_3;
                                            try{
                                                KeyRange_14 = IDBKeyRange.lowerBound('Ylxaajw', true);
                                                delete_3 = objectStore_6.delete(KeyRange_14);
                                            }
                                            catch (e){
                                                KeyRange_15 = IDBKeyRange.only('LJBXZkrnK');
                                                delete_3 = objectStore_6.delete(KeyRange_15);
                                            }

                                            var count_0;
                                            count_0 = objectStore_6.count();
                                        };
                                        var put_15;
                                        put_15 = objectStore_6.put({f0_w: '<string>', f1_c: '<null>', f2_p: '<string>', f3_z: '<number>', f4_v: '<array>', f5_e: '<array>', f6_d: '<string>', f7_w: '<number>', f8_e: '<number>'}, 'cNGLICG');
                                        var get_4;
                                        try{
                                            KeyRange_16 = IDBKeyRange.bound('lUDwSdUPR', 'LJBXZkrnK', true, false);
                                            get_4 = objectStore_6.get(KeyRange_16);
                                        }
                                        catch (e){
                                            KeyRange_17 = IDBKeyRange.only('lUDwSdUPR');
                                            get_4 = objectStore_6.get(KeyRange_17);
                                        }

                                        var put_16;
                                        put_16 = objectStore_6.put({f0_k: '<boolean>', f1_o: '<number>', f2_v: '<null>', f3_g: '<array>', f4_s: '<object>', f5_k: '<number>', f6_q: '<number>', f7_r: '<null>', f8_l: '<number>'}, 'snVcEiCIJrhe');
                                        var clear_8;
                                        clear_8 = objectStore_6.clear();
                                    };
                                    var add_5;
                                    add_5 = objectStore_6.add({f0_k: '<object>', f1_y: '<null>'}, 'bCkwkU');
                                    var count_1;
                                    try{
                                        KeyRange_18 = IDBKeyRange.bound('Ylxaajw', 'cNGLICG', true, false);
                                        count_1 = objectStore_6.count(KeyRange_18);
                                    }
                                    catch (e){
                                        KeyRange_19 = IDBKeyRange.only('LJBXZkrnK');
                                        count_1 = objectStore_6.count(KeyRange_19);
                                    }

                                    var add_6;
                                    add_6 = objectStore_6.add({f0_w: '<boolean>', f1_a: '<number>', f2_l: '<object>', f3_d: '<object>', f4_u: '<null>'}, 'Hgvb');
                                    db.deleteObjectStore('objectStore_6')
                                };
                            };
                            var objectStore_7;
                            objectStore_7 = db.createObjectStore('objectStore_7');
                            var add_7;
                            add_7 = objectStore_7.add({f0_x: '<object>', f1_e: '<string>'}, 'mCtMBcfE');
                            var index_21;
                            index_21 = objectStore_7.createIndex('index_21', 'test', {unique: false, multiEntry: true});
                        };
                    };
                };
                var objectStore_8;
                objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'wPy', autoIncrement: true});
                var objectStore_9;
                objectStore_9 = db.createObjectStore('objectStore_9', {keypath: 'VCrBOKWqIU.XUEaiyr.iAKwCAcHMyG.fFvVDvZvJ.dlCQFqgTkPwQ.WeERoLeGRMaX.YmDdEDwoDDyR.gLpO.TnLcPYOdJifa.DjwWWQ', autoIncrement: true});
                var clear_9;
                clear_9 = objectStore_8.clear();
                var put_17;
                put_17 = objectStore_8.put({f0_h: '<boolean>', f1_s: '<string>', f2_w: '<number>'}, 'dvGeHJxtXa');
            };
            var objectStore_10;
            objectStore_10 = db.createObjectStore('objectStore_10');
            var put_18;
            put_18 = objectStore_10.put({f0_g: '<object>', f1_w: '<boolean>', f2_c: '<boolean>', f3_l: '<number>', f4_o: '<string>'}, 'fgMaID');
            var get_5;
            try{
                KeyRange_20 = IDBKeyRange.bound('fgMaID', 'fgMaID', false, false);
                get_5 = objectStore_10.get(KeyRange_20);
            }
            catch (e){
                KeyRange_21 = IDBKeyRange.only('fgMaID');
                get_5 = objectStore_10.get(KeyRange_21);
            }

            var objectStore_11;
            objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'bLuildKWaPH'});
        };
    };
    var objectStore_12 = db.createObjectStore('objectStore_12');
    var add_8 = objectStore_12.add({f0_d: '<boolean>', f1_i: '<boolean>'}, 'pzoxoxltmp');
    var index_22 = objectStore_12.createIndex('index_22', 'test');
    var delete_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('pzoxoxltmp', 'pzoxoxltmp', false, true);
        delete_4 = objectStore_12.delete(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('pzoxoxltmp');
        delete_4 = objectStore_12.delete(KeyRange_23);
    }

    var index_23 = objectStore_12.createIndex('index_23', 'test', {unique: false});
    var delete_5;
    try{
        KeyRange_24 = IDBKeyRange.only('pzoxoxltmp');
        delete_5 = objectStore_12.delete(KeyRange_24);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('pzoxoxltmp');
        delete_5 = objectStore_12.delete(KeyRange_25);
    }

    var get_6;
    try{
        KeyRange_26 = IDBKeyRange.bound('pzoxoxltmp', 'pzoxoxltmp', false, true);
        get_6 = objectStore_12.get(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('pzoxoxltmp');
        get_6 = objectStore_12.get(KeyRange_27);
    }

    var index_24 = objectStore_12.createIndex('index_24', 'test');
    var add_9 = objectStore_12.add({f0_w: '<number>'}, 'lrK');
    var get_7;
    try{
        KeyRange_28 = IDBKeyRange.only('pzoxoxltmp');
        get_7 = objectStore_12.get(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('lrK');
        get_7 = objectStore_12.get(KeyRange_29);
    }

    var delete_6;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('lrK', true);
        delete_6 = objectStore_12.delete(KeyRange_30);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('lrK');
        delete_6 = objectStore_12.delete(KeyRange_31);
    }

    var add_10 = objectStore_12.add({f0_w: '<object>', f1_a: '<boolean>', f2_d: '<null>', f3_m: '<null>'}, 'xOIPDHe');
    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.bound('pzoxoxltmp', 'lrK', false, false);
        get_8 = objectStore_12.get(KeyRange_32);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('xOIPDHe');
        get_8 = objectStore_12.get(KeyRange_33);
    }

    var delete_7;
    try{
        KeyRange_34 = IDBKeyRange.only('lrK');
        delete_7 = objectStore_12.delete(KeyRange_34);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('lrK');
        delete_7 = objectStore_12.delete(KeyRange_35);
    }

    var index_25 = objectStore_12.createIndex('index_25', 'test', {multiEntry: true});
    var clear_10 = objectStore_12.clear();
    var objectStore_13 = db.createObjectStore('objectStore_13');
    clear_5.onsuccess = (event) => {
        db.deleteObjectStore('objectStore_13')
        var index_26;
        index_26 = objectStore_12.createIndex('index_26', 'test', {unique: false});
        var index_4;
        index_4 = objectStore_12.index('index_22');
        var count_2;
        count_2 = objectStore_12.count();
        var objectStore_14;
        objectStore_14 = db.createObjectStore('objectStore_14');
        clear_5.onsuccess = (event) => {
            var index_27;
            index_27 = objectStore_12.createIndex('index_27', 'test', {multiEntry: false});
            var index_28;
            index_28 = objectStore_14.createIndex('index_28', 'test', {multiEntry: false});
            var put_19;
            put_19 = objectStore_14.put({f0_k: '<object>', f1_c: '<object>', f2_u: '<boolean>', f3_a: '<boolean>', f4_z: '<boolean>', f5_n: '<array>', f6_x: '<object>', f7_n: '<boolean>'}, 'SwFRLGbYhOkq');
            add_8.onsuccess = (event) => {
                var clear_11;
                clear_11 = objectStore_14.clear();
                var index_29;
                index_29 = objectStore_12.createIndex('index_29', 'test', {unique: false, multiEntry: false});
                var put_20;
                put_20 = objectStore_14.put({f0_j: '<boolean>', f1_t: '<string>', f2_f: '<array>', f3_s: '<number>'}, 'PjZKWLMOViJh');
                db.deleteObjectStore('objectStore_12')
                var clear_12;
                clear_12 = objectStore_14.clear();
                add_9.onsuccess = (event) => {
                    var index_5;
                    index_5 = objectStore_14.index('index_28');
                    var index_30;
                    index_30 = objectStore_14.createIndex('index_30', 'test', {multiEntry: true});
                    put_2.onsuccess = (event) => {
                        var index_31;
                        index_31 = objectStore_14.createIndex('index_31', 'test', {unique: true, multiEntry: false});
                        db.deleteObjectStore('objectStore_14')
                        count_2.onsuccess = (event) => {
                            var objectStore_15;
                            objectStore_15 = db.createObjectStore('objectStore_15', {keypath: 'ZKfW', autoIncrement: true});
                            delete_4.onsuccess = (event) => {
                                var objectStore_16;
                                objectStore_16 = db.createObjectStore('objectStore_16');
                                delete_5.onsuccess = (event) => {
                                    var index_32;
                                    index_32 = objectStore_16.createIndex('index_32', 'test', {unique: false});
                                    clear_10.onsuccess = (event) => {
                                        var index_33;
                                        index_33 = objectStore_16.createIndex('index_33', 'test', {unique: false});
                                        var index_34;
                                        index_34 = objectStore_16.createIndex('index_34', 'test');
                                        var objectStore_17;
                                        objectStore_17 = db.createObjectStore('objectStore_17');
                                        put_19.onsuccess = (event) => {
                                            var objectStore_18;
                                            objectStore_18 = db.createObjectStore('objectStore_18', {keypath: 'kseIvkGydQlb'});
                                            var put_21;
                                            put_21 = objectStore_17.put({f0_o: '<boolean>', f1_j: '<string>', f2_y: '<object>', f3_t: '<string>', f4_a: '<object>', f5_t: '<array>', f6_l: '<array>', f7_b: '<array>'}, 'Yaxq');
                                            var add_11;
                                            add_11 = objectStore_17.add({f0_b: '<number>'}, 'InrPEbBEqm');
                                            var put_22;
                                            put_22 = objectStore_18.put({f0_h: '<boolean>', f1_m: '<null>', f2_l: '<string>', f3_d: '<string>', f4_d: '<number>'}, 'IuWBeLB');
                                            var count_3;
                                            count_3 = objectStore_17.count();
                                            var index_35;
                                            index_35 = objectStore_18.createIndex('index_35', 'test', {unique: false, multiEntry: false});
                                        };
                                        var clear_13;
                                        clear_13 = objectStore_17.clear();
                                        var objectStore_19;
                                        objectStore_19 = db.createObjectStore('objectStore_19', {autoIncrement: true});
                                        var put_23;
                                        put_23 = objectStore_19.put({f0_b: '<null>', f1_g: '<string>', f2_s: '<string>'}, 'wrGWCdSk');
                                        db.deleteObjectStore('objectStore_17')
                                        var put_24;
                                        put_24 = objectStore_16.put({f0_m: '<number>', f1_c: '<boolean>', f2_r: '<array>', f3_y: '<null>', f4_w: '<null>', f5_d: '<number>', f6_g: '<boolean>'}, 'RWcNpR');
                                    };
                                    db.deleteObjectStore('objectStore_15')
                                    var index_36;
                                    index_36 = objectStore_16.createIndex('index_36', 'test', {multiEntry: false});
                                    var add_12;
                                    add_12 = objectStore_16.add({f0_j: '<string>', f1_w: '<array>', f2_h: '<null>', f3_e: '<array>', f4_r: '<string>', f5_z: '<boolean>', f6_f: '<array>', f7_z: '<number>'}, 'Urn');
                                    var put_25;
                                    put_25 = objectStore_16.put({f0_w: '<object>', f1_z: '<string>'}, 'IeiWmhDX');
                                    var add_13;
                                    add_13 = objectStore_16.add({f0_c: '<array>', f1_e: '<number>', f2_d: '<null>', f3_r: '<object>', f4_c: '<object>', f5_p: '<object>'}, 'bOqWnzI');
                                };
                                var index_37;
                                index_37 = objectStore_16.createIndex('index_37', 'test');
                                db.deleteObjectStore('objectStore_16')
                                var objectStore_20;
                                objectStore_20 = db.createObjectStore('objectStore_20', {autoIncrement: true});
                            };
                        };
                    };
                };
            };
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_2575')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
