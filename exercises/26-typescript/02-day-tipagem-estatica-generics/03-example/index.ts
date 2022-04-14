// Arrays
let names: string[] = ['José', 'Maria', 'João'];

type FullName = [string, string];

// Tuples ou Tuplas => Permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas. São representadas como arrays.
let fullName: FullName = ['Peter', 'Parker'];
let person: [string, number] = ['Mary', 25];

// Type Aliases => Serve para tipar qualquer variável.
type Point = {
  x: number;
  y: number;
};

function printCoordinations(point: Point): void {
  console.log('Ponto x: ' + point.x);
  console.log('Ponto y: ' + point.y);
}

printCoordinations({ x: 4, y: 5 });

// Type Unions => É a união de tipos. Podem haver casos em que eu desejo que o tipo de uma variável seja ou do tipo 'number' ou do tipo 'string'.
function logCPF(cpf: number | string): void {
  console.log(`Seu CPF é: ${cpf}`);
}

logCPF(10111034589);
logCPF('12332145667');

// Classes ---------------------------------------------------------------------
enum EyeColor {
  Black = 'Preto',
  Blue = 'Azul',
  Green = 'Verde',
  Brown = 'Marrom',
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }
}

const person1 = new Person('Raphael', new Date());

person1.speak();
person1.eat();

// Interfaces => A interface também é uma maneira de tipar algo.
// É como se ela dissesse: Sua forma será essa.
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'Raphael',
  lastName: 'Silva',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(employee.fullName());

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: 'Dani',
  lastName: 'Freitas',
  subject: 'Matemática',
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Olá, eu me chamo ${this.fullName()} 👋🏾. Leciono ${this.subject}!`;
  },
};

console.log(teacher.sayHello());

// Generics --------------------------------------------------------------------
// Vantagens: Reutilizar código; Tipar funções, classes e interfaces
function getArray(itens: any[]): any[] {
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
function getArrayWithGenerics<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numbers2 = getArrayWithGenerics<number>([1, 2, 3, 4]);
numbers2.push(40);
console.log(numbers2);

let strings2 = getArrayWithGenerics<string>([]);
strings2.push(...['a', 'b']);
console.log(strings2);

// Utilizando Genrics com Interfaces e Classes ---------------------------------
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;

let returnNumber = processor(3, 'testando');
console.log(returnNumber);

let returnString = processIdentity('testando', 3);
console.log(returnString);
