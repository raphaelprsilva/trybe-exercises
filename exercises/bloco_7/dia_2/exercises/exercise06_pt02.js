// 6 - Usando o objeto criado no exercício 5, crie uma função que 
// retorne o número total de estudantes em todas as aulas.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {};

const joinLessons = Object.assign(allLessons, {lesson1, lesson2, lesson3});

const studentsAmount = (obj) => {
  const keyNumStudents = Object.keys(joinLessons);
  const studentLessonOne = Object.values(lesson1);
  const studentLessonTwo = Object.values(lesson2);
  const studentLessonThree = Object.values(lesson3);
  //const sumOfStudents = studentLessonOne[1] + studentLessonTwo[1] + studentLessonThree[1];

  let sumOfStudents = 0;
  for (let index = 1; index <= keyNumStudents.length; index += 1) {
    // sumOfStudents = `lesson${index}`['numeroEstudantes'];
    console.log(keyNumStudents[index]['numeroEstudantes']);
  }
  // console.log(keyNumStudents);
}

studentsAmount(joinLessons);