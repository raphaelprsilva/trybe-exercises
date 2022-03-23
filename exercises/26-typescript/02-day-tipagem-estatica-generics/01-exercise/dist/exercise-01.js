"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions = exports.Color = void 0;
var Color;
(function (Color) {
    Color["BLACK"] = "black";
    Color["WHITE"] = "white";
    Color["RED"] = "red";
    Color["SILVER"] = "silver";
})(Color = exports.Color || (exports.Color = {}));
var Door;
(function (Door) {
    Door["TWO_DOORS"] = "TWO DOORS";
    Door["FOUR_DOORS"] = "FOUR DOORS";
})(Door || (Door = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "left";
    Directions["RIGHT"] = "right";
})(Directions = exports.Directions || (exports.Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('buzina!');
    }
    openTheDoor(doors) {
        console.log(`Abrindo a porta: ${doors}`);
    }
    closeTheDoor(doors) {
        console.log(`Fechando a porta: ${doors}`);
    }
    turnOn() {
        console.log('Turn on');
    }
    turnOff() {
        console.log('Turn off');
    }
    speedUp() {
        console.log('Acelera o carro');
    }
    speedDown() {
        console.log('Desacelera o carro');
    }
    turn(direction) {
        console.log(`Vira para o lado ${direction}`);
    }
}
exports.default = Car;
