function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createMonthDays() {
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let monthDays = dezDaysList[index];
    let monthDaysListItem = document.createElement('li');

    if (monthDays === 24 || monthDays === 31) {
      monthDaysListItem.className = 'day holiday';
      monthDaysListItem.innerHTML = monthDays;
      monthDaysList.appendChild(monthDaysListItem);
    } else if (monthDays === 4 || monthDays === 11 || monthDays === 18) {
      monthDaysListItem.className = 'day friday';
      monthDaysListItem.innerHTML = monthDays;
      monthDaysList.appendChild(monthDaysListItem);
    } else if (monthDays === 25) {
      monthDaysListItem.className = 'day holiday friday';
      monthDaysListItem.innerHTML = monthDays;
      monthDaysList.appendChild(monthDaysListItem);
    } else {
      monthDaysListItem.className = 'day';
      monthDaysListItem.innerHTML = monthDays;
      monthDaysList.appendChild(monthDaysListItem);
    }
  }
};

createMonthDays();



function addButtonHoliday (strHoliday) {
  let myTasks = document.querySelector('.buttons-container');
  let inputHolidays = document.createElement('button');
  let buttonID = 'btn-holiday'

  inputHolidays.innerText = strHoliday;
  inputHolidays.id = buttonID;
  myTasks.appendChild(inputHolidays);
};

addButtonHoliday('Feriados');


function displayHolidays() {
  let getButtonHoliday = document.querySelector('#btn-holiday');
  let getAllHolidaysClass = document.querySelectorAll('.holiday'); //retorna um array, por isso preciso varrer todos os elementos com um for
  let currentBackgroundColor = 'rgb(238,238,238)';
  let setNewBackgroundColor = 'white';

  getButtonHoliday.addEventListener('click', function() {
    for(let index = 0; index < getAllHolidaysClass.length; index += 1) {
      if (getAllHolidaysClass[index].style.backgroundColor === setNewBackgroundColor) {
        getAllHolidaysClass[index].style.backgroundColor = currentBackgroundColor;
      } else {
        getAllHolidaysClass[index].style.backgroundColor = setNewBackgroundColor;
      }
    }
  });
}

displayHolidays();