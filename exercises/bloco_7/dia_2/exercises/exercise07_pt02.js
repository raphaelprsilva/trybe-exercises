// 7 - Crie uma função que obtenha o valor da chave
// de acordo com a sua posição no objeto. Por exemplo:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const getValueByNumber = (obj, position) => {
  const keys = Object.keys(obj);
  const test = keys[position];
  console.log(obj[test]);
}

getValueByNumber(lesson1, 1);