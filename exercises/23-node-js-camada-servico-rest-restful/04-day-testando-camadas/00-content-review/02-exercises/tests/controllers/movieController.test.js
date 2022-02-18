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

describe.only('Função "findById" - Retorna um filme do DB dado um "id"', () => {
  describe('Quando não existe um filme com o "id" passado:', async () => {
    // TOTHINK - Por que dois objetos vazios?
    const response = {};
    const request = {};
    
    // Lembrar que: "const { id } = req.params";
    // Lembrar que: geralmente fazemos "res.status(404)"? em caso de não existir um filme
    // Lembrar que: "res.send(string?)" ou "res.json({})" ???
    before(() => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub().returns(response); // Por que "response" como parâmetro de "returns"?
      response.send = sinon.stub().returns(); // Por que o "returns" não recebe nenhum parâmetro? Não deveria retornar algo?

      sinon.stub(MoviesService, 'findById').resolves(null);
    });

    after(() => {
      MoviesService.findById.restore();
    });

    it('- O retorno de "res.status" deve ter o status "404"', async () => {
      // Só chamei a minha função
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('- O retorno de "res.send" deve ser uma mensagem "Not found"', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith('Not found')).to.be.equal(true);
    });
  });

  describe('Quando existe um filme com o "id" passado:', async () => {
    const response = {};
    const request = {};

    before(async () => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'findById').resolves({
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(async () => {
      MoviesService.findById.restore();
    });

    it('- O retorno de "res.status" deve ser "200"', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('- O retorno de "res.json" deve ser do tipo "object"', async () => {
      await MoviesController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});
