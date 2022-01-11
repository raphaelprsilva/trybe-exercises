const {handleNumbers} = require('../01-exercise/handleNumbers');

const randomNumberBetween1And100 = () => Math.floor(Math.random() * 100 + 1);

const callDoMath = async () => {
  const randomNumbers = Array
    .from({length: 3})
    .map(randomNumberBetween1And100);

  try {
    const result = await handleNumbers(...randomNumbers);
    console.log(result);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

callDoMath();
