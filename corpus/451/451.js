let db;
const openRequest = window.indexedDB.open('str_7295', 1107837110288670)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db = event.target.result;
    var objectStore_0 = db.createObjectStore('objectStore_2664', {autoIncrement: true});
    db.deleteObjectStore('objectStore_2664')
    var objectStore_1 = db.createObjectStore('objectStore_2665', {keypath: 'zjPYQQRRuMSCZLVdpZPquEZgCYoOhNsSdMIyQRUNLgHqzBAqZpxOvYbeJXSukVBgmBMLEpNHQLyjQxxBhwrWHqsVrVxZvchsOsrEWmTQhskDrBMACFaCXBnsYjeWPNqCUXOKHclGwynapDcbNhXV'});
    var put_0 = objectStore_1.put({f0_j: '<boolean>', f1_s: '<array>', f2_b: '<null>'}, 'pdlujkDvqftUfBjUqZAKfvjEWlwdNcIEGDWrfqKZGvknXYBMxISITZPjBmvLeBsOXyuzCpVggTXKDFhVTndfXQDkOsLcjdbolKXjMXudjyfJKdhCHhpNqfbphcjrbzdgyKrRDrOLitwJpoMHocWAmIkwDFPmNUzVcEeEgMksidptdGhTcapkCAdxxdsENOZDjRZnswcGedgNJBqbmDCCvPtIKWMvfEDoFlzGKpnFJZulWJyCHFmorFeIGwtDMArmcxAJTKfzQzjuvOSlEFZSsPOwHJEvaiJqRnDJQxWctawfrzufrpHjljcUcrFPHkAJBAGzbBixgrkUAGrXQXsikvshfuhLpeCltVkmdiUywbeyDkCESAtNHIeEDjznhhGPaahoEiAvSeAjceEAg');
    var index_1747 = objectStore_1.createIndex('index_1747', 'test', {multiEntry: true});
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.only('pdlujkDvqftUfBjUqZAKfvjEWlwdNcIEGDWrfqKZGvknXYBMxISITZPjBmvLeBsOXyuzCpVggTXKDFhVTndfXQDkOsLcjdbolKXjMXudjyfJKdhCHhpNqfbphcjrbzdgyKrRDrOLitwJpoMHocWAmIkwDFPmNUzVcEeEgMksidptdGhTcapkCAdxxdsENOZDjRZnswcGedgNJBqbmDCCvPtIKWMvfEDoFlzGKpnFJZulWJyCHFmorFeIGwtDMArmcxAJTKfzQzjuvOSlEFZSsPOwHJEvaiJqRnDJQxWctawfrzufrpHjljcUcrFPHkAJBAGzbBixgrkUAGrXQXsikvshfuhLpeCltVkmdiUywbeyDkCESAtNHIeEDjznhhGPaahoEiAvSeAjceEAg');
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var add_0 = objectStore_1.add({f0_z: '<boolean>', f1_n: '<number>'}, 'shpGrJCPiwjkRFWIMGrNBYNlOrNwufJRMboCupCrLmuaORdNdPkmTCyVBjJFCjdUHSYWAGTbsbAWaCyJWGgMwztVNNNGBLwcOTIKUaKhbXGufbllodCPzLoxKnZClkAhCIeQSBknBnMqGwQFHnhkHMUzCXQomOZDgPhchgkOAEZQVuoOBCrmGkFgyMblIwxAtUUzC');
    var index_1748 = objectStore_1.createIndex('index_1748', 'test', {unique: true});
    var index_1749 = objectStore_1.createIndex('index_1749', 'test');
    var objectStore_2 = db.createObjectStore('objectStore_2666', {keypath: 'wujzPBReROobHSMQpAvPNpNNYpnxFSeMtRSKeGhqLYaVsyFExfMXJaCWnnLYDZrIJZLzRiFoBkREluDTcroPcTcZVRseVIjOyDIXbBSKWqQMWjfnPmhyPAgZZNKtIxRPppYeWcTyigYfMnBpRsuMzPgDEtOXORuAEyIhGGLiLKgOytlDWlrUAgihnTUOlhxdFmGiMlBFOTVJkUIDmYGGKeapKTfNLaaxQkVFTbcFDQRoVJMLiTvWTLsedLRVVwQTppPlMIUZzvTrlANaNFOUAucWjwwlNcRecuSNaXFYXybNuhtgDQOmlRBGKQenGOYChLAzDSOnfivwHpAolzRSvshrDZUNFtlkyAAwKNwpfGvEJJAdOPEYyNvYobICHDuBQCWCkzYOYBIqCItLsJgRoeTFIIAtMkpYgubjTaxZZsVSGAVYheDSYDzctFHdWqMjODzMdgvvlluCvzsHshmHYyrgQFvrpQCAZajHzYzNmzKCDGBNkLBWzATFoPMqDAxvGRUIWhkDdpOtCoYaMtwUXmyLXWcCljgKmkMiADzZIYWKNtvKbSsmILMAlWTsQZHTzdYIerLQhKuKMWXIkodKUVpvYxelokvkZaLgrhYzgLITdjEpUWxeEnFDkXpsEpPYsxBwvjXsALXdvSDklwwpPzxlzsQqRdxBWWJoTfxRGadZTjStFSzuRtZurtEuKONnQrmQtAJooKxGPOxbuuqXXQYQQyQhgnqTPATnhymUkHBkqbgMwowGCZQqsbTcyLgIPjdUfuNwlAhQJyKhYXtHngRAMCZzqfbNnjCnBnNmoInKWgIhMrciCHMequLpyaSXFfxKFSLdtbxRgemvGbsOPXZWSJisYzqRvfblvDLIIxbaESIqsmCJvHgyXSYNgSQrvHGRemaArBbqaxDqVblZuScdC', autoIncrement: true});
    var index_1750 = objectStore_2.createIndex('index_1750', 'test', {unique: false, multiEntry: false});
    var put_1 = objectStore_2.put({f0_y: '<array>', f1_d: '<string>', f2_f: '<array>', f3_e: '<null>', f4_t: '<null>'}, 'AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ');
    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.lowerBound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', true);
        get_1 = objectStore_2.get(KeyRange_2);
    }
    catch (e){
    }

    var get_2;
    try{
        KeyRange_4 = IDBKeyRange.lowerBound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', true);
        get_2 = objectStore_2.get(KeyRange_4);
    }
    catch (e){
    }

    var add_1 = objectStore_2.add({f0_a: '<null>'}, 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO');
    var count_0 = objectStore_1.count();
    var count_1 = objectStore_2.count();
    var count_2;
    try{
        KeyRange_6 = IDBKeyRange.lowerBound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', true);
        count_2 = objectStore_2.count(KeyRange_6);
    }
    catch (e){
    }

    var get_3;
    try{
        KeyRange_8 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', false, true);
        get_3 = objectStore_2.get(KeyRange_8);
    }
    catch (e){
    }

};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db = openRequest.result;
    const txn_3975 = db.transaction(['objectStore_2665', 'objectStore_2666'], 'readonly', {durability:"strict"})
    var objectStore_2666 = txn_3975.objectStore('objectStore_2666');
    var count_3 = objectStore_2666.count();
    var getAll_0;
    try{
        KeyRange_10 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true, false);
        getAll_0 = objectStore_2666.getAll(KeyRange_10, 3093006615);
    }
    catch (e){
        KeyRange_11 = IDBKeyRange.only('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ');
        getAll_0 = objectStore_2666.getAll(KeyRange_11);
    }

    var count_4 = objectStore_2666.count();
    var count_5;
    try{
        KeyRange_12 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true, true);
        count_5 = objectStore_2666.count(KeyRange_12);
    }
    catch (e){
    }

    var count_6 = objectStore_2666.count();
    var get_4;
    try{
        KeyRange_14 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true, false);
        get_4 = objectStore_2666.get(KeyRange_14);
    }
    catch (e){
    }

    var get_5;
    try{
        KeyRange_16 = IDBKeyRange.lowerBound('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true);
        get_5 = objectStore_2666.get(KeyRange_16);
    }
    catch (e){
    }

    var count_7 = objectStore_2666.count();
    var count_8;
    try{
        KeyRange_18 = IDBKeyRange.lowerBound('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', false);
        count_8 = objectStore_2666.count(KeyRange_18);
    }
    catch (e){
    }

    var count_9 = objectStore_2666.count();
    var getAll_1 = objectStore_2666.getAll();
    txn_3975.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3975.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3975.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3976 = db.transaction(['objectStore_2666'], 'readonly', {durability:"default"})
    var objectStore_2666 = txn_3976.objectStore('objectStore_2666');
    var getAll_2 = objectStore_2666.getAll();
    var getAllKeys_0 = objectStore_2666.getAllKeys();
    var count_10 = objectStore_2666.count();
    var count_11 = objectStore_2666.count();
    var get_6;
    try{
        KeyRange_20 = IDBKeyRange.lowerBound('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true);
        get_6 = objectStore_2666.get(KeyRange_20);
    }
    catch (e){
    }

    txn_3976.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3976.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3976.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3977 = db.transaction(['objectStore_2666'], 'readonly', {durability:"relaxed"})
    var objectStore_2666 = txn_3977.objectStore('objectStore_2666');
    var count_12;
    try{
        KeyRange_22 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', false, false);
        count_12 = objectStore_2666.count(KeyRange_22);
    }
    catch (e){
    }

    var index_0 = objectStore_2666.index('index_1750');
    var index_1 = objectStore_2666.index('index_1750');
    var get_7;
    try{
        KeyRange_24 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', false, false);
        get_7 = objectStore_2666.get(KeyRange_24);
    }
    catch (e){
    }

    var getAllKeys_1;
    try{
        KeyRange_26 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', true, false);
        getAllKeys_1 = objectStore_2666.getAllKeys(KeyRange_26);
    }
    catch (e){
        KeyRange_27 = IDBKeyRange.only('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO');
        getAllKeys_1 = objectStore_2666.getAllKeys(KeyRange_27);
    }

    var getAllKeys_2;
    try{
        KeyRange_28 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', false, true);
        getAllKeys_2 = objectStore_2666.getAllKeys(KeyRange_28);
    }
    catch (e){
        KeyRange_29 = IDBKeyRange.only('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ');
        getAllKeys_2 = objectStore_2666.getAllKeys(KeyRange_29);
    }

    var index_2 = objectStore_2666.index('index_1750');
    var index_3 = objectStore_2666.index('index_1750');
    txn_3977.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3977.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3977.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3978 = db.transaction(['objectStore_2665'], 'readwrite', {durability:"default"})
    var objectStore_2665 = txn_3978.objectStore('objectStore_2665');
    var add_2 = objectStore_2665.add({f0_e: '<null>', f1_l: '<null>', f2_u: '<null>', f3_b: '<boolean>', f4_r: '<string>', f5_g: '<boolean>', f6_v: '<array>'}, 'XZgukobClUTSrnMeDTGnFmOthGsDVuLFlrDfMcRfYlRDFHRRlAjgxRbVFHmRIjcbfgTxAVYPoMGzPuwPdhYEUgfyoTKdceqguFMpUFXbnQmipLGpzbvRnzaDYcnpCInPEvAZdGGBuRRygveiLGfKPGSjTTuSdsipCFeBwpnEMrmVWzWIwngtRFZdhKgiHvcWAqusKUMPFqempELGBkoCdTqNhIcswYTQEbpjiRnzmLTMVsOQEUvLnMdEKQYECXzCAmaKJaHjuWhDaZkGnoVbslUrBHFtDxRknUXfTidaIKpETyPdjLFlcYrPLdbzYBmpnuJTbPnhmqHsAgcENGGLBUEGtrUgLXBfDpOVZvAbzXDGVHIqisuOfAanhpjoZpHCDDKXBPtjCHHGeKVsDMzGYSrgAXcRmIhwUABtKnpopFQkgwecLoNxLZgsihciBADXOWsjOAyxHyiXbzHmTVMGtMtwvTCJKJulmVJzgVrMnRTkIqbMljqTgoeJvLeqsBZkroaVJcQufQtcJbWgYzlNauVZHAxjyLFakKNzxryMxzYinDPUsUedUFyRZRsOerYRbIabqjdueYkxGcSMytKMqbJwNzgSnuoRXlgZhlnmWNbsmuSaBOyfjxXMIMwOqIlAqTBLGNqtZZyhlZReacKpUXrtBEdaOblmumUQTKCtYFXsSoERvOnSbzHpYIzfQH');
    var add_3 = objectStore_2665.add({f0_y: '<object>', f1_q: '<object>', f2_i: '<null>', f3_c: '<array>', f4_c: '<string>', f5_k: '<boolean>', f6_f: '<object>', f7_h: '<boolean>', f8_x: '<number>'}, 'rTFmPZpjcRijfDPILRAMyLLphcGimqXfimgCyWPWqDjCSBYnTmlAkBMxUvf');
    var getAllKeys_3;
    try{
        KeyRange_30 = IDBKeyRange.bound('rTFmPZpjcRijfDPILRAMyLLphcGimqXfimgCyWPWqDjCSBYnTmlAkBMxUvf', 'pdlujkDvqftUfBjUqZAKfvjEWlwdNcIEGDWrfqKZGvknXYBMxISITZPjBmvLeBsOXyuzCpVggTXKDFhVTndfXQDkOsLcjdbolKXjMXudjyfJKdhCHhpNqfbphcjrbzdgyKrRDrOLitwJpoMHocWAmIkwDFPmNUzVcEeEgMksidptdGhTcapkCAdxxdsENOZDjRZnswcGedgNJBqbmDCCvPtIKWMvfEDoFlzGKpnFJZulWJyCHFmorFeIGwtDMArmcxAJTKfzQzjuvOSlEFZSsPOwHJEvaiJqRnDJQxWctawfrzufrpHjljcUcrFPHkAJBAGzbBixgrkUAGrXQXsikvshfuhLpeCltVkmdiUywbeyDkCESAtNHIeEDjznhhGPaahoEiAvSeAjceEAg', false, true);
        getAllKeys_3 = objectStore_2665.getAllKeys(KeyRange_30, 3872665701);
    }
    catch (e){
        KeyRange_31 = IDBKeyRange.only('rTFmPZpjcRijfDPILRAMyLLphcGimqXfimgCyWPWqDjCSBYnTmlAkBMxUvf');
        getAllKeys_3 = objectStore_2665.getAllKeys(KeyRange_31);
    }

    var index_4 = objectStore_2665.index('index_1747');
    var clear_0 = objectStore_2665.clear();
    var add_4 = objectStore_2665.add({f0_h: '<object>', f1_p: '<null>', f2_e: '<object>', f3_v: '<number>', f4_z: '<array>'}, 'vyxqJdJNRTTkflJQVfDOfptTBEkUTGDGAprYEILkrlqPcUzboGlScPfRcbPeCqWngjY');
    var add_5 = objectStore_2665.add({f0_o: '<boolean>'}, 'UdMFPBtmkwwuSHXqATXfTsgWfjaaFPOAifHBlhZNKVeVqvzzKgjExLMVxdLlKEgxiOIUBqYmzqoqWWMWUNKMPeapNgPyjkYKJExNhkguAavhfHtNdWXAzsKlWmLMhFjYNoNOxQxgEbonyasXajuVDGtpUUiRIojiUJAthsNBdHrDiPOMCsVMaMEWvBSlKaqbQwTYtlalBhEogKezJiUmUCHlKkOrwrEHHYnrNxVPSXBFxLkdnLDFIYGIRczOUVJZrELNSrMZTULdNnevXqFXzHQxMXpWxmGAVArbckLwKrTAFrDNTxqXyCiSGlpRJLxKCqpLkBjFsFOKEjkqrebgorNFwlVKpbXLTecyqzDUgRTKClAxhnNFPdmGFShLJp');
    var clear_1 = objectStore_2665.clear();
    var clear_2 = objectStore_2665.clear();
    var put_2 = objectStore_2665.put({f0_y: '<array>', f1_b: '<null>', f2_n: '<object>', f3_y: '<object>', f4_z: '<boolean>'}, 'jqhZTJAnebKrbPnkiKJpAwRQfDFRBweRufOgYIwDyJgqpDejZZSGjCTlrkEfruYNyCJazhAQTtYRzvVRvmQCvBGhuJUTDUfJOZPATtqCOYykTkQhgPVJHyOoMbLVoUoQQTlrHQNeHFqxNbhBsZFKRGsmUVVDpwzchyFOUimddyDOPiJRuvhmwoLLlQavsINfAZXNbFtvhbyWgWBhnBMeMjhEZHbBeVngDOMVlNiuqNFByyzyPoAxztDwZcysmvMdupcfEZfFTaXwcyLOXDgeCRfkuHavFXwkVyArnHUPAOxBbMexDqRYvKBcVSUixaxSiiUeJFbgqoGDEMNGRAgUDKbYHaKKfUjHsCuxisdtMWmDaKzxDVcaZSRbbHdcqbyoFKlhZMkGEdHUzdLkltuHGefHgOAjwRwFOAJpkJfRGrPhaHbPNUFRqvWGfDXFBYxuygZyfdWMOJBhukXWfChwEZVddUGfBmvjwSnEMAKjUobKEDQgrTKzFjJYFOQfsJzpfLQfSirXBERRGBWRhDdfnIqgOuVTZqpRnTVgCdWYjTiDxrnCorrWTKaMTrLvTHTkwTXvUnExkEJajpBftpPCtMtNtQUNtnI');
    txn_3978.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3978.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3978.onerror = (event) => {
        console.log('Transaction error occurred');
    };
    const txn_3979 = db.transaction(['objectStore_2666'], 'readwrite', {durability:"strict"})
    var objectStore_2666 = txn_3979.objectStore('objectStore_2666');
    var add_6 = objectStore_2666.add({f0_c: '<object>', f1_g: '<string>', f2_x: '<boolean>', f3_j: '<boolean>', f4_j: '<boolean>', f5_i: '<string>', f6_d: '<boolean>', f7_z: '<object>', f8_c: '<boolean>', f9_h: '<null>', f10_d: '<object>', f11_c: '<array>', f12_f: '<null>', f13_a: '<boolean>', f14_z: '<number>', f15_i: '<array>', f16_g: '<array>', f17_x: '<number>', f18_l: '<null>', f19_z: '<number>', f20_d: '<string>', f21_s: '<boolean>', f22_g: '<null>', f23_c: '<boolean>', f24_q: '<string>', f25_x: '<string>', f26_y: '<array>', f27_p: '<array>', f28_y: '<boolean>', f29_b: '<null>', f30_g: '<string>', f31_b: '<boolean>', f32_a: '<string>', f33_q: '<string>', f34_u: '<array>', f35_f: '<null>', f36_j: '<string>', f37_b: '<object>', f38_f: '<null>', f39_b: '<boolean>', f40_k: '<object>', f41_y: '<object>', f42_t: '<null>', f43_v: '<boolean>', f44_g: '<null>', f45_v: '<string>', f46_w: '<boolean>', f47_l: '<string>', f48_t: '<object>', f49_g: '<object>', f50_o: '<null>', f51_e: '<array>', f52_z: '<string>', f53_f: '<string>', f54_d: '<string>', f55_p: '<boolean>', f56_x: '<null>', f57_p: '<boolean>', f58_s: '<array>', f59_m: '<array>', f60_t: '<string>', f61_g: '<number>', f62_o: '<array>', f63_t: '<array>', f64_q: '<boolean>', f65_c: '<array>', f66_r: '<string>', f67_g: '<array>', f68_k: '<object>', f69_w: '<array>', f70_u: '<null>', f71_g: '<boolean>', f72_h: '<number>', f73_y: '<boolean>', f74_k: '<number>', f75_r: '<object>', f76_u: '<boolean>', f77_o: '<array>', f78_y: '<object>', f79_y: '<string>', f80_u: '<string>', f81_f: '<null>', f82_j: '<null>', f83_k: '<array>', f84_b: '<null>', f85_y: '<number>', f86_x: '<object>', f87_m: '<null>', f88_r: '<array>', f89_n: '<number>', f90_j: '<null>', f91_d: '<string>', f92_b: '<object>', f93_a: '<number>', f94_q: '<null>', f95_q: '<null>', f96_r: '<number>', f97_k: '<object>', f98_c: '<object>', f99_w: '<number>', f100_q: '<array>', f101_h: '<object>', f102_b: '<string>', f103_a: '<boolean>', f104_m: '<boolean>', f105_n: '<number>', f106_m: '<array>', f107_i: '<null>', f108_e: '<array>', f109_y: '<number>', f110_q: '<array>', f111_m: '<string>', f112_i: '<array>', f113_k: '<object>', f114_b: '<object>', f115_q: '<null>', f116_a: '<number>', f117_l: '<number>', f118_x: '<array>', f119_t: '<object>', f120_i: '<number>', f121_t: '<number>', f122_z: '<string>', f123_o: '<array>', f124_c: '<array>', f125_k: '<string>', f126_w: '<boolean>', f127_b: '<number>', f128_c: '<number>', f129_i: '<array>', f130_q: '<string>', f131_b: '<null>', f132_b: '<null>', f133_a: '<string>', f134_s: '<object>', f135_k: '<array>', f136_a: '<object>', f137_j: '<array>', f138_o: '<array>', f139_r: '<number>', f140_i: '<number>', f141_k: '<array>', f142_o: '<boolean>', f143_q: '<string>', f144_f: '<number>', f145_i: '<object>', f146_y: '<null>', f147_m: '<string>', f148_g: '<string>', f149_v: '<number>', f150_t: '<string>', f151_x: '<array>', f152_x: '<array>', f153_n: '<array>', f154_p: '<number>', f155_y: '<boolean>', f156_b: '<boolean>', f157_e: '<string>', f158_r: '<null>', f159_e: '<object>', f160_o: '<number>', f161_a: '<boolean>', f162_n: '<boolean>', f163_w: '<number>', f164_a: '<object>', f165_w: '<null>', f166_j: '<array>', f167_p: '<boolean>', f168_c: '<object>', f169_b: '<number>', f170_t: '<number>', f171_l: '<string>', f172_a: '<array>'}, 'vKqNvHRykZEenEWPtlxfhFYlWclkxpNJWRfXCXSMpbPwGABTstrsSOvfwXQsotZTHHjVnnsoXawNMWnXqGBLlgnaXTiXhuCJXmZOcHcugrZHUCFdvrsEeCwKCrlUlOhwkPzpvMoUwJXQtLpEVowPJoiOkQHRlozEVSBjwuVwiUkGWqMSFdskuZAVsqSULLjbTfUiPlgXvobpWfeAYfkPZwaNUxVXlYICiuomMgSiTscsRnSDwaxfSxOMwzCLjUxHHyfSlUqZmzkseiVsgQKIpJAwUYQTAeiqlgQtHwtqoctfxVvirryHQNwhsasFgrSqumWrWOokMEgwjlsKfHNVItANuStPzIXCwffsTtMPJwkBovHlSSiuMrWyIOAaNAXHqMUTyJlEUZYdOouzEAMmutVqxqgtFEXTEJmHMvSAiQuTuNbPaScmjKVeGxwGFZpWBeGeavrvvUqbflZeVGFd');
    var getAllKeys_4;
    try{
        KeyRange_32 = IDBKeyRange.bound('vKqNvHRykZEenEWPtlxfhFYlWclkxpNJWRfXCXSMpbPwGABTstrsSOvfwXQsotZTHHjVnnsoXawNMWnXqGBLlgnaXTiXhuCJXmZOcHcugrZHUCFdvrsEeCwKCrlUlOhwkPzpvMoUwJXQtLpEVowPJoiOkQHRlozEVSBjwuVwiUkGWqMSFdskuZAVsqSULLjbTfUiPlgXvobpWfeAYfkPZwaNUxVXlYICiuomMgSiTscsRnSDwaxfSxOMwzCLjUxHHyfSlUqZmzkseiVsgQKIpJAwUYQTAeiqlgQtHwtqoctfxVvirryHQNwhsasFgrSqumWrWOokMEgwjlsKfHNVItANuStPzIXCwffsTtMPJwkBovHlSSiuMrWyIOAaNAXHqMUTyJlEUZYdOouzEAMmutVqxqgtFEXTEJmHMvSAiQuTuNbPaScmjKVeGxwGFZpWBeGeavrvvUqbflZeVGFd', 'vKqNvHRykZEenEWPtlxfhFYlWclkxpNJWRfXCXSMpbPwGABTstrsSOvfwXQsotZTHHjVnnsoXawNMWnXqGBLlgnaXTiXhuCJXmZOcHcugrZHUCFdvrsEeCwKCrlUlOhwkPzpvMoUwJXQtLpEVowPJoiOkQHRlozEVSBjwuVwiUkGWqMSFdskuZAVsqSULLjbTfUiPlgXvobpWfeAYfkPZwaNUxVXlYICiuomMgSiTscsRnSDwaxfSxOMwzCLjUxHHyfSlUqZmzkseiVsgQKIpJAwUYQTAeiqlgQtHwtqoctfxVvirryHQNwhsasFgrSqumWrWOokMEgwjlsKfHNVItANuStPzIXCwffsTtMPJwkBovHlSSiuMrWyIOAaNAXHqMUTyJlEUZYdOouzEAMmutVqxqgtFEXTEJmHMvSAiQuTuNbPaScmjKVeGxwGFZpWBeGeavrvvUqbflZeVGFd', true, true);
        getAllKeys_4 = objectStore_2666.getAllKeys(KeyRange_32, 4278885338);
    }
    catch (e){
        KeyRange_33 = IDBKeyRange.only('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ');
        getAllKeys_4 = objectStore_2666.getAllKeys(KeyRange_33);
    }

    var clear_3 = objectStore_2666.clear();
    var count_13;
    try{
        KeyRange_34 = IDBKeyRange.bound('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', 'vKqNvHRykZEenEWPtlxfhFYlWclkxpNJWRfXCXSMpbPwGABTstrsSOvfwXQsotZTHHjVnnsoXawNMWnXqGBLlgnaXTiXhuCJXmZOcHcugrZHUCFdvrsEeCwKCrlUlOhwkPzpvMoUwJXQtLpEVowPJoiOkQHRlozEVSBjwuVwiUkGWqMSFdskuZAVsqSULLjbTfUiPlgXvobpWfeAYfkPZwaNUxVXlYICiuomMgSiTscsRnSDwaxfSxOMwzCLjUxHHyfSlUqZmzkseiVsgQKIpJAwUYQTAeiqlgQtHwtqoctfxVvirryHQNwhsasFgrSqumWrWOokMEgwjlsKfHNVItANuStPzIXCwffsTtMPJwkBovHlSSiuMrWyIOAaNAXHqMUTyJlEUZYdOouzEAMmutVqxqgtFEXTEJmHMvSAiQuTuNbPaScmjKVeGxwGFZpWBeGeavrvvUqbflZeVGFd', false, true);
        count_13 = objectStore_2666.count(KeyRange_34);
    }
    catch (e){
    }

    var getAllKeys_5 = objectStore_2666.getAllKeys(3598309801);
    var count_14 = objectStore_2666.count();
    var getAllKeys_6;
    try{
        KeyRange_36 = IDBKeyRange.bound('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', 'vKqNvHRykZEenEWPtlxfhFYlWclkxpNJWRfXCXSMpbPwGABTstrsSOvfwXQsotZTHHjVnnsoXawNMWnXqGBLlgnaXTiXhuCJXmZOcHcugrZHUCFdvrsEeCwKCrlUlOhwkPzpvMoUwJXQtLpEVowPJoiOkQHRlozEVSBjwuVwiUkGWqMSFdskuZAVsqSULLjbTfUiPlgXvobpWfeAYfkPZwaNUxVXlYICiuomMgSiTscsRnSDwaxfSxOMwzCLjUxHHyfSlUqZmzkseiVsgQKIpJAwUYQTAeiqlgQtHwtqoctfxVvirryHQNwhsasFgrSqumWrWOokMEgwjlsKfHNVItANuStPzIXCwffsTtMPJwkBovHlSSiuMrWyIOAaNAXHqMUTyJlEUZYdOouzEAMmutVqxqgtFEXTEJmHMvSAiQuTuNbPaScmjKVeGxwGFZpWBeGeavrvvUqbflZeVGFd', false, false);
        getAllKeys_6 = objectStore_2666.getAllKeys(KeyRange_36, 1823837058);
    }
    catch (e){
        KeyRange_37 = IDBKeyRange.only('hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO');
        getAllKeys_6 = objectStore_2666.getAllKeys(KeyRange_37);
    }

    var get_8;
    try{
        KeyRange_38 = IDBKeyRange.bound('AYERsLHPQWyUWJzldUscDyBRkAPQYXijPNbDNpLsvrscSMIkDfNSSNdJxiruxJwzZWDMejmrWkGOPmFDnRleCVbUfqTohAJDhGrTmwVOcYSMIiQJXzySrqzvzEwQunIGWczHzFOqBwSnxYFGFTGRzfdBLVxqYZuorBwRenQXPfhjwpOZyToSJFfmqusLNDwPRxGySgZDkBzNemwuGvQlmvXlSMtMXBUjleKeWTKxAMUkaYpTvFGrmTJxbjVvLJwxytYOiUkVXyEcToQsqlxwZrdYzEZWeQHhpXAKGOuLixBQJpZFzuDUqJRjwAkmYjZPdnJiSEupKCQegocNnTynEPRsPgjUXASJatrbTeXmsQMYmatNGxovQ', 'hRmylHOIFQBbVBOQvlLCnkpspPvmplXyLJpOvkjUOqjgOQXDUSvAftdENpLoEfKxsSBWniYOCDGfcnsCoIRCTOGNAwIQgNrxMXznFMSFHlcmZUrOAVUSAMOklOwzWNoWdOeUPLO', true, true);
        get_8 = objectStore_2666.get(KeyRange_38);
    }
    catch (e){
    }

    txn_3979.oncomplete = (event) => {
        console.log('Transaction completed successfully');
    };
    txn_3979.onabort = (event) => {
        console.log('Transaction was aborted');
    };
    txn_3979.onerror = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_4846')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};