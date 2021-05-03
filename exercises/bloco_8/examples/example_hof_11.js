const pets = [
  {name: 'Boris', age: 3, gender: 'Male', type: 'Dog'},
  {name: 'Mel', age: 4, gender: 'Female', type: 'Cat'},
  {name: 'Milo', age: 8, gender: 'Male', type: 'Dog'},
  {name: 'Joana', age: 1, gender: 'Male', type: 'Cat'},
  {name: 'Jack', age: 8, gender: 'Female', type: 'Cat'},
  {name: 'Zeus', age: 4, gender: 'Female', type: 'Dog'},
  {name: 'Mariah', age: 6, gender: 'Male', type: 'Dog'},
];

// Deseja-se filtrar os cães, e mostrar a idade dos mesmos, em escala humana (idade cachorro = idade cachorro * 7)

const getDogs = ({ type }) => type === 'Dog';
const convertToHumansAge = ({ name, age }) => ({
  name,
  convertedAge: age * 7,
});

console.log(
  pets
  .filter(getDogs)
  .map(convertToHumansAge)
);