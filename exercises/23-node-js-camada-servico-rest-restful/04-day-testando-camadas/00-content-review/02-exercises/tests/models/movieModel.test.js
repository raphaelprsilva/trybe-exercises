const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Função "create" - Insere um novo filme no BD (models/movieModel).', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é um novo filme é inserido com sucesso:', async () => {
    it('- O retorno deve ser do tipo "object"', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('- O objeto deve possuir o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Função "findById" - Retorna um filme do DB dado um "id"', () => {
  describe('Quando não existe um filme com o "id" passado:', async () => {
    before(() => {
      // "execute" é o resultado após fingirmos a conexão com o banco de dados
      const execute = [[]];

      // Aqui, eu não posso fazer isso: "sinon.stub(MoviesModel, 'findById').resolves(execute)"
      // Pois o resultado seria: "[[]]"
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
      connection.execute.restore();
    });

    it('- O retorno deve ser do tipo "null"', async () => {
      // Eu não deveria passar um "id" na função "findById(id)"?
      // Testando um id = 1. Passou!
      // No gabarito está assim: "getById()" sem o "id" como parâmetro
      // Tem diferenças?
      const response = await MoviesModel.findById(1);

      expect(response).to.be.equal(null);
    });
  });

  describe('Quando existe um filme com o "id" passado corretamente:', async () => {
    const payloadMovie = {
      id: 1,
      title: 'Titanic',
      directedBy: 'James Cameron',
      releaseYear: '1998',
    };

    const MOVIE_ID = 1;

    before(() => {
      sinon.stub(MoviesModel, 'findById').resolves(payloadMovie);
    });

    after(() => {
      MoviesModel.findById.restore();
    });

    it('- O retorno deve ser do tipo "object"', async () => {
      const result = await MoviesModel.findById(MOVIE_ID);
      expect(result).to.be.a('object');
    });

    it('- O retorno não deve estar vazio', async () => {
      const result = await MoviesModel.findById(MOVIE_ID);

      expect(result).to.be.not.empty;
    });

    it('- O retorno deve conter as propriedades "id", "title", "directedBy", "releaseYear"', async () => {
      const result = await MoviesModel.findById(MOVIE_ID);

      expect(result).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
});
