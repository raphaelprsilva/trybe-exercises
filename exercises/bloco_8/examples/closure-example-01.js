// Closure
// Toda função em JS é uma closure

const lexical = 'Oi léxico';

const safe = secret => ({
  getSecret: () => secret,
});

const privateUserData = 'Dado privado';

const obj = safe(privateUserData);

console.log(obj.getSecret());