const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (studentName, studentList) => studentList
  .filter((student) => student !== studentName);

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);

console.log(newListStudents);
