const getMultiplier = (multiplier) => {
  return (aNumber) => aNumber * multiplier;
};

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log(double);