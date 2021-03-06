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
// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div
createRightContent.style.marginRight = 'auto';
createDiv.appendChild(createRightContent);

// Ex. 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5
let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
createThirdDiv.appendChild(createImage);

// Ex. 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6
let elementUl = document.createElement('ul');
createRightContent.appendChild(elementUl);
let elementsUlList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dex'];


for (let index = 0; index < elementsUlList.length; index += 1) {
  let element = elementsUlList[index];
  
  let elementLi = document.createElement('li');
  elementLi.innerText = element;
  elementUl.appendChild(elementLi);
}

// Ex. 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2

let numOfTimes = 3;

for (let index = 0; index < numOfTimes; index += 1) {
  let elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show' + index;

  // Adicione a classe description nas 3 tags h3 criadas
  elementH3.className = 'description';
  createDiv.appendChild(elementH3);
}

// Parte 2

// Ex. 1 - Adicione a classe title na tag h1 criada;
createTitle.className = 'title';

// Ex. 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild()
let elementDiv = document.querySelectorAll('div')[2];
createDiv.removeChild(elementDiv);
console.log(elementDiv);

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde
let elementCenterContent = document.getElementsByClassName('center-content')[0];
elementCenterContent.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8
elementUl.lastChild.remove();
elementUl.lastChild.remove();
