const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const getPeopleWithAgeLowerThan18 = (peopleArr) => {
  const getAgeLowerThan18 = ({ age }) => age < 18;
  return peopleArr.filter(getAgeLowerThan18);
};

console.log(getPeopleWithAgeLowerThan18(objPeople));
