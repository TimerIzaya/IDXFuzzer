from abc import ABC, abstractmethod
from IR.context.IRContext import IRContext
from IR.context.IDBSchemaContext import IDBSchemaContext
from IR.layers.Layer import Layer, LayerType

class LayerBuilder(ABC):

    name: str

    layer_type: LayerType

    @staticmethod
    @abstractmethod
    def build() -> Layer:
        pass
