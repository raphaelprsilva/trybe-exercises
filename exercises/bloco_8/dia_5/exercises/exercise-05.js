const assert = require('assert');

let myList = [1, 2, 3];

console.log(myList);

// Escreva a função swap , que dado um array de 3 elementos,
// retorna um novo array com o primeiro e terceiro elementos trocados.

const swap = ([a, b, c]) => [c, b, a];

const swappedList = swap(myList);
console.log(swappedList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);