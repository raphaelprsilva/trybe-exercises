const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
console.log(rectangles);

// Dado o código abaixo, complete-o de forma que seja impressa a
// área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));

  console.log(rectangle[0]);
  console.log(rectangle[1]);

  // O forEach vai multiplicar os elementos correspondentes
  console.log(rectangle[0] * rectangle[1]);
});

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]) // altere a chamada da funcao rectangleArea
});
