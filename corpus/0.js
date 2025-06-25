let db;
const openRequest = window.indexedDB.open('str_7798')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var objectStore_0 = db.createObjectStore('objectStore_0', {keypath: 'bgTCfMC', autoIncrement: false});
  var count_0 = objectStore_0.count();
  var clear_0 = objectStore_0.clear();
  var index_0 = objectStore_0.createIndex('index_0', 'test', {multiEntry: true});
  objectStore_0.deleteIndex('index_0')
  var objectStore_1 = db.createObjectStore('objectStore_1', {keypath: 'FtenPZ'});
  var put_0 = objectStore_1.put({f0_d: '<string>', f1_o: '<array>', f2_e: '<null>', f3_u: '<array>', f4_q: '<number>', f5_m: '<boolean>', f6_a: '<object>', f7_m: '<number>'}, 'pKJBoZv');
  var delete_0 = objectStore_1.delete('IDBKeyRange.lowerBound(pKJBoZv,True)');
  delete_0.onsuccess = (event) => {
  var add_0;
  add_0 = objectStore_0.add({f0_z: '<array>'}, 'aFMGcJGaHTZB');
  var getAll_0;
  getAll_0 = objectStore_0.getAll();
  clear_0.onsuccess = (event) => {
  var delete_1;
  delete_1 = objectStore_0.delete('aFMGcJGaHTZB');
  var add_1;
  add_1 = objectStore_0.add({f0_y: '<object>', f1_g: '<number>', f2_p: '<number>', f3_z: '<boolean>', f4_j: '<null>', f5_b: '<object>'}, 'geiguQRRHXb');
  var put_1;
  put_1 = objectStore_1.put({f0_m: '<string>', f1_k: '<array>', f2_b: '<array>', f3_f: '<string>', f4_e: '<null>'}, 'ZHQsBPgAA');
  var delete_2;
  delete_2 = objectStore_1.delete('IDBKeyRange.lowerBound(ZHQsBPgAA,True)');
  delete_0.onsuccess = (event) => {
  var index_1;
  index_1 = objectStore_0.createIndex('index_1', 'test', {multiEntry: true});
  db.deleteObjectStore('objectStore_0')
  clear_0.onsuccess = (event) => {
  var get_0;
  get_0 = objectStore_1.get('IDBKeyRange.only(pKJBoZv)');
  db.deleteObjectStore('objectStore_1')
  put_0.onsuccess = (event) => {
  add_1.onsuccess = (event) => {
  var objectStore_2;
  objectStore_2 = db.createObjectStore('objectStore_2', {autoIncrement: false});
  put_1.onsuccess = (event) => {
  var clear_1;
  clear_1 = objectStore_2.clear();
  var index_2;
  index_2 = objectStore_2.createIndex('index_2', 'test', {unique: false, multiEntry: true});
  delete_2.onsuccess = (event) => {
  var count_1;
  count_1 = objectStore_2.count();
  getAll_0.onsuccess = (event) => {
  var add_2;
  add_2 = objectStore_2.add({f0_q: '<null>', f1_a: '<boolean>', f2_t: '<null>', f3_c: '<null>', f4_t: '<string>', f5_p: '<string>'}, 'EhSC');
  var getAll_1;
  getAll_1 = objectStore_2.getAll('EhSC', 686997980);
  get_0.onsuccess = (event) => {
  var get_1;
  get_1 = objectStore_2.get('IDBKeyRange.bound(EhSC,EhSC,False,True)');
  var index_3;
  index_3 = objectStore_2.createIndex('index_3', 'test', {unique: true, multiEntry: true});
  var objectStore_3;
  objectStore_3 = db.createObjectStore('objectStore_3', {keypath: 'NHsNFXxlGO'});
  var objectStore_4;
  objectStore_4 = db.createObjectStore('objectStore_4', {keypath: 'jJGhxnAncqOt', autoIncrement: false});
  db.deleteObjectStore('objectStore_4')
  var count_2;
  count_2 = objectStore_2.count();
  var index_4;
  index_4 = objectStore_3.createIndex('index_4', 'test');
  var put_2;
  put_2 = objectStore_3.put({f0_m: '<string>', f1_u: '<string>', f2_t: '<boolean>', f3_a: '<null>', f4_s: '<boolean>', f5_a: '<string>', f6_z: '<boolean>', f7_j: '<boolean>'}, 'uELCpkqIt');
};
  db.deleteObjectStore('objectStore_2')
};
};
  var objectStore_5;
  objectStore_5 = db.createObjectStore('objectStore_5', {autoIncrement: true});
  var clear_2;
  clear_2 = objectStore_5.clear();
};
};
  var objectStore_6;
  objectStore_6 = db.createObjectStore('objectStore_6');
  var getAllKeys_0;
  getAllKeys_0 = objectStore_6.getAllKeys();
  var index_5;
  index_5 = objectStore_6.createIndex('index_5', 'test', {multiEntry: true});
  var objectStore_7;
  objectStore_7 = db.createObjectStore('objectStore_7');
  var getAllKeys_1;
  getAllKeys_1 = objectStore_6.getAllKeys();
};
  var objectStore_8;
  objectStore_8 = db.createObjectStore('objectStore_8', {keypath: 'RQl'});
  var add_3;
  add_3 = objectStore_8.add({f0_y: '<string>', f1_l: '<array>'}, 'UkuNaPI');
  var delete_3;
  delete_3 = objectStore_8.delete('IDBKeyRange.only(UkuNaPI)');
};
};
};
};
  var objectStore_9 = db.createObjectStore('objectStore_9', {keypath: 'iJluU.SsumHyYpcooZ.yjVWOMimVuk.IxPcuUEla'});
  var put_3 = objectStore_9.put({f0_p: '<string>', f1_i: '<string>', f2_q: '<number>', f3_w: '<null>', f4_g: '<null>', f5_g: '<string>', f6_q: '<object>', f7_x: '<object>', f8_h: '<object>'}, 'xZjAZADgOx');
  var get_2 = objectStore_9.get('IDBKeyRange.bound(xZjAZADgOx,xZjAZADgOx,True,False)');
  var get_3 = objectStore_9.get('xZjAZADgOx');
  var put_4 = objectStore_9.put({f0_m: '<string>', f1_h: '<object>', f2_b: '<array>', f3_w: '<boolean>', f4_t: '<string>', f5_p: '<string>', f6_p: '<null>', f7_w: '<array>', f8_m: '<object>'}, 'cQWecak');
  var clear_3 = objectStore_9.clear();
  var clear_4 = objectStore_9.clear();
  var delete_4 = objectStore_9.delete('IDBKeyRange.only(xZjAZADgOx)');
  get_3.onsuccess = (event) => {
  var get_4;
  get_4 = objectStore_9.get('IDBKeyRange.bound(cQWecak,cQWecak,False,False)');
  var get_5;
  get_5 = objectStore_9.get('IDBKeyRange.only(cQWecak)');
  var put_5;
  put_5 = objectStore_9.put({f0_t: '<array>', f1_s: '<null>'}, 'iIHZB');
  var delete_5;
  delete_5 = objectStore_9.delete('cQWecak');
  var clear_5;
  clear_5 = objectStore_9.clear();
  delete_0.onsuccess = (event) => {
  var add_4;
  add_4 = objectStore_9.add({f0_z: '<object>', f1_v: '<number>', f2_q: '<object>', f3_h: '<number>', f4_g: '<boolean>', f5_k: '<string>'}, 'XsJ');
  var index_6;
  index_6 = objectStore_9.createIndex('index_6', 'test', {unique: false, multiEntry: true});
  delete_4.onsuccess = (event) => {
  var get_6;
  get_6 = objectStore_9.get('IDBKeyRange.bound(XsJ,iIHZB,False,True)');
  var add_5;
  add_5 = objectStore_9.add({f0_k: '<string>', f1_n: '<boolean>', f2_k: '<boolean>', f3_f: '<null>', f4_w: '<string>', f5_h: '<number>', f6_w: '<number>', f7_h: '<null>', f8_y: '<null>', f9_b: '<number>'}, 'Xwc');
  get_4.onsuccess = (event) => {
  db.deleteObjectStore('objectStore_9')
  delete_5.onsuccess = (event) => {
  get_4.onsuccess = (event) => {
  clear_0.onsuccess = (event) => {
  delete_4.onsuccess = (event) => {
  var objectStore_10;
  objectStore_10 = db.createObjectStore('objectStore_10');
  delete_0.onsuccess = (event) => {
  var put_6;
  put_6 = objectStore_10.put({f0_g: '<object>', f1_q: '<array>', f2_p: '<null>', f3_j: '<null>', f4_h: '<array>', f5_k: '<array>', f6_z: '<object>'}, 'njKgh');
  var getAll_2;
  getAll_2 = objectStore_10.getAll();
  var delete_6;
  delete_6 = objectStore_10.delete('njKgh');
  var objectStore_11;
  objectStore_11 = db.createObjectStore('objectStore_11', {keypath: 'PjScARJO.bNOsSUwU.YDgbaRA.NlTpDt.HIjqVtMPUKg.jheYIcBVbi.VFCNYUDWc.oadan'});
  put_6.onsuccess = (event) => {
  var put_7;
  put_7 = objectStore_10.put({f0_y: '<number>', f1_x: '<array>', f2_a: '<object>'}, 'xGCVmFzJLhF');
  var get_7;
  get_7 = objectStore_10.get('IDBKeyRange.only(njKgh)');
  var clear_6;
  clear_6 = objectStore_11.clear();
  var getAllKeys_2;
  getAllKeys_2 = objectStore_10.getAllKeys('IDBKeyRange.bound(xGCVmFzJLhF,njKgh,False,False)', 1393675838);
  var objectStore_12;
  objectStore_12 = db.createObjectStore('objectStore_12', {autoIncrement: true});
  var count_3;
  count_3 = objectStore_10.count();
  var count_4;
  count_4 = objectStore_10.count('IDBKeyRange.bound(xGCVmFzJLhF,njKgh,True,True)');
  var index_7;
  index_7 = objectStore_12.createIndex('index_7', 'test', {unique: true});
};
  var clear_7;
  clear_7 = objectStore_11.clear();
  var get_8;
  get_8 = objectStore_10.get('IDBKeyRange.bound(xGCVmFzJLhF,njKgh,False,False)');
  var clear_8;
  clear_8 = objectStore_10.clear();
  var objectStore_13;
  objectStore_13 = db.createObjectStore('objectStore_13');
  var index_8;
  index_8 = objectStore_11.createIndex('index_8', 'test', {unique: true});
};
  var getAll_3;
  getAll_3 = objectStore_10.getAll('xGCVmFzJLhF');
  var count_5;
  count_5 = objectStore_10.count();
  var put_8;
  put_8 = objectStore_10.put({f0_s: '<boolean>', f1_m: '<null>', f2_b: '<null>', f3_u: '<array>', f4_w: '<string>'}, 'wDLGckN');
  var objectStore_14;
  objectStore_14 = db.createObjectStore('objectStore_14', {keypath: 'ixOuFgJKk.eghSlmi.ujkomlYI.WqvecWhyu.FLD.otmr.fbf', autoIncrement: false});
  var getAllKeys_3;
  getAllKeys_3 = objectStore_10.getAllKeys();
};
};
};
  var objectStore_15;
  objectStore_15 = db.createObjectStore('objectStore_15', {keypath: 'URWrod.XWqv.cKPHmIFHR.elrbXbADhQ.NmNyAL.zPjaHpqhxkIM.YHN.sXY.hPiZSS.NoaynjES', autoIncrement: true});
  var clear_9;
  clear_9 = objectStore_15.clear();
};
};
};
  var objectStore_16;
  objectStore_16 = db.createObjectStore('objectStore_16', {autoIncrement: true});
  var count_6;
  count_6 = objectStore_16.count();
};
};
  put_4.onsuccess = (event) => {
  put_3.onsuccess = (event) => {
  put_0.onsuccess = (event) => {
  get_3.onsuccess = (event) => {
  delete_0.onsuccess = (event) => {
  var objectStore_17;
  objectStore_17 = db.createObjectStore('objectStore_17');
  var objectStore_18;
  objectStore_18 = db.createObjectStore('objectStore_18', {keypath: 'wsbzuXnnfj', autoIncrement: false});
  put_0.onsuccess = (event) => {
  var clear_10;
  clear_10 = objectStore_17.clear();
  var index_9;
  index_9 = objectStore_18.createIndex('index_9', 'test');
  delete_4.onsuccess = (event) => {
  var count_7;
  count_7 = objectStore_18.count();
  var clear_11;
  clear_11 = objectStore_18.clear();
  var objectStore_19;
  objectStore_19 = db.createObjectStore('objectStore_19', {autoIncrement: false});
  put_4.onsuccess = (event) => {
  var index_10;
  index_10 = objectStore_17.createIndex('index_10', 'test', {multiEntry: true});
  var clear_12;
  clear_12 = objectStore_18.clear();
  clear_3.onsuccess = (event) => {
  var index_11;
  index_11 = objectStore_19.createIndex('index_11', 'test', {unique: true, multiEntry: false});
  var index_12;
  index_12 = objectStore_18.createIndex('index_12', 'test', {unique: false});
  var objectStore_20;
  objectStore_20 = db.createObjectStore('objectStore_20', {autoIncrement: true});
  put_0.onsuccess = (event) => {
  var index_13;
  index_13 = objectStore_19.createIndex('index_13', 'test', {unique: false, multiEntry: true});
  var clear_13;
  clear_13 = objectStore_18.clear();
  var add_6;
  add_6 = objectStore_20.add({f0_p: '<array>', f1_e: '<array>', f2_l: '<string>', f3_v: '<null>', f4_r: '<number>', f5_u: '<object>', f6_r: '<object>', f7_m: '<string>', f8_r: '<object>', f9_l: '<object>'}, 'xJmsHFABJhm');
  var getAll_4;
  getAll_4 = objectStore_17.getAll();
  var count_8;
  count_8 = objectStore_18.count();
};
  var getAll_5;
  getAll_5 = objectStore_19.getAll();
  var index_14;
  index_14 = objectStore_18.createIndex('index_14', 'test', {unique: false});
  var put_9;
  put_9 = objectStore_17.put({f0_s: '<number>', f1_x: '<boolean>', f2_b: '<null>'}, 'qXKYQh');
};
  var clear_14;
  clear_14 = objectStore_19.clear();
  var put_10;
  put_10 = objectStore_18.put({f0_h: '<string>', f1_g: '<number>', f2_a: '<number>', f3_a: '<array>', f4_t: '<string>', f5_x: '<array>', f6_a: '<string>'}, 'EDXMjVx');
  var index_15;
  index_15 = objectStore_17.createIndex('index_15', 'test', {multiEntry: true});
  var count_9;
  count_9 = objectStore_17.count('IDBKeyRange.lowerBound(qXKYQh,True)');
  var getAllKeys_4;
  getAllKeys_4 = objectStore_19.getAllKeys();
};
  var index_16;
  index_16 = objectStore_18.createIndex('index_16', 'test', {multiEntry: true});
  var getAllKeys_5;
  getAllKeys_5 = objectStore_17.getAllKeys('qXKYQh', 3085046853);
  var put_11;
  put_11 = objectStore_19.put({f0_t: '<array>', f1_y: '<array>'}, 'wxabCymicBK');
  var put_12;
  put_12 = objectStore_17.put({f0_t: '<string>', f1_e: '<null>'}, 'KwqOYPE');
};
  var get_9;
  get_9 = objectStore_17.get('IDBKeyRange.only(qXKYQh)');
  var add_7;
  add_7 = objectStore_17.add({f0_l: '<boolean>', f1_c: '<object>'}, 'FLXUqnuBzG');
  var getAllKeys_6;
  getAllKeys_6 = objectStore_17.getAllKeys('FLXUqnuBzG');
  var add_8;
  add_8 = objectStore_18.add({f0_y: '<string>', f1_q: '<number>', f2_n: '<number>', f3_a: '<string>', f4_x: '<number>', f5_l: '<object>', f6_r: '<boolean>'}, 'imknLzgQwGVV');
  db.deleteObjectStore('objectStore_18')
};
  var index_17;
  index_17 = objectStore_17.createIndex('index_17', 'test', {unique: true});
  var getAll_6;
  getAll_6 = objectStore_17.getAll('IDBKeyRange.lowerBound(KwqOYPE,True)', 4051189979);
  var count_10;
  count_10 = objectStore_17.count('IDBKeyRange.only(KwqOYPE)');
  var delete_7;
  delete_7 = objectStore_17.delete('IDBKeyRange.bound(qXKYQh,qXKYQh,False,True)');
};
};
  var objectStore_21;
  objectStore_21 = db.createObjectStore('objectStore_21', {keypath: 'XFWkxFmjKjY.yRhahDZj.jPstQzbgg.HHLNelAKWl.EDa'});
};
  var objectStore_22;
  objectStore_22 = db.createObjectStore('objectStore_22');
  db.deleteObjectStore('objectStore_22')
};
};
  var objectStore_23 = db.createObjectStore('objectStore_23', {autoIncrement: false});
  var add_9 = objectStore_23.add({f0_m: '<array>', f1_n: '<array>', f2_h: '<string>', f3_p: '<number>', f4_f: '<boolean>', f5_e: '<object>'}, 'Kkd');
  var delete_8 = objectStore_23.delete('Kkd');
  var index_18 = objectStore_23.createIndex('index_18', 'test', {unique: true});
  var put_13 = objectStore_23.put({f0_d: '<boolean>', f1_h: '<null>', f2_x: '<array>'}, 'jWJjX');
  var add_10 = objectStore_23.add({f0_q: '<string>', f1_z: '<boolean>', f2_d: '<string>', f3_d: '<array>', f4_e: '<boolean>', f5_y: '<object>', f6_l: '<array>'}, 'zHOayZc');
  db.deleteObjectStore('objectStore_23')
  get_2.onsuccess = (event) => {
  var objectStore_24;
  objectStore_24 = db.createObjectStore('objectStore_24', {keypath: 'pcpQxJ.TgKFbGSZTPKD.MSytlzFXbBS'});
  put_3.onsuccess = (event) => {
  var put_14;
  put_14 = objectStore_24.put({f0_y: '<null>', f1_c: '<boolean>', f2_u: '<null>', f3_r: '<number>', f4_c: '<array>', f5_j: '<null>'}, 'dMZjqsQ');
  var put_15;
  put_15 = objectStore_24.put({f0_h: '<array>'}, 'xkFnJN');
  db.deleteObjectStore('objectStore_24')
  delete_4.onsuccess = (event) => {
  put_4.onsuccess = (event) => {
  var objectStore_25;
  objectStore_25 = db.createObjectStore('objectStore_25');
  var clear_15;
  clear_15 = objectStore_25.clear();
  delete_4.onsuccess = (event) => {
  var objectStore_26;
  objectStore_26 = db.createObjectStore('objectStore_26', {autoIncrement: false});
  db.deleteObjectStore('objectStore_26')
  put_13.onsuccess = (event) => {
  var clear_16;
  clear_16 = objectStore_25.clear();
  var getAll_7;
  getAll_7 = objectStore_25.getAll();
  var index_19;
  index_19 = objectStore_25.createIndex('index_19', 'test', {unique: false});
  clear_16.onsuccess = (event) => {
  var clear_17;
  clear_17 = objectStore_25.clear();
  var getAll_8;
  getAll_8 = objectStore_25.getAll();
  var put_16;
  put_16 = objectStore_25.put({f0_b: '<null>', f1_d: '<null>', f2_l: '<string>', f3_b: '<object>', f4_q: '<string>', f5_u: '<boolean>', f6_d: '<string>'}, 'Qmf');
  getAll_8.onsuccess = (event) => {
  var objectStore_27;
  objectStore_27 = db.createObjectStore('objectStore_27', {keypath: 'MiEpmNR', autoIncrement: false});
  var index_20;
  index_20 = objectStore_25.createIndex('index_20', 'test', {unique: false});
  var objectStore_28;
  objectStore_28 = db.createObjectStore('objectStore_28', {autoIncrement: true});
  getAll_7.onsuccess = (event) => {
  var index_0;
  index_0 = objectStore_25.index('index_19');
  var objectStore_29;
  objectStore_29 = db.createObjectStore('objectStore_29', {keypath: 'gnyYK'});
  var clear_18;
  clear_18 = objectStore_27.clear();
  get_2.onsuccess = (event) => {
  var put_17;
  put_17 = objectStore_25.put({f0_s: '<boolean>', f1_s: '<array>', f2_j: '<object>', f3_j: '<object>', f4_k: '<array>', f5_p: '<null>', f6_q: '<number>', f7_q: '<object>'}, 'NoajTDVG');
  var get_10;
  get_10 = objectStore_25.get('IDBKeyRange.lowerBound(Qmf,False)');
  var count_11;
  count_11 = objectStore_25.count();
  var index_21;
  index_21 = objectStore_27.createIndex('index_21', 'test', {unique: true, multiEntry: false});
};
  var index_22;
  index_22 = objectStore_28.createIndex('index_22', 'test', {unique: true, multiEntry: true});
  var put_18;
  put_18 = objectStore_25.put({f0_y: '<boolean>', f1_e: '<number>', f2_j: '<null>', f3_r: '<number>', f4_p: '<number>'}, 'XDNReS');
  var add_11;
  add_11 = objectStore_28.add({f0_s: '<number>', f1_m: '<string>', f2_n: '<number>', f3_h: '<object>', f4_w: '<boolean>'}, 'HnwaSJUOzc');
  objectStore_25.deleteIndex('index_20')
};
  var add_12;
  add_12 = objectStore_27.add({f0_c: '<string>', f1_b: '<string>', f2_z: '<string>', f3_s: '<object>', f4_p: '<boolean>', f5_p: '<object>', f6_k: '<boolean>'}, 'wgLqnavdeMzF');
  var objectStore_30;
  objectStore_30 = db.createObjectStore('objectStore_30', {keypath: 'kjEaZGsECB.cwAxtGaWKM'});
  var add_13;
  add_13 = objectStore_28.add({f0_p: '<object>', f1_g: '<string>', f2_v: '<array>', f3_i: '<null>', f4_t: '<boolean>', f5_g: '<number>', f6_j: '<null>', f7_a: '<string>'}, 'tDNUvzqm');
  var add_14;
  add_14 = objectStore_27.add({f0_p: '<object>', f1_w: '<boolean>', f2_a: '<object>'}, 'tIZUwpPwJXcQ');
};
  var getAll_9;
  getAll_9 = objectStore_25.getAll('IDBKeyRange.bound(NoajTDVG,Qmf,False,False)', 3726383130);
  var index_23;
  index_23 = objectStore_25.createIndex('index_23', 'test', {unique: true, multiEntry: false});
  var getAllKeys_7;
  getAllKeys_7 = objectStore_25.getAllKeys();
  var count_12;
  count_12 = objectStore_25.count('IDBKeyRange.bound(XDNReS,NoajTDVG,False,True)');
  var getAllKeys_8;
  getAllKeys_8 = objectStore_25.getAllKeys('NoajTDVG', 3479429247);
};
  var index_24;
  index_24 = objectStore_25.createIndex('index_24', 'test', {multiEntry: false});
  var getAll_10;
  getAll_10 = objectStore_25.getAll('XDNReS');
  var delete_9;
  delete_9 = objectStore_25.delete('IDBKeyRange.bound(NoajTDVG,NoajTDVG,False,True)');
  var count_13;
  count_13 = objectStore_25.count('IDBKeyRange.lowerBound(XDNReS,True)');
  var getAll_11;
  getAll_11 = objectStore_25.getAll();
};
  var delete_10;
  delete_10 = objectStore_25.delete('XDNReS');
  var get_11;
  get_11 = objectStore_25.get('IDBKeyRange.bound(NoajTDVG,Qmf,True,True)');
  var put_19;
  put_19 = objectStore_25.put({f0_z: '<boolean>', f1_c: '<number>', f2_l: '<object>', f3_a: '<boolean>', f4_h: '<object>', f5_r: '<null>', f6_j: '<number>', f7_p: '<string>', f8_i: '<boolean>'}, 'HnLtoG');
  var getAll_12;
  getAll_12 = objectStore_25.getAll('IDBKeyRange.bound(XDNReS,NoajTDVG,False,True)', 388704636);
};
  var objectStore_31;
  objectStore_31 = db.createObjectStore('objectStore_31', {keypath: 'xkOLDejtvfl'});
  db.deleteObjectStore('objectStore_25')
};
};
};
};
  var objectStore_32 = db.createObjectStore('objectStore_32', {keypath: 'zgNWQ'});
  var objectStore_33 = db.createObjectStore('objectStore_33');
  var getAllKeys_9 = objectStore_33.getAllKeys();
  var getAll_13 = objectStore_33.getAll();
  var index_25 = objectStore_33.createIndex('index_25', 'test', {multiEntry: false});
  var count_14 = objectStore_32.count();
  db.deleteObjectStore('objectStore_33')
  db.deleteObjectStore('objectStore_32')
  var objectStore_34 = db.createObjectStore('objectStore_34');
  var clear_19 = objectStore_34.clear();
  var count_15 = objectStore_34.count();
};
const deleteRequest = indexedDB.deleteDatabase('str_7798')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
