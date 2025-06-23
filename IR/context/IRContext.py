import random
from typing import List, Dict, Optional
from IR.IRNodes import Identifier, Variable
from IR.layers.Layer import Layer
from schema.SchemaClass import IDBType


class LayerPool:
    def __init__(self, layer: Layer):
        self.layer: Layer = layer
        self.vars: List[Variable] = []

    def append(self, v: Variable):
        self.vars.append(v)

class IRContext:
    def __init__(self):
        #作用域栈
        self.layerStack: List[LayerPool] = []
        self.unique_counter = 0

    def enterLayer(self, layer):
        self.layerStack.append(LayerPool(layer))

    def exitLayer(self):
        self.layerStack.pop()

    def registerVariable(self, var: Variable):
        assert isinstance(var, Variable), "register_variable() must be called with a Variable instance"
        self.layerStack[-1].append(var)

    def registerVariableLiteral(self, var: Variable, literal: str):
        var.varLiteral = literal

    def getRandomIdentifier(self, typename: IDBType) -> Identifier:
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.type.typename == typename:
                    return v.name
        raise ValueError(f"No identifier found for type {typename}")

    def getVisibleVariables(self, typename: IDBType) -> List[Variable]:
        result = []
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.varType == typename:
                    result.append(v)
        return result

    def getIdentifierByType(self, type_: IDBType) -> Optional[Identifier]:
        candidates = []
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.varType == type_:
                    candidates.append(v)
        if len(candidates) == 0:
            return None
        else:
            return random.choice(candidates).name

    def getVariableByType(self, type_: IDBType) -> Optional[Variable]:
        candidates = []
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.varType == type_:
                    candidates.append(v)
        if len(candidates) == 0:
            return None
        else:
            return random.choice(candidates)

    def generateUniqueName(self, base: str) -> str:
        name = f"{base}_{self.unique_counter}"
        self.unique_counter += 1
        return name
