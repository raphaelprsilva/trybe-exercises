const {expect} = require('chai');

const {situacaoAluno} = require('../calculaSituacao');

describe('calculaSituacao Tests', () => {
  it('situacaoAluno(4) should return "Reprovado"', () => {
    const response = situacaoAluno(4);
    expect(response).to.be.equal('Reprovado');
  });

  it('situacaoAluno(8) should return "Aprovado"', () => {
    const response = situacaoAluno(8);
    expect(response).to.be.equal('Aprovado');
  });

  it('situacaoAluno(7) should return "Aprovado"', () => {
    const response = situacaoAluno(7);
    expect(response).to.be.equal('Aprovado');
  });
})
