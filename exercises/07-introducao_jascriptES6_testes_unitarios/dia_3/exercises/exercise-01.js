const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

// 1. Teste se o retorno de sum(4, 5) é 9
// const expected = sum(4, 5);

// assert.strictEqual(expected, 9, 'Resultado esperado é 9');

// 2. Teste se o retorno de sum(0, 0) é 0
// const expectedTwo = sum(0, 0);

// assert.strictEqual(expectedTwo, 0, 'O resultado esperado é 0');

// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => {
  sum(4, "6");
}, '/^Error: parameter must be numbers$/');
