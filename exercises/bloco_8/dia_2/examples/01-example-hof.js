const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

// 1. Exercício: atualizar a propriedade 'approved', inserindo 'aprovado', caso a nota seja maior
// que 60, e 'reprovado', caso contrário.
// 1.1 - Use o loop for;
// 1.2 - Use o forEach;

// 1.1 ---------------------------------------------------------------
const verifyGradesUsingFor = () => {
  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
    if (student.grade > 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Reprovado';
    }
  }
};

// verifyGradesUsingFor();
// -------------------------------------------------------------------

// 1.2 ---------------------------------------------------------------
const verifyGradesUsingForEach = () => {
  students.forEach((currentValue) => {
    const result = 
    currentValue.grade > 60 ? currentValue.approved = 'Aprovado' : currentValue.approved = 'Reprovado';
    console.log(result);
  });
};

verifyGradesUsingForEach();

console.log(students);