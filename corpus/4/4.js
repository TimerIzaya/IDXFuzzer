let db;
const openRequest = window.indexedDB.open('str_9503', '83')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_71');
    db.deleteObjectStore('objectStore_71')
    var objectStore_1 = db.createObjectStore('objectStore_72', {keypath: 'XocJr', autoIncrement: true});
    var add_0 = objectStore_1.add({f0_m: '<null>'}, 'dMPsDBJgVh');
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('dMPsDBJgVh', 'dMPsDBJgVh', true, true);
        delete_0 = objectStore_1.delete(KeyRange_0);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('dMPsDBJgVh');
        delete_0 = objectStore_1.delete(KeyRange_1);
    }

    var objectStore_2 = db.createObjectStore('objectStore_73', {autoIncrement: true});
    var clear_0 = objectStore_2.clear();
    db.deleteObjectStore('objectStore_72')
    var index_80 = objectStore_2.createIndex('index_80', 'test', {unique: false});
    var objectStore_3 = db.createObjectStore('objectStore_74', {keypath: 'bPwYGADaZ.vJIPOgMU.xPF.bCIDskuWv.uUMsCEvYN'});
    var add_1 = objectStore_3.add({f0_h: '<array>', f1_d: '<boolean>', f2_h: '<array>', f3_g: '<array>', f4_t: '<null>'}, 'vBjQrOoUCqTT');
    delete_0.onsuccess = (event) => {
        var delete_1;
        try{
            KeyRange_2 = IDBKeyRange.only('vBjQrOoUCqTT');
            delete_1 = objectStore_3.delete(KeyRange_2);
        }
        catch (e){
            KeyRange_3 = IDBKeyRange.only('vBjQrOoUCqTT');
            delete_1 = objectStore_3.delete(KeyRange_3);
        }

        delete_0.onsuccess = (event) => {
            var objectStore_4;
            objectStore_4 = db.createObjectStore('objectStore_75', {autoIncrement: true});
            var add_2;
            add_2 = objectStore_3.add({f0_f: '<null>'}, 'MHZLjaNz');
            delete_1.onsuccess = (event) => {
                var index_81;
                index_81 = objectStore_2.createIndex('index_81', 'test', {unique: true});
                var index_0;
                index_0 = objectStore_2.index('index_81');
                var put_0;
                put_0 = objectStore_3.put({f0_y: '<object>'}, 'fcl');
                var add_3;
                add_3 = objectStore_4.add({f0_y: '<array>', f1_c: '<object>', f2_f: '<array>', f3_s: '<object>', f4_y: '<object>'}, 'nFVOD');
                delete_1.onsuccess = (event) => {
                    var index_82;
                    index_82 = objectStore_4.createIndex('index_82', 'test', {unique: false, multiEntry: true});
                    var objectStore_5;
                    objectStore_5 = db.createObjectStore('objectStore_76', {autoIncrement: true});
                    var put_1;
                    put_1 = objectStore_4.put({f0_i: '<null>', f1_l: '<number>', f2_t: '<string>'}, 'CwIraM');
                    put_1.onsuccess = (event) => {
                        var index_83;
                        index_83 = objectStore_3.createIndex('index_83', 'test', {multiEntry: true});
                        var put_2;
                        put_2 = objectStore_5.put({f0_b: '<array>', f1_o: '<array>', f2_c: '<number>', f3_h: '<null>', f4_n: '<boolean>', f5_m: '<number>'}, 'NgXQSjrftha');
                        var add_4;
                        add_4 = objectStore_4.add({f0_e: '<object>', f1_c: '<object>', f2_a: '<null>', f3_q: '<null>', f4_v: '<number>', f5_d: '<boolean>'}, 'kMzR');
                        var index_84;
                        index_84 = objectStore_4.createIndex('index_84', 'test', {unique: true});
                        var add_5;
                        add_5 = objectStore_3.add({f0_m: '<number>', f1_b: '<object>', f2_i: '<number>', f3_a: '<string>', f4_a: '<number>', f5_l: '<array>', f6_o: '<null>', f7_g: '<object>'}, 'zWkSzZZC');
                        put_1.onsuccess = (event) => {
                            db.deleteObjectStore('objectStore_74')
                            delete_0.onsuccess = (event) => {
                                var index_85;
                                index_85 = objectStore_4.createIndex('index_85', 'test', {unique: true, multiEntry: true});
                                var objectStore_6;
                                objectStore_6 = db.createObjectStore('objectStore_77');
                                var add_6;
                                add_6 = objectStore_5.add({f0_h: '<array>', f1_z: '<string>', f2_g: '<array>', f3_v: '<boolean>', f4_m: '<array>', f5_r: '<object>', f6_d: '<object>'}, 'eWnM');
                                var index_1;
                                index_1 = objectStore_4.index('index_84');
                                add_4.onsuccess = (event) => {
                                    var objectStore_7;
                                    objectStore_7 = db.createObjectStore('objectStore_78', {keypath: 'xHxLaQJyr.NyjFP.PFktgdpsAFD.HKF.lIKzjyqNgF.hQGtTS.FSzWgwNL'});
                                    var add_7;
                                    add_7 = objectStore_2.add({f0_z: '<object>', f1_i: '<string>', f2_r: '<number>', f3_k: '<array>', f4_u: '<number>', f5_i: '<array>', f6_x: '<null>', f7_g: '<number>', f8_q: '<null>'}, 'LEncVRXGJ');
                                    var add_8;
                                    add_8 = objectStore_6.add({f0_z: '<object>', f1_t: '<null>', f2_y: '<number>', f3_u: '<object>', f4_s: '<object>', f5_a: '<boolean>', f6_n: '<boolean>', f7_m: '<boolean>'}, 'FhtaJdZhdran');
                                    var objectStore_8;
                                    objectStore_8 = db.createObjectStore('objectStore_79', {autoIncrement: true});
                                    var objectStore_9;
                                    objectStore_9 = db.createObjectStore('objectStore_80', {autoIncrement: false});
                                    delete_0.onsuccess = (event) => {
                                        var clear_1;
                                        clear_1 = objectStore_7.clear();
                                        var index_86;
                                        index_86 = objectStore_9.createIndex('index_86', 'test', {multiEntry: false});
                                        db.deleteObjectStore('objectStore_79')
                                        objectStore_4.deleteIndex('index_84')
                                        add_2.onsuccess = (event) => {
                                            var clear_2;
                                            clear_2 = objectStore_4.clear();
                                            db.deleteObjectStore('objectStore_75')
                                            var delete_2;
                                            try{
                                                KeyRange_4 = IDBKeyRange.bound('NgXQSjrftha', 'eWnM', false, true);
                                                delete_2 = objectStore_5.delete(KeyRange_4);
                                            }
                                            catch (e){
                                                KeyRange_5 = IDBKeyRange.only('NgXQSjrftha');
                                                delete_2 = objectStore_5.delete(KeyRange_5);
                                            }

                                            var put_3;
                                            put_3 = objectStore_2.put({f0_f: '<null>', f1_v: '<array>', f2_q: '<null>', f3_c: '<object>'}, 'MpXIUGpLH');
                                            var index_2;
                                            index_2 = objectStore_2.index('index_80');
                                            var put_4;
                                            put_4 = objectStore_2.put({f0_m: '<number>', f1_h: '<string>', f2_w: '<array>', f3_e: '<number>', f4_m: '<null>', f5_r: '<string>', f6_q: '<null>'}, 'Gcc');
                                            var objectStore_10;
                                            objectStore_10 = db.createObjectStore('objectStore_81');
                                        };
                                        var index_87;
                                        index_87 = objectStore_6.createIndex('index_87', 'test', {multiEntry: false});
                                        var put_5;
                                        put_5 = objectStore_6.put({f0_o: '<number>', f1_m: '<number>'}, 'ptzF');
                                        var get_0;
                                        try{
                                            KeyRange_6 = IDBKeyRange.lowerBound('NgXQSjrftha', true);
                                            get_0 = objectStore_5.get(KeyRange_6);
                                        }
                                        catch (e){
                                            KeyRange_7 = IDBKeyRange.only('NgXQSjrftha');
                                            get_0 = objectStore_5.get(KeyRange_7);
                                        }

                                        var clear_3;
                                        clear_3 = objectStore_9.clear();
                                    };
                                    var add_9;
                                    add_9 = objectStore_6.add({f0_w: '<array>', f1_q: '<array>', f2_c: '<array>', f3_d: '<object>', f4_r: '<boolean>', f5_k: '<boolean>', f6_x: '<number>', f7_u: '<array>', f8_w: '<boolean>'}, 'iKAnhSCj');
                                    var index_88;
                                    index_88 = objectStore_7.createIndex('index_88', 'test', {unique: false});
                                    var objectStore_11;
                                    objectStore_11 = db.createObjectStore('objectStore_82', {keypath: 'Ydo.BzKqI.nnjgkRTrgIR.eAovNxd.hfhyVvzBii.xKUgW'});
                                    var index_89;
                                    index_89 = objectStore_2.createIndex('index_89', 'test', {unique: false, multiEntry: true});
                                };
                                var put_6;
                                put_6 = objectStore_2.put({f0_q: '<string>', f1_o: '<number>', f2_c: '<array>', f3_z: '<boolean>', f4_a: '<null>', f5_c: '<string>', f6_i: '<null>'}, 'rbsOvWGPbCt');
                                var clear_4;
                                clear_4 = objectStore_5.clear();
                                var delete_3;
                                try{
                                    KeyRange_8 = IDBKeyRange.only('FhtaJdZhdran');
                                    delete_3 = objectStore_6.delete(KeyRange_8);
                                }
                                catch (e){
                                    KeyRange_9 = IDBKeyRange.only('iKAnhSCj');
                                    delete_3 = objectStore_6.delete(KeyRange_9);
                                }

                                var objectStore_12;
                                objectStore_12 = db.createObjectStore('objectStore_83');
                                var index_90;
                                index_90 = objectStore_6.createIndex('index_90', 'test', {unique: false});
                            };
                            var index_91;
                            index_91 = objectStore_5.createIndex('index_91', 'test', {unique: false, multiEntry: true});
                            var add_10;
                            add_10 = objectStore_5.add({f0_r: '<number>', f1_x: '<object>', f2_c: '<object>', f3_a: '<boolean>', f4_x: '<array>', f5_b: '<string>'}, 'vgmHiKDuVu');
                            var add_11;
                            add_11 = objectStore_2.add({f0_r: '<number>', f1_i: '<number>'}, 'NsVGKmIiSQ');
                            var clear_5;
                            clear_5 = objectStore_5.clear();
                            var index_92;
                            index_92 = objectStore_5.createIndex('index_92', 'test');
                        };
                        var put_7;
                        put_7 = objectStore_5.put({f0_v: '<object>', f1_o: '<null>', f2_w: '<number>', f3_y: '<number>', f4_v: '<number>', f5_s: '<object>', f6_w: '<object>'}, 'tuaXT');
                        var objectStore_13;
                        objectStore_13 = db.createObjectStore('objectStore_84');
                        var delete_4;
                        try{
                            KeyRange_10 = IDBKeyRange.bound('vgmHiKDuVu', 'vgmHiKDuVu', false, false);
                            delete_4 = objectStore_5.delete(KeyRange_10);
                        }
                        catch (e){
                            KeyRange_11 = IDBKeyRange.only('NgXQSjrftha');
                            delete_4 = objectStore_5.delete(KeyRange_11);
                        }

                        var index_3;
                        index_3 = objectStore_2.index('index_81');
                        objectStore_2.deleteIndex('index_81')
                    };
                    var objectStore_14;
                    objectStore_14 = db.createObjectStore('objectStore_85', {autoIncrement: false});
                    var objectStore_15;
                    objectStore_15 = db.createObjectStore('objectStore_86', {autoIncrement: false});
                    var put_8;
                    put_8 = objectStore_15.put({f0_k: '<string>', f1_b: '<array>', f2_v: '<array>', f3_n: '<array>', f4_c: '<number>', f5_i: '<array>'}, 'kqKbdkBWXA');
                };
                var put_9;
                put_9 = objectStore_2.put({f0_w: '<object>', f1_z: '<array>', f2_i: '<number>', f3_h: '<number>'}, 'cdOSmONIK');
                var get_1;
                try{
                    KeyRange_12 = IDBKeyRange.lowerBound('NsVGKmIiSQ', true);
                    get_1 = objectStore_2.get(KeyRange_12);
                }
                catch (e){
                    KeyRange_13 = IDBKeyRange.only('cdOSmONIK');
                    get_1 = objectStore_2.get(KeyRange_13);
                }

                var clear_6;
                clear_6 = objectStore_2.clear();
                var add_12;
                add_12 = objectStore_2.add({f0_g: '<number>', f1_w: '<null>', f2_b: '<array>', f3_s: '<number>', f4_i: '<boolean>', f5_k: '<null>', f6_t: '<null>', f7_p: '<number>'}, 'NYNIXzjUiUqK');
                db.deleteObjectStore('objectStore_73')
            };
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_5676')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
