"use strict";
// import Car, { Color, Directions } from './exercise-01';
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFilter = void 0;
// const car = new Car('Volksvagen', Color.SILVER, 4);
// car.turnOn();
// car.turn(Directions.LEFT);
function myFilter(array, callback) {
    let filterdArray = [];
    for (let index = 0; index < array.length; index = index + 1) {
        if (callback(array[index])) {
            filterdArray.push(array[index]);
        }
    }
    return filterdArray;
}
exports.myFilter = myFilter;
const result = myFilter([1, 2, 3, 4, 5], (value) => value < 2);
console.log(result);
