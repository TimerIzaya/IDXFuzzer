# keypath

createObjectStore里的keypath是唯一的主键，如果没设置，那每次都要手动写key是什么，和hashmap同理的





# Context设计

## IDBSchemaContext

贯穿schemaOpt层和dataOpt层，由于表结构的定义和实际使用是两个不同的作用域，所以需要全文中定义一个描述表结构的数据结构

