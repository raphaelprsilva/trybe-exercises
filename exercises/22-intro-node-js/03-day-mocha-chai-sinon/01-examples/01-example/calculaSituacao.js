const situacaoAluno = (notaAluno) => {
  if (notaAluno >= 7) {
    return 'Aprovado';
  }
  return 'Reprovado';
};

module.exports = {
  situacaoAluno,
};

