const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const personDeliver = Object.values(order.order.delivery);
  const personOrder = Object.values(order);
  const phoneNumberOrder = order.phoneNumber;
  const adressOrder = Object.values(order.address);
  console.log(`Olá ${personDeliver[0]}, entrega para: ${personOrder[0]}, telefone: ${phoneNumberOrder}, ${adressOrder[0]}, Nº ${adressOrder[1]}, AP: ${adressOrder[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);