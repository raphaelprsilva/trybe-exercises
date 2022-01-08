const readline = require('readline-sync');

const scripts = [
  {name: 'Calcular IMC', scriptPath: '../my-scripts/imc'},
  {name: 'Calcular Velocidade Média', scriptPath: '../car-velocity/velocidade'},
  {name: 'Jogo adivinhação', scriptPath: '../guess-game/sorteio'},
];

let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

mensagem.unshift('Escolha um número para executar o script correspondente:');

mensagem = mensagem.join('\n');

const scriptIndex = readline.questionInt(mensagem) - 1;

const script = scripts[scriptIndex];

if (!script) return console.log('Número inválido. Saindo.');

require(script.scriptPath);
