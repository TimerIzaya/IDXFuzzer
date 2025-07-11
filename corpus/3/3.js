let db;
const openRequest = window.indexedDB.open('str_1645', 3186759414028102)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_26', {autoIncrement: true});
    var put_0 = objectStore_0.put({f0_e: '<boolean>', f1_u: '<object>', f2_l: '<array>', f3_q: '<null>'}, 'lbvhfTww');
    var add_0 = objectStore_0.add({f0_r: '<object>', f1_j: '<null>', f2_a: '<number>', f3_p: '<boolean>'}, 'eRTpkmWvj');
    var add_1 = objectStore_0.add({f0_f: '<object>', f1_s: '<number>', f2_i: '<object>', f3_l: '<number>', f4_d: '<boolean>', f5_r: '<array>', f6_i: '<object>'}, 'shtrFrhUCiFX');
    var index_20 = objectStore_0.createIndex('index_20', 'test');
    var index_0 = objectStore_0.index('index_20');
    var clear_0 = objectStore_0.clear();
    var index_21 = objectStore_0.createIndex('index_21', 'test');
    var add_2 = objectStore_0.add({f0_f: '<null>', f1_q: '<object>', f2_g: '<number>', f3_v: '<null>'}, 'PTtZTvjxW');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('shtrFrhUCiFX');
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var put_1 = objectStore_0.put({f0_a: '<string>', f1_l: '<string>', f2_e: '<object>', f3_q: '<array>', f4_z: '<object>', f5_y: '<null>'}, 'LJv');
    var objectStore_1 = db.createObjectStore('objectStore_27', {keypath: 'uxTCKzqm'});
    var index_22 = objectStore_1.createIndex('index_22', 'test');
    var index_23 = objectStore_0.createIndex('index_23', 'test', {multiEntry: true});
    var clear_1 = objectStore_1.clear();
    var add_3 = objectStore_0.add({f0_l: '<string>', f1_l: '<object>', f2_q: '<number>', f3_i: '<null>', f4_y: '<string>', f5_l: '<null>', f6_l: '<object>', f7_y: '<null>'}, 'SpGnNPH');
    var index_1 = objectStore_0.index('index_21');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('SpGnNPH', 'lbvhfTww', false, false);
        get_1 = objectStore_0.get(KeyRange_2);
    }
    catch (e){
    }

    var add_4 = objectStore_0.add({f0_q: '<null>', f1_j: '<string>', f2_o: '<array>', f3_x: '<null>', f4_e: '<array>'}, 'ntkcpdqKGGw');
    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('shtrFrhUCiFX', true);
        get_2 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_28');
    var index_24 = objectStore_1.createIndex('index_24', 'test');
    var index_2 = objectStore_1.index('index_22');
    var get_3;
    try{
        KeyRange_6 = IDBKeyRange.bound('SpGnNPH', 'eRTpkmWvj', true, false);
        get_3 = objectStore_0.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_2 = objectStore_0.clear();
    var add_5 = objectStore_0.add({f0_z: '<array>'}, 'MYlUziLA');
    var clear_3 = objectStore_2.clear();
    var index_25 = objectStore_1.createIndex('index_25', 'test', {unique: true, multiEntry: true});
    var objectStore_3 = db.createObjectStore('objectStore_29', {keypath: 'pywixX.psb.zESNl.vHt.aOdZT.BenEqn.vmTsC', autoIncrement: false});
    var index_26 = objectStore_3.createIndex('index_26', 'test', {unique: false, multiEntry: true});
    var put_2 = objectStore_3.put({f0_c: '<boolean>', f1_k: '<array>', f2_o: '<null>', f3_a: '<string>', f4_j: '<number>', f5_v: '<array>', f6_h: '<null>', f7_z: '<array>', f8_z: '<object>', f9_y: '<string>'}, 'lwlBtpzpZbwj');
    var put_3 = objectStore_2.put({f0_h: '<object>', f1_j: '<number>', f2_h: '<string>', f3_o: '<string>', f4_p: '<object>', f5_b: '<number>', f6_s: '<null>', f7_o: '<null>', f8_o: '<object>', f9_x: '<boolean>'}, 'GByTgRloBl');
    var get_4;
    try{
        KeyRange_8 = IDBKeyRange.bound('GByTgRloBl', 'GByTgRloBl', false, true);
        get_4 = objectStore_2.get(KeyRange_8);
    }
    catch (e){
    }

    var index_27 = objectStore_0.createIndex('index_27', 'test', {unique: false, multiEntry: false});
    var count_0;
    try{
        KeyRange_10 = IDBKeyRange.only('GByTgRloBl');
        count_0 = objectStore_2.count(KeyRange_10);
    }
    catch (e){
    }

    var index_28 = objectStore_2.createIndex('index_28', 'test');
    var put_4 = objectStore_0.put({f0_q: '<boolean>', f1_n: '<number>', f2_y: '<number>', f3_s: '<boolean>', f4_j: '<array>', f5_o: '<string>', f6_c: '<null>'}, 'CDoCBhft');
    var clear_4 = objectStore_3.clear();
    var put_5 = objectStore_3.put({f0_x: '<object>', f1_c: '<boolean>', f2_e: '<null>'}, 'CBVhiAJlDLef');
    var clear_5 = objectStore_3.clear();
    var count_1 = objectStore_2.count();
    var clear_6 = objectStore_1.clear();
    var delete_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('GByTgRloBl', 'GByTgRloBl', true, false);
        delete_0 = objectStore_2.delete(KeyRange_12);
    }
    catch (e){
    }

    var put_6 = objectStore_3.put({f0_a: '<null>', f1_a: '<object>', f2_v: '<object>', f3_n: '<boolean>', f4_o: '<number>', f5_p: '<number>', f6_i: '<boolean>', f7_u: '<boolean>', f8_c: '<null>'}, 'MLcd');
    var delete_1;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('MYlUziLA', true);
        delete_1 = objectStore_0.delete(KeyRange_14);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_16 = IDBKeyRange.only('GByTgRloBl');
        count_2 = objectStore_2.count(KeyRange_16);
    }
    catch (e){
    }

    var put_7 = objectStore_1.put({f0_h: '<number>', f1_y: '<null>', f2_v: '<null>', f3_n: '<array>', f4_j: '<object>', f5_g: '<array>', f6_k: '<number>', f7_d: '<number>'}, 'bnOMSJIXmBb');
    var getAll_0 = objectStore_2.getAll(1238861552);
    var add_6 = objectStore_0.add({f0_c: '<boolean>', f1_i: '<object>'}, 'DAnYPzVJtt');
    var put_8 = objectStore_3.put({f0_n: '<object>', f1_d: '<null>', f2_b: '<boolean>', f3_s: '<number>', f4_v: '<null>', f5_x: '<array>', f6_e: '<string>', f7_m: '<null>', f8_k: '<number>', f9_q: '<null>'}, 'FYQLy');
    var put_9 = objectStore_3.put({f0_c: '<boolean>', f1_j: '<string>', f2_f: '<number>', f3_k: '<null>', f4_d: '<boolean>', f5_p: '<null>', f6_y: '<boolean>', f7_u: '<number>', f8_t: '<number>'}, 'yfxiJ');
    var count_3;
    try{
        KeyRange_18 = IDBKeyRange.bound('CDoCBhft', 'SpGnNPH', true, true);
        count_3 = objectStore_0.count(KeyRange_18);
    }
    catch (e){
    }

    var clear_7 = objectStore_2.clear();
    var objectStore_4 = db.createObjectStore('objectStore_30', {keypath: 'ZESwlmyCbi', autoIncrement: false});
    var getAllKeys_0 = objectStore_0.getAllKeys();
    var index_29 = objectStore_1.createIndex('index_29', 'test', {unique: false});
    var index_30 = objectStore_2.createIndex('index_30', 'test', {multiEntry: true});
    db.deleteObjectStore('objectStore_29')
    var clear_8 = objectStore_4.clear();
    var objectStore_5 = db.createObjectStore('objectStore_31', {keypath: 'isVriX.VZHT.BcJ.pMuMRFyJPv'});
    var clear_9 = objectStore_1.clear();
    var add_7 = objectStore_2.add({f0_g: '<string>', f1_c: '<null>'}, 'SajfobYouUEX');
    var put_10 = objectStore_5.put({f0_l: '<string>'}, 'hdntpmvfk');
    var add_8 = objectStore_4.add({f0_z: '<null>', f1_x: '<array>', f2_k: '<number>', f3_p: '<string>', f4_y: '<string>'}, 'ZhefbgpA');
    var getAllKeys_1 = objectStore_5.getAllKeys(2945221056);
    var objectStore_6 = db.createObjectStore('objectStore_32', {keypath: 'ndTTQ', autoIncrement: true});
    var add_9 = objectStore_4.add({f0_t: '<number>', f1_w: '<string>', f2_l: '<number>', f3_w: '<boolean>', f4_z: '<boolean>'}, 'XPZl');
    var clear_10 = objectStore_6.clear();
    var put_11 = objectStore_1.put({f0_l: '<string>'}, 'DGWCAljaPAC');
    var put_12 = objectStore_1.put({f0_o: '<array>', f1_o: '<null>', f2_t: '<array>', f3_b: '<string>', f4_r: '<string>'}, 'BSDBpXMTXMmk');
    var objectStore_7 = db.createObjectStore('objectStore_33', {keypath: 'JhqZhsCXenp'});
    var getAll_1 = objectStore_5.getAll();
    var count_4 = objectStore_2.count();
    var put_13 = objectStore_2.put({f0_k: '<null>', f1_a: '<array>', f2_z: '<string>', f3_x: '<string>', f4_s: '<null>', f5_k: '<object>'}, 'KvQGMLpSDPm');
    var objectStore_8 = db.createObjectStore('objectStore_34', {autoIncrement: true});
    var get_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('SajfobYouUEX', 'KvQGMLpSDPm', true, true);
        get_5 = objectStore_2.get(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_35', {autoIncrement: false});
    var index_31 = objectStore_5.createIndex('index_31', 'test');
    var put_14 = objectStore_9.put({f0_x: '<number>'}, 'DPtVGbVSQ');
    var put_15 = objectStore_9.put({f0_l: '<number>', f1_h: '<boolean>', f2_b: '<boolean>', f3_a: '<string>', f4_f: '<string>', f5_f: '<null>', f6_z: '<number>', f7_j: '<array>', f8_t: '<array>', f9_t: '<string>'}, 'MKtP');
    var add_10 = objectStore_6.add({f0_u: '<null>', f1_n: '<array>', f2_k: '<string>', f3_j: '<string>', f4_y: '<null>', f5_k: '<number>', f6_d: '<string>', f7_y: '<null>'}, 'tAsNUemWUk');
    var objectStore_10 = db.createObjectStore('objectStore_36', {keypath: 'HDCAGYw', autoIncrement: false});
    var add_11 = objectStore_2.add({f0_b: '<boolean>', f1_g: '<boolean>', f2_o: '<object>', f3_u: '<object>', f4_t: '<object>', f5_f: '<boolean>', f6_n: '<boolean>', f7_o: '<string>'}, 'mEDmsoybYJI');
    var delete_2;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('KvQGMLpSDPm', false);
        delete_2 = objectStore_2.delete(KeyRange_22);
    }
    catch (e){
    }

    var index_32 = objectStore_10.createIndex('index_32', 'test', {multiEntry: true});
    var put_16 = objectStore_1.put({f0_i: '<boolean>', f1_r: '<number>', f2_p: '<null>', f3_x: '<number>', f4_w: '<string>'}, 'LtlcUntZ');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3 = db.transaction(['objectStore_32', 'objectStore_33'], 'readonly', {durability:"relaxed"})
    var objectStore_32;
    txn_3.objectStore('objectStore_32')
    var get_6;
    try{
        KeyRange_24 = IDBKeyRange.only('tAsNUemWUk');
        get_6 = objectStore_32.get(KeyRange_24);
    }
    catch (e){
    }

    var add_12 = objectStore_32.add({f0_h: '<array>', f1_y: '<boolean>', f2_t: '<number>'}, 'ewtABDzHjgjj');
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('tAsNUemWUk', true);
        get_7 = objectStore_32.get(KeyRange_26);
    }
    catch (e){
    }

    var put_17 = objectStore_32.put({f0_v: '<boolean>', f1_d: '<array>', f2_g: '<object>', f3_z: '<array>'}, 'jctbKbQOvvop');
    var put_18 = objectStore_32.put({f0_z: '<object>', f1_k: '<object>', f2_w: '<object>', f3_d: '<string>', f4_b: '<array>', f5_g: '<number>', f6_c: '<number>'}, 'FWXgh');
    var count_5;
    try{
        KeyRange_28 = IDBKeyRange.only('FWXgh');
        count_5 = objectStore_32.count(KeyRange_28);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('tAsNUemWUk', true);
        delete_3 = objectStore_32.delete(KeyRange_30);
    }
    catch (e){
    }

    var count_6;
    try{
        KeyRange_32 = IDBKeyRange.lowerBound('ewtABDzHjgjj', true);
        count_6 = objectStore_32.count(KeyRange_32);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_34 = IDBKeyRange.only('ewtABDzHjgjj');
        count_7 = objectStore_32.count(KeyRange_34);
    }
    catch (e){
    }

    var put_19 = objectStore_32.put({f0_k: '<null>', f1_e: '<object>', f2_c: '<object>', f3_p: '<boolean>', f4_d: '<string>', f5_p: '<boolean>', f6_c: '<number>', f7_o: '<object>', f8_v: '<object>', f9_d: '<string>'}, 'qdRBuFeO');
    var get_8;
    try{
        KeyRange_36 = IDBKeyRange.bound('ewtABDzHjgjj', 'FWXgh', false, false);
        get_8 = objectStore_32.get(KeyRange_36);
    }
    catch (e){
    }

    var add_13 = objectStore_32.add({f0_t: '<number>', f1_t: '<null>', f2_k: '<boolean>', f3_e: '<string>'}, 'SNQAxSGNcWqn');
    var count_8 = objectStore_32.count();
    var add_14 = objectStore_32.add({f0_u: '<null>', f1_d: '<boolean>', f2_s: '<null>'}, 'CsnRZyT');
    var count_9;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('qdRBuFeO', true);
        count_9 = objectStore_32.count(KeyRange_38);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_40 = IDBKeyRange.only('ewtABDzHjgjj');
        get_9 = objectStore_32.get(KeyRange_40);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_42 = IDBKeyRange.lowerBound('jctbKbQOvvop', false);
        get_10 = objectStore_32.get(KeyRange_42);
    }
    catch (e){
    }

    var delete_4;
    try{
        KeyRange_44 = IDBKeyRange.bound('jctbKbQOvvop', 'CsnRZyT', false, false);
        delete_4 = objectStore_32.delete(KeyRange_44);
    }
    catch (e){
    }

    var add_15 = objectStore_32.add({f0_q: '<array>', f1_e: '<number>', f2_u: '<array>', f3_p: '<object>', f4_a: '<null>', f5_e: '<string>', f6_g: '<null>', f7_z: '<boolean>', f8_l: '<boolean>', f9_t: '<array>'}, 'TNyBG');
    var getAllKeys_2 = objectStore_32.getAllKeys(4211146473);
    var delete_5;
    try{
        KeyRange_46 = IDBKeyRange.bound('FWXgh', 'CsnRZyT', true, false);
        delete_5 = objectStore_32.delete(KeyRange_46);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_48 = IDBKeyRange.bound('FWXgh', 'CsnRZyT', true, false);
        getAllKeys_3 = objectStore_32.getAllKeys(KeyRange_48);
    }
    catch (e){
        KeyRange_49 = IDBKeyRange.only('TNyBG');
        getAllKeys_3 = objectStore_32.getAllKeys(KeyRange_49);
    }

    var put_20 = objectStore_32.put({f0_t: '<string>', f1_a: '<object>', f2_m: '<string>'}, 'FjKUisQjhwVA');
    var clear_11 = objectStore_32.clear();
    var getAllKeys_4 = objectStore_32.getAllKeys();
    var getAllKeys_5 = objectStore_32.getAllKeys(3982141740);
    var get_11;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('tAsNUemWUk', true);
        get_11 = objectStore_32.get(KeyRange_50);
    }
    catch (e){
    }

    var delete_6;
    try{
        KeyRange_52 = IDBKeyRange.lowerBound('ewtABDzHjgjj', true);
        delete_6 = objectStore_32.delete(KeyRange_52);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_54 = IDBKeyRange.bound('ewtABDzHjgjj', 'TNyBG', false, true);
        count_10 = objectStore_32.count(KeyRange_54);
    }
    catch (e){
    }

    var delete_7;
    try{
        KeyRange_56 = IDBKeyRange.bound('CsnRZyT', 'ewtABDzHjgjj', false, true);
        delete_7 = objectStore_32.delete(KeyRange_56);
    }
    catch (e){
    }

    var getAllKeys_6;
    try{
        KeyRange_58 = IDBKeyRange.bound('FWXgh', 'jctbKbQOvvop', false, true);
        getAllKeys_6 = objectStore_32.getAllKeys(KeyRange_58, 2896460199);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('FjKUisQjhwVA');
        getAllKeys_6 = objectStore_32.getAllKeys(KeyRange_59);
    }

    var add_16 = objectStore_32.add({f0_b: '<number>', f1_l: '<array>', f2_w: '<string>', f3_z: '<string>', f4_q: '<null>', f5_g: '<number>'}, 'jVsvZCHJ');
    var clear_12 = objectStore_32.clear();
    var get_12;
    try{
        KeyRange_60 = IDBKeyRange.bound('qdRBuFeO', 'ewtABDzHjgjj', false, true);
        get_12 = objectStore_32.get(KeyRange_60);
    }
    catch (e){
    }

    var add_17 = objectStore_32.add({f0_k: '<object>', f1_g: '<string>', f2_s: '<number>', f3_w: '<number>'}, 'cqArtCoA');
    var get_13;
    try{
        KeyRange_62 = IDBKeyRange.only('cqArtCoA');
        get_13 = objectStore_32.get(KeyRange_62);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.bound('qdRBuFeO', 'FWXgh', false, true);
        get_14 = objectStore_32.get(KeyRange_64);
    }
    catch (e){
    }

    var count_11 = objectStore_32.count();
    var put_21 = objectStore_32.put({f0_z: '<null>', f1_s: '<string>', f2_c: '<object>', f3_i: '<string>', f4_a: '<string>', f5_k: '<object>'}, 'cEUWv');
    var count_12;
    try{
        KeyRange_66 = IDBKeyRange.bound('cqArtCoA', 'jctbKbQOvvop', true, false);
        count_12 = objectStore_32.count(KeyRange_66);
    }
    catch (e){
    }

    var clear_13 = objectStore_32.clear();
    var clear_14 = objectStore_32.clear();
    var add_18 = objectStore_32.add({f0_z: '<number>', f1_p: '<object>', f2_q: '<array>', f3_p: '<object>', f4_j: '<array>', f5_n: '<boolean>', f6_d: '<number>', f7_w: '<array>', f8_v: '<boolean>'}, 'yAEV');
    var count_13 = objectStore_32.count();
    var get_15;
    try{
        KeyRange_68 = IDBKeyRange.bound('cEUWv', 'TNyBG', false, true);
        get_15 = objectStore_32.get(KeyRange_68);
    }
    catch (e){
    }

    var count_14 = objectStore_32.count();
    var get_16;
    try{
        KeyRange_70 = IDBKeyRange.lowerBound('ewtABDzHjgjj', false);
        get_16 = objectStore_32.get(KeyRange_70);
    }
    catch (e){
    }

    var count_15;
    try{
        KeyRange_72 = IDBKeyRange.bound('jctbKbQOvvop', 'TNyBG', false, false);
        count_15 = objectStore_32.count(KeyRange_72);
    }
    catch (e){
    }

    var getAll_2 = objectStore_32.getAll();
    var clear_15 = objectStore_32.clear();
    var get_17;
    try{
        KeyRange_74 = IDBKeyRange.lowerBound('qdRBuFeO', false);
        get_17 = objectStore_32.get(KeyRange_74);
    }
    catch (e){
    }

    var getAllKeys_7 = objectStore_32.getAllKeys(4252842897);
    var getAll_3;
    try{
        KeyRange_76 = IDBKeyRange.lowerBound('TNyBG', false);
        getAll_3 = objectStore_32.getAll(KeyRange_76);
    }
    catch (e){
        KeyRange_77 = IDBKeyRange.only('TNyBG');
        getAll_3 = objectStore_32.getAll(KeyRange_77);
    }

    var clear_16 = objectStore_32.clear();
    var get_18;
    try{
        KeyRange_78 = IDBKeyRange.only('cqArtCoA');
        get_18 = objectStore_32.get(KeyRange_78);
    }
    catch (e){
    }

    var clear_17 = objectStore_32.clear();
    var clear_18 = objectStore_32.clear();
    var add_19 = objectStore_32.add({f0_r: '<null>', f1_r: '<number>', f2_c: '<string>', f3_a: '<boolean>', f4_x: '<array>', f5_b: '<null>', f6_s: '<object>', f7_h: '<string>', f8_j: '<object>'}, 'RDXyhqkpH');
    var get_19;
    try{
        KeyRange_80 = IDBKeyRange.only('CsnRZyT');
        get_19 = objectStore_32.get(KeyRange_80);
    }
    catch (e){
    }

    var add_20 = objectStore_32.add({f0_p: '<null>', f1_p: '<number>', f2_h: '<null>'}, 'QHkrEpjTej');
    var getAllKeys_8 = objectStore_32.getAllKeys(4178190862);
    var clear_19 = objectStore_32.clear();
    var getAllKeys_9 = objectStore_32.getAllKeys();
    var put_22 = objectStore_32.put({f0_y: '<boolean>', f1_v: '<object>'}, 'uamcvV');
    var put_23 = objectStore_32.put({f0_b: '<null>', f1_w: '<boolean>', f2_r: '<string>'}, 'vaAGbYQW');
    var count_16 = objectStore_32.count();
    var count_17 = objectStore_32.count();
    var delete_8;
    try{
        KeyRange_82 = IDBKeyRange.bound('cEUWv', 'jctbKbQOvvop', true, false);
        delete_8 = objectStore_32.delete(KeyRange_82);
    }
    catch (e){
    }

    var add_21 = objectStore_32.add({f0_o: '<array>', f1_o: '<array>'}, 'HSHANUBiRNvU');
    var get_20;
    try{
        KeyRange_84 = IDBKeyRange.only('cqArtCoA');
        get_20 = objectStore_32.get(KeyRange_84);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_86 = IDBKeyRange.only('TNyBG');
        get_21 = objectStore_32.get(KeyRange_86);
    }
    catch (e){
    }

    var count_18 = objectStore_32.count();
    var count_19 = objectStore_32.count();
    var getAll_4 = objectStore_32.getAll();
    var get_22;
    try{
        KeyRange_88 = IDBKeyRange.only('ewtABDzHjgjj');
        get_22 = objectStore_32.get(KeyRange_88);
    }
    catch (e){
    }

    var put_24 = objectStore_32.put({f0_w: '<object>'}, 'GRbEBKuo');
    var put_25 = objectStore_32.put({f0_o: '<boolean>'}, 'gTUyX');
    var clear_20 = objectStore_32.clear();
    var clear_21 = objectStore_32.clear();
    var delete_9;
    try{
        KeyRange_90 = IDBKeyRange.only('gTUyX');
        delete_9 = objectStore_32.delete(KeyRange_90);
    }
    catch (e){
    }

    var put_26 = objectStore_32.put({f0_l: '<boolean>', f1_c: '<null>', f2_r: '<array>', f3_r: '<array>', f4_x: '<array>', f5_a: '<array>', f6_x: '<boolean>', f7_a: '<string>', f8_h: '<string>'}, 'usAhXUpHiLk');
    var get_23;
    try{
        KeyRange_92 = IDBKeyRange.bound('usAhXUpHiLk', 'uamcvV', false, false);
        get_23 = objectStore_32.get(KeyRange_92);
    }
    catch (e){
    }

    var add_22 = objectStore_32.add({f0_g: '<array>', f1_k: '<null>', f2_d: '<string>', f3_h: '<number>', f4_x: '<null>', f5_f: '<null>'}, 'NflabXxZfO');
    var add_23 = objectStore_32.add({f0_y: '<array>', f1_g: '<object>', f2_n: '<null>', f3_f: '<null>', f4_s: '<boolean>', f5_p: '<null>', f6_a: '<boolean>'}, 'maHLIfMPphd');
    var getAll_5;
    try{
        KeyRange_94 = IDBKeyRange.bound('GRbEBKuo', 'maHLIfMPphd', true, true);
        getAll_5 = objectStore_32.getAll(KeyRange_94, 3295405244);
    }
    catch (e){
        KeyRange_95 = IDBKeyRange.only('TNyBG');
        getAll_5 = objectStore_32.getAll(KeyRange_95);
    }

    var clear_22 = objectStore_32.clear();
    var clear_23 = objectStore_32.clear();
    txn_3.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_8572')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};