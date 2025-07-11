let db;
const openRequest = window.indexedDB.open('str_513', 8228684116012606)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_3799', {keypath: 'EhTEqIrtNHfDvhxuOtAPllEFwUaIOJsgqqJGtXUTstHGvPKfLBhZcrItnhfiuJuvDkOTNeoEHwSHnVjQwYCMGiELHjIHTDTSKoPnpeiYtIMbAbzZfozEhZTYmxlSBYACBcEHqZjxReOXpbcdITzgPxuyZdyuQwPQssYtDqnkaOmKOLgjXYJrOLCHzrMZRokVcSQvKwKKcctvPLpAjTaKPOefDuDKiZATTlcxAwluwySTmGvZywNQQYLsnEEngrNmnCHElyAMzJVxvVSKxxUnSqnoyKRkYtLXSxGUHIhNMNFtsKQwSvUzPJumhugsZxpJjkErXbWaWRQYBXDcoMUsyYXhQNXnBpiUnofhuwVzzSWTLZxopAlRtODQzLojVwgYsFjdhzPjHrxMfQRfKZxIAgQauDcCprEBGgvYhkQZEaowqXNAZoDEJKdUZlsDZIGAawZlFuBaUKcCySUqxMZMXeacLOcaomvGmNbskrqONmdKiKVSYGrWWwWCnOLyxrtrtIpPTYgzTUZrkvGLsqiNvfaPEIRewWRkZOvFRpSiTWdVmRDppMfIxnijOKFaDENoFeiNXcDZgzdsRuismzAdMHVuTJOJghOJkDjADtpOMBCKwcfWwHSCAJJaRaFcGatSpnnIhPEOmQuoYZARM', autoIncrement: false});
    var clear_0 = objectStore_0.clear();
    var objectStore_1 = db.createObjectStore('objectStore_3800');
    var clear_1 = objectStore_1.clear();
    var clear_2 = objectStore_0.clear();
    var clear_3 = objectStore_1.clear();
    var add_0 = objectStore_0.add({f0_d: '<array>', f1_t: '<number>', f2_n: '<array>', f3_q: '<boolean>', f4_w: '<object>', f5_t: '<number>'}, 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB');
    var put_0 = objectStore_1.put({f0_s: '<string>', f1_e: '<array>', f2_c: '<array>', f3_s: '<null>', f4_k: '<object>', f5_y: '<object>', f6_m: '<string>', f7_u: '<array>', f8_g: '<number>', f9_m: '<null>'}, 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
    var count_0;
    try{
        KeyRange_0 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        count_0 = objectStore_1.count(KeyRange_0);
    }
    catch (e){
    }

    var index_2539 = objectStore_1.createIndex('index_2539', 'test', {multiEntry: true});
    var clear_4 = objectStore_0.clear();
    var count_1 = objectStore_0.count();
    var getAll_0;
    try{
        KeyRange_2 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        getAll_0 = objectStore_1.getAll(KeyRange_2);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        getAll_0 = objectStore_1.getAll(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', false, true);
        get_0 = objectStore_1.get(KeyRange_4);
    }
    catch (e){
    }

    var objectStore_2 = db.createObjectStore('objectStore_3801', {autoIncrement: true});
    var get_1;
    try{
        KeyRange_6 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', false, false);
        get_1 = objectStore_1.get(KeyRange_6);
    }
    catch (e){
    }

    var count_2;
    try{
        KeyRange_8 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', true, false);
        count_2 = objectStore_1.count(KeyRange_8);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_5665 = db.transaction(['objectStore_3800'], 'readonly', {durability:"relaxed"})
    var objectStore_3800 = txn_5665.objectStore('objectStore_3800');
    var count_3;
    try{
        KeyRange_10 = IDBKeyRange.lowerBound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', false);
        count_3 = objectStore_3800.count(KeyRange_10);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_12 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        get_2 = objectStore_3800.get(KeyRange_12);
    }
    catch (e){
    }

    var index_0 = objectStore_3800.index('index_2539');
    var get_3;
    try{
        KeyRange_14 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', false, false);
        get_3 = objectStore_3800.get(KeyRange_14);
    }
    catch (e){
    }

    var getAllKeys_0 = objectStore_3800.getAllKeys(1055835345);
    var count_4;
    try{
        KeyRange_16 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', true, false);
        count_4 = objectStore_3800.count(KeyRange_16);
    }
    catch (e){
    }

    var count_5;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', true);
        count_5 = objectStore_3800.count(KeyRange_18);
    }
    catch (e){
    }

    var count_6 = objectStore_3800.count();
    var count_7;
    try{
        KeyRange_20 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', true, false);
        count_7 = objectStore_3800.count(KeyRange_20);
    }
    catch (e){
    }

    var get_4;
    try{
        KeyRange_22 = IDBKeyRange.lowerBound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', true);
        get_4 = objectStore_3800.get(KeyRange_22);
    }
    catch (e){
    }

    var count_8;
    try{
        KeyRange_24 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        count_8 = objectStore_3800.count(KeyRange_24);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_26 = IDBKeyRange.bound('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', 'HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq', false, false);
        getAll_1 = objectStore_3800.getAll(KeyRange_26, 259863118);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('HzRIowmmTQsoWFEAoWpJlkQBFXQKDyNEXgFGWArQhOqBXfmBSmbSVJmWJuwmMMYfQmVBZsvxsbQevjAAantmiWVovNqXmOtOAzlXXNbZGUenTZyZVsNatcxxLzDUryoDorTGslZWZBMLXYWjQyhVAKLJzsnRPshmeTajXUCrZBWbzWziNlmbVVfnmFGKhqZgfiSGEIKqvsPtxwVtelIcdtFZykHYldRlKGtBQUHHnsDqwsBdpJWeXjaMfxywFznoEsEhfEXyFgcuFCiSizYvAiPuKyCHYevapqiFJrUeXZFYcMMDxumHQQculzsuBBTkIUHFwlaVmdpaiyFQTUxBpSvzRfcaSUfhpFqfkLUwoKRCEHVYXKIpXKDIpQrLEuEnqeFANpMIanttdFIMztkOjayRIgnpackBOTgxUmNAUiDKKXZMLcwkttuJDVFUzJsyZfspyMeNpYsUAkyJgqHsfmiPQErrlqZLrWq');
        getAll_1 = objectStore_3800.getAll(KeyRange_27);
    }

    txn_5665.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5665.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5665.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5666 = db.transaction(['objectStore_3801'], 'readwrite', {durability:"strict"})
    var objectStore_3801 = txn_5666.objectStore('objectStore_3801');
    var add_1 = objectStore_3801.add({f0_q: '<array>', f1_c: '<number>', f2_g: '<array>', f3_a: '<string>', f4_f: '<string>'}, 'QJBRghbcWlbuknyltRvzvJoIFlpeQLQcdnkqnPVSsLcTIxtqzrVLqhXMFFnLJCgCqgLflYqkddGplZEoVpUIqrkAwaWsAZcvKEaoRdsOUdKvxSuKhonkRWIXFIXkgklaUbfRUXmZdUxcmRGQHQPOSIzRN');
    var count_9 = objectStore_3801.count();
    var add_2 = objectStore_3801.add({f0_o: '<number>', f1_a: '<array>'}, 'nKBvDRQZNNULbMpMuAnFfLxzmkRXefIYopMsELwNyIsrBLCPfPWuWHKIrdPOctkmFUySjiWcQtIqwKtbnalBKruysbtliwMLcPKJsLfXszZAzvMhxJEeMGxmZWTuEECmvSfpEwLJgPBFuPmKDXmQbRTVsBjcpJPQWvAuYOaqIHZGLcTaRhkuHSxdUDFwkamnLriEqhAunQyVabwFFkpDLvPYoGLOuSGLTLMJHquBrguVjtkycCNmrsIgApMwYSYhfcssKFYjetdmAzQmomxdraDyoKimGSQDITWnWuQHgJNtvrPXgoIABMoCpgSejLLHYxbZVdmMMUwjnoZRNZovIEQxWPfcEsbKqXAEKXozMjachSqEwlysoOdQjysNMNugsGvpKofPHWBPxbJVepoFKOjZDsBdOrOyzbjjsgyuhBnkIofJjpzIscdwVLgGcVJsRQgGMLyQPfMqfEEaBqoFzUXKPuXrhmvtOymjyXnkltVvHVUxxOQDaTomUbKxSzfnttuvlhzYacqTwJhZXIgxrvTmtCNpYWwZcICVtqeoourcAaUTkjKnxhEDetYdEdgJsffaRZAtMdvllvUFHKvjEfQeGqoKKkUASwciFhAKogCLkDzYVaGACvMVuPrMfifiNdasSSQhIXqunuzfUfvhEgdoDavpNIocAghGJQvMJedoAxYMIRBeFandUSPaHcLbtfEjtrRDJQXuLCpbBAZmtQebGFLjPgsdtyAcnSlwbfyWLrpzsSMKkKCpXfoVvLPmPWTlOGbSBmqMWAjypuBSCXjqXXRPtLpZGrnFrQLfeMjGkzHJgHtpDSHnuAMOshwIFeiBVunSLkiYmbTQtkqreClEJZxnWoKafMFSoaOOwaRuEpHUutCkdMQJfXmHwg');
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('QJBRghbcWlbuknyltRvzvJoIFlpeQLQcdnkqnPVSsLcTIxtqzrVLqhXMFFnLJCgCqgLflYqkddGplZEoVpUIqrkAwaWsAZcvKEaoRdsOUdKvxSuKhonkRWIXFIXkgklaUbfRUXmZdUxcmRGQHQPOSIzRN', 'nKBvDRQZNNULbMpMuAnFfLxzmkRXefIYopMsELwNyIsrBLCPfPWuWHKIrdPOctkmFUySjiWcQtIqwKtbnalBKruysbtliwMLcPKJsLfXszZAzvMhxJEeMGxmZWTuEECmvSfpEwLJgPBFuPmKDXmQbRTVsBjcpJPQWvAuYOaqIHZGLcTaRhkuHSxdUDFwkamnLriEqhAunQyVabwFFkpDLvPYoGLOuSGLTLMJHquBrguVjtkycCNmrsIgApMwYSYhfcssKFYjetdmAzQmomxdraDyoKimGSQDITWnWuQHgJNtvrPXgoIABMoCpgSejLLHYxbZVdmMMUwjnoZRNZovIEQxWPfcEsbKqXAEKXozMjachSqEwlysoOdQjysNMNugsGvpKofPHWBPxbJVepoFKOjZDsBdOrOyzbjjsgyuhBnkIofJjpzIscdwVLgGcVJsRQgGMLyQPfMqfEEaBqoFzUXKPuXrhmvtOymjyXnkltVvHVUxxOQDaTomUbKxSzfnttuvlhzYacqTwJhZXIgxrvTmtCNpYWwZcICVtqeoourcAaUTkjKnxhEDetYdEdgJsffaRZAtMdvllvUFHKvjEfQeGqoKKkUASwciFhAKogCLkDzYVaGACvMVuPrMfifiNdasSSQhIXqunuzfUfvhEgdoDavpNIocAghGJQvMJedoAxYMIRBeFandUSPaHcLbtfEjtrRDJQXuLCpbBAZmtQebGFLjPgsdtyAcnSlwbfyWLrpzsSMKkKCpXfoVvLPmPWTlOGbSBmqMWAjypuBSCXjqXXRPtLpZGrnFrQLfeMjGkzHJgHtpDSHnuAMOshwIFeiBVunSLkiYmbTQtkqreClEJZxnWoKafMFSoaOOwaRuEpHUutCkdMQJfXmHwg', true, false);
        get_5 = objectStore_3801.get(KeyRange_28);
    }
    catch (e){
    }

    var put_1 = objectStore_3801.put({f0_b: '<boolean>'}, 'oWOWrthTmqIlqzKnUOrAVJHGssuVYtGYKWladgKvaajgVDVrEpSzBsyDgrbRtLDUqxvBEqQzGoTJDdivAnnQstWpaaMVuhRnQLCqCnNemNSNNFhfqEZYWkfBXwvwLcZxgyGIRHFhFngbbwivMrrGHbZPsCUpCdydfcJafUFjOeNqdvUcjEGxRXVdCQXtvLFJVBrVgHSfAVDymedpPkeqUwJdDeHmftjczssRMzOKdPcxNKPkVxikLBwiuXJvNpndSXpalirZgJXMwNvTzDLGaEftaUFlHyDBXrkksJCFCWJvDkVPqODcWQBivLGbgrddKRuLWeNySeWwWTVQkVdlCPOwdPKzomypwniOmovpATlmmhwiTbNNqEgVNamMhZTPhZRxbUoMBKZmsnHkewFywhjPXYJNzSwNzwPAIAZTVRBmGprinxJfjbXvcAIKNNPskhoioItcwaYLKrcsHOKqtMRGJvltEEZRnFBdsUUuZYopQdyGWQJNUGMFtSDVqLshlEsgODPZcIrFQEzojkQfYeemUpFTrqkRhOQEvdtVDpgMMdNGSkNUZAJLPXgHpsthXStanCxNqfahfXMHaYZMNDRIOyyttsOZIldTbWlhKdNcBgIFfgylrhNBzAjIDIkcCBsVVzFGGroYXyMwlJaSpnUOiVFjyZOxBWLwAtAUYgaYWzmbxWoGoNxDAAwsQyeJQtirzUfTNKZdoMgzARvapyzDYPjVQsJXebdjjtCPEJaDLKwThOdDRXSBnjiIIGfbolkwpneazQatdfpUAwMplGWgcEDuacOblrJNqfcMqODEXexNivoSKF');
    var put_2 = objectStore_3801.put({f0_o: '<number>', f1_z: '<boolean>'}, 'XapwLslksUvpmpZfATIIxbdgXVTrNpKcftmmHunrSivKkOkUfKVBQEBPHEXOzagDFARrhmjFWUnYSRpnASvvNDAxbJuGuYRelQGpglGvhYJPKTODUynpLPnUygErzUXtkLadmUHmCkSKiEoPNqredwKhMBNbmhZcYUFpqhqiJhnTiHQIVaSEYdpJvaaMnoyTfEhvOIOxzqZWtzMYQEIOmbMHdsabbLxXoaHXrcpnTcqvbgWVOrOBemoKOSjOnaMNSKRQFVmbSLSifyIpupveXzAAFTrSJDoYvIwVHhbccmeSoeXteqeAmkWAtPHTJkMApASaYcujdbFChySWsZcBgmmhBKhatfSbSzoBcwAaPguEVjHxJNGGpQeRJhiWnnAoMbqrgNdoZcxjQsZbArFczXkPCauvVWlNSqFXlewoCaieCCnJcNcuPsbnvPjITyatHjHhspFyVXYWAhmdzVnutjwiItHcjJDMfTXLkFaoNbaBkQQbxqPdlIjwNbpqjiXkEkCUQLGRZTzgQJmHIrnnFgHQMwzJVFvdvqkVBPKtIfeANshwgIHBbGArSCTrhBiMYCFFVuhlZwrHHIERvniZpgkzXzHVOTmgVPmTQgC');
    var add_3 = objectStore_3801.add({f0_l: '<null>', f1_m: '<number>', f2_u: '<null>', f3_g: '<object>', f4_i: '<number>', f5_b: '<string>', f6_u: '<string>'}, 'MTpIDHcasdlnGtMiuTwujMAkXLLQvjMRKffdByvtqqHOFOmCDQBZngAhsWXLZVkOnXOtZpxmaPoFLcTyZmDHrtVSAmaIRDyWEEGVSvNEadWKAFfjrdZRdLrQXkLBPQimvRCSpnYOTckCbJpHQZcRnKNKRGVrHtqSvUhHoqZvPuGINgvjOiFyJHeOCcFZADmCGimPBzccCjNXAzxngsSWnzHwjCMyVYsKrjNRTdbUHfUPIIXqscMvOHCwxghNdqvbxTSPYQyFkJlZfMlaNmGAaRmsvOEARQdegbvAQYMsjmkkCmknvnrAznKsTsgiDzsUiNPaPKXigvcGjJiPqcXWyhbVNdvwaTuVuWOHLluqpcadntxRsuNuEIldtHROcXlOBMRZuduwlNbnHyGiLJRPolTAfJEAfXdwwjPnJnOhnwwIvxxkZpZcJTSbKtjgSbvdDzlPuwuaPSQchLoJnzevHOkNCkVaifHtInsEGXoqWNeVGifzVDOKsSAnybQFuZHaSqjIWGttDFXaAHZgtNNrKxfWUMRsfI');
    var clear_5 = objectStore_3801.clear();
    var count_10 = objectStore_3801.count();
    var clear_6 = objectStore_3801.clear();
    var get_6;
    try{
        KeyRange_30 = IDBKeyRange.bound('nKBvDRQZNNULbMpMuAnFfLxzmkRXefIYopMsELwNyIsrBLCPfPWuWHKIrdPOctkmFUySjiWcQtIqwKtbnalBKruysbtliwMLcPKJsLfXszZAzvMhxJEeMGxmZWTuEECmvSfpEwLJgPBFuPmKDXmQbRTVsBjcpJPQWvAuYOaqIHZGLcTaRhkuHSxdUDFwkamnLriEqhAunQyVabwFFkpDLvPYoGLOuSGLTLMJHquBrguVjtkycCNmrsIgApMwYSYhfcssKFYjetdmAzQmomxdraDyoKimGSQDITWnWuQHgJNtvrPXgoIABMoCpgSejLLHYxbZVdmMMUwjnoZRNZovIEQxWPfcEsbKqXAEKXozMjachSqEwlysoOdQjysNMNugsGvpKofPHWBPxbJVepoFKOjZDsBdOrOyzbjjsgyuhBnkIofJjpzIscdwVLgGcVJsRQgGMLyQPfMqfEEaBqoFzUXKPuXrhmvtOymjyXnkltVvHVUxxOQDaTomUbKxSzfnttuvlhzYacqTwJhZXIgxrvTmtCNpYWwZcICVtqeoourcAaUTkjKnxhEDetYdEdgJsffaRZAtMdvllvUFHKvjEfQeGqoKKkUASwciFhAKogCLkDzYVaGACvMVuPrMfifiNdasSSQhIXqunuzfUfvhEgdoDavpNIocAghGJQvMJedoAxYMIRBeFandUSPaHcLbtfEjtrRDJQXuLCpbBAZmtQebGFLjPgsdtyAcnSlwbfyWLrpzsSMKkKCpXfoVvLPmPWTlOGbSBmqMWAjypuBSCXjqXXRPtLpZGrnFrQLfeMjGkzHJgHtpDSHnuAMOshwIFeiBVunSLkiYmbTQtkqreClEJZxnWoKafMFSoaOOwaRuEpHUutCkdMQJfXmHwg', 'MTpIDHcasdlnGtMiuTwujMAkXLLQvjMRKffdByvtqqHOFOmCDQBZngAhsWXLZVkOnXOtZpxmaPoFLcTyZmDHrtVSAmaIRDyWEEGVSvNEadWKAFfjrdZRdLrQXkLBPQimvRCSpnYOTckCbJpHQZcRnKNKRGVrHtqSvUhHoqZvPuGINgvjOiFyJHeOCcFZADmCGimPBzccCjNXAzxngsSWnzHwjCMyVYsKrjNRTdbUHfUPIIXqscMvOHCwxghNdqvbxTSPYQyFkJlZfMlaNmGAaRmsvOEARQdegbvAQYMsjmkkCmknvnrAznKsTsgiDzsUiNPaPKXigvcGjJiPqcXWyhbVNdvwaTuVuWOHLluqpcadntxRsuNuEIldtHROcXlOBMRZuduwlNbnHyGiLJRPolTAfJEAfXdwwjPnJnOhnwwIvxxkZpZcJTSbKtjgSbvdDzlPuwuaPSQchLoJnzevHOkNCkVaifHtInsEGXoqWNeVGifzVDOKsSAnybQFuZHaSqjIWGttDFXaAHZgtNNrKxfWUMRsfI', true, true);
        get_6 = objectStore_3801.get(KeyRange_30);
    }
    catch (e){
    }

    txn_5666.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5666.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5666.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5667 = db.transaction(['objectStore_3801', 'objectStore_3799', 'objectStore_3800'], 'readwrite', {durability:"relaxed"})
    var objectStore_3799 = txn_5667.objectStore('objectStore_3799');
    var clear_7 = objectStore_3799.clear();
    var delete_0;
    try{
        KeyRange_32 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', true, true);
        delete_0 = objectStore_3799.delete(KeyRange_32);
    }
    catch (e){
    }

    var add_4 = objectStore_3799.add({f0_j: '<string>', f1_j: '<boolean>', f2_m: '<number>', f3_z: '<boolean>'}, 'XQBajSuxOpbAyAzQsfUTlBrSWuqpPTFonPuSgIdAhBZWXoylTbxzINGbLjnnUDCLMVwINdpsgVVjqileSllYYSpypLQRjaIXisDgNeWLXesLPQOVabBpKmEOBaTGCTItbVYUjqMeBd');
    var put_3 = objectStore_3799.put({f0_k: '<string>', f1_q: '<null>', f2_g: '<object>', f3_n: '<array>', f4_m: '<boolean>', f5_r: '<null>', f6_k: '<string>', f7_i: '<boolean>'}, 'vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa');
    var clear_8 = objectStore_3799.clear();
    var delete_1;
    try{
        KeyRange_34 = IDBKeyRange.lowerBound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', false);
        delete_1 = objectStore_3799.delete(KeyRange_34);
    }
    catch (e){
    }

    txn_5667.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5667.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5667.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5668 = db.transaction(['objectStore_3800', 'objectStore_3799'], 'readonly', {durability:"default"})
    var objectStore_3799 = txn_5668.objectStore('objectStore_3799');
    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', true, true);
        get_7 = objectStore_3799.get(KeyRange_36);
    }
    catch (e){
    }

    var get_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'XQBajSuxOpbAyAzQsfUTlBrSWuqpPTFonPuSgIdAhBZWXoylTbxzINGbLjnnUDCLMVwINdpsgVVjqileSllYYSpypLQRjaIXisDgNeWLXesLPQOVabBpKmEOBaTGCTItbVYUjqMeBd', true, true);
        get_8 = objectStore_3799.get(KeyRange_38);
    }
    catch (e){
    }

    var count_11 = objectStore_3799.count();
    var count_12 = objectStore_3799.count();
    var get_9;
    try{
        KeyRange_40 = IDBKeyRange.lowerBound('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa', true);
        get_9 = objectStore_3799.get(KeyRange_40);
    }
    catch (e){
    }

    var count_13;
    try{
        KeyRange_42 = IDBKeyRange.only('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB');
        count_13 = objectStore_3799.count(KeyRange_42);
    }
    catch (e){
    }

    txn_5668.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5668.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5668.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_5669 = db.transaction(['objectStore_3799'], 'readonly', {durability:"relaxed"})
    var objectStore_3799 = txn_5669.objectStore('objectStore_3799');
    var count_14;
    try{
        KeyRange_44 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', false, true);
        count_14 = objectStore_3799.count(KeyRange_44);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.only('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa');
        get_10 = objectStore_3799.get(KeyRange_46);
    }
    catch (e){
    }

    var get_11;
    try{
        KeyRange_48 = IDBKeyRange.only('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa');
        get_11 = objectStore_3799.get(KeyRange_48);
    }
    catch (e){
    }

    var count_15 = objectStore_3799.count();
    var count_16 = objectStore_3799.count();
    var getAllKeys_1;
    try{
        KeyRange_50 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', true, false);
        getAllKeys_1 = objectStore_3799.getAllKeys(KeyRange_50);
    }
    catch (e){
        KeyRange_51 = IDBKeyRange.only('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa');
        getAllKeys_1 = objectStore_3799.getAllKeys(KeyRange_51);
    }

    var count_17 = objectStore_3799.count();
    var getAllKeys_2 = objectStore_3799.getAllKeys();
    var get_12;
    try{
        KeyRange_52 = IDBKeyRange.bound('UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', 'XQBajSuxOpbAyAzQsfUTlBrSWuqpPTFonPuSgIdAhBZWXoylTbxzINGbLjnnUDCLMVwINdpsgVVjqileSllYYSpypLQRjaIXisDgNeWLXesLPQOVabBpKmEOBaTGCTItbVYUjqMeBd', true, true);
        get_12 = objectStore_3799.get(KeyRange_52);
    }
    catch (e){
    }

    var get_13;
    try{
        KeyRange_54 = IDBKeyRange.bound('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa', 'UhZpkuNPlbOpdAVpwNAxVDazApQjHVmiRmILWxQvRGgcdBbdFABasNtQAkPrTsvRiRRRkDAjRRKacRZPIuRLQEyfvYLDawrcFVffqbgqtEWcuVstGNLmbOTODfVQPFDRBcJdfdbPDjmXifWqRrsRvdgoBHchkLirucPfxnknNFYxHlazjTOUcCoqEtpOOPTCZmvQnCVzqOuzmbApaitdyeEYZMvrjjtvzKvxQrlkaHsrWIOaxCJaHvtKnyPdyXTQrjzFaOHLtGapDWKiSCKCPJpSIXgJLJTaqqejWQrrDdzByAvpTgkQSIfWOroyXlmyJUCWrEpAdSnhkPQrcjrpHJutFzSyFiGSSSTQMgezqddQcsURyznUInXVWYlUSwxGtgB', true, false);
        get_13 = objectStore_3799.get(KeyRange_54);
    }
    catch (e){
    }

    var get_14;
    try{
        KeyRange_56 = IDBKeyRange.only('vGsOMzkBDRFeTAgIRCkQSatBuTTsKYoSVOfIKhzEoPgNagSriHlAgnqvLboeaBKGpGLHWKtmiVBakPkfHyPPrIOQjOgjprEAyKGxvwrAnhNsNBGoSRxclnlKbVsPcuEzuYQrIAcouyoWrvqmNarrFFOhkMFSTuTKMRMPBaAkxgjxTdTrrgAtcGpCiyfzUMJYrOYKAZDAGPYsxhunjMZYyznvTOpVSjmiiUaAZjnFodEmtOzEWUUEVrwmLMQwcntOtsmptrDDDOjbLVwuhethZLRqjkuTPjNQcCnZfbQYLCfYLUBTPlvYNPxiSQBhIvdSrbyFiLEoVAkCjLoCYMHLPKSINeFAIPaamlCDzZDvyPrwZuBwKMuYYBuoTfSzXGYLjaQPfPFpkMqMOVtlQfMHsFfloWkyAREEvxfueAbOVefZNzcfHYUUBkLsGurIACrampqSAWKDkPpgdfuwQzKJcDEVkTQPentxIFpVmmMhtHSlQlaAWBnpXNrWa');
        get_14 = objectStore_3799.get(KeyRange_56);
    }
    catch (e){
    }

    txn_5669.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_5669.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_5669.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_7283')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};