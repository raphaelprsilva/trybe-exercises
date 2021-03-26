//minha solucao com array
let n = 3;
let arr = [];

for (let i = 0; i < n; i+=1) {
  for(let j = 0; j < n; j+=1){
    arr[i] = '*';
  }
  console.log(arr);
}

//solucao da trybe
let m = 5;
let ast = '*';
let aux = '';

for (let i = 0; i < m; i+=1) {
  aux = aux + ast;
  console.log(aux);
  }