// Maneira tradicional de acessar elementos num array

let countries = ['Brazil', 'Germany', 'USA', 'Japan'];

/* let firstCountry = countries[0];
let secondCountry = countries[1];
let thirdCountry = countries[2];
let fouthCountry = countries[3];

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fouthCountry);
 */

//--------------------------------------------------------
// Com o array destructuring é possível fazer isso:
let newCountries = ['Brazil', 'Germany', 'USA', 'Japan'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = countries;

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);