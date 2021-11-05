
const fatorial = (value) => {
  return (value === 0) ? 1 : value * fatorial(value - 1);
}

console.log(fatorial(0));