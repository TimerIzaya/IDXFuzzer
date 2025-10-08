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
        self.layerStack: List[LayerPool] = []
        self.uniqueCounters: Dict[str, int] = {}

    def generateUniqueName(self, base: str) -> str:
        if base not in self.uniqueCounters:
            self.uniqueCounters[base] = -1
        self.uniqueCounters[base] += 1
        return f"{base}_{self.uniqueCounters[base]}"

    def newIndexName(self) -> str:
        return self.generateUniqueName("index")

    def newObjectStoreName(self) -> str:
        return self.generateUniqueName("objectStore")

    def newDatabaseName(self) -> str:
        return self.generateUniqueName("database")

    def newMeName(self, meName: str) -> str:
        return self.generateUniqueName(meName)

    def enterLayer(self, layer):
        self.layerStack.append(LayerPool(layer))

    def exitLayer(self) -> list[Variable]:
        return self.layerStack.pop().vars

    def registerVariable(self, var: Variable):
        assert isinstance(var, Variable), "register_variable() must be called with a Variable instance"
        self.layerStack[-1].append(var)

    def unregisterVariable(self, d: [str, Variable]):
        for layPool in self.layerStack:
            delTars = []
            for v in layPool.vars:
                # todo 卸载还是写的不明确 要改
                if isinstance(d, Variable) and d.name == v.name and d.varLiteral == v.varLiteral and d.varType == v.varType:
                    delTars.append(v)
                elif v.varLiteral == d or v.name.raw == d:
                    delTars.append(v)

            for d in delTars:
                layPool.vars.remove(d)


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
            return random.choice(candidates).id

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

    def getVariableByName(self, name: str) -> Optional[Variable]:
        candidates = []
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.name.raw == name:
                    candidates.append(v)
        if len(candidates) == 0:
            return None
        else:
            return random.choice(candidates)