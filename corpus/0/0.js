let db;
const openRequest = window.indexedDB.open('str_6358', 8164812487927315)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_0', {autoIncrement: false});
    var index_0 = objectStore_0.createIndex('index_0', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'ZFIqkjCxJL', autoIncrement: true});
    var put_0 = objectStore_0.put({f0_s: '<object>', f1_m: '<null>', f2_j: '<null>', f3_k: '<boolean>', f4_s: '<array>', f5_o: '<string>', f6_t: '<object>'}, 'tnLAA');
    var clear_0 = objectStore_0.clear();
    var put_1 = objectStore_1.put({f0_e: '<number>'}, 'MEIe');
    var objectStore_2 = db.createObjectStore('objectStore_2');
    db.deleteObjectStore('objectStore_1')
    var add_0 = objectStore_0.add({f0_c: '<null>', f1_m: '<boolean>', f2_z: '<null>'}, 'AummnlAYW');
    var clear_1 = objectStore_0.clear();
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('tnLAA', 'tnLAA', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_a: '<boolean>', f1_c: '<array>'}, 'AvTJYkSkAW');
    var put_2 = objectStore_0.put({f0_q: '<number>', f1_q: '<array>', f2_p: '<boolean>'}, 'ASecZWYjnI');
    var clear_2 = objectStore_0.clear();
    var put_3 = objectStore_2.put({f0_m: '<boolean>', f1_o: '<object>'}, 'CpVkN');
    var index_1 = objectStore_2.createIndex('index_1', 'test', {unique: false});
    var index_2 = objectStore_0.createIndex('index_2', 'test', {multiEntry: true});
    var count_1 = objectStore_0.count();
    objectStore_0.deleteIndex('index_0')
    var put_4 = objectStore_2.put({f0_y: '<null>', f1_u: '<number>', f2_c: '<string>', f3_s: '<array>', f4_i: '<number>', f5_x: '<array>', f6_q: '<null>', f7_w: '<boolean>', f8_b: '<boolean>'}, 'XQZJkSOg');
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.bound('AvTJYkSkAW', 'AummnlAYW', false, false);
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var getAll_0 = objectStore_0.getAll(2700587988);
    var put_5 = objectStore_2.put({f0_o: '<array>', f1_l: '<null>'}, 'NannJlTq');
    var objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'ptKFEWYJtbMf'});
    var put_6 = objectStore_3.put({f0_u: '<array>', f1_t: '<array>', f2_r: '<number>', f3_p: '<array>', f4_e: '<object>'}, 'rIgsR');
    objectStore_2.deleteIndex('index_1')
    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('XQZJkSOg', 'NannJlTq', true, false);
        count_2 = objectStore_2.count(KeyRange_4);
    }
    catch (e){
    }

    var clear_3 = objectStore_3.clear();
    var count_3 = objectStore_0.count();
    var count_4 = objectStore_3.count();
    var index_3 = objectStore_2.createIndex('index_3', 'test');
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.only('NannJlTq');
        get_1 = objectStore_2.get(KeyRange_6);
    }
    catch (e){
    }

    var add_2 = objectStore_2.add({f0_l: '<boolean>', f1_t: '<string>', f2_d: '<boolean>', f3_u: '<null>', f4_a: '<string>', f5_o: '<string>', f6_v: '<array>', f7_o: '<number>', f8_x: '<null>'}, 'pWUCzdBlzX');
    var index_4 = objectStore_3.createIndex('index_4', 'test', {unique: false, multiEntry: true});
    var index_5 = objectStore_2.createIndex('index_5', 'test', {unique: false});
    objectStore_0.deleteIndex('index_2')
    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('rIgsR', 'rIgsR', true, false);
        get_2 = objectStore_3.get(KeyRange_8);
    }
    catch (e){
    }

    var add_3 = objectStore_2.add({f0_b: '<boolean>', f1_p: '<boolean>', f2_w: '<boolean>', f3_i: '<number>', f4_u: '<boolean>', f5_b: '<object>', f6_m: '<string>', f7_l: '<object>', f8_g: '<array>', f9_x: '<null>'}, 'tSPQlinEI');
    var add_4 = objectStore_2.add({f0_l: '<object>', f1_x: '<string>', f2_t: '<boolean>', f3_i: '<string>'}, 'EtwqMXRMcoB');
    var delete_0;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('rIgsR', true);
        delete_0 = objectStore_3.delete(KeyRange_10);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_12 = IDBKeyRange.bound('rIgsR', 'rIgsR', true, true);
        get_3 = objectStore_3.get(KeyRange_12);
    }
    catch (e){
    }

    var add_5 = objectStore_2.add({f0_l: '<number>', f1_r: '<number>', f2_f: '<array>', f3_k: '<number>', f4_n: '<object>', f5_q: '<object>', f6_y: '<null>'}, 'kKxZxWmo');
    var getAll_1 = objectStore_3.getAll();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('AvTJYkSkAW', 'tnLAA', false, false);
        get_4 = objectStore_0.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.only('kKxZxWmo');
        get_5 = objectStore_2.get(KeyRange_16);
    }
    catch (e){
    }

    var add_6 = objectStore_3.add({f0_i: '<object>'}, 'INqqdZF');
    var clear_4 = objectStore_0.clear();
    var delete_1;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('AummnlAYW', false);
        delete_1 = objectStore_0.delete(KeyRange_18);
    }
    catch (e){
    }

    var index_6 = objectStore_0.createIndex('index_6', 'test', {multiEntry: false});
    var index_7 = objectStore_2.createIndex('index_7', 'test', {unique: false, multiEntry: false});
    var clear_5 = objectStore_3.clear();
    var count_5;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('EtwqMXRMcoB', true);
        count_5 = objectStore_2.count(KeyRange_20);
    }
    catch (e){
    }

    var count_6 = objectStore_2.count();
    var delete_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('rIgsR', false);
        delete_2 = objectStore_3.delete(KeyRange_22);
    }
    catch (e){
    }

    var objectStore_4 = db.createObjectStore('objectStore_4');
    var clear_6 = objectStore_0.clear();
    var index_8 = objectStore_2.createIndex('index_8', 'test', {unique: true, multiEntry: false});
    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.bound('EtwqMXRMcoB', 'kKxZxWmo', false, true);
        get_6 = objectStore_2.get(KeyRange_24);
    }
    catch (e){
    }

    var clear_7 = objectStore_4.clear();
    var clear_8 = objectStore_4.clear();
    var add_7 = objectStore_2.add({f0_k: '<boolean>', f1_g: '<array>', f2_p: '<object>', f3_e: '<number>', f4_i: '<string>', f5_g: '<boolean>', f6_p: '<null>', f7_r: '<array>'}, 'rvpDXWb');
    var put_7 = objectStore_2.put({f0_q: '<null>', f1_r: '<array>', f2_k: '<number>', f3_v: '<object>', f4_m: '<null>', f5_v: '<array>', f6_m: '<number>'}, 'AaiFE');
    var add_8 = objectStore_0.add({f0_x: '<array>', f1_x: '<object>', f2_f: '<number>', f3_z: '<number>', f4_u: '<null>', f5_v: '<boolean>', f6_e: '<array>', f7_i: '<array>'}, 'kWMJfjGxczIr');
    var put_8 = objectStore_0.put({f0_j: '<object>', f1_p: '<object>', f2_a: '<array>', f3_m: '<array>', f4_w: '<array>', f5_p: '<object>'}, 'DWOjCSp');
    var count_7 = objectStore_0.count();
    var put_9 = objectStore_3.put({f0_z: '<object>', f1_k: '<null>', f2_q: '<null>'}, 'kOsxwNDtkYhv');
    var add_9 = objectStore_3.add({f0_z: '<boolean>'}, 'OtrQy');
    var index_9 = objectStore_4.createIndex('index_9', 'test', {unique: true});
    var clear_9 = objectStore_0.clear();
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.only('pWUCzdBlzX');
        get_7 = objectStore_2.get(KeyRange_26);
    }
    catch (e){
    }

    var index_10 = objectStore_2.createIndex('index_10', 'test', {unique: false, multiEntry: true});
    var clear_10 = objectStore_4.clear();
    var clear_11 = objectStore_4.clear();
    var objectStore_5 = db.createObjectStore('objectStore_5');
    var clear_12 = objectStore_0.clear();
    var index_11 = objectStore_0.createIndex('index_11', 'test', {multiEntry: false});
    var add_10 = objectStore_2.add({f0_b: '<object>', f1_v: '<string>', f2_b: '<object>'}, 'EWtywMXS');
    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('tnLAA', true);
        get_8 = objectStore_0.get(KeyRange_28);
    }
    catch (e){
    }

    var put_10 = objectStore_0.put({f0_k: '<string>', f1_d: '<boolean>', f2_c: '<array>'}, 'iCiFIzGFLQKT');
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.only('rIgsR');
        get_9 = objectStore_3.get(KeyRange_30);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_6', {keypath: 'OqCXODIl', autoIncrement: true});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_0 = db.transaction(['objectStore_6'], 'readwrite', {durability:"strict"})
    var objectStore_6 = txn_0.objectStore('objectStore_6');
    var add_11 = objectStore_6.add({f0_d: '<object>', f1_j: '<object>', f2_j: '<number>', f3_z: '<number>', f4_h: '<object>', f5_o: '<null>', f6_c: '<null>'}, 'oOYriiDftf');
    var put_11 = objectStore_6.put({f0_e: '<null>', f1_s: '<number>', f2_b: '<object>', f3_f: '<object>', f4_v: '<boolean>', f5_h: '<null>', f6_v: '<number>', f7_e: '<null>', f8_o: '<null>'}, 'WeYkvH');
    var delete_3;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('WeYkvH', false);
        delete_3 = objectStore_6.delete(KeyRange_32);
    }
    catch (e){
    }

    var put_12 = objectStore_6.put({f0_o: '<number>', f1_b: '<string>', f2_g: '<array>', f3_h: '<array>'}, 'LZS');
    var count_8;
    try{
        KeyRange_34 = IDBKeyRange.only('WeYkvH');
        count_8 = objectStore_6.count(KeyRange_34);
    }
    catch (e){
    }

    var getAll_2 = objectStore_6.getAll(2515945117);
    var put_13 = objectStore_6.put({f0_r: '<array>', f1_d: '<number>', f2_b: '<number>', f3_a: '<array>'}, 'jApqMr');
    var getAll_3;
    try{
        KeyRange_36 = IDBKeyRange.bound('LZS', 'LZS', false, true);
        getAll_3 = objectStore_6.getAll(KeyRange_36, 1987405704);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('oOYriiDftf');
        getAll_3 = objectStore_6.getAll(KeyRange_37);
    }

    var clear_13 = objectStore_6.clear();
    var add_12 = objectStore_6.add({f0_v: '<number>', f1_s: '<number>', f2_s: '<null>', f3_q: '<null>', f4_e: '<string>'}, 'UnuQxc');
    var put_14 = objectStore_6.put({f0_p: '<object>', f1_h: '<object>', f2_b: '<array>', f3_p: '<null>', f4_c: '<array>', f5_v: '<string>', f6_y: '<null>', f7_y: '<object>'}, 'vjCbCeuQ');
    var put_15 = objectStore_6.put({f0_q: '<string>'}, 'gpQXbPqnaq');
    var get_10;
    try{
        KeyRange_38 = IDBKeyRange.only('jApqMr');
        get_10 = objectStore_6.get(KeyRange_38);
    }
    catch (e){
    }

    var clear_14 = objectStore_6.clear();
    var clear_15 = objectStore_6.clear();
    var put_16 = objectStore_6.put({f0_a: '<array>', f1_k: '<string>'}, 'MhocjeySOIW');
    var get_11;
    try{
        KeyRange_40 = IDBKeyRange.only('jApqMr');
        get_11 = objectStore_6.get(KeyRange_40);
    }
    catch (e){
    }

    var getAll_4 = objectStore_6.getAll();
    txn_0.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_0.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_0.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_1 = db.transaction(['objectStore_2', 'objectStore_3', 'objectStore_5', 'objectStore_0', 'objectStore_6'], 'readonly', {durability:"default"})
    var objectStore_0 = txn_1.objectStore('objectStore_0');
    var count_9;
    try{
        KeyRange_42 = IDBKeyRange.bound('tnLAA', 'tnLAA', false, false);
        count_9 = objectStore_0.count(KeyRange_42);
    }
    catch (e){
    }

    var getAll_5 = objectStore_0.getAll();
    var get_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('ASecZWYjnI', 'AummnlAYW', true, true);
        get_12 = objectStore_0.get(KeyRange_44);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_46 = IDBKeyRange.bound('AvTJYkSkAW', 'DWOjCSp', false, false);
        count_10 = objectStore_0.count(KeyRange_46);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_48 = IDBKeyRange.bound('DWOjCSp', 'iCiFIzGFLQKT', false, true);
        count_11 = objectStore_0.count(KeyRange_48);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_50 = IDBKeyRange.bound('DWOjCSp', 'iCiFIzGFLQKT', false, true);
        get_13 = objectStore_0.get(KeyRange_50);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_52 = IDBKeyRange.bound('DWOjCSp', 'tnLAA', false, false);
        getAll_6 = objectStore_0.getAll(KeyRange_52);
    }
    catch (e){
        KeyRange_53 = IDBKeyRange.only('AvTJYkSkAW');
        getAll_6 = objectStore_0.getAll(KeyRange_53);
    }

    var getAllKeys_0;
    try{
        KeyRange_54 = IDBKeyRange.bound('kWMJfjGxczIr', 'ASecZWYjnI', true, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('iCiFIzGFLQKT');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_55);
    }

    var get_14;
    try{
        KeyRange_56 = IDBKeyRange.bound('AvTJYkSkAW', 'tnLAA', false, false);
        get_14 = objectStore_0.get(KeyRange_56);
    }
    catch (e){
    }

    var count_12;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('DWOjCSp', false);
        count_12 = objectStore_0.count(KeyRange_58);
    }
    catch (e){
    }

    var count_13 = objectStore_0.count();
    var get_15;
    try{
        KeyRange_60 = IDBKeyRange.bound('AvTJYkSkAW', 'kWMJfjGxczIr', true, true);
        get_15 = objectStore_0.get(KeyRange_60);
    }
    catch (e){
    }

    var count_14 = objectStore_0.count();
    var count_15 = objectStore_0.count();
    var get_16;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('AummnlAYW', true);
        get_16 = objectStore_0.get(KeyRange_62);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('kWMJfjGxczIr', false);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_64);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('kWMJfjGxczIr');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_65);
    }

    var getAllKeys_2;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('kWMJfjGxczIr', false);
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_66, 3939261604);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('iCiFIzGFLQKT');
        getAllKeys_2 = objectStore_0.getAllKeys(KeyRange_67);
    }

    var get_17;
    try{
        KeyRange_68 = IDBKeyRange.only('DWOjCSp');
        get_17 = objectStore_0.get(KeyRange_68);
    }
    catch (e){
    }

    var count_16;
    try{
        KeyRange_70 = IDBKeyRange.bound('DWOjCSp', 'AummnlAYW', false, true);
        count_16 = objectStore_0.count(KeyRange_70);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_72 = IDBKeyRange.only('kWMJfjGxczIr');
        get_18 = objectStore_0.get(KeyRange_72);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_11');
    var index_1 = objectStore_0.index('index_6');
    txn_1.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_1.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_1.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_2 = db.transaction(['objectStore_2', 'objectStore_5', 'objectStore_4', 'objectStore_6'], 'readwrite', {durability:"relaxed"})
    var objectStore_5 = txn_2.objectStore('objectStore_5');
    var clear_16 = objectStore_5.clear();
    var add_13 = objectStore_5.add({f0_l: '<string>', f1_r: '<array>', f2_h: '<boolean>', f3_s: '<string>', f4_l: '<boolean>', f5_g: '<null>', f6_u: '<object>', f7_u: '<number>'}, 'khgcemRh');
    var put_17 = objectStore_5.put({f0_q: '<null>', f1_u: '<null>'}, 'dUjpXfCU');
    var getAllKeys_3 = objectStore_5.getAllKeys();
    var add_14 = objectStore_5.add({f0_l: '<object>', f1_q: '<boolean>', f2_y: '<number>', f3_o: '<number>', f4_q: '<null>', f5_f: '<string>', f6_n: '<null>', f7_b: '<boolean>'}, 'avdIYrsp');
    var delete_4;
    try{
        KeyRange_74 = IDBKeyRange.bound('dUjpXfCU', 'avdIYrsp', false, false);
        delete_4 = objectStore_5.delete(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_4;
    try{
        KeyRange_76 = IDBKeyRange.bound('dUjpXfCU', 'dUjpXfCU', true, false);
        getAllKeys_4 = objectStore_5.getAllKeys(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('khgcemRh');
        getAllKeys_4 = objectStore_5.getAllKeys(KeyRange_77);
    }

    var get_19;
    try{
        KeyRange_78 = IDBKeyRange.only('khgcemRh');
        get_19 = objectStore_5.get(KeyRange_78);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_80 = IDBKeyRange.only('avdIYrsp');
        get_20 = objectStore_5.get(KeyRange_80);
    }
    catch (e){
    }

    var clear_17 = objectStore_5.clear();
    var put_18 = objectStore_5.put({f0_c: '<boolean>', f1_j: '<number>', f2_c: '<null>', f3_h: '<object>', f4_k: '<array>'}, 'hveCgB');
    var clear_18 = objectStore_5.clear();
    var clear_19 = objectStore_5.clear();
    var clear_20 = objectStore_5.clear();
    var add_15 = objectStore_5.add({f0_c: '<object>', f1_x: '<null>', f2_o: '<number>'}, 'GsG');
    var add_16 = objectStore_5.add({f0_e: '<string>', f1_s: '<array>', f2_a: '<boolean>'}, 'MaW');
    var put_19 = objectStore_5.put({f0_n: '<null>', f1_g: '<null>', f2_g: '<null>', f3_q: '<object>', f4_h: '<boolean>'}, 'rJRHamZcIgr');
    txn_2.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_2.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_2.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3 = db.transaction(['objectStore_0', 'objectStore_3'], 'readwrite', {durability:"relaxed"})
    var objectStore_3 = txn_3.objectStore('objectStore_3');
    var count_17;
    try{
        KeyRange_82 = IDBKeyRange.only('kOsxwNDtkYhv');
        count_17 = objectStore_3.count(KeyRange_82);
    }
    catch (e){
    }

    var clear_21 = objectStore_3.clear();
    var get_21;
    try{
        KeyRange_84 = IDBKeyRange.bound('kOsxwNDtkYhv', 'rIgsR', true, false);
        get_21 = objectStore_3.get(KeyRange_84);
    }
    catch (e){
    }

    var count_18;
    try{
        KeyRange_86 = IDBKeyRange.only('INqqdZF');
        count_18 = objectStore_3.count(KeyRange_86);
    }
    catch (e){
    }

    var clear_22 = objectStore_3.clear();
    var index_2 = objectStore_3.index('index_4');
    var getAllKeys_5 = objectStore_3.getAllKeys();
    var add_17 = objectStore_3.add({f0_x: '<array>', f1_o: '<number>', f2_v: '<object>', f3_s: '<array>', f4_u: '<array>', f5_k: '<boolean>'}, 'vTEElNCEzx');
    var add_18 = objectStore_3.add({f0_h: '<object>', f1_q: '<boolean>'}, 'ELPSY');
    var get_22;
    try{
        KeyRange_88 = IDBKeyRange.lowerBound('OtrQy', true);
        get_22 = objectStore_3.get(KeyRange_88);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_90 = IDBKeyRange.bound('kOsxwNDtkYhv', 'OtrQy', true, false);
        getAll_7 = objectStore_3.getAll(KeyRange_90);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('OtrQy');
        getAll_7 = objectStore_3.getAll(KeyRange_91);
    }

    var clear_23 = objectStore_3.clear();
    var get_23;
    try{
        KeyRange_92 = IDBKeyRange.lowerBound('ELPSY', false);
        get_23 = objectStore_3.get(KeyRange_92);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('INqqdZF', true);
        get_24 = objectStore_3.get(KeyRange_94);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_3.getAllKeys();
    var add_19 = objectStore_3.add({f0_s: '<number>', f1_f: '<object>', f2_d: '<array>', f3_l: '<number>', f4_q: '<string>', f5_a: '<number>', f6_y: '<boolean>'}, 'ChtMiWp');
    var getAll_8 = objectStore_3.getAll();
    var get_25;
    try{
        KeyRange_96 = IDBKeyRange.bound('OtrQy', 'kOsxwNDtkYhv', true, false);
        get_25 = objectStore_3.get(KeyRange_96);
    }
    catch (e){
    }

    var add_20 = objectStore_3.add({f0_e: '<number>', f1_m: '<boolean>', f2_l: '<boolean>'}, 'fcM');
    var add_21 = objectStore_3.add({f0_h: '<array>'}, 'zANchPGEMX');
    var getAll_9 = objectStore_3.getAll();
    txn_3.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_4 = db.transaction(['objectStore_0'], 'readonly', {durability:"default"})
    var objectStore_0 = txn_4.objectStore('objectStore_0');
    var get_26;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('ASecZWYjnI', true);
        get_26 = objectStore_0.get(KeyRange_98);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_100 = IDBKeyRange.bound('ASecZWYjnI', 'AummnlAYW', true, false);
        get_27 = objectStore_0.get(KeyRange_100);
    }
    catch (e){
    }

    var get_28;
    try{
        KeyRange_102 = IDBKeyRange.lowerBound('AummnlAYW', true);
        get_28 = objectStore_0.get(KeyRange_102);
    }
    catch (e){
    }

    var count_19;
    try{
        KeyRange_104 = IDBKeyRange.bound('iCiFIzGFLQKT', 'kWMJfjGxczIr', false, true);
        count_19 = objectStore_0.count(KeyRange_104);
    }
    catch (e){
    }

    var getAll_10 = objectStore_0.getAll(2503541432);
    var get_29;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('ASecZWYjnI', true);
        get_29 = objectStore_0.get(KeyRange_106);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_108 = IDBKeyRange.bound('AvTJYkSkAW', 'AvTJYkSkAW', true, false);
        get_30 = objectStore_0.get(KeyRange_108);
    }
    catch (e){
    }

    var count_20;
    try{
        KeyRange_110 = IDBKeyRange.lowerBound('AummnlAYW', true);
        count_20 = objectStore_0.count(KeyRange_110);
    }
    catch (e){
    }

    var getAllKeys_7 = objectStore_0.getAllKeys();
    var getAll_11;
    try{
        KeyRange_112 = IDBKeyRange.bound('iCiFIzGFLQKT', 'ASecZWYjnI', true, true);
        getAll_11 = objectStore_0.getAll(KeyRange_112, 1880862123);
    }
    catch (e){
        KeyRange_113 = IDBKeyRange.only('AvTJYkSkAW');
        getAll_11 = objectStore_0.getAll(KeyRange_113);
    }

    var getAll_12;
    try{
        KeyRange_114 = IDBKeyRange.bound('ASecZWYjnI', 'AummnlAYW', true, true);
        getAll_12 = objectStore_0.getAll(KeyRange_114, 3976148017);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('AvTJYkSkAW');
        getAll_12 = objectStore_0.getAll(KeyRange_115);
    }

    var count_21;
    try{
        KeyRange_116 = IDBKeyRange.bound('DWOjCSp', 'ASecZWYjnI', true, false);
        count_21 = objectStore_0.count(KeyRange_116);
    }
    catch (e){
    }

    var count_22 = objectStore_0.count();
    var count_23;
    try{
        KeyRange_118 = IDBKeyRange.lowerBound('AummnlAYW', false);
        count_23 = objectStore_0.count(KeyRange_118);
    }
    catch (e){
    }

    var get_31;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('iCiFIzGFLQKT', false);
        get_31 = objectStore_0.get(KeyRange_120);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_122 = IDBKeyRange.bound('iCiFIzGFLQKT', 'ASecZWYjnI', true, false);
        get_32 = objectStore_0.get(KeyRange_122);
    }
    catch (e){
    }

    var getAll_13 = objectStore_0.getAll();
    var count_24;
    try{
        KeyRange_124 = IDBKeyRange.only('DWOjCSp');
        count_24 = objectStore_0.count(KeyRange_124);
    }
    catch (e){
    }

    var get_33;
    try{
        KeyRange_126 = IDBKeyRange.lowerBound('AvTJYkSkAW', true);
        get_33 = objectStore_0.get(KeyRange_126);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_128 = IDBKeyRange.lowerBound('ASecZWYjnI', true);
        count_25 = objectStore_0.count(KeyRange_128);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_130 = IDBKeyRange.only('ASecZWYjnI');
        get_34 = objectStore_0.get(KeyRange_130);
    }
    catch (e){
    }

    var get_35;
    try{
        KeyRange_132 = IDBKeyRange.lowerBound('DWOjCSp', false);
        get_35 = objectStore_0.get(KeyRange_132);
    }
    catch (e){
    }

    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5 = db.transaction(['objectStore_6'], 'readwrite', {durability:"default"})
    var objectStore_6 = txn_5.objectStore('objectStore_6');
    var add_22 = objectStore_6.add({f0_m: '<number>', f1_k: '<array>', f2_v: '<array>'}, 'jCC');
    var getAll_14;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('MhocjeySOIW', false);
        getAll_14 = objectStore_6.getAll(KeyRange_134);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('jApqMr');
        getAll_14 = objectStore_6.getAll(KeyRange_135);
    }

    var add_23 = objectStore_6.add({f0_h: '<object>', f1_y: '<object>', f2_v: '<array>', f3_n: '<string>', f4_r: '<object>', f5_t: '<object>', f6_s: '<object>', f7_n: '<object>', f8_k: '<boolean>'}, 'aBV');
    var add_24 = objectStore_6.add({f0_y: '<array>', f1_k: '<boolean>', f2_u: '<boolean>', f3_v: '<null>', f4_v: '<object>'}, 'swMaxTPpQsMf');
    var getAllKeys_8;
    try{
        KeyRange_136 = IDBKeyRange.bound('jCC', 'oOYriiDftf', false, false);
        getAllKeys_8 = objectStore_6.getAllKeys(KeyRange_136, 3656088191);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('gpQXbPqnaq');
        getAllKeys_8 = objectStore_6.getAllKeys(KeyRange_137);
    }

    var add_25 = objectStore_6.add({f0_e: '<null>', f1_a: '<number>', f2_r: '<boolean>', f3_f: '<null>', f4_k: '<string>', f5_l: '<array>'}, 'RpMe');
    var clear_24 = objectStore_6.clear();
    var getAll_15;
    try{
        KeyRange_138 = IDBKeyRange.lowerBound('WeYkvH', false);
        getAll_15 = objectStore_6.getAll(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('gpQXbPqnaq');
        getAll_15 = objectStore_6.getAll(KeyRange_139);
    }

    var put_20 = objectStore_6.put({f0_g: '<string>', f1_g: '<boolean>', f2_b: '<number>', f3_p: '<boolean>', f4_d: '<array>', f5_r: '<string>', f6_q: '<object>', f7_f: '<string>', f8_k: '<null>', f9_e: '<null>'}, 'nghCVaRjNso');
    var count_26 = objectStore_6.count();
    var add_26 = objectStore_6.add({f0_o: '<object>', f1_k: '<boolean>', f2_q: '<array>', f3_k: '<number>', f4_x: '<array>'}, 'jtXvyLhlI');
    var clear_25 = objectStore_6.clear();
    var put_21 = objectStore_6.put({f0_q: '<number>', f1_d: '<object>', f2_s: '<null>', f3_i: '<null>', f4_l: '<object>'}, 'MWaGzjLA');
    var add_27 = objectStore_6.add({f0_h: '<number>', f1_y: '<array>', f2_q: '<number>'}, 'JcJI');
    var delete_5;
    try{
        KeyRange_140 = IDBKeyRange.bound('gpQXbPqnaq', 'nghCVaRjNso', true, true);
        delete_5 = objectStore_6.delete(KeyRange_140);
    }
    catch (e){
    }

    var clear_26 = objectStore_6.clear();
    var add_28 = objectStore_6.add({f0_u: '<array>', f1_m: '<null>', f2_o: '<number>', f3_a: '<number>', f4_s: '<number>'}, 'CudgrSud');
    var put_22 = objectStore_6.put({f0_g: '<string>', f1_d: '<number>', f2_m: '<object>', f3_m: '<number>', f4_u: '<object>', f5_w: '<object>', f6_d: '<string>'}, 'VJndezUNWHJ');
    var clear_27 = objectStore_6.clear();
    txn_5.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6 = db.transaction(['objectStore_5'], 'readonly', {durability:"default"})
    var objectStore_5 = txn_6.objectStore('objectStore_5');
    var get_36;
    try{
        KeyRange_142 = IDBKeyRange.bound('khgcemRh', 'hveCgB', true, false);
        get_36 = objectStore_5.get(KeyRange_142);
    }
    catch (e){
    }

    var get_37;
    try{
        KeyRange_144 = IDBKeyRange.bound('dUjpXfCU', 'avdIYrsp', false, true);
        get_37 = objectStore_5.get(KeyRange_144);
    }
    catch (e){
    }

    var count_27 = objectStore_5.count();
    var count_28;
    try{
        KeyRange_146 = IDBKeyRange.bound('GsG', 'GsG', false, true);
        count_28 = objectStore_5.count(KeyRange_146);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_148 = IDBKeyRange.bound('khgcemRh', 'hveCgB', true, true);
        count_29 = objectStore_5.count(KeyRange_148);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_5.getAllKeys();
    var get_38;
    try{
        KeyRange_150 = IDBKeyRange.bound('dUjpXfCU', 'dUjpXfCU', true, false);
        get_38 = objectStore_5.get(KeyRange_150);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_152 = IDBKeyRange.lowerBound('GsG', true);
        count_30 = objectStore_5.count(KeyRange_152);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_154 = IDBKeyRange.bound('avdIYrsp', 'GsG', false, false);
        getAllKeys_10 = objectStore_5.getAllKeys(KeyRange_154, 2491104293);
    }
    catch (e){
        KeyRange_155 = IDBKeyRange.only('MaW');
        getAllKeys_10 = objectStore_5.getAllKeys(KeyRange_155);
    }

    var get_39;
    try{
        KeyRange_156 = IDBKeyRange.bound('rJRHamZcIgr', 'MaW', true, false);
        get_39 = objectStore_5.get(KeyRange_156);
    }
    catch (e){
    }

    var count_31;
    try{
        KeyRange_158 = IDBKeyRange.only('GsG');
        count_31 = objectStore_5.count(KeyRange_158);
    }
    catch (e){
    }

    var count_32 = objectStore_5.count();
    var count_33;
    try{
        KeyRange_160 = IDBKeyRange.bound('hveCgB', 'rJRHamZcIgr', true, false);
        count_33 = objectStore_5.count(KeyRange_160);
    }
    catch (e){
    }

    var get_40;
    try{
        KeyRange_162 = IDBKeyRange.bound('hveCgB', 'hveCgB', false, false);
        get_40 = objectStore_5.get(KeyRange_162);
    }
    catch (e){
    }

    var get_41;
    try{
        KeyRange_164 = IDBKeyRange.bound('rJRHamZcIgr', 'rJRHamZcIgr', false, true);
        get_41 = objectStore_5.get(KeyRange_164);
    }
    catch (e){
    }

    var count_34 = objectStore_5.count();
    var getAll_16 = objectStore_5.getAll(678219399);
    txn_6.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_7 = db.transaction(['objectStore_4', 'objectStore_6'], 'readwrite', {durability:"relaxed"})
    var objectStore_4 = txn_7.objectStore('objectStore_4');
    var index_3 = objectStore_4.index('index_9');
    var put_23 = objectStore_4.put({f0_p: '<object>', f1_b: '<string>', f2_x: '<object>', f3_r: '<boolean>', f4_h: '<boolean>', f5_q: '<object>', f6_o: '<object>', f7_a: '<number>'}, 'HJzj');
    var getAllKeys_11;
    try{
        KeyRange_166 = IDBKeyRange.bound('HJzj', 'HJzj', false, true);
        getAllKeys_11 = objectStore_4.getAllKeys(KeyRange_166, 2527773633);
    }
    catch (e){
        KeyRange_167 = IDBKeyRange.only('HJzj');
        getAllKeys_11 = objectStore_4.getAllKeys(KeyRange_167);
    }

    var count_35 = objectStore_4.count();
    var count_36 = objectStore_4.count();
    var get_42;
    try{
        KeyRange_168 = IDBKeyRange.bound('HJzj', 'HJzj', true, false);
        get_42 = objectStore_4.get(KeyRange_168);
    }
    catch (e){
    }

    var put_24 = objectStore_4.put({f0_o: '<object>', f1_k: '<object>', f2_w: '<number>', f3_n: '<number>', f4_t: '<null>', f5_k: '<string>', f6_n: '<string>', f7_z: '<boolean>', f8_v: '<null>', f9_k: '<string>'}, 'OOFloffq');
    var put_25 = objectStore_4.put({f0_u: '<object>', f1_z: '<array>', f2_o: '<array>'}, 'fgRVgtF');
    var get_43;
    try{
        KeyRange_170 = IDBKeyRange.bound('HJzj', 'OOFloffq', false, false);
        get_43 = objectStore_4.get(KeyRange_170);
    }
    catch (e){
    }

    var get_44;
    try{
        KeyRange_172 = IDBKeyRange.only('HJzj');
        get_44 = objectStore_4.get(KeyRange_172);
    }
    catch (e){
    }

    var getAll_17;
    try{
        KeyRange_174 = IDBKeyRange.only('HJzj');
        getAll_17 = objectStore_4.getAll(KeyRange_174, 522166495);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('fgRVgtF');
        getAll_17 = objectStore_4.getAll(KeyRange_175);
    }

    var count_37;
    try{
        KeyRange_176 = IDBKeyRange.lowerBound('HJzj', false);
        count_37 = objectStore_4.count(KeyRange_176);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_4.getAllKeys();
    var add_29 = objectStore_4.add({f0_o: '<string>', f1_q: '<null>', f2_x: '<boolean>', f3_q: '<string>', f4_z: '<string>', f5_d: '<number>', f6_p: '<string>', f7_l: '<string>', f8_p: '<object>'}, 'mfaYQNnQk');
    txn_7.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_7.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_7.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_8 = db.transaction(['objectStore_2'], 'readonly', {durability:"strict"})
    var objectStore_2 = txn_8.objectStore('objectStore_2');
    var get_45;
    try{
        KeyRange_178 = IDBKeyRange.bound('AaiFE', 'pWUCzdBlzX', true, true);
        get_45 = objectStore_2.get(KeyRange_178);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_180 = IDBKeyRange.only('NannJlTq');
        get_46 = objectStore_2.get(KeyRange_180);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_182 = IDBKeyRange.lowerBound('XQZJkSOg', false);
        get_47 = objectStore_2.get(KeyRange_182);
    }
    catch (e){
    }

    var count_38;
    try{
        KeyRange_184 = IDBKeyRange.lowerBound('rvpDXWb', true);
        count_38 = objectStore_2.count(KeyRange_184);
    }
    catch (e){
    }

    var get_48;
    try{
        KeyRange_186 = IDBKeyRange.bound('AaiFE', 'kKxZxWmo', true, true);
        get_48 = objectStore_2.get(KeyRange_186);
    }
    catch (e){
    }

    var count_39;
    try{
        KeyRange_188 = IDBKeyRange.bound('XQZJkSOg', 'rvpDXWb', true, false);
        count_39 = objectStore_2.count(KeyRange_188);
    }
    catch (e){
    }

    var getAll_18 = objectStore_2.getAll(3290849537);
    var get_49;
    try{
        KeyRange_190 = IDBKeyRange.bound('kKxZxWmo', 'EWtywMXS', false, false);
        get_49 = objectStore_2.get(KeyRange_190);
    }
    catch (e){
    }

    var count_40 = objectStore_2.count();
    var get_50;
    try{
        KeyRange_192 = IDBKeyRange.bound('rvpDXWb', 'pWUCzdBlzX', true, true);
        get_50 = objectStore_2.get(KeyRange_192);
    }
    catch (e){
    }

    var getAllKeys_13 = objectStore_2.getAllKeys();
    var get_51;
    try{
        KeyRange_194 = IDBKeyRange.bound('EtwqMXRMcoB', 'AaiFE', true, true);
        get_51 = objectStore_2.get(KeyRange_194);
    }
    catch (e){
    }

    var getAll_19;
    try{
        KeyRange_196 = IDBKeyRange.lowerBound('EtwqMXRMcoB', true);
        getAll_19 = objectStore_2.getAll(KeyRange_196);
    }
    catch (e){
        KeyRange_197 = IDBKeyRange.only('EWtywMXS');
        getAll_19 = objectStore_2.getAll(KeyRange_197);
    }

    var get_52;
    try{
        KeyRange_198 = IDBKeyRange.only('tSPQlinEI');
        get_52 = objectStore_2.get(KeyRange_198);
    }
    catch (e){
    }

    var get_53;
    try{
        KeyRange_200 = IDBKeyRange.only('XQZJkSOg');
        get_53 = objectStore_2.get(KeyRange_200);
    }
    catch (e){
    }

    var get_54;
    try{
        KeyRange_202 = IDBKeyRange.bound('XQZJkSOg', 'CpVkN', true, false);
        get_54 = objectStore_2.get(KeyRange_202);
    }
    catch (e){
    }

    var get_55;
    try{
        KeyRange_204 = IDBKeyRange.only('EWtywMXS');
        get_55 = objectStore_2.get(KeyRange_204);
    }
    catch (e){
    }

    var count_41;
    try{
        KeyRange_206 = IDBKeyRange.lowerBound('kKxZxWmo', true);
        count_41 = objectStore_2.count(KeyRange_206);
    }
    catch (e){
    }

    var get_56;
    try{
        KeyRange_208 = IDBKeyRange.bound('kKxZxWmo', 'CpVkN', true, true);
        get_56 = objectStore_2.get(KeyRange_208);
    }
    catch (e){
    }

    var getAllKeys_14;
    try{
        KeyRange_210 = IDBKeyRange.only('CpVkN');
        getAllKeys_14 = objectStore_2.getAllKeys(KeyRange_210);
    }
    catch (e){
        KeyRange_211 = IDBKeyRange.only('AaiFE');
        getAllKeys_14 = objectStore_2.getAllKeys(KeyRange_211);
    }

    var getAll_20;
    try{
        KeyRange_212 = IDBKeyRange.bound('pWUCzdBlzX', 'pWUCzdBlzX', true, false);
        getAll_20 = objectStore_2.getAll(KeyRange_212, 47096157);
    }
    catch (e){
        KeyRange_213 = IDBKeyRange.only('XQZJkSOg');
        getAll_20 = objectStore_2.getAll(KeyRange_213);
    }

    var count_42 = objectStore_2.count();
    txn_8.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_8.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_8.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_9 = db.transaction(['objectStore_0', 'objectStore_3'], 'readonly', {durability:"relaxed"})
    var objectStore_3 = txn_9.objectStore('objectStore_3');
    var get_57;
    try{
        KeyRange_214 = IDBKeyRange.only('vTEElNCEzx');
        get_57 = objectStore_3.get(KeyRange_214);
    }
    catch (e){
    }

    var count_43 = objectStore_3.count();
    var get_58;
    try{
        KeyRange_216 = IDBKeyRange.only('rIgsR');
        get_58 = objectStore_3.get(KeyRange_216);
    }
    catch (e){
    }

    var count_44;
    try{
        KeyRange_218 = IDBKeyRange.bound('vTEElNCEzx', 'INqqdZF', true, false);
        count_44 = objectStore_3.count(KeyRange_218);
    }
    catch (e){
    }

    var index_4 = objectStore_3.index('index_4');
    var count_45 = objectStore_3.count();
    var index_5 = objectStore_3.index('index_4');
    var getAllKeys_15;
    try{
        KeyRange_220 = IDBKeyRange.lowerBound('vTEElNCEzx', true);
        getAllKeys_15 = objectStore_3.getAllKeys(KeyRange_220, 1291068854);
    }
    catch (e){
        KeyRange_221 = IDBKeyRange.only('fcM');
        getAllKeys_15 = objectStore_3.getAllKeys(KeyRange_221);
    }

    var get_59;
    try{
        KeyRange_222 = IDBKeyRange.only('INqqdZF');
        get_59 = objectStore_3.get(KeyRange_222);
    }
    catch (e){
    }

    var count_46 = objectStore_3.count();
    var getAllKeys_16 = objectStore_3.getAllKeys(3174226341);
    var count_47;
    try{
        KeyRange_224 = IDBKeyRange.bound('rIgsR', 'vTEElNCEzx', true, false);
        count_47 = objectStore_3.count(KeyRange_224);
    }
    catch (e){
    }

    var count_48 = objectStore_3.count();
    var getAll_21 = objectStore_3.getAll(3685357276);
    var count_49;
    try{
        KeyRange_226 = IDBKeyRange.only('fcM');
        count_49 = objectStore_3.count(KeyRange_226);
    }
    catch (e){
    }

    var getAll_22;
    try{
        KeyRange_228 = IDBKeyRange.bound('INqqdZF', 'fcM', false, true);
        getAll_22 = objectStore_3.getAll(KeyRange_228, 3627369001);
    }
    catch (e){
        KeyRange_229 = IDBKeyRange.only('fcM');
        getAll_22 = objectStore_3.getAll(KeyRange_229);
    }

    txn_9.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_9.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_9.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_6358')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};