const hydrate = (amountOfDrinks) => {
  const numberOfDrinks = amountOfDrinks.match(/\d+/g).map(Number);
  const cupsOfWater = numberOfDrinks.reduce((sumOfCups, cup) => {
    return sumOfCups + cup;
  }, 0);
  return cupsOfWater === 1 ? `${cupsOfWater} copo de água` : `${cupsOfWater} copos de água`;
};

console.log(hydrate('1 cerveja'));

module.exports = {
  hydrate,
}