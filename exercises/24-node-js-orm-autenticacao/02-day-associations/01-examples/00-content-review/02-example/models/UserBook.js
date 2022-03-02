module.exports = (sequelize, _DataTypes) => {
  // Repare que não definimos atributos para a tabela UserBook
  const UserBook = sequelize.define('UserBook', {}, { timestamps: false });

  // Apenas definimos uma associação com as tabelas: Book e User
  // Dizemos: A tabela UserBook "pertence" à vários "Users" e "Books"
  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};
