/*
Iniciando estudos sobre processos internos dos testes unitários.
Como objetivo, iremos aplicar uma pequena estrutura que represente,
o funcionamento de um mini framework de testes.
*/

// Funções bases que serão testadas.
function somarValores(valueA: number, valueB: number) {
  return valueA + valueB;
}

// Função que será usada para realizar o teste.
const tester = (valorBase: any, comparativo: any) => {
  if(valorBase === comparativo) {
    console.log(`Oba, nosso teste passou com sucesso`);
  } else {
    console.log(`Ops. O teste falhou! verifique os valores`);
  }
}

// Executando os testes.
tester(somarValores(2,2), 4);
tester(somarValores(3,3), 7);
