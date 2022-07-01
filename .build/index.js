function somarValores(valueA, valueB) {
  return valueA + valueB;
}
function subtrairValores(valueA, valueB) {
  return valueA - valueB;
}
const tester = (nameTeste, valorBase, comparativo) => {
  if (valorBase === comparativo) {
    console.log(`[42;1;37m PASS: [0;32m ${nameTeste} -> funcionou!`);
  } else {
    console.log(`[41;1;37m FAIL: [0;31m ${nameTeste} -> falhou!`);
  }
};
const grupoTester = (nameTeste, funcoes) => {
  console.log(`[0;32m ${nameTeste}`);
  funcoes();
};
tester("Soma de Valores correta", somarValores(2, 2), 4);
tester("Nova Soma de Valores correta", somarValores(5, 2), 7);
tester("Subtrair valores corretamente", subtrairValores(5, 2), 3);
tester("Este teste deve falhar", subtrairValores(5, 2), 7);
tester("Teste deve retornar como erro", somarValores(3, 3), 7);
grupoTester("Testes que devem passar", () => {
  tester("Soma de Valores correta", somarValores(2, 2), 4);
  tester("Subtrair valores corretamente", subtrairValores(5, 2), 3);
});
grupoTester("Um teste passa e outro falha", () => {
  tester("Soma de Valores correta", somarValores(2, 2), 4);
  tester("Teste deve retornar como erro", somarValores(3, 3), 7);
});
//# sourceMappingURL=index.js.map
