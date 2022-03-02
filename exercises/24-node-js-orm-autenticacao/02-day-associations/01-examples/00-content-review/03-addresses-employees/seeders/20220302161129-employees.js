/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(
      'Employees',
      [
        {
          first_name: 'Raphael',
          last_name: 'Silva',
          age: 28,
        },
        {
          first_name: 'Danielle',
          last_name: 'Freitas',
          age: 27,
        },
        {
          first_name: 'Rodrigo',
          last_name: 'Silva',
          age: 23,
        },
        {
          first_name: 'Valéria',
          last_name: 'Cristina',
          age: 56,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};
