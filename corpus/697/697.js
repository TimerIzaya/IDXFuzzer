let db;
const openRequest = window.indexedDB.open('str_611', 5796987632351290)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_4228', {autoIncrement: false});
    var objectStore_1 = db.createObjectStore('objectStore_4229');
    var index_2858 = objectStore_0.createIndex('index_2858', 'test', {unique: false});
    var objectStore_2 = db.createObjectStore('objectStore_4230', {keypath: 'aXTITfmPKxnAzRZcvhzolubkNBrgSSHeYArRGTMZGmFsCaNmjIxUMZZhZFFOcMyuNRaxAClyDvcDFIOLjBJvdtBkvkSnPQJYmYyhsofRmSoDxQucMQOmIszIhXlzSDiVKSjzXlqcOvNaEcyJoPJsAVACccWjaMIssFUEwjTFbMUyyWXWKjlvXrnQnQeTZOFxWJaCOmIRnKaFdcdaFTVlKNKCKGmeVbVexAxqLaDbNhaeZAjHFxXMQpeJCknadkNrnzoSiDtACUPSpjoWZJbIgXmsCVIedyoSqOVaxLemljotjHVGqGoYGHvlYewlGyaKZaFDNTdNjaOQyQCbNBYGatUqbcxCyZirDXFMVIlYKOyYzqwsyXmSxiQpwXIumjFyZyRbkGlTQMSJZpeAcvXqowMWSshqDUcIOCZILYfuhVMLIimoIDIiVnIizZMzyJSwCSSbeROvsBVKFjgizVaWgkVAngQsBptYUcZNPaoRSnIOiVlLfusEdenpGdRKCHcNwsvUKWSagLOiECrCsRgTBFJNdlBPnFmwRUuryGMUkBSrRusTTlyVJyWuexjadcdrKCYYEIlqeyGLrBYisqQYcERItwYnUMJQoRybMYaFQSCTLMsUgslIeRNAlVkpHaNPBYyKJSqQIiMplQATLcAnzKcKowXGrYHiaquEwXVPhFigqMAmXPONyhYCpgQksHaEDovDpaskICJKouKSvavBbTAAgTTtqdnzIHbcMfQPPLdgfGQSGnMyEuJFCQnoOsPKCoMgZJgVfiDzFlBKnbEOteDlvGwusTCDEcesdgKRHJunHcFqyZjzzsEOCJR'});
    var clear_0 = objectStore_1.clear();
    var objectStore_3 = db.createObjectStore('objectStore_4231', {keypath: 'WjLEomlgFcXwnRHdiSeSoPSVUYvDlKzpWWErvejysbhYZuiwkyXeVbYaEclIvtoGVoFfblObJFUnhlwdpFDQvJsiNMnhYasjiJucTenYUDTjDOFTLRCbegYSIYqEp'});
    var add_0 = objectStore_3.add({f0_a: '<object>', f1_f: '<object>', f2_a: '<boolean>', f3_c: '<number>', f4_n: '<number>', f5_z: '<boolean>', f6_x: '<null>', f7_r: '<null>', f8_x: '<array>'}, 'OkipOUEbzEOuzScvWdRICCdLEbMaEdRjRCTvhIHBPnKUfvFqUzhuGgOVdgcYTrVecbpuckpPWASDrXzfZFlzjCNBGSluxfnlvMBiEHFOCYzsbUIbcDpEmbkkgOlfqveVzzpkddUudjBRILBDxNPVeytZqQcmJHuVAtqbbeLLKCSuzGcHQbuaRugccQHIFNg');
    var add_1 = objectStore_1.add({f0_s: '<string>', f1_t: '<boolean>', f2_g: '<null>', f3_w: '<null>', f4_l: '<array>', f5_p: '<null>'}, 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
    var clear_1 = objectStore_3.clear();
    var put_0 = objectStore_2.put({f0_l: '<array>', f1_e: '<string>', f2_l: '<array>', f3_x: '<number>'}, 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP');
    var getAll_0;
    try{
        KeyRange_0 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_0 = objectStore_1.getAll(KeyRange_0, 91153007);
    }
    catch (e){
        KeyRange_1 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_0 = objectStore_1.getAll(KeyRange_1);
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_6355 = db.transaction(['objectStore_4230'], 'readonly', {durability:"strict"})
    var objectStore_4230 = txn_6355.objectStore('objectStore_4230');
    var count_0 = objectStore_4230.count();
    var getAllKeys_0;
    try{
        KeyRange_2 = IDBKeyRange.only('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP');
        getAllKeys_0 = objectStore_4230.getAllKeys(KeyRange_2, 490719741);
    }
    catch (e){
        KeyRange_3 = IDBKeyRange.only('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP');
        getAllKeys_0 = objectStore_4230.getAllKeys(KeyRange_3);
    }

    var get_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', true, true);
        get_0 = objectStore_4230.get(KeyRange_4);
    }
    catch (e){
    }

    txn_6355.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6355.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6355.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6356 = db.transaction(['objectStore_4229'], 'readonly', {durability:"default"})
    var objectStore_4229 = txn_6356.objectStore('objectStore_4229');
    var count_1;
    try{
        KeyRange_6 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        count_1 = objectStore_4229.count(KeyRange_6);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_8 = IDBKeyRange.lowerBound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false);
        getAllKeys_1 = objectStore_4229.getAllKeys(KeyRange_8);
    }
    catch (e){
        KeyRange_9 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAllKeys_1 = objectStore_4229.getAllKeys(KeyRange_9);
    }

    var get_1;
    try{
        KeyRange_10 = IDBKeyRange.bound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false, false);
        get_1 = objectStore_4229.get(KeyRange_10);
    }
    catch (e){
    }

    var getAll_1;
    try{
        KeyRange_12 = IDBKeyRange.bound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false, false);
        getAll_1 = objectStore_4229.getAll(KeyRange_12);
    }
    catch (e){
        KeyRange_13 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_1 = objectStore_4229.getAll(KeyRange_13);
    }

    var get_2;
    try{
        KeyRange_14 = IDBKeyRange.lowerBound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false);
        get_2 = objectStore_4229.get(KeyRange_14);
    }
    catch (e){
    }

    var count_2 = objectStore_4229.count();
    var getAll_2;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false);
        getAll_2 = objectStore_4229.getAll(KeyRange_16, 760383781);
    }
    catch (e){
        KeyRange_17 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_2 = objectStore_4229.getAll(KeyRange_17);
    }

    var count_3 = objectStore_4229.count();
    var getAll_3;
    try{
        KeyRange_18 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_3 = objectStore_4229.getAll(KeyRange_18, 764688303);
    }
    catch (e){
        KeyRange_19 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_3 = objectStore_4229.getAll(KeyRange_19);
    }

    var count_4 = objectStore_4229.count();
    var count_5;
    try{
        KeyRange_20 = IDBKeyRange.bound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false, true);
        count_5 = objectStore_4229.count(KeyRange_20);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_22 = IDBKeyRange.bound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', true, true);
        get_3 = objectStore_4229.get(KeyRange_22);
    }
    catch (e){
    }

    var count_6 = objectStore_4229.count();
    txn_6356.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6356.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6356.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6357 = db.transaction(['objectStore_4229'], 'readonly', {durability:"relaxed"})
    var objectStore_4229 = txn_6357.objectStore('objectStore_4229');
    var getAll_4;
    try{
        KeyRange_24 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_4 = objectStore_4229.getAll(KeyRange_24, 2569225832);
    }
    catch (e){
        KeyRange_25 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        getAll_4 = objectStore_4229.getAll(KeyRange_25);
    }

    var get_4;
    try{
        KeyRange_26 = IDBKeyRange.lowerBound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', true);
        get_4 = objectStore_4229.get(KeyRange_26);
    }
    catch (e){
    }

    var count_7 = objectStore_4229.count();
    var count_8 = objectStore_4229.count();
    var getAllKeys_2 = objectStore_4229.getAllKeys(4135702830);
    var get_5;
    try{
        KeyRange_28 = IDBKeyRange.bound('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', 'URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz', false, false);
        get_5 = objectStore_4229.get(KeyRange_28);
    }
    catch (e){
    }

    var count_9;
    try{
        KeyRange_30 = IDBKeyRange.only('URMXLnAJaHCsFIRgdzBsvpBAMijGuKZdpILeUkPCEVvCCcWychSzKYRNIjgTDmGToSrMSpDCxNjYNTXirwabUIEHjiCSDFfgWipjoqdHBptGirFnIuRKXcnroleqUOkItXoqZtsluFaFmdNECGTqKDXjpYbcCugxFKhxiBYKHIHYDMkEPUsNXgPsdLvtdjvjIdnwaYALRFXtlmgfIMfBXnfHmoWEgNPePhqwucfWDQmLAbGDqUdaYNmACLboXBhOpxeVdmsejOmRvmIWVMRjAoYGhEXlSCMNeyhLmSnsjobkuqRseGPmXrwLCJslzqVYSVuzlhzSKJBkKTNVEuSIwPkFmBwIWscRVrMguUDjuTlNgbfdfbIcwukWeJJGPtsvqEzPbNmEAalJaTGhNtZldkwPBPSYqMNMTHZFcLwABdLz');
        count_9 = objectStore_4229.count(KeyRange_30);
    }
    catch (e){
    }

    var count_10 = objectStore_4229.count();
    txn_6357.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6357.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6357.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6358 = db.transaction(['objectStore_4229', 'objectStore_4230', 'objectStore_4231'], 'readonly', {durability:"strict"})
    var objectStore_4230 = txn_6358.objectStore('objectStore_4230');
    var get_6;
    try{
        KeyRange_32 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', false, false);
        get_6 = objectStore_4230.get(KeyRange_32);
    }
    catch (e){
    }

    var getAllKeys_3;
    try{
        KeyRange_34 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', true, true);
        getAllKeys_3 = objectStore_4230.getAllKeys(KeyRange_34, 3854231411);
    }
    catch (e){
        KeyRange_35 = IDBKeyRange.only('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP');
        getAllKeys_3 = objectStore_4230.getAllKeys(KeyRange_35);
    }

    var get_7;
    try{
        KeyRange_36 = IDBKeyRange.lowerBound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', false);
        get_7 = objectStore_4230.get(KeyRange_36);
    }
    catch (e){
    }

    var getAll_5;
    try{
        KeyRange_38 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', false, true);
        getAll_5 = objectStore_4230.getAll(KeyRange_38);
    }
    catch (e){
        KeyRange_39 = IDBKeyRange.only('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP');
        getAll_5 = objectStore_4230.getAll(KeyRange_39);
    }

    var count_11 = objectStore_4230.count();
    var get_8;
    try{
        KeyRange_40 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', false, false);
        get_8 = objectStore_4230.get(KeyRange_40);
    }
    catch (e){
    }

    var get_9;
    try{
        KeyRange_42 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', true, false);
        get_9 = objectStore_4230.get(KeyRange_42);
    }
    catch (e){
    }

    var getAll_6 = objectStore_4230.getAll(39225923);
    var count_12;
    try{
        KeyRange_44 = IDBKeyRange.bound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', 'zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', true, true);
        count_12 = objectStore_4230.count(KeyRange_44);
    }
    catch (e){
    }

    var get_10;
    try{
        KeyRange_46 = IDBKeyRange.lowerBound('zQyBRwSaSQjujUvGnoCdJXzAonixKaFQVNJyzwJNLodFyekFMvSEMVlCROCijwABlLGfnQbBiZAMbnIsOujIWbxnVYwOzgTFFGHbassUtEBAdRwZEVPKyuzjhiqOcvkBEQUoEwjRHxbasErUGkeLDLWbRViBGgzYsXHUCySqIcRRJrfpGfarvzeZNByaxRsFCcxsSizSBwJMsxrzBtaAalybtCKVuenrnQdnFJhzeVkqdTHrkstQztbABEOHVEGLPCAbRosHldDkrnriqYYFtEBIGfZXTPAWlIufOSHeWJMWYCXNWYeHfetYzmbWBJXToLLqFukHmKkXqwNxDFdeQYdxTGpQUVwNdXlJuRRqnCfllXCRpElfVbbwZZZHOpxjcWqkMCeYgEglMtTLnGutnKCuyIYuOrZtExKIZUYyZVsnrLrPRDBZLUSGOWtwEbZZiKIrJyNQOQAAUafWWwjcvEzmmtjNidESNibKddKXswqNRyWnpgTGESubpYQJryayeYzUIcojEJJMTQzPBEEdkxQPUIbVQJNLVIZzGitXPvSVxIZYXpfQFTCWLLiTZemoPHwVwjyCAIkUNgmhMZPBGqIhLiHEXhSOcvOpZsNMkBQpviIbupDPqfdMdelAZAdGHEQyvehSduzQKAwygBUhCQUiaSsXyotyylIXdAAgdqGqZqykFdlkWDlPzjqxYQkkcHtHUHayP', true);
        get_10 = objectStore_4230.get(KeyRange_46);
    }
    catch (e){
    }

    txn_6358.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6358.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6358.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_6359 = db.transaction(['objectStore_4231'], 'readwrite', {durability:"strict"})
    var objectStore_4231 = txn_6359.objectStore('objectStore_4231');
    var add_2 = objectStore_4231.add({f0_w: '<string>', f1_s: '<object>'}, 'kmEYHIkNYZDCFgLfKljwhMaMTtqOEAgcGXxWwdhuESIIFnIukEOwSivmGajsSEFsQeISjjPCVIBVJyTwLrlEhyebLFDKlwwcmKgrMTlfXOpOGPiKatnCXzCEJpSHUFNgVzhVmnzFszkphKNgCkhasahwvvlNPlNmGaJEMMhVHRiaEwryvvCojnRyHchqYGKkdYRuXJtCUrIXHvrlLSzfKLlQgdNzqqOSJyWQLffUCVscwsZiFGXtzMwaXRkikeDtmsbbMfXQhvrLHuiYtrplkTsscXfsiVIVUWxJJvfXDXqiprxDhZIhQRQOBcUEbvOoSoKDwKgVALcEQdDSvAJoIOLaWDKaAaXUYIVmdercttghqsocuFeVdpwJfwliYRIrSAVBrdMsGebJOGoZklrdmGlGrBZFStUQQuNcwkJTEuVbhskHuRtxqTAEESnKoBDxgGoWjRHIeWExdqJsKX');
    var count_13 = objectStore_4231.count();
    var count_14;
    try{
        KeyRange_48 = IDBKeyRange.bound('kmEYHIkNYZDCFgLfKljwhMaMTtqOEAgcGXxWwdhuESIIFnIukEOwSivmGajsSEFsQeISjjPCVIBVJyTwLrlEhyebLFDKlwwcmKgrMTlfXOpOGPiKatnCXzCEJpSHUFNgVzhVmnzFszkphKNgCkhasahwvvlNPlNmGaJEMMhVHRiaEwryvvCojnRyHchqYGKkdYRuXJtCUrIXHvrlLSzfKLlQgdNzqqOSJyWQLffUCVscwsZiFGXtzMwaXRkikeDtmsbbMfXQhvrLHuiYtrplkTsscXfsiVIVUWxJJvfXDXqiprxDhZIhQRQOBcUEbvOoSoKDwKgVALcEQdDSvAJoIOLaWDKaAaXUYIVmdercttghqsocuFeVdpwJfwliYRIrSAVBrdMsGebJOGoZklrdmGlGrBZFStUQQuNcwkJTEuVbhskHuRtxqTAEESnKoBDxgGoWjRHIeWExdqJsKX', 'OkipOUEbzEOuzScvWdRICCdLEbMaEdRjRCTvhIHBPnKUfvFqUzhuGgOVdgcYTrVecbpuckpPWASDrXzfZFlzjCNBGSluxfnlvMBiEHFOCYzsbUIbcDpEmbkkgOlfqveVzzpkddUudjBRILBDxNPVeytZqQcmJHuVAtqbbeLLKCSuzGcHQbuaRugccQHIFNg', true, true);
        count_14 = objectStore_4231.count(KeyRange_48);
    }
    catch (e){
    }

    var add_3 = objectStore_4231.add({f0_d: '<null>', f1_x: '<null>', f2_j: '<array>', f3_y: '<null>', f4_v: '<array>', f5_h: '<array>', f6_d: '<object>', f7_t: '<null>', f8_s: '<boolean>', f9_v: '<number>'}, 'KgWjAQokNhgkSdBJosmpQFUIJssvWBNFdaNzUZMMfUsHmGtvtHItbtYFIlqxZBfaAkdDYaOwreYGwklxfQOWlASlCjOAwlYFquOJdMBrVidCyscZjEFVxdocanXgPfdWobtOhxrjzeRmGoRYAuOtAzDDkhtlDcNiSykTXfNYjpsQiQROtcOBHogdmMrCUMhkOQBRPMHlZkYmdLIVLoCDtvqktqnlMIExrChoQkgwgOpKfWCgJEWBtSbBAJxZgRkToJFzuIsRvQJrETiNFNVZkModwYTxlepKnQJtEOdwfZVLKgXBAVIGsJYHptGKQAGtKwwKIxotsIEovNNpUkTLRiDwNZJojeXrfUkzZqUaRRvFPeFHCDSMyMljKtrIfojqNWifzNPsysgXZUFwoKXpcRhSxtnwzRESaxdRFGpQfRnZTkFgOOPRkrLXlMcxrurRcOpHXvHqyrYpBhOJJydFbunizcJKEbSqCUDtkarmmMHxAOudDleAifczqeJnzWPTSoRCYvQkcpWELFyfrvzpuUkBIIvDDqLzmAgLARXtWISkTWHyOZGYDBlqADuIGIMqXKYMwOZRjtsmWjSfrvZtyKw');
    txn_6359.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_6359.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_6359.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_3096')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};