let db;
const openRequest = window.indexedDB.open('str_4552', 4147300332827387)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_64');
    var put_0 = objectStore_0.put({f0_h: '<boolean>', f1_i: '<boolean>', f2_j: '<string>', f3_a: '<string>', f4_q: '<null>', f5_q: '<array>', f6_f: '<number>', f7_u: '<null>', f8_s: '<null>', f9_w: '<string>'}, 'pSirVIgAFGeV');
    var add_0 = objectStore_0.add({f0_a: '<null>'}, 'tjqli');
    var clear_0 = objectStore_0.clear();
    var clear_1 = objectStore_0.clear();
    var index_51 = objectStore_0.createIndex('index_51', 'test', {unique: true});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.lowerBound('tjqli', false);
        get_0 = objectStore_0.get(KeyRange_0);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('tjqli', false);
        getAll_0 = objectStore_0.getAll(KeyRange_2, 3003769255);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('pSirVIgAFGeV');
        getAll_0 = objectStore_0.getAll(KeyRange_3);
    }

    var objectStore_1 = db.createObjectStore('objectStore_65', {autoIncrement: false});
    db.deleteObjectStore('objectStore_65')
    var get_1;
    try{
        KeyRange_4 = IDBKeyRange.bound('tjqli', 'tjqli', false, false);
        get_1 = objectStore_0.get(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_0.add({f0_h: '<null>', f1_o: '<object>', f2_p: '<array>', f3_h: '<boolean>', f4_c: '<array>', f5_c: '<number>', f6_n: '<array>', f7_s: '<null>', f8_o: '<array>', f9_i: '<array>'}, 'TAbzs');
    var delete_0;
    try{
        KeyRange_6 = IDBKeyRange.bound('pSirVIgAFGeV', 'TAbzs', true, false);
        delete_0 = objectStore_0.delete(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('pSirVIgAFGeV', 'tjqli', true, true);
        get_2 = objectStore_0.get(KeyRange_8);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.only('TAbzs');
        get_3 = objectStore_0.get(KeyRange_10);
    }
    catch (e){
    }

    var add_2 = objectStore_0.add({f0_f: '<object>', f1_v: '<boolean>'}, 'aTZeTTnbKB');
    var objectStore_2 = db.createObjectStore('objectStore_66', {keypath: 'ypqlj'});
    var objectStore_3 = db.createObjectStore('objectStore_67', {autoIncrement: false});
    var put_1 = objectStore_0.put({f0_v: '<object>', f1_q: '<object>', f2_k: '<object>'}, 'ohYbTuXiK');
    var objectStore_4 = db.createObjectStore('objectStore_68', {keypath: 'SCefrktBg'});
    var objectStore_5 = db.createObjectStore('objectStore_69', {autoIncrement: true});
    var clear_2 = objectStore_3.clear();
    var put_2 = objectStore_3.put({f0_o: '<string>', f1_s: '<boolean>', f2_v: '<number>'}, 'LzN');
    var objectStore_6 = db.createObjectStore('objectStore_70');
    var objectStore_7 = db.createObjectStore('objectStore_71', {autoIncrement: false});
    db.deleteObjectStore('objectStore_70')
    var clear_3 = objectStore_2.clear();
    var clear_4 = objectStore_0.clear();
    var objectStore_8 = db.createObjectStore('objectStore_72');
    var count_0;
    try{
        KeyRange_12 = IDBKeyRange.bound('tjqli', 'TAbzs', false, true);
        count_0 = objectStore_0.count(KeyRange_12);
    }
    catch (e){
    }

    var index_52 = objectStore_7.createIndex('index_52', 'test', {unique: false, multiEntry: true});
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('LzN', true);
        get_4 = objectStore_3.get(KeyRange_14);
    }
    catch (e){
    }

    var objectStore_9 = db.createObjectStore('objectStore_73');
    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.bound('tjqli', 'TAbzs', false, true);
        get_5 = objectStore_0.get(KeyRange_16);
    }
    catch (e){
    }

    var put_3 = objectStore_9.put({f0_o: '<null>', f1_y: '<number>'}, 'DDjhZYdahWXT');
    var index_53 = objectStore_8.createIndex('index_53', 'test', {unique: true});
    var get_6;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('DDjhZYdahWXT', false);
        get_6 = objectStore_9.get(KeyRange_18);
    }
    catch (e){
    }

    var index_54 = objectStore_4.createIndex('index_54', 'test', {multiEntry: false});
    var clear_5 = objectStore_9.clear();
    objectStore_8.deleteIndex('index_53')
    var add_3 = objectStore_4.add({f0_w: '<null>'}, 'kcyeRL');
    var index_0 = objectStore_4.index('index_54');
    var put_4 = objectStore_5.put({f0_u: '<boolean>', f1_y: '<number>', f2_d: '<string>'}, 'yML');
    var add_4 = objectStore_9.add({f0_p: '<object>', f1_g: '<object>', f2_c: '<number>', f3_t: '<boolean>', f4_j: '<boolean>'}, 'cZgMmUFf');
    db.deleteObjectStore('objectStore_69')
    var objectStore_10 = db.createObjectStore('objectStore_74', {keypath: 'fASosiF.YCZLjZNE'});
    var objectStore_11 = db.createObjectStore('objectStore_75', {keypath: 'BZICgbtu', autoIncrement: true});
    var index_55 = objectStore_0.createIndex('index_55', 'test', {multiEntry: false});
    var add_5 = objectStore_10.add({f0_e: '<boolean>', f1_r: '<boolean>', f2_f: '<string>'}, 'vHzZvFRizEN');
    var get_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('tjqli', 'TAbzs', false, false);
        get_7 = objectStore_0.get(KeyRange_20);
    }
    catch (e){
    }

    var objectStore_12 = db.createObjectStore('objectStore_76');
    var add_6 = objectStore_0.add({f0_e: '<null>', f1_k: '<number>', f2_g: '<array>', f3_q: '<null>'}, 'AKDPkVpd');
    var count_1 = objectStore_10.count();
    var add_7 = objectStore_2.add({f0_o: '<number>', f1_u: '<string>', f2_g: '<boolean>', f3_w: '<null>', f4_m: '<string>'}, 'vrqVfD');
    var get_8;
    try{
        KeyRange_22 = IDBKeyRange.bound('AKDPkVpd', 'AKDPkVpd', true, false);
        get_8 = objectStore_0.get(KeyRange_22);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_24 = IDBKeyRange.bound('vHzZvFRizEN', 'vHzZvFRizEN', true, false);
        get_9 = objectStore_10.get(KeyRange_24);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_26 = IDBKeyRange.bound('vHzZvFRizEN', 'vHzZvFRizEN', false, true);
        get_10 = objectStore_10.get(KeyRange_26);
    }
    catch (e){
    }

    var objectStore_13 = db.createObjectStore('objectStore_77', {keypath: 'CAwmfKp.SVJTuVYJUp.niCaz.QktzdTsUqrya'});
    var put_5 = objectStore_11.put({f0_o: '<null>', f1_f: '<number>', f2_h: '<null>', f3_j: '<array>', f4_v: '<string>', f5_c: '<object>', f6_d: '<null>', f7_o: '<null>'}, 'PxdBVHUFewba');
    var add_8 = objectStore_3.add({f0_l: '<number>', f1_p: '<number>', f2_p: '<null>', f3_x: '<null>', f4_l: '<object>', f5_h: '<array>', f6_a: '<null>'}, 'RQZbucU');
    var put_6 = objectStore_12.put({f0_j: '<boolean>', f1_j: '<string>', f2_o: '<array>'}, 'mnznDKkPqV');
    var getAllKeys_0;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('vHzZvFRizEN', true);
        getAllKeys_0 = objectStore_10.getAllKeys(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('vHzZvFRizEN');
        getAllKeys_0 = objectStore_10.getAllKeys(KeyRange_29);
    }

    var getAllKeys_1;
    try{
        KeyRange_30 = IDBKeyRange.lowerBound('RQZbucU', true);
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_30, 1399055642);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('RQZbucU');
        getAllKeys_1 = objectStore_3.getAllKeys(KeyRange_31);
    }

    var objectStore_14 = db.createObjectStore('objectStore_78', {autoIncrement: true});
    var get_11;
    try{
        KeyRange_32 = IDBKeyRange.bound('kcyeRL', 'kcyeRL', true, false);
        get_11 = objectStore_4.get(KeyRange_32);
    }
    catch (e){
    }

    var getAllKeys_2 = objectStore_11.getAllKeys();
    var objectStore_15 = db.createObjectStore('objectStore_79', {autoIncrement: false});
    var clear_6 = objectStore_7.clear();
    var add_9 = objectStore_12.add({f0_l: '<null>', f1_q: '<number>', f2_w: '<boolean>'}, 'nthHr');
    var getAllKeys_3;
    try{
        KeyRange_34 = IDBKeyRange.only('kcyeRL');
        getAllKeys_3 = objectStore_4.getAllKeys(KeyRange_34, 1532085368);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('kcyeRL');
        getAllKeys_3 = objectStore_4.getAllKeys(KeyRange_35);
    }

    var getAllKeys_4 = objectStore_11.getAllKeys();
    var get_12;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('RQZbucU', false);
        get_12 = objectStore_3.get(KeyRange_36);
    }
    catch (e){
    }

    var getAll_1 = objectStore_9.getAll();
    db.deleteObjectStore('objectStore_72')
    var put_7 = objectStore_2.put({f0_f: '<number>', f1_k: '<number>', f2_j: '<null>', f3_i: '<object>', f4_a: '<boolean>', f5_k: '<boolean>', f6_p: '<object>', f7_g: '<number>', f8_b: '<boolean>'}, 'TUIIl');
    var add_10 = objectStore_3.add({f0_n: '<number>', f1_q: '<string>', f2_c: '<array>', f3_v: '<boolean>', f4_r: '<array>', f5_z: '<object>', f6_r: '<array>'}, 'rVoWTvIXk');
    db.deleteObjectStore('objectStore_68')
    var count_2 = objectStore_12.count();
    var add_11 = objectStore_11.add({f0_w: '<boolean>'}, 'TBMvsmiamhaU');
    var delete_1;
    try{
        KeyRange_38 = IDBKeyRange.only('rVoWTvIXk');
        delete_1 = objectStore_3.delete(KeyRange_38);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_40 = IDBKeyRange.bound('LzN', 'RQZbucU', false, true);
        get_13 = objectStore_3.get(KeyRange_40);
    }
    catch (e){
    }

    var getAll_2 = objectStore_12.getAll();
    db.deleteObjectStore('objectStore_76')
    var index_56 = objectStore_7.createIndex('index_56', 'test', {unique: true, multiEntry: true});
    var add_12 = objectStore_14.add({f0_e: '<number>', f1_g: '<boolean>', f2_y: '<object>', f3_k: '<string>', f4_j: '<object>', f5_g: '<boolean>', f6_n: '<object>', f7_u: '<number>'}, 'KftzsoRdCkS');
    var count_3 = objectStore_0.count();
    var getAll_3;
    try{
        KeyRange_42 = IDBKeyRange.only('vrqVfD');
        getAll_3 = objectStore_2.getAll(KeyRange_42, 1275161246);
    }
    catch (e){
        KeyRange_43 = IDBKeyRange.only('TUIIl');
        getAll_3 = objectStore_2.getAll(KeyRange_43);
    }

    db.deleteObjectStore('objectStore_77')
    var count_4;
    try{
        KeyRange_44 = IDBKeyRange.only('pSirVIgAFGeV');
        count_4 = objectStore_0.count(KeyRange_44);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6 = db.transaction(['objectStore_71', 'objectStore_75'], 'readwrite', {durability:"strict"})
    var objectStore_71;
    txn_6.objectStore('objectStore_71')
    var add_13 = objectStore_71.add({f0_l: '<number>', f1_w: '<array>', f2_r: '<null>', f3_i: '<number>'}, 'wEgh');
    var put_8 = objectStore_71.put({f0_s: '<number>', f1_o: '<boolean>', f2_w: '<string>', f3_e: '<null>', f4_m: '<array>', f5_k: '<boolean>', f6_d: '<null>', f7_j: '<boolean>', f8_o: '<number>'}, 'lvPz');
    var get_14;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('wEgh', true);
        get_14 = objectStore_71.get(KeyRange_46);
    }
    catch (e){
    }

    var put_9 = objectStore_71.put({f0_p: '<string>', f1_z: '<boolean>', f2_c: '<object>', f3_f: '<object>', f4_t: '<object>', f5_x: '<number>', f6_d: '<boolean>', f7_m: '<number>', f8_k: '<number>'}, 'SjHLR');
    var delete_2;
    try{
        KeyRange_48 = IDBKeyRange.bound('lvPz', 'lvPz', false, true);
        delete_2 = objectStore_71.delete(KeyRange_48);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_50 = IDBKeyRange.lowerBound('SjHLR', false);
        get_15 = objectStore_71.get(KeyRange_50);
    }
    catch (e){
    }

    var get_16;
    try{
        KeyRange_52 = IDBKeyRange.bound('wEgh', 'lvPz', true, true);
        get_16 = objectStore_71.get(KeyRange_52);
    }
    catch (e){
    }

    var get_17;
    try{
        KeyRange_54 = IDBKeyRange.bound('SjHLR', 'SjHLR', false, true);
        get_17 = objectStore_71.get(KeyRange_54);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_56 = IDBKeyRange.bound('lvPz', 'SjHLR', true, false);
        delete_3 = objectStore_71.delete(KeyRange_56);
    }
    catch (e){
    }

    var getAll_4;
    try{
        KeyRange_58 = IDBKeyRange.bound('SjHLR', 'lvPz', false, false);
        getAll_4 = objectStore_71.getAll(KeyRange_58, 876484908);
    }
    catch (e){
        KeyRange_59 = IDBKeyRange.only('lvPz');
        getAll_4 = objectStore_71.getAll(KeyRange_59);
    }

    var clear_7 = objectStore_71.clear();
    var clear_8 = objectStore_71.clear();
    var clear_9 = objectStore_71.clear();
    var add_14 = objectStore_71.add({f0_k: '<string>', f1_i: '<number>', f2_e: '<object>', f3_e: '<object>', f4_m: '<object>'}, 'GXAiVrEWn');
    var getAllKeys_5 = objectStore_71.getAllKeys(3847355759);
    var count_5;
    try{
        KeyRange_60 = IDBKeyRange.only('SjHLR');
        count_5 = objectStore_71.count(KeyRange_60);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_62 = IDBKeyRange.lowerBound('SjHLR', false);
        getAll_5 = objectStore_71.getAll(KeyRange_62, 541517893);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('GXAiVrEWn');
        getAll_5 = objectStore_71.getAll(KeyRange_63);
    }

    var count_6;
    try{
        KeyRange_64 = IDBKeyRange.lowerBound('wEgh', false);
        count_6 = objectStore_71.count(KeyRange_64);
    }
    catch (e){
    }

    var put_10 = objectStore_71.put({f0_z: '<number>', f1_f: '<string>', f2_h: '<string>', f3_d: '<string>'}, 'UgktOmy');
    var getAllKeys_6 = objectStore_71.getAllKeys();
    var clear_10 = objectStore_71.clear();
    var add_15 = objectStore_71.add({f0_j: '<null>', f1_q: '<array>', f2_p: '<string>', f3_m: '<null>', f4_g: '<string>', f5_f: '<array>', f6_o: '<boolean>', f7_o: '<null>', f8_w: '<array>'}, 'AYOLqgw');
    var getAll_6;
    try{
        KeyRange_66 = IDBKeyRange.lowerBound('GXAiVrEWn', true);
        getAll_6 = objectStore_71.getAll(KeyRange_66);
    }
    catch (e){
        KeyRange_67 = IDBKeyRange.only('AYOLqgw');
        getAll_6 = objectStore_71.getAll(KeyRange_67);
    }

    var count_7;
    try{
        KeyRange_68 = IDBKeyRange.only('SjHLR');
        count_7 = objectStore_71.count(KeyRange_68);
    }
    catch (e){
    }

    var get_18;
    try{
        KeyRange_70 = IDBKeyRange.bound('wEgh', 'lvPz', false, false);
        get_18 = objectStore_71.get(KeyRange_70);
    }
    catch (e){
    }

    var getAllKeys_7 = objectStore_71.getAllKeys(2308712964);
    var add_16 = objectStore_71.add({f0_l: '<string>'}, 'rJwvNWEq');
    var clear_11 = objectStore_71.clear();
    var clear_12 = objectStore_71.clear();
    var delete_4;
    try{
        KeyRange_72 = IDBKeyRange.lowerBound('lvPz', false);
        delete_4 = objectStore_71.delete(KeyRange_72);
    }
    catch (e){
    }

    var count_8 = objectStore_71.count();
    var put_11 = objectStore_71.put({f0_z: '<array>', f1_j: '<null>', f2_d: '<boolean>', f3_m: '<string>', f4_e: '<boolean>', f5_h: '<number>', f6_c: '<string>', f7_l: '<null>', f8_t: '<null>', f9_m: '<object>'}, 'oGefJSEaVYYr');
    var add_17 = objectStore_71.add({f0_m: '<boolean>', f1_c: '<boolean>', f2_c: '<boolean>', f3_x: '<null>', f4_r: '<number>', f5_x: '<object>', f6_k: '<object>', f7_x: '<boolean>', f8_b: '<array>', f9_m: '<null>'}, 'sJtWAQ');
    var clear_13 = objectStore_71.clear();
    var put_12 = objectStore_71.put({f0_i: '<boolean>', f1_m: '<array>', f2_j: '<number>', f3_i: '<string>', f4_g: '<array>', f5_i: '<object>', f6_t: '<null>', f7_p: '<object>', f8_x: '<array>'}, 'fWHbuouLXsq');
    var getAll_7 = objectStore_71.getAll(3862478742);
    var add_18 = objectStore_71.add({f0_k: '<object>', f1_k: '<boolean>', f2_w: '<array>', f3_a: '<boolean>', f4_n: '<number>', f5_r: '<string>', f6_f: '<object>', f7_k: '<object>', f8_v: '<number>'}, 'DGgvWkQaDkkv');
    var add_19 = objectStore_71.add({f0_j: '<array>', f1_k: '<array>', f2_s: '<null>', f3_p: '<boolean>', f4_e: '<object>', f5_t: '<string>', f6_s: '<null>', f7_q: '<null>'}, 'pWyJK');
    var get_19;
    try{
        KeyRange_74 = IDBKeyRange.bound('pWyJK', 'DGgvWkQaDkkv', false, false);
        get_19 = objectStore_71.get(KeyRange_74);
    }
    catch (e){
    }

    var delete_5;
    try{
        KeyRange_76 = IDBKeyRange.only('oGefJSEaVYYr');
        delete_5 = objectStore_71.delete(KeyRange_76);
    }
    catch (e){
    }

    var get_20;
    try{
        KeyRange_78 = IDBKeyRange.bound('pWyJK', 'UgktOmy', false, false);
        get_20 = objectStore_71.get(KeyRange_78);
    }
    catch (e){
    }

    var get_21;
    try{
        KeyRange_80 = IDBKeyRange.bound('GXAiVrEWn', 'UgktOmy', false, false);
        get_21 = objectStore_71.get(KeyRange_80);
    }
    catch (e){
    }

    var get_22;
    try{
        KeyRange_82 = IDBKeyRange.lowerBound('AYOLqgw', true);
        get_22 = objectStore_71.get(KeyRange_82);
    }
    catch (e){
    }

    var put_13 = objectStore_71.put({f0_p: '<null>', f1_c: '<array>', f2_s: '<number>', f3_j: '<null>', f4_m: '<string>', f5_x: '<object>', f6_k: '<string>'}, 'kWIEbfoT');
    var get_23;
    try{
        KeyRange_84 = IDBKeyRange.lowerBound('fWHbuouLXsq', true);
        get_23 = objectStore_71.get(KeyRange_84);
    }
    catch (e){
    }

    var getAllKeys_8;
    try{
        KeyRange_86 = IDBKeyRange.bound('AYOLqgw', 'DGgvWkQaDkkv', true, true);
        getAllKeys_8 = objectStore_71.getAllKeys(KeyRange_86);
    }
    catch (e){
        KeyRange_87 = IDBKeyRange.only('lvPz');
        getAllKeys_8 = objectStore_71.getAllKeys(KeyRange_87);
    }

    var get_24;
    try{
        KeyRange_88 = IDBKeyRange.bound('SjHLR', 'AYOLqgw', true, true);
        get_24 = objectStore_71.get(KeyRange_88);
    }
    catch (e){
    }

    var put_14 = objectStore_71.put({f0_r: '<null>', f1_i: '<boolean>', f2_r: '<number>', f3_a: '<number>', f4_c: '<array>'}, 'JmLwS');
    var index_1 = objectStore_71.index('index_56');
    var put_15 = objectStore_71.put({f0_x: '<array>', f1_i: '<array>', f2_u: '<number>', f3_k: '<array>', f4_u: '<boolean>', f5_i: '<array>', f6_k: '<object>'}, 'aPlA');
    var count_9;
    try{
        KeyRange_90 = IDBKeyRange.lowerBound('pWyJK', true);
        count_9 = objectStore_71.count(KeyRange_90);
    }
    catch (e){
    }

    var get_25;
    try{
        KeyRange_92 = IDBKeyRange.bound('wEgh', 'JmLwS', false, false);
        get_25 = objectStore_71.get(KeyRange_92);
    }
    catch (e){
    }

    var get_26;
    try{
        KeyRange_94 = IDBKeyRange.bound('fWHbuouLXsq', 'rJwvNWEq', false, false);
        get_26 = objectStore_71.get(KeyRange_94);
    }
    catch (e){
    }

    var get_27;
    try{
        KeyRange_96 = IDBKeyRange.bound('kWIEbfoT', 'rJwvNWEq', false, false);
        get_27 = objectStore_71.get(KeyRange_96);
    }
    catch (e){
    }

    var index_2 = objectStore_71.index('index_52');
    var count_10;
    try{
        KeyRange_98 = IDBKeyRange.bound('rJwvNWEq', 'GXAiVrEWn', true, false);
        count_10 = objectStore_71.count(KeyRange_98);
    }
    catch (e){
    }

    var count_11 = objectStore_71.count();
    var getAll_8;
    try{
        KeyRange_100 = IDBKeyRange.bound('DGgvWkQaDkkv', 'AYOLqgw', false, false);
        getAll_8 = objectStore_71.getAll(KeyRange_100);
    }
    catch (e){
        KeyRange_101 = IDBKeyRange.only('fWHbuouLXsq');
        getAll_8 = objectStore_71.getAll(KeyRange_101);
    }

    var count_12 = objectStore_71.count();
    var get_28;
    try{
        KeyRange_102 = IDBKeyRange.only('kWIEbfoT');
        get_28 = objectStore_71.get(KeyRange_102);
    }
    catch (e){
    }

    var put_16 = objectStore_71.put({f0_a: '<array>', f1_k: '<string>', f2_i: '<string>', f3_u: '<array>', f4_c: '<object>', f5_m: '<object>'}, 'wsL');
    var clear_14 = objectStore_71.clear();
    var add_20 = objectStore_71.add({f0_b: '<number>'}, 'ctU');
    var put_17 = objectStore_71.put({f0_j: '<number>', f1_t: '<number>', f2_l: '<object>', f3_q: '<array>', f4_c: '<array>', f5_l: '<array>', f6_z: '<array>', f7_u: '<string>', f8_v: '<null>'}, 'kQGrzOwhjos');
    var get_29;
    try{
        KeyRange_104 = IDBKeyRange.lowerBound('oGefJSEaVYYr', false);
        get_29 = objectStore_71.get(KeyRange_104);
    }
    catch (e){
    }

    var getAll_9;
    try{
        KeyRange_106 = IDBKeyRange.lowerBound('kQGrzOwhjos', false);
        getAll_9 = objectStore_71.getAll(KeyRange_106);
    }
    catch (e){
        KeyRange_107 = IDBKeyRange.only('JmLwS');
        getAll_9 = objectStore_71.getAll(KeyRange_107);
    }

    var add_21 = objectStore_71.add({f0_m: '<array>', f1_x: '<boolean>', f2_z: '<null>', f3_q: '<null>', f4_t: '<array>', f5_s: '<boolean>', f6_v: '<object>', f7_t: '<string>', f8_e: '<array>', f9_i: '<number>'}, 'NNeVHu');
    var count_13 = objectStore_71.count();
    var get_30;
    try{
        KeyRange_108 = IDBKeyRange.lowerBound('kQGrzOwhjos', false);
        get_30 = objectStore_71.get(KeyRange_108);
    }
    catch (e){
    }

    var put_18 = objectStore_71.put({f0_y: '<string>', f1_q: '<array>', f2_a: '<string>', f3_q: '<null>', f4_p: '<null>'}, 'lXft');
    var index_3 = objectStore_71.index('index_52');
    var put_19 = objectStore_71.put({f0_q: '<boolean>', f1_v: '<object>', f2_d: '<object>', f3_d: '<number>', f4_x: '<object>', f5_j: '<boolean>', f6_c: '<boolean>', f7_k: '<string>', f8_r: '<object>', f9_r: '<string>'}, 'mystGbuErhaC');
    var count_14;
    try{
        KeyRange_110 = IDBKeyRange.bound('oGefJSEaVYYr', 'sJtWAQ', false, false);
        count_14 = objectStore_71.count(KeyRange_110);
    }
    catch (e){
    }

    var clear_15 = objectStore_71.clear();
    var count_15;
    try{
        KeyRange_112 = IDBKeyRange.lowerBound('oGefJSEaVYYr', true);
        count_15 = objectStore_71.count(KeyRange_112);
    }
    catch (e){
    }

    var clear_16 = objectStore_71.clear();
    var index_4 = objectStore_71.index('index_52');
    var add_22 = objectStore_71.add({f0_o: '<array>', f1_i: '<object>', f2_o: '<array>', f3_v: '<number>', f4_h: '<object>', f5_p: '<object>', f6_n: '<object>', f7_v: '<object>'}, 'aeym');
    var getAllKeys_9;
    try{
        KeyRange_114 = IDBKeyRange.bound('DGgvWkQaDkkv', 'SjHLR', true, true);
        getAllKeys_9 = objectStore_71.getAllKeys(KeyRange_114, 3890104928);
    }
    catch (e){
        KeyRange_115 = IDBKeyRange.only('aPlA');
        getAllKeys_9 = objectStore_71.getAllKeys(KeyRange_115);
    }

    var delete_6;
    try{
        KeyRange_116 = IDBKeyRange.lowerBound('lvPz', false);
        delete_6 = objectStore_71.delete(KeyRange_116);
    }
    catch (e){
    }

    var clear_17 = objectStore_71.clear();
    txn_6.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_1645')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};