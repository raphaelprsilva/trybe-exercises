const { expect } = require('chai');

/*
  Como ainda não temos a implementação, vamos fixar um objeto simulando os
  métodos que iremos desenvolver, porém, eles não terão nenhum comportamento.
*/

const MoviesModel = {
  create: () => {}
};

describe('Insere um novo filme no banco de dados', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

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