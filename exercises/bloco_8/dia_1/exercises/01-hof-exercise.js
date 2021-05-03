const newEmployees = (callback) => {
  const employees = {
    id1: callback('Raphael Pereira Silva'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro,
    id2: callback('Danielle dos Santos'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Valéria Cristina Pereira dos Santos'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const createNewEmployees = (nomeCompleto) => {
  const newName = nomeCompleto.toLocaleLowerCase().split(' ').join('_');

  const newEmployees = {
    nomeCompleto,
    email: `${newName}@trybe.com`,
  };
  return newEmployees;
};

console.log(newEmployees(createNewEmployees));

