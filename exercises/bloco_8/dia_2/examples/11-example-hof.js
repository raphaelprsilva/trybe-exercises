// count occurrences

const orders = [
  {id: '1', status: 'pendding'},
  {id: '2', status: 'cancelled'},
  {id: '3', status: 'shipped'},
  {id: '4', status: 'pendding'},
  {id: '5', status: 'pendding'},
];

let result;

// 1º maneira para encontrar
// using destructuring
result = orders.reduce((accumulator, { status }) => {
  accumulator[status] = accumulator[status] + 1 || 1;
  return accumulator;
}, {});

console.log(result);


// 2ª maneira
result = orders.reduce((accumulator, order) => {
  return {...accumulator, [order.status]: (accumulator[order.status] || 0) + 1}
}, {});

console.log(result);