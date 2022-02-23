const { expect } = require('chai');

const sinon = require('sinon');

const subscribersMock = require('./mocks/subscriberMocks');
const connection = require('../models/connection');
const SubscriberModel = require('../models/SubscriberModel');

describe('Models', () => {
  describe('SubscriberModel', () => {
    describe('#getAll', () => {
      describe('Quando a tabela `subscriber` não tiver dados', () => {
        before(() => {
          sinon.stub(connection, 'execute').resolves([subscribersMock.empty]);
        });

        after(() => {
          connection.execute.restore();
        });

        it('- O retorno deve ser um array vazio', async () => {
          const subscribers = await SubscriberModel.getAll();

          expect(subscribers).to.be.deep.equals(subscribersMock.empty);
        });
      });

      describe('Quando a tabela `subscriber` tiver dados', () => {
        before(() => {
          sinon.stub(connection, 'execute').resolves([subscribersMock.full]);
        });
  
        after(() => {
          connection.execute.restore();
        });
  
        it('- O retorno deve ser um array de ', async () => {
          const response = await SubscriberModel.getAll();

          expect(response).to.be.deep.equal(subscribersMock.full);
        });
      });
    });

    describe('#create', () => {
      before(() => {
        sinon
          .stub(connection, 'execute')
          .resolves([{ insertId: subscribersMock.inserted.id }]);
      });

      after(() => {
        connection.execute.restore();
      });

      it('Deve retornar um objeto com os atributos `id`, `name` e `email`', async () => {
        const { name, email } = subscribersMock.inserted;

        const response = await SubscriberModel.create({ name, email });
        
        expect(response).to.deep.equal(subscribersMock.inserted);
      });
    });
  });
});