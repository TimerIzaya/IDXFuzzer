(async function deleteAllIDB() {
  if (!indexedDB.databases) {
    console.warn("indexedDB.databases() not supported in this browser.");
    return;
  }

  // 获取所有数据库信息
  const dbs = await indexedDB.databases();
  console.log("📦 已发现的 IndexedDB 数据库:");
  dbs.forEach(db => {
    console.log(`- Name: ${db.name}, Version: ${db.version}`);
  });

  // 删除所有数据库
  for (const db of dbs) {
    if (db.name) {
      console.log(`🗑️ 删除数据库: ${db.name}`);
      indexedDB.deleteDatabase(db.name);
    }
  }

  console.log("✅ 所有 IndexedDB 数据库删除请求已发出（异步）。");
})();
