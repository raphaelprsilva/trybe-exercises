const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  return rightAnswers.reduce((acc, answer, index) => {
    if (answer === studentAnswers[index]) acc += 1;
    if (answer !== studentAnswers[index] && studentAnswers[index] !== 'N.A') acc += -0.5;
    if (studentAnswers[index] === 'N.A') acc += 0;
    return acc;
  }, 0);
};

const getStudentsGrade = (rightAnswers, studentAnswers, callback) => {
  const finalGrade = callback(rightAnswers, studentAnswers);
  return `A nota final do aluno é ${finalGrade}`;
};

console.log(getStudentsGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));