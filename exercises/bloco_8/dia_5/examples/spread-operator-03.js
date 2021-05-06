
// _____________________Cálculo do IMC_____________________________
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const patientInfo = [60, 1.75];

console.log(imc(...patientInfo));
//_________________________________________________________________

// ____________Valor Máximo e Mínimo num array_____________________
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));
// ________________________________________________________________

// ____________Exemplo de salada de frutas_________________________
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açaí', 'Leite ninho'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));