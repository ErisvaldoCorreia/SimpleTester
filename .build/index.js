function somarValores(valueA, valueB) {
  return valueA + valueB;
}
const tester = (valorBase, comparativo) => {
  if (valorBase === comparativo) {
    console.log(`Oba, nosso teste passou com sucesso`);
  } else {
    console.log(`Ops. O teste falhou! verifique os valores`);
  }
};
tester(somarValores(2, 2), 4);
tester(somarValores(3, 3), 7);
//# sourceMappingURL=index.js.map
