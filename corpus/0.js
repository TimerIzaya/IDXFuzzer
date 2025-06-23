let db;
const openRequest = window.indexedDB.open('str_6874', '67')
openRequest.onupgradeneeded = (event) => {
  console.log('db onupgraded trigered');
  db = event.target.result;
  var store_0 = db.createObjectStore('store_0', {autoIncrement: true});
  store_0.add({f0_p: 92, f1_j: false, f2_r: {f0_v: {f0_u: false, f1_r: null, f2_u: {f0_z: 'MZAWKkFNTt', f1_i: 'vBhbrNQ'}, f3_r: 57, f4_t: {f0_l: null, f1_v: null, f2_g: null, f3_w: 'QIMWTimkLmu', f4_r: {f0_a: 39, f1_g: {f0_n: {f0_y: {f0_w: true, f1_d: 7, f2_m: {f0_a: 'tzFDTF', f1_t: null}, f3_c: {f0_k: 33, f1_p: true, f2_x: [20, true], f3_d: [false, 'rHBSYTEhi', true], f4_z: [null]}, f4_n: 'mzsQWdj', f5_t: 'UlbDQUcGmhO', f6_m: false, f7_c: true, f8_z: 'UuslshmmkD', f9_i: ['Lhexn']}}, f1_p: [null, null], f2_j: [null, null, 'ZPfaH'], f3_r: {f0_y: false, f1_r: null}}, f2_m: null, f3_m: {f0_q: 'MABfrzZVVr', f1_g: 'UikvHt', f2_b: [true, true], f3_p: true, f4_l: 1, f5_x: true}, f4_i: 45}}, f5_m: true, f6_f: {f0_k: 'oYPdnbXm', f1_u: 18, f2_o: [42], f3_u: [true, null], f4_c: 'OOblBBKyUuIE', f5_u: {f0_y: 'SYbp', f1_b: null, f2_l: 32, f3_f: 'EMsNOlvZEYT'}, f6_g: 'pBwfRfOzcePb'}, f7_g: [44, false, 21]}, f1_l: ['PBffqabsYLw', null, null], f2_g: null}, f3_e: [true], f4_f: 14, f5_j: null, f6_e: true, f7_z: ['nyP', 21], f8_m: 33, f9_z: 'pCmSq'}, 'nmRVbMdfmK')
  var store_1 = db.createObjectStore('store_1', {keypath: 'fTjDpPbI', autoIncrement: true});
  var index_0 = store_1.createIndex('index_0', 'test', {multiEntry: true});
  var index_1 = store_0.createIndex('index_1', 'test', {unique: false});
  store_0.add({f0_x: 29, f1_f: null, f2_k: null, f3_y: 'RXnnkW', f4_l: null, f5_y: null, f6_k: 'ObuF', f7_q: true, f8_r: null}, 'SCSZFNmkvGK')
  store_0.add({f0_y: 'sHZNgcufI'}, 'LBjZtCSrlCD')
  var index_2 = store_0.createIndex('index_2', 'test', {multiEntry: false});
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1');
  var index_0 = store_1.createIndex('index_0', 'test', {unique: true});
  var store_2 = db.createObjectStore('store_2', {keypath: 'juArnifq'});
  var index_3 = store_0.createIndex('index_3', 'test', {multiEntry: false});
  db.deleteObjectStore('store_2')
  var index_4 = store_1.createIndex('index_4', 'test', {multiEntry: false});
  store_0.deleteIndex('index_2')
  var index_2 = store_1.createIndex('index_2', 'test');
  db.deleteObjectStore('store_1')
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: false});
  store_0.add({f0_e: null}, 'VKQjvP')
  db.deleteObjectStore('store_1')
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'OWNsxPoQOg.HWAMqNtU.HUWcu.lyE'});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false, multiEntry: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  var store_1 = db.createObjectStore('store_1', {keypath: 'luVfj'});
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'RdpdYTDWWPpI', autoIncrement: false});
  var index_0 = store_0.createIndex('index_0', 'test', {unique: false});
  store_0.deleteIndex('index_0')
  var index_0 = store_0.createIndex('index_0', 'test');
  var store_1 = db.createObjectStore('store_1');
  db.deleteObjectStore('store_1')
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'sTxH'});
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0');
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'OvUHtHDS', autoIncrement: false});
  store_0.add({f0_i: null, f1_u: true, f2_a: {f0_z: {f0_p: 7, f1_h: true}, f1_e: [false, 90, 'UoReeAe'], f2_z: [true, 'TDgjpVqh', null], f3_b: 'vNy', f4_t: true, f5_y: 'rWebVAKyR', f6_h: 68, f7_i: 71, f8_h: null}, f3_u: [67, 37, true], f4_y: true}, 'taNbaoH')
  var store_1 = db.createObjectStore('store_1', {autoIncrement: false});
  db.deleteObjectStore('store_0')
  db.deleteObjectStore('store_1')
  var store_0 = db.createObjectStore('store_0', {autoIncrement: false});
  var store_1 = db.createObjectStore('store_1', {keypath: 'BlGuknlnSb'});
  var store_2 = db.createObjectStore('store_2', {keypath: 'goekewyaKC'});
  var store_3 = db.createObjectStore('store_3', {keypath: 'YYREjyWdAaD.hnJd.wrQaxmYUm', autoIncrement: true});
  store_1.add({f0_k: true, f1_i: 53, f2_x: true, f3_a: true, f4_m: 37, f5_u: null, f6_o: null, f7_f: true, f8_y: {f0_l: {f0_f: 68, f1_n: ['PLqGLFNaLWs'], f2_s: {f0_i: true, f1_j: 22, f2_d: true, f3_y: 'IeHOqSMhVK', f4_d: 'sFbTAgi', f5_a: {f0_p: false, f1_p: 88, f2_i: false}, f6_x: false, f7_w: [true, 48, true], f8_z: false}, f3_w: [false, 'qMSPPWD', null], f4_w: null, f5_m: [false], f6_j: [15], f7_z: {f0_m: 7, f1_f: ['WEQBRW'], f2_m: null, f3_c: 'mNOMysitvl', f4_t: false, f5_f: true, f6_l: true, f7_d: [15, 37, 'HWGkhyAtidfv'], f8_z: 32}}, f1_c: false, f2_q: 5, f3_t: {f0_e: [false, 'acX', 'bjM'], f1_t: 9, f2_j: 35}}}, 'DzWoBwYvF')
  var index_0 = store_3.createIndex('index_0', 'test');
  var store_4 = db.createObjectStore('store_4', {keypath: 'aRnwEBQgGFpo', autoIncrement: false});
  var store_5 = db.createObjectStore('store_5', {keypath: 'viAfYOhb', autoIncrement: false});
  store_1.add({f0_y: null, f1_m: false, f2_a: ['eKBImukMgLB', false, true]}, 'RBkyXr')
  db.deleteObjectStore('store_3')
  store_2.add({f0_e: [true]}, 'nfJoflUUP')
  db.deleteObjectStore('store_5')
  var index_0 = store_0.createIndex('index_0', 'test', {unique: true, multiEntry: false});
  store_0.deleteIndex('index_0')
  var store_3 = db.createObjectStore('store_3', {keypath: 'IIbHjnDbZ'});
  store_4.add({f0_g: 'FqYsY'}, 'bDBRVclTXcP')
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: false});
  var store_5 = db.createObjectStore('store_5');
  var index_1 = store_2.createIndex('index_1', 'test', {multiEntry: false});
  db.deleteObjectStore('store_1')
  store_2.add({f0_l: [19, null, 97], f1_b: {f0_t: null, f1_f: [true, 73, true], f2_t: false, f3_t: 14, f4_e: [true], f5_l: false, f6_n: [false], f7_t: null, f8_y: [false, null], f9_s: [true]}, f2_v: {f0_f: null}, f3_b: {f0_c: [false, 60, 'MTBcWcD'], f1_g: ['IPcpMQgACCJC'], f2_y: 'aDBuCJTcbs', f3_q: {f0_l: ['GOCwfoknMl', false], f1_a: null, f2_g: 'CqsPeB', f3_t: null}}, f4_l: null, f5_k: 'YkOKakkcF', f6_i: {f0_p: 36, f1_p: false, f2_m: 'nIyEAWQ', f3_t: true}, f7_l: 39, f8_i: 'uzvSZFx', f9_g: 'wRHrswt'}, 'AGzQUf')
  db.deleteObjectStore('store_4')
  var index_2 = store_0.createIndex('index_2', 'test', {multiEntry: false});
  store_0.add({f0_c: null, f1_d: {f0_v: ['zkkUjBhg', 87, 'SsKrtWrQF'], f1_b: {f0_u: true, f1_i: 42, f2_a: [false, true]}, f2_l: null, f3_m: 'haMgkfyU', f4_u: {f0_u: null, f1_z: false, f2_r: 49, f3_j: [true, 'MDOwGWAMkci', false], f4_g: 'CNtCVH', f5_e: [74], f6_t: true}, f5_o: [false, 'uSuoJkLa', null], f6_l: 21}, f2_f: false, f3_v: 'UOdYLExBui', f4_v: {f0_x: null, f1_k: false, f2_d: true, f3_m: {f0_m: 89, f1_d: ['gHjEeU', 'bYKuSwYALq'], f2_o: 58, f3_q: 61}, f4_n: null, f5_f: 'vuyQCB', f6_j: 40, f7_f: {f0_l: {f0_o: null, f1_w: [true, 'ZNoKJQoeLL'], f2_x: false, f3_i: false, f4_x: ['bGwu', false], f5_u: 'uwAWcr', f6_u: 'jUQhu', f7_v: {f0_s: {f0_k: 'HNqaFyOEvOk', f1_w: {f0_u: 29}, f2_v: null, f3_c: 'JDyXtql'}}}, f1_r: {f0_j: true, f1_o: null, f2_r: true, f3_j: 45, f4_t: [79, false], f5_i: null, f6_o: {f0_c: ['OafMDcVDwV', 'bNAtxHpzPzl'], f1_b: null, f2_k: false, f3_z: null, f4_g: false, f5_b: [null, true, true], f6_r: false, f7_f: false, f8_u: null}, f7_o: {f0_z: 39, f1_z: ['XmNzQwy']}, f8_x: false, f9_f: 19}, f2_v: {f0_f: null, f1_k: null, f2_u: [78, 51, true], f3_h: 'XyISj', f4_p: {f0_d: null, f1_q: null, f2_k: null, f3_n: null, f4_k: 'JfmHN', f5_v: true}, f5_c: null, f6_r: {f0_p: {f0_p: false, f1_l: 'PZkoXUU', f2_l: null, f3_p: {f0_k: true, f1_q: 'fQVfYRDOTxZU', f2_x: true}, f4_e: true}, f1_w: [true], f2_x: 18}, f7_d: null, f8_b: {f0_m: 79, f1_i: [59, 17, 26], f2_f: true, f3_u: [41, 97], f4_w: false, f5_c: [56, false, 56], f6_s: true, f7_b: null}, f9_c: 'OzIojSum'}, f3_n: null}, f8_f: 70}, f5_e: null, f6_q: [false, 'hcvpLK', 41], f7_m: false}, 'WkY')
  db.deleteObjectStore('store_3')
  store_2.add({f0_d: null, f1_y: [false, 20], f2_w: false, f3_z: null, f4_c: null, f5_u: 'Sytn', f6_d: 65, f7_n: {f0_k: 'kXgLsbcDuRgp'}, f8_n: ['MOlFQ'], f9_x: [53]}, 'LNEjukat')
  store_0.add({f0_d: null, f1_e: null, f2_t: 79, f3_e: false, f4_p: null}, 'UebyWW')
  var store_1 = db.createObjectStore('store_1', {autoIncrement: true});
  db.deleteObjectStore('store_2')
  store_5.add({f0_r: false, f1_i: 51, f2_r: false, f3_x: 'GmZwuFW', f4_l: true, f5_l: {f0_c: [true, 'kjtjCD', 'QXNUv'], f1_t: {f0_n: 'lca', f1_s: false, f2_b: {f0_s: false, f1_u: null, f2_t: null, f3_a: 5, f4_r: 91, f5_h: true, f6_f: [12], f7_y: 'KawSRWabm', f8_f: 93}, f3_x: null, f4_s: {f0_c: true, f1_t: false, f2_e: null, f3_a: {f0_k: [false, 32, 'hObeeSJHaz'], f1_d: 'Uso', f2_l: null, f3_y: true, f4_n: 'yCuwVzhDE', f5_t: false, f6_r: [false], f7_c: 'NNVRfop', f8_r: 'VMtnCLfEeSn'}, f4_x: {f0_e: false, f1_s: null, f2_j: [true, 'nXsDchO', true], f3_g: false, f4_w: null}, f5_o: false, f6_j: 24, f7_z: null}, f5_j: {f0_m: 'Jqyrs', f1_c: 42, f2_z: true, f3_p: null, f4_m: true, f5_c: {f0_v: 11, f1_w: [false, 'EKHUNWgDO'], f2_y: null, f3_b: null}, f6_k: [true, false], f7_d: null, f8_a: [true]}}, f2_k: ['kGePZRHwKga'], f3_d: false, f4_k: 28, f5_j: 73, f6_t: null}, f6_s: {f0_t: [41], f1_i: 7, f2_b: 36, f3_i: 83}, f7_k: {f0_s: false}, f8_c: {f0_m: null, f1_x: false, f2_r: null, f3_y: [null, 'kKW', true], f4_u: {f0_u: 'VNCNS', f1_s: 'mTzfEZkyBOaO', f2_x: 'HCwGxl', f3_c: {f0_k: 14, f1_p: {f0_z: {f0_m: true, f1_k: null, f2_c: {f0_b: true, f1_u: [true, true], f2_s: 'mEj', f3_l: [null, true, null], f4_g: false, f5_n: {f0_s: null, f1_e: true, f2_v: null, f3_g: [true, false], f4_r: null}, f6_j: null}, f3_q: 98, f4_q: null, f5_h: true, f6_f: {f0_g: 100, f1_g: 30, f2_z: {f0_l: {f0_r: 'xVWVVWwln', f1_j: {f0_c: 'erHKnuUSLN', f1_a: null, f2_x: true, f3_p: null, f4_n: ['lMaizRPOkY', 'HejcosUxws', 'yapWD'], f5_f: ['ETGQX']}, f2_p: 20, f3_w: {f0_s: 'MlyGzrPIFp', f1_a: 91, f2_k: null, f3_w: 15, f4_v: 75, f5_z: [false], f6_f: 85, f7_g: ['sMqs'], f8_j: 'DczRttUe', f9_b: 'ZcxNohvXz'}, f4_x: 15, f5_b: false, f6_s: 86, f7_e: {f0_m: 75, f1_e: 96, f2_p: [true, 'rnxgrvdw'], f3_e: 5, f4_c: 'hyCLjtIAlCSK', f5_i: null, f6_u: {f0_w: true}, f7_b: [null, true], f8_n: true, f9_w: 60}, f8_t: null}, f1_c: {f0_g: 25, f1_j: true, f2_j: 'btz', f3_b: null, f4_c: 'JXab', f5_d: false}, f2_e: {f0_t: true, f1_q: 1, f2_r: [true], f3_c: null, f4_b: {f0_y: 'Rzivi', f1_d: 'fzRHbafNvcvz'}, f5_j: [65, true], f6_j: ['AIXS', 'eAxaSxB'], f7_x: {f0_d: null}, f8_m: 'VaNAnlMyyzK'}}, f3_f: null, f4_f: {f0_k: 'aDVRQ', f1_o: true, f2_p: {f0_d: 'wqRMcoZzlT', f1_f: {f0_g: 'EWBkuvUPKA', f1_t: {f0_g: {f0_q: true, f1_q: null, f2_a: [78, 9], f3_j: true, f4_c: null, f5_x: 100, f6_w: true, f7_o: {f0_v: null, f1_k: null, f2_q: true, f3_a: null, f4_b: {f0_y: {f0_g: ['bqC'], f1_k: 'MljfUirDcvL', f2_b: {f0_w: ['SVgk'], f1_k: 'EQZUE', f2_q: {f0_f: 'MON'}}, f3_a: 'JPUxJK', f4_u: null, f5_y: [true, 18], f6_v: null, f7_x: null, f8_l: null, f9_g: [99, 'YXXcpOulsQ']}, f1_r: null, f2_o: [56, 17, 'rWQiScOs'], f3_a: true, f4_t: 'TcMjx', f5_c: {f0_a: {f0_l: [true, 72], f1_y: ['pwTGSQcW', 4, true]}, f1_h: 93, f2_f: {f0_f: [true], f1_w: false, f2_w: false, f3_z: {f0_h: 35, f1_b: null, f2_l: {f0_i: 'rfsqyCXdWWX', f1_a: 'FlMuxYtaqF', f2_q: {f0_b: null, f1_k: true, f2_c: true, f3_w: {f0_j: 17, f1_z: [true, 'UBBEXaNiOgvL'], f2_l: {f0_p: {f0_d: {f0_n: 64, f1_o: [null, true], f2_e: null, f3_g: {f0_z: {f0_s: null}, f1_b: null, f2_b: 'NAbjMl'}, f4_z: [89, true, true], f5_g: {f0_q: null, f1_c: 28, f2_k: {f0_f: {f0_y: null, f1_x: 7, f2_b: false, f3_l: {f0_t: ['hQIThRyclz', null], f1_m: null, f2_k: 6, f3_y: null, f4_c: 'qXjGlOWEObYx'}}, f1_e: {f0_o: true, f1_v: true, f2_z: false}, f2_a: 47, f3_u: 94, f4_a: false, f5_a: null, f6_u: null, f7_l: 13}, f3_j: [90, true, 'TFsj'], f4_q: 73, f5_l: [false, 'jhidKhn', false], f6_n: 85, f7_j: [13, 'rDFC', 'jQQYB']}, f6_q: null, f7_e: 99, f8_x: {f0_x: false, f1_o: null, f2_w: {f0_h: 32, f1_w: [true, true, 64], f2_m: false, f3_f: true, f4_d: true, f5_m: {f0_w: {f0_i: 'ISRajXBqCTTa', f1_w: [78], f2_a: [62, 'nAGZSN', 52], f3_o: 9, f4_w: null}, f1_l: 'DZOut', f2_f: 'fpIijQaVkzG', f3_o: 'RvxlqnwdOdi', f4_e: null}, f6_f: null, f7_m: {f0_h: 'ERTJQiqYaC', f1_v: 'RHZdMrSFI', f2_t: {f0_n: {f0_v: null, f1_q: 95, f2_t: ['LvYYvx'], f3_r: {f0_v: [false, 46], f1_x: null, f2_t: [false, 15]}}, f1_a: [false, false, 52], f2_j: 'gmoKSNnnj', f3_h: null, f4_s: 29, f5_l: 7, f6_m: [false]}, f3_q: [false, false], f4_l: ['uiobv', 'hWhWtKAKYr'], f5_f: {f0_q: false, f1_n: true, f2_e: {f0_w: null, f1_z: 80, f2_g: ['ZXrFJzIY'], f3_w: [87, false, 40], f4_a: 83, f5_w: [false, 72, 11], f6_m: null, f7_i: 'IFJghfzk', f8_r: null}, f3_l: ['jcTDU', false, false], f4_r: 84, f5_f: [false], f6_w: true, f7_e: null}}}, f3_p: 40, f4_m: null, f5_q: true, f6_z: ['vcrHEzPmU', 63, false], f7_z: 'HAuoMgWczoD'}}, f1_w: 'wAtaBMCEhrM', f2_t: ['jGmerSUL', 'JnXrqzHly'], f3_m: null}, f1_b: [true, 63], f2_c: true}, f3_u: true, f4_b: {f0_r: [null, null], f1_t: null, f2_w: [true], f3_m: 11, f4_n: 88, f5_v: 45, f6_u: null, f7_s: {f0_f: false, f1_x: {f0_z: 0, f1_l: [false, 29, false], f2_n: ['YhXkWMXJ'], f3_e: [false], f4_z: null}, f2_z: null}, f8_w: {f0_n: true, f1_m: 'HiXzD', f2_b: {f0_k: null, f1_x: 'KGG', f2_d: false, f3_u: true}, f3_g: true, f4_g: [false, 'woSITxMeKT', true], f5_c: null}, f9_z: 49}, f5_a: 21, f6_q: {f0_h: false, f1_y: null, f2_a: 58}, f7_k: 96}, f4_a: [true]}, f3_g: 'QrFfxMeOGB', f4_v: null, f5_z: 40, f6_s: {f0_b: 89, f1_e: 8}, f7_i: {f0_i: null, f1_t: {f0_p: 'BNTWeJNqDo', f1_e: {f0_u: null, f1_a: {f0_j: 33, f1_w: {f0_p: 'LEfe', f1_s: [null], f2_y: 4, f3_n: 65, f4_u: [64, 'NvG', 2], f5_o: null, f6_r: [false, 'suGzcuGhzZ', 'RnBKrGuA'], f7_t: 25}, f2_k: 'ecdxOwXMCrl', f3_y: false, f4_t: 61, f5_h: true, f6_x: null}, f2_b: [true, false], f3_f: null, f4_c: false, f5_o: false, f6_z: 42, f7_o: {f0_w: 21, f1_n: true, f2_j: 'cZP', f3_i: {f0_l: 'fINqE', f1_a: 23, f2_r: false}, f4_f: [true], f5_k: null}}, f2_w: 91, f3_x: [true], f4_h: null, f5_j: {f0_l: ['KZjwQpqpAgp'], f1_i: [null], f2_n: [false], f3_u: null, f4_j: null, f5_a: 'RYdqzthce', f6_t: {f0_c: true, f1_t: null, f2_s: [41, null, true], f3_w: 'GBOkhyXuEiD', f4_f: 'Tywyr'}, f7_u: [true, false]}, f6_g: [true], f7_e: 'nWINfG', f8_f: 95, f9_l: [25, false, 'sycYMnnbnWpI']}, f2_b: null, f3_t: 'MzP'}}, f3_r: true, f4_p: null}, f4_o: 47}, f3_c: [null, 51], f4_w: 'JaZMI', f5_z: true, f6_o: {f0_r: false, f1_a: null, f2_c: 'LPvIkokPL', f3_w: ['ngrpdIjJW', 77], f4_f: true, f5_q: {f0_r: null, f1_f: [true, false], f2_q: {f0_g: null, f1_i: {f0_r: null, f1_j: null, f2_v: 'rqHGqGxBDC', f3_z: true, f4_g: 65, f5_m: {f0_w: null, f1_i: 60, f2_j: true}, f6_z: true, f7_b: null, f8_u: 'uULKH'}, f2_y: false, f3_c: true, f4_y: 73, f5_p: false, f6_h: true, f7_x: null}, f3_w: true, f4_i: [true, false], f5_t: null, f6_d: null, f7_z: null, f8_g: 75}}, f7_h: true, f8_s: 11, f9_r: 40}, f6_y: 'DgRGNLEcqOw', f7_t: {f0_c: 'lJPCpvjXMzM', f1_w: ['UuBfcoFkLGF'], f2_w: true, f3_v: null, f4_p: [false, 'koSkjf'], f5_a: 76, f6_z: 6, f7_s: false}, f8_j: 'VuqGQShgEYfk'}, f5_q: 'WdWZBgq', f6_y: true, f7_i: true, f8_v: null}, f8_s: false}, f1_a: false, f2_t: 'IUjZPqEvEkEx', f3_x: [true, 'ZeXadcFH', 39], f4_g: true}, f2_j: null, f3_b: null}, f2_p: 'kiVVdd', f3_z: 59}, f3_x: true, f4_o: {f0_x: 61, f1_p: 'nfLUfQzT', f2_f: false, f3_i: [null, true], f4_d: 'sjrhbqwIkm', f5_y: false}, f5_z: [3], f6_d: 'bQdJylQgUUlf', f7_f: {f0_b: ['zgw', true]}, f8_r: 90, f9_y: true}, f5_d: 21, f6_g: {f0_a: ['BSXqOcOpy', true], f1_n: {f0_b: {f0_o: {f0_j: 27, f1_y: {f0_w: 'NlCcAymy', f1_d: 19}, f2_e: false, f3_x: {f0_l: [true, false, true], f1_t: {f0_l: 'UvpUJC'}, f2_l: ['mKMb', null], f3_j: {f0_n: {f0_b: {f0_x: null, f1_t: {f0_a: 'mWL', f1_j: 57, f2_b: [true], f3_v: 'JVJZSqvn', f4_v: 'PGl', f5_r: null}, f2_v: 92, f3_a: 'aBviGydCn', f4_t: 'orllxn', f5_n: 'qrWmDLQPXMM', f6_r: true, f7_z: 'ORtTvBMr'}, f1_m: [64], f2_p: 'NSEpG', f3_b: 99, f4_b: [true], f5_o: 37, f6_h: false, f7_n: 78}, f1_j: 'JpCNh', f2_a: null, f3_h: {f0_k: true}}, f4_e: null, f5_j: 31, f6_a: null, f7_l: null, f8_g: true}, f4_d: {f0_u: [59, 55], f1_i: ['zSCsNn'], f2_b: false, f3_u: ['xmjDZBXVIj', true, null], f4_n: true, f5_l: 'Kuexaz', f6_d: 94, f7_k: [1, false, null], f8_k: 'MOMTuD', f9_s: 'iQLYoOCWcVsh'}, f5_w: [true, false], f6_y: false, f7_k: 83, f8_a: null, f9_o: [54, 'RDrfh']}, f1_v: [54], f2_q: {f0_s: [false], f1_x: [null], f2_g: ['HiLKY'], f3_o: 'FReTwfpuoI', f4_s: 'EtJHIFpsS', f5_d: 46, f6_x: {f0_b: null}, f7_q: [null, 0]}, f3_i: true, f4_i: [45, true], f5_x: ['ErSSegdpr']}, f1_h: 47, f2_v: 'FSQpuFAB'}, f2_c: 'hjbX'}, f7_p: 76}}, f1_o: [null, 'FgcXxBP'], f2_f: {f0_w: [false, false, null], f1_o: 58, f2_e: [false], f3_b: 53, f4_p: null, f5_b: 'BFkXvQ', f6_p: false, f7_h: [null, true, 'euJ'], f8_q: {f0_s: null}}, f3_f: 'uEXmXjTzAQ'}, f2_o: 'AinTGhhWIY', f3_n: false, f4_e: 'tDS', f5_k: 'bDktyoLRrP', f6_s: 'GJAz', f7_d: 66}, f4_b: 'mIyHRrm', f5_c: true, f6_o: false}, f5_y: true}}, 'DBAWHraxLxuO')
  var index_1 = store_0.createIndex('index_1', 'test', {multiEntry: true});
  var index_3 = store_0.createIndex('index_3', 'test', {multiEntry: false});
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'KYNGZ', autoIncrement: false});
  var index_0 = store_0.createIndex('index_0', 'test', {multiEntry: false});
  store_0.deleteIndex('index_0')
  store_0.add({f0_l: 77, f1_e: null, f2_w: 30, f3_s: [true, null, false], f4_a: 'kuVGwsVwx', f5_g: 75}, 'qMachDnCUkV')
  db.deleteObjectStore('store_0')
  var store_0 = db.createObjectStore('store_0', {keypath: 'kztuG', autoIncrement: false});
  var index_0 = store_1.createIndex('index_0', 'test', {unique: false});
  db.deleteObjectStore('store_5')
  var index_1 = store_0.createIndex('index_1', 'test', {unique: false});
  store_0.deleteIndex('index_1')
  var index_1 = store_0.createIndex('index_1', 'test');
  var index_2 = store_0.createIndex('index_2', 'test', {unique: false});
  var index_3 = store_0.createIndex('index_3', 'test');
  var store_2 = db.createObjectStore('store_2', {keypath: 'GwLzvbTzS', autoIncrement: false});
  var index_4 = store_2.createIndex('index_4', 'test', {unique: false, multiEntry: false});
  var index_5 = store_1.createIndex('index_5', 'test', {multiEntry: false});
  var store_3 = db.createObjectStore('store_3', {keypath: 'uJfWQXW', autoIncrement: false});
  var index_6 = store_1.createIndex('index_6', 'test', {unique: false});
  db.deleteObjectStore('store_2')
  var index_4 = store_0.createIndex('index_4', 'test', {unique: false});
  db.deleteObjectStore('store_3')
  var store_2 = db.createObjectStore('store_2', {autoIncrement: true});
  db.deleteObjectStore('store_2')
  var index_7 = store_0.createIndex('index_7', 'test', {unique: false, multiEntry: false});
  db.deleteObjectStore('store_0')
};
openRequest.onsuccess = (event) => {
  console.log('db onsuccess triggered')
  db = openRequest.result;
};
openRequest.onblocked = (event) => {
  console.log('open db blocked triggered')
};
openRequest.onerror = (event) => {
  console.log('open db onerror triggered')
};
const deleteRequest = indexedDB.deleteDatabase('str_6874')
deleteRequest.onblocked = (event) => {
  console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
  console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
  console.log('delete db onerror triggered')
};
