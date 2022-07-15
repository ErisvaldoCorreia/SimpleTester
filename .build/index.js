function somarValores(valueA, valueB) {
  return valueA + valueB;
}
function subtrairValores(valueA, valueB) {
  return valueA - valueB;
}
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
    const retornado = somarValores(2, 2);
    const esperado = 4;
    valideQue(retornado).sejaIgual(esperado);
  });
  tester("Subtrair valores corretamente", () => {
    const retornado = subtrairValores(2, 2);
    const esperado = 0;
    valideQue(retornado).sejaIgual(esperado);
  });
  tester("Subtrair valores erroneamente", () => {
    const retornado = subtrairValores(2, 1);
    const esperado = 2;
    valideQue(retornado).sejaIgual(esperado);
  });
});
const oldTester = (nameTeste, valorBase, comparativo) => {
  if (valorBase === comparativo) {
    countSuccess++;
    console.log(`[42;1;37m PASS: [0;32m ${nameTeste}`);
  } else {
    countFails++;
    console.log(`[41;1;37m FAIL: [0;31m ${nameTeste}`);
  }
};
//# sourceMappingURL=index.js.map
