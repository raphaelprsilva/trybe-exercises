let peca = 'RAINHA';
let novaPeca = peca.toLowerCase();

if (novaPeca === 'rei') {
  console.log('O', novaPeca, 'se movimenta na horizontal, vertical e diagonal');
} else if (novaPeca === 'rainha') {
  console.log('O', novaPeca, 'se movimenta na horizontal, vertical e diagonal');
} else if (novaPeca === 'bispo') {
  console.log('O', novaPeca, 'se movimenta na diagonal');
} else if (novaPeca === 'cavalo') {
  console.log('O', novaPeca, 'se movimenta em L');
} else if (novaPeca === 'torre') {
  console.log('O', novaPeca, 'se movimenta na vertical e horizontal');
} else if (novaPeca === 'peão') {
  console.log('O', novaPeca, 'se movimenta apenas para frente');
} else {
  console.log(novaPeca, 'não é uma peça do xadres.');
}