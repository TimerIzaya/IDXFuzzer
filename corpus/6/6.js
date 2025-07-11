let db;
const openRequest = window.indexedDB.open('str_8722', 6403371307328095)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_281', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_282', {keypath: 'qxwKHSo', autoIncrement: false});
    var objectStore_2 = db.createObjectStore('objectStore_283', {keypath: 'hYiQOoJKo', autoIncrement: false});
    var index_246 = objectStore_0.createIndex('index_246', 'test');
    var index_247 = objectStore_2.createIndex('index_247', 'test', {multiEntry: true});
    var objectStore_3 = db.createObjectStore('objectStore_284', {autoIncrement: true});
    var objectStore_4 = db.createObjectStore('objectStore_285', {keypath: 'GNGAYsRC.HsivcpJ.LrLUyhgT.RAGjr.LfDzUiklhdj.tAXyBYWx.ZUJSXRBT.PrPdMsoa.cFoYJktBaan'});
    var index_248 = objectStore_2.createIndex('index_248', 'test', {multiEntry: false});
    var index_249 = objectStore_1.createIndex('index_249', 'test', {unique: true});
    var index_250 = objectStore_2.createIndex('index_250', 'test', {multiEntry: false});
    var index_251 = objectStore_4.createIndex('index_251', 'test', {unique: false});
    var objectStore_5 = db.createObjectStore('objectStore_286');
    var objectStore_6 = db.createObjectStore('objectStore_287', {keypath: 'QWBHu'});
    var objectStore_7 = db.createObjectStore('objectStore_288', {autoIncrement: true});
    var objectStore_8 = db.createObjectStore('objectStore_289');
    var objectStore_9 = db.createObjectStore('objectStore_290', {autoIncrement: false});
    var index_252 = objectStore_6.createIndex('index_252', 'test', {unique: false, multiEntry: false});
    var index_253 = objectStore_2.createIndex('index_253', 'test', {unique: false});
    var index_254 = objectStore_6.createIndex('index_254', 'test', {unique: false, multiEntry: false});
    var objectStore_10 = db.createObjectStore('objectStore_291', {keypath: 'XHm.mgVeYlds', autoIncrement: false});
    var objectStore_11 = db.createObjectStore('objectStore_292', {autoIncrement: true});
    var objectStore_12 = db.createObjectStore('objectStore_293', {autoIncrement: true});
    var index_255 = objectStore_3.createIndex('index_255', 'test', {multiEntry: false});
    var index_256 = objectStore_5.createIndex('index_256', 'test', {multiEntry: false});
    var index_257 = objectStore_4.createIndex('index_257', 'test', {unique: true, multiEntry: false});
    var index_258 = objectStore_2.createIndex('index_258', 'test');
    var objectStore_13 = db.createObjectStore('objectStore_294', {keypath: 'wmjruX', autoIncrement: true});
    var objectStore_14 = db.createObjectStore('objectStore_295', {keypath: 'NYyaindgqO'});
    var objectStore_15 = db.createObjectStore('objectStore_296', {keypath: 'jyfctQ', autoIncrement: true});
    var index_259 = objectStore_14.createIndex('index_259', 'test');
    var objectStore_16 = db.createObjectStore('objectStore_297', {keypath: 'bDhddwSVx'});
    var index_260 = objectStore_3.createIndex('index_260', 'test');
    var objectStore_17 = db.createObjectStore('objectStore_298', {keypath: 'WkddOwAS', autoIncrement: false});
    var index_261 = objectStore_10.createIndex('index_261', 'test', {unique: true, multiEntry: true});
    var index_262 = objectStore_10.createIndex('index_262', 'test');
    var objectStore_18 = db.createObjectStore('objectStore_299', {autoIncrement: true});
    var objectStore_19 = db.createObjectStore('objectStore_300', {keypath: 'ZOMVoN'});
    var index_263 = objectStore_8.createIndex('index_263', 'test');
    var objectStore_20 = db.createObjectStore('objectStore_301');
    var objectStore_21 = db.createObjectStore('objectStore_302', {autoIncrement: false});
    var index_264 = objectStore_18.createIndex('index_264', 'test', {multiEntry: true});
    var index_265 = objectStore_16.createIndex('index_265', 'test', {unique: true, multiEntry: false});
    var index_266 = objectStore_19.createIndex('index_266', 'test', {multiEntry: true});
    var objectStore_22 = db.createObjectStore('objectStore_303');
    var index_267 = objectStore_1.createIndex('index_267', 'test', {unique: false, multiEntry: true});
    var index_268 = objectStore_5.createIndex('index_268', 'test', {unique: false, multiEntry: false});
    var objectStore_23 = db.createObjectStore('objectStore_304', {keypath: 'BnbMFvXD'});
    var objectStore_24 = db.createObjectStore('objectStore_305', {keypath: 'EUavXjucFV'});
    var objectStore_25 = db.createObjectStore('objectStore_306', {autoIncrement: false});
    var index_269 = objectStore_7.createIndex('index_269', 'test', {unique: true});
    var index_270 = objectStore_23.createIndex('index_270', 'test', {unique: false, multiEntry: false});
    var objectStore_26 = db.createObjectStore('objectStore_307', {autoIncrement: false});
    var objectStore_27 = db.createObjectStore('objectStore_308', {keypath: 'GiwmGpOd'});
    var index_271 = objectStore_0.createIndex('index_271', 'test', {multiEntry: true});
    var objectStore_28 = db.createObjectStore('objectStore_309');
    var index_272 = objectStore_25.createIndex('index_272', 'test', {unique: true});
    var index_273 = objectStore_22.createIndex('index_273', 'test', {multiEntry: true});
    var objectStore_29 = db.createObjectStore('objectStore_310', {keypath: 'eTgxWjrbel', autoIncrement: true});
    var objectStore_30 = db.createObjectStore('objectStore_311', {autoIncrement: true});
    var objectStore_31 = db.createObjectStore('objectStore_312');
    var objectStore_32 = db.createObjectStore('objectStore_313');
    var objectStore_33 = db.createObjectStore('objectStore_314', {autoIncrement: true});
    var index_274 = objectStore_11.createIndex('index_274', 'test', {multiEntry: false});
    var objectStore_34 = db.createObjectStore('objectStore_315', {autoIncrement: true});
    var index_275 = objectStore_29.createIndex('index_275', 'test');
    var objectStore_35 = db.createObjectStore('objectStore_316', {keypath: 'kmLHesBo.qlBgCKN.mCBYMffRv.XKmiHIcnEiw.hBeyAuy.slhcPyIqREFQ.wxbEWMxCD.MIqeKBhOsH.vtnz.PszgTLJcVx'});
    var index_276 = objectStore_9.createIndex('index_276', 'test', {unique: false, multiEntry: true});
    var index_277 = objectStore_21.createIndex('index_277', 'test');
    var objectStore_36 = db.createObjectStore('objectStore_317', {keypath: 'tkNizxsXdv'});
    var index_278 = objectStore_35.createIndex('index_278', 'test', {multiEntry: true});
    var index_279 = objectStore_13.createIndex('index_279', 'test', {unique: false});
    var objectStore_37 = db.createObjectStore('objectStore_318', {keypath: 'TxfKidfRrQ'});
    var index_280 = objectStore_25.createIndex('index_280', 'test', {multiEntry: false});
    var index_281 = objectStore_12.createIndex('index_281', 'test', {unique: true, multiEntry: false});
    var index_282 = objectStore_19.createIndex('index_282', 'test', {unique: false, multiEntry: true});
    var objectStore_38 = db.createObjectStore('objectStore_319', {autoIncrement: true});
    var index_283 = objectStore_7.createIndex('index_283', 'test', {multiEntry: false});
    var index_284 = objectStore_7.createIndex('index_284', 'test');
    var objectStore_39 = db.createObjectStore('objectStore_320', {autoIncrement: true});
    var objectStore_40 = db.createObjectStore('objectStore_321', {keypath: 'hEUCOrWI', autoIncrement: false});
    var objectStore_41 = db.createObjectStore('objectStore_322', {keypath: 'opzPKXC.xPdxRuluArt.FsUtmNzi.JXU.jHssSXMMltoa', autoIncrement: false});
    var index_285 = objectStore_16.createIndex('index_285', 'test');
    var index_286 = objectStore_14.createIndex('index_286', 'test', {unique: false, multiEntry: false});
    var index_287 = objectStore_25.createIndex('index_287', 'test');
    var objectStore_42 = db.createObjectStore('objectStore_323', {keypath: 'YmRFGBRf.rLx.kcYHP.tlCvW.zTgwNbbIIXUS.NozHBM.pAyKtTaPG.NYbl.WGgcJIAPh.TiWpx'});
    var objectStore_43 = db.createObjectStore('objectStore_324', {keypath: 'yiyz'});
    var index_288 = objectStore_34.createIndex('index_288', 'test');
    var index_289 = objectStore_38.createIndex('index_289', 'test', {unique: true, multiEntry: true});
    var objectStore_44 = db.createObjectStore('objectStore_325', {autoIncrement: false});
    var objectStore_45 = db.createObjectStore('objectStore_326', {keypath: 'OThgCFGoeV.foiMxSEFrsM.GFKxDOnoIC'});
    var index_290 = objectStore_15.createIndex('index_290', 'test', {multiEntry: false});
    var objectStore_46 = db.createObjectStore('objectStore_327');
    var index_291 = objectStore_27.createIndex('index_291', 'test', {unique: false});
    var index_292 = objectStore_23.createIndex('index_292', 'test', {unique: true, multiEntry: true});
    var index_293 = objectStore_1.createIndex('index_293', 'test', {unique: false, multiEntry: false});
    var index_294 = objectStore_7.createIndex('index_294', 'test', {unique: false, multiEntry: false});
    var index_295 = objectStore_2.createIndex('index_295', 'test', {unique: true});
    var objectStore_47 = db.createObjectStore('objectStore_328', {autoIncrement: false});
    var objectStore_48 = db.createObjectStore('objectStore_329', {keypath: 'MRw'});
    var index_296 = objectStore_36.createIndex('index_296', 'test');
    var index_297 = objectStore_48.createIndex('index_297', 'test', {unique: true});
    var index_298 = objectStore_3.createIndex('index_298', 'test', {unique: false});
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_60 = db.transaction(['objectStore_300', 'objectStore_328', 'objectStore_292'], 'readonly', {durability:"strict"})
    var objectStore_292 = txn_60.objectStore('objectStore_292');
    var index_0 = objectStore_292.index('index_274');
    var index_1 = objectStore_292.index('index_274');
    var index_2 = objectStore_292.index('index_274');
    var index_3 = objectStore_292.index('index_274');
    txn_60.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_60.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_60.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_61 = db.transaction(['objectStore_328'], 'readonly', {durability:"default"})
    var objectStore_328 = txn_61.objectStore('objectStore_328');
    txn_61.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_61.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_61.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_62 = db.transaction(['objectStore_291'], 'readwrite', {durability:"default"})
    var objectStore_291 = txn_62.objectStore('objectStore_291');
    var clear_0 = objectStore_291.clear();
    var clear_1 = objectStore_291.clear();
    var put_0 = objectStore_291.put({f0_o: '<object>', f1_e: '<number>'}, 'hOexLrJr');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('hOexLrJr');
        get_0 = objectStore_291.get(KeyRange_0);
    }
    catch (e){
    }

    var getAll_0 = objectStore_291.getAll();
    var add_0 = objectStore_291.add({f0_o: '<number>', f1_y: '<array>', f2_e: '<null>', f3_q: '<object>', f4_a: '<object>', f5_e: '<string>', f6_k: '<number>', f7_w: '<array>', f8_h: '<null>', f9_m: '<array>'}, 'nNYVmqBUi');
    var add_1 = objectStore_291.add({f0_w: '<object>', f1_r: '<null>', f2_x: '<number>'}, 'vJoZJO');
    txn_62.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_62.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_62.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_63 = db.transaction(['objectStore_291'], 'readwrite', {durability:"strict"})
    var objectStore_291 = txn_63.objectStore('objectStore_291');
    var clear_2 = objectStore_291.clear();
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.bound('vJoZJO', 'hOexLrJr', true, false);
        get_1 = objectStore_291.get(KeyRange_2);
    }
    catch (e){
    }

    var clear_3 = objectStore_291.clear();
    var getAllKeys_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('vJoZJO', 'nNYVmqBUi', false, false);
        getAllKeys_0 = objectStore_291.getAllKeys(KeyRange_4, 333153053);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('vJoZJO');
        getAllKeys_0 = objectStore_291.getAllKeys(KeyRange_5);
    }

    var count_0 = objectStore_291.count();
    var get_2;
    try{
        KeyRange_6 = IDBKeyRange.bound('nNYVmqBUi', 'vJoZJO', false, false);
        get_2 = objectStore_291.get(KeyRange_6);
    }
    catch (e){
    }

    var clear_4 = objectStore_291.clear();
    var clear_5 = objectStore_291.clear();
    var clear_6 = objectStore_291.clear();
    var clear_7 = objectStore_291.clear();
    var put_1 = objectStore_291.put({f0_h: '<null>', f1_l: '<array>', f2_l: '<null>', f3_j: '<string>', f4_f: '<array>', f5_d: '<string>', f6_f: '<null>'}, 'ECYzlRVPSq');
    var put_2 = objectStore_291.put({f0_i: '<string>', f1_r: '<object>', f2_x: '<boolean>', f3_b: '<number>', f4_m: '<array>', f5_y: '<string>'}, 'dHjlqfEDaEe');
    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.bound('hOexLrJr', 'ECYzlRVPSq', false, false);
        getAllKeys_1 = objectStore_291.getAllKeys(KeyRange_8, 4273190956);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('dHjlqfEDaEe');
        getAllKeys_1 = objectStore_291.getAllKeys(KeyRange_9);
    }

    var count_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('ECYzlRVPSq', 'dHjlqfEDaEe', false, false);
        count_1 = objectStore_291.count(KeyRange_10);
    }
    catch (e){
    }

    var clear_8 = objectStore_291.clear();
    var index_4 = objectStore_291.index('index_261');
    var put_3 = objectStore_291.put({f0_p: '<object>', f1_p: '<array>', f2_v: '<object>', f3_r: '<number>', f4_u: '<null>', f5_f: '<number>', f6_p: '<null>', f7_d: '<null>', f8_r: '<boolean>'}, 'VCgj');
    var count_2;
    try{
        KeyRange_12 = IDBKeyRange.bound('ECYzlRVPSq', 'hOexLrJr', true, false);
        count_2 = objectStore_291.count(KeyRange_12);
    }
    catch (e){
    }

    var index_5 = objectStore_291.index('index_261');
    var delete_0;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('hOexLrJr', true);
        delete_0 = objectStore_291.delete(KeyRange_14);
    }
    catch (e){
    }

    var clear_9 = objectStore_291.clear();
    txn_63.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_63.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_63.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_64 = db.transaction(['objectStore_302'], 'readwrite', {durability:"default"})
    var objectStore_302 = txn_64.objectStore('objectStore_302');
    var add_2 = objectStore_302.add({f0_b: '<object>'}, 'BDbNNoMOjgi');
    var clear_10 = objectStore_302.clear();
    var add_3 = objectStore_302.add({f0_r: '<string>', f1_t: '<number>', f2_l: '<array>', f3_n: '<string>', f4_l: '<string>', f5_f: '<array>', f6_r: '<null>'}, 'fjulD');
    var clear_11 = objectStore_302.clear();
    var add_4 = objectStore_302.add({f0_p: '<array>', f1_h: '<null>', f2_q: '<boolean>', f3_z: '<string>', f4_m: '<null>', f5_l: '<array>', f6_l: '<number>', f7_g: '<object>', f8_a: '<null>', f9_r: '<string>'}, 'xtffGoLai');
    var get_3;
    try{
        KeyRange_16 = IDBKeyRange.bound('xtffGoLai', 'xtffGoLai', true, true);
        get_3 = objectStore_302.get(KeyRange_16);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_18 = IDBKeyRange.only('xtffGoLai');
        get_4 = objectStore_302.get(KeyRange_18);
    }
    catch (e){
    }

    var put_4 = objectStore_302.put({f0_g: '<boolean>', f1_o: '<object>', f2_p: '<object>', f3_k: '<null>', f4_c: '<number>', f5_q: '<string>', f6_v: '<boolean>', f7_z: '<number>'}, 'iTwrecOTF');
    var count_3;
    try{
        KeyRange_20 = IDBKeyRange.bound('iTwrecOTF', 'xtffGoLai', false, true);
        count_3 = objectStore_302.count(KeyRange_20);
    }
    catch (e){
    }

    var put_5 = objectStore_302.put({f0_v: '<number>', f1_u: '<boolean>', f2_l: '<object>', f3_y: '<null>', f4_u: '<null>', f5_b: '<null>'}, 'jhzGiEAbytqA');
    var get_5;
    try{
        KeyRange_22 = IDBKeyRange.bound('xtffGoLai', 'BDbNNoMOjgi', true, false);
        get_5 = objectStore_302.get(KeyRange_22);
    }
    catch (e){
    }

    var index_6 = objectStore_302.index('index_277');
    var add_5 = objectStore_302.add({f0_e: '<number>', f1_f: '<string>', f2_x: '<string>', f3_f: '<null>'}, 'ZubPcV');
    var add_6 = objectStore_302.add({f0_e: '<null>', f1_d: '<string>', f2_l: '<array>', f3_k: '<object>'}, 'iIjth');
    var delete_1;
    try{
        KeyRange_24 = IDBKeyRange.bound('fjulD', 'xtffGoLai', false, false);
        delete_1 = objectStore_302.delete(KeyRange_24);
    }
    catch (e){
    }

    var count_4;
    try{
        KeyRange_26 = IDBKeyRange.bound('xtffGoLai', 'BDbNNoMOjgi', false, false);
        count_4 = objectStore_302.count(KeyRange_26);
    }
    catch (e){
    }

    var get_6;
    try{
        KeyRange_28 = IDBKeyRange.bound('jhzGiEAbytqA', 'ZubPcV', true, false);
        get_6 = objectStore_302.get(KeyRange_28);
    }
    catch (e){
    }

    var add_7 = objectStore_302.add({f0_c: '<null>'}, 'rys');
    var index_7 = objectStore_302.index('index_277');
    var clear_12 = objectStore_302.clear();
    var add_8 = objectStore_302.add({f0_k: '<object>'}, 'smXjEncHxCJ');
    var count_5 = objectStore_302.count();
    var clear_13 = objectStore_302.clear();
    var put_6 = objectStore_302.put({f0_s: '<number>', f1_h: '<string>', f2_v: '<string>', f3_r: '<number>', f4_r: '<string>', f5_q: '<null>', f6_e: '<object>', f7_x: '<boolean>'}, 'vIjSLxX');
    var get_7;
    try{
        KeyRange_30 = IDBKeyRange.bound('ZubPcV', 'vIjSLxX', true, false);
        get_7 = objectStore_302.get(KeyRange_30);
    }
    catch (e){
    }

    txn_64.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_64.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_64.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_65 = db.transaction(['objectStore_304', 'objectStore_319', 'objectStore_293'], 'readwrite', {durability:"relaxed"})
    var objectStore_319 = txn_65.objectStore('objectStore_319');
    var index_8 = objectStore_319.index('index_289');
    var put_7 = objectStore_319.put({f0_r: '<array>', f1_e: '<number>', f2_q: '<null>', f3_u: '<boolean>', f4_q: '<boolean>', f5_y: '<object>', f6_h: '<null>', f7_i: '<number>', f8_f: '<object>', f9_o: '<number>'}, 'fjflzuTYt');
    var clear_14 = objectStore_319.clear();
    var get_8;
    try{
        KeyRange_32 = IDBKeyRange.only('fjflzuTYt');
        get_8 = objectStore_319.get(KeyRange_32);
    }
    catch (e){
    }

    var put_8 = objectStore_319.put({f0_u: '<string>', f1_j: '<number>', f2_e: '<object>', f3_i: '<object>', f4_p: '<string>', f5_g: '<array>', f6_y: '<boolean>', f7_u: '<boolean>', f8_m: '<boolean>'}, 'zOhHnLpn');
    var clear_15 = objectStore_319.clear();
    var clear_16 = objectStore_319.clear();
    var clear_17 = objectStore_319.clear();
    var clear_18 = objectStore_319.clear();
    var clear_19 = objectStore_319.clear();
    var count_6;
    try{
        KeyRange_34 = IDBKeyRange.bound('fjflzuTYt', 'zOhHnLpn', false, true);
        count_6 = objectStore_319.count(KeyRange_34);
    }
    catch (e){
    }

    var add_9 = objectStore_319.add({f0_t: '<array>'}, 'JXijjpP');
    var delete_2;
    try{
        KeyRange_36 = IDBKeyRange.bound('zOhHnLpn', 'zOhHnLpn', false, false);
        delete_2 = objectStore_319.delete(KeyRange_36);
    }
    catch (e){
    }

    txn_65.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_65.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_65.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_66 = db.transaction(['objectStore_299'], 'readonly', {durability:"strict"})
    var objectStore_299 = txn_66.objectStore('objectStore_299');
    var index_9 = objectStore_299.index('index_264');
    txn_66.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_66.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_66.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_67 = db.transaction(['objectStore_319', 'objectStore_284', 'objectStore_322', 'objectStore_289'], 'readwrite', {durability:"default"})
    var objectStore_322 = txn_67.objectStore('objectStore_322');
    var add_10 = objectStore_322.add({f0_b: '<object>', f1_w: '<null>', f2_g: '<string>', f3_p: '<string>'}, 'HWAdUPvBXQqy');
    var add_11 = objectStore_322.add({f0_f: '<string>', f1_y: '<null>'}, 'sHZCoovsHq');
    var put_9 = objectStore_322.put({f0_i: '<object>'}, 'ByxElEG');
    var clear_20 = objectStore_322.clear();
    var get_9;
    try{
        KeyRange_38 = IDBKeyRange.lowerBound('HWAdUPvBXQqy', false);
        get_9 = objectStore_322.get(KeyRange_38);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('sHZCoovsHq', true);
        count_7 = objectStore_322.count(KeyRange_40);
    }
    catch (e){
    }

    var put_10 = objectStore_322.put({f0_b: '<array>', f1_t: '<null>', f2_q: '<null>', f3_x: '<string>', f4_i: '<boolean>'}, 'bmVtYxVUsHfk');
    var get_10;
    try{
        KeyRange_42 = IDBKeyRange.only('HWAdUPvBXQqy');
        get_10 = objectStore_322.get(KeyRange_42);
    }
    catch (e){
    }

    var put_11 = objectStore_322.put({f0_b: '<array>', f1_h: '<array>', f2_o: '<string>', f3_b: '<boolean>', f4_f: '<object>', f5_z: '<null>', f6_x: '<string>'}, 'wXSONmxJqvgT');
    var getAll_1;
    try{
        KeyRange_44 = IDBKeyRange.bound('sHZCoovsHq', 'ByxElEG', false, true);
        getAll_1 = objectStore_322.getAll(KeyRange_44, 4142188251);
    }
    catch (e){
        KeyRange_45 = IDBKeyRange.only('wXSONmxJqvgT');
        getAll_1 = objectStore_322.getAll(KeyRange_45);
    }

    var clear_21 = objectStore_322.clear();
    var get_11;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('HWAdUPvBXQqy', true);
        get_11 = objectStore_322.get(KeyRange_46);
    }
    catch (e){
    }

    var delete_3;
    try{
        KeyRange_48 = IDBKeyRange.lowerBound('HWAdUPvBXQqy', false);
        delete_3 = objectStore_322.delete(KeyRange_48);
    }
    catch (e){
    }

    var put_12 = objectStore_322.put({f0_n: '<array>', f1_g: '<number>'}, 'lliAfOUe');
    var count_8 = objectStore_322.count();
    var put_13 = objectStore_322.put({f0_k: '<null>', f1_c: '<boolean>', f2_b: '<null>', f3_j: '<boolean>', f4_v: '<string>'}, 'RjOUUN');
    var get_12;
    try{
        KeyRange_50 = IDBKeyRange.only('RjOUUN');
        get_12 = objectStore_322.get(KeyRange_50);
    }
    catch (e){
    }

    var put_14 = objectStore_322.put({f0_m: '<number>', f1_q: '<null>', f2_i: '<boolean>'}, 'smepsRFymW');
    var add_12 = objectStore_322.add({f0_y: '<null>'}, 'csj');
    txn_67.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_67.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_67.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_68 = db.transaction(['objectStore_329'], 'readwrite', {durability:"default"})
    var objectStore_329 = txn_68.objectStore('objectStore_329');
    var clear_22 = objectStore_329.clear();
    var put_15 = objectStore_329.put({f0_v: '<number>', f1_a: '<object>', f2_w: '<boolean>', f3_e: '<number>', f4_e: '<number>', f5_p: '<null>', f6_u: '<string>', f7_e: '<array>'}, 'nawa');
    var add_13 = objectStore_329.add({f0_n: '<object>', f1_i: '<array>', f2_u: '<null>', f3_g: '<array>', f4_n: '<array>', f5_k: '<array>', f6_s: '<array>', f7_m: '<number>', f8_b: '<object>'}, 'fKsoRvBAF');
    var put_16 = objectStore_329.put({f0_a: '<null>', f1_q: '<boolean>', f2_s: '<null>'}, 'GPgfoRunm');
    var delete_4;
    try{
        KeyRange_52 = IDBKeyRange.bound('GPgfoRunm', 'nawa', true, true);
        delete_4 = objectStore_329.delete(KeyRange_52);
    }
    catch (e){
    }

    var add_14 = objectStore_329.add({f0_j: '<number>', f1_u: '<array>'}, 'PfNBRjQMh');
    var put_17 = objectStore_329.put({f0_c: '<null>', f1_z: '<string>', f2_h: '<boolean>', f3_m: '<number>', f4_c: '<object>', f5_x: '<boolean>', f6_m: '<null>', f7_v: '<object>', f8_q: '<boolean>'}, 'GAvp');
    var put_18 = objectStore_329.put({f0_n: '<object>', f1_a: '<string>', f2_m: '<null>'}, 'KEFfUBYYZzQ');
    var count_9 = objectStore_329.count();
    var get_13;
    try{
        KeyRange_54 = IDBKeyRange.bound('PfNBRjQMh', 'fKsoRvBAF', true, true);
        get_13 = objectStore_329.get(KeyRange_54);
    }
    catch (e){
    }

    var put_19 = objectStore_329.put({f0_k: '<object>', f1_a: '<boolean>'}, 'gJBxxCn');
    var getAll_2;
    try{
        KeyRange_56 = IDBKeyRange.only('fKsoRvBAF');
        getAll_2 = objectStore_329.getAll(KeyRange_56, 1944147473);
    }
    catch (e){
        KeyRange_57 = IDBKeyRange.only('GPgfoRunm');
        getAll_2 = objectStore_329.getAll(KeyRange_57);
    }

    var delete_5;
    try{
        KeyRange_58 = IDBKeyRange.bound('GPgfoRunm', 'nawa', false, true);
        delete_5 = objectStore_329.delete(KeyRange_58);
    }
    catch (e){
    }

    var count_10;
    try{
        KeyRange_60 = IDBKeyRange.only('KEFfUBYYZzQ');
        count_10 = objectStore_329.count(KeyRange_60);
    }
    catch (e){
    }

    var add_15 = objectStore_329.add({f0_d: '<null>', f1_d: '<string>', f2_t: '<string>', f3_q: '<number>', f4_b: '<boolean>'}, 'rRDPBBsFQk');
    var index_10 = objectStore_329.index('index_297');
    var add_16 = objectStore_329.add({f0_j: '<object>', f1_x: '<number>', f2_f: '<number>', f3_t: '<boolean>'}, 'DyidOqMUVOSO');
    var getAll_3;
    try{
        KeyRange_62 = IDBKeyRange.bound('gJBxxCn', 'GPgfoRunm', false, false);
        getAll_3 = objectStore_329.getAll(KeyRange_62);
    }
    catch (e){
        KeyRange_63 = IDBKeyRange.only('KEFfUBYYZzQ');
        getAll_3 = objectStore_329.getAll(KeyRange_63);
    }

    var get_14;
    try{
        KeyRange_64 = IDBKeyRange.only('GPgfoRunm');
        get_14 = objectStore_329.get(KeyRange_64);
    }
    catch (e){
    }

    var get_15;
    try{
        KeyRange_66 = IDBKeyRange.bound('gJBxxCn', 'DyidOqMUVOSO', true, true);
        get_15 = objectStore_329.get(KeyRange_66);
    }
    catch (e){
    }

    txn_68.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_68.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_68.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_69 = db.transaction(['objectStore_324'], 'readonly', {durability:"relaxed"})
    var objectStore_324 = txn_69.objectStore('objectStore_324');
    txn_69.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_69.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_69.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_9979')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};