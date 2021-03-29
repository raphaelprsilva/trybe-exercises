let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'José'
};

for (let person in names) {
  console.log('Olá ' + names[person]);
}

let cars = {
  model: 'City',
  manufacturer: 'Honda',
  year: 2020
};

for (let index in cars) {
  console.log(index, cars[index]);
}