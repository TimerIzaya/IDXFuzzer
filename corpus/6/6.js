let db_10;
const openRequest = window.indexedDB.open('str_9528', 5862911963066309)
openRequest.onupgradeneeded = (event) => {
    console.log('db onupgraded trigered');
    db_10 = event.target.result;
    var objectStore_0 = db_10.createObjectStore('objectStore_42', {keyPath: 'cicKgWeLOmIrTQtCLiMgeWaKvgnAZoFXzgdvIyuMhjOpswPPvJVhMXMryIrsjnIFlozaGFo.IyTOdvoMZMYQltmICpFNPJJiHxtVbAEXMkuBMHneBRVMbeHtZenTwwIkeZNlLHgTzCWVXaexKeY.bROOPmyywfwmjzWjaTAeZuvSmwiFXBXKJYBxZRytfRZDDouqXIUIrCcmfsgGHfmiwVIANncbvQBKzjOWPFh.RYxnLQqaOmUNYPXfPqJMtfVoBezpvObMaPwqJKCP', autoIncrement: true});
    var add_0 = objectStore_0.add({f0_d: '<null>', f1_d: '<number>', f2_s: '<boolean>', f3_a: '<string>', f4_e: '<number>', f5_y: '<number>', f6_n: '<string>', f7_z: '<object>', f8_l: '<null>', cicKgWeLOmIrTQtCLiMgeWaKvgnAZoFXzgdvIyuMhjOpswPPvJVhMXMryIrsjnIFlozaGFo: {IyTOdvoMZMYQltmICpFNPJJiHxtVbAEXMkuBMHneBRVMbeHtZenTwwIkeZNlLHgTzCWVXaexKeY: {bROOPmyywfwmjzWjaTAeZuvSmwiFXBXKJYBxZRytfRZDDouqXIUIrCcmfsgGHfmiwVIANncbvQBKzjOWPFh: {RYxnLQqaOmUNYPXfPqJMtfVoBezpvObMaPwqJKCP: false}}}});
    db_10.deleteObjectStore('objectStore_42')
    var objectStore_1 = db_10.createObjectStore('objectStore_43', {autoIncrement: false});
    var add_1 = objectStore_1.add({f0_w: '<boolean>', f1_n: '<string>', f2_c: '<object>', f3_t: '<number>', f4_b: '<null>', f5_m: '<number>', f6_j: '<array>', f7_z: '<array>'}, 'jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA');
    var get_0;
    try{
        KeyRange_0 = IDBKeyRange.bound('jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA', 'jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA', true, false);
        get_0 = objectStore_1.get(KeyRange_0);
    }
    catch (e){
    }

    var get_1;
    try{
        KeyRange_2 = IDBKeyRange.only('jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA');
        get_1 = objectStore_1.get(KeyRange_2);
    }
    catch (e){
    }

    var getAll_0;
    try{
        KeyRange_4 = IDBKeyRange.bound('jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA', 'jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA', false, true);
        getAll_0 = objectStore_1.getAll(KeyRange_4, 4014001998);
    }
    catch (e){
        KeyRange_5 = IDBKeyRange.only('jDWBkPyJQUPdUaXUmpbkfJDsJOfBVOrmXQYnpMMrJuOvLXAwTMhyavWWfUJdKRyiDmjnyrHhA');
        getAll_0 = objectStore_1.getAll(KeyRange_5);
    }

    db_10.deleteObjectStore('objectStore_43')
};
openRequest.onsuccess = (event) => {
    console.log('db onsuccess triggered')
    db_10 = openRequest.result;
    db_10.onversionchange = (event) => {
        console.log('The version of this database has changed, release this connection');
        db_10.close()
    };
    db_10.onclose = (event) => {
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
const deleteRequest = indexedDB.deleteDatabase('str_2289')
deleteRequest.onblocked = (event) => {
    console.log('delete db onblocked triggered')
};
deleteRequest.onsuccess = (event) => {
    console.log('delete db onsuccess triggered')
};
deleteRequest.onerror = (event) => {
    console.log('delete db onerror triggered')
};