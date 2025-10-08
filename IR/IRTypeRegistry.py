# from typing import Dict
#
# from IR.IRType import Type
#
#
# class IRTypeRegistry:
#     def __init__(self):
#         self.types: Dict[str, Type] = {}
#
#     def register(self, id: str):
#         if id not in self.types:
#             self.types[id] = Type(id)
#
#     def get_all(self):
#         return self.types
