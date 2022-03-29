import connection from './models/connection';
import BookModel from './models/Book';

const main = async () => {
  const bookModel = new BookModel(connection);
  const books = await bookModel.getAll();
  console.log(books);
};

main();
