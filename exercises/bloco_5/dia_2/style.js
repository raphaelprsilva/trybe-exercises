// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let addTitle = document.querySelector('.main');

let createTitle = document.createElement('h1');
createTitle.innerText = 'Exercicio 5.2 - JavaScript';

console.log(createTitle);

addTitle.appendChild(createTitle);