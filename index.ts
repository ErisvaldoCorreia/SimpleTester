//Iniciando estudos sobre processos internos dos testes unitários.
import { somarValores, subtrairValores } from './functions';

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

// Conjunto de cores mapeadas com scape para colorir a saida do terminal
const scape = '\u001b';
const colors = {
  reset: `${scape}[0m`,
  blue: `${scape}[0;36m`,
  redBg: `${scape}[41;1;37m`,
  greenBg: `${scape}[42;1;37m`,
  green: `${scape}[0;32m`,
  red: `${scape}[0;31m`
}

// Iniciando as funções de validação e matchers
const valideQue = (baseValue: any) => {
  
  // Subconjunto de asserções (matchers) para validação
  const assertions = {

    // Matcher de igualdade.
    // Retorna um erro em caso de comparacao falsa
    sejaIgual(compare: any){
      if(baseValue !== compare) {
        throw{}; 
      } 
    }
    
  };

  return assertions;
}

// Refatorando a função tester para usar com as asserções;
const tester = (nameTest: string, compareFunction: CallableFunction) => {
  try {
    compareFunction();
    countSuccess++;
    console.log(`${colors.greenBg} PASS: ${colors.green} ${nameTest}`);
  } catch (err) {
    countFails++;
    console.log(`${colors.redBg} FAIL: ${colors.red} ${nameTest}`);
  };
}

// Função para validar total de testes e aplicar saida final
const handleOutputTest = () => {
  return console.log(`${colors.blue} 
----------------------------------------------
  Total:   ${countSuccess + countFails}
  Sucesso: ${countSuccess}
  Falhas:  ${countFails}
  ${colors.reset}Fim dos Testes.${colors.blue}
----------------------------------------------
  `);
}

// Função para agrupar os testes por grupo. Simulando Describe
const grupoTester = (nameDescribe: string, functions: CallableFunction) => {
  // usando o scape code u001b para modos stricts.
  countFails = 0;
  countSuccess = 0;
  console.log(`${colors.blue}${nameDescribe}\n`);
  functions();
  handleOutputTest();
}

// Executando os testes dentro do grupoTester com matchers aplicados.
grupoTester('Testando novo modelo aplicando matchers', () => {
  tester('Soma de Valores correta', () => {
    const retornado = somarValores(2,2);
    const esperado = 4;
    valideQue(retornado).sejaIgual(esperado);
  });
  
  tester('Subtrair valores corretamente', () => {
    const retornado = subtrairValores(2,2);
    const esperado = 0;
    valideQue(retornado).sejaIgual(esperado);
  });

   tester('Subtrair valores erroneamente', () => {
    const retornado = subtrairValores(2,1);
    const esperado = 2;
    valideQue(retornado).sejaIgual(esperado);
  });
});


/*
Modelo de estudo inicial...
criando linhas de testes isolados e linhas agrupadas sem asserções.

//Estamos recebendo um any nos tipos por conta das possibilidades.
//A comparação pode ser por função, string, number.
//VERSÃO INICIAL DO MODELO TESTER. SEM USO DE ASSERÇÕES.
//Podemos utilizar esse modelo antigo funcionamente no grupoTester
const oldTester = (nameTeste: string ,valorBase: any, comparativo: any) => {
  if(valorBase === comparativo) {
    countSuccess++;
    console.log(`\u001b[42;1;37m PASS: \u001b[0;32m ${nameTeste}`);
  } else {
    countFails++;
    console.log(`\u001b[41;1;37m FAIL: \u001b[0;31m ${nameTeste}`);
  }
}

// Executando os testes isoladamente.
oldTester('Soma de Valores correta', somarValores(2,2), 4);
oldTester('Nova Soma de Valores correta', somarValores(5,2), 7);
oldTester('Subtrair valores corretamente', subtrairValores(5,2), 3);
oldTester('Este teste deve falhar', subtrairValores(5,2), 7);
oldTester('Teste deve retornar como erro', somarValores(3,3), 7);

// Executando os testes dentro do grupoTester.
grupoTester('Testes que devem passar', () => {
  oldTester('Soma de Valores correta', somarValores(2,2), 4);
  oldTester('Subtrair valores corretamente', subtrairValores(5,2), 3);
});

grupoTester('Um teste passa e outro falha', () => {
  oldTester('Soma de Valores correta', somarValores(2,2), 4);
  oldTester('Teste deve retornar como erro', somarValores(3,3), 7);
});

Adicionando Cores ao Console.
console.log("\033[31mAqui esta o texto em vermelho.")
console.log("\033[0;32mAqui esta o texto em verde.")
console.log("\033[41;1;37m Fundo Vermelho \033[0m --> Fundo Vermelho")
console.log("\033[42;1;37m Fundo Verde \033[0m --> Fundo Verde")

em arquivos que apresentem erro de legacy octal escape, podemos subistituir
o escape 033 por u001b, assim conseguindo rodar as cores no modo strict mode.
*/
