const pessoa = {
  nome: 'Raphael',
  idade: '28',
  cidade: 'Uberlândia',
};

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
};

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
};

console.log(pessoaTryber);