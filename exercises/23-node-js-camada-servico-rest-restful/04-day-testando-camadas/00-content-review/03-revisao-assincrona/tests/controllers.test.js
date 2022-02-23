const { expect } = require('chai');
const sinon = require('sinon');

const SubscriberService = require('../services/SubscriberService');
const SubscriberController = require('../controllers/SubscriberController');
const subscriberMocks = require('../tests/mocks/subscriberMocks');

describe('Controllers', () => {
  describe('SubscriberController', () => {
    describe('#getAll', () => {
      describe('Quando a tabela `subscribers` não possuir dados', () => {
        const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res); // Por que a função mockada deve retornar o próprio "res"
          res.json = sinon.stub();

          sinon
            .stub(SubscriberService, 'getAll')
            .resolves(subscriberMocks.empty);
        });

        after(() => {
          SubscriberService.getAll.restore();
        });

        it('- O resultado deve chamar o `res.status` com o status 200', async () => {
          await SubscriberController.getAll(req, res);
          expect(res.status.calledWith(200)).to.be.true;
        });

        it('- O resultado deve chamar a função `res.json` com um array vazio', async () => {
          await SubscriberController.getAll(req, res);
          expect(res.json.calledWith(subscriberMocks.empty)).to.be.true;
        });
      });

      describe('Quando a tabela `subscribers` possuir dados', () => {
        const req = {};
        const res = {};

        // res.status(200).json({'...'})
        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();

          sinon
            .stub(SubscriberService, 'getAll')
            .resolves(subscriberMocks.full);
        });

        after(() => {
          SubscriberService.getAll.restore();
        });

        it('- O resultado deve chamar a função `res.status` com o status 200', async () => {
          await SubscriberController.getAll(req, res);

          expect(res.status.calledWith(200)).to.be.true;
        });

        it('- O resultado deve chamar a função `res.json` com os dados esperados', async () => {
          await SubscriberController.getAll(req, res);

          expect(res.json.calledWith(subscriberMocks.full)).to.be.true;
        });
      });
    });

    describe('#create', () => {
      const req = {};
      const res = {};

      before(() => {
        const { name, email } = subscriberMocks.inserted;
        req.body = { name, email };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();

        sinon
          .stub(SubscriberService, 'create')
          .resolves(subscriberMocks.inserted);
      });

      after(() => {
        SubscriberService.create.restore();
      });

      it('- O resultado deve chamar o `res.status` com o valor de 200', async () => {
        await SubscriberController.create(req, res);
        expect(res.status.calledWith(201)).to.be.true;
      });

      it('- O resultado deve chamar o `res.json` com o objeto cadastrado', async () => {
        await SubscriberController.create(req, res);
        expect(res.json.calledWith(subscriberMocks.inserted)).to.be.true;
      });
    });

    describe.only('#validateParams', () => {
      describe('Ao enviar um `name` vazio:', () => {
        const req = {};
        const res = {};

        before(() => {
          req.body = { name: '' };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();
        });

        after(() => {});

        it('- O `res.status` deve retornar um status 422', async () => {
          await SubscriberController.validateParams(req, res);

          expect(res.status.calledWith(422)).to.be.true;
        });

        it('- Uma mensagem "Nome é obrigatório" deve ser retornada', async () => {
          await SubscriberController.validateParams(req, res);

          expect(res.json.calledWith({ message: 'Nome é obrigatório' })).to.be
            .true;
        });
      });

      describe('Ao enviar um `email` vazio:', () => {
        const req = {};
        const res = {};

        before(() => {
          req.body = { name: 'Fulano', email: '' };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();
        });

        after(() => {});

        it('- O `res.status` deve retornar um status 422', async () => {
          await SubscriberController.validateParams(req, res);

          expect(res.status.calledWith(422)).to.be.true;
        });

        it('- Uma mensagem "Email é obrigatório" deve ser retornada', async () => {
          await SubscriberController.validateParams(req, res);

          expect(res.json.calledWith({ message: 'Email é obrigatório' })).to.be
            .true;
        });
      });

      describe('Se o `name` e `email` forem válidos', () => {
        const req = {};
        const res = {};
        const next = sinon.stub();

        before(() => {
          const { name, email } = subscriberMocks.inserted;
          req.body = { name, email };

          res.status = sinon.stub().returns(res);
          res.json = sinon.stub();
        });

        it('Deve chamar o `next`', async () => {
          await SubscriberController.validateParams(req, res, next);
          expect(next.called).to.be.true;
        });
      });
    });
  });
});
