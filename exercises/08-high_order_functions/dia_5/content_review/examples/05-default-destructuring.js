const getNationality = ({ firstName = 'John', nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const person2 = {
  lastName: 'Doe',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
console.log(getNationality(person2));
