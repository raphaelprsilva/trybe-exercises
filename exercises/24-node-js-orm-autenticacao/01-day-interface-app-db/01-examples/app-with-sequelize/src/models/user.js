const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  },
  {
    // congela o nome da tabela
    freezeTableName: true,
  });

  return User;
};

module.exports = User;