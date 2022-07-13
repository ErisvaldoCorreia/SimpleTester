//Iniciando estudos sobre processos internos dos testes unitários.

function somarValores(valueA: number, valueB: number) {
  return valueA + valueB;
}

function subtrairValores(valueA: number, valueB: number) {
  return valueA - valueB;
}

/* 
Funções que serão usadas para realizar o teste. VERSÃO 0.0.5
Nesta modificação iremos aplicar alguns detalhes para tornar os testes
simulados mais próximos de um framework de testes reais.

Nesta função tester temos um processo de validação simples onde ao executarmos a chamada
do tester, informamos 3 parametros: 
 - o nome do teste que queremos realizar;
 - o valor ou função a ser testado;
 - o resultado que esperamos como comparativo;
*/
let countSuccess = 0;
let countFails = 0;

//Estamos recebendo um any nos tipos por conta das possibilidades.
//A comparação pode ser por função, string, number.
const tester = (nameTeste: string ,valorBase: any, comparativo: any) => {
  if(valorBase === comparativo) {
    countSuccess++;
    console.log(`\u001b[42;1;37m PASS: \u001b[0;32m ${nameTeste}`);
  } else {
    countFails++;
    console.log(`\u001b[41;1;37m FAIL: \u001b[0;31m ${nameTeste}`);
  }
}

const handleOutputTest = () => {
  return console.log(`\u001b[0;36m 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Sucesso: ${countSuccess}
  Falhas:  ${countFails}
  \u001b[0mFim dos Testes.\u001b[0;36m
----------------------------------------------
  `);
}

// Função para agrupar os testes por grupo.
const grupoTester = (nameTeste: string, funcoes: CallableFunction) => {
  // usando o scape code u001b para modos stricts.
  countFails = 0;
  countSuccess = 0;
  console.log(`\u001b[0;36m ${nameTeste}\n`);
  funcoes();
  handleOutputTest();
}

// Executando os testes isoladamente.
tester('Soma de Valores correta', somarValores(2,2), 4);
tester('Nova Soma de Valores correta', somarValores(5,2), 7);
tester('Subtrair valores corretamente', subtrairValores(5,2), 3);
tester('Este teste deve falhar', subtrairValores(5,2), 7);
tester('Teste deve retornar como erro', somarValores(3,3), 7);

// Executando os testes dentro do grupoTester.
grupoTester('Testes que devem passar', () => {
  tester('Soma de Valores correta', somarValores(2,2), 4);
  tester('Subtrair valores corretamente', subtrairValores(5,2), 3);
});

grupoTester('Um teste passa e outro falha', () => {
  tester('Soma de Valores correta', somarValores(2,2), 4);
  tester('Teste deve retornar como erro', somarValores(3,3), 7);
});

/* 
Adicionando Cores ao Console.
console.log("\033[31mAqui esta o texto em vermelho.")
console.log("\033[0;32mAqui esta o texto em verde.")
console.log("\033[41;1;37m Fundo Vermelho \033[0m --> Fundo Vermelho")
console.log("\033[42;1;37m Fundo Verde \033[0m --> Fundo Verde")

em arquivos que apresentem erro de legacy octal escape, podemos subistituir
o escape 033 por u001b, assim conseguindo rodar as cores no modo strict mode.
*/
