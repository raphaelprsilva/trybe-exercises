
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de
// vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((accumulator, name) => accumulator + name, '').match(/[A-a]/g).length;
}

assert.deepStrictEqual(containsA(), 20);