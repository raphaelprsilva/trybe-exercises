const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const getFullNameUsingFor = (arr) => {
  let fullNames = [];

  for (let index = 0; index < arr.length; index+= 1) {
    const currentPerson = arr[index];
    const { firstName, lastName } = currentPerson;
    fullNames = [...fullNames, `${firstName} ${lastName}`];
  }

  return fullNames;
};

console.log(getFullNameUsingFor(persons));

// ---------------------------------------------------------
const getFullNamesUsingMap = (arr) => arr.map((item) => `${item.firstName} ${item.lastName}`);

console.log(getFullNamesUsingMap(persons));
