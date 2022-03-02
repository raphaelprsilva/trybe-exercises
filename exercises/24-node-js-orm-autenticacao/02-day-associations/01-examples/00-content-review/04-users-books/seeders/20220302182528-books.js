module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      'Books',
      [
        {
          name: 'Livro A',
          release_year: 2020,
          number_pages: 111,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
        {
          name: 'Livro B',
          release_year: 2019,
          number_pages: 222,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
        {
          name: 'Livro C',
          release_year: 2018,
          number_pages: 333,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
        {
          name: 'Livro D',
          release_year: 2017,
          number_pages: 444,
          created_at: '2022-03-01 15:34:27',
          updated_at: '2022-03-01 15:34:27',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
