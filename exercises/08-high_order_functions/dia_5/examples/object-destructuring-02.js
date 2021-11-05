const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {a: name, b: turma, c: materia} = student;

console.log(name);
console.log(turma);
console.log(materia);
console.log(student);

const showStudentDetails = ({a, b, c}) => {
  return `A ${a} estuda na ${b} e adora ${c}`;
};

console.log(showStudentDetails(student));

// -------------------------------------------------------------------
// O que eu fiz acima (linha 7), é basicamente, isso que farei abaixo:
// const name = student.a;
// const turma = student.b;
// const materia = student.c;