"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gritar = exports.circle = exports.trapezius = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `Olá ${name}. Sua idade é ${age}`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losangle(biggerDiagonal, lowerDiagonal) {
    return (biggerDiagonal * lowerDiagonal) / 2;
}
exports.losangle = losangle;
function trapezius(biggerBase, lowerBase, height) {
    return ((biggerBase + lowerBase) * height) / 2;
}
exports.trapezius = trapezius;
function circle(radius) {
    return Math.PI * (radius ** 2);
}
exports.circle = circle;
function gritar(value) {
    if (typeof value === 'string')
        return value.toUpperCase();
    if (typeof value === 'number')
        return value.toString().toUpperCase();
}
exports.gritar = gritar;
console.log(gritar('asd'));
console.log(gritar(1));
