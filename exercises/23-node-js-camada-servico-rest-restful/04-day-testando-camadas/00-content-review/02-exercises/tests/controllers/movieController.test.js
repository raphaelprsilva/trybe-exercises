const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Função "create" - Insere um novo filme no BD (controllers/movieController)', () => {
  describe('Quando o payload informado não é válido:', async () => {
    const response = {}; // Por que a response é um objeto vazio?
    const request = {}; // Por que a request é um objeto vazio?

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      // Chamamos a função "create" do MovieService
      // Como o payload não é válido, o retorno da função é "false"
      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      // Restauramos a função "create"
      MoviesService.create.restore();
    });

    it('- O retorno deverá ter o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('- O retorno de "send" deve ter a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('Quando é inserido um filme com sucesso:', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('- O retorno deve ter o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('- O retorno de send deve ter a mensagem "Filme criado com sucesso!"', async () => {
      // console.log('request:', request);
      // console.log('response:', response);
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(
        true
      );
    });
  });
});
