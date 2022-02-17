const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Função "create" - Insere um novo filme no BD (services/MovieService).', () => {
  describe('Quando o payload informado não é válido:', async () => {
    const payloadMovie = {};

    it('- Deve retornar um valor do tipo "boolean"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('- O boolean deve ser "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('Quando um novo filme é inserido com sucesso:', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
    });


    after(() => {
      MoviesModel.create.restore();
    });

    it('- O retorno deve ser do tipo "object"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('- O objeto deve possuir o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe.only('Função "findById" - Retorna um filme do DB dado um "id"', () => {
  describe('Quando não existe um filme com o "id" passado:', async () => {
    before(async () => {
      // ATTENTION - Eu poderia fazer isso?
      // Ao testar, passou!
      sinon.stub(MoviesModel, 'findById').resolves(null);

      // Gabarito
      // Não entendi o por quê de ter sido feito assim
      // Por que ele simula o comportamento do "connection.execute" e não do findById?

      // const execute = [[]];
      // sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      // ATTENTION - Eu poderia fazer isso?
      MoviesModel.findById.restore();

      // Gabarito
      // connection.execute.restore();
    });

    it('- O retorno deve ser do tipo "null"', async () => {
      const result = await MoviesService.findById(1);

      expect(result).to.be.equal(null);
    });
  });

  describe('Quando existe um filme com o "id" passado:', async () => {
    const payloadMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    const MOVIE_ID = 1

    // Simulo o comportamento da função "findById" na camada models
    // E simulo o retorno dela, que no caso é um objeto: "payloadMovie"
    before(async () => {
      sinon.stub(MoviesModel, 'findById').resolves(payloadMovie);
    });

    after(async () => {
      MoviesModel.findById.restore();
    });

    it('- O retorno deve ser do tipo "object"', async () => {
      const result = await MoviesService.findById(MOVIE_ID);

      expect(result).to.be.an('object');
    });

    it('- O retorno deve ter as propriedades: "id", "title", "directedBy", "releaseYear"', async () => {
      const result = await MoviesService.findById(MOVIE_ID);

      expect(result).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
})
