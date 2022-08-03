var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_simple_tester = __toModule(require("./lib/simple_tester"));
var import_functions = __toModule(require("./functions"));
(0, import_simple_tester.group)("Testando novo modelo aplicando matchers", () => {
  (0, import_simple_tester.test)("Soma de Valores correta", () => {
    const retornado = (0, import_functions.somarValores)(2, 2);
    const esperado = 4;
    (0, import_simple_tester.verify)(retornado).toBeEqual(esperado);
  });
  (0, import_simple_tester.test)("Subtrair valores corretamente", () => {
    const retornado = (0, import_functions.subtrairValores)(2, 2);
    const esperado = 0;
    (0, import_simple_tester.verify)(retornado).toBeEqual(esperado);
  });
  (0, import_simple_tester.test)("Subtrair valores erroneamente", () => {
    const retornado = (0, import_functions.subtrairValores)(2, 1);
    const esperado = 2;
    (0, import_simple_tester.verify)(retornado).toBeEqual(esperado);
  });
});
//# sourceMappingURL=index.js.map
