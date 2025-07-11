let db;
const openRequest = window.indexedDB.open('str_9847', 4766830269258072)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_88', {keypath: 'kKDxKSWZ'});
    var index_69 = objectStore_0.createIndex('index_69', 'test', {unique: true});
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_d: '<boolean>', f1_h: '<number>', f2_l: '<boolean>', f3_n: '<object>'}, 'Izp');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('Izp', 'Izp', false, false);
        count_0 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var index_0 = objectStore_0.index('index_69');
    var count_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('Izp', 'Izp', true, true);
        count_1 = objectStore_0.count(KeyRange_2);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('Izp', true);
        count_2 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var index_70 = objectStore_0.createIndex('index_70', 'test', {unique: true});
    var get_0;
    try{
        KeyRange_6 = IDBKeyRange.only('Izp');
        get_0 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_2 = objectStore_0.clear();
    var count_3 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_89', {autoIncrement: false});
    var getAllKeys_0;
    try{
        KeyRange_8 = IDBKeyRange.bound('Izp', 'Izp', false, false);
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('Izp');
        getAllKeys_0 = objectStore_0.getAllKeys(KeyRange_9);
    }

    var put_1 = objectStore_0.put({f0_a: '<boolean>', f1_h: '<string>', f2_t: '<object>', f3_q: '<object>', f4_l: '<string>', f5_m: '<string>', f6_s: '<string>', f7_c: '<object>', f8_r: '<object>'}, 'kIXJVISHzCP');
    var put_2 = objectStore_1.put({f0_j: '<string>', f1_n: '<number>', f2_m: '<string>', f3_i: '<number>'}, 'TPsdXHCDYP');
    var index_71 = objectStore_1.createIndex('index_71', 'test', {unique: false, multiEntry: true});
    var count_4 = objectStore_1.count();
    var count_5 = objectStore_0.count();
    var add_0 = objectStore_0.add({f0_a: '<object>', f1_a: '<number>', f2_v: '<number>', f3_h: '<string>', f4_n: '<number>', f5_s: '<null>'}, 'ZbgKFttXxGKL');
    var clear_3 = objectStore_1.clear();
    var add_1 = objectStore_1.add({f0_n: '<string>'}, 'UhK');
    var clear_4 = objectStore_1.clear();
    var put_3 = objectStore_0.put({f0_o: '<object>', f1_d: '<null>', f2_q: '<boolean>', f3_h: '<array>'}, 'oVtcFWp');
    var add_2 = objectStore_1.add({f0_g: '<boolean>'}, 'KzareVG');
    var objectStore_2 = db.createObjectStore('objectStore_90', {keypath: 'areK'});
    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('KzareVG', 'TPsdXHCDYP', true, true);
        get_1 = objectStore_1.get(KeyRange_10);
    }
    catch (e){
    }

    var clear_5 = objectStore_2.clear();
    var index_72 = objectStore_0.createIndex('index_72', 'test');
    var objectStore_3 = db.createObjectStore('objectStore_91', {autoIncrement: false});
    var add_3 = objectStore_0.add({f0_f: '<null>'}, 'RFuhqwmyeR');
    var objectStore_4 = db.createObjectStore('objectStore_92', {autoIncrement: false});
    var count_6;
    try{
        KeyRange_12 = IDBKeyRange.bound('Izp', 'ZbgKFttXxGKL', true, false);
        count_6 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var index_73 = objectStore_0.createIndex('index_73', 'test', {unique: false, multiEntry: false});
    var getAll_0;
    try{
        KeyRange_14 = IDBKeyRange.only('ZbgKFttXxGKL');
        getAll_0 = objectStore_0.getAll(KeyRange_14, 2733680428);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('Izp');
        getAll_0 = objectStore_0.getAll(KeyRange_15);
    }

    var get_2;
    try{
        KeyRange_16 = IDBKeyRange.bound('Izp', 'kIXJVISHzCP', false, false);
        get_2 = objectStore_0.get(KeyRange_16);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_93', {keypath: 'XWCPYifxmp', autoIncrement: false});
    var add_4 = objectStore_1.add({f0_s: '<string>', f1_c: '<number>', f2_p: '<array>', f3_r: '<boolean>', f4_c: '<object>'}, 'OowrXOsDIa');
    var index_74 = objectStore_1.createIndex('index_74', 'test', {unique: false});
    var objectStore_6 = db.createObjectStore('objectStore_94', {keypath: 'absZ', autoIncrement: false});
    var put_4 = objectStore_0.put({f0_x: '<array>', f1_c: '<array>', f2_y: '<array>', f3_x: '<number>', f4_n: '<null>', f5_z: '<string>', f6_o: '<boolean>'}, 'CPhPkpYdAv');
    var objectStore_7 = db.createObjectStore('objectStore_95', {keypath: 'vZdGDx', autoIncrement: false});
    var put_5 = objectStore_7.put({f0_z: '<number>', f1_g: '<boolean>', f2_b: '<number>', f3_j: '<array>', f4_l: '<boolean>', f5_v: '<number>', f6_o: '<number>'}, 'rCuRf');
    db.deleteObjectStore('objectStore_91')
    var index_75 = objectStore_2.createIndex('index_75', 'test');
    var put_6 = objectStore_1.put({f0_p: '<object>', f1_m: '<object>'}, 'QJbbjgW');
    var add_5 = objectStore_1.add({f0_h: '<number>', f1_m: '<string>'}, 'Oxdc');
    var objectStore_8 = db.createObjectStore('objectStore_96', {keypath: 'xBLqyldZpzNO'});
    var put_7 = objectStore_4.put({f0_s: '<object>', f1_t: '<object>', f2_y: '<string>', f3_r: '<string>'}, 'SVkI');
    var index_76 = objectStore_4.createIndex('index_76', 'test', {unique: true});
    var index_77 = objectStore_7.createIndex('index_77', 'test', {unique: true, multiEntry: false});
    var put_8 = objectStore_6.put({f0_d: '<boolean>', f1_w: '<boolean>', f2_a: '<string>', f3_o: '<array>', f4_j: '<object>', f5_c: '<number>'}, 'jhKG');
    objectStore_1.deleteIndex('index_71')
    var add_6 = objectStore_6.add({f0_c: '<boolean>', f1_a: '<array>', f2_l: '<object>', f3_o: '<number>', f4_n: '<string>', f5_w: '<null>', f6_y: '<object>', f7_m: '<string>', f8_u: '<string>'}, 'yElEfcmRtKa');
    var delete_0;
    try{
        KeyRange_18 = IDBKeyRange.bound('TPsdXHCDYP', 'Oxdc', true, true);
        delete_0 = objectStore_1.delete(KeyRange_18);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_20 = IDBKeyRange.only('yElEfcmRtKa');
        get_3 = objectStore_6.get(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.bound('SVkI', 'SVkI', false, true);
        get_4 = objectStore_4.get(KeyRange_22);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_97', {keypath: 'sbVmIFUnyV', autoIncrement: true});
    var put_9 = objectStore_0.put({f0_z: '<number>', f1_a: '<object>', f2_b: '<array>', f3_n: '<boolean>', f4_x: '<number>', f5_g: '<array>'}, 'xsi');
    var count_7 = objectStore_0.count();
    var objectStore_10 = db.createObjectStore('objectStore_98', {keypath: 'fzHOulMVZtb', autoIncrement: false});
    var objectStore_11 = db.createObjectStore('objectStore_99', {keypath: 'hYvlbsolGCV'});
    var get_5;
    try{
        KeyRange_24 = IDBKeyRange.only('TPsdXHCDYP');
        get_5 = objectStore_1.get(KeyRange_24);
    }
    catch (e){
    }

    var add_7 = objectStore_4.add({f0_g: '<number>', f1_k: '<object>', f2_c: '<array>', f3_v: '<array>', f4_z: '<array>'}, 'ebEv');
    objectStore_0.deleteIndex('index_73')
    var delete_1;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('ebEv', true);
        delete_1 = objectStore_4.delete(KeyRange_26);
    }
    catch (e){
    }

    var index_1 = objectStore_4.index('index_76');
    var count_8 = objectStore_1.count();
    var index_78 = objectStore_1.createIndex('index_78', 'test', {unique: false});
    var clear_6 = objectStore_7.clear();
    var put_10 = objectStore_1.put({f0_v: '<boolean>', f1_l: '<object>', f2_d: '<boolean>', f3_e: '<boolean>', f4_d: '<array>', f5_n: '<string>', f6_l: '<number>'}, 'HQxfbnWdhch');
    var put_11 = objectStore_4.put({f0_n: '<boolean>', f1_w: '<array>', f2_v: '<object>', f3_r: '<object>', f4_p: '<null>', f5_l: '<string>', f6_f: '<boolean>', f7_p: '<boolean>', f8_v: '<object>', f9_m: '<string>'}, 'whgENggTZP');
    var delete_2;
    try{
        KeyRange_28 = IDBKeyRange.bound('Oxdc', 'OowrXOsDIa', true, false);
        delete_2 = objectStore_1.delete(KeyRange_28);
    }
    catch (e){
    }

    var objectStore_12 = db.createObjectStore('objectStore_100', {autoIncrement: true});
    var count_9 = objectStore_1.count();
    var clear_7 = objectStore_2.clear();
    var clear_8 = objectStore_9.clear();
    var objectStore_13 = db.createObjectStore('objectStore_101', {keypath: 'aLrJbWgQ'});
    var put_12 = objectStore_5.put({f0_d: '<number>', f1_g: '<object>', f2_z: '<object>', f3_u: '<object>', f4_b: '<null>', f5_y: '<array>', f6_p: '<number>', f7_i: '<string>', f8_y: '<boolean>', f9_j: '<object>'}, 'MQwJlWPxa');
    var objectStore_14 = db.createObjectStore('objectStore_102', {keypath: 'OKT', autoIncrement: true});
    var index_2 = objectStore_1.index('index_78');
    var put_13 = objectStore_0.put({f0_u: '<string>', f1_i: '<number>', f2_r: '<string>', f3_k: '<object>', f4_o: '<boolean>', f5_g: '<null>', f6_u: '<string>', f7_w: '<boolean>'}, 'qtQ');
    var clear_9 = objectStore_9.clear();
    var count_10 = objectStore_5.count();
    var put_14 = objectStore_4.put({f0_v: '<number>', f1_u: '<boolean>', f2_e: '<number>', f3_k: '<number>', f4_h: '<string>', f5_m: '<number>', f6_z: '<null>', f7_x: '<boolean>'}, 'MxOnPxuV');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_80 = db.transaction(['objectStore_90', 'objectStore_101', 'objectStore_93'], 'readonly', {durability:"strict"})
    var objectStore_93 = txn_80.objectStore('objectStore_93');
    var getAll_1 = objectStore_93.getAll();
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.only('MQwJlWPxa');
        get_6 = objectStore_93.get(KeyRange_30);
    }
    catch (e){
    }

    var get_7;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('MQwJlWPxa', true);
        get_7 = objectStore_93.get(KeyRange_32);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('MQwJlWPxa', false);
        get_8 = objectStore_93.get(KeyRange_34);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_36 = IDBKeyRange.only('MQwJlWPxa');
        count_11 = objectStore_93.count(KeyRange_36);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('MQwJlWPxa', true);
        getAllKeys_1 = objectStore_93.getAllKeys(KeyRange_38, 4014878865);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('MQwJlWPxa');
        getAllKeys_1 = objectStore_93.getAllKeys(KeyRange_39);
    }

    var count_12;
    try{
        KeyRange_40 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', true, false);
        count_12 = objectStore_93.count(KeyRange_40);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_93.getAllKeys();
    var count_13;
    try{
        KeyRange_42 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', false, true);
        count_13 = objectStore_93.count(KeyRange_42);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_44 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', false, false);
        get_9 = objectStore_93.get(KeyRange_44);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', true, false);
        get_10 = objectStore_93.get(KeyRange_46);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_48 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', true, false);
        get_11 = objectStore_93.get(KeyRange_48);
    }
    catch (e){
    }

    var get_12;
    try{
        KeyRange_50 = IDBKeyRange.only('MQwJlWPxa');
        get_12 = objectStore_93.get(KeyRange_50);
    }
    catch (e){
    }

    txn_80.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_80.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_80.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_81 = db.transaction(['objectStore_89', 'objectStore_93', 'objectStore_99', 'objectStore_102'], 'readonly', {durability:"strict"})
    var objectStore_89 = txn_81.objectStore('objectStore_89');
    var get_13;
    try{
        KeyRange_52 = IDBKeyRange.bound('QJbbjgW', 'QJbbjgW', false, true);
        get_13 = objectStore_89.get(KeyRange_52);
    }
    catch (e){
    }

    var index_3 = objectStore_89.index('index_78');
    var count_14 = objectStore_89.count();
    var getAll_2 = objectStore_89.getAll();
    var count_15 = objectStore_89.count();
    var count_16;
    try{
        KeyRange_54 = IDBKeyRange.bound('UhK', 'OowrXOsDIa', true, false);
        count_16 = objectStore_89.count(KeyRange_54);
    }
    catch (e){
    }

    var count_17;
    try{
        KeyRange_56 = IDBKeyRange.bound('KzareVG', 'UhK', true, true);
        count_17 = objectStore_89.count(KeyRange_56);
    }
    catch (e){
    }

    var count_18 = objectStore_89.count();
    var count_19;
    try{
        KeyRange_58 = IDBKeyRange.bound('OowrXOsDIa', 'HQxfbnWdhch', true, true);
        count_19 = objectStore_89.count(KeyRange_58);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_60 = IDBKeyRange.only('KzareVG');
        get_14 = objectStore_89.get(KeyRange_60);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_62 = IDBKeyRange.only('TPsdXHCDYP');
        get_15 = objectStore_89.get(KeyRange_62);
    }
    catch (e){
    }

    var count_20 = objectStore_89.count();
    var index_4 = objectStore_89.index('index_74');
    var get_16;
    try{
        KeyRange_64 = IDBKeyRange.only('KzareVG');
        get_16 = objectStore_89.get(KeyRange_64);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_89.getAllKeys(136848882);
    txn_81.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_81.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_81.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_82 = db.transaction(['objectStore_92'], 'readonly', {durability:"relaxed"})
    var objectStore_92 = txn_82.objectStore('objectStore_92');
    var index_5 = objectStore_92.index('index_76');
    var getAll_3 = objectStore_92.getAll(1933490665);
    var get_17;
    try{
        KeyRange_66 = IDBKeyRange.only('MxOnPxuV');
        get_17 = objectStore_92.get(KeyRange_66);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_68 = IDBKeyRange.bound('SVkI', 'SVkI', true, true);
        get_18 = objectStore_92.get(KeyRange_68);
    }
    catch (e){
    }

    var getAll_4 = objectStore_92.getAll();
    var count_21 = objectStore_92.count();
    var getAllKeys_4;
    try{
        KeyRange_70 = IDBKeyRange.bound('whgENggTZP', 'MxOnPxuV', true, false);
        getAllKeys_4 = objectStore_92.getAllKeys(KeyRange_70);
    }
    catch (e){
        KeyRange_71 = IDBKeyRange.only('ebEv');
        getAllKeys_4 = objectStore_92.getAllKeys(KeyRange_71);
    }

    var count_22;
    try{
        KeyRange_72 = IDBKeyRange.only('whgENggTZP');
        count_22 = objectStore_92.count(KeyRange_72);
    }
    catch (e){
    }

    var count_23;
    try{
        KeyRange_74 = IDBKeyRange.bound('whgENggTZP', 'MxOnPxuV', false, true);
        count_23 = objectStore_92.count(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_5;
    try{
        KeyRange_76 = IDBKeyRange.bound('whgENggTZP', 'whgENggTZP', true, false);
        getAllKeys_5 = objectStore_92.getAllKeys(KeyRange_76, 1654817630);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('ebEv');
        getAllKeys_5 = objectStore_92.getAllKeys(KeyRange_77);
    }

    var getAll_5;
    try{
        KeyRange_78 = IDBKeyRange.lowerBound('whgENggTZP', false);
        getAll_5 = objectStore_92.getAll(KeyRange_78);
    }
    catch (e){
        KeyRange_79 = IDBKeyRange.only('MxOnPxuV');
        getAll_5 = objectStore_92.getAll(KeyRange_79);
    }

    var get_19;
    try{
        KeyRange_80 = IDBKeyRange.only('ebEv');
        get_19 = objectStore_92.get(KeyRange_80);
    }
    catch (e){
    }

    var getAllKeys_6 = objectStore_92.getAllKeys(1294081155);
    var count_24;
    try{
        KeyRange_82 = IDBKeyRange.only('whgENggTZP');
        count_24 = objectStore_92.count(KeyRange_82);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_84 = IDBKeyRange.only('MxOnPxuV');
        count_25 = objectStore_92.count(KeyRange_84);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_86 = IDBKeyRange.lowerBound('whgENggTZP', true);
        count_26 = objectStore_92.count(KeyRange_86);
    }
    catch (e){
    }

    var getAll_6 = objectStore_92.getAll();
    var count_27 = objectStore_92.count();
    var get_20;
    try{
        KeyRange_88 = IDBKeyRange.bound('whgENggTZP', 'ebEv', true, false);
        get_20 = objectStore_92.get(KeyRange_88);
    }
    catch (e){
    }

    txn_82.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_82.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_82.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_83 = db.transaction(['objectStore_99', 'objectStore_98', 'objectStore_95'], 'readonly', {durability:"strict"})
    var objectStore_95 = txn_83.objectStore('objectStore_95');
    var count_28 = objectStore_95.count();
    var getAllKeys_7;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('rCuRf', false);
        getAllKeys_7 = objectStore_95.getAllKeys(KeyRange_90, 3683425693);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('rCuRf');
        getAllKeys_7 = objectStore_95.getAllKeys(KeyRange_91);
    }

    var count_29;
    try{
        KeyRange_92 = IDBKeyRange.bound('rCuRf', 'rCuRf', false, false);
        count_29 = objectStore_95.count(KeyRange_92);
    }
    catch (e){
    }

    var getAll_7;
    try{
        KeyRange_94 = IDBKeyRange.bound('rCuRf', 'rCuRf', true, false);
        getAll_7 = objectStore_95.getAll(KeyRange_94, 2553143143);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('rCuRf');
        getAll_7 = objectStore_95.getAll(KeyRange_95);
    }

    var get_21;
    try{
        KeyRange_96 = IDBKeyRange.only('rCuRf');
        get_21 = objectStore_95.get(KeyRange_96);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_98 = IDBKeyRange.bound('rCuRf', 'rCuRf', false, false);
        getAllKeys_8 = objectStore_95.getAllKeys(KeyRange_98);
    }
    catch (e){
        KeyRange_99 = IDBKeyRange.only('rCuRf');
        getAllKeys_8 = objectStore_95.getAllKeys(KeyRange_99);
    }

    var get_22;
    try{
        KeyRange_100 = IDBKeyRange.only('rCuRf');
        get_22 = objectStore_95.get(KeyRange_100);
    }
    catch (e){
    }

    var getAllKeys_9 = objectStore_95.getAllKeys();
    var getAll_8;
    try{
        KeyRange_102 = IDBKeyRange.bound('rCuRf', 'rCuRf', true, true);
        getAll_8 = objectStore_95.getAll(KeyRange_102);
    }
    catch (e){
        KeyRange_103 = IDBKeyRange.only('rCuRf');
        getAll_8 = objectStore_95.getAll(KeyRange_103);
    }

    var get_23;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('rCuRf', true);
        get_23 = objectStore_95.get(KeyRange_104);
    }
    catch (e){
    }

    var count_30;
    try{
        KeyRange_106 = IDBKeyRange.only('rCuRf');
        count_30 = objectStore_95.count(KeyRange_106);
    }
    catch (e){
    }

    var count_31 = objectStore_95.count();
    var count_32;
    try{
        KeyRange_108 = IDBKeyRange.only('rCuRf');
        count_32 = objectStore_95.count(KeyRange_108);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_110 = IDBKeyRange.bound('rCuRf', 'rCuRf', true, true);
        count_33 = objectStore_95.count(KeyRange_110);
    }
    catch (e){
    }

    var getAll_9 = objectStore_95.getAll();
    var get_24;
    try{
        KeyRange_112 = IDBKeyRange.bound('rCuRf', 'rCuRf', false, false);
        get_24 = objectStore_95.get(KeyRange_112);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_114 = IDBKeyRange.only('rCuRf');
        get_25 = objectStore_95.get(KeyRange_114);
    }
    catch (e){
    }

    var count_34 = objectStore_95.count();
    var getAllKeys_10 = objectStore_95.getAllKeys();
    var getAll_10 = objectStore_95.getAll();
    var count_35;
    try{
        KeyRange_116 = IDBKeyRange.bound('rCuRf', 'rCuRf', false, false);
        count_35 = objectStore_95.count(KeyRange_116);
    }
    catch (e){
    }

    var count_36 = objectStore_95.count();
    var getAllKeys_11 = objectStore_95.getAllKeys();
    var index_6 = objectStore_95.index('index_77');
    var getAll_11 = objectStore_95.getAll(1813198542);
    txn_83.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_83.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_83.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_84 = db.transaction(['objectStore_97'], 'readwrite', {durability:"strict"})
    var objectStore_97 = txn_84.objectStore('objectStore_97');
    var clear_10 = objectStore_97.clear();
    var add_8 = objectStore_97.add({f0_z: '<boolean>', f1_z: '<object>', f2_d: '<string>'}, 'uwjaqkwmrkcB');
    var clear_11 = objectStore_97.clear();
    var count_37;
    try{
        KeyRange_118 = IDBKeyRange.bound('uwjaqkwmrkcB', 'uwjaqkwmrkcB', true, false);
        count_37 = objectStore_97.count(KeyRange_118);
    }
    catch (e){
    }

    var put_15 = objectStore_97.put({f0_z: '<boolean>'}, 'fDAvwzL');
    var clear_12 = objectStore_97.clear();
    var get_26;
    try{
        KeyRange_120 = IDBKeyRange.lowerBound('fDAvwzL', true);
        get_26 = objectStore_97.get(KeyRange_120);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_122 = IDBKeyRange.lowerBound('fDAvwzL', false);
        get_27 = objectStore_97.get(KeyRange_122);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_124 = IDBKeyRange.bound('fDAvwzL', 'fDAvwzL', false, false);
        delete_3 = objectStore_97.delete(KeyRange_124);
    }
    catch (e){
    }

    var count_38;
    try{
        KeyRange_126 = IDBKeyRange.bound('fDAvwzL', 'fDAvwzL', false, true);
        count_38 = objectStore_97.count(KeyRange_126);
    }
    catch (e){
    }

    var clear_13 = objectStore_97.clear();
    var get_28;
    try{
        KeyRange_128 = IDBKeyRange.bound('fDAvwzL', 'fDAvwzL', true, false);
        get_28 = objectStore_97.get(KeyRange_128);
    }
    catch (e){
    }

    var getAll_12 = objectStore_97.getAll(3389567712);
    var clear_14 = objectStore_97.clear();
    var add_9 = objectStore_97.add({f0_m: '<array>', f1_x: '<null>', f2_l: '<string>', f3_i: '<null>', f4_n: '<number>', f5_y: '<string>', f6_e: '<array>', f7_z: '<number>', f8_h: '<null>', f9_h: '<boolean>'}, 'ZcLFJebX');
    var get_29;
    try{
        KeyRange_130 = IDBKeyRange.bound('fDAvwzL', 'ZcLFJebX', true, true);
        get_29 = objectStore_97.get(KeyRange_130);
    }
    catch (e){
    }

    txn_84.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_84.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_84.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_85 = db.transaction(['objectStore_101', 'objectStore_92'], 'readwrite', {durability:"default"})
    var objectStore_92 = txn_85.objectStore('objectStore_92');
    var count_39;
    try{
        KeyRange_132 = IDBKeyRange.bound('SVkI', 'whgENggTZP', false, false);
        count_39 = objectStore_92.count(KeyRange_132);
    }
    catch (e){
    }

    var put_16 = objectStore_92.put({f0_b: '<string>', f1_t: '<object>', f2_o: '<array>'}, 'JYnBm');
    var clear_15 = objectStore_92.clear();
    var clear_16 = objectStore_92.clear();
    var getAll_13;
    try{
        KeyRange_134 = IDBKeyRange.lowerBound('SVkI', true);
        getAll_13 = objectStore_92.getAll(KeyRange_134);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('SVkI');
        getAll_13 = objectStore_92.getAll(KeyRange_135);
    }

    var count_40 = objectStore_92.count();
    var getAll_14;
    try{
        KeyRange_136 = IDBKeyRange.lowerBound('JYnBm', false);
        getAll_14 = objectStore_92.getAll(KeyRange_136, 203629855);
    }
    catch (e){
        KeyRange_137 = IDBKeyRange.only('ebEv');
        getAll_14 = objectStore_92.getAll(KeyRange_137);
    }

    var getAll_15;
    try{
        KeyRange_138 = IDBKeyRange.only('whgENggTZP');
        getAll_15 = objectStore_92.getAll(KeyRange_138);
    }
    catch (e){
        KeyRange_139 = IDBKeyRange.only('MxOnPxuV');
        getAll_15 = objectStore_92.getAll(KeyRange_139);
    }

    var add_10 = objectStore_92.add({f0_d: '<boolean>', f1_n: '<number>', f2_t: '<object>', f3_x: '<string>'}, 'JFDx');
    var get_30;
    try{
        KeyRange_140 = IDBKeyRange.lowerBound('JFDx', false);
        get_30 = objectStore_92.get(KeyRange_140);
    }
    catch (e){
    }

    var clear_17 = objectStore_92.clear();
    var put_17 = objectStore_92.put({f0_r: '<number>', f1_p: '<null>', f2_t: '<array>', f3_v: '<string>', f4_h: '<string>', f5_z: '<null>', f6_c: '<boolean>'}, 'baglepP');
    var get_31;
    try{
        KeyRange_142 = IDBKeyRange.lowerBound('baglepP', true);
        get_31 = objectStore_92.get(KeyRange_142);
    }
    catch (e){
    }

    var put_18 = objectStore_92.put({f0_q: '<array>', f1_h: '<string>', f2_q: '<number>', f3_l: '<number>', f4_q: '<string>', f5_x: '<null>', f6_o: '<number>', f7_g: '<null>'}, 'DXZrprGFj');
    var clear_18 = objectStore_92.clear();
    var put_19 = objectStore_92.put({f0_q: '<array>', f1_p: '<array>', f2_g: '<object>', f3_l: '<array>', f4_g: '<number>', f5_p: '<null>', f6_p: '<boolean>', f7_n: '<null>', f8_e: '<boolean>', f9_o: '<object>'}, 'OLYsHaylm');
    var count_41 = objectStore_92.count();
    var add_11 = objectStore_92.add({f0_d: '<number>', f1_h: '<boolean>', f2_m: '<array>'}, 'qsSWUVuXxgD');
    var get_32;
    try{
        KeyRange_144 = IDBKeyRange.only('ebEv');
        get_32 = objectStore_92.get(KeyRange_144);
    }
    catch (e){
    }

    txn_85.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_85.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_85.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_86 = db.transaction(['objectStore_93'], 'readwrite', {durability:"strict"})
    var objectStore_93 = txn_86.objectStore('objectStore_93');
    var add_12 = objectStore_93.add({f0_m: '<number>', f1_t: '<object>', f2_p: '<object>', f3_y: '<object>', f4_g: '<string>', f5_j: '<boolean>', f6_l: '<null>', f7_y: '<string>', f8_y: '<string>'}, 'IcX');
    var clear_19 = objectStore_93.clear();
    var getAllKeys_12 = objectStore_93.getAllKeys();
    var getAll_16 = objectStore_93.getAll();
    var getAllKeys_13;
    try{
        KeyRange_146 = IDBKeyRange.bound('IcX', 'MQwJlWPxa', true, false);
        getAllKeys_13 = objectStore_93.getAllKeys(KeyRange_146, 2000731476);
    }
    catch (e){
        KeyRange_147 = IDBKeyRange.only('MQwJlWPxa');
        getAllKeys_13 = objectStore_93.getAllKeys(KeyRange_147);
    }

    var count_42 = objectStore_93.count();
    var get_33;
    try{
        KeyRange_148 = IDBKeyRange.bound('IcX', 'MQwJlWPxa', false, true);
        get_33 = objectStore_93.get(KeyRange_148);
    }
    catch (e){
    }

    var clear_20 = objectStore_93.clear();
    var getAll_17;
    try{
        KeyRange_150 = IDBKeyRange.bound('MQwJlWPxa', 'MQwJlWPxa', false, true);
        getAll_17 = objectStore_93.getAll(KeyRange_150);
    }
    catch (e){
        KeyRange_151 = IDBKeyRange.only('MQwJlWPxa');
        getAll_17 = objectStore_93.getAll(KeyRange_151);
    }

    var clear_21 = objectStore_93.clear();
    var put_20 = objectStore_93.put({f0_t: '<null>', f1_p: '<string>', f2_n: '<array>', f3_o: '<object>', f4_g: '<array>', f5_r: '<boolean>', f6_n: '<null>', f7_m: '<boolean>'}, 'zVwwCTPiB');
    var put_21 = objectStore_93.put({f0_c: '<array>', f1_p: '<string>', f2_o: '<string>'}, 'tlCkXiy');
    var get_34;
    try{
        KeyRange_152 = IDBKeyRange.bound('MQwJlWPxa', 'tlCkXiy', true, false);
        get_34 = objectStore_93.get(KeyRange_152);
    }
    catch (e){
    }

    var put_22 = objectStore_93.put({f0_c: '<null>', f1_d: '<null>', f2_d: '<null>', f3_q: '<boolean>', f4_j: '<array>'}, 'txyb');
    var count_43;
    try{
        KeyRange_154 = IDBKeyRange.bound('IcX', 'MQwJlWPxa', false, false);
        count_43 = objectStore_93.count(KeyRange_154);
    }
    catch (e){
    }

    var add_13 = objectStore_93.add({f0_d: '<string>', f1_e: '<object>'}, 'cHlRHCQz');
    var get_35;
    try{
        KeyRange_156 = IDBKeyRange.lowerBound('zVwwCTPiB', true);
        get_35 = objectStore_93.get(KeyRange_156);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_158 = IDBKeyRange.only('txyb');
        delete_4 = objectStore_93.delete(KeyRange_158);
    }
    catch (e){
    }

    txn_86.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_86.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_86.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_87 = db.transaction(['objectStore_93'], 'readwrite', {durability:"default"})
    var objectStore_93 = txn_87.objectStore('objectStore_93');
    var count_44 = objectStore_93.count();
    var add_14 = objectStore_93.add({f0_j: '<null>', f1_u: '<object>'}, 'POMvNfq');
    var clear_22 = objectStore_93.clear();
    var get_36;
    try{
        KeyRange_160 = IDBKeyRange.lowerBound('MQwJlWPxa', false);
        get_36 = objectStore_93.get(KeyRange_160);
    }
    catch (e){
    }

    var put_23 = objectStore_93.put({f0_d: '<boolean>', f1_t: '<null>', f2_q: '<boolean>', f3_o: '<number>', f4_h: '<boolean>', f5_f: '<string>', f6_c: '<number>', f7_m: '<number>', f8_w: '<null>'}, 'diapmmwR');
    var put_24 = objectStore_93.put({f0_g: '<boolean>', f1_b: '<null>', f2_m: '<number>', f3_b: '<string>', f4_d: '<boolean>', f5_l: '<string>'}, 'HRuOcYMl');
    var add_15 = objectStore_93.add({f0_p: '<boolean>', f1_p: '<number>', f2_p: '<boolean>', f3_z: '<boolean>', f4_w: '<object>', f5_r: '<array>', f6_s: '<boolean>', f7_l: '<object>', f8_y: '<number>', f9_r: '<null>'}, 'PyFhHXDZfv');
    var add_16 = objectStore_93.add({f0_k: '<number>', f1_z: '<null>', f2_d: '<array>', f3_x: '<boolean>', f4_z: '<boolean>'}, 'LNNobjNT');
    var get_37;
    try{
        KeyRange_162 = IDBKeyRange.only('tlCkXiy');
        get_37 = objectStore_93.get(KeyRange_162);
    }
    catch (e){
    }

    var clear_23 = objectStore_93.clear();
    var add_17 = objectStore_93.add({f0_c: '<string>', f1_q: '<array>', f2_m: '<number>', f3_z: '<boolean>', f4_c: '<number>', f5_e: '<null>', f6_g: '<object>', f7_l: '<array>', f8_m: '<boolean>', f9_b: '<string>'}, 'zEIwMus');
    var get_38;
    try{
        KeyRange_164 = IDBKeyRange.only('tlCkXiy');
        get_38 = objectStore_93.get(KeyRange_164);
    }
    catch (e){
    }

    var clear_24 = objectStore_93.clear();
    var put_25 = objectStore_93.put({f0_o: '<number>'}, 'ewEpAOgQ');
    var count_45 = objectStore_93.count();
    var getAllKeys_14;
    try{
        KeyRange_166 = IDBKeyRange.bound('MQwJlWPxa', 'PyFhHXDZfv', true, false);
        getAllKeys_14 = objectStore_93.getAllKeys(KeyRange_166, 1401667715);
    }
    catch (e){
        KeyRange_167 = IDBKeyRange.only('LNNobjNT');
        getAllKeys_14 = objectStore_93.getAllKeys(KeyRange_167);
    }

    var clear_25 = objectStore_93.clear();
    var put_26 = objectStore_93.put({f0_a: '<array>', f1_f: '<boolean>', f2_n: '<array>', f3_f: '<object>', f4_l: '<boolean>', f5_c: '<array>', f6_v: '<array>', f7_o: '<boolean>'}, 'UImkHN');
    var put_27 = objectStore_93.put({f0_a: '<boolean>', f1_u: '<boolean>', f2_j: '<null>', f3_v: '<array>', f4_u: '<null>', f5_r: '<null>'}, 'pXCUMTT');
    var clear_26 = objectStore_93.clear();
    var get_39;
    try{
        KeyRange_168 = IDBKeyRange.lowerBound('tlCkXiy', true);
        get_39 = objectStore_93.get(KeyRange_168);
    }
    catch (e){
    }

    var add_18 = objectStore_93.add({f0_x: '<number>', f1_o: '<array>'}, 'wrBRGd');
    var put_28 = objectStore_93.put({f0_d: '<null>', f1_h: '<boolean>', f2_l: '<boolean>', f3_f: '<string>', f4_b: '<null>', f5_t: '<null>'}, 'LVN');
    txn_87.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_87.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_87.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_88 = db.transaction(['objectStore_92'], 'readonly', {durability:"relaxed"})
    var objectStore_92 = txn_88.objectStore('objectStore_92');
    var getAllKeys_15 = objectStore_92.getAllKeys(2043832387);
    var get_40;
    try{
        KeyRange_170 = IDBKeyRange.bound('OLYsHaylm', 'DXZrprGFj', false, false);
        get_40 = objectStore_92.get(KeyRange_170);
    }
    catch (e){
    }

    var count_46 = objectStore_92.count();
    var getAllKeys_16 = objectStore_92.getAllKeys();
    var get_41;
    try{
        KeyRange_172 = IDBKeyRange.bound('JFDx', 'MxOnPxuV', true, false);
        get_41 = objectStore_92.get(KeyRange_172);
    }
    catch (e){
    }

    var getAllKeys_17;
    try{
        KeyRange_174 = IDBKeyRange.only('DXZrprGFj');
        getAllKeys_17 = objectStore_92.getAllKeys(KeyRange_174);
    }
    catch (e){
        KeyRange_175 = IDBKeyRange.only('SVkI');
        getAllKeys_17 = objectStore_92.getAllKeys(KeyRange_175);
    }

    var getAll_18;
    try{
        KeyRange_176 = IDBKeyRange.lowerBound('MxOnPxuV', false);
        getAll_18 = objectStore_92.getAll(KeyRange_176);
    }
    catch (e){
        KeyRange_177 = IDBKeyRange.only('JFDx');
        getAll_18 = objectStore_92.getAll(KeyRange_177);
    }

    var count_47;
    try{
        KeyRange_178 = IDBKeyRange.bound('JFDx', 'ebEv', false, true);
        count_47 = objectStore_92.count(KeyRange_178);
    }
    catch (e){
    }

    var get_42;
    try{
        KeyRange_180 = IDBKeyRange.bound('baglepP', 'OLYsHaylm', false, false);
        get_42 = objectStore_92.get(KeyRange_180);
    }
    catch (e){
    }

    var getAll_19;
    try{
        KeyRange_182 = IDBKeyRange.bound('qsSWUVuXxgD', 'ebEv', false, false);
        getAll_19 = objectStore_92.getAll(KeyRange_182, 1997730833);
    }
    catch (e){
        KeyRange_183 = IDBKeyRange.only('JFDx');
        getAll_19 = objectStore_92.getAll(KeyRange_183);
    }

    var get_43;
    try{
        KeyRange_184 = IDBKeyRange.lowerBound('qsSWUVuXxgD', true);
        get_43 = objectStore_92.get(KeyRange_184);
    }
    catch (e){
    }

    var count_48;
    try{
        KeyRange_186 = IDBKeyRange.lowerBound('qsSWUVuXxgD', false);
        count_48 = objectStore_92.count(KeyRange_186);
    }
    catch (e){
    }

    var count_49;
    try{
        KeyRange_188 = IDBKeyRange.bound('JFDx', 'SVkI', true, false);
        count_49 = objectStore_92.count(KeyRange_188);
    }
    catch (e){
    }

    var getAllKeys_18;
    try{
        KeyRange_190 = IDBKeyRange.bound('SVkI', 'MxOnPxuV', false, false);
        getAllKeys_18 = objectStore_92.getAllKeys(KeyRange_190);
    }
    catch (e){
        KeyRange_191 = IDBKeyRange.only('DXZrprGFj');
        getAllKeys_18 = objectStore_92.getAllKeys(KeyRange_191);
    }

    var get_44;
    try{
        KeyRange_192 = IDBKeyRange.only('whgENggTZP');
        get_44 = objectStore_92.get(KeyRange_192);
    }
    catch (e){
    }

    var get_45;
    try{
        KeyRange_194 = IDBKeyRange.bound('SVkI', 'SVkI', true, false);
        get_45 = objectStore_92.get(KeyRange_194);
    }
    catch (e){
    }

    var get_46;
    try{
        KeyRange_196 = IDBKeyRange.bound('qsSWUVuXxgD', 'OLYsHaylm', false, false);
        get_46 = objectStore_92.get(KeyRange_196);
    }
    catch (e){
    }

    var get_47;
    try{
        KeyRange_198 = IDBKeyRange.only('JYnBm');
        get_47 = objectStore_92.get(KeyRange_198);
    }
    catch (e){
    }

    txn_88.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_88.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_88.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_89 = db.transaction(['objectStore_98', 'objectStore_100', 'objectStore_102', 'objectStore_101'], 'readwrite', {durability:"relaxed"})
    var objectStore_98 = txn_89.objectStore('objectStore_98');
    var put_29 = objectStore_98.put({f0_v: '<boolean>', f1_j: '<boolean>', f2_g: '<string>', f3_c: '<array>', f4_b: '<boolean>', f5_p: '<number>', f6_f: '<array>', f7_w: '<null>', f8_m: '<boolean>'}, 'aVsspfLa');
    var put_30 = objectStore_98.put({f0_t: '<number>', f1_l: '<null>', f2_w: '<number>', f3_z: '<array>', f4_x: '<object>', f5_b: '<null>', f6_p: '<array>'}, 'Lvc');
    var put_31 = objectStore_98.put({f0_z: '<null>', f1_u: '<array>', f2_f: '<boolean>', f3_l: '<object>', f4_i: '<null>', f5_t: '<boolean>', f6_r: '<null>'}, 'HxyYYealkVf');
    var get_48;
    try{
        KeyRange_200 = IDBKeyRange.bound('aVsspfLa', 'aVsspfLa', true, false);
        get_48 = objectStore_98.get(KeyRange_200);
    }
    catch (e){
    }

    var get_49;
    try{
        KeyRange_202 = IDBKeyRange.bound('HxyYYealkVf', 'aVsspfLa', false, false);
        get_49 = objectStore_98.get(KeyRange_202);
    }
    catch (e){
    }

    var clear_27 = objectStore_98.clear();
    var getAllKeys_19 = objectStore_98.getAllKeys(191076350);
    var get_50;
    try{
        KeyRange_204 = IDBKeyRange.bound('aVsspfLa', 'HxyYYealkVf', true, true);
        get_50 = objectStore_98.get(KeyRange_204);
    }
    catch (e){
    }

    var count_50 = objectStore_98.count();
    var add_19 = objectStore_98.add({f0_m: '<number>', f1_m: '<boolean>', f2_b: '<array>', f3_g: '<array>', f4_k: '<null>', f5_l: '<string>', f6_v: '<boolean>', f7_o: '<array>'}, 'uVtiAZUm');
    var getAll_20;
    try{
        KeyRange_206 = IDBKeyRange.bound('Lvc', 'Lvc', false, true);
        getAll_20 = objectStore_98.getAll(KeyRange_206, 739852248);
    }
    catch (e){
        KeyRange_207 = IDBKeyRange.only('aVsspfLa');
        getAll_20 = objectStore_98.getAll(KeyRange_207);
    }

    var add_20 = objectStore_98.add({f0_k: '<object>', f1_n: '<string>', f2_j: '<array>', f3_l: '<object>', f4_a: '<number>', f5_v: '<boolean>', f6_q: '<null>'}, 'QniAA');
    var delete_5;
    try{
        KeyRange_208 = IDBKeyRange.bound('QniAA', 'Lvc', true, true);
        delete_5 = objectStore_98.delete(KeyRange_208);
    }
    catch (e){
    }

    var get_51;
    try{
        KeyRange_210 = IDBKeyRange.only('aVsspfLa');
        get_51 = objectStore_98.get(KeyRange_210);
    }
    catch (e){
    }

    var getAll_21;
    try{
        KeyRange_212 = IDBKeyRange.bound('HxyYYealkVf', 'QniAA', true, true);
        getAll_21 = objectStore_98.getAll(KeyRange_212);
    }
    catch (e){
        KeyRange_213 = IDBKeyRange.only('HxyYYealkVf');
        getAll_21 = objectStore_98.getAll(KeyRange_213);
    }

    var add_21 = objectStore_98.add({f0_c: '<number>', f1_l: '<number>', f2_j: '<boolean>', f3_d: '<boolean>'}, 'ZGLzf');
    var clear_28 = objectStore_98.clear();
    var get_52;
    try{
        KeyRange_214 = IDBKeyRange.bound('ZGLzf', 'QniAA', false, true);
        get_52 = objectStore_98.get(KeyRange_214);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_216 = IDBKeyRange.only('uVtiAZUm');
        delete_6 = objectStore_98.delete(KeyRange_216);
    }
    catch (e){
    }

    txn_89.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_89.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_89.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7570')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};