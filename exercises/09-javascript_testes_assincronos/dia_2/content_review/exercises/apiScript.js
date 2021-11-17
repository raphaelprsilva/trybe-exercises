// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokePlace = document.querySelector('[data-js="jokeContainer"]');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  const result = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => jokePlace.textContent = data.joke);

  return result;
};

fetchJoke();

