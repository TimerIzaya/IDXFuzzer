from schema.register.IDBEventRegister import EVENT_LIST
from schema.register.IDBOperationRegister import OPERATION_LIST
from schema.register.IDBRequestRegister import REQUEST_LIST

TotalOjbList = OPERATION_LIST + EVENT_LIST + REQUEST_LIST

id_obj_map = {o.id: o for o in TotalOjbList}

