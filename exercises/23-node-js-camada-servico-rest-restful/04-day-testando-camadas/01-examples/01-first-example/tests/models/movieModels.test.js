const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no banco de dados', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1}];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  })

  describe('Quando é inserido com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      
      expect(response).to.be.a('object');
    });

    it('Tal objeto possui o id do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    })
  })
})