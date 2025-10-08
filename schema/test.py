from schema.IDBType import InterfaceType
from schema.core.IDBRequest import Request
from schema.register.IDBOperationRegister import OPEN
from schema.register.IDBRegisterTool import id_obj_map

if __name__ == '__main__':
    open = OPEN
    print(open.id)
    ret = open.ret_type
    if isinstance(ret, InterfaceType):
        ret_id = ret.id
        print(ret_id)
        obj = id_obj_map[ret_id]
        if isinstance(obj, Request):
            req_obj = obj
            avail_events = req_obj.events
            # print(avail_events)
            success_event_id = avail_events[2]
            print(success_event_id)
            success_event = id_obj_map[success_event_id]
            # print(success_event)
            allowed_ops = success_event.allowed_ops
            # for op in allowed_ops:
            #     print(op)

            # 又到了operation
            print(id_obj_map[allowed_ops[0]])
            create_object = id_obj_map[allowed_ops[0]].id
            print(create_object)





