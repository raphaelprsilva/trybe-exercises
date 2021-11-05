const assert = require('assert');

const greet = (name, msg = 'Hi') => {
  return `${msg} ${name}`;
};

console.log(greet('Raphael', 'Bom dia!'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');