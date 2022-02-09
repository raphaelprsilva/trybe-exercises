const { expect } = require('chai');

const checkNumber = require('./checkNumber');

describe('checkNumber function', () => {
  describe('Quando o número for maior que 0:', () => {
    describe('A resposta:', () => {
      it('É uma string', () => {
        const response = checkNumber(4);
        expect(response).to.be.a('string');
      });

      it('Deve retornar "positivo" como resposta', () => {
        const response = checkNumber(4);
        expect(response).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o número for menor que 0:', () => {
    describe('A resposta:', () => {
      it('É do tipo "string"', () => {
        const response = checkNumber(-4);
        expect(response).to.be.a('string');
      });

      it('Deve retornar "negativo" como resposta', () => {
        const response = checkNumber(-4);
        expect(response).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0:', () => {
    describe('A resposta:', () => {
      it('Deve ser do tipo "string"', () => {
        const response = checkNumber(0);
        expect(response).to.be.a('string');
      });

      it('Deve retornar "neutro" como resposta', () => {
        const response = checkNumber(0);
        expect(response).to.be.equals('neutro');
      });
    });
  });

  describe('Quando for passado um parâmetro diferente do tipo "number"', () => {
    describe('A resposta:', () => {
      it('Deve ser do tipo "string"', () => {
        const response = checkNumber('2');
        expect(response).to.be.a('string');
      });

      it('Deve conter uma mensagem "O parâmetro deve ser do tipo "number"', () => {
        const response = checkNumber('2');
        const message = 'O parâmetro deve ser do tipo "number"';
        expect(response).to.be.equals(message);
      });
    });
  });
});