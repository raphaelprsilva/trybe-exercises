"use strict";
// Arrays
let names = ['José', 'Maria', 'João'];
// Tuples ou Tuplas => Permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas. São representadas como arrays.
let fullName = ['Peter', 'Parker'];
let person = ['Mary', 25];
function printCoordinations(point) {
    console.log('Ponto x: ' + point.x);
    console.log('Ponto y: ' + point.y);
}
printCoordinations({ x: 4, y: 5 });
// Type Unions => É a união de tipos. Podem haver casos em que eu desejo que o tipo de uma variável seja ou do tipo 'number' ou do tipo 'string'.
function logCPF(cpf) {
    console.log(`Seu CPF é: ${cpf}`);
}
logCPF(10111034589);
logCPF('12332145667');
// Classes ---------------------------------------------------------------------
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Preto";
    EyeColor["Blue"] = "Azul";
    EyeColor["Green"] = "Verde";
    EyeColor["Brown"] = "Marrom";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
}
const person1 = new Person('Raphael', new Date());
person1.speak();
person1.eat();
let employee = {
    firstName: 'Raphael',
    lastName: 'Silva',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(employee.fullName());
let teacher = {
    firstName: 'Dani',
    lastName: 'Freitas',
    subject: 'Matemática',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    sayHello() {
        return `Olá, eu me chamo ${this.fullName()} 👋🏾. Leciono ${this.subject}!`;
    },
};
console.log(teacher.sayHello());
// Generics --------------------------------------------------------------------
// Vantagens: Reutilizar código; Tipar funções, classes e interfaces
function getArray(itens) {
    return new Array().concat(itens);
}
let animals = getArray(['cat', 'dog', 'turtle']);
let numbers = getArray([1, 2, 3, 4]);
animals.push('monkey');
console.log(animals);
animals.push(...numbers);
console.log(animals);
numbers.push(...[10, 20, 30, 40]);
console.log(numbers);
// No código acima, temos uma função que retorna um array concatenado a outros
// itens. Eu posso adicionar qualquer tipo de dados nos array.
// Mas, e se quiséssemos restringir e falar: desejo que essa função aceite
// apenas determinados tipos de dados, ou seja, só 'numbers' ou só 'strings'.
function getArrayWithGenerics(items) {
    return new Array().concat(items);
}
let numbers2 = getArrayWithGenerics([1, 2, 3, 4]);
numbers2.push(40);
console.log(numbers2);
let strings2 = getArrayWithGenerics([]);
strings2.push(...['a', 'b']);
console.log(strings2);
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber = processor(3, 'testando');
console.log(returnNumber);
let returnString = processIdentity('testando', 3);
console.log(returnString);
