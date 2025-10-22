(async function getFullIndexedDBInfo() {
  if (!indexedDB.databases) {
    console.warn("indexedDB.databases() not supported in this browser.");
    return;
  }

  const dbs = await indexedDB.databases();
  for (const dbInfo of dbs) {
    if (!dbInfo.name) continue;
    console.log(`\n📦 数据库: ${dbInfo.name}, Version: ${dbInfo.version}`);

    const openReq = indexedDB.open(dbInfo.name, dbInfo.version);

    openReq.onsuccess = function(event) {
      const db = event.target.result;
      const storeNames = Array.from(db.objectStoreNames);
      if (storeNames.length === 0) {
        console.log(`  （无表）`);
      }

      for (const storeName of storeNames) {
        console.log(`  🗂️ 表: ${storeName}`);
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const indexNames = Array.from(store.indexNames);

        if (indexNames.length === 0) {
          console.log(`    （无索引）`);
        } else {
          for (const indexName of indexNames) {
            console.log(`    🔍 索引: ${indexName}`);
          }
        }
      }

      db.close();
    };

    openReq.onerror = function(event) {
      console.warn(`❌ 无法打开数据库 ${dbInfo.name}:`, event.target.error);
    };
  }
})();
