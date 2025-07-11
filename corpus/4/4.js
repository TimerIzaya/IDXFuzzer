let db;
const openRequest = window.indexedDB.open('str_6301', 5640154515606914)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_37', {keypath: 'ojpjRpZlvL'});
    var add_0 = objectStore_0.add({f0_m: '<object>', f1_d: '<boolean>', f2_i: '<number>', f3_i: '<number>', f4_f: '<boolean>', f5_w: '<string>', f6_v: '<boolean>', f7_m: '<boolean>', f8_w: '<object>'}, 'TQovjbF');
    var clear_0 = objectStore_0.clear();
    var put_0 = objectStore_0.put({f0_g: '<number>', f1_y: '<number>', f2_e: '<string>', f3_c: '<number>', f4_k: '<object>', f5_z: '<null>', f6_h: '<object>', f7_r: '<array>'}, 'bWXBOLh');
    var clear_1 = objectStore_0.clear();
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_0.clear();
    var index_33 = objectStore_0.createIndex('index_33', 'test', {unique: false});
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var delete_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('TQovjbF', 'bWXBOLh', false, true);
        delete_0 = objectStore_0.delete(KeyRange_0);
    }
    catch (e){
    }

    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.only('TQovjbF');
        get_0 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var delete_1;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('TQovjbF', true);
        delete_1 = objectStore_0.delete(KeyRange_4);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('TQovjbF', false);
        get_1 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var index_34 = objectStore_0.createIndex('index_34', 'test', {multiEntry: false});
    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('bWXBOLh', true);
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('bWXBOLh');
        getAllKeys_1 = objectStore_0.getAllKeys(KeyRange_9);
    }

    var clear_4 = objectStore_0.clear();
    var add_1 = objectStore_0.add({f0_y: '<null>', f1_w: '<boolean>', f2_r: '<object>', f3_a: '<array>'}, 'IuoH');
    var objectStore_1 = db.createObjectStore('objectStore_38');
    var objectStore_2 = db.createObjectStore('objectStore_39', {keypath: 'ZSiKiGWhL', autoIncrement: true});
    var put_1 = objectStore_1.put({f0_a: '<string>'}, 'dhqVGSnN');
    var index_35 = objectStore_2.createIndex('index_35', 'test', {unique: false});
    var add_2 = objectStore_2.add({f0_f: '<number>', f1_y: '<number>', f2_h: '<null>'}, 'SRaFiWPKy');
    var add_3 = objectStore_2.add({f0_p: '<number>', f1_k: '<object>', f2_n: '<array>', f3_g: '<object>', f4_t: '<object>', f5_r: '<string>', f6_n: '<string>'}, 'nxXulbpDi');
    var add_4 = objectStore_2.add({f0_b: '<number>', f1_k: '<array>', f2_n: '<array>', f3_z: '<array>', f4_x: '<string>'}, 'xebxr');
    var get_2;
    try{
        KeyRange_10 = IDBKeyRange.bound('SRaFiWPKy', 'xebxr', true, true);
        get_2 = objectStore_2.get(KeyRange_10);
    }
    catch (e){
    }

    var getAll_0 = objectStore_0.getAll(3850100053);
    var objectStore_3 = db.createObjectStore('objectStore_40', {autoIncrement: false});
    db.deleteObjectStore('objectStore_37')
    var add_5 = objectStore_1.add({f0_z: '<number>', f1_j: '<object>', f2_k: '<number>', f3_l: '<null>', f4_d: '<boolean>', f5_z: '<boolean>', f6_w: '<number>', f7_m: '<object>', f8_v: '<array>'}, 'OcgHbiAyd');
    var add_6 = objectStore_1.add({f0_r: '<null>', f1_b: '<null>', f2_v: '<boolean>'}, 'nGCwV');
    var index_36 = objectStore_2.createIndex('index_36', 'test', {unique: true, multiEntry: true});
    var objectStore_4 = db.createObjectStore('objectStore_41', {keypath: 'pbMmWaka.wisFH.DyI.iKCFcI.iiqpxZTmh.PeCMcZ.IHYLfjWEuz', autoIncrement: true});
    var objectStore_5 = db.createObjectStore('objectStore_42', {keypath: 'jEnPwMp', autoIncrement: true});
    var getAllKeys_2 = objectStore_2.getAllKeys(3860676566);
    db.deleteObjectStore('objectStore_39')
    var put_2 = objectStore_5.put({f0_g: '<boolean>', f1_p: '<null>', f2_s: '<null>', f3_g: '<boolean>', f4_u: '<null>'}, 'WhFwSsx');
    var count_0;
    try{
        KeyRange_12 = IDBKeyRange.only('dhqVGSnN');
        count_0 = objectStore_1.count(KeyRange_12);
    }
    catch (e){
    }

    var objectStore_6 = db.createObjectStore('objectStore_43', {keypath: 'XcpZmQ'});
    var put_3 = objectStore_3.put({f0_n: '<string>', f1_d: '<null>', f2_y: '<number>', f3_h: '<null>', f4_n: '<array>'}, 'dYURisIAoo');
    var clear_5 = objectStore_5.clear();
    var count_1 = objectStore_3.count();
    var objectStore_7 = db.createObjectStore('objectStore_44', {keypath: 'iDBFwfNStX.rctApAcqKF.SlaBhQo.lmXPbhp.jJlu.rGjIhDJc'});
    var put_4 = objectStore_1.put({f0_e: '<boolean>', f1_j: '<string>', f2_u: '<string>', f3_j: '<object>', f4_v: '<array>', f5_z: '<string>', f6_c: '<array>', f7_t: '<number>', f8_k: '<array>', f9_d: '<null>'}, 'aDljp');
    var delete_2;
    try{
        KeyRange_14 = IDBKeyRange.bound('OcgHbiAyd', 'dhqVGSnN', true, true);
        delete_2 = objectStore_1.delete(KeyRange_14);
    }
    catch (e){
    }

    var put_5 = objectStore_6.put({f0_s: '<number>', f1_j: '<array>'}, 'GBFmOpKSI');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('WhFwSsx', 'WhFwSsx', false, true);
        get_3 = objectStore_5.get(KeyRange_16);
    }
    catch (e){
    }

    var put_6 = objectStore_1.put({f0_a: '<array>', f1_d: '<number>'}, 'tnexEjYuH');
    var clear_6 = objectStore_6.clear();
    var add_7 = objectStore_3.add({f0_d: '<string>', f1_x: '<string>', f2_o: '<number>', f3_n: '<array>', f4_d: '<boolean>'}, 'pcXPc');
    var clear_7 = objectStore_3.clear();
    var clear_8 = objectStore_5.clear();
    var objectStore_8 = db.createObjectStore('objectStore_45', {keypath: 'bLxjwkhQnJn.FNRBsnUroGcv.tMjmjcPGaiaP.wVkvHbVcj.BsdzgTrxFO.LTsLWrJGh'});
    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.only('GBFmOpKSI');
        get_4 = objectStore_6.get(KeyRange_18);
    }
    catch (e){
    }

    var getAllKeys_3 = objectStore_1.getAllKeys();
    var objectStore_9 = db.createObjectStore('objectStore_46');
    var getAllKeys_4;
    try{
        KeyRange_20 = IDBKeyRange.bound('dYURisIAoo', 'dYURisIAoo', false, true);
        getAllKeys_4 = objectStore_3.getAllKeys(KeyRange_20, 92750676);
    }
    catch (e){
        KeyRange_21 = IDBKeyRange.only('pcXPc');
        getAllKeys_4 = objectStore_3.getAllKeys(KeyRange_21);
    }

    var getAll_1 = objectStore_6.getAll();
    var objectStore_10 = db.createObjectStore('objectStore_47', {autoIncrement: false});
    var put_7 = objectStore_5.put({f0_d: '<object>', f1_f: '<array>', f2_c: '<null>', f3_f: '<object>', f4_m: '<boolean>'}, 'qXRgKm');
    var clear_9 = objectStore_6.clear();
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('pcXPc', false);
        get_5 = objectStore_3.get(KeyRange_22);
    }
    catch (e){
    }

    db.deleteObjectStore('objectStore_38')
    var add_8 = objectStore_5.add({f0_l: '<number>', f1_v: '<null>', f2_k: '<null>', f3_h: '<object>', f4_w: '<array>', f5_o: '<boolean>'}, 'jqdlBgzurab');
    var add_9 = objectStore_8.add({f0_j: '<object>'}, 'PJeAJq');
    var clear_10 = objectStore_5.clear();
    var index_37 = objectStore_8.createIndex('index_37', 'test', {multiEntry: false});
    var count_2 = objectStore_3.count();
    db.deleteObjectStore('objectStore_42')
    var clear_11 = objectStore_7.clear();
    var index_38 = objectStore_4.createIndex('index_38', 'test', {unique: true, multiEntry: false});
    var clear_12 = objectStore_6.clear();
    var index_39 = objectStore_10.createIndex('index_39', 'test', {multiEntry: false});
    var objectStore_11 = db.createObjectStore('objectStore_48', {keypath: 'VjeSvyUD'});
    var index_40 = objectStore_10.createIndex('index_40', 'test', {unique: true});
    var count_3 = objectStore_8.count();
    var add_10 = objectStore_8.add({f0_g: '<number>', f1_r: '<number>', f2_o: '<array>', f3_o: '<object>', f4_t: '<array>', f5_l: '<number>'}, 'vtuNTqv');
    var objectStore_12 = db.createObjectStore('objectStore_49', {keypath: 'odWlCdTc', autoIncrement: true});
    var objectStore_13 = db.createObjectStore('objectStore_50');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_4 = db.transaction(['objectStore_47', 'objectStore_40', 'objectStore_50', 'objectStore_41', 'objectStore_43', 'objectStore_48'], 'readonly', {durability:"strict"})
    var objectStore_40;
    txn_4.objectStore('objectStore_40')
    var delete_3;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('dYURisIAoo', true);
        delete_3 = objectStore_40.delete(KeyRange_24);
    }
    catch (e){
    }

    var put_8 = objectStore_40.put({f0_x: '<array>', f1_f: '<boolean>', f2_l: '<array>', f3_j: '<array>', f4_f: '<number>', f5_z: '<boolean>', f6_x: '<number>', f7_f: '<boolean>'}, 'HxhDKg');
    var put_9 = objectStore_40.put({f0_n: '<string>', f1_v: '<object>', f2_v: '<boolean>'}, 'GdQYtAFQrzkB');
    var clear_13 = objectStore_40.clear();
    var delete_4;
    try{
        KeyRange_26 = IDBKeyRange.only('dYURisIAoo');
        delete_4 = objectStore_40.delete(KeyRange_26);
    }
    catch (e){
    }

    var clear_14 = objectStore_40.clear();
    var getAllKeys_5;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('HxhDKg', true);
        getAllKeys_5 = objectStore_40.getAllKeys(KeyRange_28, 782965547);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('HxhDKg');
        getAllKeys_5 = objectStore_40.getAllKeys(KeyRange_29);
    }

    var clear_15 = objectStore_40.clear();
    var delete_5;
    try{
        KeyRange_30 = IDBKeyRange.only('dYURisIAoo');
        delete_5 = objectStore_40.delete(KeyRange_30);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('GdQYtAFQrzkB', 'pcXPc', false, true);
        count_4 = objectStore_40.count(KeyRange_32);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_34 = IDBKeyRange.bound('GdQYtAFQrzkB', 'pcXPc', true, true);
        count_5 = objectStore_40.count(KeyRange_34);
    }
    catch (e){
    }

    var put_10 = objectStore_40.put({f0_c: '<object>', f1_d: '<string>', f2_o: '<boolean>', f3_y: '<boolean>', f4_d: '<boolean>', f5_q: '<object>', f6_x: '<object>', f7_v: '<object>', f8_g: '<array>'}, 'EGvfbEWFoLBX');
    var put_11 = objectStore_40.put({f0_b: '<number>'}, 'vEIxpCQG');
    var count_6 = objectStore_40.count();
    var clear_16 = objectStore_40.clear();
    var put_12 = objectStore_40.put({f0_m: '<string>', f1_w: '<number>', f2_i: '<string>', f3_i: '<string>', f4_o: '<object>', f5_h: '<null>', f6_l: '<boolean>', f7_j: '<number>', f8_y: '<null>', f9_r: '<boolean>'}, 'OlclUgf');
    var add_11 = objectStore_40.add({f0_r: '<object>', f1_r: '<boolean>', f2_x: '<boolean>', f3_l: '<string>', f4_i: '<number>', f5_z: '<number>', f6_l: '<string>'}, 'DGvHtZpmSK');
    var put_13 = objectStore_40.put({f0_i: '<number>', f1_p: '<null>', f2_u: '<array>', f3_m: '<null>', f4_b: '<string>', f5_u: '<array>'}, 'DRM');
    var clear_17 = objectStore_40.clear();
    var add_12 = objectStore_40.add({f0_a: '<array>', f1_v: '<string>', f2_j: '<boolean>'}, 'LUPn');
    var add_13 = objectStore_40.add({f0_h: '<number>', f1_y: '<string>', f2_y: '<boolean>', f3_d: '<object>'}, 'CJxHy');
    var getAll_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('DRM', 'pcXPc', false, true);
        getAll_2 = objectStore_40.getAll(KeyRange_36, 1853447528);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('GdQYtAFQrzkB');
        getAll_2 = objectStore_40.getAll(KeyRange_37);
    }

    var get_6;
    try{
        KeyRange_38 = IDBKeyRange.bound('HxhDKg', 'GdQYtAFQrzkB', true, true);
        get_6 = objectStore_40.get(KeyRange_38);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_40 = IDBKeyRange.bound('pcXPc', 'EGvfbEWFoLBX', false, false);
        getAllKeys_6 = objectStore_40.getAllKeys(KeyRange_40);
    }
    catch (e){
        KeyRange_41 = IDBKeyRange.only('dYURisIAoo');
        getAllKeys_6 = objectStore_40.getAllKeys(KeyRange_41);
    }

    var count_7 = objectStore_40.count();
    var get_7;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('CJxHy', false);
        get_7 = objectStore_40.get(KeyRange_42);
    }
    catch (e){
    }

    var clear_18 = objectStore_40.clear();
    var clear_19 = objectStore_40.clear();
    var get_8;
    try{
        KeyRange_44 = IDBKeyRange.only('vEIxpCQG');
        get_8 = objectStore_40.get(KeyRange_44);
    }
    catch (e){
    }

    var count_8 = objectStore_40.count();
    var add_14 = objectStore_40.add({f0_i: '<null>', f1_u: '<array>', f2_f: '<string>', f3_s: '<null>', f4_b: '<null>', f5_b: '<object>', f6_w: '<boolean>', f7_l: '<array>'}, 'bjzCP');
    var add_15 = objectStore_40.add({f0_p: '<array>', f1_l: '<number>', f2_d: '<boolean>'}, 'nTNHa');
    var put_14 = objectStore_40.put({f0_u: '<boolean>', f1_y: '<string>', f2_g: '<object>', f3_c: '<number>', f4_b: '<number>'}, 'oHDuNpASH');
    var clear_20 = objectStore_40.clear();
    var getAllKeys_7 = objectStore_40.getAllKeys();
    var clear_21 = objectStore_40.clear();
    var clear_22 = objectStore_40.clear();
    var getAllKeys_8;
    try{
        KeyRange_46 = IDBKeyRange.bound('EGvfbEWFoLBX', 'EGvfbEWFoLBX', false, true);
        getAllKeys_8 = objectStore_40.getAllKeys(KeyRange_46, 2676957125);
    }
    catch (e){
        KeyRange_47 = IDBKeyRange.only('dYURisIAoo');
        getAllKeys_8 = objectStore_40.getAllKeys(KeyRange_47);
    }

    var clear_23 = objectStore_40.clear();
    var count_9 = objectStore_40.count();
    var get_9;
    try{
        KeyRange_48 = IDBKeyRange.only('vEIxpCQG');
        get_9 = objectStore_40.get(KeyRange_48);
    }
    catch (e){
    }

    var add_16 = objectStore_40.add({f0_o: '<boolean>'}, 'kevGCIpe');
    var count_10;
    try{
        KeyRange_50 = IDBKeyRange.only('OlclUgf');
        count_10 = objectStore_40.count(KeyRange_50);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_52 = IDBKeyRange.bound('HxhDKg', 'DRM', false, false);
        get_10 = objectStore_40.get(KeyRange_52);
    }
    catch (e){
    }

    var count_11 = objectStore_40.count();
    var put_15 = objectStore_40.put({f0_g: '<array>', f1_g: '<number>', f2_c: '<object>', f3_q: '<array>', f4_u: '<number>', f5_a: '<object>', f6_c: '<array>', f7_m: '<object>', f8_y: '<null>'}, 'qmPW');
    var count_12 = objectStore_40.count();
    var add_17 = objectStore_40.add({f0_s: '<array>', f1_f: '<number>', f2_i: '<array>', f3_z: '<string>', f4_b: '<number>', f5_n: '<boolean>', f6_f: '<string>'}, 'BtEoCCA');
    var clear_24 = objectStore_40.clear();
    var clear_25 = objectStore_40.clear();
    var count_13;
    try{
        KeyRange_54 = IDBKeyRange.lowerBound('GdQYtAFQrzkB', false);
        count_13 = objectStore_40.count(KeyRange_54);
    }
    catch (e){
    }

    var count_14 = objectStore_40.count();
    var clear_26 = objectStore_40.clear();
    var get_11;
    try{
        KeyRange_56 = IDBKeyRange.bound('GdQYtAFQrzkB', 'CJxHy', false, true);
        get_11 = objectStore_40.get(KeyRange_56);
    }
    catch (e){
    }

    var getAll_3 = objectStore_40.getAll(2595679141);
    var clear_27 = objectStore_40.clear();
    var get_12;
    try{
        KeyRange_58 = IDBKeyRange.bound('BtEoCCA', 'qmPW', false, true);
        get_12 = objectStore_40.get(KeyRange_58);
    }
    catch (e){
    }

    var add_18 = objectStore_40.add({f0_x: '<object>'}, 'AQROcL');
    var put_16 = objectStore_40.put({f0_i: '<string>', f1_k: '<object>', f2_a: '<array>', f3_o: '<null>', f4_f: '<object>', f5_k: '<null>', f6_c: '<string>', f7_i: '<object>'}, 'UKXmGUsKrNn');
    var getAll_4 = objectStore_40.getAll(1921748494);
    var clear_28 = objectStore_40.clear();
    var add_19 = objectStore_40.add({f0_y: '<boolean>'}, 'vqbASgTNjk');
    var clear_29 = objectStore_40.clear();
    var clear_30 = objectStore_40.clear();
    var getAllKeys_9;
    try{
        KeyRange_60 = IDBKeyRange.bound('dYURisIAoo', 'HxhDKg', true, true);
        getAllKeys_9 = objectStore_40.getAllKeys(KeyRange_60);
    }
    catch (e){
        KeyRange_61 = IDBKeyRange.only('OlclUgf');
        getAllKeys_9 = objectStore_40.getAllKeys(KeyRange_61);
    }

    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.bound('vqbASgTNjk', 'LUPn', false, true);
        get_13 = objectStore_40.get(KeyRange_62);
    }
    catch (e){
    }

    var clear_31 = objectStore_40.clear();
    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.bound('UKXmGUsKrNn', 'BtEoCCA', false, false);
        get_14 = objectStore_40.get(KeyRange_64);
    }
    catch (e){
    }

    var getAllKeys_10;
    try{
        KeyRange_66 = IDBKeyRange.only('LUPn');
        getAllKeys_10 = objectStore_40.getAllKeys(KeyRange_66, 947044731);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('GdQYtAFQrzkB');
        getAllKeys_10 = objectStore_40.getAllKeys(KeyRange_67);
    }

    var add_20 = objectStore_40.add({f0_d: '<boolean>', f1_t: '<boolean>', f2_k: '<boolean>', f3_v: '<number>', f4_j: '<object>', f5_y: '<object>', f6_t: '<boolean>', f7_a: '<array>', f8_s: '<boolean>', f9_p: '<string>'}, 'hmwsJDY');
    var add_21 = objectStore_40.add({f0_a: '<string>', f1_p: '<boolean>', f2_o: '<object>', f3_k: '<boolean>', f4_k: '<object>'}, 'PnXe');
    var get_15;
    try{
        KeyRange_68 = IDBKeyRange.lowerBound('BtEoCCA', true);
        get_15 = objectStore_40.get(KeyRange_68);
    }
    catch (e){
    }

    var clear_32 = objectStore_40.clear();
    var count_15 = objectStore_40.count();
    var get_16;
    try{
        KeyRange_70 = IDBKeyRange.only('AQROcL');
        get_16 = objectStore_40.get(KeyRange_70);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('vEIxpCQG', true);
        get_17 = objectStore_40.get(KeyRange_72);
    }
    catch (e){
    }

    var add_22 = objectStore_40.add({f0_m: '<null>', f1_w: '<object>', f2_t: '<number>', f3_w: '<object>'}, 'ZvnNDY');
    var add_23 = objectStore_40.add({f0_w: '<string>', f1_w: '<boolean>', f2_b: '<boolean>', f3_l: '<number>', f4_h: '<boolean>', f5_n: '<null>', f6_a: '<string>', f7_y: '<number>', f8_i: '<string>', f9_h: '<object>'}, 'jFNxSoOslBL');
    var getAllKeys_11 = objectStore_40.getAllKeys(209188598);
    var get_18;
    try{
        KeyRange_74 = IDBKeyRange.bound('pcXPc', 'UKXmGUsKrNn', false, false);
        get_18 = objectStore_40.get(KeyRange_74);
    }
    catch (e){
    }

    var put_17 = objectStore_40.put({f0_v: '<boolean>', f1_x: '<array>', f2_u: '<string>', f3_y: '<boolean>', f4_m: '<array>', f5_r: '<array>', f6_f: '<array>'}, 'CfKMMF');
    var count_16 = objectStore_40.count();
    var count_17 = objectStore_40.count();
    var count_18;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('qmPW', false);
        count_18 = objectStore_40.count(KeyRange_76);
    }
    catch (e){
    }

    var add_24 = objectStore_40.add({f0_i: '<array>', f1_w: '<object>', f2_k: '<string>'}, 'VxGSJcW');
    var getAll_5;
    try{
        KeyRange_78 = IDBKeyRange.bound('vqbASgTNjk', 'kevGCIpe', false, false);
        getAll_5 = objectStore_40.getAll(KeyRange_78, 2370623921);
    }
    catch (e){
        KeyRange_79 = IDBKeyRange.only('qmPW');
        getAll_5 = objectStore_40.getAll(KeyRange_79);
    }

    var delete_6;
    try{
        KeyRange_80 = IDBKeyRange.only('DRM');
        delete_6 = objectStore_40.delete(KeyRange_80);
    }
    catch (e){
    }

    var count_19 = objectStore_40.count();
    var count_20;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('dYURisIAoo', true);
        count_20 = objectStore_40.count(KeyRange_82);
    }
    catch (e){
    }

    var clear_33 = objectStore_40.clear();
    var get_19;
    try{
        KeyRange_84 = IDBKeyRange.bound('vEIxpCQG', 'VxGSJcW', false, true);
        get_19 = objectStore_40.get(KeyRange_84);
    }
    catch (e){
    }

    var put_18 = objectStore_40.put({f0_k: '<null>', f1_n: '<string>', f2_y: '<null>', f3_j: '<boolean>', f4_n: '<object>', f5_e: '<boolean>'}, 'zebFf');
    var clear_34 = objectStore_40.clear();
    var add_25 = objectStore_40.add({f0_g: '<boolean>', f1_r: '<number>', f2_y: '<number>', f3_z: '<boolean>', f4_j: '<null>', f5_f: '<number>'}, 'YXU');
    var count_21;
    try{
        KeyRange_86 = IDBKeyRange.only('bjzCP');
        count_21 = objectStore_40.count(KeyRange_86);
    }
    catch (e){
    }

    var count_22 = objectStore_40.count();
    var count_23;
    try{
        KeyRange_88 = IDBKeyRange.bound('CJxHy', 'kevGCIpe', true, false);
        count_23 = objectStore_40.count(KeyRange_88);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('jFNxSoOslBL', true);
        get_20 = objectStore_40.get(KeyRange_90);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_92 = IDBKeyRange.bound('kevGCIpe', 'CJxHy', false, false);
        get_21 = objectStore_40.get(KeyRange_92);
    }
    catch (e){
    }

    var count_24;
    try{
        KeyRange_94 = IDBKeyRange.lowerBound('hmwsJDY', false);
        count_24 = objectStore_40.count(KeyRange_94);
    }
    catch (e){
    }

    var getAll_6;
    try{
        KeyRange_96 = IDBKeyRange.bound('AQROcL', 'UKXmGUsKrNn', true, true);
        getAll_6 = objectStore_40.getAll(KeyRange_96);
    }
    catch (e){
        KeyRange_97 = IDBKeyRange.only('hmwsJDY');
        getAll_6 = objectStore_40.getAll(KeyRange_97);
    }

    var clear_35 = objectStore_40.clear();
    var count_25 = objectStore_40.count();
    var clear_36 = objectStore_40.clear();
    var get_22;
    try{
        KeyRange_98 = IDBKeyRange.bound('bjzCP', 'qmPW', true, true);
        get_22 = objectStore_40.get(KeyRange_98);
    }
    catch (e){
    }

    var getAllKeys_12 = objectStore_40.getAllKeys(223697619);
    var getAll_7 = objectStore_40.getAll(2731770956);
    var count_26;
    try{
        KeyRange_100 = IDBKeyRange.bound('UKXmGUsKrNn', 'dYURisIAoo', false, true);
        count_26 = objectStore_40.count(KeyRange_100);
    }
    catch (e){
    }

    var count_27;
    try{
        KeyRange_102 = IDBKeyRange.bound('nTNHa', 'CJxHy', true, false);
        count_27 = objectStore_40.count(KeyRange_102);
    }
    catch (e){
    }

    var add_26 = objectStore_40.add({f0_s: '<number>', f1_p: '<string>', f2_o: '<boolean>'}, 'IKg');
    txn_4.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_4.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_4.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8661')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};