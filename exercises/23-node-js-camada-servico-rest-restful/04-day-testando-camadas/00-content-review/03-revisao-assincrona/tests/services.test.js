const { expect } = require('chai');
const sinon = require('sinon');

const SubscriberModel = require('../models/SubscriberModel');
const SubscriberService = require('../services/SubscriberService');
const subscriberMocks = require('./mocks/subscriberMocks');

describe('Services', () => {
  describe('SubscriberService', () => {
    describe('#getAll', () => {
      describe('Quando a tabela `subscriber` não tiver dados', () => {
        before(() => {
          sinon.stub(SubscriberModel, 'getAll').resolves(subscriberMocks.empty);
        });

        after(() => {
          SubscriberModel.getAll.restore();
        });

        it('- O retorno deve ser um array vazio', async () => {
          const response = await SubscriberService.getAll();

          expect(response).to.be.deep.equal(subscriberMocks.empty);
        });
      });

      describe('Quando a tabela `subscriber` tiver dados', () => {
        before(() => {
          sinon.stub(SubscriberModel, 'getAll').resolves(subscriberMocks.full);
        });

        after(() => {
          SubscriberModel.getAll.restore();
        });

        it('- O retorno deve ser um array com de objetos com os `subscribers`', async () => {
          const result = await SubscriberService.getAll();

          expect(result).to.be.deep.equals(subscriberMocks.full);
        });
      });
    });

    describe('#create', async () => {
      before(() => {
        sinon
          .stub(SubscriberModel, 'create')
          .resolves(subscriberMocks.inserted);
      });

      after(() => {
        SubscriberModel.create.restore();
      });

      it('A função deve retornar um objeto com os atributos `id`, `name` e `email`', async () => {
        const { name, email } = subscriberMocks.inserted;
        const response = await SubscriberService.create({ name, email });

        expect(response).to.be.deep.equal(subscriberMocks.inserted);
      });
    });
  });
});
