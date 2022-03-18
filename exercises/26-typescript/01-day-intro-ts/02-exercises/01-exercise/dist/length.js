"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const convert = (value, forUnit, toUnit) => {
    const forIndex = units.indexOf(forUnit);
    const toIndex = units.indexOf(toUnit);
    const expoent = forIndex - toIndex;
    return value * Math.pow(10, expoent);
};
exports.convert = convert;
