# IRSchema设计

# IRLayer设计

# IDBSchema设计

# IRLifter设计

# IDBPipe设计

# Minimizer设计

# Context设计

## IDBSchemaContext

该context贯穿schemaOpt层和dataOpt层

- 由于表结构的定义和实际使用是两个不同的作用域，所以需要全文中定义一个描述表结构的数据结构ctx

- current_db

  可以在open的success的事件开始执行的时候赋值，事件结束注销

- current_txn

  IDB的事务隔离级别是串行化，这点非常友好

  一个事务对应多个os，在case实现中，也没必要交错写，current_txn == current_oss，db.transaction为开头，db.commit为结尾

# 一个literal 在我们这里 只对应一个var







