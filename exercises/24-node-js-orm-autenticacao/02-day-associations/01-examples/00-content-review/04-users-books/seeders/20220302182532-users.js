module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
