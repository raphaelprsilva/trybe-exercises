let taskList = ['Tomar banho', 'Preparar café', 'Tomar café da manhã', 'Estudar'];

//Add taskList's new element
taskList.push('Passear com o cachorro');

//Remove last taskList's element
taskList.pop();

//Remove first taskList's element
taskList.shift();

//Show index of a specific position
let indexOfTask = taskList.indexOf('Preparar café');
console.log('O índice da tarefa, \"Preparar café\", é: ' + indexOfTask);

//Show all content of taskList
console.log('All elements of taskList: ' + taskList);

//Show task list length
console.log('taskList length: ' + taskList.length);

//Show content of the first position
console.log('First element of taskList: ' + taskList[0]);

//Show content of the last position
console.log('Last element of taskList: ' + taskList[taskList.length - 1]);

