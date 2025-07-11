let db;
const openRequest = window.indexedDB.open('str_8959', 2285451052886740)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3344', {keypath: 'thCgUsRPJXLaPomzTDDdwVPPdtEYUQmXQPrvbaMMvuMBdssXuRGUeMnKsuDTuquYWclDseCRtnjdYMkelYyFnxJODzPiIepHQxxJCNQTjjOaNlDdUHLxDZUNbfcdQuilfMhYcuxPvqWCYPVMQTYLeoddiOwkQQUGxgJMShILtytpBEgCUxNovEnpVlxwuNBKfjfdyWEWUhkXrTZMRbctknzCQnLqKgOFVxpIvoqimYlYcUknAqoJnUwlXOTknpcKITavtBUDTpQpUcYKkzRcwuHxHTcdJSciaYPBkNerRRfPDsLJiXDpVHoyKZrpYnhNCnnTSPMoxTxiKAKceeLsUFCTZoouGGPnLfaFRzYQDMmoZmeMAFGFjDABkNqidhOwCCxlnaea', autoIncrement: false});
    db.deleteObjectStore('objectStore_3344')
    var objectStore_1 = db.createObjectStore('objectStore_3345', {autoIncrement: false});
    var index_2260 = objectStore_1.createIndex('index_2260', 'test', {multiEntry: false});
    var put_0 = objectStore_1.put({f0_x: '<array>', f1_f: '<object>', f2_d: '<number>', f3_w: '<object>', f4_h: '<string>', f5_o: '<string>', f6_z: '<array>', f7_x: '<array>', f8_k: '<boolean>', f9_e: '<object>'}, 'CUuijXgebhpklrgOzPzwJvvAWDmCxEKGoFopAtEGsWPHccqqSnYykmGIjeWBqNofsFxQxPqIlKHXkihXPIcIwSazQPfbPjuHaETDLoPmKhMILINMxoyJjeSkGmeQvgtqxyGBJFxhGbrpzPaPFBUmcqJBONLbpfnJBTmDRqhRwZxqbwkdnEcJQPUPekrEUiDnblfuHxcPVsPIhQLkyOUzrUKsQGyyPBgapzXhxODlvNyskzDSOPSLSJYTfjwBtKyDgeZBFvGxUCwfAIECHkYUhNLawTHvzzXgKZweNbeJyFLqmZiZIPjUKFCzzoBDPbaqCuHKmCOdJEcugsFXmiAJVUEjlCByMTlYsqgDMsVkoeIablRBdIzvnCuSYttbcHUMOZmWELSwcqJZpiLzukkRrpdYiIdhvyFxiQaByVzrxDRNjFZYIGVYgwGbfFjSITLKVUbjCHJQsfEFHgmmdGhIWTrzDIpdJJOJhcZFjHseGTTMvItuQPEIJrLsbgmwXHiqxbfwCLrrqVtzleZlmJsRMnjHgkHomHvQWOtdIpNoEcGEDSFbPlsFZuffAuLkSuEZMlrdtkfxkjFxmzuuuLRQAgEEnfUGsvTTIJJERHdQvIGrABhlQNbVkEuDYVrNUZEMCahSTmuQZIyyFREIyXpecjwdJwOwUcUcAyoMvGGQWRfRIdZkvWpfuUssqWcIFqQfGBMPEwhaAIfzhjlOiBPxfFxtLwpzqbhFNtSmfYGGIoWnmDwpnoTSCxVLUlHWvuEQUcDpCEmFnGyaKSnLZwYBhAonfNsEeYBFqiIVjuiWTLUguNjxdLojKKvIhDPedqoRDefctEwSaXgHyI');
    var add_0 = objectStore_1.add({f0_z: '<string>', f1_j: '<string>', f2_g: '<array>', f3_h: '<object>', f4_f: '<string>', f5_l: '<number>', f6_g: '<string>', f7_l: '<array>', f8_t: '<null>', f9_j: '<object>', f10_r: '<boolean>', f11_x: '<string>', f12_g: '<array>', f13_b: '<boolean>', f14_a: '<array>', f15_l: '<number>', f16_h: '<object>', f17_l: '<array>', f18_z: '<array>', f19_x: '<boolean>', f20_e: '<object>', f21_v: '<number>', f22_k: '<null>', f23_g: '<null>', f24_d: '<array>', f25_v: '<boolean>', f26_c: '<object>', f27_a: '<null>', f28_y: '<array>', f29_y: '<string>', f30_b: '<object>', f31_b: '<null>', f32_i: '<object>', f33_g: '<null>', f34_k: '<number>', f35_l: '<object>', f36_m: '<string>', f37_w: '<array>', f38_w: '<boolean>', f39_g: '<boolean>', f40_n: '<boolean>', f41_y: '<string>', f42_p: '<boolean>', f43_o: '<null>', f44_d: '<boolean>', f45_c: '<null>', f46_s: '<array>', f47_e: '<string>', f48_c: '<boolean>', f49_f: '<array>', f50_f: '<string>', f51_l: '<number>', f52_x: '<number>', f53_y: '<array>', f54_e: '<string>', f55_w: '<null>', f56_s: '<null>', f57_t: '<boolean>', f58_g: '<array>', f59_i: '<string>', f60_r: '<boolean>', f61_l: '<boolean>', f62_l: '<array>', f63_i: '<object>', f64_n: '<null>', f65_f: '<null>', f66_v: '<array>', f67_v: '<number>', f68_o: '<number>', f69_d: '<object>', f70_q: '<boolean>', f71_i: '<null>', f72_j: '<array>', f73_c: '<array>', f74_d: '<number>', f75_y: '<object>', f76_b: '<number>', f77_x: '<string>', f78_r: '<string>', f79_r: '<array>', f80_p: '<null>', f81_u: '<null>', f82_w: '<object>', f83_x: '<object>', f84_h: '<array>', f85_z: '<number>', f86_p: '<null>', f87_d: '<boolean>', f88_w: '<number>', f89_f: '<number>', f90_k: '<array>', f91_v: '<object>', f92_z: '<boolean>', f93_q: '<array>', f94_q: '<null>', f95_c: '<number>', f96_m: '<boolean>', f97_w: '<array>', f98_z: '<array>', f99_c: '<array>', f100_v: '<array>', f101_b: '<null>', f102_e: '<string>', f103_p: '<object>', f104_m: '<boolean>', f105_k: '<object>', f106_z: '<boolean>', f107_g: '<null>', f108_o: '<array>', f109_i: '<string>', f110_q: '<null>', f111_s: '<object>', f112_j: '<boolean>', f113_m: '<object>', f114_n: '<object>', f115_e: '<array>', f116_w: '<number>', f117_s: '<object>', f118_w: '<boolean>', f119_h: '<object>', f120_y: '<null>', f121_z: '<null>', f122_g: '<object>', f123_y: '<array>'}, 'LGgYKyuOLJWxoAFlxHVQxoaejYCAJMPqfOPoRYUcfLcdFZCECbbcOtJHvhKkxrDojDioDEhBQkfTyeMcmWUScWYSzTgtvaTmuSMrVBaDbXYTFysuoRaoDchHGgcutLQDGfUWmxipsYkaPmMVqETHimxCXiKbdWSnKZcZqyWINoKtGhHDXtlESgcQpxmQCGProkXCsbGYdsgsghfDltERaxDSwFbAfvpolgtKCamHqtRTbpXMvAKvYzcOgmPKxxZwSHxphrLsvtrjobWiLuReZzCDmlIDXZmcweKehQwkuiAeRfBBubGHGplvpTmsWTBdvkSNNTwtmvcNZvegZMIUdKlQldnlmERuUsKFaScrIvQsZASrAYHPvifpNVAkifaPxHvxZlqhxNSbnSWTgPXMxaolzVibhZxdDQYebSotDoitvtYYreijtCAeXrzzqfGrTOXUaQGtBXqWKeNpiYMGCnbYiEZUnAmtbePbvjZermiPpLQEOZvCJywDxLaDMDWgzQjyyRWqpVmlFYQdgRyagAEZrpSXrxKzAEakUdshppZaFlumcONqaUbtLRkxGtOAigbktjkvZlQxyOVMbUsTkIqrEduEtPWdSYeVQoQAvoIapdFyoFgadqCPQhHemXtqDJRJCrrTVeFaZWIAohidOfPgGlGfySFoKdAkdoNCbMNBVzNBQmPOnFhXgsbeYdVNYDrUoHGHXDvKc');
    db.deleteObjectStore('objectStore_3345')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
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
const deleteRequest = indexedDB.deleteDatabase('str_9171')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};