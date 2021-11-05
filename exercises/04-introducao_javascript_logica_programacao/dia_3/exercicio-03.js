let tamanhoArvore = 4;
let espaco = '';
let asterisco = '*';
let auxiliar = 4;


for (let posicao = 0; posicao < tamanhoArvore; posicao += 1) {
  for (let coluna = 0; coluna <= tamanhoArvore; coluna += 1) {
    if (coluna < auxiliar) {
      espaco = espaco + ' ';
    } else {
      espaco = espaco + asterisco;
    }
  }
  console.log(espaco);
  espaco = '';
  auxiliar -= 1;
}

