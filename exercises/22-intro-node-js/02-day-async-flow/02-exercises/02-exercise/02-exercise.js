const {handleNumbers} = require('../01-exercise/handleNumbers');

const randomNumberBetween1And100 = () => Math.floor(Math.random() * 100 + 1);

const randomNumbers = Array
  .from({length: 3})
  .map(randomNumberBetween1And100);

handleNumbers(...randomNumbers)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
