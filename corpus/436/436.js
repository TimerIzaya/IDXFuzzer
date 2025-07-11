let db;
const openRequest = window.indexedDB.open('str_8650', 379877475793701)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2586');
    var index_1698 = objectStore_0.createIndex('index_1698', 'test', {unique: true});
    var clear_0 = objectStore_0.clear();
    var index_1699 = objectStore_0.createIndex('index_1699', 'test');
    var objectStore_1 = db.createObjectStore('objectStore_2587');
    var add_0 = objectStore_1.add({f0_z: '<number>', f1_l: '<string>', f2_l: '<boolean>', f3_q: '<null>', f4_c: '<boolean>', f5_n: '<boolean>', f6_z: '<number>'}, 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb');
    var clear_1 = objectStore_0.clear();
    var getAllKeys_0 = objectStore_1.getAllKeys(1381580885);
    var index_1700 = objectStore_0.createIndex('index_1700', 'test');
    var add_1 = objectStore_1.add({f0_g: '<number>', f1_i: '<string>', f2_d: '<boolean>', f3_v: '<object>'}, 'wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx');
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3870 = db.transaction(['objectStore_2587'], 'readonly', {durability:"default"})
    var objectStore_2587 = txn_3870.objectStore('objectStore_2587');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', true, true);
        count_0 = objectStore_2587.count(KeyRange_0);
    }
    catch (e){
    }

    var count_1 = objectStore_2587.count();
    var get_0;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', false);
        get_0 = objectStore_2587.get(KeyRange_2);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_4 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', true, true);
        count_2 = objectStore_2587.count(KeyRange_4);
    }
    catch (e){
    }

    var count_3 = objectStore_2587.count();
    var count_4 = objectStore_2587.count();
    var getAll_0 = objectStore_2587.getAll(109871399);
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', false);
        get_1 = objectStore_2587.get(KeyRange_6);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', true, true);
        get_2 = objectStore_2587.get(KeyRange_8);
    }
    catch (e){
    }

    txn_3870.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3870.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3870.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3871 = db.transaction(['objectStore_2587'], 'readwrite', {durability:"relaxed"})
    var objectStore_2587 = txn_3871.objectStore('objectStore_2587');
    var get_3;
    try{
        KeyRange_10 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', true, true);
        get_3 = objectStore_2587.get(KeyRange_10);
    }
    catch (e){
    }

    var put_0 = objectStore_2587.put({f0_d: '<array>', f1_l: '<number>', f2_y: '<array>', f3_k: '<number>', f4_i: '<number>', f5_n: '<object>', f6_v: '<object>', f7_h: '<null>', f8_t: '<boolean>'}, 'EeYVCcsljVSBZvSBAnzIRLMBVvTMAMgzsoRfYKKYzCdxullHCJuncNVsFRIvXSxlZtENYnPmPAfHWRNkUDxNBugFFlHSmPgjsreGbduPRMtflaanBPWUoNqYUzkmnaUuHKdWKBuKpDrfwRfpegUvbNNSCuBdTFfRqZfWqtCUQSxXVMldEOQrJocgPSAEZAugZoLbYqrXfJxCTAVNviaScgGtjDKkRUBZINIluOuNTvNffVCjfDRlGammjpkcKqgKavMNLpeSZcebcugDIxOTEYPZGrBRzDJhutoCJqzDMOhvoCcgPYhYYtucIGOzkJDcoBCFEbzDHlwqiOTvTMeHAMEZkiXnajjTvkPkKMBpLSqppfEtovUYNSbdjvjJyCocLthUccGPfZgAvCjLhJeiumFflvOKjpmZimxKDkVASjYFWbNzbpqIIWXxBRCqKwnNEspmOyaXWGyjCIHLuhNgXBTtCvyylzljydNjQOkoCGQdAGQpqBnkuwnPBdCyOmmJXIeXHpdWeGjKynopJZazwTlcLMFeeCMDXlwllCEzNFkJjSRzjbvSiVxxZDECBtXdmNGmsylBucTEkWMJIkrvYEZbgzduTtHrQCscMVhGolwWwVXdagBjGfFQhVyWktQQXoGEpzwhuKQTlhaMfgeWoxQevvrODiTzlLapNybaqPduXQGAOqCwJJUibChpITnmEtAJKuBXCPDHyGsRKSoMPexOdIyCfGNkReqoMySTdaezTjEHpdfOVfmENzvFSSJzbzLqJCMRPniMDGlYeoQZujOJTwYDORhejPkXCvAhYwkNtYUgYAOhqFSjBjeVyvLCHTpcZlJXXYzUYLhWDvaBsxASuOxEkBUuHIMFxjINHwOWlNKvHFtaZNXRXFlFKRUKoJNEJTeHncoUrfCAQTDyIrzXUMYpgEcUOcycJd');
    var count_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', true, true);
        count_5 = objectStore_2587.count(KeyRange_12);
    }
    catch (e){
    }

    var count_6 = objectStore_2587.count();
    var add_2 = objectStore_2587.add({f0_y: '<array>', f1_i: '<array>', f2_b: '<null>', f3_a: '<object>', f4_p: '<boolean>', f5_a: '<object>', f6_m: '<string>', f7_r: '<number>', f8_g: '<array>', f9_f: '<null>', f10_w: '<string>', f11_w: '<number>', f12_d: '<array>', f13_i: '<boolean>', f14_t: '<string>', f15_k: '<array>', f16_m: '<null>', f17_q: '<boolean>', f18_g: '<array>', f19_p: '<number>', f20_u: '<null>', f21_b: '<string>', f22_i: '<null>', f23_a: '<boolean>', f24_t: '<boolean>', f25_f: '<string>', f26_z: '<string>', f27_n: '<object>', f28_t: '<number>', f29_s: '<array>', f30_r: '<number>', f31_c: '<null>', f32_l: '<array>', f33_b: '<object>', f34_t: '<boolean>', f35_d: '<object>', f36_q: '<null>', f37_m: '<array>', f38_t: '<null>', f39_q: '<array>', f40_l: '<object>', f41_z: '<number>', f42_a: '<object>', f43_j: '<number>', f44_z: '<boolean>', f45_b: '<null>', f46_r: '<object>', f47_g: '<number>', f48_n: '<string>', f49_f: '<string>', f50_j: '<array>', f51_t: '<string>', f52_o: '<object>', f53_p: '<null>', f54_o: '<array>', f55_g: '<string>', f56_s: '<object>', f57_j: '<object>', f58_r: '<object>', f59_d: '<string>', f60_o: '<string>', f61_s: '<array>', f62_q: '<null>', f63_x: '<object>', f64_f: '<number>', f65_h: '<boolean>', f66_p: '<null>', f67_p: '<string>', f68_n: '<string>', f69_n: '<number>', f70_s: '<array>'}, 'IryLyiHQjijwUGoMTAcmzvgAnKwzkztNITKOZulYBbYigdPndtNbiiuBsXMDASVhnNcyzEvWUTofjHDJMlMAHsRzqaEneXlgMYhvKuXhXXCiMqbgRihddhODUgNOpwRrnLKuoPltvbTVoMjfMFNkxjZxoQXihISjglmwlGqALlrCmzJyUCayOCiYqbJukyHmqaORRHzqUjcdekwctFLoWXkcoDXHIwyOG');
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('EeYVCcsljVSBZvSBAnzIRLMBVvTMAMgzsoRfYKKYzCdxullHCJuncNVsFRIvXSxlZtENYnPmPAfHWRNkUDxNBugFFlHSmPgjsreGbduPRMtflaanBPWUoNqYUzkmnaUuHKdWKBuKpDrfwRfpegUvbNNSCuBdTFfRqZfWqtCUQSxXVMldEOQrJocgPSAEZAugZoLbYqrXfJxCTAVNviaScgGtjDKkRUBZINIluOuNTvNffVCjfDRlGammjpkcKqgKavMNLpeSZcebcugDIxOTEYPZGrBRzDJhutoCJqzDMOhvoCcgPYhYYtucIGOzkJDcoBCFEbzDHlwqiOTvTMeHAMEZkiXnajjTvkPkKMBpLSqppfEtovUYNSbdjvjJyCocLthUccGPfZgAvCjLhJeiumFflvOKjpmZimxKDkVASjYFWbNzbpqIIWXxBRCqKwnNEspmOyaXWGyjCIHLuhNgXBTtCvyylzljydNjQOkoCGQdAGQpqBnkuwnPBdCyOmmJXIeXHpdWeGjKynopJZazwTlcLMFeeCMDXlwllCEzNFkJjSRzjbvSiVxxZDECBtXdmNGmsylBucTEkWMJIkrvYEZbgzduTtHrQCscMVhGolwWwVXdagBjGfFQhVyWktQQXoGEpzwhuKQTlhaMfgeWoxQevvrODiTzlLapNybaqPduXQGAOqCwJJUibChpITnmEtAJKuBXCPDHyGsRKSoMPexOdIyCfGNkReqoMySTdaezTjEHpdfOVfmENzvFSSJzbzLqJCMRPniMDGlYeoQZujOJTwYDORhejPkXCvAhYwkNtYUgYAOhqFSjBjeVyvLCHTpcZlJXXYzUYLhWDvaBsxASuOxEkBUuHIMFxjINHwOWlNKvHFtaZNXRXFlFKRUKoJNEJTeHncoUrfCAQTDyIrzXUMYpgEcUOcycJd', 'IryLyiHQjijwUGoMTAcmzvgAnKwzkztNITKOZulYBbYigdPndtNbiiuBsXMDASVhnNcyzEvWUTofjHDJMlMAHsRzqaEneXlgMYhvKuXhXXCiMqbgRihddhODUgNOpwRrnLKuoPltvbTVoMjfMFNkxjZxoQXihISjglmwlGqALlrCmzJyUCayOCiYqbJukyHmqaORRHzqUjcdekwctFLoWXkcoDXHIwyOG', true, false);
        get_4 = objectStore_2587.get(KeyRange_14);
    }
    catch (e){
    }

    var delete_0;
    try{
        KeyRange_16 = IDBKeyRange.bound('EeYVCcsljVSBZvSBAnzIRLMBVvTMAMgzsoRfYKKYzCdxullHCJuncNVsFRIvXSxlZtENYnPmPAfHWRNkUDxNBugFFlHSmPgjsreGbduPRMtflaanBPWUoNqYUzkmnaUuHKdWKBuKpDrfwRfpegUvbNNSCuBdTFfRqZfWqtCUQSxXVMldEOQrJocgPSAEZAugZoLbYqrXfJxCTAVNviaScgGtjDKkRUBZINIluOuNTvNffVCjfDRlGammjpkcKqgKavMNLpeSZcebcugDIxOTEYPZGrBRzDJhutoCJqzDMOhvoCcgPYhYYtucIGOzkJDcoBCFEbzDHlwqiOTvTMeHAMEZkiXnajjTvkPkKMBpLSqppfEtovUYNSbdjvjJyCocLthUccGPfZgAvCjLhJeiumFflvOKjpmZimxKDkVASjYFWbNzbpqIIWXxBRCqKwnNEspmOyaXWGyjCIHLuhNgXBTtCvyylzljydNjQOkoCGQdAGQpqBnkuwnPBdCyOmmJXIeXHpdWeGjKynopJZazwTlcLMFeeCMDXlwllCEzNFkJjSRzjbvSiVxxZDECBtXdmNGmsylBucTEkWMJIkrvYEZbgzduTtHrQCscMVhGolwWwVXdagBjGfFQhVyWktQQXoGEpzwhuKQTlhaMfgeWoxQevvrODiTzlLapNybaqPduXQGAOqCwJJUibChpITnmEtAJKuBXCPDHyGsRKSoMPexOdIyCfGNkReqoMySTdaezTjEHpdfOVfmENzvFSSJzbzLqJCMRPniMDGlYeoQZujOJTwYDORhejPkXCvAhYwkNtYUgYAOhqFSjBjeVyvLCHTpcZlJXXYzUYLhWDvaBsxASuOxEkBUuHIMFxjINHwOWlNKvHFtaZNXRXFlFKRUKoJNEJTeHncoUrfCAQTDyIrzXUMYpgEcUOcycJd', 'wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', true, true);
        delete_0 = objectStore_2587.delete(KeyRange_16);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_18 = IDBKeyRange.bound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', 'EeYVCcsljVSBZvSBAnzIRLMBVvTMAMgzsoRfYKKYzCdxullHCJuncNVsFRIvXSxlZtENYnPmPAfHWRNkUDxNBugFFlHSmPgjsreGbduPRMtflaanBPWUoNqYUzkmnaUuHKdWKBuKpDrfwRfpegUvbNNSCuBdTFfRqZfWqtCUQSxXVMldEOQrJocgPSAEZAugZoLbYqrXfJxCTAVNviaScgGtjDKkRUBZINIluOuNTvNffVCjfDRlGammjpkcKqgKavMNLpeSZcebcugDIxOTEYPZGrBRzDJhutoCJqzDMOhvoCcgPYhYYtucIGOzkJDcoBCFEbzDHlwqiOTvTMeHAMEZkiXnajjTvkPkKMBpLSqppfEtovUYNSbdjvjJyCocLthUccGPfZgAvCjLhJeiumFflvOKjpmZimxKDkVASjYFWbNzbpqIIWXxBRCqKwnNEspmOyaXWGyjCIHLuhNgXBTtCvyylzljydNjQOkoCGQdAGQpqBnkuwnPBdCyOmmJXIeXHpdWeGjKynopJZazwTlcLMFeeCMDXlwllCEzNFkJjSRzjbvSiVxxZDECBtXdmNGmsylBucTEkWMJIkrvYEZbgzduTtHrQCscMVhGolwWwVXdagBjGfFQhVyWktQQXoGEpzwhuKQTlhaMfgeWoxQevvrODiTzlLapNybaqPduXQGAOqCwJJUibChpITnmEtAJKuBXCPDHyGsRKSoMPexOdIyCfGNkReqoMySTdaezTjEHpdfOVfmENzvFSSJzbzLqJCMRPniMDGlYeoQZujOJTwYDORhejPkXCvAhYwkNtYUgYAOhqFSjBjeVyvLCHTpcZlJXXYzUYLhWDvaBsxASuOxEkBUuHIMFxjINHwOWlNKvHFtaZNXRXFlFKRUKoJNEJTeHncoUrfCAQTDyIrzXUMYpgEcUOcycJd', true, false);
        get_5 = objectStore_2587.get(KeyRange_18);
    }
    catch (e){
    }

    var clear_2 = objectStore_2587.clear();
    var delete_1;
    try{
        KeyRange_20 = IDBKeyRange.bound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', false, false);
        delete_1 = objectStore_2587.delete(KeyRange_20);
    }
    catch (e){
    }

    txn_3871.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3871.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3871.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3872 = db.transaction(['objectStore_2587'], 'readwrite', {durability:"relaxed"})
    var objectStore_2587 = txn_3872.objectStore('objectStore_2587');
    var put_1 = objectStore_2587.put({f0_u: '<number>', f1_e: '<number>', f2_x: '<array>', f3_i: '<boolean>', f4_v: '<null>', f5_w: '<object>', f6_i: '<string>', f7_n: '<string>', f8_p: '<object>', f9_q: '<array>'}, 'sXCxxGnUAeyTQGHwoOVmMPGbLqrsbPjqVXwCCVoynHNFNWpCS');
    var clear_3 = objectStore_2587.clear();
    var get_6;
    try{
        KeyRange_22 = IDBKeyRange.bound('IryLyiHQjijwUGoMTAcmzvgAnKwzkztNITKOZulYBbYigdPndtNbiiuBsXMDASVhnNcyzEvWUTofjHDJMlMAHsRzqaEneXlgMYhvKuXhXXCiMqbgRihddhODUgNOpwRrnLKuoPltvbTVoMjfMFNkxjZxoQXihISjglmwlGqALlrCmzJyUCayOCiYqbJukyHmqaORRHzqUjcdekwctFLoWXkcoDXHIwyOG', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', false, true);
        get_6 = objectStore_2587.get(KeyRange_22);
    }
    catch (e){
    }

    var count_7;
    try{
        KeyRange_24 = IDBKeyRange.lowerBound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', false);
        count_7 = objectStore_2587.count(KeyRange_24);
    }
    catch (e){
    }

    var put_2 = objectStore_2587.put({f0_a: '<string>', f1_f: '<null>', f2_s: '<array>', f3_d: '<object>', f4_b: '<boolean>'}, 'dSqnPuGQBjwhEilLXFVzHWyFWnxOYpbEmIDxrXhHstkUCDPVUrjrvBFZVYqFKHVIYtkwJiRjiUkSRduHoBIsLtUnTzhGJpWfsPqGUEIzqCIoREYaASAEcPcKzkVCZCAEmTijiNbqgWQVHpvorNLiapsvlflOmtoIsYLLdSPMXVPzOeBmHRhokzsYIkojrLzIdoHxvFKLnvvvrOxGqgJkiovWbTWaxHlbPLYDacybvXsxfdbjXVoWHcHnzQnAPOYRUcHUaSmqyNZMBGrVzbyHVCKcTubGjCTlFaTjUFIALSzbIzcaaYqQcxizUwPCrsidGwnwAqdcYDMvLNWd');
    var getAllKeys_1 = objectStore_2587.getAllKeys();
    var clear_4 = objectStore_2587.clear();
    var get_7;
    try{
        KeyRange_26 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'sXCxxGnUAeyTQGHwoOVmMPGbLqrsbPjqVXwCCVoynHNFNWpCS', false, false);
        get_7 = objectStore_2587.get(KeyRange_26);
    }
    catch (e){
    }

    var clear_5 = objectStore_2587.clear();
    var get_8;
    try{
        KeyRange_28 = IDBKeyRange.lowerBound('dSqnPuGQBjwhEilLXFVzHWyFWnxOYpbEmIDxrXhHstkUCDPVUrjrvBFZVYqFKHVIYtkwJiRjiUkSRduHoBIsLtUnTzhGJpWfsPqGUEIzqCIoREYaASAEcPcKzkVCZCAEmTijiNbqgWQVHpvorNLiapsvlflOmtoIsYLLdSPMXVPzOeBmHRhokzsYIkojrLzIdoHxvFKLnvvvrOxGqgJkiovWbTWaxHlbPLYDacybvXsxfdbjXVoWHcHnzQnAPOYRUcHUaSmqyNZMBGrVzbyHVCKcTubGjCTlFaTjUFIALSzbIzcaaYqQcxizUwPCrsidGwnwAqdcYDMvLNWd', false);
        get_8 = objectStore_2587.get(KeyRange_28);
    }
    catch (e){
    }

    txn_3872.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3872.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3872.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3873 = db.transaction(['objectStore_2586'], 'readonly', {durability:"default"})
    var objectStore_2586 = txn_3873.objectStore('objectStore_2586');
    txn_3873.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3873.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3873.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3874 = db.transaction(['objectStore_2587'], 'readonly', {durability:"relaxed"})
    var objectStore_2587 = txn_3874.objectStore('objectStore_2587');
    var get_9;
    try{
        KeyRange_30 = IDBKeyRange.only('sXCxxGnUAeyTQGHwoOVmMPGbLqrsbPjqVXwCCVoynHNFNWpCS');
        get_9 = objectStore_2587.get(KeyRange_30);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_32 = IDBKeyRange.bound('dSqnPuGQBjwhEilLXFVzHWyFWnxOYpbEmIDxrXhHstkUCDPVUrjrvBFZVYqFKHVIYtkwJiRjiUkSRduHoBIsLtUnTzhGJpWfsPqGUEIzqCIoREYaASAEcPcKzkVCZCAEmTijiNbqgWQVHpvorNLiapsvlflOmtoIsYLLdSPMXVPzOeBmHRhokzsYIkojrLzIdoHxvFKLnvvvrOxGqgJkiovWbTWaxHlbPLYDacybvXsxfdbjXVoWHcHnzQnAPOYRUcHUaSmqyNZMBGrVzbyHVCKcTubGjCTlFaTjUFIALSzbIzcaaYqQcxizUwPCrsidGwnwAqdcYDMvLNWd', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', false, false);
        get_10 = objectStore_2587.get(KeyRange_32);
    }
    catch (e){
    }

    var count_8 = objectStore_2587.count();
    var getAllKeys_2;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', true);
        getAllKeys_2 = objectStore_2587.getAllKeys(KeyRange_34, 948437703);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('dSqnPuGQBjwhEilLXFVzHWyFWnxOYpbEmIDxrXhHstkUCDPVUrjrvBFZVYqFKHVIYtkwJiRjiUkSRduHoBIsLtUnTzhGJpWfsPqGUEIzqCIoREYaASAEcPcKzkVCZCAEmTijiNbqgWQVHpvorNLiapsvlflOmtoIsYLLdSPMXVPzOeBmHRhokzsYIkojrLzIdoHxvFKLnvvvrOxGqgJkiovWbTWaxHlbPLYDacybvXsxfdbjXVoWHcHnzQnAPOYRUcHUaSmqyNZMBGrVzbyHVCKcTubGjCTlFaTjUFIALSzbIzcaaYqQcxizUwPCrsidGwnwAqdcYDMvLNWd');
        getAllKeys_2 = objectStore_2587.getAllKeys(KeyRange_35);
    }

    var getAll_1 = objectStore_2587.getAll(923558419);
    var get_11;
    try{
        KeyRange_36 = IDBKeyRange.bound('dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', 'EeYVCcsljVSBZvSBAnzIRLMBVvTMAMgzsoRfYKKYzCdxullHCJuncNVsFRIvXSxlZtENYnPmPAfHWRNkUDxNBugFFlHSmPgjsreGbduPRMtflaanBPWUoNqYUzkmnaUuHKdWKBuKpDrfwRfpegUvbNNSCuBdTFfRqZfWqtCUQSxXVMldEOQrJocgPSAEZAugZoLbYqrXfJxCTAVNviaScgGtjDKkRUBZINIluOuNTvNffVCjfDRlGammjpkcKqgKavMNLpeSZcebcugDIxOTEYPZGrBRzDJhutoCJqzDMOhvoCcgPYhYYtucIGOzkJDcoBCFEbzDHlwqiOTvTMeHAMEZkiXnajjTvkPkKMBpLSqppfEtovUYNSbdjvjJyCocLthUccGPfZgAvCjLhJeiumFflvOKjpmZimxKDkVASjYFWbNzbpqIIWXxBRCqKwnNEspmOyaXWGyjCIHLuhNgXBTtCvyylzljydNjQOkoCGQdAGQpqBnkuwnPBdCyOmmJXIeXHpdWeGjKynopJZazwTlcLMFeeCMDXlwllCEzNFkJjSRzjbvSiVxxZDECBtXdmNGmsylBucTEkWMJIkrvYEZbgzduTtHrQCscMVhGolwWwVXdagBjGfFQhVyWktQQXoGEpzwhuKQTlhaMfgeWoxQevvrODiTzlLapNybaqPduXQGAOqCwJJUibChpITnmEtAJKuBXCPDHyGsRKSoMPexOdIyCfGNkReqoMySTdaezTjEHpdfOVfmENzvFSSJzbzLqJCMRPniMDGlYeoQZujOJTwYDORhejPkXCvAhYwkNtYUgYAOhqFSjBjeVyvLCHTpcZlJXXYzUYLhWDvaBsxASuOxEkBUuHIMFxjINHwOWlNKvHFtaZNXRXFlFKRUKoJNEJTeHncoUrfCAQTDyIrzXUMYpgEcUOcycJd', true, true);
        get_11 = objectStore_2587.get(KeyRange_36);
    }
    catch (e){
    }

    var getAll_2 = objectStore_2587.getAll(2727446110);
    var get_12;
    try{
        KeyRange_38 = IDBKeyRange.bound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', 'IryLyiHQjijwUGoMTAcmzvgAnKwzkztNITKOZulYBbYigdPndtNbiiuBsXMDASVhnNcyzEvWUTofjHDJMlMAHsRzqaEneXlgMYhvKuXhXXCiMqbgRihddhODUgNOpwRrnLKuoPltvbTVoMjfMFNkxjZxoQXihISjglmwlGqALlrCmzJyUCayOCiYqbJukyHmqaORRHzqUjcdekwctFLoWXkcoDXHIwyOG', false, true);
        get_12 = objectStore_2587.get(KeyRange_38);
    }
    catch (e){
    }

    var getAll_3 = objectStore_2587.getAll(3808864167);
    var getAllKeys_3 = objectStore_2587.getAllKeys(2557269195);
    var count_9 = objectStore_2587.count();
    var get_13;
    try{
        KeyRange_40 = IDBKeyRange.bound('wunlVxPNrcPSpKzCNpYbzRCRzSvHGGiDdNkoxrCggAcRySitlQTlfACpQuhyIvLwbMfgnfSeXGjPNyraJcwgSecAvOEkjbwHhGidlOlDEQAGOLnGhzOoksHaoefDBcHMPZvCmrboFEGVHyiFffhyzosWgDIfhdYDeUpsCppWzthrDUzBQSmIkLeDxuqormXKBhSdRLaWVxFqGUKEuIdzaJiTgZQKjiQBJXtpoGgCDPgKtpKCmADdppiciPMUbeiHxgWdMTPDZMycZCdoPYXQPyDkpOFSVSIbEixJCErsURwgHTXOToaakQUQyiDiUyseszSVMOpxZXuNcZFtqrUGncMHVMUrgomjjqqkWCjpjiIRgphRFDbcUAHnQLoCUreEAx', 'dDmBdCRUCIoxlgijcTDOrQRoGtwoToCZvDAEQtkgBdfZeHvvYAgzkSJewncldsFfWdALcKCirwEakiCUDuhHeJChWsCxtcTVrMOwtFQb', false, true);
        get_13 = objectStore_2587.get(KeyRange_40);
    }
    catch (e){
    }

    var count_10 = objectStore_2587.count();
    txn_3874.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3874.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3874.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4864')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};