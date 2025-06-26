let db;
const openRequest = window.indexedDB.open('str_7807')
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: false});
    var index_0 = objectStore_0.createIndex('index_0', 'test');
    objectStore_0.deleteIndex('index_0')
    var index_1 = objectStore_0.createIndex('index_1', 'test', {unique: true});
    var put_0 = objectStore_0.put({f0_f: '<number>', f1_d: '<array>', f2_l: '<number>', f3_k: '<object>', f4_m: '<number>'}, 'qbFAvF');
    var getAll_0 = objectStore_0.getAll('qbFAvF', 2834658282);
    var index_0 = objectStore_0.index('index_1');
    var add_0 = objectStore_0.add({f0_w: '<number>', f1_f: '<array>'}, 'PAeHr');
    KeyRange_0 = IDBKeyRange.bound('qbFAvF', 'qbFAvF', false, false);
    var count_0 = objectStore_0.count(KeyRange_0);
    var getAll_1 = objectStore_0.getAll();
    var add_1 = objectStore_0.add({f0_n: '<array>', f1_f: '<number>', f2_l: '<boolean>', f3_u: '<boolean>', f4_a: '<boolean>', f5_p: '<array>', f6_f: '<boolean>', f7_l: '<object>', f8_w: '<null>'}, 'Juvo');
    var getAll_2 = objectStore_0.getAll();
    var put_1 = objectStore_0.put({f0_l: '<boolean>', f1_w: '<object>', f2_j: '<string>', f3_x: '<boolean>', f4_n: '<object>'}, 'SOt');
    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'LyYhFTxv.ZzMWlCKpsAH.mQRbNwuGJs.IxJgG.ocxFsOXvUTZ.oaM', autoIncrement: true});
    var objectStore_2 = db.createObjectStore('objectStore_2');
    db.deleteObjectStore('objectStore_2')
    KeyRange_1 = IDBKeyRange.bound('PAeHr', 'qbFAvF', false, false);
    var getAll_3 = objectStore_0.getAll(KeyRange_1, 2736702852);
    KeyRange_2 = IDBKeyRange.bound('SOt', 'Juvo', false, false);
    var delete_0 = objectStore_0.delete(KeyRange_2);
    var add_2 = objectStore_1.add({f0_y: '<array>', f1_q: '<null>'}, 'MyqjsadbA');
    var clear_0 = objectStore_1.clear();
    var getAllKeys_0 = objectStore_0.getAllKeys();
    getAllKeys_0.onsuccess = (event) => {
        var get_0;
        get_0 = objectStore_1.get('MyqjsadbA');
        delete_0.onsuccess = (event) => {
            var delete_1;
            delete_1 = objectStore_0.delete('qbFAvF');
            KeyRange_3 = IDBKeyRange.bound('SOt', 'SOt', true, false);
            var count_1;
            count_1 = objectStore_0.count(KeyRange_3);
            db.deleteObjectStore('objectStore_0')
            var put_2;
            put_2 = objectStore_1.put({f0_d: '<number>', f1_n: '<object>', f2_v: '<object>', f3_e: '<array>', f4_d: '<number>', f5_n: '<null>'}, 'zyftoAkrvn');
            var add_3;
            add_3 = objectStore_1.add({f0_o: '<number>', f1_o: '<object>'}, 'xbFZapIqXqYX');
            getAllKeys_0.onsuccess = (event) => {
                var index_2;
                index_2 = objectStore_1.createIndex('index_2', 'test', {unique: true, multiEntry: true});
                var index_1;
                index_1 = objectStore_1.index('index_2');
                db.deleteObjectStore('objectStore_1')
                var objectStore_3;
                objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'sluXwOAEW.FlDGeB'});
                add_3.onsuccess = (event) => {
                    var objectStore_4;
                    objectStore_4 = db.createObjectStore('objectStore_4', {autoIncrement: true});
                    var count_2;
                    count_2 = objectStore_3.count();
                    delete_0.onsuccess = (event) => {
                        var objectStore_5;
                        objectStore_5 = db.createObjectStore('objectStore_5', {autoIncrement: false});
                        var clear_1;
                        clear_1 = objectStore_3.clear();
                        var objectStore_6;
                        objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'bjXk.AWLPJltaO.sXoiwL.wPGQ.AlQcqMAArgE.BsHSvLGk.ZyqsObQ', autoIncrement: false});
                        db.deleteObjectStore('objectStore_6')
                        add_3.onsuccess = (event) => {
                            var clear_2;
                            clear_2 = objectStore_4.clear();
                            var objectStore_7;
                            objectStore_7 = db.createObjectStore('objectStore_7', {keypath: 'dWG'});
                            var index_3;
                            index_3 = objectStore_7.createIndex('index_3', 'test', {multiEntry: true});
                            db.deleteObjectStore('objectStore_3')
                            db.deleteObjectStore('objectStore_4')
                            put_2.onsuccess = (event) => {
                                var add_4;
                                add_4 = objectStore_7.add({f0_j: '<string>', f1_c: '<boolean>', f2_l: '<string>', f3_v: '<array>', f4_s: '<array>', f5_m: '<number>', f6_j: '<boolean>', f7_z: '<number>'}, 'KQvkazIlqi');
                                var objectStore_8;
                                objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'uSuR.pDXVDE'});
                                var count_3;
                                count_3 = objectStore_7.count();
                                put_1.onsuccess = (event) => {
                                    var index_4;
                                    index_4 = objectStore_7.createIndex('index_4', 'test', {unique: false, multiEntry: false});
                                    var index_5;
                                    index_5 = objectStore_8.createIndex('index_5', 'test', {unique: false, multiEntry: false});
                                    db.deleteObjectStore('objectStore_5')
                                    add_1.onsuccess = (event) => {
                                        var index_6;
                                        index_6 = objectStore_7.createIndex('index_6', 'test', {unique: true, multiEntry: false});
                                        var index_2;
                                        index_2 = objectStore_7.index('index_6');
                                        var clear_3;
                                        clear_3 = objectStore_7.clear();
                                        var getAllKeys_1;
                                        getAllKeys_1 = objectStore_8.getAllKeys();
                                        var delete_2;
                                        delete_2 = objectStore_7.delete('KQvkazIlqi');
                                        count_3.onsuccess = (event) => {
                                            var index_3;
                                            index_3 = objectStore_8.index('index_5');
                                            var index_7;
                                            index_7 = objectStore_7.createIndex('index_7', 'test', {unique: true});
                                            db.deleteObjectStore('objectStore_8')
                                            var index_8;
                                            index_8 = objectStore_7.createIndex('index_8', 'test');
                                            var put_3;
                                            put_3 = objectStore_7.put({f0_t: '<object>', f1_h: '<number>', f2_z: '<string>', f3_p: '<boolean>', f4_k: '<array>'}, 'SUgHd');
                                            objectStore_7.deleteIndex('index_4')
                                            var put_4;
                                            put_4 = objectStore_7.put({f0_w: '<null>', f1_x: '<object>', f2_y: '<number>', f3_n: '<boolean>', f4_o: '<null>', f5_b: '<string>', f6_w: '<number>'}, 'xfhfilARNZ');
                                            var index_4;
                                            index_4 = objectStore_7.index('index_3');
                                            var index_9;
                                            index_9 = objectStore_7.createIndex('index_9', 'test', {unique: false});
                                            var count_4;
                                            count_4 = objectStore_7.count();
                                        };
                                        var clear_4;
                                        clear_4 = objectStore_7.clear();
                                        var index_10;
                                        index_10 = objectStore_7.createIndex('index_10', 'test', {multiEntry: true});
                                        var index_5;
                                        index_5 = objectStore_7.index('index_10');
                                        var getAll_4;
                                        getAll_4 = objectStore_7.getAll('SUgHd');
                                        var put_5;
                                        put_5 = objectStore_7.put({f0_w: '<array>', f1_j: '<boolean>', f2_i: '<string>', f3_g: '<boolean>', f4_a: '<array>', f5_z: '<array>', f6_u: '<array>'}, 'bTkOEkNwmRu');
                                    };
                                    var clear_5;
                                    clear_5 = objectStore_7.clear();
                                    KeyRange_4 = IDBKeyRange.bound('KQvkazIlqi', 'KQvkazIlqi', false, false);
                                    var get_1;
                                    get_1 = objectStore_7.get(KeyRange_4);
                                    var add_5;
                                    add_5 = objectStore_7.add({f0_q: '<string>', f1_t: '<boolean>', f2_b: '<number>', f3_g: '<boolean>', f4_g: '<array>'}, 'oPmPxDz');
                                    var objectStore_9;
                                    objectStore_9 = db.createObjectStore('objectStore_9');
                                };
                                var index_11;
                                index_11 = objectStore_7.createIndex('index_11', 'test', {multiEntry: true});
                                var put_6;
                                put_6 = objectStore_7.put({f0_c: '<array>', f1_l: '<array>', f2_s: '<number>', f3_q: '<object>', f4_s: '<null>'}, 'JOlhRnXEN');
                                var delete_3;
                                delete_3 = objectStore_7.delete('bTkOEkNwmRu');
                                var getAllKeys_2;
                                getAllKeys_2 = objectStore_7.getAllKeys();
                            };
                            var put_7;
                            put_7 = objectStore_7.put({f0_d: '<array>', f1_a: '<array>', f2_r: '<boolean>', f3_o: '<object>', f4_y: '<array>', f5_r: '<array>', f6_x: '<object>', f7_l: '<number>', f8_y: '<string>'}, 'tMVyG');
                            var index_12;
                            index_12 = objectStore_7.createIndex('index_12', 'test', {multiEntry: false});
                            var index_13;
                            index_13 = objectStore_7.createIndex('index_13', 'test', {unique: false});
                            KeyRange_5 = IDBKeyRange.only('xfhfilARNZ');
                            var getAll_5;
                            getAll_5 = objectStore_7.getAll(KeyRange_5, 44562299);
                            KeyRange_6 = IDBKeyRange.bound('KQvkazIlqi', 'oPmPxDz', false, true);
                            var count_5;
                            count_5 = objectStore_7.count(KeyRange_6);
                        };
                    };
                };
                var objectStore_10;
                objectStore_10 = db.createObjectStore('objectStore_10', {keypath: 'OBawoAFfgXG', autoIncrement: false});
                var count_6;
                count_6 = objectStore_10.count();
                db.deleteObjectStore('objectStore_10')
            };
            var objectStore_11;
            objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'MefzZleAg'});
            var index_14;
            index_14 = objectStore_11.createIndex('index_14', 'test', {multiEntry: true});
            db.deleteObjectStore('objectStore_11')
        };
    };
};
const deleteRequest = indexedDB.deleteDatabase('str_7807')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};
