const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const novaSaudacao = ['Olá', (saudacao) => console.log(saudacao)];
const [cumprimento, saudacao] = novaSaudacao;

console.log(saudacao, cumprimento);

// -----------------------------------------------------------------------
