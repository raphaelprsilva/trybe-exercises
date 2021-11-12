// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Kiwi', 'Abacaxi', 'Melância'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));