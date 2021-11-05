let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i+=1) {
    console.log(groceryList[i]);
}


//Ex.1: for of
let devName = 'Raphael';

for (let letter of devName) {
    console.log(letter);
}

//Ex.2: for of
let arrOfNumbers = [10, 20, 30];

for (let sum of arrOfNumbers) {
    sum+=2;
    console.log(sum);
}

//Ex.3: for of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let show of names) {
    console.log(show);
}