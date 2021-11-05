// 4 - Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const objectValues = (obj) => {
  const objValues = Object.values(obj);
  console.log(objValues);
}

objectValues(lesson1);