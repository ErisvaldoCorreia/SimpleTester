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
var import_chalk = __toModule(require("chalk"));
var import_functions = __toModule(require("./functions"));
let countSuccess = 0;
let countFails = 0;
const valideQue = (valorBase) => {
  const assertions = {
    sejaIgual(comparativo) {
      if (valorBase !== comparativo) {
        throw {};
      }
    }
  };
  return assertions;
};
const tester = (nameTeste, funcaoAssertiva) => {
  try {
    funcaoAssertiva();
    countSuccess++;
    console.log(`[42;1;37m PASS: [0;32m ${nameTeste}`);
    console.log(`${import_chalk.default.bgGreen.white(` PASS: `)} ${import_chalk.default.green(nameTeste)}`);
  } catch (err) {
    countFails++;
    console.log(`[41;1;37m FAIL: [0;31m ${nameTeste}`);
  }
  ;
};
const handleOutputTest = () => {
  return console.log(`[0;36m 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Sucesso: ${countSuccess}
  Falhas:  ${countFails}
  [0mFim dos Testes.[0;36m
----------------------------------------------
  `);
};
const grupoTester = (nameTeste, funcoes) => {
  countFails = 0;
  countSuccess = 0;
  console.log(`[0;36m ${nameTeste}
`);
  funcoes();
  handleOutputTest();
};
grupoTester("Testando novo modelo aplicando matchers", () => {
  tester("Soma de Valores correta", () => {
    const retornado = (0, import_functions.somarValores)(2, 2);
    const esperado = 4;
    valideQue(retornado).sejaIgual(esperado);
  });
  tester("Subtrair valores corretamente", () => {
    const retornado = (0, import_functions.subtrairValores)(2, 2);
    const esperado = 0;
    valideQue(retornado).sejaIgual(esperado);
  });
  tester("Subtrair valores erroneamente", () => {
    const retornado = (0, import_functions.subtrairValores)(2, 1);
    const esperado = 2;
    valideQue(retornado).sejaIgual(esperado);
  });
});
//# sourceMappingURL=index.js.map
