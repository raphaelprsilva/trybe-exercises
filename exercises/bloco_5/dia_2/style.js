// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body
let addTitle = document.querySelector('.main');

let createTitle = document.createElement('h1');
createTitle.innerText = 'Exercicio 5.2 - JavaScript';


addTitle.appendChild(createTitle);

// Adicione a tag div com a classe main-content como filho da tag body
let addDiv = document.querySelector('.main');

let createDiv = document.createElement('div');
createDiv.className = 'main-content';

addTitle.appendChild(createDiv);

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2
let addNewDiv = document.querySelector('.main-content');

let createNewDiv = document.createElement('div');
createNewDiv.className = 'center-content';

addNewDiv.appendChild(createNewDiv);