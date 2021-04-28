const assert = require('assert');

function division (x , y) {
  return  x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 4, 'Nove divido por 3 é 3.');
