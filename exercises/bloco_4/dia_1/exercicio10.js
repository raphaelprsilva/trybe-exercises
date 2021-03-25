let custoProduto = 300;
let valorVenda = 200;
let imposto = 1.2; //20% de imposto
let lucro = valorVenda - (imposto * custoProduto);

if (custoProduto > 0 && valorVenda > 0) {
  console.log(lucro);
} else {
  console.log('Você digitou ou o custo do produto ou o valor de venda errados.');
}