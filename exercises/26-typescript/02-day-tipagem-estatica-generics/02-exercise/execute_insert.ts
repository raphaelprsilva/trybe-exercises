import { ResultSetHeader } from 'mysql2';
import readline from 'readline-sync';
import connection from './models/connection';

const main = async () => {
  const title = readline.question('Digite o nome do livro: ');
  const price = readline.question('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  // Ao inserir o generics '<ResultSetHeader>', o 'insertId' passa a "valer"
  // Retire o generics e veja o erro na variável
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO books (title, price, author isbn) VALUES (?, ?, ?, ?)',
    [title, price, author, isbn]
  );

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log(insertId);
};
