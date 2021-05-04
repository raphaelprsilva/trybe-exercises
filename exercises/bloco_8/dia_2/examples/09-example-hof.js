/* Exercício: A partir do array abaixo, retorne a mensagem:
  "vinho cozido, tomate cozido, cebola cozida, cogumelo cozido"
  - Exiba a string no console
*/

const ingredientes = ['vinho', 'tomate', 'cebola', 'cogumelo'];

const cookedIngredients = ingredientes.reduce((accumulator, ingredient, index, array) => {
  const correctWordGender = ingredient[ingredient.length - 1] === 'a' ? 'cozida' : 'cozido';
  const isLastItem = index === array.length - 1;
  const ingredientMessage = accumulator + `${ingredient} ${correctWordGender}`;

  return isLastItem ? ingredientMessage : `${ingredientMessage}, `;
}, '');

console.log(cookedIngredients);