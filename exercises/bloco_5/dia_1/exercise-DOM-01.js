document.getElementsByTagName('h1')[0].innerText = "Exercício 5.1 - JavaScript";

document.getElementsByTagName('p')[1].innerText = "Daqui a dois anos, eu desejo ser um dev";

let elements = document.getElementsByClassName('main-content');
elements[0].style.backgroundColor = "rgb(76,164,109)";

let centerElement = document.getElementsByClassName('center-content');
centerElement[0].style.backgroundColor = "white";

let auxiliar = document.querySelectorAll('p');
auxiliar[0].style.textTransform = "uppercase";
console.log(auxiliar);

let varAux = document.querySelectorAll('p');
