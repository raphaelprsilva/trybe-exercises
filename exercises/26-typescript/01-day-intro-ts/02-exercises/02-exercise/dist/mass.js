"use strict";
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const throwErrorMessage = (unit) => {
    throw new Error(`A unidade "${unit}" não é válida.`);
};
const convert = (value, forUnit, toUnit) => {
    if (!units.includes(forUnit))
        throwErrorMessage(forUnit);
    if (!units.includes(toUnit))
        throwErrorMessage(toUnit);
    const forIndex = units.indexOf(forUnit); // 7
    console.log('forIndex:', forIndex);
    const toIndex = units.indexOf(toUnit); // 3
    console.log('toIndex:', toIndex);
    const expoent = toIndex - forIndex; // 3 - 7 = -4
    console.log('expoent:', expoent);
    return value * Math.pow(10, expoent); // 150 * (10 ** -3) = 0,15
};
console.log(convert(150, 'cmg', 'g'));
