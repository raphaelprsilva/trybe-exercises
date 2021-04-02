let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1: percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let i = 0; i < numbers.length; i+=1) {
  console.log(numbers[i]);
}
console.log("\n");

//Exercicio 2: você deve somar todos os valores contidos no array e imprimir o resultado;
let soma = 0;

for (let i = 0; i < numbers.length; i+=1) {
  soma += numbers[i];
}
console.log(soma);
console.log("\n");

//Exercicio 3: calcule e imprima a média aritmética dos valores contidos no array;
let somaEx3 = 0;
let tamanhoArray = numbers.length;
let mediaEx3;

for (let i =0; i < tamanhoArray; i+=1) {
  somaEx3 += numbers[i];
}
tamanhoArray = numbers.length;

mediaEx3 = somaEx3 / tamanhoArray;

console.log(mediaEx3);
console.log("\n");


//Exercicio 4: Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaEx3 > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}
console.log("\n");

//Exercicio 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o
let maior = numbers[0];

for (let i = 0; i < tamanhoArray; i+=1) {
  if(numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);
console.log("\n");

//Exercicio 6: Descubra quantos valores ímpares existem no array e imprima o 
//resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let a = [10, 2, 2, 24, 8];
let somaImpares = 0;

for (let i = 0; i < a.length; i+=1) {
  if((a[i] % 2) !== 0) {
    somaImpares += 1;
  }
}

if (somaImpares !== 0) {
  console.log('Existem ' + somaImpares + ' números ímpares no array');
  console.log("\n");
} else {
  console.log('Não existem números ímpares no array!');
  console.log("\n");
}


//Exercicio 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o
let minimo = a[0];

for (i = 0; i < a.length; i+=1) {
  if(minimo > a[i]) {
    minimo = a[i];
  }
}

console.log('O valor mínimo é: ' + minimo);
console.log("\n");

//Exercicio 8: Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado
let b = [];
let tamArray = 25;

for (let i = 0; i < tamArray; i+=1) {
  b[i] = i+1;
  console.log(b[i]);
}
console.log("\n");


//Exercicio 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
for(let i = 0; i < tamArray; i+=1) {
  b[i] = b[i] / 2;
  console.log(b[i]);
}

//Exercicio Bonus 1
let numA = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numA.length; i+=1) {
  for (let j = 0; j < i; j+=1) {
    if(numA[i] < numA[j]) {
      let auxiliar = numA[i];
      numA[i] = numA[j];
      numA[j] = auxiliar;
    }
  }
}

console.log(numA);

//Exercicio Bonus 3
let numB = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let k = 0; k < numB.length; k+=1) {
  if(k !== 9) {
    let aux = numB[k] * numB[k+1];
    newArray[k] = aux;
  } else {
    let aux = numB[k] * 2;
    newArray[k] = aux;
  }
}

console.log(newArray);