from typing import List

from IR.IRNodes import Identifier
from IR.layers.db_transaction.db_curd.PipeEnd import PipeEnd


class PipeFlow:
    def __init__(self, store_id: Identifier, pipe_ends: List[PipeEnd]):
        self.store_id = store_id
        self.pipe_ends = pipe_ends
        self.il_sequence = []


    def generate_il_sequence(self):
        for pe in self.pipe_ends:
            pe_il = pe.generate_il(self.store_id)
            self.il_sequence.extend(pe_il)
        return self.il_sequence

    def __len__(self):
        return len(self.pipe_ends)

