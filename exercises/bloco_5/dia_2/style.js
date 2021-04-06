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

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto
let addTagP = document.querySelector('.center-content');

let createTagP = document.createElement('p');
createTagP.innerText = 'Creating a new tag <p> using querySelector, CreateElement and appendChild';

addTagP.appendChild(createTagP);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2
let createThirdDiv = document.createElement('div');
createThirdDiv.className = 'left-content';

createDiv.appendChild(createThirdDiv);

// Ex. 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2
let createRightContent = document.createElement('div');
createRightContent.className = 'right-content';

createDiv.appendChild(createRightContent);

// Ex. 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5
let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
createThirdDiv.appendChild(createImage);