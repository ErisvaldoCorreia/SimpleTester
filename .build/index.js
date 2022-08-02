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
var import_functions = __toModule(require("./functions"));
let countSuccess = 0;
let countFails = 0;
const scape = "";
const colors = {
  reset: `${scape}[0m`,
  blue: `${scape}[0;36m`,
  redBg: `${scape}[41;1;37m`,
  greenBg: `${scape}[42;1;37m`,
  green: `${scape}[0;32m`,
  red: `${scape}[0;31m`
};
const valideQue = (baseValue) => {
  const assertions = {
    sejaIgual(compare) {
      if (baseValue !== compare) {
        throw {};
      }
    }
  };
  return assertions;
};
const tester = (nameTest, compareFunction) => {
  try {
    compareFunction();
    countSuccess++;
    console.log(`${colors.greenBg} PASS: ${colors.green} ${nameTest}`);
  } catch (err) {
    countFails++;
    console.log(`${colors.redBg} FAIL: ${colors.red} ${nameTest}`);
  }
  ;
};
const handleOutputTest = () => {
  return console.log(`${colors.blue} 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Sucesso: ${countSuccess}
  Falhas:  ${countFails}
  ${colors.reset}Fim dos Testes.${colors.blue}
----------------------------------------------
  `);
};
const grupoTester = (nameDescribe, functions) => {
  countFails = 0;
  countSuccess = 0;
  console.log(`${colors.blue}${nameDescribe}
`);
  functions();
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
