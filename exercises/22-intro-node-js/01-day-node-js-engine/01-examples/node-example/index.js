const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');
const email = readline.questionEMail('Qual o seu email? ');

console.log(`Olá ${name}!\nSua idade é ${age}, correto?\nE seu email é ${email}?`);