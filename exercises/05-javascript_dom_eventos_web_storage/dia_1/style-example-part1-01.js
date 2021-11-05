// lista de ingredientes que eu desejo adicionar dinamicamente
let ingredientItems = [
  '1 Cebola',
  '2 Dentes de alho',
  '500g de feijão',
  '200g de toucinho'
];

// este comando "traz" as informações que da classe .ingredient-list
let ingredientList = document.querySelector('.ingredient-list');

// este for vai varrer todos os itens da variavel ingredientItems
for (let index = 0; index < ingredientItems.length; index += 1) {
  // esta variavel, vai receber os itens da var ingredientItems
  let ingredient = ingredientItems[index];

  // essa variavel vai criar um elemento li e vai armazenar na variavel ingredientListItem
  let ingredientListItem = document.createElement('li');

  // a propriedade innerText vai fazer com que o conteudo da ingredient seja definido em ingredientListItem
  ingredientListItem.innerText = ingredient;

  // a propriedade className, define classe para o elemento ingredientListItem
  ingredientListItem.className = 'ingredients-list-item';

  // a propriedade appendChild, como o proprio nome diz, acrescenta um filho a um elemento
  ingredientList.appendChild(ingredientListItem);
}

// agora eu desejo remover um item especifico da minha lista, que contém a palavra "toucinho"

// crio a variavel que vai receber tudo o que o querySelectorAll obter da classe .ingredients-list-item
let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

// o for vai varrer todos os itens da lista de ingredientes
for (let index = 0; index < ingredientListItems.length; index += 1) {
  let element = ingredientListItems[index];

  // o método includes vai verificar se algum item da lista de ingredientes possui a palavra toucinho
  // se for true, o metodo removeChild remove o item
  if (element.innerText.includes('toucinho')) {
    ingredientList.removeChild(element);
  }
}