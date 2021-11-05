// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const verifyPair = (obj, key, value) => {
  const keysObj = Object.keys(obj);
  const valuesObj = Object.values(obj);
  let isValid = false;

  for (let index = 0; index < keysObj.length; index += 1) {
    if (keysObj[index] === key && valuesObj[index] === value) {
      isValid = true;
      return isValid;
    }
  }
  
  // console.log(keysObj);
  // console.log(valuesObj);
};

console.log(verifyPair(lesson1, 'numeroEstudantes', '20'));