const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs');

const write = require('../write');

const CONTEUDO_DO_ARQUIVO = 'Texto a ser inserido';

describe('Test write function', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('A resposta:', () => {
      it('Do tipo "string"', () => {
        const response = write('arquivo.txt', CONTEUDO_DO_ARQUIVO);

        expect(response).to.be.a('string');
      });

      it('Deve ser uma mensagem "ok"', () => {
        const response = write('arquivo.txt', CONTEUDO_DO_ARQUIVO);

        expect(response).to.be.equal('ok');
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.writeFileSync.restore();
    })

    describe('A resposta:', () => {
      it('Deve ser igual a "null"', () => {
        const response = write('arquivo_que_nao_existe.txt', CONTEUDO_DO_ARQUIVO);

        expect(response).to.be.equal(null);
      });
    });
  });
});
