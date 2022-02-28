function somarValores(valueA, valueB) {
  return valueA + valueB;
}
const tester = (nameTeste, valorBase, comparativo) => {
  if (valorBase === comparativo) {
    console.log(`[42;1;37m Pass: [0m ${nameTeste} -> funcionou!`);
  } else {
    console.log(`[41;1;37m Fail: [0m ${nameTeste} -> falhou!`);
  }
};
tester("Soma de Valores correta", somarValores(2, 2), 4);
tester("Teste deve retornar como erro", somarValores(3, 3), 7);
//# sourceMappingURL=index.js.map
