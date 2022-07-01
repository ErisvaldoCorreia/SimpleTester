//Iniciando estudos sobre processos internos dos testes unitários.

// Funções bases que serão testadas.
function somarValores(valueA: number, valueB: number) {
  return valueA + valueB;
}

function subtrairValores(valueA: number, valueB: number) {
  return valueA - valueB;
}

/* 
Função que será usada para realizar o teste. VERSÃO 1

Nesta função temos um processo de validação simples onde ao executarmos a chamada
do tester, informamos 3 parametros: 
 - o nome do teste que queremos realizar;
 - o valor ou função a ser testado;
 - o resultado que esperamos como comparativo;
*/
const tester = (nameTeste: string ,valorBase: any, comparativo: any) => {
  if(valorBase === comparativo) {
    console.log("\033[42;1;37m PASS: \033[0;32m" + ` ${nameTeste} -> funcionou!`);
  } else {
    console.log("\033[41;1;37m FAIL: \033[0;31m" + ` ${nameTeste} -> falhou!`);
  }
}

// Executando os testes.
tester('Soma de Valores correta', somarValores(2,2), 4);
tester('Nova Soma de Valores correta', somarValores(5,2), 7);
tester('Subtrair valores corretamente', subtrairValores(5,2), 3);
tester('Este teste deve falhar', subtrairValores(5,2), 7);
tester('Teste deve retornar como erro', somarValores(3,3), 7);

/* 
Adicionando Cores ao Console.
console.log("\033[31mAqui esta o texto em vermelho.")
console.log("\033[0;32mAqui esta o texto em verde.")
console.log("\033[41;1;37m Fundo Vermelho \033[0m --> Fundo Vermelho")
console.log("\033[42;1;37m Fundo Verde \033[0m --> Fundo Verde")
*/
