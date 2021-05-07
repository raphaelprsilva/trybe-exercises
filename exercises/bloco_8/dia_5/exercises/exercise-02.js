const assert = require('assert');

// Crie uma função sum que dado um número variável
// de elementos retorna a soma desses elementos.

const sumNumbers = (accumulator, number) => accumulator + number;

const sum = (...numbers) => numbers.reduce(sumNumbers, 0);


assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);