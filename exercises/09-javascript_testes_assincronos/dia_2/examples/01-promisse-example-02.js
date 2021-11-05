const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]');

const validateHTTPStatus = dogData => {
  if (!dogData.ok) {
    throw new Error(`HTTP error, status ${dogData.status}`)
  }
  return dogData.json()
};

const setDogImage = ({ message: url }) => {
  dogImg.setAttribute('src', url);
};

const handleRequestError = error => {
  console.log(error.message);
};

fetch(url) // O método fetch faz uma requisição HTTP e traz o dados da url
  .then(validateHTTPStatus)
  .then(setDogImage)
  .catch(handleRequestError)