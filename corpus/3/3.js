let db;
const openRequest = window.indexedDB.open('str_5513', 6616119142583023)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_32', {keypath: 'knWQTMZXP.QaVVMKuNcH.DVJaNtCVaoO.xWQAFOh.GLIk.Cbsxt.tqxPAlTjWDB'});
    var index_31 = objectStore_0.createIndex('index_31', 'test', {unique: false});
    var add_0 = objectStore_0.add({f0_j: '<null>', f1_m: '<number>', f2_j: '<array>', f3_z: '<null>', f4_n: '<null>', f5_d: '<string>', f6_o: '<string>', f7_o: '<number>'}, 'ROeO');
    objectStore_0.deleteIndex('index_31')
    var count_0 = objectStore_0.count();
    var objectStore_1 = db.createObjectStore('objectStore_33', {keypath: 'YAh.YKAjuYQfc.sFQiWO.RBJSxNd.etPNrKgMF.deumOxuYwvC.tgUMWYhDXfUn', autoIncrement: true});
    var count_1;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('ROeO', true);
        count_1 = objectStore_0.count(KeyRange_0);
    }
    catch (e){
    }

    var index_32 = objectStore_0.createIndex('index_32', 'test', {unique: true});
    var put_0 = objectStore_0.put({f0_i: '<string>', f1_e: '<array>', f2_h: '<object>', f3_u: '<string>', f4_g: '<string>', f5_z: '<null>', f6_o: '<object>', f7_b: '<array>', f8_f: '<object>', f9_d: '<object>'}, 'cDMrE');
    var clear_0 = objectStore_0.clear();
    var objectStore_2 = db.createObjectStore('objectStore_34');
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('cDMrE', true);
        getAll_0 = objectStore_0.getAll(KeyRange_2, 2285654039);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('cDMrE');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.only('cDMrE');
        count_2 = objectStore_0.count(KeyRange_4);
    }
    catch (e){
    }

    var put_1 = objectStore_1.put({f0_m: '<boolean>', f1_y: '<string>', f2_r: '<number>', f3_d: '<array>', f4_k: '<string>', f5_y: '<number>', f6_b: '<array>'}, 'pHDjCptptY');
    var objectStore_3 = db.createObjectStore('objectStore_35', {keypath: 'griIczbM'});
    var add_1 = objectStore_3.add({f0_s: '<boolean>', f1_u: '<array>', f2_n: '<null>', f3_t: '<null>', f4_u: '<null>', f5_a: '<string>', f6_i: '<object>', f7_w: '<number>', f8_i: '<string>'}, 'OppleMtw');
    var objectStore_4 = db.createObjectStore('objectStore_36', {keypath: 'PemQrd'});
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('OppleMtw', 'OppleMtw', true, false);
        delete_0 = objectStore_3.delete(KeyRange_6);
    }
    catch (e){
    }

    var objectStore_5 = db.createObjectStore('objectStore_37', {autoIncrement: true});
    var clear_1 = objectStore_0.clear();
    var add_2 = objectStore_1.add({f0_r: '<number>', f1_g: '<string>', f2_y: '<string>', f3_w: '<string>', f4_q: '<object>'}, 'WSVGfSLNpgk');
    var clear_2 = objectStore_3.clear();
    var clear_3 = objectStore_1.clear();
    var getAll_1;
    try{
        KeyRange_8 = IDBKeyRange.only('ROeO');
        getAll_1 = objectStore_0.getAll(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('ROeO');
        getAll_1 = objectStore_0.getAll(KeyRange_9);
    }

    var put_2 = objectStore_0.put({f0_f: '<string>', f1_a: '<number>', f2_p: '<array>'}, 'HSmrsH');
    var objectStore_6 = db.createObjectStore('objectStore_38');
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var add_3 = objectStore_6.add({f0_l: '<array>', f1_w: '<null>', f2_m: '<string>', f3_y: '<string>', f4_p: '<number>', f5_z: '<number>', f6_i: '<null>'}, 'Vchxrzakolp');
    var getAllKeys_1 = objectStore_0.getAllKeys();
    var add_4 = objectStore_5.add({f0_o: '<number>', f1_p: '<string>', f2_r: '<null>', f3_y: '<string>', f4_q: '<array>', f5_i: '<array>', f6_p: '<null>', f7_f: '<number>', f8_t: '<string>'}, 'eBOVvJCXdoP');
    var clear_4 = objectStore_2.clear();
    var objectStore_7 = db.createObjectStore('objectStore_39');
    var getAllKeys_2;
    try{
        KeyRange_10 = IDBKeyRange.only('WSVGfSLNpgk');
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_10);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('pHDjCptptY');
        getAllKeys_2 = objectStore_1.getAllKeys(KeyRange_11);
    }

    var count_3;
    try{
        KeyRange_12 = IDBKeyRange.only('OppleMtw');
        count_3 = objectStore_3.count(KeyRange_12);
    }
    catch (e){
    }

    var clear_5 = objectStore_6.clear();
    var getAll_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('eBOVvJCXdoP', true);
        getAll_2 = objectStore_5.getAll(KeyRange_14);
    }
    catch (e){
        KeyRange_15 = IDBKeyRange.only('eBOVvJCXdoP');
        getAll_2 = objectStore_5.getAll(KeyRange_15);
    }

    var index_33 = objectStore_2.createIndex('index_33', 'test');
    var getAll_3 = objectStore_6.getAll();
    var add_5 = objectStore_1.add({f0_g: '<array>', f1_s: '<null>'}, 'qWn');
    var put_3 = objectStore_6.put({f0_x: '<string>', f1_u: '<null>'}, 'ltTBB');
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('qWn', 'qWn', false, false);
        count_4 = objectStore_1.count(KeyRange_16);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('cDMrE', false);
        delete_1 = objectStore_0.delete(KeyRange_18);
    }
    catch (e){
    }

    var put_4 = objectStore_5.put({f0_q: '<null>', f1_m: '<boolean>', f2_t: '<boolean>', f3_v: '<number>', f4_y: '<string>', f5_c: '<array>'}, 'aBTps');
    var delete_2;
    try{
        KeyRange_20 = IDBKeyRange.bound('cDMrE', 'HSmrsH', true, false);
        delete_2 = objectStore_0.delete(KeyRange_20);
    }
    catch (e){
    }

    var count_5 = objectStore_1.count();
    var objectStore_8 = db.createObjectStore('objectStore_40', {keypath: 'CkDWdL', autoIncrement: false});
    var clear_6 = objectStore_2.clear();
    var add_6 = objectStore_7.add({f0_t: '<object>', f1_i: '<number>', f2_z: '<number>', f3_k: '<boolean>', f4_r: '<boolean>', f5_k: '<string>'}, 'NVuKP');
    var count_6 = objectStore_5.count();
    var getAll_4 = objectStore_5.getAll();
    var objectStore_9 = db.createObjectStore('objectStore_41', {keypath: 'oeSQryb'});
    var getAll_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('cDMrE', 'HSmrsH', false, true);
        getAll_5 = objectStore_0.getAll(KeyRange_22);
    }
    catch (e){
        KeyRange_23 = IDBKeyRange.only('cDMrE');
        getAll_5 = objectStore_0.getAll(KeyRange_23);
    }

    var add_7 = objectStore_1.add({f0_s: '<string>', f1_v: '<object>', f2_n: '<object>', f3_n: '<null>'}, 'bpirgLtqlrP');
    var get_0;
    try{
        KeyRange_24 = IDBKeyRange.bound('eBOVvJCXdoP', 'eBOVvJCXdoP', true, false);
        get_0 = objectStore_5.get(KeyRange_24);
    }
    catch (e){
    }

    var put_5 = objectStore_4.put({f0_a: '<number>', f1_k: '<null>', f2_o: '<number>'}, 'PADfSaYzbdkf');
    var put_6 = objectStore_9.put({f0_n: '<null>', f1_o: '<string>', f2_b: '<object>', f3_y: '<string>', f4_t: '<null>', f5_v: '<number>', f6_q: '<null>', f7_b: '<number>', f8_o: '<number>'}, 'gAojbhPeAEk');
    var get_1;
    try{
        KeyRange_26 = IDBKeyRange.only('OppleMtw');
        get_1 = objectStore_3.get(KeyRange_26);
    }
    catch (e){
    }

    var put_7 = objectStore_6.put({f0_f: '<number>'}, 'pmKDPvkR');
    var get_2;
    try{
        KeyRange_28 = IDBKeyRange.only('eBOVvJCXdoP');
        get_2 = objectStore_5.get(KeyRange_28);
    }
    catch (e){
    }

    var clear_7 = objectStore_9.clear();
    var get_3;
    try{
        KeyRange_30 = IDBKeyRange.only('pHDjCptptY');
        get_3 = objectStore_1.get(KeyRange_30);
    }
    catch (e){
    }

    var index_34 = objectStore_8.createIndex('index_34', 'test', {multiEntry: false});
    var clear_8 = objectStore_3.clear();
    var clear_9 = objectStore_0.clear();
    var get_4;
    try{
        KeyRange_32 = IDBKeyRange.only('PADfSaYzbdkf');
        get_4 = objectStore_4.get(KeyRange_32);
    }
    catch (e){
    }

    var objectStore_10 = db.createObjectStore('objectStore_42');
    var getAllKeys_3;
    try{
        KeyRange_34 = IDBKeyRange.only('cDMrE');
        getAllKeys_3 = objectStore_0.getAllKeys(KeyRange_34, 52189687);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('cDMrE');
        getAllKeys_3 = objectStore_0.getAllKeys(KeyRange_35);
    }

    var clear_10 = objectStore_0.clear();
    var index_35 = objectStore_7.createIndex('index_35', 'test');
    var clear_11 = objectStore_7.clear();
    var objectStore_11 = db.createObjectStore('objectStore_43');
    var objectStore_12 = db.createObjectStore('objectStore_44', {keypath: 'LHRRcXSa', autoIncrement: false});
    var clear_12 = objectStore_10.clear();
    var index_36 = objectStore_2.createIndex('index_36', 'test');
    var add_8 = objectStore_8.add({f0_d: '<object>', f1_d: '<string>', f2_a: '<number>', f3_c: '<string>', f4_w: '<boolean>', f5_c: '<boolean>', f6_f: '<array>'}, 'EWQ');
    var put_8 = objectStore_9.put({f0_d: '<array>', f1_m: '<number>', f2_n: '<object>', f3_b: '<string>', f4_x: '<object>', f5_v: '<number>', f6_g: '<object>', f7_p: '<string>'}, 'FSwOrBRxD');
    var add_9 = objectStore_1.add({f0_c: '<array>', f1_p: '<number>', f2_u: '<null>', f3_d: '<null>', f4_o: '<string>', f5_e: '<null>', f6_l: '<array>'}, 'sWtRcyuLsq');
    var put_9 = objectStore_1.put({f0_v: '<number>', f1_r: '<array>', f2_z: '<array>', f3_h: '<string>', f4_b: '<null>', f5_a: '<number>', f6_y: '<boolean>'}, 'BLQeEcSexK');
    var put_10 = objectStore_8.put({f0_b: '<string>', f1_q: '<null>', f2_z: '<boolean>', f3_v: '<object>'}, 'YVYOvtmFsZWQ');
    var index_37 = objectStore_7.createIndex('index_37', 'test', {unique: false, multiEntry: false});
    var index_38 = objectStore_3.createIndex('index_38', 'test', {unique: true, multiEntry: false});
    var put_11 = objectStore_5.put({f0_m: '<array>', f1_w: '<array>', f2_t: '<array>', f3_y: '<string>', f4_b: '<string>'}, 'bQuJamPsqXR');
    var add_10 = objectStore_3.add({f0_q: '<null>', f1_u: '<array>', f2_y: '<number>', f3_e: '<string>', f4_h: '<number>'}, 'QKTKQk');
    var objectStore_13 = db.createObjectStore('objectStore_45', {keypath: 'eSpcy.qPTFFIjjDEfb.tBoRim.GOPKCxjE.pHHyAUEAho.mdrjNXPmd.qwleqgIYm'});
    var count_7 = objectStore_8.count();
    var put_12 = objectStore_5.put({f0_k: '<object>', f1_k: '<null>', f2_v: '<array>', f3_s: '<string>', f4_l: '<string>'}, 'HsGwlVxGOvMf');
    var objectStore_14 = db.createObjectStore('objectStore_46');
    var clear_13 = objectStore_13.clear();
    var put_13 = objectStore_6.put({f0_b: '<number>', f1_k: '<boolean>', f2_d: '<boolean>', f3_r: '<number>', f4_j: '<string>', f5_o: '<number>', f6_k: '<number>'}, 'tCrgiAUeb');
    var put_14 = objectStore_3.put({f0_q: '<string>', f1_t: '<null>', f2_s: '<number>', f3_o: '<number>', f4_q: '<number>', f5_f: '<number>'}, 'JCV');
    var getAll_6;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('NVuKP', false);
        getAll_6 = objectStore_7.getAll(KeyRange_36);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('NVuKP');
        getAll_6 = objectStore_7.getAll(KeyRange_37);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_30 = db.transaction(['objectStore_36'], 'readwrite', {durability:"relaxed"})
    var objectStore_36 = txn_30.objectStore('objectStore_36');
    var get_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('PADfSaYzbdkf', 'PADfSaYzbdkf', true, true);
        get_5 = objectStore_36.get(KeyRange_38);
    }
    catch (e){
    }

    var clear_14 = objectStore_36.clear();
    var clear_15 = objectStore_36.clear();
    var clear_16 = objectStore_36.clear();
    var clear_17 = objectStore_36.clear();
    var getAllKeys_4 = objectStore_36.getAllKeys();
    var count_8 = objectStore_36.count();
    var getAll_7 = objectStore_36.getAll(763463013);
    var getAll_8 = objectStore_36.getAll(3764910195);
    var delete_3;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('PADfSaYzbdkf', true);
        delete_3 = objectStore_36.delete(KeyRange_40);
    }
    catch (e){
    }

    var put_15 = objectStore_36.put({f0_b: '<string>', f1_n: '<null>', f2_w: '<number>', f3_d: '<string>', f4_q: '<null>', f5_y: '<string>', f6_p: '<null>'}, 'MHpiu');
    var clear_18 = objectStore_36.clear();
    var getAll_9;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('MHpiu', false);
        getAll_9 = objectStore_36.getAll(KeyRange_42, 3836529691);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('MHpiu');
        getAll_9 = objectStore_36.getAll(KeyRange_43);
    }

    var get_6;
    try{
        KeyRange_44 = IDBKeyRange.bound('MHpiu', 'MHpiu', false, true);
        get_6 = objectStore_36.get(KeyRange_44);
    }
    catch (e){
    }

    var count_9 = objectStore_36.count();
    var add_11 = objectStore_36.add({f0_w: '<string>', f1_i: '<object>', f2_g: '<boolean>', f3_r: '<number>', f4_n: '<boolean>', f5_l: '<boolean>'}, 'cbRhjJpYC');
    txn_30.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_30.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_30.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_31 = db.transaction(['objectStore_33', 'objectStore_34', 'objectStore_36'], 'readwrite', {durability:"default"})
    var objectStore_34 = txn_31.objectStore('objectStore_34');
    var clear_19 = objectStore_34.clear();
    var put_16 = objectStore_34.put({f0_e: '<boolean>', f1_y: '<array>', f2_y: '<number>', f3_g: '<array>', f4_l: '<number>', f5_h: '<null>', f6_i: '<boolean>', f7_u: '<string>', f8_j: '<string>'}, 'eIPI');
    var count_10 = objectStore_34.count();
    var get_7;
    try{
        KeyRange_46 = IDBKeyRange.bound('eIPI', 'eIPI', true, true);
        get_7 = objectStore_34.get(KeyRange_46);
    }
    catch (e){
    }

    var count_11;
    try{
        KeyRange_48 = IDBKeyRange.only('eIPI');
        count_11 = objectStore_34.count(KeyRange_48);
    }
    catch (e){
    }

    var add_12 = objectStore_34.add({f0_e: '<number>', f1_z: '<null>', f2_t: '<string>', f3_c: '<string>', f4_k: '<array>'}, 'goQVH');
    var delete_4;
    try{
        KeyRange_50 = IDBKeyRange.bound('eIPI', 'goQVH', true, true);
        delete_4 = objectStore_34.delete(KeyRange_50);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_34.getAllKeys();
    var put_17 = objectStore_34.put({f0_k: '<number>', f1_f: '<string>', f2_z: '<number>', f3_f: '<string>', f4_q: '<object>', f5_u: '<boolean>', f6_c: '<string>', f7_t: '<number>', f8_o: '<string>'}, 'vcWJkxKb');
    var add_13 = objectStore_34.add({f0_n: '<boolean>', f1_r: '<number>'}, 'YWZU');
    var add_14 = objectStore_34.add({f0_t: '<boolean>', f1_j: '<array>', f2_y: '<object>', f3_p: '<boolean>', f4_o: '<boolean>', f5_v: '<null>', f6_o: '<boolean>', f7_f: '<null>', f8_m: '<string>'}, 'SneBXRe');
    var get_8;
    try{
        KeyRange_52 = IDBKeyRange.only('vcWJkxKb');
        get_8 = objectStore_34.get(KeyRange_52);
    }
    catch (e){
    }

    var put_18 = objectStore_34.put({f0_m: '<object>', f1_m: '<array>', f2_b: '<null>', f3_s: '<object>'}, 'bLphrlD');
    var getAllKeys_6 = objectStore_34.getAllKeys(2544586430);
    var add_15 = objectStore_34.add({f0_z: '<string>', f1_c: '<object>', f2_f: '<number>', f3_g: '<boolean>', f4_j: '<array>'}, 'FPxTgyt');
    var getAllKeys_7;
    try{
        KeyRange_54 = IDBKeyRange.only('bLphrlD');
        getAllKeys_7 = objectStore_34.getAllKeys(KeyRange_54);
    }
    catch (e){
        KeyRange_55 = IDBKeyRange.only('eIPI');
        getAllKeys_7 = objectStore_34.getAllKeys(KeyRange_55);
    }

    var get_9;
    try{
        KeyRange_56 = IDBKeyRange.bound('YWZU', 'goQVH', false, false);
        get_9 = objectStore_34.get(KeyRange_56);
    }
    catch (e){
    }

    var add_16 = objectStore_34.add({f0_q: '<object>', f1_i: '<string>', f2_f: '<string>'}, 'hsW');
    var add_17 = objectStore_34.add({f0_h: '<null>', f1_m: '<object>', f2_v: '<string>', f3_t: '<string>', f4_n: '<boolean>', f5_r: '<array>'}, 'ifg');
    var clear_20 = objectStore_34.clear();
    txn_31.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_31.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_31.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_32 = db.transaction(['objectStore_34'], 'readonly', {durability:"default"})
    var objectStore_34 = txn_32.objectStore('objectStore_34');
    var getAllKeys_8;
    try{
        KeyRange_58 = IDBKeyRange.lowerBound('hsW', false);
        getAllKeys_8 = objectStore_34.getAllKeys(KeyRange_58, 3412858426);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('YWZU');
        getAllKeys_8 = objectStore_34.getAllKeys(KeyRange_59);
    }

    var get_10;
    try{
        KeyRange_60 = IDBKeyRange.bound('eIPI', 'eIPI', false, true);
        get_10 = objectStore_34.get(KeyRange_60);
    }
    catch (e){
    }

    var getAll_10;
    try{
        KeyRange_62 = IDBKeyRange.bound('SneBXRe', 'hsW', true, true);
        getAll_10 = objectStore_34.getAll(KeyRange_62, 1021653224);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('eIPI');
        getAll_10 = objectStore_34.getAll(KeyRange_63);
    }

    var count_12 = objectStore_34.count();
    var index_0 = objectStore_34.index('index_33');
    var getAllKeys_9;
    try{
        KeyRange_64 = IDBKeyRange.only('SneBXRe');
        getAllKeys_9 = objectStore_34.getAllKeys(KeyRange_64, 1400147462);
    }
    catch (e){
        KeyRange_65 = IDBKeyRange.only('bLphrlD');
        getAllKeys_9 = objectStore_34.getAllKeys(KeyRange_65);
    }

    var count_13;
    try{
        KeyRange_66 = IDBKeyRange.bound('SneBXRe', 'vcWJkxKb', false, false);
        count_13 = objectStore_34.count(KeyRange_66);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('eIPI', true);
        get_11 = objectStore_34.get(KeyRange_68);
    }
    catch (e){
    }

    var count_14 = objectStore_34.count();
    var get_12;
    try{
        KeyRange_70 = IDBKeyRange.bound('bLphrlD', 'goQVH', true, false);
        get_12 = objectStore_34.get(KeyRange_70);
    }
    catch (e){
    }

    var count_15 = objectStore_34.count();
    var count_16 = objectStore_34.count();
    var get_13;
    try{
        KeyRange_72 = IDBKeyRange.bound('hsW', 'bLphrlD', true, true);
        get_13 = objectStore_34.get(KeyRange_72);
    }
    catch (e){
    }

    var count_17 = objectStore_34.count();
    var get_14;
    try{
        KeyRange_74 = IDBKeyRange.only('hsW');
        get_14 = objectStore_34.get(KeyRange_74);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('vcWJkxKb', true);
        get_15 = objectStore_34.get(KeyRange_76);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_78 = IDBKeyRange.bound('bLphrlD', 'ifg', true, false);
        get_16 = objectStore_34.get(KeyRange_78);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_80 = IDBKeyRange.bound('YWZU', 'vcWJkxKb', false, false);
        get_17 = objectStore_34.get(KeyRange_80);
    }
    catch (e){
    }

    var count_18 = objectStore_34.count();
    var count_19;
    try{
        KeyRange_82 = IDBKeyRange.only('ifg');
        count_19 = objectStore_34.count(KeyRange_82);
    }
    catch (e){
    }

    var count_20 = objectStore_34.count();
    var get_18;
    try{
        KeyRange_84 = IDBKeyRange.only('hsW');
        get_18 = objectStore_34.get(KeyRange_84);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_86 = IDBKeyRange.bound('YWZU', 'eIPI', true, true);
        getAllKeys_10 = objectStore_34.getAllKeys(KeyRange_86);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('goQVH');
        getAllKeys_10 = objectStore_34.getAllKeys(KeyRange_87);
    }

    txn_32.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_32.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_32.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_33 = db.transaction(['objectStore_38', 'objectStore_46'], 'readwrite', {durability:"strict"})
    var objectStore_46 = txn_33.objectStore('objectStore_46');
    var clear_21 = objectStore_46.clear();
    var add_18 = objectStore_46.add({f0_z: '<boolean>', f1_u: '<null>', f2_e: '<number>', f3_h: '<array>', f4_f: '<null>'}, 'USWywOaYDAy');
    var clear_22 = objectStore_46.clear();
    var clear_23 = objectStore_46.clear();
    var get_19;
    try{
        KeyRange_88 = IDBKeyRange.only('USWywOaYDAy');
        get_19 = objectStore_46.get(KeyRange_88);
    }
    catch (e){
    }

    var getAllKeys_11;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('USWywOaYDAy', true);
        getAllKeys_11 = objectStore_46.getAllKeys(KeyRange_90, 2592309062);
    }
    catch (e){
        KeyRange_91 = IDBKeyRange.only('USWywOaYDAy');
        getAllKeys_11 = objectStore_46.getAllKeys(KeyRange_91);
    }

    var delete_5;
    try{
        KeyRange_92 = IDBKeyRange.bound('USWywOaYDAy', 'USWywOaYDAy', false, false);
        delete_5 = objectStore_46.delete(KeyRange_92);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_46.getAllKeys();
    var put_19 = objectStore_46.put({f0_y: '<string>', f1_p: '<number>', f2_d: '<null>', f3_o: '<object>', f4_p: '<boolean>', f5_u: '<string>', f6_v: '<null>', f7_b: '<array>'}, 'giaPPcjhSxjd');
    var put_20 = objectStore_46.put({f0_l: '<boolean>', f1_x: '<object>'}, 'lOUZjAEaTFoj');
    var get_20;
    try{
        KeyRange_94 = IDBKeyRange.only('giaPPcjhSxjd');
        get_20 = objectStore_46.get(KeyRange_94);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_96 = IDBKeyRange.bound('giaPPcjhSxjd', 'lOUZjAEaTFoj', true, false);
        delete_6 = objectStore_46.delete(KeyRange_96);
    }
    catch (e){
    }

    var add_19 = objectStore_46.add({f0_u: '<number>', f1_w: '<array>', f2_k: '<string>', f3_i: '<null>', f4_s: '<null>'}, 'TwJAmCDlNION');
    var count_21;
    try{
        KeyRange_98 = IDBKeyRange.lowerBound('lOUZjAEaTFoj', false);
        count_21 = objectStore_46.count(KeyRange_98);
    }
    catch (e){
    }

    var clear_24 = objectStore_46.clear();
    var count_22;
    try{
        KeyRange_100 = IDBKeyRange.only('giaPPcjhSxjd');
        count_22 = objectStore_46.count(KeyRange_100);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_102 = IDBKeyRange.bound('lOUZjAEaTFoj', 'giaPPcjhSxjd', false, false);
        get_21 = objectStore_46.get(KeyRange_102);
    }
    catch (e){
    }

    var clear_25 = objectStore_46.clear();
    var count_23;
    try{
        KeyRange_104 = IDBKeyRange.bound('lOUZjAEaTFoj', 'USWywOaYDAy', true, false);
        count_23 = objectStore_46.count(KeyRange_104);
    }
    catch (e){
    }

    txn_33.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_33.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_33.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_34 = db.transaction(['objectStore_39'], 'readwrite', {durability:"default"})
    var objectStore_39 = txn_34.objectStore('objectStore_39');
    var add_20 = objectStore_39.add({f0_r: '<null>', f1_a: '<object>'}, 'kNqCw');
    var put_21 = objectStore_39.put({f0_q: '<boolean>', f1_y: '<array>', f2_g: '<string>', f3_p: '<string>', f4_z: '<number>', f5_d: '<number>', f6_a: '<array>'}, 'aMmpNfOU');
    var count_24;
    try{
        KeyRange_106 = IDBKeyRange.bound('NVuKP', 'kNqCw', true, false);
        count_24 = objectStore_39.count(KeyRange_106);
    }
    catch (e){
    }

    var count_25;
    try{
        KeyRange_108 = IDBKeyRange.bound('aMmpNfOU', 'kNqCw', true, false);
        count_25 = objectStore_39.count(KeyRange_108);
    }
    catch (e){
    }

    var clear_26 = objectStore_39.clear();
    var add_21 = objectStore_39.add({f0_o: '<string>', f1_s: '<object>', f2_i: '<number>', f3_o: '<number>', f4_c: '<null>', f5_q: '<object>', f6_s: '<number>', f7_x: '<object>', f8_k: '<object>', f9_t: '<null>'}, 'IoBha');
    var index_1 = objectStore_39.index('index_35');
    var clear_27 = objectStore_39.clear();
    var add_22 = objectStore_39.add({f0_n: '<number>'}, 'KfCwAgo');
    var delete_7;
    try{
        KeyRange_110 = IDBKeyRange.only('KfCwAgo');
        delete_7 = objectStore_39.delete(KeyRange_110);
    }
    catch (e){
    }

    var count_26;
    try{
        KeyRange_112 = IDBKeyRange.bound('NVuKP', 'aMmpNfOU', false, true);
        count_26 = objectStore_39.count(KeyRange_112);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_114 = IDBKeyRange.bound('NVuKP', 'kNqCw', true, true);
        count_27 = objectStore_39.count(KeyRange_114);
    }
    catch (e){
    }

    var clear_28 = objectStore_39.clear();
    var clear_29 = objectStore_39.clear();
    var add_23 = objectStore_39.add({f0_k: '<number>', f1_d: '<object>'}, 'fiZIVTzn');
    var put_22 = objectStore_39.put({f0_z: '<null>', f1_v: '<string>', f2_y: '<array>', f3_l: '<string>', f4_c: '<object>', f5_x: '<boolean>', f6_p: '<number>'}, 'ladWnJ');
    var getAll_11 = objectStore_39.getAll(3515896307);
    var put_23 = objectStore_39.put({f0_t: '<boolean>', f1_m: '<boolean>', f2_d: '<boolean>', f3_r: '<null>'}, 'fQvEgK');
    txn_34.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_34.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_34.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_35 = db.transaction(['objectStore_34', 'objectStore_39', 'objectStore_37', 'objectStore_41'], 'readwrite', {durability:"default"})
    var objectStore_41 = txn_35.objectStore('objectStore_41');
    var add_24 = objectStore_41.add({f0_y: '<boolean>', f1_i: '<boolean>', f2_s: '<null>', f3_n: '<number>'}, 'ATS');
    var add_25 = objectStore_41.add({f0_l: '<boolean>', f1_e: '<boolean>', f2_j: '<boolean>'}, 'lVWrpKP');
    var count_28 = objectStore_41.count();
    var put_24 = objectStore_41.put({f0_i: '<object>', f1_v: '<number>', f2_s: '<null>', f3_z: '<string>', f4_y: '<array>', f5_v: '<object>', f6_j: '<string>', f7_k: '<object>', f8_a: '<object>'}, 'Pyqcsl');
    var clear_30 = objectStore_41.clear();
    var add_26 = objectStore_41.add({f0_x: '<object>', f1_e: '<null>', f2_n: '<array>'}, 'ApYiDQVMqxdH');
    var clear_31 = objectStore_41.clear();
    var clear_32 = objectStore_41.clear();
    var get_22;
    try{
        KeyRange_116 = IDBKeyRange.bound('ATS', 'ApYiDQVMqxdH', false, true);
        get_22 = objectStore_41.get(KeyRange_116);
    }
    catch (e){
    }

    var get_23;
    try{
        KeyRange_118 = IDBKeyRange.only('lVWrpKP');
        get_23 = objectStore_41.get(KeyRange_118);
    }
    catch (e){
    }

    var count_29;
    try{
        KeyRange_120 = IDBKeyRange.only('ApYiDQVMqxdH');
        count_29 = objectStore_41.count(KeyRange_120);
    }
    catch (e){
    }

    var clear_33 = objectStore_41.clear();
    var count_30;
    try{
        KeyRange_122 = IDBKeyRange.bound('ATS', 'gAojbhPeAEk', false, false);
        count_30 = objectStore_41.count(KeyRange_122);
    }
    catch (e){
    }

    var get_24;
    try{
        KeyRange_124 = IDBKeyRange.bound('ApYiDQVMqxdH', 'lVWrpKP', true, true);
        get_24 = objectStore_41.get(KeyRange_124);
    }
    catch (e){
    }

    var add_27 = objectStore_41.add({f0_e: '<boolean>'}, 'bPTTM');
    var get_25;
    try{
        KeyRange_126 = IDBKeyRange.bound('ApYiDQVMqxdH', 'FSwOrBRxD', false, true);
        get_25 = objectStore_41.get(KeyRange_126);
    }
    catch (e){
    }

    var add_28 = objectStore_41.add({f0_e: '<null>', f1_v: '<array>', f2_e: '<string>', f3_p: '<number>'}, 'YuppkexPsvCI');
    var getAllKeys_13;
    try{
        KeyRange_128 = IDBKeyRange.only('bPTTM');
        getAllKeys_13 = objectStore_41.getAllKeys(KeyRange_128, 1502783999);
    }
    catch (e){
        KeyRange_129 = IDBKeyRange.only('Pyqcsl');
        getAllKeys_13 = objectStore_41.getAllKeys(KeyRange_129);
    }

    var getAllKeys_14 = objectStore_41.getAllKeys(3575201599);
    var get_26;
    try{
        KeyRange_130 = IDBKeyRange.bound('lVWrpKP', 'ATS', true, false);
        get_26 = objectStore_41.get(KeyRange_130);
    }
    catch (e){
    }

    txn_35.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_35.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_35.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_36 = db.transaction(['objectStore_37', 'objectStore_45'], 'readonly', {durability:"relaxed"})
    var objectStore_45 = txn_36.objectStore('objectStore_45');
    txn_36.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_36.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_36.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_37 = db.transaction(['objectStore_37', 'objectStore_36'], 'readwrite', {durability:"relaxed"})
    var objectStore_36 = txn_37.objectStore('objectStore_36');
    var put_25 = objectStore_36.put({f0_m: '<null>', f1_f: '<boolean>', f2_o: '<boolean>', f3_m: '<boolean>', f4_i: '<object>', f5_e: '<boolean>', f6_g: '<array>', f7_f: '<number>', f8_m: '<number>', f9_j: '<object>'}, 'WhqP');
    var get_27;
    try{
        KeyRange_132 = IDBKeyRange.bound('MHpiu', 'PADfSaYzbdkf', false, false);
        get_27 = objectStore_36.get(KeyRange_132);
    }
    catch (e){
    }

    var getAllKeys_15;
    try{
        KeyRange_134 = IDBKeyRange.bound('WhqP', 'MHpiu', false, true);
        getAllKeys_15 = objectStore_36.getAllKeys(KeyRange_134, 1987656536);
    }
    catch (e){
        KeyRange_135 = IDBKeyRange.only('cbRhjJpYC');
        getAllKeys_15 = objectStore_36.getAllKeys(KeyRange_135);
    }

    var count_31;
    try{
        KeyRange_136 = IDBKeyRange.bound('cbRhjJpYC', 'PADfSaYzbdkf', false, false);
        count_31 = objectStore_36.count(KeyRange_136);
    }
    catch (e){
    }

    var get_28;
    try{
        KeyRange_138 = IDBKeyRange.bound('PADfSaYzbdkf', 'MHpiu', true, true);
        get_28 = objectStore_36.get(KeyRange_138);
    }
    catch (e){
    }

    var count_32;
    try{
        KeyRange_140 = IDBKeyRange.only('PADfSaYzbdkf');
        count_32 = objectStore_36.count(KeyRange_140);
    }
    catch (e){
    }

    var count_33;
    try{
        KeyRange_142 = IDBKeyRange.only('PADfSaYzbdkf');
        count_33 = objectStore_36.count(KeyRange_142);
    }
    catch (e){
    }

    var put_26 = objectStore_36.put({f0_l: '<null>', f1_m: '<null>', f2_a: '<object>', f3_m: '<string>', f4_m: '<object>', f5_y: '<string>', f6_j: '<boolean>', f7_w: '<boolean>', f8_z: '<number>'}, 'MWI');
    var clear_34 = objectStore_36.clear();
    var get_29;
    try{
        KeyRange_144 = IDBKeyRange.only('MWI');
        get_29 = objectStore_36.get(KeyRange_144);
    }
    catch (e){
    }

    var delete_8;
    try{
        KeyRange_146 = IDBKeyRange.only('MWI');
        delete_8 = objectStore_36.delete(KeyRange_146);
    }
    catch (e){
    }

    var count_34;
    try{
        KeyRange_148 = IDBKeyRange.lowerBound('WhqP', true);
        count_34 = objectStore_36.count(KeyRange_148);
    }
    catch (e){
    }

    var get_30;
    try{
        KeyRange_150 = IDBKeyRange.only('MWI');
        get_30 = objectStore_36.get(KeyRange_150);
    }
    catch (e){
    }

    var getAll_12;
    try{
        KeyRange_152 = IDBKeyRange.lowerBound('MWI', false);
        getAll_12 = objectStore_36.getAll(KeyRange_152);
    }
    catch (e){
        KeyRange_153 = IDBKeyRange.only('MWI');
        getAll_12 = objectStore_36.getAll(KeyRange_153);
    }

    var add_29 = objectStore_36.add({f0_v: '<object>', f1_m: '<number>', f2_j: '<array>', f3_o: '<string>'}, 'tTaR');
    var count_35;
    try{
        KeyRange_154 = IDBKeyRange.only('tTaR');
        count_35 = objectStore_36.count(KeyRange_154);
    }
    catch (e){
    }

    var put_27 = objectStore_36.put({f0_u: '<string>', f1_y: '<null>', f2_d: '<number>', f3_h: '<null>', f4_k: '<array>', f5_w: '<string>', f6_i: '<number>', f7_p: '<array>', f8_j: '<array>'}, 'oeIzXFOQ');
    var clear_35 = objectStore_36.clear();
    var getAllKeys_16;
    try{
        KeyRange_156 = IDBKeyRange.only('MHpiu');
        getAllKeys_16 = objectStore_36.getAllKeys(KeyRange_156, 1621156773);
    }
    catch (e){
        KeyRange_157 = IDBKeyRange.only('cbRhjJpYC');
        getAllKeys_16 = objectStore_36.getAllKeys(KeyRange_157);
    }

    var delete_9;
    try{
        KeyRange_158 = IDBKeyRange.only('WhqP');
        delete_9 = objectStore_36.delete(KeyRange_158);
    }
    catch (e){
    }

    var count_36;
    try{
        KeyRange_160 = IDBKeyRange.bound('WhqP', 'WhqP', false, false);
        count_36 = objectStore_36.count(KeyRange_160);
    }
    catch (e){
    }

    var clear_36 = objectStore_36.clear();
    txn_37.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_37.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_37.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_38 = db.transaction(['objectStore_39', 'objectStore_34', 'objectStore_41', 'objectStore_33'], 'readonly', {durability:"relaxed"})
    var objectStore_34 = txn_38.objectStore('objectStore_34');
    var getAllKeys_17;
    try{
        KeyRange_162 = IDBKeyRange.bound('FPxTgyt', 'vcWJkxKb', false, false);
        getAllKeys_17 = objectStore_34.getAllKeys(KeyRange_162);
    }
    catch (e){
        KeyRange_163 = IDBKeyRange.only('YWZU');
        getAllKeys_17 = objectStore_34.getAllKeys(KeyRange_163);
    }

    var get_31;
    try{
        KeyRange_164 = IDBKeyRange.only('vcWJkxKb');
        get_31 = objectStore_34.get(KeyRange_164);
    }
    catch (e){
    }

    var count_37;
    try{
        KeyRange_166 = IDBKeyRange.only('goQVH');
        count_37 = objectStore_34.count(KeyRange_166);
    }
    catch (e){
    }

    var get_32;
    try{
        KeyRange_168 = IDBKeyRange.only('goQVH');
        get_32 = objectStore_34.get(KeyRange_168);
    }
    catch (e){
    }

    var getAllKeys_18;
    try{
        KeyRange_170 = IDBKeyRange.bound('goQVH', 'FPxTgyt', false, true);
        getAllKeys_18 = objectStore_34.getAllKeys(KeyRange_170, 395421070);
    }
    catch (e){
        KeyRange_171 = IDBKeyRange.only('YWZU');
        getAllKeys_18 = objectStore_34.getAllKeys(KeyRange_171);
    }

    var getAll_13 = objectStore_34.getAll(814600968);
    var getAll_14;
    try{
        KeyRange_172 = IDBKeyRange.only('FPxTgyt');
        getAll_14 = objectStore_34.getAll(KeyRange_172, 410291607);
    }
    catch (e){
        KeyRange_173 = IDBKeyRange.only('goQVH');
        getAll_14 = objectStore_34.getAll(KeyRange_173);
    }

    var getAllKeys_19 = objectStore_34.getAllKeys();
    var count_38 = objectStore_34.count();
    var getAllKeys_20 = objectStore_34.getAllKeys();
    var get_33;
    try{
        KeyRange_174 = IDBKeyRange.only('FPxTgyt');
        get_33 = objectStore_34.get(KeyRange_174);
    }
    catch (e){
    }

    var get_34;
    try{
        KeyRange_176 = IDBKeyRange.bound('bLphrlD', 'goQVH', true, false);
        get_34 = objectStore_34.get(KeyRange_176);
    }
    catch (e){
    }

    var index_2 = objectStore_34.index('index_33');
    var count_39 = objectStore_34.count();
    var get_35;
    try{
        KeyRange_178 = IDBKeyRange.bound('eIPI', 'vcWJkxKb', false, true);
        get_35 = objectStore_34.get(KeyRange_178);
    }
    catch (e){
    }

    var getAllKeys_21;
    try{
        KeyRange_180 = IDBKeyRange.only('FPxTgyt');
        getAllKeys_21 = objectStore_34.getAllKeys(KeyRange_180);
    }
    catch (e){
        KeyRange_181 = IDBKeyRange.only('ifg');
        getAllKeys_21 = objectStore_34.getAllKeys(KeyRange_181);
    }

    var count_40 = objectStore_34.count();
    var count_41 = objectStore_34.count();
    var getAll_15;
    try{
        KeyRange_182 = IDBKeyRange.only('FPxTgyt');
        getAll_15 = objectStore_34.getAll(KeyRange_182, 1473337631);
    }
    catch (e){
        KeyRange_183 = IDBKeyRange.only('YWZU');
        getAll_15 = objectStore_34.getAll(KeyRange_183);
    }

    var getAllKeys_22;
    try{
        KeyRange_184 = IDBKeyRange.bound('goQVH', 'FPxTgyt', false, true);
        getAllKeys_22 = objectStore_34.getAllKeys(KeyRange_184, 308552972);
    }
    catch (e){
        KeyRange_185 = IDBKeyRange.only('goQVH');
        getAllKeys_22 = objectStore_34.getAllKeys(KeyRange_185);
    }

    txn_38.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_38.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_38.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_39 = db.transaction(['objectStore_43'], 'readonly', {durability:"relaxed"})
    var objectStore_43 = txn_39.objectStore('objectStore_43');
    txn_39.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_39.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_39.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8903')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};