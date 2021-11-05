const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

// emailListInData.forEach((email) => showEmailList(email));

// -----------------------------------------------------------------------

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyNumber = (number) => {
  const numberTabuate = 2;
  console.log(`${number} x ${numberTabuate} = ${number * numberTabuate}`);
};

numbers.forEach(multiplyNumber);