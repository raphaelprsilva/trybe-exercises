const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const getAverage = (grade) => {
  const gradeLength = grade.length;
  const sumOfGrades = grade
    .reduce((acc, item) => acc + item, 0);
  return sumOfGrades / gradeLength;
}

const getStudensGrades = (studentsNames, studentsGrades) => {
  return studentsNames
    .map((studentsName, index) => ({
      name: studentsName,
      average: getAverage(studentsGrades[index]),
    }));
}

console.log(getStudensGrades(students, grades));