// escreva greet abaixo
const greet = (firstName, greeting = 'Hi') => `${greeting} ${firstName}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
