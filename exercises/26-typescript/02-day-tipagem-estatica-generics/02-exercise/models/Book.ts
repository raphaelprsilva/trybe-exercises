import { Pool, ResultSetHeader } from 'mysql2/promise';

// Essa interface diz como queremos que seja o padrão de resposta do 'getAll'
export interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

// Vamos exportar a classe 'BookModel' pois usaremos ela em outro lugar
export default class BookModel {
  // 'connection' é uma propriedade da classe 'BookModel'
  // Ela é tipada com o tipo 'Pool' do mysql2
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // Método assíncrono 'getAll'
  // Ele deve retornar uma promise com um array no formato de Book
  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    // Tivemos que alterar o retorno
    return rows as Book[];
  }

  // Método que cria um novo livro
  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}
