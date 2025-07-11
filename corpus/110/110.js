let db;
const openRequest = window.indexedDB.open('str_2556', 568471431944550)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_611', {autoIncrement: false});
    var add_0 = objectStore_0.add({f0_x: '<string>', f1_t: '<number>', f2_r: '<number>', f3_z: '<null>', f4_g: '<null>', f5_x: '<string>', f6_k: '<array>', f7_o: '<string>', f8_a: '<string>', f9_z: '<array>', f10_x: '<number>', f11_x: '<object>', f12_o: '<array>', f13_y: '<number>', f14_g: '<boolean>', f15_p: '<object>', f16_m: '<boolean>', f17_w: '<number>', f18_v: '<boolean>', f19_c: '<boolean>', f20_n: '<object>', f21_n: '<string>', f22_x: '<array>', f23_j: '<null>', f24_y: '<number>', f25_v: '<null>', f26_j: '<string>', f27_g: '<string>', f28_m: '<array>', f29_t: '<null>', f30_o: '<number>', f31_w: '<string>', f32_q: '<number>', f33_z: '<string>', f34_b: '<object>', f35_t: '<boolean>', f36_d: '<boolean>', f37_s: '<null>', f38_m: '<null>', f39_d: '<string>', f40_o: '<string>', f41_o: '<boolean>', f42_t: '<boolean>', f43_d: '<object>', f44_z: '<boolean>', f45_f: '<boolean>', f46_q: '<object>', f47_c: '<object>', f48_g: '<object>', f49_l: '<array>', f50_h: '<string>', f51_q: '<null>', f52_e: '<string>', f53_x: '<string>', f54_k: '<string>', f55_a: '<null>', f56_o: '<string>', f57_w: '<null>', f58_z: '<null>', f59_t: '<object>', f60_g: '<boolean>', f61_c: '<null>', f62_y: '<array>', f63_n: '<string>', f64_k: '<boolean>', f65_c: '<boolean>', f66_d: '<boolean>', f67_u: '<boolean>', f68_i: '<number>', f69_l: '<null>', f70_i: '<object>', f71_s: '<boolean>', f72_s: '<number>', f73_g: '<object>', f74_z: '<boolean>', f75_s: '<object>', f76_p: '<array>'}, 'LaqZLxcEVXsHBdBWPaqaGxAhPFajMSuZBvqwSIoqKTRGPMicWvHviLlFFGNOosMAYWZkFsVAoEHKjTdohQRwajWnFAiFTFKwQCFUxaNNYPDwvlTzbsnsypwzOWIvRLhvmGkSzRRiHQMsUZdSTPONtGOxPQEVfVlZhyHKSyxoFqDrqzcsZtgSeZuzGmYoCwArOPCWJBZsdwkqpnpckcpwPUycMellueqQXOKIKnhVCKNLheWBKYrwKfGzUFqjVaNgYkcIDQHVMDyWeLXWdnaGCtuLMyCGYTxUmJjEcLVhroQezAwTPqVbdSIEZdBGBYpSoRFskRjOhDMLzwWaUasVQmsMlUPPbDpSsSlQjWDFUGDBUomrcAsRqhoqrEBfFJbVBGLredvKUlFureAPtxUSUPscgqQzCGOJClcnbGjKFvErLKCZxoeElFbruhijJUGiDgWoWlgWuwRLjXClaUdxzCQOKUjNTlSKYxsJaohNJgMJOaGGDNgqdvdPkRYTKsrXIpcrrOfyijMdFhUzNKAJioZOfsSDgFbUcWyMBqmmcwbZURJlRCjDrtcxxHobHSkXmrZNDpFLZXYpaTsXcVxebFEarHBKjaqxcYfXnIFcuKifUwxEmTByEsP');
    db.deleteObjectStore('objectStore_611')
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
const deleteRequest = indexedDB.deleteDatabase('str_9285')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};