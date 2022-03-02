// Aqui, estamos falando como vai ser a nossa tabela Users
// Nela, definimos as colunas da mesma
// Elas são: userId, firstName, lastName, age

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: { type: DataTypes.INTEGER, primaryKey: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // os campos createdAt e updatedAt não são obrigatórios
      tableName: 'Users', // A tabela será lida como Users
      underscored: true, // habilida o uso do underscore, no caso o snake_case
    }
  );

  return User;
};
