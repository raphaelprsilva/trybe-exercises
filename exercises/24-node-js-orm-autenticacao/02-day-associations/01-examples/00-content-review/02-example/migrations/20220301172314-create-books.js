'use strict';

// Para criar a tabela => npx sequelize db:migrate
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field:
          'book_id' /* Isso é para deixar explícito que o campo é em snake_case */,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_pages',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};
