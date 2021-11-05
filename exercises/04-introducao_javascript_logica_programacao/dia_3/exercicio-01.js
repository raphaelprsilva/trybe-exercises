//minha solucao com array
let m = 3;
let arr2 = [];

for (let k = 0; k < m; k+=1) {
  arr2[k] = '*';
}

for (let l = 0; l < m; l+=1) {
  console.log(arr2);
}

//Solucao trybe
let n = 3;
let asterisco = '*';
let auxiliar = '';

for (let k = 0; k < n; k+=1) {
  auxiliar = auxiliar + asterisco;
}

for (let l = 0; l < n; l+=1) {
  console.log(auxiliar);
}