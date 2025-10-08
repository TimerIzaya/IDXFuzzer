from dataclasses import dataclass, field
from typing import Dict, Any, Optional, List

from schema.IDBEnum import RequestEnum, EventEnum, InterfaceEnum
from schema.IDBType import Type

@dataclass
class Request:
    # 请求类型：两种——IDBRequest（普通），IDBOpenDBRequest（open/deleteDatabase 特有）
    id: RequestEnum

    # 期望的 .result 类型（异步结果的静态类型提示，不是立即值）
    # - open() 的 .result 是 IDBDatabase ⇒ InterfaceType(IDB_DATABASE)
    # - get() 的 .result 是任何 JS 值 ⇒ BasicType("any")
    # 例：InterfaceType(InterfaceEnum.IDB_DATABASE) 或 BasicType("any")
    expected_result: Optional[Type] = None

    # 当前就绪状态：'pending' 或 'done'（与 IDBRequest.readyState 对齐）
    # 例："pending" / "done"
    ready_state: Optional[str] = None

    # 错误名：若失败，等同于 DOMException.id（例如 "ConstraintError"、"TransactionInactiveError"）
    error_name: Optional[str] = None

    # （推荐补充）该 Request 会派发哪些事件（只记录枚举，避免循环依赖）
    # - IDBRequest: [success, error]
    # - IDBOpenDBRequest: [upgradeneeded, blocked, success, error]
    # 你也可以在构造时自行覆盖
    events: List[EventEnum] = field(default_factory=list)

    # （推荐补充）上下文占位：source 的接口种类（ObjectStore / Index / Cursor）；open 的请求一般没有 source
    # 例：InterfaceEnum.IDB_OBJECT_STORE / InterfaceEnum.IDB_INDEX / InterfaceEnum.IDB_CURSOR
    source_kind: Optional[InterfaceEnum] = None

    # （推荐补充）是否隶属于事务：IDBOpenDBRequest 没有事务；普通请求通常有事务
    has_transaction: Optional[bool] = None

    def __post_init__(self):
        # 默认事件集合：若没传就按 id 赋默认值
        if not self.events:
            if self.id is RequestEnum.IDB_OPEN_DB_REQUEST:
                self.events = [
                    EventEnum.UPGRADE_NEEDED,
                    EventEnum.BLOCKED,
                    EventEnum.SUCCESS,
                    EventEnum.ERROR,
                ]
                if self.has_transaction is None:
                    self.has_transaction = False
            else:
                self.events = [EventEnum.SUCCESS, EventEnum.ERROR]
                if self.has_transaction is None:
                    self.has_transaction = True

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id.value,
            "expected_result": self.expected_result.to_dict() if self.expected_result else None,
            "ready_state": self.ready_state,
            "error_name": self.error_name,
            "events": [e.value for e in self.events],                      # 补充序列化
            "source_kind": self.source_kind.value if self.source_kind else None, # 补充序列化
            "has_transaction": self.has_transaction,                             # 补充序列化
        }

    @staticmethod
    def from_dict(d: Dict[str, Any]) -> "Request":
        return Request(
            id=RequestEnum(d["id"]),
            expected_result=Type.from_dict(d["expected_result"]) if d.get("expected_result") else None,
            ready_state=d.get("ready_state"),
            error_name=d.get("error_name"),
            events=[EventEnum(x) for x in d.get("events", [])],
            source_kind=InterfaceEnum(d["source_kind"]) if d.get("source_kind") else None,
            has_transaction=d.get("has_transaction"),
        )

    # （可选）需要真正的 Event 实例时可懒加载生成，避免顶层循环 import
    def materialize_events(self):
        from schema.core.IDBEvent import Event
        return [Event(id=k, target=self.id) for k in self.events]
