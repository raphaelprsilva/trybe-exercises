const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const animals = Animals.find((animal) => {
        return animal.name === name;
      });
      if (animals) {
        return resolve(animals);
      }
      return reject('Nenhum animal com esse nome!');
    }, 300);

  });
};

const getAnimal = (name) => {
  return findAnimalByName(name).then(list => list);
};

module.exports = { getAnimal };