import { group, test, verify } from './lib/simple_tester';

import { somarValores, subtrairValores } from './functions';

group('Testando novo modelo aplicando matchers', () => {
  test('Soma de Valores correta', () => {
    const retornado = somarValores(2,2);
    const esperado = 4;
    verify(retornado).toBeEqual(esperado);
  });
  
  test('Subtrair valores corretamente', () => {
    const retornado = subtrairValores(2,2);
    const esperado = 0;
    verify(retornado).toBeEqual(esperado);
  });

   test('Subtrair valores erroneamente', () => {
    const retornado = subtrairValores(2,1);
    const esperado = 2;
    verify(retornado).toBeEqual(esperado);
  });
});
