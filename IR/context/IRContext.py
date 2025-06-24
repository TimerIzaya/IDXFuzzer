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
        self.uniqueCounters: Dict[str, int] = {
            "index": 0,
            "objectStore": 0,
            "database": 0,
            "addMe":0,
        }

    def generateUniqueName(self, base: str) -> str:
        count = self.uniqueCounters.get(base, 0)
        self.uniqueCounters[base] = count + 1
        return f"{base}_{count}"

    def newIndexName(self) -> str:
        return self.generateUniqueName("index")

    def newObjectStoreName(self) -> str:
        return self.generateUniqueName("objectStore")

    def newDatabaseName(self) -> str:
        return self.generateUniqueName("database")

    def newAddMeName(self) -> str:
        return self.generateUniqueName("addMe")

    def enterLayer(self, layer):
        self.layerStack.append(LayerPool(layer))

    def exitLayer(self) -> list[Variable]:
        return self.layerStack.pop().vars

    def registerVariable(self, var: Variable):
        assert isinstance(var, Variable), "register_variable() must be called with a Variable instance"
        self.layerStack[-1].append(var)

    @DeprecationWarning
    def unregisterVariable(self, var: Variable):
        assert isinstance(var, Variable), "unregister_variable() must be called with a Variable instance"
        delTar = None
        for layPool in self.layerStack:
            for v in layPool.vars:
                if v.varType == var.varType and v.varLiteral == var.varLiteral and v.name.raw == var.name.raw:
                    delTar = v
                    break
            if delTar:
                layPool.vars.remove(delTar)
                break

    # def unregisterVariables(self, varLiteralName: str) -> list[Variable]:
    #     ret = []
    #     for layPool in self.layerStack:
    #         delTars = []
    #         for v in layPool.vars:
    #             if v.varLiteral == varLiteralName and varLiteralName is not None:
    #                 delTars.append(v)
    #
    #         for delTar in delTars:
    #             layPool.vars.remove(delTar)
    #             ret.append(delTar)
    #     return ret


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
