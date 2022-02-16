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
