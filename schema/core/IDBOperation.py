from dataclasses import dataclass, field
from typing import Dict, Any, List, Optional

from schema.IDBEnum import OperationEnum, InterfaceEnum
from schema.IDBType import Type

@dataclass
class Param:
    # 形参名：与 Web API 定义保持一致，便于阅读和序列化（例如 "id"、"version"、"value"、"key"）
    name: str

    # 参数类型：使用你的 Type 系统（BasicType / InterfaceType / UnionType / SequenceType / NullableType / DictionaryType / AliasType）
    # 例：BasicType(DOMString)、AliasType("IDBValidKey")
    type: Type

    # 是否可选：对可选入参（“?”）设为 True；位置仍然按原有顺序排
    # 例：open(id, version?) -> version.optional=True
    optional: bool = False

    def to_dict(self) -> Dict[str, Any]:
        return {"id": self.name, "type": self.type.to_dict(), "optional": self.optional}

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Param":
        return Param(name=d["id"], type=Type.from_dict(d["type"]), optional=d.get("optional", False))


@dataclass
class Operation:
    # 操作枚举：具体是哪一个 API 动作（open / deleteDatabase / transaction / add / get / openCursor / cursor.continue ...）
    # 例：OperationEnum.OPEN
    id: OperationEnum

    # 操作的目标接口：此方法是在哪个对象上被调用（IDBFactory / IDBDatabase / IDBObjectStore / IDBIndex / IDBCursor）
    # 例：open 的 target=IDBFactory；add 的 target=IDBObjectStore
    target: InterfaceEnum

    # 有序参数列表：按 WebIDL 定义顺序排列，用 Param 保证名称与可选性
    # 例：open(id, version?) => [Param("id", DOMString), Param("version", unsigned long long, optional=True)]
    args: List[Param] = field(default_factory=list)

    # 同步返回类型（注意：不是 .result 的异步值类型）
    # - open/…/add/get 等返回的是一个对象（IDBOpenDBRequest / IDBRequest / IDBTransaction / IDBObjectStore / …）
    # - 无返回值的 API 用 AliasType("void")
    # 例：open.ret_type = InterfaceType(IDB_OPEN_DB_REQUEST)，transaction.ret_type = InterfaceType(IDB_TRANSACTION)
    ret_type: Optional[Type] = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id.value,
            "target": self.target.value,
            "args": [p.to_dict() for p in self.args],
            "ret_type": self.ret_type.to_dict() if self.ret_type else None,
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Operation":
        return Operation(
            id=OperationEnum(d["id"]),
            target=InterfaceEnum(d["target"]),
            args=[Param.from_dict(x) for x in d.get("args", [])],
            ret_type=Type.from_dict(d["ret_type"]) if d.get("ret_type") else None,
        )
